<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    protected $fillable = [
        'review',
        'reviewer_name',
        'reviewer_email',
        'rating',
        'url',
        'ip',
        'user_id',
    ];

    public function addFeedback($data)
    {
        $this->create($data);
    }
}
