<template>
    <div>
        <section class="app-sidebar">
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
                <ul class="nav">
                    <!--<li class="nav-item nav-profile">
                        <ProfileImageSettings @updateProfile="updateProfile" :profileUpdatedData="profileUpdatedData" />
                    </li>-->
                    <!--Video:
                    {{this.videoStep}}
                    {{this.videoProgressStep}}
                    Audio:
                    {{this.audioStep}}
                    {{this.audioProgressStep}}-->
                    <li class="nav-item mt-4">
                        <router-link class="nav-link" :to="{ name: 'Dashboard' }"
                                     :class="currentPage.match('Dashboard') || currentPage.match('Bulletins')? activeClass:''">
                            <i class="menu-icon typcn typcn-home-outline"></i>
                            <span class="menu-title">Dashboard</span>
                        </router-link>
                    </li>
                    <li class="nav-item" v-if="companySlugName ==  currentPageSlug">
                        <router-link class="nav-link" v-b-toggle="'company-profile'" :to="'/company/' + companySlugName"
                                     data-toggle="collapse"
                                     :aria-expanded="(currentPage.match('CompanyDetails') || currentPage.match('CompanyQuestionnairesDetails')) ? 'true':'false'"
                                     :class="(currentPage.match('CompanyDetails') || currentPage.match('CompanyQuestionnairesDetails')) ? 'active sub-menu-area-expanded':''">
                            <i class="menu-icon mdi mdi-newspaper"></i>
                            <span class="menu-title">Company Profile</span>
                            <i class="menu-arrow"></i>
                        </router-link>
                        <b-collapse id="company-profile" accordion="my-accordion" role="tabpanel" :class="(currentPage.match('CompanyDetails') || currentPage.match('CompanyQuestionnairesDetails'))?'show d-block':'d-none'">
                            <ul class="nav flex-column sub-menu">
                                <li class="nav-item">
                                    <router-link class="nav-link" :class="currentPage.match('CompanyDetails')? 'sub-menu-active':''" :to="'/company/' + companySlugName" >Profile Page</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" :class="currentPage.match('CompanyQuestionnairesDetails')? 'sub-menu-active':''"  :to="{ name: 'CompanyQuestionnairesDetails' }" >Manage Profile</router-link>
                                </li>
                            </ul>
                        </b-collapse>
                    </li>
                    <li class="nav-item" v-else>
                        <router-link class="nav-link" v-b-toggle="'company-profile'" :to="'/company/' + companySlugName"
                                     data-toggle="collapse"
                                     :aria-expanded="(currentPage.match('CompanyDetails') || currentPage.match('CompanyQuestionnairesDetails')) ? 'true':'false'"
                                     :class="(currentPage.match('CompanyDetails') || currentPage.match('CompanyQuestionnairesDetails')) ? 'sub-menu-area-expanded':''">
                            <i class="menu-icon mdi mdi-newspaper"></i>
                            <span class="menu-title">Company Profile</span>
                            <i class="menu-arrow"></i>
                        </router-link>
                        <b-collapse id="company-profile" accordion="my-accordion" role="tabpanel" :class="(currentPage.match('CompanyDetails') || currentPage.match('CompanyQuestionnairesDetails'))?'show':'d-none'">
                            <ul class="nav flex-column sub-menu">
                                <li class="nav-item">
                                    <router-link class="nav-link" :class="currentPage.match('CompanyDetails')? 'sub-menu-active':''" :to="'/company/' + companySlugName" >Profile Page</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" :class="currentPage.match('CompanyQuestionnairesDetails')? 'sub-menu-active':''"  :to="{ name: 'CompanyQuestionnairesDetails' }" >Manage Profile</router-link>
                                </li>
                            </ul>
                        </b-collapse>
                    </li>
                    <!--<li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Screener' }"
                                     :class="currentPage === 'Screener' ? activeClass:''">
                            <i class="menu-icon typcn typcn-device-desktop"></i>
                            <span class="menu-title">Screener</span>
                        </router-link>
                    </li>-->
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'NewScreener' }"
                                     :class="currentPage ==='NewScreener'? activeClass:''">
                            <i class="menu-icon typcn typcn-device-desktop"></i>
                            <span class="menu-title">Video/Audio Database</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'videoQuestionnaire' }"
                                     :class="currentPage ==='videoQuestionnaire'? activeClass:''">
                            <i class="menu-icon fa fa-video"></i>
                            <span class="menu-title">Upload Video</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'audioQuestionnaire' }"
                                     :class="currentPage ==='audioQuestionnaire'? activeClass:''">
                            <i class="menu-icon fa fa-headphones-alt"></i>
                            <span class="menu-title">Upload Audio</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'fileDetectionUpload' }"
                                     :class="currentPage ==='fileDetectionUpload'? activeClass:''">
                            <i class="menu-icon fa fa-headphones-alt"></i>
                            <span class="menu-title">File Detection Upload</span>
                        </router-link>
                    </li>
                    <!--<li class="nav-item">
                        <router-link class="nav-link" v-b-toggle="'upload-video'" :to="{ name: 'videoQuestionnaire' }"
                                     data-toggle="collapse"
                                     :aria-expanded="currentPage.match('videoQuestionnaire')?'true':'false'"
                                     :class="currentPage.match('videoQuestionnaire')?'active sub-menu-area-expanded':''">
                            <i class="menu-icon fa fa-video"></i>
                            <span class="menu-title">Upload Video</span>
                            <i class="menu-arrow"></i>
                        </router-link>
                        <b-collapse id="upload-video" accordion="my-accordion" role="tabpanel" :class="currentPage.match('videoQuestionnaire')?'show d-block':'d-none'">
                            <ul class="nav flex-column sub-menu">
                                <li class="nav-item">
                                    <router-link class="nav-link" :class="(videoStep == 1) ? 'sub-menu-active':''" to="" @click.native="$parent.navigateMediaStepsFromSidebar(1,videoStep,'video')">Classification</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link v-if="videoProgressStep < 2" class="nav-link" to="">Video Detail</router-link>
                                    <router-link v-else class="nav-link" :class="(videoStep == 2) ? 'sub-menu-active':''" to="" @click.native="$parent.navigateMediaStepsFromSidebar(2,videoStep,'video')">Video Detail</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link v-if="videoProgressStep < 3" class="nav-link" to="">Upload Video</router-link>
                                    <router-link v-else class="nav-link" :class="(videoStep == 3) ? 'sub-menu-active':''" to="" @click.native="$parent.navigateMediaStepsFromSidebar(3,videoStep,'video')">Upload Video</router-link>
                                </li>
                            </ul>
                        </b-collapse>
                    </li>-->
                    <!--<li class="nav-item">
                        <router-link class="nav-link" v-b-toggle="'upload-audio'"
                                     data-toggle="collapse"
                                     :to="{ name: 'audioQuestionnaire' }"
                                     :aria-expanded="currentPage.match('audioQuestionnaire')?'true':'false'"
                                     :class="currentPage.match('audioQuestionnaire')?'active sub-menu-area-expanded':''">
                            <i class="menu-icon fa fa-headphones-alt"></i>
                            <span class="menu-title">Upload Audio</span>
                            <i class="menu-arrow"></i>
                        </router-link>
                        <b-collapse id="upload-audio" accordion="my-accordion" role="tabpanel" :class="currentPage.match('audioQuestionnaire')?'show d-block':'d-none'">
                            <ul class="nav flex-column sub-menu">
                                <li class="nav-item">
                                    <router-link class="nav-link" :class="(audioStep == 1) ? 'sub-menu-active':''" to="" @click.native="$parent.navigateMediaStepsFromSidebar(1,audioStep,'audio')">Classification</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link v-if="audioProgressStep < 2" class="nav-link" to="">Audio Detail</router-link>
                                    <router-link v-else class="nav-link" :class="(audioStep == 2) ? 'sub-menu-active':''" to="" @click.native="$parent.navigateMediaStepsFromSidebar(2,audioStep,'audio')">Audio Detail</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link v-if="audioProgressStep < 3" class="nav-link" to="">Upload Audio</router-link>
                                    <router-link v-else class="nav-link" :class="(audioStep == 3) ? 'sub-menu-active':''" to="" @click.native="$parent.navigateMediaStepsFromSidebar(3,audioStep,'audio')">Upload Audio</router-link>
                                </li>
                            </ul>
                        </b-collapse>
                    </li>-->
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Content' }"
                                     :class="currentPage.match('Content')? activeClass:''">
                            <i class="menu-icon far fa-building"></i>
                            <span class="menu-title">Content Library</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Chat' }"
                                     :class="currentPage.match('Chat')? activeClass:''">
                            <i class="menu-icon far fa-comment-alt"></i>
                            <span class="menu-title">Chat</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Settings' }"
                                     :class="currentPage.match('Settings')? activeClass:''">
                            <i class="menu-icon mdi mdi-settings-outline"></i>
                            <span class="menu-title">Settings</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" v-b-toggle="'personalized-news'"
                                     data-toggle="collapse"
                                     :to="{ name: 'PersonalizedNewsIndustry' }"
                                     :aria-expanded="currentPage.match('PersonalizedNewsIndustry') || currentPage.match('PersonalizedNewsNode')?'true':'false'"
                                     :class="(currentPage.match('PersonalizedNewsIndustry') || currentPage.match('PersonalizedNewsNode')) ? 'active sub-menu-area-expanded':''">
                            <i class="menu-icon mdi mdi-newspaper"></i>
                            <span class="menu-title">Personalized News</span>
                            <i class="menu-arrow"></i>
                        </router-link>
                        <b-collapse id="personalized-news" accordion="my-accordion" role="tabpanel" :class="(currentPage.match('PersonalizedNewsIndustry') || currentPage.match('PersonalizedNewsNode'))?'show d-block':'d-none'">
                            <ul class="nav flex-column sub-menu">
                                <li class="nav-item">
                                    <router-link class="nav-link" :to="{ name: 'PersonalizedNewsIndustry' }" :class="currentPage.match('PersonalizedNewsIndustry')? 'sub-menu-active':''">Industry + Location</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link class="nav-link" :to="{ name: 'PersonalizedNewsNode' }" :class="currentPage.match('PersonalizedNewsNode')? 'sub-menu-active':''">Node + Location</router-link>
                                </li>
                            </ul>
                        </b-collapse>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'Analytics' }"
                                     :class="currentPage.match('Analytics')? activeClass:''">
                            <i class="menu-icon mdi mdi-presentation-play"></i>
                            <span class="menu-title">Analytics</span>
                        </router-link>
                    </li>
                    <!--<li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'SocialIntegration' }"
                                     :class="currentPage.match('SocialIntegration')? activeClass:''">
                            <i class="menu-icon mdi mdi-chip"></i>
                            <span class="menu-title">Integrations</span>
                        </router-link>
                    </li>
                    <p class="sidebar-menu-separator"></p>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'ContactUsIssuer' }"
                                     :class="currentPage.match('ContactUsIssuer')? activeClass:''">
                            <i class="menu-icon mdi mdi-phone-outgoing"></i>
                            <span class="menu-title">Contact Us</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: '' }" @click.native="showSupportModal">
                            <i class="menu-icon mdi mdi-help-circle-outline"></i>
                            <span class="menu-title">Help</span>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: '' }" @click.native="logout">
                            <i class="menu-icon mdi mdi-logout"></i>
                            <span class="menu-title">Log out</span>
                        </router-link>
                    </li>-->
                </ul>
            </nav>
        </section>
        <!-- Support modal started -->
        <b-modal centered ref="support-modal" size="md"
                 hide-footer>
            <template #modal-header>
                <div class="w-100">
                    <h5 class="modal-title modal-title-new">Help and Support</h5>
                    <b-button class="support-modal-close close float-right" @click="closeSupportModal">x</b-button>
                </div>
            </template>
            <HelpAndSupport @helpAndSupportSuccess="closeSupportModal"></HelpAndSupport>
        </b-modal>
        <!-- End Support modal -->
        <loader :is-visible="isLoading"></loader>
    </div>
