<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMediaSubjectTypeLookupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('media_subject_type_lookups', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('media_file_id')->unsigned();
            $table->bigInteger('subject_type_id')->unsigned()->nullable();
            $table->bigInteger('company_id')->unsigned()->nullable();
            $table->index(['media_file_id', 'company_id']);
            $table->index(['subject_type_id']);
            $table->foreign('media_file_id')->references('id')->on('media_files')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('subject_type_id')->references('id')->on('subject_types')->onDelete('set null')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('media_subject_type_lookups');
    }
}
