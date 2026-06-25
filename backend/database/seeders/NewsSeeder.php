<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\News;

class NewsSeeder extends Seeder
{
    public function run(): void
    {
        News::insert([

            [
                'category_id' => 1,
                'title' => 'Laravel 12 mejora el rendimiento',
                'image' => 'https://picsum.photos/800/400?1',
                'summary' => 'Laravel 12 presenta mejoras significativas.',
                'body' => 'Contenido completo de la noticia Laravel.',
                'published_at' => now(),
                'created_at' => now(),
                'updated_at' => now()
            ],

            [
                'category_id' => 1,
                'title' => 'React sigue liderando el frontend',
                'image' => 'https://picsum.photos/800/400?2',
                'summary' => 'React continúa creciendo.',
                'body' => 'Contenido completo sobre React.',
                'published_at' => now(),
                'created_at' => now(),
                'updated_at' => now()
            ],

            [
                'category_id' => 2,
                'title' => 'Final del campeonato nacional',
                'image' => 'https://picsum.photos/800/400?3',
                'summary' => 'Gran final deportiva.',
                'body' => 'Contenido completo de deportes.',
                'published_at' => now(),
                'created_at' => now(),
                'updated_at' => now()
            ],

            [
                'category_id' => 3,
                'title' => 'Nuevo debate presidencial',
                'image' => 'https://picsum.photos/800/400?4',
                'summary' => 'Debate presidencial genera expectativa.',
                'body' => 'Contenido completo de política.',
                'published_at' => now(),
                'created_at' => now(),
                'updated_at' => now()
            ],

            [
                'category_id' => 4,
                'title' => 'Mercados muestran recuperación',
                'image' => 'https://picsum.photos/800/400?5',
                'summary' => 'Los mercados presentan crecimiento.',
                'body' => 'Contenido completo de economía.',
                'published_at' => now(),
                'created_at' => now(),
                'updated_at' => now()
            ]

        ]);
    }
}