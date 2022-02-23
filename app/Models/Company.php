<?php

namespace App\Models;

use App\Traits\ModelExceptionTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Validator;

class Company extends BaseCategoryModel
{
    use ModelExceptionTrait, SoftDeletes;

    protected $fillable = [
        'name',
        'slug_name',
        'phone_number',
        'allow_update_notification',
        'industry_id'
    ];

    public function mediaCategorizationLookup()
    {
        return $this->hasMany(MediaCategorizationLookup::class, 'company_id', 'id');
    }

    public function categorizationLookup()
    {
        return $this->hasMany(CompanyCategorizationLookup::class, 'company_id', 'id');
    }

    public function mediaFiles()
    {
        return $this->hasMany(MediaFile::class, 'company_id', 'id');
    }

    public function contentFolders()
    {
        return $this->hasMany(ContentFolder::class, 'company_id', 'id');
    }

    public function setSlugNameAttribute($value) {
        if (static::whereSlugName($slug = Str::slug($value))->exists())
        {
            $slug = $this->incrementSlug($slug);
        }
        $this->attributes['slug_name'] = $slug;
    }

    public function incrementSlug($slug)
    {
        $original = $slug;
        $count = 2;
        while (static::whereSlugName($slug)->exists()) {
            $slug = "{$original}-" . $count++;
        }
        return $slug;
    }

