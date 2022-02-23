<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\SubEchelon;
use Faker\Generator as Faker;


$factory->define(SubEchelon::class, function (Faker $faker) {
    return [
        'description' => $faker->name,
        'status' => '1',
    ];
});
