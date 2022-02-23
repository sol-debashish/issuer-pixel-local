<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cities', function (Blueprint $table) {
            $table->id();
            $table->string('name', 64);
            $table->char('status', 1)->default(1);
        });

        DB::table('cities')->insert([
            ['name' => 'Idaho Falls'],
            ['name' => 'Pocatello'],
            ['name' => 'Caldwell'],
            ['name' => 'Twin Falls'],
            ['name' => 'Lewiston'],
            ['name' => 'Lewiston'],
            ['name' => 'Rexburg'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cities');
    }
}
