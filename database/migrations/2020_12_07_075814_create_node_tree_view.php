<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateNodeTreeView extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement("
            CREATE VIEW node_tree_view
            AS
            SELECT
                industries.id AS industry_id,
                industries.code AS industry_node,
                industries.description AS industry_description,
                sectors.id AS sector_id,
                sectors.code AS sector_node,
                sectors.description AS sector_description,
                sub_sectors.id AS sub_sector_id,
                sub_sectors.code AS sub_sector_node,
                sub_sectors.description AS sub_sector_description,
                groups.id AS group_id,
                groups.code AS group_node,
                groups.description AS group_description,
                sub_groups.id AS sub_group_id,
                sub_groups.code AS sub_group_node,
                sub_groups.description AS sub_group_description,
                echelons.id AS echelon_id,
                echelons.code AS echelon_node,
                echelons.description AS echelon_description,
                sub_echelons.id AS sub_echelon_id,
                sub_echelons.code AS sub_echelon_node,
                sub_echelons.description AS sub_echelon_description,
                tiers.id AS tier_id,
                tiers.code AS tier_node,
                tiers.description AS tier_description,
                sub_tiers.id AS sub_tier_id,
                sub_tiers.code AS sub_tier_node,
                sub_tiers.description AS sub_tier_description,
                layers.id AS layer_id,
                layers.code AS layer_node,
                layers.description AS layer_description,
                sub_layers.id AS sub_layer_id,
                sub_layers.code AS sub_layer_node,
                sub_layers.description AS sub_layer_description,
                decks.id AS deck_id,
                decks.code AS deck_node,
                decks.description AS deck_description,
                sub_decks.id AS sub_deck_id,
                sub_decks.code AS sub_deck_node,
                sub_decks.description AS sub_deck_description,
                floors.id AS floor_id,
                floors.code AS floor_node,
                floors.description AS floor_description,
                sub_floors.id AS sub_floor_id,
                sub_floors.code AS sub_floor_node,
                sub_floors.description AS sub_floor_description,
                basements.id AS basements_id,
                basements.code AS basements_node,
                basements.description AS basements_description,
                sub_basements.id AS sub_basement_id,
                sub_basements.code AS sub_basement_node,
                sub_basements.description AS sub_basement_description,
                mines.id AS mines_id,
                mines.code AS mines_node,
                mines.description AS mines_description,
                sub_mines.id AS sub_mine_id,
                sub_mines.code AS sub_mine_node,
                sub_mines.description AS sub_mine_description
            FROM
                industries
                LEFT JOIN sectors ON industries.id = sectors.industry_id
                LEFT JOIN sub_sectors ON sectors.id = sub_sectors.sector_id
                LEFT JOIN groups ON sub_sectors.id = groups.sub_sector_id
                LEFT JOIN sub_groups ON groups.id = sub_groups.group_id
                LEFT JOIN echelons ON sub_groups.id = echelons.sub_group_id
                LEFT JOIN sub_echelons ON echelons.id = sub_echelons.echelon_id
                LEFT JOIN tiers ON sub_echelons.id = tiers.sub_echelon_id
                LEFT JOIN sub_tiers ON tiers.id = sub_tiers.tier_id
                LEFT JOIN layers ON sub_tiers.id = layers.sub_tier_id
                LEFT JOIN sub_layers ON layers.id = sub_layers.layer_id
                LEFT JOIN decks ON sub_layers.id = decks.sub_layer_id
                LEFT JOIN sub_decks ON decks.id = sub_decks.deck_id
                LEFT JOIN floors ON sub_decks.id = floors.sub_deck_id
                LEFT JOIN sub_floors ON floors.id = sub_floors.floor_id
                LEFT JOIN basements ON sub_floors.id = basements.sub_floor_id
                LEFT JOIN sub_basements ON basements.id = sub_basements.basement_id
                LEFT JOIN mines ON sub_basements.id = mines.sub_basement_id
                LEFT JOIN sub_mines ON mines.id = sub_mines.mine_id;
        ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('node_tree_view');
    }
}
