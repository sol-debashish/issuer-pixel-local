<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use App\Traits\LoginLog;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;
    use loginLog;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo =  'admin/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function showLoginForm()
    {
        if(Str::contains(url()->previous(), 'admin'))
        {
            session()->put('from', url()->previous());
        }
        else
        {
            session()->put('from', route('admin.home'));
        }
        return view('admin.auth.login');
    }

    public function login(Request $request)
    {
        $request->validate([
            'email'=> 'required|string',
            'password' => 'required|string',
        ]);

        if(Auth::validate(['email' => $request->email, 'password' => $request->password])){
            $user = Auth::getLastAttempted();
            if($user->isAdministrator()){
                Auth::login($user, $request->has('remember'));

                $this->addLoginLog($user);
               /* tracking user logins */
                activity()
                    ->useLog('login')
                    ->performedOn($user)
                    ->causedBy($user)
                    ->log(auth()->user()->name. " login in admin panel");
                /*end tracking user logins*/

                return redirect(session()->pull('from', route('admin.home')));
//                return redirect()->intended(route('admin.home'));
            }
        }
        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.']
        ]);
    }

    public function logout(Request $request)
    {
        $user = Auth::user();
        $totalDuration = $this->addLogoutLog($user);
        /* tracking user logins */
        activity()
            ->useLog('Logout')
            ->performedOn($user)
            ->causedBy($user)
            ->log($user->name. " logout from admin panel");
        /*end tracking user logins*/

        /* tracking user duration */
        activity()
            ->useLog('User duration on platform')
            ->performedOn($user)
            ->causedBy($user)
            ->withProperties(['duration' => $totalDuration])
            ->log("total duration $totalDuration");
        /*end tracking user logins*/

        $this->guard()->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return $request->wantsJson()
            ? new Response('', 204)
            : redirect('admin/login');
    }
}
