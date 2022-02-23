<?php

namespace App\Jobs;

use GuzzleHttp\Client;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use File;
use VzaarApi;

class UploadVideoToDacast implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public  $video;
    public $apiKey;
    public function __construct($video)
    {
        $this->video = $video;
        $this->apiKey = '181861_206d752db62d7e90973c';
    }

    /**
     * Old dacast api implementation code
     *
     * @return void
     */
//    public function handle()
//    {
//        $file = $this->video->temp_path;
//        $api = new \Dacast\Api('181861_206d752db62d7e90973c');
//        $vod = $api->vod->uploadVod(
//            [
//                "originalFilename" => $this->video->linking_file_name,
//                "file" => $file //vod source
//            ],
//            function ($progress) use ($file){
//                File::delete($file);
//                return $progress;
//            },
//            function ($success) {
//                return $success;
//            });
//        if($vod[0]['message'] == 'Not Found')
//        {
//
//            $this->video->platform = 'dacast';
//            $this->video->is_upload_to_host = 1;
//            $this->video->status = '1';
//
//            echo $this->video->linking_file_name;
//            $tokenUrl = 'https://api.dacast.com/v2/vod';
//
//            $tokenClient = new Client([
//                'base_uri' => 'https://api.dacast.com/v2/',
//                'query'    => ['apikey' => $this->apiKey, 'title' => $this->video->linking_file_name]
//            ]);
//
//            $response = $tokenClient->request('GET', $tokenUrl);
//            $vodList = json_decode($response->getBody(),true);
//            if(isset($vodList['data'][0]['id'])){
//                $this->video->video_id = $vodList['data'][0]['id'];
//                $this->video->is_ready = 1;
//                $this->video->save();
//            }
//            $this->video->save();
//        }
//    }

    /**
     * dacast new api implementation code
     *
     * @return void
     */
    public function handle()
    {
        $file = $this->video->temp_path;

        VzaarApi\Client::$client_id  = config('services.dacast.client_id');
        VzaarApi\Client::$auth_token = config('services.dacast.auth_token');

        $params = [
            'title'    => $this->video->linking_file_name,
            'filepath' => $file,
        ];
        $video = VzaarApi\Video::create($params);

        $this->video->platform = 'dacast';
        $this->video->is_upload_to_host = 1;
        $this->video->status = '1';
        $this->video->video_id = $video->id;
        $this->video->save();

        $this->video->mediaFile->save();
        File::delete($file);
    }
}
