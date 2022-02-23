<?php

namespace Tests\Feature\Admin;
use App\Models\User;
use Tests\TestCase;

class DashboardTest extends TestCase
{
    public function test_without_login_cannot_access_the_admin_dashboard()
    {
        $this->get('/admin')
        ->assertStatus(302)
        ->assertRedirect('/admin/login');
    }


    public function test_an_admin_can_access_the_admin_dashboard()
    {
        $admin = factory(User::class)
            ->states(User::SUPER_ADMIN_TYPE)
            ->create();
        $response = $this->actingAs($admin)
            ->get('/admin')
        ;
        $response
            ->assertStatus(200)
            ->assertSee('Dashboard');
    }
}
