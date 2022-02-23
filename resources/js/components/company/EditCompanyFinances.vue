<template>
    <section class="home">
        <Navigation/>
        <div class="container-fluid px-0">
            <div class="row collapse show no-gutters d-flex h-100 position-relative">
                <sidebar></sidebar>
                <div class="col p-5">
                    <profile-complete-banner></profile-complete-banner>
                    <h2 class="text-center">Edit Valuation & IP</h2>
                    <div class="row company-profile-container">
                        <div class="col-md-7 mx-auto">
                            <div class="panel-body">
                                <div class="form-group">
                                    <label class="control-label font-weight-bold">Have you conducted financing in the
                                        last 6 months?</label>
                                    <v-select :options="[{label: 'No', id: 0},{label: 'Yes', id: 1}]"
                                              :clearable="false"
                                              placeholder="Select Yes or No"
                                              ref="conduct_financing"
                                              @input="resetFinancingType"
                                              v-model="form.conduct_financing"
                                              :reduce="conduct => conduct.id"
                                    ></v-select>
                                </div>
                                <div class="form-group">
                                    <template  v-if="form.conduct_financing != '' && form.conduct_financing == 1">
                                        <label class="control-label font-weight-bold label-with-under-p">Type of
                                            Financing</label>
                                        <p class="p-under-input-label">Financing Examples include IPO, Angel
                                            Investors, Reg CF</p>
                                        <v-select label="name" multiple
                                                  :selectable="financingSelectHide"
                                                  :options="financingTypeList"
                                                  :clearable="false"
                                                  @input="showRelatedField($event, 'financingTypeIds')"
                                                  placeholder="Select the Options that Apply"
                                                  v-model="form.financing_type"></v-select>
                                    </template>
                                </div>

                                <div class="form-group">
                                    <label class="control-label font-weight-bold">What is your Company's Most Recent
                                        Valuation?</label>
                                    <input type="text" class="form-control" placeholder="Type in a number"
                                           autocomplete="off"
                                           ref="company_valuation"
                                           v-model="form.company_valuation"
                                           @keypress="stripTheGarbage($event)" @blur="formatDollars()"
                                           @focus="formatDollarsToNumber()">
                                    <!--<div v-if="!$v.form.company_valuation.patternValid" class="invalid-feedback">
                                        <span>Companies Valuation must be a whole number value</span>
                                    </div>-->
                                </div>
                                <template>
                                    <div class="form-group">
                                        <label class="control-label font-weight-bold">Does Company Have Audited
                                            Financials?</label>
                                        <v-select label="labelAu"
                                                  :options="[{labelAu: 'No', audit_id: 0},{labelAu: 'Yes', audit_id: 1}]"
                                                  :clearable="false"
                                                  placeholder="Select Yes or No"
                                                  v-model="form.audited_finance"
                                                  :reduce="audit => audit.audit_id"
                                        ></v-select>
                                    </div>
                                </template>
                                <div class="form-group">
                                    <label class="control-label font-weight-bold">Does the Company Have Any
                                        Intellectual Property?</label>
                                    <v-select label="name"
                                              multiple
                                              :selectable="intelletualPropertySelectedHide"
                                              :options="intelletualPropertyList"
                                              :clearable="false"
                                              placeholder="Select the Options that Apply"
                                              ref="intelletual_property"
                                              v-model="form.intelletual_property"
                                              @input="resetIntellectualSelects"
                                    ></v-select>
                                </div>
                                <div class="form-group"
                                     v-if="form.intelletual_property != '' && patentTypeCondition == 'Patents'">
                                    <label class="control-label font-weight-bold">Which Type of
                                        Patents?</label>
                                    <v-select label="name" multiple
                                              :selectable="patentsSelectedHide"
                                              :options="patentsTypeList"
                                              :clearable="false"
                                              @input="showRelatedField($event, 'patentsTypIds')"
                                              placeholder="Select the Options that Apply"
                                              v-model="form.patent_type"></v-select>
                                </div>
                                <div class="form-group">
                                    <label class="control-label font-weight-bold">Type of Research
                                        Coverage</label>
                                    <v-select label="name" multiple
                                              :selectable="researchCoverageSelectedHide"
                                              :options="researchCoverageTypeList"
                                              :clearable="false"
                                              placeholder="Select the options that apply"
                                              ref="research_coverage_type"
                                              v-model="form.research_coverage_type"
                                              @input="checkCommunityResearch"
                                    ></v-select>
                                </div>

                                <div class="form-group" v-if="researchTypeCondition == 'Cummunity'">
                                    <label class="control-label font-weight-bold">Shared Community Research
                                        Platforms</label>
                                    <v-select multiple label="name"
                                              :selectable="sharedCommunityResearchPlatformSelectedHide"
                                              :options="sharedCommunityResearchPlatformList"
                                              :clearable="false"
                                              @input="showRelatedField($event, 'sharedCommunityResearchPlatformIds')"
                                              placeholder="Select the options that apply"
                                              v-model="form.shared_community_research"
                                    ></v-select>
                                </div>
                                <router-link link :to="{ name: 'CompanyQuestionnairesDetails','hash': '#finance'}"
                                             class="btn btn-back-next btn-profile-edit">Cancel
                                </router-link>
                                <div class="float-right">
                                    <button @click.prevent="saveCompanyFinancesData('close')"
                                            class="btn btn-back-next btn-profile-edit">Save and Close
                                    </button>
                                    <button @click.prevent="saveCompanyFinancesData('continue')"
                                            class="btn btn-back-next btn-profile-edit">Save and Continue
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <loader :is-visible="isLoading"></loader>
    </section>
