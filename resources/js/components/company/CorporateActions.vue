<template>
    <div class="container-fluid px-0">
        <div class="row collapse show no-gutters d-flex h-100 position-relative">
            <div class="col-lg-8 company-profile-tab mx-auto">
                <div class="panel-body companyManageForm">
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="null !=form.acquisitionsMade" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Acquisitions Made</label>
                            <v-select :options="[{label: 'YES', id: 1}, {label: 'NO', id: 0}]"
                                      :clearable="false"
                                      class="w100"
                                      placeholder="Select Yes or No"
                                      v-model="form.acquisitionsMade"
                                      @input="changeAcquisitionsMade"
                                      :reduce="acquis => acquis.id"
                            ></v-select>
                        </div>
                    </div>
                    <template v-if="form.acquisitionsMade != '' && form.acquisitionsMade == 1">
                        <div class="clearfix" v-for="(input, index) in form.acquisitions">
                            <div class="form-group row">
                                <div class="col-lg-12">
                                    <label>
                                        <i v-if="input.name" class="fas fa-check-circle"></i>
                                        <i v-else class="fas fa-times-circle"></i>
                                        Acquisition Name
                                    </label>
                                    <input type="text" class="form-control" placeholder="Type in acquisitions name"
                                           autocomplete="off"
                                           @input="changeField"
                                           v-model="input.name"
                                    />
                                </div>
                            </div>
                            <div class="form-group row mb-0">
                                <div class="col-lg-12">
                                    <label>
                                        <i v-if="input.year" class="fas fa-check-circle"></i>
                                        <i v-else class="fas fa-times-circle"></i>
                                        Acquisition Year
                                    </label>
                                    <datepicker input-class="form-control"
                                                :typeable="false"
                                                @input="changeField"
                                                v-model="input.year"
                                                :disabled-dates="{to: new Date(1600, 0, 1), from: new Date()}"
                                                minimum-view="year"
                                                format="yyyy" placeholder="YYYY">
                                    </datepicker>
                                </div>
                            </div>

                            <div class="float-right add-multiple cursor-pointer p-0"
                                 @click="addMoreAcquisition"
                                 v-if="0 == index">+ Add Acquisition
                            </div>

                            <div class="float-right add-multiple cursor-pointer p-0"
                                 @click="removeAcquisition(index)" v-else>
                                - Remove Acquisition
                            </div>
                        </div>
                    </template>
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="null !=form.spinOffMade" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Spin Offs</label>
                            <v-select :options="[{label: 'YES', id: 1}, {label: 'NO', id: 0}]"
                                      :clearable="false"
                                      class="w100"
                                      placeholder="Select Yes or No"
                                      v-model="form.spinOffMade"
                                      @input = "changeSpinOffMade"
                                      :reduce="spin => spin.id"
                            ></v-select>
                        </div>
                    </div>
                    <template v-if="form.spinOffMade != '' && form.spinOffMade == 1">
                        <div class="clearfix" v-for="(input, index) in form.spinOff">
                            <div class="form-group row">
                                <div class="col-lg-12">
                                    <label>
                                        <i v-if="input.spinOff_acquisitions_name" class="fas fa-check-circle"></i>
                                        <i v-else class="fas fa-times-circle"></i>
                                        Spin Offs Acquisition Name
                                    </label>
                                    <input type="text" class="form-control" placeholder="Type in spin offs acquisitions name"
                                           autocomplete="off"
                                           @input="changeField"
                                           v-model="input.spinOff_acquisitions_name"/>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-lg-12">
                                    <label>
                                        <i v-if="input.spinOff_acquisitions_year" class="fas fa-check-circle"></i>
                                        <i v-else class="fas fa-times-circle"></i>
                                        Spin Offs Acquisition Year
                                    </label>
                                    <datepicker input-class="form-control"
                                                v-model="input.spinOff_acquisitions_year"
                                                :typeable="false"
                                                @input="changeField"
                                                :disabled-dates="{to: new Date(1600, 0, 1), from: new Date()}"
                                                minimum-view="year"
                                                format="yyyy" placeholder="YYYY">
                                    </datepicker>
                                </div>
                            </div>

                            <div class="float-right add-multiple cursor-pointer p-0"
                                 @click="addMoreSpinOff"
                                 v-if="0 == index">+ Add Spin Off
                            </div>

                            <div class="float-right add-multiple cursor-pointer p-0"
                                 @click="removeSpinOff(index)" v-else>
                                - Remove Spin Off
                            </div>
                        </div>
                    </template>
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="null !=form.dividend" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Dividend Currently Being Issued</label>
                            <v-select :options="[{label: 'YES', id: 1}, {label: 'NO', id: 0}]"
                                      :clearable="false"
                                      class="w100"
                                      @input="changeField"
                                      placeholder="Select Yes or No"
                                      v-model="form.dividend"
                                      :reduce="divi => divi.id"
                            ></v-select>
                        </div>
                    </div>
                    <div class="text-center mb-4">
                        <button @click.prevent="saveCompanyCorporateActionData()"
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
                oldAcquisitionsMade: "",
                oldSpinOffMade:"",
                oldDividend: "",
                oldAcquisitions:[],
                oldSpinOff:[],
                form:
                    {
                        acquisitionsMade: "",
                        acquisitions: [],
                        spinOffMade:"",
                        spinOff:[],
                        dividend: "",
                    },
                CompanyCorporateActionFormData:
                    {
                        acquisitionsMade: "",
                        acquisitions: [],
                        spinOffMade:"",
                        spinOff:[],

                        dividend: "",
                        _token: '',
                    },
                errors: [],
            };
        },
        validations: {},
        methods: {
            changeField(){
                if(this.form.dividend !== this.oldDividend){
                    this.$emit("corporateAction", true);
                }else if(this.form.acquisitions.length !== this.oldAcquisitions.length){
                    this.$emit("corporateAction", true);
                }else if(this.form.spinOff.length !== this.oldSpinOff.length){
                    this.$emit("corporateAction", true);
                }
                else{
                    this.$emit("corporateAction", false);
                }
            },
            getStepwiseData: async function () {
                Questionnnaire.getCompanyQuestionnaireData(8)
                    .then((response) => {
                        this.isLoading = false
                        let CorporateActionData = response.data.data;

                        this.form.acquisitionsMade = (!! CorporateActionData) ? CorporateActionData.acquisitions_made : null;
                        this.oldAcquisitionsMade = (!! CorporateActionData) ? CorporateActionData.acquisitions_made : null;

                        this.form.spinOffMade = (!! CorporateActionData) ? CorporateActionData.spin_off : null;
                        this.oldSpinOffMade = (!! CorporateActionData) ? CorporateActionData.spin_off : null;

                        this.form.dividend =(!! CorporateActionData)  ?  CorporateActionData.dividend:null;
                        this.oldDividend =(!! CorporateActionData)  ?  CorporateActionData.dividend:null;

                        this.form.acquisitions =(!! CorporateActionData)  ?  CorporateActionData.acquisitions:[];
                        this.oldAcquisitions = Object.keys(CorporateActionData.acquisitions).map((key) => {
                            return CorporateActionData.acquisitions[key].name
                        })

                        this.form.spinOff =(!! CorporateActionData)  ?  CorporateActionData.spin:[];
                        this.oldSpinOff = Object.keys(CorporateActionData.spin).map((key) => {
                            return CorporateActionData.spin[key].name
                        })

                        if (!! CorporateActionData && CorporateActionData.acquisitions.length == 0) {
                            this.addMoreAcquisition();
                        }
                        if (!! CorporateActionData && CorporateActionData.spin.length == 0) {
                            this.addMoreSpinOff();
                        }
                    })
                    .catch(error => {
                        this.isLoading = false
                        if (error.response.status === 401) {
                            this.$emit('logout')
                        }
                        else {
                            console.log(error)
                        }
                    });
            },
            saveCompanyCorporateActionData() {
                this.errors = [];
                this.CompanyCorporateActionFormData.acquisitionsMade = this.form.acquisitionsMade ?? '';
                this.CompanyCorporateActionFormData.spinOffMade = this.form.spinOffMade ?? '';
                this.CompanyCorporateActionFormData.dividend = this.form.dividend ?? '';
                this.CompanyCorporateActionFormData.acquisitions = JSON.stringify(this.form.acquisitions);

                this.CompanyCorporateActionFormData.spinOff = JSON.stringify(this.form.spinOff);

                this.CompanyCorporateActionFormData._token = document.querySelector('meta[name="csrf-token"]').content;
                this.isLoading = true
                this.submitButtonDisabled = true;

                Questionnnaire.updateCompanyQuestionnaireData(this.CompanyCorporateActionFormData, 8)
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
                this.addMoreAcquisition();
            },
            changeAcquisitionsMade(){
                //this code is part of changeField function start
                if(this.form.acquisitionsMade !== this.oldAcquisitionsMade){
                    this.$emit("corporateAction", true);
                }
                else{
                    this.$emit("corporateAction", false);
                }
                //this code is part of changeField function end
                this.form.acquisitions = [];
                this.addMoreAcquisition();
            },
            addMoreAcquisition() {
                this.form.acquisitions.push({
                    name: '',
                    year: '',
                })
            },
            removeAcquisition(index) {
                this.form.acquisitions.splice(index, 1)
            },

            changeSpinOffMade(){
                //this code is part of changeField function start
                if(this.form.spinOffMade !== this.oldSpinOffMade){
                    this.$emit("corporateAction", true);
                }
                else{
                    this.$emit("corporateAction", false);
                }
                //this code is part of changeField function end
                this.form.spinOff = [];
                this.addMoreSpinOff();
            },
            addMoreSpinOff() {
                this.form.spinOff.push({
                    spinOff_acquisitions_name: '',
                    spinOff_acquisitions_year: '',
                })
            },
            removeSpinOff(index) {
                this.form.spinOff.splice(index, 1)
            },
        },
        computed: {},
        created: function () {
        },
        components: {
            loader,
            vSelect,
            Datepicker
        }
    };
</script>
