<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserLog extends Model
{
    protected $fillable = [
        'user_id',
        'role',
        'session_id',
        'login_time',
        'logout_time',
    ];

    public $timestamps = false;
    protected $dates = ['login_time','logout_time'];

    public function loginLog($data)
    {
        $this->create($data);
    }
}
