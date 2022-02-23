<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSocialAnalyticsDataTwitterTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('social_analytics_data_twitter', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('media_id')->unsigned();
            $table->string('media_type', 16);
            $table->bigInteger('company_id')->unsigned();
            $table->bigInteger('tweet_post_id')->unsigned();
            $table->bigInteger('impressions')->unsigned()->nullable();
            $table->bigInteger('retweets')->unsigned()->nullable();
            $table->bigInteger('quote_tweets')->unsigned()->nullable();
            $table->bigInteger('likes')->unsigned()->nullable();
            $table->bigInteger('replies')->unsigned()->nullable();
            $table->bigInteger('url_link_clicks')->unsigned()->nullable();
            $table->bigInteger('user_profile_clicks')->unsigned()->nullable();
            $table->bigInteger('video_views')->unsigned()->nullable();
            $table->timestamp('shared_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('social_analytics_data_twitter');
    }
}
