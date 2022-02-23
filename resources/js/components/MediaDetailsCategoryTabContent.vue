<template>
    <div class="mb-4 text-center">
        <span v-if="Object.keys(each).includes('industry')">
                            <span class="d-block px-1 py-2 text-white rounded"
                                  :style="{backgroundColor:this.nodeColor('industry')}">{{each.industry.description}}
                            </span>
                            </span>
        <span v-if="Object.keys(each).includes('sector')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white rounded"
                                  :style="{backgroundColor:this.nodeColor('sector')}">{{each.sector.description}}</span>
                            </span>
        <span v-if="Object.keys(each).includes('sub_sector')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white rounded"
                                  :style="{backgroundColor:this.nodeColor('subSector')}">{{each.sub_sector.description}}</span>
                            </span>
        <span v-if="Object.keys(each).includes('group')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white rounded"
                                  :style="{backgroundColor:this.nodeColor('group')}">{{each.group.description}}</span>
                            </span>
        <span v-if="Object.keys(each).includes('sub_group')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white rounded"
                                  :style="{backgroundColor:this.nodeColor('subGroup')}">{{each.sub_group.description}}</span>
                            </span>
        <span v-if="Object.keys(each).includes('echelon')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white rounded"
                                  :style="{backgroundColor:this.nodeColor('echelon')}">{{each.echelon.description}}</span>
                            </span>
        <span v-if="Object.keys(each).includes('sub_echelon')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white rounded"
                                  :style="{backgroundColor:this.nodeColor('subEchelon')}">{{each.sub_echelon.description}}</span>
                            </span>
        <span v-if="Object.keys(each).includes('tier')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white rounded"
                                  :style="{backgroundColor:this.nodeColor('tier')}">{{each.tier.description}}</span>
                            </span>
        <span v-if="Object.keys(each).includes('sub_tier')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white rounded"
                                  :style="{backgroundColor:this.nodeColor('subTier')}">{{each.sub_tier.description}}</span>
                            </span>
        <span v-if="Object.keys(each).includes('layer')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white rounded"
                                  :style="{backgroundColor:this.nodeColor('layer')}">{{each.layer.description}}</span>
                            </span>
        <span v-if="Object.keys(each).includes('sub_layer')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white rounded"
                                  :style="{backgroundColor:this.nodeColor('subLayer')}">{{each.sub_layer.description}}</span>
                            </span>
        <span v-if="Object.keys(each).includes('deck')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white rounded"
                                  :style="{backgroundColor:this.nodeColor('deck')}">{{each.deck.description}}</span>
                            </span>
        <span v-if="Object.keys(each).includes('sub_deck')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white rounded"
                                  :style="{backgroundColor:this.nodeColor('subDeck')}">{{each.sub_deck.description}}</span>
                            </span>
        <span v-if="Object.keys(each).includes('floor')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white rounded"
                                  :style="{backgroundColor:this.nodeColor('floor')}">{{each.floor.description}}</span>
                            </span>
        <span v-if="Object.keys(each).includes('sub_floor')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white rounded"
                                  :style="{backgroundColor:this.nodeColor('subFloor')}">{{each.sub_floor.description}}</span>
                            </span>
        <span v-if="Object.keys(each).includes('basement')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white rounded"
                                  :style="{backgroundColor:this.nodeColor('basement')}">{{each.basement.description}}</span>
                            </span>
        <span v-if="Object.keys(each).includes('sub_basement')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white rounded"
                                  :style="{backgroundColor:this.nodeColor('subBasement')}">{{each.sub_basement.description}}</span>
                            </span>
        <span v-if="Object.keys(each).includes('mine')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white rounded"
                                  :style="{backgroundColor:this.nodeColor('mine')}">{{each.mine.description}}</span>
                            </span>
        <span v-if="Object.keys(each).includes('sub_mine')">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-2 text-white rounded"
                                  :style="{backgroundColor:this.nodeColor('subMine')}">{{each.sub_mine.description}}</span>
                            </span>
    </div>
</template>

<script>
    import Common from "../apis/Common";

    export default {
        name: "MediaCategoryTabContent",
        props: ["each", "objectIndex"],
        data() {
            return {
                isActive: false,
                checkAction: "",
                taxonomyType: "",
            };
        },
        methods: {
            keyUpdateOfParent: function () {
                this.$parent.updateViewKey();
            }
        },
        created() {
            this.taxonomyType = this.$parent.taxonomyType;
            this.checkAction = this.$parent.taxonomyActionType;
            this.nodeColor = Common.hierarchyNodeColor;
        }
    }
</script>

<style scoped>

</style>
