<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CompanySpinOff extends Model
{
    protected $casts = [
        'spinOff_acquisitions_year' => 'string'
    ];
}
