<?php

namespace Tests\Unit;

use App\Models\Echelon;
use App\Models\Group;
use App\Models\Industry;
use App\Models\Sector;
use App\Models\SubGroup;
use App\Models\SubSector;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;

class SubGroupTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */

    public function test_a_sub_group_has_echelon()
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

        $this->assertTrue($subGroup->echelon->contains($echelon));
        $this->assertInstanceOf('Illuminate\Database\Eloquent\Collection', $subGroup->echelon);
    }

    public function test_sub_groups_table_has_expected_columns()
    {
        $this->assertTrue(
            Schema::hasColumns('sub_groups', [
                'id',
                'group_id',
                'code',
                'industry_code',
                'sector_code',
                'sub_sector_code',
                'group_code',
                'description',
                'replica_id',
                'child_node_id',
                'status',
                'created_at',
                'updated_at',
            ]), 1);
    }

}
