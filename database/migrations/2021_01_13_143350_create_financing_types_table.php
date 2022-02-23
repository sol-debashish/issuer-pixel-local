<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFinancingTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('financing_types', function (Blueprint $table) {
            $table->id();
            $table->string('name', 64);
            $table->char('status', 1)->default(1);
        });

        DB::table('financing_types')->insert([
            ["name" => "IPO"],
            ["name" => "Secondary Offering"],
            ["name" => "Shelf Offering"],
            ["name" => "ATM (At The Market)"],
            ["name" => "Direct Listing"],
            ["name" => "Friends and Family"],
            ["name" => "Angel Investors"],
            ["name" => "Venture Capitalists"],
            ["name" => "Incubators"],
            ["name" => "Grants"],
            ["name" => "Initial coin offering (ICO)"],
            ["name" => "Reg A (Tier 1)"],
            ["name" => "Reg A+ (Tier 2)"],
            ["name" => "Reg D - Rule 504"],
            ["name" => "Reg D - Rule 505"],
            ["name" => "Reg D - Rule 506"],
            ["name" => "Reg D - Rule 506(b)"],
            ["name" => "Reg D - Rule 506(c)"],
            ["name" => "Reg S"],
            ["name" => "REG CF"]
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('financing_types');
    }
}
