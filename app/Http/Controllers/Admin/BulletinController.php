<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\BulletinRequest;
use App\Traits\UploadTrait;
use Illuminate\Http\Request;
use App\Models\Bulletin;
use DataTables;
use Illuminate\Support\Facades\Auth;

class BulletinController extends Controller
{
    use UploadTrait;
    private $bulletinImageFolder;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->bulletinImageFolder = config('filesystems.disks.s3.s3_env') . '/images/bulletin/';
    }

    public function index()
    {
        if (request()->ajax()) {
            $query =  (new Bulletin)->newQuery();
            $table = Datatables::of($query);
            $template = 'admin.bulletins._actions_template';
            $statusTemplate = 'partials.status_template';

            $table->editColumn('is_sticky', function ($row) {
                return $row->is_sticky ? 'Yes' : 'No';
            });
//            $table->editColumn('image_name', function ($row) {
//                return $row->image_name; /*? '<img src="'. asset("uploads/bulletin_image/{$row->image_name}").'" width="100" />' : '';*/
//            });

            $table->editColumn('status', function ($row) use ($statusTemplate) {
                return view($statusTemplate, compact('row'));
            });
            $table->addColumn('actions', ' ');
            $table->editColumn('actions', function ($row) use ($template) {
                $routeKey = 'admin.bulletins';
                return view($template, compact('row', 'routeKey'));
            });
            return $table->make(true);
        }
        return view('admin.bulletins.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.bulletins.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(BulletinRequest $request)
    {
        try {
            $bulletinData = [
                'created_by' => auth()->id(),
                'updated_by' => auth()->id(),
            ];
            if ($image = request()->image) {
                // Upload image
                $bulletinData['image_name'] = $this->uploadSingleImage($image, $this->bulletinImageFolder);
            }
            Bulletin::create($request->merge($bulletinData)->toArray());

            $notification = [
                'message'       => "Bulletin successfully created.",
                'alert-type'    => 'success'
            ];
        }
        catch (QueryException $qe)
        {
            logError($qe);

            $notification = [
                'message'       => "Operation Failed!",
                'alert-type'    => 'error'
            ];
        }
        catch (\Exception $e)
        {
            logError($e);

            $notification = [
                'message'       => "Operation Failed!",
                'alert-type'    => 'error'
            ];
        }

        return redirect()->route('admin.bulletins.index')->with($notification);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Bulletin $bulletin)
    {
        return view('admin.bulletins.show', compact('bulletin'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Bulletin $bulletin)
    {
        return view('admin.bulletins.edit', compact('bulletin'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(BulletinRequest $request, Bulletin $bulletin)
    {

        try {
            $bulletinData = [
                'updated_by' => auth()->id(),
            ];
            if ($image = request()->image) {
                $this->deleteFileIfExists( $this->bulletinImageFolder. $bulletin->image_name);
                // Upload image
                $bulletinData['image_name'] = $this->uploadSingleImage($image, $this->bulletinImageFolder);
            }
            $bulletin->update($request->merge($bulletinData)->toArray());

            $notification = [
                'message'       => "Bulletin successfully updated.",
                'alert-type'    => 'success'
            ];
        }
        catch (QueryException $qe)
        {
            logError($qe);

            $notification = [
                'message'       => "Operation Failed!",
                'alert-type'    => 'error'
            ];
        }
        catch (\Exception $e)
        {
            logError($e);

            $notification = [
                'message'       => "Operation Failed!",
                'alert-type'    => 'error'
            ];
        }

        return redirect()->route('admin.bulletins.index')->with($notification);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function deleteBulletin(Request $request)
    {
        $bulletin = Bulletin::find($request->id);

        if (null == $bulletin) {
            return response()->json(['status' => 'fail']);
        }
        try {
            if($bulletin->image_name)
            {
                $this->deleteFileIfExists( $this->bulletinImageFolder. $bulletin->image_name);
            }
            $bulletin->delete();

            $notification = [
                'msg'       => "Bulletin successfully deleted.",
                'status'    => 'success'
            ];
        }
        catch (QueryException $qe)
        {
            logError($qe);

            $notification = [
                'msg'       => "Operation Failed!",
                'status'    => 'error'
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
}
