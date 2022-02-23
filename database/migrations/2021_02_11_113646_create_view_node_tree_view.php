<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateViewNodeTreeView extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        $viewSQL = <<<SQL
CREATE OR REPLACE VIEW `node_tree_view` AS
    SELECT `industries`.`id`              AS `industry_id`,
       `industries`.`code`                AS `industry_code`,
       `industries`.`description`         AS `industry_description`,
       `sectors_view`.`id`                AS `sector_id`,
       `sectors_view`.`code`              AS `sector_code`,
       `sectors_view`.`description`       AS `sector_description`,
       `sub_sectors_view`.`id`            AS `sub_sector_id`,
       `sub_sectors_view`.`code`          AS `sub_sector_code`,
       `sub_sectors_view`.`description`   AS `sub_sector_description`,
       `groups_view`.`id`                 AS `group_id`,
       `groups_view`.`code`               AS `group_code`,
       `groups_view`.`description`        AS `group_description`,
       `sub_groups_view`.`id`             AS `sub_group_id`,
       `sub_groups_view`.`code`           AS `sub_group_code`,
       `sub_groups_view`.`description`    AS `sub_group_description`,
       `echelons_view`.`id`               AS `echelon_id`,
       `echelons_view`.`code`             AS `echelon_code`,
       `echelons_view`.`description`      AS `echelon_description`,
       `sub_echelons_view`.`id`           AS `sub_echelon_id`,
       `sub_echelons_view`.`code`         AS `sub_echelon_code`,
       `sub_echelons_view`.`description`  AS `sub_echelon_description`,
       `tiers_view`.`id`                  AS `tier_id`,
       `tiers_view`.`code`                AS `tier_code`,
       `tiers_view`.`description`         AS `tier_description`,
       `sub_tiers_view`.`id`              AS `sub_tier_id`,
       `sub_tiers_view`.`code`            AS `sub_tier_code`,
       `sub_tiers_view`.`description`     AS `sub_tier_description`,
       `layers_view`.`id`                 AS `layer_id`,
       `layers_view`.`code`               AS `layer_code`,
       `layers_view`.`description`        AS `layer_description`,
       `sub_layers_view`.`id`             AS `sub_layer_id`,
       `sub_layers_view`.`code`           AS `sub_layer_code`,
       `sub_layers_view`.`description`    AS `sub_layer_description`,
       `decks_view`.`id`                  AS `deck_id`,
       `decks_view`.`code`                AS `deck_code`,
       `decks_view`.`description`         AS `deck_description`,
       `sub_decks_view`.`id`              AS `sub_deck_id`,
       `sub_decks_view`.`code`            AS `sub_deck_code`,
       `sub_decks_view`.`description`     AS `sub_deck_description`,
       `floors_view`.`id`                 AS `floor_id`,
       `floors_view`.`code`               AS `floor_code`,
       `floors_view`.`description`        AS `floor_description`,
       `sub_floors_view`.`id`             AS `sub_floor_id`,
       `sub_floors_view`.`code`           AS `sub_floor_code`,
       `sub_floors_view`.`description`    AS `sub_floor_description`,
       `basements_view`.`id`              AS `basement_id`,
       `basements_view`.`code`            AS `basement_code`,
       `basements_view`.`description`     AS `basement_description`,
       `sub_basements_view`.`id`          AS `sub_basement_id`,
       `sub_basements_view`.`code`        AS `sub_basement_code`,
       `sub_basements_view`.`description` AS `sub_basement_description`,
       `mines_view`.`id`                  AS `mines_id`,
       `mines_view`.`code`                AS `mines_code`,
       `mines_view`.`description`         AS `mines_description`,
       `sub_mines_view`.`id`              AS `sub_mine_id`,
       `sub_mines_view`.`code`            AS `sub_mine_code`,
       `sub_mines_view`.`description`     AS `sub_mine_description`
FROM `industries`
         LEFT JOIN `sectors_view` ON `industries`.`id` = `sectors_view`.`industry_id`
         LEFT JOIN `sub_sectors_view` ON `sectors_view`.`id` = `sub_sectors_view`.`sector_id`
         LEFT JOIN `groups_view` ON `sub_sectors_view`.`id` = `groups_view`.`sub_sector_id`
         LEFT JOIN `sub_groups_view` ON `groups_view`.`id` = `sub_groups_view`.`group_id`
         LEFT JOIN `echelons_view` ON `sub_groups_view`.`id` = `echelons_view`.`sub_group_id`
         LEFT JOIN `sub_echelons_view` ON `echelons_view`.`id` = `sub_echelons_view`.`echelon_id`
         LEFT JOIN `tiers_view` ON `sub_echelons_view`.`id` = `tiers_view`.`sub_echelon_id`
         LEFT JOIN `sub_tiers_view` ON `tiers_view`.`id` = `sub_tiers_view`.`tier_id`
         LEFT JOIN `layers_view` ON `sub_tiers_view`.`id` = `layers_view`.`sub_tier_id`
         LEFT JOIN `sub_layers_view` ON `layers_view`.`id` = `sub_layers_view`.`layer_id`
         LEFT JOIN `decks_view` ON `sub_layers_view`.`id` = `decks_view`.`sub_layer_id`
         LEFT JOIN `sub_decks_view` ON `decks_view`.`id` = `sub_decks_view`.`deck_id`
         LEFT JOIN `floors_view` ON `sub_decks_view`.`id` = `floors_view`.`sub_deck_id`
         LEFT JOIN `sub_floors_view` ON `floors_view`.`id` = `sub_floors_view`.`floor_id`
         LEFT JOIN `basements_view` ON `sub_floors_view`.`id` = `basements_view`.`sub_floor_id`
         LEFT JOIN `sub_basements_view` ON `basements_view`.`id` = `sub_basements_view`.`basement_id`
         LEFT JOIN `mines_view` ON `sub_basements_view`.`id` = `mines_view`.`sub_basement_id`
         LEFT JOIN `sub_mines_view` ON `mines_view`.`id` = `sub_mines_view`.`mine_id`
SQL;
        DB::statement($viewSQL);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        DB::statement("DROP VIEW IF EXISTS node_tree_view");
    }
}
