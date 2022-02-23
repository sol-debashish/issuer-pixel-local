<template>
    <div>
        <template v-if="isLoggedIn">
            <section class="main-view">
                <div class="container-scroller">
                    <app-header :profileUpdatedData="profileUpdatedData" :resumble="resumble" />
                    <div class="container-fluid page-body-wrapper">
                        <app-sidebar @updateProfile="updateProfile" :profileUpdatedData="profileUpdatedData"
                                     :audioStep="audioStep" :audioProgressStep="audioProgressStep"
                                     :videoStep="videoStep" :videoProgressStep="videoProgressStep"/>
                        <div class="main-panel">
                            <div class="content-wrapper">
                                <router-view ref="nestedComponent" @logout="logout" @updateProfile="updateProfile" @updateViewKey="updateViewKey" :key="viewKey"
                                             :resumble="resumble" :resumbleUploadCompleted="resumbleUploadCompleted"
                                             @updateAudioUploadStep="updateAudioUploadStep" @updateAudioUploadProgressStep="updateAudioUploadProgressStep"
                                             @updateVideoUploadStep="updateVideoUploadStep" @updateVideoUploadProgressStep="updateVideoUploadProgressStep"
                                             @setVideoUploaderState="setVideoUploaderState"></router-view>
                            </div>
                            <!-- content wrapper ends -->
                            <VideoUploaderProgressbar v-if="isUploadingModalVisible" @close="closeModal"  @resumbleUploadCompleted="resumbleUploadCompletedFn" :resumble="resumble" />
                            <app-footer/>
                        </div>
                        <!-- main panel ends -->
                    </div>
                    <!-- page-body-wrapper ends -->
                </div>
            </section>
        </template>
        <template v-else>
            <Navigation/>
            <div class="content-wrapper content-with-navigation">
                <router-view></router-view>
            </div>
        </template>
    </div>
</template>

<script>
    import AppHeader from '../components/partials/AppHeader'
    import AppSidebar from '../components/partials/AppSidebar'
    import AppFooter from '../components/partials/AppFooter'
    import Navigation from "../components/Navigation.vue";
    import VideoUploaderProgressbar from '../components/VideoUploaderProgressbar'

    export default {
        name: 'mainView',
        data: function () {
            return {
                isLoggedIn: false,
                profileUpdatedData : "",
                viewKey: 1,
                audioStep: 1,
                audioProgressStep: 1,
                videoStep: 1,
                videoProgressStep: 1,
                isUploadingModalVisible: false,
                resumble :null,
                resumbleUploadCompleted :false
            }
        },
        methods: {
            updateProfile: function (data) {
                this.profileUpdatedData = data
            },
            updateViewKey : function(){
                this.viewKey+=1;
            },
            logout : function(){
                localStorage.clear();
                this.$router.push({name: "Login"});
            },
            updateAudioUploadStep : function(step){
                this.audioStep= step;
            },
            updateAudioUploadProgressStep : function(step){
                this.audioProgressStep = step;
            },
            updateVideoUploadStep : function(step){
                this.videoStep= step;
            },
            updateVideoUploadProgressStep : function(step){
                this.videoProgressStep = step;
            },
            navigateMediaStepsFromSidebar: function (step,mediaStep, type) {
                // console.log(this.$refs.nestedComponent);
                if (type == 'video') {
                    if (step == 1 && mediaStep != 1) {
                        this.$refs.nestedComponent.setPreviousStepDataFromSidebarStep1();
                    } else if (step == 2 && mediaStep != 2) {
                        this.$refs.nestedComponent.setPreviousStepDataFromSidebarStep2();
                    } else if (step == 3 && mediaStep != 3) {
                        this.$refs.nestedComponent.updateFormData();
                    }
                    this.videoStep= step;
                } else if (type == 'audio') {
                    if (step == 1 && mediaStep != 1) {
                        this.$refs.nestedComponent.setPreviousStepDataFromSidebarStep1();
                    } else if (step == 2 && mediaStep != 2) {
                        this.$refs.nestedComponent.setPreviousStepDataFromSidebarStep2();
                    } else if (step == 3 && mediaStep != 3) {
                        this.$refs.nestedComponent.updateFormData();
                    }
                    this.audioStep= step;
                }
                this.$refs.nestedComponent.step = step;
                this.$refs.nestedComponent.progressBarActiveInactive(step);
            },

            setVideoUploaderState : function(data){
                this.resumble = data
                this.resumbleUploadCompleted = false
                this.isUploadingModalVisible = true
            },
            closeModal() {
                window.onbeforeunload = function () {
                    // blank function do nothing
                }
                this.isUploadingModalVisible = false;
            },
            resumbleUploadCompletedFn() {
                this.resumbleUploadCompleted = true;
                this.isUploadingModalVisible = false;
            },
        },
        mounted() {
            this.isLoggedIn = !!localStorage.getItem("token");
        },
        components: {
            AppHeader,
            AppSidebar,
            AppFooter,
            VideoUploaderProgressbar,
            Navigation
        }
    }
</script>

<!--<style scoped lang="scss">
  .main-view {

  }
</style>-->
<style scoped>
    @import "../../../node_modules/mdi/css/materialdesignicons.min.css";
    @import "../../../node_modules/vue-snotify/styles/material.css";
    @import "../../../node_modules/typicons.font/src/font/typicons.css";

    .content-with-navigation{
        padding-top: 70px;
    }
</style>

<style>
    .modal-title-new {
        font-size: 16px;
        color: #1e0857;
    }

    .message-modal-close {
        position: absolute;
        right: 16px;
        top: 16px;
    }

    .message-modal-close:hover {
        background-color: #ffffff;
    }
</style>
<!--<style scoped lang="scss">
    @import "../assets/scss/shared/style";
</style>-->
