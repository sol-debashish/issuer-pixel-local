<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CompanyHistory extends Model
{
    protected $fillable = [
        'company_id',
        'formed_year',
        'first_product_or_service',
        'number_of_major_product',
        'change_direction_or_strategy',
        'previous_product',
        'change_year',
    ];
    public $timestamps = true;
}
