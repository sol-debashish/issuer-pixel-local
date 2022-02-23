<?php

namespace App\Repositories;

use Facebook\Facebook;

class FacebookRepository
{
    protected $facebook;
    protected $longLiveAccessToken;

    public function __construct()
    {
        $this->facebook = new Facebook([
            'app_id' => config('services.facebook.app_id'),
            'app_secret' => config('services.facebook.app_secret'),
            'default_graph_version' => 'v11.0'
        ]);
    }

    public function post($endPoint, $content, $pageAccessToken)
    {
        try {
            $responseObj = $this->facebook->post($endPoint, $content, $pageAccessToken);
            $responseData = json_decode($responseObj->getBody(), true);
            // dd($responseData);
            $response['status'] = 'OK';
            $response['facebook_post_id'] = $responseData['id'];
            //return $response->getGraphNode();
        } catch (Facebook\Exceptions\FacebookResponseException $e) {
            $response['status'] = 'NO';
        } catch (Facebook\Exceptions\FacebookSDKException $e) {
            $response['status'] = 'NO';
        }
        return $response;
    }

    public function getLongLivedAccessToken($facebook_access_token)
    {
        $this->facebook->setDefaultAccessToken($facebook_access_token);
        $oAuth2Client = $this->facebook->getOAuth2Client();
        $longLivedAccessToken = $oAuth2Client->getLongLivedAccessToken($facebook_access_token);
        $this->longLiveAccessToken = $longLivedAccessToken->getValue();
        return $this->longLiveAccessToken;
    }

    public function getFacebookPageLists($longLiveAccessToken)
    {
        $pageListObj = $this->facebook->get('/me/accounts', $longLiveAccessToken);
        $pageListsArray = $pageListObj->getGraphEdge()->asArray();
        return $pageListsArray;
    }
}
