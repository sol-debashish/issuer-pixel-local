<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIndustryNodeStatisticsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('industry_node_statistics', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('industry_id')->unsigned();
            $table->integer('total_nodes')->unsigned();
            $table->integer('nodes_added')->unsigned()->default(0);
            $table->integer('nodes_edited')->unsigned()->default(0);
            $table->integer('nodes_deleted')->unsigned()->default(0);
            $table->date('created_at');

            $table->index(['industry_id', 'created_at']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('industry_node_statistics');
    }
}
