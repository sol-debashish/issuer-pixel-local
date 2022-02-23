<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FacebookAnalytics extends Model
{
    protected $table = 'social_analytics_data_facebook';
    public $timestamps = false;
    protected $fillable = [
        'media_id',
        'media_type',
        'company_id',
        'facebook_post_id',
        'likes',
        'comments',
        'shares',
        'shared_at'
    ];
}
