<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSocialMediaPlatformsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('social_media_platforms', function (Blueprint $table) {
            $table->id();
            $table->string('name', 64);
            $table->bigInteger('parent_id')->unsigned();
            $table->string('icon_class', 32)->nullable();
            $table->string('url_validate_string', 64)->nullable();
            $table->char('status', 1)->default(1);
        });
        DB::table('social_media_platforms')->insert([
            ['name' => 'Facebook', 'parent_id' => 1, 'icon_class' => 'fab fa-facebook-square','url_validate_string' => 'facebook.com'],
            ['name' => 'Instagram', 'parent_id' => 1, 'icon_class' => 'fab fa-instagram','url_validate_string' => 'instagram.com'],
            ['name' => 'Snapchat', 'parent_id' => 1, 'icon_class' => 'fab fa-snapchat-square','url_validate_string' => 'snapchat.com'],
            ['name' => 'TikTok', 'parent_id' => 1, 'icon_class' => 'fab fa-tiktok','url_validate_string' => 'tiktok.com'],
            ['name' => 'LinkedIn', 'parent_id' => 1, 'icon_class' => 'fab fa-linkedin','url_validate_string' => 'linkedin.com'],
            ['name' => 'Pinterest', 'parent_id' => 2, 'icon_class' => 'fab fa-pinterest-p','url_validate_string' => 'pinterest.com'],
            ['name' => 'Reddit', 'parent_id' => 2, 'icon_class' => 'fab fa-reddit','url_validate_string' => 'reddit.com'],
            ['name' => 'StumbleUpon', 'parent_id' => 2, 'icon_class' => 'fab fa-stumbleupon','url_validate_string' => 'stumbleupon.com'],
            ['name' => 'Dribbble', 'parent_id' => 2, 'icon_class' => 'fab fa-dribbble','url_validate_string' => 'dribbble.com'],
            ['name' => 'Mix', 'parent_id' => 2, 'icon_class' => 'fab fa-mix','url_validate_string' => 'mix.com'],
            ['name' => 'Digg', 'parent_id' => 3, 'icon_class' => 'fab fa-digg','url_validate_string' => 'digg.com'],
            ['name' => 'Product Hunt', 'parent_id' => 3, 'icon_class' => 'fab fa-product-hunt','url_validate_string' => 'producthunt.com'],
            ['name' => 'Youtube', 'parent_id' => 4, 'icon_class' => 'fab fa-youtube','url_validate_string' => 'youtube.com'],
            ['name' => 'Vimeo', 'parent_id' => 4, 'icon_class' => 'fab fa-vimeo-v','url_validate_string' => 'vimeo.com'],
            ['name' => 'Twitch', 'parent_id' => 4, 'icon_class' => 'fab fa-twitch','url_validate_string' => 'twitch.tv'],
            ['name' => 'Dailymotion', 'parent_id' => 4, 'icon_class' => 'fab fa-dailymotion','url_validate_string' => 'dailymotion.com'],
            ['name' => 'Tencent Video', 'parent_id' => 4, 'icon_class' => 'fab fa-tencent-weibo','url_validate_string' => 'tencent.com'],
            ['name' => 'Twitter', 'parent_id' => 5, 'icon_class' => 'fab fa-twitter','url_validate_string' => 'twitter.com'],
            ['name' => 'Tumblr', 'parent_id' => 5, 'icon_class' => 'fab fa-tumblr','url_validate_string' => 'tumblr.com'],
            ['name' => 'Scoop.it', 'parent_id' => 5, 'icon_class' => 'scoop','url_validate_string' => 'scoop'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('social_media_platforms');
    }
}
