<?php
/**
 * Created by PhpStorm.
 * User: SOL-WEB-10
 * Date: 10/15/2019
 * Time: 4:06 PM
 */

namespace App\Traits;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\ImageManagerStatic as Img;

trait UploadTrait
{
    public function uploadSingleImage($image, $path = 'local/image/', $disk = 's3', $filename = null)
    {
        $name = !is_null($filename) ? $filename : md5(uniqid(rand(),true));
        $name .= '.'.$image->getClientOriginalExtension();

        $img = Img::make($image)->orientate();
        // image resize for preview
        if($img->width() > $img->height() && $img->width() > 1024)
        {
            $img->resize(1024, null, function ($constraint) {
                $constraint->aspectRatio();
            });

        }
        if($img->height() > $img->width()  && $img->height() > 1024)
        {
            $img->resize(null, 1024, function ($constraint) {
                $constraint->aspectRatio();
            });
        }
        Storage::disk($disk)->put($path. $name, $img->stream(),'public');
        return $name;
    }

    public function uploadVideo($file, $path = 'local/video/', $disk = 's3', $filename = null)
    {
        $name = !is_null($filename) ? $filename : Str::random(12);
        $name .= '.'.$file->getClientOriginalExtension();
        try{
            Storage::disk($disk)->put($path . $name, fopen($file, 'r+'), 'public');
            return $name;
        } catch (\Exception $e) {
            //dd($e->getMessage());
        }
    }

    public function uploadFile($file, $path = null, $disk = 'local', $filename = null)
    {
        $name = !is_null($filename) ? $filename : Str::random(12);
        $name .= '.'.$file->getClientOriginalExtension();
        Storage::disk($disk)->put($path . $name, fopen($file, 'r+'), 'public');

        if($disk == 's3')
        {
            $url = $this->s3_path($path . $name);
            \Log::info('upload path: '. $url);
            return $url;
        }
        return $name;
    }
    public function base64imageUpload($image, $path = 'local/company_image/', $disk = 's3', $filename = null)
    {
//        $this->createDirectory($path);
        $name = !is_null($filename) ? $filename : md5(uniqid(rand(),true));
        $name .= '.png';

        $img = Img::make($image);
        Storage::disk($disk)->put($path. $name, $img->stream(), 'public');
        return $name;
    }

    public function deleteFileIfExists($path, $disk = 's3')
    {
        if (Storage::disk($disk)->exists($path)) {
            Storage::disk($disk)->delete($path);
        }
    }

    function s3_path($path)
    {
        return config('filesystems.disks.s3.url'). '/'.$path;
    }

    function createDirectory($path)
    {
        if (!file_exists($path)) {
            mkdir($path, 0777, true);
        }
    }

    /**
     * upload video thumbnail to S3
     * @param $image
     * @param $path
     * @param $disk
     * @param $filename
     * @param $width
     * @param $height
     * @return string
     */
    public function uploadVideoThumbnail($image, $path, $disk = 's3', $filename = null, $width = null, $height = null)
    {
        $name = !is_null($filename) ? $filename : md5(uniqid(rand(),true));
        $name .= '.png';
        $img = Img::make($image);

        if (isset($width)) {
            $img->resize($width, null, function ($constraint) {
                $constraint->aspectRatio();
            });
        }
        if (isset($height)) {
            $img->resize(null, $height, function ($constraint) {
                $constraint->aspectRatio();
            });
        }

        Storage::disk($disk)->put($path. $name, $img->stream(), 'public');
        return $name;
    }
}

