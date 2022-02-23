<?php

namespace App\Http\Controllers;

use App\Models\CategorizationLevel;
use App\Models\Company;
use App\Models\CompanyCategorizationLookup;
use App\Models\ContentFolder;
use App\Models\Echelon;
use App\Models\Group;
use App\Models\Industry;
use App\Models\MediaCategorizationLookup;
use App\Models\MediaFile;
use App\Models\Sector;
use App\Models\SubEchelon;
use App\Models\SubGroup;
use App\Models\SubSector;
use App\Models\SubTier;
use App\Models\Tier;
use App\Models\Video;
use App\Traits\Media;
use App\Traits\NodeMap;
use Carbon\Carbon;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Spatie\DbDumper\Compressors\GzipCompressor;
use Spatie\DbDumper\Databases\MySql;
use VzaarApi;
use App\Models\NodeBackup;

class CronController extends Controller
{
    use NodeMap;
    use Media;
    public function dailyBackup(){

        $nodes = $this->nodeMap;
        foreach($nodes as $node)
        {
            $table[] = $node['table'];
        }

        $file_name = 'backup_node_' . time();

        /*delete all after last 10 files*/
        collect(Storage::disk('local')->listContents('node_backup', true))
            ->each(function($file) {
                if ($file['type'] == 'file' && $file['timestamp'] < now()->subDays(9)->getTimestamp()) {
                    Storage::disk('local')->delete($file['path']);
                }
            });

        File::put(storage_path("app/node_backup/{$file_name}.sql"), '');
        MySql::create()
            ->setHost(config('database.connections.mysql.host'))
            ->setDbName(config('database.connections.mysql.database'))
            ->setUserName(config('database.connections.mysql.username'))
            ->setPassword( config('database.connections.mysql.password'))
            ->includeTables($table)
            ->doNotCreateTables()
            ->setGtidPurged(config('database.connections.mysql.gtid_purge'))
            ->addExtraOption('--complete-insert')
            ->addExtraOption('--skip-triggers')
            ->dumpToFile(storage_path("app/node_backup/{$file_name}.sql"));

        $file = File::get(storage_path("app/node_backup/{$file_name}.sql"));
        File::put(storage_path("app/node_backup/{$file_name}.sql"), $file);

    }

    public function weeklyBackup(){
        $date = Carbon::now()->format('Y-m-d_h-i');

        /*delete all after last 10 files*/
        collect(Storage::disk('local')->listContents('weekly_db_backup', true))
            ->each(function($file) {
                if ($file['type'] == 'file' && $file['timestamp'] < now()->subDays(30)->getTimestamp()) {
                    Storage::disk('local')->delete($file['path']);
                }
            });

        File::put(storage_path("app/weekly_db_backup/{$date}.sql.gz"), '');
        MySql::create()
            ->setHost(config('database.connections.mysql.host'))
            ->setDbName(config('database.connections.mysql.database'))
            ->setUserName(config('database.connections.mysql.username'))
            ->setPassword( config('database.connections.mysql.password'))
            ->setGtidPurged(config('database.connections.mysql.gtid_purge'))
            ->useCompressor(new GzipCompressor())
            ->dumpToFile(storage_path("app/weekly_db_backup/{$date}.sql.gz"));
    }

