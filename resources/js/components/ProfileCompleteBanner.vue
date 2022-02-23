<template>
    <div id="profile-complete-banner" class="profile-complete-banner row mx-auto" v-if="progressPercentage != 100"
         v-show="showComponent">
        <div class="banner-box">
            <div class="mb-1">
                <div class="title-bar clearfix">
                    <p class="float-left progress-title mb-0">
                        Your profile is {{progressPercentage}}% Completed
                        <router-link
                            class="btn btn-sm btn-primary text-center ml-3"
                            @click.native="updateViewKey"
                            :to="{name: 'CompanyQuestionnairesDetails', 'hash': '#profile'}">
                            Complete your Profile
                        </router-link>
                    </p>
                    <template v-if="visible">
                        <button type="button" class="close" aria-label="Close" @click="visible = false">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </template>
                </div>
                <a href="javascript:;;" class="" @click="visible = !visible" id="ipp_100">What's this?</a>
                <b-progress :value="progressPercentage" :max="100" :class="getPercentageColorClass()"></b-progress>
            </div>
            <transition name="banner-fade">
                <div v-if="visible">
                    <div class="row mt-3" id="progress-percentage-container">
                        <ul class="col-10 text-left percentage-text list-unstyled">
                            <li class="mb-1">1.
                                <router-link :to="{name: 'CompanyQuestionnairesDetails', 'hash': '#profile'}">General
                                </router-link>
                            </li>
                            <li class="mb-1">2.
                                <router-link :to="{name: 'CompanyQuestionnairesDetails', 'hash': '#executives'}">Company
                                    Contacts
                                </router-link>
                            </li>
                            <li class="mb-1">3.
                                <router-link :to="{name: 'CompanyQuestionnairesDetails', 'hash': '#companyType'}">
                                    Company Structure
                                </router-link>
                            </li>
                            <li class="mb-1">4.
                                <router-link :to="{name: 'CompanyQuestionnairesDetails', 'hash': '#finance'}">Valuation
                                    & IP
                                </router-link>
                            </li>
                            <li class="mb-1">5.
                                <router-link :to="{name: 'CompanyQuestionnairesDetails', 'hash': '#social'}">Social
                                    Presence
                                </router-link>
                            </li>
                            <li class="mb-1">6.
                                <router-link :to="{name: 'CompanyQuestionnairesDetails', 'hash': '#taxonomy'}">
                                    Classification
                                </router-link>
                            </li>
                        </ul>
                        <ul class="col-2 text-right percentage-text list-unstyled">
                            <li class="mb-1">{{this.stepsPercentage(15,generalProgress)}}%</li>
                            <li class="mb-1">{{this.stepsPercentage(15,contactProgress)}}%</li>
                            <li class="mb-1">{{this.stepsPercentage(15,structureProgress)}}%</li>
                            <li class="mb-1">{{this.stepsPercentage(15,valuationProgress)}}%</li>
                            <li class="mb-1">{{this.stepsPercentage(15,socialProgress)}}%</li>
                            <li class="mb-1">{{this.stepsPercentage(25,taxonomyProgress)}}%</li>

                        </ul>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <h5>Why Complete your Profile?</h5>
                        </div>
                        <transition name="banner-fade">
                            <div class="col-12 mt-2">
                                <p><strong>Because it helps you.</strong> The more information you add about your
                                    company and your
                                    content the easier it is for users to find you and understand what your business has
                                    to offer.
                                </p>
                                <p>
                                    Companies and investors will be able to search and filter by the characteristics
                                    contained in your profile. With a detailed profile you can market your company
                                    effectively and expose your business to the most opportunities.
                                </p>
                            </div>
                        </transition>
                        <div class="col-12">
                            <router-link @click.native="updateViewKey"
                                         class="btn btn-primary float-right"
                                         style="color: #ffffff"
                                         :to="{name: 'CompanyQuestionnairesDetails', 'hash': '#profile'}">
                                Go to Profile
                            </router-link>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <loader :is-visible="isLoading"></loader>
    </div>

</template>

