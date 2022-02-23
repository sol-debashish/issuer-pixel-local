<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNodeWarpLookupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('node_warp_lookups', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('source_node_categorization_level_id');
            $table->bigInteger('source_node_id')->unsigned();
            $table->unsignedInteger('destination_node_categorization_level_id');
            $table->bigInteger('destination_node_id')->unsigned();
            $table->bigInteger('created_by')->unsigned()->nullable();
            $table->timestamps();
            $table->index(['source_node_id', 'destination_node_id']);
         });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('node_warp_lookups');
    }
}
