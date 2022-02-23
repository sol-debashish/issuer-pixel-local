<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Jobs\UploadVideoToDacast;
use App\Jobs\UploadVideoToS3;
use App\Jobs\UploadVideoToYoutube;
use App\Models\Video;

use App\Traits\UploadTrait;

use Google_Client;
use Google_Service_YouTube;
use Google_Service_YouTubeAnalytics;
use Illuminate\Support\Facades\DB;
use Youtube;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use File;
use Validator;

use Pion\Laravel\ChunkUpload\Exceptions\UploadMissingFileException;
use Pion\Laravel\ChunkUpload\Handler\AbstractHandler;
use Pion\Laravel\ChunkUpload\Handler\HandlerFactory;
use Pion\Laravel\ChunkUpload\Receiver\FileReceiver;


use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;

class VideoController extends Controller
{
    use UploadTrait;
    private $videoFolder;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct() {
        $this->videoFolder = config('filesystems.disks.s3.s3_env') . '/video/';
    }
    public function index()
    {
        return view('front.video');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('front.advance_video_upload');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
        $file = $request->file('file');

        $path = Storage::disk('local')->path("chunks/{$file->getClientOriginalName()}");
        File::append($path, $file->get());

        if ($request->has('is_last') && $request->boolean('is_last')) {

            $fileName = basename($file->getClientOriginalName(), '.part');
            $title = $request->title ?? substr($fileName, 0, strrpos($fileName, "."));
            $video  = new Video();
            $video->user_id = 1;
            $video->title = $title;
            $video->file_name = Str::random(12).'.'. pathinfo($fileName, PATHINFO_EXTENSION);
            $video->temp_path = $path;
            $video->status = '1';
            $video->save();
            $this->dispatch(new UploadVideoToS3($video, $this->videoFolder));
            $this->dispatch(new UploadVideoToYoutube($video));
//            $this->dispatch(new UploadVideoToDacast($video));
        }
        return response()->json(['uploaded' => true]);
    }

    public function advanceStore(Request $request) {
        // create the file receiver
        $receiver = new FileReceiver("file", $request, HandlerFactory::classFromRequest($request));
        // check if the upload is success, throw exception or return response you need
        if ($receiver->isUploaded() === false) {
            throw new UploadMissingFileException();
        }
        // receive the file
        $save = $receiver->receive();
        // check if the upload has finished (in chunk mode it will send smaller files)
        if ($save->isFinished()) {
            // save the file and return any response you need, current example uses `move` function. If you are
            // not using move, you need to manually delete the file by unlink($save->getFile()->getPathname())
            //return $this->saveFile($save->getFile());

            $fileName = $this->createFilename($save->getFile());
            $title = $request->title ?? substr($fileName, 0, strrpos($fileName, "."));
            $video  = new Video();
            $video->user_id = 1;
            $video->title = $title;
            $video->file_name = $fileName;
            $video->linking_file_name = uniqid();
            $video->temp_path = $save->getFile()->getRealPath();
            $video->save();
            $this->dispatch(new UploadVideoToS3($video, $this->videoFolder));
//            $this->dispatch(new UploadVideoToYoutube($video));
            $this->dispatch(new UploadVideoToDacast($video));
        }
        // we are in chunk mode, lets send the current progress
        /** @var AbstractHandler $handler */
        $handler = $save->handler();
        return response()->json([
            "done" => $handler->getPercentageDone(),
            'status' => true
        ]);
    }
    protected function saveFileToS3($file)
    {
        $fileName = $this->createFilename($file);
        $disk = Storage::disk('s3');
        // It's better to use streaming Streaming (laravel 5.4+)
        $disk->putFileAs('photos', $file, $fileName);
        // for older laravel
        // $disk->put($fileName, file_get_contents($file), 'public');
        $mime = str_replace('/', '-', $file->getMimeType());
        // We need to delete the file when uploaded to s3
        unlink($file->getPathname());
        return response()->json([
            'path' => $disk->url($fileName),
            'name' => $fileName,
            'mime_type' =>$mime
        ]);
    }

