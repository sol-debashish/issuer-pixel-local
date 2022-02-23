<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateCodeFieldInAllNodeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('groups', function ($table) {
            $table->string('code', 32)->change();
        });
        Schema::table('sub_groups', function ($table) {
            $table->string('code', 32)->change();
            $table->string('group_code', 32)->change();
        });
        Schema::table('echelons', function ($table) {
            $table->string('code', 32)->change();
            $table->string('group_code', 32)->change();
            $table->string('sub_group_code', 32)->change();
        });
        Schema::table('sub_echelons', function ($table) {
            $table->string('code', 32)->change();
            $table->string('group_code', 32)->change();
            $table->string('sub_group_code', 32)->change();
            $table->string('echelon_code', 32)->change();
            $table->string('echelon_code', 32)->change();
        });
        Schema::table('tiers', function ($table) {
            $table->string('code', 32)->change();
            $table->string('group_code', 32)->change();
            $table->string('sub_group_code', 32)->change();
            $table->string('echelon_code', 32)->change();
            $table->string('sub_echelon_code', 32)->change();
        });
        Schema::table('sub_tiers', function ($table) {
            $table->string('code', 32)->change();
            $table->string('group_code', 32)->change();
            $table->string('sub_group_code', 32)->change();
            $table->string('echelon_code', 32)->change();
            $table->string('sub_echelon_code', 32)->change();
            $table->string('tier_code', 32)->change();
        });
        Schema::table('layers', function ($table) {
            $table->string('code', 64)->change();
            $table->string('group_code', 32)->change();
            $table->string('sub_group_code', 32)->change();
            $table->string('echelon_code', 32)->change();
            $table->string('sub_echelon_code', 32)->change();
            $table->string('tier_code', 32)->change();
            $table->string('sub_tier_code', 32)->change();
        });
        Schema::table('sub_layers', function ($table) {
            $table->string('code', 64)->change();
            $table->string('group_code', 32)->change();
            $table->string('sub_group_code', 32)->change();
            $table->string('echelon_code', 32)->change();
            $table->string('sub_echelon_code', 32)->change();
            $table->string('tier_code', 32)->change();
            $table->string('sub_tier_code', 32)->change();
            $table->string('layer_code', 64)->change();
        });
        Schema::table('decks', function ($table) {
            $table->string('code', 64)->change();
            $table->string('group_code', 32)->change();
            $table->string('sub_group_code', 32)->change();
            $table->string('echelon_code', 32)->change();
            $table->string('sub_echelon_code', 32)->change();
            $table->string('tier_code', 32)->change();
            $table->string('sub_tier_code', 32)->change();
            $table->string('layer_code', 64)->change();
            $table->string('sub_layer_code', 64)->change();
        });
        Schema::table('sub_decks', function ($table) {
            $table->string('code', 64)->change();
            $table->string('group_code', 32)->change();
            $table->string('sub_group_code', 32)->change();
            $table->string('echelon_code', 32)->change();
            $table->string('sub_echelon_code', 32)->change();
            $table->string('tier_code', 32)->change();
            $table->string('sub_tier_code', 32)->change();
            $table->string('layer_code', 64)->change();
            $table->string('sub_layer_code', 64)->change();
            $table->string('deck_code', 64)->change();
        });
        Schema::table('floors', function ($table) {
            $table->string('code', 64)->change();
            $table->string('group_code', 32)->change();
            $table->string('sub_group_code', 32)->change();
            $table->string('echelon_code', 32)->change();
            $table->string('sub_echelon_code', 32)->change();
            $table->string('tier_code', 32)->change();
            $table->string('sub_tier_code', 32)->change();
            $table->string('layer_code', 64)->change();
            $table->string('sub_layer_code', 64)->change();
            $table->string('deck_code', 64)->change();
            $table->string('sub_deck_code', 64)->change();
        });
        Schema::table('sub_floors', function ($table) {
            $table->string('code', 64)->change();
            $table->string('group_code', 32)->change();
            $table->string('sub_group_code', 32)->change();
            $table->string('echelon_code', 32)->change();
            $table->string('sub_echelon_code', 32)->change();
            $table->string('tier_code', 32)->change();
            $table->string('sub_tier_code', 32)->change();
            $table->string('layer_code', 64)->change();
            $table->string('sub_layer_code', 64)->change();
            $table->string('deck_code', 64)->change();
            $table->string('sub_deck_code', 64)->change();
            $table->string('floor_code', 64)->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('groups', function ($table) {
            $table->string('code', 16)->change();
        });


        Schema::table('sub_groups', function ($table) {
            $table->string('code', 16)->change();
            $table->string('group_code', 16)->change();
        });

        Schema::table('echelons', function ($table) {
            $table->string('code', 16)->change();
            $table->string('group_code', 16)->change();
            $table->string('sub_group_code', 16)->change();
        });

        Schema::table('sub_echelons', function ($table) {
            $table->string('code', 16)->change();
            $table->string('group_code', 16)->change();
            $table->string('sub_group_code', 16)->change();
            $table->string('echelon_code', 16)->change();
        });
        Schema::table('tiers', function ($table) {
            $table->string('code', 16)->change();
            $table->string('group_code', 16)->change();
            $table->string('sub_group_code', 16)->change();
            $table->string('echelon_code', 16)->change();
            $table->string('sub_echelon_code', 16)->change();
        });
        Schema::table('sub_tiers', function ($table) {
            $table->string('code', 18)->change();
            $table->string('group_code', 16)->change();
            $table->string('sub_group_code', 16)->change();
            $table->string('echelon_code', 16)->change();
            $table->string('sub_echelon_code', 16)->change();
            $table->string('tier_code', 16)->change();
        });
        Schema::table('layers', function ($table) {
            $table->string('code', 32)->change();
            $table->string('group_code', 16)->change();
            $table->string('sub_group_code', 16)->change();
            $table->string('echelon_code', 16)->change();
            $table->string('sub_echelon_code', 16)->change();
            $table->string('tier_code', 16)->change();
            $table->string('sub_tier_code', 18)->change();
        });
        Schema::table('sub_layers', function ($table) {
            $table->string('code', 32)->change();
            $table->string('group_code', 16)->change();
            $table->string('sub_group_code', 16)->change();
            $table->string('echelon_code', 16)->change();
            $table->string('sub_echelon_code', 16)->change();
            $table->string('tier_code', 16)->change();
            $table->string('sub_tier_code', 18)->change();
            $table->string('layer_code', 32)->change();
        });
        Schema::table('decks', function ($table) {
            $table->string('code', 32)->change();
            $table->string('group_code', 16)->change();
            $table->string('sub_group_code', 16)->change();
            $table->string('echelon_code', 16)->change();
            $table->string('sub_echelon_code', 16)->change();
            $table->string('tier_code', 16)->change();
            $table->string('sub_tier_code', 18)->change();
            $table->string('layer_code', 32)->change();
            $table->string('sub_layer_code', 32)->change();
        });
        Schema::table('sub_decks', function ($table) {
            $table->string('code', 32)->change();
            $table->string('group_code', 16)->change();
            $table->string('sub_group_code', 16)->change();
            $table->string('echelon_code', 16)->change();
            $table->string('sub_echelon_code', 16)->change();
            $table->string('tier_code', 16)->change();
            $table->string('sub_tier_code', 18)->change();
            $table->string('layer_code', 32)->change();
            $table->string('sub_layer_code', 32)->change();
            $table->string('deck_code', 32)->change();
        });
        Schema::table('floors', function ($table) {
            $table->string('code', 32)->change();
            $table->string('group_code', 16)->change();
            $table->string('sub_group_code', 16)->change();
            $table->string('echelon_code', 16)->change();
            $table->string('sub_echelon_code', 16)->change();
            $table->string('tier_code', 16)->change();
            $table->string('sub_tier_code', 18)->change();
            $table->string('layer_code', 32)->change();
            $table->string('sub_layer_code', 32)->change();
            $table->string('deck_code', 32)->change();
            $table->string('sub_deck_code', 32)->change();
        });
        Schema::table('sub_floors', function ($table) {
            $table->string('code', 32)->change();
            $table->string('group_code', 16)->change();
            $table->string('sub_group_code', 16)->change();
            $table->string('echelon_code', 16)->change();
            $table->string('sub_echelon_code', 16)->change();
            $table->string('tier_code', 16)->change();
            $table->string('sub_tier_code', 18)->change();
            $table->string('layer_code', 32)->change();
            $table->string('sub_layer_code', 32)->change();
            $table->string('deck_code', 32)->change();
            $table->string('sub_deck_code', 32)->change();
            $table->string('floor_code', 32)->change();
        });
    }
}
