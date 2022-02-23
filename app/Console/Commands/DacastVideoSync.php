<?php

namespace App\Console\Commands;

use App\Models\Video;
use GuzzleHttp\Client;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use VzaarApi;

class DacastVideoSync extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'dacastVideoSync:daily';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Dacast video status sync';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        Log::info('Dacast video sync run');
        try {

            VzaarApi\Client::$client_id  = config('services.dacast.client_id');
            VzaarApi\Client::$auth_token = config('services.dacast.auth_token');
            $videoList = Video::where('is_ready', 0 )->whereNotNull('video_id')->get();

            foreach($videoList as $video){
                Log::info('Dacast video sync start for video : '. $video->video_id);
                $dacastVideo = VzaarApi\Video::find($video->video_id);
                if('ready' == $dacastVideo->state)
                {
                    $video->is_ready = 1;
                    $video->save();
                    $video->mediaFile->status = 2;
                    $video->mediaFile->save();
                    Log::info('Dacast video sync success for video : '. $video->video_id);
                }
            }
        } catch (\Exception $e) {
            Log::info('Dacast video sync error: ' . $e->getMessage());
        }
    }
}
