<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddHistoryCorporateActionAndLeadershipCompletedColumnInCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('companies', function (Blueprint $table) {
            $table->smallInteger('history_completed')->default(0)->after('hierarchy_completed');
            $table->smallInteger('corporate_action_completed')->default(0)->after('history_completed');
            $table->smallInteger('leadership_governance_completed')->default(0)->after('corporate_action_completed');
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
            $table->dropColumn('history_completed');
            $table->dropColumn('corporate_action_completed');
            $table->dropColumn('leadership_governance_completed');
        });
    }
}
