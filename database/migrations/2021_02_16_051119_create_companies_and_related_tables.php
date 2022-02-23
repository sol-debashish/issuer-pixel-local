<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompaniesAndRelatedTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->integer('entity_type')->nullable();
            $table->string('completing_questionnaire_name')->nullable();
            $table->string('completing_questionnaire_email')->nullable();
            $table->string('sales_department_url')->nullable();
            $table->string('sales_department_email')->nullable();
            $table->string('sales_business_department_phone')->nullable();
            $table->string('investor_relations_department_url')->nullable();
            $table->string('investor_relations_department_email')->nullable();
            $table->string('ceo')->nullable();
            $table->string('cfo')->nullable();
            $table->string('director_of_sales')->nullable();
            $table->tinyInteger('esg_business')->nullable();
            $table->integer('public_private_type')->nullable();
            $table->integer('base_currency')->nullable();
            $table->integer('legal_entity_type')->nullable();
            $table->integer('trading_status')->nullable();
            $table->integer('publicly_traded_type')->nullable();
            $table->integer('exchange_traded_on')->nullable();
            $table->string('ticker_symbol')->nullable();
            $table->tinyInteger('multinational')->nullable();
            $table->tinyInteger('conducted_financing_six_month')->nullable();
            $table->integer('type_of_financing')->nullable();
            $table->tinyInteger('audited_financials')->nullable();
            $table->integer('company_have_patents')->nullable();
            $table->integer('pantent_type')->nullable();
            $table->integer('number_employees_range')->nullable();
            $table->integer('number_shareholders_range')->nullable();
            $table->string('research_firm_name')->nullable();
            $table->integer('analyst_rating_type')->nullable();
            $table->integer('steps_completed')->nullable();
            $table->bigInteger('profile_created_by')->unsigned()->nullable();
            $table->bigInteger('updated_by')->unsigned()->nullable();
            $table->timestamps();
        });
        Schema::create('company_founders', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('company_id')->unsigned();
            $table->string('name', 255);

            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade')->onUpdate('cascade');
        });
        Schema::create('strategic_partnerships', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('company_id')->unsigned();
            $table->string('name', 255);

            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade')->onUpdate('cascade');
        });
        Schema::create('key_vendors', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('company_id')->unsigned();
            $table->string('name', 255);

            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade')->onUpdate('cascade');
        });
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->string('street_address_one', 255)->nullable();
            $table->string('street_address_two', 255)->nullable();
            $table->string('city', 255);
            $table->integer('state_id')->nullable();
            $table->string('province', 255)->nullable();
            $table->integer('zip')->nullable();
            $table->integer('country_code');
        });
        Schema::create('headquarters', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('company_id')->unsigned();
            $table->string('name', 255);
            $table->tinyInteger('primary_headquarters');
            $table->bigInteger('address_id')->unsigned();

            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('address_id')->references('id')->on('addresses')->onDelete('cascade')->onUpdate('cascade');
        });

        Schema::create('research_coverage_lookups', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('company_id')->unsigned();
            $table->integer('research_coverage_type');

            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('research_coverage_lookups');
        Schema::dropIfExists('headquarters');
        Schema::dropIfExists('addresses');
        Schema::dropIfExists('key_vendors');
        Schema::dropIfExists('strategic_partnerships');
        Schema::dropIfExists('company_founders');
        Schema::dropIfExists('companies');
    }
}
