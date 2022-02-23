<?php

namespace Tests;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;
    use RefreshDatabase;

    protected function signIn($user = null)
    {
        $user = $user ?? create(\App\Models\User::class);
        $this->actingAs($user);
        return $this;
    }

    public function getCreatedUser($type)
    {
        return factory(User::class)
            ->states($type)
            ->create([
                'password' => bcrypt('12345678')
            ]);
    }
}
