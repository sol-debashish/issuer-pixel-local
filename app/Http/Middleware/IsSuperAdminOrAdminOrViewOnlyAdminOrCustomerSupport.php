<?php

namespace App\Http\Middleware;

use Closure;

class IsSuperAdminOrAdminOrViewOnlyAdminOrCustomerSupport
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(! auth()->check())
        {
            if($request->expectsJson()){
                return response()->json('Invalid authorization', 401);
            }
            else{
                return redirect()->route('admin.login');
            }
        }
        if(!auth()->user()->IsSuperAdminOrAdminOrViewOnlyAdminOrCustomerSupport()) {
            return redirect()->to('/');
        }
        return $next($request);
    }
}
