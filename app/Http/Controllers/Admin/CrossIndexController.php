<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Basement;
use App\Models\CategorizationLevel;
use App\Models\CrossIndex;
use App\Models\Deck;
use App\Models\Echelon;
use App\Models\Floor;
use App\Models\Group;
use App\Models\Layer;
use App\Models\Mine;
use App\Models\Sector;
use App\Models\SubBasement;
use App\Models\SubDeck;
use App\Models\SubEchelon;
use App\Models\SubFloor;
use App\Models\SubGroup;
use App\Models\SubLayer;
use App\Models\SubMine;
use App\Models\SubSector;
use App\Models\SubTier;
use App\Models\Tier;
use Illuminate\Http\Request;
use DataTables;
use App\Models\Industry;

class CrossIndexController extends Controller
{
    public function home()
    {
        $categorizationlevel = CategorizationLevel::pluck('name', 'id')->toArray();

        if (request()->ajax()) {

            $query = (new CrossIndex)->newQuery();
            $table = Datatables::of($query);
            $nodeTemplate = 'admin.cross_index._cross_node_template';
            $actionTemplate = 'admin.cross_index._actions_template';

            $table->editColumn('node_one_categorization_level_id', function ($row) use ($categorizationlevel, $nodeTemplate) {
                $nodeLevel = $categorizationlevel[$row->node_one_categorization_level_id];
                $NodeModelName = "App\\Models\\$nodeLevel";
                $nodeItem = $NodeModelName::with(['industry' => function ($quey) {
                    $quey->select('code', 'description');
                }])->whereId($row->node_one_id)->first(['industry_code', 'code', 'description']);

                return view($nodeTemplate, compact('nodeItem', 'nodeLevel'));
            });

            $table->editColumn('node_two_categorization_level_id', function ($row) use ($categorizationlevel, $nodeTemplate) {
                $nodeLevel = $categorizationlevel[$row->node_two_categorization_level_id];
                $NodeModelName = "App\\Models\\$nodeLevel";
                $nodeItem = $NodeModelName::with(['industry' => function ($quey) {
                    $quey->select('code', 'description');
                }])->whereId($row->node_two_id)->first(['industry_code', 'code', 'description']);

                return view($nodeTemplate, compact('nodeItem', 'nodeLevel'));
            });
            $table->editColumn('created_at', function ($row) {
                return $row->created_at->format('jS F, Y H:i:s A');
            });

            $table->addColumn('actions', ' ');
            $table->editColumn('actions', function ($row) use ($actionTemplate) {
                $routeKey = 'admin.crossIndex';
                return view($actionTemplate, compact('row', 'routeKey'));
            });
            return $table->make(true);
        }
        return view('admin.cross_index.home');
    }

    public function create()
    {
        $industries = industry::where('status',1)->get(['id', 'code', 'description']);
        return view('admin.cross_index.create', compact('industries'));
    }

    public function getMassCrossNodeCategory(Request $request)
    {
        $data1 = [];
        $data2 = [];
        try {
            $data1 = (new SubMine())->getNodeSearchDataCross($request, $data1, ['industry_code' => $request->treeA]);
            $data2 = (new SubMine())->getNodeSearchDataCross($request, $data2, ['industry_code' => $request->treeB]);
            $data1 = (new Mine())->getNodeSearchDataCross($request, $data1, ['industry_code' => $request->treeA]);
            $data2 = (new Mine())->getNodeSearchDataCross($request, $data2, ['industry_code' => $request->treeB]);
            $data1 = (new SubBasement())->getNodeSearchDataCross($request, $data1, ['industry_code' => $request->treeA]);
            $data2 = (new SubBasement())->getNodeSearchDataCross($request, $data2, ['industry_code' => $request->treeB]);
            $data1 = (new Basement())->getNodeSearchDataCross($request, $data1, ['industry_code' => $request->treeA]);
            $data2 = (new Basement())->getNodeSearchDataCross($request, $data2, ['industry_code' => $request->treeB]);
            $data1 = (new SubFloor())->getNodeSearchDataCross($request, $data1, ['industry_code' => $request->treeA]);
            $data2 = (new SubFloor())->getNodeSearchDataCross($request, $data2, ['industry_code' => $request->treeB]);
            $data1 = (new Floor())->getNodeSearchDataCross($request, $data1, ['industry_code' => $request->treeA]);
            $data2 = (new Floor())->getNodeSearchDataCross($request, $data2, ['industry_code' => $request->treeB]);
            $data1 = (new SubDeck())->getNodeSearchDataCross($request, $data1, ['industry_code' => $request->treeA]);
            $data2 = (new SubDeck())->getNodeSearchDataCross($request, $data2, ['industry_code' => $request->treeB]);
            $data1 = (new Deck())->getNodeSearchDataCross($request, $data1, ['industry_code' => $request->treeA]);
            $data2 = (new Deck())->getNodeSearchDataCross($request, $data2, ['industry_code' => $request->treeB]);
            $data1 = (new SubLayer())->getNodeSearchDataCross($request, $data1, ['industry_code' => $request->treeA]);
            $data2 = (new SubLayer())->getNodeSearchDataCross($request, $data2, ['industry_code' => $request->treeB]);
            $data1 = (new Layer())->getNodeSearchDataCross($request, $data1, ['industry_code' => $request->treeA]);
            $data2 = (new Layer())->getNodeSearchDataCross($request, $data2, ['industry_code' => $request->treeB]);
            $data1 = (new SubTier())->getNodeSearchDataCross($request, $data1, ['industry_code' => $request->treeA]);
            $data2 = (new SubTier())->getNodeSearchDataCross($request, $data2, ['industry_code' => $request->treeB]);
            $data1 = (new Tier())->getNodeSearchDataCross($request, $data1, ['industry_code' => $request->treeA]);
            $data2 = (new Tier())->getNodeSearchDataCross($request, $data2, ['industry_code' => $request->treeB]);
            $data1 = (new SubEchelon())->getNodeSearchDataCross($request, $data1, ['industry_code' => $request->treeA]);
            $data2 = (new SubEchelon())->getNodeSearchDataCross($request, $data2, ['industry_code' => $request->treeB]);
            $data1 = (new Echelon())->getNodeSearchDataCross($request, $data1, ['industry_code' => $request->treeA]);
            $data2 = (new Echelon())->getNodeSearchDataCross($request, $data2, ['industry_code' => $request->treeB]);
            $data1 = (new SubGroup())->getNodeSearchDataCross($request, $data1, ['industry_code' => $request->treeA]);
            $data2 = (new SubGroup())->getNodeSearchDataCross($request, $data2, ['industry_code' => $request->treeB]);
            $data1 = (new Group())->getNodeSearchDataCross($request, $data1, ['industry_code' => $request->treeA]);
            $data2 = (new Group())->getNodeSearchDataCross($request, $data2, ['industry_code' => $request->treeB]);
            $data1 = (new SubSector())->getNodeSearchDataCross($request, $data1, ['industry_code' => $request->treeA]);
            $data2 = (new SubSector())->getNodeSearchDataCross($request, $data2, ['industry_code' => $request->treeB]);
            $data1 = (new Sector())->getNodeSearchDataCross($request, $data1, ['industry_code' => $request->treeA]);
            $data2 = (new Sector())->getNodeSearchDataCross($request, $data2, ['industry_code' => $request->treeB]);
            $data = [
                'nodeAdata' => $data1,
                'nodeBdata' => $data2,
            ];

        } catch (QueryException $qe) {
            $data['msg'] = "Operation Failed!";
            $data['status'] = 'error';
            logError($qe);

        } catch (\Exception $e) {
            $data['msg'] = "Operation Failed!";
            $data['status'] = 'error';
            logError($e);
        }

        return view('admin.cross_index.matched_cross_nodes', compact('data'));
    }

