<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\SearchHistory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Validator;

class SearchHistoryController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $histories = SearchHistory::where('user_id', auth()->user()->id)->orderby('name', 'asc')->get();
            return $this->sendResponse($histories, 'Data found successfully.');
        } catch (Exception $ex) {
            return $this->sendError('error', $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $rules =  [
            'name'          => 'required|unique:search_histories,name|max:191',
            'search_query'  => 'required'
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            $error  = $validator->errors()->first();
            return $this->sendError('FIELDS_VALIDATION_ERROR', ['queryName' => $error], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        try {
            $history = SearchHistory::create([
                'user_id'       => auth()->user()->id,
                'name'          => $request->get('name'),
                'query_string'  => $request->get('search_query')
            ]);
            return $this->sendResponse($history, 'Saved successfully.');
        } catch (Exception $ex) {
            return $this->sendError('error', $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $history = SearchHistory::find($id);
        if (!$history) {
            return $this->sendError('error', 'Not found', Response::HTTP_NOT_FOUND);
        }
        try {
            $history->delete();
            return $this->sendResponse($history, 'Deleted successfully.');
        } catch (Exception $ex) {
            return $this->sendError('error', $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}

