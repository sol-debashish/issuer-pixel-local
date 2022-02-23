<template>
    <div class="container-fluid px-0">
        <div class="row collapse show no-gutters d-flex h-100 position-relative">
            <div class="col-lg-8 company-profile-tab mx-auto">
                <div class="panel-body companyManageForm">

                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="hasCompanyFounder" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                List the Company's Founders
                                <span class="exclamation-positions" v-b-tooltip.hover
                                      title="Company founders and management team are one of the most important factors driving investor decision. Often more important than even a product or technology itself. Allow investors to know your founders and team."><i
                                    class="exclamation-circle-vue">i</i></span>
                            </label>
                            <template v-for="(input, index) in form.company_founders">
                                <input type="text" class="form-control go-next-with-enter"
                                       placeholder="Ex: John Smith"
                                       @input="changeField"
                                       v-on:keyup=setCompanyFounderCheck($event.target.value)
                                       autocomplete="new-founders" v-model="input.name"/>

                                <div class="float-right my-1 add-multiple cursor-pointer p-1"
                                     @click="addMoreFounder"
                                     v-if="0 == index">+ Add Founder
                                </div>

                                <div class="float-right mt-1 add-multiple cursor-pointer"
                                     @click="removeFounder(index)" v-else>
                                    - Remove Founder
                                </div>
                            </template>
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.ceo_list" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                CEO<span class="exclamation-positions" v-b-tooltip.hover
                                                         title="Company founders and management team are one of the most important factors driving investor decision. — often more important than even a product or technology itself. Allow investors to know your founders and team."><i
                                class="exclamation-circle-vue">i</i></span>
                        </label>
                            <input
                                type="text"
                                @input="changeField"
                                class="form-control go-next-with-enter"
                                placeholder="Ex: John Smith"
                                autocomplete="off"
                                ref="ceo_list"
                                v-model="form.ceo_list"
                            />
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.cfo_list" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                CFO<span class="exclamation-positions" v-b-tooltip.hover
                                                         title="Company founders and management team are one of the most important factors driving investor decision. — often more important than even a product or technology itself. Allow investors to know your founders and team."><i
                                class="exclamation-circle-vue">i</i></span>
                        </label>
                            <input
                                type="text"
                                class="form-control go-next-with-enter"
                                placeholder="Ex: John Smith"
                                autocomplete="off"
                                ref="cfo_list"
                                v-model="form.cfo_list"
                                @input="changeField"
                            />
                        </div>
                    </div>

                    <!-- Changes by John Bay-->
                    <div class="form-group row">
                        <!--<p class="p-under-input-label">Please put the email address for the sales or business development department</p>-->
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.sales_dept_email" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Sales Department Point of Contact<span class="exclamation-positions" v-b-tooltip.hover
                                                                                    title="- Investors want to better understand your sales roadmap and market size before investing -Customers want to connect with you to purchase your product/service."><i
                                class="exclamation-circle-vue">i</i></span></label>
                            <input
                                type="email"
                                @input="changeField"
                                class="form-control go-next-with-enter"
                                autocomplete="new-sales-email"
                                ref="sales_dept_email"
                                :class="{ 'is-invalid': $v.form.sales_dept_email.$error }"
                                v-model="form.sales_dept_email"
                                placeholder="Ex: John@company.com"/>

                            <div v-if="!$v.form.sales_dept_email.email" class="invalid-feedback">
                                The email is not valid.
                            </div>
                            <span class="invalid-feedback" role="alert" v-if="errors.sales_dept_email">
                                            <strong>{{ errors.sales_dept_email[0] }}</strong>
                                    </span>
                        </div>

                        <div class="col-lg-12 mt-2">
                            <input
                                type="text"
                                class="form-control go-next-with-enter"
                                autocomplete="new-sales-phone"
                                ref="sales_dept_phone"
                                v-model="form.sales_dept_phone"
                                placeholder="Phone"
                                @input="acceptPhoneNumber('sales_dept_phone')"
                            />
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.investor_relation_contact_email" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Investor Relations Point of Contact<span class="exclamation-positions" v-b-tooltip.hover
                                                                                      title="Investors want to contact you. Let them know who to contact for inquiries."><i
                                class="exclamation-circle-vue">i</i></span></label>
                            <input type="email"
                                   @input="changeField"
                                   class="form-control go-next-with-enter"
                                   autocomplete="new-relation-email"
                                   ref="investor_relation_contact_email"
                                   :class="{ 'is-invalid': $v.form.investor_relation_contact_email.$error }"
                                   v-model="form.investor_relation_contact_email"
                                   placeholder="Ex: John@company.com"/>
                            <div v-if="!$v.form.investor_relation_contact_email.email"
                                 class="invalid-feedback">
                                The
                                email is not valid.
                            </div>
                        </div>

                        <div class="col-lg-12 mt-2">
                            <input type="text"
                                   class="form-control go-next-with-enter"
                                   autocomplete="new-relation-phone"
                                   ref="investor_relation_contact_phone"
                                   v-model="form.investor_relation_contact_phone"
                                   @input="acceptPhoneNumber('investor_relation_contact_phone')"
                                   placeholder="Phone"/>
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.business_development_contact_email" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Business Development Point of Contact</label>
                            <input type="email"
                                   @input="changeField"
                                   class="form-control go-next-with-enter"
                                   autocomplete="new-relation-email"
                                   ref="business_development_contact_email"
                                   v-model="form.business_development_contact_email"
                                   placeholder="Ex: John@company.com"/>
                        </div>

                        <div class="col-lg-12 mt-2">
                            <input type="text"
                                   class="form-control go-next-with-enter"
                                   autocomplete="new-relation-phone"
                                   ref="business_development_contact_phone"
                                   v-model="form.business_development_contact_phone"
                                   @input="acceptPhoneNumber('business_development_contact_phone')"
                                   placeholder="Phone"/>
                        </div>

                    </div>

                    <!-- End contact related changes -->

                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.strategic_partnership.length" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Please List the Strategic
                                Partnerships (<span
                                class="label-caption"><i>Press Enter or comma to separate entries</i></span>)
                                <span class="" v-b-tooltip.hover
                                      title="This information is used to improve your experience on the platform and provide you with additional relationships"><i
                                    class="fas fa-question-circle text-dark"></i></span>
                                <span class="exclamation-positions" v-b-tooltip.hover
                                      title="By listing your partnerships, we can identify alternative partnerships that may benefit your company"><i
                                    class="exclamation-circle-vue">i</i></span>

                            </label>
                            <v-select
                                no-drop
                                taggable multiple
                                :select-on-key-codes="[188, 13]"
                                class="w100"
                                :close-on-select="false"
                                placeholder="Ex: Coca Cola"
                                @input="changeField"
                                v-model="form.strategic_partnership"
                            />
                        </div>

                    </div>
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.vendors.length" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Please List Key
                                Suppliers (<span
                                class="label-caption"><i>Press Enter or comma to separate entries</i></span>)
                                <span class="" v-b-tooltip.hover
                                      title="This information is used to improve your experience on the platform and provide you with additional relationships"><i
                                    class="fas fa-question-circle text-dark"></i></span>
                                <span class="exclamation-positions" v-b-tooltip.hover
                                      title="By listing your suppliers, we can identify alternative suppliers that may benefit your company"><i
                                    class="exclamation-circle-vue">i</i></span>
                            </label>
                            <v-select
                                no-drop
                                taggable multiple
                                class="w100"
                                :select-on-key-codes="[188, 13]"
                                :close-on-select="false"
                                placeholder="Ex: Cisco"
                                @input="changeField"
                                v-model="form.vendors"
                            />
                        </div>

                    </div>
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.top_competitors.length" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Who Are Your Top
                                Competitors? (<span
                                class="label-caption"><i>Press Enter or comma to separate entries</i></span>)
                                <span class="" v-b-tooltip.hover
                                      title="This information is used to improve your experience on the platform"><i
                                    class="fas fa-question-circle text-dark"></i></span>
                                <span class="exclamation-span" v-b-tooltip.hover
                                      title="- Allow customers who use your competitors products the ability to find your products."><i
                                    class="exclamation-circle-vue">i</i></span>
                            </label>
                            <v-select
                                no-drop
                                taggable multiple
                                :select-on-key-codes="[188, 13]"
                                :close-on-select="false"
                                class="w100"
                                @input="changeField"
                                placeholder="Ex: Google, WalMart, Amazon"
                                v-model="form.top_competitors"
                            />
                        </div>
                    </div>
                        <div class="text-center  mb-4">
                            <button @click.prevent="saveCompanyExecutivesData()"
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
                oldCompanyFounders: [],
                oldCeoList: "",
                oldCfoList: "",
                oldSalesDeptEmail: "",
                oldSalesDeptPhone: "",
                oldInvestorRelationContactEmail: "",
                oldInvestorRelationContactPhone: "",
                oldBusinessDevelopmentContactEmail:"",
                oldBusinessDevelopmentContactPhone: "",
                oldStrategicPartnership:[],
                oldVendors: [],
                oldTopCompetitors: "",

                isLoading: false,
                hasCompanyFounder: false,
                form:
                    {
                        ceo_list: "",
                        cfo_list: "",
                        sales_dept_email: "",
                        sales_dept_phone: "",
                        investor_relation_contact_email: "",
                        investor_relation_contact_phone: "",
                        business_development_contact_email: "",
                        business_development_contact_phone: "",
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
                        sales_dept_phone: "",
                        investor_relation_contact_email: "",
                        investor_relation_contact_phone: "",
                        business_development_contact_email: "",
                        business_development_contact_phone: "",
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
                business_development_contact_email: {email},
            },
        },
        methods: {
            changeField(){
                // console.log(this.form.company_founders);
                // console.log(this.oldCompanyFounders);
                if(this.form.company_founders.length !== this.oldCompanyFounders.length){
                    this.$emit("contactFormChanged", true);
                } else if(this.form.ceo_list !== this.oldCeoList){
                    this.$emit("contactFormChanged", true);
                }else if(this.form.cfo_list !== this.oldCfoList){
                    this.$emit("contactFormChanged", true);
                }else if(this.form.sales_dept_email !== this.oldSalesDeptEmail){
                    this.$emit("contactFormChanged", true);
                }else if(this.form.investor_relation_contact_email !== this.oldInvestorRelationContactEmail){
                    this.$emit("contactFormChanged", true);
                }else if(this.form.business_development_contact_email !== this.oldBusinessDevelopmentContactEmail){
                    this.$emit("contactFormChanged", true);
                }else if(this.form.strategic_partnership.length !== this.oldStrategicPartnership.length){
                    this.$emit("contactFormChanged", true);
                }else if(this.form.vendors.length !== this.oldVendors.length){
                    this.$emit("contactFormChanged", true);
                }else if(this.form.top_competitors.length !== this.oldTopCompetitors.length){
                    this.$emit("contactFormChanged", true);
                }
                else{
                    this.$emit("contactFormChanged", false);
                }
            },
            addMoreFounder() {
                this.form.company_founders.push({
                    name: ''
                })
                this.NextFieldToEnter();
            },
            removeFounder(index) {
                this.form.company_founders.splice(index, 1)
            },
            setCompanyFounderCheck(data) {
                this.hasCompanyFounder = false;
                if (data) {
                    this.hasCompanyFounder = true;
                }
            },
            getStepwiseData: async function () {
                Questionnnaire.getCompanyQuestionnaireData(2)
                    .then((response) => {
                        this.isLoading = false
                        let executivesData = response.data.data;
                        this.form.ceo_list = executivesData.ceo;
                        this.oldCeoList = executivesData.ceo;

                        this.form.cfo_list = executivesData.cfo;
                        this.oldCfoList = executivesData.cfo;

                        this.form.sales_dept_email = executivesData.sales_department_email;
                        this.oldSalesDeptEmail = executivesData.sales_department_email;

                        this.form.sales_dept_phone = executivesData.sales_dept_phone;
                        this.oldSalesDeptPhone = executivesData.sales_dept_phone;

                        this.form.investor_relation_contact_email = executivesData.investor_relations_department_email;
                        this.oldInvestorRelationContactEmail = executivesData.investor_relations_department_email;

                        this.form.investor_relation_contact_phone = executivesData.investor_relation_contact_phone;
                        this.oldInvestorRelationContactPhone = executivesData.investor_relation_contact_phone;

                        this.form.business_development_contact_email = executivesData.business_development_contact_email;
                        this.oldBusinessDevelopmentContactEmail = executivesData.business_development_contact_email;

                        this.form.business_development_contact_phone = executivesData.business_development_contact_phone;
                        this.oldBusinessDevelopmentContactPhone = executivesData.business_development_contact_phone;

                        this.form.company_founders = executivesData.founders;
                        if (executivesData.founders.length > 0) {
                            this.hasCompanyFounder = true
                        }

                        this.oldCompanyFounders = Object.keys(executivesData.founders).map((key) => {
                            return executivesData.founders[key].name
                        })

                        this.form.strategic_partnership = Object.keys(executivesData.partnerships).map((key) => {
                            return executivesData.partnerships[key].name
                        })
                        this.oldStrategicPartnership = Object.keys(executivesData.partnerships).map((key) => {
                            return executivesData.partnerships[key].name
                        })

                        this.form.vendors = Object.keys(executivesData.vendors).map((key) => {
                            return executivesData.vendors[key].name
                        })
                        this.oldVendors = Object.keys(executivesData.vendors).map((key) => {
                            return executivesData.vendors[key].name
                        })
                        this.form.top_competitors = (null != executivesData.top_competitors) ? executivesData.top_competitors.split(',').map(s => s.trim()) : '';
                        this.oldTopCompetitors = (null != executivesData.top_competitors) ? executivesData.top_competitors.split(',').map(s => s.trim()) : '';

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
            saveCompanyExecutivesData() {
                this.$emit("contactFormChanged", false);
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
                this.CompanyExecutivesFormData.sales_dept_phone = this.form.sales_dept_phone ?? '';
                this.CompanyExecutivesFormData.investor_relation_contact_email = this.form.investor_relation_contact_email ?? '';
                this.CompanyExecutivesFormData.investor_relation_contact_phone = this.form.investor_relation_contact_phone ?? '';
                this.CompanyExecutivesFormData.business_development_contact_email = this.form.business_development_contact_email ?? '';
                this.CompanyExecutivesFormData.business_development_contact_phone = this.form.business_development_contact_phone ?? '';
                this.CompanyExecutivesFormData.top_competitors = this.form.top_competitors ? this.form.top_competitors.join(', ') : '';
                this.CompanyExecutivesFormData.company_founders = JSON.stringify(this.form.company_founders);
                this.CompanyExecutivesFormData.strategic_partnership = JSON.stringify(this.form.strategic_partnership);
                this.CompanyExecutivesFormData.vendors = JSON.stringify(this.form.vendors);


                Questionnnaire.updateCompanyQuestionnaireData(this.CompanyExecutivesFormData, 2)
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
            },
            loadComponentData: function () {
                this.isLoading = true
                this.goBackToPageTop();
                this.NextFieldToEnter();
                this.addMoreFounder()
                this.getStepwiseData();
            },
            acceptPhoneNumber(field_name) {
                var x;
                if (field_name == 'sales_dept_phone') {
                    //this code is part of changeField function start
                    if(this.form.sales_dept_phone !== this.oldSalesDeptPhone){
                        this.$emit("contactFormChanged", true);
                    }else{
                        this.$emit("contactFormChanged", false);
                    }
                    //this code is part of changeField function end
                    x = this.form.sales_dept_phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
                    this.form.sales_dept_phone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
                }
                if (field_name == 'investor_relation_contact_phone') {

                    //this code is part of changeField function start
                    if(this.form.investor_relation_contact_phone !== this.oldInvestorRelationContactPhone){
                        this.$emit("contactFormChanged", true);
                    }else{
                        this.$emit("contactFormChanged", false);
                    }
                    //this code is part of changeField function end
                    x = this.form.investor_relation_contact_phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
                    this.form.investor_relation_contact_phone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
                }
                if (field_name == 'business_development_contact_phone') {

                    //this code is part of changeField function start
                    if(this.form.business_development_contact_phone !== this.oldBusinessDevelopmentContactPhone){
                        this.$emit("contactFormChanged", true);
                    }else{
                        this.$emit("contactFormChanged", false);
                    }
                    //this code is part of changeField function end
                    x = this.form.business_development_contact_phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
                    this.form.business_development_contact_phone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
                }
            }
        },
        components: {
            loader,
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
