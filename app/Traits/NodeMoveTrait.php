<?php

namespace App\Traits;

use App\Models\Basement;
use App\Models\Deck;
use App\Models\DynamicNodeView;
use App\Models\Echelon;
use App\Models\Floor;
use App\Models\Group;
use App\Models\Industry;
use App\Models\Layer;
use App\Models\Mine;
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
use DataTables;

use Illuminate\Support\Str;

/**
 * Trait NodeMoveTrait
 * @package App\Traits
 * @target App\Http\Controllers\Admin\IndustryController
 * @property NodeMap $this
 */
trait NodeMoveTrait {

    /**
     * @param $nodeCode
     * @param $parentLevel
     * @return bool
     */
    private function _isNodeLengthValid($nodeCode, $parentLevel): bool {
        if ((strlen($nodeCode) / $this->nodeCodeLength) > $parentLevel) {
            return true;
        }
        $parentLevelCapacity = $this->totalNodeLevel - $parentLevel;
        if ($parentLevelCapacity == 0) {
            return false;
        }
        $nodeLength = 1;
        $nodeType = $this->getNodeMapNextKey($this->nodeMapNodeType);
        do {
            $totalChild = (new DynamicNodeView())->setTable($this->getNodeMapTableView($nodeType))->where('code', 'LIKE', $nodeCode . '%')->count();

            if ($totalChild > 0) {
                $nodeLength++;
                if ($parentLevelCapacity < $nodeLength) {
                    return false;
                }
            } else {
                break;
            }
            $nodeType = $this->getNodeMapNextKey($nodeType);
        } while ($nodeType);

        return ($parentLevelCapacity >= $nodeLength);
    }

    /**
     * This function will move node if the parent are same level node
     * @param $nodeModel
     * @param $targetNode
     * @param $parentNodeId
     */
    private function _processSameLevelNodeMove($nodeModel, $targetNode, $parentNodeId) {
        $parentNodeField = $this->getNodeMapParentField();

        $targetNode->{$parentNodeField} = $targetNode->replica_id = $parentNodeId;
        $targetNode->raw_code = $this->_generateRawCode($nodeModel, $parentNodeField, $parentNodeId);
        $targetNode->save();
    }

    /**
     * This function will move selected node to different level parent node
     * @param $newParentNodeType
     * @param $newParentNodeData
     * @param $targetNodeType
     * @param $targetNode
     * @return array
     */
    private function _processDifferentLevelNodeMove($newParentNodeType, $newParentNodeData, $targetNodeType, $targetNode): array {
        \Log::info('Start Function ' . __FUNCTION__);
        $newNodeType = $this->getNodeMapNextKey($newParentNodeType);
        $newNodeModelNameSpace = "App\\Models\\" . $this->getNodeMapModel($newNodeType);
        $newNodeParentField = $this->getNodeMapParentField($newNodeType);

        $itemCreateData = [
            $newNodeParentField => $newParentNodeData->id,
            'raw_code' => $this->_generateRawCode($newNodeModelNameSpace, $newNodeParentField, $newParentNodeData->id),
            'industry_code' => $targetNode->industry_code,
            'description' => $targetNode->description,
            'note' => $targetNode->note,
            'replica_id' => $newParentNodeData->id,
            'status' => $targetNode->status,
            'created_by' => auth()->id(),
            'cross_indexed' => $targetNode->cross_indexed
        ];

        $targetNewNode = (new $newNodeModelNameSpace())->create($itemCreateData);
        $totalCreated = 1;
        /* tracking node create */
        $industry = Industry::whereCode(substr($newParentNodeData->code, 0, 2))->first();
        $logDescription = auth()->user()->name . " create '$targetNewNode->description' " . str_replace('-', ' ', $newNodeType) . " in '{$industry->description}' industry";
        $this->addActivityLog(str_replace('-', '_', $newNodeType) . '_node', $targetNewNode, $logDescription);
        /* end tracking sub sector create */
        unset($itemCreateData);

        $oldNewParentIds = [$targetNode->id => $targetNewNode->id];
        \Log::debug('oldNewParentIds: ' . json_encode($oldNewParentIds));

        $oldChildNodeType = $this->getNodeMapNextKey($targetNodeType);
        $newChildrenNodeType = $this->getNodeMapNextKey($newNodeType);

        $deleteLayerIds = [];
        while ($oldChildNodeType) {
            $oldChildrenModelNamespace = "App\\Models\\" . $this->getNodeMapModel($oldChildNodeType);
            $oldChildParentField = $this->getNodeMapParentField($oldChildNodeType);
            \Log::info('array_keys(oldNewParentIds): ' . implode(',', array_keys($oldNewParentIds)));
            $oldChildren = $oldChildrenModelNamespace::whereIn($oldChildParentField, array_keys($oldNewParentIds))->get();

            $totalChildren = count($oldChildren);
            $totalCreated += $totalChildren;

            \Log::info('totalChildren: ' . $totalChildren);

            if ($totalChildren > 0) {
                $itemCreateData = [];
                $newChildModelNameSpace = "App\\Models\\" . $this->getNodeMapModel($newChildrenNodeType);
                $newChildParentField = $this->getNodeMapParentField($newChildrenNodeType);

                $oldChildIds = [];
                $i = 0;
                foreach ($oldChildren as $oldChild) {
                    $itemCreateData[] = [
                        $newChildParentField => $oldNewParentIds[$oldChild->{$oldChildParentField}],
                        'raw_code' => $oldChild->raw_code,
                        'description' => $oldChild->description,
                        'note' => $oldChild->note,
                        'replica_id' => $oldNewParentIds[$oldChild->{$oldChildParentField}],
                        'created_by' => auth()->id(),
                        'cross_indexed' => $oldChild->cross_indexed
                    ];
                    $oldChildIds[] = $oldChild->id;
                    $i++;
                    if ($i == 2000) {
                        (new $newChildModelNameSpace())->insert($itemCreateData);
                        unset($itemCreateData);
                        $itemCreateData = [];
                        $i = 0;
                    }
                }
                \Log::debug('oldChildIds: ' . implode(',', $oldChildIds));

                //Lock table needed to get exact id of the inserted data and not affected by other user.
//                \DB::statement('LOCK TABLES ' . $this->getNodeMapTable($newChildrenNodeType) . ' WRITE');
                if(!empty($itemCreateData)) {
                    (new $newChildModelNameSpace())->insert($itemCreateData);
                }
                $lastNodeId = (new $newChildModelNameSpace())::max('id');
//                \DB::statement('UNLOCK TABLES');
                unset($itemCreateData);

                if ($oldChildNodeType == 'layer') {
                    $deleteLayerIds = array_merge($deleteLayerIds, $oldChildIds);
                }

                unset($oldNewParentIds);
                $oldNewParentIds = [];
                $firstNodeId = $lastNodeId - ($totalChildren - 1);
                foreach ($oldChildIds as $i => $oldChildId) {
                    $oldNewParentIds[$oldChildId] = $firstNodeId;
                    $firstNodeId++;
                }
                unset($oldChildIds);
                \Log::info(__LINE__ . '-oldNewParentIds: ' . json_encode($oldNewParentIds));

                $newChildrenNodeType = $this->getNodeMapNextKey($newChildrenNodeType);
                $oldChildNodeType = $this->getNodeMapNextKey($oldChildNodeType);
            } else {
                break;
            }
        }
        \Log::info('End Function ' . __FUNCTION__);
        return [$targetNewNode->id, $deleteLayerIds, $totalCreated];
    }
}
