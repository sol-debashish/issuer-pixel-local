<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MediaCategorizationLookup extends Model
{
    protected $fillable = [
        'company_id',
        'media_file_id',
        'categorization_level_id',
        'node_id',
        'node_code',
        'node_name',
        'industry_id',
        'order',
        'tracking_id',
        'company_last_level',
    ];

    public function industry()
    {
        return $this->belongsTo(Industry::class, 'industry_id', 'id');
    }
    public function mediaFile()
    {
        return $this->belongsTo(MediaFile::class, 'media_file_id', 'id');
    }
}
