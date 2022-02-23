<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNodeCodeColumnInMediaCategorizationLookupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('media_categorization_lookups', function (Blueprint $table) {
            $table->string('node_code', 128)->after('node_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('media_categorization_lookups', function (Blueprint $table) {
            $table->dropColumn('node_code');
        });
    }
}
