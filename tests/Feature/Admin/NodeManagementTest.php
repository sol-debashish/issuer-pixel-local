<?php

namespace Tests\Feature\Admin;
use App\Models\Echelon;
use App\Models\Group;
use App\Models\Industry;
use App\Models\Sector;
use App\Models\SubEchelon;
use App\Models\SubGroup;
use App\Models\SubSector;
use App\Models\Tier;
use App\Models\User;
use Tests\TestCase;
use PDF;

class NodeManagementTest extends TestCase
{
    public function test_without_login_cannot_access_industry_node()
    {
        $industry = factory(Industry::class)->create();
        $this->get(route('admin.industry.node', $industry->id))
        ->assertStatus(302)
        ->assertRedirect('/admin/login')
        ;
    }

    public function test_an_admin_can_access_industry_node()
    {
        $industry = factory(Industry::class)->create();
        $response = $this->actingAs($this->getCreatedUser(User::SUPER_ADMIN_TYPE))
            ->get(route('admin.industry.node', $industry->id))
        ;
        $response
            ->assertStatus(200)
            ->assertSee('Node Management');
    }

    public function test_sector_create_edit_delete_and_active_inactive()
    {
        /*create industry*/
        $industry = $this->createNode(Industry::class, [], new Industry(),  '');
        /*end create industry*/

        $this->actingAs($this->getCreatedUser(User::SUPER_ADMIN_TYPE));

        $postData = [
            'industry_id' => $industry->id,
            'industry_code' => $industry->code,
            'description' => 'sector 1;sector 2',
        ];

        $this->json('POST', route('admin.add.sector'), $postData, ['HTTP_X-Requested-With' => 'XMLHttpRequest'])
            ->assertStatus(200)
            ->assertJson([
                    'msg' => "successfully created!",
                    'status' => "success"
            ])
        ;

        $this->assertEquals(2, $industry->sector()->count());

        /*node edit functionality code*/

        $this->assertEquals('Sector 1', $industry->sector[0]->description);

        $editNodeData = [
            'description' => 'Edited sector 1',
            'node_type' => 'sector',
            'industry_code' => $industry->sector[0]->industry_code,
            'node_code' => $industry->sector[0]->code,
            'status' => 1,
            'parent_node_id' => "parent_node_id%5B%5D=$industry->id",
        ];

        $this->json('POST', route('admin.edit.node'), $editNodeData)
            ->assertStatus(200)
            ->assertJson([
                'msg' => "Successfully updated!",
                'status' => "success"
            ])
        ;

        $this->assertEquals('Edited sector 1', $industry->sector[0]->fresh()->description);

        /*end node edit functionality code*/

        /*node active and inactive functionality code*/
        $this->assertEquals('1', $industry->sector[0]->status);


        $activeInactiveNodeData = [
            'description' => $industry->sector[0]->description,
            'node_type' => 'sector',
            'industry_code' => $industry->sector[0]->industry_code,
            'node_code' => $industry->sector[0]->code,
            'status' => 0,
            'parent_node_id' => "parent_node_id%5B%5D=$industry->id",
        ];

        $this->json('POST', route('admin.edit.node'), $activeInactiveNodeData)
            ->assertStatus(200)
            ->assertJson([
                'msg' => "Successfully updated!",
                'status' => "success"
            ])
        ;

        $this->assertEquals('0', $industry->sector[0]->fresh()->status);

        /*end node active and inactive functionality code*/


        /*node delete code*/
        $deleteData = [
            'node_type' => 'sector',
            'industry_code' => $industry->sector[0]->industry_code,
            'node_code' => $industry->sector[0]->code,
        ];

        $this->json('POST', route('admin.delete.node'), $deleteData)
            ->assertStatus(200)
            ->assertJson([
                'msg' => "Successfully deleted!",
                'status' => "success"
            ])
        ;
        $this->assertEquals(1, $industry->sector()->count());
        /*end node delete code*/
    }

