<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\AdminUserRequest;
use App\Http\Requests\UserRequest;
use App\Models\User;
use App\Models\Video;
use App\Repositories\UserRepository;
use App\Traits\UploadTrait;
use Carbon\CarbonInterval;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use DataTables;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use VzaarApi;

class UsersController extends Controller {

    const ITEM_PER_PAGE = 2;

    private $model;
    private $roles;
    use UploadTrait;

    public function __construct(User $userTable) {
        $this->model = new UserRepository($userTable);
        $this->roles = [
            User::ADMIN_TYPE => User::ADMIN_TYPE,
            User::VIEW_ONLY_ADMIN_TYPE => User::VIEW_ONLY_ADMIN_TYPE,
            User::DATA_ANALYSIS_TYPE => User::DATA_ANALYSIS_TYPE,
            User::CUSTOMER_SUPPORT => User::CUSTOMER_SUPPORT,
        ];
    }

    public function index()
    {
        if (request()->ajax()) {
            $query =  $this->model->getModel()->newQuery()
                ->where('role', '<>', User::SUPER_ADMIN_TYPE)
                ->where('role', '<>', User::COMPANY_TYPE);
            $table = Datatables::of($query);
            $template = 'admin.users._actions_template';
            $statusTemplate = 'partials.status_template';
            $table->editColumn('created_at', function ($row) {
                return $row->created_at->format('jS F, Y H:i:s A');
            });


            $table->editColumn('status', function ($row) use ($statusTemplate) {
                return view($statusTemplate, compact('row'));
            });
            $table->addColumn('actions', ' ');
            $table->editColumn('actions', function ($row) use ($template) {
                $routeKey = 'admin.users';
                return view($template, compact('row', 'routeKey'));
            });
            return $table->make(true);
        }
        return view('admin.users.index');
    }

    public function issuers()
    {
        if (! auth()->user()->isAdminOrSuperAdminOrDataAnalysisOrCustomerSupport()) {
            return redirect()->route('admin.users.index')->with([
                'message' => 'Unauthorize.',
                'alert-type' => 'error'
            ]);
        }
        if (request()->ajax()) {
            $query = $this->model->getModel()
                ->leftJoin('companies', 'companies.id', '=', 'users.company_id')
                ->select('users.id as id','users.id as user_id', 'users.name as user_name', 'users.email', 'companies.id as company_id', 'companies.phone_number',
                    'companies.name as organization_name','users.created_at',
                    \DB::raw("SUM(general_info_completed + contact_completed + structure_completed + valuation_completed + social_presence_completed + hierarchy_completed) AS profile_completion"),
                    \DB::raw("(select count(media_files.id) from media_files where media_files.media_type=2 AND media_files.created_by=users.id) AS total_video"),
                    \DB::raw("(select count(media_files.id) from media_files where media_files.media_type=1 AND media_files.created_by=users.id) AS total_audio"),
                    \DB::raw("(select count(user_logs.id) from user_logs where login_time IS NOT NULL AND role = 'Company' AND user_id = users.id) AS total_login"),
                    \DB::raw("(SELECT SUM(TIME_TO_SEC(TIMEDIFF(logout_time, login_time))) AS rcount FROM user_logs WHERE logout_time IS NOT NULL AND role = 'Company' AND user_id = users.id) AS cumulative_time")
                )->where('users.role', User::COMPANY_TYPE)->groupBy('users.id');

            $table = Datatables::of($query);
            $template = 'admin.users._actions_issuer_template';
            $statusTemplate = 'partials.status_template';

            $table->editColumn('cumulative_time', function ($row) {
                $time = 0;
                if( $row->cumulative_time && $row->cumulative_time >= 60)
                {
                    $time =(int) ($row->cumulative_time / 60);
                }
                return $time . ' mins'; // ? CarbonInterval::seconds($row->cumulative_time)->total('minutes') : '-';
            });
            $table->editColumn('profile_completion', function ($row) {
                return $row->profile_completion.'%';
            });
            $table->editColumn('created_at', function ($row) {
                return $row->created_at->format('m/d/Y');
            });
            $table->editColumn('status', function ($row) use ($statusTemplate) {
                return view($statusTemplate, compact('row'));
            });
            $table->addColumn('actions', ' ');
            $table->editColumn('actions', function ($row) use ($template) {
                $routeKey = 'admin.users';
                $userinfo = Crypt::encrypt($row->toArray());
                return view($template, compact('row', 'routeKey', 'userinfo'));
            });
            return $table->make(true);
        }
        return view('admin.users.issuer');
    }

    public function create() {
        if (auth()->user()->isViewOnlyAdmin()) {
            return redirect()->route('admin.users.index')->with([
                        'message' => 'Unauthorize.',
                        'alert-type' => 'error'
            ]);
        }
        return view('admin.users.create')->with(['roles' => $this->roles]);
    }

