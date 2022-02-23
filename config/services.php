<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'dacast' => [
        'key' => env('DACAST_API_KEY'),
        'url' => env('DACAST_API_URL'),
        'client_id' => env('DACAST_CLIENT_ID'),
        'auth_token' => env('DACAST_AUTH_TOKEN'),
    ],

    'recaptcha' => [
        'key' => env('MIX_RECAPTCHA_SITE_KEY'),
        'secret' => env('RECAPTCHA_SECRET')
    ],
    'facebook' => [
        'app_id' => env('MIX_FACEBOOK_APP_ID'),
        'app_secret' => env('FACEBOOK_APP_SECRET'),
    ],
    'linkedin' => [
        'client_id' => env('MIX_LINKEDIN_CLIENT_ID'),
        'client_secret' => env('LINKEDIN_CLIENT_SECRET'),
    ],
    'twitter' => [
        'consumer_key' => env('TWITTER_CONSUMER_KEY'),
        'consumer_secret' => env('TWITTER_CONSUMER_SECRET'),
        'access_token' => env('TWITTER_ACCESS_TOKEN'),
        'access_token_secret' => env('TWITTER_ACCESS_TOKEN_SECRET'),
        'bearer_token' => env('TWITTER_BEARER_TOKEN'),
        'woeid' => env('TWITTER_WOEID')
    ],
    'newsapi' => [
        'key' => env('NEWS_API_KEY'),
    ],
    'ws' => [
        'url' => env('WS_URL'),
    ],

];
