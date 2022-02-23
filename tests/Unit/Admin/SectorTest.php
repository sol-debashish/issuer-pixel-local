<?php

namespace Tests\Unit;

use App\Models\Industry;
use App\Models\Sector;
use App\Models\SubSector;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;

class SectorTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */

    public function test_a_sector_has_sub_sector()
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


        $this->assertTrue($sector->subSector->contains($subSector));
        $this->assertInstanceOf('Illuminate\Database\Eloquent\Collection', $sector->subSector);
    }

    public function test_sector_table_has_expected_columns()
    {
        $this->assertTrue(
            Schema::hasColumns('sectors', [
                'id',
                'industry_id',
                'code',
                'industry_code',
                'description',
                'replica_id',
                'child_node_id',
                'status',
                'created_at',
                'updated_at',
            ]), 1);
    }
}
