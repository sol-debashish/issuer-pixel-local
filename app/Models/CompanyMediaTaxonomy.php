<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CompanyMediaTaxonomy extends Model
{
    public $timestamps = false;
    protected $fillable = [
        'company_id',
        'company_taxonomy_id',
        'media_taxonomy_id'
    ];
}
