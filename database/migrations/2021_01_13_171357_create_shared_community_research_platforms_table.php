<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSharedCommunityResearchPlatformsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shared_community_research_platforms', function (Blueprint $table) {
            $table->id();
            $table->string('name', 128);
            $table->char('status', 1)->default(1);
        });

        DB::table('shared_community_research_platforms')->insert([
            ['name' => 'Seeking Alpha'],
            ['name' => 'The Motley Fool'],
            ['name' => 'Estimize'],
            ['name' => 'Market Realist'],
            ['name' => 'Impact Alpha'],
            ['name' => 'Eagle Alpha'],
            ['name' => 'Early to Rise'],
            ['name' => 'SumZero'],
            ['name' => 'The Street'],
            ['name' => 'Bloomberg'],
            ['name' => 'TalkMarkets'],
            ['name' => 'Other'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('shared_community_research_platforms');
    }
}
