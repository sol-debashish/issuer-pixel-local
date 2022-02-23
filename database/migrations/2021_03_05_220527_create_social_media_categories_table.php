<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSocialMediaCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('social_media_categories', function (Blueprint $table) {
            $table->id();
            $table->string('name', 64);
            $table->char('status', 1)->default(1);
        });
        DB::table('social_media_categories')->insert([
            ['name' => 'Social Networking(i.e. Facebook)'],
            ['name' => 'Bookmarking sites(i.e. Pintrest)'],
            ['name' => 'Social News(i.e. Digg)'],
            ['name' => 'Video Sharing(i.e. YouTube)'],
            ['name' => 'Microblogging(i.e. Twitter)'],
            ['name' => 'Other'],
            ['name' => 'None'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('social_media_categories');
    }
}
