<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */


use App\Models\SubTier;
use Faker\Generator as Faker;


$factory->define(SubTier::class, function (Faker $faker) {
    return [
        'description' => $faker->name,
        'status' => '1',
    ];
});
