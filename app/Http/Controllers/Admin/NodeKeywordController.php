<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\DynamicNodeView;
use App\Models\NodeKeyword;
use App\Models\NodeKeywordMap;
use App\Traits\NodeMap;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NodeKeywordController extends Controller
{
    use NodeMap;

    public function store(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'keyword' => 'required|string',
            'industry_id_for_keyword' => 'required',
            'keyword_type' => 'required|in:1,2',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'msg' => $validator->errors()->first()]);
        }
        try {
            $keywordArray = array_filter(array_map('trim', explode(',', $request->keyword)));
            $i = 0;
            $keywordIds = [];
            $keywordNames = [];
            foreach ($keywordArray as $keyword) {
                $item = NodeKeyword::firstOrCreate(['name' => $keyword]);
                $keywordIds[$i] = $item->id;
                $i++;
            }
            $uniqueKeywordIds = array_unique($keywordIds);
            if ($request->node_id_for_keyword) {
                $insertArray = [];
                foreach ($uniqueKeywordIds as $key=>$uniqueKeywordId) {
                    if (NodeKeywordMap::where('keyword_id', $uniqueKeywordId)->where('node_id', $request->node_id_for_keyword)->exists()) {
                        continue;
                    }
                    $nodeKeyword=NodeKeyword::find($uniqueKeywordId);
                    array_push($keywordNames,$nodeKeyword->name);
                    $insertArray[$key] = [
                        'industry_id' => $request->industry_id_for_keyword,
                        'keyword_id' => $uniqueKeywordId,
                        'keyword_type' => $request->keyword_type,
                        'node_type' => $request->node_type_for_keyword,
                        'node_id' => $request->node_id_for_keyword,
                        'node_code' => $request->node_code_for_keyword,
                    ];
                }
                $insert_data = collect($insertArray);
                $chunks = $insert_data->chunk(5000);
                foreach ($chunks as $chunk) {
                    NodeKeywordMap::insert($chunk->toArray());
                }
                $data['status'] = 'success';
                $data['msg'] = 'Added successful';
            } else {
                $this->nodeMapNodeType = 'industry';
                $nodeCode = $request->industry_id_for_keyword;
                $childNodeType = $this->getNodeMapNextKey();
                if (!empty($childNodeType)) {
                    $returnData = $this->get_recursive_child_id($childNodeType, $nodeCode);
                    $insertArray = [];
                    $j = 0;

                    foreach ($uniqueKeywordIds as $uniqueKeywordId) {
                        if (NodeKeywordMap::where('keyword_id', $uniqueKeywordId)->where('industry_id', $nodeCode)->exists()) {
                            continue;
                        }
                         $nodeKeyword=NodeKeyword::find($uniqueKeywordId);
                         array_push($keywordNames,$nodeKeyword->name);
                        foreach (array_filter($returnData) as $key => $values) {
                            foreach ($values as $value) {
                                $insertArray[$j]['industry_id'] = $nodeCode;
                                $insertArray[$j]['keyword_id'] = $uniqueKeywordId;
                                $insertArray[$j]['keyword_type'] = $request->keyword_type;
                                $insertArray[$j]['node_type'] = $key;
                                $insertArray[$j]['node_id'] = $value['id'];
                                $insertArray[$j]['node_code'] = $value['code'];
                                $j++;
                            }
                        }
                    }
                    $insert_data = collect($insertArray);
                    $chunks = $insert_data->chunk(5000);
                    foreach ($chunks as $chunk) {
                        NodeKeywordMap::insert($chunk->toArray());
                    }
                }
                $data['status'] = 'success';
                $data['msg'] = 'Added successful';
            }

            /* activity log for keyword_add */
            if(count($keywordNames))
            {
                $keywords="";
                foreach ($keywordNames as $index => $val){
                    $keywords .= $val;
                    if ($index != array_key_last($keywordNames))
                        $keywords .= ',';
                }
                $user = Auth::user();
                activity()
                    ->useLog('keyword_add')
                    ->performedOn($user)
                    ->causedBy($user)
                    ->log("{$user->name}  add '{$keywords}' keyword");
            }
            /* end activity log for keyword_add */

        } catch (\Exception $e) {
            $data['msg'] = 'Failed to load data!';
            $data['status'] = 'error';
            \Log::error($e->getFile() . ':' . $e->getLine() . ' ' . $e->getMessage());
        }
        return response()->json($data);
    }

    private function get_recursive_child_id($childNodeType, $nodeCode)
    {
        $returnData = [];
        $data = (new DynamicNodeView())->setTable($this->getNodeMapTableView($childNodeType))
            ->where('code', 'LIKE', $nodeCode . '%')->get(['id', 'code'])->toArray();

        $returnData[$childNodeType] = $data;
        $this->nodeMapNodeType = $childNodeType;
        if ($this->getNodeMapNextKey() != '') {
            $recurData = $this->get_recursive_child_id($this->getNodeMapNextKey(), $nodeCode);
            if (!empty($recurData)) {
                $returnData = array_merge($returnData, $recurData);
            }
        }
        return $returnData;

    }

    public function getNodeKeyword(Request $request)
    {

        try {
            $industry_id=$request->industry_id;
            $node_id=$request->node_id;
            $keyword_type=$request->keyword_type;

            if($node_id !=''){
                $result=NodeKeywordMap::with('getKeyword')->where('node_id', $node_id)->where('keyword_type', $keyword_type)->groupBy('keyword_id')->get();
            }else{
                $result=NodeKeywordMap::with('getKeyword')->where('industry_id', $industry_id)->where('keyword_type', $keyword_type)->groupBy('keyword_id')->get();
            }


             if(sizeof($result)){
                 $data['status'] = 'success';
                 $data['msg'] = 'Keyword found';
                 $data['result'] = $result;
             }else{
                 $data['status'] = 'error';
                 $data['msg'] = 'No data found!!';
             }
        } catch (\Exception $e) {
            $data['msg'] = 'Failed to load data!';
            $data['status'] = 'error';
            \Log::error($e->getFile() . ':' . $e->getLine() . ' ' . $e->getMessage());
        }
        return response()->json($data);
    }

    public function deleteNodeKeyword(Request $request)
    {
        try {
            $keyword=$request->keyword;
            $industry_id=$request->industry_id;
            $nodeKeyword=NodeKeyword::where('name', $keyword)->first();
            if(null == $nodeKeyword)
            {
               return '';
            }
            $keyword_id=$nodeKeyword->id;
            $node_id=$request->node_id;
            $keyword_type=$request->keyword_type;
            if($node_id !=''){
                $result=NodeKeywordMap::where('keyword_id',$keyword_id)->where('node_id',$node_id)->where('keyword_type', $keyword_type)->where('industry_id', $industry_id)->delete();
            }else{
                $result=NodeKeywordMap::where('keyword_id',$keyword_id)->where('keyword_type', $keyword_type)->where('industry_id', $industry_id)->delete();
            }

            if($result){
                $data['status'] = 'success';
                $data['msg'] = 'Keyword deleted';
                $data['result'] = $result;
                /* activity log for keyword_delete */
                $user = Auth::user();
                activity()
                    ->useLog('keyword_delete')
                    ->performedOn($user)
                    ->causedBy($user)
                    ->log("{$user->name} delete '{$keyword}' keyword");
                /* end activity log for keyword_delete */

            }else{
                $data['status'] = 'error';
                $data['msg'] = 'No data found!!';
            }
        } catch (\Exception $e) {
            $data['msg'] = 'Failed to load data!';
            $data['status'] = 'error';
            \Log::error($e->getFile() . ':' . $e->getLine() . ' ' . $e->getMessage());
        }
        return response()->json($data);
    }
}
