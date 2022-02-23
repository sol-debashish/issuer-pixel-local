<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Basement;
use App\Models\Deck;
use App\Models\Echelon;
use App\Models\Floor;
use App\Models\Group;
use App\Models\Industry;
use App\Models\Layer;
use App\Models\Mine;
use App\Models\NodeBackup;
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
use App\Traits\NodeMap;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Spatie\DbDumper\Databases\MySql;
use Validator;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Spatie\DbDumper\Compressors\GzipCompressor;

class SnapshotController extends Controller
{
    use NodeMap;

    private $s3_env;

    public function __construct()
    {
        $this->s3_env = config('filesystems.disks.s3.s3_env');
    }    

    public function index(){

        $files = collect(Storage::disk('local')->listContents('node_backup', true));
        return view('admin.snapshot.index', compact('files'));
    }

    /****************************************
     * WILL BE REQUIRED IN FUTURE
     * FOR SHOWING DATA FROM S3 ONLY
    ****************************************/
    // public function index(){

    //     $files  = Storage::disk('s3')->listContents("{$this->s3_env}/node_backup", true);

    //     foreach($files as &$file) {
    //         $file['url'] = Storage::disk('s3')->url("{$this->s3_env}/node_backup/{$file['filename']}.gz");
    //     }

    //     $files = collect($files);
    //     return view('admin.snapshot.index', compact('files'));
    // }

    public function download($filename, $extension){

        if($extension == 'sql') {
            $file = storage_path('app/node_backup/' . $filename. '.sql');
            $headers = array(
                'Content-Type'        => 'text/sql',
                'Cache-Control'       => 'must-revalidate, post-check=0, pre-check=0',
                'Content-Disposition' => 'attachment; filename='. $filename .'.sql',
                'Expires'             => '0',
                'Pragma'              => 'public',
            );

            $response = new StreamedResponse(function() use ($file){
                echo file_get_contents($file);
            }, 200, $headers);

            return $response->send();
        } else {
            return Storage::disk('s3')->download("{$this->s3_env}/node_backup/{$filename}.gz");
        }
    }

    public function restore(){
        $filename = request()->file_name;

        DB::beginTransaction();
        try{
            $s3_exists      = Storage::disk('s3')->exists("{$this->s3_env}/node_backup/{$filename}.gz");
            $local_exists   = file_exists(storage_path("app/node_backup/{$filename}.sql"));

            if($s3_exists) {
                $file_path  = 'compress.zlib://' . Storage::disk('s3')->url("{$this->s3_env}/node_backup/{$filename}.gz");
            }

            if($local_exists) {
                $file_path  = storage_path("app/node_backup/{$filename}.sql");
            }
            if($s3_exists || $local_exists){

                DB::unprepared("SET FOREIGN_KEY_CHECKS=OFF;");

                foreach($this->nodeMap as $node)
                {
                    DB::table($node['table'])->truncate();
                }
                DB::unprepared(file_get_contents($file_path));

                /* tracking restore manual db snapshoot */
                $user = auth()->user();
                activity()
                    ->useLog('Load snapshot')
                    ->performedOn($user)
                    ->causedBy($user)
                    ->log($user->name . " Load full db snapshot");
                /*end restore tracking manual db snapshoot */
            }
            $data['msg'] = 'successfully stored!';
            $data['status'] = 'success';
            DB::commit();
        }
        catch (QueryException $qe)
        {
            DB::rollBack();
            $data['msg'] = "Operation Failed!";
            $data['status'] = 'error';
            logError($qe);
        }
        catch (\Exception $e)
        {
            DB::rollBack();
            $data['msg'] = "Operation Failed!";
            $data['status'] = 'error';
            logError($e);
        }
        return response()->json($data);
    }

    /****************************************
     * OLD METHOD - REQUIRED FOR GENERATING
     * REGULAR SQL FILES
    ****************************************/
    // public function storeManualSnapshot(){

    //     $validator = Validator::make(request()->all(), [
    //         'industry_id' => 'required',
    //     ]);

    //     if ($validator->fails())
    //     {
    //         return response()->json(['status' => 'error', 'msg' => 'Node not found']);
    //     }

    //     // creates the  dir
    //     $path = storage_path("app/manual_node_backup");
    //     if (!file_exists($path)) {
    //         mkdir($path, 0777, true);
    //     }
    //     $file_name = 'backup_' . time() . '.sql';

