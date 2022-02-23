<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Throwable  $exception
     * @return void
     *
     * @throws \Exception
     */
    public function report(Throwable $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Throwable  $exception
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Throwable
     */
    public function render($request, Throwable $exception)
    {
        if ($request->wantsJson() || ($request->Accept == 'application/json')) {   //add Accept: application/json in request
            return $this->handleApiException($request, $exception);
        }else {
            if ($exception instanceof \Illuminate\Session\TokenMismatchException) {
                return redirect()->route('admin.login');
            }
            return parent::render($request, $exception);
        }

    }

    private function handleApiException($request, $exception)
    {
        $exception = $this->prepareException($exception);

        if ($exception instanceof \Illuminate\Http\Exception\HttpResponseException) {
            $exception = $exception->getResponse();
        }

        if ($exception instanceof \Illuminate\Auth\AuthenticationException) {
            $exception = $this->unauthenticated($request, $exception);
        }

        if ($exception instanceof \Illuminate\Validation\ValidationException) {
            $exception = $this->convertValidationExceptionToResponse($exception, $request);
        }
        return $this->customApiResponse($exception);
    }

    private function customApiResponse($exception)
    {
        $response['time'] =  date('Y-m-d H:i:s');
        if(method_exists($exception, 'getMessage'))
        {
            \Log::error($exception->getMessage());
            $response['error']['message'] ='Failed to load data!';
        }
        elseif (method_exists($exception, 'getData'))
        {
            \Log::error($exception->getData()->message);
            $response['error']['message'] = 'Failed to load data!';
        }
        if (method_exists($exception, 'getStatusCode')) {
            $statusCode = $exception->getStatusCode();
        } else {
            $statusCode = 500;
        }

        $response['resultCode'] = $statusCode;

        switch ($statusCode) {
            case 401:
                $response['error']['title'] = 'UNAUTHORIZED';
                break;
            case 403:
                $response['error']['title'] = 'FORBIDDEN';
                break;
            case 404:
                $response['error']['message'] = ($exception->getMessage() == '') ? 'Page Not Found. If error persists, contact info@issuerpixel.com' :  'Failed to load data!';
                $response['error']['title'] = 'NOT_FOUND';
                break;
            case 405:
                $response['error']['title'] = 'METHOD_NOT_ALLOW';
                break;
            case 422:
                $response['errors']['title'] = $exception->original['errors'];
                break;
            default:
                $response['error']['message'] =   'Failed to load data!';
//                $response['error']['message'] = ($statusCode == 500) ? 'Whoops, looks like something went wrong' : $exception->getMessage();
                $response['error']['title'] = 'INTERNAL_SERVER_ERROR';
                break;
        }
        return response()->json($response, $statusCode);
    }
}
