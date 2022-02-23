<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePubliclyTradedCompanyTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('publicly_traded_company_types', function (Blueprint $table) {
            $table->id();
            $table->string('name', 128);
            $table->char('status', 1)->default(1);
        });

        DB::table('publicly_traded_company_types')->insert([
            ['name' => 'Public Company'],
            ['name' => 'Delaware Statutory Trust (DST) - Non-Traded'],
            ['name' => 'Blank Check Company - Public Traded'],
            ['name' => 'ETF - Exchange Traded Fund'],
            ['name' => 'CEF - Closed-End Fund'],
            ['name' => 'SPAC - Specialty Purpose Acquisition Corp.'],
            ['name' => 'BDC - Business Development Company'],
            ['name' => 'ADR - American Depository Receipt  (Bundle of ADS)'],
            ['name' => 'ADS - American Depository Share'],
            ['name' => 'Foreign Ordinary Share - International Public Companies'],
            ['name' => 'GRS - Global Registered Share (Identical shares trading on various stock exchanges and in different currencies)'],
            ['name' => 'REIT-Real Estate Investment Trust (traded)'],
            ['name' => 'REIT-Real Estate Investment Trust (non-traded)'],
            ['name' => 'MLP-Master Limited Partnership'],
            ['name' => 'Other'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('publicly_traded_company_types');
    }
}