    //     try{
    //         $industryId = request()->industry_id;
    //         $industry = Industry::findOrFail($industryId)->toArray();
    //         MySql::create()
    //             ->setDumpBinaryPath(config('database.connections.mysql.mysqldbdump_location'))
    //             ->setHost(config('database.connections.mysql.host'))
    //             ->setDbName(config('database.connections.mysql.database'))
    //             ->setUserName(config('database.connections.mysql.username'))
    //             ->setPassword( config('database.connections.mysql.password'))
    //             ->includeTables(['sectors', 'sub_sectors', 'groups', 'sub_groups', 'echelons', 'sub_echelons', 'tiers', 'sub_tiers', 'layers', 'sub_layers', 'decks', 'sub_decks', 'floors', 'sub_floors', 'basements', 'sub_basements', 'mines', 'sub_mines'])
    //             ->doNotCreateTables()
    //             ->addExtraOption('--where="industry_code='. $industry['code'] .'"')
    //             ->addExtraOption('--complete-insert')
    //             ->addExtraOption('--skip-triggers')
    //             ->setGtidPurged(config('database.connections.mysql.gtid_purge'))
    //             ->dumpToFile(storage_path("app/manual_node_backup/{$file_name}"));

    //         $file = File::get(storage_path("app/manual_node_backup/{$file_name}"));
    //         File::put(storage_path("app/manual_node_backup/{$file_name}"), $file);

    //         $nodeBackup = new NodeBackup();
    //         $nodeBackup->industry_id = $industry['id'];
    //         $nodeBackup->user_id = auth()->id();
    //         $nodeBackup->file_name = $file_name;
    //         $nodeBackup->industry_data = json_encode($industry);
    //         $nodeBackup->save();

    //         /* tracking manual db snapshoot */
    //         $user = auth()->user();
    //         activity()
    //             ->useLog('Save manual snapshot')
    //             ->performedOn($user)
    //             ->causedBy($user)
    //             ->log($user->name . " Save manual snapshot on '". $industry['description']."' industry");
    //         /*end tracking manual db snapshoot */

    //         $data['msg'] = 'successfully snapshot taken!';
    //         $data['status'] = 'success';
    //         DB::commit();
    //     }
    //     catch (\Exception $e)
    //     {
    //         $data['msg'] = "Operation Failed!";
    //         $data['status'] = 'error';
    //         logError($e);
    //     }
    //     return response()->json($data);

    // }

    public function storeManualSnapshot(){

        $validator = Validator::make(request()->all(), [
            'industry_id' => 'required',
        ]);

        if ($validator->fails())
        {
            return response()->json(['status' => 'error', 'msg' => 'Node not found']);
        }

        // creates the  dir
        $path = storage_path("app/manual_node_backup");
        if (!file_exists($path)) {
            mkdir($path, 0777, true);
        }
        $file_name = 'backup_' . time() . '.sql';

        try{
            $industryId = request()->industry_id;
            $industry = Industry::findOrFail($industryId)->toArray();
            MySql::create()
                ->setDumpBinaryPath(config('database.connections.mysql.mysqldbdump_location'))
                ->setHost(config('database.connections.mysql.host'))
                ->setDbName(config('database.connections.mysql.database'))
                ->setUserName(config('database.connections.mysql.username'))
                ->setPassword( config('database.connections.mysql.password'))
                ->includeTables(['sectors', 'sub_sectors', 'groups', 'sub_groups', 'echelons', 'sub_echelons', 'tiers', 'sub_tiers', 'layers', 'sub_layers', 'decks', 'sub_decks', 'floors', 'sub_floors', 'basements', 'sub_basements', 'mines', 'sub_mines'])
                ->doNotCreateTables()
                ->addExtraOption('--where="industry_code='. $industry['code'] .'"')
                ->addExtraOption('--complete-insert')
                ->addExtraOption('--skip-triggers')
                ->setGtidPurged(config('database.connections.mysql.gtid_purge'))
                ->useCompressor(new GzipCompressor())
                ->dumpToFile(storage_path("app/manual_node_backup/{$file_name}.gz"));

            Storage::disk('s3')->putFileAs(
                "{$this->s3_env}/manual_node_backup",
                storage_path("app/manual_node_backup/{$file_name}.gz"),
                "{$file_name}.gz",
                'public'
            );

            $nodeBackup = new NodeBackup();
            $nodeBackup->industry_id = $industry['id'];
            $nodeBackup->user_id = auth()->id();
            $nodeBackup->file_name = $file_name;
            $nodeBackup->industry_data = json_encode($industry);
            $nodeBackup->save();

            /* tracking manual db snapshoot */
            $user = auth()->user();
            activity()
                ->useLog('Save manual snapshot')
                ->performedOn($user)
                ->causedBy($user)
                ->log($user->name . " Save manual snapshot on '". $industry['description']."' industry");
            /*end tracking manual db snapshoot */

            $data['msg'] = 'successfully snapshot taken!';
            $data['status'] = 'success';
            DB::commit();
        }
        catch (\Exception $e)
        {
            $data['msg'] = "Operation Failed!";
            $data['status'] = 'error';
            logError($e);
        }
        return response()->json($data);

    }

