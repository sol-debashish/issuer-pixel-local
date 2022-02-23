<?php

namespace App\Http\Controllers\Api\V1;

use Abraham\TwitterOAuth\TwitterOAuth;
use Abraham\TwitterOAuth\TwitterOAuthException;
use App\Http\Controllers\Controller;
use App\Models\MediaFile;
use App\Models\SocialIntegration;
use App\Models\TwitterAnalytics;
use App\Models\LinkedInAnalytics;
use App\Models\FacebookAnalytics;
use App\Repositories\FacebookRepository;
use App\Repositories\TwitterRepository;
use Carbon\Carbon;
use Facebook\Exceptions\FacebookResponseException;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class SocialIntegrationController extends BaseController
{

    public function setFbAccessToken(Request $request, FacebookRepository $fb)
    {
        try {
            $longLiveAccessToken = $fb->getLongLivedAccessToken($request->facebook_access_token);
            SocialIntegration::updateOrCreate(
                ['company_id' => auth()->user()->company_id, 'share_platform' => 'facebook'],
                ['access_token' => $longLiveAccessToken]
            );
            $response = array(
                'facebook_token_update' => true,
                'message' => 'Facebook integration completed successfully'
            );
            return $this->sendResponse($response, 'Access token saved succesfully', 200);
        } catch (Exception $ex) {
            return $this->sendError('error', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
    public function setTwitterInfo(Request $request)
    {
        try {
            //CONNECTION TO THE TWITTER APP TO ASK FOR A REQUEST TOKEN
            $connection = new TwitterOAuth(config('services.twitter.consumer_key'), config('services.twitter.consumer_secret'));
            $request_token = $connection->oauth("oauth/request_token", array("oauth_callback" => url("/twitter/callback")));
            //callback is set to where the rest of the script is
            // throw exception if something gone wrong
            if ($connection->getLastHttpCode() != 200) {
                return $this->sendError('error', 'There was a problem performing this request', Response::HTTP_INTERNAL_SERVER_ERROR);
            }
            // save token of application to session
            //            $_SESSION['oauth_token'] = $request_token['oauth_token'];
            //            $_SESSION['oauth_token_secret'] = $request_token['oauth_token_secret'];
            // generate the URL to make request to authorize our application
            $url = $connection->url(
                'oauth/authorize',
                [
                    'oauth_token' => $request_token['oauth_token']
                ]
            );

            SocialIntegration::updateOrCreate(
                ['company_id' => auth()->user()->company_id, 'share_platform' => 'twitter'],
                ['oauth_token_secret' => $request_token['oauth_token_secret']]
            );
            $response = array(
                'twitter_update' => true,
                'url' => $url
            );
            return $this->sendResponse($response, 'Twitter info saved succesfully', 200);
        } catch (TwitterOAuthException  $e) {
            $response = [
                'status' => 'error',
                'msg' => $e->getMessage(),
            ];
        } catch (Exception $ex) {
            return $this->sendError('error', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function socialIntegratedList()
    {
        try {
            $data = SocialIntegration::whereCompanyId(auth()->user()->company_id)->whereNotNull('access_token')->pluck('share_platform', 'share_platform')->toArray();
            return $this->sendResponse($data, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('error', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function socialSharing(Request $request)
    {
        $shareresponse = $integration = [];
        $integrationList = SocialIntegration::where('company_id', auth()->user()->company_id)->whereNotNull('access_token')->select('access_token', 'share_platform', 'oauth_token_secret')->get();
        foreach ($integrationList as $list) {
            $integration[$list->share_platform]['token'] = $list->access_token;
            $integration[$list->share_platform]['oauth_token_secret'] = $list->oauth_token_secret;
        }
        foreach ($request->sharePlatform as $key => $val) {
            if ($val == 'Facebook') {
                $shareresponse[] = $this->shareWithFacebook($request, $integration);
            }
            if ($val == 'Linkedin') {
                $shareresponse[] = $this->shareWithLinkedin($request, $integration);
            }
            if ($val == 'Twitter') {
                $shareresponse[] = $this->shareWithTwitter($request, $integration);
            }
        }
        return $this->sendResponse($shareresponse, 'Share response message', 200);
    }

    private function shareWithFacebook($request, $accessToken)
    {
        if (isset($accessToken['facebook'])) {
            try {
                $fb = new FacebookRepository();
                $shareResponse = '';
                $longLiveAccessToken = $accessToken['facebook']['token'];
                $pagesArray = $fb->getFacebookPageLists($longLiveAccessToken);
                if (!empty($pagesArray)) {
                    foreach ($pagesArray as $pageRow) {
                        $pageAccessToken = $pageRow['access_token'];
                        $postData = [
                            'link' => $request->shareLink,
                            'message' => $request->shareMessage
                        ];
                        $shareResponse = $fb->post('/me/feed', $postData, $pageAccessToken);
                    }
                }
                if ($shareResponse['status'] == 'OK') {
                    $FacebookPostData = new FacebookAnalytics;
                    $FacebookPostData->media_id = $request->shareMediaId;
                    $FacebookPostData->media_type = $request->shareMediaType === "video-details" ? "Video" : "Audio";
                    $FacebookPostData->company_id = auth()->user()->company_id;
                    $FacebookPostData->facebook_post_id = $shareResponse['facebook_post_id'];
                    $FacebookPostData->shared_at = Carbon::now();
                    $FacebookPostData->save();
                    $response = [
                        'status' => 'success',
                        'msg' => 'Post is shared on Facebook successfully.',
                    ];
                } else {
                    $response = [
                        'status' => 'error',
                        'msg' => 'Post is shared on Facebook fail.',
                    ];
                }
            } catch (FacebookResponseException  $e) {
                $response = [
                    'status' => 'error',
                    'msg' => $e->getMessage(),
                ];
            } catch (Exception $e) {
                $response = [
                    'status' => 'error',
                    'msg' => 'Post is shared on Facebook fail.',
                ];
            }
        } else {
            $response = [
                'status' => 'error',
                'msg' => 'Facebook is not integrated',
            ];
        }
        return $response;
    }

    private function shareWithLinkedin($request, $accessToken)
    {
        if (isset($accessToken['linkedin'])) {
            $thumb = asset("/images/home/powerful_search_attribute.png");
            $title = "Issuer Pixel";
            $linkArray = explode('/', $request->shareLink);
            if (isset($linkArray[5]) && isset($linkArray[6])) {
                if ('video-details' == $linkArray[5]) {
                    $video = \App\Models\MediaFile::with('video')->where('uuid', $linkArray[6])->first();
                    $thumb = 'https://view.vzaar.com/' . $video->video->video_id . '/image';
                    $title = $video->name;
                }
                if ('audio-details' == $linkArray[5]) {
                    $audio = \App\Models\MediaFile::where('uuid', $linkArray[6])->first();
                    $thumb = asset('/images/audio_thumb.png');
                    $title = $audio->name;
                }
            }
            try {
                $client = new Client(['base_uri' => 'https://api.linkedin.com']);
                $profileResponse = $client->request('GET', '/v2/me', [
                    'headers' => [
                        "Authorization" => "Bearer " . $accessToken['linkedin']['token'],
                    ],
                ]);
                $data = json_decode($profileResponse->getBody()->getContents(), true);
                $linkedin_profile_id = $data['id']; // store this id somewhere

                $body = new \stdClass();
                $body->content = new \stdClass();
                $body->content->contentEntities[0] = new \stdClass();
                $body->text = new \stdClass();
                $body->content->contentEntities[0]->thumbnails[0] = new \stdClass();
                $body->content->contentEntities[0]->entityLocation = $request->shareLink;
                $body->content->contentEntities[0]->thumbnails[0]->resolvedUrl = $thumb;
                $body->content->title = $title;
                $body->owner = 'urn:li:person:' . $linkedin_profile_id;
                $body->text->text = $request->shareMessage ?? "";
                $body_json = json_encode($body, true);
                $shareResponse = $client->request('POST', '/v2/shares', [
                    'headers' => [
                        "Authorization" => "Bearer " . $accessToken['linkedin']['token'],
                        "Content-Type"  => "application/json",
                        "x-li-format"   => "json"
                    ],
                    'body' => $body_json,
                ]);
                $shareResponseData = json_decode($shareResponse->getBody()->getContents(), true);
                if ($shareResponse->getStatusCode() === 201) {
                    $LinkedInPostData = new LinkedInAnalytics;
                    $LinkedInPostData->media_id = $request->shareMediaId;
                    $LinkedInPostData->media_type = $request->shareMediaType === "video-details" ? "Video" : "Audio";
                    $LinkedInPostData->company_id = auth()->user()->company_id;
                    $LinkedInPostData->linkedin_post_id = $shareResponseData['id'];
                    $LinkedInPostData->shared_at = Carbon::now();
                    $LinkedInPostData->save();
                    $response = [
                        'status' => 'success',
                        'msg' => 'Post is shared on LinkedIn successfully.',
                    ];
                }
            } catch (ClientException  $e) {
                $response = [
                    'status' => 'error',
                    'msg' => $e->getMessage(),
                ];
            } catch (Exception $e) {
                $response = [
                    'status' => 'error',
                    'msg' => 'Post is shared on LinkedIn fail.',
                ];
            }
        } else {
            $response = [
                'status' => 'error',
                'msg' => 'LinkedIn is not integrated',
            ];
        }
        return $response;
    }

    public function shareWithTwitter($request, $accessToken)
    {
        //dd($request->shareMediaId);
        if (isset($accessToken['twitter'])) {
            $twitter = new TwitterRepository($accessToken['twitter']['token'], $accessToken['twitter']['oauth_token_secret']);
            $status = $request->shareLink;
            if ($request->shareMessage) {
                $msg = Str::of($request->shareMessage)->limit(230);
                $status = $msg . "\n" . $request->shareLink;
            }
            $post_tweets = $twitter->post($status);
            if ($post_tweets['status'] == 'OK') {
                $twitterPostData = new TwitterAnalytics;
                $twitterPostData->media_id = $request->shareMediaId;
                $twitterPostData->media_type = $request->shareMediaType === "video-details" ? "Video" : "Audio";
                $twitterPostData->company_id = auth()->user()->company_id;
                $twitterPostData->tweet_post_id = $post_tweets['tweet_post_id'];
                $twitterPostData->shared_at = Carbon::now();
                $twitterPostData->save();
                $response = [
                    'status' => 'success',
                    'msg' => 'Post is shared on Twitter successfully.',
                ];
            } else {
                $response = [
                    'status' => 'error',
                    'msg' => 'There is an error to post in twitter',
                ];
            }
        } else {
            $response = [
                'status' => 'error',
                'msg' => 'Twitter is not integrated',
            ];
        }
        return $response;
    }

    function buildBaseString($baseURI, $method, $params)
    {
        $r = array();
        ksort($params);
        foreach ($params as $key => $value) {
            $r[] = "$key=" . rawurlencode($value);
        }
        return $method . "&" . rawurlencode($baseURI) . '&' . rawurlencode(implode('&', $r));
    }

    function buildAuthorizationHeader($oauth)
    {
        $r = 'Authorization: OAuth ';
        $values = array();
        foreach ($oauth as $key => $value)
            $values[] = "$key=\"" . rawurlencode($value) . "\"";
        $r .= implode(', ', $values);
        return $r;
    }

    function getTwitterData()
    {
        try {
            $selectedField = [
                'social_analytics_data_twitter.id',
                'social_analytics_data_twitter.media_type',
                \DB::raw('DATE_FORMAT(social_analytics_data_twitter.shared_at, "%m/%d/%Y") as share_date'),
                'social_analytics_data_twitter.retweets',
                'social_analytics_data_twitter.quote_tweets',
                'social_analytics_data_twitter.likes',
                'social_analytics_data_twitter.replies',
                'media_files.name',
                \DB::raw('DATE_FORMAT(media_files.created_at, "%m/%d/%Y") as publication_date')
            ];

            $twitterAnalytics = TwitterAnalytics::leftJoin('media_files', 'media_files.id', '=', 'social_analytics_data_twitter.media_id')
                ->select($selectedField)
                ->orderBy('social_analytics_data_twitter.id', 'DESC')
                ->paginate(10);

            $response = [
                'pagination' => [
                    'total' => $twitterAnalytics->total(),
                    'per_page' => $twitterAnalytics->perPage(),
                    'current_page' => $twitterAnalytics->currentPage(),
                    'last_page' => $twitterAnalytics->lastPage(),
                    'from' => $twitterAnalytics->firstItem(),
                    'to' => $twitterAnalytics->lastItem()
                ],
                'data' => $twitterAnalytics
            ];

            return $this->sendResponse($response, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('error', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    function getFacebookData()
    {
        try {
            $selectedField = [
                'social_analytics_data_facebook.id',
                'social_analytics_data_facebook.media_type',
                \DB::raw('DATE_FORMAT(social_analytics_data_facebook.shared_at, "%m/%d/%Y") as share_date'),
                'social_analytics_data_facebook.likes',
                'social_analytics_data_facebook.comments',
                'social_analytics_data_facebook.shares',
                'media_files.name',
                \DB::raw('DATE_FORMAT(media_files.created_at, "%m/%d/%Y") as publication_date')
            ];

            $facebookAnalytics = FacebookAnalytics::leftJoin('media_files', 'media_files.id', '=', 'social_analytics_data_facebook.media_id')
                ->select($selectedField)
                ->orderBy('social_analytics_data_facebook.id', 'DESC')
                ->paginate(10);

            $response = [
                'pagination' => [
                    'total' => $facebookAnalytics->total(),
                    'per_page' => $facebookAnalytics->perPage(),
                    'current_page' => $facebookAnalytics->currentPage(),
                    'last_page' => $facebookAnalytics->lastPage(),
                    'from' => $facebookAnalytics->firstItem(),
                    'to' => $facebookAnalytics->lastItem()
                ],
                'data' => $facebookAnalytics
            ];

            return $this->sendResponse($response, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('error', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    function getLinkedinData()
    {
        try {
            $selectedField = [
                'social_analytics_data_linkedin.id',
                'social_analytics_data_linkedin.media_type',
                \DB::raw('DATE_FORMAT(social_analytics_data_linkedin.shared_at, "%m/%d/%Y") as share_date'),
                'social_analytics_data_linkedin.clicks',
                'social_analytics_data_linkedin.comments',
                'social_analytics_data_linkedin.engagement',
                'social_analytics_data_linkedin.impressions',
                'social_analytics_data_linkedin.likes',
                'social_analytics_data_linkedin.shares',
                'media_files.name',
                \DB::raw('DATE_FORMAT(media_files.created_at, "%m/%d/%Y") as publication_date')
            ];

            $linkedinAnalytics = LinkedInAnalytics::leftJoin('media_files', 'media_files.id', '=', 'social_analytics_data_linkedin.media_id')
                ->select($selectedField)
                ->orderBy('social_analytics_data_linkedin.id', 'DESC')
                ->paginate(10);

            $response = [
                'pagination' => [
                    'total' => $linkedinAnalytics->total(),
                    'per_page' => $linkedinAnalytics->perPage(),
                    'current_page' => $linkedinAnalytics->currentPage(),
                    'last_page' => $linkedinAnalytics->lastPage(),
                    'from' => $linkedinAnalytics->firstItem(),
                    'to' => $linkedinAnalytics->lastItem()
                ],
                'data' => $linkedinAnalytics
            ];

            return $this->sendResponse($response, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('error', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
