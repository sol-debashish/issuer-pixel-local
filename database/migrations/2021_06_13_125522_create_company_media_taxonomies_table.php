<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompanyMediaTaxonomiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('company_media_taxonomies', function (Blueprint $table) {
            $table->bigInteger('company_id')->unsigned();
            $table->bigInteger('company_taxonomy_id')->unsigned();
            $table->bigInteger('media_taxonomy_id')->unsigned();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('company_media_taxonomies');
    }
}
