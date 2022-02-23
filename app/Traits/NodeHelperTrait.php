<?php

namespace App\Traits;

use App\Models\Industry;

trait NodeHelperTrait {
    private function _generateCode($totalItem, $item, $paddingCode) {
        $code = $paddingCode . str_pad($totalItem, 2, '0', STR_PAD_LEFT);

        // call the same function if the exists already
        if ($this->_codeExists($code, $item)) {
            return $this->_generateCode($totalItem + 1, $item, $paddingCode);
        }
        // otherwise, it's valid and can be used
        return $code;
    }

    private function _codeExists($code, $item) {
        return $item->whereCode($code)->exists();
    }

    /**
     * @param $nodeModelNamespace
     * @param $parentNodeField
     * @param $parentNodeId
     * @return int
     */
    private function _generateRawCode($nodeModelNamespace, $parentNodeField, $parentNodeId): string {
        $totalChildren = $nodeModelNamespace::selectRaw('IFNULL(MAX(CAST(raw_code AS SIGNED)), 0) as totalSiblings')
            ->where($parentNodeField, $parentNodeId)->first();

        $totalChildren = (int)$totalChildren->totalSiblings + 1;

        return str_pad($totalChildren, $this->nodeCodeLength, '0', STR_PAD_LEFT);
    }

    /**
     * @param $targetModelNamespace
     * @param $currentReplica
     * @param $parentField
     */
    private function _updateReplica($targetModelNamespace, $currentReplica, $parentField) {
        /* code for update replica id */
        $replicaIdArray = $targetModelNamespace::where('replica_id', $currentReplica)->pluck($parentField, 'id')->toArray();
        if (count($replicaIdArray) > 0) {
            $replicaId = implode(':', $replicaIdArray);
            $updateIds = array_keys($replicaIdArray);
            $targetModelNamespace::whereIn('id', $updateIds)->update(['replica_id' => $replicaId]);
        }
    }

    private function _industryNodeCount($industry_id){
        $industry = Industry::with(['sector'])->find($industry_id);

        $totalNode = 1;
        $totalNode += $industry->sector()->count();
        foreach($industry->sector as $sector)
        {
            $totalNode += $sector->subSector()->count();
            foreach($sector->subSector as $subSector)
            {
                $totalNode += $subSector->group()->count();
                foreach($subSector->group as $group)
                {
                    $totalNode += $group->subGroup()->count();
                    foreach($group->subGroup as $subGroup)
                    {
                        $totalNode += $subGroup->echelon()->count();
                        foreach($subGroup->echelon as $echelon)
                        {
                            $totalNode += $echelon->subEchelon()->count();
                            foreach($echelon->subEchelon as $subEchelon)
                            {
                                $totalNode += $subEchelon->tier()->count();
                                foreach($subEchelon->tier as $tier)
                                {
                                    $totalNode += $tier->subTier()->count();
                                    foreach($tier->subTier as $subTier)
                                    {
                                        $totalNode += $subTier->layer()->count();

                                        foreach($subTier->layer as $layer)
                                        {
                                            $totalNode += $layer->subLayer()->count();
                                            foreach($layer->subLayer as $subLayer)
                                            {
                                                $totalNode += $subLayer->deck()->count();
                                                foreach($subLayer->deck as $deck)
                                                {
                                                    $totalNode += $deck->subDeck()->count();

                                                    foreach($deck->subDeck as $subDeck)
                                                    {
                                                        $totalNode += $subDeck->floor()->count();

                                                        foreach($subDeck->floor as $floor)
                                                        {
                                                            $totalNode += $floor->subFloor()->count();

                                                            foreach($floor->subFloor as $subFloor)
                                                            {
                                                                $totalNode += $subFloor->basement()->count();
                                                                foreach($subFloor->basement as $basement)
                                                                {
                                                                    $totalNode += $basement->subBasement()->count();

                                                                    foreach($basement->subBasement as $subBasement)
                                                                    {
                                                                        $totalNode += $subBasement->mine()->count();

                                                                        foreach($subBasement->mine as $mine)
                                                                        {
                                                                            $totalNode += $mine->subMine()->count();

//                                                                            foreach($mine->subMine as $subMine)
//                                                                            {
//                                                                                echo "sub_mine_id $subMine->id<br>";
//                                                                            }
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
        return  $totalNode;
    }
}
