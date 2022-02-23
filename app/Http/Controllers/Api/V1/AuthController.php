<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Address;
use App\Models\Bulletin;
use App\Models\Company;
use App\Models\ContentFolder;
use App\Models\Headquarter;
use App\Models\User;
use App\Traits\LoginLog;
use App\Traits\Media;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Mail;
use App\Models\MediaFile;
use Validator;
use Notification;
use function Aws\boolean_value;

class AuthController extends BaseController
{
    use Notifiable;
    use loginLog;
    use Media;

    static $domains = ['gmail.com', "yahoo.com", "icloud.com", "outlook.com", "msn.com"];

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'companyName' => 'required|string|max:191|unique:companies,name',
            'companyPhone' => 'required|string|max:191',
            'firstName' => 'required|string|max:191',
            'lastName' => 'required|string|max:191',
            'email' => 'required|email|max:191|unique:users',
            // 'hq_address' => 'required|string|max:191',
            // 'hq_city' => 'required',
            // 'hq_zip' => 'required',
            /*'hq_state' => 'required',
            'hq_country' => 'required',
            'company_industry' => 'required',*/
            'password' => 'required|min:8|confirmed'
        ]);
        if ($validator->fails()) {
            $error = $validator->errors();
            return $this->sendError('FIELDS_VALIDATION_ERROR', $error, Response::HTTP_UNPROCESSABLE_ENTITY);
        }
        DB::beginTransaction();
        try {
            $totalProfileValue = config('general.issuer_profile_completion.general.total_value');
            $totalProfileField = config('general.issuer_profile_completion.general.total_field');
            $completedProfileFieldValue = 0;
            $company = Company::create(
                ['name' => $request->companyName, 'phone_number' => $request->companyPhone, 'allow_update_notification' => $request->allowUpdateNotification, 'industry_id' => $request->company_industry]
            );
            $user = User::create($request->merge([
                'name' => $request->firstName . ' ' . $request->lastName,
                'first_name' => $request->firstName,
                'last_name' => $request->lastName,
                'password' => bcrypt($request->password),
                'role' => User::COMPANY_TYPE
            ])->toArray());

            $user->company_id = $company->id;
            $user->status = '1';
            $user->is_profile_completed = '1'; /*Currently Skipping the Profile questionnaires all steps and set it as completed*/
            $user->save();

            //Update created by in companies
            $company->profile_created_by = $user->id;
            $completedProfileFieldValue += 5;
            $company->general_info_completed = profileCompletePercentageCalculator($totalProfileValue, $totalProfileField, $completedProfileFieldValue);
            $company->uuid = $this->getMediaUUID($company->id);
            $company->slug_name = Str::slug($request->companyName);
            $company->save();
//            Company::where('id', $company->id)->update(['profile_created_by' => $user->id]);

            /*save to content folder*/
            ContentFolder::create([
                'company_id' => $company->id,
                'id' => $company->id.random_int(1000000000, 9999999999),
                'pid' => 0,
                'name'=> 'Issuer Pixel',
                'folder_layer'=> 0,
                'isLeaf'=> 0,
                'delNodeDisabled'=> 1,
                'addLeafNodeDisabled'=> 1,
                'editNodeDisabled'=> 0,
                'created_at'=> Carbon::now(),
                'updated_at'=> Carbon::now(),
            ]);
            /*end save to content folder*/

            //Add Address
            /*$address = Address::create([
                // 'street_address_one' => $request->hq_address,
                // 'street_address_two' => $request->hq_address2,
                // 'city' => $request->hq_city,
                // 'zip' => $request->hq_zip,
                'state_id' => $request->hq_state,
                'country_code' => $request->hq_country
            ]);
            $address->save();*/

            //Add Headquarters
            /*$headquarter = Headquarter::create([
                'company_id' => $company->id,
                'name' => '',
                'primary_headquarters' => 1,
                'address_id' => $address->id
            ]);
            $headquarter->save();*/

            /* activity log for signup */
            activity()
                ->useLog('Issuer Signup')
                ->performedOn($user)
                ->causedBy($user)
                ->log("{$user->first_name}, {$user->last_name} ({$user->email}) Singup on {$user->created_at->format('m/d/Y H:i:s')}");
            /* end activity log for signup */

            // send welcome email
            $receiveremail = array(
                'email' => $user->email,
                'subject' => 'Welcome ' . $request->companyName
            );
            $domain = $_SERVER['HTTP_HOST'];
            Mail::send('email.welcome_signup', ['companyName' => $request->companyName, 'domainName' => $domain], function ($message) use ($receiveremail) {
                $message->from('noreply@issuerpixel.com', 'Issuer Pixel');
                $message->to($receiveremail['email'])->subject($receiveremail['subject']);
            });

            $data = [];
            //$data['token'] =  $user->createToken(env('API_TOKEN_NAME',"CastleGuardApiToken"))->plainTextToken;
            DB::commit();
            return $this->sendResponse($data, 'User register successfully.');
        } catch (Exception $ex) {
            DB::rollback();
            \Log::info('Issuer registration exception' . $ex->getMessage());
            \Log::error($ex->getFile() . ':' . $ex->getLine() . ' ' . $ex->getMessage());
            return $this->sendError('NOT_CREATE', 'User register failed', Response::HTTP_INTERNAL_SERVER_ERROR);
        }


    }

    /**
     * Login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            $error = $validator->errors();
            return $this->sendError('FIELDS_VALIDATION_ERROR', $error, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        if (Auth::attempt(['email' => $request->get('email'), 'password' => $request->get('password'), 'role' => User::COMPANY_TYPE])) {
            $user = Auth::user();
            $company_id = $user->company_id;
            $video_upload_check_obj = DB::table('media_files')->select('id')->where('company_id', $company_id)->where('media_type', 2)->get()->toArray();
            $userInfo = [];
            $signup_date = date_create($user->created_at);
            $current_date = date_create(date("Y-m-d H:i:s"));
            $diff = date_diff($signup_date, $current_date);
            $signup_age = $diff->format("%a");
            $remaining_days = ($signup_age > 14) ? 0 : (14 - $signup_age);
            $is_video_uploaded = (!empty($video_upload_check_obj)) ? 'yes' : 'no';


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
            $userInfo['company_image'] = $user->company->image ? config('filesystems.disks.s3.url') . "/" . config('filesystems.disks.s3.s3_env') . '/company_image/' . $user->company->image : '';
            $userInfo['token'] =  $user->createToken(config('sanctum.token_name'))->plainTextToken;

            $response = Crypt::encrypt($user->toArray());
            $this->addLoginLog($user, $userInfo['token']);

            // FETCH BULLETINS
            $bulletins = Bulletin::select('id','title', 'created_at')->active()->limit(3)
                ->orderBy('is_sticky','DESC')->orderBy('id', 'DESC')->get();
            foreach($bulletins as $bulletin) {
                $bulletin->createdAt = Carbon::parse($bulletin->created_at)->format('F, jS Y');
            }
            $userInfo['bulletins'] = $bulletins;

            /* tracking user logins */
            activity()
                ->useLog('Issuer login')
                ->performedOn($user)
                ->causedBy($user)
                ->log($user->name . " login in issuer panel");
            /*end tracking user logins*/
            return $this->sendResponse($response, 'SUCCESS', 200, $userInfo);

        } else {
            return $this->sendError('UNAUTHORIZED', ['email' => ['These credentials do not match our records.']], Response::HTTP_UNPROCESSABLE_ENTITY);
        }
    }

    public function emailExistsCheck(Request $request)
    {
        $data = (bool)User::whereEmail($request->email)->exists();
        /*if (!$data && filter_var($request->email, FILTER_VALIDATE_EMAIL)) {
            $domain_array = explode("@", $request->email);
            $domain = $domain_array[1];
            if (!in_array($domain, self::$domains)) {
                $queryResult = User::where('email', 'LIKE', '%' . $domain)->get();
                if (count($queryResult) > 0) {
                    $domain_data = 'domain_exist';
                    return $this->sendResponse($domain_data, '');
                }
            }
        }*/
        return $this->sendResponse($data, '');
    }
    public function companyNameExistsCheck(Request $request)
    {
        $data = Company::whereName($request->companyName)->exists();
        return $this->sendResponse($data, '');
    }

    /*public function domainDuplicateCheck(Request $request)
    {
        $data = '';
        if (filter_var($request->email, FILTER_VALIDATE_EMAIL)) {
            $domain_array = explode("@", $request->email);
            $domain = $domain_array[1];
            if (!in_array($domain, self::$domains)) {
                $queryResult = User::where('email', 'LIKE', '%' . $domain . '%')->get();
                if (count($queryResult) > 0) {
                    $domain_data = 'domain_exist';
                    return $this->sendResponse($domain_data, '');
                }
            }
        }
        return $this->sendResponse($data, '');
    }*/

    public function forgot()
    {

        $validator = Validator::make(request()->all(), [
            'email' => ['required', 'email', 'max:191', Rule::exists('users', 'email')->where('role', User::COMPANY_TYPE)]
        ]);

        if ($validator->fails()) {
            $error = $validator->errors();
            return $this->sendError('FIELDS_VALIDATION_ERROR', $error, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        Password::sendResetLink(request()->all());
        return $this->sendResponse([], 'If your email address is registered with us, a reset link has been sent to your email address. Please be sure to check your spam or junk folder as well!');

    }

    public function reset()
    {
        $validator = Validator::make(request()->all(), [
            'email' => ['required', 'email', 'max:191', Rule::exists('users', 'email')->where('role', User::COMPANY_TYPE)],
            'password' => 'required|min:8|confirmed',
            'token' => 'required',
        ]);

        if ($validator->fails()) {
            $error = $validator->errors();
            return $this->sendError('FIELDS_VALIDATION_ERROR', $error, Response::HTTP_UNPROCESSABLE_ENTITY);
        }
        $status = Password::reset(request()->all(), function ($user, $password) {
            $user->password = Hash::make($password);
            $user->save();
        });

        if ($status == Password::INVALID_TOKEN) {
            return $this->sendError('FIELDS_VALIDATION_ERROR', ['token' => ['This password reset token is invalid or not exits']], Response::HTTP_UNPROCESSABLE_ENTITY);
        }
        return $this->sendResponse([], 'Password successfully changed');

    }

    public function logout(Request $request)
    {
        $logMessage = "";
        if ($request->type && 'manual' == $request->type) {
            $logMessage = "(manual)";
        } elseif ($request->type && 'auto' == $request->type) {
            $logMessage = "(auto)";
        }
        $user = $request->user();

        if (null != $user) {
            $totalDuration = $this->addLogoutLog($user, $request->bearerToken());
            if( '' !=$totalDuration)
            {
                /* tracking user logins */
                activity()
                    ->useLog('Issuer logout')
                    ->performedOn($user)
                    ->causedBy($user)
                    ->log($user->name . "$logMessage logout from issuer panel");
                /*end tracking user logins*/

                /* tracking user duration */
                activity()
                    ->useLog('User duration on platform')
                    ->performedOn($user)
                    ->causedBy($user)
                    ->withProperties(['duration' => $totalDuration])
                    ->log("total duration $totalDuration");
                /*end tracking user logins*/
            }
        }
        $user->currentAccessToken()->delete();
    }

    public function backToAdmin(Request $request)
    {
        $adminInfo = Crypt::decrypt($request->adminInfo);
        if (empty($adminInfo['id']) || empty($adminInfo['backUrl'])) {
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        $request->user()->currentAccessToken()->delete();
        return $this->sendResponse(['backUrl' => $adminInfo['backUrl']], 'successfully');
    }

    public function contact(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'company' => 'required',
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required',
        ]);

        if ($validator->fails()) {
            $error = $validator->errors();
            return $this->sendError('FIELDS_VALIDATION_ERROR', $error, Response::HTTP_UNPROCESSABLE_ENTITY);
        }
        try {
            $to = 'vadim@issuerpixel.com';
//            $to = 'sayydul@gmail.com';
            $details = [
                'company' => $request->company,
                'name' => $request->name,
                'email' => $request->email,
                'message' => $request->message,
                'phone' => $request->phone ?? '',
                'subject' => 'Contact Us Message',
            ];
            \Illuminate\Support\Facades\Notification::route('mail', $to)
                ->notify(new \App\Notifications\NewsletterAndContactEmailSend($details));

        } catch (Exception $ex) {
            \Log::info('email error' . $ex->getTraceAsString());
            return $this->sendError('Failed', 'Email sending failed', Response::HTTP_INTERNAL_SERVER_ERROR);
        }

    }
}
