<template>
    <div class="home">
        <Navigation />
        <div class="container-fluid px-0">
            <div class="row collapse show no-gutters d-flex h-100 position-relative">
            <div class="col-9 container">
                <img src="/images/issuerpixel_page_logo.png" alt="" class="img-fluid mx-auto d-block">
                <h2 class="text-center mb-3">Audio Upload Questionnaire</h2>
                <div class="row register-container">
                    <div v-bind:class="(step == 1)?'col-md-9':'col-md-6 mx-auto'">
                        <form class="form-horizontal" v-on:submit.prevent="addAudioQuestionnaire">
                            <!--Step-1 Start-->
                            <fieldset class="mb-5" v-if="step == 1">
                                <span class="offset-4 pl-2">Step 1 of 2</span>

                                <AudioVideoHierarchy @nodeData="TaxonomyData" :taxonomySavedData='taxonomySavedData'
                                                     :taxonomyIndustryData='taxonomyIndustryData'
                                                     v-if="taxonomyIndustryData"
                                                     ref="taxonomyChild"></AudioVideoHierarchy>

                                <!--                                    <router-link class="btn btn-back-next" :to="{ name: 'VideoAudioFileUpload' }">Back</router-link>-->
                                <div class="col-md-8 offset-4">
                                    <button @click.prevent="addNode()" class="btn btn-theme-primary">Add Another Node
                                    </button>
                                    <button @click.prevent="step2()" class="btn btn-back-next float-right">Finish
                                    </button>
                                </div>
                            </fieldset>
                            <!--Step-2 Start-->
                            <fieldset class="mb-5" v-if="step == 2">
                                <span>Step 2 of 2</span>
                                <div class="form-group">
                                    <label class="control-label">Audio Title<span class="text-danger">*</span></label>
                                    <input type="text" maxlength="60" class="form-control" v-model="name"
                                           ref="name"
                                           :class="{ 'is-invalid': $v.name.$error }"
                                           placeholder="Type in Audio Title - Maximum 60 characters">
                                    <div v-if="!$v.name.required" class="invalid-feedback">Audio title is
                                        required.
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Date of Audio Recording<span class="text-danger">*</span></label>
                                    <datepicker input-class="form-control" v-model="publicationDate"
                                                :typeable="true"
                                                name="publicationDate"
                                                id="publicationDate"
                                                format="MM/dd/yyyy" placeholder="MM/DD/YYYY"
                                                :class="{ 'is-invalid': $v.publicationDate.$error }"></datepicker>
                                    <div v-if="!$v.publicationDate.required" class="invalid-feedback">Publication
                                        date is required.
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label">Audio Presenter<span class="text-danger">*</span></label>
                                    <v-select label="name" :options="mediaPresenterTypes"
                                              ref="mediaPresenter"
                                              id="mediaPresenter"
                                              :class="{ 'is-invalid': $v.mediaPresenter.$error }"
                                              v-model="mediaPresenter"
                                              :clearable="false" placeholder="Select Below"
                                              @input="setMediaPresenter"></v-select>

                                    <div v-if="!$v.mediaPresenter.required" class="invalid-feedback">Audio presenter is
                                        required.
                                    </div>
                                </div>

                                <div class="form-group" v-if="showOtherMediaPresenterField">
                                    <input type="text" maxlength="30" class="form-control"
                                           v-model="otherMediaPresenter" placeholder="Write Audio Presenter">
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Audio Sub Type<span class="text-danger">*</span></label>
                                    <v-select label="name" :options="mediaSubTypes"
                                              ref="mediaSubType"
                                              id="mediaSubType"
                                              :class="{ 'is-invalid': $v.mediaSubType.$error }"
                                              v-model="mediaSubType"
                                              :clearable="false" placeholder="Select Below"
                                              @input="setSubTypeTag">
                                    </v-select>
                                    <div v-if="!$v.mediaSubType.required" class="invalid-feedback">Audio sub type is
                                        required.
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Subject of Company Audio<span class="text-danger">*</span></label>

                                    <v-select label="name" :options="subjectTypes" v-model="subjectType"
                                              id="subjectType"
                                              :class="{ 'is-invalid': $v.subjectType.$error }"
                                              @input="setSubjectTypeTag" :clearable="false"
                                              taggable push-tags
                                              :create-option="option => ({name: option.toLowerCase(), id: option.toLowerCase()+'_suggested'})"
                                              placeholder="Select Below"></v-select>
                                    <div v-if="!$v.subjectType.required" class="invalid-feedback">Subject of company
                                        audio is
                                        required.
                                    </div>
                                </div>
                                <div class="form-group" v-if="subTypeTag == 'prodcast'">
                                    <label class="control-label">Podcast Guest</label>
                                    <select class="form-control" v-model="podcastGuest">
                                        <option value="">Select Below</option>
                                        <option v-for="podcastGuestTypeOption in podcastGuestTypes"
                                                v-bind:value="podcastGuestTypeOption.id">
                                            {{ podcastGuestTypeOption.name }}
                                        </option>
                                    </select>
                                    <div v-if="!$v.podcastGuest.required" class="invalid-server-feedback">Podcast
                                        guest is required.
                                    </div>
                                </div>
                                <div class="form-group" v-if="subTypeTag == 'prodcast'">
                                    <label class="control-label">Podcast Series Name</label>
                                    <input type="text" v-model="podcastSeriesName" class="form-control"
                                           placeholder="(Name of Podcast Series)">
                                </div>
                                <div class="form-group" v-if="subjectTypeTag == 'roadshow'">
                                    <label class="control-label">Road Show Geography</label>
                                    <v-select label="name" :options="countries" v-model="country"
                                              :clearable="false" @input="getStates"
                                              placeholder="Select Country"></v-select>
                                    <div v-if="!$v.country.required" class="invalid-server-feedback">Country is
                                        required.
                                    </div>
                                    <br/>
                                    <v-select label="name" :options="states" v-model="state"
                                              :clearable="false" @input="getCities"
                                              placeholder="Select State"></v-select>
                                    <div v-if="!$v.state.required" class="invalid-server-feedback">State is
                                        required.
                                    </div>
                                    <br/>
                                    <v-select label="name" :options="cities" v-model="city"
                                              :clearable="false" placeholder="Select City"></v-select>
                                    <div v-if="!$v.city.required" class="invalid-server-feedback">City is
                                        required.
                                    </div>
                                </div>


                                <div class="form-group" v-if="subjectTypeTag == 'roadshow'">
                                    <label class="control-label">Investment Bank Hosted Road Show</label>
                                    <select class="form-control" v-model="investmentBankHosted"
                                            @change="clearInvestmentBankName($event)">
                                        <option value="1" selected>Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>
                                <div class="form-group"
                                     v-if="investmentBankHosted == 1 && (subjectTypeTag == 'roadshow')">
                                    <label class="control-label">Name of Investment Bank</label>
                                    <input type="text" v-model="investmentBankName"
                                           :class="{ 'is-invalid': $v.investmentBankName.$error }"
                                           class="form-control" placeholder="Type Name">
                                    <div v-if="!$v.investmentBankName.required" class="invalid-feedback">Bank name
                                        is required.
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Audio Description<span class="text-danger">*</span></label>
                                    <input type="text" maxlength="280" v-model="description"
                                           ref="description"
                                           :class="{ 'is-invalid': $v.description.$error }" class="form-control"
                                           placeholder="Type in Description—Maximum 280 characters">
                                    <div v-if="!$v.description.required" class="invalid-feedback">Audio description
                                        is required.
                                    </div>
                                </div>

                                <div class="form-group mb-4">
                                    <label class="btn btn-success w-100">
                                        <input type="file" name="audioFile" id="audioFile" ref="audioFile" @change="selectedFile"
                                               style="display:None;"
                                               accept="audio/*"> <span>Upload Audio that Apply to Categorizes Inputted Above</span>
                                    </label>
                                    <span :class="{ 'is-invalid': $v.audioFile.$error }"></span>
                                    <div v-if="!$v.audioFile.required" class="invalid-feedback">Please select an audio file</div>
                                </div>
                                <button v-if="! uploadSuccess" @click.prevent="prev()" class="btn btn-back-next">Back
                                </button>
                                <button v-if="! uploadSuccess" type="submit" :disabled='submitButtonDisabled'
                                        class="btn btn-back-next float-right">Complete
                                </button>

                                <div class="mt-3" v-if="uploadSuccess">
                                    <div class="alert alert-box alert-success text-center">{{successMessage}}</div>
                                </div>
                                <div class="d-flex" v-if="uploadSuccess">
                                    <router-link class="btn btn-back-next align-self-center mx-auto"
                                                 :to="{name: 'Dashboard'}">Back to Dashboard
                                    </router-link>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <loader :is-visible="isLoading"></loader>
    </div>
