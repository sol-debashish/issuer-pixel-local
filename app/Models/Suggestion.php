<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Suggestion extends Model
{
    protected $fillable = [
        'suggestion_type_id',
        'suggestion_explanation',
        'suggestion_reason',
        'categorization_level_id',
        'node_id',
        'user_id',
        'industry_id',
        'hierarchy_type',
        'parent_id',
    ];

    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function reviewer()
    {
        return $this->belongsTo(User::class, 'reviewed_by', 'id');
    }

    public function suggestionType()
    {
        return $this->belongsTo(SuggestionType::class, 'suggestion_type_id', 'id');
    }

    public function industry()
    {
        return $this->belongsTo(Industry::class, 'industry_id', 'id');
    }

    function addSuggestion($suggestionData){
        return $this->create($suggestionData)->id;
    }
}
