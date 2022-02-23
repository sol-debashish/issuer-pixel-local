<?php

namespace Tests\Unit;

use Illuminate\Support\Facades\Schema;
use Tests\TestCase;

class SubTierTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */


    public function test_sub_tiers_table_has_expected_columns()
    {
        $this->assertTrue(
            Schema::hasColumns('sub_tiers', [
                'id',
                'tier_id',
                'code',
                'industry_code',
                'sector_code',
                'sub_sector_code',
                'group_code',
                'sub_group_code',
                'echelon_code',
                'sub_echelon_code',
                'tier_code',
                'description',
                'replica_id',
                'child_node_id',
                'status',
                'created_at',
                'updated_at',
            ]), 1 );
    }

}
