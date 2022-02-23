<template>
    <section class="home">
        <Navigation/>
        <div class="container-fluid px-0">
            <div class="row collapse show no-gutters d-flex h-100 position-relative">
                <sidebar></sidebar>
                <div class="col p-5">
                    <profile-complete-banner @updateViewKey="updateViewKey"></profile-complete-banner>
                    <h2 class="text-center">Edit Company General Information</h2>
                    <div class="row company-profile-container">
                        <div class="col-md-7 mx-auto">
                            <div class="panel-body">
                                <form id="companyProfileForm">
                                <div class="form-group">
                                    <label class="control-label font-weight-bold">Company Name<span class="text-danger">*</span></label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="CompanyName"
                                        ref="company_name"
                                        :class="{ 'is-invalid': $v.form.company_name.$error }"
                                        v-model="form.company_name"
                                        placeholder="Ex: Google"
                                        autocomplete="new-company">
                                    <div v-if="!$v.form.company_name.required" class="invalid-feedback">
                                        Company name is
                                        required.
                                    </div>

                                    <span class="invalid-feedback" role="alert" v-if="errors.company_name">
                                        <strong>{{ errors.company_name[0] }}</strong>
                                    </span>
                                </div>
                                <div class="form-group">
                                    <label class="control-label font-weight-bold">Headquarters Geographic Location<span class="text-danger">*</span>
                                        <span class="" v-b-tooltip.hover title="US Only for Beta"><i class="fas fa-question-circle text-dark"></i></span>
                                    </label>
                                    <input type="text" class="form-control" placeholder="Address 1"
                                           autocomplete="new-address"
                                           ref="hq_address"
                                           name="Address"
                                           :class="{ 'is-invalid': $v.form.hq_address.$error }"
                                           v-model="form.hq_address">
                                    <div v-if="!$v.form.hq_address.required" class="invalid-feedback">
                                        Address is
                                        required.
                                    </div>
                                    <br/>
                                    <input type="text" name="Address2" class="form-control" placeholder="Address 2"
                                           autocomplete="new-address2" v-model="form.hq_address2">
                                    <br/>
                                    <input type="text" name="City" class="form-control" placeholder="City"
                                           autocomplete="new-city"
                                           ref="hq_city"
                                           :class="{ 'is-invalid': $v.form.hq_city.$error }"
                                           v-model="form.hq_city">
                                    <div v-if="!$v.form.hq_city.required" class="invalid-feedback">
                                        City is
                                        required.
                                    </div>
                                    <br/>
                                    <div class="row">
                                        <div class="col">
                                            <v-select label="name" :options="StateLists" v-model="form.hq_state"
                                                      name="State"
                                                      item-value="name"
                                                      item-text="name"
                                                      :filterBy="filterMatchFirstCharacter"
                                                      :clearable="false"
                                                      autocomplete="new-state"
                                                      ref="hq_state"
                                                      :class="{ 'is-invalid': $v.form.hq_state.$error }"
                                                      placeholder="Select State"
                                                      :reduce="option => option.id"
                                            ></v-select>
                                            <div v-if="!$v.form.hq_state.required" class="invalid-feedback">
                                                State is
                                                required.
                                            </div>
                                        </div>
                                        <div class="col">
                                            <input type="text" class="form-control" placeholder="Zip Code"
                                                   autocomplete="new-zip"
                                                   ref="hq_zip"
                                                   :class="{ 'is-invalid': $v.form.hq_zip.$error }"
                                                   v-model="form.hq_zip">
                                            <div v-if="!$v.form.hq_zip.required" class="invalid-feedback">
                                                Zip Code is
                                                required.
                                            </div>
                                        </div>
                                    </div>

                                    <!--<v-select label="name" :options="countries" :clearable="false"
                                              placeholder="Select Country" @input="getStates"
                                              :class="{ 'is-invalid': $v.form.hq_country.$error }"
                                              v-model="form.hq_country"
                                              :reduce="option => option.id"
                                    ></v-select>
                                    <div v-if="!$v.form.hq_country.required" class="invalid-feedback">
                                        Country is
                                        required.
                                    </div>-->
                                </div>
                                <div class="form-group">
                                    <label class="control-label font-weight-bold">Number of
                                        Employees</label>
                                    <v-select label="name" :options="employeeNumberList" :clearable="false"
                                              placeholder="Select Below"
                                              ref="employee_number"
                                              v-model="form.employee_number">
                                    </v-select>
                                </div>
                                <div class="form-group">
                                    <label class="control-label font-weight-bold">Are you an ESG Business -
                                        (Environmental, Social And Governance Values)</label>
                                    <v-select :options="[{label: 'No', id: 0},{label: 'Yes', id: 1}]"
                                              :clearable="false"
                                              placeholder="Select Yes or No"
                                              ref="esg_business"
                                              v-model="form.esg_business"
                                              :reduce="option => option.id"
                                    ></v-select>
                                </div>
                                <router-link link :to="{name: 'CompanyQuestionnairesDetails','hash': '#profile'}"
                                             class="btn btn-back-next btn-profile-edit">Cancel
                                </router-link>
                                <div class="float-right">
                                    <button @click.prevent="saveCompanyProfileData('close')"
                                            class="btn btn-back-next btn-profile-edit">
                                        Save and Close
                                    </button>
                                    <button @click.prevent="saveCompanyProfileData('continue')"
                                            class="btn btn-back-next btn-profile-edit">
                                        Save and Continue
                                    </button>
                                </div>
                                </form>
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
                        company_name: "",
                        hq_address: "",
                        hq_address2: "",
                        hq_city: "",
                        hq_state: "",
                        hq_country: "",
                        hq_zip: "",
                        employee_number: "",
                        esg_business: "",
                    },
                CompanyProfileFormData:
                    {
                        company_name: "",
                        hq_address: "",
                        hq_address2: "",
                        hq_city: "",
                        hq_state: "",
                        hq_country: "",
                        hq_zip: "",
                        employee_number: "",
                        esg_business: "",
                    },
                errors: [],
                countries: [],
                StateLists: [],
                employeeNumberList: [],
            };
        },
        validations: {
            form: {
                company_name: {required},
                hq_address: {required},
                hq_city: {required},
                hq_state: {required},
                hq_zip: {required},
                //hq_country: {required},
            },
        },
        methods: {
            filterMatchFirstCharacter: function (option, label, search) {
                return (label || '').toLowerCase().startsWith(search.toLowerCase())
            },
            getCountryList: async function () {
                return axios.get('/api/country-list')
                    .then(response => {
                        this.countries = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            getStates: function (value) {
                /*Aet country as default US which table ID is 1*/
                axios.get('/api/get-state-list/1')
                    .then(response => {
                        this.StateLists = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            getEmployeeNumberList: function () {
                axios.get('/api/get-employee-number-list')
                    .then(response => {
                        this.employeeNumberList = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            getStepwiseData: function () {
                axios.get('/api/company-questionnaire-data/1/edit')
                    .then((response) => {
                        let companyData = response.data.data;
                        this.form.company_name = companyData.name;
                        this.form.hq_address = companyData.headquarters.address.street_address_one;
                        this.form.hq_address2 = companyData.headquarters.address.street_address_two;
                        this.form.hq_city = companyData.headquarters.address.city;
                        this.getStates(companyData.headquarters.address.country_code);
                        this.form.hq_state = companyData.headquarters.address.state_id;
                        this.form.hq_country = companyData.headquarters.address.country_code;
                        this.form.hq_zip = companyData.headquarters.address.zip;
                        this.form.employee_number = companyData.numberof_employees;
                        this.form.esg_business = companyData.esg_business;
                        this.isLoading = false
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
            saveCompanyProfileData(action) {
                this.$v.form.company_name.$touch();
                this.$v.form.hq_address.$touch();
                this.$v.form.hq_city.$touch();
                this.$v.form.hq_state.$touch();
                //this.$v.form.hq_country.$touch();
                this.$v.form.hq_zip.$touch();

                if (this.$v.form.company_name.$invalid ||
                    this.$v.form.hq_address.$invalid || this.$v.form.hq_city.$invalid || this.$v.form.hq_state.$invalid
                    // || this.$v.form.hq_country.$invalid
                    || this.$v.form.hq_zip.$invalid
                ) {
                    if (this.$v.form.company_name.$invalid) {
                        this.$refs.company_name.focus();
                    } else if (this.$v.form.hq_address.$invalid) {
                        this.$refs.hq_address.focus();
                    } else if (this.$v.form.hq_city.$invalid) {
                        this.$refs.hq_city.focus();
                    } else if (this.$v.form.hq_state.$invalid) {
                        this.$refs.hq_state.$el.querySelector('input').focus();
                    } else if (this.$v.form.hq_zip.$invalid) {
                        this.$refs.hq_zip.focus();
                    }
                    return false;
                }
                this.errors = [];
                this.CompanyProfileFormData.company_name = this.form.company_name;
                this.CompanyProfileFormData.hq_address = this.form.hq_address;
                this.CompanyProfileFormData.hq_address2 = this.form.hq_address2 ?? '';
                this.CompanyProfileFormData.hq_city = this.form.hq_city;
                this.CompanyProfileFormData.hq_state = this.form.hq_state;
                this.CompanyProfileFormData.hq_zip = this.form.hq_zip;
                this.CompanyProfileFormData.hq_country = 1;/*Set default Us for now which table ID is 1*/
                this.CompanyProfileFormData.employee_number = this.form.employee_number ? this.form.employee_number.id : '';
                this.CompanyProfileFormData.esg_business = this.form.esg_business ?? '';

                Questionnnaire.updateCompanyQuestionnaireData(this.CompanyProfileFormData, 1)
                    .then((response) => {
                        this.isLoading = false
                        this.submitButtonDisabled = false;
                        toastr.success(response.data.success.message)
                        if (action == 'continue') {
                            this.$router.push({name: "EditCompanyExecutives"});
                        } else {
                            this.$router.push({name: "CompanyQuestionnairesDetails", 'hash': '#profile'});
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
                            var focusable = $('input,select, textarea').filter(':visible');
                            focusable.eq(focusable.index(this) + 1).focus();
                            return false;
                        }
                    });
                });
            },
            updateViewKey: function () {
                this.$emit("updateViewKey");
            },
            loadGtagEvent:function () {
                $(document).ready(function () {
                let form = document.querySelector('#companyProfileForm');
                    let fields = {};
                    //console.log(form)
                    let enterField = function(name) {
                        //console.log(name);
                        //console.log(name.name);
                    fields[name] = new Date().getTime();
                }

                    let leaveField = function(e) {
                        let timeSpent;
                        let fieldName = e.target.name;
//console.log(fieldName);
                        let leaveType = e.type;
                    if (fields.hasOwnProperty(fieldName)) {
                        timeSpent = new Date().getTime() - fields[fieldName];
                        if (timeSpent > 0 && timeSpent < 1800000) {
                            window.dataLayer.push({
                                'event' : 'fieldTiming',
                                'timingCategory' : 'General Form Field Timing',
                                'timingVariable' : fieldName,
                                'timingLabel' : leaveType,
                                'timingValue' : timeSpent
                            });
                        }
                        delete fields[fieldName];
                    }
                }

                if (form) {
                    form.addEventListener('focus', function(e) { enterField(e.target.name); }, true);
                    form.addEventListener('blur', function(e) { leaveField(e); }, true);
                    form.addEventListener('change', function(e) { leaveField(e); }, true);
                }
                });
            },
        },
        created: async function () {
            this.isLoading = true
            this.goBackToPageTopAndNextFieldToEnter();
            this.getEmployeeNumberList();
            await this.getCountryList();
            // await this.getStates();
            this.getStepwiseData();
            this.loadGtagEvent();
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
