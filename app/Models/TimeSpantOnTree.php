<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TimeSpantOnTree extends Model
{
    protected $fillable = [
        'user_id',
        'industry_id',
        'time_spant',
        'date_at',
    ];
    public $timestamps = false;
    protected $dates = ['date_at'];

}
