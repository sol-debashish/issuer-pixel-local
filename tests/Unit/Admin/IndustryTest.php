<?php

namespace Tests\Unit;

use App\Models\Industry;
use App\Models\Sector;
use Illuminate\Support\Facades\Schema;
use Tests\TestCase;

class IndustryTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */

    public function test_an_industry_has_sector()
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


        $this->assertTrue($industry->sector->contains($sector));
        $this->assertInstanceOf('Illuminate\Database\Eloquent\Collection', $industry->sector);
    }

    public function test_industry_table_has_expected_columns()
    {
        $this->assertTrue(
            Schema::hasColumns('industries', [
                'id',
                'code',
                'description',
                'status',
                'created_at',
                'updated_at',
            ]), 1);
    }
}
