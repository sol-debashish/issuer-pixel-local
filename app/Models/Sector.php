<?php

namespace App\Models;

use Illuminate\Support\Str;

class Sector extends BaseCategoryModel
{
    protected $fillable = [
        'code',
        'raw_code',
        'industry_id',
        'industry_code',
        'description',
        'note',
        'status',
        'created_by',
    ];
    protected static $logName = 'sector_node';
    protected $nodeType = 'sector';

    public function subSectorSelectedField()
    {
        return $this->SubSector()->select('id', 'sector_id', 'code', 'industry_code', 'raw_code',  'description','note', 'status', 'cross_indexed');
    }

    public function subSector()
    {
        return $this->hasMany(SubSector::class);
    }

    public function group()
    {
        return $this->hasMany(Group::class, 'sector_code', 'code');
    }

    public function subGroup()
    {
        return $this->hasMany(SubGroup::class, 'sector_code', 'code');
    }

    public function echelon()
    {
        return $this->hasMany(Echelon::class, 'sector_code', 'code');
    }

    public function subEchelon()
    {
        return $this->hasMany(SubEchelon::class, 'sector_code', 'code');
    }

    public function tier()
    {
        return $this->hasMany(Tier::class, 'sector_code', 'code');
    }

    public function subTier()
    {
        return $this->hasMany(SubTier::class, 'sector_code', 'code');
    }

    public function layer()
    {
        return $this->hasMany(Layer::class, 'sector_code', 'code');
    }

    public function subLayer()
    {
        return $this->hasMany(SubLayer::class, 'sector_code', 'code');
    }

    public function deck()
    {
        return $this->hasMany(Deck::class, 'sector_code', 'code');
    }

    public function subDeck()
    {
        return $this->hasMany(SubDeck::class, 'sector_code', 'code');
    }

    public function floor()
    {
        return $this->hasMany(Floor::class, 'sector_code', 'code');
    }

    public function subFloor()
    {
        return $this->hasMany(SubFloor::class, 'sector_code', 'code');
    }

    public function basement()
    {
        return $this->hasMany(Basement::class, 'sector_code', 'code');
    }

    public function subBasement()
    {
        return $this->hasMany(SubBasement::class, 'sector_code', 'code');
    }

    public function mine()
    {
        return $this->hasMany(Mine::class, 'sector_code', 'code');
    }

    public function subMine()
    {
        return $this->hasMany(SubMine::class, 'sector_code', 'code');
    }

    public function industry()
    {
        return $this->belongsTo(Industry::class, 'industry_code', 'code');
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
        if(isset($params['sector_code']))
        {
            $query->where('code', '<>', $params['sector_code']);
        }
        if (isset($params['sub_sector_parent'])) {
            $query->where('id', '<>', $params['sub_sector_parent']);
        }

        $queryResult = $query->get(['id', 'code', 'description']);


        $i = count($data);
        if (count($queryResult) > 0) {
            foreach ($queryResult as $result) {
                $data[$i]['itemName'] = "($result->description) ({$result->code})";
                $data[$i]['id'] = "{$result->code}|Sector|{$result->id}";
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
                $data[$i]['id'] = "$result->code|Sector";
                $i++;
            }
        }
        return $data;
    }
}
