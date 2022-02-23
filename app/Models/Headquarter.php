<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Headquarter extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'company_id',
        'name',
        'primary_headquarters',
        'address_id'
    ];
    public function address()
    {
        return $this->belongsTo(Address::class, 'address_id', 'id');
    }
    public function company()
    {
        return $this->hasMany(Company::class, 'company_id', 'id');
    }
}
