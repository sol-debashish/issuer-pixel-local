<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOwnedBusinessesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('owned_businesses', function (Blueprint $table) {
            $table->id();
            $table->string('name', 128);
            $table->string('tag', 65);
            $table->char('status', 1)->default(1);
        });
        DB::table('owned_businesses')->insert([
            ["name" => "MBE (Minority Owned Business)", 'tag' => 'mbe'],
            ["name" => "WBE (Women Owned Business)", 'tag' => 'wbe'],
            ["name" => "VBE (Vetaran Owned Business)", 'tag' => 'vbe'],
            ["name" => "SDVBE (Service Disable Vetaran Owned Business)", 'tag' => 'sdvbe'],
            ["name" => "DBE (Disabled Business Enterprise)", 'tag' => 'dbe'],
            ["name" => "LGBT (Lesbian, Gay, Bisexual, Transgender)", 'tag' => 'lgbt'],
            ["name" => "ANC (Alaskan Native Corporation Owned Firm)", 'tag' => 'anc'],
            ["name" => "No, My Business Does Not Have a Diversity Business Classification.", 'tag' => 'no'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('owned_businesses');
    }
}
