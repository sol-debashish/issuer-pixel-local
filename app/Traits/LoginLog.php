<?php
/**
 * Created by PhpStorm.
 * User: SOL-WEB-10
 * Date: 10/15/2019
 * Time: 4:06 PM
 */

namespace App\Traits;

use App\Models\User;
use App\Models\UserLog;
use Carbon\Carbon;
use Illuminate\Support\Facades\Session;

trait LoginLog
{
    function addLoginLog(User $user, $session = null)
    {
        (new UserLog)->loginLog([
            'user_id' => $user->id,
            'role' => $user->role,
            'session_id' => $session?? Session::getId(),
            'login_time' => Carbon::now(),
        ]);
    }
    function addLogoutLog(User $user, $session = null)
    {
        $userLog = UserLog::where('session_id', $session??Session::getId())->where('user_id', $user->id);
        if($userLog->exists())
        {
            $totalDuration = Carbon::now()->diffInSeconds($userLog->first()->login_time);
            $userLog->update(['logout_time' => Carbon::now()]);
            return gmdate('H:i', $totalDuration);
        }
        return '';
    }
}
