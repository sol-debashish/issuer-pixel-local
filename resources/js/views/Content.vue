<template>
    <div>
        <h4 class="text-theme-dark-blue">Content Library</h4>
        <p class="text-theme-dark-blue"> You currently have {{totalVideo}} video and {{totalAudio}} audio uploaded</p>
        <div class="mb-4">
            <router-link
                class="btn btn-lg dashboard-btn-upload ml-1"
                style="color: #ffffff"
                :to="{ name: 'videoQuestionnaire' }">
                <i class="fa fa-video"></i> Upload Video
            </router-link>
            <router-link
                class="btn btn-lg dashboard-btn-upload ml-0"
                :class="linkGrayOut"
                :to="{ name: 'audioQuestionnaire' }">
                <i class="fa fa-headphones-alt"></i> Upload Audio
            </router-link>
            <!--<router-link
                class="btn btn-sm btn-primary"
                style="color: #ffffff"
                :to="{name: 'DocumentUpload' }">
                Upload Documents
            </router-link>-->
        </div>
        <section class='dashboard pt-0 content-library'>
            <div class="row">
                <div class="col-md-12">
                    <div class="position-relative">
                        <b-tabs class="content-customized-tab">
                            <b-tab title="Video" @click="loadTabContent('video')"
                                   :active="activeTab === 0">
                                <b-card-text>
                                    <!--Channel Search Section Video-->
                                    <div class="search-across-channel">
                                        <div class="input-group">
                                            <div class="input-group-append">
                                                <span class="btn dashboard-search-icon" @click="searchContent('video')">
                                                    <i class="fa fa-search"></i>
                                                </span>
                                            </div>
                                            <input type="text"
                                                   class="form-control dashboard-search-input"
                                                   v-model="videoSearch"
                                                   @keyup.enter="searchContent('video')"
                                                   placeholder="Search across your channel"/>

                                        </div>
                                    </div>
                                    <!--End-->
                                    <div class="table-responsive media-data-list">
                                        <div class="loader" v-if="contentLoading"></div>
                                        <table class="table issuer-content-table">
                                            <thead>
                                            <tr class="text-center">
                                                <th class="text-left">
                                                    <!--                                                    <div class="form-check">-->
                                                    <!--                                                        <label class="form-check-label">-->
                                                    <!--                                                            <input type="checkbox" @click='checkAllVideo()'-->
                                                    <!--                                                                   v-model='ischeckAllVideo' class="form-check-input">Select-->
                                                    <!--                                                            All Video Files-->
                                                    <!--                                                        </label>-->
                                                    <!--                                                    </div>-->
                                                    &nbsp;
                                                </th>
                                                <th style="min-width: 110px">Video Title</th>
                                                <th>Video Subject</th>
                                                <th>Video Type</th>
                                                <th>Classification</th>
                                                <th>Status</th>
                                                <th>Date</th>
                                                <th>Views</th>
                                                <th>Visibility</th>
                                                <th style="min-width: 145px">Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="(video, index) in videos">
                                                <td>
                                                    <div class="video-thumb-table">
                                                        <router-link v-if='video.status == 2' link
                                                                     :to="{ name: 'ViewVideoDetails',params: { slug: slug, id: video.uuid }}">
                                                            <img
                                                                :src="'https://view.vzaar.com/'+ video.video_id +'/image'"
                                                                alt=""
                                                                height="75" width="130"
                                                                class="img img-responsive video-btn video-thumb">
                                                            <!--                                                    <input class="video-checkbox issuer-content-checkbox" v-bind:value='video.id'-->
                                                            <!--                                                           v-model='checkedVideoId' @change='updatecheckAllVideo()'-->
                                                            <!--                                                           type="checkbox">-->
                                                        </router-link>
                                                        <template v-else>
                                                            <img
                                                                :src="'https://view.vzaar.com/'+ video.video_id +'/image'"
                                                                alt=""
                                                                height="75" width="130"
                                                                class="img img-responsive video-btn video-thumb">
                                                        </template>
                                                    </div>
                                                </td>
                                                <td class="text-center media-title-td">{{video.name}}
                                                </td>
                                                <td class="text-center">
                                                    <!--                                                    {{video.video_subject}}-->
                                                    <a href="javascript:;"
                                                       @click.prevent="showAllSubjectModal(video.subject_type, 'Video')">View
                                                        All</a>
                                                </td>
                                                <td class="text-center">{{video.media_sub_type_name}}
                                                </td>
                                                <td class="text-center">
                                                    <a href="javascript:;"
                                                       @click="showAllTaxonomiesModal"
                                                       :data-video-id="video.id"
                                                       :data-uuid="video.uuid"
                                                       :data-taxonomy-id="video.taxonomy_id">View All
                                                    </a>

                                                </td>
                                                <td class="text-center" v-if='video.status == 1'>
                                                    Processing
                                                    <a href="javascript:;"
                                                       v-b-tooltip.hover.top="'This video is currently being processed, it may take up to 2 hours to become available for viewing.'">
                                                        <i class="fas fa-question-circle text-dark"></i>
                                                    </a>
                                                </td>
                                                <td class="text-center" v-else-if='video.status == 2'>
                                                    Available
                                                </td>
                                                <td class="text-center" v-else-if='video.status == 3'>
                                                    Private
                                                </td>
                                                <td class="text-center">{{video.publication_date}}</td>
                                                <td class="text-center">{{numShortFormatter(video.view_counter)}}</td>
                                                <td class="text-center">
                                                    <select :id="'publicationStatusVideo' + video.id"
                                                            class="select-padding"
                                                            @change="changePublishedStatus('video',video.id, video.publish_status)">
                                                        <option value="0"
                                                                v-bind:selected="video.publish_status == 0">
                                                            Unpublished
                                                        </option>
                                                        <option value="1"
                                                                v-bind:selected="video.publish_status == 1">
                                                            Published
                                                        </option>
                                                    </select>
                                                </td>
                                                <td class="text-center cursor-pointer media-action-icon">
                                    <span class="d-inline-block share-icon-media-content"
                                          @click.prevent="shareMediaLink(video.id,video.uuid, video.publish_status,'video-details', slug)"><i
                                        class="fa fa-share-alt share-fa-icon" v-b-tooltip.hover.top="'Share Video'"></i></span>

                                                    <router-link v-if='video.status == 2' link
                                                                 :to="{ name: 'ViewVideoDetails',params: {slug: slug, id: video.uuid }}"
                                                                 class="color-black"><i
                                                        class="fas fa-eye"
                                                        v-b-tooltip.hover.top="'View Video'"></i>
                                                    </router-link>

                                                    <b-dropdown size="md" variant="link"
                                                                toggle-class="text-decoration-none p-0" no-caret>
                                                        <template #button-content>
                                                            <!--                                                                &#x1f50d;<span class="sr-only">Search</span>-->
                                                            <i class="fas fa-pen content-edit-icon"
                                                               v-b-tooltip.hover.top="'Edit Video'"></i>
                                                        </template>
                                                        <b-dropdown-item>
                                                            <router-link class="dropdown-item " link
                                                                         :to="{ name: 'VideoStepOneEdit',params: { id: video.id }}">
                                                                Edit Video Classification
                                                            </router-link>
                                                        </b-dropdown-item>
                                                        <b-dropdown-item>
                                                            <router-link class="dropdown-item " link
                                                                         :to="{ name: 'VideoStepTwoEdit',params: { id: video.id }}">
                                                                Edit Video Details
                                                            </router-link>
                                                        </b-dropdown-item>
                                                    </b-dropdown>

                                                    <!--<i class="fas fa-pen content-edit-icon"
                                                       data-toggle="dropdown"
                                                       v-b-tooltip.hover.top="'Edit Video'"></i>
                                                    <div
                                                        class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                                        <router-link class="dropdown-item " link
                                                                     :to="{ name: 'VideoStepOneEdit',params: { id: video.id }}">
                                                            Edit Video Categorization
                                                        </router-link>
                                                        <router-link class="dropdown-item " link
                                                                     :to="{ name: 'VideoStepTwoEdit',params: { id: video.id }}">
                                                            Edit Video Details
                                                        </router-link>
                                                    </div>-->

                                                    <i class="fa fa-trash-alt color-red"
                                                       v-b-tooltip.hover.top="'Remove  Video'"
                                                       @click="deleteMedia(video, 'videos')"></i>
                                                </td>
                                            </tr>
                                            <tr v-if="! videos.length">
                                                <td colspan="10" class="text-center">No video file
                                                    found
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="10">
                                                    <pagination v-if="videoPagination.last_page > 1"
                                                                :pagination="videoPagination"
                                                                :offset="5"
                                                                @paginate="getVideoList()"></pagination>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="Audio" @click="loadTabContent('audio')"
                                   :active="activeTab === 1">
                                <b-card-text>
                                    <!--Channel Search Section Audio-->
                                    <div class="search-across-channel">
                                        <div class="input-group">
                                            <div class="input-group-append">
                                            <span class="btn dashboard-search-icon" @click="searchContent('audio')">
                                                <i class="fa fa-search"></i>
                                            </span>
                                            </div>
                                            <input type="text"
                                                   class="form-control dashboard-search-input"
                                                   v-model="audioSearch"
                                                   @keyup.enter="searchContent('audio')"
                                                   placeholder="Search across your channel"/>
                                        </div>
                                    </div>
                                    <!--End-->
                                    <div class="table-responsive">
                                        <table class="table issuer-content-table media-data-list">
                                            <div class="loader" v-if="contentLoading"></div>
                                            <thead>
                                            <tr class="text-center">
                                                <th class="text-left">
                                                    <!--                                                    <div class="form-check">-->
                                                    <!--                                                        <label class="form-check-label">-->
                                                    <!--                                                            <input type="checkbox" @click='checkAllAudio()'-->
                                                    <!--                                                                   v-model='ischeckAllAudio' class="form-check-input">Select-->
                                                    <!--                                                            All Audio Files-->
                                                    <!--                                                        </label>-->
                                                    <!--                                                    </div>-->
                                                    &nbsp;
                                                </th>
                                                <th style="min-width: 110px">Audio Title</th>
                                                <th>Audio Subject</th>
                                                <th>Audio Type</th>
                                                <th>Classification</th>
                                                <th>Status</th>
                                                <th>Date</th>
                                                <th>Listens</th>
                                                <th>Visibility</th>
                                                <th style="min-width: 145px">Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="audio in audios">
                                                <td>
                                                    <router-link link
                                                                 :to="{ name: 'ViewAudioDetails',params: { slug: slug, id: audio.uuid }}">
                                                        <img src="/images/audio_thumb.png" alt=""
                                                             height="75"
                                                             width="130">
                                                        <!--                                                    <input class="video-checkbox issuer-content-checkbox" v-bind:value='audio.id'-->
                                                        <!--                                                           v-model='checkedAudioId' @change='updatecheckAllAudio()'-->
                                                        <!--                                                           type="checkbox">-->
                                                    </router-link>
                                                </td>
                                                <td class="text-center media-title-td">{{audio.name}}
                                                </td>
                                                <td class="text-center">
                                                    <a href="javascript:;"
                                                       @click.prevent="showAllSubjectModal(audio.subject_type, 'Audio')">View
                                                        All</a>
                                                </td>
                                                <td class="text-center">{{audio.media_sub_type_name}}</td>
                                                <td class="text-center">
                                                    <a href="javascript:;"
                                                       @click="showAllTaxonomiesModal"
                                                       :data-audio-id="audio.id"
                                                       :data-uuid="audio.uuid"
                                                       :data-taxonomy-id="audio.taxonomy_id">View All</a>

                                                </td>
                                                <td class="text-center" v-if='audio.status == 1'>Under
                                                    process
                                                </td>
                                                <td class="text-center" v-else-if='audio.status == 2'>
                                                    Available
                                                </td>
                                                <td class="text-center" v-else-if='audio.status == 3'>
                                                    Private
                                                </td>
                                                <td class="text-center">{{audio.publication_date}}</td>
                                                <td class="text-center">{{numShortFormatter(audio.view_counter)}}</td>
                                                <td class="text-center">
                                                    <select class="select-padding"
                                                            :id="'publicationStatusAudio' + audio.id"
                                                            @change="changePublishedStatus('audio',audio.id, audio.publish_status)">
                                                        <option value="0"
                                                                v-bind:selected="audio.publish_status == 0">
                                                            Unpublished
                                                        </option>
                                                        <option value="1"
                                                                v-bind:selected="audio.publish_status == 1">
                                                            Published
                                                        </option>
                                                    </select>
                                                </td>
                                                <td class="text-center cursor-pointer media-action-icon">
                                                    <span class="d-inline-block share-icon-media-content"
                                                          @click.prevent="shareMediaLink(audio.id,audio.uuid, audio.publish_status,'audio-details', slug)"><i
                                                        class="fa fa-share-alt share-fa-icon" v-b-tooltip.hover.top="'Share  Audio'"></i>
                                                    </span>
                                                    <router-link link
                                                                 :to="{ name: 'ViewAudioDetails',params: { slug: slug, id: audio.uuid }}"
                                                                 class="color-black"><i
                                                        class="fas fa-eye"
                                                        v-b-tooltip.hover.top="'View  Audio'"></i>
                                                    </router-link>
                                                    <b-dropdown size="md" variant="link"
                                                                toggle-class="text-decoration-none p-0" no-caret>
                                                        <template #button-content>
                                                            <i class="fas fa-pen" data-toggle="dropdown"
                                                               v-b-tooltip.hover.top="'Edit Audio'"></i>
                                                        </template>
                                                        <b-dropdown-item>
                                                            <router-link class="dropdown-item " link
                                                                         :to="{ name: 'AudioStepOneEdit',params: { id: audio.id}}">
                                                                Edit Audio Classification
                                                            </router-link>
                                                        </b-dropdown-item>
                                                        <b-dropdown-item>
                                                            <router-link class="dropdown-item " link
                                                                         :to="{ name: 'AudioStepTwoEdit',params: { id: audio.id }}">
                                                                Edit Audio Details
                                                            </router-link>
                                                        </b-dropdown-item>
                                                    </b-dropdown>
                                                    <!--<i class="fas fa-pen" data-toggle="dropdown"
                                                       v-b-tooltip.hover.top="'Edit Audio'"></i>
                                                    <div
                                                        class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                                        <router-link class="dropdown-item " link
                                                                     :to="{ name: 'AudioStepOneEdit',params: { id: audio.id}}">
                                                            Edit Audio Categorization
                                                        </router-link>
                                                        <router-link class="dropdown-item " link
                                                                     :to="{ name: 'AudioStepTwoEdit',params: { id: audio.id }}">
                                                            Edit Audio Details
                                                        </router-link>
                                                    </div>-->
                                                    <i class="fa fa-trash-alt color-red"
                                                       v-b-tooltip.hover.top="'Remove Audio'"
                                                       @click="deleteMedia(audio, 'audios')"></i>
                                                </td>
                                            </tr>

                                            <tr v-if="! audios.length">
                                                <td colspan="10" class="text-center">No audio file
                                                    found
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="10">
                                                    <pagination v-if="audioPagination.last_page > 1"
                                                                :pagination="audioPagination"
                                                                :offset="5"
                                                                @paginate="getAudioList()"></pagination>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </b-card-text>
                            </b-tab>
                            <!--<b-tab title="Documents" @click="loadTabContent('document')" :active="activeTab === 2">
                                <b-card-text>
                                    &lt;!&ndash;Channel Search Section Video&ndash;&gt;
                                    <div class="search-across-channel">
                                        <form>
                                            <div class="input-group">
                                                <input type="text" class="form-control dashboard-search-input"
                                                       placeholder="Search across your channel">
                                                <div class="input-group-append">
                                                <span class="btn dashboard-search-icon">
                                                    <i class="fa fa-search"></i>
                                                </span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    &lt;!&ndash;End&ndash;&gt;
                                    <div class="table-responsive">
                                        <table class="table issuer-content-table">
                                            <thead>
                                            &lt;!&ndash;<tr>
                                                <td colspan="4"><i class="fas fa-sort-amount-up"></i> Filter</td>
                                            </tr>&ndash;&gt;
                                            <tr>
                                                <th>
                                                    <div class="form-check">
                                                        <label class="form-check-label">
                                                            <input type="checkbox" class="form-check-input" value="">Select
                                                            All
                                                            Files
                                                        </label>
                                                    </div>
                                                </th>
                                                <th>Status</th>
                                                <th>Date</th>
                                                <th>Views</th>
                                                <th>Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td colspan="5">No file found
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </b-card-text>
                            </b-tab>-->
                        </b-tabs>
                    </div>
                </div>
            </div>
            <loader :is-visible="isLoading"></loader>

            <!-- All Taxonomies modal started -->
            <b-modal centered ref="all-taxonomies-modal" id="all-taxonomies-modal" size="xl" hide-footer
                     title="All Classification">
                <!--<div class="mx-auto categorization-container text-center">
                    <div class="inner">
                        <b-card
                            no-body
                            class="pb-3 border-0 d-inline-block categorization-item"
                            v-for="(each,index) in mediaHierarchyInfo"
                            :key="each.categorization_id"
                        >
                            <ExistingTaxonomyNodeCollapses v-bind:each="each" :objectIndex="index"
                                                           hideEditButtion=true></ExistingTaxonomyNodeCollapses>
                        </b-card>
                        <div v-if="mediaHierarchyInfo.length === 0" class="text-center">
                            No results
                        </div>
                    </div>
                </div>-->
                <div class="row mx-auto w-100 text-center modal-classifications-container">
                    <div
                        no-body
                        class="border-0 col-lg-3 col-md-4 pb-3"
                        v-for="(each,index) in mediaHierarchyInfo"
                        :key="each.categorization_id"
                    >
                        <CompanyNodeCollapses v-bind:each="each" :objectIndex="index" :enableEditButton="enableClassificationsEditButton"></CompanyNodeCollapses>

                    </div>
                </div>
            </b-modal>
            <!-- End All Taxonomies modal -->
            <!--Publication Status check Modal-->
            <!--<b-modal
                id="modalCheckPublicationStatus"
                ref="modal"
                title="Warning"
                size="md"
                centered
              >
                <div class="text-center">
                    <p class="font-weight-bold">Would you like to publish this content so it is visible to users with
                        the URL?</p>
                </div>
                <template #modal-footer="{cancel}">
                    <b-button size="md" variant="success" class="font-weight-bold" @click="publishedAndShareLink()">
                        YES
                    </b-button>
                    <b-button size="md" variant="secondary" @click="cancel()" class="font-weight-bold">
                        NO
                    </b-button>
                </template>
            </b-modal>-->
            <!--Share Link Copy modal Modal-->
            <b-modal
                id="modalShareLink"
                ref="modalShareLink"
                title="Share"
                size="lg"
                centered
                class="min-modal-height"
                hide-footer>
                <share-modal :publicShareLink="this.publicShareLink" :sharableMediaId="this.sharableMediaId" :shareMediaType="this.shareMediaType"></share-modal>
            </b-modal>
            <!--show All Subject Modal-->
            <b-modal
                id="modalAllSubject"
                ref="modalAllSubject"
                :title="allSubjectModalTitle"
                centered
                hide-footer title-class="modal-title-new">
                <ul class="text-center pl-0 modal-list-data">
                    <li v-for="mediaSubject in selectedMediaSubject">{{mediaSubject.name}}</li>
                </ul>
            </b-modal>
        </section>
    </div>
