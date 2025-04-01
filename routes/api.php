<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Route::get('/user', function (Request $request) {
//    return $request->user();
//})->middleware('auth:sanctum');

//Route::middleware('api')->group(function(){
//
//});
//Route::prefix('/v1/')->middleware(['api','auth:sanctum'])->group(function () {
//        Route::resource('products', ProductController::class,['only'=>['index','show']]);
//
//});

Route::middleware('api')->group(function () {
    Route::post('/login',[AuthController::class,'login']);

    Route::prefix('/v1/')->middleware('auth:sanctum')->group(function () {
        Route::resource('products', ProductController::class)->only(['index','show']);
    });
});