</template>

<script>
    import Navigation from "../components/Navigation.vue";
    import Questionnnaire from "../apis/Questionnnaire";
    import AudioVideoHierarchy from '../components/AudioVideoHierarchy'
    import loader from '../components/Loader'
    import Datepicker from 'vuejs-datepicker';
    import vSelect from 'vue-select'
    import sidebar from '../components/Sidebar'
    import {required} from 'vuelidate/lib/validators'
    import Common from '../apis/Common'
    import User from "../apis/User";

    export default {
        data() {
            return {
                isLoading: false,
                uploadSuccess: false,
                successMessage: '',

                step: 1,
                errors: [],

                countries: [],
                states: [],
                cities: [],
                mediaSubTypes: [],
                subjectTypes: [],
                mediaPresenterTypes: [],
                // mediaCoverTypes : [],
                podcastGuestTypes: [],
                audioFile: "",

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

                categorizationLevel: "",
                nodeId: "",
                name: "",
                publicationDate: "",
                mediaPresenter: "",
                otherMediaPresenter: "",
                showOtherMediaPresenterField: false,
                audioCoverType: "",
                mediaSubType: "",
                subTypeTag: "",
                subjectType: "",
                subjectTypeTag: "",
                podcastGuest: "",
                podcastSeriesName: "",
                description: "",
                // topCompetitors: "",
                country: "",
                state: "",
                city: "",
                investmentBankHosted: 1,
                investmentBankName: "",
                file: "",
                submitButtonDisabled: false,
            };
        },
        validations: {
            name: {required},
            publicationDate: {required},
            mediaPresenter: {required},
            mediaSubType: {required},
            subjectType: {required},
            investmentBankName: {required},
            description: {required},
            // topCompetitors: {required},
            podcastGuest: {required},
            country: {required},
            state: {required},
            city: {required},
            audioFile: {required},
        },
        methods: {
            prev() {
                this.step--;
            },
            addNode() {
                this.$refs.taxonomyChild.saveHierarchyInfo();
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
                this.getmediaSubTypes();
                this.getSubjectTypes();
                this.getMediaPresenterType();
                // this.getMediaCoverType();
                this.getPodcastGuestTypes();
                this.step++;
            },
            selectedFile(event) {
                if (event.target.files[0]['type'] === 'audio/mpeg' ||
                    event.target.files[0]['type'] === 'audio/ogg' ||
                    event.target.files[0]['type'] === 'audio/wav' ||
                    event.target.files[0]['type'] === 'audio/x-matroska' ||
                    event.target.files[0]['type'] === 'audio/mp4'
                ) {
                    this.file = event.target.files[0];
                    this.audioFile =  event.target.files[0];
                } else {
                    // this.file = event.target.files[0];
                    toastr.error('Invalid file type')
                }

            },
            addAudioQuestionnaire() {
                this.$v.name.$touch();
                this.$v.publicationDate.$touch();
                this.$v.mediaPresenter.$touch();
                this.$v.mediaSubType.$touch();
                this.$v.subjectType.$touch();
                this.$v.description.$touch();
                this.$v.audioFile.$touch();
                if (this.investmentBankHosted == 1 && this.subjectTypeTag == 'roadshow') {
                    this.$v.investmentBankName.$touch();
                }
                if (this.subTypeTag == 'prodcast') {
                    this.$v.podcastGuest.$touch();
                }
                if (this.subjectTypeTag == 'roadshow') {
                    this.$v.country.$touch();
                    this.$v.city.$touch();
                    this.$v.state.$touch();
                }

                if (this.$v.name.$invalid || this.$v.publicationDate.$invalid || this.$v.mediaPresenter.$invalid || this.$v.mediaSubType.$invalid ||  this.$v.subjectType.$invalid || this.$v.description.$invalid || this.$v.audioFile.$invalid
                    // this.$v.topCompetitors.$invalid ||
                    // (this.investmentBankHosted == 1 && this.subjectTypeTag == 'roadshow' && this.$v.investmentBankName.$invalid) || ((this.subTypeTag == 'prodcast') && this.$v.podcastGuest.$invalid) ||
                    // ((this.subjectTypeTag == 'roadshow') && this.$v.country.$invalid) ||
                    // ((this.subjectTypeTag == 'roadshow') && this.$v.city.$invalid) ||
                    // ((this.subjectTypeTag == 'roadshow') && this.$v.state.$invalid)
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
                this.isLoading = true


                const config = {
                    headers: {'content-type': 'multipart/form-data'}
                }

                let formData = new FormData();

                formData.append('lookupId', this.form.lookupId);
                formData.append('name', this.name);
                formData.append('publicationDate', this.dateConvert(this.publicationDate));
                formData.append('mediaPresenter', this.mediaPresenter.id);
                formData.append('otherMediaPresenter', this.otherMediaPresenter);
                formData.append('audioCoverType', this.audioCoverType);
                formData.append('mediaSubType', this.mediaSubType.id);
                formData.append('subjectType', this.subjectType.id);
                formData.append('subjectTypeTag', this.subjectTypeTag);
                formData.append('podcastGuest', this.podcastGuest);
                formData.append('podcastSeriesName', this.podcastSeriesName);

                formData.append('description', this.description);
                // formData.append('topCompetitors', this.topCompetitors);
                formData.append('country', this.country ? this.country.id : '');
                formData.append('state', this.state ? this.state.id : '');
                formData.append('city', this.city ? this.city.id : '');
                formData.append('investmentBankHosted', this.investmentBankHosted);
                formData.append('investmentBankName', this.investmentBankName);
                formData.append('_token', document.querySelector('meta[name="csrf-token"]').content);
                formData.append('userInfo',localStorage.getItem("userInfo"));
                formData.append('file', this.file);

                this.submitButtonDisabled = true;

                Questionnnaire.uploadAudio(formData, config)
                    .then((response) => {
                        this.isLoading = false
                        this.submitButtonDisabled = false;
                        toastr.success(response.data.success.message)
                        this.uploadSuccess = true;
                        this.successMessage = 'Uploading complete!'

                        localStorage.setItem("userInfo", JSON.stringify(response.data.data));
                        localStorage.setItem("info", JSON.stringify(response.data.info));
                        this.$root.$emit("login", true);
                        localStorage.setItem("token", "true");
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
            setSubTypeTag: function (value) {
                this.subTypeTag = ''
                this.podcastSeriesName = ''
                this.podcastGuest = ''
                if (null != value) {
                    this.subTypeTag = value.tag
                }
            },
            setSubjectTypeTag: function (value) {
                this.subjectTypeTag = ''
                if (null != value) {
                    this.subjectTypeTag = value.tag
                }
            },
            setMediaPresenter: function (value) {
                this.showOtherMediaPresenterField = false

                if ('Other' == value.name) {
                    this.showOtherMediaPresenterField = true
                }
            },
            clearInvestmentBankName: function (e) {
                if (0 == e.target.value) {
                    this.investmentBankName = ''
                }
                console.log(e.target.value);
            },

            getCountryList: function () {
                axios.get('/api/country-list')
                    .then(response => {
                        this.countries = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getStates: function (value) {
                axios.get('/api/get-state-list/' + value.id)
                    .then(response => {
                        this.states = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getCities: function (value) {
                axios.get('/api/get-city-list/' + value.id)
                    .then(response => {
                        this.cities = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getmediaSubTypes: function () {
                axios.get('/api/get-media-sub-type/1')
                    .then(response => {
                        this.mediaSubTypes = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            getSubjectTypes: function () {
                axios.get('/api/get-subject-type/1')
                    .then(response => {
                        this.subjectTypes = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            getMediaPresenterType: function () {
                axios.get('/api/get-media-presenter-type/1')
                    .then(response => {
                        this.mediaPresenterTypes = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            // getMediaCoverType : function(){
            //     axios.get('api/get-media-cover-type/1')
            //         .then(response => {
            //             this.mediaCoverTypes = response.data.data
            //         })
            //         .catch(error => console.log(error))
            // },
            getPodcastGuestTypes: function () {
                axios.get('/api/get-podcast-guest')
                    .then(response => {
                        this.podcastGuestTypes = response.data.data
                    })
                    .catch(error => console.log(error))
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
        },
        created: function () {
            this.dateConvert = Common.dateConvert;
            this.isLoading = true
            this.companyQuestionnaireData()
            // this.getCountryList();
        },
        components: {
            loader,
            AudioVideoHierarchy,
            Datepicker,
            vSelect,
            sidebar,
            Navigation
        }
    };
</script>
