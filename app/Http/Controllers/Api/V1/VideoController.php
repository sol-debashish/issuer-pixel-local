<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Jobs\UploadVideoToDacast;
use App\Jobs\UploadVideoToS3;
use App\Jobs\UploadVideoToYoutube;
use App\Models\Address;
use App\Models\CategorizationLevel;
use App\Models\Company;
use App\Models\CompanyCategorizationLookup;
use App\Models\CompanyMediaTaxonomy;
use App\Models\ContentFolder;
use App\Models\Industry;
use App\Models\MediaCategorizationLookup;
use App\Models\MediaFile;
use App\Models\MediaFileViewLog;
use App\Models\MediaSubjectSuggestion;
use App\Models\MediaSubjectTypeLookup;
use App\Models\Video;
use App\Services\ChunkUpload\Handler\HandlerFactory;
use App\Services\ChunkUpload\Storage\ChunkStorage;
use App\Traits\Media;
use App\Traits\UploadTrait;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Pion\Laravel\ChunkUpload\Exceptions\UploadMissingFileException;
use Pion\Laravel\ChunkUpload\Receiver\FileReceiver;
use Validator;

class VideoController extends BaseController
{
    use UploadTrait;
    use Media;
    private $videoFolder;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct() {
        $this->videoFolder = config('filesystems.disks.s3.s3_env'). '/video/';
    }

