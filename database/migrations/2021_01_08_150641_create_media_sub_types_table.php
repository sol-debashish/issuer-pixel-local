<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMediaSubTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('media_sub_types', function (Blueprint $table) {
            $table->id();
            $table->string('name', 64);
            $table->bigInteger('media_type_id')->unsigned();
            $table->enum('tag', [
                'general',
                'prodcast',
            ])->default('general');
            $table->char('status', 1)->default(1);
            $table->foreign('media_type_id')->references('id')->on('media_types')->onDelete('cascade')->onUpdate('cascade');
        });

        DB::table('media_sub_types')->insert([
            ['name' => 'Company Audio', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => 'Podcast', 'media_type_id' => 1, 'tag' => 'prodcast'],
            ['name' => 'Radio', 'media_type_id' => 1, 'tag' => 'general'],
            ['name' => 'Video', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Webinar', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Animation', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Live Streaming', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Film', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Vlog', 'media_type_id' => 2, 'tag' => 'general'],
            ['name' => 'Hologram', 'media_type_id' => 2, 'tag' => 'general'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('media_sub_types');
    }
}
