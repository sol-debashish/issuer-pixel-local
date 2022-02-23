<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\AnalystRating;
use App\Models\CategorizationLevel;
use App\Models\City;
use App\Models\Company;
use App\Models\CompanyCategorizationLookup;
use App\Models\CompanyMediaTaxonomy;
use App\Models\CompanySocialMediaPlatform;
use App\Models\ContentFolder;
use App\Models\Country;
use App\Models\Currency;
use App\Models\EmployeeNumber;
use App\Models\EntityType;
use App\Models\EsgScore;
use App\Models\EsgScoreRating;
use App\Models\ExchangeTraded;
use App\Models\FinancingType;
use App\Models\Industry;
use App\Models\IntelletualProperty;
use App\Models\LegalEntityType;
use App\Models\MediaCategorizationLookup;
use App\Models\MediaCoverType;
use App\Models\MediaFile;
use App\Models\MediaPresenterType;
use App\Models\MediaSubType;
use App\Models\MediaType;
use App\Models\MicroBloggingSite;
use App\Models\OwnedBusiness;
use App\Models\PatentsType;
use App\Models\PodcastGuest;
use App\Models\PubliclyTradedCompanyType;
use App\Models\PublicPrivateCompanyType;
use App\Models\ResearchCoverageType;
use App\Models\Sector;
use App\Models\SharedCommunityResearchPlatform;
use App\Models\ShareholderNumber;
use App\Models\SocialBookmarkingSite;
use App\Models\SocialMediaCategory;
use App\Models\SocialMediaPlatform;
use App\Models\SocialNetworkingSite;
use App\Models\SocialNewsSite;
use App\Models\State;
use App\Models\SubjectType;
use App\Models\SubSector;
use App\Models\Suggestion;
use App\Models\SuggestionType;
use App\Models\TradingAndReportingStatus;
use App\Models\UploadRelatedDocumentType;
use App\Models\VideoSharingSite;
use App\Models\LeadershipAndGovernanceRole;
use App\Traits\Media;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Traits\NodeMap;
use Illuminate\Validation\Rule;
use Validator;
use VzaarApi;

class AjaxController extends BaseController
{
    use NodeMap;
    use Media;

