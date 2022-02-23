<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CrossIndex extends Model
{
    protected $table = 'cross_indexed_node_lookups';
    public $timestamps = true;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'node_one_categorization_level_id', 'node_one_id','node_two_categorization_level_id', 'node_two_id',
    ];
}
