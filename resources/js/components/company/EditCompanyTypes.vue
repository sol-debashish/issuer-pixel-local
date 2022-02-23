<template>
    <section class="home">
        <Navigation/>
        <div class="container-fluid px-0">
            <div class="row collapse show no-gutters d-flex h-100 position-relative">
                <sidebar></sidebar>
                <div class="col p-5">
                    <profile-complete-banner></profile-complete-banner>
                    <h2 class="text-center">Edit Company Structure</h2>
                    <div class="row company-profile-container">
                        <div class="col-md-7 mx-auto">
                            <div class="panel-body">
                                <div class="form-group">
                                    <label class="control-label font-weight-bold">Entity Type -
                                        Organizational
                                        Structure</label>
                                    <v-select
                                        label="name"
                                        name="entity_type"
                                        :options="entityTypes"
                                        :clearable="false"
                                        ref="entity_type"
                                        v-model="form.entity_type"
                                        placeholder="Select Below">
                                    </v-select>
                                    <span class="invalid-feedback" role="alert" v-if="errors.entity_type">
                                        <strong>{{ errors.entity_type[0] }}</strong>
                                    </span>
                                </div>
                                <div class="form-group">
                                    <label class="control-label font-weight-bold">Public or Private Company
                                        Type</label>
                                    <v-select label="name" :options="privatePublicCompanyTypes"
                                              v-model="form.trading_and_reporting_status" :clearable="false"
                                              ref="trading_and_reporting_status"
                                              @input="getTradingAndReportingStatusList(form.trading_and_reporting_status,'refresh')"
                                              placeholder="Select Below"
                                    ></v-select>
                                </div>
                                <div class="form-group"
                                     v-if="(form.trading_and_reporting_status !=null)?form.trading_and_reporting_status.tag == 'public' || form.trading_and_reporting_status.tag == 'private':''">
                                    <label
                                        class="control-label font-weight-bold">{{reporting_status_label}}</label>
                                    <v-select label="name" :options="tradingAndReportingStatusList"
                                              v-model="form.public_private_reporting_status"
                                              :clearable="false"
                                              placeholder="Select Below"
                                    ></v-select>
                                </div>
                                <div class="form-group"
                                     v-if="(form.trading_and_reporting_status !=null)?form.trading_and_reporting_status.tag == 'public':'' && (form.public_private_reporting_status.id == 1 || form.public_private_reporting_status.id == 2)">
                                    <label class="control-label font-weight-bold">Type of Publicly Traded
                                        Company (USA
                                        or International)</label>
                                    <v-select label="name" :options="publiclyTradedCompanyTypeList"
                                              v-model="form.publicly_traded_company" :clearable="false"
                                              placeholder="Select Below"
                                    ></v-select>

                                </div>
                                <div class="form-group">
                                    <label class="control-label font-weight-bold">Number of
                                        Shareholders</label>
                                    <v-select label="name" :options="shareholderNumberList"
                                              placeholder="Select Below"
                                              ref="shareholder_number"
                                              v-model="form.shareholder_number"
                                              v-on:keydown.enter="test()"
                                              :clearable="false"
                                    >
                                    </v-select>
                                </div>
                                <div class="form-group"
                                     v-if="(form.trading_and_reporting_status !=null)?form.trading_and_reporting_status.tag == 'public':'' && (form.public_private_reporting_status.id == 1 || form.public_private_reporting_status.id == 2)">
                                    <label class="control-label font-weight-bold">Ticker Symbol</label>
                                    <input type="text" class="form-control" placeholder="Ex: GOOG"
                                           autocomplete="off"
                                           ref="ticker_symbol"
                                           v-model="form.ticker_symbol">
                                </div>
                                <div class="form-group">
                                    <label class="control-label font-weight-bold">Base Currency</label>
                                    <v-select label="name" :options="baseCurrencyList" :clearable="false"
                                              placeholder="Select Below"
                                              ref="base_currency"
                                              v-model="form.base_currency"
                                    ></v-select>
                                </div>
                                <div class="form-group"
                                     v-if="(form.trading_and_reporting_status !=null)?form.trading_and_reporting_status.tag == 'public':'' && (form.public_private_reporting_status.id == 1 || form.public_private_reporting_status.id == 2) && (form.publicly_traded_company.id == 1 || form.publicly_traded_company.id == 2 || form.publicly_traded_company.id == 3)">
                                    <label class="control-label font-weight-bold label-with-under-p">Domestic or
                                        International Exchange Traded On </label>
                                    <p class="p-under-input-label">if Dual-Listed Select all that Apply</p>
                                    <v-select label="name"
                                              multiple
                                              :selectable="selectHide"
                                              :options="exchangeTradedList"
                                              @input="showRelatedField($event)"
                                              v-model="form.exchange_traded_on" :clearable="false"
                                              placeholder="Select Options That Apply"></v-select>
                                </div>
                                <div class="form-group">
                                    <label class="control-label font-weight-bold">Are you a
                                        Conglomerate?</label>
                                    <v-select :options="[{label: 'No', id: 0},{label: 'Yes', id: 1}]"
                                              :clearable="false"
                                              placeholder="Select Yes or No"
                                              ref="conglomerate"
                                              v-model="form.conglomerate"
                                              :reduce="option => option.id"
                                              @input="resetSubsidiaryData"
                                    ></v-select>
                                </div>

                                <div class="form-group" v-if="form.conglomerate">
                                    <label class="control-label font-weight-bold">Name of subsidiaries (<span
                                        class="label-caption"><i>Press Enter or comma to separate entries</i></span>)</label>
                                    <v-select
                                        no-drop
                                        taggable multiple
                                        :select-on-key-codes="[188, 13]"
                                        :close-on-select="false"
                                        placeholder="Ex: A, B"
                                        v-model="form.subsidiary_name"
                                    />

                                </div>

                                <router-link link :to="{ name: 'CompanyQuestionnairesDetails','hash': '#companyType'}"
                                             class="btn btn-back-next btn-profile-edit">Cancel
                                </router-link>
                                <div class="float-right">
                                    <button @click.prevent="saveCompanyTypesData('close')"
                                            class="btn btn-back-next btn-profile-edit">Save and Close
                                    </button>
                                    <button @click.prevent="saveCompanyTypesData('continue')"
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
                form:
                    {
                        entity_type: "",
                        trading_and_reporting_status: "",
                        public_private_reporting_status: "",
                        base_currency: "",
                        publicly_traded_company: "",
                        exchange_traded_on: "",
                        shareholder_number: "",
                        ticker_symbol: "",
                        conglomerate: "",
                        subsidiary_name: [],
                    },
                CompanyTypesFormData:
                    {
                        entity_type: "",
                        trading_and_reporting_status: "",
                        trading_and_reporting_status_tag: "",
                        public_private_reporting_status: "",
                        base_currency: "",
                        publicly_traded_company: "",
                        exchange_traded_on: "",
                        shareholder_number: "",
                        ticker_symbol: "",
                        conglomerate: "",
                        subsidiary_name: [],
                    },
                errors: [],
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
        validations: {
            form: {},
        },
        methods: {
            test: function () {
                alert("FR")
            },
            getEntityTypeList: async function () {
                return axios.get('/api/get-entity-type')
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
                if (value != null) {
                    if ('public' == value.tag) {
                        this.reporting_status_label = "Public Trading OR  Reporting Status"
                    } else if ('private' == value.tag) {
                        this.reporting_status_label = "Private Trading and Reporting Status"
                    }
                   await axios.get('/api/get-trading-and-reporting-status-list/' + value.id)
                        .then(response => {
                            this.tradingAndReportingStatusList = response.data.data
                            if(type == 'refresh'){
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
            resetSubsidiaryData: function (value) {
                if (value == 0) {
                    this.form.subsidiary_name = [];
                }
            },
            getStepwiseData: async function () {
                await axios.get('/api/company-questionnaire-data/3/edit')
                    .then((response) => {
                        this.isLoading = false
                        let typesData = response.data.data;
                        this.form.entity_type = typesData.entity_type;
                        this.form.trading_and_reporting_status = typesData.public_private_type;
                        this.form.base_currency = typesData.base_currency;
                        this.form.publicly_traded_company = typesData.publicly_traded_type;
                        this.form.public_private_reporting_status = typesData.trading_status;
                        this.form.exchange_traded_on = typesData.exchange_traded_on;
                        this.form.shareholder_number = typesData.numberof_shareholders;
                        this.form.ticker_symbol = typesData.ticker_symbol;
                        this.form.conglomerate = typesData.conglomerate;
                        this.form.subsidiary_name = Object.keys(typesData.conglomerate_subsidiary).map((key) => {
                            return typesData.conglomerate_subsidiary[key].name
                        })
                        this.showRelatedField(typesData.exchange_traded_on)
                        this.getTradingAndReportingStatusList(typesData.public_private_type,'load');
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
            saveCompanyTypesData(action) {
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

                this.CompanyTypesFormData.entity_type = this.form.entity_type ? this.form.entity_type.id : '';
                this.CompanyTypesFormData.trading_and_reporting_status = this.form.trading_and_reporting_status ? this.form.trading_and_reporting_status.id : '';
                this.CompanyTypesFormData.trading_and_reporting_status_tag = this.form.trading_and_reporting_status ? this.form.trading_and_reporting_status.tag : '';
                this.CompanyTypesFormData.base_currency = this.form.base_currency ? this.form.base_currency.id : '';
                this.CompanyTypesFormData.shareholder_number = this.form.base_currency ? this.form.shareholder_number.id : '';
                this.CompanyTypesFormData.ticker_symbol = this.form.ticker_symbol ?? '';
                this.CompanyTypesFormData.conglomerate = this.form.conglomerate;
                this.CompanyTypesFormData.subsidiary_name = JSON.stringify(this.form.subsidiary_name);
                this.CompanyTypesFormData.publicly_traded_company = this.form.publicly_traded_company ? this.form.publicly_traded_company.id : '';
                this.CompanyTypesFormData.public_private_reporting_status = this.form.public_private_reporting_status ? this.form.public_private_reporting_status.id : '';
                this.CompanyTypesFormData.exchange_traded_on = exchangeTradedOptions.join(',');

                Questionnnaire.updateCompanyQuestionnaireData(this.CompanyTypesFormData, 3)
                    .then((response) => {
                        this.isLoading = false
                        this.submitButtonDisabled = false;
                        toastr.success(response.data.success.message)
                        if (action == 'continue') {
                            this.$router.push({name: "EditCompanyFinances"});
                        } else {
                            this.$router.push({name: "CompanyQuestionnairesDetails", 'hash': '#companyType'});
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
                if(! this.exchangeTradedIds.includes(option.id))
                    return option;
            }
        },
        created: async function () {
            this.isLoading = true
            this.goBackToPageTopAndNextFieldToEnter();
            this.getPrivatePublicCompanyType();
            this.getBaseCurrencyList();
            await this.getEntityTypeList();
            this.getPubliclyTradedCompanyTypeList();
            this.getExchangeTradedList();
            await this.getShareholderNumberList();
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
