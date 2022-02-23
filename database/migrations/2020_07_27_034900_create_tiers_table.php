<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTiersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tiers', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('sub_echelon_id')->unsigned();

            $table->string('code', 16)->nullable();
            $table->string('industry_code', 16)->nullable();
            $table->string('sector_code', 16)->nullable();
            $table->string('sub_sector_code', 16)->nullable();
            $table->string('group_code', 16)->nullable();
            $table->string('sub_group_code', 16)->nullable();
            $table->string('echelon_code', 16)->nullable();
            $table->string('sub_echelon_code', 16)->nullable();

            $table->string('description', 255);
            $table->string('replica_id', 512)->nullable();
            $table->string('child_node_id', 512)->nullable();
            $table->char('status', 1)->default(1);
            $table->timestamps();

            $table->unique('code');
            $table->index(['industry_code', 'sector_code']);
            $table->index(['sub_sector_code', 'group_code']);
            $table->index(['sub_group_code', 'echelon_code']);
            $table->index(['sub_echelon_code']);
            $table->foreign('sub_echelon_id')->references('id')->on('sub_echelons')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tiers');
    }
}
