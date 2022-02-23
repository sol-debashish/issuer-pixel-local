<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    public function scopeActive($query)
    {
        return $query->whereStatus(1);
    }

    public function scopeGetAssoc($query, $params = [])
    {
        $queryResult = $query->get(['id','name','iso']);
        $data = [];
        if(count($queryResult) > 0)
        {
            $i = 0;
            foreach ($queryResult as $result)
            {
                $data[$i]['id']= $result->id;
                $data[$i]['name']= "$result->name, $result->iso";
                $i++;
            }
        }
        return $data;
    }
}
