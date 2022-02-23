<?php


namespace App\Traits;


trait NodeMap {

    private $nodeMapNodeType;
    private $nodeCodeLength = 2;
    private $totalNodeLevel = 19;

    private $nodeMap = [
        'industry' => ['model' => 'Industry', 'table' => 'industries', 'parent_field' => '', 'parent_model' => '', 'next_key' => 'sector'],
        'sector' => ['model' => 'Sector', 'table' => 'sectors', 'parent_field' => 'industry_id', 'parent_model' => 'Industry', 'next_key' => 'sub-sector'],
        'sub-sector' => ['model' => 'SubSector', 'table' => 'sub_sectors', 'parent_field' => 'sector_id', 'parent_model' => 'Sector', 'next_key' => 'group'],
        'group' => ['model' => 'Group', 'table' => 'groups', 'parent_field' => 'sub_sector_id', 'parent_model' => 'SubSector', 'next_key' => 'sub-group'],
        'sub-group' => ['model' => 'SubGroup', 'table' => 'sub_groups', 'parent_field' => 'group_id', 'parent_model' => 'Group', 'next_key' => 'echelon'],
        'echelon' => ['model' => 'Echelon', 'table' => 'echelons', 'parent_field' => 'sub_group_id', 'parent_model' => 'SubGroup', 'next_key' => 'sub-echelon'],
        'sub-echelon' => ['model' => 'SubEchelon', 'table' => 'sub_echelons', 'parent_field' => 'echelon_id', 'parent_model' => 'Echelon', 'next_key' => 'tier'],
        'tier' => ['model' => 'Tier', 'table' => 'tiers', 'parent_field' => 'sub_echelon_id', 'parent_model' => 'SubEchelon', 'next_key' => 'sub-tier'],
        'sub-tier' => ['model' => 'SubTier', 'table' => 'sub_tiers', 'parent_field' => 'tier_id', 'parent_model' => 'Tier', 'next_key' => 'layer'],
        'layer' => ['model' => 'Layer', 'table' => 'layers', 'parent_field' => 'sub_tier_id', 'parent_model' => 'SubTier', 'next_key' => 'sub-layer'],
        'sub-layer' => ['model' => 'SubLayer', 'table' => 'sub_layers', 'parent_field' => 'layer_id', 'parent_model' => 'Layer', 'next_key' => 'deck'],
        'deck' => ['model' => 'Deck', 'table' => 'decks', 'parent_field' => 'sub_layer_id', 'parent_model' => 'SubLayer', 'next_key' => 'sub-deck'],
        'sub-deck' => ['model' => 'SubDeck', 'table' => 'sub_decks', 'parent_field' => 'deck_id', 'parent_model' => 'Deck', 'next_key' => 'floor'],
        'floor' => ['model' => 'Floor', 'table' => 'floors', 'parent_field' => 'sub_deck_id', 'parent_model' => 'SubDeck', 'next_key' => 'sub-floor'],
        'sub-floor' => ['model' => 'SubFloor', 'table' => 'sub_floors', 'parent_field' => 'floor_id', 'parent_model' => 'Floor', 'next_key' => 'basement'],
        'basement' => ['model' => 'Basement', 'table' => 'basements', 'parent_field' => 'sub_floor_id', 'parent_model' => 'SubFloor', 'next_key' => 'sub-basement'],
        'sub-basement' => ['model' => 'SubBasement', 'table' => 'sub_basements', 'parent_field' => 'basement_id', 'parent_model' => 'Basement', 'next_key' => 'mine'],
        'mine' => ['model' => 'Mine', 'table' => 'mines', 'parent_field' => 'sub_basement_id', 'parent_model' => 'SubBasement', 'next_key' => 'sub-mine'],
        'sub-mine' => ['model' => 'SubMine', 'table' => 'sub_mines', 'parent_field' => 'mine_id', 'parent_model' => 'Mine', 'next_key' => '']
    ];

    private function nodeExistsInNodeMap($node_type = ''): bool {
        if (empty($node_type)) {
            $node_type = $this->nodeMapNodeType;
        }
        return isset($this->nodeMap[$node_type]);
    }

    private function findNodeMapKeyByModel($model): string {
        foreach ($this->nodeMap as $key => $val) {
            if ($val['model'] === $model) {
                return $key;
            }
        }
        return '';
    }

    private function _sameMoveLevel($movingTo): bool {
        return $this->getNodeMapParentModel() == $movingTo;
    }

    private function getNodeMapModel($node_type = ''): string {
        if (empty($node_type)) {
            $node_type = $this->nodeMapNodeType;
        }
        return $this->nodeMap[$node_type]['model'];
    }

    private function getNodeMapTable($node_type = ''): string {
        if (empty($node_type)) {
            $node_type = $this->nodeMapNodeType;
        }
        return $this->nodeMap[$node_type]['table'];
    }

    private function getNodeMapTableView($node_type = ''): string {
        if (empty($node_type)) {
            $node_type = $this->nodeMapNodeType;
        }
        return $this->nodeMap[$node_type]['table'] . '_view';
    }

    private function getNodeMapParentField($node_type = ''): string {
        if (empty($node_type)) {
            $node_type = $this->nodeMapNodeType;
        }
        return $this->nodeMap[$node_type]['parent_field'];
    }

    private function getNodeMapParentModel($node_type = ''): string {
        if (empty($node_type)) {
            $node_type = $this->nodeMapNodeType;
        }
        return $this->nodeMap[$node_type]['parent_model'];
    }

    private function getNodeMapNextKey($node_type = ''): string {
        if (empty($node_type)) {
            $node_type = $this->nodeMapNodeType;
        }
        return $this->nodeMap[$node_type]['next_key'];
    }
    private function getNodeMap($node_type = ''): array {
        if (empty($node_type)) {
            $node_type = $this->nodeMapNodeType;
        }
        return $this->nodeMap[$node_type];
    }

}
