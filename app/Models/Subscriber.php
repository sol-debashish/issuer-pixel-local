<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Subscriber extends Model
{
    protected $table = 'subscribers_for_update';
    public $timestamps = true;

    protected $fillable = [
        'email',
    ];

    public function addSubscriber($data)
    {
        $this->create($data);
    }
}
