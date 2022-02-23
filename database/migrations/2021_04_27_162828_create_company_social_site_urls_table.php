<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompanySocialSiteUrlsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('company_social_site_urls', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('company_id')->unsigned();
            $table->string('facebook_page', 128)->nullable();
            $table->string('instragram', 128)->nullable();
            $table->string('snapchat', 128)->nullable();
            $table->string('tiktok', 128)->nullable();
            $table->string('linkedin_page', 128)->nullable();
            $table->string('pinterest', 128)->nullable();
            $table->string('reddit', 128)->nullable();
            $table->string('stumble_upon', 128)->nullable();
            $table->string('dribble', 128)->nullable();
            $table->string('mix', 128)->nullable();
            $table->string('digg', 128)->nullable();
            $table->string('reddit_news', 128)->nullable();
            $table->string('product_hunt', 128)->nullable();
            $table->string('mix_news', 128)->nullable();
            $table->string('youtube', 128)->nullable();
            $table->string('vimeo', 128)->nullable();
            $table->string('twitch', 128)->nullable();
            $table->string('dailymotion', 128)->nullable();
            $table->string('tencent_video', 128)->nullable();
            $table->string('twitter_page', 128)->nullable();
            $table->string('tumblr', 128)->nullable();
            $table->string('scoop_it', 128)->nullable();

            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('company_social_site_urls');
    }
}
