<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NodeWarp extends Model
{
    protected $table = 'node_warp_lookups';
    public $timestamps = true;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'source_node_categorization_level_id', 'source_node_id','destination_node_categorization_level_id', 'destination_node_id','created_by',
    ];
}
