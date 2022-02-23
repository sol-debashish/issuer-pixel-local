<template>
    <section class="dashboard pt-0">
        <div class='row'>
            <div class='col-md-12 grid-margin'>
                <h4 class="text-theme-dark-blue" v-if="step == 2">Audio details</h4>
                <h4 class="text-theme-dark-blue" v-else>Audio Upload</h4>
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
                        <li id="progressStep2"><strong>Audio Details</strong></li>
                        <li id="progressStep3"><strong>Audio Upload</strong></li>
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
                        <!--                <sidebar :audioStep="step" :audioProgressStep="progressStep"></sidebar>-->
                        <div class="col">
                            <form class="form-horizontal" v-on:submit.prevent="addAudioQuestionnaire">
                                <div class="row">
                                    <div v-bind:class="(step == 1)?'col-md-12':'col-md-6 mx-auto'">
                                        <!--Step-1 Start-->
                                        <fieldset class="mb-5" v-if="step == 1">

                                            <AudioVideoHierarchy @nodeData="TaxonomyData"
                                                                 :taxonomySavedData='taxonomySavedData'
                                                                 v-bind:savedCategories="savedCategories"
                                                                 hierarchyType='Audio'
                                                                 :trackingId="trackingId"
                                                                 ref="taxonomyChild"></AudioVideoHierarchy>

                                        </fieldset>
                                        <!--Step-2 Start-->
                                        <fieldset class="mb-5" v-if="step == 2">
                                            <div class="panel-body">
                                                <span>Step 2 of 2</span>
                                                <div class="form-group">
                                                    <label class="control-label font-weight-bold">Audio Title<span
                                                        class="text-danger">*</span></label>
                                                    <input type="text" maxlength="500" class="form-control"
                                                           v-model="name"
                                                           ref="name"
                                                           :class="{ 'is-invalid': $v.name.$error }"
                                                           placeholder="Type in Audio Title - Maximum 500 characters">
                                                    <div v-if="!$v.name.required" class="invalid-feedback">Audio title
                                                        is
                                                        required.
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-7">
                                                        <div class="form-group">
                                                            <label class="control-label font-weight-bold">Date of audio
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
                                                                        :class="{ 'is-invalid': $v.publicationDate.$error }">
                                                            </datepicker>
                                                            <div v-if="!$v.publicationDate.required"
                                                                 class="invalid-feedback">
                                                                Publication date is required.
                                                            </div>
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
                                                    <label class="control-label font-weight-bold">Audio
                                                        Participants<span
                                                            class="text-danger">*</span></label>
                                                    <v-select label="name" :options="mediaPresenterTypes"
                                                              multiple
                                                              ref="mediaPresenter"
                                                              id="mediaPresenter"
                                                              :class="{ 'is-invalid': $v.mediaPresenter.$error }"
                                                              v-model="mediaPresenter"
                                                              :selectable="mediaPresenterTypeSelectedHide"
                                                              :clearable="false" placeholder="Select Below"
                                                              @input="setMediaPresenter">
                                                    </v-select>
                                                    <div v-if="!$v.mediaPresenter.required" class="invalid-feedback">
                                                        Audio
                                                        participant is
                                                        required.
                                                    </div>
                                                </div>
                                                <div class="form-group" v-if="showOtherMediaPresenterField">
                                                    <input type="text" maxlength="500" class="form-control"
                                                           v-model="otherMediaPresenter"
                                                           ref="otherMediaPresenter"
                                                           :class="{ 'is-invalid': $v.otherMediaPresenter.$error }"
                                                           placeholder="Write Audio Participant - Maximum 500 characters">
                                                    <div v-if="!$v.otherMediaPresenter.required"
                                                         class="invalid-feedback">Please Write Audio Participant
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="control-label font-weight-bold">Audio Sub Type<span
                                                        class="text-danger">*</span></label>
                                                    <v-select label="name" :options="mediaSubTypes"
                                                              ref="mediaSubType"
                                                              id="mediaSubType"
                                                              :class="{ 'is-invalid': $v.mediaSubType.$error }"
                                                              v-model="mediaSubType"
                                                              :clearable="false" placeholder="Select Below"
                                                              @input="setSubTypeTag">
                                                    </v-select>

                                                    <div v-if="!$v.mediaSubType.required" class="invalid-feedback">Audio
                                                        sub
                                                        type is
                                                        required.
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="control-label font-weight-bold">Subject of Company
                                                        Audio<span
                                                            class="text-danger">*</span></label>
                                                    <v-select label="name" :options="subjectTypes" v-model="subjectType"
                                                              :selectable="subjectTypeSelectedHide"
                                                              class="media-subject-list"
                                                              multiple
                                                              id="subjectType"
                                                              :class="{ 'is-invalid': $v.subjectType.$error }"
                                                              ref="subjectType"
                                                              @input="setSubjectTypeTag" :clearable="false"
                                                              placeholder="Select Below"></v-select>
                                                    <!--                                                taggable push-tags-->
                                                    <!--                                                :create-option="option => ({name: option.toLowerCase(), id: option.toLowerCase()+'_suggested'})"-->
                                                    <div v-if="!$v.subjectType.required" class="invalid-feedback">
                                                        Subject of
                                                        company
                                                        audio is
                                                        required.
                                                    </div>
                                                    <div class="mt-1 mb-2 add-multiple"
                                                         v-b-modal.modal-add-subject-suggestion>
                                                        + Add Suggestion
                                                    </div>
                                                </div>
                                                <template v-if="subTypeTag == 'prodcast'">
                                                    <div class="form-group">
                                                        <label class="control-label font-weight-bold">Podcast Guest<span
                                                            class="text-danger">*</span></label>
                                                        <v-select label="name" :options="podcastGuestTypes"
                                                                  v-model="podcastGuest"
                                                                  id="podcastGuest"
                                                                  ref="podcastGuest"
                                                                  :class="{ 'is-invalid': $v.podcastGuest.$error }"
                                                                  :clearable="false"
                                                                  placeholder="Select Below"></v-select>

                                                        <div v-if="!$v.podcastGuest.required"
                                                             class="invalid-server-feedback">
                                                            Podcast
                                                            guest is required.
                                                        </div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="control-label font-weight-bold">Podcast Series
                                                            Name</label>
                                                        <input type="text" v-model="podcastSeriesName"
                                                               class="form-control"
                                                               placeholder="(Name of Podcast Series)">
                                                    </div>
                                                    <div class="form-group" v-if="subjectTypeTag == 'roadshow'">
                                                        <label class="control-label font-weight-bold">Road Show
                                                            Geography</label>
                                                        <v-select label="name" :options="countries" v-model="country"
                                                                  :clearable="false" @input="getStates"
                                                                  placeholder="Select Country"></v-select>
                                                        <div v-if="!$v.country.required"
                                                             class="invalid-server-feedback">Country
                                                            is
                                                            required.
                                                        </div>
                                                        <br/>
                                                        <v-select label="name" :options="states" v-model="state"
                                                                  :clearable="false" @input="getCities"
                                                                  placeholder="Select State"></v-select>
                                                        <div v-if="!$v.state.required" class="invalid-server-feedback">
                                                            State is
                                                            required.
                                                        </div>
                                                        <br/>
                                                        <v-select label="name" :options="cities" v-model="city"
                                                                  :clearable="false"
                                                                  placeholder="Select City"></v-select>
                                                        <div v-if="!$v.city.required" class="invalid-server-feedback">
                                                            City is
                                                            required.
                                                        </div>
                                                    </div>
                                                </template>
                                                <template v-else></template>

                                                <div class="form-group" v-if="subjectTypeTag == 'roadshow'">
                                                    <label class="control-label">Investment Bank Hosted Road
                                                        Show</label>
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
                                                    <div v-if="!$v.investmentBankName.required"
                                                         class="invalid-feedback">
                                                        Bank name
                                                        is required.
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="control-label font-weight-bold">Audio Description<span
                                                        class="text-danger">*</span></label>
                                                    <textarea type="text" maxlength="1000" v-model="description"
                                                           ref="description"
                                                           :class="{ 'is-invalid': $v.description.$error }"
                                                           class="form-control"
                                                              placeholder="Type in Description—Maximum 1000 characters"></textarea>
                                                    <div v-if="!$v.description.required" class="invalid-feedback">Audio
                                                        description
                                                        is required.
                                                    </div>
                                                </div>
                                                <button @click.prevent="prev()" class="btn btn-back-next"><i
                                                    class="fas fa-chevron-left"></i> Back
                                                </button>
                                                <button type="button" @click.prevent="step3()"
                                                        class="btn btn-back-next float-right">Save & Continue <i
                                                    class="fas fa-chevron-right"></i>
                                                </button>
                                            </div>
                                        </fieldset>


                                    </div>
                                </div>
                                <!--Step-3 Start-->
                                <fieldset class="col p-3" v-if="step == 3">
                                    <div class="panel-body">
                                        <template v-if="!uploadSuccess">
                                            <div class="large-12 columns mx-auto mb-4">
                                                <div class="uploader"
                                                     @dragenter="OnDragEnter"
                                                     @dragleave="OnDragLeave"
                                                     @dragover.prevent
                                                     @drop="onDrop"
                                                     :class="{ dragging: isDragging }"
                                                >
                                                    <header>Drag and drop audio to upload</header>
                                                    <div class="form-group mb-1">
                                                        <label class="btn btn-info dragarea-btn">
                                                            <input type="file" name="audioFile" id="audioFile"
                                                                   ref="audioFile"
                                                                   @change="onInputChange"
                                                                   style="display:None;"
                                                                   accept="audio/*"> <span><i
                                                            class="fas fa-cloud-upload-alt"></i>  Choose files to Upload</span>

                                                        </label>
                                                        <span class="small d-block">Issuer Pixel supports audio files of type m4a, flac, mp3, mp4, wav, wma, acc</span>
                                                    </div>
                                                    <div id="results" class="h5 font-weight-bold"></div>
                                                </div>
                                                <div class="text-center">
                                                    <div class="alert-box alert color-red" data-nothingToUpload>Error
                                                        Nothing To
                                                        Upload, Please
                                                        Add File
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 mx-auto">
                                                <button @click.prevent="prev()" class="btn btn-back-next"><i
                                                    class="fas fa-chevron-left"></i> Back
                                                </button>
                                                <button type="submit" :disabled='submitButtonDisabled'
                                                        class="btn btn-back-next float-right"><i
                                                    class="fas fa-cloud-upload-alt"></i> Upload Audio
                                                </button>
                                            </div>
                                        </template>
                                        <template v-else>
                                            <div class="mt-3">
                                                <div class="alert alert-box alert-success text-center">
                                                    {{successMessage}}
                                                </div>
                                            </div>
                                            <div class="d-flex">
                                                <router-link class="btn btn-back-next align-self-center mx-auto"
                                                             :to="{name: 'Dashboard'}">Back to Dashboard
                                                </router-link>
                                            </div>
                                        </template>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                        <loader :is-visible="isLoading"></loader>
                        <!--Add suggestion Modal-->
                        <b-modal
                            id="modal-add-subject-suggestion"
                            ref="modal"
                            title="Add Subject of Company Audio"
                            centered
                            hide-footer title-class="modal-title-new">
                            <b-form-group
                                label-for="name-input"
                                label="Add Suggestion Request Here"
                                class="font-weight-bold">
                                <b-form-input
                                    v-model="suggestion_explanation"
                                    ref="suggestion_explanation"
                                    placeholder="Type Requested Subject of Company Audio Here"
                                    class="mb-2"
                                    maxlength="200"
                                    :class="{ 'is-invalid': $v.suggestion_explanation.$error }"
                                    required
                                ></b-form-input>
                                <div v-if="!$v.suggestion_explanation.required" class="invalid-feedback">Requested Subject of Company Audio is required.
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
                    </div>
                </div>
            </div>
        </div>
    </section>
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
                savedCategories: "",
                trackingId: "",
                isLoading: false,
                uploadSuccess: false,
                successMessage: '',
                step: 1,
                progressStep: 1,
                errors: [],

                countries: [],
                states: [],
                cities: [],
                mediaSubTypes: [],
                subjectTypes: [],
                subjectTypeIds: [],
                mediaPresenterTypes: [],
                mediaPresenterTypeIds: [],
                // mediaCoverTypes : [],
                podcastGuestTypes: [],
                audioFile: "",
                isDragging: false,
                dragCount: 0,

                //showDismissibleAlert: false,
                classificationMessage: "",
                message_body_class: "success",
                dismissSecs: 5,
                dismissCountDown: 0,

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
                categorizationLevel: "",
                nodeId: "",
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
            otherMediaPresenter: {required},
            mediaSubType: {required},
            subjectType: {required},
            investmentBankName: {required},
            description: {required},
            podcastGuest: {required},
            country: {required},
            state: {required},
            city: {required},
            audioFile: {required},
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
                this.$emit('updateAudioUploadStep', this.step);
                this.$emit('updateAudioUploadProgressStep', this.progressStep);
            },
            setPreviousStepDataFromSidebarStep1() {
                this.savedCategories = this.form.lookupId;
                this.trackingId = this.form.trackingId;
                this.$emit('updateAudioUploadStep', this.step);
                this.$emit('updateAudioUploadProgressStep', this.progressStep);
            },
            setPreviousStepDataFromSidebarStep2() {
                if (this.savedCategories != "" && this.form.lookupId == undefined) {
                    this.form.lookupId = this.savedCategories;
                }
                this.clearHierarchyFormData()
                this.updateFormData();
                this.$emit('updateAudioUploadStep', this.step);
                this.$emit('updateAudioUploadProgressStep', this.progressStep);
            },
            addNode() {
                this.$refs.taxonomyChild.saveHierarchyInfo();
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
                this.getCountryList();
                this.getmediaSubTypes();
                this.getSubjectTypes();
                this.getMediaPresenterType();
                // this.getMediaCoverType();
                this.getPodcastGuestTypes();
                this.step++;
                this.updateFormData();
                this.goBackToPageTopAndNextFieldToEnter();
                this.progressBarActiveInactive(this.step);
                if (this.progressStep < this.step) {
                    this.progressStep = this.step;
                }
                this.$emit('updateAudioUploadStep', this.step);
                this.$emit('updateAudioUploadProgressStep', this.progressStep);
            },
            step3() {
                this.$v.name.$touch();
                this.$v.publicationDate.$touch();
                this.$v.recodingDate.$touch();
                this.$v.mediaPresenter.$touch();
                if (this.showOtherMediaPresenterField) {
                    this.$v.otherMediaPresenter.$touch();
                }
                this.$v.mediaSubType.$touch();
                this.$v.subjectType.$touch();
                this.$v.description.$touch();
                // this.$v.topCompetitors.$touch();
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
                var nothingToUpload = $('[data-nothingToUpload]');
                if (this.$v.name.$invalid || this.$v.publicationDate.$invalid || this.$v.recodingDate.$invalid ||
                    this.$v.mediaPresenter.$invalid || (this.showOtherMediaPresenterField && this.$v.otherMediaPresenter.$invalid) ||
                    (this.subTypeTag == 'prodcast' && this.$v.podcastGuest.$invalid) ||
                    this.$v.mediaSubType.$invalid || this.$v.subjectType.$invalid || this.$v.description.$invalid) {

                    if (this.$v.name.$invalid) {
                        this.$refs.name.focus();
                    } else if (this.$v.publicationDate.$invalid) {
                        $('#publicationDate').focus()
                    }else if (this.$v.recodingDate.$invalid) {
                        $('#recodingDate').focus()
                    } else if (this.$v.mediaPresenter.$invalid) {
                        $('#mediaPresenter .vs__search').focus()
                    } else if (this.showOtherMediaPresenterField && this.$v.otherMediaPresenter.$invalid) {
                        this.$refs.otherMediaPresenter.focus();
                    } else if (this.$v.mediaSubType.$invalid) {
                        $('#mediaSubType .vs__search').focus()
                    } else if (this.$v.subjectType.$invalid) {
                        $('#subjectType .vs__search').focus()
                    } else if (this.subTypeTag == 'prodcast' && this.$v.podcastGuest.$invalid) {
                        this.$refs.podcastGuest.$el.querySelector('input').focus();
                    } else if (this.$v.description.$invalid) {
                        this.$refs.description.focus();
                    }

                    return false;
                }
                this.step++;
                this.updateFormData();
                this.progressBarActiveInactive(this.step);
                if (this.progressStep < this.step) {
                    this.progressStep = this.step;
                }
                this.$emit('updateAudioUploadStep', this.step);
                this.$emit('updateAudioUploadProgressStep', this.progressStep);
            },
            addAudioQuestionnaire() {
                this.$v.audioFile.$touch();

                var nothingToUpload = $('[data-nothingToUpload]');
                if (this.$v.audioFile.$invalid) {
                    if (this.$v.audioFile.$invalid) {
                        nothingToUpload.fadeIn();
                        setTimeout(function () {
                            nothingToUpload.fadeOut();
                        }, 3000);
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
                formData.append('recodingDate', this.dateConvert(this.recodingDate));
                // formData.append('mediaPresenter', this.mediaPresenter.id);
                let mediaPresenterOptions = [];
                for (let mp = 0; mp < this.mediaPresenter.length; mp++) {
                    mediaPresenterOptions.push(this.mediaPresenter[mp].id);
                }
                formData.append('mediaPresenter', mediaPresenterOptions.join(','));
                formData.append('publishDay', this.publishDay);
                formData.append('recodingDay', this.recodingDay);
                formData.append('otherMediaPresenter', this.otherMediaPresenter);
                formData.append('audioCoverType', this.audioCoverType);
                formData.append('mediaSubType', this.mediaSubType.id);
                let subjectTypeOptions = [];
                for (let sto = 0; sto < this.subjectType.length; sto++) {
                    subjectTypeOptions.push(this.subjectType[sto].id);
                }
                formData.append('subjectType', subjectTypeOptions.join(','));
                formData.append('subjectTypeTag', this.subjectTypeTag);
                formData.append('podcastGuest', this.podcastGuest.id);
                formData.append('podcastSeriesName', this.podcastSeriesName);

                formData.append('description', this.description);
                // formData.append('topCompetitors', this.topCompetitors);
                formData.append('country', this.country ? this.country.id : '');
                formData.append('state', this.state ? this.state.id : '');
                formData.append('city', this.city ? this.city.id : '');
                formData.append('investmentBankHosted', this.investmentBankHosted);
                formData.append('investmentBankName', this.investmentBankName);
                formData.append('_token', document.querySelector('meta[name="csrf-token"]').content);
                formData.append('file', this.file);

                this.submitButtonDisabled = true;

                Questionnnaire.uploadAudio(formData, config)
                    .then((response) => {
                        this.isLoading = false
                        this.submitButtonDisabled = false;
                        toastr.success(response.data.success.message)
                        this.uploadSuccess = true;
                        this.successMessage = 'Uploading complete!'
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
            setSubTypeTag: function (value) {
                this.podcastSeriesName = ''
                this.podcastGuest = ''
                if (null != value) {
                    this.subTypeTag = value.tag
                }
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
                    this.mediaPresenter = [{name: "Other", "id": 13}];
                    this.mediaPresenterTypeIds = [3]
                } else if (this.showOtherMediaPresenterField && value.find((o) => o.name === "Other")) {
                    this.showOtherMediaPresenterField = false;
                    if (this.mediaPresenterTypeIds.length == 2) {
                        this.mediaPresenter = value.slice(1);
                        this.mediaPresenterTypeIds.splice(0, 1);
                    } else {
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
                    if ("" != value[20]) {
                        this.form.trackingId = value[20];
                    }
                }
                //console.log(value);

            },
            logout: function () {
                this.$emit('logout')
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
                this.addFile(e.target.files);
            },
            onDrop(e) {
                e.preventDefault();
                e.stopPropagation();
                this.isDragging = false;
                this.addFile(e.dataTransfer.files);
            },
            addFile: function (files) {
                var types = /(\.|\/)(m4a|flac|mp3|mp4|wav|wma|acc)$/i;
                if (!!files) {
                    if (types.test(files[0].type) || types.test(files[0].name)) {
                        toastr.info('Audio Selected!')
                        this.file = files[0];
                        this.audioFile = files[0];
                        var template = files[0].name;
                        $('#results').html(template);
                    } else {
                        toastr.error('Warning, Issuer Pixel supports audio files of m4a/flac/mp3/mp4/wav/wma/acc. Please select a supported file, thank you!')
                    }
                }
            },
            showRelatedField: function (field, list) {
                this[list] = Object.keys(field).map((key) => {
                    return field[key].id
                })
            },
            mediaPresenterTypeSelectedHide: function (option) {
                if (!this.mediaPresenterTypeIds.includes(option.id))
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
                axios.get('/api/media-form-data?type=audio')
                    .then(response => {
                        if (!!response.data.data.hierarchy_data) {
                            var responseData = response.data.data;
                            var formMetaData = responseData.meta_data;
                            var formHierarchyData = responseData.hierarchy_data;

                            this.step = response.data.data.step;
                            this.progressStep = response.data.data.step;

                            this.$emit('updateAudioUploadStep', this.step);
                            this.$emit('updateAudioUploadProgressStep', this.progressStep);

                            if (!!formHierarchyData.lookupId) {
                                this.savedCategories = formHierarchyData.lookupId;
                                this.form.lookupId = formHierarchyData.lookupId;
                                this.form.trackingId = formMetaData.trackingId;
                                if (1 == this.step) {
                                    this.$refs.taxonomyChild.getMediaHierarchyInfoForNodeCollapses(this.form.lookupId)
                                    this.$refs.taxonomyChild.tracking_id = formMetaData.trackingId;
                                }
                                if (2 == this.step || 3 == this.step) {

                                    this.getmediaSubTypes();
                                    this.getSubjectTypes();
                                    this.getMediaPresenterType();
                                    this.getPodcastGuestTypes();
                                    this.goBackToPageTopAndNextFieldToEnter();
                                    this.progressBarActiveInactive(this.step);

                                    this.name = formMetaData.name
                                    this.description = formMetaData.description
                                    if (!!formMetaData.publicationDate) {
                                        this.publicationDate = new Date(Date.parse(formMetaData.publicationDate.replace(/[-]/g, '/')))
                                    }
                                    this.publishDay = formMetaData.publishDay
                                    if (!!formMetaData.recodingDate) {
                                        this.recodingDate = new Date(Date.parse(formMetaData.recodingDate.replace(/[-]/g, '/')))
                                    }
                                    if (!!formMetaData.recodingDay) {
                                        this.recodingDay = formMetaData.recodingDay
                                    }
                                    if (!!formMetaData.mediaPresenter) {
                                        this.mediaPresenter = formMetaData.mediaPresenter
                                        this.showRelatedField(formMetaData.mediaPresenter, 'mediaPresenterTypeIds')
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
                                    if (!!formMetaData.subTypeTag) {
                                        this.subTypeTag = formMetaData.subTypeTag
                                        if ('prodcast' == formMetaData.subTypeTag) {
                                            this.subTypeTag = 'prodcast';
                                            this.podcastGuest = formMetaData.podcastGuest;
                                            this.podcastSeriesName = formMetaData.podcastSeriesName;
                                        }
                                    }
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
                    'media_type': 'audio',
                    'hierarchy_data': this.form,
                    'step': this.step,
                    'meta_data': {
                        'name': this.name,
                        'publicationDate': this.publicationDate,
                        'mediaPresenter': mediaPresenterOptions.join(','),
                        'publishDay': this.publishDay,
                        'recodingDate': this.recodingDate,
                        'recodingDay': this.recodingDay,
                        'otherMediaPresenter': this.otherMediaPresenter,
                        'mediaSubType': this.mediaSubType.id,
                        'subTypeTag': this.subTypeTag,
                        'subjectTypeTag': this.subjectTypeTag,
                        'description': this.description,
                        'podcastGuest': this.podcastGuest,
                        'podcastSeriesName': this.podcastSeriesName,
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
                        'media_type': 'audio',
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
                this.$emit('updateAudioUploadStep', this.step);
                this.$emit('updateAudioUploadProgressStep', this.progressStep);
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
                User.mediaSubjectSuggestion({media_type:1, explanation: this.suggestion_explanation, reason: this.suggestion_reason})
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
            this.$emit('updateAudioUploadStep', this.step);
            this.$emit('updateAudioUploadProgressStep', this.progressStep);
        },
        beforeDestroy() {
            this.updateFormData();
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
<style lang="scss" scoped>
    .upload-title {
        margin-top: 30px;
    }

    .dragarea-btn {
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

    .dragarea-btn:hover {
        background-color: #32054b;
        color: #fff;
    }

    .dragarea-btn:focus {
        background-color: #32054b;
        color: #fff;
    }

    .dragarea-btn:active {
        background-color: #32054b !important;
        color: #fff !important;
    }

    div[data-nothingToUpload] {
        display: none;
    }

    .uploader {
        width: 100%;
        padding: 40px 15px;
        text-align: center;
        border-radius: 5px;
        border: 2px dashed #b0a1a1;
        font-size: 20px;
        position: relative;

        &.dragging {
            background: #fff;
            color: #2196F3;
            border: 3px dashed #2196F3;

            .file-input label {
                background: #2196F3;
                color: #fff;
            }
        }

        label {
            margin-top: 10px;
        }

        /*i {
            font-size: 85px;
        }*/

        .file-input {
            width: 200px;
            margin: auto;
            height: 68px;
            position: relative;

            label,
            input {
                color: #fff;
                width: 100%;
                position: absolute;
                left: 0;
                top: 0;
                padding: 10px;
                border-radius: 4px;
                margin-top: 7px;
            }

            input {
                opacity: 0;
                z-index: -2;
            }
        }

        .images-preview {
            display: flex;
            flex-wrap: wrap;
            margin-top: 20px;

            .img-wrapper {
                width: 160px;
                display: flex;
                flex-direction: column;
                margin: 10px;
                height: 150px;
                justify-content: space-between;
                background: #fff;
                box-shadow: 5px 5px 20px #3e3737;

                img {
                    max-height: 105px;
                }
            }

            .details {
                font-size: 12px;
                background: #fff;
                color: #000;
                display: flex;
                flex-direction: column;
                align-items: self-start;
                padding: 3px 6px;

                .name {
                    overflow: hidden;
                    height: 18px;
                }
            }
        }

        .upload-control {
            position: absolute;
            width: 100%;
            background: #fff;
            top: 0;
            left: 0;
            border-top-left-radius: 7px;
            border-top-right-radius: 7px;
            padding: 10px;
            padding-bottom: 4px;
            text-align: right;

            button, label {
                background: #2196F3;
                border: 2px solid #03A9F4;
                border-radius: 3px;
                color: #fff;
                font-size: 15px;
                cursor: pointer;
            }

            label {
                padding: 2px 5px;
                margin-right: 10px;
            }
        }
    }
</style>
