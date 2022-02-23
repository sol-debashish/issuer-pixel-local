<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\IndustryRequest;
use App\Models\Address;
use App\Models\Basement;
use App\Models\CategorizationLevel;
use App\Models\Company;
use App\Models\CompanyCategorizationLookup;
use App\Models\CompanyTaxonomyCategorizationLookup;
use App\Models\ContentFolder;
use App\Models\CrossIndex;
use App\Models\Deck;
use App\Models\DynamicNodeView;
use App\Models\Echelon;
use App\Models\Floor;
use App\Models\Group;
use App\Models\Headquarter;
use App\Models\Industry;
use App\Models\IndustryNodeStatistics;
use App\Models\Layer;
use App\Models\MediaCategorizationLookup;
use App\Models\Mine;
use App\Models\NodeWarp;
use App\Models\Sector;
use App\Models\SubBasement;
use App\Models\SubDeck;
use App\Models\SubEchelon;
use App\Models\SubFloor;
use App\Models\SubGroup;
use App\Models\SubLayer;
use App\Models\SubMine;
use App\Models\SubSector;
use App\Models\SubTier;
use App\Models\Tier;
use App\Traits\Media;
use App\Traits\NodeHelperTrait;
use App\Traits\NodeMap;
use App\Traits\NodeMoveTrait;
use Carbon\Carbon;
use DataTables;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Spatie\Activitylog\Models\Activity;
use Waavi\Sanitizer\Sanitizer;
use Illuminate\Support\Str;

class IndustryController extends Controller
{
    use NodeMap;
    use NodeHelperTrait;
    use NodeMoveTrait;
    use Media;
    const ITEM_PER_PAGE = 10;
    private $model;

    public function __construct(Industry $model)
    {
        $this->model = $model;
    }

    public function index()
    {
        if (request()->ajax()) {
            $query = $this->model->query()->active();
            $table = Datatables::of($query);
            $template = 'admin.industry.actions_template';
            $statusTemplate = 'partials.status_template';
            $publishStatusTemplate = 'admin.industry.publish_status_template';
            $table->editColumn('status', function ($row) use ($statusTemplate) {
                return view($statusTemplate, compact('row'));
            });
            $table->editColumn('publish_status', function ($row) use ($publishStatusTemplate) {
                return view($publishStatusTemplate, compact('row'));
            });
            $table->addColumn('actions', ' ');
            $table->editColumn('actions', function ($row) use ($template) {
                $routeKey = 'admin.industry';

                return view($template, compact('row', 'routeKey'));
            });
            return $table->make(true);
        }
        return view('admin.industry.index');
    }