    public function test_sub_sector_create_edit_delete_and_active_inactive()
    {
        /*create industry*/
        $industry = $this->createNode(Industry::class, [], new Industry(),  '');
        /*end create industry*/

        /*create sector*/
        $sectorCreateData = [
            'industry_id' => $industry->id,
            'industry_code' => $industry->code,
        ];
        $sector = $this->createNode(Sector::class, $sectorCreateData, new Sector(),  $industry->code);

        /*end create sector*/

        $this->actingAs($this->getCreatedUser(User::SUPER_ADMIN_TYPE));

        $postData = [
            'industry_id' => $industry->id,
            'description' => 'sub sector 1; sub sector 2; sub sector 3',
            'sector_id' => "sector_id%5B%5D=$sector->id",
        ];

        $this->json('POST', route('admin.add.sub.sector'), $postData, ['HTTP_X-Requested-With' => 'XMLHttpRequest'])
            ->assertStatus(200)
            ->assertJson([
                    'msg' => "successfully created!",
                    'status' => "success"
            ])
        ;
        $this->assertEquals(3, $sector->subSector()->count());

        /*node edit functionality code*/

        $this->assertEquals('Sub Sector 1', $sector->subSector[0]->description);

        $editNodeData = [
            'description' => 'Edited sub sector 1',
            'node_type' => 'sub-sector',
            'industry_code' => $sector->subSector[0]->industry_code,
            'node_code' => $sector->subSector[0]->code,
            'status' => 1,
            'parent_node_id' => "parent_node_id%5B%5D=$sector->id",
        ];

        $this->json('POST', route('admin.edit.node'), $editNodeData)
            ->assertStatus(200)
            ->assertJson([
                'msg' => "Successfully updated!",
                'status' => "success"
            ])
        ;
        $this->assertEquals('Edited sub sector 1', $sector->subSector[0]->fresh()->description);

        /*end node edit functionality code*/

        /*node active and inactive functionality code*/

        $this->assertEquals('1', $industry->sector[0]->status);


        $activeInactiveNodeData = [
            'description' => $sector->subSector[0]->description,
            'node_type' => 'sub-sector',
            'industry_code' => $sector->subSector[0]->industry_code,
            'node_code' => $sector->subSector[0]->code,
            'status' => 0,
            'parent_node_id' => "parent_node_id%5B%5D=$sector->id",
        ];

        $this->json('POST', route('admin.edit.node'), $activeInactiveNodeData)
            ->assertStatus(200)
            ->assertJson([
                'msg' => "Successfully updated!",
                'status' => "success"
            ])
        ;

        $this->assertEquals('0', $sector->subSector[0]->fresh()->status);

        /*end node active and inactive functionality code*/

        /*node delete code*/
        $deleteData = [
            'node_type' => 'sub-sector',
            'industry_code' => $sector->subSector[0]->industry_code,
            'node_code' => $sector->subSector[0]->code,
        ];

        $this->json('POST', route('admin.delete.node'), $deleteData)
            ->assertStatus(200)
            ->assertJson([
                'msg' => "Successfully deleted!",
                'status' => "success"
            ])
        ;
        $this->assertEquals(2, $sector->subSector()->count());
        /*end node delete code*/
    }

    public function test_group_create_edit_delete_and_active_inactive()
    {
        /*create industry*/
        $industry = $this->createNode(Industry::class, [], new Industry(),  '');
        /*end create industry*/

        /*create sector*/
        $sectorCreateData = [
            'industry_id' => $industry->id,
            'industry_code' => $industry->code,
        ];
        $sector = $this->createNode(Sector::class, $sectorCreateData, new Sector(),  $industry->code);

        /*end create sector*/

        /*create sub sector*/
        $subSectorCreateData = [
            'sector_id' => $sector->id,
            'sector_code' => $sector->code,
            'industry_code' => $sector->industry_code,
        ];
        $subSector = $this->createNode(SubSector::class, $subSectorCreateData, new SubSector(),  $sector->code);
        /*end create sub sector*/

        $this->actingAs($this->getCreatedUser(User::SUPER_ADMIN_TYPE));

        $postData = [
            'industry_id' => $industry->id,
            'description' => 'group 1; group 2; group 3',
            'sub_sector_id' => "sub_sector_id%5B%5D=$subSector->id",
        ];

        $this->json('POST', route('admin.add.group'), $postData, ['HTTP_X-Requested-With' => 'XMLHttpRequest'])
            ->assertStatus(200)
            ->assertJson([
                    'msg' => "successfully created!",
                    'status' => "success"
            ])
        ;

        $this->assertEquals(3, $subSector->group()->count());

        /*node edit functionality code*/

        $this->assertEquals('Group 1', $subSector->group[0]->description);

        $editNodeData = [
            'description' => 'Edited group 1',
            'node_type' => 'group',
            'industry_code' => $subSector->group[0]->industry_code,
            'node_code' => $subSector->group[0]->code,
            'status' => 1,
            'parent_node_id' => "parent_node_id%5B%5D=$subSector->id",
        ];

        $this->json('POST', route('admin.edit.node'), $editNodeData)
            ->assertStatus(200)
            ->assertJson([
                'msg' => "Successfully updated!",
                'status' => "success"
            ])
        ;
        $this->assertEquals('Edited group 1', $subSector->group[0]->fresh()->description);

        /*end node edit functionality code*/

        /*node active and inactive functionality code*/

        $this->assertEquals('1', $subSector->group[0]->status);


        $activeInactiveNodeData = [
            'description' => $subSector->group[0]->description,
            'node_type' => 'group',
            'industry_code' => $subSector->group[0]->industry_code,
            'node_code' => $subSector->group[0]->code,
            'status' => 0,
            'parent_node_id' => "parent_node_id%5B%5D=$subSector->id",
        ];

        $this->json('POST', route('admin.edit.node'), $activeInactiveNodeData)
            ->assertStatus(200)
            ->assertJson([
                'msg' => "Successfully updated!",
                'status' => "success"
            ])
        ;

        $this->assertEquals('0', $subSector->group[0]->fresh()->status);

        /*end node active and inactive functionality code*/

        /*node delete code*/
        $deleteData = [
            'node_type' => 'group',
            'industry_code' => $subSector->group[0]->industry_code,
            'node_code' => $subSector->group[0]->code,
        ];

        $this->json('POST', route('admin.delete.node'), $deleteData)
            ->assertStatus(200)
            ->assertJson([
                'msg' => "Successfully deleted!",
                'status' => "success"
            ])
        ;
        $this->assertEquals(2, $subSector->group()->count());
        /*end node delete code*/
    }

