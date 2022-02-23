<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use DataTables;
use App\Models\TwitterTrendingTag;

class TwitterTrendsController extends Controller
{
    public function index()
    {
        if (request()->ajax()) {
            $query = TwitterTrendingTag::where('is_recent', 1);
            $table = Datatables::of($query);

            $table->editColumn('url', function($row) {
                return '<a href="' . $row->url . '" target="_blank">' . $row->url . '</a>';
            });

            $table->addColumn('createdAt', ' ');
            $table->editColumn('createdAt', function($row) {
                return date('jS F, Y - h:i a', strtotime($row->created_at));
            });

            $table->rawColumns(['url']);
            return $table->make(true);
        }
        return view('admin.twitter_trends.index');
    }
}
