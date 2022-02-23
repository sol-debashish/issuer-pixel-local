<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MediaFileViewLog extends Model
{
    protected $fillable = [
        'media_type',
        'media_id',
        'company_id',
    ];
    public $timestamps = ["created_at"];
    const UPDATED_AT = null;
}
