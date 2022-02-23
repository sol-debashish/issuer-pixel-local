<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    public function scopeActive($query)
    {
        return $query->whereStatus(1);
    }
}
