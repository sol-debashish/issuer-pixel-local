<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePodcastGuestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('podcast_guests', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->char('status', 1)->default(1);
        });

        DB::table('podcast_guests')->insert([
            ['name' => 'The Company'],
            ['name' => 'Interview Host'],
            ['name' => 'Podcast Host'],
            ['name' => 'CEO'],
            ['name' => 'CFO'],
            ['name' => 'COO'],
            ['name' => 'CMO'],
            ['name' => 'CRO '],
            ['name' => 'CTO'],
            ['name' => 'Investor Relations'],
            ['name' => 'Board Member'],
            ['name' => 'Analyst'],
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
        Schema::dropIfExists('podcast_guests');
    }
}
