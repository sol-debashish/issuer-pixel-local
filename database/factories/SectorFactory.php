<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Sector;
use Faker\Generator as Faker;
use Illuminate\Support\Str;



$factory->define(Sector::class, function (Faker $faker) {
    return [
        'description' => $faker->name,
        'status' => '1',
    ];
});
