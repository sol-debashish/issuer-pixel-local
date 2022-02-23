<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Subscriber;
use DataTables;

class SubscriberController extends Controller
{
    public function index()
    {
        if (request()->ajax()) {
            $query =  Subscriber::select('id','email', 'created_at')->latest();
            $table = Datatables::of($query);
            $table->editColumn('created_at', function ($row) {
                return $row->created_at->format('m/d/Y  H:i:s');
            });
            return $table->make(true);
        }
        return view('admin.subscriber.index');
    }
}
