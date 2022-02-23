<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddNodeNameInMediaCategorizationLookupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('media_categorization_lookups', function (Blueprint $table) {
            $table->string('node_name', 255)->nullable()->after('node_id');
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
            $table->dropColumn('node_name');
        });
    }
}
