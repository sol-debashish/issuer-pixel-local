<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChatMessage extends Model
{
    public function sender() {
        return $this->belongsTo(User::class, 'from_user_id');
    }

    public function receiver() {
        return $this->belongsTo(User::class, 'to_user_id');
    }
}
