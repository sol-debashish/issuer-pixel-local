<?php

namespace App\Http\Controllers\Api\V1;

use App\Jobs\UploadAudioToS3;
use App\Jobs\UploadVideoToDacast;
use App\Jobs\UploadVideoToS3;
use App\Models\ContentFolder;
use App\Models\MediaFile;
use App\Models\MediaPresenterType;
use App\Models\MediaSubjectSuggestion;
use App\Models\MediaSubType;
use App\Models\MediaType;
use App\Models\MediaUploadFormData;
use App\Models\SubjectType;
use App\Models\Video;
use App\Services\ChunkUpload\Handler\HandlerFactory;
use App\Services\ChunkUpload\Storage\ChunkStorage;
use App\Traits\Media;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Pion\Laravel\ChunkUpload\Exceptions\UploadMissingFileException;
use Pion\Laravel\ChunkUpload\Receiver\FileReceiver;
use Validator;

class MediaFileController extends BaseController
{
    use Media;
    private $videoFolder;

    public function __construct()
    {
        $this->videoFolder = config('filesystems.disks.s3.s3_env'). '/video/';
    }

    public function updateMediaFormData(Request $request)
    {
        $companyId = auth()->user()->company_id;
        MediaUploadFormData::updateOrCreate(
            ['company_id' => $companyId, 'type' => $request->media_type],
            ['data' => serialize($request->all())]
        );

        try {

            return $this->sendResponse($request->all(), 'data updated', 200);
        } catch (Exception $ex) {
            return $this->sendError('SERVER_ERROR', 'There is a problem to perform action', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getMediaFormData(Request $request)
    {
        $companyId = auth()->user()->company_id;
        $data = MediaUploadFormData::where('company_id',$companyId)->where('type',$request->type)->first();
        $result = [];
        if(null != $data)
        {
            $result = unserialize($data->data);
            if(isset($result['meta_data']['mediaPresenter']))
            {
                $mediaPresenterTypeId = explode(',',$result['meta_data']['mediaPresenter']);
                $mediaPresenter = MediaPresenterType::whereIn('id', $mediaPresenterTypeId)->get(['id', 'name']);
                $result['meta_data']['mediaPresenter'] = $mediaPresenter;
            }
            if(isset($result['meta_data']['mediaSubType']))
            {
                $mediaSubType = MediaSubType::whereId($result['meta_data']['mediaSubType'])->first(['id', 'name']);
                $result['meta_data']['mediaSubType'] = $mediaSubType;
            }
            if(isset($result['meta_data']['subjectType']))
            {
                $subjectType = explode(',',$result['meta_data']['subjectType']);
                $mediaSubjectType = SubjectType::whereIn('id',$subjectType)->get(['id', 'name']);
                $result['meta_data']['subjectType'] = $mediaSubjectType;
            }
            if(isset($result['meta_data']['publicationDate']))
            {
                $result['meta_data']['publicationDate'] = date('Y-m-d', strtotime($result['meta_data']['publicationDate']));
            }
            if(isset($result['meta_data']['recodingDate']))
            {
                $result['meta_data']['recodingDate'] = date('Y-m-d', strtotime($result['meta_data']['recodingDate']));
            }
        }
        try {

            return $this->sendResponse($result, 'data found', 200);
        } catch (Exception $ex) {
            return $this->sendError('SERVER_ERROR', 'There is a problem to perform action', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function suggestionRequest(Request $request)
    {
        try {
            $user = auth()->user();
            $validationField = [
                'explanation' => 'required',
                'reason' => 'required',
            ];

            $validator = Validator::make($request->all(),
                $validationField,
                [
                    'suggestion_explanation.required' => 'Please type your requested subject',
                    'suggestion_reason.required' => 'Please type your requested reason',
                ]);
            if ($validator->fails()) {
                $error = $validator->errors()->first();
                return $this->sendError('FIELDS_VALIDATION_ERROR', $error, Response::HTTP_UNPROCESSABLE_ENTITY);
            }

            /* need to create suggestion array */
            $suggestionData = [
                'subject' => $request->explanation,
                'reason' => $request->reason,
                'media_type' => $request->media_type,
                'created_by' => $user->id,
            ];

            $suggestion = MediaSubjectSuggestion::create($suggestionData);
            $mediaType = MediaType::find($request->media_type);
            $mediaTypeName = ucfirst($mediaType->name);
            /*send notifcation mail*/
            $to = 'byron@issuerpixel.com';
            $cc = 'david@issuerpixel.com';
            $details = [
                'email' => $user->email,
                'subject' => "$mediaTypeName Subject Suggestion #$suggestion->id  -".date('m/d/Y'),
                'title' => "{$user->name} ({$user->email}) has submitted an $mediaTypeName subject suggestion",
                'suggestion_explanation' => $request->explanation,
                'suggestion_reason' => $request->reason,
                'suggestion_id_time' => "#$suggestion->id -" . date("m/d/Y h:i:s"),
            ];
            \Illuminate\Support\Facades\Notification::route('mail', [$to, $cc])
                ->notify(new \App\Notifications\SuggestionNotificationEmailSend($details));
            /*end send notifcation mail*/

            /* activity log */
//            activity()
//                ->useLog('Add Suggestion')
//                ->performedOn($user)
//                ->causedBy($user)
//                ->log("{$user->first_name}, {$user->last_name} ({$user->email}) add a node suggestion on " . date('m/d/Y H:i:s'));
            /* end activity log */

            return $this->sendResponse([], ucfirst($request->suggestion_type) . " subject request added.", 200);

        } catch (Exception $ex) {
            return $this->sendError('SERVER_ERROR', 'There is a problem to perform action', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function upload(Request $request)
    {
        // create the file receiver
        $receiver = new FileReceiver("file", $request, HandlerFactory::classFromRequest($request), ChunkStorage::storage());
        // check if the upload is success, throw exception or return response you need
        if ($receiver->isUploaded() === false) {
            throw new UploadMissingFileException();
        }
        // receive the file
        $save = $receiver->receive();
        if ($save->isFinished()) {
            DB::beginTransaction();
            try {
                $mediaType = $this->getMediaType($request);
                if(!in_array($mediaType, ['1', '2']))
                {
                    throw new UploadMissingFileException();
                }
                $user = auth()->user();
                $companyId = $user->company_id;
                $createdBy = $user->id;

                $mediaFile = mediaFile::create([
                    'company_id' => $companyId,
                    'media_type' => $mediaType,
                    'created_by' => $createdBy,
                    'status' => 1,
                ]);
                $mediaFile->uuid = $this->getMediaUUID($mediaFile->id.$companyId);
                $mediaFile->save();

                $extension= explode('.',$request->resumableRelativePath);
                $fileName =  md5(uniqid(rand(),true)).'.'. end($extension);
                if('2' == $mediaType)
                {
                    $video  = new Video();
                    $video->media_file_id = $mediaFile->id;
                    $video->file_name = $fileName;
                    $video->linking_file_name = uniqid();
                    $video->platform = 'dacast';
                    $video->temp_path = $save->getFile()->getRealPath();
                    $video->save();
                }

                /*save file to content folder*/
                $contentFolder = ContentFolder::whereCompanyId($companyId)->where('pid', 0)->first();
                ContentFolder::create([
                    'company_id' => $companyId,
                    'id' => $companyId.random_int(1000000000, 9999999999),
                    'pid' => $contentFolder->id,
                    'name'=> $mediaFile->name ?? "Unnamed",
                    'folder_layer'=> 0,
                    'isLeaf'=> 1,
                    'delNodeDisabled'=> 1,
                    'addLeafNodeDisabled'=> 1,
                    'editNodeDisabled'=> 1,
                    'media_type' => $mediaFile->media_type,
                    'media_file_id' => $mediaFile->id,
                ]);
                /*end save file to content folder*/

                if('1' == $mediaType)
                {
                    $this->dispatch(new UploadAudioToS3($mediaFile,  $fileName, $save->getFile()->getRealPath()));
                }
                elseif('2' == $mediaType)
                {
                    $this->dispatch(new UploadVideoToS3($video, $this->videoFolder));
                    $this->dispatch(new UploadVideoToDacast($video));
                }

                /* activity log */
                activity()
                    ->useLog('Video/Audio Upload')
                    ->performedOn($user)
                    ->causedBy($user)
                    ->log("{$user->first_name}, {$user->last_name} ({$user->email}) upload a video/audio file on {$mediaFile->created_at->format('m/d/Y H:i:s')}");
                /* end activity log */
                $handler = $save->handler();
                DB::commit();
                return response()->json([
                    "done" => $handler->getPercentageDone(),
                    'status' => true,
                    'resultCode' => 200,
                ]);

            } catch (QueryException $qe) {
                DB::rollback();
                \Log::info('media file related exception: '.$qe->getMessage());
                return response()->json([
                    'status' => false,
                    'msg' => $qe->getMessage()
                ]);

            } catch (\Exception $e) {
                \Log::info('media file related exception: '.$e->getMessage());
                DB::rollback();
                return response()->json([
                    'status' => false,
                    'msg' => $e->getMessage()
                ]);
            }
        }
        $handler = $save->handler();
        return response()->json([
            "done" => $handler->getPercentageDone(),
            'status' => true
        ]);
    }

    protected function createFilename(UploadedFile $file, $filename = '')
    {
        $extension = $file->getClientOriginalExtension();
        if(! $extension){
            $extension = substr($filename, strpos($filename, '.') + 1);
        }
        // Add timestamp hash to name of the file
        return md5(uniqid(rand(),true)). "." . $extension;
    }

    protected function getMediaType($request)
    {
        $fileType = 0;
        if(null != $request->resumableType)
        {
            $type = explode('/', $request->resumableType)[0];
            if('video' == $type)
            {
                $fileType = '2';
            }
            elseif('audio' == $type)
            {
                $fileType = '1';
            }
        }
        elseif (null != $request->resumableRelativePath)
        {
            $allowVideoFileType = [
                'flv'
            ];
            $allowAudioFileType = [
                'mp3'
            ];
            $type = explode('.', $request->resumableRelativePath)[1];
            if(in_array($type, $allowVideoFileType))
            {
                $fileType = '2';
            }
            elseif(in_array($type, $allowAudioFileType))
            {
                $fileType = '1';
            }
        }
        return $fileType;
    }
}
