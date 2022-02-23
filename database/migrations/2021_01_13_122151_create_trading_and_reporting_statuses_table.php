<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTradingAndReportingStatusesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trading_and_reporting_statuses', function (Blueprint $table) {
            $table->id();
            $table->string('name', 128);
            $table->string('type', 16);
            $table->char('status', 1)->default(1);

            $table->index(['type']);
        });

        DB::table('trading_and_reporting_statuses')->insert([
            ['name' => 'Reporting and Public Trading', 'type' => 'public'],
            ['name' => 'Not Reporting and Public Trading', 'type' => 'public'],
            ['name' => 'Reporting and Not Public Trading', 'type' => 'public'],
            ['name' => 'Not Reporting (Public Unlisted Company) and Not Public Trading', 'type' => 'public'],
            ['name' => 'Other', 'type' => 'public'],
            ['name' => 'Private - Not Reporting and Not Trading', 'type' => 'private'],
            ['name' => 'Private - Reporting and Not Trading', 'type' => 'private'],
            ['name' => 'Private - Reporting and Trading Via Private Placement Exchange', 'type' => 'private'],
            ['name' => 'Other', 'type' => 'private'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trading_and_reporting_statuses');
    }
}
