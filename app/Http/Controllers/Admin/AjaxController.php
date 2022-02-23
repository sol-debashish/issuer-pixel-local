<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Basement;
use App\Models\CategorizationLevel;
use App\Models\CompanyCategorizationLookup;
use App\Models\CompanyTaxonomyCategorizationLookup;
use App\Models\CrossIndex;
use App\Models\Deck;
use App\Models\Echelon;
use App\Models\Floor;
use App\Models\Group;
use App\Models\Industry;
use App\Models\IndustryNodeStatistics;
use App\Models\Layer;
use App\Models\MediaCategorizationLookup;
use App\Models\Mine;
use App\Models\DynamicNodeView;
use App\Models\NodeTreeView;
use App\Models\NodeWarp;
use App\Models\Sector;
use App\Models\State;
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
use App\Models\TimeSpantOnTree;
use App\Traits\NodeHelperTrait;
use App\Traits\NodeMap;
use App\Traits\NodeMoveTrait;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rule;
use Validator;
use Waavi\Sanitizer\Sanitizer;
use Illuminate\Support\Str;

class AjaxController extends Controller
{
    use NodeMap;
    use NodeHelperTrait;
    use NodeMoveTrait;

    /**
     * Create Node Method
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function createNode(Request $request)
    {
        \Log::info('Start ' . __METHOD__);
        DB::beginTransaction();
        try {
            $data['totalAdded'] = 0;
            $this->nodeMapNodeType = $request->node_type;
            $createNodeTableName = $this->getNodeMapTable();
            $createNodeParentField = $this->getNodeMapParentField();

            if ($this->nodeMapNodeType == 'sector') {
                $parentIds = [$request->industry_id];
            } else {
                parse_str($request->parent_ids, $output);
                $parentIds = $output['parent_ids'];
            }
            $industry = Industry::find($request->industry_id);

            $descriptionArray = $this->getSanitizeDescriptionData($request->description);

            if ($validator = $this->nodeAddFieldValidation($descriptionArray, $createNodeTableName, $createNodeParentField, $parentIds)) {
                return response()->json(['status' => 'error', 'msg' => 'Node already exists!' . $validator->errors()->first()]);
            }
            $replicaId = implode(':', $parentIds);

            $createNodeNamespace = "App\\Models\\" . $this->getNodeMapModel();
            $createNodeParentNamespace = "App\\Models\\" . $this->getNodeMapParentModel();
            foreach ($parentIds as $parentId) {
                $parentData = $createNodeParentNamespace::find($parentId);

                foreach ($descriptionArray as $descriptionData) {
                    $newNode = $createNodeNamespace::create([
                        'description' => $descriptionData,
                        'note' => $request->note,
                        'raw_code' => $this->_generateRawCode($createNodeNamespace, $createNodeParentField, $parentId),
                        'industry_code' => $industry->code,
                        $createNodeParentField => $parentData->id,
                        'replica_id' => $replicaId,
                        'status' => 1,
                        'created_by' => auth()->id(),
                    ]);
                    /* tracking node create */
                    $logDescription = auth()->user()->name . " create '$descriptionData' " . str_replace('-', ' ', $this->nodeMapNodeType) . " in '{$industry->description}' industry";
                    $this->addActivityLog(str_replace('-', '_', $this->nodeMapNodeType) . '_node', $newNode, $logDescription);
                    /* end tracking sub sector create */

