<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InternalMessage extends Model
{
    protected $fillable = [
        'sender_id',
        'receiver_id',
        'message',
        'read_status'
    ];

    public function sender()
    {
        return $this->belongsTo(Company::class, 'sender_id', 'id');
    }

    public function receiver()
    {
        return $this->belongsTo(Company::class, 'receiver_id');
    }
}
