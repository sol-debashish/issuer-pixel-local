<?php

use Illuminate\Database\Seeder;

class SubSectorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Models\SubSector::class)->create();
    }
}
