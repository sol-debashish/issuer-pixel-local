<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */


use App\Models\SubGroup;
use Faker\Generator as Faker;


$factory->define(SubGroup::class, function (Faker $faker) {
    return [
        'description' => $faker->name,
        'status' => '1',
    ];
});
