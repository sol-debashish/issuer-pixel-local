<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterAddNodeWarpFieldInAllNodeTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('industries', function (Blueprint $table) {
            $table->char('node_warp', 1)->default(0);
        });
        Schema::table('sectors', function (Blueprint $table) {
            $table->char('node_warp', 1)->default(0);
        });
        Schema::table('sub_sectors', function (Blueprint $table) {
            $table->char('node_warp', 1)->default(0);
        });
        Schema::table('groups', function (Blueprint $table) {
            $table->char('node_warp', 1)->default(0);
        });
        Schema::table('sub_groups', function (Blueprint $table) {
            $table->char('node_warp', 1)->default(0);
        });
        Schema::table('echelons', function (Blueprint $table) {
            $table->char('node_warp', 1)->default(0);
        });
        Schema::table('sub_echelons', function (Blueprint $table) {
            $table->char('node_warp', 1)->default(0);
        });
        Schema::table('tiers', function (Blueprint $table) {
            $table->char('node_warp', 1)->default(0);
        });
        Schema::table('sub_tiers', function (Blueprint $table) {
            $table->char('node_warp', 1)->default(0);
        });
        Schema::table('layers', function (Blueprint $table) {
            $table->char('node_warp', 1)->default(0);
        });
        Schema::table('sub_layers', function (Blueprint $table) {
            $table->char('node_warp', 1)->default(0);
        });
        Schema::table('decks', function (Blueprint $table) {
            $table->char('node_warp', 1)->default(0);
        });
        Schema::table('sub_decks', function (Blueprint $table) {
            $table->char('node_warp', 1)->default(0);
        });
        Schema::table('floors', function (Blueprint $table) {
            $table->char('node_warp', 1)->default(0);
        });
        Schema::table('sub_floors', function (Blueprint $table) {
            $table->char('node_warp', 1)->default(0);
        });
        Schema::table('basements', function (Blueprint $table) {
            $table->char('node_warp', 1)->default(0);
        });
        Schema::table('sub_basements', function (Blueprint $table) {
            $table->char('node_warp', 1)->default(0);
        });
        Schema::table('mines', function (Blueprint $table) {
            $table->char('node_warp', 1)->default(0);
        });
        Schema::table('sub_mines', function (Blueprint $table) {
            $table->char('node_warp', 1)->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('industries', function (Blueprint $table) {
            $table->dropColumn('node_warp');
        });
        Schema::table('sectors', function (Blueprint $table) {
            $table->dropColumn('node_warp');
        });
        Schema::table('sub_sectors', function (Blueprint $table) {
            $table->dropColumn('node_warp');
        });
        Schema::table('groups', function (Blueprint $table) {
            $table->dropColumn('node_warp');
        });
        Schema::table('sub_groups', function (Blueprint $table) {
            $table->dropColumn('node_warp');
        });
        Schema::table('echelons', function (Blueprint $table) {
            $table->dropColumn('node_warp');
        });
        Schema::table('sub_echelons', function (Blueprint $table) {
            $table->dropColumn('node_warp');
        });
        Schema::table('tiers', function (Blueprint $table) {
            $table->dropColumn('node_warp');
        });
        Schema::table('sub_tiers', function (Blueprint $table) {
            $table->dropColumn('node_warp');
        });
        Schema::table('layers', function (Blueprint $table) {
            $table->dropColumn('node_warp');
        });
        Schema::table('sub_layers', function (Blueprint $table) {
            $table->dropColumn('node_warp');
        });
        Schema::table('decks', function (Blueprint $table) {
            $table->dropColumn('node_warp');
        });
        Schema::table('sub_decks', function (Blueprint $table) {
            $table->dropColumn('node_warp');
        });
        Schema::table('floors', function (Blueprint $table) {
            $table->dropColumn('node_warp');
        });
        Schema::table('sub_floors', function (Blueprint $table) {
            $table->dropColumn('node_warp');
        });
        Schema::table('basements', function (Blueprint $table) {
            $table->dropColumn('node_warp');
        });
        Schema::table('sub_basements', function (Blueprint $table) {
            $table->dropColumn('node_warp');
        });
        Schema::table('mines', function (Blueprint $table) {
            $table->dropColumn('node_warp');
        });
        Schema::table('sub_mines', function (Blueprint $table) {
            $table->dropColumn('node_warp');
        });
    }
}
