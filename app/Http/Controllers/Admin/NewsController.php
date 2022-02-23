<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use DataTables;

class NewsController extends Controller
{
    public function index()
    {
        if (request()->ajax()) {
            $query = DB::table('node_location_news');

            if(request()->filterNews && request()->filterNews == 'unassociated') {
                $query->where('industry', '');
                $query->where('node', '');
            }

            $table = Datatables::of($query);
            $template = 'admin.news._actions_template';

            $table->editColumn('title', function($row) {
                $charLimit = 50;
                $title = (strlen($row->title) > $charLimit) ? mb_substr($row->title, 0, $charLimit) . '...' : $row->title;
                return '<a href="' . $row->url . '" target="_blank">' . $title . '</a>';
            });

            $table->addColumn('type', ' ');
            $table->editColumn('type', function($row) {
                return $row->industry ? urldecode($row->industry) : urldecode($row->node);
            });

            $table->editColumn('publishedAt', function($row) {
                return date('jS F, Y', strtotime($row->publishedAt));
            });

            $table->addColumn('actions', ' ');
            $table->editColumn('actions', function($row) use ($template) {
                $newsId = $row->id;
                $associateNode = $title = null;

                if($row->industry == '' && $row->node == '') {
                    $associateNode = true;
                    $charLimit = 50;
                    $title = (strlen($row->title) > $charLimit) ? mb_substr($row->title, 0, $charLimit) . '...' : $row->title;
                }

                return view($template, compact('associateNode', 'newsId', 'title'));
            });

            $table->rawColumns(['title']);
            return $table->make(true);
        }
        return view('admin.news.index');
    }

    public function associateNode(Request $request)
    {
        try {
            $searchNode = explode('|', $request->search_node);
            $searchNodeModel = $searchNode[1];
            $searchNodeId = $searchNode[2];
            $targetModelName = "App\\Models\\$searchNodeModel";
            $targetItem = $targetModelName::whereId($searchNodeId)->first();
            $queryString = urlencode(preg_replace('/[_\W]+/', ' ', $targetItem->description));
            $newsType = ($searchNodeModel == 'Industry') ? 'industry' : 'node';

            DB::table('node_location_news')
                ->whereId($request->newsId)
                ->update([$newsType => $queryString]);

            $notification = [
                'msg'       => "Node successfully associated.",
                'status'    => 'success'
            ];
        }
        catch (\Exception $e)
        {
            logError($e);

            $notification = [
                'msg'       => "Operation Failed!",
                'status'    => 'error'
            ];
        }

        return response()->json($notification);
    }

    public function showAssociationDetails(Request $request)
    {
        $news = DB::table('node_location_news')->whereId($request->newsId)->first();
        $charLimit = 100;
        $title = (strlen($news->title) > $charLimit) ? mb_substr($news->title, 0, $charLimit) . '...' : $news->title;
        $title = '<a href="' . $news->url . '" target="_blank">' . $title . '</a>';
        $fullTerm = $news->industry ? urldecode($news->industry) : urldecode($news->node);
        $match = [];
        $totalTerms = $matchPercentage = 0;

        if(stripos($news->title, $fullTerm) === false) {
            $terms = explode(' ', $fullTerm);

            foreach($terms as $term) {
                if($term && $term != ' ') {
                    $totalTerms++;

                    if(stripos($news->title, $term) !== false) {
                        array_push($match, $term);
                        $matchPercentage += 100;
                    }
                }
            }

            $matchPercentage = $matchPercentage ? round($matchPercentage / $totalTerms) . '%' : 'N/A';
            $match = $match ? implode(', ', $match) : 'N/A';
        } else {
            $match = $fullTerm;
            $matchPercentage = '100%';
        }

        return view('admin.news.show', compact('title', 'fullTerm', 'match', 'matchPercentage'));
    }
}
