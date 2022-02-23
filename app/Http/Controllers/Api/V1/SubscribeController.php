<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Subscriber;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Str;
use Validator;

class SubscribeController extends BaseController
{
    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'email' => 'required|email',

            ],
                [
                'email.required' => 'Email required',
            ]);
            if($validator->fails()){
                $error  = $validator->errors()->first();
                return $this->sendError('FIELDS_VALIDATION_ERROR', $error, Response::HTTP_UNPROCESSABLE_ENTITY);
            }

            if (Subscriber::where('email', $request->email)->exists()) {
                return $this->sendError('FIELDS_VALIDATION_ERROR', "You already Subscribed", Response::HTTP_UNPROCESSABLE_ENTITY);
            }
            $data = [
                'email' => $request->email,
            ];
            (new Subscriber())->addSubscriber($data);

            return $this->sendResponse([], 'Subscribed successfully, Thank You!');

        } catch (Exception $ex) {
            return $this->sendError('error', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