    protected function saveFile(UploadedFile $file)
    {
        $fileName = $this->createFilename($file);
        // Group files by mime type
        $mime = str_replace('/', '-', $file->getMimeType());
        // Group files by the date (week
        $dateFolder = date("Y-m-W");
        // Build the file path
        $filePath = "local/{$mime}/{$dateFolder}/";
        $finalPath = storage_path("app/".$filePath);
        // move the file name
        $file->move($finalPath, $fileName);
        return response()->json([
            'path' => $filePath,
            'name' => $fileName,
            'mime_type' => $mime
        ]);
    }
    /**
     * Create unique filename for uploaded file
     * @param UploadedFile $file
     * @return string
     */
    protected function createFilename(UploadedFile $file)
    {
        $extension = $file->getClientOriginalExtension();
        $filename = str_replace(".".$extension, "", $file->getClientOriginalName()); // Filename without extension
        // Add timestamp hash to name of the file
        $filename .= "_" . md5(time()) . "." . $extension;
        return $filename;
    }

    public function getDecast()
    {
//        GET /v2/analytics/vod/bytesperperiod?apikey=181861_206d752db62d7e90973c&_format=JSON&startdate=2021-01-01&enddate=2021-02-05
        try {
            $apiKey = "182258_4032628b3119364d33ed";
            $tokenUrl = 'https://developer.dacast.com/v2/analytics/vod/visitorspercountry';

            $tokenClient = new Client([
                'query'    => ['apikey' => $apiKey, 'startdate' => '2021-01-01', 'enddate' => '2021-02-05']
            ]);

            $response = $tokenClient->request('GET', $tokenUrl);
            $data = json_decode($response->getBody(),true);
            echo '<pre>';
            print_r($data);
            echo '</pre>';
            exit();


            $vodList = Video::wherePlatform('dacast')->where('is_ready',1)->get();

//            $vodList = [
//                "totalCount" => "1",
//                "data" => [
//                    0 => [
//                      "abitrate" => 96000,
//                      "acodec" => "AAC LC",
//                      "ads" => null,
//                      "associated_packages" => "",
//                      "category_id" => 20,
//                      "container" => "MPEG-4",
//                      "countries_id" => 0,
//                      "creation_date" => "2021-01-25 04:17:25",
//                      "custom_data" => null,
//                      "noframe_security" => 0,
//                      "description" => "",
//                      "disk_usage" => "552999",
//                      "duration" => "00:00:17",
//                      "autoplay" => true,
//                      "enable_coupon" => false,
//                      "online" => true,
//                      "enable_payperview" => false,
//                      "publish_on_dacast" => true,
//                      "enable_subscription" => false,
//                      "external_video_page" => "http://",
//                      "filename" => "181861_1015668.raw",
//                      "filesize" => 552999,
//                      "google_analytics" => 0,
//                      "group_id" => 0,
//                      "hds" => "https://dacasts3-vh.akamaihd.net",
//                      "hls" => "//dacasts3-vh.akamaihd.net",
//                      "id" => 1015668,
//                      "is_secured" => true,
//                      "original_id" => 1015668,
//                      "password" => null,
//                      "pictures" => [
//                          'thumbnail' => [
//                              0 => "https://images.dacast.com/181861/tf-1015668-1.png?1611550580",
//                              1 => "https://images.dacast.com/181861/tf-1015668-2.png?1611550580",
//                              2 => "https://images.dacast.com/181861/tf-1015668-3.png?1611550580",
//                              3 => "https://images.dacast.com/181861/tf-1015668-4.png?1611550580"
//                          ],
//                          'splashscreen' => [
//                              0 => "https://images.dacast.com/181861/sf-1015668-1.png?1611550580",
//                              1 => "https://images.dacast.com/181861/sf-1015668-2.png?1611550580",
//                              2 => "https://images.dacast.com/181861/sf-1015668-3.png?1611550580",
//                              3 => "https://images.dacast.com/181861/sf-1015668-4.png?1611550580"
//                          ]
//                      ],
//                      "player_height" => 431,
//                      "player_width" => 590,
//                      "player_size_id" => 10,
//                      "referers_id" => 0,
//                      "save_date" => "2021-01-25 04:17:25",
//                      "share_code" => [
//                          "facebook" => "https://iframe.dacast.com/b/181861/f/1015668",
//                        "twitter" => "https://iframe.dacast.com/b/181861/f/1015668",
//                        "gplus" => "https://iframe.dacast.com/b/181861/f/1015668"
//                      ],
//                      "splashscreen_id" => 1,
//                      "streamable" => 2,
//                      "subtitles" => null,
//                      "template_id" => 0,
//                      "theme_id" => 1,
//                      "thumbnail_id" => 1,
//                      "title" => "issuer pixel to dacast",
//                      "vbitrate" => 161786,
//                      "vcodec" => "AVC",
//                      "video_height" => 360,
//                      "video_width" => 480,
//                ]],
//                "paging" => [
//                    "self" => "/v2/vod?page=1&perpage=25",
//                    "last" => "/v2/vod?page=1&perpage=25",
//                    "next" => null,
//                    "previous" => null
//                ],
//
//            ];

        } catch (ClientException $e) {
            echo '<pre>';
            print_r($e->getMessage());
            echo '</pre>';
            exit();

        }
        return view('front.watch_now', compact('vodList'));
    }

