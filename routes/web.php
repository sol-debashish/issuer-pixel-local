<?php

use Illuminate\Support\Facades\Route;

//Route::get('/cron/daily_backup', 'CronController@dailyBackup');
//Route::get('/cron/weekly_backup', 'CronController@weeklyBackup');
//Route::get('/cron/check-dacast-video-status', 'CronController@checkDacastVideoStatus');
//Route::get('/cron/update-media-lookup-data', 'CronController@updateMediaCategorizationLookupData');
//Route::get('/cron/update-media-uuid-data', 'CronController@updateMediaFileUuid');
//Route::get('/cron/update-media-subject-data', 'CronController@updateMediaSubjectTypeData');
//Route::get('/cron/update-media-presenter-data', 'CronController@updateMediaPresenterData');
//Route::get('/cron/update-company-uuid-data', 'CronController@updateCompanyUuid');
Route::get('/cron/update-node-code-media-cat', 'CronController@updateMediaNodeCode');
Route::get('/cron/update-node-code-company-cat', 'CronController@updateCompanyNodeCode');
Route::get('/update-company-slug-name', 'CronController@updateCompanySlugName');
//Route::get('/update-company-content-folder', 'CronController@updateCompanyFolder');
//Route::get('/add-media-file-to-content-folder', 'CronController@addMediaFileToContentFolder');
//Route::get('/cron/s3_tests', 'CronController@s3Tests');

//Route::get('/chat', 'Front\IndexController@chat');
Route::get('/youtube', 'Front\VideoController@getYoutubeVideo');
//Route::get('/youtube-data-sync', 'Front\VideoController@youtubeViewDataSync');
//Route::get('/dacast-data-sync', 'Front\VideoController@dacastSync');
Route::get('/dacast/', 'Front\VideoController@getDecast');
Route::post('/video/advance-upload', 'Front\VideoController@advanceStore');
Route::post('/media-upload', 'Front\UploadController@mediaUpload');
//Route::get('/callback', 'Front\IndexController@callBackTesting');
Route::get('/twitter/callback', 'Front\IndexController@twitterCallback');
Route::get('/linkedin/callback', 'Front\IndexController@linkedinCallback');
Route::get('/img/{path}', 'ImageCacheController@show')->where('path', '.*')->name('img');


Route::get('/company/{slug}/video-details/{uuid}', function ($slug, $uuid) {
    $video = \App\Models\MediaFile::with('video')->where('uuid', $uuid)->firstOrFail();
    $metaData = [
        'title' => "Issuer Pixel | $video->name",
        'meta' => [
            'with-name' => [
                'title' => $video->name,
                'description' => 'Issuer Pixel, a global, searchable, enterprise video and audio sharing platform connecting companies to the world',
                'keywords' => 'IssuerPixel',
            ],
            'with-property' => [
                'og:title' => $video->name,
                'og:type' => 'website',
                'og:url' => url("/company/$slug/video-details/$uuid"),
                'og:image' => 'https://view.vzaar.com/' . $video->video->video_id .'/image',
                'og:site_name' => "Issuer Pixel",
                'og:description' => $video->description,
            ]
        ],
    ];
    return view('spa', $metaData);
});
Route::get('/company/{slug}/audio-details/{uuid}', function ($slug, $uuid) {
    $audio = \App\Models\MediaFile::where('uuid', $uuid)->firstOrFail();
    $metaData = [
        'title' => "Issuer Pixel | $audio->name",
        'meta' => [
            'with-name' => [
                'title' => $audio->name,
                'description' => 'Issuer Pixel, a global, searchable, enterprise video and audio sharing platform connecting companies to the world',
                'keywords' => 'IssuerPixel',
            ],
            'with-property' => [
                'og:title' => $audio->name,
                'og:type' => 'website',
                'og:url' => url("/company/$slug/audio-details/$uuid"),
                'og:image' => asset('/images/audio_thumb.png'),
                'og:site_name' => "Issuer Pixel",
                'og:description' => $audio->description,
            ]
        ],
    ];
    return view('spa', $metaData);
});
Route::get('/company/{slug}', function ($slug) {
    $storagePath = config('filesystems.disks.s3.url') . "/" . config('filesystems.disks.s3.s3_env'). '/company_icon';
    $company = \App\Models\Company::where('slug_name', $slug)->firstOrFail();
    $image = asset('images/home/powerful_search_attribute.png');
    if(null != $company->icon)
    {
        $image = "$storagePath/$company->icon";
    }
    $metaData = [
        'title' => "Issuer Pixel | $company->name",
        'meta' => [
            'with-name' => [
                'title' => $company->name,
                'description' => 'Issuer Pixel, a global, searchable, enterprise video and audio sharing platform connecting companies to the world',
                'keywords' => 'IssuerPixel',
            ],
            'with-property' => [
                'og:title' => $company->name,
                'og:type' => 'website',
                'og:url' => url("company/$slug"),
                'og:image' => $image,
                'og:site_name' => "Issuer Pixel",
                'og:description' => "Issuer Pixel, a global, searchable, enterprise video and audio sharing platform connecting companies to the world",
            ]
        ],
    ];
    return view('spa', $metaData);
});
Route::get('/{any?}', function () {
    return view('spa', [
        'title' => 'Issuer Pixel',
        'meta' => [
            'with-name' => [
                'title' => 'Issuer Pixel',
                'description' => 'Issuer Pixel, a global, searchable, enterprise video and audio sharing platform connecting companies to the world',
                'keywords' => 'IssuerPixel',
            ],
            'with-property' => [
                'og:title' => 'Issuer Pixel',
                'og:type' => 'website',
                'og:url' => url("/"),
                'og:image' => asset('images/home/powerful_search_attribute.png'),
                'og:site_name' => "Issuer Pixel",
                'og:description' => 'Issuer Pixel, a global, searchable, enterprise video and audio sharing platform connecting companies to the world',
            ]
        ],
    ]);
})->where('any', '[\/\w\.-]*');