    public function test_sub_group_create_edit_delete_and_active_inactive()
    {
        /*create industry*/
        $industry = $this->createNode(Industry::class, [], new Industry(),  '');
        /*end create industry*/

        /*create sector*/
        $sectorCreateData = [
            'industry_id' => $industry->id,
            'industry_code' => $industry->code,
        ];
        $sector = $this->createNode(Sector::class, $sectorCreateData, new Sector(),  $industry->code);

        /*end create sector*/

        /*create sub sector*/
        $subSectorCreateData = [
            'sector_id' => $sector->id,
            'sector_code' => $sector->code,
            'industry_code' => $sector->industry_code,
        ];
        $subSector = $this->createNode(SubSector::class, $subSectorCreateData, new SubSector(),  $sector->code);
        /*end create sub sector*/

        /*create group*/
        $groupCreateData = [
            'sub_sector_id' => $subSector->id,
            'sub_sector_code' => $subSector->code,
            'sector_code' => $subSector->sector_code,
            'industry_code' => $subSector->industry_code,
        ];

        $group = $this->createNode(Group::class, $groupCreateData, new Group(),  $subSector->code);
        /*end create group*/

        $this->actingAs($this->getCreatedUser(User::SUPER_ADMIN_TYPE));

        $postData = [
            'industry_id' => $industry->id,
            'description' => 'sub group 1;sub group 2;sub group 3;sub group 4',
            'group_id' => "group_id%5B%5D=$group->id",
        ];

        $this->json('POST', route('admin.add.sub.group'), $postData, ['HTTP_X-Requested-With' => 'XMLHttpRequest'])
            ->assertStatus(200)
            ->assertJson([
                    'msg' => "successfully created!",
                    'status' => "success"
            ])
        ;

        $this->assertEquals(4, $group->subGroup()->count());

        /*node edit functionality code*/

        $this->assertEquals('Sub Group 1', $group->subGroup[0]->description);

        $editNodeData = [
            'description' => 'Edited sub group 1',
            'node_type' => 'sub-group',
            'industry_code' => $group->subGroup[0]->industry_code,
            'node_code' => $group->subGroup[0]->code,
            'status' => 1,
            'parent_node_id' => "parent_node_id%5B%5D=$group->id",
        ];

        $this->json('POST', route('admin.edit.node'), $editNodeData)
            ->assertStatus(200)
            ->assertJson([
                'msg' => "Successfully updated!",
                'status' => "success"
            ])
        ;
        $this->assertEquals('Edited sub group 1', $group->subGroup[0]->fresh()->description);

        /*end node edit functionality code*/

        /*node active and inactive functionality code*/

        $this->assertEquals('1', $group->subGroup[0]->status);


        $activeInactiveNodeData = [
            'description' => $group->subGroup[0]->description,
            'node_type' => 'sub-group',
            'industry_code' => $group->subGroup[0]->industry_code,
            'node_code' => $group->subGroup[0]->code,
            'status' => 0,
            'parent_node_id' => "parent_node_id%5B%5D=$group->id",
        ];

        $this->json('POST', route('admin.edit.node'), $activeInactiveNodeData)
            ->assertStatus(200)
            ->assertJson([
                'msg' => "Successfully updated!",
                'status' => "success"
            ])
        ;

        $this->assertEquals('0', $group->subGroup[0]->fresh()->status);

        /*end node active and inactive functionality code*/

        /*node delete code*/
        $deleteData = [
            'node_type' => 'sub-group',
            'industry_code' => $group->subGroup[0]->industry_code,
            'node_code' => $group->subGroup[0]->code,
        ];

        $this->json('POST', route('admin.delete.node'), $deleteData)
            ->assertStatus(200)
            ->assertJson([
                'msg' => "Successfully deleted!",
                'status' => "success"
            ])
        ;
        $this->assertEquals(3, $group->subGroup()->count());
        /*end node delete code*/
    }

