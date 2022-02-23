<?php

namespace App\Models;

use Illuminate\Support\Str;

class Layer extends BaseCategoryModel
{
    protected $fillable = [
        'sub_tier_id',
        'code',
        'raw_code',
        'industry_code',
        'sector_code',
        'sub_sector_code',
        'group_code',
        'sub_group_code',
        'echelon_code',
        'sub_echelon_code',
        'tier_code',
        'sub_tier_code',
        'description',
        'note',
        'replica_id',
        'status',
        'created_by',
    ];

    protected static $logName = 'layer_node';
    protected $nodeType = 'layer';

    public function getNodeSearchData($request, $data, $params = [])
    {
        if (isset($params['match'])) {
            $query = $this->CodeAndDescriptionLikeExact($request->term);
        } else {
            $query = $this->CodeAndDescriptionLike($request->term);
        }
        if (isset($params['industry_code'])) {
            $query->Where('industry_code', $params['industry_code']);
        }

        if(isset($request->industry_code))
        {
            $query->Where('industry_code', $request->industry_code);
        }
        if(isset($params['sector_code'])){
            $query->where('sector_code', '<>', $params['sector_code']);
        }
        if(isset($params['sub_sector_code'])){
            $query->where('sub_sector_code', '<>', $params['sub_sector_code']);
        }
        if(isset($params['group_code'])){
            $query->where('group_code', '<>', $params['group_code']);
        }
        if(isset($params['sub_group_code'])){
            $query->where('sub_group_code', '<>', $params['sub_group_code']);
        }
        if(isset($params['echelon_code'])){
            $query->where('echelon_code', '<>', $params['echelon_code']);
        }
        if(isset($params['sub_echelon_code'])){
            $query->where('sub_echelon_code', '<>', $params['sub_echelon_code']);
        }
        if(isset($params['tier_code'])){
            $query->where('tier_code', '<>', $params['tier_code']);
        }
        if(isset($params['sub_tier_code'])){
            $query->where('sub_tier_code', '<>', $params['sub_tier_code']);
        }
        if(isset($params['layer_code'])){
            $query->where('code', '<>', $params['layer_code']);
        }
        if(isset($params['sub_layer_parent'])){
            $query->where('id', '<>', $params['sub_layer_parent']);
        }

        $queryResult = $query->get(['code','description']);

        $i = count($data);
        if(count($queryResult) > 0)
        {
            foreach ($queryResult as $result)
            {
                $data[$i]['itemName'] = "$result->description ( $result->code)";
                $data[$i]['id'] = "$result->code|Layer";
                $i++;
            }
        }
        return $data;
    }


    public function subLayerSelectedField()
    {
        return $this->subLayer()->select('id', 'layer_id', 'code', 'industry_code','raw_code',  'description','note', 'status', 'cross_indexed');
    }

    public function subLayer()
    {
        return $this->hasMany(SubLayer::class);
    }

    public function deck()
    {
        return $this->hasMany(Deck::class, 'layer_code', 'code');
    }

    public function subDeck()
    {
        return $this->hasMany(SubDeck::class, 'layer_code', 'code');
    }

    public function floor()
    {
        return $this->hasMany(Floor::class, 'layer_code', 'code');
    }

    public function subFloor()
    {
        return $this->hasMany(SubFloor::class, 'layer_code', 'code');
    }

    public function basement()
    {
        return $this->hasMany(Basement::class, 'layer_code', 'code');
    }

    public function subBasement()
    {
        return $this->hasMany(SubBasement::class, 'layer_code', 'code');
    }

    public function mine()
    {
        return $this->hasMany(Mine::class, 'layer_code', 'code');
    }

    public function subMine()
    {
        return $this->hasMany(SubMine::class, 'layer_code', 'code');
    }

    public function industry()
    {
        return $this->belongsTo(Industry::class, 'industry_code', 'code');
    }

    public function subTier()
    {
        return $this->belongsTo(SubTier::class);
    }
    public function getNodeSearchDataCross($request, $data, $params = [])
    {
        $queryResult = $this->Where('industry_code', $params['industry_code'])->get(['code', 'description']);

        $i = count($data);
        if (count($queryResult) > 0) {
            foreach ($queryResult as $result) {
                $data[$i]['itemName'] =  Str::singular($result->description);
                $data[$i]['Name'] = "$result->description";
                $data[$i]['id'] = "$result->code|Layer";
                $i++;
            }
        }
        return $data;
    }
}
