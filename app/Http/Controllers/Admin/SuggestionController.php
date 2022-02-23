<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\CategorizationLevel;
use App\Models\Industry;
use App\Models\MediaFile;
use App\Models\MediaSubjectSuggestion;
use App\Models\SubjectType;
use App\Models\Suggestion;
use App\Traits\NodeHelperTrait;
use App\Traits\NodeMap;
use Carbon\Carbon;
use Illuminate\Http\Request;
use DataTables;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class SuggestionController extends Controller
{

    use NodeMap;
    use NodeHelperTrait;

    public function mediaSubjectSuggestion()
    {
        $mediaTye = [1 => 'Audio', 2=>'Video'];
        $reviewStatus = [
            'New','Accepted','Rejected'
        ];
        $toDate = Carbon::now()->format('Y-m-d');
        $formDate = Carbon::now()->subDays(1)->format('Y-m-d');
        if (request()->ajax()) {
            //$categorizationLevel = CategorizationLevel::pluck('name', 'id')->toArray();
            $query = MediaSubjectSuggestion::leftJoin('users', 'users.id', '=', 'media_subject_suggestions.created_by')
                ->leftJoin('users as review_user', 'review_user.id', '=', 'media_subject_suggestions.reviewed_by')
                ->select('media_subject_suggestions.id as id','subject', 'reason', 'media_type', 'users.name as username',
                    'users.email as email', 'review_status','review_user.name as reviewed_by', 'media_subject_suggestions.created_at')
                ->groupBy('media_subject_suggestions.id');

            if(request()->searchByMediaType){
                $query->where('media_type', request()->searchByMediaType);
            }
            if(request()->searchByReviewStatus){
                $query->where('review_status', request()->searchByReviewStatus);
            }

            if(request()->searchByFromdate){
                $query->whereDate('media_subject_suggestions.created_at', '>=', request()->searchByFromdate);
            }
            if(request()->searchByTodate){
                $query->whereDate('media_subject_suggestions.created_at', '<=', request()->searchByTodate);
            }

            $table = Datatables::of($query);
            $template = 'admin.suggestion.review_status_template';
            $actionTemplate = 'admin.suggestion.action_template';
            $industryTemplate = 'admin.suggestion.industry_template';
            $table->editColumn('created_at', function ($row) {
                return $row->created_at->format('m/d/Y H:i:s');
            });

//            $table->editColumn('industry_id', function ($row) use ($industryTemplate, $categorizationLevel) {
//                return view($industryTemplate, compact('row', 'categorizationLevel'));
//            });

            $table->editColumn('media_type', function ($row) {
                return $row->media_type == 2 ? 'video' : 'audio';
            });

            $table->editColumn('review_status', function ($row) use ($template, $reviewStatus) {
                return view($template, compact('row', 'reviewStatus'));
            });

            $table->addColumn('actions', ' ');
            $table->editColumn('actions', function ($row) use ($actionTemplate) {
                return view($actionTemplate, compact('row'));
            });

            return $table->make(true);
        }
        return view('admin.suggestion.media_subject', compact('mediaTye','reviewStatus','formDate', 'toDate'));
    }

    public function mediaSubjectShow(MediaSubjectSuggestion $suggestion) {
        $suggestion->load(['owner'=> function($oQuery){
            $oQuery->select('id', 'name', 'email');
        }, 'reviewer' => function($rQuery){
            $rQuery->select('id', 'name');
        }]);
        return view('admin.suggestion.media_subject_show', compact('suggestion'));
    }


    public function acceptRejectSubjectSuggestion(Request $request)
    {
        if (! auth()->user()->isAdminOrSuperAdmin()) {
            return response()->json(['status' => 'error', 'msg' => 'Unauthorize action']);
        }

        $validator = \Validator::make($request->all(), [
            'suggestion_id' => 'required',
            'review_status' => 'required|in:Accepted,Rejected',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'msg' => $validator->errors()->first()]);
        }
        DB::beginTransaction();
        try {
            $suggestion = MediaSubjectSuggestion::findOrFail($request->suggestion_id);
            $suggestion->review_status = $request->review_status;
            $suggestion->reviewed_by = auth()->id();
            $suggestion->save();

            if('Accepted' == $request->review_status)
            {
                SubjectType::create([
                    'name' => $suggestion->subject,
                    'media_type_id' => $suggestion->media_type,
                    'tag' => 'general',
                ]);
            }

            $data['msg'] = 'successfully changed!';
            $data['status'] = 'success';
            DB::commit();
        } catch (\Exception $e) {
            $data['msg'] = "Operation Failed!";
            $data['status'] = 'error';
            logError($e);
            DB::rollBack();
        }
        return response()->json($data);
    }

    public function hierarchySuggestion()
    {
        $hierarchyType = ['Company','Audio','Video'];
        $reviewStatus = [
            'New','Accepted','Rejected'
        ];
        $toDate = Carbon::now()->format('Y-m-d');
        $formDate = Carbon::now()->subDays(0)->format('Y-m-d');
        if (request()->ajax()) {
            $query = Suggestion::leftJoin('users', 'users.id', '=', 'suggestions.user_id')
                ->leftJoin('suggestion_types', 'suggestion_types.id', '=', 'suggestions.suggestion_type_id')
                ->leftJoin('users as review_user', 'review_user.id', '=', 'suggestions.reviewed_by')
                ->select('suggestions.id as id', 'users.name as username','suggestion_types.name as suggestion_types','review_status','hierarchy_type', 'users.email as email', 'suggestions.created_at as created_at', 'suggestions.created_at as created_at', 'suggestions.reviewed_by as reviewed_by');
                //->groupBy('media_subject_suggestions.id');

            if(request()->searchByHierarchyType){
                $query->where('hierarchy_type', request()->searchByHierarchyType);
            }
            if(request()->searchByReviewStatus){
                $query->where('review_status', request()->searchByReviewStatus);
            }

            if(request()->searchByFromdate){
                $query->whereDate('suggestions.created_at', '>=', request()->searchByFromdate);
            }
            if(request()->searchByTodate){
                $query->whereDate('suggestions.created_at', '<=', request()->searchByTodate);
            };

            $table = Datatables::of($query);
            $template = 'admin.suggestion.review_status_template';
            $actionTemplate = 'admin.suggestion.hierarchy_action_template';
//            $industryTemplate = 'admin.suggestion.industry_template';
            $table->editColumn('created_at', function ($row) {
                return $row->created_at->format('m/d/Y H:i:s');
            });

//            $table->editColumn('media_type', function ($row) {
//                return $row->media_type == 2 ? 'video' : 'audio';
//            });

            $table->editColumn('review_status', function ($row) use ($template, $reviewStatus) {
                return view($template, compact('row', 'reviewStatus'));
            });

//            $table->addColumn('actions', ' ');
            $table->editColumn('actions', function ($row) use ($actionTemplate) {
                return view($actionTemplate, compact('row'));
            });

            return $table->make(true);
        }
        return view('admin.suggestion.hierarchy', compact('hierarchyType','reviewStatus','formDate', 'toDate'));
    }

    public function hierarchyShow(Suggestion $suggestion) {
        $categorizationLevel = CategorizationLevel::pluck('name', 'id')->toArray();
        $suggestion->load(['owner'=> function($oQuery){
            $oQuery->select('id', 'name', 'email');
        }, 'reviewer' => function($rQuery){
            $rQuery->select('id', 'name');
        }, 'industry' => function($iQuery){
            $iQuery->select('id', 'description');
        }, 'suggestionType']);

        return view('admin.suggestion.hierarchy_show', compact('suggestion', 'categorizationLevel'));
    }

    public function acceptRejectHierarchySuggestion(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'suggestion_id' => 'required',
            'review_status' => 'required|in:Accepted,Rejected',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'msg' => $validator->errors()->first()]);
        }
        DB::beginTransaction();
        try {
            $suggestion = Suggestion::with('suggestionType')->findOrFail($request->suggestion_id);
            $suggestion->review_status = $request->review_status;
            $suggestion->reviewed_by = auth()->id();
            $suggestion->save();

            if('Accepted' == $request->review_status)
            {
                $categorizationLevel = CategorizationLevel::findOrFail($suggestion->categorization_level_id);
                $this->nodeMapNodeType = str_replace("_","-",Str::of($categorizationLevel->name)->snake());
                $createNodeParentField = $this->getNodeMapParentField();
                $createNodeNamespace = "App\\Models\\" . $this->getNodeMapModel();
                $industry = Industry::findOrFail($suggestion->industry_id);

                switch ($suggestion->suggestionType->name)
                {
                    case "add":
                        $createNodeNamespace::create([
                            'description' => $suggestion->suggestion_explanation,
                            'raw_code' => $this->_generateRawCode($createNodeNamespace, $createNodeParentField, $suggestion->parent_id),
                            'industry_code' => $industry->code,
                            $createNodeParentField => $suggestion->parent_id,
                            'replica_id' => $suggestion->parent_id,
                            'status' => 1,
                            'created_by' => auth()->id(),
                        ]);
                        break;
                    case "replace":
                        $createNodeNamespace::whereId($suggestion->node_id)->update(['description' => $suggestion->suggestion_explanation]);
                        break;
                    case "delete":
                        $createNodeNamespace::whereId($suggestion->node_id)->delete();
                        break;
                }
            }

            $data['msg'] = 'successfully changed!';
            $data['status'] = 'success';
            DB::commit();
        } catch (\Exception $e) {
            $data['msg'] = "Operation Failed!";
            $data['status'] = 'error';
            logError($e);
            DB::rollBack();
        }
        return response()->json($data);
    }
}
