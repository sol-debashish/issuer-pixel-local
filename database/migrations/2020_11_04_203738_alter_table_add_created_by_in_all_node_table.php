<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterTableAddCreatedByInAllNodeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('industries', function (Blueprint $table) {
            $table->bigInteger('created_by')->unsigned()->nullable()->after('status');
            $table->foreign('created_by')->references('id')->on('users')->onDelete('set null')->onUpdate('cascade');
        });
        Schema::table('sectors', function (Blueprint $table) {
            $table->bigInteger('created_by')->unsigned()->nullable()->after('status');
            $table->foreign('created_by')->references('id')->on('users')->onDelete('set null')->onUpdate('cascade');
        });
        Schema::table('sub_sectors', function (Blueprint $table) {
            $table->bigInteger('created_by')->unsigned()->nullable()->after('status');
            $table->foreign('created_by')->references('id')->on('users')->onDelete('set null')->onUpdate('cascade');
        });
        Schema::table('groups', function (Blueprint $table) {
            $table->bigInteger('created_by')->unsigned()->nullable()->after('status');
            $table->foreign('created_by')->references('id')->on('users')->onDelete('set null')->onUpdate('cascade');
        });
        Schema::table('sub_groups', function (Blueprint $table) {
            $table->bigInteger('created_by')->unsigned()->nullable()->after('status');
            $table->foreign('created_by')->references('id')->on('users')->onDelete('set null')->onUpdate('cascade');
        });
        Schema::table('echelons', function (Blueprint $table) {
            $table->bigInteger('created_by')->unsigned()->nullable()->after('status');
            $table->foreign('created_by')->references('id')->on('users')->onDelete('set null')->onUpdate('cascade');
        });
        Schema::table('sub_echelons', function (Blueprint $table) {
            $table->bigInteger('created_by')->unsigned()->nullable()->after('status');
            $table->foreign('created_by')->references('id')->on('users')->onDelete('set null')->onUpdate('cascade');
        });
        Schema::table('tiers', function (Blueprint $table) {
            $table->bigInteger('created_by')->unsigned()->nullable()->after('status');
            $table->foreign('created_by')->references('id')->on('users')->onDelete('set null')->onUpdate('cascade');
        });
        Schema::table('sub_tiers', function (Blueprint $table) {
            $table->bigInteger('created_by')->unsigned()->nullable()->after('status');
            $table->foreign('created_by')->references('id')->on('users')->onDelete('set null')->onUpdate('cascade');
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
            $table->dropColumn('created_by');
        });
        Schema::table('sectors', function (Blueprint $table) {
            $table->dropColumn('created_by');
        });
        Schema::table('sub_sectors', function (Blueprint $table) {
            $table->dropColumn('created_by');
        });
        Schema::table('groups', function (Blueprint $table) {
            $table->dropColumn('created_by');
        });
        Schema::table('sub_groups', function (Blueprint $table) {
            $table->dropColumn('created_by');
        });
        Schema::table('echelons', function (Blueprint $table) {
            $table->dropColumn('created_by');
        });
        Schema::table('sub_echelons', function (Blueprint $table) {
            $table->dropColumn('created_by');
        });
        Schema::table('tiers', function (Blueprint $table) {
            $table->dropColumn('created_by');
        });
        Schema::table('sub_tiers', function (Blueprint $table) {
            $table->dropColumn('created_by');
        });
    }
}
