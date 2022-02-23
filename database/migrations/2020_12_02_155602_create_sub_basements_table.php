<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubBasementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sub_basements', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('basement_id')->unsigned();

            $table->string('code', 128)->nullable();

            $table->string('industry_code', 16)->nullable();
            $table->string('sector_code', 16)->nullable();
            $table->string('sub_sector_code', 16)->nullable();

            $table->string('group_code', 32)->nullable();
            $table->string('sub_group_code', 32)->nullable();
            $table->string('echelon_code', 32)->nullable();
            $table->string('sub_echelon_code', 32)->nullable();
            $table->string('tier_code', 32)->nullable();
            $table->string('sub_tier_code', 32)->nullable();

            $table->string('layer_code', 64)->nullable();
            $table->string('sub_layer_code', 64)->nullable();
            $table->string('deck_code', 64)->nullable();
            $table->string('sub_deck_code', 64)->nullable();
            $table->string('floor_code', 64)->nullable();
            $table->string('sub_floor_code', 64)->nullable();

            $table->string('basement_code', 128)->nullable();

            $table->string('description', 512);
            $table->text('note')->nullable();
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
            $table->index(['sub_tier_code', 'layer_code']);
            $table->index(['sub_layer_code', 'deck_code']);
            $table->index(['sub_deck_code','floor_code']);
            $table->index(['sub_floor_code','basement_code']);

            $table->foreign('basement_id')->references('id')->on('basements')->onDelete('cascade')->onUpdate('cascade');
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
        Schema::dropIfExists('sub_basements');
    }
}
