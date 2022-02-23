<?php

namespace Tests\Unit;

use App\Models\Echelon;
use App\Models\Group;
use App\Models\Industry;
use App\Models\Sector;
use App\Models\SubEchelon;
use App\Models\SubGroup;
use App\Models\SubSector;
use App\Models\SubTier;
use App\Models\Tier;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;

class TierTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */

    public function test_a_tier_has_sub_tier()
    {
        /*create industry*/
        $industry = factory(Industry::class)->create();
        $industry->code = generateCode(1, new Industry(), '');
        $industry->save();
        /*end create industry*/

        /*create sector*/
        $sector = factory(Sector::class)->create([
            'industry_id' => $industry->id,
            'industry_code' => $industry->code,
        ]);
        $sector->code = generateCode(1, new Sector(), $industry->code);
        $sector->save();
        /*end create sector*/

        /*create sub sector*/
        $subSector = factory(SubSector::class)->create([
            'sector_id' => $sector->id,
            'sector_code' => $sector->code,
            'industry_code' => $sector->industry_code,
        ]);
        $subSector->code = generateCode(1, new SubSector(), $sector->code);
        $subSector->save();
        /*end create sub sector*/

        /*create group*/
        $group = factory(Group::class)->create([
            'sub_sector_id' => $subSector->id,
            'sub_sector_code' => $subSector->code,
            'sector_code' => $subSector->sector_code,
            'industry_code' => $subSector->industry_code,
        ]);
        $group->code = generateCode(1, new Group(), $subSector->code);
        $group->save();
        /*end create group*/

        /*create sub group*/
        $subGroup = factory(SubGroup::class)->create([
            'group_id' => $group->id,
            'group_code' => $group->code,
            'sub_sector_code' => $group->sub_sector_code,
            'sector_code' => $group->sector_code,
            'industry_code' => $group->industry_code,
        ]);
        $subGroup->code = generateCode(1, new SubGroup(), $group->code);
        $subGroup->save();
        /*end create sub group*/

        /*create echelon*/
        $echelon = factory(Echelon::class)->create([
            'sub_group_id' => $subGroup->id,
            'sub_group_code' => $subGroup->code,
            'group_code' => $subGroup->group_code,
            'sub_sector_code' => $subGroup->sub_sector_code,
            'sector_code' => $subGroup->sector_code,
            'industry_code' => $subGroup->industry_code,
        ]);
        $echelon->code = generateCode(1, new Echelon(), $subGroup->code);
        $echelon->save();
        /*end create echelon*/

        /*create sub echelon*/
        $subEchelon = factory(SubEchelon::class)->create([
            'echelon_id' => $echelon->id,
            'echelon_code' => $echelon->code,
            'sub_group_code' => $echelon->sub_group_code,
            'group_code' => $echelon->group_code,
            'sub_sector_code' => $echelon->sub_sector_code,
            'sector_code' => $echelon->sector_code,
            'industry_code' => $echelon->industry_code,
        ]);
        $subEchelon->code = generateCode(1, new SubEchelon(), $echelon->code);
        $subEchelon->save();
        /*end create sub echelon*/

        /*create tier*/
        $tier = factory(Tier::class)->create([
            'sub_echelon_id' => $subEchelon->id,
            'sub_echelon_code' => $subEchelon->code,
            'echelon_code' => $subEchelon->echelon_code,
            'sub_group_code' => $subEchelon->sub_group_code,
            'group_code' => $subEchelon->group_code,
            'sub_sector_code' => $subEchelon->sub_sector_code,
            'sector_code' => $subEchelon->sector_code,
            'industry_code' => $subEchelon->industry_code,
        ]);
        $tier->code = generateCode(1, new Tier(), $subEchelon->code);
        $tier->save();
        /*end create tier*/

        /*create sub tier*/
        $subTier = factory(SubTier::class)->create([
            'tier_id' => $tier->id,
            'tier_code' => $tier->code,
            'sub_echelon_code' => $tier->sub_echelon_code,
            'echelon_code' => $tier->echelon_code,
            'sub_group_code' => $tier->sub_group_code,
            'group_code' => $tier->group_code,
            'sub_sector_code' => $tier->sub_sector_code,
            'sector_code' => $tier->sector_code,
            'industry_code' => $tier->industry_code,
        ]);
        $subTier->code = generateCode(1, new SubTier(), $tier->code);
        $subTier->save();
        /*end create sub tier*/

        $this->assertTrue($tier->subTier->contains($subTier));
        $this->assertEquals(1, $tier->subTier->count());
        $this->assertInstanceOf('Illuminate\Database\Eloquent\Collection', $tier->subTier);
    }

    public function test_tiers_table_has_expected_columns()
    {
        $this->assertTrue(
            Schema::hasColumns('tiers', [
                'id',
                'sub_echelon_id',
                'code',
                'industry_code',
                'sector_code',
                'sub_sector_code',
                'group_code',
                'sub_group_code',
                'echelon_code',
                'sub_echelon_code',
                'description',
                'replica_id',
                'child_node_id',
                'status',
                'created_at',
                'updated_at',
            ]), 1);
    }

}
