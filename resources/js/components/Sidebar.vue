<template>
    <div class="col-lg-2 issuer-dashboard-sidebar p-0 h-100 w-sidebar sidebar">
        <!-- fixed sidebar -->
        <div class="position-fixed h-100 align-self-start w-sidebar fixed-sidebar-dashboard">
<!--            <ProfileImageSettings/>-->
            <ul class="nav flex-column flex-nowrap text-left" id="navAccordion">

                <li class="nav-item" :class="linkGrayOut">
                    <router-link class="nav-link" :to="{ name: 'Dashboard' }"
                                 :class="currentPage.match('Dashboard')? activeClass:''">Dashboard
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'Content' }"
                                 :class="currentPage.match('Content')? activeClass:''">Manage Content
                    </router-link>
                </li>

                <li class="nav-item" :class="linkGrayOut">
                    <router-link class="nav-link" :to="{ name: 'CompanyQuestionnairesDetails' }"
                                 :class="currentPage.match('CompanyQuestionnairesDetails')? activeClass:''">Manage
                        Company Profile
                    </router-link>
                </li>
                <!--<li class="nav-item">
                    <router-link class="nav-link" :to="{ name: 'Settings' }"
                                 :class="currentPage.match('Settings')? activeClass:''">Settings
                    </router-link>
                </li>-->
                <li class="nav-item" :class="linkGrayOut">
                    <a
                        class="nav-link nav-link-collapse"
                        href="#"
                        id="hasSubItems"
                        data-toggle="collapse"
                        data-target="#collapsePersonalizedNews"
                        aria-controls="collapsePersonalizedNews"
                        :aria-expanded="currentPage.match('PersonalizedNewsIndustry') || currentPage.match('PersonalizedNewsNode')?'true':'false'"
                        @click="changeCollapse"
                    >Personalized News <i
                        class="float-right mt-1 fa"
                        :class="{ 'fa-plus': !isCollapse, 'fa-minus': isCollapse }"
                    ></i>
                    </a>
                    <ul class="nav-second-level collapse list-unstyled"
                        :class="currentPage.match('PersonalizedNewsIndustry') || currentPage.match('PersonalizedNewsNode')? 'show':''"
                        id="collapsePersonalizedNews" data-parent="#navAccordion">
                        <li class="nav-item pl-3" :class="linkGrayOut">
                            <router-link class="nav-link" :to="{ name: 'PersonalizedNewsIndustry' }"
                                         :class="currentPage.match('PersonalizedNewsIndustry')? activeClass:''">Industry
                                + Location
                            </router-link>
                        </li>
                        <li class="nav-item pl-3" :class="linkGrayOut">
                            <router-link class="nav-link" :to="{ name: 'PersonalizedNewsNode' }"
                                         :class="currentPage.match('PersonalizedNewsNode')? activeClass:''">Node +
                                Location
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="nav-item bg-gray" :class="linkGrayOut">
                    <!--<router-link class="nav-link" :to="{ name: 'Analytics' }" :class="currentPage.match('Analytics')? activeClass:''">Analytics (Coming Soon)</router-link>-->
                    <router-link class="nav-link" :to="{ name: '' }">Analytics (Coming Soon)</router-link>
                </li>
                <li class="nav-item" :class="linkGrayOut">
                    <router-link
                        class="nav-link nav-link-collapse" :to="{ name: 'videoQuestionnaire' }"
                        id="hasVideoSubItems"
                        data-target="#collapseVideoUpload"
                        aria-controls="collapseVideoUpload"
                        :aria-expanded="currentPage.match('videoQuestionnaire')?'true':'false'"
                        :class="currentPage.match('videoQuestionnaire')?activeClass:''"
                    >Video Upload
                    </router-link>
                    <ul class="nav-second-level collapse list-unstyled"
                        :class="currentPage.match('videoQuestionnaire')? 'show':''"
                        id="collapseVideoUpload" data-parent="#navAccordion">
                        <li class="nav-item pl-3"
                            :class="videoProgressStep < 1?'bg-gray':'',linkGrayOut">
                            <router-link class="nav-link" :to="{ name: '' }"
                                         @click.native="goToMediaUploadStep(1,'video')">
                                Classification
                            </router-link>
                        </li>
                        <li class="nav-item pl-3"
                            :class="videoProgressStep < 2?'bg-gray':'',linkGrayOut">
                            <router-link v-if="videoProgressStep < 2" class="nav-link" :to="{ name: '' }">Video Detail
                            </router-link>
                            <router-link v-else class="nav-link" :to="{ name: '' }"
                                         @click.native="goToMediaUploadStep(2,'video')">Video Detail
                            </router-link>
                        </li>
                        <li class="nav-item pl-3"
                            :class="videoProgressStep < 3?'bg-gray':'',linkGrayOut">
                            <router-link v-if="videoProgressStep < 3" class="nav-link" :to="{ name: '' }">Upload Video
                            </router-link>
                            <router-link v-else class="nav-link" :to="{ name: '' }"
                                         @click.native="goToMediaUploadStep(3,'video')">Upload Video
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="nav-item" :class="linkGrayOut">
                    <router-link
                        class="nav-link nav-link-collapse" :to="{ name: 'audioQuestionnaire' }"
                        id="hasAudioSubItems"
                        data-target="#collapseAudioUpload"
                        aria-controls="collapseAudioUpload"
                        :aria-expanded="currentPage.match('audioQuestionnaire')?'true':'false'"
                        :class="currentPage.match('audioQuestionnaire')?activeClass:''"
                    >Audio Upload
                    </router-link>
                    <ul class="nav-second-level collapse list-unstyled"
                        :class="currentPage.match('audioQuestionnaire')? 'show':''"
                        id="collapseAudioUpload" data-parent="#navAccordion">
                        <li class="nav-item pl-3"
                            :class="audioProgressStep < 1?'bg-gray':'',linkGrayOut">
                            <router-link class="nav-link" :to="{ name: '' }"
                                         @click.native="goToMediaUploadStep(1,'audio')">
                                Classification
                            </router-link>
                        </li>
                        <li class="nav-item pl-3"
                            :class="audioProgressStep < 2?'bg-gray':'',linkGrayOut">
                            <router-link v-if="audioProgressStep < 2" class="nav-link" :to="{ name: '' }">Audio Detail
                            </router-link>
                            <router-link v-else class="nav-link" :to="{ name: '' }"
                                         @click.native="goToMediaUploadStep(2,'audio')">Audio Detail
                            </router-link>
                        </li>
                        <li class="nav-item pl-3"
                            :class="audioProgressStep < 3?'bg-gray':'',linkGrayOut">
                            <router-link v-if="audioProgressStep < 3" class="nav-link" :to="{ name: '' }">Upload Audio
                            </router-link>
                            <router-link v-else class="nav-link" :to="{ name: '' }"
                                         @click.native="goToMediaUploadStep(3,'audio')">Upload Audio
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>

    export default {
        data() {
            return {
                activeClass: 'active',
                isDisabled: false,
                isUploading: false,
                isCollapse: false,
                linkGrayOut: '',
            };
        },
        mounted() {
            if (localStorage.getItem('videoUploadRemainingDays') == 0 && localStorage.getItem('isVideoUploaded') == 'no') {
                this.linkGrayOut = 'trialExpired';
            }
        },
        props: ["videoStep", "videoProgressStep", "audioStep", "audioProgressStep"],

        methods: {
            changeCollapse: function () {
                if (this.isCollapse) {
                    this.isCollapse = false;
                } else {
                    this.isCollapse = true;
                }
            },
            goToMediaUploadStep: function (step, type) {
                if (type == 'video') {
                    if (step == 1 && this.videoStep != 1) {
                        this.$parent.setPreviousStepDataFromSidebarStep1();
                    } else if (step == 2 && this.videoStep != 2) {
                        this.$parent.setPreviousStepDataFromSidebarStep2();
                    } else if (step == 3 && this.videoStep != 3) {
                        this.$parent.updateFormData();
                    }
                } else if (type == 'audio') {
                    if (step == 1 && this.audioStep != 1) {
                        this.$parent.setPreviousStepDataFromSidebarStep1();
                    } else if (step == 2 && this.audioStep != 2) {
                        this.$parent.setPreviousStepDataFromSidebarStep2();
                    } else if (step == 3 && this.audioStep != 3) {
                        this.$parent.updateFormData();
                    }
                }
                this.$parent.step = step;
                this.$parent.progressBarActiveInactive(step);
            }
        },
        computed: {
            currentPage() {
                return this.$route.name
            }
        },
        created: function () {
            if (this.currentPage.match('PersonalizedNewsIndustry') || this.currentPage.match('PersonalizedNewsNode')) {
                this.isCollapse = true;
            }
        },
        components: {
            ProfileImageSettings: () => import("../components/settings/ProfileImageSettings")
        }
    }
</script>

<style>
    /*#image-cropper-modal___BV_modal_content_ {
        background: black !important;;
        color: white;
    }

    #image-cropper-modal___BV_modal_content_ .modal-title {
        margin-left: initial;
    }

    #image-cropper-modal___BV_modal_content_ .close {
        color: #ffffff;
    }

    #image-cropper-modal___BV_modal_footer_ .btn-default {
        background-color: #ffffff;
    }

    #image-cropper-modal___BV_modal_header_ {
        border-bottom: 1px solid #484e53;
    }

    #image-cropper-modal___BV_modal_footer_ {
        border-top: 1px solid #484e53;
    }

    .cropper-view-box {
        box-shadow: 0 0 0 1px #39f;
        border-radius: 50%;
        outline: 0;
    }

    .cropper-face {
        background-color: inherit !important;
    }

    .cropper-view-box {
        outline: inherit !important;
    }*/

</style>
