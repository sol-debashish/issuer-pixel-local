<template>
    <div class="container-fluid px-0">
        <div class="row collapse show no-gutters d-flex h-100 position-relative">
            <div class="col-lg-8 company-profile-tab mx-auto">
                <div class="panel-body companyManageForm">
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.research_coverage_type.length" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Type of Research
                                Coverage<span class="exclamation-positions" v-b-tooltip.hover
                                              title="Investors rely upon this information to analyze their proposed investments."><i
                                class="exclamation-circle-vue">i</i></span></label>
                            <v-select label="name" multiple
                                      :selectable="researchCoverageSelectedHide"
                                      :options="researchCoverageTypeList"
                                      :clearable="false"
                                      class="w100"
                                      placeholder="Select the options that apply"
                                      ref="research_coverage_type"
                                      v-model="form.research_coverage_type"
                                      @input="checkCommunityResearch"
                            ></v-select>

                        </div>
                    </div>

                    <div class="form-group row" v-if="researchTypeCondition == 'Cummunity'">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.shared_community_research.length" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Shared Community Research
                                Platforms</label>
                            <v-select multiple label="name"
                                      :selectable="sharedCommunityResearchPlatformSelectedHide"
                                      :options="sharedCommunityResearchPlatformList"
                                      :clearable="false"
                                      class="w100 scrp-select-list"
                                      @input="showRelatedField($event, 'sharedCommunityResearchPlatformIds')"
                                      placeholder="Select the options that apply"
                                      v-model="form.shared_community_research"
                            ></v-select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.researchFirm_name" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Research Firm Name
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                name="ResearchFirmName"
                                ref="researchFirm_name"
                                v-model="form.researchFirm_name"
                                placeholder="Ex: Google"
                                autocomplete="new-company"/>

                        </div>
                    </div>
                    <div class="text-center mb-4">
                        <button @click.prevent="saveCompanyresearchData()"
                                class="btn btn-primary save-changes">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>

        </div>
        <loader :is-visible="isLoading"></loader>
    </div>
</template>
<script>
import Questionnnaire from "../../apis/Questionnnaire";
import vSelect from 'vue-select'
import loader from '../Loader'
import {email, required} from "vuelidate/lib/validators";

