<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LeadershipAndGovernanceExecutive extends Model
{
    protected $fillable = [
        'first_name',
        'last_name',
        'role_id',
        'company_id'
    ];

    public $timestamps = true;

    public function role() {
        return $this->belongsTo(LeadershipAndGovernanceRole::class, 'role_id');
    }

    public function company() {
        return $this->belongsTo(Company::class, 'company_id');
    }
}
