<?php

namespace App\Http\Controllers;
use Illuminate\Contracts\Filesystem\Cloud;
//use Illuminate\Contracts\Filesystem\Filesystem;
use League\Glide\Responses\LaravelResponseFactory;
use League\Glide\ServerFactory;

class ImageCacheController extends Controller
{
    public function show(Cloud $filesystem, $path)
    {
        $server = ServerFactory::create([
            'response' => new LaravelResponseFactory(app('request')),
            'source' => $filesystem->getDriver(),
            'cache' => $filesystem->getDriver(),
            'cache_path_prefix' => config('filesystems.disks.s3.s3_env'). '/.cache',
            'source_path_prefix' => config('filesystems.disks.s3.s3_env').'/images',
            'base_url' => 'img',
        ]);
        return $server->getImageResponse($path, request()->all());
    }
}
