<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMediaCategorizationLookupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('media_categorization_lookups', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('company_id')->unsigned();
            $table->bigInteger('media_file_id')->unsigned()->nullable();
            $table->bigInteger('categorization_level_id')->unsigned();
            $table->bigInteger('node_id')->unsigned();
            $table->bigInteger('industry_id')->unsigned();
            $table->Integer('order');
            $table->string('tracking_id');
            $table->string('company_last_level')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('media_categorization_lookups');
    }
}
