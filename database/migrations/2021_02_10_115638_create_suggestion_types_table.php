<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSuggestionTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('suggestion_types', function (Blueprint $table) {
            $table->id();
            $table->string('name', 64);
            $table->char('status', 1)->default(1);
        });

        DB::table('suggestion_types')->insert([
            ["name" => "add"],
            ["name" => "replace"],
            ["name" => "delete"]
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('suggestion_types');
    }
}
