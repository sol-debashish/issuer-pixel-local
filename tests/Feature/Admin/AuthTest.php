<?php

namespace Tests\Feature\Admin;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Tests\TestCase;
use Notification;

class AuthTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp(); // TODO: Change the autogenerated stub
        Notification::fake();
    }

    public function test_require_email_and_password_for_login()
    {
        $response = $this->post('/admin/login', []);

        $response
            ->assertSessionHasErrors('email')
            ->assertSessionHasErrors('password')
            ->assertStatus(302)
        ;
    }

    public function test_invalid_authentication()
    {
        $superAdmin = $this->getCreatedUser(User::SUPER_ADMIN_TYPE);

        $data['email'] = 'test@test.com';
        $data['password'] = '12345678';

        $response = $this->post('/admin/login', $data);

        $response
            ->assertSessionHas('errors')
            ->assertStatus(302)
        ;
    }

    public function test_user_login_successfully()
    {
        $superAdmin = $this->getCreatedUser(User::SUPER_ADMIN_TYPE);

        $data = [
            'email' => $superAdmin->email,
            'password' => '12345678',
        ];

        $response = $this->post('/admin/login', $data);
        $response->assertSessionHasNoErrors()
                ->assertStatus(302)
                ->assertRedirect('/admin');
    }

    public function test_user_logout_successfully()
    {
        $superAdmin = $this->getCreatedUser(User::SUPER_ADMIN_TYPE);

        $this->signIn($superAdmin);

        $response = $this->post('/admin/logout');
        $response->assertSessionHasNoErrors()
            ->assertStatus(302)
            ->assertRedirect('/admin/login');
    }

    public function test_displays_password_reset_request_form()
    {
        $response = $this->get('admin/password/reset');
        $response
            ->assertSee('Request new password')
            ->assertStatus(200);
    }

    public function test_sends_password_reset_email()
    {
        $user = $this->getCreatedUser(User::SUPER_ADMIN_TYPE);
        $response = $this->post('admin/password/email', ['email' => $user->email]);
        $response
            ->assertSessionHasNoErrors()
            ->assertStatus(302)
        ;
    }


    public function test_does_not_send_password_reset_email_in_invalid_email()
    {
        $response = $this->post('admin/password/email', ['email' => 'invalid@email.com']);
        $response
            ->assertStatus(302)
            ->assertSessionHas('errors')
        ;
    }


    public function test_displays_password_reset_form()
    {
        $response = $this->get('admin/password/reset/token');
        $response->assertStatus(200);
    }

    public function test_changes_a_users_password()
    {
        $adminUser = $this->getCreatedUser(User::SUPER_ADMIN_TYPE);

        $token = Password::createToken($adminUser);
        $this->post('admin/password/reset', [
            'token' => $token,
            'email' => $adminUser->email,
            'password' => '11111111',
            'password_confirmation' => '11111111'
        ]);

        $this->assertTrue(Hash::check('11111111', $adminUser->fresh()->password));
    }
}
