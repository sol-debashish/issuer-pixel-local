<template>
    <section class="home">
        <Navigation/>
        <div class="container-fluid px-0">
            <div class="row collapse show no-gutters d-flex h-100 position-relative">
                <sidebar></sidebar>
                <div class="col p-5">
                    <profile-complete-banner></profile-complete-banner>
                    <h2 class="text-center">Edit Company Contacts</h2>
                    <div class="row company-profile-container">
                        <div class="col-md-7 mx-auto">
                            <div class="panel-body">
                                <div class="form-group mb-5">
                                    <label class="control-label font-weight-bold">Please List the Company's
                                        Founders</label>
                                    <template v-for="(input, index) in form.company_founders">
                                        <input type="text" class="form-control go-next-with-enter"
                                               placeholder="Ex: John Smith"
                                               autocomplete="new-founders" v-model="input.name">
                                        <div class="float-right mt-1 add-multiple cursor-pointer"
                                             @click="addMoreFounder"
                                             v-if="0 == index">+ Add Founder
                                        </div>
                                        <div class="float-right mt-1 add-multiple cursor-pointer"
                                             @click="removeFounder(index)" v-else>
                                            - Remove Founder
                                        </div>
                                    </template>

                                </div>

                                <div class="form-group">
                                    <label class="control-label font-weight-bold">Please List the CEO</label>
                                    <input
                                        type="text"
                                        class="form-control go-next-with-enter"
                                        placeholder="Ex: John Smith"
                                        autocomplete="off"
                                        ref="ceo_list"
                                        v-model="form.ceo_list"
                                    >
                                </div>
                                <div class="form-group">
                                    <label class="control-label font-weight-bold">Please List the
                                        CFO</label>
                                    <input
                                        type="text"
                                        class="form-control go-next-with-enter"
                                        placeholder="Ex: John Smith"
                                        autocomplete="off"
                                        ref="cfo_list"
                                        v-model="form.cfo_list"
                                    >
                                </div>
                                <div class="form-group">
                                    <label class="control-label font-weight-bold label-with-under-p">Email
                                        Address of Sales
                                        Department</label>
                                    <!--                                    <p class="p-under-input-label">Please put the email address for the sales or business development department</p>-->
                                    <input
                                        type="email"
                                        class="form-control go-next-with-enter"
                                        autocomplete="new-sales-email"
                                        ref="sales_dept_email"
                                        :class="{ 'is-invalid': $v.form.sales_dept_email.$error }"
                                        v-model="form.sales_dept_email"
                                        placeholder="Ex: John@company.com">

                                    <div v-if="!$v.form.sales_dept_email.email" class="invalid-feedback">The
                                        email is
                                        not
                                        valid.
                                    </div>
                                    <span class="invalid-feedback" role="alert"
                                          v-if="errors.sales_dept_email">
                                                <strong>{{ errors.sales_dept_email[0] }}</strong>
                                            </span>
                                </div>
                                <div class="form-group">
                                    <label class="control-label font-weight-bold">Email Address of Company’s
                                        Investor
                                        Relations Contact</label>
                                    <input type="email"
                                           class="form-control go-next-with-enter"
                                           autocomplete="new-relation-email"
                                           ref="investor_relation_contact_email"
                                           :class="{ 'is-invalid': $v.form.investor_relation_contact_email.$error }"
                                           v-model="form.investor_relation_contact_email"
                                           placeholder="Ex: John@company.com">

                                    <div v-if="!$v.form.investor_relation_contact_email.email"
                                         class="invalid-feedback">
                                        The
                                        email is not valid.
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label font-weight-bold">Please List the Strategic
                                        Partnerships (<span class="label-caption"><i>Press Enter or comma to separate entries</i></span>)
                                        <span class="" v-b-tooltip.hover title="This information is used to improve your experience on the platform and will not be displayed publicly."><i class="fas fa-question-circle text-dark"></i></span>
                                    </label>
                                    <v-select
                                        no-drop
                                        taggable multiple
                                        :select-on-key-codes="[188, 13]"
                                        :close-on-select="false"
                                        placeholder="Ex: Coca Cola"
                                        v-model="form.strategic_partnership"
                                    />
                                </div>
                                <div class="form-group">
                                    <label class="control-label font-weight-bold">Please List Key
                                        Suppliers (<span class="label-caption"><i>Press Enter or comma to separate entries</i></span>)
                                        <span class="" v-b-tooltip.hover title="This information is used to improve your experience on the platform and will not be displayed publicly."><i class="fas fa-question-circle text-dark"></i></span>
                                    </label>
                                    <v-select
                                        no-drop
                                        taggable multiple
                                        :select-on-key-codes="[188, 13]"
                                        :close-on-select="false"
                                        placeholder="Ex: Cisco"
                                        v-model="form.vendors"
                                    />
                                </div>
                                <div class="form-group">
                                    <label class="control-label font-weight-bold">Who Are Your Top
                                        Competitors? (<span class="label-caption"><i>Press Enter or comma to separate entries</i></span>)
                                        <span class="" v-b-tooltip.hover title="This information is used to improve your experience on the platform and will not be displayed publicly."><i class="fas fa-question-circle text-dark"></i></span>
                                    </label>

                                    <v-select
                                        no-drop
                                        taggable multiple
                                        :select-on-key-codes="[188, 13]"
                                        :close-on-select="false"
                                        placeholder="Ex: Google, WalMart, Amazon"
                                        v-model="form.top_competitors"
                                    />
                                </div>

                                <router-link link :to="{ name: 'CompanyQuestionnairesDetails','hash': '#executives'}"
                                             class="btn btn-back-next btn-profile-edit">Cancel
                                </router-link>
                                <div class="float-right">
                                    <button @click.prevent="saveCompanyExecutivesData('close')"
                                            class="btn btn-back-next btn-profile-edit">Save and Close
                                    </button>
                                    <button @click.prevent="saveCompanyExecutivesData('continue')"
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
                        ceo_list: "",
                        cfo_list: "",
                        sales_dept_email: "",
                        investor_relation_contact_email: "",
                        top_competitors: "",
                        company_founders: [],
                        strategic_partnership: [],
                        vendors: [],
                    },
                CompanyExecutivesFormData:
                    {
                        ceo_list: "",
                        cfo_list: "",
                        sales_dept_email: "",
                        investor_relation_contact_email: "",
                        top_competitors: "",
                        company_founders: [],
                        strategic_partnership: [],
                        vendors: [],
                    },
                errors: []
            };
        },
        validations: {
            form: {
                sales_dept_email: {email},
                investor_relation_contact_email: {email},
            },
        },
        methods: {
            addMoreFounder() {
                this.form.company_founders.push({
                    name: ''
                })
                this.NextFieldToEnter();
            },
            removeFounder(index) {
                this.form.company_founders.splice(index, 1)
            },
            getStepwiseData: async function () {
                axios.get('/api/company-questionnaire-data/2/edit')
                    .then((response) => {
                        this.isLoading = false
                        let executivesData = response.data.data;
                        this.form.ceo_list = executivesData.ceo;
                        this.form.cfo_list = executivesData.cfo;
                        this.form.sales_dept_email = executivesData.sales_department_email;
                        this.form.investor_relation_contact_email = executivesData.investor_relations_department_email;
                        this.form.company_founders = executivesData.founders;

                        this.form.strategic_partnership = Object.keys(executivesData.partnerships).map((key) => {
                            return executivesData.partnerships[key].name
                        })
                        this.form.vendors = Object.keys(executivesData.vendors).map((key) => {
                            return executivesData.vendors[key].name
                        })
                        this.form.top_competitors = (null != executivesData.top_competitors) ? executivesData.top_competitors.split(',').map(s => s.trim()) : '';

                        /*Check Founders, Partners and Vendors Data Exist or Empty*/
                        if (executivesData.founders.length == 0) {
                            this.addMoreFounder();
                        }
                        /*End*/
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
            saveCompanyExecutivesData(action) {
                this.$v.form.sales_dept_email.$touch();
                this.$v.form.investor_relation_contact_email.$touch();
                if (this.$v.form.sales_dept_email.$invalid || this.$v.form.investor_relation_contact_email.$invalid) {
                    if (this.$v.form.sales_dept_email.$invalid) {
                        this.$refs.sales_dept_email.focus();
                    } else if (this.$v.form.investor_relation_contact_email.$invalid) {
                        this.$refs.investor_relation_contact_email.focus();
                    }
                    return false;
                }
                this.isLoading = true

                this.errors = [];
                this.CompanyExecutivesFormData.ceo_list = this.form.ceo_list ?? '';
                this.CompanyExecutivesFormData.cfo_list = this.form.cfo_list ?? '';
                this.CompanyExecutivesFormData.sales_dept_email = this.form.sales_dept_email ?? '';
                this.CompanyExecutivesFormData.investor_relation_contact_email = this.form.investor_relation_contact_email ?? '';
                this.CompanyExecutivesFormData.top_competitors = this.form.top_competitors ? this.form.top_competitors.join(', ') : '';
                this.CompanyExecutivesFormData.company_founders = JSON.stringify(this.form.company_founders);
                this.CompanyExecutivesFormData.strategic_partnership = JSON.stringify(this.form.strategic_partnership);
                this.CompanyExecutivesFormData.vendors = JSON.stringify(this.form.vendors);


                Questionnnaire.updateCompanyQuestionnaireData(this.CompanyExecutivesFormData, 2)
                    .then((response) => {
                        this.isLoading = false
                        this.submitButtonDisabled = false;
                        toastr.success(response.data.success.message)
                        if (action == 'continue') {
                            this.$router.push({name: "EditCompanyTypes"});
                        } else {
                            this.$router.push({name: "CompanyQuestionnairesDetails",'hash': '#executives'});
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
            goBackToPageTop: function () {
                $(document).ready(function () {
                    $(this).scrollTop(0);
                });
            },
            NextFieldToEnter: function () {
                $(document).ready(function () {
                    $('.go-next-with-enter, textarea').on('keydown', function (e) {
                        if (e.keyCode == 13) {
                            var focusable = $('.go-next-with-enter, textarea').filter(':visible');
                            focusable.eq(focusable.index(this) + 1).focus();
                            return false;
                        }
                    });
                });
            }
        },
        created: function () {
            this.isLoading = true
            this.goBackToPageTop();
            this.NextFieldToEnter();
            this.addMoreFounder()
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
<style>
    input[type="search"].vs__search::-webkit-input-placeholder {
        color: #000000;
        opacity: 0.5;
    }
</style>
