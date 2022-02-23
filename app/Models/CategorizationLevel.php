<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CategorizationLevel extends Model
{
    protected $table = 'categorization_levels';
    public $timestamps = true;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name'
    ];
}
