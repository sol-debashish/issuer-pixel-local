<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\ChatMessage;
use App\Models\Company;
use App\Models\MediaFile;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ChatController extends BaseController
{
    public function message(Request $request)
    {
        $perPage = $request->get('perPage', 10);
        try {
            $chatQuery = ChatMessage::join(DB::raw('(Select max(id) as id from chat_messages where to_user_id = '. auth()->id() .' group by from_user_id) LatestMessage'), function($join) {
                $join->on('chat_messages.id', '=', 'LatestMessage.id');
            })
                ->leftJoin('users as u', 'u.id', '=', 'chat_messages.from_user_id')
                ->leftJoin('companies as c', 'c.id', '=', 'u.company_id')
                ->select('chat_messages.id','chat_messages.message','chat_messages.type', 'chat_messages.file_format','chat_messages.file_path',
                    'chat_messages.date', 'chat_messages.time', 'u.name',  'u.id as user_id', 'c.image', 'c.slug_name');

            $chatQuery2 = ChatMessage::join(DB::raw('(Select max(id) as id from chat_messages where from_user_id = '. auth()->id() .' group by to_user_id) LatestMessage'), function($join) {
                $join->on('chat_messages.id', '=', 'LatestMessage.id');
            })
                ->leftJoin('users as u', 'u.id', '=', 'chat_messages.to_user_id')
                ->leftJoin('companies as c', 'c.id', '=', 'u.company_id')
                ->select('chat_messages.id','chat_messages.message','chat_messages.type', 'chat_messages.file_format','chat_messages.file_path',
                    'chat_messages.date', 'chat_messages.time', 'u.name',  'u.id as user_id', 'c.image', 'c.slug_name')
                ->union($chatQuery)
                ->orderBy('id', 'desc');

            $subQuery = DB::query()->fromSub($chatQuery2, 'subQuery')
                ->orderBy('id', 'desc')
                ->groupBy('user_id');

            $finalQuery = DB::query()->fromSub($subQuery, 'finalQuery')
                ->leftJoin('chat_messages as unread_messages', function ($join) {
                    $join->on('finalQuery.user_id', '=', 'unread_messages.from_user_id')
                        ->where('unread_messages.to_user_id', '=', auth()->id())
                        ->where('unread_messages.read_status', '=', 0);
                })
                ->orderBy('finalQuery.id', 'desc')
                ->groupBy('finalQuery.user_id')
                ->select('finalQuery.*', DB::raw("count(unread_messages.id) as unread_count"));

            // dd($finalQuery->toSql());
            // dd($finalQuery->get()->toArray());

            if(request()->query_input)
            {
                $finalQuery->where('name', 'like', "%". request()->query_input ."%");
            }

            $chatMessageList = $finalQuery->paginate($perPage);

            $data = $memberIds = [];
            foreach($chatMessageList as $key => $value)
            {
                $value = json_decode(json_encode($value), true);
                $data[$key]['messageId'] =  $value['id'];
                $data[$key]['message'] =  (strlen($value['message']) > 100) ? substr($value['message'], 0, 100) . '...' : $value['message'];
                $data[$key]['type'] =  $value['type'];
                $data[$key]['unreadMessages'] =  $value['unread_count'];
                $data[$key]['fileFormat'] =  $value['file_format'];
                $data[$key]['filePath'] =  $value['file_path'];
                $data[$key]['userId'] =  $value['user_id'];
                $data[$key]['userName'] =  $value['name'];
                $data[$key]['companyPhoto'] =  ("" != $value['image']) ? config('filesystems.disks.s3.url') . "/" . config('filesystems.disks.s3.s3_env') .'/company_image/'. $value['image'] : "/images/image-placeholder-1.png";
                $data[$key]['createdAt'] =  Carbon::parse($value['date'].' '.$value['time'])->diffForHumans();
                $data[$key]['companySlug'] = $value['slug_name'];

                array_push($memberIds, $value['user_id']);
            }

            $response = [
                'pagination' => [
                    'total' => $chatMessageList->total(),
                    'per_page' => $chatMessageList->perPage(),
                    'current_page' => $chatMessageList->currentPage(),
                    'last_page' => $chatMessageList->lastPage(),
                    'from' => $chatMessageList->firstItem(),
                    'to' => $chatMessageList->lastItem()
                ],
                'latestChatMessages' => $data,
                'memberIds' => $memberIds
            ];

            return $this->sendResponse($response, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('error', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function memberList(Request $request)
    {
        try {
            $data = [];
            if(request()->query_input)
            {
                $userList = User::where('users.id', '<>', auth()->id())->where('role', 'Company')
                    ->leftJoin('companies as c', 'c.id', '=', 'users.company_id')
                    ->select('users.id','users.name', 'c.image', 'c.slug_name')
                    ->whereNotIn('users.id', json_decode(request()->memberIds))
                    ->where('users.name', 'like', "%". request()->query_input ."%")
                    ->orderBy('users.name', 'asc')->limit(10)->get();

                foreach($userList as $key => $value)
                {
                    $data[$key]['userId'] =  $value['id'];
                    $data[$key]['userName'] =  $value['name'];
                    $data[$key]['companyPhoto'] =   ("" != $value['image']) ? config('filesystems.disks.s3.url') . "/" . config('filesystems.disks.s3.s3_env') .'/company_image/'. $value['image'] : "/images/image-placeholder-1.png";
                    $data[$key]['companySlug'] =  $value['slug_name'];
                }
            }
            return $this->sendResponse($data, 'Data found successfully.', 200);

        } catch (Exception $ex) {
            return $this->sendError('error', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function memberInfo(Request $request)
    {
        try {
            $data = [];
            $subQuery = ChatMessage::where('from_user_id', $request->userId)
                ->orWhere('to_user_id', $request->userId);

            $latestMessage = DB::query()->fromSub($subQuery, 'finalQuery')
                ->where('from_user_id', auth()->id())
                ->orWhere('to_user_id', auth()->id())
                ->select('id as messageId', 'message', 'file_format as fileFormat', 'date', 'time')
                ->orderBy('id', 'desc')
                ->first();

            if($latestMessage) {
                $latestMessage->createdAt = Carbon::parse($latestMessage->date . ' ' . $latestMessage->time)->diffForHumans();

                ChatMessage::where('from_user_id', $request->userId)
                    ->where('to_user_id', auth()->id())
                    ->where('read_status', 0)
                    ->update(['read_status' => 1]);

                $data = json_decode(json_encode($latestMessage), true);
            } else {
                $data = [
                    'messageId' => null,
                    'message' => '',
                    'fileFormat' => '',
                    'createdAt' => ''
                ];
            }

            return $this->sendResponse($data, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('error', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function companyContent(Request $request){
        try {
            $company = Company::whereSlugName($request->slug)->first();
            $perPage = $request->get('perPage', 10);
            $allContent = MediaFile::with(['subjectType'])->where( 'media_files.company_id', $company->id)
                ->leftJoin('videos', 'media_files.id', '=', 'videos.media_file_id')
                ->leftJoin('media_categorization_lookups', 'media_categorization_lookups.media_file_id', '=', 'media_files.id')
                ->select('media_files.id','media_files.uuid', 'media_files.name', 'media_files.media_type', 'video_id', \DB::raw('DATE_FORMAT(media_files.created_at, "%m/%d/%Y") as publication_date'), \DB::raw('group_concat(media_categorization_lookups.id) as taxonomy_id'),
                    'media_files.s3_address', 'media_files.status', 'media_files.publish_status', 'media_files.view_counter')
                ->where(['media_files.is_meta_info_completed' => 1, 'media_files.is_hierarchy_info_completed' => 1, 'media_files.status' => 2]);

            $content = $allContent->groupBy('media_files.id')
                ->orderBy('media_files.id', 'DESC')
                ->paginate($perPage);

            $response = [
                'pagination' => [
                    'total' => $content->total(),
                    'per_page' => $content->perPage(),
                    'current_page' => $content->currentPage(),
                    'last_page' => $content->lastPage(),
                    'from' => $content->firstItem(),
                    'to' => $content->lastItem()
                ],
                'data' => $content ,
            ];
            return $this->sendResponse($response, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('error', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function updateUserMessageStatus(Request $request)
    {
        try {
            ChatMessage::where([
                ['from_user_id', '=', $request->fromUserId],
                ['to_user_id', '=', auth()->id()],
                ['read_status', '=', 0]
            ])
                ->update(['read_status' => 1]);

            return $this->sendResponse([], 'Data updated successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('error', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function updateMessage(Request $request)
    {
        try {
            ChatMessage::where('id', $request->messageId)->update(['message' => $request->message, 'edit_status' => 1]);

            return $this->sendResponse([], 'Data updated successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('error', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function deleteMessage(Request $request)
    {
        try {
            $chatMessage = ChatMessage::where('id', $request->messageId)->first();

            if($chatMessage->type == 'file') {
                $filePath = parse_url(urldecode($chatMessage->file_path))['path'];
                $s3Exists = Storage::disk('s3')->exists($filePath);

                if($s3Exists) {
                    Storage::disk('s3')->delete($filePath);
                }
            }

            $chatMessage->delete();

            return $this->sendResponse([], 'Data deleted successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('error', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
