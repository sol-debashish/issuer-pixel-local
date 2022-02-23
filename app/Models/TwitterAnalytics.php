<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TwitterAnalytics extends Model
{
    protected $table = 'social_analytics_data_twitter';
    public $timestamps = false;
    protected $fillable = [
        'media_id',
        'media_type',
        'company_id',
        'tweet_post_id',
        'impressions',
        'retweets',
        'quote_tweets',
        'likes',
        'replies',
        'url_link_clicks',
        'user_profile_clicks',
        'video_views',
        'shared_at'
    ];
}