    public function test_echelon_create_edit_and_delete_and_active_inactive()
    {
        /*create industry*/
        $industry = $this->createNode(Industry::class, [], new Industry(),  '');
        /*end create industry*/

        /*create sector*/
        $sectorCreateData = [
            'industry_id' => $industry->id,
            'industry_code' => $industry->code,
        ];
        $sector = $this->createNode(Sector::class, $sectorCreateData, new Sector(),  $industry->code);

        /*end create sector*/

        /*create sub sector*/
        $subSectorCreateData = [
            'sector_id' => $sector->id,
            'sector_code' => $sector->code,
            'industry_code' => $sector->industry_code,
        ];
        $subSector = $this->createNode(SubSector::class, $subSectorCreateData, new SubSector(),  $sector->code);
        /*end create sub sector*/

        /*create group*/
        $groupCreateData = [
            'sub_sector_id' => $subSector->id,
            'sub_sector_code' => $subSector->code,
            'sector_code' => $subSector->sector_code,
            'industry_code' => $subSector->industry_code,
        ];

        $group = $this->createNode(Group::class, $groupCreateData, new Group(),  $subSector->code);
        /*end create group*/

        /*create sub group*/
        $subGroupCreateData = [
            'group_id' => $group->id,
            'group_code' => $group->code,
            'sub_sector_code' => $group->sub_sector_code,
            'sector_code' => $group->sector_code,
            'industry_code' => $group->industry_code,
        ];

        $subGroup = $this->createNode(SubGroup::class, $subGroupCreateData, new SubGroup(),  $group->code);
        /*end create sub group*/

        $this->actingAs($this->getCreatedUser(User::SUPER_ADMIN_TYPE));

        $postData = [
            'industry_id' => $industry->id,
            'description' => 'echolon 1; echelon 2',
            'sub_group_id' => "sub_group_id%5B%5D=$subGroup->id",
        ];

        $this->json('POST', route('admin.add.echelon'), $postData, ['HTTP_X-Requested-With' => 'XMLHttpRequest'])
            ->assertStatus(200)
            ->assertJson([
                    'msg' => "successfully created!",
                    'status' => "success"
            ])
        ;

        $this->assertEquals(2, $subGroup->echelon()->count());

        /*node edit functionality code*/

        $this->assertEquals('Echolon 1', $subGroup->echelon[0]->description);

        $editNodeData = [
            'description' => 'Edited echelon 1',
            'node_type' => 'echelon',
            'industry_code' => $subGroup->echelon[0]->industry_code,
            'node_code' => $subGroup->echelon[0]->code,
            'status' => 1,
            'parent_node_id' => "parent_node_id%5B%5D=$subGroup->id",
        ];

        $this->json('POST', route('admin.edit.node'), $editNodeData)
            ->assertStatus(200)
            ->assertJson([
                'msg' => "Successfully updated!",
                'status' => "success"
            ])
        ;
        $this->assertEquals('Edited echelon 1', $subGroup->echelon[0]->fresh()->description);

        /*end node edit functionality code*/

        /*node active and inactive functionality code*/

        $this->assertEquals('1', $subGroup->echelon[0]->status);


        $activeInactiveNodeData = [
            'description' => $subGroup->echelon[0]->description,
            'node_type' => 'echelon',
            'industry_code' => $subGroup->echelon[0]->industry_code,
            'node_code' => $subGroup->echelon[0]->code,
            'status' => 0,
            'parent_node_id' => "parent_node_id%5B%5D=$subGroup->id",
        ];

        $this->json('POST', route('admin.edit.node'), $activeInactiveNodeData)
            ->assertStatus(200)
            ->assertJson([
                'msg' => "Successfully updated!",
                'status' => "success"
            ])
        ;

        $this->assertEquals('0', $subGroup->echelon[0]->fresh()->status);

        /*end node active and inactive functionality code*/

        /*node delete code*/
        $deleteData = [
            'node_type' => 'echelon',
            'industry_code' => $subGroup->echelon[0]->industry_code,
            'node_code' => $subGroup->echelon[0]->code,
        ];

        $this->json('POST', route('admin.delete.node'), $deleteData)
            ->assertStatus(200)
            ->assertJson([
                'msg' => "Successfully deleted!",
                'status' => "success"
            ])
        ;
        $this->assertEquals(1, $subGroup->echelon()->count());
        /*end node delete code*/
    }

