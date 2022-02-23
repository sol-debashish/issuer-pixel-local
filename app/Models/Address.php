<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'street_address_one',
        'street_address_two',
        'city',
        'state_id',
        'province',
        'zip',
        'country_code',
    ];
    function headquarters(){
        $this->hasMany(Headquarter::class,'address_id','id');
    }
    public function states()
    {
        return $this->belongsTo(State::class, 'state_id', 'id');
    }
    public function country()
    {
        return $this->belongsTo(Country::class, 'country_code', 'id');
    }
}
