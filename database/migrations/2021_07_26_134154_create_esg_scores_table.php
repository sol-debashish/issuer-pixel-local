<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateEsgScoresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('esg_scores', function (Blueprint $table) {
            $table->id();
            $table->string('name', 128);
            $table->string('tag', 65);
            $table->char('status', 1)->default(1);
        });
        DB::table('esg_scores')->insert([
            ["name" => "Yes, we have a MSCI ESG rating", 'tag' => 'msci'],
            ["name" => "Yes, we have a Sustainalytics ESG rating", 'tag' => 'sustainalytics'],
            ["name" => "Yes, we have a CDP rating", 'tag' => 'cdp'],
            ["name" => "Yes, we have an ISS rating", 'tag' => 'iss'],
            ["name" => "No, or I don't know", 'tag' => 'no'],
            ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('esg_scores');
    }
}
