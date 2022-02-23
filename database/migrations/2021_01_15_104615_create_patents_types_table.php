<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePatentsTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('patents_types', function (Blueprint $table) {
            $table->id();
            $table->string('name', 64);
            $table->char('status', 1)->default(1);
        });

        DB::table('patents_types')->insert([
            ['name' => 'Provisional Patents'],
            ['name' => 'Utility Patents'],
            ['name' => 'Design Patents'],
            ['name' => 'Plant Patents'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('patents_types');
    }
}
