<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use App\Models\TwitterTrendingTag;

class StoreTwitterTrendingTags extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'twitterTrendingTags:store';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fetch twitter trending tags data via api and store in database';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        Log::info('Twitter trending tags api fetch start.');
        try{
            $woeid = config('services.twitter.woeid');
            $url = "https://api.twitter.com/1.1/trends/place.json?id=" . $woeid;
            $bearerToken = config('services.twitter.bearer_token');
            $header = array('Authorization: Bearer ' . $bearerToken, 'Expect:');

            $options = array(CURLOPT_HTTPHEADER => $header,
                CURLOPT_HEADER => false,
                CURLOPT_URL => $url,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_SSL_VERIFYPEER => false);
            
            $feed = curl_init();
            curl_setopt_array($feed, $options);
            $json = curl_exec($feed);
            curl_close($feed);
            $response = json_decode($json);

            if(gettype($response) == 'array' && isset($response[0])) {
                $trendsData = $response[0];

                if(isset($trendsData->trends) && count($trendsData->trends) > 0) {
                    TwitterTrendingTag::where('is_recent', 1)->update(['is_recent' => 0]);
                    $trends = $trendsData->trends;
                    
                    foreach($trends as $trend) {
                        $input = [
                            'name' => $trend->name ? $trend->name : null,
                            'url' => $trend->url ? $trend->url : null,
                            'query' => $trend->query ? $trend->query : null,
                            'tweet_volume' => $trend->tweet_volume ? $trend->tweet_volume : null,
                            'woeid' => $trendsData->locations[0]->woeid
                        ];

                        TwitterTrendingTag::create($input);
                    }
                }
            }
            
            Log::info('Twitter trending tags api fetch end.');
        } catch (\Exception $e) {
            Log::info('Twitter trending tags api fetch error: '. $e->getMessage());
        }
    }
}
