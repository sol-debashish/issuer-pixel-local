<?php

namespace App\Console\Commands;

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Models\Industry;
use App\Models\CompanyCategorizationLookup;
use App\Models\CategorizationLevel;
use App\Traits\NodeMap;

class NodeIndustryNews extends Command {

    use NodeMap;

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'nodeIndustryNews:everyday';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Pull Node Industry Related News';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct() {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    private function getCompanyIndustries($companyId) {
        $data = Industry::leftJoin('company_categorization_lookups', 'company_categorization_lookups.industry_id', '=', 'industries.id')
                ->where(['company_categorization_lookups.company_id' => $companyId, 'industries.status' => 1, 'industries.publish_status' => 1])
                ->select('industries.id', 'industries.description', 'company_categorization_lookups.id as lookup_id', 'company_categorization_lookups.categorization_level_id as categorization_level_id')->get()
                ->toArray();

        $result = uniqueSameHierarchyData($data, 'categorization_level_id');
        return $result;
    }

    private function getCompanyNode($companyId) {
        $lookupsData = CompanyCategorizationLookup::where(['company_id' => $companyId])->orderBy('order')->get();
        $hierarchyData = [];
        foreach ($lookupsData as $row) {
            $catLevel = CategorizationLevel::findOrFail($row->categorization_level_id);
            $NodeType = $this->findNodeMapKeyByModel($catLevel->name);
            $lastNodemapData = $this->getNodeMap($NodeType);
            $lastlevelNamespace = "App\\Models\\" . $lastNodemapData['model'];
            //$industry['categorization_id'] = $row->id;
            $lastLevelData = $lastlevelNamespace::whereId($row->node_id)->get(['description', 'id'])->first();
            $lastLevelData->nodeType = $NodeType;
            $hierarchyData[] = $lastLevelData;
        }
        $temp = array_unique(array_column($hierarchyData, 'description'));
        $result = array_intersect_key($hierarchyData, $temp);
        return $result;
    }

    public function handle() {
        Log::info('News schedular start.');
        $industryIds = $nodeIds = [];
        $getProfiles = User::select('company_id')->groupBy('company_id')->get();
        $totalData = DB::table('node_location_news')->count();
        $newsApiTimeLimit = $totalData ? '-1 day' : '-29 day';
        $googleNewsTimeLimit = $totalData ? '24h' : '30d';

        try {
            if (!$getProfiles->isEmpty()) {
                foreach ($getProfiles as $key => $prow) {
                    $companyId = $prow->company_id;
                    $industries = $this->getCompanyIndustries($companyId);
                    $node = $this->getCompanyNode($companyId);

                    foreach ($industries as $ik => $irow) {
                        if(!in_array($irow['id'], $industryIds)) {
                            array_push($industryIds, $irow['id']);
                            $industryName = urlencode(preg_replace('/[_\W]+/', ' ', $irow['description']));
                            $this->pullNewsApiData($industryName, 'industry', $newsApiTimeLimit);
                            $this->pullGoogleNewsData($industryName, 'industry', $googleNewsTimeLimit);
                        }
                    }

                    foreach ($node as $nk => $nrow) {
                        if(!in_array($nrow['id'], $nodeIds)) {
                            array_push($nodeIds, $nrow['id']);
                            $totalNews = 0;
                            $nodeName = urlencode(preg_replace('/[_\W]+/', ' ', $nrow['description']));
                            $totalNews += $this->pullNewsApiData($nodeName, 'node', $newsApiTimeLimit);
                            $totalNews += $this->pullGoogleNewsData($nodeName, 'node', $googleNewsTimeLimit);

                            if($totalNews == 0) {
                                $this->nodeMapNodeType = $nrow['nodeType'];
                                $parentModel = $this->getNodeMapParentModel();
                                $nodeId = $nrow['id'];

                                while($totalNews == 0 && $parentModel != '') {
                                    $nodeParentField = $this->getNodeMapParentField();
                                    $nodeNamespace = "App\\Models\\" . $this->getNodeMapModel();
                                    $parentId = $nodeNamespace::whereId($nodeId)->first()->{$nodeParentField};

                                    $parentModelNamespace = "App\\Models\\" . $this->getNodeMapParentModel();
                                    $parentNode = $parentModelNamespace::whereId($parentId)->get(['description', 'id'])->first();

                                    $queryString = urlencode(preg_replace('/[_\W]+/', ' ', $parentNode->description));
                                    $totalNews += $this->pullNewsApiData($queryString, 'node', $newsApiTimeLimit, $nodeName);
                                    $totalNews += $this->pullGoogleNewsData($queryString, 'node', $googleNewsTimeLimit, $nodeName);

                                    if($totalNews == 0) {
                                        $this->nodeMapNodeType = $this->findNodeMapKeyByModel($parentModel);
                                        $parentModel = $this->getNodeMapParentModel();
                                        $nodeId = $parentId;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            Log::info('News schedular end.');
        } catch (\Exception $e) {
            Log::info('News schedular error: ' . $e->getMessage());
        }
    }

    private function pullNewsApiData($queryString, $newsType, $timeLimit, $actualNode = '') {
        $fromDate = date("Y-m-d", strtotime($timeLimit, time()));
        $newsUrl = "https://newsapi.org/v2/everything?q=$queryString&from=$fromDate&pageSize=100&apiKey=". config('services.newsapi.key');

        try {
            $getNewsUrlContent = file_get_contents($newsUrl);
            $responseResult = json_decode($getNewsUrlContent);

            if($actualNode != '')
                $queryString = $actualNode;

            if ($responseResult->status == 'ok') {
                foreach ($responseResult->articles as $key => $nval) {
                    $insertArray = array(
                        'industry' => ($newsType == 'industry') ? $queryString : '',
                        'node' => ($newsType == 'node') ? $queryString : '',
                        'author' => (!empty($nval->author)) ? $nval->author : '',
                        'title' => $nval->title,
                        'description' => $nval->description,
                        'url' => $nval->url,
                        'urlToImage' => $nval->urlToImage,
                        'publishedAt' => date("Y-m-d H:i:s", strtotime($nval->publishedAt))
                    );
                    DB::table('node_location_news')->updateOrInsert($insertArray);
                }
                return count($responseResult->articles);
            }
        } catch (\Exception $e) {
            Log::info('News API fetch error: ' . $e->getMessage());
            return 0;
        }
    }

    private function pullGoogleNewsData($queryString, $newsType, $timeLimit, $actualNode = '') {
        $news_url = "https://news.google.com/rss/search?q=$queryString+when:$timeLimit";
        $get_news_url_content = file_get_contents($news_url);
        $get_news_url_content = str_replace(array("\n", "\r", "\t"), '', $get_news_url_content);
        $get_news_url_content = trim(str_replace('"', "'", $get_news_url_content));

        $news_xml_data = simplexml_load_string($get_news_url_content);
        $encoded_data = json_encode($news_xml_data);
        $prepared_response_data = json_decode($encoded_data);
        $local_news = $prepared_response_data->channel;

        if($actualNode != '')
            $queryString = $actualNode;

        // news data processing
        // xml data return within channel as item node OR
        // only within channel without item node

        if (property_exists($local_news, 'item')) {
            $local_news = $prepared_response_data->channel->item;
            if(gettype($local_news) == 'array') {
                foreach ($local_news as $key => $news) {
                    $insertArray = array(
                        'industry' => ($newsType == 'industry') ? $queryString : '',
                        'node' => ($newsType == 'node') ? $queryString : '',
                        'author' => (!empty($news->source)) ? $news->source : '',
                        'title' => $news->title,
                        'description' => $news->description,
                        'url' => $news->link,
                        'publishedAt' => date("Y-m-d H:i:s", strtotime($news->pubDate))
                    );
                    DB::table('node_location_news')->updateOrInsert($insertArray);
                }
                return count($local_news);
            } else {
                $insertArray = array(
                    'industry' => ($newsType == 'industry') ? $queryString : '',
                    'node' => ($newsType == 'node') ? $queryString : '',
                    'author' => (!empty($local_news->source)) ? $local_news->source : '',
                    'title' => $local_news->title,
                    'description' => $local_news->description,
                    'url' => $local_news->link,
                    'publishedAt' => date("Y-m-d H:i:s", strtotime($local_news->pubDate))
                );
                DB::table('node_location_news')->updateOrInsert($insertArray);
                return 1;
            }
        }

        return 0;
    }
}