    public function getYoutubeVideo()
    {
        $DEVELOPER_KEY = "AIzaSyA6E11FNbI2IvDpqmVDdNyOvnSW9530BXE";
        $API_URL = "https://www.googleapis.com/youtube/v3/videos?";
        $vId = [
            'a5pr2izDEB4',
            'J_SHNX2cAIU',
            'XpfN6V8bHCY',
        ];
        $part = ['statistics'];
        $end_date = '2020-09-01';
        $start_date = '2020-09-01';
        $params = [
            'id' => is_array($vId) ? implode(',', $vId) : $vId,
            'key' => $DEVELOPER_KEY,
            'part' => implode(',', $part),
            'alt' => 'json',
            'startDate' => $start_date,
            'endDate' => $end_date,
        ];
        $url = $API_URL . http_build_query($params);
        $apiData = file_get_contents("$url");


        if (is_array($vId)) {
            $staticsticsData =  $this->decodeMultiple($apiData);
        }
        else{
            $staticsticsData = $this->decodeSingle($apiData);
        }

        echo '<pre>';
        print_r($staticsticsData);
        echo '</pre>';
        exit();

        foreach($staticsticsData as $statistics){
            echo "video id: $statistics->id, Total View: {$statistics->statistics->viewCount}<br>";
        }
        exit;

        ///////////////////////


        $client = new Google_Client();
        $client->setClientId(config()->get('youtube.client_id'));
        $client->setClientSecret(config()->get('youtube.client_secret'));
        $client->setScopes(config()->get('youtube.scopes'));
        $client->setAccessType('offline');
        $client->setApprovalPrompt('force');
        $client->setRedirectUri(url(
            config()->get('youtube.routes.prefix')
            . '/' .
            config()->get('youtube.routes.redirect_uri')
        ));

        $latest = DB::table('youtube_access_tokens')
            ->latest('created_at')
            ->first();
        $client->setAccessToken($latest->access_token);
        $client->addScope([
            Google_Service_YouTubeAnalytics::YOUTUBE
        ]);


        $analytics = new Google_Service_YouTubeAnalytics($client);
        $end_date = date('Y-m-d');
        $start_date = date('Y-m-d', strtotime('-7 days'));
        $metric = 'video,views,estimatedMinutesWatched,averageViewDuration,averageViewPercentage,subscribersGained';

        $response = $analytics->reports->query([
            'ids' => "channel==MINE",
            'startDate' => $start_date,
            'endDate' => $end_date,
            'metrics' => $metric,
            "dimensions" => "day",
            "sort" => "day"
        ]);


        dd($response, $response['rows']);
//
//        $youtube = new Google_Service_YouTube($client);
//
//
//        $channelsResponse = $youtube->channels->listChannels('contentDetails', array(
//            'mine' => 'true',
//        ));
//
//
//        $htmlBody = '';
//        foreach ($channelsResponse['items'] as $channel) {
//
//            // Extract the unique playlist ID that identifies the list of videos
//            // uploaded to the channel, and then call the playlistItems.list method
//            // to retrieve that list.
//            $uploadsListId = $channel['contentDetails']['relatedPlaylists']['uploads'];
//
//            $playlistItemsResponse = $youtube->playlistItems->listPlaylistItems('snippet', array(
//                'playlistId' => $uploadsListId,
//            ));
//
//            $htmlBody .= "<h3>Videos in list $uploadsListId</h3><ul>";
//            foreach ($playlistItemsResponse['items'] as $playlistItem) {
//
//                dd($playlistItem);
//
//                $htmlBody .= sprintf('<li>%s (%s)</li>', $playlistItem['snippet']['title'],
//                    $playlistItem['snippet']['resourceId']['videoId']);
//            }
//            $htmlBody .= '</ul>';
//        }
//        echo $htmlBody;

        /////////////////////////////////

//        $vodList = Video::wherePlatform('youtube')->where('is_ready',1)->get();
//        return view('front.youtube_video', compact('vodList'));
    }

