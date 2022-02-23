<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateViewForAllNodeTables extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */

    private $nodes = [
        'sectors', 'sub_sectors', 'groups', 'sub_groups', 'echelons', 'sub_echelons', 'tiers', 'sub_tiers', 'layers', 'sub_layers', 'decks', 'sub_decks', 'floors', 'sub_floors', 'basements', 'sub_basements', 'mines', 'sub_mines'
    ];

    private $parentNodeId = [
        'industry_id', 'sector_id', 'sub_sector_id', 'group_id', 'sub_group_id', 'echelon_id', 'sub_echelon_id', 'tier_id', 'sub_tier_id', 'layer_id', 'sub_layer_id', 'deck_id', 'sub_deck_id', 'floor_id', 'sub_floor_id', 'basement_id', 'sub_basement_id', 'mine_id'
    ];

    public function up() {
        foreach ($this->nodes as $i => $node) {
            $joinNode = $i == 0 ? 'industries' : $this->nodes[$i - 1] . '_view';
            //$codeField = $i == 0 ? 'code' : 'raw_code';

            DB::statement("CREATE OR REPLACE VIEW `{$node}_view` AS SELECT
    `s`.`id` AS `id`,
    `s`.`{$this->parentNodeId[$i]}` AS `{$this->parentNodeId[$i]}`,
    concat(`i`.`code`, `s`.`raw_code`) AS `code`,
    `s`.`raw_code` AS `raw_code`,
    `s`.`description` AS `description`,
    `s`.`note` AS `note`,
    `s`.`replica_id` AS `replica_id`,
    `s`.`child_node_id` AS `child_node_id`,
    `s`.`status` AS `status`,
    `s`.`created_by` AS `created_by`,
    `s`.`created_at` AS `created_at`,
    `s`.`updated_at` AS `updated_at`,
    `s`.`cross_indexed` AS `cross_indexed`,
    `s`.`node_warp` AS `node_warp`
    FROM (`{$node}` `s` LEFT JOIN `{$joinNode}` `i` ON((`i`.`id` = `s`.`{$this->parentNodeId[$i]}`)))");
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        foreach ($this->nodes as $node) {
            DB::statement("DROP VIEW IF EXISTS {$node}_view");
        }
    }
}
