<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bulletin extends Model
{
    protected $fillable = [
        'title',
        'description',
        'image_name',
        'is_sticky',
        'status',
        'created_by',
        'updated_by'
    ];

    public function getPhotoUrl()
    {
        if($this->image_name)
        {
            return url("/img/bulletin/$this->image_name");
        }
        return url("/img/placeholder.jpg");
    }

    public function scopeActive($query)
    {
        return $query->whereStatus(1);
    }

    public function user() {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function editor() {
        return $this->belongsTo(User::class, 'updated_by');
    }
}
