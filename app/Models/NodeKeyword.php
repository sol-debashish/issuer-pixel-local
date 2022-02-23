<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NodeKeyword extends Model
{
    protected $fillable = [
        'name',
        'type',
    ];
    public $timestamps = false;

    public function scopeActive($query)
    {
        return $query->whereStatus(1);
    }
}
