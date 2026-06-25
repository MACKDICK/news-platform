<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\News;

class NewsController extends Controller
{
    public function index()
    {
        return News::with('category')->take(5)->get();
    }

    public function show($id)
    {
        return News::with('category')->findOrFail($id);
    }

    public function recommended($id)
{
    $news = \App\Models\News::findOrFail($id);

    return \App\Models\News::where('category_id', $news->category_id)
        ->where('id', '!=', $id)
        ->latest()
        ->take(3)
        ->get();
}
}