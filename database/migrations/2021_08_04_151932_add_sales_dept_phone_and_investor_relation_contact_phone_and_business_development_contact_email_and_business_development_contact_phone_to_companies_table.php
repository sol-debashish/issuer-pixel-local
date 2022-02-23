<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSalesDeptPhoneAndInvestorRelationContactPhoneAndBusinessDevelopmentContactEmailAndBusinessDevelopmentContactPhoneToCompaniesTable extends Migration {

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::table('companies', function (Blueprint $table) {
            $table->string('sales_dept_phone', 20)->nullable()->after('sales_department_email');
            $table->string('investor_relation_contact_phone', 20)->nullable()->after('investor_relations_department_email');
            $table->string('business_development_contact_email', 100)->nullable()->after('director_of_sales');
            $table->string('business_development_contact_phone', 20)->nullable()->after('director_of_sales');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::table('companies', function (Blueprint $table) {
            $table->dropColumn('business_development_contact_phone');
            $table->dropColumn('business_development_contact_email');
            $table->dropColumn('investor_relation_contact_phone');
            $table->dropColumn('sales_dept_phone');
        });
    }

}
