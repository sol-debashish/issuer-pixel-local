<template>
    <div>
        <section class='dashboard pt-0'>
            <div class='row' v-if="progressPercentage < 100">
                <div class='col-md-12 grid-margin'>
                    <div class='card'>
                        <div class='card-body profile-completion'>
                            <h5 class="text-center text-theme-dark-blue pb-1">Company profile is incomplete</h5>
                            <h4 class='card-title text-theme-dark-blue'>
                                <router-link
                                    :to="{ name: 'CompanyQuestionnairesDetails' }">
                                    Profile Completion Summary
                                </router-link>
                            </h4>
                            <div class='row fs-14 justify-content-between'>
                                <div class='col-lg-2 col-md-6 pr-0'>
                                    <div class='d-flex'>
                                        <div class='wrapper dashboard-profile-complete-fs'>
                                            <p>
                                                <i class="far"
                                                   :class="{ 'fa-check-circle color-green': (this.stepsPercentage(15,generalProgress) == 100), 'fa-circle color-red': (this.stepsPercentage(15,generalProgress) != 100) }"
                                                ></i>
                                                <router-link class="text-theme-dark-blue"
                                                             :to="{name: 'CompanyQuestionnairesDetails', 'hash': '#profile'}">
                                                    General
                                                </router-link>
                                            </p>
                                            <p>
                                                <i class="far"
                                                   :class="{ 'fa-check-circle color-green': (this.stepsPercentage(15,contactProgress) == 100), 'fa-circle color-red': (this.stepsPercentage(15,contactProgress) != 100) }"
                                                ></i>
                                                <router-link class="text-theme-dark-blue"
                                                             :to="{name: 'CompanyQuestionnairesDetails', 'hash': '#executives'}">
                                                    Company Contact
                                                </router-link>
                                            </p>
                                        </div>
                                        <div class='wrapper dashboard-profile-complete-fs my-auto ml-auto ml-lg-4'>
                                            <p class="text-theme-dark-blue">
                                                {{this.stepsPercentage(15,generalProgress)}}%</p>
                                            <p class="text-theme-dark-blue">
                                                {{this.stepsPercentage(15,contactProgress)}}%</p>
                                        </div>
                                    </div>
                                </div>
                                <div class='col-lg-2 col-md-6 pr-0 mt-md-0 mt-4'>
                                    <div class='d-flex'>
                                        <div class='wrapper dashboard-profile-complete-fs'>
                                            <p>
                                                <i class="far"
                                                   :class="{ 'fa-check-circle color-green': (this.stepsPercentage(15,structureProgress) == 100), 'fa-circle color-red': (this.stepsPercentage(15,structureProgress) != 100) }"
                                                ></i>
                                                <router-link class="text-theme-dark-blue"
                                                             :to="{name: 'CompanyQuestionnairesDetails', 'hash': '#companyType'}">
                                                    Company Structure
                                                </router-link>
                                            </p>
                                            <p>
                                                <i class="far"
                                                   :class="{ 'fa-check-circle color-green': (this.stepsPercentage(15,valuationProgress) == 100), 'fa-circle color-red': (this.stepsPercentage(15,valuationProgress) != 100) }"
                                                ></i>
                                                <router-link class="text-theme-dark-blue"
                                                             :to="{name: 'CompanyQuestionnairesDetails', 'hash': '#finance'}">
                                                    Valuation IP
                                                </router-link>
                                            </p>
                                        </div>
                                        <div class='wrapper dashboard-profile-complete-fs my-auto ml-auto ml-lg-4'>
                                            <p class="text-theme-dark-blue">
                                                {{this.stepsPercentage(15,structureProgress)}}%</p>
                                            <p class="text-theme-dark-blue">
                                                {{this.stepsPercentage(15,valuationProgress)}}%</p>
                                        </div>
                                    </div>
                                </div>
                                <div class='col-lg-2 col-md-6 pr-0 mt-md-0 mt-4 px-lg-0'>
                                    <div class='d-flex justify-content-center'>
                                        <div class='wrapper dashboard-profile-complete-fs'>
                                            <p>
                                                <i class="far"
                                                   :class="{ 'fa-check-circle color-green': (this.stepsPercentage(15,socialProgress) == 100), 'fa-circle color-red': (this.stepsPercentage(15,socialProgress) != 100) }"
                                                ></i>
                                                <router-link class="text-theme-dark-blue"
                                                             :to="{name: 'CompanyQuestionnairesDetails', 'hash': '#social'}">
                                                    Social Presence
                                                </router-link>
                                            </p>
                                            <p>
                                                <i class="far"
                                                   :class="{ 'fa-check-circle color-green': (this.stepsPercentage(25,taxonomyProgress) == 100), 'fa-circle color-red': (this.stepsPercentage(25,taxonomyProgress) != 100) }"
                                                ></i>
                                                <router-link class="text-theme-dark-blue"
                                                             :to="{name: 'CompanyQuestionnairesDetails', 'hash': '#taxonomy'}">
                                                    Industry Classification
                                                </router-link>
                                            </p>
                                        </div>
                                        <div class='wrapper dashboard-profile-complete-fs my-auto ml-auto ml-lg-4'>
                                            <p class="text-theme-dark-blue">
                                                {{this.stepsPercentage(15,socialProgress)}}%</p>
                                            <p class="text-theme-dark-blue">
                                                {{this.stepsPercentage(25,taxonomyProgress)}}%</p>
                                        </div>
                                    </div>
                                </div>
                                    <!-- added by khalid-->
                                <div class='col-lg-2 col-md-6 pr-0 mt-md-0 mt-4 px-lg-0'>
                                    <div class='d-flex justify-content-center'>
                                        <div class='wrapper dashboard-profile-complete-fs'>
                                            <p>
                                                <i class="far"
                                                   :class="{ 'fa-check-circle color-green': (this.stepsPercentage(10, historyProgress) == 100), 'fa-circle color-red': (this.stepsPercentage(10, historyProgress) != 100) }"
                                                ></i>
                                                <router-link class="text-theme-dark-blue"
                                                             :to="{name: 'CompanyQuestionnairesDetails', 'hash': '#history'}">
                                                    Company History
                                                </router-link>
                                            </p>
                                            <p>
                                                <i class="far"
                                                   :class="{ 'fa-check-circle color-green': (this.stepsPercentage(20, corporateActionProgress) == 100), 'fa-circle color-red': (this.stepsPercentage(20, corporateActionProgress) != 100) }"
                                                ></i>
                                                <router-link class="text-theme-dark-blue"
                                                             :to="{name: 'CompanyQuestionnairesDetails', 'hash': '#corporateAction'}">
                                                    Corporate Actions
                                                </router-link>
                                            </p>
                                        </div>
                                        <div class='wrapper my-auto dashboard-profile-complete-fs ml-auto ml-lg-4'>
                                            <p class="text-theme-dark-blue">
                                                {{this.stepsPercentage(10, historyProgress)}}%</p>
                                            <p class="text-theme-dark-blue">
                                                {{this.stepsPercentage(20, corporateActionProgress)}}%</p>
                                        </div>
                                    </div>
                                </div>
                                <div class='col-lg-2 col-md-6 pr-0 mt-md-0 mt-4 px-lg-0'>
                                    <div class='d-flex'>
                                        <div class='wrapper dashboard-profile-complete-fs'>
                                            <p>
                                                <i class="far"
                                                   :class="{ 'fa-check-circle color-green': (this.stepsPercentage(30, leadershipGovernanceProgress) == 100), 'fa-circle color-red': (this.stepsPercentage(30, leadershipGovernanceProgress) != 100) }"
                                                ></i>
                                                <router-link class="text-theme-dark-blue"
                                                             :to="{name: 'CompanyQuestionnairesDetails', 'hash': '#leadershipGovernance'}">
                                                    Leadership and Governance
                                                </router-link>
                                            </p>

                                        </div>
                                        <div class='wrapper my-auto dashboard-profile-complete-fs ml-auto ml-lg-4'>
                                            <p class="text-theme-dark-blue">
                                                {{this.stepsPercentage(30, leadershipGovernanceProgress)}}%</p>
                                        </div>
                                    </div>
                                </div>
                                <div class='col-lg-2 col-md-6 pr-0 mt-md-0 mt-4'>
                                    <div class='d-flex justify-content-center'>
                                        <div class='wrapper dashboard-profile-btn-position'>
                                            <div class="circle_percent">
                                                <div class="circle_inner">
                                                    <div class="round_per"></div>
                                                </div>
                                            </div>
                                            <div class='wrapper my-auto '>
                                                <router-link
                                                    class="btn btn-sm btn-primary dashboard-profile-complete-btn text-center"
                                                    :class="linkButtonGrayOut"
                                                    :to="{name: 'CompanyQuestionnairesDetails', 'hash': '#profile'}">
                                                    Complete your Profile
                                                </router-link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='row'>
                <div class='col-md-12 grid-margin'>
                    <div class='card'>
                        <div class='card-body content-analytics'>
                            <h4 class='card-title mb-0 text-theme-dark-blue'>
                                <router-link
                                    :to="{ name: 'Content' }">
                                    Content Analytics
                                </router-link>
                            </h4>
                            <div class='row state-container'>
                                <div class="col pb-3">
                                    <a href="javascript:;">
                                        <router-link :to="{name: 'Content', 'hash': '#video'}">
                                            <span class="d-block statistics-counter">{{totalVideo}}</span>
                                        </router-link>
                                        <span class="d-block text-dark">Videos Uploaded</span>
                                    </a>
                                </div>
                                <div class="col pb-3">
                                    <a href="javascript:;">
                                        <router-link :to="{name: 'Content', 'hash': '#audio'}">
                                            <span class="d-block statistics-counter">{{totalAudio}}</span>
                                        </router-link>
                                        <span class="d-block text-dark">Audio Files Uploaded</span>
                                    </a>
                                </div>
                                <div class="col pb-3">
                                    <div>
                                        <span class="d-block statistics-counter without-link">{{this.numShortFormatter(totalVideoView)}}</span>
                                        <span class="d-block text-dark">Total Video Views</span>
                                    </div>
                                </div>
                                <div class="col pb-3">
                                    <div>
                                        <span class="d-block statistics-counter without-link">{{this.numShortFormatter(totalAudioView)}}</span>
                                        <span class="d-block text-dark">Total Audio Listens</span>
                                    </div>
                                </div>
                                <div class="col pb-3">
                                    <div>
                                        <span class="d-block statistics-counter without-link">{{this.numShortFormatter(totalVideoSearch)}}</span>
                                        <span class="d-block text-dark">Search Appearances</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='row'>
                <div class='col-md-6'>
                    <div class='row'>
                        <div class='col-md-12 grid-margin'>
                            <div class='card'>
                                <div class='card-body'>
                                    <h4 class='card-title mb-0 text-theme-dark-blue'>Recently Uploaded Videos</h4>
                                    <div class="row recent-video-container">
                                        <div v-for="(data, index) in recentVideos" class="col-md-4 card-wrapper">
                                            <div class='card'>
                                                <router-link link
                                                             :to="{ name: 'ViewVideoDetails' ,params: { slug: data.companySlug, id: data.videoUuid }}">
                                                    <span class="bg_content_photo"
                                                          v-bind:style="{ 'background-image': 'url(' + data.fileThumb + ')' }"></span>
                                                </router-link>
                                                    <div class='card-body p-2'>
                                                        <img class="rounded-circle float-left mr-1"
                                                             :src="data.companyImage" width="25" height="25"/>
                                                        <p class="warp-text-title">{{data.name}}</p>
                                                        <div class="company-title warp-text-title">
                                                            {{data.companyName}}
                                                        </div>
                                                        <ul class="content-ul">
                                                            <li>{{numShortFormatter(data.viewCounter)}} Views</li>
                                                            <li>{{data.createdAt}}</li>
                                                        </ul>
                                                    </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12 text-center" v-if="! recentVideos.length">
