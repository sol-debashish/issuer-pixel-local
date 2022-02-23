<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */


use App\Models\Echelon;
use Faker\Generator as Faker;


$factory->define(Echelon::class, function (Faker $faker) {
    return [
        'description' => $faker->name,
        'status' => '1',
    ];
});
