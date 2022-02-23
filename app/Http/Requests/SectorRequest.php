<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SectorRequest extends FormRequest
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
                        'industry_code' => 'required|exists:industries,code',
                        'code' => 'required|integer|unique:sectors,code',
                        'description' => 'required|string',
                    ];
                    return $validate;
                }
            case 'PUT':
                {
                    $validate =  [
                        'industry_code' => 'required|exists:industries,code',
                        'code' => 'required|integer|unique:sectors,code,'. $this->route('sector')->id,
                        'description' => 'required|string',
                    ];
                    return $validate;
                }
            case 'PATCH':

            default:break;
        }
    }
}
