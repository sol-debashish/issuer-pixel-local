<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BulletinRequest extends FormRequest
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
                        'title' => 'required|string|max:191',
                        'description' => 'required|string',
                        'image' => 'mimes:jpeg,jpg,png,gif|max:5000',
                    ];
                    return $validate;
                }
            case 'PUT':
                {
                    $validate =  [
                        'title' => 'required|string|max:191',
                        'description' => 'required|string',
                        'image' => 'mimes:jpeg,jpg,png,gif|max:5000',
                        'status' => 'required',
                    ];

                    return $validate;
                }
            case 'PATCH':

            default:break;
        }
    }
}
