<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\Basement;
use App\Models\Deck;
use App\Models\Echelon;
use App\Models\Floor;
use App\Models\Group;
use App\Models\Industry;
use App\Models\Layer;
use App\Models\MediaCategorizationLookup;
use App\Models\MediaFile;
use App\Models\Mine;
use App\Models\Sector;
use App\Models\SubBasement;
use App\Models\SubDeck;
use App\Models\SubEchelon;
use App\Models\SubFloor;
use App\Models\SubGroup;
use App\Models\SubLayer;
use App\Models\SubMine;
use App\Models\SubTier;
use App\Models\Tier;
use App\Models\Company;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Validator;

class ScreenerController extends BaseController
{
    const PER_PAGE = 12;
    public function index(Request $request)
    {
        if(null == $request->searchStr &&
            null == $request->publicationDate &&
            null == $request->entityType &&
            null == $request->tradingAndReportingStatus &&
            null == $request->publicPrivateReportingStatus &&
            null == $request->shareholderNumber &&
            null == $request->baseCurrency &&
            null == $request->conglomerate &&
            null == $request->researchCoverageType &&
            null == $request->intelletualProperty &&
            null == $request->financingType &&
            null == $request->companyValuation &&
            null == $request->auditedFinance &&
            null == $request->conductFinancing &&
            null == $request->industry
        ){
            $response = [
                'pagination' => [
                    'current_page' => 1,
                ],
                'content' => [],
            ];
            return $this->sendResponse($response, 'Data not found.', 200);
        }
        $perPage = 12;
        $selectedField = [
            'media_files.id',
            'media_files.uuid as media_uuid',
            'media_files.name', 'view_counter',
            'media_files.created_at',
            'media_type',
            's3_address',
            'companies.name as company_name',
            'companies.slug_name as slug',
            'companies.image',
            'video_id',
        ];

        $validationArray = [
        ];
        if($request->companyValuation)
        {
            $validationArray['companyValuation'] = 'integer';
        }
        if($request->publicationDate)
        {
            $validationArray['publicationDate'] = 'date_format:"Y-m-d';
        }
        $validator = Validator::make($request->all(), $validationArray);

        if($validator->fails()){
            $error  = $validator->errors()->first();
            return $this->sendError('FIELDS_VALIDATION_ERROR', $error, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        try {
            $query = MediaFile::leftJoin('companies', 'media_files.company_id', '=', 'companies.id')
                ->leftJoin('videos', 'media_files.id', '=', 'videos.media_file_id')
            ;
//            if($request->mediaType)
//            {
//                $query->whereMediaType($request->mediaType);
//                if(2 == $request->mediaType)
//                {
//                    $query->leftJoin('videos', 'media_files.id', '=', 'videos.media_file_id');
//                    array_push($selectedField,'video_id');
//                }
//            }

            if($request->searchStr)
            {
                $query->where('media_files.name', 'like', "%{$request->searchStr}%");

            }
            if($request->publicationDate)
            {
                $query->whereDate('media_files.created_at', '=',$request->publicationDate);
            }
            if($request->entityType)
            {
                $query->where('companies.entity_type', '=',$request->entityType);
            }
            if($request->tradingAndReportingStatus)
            {
                $query->where('companies.trading_status', '=',$request->tradingAndReportingStatus);
            }
            if($request->publicPrivateReportingStatus)
            {
                $query->where('companies.public_private_type', '=',$request->publicPrivateReportingStatus);
            }
            if($request->shareholderNumber)
            {
                $query->where('companies.number_shareholders_range', '=',$request->shareholderNumber);
            }
            if($request->baseCurrency)
            {
                $query->where('companies.base_currency', '=',$request->baseCurrency);
            }
            if($request->has('conglomerate') && "" != $request->conglomerate)
            {
                $query->where('companies.conglomerate', '=',$request->conglomerate);
            }
            if($request->researchCoverageType)
            {
                $query->leftJoin('research_coverage_lookups', 'companies.id', '=', 'research_coverage_lookups.company_id')
                    ->where('research_coverage_lookups.research_coverage_type', '=',$request->researchCoverageType);
            }
            if($request->intelletualProperty)
            {
                $query->leftJoin('company_intelletual_property_lookups', 'companies.id', '=', 'company_intelletual_property_lookups.company_id')
                    ->where('company_intelletual_property_lookups.intell_property_id', '=',$request->intelletualProperty);
            }
            if($request->financingType)
            {
                $query->leftJoin('company_financing_type_lookups', 'companies.id', '=', 'company_financing_type_lookups.company_id')
                    ->where('company_financing_type_lookups.financing_type_id', '=',$request->financingType);
            }
            if($request->companyValuation)
            {
                $query->whereRaw('SUBSTRING(companies.recent_valuation, 2) = '. $request->companyValuation);
            }

            if($request->has('auditedFinance') && "" != $request->auditedFinance)
            {
                $query->where('companies.audited_financials', '=', $request->auditedFinance);
            }
            if($request->has('conductFinancing') && "" != $request->conductFinancing)
            {
                $query->where('companies.conducted_financing_six_month', '=', $request->conductFinancing);
            }
            if($request->industry ||
                $request->sector || $request->subSector ||
                $request->group || $request->subGroup ||
                $request->echelon || $request->subEchelon ||
                $request->tier || $request->subTier ||
                $request->layer || $request->subLayer ||
                $request->deck || $request->subDeck ||
                $request->floor || $request->subFloor ||
                $request->basement || $request->subBasement ||
                $request->mine || $request->subMine
            )
            {
                if($request->subMine){
                    $nodeCode = DB::table('sub_mines_view')->whereId($request->subMine)->pluck('code')->first();
                }elseif($request->mine){
                    $nodeCode = DB::table('mines_view')->whereId($request->mine)->pluck('code')->first();
                }elseif($request->subBasement){
                    $nodeCode = DB::table('sub_basements_view')->whereId($request->subBasement)->pluck('code')->first();
                }elseif($request->basement){
                    $nodeCode = DB::table('basements_view')->whereId($request->basement)->pluck('code')->first();
                }elseif($request->subFloor){
                    $nodeCode = DB::table('sub_floors_view')->whereId($request->subFloor)->pluck('code')->first();
                }elseif($request->floor){
                    $nodeCode = DB::table('floors_view')->whereId($request->floor)->pluck('code')->first();
                }elseif($request->subDeck){
                    $nodeCode = DB::table('sub_decks_view')->whereId($request->subDeck)->pluck('code')->first();
                }elseif($request->deck){
                    $nodeCode = DB::table('decks_view')->whereId($request->deck)->pluck('code')->first();
                }elseif($request->subLayer){
                    $nodeCode = DB::table('sub_layers_view')->whereId($request->subLayer)->pluck('code')->first();
                }elseif($request->layer){
                    $nodeCode = DB::table('layers_view')->whereId($request->layer)->pluck('code')->first();
                }elseif($request->subTier){
                    $nodeCode = DB::table('sub_tiers_view')->whereId($request->subTier)->pluck('code')->first();
                }elseif($request->tier){
                    $nodeCode = DB::table('tiers_view')->whereId($request->tier)->pluck('code')->first();
                }elseif($request->subEchelon){
                    $nodeCode = DB::table('sub_echelons_view')->whereId($request->subEchelon)->pluck('code')->first();
                }elseif($request->echelon){
                    $nodeCode = DB::table('echelons_view')->whereId($request->echelon)->pluck('code')->first();
                }elseif($request->subGroup){
                    $nodeCode = DB::table('sub_groups_view')->whereId($request->subGroup)->pluck('code')->first();
                }elseif($request->group){
                    $nodeCode = DB::table('groups_view')->whereId($request->group)->pluck('code')->first();
                }elseif($request->subSector){
                    $nodeCode = DB::table('sub_sectors_view')->whereId($request->subSector)->pluck('code')->first();
                }elseif($request->sector){
                    $nodeCode = DB::table('sectors_view')->whereId($request->sector)->pluck('code')->first();
                }elseif($request->industry){
                    $nodeCode = DB::table('industries_view')->whereId($request->industry)->pluck('code')->first();
                }
                $mediaCategorizationIds = MediaCategorizationLookup::where('node_code', 'like', "{$nodeCode}%")->whereNotNull('media_file_id')->pluck('media_file_id')->toArray();
                $query->whereIn('media_files.id', $mediaCategorizationIds);
            }
            $files =  $query->select($selectedField)->where('media_files.status', 2)->where('media_files.publish_status', 1)->where('media_files.is_meta_info_completed', 1)->where('media_files.is_hierarchy_info_completed', 1)->groupBy('media_files.id')
                ->orderBy('id', 'DESC')->paginate($perPage);

            $data = [];
            foreach($files as $key => $value){
                $data[$key]['id'] =  $value['id'];
                $data[$key]['mediaUuid'] =  $value['media_uuid'];
                $data[$key]['name'] =  $value['name'];
                $data[$key]['viewCounter'] =  $value['view_counter'];
                $data[$key]['companyName'] =  $value['company_name'];
                $data[$key]['companySlug'] =  $value['slug'];
                $data[$key]['createdAt'] =  Carbon::parse($value['created_at'])->diffForHumans();
                if(2 == $value['media_type']){
                    $data[$key]['mediaType'] =  'video';
                    $data[$key]['routeName'] =  'ViewVideoDetails';
                    $data[$key]['videoId'] =  $value['video_id'];
                    $data[$key]['fileThumb'] =  "https://view.vzaar.com/{$value['video_id']}/image";
                }else{
                    $data[$key]['mediaType'] =  'audio';
                    $data[$key]['routeName'] =  'ViewAudioDetails';
                    $data[$key]['fileThumb'] =  asset('images/audio_thumb.png');
                }
                $data[$key]['companyImage'] =  $value['image'] ? config('filesystems.disks.s3.url') . "/" . config('filesystems.disks.s3.s3_env') . "/company_image/{$value['image']}" : asset('/images/image-placeholder-1.png');
            }

            $response = [
                'pagination' => [
                    'total' => $files->total(),
                    'per_page' => $files->perPage(),
                    'current_page' => $files->currentPage(),
                    'last_page' => $files->lastPage(),
                    'from' => $files->firstItem(),
                    'to' => $files->lastItem()
                ],
                'content' => $data,
            ];
            return $this->sendResponse($response, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('error', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
    public function newScreener(Request $request)
    {
        if(null == $request->searchStr &&
            null == $request->publicationDate &&
            null == $request->entityType &&
            null == $request->privatePublicCompany &&
            null == $request->tradingAndReportingStatus &&
            null == $request->publicPrivateReportingStatus &&
            null == $request->shareholderNumber &&
            null == $request->employeeNumber &&
            null == $request->baseCurrency &&
            null == $request->conglomerate &&
            null == $request->intelletualProperty &&
            null == $request->financingType &&
            null == $request->companyValuation &&
            null == $request->auditedFinance &&
            null == $request->conductFinancing &&
            null == $request->hasFounder &&
            null == $request->hasCeo &&
            null == $request->hasCfo &&
            null == $request->hasSalesDepartment &&
            null == $request->hasIrd &&
            null == $request->hasBusinessDevelopment &&
            null == $request->hasStrategicPartnership &&
            null == $request->hasSuppliers &&
            null == $request->tickerSymbol &&
            null == $request->formedYear &&
            null == $request->firstProductOrService &&
            null == $request->numberOfMajorProductOrService &&
            null == $request->changeDirectionOrStrategy &&
            null == $request->acquisitionsMade &&
            null == $request->spinOffMade &&
            null == $request->dividend &&
            null == $request->industry &&
            null == $request->domicileCountry &&

            null == $request->scrp &&
            null == $request->researchCoverageType &&
            null == $request->researchFirmName &&
            null == $request->minorityOwnedBusiness &&
            null == $request->videoPresenterTypes &&
            null == $request->videoSubTypes &&
            null == $request->videoSubjectTypes &&
            null == $request->audioPresenterTypes &&
            null == $request->audioSubTypes &&
            null == $request->audioSubjectTypes &&
            null == $request->country &&
            null == $request->state &&
            null == $request->city &&
            null == $request->socialMediaPlatform &&
            null == $request->hasBoardMember &&
            null == $request->hasExecutive &&
            null == $request->committee &&
            null == $request->executiveRole &&
            null == $request->memberName &&
            null == $request->isin &&
            null == $request->cusip &&
            null == $request->formedYearFromDate &&
            null == $request->formedYearToDate &&
            null == $request->publiclyTradedCompany &&
            null == $request->exchangedTradedOn &&
            null == $request->esgRating &&
            null == $request->mediaPublishedFromDate &&
            null == $request->mediaPublishedToDate &&
            null == $request->mediaRecordedFromDate &&
            null == $request->mediaRecordedToDate
        ){
            $response = [
                'pagination' => [
                    'current_page' => 1
                ],
                'videoData' => [],
                'audioData' => [],
                'companyData' => [],
            ];
            return $this->sendResponse($response, 'Data not found.', 200);
        }
        try {
            $mediaParams = $companyParams = [];

            if($request->searchStr)
            {
                $mediaParams['searchStr'] = $request->searchStr;
            }

            if($request->entityType)
            {
                $mediaParams['entityType'] = $request->entityType;
            }

            if($request->tradingAndReportingStatus)
            {
                $mediaParams['tradingAndReportingStatus'] = $request->tradingAndReportingStatus;
            }

            if($request->publicPrivateReportingStatus)
            {
                $mediaParams['publicPrivateReportingStatus'] = $request->publicPrivateReportingStatus;
            }

            if($request->shareholderNumber)
            {
                $mediaParams['shareholderNumber'] = $request->shareholderNumber;
            }
            if($request->employeeNumber)
            {
                $mediaParams['employeeNumber'] = $request->employeeNumber;
            }

            if($request->baseCurrency)
            {
                $mediaParams['baseCurrency'] = $request->baseCurrency;
            }

            if($request->privatePublicCompany)
            {
                $mediaParams['privatePublicCompany'] = $request->privatePublicCompany;
            }

            if($request->has('conglomerate') && "" != $request->conglomerate)
            {
                $mediaParams['conglomerate'] = $request->conglomerate;
            }
            if($request->intelletualProperty)
            {
                $mediaParams['intelletualProperty'] = $request->intelletualProperty;
            }
            if($request->financingType)
            {
                $mediaParams['financingType'] = $request->financingType;
            }
            if($request->companyValuation)
            {
                $mediaParams['companyValuation'] = $request->companyValuation;
            }
            if($request->has('auditedFinance') && "" != $request->auditedFinance)
            {
                $mediaParams['auditedFinance'] = $request->auditedFinance;
            }
            if($request->has('conductFinancing') && "" != $request->conductFinancing)
            {
                $mediaParams['conductFinancing'] = $request->conductFinancing;
            }
            if($request->has('hasFounder') && "" != $request->hasFounder)
            {
                $mediaParams['hasFounder'] = $request->hasFounder;
            }

            if($request->has('hasCeo') && "" != $request->hasCeo)
            {
                $mediaParams['hasCeo'] = $request->hasCeo;
            }

            if($request->has('hasCfo') && "" != $request->hasCfo)
            {
                $mediaParams['hasCfo'] = $request->hasCfo;
            }

            if($request->has('hasSalesDepartment') && "" != $request->hasSalesDepartment)
            {
                $mediaParams['hasSalesDepartment'] = $request->hasSalesDepartment;
            }
            if($request->has('hasIrd') && "" != $request->hasIrd)
            {
                $mediaParams['hasIrd'] = $request->hasIrd;
            }
            if($request->has('hasBusinessDevelopment') && "" != $request->hasBusinessDevelopment)
            {
                $mediaParams['hasBusinessDevelopment'] = $request->hasBusinessDevelopment;
            }

            if($request->has('hasStrategicPartnership') && "" != $request->hasStrategicPartnership)
            {
                $mediaParams['hasStrategicPartnership'] = $request->hasStrategicPartnership;
            }

            if($request->has('hasSuppliers') && "" != $request->hasSuppliers)
            {
                $mediaParams['hasSuppliers'] = $request->hasSuppliers;
            }

            if($request->tickerSymbol)
            {
                $mediaParams['tickerSymbol'] = $request->tickerSymbol;
            }

            if($request->researchCoverageType)
            {
                $mediaParams['researchCoverageType'] = $request->researchCoverageType;
            }
            if($request->scrp)
            {
                $mediaParams['scrp'] = $request->scrp;
            }
            if($request->researchFirmName)
            {
                $mediaParams['researchFirmName'] = $request->researchFirmName;
            }

            if($request->domicileCountry)
            {
                $mediaParams['domicileCountry'] = $request->domicileCountry;
            }

            if ($request->formedYear || $request->firstProductOrService || $request->numberOfMajorProductOrService || $request->changeDirectionOrStrategy || $request->formedYearFromDate || $request->formedYearToDate)
            {
                $mediaParams['companyHistory'] = true;
                $mediaParams['firstProductOrService'] = $request->firstProductOrService;
                $mediaParams['numberOfMajorProductOrService'] = $request->numberOfMajorProductOrService;
                $mediaParams['changeDirectionOrStrategy'] = $request->changeDirectionOrStrategy;
                $mediaParams['formedYearFromDate'] = $request->formedYearFromDate;
                $mediaParams['formedYearToDate'] = $request->formedYearToDate;
            }

            if ($request->acquisitionsMade || $request->spinOffMade || $request->dividend)
            {
                $mediaParams['companyCorporateAction'] = true;
                $mediaParams['acquisitionsMade'] = $request->acquisitionsMade;
                $mediaParams['spinOffMade'] = $request->spinOffMade;
                $mediaParams['dividend'] = $request->dividend;
            }
            if($request->industry)
            {
                $companyParams['industry'] = $mediaParams['industry'] = $request->industry;
            }
            if($request->sector)
            {
                $mediaParams['sector'] = $request->sector;
            }
            if($request->subSector)
            {
                $mediaParams['subSector'] = $request->subSector;
            }
            if($request->group)
            {
                $mediaParams['group'] = $request->group;
            }
            if($request->subGroup)
            {
                $mediaParams['subGroup'] = $request->subGroup;
            }
            if($request->echelon)
            {
                $mediaParams['echelon'] = $request->echelon;
            }
            if($request->subEchelon)
            {
                $mediaParams['subEchelon'] = $request->subEchelon;
            }
            if($request->tier)
            {
                $mediaParams['tier'] = $request->tier;
            }
            if($request->subTier)
            {
                $mediaParams['subTier'] = $request->subTier;
            }
            if($request->layer)
            {
                $mediaParams['layer'] = $request->layer;
            }
            if($request->subLayer)
            {
                $mediaParams['subLayer'] = $request->subLayer;
            }
            if($request->deck)
            {
                $mediaParams['deck'] = $request->deck;
            }
            if($request->subDeck)
            {
                $mediaParams['subDeck'] = $request->subDeck;
            }
            if($request->floor)
            {
                $mediaParams['floor'] = $request->floor;
            }
            if($request->subFloor)
            {
                $mediaParams['subFloor'] = $request->subFloor;
            }
            if($request->basement)
            {
                $mediaParams['basement'] = $request->basement;
            }
            if($request->subBasement)
            {
                $mediaParams['subBasement'] = $request->subBasement;
            }
            if($request->mine)
            {
                $mediaParams['mine'] = $request->mine;
            }
            if($request->subMine)
            {
                $mediaParams['subMine'] = $request->subMine;
            }
            if($request->videoPresenterTypes)
            {
                $mediaParams['videoPresenterTypes'] = $request->videoPresenterTypes;
            }
            if($request->videoSubTypes)
            {
                $mediaParams['videoSubTypes'] = $request->videoSubTypes;
            }
            if($request->videoSubjectTypes)
            {
                $mediaParams['videoSubjectTypes'] = $request->videoSubjectTypes;
            }
            if($request->audioPresenterTypes)
            {
                $mediaParams['audioPresenterTypes'] = $request->audioPresenterTypes;
            }
            if($request->audioSubTypes)
            {
                $mediaParams['audioSubTypes'] = $request->audioSubTypes;
            }
            if($request->audioSubjectTypes)
            {
                $mediaParams['audioSubjectTypes'] = $request->audioSubjectTypes;
            }

            if ($request->country) {
                $companyParams['country'] = $request->country;
            }
            if ($request->state) {
                $companyParams['state'] = $request->state;
            }
            if ($request->province) {
                $companyParams['province'] = $request->province;
            }
            if ($request->city) {
                $companyParams['city'] = $request->city;
            }
            if($request->socialMediaPlatform)
            {
                $mediaParams['socialMediaPlatform'] = $request->socialMediaPlatform;
            }
            if ($request->has('hasBoardMember') && "" != $request->hasBoardMember) {
                $companyParams['hasBoardMember'] = $request->hasBoardMember;
            }
            if ($request->has('hasExecutive') &&  "" != $request->hasExecutive) {
                $companyParams['hasExecutive'] = $request->hasExecutive;
            }
            if ($request->committee) {
                $companyParams['committee'] = $request->committee;
            }
            if ($request->executiveRole) {
                $companyParams['executiveRole'] = $request->executiveRole;
            }
            if ($request->memberName) {
                $companyParams['memberName'] = $request->memberName;
            }
            if ($request->isin) {
                $mediaParams['isin'] = $request->isin;
            }
            if ($request->cusip) {
                $mediaParams['cusip'] = $request->cusip;
            }
            if($request->minorityOwnedBusiness)
            {
                $mediaParams['minorityOwnedBusiness'] = $request->minorityOwnedBusiness;
            }
            if ($request->publiclyTradedCompany) {
                $mediaParams['publiclyTradedCompany'] = $request->publiclyTradedCompany;
            }
            if ($request->exchangedTradedOn) {
                $mediaParams['exchangedTradedOn'] = $request->exchangedTradedOn;
            }
            if($request->has('esgRating') && "" != $request->esgRating)
            {
                $mediaParams['esgRating'] = $request->esgRating;
            }

            if($request->mediaPublishedFromDate)
            {
                $mediaParams['mediaPublishedFromDate'] = $request->mediaPublishedFromDate;
            }
            if($request->mediaPublishedToDate)
            {
                $mediaParams['mediaPublishedToDate'] = $request->mediaPublishedToDate;
            }
            if($request->mediaRecordedFromDate)
            {
                $mediaParams['mediaRecordedFromDate'] = $request->mediaRecordedFromDate;
            }
            if($request->mediaRecordedToDate)
            {
                $mediaParams['mediaRecordedToDate'] = $request->mediaRecordedToDate;
            }

            switch($request->tabType)
            {
                case 'audio':
                    $response = $this->audioFileSearch($mediaParams);
                    $response['videoData'] = [];
                    $response['companyData'] = [];

                    $response['totalAudio'] = $response['pagination']['total'];
                    $response['totalVideo'] = $this->totalVideoFileCount($mediaParams);

                    $audioRelatedCompanyId = $this->audioRelatedCompanyId($mediaParams);
                    $videoRelatedCompanyId = $this->videoRelatedCompanyId($mediaParams);
                    $companyIds = array_unique(array_merge($audioRelatedCompanyId, $videoRelatedCompanyId));
                    if(sizeof($companyIds))
                    {
                        $companyParams['related_company_id'] = $companyIds;
                    }
                    $response['totalCompany'] = $this->totalCompanyCount($companyParams);
                    break;
                case 'video':
                    $response = $this->videoFileSearch($mediaParams);
                    $response['audioData'] = [];
                    $response['companyData'] = [];

                    $response['totalAudio'] = $this->totalAudioFileCount($mediaParams);
                    $response['totalVideo'] = $response['pagination']['total'];

                    $audioRelatedCompanyId = $this->audioRelatedCompanyId($mediaParams);
                    $videoRelatedCompanyId = $this->videoRelatedCompanyId($mediaParams);
                    $companyIds = array_unique(array_merge($audioRelatedCompanyId, $videoRelatedCompanyId));
                    if(sizeof($companyIds))
                    {
                        $companyParams['related_company_id'] = $companyIds;
                    }

                    $response['totalCompany'] = $this->totalCompanyCount($companyParams);
                    break;
                case 'company':
                    $audioRelatedCompanyId = $this->audioRelatedCompanyId($mediaParams);
                    $videoRelatedCompanyId = $this->videoRelatedCompanyId($mediaParams);
                    $companyIds = array_unique(array_merge($audioRelatedCompanyId, $videoRelatedCompanyId));
                    if(sizeof($companyIds))
                    {
                        $companyParams['related_company_id'] = $companyIds;
                    }
                    $response = $this->companySearch($companyParams);

                    $response['audioData'] = [];
                    $response['videoData'] = [];
                    $response['totalAudio'] = $this->totalAudioFileCount($mediaParams);
                    $response['totalVideo'] = $this->totalVideoFileCount($mediaParams);
                    $response['totalCompany'] = $response['pagination']['total'];
                    break;
            }


            return $this->sendResponse($response, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('error', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    private function audioFileSearch($mediaParams)
    {
        if(!sizeof($mediaParams))
        {
            $response = [
                'pagination' => [
                    'total' => 0,
                    'per_page' => 1,
                    'current_page' => 1,
                    'last_page' => 1,
                ],
                'audioData' => [],
            ];
            return $response;
        }

        $selectedField = [
            'media_files.id',
            'media_files.uuid as media_uuid',
            'media_files.name', 'view_counter',
            'media_files.created_at',
            'media_files.media_type',
            'media_files.s3_address',
            'companies.id as company_id',
            'companies.name as company_name',
            'companies.slug_name as slug',
            'companies.image',
        ];

        $joinTable = [
            'companies',
        ];

        $mediaParams['media_type'] = 1;
        $mediaParams['status'] = 2;
        $mediaParams['is_meta_info_completed'] = 1;
        $mediaParams['is_hierarchy_info_completed'] = 1;
        $mediaParams['publish_status'] = 1;
        $mediaParams['order'] = 'DESC';

        $result = (new MediaFile)->getScreenerSearchPaginate($selectedField, $joinTable, $mediaParams);

        $data = [];
        foreach($result as $key => $value) {
            $data[$key]['id'] = $value->id;
            $data[$key]['mediaUuid'] = $value->media_uuid;
            $data[$key]['name'] = $value->name;
            $data[$key]['viewCounter'] = $value->view_counter;
            $data[$key]['companyName'] = $value->company_name;
            $data[$key]['companySlug'] = $value->slug;
            $data[$key]['createdAt'] = Carbon::parse($value->created_at)->diffForHumans();

            $data[$key]['mediaType'] = 'audio';
            $data[$key]['routeName'] = 'ViewAudioDetails';
            $data[$key]['fileThumb'] = asset('images/audio_thumb.png');
            $data[$key]['companyImage'] = $value->image ? config('filesystems.disks.s3.url') . "/" . config('filesystems.disks.s3.s3_env') . "/company_image/{$value->image}" : asset('/images/image-placeholder-1.png');
        }
        $response = [
            'pagination' => [
                'total' => $result->total(),
                'per_page' => $result->perPage(),
                'current_page' => $result->currentPage(),
                'last_page' => $result->lastPage(),
                'from' => $result->firstItem(),
                'to' => $result->lastItem()
            ],
            'audioData' => $data,
        ];
        return $response;
    }

    private function videoFileSearch($mediaParams)
    {
        if(!sizeof($mediaParams))
        {
            $response = [
                'pagination' => [
                    'total' => 0,
                    'per_page' => 1,
                    'current_page' => 1,
                    'last_page' => 1,
                ],
                'videoData' => [],
            ];
            return $response;
        }

        $selectedField = [
            'media_files.id',
            'media_files.uuid as media_uuid',
            'media_files.name', 'view_counter',
            'media_files.created_at',
            'media_files.media_type',
            'media_files.s3_address',
            'companies.id as company_id',
            'companies.name as company_name',
            'companies.slug_name as slug',
            'companies.image',
            'videos.video_id',
        ];

        $joinTable = [
            'companies',
            'videos',
        ];

        $mediaParams['media_type'] = 2;
        $mediaParams['status'] = 2;
        $mediaParams['is_meta_info_completed'] = 1;
        $mediaParams['is_hierarchy_info_completed'] = 1;
        $mediaParams['publish_status'] = 1;
        $mediaParams['order'] = 'DESC';

        $result = (new MediaFile)->getScreenerSearchPaginate($selectedField, $joinTable, $mediaParams);

        $data = [];
        foreach($result as $key => $value) {
            $data[$key]['id'] =  $value->id;
            $data[$key]['mediaUuid'] =  $value->media_uuid;
            $data[$key]['name'] =  $value->name;
            $data[$key]['viewCounter'] =  $value->view_counter;
            $data[$key]['companyName'] =  $value->company_name;
            $data[$key]['companySlug'] =  $value->slug;
            $data[$key]['createdAt'] =  Carbon::parse($value->created_at)->diffForHumans();
            $data[$key]['mediaType'] =  'video';
            $data[$key]['routeName'] =  'ViewVideoDetails';
            $data[$key]['videoId'] =  $value->video_id;
            $data[$key]['fileThumb'] =  "https://view.vzaar.com/{$value->video_id}/image";
            $data[$key]['companyImage'] =  $value->image ? config('filesystems.disks.s3.url') . "/" . config('filesystems.disks.s3.s3_env') . "/company_image/{$value->image}" : asset('/images/image-placeholder-1.png');
        }
        $response = [
            'pagination' => [
                'total' => $result->total(),
                'per_page' => $result->perPage(),
                'current_page' => $result->currentPage(),
                'last_page' => $result->lastPage(),
                'from' => $result->firstItem(),
                'to' => $result->lastItem()
            ],
            'videoData' => $data,
        ];
        return $response;
    }

    private function companySearch($companyParams)
    {
        if(!sizeof($companyParams))
        {
            $response = [
                'pagination' => [
                    'total' => 0,
                    'per_page' => 1,
                    'current_page' => 1,
                    'last_page' => 1,
                ],
                'companyData' => [],
            ];
            return $response;
        }

        $selectedField = [
            'companies.id',
            'companies.name',
            'companies.slug_name as slug',
            'companies.phone_number',
            'companies.icon',
            'addresses.street_address_one',
            'addresses.street_address_two',
            'addresses.city',
            'addresses.zip',
            'states.name as state',
            'countries.name as country'
        ];

        $result = (new MediaFile)->getScreenerCompanySearchPaginate($selectedField, $companyParams);

        $data = [];
        foreach($result as $key => $value) {
            $street_address_one = ($value->street_address_one && $value->street_address_one != '') ? $value->street_address_one . ', ' : '';
            $street_address_two = ($value->street_address_two && $value->street_address_two != '') ? $value->street_address_two . ', ' : '';
            $city = ($value->city && $value->city != '') ? $value->city . ', ' : '';
            $state = ($value->state && $value->state != '') ? $value->state . ', ' : '';
            $zip = ($value->zip && $value->zip != '') ? $value->zip . ', ' : '';
            $country = ($value->country && $value->country != '') ? $value->country : '';
            $address = $street_address_one . $street_address_two . $city . $state . $zip . $country;

            $data[$key]['id'] =  $value->id;
            $data[$key]['name'] =  $value->name;
            $data[$key]['companySlug'] =  $value->slug;
            $data[$key]['phone'] =  ($value->phone_number && $value->phone_number != '') ? $value->phone_number : 'Phone number not found';
            $data[$key]['address'] =  ($address != '') ? $address : 'Address not found';
            $data[$key]['companyImage'] =  $value->icon ? config('filesystems.disks.s3.url') . "/" . config('filesystems.disks.s3.s3_env') . "/company_icon/{$value->icon}" : asset('/images/image-placeholder-1.png');

        }
        $response = [
            'pagination' => [
                'total' => $result->total(),
                'per_page' => $result->perPage(),
                'current_page' => $result->currentPage(),
                'last_page' => $result->lastPage(),
                'from' => $result->firstItem(),
                'to' => $result->lastItem()
            ],
            'companyData' => $data,
        ];
        return $response;
    }

    private function totalAudioFileCount($mediaParams)
    {
        if(!sizeof($mediaParams))
        {
            return 0;
        }

        $selectedField = [
//            \DB::raw("count(media_files.id) as total"),
            'media_files.id',
        ];

        $joinTable = [
            'companies',
        ];

        $mediaParams['media_type'] = 1;
        $mediaParams['status'] = 2;
        $mediaParams['is_meta_info_completed'] = 1;
        $mediaParams['is_hierarchy_info_completed'] = 1;
        $mediaParams['publish_status'] = 1;

        $result = (new MediaFile)->getScreenerSearchCount($selectedField, $joinTable, $mediaParams);
        return $result;
    }

    private function totalVideoFileCount($mediaParams)
    {
        if(!sizeof($mediaParams))
        {
            return 0;
        }

        $selectedField = [
//            \DB::raw("count(media_files.id) as total"),
            'media_files.id',
        ];

        $joinTable = [
            'companies',
            'videos',
        ];

        $mediaParams['media_type'] = 2;
        $mediaParams['status'] = 2;
        $mediaParams['is_meta_info_completed'] = 1;
        $mediaParams['is_hierarchy_info_completed'] = 1;
        $mediaParams['publish_status'] = 1;

        $result = (new MediaFile)->getScreenerSearchCount($selectedField, $joinTable, $mediaParams, 'video');
        return $result;
    }

    private function totalCompanyCount($companyParams)
    {
        if(!sizeof($companyParams))
        {
            return 0;
        }

        $selectedField = [
//            \DB::raw("count(media_files.id) as total"),
            'companies.id',
        ];

        $result = (new MediaFile)->getScreenerCompanySearchCount($selectedField, $companyParams);
        return $result;
    }

    private function audioRelatedCompanyId($mediaParams)
    {
        if(!sizeof($mediaParams))
        {
            return [];
        }
        $selectedField = [
            'media_files.id',
            'media_files.uuid as media_uuid',
            'media_files.name', 'view_counter',
            'media_files.created_at',
            'media_files.media_type',
            'media_files.s3_address',
            'companies.id as company_id',
            'companies.name as company_name',
            'companies.slug_name as slug',
            'companies.image',
        ];

        $joinTable = [
            'companies',
        ];

        $mediaParams['media_type'] = 1;
        $mediaParams['status'] = 2;
        $mediaParams['is_meta_info_completed'] = 1;
        $mediaParams['is_hierarchy_info_completed'] = 1;
        $mediaParams['publish_status'] = 1;

        $result = (new MediaFile)->getScreenerSearchResult($selectedField, $joinTable, $mediaParams)->pluck('company_id')->toArray();
        return $result;
    }

    private function videoRelatedCompanyId($mediaParams)
    {
        if(!sizeof($mediaParams))
        {
            return [];
        }

        $selectedField = [
            'companies.id as company_id',
        ];

        $joinTable = [
            'companies',
            'videos',
        ];

        $mediaParams['media_type'] = 2;
        $mediaParams['status'] = 2;
        $mediaParams['is_meta_info_completed'] = 1;
        $mediaParams['is_hierarchy_info_completed'] = 1;
        $mediaParams['publish_status'] = 1;

        $result = (new MediaFile)->getScreenerSearchResult($selectedField, $joinTable, $mediaParams)->pluck('company_id')->toArray();
        return $result;
    }
}
