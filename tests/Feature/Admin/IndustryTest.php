<?php

namespace Tests\Feature\Admin;
use App\Models\Industry;
use App\Models\User;
use Tests\TestCase;

class IndustryTest extends TestCase
{
    public function test_without_login_cannot_access_the_industry_module()
    {
        $this->get('admin/industry')
        ->assertStatus(302)
        ->assertRedirect('/admin/login');
    }


    public function test_an_admin_can_access_the_industry_module()
    {
        $this->signIn($this->getCreatedUser(User::SUPER_ADMIN_TYPE));
        $response = $this->get('admin/industry');
            $response->assertStatus(200)
            ->assertSee('Industry Management');
    }

    public function test_get_industry_list()
    {
        $this->signIn( $this->getCreatedUser(User::SUPER_ADMIN_TYPE));

        $this->json('GET', route('admin.industry.index'), [], ['HTTP_X-Requested-With' => 'XMLHttpRequest'])
            ->assertStatus(200)
            ->assertJsonStructure([
                'draw',
                'input',
                'queries',
                'data' => []
            ]);
        ;
    }

    public function test_create_new_industry()
    {
        $this->signIn($this->getCreatedUser(User::SUPER_ADMIN_TYPE));
        $industry = factory(Industry::class)->raw();
        $response = $this->post(route('admin.industry.store'), $industry);
        $response->assertSessionHasNoErrors()
            ->assertStatus(200)
            ->assertJson([
                "msg" => "successfully created!",
                "status" => "success"
            ]);
    }

    public function test_update_an_industry()
    {
        $this->signIn($this->getCreatedUser(User::SUPER_ADMIN_TYPE));

        $industry = factory(Industry::class)->create();

        $attribute = [
            'description' => 'edited industry',
            'status' => '1',
        ];

        $this->put(route('admin.industry.update', $industry->id), $attribute)
            ->assertRedirect('/admin/industry')
            ->assertStatus(302)
            ->assertSessionHasNoErrors()
        ;

        $this->assertEquals($attribute['description'], $industry->fresh()->description);
    }
}
