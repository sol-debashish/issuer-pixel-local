<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CompanyEsgScoreRatingLookup extends Model
{
    protected $fillable = [
        'company_id',
        'msci_id',
        'sustainalytics_id',
        'iss_id',
        'cdp_id',
    ];
    public $timestamps = false;

    public function scopeActive($query)
    {
        return $query->whereStatus(1);
    }

    public function MsciRating()
    {
        return $this->hasOne(EsgScoreRating::class, 'id', 'msci_id');
    }

    public function IssRating()
    {
        return $this->hasOne(EsgScoreRating::class, 'id', 'iss_id');
    }

    public function CdpRating()
    {
        return $this->hasOne(EsgScoreRating::class, 'id', 'cdp_id');
    }

    public function SustainalyticsRating()
    {
        return $this->hasOne(EsgScoreRating::class, 'id', 'sustainalytics_id');
    }
}
