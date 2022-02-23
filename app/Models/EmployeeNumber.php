<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EmployeeNumber extends Model
{
    protected $appends = array('name');

    public function scopeActive($query)
    {
        return $query->whereStatus(1);
    }

    public function scopeEmployeeNumberAssoc($query)
    {
        $queryResult = $query->get(['min_val','max_val','id']);
        $data = [];
        if(count($queryResult) > 0)
        {
            $i = 0;
            foreach ($queryResult as $result)
            {
                $data[$i]['id']= $result->id;
                $data[$i]['name']= number_format($result->min_val). (($result->max_val > 0) ? " - " .number_format($result->max_val): "+");
                $i++;
            }
        }
        return $data;
    }

    public function getNameAttribute()
    {
     return number_format($this->min_val). (($this->max_val > 0) ? " - " .number_format($this->max_val): "+");
    }
}
