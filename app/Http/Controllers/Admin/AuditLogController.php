<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\Export\Contact\ExportContract;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Spatie\Activitylog\Models\Activity;
use DataTables;

class AuditLogController extends Controller
{
    const ITEM_PER_PAGE = 10;
    private $logArray = [
        'industry_node',
        'duplicate_industry',
        'industry_published',
        'sector_node',
        'sub_sector_node',
        'group_node',
        'sub_group_node',
        'echelon_node',
        'sub_echelon_node',
        'tier_node',
        'sub_tier_node',
        'layer_node',
        'sub_layer_node',
        'sub_deck_node',
        'deck_node',
        'floor_node',
        'sub_floor_node',
        'basement_node',
        'sub_basement_node',
        'mine_node',
        'sub_mine_node',
        'Save manual snapshot',
        'Load manual snapshot',
        'Load snapshot',
        'keyword_add',
        'Keyword_delete',
    ];
    public function index(){

        $toDate = Carbon::now()->format('Y-m-d');
        $formDate = Carbon::now()->subDays(0)->format('Y-m-d');

        $types = Activity::distinct()->whereNotIn('log_name', $this->logArray)->pluck('log_name', 'log_name')->toArray();

        if (request()->ajax()) {
            $lastLoggedActivity = (new Activity)->whereNotIn('log_name', $this->logArray)->newQuery();
            if(request()->searchByType){
                $lastLoggedActivity->where('log_name', request()->searchByType);
            }

            if(request()->searchByFromdate){
                $lastLoggedActivity->whereDate('created_at', '>=', request()->searchByFromdate);
            }
            if(request()->searchByTodate){
                $lastLoggedActivity->whereDate('created_at', '<=', request()->searchByTodate);
            }

            $table = Datatables::of($lastLoggedActivity->get());
            $table->editColumn('created_at', function ($row) {
                return $row->created_at->format('m/d/Y H:i:s A');
            });

            $table->addColumn('delete', ' ');
            $table->addColumn('user', ' ');
            $table->addColumn('email', ' ');
            $table->addColumn('duration', ' ');

            $table->editColumn('delete', function ($row) {
                return $row;
            });
            $table->editColumn('user', function ($row) {
                if(null == $row->causer)
                {

                    $name = explode('|', $row->description);
                    return ((sizeof($name)> 1) ? $name[0]: 'Anonymous');
                }
                return $row->causer->name;
            });
            $table->editColumn('email', function ($row) {
                if(null == $row->causer)
                {

                    $description = explode('|', $row->description);
                    return !empty($description[1]) ? $description[1] : '';
                }
                return $row->causer->email;
            });
//            $table->editColumn('status', function ($row) {
//                return $row->properties->toArray();
//            });
            $table->editColumn('duration', function ($row) {
                return $row->getExtraProperty('duration') ?? '-';
            });

            return $table->make(true);
        }
        return view('admin.audit_log.index', compact('types', 'formDate', 'toDate'));
    }

    public function destroy(Request $request)
    {
        try{

            Activity::whereIn('id',$request->deleteids_arr)->delete();
            $data['msg'] = 'Successfully deleted!';
            $data['status'] = 'success';
        }
        catch (\Exception $e) {
            logError($e);
            $data['msg'] = 'Operation Failed!';
            $data['status'] = 'error';
        }
        return response()->json($data);
    }

    public function export(Request $request)
    {
        try{
            $lastLoggedActivity = (new Activity)->whereNotIn('log_name', $this->logArray)->newQuery();
            if(request()->type){
                $lastLoggedActivity->where('log_name', request()->type);
            }

            if(request()->from_date){
                $lastLoggedActivity->whereDate('created_at', '>=', request()->from_date);
            }
            if(request()->to_date){
                $lastLoggedActivity->whereDate('created_at', '<=', request()->to_date);
            }

            $data = $lastLoggedActivity->latest('id')->get();
            switch($request->export_type)
            {
                case 'txt':
//                    return $this->exportResult(new  \App\Services\Export\Txt, $data, $params);
                    break;
                case 'csv':
                    return $this->exportResult(new  \App\Services\Export\Csv, $data);
                    break;
                case 'xlsx':
//                    return $this->exportResult(new  \App\Services\Export\ExcelFormat, $data, $params);
                    break;
            }
        }
        catch (\Exception $e) {
            logError($e);
            $data['msg'] = 'Operation Failed!';
            $data['status'] = 'error';
        }
        return response()->json($data);
    }

    private function exportResult(ExportContract $outputFormat, $data)
    {
        return $outputFormat->output($data);

    }
}
