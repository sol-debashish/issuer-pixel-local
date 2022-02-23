<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SubSectorRequest extends FormRequest
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
                        'sector_code' => 'required|exists:sectors,code',
                        'code' => 'required|integer|unique:sub_sectors,code',
                        'description' => 'required|string',
                    ];
                    return $validate;
                }
            case 'PUT':
                {
                    $validate =  [
                        'industry_code' => 'required|exists:industries,code',
                        'sector_code' => 'required|exists:sectors,code',
                        'code' => 'required|integer|unique:sub_sectors,code,'. $this->route('sub_sector')->id,
                        'description' => 'required|string',
                    ];
                    return $validate;
                }
            case 'PATCH':

            default:break;
        }
    }
}
