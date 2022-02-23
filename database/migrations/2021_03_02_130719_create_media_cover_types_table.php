<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMediaCoverTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('media_cover_types', function (Blueprint $table) {
            $table->id();
            $table->string('name', 64);
            $table->bigInteger('media_type_id')->unsigned();
            $table->char('status', 1)->default(1);
        });

        DB::table('media_cover_types')->insert([
            ['name' => 'Product', 'media_type_id' => 1],
            ['name' => 'Service', 'media_type_id' => 1],
            ['name' => 'Product', 'media_type_id' => 2],
            ['name' => 'Service', 'media_type_id' => 2],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('media_cover_types');
    }
}
