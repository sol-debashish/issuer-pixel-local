<?php

namespace App\Repositories;

use Abraham\TwitterOAuth\TwitterOAuth;
use Facebook\Facebook;

class TwitterRepository
{
    protected $twitter;

    public function __construct($accessToken, $accessTokenSecret)
    {
        $this->twitter =  new TwitterOAuth(
            config('services.twitter.consumer_key'),
            config('services.twitter.consumer_secret'),
            $accessToken,
            $accessTokenSecret
        );
    }

    public function post($status)
    {
        try {
            $responseAfterPost =  $this->twitter->post("statuses/update", ["status" => $status]);
            //dd($responseAfterPost);
            $response['status'] = 'OK';
            $response['tweet_post_id'] = $responseAfterPost->id;
        } catch (\Exception $e) {
            $response['status'] = 'NO';
        }
        return $response;
    }
}
