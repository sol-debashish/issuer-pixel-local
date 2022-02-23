<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHelpAndSupportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('help_and_supports', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->unsigned()->nullable();
            $table->string('name', 128);
            $table->string('email', 128);
            $table->string('phone', 32);
            $table->text('message');
            $table->bigInteger('reviewed_by')->unsigned()->nullable();
            $table->enum('status', [
                'Open',
                'Pending',
                'Closed',
            ])->default('open');
            $table->timestamps();

            $table->foreign('reviewed_by')->references('id')->on('users')->onDelete('set null')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('help_and_supports');
    }
}
