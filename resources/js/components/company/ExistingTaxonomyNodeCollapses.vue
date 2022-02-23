<template>
    <div class="mb-4">
        <div class="font-weight-bold color-purple">Classification {{objectIndex + 1}}</div>
        <router-link v-if="!hideEditButtion" class="float-right icon-custom-background" link
                     :to="{ name: 'EditCompanyTaxonomy',params: { id: each.categorization_id }}"><i
            class="fas fa-pencil-alt"></i>
        </router-link>
        <!--<span block
              class="d-block px-1 py-2 text-white normal-spacing"
              :style="{backgroundColor:this.nodeColor(each.last_level.replace(/_\s*([a-z])/g, function(d,e) { return ''+e.toUpperCase();}))}"
        >{{each.last_level_description}}
        </span>-->

        <b-collapse
            :visible="true"
            v-bind:id="'accordion-' + each.categorization_id"

        >
            <b-card-body>
                <div>
        <span v-if="Object.keys(each).includes('industry')">
                            <span class="d-block px-1 py-2 text-white normal-spacing"
                                  :style="{backgroundColor:this.nodeColor('industry')}">{{each.industry.description}}
                            </span>
                            </span>
                    <span v-if="Object.keys(each).includes('sector')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white normal-spacing"
                                  :style="{backgroundColor:this.nodeColor('sector')}">{{each.sector.description}}</span>
                            </span>
                    <span v-if="Object.keys(each).includes('sub_sector')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white normal-spacing"
                                  :style="{backgroundColor:this.nodeColor('subSector')}">{{each.sub_sector.description}}</span>
                            </span>
                    <span v-if="Object.keys(each).includes('group')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white normal-spacing"
                                  :style="{backgroundColor:this.nodeColor('group')}">{{each.group.description}}</span>
                            </span>
                    <span v-if="Object.keys(each).includes('sub_group')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white normal-spacing"
                                  :style="{backgroundColor:this.nodeColor('subGroup')}">{{each.sub_group.description}}</span>
                            </span>
                    <span v-if="Object.keys(each).includes('echelon')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white normal-spacing"
                                  :style="{backgroundColor:this.nodeColor('echelon')}">{{each.echelon.description}}</span>
                            </span>
                    <span v-if="Object.keys(each).includes('sub_echelon')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white normal-spacing"
                                  :style="{backgroundColor:this.nodeColor('subEchelon')}">{{each.sub_echelon.description}}</span>
                            </span>
                    <span v-if="Object.keys(each).includes('tier')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white normal-spacing"
                                  :style="{backgroundColor:this.nodeColor('tier')}">{{each.tier.description}}</span>
                            </span>
                    <span v-if="Object.keys(each).includes('sub_tier')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white normal-spacing"
                                  :style="{backgroundColor:this.nodeColor('subTier')}">{{each.sub_tier.description}}</span>
                            </span>
                    <span v-if="Object.keys(each).includes('layer')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white normal-spacing"
                                  :style="{backgroundColor:this.nodeColor('layer')}">{{each.layer.description}}</span>
                            </span>
                    <span v-if="Object.keys(each).includes('sub_layer')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white normal-spacing"
                                  :style="{backgroundColor:this.nodeColor('subLayer')}">{{each.sub_layer.description}}</span>
                            </span>
                    <span v-if="Object.keys(each).includes('deck')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white normal-spacing"
                                  :style="{backgroundColor:this.nodeColor('deck')}">{{each.deck.description}}</span>
                            </span>
                    <span v-if="Object.keys(each).includes('sub_deck')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white normal-spacing"
                                  :style="{backgroundColor:this.nodeColor('subDeck')}">{{each.sub_deck.description}}</span>
                            </span>
                    <span v-if="Object.keys(each).includes('floor')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white normal-spacing"
                                  :style="{backgroundColor:this.nodeColor('floor')}">{{each.floor.description}}</span>
                            </span>
                    <span v-if="Object.keys(each).includes('sub_floor')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white normal-spacing"
                                  :style="{backgroundColor:this.nodeColor('subFloor')}">{{each.sub_floor.description}}</span>
                            </span>
                    <span v-if="Object.keys(each).includes('basement')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white normal-spacing"
                                  :style="{backgroundColor:this.nodeColor('basement')}">{{each.basement.description}}</span>
                            </span>
                    <span v-if="Object.keys(each).includes('sub_basement')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white normal-spacing"
                                  :style="{backgroundColor:this.nodeColor('subBasement')}">{{each.sub_basement.description}}</span>
                            </span>
                    <span v-if="Object.keys(each).includes('mine')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white normal-spacing"
                                  :style="{backgroundColor:this.nodeColor('mine')}">{{each.mine.description}}</span>
                            </span>
                    <span v-if="Object.keys(each).includes('sub_mine')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white normal-spacing"
                                  :style="{backgroundColor:this.nodeColor('subMine')}">{{each.sub_mine.description}}</span>
                            </span>
                </div>
            </b-card-body>
        </b-collapse>
    </div>
</template>

<script>
    import Common from "../../apis/Common";

    export default {
        name: "ExistingTaxonomyNodeCollapses",
        props: ["each","objectIndex", "hideEditButtion"],
        data() {
            return {
                isActive: false,
            };
        },
        created() {
            this.nodeColor = Common.hierarchyNodeColor;
        }
    }
</script>

<style scoped>

</style>
