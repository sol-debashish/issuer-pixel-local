<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;
use File;

class UploadVideoToS3 implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public  $video;
    public  $uploadedFolder;
    public function __construct($video, $uploadedFolder)
    {
        $this->video = $video;
        $this->uploadedFolder = $uploadedFolder;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $name = $this->video->file_name;
        Storage::disk('s3')->put($this->uploadedFolder . $name, fopen($this->video->temp_path, 'r'), 'public');
        $this->video->is_upload_to_storage = '1';
        $this->video->mediaFile->s3_address = config('filesystems.disks.s3.url'). '/'. $this->uploadedFolder . $name;
        $this->video->mediaFile->save();
        $this->video->save();
    }
}
