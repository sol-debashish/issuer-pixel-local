<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFieldRawCodeInAllNodeTables extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */

    private $nodes = [
        'sectors', 'sub_sectors', 'groups', 'sub_groups', 'echelons', 'sub_echelons', 'tiers', 'sub_tiers', 'layers', 'sub_layers', 'decks', 'sub_decks', 'floors', 'sub_floors', 'basements', 'sub_basements', 'mines', 'sub_mines'
    ];
    public function up() {
        foreach ($this->nodes as $node) {
            Schema::table($node, function (Blueprint $table) {
                $table->string('raw_code', 50)->after('code')->nullable()->comment('actual code for sector');
            });
            DB::statement("UPDATE `{$node}` SET `raw_code` = SUBSTRING(`code`, -2, 2)");
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        foreach ($this->nodes as $table) {
            Schema::table($table, function (Blueprint $table) {
                $table->dropColumn('raw_code');
            });
        }
    }
}
