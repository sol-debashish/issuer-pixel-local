<?php

namespace App\Models;

use Illuminate\Support\Str;

class SubSector extends BaseCategoryModel
{
    protected $fillable = [
        'code',
        'raw_code',
        'sector_id',
        'industry_code',
        'sector_code',
        'description',
        'note',
        'replica_id',
        'status',
        'created_by',
    ];

    protected static $logName = 'sub_sector_node';
    protected $nodeType = 'sub sector';

    public function subGroup()
    {
        return $this->hasMany(SubGroup::class, 'sub_sector_code', 'code');
    }

    public function echelon()
    {
        return $this->hasMany(Echelon::class, 'sub_sector_code', 'code');
    }

    public function subEchelon()
    {
        return $this->hasMany(SubEchelon::class, 'sub_sector_code', 'code');
    }

    public function tier()
    {
        return $this->hasMany(Tier::class, 'sub_sector_code', 'code');
    }

    public function subTier()
    {
        return $this->hasMany(SubTier::class, 'sub_sector_code', 'code');
    }

    public function layer()
    {
        return $this->hasMany(Layer::class, 'sub_sector_code', 'code');
    }

    public function subLayer()
    {
        return $this->hasMany(SubLayer::class, 'sub_sector_code', 'code');
    }

    public function deck()
    {
        return $this->hasMany(Deck::class, 'sub_sector_code', 'code');
    }

    public function subDeck()
    {
        return $this->hasMany(SubDeck::class, 'sub_sector_code', 'code');
    }

    public function floor()
    {
        return $this->hasMany(Floor::class, 'sub_sector_code', 'code');
    }

    public function subFloor()
    {
        return $this->hasMany(SubFloor::class, 'sub_sector_code', 'code');
    }

    public function basement()
    {
        return $this->hasMany(Basement::class, 'sub_sector_code', 'code');
    }

    public function subBasement()
    {
        return $this->hasMany(SubBasement::class, 'sub_sector_code', 'code');
    }

    public function mine()
    {
        return $this->hasMany(Mine::class, 'sub_sector_code', 'code');
    }

    public function subMine()
    {
        return $this->hasMany(SubMine::class, 'sub_sector_code', 'code');
    }

    public function group()
    {
        return $this->hasMany(Group::class);
    }

    public function groupSelectedField()
    {
        return $this->group()->select('id', 'sub_sector_id', 'code', 'industry_code', 'raw_code',  'description','note', 'status', 'cross_indexed');
    }

    public function industry()
    {
        return $this->belongsTo(Industry::class, 'industry_code', 'code');
    }

    public function sector()
    {
        return $this->belongsTo(Sector::class);
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
            $query->where('code', '<>', $params['sub_sector_code']);
        }
        if(isset($params['group_parent'])){
            $query->where('id', '<>', $params['group_parent']);
        }

        $queryResult = $query->get(['id', 'code','description']);


        $i = count($data);
        if(count($queryResult) > 0)
        {
            foreach ($queryResult as $result)
            {
                $data[$i]['itemName'] = "{$result->description} ({$result->code})";
                $data[$i]['id'] ="$result->code|SubSector|{$result->id}";
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
                $data[$i]['Name'] = $result->description;
                $data[$i]['id'] = "{$result->code}|SubSector";
                $i++;
            }
        }
        return $data;
    }
}