    public function store(UserRequest $request) {
        if (auth()->user()->isViewOnlyAdmin()) {
            return redirect()->route('admin.users.index')->with([
                        'message' => 'Unauthorize.',
                        'alert-type' => 'error'
            ]);
        }
        $notification = $this->saveUser($request, new User(), 'created');
        return redirect()->route('admin.users.index')->with($notification);
    }

    public function edit(User $user) {
        if ($user->isSuperAdmin() || ((auth()->user()->isViewOnlyAdmin() || auth()->user()->isCustomerSupport() ) && auth()->id() != $user->id)) {
            return redirect()->route('admin.users.index')->with([
                        'message' => 'Unauthorize.',
                        'alert-type' => 'error'
            ]);
        }

        return view('admin.users.edit', compact('user'))->with(['roles' => $this->roles]);
    }

    public function update(UserRequest $request, User $user) {
        if ($user->isSuperAdmin() || ((auth()->user()->isViewOnlyAdmin() || auth()->user()->isCustomerSupport() ) && auth()->id() != $user->id)) {
            return redirect()->route('admin.users.index')->with([
                        'message' => 'Unauthorize.',
                        'alert-type' => 'error'
            ]);
        }

        if ($user->isSuperAdmin()) {
            $notification = array(
                'message' => 'change not possible',
                'alert-type' => 'error'
            );
            return redirect()->route('admin.users.index')->with($notification);
        }

        if(! auth()->user()->isSuperAdmin()){
            $request->request->remove('email');
        }

        $notification = $this->saveUser($request, $user, 'updated');
        return redirect()->route('admin.users.index')->with($notification);
    }

    public function show(User $user) {
        if ($user->isSuperAdmin()) {
            $notification = array(
                'message' => 'Unauthorize.',
                'alert-type' => 'error'
            );
            return redirect()->route('admin.users.index')->with($notification);
        }
        return view('admin.users.show', compact('user'));
    }

    public function issuerView(User $user) {
        if (! $user->isCompany()) {
            $notification = array(
                'message' => 'Unauthorize.',
                'alert-type' => 'error'
            );
            return redirect()->route('admin.issuers.index')->with($notification);
        }
        return view('admin.users.issuer_view', compact('user'));
    }

    public function issuerEdit(User $user) {
        if (! $user->isCompany()) {
            return redirect()->route('admin.users.index')->with([
                        'message' => 'Unauthorize.',
                        'alert-type' => 'error'
            ]);
        }
        return view('admin.users.issuer_edit', compact('user'))->with(['roles' => $this->roles]);
    }

    private function saveUser(Request $request, User $user, $notificationType) {
        try {
            $default_role = $request->default_role;
            $user->first_name = $request->first_name;
            $user->last_name = $request->last_name;
            $user->name = $request->first_name . ' ' . request()->last_name;
            if($request->email)
            {
                $user->email = $request->email;
            }
            if ('created' == $notificationType) {
                $user->password = bcrypt($request->password);
            }
            if (!auth()->user()->isViewOnlyAdmin() && ($default_role !== 'Company')) {
                $user->role = $request->role;
            }

            $user->status = $request->status ?? '1';
            $user->save();
            $notification = array(
                'message' => "successfully {$notificationType}!",
                'alert-type' => 'success'
            );
        } catch (QueryException $qe) {
            logError($qe);
            $notification = array(
                'message' => "Operation Failed!",
                'alert-type' => 'error'
            );
        } catch (\Exception $e) {
            logError($e);
            $notification = array(
                'message' => "Operation Failed!",
                'alert-type' => 'error'
            );
        }
        return $notification;
    }

    public function destroy($id) {
        /* $user = User::find($id);
          if(null ==  $user)
          {
          return response()->json(['status' => 'fail']);
          }

          $this->model->delete($id);
          $data['msg'] = 'Deleted successful';
          $data['status'] = 'success';
          return response()->json($data); */
    }

