<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCrossIndexNodeLookupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cross_indexed_node_lookups', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('node_one_categorization_level_id');
            $table->bigInteger('node_one_id')->unsigned();
            $table->unsignedInteger('node_two_categorization_level_id');
            $table->bigInteger('node_two_id')->unsigned();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cross_indexed_node_lookups');
    }
}
