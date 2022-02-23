<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Http\Response;
use App\Models\User;
use Illuminate\Support\Str;
use App\Notifications\InternalNotification;

class NotificationsController extends BaseController
{
    public function notifications($totalNotifications)
    {
        try {
            $user = auth()->user();
            $notifications = $user->notifications()->skip($totalNotifications)->limit(3)->get();
            $unreadCount = $user->unreadNotifications->count();
            $notifications = $this->prepareNotifications($notifications);

            $data = [
                'totalNotifications' => $totalNotifications + $notifications->count(),
                'unreadCount' => $unreadCount,
                'unreadText' => $unreadCount ? $unreadCount : 'no',
                'latestNotificationTime' => $notifications->count() ? Carbon::parse($notifications[0]->created_at)->format('Y-m-d H:i:s') : null,
                'notifications' => $notifications
            ];

            return $this->sendResponse($data, 'Found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function markAllAsRead($totalNotifications)
    {
        try {
            $user = auth()->user();
            $user->unreadNotifications->markAsRead();

            $notifications = $user->notifications()->limit($totalNotifications)->get();
            $unreadCount = 0;
            $notifications = $this->prepareNotifications($notifications);

            $data = [
                'unreadCount' => $unreadCount,
                'unreadText' => $unreadCount ? $unreadCount : 'no',
                'notifications' => $notifications
            ];

            return $this->sendResponse($data, 'Found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function recentNotifications($latestNotificationTime, $totalNotifications)
    {
        try {
            $user = auth()->user();

            if($latestNotificationTime)
                $notifications = $user->notifications()->where('created_at', '>', $latestNotificationTime)->get();
            else
                $notifications = $user->notifications;

            $unreadCount = $user->unreadNotifications->count();
            $notifications = $this->prepareNotifications($notifications);

            $data = [
                'totalNotifications' => $totalNotifications + $notifications->count(),
                'unreadCount' => $unreadCount,
                'unreadText' => $unreadCount ? $unreadCount : 'no',
                'latestNotificationTime' => $notifications->count() ? Carbon::parse($notifications[0]->created_at)->format('Y-m-d H:i:s') : $latestNotificationTime,
                'notifications' => $notifications
            ];

            return $this->sendResponse($data, 'Found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function prepareNotifications($notifications) {
        foreach($notifications as $notification) {
            $notification->createdAt = Carbon::parse($notification->created_at)->diffForHumans();

            if($notification->read_at) {
                $notification->style = '';
                $notification->activeStatus = false;
            } else {
                $notification->style = 'notification-unread';
                $notification->activeStatus = true;
            }
        }

        return $notifications;
    }
}