    public function storeMassCrossNodes(Request $request)
    {
        $crossedNodes = explode(',', $request->all_cross_nodes);

        foreach ($crossedNodes as $nodes) {
            $singleCrossedNodes = explode('-', $nodes);
//            First Node
            $firstNode = explode('|', $singleCrossedNodes[0]);
            $firstNodeCode = $firstNode[0];
            $firstNodeType = $firstNode[1];
            $firstNodeModelName = "App\\Models\\$firstNodeType";
            $firstNodeItem = $firstNodeModelName::whereCode($firstNodeCode)->first();
            $firstNodelevel = CategorizationLevel::where('name', $firstNodeType)->first();
//            Second Node
            $secondNode = explode('|', $singleCrossedNodes[1]);
            $secondNodeCode = $secondNode[0];
            $secondNodeType = $secondNode[1];
            $secondNodeModelName = "App\\Models\\$secondNodeType";
            $secondNodeItem = $secondNodeModelName::whereCode($secondNodeCode)->first();
            $secondNodelevel = CategorizationLevel::where('name', $secondNodeType)->first();


            try {
                /*
                 * Save cross indexed data
                 */
                $exist = CrossIndex::where([
                    'node_one_categorization_level_id' => $firstNodelevel->id,
                    'node_one_id' => $firstNodeItem->id,
                    'node_two_categorization_level_id' => $secondNodelevel->id,
                    'node_two_id' => $secondNodeItem->id,
                ])->exists();
                $exist2 = CrossIndex::where([
                    'node_one_categorization_level_id' => $secondNodelevel->id,
                    'node_one_id' => $secondNodeItem->id,
                    'node_two_categorization_level_id' => $firstNodelevel->id,
                    'node_two_id' => $firstNodeItem->id,
                ])->exists();
                if ($exist || $exist2) {
                    $notification = array(
                        'message' => "Already cross indexed",
                        'alert-type' => 'error'
                    );
                } else {
                    $crossIndexed = CrossIndex::create([
                        'node_one_categorization_level_id' => $firstNodelevel->id,
                        'node_one_id' => $firstNodeItem->id,
                        'node_two_categorization_level_id' => $secondNodelevel->id,
                        'node_two_id' => $secondNodeItem->id,
                    ]);
                    $crossIndexed->save();

                    /* end */
                    /*
                    * Make cross indexed flag true for node one
                    */
                    $crossedFlagOne = $firstNodeModelName::findOrFail($firstNodeItem->id);
                    $crossedFlagOne->cross_indexed = 1;
                    $crossedFlagOne->save();
                    /*
                     * Make cross indexed flag true for node two
                     */
                    $crossedFlagTwo = $secondNodeModelName::findOrFail($secondNodeItem->id);
                    $crossedFlagTwo->cross_indexed = 1;
                    $crossedFlagTwo->save();

                    $notification = array(
                        'message' => "successfully cross index created",
                        'alert-type' => 'success'
                    );
                }
            } catch (QueryException $qe) {
                $notification = array(
                    'message' => "Operation Failed!",
                    'alert-type' => 'error'
                );
                logError($qe);
            } catch (\Exception $e) {
                $notification = array(
                    'message' => "Operation Failed!",
                    'alert-type' => 'error'
                );
                logError($e);
            }
        }
        return redirect()->route('admin.cross.index.home')->with($notification);
    }
}
