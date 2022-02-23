<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Industry;
use Faker\Generator as Faker;
use Illuminate\Support\Str;



$factory->define(Industry::class, function (Faker $faker) {
    return [
        'description' => $faker->name,
        'status' => '1',
    ];
});
