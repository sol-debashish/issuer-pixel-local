<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TradingAndReportingStatus extends Model
{
    public function scopeActive($query)
    {
        return $query->whereStatus(1);
    }

    public function publicPrivateCompany()
    {
        return $this->belongsTo(PublicPrivateCompanyType::class, 'type','tag');
    }

    public function scopegetPublicPrivateCompany($query, $id)
    {
        return $query->whereHas('publicPrivateCompany', function ($q) use ($id) {
            $q->where('id', $id);
        });
    }

}