    public function api_get($url, $params)
    {
        //set the youtube key
        $params['key'] = "AIzaSyA6E11FNbI2IvDpqmVDdNyOvnSW9530BXE";

        //boilerplates for CURL
        $tuCurl = curl_init();

        if (isset($_SERVER['HTTP_HOST'])) {
            curl_setopt($tuCurl, CURLOPT_HEADER, array('Referer' => $_SERVER['HTTP_HOST']));
        }

        curl_setopt($tuCurl, CURLOPT_URL, $url . (strpos($url, '?') === false ? '?' : '') . http_build_query($params));
        if (strpos($url, 'https') === false) {
            curl_setopt($tuCurl, CURLOPT_PORT, 80);
        } else {
            curl_setopt($tuCurl, CURLOPT_PORT, 443);
        }

        curl_setopt($tuCurl, CURLOPT_RETURNTRANSFER, 1);
        $tuData = curl_exec($tuCurl);
        if (curl_errno($tuCurl)) {
            throw new \Exception('Curl Error : ' . curl_error($tuCurl));
        }
        return $tuData;
    }

    public function decodeMultiple(&$apiData)
    {
        $resObj = json_decode($apiData);
        if (isset($resObj->error)) {
            $msg = "Error " . $resObj->error->code . " " . $resObj->error->message;
            if (isset($resObj->error->errors[0])) {
                $msg .= " : " . $resObj->error->errors[0]->reason;
            }

            throw new \Exception($msg);
        } else {
            $itemsArray = $resObj->items;
            if (!is_array($itemsArray)) {
                return false;
            } else {
                return $itemsArray;
            }
        }
    }

    public function decodeSingle(&$apiData)
    {
        $resObj = json_decode($apiData);
        if (isset($resObj->error)) {
            $msg = "Error " . $resObj->error->code . " " . $resObj->error->message;
            if (isset($resObj->error->errors[0])) {
                $msg .= " : " . $resObj->error->errors[0]->reason;
            }

            throw new \Exception($msg);
        } else {
            $itemsArray = $resObj->items;
            if (!is_array($itemsArray) || count($itemsArray) == 0) {
                return false;
            } else {
                return $itemsArray[0];
            }
        }
    }

