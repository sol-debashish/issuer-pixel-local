<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMediaSubjectSuggestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('media_subject_suggestions', function (Blueprint $table) {
            $table->id();
            $table->string('subject', 512);
            $table->enum('media_type', [1, 2]);
            $table->enum('review_status', ['New', 'Accepted', 'Rejected'])->default('New');
            $table->bigInteger('reviewed_by')->unsigned()->nullable();
            $table->bigInteger('media_file_id')->unsigned();
            $table->bigInteger('created_by')->unsigned();
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
        Schema::dropIfExists('media_subject_suggestions');
    }
}
