<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class IndustryRequest extends FormRequest
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
                        'description' => 'required|string|unique:industries,description',
                    ];
                    return $validate;
                }
            case 'PUT':
                {
                    $validate =  [
                        'description' => 'required|string|unique:industries,description,'.$this->route('industry')->id,
                    ];
                    return $validate;
                }
            case 'PATCH':

            default:break;
        }
    }
}