    public function test_sub_echelon_create_edit_and_delete_and_active_inactive()
    {
        /*create industry*/
        $industry = $this->createNode(Industry::class, [], new Industry(),  '');
        /*end create industry*/

        /*create sector*/
        $sectorCreateData = [
            'industry_id' => $industry->id,
            'industry_code' => $industry->code,
        ];
        $sector = $this->createNode(Sector::class, $sectorCreateData, new Sector(),  $industry->code);

        /*end create sector*/

        /*create sub sector*/
        $subSectorCreateData = [
            'sector_id' => $sector->id,
            'sector_code' => $sector->code,
            'industry_code' => $sector->industry_code,
        ];
        $subSector = $this->createNode(SubSector::class, $subSectorCreateData, new SubSector(),  $sector->code);
        /*end create sub sector*/

        /*create group*/
        $groupCreateData = [
            'sub_sector_id' => $subSector->id,
            'sub_sector_code' => $subSector->code,
            'sector_code' => $subSector->sector_code,
            'industry_code' => $subSector->industry_code,
        ];

        $group = $this->createNode(Group::class, $groupCreateData, new Group(),  $subSector->code);
        /*end create group*/

        /*create sub group*/
        $subGroupCreateData = [
            'group_id' => $group->id,
            'group_code' => $group->code,
            'sub_sector_code' => $group->sub_sector_code,
            'sector_code' => $group->sector_code,
            'industry_code' => $group->industry_code,
        ];

        $subGroup = $this->createNode(SubGroup::class, $subGroupCreateData, new SubGroup(),  $group->code);
        /*end create sub group*/

        /*create echelon*/
        $echelonCreateData = [
            'sub_group_id' => $subGroup->id,
            'sub_group_code' => $subGroup->code,
            'group_code' => $subGroup->group_code,
            'sub_sector_code' => $subGroup->sub_sector_code,
            'sector_code' => $subGroup->sector_code,
            'industry_code' => $subGroup->industry_code,
        ];

        $echelon = $this->createNode(Echelon::class, $echelonCreateData, new Echelon(),  $subGroup->code);
        /*end create echelon*/

        $this->actingAs($this->getCreatedUser(User::SUPER_ADMIN_TYPE));

        $postData = [
            'industry_id' => $industry->id,
            'description' => 'sub echolon 1; sub echolon 2',
            'echelon_id' => "echelon_id%5B%5D=$echelon->id",
        ];

        $this->json('POST', route('admin.add.sub.echelon'), $postData, ['HTTP_X-Requested-With' => 'XMLHttpRequest'])
            ->assertStatus(200)
            ->assertJson([
                    'msg' => "successfully created!",
                    'status' => "success"
            ])
        ;

        $this->assertEquals(2, $echelon->subEchelon()->count());

        /*node edit functionality code*/

        $this->assertEquals('Sub Echolon 1', $echelon->subEchelon[0]->description);

        $editNodeData = [
            'description' => 'Edited sub echolon 1',
            'node_type' => 'sub-echelon',
            'industry_code' => $echelon->subEchelon[0]->industry_code,
            'node_code' => $echelon->subEchelon[0]->code,
            'status' => 1,
            'parent_node_id' => "parent_node_id%5B%5D=$echelon->id",
        ];

        $this->json('POST', route('admin.edit.node'), $editNodeData)
            ->assertStatus(200)
            ->assertJson([
                'msg' => "Successfully updated!",
                'status' => "success"
            ])
        ;
        $this->assertEquals('Edited sub echolon 1', $echelon->subEchelon[0]->fresh()->description);

        /*end node edit functionality code*/

        /*node active and inactive functionality code*/

        $this->assertEquals('1', $echelon->subEchelon[0]->status);

        $activeInactiveNodeData = [
            'description' => $echelon->subEchelon[0]->description,
            'node_type' => 'sub-echelon',
            'industry_code' => $echelon->subEchelon[0]->industry_code,
            'node_code' => $echelon->subEchelon[0]->code,
            'status' => 0,
            'parent_node_id' => "parent_node_id%5B%5D=$echelon->id",
        ];

        $this->json('POST', route('admin.edit.node'), $activeInactiveNodeData)
            ->assertStatus(200)
            ->assertJson([
                'msg' => "Successfully updated!",
                'status' => "success"
            ])
        ;

        $this->assertEquals('0', $echelon->subEchelon[0]->fresh()->status);

        /*end node active and inactive functionality code*/

        /*node delete code*/
        $deleteData = [
            'node_type' => 'sub-echelon',
            'industry_code' => $echelon->subEchelon[0]->industry_code,
            'node_code' => $echelon->subEchelon[0]->code,
        ];

        $this->json('POST', route('admin.delete.node'), $deleteData)
            ->assertStatus(200)
            ->assertJson([
                'msg' => "Successfully deleted!",
                'status' => "success"
            ])
        ;
        $this->assertEquals(1, $echelon->subEchelon()->count());
        /*end node delete code*/
    }

