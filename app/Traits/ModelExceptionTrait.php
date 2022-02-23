<?php

namespace App\Traits;

use Illuminate\Support\Str;

trait ModelExceptionTrait
{
    /**
     * return error response.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendError($error, $errorMessages, $code = 404)
    {
        $response = [
            'resultCode' => $code,
            'time' => date('Y-m-d H:i:s'),
        ];

        $response['error'] = [
            'title' => $error,
            'message' => $errorMessages,
        ];
        return response()->json($response, $code);
    }
}
