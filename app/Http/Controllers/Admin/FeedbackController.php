<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Feedback;
use DataTables;

class FeedbackController extends Controller
{
    public function index()
    {
        if (request()->ajax()) {
            $query =  Feedback::select('id','reviewer_name', 'reviewer_email', 'rating', 'review', 'created_at')->latest();
            $table = Datatables::of($query);
            $table->editColumn('created_at', function ($row) {
                return $row->created_at->format('m/d/Y  H:i:s');
            });
            $reviewTemplate = 'admin.feedback.review_template';
            $table->editColumn('review', function ($row) use ($reviewTemplate) {
                return view($reviewTemplate, compact('row'));
            });

            return $table->make(true);
        }
        return view('admin.feedback.index');
    }

    public function show(Feedback $feedback)
    {
        return view('admin.feedback.show', compact('feedback'));
    }
}