    public function test_tier_create_edit_and_delete_and_active_inactive()
    {
        /*create industry*/
        $industry = $this->createNode(Industry::class, [], new Industry(),  '');
        /*end create industry*/

        /*create sector*/
        $sectorCreateData = [
            'industry_id' => $industry->id,
            'industry_code' => $industry->code,
        ];
        $sector = $this->createNode(Sector::class, $sectorCreateData, new Sector(),  $industry->code);

        /*end create sector*/

        /*create sub sector*/
        $subSectorCreateData = [
            'sector_id' => $sector->id,
            'sector_code' => $sector->code,
            'industry_code' => $sector->industry_code,
        ];
        $subSector = $this->createNode(SubSector::class, $subSectorCreateData, new SubSector(),  $sector->code);
        /*end create sub sector*/

        /*create group*/
        $groupCreateData = [
            'sub_sector_id' => $subSector->id,
            'sub_sector_code' => $subSector->code,
            'sector_code' => $subSector->sector_code,
            'industry_code' => $subSector->industry_code,
        ];

        $group = $this->createNode(Group::class, $groupCreateData, new Group(),  $subSector->code);
        /*end create group*/

        /*create sub group*/
        $subGroupCreateData = [
            'group_id' => $group->id,
            'group_code' => $group->code,
            'sub_sector_code' => $group->sub_sector_code,
            'sector_code' => $group->sector_code,
            'industry_code' => $group->industry_code,
        ];

        $subGroup = $this->createNode(SubGroup::class, $subGroupCreateData, new SubGroup(),  $group->code);
        /*end create sub group*/

        /*create echelon*/
        $echelonCreateData = [
            'sub_group_id' => $subGroup->id,
            'sub_group_code' => $subGroup->code,
            'group_code' => $subGroup->group_code,
            'sub_sector_code' => $subGroup->sub_sector_code,
            'sector_code' => $subGroup->sector_code,
            'industry_code' => $subGroup->industry_code,
        ];

        $echelon = $this->createNode(Echelon::class, $echelonCreateData, new Echelon(),  $subGroup->code);
        /*end create echelon*/

        /*create sub echelon*/
        $subEchelonCreateData = [
            'echelon_id' => $echelon->id,
            'echelon_code' => $echelon->code,
            'sub_group_code' => $echelon->sub_group_code,
            'group_code' => $echelon->group_code,
            'sub_sector_code' => $echelon->sub_sector_code,
            'sector_code' => $echelon->sector_code,
            'industry_code' => $echelon->industry_code,
        ];

        $subEchelon = $this->createNode(SubEchelon::class, $subEchelonCreateData, new SubEchelon(),  $echelon->code);
        /*end create sub echelon*/

        $this->actingAs($this->getCreatedUser(User::SUPER_ADMIN_TYPE));

        $postData = [
            'industry_id' => $industry->id,
            'description' => 'tier 1; tier 2; tier 3',
            'sub_echelon_id' => "sub_echelon_id%5B%5D=$subEchelon->id",
        ];

        $this->json('POST', route('admin.add.tier'), $postData, ['HTTP_X-Requested-With' => 'XMLHttpRequest'])
            ->assertStatus(200)
            ->assertJson([
                    'msg' => "successfully created!",
                    'status' => "success"
            ])
        ;

        $this->assertEquals(3, $subEchelon->tier()->count());

        /*node edit functionality code*/

        $this->assertEquals('Tier 1', $subEchelon->tier[0]->description);

        $editNodeData = [
            'description' => 'Edited tier 1',
            'node_type' => 'tier',
            'industry_code' => $subEchelon->tier[0]->industry_code,
            'node_code' => $subEchelon->tier[0]->code,
            'status' => 1,
            'parent_node_id' => "parent_node_id%5B%5D=$subEchelon->id",
        ];

        $this->json('POST', route('admin.edit.node'), $editNodeData)
            ->assertStatus(200)
            ->assertJson([
                'msg' => "Successfully updated!",
                'status' => "success"
            ])
        ;
        $this->assertEquals('Edited tier 1', $subEchelon->tier[0]->fresh()->description);

        /*end node edit functionality code*/

        /*node active and inactive functionality code*/

        $this->assertEquals('1', $subEchelon->tier[0]->status);


        $activeInactiveNodeData = [
            'description' => $subEchelon->tier[0]->description,
            'node_type' => 'tier',
            'industry_code' => $subEchelon->tier[0]->industry_code,
            'node_code' => $subEchelon->tier[0]->code,
            'status' => 0,
            'parent_node_id' => "parent_node_id%5B%5D=$subEchelon->id",
        ];

        $this->json('POST', route('admin.edit.node'), $activeInactiveNodeData)
            ->assertStatus(200)
            ->assertJson([
                'msg' => "Successfully updated!",
                'status' => "success"
            ])
        ;

        $this->assertEquals('0', $subEchelon->tier[0]->fresh()->status);

        /*end node active and inactive functionality code*/

        /*node delete code*/
        $deleteData = [
            'node_type' => 'tier',
            'industry_code' => $subEchelon->tier[0]->industry_code,
            'node_code' => $subEchelon->tier[0]->code,
        ];

        $this->json('POST', route('admin.delete.node'), $deleteData)
            ->assertStatus(200)
            ->assertJson([
                'msg' => "Successfully deleted!",
                'status' => "success"
            ])
        ;
        $this->assertEquals(2, $subEchelon->tier()->count());
        /*end node delete code*/
    }