    public function getManualSnapshot(){
        $validator = Validator::make(request()->all(), [
            'industry_id' => 'required',
        ]);

        if ($validator->fails())
        {
            return response()->json(['status' => 'error', 'msg' => 'Node not found']);
        }
        $industry = Industry::findOrFail(request()->industry_id);
        $backupData = NodeBackup::whereIndustryId($industry->id)->get();
        return view('admin.snapshot.list', compact('backupData'))->render();
    }

    public function restoreManualSnapshot(){
        $validator = Validator::make(request()->all(), [
            'backup_id' => 'required',
        ]);

        if ($validator->fails()){
            return response()->json(['status' => 'error', 'msg' => 'Node backup not found']);
        }
        $record = NodeBackup::find(request()->backup_id);
        if(null == $record){
            return response()->json(['status' => 'error', 'msg' => 'Node backup not found']);
        }

        $industry = Industry::findOrFail($record->industry_id);
        DB::beginTransaction();
        $indstryCreateData = json_decode($record->industry_data, true);

        $s3_exists      = Storage::disk('s3')->exists("{$this->s3_env}/manual_node_backup/{$record->file_name}.gz");
        $local_exists   = file_exists(storage_path("app/manual_node_backup/{$record->file_name}"));

        if($s3_exists) {
            $file_path  = 'compress.zlib://' . Storage::disk('s3')->url("{$this->s3_env}/manual_node_backup/{$record->file_name}.gz");
        }

        if($local_exists) {
            $file_path  = storage_path("app/manual_node_backup/{$record->file_name}");
        }

        try{
            if($s3_exists || $local_exists){

                DB::unprepared("SET FOREIGN_KEY_CHECKS=OFF;");
                foreach($this->nodeMap as $node)
                {
                    if('industries' == $node['table'])
                        continue;
                    DB::table($node['table'])->where('industry_code', $industry->code)->delete();
                }
                DB::table('industries')->where('id', $industry->id)->delete();

                if(null != $indstryCreateData){
                    $newIndustry = new Industry();
                    foreach($indstryCreateData as $key => $value){
                        $newIndustry->{$key} = $value;
                    }
                    $newIndustry->save();
                }

                DB::unprepared(file_get_contents($file_path));

                /* tracking restore manual db snapshoot */
                $user = auth()->user();
                activity()
                    ->useLog('Load manual snapshot')
                    ->performedOn($user)
                    ->causedBy($user)
                    ->log($user->name . " Load manual snapshot on '". $industry['description']."' industry");
                /*end restore tracking manual db snapshoot */
            }
            $data['msg'] = 'successfully restored!';
            $data['status'] = 'success';
            DB::commit();
        }
        catch (QueryException $qe)
        {
            DB::rollBack();
            $data['msg'] = "Operation Failed!";
            $data['status'] = 'error';
            logError($qe);
        }
        catch (\Exception $e)
        {
            DB::rollBack();
            $data['msg'] = "Operation Failed!";
            $data['status'] = 'error';
            logError($e);
        }
        return response()->json($data);

    }

    public function deleteManualSnapshot(){
        $validator = Validator::make(request()->all(), [
            'backup_id' => 'required',
        ]);

        if ($validator->fails()){
            return response()->json(['status' => 'error', 'msg' => 'Node backup not found']);
        }
        $record = NodeBackup::find(request()->backup_id);
        if(null == $record){
            return response()->json(['status' => 'error', 'msg' => 'Node backup not found']);
        }

        $s3_exists      = Storage::disk('s3')->exists("{$this->s3_env}/manual_node_backup/{$record->file_name}.gz");
        $local_exists   = file_exists(storage_path("app/manual_node_backup/{$record->file_name}"));

        if($s3_exists) {
            $disk       = 's3';
            $file_path  = "{$this->s3_env}/manual_node_backup/{$record->file_name}.gz";
        }

        if($local_exists) {
            $disk       = 'local';
            $file_path  = "manual_node_backup/{$record->file_name}";
        }

        try{
            if($s3_exists || $local_exists){
                Storage::disk($disk)->delete($file_path);

                if(file_exists(storage_path("app/manual_node_backup/{$record->file_name}.gz")))
                    Storage::disk('local')->delete("manual_node_backup/{$record->file_name}.gz");
            }

            $record->delete();
            $data['msg'] = 'successfully deleted!';
            $data['status'] = 'success';
        }
        catch (QueryException $qe)
        {
            $data['msg'] = "Operation Failed!";
            $data['status'] = 'error';
            logError($qe);
        }
        catch (\Exception $e)
        {
            $data['msg'] = "Operation Failed!";
            $data['status'] = 'error';
            logError($e);
        }
        return response()->json($data);

    }
}
