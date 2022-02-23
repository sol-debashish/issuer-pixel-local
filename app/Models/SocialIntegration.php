<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SocialIntegration extends Model
{
    protected $fillable = [
        'company_id',
        'share_platform',
        'access_token',
        'oauth_token_secret',
        'expires_in',
        'social_platform_name',
        'social_platform_id',
    ];

    public function companyOwner()
    {
        return $this->belongsTo(User::class, 'company_id', 'company_id');
    }
}