<!--                                            No video has been uploaded yet!-->
                                            <router-link  link :to="{ name: 'videoQuestionnaire'}"
                                                         class="btn btn-back-next">Upload Your First Video
                                            </router-link>
                                        </div>
                                    </div>
                                    <template v-if="recentVideos.length">
                                    <router-link :to="{name: 'Content', 'hash': '#video'}" class="btn btn-back-next float-right mt-3">
                                        View all
                                    </router-link>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='col-md-6'>
                    <div class='row'>
                        <div class='col-md-12 grid-margin'>
                            <div class='card'>
                                <div class='card-body'>
                                    <h4 class='card-title mb-0 text-theme-dark-blue'>Recently Uploaded Audio</h4>
                                    <div class="row recent-video-container">
                                        <div v-for="(data, index) in recentAudios" class="col-md-4 card-wrapper">
                                            <div class='card'>
                                                <router-link link
                                                             :to="{ name: 'ViewAudioDetails' ,params: { slug: data.companySlug, id: data.audioUuid }}">
                                                    <span class="bg_content_photo"
                                                          v-bind:style="{ 'background-image': 'url(' + data.fileThumb + ')' }"></span>
                                                </router-link>
                                                    <div class='card-body p-2'>
                                                        <img class="rounded-circle float-left mr-1"
                                                             :src="data.companyImage" width="25" height="25"/>
                                                        <p class="warp-text-title">{{data.name}}</p>
                                                        <div class="company-title warp-text-title">
                                                            {{data.companyName}}
                                                        </div>
                                                        <ul class="content-ul">
                                                            <li>{{numShortFormatter(data.viewCounter)}} Views</li>
                                                            <li>{{data.createdAt}}</li>
                                                        </ul>
                                                    </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12 text-center" v-if="! recentAudios.length">
