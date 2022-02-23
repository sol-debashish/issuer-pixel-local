<?php

namespace App\Http\Controllers\Front;

use Abraham\TwitterOAuth\TwitterOAuth;
use App\Http\Controllers\Controller;
use App\Models\SocialIntegration;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class IndexController extends Controller
{
    public function index()
    {
//        return view('front.index');
        return view('front.welcome');
    }
    public function privacyPolicy()
    {
        return view('front.privacy_policy');
    }

    public function callBackTesting(){
        $data = serialize($_REQUEST);;
        \Mail::raw($data, function ($message) use($data){
                    $message->to('sayydul@gmail.com')
                        ->subject('dacast api call back');
        });

    }

    public function chat()
    {
        return view('front.chat');
    }

    public function linkedinCallback(Request $request)
    {
        if($request->code && Session::token() == $request->state)
        {
            try{
                $client = new Client(['base_uri' => 'https://www.linkedin.com']);
                $response = $client->request('POST', '/oauth/v2/accessToken', [
                    'form_params' => [
                        "grant_type" => "authorization_code",
                        "code" => $request->code,
                        "redirect_uri" => url('/linkedin/callback'),
                        "client_id" => config('services.linkedin.client_id'),
                        "client_secret" => config('services.linkedin.client_secret'),
                    ],
                ]);
                $data = json_decode($response->getBody()->getContents(), true);
                SocialIntegration::updateOrCreate(
                    ['company_id' => auth()->user()->company_id, 'share_platform' => 'linkedin'],
                    ["access_token" => $data['access_token'], "expires_in" => $data['expires_in']]
                );

            } catch(Exception $e) {
            }
        }
        return redirect('/settings/general#integrations');
    }

    public function twitterCallback(Request $request)
    {
        try
        {
            if($request->oauth_verifier && $request->oauth_token)
            {
                $socialIntegration = SocialIntegration::where(['company_id' => auth()->user()->company_id, 'share_platform' => 'twitter']);
                $oauth_verifier = $request->oauth_verifier;
                // connect with application token
                $connection = new TwitterOAuth(
                    config('services.twitter.consumer_key'),
                    config('services.twitter.consumer_secret'),
                    $request->oauth_token,
                    $socialIntegration->first()->oauth_token_secret
                );
                // request user token
                $token = $connection->oauth(
                    'oauth/access_token', [
                        'oauth_verifier' => $oauth_verifier
                    ]
                );
                $socialIntegration->update(["access_token" => $token['oauth_token'], "oauth_token_secret" => $token['oauth_token_secret']]);
            }
        }
        catch(Exception $e) {
        }
        return redirect('/settings/general#integrations');
    }
}