</template>
<script>
    import Questionnnaire from "../../apis/Questionnnaire";
    import vSelect from 'vue-select'
    import Navigation from "../Navigation";
    import loader from '../Loader'
    import sidebar from '../Sidebar'
    import {email, required} from "vuelidate/lib/validators";
    import ProfileCompleteBanner from "../ProfileCompleteBanner";

    export default {
        data() {
            return {
                isLoading: false,
                baseCurrencyDacimal: "",
                form:
                    {
                        conduct_financing: "",
                        financing_type: "",
                        audited_finance: "",
                        company_valuation: "",
                        intelletual_property: "",
                        patent_type: "",
                        research_coverage_type: "",
                        shared_community_research: "",
                    },
                CompanyFinancesFormData:
                    {
                        conduct_financing: "",
                        financing_type: "",
                        audited_finance: "",
                        company_valuation: "",
                        intelletual_property: "",
                        patent_type: "",
                        research_coverage_type: "",
                        shared_community_research: "",
                        _token: '',
                    },
                errors: [],
                IsIntellectualSelectNo: false,
                patentTypeCondition: "",
                researchTypeCondition: "",
                financingTypeList: [],
                financingTypeIds: [],
                intelletualPropertyList: [],
                intelletualPropertyIds: [],
                patentsTypeList: [],
                patentsTypIds: [],
                researchCoverageTypeList: [],
                researchCoverageTypeIds: [],
                analystRatingList: [],
                sharedCommunityResearchPlatformList: [],
                sharedCommunityResearchPlatformIds: [],
            };
        },
        validations: {
            form: {
                company_valuation: {
                    patternValid: function (value) {
                        if (value != null) {
                            //const containsNumber = /[0-9]/.test(value);
                            var num = value.toString().replace(/,/g, ""),
                                thenum = num.replace(/^\D+/g, '');
                            thenum = Math.trunc(thenum)
                            const containsNumber = /^\d*$/.test(thenum);
                            return containsNumber;
                        }
                    }
                },
            },
        },
        methods: {
            getFinancingTypeList: async function () {
                await axios.get('/api/get-financing-type-list')
                    .then(response => {
                        this.financingTypeList = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getIntelletualPropertyList: async function () {
                await axios.get('/api/get-intelletual-property-list')
                    .then(response => {
                        this.intelletualPropertyList = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getPatentsTypeList: async function () {
                await axios.get('/api/get-patent-type-list')
                    .then(response => {
                        this.patentsTypeList = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
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
            resetIntellectualSelects: function (value) {
                this.intelletualPropertyIds = Object.keys(value).map((key) => {
                    return value[key].id
                })
                if (!this.IsIntellectualSelectNo && value.find((o) => o.name === "No")) {
                    this.IsIntellectualSelectNo = true;
                    this.form.intelletual_property = [{name: "No", "id": 5}];
                    this.intelletualPropertyIds = [5]
                } else if (this.IsIntellectualSelectNo && value.find((o) => o.name === "No")) {
                    this.IsIntellectualSelectNo = false;
                    if(this.intelletualPropertyIds.length == 2){
                        this.form.intelletual_property = value.slice(1);
                        this.intelletualPropertyIds.splice(0, 1);
                    }
                    else {
                        this.form.intelletual_property = [{name: "No", "id": 5}];
                        this.intelletualPropertyIds = [5]
                    }
                }
                this.checkPatent();
            },
            checkPatent: function () {
                const isObjectPatent = this.form.intelletual_property.find((o) => o.name === "Patents");
                if (isObjectPatent) {
                    this.patentTypeCondition = "Patents";
                } else {
                    this.patentTypeCondition = "";
                    this.form.patent_type = "";
                }
            },
            checkCommunityResearch: function (value) {
                if(!!value)
                {
                    this.researchCoverageTypeIds = Object.keys(value).map((key) => {
                        return value[key].id
                    })
                }

                const isObjectcommunity = this.form.research_coverage_type.find((o) => o.id === 4);
                if (isObjectcommunity) {
                    this.researchTypeCondition = "Cummunity";
                } else {
                    this.researchTypeCondition = "";
                    this.form.shared_community_research="";
                }
            },
            resetFinancingType: function (value) {
                if (value == 0) {
                    this.form.financing_type = "";
                }
                this.goBackToPageTopAndNextFieldToEnter();
            },
            getStepwiseData: async function () {
                await axios.get('/api/company-questionnaire-data/4/edit')
                    .then((response) => {
                        this.isLoading = false
                        let financesData = response.data.data;
                        this.baseCurrencyDacimal = (financesData.base_currency != null) ? financesData.base_currency.unicode_decimal : '';
                        this.form.conduct_financing = financesData.conducted_financing_six_month;
                        this.form.financing_type = financesData.financing_type;
                        this.form.company_valuation = financesData.recent_valuation;
                        this.form.audited_finance = financesData.audited_financials;
                        this.form.intelletual_property = financesData.intellectual_property;
                        this.form.patent_type = financesData.patent_type;
                        this.form.research_coverage_type = financesData.research_coverage;
                        this.form.shared_community_research = financesData.shared_community_research;
                        this.showRelatedField(financesData.financing_type, 'financingTypeIds')
                        this.showRelatedField(financesData.intellectual_property, 'intelletualPropertyIds')
                        this.showRelatedField(financesData.patent_type, 'patentsTypIds')
                        this.showRelatedField(financesData.research_coverage, 'researchCoverageTypeIds')
                        this.showRelatedField(financesData.shared_community_research, 'sharedCommunityResearchPlatformIds')

                        this.checkPatent();
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
            saveCompanyFinancesData(action) {
                this.errors = [];
                let finanOptions = [],
                    intelOptions = [],
                    patOptions = [],
                    rscOptions = [],
                    scrOptions = []
                ;
                for (let fnct = 0; fnct < this.form.financing_type.length; fnct++) {
                    finanOptions.push(this.form.financing_type[fnct].id);
                }

                for (let intp = 0; intp < this.form.intelletual_property.length; intp++) {
                    intelOptions.push(this.form.intelletual_property[intp].id);
                }

                for (let pat = 0; pat < this.form.patent_type.length; pat++) {
                    patOptions.push(this.form.patent_type[pat].id);
                }

                for (let rsc = 0; rsc < this.form.research_coverage_type.length; rsc++) {
                    rscOptions.push(this.form.research_coverage_type[rsc].id);
                }
                for (let scr = 0; scr < this.form.shared_community_research.length; scr++) {
                    scrOptions.push(this.form.shared_community_research[scr].id);
                }

                this.CompanyFinancesFormData.conduct_financing = this.form.conduct_financing;
                this.CompanyFinancesFormData.company_valuation = this.form.company_valuation ?? '';
                this.CompanyFinancesFormData.audited_finance = this.form.audited_finance;
                this.CompanyFinancesFormData.financing_type = finanOptions.join(',');
                this.CompanyFinancesFormData.intelletual_property = intelOptions.join(',');
                this.CompanyFinancesFormData.patent_type = patOptions.join(',');
                this.CompanyFinancesFormData.research_coverage_type = rscOptions.join(',');
                this.CompanyFinancesFormData.shared_community_research = scrOptions.join(',');

                this.CompanyFinancesFormData._token = document.querySelector('meta[name="csrf-token"]').content;

                Questionnnaire.updateCompanyQuestionnaireData(this.CompanyFinancesFormData, 4)
                    .then((response) => {
                        this.isLoading = false
                        this.submitButtonDisabled = false;
                        toastr.success(response.data.success.message)
                        if (action == 'continue') {
                            this.$router.push({name: "EditCompanySocial"});
                        } else {
                            this.$router.push({name: "CompanyQuestionnairesDetails", 'hash': '#finance'});
                        }
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
            formatDollars() {
                if (this.form.company_valuation != '' && this.form.company_valuation != null) {
                    var num = this.form.company_valuation;
                    num = Number(num);

                    var countDecimals = function (value) {
                        if (Math.floor(value) === value) return 0;
                        return value.toString().split(".")[1].length || 0;
                    }

                    var decimal = countDecimals(num);

                    /*if (decimal < 2) {
                        num = num.toFixed(2)
                    }

                    if (decimal > 2) {
                        num = num.toFixed(decimal)
                    }

                    if (parseInt(num) < 1) {
                        num = "." + String(num).split(".")[1];
                    }

                    this.form.company_valuation = '$'+ num.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');*/

                    if (decimal > 0) {
                        num = num.toFixed(0)
                    }
                    this.form.company_valuation = String.fromCharCode(parseInt(this.baseCurrencyDacimal, 10)) + String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                }
            },
            formatDollarsToNumber() {
                if (this.form.company_valuation != null) {
                    var num = this.form.company_valuation.replace(/,/g, "");
                    var thenum = num.replace(/^\D+/g, '');
                    thenum = Math.trunc(thenum)
                    this.form.company_valuation = (thenum != 0) ? thenum : '';
                }
            },
            showRelatedField: function (field, list) {
                this[list] = Object.keys(field).map((key) => {
                    return field[key].id
                })
                if('intelletualPropertyIds' == list && this[list].includes(5))
                {
                    this.IsIntellectualSelectNo = true
                }
            },
            financingSelectHide: function (option) {
                if(! this.financingTypeIds.includes(option.id))
                    return option;
            },
            intelletualPropertySelectedHide: function (option) {
                if(! this.intelletualPropertyIds.includes(option.id))
                    return option;
            },
            patentsSelectedHide: function (option) {
                if(! this.patentsTypIds.includes(option.id))
                    return option;
            },
            researchCoverageSelectedHide: function (option) {
                if(! this.researchCoverageTypeIds.includes(option.id))
                    return option;
            },
            sharedCommunityResearchPlatformSelectedHide: function (option) {
                if(! this.sharedCommunityResearchPlatformIds.includes(option.id))
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
            }
        },
        created: function () {
            this.isLoading = true
            this.goBackToPageTopAndNextFieldToEnter();
            this.getFinancingTypeList();
            this.getIntelletualPropertyList();
            this.getPatentsTypeList();
            this.getResearchCoverageTypeList();
            this.getSharedCommunityResearchPlatformList();
            this.getStepwiseData();
        },
        components: {
            loader,
            sidebar,
            Navigation,
            ProfileCompleteBanner,
            vSelect,
        }
    };
</script>