</template>

<script>
    import JQuery from 'jquery'
    import User from "../../apis/User";
    // eslint-disable-next-line
    let $ = JQuery
    export default {
        name: 'app-sidebar',
        data() {
            return {
                isLoading: false,
                activeClass: 'active',
                isDisabled: false,
                isUploading: false,
                isCollapse: false,
                linkGrayOut: '',
                companyUuid: null,
                companySlugName: null,
            };
        },
        props: ["profileUpdatedData","audioStep","audioProgressStep","videoStep","videoProgressStep"],
        methods: {
            updateProfile: function (data) {
                this.$emit('updateProfile',data)
            },
            closeSupportModal() {
                this.$refs['support-modal'].hide()
            },
            showSupportModal() {
                this.$refs['support-modal'].show()
            },
            logout() {
                this.isLoading = true;
                let logoutFormData = new FormData();
                logoutFormData.append('type', 'manual');
                User.logout(logoutFormData).then(() => {
                    this.isLoading = false;
                    localStorage.clear();
                    this.$router.push({name: "Home"});
                });
            },
        },
        mounted() {
            const body = document.querySelector('body')
            // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
            document.querySelectorAll('.sidebar .nav-item').forEach(function (el) {
                el.addEventListener('mouseover', function () {
                    if (body.classList.contains('sidebar-icon-only')) {
                        el.classList.add('hover-open')
                    }
                })
                el.addEventListener('mouseout', function () {
                    if (body.classList.contains('sidebar-icon-only')) {
                        el.classList.remove('hover-open')
                    }
                })
            })
            if (localStorage.getItem('videoUploadRemainingDays') == 0 && localStorage.getItem('isVideoUploaded') == 'no') {
                this.linkGrayOut = 'trialExpired';
            }
        },
        computed: {
            currentPage() {
                return this.$route.name
            },
            currentPageSlug() {
                return !!this.$route.params.slug ? this.$route.params.slug : this.companySlugName;
            }
        },
        created: function () {
            if (this.currentPage.match('PersonalizedNewsIndustry') || this.currentPage.match('PersonalizedNewsNode')) {
                this.isCollapse = true;
            }
            this.companyUuid = localStorage.getItem('companyUuid');
            this.companySlugName = localStorage.getItem('companySlugName');
        },
        components: {
            loader: () => import("../../components/Loader"),
            ProfileImageSettings: () => import("../../components/settings/ProfileImageSettings"),
            HelpAndSupport: () => import("../../components/HelpAndSupport"),
        }
    }
</script>

<style scoped lang="scss">
    .app-sidebar {
        padding-top: 0px !important;
        background-color: #fff;
        height: 100%;
    }
    ul.nav li.nav-item a.active{
        background: #4823A8 !important;
        border-radius: 0 30px 30px 0;
        color: #fff !important;
    }
    ul.nav li.nav-item a.active i{
        color: #fff !important;
    }
    .sub-menu-active{
        color: #1E0857 !important;
        text-decoration: underline;
    }
    .sub-menu-area-expanded i.menu-arrow{
        /*transform: rotate(-90deg);*/
    }
</style>
