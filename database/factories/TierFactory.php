<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */


use App\Models\Tier;
use Faker\Generator as Faker;


$factory->define(Tier::class, function (Faker $faker) {
    return [
        'description' => $faker->name,
        'status' => '1',
    ];
});
