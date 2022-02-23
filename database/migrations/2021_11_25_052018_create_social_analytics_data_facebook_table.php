<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSocialAnalyticsDataFacebookTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('social_analytics_data_facebook', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('media_id')->unsigned();
            $table->string('media_type', 16);
            $table->bigInteger('company_id')->unsigned();
            $table->bigInteger('facebook_post_id')->unsigned();
            $table->bigInteger('likes')->unsigned()->nullable();
            $table->bigInteger('comments')->unsigned()->nullable();
            $table->bigInteger('shares')->unsigned()->nullable();
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
        Schema::dropIfExists('social_analytics_data_facebook');
    }
}
