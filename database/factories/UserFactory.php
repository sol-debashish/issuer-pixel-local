<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

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
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => Str::random(10),
    ];
});

$factory->state(User::class,  User::SUPER_ADMIN_TYPE, [
    'role' => User::SUPER_ADMIN_TYPE,
]);

$factory->state(User::class,  User::ADMIN_TYPE, [
    'role' => User::ADMIN_TYPE,
]);

$factory->state(User::class,  User::INVESTOR_TYPE, [
    'role' => User::INVESTOR_TYPE,
]);

$factory->state(User::class,  User::COMPANY_TYPE, [
    'role' => User::COMPANY_TYPE,
]);
