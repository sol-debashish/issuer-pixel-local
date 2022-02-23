<template>
    <section class="dashboard pt-0 video-meta-section">
        <div class='row'>
            <div class="col-md-12 grid-margin">
                <router-link :to="{name: 'Content', 'hash': '#video'}" class="btn btn-back-next media-details-page-back-btn"><i
                    class="fas fa-chevron-left"></i> Back to Library
                </router-link>
                <h4 class="text-theme-dark-blue mt-2">Details and Activation</h4>
                <div class="d-block mb-2 fs-14 text-theme-dark-blue">
                    A detailed industry classification will allow users to find your company and your content more
                    reliably and accurately in their searches. If you do not see a fitting classification, please
                    consider making a suggestion either through Add Suggestion or by leaving Feedback.
                </div>

                <b-alert
                    :show="dismissCountDown"
                    dismissible
                    :variant="message_body_class"
                    @dismissed="dismissCountDown=0"
                    @dismiss-count-down="countDownChanged"
                >
                    {{classificationMessage}}
                </b-alert>
            </div>
        </div>

        <div class='row'>
            <div class='col-md-12'>
                <div class='row'>
                    <div class='col-md-12 grid-margin'>
                        <div class='card'>
                            <div class='card-body'>
                                <div class="row state-container">
                                    <div class="col-md-4 pb-3">
                                        <fieldset class="mb-5">
                                            <div class="panel-body">
                                                <div class="form-group">
                                                    <label class="control-label font-weight-bold">Video Title<span
                                                        class="text-danger">*</span></label>
                                                    <input type="text" maxlength="500" class="form-control"
                                                           v-model="name"
                                                           ref="name"
                                                           placeholder="Type in Video Title - Maximum 500 characters">
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-7">
                                                        <div class="form-group">
                                                            <label class="control-label font-weight-bold">Date of Video
                                                                Published<span class="text-danger">*</span></label>
                                                            <datepicker input-class="form-control"
                                                                        v-model="publicationDate"
                                                                        name="publicationDate"
                                                                        id="publicationDate"
                                                                        @selected="dateSelected()"
                                                                        v-on:input=$v.publicationDate.$touch()
                                                                        :disabled-dates="{to: new Date(1970, 0, 1), from: new Date()}"
                                                                        :typeable="false"
                                                                        minimum-view="month"
                                                                        format="MM/yyyy" placeholder="MM/YYYY"
                                                                        ></datepicker>
                                                            <div v-if="!$v.publicationDate.minValue"
                                                                 class="invalid-feedback">
                                                                The publication date must be a date after or equal to
                                                                01-01-1970.
                                                            </div>
                                                            <div v-if="!$v.publicationDate.maxValue"
                                                                 class="invalid-feedback">
                                                                The publication date must be a date before or equal to
                                                                {{publicationMaxDate}}.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-5">
                                                        <div class="form-group">
                                                            <label class="control-label font-weight-bold">Day</label>
                                                            <v-select label="name" :options="publishDays"
                                                                      v-model="publishDay"
                                                                      :clearable="false"
                                                                      placeholder="Days (Optional)"></v-select>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-7">
                                                        <div class="form-group">
                                                            <label class="control-label font-weight-bold">Date of Video
                                                                Recording<span class="text-danger">*</span></label>
                                                            <datepicker input-class="form-control"
                                                                        v-model="recodingDate"
                                                                        :typeable="false"
                                                                        name="recodingDate"
                                                                        @selected="recodingDateSelected()"
                                                                        id="recodingDate"
                                                                        minimum-view="month"
                                                                        v-on:input=$v.recodingDate.$touch()
                                                                        :disabled-dates="{to: new Date(1970, 0, 1), from: new Date()}"
                                                                        format="MM/yyyy"
                                                                        placeholder="MM/YYYY"></datepicker>
                                                            <div v-if="!$v.recodingDate.minValue"
                                                                 class="invalid-feedback">Recoding month and year must
                                                                be a date after or equal to 1/1/1970.
                                                            </div>
                                                            <div v-if="!$v.recodingDate.maxValue"
                                                                 class="invalid-feedback">Recoding month and year must
                                                                be a date before or equal to {{publicationMaxDate}}.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-5">
                                                        <div class="form-group">
                                                            <label class="control-label font-weight-bold">Day</label>
                                                            <v-select label="name" :options="recodingDays"
                                                                      v-model="recodingDay"
                                                                      :clearable="false"
                                                                      placeholder="Days (Optional)"></v-select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="control-label font-weight-bold">Video
                                                        Participants<span
                                                            class="text-danger">*</span></label>
                                                    <v-select label="name"
                                                              multiple
                                                              :options="mediaPresenterTypes"
                                                              ref="mediaPresenter"
                                                              id="mediaPresenter"
                                                              :selectable="mediaPresenterTypeSelectedHide"
                                                              v-model="mediaPresenter"
                                                              :clearable="false" placeholder="Select Below"
                                                              @input="setMediaPresenter"></v-select>
                                                </div>
                                                <div class="form-group" v-if="showOtherMediaPresenterField">
                                                    <input type="text" maxlength="500" class="form-control"
                                                           v-model="otherMediaPresenter"
                                                           ref="otherMediaPresenter"
                                                           placeholder="Write Video Participant - Maximum 500 characters">
                                                </div>

                                                <div class="form-group">
                                                    <label class="control-label font-weight-bold">Video Type<span
                                                        class="text-danger">*</span></label>
                                                    <v-select label="name" :options="mediaSubTypes"
                                                              v-model="mediaSubType"
                                                              ref="mediaSubType"
                                                              id="mediaSubType"
                                                              :clearable="false" placeholder="Select Below"></v-select>

                                                </div>
                                                <div class="form-group">
                                                    <label class="control-label font-weight-bold">Subject of Company
                                                        Video<span class="text-danger">*</span></label>
                                                    <v-select label="name" :options="subjectTypes" v-model="subjectType"
                                                              :selectable="subjectTypeSelectedHide"
                                                              class="media-subject-list"
                                                              id="subjectType"
                                                              multiple
                                                              @input="setSubjectTypeTag" :clearable="false"
                                                              placeholder="Select Below"></v-select>
                                                    <div class="mt-1 mb-2 add-multiple"
                                                         v-b-modal.modal-add-subject-suggestion>
                                                        + Add Suggestion
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="control-label font-weight-bold">Video Description<span
                                                        class="text-danger">*</span></label>
                                                    <textarea type="text" maxlength="1000" v-model="description"
                                                              ref="description"
                                                              class="form-control"
                                                              placeholder="Type in Description—Maximum 1000 characters"></textarea>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div class="col-md-8 pb-3">
                                        <AudioVideoHierarchy @nodeData="TaxonomyData"
                                                             :taxonomySavedData='taxonomySavedData'
                                                             :mediaUuid='mediaUuid'
                                                             hierarchyType='Video'
                                                             ref="taxonomyChild"></AudioVideoHierarchy>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--Add video subject suggestion Modal-->
            <b-modal
                id="modal-add-subject-suggestion"
                ref="modal"
                title="Add Subject of Company Video"
                centered
                hide-footer title-class="modal-title-new">
                <b-form-group
                    label-for="name-input"
                    label="Add Suggestion Request Here"
                    class="font-weight-bold">
                    <b-form-input
                        v-model="suggestion_explanation"
                        ref="suggestion_explanation"
                        placeholder="Type Requested Subject of Company Video Here"
                        class="mb-2"
                        maxlength="200"
                        :class="{ 'is-invalid': $v.suggestion_explanation.$error }"
                        required
                    ></b-form-input>
                    <div v-if="!$v.suggestion_explanation.required" class="invalid-feedback">Requested Subject of
                        Company Video is required.
                    </div>
                    <b-form-textarea
                        id="textarea"
                        v-model="suggestion_reason"
                        ref="suggestion_reason"
                        placeholder="Reason..."
                        :class="{ 'is-invalid': $v.suggestion_reason.$error }"
                        maxlength="1000"
                        rows="3"
                        max-rows="6"
                    ></b-form-textarea>
                    <div v-if="!$v.suggestion_reason.required" class="invalid-feedback">Reason is required.</div>
                </b-form-group>
                <b-input-group class="justify-content-center">
                    <b-button class="btn-cancel-submit mr-3 background-darkblue" @click="addSubjectSuggestion()"
                              :disabled='isDisabled'
                              variant="success">Submit
                    </b-button>
                    <b-button class="btn-cancel-submit background-darkblue" @click="cancelSubjectSuggestionModal()"
                              variant="success">Cancel
                    </b-button>
                </b-input-group>
            </b-modal>
        </div>
    </section>
