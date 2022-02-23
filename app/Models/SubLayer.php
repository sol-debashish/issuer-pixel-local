<?php

namespace App\Models;

use Illuminate\Support\Str;

class SubLayer extends BaseCategoryModel
{
    protected $fillable = [
        'layer_id',
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
        'layer_code',
        'description',
        'note',
        'replica_id',
        'status',
        'created_by',
    ];

    protected static $logName = 'sub_layer_node';
    protected $nodeType = 'sub layer';

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
            $query->where('layer_code', '<>', $params['layer_code']);
        }
        if(isset($params['sub_layer_code'])){
            $query->where('code', '<>', $params['sub_layer_code']);
        }
        if(isset($params['deck_parent'])){
            $query->where('id', '<>', $params['deck_parent']);
        }

        $queryResult = $query->get(['code','description']);

        $i = count($data);
        if(count($queryResult) > 0)
        {
            foreach ($queryResult as $result)
            {
                $data[$i]['itemName'] = "$result->description ( $result->code)";
                $data[$i]['id'] = "$result->code|SubLayer";
                $i++;
            }
        }
        return $data;
    }

    public function deckSelectedField()
    {
        return $this->deck()->select('id', 'sub_layer_id', 'code', 'industry_code', 'raw_code',  'description','note', 'status', 'cross_indexed');
    }

    public function deck()
    {
        return $this->hasMany(Deck::class);
    }

    public function subDeck()
    {
        return $this->hasMany(SubDeck::class, 'sub_layer_code', 'code');
    }

    public function floor()
    {
        return $this->hasMany(Floor::class, 'sub_layer_code', 'code');
    }

    public function subFloor()
    {
        return $this->hasMany(SubFloor::class, 'sub_layer_code', 'code');
    }

    public function basement()
    {
        return $this->hasMany(Basement::class, 'sub_layer_code', 'code');
    }

    public function subBasement()
    {
        return $this->hasMany(SubBasement::class, 'sub_layer_code', 'code');
    }

    public function mine()
    {
        return $this->hasMany(Mine::class, 'sub_layer_code', 'code');
    }

    public function subMine()
    {
        return $this->hasMany(SubMine::class, 'sub_layer_code', 'code');
    }

    public function industry()
    {
        return $this->belongsTo(Industry::class, 'industry_code', 'code');
    }

    public function layer()
    {
        return $this->belongsTo(Layer::class);
    }
    public function getNodeSearchDataCross($request, $data, $params = [])
    {
        $queryResult = $this->Where('industry_code', $params['industry_code'])->get(['code', 'description']);

        $i = count($data);
        if (count($queryResult) > 0) {
            foreach ($queryResult as $result) {
                $data[$i]['itemName'] =  Str::singular($result->description);
                $data[$i]['Name'] = "$result->description";
                $data[$i]['id'] = "$result->code|SubLayer";
                $i++;
            }
        }
        return $data;
    }
}