    public function getYoutubeVideo(){
        try {

            $videos = Video::wherePlatform('youtube')->where('is_ready',1)->get(['id', 'title', 'video_id', 'created_at']);
            return $this->sendResponse($videos, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
    public function getDacastVideo(Request $request){

        try {
            $perPage = $request->get('perPage', 10);

            $folderWiseData = json_decode($request->folder_wise_media);

            if($request->folder_wise_media == 'undefined' || $request->folder_wise_media == '')
            {
                $videosQuery = MediaFile::with('subjectType')->leftJoin('videos', 'media_files.id', '=', 'videos.media_file_id')
                            ->leftJoin('media_presenter_types', 'media_files.presenter_type_id', '=', 'media_presenter_types.id')
                            ->leftJoin('media_sub_types', 'media_files.media_sub_type', '=', 'media_sub_types.id')
                            ->leftJoin('companies', 'media_files.company_id', '=', 'companies.id')
                            ->leftJoin('media_categorization_lookups', 'media_categorization_lookups.media_file_id', '=', 'media_files.id')
                            ->leftJoin('content_folders', 'media_files.id', 'content_folders.media_file_id')
                            ->select('media_files.id','media_files.uuid', 'media_files.name', 'media_files.publish_status', 'media_files.is_meta_info_completed', 'media_files.is_hierarchy_info_completed', 'video_id', 'thumb_url', 'media_files.status','media_files.view_counter', 'media_files.media_type',
                                'content_folders.id as media_content_id','companies.name as company_name','media_sub_types.name as media_sub_type_name',\DB::raw('DATE_FORMAT(media_files.created_at, "%m/%d/%Y") as publication_date'), \DB::raw('group_concat(media_categorization_lookups.id) as taxonomy_id'))
                            ->where(['platform' => 'dacast', 'media_files.company_id' => auth()->user()->company_id]);
            } else {

                $videosQuery = MediaFile::with('subjectType')
                            ->leftJoin('videos', 'media_files.id', '=', 'videos.media_file_id')
                            ->leftJoin('media_presenter_types', 'media_files.presenter_type_id', '=', 'media_presenter_types.id')
                            ->leftJoin('media_sub_types', 'media_files.media_sub_type', '=', 'media_sub_types.id')
                            ->leftJoin('companies', 'media_files.company_id', '=', 'companies.id')
                            ->leftJoin('media_categorization_lookups', 'media_categorization_lookups.media_file_id', '=', 'media_files.id')
                            ->leftJoin('content_folders', 'media_files.id', 'content_folders.media_file_id')
                            ->select('media_files.id','media_files.uuid', 'media_files.name', 'media_files.publish_status', 'media_files.is_meta_info_completed', 'media_files.is_hierarchy_info_completed', 'video_id', 'thumb_url', 'media_files.status','media_files.view_counter',
                                'media_files.media_type', 'content_folders.id as media_content_id', 'companies.name as company_name','media_sub_types.name as media_sub_type_name',\DB::raw('DATE_FORMAT(media_files.created_at, "%m/%d/%Y") as publication_date'), \DB::raw('group_concat(media_categorization_lookups.id) as taxonomy_id'))
                            ->where(['platform' => 'dacast', 'media_files.company_id' => auth()->user()->company_id])
                            ->whereIn('media_files.id', $folderWiseData);
            }

            if(request()->query_input){
                $videosQuery->where(function ($query) {
                    $videoFileIds = MediaFile::where('media_type', 2)->where('company_id' , auth()->user()->company_id)->pluck('id')->toArray();
                    $mediaFileIds1 = MediaCategorizationLookup::where('node_name', 'like', "%". request()->query_input ."%")->whereIn('media_file_id',$videoFileIds)->pluck('media_file_id')->toArray();
                    $mediaFileIds2 = MediaSubjectTypeLookup::leftJoin('subject_types', 'media_subject_type_lookups.subject_type_id', '=', 'subject_types.id')
                        ->where('subject_types.name', 'like', "%". request()->query_input ."%")
                        ->whereIn('media_file_id',$videoFileIds)->pluck('media_file_id')->toArray();

                    $mediaFileIds = array_unique (array_merge ($mediaFileIds1, $mediaFileIds2));

                    $query->where('media_files.name', 'like', "%". request()->query_input ."%")
                        ->orWhere('media_files.description', 'like', "%". request()->query_input ."%")
                        ->orWhere('media_presenter_types.name', 'like', "%". request()->query_input ."%")
//                        ->orWhere('subject_types.name', 'like', "%". request()->query_input ."%")
                        ->orWhereIn('media_files.id', $mediaFileIds);
                });
            }


            $videos = $videosQuery->groupBy('media_files.id')
                ->orderBy('media_files.id', 'DESC')
                ->paginate($perPage);

            $userId = auth()->user()->id;
            $audioResult = MediaFile::select(\DB::raw("(select count(media_files.id) from media_files where media_files.media_type=1
                    AND media_files.created_by = {$userId} AND  media_files.status != 4) AS total_audio"))->first();

            $response = [
                'pagination' => [
                    'total' => $videos->total(),
                    'per_page' => $videos->perPage(),
                    'current_page' => $videos->currentPage(),
                    'last_page' => $videos->lastPage(),
                    'from' => $videos->firstItem(),
                    'to' => $videos->lastItem()
                ],
                'data' => $videos,
                'total_audio' => (null != $audioResult) ?  $audioResult->total_audio : 0
            ];
            return $this->sendResponse($response, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getCompanyBioVideo(Request $request){

        $company = Company::whereSlugName($request->slug)->first();
        try {
            $perPage = $request->get('perPage', 10);
            $videosQuery = MediaFile::with('subjectType')->leftJoin('videos', 'media_files.id', '=', 'videos.media_file_id')
                ->leftJoin('companies', 'media_files.company_id', '=', 'companies.id')
                ->leftJoin('media_categorization_lookups', 'media_categorization_lookups.media_file_id', '=', 'media_files.id')
                ->select('media_files.id','media_files.uuid', 'media_files.name', 'media_files.publish_status', 'video_id', 'media_files.status','media_files.view_counter',
                    'companies.name as company_name',\DB::raw('DATE_FORMAT(media_files.created_at, "%m/%d/%Y") as publication_date'), \DB::raw('group_concat(media_categorization_lookups.id) as taxonomy_id'))
                ->where(['platform' => 'dacast', 'media_files.company_id' => $company->id, 'media_files.is_meta_info_completed' => 1, 'media_files.is_hierarchy_info_completed' => 1, 'media_files.status' => 2]);

            if(request()->query_input){
                $videosQuery->where(function ($query) use($company){
                    $videoFileIds = MediaFile::where('media_type', 2)->where('company_id' , $company->id)->pluck('id')->toArray();
                    $mediaFileIds1 = MediaCategorizationLookup::where('node_name', 'like', "%". request()->query_input ."%")->whereIn('media_file_id',$videoFileIds)->pluck('media_file_id')->toArray();
                    $mediaFileIds2 = MediaSubjectTypeLookup::leftJoin('subject_types', 'media_subject_type_lookups.subject_type_id', '=', 'subject_types.id')
                        ->where('subject_types.name', 'like', "%". request()->query_input ."%")
                        ->whereIn('media_file_id',$videoFileIds)->pluck('media_file_id')->toArray();

                    $mediaFileIds = array_unique (array_merge ($mediaFileIds1, $mediaFileIds2));

                    $query->where('media_files.name', 'like', "%". request()->query_input ."%")
                        ->orWhereIn('media_files.id', $mediaFileIds);
                });
            }


            $videos = $videosQuery->groupBy('media_files.id')
                ->orderBy('media_files.id', 'DESC')
                ->paginate($perPage);

            $response = [
                'pagination' => [
                    'total' => $videos->total(),
                    'per_page' => $videos->perPage(),
                    'current_page' => $videos->currentPage(),
                    'last_page' => $videos->lastPage(),
                    'from' => $videos->firstItem(),
                    'to' => $videos->lastItem()
                ],
                'data' => $videos,
            ];
            return $this->sendResponse($response, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function step1Edit(Request $request, $mediaFileId)
    {
        try {
            $data = Industry::leftJoin('media_categorization_lookups', 'media_categorization_lookups.industry_id', '=', 'industries.id')
                ->where(['media_categorization_lookups.company_id'=> auth()->user()->company_id,
                    'media_categorization_lookups.media_file_id' => $mediaFileId,
                    'industries.status' => 1, 'industries.publish_status' => 1
                ])
                ->select('industries.id', 'industries.description', 'media_categorization_lookups.id as lookup_id','company_last_level')->get()->toArray();

            $result = uniqueSameHierarchyData($data, 'lookup_id');
            return $this->sendResponse($result, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
    public function step1Update(Request $request, $id){

        $categorizationLevelArray = CategorizationLevel::pluck('name', 'id')->toArray();
        $categorizationLevelString = implode(',', $categorizationLevelArray);

        $validator = Validator::make($request->all(), [
            'node_type' => "required|in:$categorizationLevelString",
            'node_id' => 'required',
            'media_file_id' => 'required',
        ]);

        if ($validator->fails()) {
            $error = $validator->errors();
            return $this->sendError('FIELDS_VALIDATION_ERROR', $error, Response::HTTP_UNPROCESSABLE_ENTITY);
        }
        try {
            MediaCategorizationLookup::where(['company_id'=> auth()->user()->company_id, 'id'=> $request->id, 'media_file_id'=> $request->media_file_id])
                ->update(['categorization_level_id' => array_search($request->node_type, $categorizationLevelArray), 'node_id' => $request->node_id,'industry_id' => $request->industry_id]);

            $currentCompanyMediaTaxonomy = CompanyMediaTaxonomy::where('media_taxonomy_id',$request->id);
            $companyMediaTaxonomy= CompanyMediaTaxonomy::where('company_taxonomy_id', $currentCompanyMediaTaxonomy->first()->company_taxonomy_id);
            if($companyMediaTaxonomy->count() == 1)
            {
                CompanyCategorizationLookup::where('id', $currentCompanyMediaTaxonomy->first()->company_taxonomy_id)->delete();
            }
            $currentCompanyMediaTaxonomy->delete();
            /*taxonomy functionality*/
            $this->companyMediaTaxonomyAdd($request->id, auth()->user()->company_id, $request->media_file_id);
            /*End*/

            return $this->sendResponse([], 'Successfully updated');
        } catch (QueryException $qe) {
            \Log::info('Audio taxonomy Update related exception' . $qe->getMessage());
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        } catch (\Exception $e) {
            \Log::info('Audio taxonomy Update related exception' . $e->getMessage());
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }

    }
    public function step2Edit(Request $request, $mediaUuidId)
    {
        try {
            $mediaFile = mediaFile::with([
                'mediaPresenter',
                'mediaSubType' => function($mstq){
                    $mstq->where('media_type_id', 2)->select('id', 'name', 'tag');
                },
                'subjectType'
            ])->whereUuid($mediaUuidId)->whereCompanyId(auth()->user()->company_id)->first();

            return $this->sendResponse($mediaFile, 'successfully found');
        } catch (Exception $ex) {
            return $this->sendError('error', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function step2Update(Request $request, $mediaUuidId){

        $afterDate =date_format(date_create("1970-01-01") ,"Y-m-d");
        $beforeDate = date('Y-m-d');
        $user = auth()->user();
        try {
            $mediaFile = mediaFile::whereUuid($mediaUuidId)->whereCompanyId($user->company_id)->first();

            $validateArray = [
                'name' => 'required',
                'publicationDate' => "required|date_format:Y-m-d|after_or_equal:$afterDate|before_or_equal:$beforeDate",
                'recodingDate' => "required|date_format:Y-m-d|after_or_equal:$afterDate|before_or_equal:$beforeDate",
                'mediaPresenter' => 'required',
                'mediaSubType' => 'required',
                'description' => 'required',
            ];

            if($request->showOtherMediaPresenterField){
                $validateArray['otherMediaPresenter'] = 'required';
            }
            $validator = Validator::make($request->all(),
                $validateArray
                , [
                    'name.required' => 'Video title required',
                    'mediaPresenter.required' => 'Video presenter required',
                    'subjectType.required' => 'Subject of Company Video required',
                    'description.required' => 'Video description required',
                ]);
            if($validator->fails()){
                $error  = $validator->errors()->first();
                return $this->sendError('FIELDS_VALIDATION_ERROR', $error, Response::HTTP_UNPROCESSABLE_ENTITY);
            }
            $mediaFile->name = $request->name;
            $mediaFile->publication_date = $request->publicationDate;
            $mediaFile->published_day = $request->publishDay;

            $mediaFile->recording_date = $request->recodingDate;
            $mediaFile->recording_day = $request->recodingDay;

//            $mediaFile->presenter_type_id = $request->mediaPresenter;
            $mediaFile->other_media_presenter = $request->otherMediaPresenter ?? '';
            $mediaFile->media_sub_type = $request->mediaSubType;
//            $mediaFile->subject_type_id = $request->subjectType;
            $mediaFile->podcast_guest = $request->podcastGuest ?? null;
            $mediaFile->podcast_series_name = $request->podcastSeriesName ?? null;
            $mediaFile->description = $request->description;
            $mediaFile->is_meta_info_completed = 1;
            $mediaFile->save();

            /*update media file name in content folder*/
            $contentFolderData = ContentFolder::where('media_file_id', $mediaFile->id)->first();
            $contentFolderData->name = $mediaFile->name;
            $contentFolderData->save();
            /*end update media file name in content folder*/

            /*multiple presenter*/
            $mediaPresenterTypes = [];
            if ($request->mediaPresenter) {
                $mediaPresenterIds = explode(',', $request->mediaPresenter);
                foreach($mediaPresenterIds as $mediaPresenter){
                    $mediaPresenterTypes[$mediaPresenter] = ['company_id' => $user->company_id];
                }
            }
            $mediaFile->mediaPresenter()->sync($mediaPresenterTypes);
            /*multiple subject type*/
            $subjectTypes = [];
            if ($request->subjectType) {
                $subjectTypeIds = explode(',', $request->subjectType);
                foreach($subjectTypeIds as $subjectType){
                    $subjectTypes[$subjectType] = ['company_id' => $user->company_id];
                }
            }
            $mediaFile->subjectType()->sync($subjectTypes);

            /* activity log */
            activity()
                ->useLog('Edit Video Content')
                ->performedOn($user)
                ->causedBy($user)
                ->log("{$user->first_name}, {$user->last_name} ({$user->email}) edit video content on ".date('m/d/Y H:i:s'));
            /* end activity log */

            return $this->sendResponse([], 'successfully updated');
        } catch (Exception $ex) {
            return $this->sendError('error', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }

    }

    public function infoUpdate(Request $request, $mediaUuidId){
        $afterDate =date_format(date_create("1970-01-01") ,"Y-m-d");
        $beforeDate = date('Y-m-d');
        $user = auth()->user();
        DB::beginTransaction();
        try {
            $mediaFile = mediaFile::whereUuid($mediaUuidId)->whereCompanyId($user->company_id)->first();

            $validateArray = [];
            if($request->publicationDate){
                $validateArray['publicationDate'] = "date_format:Y-m-d|after_or_equal:$afterDate|before_or_equal:$beforeDate";
            }
            if($request->recodingDate){
                $validateArray['recodingDate'] = "date_format:Y-m-d|after_or_equal:$afterDate|before_or_equal:$beforeDate";
            }

            if(count($validateArray)){
                $validator = Validator::make($request->all(),
                    $validateArray
                );
                if($validator->fails()){
                    $error  = $validator->errors()->first();
                    return $this->sendError('FIELDS_VALIDATION_ERROR', $error, Response::HTTP_UNPROCESSABLE_ENTITY);
                }
            }

            $mediaFile->name = $request->name;
            $mediaFile->publication_date = $request->publicationDate;
            $mediaFile->published_day = $request->publishDay;

            $mediaFile->recording_date = $request->recodingDate;
            $mediaFile->recording_day = $request->recodingDay;

//            $mediaFile->presenter_type_id = $request->mediaPresenter;
            $mediaFile->other_media_presenter = $request->otherMediaPresenter ?? '';
            $mediaFile->media_sub_type = $request->mediaSubType;
//            $mediaFile->subject_type_id = $request->subjectType;
            $mediaFile->podcast_guest = $request->podcastGuest ?? null;
            $mediaFile->podcast_series_name = $request->podcastSeriesName ?? null;
            $mediaFile->description = $request->description;
            $mediaFile->save();

            /*update media file name in content folder*/
            $contentFolderData = ContentFolder::where('media_file_id', $mediaFile->id)->first();
            $contentFolderData->name = $mediaFile->name;
            $contentFolderData->save();
            /*end update media file name in content folder*/

            /*multiple presenter*/
            $mediaPresenterTypes = [];
            if ($request->mediaPresenter) {
                $mediaPresenterIds = explode(',', $request->mediaPresenter);
                foreach($mediaPresenterIds as $mediaPresenter){
                    $mediaPresenterTypes[$mediaPresenter] = ['company_id' => $user->company_id];
                }
            }
            $mediaFile->mediaPresenter()->sync($mediaPresenterTypes);
            /*multiple subject type*/
            $subjectTypes = [];
            if ($request->subjectType) {
                $subjectTypeIds = explode(',', $request->subjectType);
                foreach($subjectTypeIds as $subjectType){
                    $subjectTypes[$subjectType] = ['company_id' => $user->company_id];
                }
            }
            $mediaFile->subjectType()->sync($subjectTypes);
            $response = [
                'status' => true,
                'msg' => "Successfully updated"
            ];

            if($request->has('name') && !empty($request->input('name')) &&
                $request->has('publicationDate') && !empty($request->input('publicationDate')) &&
                $request->has('recodingDate') && !empty($request->input('recodingDate'))  &&
                $request->has('mediaPresenter') && !empty($request->input('mediaPresenter'))  &&
                $request->has('mediaSubType') && !empty($request->input('mediaSubType'))  &&
                $request->has('subjectType') && !empty($request->input('subjectType'))  &&
                $request->has('description') && !empty($request->input('description'))
            ) {
                $mediaFile->is_meta_info_completed = 1;
                $mediaFile->save();
            }

            DB::commit();
            return $this->sendResponse($response, 'successfully updated');
        } catch (Exception $ex) {
            DB::rollback();
            return $this->sendError('error', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }

    }

    public function formValidate(Request $request){

        $afterDate =date_format(date_create("1970-01-01") ,"Y-m-d");
        $beforeDate = date('Y-m-d');
        try {
            $validator = Validator::make($request->all(), [
                /*'categorizationLevel' => 'required',
                'categorizationNodeId' => 'required',*/
                'name' => 'required',
                'publicationDate' => "required|date_format:Y-m-d|after_or_equal:$afterDate|before_or_equal:$beforeDate",
                'recodingDate' => "required|date_format:Y-m-d|after_or_equal:$afterDate|before_or_equal:$beforeDate",
                'mediaPresenter' => 'required',
                'mediaSubType' => 'required',
                'subjectType' => 'required',
                'description' => 'required',
                'lookupId' => 'required',
            ], [
                'name.required' => 'Video title required',
                'mediaPresenter.required' => 'Video presenter required',
//                'videoCoverType.required' => 'Select video for Product or Service?',
//                'mediaSubType.required' => 'Video sub type required',
                'subjectType.required' => 'Subject of Company Video required',
                'description.required' => 'Video description required',
            ]);
            if($validator->fails()){
                $error  = $validator->errors()->first();
                return $this->sendError('FIELDS_VALIDATION_ERROR', $error, Response::HTTP_UNPROCESSABLE_ENTITY);
            }

            return $this->sendResponse([], 'successfully validate');
        } catch (Exception $ex) {
            return $this->sendError('error', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function mediaUpload(Request $request) {
        // create the file receiver
        $receiver = new FileReceiver("file", $request, HandlerFactory::classFromRequest($request));
        // check if the upload is success, throw exception or return response you need
        if ($receiver->isUploaded() === false) {
            throw new UploadMissingFileException();
        }
        // receive the file
        $save = $receiver->receive();
        // check if the upload has finished (in chunk mode it will send smaller files)
        if ($save->isFinished()) {
            // save the file and return any response you need, current example uses `move` function. If you are
            // not using move, you need to manually delete the file by unlink($save->getFile()->getPathname())
            //return $this->saveFile($save->getFile());

            DB::beginTransaction();
            try {
//                $roadshow_address_id = null;
//                if($request->subjectTypeTag == 'roadshow')
//                {
//                    $address = (new Address())->create([
//
//                        'city' => $request->city,
//                        'state_id' => $request->state,
//                        'country_code' => $request->country
//                    ]);
//                    $roadshow_address_id = $address->id;
//                }

                $user = auth()->user();
                $companyId = $user->company_id;
                $createdBy = $user->id;

//                $customSubjectType = false;
//                if(Str::contains($request->subjectType, 'suggested'))
//                {
//                    $customSubjectType = true;
//                }
                $mediaFile = mediaFile::create([
                    'company_id' => $companyId,
                    'name' => $request->name,
                    'media_type' => 2,
                    'publication_date' => $request->publicationDate,
                    'published_day' => $request->publishDay,
                    'recording_date' => $request->recodingDate,
                    'recording_day' => $request->recodingDay,
//                    'presenter_type_id' => $request->mediaPresenter,
                    'other_media_presenter' => $request->otherMediaPresenter ?? '',
                    'media_sub_type' => $request->mediaSubType,
//                    'subject_type_id' => $customSubjectType ? null : $request->subjectType,
//                    'cover_type' => $request->videoCoverType ?? null,
                    'podcast_guest' => $request->podcastGuest ?? null,
                    'podcast_series_name' => $request->podcastSeriesName ?? '',
                    'description' => $request->description,
                    'investment_bank_hosted' => 0,
                    'created_by' => $createdBy,
                    'status' => 1,
                ]);
                $mediaFile->uuid = $this->getMediaUUID($mediaFile->id);
                $mediaFile->save();

                /*multiple presenter*/
                $mediaPresenterTypes = [];
                if ($request->mediaPresenter) {
                    $mediaPresenterIds = explode(',', $request->mediaPresenter);
                    foreach($mediaPresenterIds as $mediaPresenter){
                        $mediaPresenterTypes[$mediaPresenter] = ['company_id' => $user->company_id];
                    }
                }
                $mediaFile->mediaPresenter()->sync($mediaPresenterTypes);

                /*multiple subject type*/
                $subjectTypes = [];
                if ($request->subjectType) {
                    $subjectTypes = explode(',', $request->subjectType);
                }
                $mediaFile->subjectType()->attach($subjectTypes, ['company_id' => $companyId]);

                /*code to add taggable subject type*/
//                if($customSubjectType)
//                {
//                    MediaSubjectSuggestion::create([
//                        'subject' => str_replace('_suggested', "",$request->subjectType),
//                        'media_type' => 2,
//                        'media_file_id' => $mediaFile->id,
//                        'created_by' => $createdBy,
//                    ]);
//                }
                /*end code to add taggable subject type*/
                /*taxonomy functionality*/
                $this->companyMediaTaxonomyAdd($request->lookupId, $companyId, $mediaFile->id);

                /*End*/

                $fileName = $this->createFilename($save->getFile(), $request->resumableRelativePath);
                //$title = $request->title ?? substr($fileName, 0, strrpos($fileName, "."));
                $video  = new Video();
                //$video->user_id = 1;
                $video->media_file_id = $mediaFile->id;
                $video->file_name = $fileName;
                $video->linking_file_name = uniqid();
                $video->platform = 'dacast';
                $video->temp_path = $save->getFile()->getRealPath();
                $video->save();
                //            \Log::info($video->mediaFile);
                $this->dispatch(new UploadVideoToS3($video, $this->videoFolder));
//                if('youtube' == $request->type){
//                    $this->dispatch(new UploadVideoToYoutube($video));
//                }
                if('dacast' == $request->type){
                    $this->dispatch(new UploadVideoToDacast($video));
                }
                $handler = $save->handler();
                /* activity log */
                activity()
                    ->useLog('Video Upload')
                    ->performedOn($user)
                    ->causedBy($user)
                    ->log("{$user->first_name}, {$user->last_name} ({$user->email}) upload a video file on {$mediaFile->created_at->format('m/d/Y H:i:s')}");
                /* end activity log */

                DB::commit();
                return response()->json([
                    "done" => $handler->getPercentageDone(),
                    'status' => true,
                    'resultCode' => 200,
                ]);

            } catch (QueryException $qe) {
                DB::rollback();
                \Log::info('media file related exception'.$qe->getMessage());
                return response()->json([
                    'status' => false,
                    'msg' => $qe->getMessage()
                ]);

            } catch (\Exception $e) {
                \Log::info('media file related exception'.$e->getMessage());
                DB::rollback();
                return response()->json([
                    'status' => false,
                    'msg' => $e->getMessage()
                ]);
            }
        }
        // we are in chunk mode, lets send the current progress
        /** @var AbstractHandler $handler */
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
    public function getVideoDetailsInfo(Request $request){
        try {
            $mediaFile = MediaFile::where('uuid',$request->video_id)->where('media_type', 2)->first();
            if(null == $mediaFile)
            {
                return $this->sendError('MODEL_NOT_FOUND', 'Item Not found', Response::HTTP_UNPROCESSABLE_ENTITY);
            }
            if(! $mediaFile->publish_status)
            {
                if(auth('sanctum')->check() && (auth('sanctum')->user()->company_id != $mediaFile->company_id))
                {
                    $status = 'login_unpublished';
                    return $this->sendResponse(['status' => $status], 'File not publish.', 200);
                }
                elseif(! auth('sanctum')->check()){
                    $status = 'non_login_unpublished';
                    return $this->sendResponse(['status' => $status], 'File not publish.', 200);
                }
            }

            $uuid = $request->video_id;
            $videosQuery = MediaFile::with(['subjectType','mediaPresenter', 'video' => function($q){
                $q->select('id', 'video_id', 'media_file_id');
            }])
                ->leftJoin('media_sub_types', 'media_files.media_sub_type', '=', 'media_sub_types.id')
                ->leftJoin('companies', 'media_files.company_id', '=', 'companies.id')
                ->leftJoin('media_categorization_lookups', 'media_categorization_lookups.media_file_id', '=', 'media_files.id')
                ->select('media_files.id', 'media_files.name','media_files.description', 'media_files.other_media_presenter', 'media_files.publish_status', 'media_sub_types.name as media_sub_type', 'media_files.status','media_files.view_counter',
                    'companies.id as company_id', 'companies.name as company_name','companies.uuid as company_uuid','companies.slug_name as company_slug',\DB::raw('DATE_FORMAT(media_files.created_at, "%Y-%m-%d %H:%i:%s") as publication_date'), \DB::raw('group_concat(media_categorization_lookups.id) as taxonomy_id'))
                ->where(['media_files.uuid'=>$uuid]);

            $video = $videosQuery->groupBy('media_files.id')
                ->orderBy('media_files.id', 'DESC')->first();
            $video['publication_date'] = Carbon::parse($video->publication_date)->diffForHumans();
            $response = [
                'data' => $video
            ];
            $mediaFile->increment('view_counter');
            MediaFileViewLog::create([
                'media_type' => $mediaFile->media_type,
                'media_id' => $mediaFile->id,
                'company_id' => $mediaFile->company_id,
            ]);
            return $this->sendResponse($response, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
    public function getOtherVideoByCompany(Request $request){
        $companyId = MediaFile::where('uuid',$request->video_uuid)->pluck('company_id')->first();
        try {
            $videos = MediaFile::leftJoin('videos', 'media_files.id', '=', 'videos.media_file_id')
                ->leftJoin('companies', 'media_files.company_id', '=', 'companies.id')
                ->select('companies.slug_name as company_slug','media_files.id','media_files.name','media_files.view_counter','media_files.uuid','media_files.created_at','video_id')
                ->where(['platform' => 'dacast', 'media_files.company_id' => $companyId,'media_files.status' => 2,'media_files.is_meta_info_completed' => 1,'media_files.is_hierarchy_info_completed' => 1])->groupBy('media_files.id')
                ->where('media_files.uuid', '!=', $request->video_uuid)
                ->orderBy('media_files.id', 'DESC')->get();

            foreach($videos as $key => $video)
            {
                $videos[$key]['created'] = Carbon::parse($video->created_at)->diffForHumans();
            }
            $response = [
                'data' => $videos
            ];
            return $this->sendResponse($response, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function newUpload(Request $request)
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
                $user = auth()->user();
                $companyId = $user->company_id;
                $createdBy = $user->id;

                $mediaFile = mediaFile::create([
                    'company_id' => $companyId,
                    'media_type' => 2,
                    'created_by' => $createdBy,
                    'status' => 1,
                ]);
                $mediaFile->uuid = $this->getMediaUUID($mediaFile->id);
                $mediaFile->save();


                $fileName = $this->createFilename($save->getFile(), $request->resumableRelativePath);
                $video  = new Video();
                $video->media_file_id = $mediaFile->id;
                $video->file_name = $fileName;
                $video->linking_file_name = uniqid();
                $video->platform = 'dacast';
                $video->temp_path = $save->getFile()->getRealPath();
                $video->save();

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

                $this->dispatch(new UploadVideoToS3($video, $this->videoFolder));
                $this->dispatch(new UploadVideoToDacast($video));
                $handler = $save->handler();
                /* activity log */
                activity()
                    ->useLog('Video Upload')
                    ->performedOn($user)
                    ->causedBy($user)
                    ->log("{$user->first_name}, {$user->last_name} ({$user->email}) upload a video file on {$mediaFile->created_at->format('m/d/Y H:i:s')}");
                /* end activity log */

                DB::commit();
                return response()->json([
                    "done" => $handler->getPercentageDone(),
                    'status' => true,
                    'resultCode' => 200,
                ]);

            } catch (QueryException $qe) {
                DB::rollback();
                \Log::info('media file related exception'.$qe->getMessage());
                return response()->json([
                    'status' => false,
                    'msg' => $qe->getMessage()
                ]);

            } catch (\Exception $e) {
                \Log::info('media file related exception'.$e->getMessage());
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

    public function uploadThumbnail(Request $request, $id)
    {
        if ($request->file) {
            $video = Video::where('media_file_id', $id)->select('id', 'media_file_id', 'thumb_url', 'video_id')->first();
            if (!$video) {
                return $this->sendError('NOT_CREATE', 'Video not found', Response::HTTP_NOT_FOUND);
            }
            $path = $this->videoFolder . 'thumbnail/';
            $thumb_url= '';
            $uploadedFile = $this->uploadVideoThumbnail($request->file, $path, 's3', null, 640, 360);
            if ($uploadedFile) {
                $thumb_url = config('filesystems.disks.s3.url') . "/" . $path . $uploadedFile;
                if (isset($video->thumb_url)) {
                    $parts = explode('/', $video->thumb_url);
                    $filename = end($parts);
                    if ($filename) {
                        $this->deleteFileIfExists($path . $filename);
                    }
                }
                $video->thumb_url = $thumb_url;
                $video->save();
            }

            return $this->sendResponse($video, 'Thumbnail updated successfully.');
        }

        return $this->sendError('NOT_CREATE', 'No thumbnail image found', Response::HTTP_NOT_FOUND);
    }
}

