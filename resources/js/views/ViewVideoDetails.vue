<template>
    <div class="dashboard">
        <div class="container-fluid px-0">
            <div v-if="videoUnpublished" class="row collapse show no-gutters d-flex h-100 position-relative">
                <div class="col text-center mb-5">
                    <img src="/images/issuerpixel_logo.png" alt="issuerpixel_logo" class=""/>
                    <h3 class="mt-2">Video has been made Private by owner.</h3>
                </div>

            </div>
            <div v-else>
                <div v-if="isLoggedIn" class="pb-2">
                    <router-link :to="{name: 'Content', 'hash': '#video'}" class="btn btn-back-next media-details-page-back-btn"><i
                        class="fas fa-chevron-left"></i> Back to Content Library
                    </router-link>
                    <span class="text-theme-dark-blue fs-14 pl-2">Content Library <i class="fa fa-arrow-right"></i> {{videoTitle}}</span>
                </div>
                <div class="row collapse show no-gutters d-flex h-100 position-relative">
                <div class="col-lg-4">
                    <div class="text-center">
                        <h4 class="media-details-page-title">Video Classifications</h4>
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
                    <div class="container-details">
                        <h4 class="text-center media-details-page-title">Video Details</h4>
                        <div class="embed-responsive embed-responsive-21by9" style="background: black">
                            <div v-if="videoUnavailable"
                                 class="h-100 d-flex justify-content-center align-items-center video-audio-unavailable-error-message">
                                Video unavailable
                            </div>
                            <iframe id="vzvd-22677381" name="vzvd-22677381" :src="videoSrc" title="video player"
                                    allow="autoplay"
                                    class="video-player video-player-responsive embed-responsive-item" type="text/html"
                                    frameborder="0"
                                    allowfullscreen
                                    allowTransparency="true" mozallowfullscreen webkitAllowFullScreen></iframe>
                        </div>
                    </div>
                    <template v-if="!videoUnavailable">
                        <div class="row py-2 fs-16">
                            <div class="col-md-8 pr-0">
                                <!--<div class="row">
                                    <div class="col-md-8 pr-1">
                                        <span class="media-title-text">{{videoTitle}}</span>
                                    </div>
                                    <div class="col-md-4 p-0">
                                        <span class="text-theme-dark-blue font-weight-bold">Participants:</span> <a href="javascript:;" @click.prevent="showAllPresenterModal">View All</a>
                                    </div>
                                </div>-->
                                <span class="media-title-text">{{videoTitle}}</span>
                            </div>
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
                                    <li><span class="total-view">{{this.numShortFormatter(view_counter + 1)}} Views</span></li>
                                    <li>{{publicationDate}}</li>
                                    <li>{{videoMediaType}}</li>
                                    <li>
                                        <a href="javascript:;" @click.prevent="showAllSubjectModal">View Subjects</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;" @click.prevent="showAllPresenterModal">View Participants</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="text-justify py-2 fs-14">
                            {{videoDescription}}
                        </div>
                        <p class="custom-hr-theme mt-3"></p>
                        <h4 class="pb-2 text-theme-dark-blue fs-16 text-center">Other Videos by {{companyName}}</h4>
                        <b-carousel controls>
                            <template v-for="(video, index) in otherVideo">
                                <template v-if="index%4==0">
                                    <b-carousel-slide>
                                        <template v-slot:img>
                                            <b-card-group>
                                                <b-link
                                                    :to="{ name: 'ViewVideoDetails',params: {slug: otherVideo[index].company_slug, id: otherVideo[index].uuid }}"
                                                    @click.native="updateViewKey">
                                                    <b-card v-if="otherVideo[index].video_id !=null"
                                                            class="mx-1 carousel-card-link"
                                                            :img-src="'https://view.vzaar.com/'+ otherVideo[index].video_id +'/image'">
                                                        <div class=''>
                                                            <img class="rounded-circle float-left mr-1"
                                                                 :src="'https://view.vzaar.com/'+ otherVideo[index].video_id +'/image'" width="25" height="25"/>
                                                            <p class="warp-text-title">{{otherVideo[index].name}}</p>
                                                            <div class="company-title warp-text-title">
                                                                {{companyName}}
                                                            </div>
                                                            <ul class="content-ul">
                                                                <li>{{numShortFormatter(otherVideo[index].view_counter)}} Views</li>
                                                                <li>{{otherVideo[index].created}}</li>
                                                            </ul>
                                                        </div>
                                                    </b-card>
                                                    <b-card v-else class="no-thumb-image-content"></b-card>
                                                </b-link>
                                                <template v-if="otherVideo[index+1] !=undefined">
                                                    <b-link
                                                        :to="{ name: 'ViewVideoDetails',params: {slug: otherVideo[index+1].company_slug, id: otherVideo[index+1].uuid }}"
                                                        @click.native="updateViewKey">
                                                        <b-card v-if="otherVideo[index+1].video_id !=null"
                                                                class="mx-1 carousel-card-link"
                                                                :img-src="'https://view.vzaar.com/'+ otherVideo[index+1].video_id +'/image'">
                                                            <div class=''>
                                                                <img class="rounded-circle float-left mr-1"
                                                                     :src="'https://view.vzaar.com/'+ otherVideo[index+1].video_id +'/image'" width="25" height="25"/>
                                                                <p class="warp-text-title">{{otherVideo[index+1].name}}</p>
                                                                <div class="company-title warp-text-title">
                                                                    {{companyName}}
                                                                </div>
                                                                <ul class="content-ul">
                                                                    <li>{{numShortFormatter(otherVideo[index+1].view_counter)}} Views</li>
                                                                    <li>{{otherVideo[index+1].created}}</li>
                                                                </ul>
                                                            </div>
                                                        </b-card>
                                                        <b-card v-else class="no-thumb-image-content"></b-card>
                                                    </b-link>
                                                </template>
                                                <template v-else>
