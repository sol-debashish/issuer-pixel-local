<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MediaType extends Model
{
    public function scopeActive($query)
    {
        return $query->whereStatus(1);
    }
}
