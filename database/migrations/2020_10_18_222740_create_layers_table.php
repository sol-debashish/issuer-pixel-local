<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLayersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('layers', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('sub_tier_id')->unsigned();

            $table->string('code', 32)->nullable();
            $table->string('industry_code', 16)->nullable();
            $table->string('sector_code', 16)->nullable();
            $table->string('sub_sector_code', 16)->nullable();
            $table->string('group_code', 16)->nullable();
            $table->string('sub_group_code', 16)->nullable();
            $table->string('echelon_code', 16)->nullable();
            $table->string('sub_echelon_code', 16)->nullable();
            $table->string('tier_code', 16)->nullable();
            $table->string('sub_tier_code', 18)->nullable();

            $table->string('description', 512);
            $table->text('replica_id')->nullable();
            $table->text('child_node_id')->nullable();
            $table->char('status', 1)->default(1);
            $table->bigInteger('created_by')->unsigned()->nullable();
            $table->timestamps();

            $table->unique('code');
            $table->index(['industry_code', 'sector_code']);
            $table->index(['sub_sector_code', 'group_code']);
            $table->index(['sub_group_code', 'echelon_code']);
            $table->index(['sub_echelon_code','tier_code']);
            $table->index(['sub_tier_code']);
            $table->foreign('sub_tier_id')->references('id')->on('sub_tiers')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('layers');
    }
}
