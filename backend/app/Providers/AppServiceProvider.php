<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\AuthenticationException;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */


public function boot(): void
{
    Auth::shouldUse('api');

    app('router')->middlewareGroup('api', [
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
    ]);
}
}
