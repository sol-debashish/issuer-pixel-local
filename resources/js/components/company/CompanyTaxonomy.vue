<template>
    <div class="text-center mt-4 mb-5">
        <!--<router-link link :to="{ name: 'AddCompanyTaxonomy'}"
                     class="mb-3 btn btn-back-next float-left company-profile-right-btn">Add Categorization
        </router-link>-->
        <!--<div class="mx-auto categorization-container">
            <div class="inner">
                <b-card
                    no-body
                    class="pb-3 border-0 d-inline-block categorization-item"
                    v-for="(each,index) in multipleNodes"
                    :key="each.categorization_id"
                >
                    <ExistingTaxonomyNodeCollapses v-bind:each="each" :objectIndex="index"></ExistingTaxonomyNodeCollapses>

                    &lt;!&ndash;<router-link class="btn btn-theme-purple-dashboard edit-taxonomy" link
                                 :to="{ name: 'EditCompanyTaxonomy',params: { id: each.categorization_id }}"><i
                        class="fas fa-pencil-alt"></i> Edit Taxonomy
                    </router-link>&ndash;&gt;

                </b-card>
            </div>
        </div>-->
        <div class="row mx-auto w-100">
        <div
            no-body
            class="border-0 col-lg-3 col-md-4 pb-3"
            v-for="(each,index) in multipleNodes"
            :key="each.categorization_id"
        >
            <CompanyNodeCollapses @categorizationId="getCategorizationId" v-bind:each="each" :objectIndex="index" :enableEditButton="enableEditButton"></CompanyNodeCollapses>

        </div>
    </div>
    </div>
</template>

<script>
    import loader from '../Loader'
    import vSelect from 'vue-select'
    import User from "../../apis/User";
    import {required, email, minLength, between} from 'vuelidate/lib/validators'
    import Common from "../../apis/Common";
    // import ExistingTaxonomyNodeCollapses from "./ExistingTaxonomyNodeCollapses";
    import CompanyNodeCollapses from "../CompanyNodeCollapses";

    export default {
        data: function () {
            return {
                multipleNodes: [],
                haveAddedNode: false,
                enableEditButton: true,
            }
        },
        props: [],
        validations: {},
        watch: {
            form: {
                handler: function () {
                    this.$emit('nodeData', [this.form.industry, this.form.sector, this.form.subSector, this.form.group, this.form.subGroup, this.form.echelon, this.form.subEchelon, this.form.tier, this.form.subTier, this.form.layer, this.form.subLayer, this.form.deck, this.form.subDeck, this.form.floor, this.form.subFloor, this.form.basement, this.form.subBasement, this.form.mine, this.form.subMine]);
                },
                deep: true
            }
        },
        methods: {
            getHierarchyInfo: function (id, industry_id) {
                axios.get('/api/get-multiple-node?categorization_id=' + id + '&industry_id=' + industry_id + '&user_info=' + localStorage.getItem("userInfo"))
                    .then((response) => {
                        this.multipleNodes = response.data.data;
                        if (this.multipleNodes.length > 0) {
                            this.haveAddedNode = true;
                        }
                        /*console.log(response.data.data.industry.id);
                        this.form.industry = response.data.data.industry;
                        this.getSectors(response.data.data.industry, 'Load');
                        this.form.sector = response.data.data.sector;
                        if (response.data.success) {
                            toastr.success(response.data.success.message)
                        }*/
                    })
                    .catch(error => {
                        if (error.response.status === 422) {
                            toastr.error(error.response.data.error.message)
                        } else if (error.response.status == 401) {
                            this.$emit('logout')
                        } else {
                            toastr.error(error)
                        }
                    });
            },
            goBackToPageTop: function () {
                $(document).ready(function () {
                    $(this).scrollTop(0);
                });
            },
            getCategorizationId: function (Id) {
                this.$emit("getCategorizationId", Id);
            }
        },
        created: function () {
            this.nodeColor = Common.hierarchyNodeColor;
            this.isLoading = true;
            // this.getHierarchyInfo('', '');
        },
        components: {
            // ExistingTaxonomyNodeCollapses,
            CompanyNodeCollapses,
            loader,
            vSelect,
        }
    }
</script>
