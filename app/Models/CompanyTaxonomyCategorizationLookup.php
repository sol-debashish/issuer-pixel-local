<?php

namespace App\Models;

use Faker\Provider\Base;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Response;

class CompanyTaxonomyCategorizationLookup extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'company_id',
        'industry_id',
        'sector_id',
        'sub_sector_id',
        'group_id',
        'sub_group_id',
        'echelon_id',
        'sub_echelon_id',
        'tier_id',
        'sub_tier_id',
        'layer_id',
        'sub_layer_id',
        'deck_id',
        'sub_deck_id',
        'floor_id',
        'sub_floor_id',
        'basement_id',
        'sub_basement_id',
        'mine_id',
        'sub_mine_id',
        'media_file_id',
        'taxonomy_type'
    ];
    public function storeTaxonomyData($data, $checkingArr)
    {
            CompanyTaxonomyCategorizationLookup::updateOrCreate($checkingArr,$data);

    }
    public function company(){
        return $this->belongsTo(Company::class, 'company_id', 'id');
    }
    public function industry()
    {
        return $this->belongsTo(Industry::class, 'industry_id', 'id');
    }

    public function sector()
    {
        return $this->belongsTo(Sector::class, 'sector_id', 'id');
    }

    public function subSector()
    {
        return $this->belongsTo(SubSector::class, 'sub_sector_id', 'id');
    }

    public function group()
    {
        return $this->belongsTo(Group::class, 'group_id', 'id');
    }

    public function subGroup()
    {
        return $this->belongsTo(SubGroup::class, 'sub_group_id', 'id');
    }

    public function echelon()
    {
        return $this->belongsTo(Echelon::class, 'echelon_id', 'id');
    }

    public function subEchelon()
    {
        return $this->belongsTo(SubEchelon::class, 'sub_echelon_id', 'id');
    }

    public function tier()
    {
        return $this->belongsTo(Tier::class, 'tier_id', 'id');
    }

    public function subTier()
    {
        return $this->belongsTo(SubTier::class, 'sub_tier_id', 'id');
    }

    public function layer()
    {
        return $this->belongsTo(Layer::class, 'layer_id', 'id');
    }

    public function subLayer()
    {
        return $this->belongsTo(SubLayer::class, 'sub_layer_id', 'id');
    }

    public function deck()
    {
        return $this->belongsTo(Deck::class, 'deck_id', 'id');
    }

    public function subDeck()
    {
        return $this->belongsTo(SubDeck::class, 'sub_deck_id', 'id');
    }

    public function floor()
    {
        return $this->belongsTo(Floor::class, 'floor_id', 'id');
    }

    public function subFloor()
    {
        return $this->belongsTo(SubFloor::class, 'sub_floor_id', 'id');
    }

    public function basement()
    {
        return $this->belongsTo(Basement::class, 'basement_id', 'id');
    }

    public function subBasement()
    {
        return $this->belongsTo(SubBasement::class, 'sub_basement_id', 'id');
    }

    public function mine()
    {
        return $this->belongsTo(Mine::class, 'mine_id', 'id');
    }

    public function subMine()
    {
        return $this->belongsTo(SubMine::class, 'sub_mine_id', 'id');
    }

}

