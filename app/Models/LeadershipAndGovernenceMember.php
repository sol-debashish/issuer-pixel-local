<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LeadershipAndGovernenceMember extends Model
{
    protected $fillable = [
        'company_id',
        'name',
        'designation',
        'info',
        'linkedin_url',
        'twitter_url',
        'work_type',
        'profile_image',
        'order',
    ];
    public $timestamps = true;
}
