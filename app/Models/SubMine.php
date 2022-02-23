<?php

namespace App\Models;

use Illuminate\Support\Str;

class SubMine extends BaseCategoryModel
{
    protected $fillable = [
        'mine_id',
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
        'sub_layer_code',
        'deck_code',
        'sub_deck_code',
        'floor_code',
        'sub_floor_code',
        'basement_code',
        'sub_basement_code',
        'mine_code',
        'description',
        'note',
        'replica_id',
        'status',
        'created_by',
    ];

    protected static $logName = 'sub_mine_node';
    protected $nodeType = 'sub_mine';

    public function industry()
    {
        return $this->belongsTo(Industry::class, 'industry_code', 'code');
    }

    public function mine()
    {
        return $this->belongsTo(Mine::class);
    }

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
            $query->where('sub_layer_code', '<>', $params['sub_layer_code']);
        }
        if(isset($params['deck_code'])){
            $query->where('deck_code', '<>', $params['deck_code']);
        }
        if(isset($params['sub_deck_code'])){
            $query->where('sub_deck_code', '<>', $params['sub_deck_code']);
        }
        if(isset($params['floor_code'])){
            $query->where('floor_code', '<>', $params['floor_code']);
        }
        if(isset($params['sub_floor_code'])){
            $query->where('code', '<>', $params['sub_floor_code']);
        }
        if(isset($params['basement_code'])){
            $query->where('code', '<>', $params['basement_code']);
        }
        if(isset($params['sub_basement_code'])){
            $query->where('code', '<>', $params['sub_basement_code']);
        }
        if(isset($params['mine_code'])){
            $query->where('code', '<>', $params['mine_code']);
        }
        if(isset($params['sub_mine_code'])){
            $query->where('code', '<>', $params['sub_mine_code']);
        }

        $queryResult = $query->get(['code','description']);

        $i = count($data);
        if(count($queryResult) > 0)
        {
            foreach ($queryResult as $result)
            {
                $data[$i]['itemName'] = "$result->description ( $result->code)";
                $data[$i]['id'] = "$result->code|SubMine";
                $i++;
            }
        }
        return $data;
    }
    public function getNodeSearchDataCross($request, $data, $params = [])
    {
        $queryResult = $this->Where('industry_code', $params['industry_code'])->get(['code', 'description']);

        $i = count($data);
        if (count($queryResult) > 0) {
            foreach ($queryResult as $result) {
                $data[$i]['itemName'] =  Str::singular($result->description);
                $data[$i]['Name'] = "$result->description";
                $data[$i]['id'] = "$result->code|SubMine";
                $i++;
            }
        }
        return $data;
    }
}
