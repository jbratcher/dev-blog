<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\User;
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

$factory->define(User::class, function (Faker $faker) {
    $image_id = $faker->numberBetween(1, 70);
    $titles = array('Web Developer', 'Software Engineer', 'Dev Ops Engineer', 'UX Designer');
    return [
        'name' => $faker->name,
        'title' => $faker->randomElement($array = $titles),
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => Str::random(10),
        'image_src' => 'https://i.pravatar.cc/100?img=' . $image_id,
        'bio' => $faker->sentence($nbWords = 6, $variableNbWords = true)
    ];
});
