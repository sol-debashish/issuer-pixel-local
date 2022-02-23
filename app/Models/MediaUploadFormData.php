<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MediaUploadFormData extends Model
{
    protected $fillable = [
        'company_id',
        'data',
        'type',
    ];

    public $timestamps = ["created_at"];
    const UPDATED_AT = null;
}
