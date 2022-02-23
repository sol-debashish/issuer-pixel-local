<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSuggestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('suggestions', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->unsigned()->nullable();
            $table->bigInteger('suggestion_type_id')->unsigned();
            $table->string('suggestion_explanation', 255)->nullable();
            $table->integer('categorization_level_id');
            $table->integer('node_id')->nullable();
            $table->bigInteger('reviewed_by')->unsigned()->nullable();
            $table->timestamps();

            $table->foreign('suggestion_type_id')->references('id')->on('suggestion_types')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('reviewed_by')->references('id')->on('users')->onDelete('set null')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('suggestions');
    }
}
