<template>
    <div class="container-fluid px-0">
        <div class="row collapse show no-gutters d-flex h-100 position-relative">
            <div class="col-lg-8 company-profile-tab mx-auto">
                <div class="panel-body companyManageForm">
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="null !=form.conduct_financing" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Have You Conducted Financing in the Last 6 Months?<span class="exclamation-positions" v-b-tooltip.hover
                                                    title="Investors rely upon this information to analyze their proposed investments."><i
                                class="exclamation-circle-vue">i</i></span></label>
                            <v-select :options="[{label: 'YES', id: 1}, {label: 'NO', id: 0}]"
                                      :clearable="false"
                                      class="w100"
                                      placeholder="Select Yes or No"
                                      ref="conduct_financing"
                                      @input="resetFinancingType"
                                      v-model="form.conduct_financing"
                                      :reduce="conduct => conduct.id"
                            ></v-select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <template v-if="form.conduct_financing != '' && form.conduct_financing == 1">
                            <div class="col-lg-12">
                                <label class="label-with-under-p">
                                    <i v-if="form.financing_type.length" class="fas fa-check-circle"></i>
                                    <i v-else class="fas fa-times-circle"></i>
                                    Type of
                                    Financing</label>
                                <p class="p-under-input-label fs-12">Financing Examples include IPO,
                                    Angel
                                    Investors, Reg CF</p>
                                <v-select label="name" multiple
                                          :selectable="financingSelectHide"
                                          :options="financingTypeList"
                                          :clearable="false"
                                          class="w100"
                                          @input="showRelatedField($event, 'financingTypeIds')"
                                          placeholder="Select the Options that Apply"
                                          v-model="form.financing_type"></v-select>
                            </div>
                        </template>
                    </div>

                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.company_valuation" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                What is your Company's Most Recent
                                Valuation?<span class="exclamation-positions" v-b-tooltip.hover
                                                title="Investors rely upon this information to analyze their proposed investments."><i
                                class="exclamation-circle-vue">i</i></span></label>
                            <input type="text" class="form-control" placeholder="Type in a number"
                                   autocomplete="off"
                                   ref="company_valuation"
                                   @input="changeField"
                                   v-model="form.company_valuation"
                                   @keypress="stripTheGarbage($event)" @blur="formatDollars()"
                                   @focus="formatDollarsToNumber()"/>

                            <!--<div v-if="!$v.form.company_valuation.patternValid" class="invalid-feedback">
                                <span>Companies Valuation must be a whole number value</span>
                            </div>-->
                        </div>

                    </div>
                    <template>
                        <div class="form-group row">
                            <div class="col-lg-12">
                                <label>
                                    <i v-if="null !=form.audited_finance" class="fas fa-check-circle"></i>
                                    <i v-else class="fas fa-times-circle"></i>
                                    Does Company Have Audited
                                    Financials?<span class="exclamation-positions" v-b-tooltip.hover
                                                     title="Many investors rely upon audited financial statements to analyze their proposed investments. Let investors know if you have audited financials. "><i
                                    class="exclamation-circle-vue">i</i></span></label>
                                <v-select label="labelAu"
                                          :options="[{labelAu: 'YES', audit_id: 1},{labelAu: 'NO', audit_id: 0}]"
                                          :clearable="false"
                                          class="w100"
                                          @input="changeField"
                                          placeholder="Select Yes or No"
                                          v-model="form.audited_finance"
                                          :reduce="audit => audit.audit_id"
                                ></v-select>
                            </div>
                        </div>
                    </template>
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.intelletual_property.length" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Does the Company Have Any
                                Intellectual Property?<span class="exclamation-positions" v-b-tooltip.hover
                                                            title="Intellectual property is an important legal and financial asset, and is attractive to investors. Let investors know if you have intellectual property."><i
                                class="exclamation-circle-vue">i</i></span></label>
                            <v-select label="name"
                                      multiple
                                      :selectable="intelletualPropertySelectedHide"
                                      :options="intelletualPropertyList"
                                      :clearable="false"
                                      class="w100"
                                      placeholder="Select the Options that Apply"
                                      ref="intelletual_property"
                                      v-model="form.intelletual_property"
                                      @input="resetIntellectualSelects"
                            ></v-select>

                        </div>
                    </div>
                    <div class="form-group row"
                         v-if="form.intelletual_property != '' && patentTypeCondition == 'Patents'">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.patent_type.length" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Which Type of
                                Patents?</label>
                            <v-select label="name" multiple
                                      :selectable="patentsSelectedHide"
                                      :options="patentsTypeList"
                                      class="w100"
                                      :clearable="false"
                                      @input="showRelatedField($event, 'patentsTypIds')"
                                      placeholder="Select the Options that Apply"
                                      v-model="form.patent_type"></v-select>
                        </div>
                    </div>

                        <div class="text-center mb-4">
                            <button @click.prevent="saveCompanyFinancesData()"
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
        data() {
            return {
                isLoading: false,
                baseCurrencyDacimal: "",
                oldFinancingType:"",
                oldCompanyValuation:"",
                OldConductFinancing:"",
                oldAuditedFinance:"",
                oldIntelletualProperty: "",
                oldPatentType:"",
                oldResearchCoverageType:"",
                oldSharedCommunityResearch:"",

                form:
                    {
                        conduct_financing: "",
                        financing_type: "",
                        audited_finance: "",
                        company_valuation: "",
                        intelletual_property: "",
                        patent_type: "",
                    },
                CompanyFinancesFormData:
                    {
                        conduct_financing: "",
                        financing_type: "",
                        audited_finance: "",
                        company_valuation: "",
                        intelletual_property: "",
                        patent_type: "",
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
                analystRatingList: [],
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
            changeField(){
                if(this.form.company_valuation !== this.oldCompanyValuation){
                    this.$emit("companyValuation", true);
                }else if(this.form.audited_finance !== this.oldAuditedFinance) {
                    this.$emit("companyValuation", true);
                }
                else{
                    this.$emit("companyValuation", false);
                }
            },
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
                //this code is part of changeField function start
                if(this.form.intelletual_property !== this.oldIntelletualProperty){
                    this.$emit("companyValuation", true);
                }else{
                    this.$emit("companyValuation", false);
                }
                //this code is part of changeField function end

                this.intelletualPropertyIds = Object.keys(value).map((key) => {
                    return value[key].id
                })
                if (!this.IsIntellectualSelectNo && value.find((o) => o.name === "No")) {
                    this.IsIntellectualSelectNo = true;
                    this.form.intelletual_property = [{name: "No", "id": 5}];
                    this.intelletualPropertyIds = [5]
                } else if (this.IsIntellectualSelectNo && value.find((o) => o.name === "No")) {
                    this.IsIntellectualSelectNo = false;
                    if (this.intelletualPropertyIds.length == 2) {
                        this.form.intelletual_property = value.slice(1);
                        this.intelletualPropertyIds.splice(0, 1);
                    } else {
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
            resetFinancingType: function (value) {
                //this code is part of changeField function start
                if(this.form.conduct_financing !== this.OldConductFinancing){
                    this.$emit("companyValuation", true);
                }else{
                    this.$emit("companyValuation", false);
                }
                //this code is part of changeField function end
                if (value == 0) {
                    this.form.financing_type = "";
                }
                this.goBackToPageTopAndNextFieldToEnter();
            },
            getStepwiseData: async function () {
                Questionnnaire.getCompanyQuestionnaireData(4)
                    .then((response) => {
                        this.isLoading = false
                        let financesData = response.data.data;
                        this.baseCurrencyDacimal = (financesData.base_currency != null) ? financesData.base_currency.unicode_decimal : '36';

                        this.form.conduct_financing = financesData.conducted_financing_six_month;
                        this.OldConductFinancing = financesData.conducted_financing_six_month;

                        this.form.financing_type = financesData.financing_type;
                        this.oldFinancingType = financesData.financing_type;

                        this.form.company_valuation = financesData.recent_valuation;
                        this.oldCompanyValuation = financesData.recent_valuation;

                        this.form.audited_finance = financesData.audited_financials;
                        this.oldAuditedFinance = financesData.audited_financials;

                        this.form.intelletual_property = financesData.intellectual_property;
                        this.oldIntelletualProperty = financesData.intellectual_property;

                        this.form.patent_type = financesData.patent_type;
                        this.oldPatentType = financesData.patent_type;
                        // console.log(financesData.patent_type)
                        // this.form.research_coverage_type = financesData.patent_type;

                        this.showRelatedField(financesData.financing_type, 'financingTypeIds')
                        this.showRelatedField(financesData.intellectual_property, 'intelletualPropertyIds')
                        this.showRelatedField(financesData.patent_type, 'patentsTypIds')
                        // this.showRelatedField(financesData.research_coverage, 'researchCoverageTypeIds')

                        this.checkPatent();
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
                this.$emit("companyValuation", false);
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



                this.CompanyFinancesFormData.conduct_financing = this.form.conduct_financing;
                this.CompanyFinancesFormData.company_valuation = this.form.company_valuation ?? '';
                this.CompanyFinancesFormData.audited_finance = this.form.audited_finance;
                this.CompanyFinancesFormData.financing_type = finanOptions.join(',');
                this.CompanyFinancesFormData.intelletual_property = intelOptions.join(',');
                this.CompanyFinancesFormData.patent_type = patOptions.join(',');

                this.CompanyFinancesFormData._token = document.querySelector('meta[name="csrf-token"]').content;
                this.isLoading = true
                this.submitButtonDisabled = true;
                Questionnnaire.updateCompanyQuestionnaireData(this.CompanyFinancesFormData, 4)
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
                //this code is part of changeField function start
                if(this.form.financing_type.length !== this.oldFinancingType.length){
                    this.$emit("companyValuation", true);
                }else if(this.form.patent_type !== this.oldPatentType){
                    this.$emit("companyValuation", true);
                }else if(this.form.shared_community_research !== this.oldSharedCommunityResearch){
                    this.$emit("companyValuation", true);
                }
                else{
                    this.$emit("companyValuation", false);
                }
                //this code is part of changeField function end
                this[list] = Object.keys(field).map((key) => {
                    return field[key].id
                })
                if ('intelletualPropertyIds' == list && this[list].includes(5)) {
                    this.IsIntellectualSelectNo = true
                }
            },
            financingSelectHide: function (option) {
                if (!this.financingTypeIds.includes(option.id))
                    return option;
            },
            intelletualPropertySelectedHide: function (option) {
                if (!this.intelletualPropertyIds.includes(option.id))
                    return option;
            },
            patentsSelectedHide: function (option) {
                if (!this.patentsTypIds.includes(option.id))
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
                this.getFinancingTypeList();
                this.getIntelletualPropertyList();
                this.getPatentsTypeList();
                this.getStepwiseData();
            }
        },
        components: {
            loader,
            vSelect,
        }
    };
</script>
