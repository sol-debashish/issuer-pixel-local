<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMediaFilePresenterTypeLookupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('media_file_presenter_type_lookups', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('media_file_id')->unsigned();
            $table->bigInteger('presenter_type_id')->unsigned()->nullable();
            $table->bigInteger('company_id')->unsigned()->nullable();
            $table->index(['media_file_id', 'company_id']);
            $table->index(['presenter_type_id']);
            $table->foreign('media_file_id')->references('id')->on('media_files')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('presenter_type_id')->references('id')->on('media_presenter_types')->onDelete('set null')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('media_file_presenter_type_lookups');
    }
}
