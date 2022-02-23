<template>
    <div class="mt-2 text-center">
                <span v-if="form.industry">
                    <span class="d-block px-1 py-3 text-white rounded"
                          :style="{backgroundColor:this.nodeColor('industry')}">{{form.industry.description}}
                    </span>
                </span>
        <span v-if="form.industry == ''">
                            <span class="d-block px-1 py-3 text-white rounded fs-14"
                                  :style="{backgroundColor:this.nodeColor('industry')}">Industry Classification (Please Select an Industry From the Dropdown Menu on the Left)
                            </span>
                </span>

        <span v-if="form.sector">
                    <span class="d-block arrow-padding-ud"><i class="fas fa-arrow-down"></i></span>
                    <span class="d-block px-auto py-3 text-white rounded"
                          :style="{backgroundColor:this.nodeColor('sector')}">{{form.sector.description}}</span>
                </span>
        <span v-if="form.subSector">
                    <span class="d-block arrow-padding-ud"><i class="fas fa-arrow-down"></i></span>
                    <span class="d-block px-auto py-3 text-white rounded"
                          :style="{backgroundColor:this.nodeColor('subSector')}">{{form.subSector.description}}</span>
                </span>
        <span v-if="form.group">
                    <span class="d-block arrow-padding-ud"><i class="fas fa-arrow-down"></i></span>
                    <span class="d-block px-auto py-3 text-white rounded"
                          :style="{backgroundColor:this.nodeColor('group')}">{{form.group.description}}</span>
                </span>
        <span v-if="form.subGroup">
                    <span class="d-block arrow-padding-ud"><i class="fas fa-arrow-down"></i></span>
                    <span class="d-block px-auto py-3 text-white rounded"
                          :style="{backgroundColor:this.nodeColor('subGroup')}">{{form.subGroup.description}}</span>
                </span>
        <span v-if="form.echelon">
                    <span class="d-block arrow-padding-ud"><i class="fas fa-arrow-down"></i></span>
                    <span class="d-block px-auto py-3 text-white rounded"
                          :style="{backgroundColor:this.nodeColor('echelon')}">{{form.echelon.description}}</span>
                </span>
        <span v-if="form.subEchelon">
                    <span class="d-block arrow-padding-ud"><i class="fas fa-arrow-down"></i></span>
                    <span class="d-block px-auto py-3 text-white rounded"
                          :style="{backgroundColor:this.nodeColor('subEchelon')}">{{form.subEchelon.description}}</span>
                </span>
        <span v-if="form.tier">
                    <span class="d-block arrow-padding-ud"><i class="fas fa-arrow-down"></i></span>
                    <span class="d-block px-auto py-3 text-white rounded"
                          :style="{backgroundColor:this.nodeColor('tier')}">{{form.tier.description}}</span>
                </span>
        <span v-if="form.subTier">
                    <span class="d-block arrow-padding-ud"><i class="fas fa-arrow-down"></i></span>
                    <span class="d-block px-auto py-3 text-white rounded"
                          :style="{backgroundColor:this.nodeColor('subTier')}">{{form.subTier.description}}</span>
                </span>
        <span v-if="form.layer">
                    <span class="d-block arrow-padding-ud"><i class="fas fa-arrow-down"></i></span>
                    <span class="d-block px-auto py-3 text-white rounded"
                          :style="{backgroundColor:this.nodeColor('layer')}">{{form.layer.description}}</span>
                </span>
        <span v-if="form.subLayer">
                    <span class="d-block arrow-padding-ud"><i class="fas fa-arrow-down"></i></span>
                    <span class="d-block px-auto py-3 text-white rounded"
                          :style="{backgroundColor:this.nodeColor('subLayer')}">{{form.subLayer.description}}</span>
                </span>
        <span v-if="form.deck">
                    <span class="d-block arrow-padding-ud"><i class="fas fa-arrow-down"></i></span>
                    <span class="d-block px-auto py-3 text-white rounded"
                          :style="{backgroundColor:this.nodeColor('deck')}">{{form.deck.description}}</span>
                </span>
        <span v-if="form.subDeck">
                    <span class="d-block arrow-padding-ud"><i class="fas fa-arrow-down"></i></span>
                    <span class="d-block px-auto py-3 text-white rounded"
                          :style="{backgroundColor:this.nodeColor('subDeck')}">{{form.subDeck.description}}</span>
                </span>
        <span v-if="form.floor">
                    <span class="d-block arrow-padding-ud"><i class="fas fa-arrow-down"></i></span>
                    <span class="d-block px-auto py-3 text-white rounded"
                          :style="{backgroundColor:this.nodeColor('floor')}">{{form.floor.description}}</span>
                </span>
        <span v-if="form.subFloor">
                    <span class="d-block arrow-padding-ud"><i class="fas fa-arrow-down"></i></span>
                    <span class="d-block px-auto py-3 text-white rounded"
                          :style="{backgroundColor:this.nodeColor('subFloor')}">{{form.subFloor.description}}</span>
                </span>
        <span v-if="form.basement">
                    <span class="d-block arrow-padding-ud"><i class="fas fa-arrow-down"></i></span>
                    <span class="d-block px-auto py-3 text-white rounded"
                          :style="{backgroundColor:this.nodeColor('basement')}">{{form.basement.description}}</span>
                </span>
        <span v-if="form.subBasement">
                    <span class="d-block arrow-padding-ud"><i class="fas fa-arrow-down"></i></span>
                    <span class="d-block px-auto py-3 text-white rounded"
                          :style="{backgroundColor:this.nodeColor('subBasement')}">{{form.subBasement.description}}</span>
                </span>
        <span v-if="form.mine">
                    <span class="d-block arrow-padding-ud"><i class="fas fa-arrow-down"></i></span>
                    <span class="d-block px-auto py-3 text-white rounded"
                          :style="{backgroundColor:this.nodeColor('mine')}">{{form.mine.description}}</span>
                </span>
        <span v-if="form.subMine">
                    <span class="d-block arrow-padding-ud"><i class="fas fa-arrow-down"></i></span>
                    <span class="d-block px-auto py-3 text-white rounded"
                          :style="{backgroundColor:this.nodeColor('subMine')}">{{form.subMine.description}}</span>
                </span>
    </div>
</template>

<script>
    import Common from "../apis/Common";

    export default {
        name: "MediaCategoryCurrentPathway",
        props: ["form","enabledEditMode"],
        data() {
            return {
                isActive: false,
                checkAction:"",
                taxonomyType:"",
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
