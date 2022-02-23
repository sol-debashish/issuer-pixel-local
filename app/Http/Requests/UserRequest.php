<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        switch($this->method())
        {

            case 'GET':
            case 'DELETE':
                {
                    return [];
                }
            case 'POST':
                {
                    $validate =  [
                        'first_name' => 'required|string|max:191',
                        'last_name' => 'required|string|max:191',
                        'email' => 'required|email|max:191|unique:users',
                        'password' => 'required|string|min:6|confirmed',
                        'role' => 'required|in:Admin,Data Analysis,View-Only Admin,Customer Support',
                    ];
                    return $validate;
                }
            case 'PUT':
                {
                    $validate =  [
                        'first_name' => 'required|string|max:191',
                        'last_name' => 'required|string|max:191',
                        'email' => 'email|max:191|unique:users,email,'.$this->user->id,
                        'status' => 'required',
//                        'role' => 'required|in:Admin,Data Analysis,View-Only Admin',
                    ];

                    return $validate;
                }
            case 'PATCH':

            default:break;
        }
    }
}
