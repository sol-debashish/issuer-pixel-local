<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\HelpAndSupport;
use App\Models\Industry;
use App\Models\LeadershipAndGovernenceMember;
use App\Models\MediaFile;
use App\Traits\UploadTrait;
use App\Traits\NodeMap;
use App\Traits\Media;
use App\Models\CompanyCategorizationLookup;
use App\Models\CategorizationLevel;
use Barryvdh\Snappy\Facades\SnappyPdf as PDF;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Validator;
use App\Models\Bulletin;
use App\Models\User;

class CompanyController extends BaseController
{
    use UploadTrait;
    use NodeMap;
    use Media;

    private $companyImageFolder;
    private $companyIconFolder;

    public function __construct()
    {
        $this->companyImageFolder = config('filesystems.disks.s3.s3_env') . '/company_image/';
        $this->companyIconFolder = config('filesystems.disks.s3.s3_env') . '/company_icon/';
    }

    public function getHierarchyData(Request $request)
    {
        if (auth()->check()) {
            $companyId = auth()->user()->company_id;
        } else {
            if (null == $request->userInfo) {
                return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_UNAUTHORIZED);
            }
            $userInfo = Crypt::decrypt($request->userInfo);
            if (empty($userInfo['id'])) {
                return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_UNAUTHORIZED);
            }
            $companyId = $userInfo['company_id'];
        }

        try {
            $data = Industry::leftJoin('company_categorization_lookups', 'company_categorization_lookups.industry_id', '=', 'industries.id')
                ->where(['company_categorization_lookups.company_id' => $companyId, 'industries.status' => 1, 'industries.publish_status' => 1])
                ->select('industries.id', 'industries.description', 'company_categorization_lookups.id as lookup_id', 'company_categorization_lookups.categorization_level_id as categorization_level_id')->get()
                ->toArray();

            $result = uniqueSameHierarchyData($data, 'categorization_level_id');
            return $this->sendResponse($result, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }


    }

    public function hierarchyCompletedStatus()
    {
        try {
            $company = auth()->user()->company;
            return $this->sendResponse(['hierarchy_completed_status' => (bool)!$company->hierarchy_completed], 'successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }

    }

    public function hierarchyCompletedStatusChange()
    {
        try {
            $completedProfileFieldValue = 25;
            $company = auth()->user()->company;
            $company->hierarchy_completed = $completedProfileFieldValue;
            $company->save();
            return $this->sendResponse([], 'successful.', 200);
        } catch (Exception $ex) {
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }

    }

    public function profileCompletedStatus()
    {
        try {
            $company = auth()->user()->company;
            if (null == $company) {
                return $this->sendError('Company not found', 'Company not found', Response::HTTP_INTERNAL_SERVER_ERROR);
            }
            $data = [
                'general_info' => $company->general_info_completed,
                'contact' => $company->contact_completed,
                'structure' => $company->structure_completed,
                'valuation' => $company->valuation_completed,
                'social_presence' => $company->social_presence_completed,
                'hierarchy' => $company->hierarchy_completed,
                'history' => $company->history_completed,
                'corporate_action' => $company->corporate_action_completed,
                'leadership_governance' => $company->leadership_governance_completed,
            ];
            return $this->sendResponse($data, 'successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function photoUpload(Request $request)
    {
        try {
            $user = auth()->user();
            $company = $user->company;
            if ($companyProfileImage = $request->file) {
                $logMessage = "{$user->first_name}, {$user->last_name} ({$user->email}) upload profile photo on " . date('m/d/Y H:i:s');
                if (null != $company->image) {
                    $this->deleteFileIfExists($this->companyImageFolder . $company->image);
                    $logMessage = "{$user->first_name}, {$user->last_name} ({$user->email}) update profile photo on " . date('m/d/Y H:i:s');
                }
                // Upload image
                $company->image = $this->base64imageUpload($companyProfileImage, $this->companyImageFolder);
                $company->save();

                $userInfo = [];
                $userInfo['id'] = $user->id;
                $userInfo['name'] = $user->name;
                $userInfo['firstName'] = $user->first_name;
                $userInfo['email'] = $user->email;
                $userInfo['company_id'] = $user->company_id;
                $userInfo['company'] = $user->company ? $user->company->name : '';
                $userInfo['company_image'] = $user->company->image ? config('filesystems.disks.s3.url') . "/" . config('filesystems.disks.s3.s3_env') . '/company_image/' . $user->company->image : '';

                /* activity log */
                activity()
                    ->useLog('Issuer Profile Photo')
                    ->performedOn($user)
                    ->causedBy($user)
                    ->log($logMessage);
                /* end activity log */
            }

            return $this->sendResponse($userInfo, 'Data updated successfully.');
        } catch (Exception $ex) {
            return $this->sendError('NOT_CREATE', 'Data update failed', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function dashboardStatistics()
    {
        $companyId = auth()->user()->company_id;
        try {
            $result = MediaFile::select(\DB::raw("(select count(media_files.id) from media_files where media_files.media_type=2 AND media_files.company_id = {$companyId} AND  media_files.status = 2 AND media_files.is_meta_info_completed = 1 AND media_files.is_hierarchy_info_completed = 1) AS total_video"),
                \DB::raw("(select count(media_files.id) from media_files where media_files.media_type=1 AND media_files.company_id= {$companyId} AND media_files.status = 2 AND media_files.is_meta_info_completed = 1 AND media_files.is_hierarchy_info_completed = 1) AS total_audio"),
                \DB::raw("(select count(id) from media_file_view_logs where media_type=1 AND company_id= {$companyId}) AS total_audio_view"),
                \DB::raw("(select count(id) from media_file_view_logs where media_type=2 AND company_id= {$companyId}) AS total_video_view")
            )
                ->first();
            $recentVideoSelectedField = [
                'media_files.id',
                'media_files.uuid as media_uuid',
                'media_files.name', 'view_counter',
                'media_files.created_at',
                'media_type',
                's3_address',
                'companies.name as company_name',
                'companies.slug_name as company_slug',
                'companies.image',
                'video_id',
            ];
            $recentVideoQuery = MediaFile::leftJoin('companies', 'media_files.company_id', '=', 'companies.id')
                ->leftJoin('videos', 'media_files.id', '=', 'videos.media_file_id')
                ->where(['media_files.company_id' => $companyId,'media_type'=>2]);
            $files = $recentVideoQuery->select($recentVideoSelectedField)->where(['media_files.status'=> 2, 'media_files.is_meta_info_completed' => 1,  'media_files.is_hierarchy_info_completed' => 1])->groupBy('media_files.id')
                ->orderBy('id', 'DESC')->limit(3)->get();
            $recentVideoData = [];
            foreach ($files as $key => $value) {
                $recentVideoData[$key]['id'] = $value['id'];
                $recentVideoData[$key]['videoUuid'] = $value['media_uuid'];
                $recentVideoData[$key]['name'] = $value['name'];
                $recentVideoData[$key]['viewCounter'] = $value['view_counter'];
                $recentVideoData[$key]['companyName'] = $value['company_name'];
                $recentVideoData[$key]['companySlug'] = $value['company_slug'];
                $recentVideoData[$key]['createdAt'] = Carbon::parse($value['created_at'])->diffForHumans();
                $recentVideoData[$key]['videoId'] = $value['video_id'];
                $recentVideoData[$key]['fileThumb'] = "https://view.vzaar.com/{$value['video_id']}/image";
                $recentVideoData[$key]['companyImage'] = $value['image'] ? config('filesystems.disks.s3.url') . "/" . config('filesystems.disks.s3.s3_env') . "/company_image/{$value['image']}" : asset('/images/image-placeholder-1.png');
            }

            $recentAudioSelectedField = [
                'media_files.id',
                'media_files.uuid as media_uuid',
                'media_files.name', 'view_counter',
                'media_files.created_at',
                'media_type',
                's3_address',
                'companies.name as company_name',
                'companies.slug_name as company_slug',
                'companies.image',
            ];
            $recentAudioQuery = DB::table('media_files')
                    ->leftJoin('companies', 'media_files.company_id', '=', 'companies.id')
                    ->select($recentAudioSelectedField)
                    ->where(['media_files.company_id' => $companyId,'media_type'=> 1, 'media_files.status'=> 2, 'media_files.is_meta_info_completed' => 1,  'media_files.is_hierarchy_info_completed' => 1])
                    ->orderBy('id', 'DESC')->limit(3)->get();

            $recentAudioData = [];
            foreach ($recentAudioQuery as $audioKey => $audioValue) {
                $recentAudioData[$audioKey]['id'] = $audioValue->id;
                $recentAudioData[$audioKey]['audioUuid'] = $audioValue->media_uuid;
                $recentAudioData[$audioKey]['name'] = $audioValue->name;
                $recentAudioData[$audioKey]['viewCounter'] = $audioValue->view_counter;
                $recentAudioData[$audioKey]['companyName'] = $audioValue->company_name;
                $recentAudioData[$audioKey]['companySlug'] = $audioValue->company_slug;
                $recentAudioData[$audioKey]['createdAt'] = Carbon::parse($audioValue->created_at)->diffForHumans();
                $recentAudioData[$audioKey]['fileThumb'] = asset('images/audio_thumb.png');
                $recentAudioData[$audioKey]['companyImage'] = $audioValue->image ? config('filesystems.disks.s3.url') . "/" . config('filesystems.disks.s3.s3_env') . "/company_image/{$audioValue->image}" : asset('/images/image-placeholder-1.png');
            }

            // FETCH BULLETINS
//            $bulletins = Bulletin::select('id','title', 'created_at')->active()->limit(3)
//                ->orderBy('is_sticky','DESC')->orderBy('id', 'DESC')->get();
//            foreach($bulletins as $bulletin) {
//                $bulletin->createdBy = $bulletin->user->name;
//                $bulletin->createdAt = Carbon::parse($bulletin->created_at)->diffForHumans();
//            }

            $data = [
                'total_video' => (null != $result) ? $result->total_video : 0,
                'total_audio' => (null != $result) ? $result->total_audio : 0,
                'total_video_view' => (null != $result) ? $result->total_video_view : 0,
                'total_audio_view' => (null != $result) ? $result->total_audio_view : 0,
                'total_video_search' => 0,
                'latest_uploaded_video' => $recentVideoData,
                'latest_uploaded_audio' => $recentAudioData,
//                'bulletins' => $bulletins,
            ];
            return $this->sendResponse($data, 'Found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function supportContact(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'message' => 'required',
        ]);

        if ($validator->fails()) {
            $error = $validator->errors();
            return $this->sendError('FIELDS_VALIDATION_ERROR', $error, Response::HTTP_UNPROCESSABLE_ENTITY);
        }
        $user = auth()->user()->load('company');
        try {
            HelpAndSupport::create([
                'user_id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'phone' => $user->company->phone_number,
                'message' => $request->message,
            ]);

            /* activity log */
            activity()
                ->useLog('Help And Support')
                ->performedOn($user)
                ->causedBy($user)
                ->log("{$user->first_name}, {$user->last_name} ({$user->email}) request a help and support on " . date('m/d/Y H:i:s'));
            /* end activity log */

            $to = 'support@issuerpixel.com';
            $cc = 'dclenzi@issuerpixel.com';
//            $to = 'sayydul@gmail.com';
//            $cc = 'sayydul@hotmail.com';
            $details = [
                'message' => $request->message,
                'company' => $user->company->name,
                'name' => $user->name,
                'email' => $user->email,
                'phone' => $user->company->phone_number,
                'subject' => 'Help and Support Message',
            ];
            \Illuminate\Support\Facades\Notification::route('mail', [$to, $cc])
                ->notify(new \App\Notifications\NewsletterAndContactEmailSend($details));
            return $this->sendResponse([], 'Send successfully.', 200);
        } catch (Exception $ex) {
            \Log::info('email error' . $ex->getTraceAsString());
            return $this->sendError('Failed', 'Email sending failed', Response::HTTP_INTERNAL_SERVER_ERROR);
        }

    }

    public function companyBio(Request $request)
    {
        try {
//            $company = Company::with(['headquarters.address',
//                'headquarters.address.states' => function ($q) {
//                    $q->select('name', 'id');
//                },
//                'numberofEmployees',
//                'EsgScore',
//                'ownedBusiness',
//                'CompanyEgsScoreRating.MsciRating',
//                'CompanyEgsScoreRating.IssRating',
//                'CompanyEgsScoreRating.CdpRating',
//                'CompanyEgsScoreRating.SustainalyticsRating',
//            ])->whereId($request->uuid)->first();

            $company = Company::with(['headquarters.address',
                'headquarters.address.states' => function ($q) {
                    $q->select('name', 'id');
                },
                'headquarters.address.country' => function ($q) {
                    $q->select('name', 'id');
                },
                'BaseCurrency' => function ($q) {
                    $q->select('name', 'id');
                },
                'numberofEmployees', 'IntellectualProperty', 'PublicPrivateType', 'numberofShareholders', 'ResearchCoverage','companySocialMediaPlatform','CompanyIndustry','EsgScore','ownedBusiness','founders',
                'partnerships','vendors', 'DomicileCountry','tradingStatus','FinancingType','PatentType','CompanyHistories','CompanyAcquisition','CompanySpinOffs','DividendIssued','CompanySubsidiaries','MsciRating',
                'SustainalyticsRating','CdpRating','IssRating','BoardMembers.role','Executives.role','exchangeTradedOn','publiclyTradedType'])
                ->leftJoin('entity_types', 'companies.entity_type', '=', 'entity_types.id')
                ->select('companies.id', 'companies.name', 'companies.icon', 'companies.phone_number', 'companies.company_description', 'companies.ceo','companies.cfo', 'companies.number_employees_range', 'companies.number_shareholders_range',
                    'companies.industry_id', 'companies.sales_department_email', 'companies.sales_dept_phone', 'companies.investor_relations_department_email', 'companies.investor_relation_contact_phone',
                    'companies.business_development_contact_email', 'companies.business_development_contact_phone', 'companies.top_competitors', 'companies.domicile_country', 'companies.trading_status', 'companies.isin', 'companies.cusip',
                    'base_currency', 'conglomerate', 'conducted_financing_six_month', 'research_firm_name', 'ticker_symbol',
                    'companies.recent_valuation', 'companies.audited_financials', 'companies.public_private_type', 'entity_types.name as entityType')
                ->whereSlugName($request->slug)->firstOrFail();
            $company['storage_path'] =  config('filesystems.disks.s3.url') . "/" . config('filesystems.disks.s3.s3_env');;
            return $this->sendResponse($company, 'successful.', 200);
        } catch (Exception $ex) {
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function iconUpload(Request $request)
    {
        try {
            $user = auth()->user();
            $company = $user->company;
            if ($companyProfileIcon = $request->file) {
                if (null != $company->icon) {
                    $this->deleteFileIfExists($this->companyIconFolder . $company->icon);
                }else{
                    $generalInfoCompleted = $company->general_info_completed;
                    $totalProfileValue = config('general.issuer_profile_completion.general.total_value');
                    $totalProfileField = config('general.issuer_profile_completion.general.total_field');
                    $totalCompletedFields = (integer) (floor(($generalInfoCompleted * $totalProfileField) / $totalProfileValue ));
                    $totalCompletedFields++;
                    $company->general_info_completed = profileCompletePercentageCalculator($totalProfileValue, $totalProfileField, $totalCompletedFields);
                }
                // Upload icon
                $company->icon = $this->base64imageUpload($companyProfileIcon, $this->companyIconFolder);
                $company->save();

                $userInfo = [];
                $userInfo['company_icon'] = $user->company->icon ? config('filesystems.disks.s3.url') . "/" . config('filesystems.disks.s3.s3_env') . '/company_icon/' . $user->company->icon : '';
            }
            return $this->sendResponse($userInfo, 'Data updated successfully.');
        } catch (Exception $ex) {
            return $this->sendError('NOT_CREATE', 'Data update failed', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

//===============Function Added by khalid ==============
    public function getAllParentData($node_type, $node_id)
    {
        $data = [];
        $nodemapData = $this->getNodeMap($node_type);
        if ($nodemapData['parent_field'] != 'industry_id') {
            $NodeNamespace = "App\\Models\\" . $nodemapData['model'];
            $Nodedata = $NodeNamespace::whereId($node_id)->get($nodemapData['parent_field'])->toArray();
            $parentKey = $this->findNodeMapKeyByModel($nodemapData['parent_model']);
            $parentId = $Nodedata[0][$nodemapData['parent_field']];
            $parentNamespace = "App\\Models\\" . $nodemapData['parent_model'];
            $parentData = $parentNamespace::whereId($parentId)->get(['description', 'id'])->first();
            $parentField = $nodemapData['parent_field'];
//            $data[] = [$parentField => $parentId];
            $data[str_replace('-', '_', $parentKey)] = $parentData;
            $rtd = $this->getAllParentData($parentKey, $parentId);
            if (!empty($rtd)) {
                $data = array_merge($data, $rtd);
            }
        }
        return $data;
    }
    public function generateCompanyPdf(Request $request){
    //    dd($request->company_slug);
            $company = Company::with(['headquarters.address',
            'headquarters.address.states' => function ($q) {
                $q->select('name', 'id');
            },
            'headquarters.address.country' => function ($q) {
                $q->select('name', 'id');
            },
            'BaseCurrency' => function ($q) {
                $q->select('name', 'id');
            },
            'numberofEmployees', 'IntellectualProperty', 'PublicPrivateType', 'numberofShareholders', 'ResearchCoverage','companySocialMediaPlatform','CompanyIndustry','EsgScore','ownedBusiness','founders',
            'partnerships','vendors', 'DomicileCountry','tradingStatus','FinancingType','PatentType','CompanyHistories','CompanyAcquisition','CompanySpinOffs','DividendIssued','CompanySubsidiaries','MsciRating',
            'SustainalyticsRating','CdpRating','IssRating','BoardMembers.role','Executives.role','exchangeTradedOn'])
            ->leftJoin('entity_types', 'companies.entity_type', '=', 'entity_types.id')
            ->select('companies.id', 'companies.name', 'companies.icon', 'companies.phone_number', 'companies.company_description', 'companies.ceo','companies.cfo', 'companies.number_employees_range', 'companies.number_shareholders_range',
                'companies.industry_id', 'companies.sales_department_email', 'companies.sales_dept_phone', 'companies.investor_relations_department_email', 'companies.investor_relation_contact_phone',
                'companies.business_development_contact_email', 'companies.business_development_contact_phone', 'companies.top_competitors', 'companies.domicile_country', 'companies.trading_status', 'companies.isin', 'companies.cusip',
                'base_currency', 'conglomerate', 'conducted_financing_six_month', 'research_firm_name', 'ticker_symbol',
                'companies.recent_valuation', 'companies.audited_financials', 'companies.public_private_type', 'entity_types.name as entityType')
            ->whereSlugName($request->company_slug)->firstOrFail();

            $get_company = Company::whereSlugName($request->company_slug)->first();
            $company['storage_path'] =  config('filesystems.disks.s3.url') . "/" . config('filesystems.disks.s3.s3_env');

            $lookupsData = CompanyCategorizationLookup::where(['company_id' => $get_company->id])->orderBy('order')->get();
            $hierarchyData = [];
            foreach ($lookupsData as $row) {
                $catLevel = CategorizationLevel::findOrFail($row->categorization_level_id);
                $NodeType = $this->findNodeMapKeyByModel($catLevel->name);
                $parents = $this->getAllParentData($NodeType, $row->node_id);
                $lastNodemapData = $this->getNodeMap($NodeType);
                $lastlevelNamespace = "App\\Models\\" . $lastNodemapData['model'];
                $industry['categorization_id'] = $row->id;
                $industry['last_level'] = str_replace('-', '_', $NodeType);
                $industry['industry'] = Industry::whereId($row->industry_id)->get(['description', 'id'])->first();
                $lastLevelData = $lastlevelNamespace::whereId($row->node_id)->get(['description', 'id'])->first();
                $industry[str_replace('-', '_', $NodeType)] = $lastLevelData;
                $industry['last_level_description'] = $lastLevelData->description;
                $taxonomyData = array_merge($industry, $parents);
                $industry = [];
                $hierarchyData[] = $taxonomyData;
            }
        $hqAddress = isset($company->headquarters) ? $this->prepareHQAddress($company->headquarters) : '';
        $BoardMembers = $company->BoardMembers;
        $Executives   = $company->Executives;

            //main part
        $pdf = PDF::loadView('company.company_pdf', compact('company','hierarchyData', 'hqAddress', 'BoardMembers', 'Executives'))->setOption('margin-bottom', 0);
        $pdf->setTimeout(600); // 600 seconds
        return $pdf->download("companyProfile.pdf");

    }

    /**
     * prepare HQ address
     * @param $hq
     * @return string|void
     */
    public function prepareHQAddress($hq = null)
    {
        if (empty($hq)) return;
        $state = '';
        $addressOne = isset($hq->address->street_address_one) ? $hq->address->street_address_one . ', ' : '';
        $addressTwo = isset($hq->address->street_address_two) ? $hq->address->street_address_two . ', ' : '';
        $city       = isset($hq->address->city) ? $hq->address->city . ', ' : '';
        $zip        = isset($hq->address->zip) ? $hq->address->zip . ', ' : '';
        $country    = isset($hq->address->country) ? $hq->address->country->name : '';
        if (isset($hq->address->states)) {
            $state = $hq->address->states->name . ', ';
        } elseif(isset($hq->address->province)) {
            $state = $hq->address->province . ', ';
        }
        return $addressOne . $addressTwo . $city . $state . $zip . $country;
    }

//    public function lgMemberImageUpload(Request $request)
//    {
//        try {
//            $user = auth()->user();
//            if ($lgmImage = $request->file) {
//                $lagm = LeadershipAndGovernenceMember::firstOrNew(['company_id'=> $user->company_id]);
//                if (null != $lagm->profile_image) {
//                    $this->deleteFileIfExists($this->companyLagmFolder . $lagm->profile_image);
//                }
//                $lagm->profile_image = $this->base64imageUpload($lgmImage, $this->companyLagmFolder);
//                $lagm->save();
//                $data = [];
//                $data['profile_image'] = $lagm->profile_image ? config('filesystems.disks.s3.url') . "/" . config('filesystems.disks.s3.s3_env') . '/company_lagm/' . $lagm->profile_image : '';
//            }
//            return $this->sendResponse($data, 'Data updated successfully.');
//        } catch (Exception $ex) {
//            \Log::info('email error' . $ex->getTraceAsString());
//            return $this->sendError('NOT_CREATE', 'Data update failed', Response::HTTP_INTERNAL_SERVER_ERROR);
//        }
//    }
}
