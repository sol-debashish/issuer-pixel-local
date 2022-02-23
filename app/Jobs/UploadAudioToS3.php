<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;
use File;

class UploadAudioToS3 implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public  $mediaFile;
    public  $fileName;
    public  $uploadedPath;

    public function __construct($mediaFile, $fileName, $uploadedPath)
    {
        $this->mediaFile = $mediaFile;
        $this->fileName = $fileName;
        $this->uploadedPath = $uploadedPath;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Storage::disk('s3')->put(config('filesystems.disks.s3.s3_env') . '/audio/' . $this->fileName, fopen($this->uploadedPath, 'r+'), 'public');
        $this->mediaFile->s3_address = config('filesystems.disks.s3.url'). '/'. config('filesystems.disks.s3.s3_env') . '/audio/' . $this->fileName;
        $this->mediaFile->status = 2;
        $this->mediaFile->save();
        File::delete($this->uploadedPath);
    }
}
