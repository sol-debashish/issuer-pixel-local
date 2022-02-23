<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTwitterTrendingTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('twitter_trending_tags', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255)->nullable();
            $table->text('url')->nullable();
            $table->text('query')->nullable();
            $table->bigInteger('tweet_volume')->nullable();
            $table->integer('woeid')->nullable();
            $table->boolean('is_recent', 1)->default(1)->comment('1 = Recent Trend, 0 = Old Trend');
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
        Schema::dropIfExists('twitter_trending_tags');
    }
}
