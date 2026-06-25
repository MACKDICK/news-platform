<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        Category::insert([
            [
                'name' => 'Tecnología',
                'description' => 'Noticias tecnológicas',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Deportes',
                'description' => 'Noticias deportivas',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Política',
                'description' => 'Noticias políticas',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Economía',
                'description' => 'Noticias económicas',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Internacional',
                'description' => 'Noticias internacionales',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);
    }
}