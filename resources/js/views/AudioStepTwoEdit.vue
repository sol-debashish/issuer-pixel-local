<template>
    <section class="dashboard pt-0">
        <div class='row'>
            <div class='col-md-10 offset-md-1 grid-margin'>
                <h4 class="pb-2 text-theme-dark-blue">Audio Details</h4>
                <div class='card'>
                    <div class='card-body'>
                    <div class="row register-container">
                        <div class="col-md-8 mx-auto mb-5">
                            <div class="panel-body">
                                <div class="form-group">
                                    <label class="control-label font-weight-bold">Audio Title<span class="text-danger">*</span></label>
                                    <input type="text"  maxlength="500" class="form-control" ref="name" v-model="name" :class="{ 'is-invalid': $v.name.$error }" placeholder="Type in Audio Title - Maximum 500 characters">
                                    <div v-if="!$v.name.required" class="invalid-feedback">Audio title is required.</div>
                                </div>
                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="form-group">
                                    <label class="control-label font-weight-bold">Date of audio Published<span class="text-danger">*</span></label>
                                    <datepicker input-class="form-control" v-model="publicationDate"
                                                name="publicationDate"
                                                @selected="dateSelected()"
                                                id="publicationDate"
                                                v-on:input=$v.publicationDate.$touch()
                                                :disabled-dates="{to: new Date(1970, 0, 1), from: new Date()}"
                                                :class="{ 'is-invalid': $v.publicationDate.$error }"
                                                :typeable="false"
                                                minimum-view="month"
                                                format="MM/yyyy" placeholder="MM/YYYY"></datepicker>
                                    <div v-if="!$v.publicationDate.required" class="invalid-feedback">Publication date is required.</div>
                                    <div v-if="!$v.publicationDate.minValue" class="invalid-feedback">The publication date must be a date after or equal to 01-01-1970.</div>
                                    <div v-if="!$v.publicationDate.maxValue" class="invalid-feedback">The publication date must be a date before or equal to {{publicationMaxDate}}.</div>
                                </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="form-group">
                                            <label class="control-label font-weight-bold">Day</label>
                                            <v-select label="name" :options="publishDays" v-model="publishDay"
                                                      :clearable="false" placeholder="Days (Optional)"></v-select>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="form-group">
                                            <label class="control-label font-weight-bold">Date of Audio Recording<span class="text-danger">*</span></label>
                                            <datepicker input-class="form-control" v-model="recodingDate" :class="{ 'is-invalid': $v.recodingDate.$error }"
                                                        :typeable="false"
                                                        name="recodingDate"
                                                        @selected="recodingDateSelected()"
                                                        id="recodingDate"
                                                        minimum-view="month"
                                                        v-on:input=$v.recodingDate.$touch()
                                                        :disabled-dates="{to: new Date(1970, 0, 1), from: new Date()}"
                                                        format="MM/yyyy" placeholder="MM/YYYY"></datepicker>
                                            <div v-if="!$v.recodingDate.required" class="invalid-feedback">Recording month and year is required.</div>
                                            <div v-if="!$v.recodingDate.minValue" class="invalid-feedback">Recording month and year must be a date after or equal to 1/1/1970.</div>
                                            <div v-if="!$v.recodingDate.maxValue" class="invalid-feedback">Recording month and year must be a date before or equal to {{publicationMaxDate}}.</div>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="form-group">
                                            <label class="control-label font-weight-bold">Day</label>
                                            <v-select label="name" :options="recodingDays" v-model="recodingDay"
                                                      :clearable="false" placeholder="Days (Optional)"></v-select>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label font-weight-bold">Audio Participants<span class="text-danger">*</span></label>
                                    <v-select label="name"
                                              multiple
                                              :class="{ 'is-invalid': $v.mediaPresenter.$error }"
                                              :options="mediaPresenterTypes"
                                              v-model="mediaPresenter"
                                              ref="mediaPresenter"
                                              :selectable="mediaPresenterTypeSelectedHide"
                                              :clearable="false" placeholder="Select Below"
                                              @input="setMediaPresenter">
                                    </v-select>
                                    <div v-if="!$v.mediaPresenter.required" class="invalid-feedback">Audio Participants is required.</div>
                                </div>

                                <div class="form-group" v-if="showOtherMediaPresenterField">
                                    <input type="text"
                                           maxlength="500"
                                           class="form-control"
                                           v-model="otherMediaPresenter"
                                           ref="otherMediaPresenter"
                                           :class="{ 'is-invalid': $v.otherMediaPresenter.$error }"
                                           placeholder="Write Audio Participant - Maximum 500 characters">
                                    <div v-if="!$v.otherMediaPresenter.required" class="invalid-feedback">Please Write Audio Participant</div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label font-weight-bold">Audio Sub Type<span class="text-danger">*</span></label>
                                    <v-select label="name"
                                              :class="{ 'is-invalid': $v.mediaSubType.$error }"
                                              :options="mediaSubTypes"
                                              v-model="mediaSubType"
                                              @input="setSubTypeTag"
                                              :clearable="false" placeholder="Select Below">

                                    </v-select>
                                    <div v-if="!$v.mediaSubType.required" class="invalid-feedback">Audio Sub Type is required.</div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label font-weight-bold">Subject of Company Audio<span class="text-danger">*</span></label>
                                    <v-select label="name" multiple
                                              :class="{ 'is-invalid': $v.subjectType.$error }"
                                              class="media-subject-list"
                                              :options="subjectTypes"
                                              v-model="subjectType"
                                              ref="subjectType"
                                              :selectable="subjectTypeSelectedHide"
                                              @input="setSubjectTypeTag"
                                              :clearable="false"
                                              placeholder="Select Below">

                                    </v-select>
                                    <div v-if="!$v.subjectType.required" class="invalid-feedback">Subject of Company Audio is required.</div>
                                </div>
                                <template v-if="subTypeTag == 'prodcast'">
                                    <div class="form-group" >
                                        <label class="control-label font-weight-bold">Podcast Guest</label>
                                        <v-select label="name" :options="podcastGuestTypes" v-model="podcastGuest"
                                                  id="podcastGuest"
                                                  ref="podcastGuest"
                                                  :class="{ 'is-invalid': $v.podcastGuest.$error }"
                                                  :clearable="false"
                                                  placeholder="Select Below"></v-select>
                                        <div v-if="!$v.podcastGuest.required" class="invalid-server-feedback">Podcast guest is required.</div>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label font-weight-bold">Podcast Series Name</label>
                                        <input type="text"  v-model="podcastSeriesName" class="form-control" placeholder="(Name of Podcast Series)">
                                    </div>
                                </template>
                                <template v-else></template>


                                <div class="form-group">
                                    <label class="control-label font-weight-bold">Audio Description<span class="text-danger">*</span></label>
                                    <textarea type="text" maxlength="1000" v-model="description" :class="{ 'is-invalid': $v.description.$error }" class="form-control" placeholder="Type in Description—Maximum 1000 characters"></textarea>
                                    <div v-if="!$v.description.required" class="invalid-feedback">Audio description is required.</div>
                                </div>