    public function store(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'description' => 'required|string|unique:industries,description',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'msg' => $validator->errors()->first()]);
        }

        $sanitizeRequest = (new Sanitizer($request->all(), ['description' => 'escape|trim', 'note' => 'escape|trim']))->sanitize();
        $sanitizeRequest['status'] = 1;
        $sanitizeRequest['created_by'] = auth()->id();
        try {
            $industry = $this->model->create($sanitizeRequest);

            $industry->code = str_pad($industry->id, 2, '0', STR_PAD_LEFT);
            $industry->save();
            $data['msg'] = 'successfully created!';
            $data['status'] = 'success';

            /* tracking industry create */
            $logDescription = auth()->user()->name . " create '{$industry->description}' industry";
            $this->addActivityLog('industry_node', $industry, $logDescription);
            /* end tracking industry create */
        } catch (\Exception $e) {
            $data['msg'] = "Operation Failed!";
            $data['status'] = 'error';
            logError($e);
        }
        return response()->json($data);
    }

    public function edit(Industry $industry)
    {
        $this->authorize('edit', $industry);
        return view('admin.industry.edit', compact('industry'));
    }

    public function update(IndustryRequest $request, Industry $industry)
    {
        $this->authorize('update', $industry);

        $sanitizeRequest = (new Sanitizer($request->all(), ['description' => 'escape|trim', 'note' => 'escape|trim']))->sanitize();
        try {
            $industry->update($sanitizeRequest);

            $notification = array(
                'message' => 'successfully updated!',
                'alert-type' => 'success'
            );

        } catch (\Exception $e) {
            $notification = array(
                'message' => "Operation Failed!",
                'alert-type' => 'error'
            );
            logError($e);
        }
        return redirect()->route('admin.industry.index')->with($notification);
    }

    public function archived()
    {
        if (request()->ajax()) {
            $query = $this->model->query()->inActive();
            $table = Datatables::of($query);
            $template = 'admin.industry.archived_actions_template';
            $statusTemplate = 'partials.status_template';
            $table->editColumn('status', function ($row) use ($statusTemplate) {
                return view($statusTemplate, compact('row'));
            });
            $table->addColumn('actions', ' ');
            $table->editColumn('actions', function ($row) use ($template) {
                $routeKey = 'admin.industry';

                return view($template, compact('row', 'routeKey'));
            });
            return $table->make(true);
        }
        return view('admin.industry.archived');
    }

    public function active(Request $request)
    {
        try {
            $industry = Industry::findOrFail($request->industry_id);

            $industry->status = 1;
            $industry->save();
            $data['msg'] = 'successfully active!';
            $data['status'] = 'success';

        } catch (\Exception $e) {
            $data['msg'] = "Operation Failed!";
            $data['status'] = 'error';
            logError($e);
        }
        return response()->json($data);
    }

    public function node(Industry $industry)
    {
        //$industry = $industry->load(['sector.subSector.group.subGroup.echelon.subEchelon.tier.subTier.layer.subLayer.deck.subDeck.floor.subFloor']);

        //  $sectorAssoc = $industry->sector()->GetAssoc(['industry_code' => $industry->code]);
        //  $subSectorAssoc = $industry->subSector()->GetAssoc(['industry_code' => $industry->code]);
        //  $groupAssoc = $industry->group()->GetAssoc(['industry_code' => $industry->code]);
        //  $subGroupAssoc = $industry->subGroup()->GetAssoc(['industry_code' => $industry->code]);
        //  $echelonAssoc = $industry->echelon()->GetAssoc(['industry_code' => $industry->code]);
        //
        //  $subEchelonAssoc = $industry->subEchelon()->GetAssoc(['industry_code' => $industry->code]);
        //  $tierAssoc = $industry->tier()->GetAssoc(['industry_code' => $industry->code]);
        //  $subTierAssoc = $industry->subTier()->GetAssoc(['industry_code' => $industry->code]);
        //
        //  $layerAssoc = $industry->layer()->GetAssoc(['industry_code' => $industry->code]);
        //  $subLayerAssoc = $industry->subLayer()->GetAssoc(['industry_code' => $industry->code]);
        //
        //  $deckAssoc = $industry->deck()->GetAssoc(['industry_code' => $industry->code]);
        //  $subDeckAssoc = $industry->subDeck()->GetAssoc(['industry_code' => $industry->code]);
        //
        //  $floorAssoc = $industry->floor()->GetAssoc(['industry_code' => $industry->code]);
        //  $subFloorAssoc = $industry->subFloor()->GetAssoc(['industry_code' => $industry->code]);
        //
        //  $basementAssoc =  $industry->basement()->GetAssoc(['industry_code' => $industry->code]);
        //  $subBasementAssoc =  $industry->subBasement()->GetAssoc(['industry_code' => $industry->code]);
        //
        //  $mineAssoc =  $industry->mine()->GetAssoc(['industry_code' => $industry->code]);
        //  $subMineAssoc =  $industry->subMine()->GetAssoc(['industry_code' => $industry->code]);

        return view('admin.industry.node', compact('industry'));
    }

    public function duplicate(Request $request)
    {
        DB::beginTransaction();
        try {
            $industry = Industry::findOrFail($request->industry_id);

            $createData = [
                'description' => "Duplicate {$industry->description}",
                'note' => $industry->note,
                'status' => 1,
                'created_by' => auth()->id(),
            ];

            $validator = \Validator::make($createData, [
                'description' => 'unique:industries,description',
            ]);

            if ($validator->fails()) {
                return response()->json(['status' => 'error', 'msg' => 'Already duplicated this industry']);
            }
            /*code for industry copy*/
            $newIndustry = $this->model->create($createData);
            $newIndustry->code = str_pad($newIndustry->id, 2, '0', STR_PAD_LEFT);
            $newIndustry->save();
            /*end code for industry copy*/

            /*code for industry child node copy*/
            $this->_duplicate_node(new Sector(), $newIndustry, 'industry_id', $industry->id);
            /*end code for industry child node copy*/

            /* tracking duplicate industry create */
            $logDescription = auth()->user()->name . " duplicate '{$industry->description}' industry";
            $this->addActivityLog('duplicate_industry', $newIndustry, $logDescription);
            /* end tracking duplicate industry create */

            DB::commit();

            $data['msg'] = 'successfully created!';
            $data['status'] = 'success';
        } catch (\Exception $e) {
            DB::rollback();
            $data['msg'] = "Operation Failed!";
            $data['status'] = 'error';
            logError($e);
        }
        return response()->json($data);
    }

    public function nodeDuplicateAsIndustry(Request $request)
    {
        $createData = [
            'description' => $request->description,
            'note' => $request->note,
            'status' => 1,
            'created_by' => auth()->id(),
        ];

        $validator = \Validator::make($createData, [
            'description' => 'unique:industries,description',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'msg' => 'Already exists this industry']);
        }

        DB::beginTransaction();
        try {
            /*code for industry copy*/
            $newIndustry = $this->model->create($createData);
            $newIndustry->code = str_pad($newIndustry->id, 2, '0', STR_PAD_LEFT);
            $newIndustry->save();
            /*end code for industry copy*/

            switch ($request->node_type) {
                case 'sector':
                    $childModel = new SubSector();
                    $model = Sector::whereId($request->node_id)->first();
                    $fieldName = 'sector_id';
                    break;
                case 'sub-sector':
                    $childModel = new Group();
                    $model = SubSector::whereId($request->node_id)->first();
                    $fieldName = 'sub_sector_id';
                    break;
                case 'group':
                    $childModel = new SubGroup();
                    $model = Group::whereId($request->node_id)->first();
                    $fieldName = 'group_id';

                    break;
                case 'sub-group':
                    $childModel = new Echelon();
                    $model = SubGroup::whereId($request->node_id)->first();
                    $fieldName = 'sub_group_id';
                    break;
                case 'echelon':
                    $childModel = new SubEchelon();
                    $model = Echelon::whereId($request->node_id)->first();
                    $fieldName = 'echelon_id';
                    break;
                case 'sub-echelon':
                    $childModel = new Tier();
                    $model = SubEchelon::whereId($request->node_id)->first();
                    $fieldName = 'sub_echelon_id';
                    break;
                case 'tier':
                    $childModel = new SubTier();
                    $model = Tier::whereId($request->node_id)->first();
                    $fieldName = 'tier_id';
                    break;
                case 'sub-tier':
                    $childModel = new Layer();
                    $model = SubTier::whereId($request->node_id)->first();
                    $fieldName = 'sub_tier_id';
                    break;
                case 'layer':
                    $childModel = new SubLayer();
                    $model = Layer::whereId($request->node_id)->first();
                    $fieldName = 'layer_id';
                    break;
                case 'sub-layer':
                    $childModel = new Deck();
                    $model = SubLayer::whereId($request->node_id)->first();
                    $fieldName = 'sub_layer_id';
                    break;
                case 'deck':
                    $childModel = new SubDeck();
                    $model = Deck::whereId($request->node_id)->first();
                    $fieldName = 'deck_id';
                    break;
                case 'sub-deck':
                    $childModel = new Floor();
                    $model = SubDeck::whereId($request->node_id)->first();
                    $fieldName = 'sub_deck_id';
                    break;
                case 'floor':
                    $childModel = new SubFloor();
                    $model = Floor::whereId($request->node_id)->first();
                    $fieldName = 'floor_id';
                    break;
                case 'sub-floor':
                    $childModel = new Basement();
                    $model = SubFloor::whereId($request->node_id)->first();
                    $fieldName = 'sub_floor_id';
                    break;
                case 'basement':
                    $childModel = new SubBasement();
                    $model = Basement::whereId($request->node_id)->first();
                    $fieldName = 'basement_id';
                    break;
                case 'sub-basement':
                    $childModel = new  Mine();
                    $model = SubBasement::whereId($request->node_id)->first();
                    $fieldName = 'sub_basement_id';
                    break;
                case 'mine':
                    $childModel = new  SubMine();
                    $model = Mine::whereId($request->node_id)->first();
                    $fieldName = 'mine_id';
                    break;
                case 'sub-mine':
                    $childModel = '';
                    $model = SubMine::whereId($request->node_id)->first();
                    $fieldName = 'sub_mine_id';
                    break;
            }

            /*code for create node*/

            if (!($model instanceof SubMine)) {
                $this->_createRecursiveNode(new Sector(), $childModel, $fieldName, 'industry_id', $model->id, $newIndustry);
            }

            /*end code for create node*/
            activity()
                ->useLog('Duplicate Node as Industry')
                ->performedOn($newIndustry)
                ->causedBy(auth()->user())
                ->log(auth()->user()->name . " duplicate '{$newIndustry->description}' node as Industry");

            $data['msg'] = 'successfully created!';
            $data['status'] = 'success';
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            $data['msg'] = "Operation Failed!";
            $data['status'] = 'error';
            logError($e);
        }
        return response()->json($data);
    }

    public function nodeMove(Request $request): \Illuminate\Http\JsonResponse
    {
        $newParentNodeData = explode('|', $request->search_node);
        $newParentNodeCode = $newParentNodeData[0];
        $newParentModelName = $newParentNodeData[1];
        $newParentNodeId = $newParentNodeData[2];

        $this->nodeMapNodeType = $request->node_type;
        $targetNodeId = $request->node_id;

        DB::beginTransaction();
        try {
            $targetModelNamespace = "App\\Models\\" . $this->getNodeMapModel();
            $targetNode = $targetModelNamespace::whereId($targetNodeId)->first();

            /*check node exists in media categorization lookup table*/
            $targetNodeView = (new DynamicNodeView())->setTable($this->getNodeMapTableView())->whereId($targetNodeId)->first();

            /*search all matching node in media categorization table using selected node code*/
            $mediaCategorization = MediaCategorizationLookup::with('mediaFile')->where('node_code', 'like', "{$targetNodeView->code}%")->whereNotNull('media_file_id')->get();
            $mcNodeIdArray = [];
            $mcNodeCodeArray = [];
            $ccNodeIdArray = [];
            $ccNodeCodeArray = [];
            /*create array for all matching node code*/
            foreach($mediaCategorization as $mcKey => $mc)
            {
                $mcNodeIdArray[$mcKey] = $mc->id;
                $mcNodeCodeArray[$mc->node_code] = $mc->node_id;
            }

            if(count($mcNodeCodeArray))
            {
                /*
                 * if not admin check not exists validate in media categorization lookup table
                 * if full admin and not lowest node then check not exists validate in media categorization lookup table
                 */
                if(! auth()->user()->isAdminOrSuperAdmin() || (auth()->user()->isAdminOrSuperAdmin() && ((count($mcNodeCodeArray) === 1 && array_keys($mcNodeCodeArray)[0] != $targetNodeView->code) || count($mcNodeCodeArray) > 1)))
                {
                    $lookupNodeModel = CategorizationLevel::find($mediaCategorization[0]->categorization_level_id);
                    $itemExistsNodeModel = $this->findNodeMapKeyByModel($lookupNodeModel->name);
                    $itemExistsNode = (new DynamicNodeView())->setTable($this->getNodeMapTableView($itemExistsNodeModel))
                        ->whereId($mediaCategorization[0]->node_id)->first();
                    $fileType = $mediaCategorization[0]->mediaFile->media_type == 2 ? 'video' : 'audio';
                    return response()->json([
                        'status' => 'error',
                        'msg' => "Node '{$itemExistsNode->code} - {$itemExistsNode->description}' has a {$fileType} associated to it, changes to their node are not allowed at this time."]);
                }

            }
            // if not exists in media categorization lookup table then check in company categorization lookup table
            $companyCategorization = CompanyCategorizationLookup::where('node_code', 'like', "{$targetNodeView->code}%")->get();
            /*create array for all matching node code*/
            foreach($companyCategorization as $ccKey => $cc)
            {
                $ccNodeIdArray[$ccKey] = $cc->id;
                $ccNodeCodeArray[$cc->node_code] = $cc->node_id;
            }
            if(count($ccNodeCodeArray))
            {
                /*
                 * if not admin check not exists validate in company categorization lookup table
                 * if full admin and not lowest node then check not exists validate in company categorization lookup table
                 */
                if(! auth()->user()->isAdminOrSuperAdmin() || (auth()->user()->isAdminOrSuperAdmin() && ((count($ccNodeCodeArray) === 1 && array_keys($ccNodeCodeArray)[0] != $targetNodeView->code) || count($ccNodeCodeArray) > 1))) {
                    return response()->json([
                        'status' => 'error',
                        'msg' => "Node '{$targetNodeView->code} - {$targetNodeView->description}' has a company associated to it, changes to their node are not allowed at this time."]);
                }
            }
            /*end check node exists in media categorization lookup table*/

            $currentReplica = $targetNode->replica_id;

            $newParentNodeType = $this->findNodeMapKeyByModel($newParentModelName);
            $newParentNodeData = (new DynamicNodeView())->setTable($this->getNodeMapTableView($newParentNodeType))->whereId($newParentNodeId)->first();

            if ($this->_sameMoveLevel($newParentModelName)) {
                $this->_processSameLevelNodeMove($targetModelNamespace, $targetNode, $newParentNodeId);
                $targetNode = (new DynamicNodeView())->setTable($this->getNodeMapTableView())->whereId($targetNodeId)->first();
            } else {
                $parentLevel = strlen($newParentNodeCode) / $this->nodeCodeLength;
                if (!$this->_isNodeLengthValid($request->node_code, $parentLevel)) {
                    return response()->json([
                        'msg' => 'Subtree to be moved does not fit under the target node.',
                        'status' => 'error'
                    ]);
                }
                list($targetNewNodeId, $deleteLayerIds, $totalCreated) = $this->_processDifferentLevelNodeMove($newParentNodeType, $newParentNodeData, $request->node_type, $targetNode);

                \Log::info('deleteLayerIds:' . json_encode($deleteLayerIds));
                if ($deleteLayerIds) {
                    Layer::whereIn('id', $deleteLayerIds)->delete();
                }
                $targetNode->delete();

                $this->nodeMapNodeType = $this->getNodeMapNextKey($newParentNodeType);
                $targetNode = (new DynamicNodeView())->setTable($this->getNodeMapTableView())->whereId($targetNewNodeId)->first();
            }

            $this->_updateReplica($targetModelNamespace, $currentReplica, $this->getNodeMapParentField($request->node_type));

            /*
             * full admin allow lowest level node move
             * update node information in company categorization lookup table and media categorization table
             */
            if(auth()->user()->isAdminOrSuperAdmin() && ((count($mcNodeCodeArray) === 1 && array_keys($mcNodeCodeArray)[0] == $targetNodeView->code)))
            {
                    /*get new categorization level id for update media and company categorization table*/
                    $newCategorizationLevelId = CategorizationLevel::where('name', $newParentModelName)->pluck('id')->first();

                    /*
                     * update categorization level id, node id , node code in media categorization lookup table
                     */
                    if(count($mediaCategorization))
                    {
                        MediaCategorizationLookup::whereIn('id', $mcNodeIdArray)->update(['categorization_level_id' => ($newCategorizationLevelId + 1), 'node_id' => $targetNode->id, 'node_code' => $targetNode->code]);
                    }
                    /*
                     * update categorization level id, node id and node code in company categorization lookup table
                     */
                    if(count($companyCategorization))
                    {
                        CompanyCategorizationLookup::whereIn('id', $ccNodeIdArray)->update(['categorization_level_id' => ($newCategorizationLevelId + 1), 'node_id' => $targetNode->id, 'node_code' => $targetNode->code]);
                    }
            }

            /* end code for update replica id */
            $data['msg'] = "Node Successfully Moved To {$newParentNodeData->description}!";
            $data['status'] = 'success';
            $data['targetNodeContainer'] = str_replace('-', '_', $this->getNodeMapNextKey($newParentNodeType)) . '_node_container_' . $newParentNodeId;
            $data['targetNodeId'] = $targetNode->id;
            $data['targetNodeType'] = $this->getNodeMapNextKey($this->getNodeMapNextKey($newParentNodeType));

            $data['nodeHtml'] = view('admin.industry._node_view_ajax')->with([
                'type' => $this->nodeMapNodeType,
                'itemList' => [$targetNode],
                'itemClass' => $this->nodeMapNodeType,
                'childNodeContainer' => str_replace('-', '_', $this->getNodeMapNextKey()) . '_node_container',
            ])->render();

            DB::commit();
        } catch (\Exception $e) {
            //\DB::unprepared('UNLOCK TABLES');
            DB::rollBack();
            $data['msg'] = "Operation Failed!";
            $data['status'] = 'error';
            logError($e);
        }
        return response()->json($data);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Throwable
     */
    public function childNodeCopy(Request $request): \Illuminate\Http\JsonResponse
    {
        $rules = [
            'child_node_id' => 'required',
        ];
        $validator = \Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'msg' => $validator->errors()->first()]);
        }
        DB::beginTransaction();
        try {
            $this->nodeMapNodeType = $this->getNodeMapNextKey($request->node_type);
            $newParentNodeData = explode('|', $request->search_node);
            $newParentNodeCode = $newParentNodeData[0];
            $newParentModelName = $newParentNodeData[1];
            $newParentNodeId = $newParentNodeData[2];

            $parentLevel = strlen($newParentNodeCode) / $this->nodeCodeLength;
            parse_str($request->child_node_id, $output);

            $targetNodes = (new DynamicNodeView())->setTable($this->getNodeMapTableView())->whereIn('id', $output['child_node_id'])->get();
            foreach ($targetNodes as $targetNode) {
                if (!$this->_isNodeLengthValid($targetNode->code, $parentLevel)) {
                    return response()->json([
                        'msg' => 'Subtree to be moved does not fit under the target node.',
                        'status' => 'error'
                    ]);
                }
            }
            $newParentNodeType = $this->findNodeMapKeyByModel($newParentModelName);
            $newParentNodeData = (new DynamicNodeView())->setTable($this->getNodeMapTableView($newParentNodeType))->whereId($newParentNodeId)->first();
            $data['node_type'] = $this->getNodeMapNextKey($newParentNodeType);
            foreach ($targetNodes as $targetNode) {
                list($targetNewNodeId, $deleteLayerIds, $totalCreated) = $this->_processDifferentLevelNodeMove($newParentNodeType, $newParentNodeData, $this->nodeMapNodeType, $targetNode);
                $data['newChildNodes'][] = \DB::table($this->getNodeMapTableView($data['node_type']))->whereId($targetNewNodeId)->first();
                $data['newChildIds'][] = $targetNewNodeId;
            }
            $data['targetContainer'] = str_replace('-', '_', $data['node_type']) . "_node_container_{$newParentNodeData->id}";
            $data['newChildType'] = $this->getNodeMapNextKey($data['node_type']);
            $data['childNodeContainer'] = str_replace('-', '_', $data['newChildType']) . '_node_container';
            $data['msg'] = 'successfully created!';
            $data['status'] = 'success';
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            $data['msg'] = "Operation Failed!";
            $data['status'] = 'error';
            logError($e);
        }
        return response()->json($data);
    }

    public function nodeCrossindex(Request $request)
    {
        $searchNode = explode('|', $request->search_node);
        $searchNodeCode = $searchNode[0];
        $searchNodeModel = $searchNode[1];
        $searchNodeId = $searchNode[2];
        $searchNodeType = $this->findNodeMapKeyByModel($searchNodeModel);

        $targetModelName = "App\\Models\\$searchNodeModel";
        $targetItem = $targetModelName::whereId($searchNodeId)->first();

        $firstNodeType = $this->getNodeMapModel($request->node_type);
        $firstNodeModelName = "App\\Models\\$firstNodeType";
        $firstItem = $firstNodeModelName::whereId($request->node_id)->first();

        $firstNodelevel = CategorizationLevel::where('name', $firstNodeType)->first();
        $secondNodelevel = CategorizationLevel::where('name', $searchNodeModel)->first();

        try {
            /*
             * Save cross indexed data
             */
            $exist = CrossIndex::where([
                'node_one_categorization_level_id' => $firstNodelevel->id,
                'node_one_id' => $firstItem->id,
                'node_two_categorization_level_id' => $secondNodelevel->id,
                'node_two_id' => $targetItem->id,
            ])->exists();
            $exist2 = CrossIndex::where([
                'node_one_categorization_level_id' => $secondNodelevel->id,
                'node_one_id' => $targetItem->id,
                'node_two_categorization_level_id' => $firstNodelevel->id,
                'node_two_id' => $firstItem->id,
            ])->exists();
            if ($exist || $exist2) {
                $data['msg'] = 'Already cross indexed!';
                $data['status'] = 'error';
            } else {
                $crossIndexed = CrossIndex::create([
                    'node_one_categorization_level_id' => $firstNodelevel->id,
                    'node_one_id' => $firstItem->id,
                    'node_two_categorization_level_id' => $secondNodelevel->id,
                    'node_two_id' => $targetItem->id,
                ]);
                $crossIndexed->save();

                /* end */

                /*
             * Make cross indexed flag true for node one
             */
                $crossedFlagOne = $firstNodeModelName::findOrFail($firstItem->id);
                $crossedFlagOne->cross_indexed = 1;
                $crossedFlagOne->save();
                /*
                 * Make cross indexed flag true for node two
                 */
                $crossedFlagTwo = $targetModelName::findOrFail($targetItem->id);
                $crossedFlagTwo->cross_indexed = 1;
                $crossedFlagTwo->save();

                $data['msg'] = 'successfully cross index created!';
                $data['status'] = 'success';
                $data["updatedNode"] = (new DynamicNodeView())->setTable($this->getNodeMapTableView($request->node_type))->whereId($request->node_id)->first();
                if ($crossedFlagOne->industry_code == $crossedFlagTwo->industry_code) {
                    $data['crossData'] = (new DynamicNodeView())->setTable($this->getNodeMapTableView($searchNodeType))->whereId($searchNodeId)->first();
                    $data['crossNodeType'] = $searchNodeType;
                }
            }
        } catch (\Exception $e) {
            $data['msg'] = "Operation Failed!";
            $data['status'] = 'error';
            logError($e);
        }
        return response()->json($data);

    }

    public function nodeWarp(Request $request)
    {
        $searchNode = explode('|', $request->search_node);
        $searchNodeCode = $searchNode[0];
        $searchNodeModel = $searchNode[1];
        $searchNodeId = $searchNode[2];
        $searchNodeType = $this->findNodeMapKeyByModel($searchNodeModel);

        $destinationModelName = "App\\Models\\$searchNodeModel";
        $destinationItem = $destinationModelName::whereId($searchNodeId)->first();

        $sourceNodeType = $this->getNodeMapModel($request->node_type);
        $sourceNodeModelName = "App\\Models\\$sourceNodeType";
        $sourceItem = $sourceNodeModelName::whereId($request->node_id)->first();

        $sourceNodeLevel = CategorizationLevel::where('name', $sourceNodeType)->first();
        $destinationNodeLevel = CategorizationLevel::where('name', $searchNodeModel)->first();

        try {
            /*Check Already One Node Warp Exist or Not*/
            $oneWarpExist = NodeWarp::where([
                'source_node_categorization_level_id' => $sourceNodeLevel->id,
                'source_node_id' => $sourceItem->id
            ])->exists();
            /*
             * Save node warp data
             */
            $exist = NodeWarp::where([
                'source_node_categorization_level_id' => $sourceNodeLevel->id,
                'source_node_id' => $sourceItem->id,
                'destination_node_categorization_level_id' => $destinationNodeLevel->id,
                'destination_node_id' => $destinationItem->id,
            ])->exists();
            $exist2 = NodeWarp::where([
                'source_node_categorization_level_id' => $destinationNodeLevel->id,
                'source_node_id' => $destinationItem->id,
                'destination_node_categorization_level_id' => $sourceNodeLevel->id,
                'destination_node_id' => $sourceItem->id,
            ])->exists();

            if($oneWarpExist){
                $data['msg'] = 'Already One Warp Exists!';
                $data['status'] = 'warpExist';
            }else if ($exist || $exist2) {
                $data['msg'] = 'Already Warped!';
                $data['status'] = 'error';
            } else {
                $nodeWarp = NodeWarp::create([
                    'source_node_categorization_level_id' => $sourceNodeLevel->id,
                    'source_node_id' => $sourceItem->id,
                    'destination_node_categorization_level_id' => $destinationNodeLevel->id,
                    'destination_node_id' => $destinationItem->id,
                    'created_by' => auth()->id(),
                ]);
                $nodeWarp->save();

                /* end */

                /*
             * Make node warp flag true for node one
             */
                $warpFlagSource = $sourceNodeModelName::findOrFail($sourceItem->id);
                $warpFlagSource->node_warp = 1;
                $warpFlagSource->save();
                /*
                 * Make node warp flag true for node two
                 */
                $warpFlagDestination = $destinationModelName::findOrFail($destinationItem->id);
                $warpFlagDestination->node_warp = 1;
                $warpFlagDestination->save();

                $data['msg'] = 'Successfully node warp created!';
                $data['status'] = 'success';
                $data["updatedNode"] = (new DynamicNodeView())->setTable($this->getNodeMapTableView($request->node_type))->whereId($request->node_id)->first();
                if ($warpFlagSource->industry_code == $warpFlagDestination->industry_code) {
                    $data['crossData'] = (new DynamicNodeView())->setTable($this->getNodeMapTableView($searchNodeType))->whereId($searchNodeId)->first();
                    $data['crossNodeType'] = $searchNodeType;
                }
            }
        } catch (\Exception $e) {
            $data['msg'] = "Operation Failed!";
            $data['status'] = 'error';
            logError($e);
        }
        return response()->json($data);

    }

    public function addIssuer(Request $request)
    {
        $rules = [
            'company_name' => 'required',
        ];
        $validator = \Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'msg' => $validator->errors()->first()]);
        }
        $companyNames = array_filter( array_map('trim', explode(';',  $request->company_name)));
        $checkExists = Company::whereIn('name', $companyNames)->exists();
        if ($checkExists) {
            return response()->json(['status' => 'error', 'msg' => 'Company name already taken']);
        }
        DB::beginTransaction();
        try {
            foreach ($companyNames as $companyName)
            {
                $company = Company::create(
                    [
                        'name' => $companyName,
                        'slug_name' =>  Str::slug($companyName),
                    ]
                );

                //Add Address
                if ($request->city != null) {
                    $address = Address::create([
                        'street_address_one' => $request->street_address,
                        'city' => $request->city,
                        'state_id' => $request->state_id,
                        'zip' => $request->zip,
                        'country_code' => $request->country_id
                    ]);

                    //Add Headquarters
                    $headquarter = Headquarter::create([
                        'company_id' => $company->id,
                        'name' => '',
                        'primary_headquarters' => 1,
                        'address_id' => $address->id
                    ]);
                }

                $company->uuid = $this->getMediaUUID($company->id);
                $company->save();

                $industry = Industry::whereCode($request->industry_code)->first('id');
                $nodeModel = $this->getNodeMapModel($request->node_type);
                $categorizationLevelId = CategorizationLevel::whereName($nodeModel)->first('id')->id;
                $nodeData = [
                    'company_id' => $company->id,
                    'industry_id' => $industry->id,
                    'categorization_level_id' => $categorizationLevelId,
                    'node_id' => $request->node_id,
                    'order' => 1,
                    'taxonomy_type' => 'Issuer',
                ];

                (new CompanyCategorizationLookup)->addNode($nodeData);

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
                    'editNodeDisabled'=> 1,
                    'created_at'=> Carbon::now(),
                    'updated_at'=> Carbon::now(),
                ]);
                /*end save to content folder*/
            }
            DB::commit();
            $data['msg'] = 'successfully issuer created!';
            $data['status'] = 'success';
            $data["updatedNode"] = (new DynamicNodeView())->setTable($this->getNodeMapTableView($request->node_type))->whereId($request->node_id)->first();
        } catch (\Exception $e) {
            DB::rollBack();
            $data['msg'] = "Operation Failed!";
            $data['status'] = 'error';
            logError($e);
        }
        return response()->json($data);
    }

    public function updateIssuer(Request $request)
    {
        $companyCatLookup = CompanyCategorizationLookup::findOrFail($request->id);
        $headquarter = Headquarter::with('address')->whereCompanyId($companyCatLookup->company_id)->first();

        $validator = \Validator::make($request->all(), [
            'id' => 'required',
            'company' => 'required|unique:companies,name,'.$companyCatLookup->company_id,
        ]);
        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'msg' => $validator->errors()->first()]);
        }

        if((null == $headquarter) && ((null == $request->city) && ($request->street_address || $request->state_id || $request->zip )))
        {
            return response()->json(['status' => 'error', 'msg' => 'City required for address']);
        }
        DB::beginTransaction();
        try {

            Company::where('id', $companyCatLookup->company_id)->update(
                ['name' => $request->company]
            );

            //update Address
            if(null != $headquarter)
            {
                $headquarter->address->street_address_one = $request->street_address;
                $headquarter->address->city = $request->city;
                $headquarter->address->state_id = $request->state_id;
                $headquarter->address->zip = $request->zip;
                $headquarter->address->save();
            }
            elseif ($request->city != null) {
                $address = Address::create([
                    'street_address_one' => $request->street_address,
                    'city' => $request->city,
                    'state_id' => $request->state_id,
                    'zip' => $request->zip,
                    'country_code' => 1
                ]);

                //Add Headquarters
                $headquarter = Headquarter::create([
                    'company_id' => $companyCatLookup->company_id,
                    'name' => '',
                    'primary_headquarters' => 1,
                    'address_id' => $address->id
                ]);
            }
            DB::commit();
            $data['msg'] = 'successfully issuer updated!';
            $data['status'] = 'success';
        } catch (\Exception $e) {
            DB::rollBack();
            $data['msg'] = "Operation Failed!";
            $data['status'] = 'error';
            logError($e);
        }
        return response()->json($data);
    }
    public function deleteIssuer(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'deleteId' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'msg' => $validator->errors()->first()]);
        }
        try {
            $lookupItem = CompanyCategorizationLookup::whereId($request->deleteId)->first();
            /*
             * Delete Issuer Company Information
             */
            $companyInfo = Company::whereId($lookupItem->company_id)->first();
            $headquarters = Headquarter::whereCompanyId($lookupItem->company_id)->first();
            $address = Address::whereId($headquarters->address_id)->first();
            ContentFolder::whereCompanyId($lookupItem->company_id)->delete();
            $address->delete();
            $headquarters->delete();
            $companyInfo->delete();
            /*Delete issuer lookup table Data row */
            $lookupItem->delete();
            $data['msg'] = 'Successfully deleted!';
            $data['status'] = 'success';
            $data["updatedNode"] = (new DynamicNodeView())->setTable($this->getNodeMapTableView($request->node_type))->whereId($request->node_id)->first();
        } catch (QueryException $qe) {
            $data['msg'] = $qe->getMessage();
            $data['status'] = 'error';
        } catch (\Exception $e) {
            $data['msg'] = $e->getMessage();
            $data['status'] = 'error';
        }
        return response()->json($data);
    }
    private function _createRecursiveNode($createModel, $childModel, $fieldName, $recordCountFieldName, $fieldValue, $createdItem)
    {
        $nodeItems = $childModel->where($fieldName, $fieldValue)->get(['id', 'description', 'note', 'status', 'replica_id', 'industry_code'])->toArray();

        foreach ($nodeItems as $nodeItem) {
            if ($createModel instanceof Sector) {
                $createNodeNamespace = "App\\Models\\Sector";
                $NodeParentField = 'industry_id';
                $itemCreateData['industry_id'] = $createdItem->id;
                $itemCreateData['industry_code'] = $createdItem->code;
                $parentModel = new Industry();
            } elseif ($createModel instanceof SubSector) {
                $createNodeNamespace = "App\\Models\\SubSector";
                $NodeParentField = 'sector_id';
                $itemCreateData['sector_id'] = $createdItem->id;
                $itemCreateData['industry_code'] = $createdItem->industry_code;
                $itemCreateData['sector_code'] = $createdItem->code;
                $parentModel = new Sector();
            } elseif ($createModel instanceof Group) {
                $createNodeNamespace = "App\\Models\\Group";
                $NodeParentField = 'sub_sector_id';
                $itemCreateData['sub_sector_id'] = $createdItem->id;
                $itemCreateData['industry_code'] = $createdItem->industry_code;
                $itemCreateData['sector_code'] = $createdItem->sector_code;
                $itemCreateData['sub_sector_code'] = $createdItem->code;
                $parentModel = new SubSector();
            } elseif ($createModel instanceof SubGroup) {
                $createNodeNamespace = "App\\Models\\SubGroup";
                $NodeParentField = 'group_id';
                $itemCreateData['group_id'] = $createdItem->id;
                $itemCreateData['industry_code'] = $createdItem->industry_code;
                $itemCreateData['sector_code'] = $createdItem->sector_code;
                $itemCreateData['sub_sector_code'] = $createdItem->sub_sector_code;
                $itemCreateData['group_code'] = $createdItem->code;
                $parentModel = new Group();
            } elseif ($createModel instanceof Echelon) {
                $createNodeNamespace = "App\\Models\\Echelon";
                $NodeParentField = 'sub_group_id';
                $itemCreateData['sub_group_id'] = $createdItem->id;
                $itemCreateData['industry_code'] = $createdItem->industry_code;
                $itemCreateData['sector_code'] = $createdItem->sector_code;
                $itemCreateData['sub_sector_code'] = $createdItem->sub_sector_code;
                $itemCreateData['group_code'] = $createdItem->group_code;
                $itemCreateData['sub_group_code'] = $createdItem->code;
                $parentModel = new SubGroup();
            } elseif ($createModel instanceof SubEchelon) {
                $createNodeNamespace = "App\\Models\\SubEchelon";
                $NodeParentField = 'echelon_id';
                $itemCreateData['echelon_id'] = $createdItem->id;
                $itemCreateData['industry_code'] = $createdItem->industry_code;
                $itemCreateData['sector_code'] = $createdItem->sector_code;
                $itemCreateData['sub_sector_code'] = $createdItem->sub_sector_code;
                $itemCreateData['group_code'] = $createdItem->group_code;
                $itemCreateData['sub_group_code'] = $createdItem->sub_group_code;
                $itemCreateData['echelon_code'] = $createdItem->code;
                $parentModel = new Echelon();
            } elseif ($createModel instanceof Tier) {
                $createNodeNamespace = "App\\Models\\Tier";
                $NodeParentField = 'sub_echelon_id';
                $itemCreateData['sub_echelon_id'] = $createdItem->id;
                $itemCreateData['industry_code'] = $createdItem->industry_code;
                $itemCreateData['sector_code'] = $createdItem->sector_code;
                $itemCreateData['sub_sector_code'] = $createdItem->sub_sector_code;
                $itemCreateData['group_code'] = $createdItem->group_code;
                $itemCreateData['sub_group_code'] = $createdItem->sub_group_code;
                $itemCreateData['echelon_code'] = $createdItem->echelon_code;
                $itemCreateData['sub_echelon_code'] = $createdItem->code;
                $parentModel = new SubEchelon();
            } elseif ($createModel instanceof SubTier) {
                $createNodeNamespace = "App\\Models\\SubTier";
                $NodeParentField = 'tier_id';
                $itemCreateData['tier_id'] = $createdItem->id;
                $itemCreateData['industry_code'] = $createdItem->industry_code;
                $itemCreateData['sector_code'] = $createdItem->sector_code;
                $itemCreateData['sub_sector_code'] = $createdItem->sub_sector_code;
                $itemCreateData['group_code'] = $createdItem->group_code;
                $itemCreateData['sub_group_code'] = $createdItem->sub_group_code;
                $itemCreateData['echelon_code'] = $createdItem->echelon_code;
                $itemCreateData['sub_echelon_code'] = $createdItem->sub_echelon_code;
                $itemCreateData['tier_code'] = $createdItem->code;
                $parentModel = new Tier();
            } elseif ($createModel instanceof Layer) {
                $createNodeNamespace = "App\\Models\\Layer";
                $NodeParentField = 'sub_tier_id';
                $itemCreateData['sub_tier_id'] = $createdItem->id;
                $itemCreateData['industry_code'] = $createdItem->industry_code;
                $itemCreateData['sector_code'] = $createdItem->sector_code;
                $itemCreateData['sub_sector_code'] = $createdItem->sub_sector_code;
                $itemCreateData['group_code'] = $createdItem->group_code;
                $itemCreateData['sub_group_code'] = $createdItem->sub_group_code;
                $itemCreateData['echelon_code'] = $createdItem->echelon_code;
                $itemCreateData['sub_echelon_code'] = $createdItem->sub_echelon_code;
                $itemCreateData['tier_code'] = $createdItem->tier_code;
                $itemCreateData['sub_tier_code'] = $createdItem->code;
                $parentModel = new SubTier();
            } elseif ($createModel instanceof SubLayer) {
                $createNodeNamespace = "App\\Models\\SubLayer";
                $NodeParentField = 'layer_id';
                $itemCreateData['layer_id'] = $createdItem->id;
                $itemCreateData['industry_code'] = $createdItem->industry_code;
                $itemCreateData['sector_code'] = $createdItem->sector_code;
                $itemCreateData['sub_sector_code'] = $createdItem->sub_sector_code;
                $itemCreateData['group_code'] = $createdItem->group_code;
                $itemCreateData['sub_group_code'] = $createdItem->sub_group_code;
                $itemCreateData['echelon_code'] = $createdItem->echelon_code;
                $itemCreateData['sub_echelon_code'] = $createdItem->sub_echelon_code;
                $itemCreateData['tier_code'] = $createdItem->tier_code;
                $itemCreateData['sub_tier_code'] = $createdItem->sub_tier_code;
                $itemCreateData['layer_code'] = $createdItem->code;
                $parentModel = new Layer();
            } elseif ($createModel instanceof Deck) {
                $createNodeNamespace = "App\\Models\\Deck";
                $NodeParentField = 'sub_layer_id';
                $itemCreateData['sub_layer_id'] = $createdItem->id;
                $itemCreateData['industry_code'] = $createdItem->industry_code;
                $itemCreateData['sector_code'] = $createdItem->sector_code;
                $itemCreateData['sub_sector_code'] = $createdItem->sub_sector_code;
                $itemCreateData['group_code'] = $createdItem->group_code;
                $itemCreateData['sub_group_code'] = $createdItem->sub_group_code;
                $itemCreateData['echelon_code'] = $createdItem->echelon_code;
                $itemCreateData['sub_echelon_code'] = $createdItem->sub_echelon_code;
                $itemCreateData['tier_code'] = $createdItem->tier_code;
                $itemCreateData['sub_tier_code'] = $createdItem->sub_tier_code;
                $itemCreateData['layer_code'] = $createdItem->layer_code;
                $itemCreateData['sub_layer_code'] = $createdItem->code;
                $parentModel = new SubLayer();
            } elseif ($createModel instanceof SubDeck) {
                $createNodeNamespace = "App\\Models\\SubDeck";
                $NodeParentField = 'deck_id';
                $itemCreateData['deck_id'] = $createdItem->id;
                $itemCreateData['industry_code'] = $createdItem->industry_code;
                $itemCreateData['sector_code'] = $createdItem->sector_code;
                $itemCreateData['sub_sector_code'] = $createdItem->sub_sector_code;
                $itemCreateData['group_code'] = $createdItem->group_code;
                $itemCreateData['sub_group_code'] = $createdItem->sub_group_code;
                $itemCreateData['echelon_code'] = $createdItem->echelon_code;
                $itemCreateData['sub_echelon_code'] = $createdItem->sub_echelon_code;
                $itemCreateData['tier_code'] = $createdItem->tier_code;
                $itemCreateData['sub_tier_code'] = $createdItem->sub_tier_code;
                $itemCreateData['layer_code'] = $createdItem->layer_code;
                $itemCreateData['sub_layer_code'] = $createdItem->sub_layer_code;
                $itemCreateData['deck_code'] = $createdItem->code;
                $parentModel = new Deck();
            } elseif ($createModel instanceof Floor) {
                $createNodeNamespace = "App\\Models\\Floor";
                $NodeParentField = 'sub_deck_id';
                $itemCreateData['sub_deck_id'] = $createdItem->id;
                $itemCreateData['industry_code'] = $createdItem->industry_code;
                $itemCreateData['sector_code'] = $createdItem->sector_code;
                $itemCreateData['sub_sector_code'] = $createdItem->sub_sector_code;
                $itemCreateData['group_code'] = $createdItem->group_code;
                $itemCreateData['sub_group_code'] = $createdItem->sub_group_code;
                $itemCreateData['echelon_code'] = $createdItem->echelon_code;
                $itemCreateData['sub_echelon_code'] = $createdItem->sub_echelon_code;
                $itemCreateData['tier_code'] = $createdItem->tier_code;
                $itemCreateData['sub_tier_code'] = $createdItem->sub_tier_code;
                $itemCreateData['layer_code'] = $createdItem->layer_code;
                $itemCreateData['sub_layer_code'] = $createdItem->sub_layer_code;
                $itemCreateData['deck_code'] = $createdItem->deck_code;
                $itemCreateData['sub_deck_code'] = $createdItem->code;
                $parentModel = new SubDeck();
            } elseif ($createModel instanceof SubFloor) {
                $createNodeNamespace = "App\\Models\\SubFloor";
                $NodeParentField = 'floor_id';
                $itemCreateData['floor_id'] = $createdItem->id;
                $itemCreateData['industry_code'] = $createdItem->industry_code;
                $itemCreateData['sector_code'] = $createdItem->sector_code;
                $itemCreateData['sub_sector_code'] = $createdItem->sub_sector_code;
                $itemCreateData['group_code'] = $createdItem->group_code;
                $itemCreateData['sub_group_code'] = $createdItem->sub_group_code;
                $itemCreateData['echelon_code'] = $createdItem->echelon_code;
                $itemCreateData['sub_echelon_code'] = $createdItem->sub_echelon_code;
                $itemCreateData['tier_code'] = $createdItem->tier_code;
                $itemCreateData['sub_tier_code'] = $createdItem->sub_tier_code;
                $itemCreateData['layer_code'] = $createdItem->layer_code;
                $itemCreateData['sub_layer_code'] = $createdItem->sub_layer_code;
                $itemCreateData['deck_code'] = $createdItem->deck_code;
                $itemCreateData['sub_deck_code'] = $createdItem->sub_deck_code;
                $itemCreateData['floor_code'] = $createdItem->code;
                $parentModel = new Floor();
            } elseif ($createModel instanceof Basement) {
                $createNodeNamespace = "App\\Models\\Basement";
                $NodeParentField = 'sub_floor_id';
                $itemCreateData['sub_floor_id'] = $createdItem->id;
                $itemCreateData['industry_code'] = $createdItem->industry_code;
                $itemCreateData['sector_code'] = $createdItem->sector_code;
                $itemCreateData['sub_sector_code'] = $createdItem->sub_sector_code;
                $itemCreateData['group_code'] = $createdItem->group_code;
                $itemCreateData['sub_group_code'] = $createdItem->sub_group_code;
                $itemCreateData['echelon_code'] = $createdItem->echelon_code;
                $itemCreateData['sub_echelon_code'] = $createdItem->sub_echelon_code;
                $itemCreateData['tier_code'] = $createdItem->tier_code;
                $itemCreateData['sub_tier_code'] = $createdItem->sub_tier_code;
                $itemCreateData['layer_code'] = $createdItem->layer_code;
                $itemCreateData['sub_layer_code'] = $createdItem->sub_layer_code;
                $itemCreateData['deck_code'] = $createdItem->deck_code;
                $itemCreateData['sub_deck_code'] = $createdItem->sub_deck_code;
                $itemCreateData['floor_code'] = $createdItem->floor_code;
                $itemCreateData['sub_floor_code'] = $createdItem->code;
                $parentModel = new SubFloor();
            } elseif ($createModel instanceof SubBasement) {
                $createNodeNamespace = "App\\Models\\SubBasement";
                $NodeParentField = 'basement_id';
                $itemCreateData['basement_id'] = $createdItem->id;
                $itemCreateData['industry_code'] = $createdItem->industry_code;
                $itemCreateData['sector_code'] = $createdItem->sector_code;
                $itemCreateData['sub_sector_code'] = $createdItem->sub_sector_code;
                $itemCreateData['group_code'] = $createdItem->group_code;
                $itemCreateData['sub_group_code'] = $createdItem->sub_group_code;
                $itemCreateData['echelon_code'] = $createdItem->echelon_code;
                $itemCreateData['sub_echelon_code'] = $createdItem->sub_echelon_code;
                $itemCreateData['tier_code'] = $createdItem->tier_code;
                $itemCreateData['sub_tier_code'] = $createdItem->sub_tier_code;
                $itemCreateData['layer_code'] = $createdItem->layer_code;
                $itemCreateData['sub_layer_code'] = $createdItem->sub_layer_code;
                $itemCreateData['deck_code'] = $createdItem->deck_code;
                $itemCreateData['sub_deck_code'] = $createdItem->sub_deck_code;
                $itemCreateData['floor_code'] = $createdItem->floor_code;
                $itemCreateData['sub_floor_code'] = $createdItem->sub_floor_code;
                $itemCreateData['basement_code'] = $createdItem->code;
                $parentModel = new Basement();
            } elseif ($createModel instanceof Mine) {
                $createNodeNamespace = "App\\Models\\Mine";
                $NodeParentField = 'sub_basement_id';
                $itemCreateData['sub_basement_id'] = $createdItem->id;
                $itemCreateData['industry_code'] = $createdItem->industry_code;
                $itemCreateData['sector_code'] = $createdItem->sector_code;
                $itemCreateData['sub_sector_code'] = $createdItem->sub_sector_code;
                $itemCreateData['group_code'] = $createdItem->group_code;
                $itemCreateData['sub_group_code'] = $createdItem->sub_group_code;
                $itemCreateData['echelon_code'] = $createdItem->echelon_code;
                $itemCreateData['sub_echelon_code'] = $createdItem->sub_echelon_code;
                $itemCreateData['tier_code'] = $createdItem->tier_code;
                $itemCreateData['sub_tier_code'] = $createdItem->sub_tier_code;
                $itemCreateData['layer_code'] = $createdItem->layer_code;
                $itemCreateData['sub_layer_code'] = $createdItem->sub_layer_code;
                $itemCreateData['deck_code'] = $createdItem->deck_code;
                $itemCreateData['sub_deck_code'] = $createdItem->sub_deck_code;
                $itemCreateData['floor_code'] = $createdItem->floor_code;
                $itemCreateData['sub_floor_code'] = $createdItem->sub_floor_code;
                $itemCreateData['basement_code'] = $createdItem->basement_code;
                $itemCreateData['sub_basement_code'] = $createdItem->code;
                $parentModel = new SubBasement();
            } elseif ($createModel instanceof SubMine) {
                $createNodeNamespace = "App\\Models\\SubMine";
                $NodeParentField = 'mine_id';
                $itemCreateData['mine_id'] = $createdItem->id;
                $itemCreateData['industry_code'] = $createdItem->industry_code;
                $itemCreateData['sector_code'] = $createdItem->sector_code;
                $itemCreateData['sub_sector_code'] = $createdItem->sub_sector_code;
                $itemCreateData['group_code'] = $createdItem->group_code;
                $itemCreateData['sub_group_code'] = $createdItem->sub_group_code;
                $itemCreateData['echelon_code'] = $createdItem->echelon_code;
                $itemCreateData['sub_echelon_code'] = $createdItem->sub_echelon_code;
                $itemCreateData['tier_code'] = $createdItem->tier_code;
                $itemCreateData['sub_tier_code'] = $createdItem->sub_tier_code;
                $itemCreateData['layer_code'] = $createdItem->layer_code;
                $itemCreateData['sub_layer_code'] = $createdItem->sub_layer_code;
                $itemCreateData['deck_code'] = $createdItem->deck_code;
                $itemCreateData['sub_deck_code'] = $createdItem->sub_deck_code;
                $itemCreateData['floor_code'] = $createdItem->floor_code;
                $itemCreateData['sub_floor_code'] = $createdItem->sub_floor_code;
                $itemCreateData['basement_code'] = $createdItem->basement_code;
                $itemCreateData['sub_basement_code'] = $createdItem->sub_basement_code;
                $itemCreateData['mine_code'] = $createdItem->code;
                $parentModel = new SubBasement();
            }
            $itemCreateData['raw_code'] = $this->_generateRawCode($createNodeNamespace, $NodeParentField, $createdItem->id);
            $itemCreateData['description'] = $nodeItem['description'];
            $itemCreateData['note'] = $nodeItem['note'];
            $itemCreateData['status'] = $nodeItem['status'];
            $itemCreateData['created_by'] = auth()->id();
            $itemCreateData['replica_id'] = $createdItem->id;

            $item = $createModel->create($itemCreateData);
            // $totalItem = $createModel->where($recordCountFieldName, $createdItem->id)->count();
            //$item->code = $this->_generateCode($totalItem, $createModel, $createdItem->code);
            //$item->replica_id = $createdItem->id;
            //$item->save();

            if (isset($nodeItem['replica_id'])) {
                $perviousReplicaId = explode(':', $nodeItem['replica_id']);
                if (count($perviousReplicaId) > 1) {
                    //shared parent id update in child table
                    $replicaIdArray = $createModel->Where('industry_code', $item->industry_code)->where('description', $nodeItem['description'])->pluck($recordCountFieldName)->toArray();
                    $replicaId = implode(':', $replicaIdArray);
                    $createModel->Where('industry_code', $item->industry_code)->where('description', $nodeItem['description'])->update(['replica_id' => $replicaId]);
                }
            }
            //  if (!($createModel instanceof Sector)) {
            //  // shared child id update in parent table
            //  $childReplicaIdArray = $createModel->Where('industry_code', $item->industry_code)->where($recordCountFieldName, $createdItem->id)->pluck('id')->toArray();
            //  $childReplicaId = implode(':', $childReplicaIdArray);
            //  $parentModel->Where('industry_code', $item->industry_code)->where('id', $item->{$recordCountFieldName})->update(['child_node_id' => $childReplicaId]);
            //  }

            // set new child model
            if ($childModel instanceof Sector) {
                $newChildModel = new SubSector();
                $newFieldName = 'sector_id';
            } elseif ($childModel instanceof SubSector) {
                $newChildModel = new Group();
                $newFieldName = 'sub_sector_id';
            } elseif ($childModel instanceof Group) {
                $newChildModel = new SubGroup();
                $newFieldName = 'group_id';
            } elseif ($childModel instanceof SubGroup) {
                $newChildModel = new Echelon();
                $newFieldName = 'sub_group_id';
            } elseif ($childModel instanceof Echelon) {
                $newChildModel = new SubEchelon();
                $newFieldName = 'echelon_id';
            } elseif ($childModel instanceof SubEchelon) {
                $newChildModel = new Tier();
                $newFieldName = 'sub_echelon_id';
            } elseif ($childModel instanceof Tier) {
                $newChildModel = new SubTier();
                $newFieldName = 'tier_id';
            } elseif ($childModel instanceof SubTier) {
                $newChildModel = new Layer();
                $newFieldName = 'sub_tier_id';
            } elseif ($childModel instanceof Layer) {
                $newChildModel = new SubLayer();
                $newFieldName = 'layer_id';
            } elseif ($childModel instanceof SubLayer) {
                $newChildModel = new Deck();
                $newFieldName = 'sub_layer_id';
            } elseif ($childModel instanceof Deck) {
                $newChildModel = new SubDeck();
                $newFieldName = 'deck_id';
            } elseif ($childModel instanceof SubDeck) {
                $newChildModel = new Floor();
                $newFieldName = 'sub_deck_id';
            } elseif ($childModel instanceof Floor) {
                $newChildModel = new SubFloor();
                $newFieldName = 'floor_id';
            } elseif ($childModel instanceof SubFloor) {
                $newChildModel = new Basement();
                $newFieldName = 'sub_floor_id';
            } elseif ($childModel instanceof Basement) {
                $newChildModel = new SubBasement();
                $newFieldName = 'basement_id';
            } elseif ($childModel instanceof SubBasement) {
                $newChildModel = new Mine();
                $newFieldName = 'sub_basement_id';
            } elseif ($childModel instanceof Mine) {
                $newChildModel = new SubMine();
                $newFieldName = 'mine_id';
            } elseif ($childModel instanceof SubMine) {
                continue;
            }
            //end set new child model

            if ($createModel instanceof Sector) {
                $this->_createRecursiveNode(new SubSector(), $newChildModel, $newFieldName, 'sector_id', $nodeItem['id'], $item);
            } elseif ($createModel instanceof SubSector) {
                $this->_createRecursiveNode(new Group(), $newChildModel, $newFieldName, 'sub_sector_id', $nodeItem['id'], $item);
            } elseif ($createModel instanceof Group) {
                $this->_createRecursiveNode(new SubGroup(), $newChildModel, $newFieldName, 'group_id', $nodeItem['id'], $item);
            } elseif ($createModel instanceof SubGroup) {
                $this->_createRecursiveNode(new Echelon(), $newChildModel, $newFieldName, 'sub_group_id', $nodeItem['id'], $item);
            } elseif ($createModel instanceof Echelon) {
                $this->_createRecursiveNode(new SubEchelon(), $newChildModel, $newFieldName, 'echelon_id', $nodeItem['id'], $item);
            } elseif ($createModel instanceof SubEchelon) {
                $this->_createRecursiveNode(new Tier(), $newChildModel, $newFieldName, 'sub_echelon_id', $nodeItem['id'], $item);
            } elseif ($createModel instanceof Tier) {
                $this->_createRecursiveNode(new SubTier(), $newChildModel, $newFieldName, 'tier_id', $nodeItem['id'], $item);
            } elseif ($createModel instanceof SubTier) {
                $this->_createRecursiveNode(new Layer(), $newChildModel, $newFieldName, 'sub_tier_id', $nodeItem['id'], $item);
            } elseif ($createModel instanceof Layer) {
                $this->_createRecursiveNode(new SubLayer(), $newChildModel, $newFieldName, 'layer_id', $nodeItem['id'], $item);
            } elseif ($createModel instanceof SubLayer) {
                $this->_createRecursiveNode(new Deck(), $newChildModel, $newFieldName, 'sub_layer_id', $nodeItem['id'], $item);
            } elseif ($createModel instanceof Deck) {
                $this->_createRecursiveNode(new SubDeck(), $newChildModel, $newFieldName, 'deck_id', $nodeItem['id'], $item);
            } elseif ($createModel instanceof SubDeck) {
                $this->_createRecursiveNode(new Floor(), $newChildModel, $newFieldName, 'sub_deck_id', $nodeItem['id'], $item);
            } elseif ($createModel instanceof Floor) {
                $this->_createRecursiveNode(new SubFloor(), $newChildModel, $newFieldName, 'floor_id', $nodeItem['id'], $item);
            } elseif ($createModel instanceof SubFloor) {
                $this->_createRecursiveNode(new Basement(), $newChildModel, $newFieldName, 'sub_floor_id', $nodeItem['id'], $item);
            } elseif ($createModel instanceof Basement) {
                $this->_createRecursiveNode(new SubBasement(), $newChildModel, $newFieldName, 'basement_id', $nodeItem['id'], $item);
            } elseif ($createModel instanceof SubBasement) {
                $this->_createRecursiveNode(new Mine(), $newChildModel, $newFieldName, 'sub_basement_id', $nodeItem['id'], $item);
            } elseif ($createModel instanceof Mine) {
                $this->_createRecursiveNode(new SubMine(), $newChildModel, $newFieldName, 'mine_id', $nodeItem['id'], $item);
            }
        }
    }

    private function _duplicate_node($model, $newCategory, $fieldName, $fieldValue)
    {
        $oldItems = $model->Where($fieldName, $fieldValue)->get(['id', 'description', 'note', 'status', 'replica_id', 'industry_code'])->toArray();
        foreach ($oldItems as $oldItem) {
            if ($model instanceof Sector) {
                $createNodeNamespace = "App\\Models\\Sector";
                $NodeParentField = 'industry_id';
                $oldItem['industry_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->code;
//                $oldItem['raw_code'] = $this->_generateRawCode($createNodeNamespace, $createNodeParentField, $parentId);
            } elseif ($model instanceof SubSector) {
                $createNodeNamespace = "App\\Models\\SubSector";
                $NodeParentField = 'sector_id';
                $oldItem['sector_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->code;
                $parentModel = new Sector();
            } elseif ($model instanceof Group) {
                $createNodeNamespace = "App\\Models\\Group";
                $NodeParentField = 'sub_sector_id';
                $oldItem['sub_sector_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->code;
                $parentModel = new SubSector();
            } elseif ($model instanceof SubGroup) {
                $createNodeNamespace = "App\\Models\\SubGroup";
                $NodeParentField = 'group_id';
                $oldItem['group_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->code;
                $parentModel = new Group();
            } elseif ($model instanceof Echelon) {
                $createNodeNamespace = "App\\Models\\Echelon";
                $NodeParentField = 'sub_group_id';
                $oldItem['sub_group_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->code;
                $parentModel = new SubGroup();
            } elseif ($model instanceof SubEchelon) {
                $createNodeNamespace = "App\\Models\\SubEchelon";
                $NodeParentField = 'echelon_id';
                $oldItem['echelon_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->sub_group_code;
                $oldItem['echelon_code'] = $newCategory->code;
                $parentModel = new Echelon();
            } elseif ($model instanceof Tier) {
                $createNodeNamespace = "App\\Models\\Tier";
                $NodeParentField = 'sub_echelon_id';
                $oldItem['sub_echelon_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->sub_group_code;
                $oldItem['echelon_code'] = $newCategory->echelon_code;
                $oldItem['sub_echelon_code'] = $newCategory->code;
                $parentModel = new SubEchelon();
            } elseif ($model instanceof SubTier) {
                $createNodeNamespace = "App\\Models\\SubTier";
                $NodeParentField = 'tier_id';
                $oldItem['tier_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->sub_group_code;
                $oldItem['echelon_code'] = $newCategory->echelon_code;
                $oldItem['sub_echelon_code'] = $newCategory->sub_echelon_code;
                $oldItem['tier_code'] = $newCategory->code;
                $parentModel = new Tier();
            } elseif ($model instanceof Layer) {
                $createNodeNamespace = "App\\Models\\Layer";
                $NodeParentField = 'sub_tier_id';
                $oldItem['sub_tier_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->sub_group_code;
                $oldItem['echelon_code'] = $newCategory->echelon_code;
                $oldItem['sub_echelon_code'] = $newCategory->sub_echelon_code;
                $oldItem['tier_code'] = $newCategory->tier_code;
                $oldItem['sub_tier_code'] = $newCategory->code;
                $parentModel = new SubTier();
            } elseif ($model instanceof SubLayer) {
                $createNodeNamespace = "App\\Models\\SubLayer";
                $NodeParentField = 'layer_id';
                $oldItem['layer_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->sub_group_code;
                $oldItem['echelon_code'] = $newCategory->echelon_code;
                $oldItem['sub_echelon_code'] = $newCategory->sub_echelon_code;
                $oldItem['tier_code'] = $newCategory->tier_code;
                $oldItem['sub_tier_code'] = $newCategory->sub_tier_code;
                $oldItem['layer_code'] = $newCategory->code;
                $parentModel = new Layer();
            } elseif ($model instanceof Deck) {
                $createNodeNamespace = "App\\Models\\Deck";
                $NodeParentField = 'sub_layer_id';
                $oldItem['sub_layer_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->sub_group_code;
                $oldItem['echelon_code'] = $newCategory->echelon_code;
                $oldItem['sub_echelon_code'] = $newCategory->sub_echelon_code;
                $oldItem['tier_code'] = $newCategory->tier_code;
                $oldItem['sub_tier_code'] = $newCategory->sub_tier_code;
                $oldItem['layer_code'] = $newCategory->layer_code;
                $oldItem['sub_layer_code'] = $newCategory->code;
                $parentModel = new SubLayer();
            } elseif ($model instanceof subDeck) {
                $createNodeNamespace = "App\\Models\\subDeck";
                $NodeParentField = 'deck_id';
                $oldItem['deck_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->sub_group_code;
                $oldItem['echelon_code'] = $newCategory->echelon_code;
                $oldItem['sub_echelon_code'] = $newCategory->sub_echelon_code;
                $oldItem['tier_code'] = $newCategory->tier_code;
                $oldItem['sub_tier_code'] = $newCategory->sub_tier_code;
                $oldItem['layer_code'] = $newCategory->layer_code;
                $oldItem['sub_layer_code'] = $newCategory->sub_layer_code;
                $oldItem['deck_code'] = $newCategory->code;
                $parentModel = new Deck();
            } elseif ($model instanceof Floor) {
                $createNodeNamespace = "App\\Models\\Floor";
                $NodeParentField = 'sub_deck_id';
                $oldItem['sub_deck_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->sub_group_code;
                $oldItem['echelon_code'] = $newCategory->echelon_code;
                $oldItem['sub_echelon_code'] = $newCategory->sub_echelon_code;
                $oldItem['tier_code'] = $newCategory->tier_code;
                $oldItem['sub_tier_code'] = $newCategory->sub_tier_code;
                $oldItem['layer_code'] = $newCategory->layer_code;
                $oldItem['sub_layer_code'] = $newCategory->sub_layer_code;
                $oldItem['deck_code'] = $newCategory->deck_code;
                $oldItem['sub_deck_code'] = $newCategory->code;
                $parentModel = new SubDeck();
            } elseif ($model instanceof SubFloor) {
                $createNodeNamespace = "App\\Models\\SubFloor";
                $NodeParentField = 'floor_id';
                $oldItem['floor_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->sub_group_code;
                $oldItem['echelon_code'] = $newCategory->echelon_code;
                $oldItem['sub_echelon_code'] = $newCategory->sub_echelon_code;
                $oldItem['tier_code'] = $newCategory->tier_code;
                $oldItem['sub_tier_code'] = $newCategory->sub_tier_code;
                $oldItem['layer_code'] = $newCategory->layer_code;
                $oldItem['sub_layer_code'] = $newCategory->sub_layer_code;
                $oldItem['deck_code'] = $newCategory->deck_code;
                $oldItem['sub_deck_code'] = $newCategory->sub_deck_code;
                $oldItem['floor_code'] = $newCategory->code;
                $parentModel = new Floor();
            } elseif ($model instanceof Basement) {
                $createNodeNamespace = "App\\Models\\Basement";
                $NodeParentField = 'sub_floor_id';
                $oldItem['sub_floor_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->sub_group_code;
                $oldItem['echelon_code'] = $newCategory->echelon_code;
                $oldItem['sub_echelon_code'] = $newCategory->sub_echelon_code;
                $oldItem['tier_code'] = $newCategory->tier_code;
                $oldItem['sub_tier_code'] = $newCategory->sub_tier_code;
                $oldItem['layer_code'] = $newCategory->layer_code;
                $oldItem['sub_layer_code'] = $newCategory->sub_layer_code;
                $oldItem['deck_code'] = $newCategory->deck_code;
                $oldItem['sub_deck_code'] = $newCategory->sub_deck_code;
                $oldItem['floor_code'] = $newCategory->floor_code;
                $oldItem['sub_floor_code'] = $newCategory->code;
                $parentModel = new SubFloor();
            } elseif ($model instanceof SubBasement) {
                $createNodeNamespace = "App\\Models\\SubBasement";
                $NodeParentField = 'basement_id';
                $oldItem['basement_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->sub_group_code;
                $oldItem['echelon_code'] = $newCategory->echelon_code;
                $oldItem['sub_echelon_code'] = $newCategory->sub_echelon_code;
                $oldItem['tier_code'] = $newCategory->tier_code;
                $oldItem['sub_tier_code'] = $newCategory->sub_tier_code;
                $oldItem['layer_code'] = $newCategory->layer_code;
                $oldItem['sub_layer_code'] = $newCategory->sub_layer_code;
                $oldItem['deck_code'] = $newCategory->deck_code;
                $oldItem['sub_deck_code'] = $newCategory->sub_deck_code;
                $oldItem['floor_code'] = $newCategory->floor_code;
                $oldItem['sub_floor_code'] = $newCategory->sub_floor_code;
                $oldItem['basement_code'] = $newCategory->code;
                $parentModel = new Basement();
            } elseif ($model instanceof Mine) {
                $createNodeNamespace = "App\\Models\\Mine";
                $NodeParentField = 'sub_basement_id';
                $oldItem['sub_basement_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->sub_group_code;
                $oldItem['echelon_code'] = $newCategory->echelon_code;
                $oldItem['sub_echelon_code'] = $newCategory->sub_echelon_code;
                $oldItem['tier_code'] = $newCategory->tier_code;
                $oldItem['sub_tier_code'] = $newCategory->sub_tier_code;
                $oldItem['layer_code'] = $newCategory->layer_code;
                $oldItem['sub_layer_code'] = $newCategory->sub_layer_code;
                $oldItem['deck_code'] = $newCategory->deck_code;
                $oldItem['sub_deck_code'] = $newCategory->sub_deck_code;
                $oldItem['floor_code'] = $newCategory->floor_code;
                $oldItem['sub_floor_code'] = $newCategory->sub_floor_code;
                $oldItem['basement_code'] = $newCategory->basement_code;
                $oldItem['sub_basement_code'] = $newCategory->code;
                $parentModel = new SubBasement();
            } elseif ($model instanceof SubMine) {
                $createNodeNamespace = "App\\Models\\SubMine";
                $NodeParentField = 'mine_id';
                $oldItem['mine_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->sub_group_code;
                $oldItem['echelon_code'] = $newCategory->echelon_code;
                $oldItem['sub_echelon_code'] = $newCategory->sub_echelon_code;
                $oldItem['tier_code'] = $newCategory->tier_code;
                $oldItem['sub_tier_code'] = $newCategory->sub_tier_code;
                $oldItem['layer_code'] = $newCategory->layer_code;
                $oldItem['sub_layer_code'] = $newCategory->sub_layer_code;
                $oldItem['deck_code'] = $newCategory->deck_code;
                $oldItem['sub_deck_code'] = $newCategory->sub_deck_code;
                $oldItem['floor_code'] = $newCategory->floor_code;
                $oldItem['sub_floor_code'] = $newCategory->sub_floor_code;
                $oldItem['basement_code'] = $newCategory->basement_code;
                $oldItem['sub_basement_code'] = $newCategory->sub_basement_code;
                $oldItem['mine_code'] = $newCategory->code;
                $parentModel = new SubBasement();
            }

            $oldItem['raw_code'] = $this->_generateRawCode($createNodeNamespace, $NodeParentField, $newCategory->id);
            $oldItem['replica_id'] = $newCategory->id;
            $oldItem['created_by'] = auth()->id();
            $item = $model->create($oldItem);
            //$totalItem = $model->where($fieldName, $newCategory->id)->count();
            //$item->code = $this->_generateCode($totalItem, $model, $newCategory->code);
//            $item->replica_id = $newCategory->id;
//            $item->save();

            if (isset($oldItem['replica_id'])) {
                $perviousReplicaId = explode(':', $oldItem['replica_id']);
                if (count($perviousReplicaId) > 1) {
                    //shared parent id update in child table
                    $replicaIdArray = $model->Where('industry_code', $oldItem['industry_code'])->where('description', $oldItem['description'])->pluck($fieldName)->toArray();
                    $replicaId = implode(':', $replicaIdArray);
                    $model->Where('industry_code', $oldItem['industry_code'])->where('description', $oldItem['description'])->update(['replica_id' => $replicaId]);
                }
            }

            if ($model instanceof Sector) {
                $this->_duplicate_node(new SubSector(), $item, 'sector_id', $oldItem['id']);
            } elseif ($model instanceof SubSector) {
                $this->_duplicate_node(new Group(), $item, 'sub_sector_id', $oldItem['id']);
            } elseif ($model instanceof Group) {
                $this->_duplicate_node(new SubGroup(), $item, 'group_id', $oldItem['id']);
            } elseif ($model instanceof SubGroup) {
                $this->_duplicate_node(new Echelon(), $item, 'sub_group_id', $oldItem['id']);
            } elseif ($model instanceof Echelon) {
                $this->_duplicate_node(new SubEchelon(), $item, 'echelon_id', $oldItem['id']);
            } elseif ($model instanceof SubEchelon) {
                $this->_duplicate_node(new Tier(), $item, 'sub_echelon_id', $oldItem['id']);
            } elseif ($model instanceof Tier) {
                $this->_duplicate_node(new SubTier(), $item, 'tier_id', $oldItem['id']);
            } elseif ($model instanceof SubTier) {
                $this->_duplicate_node(new Layer(), $item, 'sub_tier_id', $oldItem['id']);
            } elseif ($model instanceof Layer) {
                $this->_duplicate_node(new SubLayer(), $item, 'layer_id', $oldItem['id']);
            } elseif ($model instanceof SubLayer) {
                $this->_duplicate_node(new Deck(), $item, 'sub_layer_id', $oldItem['id']);
            } elseif ($model instanceof Deck) {
                $this->_duplicate_node(new SubDeck(), $item, 'deck_id', $oldItem['id']);
            } elseif ($model instanceof SubDeck) {
                $this->_duplicate_node(new Floor(), $item, 'sub_deck_id', $oldItem['id']);
            } elseif ($model instanceof Floor) {
                $this->_duplicate_node(new SubFloor(), $item, 'floor_id', $oldItem['id']);
            } elseif ($model instanceof SubFloor) {
                $this->_duplicate_node(new Basement(), $item, 'sub_floor_id', $oldItem['id']);
            } elseif ($model instanceof Basement) {
                $this->_duplicate_node(new SubBasement(), $item, 'basement_id', $oldItem['id']);
            } elseif ($model instanceof SubBasement) {
                $this->_duplicate_node(new Mine(), $item, 'sub_basement_id', $oldItem['id']);
            } elseif ($model instanceof Mine) {
                $this->_duplicate_node(new SubMine(), $item, 'mine_id', $oldItem['id']);
            }
        }
    }

    private function nodeLengthValidationCheck($searchNodeType, $nodeLength)
    {
        if ($searchNodeType == 'Sector' && $nodeLength > 17) {
            return false;
        } elseif ($searchNodeType == 'SubSector' && $nodeLength > 16) {
            return false;
        } elseif ($searchNodeType == 'Group' && $nodeLength > 15) {
            return false;
        } elseif ($searchNodeType == 'SubGroup' && $nodeLength > 14) {
            return false;
        } elseif ($searchNodeType == 'Echelon' && $nodeLength > 13) {
            return false;
        } elseif ($searchNodeType == 'SubEchelon' && $nodeLength > 12) {
            return false;
        } elseif ($searchNodeType == 'Tier' && $nodeLength > 11) {
            return false;
        } elseif ($searchNodeType == 'SubTier' && $nodeLength > 10) {
            return false;
        } elseif ($searchNodeType == 'Layer' && $nodeLength > 9) {
            return false;
        } elseif ($searchNodeType == 'SubLayer' && $nodeLength > 8) {
            return false;
        } elseif ($searchNodeType == 'Deck' && $nodeLength > 7) {
            return false;
        } elseif ($searchNodeType == 'SubDeck' && $nodeLength > 6) {
            return false;
        } elseif ($searchNodeType == 'Floor' && $nodeLength > 5) {
            return false;
        } elseif ($searchNodeType == 'SubFloor' && $nodeLength > 4) {
            return false;
        } elseif ($searchNodeType == 'Basement' && $nodeLength > 3) {
            return false;
        } elseif ($searchNodeType == 'SubBasement' && $nodeLength > 2) {
            return false;
        } elseif ($searchNodeType == 'Mine' && $nodeLength > 1) {
            return false;
        } elseif ($searchNodeType == 'SubMine' && $nodeLength > 0) {
            return false;
        }
        return true;
    }

    private function _nodeLengthCount($model)
    {
        $nodeLength = 0;
        if ($model->hasRelation('sector') && $model->sector()->exists()) {
            $nodeLength += 1;
        }
        if ($model->hasRelation('subSector') && $model->subSector()->exists()) {
            $nodeLength += 1;
        }
        if ($model->hasRelation('group') && $model->group()->exists()) {
            $nodeLength += 1;
        }
        if ($model->hasRelation('subGroup') && $model->subGroup()->exists()) {
            $nodeLength += 1;
        }
        if ($model->hasRelation('echelon') && $model->echelon()->exists()) {
            $nodeLength += 1;
        }
        if ($model->hasRelation('subEchelon') && $model->subEchelon()->exists()) {
            $nodeLength += 1;
        }
        if ($model->hasRelation('tier') && $model->tier()->exists()) {
            $nodeLength += 1;
        }
        if ($model->hasRelation('subTier') && $model->subTier()->exists()) {
            $nodeLength += 1;
        }
        if ($model->hasRelation('layer') && $model->layer()->exists()) {
            $nodeLength += 1;
        }
        if ($model->hasRelation('subLayer') && $model->subLayer()->exists()) {
            $nodeLength += 1;
        }
        if ($model->hasRelation('deck') && $model->deck()->exists()) {
            $nodeLength += 1;
        }
        if ($model->hasRelation('subDeck') && $model->subDeck()->exists()) {
            $nodeLength += 1;
        }
        if ($model->hasRelation('floor') && $model->floor()->exists()) {
            $nodeLength += 1;
        }
        if ($model->hasRelation('subFloor') && $model->subFloor()->exists()) {
            $nodeLength += 1;
        }
        if ($model->hasRelation('basement') && $model->basement()->exists()) {
            $nodeLength += 1;
        }
        if ($model->hasRelation('subBasement') && $model->subBasement()->exists()) {
            $nodeLength += 1;
        }
        if ($model->hasRelation('mine') && $model->mine()->exists()) {
            $nodeLength += 1;
        }
        if ($model->hasRelation('subMine') && $model->subMine()->exists()) {
            $nodeLength += 1;
        }
        return $nodeLength;
    }

    private function _createSelectedTargetNode($targetItem, $model)
    {
        if ($targetItem instanceof Sector) {
            $itemToCreateModal = new SubSector();
            $childModal = new Group();
            $recordCountFieldName = 'sector_id';
            $itemCreateData = [
                'sector_id' => $targetItem->id,
                'industry_code' => $targetItem->industry_code,
                'sector_code' => $targetItem->code,
            ];
        } elseif ($targetItem instanceof SubSector) {
            $itemToCreateModal = new Group();
            $childModal = new SubGroup();
            $recordCountFieldName = 'sub_sector_id';
            $itemCreateData = [
                'sub_sector_id' => $targetItem->id,
                'industry_code' => $targetItem->industry_code,
                'sector_code' => $targetItem->sector_code,
                'sub_sector_code' => $targetItem->code,
            ];
        } elseif ($targetItem instanceof Group) {
            $itemToCreateModal = new SubGroup();
            $childModal = new Echelon();
            $recordCountFieldName = 'group_id';
            $itemCreateData = [
                'group_id' => $targetItem->id,
                'industry_code' => $targetItem->industry_code,
                'sector_code' => $targetItem->sector_code,
                'sub_sector_code' => $targetItem->sub_sector_code,
                'group_code' => $targetItem->code,
            ];
        } elseif ($targetItem instanceof SubGroup) {
            $itemToCreateModal = new Echelon();
            $childModal = new SubEchelon();
            $recordCountFieldName = 'sub_group_id';

            $itemCreateData = [
                'sub_group_id' => $targetItem->id,
                'industry_code' => $targetItem->industry_code,
                'sector_code' => $targetItem->sector_code,
                'sub_sector_code' => $targetItem->sub_sector_code,
                'group_code' => $targetItem->group_code,
                'sub_group_code' => $targetItem->code,
            ];
        } elseif ($targetItem instanceof Echelon) {
            $itemToCreateModal = new SubEchelon();
            $childModal = new Tier();
            $recordCountFieldName = 'echelon_id';

            $itemCreateData = [
                'echelon_id' => $targetItem->id,
                'industry_code' => $targetItem->industry_code,
                'sector_code' => $targetItem->sector_code,
                'sub_sector_code' => $targetItem->sub_sector_code,
                'group_code' => $targetItem->group_code,
                'sub_group_code' => $targetItem->sub_group_code,
                'echelon_code' => $targetItem->code,
            ];
        } elseif ($targetItem instanceof SubEchelon) {
            $itemToCreateModal = new Tier();
            $childModal = new SubTier();
            $recordCountFieldName = 'sub_echelon_id';

            $itemCreateData = [
                'sub_echelon_id' => $targetItem->id,
                'industry_code' => $targetItem->industry_code,
                'sector_code' => $targetItem->sector_code,
                'sub_sector_code' => $targetItem->sub_sector_code,
                'group_code' => $targetItem->group_code,
                'sub_group_code' => $targetItem->sub_group_code,
                'echelon_code' => $targetItem->echelon_code,
                'sub_echelon_code' => $targetItem->code,
            ];
        } elseif ($targetItem instanceof Tier) {
            $itemToCreateModal = new SubTier();
            $childModal = new Layer();
            $recordCountFieldName = 'tier_id';
            $itemCreateData = [
                'tier_id' => $targetItem->id,
                'industry_code' => $targetItem->industry_code,
                'sector_code' => $targetItem->sector_code,
                'sub_sector_code' => $targetItem->sub_sector_code,
                'group_code' => $targetItem->group_code,
                'sub_group_code' => $targetItem->sub_group_code,
                'echelon_code' => $targetItem->echelon_code,
                'sub_echelon_code' => $targetItem->sub_echelon_code,
                'tier_code' => $targetItem->code,
            ];
        } elseif ($targetItem instanceof SubTier) {
            $itemToCreateModal = new Layer();
            $childModal = new SubLayer();
            $recordCountFieldName = 'sub_tier_id';
            $itemCreateData = [
                'sub_tier_id' => $targetItem->id,
                'industry_code' => $targetItem->industry_code,
                'sector_code' => $targetItem->sector_code,
                'sub_sector_code' => $targetItem->sub_sector_code,
                'group_code' => $targetItem->group_code,
                'sub_group_code' => $targetItem->sub_group_code,
                'echelon_code' => $targetItem->echelon_code,
                'sub_echelon_code' => $targetItem->sub_echelon_code,
                'tier_code' => $targetItem->tier_code,
                'sub_tier_code' => $targetItem->code,
            ];
        } elseif ($targetItem instanceof Layer) {
            $itemToCreateModal = new SubLayer();
            $childModal = new Deck();
            $recordCountFieldName = 'layer_id';

            $itemCreateData = [
                'layer_id' => $targetItem->id,
                'industry_code' => $targetItem->industry_code,
                'sector_code' => $targetItem->sector_code,
                'sub_sector_code' => $targetItem->sub_sector_code,
                'group_code' => $targetItem->group_code,
                'sub_group_code' => $targetItem->sub_group_code,
                'echelon_code' => $targetItem->echelon_code,
                'sub_echelon_code' => $targetItem->sub_echelon_code,
                'tier_code' => $targetItem->tier_code,
                'sub_tier_code' => $targetItem->sub_tier_code,
                'layer_code' => $targetItem->code,
            ];
        } elseif ($targetItem instanceof SubLayer) {
            $itemToCreateModal = new Deck();
            $childModal = new SubDeck();
            $recordCountFieldName = 'sub_layer_id';

            $itemCreateData = [
                'sub_layer_id' => $targetItem->id,
                'industry_code' => $targetItem->industry_code,
                'sector_code' => $targetItem->sector_code,
                'sub_sector_code' => $targetItem->sub_sector_code,
                'group_code' => $targetItem->group_code,
                'sub_group_code' => $targetItem->sub_group_code,
                'echelon_code' => $targetItem->echelon_code,
                'sub_echelon_code' => $targetItem->sub_echelon_code,
                'tier_code' => $targetItem->tier_code,
                'sub_tier_code' => $targetItem->sub_tier_code,
                'layer_code' => $targetItem->layer_code,
                'sub_layer_code' => $targetItem->code,
            ];
        } elseif ($targetItem instanceof Deck) {
            $itemToCreateModal = new SubDeck();
            $childModal = new Floor();
            $recordCountFieldName = 'deck_id';

            $itemCreateData = [
                'deck_id' => $targetItem->id,
                'industry_code' => $targetItem->industry_code,
                'sector_code' => $targetItem->sector_code,
                'sub_sector_code' => $targetItem->sub_sector_code,
                'group_code' => $targetItem->group_code,
                'sub_group_code' => $targetItem->sub_group_code,
                'echelon_code' => $targetItem->echelon_code,
                'sub_echelon_code' => $targetItem->sub_echelon_code,
                'tier_code' => $targetItem->tier_code,
                'sub_tier_code' => $targetItem->sub_tier_code,
                'layer_code' => $targetItem->layer_code,
                'sub_layer_code' => $targetItem->sub_layer_code,
                'deck_code' => $targetItem->code,
            ];
        } elseif ($targetItem instanceof SubDeck) {
            $itemToCreateModal = new Floor();
            $childModal = new SubFloor();
            $recordCountFieldName = 'sub_deck_id';

            $itemCreateData = [
                'sub_deck_id' => $targetItem->id,
                'industry_code' => $targetItem->industry_code,
                'sector_code' => $targetItem->sector_code,
                'sub_sector_code' => $targetItem->sub_sector_code,
                'group_code' => $targetItem->group_code,
                'sub_group_code' => $targetItem->sub_group_code,
                'echelon_code' => $targetItem->echelon_code,
                'sub_echelon_code' => $targetItem->sub_echelon_code,
                'tier_code' => $targetItem->tier_code,
                'sub_tier_code' => $targetItem->sub_tier_code,
                'layer_code' => $targetItem->layer_code,
                'sub_layer_code' => $targetItem->sub_layer_code,
                'deck_code' => $targetItem->deck_code,
                'sub_deck_code' => $targetItem->code,
            ];
        } elseif ($targetItem instanceof Floor) {
            $itemToCreateModal = new SubFloor();
            $childModal = new Basement();
            $recordCountFieldName = 'floor_id';

            $itemCreateData = [
                'floor_id' => $targetItem->id,
                'industry_code' => $targetItem->industry_code,
                'sector_code' => $targetItem->sector_code,
                'sub_sector_code' => $targetItem->sub_sector_code,
                'group_code' => $targetItem->group_code,
                'sub_group_code' => $targetItem->sub_group_code,
                'echelon_code' => $targetItem->echelon_code,
                'sub_echelon_code' => $targetItem->sub_echelon_code,
                'tier_code' => $targetItem->tier_code,
                'sub_tier_code' => $targetItem->sub_tier_code,
                'layer_code' => $targetItem->layer_code,
                'sub_layer_code' => $targetItem->sub_layer_code,
                'deck_code' => $targetItem->deck_code,
                'sub_deck_code' => $targetItem->sub_deck_code,
                'floor_code' => $targetItem->code,
            ];
        } elseif ($targetItem instanceof SubFloor) {
            $itemToCreateModal = new Basement();
            $childModal = new SubBasement();
            $recordCountFieldName = 'sub_floor_id';

            $itemCreateData = [
                'sub_floor_id' => $targetItem->id,
                'industry_code' => $targetItem->industry_code,
                'sector_code' => $targetItem->sector_code,
                'sub_sector_code' => $targetItem->sub_sector_code,
                'group_code' => $targetItem->group_code,
                'sub_group_code' => $targetItem->sub_group_code,
                'echelon_code' => $targetItem->echelon_code,
                'sub_echelon_code' => $targetItem->sub_echelon_code,
                'tier_code' => $targetItem->tier_code,
                'sub_tier_code' => $targetItem->sub_tier_code,
                'layer_code' => $targetItem->layer_code,
                'sub_layer_code' => $targetItem->sub_layer_code,
                'deck_code' => $targetItem->deck_code,
                'sub_deck_code' => $targetItem->sub_deck_code,
                'floor_code' => $targetItem->floor_code,
                'sub_floor_code' => $targetItem->code,
            ];
        } elseif ($targetItem instanceof Basement) {
            $itemToCreateModal = new SubBasement();
            $childModal = new Mine();
            $recordCountFieldName = 'basement_id';

            $itemCreateData = [
                'basement_id' => $targetItem->id,
                'industry_code' => $targetItem->industry_code,
                'sector_code' => $targetItem->sector_code,
                'sub_sector_code' => $targetItem->sub_sector_code,
                'group_code' => $targetItem->group_code,
                'sub_group_code' => $targetItem->sub_group_code,
                'echelon_code' => $targetItem->echelon_code,
                'sub_echelon_code' => $targetItem->sub_echelon_code,
                'tier_code' => $targetItem->tier_code,
                'sub_tier_code' => $targetItem->sub_tier_code,
                'layer_code' => $targetItem->layer_code,
                'sub_layer_code' => $targetItem->sub_layer_code,
                'deck_code' => $targetItem->deck_code,
                'sub_deck_code' => $targetItem->sub_deck_code,
                'floor_code' => $targetItem->floor_code,
                'sub_floor_code' => $targetItem->sub_floor_code,
                'basement_code' => $targetItem->code,
            ];
        } elseif ($targetItem instanceof SubBasement) {
            $itemToCreateModal = new Mine();
            $childModal = new SubMine();
            $recordCountFieldName = 'sub_basement_id';

            $itemCreateData = [
                'sub_basement_id' => $targetItem->id,
                'industry_code' => $targetItem->industry_code,
                'sector_code' => $targetItem->sector_code,
                'sub_sector_code' => $targetItem->sub_sector_code,
                'group_code' => $targetItem->group_code,
                'sub_group_code' => $targetItem->sub_group_code,
                'echelon_code' => $targetItem->echelon_code,
                'sub_echelon_code' => $targetItem->sub_echelon_code,
                'tier_code' => $targetItem->tier_code,
                'sub_tier_code' => $targetItem->sub_tier_code,
                'layer_code' => $targetItem->layer_code,
                'sub_layer_code' => $targetItem->sub_layer_code,
                'deck_code' => $targetItem->deck_code,
                'sub_deck_code' => $targetItem->sub_deck_code,
                'floor_code' => $targetItem->floor_code,
                'sub_floor_code' => $targetItem->sub_floor_code,
                'basement_code' => $targetItem->basement_code,
                'sub_basement_code' => $targetItem->code,
            ];
        } elseif ($targetItem instanceof Mine) {
            $itemToCreateModal = new SubMine();
            $childModal = '';
            $recordCountFieldName = 'mine_id';

            $itemCreateData = [
                'mine_id' => $targetItem->id,
                'industry_code' => $targetItem->industry_code,
                'sector_code' => $targetItem->sector_code,
                'sub_sector_code' => $targetItem->sub_sector_code,
                'group_code' => $targetItem->group_code,
                'sub_group_code' => $targetItem->sub_group_code,
                'echelon_code' => $targetItem->echelon_code,
                'sub_echelon_code' => $targetItem->sub_echelon_code,
                'tier_code' => $targetItem->tier_code,
                'sub_tier_code' => $targetItem->sub_tier_code,
                'layer_code' => $targetItem->layer_code,
                'sub_layer_code' => $targetItem->sub_layer_code,
                'deck_code' => $targetItem->deck_code,
                'sub_deck_code' => $targetItem->sub_deck_code,
                'floor_code' => $targetItem->floor_code,
                'sub_floor_code' => $targetItem->sub_floor_code,
                'basement_code' => $targetItem->basement_code,
                'sub_basement_code' => $targetItem->sub_basement_code,
                'mine_code' => $targetItem->code,
            ];
        }

        $itemCreateData['description'] = $model->description;
        $itemCreateData['note'] = $model->note;
        $itemCreateData['created_by'] = auth()->id();

        //  dd($itemCreateData, $itemToCreateModal);

        $item = $itemToCreateModal->create($itemCreateData);
        $totalItem = $itemToCreateModal->where($recordCountFieldName, $targetItem->id)->count();
        $item->code = $this->_generateCode($totalItem, $itemToCreateModal, $targetItem->code);
        $item->replica_id = $item->{$recordCountFieldName};
        $item->save();

        if ($model instanceof Sector) {
            $this->_createSelectedTargetRecursiveNode($childModal, $item, 'sector_id', $model->id, new SubSector());
        } elseif ($model instanceof SubSector) {
            $this->_createSelectedTargetRecursiveNode($childModal, $item, 'sub_sector_id', $model->id, new Group());
        } elseif ($model instanceof Group) {
            $this->_createSelectedTargetRecursiveNode($childModal, $item, 'group_id', $model->id, new SubGroup());
        } elseif ($model instanceof SubGroup) {
            $this->_createSelectedTargetRecursiveNode($childModal, $item, 'sub_group_id', $model->id, new Echelon());
        } elseif ($model instanceof Echelon) {
            $this->_createSelectedTargetRecursiveNode($childModal, $item, 'echelon_id', $model->id, new SubEchelon());
        } elseif ($model instanceof SubEchelon) {
            $this->_createSelectedTargetRecursiveNode($childModal, $item, 'sub_echelon_id', $model->id, new Tier());
        } elseif ($model instanceof Tier) {
            $this->_createSelectedTargetRecursiveNode($childModal, $item, 'tier_id', $model->id, new SubTier());
        } elseif ($model instanceof SubTier) {
            $this->_createSelectedTargetRecursiveNode($childModal, $item, 'sub_tier_id', $model->id, new Layer());
        } elseif ($model instanceof Layer) {
            $this->_createSelectedTargetRecursiveNode($childModal, $item, 'layer_id', $model->id, new SubLayer());
        } elseif ($model instanceof SubLayer) {
            $this->_createSelectedTargetRecursiveNode($childModal, $item, 'sub_layer_id', $model->id, new Deck());
        } elseif ($model instanceof Deck) {
            $this->_createSelectedTargetRecursiveNode($childModal, $item, 'deck_id', $model->id, new SubDeck());
        } elseif ($model instanceof SubDeck) {
            $this->_createSelectedTargetRecursiveNode($childModal, $item, 'sub_deck_id', $model->id, new Floor());
        } elseif ($model instanceof Floor) {
            $this->_createSelectedTargetRecursiveNode($childModal, $item, 'floor_id', $model->id, new SubFloor());
        } elseif ($model instanceof SubFloor) {
            $this->_createSelectedTargetRecursiveNode($childModal, $item, 'sub_floor_id', $model->id, new Basement());
        } elseif ($model instanceof Basement) {
            $this->_createSelectedTargetRecursiveNode($childModal, $item, 'basement_id', $model->id, new SubBasement());
        } elseif ($model instanceof SubBasement) {
            $this->_createSelectedTargetRecursiveNode($childModal, $item, 'sub_basement_id', $model->id, new Mine());
        } elseif ($model instanceof Mine) {
            $this->_createSelectedTargetRecursiveNode($childModal, $item, 'mine_id', $model->id, new SubMine());
        }
    }

    private function _createSelectedTargetRecursiveNode($model, $newCategory, $fieldName, $fieldValue, $sourceModel, $debug = false)
    {
        if ($debug) {
            $oldItems = $sourceModel->Where($fieldName, $fieldValue)->get(['d', 'description', 'note', 'status', 'replica_id', 'industry_code'])->toArray();

        } else {
            $oldItems = $sourceModel->Where($fieldName, $fieldValue)->get(['id', 'description', 'note', 'status', 'replica_id', 'industry_code'])->toArray();
        }
        foreach ($oldItems as $oldItem) {
            if ($model instanceof Sector) {
                $oldItem['industry_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->code;
                $childModal = new SubSector();
                $recordCountFieldName = 'industry_id';
            } elseif ($model instanceof SubSector) {
                $oldItem['sector_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->code;
                $parentModel = new Sector();
                $childModal = new Group();
                $recordCountFieldName = 'sector_id';
            } elseif ($model instanceof Group) {
                $oldItem['sub_sector_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->code;
                $parentModel = new SubSector();
                $childModal = new SubGroup();
                $recordCountFieldName = 'sub_sector_id';
            } elseif ($model instanceof SubGroup) {
                $oldItem['group_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->code;
                $parentModel = new Group();
                $childModal = new Echelon();
                $recordCountFieldName = 'group_id';
            } elseif ($model instanceof Echelon) {
                $oldItem['sub_group_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->code;
                $parentModel = new SubGroup();
                $childModal = new SubEchelon();
                $recordCountFieldName = 'sub_group_id';
            } elseif ($model instanceof SubEchelon) {
                $oldItem['echelon_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->sub_group_code;
                $oldItem['echelon_code'] = $newCategory->code;
                $parentModel = new Echelon();
                $childModal = new Tier();
                $recordCountFieldName = 'echelon_id';
            } elseif ($model instanceof Tier) {
                $oldItem['sub_echelon_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->sub_group_code;
                $oldItem['echelon_code'] = $newCategory->echelon_code;
                $oldItem['sub_echelon_code'] = $newCategory->code;
                $parentModel = new SubEchelon();
                $childModal = new SubTier();
                $recordCountFieldName = 'sub_echelon_id';
            } elseif ($model instanceof SubTier) {
                $oldItem['tier_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->sub_group_code;
                $oldItem['echelon_code'] = $newCategory->echelon_code;
                $oldItem['sub_echelon_code'] = $newCategory->sub_echelon_code;
                $oldItem['tier_code'] = $newCategory->code;
                $parentModel = new Tier();
                $childModal = new Layer();
                $recordCountFieldName = 'tier_id';
            } elseif ($model instanceof Layer) {
                $oldItem['sub_tier_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->sub_group_code;
                $oldItem['echelon_code'] = $newCategory->echelon_code;
                $oldItem['sub_echelon_code'] = $newCategory->sub_echelon_code;
                $oldItem['tier_code'] = $newCategory->tier_code;
                $oldItem['sub_tier_code'] = $newCategory->code;
                $parentModel = new SubTier();
                $childModal = new SubLayer();
                $recordCountFieldName = 'sub_tier_id';
            } elseif ($model instanceof SubLayer) {
                $oldItem['layer_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->sub_group_code;
                $oldItem['echelon_code'] = $newCategory->echelon_code;
                $oldItem['sub_echelon_code'] = $newCategory->sub_echelon_code;
                $oldItem['tier_code'] = $newCategory->tier_code;
                $oldItem['sub_tier_code'] = $newCategory->sub_tier_code;
                $oldItem['layer_code'] = $newCategory->code;
                $parentModel = new Layer();
                $childModal = new Deck();
                $recordCountFieldName = 'layer_id';
            } elseif ($model instanceof Deck) {
                $oldItem['sub_layer_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->sub_group_code;
                $oldItem['echelon_code'] = $newCategory->echelon_code;
                $oldItem['sub_echelon_code'] = $newCategory->sub_echelon_code;
                $oldItem['tier_code'] = $newCategory->tier_code;
                $oldItem['sub_tier_code'] = $newCategory->sub_tier_code;
                $oldItem['layer_code'] = $newCategory->layer_code;
                $oldItem['sub_layer_code'] = $newCategory->code;
                $parentModel = new SubLayer();
                $childModal = new SubDeck();
                $recordCountFieldName = 'sub_layer_id';
            } elseif ($model instanceof SubDeck) {
                $oldItem['deck_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->sub_group_code;
                $oldItem['echelon_code'] = $newCategory->echelon_code;
                $oldItem['sub_echelon_code'] = $newCategory->sub_echelon_code;
                $oldItem['tier_code'] = $newCategory->tier_code;
                $oldItem['sub_tier_code'] = $newCategory->sub_tier_code;
                $oldItem['layer_code'] = $newCategory->layer_code;
                $oldItem['sub_layer_code'] = $newCategory->sub_layer_code;
                $oldItem['deck_code'] = $newCategory->code;
                $parentModel = new Deck();
                $childModal = new Floor();
                $recordCountFieldName = 'deck_id';
            } elseif ($model instanceof Floor) {
                $oldItem['sub_deck_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->sub_group_code;
                $oldItem['echelon_code'] = $newCategory->echelon_code;
                $oldItem['sub_echelon_code'] = $newCategory->sub_echelon_code;
                $oldItem['tier_code'] = $newCategory->tier_code;
                $oldItem['sub_tier_code'] = $newCategory->sub_tier_code;
                $oldItem['layer_code'] = $newCategory->layer_code;
                $oldItem['sub_layer_code'] = $newCategory->sub_layer_code;
                $oldItem['deck_code'] = $newCategory->deck_code;
                $oldItem['sub_deck_code'] = $newCategory->code;
                $parentModel = new SubDeck();
                $childModal = new SubFloor();
                $recordCountFieldName = 'sub_deck_id';
            } elseif ($model instanceof SubFloor) {
                $oldItem['floor_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->sub_group_code;
                $oldItem['echelon_code'] = $newCategory->echelon_code;
                $oldItem['sub_echelon_code'] = $newCategory->sub_echelon_code;
                $oldItem['tier_code'] = $newCategory->tier_code;
                $oldItem['sub_tier_code'] = $newCategory->sub_tier_code;
                $oldItem['layer_code'] = $newCategory->layer_code;
                $oldItem['sub_layer_code'] = $newCategory->sub_layer_code;
                $oldItem['deck_code'] = $newCategory->deck_code;
                $oldItem['sub_deck_code'] = $newCategory->sub_deck_code;
                $oldItem['floor_code'] = $newCategory->code;
                $parentModel = new Floor();
                $childModal = new Basement();
                $recordCountFieldName = 'floor_id';
            } elseif ($model instanceof Basement) {
                $oldItem['sub_floor_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->sub_group_code;
                $oldItem['echelon_code'] = $newCategory->echelon_code;
                $oldItem['sub_echelon_code'] = $newCategory->sub_echelon_code;
                $oldItem['tier_code'] = $newCategory->tier_code;
                $oldItem['sub_tier_code'] = $newCategory->sub_tier_code;
                $oldItem['layer_code'] = $newCategory->layer_code;
                $oldItem['sub_layer_code'] = $newCategory->sub_layer_code;
                $oldItem['deck_code'] = $newCategory->deck_code;
                $oldItem['sub_deck_code'] = $newCategory->sub_deck_code;
                $oldItem['floor_code'] = $newCategory->floor_code;
                $oldItem['sub_floor_code'] = $newCategory->code;
                $parentModel = new SubFloor();
                $childModal = new SubBasement();
                $recordCountFieldName = 'sub_floor_id';
            } elseif ($model instanceof SubBasement) {
                $oldItem['basement_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->sub_group_code;
                $oldItem['echelon_code'] = $newCategory->echelon_code;
                $oldItem['sub_echelon_code'] = $newCategory->sub_echelon_code;
                $oldItem['tier_code'] = $newCategory->tier_code;
                $oldItem['sub_tier_code'] = $newCategory->sub_tier_code;
                $oldItem['layer_code'] = $newCategory->layer_code;
                $oldItem['sub_layer_code'] = $newCategory->sub_layer_code;
                $oldItem['deck_code'] = $newCategory->deck_code;
                $oldItem['sub_deck_code'] = $newCategory->sub_deck_code;
                $oldItem['floor_code'] = $newCategory->floor_code;
                $oldItem['sub_floor_code'] = $newCategory->sub_floor_code;
                $oldItem['basement_code'] = $newCategory->code;
                $parentModel = new Basement();
                $childModal = new Mine();
                $recordCountFieldName = 'basement_id';
            } elseif ($model instanceof Mine) {
                $oldItem['sub_basement_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->sub_group_code;
                $oldItem['echelon_code'] = $newCategory->echelon_code;
                $oldItem['sub_echelon_code'] = $newCategory->sub_echelon_code;
                $oldItem['tier_code'] = $newCategory->tier_code;
                $oldItem['sub_tier_code'] = $newCategory->sub_tier_code;
                $oldItem['layer_code'] = $newCategory->layer_code;
                $oldItem['sub_layer_code'] = $newCategory->sub_layer_code;
                $oldItem['deck_code'] = $newCategory->deck_code;
                $oldItem['sub_deck_code'] = $newCategory->sub_deck_code;
                $oldItem['floor_code'] = $newCategory->floor_code;
                $oldItem['sub_floor_code'] = $newCategory->sub_floor_code;
                $oldItem['basement_code'] = $newCategory->basement_code;
                $oldItem['sub_basement_code'] = $newCategory->code;
                $parentModel = new SubBasement();
                $childModal = new SubMine();
                $recordCountFieldName = 'sub_basement_id';
            } elseif ($model instanceof SubMine) {
                $oldItem['mine_id'] = $newCategory->id;
                $oldItem['industry_code'] = $newCategory->industry_code;
                $oldItem['sector_code'] = $newCategory->sector_code;
                $oldItem['sub_sector_code'] = $newCategory->sub_sector_code;
                $oldItem['group_code'] = $newCategory->group_code;
                $oldItem['sub_group_code'] = $newCategory->sub_group_code;
                $oldItem['echelon_code'] = $newCategory->echelon_code;
                $oldItem['sub_echelon_code'] = $newCategory->sub_echelon_code;
                $oldItem['tier_code'] = $newCategory->tier_code;
                $oldItem['sub_tier_code'] = $newCategory->sub_tier_code;
                $oldItem['layer_code'] = $newCategory->layer_code;
                $oldItem['sub_layer_code'] = $newCategory->sub_layer_code;
                $oldItem['deck_code'] = $newCategory->deck_code;
                $oldItem['sub_deck_code'] = $newCategory->sub_deck_code;
                $oldItem['floor_code'] = $newCategory->floor_code;
                $oldItem['sub_floor_code'] = $newCategory->sub_floor_code;
                $oldItem['basement_code'] = $newCategory->basement_code;
                $oldItem['sub_basement_code'] = $newCategory->sub_basement_code;
                $oldItem['mine_code'] = $newCategory->code;
                $parentModel = new SubBasement();
                $childModal = new SubMine();
                $recordCountFieldName = 'mine_id';
            }

            $oldItem['created_by'] = auth()->id();

            $item = $model->create($oldItem);
            $totalItem = $model->where($recordCountFieldName, $newCategory->id)->count();
            $item->code = $this->_generateCode($totalItem, $model, $newCategory->code);
            $item->replica_id = $newCategory->id;
            $item->save();

            if (isset($oldItem['replica_id'])) {
                $perviousReplicaId = explode(':', $oldItem['replica_id']);
                if (count($perviousReplicaId) > 1) {
                    //shared parent id update in child table
                    $replicaIdArray = $model->Where('industry_code', $oldItem['industry_code'])->where('description', $oldItem['description'])->pluck($recordCountFieldName)->toArray();
                    $replicaId = implode(':', $replicaIdArray);
                    $model->Where('industry_code', $oldItem['industry_code'])->where('description', $oldItem['description'])->update(['replica_id' => $replicaId]);
                }
            }

            //  if (!($model instanceof Sector)) {
            //  // shared child id update in parent table
            //  $childReplicaIdArray = $model->Where('industry_code', $oldItem['industry_code'])->where($recordCountFieldName, $newCategory->id)->pluck('id')->toArray();
            //  $childReplicaId = implode(':', $childReplicaIdArray);
            //  $parentModel->Where('industry_code', $oldItem['industry_code'])->where('id', $item->{$recordCountFieldName})->update(['child_node_id' => $childReplicaId]);
            //
            //  }

            if ($sourceModel instanceof SubSector) {
                $this->_createSelectedTargetRecursiveNode($childModal, $item, 'sub_sector_id', $oldItem['id'], new Group());
            } elseif ($sourceModel instanceof Group) {
                $this->_createSelectedTargetRecursiveNode($childModal, $item, 'group_id', $oldItem['id'], new SubGroup());
            } elseif ($sourceModel instanceof SubGroup) {
                $this->_createSelectedTargetRecursiveNode($childModal, $item, 'sub_group_id', $oldItem['id'], new Echelon());
            } elseif ($sourceModel instanceof Echelon) {
                $this->_createSelectedTargetRecursiveNode($childModal, $item, 'echelon_id', $oldItem['id'], new SubEchelon());
            } elseif ($sourceModel instanceof SubEchelon) {
                $this->_createSelectedTargetRecursiveNode($childModal, $item, 'sub_echelon_id', $oldItem['id'], new Tier());
            } elseif ($sourceModel instanceof Tier) {
                $this->_createSelectedTargetRecursiveNode($childModal, $item, 'tier_id', $oldItem['id'], new SubTier());
            } elseif ($sourceModel instanceof SubTier) {
                $this->_createSelectedTargetRecursiveNode($childModal, $item, 'sub_tier_id', $oldItem['id'], new Layer());
            } elseif ($sourceModel instanceof Layer) {
                $this->_createSelectedTargetRecursiveNode($childModal, $item, 'layer_id', $oldItem['id'], new SubLayer());
            } elseif ($sourceModel instanceof SubLayer) {
                $this->_createSelectedTargetRecursiveNode($childModal, $item, 'sub_layer_id', $oldItem['id'], new Deck());
            } elseif ($sourceModel instanceof Deck) {
                $this->_createSelectedTargetRecursiveNode($childModal, $item, 'deck_id', $oldItem['id'], new SubDeck());
            } elseif ($sourceModel instanceof SubDeck) {
                $this->_createSelectedTargetRecursiveNode($childModal, $item, 'sub_deck_id', $oldItem['id'], new Floor());
            } elseif ($sourceModel instanceof Floor) {
                $this->_createSelectedTargetRecursiveNode($childModal, $item, 'floor_id', $oldItem['id'], new SubFloor());
            } elseif ($sourceModel instanceof SubFloor) {
                $this->_createSelectedTargetRecursiveNode($childModal, $item, 'sub_floor_id', $oldItem['id'], new Basement());
            } elseif ($sourceModel instanceof Basement) {
                $this->_createSelectedTargetRecursiveNode($childModal, $item, 'basement_id', $oldItem['id'], new SubBasement());
            } elseif ($sourceModel instanceof SubBasement) {
                $this->_createSelectedTargetRecursiveNode($childModal, $item, 'sub_basement_id', $oldItem['id'], new Mine());
            } elseif ($sourceModel instanceof Mine) {
                $this->_createSelectedTargetRecursiveNode($childModal, $item, 'mine_id', $oldItem['id'], new SubMine());
            }
        }
    }

    private function getModelToCssClassName($modelName)
    {
        switch ($modelName) {
            case 'Sector':
                $type = 'sector';
                break;
            case 'SubSector':
                $type = 'sub-sector';
                break;
            case 'Group':
                $type = 'group';
                break;
            case 'SubGroup':
                $type = 'sub-group';
                break;
            case 'Echelon':
                $type = 'echelon';
                break;
            case 'SubEchelon':
                $type = 'sub-echelon';
                break;
            case 'Tier':
                $type = 'tier';
                break;
            case 'SubTier':
                $type = 'sub-tier';
                break;
            case 'Layer':
                $type = 'layer';
                break;
            case 'SubLayer':
                $type = 'sub-layer';
                break;
            case 'Deck':
                $type = 'deck';
                break;
            case 'SubDeck':
                $type = 'sub-deck';
                break;
            case 'Floor':
                $type = 'floor';
                break;
            case 'SubFloor':
                $type = 'sub-floor';
                break;
            case 'Basement':
                $type = 'basement';
                break;
            case 'SubBasement':
                $type = 'sub-basement';
                break;
            case 'Mine':
                $type = 'mine';
                break;
            case 'SubMine':
                $type = 'sub-mine';
                break;
        }
        return $type;
    }

    private function getNodeRelationByItem($targetItem)
    {
        if ($targetItem instanceof Sector) {
            $targetItem->load(['subSectorSelectedField.groupSelectedField.subGroupSelectedField.echelonSelectedField.subEchelonSelectedField.tierSelectedField.subTierSelectedField.layerSelectedField.subLayerSelectedField.deckSelectedField.subDeckSelectedField.floorSelectedField.subFloorSelectedField.basementSelectedField.subBasementSelectedField.mineSelectedField.subMineSelectedField']);
        } elseif ($targetItem instanceof SubSector) {
            $targetItem->load(['groupSelectedField.subGroupSelectedField.echelonSelectedField.subEchelonSelectedField.tierSelectedField.subTierSelectedField.layerSelectedField.subLayerSelectedField.deckSelectedField.subDeckSelectedField.floorSelectedField.subFloorSelectedField.basementSelectedField.subBasementSelectedField.mineSelectedField.subMineSelectedField']);
        } elseif ($targetItem instanceof Group) {
            $targetItem->load(['subGroupSelectedField.echelonSelectedField.subEchelonSelectedField.tierSelectedField.subTierSelectedField.layerSelectedField.subLayerSelectedField.deckSelectedField.subDeckSelectedField.floorSelectedField.subFloorSelectedField.basementSelectedField.subBasementSelectedField.mineSelectedField.subMineSelectedField']);
        } elseif ($targetItem instanceof SubGroup) {
            $targetItem->load(['echelonSelectedField.subEchelonSelectedField.tierSelectedField.subTierSelectedField.layerSelectedField.subLayerSelectedField.deckSelectedField.subDeckSelectedField.floorSelectedField.subFloorSelectedField.basementSelectedField.subBasementSelectedField.mineSelectedField.subMineSelectedField']);
        } elseif ($targetItem instanceof Echelon) {
            $targetItem->load(['subEchelonSelectedField.tierSelectedField.subTierSelectedField.layerSelectedField.subLayerSelectedField.deckSelectedField.subDeckSelectedField.floorSelectedField.subFloorSelectedField.basementSelectedField.subBasementSelectedField.mineSelectedField.subMineSelectedField']);
        } elseif ($targetItem instanceof SubEchelon) {
            $targetItem->load(['tierSelectedField.subTierSelectedField.layerSelectedField.subLayerSelectedField.deckSelectedField.subDeckSelectedField.floorSelectedField.subFloorSelectedField.basementSelectedField.subBasementSelectedField.mineSelectedField.subMineSelectedField']);
        } elseif ($targetItem instanceof Tier) {
            $targetItem->load(['subTierSelectedField.layerSelectedField.subLayerSelectedField.deckSelectedField.subDeckSelectedField.floorSelectedField.subFloorSelectedField.basementSelectedField.subBasementSelectedField.mineSelectedField.subMineSelectedField']);
        } elseif ($targetItem instanceof SubTier) {
            $targetItem->load(['layerSelectedField.subLayerSelectedField.deckSelectedField.subDeckSelectedField.floorSelectedField.subFloorSelectedField.basementSelectedField.subBasementSelectedField.mineSelectedField.subMineSelectedField']);
        } elseif ($targetItem instanceof Layer) {
            $targetItem->load(['subLayerSelectedField.deckSelectedField.subDeckSelectedField.floorSelectedField.subFloorSelectedField.basementSelectedField.subBasementSelectedField.mineSelectedField.subMineSelectedField']);
        } elseif ($targetItem instanceof SubLayer) {
            $targetItem->load(['deckSelectedField.subDeckSelectedField.floorSelectedField.subFloorSelectedField.basementSelectedField.subBasementSelectedField.mineSelectedField.subMineSelectedField']);
        } elseif ($targetItem instanceof Deck) {
            $targetItem->load(['subDeckSelectedField.floorSelectedField.subFloorSelectedField.basementSelectedField.subBasementSelectedField.mineSelectedField.subMineSelectedField']);
        } elseif ($targetItem instanceof SubDeck) {
            $targetItem->load(['floorSelectedField.subFloorSelectedField.basementSelectedField.subBasementSelectedField.mineSelectedField.subMineSelectedField']);
        } elseif ($targetItem instanceof Floor) {
            $targetItem->load(['subFloorSelectedField.basementSelectedField.subBasementSelectedField.mineSelectedField.subMineSelectedField']);
        } elseif ($targetItem instanceof SubFloor) {
            $targetItem->load(['basementSelectedField.subBasementSelectedField.mineSelectedField.subMineSelectedField']);
        } elseif ($targetItem instanceof Basement) {
            $targetItem->load(['subBasementSelectedField.mineSelectedField.subMineSelectedField']);
        } elseif ($targetItem instanceof SubBasement) {
            $targetItem->load(['mineSelectedField.subMineSelectedField']);
        } elseif ($targetItem instanceof Mine) {
            $targetItem->load(['subMineSelectedField']);
        }
        return $targetItem;
    }

    private function addActivityLog($name, $object, $description)
    {
        activity()
            ->useLog($name)
            ->performedOn($object)
            ->causedBy(auth()->user())
            ->log($description);
    }

    public function nodeStatistics()
    {
        if (auth()->user()->isCustomerSupport()) {
            return redirect()->back()->with([
                'message' => 'Unauthorize.',
                'alert-type' => 'error'
            ]);
        }
        $ndustry = IndustryNodeStatistics::leftJoin('industries', 'industries.id', '=', 'industry_node_statistics.industry_id')
            ->distinct()->pluck('industries.description as name', 'industries.id as id')->toArray();

        $toDate = Carbon::now()->format('Y-m-d');
        $formDate = Carbon::now()->subDays(0)->format('Y-m-d');
        if (request()->ajax()) {
            $query = IndustryNodeStatistics::leftJoin('industries', 'industries.id', '=', 'industry_node_statistics.industry_id')
                ->select('industries.description as name','total_nodes', 'industry_node_statistics.created_at', 'nodes_added', 'nodes_edited', 'nodes_deleted');

            if(request()->searchByIndustry){
                $query->where('industry_id', request()->searchByIndustry);
            }

            if(request()->searchByFromdate){
                $query->whereDate('industry_node_statistics.created_at', '>=', request()->searchByFromdate);
            }
            if(request()->searchByTodate){
                $query->whereDate('industry_node_statistics.created_at', '<=', request()->searchByTodate);
            }

            $table = Datatables::of($query);

            $table->editColumn('created_at', function ($row) {
                return $row->created_at->format('F jS, Y');
            });

            return $table->make(true);
        }
        return view('admin.industry.node_statistics', compact('ndustry','formDate', 'toDate'));
    }

    public function nodeLog()
    {
        if (auth()->user()->isCustomerSupport()) {
            return redirect()->back()->with([
                'message' => 'Unauthorize.',
                'alert-type' => 'error'
            ]);
        }
            $logArray = [
                'industry_node',
                'duplicate_industry',
                'industry_published',
                'sector_node',
                'sub_sector_node',
                'group_node',
                'sub_group_node',
                'echelon_node',
                'sub_echelon_node',
                'tier_node',
                'sub_tier_node',
                'layer_node',
                'sub_layer_node',
                'sub_deck_node',
                'deck_node',
                'floor_node',
                'sub_floor_node',
                'basement_node',
                'sub_basement_node',
                'mine_node',
                'sub_mine_node',
                'Save manual snapshot',
                'Load manual snapshot',
                'Load snapshot',
                'keyword_add',
                'Keyword_delete',
            ];
        $toDate = Carbon::now()->format('Y-m-d');
        $formDate = Carbon::now()->subDays(0)->format('Y-m-d');
        $types = Activity::distinct()->whereIn('log_name', $logArray)->pluck('log_name', 'log_name')->toArray();

        if (request()->ajax()) {
            $lastLoggedActivity = (new Activity)->whereIn('log_name', $logArray)->newQuery();
            if(request()->searchByType){
                $lastLoggedActivity->where('log_name', request()->searchByType);
            }

            if(request()->searchByFromdate){
                $lastLoggedActivity->whereDate('created_at', '>=', request()->searchByFromdate);
            }
            if(request()->searchByTodate){
                $lastLoggedActivity->whereDate('created_at', '<=', request()->searchByTodate);
            }

            $table = Datatables::of($lastLoggedActivity->get());
            $table->editColumn('created_at', function ($row) {
                return $row->created_at->format('m/d/Y H:i:s A');
            });

//            $table->addColumn('delete', ' ');
            $table->addColumn('user', ' ');
            $table->addColumn('status', ' ');

//            $table->editColumn('delete', function ($row) {
//                return $row;
//            });
            $table->editColumn('user', function ($row) {
                return $row->causer->name??'Anonymous';
            });
            $table->editColumn('status', function ($row) {
                return $row->properties->toArray();
            });
            return $table->make(true);
        }
        return view('admin.industry.node_log', compact('types', 'formDate', 'toDate'));
    }

    public function publishUnpublish(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'industry_id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'msg' => $validator->errors()->first()]);
        }
        $publishStatus = 'published';
        if($request->industry_publish_status)
        {
            $publishStatus = 'unpublished';
        }

        try {
            $industry = Industry::findOrFail($request->industry_id);
            $industry->publish_status = ! $request->industry_publish_status;
            $industry->publish_status_changed_by = auth()->id();
            $industry->save();

            $data['msg'] = 'successfully changed!';
            $data['status'] = 'success';

            /* tracking industry create */
            $logDescription = auth()->user()->name . " {$publishStatus} '{$industry->description}' industry on ". Carbon::now()->format('m/d/Y');
            $this->addActivityLog('industry_published', $industry, $logDescription);
            /* end tracking industry create */
        } catch (\Exception $e) {
            $data['msg'] = "Operation Failed!";
            $data['status'] = 'error';
            logError($e);
        }
        return response()->json($data);
    }
}
