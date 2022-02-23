<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMediaFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('media_files', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('company_id')->unsigned()->nullable();
            $table->bigInteger('media_type')->unsigned()->nullable();
            $table->string('name', 512);
            $table->dateTime('publication_date');
            $table->bigInteger('presenter_type_id')->unsigned()->nullable();
            $table->string('other_media_presenter', 512)->nullable();
            $table->bigInteger('media_sub_type')->unsigned()->nullable();
            $table->bigInteger('subject_type_id')->unsigned()->nullable();

            $table->integer('cover_type')->unsigned()->nullable();
            $table->integer('podcast_guest')->unsigned()->nullable();
            $table->string('podcast_series_name', 512)->nullable();

            $table->string('description', 1024);
            $table->bigInteger('roadshow_address_id')->unsigned()->nullable();
            $table->char('investment_bank_hosted',1)->default(0);
            $table->string('investment_bank_name', 255)->nullable();
            $table->string('top_competitors', 1024)->nullable();
            $table->string('s3_address', 255)->nullable();
            $table->string('hosting_provider_url', 255)->nullable();
            $table->char('status',1)->default(1);
            $table->bigInteger('created_by')->unsigned()->nullable();

            $table->timestamps();

            $table->foreign('company_id')->references('id')->on('companies')->onDelete('set null')->onUpdate('cascade');
            $table->foreign('media_type')->references('id')->on('media_types')->onDelete('set null')->onUpdate('cascade');
            $table->foreign('presenter_type_id')->references('id')->on('media_presenter_types')->onDelete('set null')->onUpdate('cascade');
            $table->foreign('media_sub_type')->references('id')->on('media_sub_types')->onDelete('set null')->onUpdate('cascade');
            $table->foreign('subject_type_id')->references('id')->on('subject_types')->onDelete('set null')->onUpdate('cascade');
            $table->foreign('roadshow_address_id')->references('id')->on('addresses')->onDelete('set null')->onUpdate('cascade');
            $table->foreign('created_by')->references('id')->on('users')->onDelete('set null')->onUpdate('cascade');
        });

        Schema::create('media_categorization_lookups', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('company_id')->unsigned()->nullable();
            $table->bigInteger('media_file_id')->unsigned()->nullable();
            $table->bigInteger('categorization_level_id')->unsigned()->nullable();
            $table->bigInteger('node_id')->unsigned()->nullable();
            $table->timestamps();

            $table->foreign('company_id')->references('id')->on('companies')->onDelete('set null')->onUpdate('cascade');
            $table->foreign('media_file_id')->references('id')->on('media_files')->onDelete('set null')->onUpdate('cascade');
            $table->foreign('categorization_level_id')->references('id')->on('categorization_levels')->onDelete('set null')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('media_categorization_lookups');
        Schema::dropIfExists('media_files');
    }
}
