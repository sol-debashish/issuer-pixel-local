<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContentFoldersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('content_folders', function (Blueprint $table) {
            $table->id('folder_id');
            $table->bigInteger('company_id')->unsigned();
            $table->bigInteger('id')->unsigned();
            $table->string('name')->nullable();
            $table->bigInteger('pid')->unsigned();
            $table->tinyInteger('folder_layer')->unsigned();
            $table->tinyInteger('isLeaf')->unsigned();
            $table->tinyInteger('delNodeDisabled')->unsigned();
            $table->tinyInteger('addLeafNodeDisabled')->unsigned();
            $table->tinyInteger('editNodeDisabled')->unsigned();
            $table->bigInteger('media_file_id')->unsigned();
            $table->tinyInteger('media_type')->unsigned();
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
        Schema::dropIfExists('content_folders');
    }
}