<!--                                            No audio has been uploaded yet!-->
                                            <router-link  link :to="{ name: 'audioQuestionnaire'}"
                                                          class="btn btn-back-next">Upload Your First Audio
                                            </router-link>
                                        </div>
                                    </div>
                                    <template v-if="recentAudios.length">
                                    <router-link :to="{name: 'Content', 'hash': '#audio'}" class="btn btn-back-next float-right mt-3">
                                        View all
                                    </router-link>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class='row'>
                <div class='col-md-12 grid-margin'>
                    <div class='card'>
                        <div class='card-body'>
                            <h4 class='card-title mb-3 text-theme-dark-blue'>
                                <router-link
                                    :to="{ name: 'PersonalizedNewsIndustry' }">
                                    Personalized News
                                </router-link>
                            </h4>
                            <div class="row">
                                <div class="col-md-12" v-for="news in allNews">
                                    <div class="news-container mb-2">
                                        <div class="d-flex">
                                            <a :href="news.link" target="_blank">{{news.title}}</a>
                                            <img v-if="news.imageUrl" :src="news.imageUrl" class="ml-auto rounded-lg" height="60" width="100">
                                        </div>
                                        <div>
                                            <span>{{news.source}}fgregrgh</span>
                                            <span class="float-right">Released on {{news.pubDate}}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <template v-if="allNews.length">
                                <router-link :to="{name: 'PersonalizedNewsIndustry'}" class="btn btn-back-next mt-3">
                                    Load more
                                </router-link>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <loader :is-visible="isLoading"></loader>
    </div>