</template>
<script>
    import Questionnnaire from "../apis/Questionnnaire";
    import vSelect from 'vue-select'
    import Datepicker from 'vuejs-datepicker';
    import {required} from 'vuelidate/lib/validators'
    import Common from '../apis/Common'
    import User from "../apis/User";
    import AudioVideoHierarchy from '../components/AudioVideoHierarchy'

    export default {
        data() {
            return {
                videoFormData: {
                    name: '',
                    publicationDate: '',
                    publishDay: "",
                    recodingDate: "",
                    recodingDay: "",
                    mediaPresenter: "",
                    otherMediaPresenter: "",
                    mediaSubType: "",
                    subjectType: [],
                    description: "",
                    investmentBankHosted: "",
                    investmentBankName: "",
                    _token: "",
                },
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
                // videoCoverType: "",
                mediaSubType: "",
                mediaType: "",
                subjectType: [],
                subjectTypeTag: "",
                description: "",
                mediaSubTypes: [],
                subjectTypes: [],
                mediaPresenterTypes: [],
                subjectTypeIds: [],
                mediaPresenterTypeIds: [],
                submitButtonDisabled: false,
                suggestion_explanation: '',
                suggestion_reason: '',
                isDisabled: false,
                taxonomySavedData: "",

                disabledInputs: false,

                node_type: '',
                node_id: '',
                node_description: '',
                mediaUuid: this.$route.params.uuid,
                /*notification related*/
                classificationMessage: "",
                message_body_class: "success",
                dismissSecs: 5,
                dismissCountDown: 0,

                /*hierarchy related*/
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
                    trackingId: null,
                },
            };
        },
        validations: {
            publicationDate: {
                minValue: value => value >= new Date(1970, 0, 1),
                maxValue: value => value <= new Date()
            },
            recodingDate: {
                minValue: value => value >= new Date(1970, 0, 1),
                maxValue: value => value <= new Date()
            },

            suggestion_explanation: {required},
            suggestion_reason: {required},
        },
        methods: {
            subjectTypeSelectedHide: function (option) {
                if (!this.subjectTypeIds.includes(option.id))
                    return option;
            },
            setMediaPresenter: function (value) {
                this.mediaPresenterTypeIds = Object.keys(value).map((key) => {
                    return value[key].id
                })
                if (value.length > 5) {
                    value.pop()
                }
                if (value.length < 1) {
                    this.showOtherMediaPresenterField = false
                }
                this.otherMediaPresenter = ''
                if (!this.showOtherMediaPresenterField && value.find((o) => o.name === "Other")) {
                    this.showOtherMediaPresenterField = true
                    this.mediaPresenter = [{name: "Other", "id": 24}];
                    this.mediaPresenterTypeIds = [24]
                } else if (this.showOtherMediaPresenterField && value.find((o) => o.name === "Other")) {
                    this.showOtherMediaPresenterField = false;
                    if (this.mediaPresenterTypeIds.length == 2) {
                        this.mediaPresenter = value.slice(1);
                        this.mediaPresenterTypeIds.splice(0, 1);
                    } else {
                        this.mediaPresenter = [{name: "Other", "id": 24}];
                        this.mediaPresenterTypeIds = [24]
                    }
                }
                // this.showOtherMediaPresenterField = false
                // this.otherMediaPresenter = ""
                // if ('Other' == value.name) {
                //     this.showOtherMediaPresenterField = true
                // }
            },
            setSubjectTypeTag: function (value) {
                this.subjectTypeIds = Object.keys(value).map((key) => {
                    return value[key].id
                })
                if (value.length > 5) {
                    value.pop()
                }
                this.subjectTypeTag = ''
                if (null != value) {
                    this.subjectTypeTag = value.tag
                }
            },
            mediaPresenterTypeSelectedHide: function (option) {
                if (!this.mediaPresenterTypeIds.includes(option.id))
                    return option;
            },
            dateSelected: function () {
                this.$nextTick(() => {
                    this.publishDay = ""
                    this.publishDays = Common.populateDayListOfDate(this.publicationDate);
                })
            },
            recodingDateSelected: function () {
                this.$nextTick(() => {
                    this.recodingDay = ""
                    this.recodingDays = Common.populateDayListOfDate(this.recodingDate);
                })
            },
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
            setSubjectTypeTag: function (value) {
                this.subjectTypeIds = Object.keys(value).map((key) => {
                    return value[key].id
                })
                if (value.length > 5) {
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
            addSubjectSuggestion: function () {
                this.$v.suggestion_explanation.$touch();
                this.$v.suggestion_reason.$touch();
                if (this.$v.suggestion_explanation.$invalid || this.$v.suggestion_reason.$invalid) {
                    if (this.$v.suggestion_explanation.$invalid) {
                        this.$refs.suggestion_explanation.focus();
                    } else if (this.$v.suggestion_reason.$invalid) {
                        this.$refs.suggestion_reason.focus();
                    }
                    return false;
                }
                this.isDisabled = true
                User.mediaSubjectSuggestion({
                    media_type: 2,
                    explanation: this.suggestion_explanation,
                    reason: this.suggestion_reason
                })
                    .then((response) => {
                        if (response.data.success) {
                            this.$bvModal.hide('modal-add-subject-suggestion');
                            this.isDisabled = false
                            $.confirm({
                                title: '',
                                content: "Thank you for your suggestion. We will review your submission and follow up with you within the next few business days.",
                                columnClass: 'medium',
                                type: 'blue',
                                typeAnimated: true,
                                buttons: {
                                    Ok: function () {
                                    },
                                }
                            });
                            this.suggestion_explanation = ''
                            this.suggestion_reason = ''
                            this.$v.$reset();
                        }
                    })
                    .catch(error => {
                        if (error.response.status === 422) {
                            toastr.error(error.response.data.error.message)
                        } else if (error.response.status == 401) {
                            localStorage.clear();
                            this.$router.push({name: "Login"});
                        } else {
                            console.log(error)
                        }
                        this.isDisabled = false;
                    });
            },
            cancelSubjectSuggestionModal: function () {
                this.$bvModal.hide('modal-add-subject-suggestion');
                this.suggestion_explanation = "";
                this.suggestion_reason = "";
                this.$v.$reset();
            },
            showRelatedField: function (field, list) {
                this[list] = Object.keys(field).map((key) => {
                    return field[key].id
                })
            },
            getVideoMetaData(){
                Questionnnaire.getStep2VideoData(this.$route.params.uuid)
                    .then((response) => {
                        this.isLoading = false
                        this.name = response.data.data.name
                        if (!!response.data.data.publication_date) {
                            this.publicationDate = new Date(Date.parse(response.data.data.publication_date.replace(/[-]/g,'/')));
                            this.publishDays = Common.populateDayListOfDate(this.publicationDate);
                        }
                        this.publishDay = response.data.data.published_day

                        if(!! response.data.data.recording_date){
                            this.recodingDate = new Date(Date.parse(response.data.data.recording_date.replace(/[-]/g,'/')));
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
                        if(!!response.data.data.other_media_presenter){
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
                            console.log(error)
                        }
                    });
            },

            saveMediaInfo() {
                this.submitButtonDisabled = true;
                this.videoFormData.name = this.name;

                this.videoFormData.publicationDate = this.publicationDate ? this.dateConvert(this.publicationDate) : "";
                this.videoFormData.publishDay = this.publishDay;
                this.videoFormData.recodingDate = this.recodingDate ? this.dateConvert(this.recodingDate) : "";
                this.videoFormData.recodingDay = this.recodingDay;
                this.videoFormData.otherMediaPresenter = this.otherMediaPresenter;
                this.videoFormData.mediaSubType = this.mediaSubType ? this.mediaSubType.id : "";

                // this.videoFormData.subjectType = this.subjectType.id;
                this.videoFormData.subjectTypeTag = this.subjectTypeTag;
                this.videoFormData.description = this.description;

                this.videoFormData._token = document.querySelector('meta[name="csrf-token"]').content
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

                Questionnnaire.updateVideoInfoData(this.videoFormData, this.$route.params.uuid)
                    .then((response) => {
                        this.isLoading = false
                        this.submitButtonDisabled = false;
                        toastr.success(response.data.data.msg)
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
                            console.log(error)
                        }
                    });
            },
            /*node related function*/

            /*end node related function*/
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
                }
            },
            saveAndClose() {
                if ("" == this.form.industry) {
                    if(! this.name ||
                        ! this.publicationDate ||
                        ! this.recodingDate ||
                        ! this.mediaSubType ||
                        ! this.mediaPresenter ||
                        ! this.subjectType ||
                        ! this.description ||
                        (this.$refs.taxonomyChild.savedCategories.length < 1)
                    ){
                        var vm = this;
                        $.confirm({
                            title: '',
                            content: "Warning - Video and Audio content can not be published without filling in all content " +
                                "metadata fields. You may save and return to this form at any time.",
                            columnClass: 'medium',
                            type: 'purple',
                            typeAnimated: true,
                            buttons: {
                                CANCEL: {
                                    btnClass: 'btn-default rounded-pill',
                                    action: function(){
                                    }
                                },
                                SAVE: {
                                    btnClass: 'btn-success rounded-pill', // class for the button
                                    action: function(){
                                        vm.saveMediaInfo()
                                    }
                                },
                            }
                        });
                    }
                    else{
                        this.saveMediaInfo()
                    }
                } else {
                    if(! this.name ||
                        ! this.publicationDate ||
                        ! this.recodingDate ||
                        ! this.mediaSubType ||
                        ! this.mediaPresenter ||
                        ! this.subjectType ||
                        ! this.description
                    ){
                        var vm = this;
                        $.confirm({
                            title: '',
                            content: "Warning - Video and Audio content can not be published without filling in all content " +
                                "metadata fields. You may save and return to this form at any time.",
                            columnClass: 'medium',
                            type: 'purple',
                            typeAnimated: true,
                            buttons: {
                                CANCEL: {
                                    btnClass: 'btn-default rounded-pill',
                                    action: function(){
                                    }
                                },
                                SAVE: {
                                        btnClass: 'btn-success rounded-pill', // class for the button
                                        action: function(){
                                        vm.$refs.taxonomyChild.saveHierarchyInfo('finish')
                                    }

                                },
                            }
                        });
                    }
                    else{
                        this.$refs.taxonomyChild.saveHierarchyInfo('finish')
                    }
                }
            },
            /* notificaiton related function*/
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },

            showAddAnotherClassificationMessage(response_message, is_alert_show, msg_class_name) {
                if (is_alert_show) {
                    //this.showDismissibleAlert = true;
                    this.dismissCountDown = this.dismissSecs
                    this.message_body_class = msg_class_name;
                    this.classificationMessage = response_message;
                }
            },
        },
        created: function () {
            this.dateConvert = Common.dateConvert;
            this.getMediaTypes();
            this.getSubjectTypes();
            this.getMediaPresenterType();
            this.getVideoMetaData();
        },
        mounted: function () {
        },
        components: {
            vSelect,
            Datepicker,
            AudioVideoHierarchy,
        },
    }
</script>
