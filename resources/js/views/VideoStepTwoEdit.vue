<template>
    <section class="dashboard pt-0">
        <div class='row'>
            <div class='col-md-10 offset-md-1 grid-margin'>
                <h4 class="pb-2 text-theme-dark-blue">Video Details</h4>
                <div class='card'>
                    <div class='card-body'>
                    <div class="row register-container">
                        <div class="col-md-8 mx-auto mb-5">
                            <div class="panel-body">
                                <div class="form-group">
                                    <label class="control-label font-weight-bold">Video Title<span class="text-danger">*</span></label>
                                    <input type="text" maxlength="500"
                                           ref="name"
                                           class="form-control"
                                           v-model="name"
                                           :class="{ 'is-invalid': $v.name.$error }"
                                           placeholder="Type in Video Title - Maximum 500 characters">
                                    <div v-if="!$v.name.required" class="invalid-feedback">Video title is required.</div>
                                </div>

                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="form-group">
                                            <label class="control-label font-weight-bold">Date of video Published<span class="text-danger">*</span></label>
                                            <datepicker input-class="form-control" v-model="publicationDate" :class="{ 'is-invalid': $v.publicationDate.$error }"
                                                        :typeable="false"
                                                        name="publicationDate"
                                                        @selected="dateSelected()"
                                                        id="publicationDate"
                                                        minimum-view="month"
                                                        v-on:input=$v.publicationDate.$touch()
                                                        :disabled-dates="{to: new Date(1970, 0, 1), from: new Date()}"
                                                        format="MM/yyyy" placeholder="MM/YYYY"></datepicker>
                                            <div v-if="!$v.publicationDate.required" class="invalid-feedback">Publication month and year is required.</div>
                                            <div v-if="!$v.publicationDate.minValue" class="invalid-feedback">The publication month and year must be a date after or equal to 1/1/1970.</div>
                                            <div v-if="!$v.publicationDate.maxValue" class="invalid-feedback">The publication month and year must be a date before or equal to {{publicationMaxDate}}.</div>
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
                                            <label class="control-label font-weight-bold">Date of Video Recording<span class="text-danger">*</span></label>
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
                                    <label class="control-label font-weight-bold">Video Participants<span class="text-danger">*</span></label>
                                    <v-select label="name"
                                              multiple
                                              :class="{ 'is-invalid': $v.mediaPresenter.$error }"
                                              :options="mediaPresenterTypes"
                                              v-model="mediaPresenter"
                                              :clearable="false"
                                              ref="mediaPresenter"
                                              :selectable="mediaPresenterTypeSelectedHide"
                                              placeholder="Select Below"
                                              @input="setMediaPresenter">
                                    </v-select>
                                    <div v-if="!$v.mediaPresenter.required" class="invalid-feedback">Media presenter is required.</div>
                                </div>

                                <div class="form-group" v-if="showOtherMediaPresenterField">
                                    <input type="text"  maxlength="500"
                                           class="form-control"
                                           v-model="otherMediaPresenter"
                                           ref="otherMediaPresenter"
                                           :class="{ 'is-invalid': $v.otherMediaPresenter.$error }"
                                           placeholder="Write Video Participant - Maximum 500 characters">
                                    <div v-if="!$v.otherMediaPresenter.required" class="invalid-feedback">Please Write video Participant</div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label font-weight-bold">Video Type<span class="text-danger">*</span></label>
                                    <v-select label="name"
                                              :class="{ 'is-invalid': $v.mediaSubType.$error }"
                                              :options="mediaSubTypes"
                                              ref="mediaSubType"
                                              v-model="mediaSubType"
                                              :clearable="false" placeholder="Select Below">

                                    </v-select>
                                    <div v-if="!$v.mediaSubType.required" class="invalid-feedback">Audio Sub Type is required.</div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label font-weight-bold">Subject of Company Video<span class="text-danger">*</span></label>
                                    <v-select label="name"
                                              multiple
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
                                    <div v-if="!$v.subjectType.required" class="invalid-feedback">Subject of Company Video is required.</div>
                                </div>

                                <div class="form-group">
                                    <label class="control-label font-weight-bold">Video Description<span class="text-danger">*</span></label>
                                    <textarea type="text" maxlength="1000"
                                           ref="description"
                                           v-model="description" :class="{ 'is-invalid': $v.description.$error }"
                                              class="form-control" placeholder="Type in Description—Maximum 1000 characters"></textarea>
                                    <div v-if="!$v.description.required" class="invalid-feedback">Video description is required.</div>
                                </div>
                                <button @click="editCancel" class="btn btn-back-next">Cancel</button>
                                <button @click.prevent="saveStep2VideoData()"  :disabled='submitButtonDisabled' class="btn btn-back-next float-right">Save</button>
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
    import Navigation from "../components/Navigation.vue";
    import loader from '../components/Loader'
    import sidebar from '../components/Sidebar'
    import Datepicker from 'vuejs-datepicker';
    import {required} from 'vuelidate/lib/validators'
    import vSelect from 'vue-select'
    import Common from '../apis/Common'
    export default {
        data() {
            return {
                publicationMaxDate : new Date(),
                isLoading: false,
                name: "",
                publicationDate: "",
                publishDay: "",
                publishDays: [],

                recodingDate: "",
                recodingDay: "",
                recodingDays: [],

                mediaPresenter: [],
                otherMediaPresenter: "",
                showOtherMediaPresenterField: false,
                // videoCoverType: "",
                mediaSubType: "",
                mediaType: "",
                subjectType: [],
                subjectTypeTag: "",
                description: "",
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
                subjectTypeIds: [],
                mediaPresenterTypeIds: [],
                submitButtonDisabled : false,
                videoFormData: {
                    name: '',
                    publicationDate: '',
                    publishDay: '',
                    recodingDate: "",
                    recodingDay: "",
                    mediaPresenter: [],
                    otherMediaPresenter: "",
                    mediaSubType: "",
                    subjectType: [],
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
            mediaSubType: {required},
            otherMediaPresenter: {required},
            subjectType: {required},
            description: {required},

        },
        methods: {
            getMediaTypes: function () {
                axios.get('/api/get-media-sub-type/2')
                    .then(response => {
                        this.mediaSubTypes = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            getSubjectTypes: function () {
                axios.get('/api/get-subject-type/2')
                    .then(response => {
                        this.subjectTypes = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            setSubjectTypeTag : function(value){
                this.subjectTypeIds = Object.keys(value).map((key) => {
                    return value[key].id
                })
                if(value.length > 5) {
                    value.pop()
                }
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
                    this.mediaPresenter = [{name: "Other", "id": 24}];
                    this.mediaPresenterTypeIds = [24]
                } else if (this.showOtherMediaPresenterField && value.find((o) => o.name === "Other")) {
                    this.showOtherMediaPresenterField = false;
                    if(this.mediaPresenterTypeIds.length == 2){
                        this.mediaPresenter = value.slice(1);
                        this.mediaPresenterTypeIds.splice(0, 1);
                    }
                    else {
                        this.mediaPresenter = [{name: "Other", "id": 24}];
                        this.mediaPresenterTypeIds = [24]
                    }
                }
                // this.showOtherMediaPresenterField = false
                // this.otherMediaPresenter =''
                // if ('Other' == value.name) {
                //     this.showOtherMediaPresenterField = true
                // }
            },

            getStep2VideoData(){
                Questionnnaire.getStep2VideoData(this.$route.params.id)
                    .then((response) => {
                        this.isLoading = false
                        this.name = response.data.data.name
                        this.publicationDate = response.data.data.publication_date ? new Date(Date.parse(response.data.data.publication_date.replace(/[-]/g,'/'))) : "";
                        this.publishDays = Common.populateDayListOfDate(this.publicationDate);
                        this.publishDay = response.data.data.published_day

                        if(!! response.data.data.recording_date){
                            this.recodingDate = response.data.data.recording_date ? new Date(Date.parse(response.data.data.recording_date.replace(/[-]/g,'/'))) : "";
                            this.recodingDays = Common.populateDayListOfDate(this.recodingDate);
                        }
                        this.recodingDay = response.data.data.recording_day

                        this.description = response.data.data.description
                        this.mediaPresenter = response.data.data.media_presenter
                        this.showRelatedField(response.data.data.media_presenter, 'mediaPresenterTypeIds')
                        this.mediaSubType = response.data.data.media_sub_type
                        this.subjectType = response.data.data.subject_type
                        this.showRelatedField(response.data.data.subject_type, 'subjectTypeIds')
                        this.otherMediaPresenter = response.data.data.other_media_presenter
                        if(!!  response.data.data.other_media_presenter){
                            this.showOtherMediaPresenterField = true
                        }
                        // console.log(response.data.name)
                    })
                    .catch(error => {
                        this.submitButtonDisabled = false;
                        this.isLoading = false
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

            saveStep2VideoData(){
                this.$v.name.$touch();
                this.$v.publicationDate.$touch();
                this.$v.recodingDate.$touch();
                this.$v.subjectType.$touch();
                this.$v.mediaSubType.$touch();
                this.$v.mediaPresenter.$touch();
                this.$v.description.$touch();
                if(this.showOtherMediaPresenterField){
                    this.$v.otherMediaPresenter.$touch();
                }
                if (this.$v.name.$invalid || this.$v.publicationDate.$invalid || this.$v.recodingDate.$invalid ||
                    this.$v.mediaPresenter.$invalid || (this.showOtherMediaPresenterField && this.$v.otherMediaPresenter.$invalid) ||
                    this.$v.subjectType.$invalid || this.$v.mediaSubType.$invalid || this.$v.description.$invalid
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
                    }else if (this.$v.mediaSubType.$invalid) {
                        this.$refs.mediaSubType.$el.querySelector('input').focus();
                    }else if (this.$v.description.$invalid) {
                        this.$refs.description.focus();
                    }
                    return false;
                }

            this.videoFormData.name = this.name;
            this.videoFormData.publicationDate = this.dateConvert(this.publicationDate);
            this.videoFormData.publishDay = this.publishDay;

            this.videoFormData.recodingDate = this.dateConvert(this.recodingDate);
            this.videoFormData.recodingDay = this.recodingDay;
            // this.videoFormData.mediaPresenter = this.mediaPresenter.id;
            this.videoFormData.showOtherMediaPresenterField = this.showOtherMediaPresenterField;
            this.videoFormData.otherMediaPresenter = this.otherMediaPresenter;
            this.videoFormData.mediaSubType = this.mediaSubType.id;
            // this.videoFormData.subjectType = (null != this.subjectType) ? this.subjectType.id: null;
            this.videoFormData.subjectTypeTag = this.subjectTypeTag;
            this.videoFormData.description = this.description;
            let mediaPresenterOptions = [];
            for (let mp = 0; mp < this.mediaPresenter.length; mp++) {
                mediaPresenterOptions.push(this.mediaPresenter[mp].id);
            }
            this.videoFormData.mediaPresenter = mediaPresenterOptions.join(',');

            let subjectTypeOptions = [];
            for (let sto = 0; sto < this.subjectType.length; sto++) {
                subjectTypeOptions.push(this.subjectType[sto].id);
            }
            this.videoFormData.subjectType = subjectTypeOptions.join(',');
            this.videoFormData._token =  document.querySelector('meta[name="csrf-token"]').content;
            this.isLoading = true
            Questionnnaire.saveStep2VideoData(this.videoFormData, this.$route.params.id)
                .then((response) => {
                    this.isLoading = false
                    this.submitButtonDisabled = false;
                    toastr.success(response.data.success.message)
                    this.$router.push({ name: "Content" });
                })
                .catch(error => {
                    this.isLoading = false
                    this.submitButtonDisabled = false;
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
                this.$router.push({name: 'Content', 'hash': '#video'});
            },
            showRelatedField: function (field, list) {
                this[list] = Object.keys(field).map((key) => {
                    return field[key].id
                })
            },
            subjectTypeSelectedHide: function (option) {
                if(! this.subjectTypeIds.includes(option.id))
                    return option;
            },
            mediaPresenterTypeSelectedHide: function (option) {
                if(! this.mediaPresenterTypeIds.includes(option.id))
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
            this.isLoading = true
            this.dateConvert = Common.dateConvert;
            this.goBackToPageTopAndNextFieldToEnter();
            this.getMediaTypes();
            this.getSubjectTypes();
            this.getMediaPresenterType();
            this.getStep2VideoData();
        },
        mounted:function(){
        },
        components : {
            loader,
            sidebar,
            Navigation,
            Datepicker,
            vSelect,
        }
    };
</script>
