<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSocialNewsSitesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('social_news_sites', function (Blueprint $table) {
            $table->id();
            $table->string('name', 64);
            $table->char('status', 1)->default(1);
        });

        DB::table('social_news_sites')->insert([
            ['name' => 'Digg'],
            ['name' => 'Reddit'],
            ['name' => 'Product Hunt'],
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
        Schema::dropIfExists('social_news_sites');
    }
}
