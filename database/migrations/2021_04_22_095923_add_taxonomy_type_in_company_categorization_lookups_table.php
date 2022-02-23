<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTaxonomyTypeInCompanyCategorizationLookupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('company_categorization_lookups', function (Blueprint $table) {
            $table->string('taxonomy_type', 16)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('company_categorization_lookups', function (Blueprint $table) {
            $table->dropColumn('taxonomy_type');
        });
    }
}
