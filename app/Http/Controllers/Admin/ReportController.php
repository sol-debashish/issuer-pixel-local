<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TimeSpantOnTree;
use App\Repositories\TimeSpantOnTreeRepository;
use Carbon\Carbon;
use Carbon\CarbonInterval;
use DataTables;

class ReportController extends Controller
{
    const ITEM_PER_PAGE = 10;
    private $model;
    public function __construct(TimeSpantOnTree $timeSpantOnTreeTable)
    {
        $this->model = new TimeSpantOnTreeRepository($timeSpantOnTreeTable);
    }

    public function getTimeSpant(){

        if (request()->ajax()) {
            $query =  $this->model->getModel()->select('time_spant_on_trees.id','users.name', 'industries.description','time_spant','date_at')->newQuery()
                        ->leftJoin('users', 'users.id', '=', 'time_spant_on_trees.user_id')
                        ->leftJoin('industries', 'industries.id', '=', 'time_spant_on_trees.industry_id');
            $table = Datatables::of($query);
            $table->editColumn('date_at', function ($row) {
                return $row->date_at->format('F jS, Y');
            });
            $table->addColumn('message', ' ');
            $table->editColumn('message', function ($row) {
                return "User \"{$row->name}\" started looking at \"{$row->description}\" hierarchy on {$row->date_at->format('m/d/Y')} for ". CarbonInterval::seconds($row->time_spant)->cascade()->forHumans(); // 'User John started looking at "Medical Devices" hierarchy on MMDDYY 12:58 AM PST for 1 hour 55 minutes';
            });
            return $table->make(true);
        }
        return view('admin.report.time_spant');
    }
}
