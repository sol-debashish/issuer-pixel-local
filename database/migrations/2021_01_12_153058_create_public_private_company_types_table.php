<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePublicPrivateCompanyTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('public_private_company_types', function (Blueprint $table) {
            $table->id();
            $table->string('name', 64);
            $table->enum('tag', [
                'public',
                'private',
                'other',
            ])->default('other');
            $table->char('status', 1)->default(1);
        });

        DB::table('public_private_company_types')->insert([
            ['name' => 'Private Company - Domestic (USA)','tag' => 'private'],
            ['name' => 'Private Company - International (Non-USA)','tag' => 'private'],
            ['name' => 'Public Company - Domestic (USA)','tag' => 'public'],
            ['name' => 'Public Company - International (Non-USA) ','tag' => 'public'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('public_private_company_types');
    }
}
