<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeeNumbersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employee_numbers', function (Blueprint $table) {
            $table->id();
            $table->integer('min_val')->nullable();
            $table->integer('max_val')->nullable();
            $table->char('status', 1)->default(1);
        });

        DB::table('employee_numbers')->insert([
            ["min_val" => 0, "max_val" => 10],
            ["min_val" => 11, "max_val" => 20],
            ["min_val" => 21, "max_val" => 50],
            ["min_val" => 51, "max_val" => 100],
            ["min_val" => 101, "max_val" => 500],
            ["min_val" => 501, "max_val" => 1000],
            ["min_val" => 1001, "max_val" => 5000],
            ["min_val" => 5001, "max_val" => 10000],
            ["min_val" => 10001, "max_val" => 50000],
            ["min_val" => 50001, "max_val" => 100000],
            ["min_val" => 100000, "max_val" => 0],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('employee_numbers');
    }
}
