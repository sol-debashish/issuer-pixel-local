<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateMediaFilesTableForNewFieldsIsCompleted extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('media_files', function (Blueprint $table) {
            $table->dateTime('publication_date')->nullable()->change();
            $table->string('name', 512)->nullable()->change();
            $table->string('description', 1024)->nullable()->change();
            $table->char('is_meta_info_completed', 1)->after('publish_status')->default('0')->comment('0 for not completed and 1 for completed');
            $table->char('is_hierarchy_info_completed', 1)->after('is_meta_info_completed')->default('0')->comment('0 for not completed and 1 for completed');
            $table->char('extension', 16)->after('is_hierarchy_info_completed')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('media_files', function (Blueprint $table) {
            $table->dateTime('publication_date')->nullable(false)->change();
            $table->string('name')->nullable(false)->change();
            $table->string('description')->nullable(false)->change();
            $table->dropColumn('is_meta_info_completed');
            $table->dropColumn('is_hierarchy_info_completed');
            $table->dropColumn('extension');
        });
    }
}
