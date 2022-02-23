<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNodeLocationNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('node_location_news', function (Blueprint $table) {
            $table->id();
            $table->string('industry',200)->nullable();
            $table->string('node',200)->nullable();
            $table->string('author',100)->nullable();
            $table->string('title',255)->nullable();
            $table->text('description')->nullable();
            $table->text('url')->nullable();
            $table->text('urlToImage')->nullable();
            $table->dateTime('publishedAt')->nullable();
            $table->string('country',50)->nullable();
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
        Schema::dropIfExists('node_location_news');
    }
}
