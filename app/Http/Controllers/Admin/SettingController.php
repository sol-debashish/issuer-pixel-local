<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class SettingController extends Controller
{
    public function changePassword()
    {
        return view('admin.settings.change_password');
    }
    public function storeChangePassword(Request $request)
    {
        $request->validate([
            'current_password' => 'required',
            'password' => 'required|string|min:6|confirmed',
            'password_confirmation' => 'required',
        ]);

        $user = Auth::user();

        if (!Hash::check($request->current_password, $user->password)) {
            return redirect()->route('admin.change.password')->withInput()->withErrors(['current_password' => 'Current password does not match!']);
        }

        $user->password = bcrypt($request->password);
        $user->save();

        $notification = array(
            'message' => 'You have successfully changed your password.',
            'alert-type' => 'success'
        );
        return back()->with($notification);
    }
}
