<template>
    <div class="row register-container">
        <div class="col-md-9">
            <div class="row">
                <Hierarchy @nodeData="TaxonomyData" ref="taxonomyChild"></Hierarchy>
                <div class="col-md-12">
                    <div class="row mt-3">

                        <div class="col-md-1 offset-3 exclamition-position">
                            <router-link class="h3" :to={} id="tooltip-target-2">
                                <i class="fas fa-question-circle text-dark"></i>
                            </router-link>
                            <b-tooltip target="tooltip-target-2" triggers="hover">You can associate more than one
                                industry
                                classification to your company and to your content. This means if your company provides
                                services
                                or products across more than a single industry (or within multiple parts of a single
                                industry)
                                any users search for those specific classification will find your company’s content.
                            </b-tooltip>
                        </div>

                        <div class="col-md-8">
                            <button @click.prevent="addAnotherNode()" class="btn btn-theme-primary">Add
                                Another Classification
                            </button>
                            <button @click.prevent="finishAddNode()" class="btn btn-back-next float-right">
                                Finish
                            </button>
                            <!--<div class="text-center mt-3">
                                <router-link class="nav-link cursor-pointer" :to="{ name: 'Dashboard' }" >
                                    <i class="fa fa-arrow-left"></i> Back
                                </router-link>
                            </div>-->
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="row h-100 my-auto">
                <div class="col-md-12 subsector pr-2">
                    A more detailed industry classification will allow users to find your company and your
                    content more reliably and accurately in their searches. If you do not see a fitting
                    classification, please consider making a suggestion either through Add Suggestion or by leaving Feedback.
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Hierarchy from '../components/Hierarchy'

    export default {
        data() {
            return {
                form: {
                    industry: "",
                    sector: "",
                    subSector: "",
                    group: "",
                    subGroup: "",
                    echelon: "",
                    subEchelon: "",
                    tier: "",
                    subTier: "",
                    layer: "",
                    subLayer: "",
                    deck: "",
                    subDeck: "",
                    floor: "",
                    subFloor: "",
                    basement: "",
                    subBasement: "",
                    mine: "",
                    subMine: "",
                    errorField: "",
                },
                mutipleNodes: []
            }
        },
        methods: {
            TaxonomyData: function (value) {
                if (value != undefined || value.length != 0) {
                    this.form.industry = value[0];
                    this.form.sector = value[1];
                    this.form.subSector = value[2];
                    this.form.group = value[3];
                    this.form.subGroup = value[4];
                    this.form.echelon = value[5];
                    this.form.subEchelon = value[6];
                    this.form.tier = value[7];
                    this.form.subTier = value[8];
                    this.form.layer = value[9];
                    this.form.subLayer = value[10];
                    this.form.deck = value[11];
                    this.form.subDeck = value[12];
                    this.form.floor = value[13];
                    this.form.subFloor = value[14];
                    this.form.basement = value[15];
                    this.form.subBasement = value[16];
                    this.form.mine = value[17];
                    this.form.subMine = value[18];
                    this.mutipleNodes = value[19];
                }
                //console.log(value);

            },
            addAnotherNode() {
                this.$refs.taxonomyChild.saveHierarchyInfo('addAnother');
            },
            finishAddNode() {
                //console.log()
                let checked = this.$refs.taxonomyChild.checkSaveHierarchyInfo();
                if (checked) {
                    if (this.form.industry.length == 0 || this.mutipleNodes.length == 3) {
                        this.goNextStep()
                    } else {
                        this.$refs.taxonomyChild.saveHierarchyInfo('finish');
                        this.$parent.goBackToPageTop();
                    }
                } else {
                    if (this.form.industry.length == 0) {
                        $.confirm({
                            title: 'Warning!',
                            content: "Company must be associated to at least one node, Please Add.",
                            columnClass: 'medium',
                            type: 'orange',
                            typeAnimated: true,
                            buttons: {
                                ok: function () {
                                }
                            }
                        });
                    } else {
                        this.$refs.taxonomyChild.saveHierarchyInfo('finish');
                        this.$parent.goBackToPageTop();
                    }
                }

            },
            goNextStep() {
                axios.post('/api/hierarchy-completed-status')
                    .then(response => {
                        this.isLoading = true
                        this.$emit('mediaCompanyHierarchyStatus');
                    })
                    .catch(error => {
                        this.isLoading = false
                        if (error.response.status == 401) {
                            this.$emit('logout')
                        }
                    });
            },
        },
        components: {
            Hierarchy,
        },
    }
</script>
