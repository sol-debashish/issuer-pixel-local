<template>
    <div class="container-fluid px-0">
        <div class="row collapse show no-gutters d-flex h-100 position-relative">
            <div class="col-lg-8 company-profile-tab mx-auto">
                <div class="panel-body companyManageForm">
                    <div class="form-group">
                        <label>
                            <i v-if="form.domicile_country" class="fas fa-check-circle"></i>
                            <i v-else class="fas fa-times-circle"></i>
                            Company Country of Domicile
                        </label>
                        <v-select label="name" :options="countries" :clearable="false"
                                  placeholder="Select Country" @input="getEntityTypeList"
                                  v-model="form.domicile_country"
                                  name="country"
                                  autocomplete="new-country"
                                  :reduce="option => option.id"
                        ></v-select>
                    </div>
                    <div class="form-group row"  v-if="form.domicile_country">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.entity_type" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Entity Type -
                                Organizational
                                Structure
                                <span class="exclamation-positions" v-b-tooltip.hover
                                      title="Many companies have the same name (Blue Foods, LLC vs Blue Foods, Inc). Input your organizational structure so our users can tell the difference between companies."><i
                                    class="exclamation-circle-vue">i</i></span>
                            </label>
                            <v-select
                                label="name"
                                class="w100"
                                name="entity_type"
                                :options="entityTypes"
                                :clearable="false"
                                ref="entity_type"
                                v-model="form.entity_type"
                                @input="changeField"
                                :reduce="option => option.id"
                                placeholder="Select Below">
                            </v-select>
                            <span class="invalid-feedback" role="alert" v-if="errors.entity_type">
                                <strong>{{ errors.entity_type[0] }}</strong>
                            </span>
                        </div>

                    </div>
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.trading_and_reporting_status" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Public or Private Company Type<span class="exclamation-positions" v-b-tooltip.hover
                                                                    title="Before forming relationships, Investors, Partners, and Suppliers will want to understand if your domestic or internationally based."><i
                                class="exclamation-circle-vue">i</i></span></label>
                            <v-select label="name" :options="privatePublicCompanyTypes"
                                      v-model="form.trading_and_reporting_status" :clearable="false"
                                      ref="trading_and_reporting_status"
                                      class="w100"
                                      @input="getTradingAndReportingStatusList(form.trading_and_reporting_status,'refresh')"
                                      placeholder="Select Below"
                            ></v-select>
                        </div>
                    </div>
                    <div class="form-group row"
                         v-if="(form.trading_and_reporting_status !=null)?form.trading_and_reporting_status.tag == 'public' || form.trading_and_reporting_status.tag == 'private':''">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.public_private_reporting_status" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                {{reporting_status_label}}</label>
                            <v-select label="name" :options="tradingAndReportingStatusList"
                                      v-model="form.public_private_reporting_status"
                                      :clearable="false"
                                      class="w100"
                                      @input="resetPubliclyTreadedCompany"
                                      placeholder="Select Below"
                            ></v-select>
                        </div>
                    </div>
                    <div class="form-group row"
                         v-if="(!! form.trading_and_reporting_status && form.trading_and_reporting_status.tag == 'public' &&
                         !! form.public_private_reporting_status && (form.public_private_reporting_status.id == 1 ||
                         form.public_private_reporting_status.id == 2))">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.publicly_traded_company" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Type of Publicly Traded
                                Company (USA
                                or International)</label>
                            <v-select label="name" :options="publiclyTradedCompanyTypeList"
                                      v-model="form.publicly_traded_company" :clearable="false"
                                      class="w100"
                                      @input="resetDomesticOrInternationalExchangeTradedOn"
                                      placeholder="Select Below"
                            ></v-select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.shareholder_number" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Number of
                                Shareholders<span class="exclamation-positions" v-b-tooltip.hover
                                                  title="Investors rely upon this information to analyze their proposed investments."><i
                                class="exclamation-circle-vue">i</i></span></label>
                            <v-select label="name" :options="shareholderNumberList"
                                      placeholder="Select Below"
                                      class="w100"
                                      @input="changeField"
                                      ref="shareholder_number"
                                      v-model="form.shareholder_number"
                                      :clearable="false"
                            >
                            </v-select>
                        </div>
                    </div>
                    <div class="form-group row"
                         v-if="(!! form.trading_and_reporting_status && form.trading_and_reporting_status.tag == 'public' &&
                         !!form.public_private_reporting_status && (form.public_private_reporting_status.id == 1 ||
                         form.public_private_reporting_status.id == 2))">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.ticker_symbol" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Ticker Symbol</label>
                            <input type="text" class="form-control" placeholder="Ex: GOOG"
                                   autocomplete="off"
                                   ref="ticker_symbol"
                                   v-model="form.ticker_symbol">
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.base_currency" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Base Currency<span class="exclamation-positions" v-b-tooltip.hover
                                                   title="Investors, partners, and customers need to understand which currency your company operates in, and if it's similar to their base currency."><i
                                class="exclamation-circle-vue">i</i></span></label>
                            <v-select label="name" :options="baseCurrencyList" :clearable="false"
                                      placeholder="Select Below"
                                      ref="base_currency"
                                      class="w100"
                                      @input="changeField"
                                      v-model="form.base_currency"
                            ></v-select>
                        </div>

                    </div>
                    <div class="form-group row"
                         v-if="(!! form.trading_and_reporting_status  && form.trading_and_reporting_status.tag == 'public' &&
                         !! form.public_private_reporting_status && (form.public_private_reporting_status.id == 1 || form.public_private_reporting_status.id == 2) &&
                         !! form.publicly_traded_company && (form.publicly_traded_company.id == 1 || form.publicly_traded_company.id == 2 || form.publicly_traded_company.id == 3))">
                        <div class="col-lg-12">
                            <label class="label-with-under-p">
                                <i v-if="form.exchange_traded_on.length" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Domestic or
                                International Exchange Traded On </label>
                            <p class="p-under-input-label fs-12">if Dual-Listed Select all that Apply</p>
                            <v-select label="name"
                                      multiple
                                      :selectable="selectHide"
                                      class="w100 iet-list"
                                      :options="exchangeTradedList"
                                      @input="showRelatedField($event)"
                                      v-model="form.exchange_traded_on" :clearable="false"
                                      placeholder="Select Options That Apply"></v-select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="!!form.isin" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i> ISIN
                            </label>
                            <input type="text" class="form-control" placeholder="Type in ISIN"
                               autocomplete="off"
                               ref="isin"
                                   @input="changeField"
                               v-model="form.isin" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="!!form.cusip" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i> CUSIP
                            </label>
                            <input type="text" class="form-control" placeholder="Type in CUSIP"
                               autocomplete="off"
                               ref="cusip"
                                   @input="changeField"
                               v-model="form.cusip" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="null != form.conglomerate" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Are You a Conglomerate?<span class="exclamation-positions" v-b-tooltip.hover
                                                   title="Investors rely upon this information to analyze their proposed investments."><i
                                class="exclamation-circle-vue">i</i></span></label>
                            <v-select :options="[{label: 'YES', id: 1},{label: 'NO', id: 0}]"
                                      :clearable="false"
                                      placeholder="Select Yes or No"
                                      class="w100"
                                      ref="conglomerate"
                                      v-model="form.conglomerate"
                                      :reduce="option => option.id"
                                      @input="resetSubsidiaryData"
                            ></v-select>
                        </div>
                    </div>

                    <div class="form-group row" v-if="form.conglomerate">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.subsidiary_name.length" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Name of Subsidiaries (<span
                                class="label-caption"><i>Press Enter or comma to separate entries</i></span>)</label>
                            <v-select
                                no-drop
                                taggable multiple
                                class="w100"
                                :select-on-key-codes="[188, 13]"
                                :close-on-select="false"
                                placeholder="Ex: A, B"
                                @input="changeField"
                                v-model="form.subsidiary_name"

                            />
                        </div>
                    </div>
                        <div class="text-center mb-4">
                            <button @click.prevent="saveCompanyTypesData()"
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

                oldDomicileCountry: "",
                oldEntityType: "",
                oldTradingAndReportingStatus: "",
                oldPublicPrivateReportingStatus: "",
                oldShareholderNumber: "",
                oldBaseCurrency: "",
                oldIsin: "",
                oldCusip: "",
                oldConglomerate: "",
                oldSubsidiaryName: [],

                form:
                    {
                        domicile_country: "",
                        entity_type: "",
                        trading_and_reporting_status: "",
                        public_private_reporting_status: "",
                        base_currency: "",
                        publicly_traded_company: "",
                        exchange_traded_on: "",
                        shareholder_number: "",
                        ticker_symbol: "",
                        isin: "",
                        cusip: "",
                        conglomerate: "",
                        subsidiary_name: [],
                    },
                CompanyTypesFormData:
                    {
                        domicile_country: "",
                        entity_type: "",
                        trading_and_reporting_status: "",
                        trading_and_reporting_status_tag: "",
                        public_private_reporting_status: "",
                        base_currency: "",
                        publicly_traded_company: "",
                        exchange_traded_on: "",
                        shareholder_number: "",
                        ticker_symbol: "",
                        isin: "",
                        cusip: "",
                        conglomerate: "",
                        subsidiary_name: [],
                    },
                errors: [],
                countries: [],
                entityTypes: [],
                shareholderNumberList: [],
                reporting_status_label: "",
                privatePublicCompanyTypes: [],
                baseCurrencyList: [],
                publiclyTradedCompanyTypeList: [],
                exchangeTradedList: [],
                tradingAndReportingStatusList: [],
                exchangeTradedIds: [],
            };
        },
        methods: {
            changeField(){
                if(this.form.entity_type !== this.oldEntityType){
                    this.$emit("companyStructureFormChanged", true);
                }else if(this.form.shareholder_number !== this.oldShareholderNumber) {
                    this.$emit("companyStructureFormChanged", true);
                }else if(this.form.base_currency !== this.oldBaseCurrency) {
                    this.$emit("companyStructureFormChanged", true);
                }else if(this.form.isin !== this.oldIsin) {
                    this.$emit("companyStructureFormChanged", true);
                }else if(this.form.cusip !== this.oldCusip) {
                    this.$emit("companyStructureFormChanged", true);
                }else if(this.form.subsidiary_name.length !== this.oldSubsidiaryName.length) {
                    this.$emit("companyStructureFormChanged", true);
                }
                else{
                    this.$emit("companyStructureFormChanged", false);
                }
            },
            getCountryList: async function () {
                axios.get('/api/country-list')
                    .then(response => {
                        this.countries = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            getEntityTypeList: async function (value) {
                //this code is part of changeField function start
                if(this.form.domicile_country !== this.oldDomicileCountry){
                    this.$emit("companyStructureFormChanged", true);
                }else{
                    this.$emit("companyStructureFormChanged", false);
                }
                //this code is part of changeField function end
                this.form.entity_type = "";
                return axios.get('/api/get-entity-type/'+value)
                    .then(response => {
                        this.entityTypes = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            getShareholderNumberList: async function () {
                return axios.get('/api/get-shareholder-number-list')
                    .then(response => {
                        this.shareholderNumberList = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            getPrivatePublicCompanyType: function () {
                axios.get('/api/get-private-public-company-type')
                    .then(response => {
                        this.privatePublicCompanyTypes = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            getBaseCurrencyList: function () {
                axios.get('/api/get-base-currency-list')
                    .then(response => {
                        this.baseCurrencyList = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            getTradingAndReportingStatusList: async function (value, type) {
                //this code is part of changeField function start
                if(this.form.trading_and_reporting_status !== this.oldTradingAndReportingStatus){
                    this.$emit("companyStructureFormChanged", true);
                }else{
                    this.$emit("companyStructureFormChanged", false);
                }
                //this code is part of changeField function end
                if (value != null) {
                    if ('public' == value.tag) {
                        this.reporting_status_label = "Public Trading OR  Reporting Status"
                    } else if ('private' == value.tag) {
                        this.reporting_status_label = "Private Trading and Reporting Status"
                    }
                    await axios.get('/api/get-trading-and-reporting-status-list/' + value.tag)
                        .then(response => {
                            this.tradingAndReportingStatusList = response.data.data
                            if (type == 'refresh') {
                                this.form.public_private_reporting_status = 0;
                                this.form.publicly_traded_company = 0;
                                this.form.ticker_symbol = "";
                                this.form.exchange_traded_on = "";
                            }
                            this.isLoading = false
                        })
                        .catch(error => console.log(error))
                }
                this.goBackToPageTopAndNextFieldToEnter();
            },
            resetPubliclyTreadedCompany: function(){
                //this code is part of changeField function start
                if(this.form.public_private_reporting_status !== this.oldPublicPrivateReportingStatus){
                    this.$emit("companyStructureFormChanged", true);
                }else{
                    this.$emit("companyStructureFormChanged", false);
                }
                //this code is part of changeField function end
               this.form.publicly_traded_company = "";
               this.form.ticker_symbol = "";
                this.form.exchange_traded_on = "";
            },
            getPubliclyTradedCompanyTypeList: function () {
                axios.get('/api/get-publicly-traded-company-type-list')
                    .then(response => {
                        this.publiclyTradedCompanyTypeList = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            getExchangeTradedList: function () {
                axios.get('/api/get-exchange-traded-list')
                    .then(response => {
                        this.exchangeTradedList = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            resetDomesticOrInternationalExchangeTradedOn: function(){
                this.form.exchange_traded_on = "";
            },
            resetSubsidiaryData: function (value) {
                    if(this.form.conglomerate !== this.oldConglomerate) {
                        this.$emit("companyStructureFormChanged", true);
                    }
                    else{
                        this.$emit("companyStructureFormChanged", false);
                    }
                if (value == 0) {
                    this.form.subsidiary_name = [];
                }
            },
            getStepwiseData: async function () {
                Questionnnaire.getCompanyQuestionnaireData(3)
                    .then((response) => {
                        this.isLoading = false
                        let typesData = response.data.data;
                        this.form.domicile_country = typesData.domicile_country;
                        this.oldDomicileCountry = typesData.domicile_country;

                        this.getEntityTypeList(typesData.domicile_country);
                        this.form.entity_type = typesData.entity_type;
                        this.oldEntityType = typesData.entity_type;

                        this.form.trading_and_reporting_status = typesData.public_private_type;
                        this.oldTradingAndReportingStatus = typesData.public_private_type;

                        this.form.base_currency = typesData.base_currency;
                        this.oldBaseCurrency = typesData.base_currency;

                        this.form.publicly_traded_company = typesData.publicly_traded_type;
                        this.form.public_private_reporting_status = typesData.trading_status;
                        this.oldPublicPrivateReportingStatus = typesData.trading_status;

                        this.form.exchange_traded_on = typesData.exchange_traded_on;
                        this.form.shareholder_number = typesData.numberof_shareholders;
                        this.oldShareholderNumber = typesData.numberof_shareholders;

                        this.form.ticker_symbol = typesData.ticker_symbol;
                        this.form.isin = typesData.isin;
                        this.oldIsin = typesData.isin;

                        this.form.cusip = typesData.cusip;
                        this.oldCusip = typesData.cusip;

                        this.form.conglomerate = typesData.conglomerate;
                        this.oldConglomerate = typesData.conglomerate;

                        this.form.subsidiary_name = Object.keys(typesData.conglomerate_subsidiary).map((key) => {
                            return typesData.conglomerate_subsidiary[key].name
                        })
                        this.oldSubsidiaryName = Object.keys(typesData.conglomerate_subsidiary).map((key) => {
                            return typesData.conglomerate_subsidiary[key].name
                        })
                        this.showRelatedField(typesData.exchange_traded_on)
                        this.getTradingAndReportingStatusList(typesData.public_private_type, 'load');
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
            saveCompanyTypesData() {
                this.$emit("companyStructureFormChanged", false);
                /*this.$v.form.entity_type.$touch();
                this.$v.form.trading_and_reporting_status.$touch();
                this.$v.form.base_currency.$touch();
                this.$v.form.shareholder_number.$touch();
                if (this.form.trading_and_reporting_status.tag == 'public') {
                    this.$v.form.ticker_symbol.$touch();
                }
                this.$v.form.conglomerate.$touch();
                if (this.$v.form.entity_type.$invalid || this.$v.form.trading_and_reporting_status.$invalid || this.$v.form.base_currency.$invalid || this.$v.form.shareholder_number.$invalid
                    || (this.$v.form.ticker_symbol.$invalid && (this.form.trading_and_reporting_status != null) ? this.form.trading_and_reporting_status.tag == 'public' : '' && (this.form.public_private_reporting_status.id == 1 || this.form.public_private_reporting_status.id == 2))
                    || this.$v.form.conglomerate.$invalid) {

                    if (this.$v.form.entity_type.$invalid) {
                        this.$refs.entity_type.$el.querySelector('input').focus();
                    } else if (this.$v.form.trading_and_reporting_status.$invalid) {
                        this.$refs.trading_and_reporting_status.$el.querySelector('input').focus();
                    } else if (this.$v.form.shareholder_number.$invalid) {
                        this.$refs.shareholder_number.$el.querySelector('input').focus();
                    } else if (this.$v.form.ticker_symbol.$invalid && (this.form.trading_and_reporting_status != null) ? this.form.trading_and_reporting_status.tag == 'public':'') {
                        this.$refs.ticker_symbol.focus();
                    } else if (this.$v.form.base_currency.$invalid) {
                        this.$refs.base_currency.$el.querySelector('input').focus();
                    } else if (this.$v.form.conglomerate.$invalid) {
                        this.$refs.conglomerate.$el.querySelector('input').focus();
                    }
                    return false;
                }*/

                this.errors = [];
                let exchangeTradedOptions = [];
                for (let extron = 0; extron < this.form.exchange_traded_on.length; extron++) {
                    exchangeTradedOptions.push(this.form.exchange_traded_on[extron].id);
                }

                this.CompanyTypesFormData.domicile_country = this.form.domicile_country ? this.form.domicile_country : '';
                this.CompanyTypesFormData.entity_type = this.form.entity_type ? this.form.entity_type : '';
                this.CompanyTypesFormData.trading_and_reporting_status = this.form.trading_and_reporting_status ? this.form.trading_and_reporting_status.id : '';
                this.CompanyTypesFormData.trading_and_reporting_status_tag = this.form.trading_and_reporting_status ? this.form.trading_and_reporting_status.tag : '';
                this.CompanyTypesFormData.base_currency = this.form.base_currency ? this.form.base_currency.id : '';
                this.CompanyTypesFormData.shareholder_number = this.form.base_currency ? this.form.shareholder_number.id : '';
                this.CompanyTypesFormData.ticker_symbol = this.form.ticker_symbol ?? '';
                this.CompanyTypesFormData.isin = this.form.isin;
                this.CompanyTypesFormData.cusip = this.form.cusip;
                this.CompanyTypesFormData.conglomerate = this.form.conglomerate;
                this.CompanyTypesFormData.subsidiary_name = JSON.stringify(this.form.subsidiary_name);
                this.CompanyTypesFormData.publicly_traded_company = this.form.publicly_traded_company ? this.form.publicly_traded_company.id : '';
                this.CompanyTypesFormData.public_private_reporting_status = this.form.public_private_reporting_status ? this.form.public_private_reporting_status.id : '';
                this.CompanyTypesFormData.exchange_traded_on = exchangeTradedOptions.join(',');
                this.isLoading = true
                this.submitButtonDisabled = true
                Questionnnaire.updateCompanyQuestionnaireData(this.CompanyTypesFormData, 3)
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
            goBackToPageTopAndNextFieldToEnter: function () {
                $(document).ready(function () {
                    $(this).scrollTop(0);
                    $('input, select, textarea').on('keydown', function (e) {
                        if (e.keyCode == 13) {
                            var focusable = $('input, select, textarea').filter(':visible');
                            focusable.eq(focusable.index(this) + 1).focus();
                            return false;
                        }
                    });
                });
            },
            showRelatedField: function (field) {
                this.exchangeTradedIds = Object.keys(field).map((key) => {
                    return field[key].id
                })
            },
            selectHide: function (option) {
                if (!this.exchangeTradedIds.includes(option.id))
                    return option;
            },
            loadComponentData: async function () {
                this.isLoading = true
                this.goBackToPageTopAndNextFieldToEnter();
                this.getPrivatePublicCompanyType();
                this.getBaseCurrencyList();
                await this.getCountryList();
                // await this.getEntityTypeList();
                this.getPubliclyTradedCompanyTypeList();
                this.getExchangeTradedList();
                await this.getShareholderNumberList();
                this.getStepwiseData();
            }
        },
        components: {
            loader,
            vSelect,
        }
    };
</script>
