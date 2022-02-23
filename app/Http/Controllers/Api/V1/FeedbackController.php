<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Feedback;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Str;
use Validator;

class FeedbackController extends BaseController
{
    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'review' => 'required',
                'reviewer_name' => 'required',
                'reviewer_email' => 'required|email',
                'rating' => 'required|numeric|gt:0',

            ], [
                'review.required' => 'Comment required',
                'reviewer_name.required' => 'Name required',
                'reviewer_email.required' => 'Email required',
                'rating.gt' => 'Please select rating',
            ]);
            if($validator->fails()){
                $error  = $validator->errors()->first();
                return $this->sendError('FIELDS_VALIDATION_ERROR', $error, Response::HTTP_UNPROCESSABLE_ENTITY);
            }

//            if (Feedback::where('ip', $request->ip())->where('url', $request->url)->exists()) {
//                return $this->sendError('FIELDS_VALIDATION_ERROR', "You already review", Response::HTTP_UNPROCESSABLE_ENTITY);
//            }
            $user = new User();
            if(auth()->check())
            {
                $user = auth()->user();
            }

            $data = [
                'user_id' => $user->id ?? null,
                'ip' => $request->ip(),
                'url' => $request->url,
                'rating' => $request->rating,
                'review' => Str::limit($request->review, 2000) ,
                'reviewer_name' => $request->reviewer_name,
                'reviewer_email' => $request->reviewer_email,
            ];
            (new Feedback())->addFeedback($data);

            /* activity log */
            $logDescription = "{$request->reviewer_name}|{$request->reviewer_email}| add a feedback on ". date('m/d/Y H:i:s');
            activity()
                ->useLog('Add Feedback')
                ->performedOn($user)
                ->causedBy($user)
                ->log($logDescription);
            /* end activity log */

            return $this->sendResponse([], 'Your Feedback was Submitted, Thank You!');

        } catch (Exception $ex) {
            return $this->sendError('error', 'Operation Failed!', Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
