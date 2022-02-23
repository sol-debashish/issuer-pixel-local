<?php

namespace App\Http\Controllers\Api\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Validator;
use App\Models\InternalMessage;

class InternalMessageController extends BaseController
{
    public function sendInternalMessage(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'message' => 'required',
        ]);

        if ($validator->fails()) {
            $error = $validator->errors();
            return $this->sendError('FIELDS_VALIDATION_ERROR', $error, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        try {
            InternalMessage::create([
                'sender_id' => $request->senderCompanyId,
                'receiver_id' => $request->receiverCompanyId,
                'message' => $request->message
            ]);

            return $this->sendResponse([], 'Message sent successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('error', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }

    }

    public function index($messageIndex, $receiverCompanyId)
    {
        try {
            $messages = InternalMessage::where('receiver_id', $receiverCompanyId)
                ->with('sender:id,name,image')
                ->orderBy('id', 'desc')
                ->get();

            $messages = $this->prepareMessages($messages);

            $charLimit = 400;

            foreach($messages as $key => $message) {
                $message->longDescription = $message->message;
                $message->shortDescription = substr($message->message, 0, $charLimit);
                $message->messageVisibility = ((string)$key == $messageIndex) ? true : false;
                $message->isLong = (strlen($message->message) > $charLimit) ? true : false;
            }
            
            $data = [
                'latestMessageTime' => $messages->count() ? Carbon::parse($messages[0]->created_at)->format('Y-m-d H:i:s') : null,
                'messages' => $messages
            ];

            return $this->sendResponse($data, 'Found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function recentMessagesList($messageIndex, $latestMessageTime, $receiverCompanyId)
    {
        try {
            $messages = collect();
            if($latestMessageTime) {
                $recentCount = InternalMessage::where('receiver_id', $receiverCompanyId)
                    ->where(DB::raw('CAST(created_at as DATETIME)'), '>', $latestMessageTime)
                    ->count();

                if($recentCount) {
                    $messages = InternalMessage::where('receiver_id', $receiverCompanyId)
                        ->with('sender:id,name,image')
                        ->orderBy('id', 'desc')
                        ->get();

                    $messageIndex += $recentCount;
                }
            } else {
                $messages = InternalMessage::where('receiver_id', $receiverCompanyId)
                    ->with('sender:id,name,image')
                    ->orderBy('id', 'desc')
                    ->get();
            }

            $messages = $this->prepareMessages($messages);

            $charLimit = 400;

            foreach($messages as $key => $message) {
                $message->longDescription = $message->message;
                $message->shortDescription = substr($message->message, 0, $charLimit);
                $message->messageVisibility = ($key == $messageIndex) ? true : false;
                $message->isLong = (strlen($message->message) > $charLimit) ? true : false;
            }

            $data = [
                'messageIndex' => $messageIndex,
                'latestMessageTime' => $messages->count() ? Carbon::parse($messages[0]->created_at)->format('Y-m-d H:i:s') : $latestMessageTime,
                'messages' => $messages
            ];

            return $this->sendResponse($data, 'Found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function messages($totalMessages, $receiverCompanyId)
    {
        try {
            $messages = InternalMessage::where('receiver_id', $receiverCompanyId)
                ->with('sender:id,name,image')
                ->orderBy('id', 'desc')
                ->skip($totalMessages)
                ->limit(3)
                ->get();

            $unreadCount = InternalMessage::where('receiver_id', $receiverCompanyId)
                ->where('read_status', 0)
                ->count();

            $messages = $this->prepareMessages($messages);

            $data = [
                'totalMessages' => $totalMessages + $messages->count(),
                'unreadCount' => $unreadCount,
                'unreadText' => $unreadCount ? $unreadCount : 'no',
                'latestMessageTime' => $messages->count() ? Carbon::parse($messages[0]->created_at)->format('Y-m-d H:i:s') : null,
                'messages' => $messages
            ];

            return $this->sendResponse($data, 'Found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function markAllAsRead(Request $request)
    {
        try {
            InternalMessage::where('receiver_id', $request->receiverCompanyId)
                ->where('read_status', 0)
                ->update(['read_status' => 1]);

            $messages = InternalMessage::where('receiver_id', $request->receiverCompanyId)
                ->with('sender:id,name,image')
                ->orderBy('id', 'desc')
                ->limit($request->totalMessages)
                ->get();

            $unreadCount = 0;
            $messages = $this->prepareMessages($messages);

            $data = [
                'unreadCount' => $unreadCount,
                'unreadText' => $unreadCount ? $unreadCount : 'no',
                'messages' => $messages
            ];

            return $this->sendResponse($data, 'Data updated successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function updateReadStatus(Request $request)
    {
        try {
            InternalMessage::where('id', $request->id)->update(['read_status' => 1]);

            return $this->sendResponse([], 'Data updated successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function recentMessages($latestMessageTime, $totalMessages, $receiverCompanyId)
    {
        try {
            if($latestMessageTime) {
                $messages = InternalMessage::where('receiver_id', $receiverCompanyId)
                    ->with('sender:id,name,image')
                    ->orderBy('id', 'desc')
                    ->where(DB::raw('CAST(created_at as DATETIME)'), '>', $latestMessageTime)
                    ->get();
            } else {
                $messages = InternalMessage::where('receiver_id', $receiverCompanyId)
                    ->with('sender:id,name,image')
                    ->orderBy('id', 'desc')
                    ->get();
            }

            $unreadCount = InternalMessage::where('receiver_id', $receiverCompanyId)
                ->where('read_status', 0)
                ->count();

            $messages = $this->prepareMessages($messages);

            $data = [
                'totalMessages' => $totalMessages + $messages->count(),
                'unreadCount' => $unreadCount,
                'unreadText' => $unreadCount ? $unreadCount : 'no',
                'latestMessageTime' => $messages->count() ? Carbon::parse($messages[0]->created_at)->format('Y-m-d H:i:s') : $latestMessageTime,
                'messages' => $messages
            ];

            return $this->sendResponse($data, 'Found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function prepareMessages($messages) {
        foreach($messages as $message) {
            $message->createdAt = Carbon::parse($message->created_at)->diffForHumans();
            $image = $message->sender->image;
            $message->companyPhoto =  ("" != $image) ? config('filesystems.disks.s3.url') . "/" . config('filesystems.disks.s3.s3_env') .'/company_image/'. $image : "/images/image-placeholder-1.png";

            if($message->read_status == 1) {
                $message->style = '';
                $message->activeStatus = false;
            } else {
                $message->style = 'message-unread';
                $message->activeStatus = true;
            }
        }

        return $messages;
    }
}
