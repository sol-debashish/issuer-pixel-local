<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use App\Models\Bulletin;
use App\Models\MediaFile;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;

use DataTables;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;

class IssuersController extends Controller {

    public function mediaFiles(User $user) {

        if (!$user->isCompany()) {
            return redirect()->route('admin.users.index')->with([
                'message' => 'Unauthorize.',
                'alert-type' => 'error'
            ]);
        }
        if (request()->ajax()) {

            $query = MediaFile::withTrashed()->leftJoin('companies', 'companies.id', '=', 'media_files.company_id')
                ->leftJoin('users', 'users.id', '=', 'media_files.created_by')
                ->leftJoin('media_types', 'media_types.id', '=', 'media_files.media_type')
                ->select('users.id as user_id','companies.id as company_id', 'companies.name as organization_name',
                    'media_files.id as file_id','media_files.name as file_name','media_files.media_type as file_type',
                    'media_types.name as media_type_name','media_files.created_at as created_at','media_files.status'
                )
                ->where('users.id', $user->id)->where('users.role', User::COMPANY_TYPE);

            $table = Datatables::of($query);
            $template = 'admin.issuers._actions_template';
            $statusTemplate = 'admin.issuers.status_template';

            $table->editColumn('created_at', function ($row) {

//                \Log::info('row:'.$row->created_at);
//                \Log::info('date:'.$row->created_at->format('m/d/Y'));
                return $row->created_at->format('m/d/Y');
            });

            $table->editColumn('is_profile_completed', function ($row) {
                return $row->is_profile_completed ? 'Yes' : 'No';
            });


            $table->editColumn('status', function ($row) use ($statusTemplate) {
                return view($statusTemplate, compact('row'));
            });
            $table->addColumn('actions', ' ');
            $table->editColumn('actions', function ($row) use ($template) {
                $mediaType = $row->media_type_name;
                return view($template, compact('row', 'mediaType'));
            });
            return $table->make(true);
        }
        return view('admin.issuers.media_file', compact('user'));
    }

    public function issuerQuestionnaireAdmin(User $user, $type, $file_id = null)
    {
        if (!$user->isCompany()) {
            return redirect()->route('admin.users.issuers')->with([
                'message' => 'Unauthorize.',
                'alert-type' => 'error'
            ]);
        }

        $allType = [
            'profile',
            'video_dashboard',
            'audio_dashboard',
            'video_hierarchy',
            'video_questionnaire',
            'audio_hierarchy',
            'audio_questionnaire',
        ];

        if (! in_array($type, $allType)) {
            return redirect()->route('admin.users.issuers')->with([
                'message' => 'Invalid',
                'alert-type' => 'error'
            ]);
        }
        switch ($type)
        {
            case 'profile':
            $url = '/company-questionnaires-details';
            break;
            case 'video_dashboard':
            $url = '/content';
            break;
            case 'audio_dashboard':
            $url = '/content#audio';
            break;
            case 'video_hierarchy':
            $url = '/video/edit-step1/'.$file_id;
            break;
            case 'video_questionnaire':
            $url = '/video/edit-step2/'.$file_id;
            break;
            case 'audio_hierarchy':
            $url = '/audio/edit-step1/'.$file_id;
            break;
            case 'audio_questionnaire':
            $url = '/audio/edit-step2/'.$file_id;
            break;
        }

        $adminInfo = Crypt::encrypt([
            'id' => auth()->id(),
            'role' => auth()->user()->role,
            'backUrl' => url()->previous(),
        ]);
        $response = Crypt::encrypt($user);
        $userInfo =[];

        $video_upload_check_obj = DB::table('media_files')->select('id')->where('company_id', $user->company_id)->where('media_type', 2)->get()->toArray();
        $signup_date = date_create($user->created_at);
        $current_date = date_create(date("Y-m-d H:i:s"));
        $diff = date_diff($signup_date, $current_date);
        $signup_age = $diff->format("%a");
        $remaining_days = ($signup_age > 14) ? 0 : (14 - $signup_age);
        $is_video_uploaded = (!empty($video_upload_check_obj)) ? 'yes' : 'no';
        // FETCH BULLETINS
        $bulletins = Bulletin::select('id','title', 'created_at')->active()->limit(3)
            ->orderBy('is_sticky','DESC')->orderBy('id', 'DESC')->get();
        foreach($bulletins as $bulletin) {
            $bulletin->createdAt = Carbon::parse($bulletin->created_at)->format('F, jS Y');
        }

        $userInfo['id'] = $user->id;
        $userInfo['company_uuid'] = $user->company->uuid;
        $userInfo['company_slug_name'] = $user->company->slug_name;
        $userInfo['name'] = $user->name;
        $userInfo['firstName'] = $user->first_name;
        $userInfo['video_upload_remaining_days'] = $remaining_days;
        $userInfo['is_video_uploaded'] = $is_video_uploaded;
        $userInfo['email'] = $user->email;
        $userInfo['company_id'] = $user->company_id;
        $userInfo['company'] = $user->company ? $user->company->name : '';
        $userInfo['phone'] = $user->company ? $user->company->phone_number : '';
        $userInfo['storage_path'] = config('filesystems.disks.s3.url') . "/" . config('filesystems.disks.s3.s3_env');
        $userInfo['company_image'] = $user->company->image ? config('filesystems.disks.s3.url')."/".config('filesystems.disks.s3.s3_env') . '/company_image/'.$user->company->image : '';
        $userInfo['token'] =  $user->createToken(config('sanctum.token_name'))->plainTextToken;
        $userInfo['bulletins'] = $bulletins;

        return view('admin.issuers.profile_questionnaire', compact('response', 'userInfo', 'url', 'adminInfo'));
    }
}
