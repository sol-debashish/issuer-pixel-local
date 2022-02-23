<?php

namespace App\Models;

use Illuminate\Support\Str;

class Echelon extends BaseCategoryModel
{
    protected $fillable = [
        'sub_group_id',
        'code',
        'raw_code',
        'industry_code',
        'sector_code',
        'sub_sector_code',
        'group_code',
        'sub_group_code',
        'description',
        'note',
        'replica_id',
        'status',
        'created_by',
    ];

    protected static $logName = 'echelon_node';
    protected $nodeType = 'echelon';

    public function subEchelonSelectedField()
    {
        return $this->subEchelon()->select('id', 'echelon_id', 'code', 'industry_code', 'raw_code',  'description','note', 'status', 'cross_indexed');
    }

    public function subEchelon()
    {
        return $this->hasMany(SubEchelon::class);
    }

    public function tier()
    {
        return $this->hasMany(Tier::class, 'echelon_code', 'code');
    }

    public function subTier()
    {
        return $this->hasMany(SubTier::class, 'echelon_code', 'code');
    }

    public function layer()
    {
        return $this->hasMany(Layer::class, 'echelon_code', 'code');
    }

    public function subLayer()
    {
        return $this->hasMany(SubLayer::class, 'echelon_code', 'code');
    }

    public function deck()
    {
        return $this->hasMany(Deck::class, 'echelon_code', 'code');
    }

    public function subDeck()
    {
        return $this->hasMany(SubDeck::class, 'echelon_code', 'code');
    }

    public function floor()
    {
        return $this->hasMany(Floor::class, 'echelon_code', 'code');
    }

    public function subFloor()
    {
        return $this->hasMany(SubFloor::class, 'echelon_code', 'code');
    }

    public function basement()
    {
        return $this->hasMany(Basement::class, 'echelon_code', 'code');
    }

    public function subBasement()
    {
        return $this->hasMany(SubBasement::class, 'echelon_code', 'code');
    }

    public function mine()
    {
        return $this->hasMany(Mine::class, 'echelon_code', 'code');
    }

    public function subMine()
    {
        return $this->hasMany(SubMine::class, 'echelon_code', 'code');
    }

    public function industry()
    {
        return $this->belongsTo(Industry::class, 'industry_code', 'code');
    }

    public function subGroup()
    {
        return $this->belongsTo(SubGroup::class);
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
            $query->where('code', '<>', $params['echelon_code']);
        }
        if(isset($params['sub_echelon_parent'])){
            $query->where('id', '<>', $params['sub_echelon_parent']);
        }

        $queryResult = $query->get(['code','description']);


        $i = count($data);
        if(count($queryResult) > 0)
        {
            foreach ($queryResult as $result)
            {
                $data[$i]['itemName'] = "$result->description ( $result->code)";
                $data[$i]['id'] = "$result->code|Echelon";
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
                $data[$i]['id'] = "$result->code|Echelon";
                $i++;
            }
        }
        return $data;
    }
}