    public function destroyIssuer(User $issuer) {
        if('production' == config('app.env'))
        {
            return redirect()->back();
        }
        DB::beginTransaction();
        try {
//         1. delete node suggestion
            $issuer->nodeSuggestion()->delete();

//        2. delete media subject suggestion
            $issuer->mediaSubjectSuggestion()->delete();

//        3. delete media meta
            $issuer->company->mediaCategorizationLookup()->delete();

//        *. delete content folder
            $issuer->company->contentFolders()->delete();

//        4. delete media file
            $mediaFileIds = $issuer->company->mediaFiles()->pluck('id')->toArray();
            $mediaFiles = $issuer->company->mediaFiles()->get();
            VzaarApi\Client::$client_id  = config('services.dacast.client_id');
            VzaarApi\Client::$auth_token = config('services.dacast.auth_token');
            foreach($mediaFiles as $file)
            {
                $s3Address = substr($file->s3_address, strripos($file->s3_address, '/') +1 );
                $s3Path ='';
                if(2 == $file->media_type && null != $file->video && null != $file->video->video_id)
                {
                    $video = VzaarApi\Video::find($file->video->video_id);
                    $video->delete();
                    $this->deleteFileIfExists(config('filesystems.disks.s3.s3_env'). '/video/' . $s3Address);
                }
                elseif(1 == $file->media_type)
                {
                    $this->deleteFileIfExists(config('filesystems.disks.s3.s3_env') . '/audio/' . $s3Address);
                }
            }
            Video::whereIn('media_file_id',$mediaFileIds)->delete();
            $issuer->company->mediaFiles()->forceDelete();

//        5. delete company meta
            $issuer->company->categorizationLookup()->delete();

//        6. delete company
            if(null != $issuer->company->headquarters)
            {
                $issuer->company->headquarters->address->delete();
            }
            $issuer->company->headquarters()->delete();
            $issuer->company->founders()->delete();
            $issuer->company->partnerships()->delete();
            $issuer->company->vendors()->delete();
            $issuer->company->conglomerateSubsidiary()->delete();
            $issuer->company->exchangeTradedOn()->sync([]);
            $issuer->company->FinancingType()->sync([]);
            $issuer->company->IntellectualProperty()->sync([]);
            $issuer->company->ResearchCoverage()->sync([]);
            $issuer->company->SharedCommunityResearch()->sync([]);
            $issuer->company->PatentType()->sync([]);
            $issuer->company->companySocialMediaPlatform()->sync([]);
            if(null != $issuer->company->image)
            {
                $this->deleteFileIfExists(config('filesystems.disks.s3.s3_env') . '/company_image/' . $issuer->company->image);
            }

            $issuer->company()->forceDelete();

//            7. delete login log
            $issuer->loginLog()->delete();

//            8. delete issuer
            $issuer->delete();

            $notification = array(
                'message' => "successfully issuer deleted!",
                'alert-type' => 'success'
            );
            DB::commit();
        } catch (QueryException $qe) {
            logError($qe);
            $notification = array(
                'message' => "Operation Failed!",
                'alert-type' => 'error'
            );
            DB::rollBack();
        } catch (\Exception $e) {
            logError($e);
            $notification = array(
                'message' => "Operation Failed!",
                'alert-type' => 'error'
            );
            DB::rollBack();
        }
        return redirect()->back()->with($notification);

    }

    // Deactive a Issuer
    public function deactiveIssuer(User $issuer) {
        if (! $issuer->isCompany()) {
            return redirect()->route('admin.users.index')->with([
                'message' => 'Unauthorize.',
                'alert-type' => 'error'
            ]);
        }
        if(! auth()->user()->isSuperAdmin()){
            return redirect()->route('admin.users.index')->with([
                'message' => 'Unauthorize.',
                'alert-type' => 'error'
            ]);
        }
        DB::beginTransaction();
        try {

            $issuer->company->mediaFiles()->delete();
            $issuer->company()->delete();
            // Issuer Delete
            $issuer->delete();


            $notification = array(
                'message' => "successfully issuer deleted",
                'alert-type' => 'success'
            );

            DB::commit();
        } catch (QueryException $qe) {
            logError($qe);
            $notification = array(
                'message' => "Operation Failed!",
                'alert-type' => 'error'
            );
            DB::rollBack();
        } catch (\Exception $e) {
            logError($e);
            $notification = array(
                'message' => "Operation Failed!",
                'alert-type' => 'error'
            );
            DB::rollBack();
        }
        return redirect()->back()->with($notification);
    }

    public function resetUserPassword(User $user) {
        return view('admin.users.change_user_password', compact('user'));
    }

    public function resetIssuerPassword(User $user) {
        if (! $user->isCompany()) {
            return redirect()->route('admin.users.issuers');
        }
        return view('admin.users.change_issuer_password', compact('user'));
    }
    public function storeResetUserPassword(User $user, Request $request) {
        if ($user->isSuperAdmin()) {
            $notification = array(
                'message' => 'change not possible',
                'alert-type' => 'error'
            );
            return redirect()->route('admin.users.index')->with($notification);
        }
        $this->validate($request, [
            'password' => 'required|min:6|confirmed',
                ]
        );

        $user->password = bcrypt($request->password);
        $user->save();

        $notification = array(
            'message' => 'successfully changed!',
            'alert-type' => 'success'
        );
        return redirect()->back()->with($notification);
    }

    public function storeResetIssuerPassword(User $user, Request $request) {
        if (! $user->isCompany()) {
            $notification = array(
                'message' => 'change not possible',
                'alert-type' => 'error'
            );
            return redirect()->route('admin.users.issuers')->with($notification);
        }
        $this->validate($request, [
            'password' => 'required|min:6|confirmed',
                ]
        );

        $user->password = bcrypt($request->password);
        $user->save();

        $notification = array(
            'message' => 'successfully changed!',
            'alert-type' => 'success'
        );
        return redirect()->route('admin.users.issuers')->with($notification);
    }

}