<script>
    import loader from "../components/Loader";
    import User from "../apis/User";
    import Common from "../apis/Common";

    export default {
        data() {
            return {
                isLoading: false,
                visible: false,
                progressPercentage: 0,
                generalProgress: 0,
                contactProgress: 0,
                structureProgress: 0,
                valuationProgress: 0,
                socialProgress: 0,
                taxonomyProgress: 0,
                showComponent: false,
            }
        },
        props: ["changedPercentage"],
        watch: {
            changedPercentage: function (newVal, oldVal) { // watch it
                //console.log('Prop changed: ', newVal, ' | was: ', oldVal)
                this.generalProgress = newVal.general_info;
                this.contactProgress = newVal.contact;
                this.structureProgress = newVal.structure;
                this.valuationProgress = newVal.valuation;
                this.socialProgress = newVal.social_presence;
                this.taxonomyProgress = newVal.hierarchy;
                this.progressPercentage = parseInt(this.generalProgress) + parseInt(this.contactProgress) + parseInt(this.structureProgress) +
                    parseInt(this.valuationProgress) + parseInt(this.socialProgress) + parseInt(this.taxonomyProgress);
                if (this.progressPercentage != 100) {
                    localStorage.removeItem("profileCompleted");
                    this.showComponent = true;
                    /*Add extra padding in a below section class of profile complete banner*/
                    $('.for-profile-banner-padding').css('paddingTop', '107px');
                } else {
                    this.showComponent = false;
                    /*Remove extra padding in a below section class of profile complete banner*/
                    $('.for-profile-banner-padding').css('paddingTop', '0px');
                }
            }
        },
        methods: {
            toggle() {
                this.visible = !this.visible;
            },
            close(e) {
                //if (!this.$el.contains(e.target)) {
                if (e.target.id !== 'ipp_100') {
                    this.visible = false;
                }
            },
            updateViewKey() {
                this.$emit("updateViewKey");
            },
            getCompanyInfo: function () {
                User.getCompanyInfo()
                    .then((response) => {
                        var companyInfo = response.data.data;
                        this.generalProgress = companyInfo.general_info;
                        this.contactProgress = companyInfo.contact;
                        this.structureProgress = companyInfo.structure;
                        this.valuationProgress = companyInfo.valuation;
                        this.socialProgress = companyInfo.social_presence;
                        this.taxonomyProgress = companyInfo.hierarchy;
                        this.progressPercentage = parseInt(this.generalProgress) + parseInt(this.contactProgress) + parseInt(this.structureProgress) +
                            parseInt(this.valuationProgress) + parseInt(this.socialProgress) + parseInt(this.taxonomyProgress);
                        if (this.progressPercentage < 100) {
                            this.showComponent = true;
                            /*Add extra padding in a below section class of profile complete banner*/
                            $('.for-profile-banner-padding').css('paddingTop', '107px');
                        }
                        if (this.progressPercentage == 100) {
                            localStorage.setItem("profileCompleted", "true");
                        } else {
                            localStorage.removeItem("profileCompleted");
                        }
                        this.isLoading = false;
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
            }
        },
        mounted() {
            this.stepsPercentage = Common.calculateProfileStepsPercentage;
            if (!localStorage.getItem("profileCompleted")) {
                this.isLoading = true;
                this.getCompanyInfo();
            }
        },
        created() {
            window.addEventListener("click", this.close);
        },

        beforeDestroy() {
            window.removeEventListener("click", this.close);
        },
        components: {
            loader,
            Common
        },
    };
</script>

<style>
    .red-color .progress-bar {
        background: #FF0000 !important;
    }

    .orange-color .progress-bar {
        background: #FFA500 !important;
    }

    .yellow-color .progress-bar {
        background: #FFFF00 !important;
    }

    .light-pink-color .progress-bar {
        background: #ffb6c1 !important;
    }

    .light-purple-color .progress-bar {
        background: #b199df !important;
    }

    .purple-color .progress-bar {
        background: #7E097C !important;
    }

    .banner-fade-enter-active, .banner-fade-leave-active {
        transition: opacity .5s;
    }

    .banner-fade-enter, .banner-fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }

    #profile-complete-banner {
        width: 100%;
        padding-left: 5%;
        padding-right: 5%;
        border-bottom: 1px solid #b0b0b0;
        position: fixed;
        background: #fff;
        z-index: 9;
        top: 69px;
    }

    #profile-complete-banner .banner-box {
        padding-top: 1rem;
        padding-bottom: 1rem;
        position: relative;
        overflow: hidden;
        background: #fff;
        /*box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);*/
        z-index: 1;
        width: 100%;
    }

    #profile-complete-banner .banner-box .title {
        font-weight: 700;
        margin-bottom: 15px;
        font-size: 18px;
    }

    #profile-complete-banner .banner-box .title a {
        color: #124265;
        transition: 0.3s;
    }
</style>