export default {
    name:'ResearchCoverage',
    data() {
        return {
            isLoading: false,
            oldresearchFirm_name:"",
            oldResearchCoverageType:"",
            oldSharedCommunityResearch:"",
            form:
                {
                    researchFirm_name: "",
                    research_coverage_type: "",
                    shared_community_research: "",
                },
            CompanyFinancesFormData:
                {
                    researchFirm_name: "",
                    research_coverage_type: "",
                    shared_community_research: "",
                    _token: '',
                },
            errors: [],
            researchTypeCondition: "",
            researchCoverageTypeList: [],
            researchCoverageTypeIds: [],
            sharedCommunityResearchPlatformList: [],
            sharedCommunityResearchPlatformIds: [],
        };
    },


    methods: {
        changeField() {
            if (this.form.researchFirm_name !== this.oldresearchFirm_name) {
                this.$emit("generalFormChanged", true);
            }
        },
        getResearchCoverageTypeList: async function () {
            await axios.get('/api/get-research-coverage-type-list')
                .then(response => {
                    this.researchCoverageTypeList = response.data.data
                    this.isLoading = false
                })
                .catch(error => console.log(error))
        },
        getSharedCommunityResearchPlatformList: async function () {
            await axios.get('/api/get-shared-community-research-platform-list')
                .then(response => {
                    this.sharedCommunityResearchPlatformList = response.data.data
                    this.isLoading = false
                })
                .catch(error => console.log(error))
        },
        checkCommunityResearch: function (value) {
            //this code is part of changeField function start
            if(this.form.research_coverage_type !== this.oldResearchCoverageType){
                this.$emit("companyValuation", true);
            }else{
                this.$emit("companyValuation", false);
            }
            //this code is part of changeField function end
            if (!!value) {
                this.researchCoverageTypeIds = Object.keys(value).map((key) => {
                    return value[key].id
                })
            }

            const isObjectcommunity = this.form.research_coverage_type.find((o) => o.id === 4);
            if (isObjectcommunity) {
                this.researchTypeCondition = "Cummunity";
            } else {
                this.researchTypeCondition = "";
                this.form.shared_community_research = "";
            }
        },
        getStepwiseData: async function () {
            Questionnnaire.getCompanyQuestionnaireData(10)
                .then((response) => {
                    this.isLoading = false
                    let researchData = response.data.data;
                    this.oldresearchFirm_name = researchData.research_firm_name;
                    this.form.researchFirm_name = researchData.research_firm_name;
                    this.form.research_coverage_type = researchData.research_coverage;
                    this.oldResearchCoverageType =  researchData.research_coverage;
                    this.form.shared_community_research = researchData.shared_community_research;
                    this.oldSharedCommunityResearch = researchData.shared_community_research;
                    this.showRelatedField(researchData.shared_community_research, 'sharedCommunityResearchPlatformIds');
                    this.checkCommunityResearch();
                })
                .catch(error => {
                    this.isLoading = false
                    if (error.response.status == 401) {
                        this.$emit('logout')
                    } else {
                        toastr.error(error)
                    }
                });
        },
        showRelatedField: function (field, list) {
           if(this.form.shared_community_research !== this.oldSharedCommunityResearch){
                this.$emit("companyValuation", true);
            }
            else{
                this.$emit("companyValuation", false);
            }
            //this code is part of changeField function end
            this[list] = Object.keys(field).map((key) => {
                return field[key].id
            })

        },

        saveCompanyresearchData(action) {
            this.$emit("companyValuation", false);
            this.errors = [];
            let rscOptions = [],
                scrOptions = []
            ;


            for (let rsc = 0; rsc < this.form.research_coverage_type.length; rsc++) {
                rscOptions.push(this.form.research_coverage_type[rsc].id);
            }
            for (let scr = 0; scr < this.form.shared_community_research.length; scr++) {
                scrOptions.push(this.form.shared_community_research[scr].id);
            }

            this.CompanyFinancesFormData.researchFirm_name = this.form.researchFirm_name;
            this.CompanyFinancesFormData.research_coverage_type = rscOptions.join(',');
            this.CompanyFinancesFormData.shared_community_research = scrOptions.join(',');

            this.CompanyFinancesFormData._token = document.querySelector('meta[name="csrf-token"]').content;
            this.isLoading = true
            this.submitButtonDisabled = true;
            Questionnnaire.updateCompanyQuestionnaireData(this.CompanyFinancesFormData, 10)
                .then((response) => {
                    this.isLoading = false
                    this.submitButtonDisabled = false;
                    toastr.success(response.data.success.message)
                    /*Impact realtime Percentage Change in tab and banner*/
                    this.$parent.$parent.$parent.getCompanyInfo();
                })
                .catch(error => {
                    this.isLoading = false
                    this.submitButtonDisabled = false;
                    if (error.response.status === 422) {
                        toastr.error(error.response.data.error.message)
                    } else if (error.response.status == 401) {
                        this.$emit('logout')
                    } else {
                        toastr.error(error)
                    }
                });
        },
        stripTheGarbage(e) {
            if (e.keyCode < 48 && e.keyCode !== 46 || e.keyCode > 59) {
                e.preventDefault()
            }
        },
        researchCoverageSelectedHide: function (option) {
            if (!this.researchCoverageTypeIds.includes(option.id))
                return option;
        },
        sharedCommunityResearchPlatformSelectedHide: function (option) {
            if (!this.sharedCommunityResearchPlatformIds.includes(option.id))
                return option;
        },
        goBackToPageTopAndNextFieldToEnter: function () {
            $(document).ready(function () {
                $(this).scrollTop(0);
                $('input, select, textarea, v-select').on('keydown', function (e) {
                    if (e.keyCode == 13) {
                        var focusable = $('input,select, textarea, v-select').filter(':visible');
                        focusable.eq(focusable.index(this) + 1).focus();
                        return false;
                    }
                });
            });
        },
        loadComponentData: function () {
            this.isLoading = true
            this.goBackToPageTopAndNextFieldToEnter();
            this.getResearchCoverageTypeList();
            this.getSharedCommunityResearchPlatformList();
            this.getStepwiseData();
        }
    },
    components: {
        loader,
        vSelect,
    }
};
</script>
