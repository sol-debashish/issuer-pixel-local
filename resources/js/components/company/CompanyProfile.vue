<template>
    <div class="container-fluid px-0">
        <div class="row collapse show no-gutters d-flex h-100 position-relative">
            <div class="col-lg-8 company-profile-tab mx-auto">
                <form id="companyProfileForm" class="companyManageForm">
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.company_name" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Company Name<span class="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                @input="changeField"
                                class="form-control"
                                name="CompanyName"
                                ref="company_name"
                                :class="{ 'is-invalid': $v.form.company_name.$error }"
                                v-model="form.company_name"
                                placeholder="Ex: Google"
                                autocomplete="new-company"/>
                            <div v-if="!$v.form.company_name.required" class="invalid-feedback">
                                Company name is
                                required.
                            </div>
                            <span class="invalid-feedback" role="alert"
                                  v-if="errors.company_name"><strong>{{ errors.company_name[0] }}</strong></span>
                        </div>
                    </div>
                    <div class="form-group row mb-4">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="company_logo != null" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Company Logo</label>
                            <div class="mb-1">
                                <img :src="croppedImageSrc" alt=""
                                     class="company-profile-photo cursor-pointer rounded-circle" width="80" height="80"
                                     @click="showImageCropperModal">
                                <div class="rounded-circle cursor-pointer image-edit-icon-general"
                                     @click="showImageCropperModal">
                                    <img class="ml-1" src="/images/pencil-icon.png" title="" height="15px"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <div class="form-group">
                                <label>
                                    <i v-if="form.hq_address && form.hq_city && form.hq_state && form.hq_zip"
                                       class="fas fa-check-circle"></i>
                                    <i v-else class="fas fa-times-circle"></i>
                                    Headquarters Geographic Location<span class="text-danger">*</span>
                                    <span class="exclamation-span" v-b-tooltip.hover
                                          title="Before forming relationships, Investors, Partners, and Suppliers will want to know your location."><i
                                        class="exclamation-circle-vue">i</i></span>
                                </label>
                                <input type="text" class="form-control" placeholder="Address 1"
                                       autocomplete="new-address"
                                       ref="hq_address"
                                       name="Address"
                                       @input="changeField"
                                       :class="{ 'is-invalid': $v.form.hq_address.$error }"
                                       v-model="form.hq_address"/>
                                <div v-if="!$v.form.hq_address.required" class="invalid-feedback">
                                    Address is
                                    required.
                                </div>
                            </div>

                            <div class="form-group">
                                <input type="text" name="Address2" class="form-control"
                                       placeholder="Address 2"
                                       @input="changeField"
                                       autocomplete="new-address2" v-model="form.hq_address2">
                            </div>
                            <div class="form-group">
                                <input type="text" name="City" class="form-control" placeholder="City"
                                       autocomplete="new-city"
                                       ref="hq_city"
                                       @input="changeField"
                                       :class="{ 'is-invalid': $v.form.hq_city.$error }"
                                       v-model="form.hq_city">
                                <div v-if="!$v.form.hq_city.required" class="invalid-feedback">
                                    City is
                                    required.
                                </div>
                            </div>
                            <div class="form-group">
                                <v-select label="name" :options="countries" :clearable="false"
                                          placeholder="Select Country" @input="getStatesOrProvinceStatus"
                                          :class="{ 'is-invalid': $v.form.hq_country.$error }"
                                          v-model="form.hq_country"
                                          :reduce="option => option.id"
                                ></v-select>
                                <div v-if="!$v.form.hq_country.required" class="invalid-feedback">
                                    Country is
                                    required.
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="row">
                                    <template v-if="this.haveState == 1">
                                        <div class="col-md-6">
                                            <v-select label="name" :options="StateLists" v-model="form.hq_state"
                                                      name="State"
                                                      item-value="name"
                                                      item-text="name"
                                                      @input="changeField"
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
                                    </template>
                                    <template v-else>
                                        <div class="col-md-6">
                                            <input type="text" class="form-control" placeholder="Province"
                                                   autocomplete="new-province"
                                                   ref="hq_province"
                                                   :class="{ 'is-invalid': $v.form.hq_province.$error }"
                                                   v-model="form.hq_province">
                                            <div v-if="!$v.form.hq_province.required" class="invalid-feedback">
                                                Province is
                                                required.
                                            </div>
                                        </div>
                                    </template>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" placeholder="Zip Code"
                                               autocomplete="new-zip"
                                               ref="hq_zip"
                                               @input="changeField"
                                               :class="{ 'is-invalid': $v.form.hq_zip.$error }"
                                               v-model="form.hq_zip">
                                        <div v-if="!$v.form.hq_zip.required" class="invalid-feedback">
                                            Zip Code is
                                            required.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.company_description" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Company Description
                            </label>
                            <textarea
                                class="form-control"
                                name="CompanyDescription"
                                ref="company_description"
                                @input="changeField"
                                v-model="form.company_description"
                                rows="2">
                            </textarea>
                            <!-- <div v-if="!$v.form.company_description.required" class="invalid-feedback">
                                Company Description is
                                required.
                            </div> -->
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.company_industry" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Company Industry
                            </label>
                            <v-select label="description"
                                      @input="changeField"
                                      :filterBy="filterMatchFirstCharacter"
                                      ref="company_industry"
                                      :class="{ 'is-invalid': $v.form.company_industry.$error }"
                                      :options="industries" v-model="form.company_industry" :clearable="false"
                                      placeholder="Select Industry"
                                      :reduce="option => option.id"
                            ></v-select>
                            <div v-if="!$v.form.company_industry.required" class="invalid-feedback">
                                Industry is
                                required.
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.employee_number" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Number of Employees
                                <span class="exclamation-span" v-b-tooltip.hover
                                      title="Many Investors, Partners, and Customers want to know the size of your company before facitling a business transaction."><i
                                    class="exclamation-circle-vue">i</i></span>
                            </label>
                            <v-select label="name" :options="employeeNumberList" :clearable="false"
                                      placeholder="Select Below"
                                      ref="employee_number"
                                      @input="changeField"
                                      class="w100 media-subject-list"
                                      v-model="form.employee_number">
                            </v-select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.esg_score.length" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Does Your Business Have an ESG Score?<span class="exclamation-span" v-b-tooltip.hover
                                                                           title="Investors are increasingly considering ESG scores when investing in companies. Allow investors to understand your score."><i
                                class="exclamation-circle-vue">i</i></span>
                            </label>
                            <v-select label="name" multiple
                                      class="w100"
                                      :selectable="esgScoreSelectedHide"
                                      :options="esgScoreList"
                                      :clearable="false"
                                      ref="esg_score"
                                      @input="showRelatedField($event, 'esgScoreListIds')"
                                      placeholder="Select the Options that Apply"
                                      v-model="form.esg_score"
                            ></v-select>
                        </div>
                    </div>
                    <div class="form-group row" v-if="esgScoreListIds.includes(1)">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.msci_rating" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                MSCI ESG Rating</label>
                            <v-select label="name"
                                      class="w100"
                                      :options="msciRatingList"
                                      :clearable="false"
                                      v-model="form.msci_rating"
                                      @input="changeField"
                                      placeholder="Select the options that apply">
                            </v-select>
                        </div>
                    </div>
                    <div class="form-group row" v-if="esgScoreListIds.includes(2)">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.sustainalytics" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Sustainalytics ESG Rating</label>
                            <v-select label="name"
                                      class="w100"
                                      :options="sustainalyticsRatingList"
                                      :clearable="false"
                                      @input="changeField"
                                      v-model="form.sustainalytics"
                                      placeholder="Select the options that apply">
                            </v-select>
                        </div>
                    </div>
                    <div class="form-group row" v-if="esgScoreListIds.includes(3)">
                        <div class="col-lg-12">
                            <label class="control-label font-weight-bold">
                                <i v-if="form.cdp_rating" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                CDP Rating</label>
                            <v-select label="name"
                                      class="w100"
                                      :options="cdpRatingList"
                                      :clearable="false"
                                      @input="changeField"
                                      v-model="form.cdp_rating"
                                      placeholder="Select the options that apply">
                            </v-select>
                        </div>
                    </div>
                    <div class="form-group row" v-if="esgScoreListIds.includes(4)">
                        <div class="col-lg-12">
                            <label class="control-label font-weight-bold">
                                <i v-if="form.iss_rating" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                ISS Rating</label>
                            <v-select label="name"
                                      class="w100"
                                      @input="changeField"
                                      :options="issRatingList"
                                      :clearable="false"
                                      v-model="form.iss_rating"
                                      placeholder="Select the options that apply">
                            </v-select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label class="control-label font-weight-bold">
                                <i v-if="form.owned_business.length" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i>
                                Minority Owned Businesses</label>
                            <v-select label="name" multiple
                                      class="w100 mob-select-list"
                                      :selectable="ownBusinessSelectedHide"
                                      :options="ownedBusinessList"
                                      :clearable="false"
                                      ref="owned_business"
                                      @input="resetOwnBusinessField($event, 'ownedBusinessListIds')"
                                      placeholder="Select the Options that Apply"
                                      v-model="form.owned_business"
                            ></v-select>
                        </div>
                    </div>
                    <div class="text-center mb-4">
                        <button @click.prevent="saveCompanyProfileData()"
                                class="btn btn-primary save-changes">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <b-modal
            centered
            id="image-cropper-modal"
            ref="image-cropper-modal"
            size="lg"
        >
            <template #modal-header>
                <div class="w-100">
                    <h3 class="float-left">Add icon</h3>
                    <b-button
                        class="modal-close close float-right"
                        @click="closeImageCropperModal"
                    >x
                    </b-button>
                </div>
            </template>
            <div class="uploader"
                 @dragenter="OnDragEnter"
                 @dragleave="OnDragLeave"
                 @dragover.prevent
                 @drop="onDrop"
            >
                <ImageCropper :src="imageSrc" ref="imageCropper"/>
            </div>
            <div class="text-center" v-if="!imageSrc">Upload a icon. Then crop and adjust it to perfection.</div>
            <a class="float-right mt-4 image-rotate-icon" v-if="imageSrc" @click="imageRotate">Rotate <i
                class="fas fa-undo"></i></a>

            <template #modal-footer>
                <label class="btn btn-default">
                    <input type="file" name="audioFile" id="audioFile" ref="audioFile" v-if="!isUploading"
                           style="display:None;"
                           @change="onInputChange"
                           accept="image/*">
                    <span v-if="imageSrc">Change icon</span>
                    <span v-else>Upload icon</span>

                </label>
                <button v-if="imageSrc" class="btn btn-default" :disabled='isDisabled' @click="uploadImage">
                    {{isUploading ? "Uploading..." : "Save icon"}}
                </button>
            </template>
        </b-modal>
        <loader :is-visible="isLoading"></loader>
    </div>
