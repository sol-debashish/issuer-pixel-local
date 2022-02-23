<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVideoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('videos', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('media_file_id')->unsigned();
            $table->string('file_name');
            $table->string('linking_file_name')->nullable();
            $table->string('platform')->nullable();
            $table->string('temp_path', 512);
            $table->string('video_id')->nullable();
            $table->char('is_upload_to_storage',1)->default('0');
            $table->char('is_upload_to_host',1)->default('0');
            $table->char('is_ready',1)->default('0');
            $table->char('status',1)->default('0');
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
        Schema::dropIfExists('videos');
    }
}
