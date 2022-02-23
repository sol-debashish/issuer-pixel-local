<?php

namespace App\Http\Controllers\Api\V1;

use App\Jobs\DeleteVideoFromDacast;
use App\Models\ContentFolder;
use App\Models\MediaFile;
use App\Models\Video;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Validator;
use VzaarApi;

class ContentFolderController extends BaseController
{

    public $rootFolderId;

    // Folder Save
    public function store(Request $request)
    {
        try {
            $postData = $request->all();

            $folderLayer = ContentFolder::where('company_id', auth()->user()->company_id)
                ->where('id', $request->pid)
                ->first();

            $result = ContentFolder::create([
                'company_id' => auth()->user()->company_id,
                'id'         => $request->id,
                'name'       => $this->__getFolderName($postData),
                'pid'        => $request->pid,
                'folder_layer' => $request->pid == 0 ? 0 : (($folderLayer->folder_layer ?? 0) + 1)
            ]);
            $result =  $this->getRootNodeFolder();
            return $this->sendResponse($result, 'Folder Create successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    // Get Folder Name List
    private function __getFolderName($request)
    {
        try {
            $folderName = $request['name'];

            $folders = ContentFolder::where('company_id', auth()->user()->company_id)
                ->where('pid', $request['pid'])
                ->pluck('name')
                ->toArray();

            return $this->__checkTree($folders, $folderName);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    // Check Unique Folder Name (Recursion)
    private function __checkTree($folders, $folderName)
    {
        try {
            if (in_array($folderName, $folders)) {
                $folderName = preg_match('~[0-9]+~', $folderName) ? $folderName : $folderName . ' 0';
                $folderName = preg_replace_callback('/(\d+)(?!.*\d)+/', function ($f) {
                    return ++$f[0];
                }, $folderName);
                $folderName = $this->__checkTree($folders, $folderName);
            }

            return $folderName;
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }



    // Get Root Node Folder List
    public function getRootNodeFolder()
    {
        try {
            $folders = ContentFolder::where('company_id', auth()->user()->company_id)
                ->where('pid', 0)
                ->get();

            foreach ($folders as $key => $folder) {
                $has_child = ContentFolder::where('company_id', auth()->user()->company_id)
                    ->where('pid', $folder['id'])->count();
                if ($has_child) {
                    $folders[$key]['children'] = $this->__getParentWiseNodeFolder($folder['id']);
                }
            }

            $result = array(
                "children"  =>  $folders
            );

            return $this->sendResponse($result, 'Data Found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    // Get Parent Wise Node Folder List
    private function __getParentWiseNodeFolder($id)
    {
        try {
            $folders = ContentFolder::where('company_id', auth()->user()->company_id)
                ->where('pid', $id)
                ->orderBy('isLeaf')
                // ->orderBy('folder_id', 'ASC')
                // ->orderBy('name', 'desc')
                ->get();

            foreach ($folders as $key => $folder) {
                $has_child = ContentFolder::where('pid', $folder['id'])->count();

                if ($has_child) {
                    $folders[$key]['children'] = $this->__getParentWiseNodeFolder($folder['id']);
                } else {
                    continue;
                }
            }
            return $folders;
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    // Get All Media Files
    public function getAllMediaFiles() {
        try {
            $result = ContentFolder::where('company_id', auth()->user()->company_id)
                    ->where('isLeaf', 1)
                    ->whereNotNull('media_file_id')
                    ->orderBy('isLeaf')
                    // ->orderBy('folder_id', 'ASC')
                    // ->orderBy('name', 'desc')
                    ->get();

            return $this->sendResponse($result, 'All Media Files', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    // Get All Folders
    public function getAllFolders() {
        try {
            $result = ContentFolder::where('company_id', auth()->user()->company_id)
                    ->where('isLeaf', 0)
                    ->where('media_file_id', 0)
                    ->get();

            return $this->sendResponse($result, 'All Folders', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    // Single Folder Info
    public function getSingleFolder($id)
    {
        try {
            $result = ContentFolder::where('company_id', auth()->user()->company_id)
                ->where('id', $id)
                ->first();
            return $this->sendResponse($result, 'Single Folder Info.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    // Delete Folder with child folder and files
    public function deleteFolder($id)
    {
        $rootFolder = ContentFolder::where('company_id', auth()->user()->company_id)
                ->where('pid', 0)
                ->first();

        $this->rootFolderId = $rootFolder->id;

        try {
            $folders = ContentFolder::where('company_id', auth()->user()->company_id)
                ->where('pid', $id)
                ->get();

            foreach ($folders as $folder) {
                ContentFolder::where('company_id', auth()->user()->company_id)
                                ->where('id', $folder['id'])
                                ->update(['pid' => $this->rootFolderId]);
            }
            ContentFolder::where('company_id', auth()->user()->company_id)
                            ->where('id', $id)
                            ->delete();

            return $this->sendResponse('', 'Folder Deleted successfully.', 200);

        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    // Edit Folder
    public function editFolder(Request $request)
    {
        try {
            $postData = $request->all();

            $newFolderName = $this->__getEditFolderName($postData);

            $folder = ContentFolder::where('id', $request['id'])->first();

            $folder->name  = $newFolderName;
            $result = $folder->save();
            $result =  $this->getRootNodeFolder();
            return $this->sendResponse($result, 'Folder Edit successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    // Get Edit Folder Name List
    private function __getEditFolderName($request)
    {
        try {
            $singleFolder = ContentFolder::where('id', $request['id'])->first();

            $folders = ContentFolder::where('company_id', auth()->user()->company_id)
                ->where('pid', $singleFolder['pid'])
                ->pluck('name')
                ->toArray();

            return $this->__checkTree($folders, $request['new_name']);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    // Drag And Drop Folder
    public function dragAndDropFolder(Request $request)
    {
        try {

            $folderList = ContentFolder::where('company_id', auth()->user()->company_id)
                ->where('pid', $request['target_id'])
                ->pluck('name')
                ->toArray();

            $folder = ContentFolder::where('id', $request['node_id'])->first();

            $folderName = $this->__checkTree($folderList, $folder->name);

            $folder->pid  = $request['target_id'];
            $folder->name = $folderName;
            $result = $folder->save();
            return $this->sendResponse($result, 'Folder/File location change successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    //Folder Wise Media Files onClick
    public function folderWiseMedia(Request $request)
    {
        try {
            $result = ContentFolder::where('company_id', auth()->user()->company_id)
                ->where('pid', $request->id)
                ->where('isLeaf', 1)
                ->whereNotNull('media_file_id')
                ->orderByDESC('name')
                ->get();

            // $result = $result->map(function ($item) {
            //     return [
            //         "id"  =>  $item->id,
            //         "name"  =>  $item->name,
            //         "media_file_id"  =>  $item->media_file_id,
            //         "media_type"     =>  $item->media_type,
            //     ];
            // });

            // dd($result);

            return $this->sendResponse($result, 'Media file load.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


    // Get Breadcrumb List
    public function getBreadcrumb($id)
    {
        $folderList =  $this->__getBreadcrumbList($id);

        $result = ContentFolder::where('company_id', auth()->user()->company_id)
            ->where('isLeaf', 0)
            ->whereIn('id', $folderList)
            ->get();

        $result = $result->toArray();
        return $result;
    }

    // Get Breadcrumb List Recursion
    private function __getBreadcrumbList($pid, &$parents = [])
    {
        if (empty($pid)) {
            return [];
        }

        $parents[] = $pid;

        $parent_category = ContentFolder::find($pid);

        if (!empty($parent_category->pid)) {
            $this->__getBreadcrumbList($parent_category->pid, $parents);
        }
        return $parents;
    }

    public function updateFileFolder(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'media_file_id' => 'required',
            'folder_id' => 'required'
        ]);

        if ($validator->fails()) {
            $error  = $validator->errors()->first();
            return $this->sendError('FIELDS_VALIDATION_ERROR', $error, Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        if ($request->is_leaf) {
            $content = ContentFolder::where('id', $request->folder_id)->first();
            if (!$content) return $this->sendResponse('', 'Not Found', 404);
            $update = ContentFolder::where('media_file_id', $request->media_file_id)->first();
            $update->pid = $content->pid;
            $update->save();
            return $this->sendResponse('', 'File moved successfully', 200);
        }

        $content = ContentFolder::where('media_file_id', $request->media_file_id)->first();
        if ($request->folder_id == $content->pid) {
            return $this->sendResponse('', 'In same directory', 200);
        }
        $content->pid = $request->folder_id;
        $content->save();

        return $this->sendResponse($content, 'File moved successfully', 200);
    }
}
