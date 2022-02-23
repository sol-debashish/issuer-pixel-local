<template>
    <div class="dashboard">
        <div class="container-fluid px-0">
            <div v-if="audioUnpublished" class="row collapse show no-gutters d-flex h-100 position-relative">
                <div class="col text-center mb-5">
                    <img src="/images/issuerpixel_logo.png" alt="issuerpixel_logo" class="">
                    <h3 class="mt-2">Audio has been made Private by owner.</h3>
                </div>
            </div>
            <div v-else>
                <div v-if="isLoggedIn" class="pb-2">
                    <router-link :to="{name: 'Content', 'hash': '#audio'}" class="btn btn-back-next media-details-page-back-btn"><i
                        class="fas fa-chevron-left"></i> Back to Content Library
                    </router-link>
                    <span class="text-theme-dark-blue fs-14 pl-2">Content Library <i class="fa fa-arrow-right"></i> {{audioTitle}}</span>
                </div>
                <div class="row collapse show no-gutters d-flex h-100 position-relative">
                    <div class="col-lg-4">
                        <div class="text-center">
                            <h4 class="media-details-page-title">Audio Classifications</h4>
                            <div class="media-categorization-scroll-tab mx-auto">
                                <div class="px-4">
                                    <div class="position-relative" v-if="enableTabNavigation">
                                    <span class="position-absolute tab-navigation-left-icons"
                                          @click.prevent="navigateTabScrollOnLeft">
                                        <i class="fas fa-chevron-left"></i>
                                    </span>
                                        <span class="position-absolute tab-navigation-right-icons"
                                              @click.prevent="navigateTabScrollOnRight">
                                        <i class="fas fa-chevron-right"></i>
                                    </span>
                                    </div>
                                    <b-tabs v-model="tabIndex"
                                            active-nav-item-class="text-primary"
                                            active-tab-class=""
                                            class="media-categorization-tab"
                                            content-class="">
                                        <template v-if="mediaHierarchyInfo.length > 0">
                                            <template v-for="(each,index) in mediaHierarchyInfo">
                                                <b-tab :active="activeTab === index">
                                                    <template #title>
                                                        Classification {{index+1}}
                                                    </template>
                                                    <template>
                                                        <div class="mt-2">
                                                            <MediaDetailsCategoryTabContent v-bind:each="each"
                                                                                            v-bind:objectIndex="index"
                                                                                            ref="category"></MediaDetailsCategoryTabContent>
                                                        </div>
                                                    </template>
                                                </b-tab>
                                            </template>
                                        </template>
                                    </b-tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="" :class="dynamicColumnClass">
                        <h4 class="text-center media-details-page-title">Audio Details</h4>
                        <div id="visualizations-player">
                            <div class="top-container">
                                <!--                            <img class="now-playing-album-art" id="large-now-playing-album-art" data-amplitude-song-info="cover_art_url"/>-->
                                <div class="amplitude-visualization" id="large-visualization">
                                    <div v-if="audioUnavailable"
                                         class="h-100 d-flex justify-content-center align-items-center video-audio-unavailable-error-message">
                                        Audio unavailable
                                    </div>
                                </div>
                                <!--                            <div class="amplitude-repeat"></div>-->
                            </div>

                            <div class="meta-data-container">
                                <span class="now-playing-name" data-amplitude-song-info="name"></span>
                                <span class="now-playing-artist-album"></span>
                            </div>

                            <div class="song-navigation">
                                <input type="range" class="amplitude-song-slider"/>
                            </div>
                            <div class="clearfix">
                                <span class="amplitude-current-time float-left"></span>

                                <span class="amplitude-time-remaining"></span>
                            </div>

                            <div class="control-container">
                                <div id="central-control-container">
                                    <div id="central-controls" class="position-relative">
                                        <div class="amplitude-backward" @click="audioStepBackward"><i
                                            class="fas fa-step-backward"></i></div>
                                        <div class="amplitude-backward" @click="audioBackward"><i
                                            class="fas fa-backward"></i></div>
                                        <div class="amplitude-play-pause" id="play-pause"></div>
                                        <div class="amplitude-forward" @click="audioForward"><i
                                            class="fas fa-forward"></i>
                                        </div>
                                        <div class="amplitude-forward" @click="audioStepForward"><i
                                            class="fas fa-step-forward"></i></div>

                                        <div id="volume-container">
                                            <div class="volume-controls">
                                                <div class="amplitude-mute amplitude-not-muted"></div>
                                                <input type="range" class="amplitude-volume-slider"/>
                                                <div class="ms-range-fix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <template v-if="!audioUnavailable">
                            <div class="row py-2 fs-16">
                                <div class="col-md-8 pr-0">
                                    <!--<div class="row">
                                        <div class="col-md-8 pr-1">
                                            <span class="media-title-text">{{audioTitle}}</span>
                                        </div>
                                        <div class="col-md-4 p-0">
                                            <span class="text-theme-dark-blue font-weight-bold">Participants:</span> <a href="javascript:;" @click.prevent="showAllPresenterModal">View All</a>
                                        </div>
                                    </div>-->
                                    <span class="media-title-text">{{audioTitle}}</span>
                                </div>
                                <!--<div class="col-md-2 text-right pr-0 pt-1">
                                    <div class="float-right text-center cursor-pointer" @click.prevent="shareMediaLink">
                                        <span class="d-inline-block share-icon-media-details"><i
                                            class="fa fa-share-alt share-fa-icon-details"></i></span>
                                        <span class="share-text">SHARE</span>
                                    </div>
                                </div>-->
                                <div class="col-md-4 text-right pt-1 pl-0">
                                    <span v-if="userId && senderCompanyId != companyId" class="btn btn-back-next btn-message" href="javascript:;" @click.prevent="showMessageModal">Message</span>
                                    <router-link class="btn btn-back-next btn-view-profile-media-details" :to="'/company/' + companySlug" >View Profile</router-link>
                                <span class="cursor-pointer pr-1" @click.prevent="shareMediaLink">
                                 <span class="d-inline-block share-icon-media-details"><i
                                     class="fa fa-share-alt share-fa-icon-details"></i></span>
                                <span class="share-text">SHARE</span>
                                    </span>
                                </div>
                            </div>
                            <div class="row audio-video-tag fs-14">
                                <div class="col">
                                    <ul>
                                        <li><span
                                            class="total-view">{{this.numShortFormatter(listenCounter + 1)}} Views</span>
                                        </li>
                                        <li>{{publicationDate}}</li>
                                        <li>{{audioMediaType}}</li>
                                        <li>
                                            <a href="javascript:;" @click.prevent="showAllSubjectModal">View Subjects</a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" @click.prevent="showAllPresenterModal">View Participants</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="text-justify pt-2 fs-14">
                                {{audioDescription}}
                            </div>
                            <p class="custom-hr-theme mt-3"></p>
                            <h4 class="pb-2 text-theme-dark-blue fs-16 text-center">Other Audios by {{companyName}}</h4>
                            <b-carousel controls>
                                <template v-for="(audio, index) in otherAudio">
                                    <template v-if="index%4==0">
                                        <b-carousel-slide>
                                            <template v-slot:img>
                                                <b-card-group>
                                                    <b-link
                                                        :to="{ name: 'ViewAudioDetails',params: {slug: otherAudio[index].company_slug, id: otherAudio[index].uuid }}"
                                                        @click.native="updateViewKey">
                                                        <b-card class="mx-1 carousel-card-link"
                                                                :img-src="'/images/audio_thumb.png'">
                                                            <div class=''>
                                                                <img class="rounded-circle float-left mr-1"
                                                                     :src="'/images/audio_thumb.png'" width="25" height="25"/>
                                                                <p class="warp-text-title">{{otherAudio[index].name}}</p>
                                                                <div class="company-title warp-text-title">
                                                                    {{companyName}}
                                                                </div>
                                                                <ul class="content-ul">
                                                                    <li>{{numShortFormatter(otherAudio[index].view_counter)}} Views</li>
                                                                    <li>{{otherAudio[index].created}}</li>
                                                                </ul>
                                                            </div>
                                                        </b-card>
                                                    </b-link>
                                                    <template v-if="otherAudio[index+1] !=undefined">
                                                        <b-link
                                                            :to="{ name: 'ViewAudioDetails',params: {slug: otherAudio[index+1].company_slug, id: otherAudio[index+1].uuid }}"
                                                            @click.native="updateViewKey">
                                                            <b-card class="mx-1 carousel-card-link"
                                                                    :img-src="'/images/audio_thumb.png'">
                                                                <div class=''>
                                                                    <img class="rounded-circle float-left mr-1"
                                                                         :src="'/images/audio_thumb.png'" width="25" height="25"/>
                                                                    <p class="warp-text-title">{{otherAudio[index+1].name}}</p>
                                                                    <div class="company-title warp-text-title">
                                                                        {{companyName}}
                                                                    </div>
                                                                    <ul class="content-ul">
                                                                        <li>{{numShortFormatter(otherAudio[index+1].view_counter)}} Views</li>
                                                                        <li>{{otherAudio[index+1].created}}</li>
                                                                    </ul>
                                                                </div>
                                                            </b-card>
                                                        </b-link>
                                                    </template>
                                                    <template v-else>
                                                        <div class=""></div>
                                                    </template>
                                                    <template v-if="otherAudio[index+2] !=undefined">
                                                        <b-link
                                                            :to="{ name: 'ViewAudioDetails',params: {slug: otherAudio[index+2].company_slug, id: otherAudio[index+2].uuid }}"
                                                            @click.native="updateViewKey">
                                                            <b-card class="mx-1 carousel-card-link"
                                                                    :img-src="'/images/audio_thumb.png'">
                                                                <div class=''>
                                                                    <img class="rounded-circle float-left mr-1"
                                                                         :src="'/images/audio_thumb.png'" width="25" height="25"/>
                                                                    <p class="warp-text-title">{{otherAudio[index+2].name}}</p>
                                                                    <div class="company-title warp-text-title">
                                                                        {{companyName}}
                                                                    </div>
                                                                    <ul class="content-ul">
                                                                        <li>{{numShortFormatter(otherAudio[index+2].view_counter)}} Views</li>
                                                                        <li>{{otherAudio[index+2].created}}</li>
                                                                    </ul>
                                                                </div>
                                                            </b-card>
                                                        </b-link>
                                                    </template>
                                                    <template v-else>
                                                        <div class=""></div>
                                                    </template>
                                                    <template v-if="otherAudio[index+3] !=undefined">
                                                        <b-link
                                                            :to="{ name: 'ViewAudioDetails',params: {slug: otherAudio[index+3].company_slug, id: otherAudio[index+3].uuid }}"
                                                            @click.native="updateViewKey">
                                                            <b-card class="mx-1 carousel-card-link"
                                                                    :img-src="'/images/audio_thumb.png'">
                                                                <div class=''>
                                                                    <img class="rounded-circle float-left mr-1"
                                                                         :src="'/images/audio_thumb.png'" width="25" height="25"/>
                                                                    <p class="warp-text-title">{{otherAudio[index+3].name}}</p>
                                                                    <div class="company-title warp-text-title">
                                                                        {{companyName}}
                                                                    </div>
                                                                    <ul class="content-ul">
                                                                        <li>{{numShortFormatter(otherAudio[index+3].view_counter)}} Views</li>
                                                                        <li>{{otherAudio[index+3].created}}</li>
                                                                    </ul>
                                                                </div>
                                                            </b-card>
                                                        </b-link>
                                                    </template>
                                                    <template v-else>
                                                        <div class=""></div>
                                                    </template>
                                                </b-card-group>
                                            </template>
                                        </b-carousel-slide>
                                    </template>
                                </template>
                            </b-carousel>
                        </template>
                    </div>
                    <!--Publication Status check Modal-->
                    <!--<b-modal
                        id="modalCheckPublicationStatus"
                        ref="modal"
                        title="Warning"
                        size="md"
                        centered
                    >
                        <div class="text-center">
                            <p class="font-weight-bold">Would you like to publish this content so it is visible to users
                                with the URL?</p>
                        </div>
                        <template #modal-footer="{cancel}">
                            <b-button size="md" variant="success" class="font-weight-bold"
                                      @click="publishedAndShareLink()">
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
                        hide-footer>
                        <share-modal :publicShareLink="this.publicShareLink" :sharableMediaId="this.media_file_id" :shareMediaType="this.shareMediaType"></share-modal>
                    </b-modal>
                    <!--show All Subject Modal-->
                    <b-modal
                        id="modalAllSubject"
                        ref="modalAllSubject"
                        title="Subjects of Company Audio"
                        centered
                        hide-footer title-class="modal-title-new">
                        <ul class="text-center pl-0 modal-list-data">
                            <li v-for="subject in audioSubject">{{subject.name}}</li>
                        </ul>
                    </b-modal>
                    <!--show All Presenter Modal-->
                    <b-modal
                        id="modalAllPresenter"
                        ref="modalAllPresenter"
                        title="Audio Participants"
                        centered
                        hide-footer>
                        <ul>
                            <li v-for="presenter in audioPresenter">
                                <template v-if="presenter.name == 'Other'">
                                    {{otherAudioPresenter}}
                                </template>
                                <template v-else>
                                    {{presenter.name}}
                                </template>

                            </li>
                        </ul>
                    </b-modal>
                    <b-modal centered ref="message-modal" size="md" hide-footer>
                        <template #modal-header>
                            <div class="w-100">
                                <h5 class="modal-title modal-title-new">Internal Message</h5>
                                <b-button class="message-modal-close close float-right" @click="closeMessageModal">x</b-button>
                            </div>
                        </template>
                        <InternalMessage :receiverCompanyId="companyId" @internalMessageSuccess="closeMessageModal"></InternalMessage>
                    </b-modal>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import loader from '../components/Loader'
    import Content from "../apis/Content";
    import Social from "../apis/Social";
    import Common from "../apis/Common";
    import MediaDetailsCategoryTabContent from "../components/MediaDetailsCategoryTabContent";
    // import Amplitude from 'amplitudejs'

    export default {
        data: function () {
            return {
                isLoading: false,
                uuid: this.$route.params.id,
                media_file_id: null,
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
                mediaHierarchyInfo: "",
                tabIndex: 1,
                activeTab: 0,
                enableTabNavigation: false,
                audioUrl: "",
                audioName: "",
                audioPresenter: "",
                otherAudioPresenter: "",
                audioTitle: "",
                audioMediaType: "",
                audioSubject: [],
                audioDescription: "",
                publicationDate: "",
                listenCounter: 0,
                audioUnpublished: false,
                audioUnavailable: false,
                publicationStatus: 0,
                publicShareLink: "",
                shareMediaType: "Audio",
                companyName: "",
                isLoggedIn: false,
                companySlug: "",
                otherAudio: [],
                dynamicColumnClass: 'col-lg-8',
                enableClassificationsEditButton: false,
                userId: null,
                senderCompanyId: null,
                companyId: "",
            }
        },
        methods: {
            getAudioInfo: async function () {
                this.isLoading = true
                await Content.audioDetails(this.uuid)
                    .then((response) => {
                        if (response.data.data.status == 'login_unpublished') {
                            this.audioUnpublished = true;
                        } else if (response.data.data.status == 'non_login_unpublished') {
                            this.$router.push({name: "Home"});
                        }
                        this.audioUrl = response.data.data.data.s3_address;
                        this.audioName = response.data.data.data.name;
                        this.media_file_id = response.data.data.data.id;
                        this.showAllTaxonomiesData(response.data.data.data.taxonomy_id, this.uuid);
                        this.audioPresenter = response.data.data.data.media_presenter;
                        this.otherAudioPresenter = response.data.data.data.other_media_presenter;
                        this.audioTitle = response.data.data.data.name;
                        this.listenCounter = response.data.data.data.view_counter;
                        this.audioSubject = response.data.data.data.subject_type;
                        this.audioMediaType = response.data.data.data.media_sub_type;
                        this.audioDescription = response.data.data.data.description;
                        this.publicationDate = response.data.data.data.publication_date;
                        this.publicationStatus = response.data.data.data.publish_status;
                        this.publicShareLink = document.location.origin + '/company/' + this.$route.params.slug+ '/audio-details/' + this.$route.params.id;
                        this.companyId = response.data.data.data.company_id;
                        this.companyName = response.data.data.data.company_name;
                        this.companySlug = response.data.data.data.company_slug;
                        this.getOtherAudioInfo(this.uuid);
                        this.playAudio();
                        this.isLoading = false
                    })
                    .catch(error => {
                        if (!!error.response) {
                            this.isLoading = false
                            if (error.response.status === 422) {
                                this.audioUnavailable = true
                            } else if (error.response.status == 401) {
                                this.$emit('logout')
                            }
                        }
                    });
            },
            showAllTaxonomiesData: function (taxonomy_id, uuid) {
                this.isLoading = true
                this.mediaHierarchyInfo = []
                axios.get('/api/get-media-categorization-lookup-for-collapse?id=' + taxonomy_id + '&uuid=' + uuid)
                    .then((response) => {
                        this.mediaHierarchyInfo = response.data.data;
                        if (this.mediaHierarchyInfo.length > 2) {
                            this.enableTabNavigation = true;
                        }
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
            navigateTabScrollOnLeft: function () {
                let content = document.querySelector(".nav-tabs");
                content.scrollLeft -= 150;
            },
            navigateTabScrollOnRight: function () {
                let content = document.querySelector(".nav-tabs");
                content.scrollLeft += 150;
            },
            shareMediaLink: function () {
                if (this.publicationStatus == 0) {
                    // this.$bvModal.show('modalCheckPublicationStatus');
                    this.publishedAndShareLink();
                } else {
                    this.$bvModal.show('modalShareLink');
                }
            },
            publishedAndShareLink: function () {
                Content.changeMediaFileStatus({'id': this.media_file_id, 'status': 0})
                    .then((response) => {
                        this.publicationStatus = 1;
                    })
                    .catch(error => {
                        toastr.error(error)
                    });
                // this.$bvModal.hide('modalCheckPublicationStatus');
                this.$bvModal.show('modalShareLink');
            },
            getOtherAudioInfo: function (uuid) {
                this.isLoading = true
                Content.audioOthers(uuid)
                    .then((response) => {
                        this.otherAudio = [];
                        this.otherAudio = response.data.data.data;
                    })
                    .catch(error => {
                        if (!!error.response) {
                            this.isLoading = false
                            if (error.response.status == 401) {
                                this.$emit('logout')
                            }
                        }
                    });
            },
            playAudio: function () {
                Amplitude.init({
                    bindings: {
                        32: 'play_pause'
                    },
                    debug: true,
                    visualization: 'michaelbromley_visualization',
                    songs: [
                        {
                            "name": this.audioName,
                            "url": this.audioUrl,
                            "visualization": "michaelbromley_visualization"
                        },
                    ],

                    waveforms: {
                        sample_rate: 50
                    },

                    visualizations: [
                        {
                            object: MichaelBromleyVisualization,
                            params: {}
                        }
                    ]
                });
            },
            audioForward: function () {
                const duration = Amplitude.getSongDuration()
                const currentTime = parseFloat(Amplitude.getSongPlayedSeconds())
                const targetTime = parseFloat(currentTime + 30)
                Amplitude.setSongPlayedPercentage((targetTime / duration) * 100)
            },
            audioBackward: function () {
                const duration = Amplitude.getSongDuration()
                const currentTime = parseFloat(Amplitude.getSongPlayedSeconds())
                const targetTime = parseFloat(currentTime - 30)
                Amplitude.setSongPlayedPercentage((targetTime / duration) * 100)
            },
            audioStepBackward: function () {
                const currentSpeed = Amplitude.getPlaybackSpeed();
                if (currentSpeed > 0.5) {
                    Amplitude.setPlaybackSpeed(currentSpeed - 0.5)
                }
            },
            audioStepForward: function () {
                const currentSpeed = Amplitude.getPlaybackSpeed();
                if (currentSpeed < 2.0) {
                    Amplitude.setPlaybackSpeed(currentSpeed + 0.5)
                }
            },
            showAllSubjectModal: function (event) {
                this.$bvModal.show('modalAllSubject');
            },
            showAllPresenterModal: function (event) {
                this.$bvModal.show('modalAllPresenter');
            },
            updateViewKey() {
                this.$emit("updateViewKey");
            },
            closeMessageModal() {
                this.$refs['message-modal'].hide()
            },
            showMessageModal() {
                this.$refs['message-modal'].show()
            },
        },
        beforeDestroy() {
            Amplitude.stop();
            Amplitude.currentTime = 0;
            Amplitude.init({
                "bindings": {},
                "songs": [
                    {
                        "name": '',
                        "url": '',
                    }
                ]
            });
        },
        created: function () {
            this.numShortFormatter = Common.ViewListenNumFormatter;
            this.getAudioInfo();

            if(localStorage.userid) {
                this.userId = localStorage.userid;
                this.senderCompanyId = JSON.parse(localStorage.getItem("info")).company_id;
            }
        },
        mounted() {
            this.isLoggedIn = !!localStorage.getItem("token");
            if (this.isLoggedIn) {
                this.dynamicColumnClass = 'col-lg-8'
            }
        },
        name: "ViewAudioDetails",
        components: {
            loader,
            MediaDetailsCategoryTabContent,
            ShareModal: () => import("../components/ShareModal"),
            InternalMessage: () => import("../components/InternalMessage"),
        }
    };
</script>
<style scoped>
    div.control-container {
        margin-top: 10px;
        text-align: center;
        padding-bottom: 10px;
    }

    div.control-container div.amplitude-play-pause {
        width: 74px;
        height: 74px;
        cursor: pointer;
        margin: 0 10px;
        display: inline-block;
        vertical-align: middle;
    }

    div.control-container div.amplitude-play-pause.amplitude-paused {
        background: url("../assets/play.png");
        background-size: cover;
    }

    div.control-container div.amplitude-play-pause.amplitude-playing {
        background: url("../assets/pause.png");
        background-size: cover;
    }

    div.control-container div.meta-container {
        /*width: calc(100% - 84px);*/
        text-align: center;
        color: white;
        margin-top: 10px;
    }

    div.control-container div.meta-container span[data-amplitude-song-info="name"] {
        font-family: "Open Sans", sans-serif;
        font-size: 18px;
        color: #fff;
        display: block;
    }

    div.control-container div.meta-container span[data-amplitude-song-info="artist"] {
        font-family: "Open Sans", sans-serif;
        font-weight: 100;
        font-size: 14px;
        color: #fff;
        display: block;
    }

    div.control-container:after {
        content: "";
        display: table;
        clear: both;
    }

    /*
      Small only
    */
    @media screen and (max-width: 39.9375em) {
        div.control-container div.amplitude-play-pause {
            background-size: cover;
            width: 64px;
            height: 64px;
        }

        div.control-container div.meta-container {
            width: calc(100% - 74px);
        }
    }

    /*
      2. Components
    */
    div.top-container {
        margin-bottom: 5px;
        position: relative;
    }

    div.top-container div.amplitude-visualization {
        width: 100%;
        height: 300px;
        box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.5);
        margin: auto;
        /*background-color: #7e097c85;*/
    }

    div.top-container img.now-playing-album-art {
        width: 200px;
        margin: auto;
        box-shadow: 0 5px 31px 0 rgba(0, 0, 0, 0.5);
        display: none;
    }

    /*div.top-container div.amplitude-repeat {*/
    /*    width: 25px;*/
    /*    height: 15px;*/
    /*    cursor: pointer;*/
    /*    top: 85px;*/
    /*    right: 8px;*/
    /*    position: absolute;*/
    /*}*/

    /*div.top-container div.amplitude-repeat.amplitude-repeat-on {*/
    /*    background: url("https://521dimensions.com/img/open-source/amplitudejs/examples/visualizations/repeat-on.svg") no-repeat center;*/
    /*}*/

    /*div.top-container div.amplitude-repeat.amplitude-repeat-off {*/
    /*    background: url("https://521dimensions.com/img/open-source/amplitudejs/examples/visualizations/repeat-off.svg") no-repeat center;*/
    /*}*/

    /*
      Small only
    */
    /*
      Medium only
    */
    /*
      Large Only
    */
    /*div.control-container {*/
    /*    margin-top: 40px;*/
    /*    display: flex;*/
    /*}*/

    /*div.control-container div.amplitude-prev {*/
    /*    width: 18px;*/
    /*    height: 24px;*/
    /*    background: url("https://521dimensions.com/img/open-source/amplitudejs/examples/visualizations/prev.svg");*/
    /*    background-size: cover;*/
    /*    cursor: pointer;*/
    /*    margin: auto;*/
    /*    margin-top: 10px;*/
    /*}*/

    /*div.control-container div.amplitude-play-pause {*/
    /*    width: 30px;*/
    /*    height: 44px;*/
    /*    cursor: pointer;*/
    /*    margin: auto;*/
    /*}*/

    /*div.control-container div.amplitude-play-pause.amplitude-playing {*/
    /*    background: url("https://521dimensions.com/img/open-source/amplitudejs/examples/visualizations/pause.svg") no-repeat center;*/
    /*}*/

    /*div.control-container div.amplitude-play-pause.amplitude-paused {*/
    /*    background: url("https://521dimensions.com/img/open-source/amplitudejs/examples/visualizations/play.svg") no-repeat center;*/
    /*}*/

    /*div.control-container div.amplitude-next {*/
    /*    width: 18px;*/
    /*    height: 24px;*/
    /*    background: url("https://521dimensions.com/img/open-source/amplitudejs/examples/visualizations/next.svg");*/
    /*    background-size: cover;*/
    /*    cursor: pointer;*/
    /*    margin: auto;*/
    /*    margin-top: 10px;*/
    /*}*/

    /*
      Small only
    */
    /*
      Medium only
    */
    /*
      Large Only
    */

    div.meta-data-container span.now-playing-name {
        display: block;
        text-align: center;
        margin-bottom: 15px;
        font-size: 28px;
        font-weight: 700;
        color: #000000;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    div.meta-data-container span.now-playing-artist-album {
        display: block;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.7);
    }

    /*
      Small only
    */
    /*
      Medium only
    */
    /*
      Large Only
    */
    div.amplitude-wave-form {
        margin-top: 25px;
        margin-bottom: 12px;
    }

    div.amplitude-wave-form svg {
        stroke: url(#gradient);
        height: 50px;
        width: 100%;
        stroke-width: .5px;
    }

    div.amplitude-wave-form svg g {
        stroke: url(#gradient);
        height: 50px;
        width: 100%;
    }

    div.amplitude-wave-form svg g path {
        stroke: url(#gradient);
        height: 50px;
        width: 100%;
    }

    span.amplitude-current-time {
        display: block;
        text-align: left;
        color: #000000;
        font-size: 12px;
    }

    span.amplitude-time-remaining {
        display: block;
        text-align: right;
        color: #000000;
        font-size: 12px;
    }

    div.song-navigation {
        margin-top: 0;
        margin-bottom: 15px;
    }

    div.song-navigation input[type="range"] {
        width: 100%;
        -webkit-appearance: none;
        z-index: 9999;
        background-color: #000000;
        margin-left: auto;
        margin-right: auto;
        display: block;
        height: 4px;
    }

    div.song-navigation input[type="range"]:focus {
        outline: none;
    }

    div.song-navigation input[type="range"]::-webkit-slider-runnable-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        border-radius: 0px;
        background: rgba(255, 255, 255, 0.25);
    }

    div.song-navigation input[type="range"]::-webkit-slider-thumb {
        width: 28px;
        height: 28px;
        background-color: #000000;
        border-radius: 20px;
        -webkit-appearance: none;
        margin-top: -10px;
    }

    div.song-navigation input[type="range"]::-moz-range-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        border-radius: 0px;
        background: rgba(255, 255, 255, 0.25);
    }

    div.song-navigation input[type="range"]::-moz-range-thumb {
        width: 28px;
        height: 28px;
        background-color: #000000;
        border-radius: 20px;
        -webkit-appearance: none;
        margin-top: -10px;
    }

    div.song-navigation input[type="range"]::-ms-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        border-radius: 0px;
        background: rgba(255, 255, 255, 0.25);
    }

    div.song-navigation input[type="range"]::-ms-fill-lower {
        background: transparent;
    }

    div.song-navigation input[type="range"]::-ms-fill-upper {
        background: transparent;
    }

    div.song-navigation input[type="range"]::-ms-thumb {
        width: 28px;
        height: 28px;
        background-color: #000000;
        border-radius: 20px;
        -webkit-appearance: none;
        margin-top: -10px;
    }

    div.arrow-up img.arrow-up-icon {
        cursor: pointer;
        margin: auto;
        display: block;
    }

    input[type="range"]#global-large-song-slider {
        width: 100%;
        margin-top: -74px;
        -webkit-appearance: none;
        z-index: 9999;
        background-color: inherit;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }

    input[type="range"]#global-large-song-slider:focus {
        outline: none;
    }

    input[type="range"]#global-large-song-slider::-webkit-slider-runnable-track {
        width: 100%;
        cursor: pointer;
        border-radius: 0px;
        height: 68px;
        background-color: rgba(0, 0, 0, 0);
        -webkit-appearance: none;
    }

    input[type="range"]#global-large-song-slider::-webkit-slider-thumb {
        width: 5px;
        height: 68px;
        background-color: #000000;
        border-radius: 20px;
        -webkit-appearance: none;
    }

    input[type="range"]#global-large-song-slider::-moz-range-track {
        width: 100%;
        height: 0px;
        cursor: pointer;
        border-radius: 0px;
        height: 68px;
        background-color: rgba(0, 0, 0, 0);
    }

    input[type="range"]#global-large-song-slider::-moz-range-thumb {
        width: 5px;
        height: 68px;
        background-color: #000000;
        border-radius: 20px;
        -webkit-appearance: none;
        margin-top: -34px;
    }

    input[type="range"]#global-large-song-slider::-ms-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        border-radius: 0px;
        background: rgba(255, 255, 255, 0.25);
    }

    input[type="range"]#global-large-song-slider::-ms-fill-lower {
        background: transparent;
    }

    input[type="range"]#global-large-song-slider::-ms-fill-upper {
        background: transparent;
    }

    input[type="range"]#global-large-song-slider::-ms-thumb {
        width: 28px;
        height: 28px;
        background-color: #000000;
        border-radius: 20px;
        -webkit-appearance: none;
        margin-top: -10px;
    }

    /*
      3. Layout
    */
    div#visualizations-player {
        width: 100%;
        /*padding: 25px 0;*/
        /*background-color: #000000;*/
        border-radius: 20px;
        margin: auto;
        position: relative;
    }

    /*
      Small only
    */
    /*
      Medium only
    */
    /*
      Large Only
    */
    div#visualizations-player-playlist {
        background-color: #482D57;
        border-radius: 20px;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        padding: 25px;
        padding-top: 25px;
        z-index: 9999;
        display: none;
    }

    div#visualizations-player-playlist div.top-arrow {
        text-align: center;
    }

    div#visualizations-player-playlist div.top-arrow img {
        cursor: pointer;
    }

    div#visualizations-player-playlist div.top {
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    div#visualizations-player-playlist div.top span.playlist-title {
        color: #000000;
        font-size: 36px;
        font-weight: 700;
    }

    /*div#visualizations-player-playlist div.top div.amplitude-repeat {*/
    /*    width: 25px;*/
    /*    height: 15px;*/
    /*    cursor: pointer;*/
    /*    float: right;*/
    /*    margin-left: 25px;*/
    /*    margin-top: 20px;*/
    /*}*/

    /*div#visualizations-player-playlist div.top div.amplitude-repeat.amplitude-repeat-on {*/
    /*    background: url("https://521dimensions.com/img/open-source/amplitudejs/examples/visualizations/repeat-on.svg") no-repeat center;*/
    /*}*/

    /*div#visualizations-player-playlist div.top div.amplitude-repeat.amplitude-repeat-off {*/
    /*    background: url("https://521dimensions.com/img/open-source/amplitudejs/examples/visualizations/repeat-off.svg") no-repeat center;*/
    /*}*/

    div#visualizations-player-playlist div.songs-container {
        padding-top: 35px;
        height: 400px;
        padding-bottom: 90px;
        overflow-y: scroll;
    }

    div#visualizations-player-playlist div.songs-container div.song {
        margin-bottom: 20px;
        cursor: pointer;
        padding: 5px;
        border-radius: 3px;
    }

    div#visualizations-player-playlist div.songs-container div.song.amplitude-active-song-container {
        background-color: #03C1EB;
    }

    div#visualizations-player-playlist div.songs-container div.song:hover {
        background-color: #4CF298;
    }

    div#visualizations-player-playlist div.songs-container div.song span.song-position {
        color: #000000;
        font-size: 18px;
        float: left;
    }

    div#visualizations-player-playlist div.songs-container div.song img.song-album-art {
        width: 44px;
        height: 44px;
        border-radius: 4px;
        box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.5);
        float: left;
        margin-left: 12px;
        margin-right: 16px;
    }

    div#visualizations-player-playlist div.songs-container div.song div.song-meta-data-container {
        float: left;
        width: calc(100% - 105px);
    }

    div#visualizations-player-playlist div.songs-container div.song div.song-meta-data-container span.song-name {
        font-size: 18px;
        display: block;
        color: #000000;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    div#visualizations-player-playlist div.songs-container div.song div.song-meta-data-container span.song-artist {
        font-size: 12px;
        display: block;
        color: #000000;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    div#visualizations-player-playlist div.songs-container div.song:after {
        content: "";
        display: table;
        clear: both;
    }

    div#visualizations-player-playlist div.active-audio {
        background-color: rgba(3, 193, 235, 0.7);
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 40px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 25px;
        padding-right: 25px;
        display: flex;
    }

    div#visualizations-player-playlist div.active-audio img.cover-art-small {
        width: 50px;
        height: 50px;
        border-radius: 4px;
        float: left;
    }

    div#visualizations-player-playlist div.active-audio div.active-audio-right {
        float: left;
        width: calc(100% - 50px);
        padding-left: 10px;
    }

    div#visualizations-player-playlist div.active-audio div.active-audio-right span.song-name {
        font-size: 16px;
        color: #000000;
        display: block;
        text-align: center;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    div#visualizations-player-playlist div.active-audio div.active-audio-right div.active-audio-controls {
        text-align: center;
    }


    a.learn-more {
        display: block;
        color: #000000;
        text-align: center;
        width: 300px;
        border-radius: 5px;
        text-decoration: none;
        padding: 10px;
        margin: auto;
        margin-top: 20px;
        background-color: #482D57;
    }

    div.amplitude-mute {
        cursor: pointer;
        width: 30px;
        height: 19px;
        float: left;
    }

    div.amplitude-mute.amplitude-not-muted {
        background: url('../assets/volume.svg');
        background-repeat: no-repeat;
    }

    div.amplitude-mute.amplitude-muted {
        background: url('../assets/mute.svg');
        background-repeat: no-repeat;
    }

    div.control-container div.amplitude-backward, div.control-container div.amplitude-forward {
        cursor: pointer;
        display: inline-block;
        vertical-align: middle;
        font-size: 35px;
    }

    div.volume-controls {
        position: absolute;
        right: 10px;
        top: 20px;
    }

    /*
      Small only
    */
    /*
      Medium only
    */
    /*
      Large Only
    */
    /*
      4. Pages
    */
    /*
      5. Themes
    */
    /*
      6. Utils
    */
    /*
      7. Vendors
    */

    /*# sourceMappingURL=app.css.map */
    div.volume-controls input[type="range"] {
        -webkit-appearance: none;
        z-index: 9999;
        background-color: #000000;
        /*margin-left: auto;*/
        /*margin-right: auto;*/
        display: block;
        height: 4px;
        margin-top: 7px;
    }

    div.volume-controls input[type="range"]:focus {
        outline: none;
    }

    div.volume-controls input[type="range"]::-webkit-slider-runnable-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        border-radius: 0px;
        background: rgba(255, 255, 255, 0.25);
    }

    div.volume-controls input[type="range"]::-webkit-slider-thumb {
        width: 16px;
        height: 16px;
        background-color: #000000;
        border-radius: 10px;
        -webkit-appearance: none;
        margin-top: -6px;
    }

    div.volume-controls input[type="range"]::-moz-range-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        border-radius: 0px;
        background: rgba(255, 255, 255, 0.25);
    }

    div.volume-controls input[type="range"]::-moz-range-thumb {
        width: 16px;
        height: 16px;
        background-color: #000000;
        border-radius: 10px;
        -webkit-appearance: none;
        margin-top: -6px;
    }

    div.volume-controls input[type="range"]::-ms-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        border-radius: 0px;
        background: rgba(255, 255, 255, 0.25);
    }

    .modal-list-data {
        list-style: inside;
    }

    .btn-message {
        padding: 4px 12px !important;
        font-size: 14px !important;
    }
</style>
<style scoped lang="scss">
    .carousel-card-link{
        .card-body {
            padding: 0.5rem !important;
            p {
                font-size: 0.75rem;
                color: rgba(30, 8, 87, 0.8);
                margin-bottom: 2px;
            }

            .warp-text-title{
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                max-width: 150px;
            }
        }

        .card-wrapper {
            padding: 5px;

            .card {
                max-height: 230px;
            }
        }

        .company-title, ul.pagination {
            font-size: 0.625rem;
            color: #6a666d;
        }

        ul.content-ul {
            display: inline-flex;
            font-size: 0.625rem;
            color: #8a878d;
            padding-left: 0px;
            margin-bottom: 0 !important;

            li:not(:last-child) {
                padding-right: 12px;
            }

            li:first-child {
                list-style: none;
            }
        }
    }
</style>
