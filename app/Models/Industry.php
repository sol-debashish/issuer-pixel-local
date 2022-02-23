<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class Industry extends Model
{
    use LogsActivity;
    protected static $logName = 'industry_node';

    protected $fillable = [
        'description',
        'note',
        'status',
        'created_by',
    ];
    protected static $ignoreChangedAttributes = ['created_by', 'updated_at'];
    protected static $logAttributes = ['description', 'note'];
    protected static $logOnlyDirty = true;
    protected static $submitEmptyLogs = false;
    protected static $recordEvents = ['updated'];

    public function getDescriptionForEvent(string $eventName): string
    {
        return  auth()->user()->name. " {$eventName}  '{$this->description}' industry";
    }

    public function getCreatedAtAttribute($date)
    {
        return Carbon::parse($this->attributes['created_at'])->format('Y-m-d H:i:s');
    }

    public function getUpdatedAtAttribute($date)
    {
        return Carbon::parse($this->attributes['updated_at'])->format('Y-m-d H:i:s');
    }

    public function scopeGetAssoc($query)
    {
        return $query->pluck('description','code');
    }

    public function scopeActive($query)
    {
        return $query->whereStatus(1);
    }

    public function scopeInActive($query)
    {
        return $query->whereStatus(0);
    }

    public function scopePublished($query)
    {
        return $query->wherePublishStatus(1);
    }

    public function scopeUnpublished($query)
    {
        return $query->wherePublishStatus(0);
    }

    public function sectorSelectedField()
    {
        return $this->sector()->select('id', 'industry_id', 'code', 'industry_code', 'raw_code',  'description','note', 'status', 'cross_indexed');
    }

    public function sector()
    {
        return $this->hasMany(Sector::class);
    }

    public function subSector()
    {
        return $this->hasMany(SubSector::class, 'industry_code', 'code');
    }

    public function group()
    {
        return $this->hasMany(Group::class, 'industry_code', 'code');
    }

    public function subGroup()
    {
        return $this->hasMany(SubGroup::class, 'industry_code', 'code');
    }

    public function echelon()
    {
        return $this->hasMany(Echelon::class, 'industry_code', 'code');
    }

    public function subEchelon()
    {
        return $this->hasMany(SubEchelon::class, 'industry_code', 'code');
    }

    public function tier()
    {
        return $this->hasMany(Tier::class, 'industry_code', 'code');
    }

    public function subTier()
    {
        return $this->hasMany(SubTier::class, 'industry_code', 'code');
    }

    public function layer()
    {
        return $this->hasMany(Layer::class, 'industry_code', 'code');
    }

    public function subLayer()
    {
        return $this->hasMany(SubLayer::class, 'industry_code', 'code');
    }

    public function deck()
    {
        return $this->hasMany(Deck::class, 'industry_code', 'code');
    }

    public function subDeck()
    {
        return $this->hasMany(SubDeck::class, 'industry_code', 'code');
    }

    public function floor()
    {
        return $this->hasMany(Floor::class, 'industry_code', 'code');
    }

    public function subFloor()
    {
        return $this->hasMany(SubFloor::class, 'industry_code', 'code');
    }

    public function basement()
    {
        return $this->hasMany(Basement::class, 'industry_code', 'code');
    }

    public function subBasement()
    {
        return $this->hasMany(SubBasement::class, 'industry_code', 'code');
    }

    public function mine()
    {
        return $this->hasMany(Mine::class, 'industry_code', 'code');
    }

    public function subMine()
    {
        return $this->hasMany(SubMine::class, 'industry_code', 'code');
    }
}
