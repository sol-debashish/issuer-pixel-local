<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Youtube;
use File;

class UploadVideoToYoutube implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public  $video;
    public function __construct($video)
    {
        //
        $this->video = $video;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $this->video->platform = 'youtube';
        $file = $this->video->temp_path;
        if ($video = Youtube::upload( $file, ['title' => $this->video->title], 'unlisted')) {
            File::delete($file);
            $this->video->video_id = $video->getVideoId();
            $this->video->is_upload_to_host = '1';
            $this->video->status = '1';
            $this->video->is_ready = '1';
        }
        $this->video->save();
    }
}
