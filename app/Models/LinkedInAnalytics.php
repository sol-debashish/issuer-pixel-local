<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LinkedInAnalytics extends Model
{
    protected $table = 'social_analytics_data_linkedin';
    public $timestamps = false;
    protected $fillable = [
        'media_id',
        'media_type',
        'company_id',
        'linkedin_post_id',
        'clicks',
        'comments',
        'engagement',
        'impressions',
        'likes',
        'shares',
        'shared_at'
    ];
}
