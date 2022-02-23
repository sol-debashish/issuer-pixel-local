<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNoteFieldInAllNodeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sectors', function (Blueprint $table) {
            $table->text('note')->nullable()->after('description');
        });
        Schema::table('industries', function (Blueprint $table) {
            $table->text('note')->nullable()->after('description');
        });
        Schema::table('sub_sectors', function (Blueprint $table) {

            $table->text('note')->nullable()->after('description');
        });
        Schema::table('groups', function (Blueprint $table) {
            $table->text('note')->nullable()->after('description');
        });
        Schema::table('sub_groups', function (Blueprint $table) {
            $table->text('note')->nullable()->after('description');
        });
        Schema::table('echelons', function (Blueprint $table) {
            $table->text('note')->nullable()->after('description');
        });
        Schema::table('sub_echelons', function (Blueprint $table) {
            $table->text('note')->nullable()->after('description');
        });
        Schema::table('tiers', function (Blueprint $table) {
            $table->text('note')->nullable()->after('description');
        });
        Schema::table('sub_tiers', function (Blueprint $table) {
            $table->text('note')->nullable()->after('description');
        });
        Schema::table('layers', function (Blueprint $table) {
            $table->text('note')->nullable()->after('description');
        });
        Schema::table('sub_layers', function (Blueprint $table) {
            $table->text('note')->nullable()->after('description');
        });
        Schema::table('decks', function (Blueprint $table) {
            $table->text('note')->nullable()->after('description');
        });
        Schema::table('sub_decks', function (Blueprint $table) {
            $table->text('note')->nullable()->after('description');
        });
        Schema::table('floors', function (Blueprint $table) {
            $table->text('note')->nullable()->after('description');
        });
        Schema::table('sub_floors', function (Blueprint $table) {
            $table->text('note')->nullable()->after('description');
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
            $table->dropColumn('note');
        });
        Schema::table('sectors', function (Blueprint $table) {
            $table->dropColumn('note');
        });
        Schema::table('sub_sectors', function (Blueprint $table) {
            $table->dropColumn('note');
        });
        Schema::table('groups', function (Blueprint $table) {
            $table->dropColumn('note');
        });
        Schema::table('sub_groups', function (Blueprint $table) {
            $table->dropColumn('note');
        });
        Schema::table('echelons', function (Blueprint $table) {
            $table->dropColumn('note');
        });
        Schema::table('sub_echelons', function (Blueprint $table) {
            $table->dropColumn('note');
        });
        Schema::table('tiers', function (Blueprint $table) {
            $table->dropColumn('note');
        });
        Schema::table('sub_tiers', function (Blueprint $table) {
            $table->dropColumn('note');
        });
        Schema::table('layers', function (Blueprint $table) {
            $table->dropColumn('note');
        });
        Schema::table('sub_layers', function (Blueprint $table) {
            $table->dropColumn('note');
        });
        Schema::table('decks', function (Blueprint $table) {
            $table->dropColumn('note');
        });
        Schema::table('sub_decks', function (Blueprint $table) {
            $table->dropColumn('note');
        });
        Schema::table('floors', function (Blueprint $table) {
            $table->dropColumn('note');
        });
        Schema::table('sub_floors', function (Blueprint $table) {
            $table->dropColumn('note');
        });
    }
}
