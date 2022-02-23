<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class IndustryNodeStatistics extends Model
{
    protected $fillable = [
        'industry_id',
        'total_nodes',
        'nodes_added',
        'nodes_edited',
        'nodes_deleted',
        'created_at',
    ];
    public $timestamps = false;
    protected $dates = ['created_at'];
}