<!--                                                    <b-card class="mx-1 bg-color-purple no-content-card" overlay></b-card>-->
                                                    <div class=""></div>
                                                </template>
                                                <template v-if="otherVideo[index+2] !=undefined">
                                                    <b-link
                                                        :to="{ name: 'ViewVideoDetails',params: {slug: otherVideo[index+2].company_slug, id: otherVideo[index+2].uuid }}"
                                                        @click.native="updateViewKey">
                                                        <b-card v-if="otherVideo[index+2].video_id !=null"
                                                                class="mx-1 carousel-card-link"
                                                                :img-src="'https://view.vzaar.com/'+ otherVideo[index+2].video_id +'/image'">
                                                            <div class=''>
                                                                <img class="rounded-circle float-left mr-1"
                                                                     :src="'https://view.vzaar.com/'+ otherVideo[index+2].video_id +'/image'" width="25" height="25"/>
                                                                <p class="warp-text-title">{{otherVideo[index+2].name}}</p>
                                                                <div class="company-title warp-text-title">
                                                                    {{companyName}}
                                                                </div>
                                                                <ul class="content-ul">
                                                                    <li>{{numShortFormatter(otherVideo[index+2].view_counter)}} Views</li>
                                                                    <li>{{otherVideo[index+2].created}}</li>
                                                                </ul>
                                                            </div>
                                                        </b-card>
                                                        <b-card v-else class="no-thumb-image-content"></b-card>
                                                    </b-link>
                                                </template>
                                                <template v-else>
                                                    <div class=""></div>
                                                </template>
                                                <template v-if="otherVideo[index+3] !=undefined">
                                                    <b-link
                                                        :to="{ name: 'ViewVideoDetails',params: {slug: otherVideo[index+3].company_slug, id: otherVideo[index+3].uuid }}"
                                                        @click.native="updateViewKey">
                                                        <b-card v-if="otherVideo[index+3].video_id !=null"
                                                                class="mx-1 carousel-card-link"
                                                                :img-src="'https://view.vzaar.com/'+ otherVideo[index+3].video_id +'/image'">
                                                            <div class=''>
                                                                <img class="rounded-circle float-left mr-1"
                                                                     :src="'https://view.vzaar.com/'+ otherVideo[index+3].video_id +'/image'" width="25" height="25"/>
                                                                <p class="warp-text-title">{{otherVideo[index+3].name}}</p>
                                                                <div class="company-title warp-text-title">
                                                                    {{companyName}}
                                                                </div>
                                                                <ul class="content-ul">
                                                                    <li>{{numShortFormatter(otherVideo[index+3].view_counter)}} Views</li>
                                                                    <li>{{otherVideo[index+3].created}}</li>
                                                                </ul>
                                                            </div>
                                                        </b-card>
                                                        <b-card v-else class="no-thumb-image-content"></b-card>
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
                    hide-footer >
                    <share-modal :publicShareLink="this.publicShareLink" :sharableMediaId="this.media_file_id" :shareMediaType="this.shareMediaType"></share-modal>
                </b-modal>
                <!--show All Subject Modal-->
                <b-modal
                    id="modalAllSubject"
                    ref="modalAllSubject"
                    title="Subjects of Company Video"
                    centered
                    hide-footer  title-class="modal-title-new">
                    <ul class="text-center pl-0 modal-list-data">
                        <li v-for="subject in videoSubject">{{subject.name}}</li>
                    </ul>
                </b-modal>
                <!--show All Presenter Modal-->
                <b-modal
                    id="modalAllPresenter"
                    ref="modalAllPresenter"
                    title="Video Participants"
                    centered
                    hide-footer >
                    <ul>
                        <li v-for="presenter in videoPresenter">
                            <template v-if="presenter.name == 'Other'">
                                {{otherVideoPresenter}}
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
    import Common from "../apis/Common";
    import MediaDetailsCategoryTabContent from "../components/MediaDetailsCategoryTabContent";

    export default {
        data: function () {
            return {
                isLoading: false,
                video_uuid: this.$route.params.id,
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
                videoSrc: '',
                videoPresenter: "",
                otherVideoPresenter: "",
                videoTitle: "",
                videoMediaType: "",
                videoSubject: [],
                videoDescription: "",
                view_counter: 0,
                publicationDate: "",
                publicationStatus: 0,
                publicShareLink: "",
                shareMediaType: "Video",
                companyId: "",
                companyName: "",
                companyUuid: "",
                companySlug: "",
                otherVideo: [],
                videoUnpublished: false,
                isLoggedIn: false,
                videoUnavailable: false,
                dynamicColumnClass: 'col-lg-8',
                enableClassificationsEditButton: false,
                datastVideoId: "",
                userId: null,
                senderCompanyId: null,
            }
        },
        methods: {
            getVideoInfo: function () {
                this.isLoading = true
                Content.videoDetails(this.video_uuid)
                    .then((response) => {
                        if (response.data.data.status == 'login_unpublished') {
                            this.videoUnpublished = true;
                        } else if (response.data.data.status == 'non_login_unpublished') {
                            this.$router.push({name: "Home"});
                        }
                        this.showAllTaxonomiesData(response.data.data.data.taxonomy_id, this.video_uuid);
                        this.videoSrc = 'https://view.vzaar.com/' + response.data.data.data.video.video_id + '/player';
                        this.datastVideoId = response.data.data.data.video.video_id;
                        this.media_file_id = response.data.data.data.id;
                        this.videoPresenter = response.data.data.data.media_presenter;
                        this.otherVideoPresenter = response.data.data.data.other_media_presenter;
                        this.view_counter = response.data.data.data.view_counter;
                        this.videoTitle = response.data.data.data.name;
                        this.videoSubject = response.data.data.data.subject_type;
                        this.videoMediaType = response.data.data.data.media_sub_type;
                        this.videoDescription = response.data.data.data.description;
                        this.publicationDate = response.data.data.data.publication_date;
                        this.publicationStatus = response.data.data.data.publish_status;
                        this.publicShareLink = document.location.origin + '/company/' + this.$route.params.slug + '/video-details/' + this.$route.params.id;
                        this.companyId = response.data.data.data.company_id;
                        this.companyName = response.data.data.data.company_name;
                        this.companyUuid = response.data.data.data.company_uuid;
                        this.companySlug = response.data.data.data.company_slug;
                        this.getOtherVideoInfo(this.video_uuid);
                        this.isLoading = false
                    })
                    .catch(error => {
                        if (!!error.response) {
                            this.isLoading = false
                            if (error.response.status === 422) {
                                this.videoUnavailable = true
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
            getOtherVideoInfo: function (video_uuid) {
                this.isLoading = true
                Content.videoOthers(video_uuid)
                    .then((response) => {
                        this.otherVideo = [];
                        this.otherVideo = response.data.data.data;
                        //console.log(this.otherVideo)

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
        created: function () {
            this.numShortFormatter = Common.ViewListenNumFormatter;
            this.getVideoInfo();

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
        name: "ViewVideoDetails",
        components: {
            loader,
            MediaDetailsCategoryTabContent,
            ShareModal: () => import("../components/ShareModal"),
            InternalMessage: () => import("../components/InternalMessage"),
        }
    };
</script>
<style scoped>
    .container-details {
        max-width: 100%;
        width: 1554px;
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
