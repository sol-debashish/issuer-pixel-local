<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NodeKeywordMap extends Model
{

    public function getKeyword()
    {
        return $this->belongsTo(NodeKeyword::class, 'keyword_id', 'id');
    }

}
