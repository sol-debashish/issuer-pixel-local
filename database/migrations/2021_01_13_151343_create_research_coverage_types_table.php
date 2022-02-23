<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResearchCoverageTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('research_coverage_types', function (Blueprint $table) {
            $table->id();
            $table->string('name', 128);
            $table->char('status', 1)->default(1);
        });

        DB::table('research_coverage_types')->insert([
            ['name' => 'Brokerage Research'],
            ['name' => 'Market Research'],
            ['name' => 'Third Party Research'],
            ['name' => 'Shared Community Research'],
            ['name' => 'Buy Side Research'],
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
        Schema::dropIfExists('research_coverage_types');
    }
}
