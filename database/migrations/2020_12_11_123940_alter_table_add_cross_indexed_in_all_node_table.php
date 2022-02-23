<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterTableAddCrossIndexedInAllNodeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('industries', function (Blueprint $table) {
            $table->char('cross_indexed', 1)->default(0);
        });
        Schema::table('sectors', function (Blueprint $table) {
            $table->char('cross_indexed', 1)->default(0);
        });
        Schema::table('sub_sectors', function (Blueprint $table) {
            $table->char('cross_indexed', 1)->default(0);
        });
        Schema::table('groups', function (Blueprint $table) {
            $table->char('cross_indexed', 1)->default(0);
        });
        Schema::table('sub_groups', function (Blueprint $table) {
            $table->char('cross_indexed', 1)->default(0);
        });
        Schema::table('echelons', function (Blueprint $table) {
            $table->char('cross_indexed', 1)->default(0);
        });
        Schema::table('sub_echelons', function (Blueprint $table) {
            $table->char('cross_indexed', 1)->default(0);
        });
        Schema::table('tiers', function (Blueprint $table) {
            $table->char('cross_indexed', 1)->default(0);
        });
        Schema::table('sub_tiers', function (Blueprint $table) {
            $table->char('cross_indexed', 1)->default(0);
        });
        Schema::table('layers', function (Blueprint $table) {
            $table->char('cross_indexed', 1)->default(0);
        });
        Schema::table('sub_layers', function (Blueprint $table) {
            $table->char('cross_indexed', 1)->default(0);
        });
        Schema::table('decks', function (Blueprint $table) {
            $table->char('cross_indexed', 1)->default(0);
        });
        Schema::table('sub_decks', function (Blueprint $table) {
            $table->char('cross_indexed', 1)->default(0);
        });
        Schema::table('floors', function (Blueprint $table) {
            $table->char('cross_indexed', 1)->default(0);
        });
        Schema::table('sub_floors', function (Blueprint $table) {
            $table->char('cross_indexed', 1)->default(0);
        });
        Schema::table('basements', function (Blueprint $table) {
            $table->char('cross_indexed', 1)->default(0);
        });
        Schema::table('sub_basements', function (Blueprint $table) {
            $table->char('cross_indexed', 1)->default(0);
        });
        Schema::table('mines', function (Blueprint $table) {
            $table->char('cross_indexed', 1)->default(0);
        });
        Schema::table('sub_mines', function (Blueprint $table) {
            $table->char('cross_indexed', 1)->default(0);
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
            $table->dropColumn('cross_indexed');
        });
        Schema::table('sectors', function (Blueprint $table) {
            $table->dropColumn('cross_indexed');
        });
        Schema::table('sub_sectors', function (Blueprint $table) {
            $table->dropColumn('cross_indexed');
        });
        Schema::table('groups', function (Blueprint $table) {
            $table->dropColumn('cross_indexed');
        });
        Schema::table('sub_groups', function (Blueprint $table) {
            $table->dropColumn('cross_indexed');
        });
        Schema::table('echelons', function (Blueprint $table) {
            $table->dropColumn('cross_indexed');
        });
        Schema::table('sub_echelons', function (Blueprint $table) {
            $table->dropColumn('cross_indexed');
        });
        Schema::table('tiers', function (Blueprint $table) {
            $table->dropColumn('cross_indexed');
        });
        Schema::table('sub_tiers', function (Blueprint $table) {
            $table->dropColumn('cross_indexed');
        });
        Schema::table('layers', function (Blueprint $table) {
            $table->dropColumn('cross_indexed');
        });
        Schema::table('sub_layers', function (Blueprint $table) {
           $table->dropColumn('cross_indexed');
        });
        Schema::table('decks', function (Blueprint $table) {
            $table->dropColumn('cross_indexed');
        });
        Schema::table('sub_decks', function (Blueprint $table) {
            $table->dropColumn('cross_indexed');
        });
        Schema::table('floors', function (Blueprint $table) {
            $table->dropColumn('cross_indexed');
        });
        Schema::table('sub_floors', function (Blueprint $table) {
            $table->dropColumn('cross_indexed');
        });
        Schema::table('basements', function (Blueprint $table) {
            $table->dropColumn('cross_indexed');
        });
        Schema::table('sub_basements', function (Blueprint $table) {
            $table->dropColumn('cross_indexed');
        });
        Schema::table('mines', function (Blueprint $table) {
            $table->dropColumn('cross_indexed');
        });
        Schema::table('sub_mines', function (Blueprint $table) {
            $table->dropColumn('cross_indexed');
        });
    }
}
