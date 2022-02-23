<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNodeKeywordMapsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('node_keyword_maps', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('keyword_id');
            $table->char('keyword_type',1)->comment("1=NodeKeyword, 2=NodeNegativeKeyword");
            $table->unsignedBigInteger('node_id');
            $table->string('node_code',255);
            $table->string('node_type',32);
            $table->integer('industry_id');

            $table->index(['keyword_id', 'node_id']);
            $table->foreign('keyword_id')->references('id')->on('node_keywords')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('node_keyword_maps');
    }
}