</template>

<script>
    import JQuery from 'jquery'
    import User from "../apis/User";
    import Common from "../apis/Common";

    let $ = JQuery
    export default {
        name: 'Dashboard',
        data() {
            return {
                isLoading: false,
                company: "",
                progressMax: 100,
                generalProgress: 0,
                contactProgress: 0,
                structureProgress: 0,
                valuationProgress: 0,
                socialProgress: 0,
                taxonomyProgress: 0,
                historyProgress: 0,
                corporateActionProgress: 0,
                leadershipGovernanceProgress: 0,
                progressPercentage: 0,
                totalVideo: 0,
                totalVideoView: 0,
                totalAudioView: 0,
                totalVideoSearch: 0,
                totalAudio: 0,
                recentVideos: [],
                recentAudios: [],
                linkButtonGrayOut: '',
                linkGrayOut: '',
                // bulletins: [],
                allNews: []
            };
        },

        components: {
            loader: () => import("../components/Loader"),
        },
        methods: {
            toggleProBanner: function () {
                $('body').toggleClass('pro-banner-collapse')
            },
            getCompanyInfo: async function () {
                await User.getCompanyInfo()
                    .then((response) => {
                        this.isLoading = false;
                        this.generalProgress = response.data.data.general_info;
                        this.contactProgress = response.data.data.contact;
                        this.structureProgress = response.data.data.structure;
                        this.valuationProgress = response.data.data.valuation;
                        this.socialProgress = response.data.data.social_presence;
                        this.taxonomyProgress = response.data.data.hierarchy;
                        this.historyProgress = response.data.data.history;
                        this.corporateActionProgress = response.data.data.corporate_action;
                        this.leadershipGovernanceProgress = response.data.data.leadership_governance;
                        this.progressPercentage = parseInt(this.generalProgress) + parseInt(this.contactProgress) + parseInt(this.structureProgress) +
                            parseInt(this.valuationProgress) + parseInt(this.socialProgress) + parseInt(this.taxonomyProgress);
                        this.percentageTotalValue();
                    })
                    .catch((error) => {
                        this.isLoading = false;
                        if (error.response.status == 401) {
                            this.$emit("logout");
                        }
                    });
            },
            getDashboardStatistics: function () {
                User.dashboardStatistics()
                    .then((response) => {
                        this.totalVideo = response.data.data.total_video;
                        this.totalAudio = response.data.data.total_audio;
                        this.totalVideoView = response.data.data.total_video_view;
                        this.totalAudioView = response.data.data.total_audio_view;
                        this.totalVideoSearch = response.data.data.total_video_search;
                        this.recentVideos = response.data.data.latest_uploaded_video;
                        this.recentAudios = response.data.data.latest_uploaded_audio;
                        // this.bulletins = response.data.data.bulletins;
                    })
                    .catch((error) => {
                        this.isLoading = false;
                        if (error.response.status == 401) {
                            this.$emit("logout");
                        }
                    });
            },
            getPercentageColorClass: function () {
                if (this.progressPercentage <= 32) {
                    return 'red-color'
                } else if (this.progressPercentage > 32 && this.progressPercentage <= 49) {
                    return 'orange-color'
                } else if (this.progressPercentage > 49 && this.progressPercentage <= 66) {
                    return 'yellow-color'
                } else if (this.progressPercentage > 66 && this.progressPercentage <= 82) {
                    return 'light-pink-color'
                } else if (this.progressPercentage > 82 && this.progressPercentage <= 99) {
                    return 'light-purple-color'
                } else if (this.progressPercentage == 100) {
                    return 'purple-color'
                }
                return ''
            },
            percentageTotalValue() {
                let vueIns = this;
                $(".circle_percent").each(function () {
                    var $this = $(this),
                        // $dataV = $this.data("percent"),
                        $dataV = vueIns.progressPercentage,
                        $dataDeg = $dataV * 3.6,
                        $round = $this.find(".round_per");
                    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
                    $this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
                    $this.prop('Counter', 0).animate({Counter: $dataV},
                        {
                            duration: 1000,
                            easing: 'swing',
                            step: function (now) {
                                $this.find(".percent_text").text(Math.ceil(now) + "%");
                            }
                        });
                    if ($dataV >= 51) {
                        $round.css("transform", "rotate(" + 360 + "deg)");
                        setTimeout(function () {
                            $this.addClass("percent_more");
                        }, 500);
                        setTimeout(function () {
                            $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
                        }, 500);
                    }
                });
            },
            getDashboardNews: function () {
                User.dashboardNews()
                    .then((response) => {
                        if(response.data.data.allNews) {
                            this.allNews = response.data.data.allNews;
                        }
                    })
                    .catch((error) => {
                        this.isLoading = false;
                        if (error.response.status == 401) {
                            this.$emit("logout");
                        }
                    });
            }
        },
        created: function () {
            this.isLoading = true;
            this.stepsPercentage = Common.calculateProfileStepsPercentage;
            this.numShortFormatter = Common.ViewListenNumFormatter;
            this.getCompanyInfo();
            this.getDashboardStatistics();
            this.getDashboardNews();
        }
    }
