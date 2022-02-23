<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class ContentFolder extends Model
{
    protected $fillable = ['company_id',
        'id',
        'name',
        'pid',
        'folder_layer',
        'isLeaf',
        'delNodeDisabled',
        'addLeafNodeDisabled',
        'editNodeDisabled',
        'media_file_id',
        'media_type',
    ];

    // Media File Name Truncates  
    public function getNameAttribute($value)
    {
        return Str::limit($value, 20);
    }

}
