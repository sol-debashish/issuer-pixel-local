<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVideoSharingSitesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('video_sharing_sites', function (Blueprint $table) {
            $table->id();
            $table->string('name', 64);
            $table->char('status', 1)->default(1);
        });

        DB::table('video_sharing_sites')->insert([
            ['name' => 'Youtube'],
            ['name' => 'Vimeo'],
            ['name' => 'Twitch'],
            ['name' => 'Dailymotion'],
            ['name' => 'Tencent Video']
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('video_sharing_sites');
    }
}
