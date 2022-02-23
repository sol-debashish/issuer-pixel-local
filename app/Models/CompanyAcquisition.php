<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CompanyAcquisition extends Model
{
    protected $casts = [
        'year' => 'string'
    ];
}
