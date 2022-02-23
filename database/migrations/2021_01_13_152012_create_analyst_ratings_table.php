<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnalystRatingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('analyst_ratings', function (Blueprint $table) {
            $table->id();
            $table->string('name', 128);
            $table->char('status', 1)->default(1);
        });

        DB::table('analyst_ratings')->insert([
            ['name' => 'Buy Rating'],
            ['name' => 'Sell Rating'],
            ['name' => 'Neutral'],
            ['name' => 'Upgrade'],
            ['name' => 'Downgrade'],
            ['name' => 'Discontinuation of Coverage'],
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
        Schema::dropIfExists('analyst_ratings');
    }
}