    public function deleteUnprocessedVideo(){
        collect(Storage::disk('local')->listContents('chunks', true))
            ->each(function($file) {
                if ($file['type'] == 'file' && $file['timestamp'] < now()->subDays(1)->getTimestamp()) {
                    Storage::disk('local')->delete($file['path']);
                }
            });
    }

//    public function checkDacastVideoStatus()
//    {
//        VzaarApi\Client::$client_id  = config('services.dacast.client_id');
//        VzaarApi\Client::$auth_token = config('services.dacast.auth_token');
//        $videoList = Video::where('is_ready', 0 )->whereNotNull('video_id')->get();
//        foreach($videoList as $video){
//            $dacastVideo = VzaarApi\Video::find($video->video_id);
//            if('ready' == $dacastVideo->state)
//            {
//                $video->is_ready = 1;
//                $video->save();
//                $video->mediaFile->status = 2;
//                $video->mediaFile->save();
//            }
//        }
//        exit();
//
//    }
//    public function updateMediaCategorizationLookupData()
//    {
//        $categorizationLevelArray = CategorizationLevel::pluck('name', 'id')->toArray();
//        $allData = MediaCategorizationLookup::all();
//        foreach($allData as $data){
//            $modelItem = $categorizationLevelArray[$data->categorization_level_id];
//            $NodeNamespace = "App\\Models\\" . $modelItem;
//            $itemData = $NodeNamespace::find($data->node_id);
//            $data->node_name = $itemData->description;
//            $data->save();
//        }
//    }

//    public function updateMediaFileUuid()
//    {
//        $mediaFiles = MediaFile::whereNull('uuid')->get();
//        foreach($mediaFiles as $mediaFile){
//            $mediaFile->uuid = $this->getMediaUUID($mediaFile->id);
//            $mediaFile->save();
//        }
//    }

//    public function updateMediaSubjectTypeData()
//    {
//        $mediaFiles = MediaFile::get();
//        foreach($mediaFiles as $mediaFile){
//            $mediaFile->subjectType()->attach([$mediaFile->subject_type_id], ['company_id' => $mediaFile->company_id]);
//        }
//    }

//    public function updateMediaPresenterData()
//    {
//        $mediaFiles = MediaFile::get();
//        foreach($mediaFiles as $mediaFile){
//            $mediaFile->mediaPresenter()->attach([$mediaFile->presenter_type_id], ['company_id' => $mediaFile->company_id]);
//        }
//    }
//    public function updateCompanyUuid()
//    {
//        $companies = Company::whereNull('uuid')->get();
//        foreach($companies as $company){
//            $company->uuid = $this->getMediaUUID($company->id);
//            $company->save();
//        }
//    }
    public function updateMediaNodeCode()
    {

        $categorization = [
            1 => 'industries_view',
            2 => 'sectors_view',
            3 => 'sub_sectors_view',
            4 => 'groups_view',
            5 => 'sub_groups_view',
            6 => 'echelons_view',
            7 => 'sub_echelons_view',
            8 => 'tiers_view',
            9 => 'sub_tiers_view',
            10 => 'layers_view',
            11 => 'sub_layers_view',
            12 => 'decks_view',
            13 => 'sub_decks_view',
            14 => 'floors_view',
            15 => 'sub_floors_view',
            16 => 'basements_view',
            17 => 'sub_basements_view',
            18 => 'mines_view',
            19 => 'sub_mines_view',
        ];
        $mcl = MediaCategorizationLookup::whereNull('node_code')->get();
        foreach($mcl as $media){
            $nodeData = \DB::table($categorization[$media->categorization_level_id])->find($media->node_id);
            $media->node_code = $nodeData->code;
            $media->save();
        }
    }
    public function updateCompanyNodeCode()
    {

        $categorization = [
            1 => 'industries_view',
            2 => 'sectors_view',
            3 => 'sub_sectors_view',
            4 => 'groups_view',
            5 => 'sub_groups_view',
            6 => 'echelons_view',
            7 => 'sub_echelons_view',
            8 => 'tiers_view',
            9 => 'sub_tiers_view',
            10 => 'layers_view',
            11 => 'sub_layers_view',
            12 => 'decks_view',
            13 => 'sub_decks_view',
            14 => 'floors_view',
            15 => 'sub_floors_view',
            16 => 'basements_view',
            17 => 'sub_basements_view',
            18 => 'mines_view',
            19 => 'sub_mines_view',
        ];
        $mcl = CompanyCategorizationLookup::whereNull('node_code')->get();
        foreach($mcl as $media){
            $nodeData = \DB::table($categorization[$media->categorization_level_id])->find($media->node_id);
            $media->node_code = $nodeData->code;
            $media->save();
        }
    }

    function s3Tests() {
        echo '<pre>';
        print_r(Storage::disk('s3')->files('local/node_backup'));
        print_r(Storage::disk('s3')->files('local/weekly_db_backup'));
        print_r(Storage::disk('s3')->files('local/manual_node_backup'));
        return;
    }
    public function updateCompanySlugName()
    {
        $companies = Company::whereNull('slug_name')->get();
        foreach($companies as $company){
            $company->slug_name = Str::slug($company->name);
            $company->save();
        }
    }

    public function updateCompanyFolder()
    {
        $companies = Company::get();
        $data = [];
        foreach($companies as $key => $company){
            $data[$key]['company_id'] = $company->id;
            $data[$key]['pid'] = 0;
            $data[$key]['id'] = $company->id.random_int(1000000000, 9999999999);
            $data[$key]['name'] = 'Issuer Pixel';
            $data[$key]['folder_layer'] = 0;
            $data[$key]['isLeaf'] = 0;
            $data[$key]['delNodeDisabled'] = 1;
            $data[$key]['addLeafNodeDisabled'] = 1;
            $data[$key]['editNodeDisabled'] = 0;
            $data[$key]['created_at'] = Carbon::now();
            $data[$key]['updated_at'] =  Carbon::now();
        }
        $insert_data = collect($data);
        $chunks = $insert_data->chunk(1000);
        foreach ($chunks as $chunk) {
            ContentFolder::insert($chunk->toArray());
        }
    }

    public function addMediaFileToContentFolder()
    {
        $contentFolder = ContentFolder::all();

        foreach($contentFolder as $content){
            $mfs = MediaFile::whereCompanyId($content->company_id)->get();
            $i = 0;
            $data = [];
            foreach($mfs as  $mf)
            {
                $data[$i]['company_id'] = $content->company_id;
                $data[$i]['pid'] = $content->id;
                $data[$i]['id'] = $content->company_id.random_int(1000000000, 9999999999);
                $data[$i]['name'] = $mf->name ?? "Unnamed";
                $data[$i]['folder_layer'] = 0;
                $data[$i]['isLeaf'] = 1;
                $data[$i]['delNodeDisabled'] = 1;
                $data[$i]['addLeafNodeDisabled'] = 1;
                $data[$i]['editNodeDisabled'] = 1;
                $data[$i]['media_type'] = $mf->media_type;
                $data[$i]['media_file_id'] = $mf->id;
                $data[$i]['created_at'] = Carbon::now();
                $data[$i]['updated_at'] =  Carbon::now();
                $i++;
            }
            $insert_data = collect($data);
            $chunks = $insert_data->chunk(1000);
            foreach ($chunks as $chunk) {
                ContentFolder::insert($chunk->toArray());
            }
        }
        exit('added successfully');
    }
}
