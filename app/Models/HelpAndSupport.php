<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HelpAndSupport extends Model
{
    protected $fillable = [
        'user_id',
        'name',
        'email',
        'phone',
        'message',
    ];

    public function reviewer()
    {
        return $this->belongsTo(User::class, 'reviewed_by', 'id');
    }
}