</template>
<script>
    import Questionnnaire from "../../apis/Questionnnaire";
    import vSelect from 'vue-select'
    import loader from '../Loader'
    import {email, required} from "vuelidate/lib/validators";

    // window.addEventListener('beforeunload',
    //     function (e) {
    //
    //         // Check if any of the input
    //         // fields are filled
    //         if (companyName !== '') {
    //
    //             // Cancel the event and
    //             // show alert that the unsaved
    //             // changes would be lost
    //             e.preventDefault();
    //             e.returnValue = '';
    //         }
    //     });
    export default {

        data() {
            return {
                oldCompanyName:"",
                oldAddressOne: "",
                oldAddressTwo: "",
                oldCity: "",
                oldState: "",
                oldCountry: "",
                oldZip: "",
                oldCompanyIndustry: "",
                oldEmployeeNumber: "",
                OldDescription: "",
                oldEsgScore: [],
                OldMsciRating: "",
                oldCdpRating: "",
                oldIssRating: "",
                Oldsustainalytics: "",
                oldOwnedBusiness: [],

                isLoading: false,
                imageSrc: "",
                isDisabled: false,
                isUploading: false,
                croppedImageSrc: "",
                isDragging: false,
                dragCount: 0,
                haveState: 0,
                haveProvince: 0,
                form:
                    {
                        company_name: "",
                        hq_address: "",
                        hq_address2: "",
                        hq_city: "",
                        hq_state: "",
                        hq_province: "",
                        hq_country: "",
                        hq_zip: "",
                        company_description: "",
                        company_industry: "",
                        employee_number: "",
                        esg_score: [],
                        owned_business: [],
                        msci_rating: '',
                        iss_rating: '',
                        cdp_rating: '',
                        sustainalytics: '',
                    },
                CompanyProfileFormData:
                    {
                        company_name: "",
                        hq_address: "",
                        hq_address2: "",
                        hq_city: "",
                        hq_state: "",
                        have_state: "",
                        hq_province: "",
                        have_province: "",
                        hq_country: "",
                        hq_zip: "",
                        company_description: "",
                        company_industry: "",
                        employee_number: "",
                        esg_score: [],
                        owned_business: [],
                        msci_rating: '',
                        iss_rating: '',
                        cdp_rating: '',
                        sustainalytics: '',
                    },
                errors: [],
                countries: [],
                StateLists: [],
                industries: [],
                employeeNumberList: [],
                esgScoreList: [],
                esgScoreListIds: [],
                ownedBusinessList: [],
                ownedBusinessListIds: [],
                msciRatingList: [],
                sustainalyticsRatingList: [],
                issRatingList: [],
                cdpRatingList: [],
                IsEsgScoreNoSeleted: false,
                IsOwnBusinessNoSeleted: false,
                company_logo: "",
            };
        },
        validations: {
            form: {
                company_name: {required},
                hq_address: {required},
                hq_city: {required},
                hq_state: {required},
                hq_zip: {required},
                hq_country: {required},
                hq_province: {required},
                company_industry: {required},
            },
        },

        methods: {
            changeField() {
                if(this.form.company_name !== this.oldCompanyName){
                    this.$emit("generalFormChanged", true);
                }else if(this.form.hq_address !== this.oldAddressOne){
                    this.$emit("generalFormChanged", true);
                }else if(this.form.hq_address2 !== this.oldAddressTwo){
                    this.$emit("generalFormChanged", true);
                }else if(this.form.hq_city !== this.oldCity){
                    this.$emit("generalFormChanged", true);
                }else if(this.form.hq_state !== this.oldState){
                    this.$emit("generalFormChanged", true);
                }else if(this.form.hq_zip !== this.oldZip){
                    this.$emit("generalFormChanged", true);
                }else if(this.form.company_industry !== this.oldCompanyIndustry){
                    this.$emit("generalFormChanged", true);
                }else if(this.form.employee_number !== this.oldEmployeeNumber){
                    this.$emit("generalFormChanged", true);
                }else if(this.form.company_description !== this.OldDescription){
                    this.$emit("generalFormChanged", true);
                }else if(this.form.msci_rating !== this.OldMsciRating){
                    this.$emit("generalFormChanged", true);
                }else if(this.form.cdp_rating !== this.oldCdpRating){
                    this.$emit("generalFormChanged", true);
                }else if(this.form.iss_rating !== this.oldIssRating){
                    this.$emit("generalFormChanged", true);
                }else if(this.form.sustainalytics !== this.Oldsustainalytics){
                    this.$emit("generalFormChanged", true);
                }else{
                    this.$emit("generalFormChanged", false);
                }
            },

            filterMatchFirstCharacter: function (option, label, search) {
                return (label || '').toLowerCase().startsWith(search.toLowerCase())
            },
            getCountryList: async function () {
                axios.get('/api/country-list')
                    .then(response => {
                        this.countries = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            getStates: function (value) {
                axios.get('/api/get-state-list/' + value)
                    .then(response => {
                        this.StateLists = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            getStatesOrProvinceStatus: function (value) {
                //this code is part of changeField function start
                if(this.form.hq_country !== this.oldCountry){
                    console.log(this.form.hq_country);
                    this.$emit("generalFormChanged", true);
                }else{
                    this.$emit("generalFormChanged", false);
                }
                //this code is part of changeField function end

                axios.get('/api/get-state-or-province-status/' + value)
                    .then(response => {
                        this.haveState = response.data.data[0].have_state;
                        this.haveProvince = response.data.data[0].have_province;
                        this.StateLists = [];
                        this.form.hq_state = "";
                        if (this.haveState == 1) {
                            this.getStates(value);
                        } else {
                            this.$v.form.hq_province.$reset();
                        }
                    })
                    .catch(error => console.log(error))
            },
            getIndustries: async function () {
                await axios.get('/api/industry-list')
                    .then(response => {
                        this.industries = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getEsgScoreList: async function () {
                return axios.get('/api/get-esg-score-list')
                    .then(response => {
                        this.esgScoreList = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            getOwnedBusinessList: async function () {
                return axios.get('/api/get-owned-business-list')
                    .then(response => {
                        this.ownedBusinessList = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            getEsgRatingList: async function () {
                return axios.get('/api/get-esg-rating-list')
                    .then(response => {
                        this.msciRatingList = response.data.data.filter(function (elem) {
                            if (elem.parent_id == 1) return elem;
                        });
                        this.sustainalyticsRatingList = response.data.data.filter(function (elem2) {
                            if (elem2.parent_id == 2) return elem2;
                        });
                        this.issRatingList = response.data.data.filter(function (elem3) {
                            if (elem3.parent_id == 3) return elem3;
                        });
                        this.cdpRatingList = response.data.data.filter(function (elem4) {
                            if (elem4.parent_id == 4) return elem4;
                        });
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
                Questionnnaire.getCompanyQuestionnaireData(1)
                    .then((response) => {
                        let companyData = response.data.data;
                        this.form.company_name = companyData.name;
                        this.oldCompanyName = companyData.name;
                        if (!!companyData.headquarters) {
                            this.form.hq_address = companyData.headquarters.address.street_address_one;
                            this.oldAddressOne = companyData.headquarters.address.street_address_one;

                            this.form.hq_address2 = companyData.headquarters.address.street_address_two;
                            this.oldAddressTwo = companyData.headquarters.address.street_address_two;

                            this.form.hq_city = companyData.headquarters.address.city;
                            this.oldCity = companyData.headquarters.address.city;

                            this.form.hq_state = companyData.headquarters.address.state_id;
                            this.oldState = companyData.headquarters.address.state_id;
                            if (!!this.form.hq_state) {
                                this.haveState = 1;
                                this.getStates(companyData.headquarters.address.country_code);
                            }else{
                                this.haveProvince = 1;
                                this.form.hq_province = companyData.headquarters.address.province;
                            }
                            this.form.hq_country = companyData.headquarters.address.country_code;
                            this.oldCountry = companyData.headquarters.address.country_code;

                            this.form.hq_zip = companyData.headquarters.address.zip;
                            this.oldZip = companyData.headquarters.address.zip;
                        }
                        this.form.company_industry = companyData.industry_id;
                        this.oldCompanyIndustry = companyData.industry_id;

                        this.form.company_description = companyData.company_description;
                        this.OldDescription = companyData.company_description;

                        this.form.employee_number = companyData.numberof_employees;
                        this.oldEmployeeNumber= companyData.numberof_employees;

                        this.form.esg_score = companyData.esg_score;
                        this.oldEsgScore = companyData.esg_score;

                        this.company_logo = companyData.icon;
                        this.croppedImageSrc = (!!companyData.icon) ? localStorage.getItem("storagePath") + '/company_icon/' + companyData.icon : "/images/image-placeholder-1.png"
                        if (!!companyData.company_egs_score_rating) {
                            this.form.msci_rating = companyData.company_egs_score_rating.msci_rating;
                            this.OldMsciRating = companyData.company_egs_score_rating.msci_rating;

                            this.form.cdp_rating = companyData.company_egs_score_rating.cdp_rating;
                            this.oldCdpRating = companyData.company_egs_score_rating.cdp_rating;

                            this.form.iss_rating = companyData.company_egs_score_rating.iss_rating;
                            this.oldIssRating = companyData.company_egs_score_rating.iss_rating;

                            this.form.sustainalytics = companyData.company_egs_score_rating.sustainalytics_rating;
                        }

                        this.showRelatedField(companyData.esg_score, 'esgScoreListIds')

                        this.form.owned_business = companyData.owned_business;
                        this.oldOwnedBusiness =companyData.owned_business;

                        this.resetOwnBusinessField(companyData.owned_business, 'ownedBusinessListIds')
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
            saveCompanyProfileData() {
                this.$emit("generalFormChanged", false);
                this.$v.form.company_name.$touch();
                this.$v.form.hq_address.$touch();
                this.$v.form.hq_city.$touch();
                this.$v.form.hq_country.$touch();
                this.$v.form.hq_zip.$touch();
                this.$v.form.company_industry.$touch();

                if (this.$v.form.company_name.$invalid ||
                    this.$v.form.hq_address.$invalid || this.$v.form.hq_city.$invalid
                    || this.$v.form.hq_country.$invalid
                    || this.$v.form.hq_zip.$invalid || this.$v.form.company_industry.$invalid
                ) {
                    if (this.$v.form.company_name.$invalid) {
                        this.$refs.company_name.focus();
                    } else if (this.$v.form.hq_address.$invalid) {
                        this.$refs.hq_address.focus();
                    } else if (this.$v.form.hq_city.$invalid) {
                        this.$refs.hq_city.focus();
                    } else if (this.$v.form.hq_zip.$invalid) {
                        this.$refs.hq_zip.focus();
                    }else if (this.$v.form.company_industry.$invalid) {
                        this.$refs.company_industry.$el.querySelector('input').focus();
                    }
                    return false;
                }
                if (this.haveState == 1) {
                    this.$v.form.hq_state.$touch();
                    if (this.$v.form.hq_state.$invalid) {
                        this.$refs.hq_state.$el.querySelector('input').focus();
                        return false;
                    }
                }
                if (this.haveProvince == 1) {
                    this.$v.form.hq_province.$touch();
                    if (this.$v.form.hq_province.$invalid) {
                        this.$refs.hq_province.focus();
                        return false;
                    }
                }
                this.errors = [];
                let esgScoreOptions = [],
                    ownBusinesseOptions = [];
                for (let esgs = 0; esgs < this.form.esg_score.length; esgs++) {
                    esgScoreOptions.push(this.form.esg_score[esgs].id);
                }
                for (let obs = 0; obs < this.form.owned_business.length; obs++) {
                    ownBusinesseOptions.push(this.form.owned_business[obs].id);
                }

                this.CompanyProfileFormData.company_name = this.form.company_name;
                this.CompanyProfileFormData.hq_address = this.form.hq_address;
                this.CompanyProfileFormData.hq_address2 = this.form.hq_address2 ?? '';
                this.CompanyProfileFormData.hq_city = this.form.hq_city;
                if (this.haveState == 1) {
                    this.CompanyProfileFormData.hq_state = this.form.hq_state;
                    this.CompanyProfileFormData.have_state = this.haveState;
                    this.CompanyProfileFormData.hq_province = "";
                    this.CompanyProfileFormData.have_province = 0;
                } else {
                    this.CompanyProfileFormData.hq_province = this.form.hq_province;
                    this.CompanyProfileFormData.have_province = this.haveProvince;
                    this.CompanyProfileFormData.hq_state = "";
                    this.CompanyProfileFormData.have_state = 0;
                }
                this.CompanyProfileFormData.hq_zip = this.form.hq_zip;
                this.CompanyProfileFormData.company_industry = this.form.company_industry;
                this.CompanyProfileFormData.company_description = this.form.company_description;
                this.CompanyProfileFormData.hq_country = this.form.hq_country;
                this.CompanyProfileFormData.employee_number = this.form.employee_number ? this.form.employee_number.id : '';
                this.CompanyProfileFormData.esg_score = esgScoreOptions.join(',');
                this.CompanyProfileFormData.owned_business = ownBusinesseOptions.join(',');
                if (esgScoreOptions.includes(1)) {
                    this.CompanyProfileFormData.msci_rating = this.form.msci_rating ? this.form.msci_rating.id : '';
                }
                if (esgScoreOptions.includes(2)) {
                    this.CompanyProfileFormData.sustainalytics = this.form.sustainalytics ? this.form.sustainalytics.id : '';
                }
                if (esgScoreOptions.includes(3)) {
                    this.CompanyProfileFormData.cdp_rating = this.form.cdp_rating ? this.form.cdp_rating.id : '';
                }
                if (esgScoreOptions.includes(4)) {
                    this.CompanyProfileFormData.iss_rating = this.form.iss_rating ? this.form.iss_rating.id : '';
                }
                if (esgScoreOptions.includes(5) || esgScoreOptions.length < 1) {
                    this.form.msci_rating = this.CompanyProfileFormData.msci_rating = ''
                    this.form.iss_rating = this.CompanyProfileFormData.iss_rating = ''
                    this.form.cdp_rating = this.CompanyProfileFormData.cdp_rating = ''
                    this.form.sustainalytics = this.CompanyProfileFormData.sustainalytics = ''
                }

                this.isLoading = true
                this.submitButtonDisabled = true
                Questionnnaire.updateCompanyQuestionnaireData(this.CompanyProfileFormData, 1)
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
            loadGtagEvent: function () {
                $(document).ready(function () {
                    let form = document.querySelector('#companyProfileForm');
                    let fields = {};
                    //console.log(form)
                    let enterField = function (name) {
                        //console.log(name);
                        //console.log(name.name);
                        fields[name] = new Date().getTime();
                    }

                    let leaveField = function (e) {
                        let timeSpent;
                        let fieldName = e.target.name;
//console.log(fieldName);
                        let leaveType = e.type;
                        if (fields.hasOwnProperty(fieldName)) {
                            timeSpent = new Date().getTime() - fields[fieldName];
                            if (timeSpent > 0 && timeSpent < 1800000) {
                                window.dataLayer.push({
                                    'event': 'fieldTiming',
                                    'timingCategory': 'General Form Field Timing',
                                    'timingVariable': fieldName,
                                    'timingLabel': leaveType,
                                    'timingValue': timeSpent
                                });
                            }
                            delete fields[fieldName];
                        }
                    }

                    if (form) {
                        form.addEventListener('focus', function (e) {
                            enterField(e.target.name);
                        }, true);
                        form.addEventListener('blur', function (e) {
                            leaveField(e);
                        }, true);
                        form.addEventListener('change', function (e) {
                            leaveField(e);
                        }, true);
                    }
                });
            },
            showRelatedField: function (field, list) {

                //this code is part of changeField function start
                if(this.form.esg_score.length !== this.oldEsgScore.length){
                    this.$emit("generalFormChanged", true);
                }else{
                    this.$emit("generalFormChanged", false);
                }
                //this code is part of changeField function end
                this[list] = Object.keys(field).map((key) => {
                    return field[key].id
                })
                if (!this.IsEsgScoreNoSeleted && field.find((o) => o.tag === "no")) {
                    this.IsEsgScoreNoSeleted = true;
                    this.form.esg_score = [{name: "No, or I don't know", id: 5, tag: "no"}];
                    this.esgScoreListIds = [5]
                } else if (this.IsEsgScoreNoSeleted && field.find((o) => o.tag === "no")) {
                    this.IsEsgScoreNoSeleted = false;
                    if (this.esgScoreListIds.length == 2) {
                        this.form.esg_score = field.slice(1);
                        this.esgScoreListIds.splice(0, 1);
                    } else {
                        this.form.esg_score = [{name: "No, or I don't know", id: 5, tag: "no"}];
                        this.esgScoreListIds = [5]
                        // this.form.msci_rating = this.CompanyProfileFormData.msci_rating = ''
                        // this.form.iss_rating = this.CompanyProfileFormData.iss_rating = ''
                        // this.form.cdp_rating = this.CompanyProfileFormData.cdp_rating = ''
                        // this.form.sustainalytics = this.CompanyProfileFormData.sustainalytics = ''
                    }
                }
            },

            resetOwnBusinessField: function (field, list) {

                //this code is part of changeField function start
                if(this.form.owned_business.length !== this.oldOwnedBusiness.length){
                    this.$emit("generalFormChanged", true);
                }else{
                    this.$emit("generalFormChanged", false);
                }
                //this code is part of changeField function end

                this[list] = Object.keys(field).map((key) => {
                    return field[key].id
                })
                if (!this.IsOwnBusinessNoSeleted && field.find((o) => o.tag === "no")) {
                    this.IsOwnBusinessNoSeleted = true;
                    this.form.owned_business = [{
                        name: "No, My Business Does Not Have a Diversity Business Classification.",
                        id: 8,
                        tag: "no"
                    }];
                    this.ownedBusinessListIds = [8]
                } else if (this.IsOwnBusinessNoSeleted && field.find((o) => o.tag === "no")) {
                    this.IsOwnBusinessNoSeleted = false;
                    if (this.ownedBusinessListIds.length == 2) {
                        this.form.owned_business = field.slice(1);
                        this.ownedBusinessListIds.splice(0, 1);
                    } else {
                        this.form.owned_business = [{
                            name: "No, My Business Does Not Have a Diversity Business Classification.",
                            id: 8,
                            tag: "no"
                        }];
                        this.ownedBusinessListIds = [8]
                    }
                }
            },
            esgScoreSelectedHide: function (option) {
                if (!this.esgScoreListIds.includes(option.id))
                    return option;
            },
            ownBusinessSelectedHide: function (option) {
                if (!this.ownedBusinessListIds.includes(option.id))
                    return option;
            },
            showImageCropperModal() {
                this.$refs['image-cropper-modal'].show()
            },
            closeImageCropperModal: function () {
                let vi = this;
                if (this.imageSrc) {
                    $.confirm({
                        title: 'Discard changes',
                        content: "Are you sure you want to discard changes you made?",
                        columnClass: 'medium',
                        type: 'blue',
                        typeAnimated: true,
                        buttons: {
                            Cancel: function () {
                            },
                            Discard: function () {
                                vi.$refs['image-cropper-modal'].hide()
                                vi.imageSrc = ""
                                vi.isDisabled = false
                                vi.isUploading = false
                            }
                        }
                    }, this);

                } else {
                    this.$refs['image-cropper-modal'].hide()
                }
            },
            setImage: function (file) {
                // const file = e.target.files[0]
                if (!!file[0]) {
                    if (!file[0].type.includes("image/")) {
                        alert("Please select an image file")
                        return
                    }
                    if (typeof FileReader === "function") {
                        const reader = new FileReader()
                        reader.onload = event => {
                            this.imageSrc = event.target.result
                            // Rebuild cropperjs with the updated source
                            this.$refs.imageCropper.cropper.replace(event.target.result)
                        }
                        reader.readAsDataURL(file[0])
                    } else {
                        alert("Sorry, FileReader API not supported")
                    }
                }
            },
            imageRotate() {
                // Get image data for post processing, e.g. upload or setting image src
                this.$refs.imageCropper.cropper.rotate(90)
            },
            uploadImage() {
                this.isDisabled = true;
                this.isUploading = true;
                let vi = this;
                this.$refs.imageCropper.cropper.getCroppedCanvas().toBlob(function (blob) {
                    let formData = new FormData()

                    // Add name for our image
                    formData.append("name", "image-name-" + new Date().getTime())

                    // Append image file
                    formData.append("file", blob)

                    Questionnnaire.companyIconUpload(formData)
                        .then((response) => {
                            vi.croppedImageSrc = vi.$refs.imageCropper.cropper.getCroppedCanvas().toDataURL()
                            vi.$refs['image-cropper-modal'].hide()
                            vi.isDisabled = false;
                            vi.isUploading = false;
                            vi.companyImage = response.data.data.company_icon;
                            vi.company_logo = response.data.data.company_icon;
                        })
                        .catch((error) => {
                            if (error.response.status == 401) {
                                vi.$emit("logout");
                            } else {
                                toastr.error(error)
                            }
                        });
                })
            },
            OnDragEnter(e) {
                e.preventDefault();
                this.dragCount++;
                this.isDragging = true;
                return false;
            },
            OnDragLeave(e) {
                e.preventDefault();
                this.dragCount--;
                if (this.dragCount <= 0)
                    this.isDragging = false;
            },
            onInputChange(e) {
                this.setImage(e.target.files);
            },
            onDrop(e) {
                e.preventDefault();
                e.stopPropagation();
                this.isDragging = false;
                this.setImage(e.dataTransfer.files)
                // this.addFile(e.dataTransfer.files);
            },
        },

        created: async function () {
            this.isLoading = true
            this.goBackToPageTopAndNextFieldToEnter();
            this.getEmployeeNumberList();
            await this.getCountryList();
            await this.getEsgScoreList();
            await this.getEsgRatingList();
            await this.getOwnedBusinessList();
            // await this.getStates();
            this.getStepwiseData();
            this.loadGtagEvent();
            this.getIndustries();
        },
        components: {
            ImageCropper: () => import("../ImageCropper.vue"),
            vSelect,
            loader
        }
    };
</script>
<style>
    .image-edit-icon-general {
        background-color: #fff;
        border: 1px solid #cccccc63;
        cursor: pointer;
        height: 27px;
        position: absolute;
        left: 40px;
        /*top: 85px;*/
        bottom: -13px;
        padding-bottom: 2px;
        width: 27px;
    }
</style>
