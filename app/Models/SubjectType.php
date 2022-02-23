<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SubjectType extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'name',
        'media_type_id',
        'tag',
    ];

    public function scopeActive($query)
    {
        return $query->whereStatus(1);
    }
}
