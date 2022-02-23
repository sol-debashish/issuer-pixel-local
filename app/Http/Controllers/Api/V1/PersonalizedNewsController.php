<?php

namespace App\Http\Controllers\Api\V1;

use App\Models\CategorizationLevel;
use App\Models\CompanyCategorizationLookup;
use App\Models\Industry;
use Exception;
use SimpleXMLElement;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Pagination\Paginator;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Pagination\LengthAwarePaginator;
use App\Traits\NodeMap;
use Illuminate\Support\Facades\DB;

class PersonalizedNewsController extends BaseController
{
    use NodeMap;

    public function getCompanyIndustries()
    {
        $companyId = auth()->user()->company_id;
        try {
            $data = Industry::leftJoin('company_categorization_lookups', 'company_categorization_lookups.industry_id', '=', 'industries.id')
                ->where(['company_categorization_lookups.company_id' => $companyId, 'industries.status' => 1, 'industries.publish_status' => 1])
                ->select('industries.id', 'industries.description', 'company_categorization_lookups.id as lookup_id', 'company_categorization_lookups.categorization_level_id as categorization_level_id')->get()
                ->toArray();

            $result = uniqueSameHierarchyData($data, 'categorization_level_id');
            return $this->sendResponse($result, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getCompanyNodes()
    {
        $companyId = auth()->user()->company_id;
        $lookupsData = CompanyCategorizationLookup::where(['company_id' => $companyId])->orderBy('order')->get();
        $hierarchyData = [];
        foreach ($lookupsData as $row) {
            $catLevel = CategorizationLevel::findOrFail($row->categorization_level_id);
            $NodeType = $this->findNodeMapKeyByModel($catLevel->name);
            $lastNodemapData = $this->getNodeMap($NodeType);
            $lastlevelNamespace = "App\\Models\\" . $lastNodemapData['model'];
            $industry['categorization_id'] = $row->id;
            $lastLevelData = $lastlevelNamespace::whereId($row->node_id)->get(['description', 'id'])->first();
            $hierarchyData[] = $lastLevelData;
        }
        $temp = array_unique(array_column($hierarchyData, 'description'));
        $result = array_intersect_key($hierarchyData, $temp);
        return $this->sendResponse(array_values($result), 'Data found successfully.', 200);
    }

    public function getIndustryNodeRelatedNews($search_text)
    {
        $location = urlencode(auth()->user()->company->headquarters->address->city);
        $source_name = '';

        $data = [];
        $searchText = urlencode($search_text);
        $news_url = "https://newsapi.org/v2/everything?q=chicago&from=2021-07-31&sortBy=publishedAt&apiKey=42e08053b1e14320ae08761bd3321cbd";
        //$news_url = "https://news.google.com/news/rss/search?q=$searchText/section/geo/$location";
        //$news_url = "https://news.google.com/news/rss/search?q=$searchText+after:2021-00-01+before:2021-07-15/section/geo/$location";
        //$news_url = "https://news.google.com/rss/search?q=$searchText/section/geo/$location";

        $get_news_url_content = file_get_contents($news_url);
        $get_news_url_content = str_replace(array("\n", "\r", "\t"), '', $get_news_url_content);
        $get_news_url_content = trim(str_replace('"', "'", $get_news_url_content));

        $news_xml_data = simplexml_load_string($get_news_url_content);

        $encoded_data = json_encode($news_xml_data);
        $prepared_response_data = json_decode($encoded_data);

        $local_news = $prepared_response_data->channel;

        // news data processing
        // xml data return within channel as item node OR
        // only within channel without item node

        if (property_exists($local_news, 'item')) {
            $local_news = $prepared_response_data->channel->item;
            $date_six_month_ago = date('Y-m-d', strtotime('-180 days', time()));
            foreach ($local_news as $key => $news) {
                //if (strpos(strtolower($news->title), strtolower($searchText))) {
                if (date('Y-m-d', strtotime($news->pubDate)) > $date_six_month_ago) {
                    $data['allNews'][] = [
                        'title' => $news->title,
                        'description' => $news->description,
                        'link' => $news->link,
                        'pubDate' => date('m/d/Y', strtotime($news->pubDate)),
                        'source' => $news->source,
                    ];
                }
                //}
            }
        } else {
            $data['allNews'][] = [
                'title' => $local_news->title,
                'description' => $local_news->description,
                'link' => $local_news->link,
                'pubDate' => date('m/d/Y', strtotime($local_news->lastBuildDate)),
                'source' => $source_name ?? ''
            ];
        }
        try {
            //prepare json response
            return $this->sendResponse($data, 'Success', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

//     public function getNews($search_text)
//     {
// //        $location = 'US';
// //        $location = urlencode(auth()->user()->company->headquarters->address->states->name);
//         $location = urlencode(auth()->user()->company->headquarters->address->city);
//         $source_name = '';

//         $data = [];
//         $searchText = urlencode($search_text);

//         $news_url = "https://news.google.com/news/rss/search?q=$searchText/section/geo/$location";
// //        $news_url = "https://news.google.com/news/rss/search?q=$searchText+after:2021-00-01+before:2021-07-15/section/geo/$location";
//         //$news_url = "https://news.google.com/rss/search?q=$searchText/section/geo/$location";

//         $get_news_url_content = file_get_contents($news_url);
//         $get_news_url_content = str_replace(array("\n", "\r", "\t"), '', $get_news_url_content);
//         $get_news_url_content = trim(str_replace('"', "'", $get_news_url_content));

//         $news_xml_data = simplexml_load_string($get_news_url_content);

//         $encoded_data = json_encode($news_xml_data);
//         $prepared_response_data = json_decode($encoded_data);

//         $local_news = $prepared_response_data->channel;

//         // news data processing
//         // xml data return within channel as item node OR
//         // only within channel without item node

//         if (property_exists($local_news, 'item')) {
//             $local_news = $prepared_response_data->channel->item;
//             $date_six_month_ago = date('Y-m-d', strtotime('-180 days', time()));
//             foreach ($local_news as $key => $news) {
//                 //if (strpos(strtolower($news->title), strtolower($searchText))) {
//                 if (date('Y-m-d', strtotime($news->pubDate)) > $date_six_month_ago) {
//                     $data['allNews'][] = [
//                         'title' => $news->title,
//                         'description' => $news->description,
//                         'link' => $news->link,
//                         'pubDate' => date('m/d/Y', strtotime($news->pubDate)),
//                         'source' => $news->source,
//                     ];
//                 }
//                 //}
//             }
//         } else {
//             $data['allNews'][] = [
//                 'title' => $local_news->title,
//                 'description' => $local_news->description,
//                 'link' => $local_news->link,
//                 'pubDate' => date('m/d/Y', strtotime($local_news->lastBuildDate)),
//                 'source' => $source_name ?? ''
//             ];
//         }
//         try {
//             //prepare json response
//             return $this->sendResponse($data, 'Success', 200);
//         } catch (Exception $ex) {
//             return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
//         }
//     }

    public function getNews($search_text, $newsType)
    {
        $data = [];
        $searchText = urlencode($search_text);
        $local_news = DB::table('node_location_news')
            ->where($newsType, $searchText)
            ->orderBy('publishedAt', 'desc')
            ->limit(20)
            ->get();

        foreach ($local_news as $key => $news) {
            $data['allNews'][] = [
                'title' => $news->title,
                'description' => $news->description,
                'link' => $news->url,
                'pubDate' => date('F jS Y', strtotime($news->publishedAt)),
                'source' => $news->author,
                'imageUrl' => $news->urlToImage
            ];
        }

        try {
            //prepare json response
            return $this->sendResponse($data, 'Success', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function getDashboardNews()
    {
        $industryData = Industry::whereId(auth()->user()->company->industry_id)->first();
        if ($industryData) {
            $industryName = $industryData->description;
        } else {
            $companyData = CompanyCategorizationLookup::where('company_id', auth()->user()->company->id)->first();
            if ($companyData) {
                $industryData = Industry::whereId($companyData->industry_id)->first();
                $industryName = $industryData->description;
            } else {
                $industryName = "No Industry"; // Set default for without industry company
            }

        }
        $data = [];
        $local_news = DB::table('node_location_news')
            ->where('industry', '!=', '')
            ->where('industry', urlencode($industryName))
            ->orderBy('publishedAt', 'desc')
            ->limit(3)
            ->get();

        foreach ($local_news as $key => $news) {
            $data['allNews'][] = [
                'title' => $news->title,
                'description' => $news->description,
                'link' => $news->url,
                'pubDate' => date('F jS Y', strtotime($news->publishedAt)),
                'source' => $news->author,
                'imageUrl' => $news->urlToImage
            ];
        }

        try {
            //prepare json response
            return $this->sendResponse($data, 'Success', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    // $newsObj= collect($local_news);
    // $data = $this->paginate($newsObj);

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public function paginate($items, $perPage = 5, $page = null, $options = [])
    {
        $page = $page ?: (Paginator::resolveCurrentPage() ?: 1);
        $items = $items instanceof Collection ? $items : Collection::make($items);
        return new LengthAwarePaginator($items->forPage($page, $perPage), $items->count(), $perPage, $page, $options);
    }
}
