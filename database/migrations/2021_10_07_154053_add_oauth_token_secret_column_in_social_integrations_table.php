<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddOauthTokenSecretColumnInSocialIntegrationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('social_integrations', function (Blueprint $table) {
            $table->text('oauth_token_secret')->nullable()->after('access_token')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('social_integrations', function (Blueprint $table) {
            $table->dropColumn('oauth_token_secret');
        });
    }
}
