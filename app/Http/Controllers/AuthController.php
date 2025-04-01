<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Services\UserService;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(LoginRequest $request){
        $token=UserService::createAuthToken($request);
        if(is_null($token)){
            return response()->json([
                'message'=>'Password is Incorrect',
            ]);
        }
        return response()->json([
            'message'=>'Success',
            'token'=>$token,
        ],202);
    }
}


