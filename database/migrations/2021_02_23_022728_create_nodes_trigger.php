<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNodesTrigger extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::unprepared('
CREATE TRIGGER sectorTrigger AFTER UPDATE ON `sectors`
    FOR EACH ROW
BEGIN
    IF !(NEW.`status` <=> OLD.`status`) THEN
        UPDATE `sub_sectors` SET `sub_sectors`.`status` = NEW.`status` WHERE `sub_sectors`.`sector_id` = NEW.`id`;
    END IF;
END;

CREATE TRIGGER subSectorTrigger AFTER UPDATE ON `sub_sectors`
    FOR EACH ROW
BEGIN
    IF !(NEW.`status` <=> OLD.`status`) THEN
        UPDATE `groups` SET `groups`.`status` = NEW.`status` WHERE `groups`.`sub_sector_id` = NEW.`id`;
    END IF;
END;

CREATE TRIGGER groupTrigger AFTER UPDATE ON `groups`
    FOR EACH ROW
BEGIN
    IF !(NEW.`status` <=> OLD.`status`) THEN
        UPDATE `sub_groups` SET `sub_groups`.`status` = NEW.`status` WHERE `sub_groups`.`group_id` = NEW.`id`;
    END IF;
END;

CREATE TRIGGER subGroupTrigger AFTER UPDATE ON `sub_groups`
    FOR EACH ROW
BEGIN
    IF !(NEW.`status` <=> OLD.`status`) THEN
        UPDATE `echelons` SET `echelons`.`status` = NEW.`status` WHERE `echelons`.`sub_group_id` = NEW.`id`;
    END IF;
END;

CREATE TRIGGER echelonTrigger AFTER UPDATE ON `echelons`
    FOR EACH ROW
BEGIN
    IF !(NEW.`status` <=> OLD.`status`) THEN
        UPDATE `sub_echelons` SET `sub_echelons`.`status` = NEW.`status` WHERE `sub_echelons`.`echelon_id` = NEW.`id`;
    END IF;
END;

CREATE TRIGGER subEchelonTrigger AFTER UPDATE ON `sub_echelons`
    FOR EACH ROW
BEGIN
    IF !(NEW.`status` <=> OLD.`status`) THEN
        UPDATE `tiers` SET `tiers`.`status` = NEW.`status` WHERE `tiers`.`sub_echelon_id` = NEW.`id`;
    END IF;
END;

CREATE TRIGGER tierTrigger AFTER UPDATE ON `tiers`
    FOR EACH ROW
BEGIN
    IF !(NEW.`status` <=> OLD.`status`) THEN
        UPDATE `sub_tiers` SET `sub_tiers`.`status` = NEW.`status` WHERE `sub_tiers`.`tier_id` = NEW.`id`;
    END IF;
END;

CREATE TRIGGER subTierTrigger AFTER UPDATE ON `sub_tiers`
    FOR EACH ROW
BEGIN
    IF !(NEW.`status` <=> OLD.`status`) THEN
        UPDATE `layers` SET `layers`.`status` = NEW.`status` WHERE `layers`.`sub_tier_id` = NEW.`id`;
    END IF;
END;

CREATE TRIGGER layerTrigger AFTER UPDATE ON `layers`
    FOR EACH ROW
BEGIN
    IF !(NEW.`status` <=> OLD.`status`) THEN
        UPDATE `sub_layers` SET `sub_layers`.`status` = NEW.`status` WHERE `sub_layers`.`layer_id` = NEW.`id`;
    END IF;
END;

CREATE TRIGGER subLayerTrigger AFTER UPDATE ON `sub_layers`
    FOR EACH ROW
BEGIN
    IF !(NEW.`status` <=> OLD.`status`) THEN
        UPDATE `decks` SET `decks`.`status` = NEW.`status` WHERE `decks`.`sub_layer_id` = NEW.`id`;
    END IF;
END;

CREATE TRIGGER deckTrigger AFTER UPDATE ON `decks`
    FOR EACH ROW
BEGIN
    IF !(NEW.`status` <=> OLD.`status`) THEN
        UPDATE `sub_decks` SET `sub_decks`.`status` = NEW.`status` WHERE `sub_decks`.`deck_id` = NEW.`id`;
    END IF;
END;

CREATE TRIGGER subDeckTrigger AFTER UPDATE ON `sub_decks`
    FOR EACH ROW
BEGIN
    IF !(NEW.`status` <=> OLD.`status`) THEN
        UPDATE `floors` SET `floors`.`status` = NEW.`status` WHERE `floors`.`sub_deck_id` = NEW.`id`;
    END IF;
END;

CREATE TRIGGER floorTrigger AFTER UPDATE ON `floors`
    FOR EACH ROW
BEGIN
    IF !(NEW.`status` <=> OLD.`status`) THEN
        UPDATE `sub_floors` SET `sub_floors`.`status` = NEW.`status` WHERE `sub_floors`.`floor_id` = NEW.`id`;
    END IF;
END;

CREATE TRIGGER subFloorTrigger AFTER UPDATE ON `sub_floors`
    FOR EACH ROW
BEGIN
    IF !(NEW.`status` <=> OLD.`status`) THEN
        UPDATE `basements` SET `basements`.`status` = NEW.`status` WHERE `basements`.`sub_floor_id` = NEW.`id`;
    END IF;
END;

CREATE TRIGGER basementTrigger AFTER UPDATE ON `basements`
    FOR EACH ROW
BEGIN
    IF !(NEW.`status` <=> OLD.`status`) THEN
        UPDATE `sub_basements` SET `sub_basements`.`status` = NEW.`status` WHERE `sub_basements`.`basement_id` = NEW.`id`;
    END IF;
END;

CREATE TRIGGER subBasementTrigger AFTER UPDATE ON `sub_basements`
    FOR EACH ROW
BEGIN
    IF !(NEW.`status` <=> OLD.`status`) THEN
        UPDATE `mines` SET `mines`.`status` = NEW.`status` WHERE `mines`.`sub_basement_id` = NEW.`id`;
    END IF;
END;

CREATE TRIGGER mineTrigger AFTER UPDATE ON `mines`
    FOR EACH ROW
BEGIN
    IF !(NEW.`status` <=> OLD.`status`) THEN
        UPDATE `sub_mines` SET `sub_mines`.`status` = NEW.`status` WHERE `sub_mines`.`mine_id` = NEW.`id`;
    END IF;
END;');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::unprepared('DROP TRIGGER `mineTrigger`');
        DB::unprepared('DROP TRIGGER `subBasementTrigger`');
        DB::unprepared('DROP TRIGGER `basementTrigger`');
        DB::unprepared('DROP TRIGGER `subFloorTrigger`');
        DB::unprepared('DROP TRIGGER `floorTrigger`');
        DB::unprepared('DROP TRIGGER `subDeckTrigger`');
        DB::unprepared('DROP TRIGGER `deckTrigger`');
        DB::unprepared('DROP TRIGGER `subLayerTrigger`');
        DB::unprepared('DROP TRIGGER `layerTrigger`');
        DB::unprepared('DROP TRIGGER `subTierTrigger`');
        DB::unprepared('DROP TRIGGER `tierTrigger`');
        DB::unprepared('DROP TRIGGER `subEchelonTrigger`');
        DB::unprepared('DROP TRIGGER `echelonTrigger`');
        DB::unprepared('DROP TRIGGER `subGroupTrigger`');
        DB::unprepared('DROP TRIGGER `groupTrigger`');
        DB::unprepared('DROP TRIGGER `subSectorTrigger`');
        DB::unprepared('DROP TRIGGER `sectorTrigger`');
    }
}
