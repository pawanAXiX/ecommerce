<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;



Route::middleware('api')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);

    Route::prefix('/v1/')->middleware('auth:sanctum')->group(function () {
        Route::resource('products', ProductController::class)->only(['index', 'show']);
    });
});
