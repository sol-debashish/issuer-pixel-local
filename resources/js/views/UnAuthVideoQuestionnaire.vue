<template>
    <div class="home">
        <Navigation />
        <div class="container-fluid px-0">
            <div class="row collapse show no-gutters d-flex h-100 position-relative">
            <div class="col-9 container">
                <img src="/images/issuerpixel_page_logo.png" alt="" class="img-fluid mx-auto d-block">
                <h2 class="text-center">Video Upload Questionnaire</h2>
                <div class="row register-container">
                    <div v-bind:class="(step == 1)?'col-md-9':'col-md-6 mx-auto'">
                        <form class="form-horizontal" v-on:submit.prevent="addVideoQuestionnaire">
                            <!--Step-1 Start-->
                            <fieldset class="mb-5" v-if="step == 1">
                                <span class="offset-4 pl-2">Step 1 of 2</span>

                                <AudioVideoHierarchy @nodeData="TaxonomyData" :taxonomySavedData='taxonomySavedData'
                                                     :taxonomyIndustryData='taxonomyIndustryData'
                                                     v-if="taxonomyIndustryData"
                                                     ref="taxonomyChild"></AudioVideoHierarchy>

                                <!--                                    <router-link class="btn btn-back-next" :to="{ name: 'VideoAudioFileUpload' }">Back</router-link>-->
                                <div class="col-md-8 offset-4">
                                    <button @click.prevent="addNode" class="btn btn-theme-primary">Add Another Node
                                    </button>
                                    <button @click.prevent="step2()" class="btn btn-back-next float-right">Finish
                                    </button>
                                </div>
                            </fieldset>
                            <!--Step-2 Start-->
                            <fieldset class="mb-5" v-if="step == 2">
                                <span>Step 2 of 2</span>
                                <div class="panel-body">
                                    <div class="form-group">
                                        <label class="control-label font-weight-bold">Video Title<span class="text-danger">*</span></label>
                                        <input type="text" maxlength="60" class="form-control" v-model="name"
                                               ref="name"
                                               :class="{ 'is-invalid': $v.name.$error }"
                                               placeholder="Type in Video Title - Maximum 60 characters">
                                        <div v-if="!$v.name.required" class="invalid-feedback">Video title is
                                            required.
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label font-weight-bold">Date of Video
                                            Publication<span class="text-danger">*</span></label>
                                        <datepicker input-class="form-control" v-model="publicationDate"
                                                    name="publicationDate"
                                                    id="publicationDate"
                                                    :typeable="true"
                                                    format="MM/dd/yyyy" placeholder="MM/DD/YYYY"
                                                    :class="{ 'is-invalid': $v.publicationDate.$error }"></datepicker>
                                        <div v-if="!$v.publicationDate.required" class="invalid-feedback">
                                            Publication date is required.
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label font-weight-bold">Video Presenter<span class="text-danger">*</span></label>
                                        <v-select label="name" :options="mediaPresenterTypes"
                                                  :class="{ 'is-invalid': $v.mediaPresenter.$error }"
                                                  v-model="mediaPresenter"
                                                  ref="mediaPresenter"
                                                  id="mediaPresenter"
                                                  :clearable="false" placeholder="Select Below"
                                                  @input="setMediaPresenter"></v-select>
                                        <div v-if="!$v.mediaPresenter.required" class="invalid-feedback">Video presenter
                                            is
                                            required.
                                        </div>
                                    </div>

                                    <div class="form-group" v-if="showOtherMediaPresenterField">
                                        <input type="text" maxlength="30" class="form-control"
                                               v-model="otherMediaPresenter" placeholder="Write video Presenter">
                                    </div>
                                    <!--                                        <div v-if="!$v.otherMediaPresenter.required" class="invalid-server-feedback">Please Write video Presenter</div>-->

                                    <!--                                        <div class="form-group">-->
                                    <!--                                            <label class="control-label font-weight-bold">Is Video for Product or Service?</label>-->
                                    <!--                                            <v-select label="name" :options="mediaCoverTypes" v-model="videoCoverType" :clearable="false"  placeholder="Select the Options that Apply"></v-select>-->
                                    <!--                                        </div>-->
                                    <div class="form-group">
                                        <label class="control-label font-weight-bold">Media Sub Type<span class="text-danger">*</span></label>
                                        <v-select label="name" :options="mediaSubTypes" v-model="mediaSubType"
                                                  ref="mediaSubType"
                                                  id="mediaSubType"
                                                  :class="{ 'is-invalid': $v.mediaSubType.$error }"
                                                  :clearable="false" placeholder="Select Below"></v-select>
                                        <div v-if="!$v.mediaSubType.required" class="invalid-feedback">Media sub type is
                                            required.
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label font-weight-bold">Subject of Company
                                            Video<span class="text-danger">*</span></label>
                                        <v-select label="name" :options="subjectTypes" v-model="subjectType"
                                                  id="subjectType"
                                                  :class="{ 'is-invalid': $v.subjectType.$error }"
                                                  @input="setSubjectTypeTag" :clearable="false"
                                                  taggable push-tags
                                                  :create-option="option => ({name: option.toLowerCase(), id: option.toLowerCase()+'_suggested'})"
                                                  placeholder="Select Below"></v-select>
                                        <div v-if="!$v.subjectType.required" class="invalid-feedback">Subject of Company
                                            video required.
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label font-weight-bold">Video Description<span class="text-danger">*</span></label>
                                        <input type="text" maxlength="280" v-model="description"
                                               ref="description"
                                               :class="{ 'is-invalid': $v.description.$error }" class="form-control"
                                               placeholder="Type in Description—Maximum 280 characters">
                                        <div v-if="!$v.description.required" class="invalid-feedback">Video
                                            description is required.
                                        </div>
                                    </div>

                                    <div class="form-group" v-if="subjectTypeTag == 'roadshow'">
                                        <label class="control-label font-weight-bold">Road Show Geography</label>
                                        <v-select label="name" :options="countries" v-model="country"
                                                  :clearable="false" @input="getState"
                                                  placeholder="Select Country"></v-select>
                                        <div v-if="!$v.country.required" class="invalid-server-feedback">Country is
                                            required.
                                        </div>
                                        <br/>
                                        <v-select label="name" :options="stateList" v-model="state"
                                                  :clearable="false" @input="getCities"
                                                  placeholder="Select State"></v-select>
                                        <div v-if="!$v.state.required" class="invalid-server-feedback">State is
                                            required.
                                        </div>
                                        <br/>
                                        <v-select label="name" :options="cityList" v-model="city" :clearable="false"
                                                  placeholder="Select City"></v-select>
                                        <div v-if="!$v.city.required" class="invalid-server-feedback">City is
                                            required.
                                        </div>

                                        <!--                                    <v-select label="name" :options="countries"  :clearable="false"  placeholder="Select Country"></v-select>-->
                                    </div>
                                    <div class="form-group" v-if="subjectTypeTag == 'roadshow'">
                                        <label class="control-label font-weight-bold">Investment Bank Hosted Road
                                            Show</label>
                                        <v-select :options="[{label: 'Yes', id: 1},{label: 'No', id: 0}]"
                                                  v-model="investmentBankHosted"
                                                  @input="clearInvestmentBankName" :clearable="false"
                                                  placeholder="Select Yes or No"></v-select>
                                    </div>
                                    <div class="form-group"
                                         v-if="investmentBankHosted.id == 1 && (subjectTypeTag == 'roadshow')">
                                        <label class="control-label font-weight-bold">Name of Investment
                                            Bank</label>
                                        <input type="text" v-model="investmentBankName"
                                               :class="{ 'is-invalid': $v.investmentBankName.$error }"
                                               class="form-control" placeholder="Type Name">
                                        <div v-if="!$v.investmentBankName.required" class="invalid-feedback">Bank
                                            name is required.
                                        </div>
                                    </div>

                                    <!--                                        <div class="form-group">-->
                                    <!--                                            <label class="control-label font-weight-bold">For this Video, Who Are Your Top Competitors?</label>-->
                                    <!--                                            <input type="text" v-model="topCompetitors" :class="{ 'is-invalid': $v.topCompetitors.$error }" class="form-control" placeholder="Write at least two competitors separated by commas">-->
                                    <!--                                            <div v-if="!$v.topCompetitors.required" class="invalid-feedback">Top competitors is required.</div>-->
                                    <!--                                        </div>-->

                                    <!--                                        <div class="form-group mb-4">-->
                                    <!--                                            <label class="btn btn-success w-100">-->
                                    <!--                                                <input name="file1" type="file" style="display:None;"> <span>Upload Video(s) that Apply to Categorizes Inputted Above</span>-->
                                    <!--                                            </label>-->
                                    <!--                                        </div>-->

                                    <button @click.prevent="prev()" class="btn btn-back-next">Back</button>
                                    <button @click.prevent="step3()" class="btn btn-back-next float-right">Next
                                    </button>
                                    <!--                                        <button type="submit"  :disabled='submitButtonDisabled' class="btn btn-back-next float-right">Complete</button>-->
                                </div>
                            </fieldset>
                        </form>

                        <!--Step-3 Start-->
                        <div class="col p-3" v-show="step == 3">
                            <div class="d-flex">
                                <div class="row" v-if="uploadButtonSeen">
                                    <div class="large-12 columns">

                                        <div id="drag-area" class="panel drop-zone drag-area">
                                            <!--                                            <div class="icon"><i class="fas fa-cloud-upload-alt"></i></div>-->
                                            <header>Drag and drop videos</header>
                                            <header>to upload</header>
                                            <button class="btn btn-info px-5"  id="browseButton">Or choose files</button>
                                            <div id="results" class="panel"></div>
                                        </div>
                                        <p class="text-center mt-1 font-italic">After selecting your video file press "Upload" to upload the file</p>
                                        <div class="text-center">
                                            <button @click.prevent="prev()" class="btn btn-back-next">Back</button>
                                            <button type="button" class="btn btn-success px-5 video-upload-button" @click="startUpload">
                                                Upload Video
                                            </button>
                                            <div class="alert-box alert" data-nothingToUpload>Error Nothing To Upload, Please Add File</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-5">
                                <div class="progress d-none" id="upload-progress">
                                    <div class="progress-bar bg-success text-center"
                                         role="progressbar" style="width: 0%">
                                        <span class="sr-only"></span>
                                    </div>
                                </div>
                                <div class="alert alert-box"></div>
                            </div>
                            <div class="d-flex">
                                <router-link v-if="uploadSuccess" class="btn btn-back-next align-self-center mx-auto"
                                             :to="{name: 'Dashboard' }">Back to Dashboard
                                </router-link>
                            </div>
                        </div>

                        <loader :is-visible="isLoading"></loader>

                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    import Questionnnaire from "../apis/Questionnnaire";
    import AudioVideoHierarchy from '../components/AudioVideoHierarchy'
    import Navigation from "../components/Navigation.vue";
    import loader from '../components/Loader'
    import Datepicker from 'vuejs-datepicker';
    import vSelect from 'vue-select'
    import Resumable from 'resumablejs'
    import {required} from 'vuelidate/lib/validators'
    import sidebar from '../components/Sidebar'
    import Common from '../apis/Common'
    import User from "../apis/User";

    export default {
        data() {
            return {
                r: null,
                progressBar: null,
                uploadSuccess: false,

                isLoading: false,
                errors: [],
                step: 1,
                uploadButtonSeen: true,

                form: {
                    industry: "",
                    sector: "",
                    subSector: "",
                    group: "",
                    subGroup: "",
                    echelon: "",
                    subEchelon: "",
                    tier: "",
                    subTier: "",
                    layer: "",
                    subLayer: "",
                    deck: "",
                    subDeck: "",
                    floor: "",
                    subFloor: "",
                    basement: "",
                    subBasement: "",
                    mine: "",
                    subMine: "",
                    lookupId: null,
                },
                taxonomySavedData: "",
                taxonomyIndustryData: "",

                videoFormData: {
                    categorizationLevel: "",
                    categorizationNodeId: "",
                    name: '',
                    publicationDate: '',
                    mediaPresenter: "",
                    otherMediaPresenter: "",
                    // videoCoverType: "",
                    mediaSubType: "",
                    subjectType: "",
                    description: "",
                    // topCompetitors: "",
                    investmentBankHosted: "",
                    investmentBankName: "",
                    country: "",
                    state: "",
                    city: "",
                    lookupId: "",
                    _token: "",
                },
                publicationDate: "",
                mediaPresenter: "",
                otherMediaPresenter: "",
                showOtherMediaPresenterField: false,
                // videoCoverType: "",
                mediaSubType: "",
                mediaType: "",
                subjectType: "",
                subjectTypeTag: "",
                description: "",
                // topCompetitors: "",
                name: "",
                city: "",
                state: "",
                country: "",
                investmentBankHosted: {label: 'Yes', id: 1},
                investmentBankName: "",
                countries: [],
                stateList: [],
                cityList: [],
                // mediaCoverTypes: [],
                mediaSubTypes: [],
                subjectTypes: [],
                mediaPresenterTypes: [],
                submitButtonDisabled: false,
                hierarchyLastLevel: "",
            };
        },
        validations: {
            name: {required},
            publicationDate: {required},
            mediaPresenter: {required},
            mediaSubType: {required},
            subjectType: {required},
            otherMediaPresenter: {required},
            investmentBankName: {required},
            // topCompetitors: {required},
            description: {required},

            country: {required},
            state: {required},
            city: {required},
        },
        methods: {
            prev() {
                this.step--;
            },
            addNode() {
                this.$refs.taxonomyChild.saveHierarchyInfo()
            },
            step2() {
                if ("" == this.form.industry && null == this.form.lookupId) {
                    this.$refs.taxonomyChild.$v.form.industry.$touch();
                    return false
                }
                else if ("" != this.form.industry) {
                    //add hierarchy info
                    let nodeformData = new FormData();
                    nodeformData.append('node_type', this.$refs.taxonomyChild.categorizationLevel);
                    nodeformData.append('node_id', this.$refs.taxonomyChild.categorizationNodeId);
                    nodeformData.append('industry_id', this.$refs.taxonomyChild.form.industry.id);
                    nodeformData.append('tracking_id', this.$refs.taxonomyChild.tracking_id);
                    nodeformData.append('company_last_level', this.$refs.taxonomyChild.hierarchyLastLevel);

                    User.addAudioVideoMultipleNodes(nodeformData)
                        .then((response) => {
                            this.isDisabled = false;
                            this.isLoading = false;
                            if (response.data.success) {
                                this.form.lookupId = (null == this.form.lookupId) ? response.data.data.lookupId : this.form.lookupId +','+ response.data.data.lookupId;
                            }
                        })
                        .catch(error => {
                            if (error.response.status === 422) {
                                //toastr.error(error.response.data.error.message)
                            } else if (error.response.status == 401) {
                                localStorage.clear();
                                this.$router.push({name: "Login"});
                            } else {
                                toastr.error(error)
                            }
                            this.isLoading = false;
                        });


                }


                this.getCountryList();
                this.getMediaTypes();
                // this.getMediaCoverType();
                this.getSubjectTypes();
                this.getMediaPresenterType();
                this.step++;
            },
            step3() {
                this.$v.name.$touch();
                this.$v.publicationDate.$touch();
                this.$v.mediaPresenter.$touch();
                this.$v.mediaSubType.$touch();
                this.$v.subjectType.$touch();
                this.$v.description.$touch();
                // this.$v.topCompetitors.$touch();
                if (this.investmentBankHosted.id == 1 && this.subjectTypeTag == 'roadshow') {
                    this.$v.investmentBankName.$touch();
                }
                // if(this.showOtherMediaPresenterField){
                //     this.$v.otherMediaPresenter.$touch();
                // }
                if (this.subjectTypeTag == 'roadshow') {
                    this.$v.country.$touch();
                    this.$v.city.$touch();
                    this.$v.state.$touch();
                }

                if (this.$v.name.$invalid || this.$v.publicationDate.$invalid || this.$v.description.$invalid || this.$v.mediaPresenter.$invalid || this.$v.subjectType.$invalid ||
                    // (this.showOtherMediaPresenterField && this.$v.otherMediaPresenter.$invalid) ||
                    (this.investmentBankHosted.id == 1 && this.subjectTypeTag == 'roadshow' && this.$v.investmentBankName.$invalid) || ((this.subTypeTag == 'prodcast') && this.$v.podcastGuest.$invalid) ||
                    ((this.subjectTypeTag == 'roadshow') && this.$v.country.$invalid) ||
                    ((this.subjectTypeTag == 'roadshow') && this.$v.city.$invalid) ||
                    ((this.subjectTypeTag == 'roadshow') && this.$v.state.$invalid)
                ) {
                    if (this.$v.name.$invalid ) {
                        this.$refs.name.focus();
                    } else if (this.$v.publicationDate.$invalid) {
                        $('#publicationDate').focus()
                    }else if (this.$v.mediaPresenter.$invalid) {
                        $('#mediaPresenter .vs__search').focus()
                    }else if (this.$v.mediaSubType.$invalid) {
                        $('#mediaSubType .vs__search').focus()
                    }else if (this.$v.subjectType.$invalid) {
                        $('#subjectType .vs__search').focus()
                    }else if (this.$v.description.$invalid) {
                        this.$refs.description.focus();
                    }
                    return false;
                }
                this.submitButtonDisabled = true;

                this.videoFormData.name = this.name;
                this.videoFormData.publicationDate = this.dateConvert(this.publicationDate);
                this.videoFormData.mediaPresenter = this.mediaPresenter.id;
                this.videoFormData.otherMediaPresenter = this.otherMediaPresenter;
                // this.videoFormData.videoCoverType = this.videoCoverType.id;
                this.videoFormData.mediaSubType = this.mediaSubType.id;
                this.videoFormData.subjectType = this.subjectType.id;
                this.videoFormData.subjectTypeTag = this.subjectTypeTag;
                this.videoFormData.description = this.description;
                // this.videoFormData.topCompetitors = this.topCompetitors;
                this.videoFormData.country = this.country ? this.country.id : '';
                this.videoFormData.state = this.state ? this.state.id : '';
                this.videoFormData.city = this.city ? this.city.id : '';
                this.videoFormData.investmentBankHosted = this.investmentBankHosted.id;
                this.videoFormData.investmentBankName = this.investmentBankName;
                this.videoFormData.lookupId = this.form.lookupId;
                this.videoFormData.userInfo = localStorage.getItem("userInfo")
                this.videoFormData._token = document.querySelector('meta[name="csrf-token"]').content

                this.isLoading = true;
                Questionnnaire.videoFormValidate(this.videoFormData)
                    .then((response) => {
                        this.isLoading = false
                        this.submitButtonDisabled = false;
                        this.step++;
                    })
                    .catch(error => {
                        this.isLoading = false
                        this.submitButtonDisabled = false;
                        if (error.response.status === 422) {
                            toastr.error(error.response.data.error.message)
                        } else if (error.response.status == 401) {
                            localStorage.clear();
                            this.$router.push({name: "Login"});
                        } else {
                            toastr.error(error)
                        }
                    });
            },
            addVideoQuestionnaire() {
                console.log('ready to submit')
            },
            companyQuestionnaireData: function () {
                axios.get('/api/company-hierarchy-data?userInfo='+localStorage.getItem("userInfo"))
                    .then(response => {
                        this.isLoading = false;
                        this.taxonomyIndustryData = response.data.data;
                    })
                    .catch(error => {
                        this.isLoading = false
                        if (error.response.status == 401) {
                            localStorage.clear();
                            this.$router.push({name: "Login"});
                        }
                    });
            },
            // addSuggestion: function (suggestionType) {
            //     this.isDisabled = true;
            //     this.suggestionFormData.suggestion_explanation = this.suggestion_explanation;
            //     this.suggestionFormData.node_type = this.node_type;
            //     this.suggestionFormData.node_id = this.node_id;
            //     this.suggestionFormData.suggestion_type = suggestionType;
            //
            //     Questionnnaire.nodeSuggestion(this.suggestionFormData)
            //         .then((response) => {
            //             if (response.data.success) {
            //                 this.suggestion_explanation = ''
            //                 toastr.success(response.data.success.message)
            //                 this.$bvModal.hide('modal-' + suggestionType + '-node')
            //             }
            //         })
            //         .catch(error => {
            //             if (error.response.status === 422) {
            //                 toastr.error(error.response.data.error.message)
            //             } else if (error.response.status == 401) {
            //                 localStorage.clear();
            //                 this.$router.push({name: "Login"});
            //             } else {
            //                 toastr.error(error)
            //             }
            //         });
            // },
            setMediaPresenter: function (value) {
                this.showOtherMediaPresenterField = false

                if ('Other' == value.name) {
                    this.showOtherMediaPresenterField = true
                }
            },
            clearInvestmentBankName: function (value) {

                if (0 == value.id) {
                    this.investmentBankName = ''
                }
                console.log(value.id);
            },
            /*sendHierarchyInfo: function (type, id, description) {
                console.log(type)
                console.log(id)
                console.log(description)
                this.node_type = type;
                this.node_id = id;
                this.node_description = description;
            },
            */
            getCountryList: function () {
                axios.get('/api/country-list')
                    .then(response => {
                        this.countries = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getState: function (value) {
                axios.get('/api/get-state-list/' + value.id)
                    .then(response => {
                        this.stateList = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getCities: function (value) {
                axios.get('/api/get-city-list/' + value.id)
                    .then(response => {
                        this.cityList = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getMediaTypes: function () {
                axios.get('/api/get-media-sub-type/2')
                    .then(response => {
                        this.mediaSubTypes = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            // getMediaCoverType : function(){
            //     axios.get('api/get-media-cover-type/2')
            //         .then(response => {
            //             this.mediaCoverTypes = response.data.data
            //         })
            //         .catch(error => console.log(error))
            // },
            getSubjectTypes: function () {
                axios.get('/api/get-subject-type/2')
                    .then(response => {
                        this.subjectTypes = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            setSubjectTypeTag: function (value) {
                this.subjectTypeTag = ''
                if (null != value) {
                    this.subjectTypeTag = value.tag
                }
            },
            getMediaPresenterType: function () {
                axios.get('/api/get-media-presenter-type/2')
                    .then(response => {
                        this.mediaPresenterTypes = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            showAddModal() {
                this.isDisabled = false
                this.$bvModal.hide('modal-add-suggestion')
                this.$bvModal.show('modal-add-node')
            },
            showReplaceModal() {
                this.isDisabled = false
                if (this.node_description) {
                    this.$bvModal.hide('modal-add-suggestion')
                    this.$bvModal.show('modal-replace-node')

                } else {
                    toastr.error('Please select a node before this operation')
                }
            },
            showDeleteModal() {
                this.isDisabled = false
                if (this.node_description) {
                    this.$bvModal.hide('modal-add-suggestion')
                    this.$bvModal.show('modal-delete-node')
                } else {
                    toastr.error('Please select a node before this operation')
                }

            },
            startUpload: function () {
               var nothingToUpload = $('[data-nothingToUpload]');
                if ($('#results').children().length > 0) {
                    /*Taxonomy Data submit*/
                    this.r.opts.query.lookupId = this.form.lookupId;
                    /*End*/
                    this.r.opts.query.type = 'dacast';
                    this.r.opts.query.name = this.videoFormData.name;
                    this.r.opts.query.publicationDate = this.videoFormData.publicationDate;
                    this.r.opts.query.mediaPresenter = this.videoFormData.mediaPresenter;
                    this.r.opts.query.otherMediaPresenter = this.videoFormData.otherMediaPresenter;
                    // this.r.opts.query.videoCoverType = this.videoFormData.videoCoverType;
                    this.r.opts.query.mediaSubType = this.videoFormData.mediaSubType;
                    this.r.opts.query.subjectType = this.videoFormData.subjectType;
                    this.r.opts.query.subjectTypeTag = this.videoFormData.subjectTypeTag;
                    this.r.opts.query.description = this.videoFormData.description;
                    // this.r.opts.query.topCompetitors = this.videoFormData.topCompetitors;
                    this.r.opts.query.country = this.videoFormData.country;
                    this.r.opts.query.state = this.videoFormData.state;
                    this.r.opts.query.city = this.videoFormData.city;
                    this.r.opts.query.investmentBankHosted = this.videoFormData.investmentBankHosted;
                    this.r.opts.query.investmentBankName = this.videoFormData.investmentBankName;
                    this.r.opts.query.userInfo = localStorage.getItem("userInfo")
                    this.r.upload();
                } else {
                    nothingToUpload.fadeIn();
                    setTimeout(function () {
                        nothingToUpload.fadeOut();
                    }, 3000);
                }
            },
            pauseUpload: function () {
                if (this.r.files.length > 0) {
                    if (this.r.isUploading()) {
                        return this.r.pause();
                    }
                    return this.r.upload();
                }
            },
            getName: function () {
                return this.name
            },
            TaxonomyData: function (value) {
                if (value != undefined || value.length != 0) {
                    this.form.industry = value[0];
                    this.form.sector = value[1];
                    this.form.subSector = value[2];
                    this.form.group = value[3];
                    this.form.subGroup = value[4];
                    this.form.echelon = value[5];
                    this.form.subEchelon = value[6];
                    this.form.tier = value[7];
                    this.form.subTier = value[8];
                    this.form.layer = value[9];
                    this.form.subLayer = value[10];
                    this.form.deck = value[11];
                    this.form.subDeck = value[12];
                    this.form.floor = value[13];
                    this.form.subFloor = value[14];
                    this.form.basement = value[15];
                    this.form.subBasement = value[16];
                    this.form.mine = value[17];
                    this.form.subMine = value[18];
                    this.form.lookupId = value[19];
                    this.hierarchyLastLevel = value[20];
                }
                //console.log(value);

            }

        },
        created: function () {
            this.isLoading = true
            this.dateConvert = Common.dateConvert;
            // this.getCountryList();
            this.companyQuestionnaireData()
        },
        mounted: function () {
            this.r = new Resumable({
                // Use chunk size that is smaller than your maximum limit due a resumable issue
                // https://github.com/23/resumable.js/issues/51
                chunkSize: 1 * 1024 * 1024, // 1MB
                simultaneousUploads: 2,
                testChunks: false,
                throttleProgressCallbacks: 1,
                fileType: ['MOV', 'MPEG4', 'MP4', 'AVI', 'WMV', 'MPEGPS', 'FLV', '3GPP', 'WebM', 'DNxHR', 'ProRes', 'CineForm', 'HEVC (h265)'],
                // Get the url from data-url tag
                //target:'/media-upload',
                target: 'api/dacast-video',
                // Append token to the request - required for web routes
                query: {_token: document.querySelector('meta[name="csrf-token"]').content, Accept: 'application/json'}
            });

            var vm = this;

            // new code start here
            var draggable = $('#drag-area'),
                browseButton = $('#browseButton');

            this.r.assignBrowse(browseButton);
            this.r.assignDrop(draggable);

            /*new code end here*/


            this.r.on('fileAdded', function (file, event) {
                console.log('file upload')
                window.onbeforeunload = function () {
                    return "A XHR request is pending, are you sure you want to leave ?";
                }
                var template =
                    '<div data-uniqueid="' + file.uniqueIdentifier + '">' +
                    '<div class="fileName">' + file.fileName + ' (' + file.file.type + ')' + '</div>' +
                    '</div>';

                $('#results').html(template);
               // vm.startUpload()
            });

            this.r.on('uploadStart', function () {
                $('.alert-box').removeClass('alert-success').removeClass('alert-danger').text('');
            });

            this.r.on('fileSuccess', function (file, message) {
                var res = JSON.parse(message)
                $('#upload-progress').addClass('d-none').find('.progress-bar').css('width', '0%');
                if(false == res.status){
                    $('.alert-box').addClass('alert-danger').html("Unable to upload");
                }
                else {
                    $('.alert-box').addClass('alert-success').html("Uploading complete! We are currently processing your video, this may take some time. You may leave this page.");
                }

                vm.uploadSuccess = true;
                window.onbeforeunload = function () {
                    // blank function do nothing
                }
                vm.uploadButtonSeen = false
                var res = JSON.parse(message)
                localStorage.setItem("userInfo", JSON.stringify(res.data));
                localStorage.setItem("info", JSON.stringify(res.info));
                localStorage.setItem("token", "true");
            });

            this.r.on('progress', function () {
                $('#upload-progress').removeClass('d-none').find('.progress-bar').attr('style', "width:" + this.progress() * 100 + '%').html(Math.round(this.progress() * 100) + '%');
                $('#pause-upload-btn').find('.glyphicon').removeClass('glyphicon-play').addClass('glyphicon-pause');
                vm.uploadSuccess = false;
            });

            this.r.on('pause', function () {
                $('#pause-upload-btn').find('.glyphicon').removeClass('glyphicon-pause').addClass('glyphicon-play');
            });
            this.r.on('fileError', function (file, message) {
                $('#upload-progress').addClass('d-none').find('.progress-bar').css('width', '0%');
                $('.alert-box').addClass('alert-danger').html("Unable to upload");
                vm.uploadSuccess = false;
                window.onbeforeunload = function () {
                    // blank function do nothing
                }
            });
            this.r.on('error', function (file, message) {
                window.onbeforeunload = function () {
                    // blank function do nothing
                }
                const error = JSON.parse(file)
                // if (error.resultCode == 500 || error.resultCode == 419) {
                //             localStorage.clear();
                //             this.$router.push({ name: "Home" });
                //         }
            });
        },
        components: {
            loader,
            AudioVideoHierarchy,
            Datepicker,
            vSelect,
            Navigation,
            sidebar
        }
    };
</script>

<style>
    .drop-zone {
        text-align:center;
        border:2px dashed #ccc;
    }
    .danger, .danger:hover {
        background-color: #e74c3c;
    }
    .inverse, .inverse:hover {
        background-color: #34495e;
    }
    input[type="file"] {
        height:32px;
    }
    div[data-nothingToUpload] {
        display:none;
    }
    .deleteFile {
        padding: 3px 7px;
        color: #bf0000;
        font-weight: bold;
        cursor:pointer;
    }
    button {
        border: none;
        cursor: pointer;
        background: #bdc3c7;
        color: #ffffff;
        padding: 9px 12px 10px;
        line-height:1.333;
        text-decoration: none;
        text-shadow: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        -webkit-transition: 0.25s;
        -moz-transition: 0.25s;
        -o-transition: 0.25s;
        transition: 0.25s;
        -webkit-backface-visibility: hidden;
    }
    .meter {
        color:#fff;
        line-height:18px;
        font-size:12px;
    }
    .drag-area{
        border: 2px dashed #efefef;
        height: 400px;
        width: 550px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .drag-area.active{
        border: 2px solid #958e8e;
    }
    .drag-area .icon{
        font-size: 100px;
    }
    .drag-area header{
        font-size: 30px;
        font-weight: 500;
    }
    .drag-area span{
        font-size: 25px;
        font-weight: 500;
        margin: 10px 0 15px 0;
    }
    .drag-area button{
        padding: 10px 30px;
        font-size: 15px;
        font-weight: 500;
        border: none;
        outline: none;
        border-radius: 5px;
        cursor: pointer;
        color: #ffffff;
        margin-top: 10px;
    }
    .upload-title{
        margin-top: 30px;
    }
    .video-upload-button{
        font-size: 16px;
        padding: 8px 50px;
    }
</style>
