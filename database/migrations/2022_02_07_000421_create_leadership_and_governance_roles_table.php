<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLeadershipAndGovernanceRolesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('leadership_and_governance_roles', function (Blueprint $table) {
            $table->id();
            $table->string('type', 50);
            $table->string('name', 255);
            $table->timestamps();
        });

        DB::table('leadership_and_governance_roles')->insert([
            [
                'type' => 'board_committee',
                'name' => 'Executive Committee'
            ],
            [
                'type' => 'board_committee',
                'name' => 'Audit Committee'
            ],
            [
                'type' => 'board_committee',
                'name' => 'Governance Committee'
            ],
            [
                'type' => 'board_committee',
                'name' => 'Finance Committee'
            ],
            [
                'type' => 'board_committee',
                'name' => 'Membership Committee'
            ],
            [
                'type' => 'board_committee',
                'name' => 'Program Committee'
            ],
            [
                'type' => 'board_committee',
                'name' => 'By Laws Committee'
            ],
            [
                'type' => 'board_committee',
                'name' => 'Capital Campaign Committee'
            ],
            [
                'type' => 'board_committee',
                'name' => 'Strategic Planning Committee'
            ],
            [
                'type' => 'board_committee',
                'name' => 'Other Committee'
            ],
            [
                'type' => 'executive_role',
                'name' => 'Chief Operating Officer (COO)'
            ],
            [
                'type' => 'executive_role',
                'name' => 'Chief Compliance Officer (CCO)'
            ],
            [
                'type' => 'executive_role',
                'name' => 'Chief Human Resources Manager (CHRM)'
            ],
            [
                'type' => 'executive_role',
                'name' => 'Chief Security Officer (CSO)'
            ],
            [
                'type' => 'executive_role',
                'name' => 'Chief Green Officer (CGO)'
            ],
            [
                'type' => 'executive_role',
                'name' => 'Chief Analytics Officer (CAO)'
            ],
            [
                'type' => 'executive_role',
                'name' => 'Chief Marketing Officer (CMO)'
            ],
            [
                'type' => 'executive_role',
                'name' => 'Chief Data Officer (CDO)'
            ]
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('leadership_and_governance_roles');
    }
}
