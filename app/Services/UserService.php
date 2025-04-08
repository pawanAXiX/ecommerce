<?php
namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserService
{
    public static function createAuthToken($request):string|null{
        $user=User::all()->where('email',$request->email)->first();
        if(!Hash::check($request->password,$user->password)){
            return null;
        }
        return $user->createToken('auth_token')->plainTextToken;
    }

    public static function revokeAuthToken($request){
        if($request->user()->token()->revoke())
            return ['message'=>'Token revoked'];
        else
            return ['message'=>'Server was unable to revoke'];
    }
}