    public function getCountries()
    {
        try {
             $countries = Country::active()->getAssoc();
            /*$countryIds = [1]; // Currently only fetching United States that's primary key is 1
            $countries = Country::whereIn('id', $countryIds)->get(['name', 'id'])->toArray();*/
            return $this->sendResponse($countries, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getStatesOrProvinceCondition(Request $request)
    {
        try {
            $countryIds = $request->country_id;
            $countries = Country::whereId($countryIds)->get(['have_state', 'have_province'])->toArray();
            return $this->sendResponse($countries, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getIndustries()
    {
        try {
            $industry = Cache::remember('industries', config('cache.ttl.short'), function () {
                return Industry::active()->published()->orderBy('description', 'asc')->get(['description', 'id'])->toArray();
            });
            return $this->sendResponse($industry, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getNodeList(Request $request)
    {
        $targetModelName = "App\\Models\\$request->type";
        $where = "where{$request->parent_type}Id";
        try {
            $nodeList = $targetModelName::active()->{$where}($request->id)->orderBy('description', 'asc')->get(['description', 'id'])->toArray();
            return $this->sendResponse($nodeList, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getSubMediaType(Request $request)
    {
        try {
            $mediaType = MediaSubType::whereMediaTypeId($request->type)->active()->get(['name', 'id', 'tag'])->toArray();
            return $this->sendResponse($mediaType, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getSubjectType(Request $request)
    {
        try {
            $mediaType = SubjectType::whereMediaTypeId($request->type)->active()->orderBy('order')->get(['name', 'id', 'tag'])->toArray();
            return $this->sendResponse($mediaType, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getMediaPresenterType(Request $request)
    {
        try {
            $mediaType = MediaPresenterType::whereMediaTypeId($request->type)->active()->get(['name', 'id'])->toArray();
            return $this->sendResponse($mediaType, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getEntityType(Request $request)
    {
        try {
            if ($request->country_id == 'all') {
                $entityType = EntityType::active()->get(['name', 'id'])->toArray();
            } else {
                $entityType = EntityType::where('country_id', $request->country_id)->active()->get(['name', 'id'])->toArray();
            }

            /*End*/
            //$entityType = EntityType::active()->get(['name', 'id'])->toArray();
            return $this->sendResponse($entityType, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getPrivatePublicCompanyType()
    {
        try {
            $type = PublicPrivateCompanyType::active()->get(['name', 'id', 'tag'])->toArray();
            return $this->sendResponse($type, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getBaseCurrencyList()
    {
        try {
            $type = Cache::remember('baseCurrencyList', config('cache.ttl.long'), function () {
                return Currency::active()->get(['name', 'id'])->toArray();
            });
            return $this->sendResponse($type, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getLegalEntityTypeList()
    {
        try {
            $type = LegalEntityType::active()->get(['name', 'id'])->toArray();
            return $this->sendResponse($type, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getTreadingAndReportingStatusList($type)
    {
        try {
            $data = TradingAndReportingStatus::where('type', $type)->active()->get(['name', 'id'])->toArray();
            return $this->sendResponse($data, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getAllTreadingAndReportingStatusList()
    {
        try {
            $data = TradingAndReportingStatus::active()->get(['name', 'id'])->toArray();
            return $this->sendResponse($data, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getPubliclyTradedCompanyTypeList(Request $request)
    {
        try {
            $type = PubliclyTradedCompanyType::active()->get(['name', 'id'])->toArray();
            return $this->sendResponse($type, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getStates(Request $request)
    {
        try {
            $states = State::whereCountryId($request->country_id)->active()->get(['name', 'id'])->toArray();
            return $this->sendResponse($states, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getCities(Request $request)
    {
        try {
            $cities = City::active()->get(['name', 'id'])->toArray();
            return $this->sendResponse($cities, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getEsgScoreList(Request $request)
    {
        try {
            $esg = EsgScore::active()->get(['name', 'id', 'tag'])->toArray();
            return $this->sendResponse($esg, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getEsgRatingList(Request $request)
    {
        try {
            $esg = EsgScoreRating::active()->get(['name', 'id', 'parent_id'])->toArray();
            return $this->sendResponse($esg, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getOwnBusinessList(Request $request)
    {
        try {
            $esg = OwnedBusiness::active()->get(['name', 'id', 'tag'])->toArray();
            return $this->sendResponse($esg, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getFinancingTypeList(Request $request)
    {
        try {
            $type = Cache::remember('financingTypeList', config('cache.ttl.long'), function () {
                return FinancingType::active()->get(['name', 'id'])->toArray();
            });
            return $this->sendResponse($type, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getPatentTypeList(Request $request)
    {
        try {
            $type = PatentsType::active()->get(['name', 'id'])->toArray();
            return $this->sendResponse($type, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getEmployeeNumberList(Request $request)
    {
        try {
            $type = EmployeeNumber::active()->employeeNumberAssoc();
            return $this->sendResponse($type, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getShareholderNumberList(Request $request)
    {
        try {
            $type = ShareholderNumber::active()->shareholderNumberAssoc();
            return $this->sendResponse($type, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getResearchCoverageTypeList(Request $request)
    {
        try {
            $type = ResearchCoverageType::active()->get(['name', 'id'])->toArray();
            return $this->sendResponse($type, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getAnalystRatingList(Request $request)
    {
        try {
            $data = AnalystRating::active()->get(['name', 'id'])->toArray();
            return $this->sendResponse($data, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getSharedCommunityResearchPlatformList(Request $request)
    {
        try {
            $data = SharedCommunityResearchPlatform::active()->get(['name', 'id'])->toArray();
            return $this->sendResponse($data, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getUploadRelatedDocumentTypeList(Request $request)
    {
        try {
            $data = UploadRelatedDocumentType::active()->get(['name', 'id'])->toArray();
            return $this->sendResponse($data, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getExchangeTradedList(Request $request)
    {
        try {
            $data = Cache::remember('exchangeTradedList', config('cache.ttl.long'), function () {
                return ExchangeTraded::active()->get(['name', 'id'])->toArray();
            });
            return $this->sendResponse($data, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getMediaCoverType(Request $request)
    {
        try {
            $data = MediaCoverType::whereMediaTypeId($request->type)->active()->get(['name', 'id'])->toArray();
            return $this->sendResponse($data, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    public function getPodcastGuestList(Request $request)
    {
        try {
            $guest = PodcastGuest::active()->get(['name', 'id'])->toArray();
            return $this->sendResponse($guest, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function suggestionRequest(Request $request)
    {
        try {
            $user = auth()->user();
            $categorizationLevelArray = CategorizationLevel::pluck('name', 'id')->toArray();
            $categorizationLevelString = implode(',', $categorizationLevelArray);

            $suggestionTypeArray = SuggestionType::active()->pluck('name', 'id')->toArray();
            $suggestionType = implode(',', $suggestionTypeArray);

            $validationField = [
                'suggestion_explanation' => 'required',
                'suggestion_reason' => 'required',
                'suggestion_type' => "required|in:$suggestionType",
                'node_type' => "required|in:$categorizationLevelString",
            ];

            if ('delete' == $request->suggestion_type || 'other' == $request->suggestion_type) {
                unset($validationField['suggestion_explanation']);
            }

            $validator = Validator::make($request->all(),
                $validationField,
                [
                    'suggestion_explanation.required' => 'Please type your requested node',
                    'suggestion_reason.required' => 'Please type your requested reason',
                ]);
            if ($validator->fails()) {
                $error = $validator->errors()->first();
                return $this->sendError('FIELDS_VALIDATION_ERROR', $error, Response::HTTP_UNPROCESSABLE_ENTITY);
            }

            /* need to create suggestion array */

            $suggestionData = [
                'suggestion_type_id' => array_search($request->suggestion_type, $suggestionTypeArray),
                'suggestion_explanation' => $request->suggestion_explanation,
                'suggestion_reason' => $request->suggestion_reason,
                'categorization_level_id' => array_search($request->node_type, $categorizationLevelArray),
                'node_id' => $request->node_id,
                'user_id' => $user->id,
                'hierarchy_type' => $request->hierarchy_type,
                'industry_id' => $request->industry_id,
                'parent_id' => $request->parent_id,
            ];

            $suggestion_id = (new Suggestion)->addSuggestion($suggestionData);

            /*send notifcation mail*/
            $industry = Industry::whereId($request->industry_id)->get(['description'])->first();
            $nodeNamespace = "App\\Models\\" . $categorizationLevelArray[array_search($request->node_type, $categorizationLevelArray)];
            //echo $nodeNamespace;exit;
            $nodeData = $nodeNamespace::whereId($request->node_id)->get(['id', 'description'])->first();

            $to = 'byron@issuerpixel.com';
            $cc = 'david@issuerpixel.com';
            $details = [
                'email' => $user->email,
                'subject' => 'Node Suggestion ' . $suggestion_id . ' ' . date("m/d/Y"),
                'title' => "{$user->name} {$user->email} has submitted an '{$request->suggestion_type}' suggestion for the '{$nodeData->description}' '{$nodeData->id}' node in {$industry->description} industry",
                'suggestion_explanation' => $request->suggestion_explanation,
                'suggestion_reason' => $request->suggestion_reason,
                'suggestion_id_time' => $suggestion_id . ' ' . date("m/d/Y h:i:s"),
            ];
            \Illuminate\Support\Facades\Notification::route('mail', [$to, $cc])
                ->notify(new \App\Notifications\SuggestionNotificationEmailSend($details));
            /*end send notifcation mail*/

            /* activity log */
            activity()
                ->useLog('Add Suggestion')
                ->performedOn($user)
                ->causedBy($user)
                ->log("{$user->first_name}, {$user->last_name} ({$user->email}) add a node suggestion on " . date('m/d/Y H:i:s'));
            /* end activity log */

            return $this->sendResponse([], ucfirst($request->suggestion_type) . " node request added.", 200);

        } catch (Exception $ex) {
            return $this->sendError('SERVER_ERROR', 'There is a problem to perform action', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function addMultipleNode(Request $request)
    {
        try {

            $categorizationLevelArray = CategorizationLevel::pluck('name', 'id')->toArray();
            $categorizationLevelString = implode(',', $categorizationLevelArray);

            $userInfo = Crypt::decrypt($request->user_info);

            if (empty($userInfo['id'])) {
                return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
            }
            $totalProfileValue = config('general.issuer_profile_completion.taxonomy.total_value');
            $totalProfileField = config('general.issuer_profile_completion.taxonomy.total_field');
            $completedProfileFieldValue = 25;

            $companyCategorizationLookup = CompanyCategorizationLookup::where('company_id', $userInfo['company_id']);
            $countSaveNode = $companyCategorizationLookup->max('order');
            /*if ($countSaveNode >= 3) {
                return $this->sendError('Operation Failed!', 'You have already added three nodes!', Response::HTTP_UNPROCESSABLE_ENTITY);
            }*/

            if ($companyCategorizationLookup->where(['industry_id' => $request->industry_id, 'categorization_level_id' => array_search($request->node_type, $categorizationLevelArray), 'node_id' => $request->node_id])->exists()) {
                return $this->sendError('Operation Failed!', 'This industry categorization has already been associated to content, please select a different categorization. Thank you!', Response::HTTP_UNPROCESSABLE_ENTITY);
            }

            if (empty($countSaveNode)) {
                Company::where('id', $userInfo['company_id'])->update(['hierarchy_completed' => $completedProfileFieldValue]);
                $nodeOrder = 1;
            } else {
                $nodeOrder = $countSaveNode + 1;

            }
            $validationField = [
                'node_type' => "required|in:$categorizationLevelString",
                'industry_id' => "required",
            ];

            $validator = Validator::make($request->all(),
                $validationField);
            if ($validator->fails()) {
                $error = $validator->errors()->first();
                return $this->sendError('FIELDS_VALIDATION_ERROR', $error, Response::HTTP_UNPROCESSABLE_ENTITY);
            }

            /* Insert node array */
            $nodeMapViewData = \DB::table($this->getNodeMapTableView($this->findNodeMapKeyByModel($request->node_type)))->find($request->node_id);
            $nodeData = [
                'company_id' => $userInfo['company_id'],
                'industry_id' => $request->industry_id,
                'categorization_level_id' => array_search($request->node_type, $categorizationLevelArray),
                'node_id' => $request->node_id,
                'node_code' => $nodeMapViewData->code,
                'order' => $nodeOrder,
            ];

            (new CompanyCategorizationLookup)->addNode($nodeData);
            return $this->sendResponse([], "Company Categorization successfully added.", 200);
        } catch (Exception $ex) {
            return $this->sendError('SERVER_ERROR', 'There is a problem to perform action', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function updateHierarchyNode(Request $request)
    {
        try {
            $company = auth('sanctum')->user()->company;
            $categorizationLevelArray = CategorizationLevel::pluck('name', 'id')->toArray();
            $companyCategorizationLookup = CompanyCategorizationLookup::where('company_id', $company->id);
            if ($companyCategorizationLookup->where(['industry_id' => $request->industry_id, 'categorization_level_id' => array_search($request->node_type, $categorizationLevelArray), 'node_id' => $request->node_id, ['id', '<>', $request->updated_id]])->exists()) {
                return $this->sendError('Operation Failed!', 'This industry categorization has already been associated to content, please select a different categorization. Thank you!', Response::HTTP_UNPROCESSABLE_ENTITY);
            }

            $totalProfileValue = config('general.issuer_profile_completion.taxonomy.total_value');
            $totalProfileField = config('general.issuer_profile_completion.taxonomy.total_field');
            $completedProfileFieldValue = 25;
            $categorizationLevelArray = CategorizationLevel::pluck('name', 'id')->toArray();
            $categorizationLevelString = implode(',', $categorizationLevelArray);

            $validationField = [
                'node_type' => "required|in:$categorizationLevelString",
                'industry_id' => "required",
            ];

            $validator = Validator::make($request->all(),
                $validationField);
            if ($validator->fails()) {
                $error = $validator->errors()->first();
                return $this->sendError('FIELDS_VALIDATION_ERROR', $error, Response::HTTP_UNPROCESSABLE_ENTITY);
            }

            $ccl = CompanyCategorizationLookup::where('id', $request->updated_id)->first();
            $companyMediaTaxonomy = CompanyMediaTaxonomy::where('company_taxonomy_id', $ccl->id);
            /* Update node array */
            $nodeMapViewData = \DB::table($this->getNodeMapTableView($this->findNodeMapKeyByModel($request->node_type)))->find($request->node_id);
            $nodeData = [
                'industry_id' => $request->industry_id,
                'categorization_level_id' => array_search($request->node_type, $categorizationLevelArray),
                'node_id' => $request->node_id,
                'node_code' => $nodeMapViewData->code,
            ];

            $NodeType = $this->findNodeMapKeyByModel($categorizationLevelArray[$ccl->categorization_level_id]);
            $NodeModelType = $this->getNodeMapModel($NodeType);


            $updatedNodeType = $this->findNodeMapKeyByModel($request->node_type);
            $updatedNodeModelType = $this->getNodeMapModel($updatedNodeType);

            $status = 'not_ok';
            if (!$companyMediaTaxonomy->exists()) {
                $status = 'ok';
            } elseif (($NodeModelType == $request->node_type)) {
                $nodemapData = $this->getNodeMap($NodeType);
                $updatedNodemapData = $this->getNodeMap($updatedNodeType);
                $NodeNamespace = "App\\Models\\" . $nodemapData['model'];
                $updatedNodeNamespace = "App\\Models\\" . $updatedNodemapData['model'];
                $Nodedata = $NodeNamespace::whereId($ccl->node_id)->get($nodemapData['parent_field'])->toArray();
                $updatedNodedata = $updatedNodeNamespace::whereId($request->node_id)->get($updatedNodemapData['parent_field'])->toArray();
                $parentId = $Nodedata[0][$nodemapData['parent_field']];
                $updatedParentId = $updatedNodedata[0][$updatedNodemapData['parent_field']];
                if ($parentId == $updatedParentId) {
                    $status = 'ok';
                }
            } elseif (($nodeData['categorization_level_id'] < $ccl->categorization_level_id) && $companyMediaTaxonomy->exists()) {
                $status = $this->checkAllParentId($NodeType, $ccl->node_id, $request->node_type, $request->node_id);

            }
            /*if not exists in relational table then update*/

            if ($status == 'ok') {
                CompanyCategorizationLookup::where('id', $request->updated_id)->update($nodeData);
            } else {
                return $this->sendError('Operation Failed!', 'Warning, this categorization change will result in a video or audio file to be categorized in an unrelated way to your company. To help maintain clarity and completeness of company and content categorization, please ensure that all video/audio categorizations are the same as or fall underneath a company categorization. This will help ensure users are able to find your profile and your content easily and effectively!', Response::HTTP_UNPROCESSABLE_ENTITY);
            }
            /*Update Hierarchy completion Status*/
            $user = auth('sanctum')->user();
            $company = $user->company;
            $company->hierarchy_completed = profileCompletePercentageCalculator($totalProfileValue, $totalProfileField, $completedProfileFieldValue);
            $company->save();
            /* activity log */
            activity()
                ->useLog('Issuer Profile Edit')
                ->performedOn($user)
                ->causedBy($user)
                ->log("{$user->first_name}, {$user->last_name} ({$user->email}) edit taxonomy on " . date('m/d/Y H:i:s'));
            /* end activity log */

            return $this->sendResponse([], "Company Categorization successfully updated.", 200);
        } catch (Exception $ex) {
            return $this->sendError('SERVER_ERROR', 'There is a problem to perform action', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getMultipleNode(Request $request)
    {
        try {
            //dd($request->all());
            $userInfo = Crypt::decrypt($request->user_info);

            if (empty($userInfo['id'])) {
                return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
            }
            if (!empty($request->categorization_id)) {
                $lookupsData = CompanyCategorizationLookup::findOrFail($request->categorization_id);
            } elseif (!empty($request->industry_id)) {
                $lookupsData = CompanyCategorizationLookup::where(['industry_id' => $request->industry_id, 'company_id' => $userInfo['company_id']])->first();
            } else {
                return $this->getCompanyAllNodes($userInfo['company_id']);
            }
            $catLevel = CategorizationLevel::findOrFail($lookupsData->categorization_level_id);
            $NodeType = $this->findNodeMapKeyByModel($catLevel->name);
            $parents = $this->getAllParentData($NodeType, $lookupsData->node_id);
            $lastNodemapData = $this->getNodeMap($NodeType);
            $lastlevelNamespace = "App\\Models\\" . $lastNodemapData['model'];
            $industry['categorization_id'] = $lookupsData->id;
            $industry['last_level'] = str_replace('-', '_', $NodeType);
            $industry['industry'] = Industry::whereId($lookupsData->industry_id)->get(['description', 'id'])->first();
            $lastLevelData = $lastlevelNamespace::whereId($lookupsData->node_id)->get(['description', 'id'])->first();
            $industry[str_replace('-', '_', $NodeType)] = $lastLevelData;
            $industry['last_level_description'] = $lastLevelData->description;
            $taxonomyData = array_merge($industry, $parents);
            return $this->sendResponse($taxonomyData, 'Data found successfully.', 200);
            //dd($taxonomyData);

        } catch (Exception $ex) {
            return $this->sendError('SERVER_ERROR', 'There is a problem to perform action', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

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

    public function getCompanyAllNodes($companyId)
    {
        $lookupsData = CompanyCategorizationLookup::where(['company_id' => $companyId])->orderBy('order')->get();
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
        return $this->sendResponse($hierarchyData, 'Data found successfully.', 200);
    }

    private function checkAllParentId($node_type, $node_id, $requestedLevel, $requestedLevelId)
    {
        $data = 'not_ok';
        $nodemapData = $this->getNodeMap($node_type);
        if ($nodemapData['model'] != $requestedLevel) {
            $NodeNamespace = "App\\Models\\" . $nodemapData['model'];
            $Nodedata = $NodeNamespace::whereId($node_id)->get($nodemapData['parent_field'])->toArray();
            $parentKey = $this->findNodeMapKeyByModel($nodemapData['parent_model']);
            $parentId = $Nodedata[0][$nodemapData['parent_field']];
            $parentNamespace = "App\\Models\\" . $nodemapData['parent_model'];
            $parentData = $parentNamespace::whereId($parentId)->get(['description', 'id'])->first();
            \Log::info("panrent: $parentData");
            \Log::info("requested level: $requestedLevel, requested level_id:$requestedLevelId, current level: {$nodemapData['parent_model']}, current level_id: $parentId");
            $returnData = $this->checkAllParentId($parentKey, $parentId, $requestedLevel, $requestedLevelId);
            if ($returnData == 'ok') {
                $data = 'ok';
            }
        }
        if ($requestedLevel == $nodemapData['parent_model'] && $requestedLevelId == $parentId) {
            $data = 'ok';
        }
        return $data;
    }

    public function addAudioVideoMultipleNode(Request $request)
    {
        $companyId = auth()->user()->company_id;
        $categorizationLevelArray = CategorizationLevel::pluck('name', 'id')->toArray();
        $categorizationLevelString = implode(',', $categorizationLevelArray);
        try {
            $validationField = [
                'node_type' => "required|in:$categorizationLevelString",
                'industry_id' => "required",
            ];

            $validator = Validator::make($request->all(),
                $validationField,
                [
                    'node_type.required' => 'Please select a node',
                ]);
            if ($validator->fails()) {
                $error = $validator->errors()->first();
                return $this->sendError('FIELDS_VALIDATION_ERROR', $error, Response::HTTP_UNPROCESSABLE_ENTITY);
            }
            $mediaFile = MediaFile::select('id', 'is_hierarchy_info_completed')->where('uuid', $request->media_id)->where('company_id', $companyId)->firstOrFail();

            $mediaCategorizationLookup = MediaCategorizationLookup::where('company_id', $companyId)->where('media_file_id', $mediaFile->id);
            $countSaveNode = $mediaCategorizationLookup->count();
            /*if ($countSaveNode >= 3) {
                return $this->sendError('Operation Failed!', 'You have already added three nodes!', Response::HTTP_UNPROCESSABLE_ENTITY);
            }*/
            if ($mediaCategorizationLookup->where(['industry_id' => $request->industry_id, 'categorization_level_id' => array_search($request->node_type, $categorizationLevelArray), 'node_id' => $request->node_id])->exists()) {
                return $this->sendError('Operation Failed!', 'This industry categorization has already been associated to content, please select a different categorization. Thank you!', Response::HTTP_UNPROCESSABLE_ENTITY);
            }

            /* Insert node array */
            $nodeMapViewData = \DB::table($this->getNodeMapTableView($this->findNodeMapKeyByModel($request->node_type)))->find($request->node_id);
            $nodeData = [
                'company_id' => $companyId,
                'media_file_id' => $mediaFile->id,
                'categorization_level_id' => array_search($request->node_type, $categorizationLevelArray),
                'node_id' => $request->node_id,
                'node_code' => $nodeMapViewData->code,
                'node_name' => $request->node_name,
                'order' => (0 == $countSaveNode) ? 1 : $countSaveNode + 1,
                'industry_id' => $request->industry_id,
            ];

            $lookupData = MediaCategorizationLookup::create($nodeData);
            $mediaFile->is_hierarchy_info_completed = 1;
            $mediaFile->save();
            /*taxonomy functionality*/
            $this->companyMediaTaxonomyAdd($lookupData->id, $companyId, $mediaFile->id);

            return $this->sendResponse(['lookupId' => $lookupData->id], "Media Categorization successfully added.", 200);
        } catch (Exception $ex) {
            return $this->sendError('SERVER_ERROR', 'There is a problem to perform action', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function updateAudioVideoNode(Request $request)
    {
        $companyId = auth()->user()->company_id;
        $categorizationLevelArray = CategorizationLevel::pluck('name', 'id')->toArray();
        $categorizationLevelString = implode(',', $categorizationLevelArray);
        DB::beginTransaction();
        try {
            $validationField = [
                'node_type' => "required|in:$categorizationLevelString",
                'industry_id' => "required",
            ];

            $validator = Validator::make($request->all(),
                $validationField,
                [
                    'node_type.required' => 'Please select a node',
                ]);
            if ($validator->fails()) {
                $error = $validator->errors()->first();
                return $this->sendError('FIELDS_VALIDATION_ERROR', $error, Response::HTTP_UNPROCESSABLE_ENTITY);
            }
            $mediaFile = MediaFile::select('id', 'is_hierarchy_info_completed')->where('uuid', $request->media_id)->where('company_id', $companyId)->firstOrFail();
            $mediaCategorizationLookup = MediaCategorizationLookup::where('company_id', $companyId)->where('media_file_id', $mediaFile->id);

            if ($mediaCategorizationLookup->where(['industry_id' => $request->industry_id, 'categorization_level_id' => array_search($request->node_type, $categorizationLevelArray), 'node_id' => $request->node_id])->exists()) {
                return $this->sendError('Operation Failed!', 'This industry categorization has already been associated to content, please select a different categorization. Thank you!', Response::HTTP_UNPROCESSABLE_ENTITY);
            }

            /* Insert node array */
            $nodeMapViewData = \DB::table($this->getNodeMapTableView($this->findNodeMapKeyByModel($request->node_type)))->find($request->node_id);
            $nodeData = [
                'categorization_level_id' => array_search($request->node_type, $categorizationLevelArray),
                'node_id' => $request->node_id,
                'node_code' => $nodeMapViewData->code,
                'node_name' => $request->node_name,
                'industry_id' => $request->industry_id,
            ];

            $updatedItem = MediaCategorizationLookup::where('id', $request->categorization_id);
            $updatedItem->update($nodeData);
            if ($request->action_type && $request->action_type == 'edit') {
                $currentCompanyMediaTaxonomyObject = $currentCompanyMediaTaxonomy = CompanyMediaTaxonomy::where('media_taxonomy_id', $request->categorization_id);
                $currentCompanyMediaTaxonomyItem = $currentCompanyMediaTaxonomyObject->first();
                if (null != $currentCompanyMediaTaxonomyItem) {
                    $companyMediaTaxonomy = CompanyMediaTaxonomy::where('company_taxonomy_id', $currentCompanyMediaTaxonomyItem->company_taxonomy_id);
                    if ($companyMediaTaxonomy->count() == 1) {
                        CompanyCategorizationLookup::where('id', $currentCompanyMediaTaxonomyItem->company_taxonomy_id)->delete();
                    }
                    $currentCompanyMediaTaxonomy->delete();
                }

                /*taxonomy functionality*/
                $this->companyMediaTaxonomyAdd($request->categorization_id, auth()->user()->company_id, $updatedItem->first()->media_file_id);
                /*End*/
            }
            DB::commit();
            return $this->sendResponse(['lookupId' => $request->categorization_id], "Media Categorization successfully updated.", 200);
        } catch (Exception $ex) {
            \Log::info('update audio/video taxonomy related exception: ' . $ex->getMessage());
            DB::rollback();
            return $this->sendError('SERVER_ERROR', 'There is a problem to perform action', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getSocialMediaCategories()
    {
        try {
            $entityType = SocialMediaCategory::active()->get(['name', 'id'])->toArray();
            return $this->sendResponse($entityType, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getSocialMediaPlatform()
    {
        $selectedPlatform = CompanySocialMediaPlatform::whereCompanyId(auth()->user()->company_id)->pluck('value', 'social_media_platform_id')->toArray();
        try {
            $data = SocialMediaPlatform::orderBy('name', 'asc')->active()->get(['name', 'id', 'url_validate_string', 'icon_class'])->toArray();
            foreach ($data as $d) {
                $d['value'] = '';
                if (isset($selectedPlatform[$d['id']])) {
                    $d['value'] = $selectedPlatform[$d['id']];
                }
                $output[] = $d;
            }
            return $this->sendResponse($output, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            \Log::info('Social Media platform : ' . $ex->getMessage());
            return $this->sendError('error', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getAllSocialMediaPlatform()
    {
        try {
            $data = SocialMediaPlatform::orderBy('name', 'asc')->active()->get(['name', 'id'])->toArray();

            return $this->sendResponse($data, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            \Log::info('Social Media platform : ' . $ex->getMessage());
            return $this->sendError('error', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getSocialNetworkingSites()
    {
        try {
            $data = SocialNetworkingSite::active()->get(['name', 'id'])->toArray();
            return $this->sendResponse($data, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getSocialBookmarkingSites()
    {
        try {
            $data = SocialBookmarkingSite::active()->get(['name', 'id'])->toArray();
            return $this->sendResponse($data, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getSocialNewsSites()
    {
        try {
            $data = SocialNewsSite::active()->get(['name', 'id'])->toArray();
            return $this->sendResponse($data, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getVideoSharingSites()
    {
        try {
            $data = VideoSharingSite::active()->get(['name', 'id'])->toArray();
            return $this->sendResponse($data, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getMicrobloggingSites()
    {
        try {
            $data = MicroBloggingSite::active()->get(['name', 'id'])->toArray();
            return $this->sendResponse($data, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getIntelletualPropertyList()
    {
        try {
            $intellProperty = IntelletualProperty::active()->get(['name', 'id'])->toArray();
            return $this->sendResponse($intellProperty, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function taxonomyDataStore(Request $request)
    {
        (new Company)->storeTaxonomyData($request, auth()->user()->company_id);
    }

    public function mediaCategorizationLookup(Request $request)
    {
        try {
            $lookupsData = MediaCategorizationLookup::where(['company_id' => auth()->user()->company_id, 'id' => $request->categorization_id, 'media_file_id' => $request->file_id])->first();
            if (null == $lookupsData) {
                return $this->sendError('Item not found', 'Item not found', Response::HTTP_UNPROCESSABLE_ENTITY);
            }
            $catLevel = CategorizationLevel::findOrFail($lookupsData->categorization_level_id);
            $NodeType = $this->findNodeMapKeyByModel($catLevel->name);
            $parents = $this->getAllParentData($NodeType, $lookupsData->node_id);
            $lastNodemapData = $this->getNodeMap($NodeType);
            $lastlevelNamespace = "App\\Models\\" . $lastNodemapData['model'];
            $industry['categorization_id'] = $lookupsData->id;
            $industry['last_level'] = str_replace('-', '_', $NodeType);
            $industry['industry'] = Industry::whereId($lookupsData->industry_id)->get(['description', 'id'])->first();
            $lastLevelData = $lastlevelNamespace::whereId($lookupsData->node_id)->get(['description', 'id'])->first();
            $industry[str_replace('-', '_', $NodeType)] = $lastLevelData;
            $industry['last_level_description'] = $lastLevelData->description;
            $taxonomyData = array_merge($industry, $parents);
            return $this->sendResponse($taxonomyData, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('SERVER_ERROR', 'There is a problem to perform action', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function mediaCategorizationLookupForCollapse(Request $request)
    {
        if ($request->uuid) {
            $companyId = MediaFile::where('uuid', $request->uuid)->pluck('company_id')->first();
        } elseif (auth('sanctum')->check()) {
            $companyId = auth('sanctum')->user()->company_id;
        } else {
            $userInfo = Crypt::decrypt($request->userInfo);
            if (empty($userInfo['id'])) {
                return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
            }
            $companyId = $userInfo['company_id'];
        }

        $validator = Validator::make($request->all(), [
//            'id' => 'required'
        ]);

        if ($validator->fails()) {
            $error = $validator->errors()->first();
            return $this->sendError('FIELDS_VALIDATION_ERROR', $error, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        try {
            if (!empty($request->id)) {
                $id = explode(',', $request->id);
                $lookupsData = MediaCategorizationLookup::where(['company_id' => $companyId])
                    ->whereIn('id', $id)->orderBy('id')->get();
            } elseif (!empty($request->mediaId)) {
                $mf = MediaFile::select('id')->whereUuid($request->mediaId)->first();
                $lookupsData = MediaCategorizationLookup::where(['company_id' => $companyId])
                    ->where('media_file_id', $mf->id)->orderBy('id')->get();
            }
            if (!$lookupsData->count()) {
                return $this->sendError('Item not found', 'Item not found', Response::HTTP_UNPROCESSABLE_ENTITY);
            }

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
            return $this->sendResponse($hierarchyData, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('SERVER_ERROR', 'There is a problem to perform action', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function mediaCategorizationLookupIdByUuid($uuid){
        try
        {
            $companyId = auth()->user()->company_id;
            $mediaFile = MediaFile::select('id')->where('uuid', $uuid)->where('company_id', $companyId)->first();
            if(null == $mediaFile)
            {
                return $this->sendError('error', 'Content not completed to published', Response::HTTP_FORBIDDEN);
            }
            $mediaCategorizationLookup = MediaCategorizationLookup::where('media_file_id', $mediaFile->id)->pluck('id')->toArray();
            return $this->sendResponse($mediaCategorizationLookup, 'File id found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('SERVER_ERROR', 'There is a problem to perform action', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function destroyMediaFile(MediaFile $file)
    {
        if (auth()->id() != $file->created_by) {
            return $this->sendError('error', 'Unauthorized to delete this file', Response::HTTP_FORBIDDEN);
        }

        try {

            if (2 == $file->media_type && null != $file->video && null != $file->video->video_id) {
                VzaarApi\Client::$client_id = config('services.dacast.client_id');
                VzaarApi\Client::$auth_token = config('services.dacast.auth_token');

                $video = VzaarApi\Video::find($file->video->video_id);
                $video->delete();
            }
            $file->status = 4;
            $file->save();
            $file->delete();
            ContentFolder::where('media_file_id', $file->id)->delete();

            return $this->sendResponse([], 'File delete successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('SERVER_ERROR', 'There is a problem to perform action', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function changeMediaFileStatus(Request $request)
    {
        $file = MediaFile::whereId($request->id)->first();
        if (auth()->id() != $file->created_by) {
            return $this->sendError('error', 'Unauthorized to delete this file', Response::HTTP_FORBIDDEN);
        }

        if (!$file->is_meta_info_completed || ! $file->is_hierarchy_info_completed) {
            return $this->sendError('error', 'Warning - Video and Audio content can not be published
            without filling in all content details, please edit your upload information and complete all fields to publish
            your content.', Response::HTTP_FORBIDDEN);
        }

        $validator = Validator::make($request->all(), [
            'status' => 'required|in:0,1'
        ]);

        if ($validator->fails()) {
            $error = $validator->errors()->first();
            return $this->sendError('FIELDS_VALIDATION_ERROR', $error, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        try {
            $file->publish_status = !$request->status;
            $file->save();

            /* tracking media file status change */

            $logName = ($file->publish_status == 1)  ? "Publish" : "Unpublish";
            if(($file->media_type == 1))
            {
                $logName .= ' audio file';
            }
            elseif(($file->media_type == 2))
            {
                $logName .= ' video file';
            }
            $user = auth()->user();
            activity()
                ->useLog($logName)
                ->performedOn($user)
                ->causedBy($user)
                ->log("{$user->name} $logName ({$file->name})");
            /*end restore tracking manual db snapshoot */

            return $this->sendResponse([], 'Publish status changed successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('SERVER_ERROR', 'There is a problem to perform action', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getCompanyBioMultipleNode($slug){
        $company = Company::whereSlugName($slug)->first();
        return $this->getCompanyAllNodes($company->id);
    }

    public function getLeadershipAndGovernanceRoles(Request $request)
    {
        try {
            $roles = LeadershipAndGovernanceRole::where('type', $request->roleType)->get(['id', 'name'])->toArray();
            return $this->sendResponse($roles, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('error', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
