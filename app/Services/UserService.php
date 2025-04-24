<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class UserService
{
    /** @throws ValidationException */
    public static function createAuthToken($request): string|null
    {
        $user = User::all()->where('email', $request->email)->first();

        if (!Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages(['password' => 'Password is Incorrect']);
        }
        return $user->createToken('auth_token')->plainTextToken;
    }

    public static function revokeAuthToken($request): array
    {
        if ($request->user()->token()->revoke())
            return ['message' => 'Token revoked'];
        else
            return ['message' => 'Server was unable to revoke'];
    }
}

