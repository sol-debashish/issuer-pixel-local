<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class HomeController extends BaseController
{
    public function featuredCompany(){
        try {

            $featuredCompanyData = [
                ['title' => 'What\'s your story', 'company' => 'Lux Industries', 'view' => '13K', 'date' => 'Published Sep 2020', 'photoUrl' => 'images/video_thumb_1.jpg'],
                ['title' => 'Know Your charts', 'company' => 'Graphs Express', 'view' => '19K', 'date' => 'Publieshed Sep 2018', 'photoUrl' => 'images/video_thumb_2.jpg'],
                ['title' => 'Biz Atire INC.', 'company' => 'Our Process', 'view' => '69K', 'date' => 'Publieshed Jun 2019', 'photoUrl' => 'images/video_thumb_3.jpg'],
            ];
//            $i = 0;
//            foreach($data as $featuredCompanyData)
//            {
//                $featuredCompany[$i]['title'] = "What's your story {$i}";
//                $featuredCompany[$i]['company'] = "Lux Industries {$i}";
//                $i++;
//            }
            return $this->sendResponse($featuredCompanyData, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
    public function recommandedCompany(){
        try {

            $recommandedCompany = [
                ['title' => 'What\'s your story', 'company' => 'Lux Industries', 'view' => '13K', 'date' => 'Published Sep 2020', 'photoUrl' => 'images/video_thumb_1.jpg'],
                ['title' => 'Know Your charts', 'company' => 'Graphs Express', 'view' => '19K', 'date' => 'Publieshed Sep 2018', 'photoUrl' => 'images/video_thumb_2.jpg'],
                ['title' => 'Biz Atire INC.', 'company' => 'Our Process', 'view' => '69K', 'date' => 'Publieshed Jun 2019', 'photoUrl' => 'images/video_thumb_3.jpg'],
                ['title' => 'Biz Atire INC.', 'company' => 'Our Process', 'view' => '55K', 'date' => 'Publieshed Jun 2019', 'photoUrl' => 'images/video_thumb_3.jpg'],
            ];
//            $i = 0;
//            foreach($data as $featuredCompanyData)
//            {
//                $featuredCompany[$i]['title'] = "What's your story {$i}";
//                $featuredCompany[$i]['company'] = "Lux Industries {$i}";
//                $i++;
//            }
            return $this->sendResponse($recommandedCompany, 'Data found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError($ex->getMessage(), $ex->getMessage(), Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
