<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeColumnTypeToTextInReplicaIdAndChildNodeIdInAllNodeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sectors', function (Blueprint $table) {
            $table->text('replica_id')->nullable()->change();
            $table->text('child_node_id')->nullable()->change();
        });
        Schema::table('sub_sectors', function (Blueprint $table) {
            $table->text('replica_id')->nullable()->change();
            $table->text('child_node_id')->nullable()->change();
        });
        Schema::table('groups', function (Blueprint $table) {
            $table->text('replica_id')->nullable()->change();
            $table->text('child_node_id')->nullable()->change();
        });
        Schema::table('sub_groups', function (Blueprint $table) {
            $table->text('replica_id')->nullable()->change();
            $table->text('child_node_id')->nullable()->change();
        });
        Schema::table('echelons', function (Blueprint $table) {
            $table->text('replica_id')->nullable()->change();
            $table->text('child_node_id')->nullable()->change();
        });
        Schema::table('sub_echelons', function (Blueprint $table) {
            $table->text('replica_id')->nullable()->change();
            $table->text('child_node_id')->nullable()->change();
        });
        Schema::table('tiers', function (Blueprint $table) {
            $table->text('replica_id')->nullable()->change();
            $table->text('child_node_id')->nullable()->change();
        });
        Schema::table('sub_tiers', function (Blueprint $table) {
            $table->text('replica_id')->nullable()->change();
            $table->text('child_node_id')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sectors', function (Blueprint $table) {
            $table->string('replica_id', 512)->nullable()->change();
            $table->string('child_node_id', 512)->nullable()->change();
        });
        Schema::table('sub_sectors', function (Blueprint $table) {
            $table->string('replica_id', 512)->nullable()->change();
            $table->string('child_node_id', 512)->nullable()->change();
        });
        Schema::table('groups', function (Blueprint $table) {
            $table->string('replica_id', 512)->nullable()->change();
            $table->string('child_node_id', 512)->nullable()->change();
        });
        Schema::table('sub_groups', function (Blueprint $table) {
            $table->string('replica_id', 512)->nullable()->change();
            $table->string('child_node_id', 512)->nullable()->change();
        });
        Schema::table('echelons', function (Blueprint $table) {
            $table->string('replica_id', 512)->nullable()->change();
            $table->string('child_node_id', 512)->nullable()->change();
        });
        Schema::table('sub_echelons', function (Blueprint $table) {
            $table->string('replica_id', 512)->nullable()->change();
            $table->string('child_node_id', 512)->nullable()->change();
        });
        Schema::table('tiers', function (Blueprint $table) {
            $table->string('replica_id', 512)->nullable()->change();
            $table->string('child_node_id', 512)->nullable()->change();
        });
        Schema::table('sub_tiers', function (Blueprint $table) {
            $table->string('replica_id', 512)->nullable()->change();
            $table->string('child_node_id', 512)->nullable()->change();
        });
    }
}
