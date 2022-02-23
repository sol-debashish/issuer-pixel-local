<?php

namespace App\Models;

use Illuminate\Support\Str;

class DynamicNodeView extends BaseCategoryModel {
    protected $table = '';

    protected static $logName = 'node_tree_view';
    protected $nodeType = 'node tree view';

    /**
     * @param $nodeMaps
     * @param $request
     * @param $parentNodeCode
     * @return array
     */
    public function searchNodes($nodeMaps, $request, $parentNodeCode) {
        $data = [];
        $searchTerm = $request->term;
        $industryCode = $request->industry_code;
        $searchType = $request->search_type;

        foreach ($nodeMaps as $nodeMapKey => $nodeMap) {
            if ($nodeMapKey == 'sub-mine') {
                continue;
            }

            $query = $this->setTable($nodeMap['table'] . '_view')
                ->where(function ($query) use ($searchTerm) {
                    $query->where('description', 'LIKE', "%{$searchTerm}%");
                    $query->orWhere(function ($query) use ($searchTerm) {
                        $query->where('code', 'LIKE', "%{$searchTerm}%");
                    });
                });

            if ($searchType != 'all' && $searchType != 'copy') {
                $query->where('code', 'LIKE', $industryCode . '%'); /* selects current industry */
            }

            if ($searchType == 'move') {
                $query->where('code', 'NOT LIKE', $request->node_code . '%')/* removes all child node including self */
                ->where('code', '<>', $parentNodeCode); /* remove's parent node */
            }

            if ($searchType == 'copy' || $searchType == 'all') {
                $query->where('code', '<>', $request->node_code); /* remove self */
            }

            $queryResult = $query->orderBy('code')->limit(25)->get(['id', 'description', 'code']);
            if (count($queryResult) > 0) {
                foreach ($queryResult as $result) {
                    $nodeItem = [
                        'itemName' => $result->description . " (" . $result->code . ")",
                        'id' => $result->code . "|{$nodeMap['model']}|" . $result->id
                    ];
                    if (!in_array($nodeItem, $data)) {
                        $data[] = $nodeItem;
                    }
                }
            }
        }

        return $data;
    }

}
