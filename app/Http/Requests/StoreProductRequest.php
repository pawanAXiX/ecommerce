<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
//    protected $redirect='/api/v1/error';
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {

        return [
            'name' => ['required', 'string'],
            'description' => ['string'],
            'price' => ['required', 'numeric'],
            'quantity' => ['required', 'numeric'],
            'category_id' => ['required', 'exists:categories,id', 'numeric'],
            'size' => ['required', 'string'],
            'image' => ['image', 'mimes:jpeg,png,jpg,gif,svg'],
            'color' => ['required', 'string'],
        ];
    }


}