</template>

<script>
    import Content from "../apis/Content";
    import Common from "../apis/Common";
    /*import sidebar from '../components/Sidebar'
    import Navigation from "../components/Navigation.vue";
    import ProfileCompleteBanner from "../components/ProfileCompleteBanner";
    import ExistingTaxonomyNodeCollapses from "../components/company/ExistingTaxonomyNodeCollapses";*/
    import CompanyNodeCollapses from "../components/CompanyNodeCollapses";

    export default {
        data() {
            return {
                // ischeckAllVideo: false,
                // ischeckAllAudio: false,
                videoSearch: "",
                audioSearch: "",
                totalVideo: 1,
                totalAudio: 0,
                isLoading: false,
                // videoIds: [],
                // audioListIds: [],
                // checkedVideoId: [],
                // checkedAudioId: [],
                // selectedVideoId: "",
                // selectedAudiooId: "",
                mediaHierarchyInfo: "",
                activeTab: 0,
                industryColor: "#D4AF37",
                audios: [],
                videos: [],
                audioUrl: '',
                audioName: '',
                videoSrc: '',
                audioTabContentLoaded: false,
                videoTabContentLoaded: false,
                contentLoading: false,
                videoPagination: {
                    'current_page': 1
                },
                audioPagination: {
                    'current_page': 1
                },
                publicShareLink: "",
                sharableMediaId: "",
                sharableMediaUUId: "",
                shareMediaType: "",
                allSubjectModalTitle: "",
                selectedMediaSubject: [],
                linkGrayOut: '',
                enableClassificationsEditButton: false,
                slug: '',
            };
        },
        methods: {
            showModal(e) {
                this.audioUrl = e.target.getAttribute('data-audio-url');
                this.audioName = e.target.getAttribute('data-audio-name');

                this.$root.$emit('bv::show::modal', 'modal-view-audio', '#btnShow')
            },
            getAudioList(clearPage = false) {
                // this.ischeckAllAudio = false;
                // this.audioListIds = [];
                // this.checkedVideoId = [];
                // this.selectedAudiooId = "";
                if (clearPage) {
                    this.audioPagination.current_page = 1;
                    this.contentLoading = true
                } else {
                    this.isLoading = true
                }
                Content.audio(this.audioPagination.current_page, this.audioSearch)
                    .then((response) => {
                        this.isLoading = false
                        this.contentLoading = false
                        this.audios = [],
                            this.audios = response.data.data.data.data;
                        this.audioPagination = response.data.data.pagination;
                        this.totalAudio = response.data.data.data.total;
                        this.totalVideo = response.data.data.total_video;
                        // this.audioListIds = Object.keys(this.audios).map((key) => {
                        //     return this.audios[key].id
                        // })
                    })
                    .catch(error => {
                        if (!!error.response) {
                            this.isLoading = false
                            this.contentLoading = false
                            if (error.response.status == 401) {
                                this.$emit('logout')
                            }
                        }
                    });
            },
            getVideoList(clearPage = false) {
                // this.ischeckAllVideo = false;
                // this.videoIds = [];
                // this.checkedVideoId = [];
                // this.selectedVideoId = "";
                if (clearPage) {
                    this.videoPagination.current_page = 1;
                    this.contentLoading = true
                } else {
                    this.isLoading = true
                }
                Content.video(this.videoPagination.current_page, this.videoSearch)
                    .then((response) => {
                        this.isLoading = false
                        this.contentLoading = false
                        this.videos = [];
                        this.videos = response.data.data.data.data;
                        this.videoPagination = response.data.data.pagination;
                        this.totalVideo = response.data.data.data.total;
                        this.totalAudio = response.data.data.total_audio;
                        // this.videoIds = Object.keys(this.videos).map((key) => {
                        //     return this.videos[key].id
                        // })
                    })
                    .catch(error => {
                        if (!!error.response) {
                            this.isLoading = false
                            this.contentLoading = false
                            if (error.response.status == 401) {
                                this.$emit('logout')
                            }
                        }
                    });
            },
            deleteMedia: function (item, type) {
                var vueInstance = this;
                $.confirm({
                    title: 'Are you sure you want to remove this file?',
                    content: '<hr class="m-0">',
                    titleClass: 'font-weight-bold text-center jconfirm-modal-title',
                    closeIcon: true,
                    columnClass: 'medium',
                    animation: 'top',
                    closeAnimation: 'top',
                    bgOpacity: 0.6,
                    buttons: {
                        Yes: {
                            btnClass: 'btn-success rounded-pill mr-3',
                            action: function () {
                                vueInstance.isLoading = true
                                Content.deleteMediaFile(item.id)
                                    .then((response) => {
                                        vueInstance.isLoading = false
                                        var index = vueInstance[type].indexOf(item)
                                        vueInstance[type].splice(index, 1)
                                        toastr.success(response.data.success.message)
                                    })
                                    .catch(error => {
                                        vueInstance.isLoading = false
                                        if (error.response.status === 403) {
                                            toastr.error(error.response.data.error.message)
                                        } else if (error.response.status == 401) {
                                            this.$emit('logout')
                                        } else {
                                            toastr.error(error)
                                        }
                                    });
                            },
                        },
                        Cancel: {
                            btnClass: 'btn-default rounded-pill'
                        },
                    }
                });
            },
            loadTabContent: function (type) {

                switch (type) {
                    case 'video':
                        if (!this.videoTabContentLoaded) {
                            this.getVideoList();
                            this.videoTabContentLoaded = true
                        }
                        this.activeTab = 0
                        break;
                    case 'audio':
                        if (!this.audioTabContentLoaded) {
                            this.getAudioList();
                            this.audioTabContentLoaded = true
                        }
                        this.activeTab = 1
                        break;
                    case 'document':
                        this.activeTab = 2
                        break;
                }
            },
            randomColor(index) {

                let industryColor;
                if (index == 0) {
                    industryColor = '#990100';
                } else if ((index % 3) == 0) {
                    industryColor = '#990100';
                } else if ((index % 3) == 1) {
                    industryColor = '#ED7E31';
                } else if ((index % 3) == 2) {
                    industryColor = '#2F9898';
                }
                return industryColor;
            },
            showAllSubjectModal: function (data, type) {
                this.allSubjectModalTitle = "Subjects of Company " + type
                this.selectedMediaSubject = data
                this.$bvModal.show('modalAllSubject');
            },
            // checkAllVideo: function () {
            //
            //     this.ischeckAllVideo = !this.ischeckAllVideo;
            //     this.checkedVideoId = [];
            //     if (this.ischeckAllVideo) { // Check all
            //         for (var key in this.videoIds) {
            //             this.checkedVideoId.push(this.videoIds[key]);
            //         }
            //     }
            // },
            // updatecheckAllVideo: function () {
            //     if (this.checkedVideoId.length == this.videoIds.length) {
            //         this.ischeckAllVideo = true;
            //     } else {
            //         this.ischeckAllVideo = false;
            //     }
            // },
            // checkAllAudio: function () {
            //     this.ischeckAllAudio = !this.ischeckAllAudio;
            //     this.checkedAudioId = [];
            //     if (this.ischeckAllAudio) { // Check all
            //
            //         for (var key in this.audioListIds) {
            //             this.checkedAudioId.push(this.audioListIds[key]);
            //         }
            //     }
            // },
            // updatecheckAllAudio: function () {
            //     if (this.checkedAudioId.length == this.audioListIds.length) {
            //         this.ischeckAllAudio = true;
            //     } else {
            //         this.ischeckAllAudio = false;
            //     }
            // },
            // printValues: function () {
            //     this.selectedVideoId = "";
            //     // Read Checked checkboxes value
            //     for (var key in this.checkedVideoId) {
            //         this.selectedVideoId += this.checkedVideoId[key] + ", ";
            //     }
            // },
            showAllTaxonomiesModal: function (event) {
                this.isLoading = true
                this.mediaHierarchyInfo = []
                axios.get('/api/get-media-categorization-lookup-for-collapse?id=' + event.target.getAttribute('data-taxonomy-id')+'&uuid='+ event.target.getAttribute('data-uuid'))
                    .then((response) => {
                        this.mediaHierarchyInfo = response.data.data
                        this.$refs['all-taxonomies-modal'].show()
                        this.isLoading = false
                    })
                    .catch(error => {
                        this.isLoading = false
                        if (error.response.status === 422) {
                            toastr.error(error.response.data.error.message)
                        } else if (error.response.status == 401) {
                            this.$emit('logout')
                        } else {
                            toastr.error(error)
                        }
                    });
            },
            searchContent: function (type) {
                if ('video' == type) {
                    this.getVideoList('clearPage')
                } else if ('audio' == type) {
                    this.getAudioList('clearPage')
                }
            },
            shareMediaLink: function (mediaId, mediaUId, publicationStatus, type, slug) {
                this.sharableMediaId = mediaId;
                this.sharableMediaUUId = mediaUId;
                this.shareMediaType = type;
                this.oneClickShareData = [];
                this.ischeckAllSocial = false;
                this.oneClickMessage = "";
                if (publicationStatus == 0) {
                    // this.$bvModal.show('modalCheckPublicationStatus');
                    this.publishedAndShareLink();
                } else {
                    this.publicShareLink = document.location.origin + '/company/' + slug + '/' + type + '/' + mediaUId;
                    this.$bvModal.show('modalShareLink');
                }
            },
            publishedAndShareLink: function () {
                Content.changeMediaFileStatus({'id': this.sharableMediaId, 'status': 0})
                    .then((response) => {
                        this.publicShareLink = document.location.origin + '/company/'  + this.slug + '/' + this.shareMediaType + '/' + this.sharableMediaUUId;
                        this.publicationStatus = 1;
                        if (this.shareMediaType == 'video-details') {
                            $('#publicationStatusVideo' + this.sharableMediaId).val(1).trigger("change");
                        }
                        if (this.shareMediaType == 'audio-details') {
                            $('#publicationStatusAudio' + this.sharableMediaId).val(1).trigger("change");
                        }
                    })
                    .catch(error => {
                        toastr.error(error)
                    });
                //this.$bvModal.hide('modalCheckPublicationStatus');
                this.$bvModal.show('modalShareLink');
            },
            changePublishedStatus: function (type, itemId, currentStatus) {
                var vueInstance = this;
                $.confirm({
                    title: 'Publish status changes',
                    content: "Are you sure you want to change publish status?",
                    buttons: {
                        Yes: {
                            btnClass: 'btn-success',
                            action: function () {
                                vueInstance.isLoading = true
                                Content.changeMediaFileStatus({'id': itemId, 'status': currentStatus})
                                    .then((response) => {
                                        vueInstance.isLoading = false
                                        toastr.success(response.data.success.message)
                                    })
                                    .catch(error => {
                                        vueInstance.isLoading = false
                                        if (error.response.status === 403) {
                                            toastr.error(error.response.data.error.message)
                                        } else if (error.response.status == 401) {
                                            this.$emit('logout')
                                        } else {
                                            toastr.error(error)
                                        }
                                    });
                            },
                        },
                        Cancel: {
                            action: function () {
                                if (type == 'video') {
                                    $('#publicationStatusVideo' + itemId).val(currentStatus).trigger("change");
                                }
                                if (type == 'audio') {
                                    $('#publicationStatusAudio' + itemId).val(currentStatus).trigger("change");
                                }
                            }
                        }
                    }
                });
            },
        },
        mounted() {
            this.slug = localStorage.getItem('companySlugName');
            if (localStorage.getItem('videoUploadRemainingDays') == 0 && localStorage.getItem('isVideoUploaded') == 'no') {
                this.linkGrayOut = 'trialExpired';
            }
            switch (this.$route.hash) {
                case '#video':
                    this.activeTab = 0
                    break;
                case '#audio':
                    this.activeTab = 1
                    this.getAudioList();
                    this.audioTabContentLoaded = true
                    break;
                case '#file':
                    this.activeTab = 2
                    break;
            }
        },
        created: function () {
            this.numShortFormatter = Common.ViewListenNumFormatter;
            this.getVideoList();
            //this.socialSharing();
            document.addEventListener('keydown', function(evt){
                if (evt.keyCode == 27) {
                    if(!!jconfirm.instances[0]){
                        jconfirm.instances[0].close();
                    }
                }
            });
        },
        components: {
            loader: () => import("../components/Loader"),
            pagination: () => import("../components/PaginationComponent"),
            ShareModal: () => import("../components/ShareModal"),
            CompanyNodeCollapses,
            /*sidebar,
            Navigation,
            ProfileCompleteBanner,
            ExistingTaxonomyNodeCollapses,*/
        }
    };
