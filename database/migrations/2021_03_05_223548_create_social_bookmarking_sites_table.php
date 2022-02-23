<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSocialBookmarkingSitesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('social_bookmarking_sites', function (Blueprint $table) {
            $table->id();
            $table->string('name', 64);
            $table->char('status', 1)->default(1);
        });

        DB::table('social_bookmarking_sites')->insert([
            ['name' => 'Pintrest'],
            ['name' => 'Reddit'],
            ['name' => 'StumbleUpon'],
            ['name' => 'Dribble'],
            ['name' => 'Mix']
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('social_bookmarking_sites');
    }
}
