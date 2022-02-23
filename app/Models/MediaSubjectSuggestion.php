<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MediaSubjectSuggestion extends Model
{
    protected $fillable = [
        'subject',
        'reason',
        'media_type',
        'created_by',
    ];

    public function media()
    {
        return $this->belongsTo(MediaFile::class, 'media_file_id', 'id');
    }

    public function owner()
    {
        return $this->belongsTo(User::class, 'created_by', 'id');
    }

    public function reviewer()
    {
        return $this->belongsTo(User::class, 'reviewed_by', 'id');
    }
}