    public function test_sub_tier_create_edit_and_delete_and_active_inactive()
    {
        /*create industry*/
        $industry = $this->createNode(Industry::class, [], new Industry(),  '');
        /*end create industry*/

        /*create sector*/
        $sectorCreateData = [
            'industry_id' => $industry->id,
            'industry_code' => $industry->code,
        ];
        $sector = $this->createNode(Sector::class, $sectorCreateData, new Sector(),  $industry->code);

        /*end create sector*/

        /*create sub sector*/
        $subSectorCreateData = [
            'sector_id' => $sector->id,
            'sector_code' => $sector->code,
            'industry_code' => $sector->industry_code,
        ];
        $subSector = $this->createNode(SubSector::class, $subSectorCreateData, new SubSector(),  $sector->code);
        /*end create sub sector*/

        /*create group*/
        $groupCreateData = [
            'sub_sector_id' => $subSector->id,
            'sub_sector_code' => $subSector->code,
            'sector_code' => $subSector->sector_code,
            'industry_code' => $subSector->industry_code,
        ];

        $group = $this->createNode(Group::class, $groupCreateData, new Group(),  $subSector->code);
        /*end create group*/

        /*create sub group*/
        $subGroupCreateData = [
            'group_id' => $group->id,
            'group_code' => $group->code,
            'sub_sector_code' => $group->sub_sector_code,
            'sector_code' => $group->sector_code,
            'industry_code' => $group->industry_code,
        ];

        $subGroup = $this->createNode(SubGroup::class, $subGroupCreateData, new SubGroup(),  $group->code);
        /*end create sub group*/

        /*create echelon*/
        $echelonCreateData = [
            'sub_group_id' => $subGroup->id,
            'sub_group_code' => $subGroup->code,
            'group_code' => $subGroup->group_code,
            'sub_sector_code' => $subGroup->sub_sector_code,
            'sector_code' => $subGroup->sector_code,
            'industry_code' => $subGroup->industry_code,
        ];

        $echelon = $this->createNode(Echelon::class, $echelonCreateData, new Echelon(),  $subGroup->code);
        /*end create echelon*/

        /*create sub echelon*/
        $subEchelonCreateData = [
            'echelon_id' => $echelon->id,
            'echelon_code' => $echelon->code,
            'sub_group_code' => $echelon->sub_group_code,
            'group_code' => $echelon->group_code,
            'sub_sector_code' => $echelon->sub_sector_code,
            'sector_code' => $echelon->sector_code,
            'industry_code' => $echelon->industry_code,
        ];

        $subEchelon = $this->createNode(SubEchelon::class, $subEchelonCreateData, new SubEchelon(),  $echelon->code);
        /*end create sub echelon*/

        /*create tier*/
        $tierCreateData = [
            'sub_echelon_id' => $subEchelon->id,
            'sub_echelon_code' => $subEchelon->code,
            'echelon_code' => $subEchelon->echelon_code,
            'sub_group_code' => $subEchelon->sub_group_code,
            'group_code' => $subEchelon->group_code,
            'sub_sector_code' => $subEchelon->sub_sector_code,
            'sector_code' => $subEchelon->sector_code,
            'industry_code' => $subEchelon->industry_code,
        ];
        $tier = $this->createNode(Tier::class, $tierCreateData, new Tier(),  $subEchelon->code);
        /*end create tier*/

        $this->actingAs($this->getCreatedUser(User::SUPER_ADMIN_TYPE));

        $postData = [
            'industry_id' => $industry->id,
            'description' => 'sub tier 1; sub tier 2; sub tier 3; sub tier 4',
            'tier_id' => "tier_id%5B%5D=$tier->id",
        ];

        $this->json('POST', route('admin.add.sub.tier'), $postData, ['HTTP_X-Requested-With' => 'XMLHttpRequest'])
            ->assertStatus(200)
            ->assertJson([
                    'msg' => "successfully created!",
                    'status' => "success"
            ])
        ;

        $this->assertEquals(4, $tier->subTier()->count());

        /*node edit functionality code*/

        $this->assertEquals('Sub Tier 1', $tier->subTier[0]->description);

        $editNodeData = [
            'description' => 'Edited sub tier 1',
            'node_type' => 'sub-tier',
            'industry_code' => $tier->subTier[0]->industry_code,
            'node_code' => $tier->subTier[0]->code,
            'status' => 1,
            'parent_node_id' => "parent_node_id%5B%5D=$tier->id",
        ];

        $this->json('POST', route('admin.edit.node'), $editNodeData)
            ->assertStatus(200)
            ->assertJson([
                'msg' => "Successfully updated!",
                'status' => "success"
            ])
        ;
        $this->assertEquals('Edited sub tier 1', $tier->subTier[0]->fresh()->description);

        /*end node edit functionality code*/

        /*node active and inactive functionality code*/

        $this->assertEquals('1', $tier->subTier[0]->status);

        $activeInactiveNodeData = [
            'description' => $tier->subTier[0]->description,
            'node_type' => 'sub-tier',
            'industry_code' => $tier->subTier[0]->industry_code,
            'node_code' => $tier->subTier[0]->code,
            'status' => 0,
            'parent_node_id' => "parent_node_id%5B%5D=$tier->id",
        ];

        $this->json('POST', route('admin.edit.node'), $activeInactiveNodeData)
            ->assertStatus(200)
            ->assertJson([
                'msg' => "Successfully updated!",
                'status' => "success"
            ])
        ;

        $this->assertEquals('0', $tier->subTier[0]->fresh()->status);

        /*end node active and inactive functionality code*/

        /*node delete code*/
        $deleteData = [
            'node_type' => 'sub-tier',
            'industry_code' => $tier->subTier[0]->industry_code,
            'node_code' => $tier->subTier[0]->code,
        ];

        $this->json('POST', route('admin.delete.node'), $deleteData)
            ->assertStatus(200)
            ->assertJson([
                'msg' => "Successfully deleted!",
                'status' => "success"
            ])
        ;
        $this->assertEquals(3, $tier->subTier()->count());
        /*end node delete code*/
    }

