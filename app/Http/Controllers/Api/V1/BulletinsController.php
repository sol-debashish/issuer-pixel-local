<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Bulletin;

class BulletinsController extends BaseController
{
    public function getBulletins(Request $request) {
        try {
            $bulletins = Bulletin::active()
                ->orderBy('is_sticky','DESC')
                ->orderBy('id', 'DESC')
                ->get();
                
            $charLimit = 400;

            foreach($bulletins as $key => $bulletin) {
                $bulletin->longDescription = $bulletin->description;
                $bulletin->shortDescription = substr($bulletin->description, 0, $charLimit);
                $bulletin->bulletinVisibility = ((string)$key == $request->bulletinIndex) ? true : false;
                $bulletin->isLong = (strlen($bulletin->description) > $charLimit) ? true : false;
                $bulletin->createdAt = date('F jS Y', strtotime($bulletin->created_at));
            }

            $data = [
                'bulletins' => $bulletins
            ];

            return $this->sendResponse($data, 'Found successfully.', 200);
        } catch (Exception $ex) {
            return $this->sendError('Operation Failed!', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
