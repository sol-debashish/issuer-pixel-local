<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddHierarchyTypeAndOthersFieldInSuggestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('suggestions', function (Blueprint $table) {
            $table->string('hierarchy_type', 16)->nullable()->after('reviewed_by');
            $table->enum('review_status', ['New', 'Accepted', 'Rejected'])->default('New')->after('hierarchy_type');
            $table->bigInteger('industry_id')->unsigned()->nullable()->after('review_status');
            $table->bigInteger('parent_id')->unsigned()->nullable()->after('industry_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('suggestions', function (Blueprint $table) {
            $table->dropColumn('hierarchy_type');
            $table->dropColumn('review_status');
            $table->dropColumn('industry_id');
            $table->dropColumn('parent_id');
        });
    }
}
