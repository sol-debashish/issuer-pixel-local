<template>
    <div class="container-fluid px-0">
        <div class="row collapse show no-gutters d-flex h-100 position-relative">
            <div class="col-lg-8 company-profile-tab mx-auto">
                <div class="panel-body companyManageForm">
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.formedYear" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Year Company Formed
                            </label>
                            <!--<v-select :options="years"
                                      :clearable="false"
                                      class="w100"
                                      placeholder="Select Year"
                                      v-model="form.formedYear"
                                      :reduce="year => year.key"
                            ></v-select>-->
                            <datepicker input-class="form-control"
                                        v-model="form.formedYear"
                                        :typeable="false"
                                        @input="changeField"
                                        :disabled-dates="{to: new Date(1600, 0, 1), from: new Date()}"
                                        minimum-view="year"
                                        format="yyyy" placeholder="YYYY">
                            </datepicker>
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.firstProductOrService" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                First Product/Service
                            </label>
                            <input type="text" class="form-control" placeholder="Type in Product/Service"
                                   autocomplete="off"
                                   @input="changeField"
                                   v-model="form.firstProductOrService"/>
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.numberOfMajorProductOrService" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Number of Major Products / Services
                            </label>
                            <input type="text" class="form-control" placeholder="Type in number of Major Products/Services"
                                   autocomplete="off"
                                   @input="changeField"
                                   v-model="form.numberOfMajorProductOrService"/>
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="null !=form.changeDirectionOrStrategy" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Did Your Major Product/Service Have a Change in Direction or Strategy?</label>
                            <v-select :options="[{label: 'YES', id: 1}, {label: 'NO', id: 0}]"
                                      :clearable="false"
                                      class="w100"
                                      @input="changeField"
                                      placeholder="Select Yes or No"
                                      v-model="form.changeDirectionOrStrategy"
                                      :reduce="conduct => conduct.id"
                            ></v-select>
                        </div>
                    </div>
                    <template v-if="form.changeDirectionOrStrategy != '' && form.changeDirectionOrStrategy == 1">
                        <div class="form-group row">

                            <div class="col-lg-12">
                                <label>
                                    <i v-if="form.previousProduct" class="fas fa-check-circle"></i>
                                    <i v-else class="fas fa-times-circle"></i>
                                    From What Previous Product to Which New/Planned Product</label>
                                <input type="text" class="form-control" placeholder="Type in previous product"
                                       autocomplete="off"
                                       @input="changeField"
                                       v-model="form.previousProduct"/>
                            </div>
                        </div>
                        <div class="form-group row mb-5">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.yearOfchange" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Year of Change
                            </label>
                            <datepicker input-class="form-control"
                                        v-model="form.yearOfchange"
                                        :typeable="false"
                                        :disabled-dates="{to: new Date(1600, 0, 1), from: new Date()}"
                                        minimum-view="year"
                                        @input="changeField"
                                        format="yyyy" placeholder="YYYY">
                            </datepicker>
                        </div>
                    </div>
                    </template>

                        <div class="text-center mb-4">
                            <button @click.prevent="saveCompanyHistoryData()"
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
    import vSelect from 'vue-select';
    import loader from '../Loader';
    import Datepicker from 'vuejs-datepicker';
    import Common from "../../apis/Common";

    export default {
        data() {
            return {
                isLoading: false,
                oldFormedYear: "",
                oldFirstProductOrService:"",
                oldNumberOfMajorProductOrService:"",
                oldChangeDirectionOrStrategy:"",
                oldPreviousProduct:"",
                oldYearOfchange:"",

                form:
                    {
                        formedYear: "",
                        firstProductOrService: "",
                        numberOfMajorProductOrService: "",
                        changeDirectionOrStrategy: "",
                        previousProduct: "",
                        yearOfchange: "",
                    },
                CompanyHistoryFormData:
                    {
                        formedYear: "",
                        firstProductOrService: "",
                        numberOfMajorProductOrService: "",
                        changeDirectionOrStrategy: "",
                        previousProduct: "",
                        yearOfchange: "",
                        _token: '',
                    },
                errors: [],
            };
        },
        validations: {
        },
        methods: {
            changeField(){
                if(this.form.formedYear !== this.oldFormedYear){
                    this.$emit("companyHistory", true);
                }else if(this.form.firstProductOrService !== this.oldFirstProductOrService) {
                    this.$emit("companyHistory", true);
                }else if(this.form.numberOfMajorProductOrService !== this.oldNumberOfMajorProductOrService) {
                    this.$emit("companyHistory", true);
                }else if(this.changeDirectionOrStrategy !== this.oldChangeDirectionOrStrategy) {
                    this.$emit("companyHistory", true);
                }else if(this.form.previousProduct !== this.oldPreviousProduct) {
                    this.$emit("companyHistory", true);
                }else if(this.form.yearOfchange !== this.oldYearOfchange) {
                    this.$emit("companyHistory", true);
                }
                else{
                    this.$emit("companyHistory", false);
                }
            },
            getStepwiseData: async function () {
                Questionnnaire.getCompanyQuestionnaireData(7)
                    .then((response) => {
                        this.isLoading = false
                        let historyData = response.data.data;
                        this.form.formedYear = (historyData.company_histories != null) ? historyData.company_histories.formed_year:'';
                        this.oldFormedYear = (historyData.company_histories != null) ? historyData.company_histories.formed_year:'';

                        this.form.firstProductOrService = (historyData.company_histories != null) ? historyData.company_histories.first_product_or_service:'';
                        this.oldFirstProductOrService = (historyData.company_histories != null) ? historyData.company_histories.first_product_or_service:'';

                        this.form.numberOfMajorProductOrService = (historyData.company_histories != null) ? historyData.company_histories.number_of_major_product:'';
                        this.oldNumberOfMajorProductOrService = (historyData.company_histories != null) ? historyData.company_histories.number_of_major_product:'';

                        this.form.changeDirectionOrStrategy = (historyData.company_histories != null) ? historyData.company_histories.change_direction_or_strategy:null;
                        this.oldChangeDirectionOrStrategy = (historyData.company_histories != null) ? historyData.company_histories.change_direction_or_strategy:null;

                        this.form.previousProduct = (historyData.company_histories != null) ?historyData.company_histories.previous_product:'';
                        this.oldPreviousProduct = (historyData.company_histories != null) ?historyData.company_histories.previous_product:'';

                        this.form.yearOfchange = (historyData.company_histories != null && historyData.company_histories.change_year!= null) ? historyData.company_histories.change_year.toString():'';
                        this.oldYearOfchange = (historyData.company_histories != null && historyData.company_histories.change_year!= null) ? historyData.company_histories.change_year.toString():'';
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
            saveCompanyHistoryData() {
                this.$emit("companyHistory", false);
                this.errors = [];
                this.CompanyHistoryFormData.formedYear = this.form.formedYear ? new Date(this.form.formedYear).getFullYear() : "";
                this.CompanyHistoryFormData.firstProductOrService = this.form.firstProductOrService??'';
                this.CompanyHistoryFormData.numberOfMajorProductOrService = this.form.numberOfMajorProductOrService ?? '';
                this.CompanyHistoryFormData.changeDirectionOrStrategy = this.form.changeDirectionOrStrategy??'';
                this.CompanyHistoryFormData.previousProduct = this.form.previousProduct??'';
                this.CompanyHistoryFormData.yearOfchange = this.form.yearOfchange ? new Date(this.form.yearOfchange).getFullYear() : "";
                this.CompanyHistoryFormData._token = document.querySelector('meta[name="csrf-token"]').content;
                this.isLoading = true
                this.submitButtonDisabled = true;

                Questionnnaire.updateCompanyQuestionnaireData(this.CompanyHistoryFormData, 7)
                    .then((response) => {
                        this.isLoading = false
                        this.submitButtonDisabled = false;
                        toastr.success(response.data.success.message);
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
                this.getStepwiseData();
            }
        },
        computed : {
            years () {
                const year = new Date().getFullYear()
                return Array.from({length: year - 1900}, (value, index) => 1901 + index)
            }
        },
        created: function () {
        },
        components: {
            loader,
            vSelect,
            Datepicker
        }
    };
</script>
