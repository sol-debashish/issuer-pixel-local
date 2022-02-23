<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;

class IndexController extends Controller
{
    public function dashboard()
    {
        $dashboardStatistics = User::select(
            \DB::raw("(select count(id) from users where role = '". User::COMPANY_TYPE ."') AS total_issuer"),
            \DB::raw("(select count(*) from users where role = '". User::COMPANY_TYPE ."' and created_at > NOW() - INTERVAL 7 DAY ) AS last_signup"),
            \DB::raw("(select count(media_files.id) from media_files where media_files.media_type=2) AS total_video"),
            \DB::raw("(select count(media_files.id) from media_files where media_files.media_type=1) AS total_audio"),
            \DB::raw("(SELECT AVG(a.rcount) FROM (SELECT COUNT(*) AS rcount FROM user_logs r WHERE role = 'Company' GROUP BY DATE(r.login_time)) a)  as login_count"),
            \DB::raw("(SELECT AVG(a.rcount) FROM (SELECT  SUM(TIME_TO_SEC(TIMEDIFF(logout_time, login_time))/60) AS rcount FROM user_logs WHERE logout_time IS NOT NULL AND role = 'Company' GROUP BY DATE(login_time)) a) as avg_time_span")
        )->first();
        return view('admin.index.dashboard', compact('dashboardStatistics'));
    }
}
