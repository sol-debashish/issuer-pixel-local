<template>
    <section class="dashboard pt-0">
        <div class='row'>
            <div class='col-md-12 grid-margin'>
                <h4 class="text-theme-dark-blue" v-if="step == 2">Video details</h4>
                <h4 class="text-theme-dark-blue" v-else>Video Upload</h4>
                <div class="media-upload-suggestion-text d-block mb-2 fs-14 text-theme-dark-blue" v-if="step == 1">
                    A more detailed industry classification will allow users to find your company and
                    your
                    content more reliably and accurately in their searches. If you do not see a fitting
                    classification, please consider making a suggestion either through <b>Add Suggestion or
                    by leaving Feedback</b>.
                </div>
                <div class="mx-auto col-md-6">
                    <div class="text-center progress-steps">Step {{step}} of 3</div>
                    <!-- progressbar -->
                    <ul id="progressbar" class="media-upload-progressbar mb-4">
                        <li class="active" id="progressStep1"><strong>Classifications</strong></li>
                        <li id="progressStep2"><strong>Video Details</strong></li>
                        <li id="progressStep3"><strong>Video Upload</strong></li>
                    </ul>

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

                <div class='card'>
                    <div class='card-body'>
<!--                <sidebar :videoStep="step" :videoProgressStep="progressStep"></sidebar>-->
                <div class="col">
                    <div class="row">
                        <div v-bind:class="(step == 1)?'col-md-12':'col-md-6 mx-auto'">
                            <form class="form-horizontal" v-on:submit.prevent="addVideoQuestionnaire">
                                <!--Step-1 Start-->
                                <fieldset class="mb-5" v-if="step == 1">

                                    <AudioVideoHierarchy @nodeData="TaxonomyData"
                                                         v-bind:savedCategories="savedCategories"
                                                         :taxonomySavedData='taxonomySavedData'
                                                         :trackingId="trackingId"
                                                         hierarchyType='Video'
                                                         ref="taxonomyChild"></AudioVideoHierarchy>

                                </fieldset>
                                <!--Step-2 Start-->
                                <fieldset class="mb-5" v-if="step == 2">
                                    <div class="panel-body">
                                        <div class="form-group">
                                            <label class="control-label font-weight-bold">Video Title<span
                                                class="text-danger">*</span></label>
                                            <input type="text" maxlength="500" class="form-control" v-model="name"
                                                   ref="name"
                                                   :class="{ 'is-invalid': $v.name.$error }"
                                                   placeholder="Type in Video Title - Maximum 500 characters">
                                            <div v-if="!$v.name.required" class="invalid-feedback">Video title is
                                                required.
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-7">
                                                <div class="form-group">
                                                    <label class="control-label font-weight-bold">Date of Video
                                                        Published<span class="text-danger">*</span></label>
                                                    <datepicker input-class="form-control" v-model="publicationDate"
                                                                name="publicationDate"
                                                                id="publicationDate"
                                                                @selected="dateSelected()"
                                                                v-on:input=$v.publicationDate.$touch()
                                                                :disabled-dates="{to: new Date(1970, 0, 1), from: new Date()}"
                                                                :typeable="false"
                                                                minimum-view="month"
                                                                format="MM/yyyy" placeholder="MM/YYYY"
                                                                :class="{ 'is-invalid': $v.publicationDate.$error }"></datepicker>

                                                    <div v-if="!$v.publicationDate.required" class="invalid-feedback">
                                                        Publication date is required.
                                                    </div>
                                                    <div v-if="!$v.publicationDate.minValue" class="invalid-feedback">
                                                        The publication date must be a date after or equal to
                                                        01-01-1970.
                                                    </div>
                                                    <div v-if="!$v.publicationDate.maxValue" class="invalid-feedback">
                                                        The publication date must be a date before or equal to
                                                        {{publicationMaxDate}}.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-5">
                                                <div class="form-group">
                                                    <label class="control-label font-weight-bold">Day</label>
                                                    <v-select label="name" :options="publishDays" v-model="publishDay"
                                                              :clearable="false"
                                                              placeholder="Days (Optional)"></v-select>
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
                                                    <div v-if="!$v.recodingDate.required" class="invalid-feedback">Recoding month and year is required.</div>
                                                    <div v-if="!$v.recodingDate.minValue" class="invalid-feedback">Recoding month and year must be a date after or equal to 1/1/1970.</div>
                                                    <div v-if="!$v.recodingDate.maxValue" class="invalid-feedback">Recoding month and year must be a date before or equal to {{publicationMaxDate}}.</div>
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
                                            <label class="control-label font-weight-bold">Video Participants<span
                                                class="text-danger">*</span></label>
                                            <v-select label="name"
                                                      multiple
                                                      :options="mediaPresenterTypes"
                                                      :class="{ 'is-invalid': $v.mediaPresenter.$error }"
                                                      ref="mediaPresenter"
                                                      id="mediaPresenter"
                                                      :selectable="mediaPresenterTypeSelectedHide"
                                                      v-model="mediaPresenter"
                                                      :clearable="false" placeholder="Select Below"
                                                      @input="setMediaPresenter"></v-select>
                                            <div v-if="!$v.mediaPresenter.required" class="invalid-feedback">Video
                                                Participant
                                                is
                                                required.
                                            </div>
                                        </div>

                                        <div class="form-group" v-if="showOtherMediaPresenterField">
                                            <input type="text" maxlength="500" class="form-control"
                                                   v-model="otherMediaPresenter"
                                                   ref="otherMediaPresenter"
                                                   :class="{ 'is-invalid': $v.otherMediaPresenter.$error }"
                                                   placeholder="Write video Participant - Maximum 500 characters">
                                                <div v-if="!$v.otherMediaPresenter.required" class="invalid-feedback">Please Write video Participant</div>
                                        </div>
                                        <!--                                        <div v-if="!$v.otherMediaPresenter.required" class="invalid-server-feedback">Please Write video Presenter</div>-->

                                        <!--                                        <div class="form-group">-->
                                        <!--                                            <label class="control-label font-weight-bold">Is Video for Product or Service?</label>-->
                                        <!--                                            <v-select label="name" :options="mediaCoverTypes" v-model="videoCoverType" :clearable="false"  placeholder="Select the Options that Apply"></v-select>-->
                                        <!--                                        </div>-->
                                        <div class="form-group">
                                            <label class="control-label font-weight-bold">Video Type<span
                                                class="text-danger">*</span></label>
                                            <v-select label="name" :options="mediaSubTypes" v-model="mediaSubType"
                                                      ref="mediaSubType"
                                                      id="mediaSubType"
                                                      :class="{ 'is-invalid': $v.mediaSubType.$error }"
                                                      :clearable="false" placeholder="Select Below"></v-select>
                                            <div v-if="!$v.mediaSubType.required" class="invalid-feedback">Media sub
                                                type is
                                                required.
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label font-weight-bold">Subject of Company
                                                Video<span class="text-danger">*</span></label>
                                            <v-select label="name" :options="subjectTypes" v-model="subjectType"
                                                      :selectable="subjectTypeSelectedHide"
                                                      class="media-subject-list"
                                                      id="subjectType"
                                                      multiple
                                                      :class="{ 'is-invalid': $v.subjectType.$error }"
                                                      @input="setSubjectTypeTag" :clearable="false"
                                                      placeholder="Select Below"></v-select>

                                            <!--                                            :create-option="option => ({name: option.toLowerCase(), id: option.toLowerCase()+'_suggested'})"-->
                                            <!--                                            taggable push-tags-->
                                            <div v-if="!$v.subjectType.required" class="invalid-feedback">Subject of
                                                Company
                                                video required.
                                            </div>
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
                                                   :class="{ 'is-invalid': $v.description.$error }"
                                                   class="form-control"
                                                      placeholder="Type in Description—Maximum 1000 characters"></textarea>
                                            <div v-if="!$v.description.required" class="invalid-feedback">Video
                                                description is required.
                                            </div>
                                        </div>

                                        <div class="form-group" v-if="subjectTypeTag == 'roadshow'">
                                            <label class="control-label font-weight-bold">Road Show
                                                Geography</label>
                                            <v-select label="name" :options="countries" v-model="country"
                                                      :clearable="false" @input="getState"
                                                      placeholder="Select Country"></v-select>
                                            <div v-if="!$v.country.required" class="invalid-server-feedback">Country
                                                is
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
                                            <v-select label="name" :options="cityList" v-model="city"
                                                      :clearable="false"
                                                      placeholder="Select City"></v-select>
                                            <div v-if="!$v.city.required" class="invalid-server-feedback">City is
                                                required.
                                            </div>

                                            <!--                                    <v-select label="name" :options="countries"  :clearable="false"  placeholder="Select Country"></v-select>-->
                                        </div>
                                        <div class="form-group" v-if="subjectTypeTag == 'roadshow'">
                                            <label class="control-label font-weight-bold">Investment Bank Hosted
                                                Road
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
                                            <div v-if="!$v.investmentBankName.required" class="invalid-feedback">
                                                Bank
                                                name is required.
                                            </div>
                                        </div>

                                        <button @click.prevent="prev()" class="btn btn-back-next"><i class="fas fa-chevron-left"></i>  Back</button>
                                        <button @click.prevent="step3()" class="btn btn-back-next float-right">
                                            Save & Continue  <i class="fas fa-chevron-right"></i>
                                        </button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>


                    </div>
                    <!--Step-3 Start-->
                    <div class="col p-3" v-show="step == 3">
                        <div v-if="uploadButtonSeen" class="large-12 columns mx-auto">

                            <div id="drag-area" class="panel drop-zone drag-area">
                                <!--                                            <div class="icon"><i class="fas fa-cloud-upload-alt"></i></div>-->
                                <header class="text-theme-dark-blue">Drag and drop video to upload</header>
                                <button class="btn btn-info px-5" id="browseButton"><i class="fas fa-cloud-upload-alt"></i>  Choose files to Upload</button>
                                <div class="mt-2 mb-2">Issuer Pixel supports video files of type webm, mkv, flv, vob, avi, mov, wmv, mp4, m4p, mpg, and mpeg</div>
                                <div id="results" class="panel"></div>
                            </div>
                            <div class="my-4 col-lg-6 mx-auto">
                                <div class="progress d-none" id="upload-progress">
                                    <div class="progress-bar bg-success text-center"
                                         role="progressbar" style="width: 0%">
                                        <span class="sr-only"></span>
                                    </div>
                                </div>
                            </div>
                            <p v-if="uploadButtonStatus" class="text-center mt-1 font-italic">After selecting your
                                video file press "Upload" to upload the file</p>
                            <div class="text-center">
                                <button @click.prevent="prev()" class="btn btn-back-next"><i class="fas fa-chevron-left"></i>  Back</button>
                                <button v-if="uploadButtonStatus" type="button" :disabled='videoUploadIsDisabled'
                                        class="btn btn-secondary px-5 video-upload-button"
                                        :class="{'btn-success':!videoUploadIsDisabled}" @click="startUpload">
                                    <i class="fas fa-cloud-upload-alt"></i>  Upload Video
                                </button>
                                <div class="alert-box alert" data-nothingToUpload>Error Nothing To Upload, Please
                                    Add File
                                </div>
                            </div>
                        </div>

                        <!--<div class="align-self-center mx-auto">
                            <button type="button" class="btn btn-success px-5" aria-label="Add file"
                                v-if="uploadButtonSeen"  id="add-file-btn">
                                Upload Video
                            </button>
                        </div>-->

                        <!--                                    <div class="align-self-center mx-auto">-->
                        <!--                                        <button type="button" class="btn btn-dark" aria-label="Start upload"-->
                        <!--                                                id="start-upload-btn" @click="startUpload">-->
                        <!--                                            <i class="fas fa-cloud-upload-alt"></i> Start upload-->
                        <!--                                        </button>-->
                        <!--                                    </div>-->
                        <!--                                    <div class="align-self-end ml-auto">-->
                        <!--                                        <button type="button" class="btn btn-dark" aria-label="Pause upload"-->
                        <!--                                                id="pause-upload-btn" @click="pauseUpload">-->
                        <!--                                            <i class="fas fa-pause"></i> Pause upload-->
                        <!--                                        </button>-->
                        <!--                                    </div>-->
                        <div class="alert text-center alert-box"></div>
                        <div class="d-flex">
                            <router-link v-if="uploadSuccess" class="btn btn-back-next align-self-center mx-auto"
                                         :to="{name: 'Dashboard' }">Back to Dashboard
                            </router-link>
                        </div>
                    </div>
                </div>
                <!--Add suggestion Modal-->
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
                        <div v-if="!$v.suggestion_explanation.required" class="invalid-feedback">Requested Subject of Company Video is required.
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
                        <b-button class="btn-cancel-submit mr-3 background-darkblue" @click="addSuggestion()" :disabled='isDisabled'
                                  variant="success">Submit
                        </b-button>
                        <b-button class="btn-cancel-submit background-darkblue" @click="cancelSuggestionModal()"
                                  variant="success">Cancel
                        </b-button>
                    </b-input-group>
                </b-modal>
        <loader :is-visible="isLoading"></loader>
    </div>
    </div>
    </div>
    </div>
    </section>
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
                savedCategories: "",
                trackingId: "",
                r: null,
                progressBar: null,
                uploadSuccess: false,

                uploadButtonSeen: true,
                uploadButtonStatus: true,
                isLoading: false,
                uploaderAssign: false,

                //showDismissibleAlert: false,
                classificationMessage: "",
                message_body_class: "success",
                dismissSecs: 5,
                dismissCountDown: 0,

                videoUploadIsDisabled: true,
                errors: [],
                step: 1,
                progressStep: 1,
                publicationMaxDate: new Date(),
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
                taxonomySavedData: "",

                videoFormData: {
                    categorizationLevel: "",
                    categorizationNodeId: "",
                    name: '',
                    publicationDate: '',
                    publishDay: "",
                    recodingDate: "",
                    recodingDay: "",
                    mediaPresenter: "",
                    otherMediaPresenter: "",
                    // videoCoverType: "",
                    mediaSubType: "",
                    subjectType: [],
                    description: "",
                    // topCompetitors: "",
                    investmentBankHosted: "",
                    investmentBankName: "",
                    country: "",
                    state: "",
                    city: "",
                    _token: "",
                },
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
                subjectTypeIds: [],
                mediaPresenterTypeIds: [],
                submitButtonDisabled: false,
                suggestion_explanation: '',
                suggestion_reason: '',
                isDisabled: false,
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
            subjectType: {required},
            otherMediaPresenter: {required},
            investmentBankName: {required},
            // topCompetitors: {required},
            description: {required},

            country: {required},
            state: {required},
            city: {required},
            suggestion_explanation: {required},
            suggestion_reason: {required}
        },
        methods: {
            prev() {
                this.step--;
                this.goBackToPageTopAndNextFieldToEnter();
                this.progressBarActiveInactive(this.step);
                if (this.step == 1) {
                    this.savedCategories = this.form.lookupId;
                    this.trackingId = this.form.trackingId;
                }
                this.$emit('updateVideoUploadStep',this.step);
                this.$emit('updateVideoUploadProgressStep',this.progressStep);
            },
            setPreviousStepDataFromSidebarStep1() {
                this.savedCategories = this.form.lookupId;
                this.trackingId = this.form.trackingId;
                this.$emit('updateVideoUploadStep',this.step);
                this.$emit('updateVideoUploadProgressStep',this.progressStep);
            },
            setPreviousStepDataFromSidebarStep2() {
                if (this.savedCategories != "" && this.form.lookupId == undefined) {
                    this.form.lookupId = this.savedCategories;
                }
                this.clearHierarchyFormData()
                this.uploaderAssignToBrowser();
                this.updateFormData();
                this.$emit('updateVideoUploadStep',this.step);
                this.$emit('updateVideoUploadProgressStep',this.progressStep);
            },
            addNode() {
                this.$refs.taxonomyChild.saveHierarchyInfo('next')
            },

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

            step2() {
                if (this.savedCategories != "" && this.form.lookupId == undefined) {
                    this.form.lookupId = this.savedCategories;
                }
                if (null == this.form.lookupId) {
                    if ("" == this.form.industry) {
                        this.$refs.taxonomyChild.$v.form.industry.$touch();
                        $('#audioVideoIndustry .vs__search').focus()
                        return false
                    } else {
                        this.$refs.taxonomyChild.saveHierarchyInfo('finish')
                    }
                } else if (null != this.form.lookupId) {
                    if ("" == this.form.industry) {
                        this.completeStep2Process(this.form.lookupId)
                    } else {
                        this.$refs.taxonomyChild.saveHierarchyInfo('finish')
                    }
                }
            },
            completeStep2Process(lookupId) {
                if ('' != lookupId) {
                    this.form.lookupId = lookupId
                }
                this.clearHierarchyFormData()
                this.uploaderAssignToBrowser();
                this.getCountryList();
                this.getMediaTypes();
                // this.getMediaCoverType();
                this.getSubjectTypes();
                this.getMediaPresenterType();
                this.step++;
                this.updateFormData();
                this.goBackToPageTopAndNextFieldToEnter();
                this.progressBarActiveInactive(this.step);
                if (this.progressStep < this.step) {
                    this.progressStep = this.step;
                }
                this.$emit('updateVideoUploadStep',this.step);
                this.$emit('updateVideoUploadProgressStep',this.progressStep);
            },
            step3() {
                this.$v.name.$touch();
                this.$v.publicationDate.$touch();
                this.$v.recodingDate.$touch();
                this.$v.mediaPresenter.$touch();
                this.$v.mediaSubType.$touch();
                this.$v.subjectType.$touch();

                this.$v.description.$touch();
                // this.$v.topCompetitors.$touch();
                if (this.investmentBankHosted.id == 1 && this.subjectTypeTag == 'roadshow') {
                    this.$v.investmentBankName.$touch();
                }
                if(this.showOtherMediaPresenterField){
                    this.$v.otherMediaPresenter.$touch();
                }
                if (this.subjectTypeTag == 'roadshow') {
                    this.$v.country.$touch();
                    this.$v.city.$touch();
                    this.$v.state.$touch();
                }

                if (this.$v.name.$invalid || this.$v.publicationDate.$invalid || this.$v.recodingDate.$invalid || this.$v.description.$invalid || this.$v.mediaPresenter.$invalid || this.$v.subjectType.$invalid ||
                    (this.showOtherMediaPresenterField && this.$v.otherMediaPresenter.$invalid) ||
                    (this.investmentBankHosted.id == 1 && this.subjectTypeTag == 'roadshow' && this.$v.investmentBankName.$invalid) || ((this.subTypeTag == 'prodcast') && this.$v.podcastGuest.$invalid) ||
                    ((this.subjectTypeTag == 'roadshow') && this.$v.country.$invalid) ||
                    ((this.subjectTypeTag == 'roadshow') && this.$v.city.$invalid) ||
                    ((this.subjectTypeTag == 'roadshow') && this.$v.state.$invalid)
                ) {
                    if (this.$v.name.$invalid) {
                        this.$refs.name.focus();
                    } else if (this.$v.publicationDate.$invalid) {
                        $('#publicationDate').focus()
                    } else if (this.$v.recodingDate.$invalid) {
                        $('#recodingDate').focus()
                    } else if (this.$v.mediaPresenter.$invalid) {
                        this.$refs.mediaPresenter.$el.querySelector('input').focus();
                    }else if (this.showOtherMediaPresenterField && this.$v.otherMediaPresenter.$invalid) {
                        this.$refs.otherMediaPresenter.focus();
                    } else if (this.$v.mediaSubType.$invalid) {
                        $('#mediaSubType .vs__search').focus()
                    } else if (this.$v.subjectType.$invalid) {
                        $('#subjectType .vs__search').focus()
                    } else if (this.$v.description.$invalid) {
                        this.$refs.description.focus();
                    }
                    return false;
                }
                this.submitButtonDisabled = true;

                this.videoFormData.name = this.name;
                this.videoFormData.categorizationLevel = this.categorizationLevel;
                this.videoFormData.categorizationNodeId = this.categorizationNodeId;
                this.videoFormData.publicationDate = this.dateConvert(this.publicationDate);
                // this.videoFormData.mediaPresenter = this.mediaPresenter.id;
                this.videoFormData.publishDay = this.publishDay;

                this.videoFormData.recodingDate = this.dateConvert(this.recodingDate);
                this.videoFormData.recodingDay = this.recodingDay;

                this.videoFormData.otherMediaPresenter = this.otherMediaPresenter;
                // this.videoFormData.videoCoverType = this.videoCoverType.id;
                this.videoFormData.mediaSubType = this.mediaSubType.id;
                // this.videoFormData.subjectType = this.subjectType.id;
                this.videoFormData.subjectTypeTag = this.subjectTypeTag;
                this.videoFormData.description = this.description;
                // this.videoFormData.topCompetitors = this.topCompetitors;
                this.videoFormData.country = this.country ? this.country.id : '';
                this.videoFormData.state = this.state ? this.state.id : '';
                this.videoFormData.city = this.city ? this.city.id : '';
                this.videoFormData.investmentBankHosted = this.investmentBankHosted.id;
                this.videoFormData.investmentBankName = this.investmentBankName;
                this.videoFormData.lookupId = this.form.lookupId;
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
                this.isLoading = true;
                Questionnnaire.videoFormValidate(this.videoFormData)
                    .then((response) => {
                        this.isLoading = false
                        this.submitButtonDisabled = false;
                        this.step++;
                        this.goBackToPageTopAndNextFieldToEnter();
                        this.progressBarActiveInactive(this.step);
                        this.updateFormData();
                        if (this.progressStep < this.step) {
                            this.progressStep = this.step;
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
                this.$emit('updateVideoUploadStep',this.step);
                this.$emit('updateVideoUploadProgressStep',this.progressStep);
            },
            addVideoQuestionnaire() {
                console.log('ready to submit')
            },
            companyQuestionnaireData: function () {
                axios.get('/api/company-hierarchy-data')
                    .then(response => {
                        this.isLoading = false;
                        this.taxonomyIndustryData = response.data.data;
                    })
                    .catch(error => {
                        this.isLoading = false
                        if (error.response.status == 401) {
                            this.$emit('logout')
                        }
                    });
            },
            setMediaPresenter: function (value) {
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
                // this.otherMediaPresenter = ""
                // if ('Other' == value.name) {
                //     this.showOtherMediaPresenterField = true
                // }
            },
            clearInvestmentBankName: function (value) {

                if (0 == value.id) {
                    this.investmentBankName = ''
                }
            },
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
            startUpload: function () {
                var nothingToUpload = $('[data-nothingToUpload]');
                if ($('#results').children().length > 0) {
                    window.onbeforeunload = function () {
                        return "A XHR request is pending, are you sure you want to leave ?";
                    }
                    /*Taxonomy Data submit*/
                    this.r.opts.query.lookupId = this.form.lookupId;
                    /*End*/
                    this.r.opts.query.type = 'dacast';
                    this.r.opts.query.categorizationLevel = this.videoFormData.categorizationLevel;
                    this.r.opts.query.categorizationNodeId = this.videoFormData.categorizationNodeId;
                    this.r.opts.query.name = this.videoFormData.name;
                    this.r.opts.query.publicationDate = this.videoFormData.publicationDate;
                    this.r.opts.query.publishDay = this.videoFormData.publishDay;
                    this.r.opts.query.recodingDate = this.videoFormData.recodingDate;
                    this.r.opts.query.recodingDay = this.videoFormData.recodingDay;
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
                    var video_file_name = this.r.files[0].fileName.replace(/[^a-zA-Z ]/g, "");
                    this.r.files[0].fileName = video_file_name;
                    this.r.upload();
                    this.uploadButtonStatus = false
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
                    if ("" != value[20]) {
                        this.form.trackingId = value[20];
                    }
                }
            },
            getCompanyInfo: function () {
                axios.get('/api/hierarchy-completed-status')
                    .then(response => {
                        this.isLoading = false
                        this.showMediaHierarchy = response.data.data.hierarchy_completed_status;
                        if (!response.data.data.hierarchy_completed_status) {
                            this.companyQuestionnaireData()
                        }
                    })
                    .catch(error => {
                        this.isLoading = false
                        if (error.response.status == 401) {
                            this.$emit('logout')
                        }
                    });
            },
            mediaCompanyHierarchyStatus: function (data) {
                this.isLoading = true
                this.goBackToPageTopAndNextFieldToEnter();
                this.showMediaHierarchy = false
                this.companyQuestionnaireData()
            },
            goBackToPageTopAndNextFieldToEnter: function () {
                $(document).ready(function () {
                    $('input, select, textarea').on('keydown', function (e) {
                        if (e.keyCode == 13) {
                            var focusable = $('input, select, textarea').filter(':visible');
                            focusable.eq(focusable.index(this) + 1).focus();
                            return false;
                        }
                    });
                });
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
                if (!this.subjectTypeIds.includes(option.id))
                    return option;
            },
            progressBarActiveInactive: function (step) {
                for (let i = 1; i <= 3; i++) {
                    if (i == step) {
                        $('#progressStep' + i).addClass("active");
                    } else {
                        $('#progressStep' + i).removeClass("active");
                    }
                }

            },
            clearHierarchyFormData: function () {
                this.form.industry = ""
                this.form.sector = ""
                this.form.subSector = ""
                this.form.group = ""
                this.form.subGroup = ""
                this.form.echelon = ""
                this.form.subEchelon = ""
                this.form.tier = ""
                this.form.subTier = ""
                this.form.layer = ""
                this.form.subLayer = ""
                this.form.deck = ""
                this.form.subDeck = ""
                this.form.floor = ""
                this.form.subFloor = ""
                this.form.basement = ""
                this.form.subBasement = ""
                this.form.mine = ""
                this.form.subMine = ""
            },
            getFormData: function () {
                axios.get('/api/media-form-data?type=video')
                    .then(response => {
                        if (!!response.data.data.hierarchy_data) {
                            var responseData = response.data.data;
                            var formMetaData = responseData.meta_data;
                            var formHierarchyData = responseData.hierarchy_data;
                            this.step = response.data.data.step;
                            this.progressStep = response.data.data.step;

                            this.$emit('updateVideoUploadStep',this.step);
                            this.$emit('updateVideoUploadProgressStep',this.progressStep);

                            if (!!formHierarchyData.lookupId) {
                                this.savedCategories = formHierarchyData.lookupId;
                                this.form.lookupId = formHierarchyData.lookupId;
                                this.form.trackingId = formMetaData.trackingId;
                                if (1 == this.step) {
                                    this.$refs.taxonomyChild.getMediaHierarchyInfoForNodeCollapses(this.form.lookupId);
                                    this.$refs.taxonomyChild.tracking_id = formMetaData.trackingId;
                                }
                                if (2 == this.step || 3 == this.step) {
                                    this.uploaderAssignToBrowser();

                                    this.getCountryList();
                                    this.getMediaTypes();
                                    this.getSubjectTypes();
                                    this.getMediaPresenterType();
                                    this.goBackToPageTopAndNextFieldToEnter();
                                    this.progressBarActiveInactive(this.step);

                                    this.name = formMetaData.name
                                    if (!!formMetaData.publicationDate) {
                                        this.publicationDate = new Date(Date.parse(formMetaData.publicationDate.replace(/[-]/g, '/')))
                                    }
                                    if (!!formMetaData.recodingDate) {
                                        this.recodingDate = new Date(Date.parse(formMetaData.recodingDate.replace(/[-]/g, '/')))
                                    }
                                    this.publishDay = formMetaData.publishDay
                                    if (!!formMetaData.recodingDay) {
                                        this.recodingDay = formMetaData.recodingDay
                                    }
                                    if (!!formMetaData.mediaPresenter) {
                                        this.mediaPresenter = formMetaData.mediaPresenter
                                        this.showRelatedField(formMetaData.mediaPresenter, 'mediaPresenterTypeIds')
                                        if (this.mediaPresenter.name == 'Other') {
                                            this.showOtherMediaPresenterField = true
                                        }
                                    }
                                    if (!!formMetaData.otherMediaPresenter) {
                                        this.otherMediaPresenter = formMetaData.otherMediaPresenter
                                        this.showOtherMediaPresenterField = true
                                    }

                                    if (!!formMetaData.mediaSubType) {
                                        this.mediaSubType = formMetaData.mediaSubType
                                    }
                                    if (!!formMetaData.subjectType) {
                                        this.subjectType = formMetaData.subjectType
                                        this.showRelatedField(formMetaData.subjectType, 'subjectTypeIds')
                                    }
                                    if (!!formMetaData.subjectTypeTag) {
                                        this.subjectTypeTag = formMetaData.subjectTypeTag
                                    }
                                    this.description = formMetaData.description
                                }
                                if (3 == this.step) {
                                    this.videoFormData.name = this.name;
                                    this.videoFormData.categorizationLevel = this.categorizationLevel;
                                    this.videoFormData.categorizationNodeId = this.categorizationNodeId;
                                    this.videoFormData.publicationDate = this.dateConvert(this.publicationDate);
                                    this.videoFormData.recodingDate = this.dateConvert(this.recodingDate);
                                    this.videoFormData.mediaPresenter = this.mediaPresenter.id;
                                    this.videoFormData.publishDay = this.publishDay;
                                    this.videoFormData.otherMediaPresenter = this.otherMediaPresenter;
                                    this.videoFormData.mediaSubType = this.mediaSubType.id;
                                    this.videoFormData.subjectTypeTag = this.subjectTypeTag;
                                    this.videoFormData.description = this.description;
                                    this.videoFormData.country = this.country ? this.country.id : '';
                                    this.videoFormData.state = this.state ? this.state.id : '';
                                    this.videoFormData.city = this.city ? this.city.id : '';
                                    this.videoFormData.investmentBankHosted = this.investmentBankHosted.id;
                                    this.videoFormData.investmentBankName = this.investmentBankName;
                                    this.videoFormData.lookupId = this.form.lookupId;
                                    let subjectTypeOptions = [];
                                    for (let sto = 0; sto < this.subjectType.length; sto++) {
                                        subjectTypeOptions.push(this.subjectType[sto].id);
                                    }
                                    this.videoFormData.subjectType = subjectTypeOptions.join(',');
                                }
                            }

                            if (!!formHierarchyData.industry) {
                                this.$refs.taxonomyChild.form.industry = formHierarchyData.industry
                                this.$refs.taxonomyChild.getSectors(formHierarchyData.industry, 'Input', false)
                            }
                            if (!!formHierarchyData.sector) {
                                this.$refs.taxonomyChild.form.sector = formHierarchyData.sector
                                this.$refs.taxonomyChild.getSubSectors(formHierarchyData.sector, 'Input', false)
                                this.$refs.taxonomyChild.showSectorField = true;
                                this.$refs.taxonomyChild.sectorRequired = true;
                            }

                            if (!!formHierarchyData.subSector) {
                                this.$refs.taxonomyChild.form.subSector = formHierarchyData.subSector
                                this.$refs.taxonomyChild.getGroups(formHierarchyData.subSector, 'Input', false)
                                this.$refs.taxonomyChild.showSubSectorField = true;
                                this.$refs.taxonomyChild.subSectorRequired = true;
                            }
                            if (!!formHierarchyData.group) {
                                this.$refs.taxonomyChild.form.group = formHierarchyData.group
                                this.$refs.taxonomyChild.getSubGroups(formHierarchyData.group, 'Input', false)
                                this.$refs.taxonomyChild.showGroupField = true;
                                this.$refs.taxonomyChild.groupRequired = true;

                            }
                            if (!!formHierarchyData.subGroup) {
                                this.$refs.taxonomyChild.form.subGroup = formHierarchyData.subGroup
                                this.$refs.taxonomyChild.getEchelons(formHierarchyData.subGroup, 'Input', false)
                                this.$refs.taxonomyChild.showSubGroupField = true;
                                this.$refs.taxonomyChild.subGroupRequired = true;
                            }
                            if (!!formHierarchyData.echelon) {
                                // this.$refs.taxonomyChild.echelons = [formHierarchyData.echelon]
                                this.$refs.taxonomyChild.form.echelon = formHierarchyData.echelon
                                this.$refs.taxonomyChild.getSubEchelons(formHierarchyData.echelon, 'Input', false)
                                this.$refs.taxonomyChild.showEchelonField = true;
                                this.$refs.taxonomyChild.echelonRequired = true;
                            }
                            if (!!formHierarchyData.subEchelon) {
                                // this.$refs.taxonomyChild.subEchelons = [formHierarchyData.sub_echelon]
                                this.$refs.taxonomyChild.form.subEchelon = formHierarchyData.subEchelon
                                this.$refs.taxonomyChild.getTiers(formHierarchyData.subEchelon, 'Input', false)
                                this.$refs.taxonomyChild.showSubEchelonField = true;
                                this.$refs.taxonomyChild.subEchelonRequired = true;
                            }
                            if (!!formHierarchyData.tier) {
                                // this.$refs.taxonomyChild.tiers = [formHierarchyData.tier]
                                this.$refs.taxonomyChild.form.tier = formHierarchyData.tier
                                this.$refs.taxonomyChild.getSubTiers(formHierarchyData.tier, 'Input', false)
                                this.$refs.taxonomyChild.showTierField = true;
                                this.$refs.taxonomyChild.tierRequired = true;
                            }
                            if (!!formHierarchyData.subTier) {
                                // this.$refs.taxonomyChild.subTiers = [formHierarchyData.sub_tier]
                                this.$refs.taxonomyChild.form.subTier = formHierarchyData.subTier
                                this.$refs.taxonomyChild.getLayers(formHierarchyData.subTier, 'Input', false)
                                this.$refs.taxonomyChild.showSubTierField = true;
                                this.$refs.taxonomyChild.subTierRequired = true;
                            }
                            if (!!formHierarchyData.layer) {
                                // this.$refs.taxonomyChild.layers = [formHierarchyData.layer]
                                this.$refs.taxonomyChild.form.layer = formHierarchyData.layer
                                this.$refs.taxonomyChild.getSubLayers(formHierarchyData.layer, 'Input', false)
                                this.$refs.taxonomyChild.showLayerField = true;
                                this.$refs.taxonomyChild.layerRequired = true;
                            }
                            if (!!formHierarchyData.subLayer) {
                                // this.$refs.taxonomyChild.subLayers = [formHierarchyData.sub_layer]
                                this.$refs.taxonomyChild.form.subLayer = formHierarchyData.subLayer
                                this.$refs.taxonomyChild.getDecks(formHierarchyData.subLayer, 'Input', false)
                                this.$refs.taxonomyChild.showSubLayerField = true;
                                this.$refs.taxonomyChild.subLayerRequired = true;
                            }
                            if (!!formHierarchyData.deck) {
                                // this.$refs.taxonomyChild.decks = [formHierarchyData.deck]
                                this.$refs.taxonomyChild.form.deck = formHierarchyData.deck
                                this.$refs.taxonomyChild.getSubDecks(formHierarchyData.deck, 'Input', false)
                                this.$refs.taxonomyChild.showDeckField = true;
                                this.$refs.taxonomyChild.deckRequired = true;
                            }
                            if (!!formHierarchyData.subDeck) {
                                // this.$refs.taxonomyChild.decks = [formHierarchyData.sub_deck]
                                this.$refs.taxonomyChild.form.deck = formHierarchyData.subDeck
                                this.$refs.taxonomyChild.getFloors(formHierarchyData.subDeck, 'Input', false)
                                this.$refs.taxonomyChild.showSubDeckField = true;
                                this.$refs.taxonomyChild.subDeckRequired = true;
                            }
                            if (!!formHierarchyData.floor) {
                                // this.$refs.taxonomyChild.floors = [formHierarchyData.floor]
                                this.$refs.taxonomyChild.form.floor = formHierarchyData.floor
                                this.$refs.taxonomyChild.getSubFloors(formHierarchyData.floor, 'Input', false)
                                this.$refs.taxonomyChild.showFloorField = true;
                                this.$refs.taxonomyChild.floorRequired = true;
                            }
                            if (!!formHierarchyData.subFloor) {
                                // this.$refs.taxonomyChild.subFloors = [formHierarchyData.sub_floor]
                                this.$refs.taxonomyChild.form.subFloor = formHierarchyData.subFloor
                                this.$refs.taxonomyChild.getBasements(formHierarchyData.subFloor, 'Input', false)
                                this.$refs.taxonomyChild.showSubFloorField = true;
                                this.$refs.taxonomyChild.subFloorRequired = true;
                            }
                            if (!!formHierarchyData.basement) {
                                // this.$refs.taxonomyChild.basements = [formHierarchyData.basement]
                                this.$refs.taxonomyChild.form.basement = formHierarchyData.basement
                                this.$refs.taxonomyChild.getSubBasements(formHierarchyData.basement, 'Input', false)
                                this.$refs.taxonomyChild.showBasementField = true;
                                this.$refs.taxonomyChild.basementRequired = true;
                            }
                            if (!!formHierarchyData.subBasement) {
                                // this.$refs.taxonomyChild.subBasements = [formHierarchyData.sub_basement]
                                this.$refs.taxonomyChild.form.subBasement = formHierarchyData.subBasement
                                this.$refs.taxonomyChild.getMines(formHierarchyData.subBasement, 'Input', false)
                                this.$refs.taxonomyChild.showSubBasementField = true;
                                this.$refs.taxonomyChild.subBasementRequired = true;
                            }
                            if (!!formHierarchyData.mine) {
                                //this.$refs.taxonomyChild.mines = [formHierarchyData.mine]
                                this.$refs.taxonomyChild.form.mine = formHierarchyData.mine
                                this.$refs.taxonomyChild.getSubMines(formHierarchyData.mine, 'Input', false)
                                this.$refs.taxonomyChild.showMineField = true;
                                this.$refs.taxonomyChild.mineRequired = true;
                            }
                            if (!!formHierarchyData.subMine) {
                                //this.$refs.taxonomyChild.subMines = [formHierarchyData.sub_mine]
                                this.$refs.taxonomyChild.form.subMine = formHierarchyData.subMine
                                this.$refs.taxonomyChild.showSubMineField = true;
                                this.$refs.taxonomyChild.subMineRequired = true;
                            }

                        }
                    })
                    .catch(error => {
                    });
            },
            updateFormData: function () {
                let subjectTypeOptions = [];
                for (let sto = 0; sto < this.subjectType.length; sto++) {
                    subjectTypeOptions.push(this.subjectType[sto].id);
                }
                let mediaPresenterOptions = [];
                for (let mp = 0; mp < this.mediaPresenter.length; mp++) {
                    mediaPresenterOptions.push(this.mediaPresenter[mp].id);
                }

                var formData = {
                    'media_type': 'video',
                    'hierarchy_data': this.form,
                    'step': this.step,
                    'meta_data': {
                        'name': this.name,
                        'publicationDate': this.publicationDate,
                        'recodingDate': this.recodingDate,
                        'mediaPresenter': mediaPresenterOptions.join(','),
                        'publishDay': this.publishDay,
                        'recodingDay': this.recodingDay,
                        'otherMediaPresenter': this.otherMediaPresenter,
                        'mediaSubType': this.mediaSubType.id,
                        'subjectTypeTag': this.subjectTypeTag,
                        'description': this.description,
                        'investmentBankHosted': this.investmentBankHosted.id,
                        'investmentBankName': this.investmentBankName,
                        'lookupId': (null != this.form.lookupId) ? this.form.lookupId : this.savedCategories,
                        'trackingId': (undefined != this.$refs.taxonomyChild) ? this.$refs.taxonomyChild.tracking_id : this.form.trackingId,
                        'subjectType': subjectTypeOptions.join(','),
                    },
                }
                this.form.lookupId = (null != this.form.lookupId) ? this.form.lookupId : this.savedCategories
                if (this.uploadSuccess) {
                    formData = {
                        'media_type': 'video',
                        'hierarchy_data': {},
                        'step': 1,
                        'meta_data': {}
                    }
                }
                Questionnnaire.updateMediaFormData(formData)
                    .then((response) => {
                    })
                    .catch(error => {
                    });
                this.$emit('updateVideoUploadStep',this.step);
                this.$emit('updateVideoUploadProgressStep',this.progressStep);
            },
            uploaderAssignToBrowser: function () {
                if (!this.uploaderAssign) {
                    var draggable = $('#drag-area'), browseButton = $('#browseButton');
                    this.r.assignBrowse(browseButton);
                    this.r.assignDrop(draggable);
                    this.uploaderAssign = true
                }

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
            addSuggestion: function () {
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
                User.mediaSubjectSuggestion({media_type:2, explanation: this.suggestion_explanation, reason: this.suggestion_reason})
                    .then((response) => {
                        if (response.data.success) {
                            this.$bvModal.hide('modal-add-subject-suggestion');
                            //toastr.success(response.data.success.message)
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
                            toastr.error(error)
                        }
                    });
            },
            cancelSuggestionModal: function () {
                this.$bvModal.hide('modal-add-subject-suggestion');
                this.suggestion_explanation = "";
                this.suggestion_reason = "";
                this.$v.$reset();
            },
        },
        created: function () {
            // this.isLoading = true
            this.goBackToPageTopAndNextFieldToEnter();
            this.getFormData();
            this.dateConvert = Common.dateConvert;
            this.$emit('updateVideoUploadStep',this.step);
            this.$emit('updateVideoUploadProgressStep',this.progressStep);
        },
        mounted: function () {
            this.r = new Resumable({
                // Use chunk size that is smaller than your maximum limit due a resumable issue
                // https://github.com/23/resumable.js/issues/51
                chunkSize: 1 * 1024 * 1024, // 1MB
                simultaneousUploads: 2,
                maxFiles: 1,
                maxFileSize: 500 * 1024 * 1024,
                testChunks: false,
                throttleProgressCallbacks: 1,
                fileType: ['webm', 'mkv', 'flv', 'vob', 'avi', 'mov', 'wmv', 'mp4', 'm4p', 'm4v', 'mpg', 'mpeg'],
                fileTypeErrorCallback: function (file, errorCount) {
                    toastr.error('Warning, Issuer Pixel supports video files of webm/mkv/flv/vob/avi/mov/wmv/mp4/m4p/m4v/mpg/mpeg. Please select a supported file, thank you!')
                },
                // Get the url from data-url tag
                //target:'/media-upload',
                target: '/api/dacast-video',
                // Append token to the request - required for web routes
                query: {_token: document.querySelector('meta[name="csrf-token"]').content, Accept: 'application/json'}
            });
            var vm = this;

            this.r.on('fileAdded', function (file, event) {
                // var videoTag = '<img src="/images/default_video.jpg" alt="" width="320">';
                var videoSupportMsg = '<p class="text-danger">Previews are not supported for this video type.</p>';
                var types = /(\.|\/)(mp4|quicktime|webm)$/i;
                if (types.test(file.file.type)) {
                    // videoTag = '<video id="video" width="320" controls src="'+  URL.createObjectURL(file.file) +'"></video>';
                    videoSupportMsg = '';
                }
                var videoTag = '<video id="video" width="320" controls src="' + URL.createObjectURL(file.file) + '"></video>';

                var template =
                    '<div data-uniqueid="' + file.uniqueIdentifier + '">' +
                    videoSupportMsg +
                    videoTag +
                    '<div class="fileName font-weight-bold">' + file.fileName + ' (' + file.file.type + ')' + '</div>' +
                    '</div>';


                $('#results').html(template);
                // let blobURL = URL.createObjectURL(file.file);
                // $('#video').attr('src',blobURL);
                $('#browseButton').html('Or edit too');
                toastr.info('Video Selected!')
                vm.videoUploadIsDisabled = false;
                // vm.startUpload()
                //$('#upload-progress').removeClass('d-none').find('.progress-bar').css('width','0%');
            });

            this.r.on('uploadStart', function () {
                $('.alert-box').removeClass('alert-success').removeClass('alert-danger').text('');
            });

            this.r.on('fileSuccess', function (file, message) {
                var res = JSON.parse(message)
                $('#upload-progress').addClass('d-none').find('.progress-bar').css('width', '0%');
                if (false == res.status) {
                    $('.alert-box').addClass('alert-danger').html("Unable to upload");
                } else {
                    localStorage.setItem("isVideoUploaded", 'yes');
                    $('.alert-box').addClass('alert-success').html("Uploading complete! We are currently processing your video, this may take some time. You may leave this page.");
                }


                vm.uploadSuccess = true;
                window.onbeforeunload = function () {
                    // blank function do nothing
                }
                vm.uploadButtonSeen = false
            });

            this.r.on('progress', function () {
                if (98 < (this.progress() * 100)) {
                    $('#upload-progress').removeClass('d-none').find('.progress-bar').attr('style', "width:" + 99 + '%').html(Math.round(99) + '%');
                } else {
                    $('#upload-progress').removeClass('d-none').find('.progress-bar').attr('style', "width:" + this.progress() * 100 + '%').html(Math.round(this.progress() * 100) + '%');
                }
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
        beforeDestroy() {
            this.updateFormData();
        },
        components: {
            loader,
            AudioVideoHierarchy,
            Datepicker,
            vSelect,
            Navigation,
            sidebar
        }
    }
</script>
<style>
    .drop-zone {
        text-align: center;
        border: 2px dashed #b0a1a1;
    }

    .danger, .danger:hover {
        background-color: #e74c3c;
    }

    .inverse, .inverse:hover {
        background-color: #34495e;
    }

    input[type="file"] {
        height: 32px;
    }

    div[data-nothingToUpload] {
        display: none;
    }

    .deleteFile {
        padding: 3px 7px;
        color: #bf0000;
        font-weight: bold;
        cursor: pointer;
    }

    button {
        border: none;
        cursor: pointer;
        background: #bdc3c7;
        color: #ffffff;
        padding: 9px 12px 10px;
        line-height: 1.333;
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
        color: #fff;
        line-height: 18px;
        font-size: 12px;
    }

    .drag-area {
        border: 2px dashed #b0a1a1;
        min-height: 350px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .drag-area.active {
        border: 2px solid #958e8e;
    }

    .drag-area .icon {
        font-size: 100px;
    }

    .drag-area header {
        font-size: 30px;
        font-weight: 500;
    }

    .drag-area span {
        font-size: 25px;
        font-weight: 500;
        margin: 10px 0 15px 0;
    }

    .drag-area button {
        padding: 10px 30px;
        font-size: 15px;
        font-weight: 500;
        border: none;
        outline: none;
        cursor: pointer;
        color: #fff;
        margin-top: 10px;
        background-color: #1e0857;
        border-radius: 2rem;
    }
    .drag-area button:hover {
        background-color: #32054b;
        color: #fff;
    }
    .drag-area button:focus {
        background-color: #32054b;
        color: #fff;
    }
    .drag-area button:active {
        background-color: #32054b !important;
        color: #fff !important;
    }

    .video-upload-button {
        border-radius: 2rem;
        border: none;
        background-color: #1e0857;
        cursor: none;
        font-size: 16px;
        padding: 8px 50px;
    }

    .video-upload-button:hover{
        background: #32054b;
        color: #fff;
    }

    div#results .fa-file-video {
        font-size: 35px;
        margin-top: 5px;
    }
</style>
