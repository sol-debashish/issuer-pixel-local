<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\LeadershipAndGovernanceExecutive;
use App\Models\LeadershipAndGovernanceBoardMember;
use App\Models\LeadershipAndGovernenceMember;
use App\Traits\UploadTrait;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Company;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Validator;

class ProfileController extends BaseController
{
    use UploadTrait;
    public function storeQuestionnaire(Request $request, $profileInfo)
    {
        //dd($request->all());
        $data = Crypt::decrypt($profileInfo);
        $step = $request->submitted_step;
        $companyId = $data['company_id'];
        switch ($step) {
            case 1:
                $stored = (new Company)->storeStepOneData($request, $companyId);
                break;
            case 2:
                $stored = (new Company)->storeStepTwoData($request, $companyId);
                break;
            case 3:
                $stored = (new Company)->storeStepThreeData($request, $companyId);
                break;
            case 4:
                $stored = (new Company)->storeStepFourData($request, $companyId);
                break;
            case 5:
                $stored = (new Company)->storeStepFiveData($request, $companyId);
                break;
            case 6:
                $stored = (new Company)->storeStepSixData($request, $companyId);
                break;
        }

        return $stored;
    }

    public function getStepwiseCompanyData($step, $profileInfo)
    {
        $data = Crypt::decrypt($profileInfo);
        $companyId = $data['company_id'];
        try {
            $response = (new Company)->getStepwiseData($step, $companyId);

            //dd($response);exit;
            return $this->sendResponse($response, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getCompletedStep($profileInfo)
    {
        $data = Crypt::decrypt($profileInfo);

        if (empty($data['company_id'])) {
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        try {
            $response = Company::whereId($data['company_id'])->select(['steps_completed', 'name', 'phone_number'])->first()->toArray();
            return $this->sendResponse($response, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function companyQuestionnaireData($step)
    {
        try {
            $response = (new Company)->getStepwiseData($step, auth()->user()->company_id);
            return $this->sendResponse($response, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function companyQuestionnaireDataUpdate($step, Request $request)
    {
        try {
            $companyId = auth()->user()->company_id;
            switch ($step) {
                case 1:
                    $validArray = [
                        'company_name' => 'required|string|max:255|unique:companies,name,' . $companyId,
                        'hq_address' => 'required|string|max:191',
                        'hq_city' => 'required',
                        'hq_country' => 'required',
                        'hq_zip' => 'required',
                        'company_industry' => 'required',
//            'employee_number' => 'required',
//            'esg_business' => 'required',
                    ];
                    if($request->have_state == 1){
                        $validArray['hq_state'] = 'required';
                    }
                    if($request->have_province == 1){
                        $validArray['hq_province'] = 'required';
                    }
                    $validator = Validator::make($request->all(), $validArray);
                    if ($validator->fails()) {
                        $error = $validator->errors()->first();
                        return $this->sendError('FIELDS_VALIDATION_ERROR', $error, Response::HTTP_UNPROCESSABLE_ENTITY);
                    }
                    $stored = (new Company)->storeStepOneData($request, $companyId);
                    break;
                case 2:
                    $validator = Validator::make($request->all(), [
                        /*'ceo_list' => 'required|string|max:191',
                        'cfo_list' => 'required|string|max:191',*/
                        //'top_competitors' => 'required|string|max:191',
//            'sales_dept_email' => 'email',
//            'investor_relation_contact_email' => 'email',
                    ]);
                    if ($validator->fails()) {
                        $error = $validator->errors()->first();
                        return $this->sendError('FIELDS_VALIDATION_ERROR', $error, Response::HTTP_UNPROCESSABLE_ENTITY);
                    }
                    $stored = (new Company)->storeStepTwoData($request, $companyId);
                    break;
                case 3:
                    $stored = (new Company)->storeStepThreeData($request, $companyId);
                    break;
                case 4:
                    $stored = (new Company)->storeStepFourData($request, $companyId);
                    break;
                case 5:
                    $stored = (new Company)->storeStepFiveData($request, $companyId);
                    break;
                case 6:
                    $stored = (new Company)->storeStepSixData($request, $companyId);
                    break;
                case 7:
                    $stored = (new Company)->storeStepSevenData($request, $companyId);
                    break;
                case 8:
                    $stored = (new Company)->storeStepEightData($request, $companyId);
                    break;
                case 9:
                    $stored = (new Company)->storeStepNineData($request, $companyId);
                    break;

                case 10:
                    $stored = (new Company)->storeStepTenData($request, $companyId);
                     break;
            }
            return $this->sendResponse($stored, 'Updated successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function generalInformationEdit()
    {
        try {
            $user = User::with(['company' => function ($cSql) {
                $cSql->select('id', 'name', 'phone_number');
            }])->select('id', 'first_name', 'last_name', 'email', 'company_id')->whereId(auth()->id())->first();
            return $this->sendResponse($user, 'Updated successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function generalInformationUpdate(Request $request)
    {
        $user = auth()->user();
        $validator = Validator::make($request->all(), [
            'firstName' => 'required',
            'lastName' => 'required',
            'email' => 'required|email|unique:users,email,' . $user->id,
            'companyName' => 'required',
            'companyPhone' => 'required',
        ]);
        if ($validator->fails()) {
            $error = $validator->errors()->first();
            return $this->sendError('FIELDS_VALIDATION_ERROR', $error, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        try {
            $user->first_name = $request->firstName;
            $user->last_name = $request->lastName;
            $user->email = $request->email;
            $user->name = "{$request->firstName} {$request->lastName}";
            $user->save();
            $user->company->name = $request->companyName;
            $user->company->phone_number = $request->companyPhone;
            $user->company->save();

            $userInfo = [];
            $userInfo['id'] = $user->id;
            $userInfo['name'] = $user->name;
            $userInfo['firstName'] = $user->first_name;
            $userInfo['email'] = $user->email;
            $userInfo['company_id'] = $user->company_id;
            $userInfo['company'] = $user->company->name ? $user->company->name : '';
            $userInfo['company_image'] = $user->company->image ? config('filesystems.disks.s3.url') . "/" . config('filesystems.disks.s3.s3_env') . '/company_image/' . $user->company->image : '';

            return $this->sendResponse($userInfo, 'Updated successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function PasswordUpdate(Request $request)
    {
        $user = auth()->user();
        $validator = Validator::make($request->all(), [
            'oldPassword' => 'required',
            'password' => 'required|min:8|confirmed'
        ]);
        if ($validator->fails()) {
            $error = $validator->errors()->first();
            return $this->sendError('FIELDS_VALIDATION_ERROR', $error, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        try {
            if ((Hash::check(request('oldPassword'), $user->password)) == false) {
                return $this->sendError('INVALID_PASSWORD', 'Check your old password.', Response::HTTP_UNPROCESSABLE_ENTITY);

            } elseif ((Hash::check(request('password'), $user->password)) == true) {
                return $this->sendError('OLD_PASSWORD_AND_NEW_PASSWORD_MATCH', 'Please enter a password which is not similar then current password.', Response::HTTP_UNPROCESSABLE_ENTITY);
            } else {
                User::where('id', $user->id)->update(['password' => Hash::make(request()->password)]);
                $data = [];

                return $this->sendResponse($data, 'Password updated successfully.');
            }

            return $this->sendResponse([], 'Updated successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function destroyLagMember(LeadershipAndGovernenceMember $member)
    {
        if (auth()->user()->company_id != $member->company_id) {
            return $this->sendError('error', 'Unauthorized to delete this file', Response::HTTP_FORBIDDEN);
        }

        try {
            if (null != $member->profile_image) {
                $companyLagmFolder = config('filesystems.disks.s3.s3_env') . '/company_lagm/';
                $this->deleteFileIfExists($companyLagmFolder . $member->profile_image);
            }
            if ($member->delete()) {
                $this->updateLeadershipGovernanceCompletion($member->company_id);
            }
            return $this->sendResponse([], 'Member delete successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('SERVER_ERROR', 'There is a problem to perform action', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * update leadership governance completion score when all members deleted.
     * @param $company_id
     * @return void
     */
    public function updateLeadershipGovernanceCompletion($company_id) {
        $count = LeadershipAndGovernenceMember::where('company_id', $company_id)->count();
        if ($count == 0 ) {
            $company = Company::find($company_id);
            if ($company) {
                $company->leadership_governance_completed = 0;
                $company->save();
            }
        }
    }

}
