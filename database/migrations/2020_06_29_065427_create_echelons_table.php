<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEchelonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('echelons', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('sub_group_id')->unsigned();

            $table->string('code', 16)->nullable();
            $table->string('industry_code', 16)->nullable();
            $table->string('sector_code', 16)->nullable();
            $table->string('sub_sector_code', 16)->nullable();
            $table->string('group_code', 16)->nullable();
            $table->string('sub_group_code', 16)->nullable();

            $table->string('description', 255);
            $table->string('replica_id', 512)->nullable();
            $table->string('child_node_id', 512)->nullable();
            $table->char('status',1)->default(1);
            $table->timestamps();

            $table->unique('code');
            $table->index(['industry_code', 'sector_code']);
            $table->index(['sub_sector_code', 'group_code']);
            $table->index(['sub_group_code']);
            $table->foreign('sub_group_id')->references('id')->on('sub_groups')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('echelons');
    }
}
