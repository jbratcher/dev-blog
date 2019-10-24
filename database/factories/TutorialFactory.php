<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Tutorial;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Tutorial::class, function (Faker $faker) {
    $title = $faker->sentence($nbWords = 6, $variableNbWords = true);
    $body = $faker->paragraph($nbSentences = 3, $variableNbSentences = true);
    $image_id = $faker->numberBetween(1000, 1084);
    return [
        'title' => $title,
        'body' => $body,
        'image_src' => 'https://picsum.photos/id/' . $image_id . '/600/300',
        'intro' => Str::words($body, 12, '...'),
        'slug'=> preg_replace("/\s/", "-", $title),
    ];
});
