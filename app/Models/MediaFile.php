<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;

class MediaFile extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'company_id',
        'name',
        'media_type',
        'publication_date',
        'published_day',
        'recording_date',
        'recording_day',
        'presenter_type_id',
        'other_media_presenter',
        'media_sub_type',
        'cover_type',
        'podcast_guest',
        'podcast_series_name',
        'subject_type_id',
        'description',
        'roadshow_address_id',
        'investment_bank_hosted',
        'investment_bank_name',
        'top_competitors',
        'status',
        'created_by',
    ];

    public function scopeAudioList($query)
    {
        return $query->select('media_files.id','media_files.uuid', 'media_files.name', \DB::raw('DATE_FORMAT(media_files.created_at, "%m/%d/%Y") as publication_date'), 'media_files.s3_address', 'media_files.status', 'media_files.publish_status', 'media_files.view_counter')->audio();
    }

    public function scopeAudio($query)
    {
        return $query->whereMediaType(1);
    }

    public function scopeVideo($query)
    {
        return $query->whereMediaType(2);
    }

    public function roadshow_address()
    {
        return $this->belongsTo(Address::class, 'roadshow_address_id', 'id');
    }

    public function mediaSubType()
    {
        return $this->belongsTo(MediaSubType::class, 'media_sub_type', 'id');
    }

    public function subjectType()
    {
        return $this->belongsToMany(SubjectType::class, 'media_subject_type_lookups', 'media_file_id', 'subject_type_id');
    }

    public function mediaPresenter()
    {
        return $this->belongsToMany(MediaPresenterType::class, 'media_file_presenter_type_lookups', 'media_file_id', 'presenter_type_id');
    }

    public function podcastGuest()
    {
        return $this->belongsTo(PodcastGuest::class, 'podcast_guest', 'id');
    }

    public function categorizationLookup()
    {
        return $this->hasMany(MediaCategorizationLookup::class, 'media_file_id', 'id');
    }

    public function video()
    {
        return $this->hasOne(Video::class, 'media_file_id', 'id');
    }

    /*screener search related functionality*/
    public function getScreenerSearchResult($selectedField, $joinTable, $params, $testType = false)
    {
        $query = DB::table('media_files');

        if(in_array('companies', $joinTable))
        {
            $query->leftJoin('companies', 'media_files.company_id', '=', 'companies.id');
            $query->whereNull('companies.deleted_at');
        }

        if(in_array('videos', $joinTable))
        {
            $query->leftJoin('videos', 'media_files.id', '=', 'videos.media_file_id');
        }

        if(isset($params['media_type']))
        {
            $query->where('media_files.media_type', $params['media_type']);
        }

        if(isset($params['status']))
        {
            $query->where('media_files.status', $params['status']);
        }

        if(isset($params['is_meta_info_completed']))
        {
            $query->where('media_files.is_meta_info_completed', $params['is_meta_info_completed']);
        }

        if(isset($params['is_hierarchy_info_completed']))
        {
            $query->where('media_files.is_hierarchy_info_completed', $params['is_hierarchy_info_completed']);
        }

        if(isset($params['publish_status']))
        {
            $query->where('media_files.publish_status', $params['publish_status']);
        }

        if(isset($params['searchStr']))
        {
            $query->where('media_files.name', 'like', "%{$params['searchStr']}%");
        }

        if(isset($params['entityType']))
        {
            $query->where('companies.entity_type', '=', $params['entityType']);
        }

        if(isset($params['privatePublicCompany']))
        {
            $query->where('companies.public_private_type', '=', $params['privatePublicCompany']);
        }

        if(isset($params['tradingAndReportingStatus']))
        {
            $tradingAndReportingStatusIds = explode(',', $params['tradingAndReportingStatus']);
            $query->whereIn('companies.trading_status', $tradingAndReportingStatusIds);
        }

        if(isset($params['publicPrivateReportingStatus']))
        {
            $query->where('companies.public_private_type', '=',$params['publicPrivateReportingStatus']);
        }

        if(isset($params['shareholderNumber']))
        {
            $query->where('companies.number_shareholders_range', '=', $params['shareholderNumber']);
        }

        if(isset($params['employeeNumber']))
        {
            $query->where('companies.number_employees_range', '=', $params['employeeNumber']);
        }

        if(isset($params['baseCurrency']))
        {
            $query->where('companies.base_currency', '=', $params['baseCurrency']);
        }

        if(isset($params['conglomerate']))
        {
            $query->where('companies.conglomerate', '=', $params['conglomerate']);
        }

        if(isset($params['researchCoverageType']))
        {
            $researchIds = explode(',', $params['researchCoverageType']);
            $query->leftJoin('research_coverage_lookups', 'companies.id', '=', 'research_coverage_lookups.company_id')
                ->whereIn('research_coverage_lookups.research_coverage_type', $researchIds);
        }

        if(isset($params['intelletualProperty']))
        {
            $inellectualIds = explode(',', $params['intelletualProperty']);
            $query->leftJoin('company_intelletual_property_lookups', 'companies.id', '=', 'company_intelletual_property_lookups.company_id')
                ->whereIn('company_intelletual_property_lookups.intell_property_id', $inellectualIds);
        }

        if(isset($params['financingType']))
        {
            $financingIds = explode(',', $params['financingType']);
            $query->leftJoin('company_financing_type_lookups', 'companies.id', '=', 'company_financing_type_lookups.company_id')
                ->whereIn('company_financing_type_lookups.financing_type_id', $financingIds);
        }
        if(isset($params['companyValuation']))
        {
            $query->whereRaw('SUBSTRING(companies.recent_valuation, 2) = '. $params['companyValuation']);
        }
        if(isset($params['auditedFinance']))
        {
            $query->where('companies.audited_financials', '=', $params['auditedFinance']);
        }
        if(isset($params['conductFinancing']))
        {
            $query->where('companies.conducted_financing_six_month', '=', $params['conductFinancing']);
        }
        if(isset($params['hasFounder']))
        {
            $query->leftJoin('company_founders', 'companies.id', '=', 'company_founders.company_id');
            if($params['hasFounder'])
            {
                $query->whereNotNull('company_founders.company_id');
            }
            else
            {
                $query->whereNull('company_founders.company_id');
            }
        }
        if(isset($params['hasCeo']))
        {
            if($params['hasCeo'])
            {
                $query->whereNotNull('companies.ceo');
            }
            else
            {
                $query->whereNull('companies.ceo');
            }
        }
        if(isset($params['hasCfo']))
        {
            if($params['hasCfo'])
            {
                $query->whereNotNull('companies.cfo');
            }
            else
            {
                $query->whereNull('companies.cfo');
            }
        }
        if(isset($params['hasSalesDepartment']))
        {
            if($params['hasSalesDepartment'])
            {
                $query->where(function($q){
                    return $q->whereNotNull('companies.sales_department_email')
                        ->orWhereNotNull('companies.sales_dept_phone');
                });
            }
            else
            {
                $query->where(function($q){
                    return $q->whereNull('companies.sales_department_email')
                        ->whereNull('companies.sales_dept_phone');
                });
            }
        }
        if(isset($params['hasIrd']))
        {
            if($params['hasIrd'])
            {
                $query->where(function($q){
                    return $q->whereNotNull('companies.investor_relations_department_email')
                        ->orWhereNotNull('companies.investor_relation_contact_phone');
                });
            }
            else
            {
                $query->where(function($q){
                    return $q->whereNull('companies.investor_relations_department_email')
                        ->whereNull('companies.investor_relation_contact_phone');
                });
            }
        }
        if(isset($params['hasBusinessDevelopment']))
        {
            if($params['hasBusinessDevelopment'])
            {
                $query->where(function($q){
                    return $q->whereNotNull('companies.business_development_contact_email')
                        ->orWhereNotNull('companies.business_development_contact_phone');
                });
            }
            else
            {
                $query->where(function($q){
                    return $q->whereNull('companies.business_development_contact_email')
                        ->whereNull('companies.business_development_contact_phone');
                });
            }
        }
        if(isset($params['hasStrategicPartnership']))
        {
            $query->leftJoin('strategic_partnerships', 'companies.id', '=', 'strategic_partnerships.company_id');
            if($params['hasStrategicPartnership'])
            {
                $query->whereNotNull('strategic_partnerships.company_id')
                    ->where('strategic_partnerships.name', 'like', "%{$params['hasStrategicPartnership']}%");
            }
            else
            {
                $query->whereNull('strategic_partnerships.company_id');
            }
        }
        if(isset($params['hasSuppliers']))
        {
            $query->leftJoin('key_vendors', 'companies.id', '=', 'key_vendors.company_id');
            if($params['hasSuppliers'])
            {
                $query->whereNotNull('key_vendors.company_id')
                    ->where('key_vendors.name', 'like', "%{$params['hasSuppliers']}%");
            }
            else
            {
                $query->whereNull('key_vendors.company_id');
            }
        }
        if(isset($params['tickerSymbol']))
        {
            $query->where('ticker_symbol', $params['tickerSymbol']);
        }
        if(isset($params['scrp']))
        {
            $scrpIds = explode(',', $params['scrp']);
            $query->leftJoin('company_shared_community_research_lookups', 'companies.id', '=', 'company_shared_community_research_lookups.company_id')
                ->whereIn('company_shared_community_research_lookups.community_id',$scrpIds);
        }
        if(isset($params['domicileCountry']))
        {
            $query->where('companies.domicile_country', '=', $params['domicileCountry']);
        }
        if(isset($params['companyHistory']))
        {
            $query->leftJoin('company_histories', 'companies.id', '=', 'company_histories.company_id');
            $formedYearFromDate = $params['formedYearFromDate'];
            $query->when($formedYearFromDate, function ($q) use ($formedYearFromDate) {
                return $q->where('company_histories.formed_year', '>=', $formedYearFromDate);
            });

            $formedYearToDate = isset($params['formedYearToDate']) ? $params['formedYearToDate'] : Carbon::now()->format('Y');
            $query->when($formedYearToDate, function ($q) use ($formedYearToDate) {
                return $q->where('company_histories.formed_year', '<=', $formedYearToDate);
            });

            $firstProductOrService = $params['firstProductOrService'];
            $query->when($firstProductOrService, function ($q) use ($firstProductOrService) {
                return $q->where('company_histories.first_product_or_service','like', "%{$firstProductOrService}%");
            });

            $numberOfMajorProductOrService = $params['numberOfMajorProductOrService'];
            $query->when($numberOfMajorProductOrService, function ($q) use ($numberOfMajorProductOrService) {
                return $q->where('company_histories.number_of_major_product','like', "%{$numberOfMajorProductOrService}%");
            });

            $changeDirectionOrStrategy = $params['changeDirectionOrStrategy'];
            $query->when($changeDirectionOrStrategy, function ($q) use ($changeDirectionOrStrategy) {
                return $q->where('company_histories.change_direction_or_strategy', '=', $changeDirectionOrStrategy == 'yes' ? 1 : 0);
            });
        }
        if(isset($params['companyCorporateAction']))
        {
            $query->leftJoin('company_corporate_actions', 'companies.id', '=', 'company_corporate_actions.company_id');

            $acquisitionsMade = $params['acquisitionsMade'];
            $query->when($acquisitionsMade, function ($q) use ($acquisitionsMade) {
                return $q->where('company_corporate_actions.acquisitions_made', '=', $acquisitionsMade == 'yes' ? 1 : 0);
            });

            $spinOffMade = $params['spinOffMade'];
            $query->when($spinOffMade, function ($q) use ($spinOffMade) {
                return $q->where('company_corporate_actions.spin_off', $spinOffMade == 'yes' ? 1 : 0);
            });

            $dividend = $params['dividend'];
            $query->when($dividend, function ($q) use ($dividend) {
                return $q->where('company_corporate_actions.dividend', $dividend == 'yes' ? 1 : 0);
            });
        }

        //video/audio filter combined
        if ($params['media_type'] == 2) {
            if (isset($params['videoPresenterTypes'])) {
                $presenterIds = explode(',', $params['videoPresenterTypes']);
                $query->leftJoin('media_file_presenter_type_lookups', 'media_files.id', '=', 'media_file_presenter_type_lookups.media_file_id')
                    ->whereIn('media_file_presenter_type_lookups.presenter_type_id', $presenterIds);
            }

            if (isset($params['videoSubTypes'])) {
                $videoSubTypes = explode(',', $params['videoSubTypes']);
                $query->whereIn('media_files.media_sub_type', $videoSubTypes);
            }

            if (isset($params['videoSubjectTypes'])) {
                $videoSubject = explode(',', $params['videoSubjectTypes']);
                $query->leftJoin('media_subject_type_lookups', 'media_files.id', '=', 'media_subject_type_lookups.media_file_id')
                    ->whereIn('media_subject_type_lookups.subject_type_id', $videoSubject);
            }
        }

        if ($params['media_type'] == 1) {
            if (isset($params['audioPresenterTypes'])) {
                $presenterIds = explode(',', $params['audioPresenterTypes']);
                $query->leftJoin('media_file_presenter_type_lookups AS audioPresenterLockup', 'media_files.id', '=', 'audioPresenterLockup.media_file_id')
                    ->whereIn('audioPresenterLockup.presenter_type_id', $presenterIds);
            }

            if (isset($params['audioSubTypes'])) {
                $audioSubTypes = explode(',', $params['audioSubTypes']);
                $query->whereIn('media_files.media_sub_type', $audioSubTypes);
            }

            if (isset($params['audioSubjectTypes'])) {
                $audioSubjectTypes = explode(',', $params['audioSubjectTypes']);
                $query->leftJoin('media_subject_type_lookups AS audioSubjectTypes', 'media_files.id', '=', 'audioSubjectTypes.media_file_id')
                    ->whereIn('audioSubjectTypes.subject_type_id', $audioSubjectTypes);
            }
        }

        if(isset($params['mediaPublishedFromDate']))
        {
            $query->whereDate('media_files.publication_date', '>=', $params['mediaPublishedFromDate']);
        }

        if(isset($params['mediaPublishedToDate']))
        {
            $query->whereDate('media_files.publication_date', '<=', $params['mediaPublishedToDate']);
        }

        if(isset($params['mediaRecordedFromDate']))
        {
            $query->whereDate('media_files.recording_date', '>=', $params['mediaRecordedFromDate']);
        }

        if(isset($params['mediaRecordedToDate']))
        {
            $query->whereDate('media_files.recording_date', '<=', $params['mediaRecordedToDate']);
        }
        //end audio/video combined filter

        if(isset($params['socialMediaPlatform'])) {
            $socialMediaId = explode(',', $params['socialMediaPlatform']);
            $query->leftJoin('company_social_media_platforms AS socialids', 'companies.id', '=', 'socialids.company_id')
                ->whereIn('socialids.social_media_platform_id', $socialMediaId);
        }
        if(isset($params['researchFirmName']))
        {
            $query->where('companies.research_firm_name', 'like', "%{$params['researchFirmName']}%");
        }
        if (isset($params['isin']))
        {
            $query->where('companies.isin', 'like',  "%{$params['isin']}%");
        }
        if (isset($params['cusip']))
        {
            $query->where('companies.cusip', 'like',  "%{$params['cusip']}%");
        }
        if(isset($params['minorityOwnedBusiness']))
        {
            $minorityOwnedBusinessIds = explode(',', $params['minorityOwnedBusiness']);
            $query->leftJoin('company_own_business_lookups', 'companies.id', '=', 'company_own_business_lookups.company_id')
                ->whereIn('company_own_business_lookups.own_business_id', $minorityOwnedBusinessIds);
        }
        if (isset($params['publiclyTradedCompany']))
        {
            $query->where('companies.publicly_traded_type',   $params['publiclyTradedCompany']);
        }
        if(isset($params['exchangedTradedOn'])) {
            $exchangeIds = explode(',', $params['exchangedTradedOn']);
            $query->leftJoin('company_exchange_traded_lookups AS exchange_lockups', 'companies.id', '=', 'exchange_lockups.company_id')
                ->whereIn('exchange_lockups.exchange_traded_id', $exchangeIds);
        }
        if(isset($params['esgRating']))
        {
            $query->leftJoin('company_esg_score_lookups', 'companies.id', '=', 'company_esg_score_lookups.company_id');
            if($params['esgRating'])
            {
                $query->whereNotNull('company_esg_score_lookups.company_id');
            }
            else
            {
                $query->whereNull('company_esg_score_lookups.company_id');
            }
        }

        if(isset($params['industry']) ||
            isset($params['sector']) || isset($params['subSector']) ||
            isset($params['group']) || isset($params['subGroup']) ||
            isset($params['echelon']) || isset($params['subEchelon']) ||
            isset($params['tier']) || isset($params['subTier']) ||
            isset($params['layer']) || isset($params['subLayer']) ||
            isset($params['deck']) || isset($params['subDeck']) ||
            isset($params['floor']) || isset($params['subFloor']) ||
            isset($params['basement']) || isset($params['subBasement']) ||
            isset($params['mine']) || isset($params['subMine'])
        )
        {
            $mediaCategorizationIds = $this->mediaHierarchySearch($params);
            $query->whereIn('media_files.id', $mediaCategorizationIds);
        }

        if (isset($params['order']))
        {
            $query->orderBy('media_files.id', $params['order']);
        }
        return $query->select($selectedField)
            ->whereNull('media_files.deleted_at')
            ->groupBy('media_files.id');
            //->get();

    }

    public function getScreenerSearchCount($selectedField, $joinTable, $params, $testType = false)
    {
        $data = $this->getScreenerSearchResult($selectedField, $joinTable, $params, $testType)->get()->count();
        return $data;
    }

    public function getScreenerSearchPaginate($selectedField = '*' , $joinTable, $params)
    {
        return $this->getScreenerSearchResult($selectedField, $joinTable, $params)->paginate(12);
    }

    private function mediaHierarchySearch($params)
    {
        if(isset($params['subMine'])){
            $nodeCode = DB::table('sub_mines_view')->whereId($params['subMine'])->pluck('code')->first();
        }elseif(isset($params['mine'])){
            $nodeCode = DB::table('mines_view')->whereId($params['mine'])->pluck('code')->first();
        }elseif(isset($params['subBasement'])){
            $nodeCode = DB::table('sub_basements_view')->whereId($params['subBasement'])->pluck('code')->first();
        }elseif(isset($params['basement'])){
            $nodeCode = DB::table('basements_view')->whereId($params['basement'])->pluck('code')->first();
        }elseif(isset($params['subFloor'])){
            $nodeCode = DB::table('sub_floors_view')->whereId($params['subFloor'])->pluck('code')->first();
        }elseif(isset($params['floor'])){
            $nodeCode = DB::table('floors_view')->whereId($params['floor'])->pluck('code')->first();
        }elseif(isset($params['subDeck'])){
            $nodeCode = DB::table('sub_decks_view')->whereId($params['subDeck'])->pluck('code')->first();
        }elseif(isset($params['deck'])){
            $nodeCode = DB::table('decks_view')->whereId($params['deck'])->pluck('code')->first();
        }elseif(isset($params['subLayer'])){
            $nodeCode = DB::table('sub_layers_view')->whereId($params['subLayer'])->pluck('code')->first();
        }elseif(isset($params['layer'])){
            $nodeCode = DB::table('layers_view')->whereId($params['layer'])->pluck('code')->first();
        }elseif(isset($params['subTier'])){
            $nodeCode = DB::table('sub_tiers_view')->whereId($params['subTier'])->pluck('code')->first();
        }elseif(isset($params['tier'])){
            $nodeCode = DB::table('tiers_view')->whereId($params['tier'])->pluck('code')->first();
        }elseif(isset($params['subEchelon'])){
            $nodeCode = DB::table('sub_echelons_view')->whereId($params['subEchelon'])->pluck('code')->first();
        }elseif(isset($params['echelon'])){
            $nodeCode = DB::table('echelons_view')->whereId($params['echelon'])->pluck('code')->first();
        }elseif(isset($params['subGroup'])){
            $nodeCode = DB::table('sub_groups_view')->whereId($params['subGroup'])->pluck('code')->first();
        }elseif(isset($params['group'])){
            $nodeCode = DB::table('groups_view')->whereId($params['group'])->pluck('code')->first();
        }elseif(isset($params['subSector'])){
            $nodeCode = DB::table('sub_sectors_view')->whereId($params['subSector'])->pluck('code')->first();
        }elseif(isset($params['sector'])){
            $nodeCode = DB::table('sectors_view')->whereId($params['sector'])->pluck('code')->first();
        }elseif(isset($params['industry'])){
            $nodeCode = DB::table('industries_view')->whereId($params['industry'])->pluck('code')->first();
        }

        $mediaCategorizationIds = MediaCategorizationLookup::where('node_code', 'like', "{$nodeCode}%")->whereNotNull('media_file_id')->pluck('media_file_id')->toArray();
        return $mediaCategorizationIds;
    }
    /*end screener search related functionality*/

    public function getScreenerCompanySearchResult($selectedField, $params)
    {
        $query = DB::table('companies')
            ->leftJoin('headquarters', 'headquarters.company_id', '=', 'companies.id')
            ->leftJoin('addresses', 'addresses.id', '=', 'headquarters.address_id')
            ->leftJoin('states', 'states.id', '=', 'addresses.state_id')
            ->leftJoin('countries', 'countries.id', '=', 'addresses.country_code');

        if(isset($params['related_company_id']))
        {
            $query->orWhereIn('companies.id', $params['related_company_id']);
        }
        if(isset($params['industry']))
        {
            $query->orWhere('companies.industry_id', '=', $params['industry']);
        }
        if(isset($params['country']))
        {
            $country = $params['country'];
            $state = isset($params['state']) ? $params['state']: false;
            $province = isset($params['province']) ? $params['province'] : false;
            $city = isset($params['city']) ? $params['city']: false;

            $query->orWhere(function($q) use ($country, $state, $province, $city) {
                $q->orWhere('addresses.country_code', $country);
                if($state)
                {
                    $q->where('addresses.state_id', $state);
                }
                if($province)
                {
                    $q->where('addresses.province', 'like', "%{$province}%");
                }
                if($city)
                {
                    $q->where('addresses.city', 'like', "%{$city}%");
                }
            });
        }
        //check if has board member or  role
        $row = [];
        if (isset($params['hasBoardMember']) || isset($params['committee']))
        {
            $query->leftJoin('leadership_and_governance_board_members', 'companies.id', '=', 'leadership_and_governance_board_members.company_id');

            if (isset($params['hasBoardMember']) && $params['hasBoardMember'] == 1) {
                 $query->groupBy('leadership_and_governance_board_members.company_id')
                     ->havingRaw('boardMemberCount > 0');
                 $row[] = 'count(leadership_and_governance_board_members.id) as boardMemberCount';
            } else {
                 $query->groupBy('leadership_and_governance_board_members.company_id')
                     ->havingRaw('boardMemberCount = 0');
                 $row[] = 'count(leadership_and_governance_board_members.id) as boardMemberCount';
            }

            if (isset($params['committee'])) {
                $query->where('leadership_and_governance_board_members.role_id', '=', $params['committee']);
            }
        }
        //check if has executive or executive role
        if (isset($params['hasExecutive']) || isset($params['executiveRole']))
        {
            $query->leftJoin('leadership_and_governance_executives', 'companies.id', '=',  'leadership_and_governance_executives.company_id');
            if (isset($params['hasExecutive']) && $params['hasExecutive'] == 1) {
                $query->groupBy('leadership_and_governance_executives.company_id')
                    ->havingRaw('executiveMemberCount > 0');
                $row[] = 'count(leadership_and_governance_executives.id) as executiveMemberCount';
            } else {
                $query->groupBy('leadership_and_governance_executives.company_id')
                    ->havingRaw('executiveMemberCount = 0');
                $row[] = 'count(leadership_and_governance_executives.id) as executiveMemberCount';
            }

            if (isset($params['executiveRole'])) {
                $query->where('leadership_and_governance_executives.role_id', '=', $params['executiveRole']);
            }
        }

        if (isset($params['memberName']))
        {
            $name = $params['memberName'];
            if (!isset($params['hasBoardMember']) && !isset($params['committee'])) {
                $query->leftJoin('leadership_and_governance_board_members', 'companies.id', '=', 'leadership_and_governance_board_members.company_id');
            }
            $query->where(function($q) use($name) {
                $q->where('leadership_and_governance_board_members.first_name', 'like',  "%{$name}%");
                $q->orWhere('leadership_and_governance_board_members.last_name', 'like',  "%{$name}%");
            } );

            if (!isset($params['hasExecutive']) && !isset($params['executiveRole'])) {
                $query->leftJoin('leadership_and_governance_executives', 'companies.id', '=', 'leadership_and_governance_executives.company_id');
            }
            $query->orWhere(function($q) use($name) {
                $q->where('leadership_and_governance_executives.first_name', 'like', "%{$name}%");
                $q->orWhere('leadership_and_governance_executives.last_name', 'like', "%{$name}%");
            } );
        }

       $query->distinct()->select($selectedField);
       if (sizeof($row)) {
           $query->selectRaw(implode(',', $row));
       }
       return $query->groupBy('companies.id')->whereNull('companies.deleted_at');
    }

    public function getScreenerCompanySearchCount($selectedField, $params)
    {
        return $this->getScreenerCompanySearchResult($selectedField, $params)->get()->count();
    }

    public function getScreenerCompanySearchPaginate($selectedField = '*' , $params)
    {
        return $this->getScreenerCompanySearchResult($selectedField, $params)->paginate(12);
    }
}
