<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\NewsController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\GoogleController;
use App\Http\Controllers\Api\PasswordResetController;

/*
| PUBLIC
*/
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post(
    '/forgot-password',
    [PasswordResetController::class, 'forgotPassword']
);

Route::post(
    '/reset-password',
    [PasswordResetController::class, 'resetPassword']
);
Route::get('/auth/google', [GoogleController::class, 'redirect']);

Route::get('/auth/google/callback', [GoogleController::class, 'callback']);
/*
| PROTECTED (JWT)
*/
Route::middleware('auth:api')->group(function () {

    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::get('/news', [NewsController::class, 'index']);
    Route::get('/news/{id}', [NewsController::class, 'show']);
    Route::get('/news/{id}/recommended', [NewsController::class, 'recommended']);

    Route::get('/categories', [CategoryController::class, 'index']);
});