<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

class BaseCategoryModel extends Model
{
    use LogsActivity;

    protected static $ignoreChangedAttributes = ['created_by', 'updated_at'];
    protected static $logAttributes = ['description', 'note'];
    protected static $logOnlyDirty = true;
    protected static $submitEmptyLogs = false;
    protected static $recordEvents = ['updated'];

    public function getDescriptionForEvent(string $eventName): string
    {
        if(auth()->check()){
            return  auth()->user()->name. " {$eventName}  '{$this->description}' ". $this->nodeType;
        }
        return '';
    }

    public function getCreatedAtAttribute($date)
    {
        return Carbon::parse($this->attributes['created_at'])->format('Y-m-d H:i:s');
    }

    public function getUpdatedAtAttribute($date)
    {
        return Carbon::parse($this->attributes['updated_at'])->format('Y-m-d H:i:s');
    }

    public function scopeGetAssoc($query, $params = [])
    {
        if(isset($params['industry_code']))
        {
            $query->whereIndustryCode($params['industry_code']);
        }

        $queryResult = $query->get(['code','description','id']);
        $data = [];
        if(count($queryResult) > 0)
        {
            foreach ($queryResult as $result)
            {
                $data[$result->id]= "$result->description ($result->code)";
            }
        }
        return $data;
    }


    public function scopeActive($query)
    {
        return $query->whereStatus(1);
    }

    public function scopeCodeAndDescriptionLike($query, $searchTerm)
    {
        return $query->Where(function($query) use($searchTerm){
            $query->where('description', 'LIKE', "%{$searchTerm}%");
            $query->orWhere(function($query) use ($searchTerm) {
                $query->where('code', 'LIKE', "%{$searchTerm}%");
            });
        });
    }
    public function scopeCodeAndDescriptionLikeExact($query, $searchTerm)
    {
        return $query->Where(function($query) use($searchTerm){
            $query->where('description', 'LIKE', "{$searchTerm}%");
            /*$query->orWhere(function($query) use ($searchTerm) {
                $query->where('code', 'LIKE', "{$searchTerm}");
            });*/
        });
    }

    public function hasRelation($key)
    {
        // If the key already exists in the relationships array, it just means the
        // relationship has already been loaded, so we'll just return it out of
        // here because there is no need to query within the relations twice.
        if ($this->relationLoaded($key)) {
            return true;
        }

        // If the "attribute" exists as a method on the model, we will just assume
        // it is a relationship and will load and return results from the query
        // and hydrate the relationship's value on the "relationships" array.
        if (method_exists($this, $key)) {
            //Uses PHP built in function to determine whether the returned object is a laravel relation
            return is_a($this->$key(), "Illuminate\Database\Eloquent\Relations\Relation");
        }

        return false;
    }

//    public function modelRelation($model, $foreignKey)
//    {
//        return $this->hasMany($model, $foreignKey, 'code');
//    }

}
