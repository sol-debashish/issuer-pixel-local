<?php

namespace Tests\Unit;

use App\Models\User;
use Tests\TestCase;

class UserTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_check_super_admin_user_type()
    {
        $adminUser = $this->getCreatedUser( User::SUPER_ADMIN_TYPE);
        $this->assertTrue($adminUser->isSuperAdmin());
    }

    public function test_check_investor_user_type()
    {
        $adminUser = $this->getCreatedUser( User::INVESTOR_TYPE);
        $this->assertTrue($adminUser->isInvestor());
    }

    public function test_check_company_user_type()
    {
        $adminUser = $this->getCreatedUser( User::COMPANY_TYPE);
        $this->assertTrue($adminUser->isCompany());
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