</script>
<style scoped>
    .video-checkbox {
        vertical-align: top;
        float: left;
        margin-right: 5px;
    }

    .video-thumb {
        background-size: 130px;
    }

    .media-data-list { /* Components Root Element ID */
        position: relative;
    }

    .loader { /* Loader Div Class */
        position: absolute;
        top: 0px;
        right: 0px;
        width: 100%;
        height: 100%;
        background-color: #eceaea;
        background-image: url(/images/small-loader.gif);
        background-size: 50px;
        background-repeat: no-repeat;
        background-position: center;
        z-index: 10000000;
        opacity: 0.4;
        filter: alpha(opacity=40);
    }

    select.select-padding {
        padding: 5px;
    }

    .modal-list-data {
        list-style: inside;
    }

    .share-container{
        text-align: center;
        margin: 35px 80px;
        padding: 20px;
        border-radius: 6px;
        box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.25);
    }
    .modal-share-icon {
        padding: 15px;
        background-color: #f7f7fa;
        position: relative;
        vertical-align: middle;
    }
    .share-choose-icon a{
        color: #000000;
    }
</style>

<style>
    .jconfirm-modal-title {
        font-size: 16px !important;
        color: #1e0857;
    }
    .content-library .jconfirm-buttons {
        float: none !important;
        display: flex;
        justify-content: center;
    }
    .tooltip { top: 0; }
</style>
