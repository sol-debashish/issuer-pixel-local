<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateProfileCompleteColumnInCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('companies', function (Blueprint $table) {
            $table->smallInteger('general_info_completed')->default(0)->change()->comment('');
            $table->smallInteger('contact_completed')->default(0)->change()->comment('');
            $table->smallInteger('structure_completed')->default(0)->change()->comment('');
            $table->smallInteger('valuation_completed')->default(0)->change()->comment('');
            $table->smallInteger('social_presence_completed')->default(0)->change()->comment('');
            $table->smallInteger('hierarchy_completed')->default(0)->change()->comment('');
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
            //
        });
    }
}