    public function dacastUpload()
    {
        $path = Storage::disk('local')->path("chunks/");
        try {
            $apiKey = "181861_206d752db62d7e90973c";
            $tokenUrl = 'https://api.dacast.com/v2/vod';
            $uploadPath = 'http://upload.dacast.com';
            $fileName = 'test.mp4';
            $fileLocation = $path;

            $handle = fopen($fileLocation . $fileName, "r");
            $tokenFields = [
                "source" => $fileName,
                "callback_url" => 'https://issuerpixel.com/callback',
                "token_js" => true,
                "upload_type" => 'ajax_queue',
                "auto_encoding" => 0,
                "group_id" => 6422,
            ];

            $tokenClient = new Client([
                'base_uri' => 'https://api.dacast.com/v2/',
                'query'    => ['apikey' => $apiKey, "callback_url" => 'https://issuerpixel.com/callback']
            ]);

            $response = $tokenClient->request('POST', $tokenUrl, [
                'json' => $tokenFields
            ]);
            $uploadParams = json_decode($response->getBody(),true);

            $params = [
                "key" => $uploadParams['data']['key'],
                "acl" => "private",
                "success_action_status" => "201",
                "policy" => $uploadParams['data']['policy'],
                "X-amz-algorithm" => $uploadParams['data']['X-amz-algorithm'],
                "X-amz-credential" => $uploadParams['data']["X-amz-credential"],
                "x-amz-date" => $uploadParams['data']['x-amz-date'],
                "x-amz-expires" => $uploadParams['data']['x-amz-expires'],
                "X-amz-signature" => $uploadParams['data']['X-amz-signature']
            ];

            foreach($params as $key => $value) {
                $file[] = [
                    'name'      => $key,
                    'contents'  => $value
                ];
            }

            $file[] = [
                'name' => 'file',
                'filename' => $fileName,
                'contents' => $handle
            ];

            $uploadClient = new Client([]);
            $uploadClient->request('POST', $uploadPath, [
                'multipart' => $file
            ]);
        } catch (ClientException $e) {

        }
    }

    public function dacastSync(){
        $apiKey = config('services.dacast.key');
        $tokenUrl = config('services.dacast.url');

        $tokenClient = new Client([
            'base_uri' => 'https://api.dacast.com/v2/',
            'query'    => ['apikey' => $apiKey]
        ]);

        $response = $tokenClient->request('GET', $tokenUrl);
        $vodList = json_decode($response->getBody(),true);
        $dacastData =[];
        foreach($vodList['data'] as $dacast)
        {
            $dacastData[$dacast['title']] = $dacast['id'];
        }
        $vodeos = Video::wherePlatform('dacast')->where('is_ready',0)->get();
        foreach($vodeos as $video){
            if(isset($dacastData[$video->linking_file_name]))
            {
                $video->video_id = $dacastData[$video->linking_file_name];
                $video->is_ready = 1;
                $video->save();
            }
        }
    }

    public function youtubeViewDataSync(){
        $vId = Video::wherePlatform('youtube')->where('is_ready',1)->pluck('video_id', 'id')->toArray();
        $DEVELOPER_KEY = "AIzaSyA6E11FNbI2IvDpqmVDdNyOvnSW9530BXE";
        $API_URL = "https://www.googleapis.com/youtube/v3/videos?";
        $part = ['statistics'];
        $end_date = '2020-09-01';
        $start_date = '2020-09-01';
        $params = [
            'id' => is_array($vId) ? implode(',', $vId) : $vId,
            'key' => $DEVELOPER_KEY,
            'part' => implode(',', $part),
            'alt' => 'json',
            'startDate' => $start_date,
            'endDate' => $end_date,
        ];
        $url = $API_URL . http_build_query($params);
        $apiData = file_get_contents("$url");


        if (is_array($vId)) {
            $staticsticsData =  $this->decodeMultiple($apiData);
        }
        else{
            $staticsticsData = $this->decodeSingle($apiData);
        }

//        $result = [];
//        $i = 0;
//        foreach($staticsticsData as $value){
//            $result[$i] = [
//                'type' => 'youtube',
//                'video_id' => array_search($value->id, $vId),
//                'total_view' => $value->statistics->viewCount,
//                'date_at' => date('Y-m-d'),
//            ];
//            $i++;
//        }
//        VideoViewLog::insert($result);

    }
}
