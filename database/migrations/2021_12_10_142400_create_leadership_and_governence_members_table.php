<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLeadershipAndGovernenceMembersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('leadership_and_governence_members', function (Blueprint $table) {
            $table->id();
            $table->string('name', 128)->nullable();
            $table->bigInteger('company_id')->unsigned();
            $table->string('designation', 64)->nullable();
            $table->string('info', 1024)->nullable();
            $table->string('linkedin_url', 128)->nullable();
            $table->string('twitter_url', 128)->nullable();
            $table->string('work_type', 32)->nullable();
            $table->string('profile_image', 64)->nullable();
            $table->smallInteger('order')->nullable();
            $table->timestamps();

            $table->index(['company_id']);
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
        Schema::dropIfExists('leadership_and_governence_members');
    }
}
