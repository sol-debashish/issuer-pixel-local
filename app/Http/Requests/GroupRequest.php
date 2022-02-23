<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GroupRequest extends FormRequest
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
                        'sub_sector_code' => 'required|exists:sub_sectors,code',
                        'code' => 'required|integer|unique:groups,code',
                        'description' => 'required|string',
                    ];
                    return $validate;
                }
            case 'PUT':
                {
                    $validate =  [
                        'industry_code' => 'required|exists:industries,code',
                        'sector_code' => 'required|exists:sectors,code',
                        'sub_sector_code' => 'required|exists:sub_sectors,code',
                        'code' => 'required|integer|unique:groups,code,'. $this->route('group')->id,
                        'description' => 'required|string',
                    ];
                    return $validate;
                }
            case 'PATCH':

            default:break;
        }
    }
}
