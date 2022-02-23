<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\HelpAndSupport;
use Carbon\Carbon;
use DataTables;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class HelpAndSupportController extends Controller
{
    private $status = [
        'Open'=> 'Open',
        'Pending'=> 'Pending',
        'Closed'=> 'Closed',
    ];
    public function index()
    {
        $toDate = Carbon::now()->format('Y-m-d');
        $formDate = Carbon::now()->subDays(1)->format('Y-m-d');
        $status = $this->status;
        if (request()->ajax()) {
            $query = HelpAndSupport::leftJoin('users as review_user', 'review_user.id', '=', 'help_and_supports.reviewed_by')
                ->select('help_and_supports.id','help_and_supports.name', 'help_and_supports.email', 'help_and_supports.message',
                    'help_and_supports.phone', 'review_user.name as reviewed_by', 'help_and_supports.created_at', 'help_and_supports.status')
               ;

            if(request()->searchByReviewStatus){
                $query->where('help_and_supports.status', request()->searchByReviewStatus);
            }

            if(request()->searchByFromdate){
                $query->whereDate('help_and_supports.created_at', '>=', request()->searchByFromdate);
            }
            if(request()->searchByTodate){
                $query->whereDate('help_and_supports.created_at', '<=', request()->searchByTodate);
            }

            $table = Datatables::of($query);
            $template = 'admin.help_and_support.review_status_template';
            $actionTemplate = 'admin.help_and_support.action_template';
            $table->editColumn('created_at', function ($row) {
                return $row->created_at->format('m/d/Y H:i:s');
            });
            $table->editColumn('status', function ($row) use ($template, $status) {
                return view($template, compact('row', 'status'));
            });
            $table->editColumn('message', function ($row) {
                return Str::limit($row->message, 20);
            });

            $table->addColumn('actions', ' ');
            $table->editColumn('actions', function ($row) use ($actionTemplate) {
                return view($actionTemplate, compact('row'));
            });

            return $table->make(true);
        }
        return view('admin.help_and_support.index', compact('status','formDate', 'toDate'));
    }

    public function show(HelpAndSupport $support)
    {
        $status = $this->status;
        return view('admin.help_and_support.show', compact('support', 'status'));
    }

    public function statusChange(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'support_id' => 'required',
            'review_status' => 'required|in:Pending,Closed',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'msg' => $validator->errors()->first()]);
        }
        try {
            $suggestion = HelpAndSupport::findOrFail($request->support_id);
            $suggestion->status = $request->review_status;
            $suggestion->reviewed_by = auth()->id();
            $suggestion->save();

            $data['msg'] = 'successfully changed!';
            $data['status'] = 'success';
        } catch (\Exception $e) {
            $data['msg'] = "Operation Failed!";
            $data['status'] = 'error';
            logError($e);
        }
        return response()->json($data);
    }
}
