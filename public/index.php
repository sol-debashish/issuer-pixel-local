<?php

/**
 * Laravel - A PHP Framework For Web Artisans
 *
 * @package  Laravel
 * @author   Taylor Otwell <taylor@laravel.com>
 */

define('LARAVEL_START', microtime(true));

/*
|--------------------------------------------------------------------------
| Register The Auto Loader
|--------------------------------------------------------------------------
|
| Composer provides a convenient, automatically generated class loader for
| our application. We just need to utilize it! We'll simply require it
| into the script here so that we don't have to worry about manual
| loading any of our classes later on. It feels great to relax.
|
*/

require __DIR__.'/../vendor/autoload.php';

/*
|--------------------------------------------------------------------------
| Turn On The Lights
|--------------------------------------------------------------------------
|
| We need to illuminate PHP development, so let us turn on the lights.
| This bootstraps the framework and gets it ready for use, then it
| will load up this application so that we can run it and send
| the responses back to the browser and delight our users.
|
*/

$app = require_once __DIR__.'/../bootstrap/app.php';

/* server lock functionality start */
//dev.issuerpixel.com
if('dev.issuerpixel.com' == $_SERVER['SERVER_NAME'])
{
    $username = 'issuerpixeldev';
    $pass = 'Controlroom9!';
//    $pass = 'samemudsameblood';
    if( (@$_GET['username'] === $username && @$_GET['password'] === $pass ) || @$_COOKIE['password'] == $pass ) {
        if( @$_COOKIE['password'] !== $pass ) {
            setcookie('password', $pass, time() + ( 365 * 24 * 60 * 60), '/');
        }
    } else {
        header('HTTP/1.1 503 Service Temporarily Unavailable');
        header('Status: 503 Service Temporarily Unavailable');
        header('Retry-After: 300');//300 seconds
        $file =  file_get_contents(public_path() . '/dev-lockup.php');
        if(@$_GET['username']):
            $value_to_add = "<h4>Incorrect credentials</h4>";
            $file = str_replace('<?php echo "error" ?>', "$value_to_add", $file);
        endif;
        echo $file;
        exit();
    }
}
/* server lock functionality end */

/*
|--------------------------------------------------------------------------
| Run The Application
|--------------------------------------------------------------------------
|
| Once we have the application, we can handle the incoming request
| through the kernel, and send the associated response back to
| the client's browser allowing them to enjoy the creative
| and wonderful application we have prepared for them.
|
*/

$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
);

$response->send();

$kernel->terminate($request, $response);