    public function storeStepOneData($request, $companyId)
    {
        DB::beginTransaction();
        try {
            $totalProfileValue = config('general.issuer_profile_completion.general.total_value');
            $totalProfileField = config('general.issuer_profile_completion.general.total_field');
            $completedProfileFieldValue = 0;

            $companyStep1Data = Company::findOrFail($companyId);

            if ($companyStep1Data->icon != null) {
                $completedProfileFieldValue++;
            }
            //Add Address
            $headquartersData = Headquarter::where('company_id', $companyId)->first();

            if ($headquartersData === null) {
                // Data doesn't exist
                //Add Address
                $addressArray = [
                    'street_address_one' => $request->hq_address,
                    'street_address_two' => $request->hq_address2,
                    'city' => $request->hq_city,
                    'state_id' => $request->hq_state,
                    'zip' => $request->hq_zip,
                    'country_code' => $request->hq_country
                ];
                if($request->hq_state !=""){
                    $addressArray['state_id'] = $request->hq_state;
                }else{
                    $addressArray['province'] = $request->hq_province;
                }
                $address = Address::create($addressArray);
                $address->save();
                $completedProfileFieldValue += 4;

                //Add Headquarters
                $headquarter = Headquarter::create([
                    'company_id' => $companyId,
                    'name' => '',
                    'primary_headquarters' => 1,
                    'address_id' => $address->id
                ]);
                $headquarter->save();
            } else {
                $updateAddress = Address::findOrFail($headquartersData->address_id);
                $updateAddress->street_address_one = $request->hq_address;
                $updateAddress->street_address_two = $request->hq_address2;
                $updateAddress->city = $request->hq_city;
                if($request->hq_state!="") {
                    $updateAddress->state_id = $request->hq_state;
                    $updateAddress->province = "";
                }else{
                    $updateAddress->state_id = "";
                    $updateAddress->province = $request->hq_province;
                }
                $updateAddress->zip = $request->hq_zip;
                $updateAddress->country_code = $request->hq_country;
                $updateAddress->save();
                $completedProfileFieldValue += 4;
            }
            /*Update Company tables Data*/
            if ($request->has('company_name')) {
                $companyStep1Data->name = $request->company_name;
                $completedProfileFieldValue++;
            }
            if ($request->has('esg_score') && $request->esg_score !== null) {
                $completedProfileFieldValue++;
            }
            if ($request->has('employee_number') && $request->employee_number != '') {
                $companyStep1Data->number_employees_range = $request->employee_number;
                $completedProfileFieldValue++;
            }
            if ($request->has('company_industry')) {
                $companyStep1Data->industry_id = $request->company_industry;
            }
            if ($request->has('company_description')) {
                $companyStep1Data->company_description = $request->company_description;
            }
            /*Intellectual Property*/
            $esgScores = [];
            if ($request->esg_score) {
                $esgScores = explode(',', $request->esg_score);
            }
            $companyStep1Data->EsgScore()->sync($esgScores);

            CompanyEsgScoreRatingLookup::updateOrCreate(
                ['company_id' => $companyId],
                ['msci_id' => $request->msci_rating, 'sustainalytics_id' => $request->sustainalytics, 'iss_id' => $request->iss_rating, 'cdp_id' => $request->cdp_rating]
            );

            /*Minority Owned Businesses*/
            $ownedBusiness = [];
            if ($request->owned_business) {
                $completedProfileFieldValue++;
                $ownedBusiness = explode(',', $request->owned_business);
            }
            $companyStep1Data->ownedBusiness()->sync($ownedBusiness);

            if ($request->submitted_step > $companyStep1Data->steps_completed) {
                $companyStep1Data->steps_completed = $request->submitted_step;
            }
            $companyStep1Data->general_info_completed = profileCompletePercentageCalculator($totalProfileValue, $totalProfileField, $completedProfileFieldValue);
            $companyStep1Data->save();
//            if ($companyStep1Data->isDirty()) {
//                $companyStep1Data->general_info_completed = profileCompletePercentageCalculator($totalProfileValue, $totalProfileField, $completedProfileFieldValue);
//                $companyStep1Data->save();
//            }

            /* activity log */
            $user = auth()->user();
            activity()
                ->useLog('Issuer Profile Edit')
                ->performedOn($user)
                ->causedBy($user)
                ->log("{$user->first_name}, {$user->last_name} ({$user->email}) edit general information on " . date('m/d/Y H:i:s'));
            /* end activity log */
            DB::commit();

        } catch (QueryException $qe) {
            DB::rollback();
            \Log::info('Company questionnaire step1 related exception' . $qe->getMessage());
            \Log::error($qe->getFile() . ':' . $qe->getLine() . ' ' . $qe->getMessage());
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        } catch (\Exception $e) {
            \Log::info('Company questionnaire step1 related exception' . $e->getMessage());
            \Log::error($e->getFile() . ':' . $e->getLine() . ' ' . $e->getMessage());
            DB::rollback();
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function storeStepTwoData($request, $companyId)
    {
        DB::beginTransaction();
        try {
            $totalProfileValue = config('general.issuer_profile_completion.contact.total_value');
            $totalProfileField = config('general.issuer_profile_completion.contact.total_field');
            $completedProfileFieldValue = 0;


            /* Companies Table Data Update*/
            $companyStep2Data = Company::findOrFail($companyId);
            $companyStep2Data->ceo = $request->ceo_list;
            $companyStep2Data->cfo = $request->cfo_list;
            $companyStep2Data->sales_department_email = $request->sales_dept_email;
            $companyStep2Data->sales_dept_phone = $request->sales_dept_phone;
            $companyStep2Data->investor_relation_contact_phone = $request->investor_relation_contact_phone;
            $companyStep2Data->business_development_contact_email = $request->business_development_contact_email;
            $companyStep2Data->business_development_contact_phone = $request->business_development_contact_phone;
            $companyStep2Data->investor_relations_department_email = $request->investor_relation_contact_email;
            $companyStep2Data->top_competitors = $request->top_competitors;
            if ($request->submitted_step > $companyStep2Data->steps_completed) {
                $companyStep2Data->steps_completed = $request->submitted_step;
            }
            if ($request->ceo_list != '') {
                $completedProfileFieldValue++;
            }
            if ($request->cfo_list != '') {
                $completedProfileFieldValue++;
            }
            if ($request->sales_dept_email != '') {
                $completedProfileFieldValue++;
            }
            if ($request->investor_relation_contact_email != '') {
                $completedProfileFieldValue++;
            }
            if ($request->business_development_contact_email != '') {
                $completedProfileFieldValue++;
            }
            /*This will use in future if needed*/
            /*if ($request->sales_dept_phone != '') {
                $completedProfileFieldValue++;
            }
            if ($request->investor_relation_contact_phone != '') {
                $completedProfileFieldValue++;
            }
            if ($request->business_development_contact_phone != '') {
                $completedProfileFieldValue++;
            }*/
            /*Company Founders Data insert*/
            $founders = json_decode($request->company_founders, true);
            if (!empty($founders[0]['name'])) {
                CompanyFounder::where('company_id', $companyId)->delete();
                $foundersData = [];
                foreach ($founders as $founder) {
                    $foundersData[] = ['company_id' => $companyId, 'name' => $founder['name']];
                }
                CompanyFounder::insert($foundersData);
                $completedProfileFieldValue++;
            }
            /*Company Strategic Partnerships Data insert*/
            $partners = json_decode($request->strategic_partnership, true);
            $partnershipCounter = 0;
            $partnershipCreateData = [];
            foreach ($partners as $partner) {
                if ($partner != '') {
                    $partnershipCreateData[$partnershipCounter] = ['company_id' => $companyId, 'name' => $partner];
                    $partnershipCounter++;
                }
            }
            $companyStep2Data->partnerships()->delete();
            StrategicPartnership::insert($partnershipCreateData);

            if (!empty($partnershipCreateData)) {
                $completedProfileFieldValue++;
            }
            /*Company Vendors Data insert*/
            $vendors = json_decode($request->vendors, true);
            $vendorCounter = 0;
            $vendorCreateData = [];
            foreach ($vendors as $vendor) {
                if ($vendor != '') {
                    $vendorCreateData[$vendorCounter] = ['company_id' => $companyId, 'name' => $vendor];
                    $vendorCounter++;
                }
            }
            $companyStep2Data->vendors()->delete();
            KeyVendor::insert($vendorCreateData);

//            if ($companyStep2Data->isDirty()) {
            $companyStep2Data->contact_completed = profileCompletePercentageCalculator($totalProfileValue, $totalProfileField, $completedProfileFieldValue);
            $companyStep2Data->save();
//            }
            /* activity log */
            $user = auth()->user();
            activity()
                ->useLog('Issuer Profile Edit')
                ->performedOn($user)
                ->causedBy($user)
                ->log("{$user->first_name}, {$user->last_name} ({$user->email}) edit company contact on " . date('m/d/Y H:i:s'));
            /* end activity log */

            DB::commit();

        } catch (QueryException $qe) {
            DB::rollback();
            \Log::info('Company questionnaire step2 related exception' . $qe->getMessage());
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        } catch (\Exception $e) {
            \Log::info('Company questionnaire step2 related exception' . $e->getMessage());
            DB::rollback();
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function storeStepThreeData($request, $companyId)
    {
        DB::beginTransaction();
        try {
            $totalProfileValue = config('general.issuer_profile_completion.structure.total_value');
            $totalProfileField = config('general.issuer_profile_completion.structure.total_field');
            $completedProfileFieldValue = 0;

            $companyStep3Data = Company::findOrFail($companyId);
            $companyStep3Data->domicile_country = $request->domicile_country;
            $companyStep3Data->entity_type = $request->entity_type;
            $companyStep3Data->public_private_type = $request->trading_and_reporting_status;
            $companyStep3Data->base_currency = $request->base_currency;
            $companyStep3Data->trading_status = $request->public_private_reporting_status;
            $companyStep3Data->publicly_traded_type = $request->publicly_traded_company;
            $companyStep3Data->number_shareholders_range = $request->shareholder_number;
            $companyStep3Data->ticker_symbol = $request->ticker_symbol;
            $companyStep3Data->isin =$request->isin;
            $companyStep3Data->cusip =$request->cusip;
            $companyStep3Data->conglomerate = $request->conglomerate;
            if ($request->submitted_step > $companyStep3Data->steps_completed) {
                $companyStep3Data->steps_completed = $request->submitted_step;
            }
            if ($request->domicile_country != '') {
                $completedProfileFieldValue++;
            }
            if ($request->trading_and_reporting_status != '') {
                $completedProfileFieldValue++;
                if ($request->trading_and_reporting_status_tag == 'public') {
                    $totalProfileField += 3;
                    if ($request->public_private_reporting_status != '') {
                        $completedProfileFieldValue++;
                    }
                    if ($request->publicly_traded_company != '') {
                        $completedProfileFieldValue++;
                    }
                    if ($request->ticker_symbol != '') {
                        $completedProfileFieldValue++;
                    }
                    if ($request->exchange_traded_on != '') {
                        $completedProfileFieldValue++;
                    }
                } elseif ($request->trading_and_reporting_status_tag == 'private') {
                    if ($request->public_private_reporting_status != '') {
                        $completedProfileFieldValue++;
                    }
                }
            }
            if ($request->shareholder_number != '') {
                $completedProfileFieldValue++;
            }
            if ($request->base_currency != '') {
                $completedProfileFieldValue++;
            }
            if ($request->conglomerate !== null) {
                $completedProfileFieldValue++;
                if ($request->conglomerate === 1) {
                    $totalProfileField += 1;
                    if ($request->subsidiary_name != '[]') {
                        $completedProfileFieldValue++;
                    }
                }
            }

            $exctron = [];
            if ($request->exchange_traded_on) {
                $exctron = explode(',', $request->exchange_traded_on);
            }
            $companyStep3Data->exchangeTradedOn()->sync($exctron);

            /*subsidiary add related functionality*/
            $subsidiaries = json_decode($request->subsidiary_name, true);
            $subsidiaryCounter = 0;
            $subsidiaryCreateData = [];
            foreach ($subsidiaries as $subsidiary) {
                if ($subsidiary != '') {
                    $subsidiaryCreateData[$subsidiaryCounter] = ['company_id' => $companyId, 'name' => $subsidiary];
                    $subsidiaryCounter++;
                }
            }
            $companyStep3Data->conglomerateSubsidiary()->delete();
            CompanyConglomerateSubsidiary::insert($subsidiaryCreateData);

            //if ($companyStep3Data->isDirty()) {
            $companyStep3Data->structure_completed = profileCompletePercentageCalculator($totalProfileValue, $totalProfileField, $completedProfileFieldValue);
            $companyStep3Data->save();
            // }

            /* activity log */
            $user = auth()->user();
            activity()
                ->useLog('Issuer Profile Edit')
                ->performedOn($user)
                ->causedBy($user)
                ->log("{$user->first_name}, {$user->last_name} ({$user->email}) edit company structure on " . date('m/d/Y H:i:s'));
            /* end activity log */
            DB::commit();

        } catch (QueryException $qe) {
            DB::rollback();
            \Log::info('Company questionnaire step3 related exception' . $qe->getMessage());
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        } catch (\Exception $e) {
            \Log::info('Company questionnaire step3 related exception' . $e->getMessage());
            DB::rollback();
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function storeStepFourData($request, $companyId)
    {
        DB::beginTransaction();
        try {
            $totalProfileValue = config('general.issuer_profile_completion.valuation.total_value');
            $totalProfileField = config('general.issuer_profile_completion.valuation.total_field');
            $completedProfileFieldValue = 0;

            $companyStep4Data = Company::findOrFail($companyId);
            $companyStep4Data->conducted_financing_six_month = $request->conduct_financing;
            $companyStep4Data->audited_financials = $request->audited_finance;
            $companyStep4Data->recent_valuation = $request->company_valuation;
            if ($request->submitted_step > $companyStep4Data->steps_completed) {
                $companyStep4Data->steps_completed = $request->submitted_step;
            }

            /*Financing Type*/
            $financeType = [];
            if ($request->financing_type) {
                $financeType = explode(',', $request->financing_type);
            }
            $companyStep4Data->FinancingType()->sync($financeType);
            /*Intellectual Property*/
            $intelPro = [];
            if ($request->intelletual_property) {
                $intelPro = explode(',', $request->intelletual_property);
            }
            $companyStep4Data->IntellectualProperty()->sync($intelPro);
            /*Patent Type*/
            $patentType = [];
            if ($request->patent_type) {
                $patentType = explode(',', $request->patent_type);
            }
            $companyStep4Data->PatentType()->sync($patentType);

            if ($request->conduct_financing !== null) {
                $completedProfileFieldValue++;
                if ($request->conduct_financing === 1) {
                    $totalProfileField += 1;
                    if ($request->financing_type != "") {
                        $completedProfileFieldValue++;
                    }
                }
            }
            if ($request->audited_finance !== null) {
                $completedProfileFieldValue++;
            }
            if ($request->company_valuation != '') {
                $completedProfileFieldValue++;
            }
            if (!empty($intelPro)) {
                $completedProfileFieldValue++;
                if (in_array(2, $intelPro)) { /*2 Is the Id for Patent Type*/
                    $totalProfileField += 1;
                    if ($request->patent_type != "") {
                        $completedProfileFieldValue++;
                    }
                }
            }
            //if ($companyStep4Data->isDirty()) {
            $companyStep4Data->valuation_completed = profileCompletePercentageCalculator($totalProfileValue, $totalProfileField, $completedProfileFieldValue);
            $companyStep4Data->save();
            // }
            /* activity log */
            $user = auth()->user();
            activity()
                ->useLog('Issuer Profile Edit')
                ->performedOn($user)
                ->causedBy($user)
                ->log("{$user->first_name}, {$user->last_name} ({$user->email}) edit valuation & IP on " . date('m/d/Y H:i:s'));
            /* end activity log */
            DB::commit();

        } catch (QueryException $qe) {
            DB::rollback();
            \Log::info('Company questionnaire step4 related exception' . $qe->getMessage());
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        } catch (\Exception $e) {
            \Log::info('Company questionnaire step4 related exception' . $e->getMessage());
            DB::rollback();
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function storeStepFiveData($request, $companyId)
    {
        try {
            $totalProfileValue = config('general.issuer_profile_completion.social.total_value');
            $totalProfileField = config('general.issuer_profile_completion.social.total_field');
            $completedProfileFieldValue = 1;

            $companyStep5Data = Company::findOrFail($companyId);
            $platformData = [];
            if ($request->socialMediaPlatform) {
                foreach ($request->socialMediaPlatform as $socialMediaPlatform) {
                    $completedProfileFieldValue++;
                    $platformData[$socialMediaPlatform[0]] = [
                        'value' => $socialMediaPlatform[1]
                    ];
                }
            }
            $companyStep5Data->companySocialMediaPlatform()->sync($platformData);


//            $nlsmArray = [];
//            if ($request->non_listed_social_media) {
//                $nlsmArray = explode(',', $request->non_listed_social_media);
//            }
//
//            $nlsmArrayCounter = 0;
//            $nlsmCreateData = [];
//            foreach ($nlsmArray as $nlsm) {
//                if ($nlsm != '') {
//                    $nlsmCreateData[$nlsmArrayCounter]['name'] = $nlsm;
//                    $nlsmArrayCounter++;
//                }
//
//            }
//            $companyStep5Data->nonListedSocialMedia()->delete();
//            $companyStep5Data->nonListedSocialMedia()->createMany($nlsmCreateData);
//

            if ($request->submitted_step > $companyStep5Data->steps_completed) {
                $companyStep5Data->steps_completed = $request->submitted_step;
            }
            $companyStep5Data->social_presence_completed = profileCompletePercentageCalculator($totalProfileValue, $totalProfileField, $completedProfileFieldValue);
            $companyStep5Data->save();
            /* activity log */
            $user = auth()->user();
            activity()
                ->useLog('Issuer Profile Edit')
                ->performedOn($user)
                ->causedBy($user)
                ->log("{$user->first_name}, {$user->last_name} ({$user->email}) edit social presence on " . date('m/d/Y H:i:s'));
            /* end activity log */

        } catch (QueryException $qe) {
            \Log::info('Company questionnaire step5 related exception' . $qe->getMessage());
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        } catch (\Exception $e) {
            \Log::info('Company questionnaire step5 related exception' . $e->getMessage());
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function storeStepSixData($request, $companyId)
    {
        try {
            $totalProfileValue = config('general.issuer_profile_completion.taxonomy.total_value');
            $totalProfileField = config('general.issuer_profile_completion.taxonomy.total_field');
            $completedProfileFieldValue = 25;

            $companyStep6Data = Company::findOrFail($companyId);
            if ($request->submitted_step > $companyStep6Data->steps_completed) {
                $companyStep6Data->steps_completed = $request->submitted_step;
            }
            $companyStep6Data->hierarchy_completed = profileCompletePercentageCalculator($totalProfileValue, $totalProfileField, $completedProfileFieldValue);
            $companyStep6Data->save();

            /* activity log */
            $user = auth()->user();
            activity()
                ->useLog('Issuer Profile Edit')
                ->performedOn($user)
                ->causedBy($user)
                ->log("{$user->first_name}, {$user->last_name} ({$user->email}) edit taxonomy on " . date('m/d/Y H:i:s'));
            /* end activity log */

        } catch (QueryException $qe) {
            \Log::info('Company questionnaire step6 related exception' . $qe->getMessage());
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        } catch (\Exception $e) {
            \Log::info('Company questionnaire step6 related exception' . $e->getMessage());
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function storeStepSevenData($request, $companyId)
    {
        try {
            $totalProfileValue = config('general.issuer_profile_completion.history.total_value');
            $totalProfileField = config('general.issuer_profile_completion.history.total_field');
            $completedProfileFieldValue = 0;
            $companyStep7Data = Company::findOrFail($companyId);
            if (isset($request->formedYear)) {
                $completedProfileFieldValue++;
            }
            if (isset($request->firstProductOrService)) {
                $completedProfileFieldValue++;
            }
            $companyStep7Data->history_completed = profileCompletePercentageCalculator($totalProfileValue, $totalProfileField, $completedProfileFieldValue);
            $companyStep7Data->save();

            CompanyHistory::updateOrCreate(
                ['company_id' => $companyId],
                [
                    'formed_year' => $request->formedYear,
                    'first_product_or_service' => $request->firstProductOrService,
                    'number_of_major_product' => $request->numberOfMajorProductOrService,
                    'change_direction_or_strategy' => $request->changeDirectionOrStrategy,
                    'previous_product' => $request->previousProduct,
                    'change_year' => $request->yearOfchange,
                ]
            );
            /* activity log */
            $user = auth()->user();
            activity()
                ->useLog('Issuer Profile Edit')
                ->performedOn($user)
                ->causedBy($user)
                ->log("{$user->first_name}, {$user->last_name} ({$user->email}) edit company history on " . date('m/d/Y H:i:s'));
            /* end activity log */

        } catch (QueryException $qe) {
            \Log::info('Company questionnaire step7 related exception' . $qe->getMessage());
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        } catch (\Exception $e) {
            \Log::info('Company questionnaire step7 related exception' . $e->getMessage());
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function storeStepEightData($request, $companyId)
    {
        try {
            $totalProfileValue = config('general.issuer_profile_completion.corporate_action.total_value');
            $totalProfileField = config('general.issuer_profile_completion.corporate_action.total_field');
            $completedProfileFieldValue = 0;
            $companyStep8Data = Company::findOrFail($companyId);
            if (isset($request->acquisitionsMade)) {
                $completedProfileFieldValue++;
            }
            if (isset($request->spinOffMade)) {
                $completedProfileFieldValue++;
            }
            $companyStep8Data->corporate_action_completed = profileCompletePercentageCalculator($totalProfileValue, $totalProfileField, $completedProfileFieldValue);
            $companyStep8Data->save();

            $compayCorporateAction = CompanyCorporateAction::updateOrCreate(
                ['company_id' => $companyId],
                ['acquisitions_made' => $request->acquisitionsMade,
                    'previous_acquisitions' => $request->previousAcquisitions,
                    'previous_acquisitions_name' => $request->previousAcquisitionsName,
                    'previous_acquisitions_year' => $request->previousAcquisitionsYear,
                    'spin_off' => $request->spinOffMade, 'spin_off_acquisitions_name' => $request->spinOffAcquisitionsName,
                    'spin_off_acquisitions_year' => $request->spinOffAcquisitionsYear, 'dividend' => $request->dividend]
            );


            /*Acquisition data*/
            $acquisition  = [];
            if($request->acquisitions)
            {
                $acquisitions = json_decode($request->acquisitions, true);
                $acquisitionsCounter = 0;
                $acquisitionsCreateData = [];
                foreach ($acquisitions as $acquisition) {
                    if ($acquisition != '' && ($acquisition['name'] != '' || $acquisition['year']!= '')) {
                        $acquisitionsCreateData[$acquisitionsCounter] = ['company_id' => $companyId, 'name' => $acquisition['name'], 'year' => $acquisition['year'] ?? ''];
                        $acquisitionsCounter++;
                    }
                }
                CompanyAcquisition::where('company_id', $companyId)->delete();
                CompanyAcquisition::insert($acquisitionsCreateData);
            }
            /* Spin Off data*/
            $acquisition  = [];

            if($request->spinOff)
            {
                $spinOffs = json_decode($request->spinOff, true);
                $spinOffCounter = 0;
                $spinOffCreateData = [];
                foreach ($spinOffs as $spinOff) {
                    if ($spinOff != '' && ($spinOff['spinOff_acquisitions_name'] != '' || $spinOff['spinOff_acquisitions_year']!= '')) {
                        $spinOffCreateData[$spinOffCounter] = ['company_id' => $companyId, 'spinOff_acquisitions_name' => $spinOff['spinOff_acquisitions_name'], 'spinOff_acquisitions_year' =>  $spinOff['spinOff_acquisitions_year'] ?? ''];
                        $spinOffCounter++;
                    }
                }
                CompanySpinOff::where('company_id', $companyId)->delete();
                CompanySpinOff::insert($spinOffCreateData);
            }

//            $partners = json_decode($request->strategic_partnership, true);
//            $partnershipCounter = 0;
//            $partnershipCreateData = [];
//            foreach ($partners as $partner) {
//                if ($partner != '') {
//                    $partnershipCreateData[$partnershipCounter] = ['company_id' => $companyId, 'name' => $partner];
//                    $partnershipCounter++;
//                }
//            }
//            $companyStep2Data->partnerships()->delete();
//            StrategicPartnership::insert($partnershipCreateData);

            /* activity log */
            $user = auth()->user();
            activity()
                ->useLog('Issuer Profile Edit')
                ->performedOn($user)
                ->causedBy($user)
                ->log("{$user->first_name}, {$user->last_name} ({$user->email}) edit corporate actions on " . date('m/d/Y H:i:s'));
            /* end activity log */

        } catch (QueryException $qe) {
            \Log::info('Company questionnaire step8 related exception' . $qe->getMessage());
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        } catch (\Exception $e) {
            \Log::info('Company questionnaire step8 related exception' . $e->getMessage());
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function storeStepNineData($request, $companyId)
    {
        try {
            $boardMember  = [];
            if($request->boardMembers)
            {
                LeadershipAndGovernanceBoardMember::where('company_id', $companyId)->delete();
                $boardMembers = json_decode($request->boardMembers, true);

                foreach ($boardMembers as $boardMember) {
                    if ($boardMember != '' && ($boardMember['firstName'] != '' || $boardMember['lastName'] != '' || $boardMember['committee'] != '' || $boardMember['otherCommittee'] != '')) {
                        $boardMemberInput = [
                            'company_id' => $companyId,
                            'first_name' => $boardMember['firstName'],
                            'last_name' => $boardMember['lastName'],
                            'role_id' => $boardMember['committee'] ? $boardMember['committee'] : null,
                            'other_role' => $boardMember['otherCommittee']
                        ];
                        LeadershipAndGovernanceBoardMember::create($boardMemberInput);
                    }
                }
            }

            $executive  = [];
            if($request->executives)
            {
                LeadershipAndGovernanceExecutive::where('company_id', $companyId)->delete();
                $executives = json_decode($request->executives, true);

                foreach ($executives as $executive) {
                    if ($executive != '' && ($executive['firstName'] != '' || $executive['lastName'] != '' || $executive['executiveRole'] != '')) {
                        $executiveInput = [
                            'company_id' => $companyId,
                            'first_name' => $executive['firstName'],
                            'last_name' => $executive['lastName'],
                            'role_id' => $executive['executiveRole'] ? $executive['executiveRole'] : null
                        ];
                        LeadershipAndGovernanceExecutive::create($executiveInput);
                    }
                }
            }

        } catch (QueryException $qe) {
            \Log::info('Company questionnaire step 9 related exception' . $qe->getMessage());
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        } catch (\Exception $e) {
            \Log::info('Company questionnaire step 9 related exception' . $e->getMessage());
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

     public function storeStepTenData($request, $companyId)
        {

        DB::beginTransaction();
                try {
                    $companyStep10Data = Company::findOrFail($companyId);
                    /*Research Coverage Type*/
                    $researchType = [];
                    if ($request->research_coverage_type) {
                        $researchType = explode(',', $request->research_coverage_type);
                    }
                    $companyStep10Data->ResearchCoverage()->sync($researchType);
                    /*Shared Community Research Type*/
                    $researchComm = [];
                    if ($request->shared_community_research) {
                        $researchComm = explode(',', $request->shared_community_research);
                    }
                    $companyStep10Data->SharedCommunityResearch()->sync($researchComm);

                    $companyStep10Data->research_firm_name = $request->researchFirm_name;
                    $companyStep10Data->save();

                    /* activity log */
                    $user = auth()->user();
                    activity()
                        ->useLog('Issuer Profile Edit')
                        ->performedOn($user)
                        ->causedBy($user)
                        ->log("{$user->first_name}, {$user->last_name} ({$user->email}) edit Research Coverage  on " . date('m/d/Y H:i:s'));
                    /* end activity log */
                    DB::commit();

                } catch (QueryException $qe) {
                    DB::rollback();
                    \Log::info('Company questionnaire step9 related exception' . $qe->getMessage());
                    return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
                } catch (\Exception $e) {
                    \Log::info('Company questionnaire step9 related exception' . $e->getMessage());
                    DB::rollback();
                    return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
                }

        }

    public function getStepwiseData($step, $companyId)
    {
        switch ($step) {
            case 1:
                return Company::with(['headquarters.address',
                    'headquarters.address.states' => function ($q) {
                        $q->select('name', 'id');
                    },
                    'numberofEmployees',
                    'EsgScore',
                    'ownedBusiness',
                    'CompanyEgsScoreRating.MsciRating',
                    'CompanyEgsScoreRating.IssRating',
                    'CompanyEgsScoreRating.CdpRating',
                    'CompanyEgsScoreRating.SustainalyticsRating',
                ])->whereId($companyId)->select(['id', 'name', 'number_employees_range', 'steps_completed', 'icon', 'industry_id', 'company_description'])->first()->toArray();
                break;
            case 2:
                return Company::with(['founders', 'partnerships', 'vendors'])->whereId($companyId)->select(['id', 'ceo', 'cfo', 'sales_department_email', 'sales_dept_phone', 'investor_relations_department_email', 'investor_relation_contact_phone', 'business_development_contact_phone', 'business_development_contact_email', 'top_competitors', 'steps_completed'])->first()->toArray();
                break;
            case 3:
                return Company::with([
                    'entityType' => function ($q) {
                        $q->select('name', 'id');
                    },
                    'PublicPrivateType' => function ($q) {
                        $q->select('name', 'id', 'tag');
                    },
                    'BaseCurrency' => function ($q) {
                        $q->select('name', 'id');
                    },
                    /* 'legalEntityType' => function ($q) {
                         $q->select('name', 'id');
                     },*/
                    'tradingStatus' => function ($q) {
                        $q->select('name', 'id', 'type');
                    },
                    'publiclyTradedType' => function ($q) {
                        $q->select('name', 'id');
                    },
                    'conglomerateSubsidiary',
                    'exchangeTradedOn',
                    'numberofShareholders'
                ])->whereId($companyId)->select(['id', 'entity_type','domicile_country', 'public_private_type', 'base_currency', 'trading_status', 'publicly_traded_type', 'exchange_traded_on', 'number_shareholders_range', 'ticker_symbol', 'isin', 'cusip', 'conglomerate', 'steps_completed'])->first()->toArray();
                break;
            case 4:
                return Company::with([
                    'BaseCurrency' => function ($q) {
                        $q->select('name', 'id', 'unicode_decimal');
                    },
                    'FinancingType',
                    'IntellectualProperty',
                    'PatentType',
                    'ResearchCoverage',
                    'SharedCommunityResearch',
                ])->whereId($companyId)->select(['id', 'conducted_financing_six_month', 'audited_financials', 'base_currency', 'recent_valuation', 'steps_completed'])->first()->toArray();
                break;
            case 5:
                $d = Company::with([
                    'companySocialMediaPlatform',
                ])->whereId($companyId)->select(['id'])->first()->toArray();
//                dd($d);
                return $d;
                break;
            case 6:
                $taxo = Company::whereId($companyId)->select(['id', 'steps_completed'])->first()->toArray();
                return $taxo;
                break;
            case 7:
                return Company::with([
                    'CompanyHistories',
                ])->whereId($companyId)->select(['id'])->first()->toArray();
                break;
            case 8:
                $companyCorporateAction = CompanyCorporateAction::with(['acquisitions', 'spin'])->where('company_id', $companyId)->first();
                if(null != $companyCorporateAction)
                {
                    foreach ($companyCorporateAction->acquisitions as $key => $acquisitions)
                    {
                        $companyCorporateAction->acquisitions[$key]['year'] = (string) (0 != $acquisitions->year) ? $acquisitions->year : "";
                    }
                    foreach ($companyCorporateAction->spin as $key => $spinOff)

                    {
                        $companyCorporateAction->spin[$key]['spinOff_acquisitions_year'] = (string) (0 != $spinOff->spinOff_acquisitions_year) ? $spinOff->spinOff_acquisitions_year : "";
                    }
                }

                return $companyCorporateAction;
                break;
            case 9:
                $boardMembers = LeadershipAndGovernanceBoardMember::where('company_id', $companyId)->select(['id', 'first_name as firstName', 'last_name as lastName', 'role_id as committee', 'other_role as otherCommittee'])->get();

                $executives = LeadershipAndGovernanceExecutive::where('company_id', $companyId)->select(['id', 'first_name as firstName', 'last_name as lastName', 'role_id as executiveRole'])->get();

                $data = [
                    'boardMembers' => $boardMembers,
                    'totalBoardMembers' => $boardMembers->count(),
                    'executives' => $executives,
                    'totalExecutives' => $executives->count()
                ];

                return $data;
                break;
            case 10:
                    return Company::with([
                        'ResearchCoverage',
                        'SharedCommunityResearch',
                    ])->whereId($companyId)->select(['id', 'research_firm_name', 'audited_financials', 'base_currency', 'recent_valuation', 'steps_completed'])->first()->toArray();
                    break;
        }
    }

    public function founders()
    {
        return $this->hasMany(CompanyFounder::class, 'company_id', 'id');
    }

    public function headquarters()
    {
        return $this->hasOne(Headquarter::class, 'company_id', 'id');
    }

    public function vendors()
    {
        return $this->hasMany(KeyVendor::class, 'company_id', 'id');
    }

    public function partnerships()
    {
        return $this->hasMany(StrategicPartnership::class, 'company_id', 'id');
    }

    public function researchCoverages()
    {
        return $this->hasMany(ResearchCoverageLookup::class, 'company_id', 'id');
    }

    public function PublicPrivateType()
    {
        return $this->belongsTo(PublicPrivateCompanyType::class, 'public_private_type', 'id');
    }

    public function entityType()
    {
        return $this->belongsTo(EntityType::class, 'entity_type', 'id');
    }

    public function BaseCurrency()
    {
        return $this->belongsTo(Currency::class, 'base_currency', 'id');
    }

    public function legalEntityType()
    {
        return $this->belongsTo(LegalEntityType::class, 'legal_entity_type', 'id');
    }

    public function tradingStatus()
    {
        return $this->belongsTo(TradingAndReportingStatus::class, 'trading_status', 'id');
    }

    public function publiclyTradedType()
    {
        return $this->belongsTo(PubliclyTradedCompanyType::class, 'publicly_traded_type', 'id');
    }

    public function user()
    {
        return $this->hasMany(User::class, 'company_id', 'id');
    }

    public function EsgScore()
    {
        return $this->belongsToMany(EsgScore::class, 'company_esg_score_lookups', 'company_id', 'egs_score_id');
    }

    public function ownedBusiness()
    {
        return $this->belongsToMany(OwnedBusiness::class, 'company_own_business_lookups', 'company_id', 'own_business_id');
    }

    public function CompanyEgsScoreRating()
    {
        return $this->hasOne(CompanyEsgScoreRatingLookup::class, 'company_id', 'id');
    }

    public function exchangeTradedOn()
    {
        return $this->belongsToMany(ExchangeTraded::class, 'company_exchange_traded_lookups', 'company_id', 'exchange_traded_id');
    }

    public function FinancingType()
    {
        return $this->belongsToMany(FinancingType::class, 'company_financing_type_lookups', 'company_id', 'financing_type_id');
    }

    public function IntellectualProperty()
    {
        return $this->belongsToMany(IntelletualProperty::class, 'company_intelletual_property_lookups', 'company_id', 'intell_property_id');
    }

    public function PatentType()
    {
        return $this->belongsToMany(PatentsType::class, 'company_patent_type_lookups', 'company_id', 'patent_type_id');
    }

    public function numberofEmployees()
    {
        return $this->belongsTo(EmployeeNumber::class, 'number_employees_range', 'id');
    }

    public function numberofShareholders()
    {
        return $this->belongsTo(ShareholderNumber::class, 'number_shareholders_range', 'id');
    }

    public function ResearchCoverage()
    {
        return $this->belongsToMany(ResearchCoverageType::class, 'research_coverage_lookups', 'company_id', 'research_coverage_type');
    }

    public function SharedCommunityResearch()
    {
        return $this->belongsToMany(SharedCommunityResearchPlatform::class, 'company_shared_community_research_lookups', 'company_id', 'community_id');
    }

    public function socialMediaCategory()
    {
        return $this->belongsToMany(SocialMediaCategory::class, 'company_social_media_categories', 'company_id', 'social_media_category_id')->withTimestamps();
    }

    public function companySocialMediaPlatform()
    {
        return $this->belongsToMany(SocialMediaPlatform::class, 'company_social_media_platforms', 'company_id', 'social_media_platform_id')->withPivot('value');
    }

    public function socialNetworkingSites()
    {
        return $this->belongsToMany(SocialNetworkingSite::class, 'company_social_networking_sites', 'company_id', 'social_networking_site_id')->withTimestamps();
    }

    public function socialBookmarkingSites()
    {
        return $this->belongsToMany(SocialBookmarkingSite::class, 'company_social_bookmarking_sites', 'company_id', 'social_bookmarking_site_id')->withTimestamps();
    }

    public function socialNewsSites()
    {
        return $this->belongsToMany(SocialNewsSite::class, 'company_social_news_sites', 'company_id', 'social_news_site_id')->withTimestamps();
    }

    public function videoSharingSites()
    {
        return $this->belongsToMany(VideoSharingSite::class, 'company_video_sharing_sites', 'company_id', 'video_sharing_site_id')->withTimestamps();
    }

    public function microbloggingSites()
    {
        return $this->belongsToMany(MicroBloggingSite::class, 'company_micro_blogging_sites', 'company_id', 'micro_blogging_site_id')->withTimestamps();
    }

    public function conglomerateSubsidiary()
    {
        return $this->hasMany(CompanyConglomerateSubsidiary::class, 'company_id', 'id');
    }

    public function nonListedSocialMedia()
    {
        return $this->hasMany(CompanyNonListedSocialMedia::class, 'company_id', 'id');
    }

    public function socialSiteListUrls()
    {
        return $this->hasOne(CompanySocialSiteUrl::class, 'company_id', 'id');
    }

    public function mediaUploadFormData()
    {
        return $this->hasOne(MediaUploadFormData::class, 'company_id', 'id');
    }

    public function CompanyHistories()
    {
        return $this->hasOne(CompanyHistory::class, 'company_id', 'id');
    }

    public function CompanyCorporateActions()
    {
        return $this->hasOne(CompanyCorporateAction::class, 'company_id', 'id');
    }

    public function CompanyIndustry()
    {
        return $this->belongsTo(Industry::class, 'industry_id', 'id');
    }

    public function DomicileCountry()
    {
        return $this->belongsTo(Country::class, 'domicile_country', 'id');
    }

    public function CompanyAcquisition()
    {
        return $this->hasMany(CompanyAcquisition::class, 'company_id', 'id');
    }

    public function CompanySpinOffs()
    {
        return $this->hasMany(CompanySpinOff::class, 'company_id', 'id');
    }

    public function DividendIssued()
    {
        return $this->hasOne(CompanyCorporateAction::class, 'company_id', 'id');
    }

    public function CompanySubsidiaries()
    {
        return $this->hasMany(CompanyConglomerateSubsidiary::class, 'company_id', 'id');
    }

    public function MsciRating()
    {
        return $this->belongsToMany(EsgScoreRating::class, 'company_esg_score_rating_lookups', 'company_id', 'msci_id');
    }

    public function SustainalyticsRating()
    {
        return $this->belongsToMany(EsgScoreRating::class, 'company_esg_score_rating_lookups', 'company_id', 'sustainalytics_id');
    }

    public function CdpRating()
    {
        return $this->belongsToMany(EsgScoreRating::class, 'company_esg_score_rating_lookups', 'company_id', 'cdp_id');
    }

    public function IssRating()
    {
        return $this->belongsToMany(EsgScoreRating::class, 'company_esg_score_rating_lookups', 'company_id', 'iss_id');
    }

    public function BoardMembers()
    {
        return $this->hasMany(LeadershipAndGovernanceBoardMember::class , 'company_id');
    }

    public function Executives()
    {
        return $this->hasMany(LeadershipAndGovernanceExecutive::class , 'company_id');
    }
}
