<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TwitterTrendingTag extends Model
{
    protected $fillable = [
        'name',
        'url',
        'query',
        'tweet_volume',
        'woeid',
        'is_recent'
    ];
}
