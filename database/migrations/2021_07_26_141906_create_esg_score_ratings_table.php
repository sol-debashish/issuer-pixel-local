<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEsgScoreRatingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('esg_score_ratings', function (Blueprint $table) {
            $table->id();
            $table->string('name', 64);
            $table->bigInteger('parent_id')->unsigned();
            $table->char('status', 1)->default(1);
        });
        DB::table('esg_score_ratings')->insert([
            ["name" => "AAA", 'parent_id' => 1],
            ["name" => "AA", 'parent_id' => 1],
            ["name" => "A", 'parent_id' => 1],
            ["name" => "BBB", 'parent_id' => 1],
            ["name" => "BB", 'parent_id' => 1],
            ["name" => "B", 'parent_id' => 1],
            ["name" => "CCC", 'parent_id' => 1],
            ["name" => "CCC", 'parent_id' => 1],
            ["name" => "CC", 'parent_id' => 1],
            ["name" => "0 - 10", 'parent_id' => 2],
            ["name" => "10 - 20", 'parent_id' => 2],
            ["name" => "20 - 30", 'parent_id' => 2],
            ["name" => "30 - 40", 'parent_id' => 2],
            ["name" => "40+", 'parent_id' => 2],
            ["name" => "A", 'parent_id' => 3],
            ["name" => "A-", 'parent_id' => 3],
            ["name" => "B", 'parent_id' => 3],
            ["name" => "B-", 'parent_id' => 3],
            ["name" => "C", 'parent_id' => 3],
            ["name" => "C-", 'parent_id' => 3],
            ["name" => "D", 'parent_id' => 3],
            ["name" => "D-", 'parent_id' => 3],
            ["name" => "A+", 'parent_id' => 4],
            ["name" => "A", 'parent_id' => 4],
            ["name" => "A-", 'parent_id' => 4],
            ["name" => "B+", 'parent_id' => 4],
            ["name" => "B", 'parent_id' => 4],
            ["name" => "B-", 'parent_id' => 4],
            ["name" => "C+", 'parent_id' => 4],
            ["name" => "C", 'parent_id' => 4],
            ["name" => "C-", 'parent_id' => 4],
            ["name" => "D+", 'parent_id' => 4],
            ["name" => "D", 'parent_id' => 4],
            ["name" => "D-", 'parent_id' => 4],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('esg_score_ratings');
    }
}
