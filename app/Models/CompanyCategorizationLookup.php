<?php

namespace App\Models;

use Faker\Provider\Base;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Response;

class CompanyCategorizationLookup extends Model
{
    public $timestamps = true;

    protected $fillable = [
        'company_id',
        'industry_id',
        'categorization_level_id',
        'node_id',
        'node_code',
        'order',
        'taxonomy_type',
    ];
    function addNode($nodeData){
        $this->create($nodeData);
    }

}

