<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SocialNetworkingSite extends Model
{
    public function scopeActive($query)
    {
        return $query->whereStatus(1);
    }
}