    public function test_node_list_pdf_generate()
    {
        PDF::fake();
        /*create industry*/
        $industry = factory(Industry::class)->create();
        $industry->code = generateCode(1, new Industry(), '');
        $industry->save();
        /*end create industry*/

        $industry = $industry->load(['sector.subSector.group.subGroup.echelon.subEchelon.tier.subTier']);
        $sectorAssoc = $industry->sector()->GetAssoc(['industry_code' => $industry->code]);
        $subSectorAssoc = $industry->subSector()->GetAssoc(['industry_code' => $industry->code]);
        $groupAssoc = $industry->group()->GetAssoc(['industry_code' => $industry->code]);
        $subGroupAssoc = $industry->subGroup()->GetAssoc(['industry_code' => $industry->code]);
        $echelonAssoc = $industry->echelon()->GetAssoc(['industry_code' => $industry->code]);
        $subEchelonAssoc = $industry->subEchelon()->GetAssoc(['industry_code' => $industry->code]);
        $tierAssoc = $industry->tier()->GetAssoc(['industry_code' => $industry->code]);
        $subTierAssoc = $industry->subTier()->GetAssoc(['industry_code' => $industry->code]);

        $data = [
            'industry' => $industry,
            'sectorAssoc'=> $sectorAssoc,
            'subSectorAssoc' => $subSectorAssoc,
            'groupAssoc' => $groupAssoc,
            'subGroupAssoc' => $subGroupAssoc,
            'echelonAssoc' => $echelonAssoc,
            'subEchelonAssoc' => $subEchelonAssoc,
            'tierAssoc' => $tierAssoc,
            'subTierAssoc'=> $subTierAssoc
        ];
        $view = 'admin.pdf._vertical_node_generate';
        PDF::loadView($view, $data)->setOption('margin-bottom', 0);
//        PDF::assertViewIs('view-pdf-order-shipping');
        PDF::assertSee($industry->description);
    }

    public function createNode($tableName, $createData, $model, $paddingCode)
    {
        $item = factory($tableName)->create($createData);
        $item->code = generateCode(1, $model, $paddingCode);
        $item->save();
        return $item;
    }
}