                    $newNode = \DB::table($this->getNodeMapTableView())->whereId($newNode->id)->first();
                    $data['response']['content'][] = [
                        'targetContainer' => str_replace('-', '_', $this->nodeMapNodeType) . "_node_container_{$parentId}",
                        'node' => $newNode,
                        'childNodeContainer' => str_replace('-', '_', $this->getNodeMapNextKey($this->nodeMapNodeType)) . "_node_container",
                    ];
                    $data['totalAdded']++;
                }
            }

            /*total added node add in industry node statistics table*/
            IndustryNodeStatistics::updateOrCreate([
                'industry_id' => $industry->id,
                'created_at' => Carbon::now()->format('Y-m-d'),
            ],
                [
                    'industry_id' => $industry->id,
                    'total_nodes' => $request->total_node + $data['totalAdded'],//$this->_industryNodeCount($industry->id),
                    'nodes_added' => DB::raw("nodes_added + {$data['totalAdded']}"),
                    'created_at' => Carbon::now()->format('Y-m-d'),
                ]);
            /* end total added node add in industry node statistics table*/

            $data['response']['type'] = $this->nodeMapNodeType;
            $data['msg'] = 'successfully created!';
            $data['status'] = 'nodeCreate';
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            $data['msg'] = env('') ? $e->getMessage() : 'Operation Failed';
            $data['status'] = 'error';
            \Log::error($e->getFile() . ':' . $e->getLine() . ' ' . $e->getMessage());
        } finally {
            \Log::info('End ' . __METHOD__);
        }
        return response()->json($data);
    }

    /**
     * Update Node
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Throwable
     */
    public function updateNode(Request $request)
    {
        $this->nodeMapNodeType = $request->node_type;
        $updateNodeId = $request->node_id;
        $industryCode = $request->industry_code;

        $updateNodeNamespace = "App\\Models\\" . $this->getNodeMapModel();
        $updateNode = $updateNodeNamespace::whereId($updateNodeId)->first();
        $updateNodeParentField = $this->getNodeMapParentField();
        $updateNodeTableName = $this->getNodeMapTable();

        $parentIds = [$updateNode->{$updateNodeParentField}];

        $validator = \Validator::make($request->all(), [
            'description' => [
                'required',
                Rule::unique($updateNodeTableName)->where(function ($query) use ($industryCode, $updateNodeParentField, $parentIds, $updateNodeId) {
                    return $query->where('industry_code', $industryCode)->whereIn($updateNodeParentField, $parentIds)->where('id', '<>', $updateNodeId);
                })
            ],
            'node_type' => 'required|string',
            'node_code' => 'required',
            'industry_code' => 'required',
            'parent_node_id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'msg' => $validator->errors()->first()]);
        }

        try {
            DB::beginTransaction();
            $parentNodeNamespace = "App\\Models\\" . $this->getNodeMapParentModel();
            $parentNode = $parentNodeNamespace::whereId($updateNode->{$updateNodeParentField})->first();

            $childNodeType = $this->getNodeMapNextKey();
            if (!empty($childNodeType)) {
                $childNodeNamespace = "App\\Models\\" . $this->getNodeMapModel($childNodeType);
                $newChildParentField = $this->getNodeMapParentField($childNodeType);
                $childIdArray = $childNodeNamespace::where($this->getNodeMapParentField($childNodeType), $updateNodeId)->pluck('id')->toArray();

                parse_str($request->child_node_id, $output);
                $selectedChildIds = isset($output['child_node_id']) ? $output['child_node_id'] : [];

                $newChildren = (new DynamicNodeView())->setTable($this->getNodeMapTableView($childNodeType))->whereIn('id', array_diff($selectedChildIds, $childIdArray))->get();
                $i = 0;
                $totalCreated = 0;
                $itemCreateData = [];
                $totalChildren = (int)$this->_generateRawCode($childNodeNamespace, $newChildParentField, $updateNodeId);
                foreach ($newChildren as $newChild) {
                    if ($validator = $this->nodeAddFieldValidation([$newChild->description], $this->getNodeMapTable($childNodeType), $newChildParentField, [$updateNodeId])) {
                        $data['childNodeExists'][] = "Child Node '{$newChild->description}' already exists!";
                        continue;
                    }
                    $itemCreateData[] = [
                        $newChildParentField => $updateNodeId,
                        'raw_code' => str_pad($totalChildren, $this->nodeCodeLength, '0', STR_PAD_LEFT),
                        'description' => $newChild->description,
                        'note' => $newChild->note,
                        'replica_id' => (empty($newChild->replica_id) ? $updateNodeId : ($newChild->replica_id . ':' . $updateNodeId)),
                        'created_by' => auth()->id(),
                        'cross_indexed' => $newChild->cross_indexed
                    ];
                    $i++;
                    $totalCreated++;
                    if ($i == 2000) {
                        (new $childNodeNamespace())->insert($itemCreateData);
                        unset($itemCreateData);
                        $itemCreateData = [];
                        $i = 0;
                    }
                    $totalChildren++;
                }
                if (!empty($itemCreateData)) {
                    (new $childNodeNamespace())->insert($itemCreateData);
                }
                $lastNodeId = (new $childNodeNamespace())::max('id');
                $firstNodeId = $lastNodeId - $totalCreated;
                $data['newChildrenNodes'] = (new DynamicNodeView())->setTable($this->getNodeMapTableView($childNodeType))->where('id', '>', $firstNodeId)->get();
                $data['childNodeType'] = $childNodeType;
                $data['childNodeContainer'] = str_replace('-', '_', $childNodeType) . '_node_container';
                $data['childSChildNodeContainer'] = str_replace('-', '_', $this->getNodeMapNextKey($childNodeType)) . '_node_container';

                $deleteChildIds = array_diff($childIdArray, $selectedChildIds);
                if (count($deleteChildIds) > 0) {
                    $data['deletedChildIds'] = $deleteChildIds;
                    $deleteChildren = (new DynamicNodeView())->setTable($this->getNodeMapTableView($childNodeType))->whereIn('id', $deleteChildIds)->get();
                    foreach ($deleteChildren as $deleteChild) {
                        if ((strlen($deleteChild->code) / $this->nodeCodeLength) < 10) {
                            $layerIds = \DB::table($this->getNodeMapTableView('layer'))->where('code', 'like', $deleteChild->code . '%')->pluck('id')->toArray();
                            if ($layerIds) {
                                Layer::whereIn('id', $layerIds)->delete();
                            }
                            unset($layerIds);
                        }
                        $childNodeNamespace->whereId($deleteChild->id)->delete();
                    }
                }
            }

            parse_str($request->parent_node_id, $output);
            $parentIds = $output['parent_node_id'];

            if (count($parentIds) > 1) {
                $itemCreateData = [];
                $i = 0;
                $totalCreated = 0;
                $existingParents = explode(":", $updateNode->replica_id);
                foreach ($parentIds as $parentId) {
                    if (in_array($parentId, $existingParents)) {
                        continue;
                    }
                    if ($validator = $this->nodeAddFieldValidation([$updateNode->description], $this->getNodeMapTable(), $updateNodeParentField, [$parentId])) {
                        $data['nodeExistsInParent'][] = "'{$updateNode->description}' already exists in parent node!";
                        continue;
                    }
                    $itemCreateData[] = [
                        $updateNodeParentField => $parentId,
                        'raw_code' => $this->_generateRawCode($updateNodeNamespace, $updateNodeParentField, $parentId),
                        'description' => $updateNode->description,
                        'note' => $updateNode->note,
                        'replica_id' => (empty($updateNode->replica_id) ? $parentId : ($updateNode->replica_id . ':' . $parentId)),
                        'created_by' => auth()->id(),
                        'cross_indexed' => $updateNode->cross_indexed
                    ];
                    $totalCreated++;
                    $i++;
                    if ($i == 2000) {
                        (new $updateNodeNamespace())->insert($itemCreateData);
                        unset($itemCreateData);
                        $itemCreateData = [];
                        $i = 0;
                    }
                }

                if (!empty($itemCreateData)) {
                    (new $updateNodeNamespace())->insert($itemCreateData);
                }
                $lastNodeId = (new $updateNodeNamespace())::max('id');
                $firstNodeId = $lastNodeId - $totalCreated;
                $data['parentNodeType'] = $this->findNodeMapKeyByModel($this->getNodeMapParentModel());
                $data['nodeContainer'] = str_replace('-', '_', $this->nodeMapNodeType) . '_node_container';
                $data['childNodeContainer'] = str_replace('-', '_', $childNodeType) . '_node_container';
                $data['newSiblings'] = (new DynamicNodeView())->setTable($this->getNodeMapTableView())->where('id', '>', $firstNodeId)->get();
                $data['newSiblingsParentField'] = $updateNodeParentField;
            }

            if ($updateNode->description != $request->description) {
                $updateNode->description = $request->description;
            }
            if ($updateNode->note != $request->note) {
                $updateNode->note = $request->note;
            }
            if (($updateNode->status != $request->status) && $parentNode->status == 1) {
                $updateNode->status = $request->status;
            }
            $updateNode->save();

            //$data['updatedNode'] = $updateNode->refresh();
            $data["updatedNode"] = (new DynamicNodeView())->setTable($this->getNodeMapTableView($request->node_type))->whereId($request->node_id)->first();

            /*total update node add in industry node statistics table*/
            IndustryNodeStatistics::updateOrCreate([
                'industry_id' => $industryCode,
                'created_at' => Carbon::now()->format('Y-m-d'),
            ],
                [
                    'industry_id' => $industryCode,
                    'total_nodes' => $request->total_node,//$this->_industryNodeCount($industryCode),
                    'nodes_edited' => DB::raw("nodes_edited + 1"),
                    'created_at' => Carbon::now()->format('Y-m-d'),
                ]);
            /* end total update node add in industry node statistics table*/

            $data['msg'] = 'Successfully updated!';
            $data['status'] = 'success';
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            logError($e);
            $data['msg'] = 'Operation Failed!';
            $data['status'] = 'error';
        }
        return response()->json($data);
    }

    /**
     * Delete node Method
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function deleteNode(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'node_id' => 'required',
            'node_type' => 'required|string',
            'node_code' => 'required',
            'industry_code' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'msg' => $validator->errors()->first()]);
        }
        try {
            DB::beginTransaction();
            $this->nodeMapNodeType = $request->node_type;
            $targetNodeNameSpace = "App\\Models\\" . $this->getNodeMapModel();
            $targetNodeViewName = $this->getNodeMapTableView();
            $targetNode = (new DynamicNodeView())->setTable($targetNodeViewName)
                ->whereId($request->node_id)->first();

            /*check node exists in media categorization lookup table*/
            $mediaCategorization = MediaCategorizationLookup::with('mediaFile')->where('node_code', 'like', "{$targetNode->code}%")->whereNotNull('media_file_id')->first();
            if(null != $mediaCategorization)
            {
                $lookupNodeModel = CategorizationLevel::find($mediaCategorization->categorization_level_id);
                $itemExistsNodeModel = $this->findNodeMapKeyByModel($lookupNodeModel->name);
                $itemExistsNode = (new DynamicNodeView())->setTable($this->getNodeMapTableView($itemExistsNodeModel))
                    ->whereId($mediaCategorization->node_id)->first();
                $fileType = $mediaCategorization->mediaFile->media_type == 2 ? 'video' : 'audio';
                return response()->json([
                    'status' => 'error',
                    'msg' => "Node '{$itemExistsNode->code} - {$itemExistsNode->description}' has a {$fileType} associated to it, changes to their node are not allowed at this time."]);
            }
            else
            { // if not exists in media categoriation lookup table then check in company categorization lookup table
                $companyCategorization = CompanyCategorizationLookup::where('node_code', 'like', "{$targetNode->code}%")->first();
                if(null != $companyCategorization)
                {
                    return response()->json([
                        'status' => 'error',
                        'msg' => "Node '{$targetNode->code} - {$targetNode->description}' has a company associated to it, changes to their node are not allowed at this time."]);
                }
            }
            $totalDeletedNode = 0;

            if ($request->child_action == 'delete') {
                if ((strlen($targetNode->code) / $this->nodeCodeLength) < 10) {
                    $layerIds = \DB::table($this->getNodeMapTableView('layer'))->where('code', 'like', $targetNode->code . '%')->pluck('id')->toArray();
                    $totalDeletedNode += $this->nodeDeleteCount($targetNode, 'Layer');
                    Layer::whereIn('id', $layerIds)->delete();
                }
            } else {
                $childNodeType = $this->getNodeMapNextKey();
                $childNodeNameSpace = "App\\Models\\" . $this->getNodeMapModel($childNodeType);
                $childNodes = $childNodeNameSpace::where($this->getNodeMapParentField($childNodeType), $targetNode->id)->get();

                $newParentNodeType = $this->findNodeMapKeyByModel($this->getNodeMapParentModel());
                $newParentNamespace = "App\\Models\\" . $this->getNodeMapModel($newParentNodeType);

                $targetNodeParentField = $this->getNodeMapParentField();
                $newParentNodeData = (new DynamicNodeView())->setTable($this->getNodeMapTableView($newParentNodeType))
                    ->whereId($targetNode->{$targetNodeParentField})->first();

                $newChildNodeType = $this->getNodeMapNextKey($newParentNodeType);
                $data['newChildIds'] = [];
                foreach ($childNodes as $childNode) {
                    list($targetNewNodeId, $deleteLayerIds, $totalCreated) = $this->_processDifferentLevelNodeMove($newParentNodeType, $newParentNodeData, $childNodeType, $childNode);
                    \Log::info('deleteLayerIds:' . json_encode($deleteLayerIds));
                    if ($deleteLayerIds) {
                        Layer::whereIn('id', $deleteLayerIds)->delete();
                    }
                    $childNode->delete();
                    $data['newChildNodes'][] = (new DynamicNodeView())->setTable($this->getNodeMapTableView($newChildNodeType))
                        ->whereId($targetNewNodeId)->first();
                    $data['newChildIds'][] = $targetNewNodeId;
                }

                $data['newChildType'] = $this->getNodeMapNextKey($newChildNodeType);
                $data['childNodeContainer'] = str_replace('-', '_', $data['newChildType']) . '_node_container';
                $data['node_type'] = $newChildNodeType;
                $data['targetContainer'] = str_replace('-', '_', $newChildNodeType) . "_node_container_{$newParentNodeData->id}";
            }

            /* update if replica exists */
            $currentReplica = $targetNode->replica_id;

            $this->_updateReplica($targetNodeNameSpace, $currentReplica, $this->getNodeMapParentField());
            $totalDeletedNode += $this->nodeDeleteCount($targetNode, $this->getNodeMapModel());
            $targetNodeNameSpace::whereId($targetNode->id)->delete();

            /*total deleted node add in industry node statistics table*/
            $totalDeletedNode += $this->nodeDeleteCount($targetNode, $this->getNodeMapModel());

            IndustryNodeStatistics::updateOrCreate([
                'industry_id' => $request->industry_code,
                'created_at' => Carbon::now()->format('Y-m-d'),
            ],
                [
                    'industry_id' => $request->industry_code,
                    'total_nodes' => ($request->total_node - $totalDeletedNode),//$this->_industryNodeCount($request->industry_code),
                    'nodes_deleted' => DB::raw("nodes_deleted + {$totalDeletedNode}"),
                    'created_at' => Carbon::now()->format('Y-m-d'),
                ]);
            /* end total deleted node add in industry node statistics table*/

            $data['msg'] = "Node {$targetNode->description} Successfully deleted!";
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

    /**
     * Search Node Tree
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function nodeTreeSearch(Request $request)
    {
        try {
            $this->nodeMapNodeType = $request->node_type;
            $parentNodeCode = substr($request->node_code, 0, ($this->nodeCodeLength * -1));

            $data = (new DynamicNodeView())->searchNodes($this->nodeMap, $request, $parentNodeCode);
        } catch (QueryException $qe) {
            $data['msg'] = $qe->getMessage();
            $data['status'] = 'error';
        } catch (\Exception $e) {
            $data['msg'] = $e->getMessage();
            $data['status'] = 'error';
            $data['details'] = $e->getFile() . ":" . $e->getLine();
        }

        return response()->json($data);
    }

    public function getNodeRelatedData(Request $request)
    {
        $industry = Industry::with(['sector.subSector.group.subGroup.echelon.subEchelon.tier.subTier.layer.subLayer.deck.subDeck.floor.subFloor.basement.subBasement.mine.subMine'])->find($request->industry_id);

        $totalSubMine = $industry->subMine()->count();
        $totalMine = $industry->mine()->count();
        $totalSubBasement = $industry->subBasement()->count();
        $totalBasement = $industry->basement()->count();
        $totalsubFloor = $industry->subFloor()->count();
        $totalFloor = $industry->floor()->count();
        $totalsubDeck = $industry->subDeck()->count();
        $totaldeck = $industry->deck()->count();
        $totalsubLayer = $industry->subLayer()->count();
        $totalLayer = $industry->Layer()->count();
        $totalsubTier = $industry->subTier()->count();
        $totaltier = $industry->tier()->count();
        $totalsubEchelon = $industry->subEchelon()->count();
        $totalechelon = $industry->echelon()->count();
        $totalsubGroup = $industry->subGroup()->count();
        $totalgroup = $industry->group()->count();
        $totalsubSector = $industry->subSector()->count();
        $totalsector = $industry->sector()->count();

        $nodeBackground = '';
        $backgroundColorArray = [
            '#D4AF37',
            '#C0C0C0',
            '#b08d57',
            '#43bbea',
            '#76c9ea',
            '#008080',
            '#4DBDBD',
            '#FFA500',
            '#FF8C00',
            '#00ff00',
            '#80ff79',
            '#abc41e',
            '#d3e762',
            '#9fa6ec',
            '#caceee',
            '#bf3cb8',
            '#c981c4',
            '#ea2e70',
            '#fa699c',
        ];

        if ($totalSubMine > 0) {
            $nodeBackground = $this->nodeBackgroundColor(array_slice($backgroundColorArray, 0, 19), $nodeBackground);
        } elseif ($totalMine > 0) {
            $nodeBackground = $this->nodeBackgroundColor(array_slice($backgroundColorArray, 0, 18), $nodeBackground);
        } elseif ($totalSubBasement > 0) {
            $nodeBackground = $this->nodeBackgroundColor(array_slice($backgroundColorArray, 0, 17), $nodeBackground);
        } elseif ($totalBasement > 0) {
            $nodeBackground = $this->nodeBackgroundColor(array_slice($backgroundColorArray, 0, 16), $nodeBackground);
        } elseif ($totalsubFloor > 0) {
            $nodeBackground = $this->nodeBackgroundColor(array_slice($backgroundColorArray, 0, 15), $nodeBackground);
        } elseif ($totalFloor > 0) {
            $nodeBackground = $this->nodeBackgroundColor(array_slice($backgroundColorArray, 0, 14), $nodeBackground);
        } elseif ($totalsubDeck > 0) {
            $nodeBackground = $this->nodeBackgroundColor(array_slice($backgroundColorArray, 0, 13), $nodeBackground);
        } elseif ($totaldeck > 0) {
            $nodeBackground = $this->nodeBackgroundColor(array_slice($backgroundColorArray, 0, 12), $nodeBackground);
        } elseif ($totalsubLayer > 0) {
            $nodeBackground = $this->nodeBackgroundColor(array_slice($backgroundColorArray, 0, 11), $nodeBackground);
        } elseif ($totalLayer > 0) {
            $nodeBackground = $this->nodeBackgroundColor(array_slice($backgroundColorArray, 0, 10), $nodeBackground);
            //$nodeBackground = "#007bff 11%, #95d0ff 11% 22%, #5cb0a8 22% 33%, #00ff00 33% 44%, #ede27b 44% 55%, #917d42 55% 66%, #c6a3df 66% 77%, #f37c56 77% 89%, #8bc645 89%";
        } elseif ($totalsubTier > 0) {
            $nodeBackground = $this->nodeBackgroundColor(array_slice($backgroundColorArray, 0, 9), $nodeBackground);
            //$nodeBackground = "#007bff 11%, #95d0ff 11% 22%, #5cb0a8 22% 33%, #00ff00 33% 44%, #ede27b 44% 55%, #917d42 55% 66%, #c6a3df 66% 77%, #f37c56 77% 89%, #8bc645 89%";
        } elseif ($totaltier > 0) {
            $nodeBackground = $this->nodeBackgroundColor(array_slice($backgroundColorArray, 0, 8), $nodeBackground);
            // $nodeBackground = "#007bff 12%, #95d0ff 12% 25%, #5cb0a8 25% 38%, #00ff00 38% 50%, #ede27b 50% 62%, #917d42 62% 75%, #c6a3df 75% 88%, #f37c56 88%";
        } elseif ($totalsubEchelon > 0) {
            $nodeBackground = $this->nodeBackgroundColor(array_slice($backgroundColorArray, 0, 7), $nodeBackground);
            //$nodeBackground = "#007bff 14%, #95d0ff 14% 29%, #5cb0a8 29% 44%, #00ff00 44% 58%, #ede27b 58% 72%, #917d42 72% 86%, #c6a3df 86%";
        } elseif ($totalechelon > 0) {
            $nodeBackground = $this->nodeBackgroundColor(array_slice($backgroundColorArray, 0, 6), $nodeBackground);
            //$nodeBackground = "#007bff 16%, #95d0ff 16% 33%, #5cb0a8 33% 50%, #00ff00 50% 68%, #ede27b 68% 84%, #917d42 84%";
        } elseif ($totalsubGroup > 0) {
            $nodeBackground = $this->nodeBackgroundColor(array_slice($backgroundColorArray, 0, 5), $nodeBackground);
            //$nodeBackground = "#007bff 20%, #95d0ff 20% 40%, #5cb0a8 40% 60%, #00ff00 60% 80%, #ede27b 80%";
        } elseif ($totalgroup > 0) {
            $nodeBackground = $this->nodeBackgroundColor(array_slice($backgroundColorArray, 0, 4), $nodeBackground);
            //$nodeBackground = "#007bff 25%, #95d0ff 25% 50%, #5cb0a8 50% 75%, #00ff00 75%";
        } elseif ($totalsubSector > 0) {
            $nodeBackground = $this->nodeBackgroundColor(array_slice($backgroundColorArray, 0, 3), $nodeBackground);
            //$nodeBackground = "#007bff 33%, #95d0ff 33% 66%, #5cb0a8 66%";
        } elseif ($totalsector > 0) {
            $nodeBackground = $this->nodeBackgroundColor(array_slice($backgroundColorArray, 0, 2), $nodeBackground);
            //$nodeBackground = "#007bff 50%, #95d0ff 50%";
        }

        $totalNodeCount = 1 + $totalsector + $totalsubSector + $totalgroup + $totalsubGroup + $totalechelon + $totalsubEchelon
            + $totaltier + $totalsubTier + $totalLayer + $totalsubLayer + $totaldeck + $totalsubDeck + $totalFloor + $totalsubFloor
            + $totalBasement + $totalSubBasement + $totalMine + $totalSubMine;

        $data['status'] = 'success';
        $data['totalNodeCount'] = $totalNodeCount;
        $data['nodeBackground'] = $nodeBackground;
        return response()->json($data);
    }

    /**
     * Get Child Node
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getChildNode(Request $request)
    {
        $this->nodeMapNodeType = $request->type;
        $childType = $this->nodeMapNodeType ? $this->getNodeMapNextKey() : '';
        $childNodeContainer = str_replace('-', '_', $childType) . '_node_container';
        $data['parent_field'] = $this->nodeMapNodeType ? $this->getNodeMapParentField() : '';

        $data['nodeItems'] = (new DynamicNodeView())->setTable($this->getNodeMapTableView())
            ->select('id', $data['parent_field'], 'note', 'status', 'description', 'cross_indexed', 'node_warp', 'code')
            ->whereIn($data['parent_field'], json_decode(stripslashes($request->child_node_ids)))
            ->get();

        $data['type'] = $this->nodeMapNodeType;
        $data['childType'] = $childType;
        $data['targetParentNodeContainer'] = str_replace('-', '_', $this->nodeMapNodeType) . "_node_container_";
        $data['childNodeContainer'] = $childNodeContainer;
        $data['status'] = 'success';
        $data['nextChildNodeIds'] = $data['nodeItems']->pluck('id')->toArray();
        return response()->json($data);
    }

    /**
     * Get Node Add or Edit Data
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Throwable
     */
    public function getNodeEditData(Request $request)
    {
        \Log::info('Start ' . __METHOD__);
        try {
            $nodeType = $this->nodeMapNodeType = $request->node_type;
            $industryId = $request->industry_id;
            $industry = Industry::findOrFail($industryId);

            if ($nodeType == 'sector') {
                $parentAssoc = 1;
            } else {
                $parentAssoc = (new DynamicNodeView())->setTable($this->getNodeMapTableView($this->findNodeMapKeyByModel($this->getNodeMapParentModel())))
                    ->where('code', 'LIKE', $industry->code . '%')
                    ->getAssoc();
            }

            if ($request->action && $request->action == 'create') {
                $addClass = 'create-node';
                $title = 'Add New ' . implode(' ', array_map('ucfirst', explode('-', $this->nodeMapNodeType)));
                $fieldName = 'parent_ids'; //$this->getNodeMapParentField();
                $data['html'] = view('admin.industry._node_add_ajax_modal', compact('addClass', 'title', 'parentAssoc', 'fieldName', 'industryId', 'nodeType'))->render();
            } else {
                $item = (new DynamicNodeView())->setTable($this->getNodeMapTableView())->select('id', 'code', 'description', 'note', 'status', 'replica_id')->find($request->id);

                if ($nodeType == 'sub-mine') {
                    $childAssoc = 1;
                    $selectedChildAssoc = false;
                } else {
                    $childModelNameSpace = "App\\Models\\" . $this->getNodeMapModel($this->getNodeMapNextKey());
                    $childMParentFieldName = $this->getNodeMapParentField($this->getNodeMapNextKey());
                    $selectedChildAssoc = $childModelNameSpace::where($childMParentFieldName, $item->id)->pluck('id')->toArray();

                    $childAssoc = (new DynamicNodeView())->setTable($this->getNodeMapTableView($this->getNodeMapNextKey()))->where('code', 'LIKE', $industry->code . '%')->getAssoc();
                }
                /*Get all US states*/
                $states = State::whereCountryId(1)->active()->get(['name', 'id'])->toArray();
                /*Get Issuer Information*/
                $issuerList = [];
                $issuerList = $this->getIssuerListData($nodeType, $industryId, $request->id);

                $data['html'] = view('admin.industry._content_edit_modal', compact('item', 'industryId', 'childAssoc', 'selectedChildAssoc', 'parentAssoc', 'nodeType', 'states', 'issuerList'))->render();
            }

            $data['status'] = 'success';
        } catch (\Exception $e) {
            $data['msg'] = env('APP_ENV') == 'locaal' ? $e->getMessage() : 'Failed to load data!';
            $data['status'] = 'error';
            \Log::error($e->getFile() . ':' . $e->getLine() . ' ' . $e->getMessage());
        } finally {
            \Log::info('End ' . __METHOD__);
        }
        return response()->json($data);
    }

    /**
     * Get Child Node List
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Throwable
     */
    public function getChildNodeData(Request $request)
    {
        $this->nodeMapNodeType = $noteType = $request->node_type;
        $industryId = $request->industry_id;

        $item = (new DynamicNodeView())->setTable($this->getNodeMapTableView())->whereId($request->node_id)->first();

        $childNodeType = $this->getNodeMapNextKey();
        $childAssoc = (new DynamicNodeView())->setTable($this->getNodeMapTableView($childNodeType))
            ->where($this->getNodeMapParentField($childNodeType), $item['id'])->getAssoc();

        $data['html'] = view('admin.industry._child_content_copy_modal', compact('item', 'industryId', 'childAssoc', 'noteType'))->render();

        $data['status'] = 'success';
        return response()->json($data);
    }

    public function getIssuerListData($nodeType, $IndustryId, $nodeId)
    {
        $nodeModel = $this->getNodeMapModel($nodeType);
        $categorizationLevelId = CategorizationLevel::whereName($nodeModel)->first('id')->id;
        $data = CompanyCategorizationLookup::leftJoin('companies', 'company_categorization_lookups.company_id', '=', 'companies.id')
            ->leftJoin('headquarters', 'headquarters.company_id', '=', 'companies.id')
            ->leftJoin('addresses', 'headquarters.address_id', '=', 'addresses.id')
            ->leftJoin('states', 'addresses.state_id', '=', 'states.id')
            ->where(['company_categorization_lookups.industry_id' => $IndustryId, 'company_categorization_lookups.node_id' => $nodeId, 'company_categorization_lookups.categorization_level_id' => $categorizationLevelId, 'company_categorization_lookups.taxonomy_type' => 'Issuer'])
            ->select('company_categorization_lookups.id as lookupId', 'companies.name as company', 'addresses.city', 'addresses.zip', 'addresses.street_address_one as street_address', 'states.name as state', 'states.id as stateId')->get()->toArray();
        return $data;
    }

    public function getCrossIndexListData(Request $request)
    {
        $NodeType = str_replace('-', '', ucwords(Str::slug($request->node_type), '-'));
        $NodeModelName = "App\\Models\\$NodeType";
        $mainNodeItem = $NodeModelName::whereId($request->node_id)->first();
        $categorizationlevel = CategorizationLevel::pluck('name', 'id')->toArray();
        $Nodecrossed = CrossIndex::where('node_one_id', $mainNodeItem->id)->get();
        $NodeCrossedList = [];
        foreach ($Nodecrossed as $key => $value) {
            $levelTwoName = $categorizationlevel[$value->node_two_categorization_level_id];
            $NodeModelNameCrossNode = "App\\Models\\$levelTwoName";
            if($levelTwoName == "Industry"){
                $nodeItem = $NodeModelNameCrossNode::whereId($value->node_two_id)->first(['code', 'description']);
                if ($nodeItem != null) {
                    $NodeCrossedList[] = [
                        'crossed_id' => $value->id,
                        'industry_name' => $nodeItem->description,
                        'node_name' => $nodeItem->description,
                        'node_level' => $levelTwoName
                    ];
                }
            }else{
                $nodeItem = $NodeModelNameCrossNode::whereId($value->node_two_id)->first(['industry_code', 'code', 'description']);
                if ($nodeItem != null) {
                    $industry = Industry::whereCode($nodeItem->industry_code)->first(['description']);
                    $NodeCrossedList[] = [
                        'crossed_id' => $value->id,
                        'industry_name' => $industry->description,
                        'node_name' => $nodeItem->description,
                        'node_level' => $levelTwoName
                    ];
                }
            }
        }
        $NodecrossedInSecond = CrossIndex::where('node_two_id', $mainNodeItem->id)->get();
        foreach ($NodecrossedInSecond as $key => $value_two) {
            $levelOneName = $categorizationlevel[$value_two->node_one_categorization_level_id];
            $NodeOneModelName = "App\\Models\\$levelOneName";
            $nodeOneItem = $NodeOneModelName::whereId($value_two->node_one_id)->first(['industry_code', 'code', 'description']);
            if ($nodeOneItem != null) {
                $industryOne = Industry::whereCode($nodeOneItem->industry_code)->first(['description']);
                $NodeCrossedList[] = [
                    'crossed_id' => $value_two->id,
                    'industry_name' => $industryOne->description,
                    'node_name' => $nodeOneItem->description,
                    'node_level' => $levelOneName
                ];
            }
        }

        $data['html'] = view('admin.industry._content_cross_list', compact('NodeCrossedList'))->render();
        $data['status'] = 'success';
        return response()->json($data);
    }

    public function getNodeWarpListData(Request $request)
    {
        $NodeType = str_replace('-', '', ucwords(Str::slug($request->node_type), '-'));
        $NodeModelName = "App\\Models\\$NodeType";
        $mainNodeItem = $NodeModelName::whereId($request->node_id)->first();
        $categorizationLevel = CategorizationLevel::pluck('name', 'id')->toArray();
        $NodeWarp = NodeWarp::where('source_node_id', $mainNodeItem->id)->get();
        $NodeWarpList = [];
        foreach ($NodeWarp as $key => $value) {
            $levelDestinationName = $categorizationLevel[$value->destination_node_categorization_level_id];
            $NodeModelNameWarpNode = "App\\Models\\$levelDestinationName";
            if ($levelDestinationName == 'Industry') {
                $nodeItem = $NodeModelNameWarpNode::whereId($value->destination_node_id)->first(['code', 'description']);
            } else {
                $nodeItem = $NodeModelNameWarpNode::whereId($value->destination_node_id)->first(['industry_code', 'code', 'description']);
            }
            if ($nodeItem != null) {
                if ($levelDestinationName != 'Industry') {
                    $industry = Industry::whereCode($nodeItem->industry_code)->first(['description']);
                }
                $NodeWarpList[] = [
                    'warp_id' => $value->id,
                    'direction' => 'warp_to',
                    'industry_name' => ($levelDestinationName == 'Industry') ? $nodeItem->description : $industry->description,
                    'node_name' => $nodeItem->description,
                    'node_level' => $levelDestinationName
                ];
            }
        }
        $NodeWarpInSecond = NodeWarp::where('destination_node_id', $mainNodeItem->id)->get();
        foreach ($NodeWarpInSecond as $key => $value_two) {
            $levelOneName = $categorizationLevel[$value_two->source_node_categorization_level_id];
            $NodeOneModelName = "App\\Models\\$levelOneName";
            if ($levelOneName == 'Industry') {
                $nodeOneItem = $NodeOneModelName::whereId($value_two->source_node_id)->first(['code', 'description']);
            } else {
                $nodeOneItem = $NodeOneModelName::whereId($value_two->source_node_id)->first(['industry_code', 'code', 'description']);
            }
            if ($nodeOneItem != null) {
                if ($levelOneName != 'Industry') {
                    $industryOne = Industry::whereCode($nodeOneItem->industry_code)->first(['description']);
                }
                $NodeWarpList[] = [
                    'warp_id' => $value_two->id,
                    'direction' => 'warp_from',
                    'industry_name' => ($levelOneName == 'Industry') ? $nodeOneItem->description : $industryOne->description,
                    'node_name' => $nodeOneItem->description,
                    'node_level' => $levelOneName
                ];
            }
        }

        $data['html'] = view('admin.industry._content_node_warp_list', compact('NodeWarpList'))->render();
        $data['status'] = 'success';
        return response()->json($data);
    }

    public function deleteCrossIndex(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'deleteId' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'msg' => $validator->errors()->first()]);
        }
        try {
            $item = CrossIndex::whereId($request->deleteId)->first();
            $categorizationlevel = CategorizationLevel::pluck('name', 'id')->toArray();
            /*
             * Make cross indexed flag false for node one
             */
            $firstNodeModelName = "App\\Models\\" . $categorizationlevel[$item->node_one_categorization_level_id];
            $crossedFlagOne = $firstNodeModelName::findOrFail($item->node_one_id);
            /*Check If have crossed with other Nodes For node one*/
            $existNodeOneCrossed = CrossIndex::where('id', '!=', $request->deleteId);
            $existNodeOneCrossed->where(function ($query) use ($item) {
                $query->where('node_one_id', $item->node_one_id)
                    ->orWhere('node_two_id', $item->node_one_id);
            })->exists();
            if ($existNodeOneCrossed->exists() == 0) {
                $crossedFlagOne->cross_indexed = 0;
                $crossedFlagOne->save();
            }
            /*
             * Make cross indexed flag false for node two
             */
            $secondNodeModelName = "App\\Models\\" . $categorizationlevel[$item->node_two_categorization_level_id];
            $crossedFlagTwo = $secondNodeModelName::findOrFail($item->node_two_id);
            /*Check If have crossed with other Nodes For node Two*/
            $existNodeTwoCrossed = CrossIndex::where('id', '!=', $request->deleteId);
            $existNodeTwoCrossed->where(function ($query) use ($item) {
                $query->where('node_one_id', $item->node_two_id)
                    ->orWhere('node_two_id', $item->node_two_id);
            })->exists();
            if ($existNodeTwoCrossed->exists() == 0) {
                $crossedFlagTwo->cross_indexed = 0;
                $crossedFlagTwo->save();
            }
            $data['updatedNode'] = (new DynamicNodeView())->setTable($this->getNodeMapTableView($this->findNodeMapKeyByModel($categorizationlevel[$item->node_one_categorization_level_id])))
                ->whereId($item->node_one_id)->first();
            if ($crossedFlagOne->industry_code == $crossedFlagTwo->industry_code) {
                $data['crossNodeType'] = $this->findNodeMapKeyByModel($categorizationlevel[$item->node_two_categorization_level_id]);
                $data['crossData'] = (new DynamicNodeView())->setTable($this->getNodeMapTableView($data['crossNodeType']))->whereId($crossedFlagTwo->id)->first();
            }
            /*Delete cross index lookup table Data row */
            $item->delete();
            $data['msg'] = 'Successfully deleted!';
            $data['status'] = 'success';
        } catch (QueryException $qe) {
            $data['msg'] = $qe->getMessage();
            $data['status'] = 'error';
        } catch (\Exception $e) {
            $data['msg'] = $e->getMessage();
            $data['status'] = 'error';
        }
        return response()->json($data);
    }

    public function deleteNodeWarp(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'deleteId' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'msg' => $validator->errors()->first()]);
        }
        try {
            $item = NodeWarp::whereId($request->deleteId)->first();
            $categorizationLevel = CategorizationLevel::pluck('name', 'id')->toArray();
            /*
             * Make node warp flag false for node one
             */
            $firstNodeModelName = "App\\Models\\" . $categorizationLevel[$item->source_node_categorization_level_id];
            $warpFlagSource = $firstNodeModelName::findOrFail($item->source_node_id);
            /*Check If have warp with other Nodes For source node*/
            $existNodeOneWarp = NodeWarp::where('id', '!=', $request->deleteId);
            $existNodeOneWarp->where(function ($query) use ($item) {
                $query->where('source_node_id', $item->source_node_id)
                    ->orWhere('destination_node_id', $item->source_node_id);
            })->exists();
            if ($existNodeOneWarp->exists() == 0) {
                $warpFlagSource->node_warp = 0;
                $warpFlagSource->save();
            }
            /*
             * Make node warp flag false for node two
             */
            $secondNodeModelName = "App\\Models\\" . $categorizationLevel[$item->destination_node_categorization_level_id];
            $warpFlagDestination = $secondNodeModelName::findOrFail($item->destination_node_id);
            /*Check If have warp with other Nodes For destination node*/
            $existNodeTwoWarp = NodeWarp::where('id', '!=', $request->deleteId);
            $existNodeTwoWarp->where(function ($query) use ($item) {
                $query->where('source_node_id', $item->destination_node_id)
                    ->orWhere('destination_node_id', $item->destination_node_id);
            })->exists();
            if ($existNodeTwoWarp->exists() == 0) {
                $warpFlagDestination->node_warp = 0;
                $warpFlagDestination->save();
            }
            $data['updatedNode'] = (new DynamicNodeView())->setTable($this->getNodeMapTableView($this->findNodeMapKeyByModel($categorizationLevel[$item->source_node_categorization_level_id])))
                ->whereId($item->source_node_id)->first();
            if ($warpFlagSource->industry_code == $warpFlagDestination->industry_code) {
                $data['crossNodeType'] = $this->findNodeMapKeyByModel($categorizationLevel[$item->destination_node_categorization_level_id]);
                $data['crossData'] = (new DynamicNodeView())->setTable($this->getNodeMapTableView($data['crossNodeType']))->whereId($warpFlagDestination->id)->first();
            }
            /*Delete node warp lookup table Data row */
            $item->delete();
            $data['msg'] = 'Successfully node warp deleted!';
            $data['status'] = 'success';
        } catch (QueryException $qe) {
            $data['msg'] = $qe->getMessage();
            $data['status'] = 'error';
        } catch (\Exception $e) {
            $data['msg'] = $e->getMessage();
            $data['status'] = 'error';
        }
        return response()->json($data);
    }

    private function nodeBackgroundColor(array $backgroundColorArray, string $nodeBackground): string
    {
        $percentage = 100 / count($backgroundColorArray);

        $i = 0;
        $len = count($backgroundColorArray);
        $startPercentage = $percentage;
        foreach ($backgroundColorArray as $backgroundColor) {
            $endPercentage = $startPercentage + $percentage;
            if ($i == 0) {
                $nodeBackground .= "$backgroundColor $startPercentage%, ";
            } else if ($i == $len - 1) {
                $startPercentage += 1;
                $nodeBackground .= "$backgroundColor $startPercentage%";
            } else {
                $nodeBackground .= "$backgroundColor $startPercentage% $endPercentage%, ";
                $startPercentage = $endPercentage;
            }
            $i++;
        }
        return $nodeBackground;
    }

    private function updateOperation($model, $request, $parentModel, $parent_field)
    {
        $item = $model->whereCode($request->node_code)->Where('industry_code', $request->industry_code)->first();
        $result['description_change'] = false;
        $result['node_change'] = false;
        $result['status_change'] = false;

        parse_str($request->parent_node_id, $parent_node_array);
        $replica_id = implode(':', $parent_node_array['parent_node_id']);
        if ($item->replica_id != $replica_id) {
            $old_parent_id = explode(':', $item->replica_id);
            $new_parent_id = $parent_node_array['parent_node_id'];
            $attach = array_diff($new_parent_id, $old_parent_id);
            $detach = array_diff($old_parent_id, $new_parent_id);

            $updateReplica = false;
            //code for add new replica
            if (count($attach)) {
                foreach ($attach as $parentNodeId) {
                    $child_replica_id = '';
                    $parentNode = $parentModel->find($parentNodeId);
                    $createData = [
                        "$parent_field" => $parentNode->id,
                        'industry_code' => $parentNode->industry_code,
                        'description' => $request->description,
                        'note' => $request->note,
                        'replica_id' => $replica_id,
                        'status' => 1,
                        'created_by' => auth()->id(),
                    ];

                    if ($request->node_type == 'sub-mine') {
                        $createData['sector_code'] = $parentNode->sector_code;
                        $createData['sub_sector_code'] = $parentNode->sub_sector_code;
                        $createData['group_code'] = $parentNode->group_code;
                        $createData['sub_group_code'] = $parentNode->sub_group_code;
                        $createData['echelon_code'] = $parentNode->echelon_code;
                        $createData['sub_echelon_code'] = $parentNode->sub_echelon_code;
                        $createData['tier_code'] = $parentNode->tier_code;
                        $createData['sub_tier_code'] = $parentNode->sub_tier_code;
                        $createData['layer_code'] = $parentNode->layer_code;
                        $createData['sub_layer_code'] = $parentNode->sub_layer_code;
                        $createData['deck_code'] = $parentNode->deck_code;
                        $createData['sub_deck_code'] = $parentNode->sub_deck_code;
                        $createData['floor_code'] = $parentNode->floor_code;
                        $createData['sub_floor_code'] = $parentNode->sub_floor_code;
                        $createData['basement_code'] = $parentNode->basement_code;
                        $createData['sub_basement_code'] = $parentNode->mine_code;
                        $createData['mine_code'] = $parentNode->code;
                    } elseif ($request->node_type == 'mine') {
                        $createData['sector_code'] = $parentNode->sector_code;
                        $createData['sub_sector_code'] = $parentNode->sub_sector_code;
                        $createData['group_code'] = $parentNode->group_code;
                        $createData['sub_group_code'] = $parentNode->sub_group_code;
                        $createData['echelon_code'] = $parentNode->echelon_code;
                        $createData['sub_echelon_code'] = $parentNode->sub_echelon_code;
                        $createData['tier_code'] = $parentNode->tier_code;
                        $createData['sub_tier_code'] = $parentNode->sub_tier_code;
                        $createData['layer_code'] = $parentNode->layer_code;
                        $createData['sub_layer_code'] = $parentNode->sub_layer_code;
                        $createData['deck_code'] = $parentNode->deck_code;
                        $createData['sub_deck_code'] = $parentNode->sub_deck_code;
                        $createData['floor_code'] = $parentNode->floor_code;
                        $createData['sub_floor_code'] = $parentNode->sub_floor_code;
                        $createData['basement_code'] = $parentNode->basement_code;
                        $createData['sub_basement_code'] = $parentNode->code;
                    } elseif ($request->node_type == 'sub-basement') {
                        $createData['sector_code'] = $parentNode->sector_code;
                        $createData['sub_sector_code'] = $parentNode->sub_sector_code;
                        $createData['group_code'] = $parentNode->group_code;
                        $createData['sub_group_code'] = $parentNode->sub_group_code;
                        $createData['echelon_code'] = $parentNode->echelon_code;
                        $createData['sub_echelon_code'] = $parentNode->sub_echelon_code;
                        $createData['tier_code'] = $parentNode->tier_code;
                        $createData['sub_tier_code'] = $parentNode->sub_tier_code;
                        $createData['layer_code'] = $parentNode->layer_code;
                        $createData['sub_layer_code'] = $parentNode->sub_layer_code;
                        $createData['deck_code'] = $parentNode->deck_code;
                        $createData['sub_deck_code'] = $parentNode->sub_deck_code;
                        $createData['floor_code'] = $parentNode->floor_code;
                        $createData['sub_floor_code'] = $parentNode->sub_floor_code;
                        $createData['basement_code'] = $parentNode->code;
                    } elseif ($request->node_type == 'basement') {
                        $createData['sector_code'] = $parentNode->sector_code;
                        $createData['sub_sector_code'] = $parentNode->sub_sector_code;
                        $createData['group_code'] = $parentNode->group_code;
                        $createData['sub_group_code'] = $parentNode->sub_group_code;
                        $createData['echelon_code'] = $parentNode->echelon_code;
                        $createData['sub_echelon_code'] = $parentNode->sub_echelon_code;
                        $createData['tier_code'] = $parentNode->tier_code;
                        $createData['sub_tier_code'] = $parentNode->sub_tier_code;
                        $createData['layer_code'] = $parentNode->layer_code;
                        $createData['sub_layer_code'] = $parentNode->sub_layer_code;
                        $createData['deck_code'] = $parentNode->deck_code;
                        $createData['sub_deck_code'] = $parentNode->sub_deck_code;
                        $createData['floor_code'] = $parentNode->floor_code;
                        $createData['sub_floor_code'] = $parentNode->code;
                    } elseif ($request->node_type == 'sub-floor') {
                        $createData['sector_code'] = $parentNode->sector_code;
                        $createData['sub_sector_code'] = $parentNode->sub_sector_code;
                        $createData['group_code'] = $parentNode->group_code;
                        $createData['sub_group_code'] = $parentNode->sub_group_code;
                        $createData['echelon_code'] = $parentNode->echelon_code;
                        $createData['sub_echelon_code'] = $parentNode->sub_echelon_code;
                        $createData['tier_code'] = $parentNode->tier_code;
                        $createData['sub_tier_code'] = $parentNode->sub_tier_code;
                        $createData['layer_code'] = $parentNode->layer_code;
                        $createData['sub_layer_code'] = $parentNode->sub_layer_code;
                        $createData['deck_code'] = $parentNode->deck_code;
                        $createData['sub_deck_code'] = $parentNode->sub_deck_code;
                        $createData['floor_code'] = $parentNode->code;
                    } elseif ($request->node_type == 'floor') {
                        $createData['sector_code'] = $parentNode->sector_code;
                        $createData['sub_sector_code'] = $parentNode->sub_sector_code;
                        $createData['group_code'] = $parentNode->group_code;
                        $createData['sub_group_code'] = $parentNode->sub_group_code;
                        $createData['echelon_code'] = $parentNode->echelon_code;
                        $createData['sub_echelon_code'] = $parentNode->sub_echelon_code;
                        $createData['tier_code'] = $parentNode->tier_code;
                        $createData['sub_tier_code'] = $parentNode->sub_tier_code;
                        $createData['layer_code'] = $parentNode->layer_code;
                        $createData['sub_layer_code'] = $parentNode->sub_layer_code;
                        $createData['deck_code'] = $parentNode->deck_code;
                        $createData['sub_deck_code'] = $parentNode->code;
                    } elseif ($request->node_type == 'sub-deck') {
                        $createData['sector_code'] = $parentNode->sector_code;
                        $createData['sub_sector_code'] = $parentNode->sub_sector_code;
                        $createData['group_code'] = $parentNode->group_code;
                        $createData['sub_group_code'] = $parentNode->sub_group_code;
                        $createData['echelon_code'] = $parentNode->echelon_code;
                        $createData['sub_echelon_code'] = $parentNode->sub_echelon_code;
                        $createData['tier_code'] = $parentNode->tier_code;
                        $createData['sub_tier_code'] = $parentNode->sub_tier_code;
                        $createData['layer_code'] = $parentNode->layer_code;
                        $createData['sub_layer_code'] = $parentNode->sub_layer_code;
                        $createData['deck_code'] = $parentNode->code;
                    } elseif ($request->node_type == 'deck') {
                        $createData['sector_code'] = $parentNode->sector_code;
                        $createData['sub_sector_code'] = $parentNode->sub_sector_code;
                        $createData['group_code'] = $parentNode->group_code;
                        $createData['sub_group_code'] = $parentNode->sub_group_code;
                        $createData['echelon_code'] = $parentNode->echelon_code;
                        $createData['sub_echelon_code'] = $parentNode->sub_echelon_code;
                        $createData['tier_code'] = $parentNode->tier_code;
                        $createData['sub_tier_code'] = $parentNode->sub_tier_code;
                        $createData['layer_code'] = $parentNode->layer_code;
                        $createData['sub_layer_code'] = $parentNode->code;
                    } elseif ($request->node_type == 'sub-layer') {
                        $createData['sector_code'] = $parentNode->sector_code;
                        $createData['sub_sector_code'] = $parentNode->sub_sector_code;
                        $createData['group_code'] = $parentNode->group_code;
                        $createData['sub_group_code'] = $parentNode->sub_group_code;
                        $createData['echelon_code'] = $parentNode->echelon_code;
                        $createData['sub_echelon_code'] = $parentNode->sub_echelon_code;
                        $createData['tier_code'] = $parentNode->tier_code;
                        $createData['sub_tier_code'] = $parentNode->sub_tier_code;
                        $createData['layer_code'] = $parentNode->code;
                    } elseif ($request->node_type == 'layer') {
                        $createData['sector_code'] = $parentNode->sector_code;
                        $createData['sub_sector_code'] = $parentNode->sub_sector_code;
                        $createData['group_code'] = $parentNode->group_code;
                        $createData['sub_group_code'] = $parentNode->sub_group_code;
                        $createData['echelon_code'] = $parentNode->echelon_code;
                        $createData['sub_echelon_code'] = $parentNode->sub_echelon_code;
                        $createData['tier_code'] = $parentNode->tier_code;
                        $createData['sub_tier_code'] = $parentNode->code;
                    } elseif ($request->node_type == 'sub-tier') {
                        $createData['sector_code'] = $parentNode->sector_code;
                        $createData['sub_sector_code'] = $parentNode->sub_sector_code;
                        $createData['group_code'] = $parentNode->group_code;
                        $createData['sub_group_code'] = $parentNode->sub_group_code;
                        $createData['echelon_code'] = $parentNode->echelon_code;
                        $createData['sub_echelon_code'] = $parentNode->sub_echelon_code;
                        $createData['tier_code'] = $parentNode->code;
                    } elseif ($request->node_type == 'tier') {
                        $createData['sector_code'] = $parentNode->sector_code;
                        $createData['sub_sector_code'] = $parentNode->sub_sector_code;
                        $createData['group_code'] = $parentNode->group_code;
                        $createData['sub_group_code'] = $parentNode->sub_group_code;
                        $createData['echelon_code'] = $parentNode->echelon_code;
                        $createData['sub_echelon_code'] = $parentNode->code;
                    } elseif ($request->node_type == 'sub-echelon') {
                        $createData['sector_code'] = $parentNode->sector_code;
                        $createData['sub_sector_code'] = $parentNode->sub_sector_code;
                        $createData['group_code'] = $parentNode->group_code;
                        $createData['sub_group_code'] = $parentNode->sub_group_code;
                        $createData['echelon_code'] = $parentNode->code;
                    } elseif ($request->node_type == 'echelon') {
                        $createData['sector_code'] = $parentNode->sector_code;
                        $createData['sub_sector_code'] = $parentNode->sub_sector_code;
                        $createData['group_code'] = $parentNode->group_code;
                        $createData['sub_group_code'] = $parentNode->code;
                    } elseif ($request->node_type == 'sub-group') {
                        $createData['sector_code'] = $parentNode->sector_code;
                        $createData['sub_sector_code'] = $parentNode->sub_sector_code;
                        $createData['group_code'] = $parentNode->code;

                    } elseif ($request->node_type == 'group') {
                        $createData['sector_code'] = $parentNode->sector_code;
                        $createData['sub_sector_code'] = $parentNode->code;
                    } elseif ($request->node_type == 'sub-sector') {
                        $createData['sector_code'] = $parentNode->code;
                    }

                    $newItem = $model->create($createData);
                    $total = $model->where($parent_field, $parentNode->id)->count();
                    $newItem->code = $this->_generateCode($total, $model, $parentNode->code);
                    $newItem->save();
                    $child_replica_id .= "$newItem->id:";
                    $this->moveChildNode($item, $newItem);

                    //$this->addChildReplicaId($parentNode, $child_replica_id);
                }
                $updateReplica = true;
            }

            //code for remove new replica
            if (count($detach)) {
                $twoStepDelete = false;
                if ($item instanceof Sector) {
                    $twoStepDelete = true;
                    $twoStepDeleteRelationField = 'industry_id';
                } elseif ($item instanceof SubSector) {
                    $twoStepDelete = true;
                    $twoStepDeleteRelationField = 'sector_code';
                } elseif ($item instanceof Group) {
                    $twoStepDelete = true;
                    $twoStepDeleteRelationField = 'sub_sector_code';
                } elseif ($item instanceof SubGroup) {
                    $twoStepDelete = true;
                    $twoStepDeleteRelationField = 'group_code';
                } elseif ($item instanceof Echelon) {
                    $twoStepDelete = true;
                    $twoStepDeleteRelationField = 'sub_group_code';
                } elseif ($item instanceof SubEchelon) {
                    $twoStepDelete = true;
                    $twoStepDeleteRelationField = 'echelon_code';
                }

                /*two step delete implementation to avoid multilevel delete constrain*/
                if ($twoStepDelete) {
                    $deletedCurrentItem = $model->where('industry_code', $request->industry_code)
                        ->where('description', $item->description)
                        ->where('replica_id', $item->replica_id)
                        ->whereIn($parent_field, $detach)
                        ->pluck($twoStepDeleteRelationField)->toArray();

                    Layer::whereIn($twoStepDeleteRelationField, $deletedCurrentItem)->delete();
                }

                $removeItem = $model->Where('industry_code', $request->industry_code)->where('description', $item->description)
                    ->where('replica_id', $item->replica_id)->whereIn($parent_field, $detach)->delete();
                $updateReplica = true;
            }

            if ($updateReplica) {
                // update all replica
                $model->Where('industry_code', $request->industry_code)->where('description', $item->description)->update(['replica_id' => $replica_id]);
            }
        }

        $updatedData = [];
        // update description
        if ($request->description != $item->description) {
            //$model->where('industry_code', $request->industry_code)->where('id','<>', $item->id)->where('description', $item->description)->update(['description' => $request->description]);
            $updatedData['description'] = $request->description;
        }

        // update note
        if ($request->note != $item->note) {
            $updatedData['note'] = $request->note;
        }

        if (count($updatedData)) {
            $item->update($updatedData);
        }
        return $result;
    }

    private function moveChildNode($oldItem, $newItem)
    {
        if ($newItem instanceof SubMine) {
            return;
        } elseif ($newItem instanceof Mine) {
            $this->_createRecursiveNode(new SubMine(), new SubMine(), 'mine_id', 'mine_id', $oldItem->id, $newItem);
        } elseif ($newItem instanceof SubBasement) {
            $this->_createRecursiveNode(new Mine(), new Mine(), 'sub_basement_id', 'sub_basement_id', $oldItem->id, $newItem);
        } elseif ($newItem instanceof Basement) {
            $this->_createRecursiveNode(new SubBasement(), new SubBasement(), 'basement_id', 'basement_id', $oldItem->id, $newItem);
        } elseif ($newItem instanceof SubFloor) {
            $this->_createRecursiveNode(new Basement(), new Basement(), 'sub_floor_id', 'sub_floor_id', $oldItem->id, $newItem);
        } elseif ($newItem instanceof Floor) {
            $this->_createRecursiveNode(new SubFloor(), new SubFloor(), 'floor_id', 'floor_id', $oldItem->id, $newItem);
        } elseif ($newItem instanceof SubDeck) {
            $this->_createRecursiveNode(new Floor(), new Floor(), 'sub_deck_id', 'sub_deck_id', $oldItem->id, $newItem);
        } elseif ($newItem instanceof Deck) {
            $this->_createRecursiveNode(new SubDeck(), new SubDeck(), 'deck_id', 'deck_id', $oldItem->id, $newItem);
        } elseif ($newItem instanceof SubLayer) {
            $this->_createRecursiveNode(new Deck(), new Deck(), 'sub_layer_id', 'sub_layer_id', $oldItem->id, $newItem);
        } elseif ($newItem instanceof Layer) {
            $this->_createRecursiveNode(new SubLayer(), new SubLayer(), 'layer_id', 'layer_id', $oldItem->id, $newItem);
        } elseif ($newItem instanceof SubTier) {
            $this->_createRecursiveNode(new Layer(), new Layer(), 'sub_tier_id', 'sub_tier_id', $oldItem->id, $newItem);
        } elseif ($newItem instanceof Tier) {
            $this->_createRecursiveNode(new SubTier(), new SubTier(), 'tier_id', 'tier_id', $oldItem->id, $newItem);
        } elseif ($newItem instanceof SubEchelon) {
            $this->_createRecursiveNode(new Tier(), new Tier(), 'sub_echelon_id', 'sub_echelon_id', $oldItem->id, $newItem);
        } elseif ($newItem instanceof Echelon) {
            $this->_createRecursiveNode(new SubEchelon(), new SubEchelon(), 'echelon_id', 'echelon_id', $oldItem->id, $newItem);
        } elseif ($newItem instanceof SubGroup) {
            $this->_createRecursiveNode(new Echelon(), new Echelon(), 'sub_group_id', 'sub_group_id', $oldItem->id, $newItem);
        } elseif ($newItem instanceof Group) {
            $this->_createRecursiveNode(new SubGroup(), new SubGroup(), 'group_id', 'group_id', $oldItem->id, $newItem);
        } elseif ($newItem instanceof SubSector) {
            $this->_createRecursiveNode(new Group(), new Group(), 'sub_sector_id', 'sub_sector_id', $oldItem->id, $newItem);
        }
    }

    private function _createRecursiveNode($createModel, $childModel, $fieldName, $recordCountFieldName, $fieldValue, $createdItem)
    {
        $nodeItems = $childModel->where($fieldName, $fieldValue)->get(['id', 'description', 'note', 'status', 'replica_id', 'industry_code'])->toArray();

        foreach ($nodeItems as $nodeItem) {
            if ($createModel instanceof Sector) {
                $itemCreateData['industry_id'] = $createdItem->id;
                $itemCreateData['industry_code'] = $createdItem->code;
                $parentModel = new Industry();
            } elseif ($createModel instanceof SubSector) {
                $itemCreateData['sector_id'] = $createdItem->id;
                $itemCreateData['industry_code'] = $createdItem->industry_code;
                $itemCreateData['sector_code'] = $createdItem->code;
                $parentModel = new Sector();
            } elseif ($createModel instanceof Group) {
                $itemCreateData['sub_sector_id'] = $createdItem->id;
                $itemCreateData['industry_code'] = $createdItem->industry_code;
                $itemCreateData['sector_code'] = $createdItem->sector_code;
                $itemCreateData['sub_sector_code'] = $createdItem->code;
                $parentModel = new SubSector();
            } elseif ($createModel instanceof SubGroup) {
                $itemCreateData['group_id'] = $createdItem->id;
                $itemCreateData['industry_code'] = $createdItem->industry_code;
                $itemCreateData['sector_code'] = $createdItem->sector_code;
                $itemCreateData['sub_sector_code'] = $createdItem->sub_sector_code;
                $itemCreateData['group_code'] = $createdItem->code;
                $parentModel = new Group();
            } elseif ($createModel instanceof Echelon) {
                $itemCreateData['sub_group_id'] = $createdItem->id;
                $itemCreateData['industry_code'] = $createdItem->industry_code;
                $itemCreateData['sector_code'] = $createdItem->sector_code;
                $itemCreateData['sub_sector_code'] = $createdItem->sub_sector_code;
                $itemCreateData['group_code'] = $createdItem->group_code;
                $itemCreateData['sub_group_code'] = $createdItem->code;
                $parentModel = new SubGroup();
            } elseif ($createModel instanceof SubEchelon) {
                $itemCreateData['echelon_id'] = $createdItem->id;
                $itemCreateData['industry_code'] = $createdItem->industry_code;
                $itemCreateData['sector_code'] = $createdItem->sector_code;
                $itemCreateData['sub_sector_code'] = $createdItem->sub_sector_code;
                $itemCreateData['group_code'] = $createdItem->group_code;
                $itemCreateData['sub_group_code'] = $createdItem->sub_group_code;
                $itemCreateData['echelon_code'] = $createdItem->code;
                $parentModel = new Echelon();
            } elseif ($createModel instanceof Tier) {
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
                $parentModel = new Mine();
            }

            $itemCreateData['description'] = $nodeItem['description'];
            $itemCreateData['note'] = $nodeItem['note'];
            $itemCreateData['status'] = $nodeItem['status'];
            $itemCreateData['created_by'] = auth()->id();

            $item = $createModel->create($itemCreateData);
            $totalItem = $createModel->where($recordCountFieldName, $createdItem->id)->count();
            $item->code = $this->_generateCode($totalItem, $createModel, $createdItem->code);
            $item->replica_id = $createdItem->id;
            $item->save();

            if (isset($nodeItem['replica_id'])) {
                $perviousReplicaId = explode(':', $nodeItem['replica_id']);
                if (count($perviousReplicaId) > 1) {
                    //shared parent id update in child table
                    $replicaIdArray = $createModel->Where('industry_code', $item->industry_code)->where('description', $nodeItem['description'])->pluck($recordCountFieldName)->toArray();
                    $replicaId = implode(':', $replicaIdArray);
                    $createModel->Where('industry_code', $item->industry_code)->where('description', $nodeItem['description'])->update(['replica_id' => $replicaId]);
                }
            }
            if (!($createModel instanceof Sector)) {
                // shared child id update in parent table
                $childReplicaIdArray = $createModel->Where('industry_code', $item->industry_code)->where($recordCountFieldName, $createdItem->id)->pluck('id')->toArray();
                $childReplicaId = implode(':', $childReplicaIdArray);
                $parentModel->Where('industry_code', $item->industry_code)->where('id', $item->{$recordCountFieldName})->update(['child_node_id' => $childReplicaId]);
            }

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

    private function addChildReplicaId($item, $idString)
    {
        if (null == $item->child_node_id) {
            $item->child_node_id = rtrim($idString, ':');
        } else {
            $item->child_node_id = "$idString{$item-> child_node_id}";
        }
        $item->save();
    }

    private function childNodeUpdateOperation($request, $childModel, $currentItem, $parentField, $oldChildNodeIdArray)
    {
        $result['node_change'] = false;
        parse_str($request->child_node_id, $output);

        $childNodeIdArray = [];
        if (isset($output['child_node_id'])) {
            $childNodeIdArray = $output['child_node_id'];
        }

        $rules = [
            'description' => 'required',
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'msg' => $validator->errors()->first()]);
        }
        $child_replica_id = implode(':', $childNodeIdArray);

        // dd($childIdArray, $child_replica_id, $currentItem->child_node_id);

        if ($oldChildNodeIdArray != $childNodeIdArray) {
            try {
                $old_child_id = $oldChildNodeIdArray;
                $new_child_id = $childNodeIdArray;
                $attach = array_diff($new_child_id, $old_child_id);
                $detach = array_diff($old_child_id, $new_child_id);

                //code for add new replica
                if (count($attach)) {
                    foreach ($attach as $childNodeId) {
                        $child_replica_id_for_parent = '';
                        $oldSector = $childModel->find($childNodeId);

                        if ($request->node_type == 'sub-mine') {
                            $createData['sub_mine_id'] = $currentItem->id;
                            $createData['industry_code'] = $request->industry_code;
                            $createData['sector_code'] = $currentItem->sector_code;
                            $createData['sub_sector_code'] = $currentItem->sub_sector_code;
                            $createData['group_code'] = $currentItem->group_code;
                            $createData['sub_group_code'] = $currentItem->sub_group_code;
                            $createData['echelon_code'] = $currentItem->echelon_code;
                            $createData['sub_echelon_code'] = $currentItem->sub_echelon_code;
                            $createData['tier_code'] = $currentItem->tier_code;
                            $createData['sub_tier_code'] = $currentItem->sub_tier_code;
                            $createData['layer_code'] = $currentItem->layer_code;
                            $createData['sub_layer_code'] = $currentItem->sub_layer_code;
                            $createData['deck_code'] = $currentItem->deck_code;
                            $createData['sub_deck_code'] = $currentItem->sub_deck_code;
                            $createData['floor_code'] = $currentItem->floor_code;
                            $createData['sub_floor_code'] = $currentItem->sub_floor_code;
                            $createData['basement_code'] = $currentItem->basement_code;
                            $createData['sub_basement_code'] = $currentItem->sub_basement_code;
                            $createData['mine_code'] = $currentItem->mine_code;
                            $createData['sub_mine_code'] = $currentItem->code;
                            $createData['description'] = $oldSector->description;
                            $createData['note'] = $oldSector->note;
                            $createData['replica_id'] = $child_replica_id;
                        } elseif ($request->node_type == 'mine') {
                            $createData['mine_id'] = $currentItem->id;
                            $createData['industry_code'] = $request->industry_code;
                            $createData['sector_code'] = $currentItem->sector_code;
                            $createData['sub_sector_code'] = $currentItem->sub_sector_code;
                            $createData['group_code'] = $currentItem->group_code;
                            $createData['sub_group_code'] = $currentItem->sub_group_code;
                            $createData['echelon_code'] = $currentItem->echelon_code;
                            $createData['sub_echelon_code'] = $currentItem->sub_echelon_code;
                            $createData['tier_code'] = $currentItem->tier_code;
                            $createData['sub_tier_code'] = $currentItem->sub_tier_code;
                            $createData['layer_code'] = $currentItem->layer_code;
                            $createData['sub_layer_code'] = $currentItem->sub_layer_code;
                            $createData['deck_code'] = $currentItem->deck_code;
                            $createData['sub_deck_code'] = $currentItem->sub_deck_code;
                            $createData['floor_code'] = $currentItem->floor_code;
                            $createData['sub_floor_code'] = $currentItem->sub_floor_code;
                            $createData['basement_code'] = $currentItem->basement_code;
                            $createData['sub_basement_code'] = $currentItem->sub_basement_code;
                            $createData['mine_code'] = $currentItem->code;
                            $createData['description'] = $oldSector->description;
                            $createData['note'] = $oldSector->note;
                            $createData['replica_id'] = $child_replica_id;
                        } elseif ($request->node_type == 'sub-basement') {
                            $createData['sub_basement_id'] = $currentItem->id;
                            $createData['industry_code'] = $request->industry_code;
                            $createData['sector_code'] = $currentItem->sector_code;
                            $createData['sub_sector_code'] = $currentItem->sub_sector_code;
                            $createData['group_code'] = $currentItem->group_code;
                            $createData['sub_group_code'] = $currentItem->sub_group_code;
                            $createData['echelon_code'] = $currentItem->echelon_code;
                            $createData['sub_echelon_code'] = $currentItem->sub_echelon_code;
                            $createData['tier_code'] = $currentItem->tier_code;
                            $createData['sub_tier_code'] = $currentItem->sub_tier_code;
                            $createData['layer_code'] = $currentItem->layer_code;
                            $createData['sub_layer_code'] = $currentItem->sub_layer_code;
                            $createData['deck_code'] = $currentItem->deck_code;
                            $createData['sub_deck_code'] = $currentItem->sub_deck_code;
                            $createData['floor_code'] = $currentItem->floor_code;
                            $createData['sub_floor_code'] = $currentItem->sub_floor_code;
                            $createData['basement_code'] = $currentItem->basement_code;
                            $createData['sub_basement_code'] = $currentItem->code;
                            $createData['description'] = $oldSector->description;
                            $createData['note'] = $oldSector->note;
                            $createData['replica_id'] = $child_replica_id;
                        } elseif ($request->node_type == 'basement') {
                            $createData['basement_id'] = $currentItem->id;
                            $createData['industry_code'] = $request->industry_code;
                            $createData['sector_code'] = $currentItem->sector_code;
                            $createData['sub_sector_code'] = $currentItem->sub_sector_code;
                            $createData['group_code'] = $currentItem->group_code;
                            $createData['sub_group_code'] = $currentItem->sub_group_code;
                            $createData['echelon_code'] = $currentItem->echelon_code;
                            $createData['sub_echelon_code'] = $currentItem->sub_echelon_code;
                            $createData['tier_code'] = $currentItem->tier_code;
                            $createData['sub_tier_code'] = $currentItem->sub_tier_code;
                            $createData['layer_code'] = $currentItem->layer_code;
                            $createData['sub_layer_code'] = $currentItem->sub_layer_code;
                            $createData['deck_code'] = $currentItem->deck_code;
                            $createData['sub_deck_code'] = $currentItem->sub_deck_code;
                            $createData['floor_code'] = $currentItem->floor_code;
                            $createData['sub_floor_code'] = $currentItem->sub_floor_code;
                            $createData['basement_code'] = $currentItem->code;
                            $createData['description'] = $oldSector->description;
                            $createData['note'] = $oldSector->note;
                            $createData['replica_id'] = $child_replica_id;
                        } elseif ($request->node_type == 'sub-floor') {
                            $createData['sub_floor_id'] = $currentItem->id;
                            $createData['industry_code'] = $request->industry_code;
                            $createData['sector_code'] = $currentItem->sector_code;
                            $createData['sub_sector_code'] = $currentItem->sub_sector_code;
                            $createData['group_code'] = $currentItem->group_code;
                            $createData['sub_group_code'] = $currentItem->sub_group_code;
                            $createData['echelon_code'] = $currentItem->echelon_code;
                            $createData['sub_echelon_code'] = $currentItem->sub_echelon_code;
                            $createData['tier_code'] = $currentItem->tier_code;
                            $createData['sub_tier_code'] = $currentItem->sub_tier_code;
                            $createData['layer_code'] = $currentItem->layer_code;
                            $createData['sub_layer_code'] = $currentItem->sub_layer_code;
                            $createData['deck_code'] = $currentItem->deck_code;
                            $createData['sub_deck_code'] = $currentItem->sub_deck_code;
                            $createData['floor_code'] = $currentItem->floor_code;
                            $createData['sub_floor_code'] = $currentItem->code;
                            $createData['description'] = $oldSector->description;
                            $createData['note'] = $oldSector->note;
                            $createData['replica_id'] = $child_replica_id;
                        } elseif ($request->node_type == 'floor') {
                            $createData['floor_id'] = $currentItem->id;
                            $createData['industry_code'] = $request->industry_code;
                            $createData['sector_code'] = $currentItem->sector_code;
                            $createData['sub_sector_code'] = $currentItem->sub_sector_code;
                            $createData['group_code'] = $currentItem->group_code;
                            $createData['sub_group_code'] = $currentItem->sub_group_code;
                            $createData['echelon_code'] = $currentItem->echelon_code;
                            $createData['sub_echelon_code'] = $currentItem->sub_echelon_code;
                            $createData['tier_code'] = $currentItem->tier_code;
                            $createData['sub_tier_code'] = $currentItem->sub_tier_code;
                            $createData['layer_code'] = $currentItem->layer_code;
                            $createData['sub_layer_code'] = $currentItem->sub_layer_code;
                            $createData['deck_code'] = $currentItem->deck_code;
                            $createData['sub_deck_code'] = $currentItem->sub_deck_code;
                            $createData['floor_code'] = $currentItem->code;
                            $createData['description'] = $oldSector->description;
                            $createData['note'] = $oldSector->note;
                            $createData['replica_id'] = $child_replica_id;
                        } elseif ($request->node_type == 'sub-deck') {
                            $createData['sub_deck_id'] = $currentItem->id;
                            $createData['industry_code'] = $request->industry_code;
                            $createData['sector_code'] = $currentItem->sector_code;
                            $createData['sub_sector_code'] = $currentItem->sub_sector_code;
                            $createData['group_code'] = $currentItem->group_code;
                            $createData['sub_group_code'] = $currentItem->sub_group_code;
                            $createData['echelon_code'] = $currentItem->echelon_code;
                            $createData['sub_echelon_code'] = $currentItem->sub_echelon_code;
                            $createData['tier_code'] = $currentItem->tier_code;
                            $createData['sub_tier_code'] = $currentItem->sub_tier_code;
                            $createData['layer_code'] = $currentItem->layer_code;
                            $createData['sub_layer_code'] = $currentItem->sub_layer_code;
                            $createData['deck_code'] = $currentItem->deck_code;
                            $createData['sub_deck_code'] = $currentItem->code;
                            $createData['description'] = $oldSector->description;
                            $createData['note'] = $oldSector->note;
                            $createData['replica_id'] = $child_replica_id;
                        } elseif ($request->node_type == 'deck') {
                            $createData['deck_id'] = $currentItem->id;
                            $createData['industry_code'] = $request->industry_code;
                            $createData['sector_code'] = $currentItem->sector_code;
                            $createData['sub_sector_code'] = $currentItem->sub_sector_code;
                            $createData['group_code'] = $currentItem->group_code;
                            $createData['sub_group_code'] = $currentItem->sub_group_code;
                            $createData['echelon_code'] = $currentItem->echelon_code;
                            $createData['sub_echelon_code'] = $currentItem->sub_echelon_code;
                            $createData['tier_code'] = $currentItem->tier_code;
                            $createData['sub_tier_code'] = $currentItem->sub_tier_code;
                            $createData['layer_code'] = $currentItem->layer_code;
                            $createData['sub_layer_code'] = $currentItem->sub_layer_code;
                            $createData['deck_code'] = $currentItem->code;
                            $createData['description'] = $oldSector->description;
                            $createData['note'] = $oldSector->note;
                            $createData['replica_id'] = $child_replica_id;
                        } elseif ($request->node_type == 'sub-layer') {
                            $createData['sub_layer_id'] = $currentItem->id;
                            $createData['industry_code'] = $request->industry_code;
                            $createData['sector_code'] = $currentItem->sector_code;
                            $createData['sub_sector_code'] = $currentItem->sub_sector_code;
                            $createData['group_code'] = $currentItem->group_code;
                            $createData['sub_group_code'] = $currentItem->sub_group_code;
                            $createData['echelon_code'] = $currentItem->echelon_code;
                            $createData['sub_echelon_code'] = $currentItem->sub_echelon_code;
                            $createData['tier_code'] = $currentItem->tier_code;
                            $createData['sub_tier_code'] = $currentItem->sub_tier_code;
                            $createData['layer_code'] = $currentItem->layer_code;
                            $createData['sub_layer_code'] = $currentItem->code;
                            $createData['description'] = $oldSector->description;
                            $createData['note'] = $oldSector->note;
                            $createData['replica_id'] = $child_replica_id;
                        } elseif ($request->node_type == 'layer') {
                            $createData['layer_id'] = $currentItem->id;
                            $createData['industry_code'] = $request->industry_code;
                            $createData['sector_code'] = $currentItem->sector_code;
                            $createData['sub_sector_code'] = $currentItem->sub_sector_code;
                            $createData['group_code'] = $currentItem->group_code;
                            $createData['sub_group_code'] = $currentItem->sub_group_code;
                            $createData['echelon_code'] = $currentItem->echelon_code;
                            $createData['sub_echelon_code'] = $currentItem->sub_echelon_code;
                            $createData['tier_code'] = $currentItem->tier_code;
                            $createData['sub_tier_code'] = $currentItem->sub_tier_code;
                            $createData['layer_code'] = $currentItem->code;
                            $createData['description'] = $oldSector->description;
                            $createData['note'] = $oldSector->note;
                            $createData['replica_id'] = $child_replica_id;
                        } elseif ($request->node_type == 'sub-tier') {
                            $createData['sub_tier_id'] = $currentItem->id;
                            $createData['industry_code'] = $request->industry_code;
                            $createData['sector_code'] = $currentItem->sector_code;
                            $createData['sub_sector_code'] = $currentItem->sub_sector_code;
                            $createData['group_code'] = $currentItem->group_code;
                            $createData['sub_group_code'] = $currentItem->sub_group_code;
                            $createData['echelon_code'] = $currentItem->echelon_code;
                            $createData['sub_echelon_code'] = $currentItem->sub_echelon_code;
                            $createData['tier_code'] = $currentItem->tier_code;
                            $createData['sub_tier_code'] = $currentItem->code;
                            $createData['description'] = $oldSector->description;
                            $createData['note'] = $oldSector->note;
                            $createData['replica_id'] = $child_replica_id;
                        } elseif ($request->node_type == 'tier') {
                            $createData['tier_id'] = $currentItem->id;
                            $createData['industry_code'] = $request->industry_code;
                            $createData['sector_code'] = $currentItem->sector_code;
                            $createData['sub_sector_code'] = $currentItem->sub_sector_code;
                            $createData['group_code'] = $currentItem->group_code;
                            $createData['sub_group_code'] = $currentItem->sub_group_code;
                            $createData['echelon_code'] = $currentItem->echelon_code;
                            $createData['sub_echelon_code'] = $currentItem->sub_echelon_code;
                            $createData['tier_code'] = $currentItem->code;
                            $createData['description'] = $oldSector->description;
                            $createData['note'] = $oldSector->note;
                            $createData['replica_id'] = $child_replica_id;

                        } elseif ($request->node_type == 'sub-echelon') {
                            $createData['sub_echelon_id'] = $currentItem->id;
                            $createData['industry_code'] = $request->industry_code;
                            $createData['sector_code'] = $currentItem->sector_code;
                            $createData['sub_sector_code'] = $currentItem->sub_sector_code;
                            $createData['group_code'] = $currentItem->group_code;
                            $createData['sub_group_code'] = $currentItem->sub_group_code;
                            $createData['echelon_code'] = $currentItem->echelon_code;
                            $createData['sub_echelon_code'] = $currentItem->code;
                            $createData['description'] = $oldSector->description;
                            $createData['note'] = $oldSector->note;
                            $createData['replica_id'] = $child_replica_id;

                        } elseif ($request->node_type == 'echelon') {
                            $createData['echelon_id'] = $currentItem->id;
                            $createData['industry_code'] = $request->industry_code;
                            $createData['sector_code'] = $currentItem->sector_code;
                            $createData['sub_sector_code'] = $currentItem->sub_sector_code;
                            $createData['group_code'] = $currentItem->group_code;
                            $createData['sub_group_code'] = $currentItem->sub_group_code;
                            $createData['echelon_code'] = $currentItem->code;
                            $createData['description'] = $oldSector->description;
                            $createData['note'] = $oldSector->note;
                            $createData['replica_id'] = $child_replica_id;

                        } elseif ($request->node_type == 'sub-group') {
                            $createData['sub_group_id'] = $currentItem->id;
                            $createData['industry_code'] = $request->industry_code;
                            $createData['sector_code'] = $currentItem->sector_code;
                            $createData['sub_sector_code'] = $currentItem->sub_sector_code;
                            $createData['group_code'] = $currentItem->group_code;
                            $createData['sub_group_code'] = $currentItem->code;
                            $createData['description'] = $oldSector->description;
                            $createData['note'] = $oldSector->note;
                            $createData['replica_id'] = $child_replica_id;
                        } elseif ($request->node_type == 'group') {
                            $createData['group_id'] = $currentItem->id;
                            $createData['industry_code'] = $request->industry_code;
                            $createData['sector_code'] = $currentItem->sector_code;
                            $createData['sub_sector_code'] = $currentItem->sub_sector_code;
                            $createData['group_code'] = $currentItem->code;
                            $createData['description'] = $oldSector->description;
                            $createData['note'] = $oldSector->note;
                            $createData['replica_id'] = $child_replica_id;
                        } elseif ($request->node_type == 'sub-sector') {
                            $createData['sub_sector_id'] = $currentItem->id;
                            $createData['industry_code'] = $request->industry_code;
                            $createData['sector_code'] = $currentItem->sector_code;
                            $createData['sub_sector_code'] = $currentItem->code;
                            $createData['description'] = $oldSector->description;
                            $createData['note'] = $oldSector->note;
                            $createData['replica_id'] = $child_replica_id;
                        } elseif ($request->node_type == 'sector') {
                            $createData['industry_code'] = $request->industry_code;
                            $createData['sector_id'] = $currentItem->id;
                            $createData['sector_code'] = $currentItem->code;
                            $createData['description'] = $oldSector->description;
                            $createData['note'] = $oldSector->note;
                            $createData['replica_id'] = $child_replica_id;

                        }
                        $createData['status'] = 1;
                        $createData['created_by'] = auth()->id();

                        $item = $childModel->create($createData);

                        $total = $childModel->where($parentField, $currentItem->id)->count();
                        $item->code = $this->_generateCode($total, $childModel, $currentItem->code);
                        $item->save();

                        // child id update in parent table
                        // $child_replica_id_for_parent .= "$item->id:";
                        // $this->addChildReplicaId($currentItem, $child_replica_id_for_parent);

                        //shared parent id update in child table
                        $replicaIdArray = $childModel->Where('industry_code', $item->industry_code)->where('description', $item->description)->pluck($parentField)->toArray();
                        $replicaId = implode(':', $replicaIdArray);
                        $childModel->Where('industry_code', $item->industry_code)->where('description', $item->description)->update(['replica_id' => $replicaId]);
                    }
                }

                //code for remove new replica
                if (count($detach)) {
                    // update replica node
                    foreach ($detach as $deletedItemId) {
                        $deletedItem = $childModel->where('industry_code', $request->industry_code)->where('id', $deletedItemId)->first([$parentField, 'replica_id', 'description']);

                        if (null != $deletedItem) {
                            $explodeItem = explode(':', $deletedItem['replica_id']);
                            $deletedItemParentId = $deletedItem["$parentField"];
                            $updated = $childModel->where('industry_code', $request->industry_code)->where('description', $deletedItem->description)->update(['replica_id' => implode(':', array_diff($explodeItem, [$deletedItemParentId]))]);
                        }
                    }

                    $twoStepDelete = false;
                    if ('sectors' == $currentItem->getTable()) {
                        $twoStepDelete = true;
                        $twoStepDeleteRelationField = 'sector_code';
                    } elseif ('sub_sectors' == $currentItem->getTable()) {
                        $twoStepDelete = true;
                        $twoStepDeleteRelationField = 'sub_sector_code';
                    } elseif ('groups' == $currentItem->getTable()) {
                        $twoStepDelete = true;
                        $twoStepDeleteRelationField = 'group_code';
                    } elseif ('sub_groups' == $currentItem->getTable()) {
                        $twoStepDelete = true;
                        $twoStepDeleteRelationField = 'sub_group_code';
                    } elseif ('echelons' == $currentItem->getTable()) {
                        $twoStepDelete = true;
                        $twoStepDeleteRelationField = 'echelon_code';
                    } elseif ('sub_echelons' == $currentItem->getTable()) {
                        $twoStepDelete = true;
                        $twoStepDeleteRelationField = 'sub_echelon_code';
                    }
                    /*two step delete implementation to avoid multilevel delete constrain*/
                    if ($twoStepDelete) {
                        $deletedCurrentItem = $childModel->where('industry_code', $request->industry_code)->whereIn('id', $detach)->pluck($twoStepDeleteRelationField)->toArray();
                        Layer::whereIn($twoStepDeleteRelationField, $deletedCurrentItem)->delete();
                    }
                    $childModel->where('industry_code', $request->industry_code)->whereIn('id', $detach)->delete();
                    //shared parent id update in child table
                    // $replicaIdArray = $childModel->Where('industry_code', $request->industry_code)->where('description', $request->description)->pluck($parentField)->toArray();
                    // $replicaId  = implode(':', $replicaIdArray);
                    // $childModel->Where('industry_code', $request->industry_code)->where('description', $request->description)->update(['replica_id' => $replicaId]);
                }
                $data['msg'] = 'successfully created!';
                $data['status'] = 'success';
            } catch (\Exception $e) {
                $data['msg'] = "Operation Failed!";
                $data['status'] = 'error';
                logError($e);
            }

        }

        return $result;
    }

    public function timeSpentStore()
    {
        TimeSpantOnTree::updateOrCreate([
            'user_id' => auth()->id(),
            'industry_id' => request()->industry_id,
            'date_at' => Carbon::now()->format('Y-m-d'),
        ],
            [
                'user_id' => auth()->id(),
                'industry_id' => request()->industry_id,
                'time_spant' => DB::raw('time_spant + 20'),
                'date_at' => Carbon::now()->format('Y-m-d'),
            ]);
    }

    private function nodeAddFieldValidation($descriptionArray, $table, $fieldName, $fieldValueArray)
    {
        foreach ($descriptionArray as $description) {
            $data['description'] = $description;
            $validator = \Validator::make($data, [
                'description' => [
                    'required',
                    Rule::unique($table)->where(function ($query) use ($fieldName, $fieldValueArray) {
                        return $query->whereIn($fieldName, $fieldValueArray);
                    })
                ],
            ]);

            if ($validator->fails()) {
                return $validator;
            }
        }
        return false;
    }

    /**
     * @param $description
     * @return array
     */
    private function getSanitizeDescriptionData($description): array
    {
        //$sanitizeRequest = (new Sanitizer($request->all(), ['description' =>'escape|trim|capitalize']))->sanitize();
        return array_filter(array_map('ucwords', array_map('trim', explode(';', $description))));
    }

    private function updateActiveInactiveStatus($model, $request, $field)
    {
        $model->status = $request->status;
        $model->save();
        //        switch ($request->node_type) {
        //            case 'sector':
        //                SubSector::where($field, $request->node_code)->Where('industry_code', $request->industry_code)->update(['status' => $request->status]);
        //            case 'sub-sector':
        //                Group::where($field, $request->node_code)->Where('industry_code', $request->industry_code)->update(['status' => $request->status]);
        //            case 'group':
        //                SubGroup::where($field, $request->node_code)->Where('industry_code', $request->industry_code)->update(['status' => $request->status]);
        //            case 'sub-group':
        //                Echelon::where($field, $request->node_code)->Where('industry_code', $request->industry_code)->update(['status' => $request->status]);
        //            case 'echelon':
        //                SubEchelon::where($field, $request->node_code)->Where('industry_code', $request->industry_code)->update(['status' => $request->status]);
        //            case 'sub-echelon':
        //                Tier::where($field, $request->node_code)->Where('industry_code', $request->industry_code)->update(['status' => $request->status]);
        //            case 'tier':
        //                SubTier::where($field, $request->node_code)->Where('industry_code', $request->industry_code)->update(['status' => $request->status]);
        //            case 'sub-tier':
        //                Layer::where($field, $request->node_code)->Where('industry_code', $request->industry_code)->update(['status' => $request->status]);
        //            case 'layer':
        //                SubLayer::where($field, $request->node_code)->where('industry_code', $request->industry_code)->update(['status' => $request->status]);
        //            case 'sub-layer':
        //                Deck::where($field, $request->node_code)->where('industry_code', $request->industry_code)->update(['status' => $request->status]);
        //            case 'deck':
        //                SubDeck::where($field, $request->node_code)->where('industry_code', $request->industry_code)->update(['status' => $request->status]);
        //            case 'sub-deck':
        //                Floor::where($field, $request->node_code)->where('industry_code', $request->industry_code)->update(['status' => $request->status]);
        //            case 'floor':
        //                SubFloor::where($field, $request->node_code)->where('industry_code', $request->industry_code)->update(['status' => $request->status]);
        //            case 'sub-floor':
        //                Basement::where($field, $request->node_code)->where('industry_code', $request->industry_code)->update(['status' => $request->status]);
        //            case 'basement':
        //                SubBasement::where($field, $request->node_code)->where('industry_code', $request->industry_code)->update(['status' => $request->status]);
        //            case 'sub-basement':
        //                Mine::where($field, $request->node_code)->where('industry_code', $request->industry_code)->update(['status' => $request->status]);
        //            case 'mine':
        //                SubMine::where($field, $request->node_code)->where('industry_code', $request->industry_code)->update(['status' => $request->status]);
        //        }
    }

    private function hasChildNode($request, $item)
    {
        if (auth()->user()->isDataAnalysis() && ($request->node_type != 'sub-floor')) {
            switch ($request->node_type) {
                case 'sector':
                    $total = $item->subSector()->count();
                    break;
                case 'sub-sector':
                    $total = $item->group()->count();
                    break;
                case 'group':
                    $total = $item->subGroup()->count();
                    break;
                case 'sub-group':
                    $total = $item->echelon()->count();
                    break;
                case 'echelon':
                    $total = $item->subEchelon()->count();
                    break;
                case 'sub-echelon':
                    $total = $item->tier()->count();
                    break;
                case 'tier':
                    $total = $item->subTier()->count();
                    break;
                case 'sub-tier':
                    $total = $item->layer()->count();
                    break;
                case 'layer':
                    $total = $item->subLayer()->count();
                    break;
                case 'sub-layer':
                    $total = $item->deck()->count();
                    break;
                case 'deck':
                    $total = $item->subDeck()->count();
                    break;
                case 'sub-deck':
                    $total = $item->floor()->count();
                    break;
                case 'floor':
                    $total = $item->subFloor()->count();
                    break;
                case 'sub-floor':
                    $total = $item->basement()->count();
                    break;
                case 'basement':
                    $total = $item->subBasement()->count();
                    break;
                case 'sub-basement':
                    $total = $item->mine()->count();
                    break;
                case 'mine':
                    $total = $item->subMine()->count();
                    break;
                case 'sub-mine':
                    $total = 0;
                    break;
            }

            if ($total > 0) {
                return true;
            }
        }
        return false;
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

    private function updateWithCheck($request, $model)
    {
        parse_str($request->parent_node_id, $parent_node_array);
        $replica_id = implode(':', $parent_node_array['parent_node_id']);
        if ($model->replica_id != $replica_id) {
            return true;
        }
        parse_str($request->child_node_id, $output);
        $childNodeIdArray = [];
        if (isset($output['child_node_id'])) {
            $childNodeIdArray = $output['child_node_id'];
        }
        if ($model instanceof Sector) {
            $oldChildNodeIdArray = $model->subSector()->whereIndustryCode($request->industry_code)->pluck('id')->toArray();
        } elseif ($model instanceof SubSector) {
            $oldChildNodeIdArray = $model->group()->whereIndustryCode($request->industry_code)->pluck('id')->toArray();
        } elseif ($model instanceof Group) {
            $oldChildNodeIdArray = $model->subGroup()->whereIndustryCode($request->industry_code)->pluck('id')->toArray();
        } elseif ($model instanceof SubGroup) {
            $oldChildNodeIdArray = $model->echelon()->whereIndustryCode($request->industry_code)->pluck('id')->toArray();
        } elseif ($model instanceof Echelon) {
            $oldChildNodeIdArray = $model->subEchelon()->whereIndustryCode($request->industry_code)->pluck('id')->toArray();
        } elseif ($model instanceof SubEchelon) {
            $oldChildNodeIdArray = $model->tier()->whereIndustryCode($request->industry_code)->pluck('id')->toArray();
        } elseif ($model instanceof Tier) {
            $oldChildNodeIdArray = $model->subTier()->whereIndustryCode($request->industry_code)->pluck('id')->toArray();
        } elseif ($model instanceof SubTier) {
            $oldChildNodeIdArray = $model->layer()->whereIndustryCode($request->industry_code)->pluck('id')->toArray();
        } elseif ($model instanceof Layer) {
            $oldChildNodeIdArray = $model->subLayer()->whereIndustryCode($request->industry_code)->pluck('id')->toArray();
        } elseif ($model instanceof SubLayer) {
            $oldChildNodeIdArray = $model->deck()->whereIndustryCode($request->industry_code)->pluck('id')->toArray();
        } elseif ($model instanceof Deck) {
            $oldChildNodeIdArray = $model->subDeck()->whereIndustryCode($request->industry_code)->pluck('id')->toArray();
        } elseif ($model instanceof SubDeck) {
            $oldChildNodeIdArray = $model->floor()->whereIndustryCode($request->industry_code)->pluck('id')->toArray();
        } elseif ($model instanceof Floor) {
            $oldChildNodeIdArray = $model->subFloor()->whereIndustryCode($request->industry_code)->pluck('id')->toArray();
        } elseif ($model instanceof SubFloor) {
            $oldChildNodeIdArray = $model->basement()->whereIndustryCode($request->industry_code)->pluck('id')->toArray();
        } elseif ($model instanceof Basement) {
            $oldChildNodeIdArray = $model->subBasement()->whereIndustryCode($request->industry_code)->pluck('id')->toArray();
        } elseif ($model instanceof SubBasement) {
            $oldChildNodeIdArray = $model->mine()->whereIndustryCode($request->industry_code)->pluck('id')->toArray();
        } elseif ($model instanceof Mine) {
            $oldChildNodeIdArray = $model->subMine()->whereIndustryCode($request->industry_code)->pluck('id')->toArray();
        } elseif ($model instanceof SubMine) {
            $oldChildNodeIdArray = [];
        }
        if ($oldChildNodeIdArray != $childNodeIdArray) {
            return true;
        }
        return false;
    }

    private function addActivityLog($name, $object, $description)
    {
        activity()
            ->useLog($name)
            ->performedOn($object)
            ->causedBy(auth()->user())
            ->log($description);
    }

    private function nodeDeleteCount($targetNode, $tableName)
    {
        $tableNameArray = [];
        switch ($tableName) {
            case 'Sector':
                $tableNameArray[] = 'sector';
            case 'SubSector':
                $tableNameArray[] = 'sub-sector';
            case 'Group':
                $tableNameArray[] = 'group';
            case 'SubGroup':
                $tableNameArray[] = 'sub-group';
            case 'Echelon':
                $tableNameArray[] = 'echelon';
            case 'SubEchelon':
                $tableNameArray[] = 'sub-echelon';
            case 'Tier':
                $tableNameArray[] = 'tier';
            case 'SubTier':
                $tableNameArray[] = 'sub-tier';
            case 'Layer':
                $tableNameArray[] = 'layer';
            case 'SubLayer':
                $tableNameArray[] = 'sub-layer';
            case 'Deck':
                $tableNameArray[] = 'deck';
            case 'SubDeck':
                $tableNameArray[] = 'sub-deck';
            case 'Floor':
                $tableNameArray[] = 'floor';
            case 'SubFloor':
                $tableNameArray[] = 'sub-floor';
            case 'Basement':
                $tableNameArray[] = 'basement';
            case 'SubBasement':
                $tableNameArray[] = 'sub-basement';
            case 'Mine':
                $tableNameArray[] = 'mine';
            case 'SubMine':
                $tableNameArray[] = 'sub-mine';
        }
        $total = 0;
        foreach ($tableNameArray as $tableName) {
            $total += \DB::table($this->getNodeMapTableView($tableName))->where('code', 'like', $targetNode->code . '%')->count();
        }
        return $total;
    }

    public function getAllNodeCounterListData(Request $request)
    {
        $industryId = $request->industry_id;
        $NodeCounterList = [];
        if ($industryId != null) {
            $table = $this->getNodeMapTableView('sector');
            $sector = $this->getNodeDataCount($table, $industryId);
            if ($sector->total) {
                $uniqueSectorCount = \DB::table($table)->where('code', 'like', $industryId . '%')->groupBy('description')->get('id')->count();
                $NodeCounterList[] = [
                    'level' => 'Sector',
                    'total' => $sector->total,
                    'unique_count' => $uniqueSectorCount,
                    'active' => $sector->active,
                    'inactive' => $sector->inactive,
                ];
                $table = $this->getNodeMapTableView('sub-sector');
                $subSector = $this->getNodeDataCount($table, $industryId);
                if ($subSector->total) {
                    $uniqueSubSectorCount = \DB::table($table)->where('code', 'like', $industryId . '%')->groupBy('description')->get('id')->count();
                    $NodeCounterList[] = [
                        'level' => 'Sub-Sector',
                        'total' => $subSector->total,
                        'unique_count' => $uniqueSubSectorCount,
                        'active' => $subSector->active,
                        'inactive' => $subSector->inactive
                    ];
                    $table = $this->getNodeMapTableView('group');
                    $group =  $this->getNodeDataCount($table, $industryId);
                    if ($group->total) {
                        $uniqueGroupCount = \DB::table($table)->where('code', 'like', $industryId . '%')->groupBy('description')->get('id')->count();
                        $NodeCounterList[] = [
                            'level' => 'Group',
                            'total' => $group->total,
                            'unique_count' => $uniqueGroupCount,
                            'active' => $group->active,
                            'inactive' =>  $group->inactive
                        ];
                        $table = $this->getNodeMapTableView('sub-group');
                        $subGroup = $this->getNodeDataCount($table, $industryId);
                        if ($subGroup->total) {
                            $uniqueSubGroupCount = \DB::table($table)->where('code', 'like', $industryId . '%')->groupBy('description')->get('id')->count();
                            $NodeCounterList[] = [
                                'level' => 'Sub-Group',
                                'total' => $subGroup->total,
                                'unique_count' => $uniqueSubGroupCount,
                                'active' => $subGroup->active,
                                'inactive' => $subGroup->inactive
                            ];
                            $table = $this->getNodeMapTableView('echelon');
                            $echelon = $this->getNodeDataCount($table, $industryId);
                            if ($echelon->total) {
                                $uniqueEchelonCount = \DB::table($table)->where('code', 'like', $industryId . '%')->groupBy('description')->get('id')->count();
                                $NodeCounterList[] = [
                                    'level' => 'Echelon',
                                    'total' => $echelon->total,
                                    'unique_count' => $uniqueEchelonCount,
                                    'active' => $echelon->active,
                                    'inactive' => $echelon->inactive
                                ];
                                $table = $this->getNodeMapTableView('sub-echelon');
                                $subEchelon = $this->getNodeDataCount($table, $industryId);
                                if ($subEchelon->total) {
                                    $uniqueSubEchelonCount = \DB::table($table)->where('code', 'like', $industryId . '%')->groupBy('description')->get('id')->count();
                                    $NodeCounterList[] = [
                                        'level' => 'Sub-Echelon',
                                        'total' => $subEchelon->total,
                                        'unique_count' => $uniqueSubEchelonCount,
                                        'active' => $subEchelon->active,
                                        'inactive' => $subEchelon->inactive
                                    ];
                                    $table = $this->getNodeMapTableView('tier');
                                    $tier = $this->getNodeDataCount($table, $industryId);
                                    if ($tier->total) {
                                        $uniqueTierCount = \DB::table($table)->where('code', 'like', $industryId . '%')->groupBy('description')->get('id')->count();
                                        $NodeCounterList[] = [
                                            'level' => 'Tier',
                                            'total' => $tier->total,
                                            'unique_count' => $uniqueTierCount,
                                            'active' => $tier->active,
                                            'inactive' => $tier->inactive
                                        ];
                                        $table = $this->getNodeMapTableView('sub-tier');
                                        $subTier = $this->getNodeDataCount($table, $industryId);
                                        if ($subTier->total) {
                                            $uniqueSubTierCount = \DB::table($table)->where('code', 'like', $industryId . '%')->groupBy('description')->get('id')->count();
                                            $NodeCounterList[] = [
                                                'level' => 'Sub-Tier',
                                                'total' => $subTier->total,
                                                'unique_count' => $uniqueSubTierCount,
                                                'active' => $subTier->active,
                                                'inactive' => $subTier->inactive
                                            ];
                                            $table = $this->getNodeMapTableView('layer');
                                            $layer = $this->getNodeDataCount($table, $industryId);
                                            if ($layer->total) {
                                                $uniqueLayerCount = \DB::table($table)->where('code', 'like', $industryId . '%')->groupBy('description')->get('id')->count();
                                                $NodeCounterList[] = [
                                                    'level' => 'Layer',
                                                    'total' => $layer->total,
                                                    'unique_count' => $uniqueLayerCount,
                                                    'active' => $layer->active,
                                                    'inactive' => $layer->inactive
                                                ];
                                                $table = $this->getNodeMapTableView('sub-layer');
                                                $subLayer = $this->getNodeDataCount($table, $industryId);
                                                if ($subLayer->total) {
                                                    $uniqueSubLayerCount = \DB::table($table)->where('code', 'like', $industryId . '%')->groupBy('description')->get('id')->count();
                                                    $NodeCounterList[] = [
                                                        'level' => 'Sub-Layer',
                                                        'total' => $subLayer->total,
                                                        'unique_count' => $uniqueSubLayerCount,
                                                        'active' => $subLayer->active,
                                                        'inactive' => $subLayer->inactive
                                                    ];
                                                    $table = $this->getNodeMapTableView('deck');
                                                    $deck = $this->getNodeDataCount($table, $industryId);
                                                    if ($deck->total) {
                                                        $uniqueDeckCount = \DB::table($table)->where('code', 'like', $industryId . '%')->groupBy('description')->get('id')->count();
                                                        $NodeCounterList[] = [
                                                            'level' => 'Deck',
                                                            'total' => $deck->total,
                                                            'unique_count' => $uniqueDeckCount,
                                                            'active' => $deck->active,
                                                            'inactive' => $deck->inactive
                                                        ];
                                                        $table = $this->getNodeMapTableView('sub-deck');
                                                        $subDeck = $this->getNodeDataCount($table, $industryId);
                                                        if ($subDeck->total) {
                                                            $uniqueSubDeckCount = \DB::table($table)->where('code', 'like', $industryId . '%')->groupBy('description')->get('id')->count();
                                                            $NodeCounterList[] = [
                                                                'level' => 'Sub-Deck',
                                                                'total' => $subDeck->active,
                                                                'unique_count' => $uniqueSubDeckCount,
                                                                'active' => $subDeck->active,
                                                                'inactive' => $subDeck->inactive
                                                            ];
                                                            $table = $this->getNodeMapTableView('floor');
                                                            $floor = $this->getNodeDataCount($table, $industryId);
                                                            if ($floor->total) {
                                                                $uniqueFloorCount = \DB::table($table)->where('code', 'like', $industryId . '%')->groupBy('description')->get('id')->count();
                                                                $NodeCounterList[] = [
                                                                    'level' => 'Floor',
                                                                    'total' => $floor->active,
                                                                    'unique_count' => $uniqueFloorCount,
                                                                    'active' => $floor->active,
                                                                    'inactive' => $floor->inactive
                                                                ];
                                                                $table = $this->getNodeMapTableView('sub-floor');
                                                                $subFloor = $this->getNodeDataCount($table, $industryId);
                                                                if ($subFloor->total) {
                                                                    $uniqueSubFloorCount = \DB::table($table)->where('code', 'like', $industryId . '%')->groupBy('description')->get('id')->count();
                                                                    $NodeCounterList[] = [
                                                                        'level' => 'Sub-Floor',
                                                                        'total' => $subFloor->total,
                                                                        'unique_count' => $uniqueSubFloorCount,
                                                                        'active' => $subFloor->active,
                                                                        'inactive' => $subFloor->inactive
                                                                    ];
                                                                    $table = $this->getNodeMapTableView('basement');
                                                                    $basement = $this->getNodeDataCount($table, $industryId);
                                                                    if ($basement->total) {
                                                                        $uniqueBasementCount = \DB::table($table)->where('code', 'like', $industryId . '%')->groupBy('description')->get('id')->count();
                                                                        $NodeCounterList[] = [
                                                                            'level' => 'Basement',
                                                                            'total' => $basement->active,
                                                                            'unique_count' => $uniqueBasementCount,
                                                                            'active' => $basement->active,
                                                                            'inactive' => $basement->inactive
                                                                        ];
                                                                        $table = $this->getNodeMapTableView('sub-basement');
                                                                        $subBasement = $this->getNodeDataCount($table, $industryId);
                                                                        if ($subBasement->total) {
                                                                            $uniqueSubBasementCount = \DB::table($table)->where('code', 'like', $industryId . '%')->groupBy('description')->get('id')->count();
                                                                            $NodeCounterList[] = [
                                                                                'level' => 'Sub-Basement',
                                                                                'total' => $subBasement->total,
                                                                                'unique_count' => $uniqueSubBasementCount,
                                                                                'active' => $subBasement->active,
                                                                                'inactive' => $subBasement->inactive
                                                                            ];
                                                                            $table = $this->getNodeMapTableView('mine');
                                                                            $mine = $this->getNodeDataCount($table, $industryId);
                                                                            if ($mine->total) {
                                                                                $uniqueMineCount = \DB::table($table)->where('code', 'like', $industryId . '%')->groupBy('description')->get('id')->count();
                                                                                $NodeCounterList[] = [
                                                                                    'level' => 'Mine',
                                                                                    'total' => $mine->total,
                                                                                    'unique_count' => $uniqueMineCount,
                                                                                    'active' => $mine->active,
                                                                                    'inactive' => $mine->inactive
                                                                                ];
                                                                                $table = $this->getNodeMapTableView('sub-mine');
                                                                                $subMine = $this->getNodeDataCount($table, $industryId);
                                                                                if ($subMine->total) {
                                                                                    $uniqueSubMineCount = \DB::table($table)->where('code', 'like', $industryId . '%')->groupBy('description')->get('id')->count();
                                                                                    $NodeCounterList[] = [
                                                                                        'level' => 'Sub-Mine',
                                                                                        'total' => $subMine->total,
                                                                                        'unique_count' => $uniqueSubMineCount,
                                                                                        'active' => $subMine->active,
                                                                                        'inactive' => $subMine->inactive
                                                                                    ];
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

        }
        $data['html'] = view('admin.industry._all_node_counter_list', compact('NodeCounterList'))->render();
        $data['status'] = 'success';
        return response()->json($data);
    }

    /**
     * count node data(total, active, inactive) by industry
     * @param $table
     * @param $industryId
     * @return mixed
     */
    private function getNodeDataCount($table, $industryId) {
        return \DB::select("select count(*) as total,
                 (select count(*) from ". $table." where status = 1 and code like '".$industryId."%') as active,
                 (select count(*) from ". $table ." where status = 0 and code like '".$industryId."%') as inactive
                 from " .$table. " where code like '".$industryId."%'")[0];
    }
}
