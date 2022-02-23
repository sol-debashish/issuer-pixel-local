<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateMediaSubjectSuggestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('media_subject_suggestions', function (Blueprint $table) {
            $table->text('reason')->after('subject')->nullable();
            $table->bigInteger('media_file_id')->unsigned()->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('media_subject_suggestions', function (Blueprint $table) {
            $table->dropColumn('reason');
            $table->bigInteger('media_file_id')->unsigned()->nullable(false)->change();
        });
    }
}
