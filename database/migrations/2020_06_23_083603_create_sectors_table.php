<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSectorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sectors', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('industry_id')->unsigned();

            $table->string('code', 16)->nullable();
            $table->string('industry_code', 16)->nullable();
            $table->string('description', 255);
            $table->string('replica_id', 512)->nullable();
            $table->string('child_node_id', 512)->nullable();
            $table->char('status',1)->default(1);
            $table->timestamps();

            $table->unique('code');
            $table->index('industry_code');
            $table->foreign('industry_id')->references('id')->on('industries')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sectors');
    }
}
