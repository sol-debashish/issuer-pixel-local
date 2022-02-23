<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use App\Models\TwitterAnalytics;
use App\Models\LinkedInAnalytics;
use App\Models\FacebookAnalytics;

class UpdateSocialAnalyticsData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'socialAnalytics:update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fetch social analytics data via api and update in database';

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
        Log::info('Social analytics api fetch start.');
        try{
            $this->updateTwitterAnalytics();
            // $this->updateLinkedinAnalytics();
            // $this->updateFacebookAnalytics();
            
            Log::info('Social analytics api fetch end.');
        } catch (\Exception $e) {
            Log::info('Social analytics api fetch error: '. $e->getMessage());
        }
    }

    function updateTwitterAnalytics() {
        $twitterAnalytics = TwitterAnalytics::all();

        foreach($twitterAnalytics as $twitterAnalyticsRow) {
            $url = "https://api.twitter.com/2/tweets?ids=" . $twitterAnalyticsRow->tweet_post_id . "&tweet.fields=public_metrics&expansions=attachments.media_keys&media.fields=public_metrics";
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
            $twitterData = json_decode($json);

            if(isset($twitterData->data)) {
                $publicMetrics = $twitterData->data[0]->public_metrics;
                $twitterAnalyticsRow->retweets = $publicMetrics->retweet_count;
                $twitterAnalyticsRow->replies = $publicMetrics->reply_count;
                $twitterAnalyticsRow->likes = $publicMetrics->like_count;
                $twitterAnalyticsRow->quote_tweets = $publicMetrics->quote_count;

                $twitterAnalyticsRow->save();
            }
        }
    }

    function updateLinkedinAnalytics() {
        $linkedinAnalytics = LinkedInAnalytics::all();

        foreach($linkedinAnalytics as $linkedinAnalyticsRow) {
            $json = '{
                "elements": [{
                    "organizationalEntity": "urn:li:organization:2414183",
                    "share": "urn:li:share:1000000",
                    "totalShareStatistics": {
                        "clickCount": 78,
                        "commentCount": 24,
                        "engagement": 0.022886324947985624,
                        "impressionCount": 5287,
                        "likeCount": 14,
                        "shareCount": 5
                    }
                }],
                "paging": {
                    "count": 10,
                    "links": [],
                    "start": 0
                }
            }';
            $linkedinData = json_decode($json);
            $shareStatistics = $linkedinData->elements[0]->totalShareStatistics;

            $linkedinAnalyticsRow->clicks = $shareStatistics->clickCount;
            $linkedinAnalyticsRow->comments = $shareStatistics->commentCount;
            $linkedinAnalyticsRow->engagement = $shareStatistics->engagement;
            $linkedinAnalyticsRow->impressions = $shareStatistics->impressionCount;
            $linkedinAnalyticsRow->likes = $shareStatistics->likeCount;
            $linkedinAnalyticsRow->shares = $shareStatistics->shareCount;

            $linkedinAnalyticsRow->save();
        }
    }

    function updateFacebookAnalytics() {
        $facebookAnalytics = FacebookAnalytics::all();

        foreach($facebookAnalytics as $facebookAnalyticsRow) {
            $json = '{
                "engagement": {
                    "reaction_count": 123,
                    "comment_count": 4,
                    "share_count": 29,
                    "comment_plugin_count": 0
                }
            }';
            $facebookData = json_decode($json);
            $shareStatistics = $facebookData->engagement;

            $facebookAnalyticsRow->likes = $shareStatistics->reaction_count;
            $facebookAnalyticsRow->comments = $shareStatistics->comment_count;
            $facebookAnalyticsRow->shares = $shareStatistics->share_count;

            $facebookAnalyticsRow->save();
        }
    }
}