</script>

<style scoped lang='scss'>
    .statistics-counter {
        font-size: 2rem;
    }
    .statistics-counter.without-link{
        color: #783DAB;
    }
    .content-analytics a:hover{
        color: blue;
    }

    .recent-video-container {
        border-radius: 0.75rem;
        margin-top: 10px;

        .card-body {
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

            li:not(:last-child) {
                padding-right: 12px;
            }

            li:first-child {
                list-style: none;
            }
        }

        ul.content-ul-bulletin {
            display: inline-flex;
            font-size: 0.625rem;
            color: #8a878d;
            padding-left: 0px;
            flex-direction: column;
            list-style: none;

            li:not(:last-child) {
                padding-right: 12px;
            }

            li:first-child {
                color: rgba(30, 8, 87, 0.8);
            }
        }

        .fa-circle {
            font-size: 1px;
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

        .bg_content_photo {
            display: block;
            width: 100%;
            height: 135px;
            background-position: center 50%;
            background-repeat: no-repeat;
            background-size: cover;
            background-color: #7E097C;
        }
    }

    .news-container {
        padding: 10px;
        position: relative;
        overflow: hidden;
        background: #fff;
        width: 100%;
        border: 1px solid #dadce0;
        border-radius: 8px;
        min-height: 100px;
        box-shadow: 0 4px 8px 0px #a7afb754;
    }

    .card-body.profile-completion, .card-body.content-analytics{
        padding-bottom: 0.25rem;
    }
</style>
<style>
    .circle_percent {
        font-size: 55px;
        width: 1em;
        height: 1em;
        position: relative;
        background: #ff0000;
        border-radius: 50%;
        overflow: hidden;
        display: inline-block;
        /*margin: 20px;*/
    }

    .circle_inner {
        position: absolute;
        left: 0;
        top: 0;
        width: 1em;
        height: 1em;
        clip: rect(0 1em 1em .5em);
    }

    .round_per {
        position: absolute;
        left: 0;
        top: 0;
        width: 1em;
        height: 1em;
        background: #38c172;
        clip: rect(0 1em 1em .5em);
        transform: rotate(180deg);
        transition: 1.05s;
    }

    .percent_more .circle_inner {
        clip: rect(0 .5em 1em 0em);
    }

    .percent_more:after {
        position: absolute;
        left: .5em;
        top: 0em;
        right: 0;
        bottom: 0;
        background: #38c172;
        content: '';
    }

    .circle_inbox {
        position: absolute;
        top: 7px;
        left: 7px;
        right: 7px;
        bottom: 7px;
        background: #fff;
        z-index: 3;
        border-radius: 50%;
    }

    .percent_text {
        color: rgba(30, 8, 87, 0.8);
        position: absolute;
        font-size: 12px;
        font-weight: 600;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 3;
    }
    /*css added by khalid*/
    .dashboard-profile-complete-btn{
        margin-left: -34px;
        font-size: 11px;
    }


    @media (min-width: 811px) {
        .dashboard-profile-btn-position{
            position: absolute;
            bottom: 15px;
        }
    }

</style>
