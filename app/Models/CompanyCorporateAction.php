<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CompanyCorporateAction extends Model
{
    protected $fillable = [
        'company_id',
        'acquisitions_made',
        'previous_acquisitions',
        'previous_acquisitions_name',
        'previous_acquisitions_year',
        'spin_off',
        'spin_off_acquisitions_name',
        'spin_off_acquisitions_year',
        'dividend',
    ];
    public $timestamps = true;

    public function acquisitions()
    {
        return $this->hasMany(CompanyAcquisition::class, 'company_id', 'company_id');
    }
    public function spin()
    {
        return $this->hasMany(CompanySpinOff::class, 'company_id', 'company_id');
    }
}
