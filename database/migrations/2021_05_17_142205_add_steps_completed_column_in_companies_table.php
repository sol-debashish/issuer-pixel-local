<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddStepsCompletedColumnInCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('companies', function (Blueprint $table) {
            $table->dropColumn('facebook');
            $table->dropColumn('twitter');
            $table->dropColumn('linkedin');
            $table->char('general_info_completed', 1)->default(0)->after('steps_completed')->comment('0 for uncomplete and 1 for complete');
            $table->char('contact_completed', 1)->default(0)->after('general_info_completed')->comment('0 for uncomplete and 1 for complete');
            $table->char('structure_completed', 1)->default(0)->after('contact_completed')->comment('0 for uncomplete and 1 for complete');
            $table->char('valuation_completed', 1)->default(0)->after('structure_completed')->comment('0 for uncomplete and 1 for complete');
            $table->char('social_presence_completed', 1)->default(0)->after('valuation_completed')->comment('0 for uncomplete and 1 for complete');
            $table->char('hierarchy_completed', 1)->default(0)->after('social_presence_completed')->comment('0 for uncomplete and 1 for complete');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('companies', function (Blueprint $table) {
            $table->string('facebook')->nullable()->after('analyst_rating_type');
            $table->string('twitter')->nullable()->after('facebook');
            $table->string('linkedin')->nullable()->after('twitter');
            $table->dropColumn('general_info_completed');
            $table->dropColumn('contact_completed');
            $table->dropColumn('structure_completed');
            $table->dropColumn('valuation_completed');
            $table->dropColumn('social_presence_completed');
            $table->dropColumn('hierarchy_completed');
        });
    }
}
