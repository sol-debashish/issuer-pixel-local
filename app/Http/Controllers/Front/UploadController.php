<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Jobs\UploadVideoToDacast;
use App\Jobs\UploadVideoToS3;
use App\Models\Video;
use App\Traits\UploadTrait;

use App\Jobs\UploadVideoToYoutube;

use Youtube;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use File;
use Validator;

use Pion\Laravel\ChunkUpload\Exceptions\UploadMissingFileException;
use Pion\Laravel\ChunkUpload\Handler\AbstractHandler;
use Pion\Laravel\ChunkUpload\Handler\HandlerFactory;
use Pion\Laravel\ChunkUpload\Receiver\FileReceiver;

class UploadController extends Controller
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


    public function mediaUpload(Request $request) {
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
            if('youtube' == $request->type){
                $this->dispatch(new UploadVideoToYoutube($video));
            }
            elseif('dacast' == $request->type){
                $this->dispatch(new UploadVideoToDacast($video));
            }
        }
        // we are in chunk mode, lets send the current progress
        /** @var AbstractHandler $handler */
        $handler = $save->handler();
        return response()->json([
            "done" => $handler->getPercentageDone(),
            'status' => true
        ]);
    }

    protected function createFilename(UploadedFile $file)
    {
        $extension = $file->getClientOriginalExtension();
        $filename = str_replace(".".$extension, "", $file->getClientOriginalName()); // Filename without extension
        // Add timestamp hash to name of the file
        $filename .= "_" . md5(time()) . "." . $extension;
        return $filename;
    }
}