<!--                                <div class="form-group mb-4">-->
<!--                                    <label class="btn btn-success w-100">-->
<!--                                        <input type="file" name="audioFile" @change="selectedFile" style="display:None;"-->
<!--                                               accept="audio/*"> <span>Upload Audio that Apply to Categorizes Inputted Above</span>-->

<!--                                    </label>-->
<!--                                </div>-->
                                <button @click.prevent="editCancel" class="btn btn-back-next">Cancel</button>
                                <button @click.prevent="saveStep2AudioData()"  :disabled='submitButtonDisabled' class="btn btn-back-next float-right">Save</button>
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
    import Questionnnaire from "../apis/Questionnnaire";
    import loader from '../components/Loader'
    import Datepicker from 'vuejs-datepicker';
    import {required} from 'vuelidate/lib/validators'
    import vSelect from 'vue-select'
    import Common from '../apis/Common'
    export default {
        data() {
            return {
                publicationMaxDate : new Date(),
                isLoading: false,
                submitButtonDisabled : false,

                name: "",
                publicationDate: "",
                publishDay: "",
                publishDays: [],
                recodingDate: "",
                recodingDay: "",
                recodingDays: [],

                mediaPresenter: "",
                otherMediaPresenter: "",
                showOtherMediaPresenterField: false,
                mediaSubType: "",
                subTypeTag: "",
                subjectType: "",
                subjectTypeTag: "",
                podcastGuest: "",
                podcastSeriesName: "",
                description: "",

                mediaSubTypes : [],
                subjectTypes : [],
                subjectTypeIds: [],
                mediaPresenterTypes : [],
                mediaPresenterTypeIds : [],
                podcastGuestTypes : [],
                audioFormData: {
                    name: '',
                    publicationDate: '',
                    publishDay: "",
                    recodingDate: "",
                    recodingDay: "",
                    mediaPresenter: "",
                    otherMediaPresenter: "",
                    mediaSubType: "",
                    subjectType: "",
                    podcastGuest: "",
                    podcastSeriesName: "",
                    description: "",
                    _token: "",
                },

            };
        },
        validations: {
            name: {required},
            publicationDate: {
                required,
                minValue: value => value >= new Date(1970, 0, 1),
                maxValue: value => value <= new Date()
            },
            recodingDate: {
                required,
                minValue: value => value >= new Date(1970, 0, 1),
                maxValue: value => value <= new Date()
            },
            mediaPresenter: {required},
            otherMediaPresenter: {required},
            mediaSubType: {required},
            subjectType: {required},
            podcastGuest: {required},
            description: {required},
        },
        methods: {
            getmediaSubTypes : function(){
                axios.get('/api/get-media-sub-type/1')
                    .then(response => {
                        this.mediaSubTypes = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            getSubjectTypes : function(){
                axios.get('/api/get-subject-type/1')
                    .then(response => {
                        this.subjectTypes = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            getMediaPresenterType : function(){
                axios.get('/api/get-media-presenter-type/1')
                    .then(response => {
                        this.mediaPresenterTypes = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            getPodcastGuestTypes : function(){
                axios.get('/api/get-podcast-guest')
                    .then(response => {
                        this.podcastGuestTypes = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            setSubTypeTag : function(value){
                this.podcastSeriesName =''
                this.podcastGuest =''
                if (null != value) {
                    this.subTypeTag = value.tag
                }
            },
            setSubjectTypeTag : function(value){
                this.subjectTypeIds = Object.keys(value).map((key) => {
                    return value[key].id
                })
                if(value.length > 5) {
                    value.pop()
                }
                this.subjectTypeTag = ''
                // if (e.target.options.selectedIndex > -1) {
                //     const theTarget = e.target.options[e.target.options.selectedIndex].dataset;
                //     this.subjectTypeTag = theTarget.tag
                // }
            },
            setMediaPresenter : function(value){
                this.mediaPresenterTypeIds = Object.keys(value).map((key) => {
                    return value[key].id
                })
                if(value.length > 5) {
                    value.pop()
                }
                if(value.length < 1){
                    this.showOtherMediaPresenterField = false
                }
                this.otherMediaPresenter =''
                if (! this.showOtherMediaPresenterField && value.find((o) => o.name === "Other")) {
                    this.showOtherMediaPresenterField = true
                    this.mediaPresenter = [{name: "Other", "id": 13}];
                    this.mediaPresenterTypeIds = [3]
                } else if (this.showOtherMediaPresenterField && value.find((o) => o.name === "Other")) {
                    this.showOtherMediaPresenterField = false;
                    if(this.mediaPresenterTypeIds.length == 2){
                        this.mediaPresenter = value.slice(1);
                        this.mediaPresenterTypeIds.splice(0, 1);
                    }
                    else {
                        this.mediaPresenter = [{name: "Other", "id": 13}];
                        this.mediaPresenterTypeIds = [`3`]
                    }
                }
                // this.showOtherMediaPresenterField = false
                // this.otherMediaPresenter =''
                // if ('Other' == value.name) {
                //     this.showOtherMediaPresenterField = true
                // }
            },

            getStep2AudioData(){
                Questionnnaire.getStep2AudioData(this.$route.params.id)
                    .then((response) => {
                        // console.log(response.data.data.media_presenter)
                        this.isLoading = false
                        this.name = response.data.data.name
                        this.publicationDate = response.data.data.publication_date ? new Date(Date.parse(response.data.data.publication_date.replace(/[-]/g,'/'))) : "";
                        this.publishDays = Common.populateDayListOfDate(this.publicationDate);
                        this.publishDay = response.data.data.published_day

                        if(!! response.data.data.recording_date){
                            this.recodingDate = response.data.data.recording_date ? new Date(Date.parse(response.data.data.recording_date.replace(/[-]/g,'/'))): "";
                            this.recodingDays = Common.populateDayListOfDate(this.recodingDate);
                        }
                        this.recodingDay = response.data.data.recording_day

                        this.mediaPresenter = response.data.data.media_presenter
                        this.showRelatedField(response.data.data.media_presenter, 'mediaPresenterTypeIds')
                        this.mediaSubType = response.data.data.media_sub_type
                        this.subjectType = response.data.data.subject_type
                        this.showRelatedField(response.data.data.subject_type, 'subjectTypeIds')
                        this.otherMediaPresenter = response.data.data.other_media_presenter
                        if(!! response.data.data.other_media_presenter){
                            this.showOtherMediaPresenterField = true
                        }
                        // console.log(response.data.data.media_sub_type.tag)
                        if(!!response.data.data.media_sub_type && 'prodcast' ==  response.data.data.media_sub_type.tag){
                            this.subTypeTag = 'prodcast';
                            this.podcastGuest =  response.data.data.podcast_guest;
                            this.podcastSeriesName = response.data.data.podcast_series_name;
                        }

                        this.description = response.data.data.description
                    })
                    .catch(error => {
                        this.submitButtonDisabled = false;
                        this.isLoading = false
                        if (error.response.status == 401) {
                            this.$emit('logout')
                        }
                        else{
                            toastr.error(error)
                        }
                    });
            },

            saveStep2AudioData(){
                this.$v.name.$touch();
                this.$v.publicationDate.$touch();
                this.$v.recodingDate.$touch();
                this.$v.description.$touch();
                this.$v.subjectType.$touch();
                this.$v.mediaSubType.$touch();
                this.$v.mediaPresenter.$touch();
                if(this.showOtherMediaPresenterField){
                    this.$v.otherMediaPresenter.$touch();
                }
                if(this.subTypeTag == 'prodcast'){
                    this.$v.podcastGuest.$touch();
                }


                if (this.$v.name.$invalid || this.$v.publicationDate.$invalid || this.$v.recodingDate.$invalid || this.$v.description.$invalid ||
                    this.$v.mediaPresenter.$invalid ||  this.$v.mediaSubType.$invalid || (this.showOtherMediaPresenterField && this.$v.otherMediaPresenter.$invalid) || this.$v.subjectType.$invalid ||
                    (this.subTypeTag == 'prodcast' && this.$v.podcastGuest.$invalid)
                ) {
                    if (this.$v.name.$invalid ) {
                        this.$refs.name.focus();
                    }else if (this.$v.publicationDate.$invalid) {
                        $('#publicationDate').focus()
                    }else if (this.$v.recodingDate.$invalid) {
                        $('#recodingDate').focus()
                    }else if (this.$v.mediaPresenter.$invalid) {
                        this.$refs.mediaPresenter.$el.querySelector('input').focus();
                    }else if (this.showOtherMediaPresenterField && this.$v.otherMediaPresenter.$invalid) {
                        this.$refs.otherMediaPresenter.focus();
                    }else if (this.$v.subjectType.$invalid) {
                        this.$refs.subjectType.$el.querySelector('input').focus();
                    }else if (this.subTypeTag == 'prodcast' && this.$v.podcastGuest.$invalid) {
                        this.$refs.podcastGuest.$el.querySelector('input').focus();
                    }else if (this.$v.description.$invalid) {
                        this.$refs.description.focus();
                    }
                    return false;
                }

                this.audioFormData.name = this.name;
                this.audioFormData.publicationDate = this.dateConvert(this.publicationDate);
                this.audioFormData.publishDay = this.publishDay;

                this.audioFormData.recodingDate = this.dateConvert(this.recodingDate);
                this.audioFormData.recodingDay = this.recodingDay;
                // this.audioFormData.mediaPresenter = this.mediaPresenter.id;
                this.audioFormData.showOtherMediaPresenterField = this.showOtherMediaPresenterField;
                this.audioFormData.otherMediaPresenter = this.otherMediaPresenter;
                this.audioFormData.mediaSubType = this.mediaSubType.id;
                // this.audioFormData.subjectType = (null != this.subjectType) ? this.subjectType.id: null;
                let mediaPresenterOptions = [];
                for (let mp = 0; mp < this.mediaPresenter.length; mp++) {
                    mediaPresenterOptions.push(this.mediaPresenter[mp].id);
                }
                this.audioFormData.mediaPresenter = mediaPresenterOptions.join(',');

                let subjectTypeOptions = [];
                for (let sto = 0; sto < this.subjectType.length; sto++) {
                    subjectTypeOptions.push(this.subjectType[sto].id);
                }
                this.audioFormData.subjectType = subjectTypeOptions.join(',');
                this.audioFormData.subjectTypeTag = this.subjectTypeTag;

                this.audioFormData.podcastGuest = this.podcastGuest.id;
                this.audioFormData.podcastSeriesName = this.podcastSeriesName;
                this.audioFormData.description = this.description;
                this.audioFormData._token =  document.querySelector('meta[name="csrf-token"]').content;
                this.isLoading = true
                Questionnnaire.saveStep2AudioData(this.audioFormData, this.$route.params.id)
                    .then((response) => {
                        this.isLoading = false
                        this.submitButtonDisabled = false
                        toastr.success(response.data.success.message)
                        this.$router.push({ name: "Content", 'hash': '#audio'});
                    })
                    .catch(error => {
                        this.isLoading = false
                        this.submitButtonDisabled = false
                        if (error.response.status === 422) {
                            toastr.error(error.response.data.error.message)
                        }
                        else if (error.response.status == 401) {
                            this.$emit('logout')
                        }
                        else{
                            toastr.error(error)
                        }
                    });
            },
            editCancel() {
                this.$router.push({name: 'Content', 'hash': '#audio'});
            },
            showRelatedField: function (field, list) {
                this[list] = Object.keys(field).map((key) => {
                    return field[key].id
                })
            },
            mediaPresenterTypeSelectedHide: function (option) {
                if(! this.mediaPresenterTypeIds.includes(option.id))
                    return option;
            },
            subjectTypeSelectedHide: function (option) {
                if(! this.subjectTypeIds.includes(option.id))
                    return option;
            },
            goBackToPageTopAndNextFieldToEnter: function () {
                $(document).ready(function () {
                    $('input, select, textarea').on('keydown', function(e) {
                        if (e.keyCode==13) {
                            var focusable = $('input, select, textarea').filter(':visible');
                            focusable.eq(focusable.index(this)+1).focus();
                            return false;
                        }
                    });
                });
            },
            dateSelected: function(){
                this.$nextTick(() => {
                    this.publishDay = ""
                    this.publishDays = Common.populateDayListOfDate(this.publicationDate);
                })
            },
            recodingDateSelected: function(){
                this.$nextTick(() => {
                    this.recodingDay = ""
                    this.recodingDays = Common.populateDayListOfDate(this.recodingDate);
                })
            },
        },
        created: function () {
            this.dateConvert = Common.dateConvert;
            this.isLoading = true
            this.goBackToPageTopAndNextFieldToEnter();
            this.getmediaSubTypes();
            this.getSubjectTypes();
            this.getMediaPresenterType();
            this.getPodcastGuestTypes();
            this.getStep2AudioData();
        },
        components : {
            loader,
            Datepicker,
            vSelect,
        }
    };
</script>
