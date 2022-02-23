<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMediaPresenterTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('media_presenter_types', function (Blueprint $table) {
            $table->id();
            $table->string('name', 64);
            $table->bigInteger('media_type_id')->unsigned();
            $table->char('status', 1)->default(1);
            $table->foreign('media_type_id')->references('id')->on('media_types')->onDelete('cascade')->onUpdate('cascade');

        });

        DB::table('media_presenter_types')->insert([
            ['name' => 'The Company', 'media_type_id' => 1],
            ['name' => 'Interview Host', 'media_type_id' => 1],
            ['name' => 'Podcast Host', 'media_type_id' => 1],
            ['name' => 'CEO', 'media_type_id' => 1],
            ['name' => 'CFO', 'media_type_id' => 1],
            ['name' => 'COO', 'media_type_id' => 1],
            ['name' => 'CMO', 'media_type_id' => 1],
            ['name' => 'CRO ', 'media_type_id' => 1],
            ['name' => 'CTO', 'media_type_id' => 1],
            ['name' => 'Investor Relations', 'media_type_id' => 1],
            ['name' => 'Board Member ', 'media_type_id' => 1],
            ['name' => 'Analyst', 'media_type_id' => 1],
            ['name' => 'Other', 'media_type_id' => 1],
            ['name' => 'The Company', 'media_type_id' => 2],
            ['name' => 'CEO', 'media_type_id' => 2],
            ['name' => 'CFO', 'media_type_id' => 2],
            ['name' => 'COO', 'media_type_id' => 2],
            ['name' => 'CMO', 'media_type_id' => 2],
            ['name' => 'CRO ', 'media_type_id' => 2],
            ['name' => 'CTO', 'media_type_id' => 2],
            ['name' => 'Investor Relations', 'media_type_id' => 2],
            ['name' => 'Board Member ', 'media_type_id' => 2],
            ['name' => 'Analyst', 'media_type_id' => 2],
            ['name' => 'Other', 'media_type_id' => 2]
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('media_presenter_types');
    }
}
