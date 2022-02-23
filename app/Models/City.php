<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    public function scopeActive($query)
    {
        return $query->whereStatus(1);
    }
}
