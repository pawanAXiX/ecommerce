<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\LogoutRequest;
use App\Services\UserService;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(LoginRequest $request): JsonResponse
    {
        $token = UserService::createAuthToken($request);
        return response()->json([
            'message' => 'Success',
            'token' => $token,
        ], 202);
    }

    public function logout(LogoutRequest $request): JsonResponse
    {
        return response()->json(UserService::revokeAuthToken($request));
    }
}


