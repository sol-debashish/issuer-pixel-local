<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */


use App\Models\SubSector;
use Faker\Generator as Faker;


$factory->define(SubSector::class, function (Faker $faker) {
    return [
        'description' => $faker->name,
        'status' => '1',
    ];
});
