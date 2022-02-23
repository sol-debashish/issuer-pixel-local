<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompanyCorporateActionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('company_corporate_actions', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('company_id')->unsigned();
            $table->tinyInteger('acquisitions_made')->nullable();
            $table->tinyInteger('previous_acquisitions')->nullable();
            $table->text('previous_acquisitions_name')->nullable();
            $table->char('previous_acquisitions_year', 10)->nullable();
            $table->tinyInteger('spin_off')->nullable();
            $table->text('spin_off_acquisitions_name')->nullable();
            $table->char('spin_off_acquisitions_year', 10)->nullable();
            $table->tinyInteger('dividend')->nullable();
            $table->timestamps();

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
        Schema::dropIfExists('company_corporate_actions');
    }
}
