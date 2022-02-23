<template>
    <div>
        <b-navbar id="template-header" class="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row"
                  toggleable="md">
            <div class="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
                <!--<router-link class="navbar-brand brand-logo" to="/">
                  <img src="../../assets/images/logo_dark.svg" alt="logo" />
                </router-link>-->
                <router-link :to="{ name: 'Dashboard'}" class="navbar-brand brand-logo logo dashboard-logo-img">
                    <img src="/images/issuerpixel_dashboard.png" alt="" class="img-fluid">
                </router-link>
                <router-link class="navbar-brand brand-logo-mini" to="/">
                    <img src="/images/issuerpixel_globe.png" alt="logo"/>
                </router-link>
            </div>
            <div class="navbar-menu-wrapper d-flex align-items-center ml-auto ml-lg-0">
                <button class="navbar-toggler navbar-toggler align-self-center" type="button"
                        @click="collapedSidebar()">
<!--                    <span class="mdi mdi-menu"></span>-->
                    <i
                        class="fa"
                        :class="{ 'fa-arrow-left': !isSidebarCollapse, 'fa-arrow-right': isSidebarCollapse }"
                    ></i>
                </button>
<!--                <span class="text-theme-dark-blue font-weight-bold">Beta</span>-->

                <div class="m-auto pl-4 header-bulletin fs-14">
                    <template v-for="(bulletin, index) in bulletins">
                        <router-link :to="{name: 'Bulletins', params: {index: index}}"  class="blue-text-color">
                            {{bulletin.title}}
                        </router-link>
                        . {{bulletin.createdAt}}
                        <template v-if="bulletins.length != index+1">|</template>
                    </template>
                </div>
                <b-navbar-nav class="navbar-nav-right ml-auto">
                    <div class="search-form d-none d-md-block text-right">
                    <a class="mr-3 btn dashboard-btn-upload w-100"
                       v-if="isAdminLoggedIn"
                       @click.prevent="backToAdmin"
                       href="javascript:;"
                    >Back to admin</a>
                        <!--video upload reminder hide temporary-->

<!--                    <ul class="upload-reminder" v-if="!isAdminLoggedIn && !videoUploaded">-->
<!--                        <li>You have {{videoRemainingDays}} days to upload a video!</li>-->
<!--                    </ul>-->
                    </div>
                    <span class="text-theme-dark-blue font-weight-bold">Beta</span>
                    <b-nav-item-dropdown right class="preview-list message-dropdown">
                        <template slot="button-content">
                            <div class="nav-link count-indicator">
                                <i class="mdi mdi-comment-outline"></i>
                                <span v-if="unreadMessage" class="count bg-success">{{ unreadMessage }}</span>
                            </div>
                        </template>
                        <b-dropdown-item class="preview-item py-2 px-0 border-bottom">
                            <p class="mb-0 font-weight-medium float-left mr-1">You have {{ unreadMessageText }} new messages </p>
                            <span v-if="totalMessages" class="badge badge-pill badge-primary ml-auto">
                                <router-link :to="{name: 'Messages', params: {index: 0}}" class="text-white" @click.native="markAllMessageAsRead">View All</router-link>
                            </span>
                            <span v-if="unreadMessage" class="badge badge-pill badge-secondary ml-1" @click="markAllMessageAsRead">Mark all as read</span>
                        </b-dropdown-item>
                        <b-dropdown-item class="preview-item" v-for="(message, index) in messages"
                            :key="'message-' + message.id"
                            :active="message.activeStatus"
                            :link-class="message.style">
                            <div class="preview-thumbnail">
                                <img :src="message.companyPhoto" alt="image" class="img-sm profile-pic">
                            </div>
                            <div class="preview-item-content flex-grow py-2">
                                <router-link :to="{name: 'Messages', params: {index: index}}" @click.native="updateReadStatus(index)">
                                    <span class="d-flex">
                                        <p class="preview-subject ellipsis font-weight-medium text-dark sender-name">{{ message.sender.name }}</p>
                                        <p class="font-weight-light small-text message-time">{{ message.createdAt }}</p>
                                    </span>
                                    <p class="font-weight-light small-text warp-text-title">{{ message.message }}</p>
                                </router-link>
                            </div>
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown right class="preview-list notification-dropdown">
                        <template slot="button-content">
                            <div class="nav-link count-indicator">
                                <i class="mdi mdi-bell-outline"></i>
                                <span v-if="unreadCount" class="count">{{ unreadCount }}</span>
                            </div>
                        </template>
                        <b-dropdown-item class="preview-item py-2 px-0 border-bottom">
                            <p class="mb-0 font-weight-medium float-left">You have {{ unreadText }} new notifications </p>
                            <span v-if="unreadCount" class="badge badge-pill badge-primary ml-1" @click="markAllAsRead">Mark all as read</span>
                        </b-dropdown-item>
                        <b-dropdown-item class="preview-item" v-for="(notification, index) in notifications"
                            :key="notification.id"
                            :active="notification.activeStatus"
                            :link-class="notification.style">
                            <div class="preview-item-content flex-grow py-2">
                                <h6 class="preview-subject font-weight-normal text-dark mb-1">{{ notification.data.message }}</h6>
                                <p class="font-weight-light small-text mb-0">{{ notification.createdAt }}</p>
                            </div>
                        </b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-dropdown size="md" variant="none" toggle-class="text-decoration-none px-3 py-2" no-caret
                                class="dashboard-btn-upload d-none d-sm-inline-block">
                        <template #button-content>
<!--                            <img class="upload-btn-icon" src="/images/upload.png"/> -->
                            <i class="fas fa-cloud-upload-alt pr-2"></i>
                            Upload Content
                        </template>
                        <b-dropdown-item v-bind:to="{ name: 'videoQuestionnaire' }"><i class="fa fa-video pr-1"></i>  Upload Video</b-dropdown-item>
                        <b-dropdown-item v-bind:to="{ name: 'audioQuestionnaire' }"><i class="fa fa-headphones-alt pr-1"></i>  Upload Audio</b-dropdown-item>
                    </b-dropdown>

                    <b-nav-item-dropdown right class="preview-list user-dropdown">
                        <template slot="button-content">
                            <div class="align-items-center">
                                <img class="img-xs rounded-circle" :src="(profileUpdatedData) ? profileUpdatedData.company_image : companyImage"
                                     :alt="username">
                                <p class="mb-0 text-center text-theme-dark-blue font-weight-bold">{{username}}</p>
                            </div>

                        </template>
                        <b-dropdown-item v-bind:to="{ name: 'CompanyQuestionnairesDetails' }">
                            <div class="dropdown-header text-center w-100">
                                <img class="img-md rounded-circle" :src="(profileUpdatedData) ? profileUpdatedData.company_image : companyImage"
                                     :alt="username">
                                <p class="mb-1 mt-3 font-weight-semibold">{{(profileUpdatedData) ? profileUpdatedData.company : company}}</p>
                                <p class="font-weight-light text-muted mb-0">{{(profileUpdatedData) ? profileUpdatedData.email : email}}</p>
                            </div>
                        </b-dropdown-item>
                        <b-dropdown-item v-bind:to="{ name: 'Settings' }"><i class="mdi mdi-settings-outline user-dropdown-icon mr-1"></i>
                             Settings
                        </b-dropdown-item>
                        <b-dropdown-item href="javascript:;" @click.prevent="showSupportModal"><i
                            class="fas fa-exclamation-circle user-dropdown-icon mr-1"></i> Help and Support
                        </b-dropdown-item>
                        <b-dropdown-item v-if="isLoggedIn" @click.prevent="logout" href="javascript:;"><i
                            class="mdi mdi-logout user-dropdown-icon mr-1"></i>Logout
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
                <button class="navbar-toggler navbar-toggler-right align-self-center" type="button"
                        @click="collapedMobileSidebar()">
                    <i
                        class="fa"
                        :class="{ 'fa-arrow-left': !isSidebarCollapse, 'fa-arrow-right': isSidebarCollapse }"
                    ></i>
<!--                    <span class="mdi mdi-menu"></span>-->
                </button>
            </div>
        </b-navbar>
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
    // eslint-disable-next-line
    import JQuery from 'jquery'
    import User from "../../apis/User";

    let $ = JQuery
    export default {
        name: 'app-header',
        data() {
            return {
                isLoading: false,
                isSidebarCollapse: false,
                isLoggedIn: false,
                isAdminLoggedIn: false,
                isLoggedInForQuestionnaire: false,
                activeClass: 'active',
                username: '',
                videoRemainingDays: 0,
                videoUploaded: false,
                adminData: {
                    adminInfo: ''
                },
                company: '',
                firstName: '',
                email: '',
                companyImage: '',
                notifications: [],
                totalNotifications: 0,
                unreadCount: 0,
                unreadText: 'no',
                latestNotificationTime: null,
                timer: null,
                messages: [],
                totalMessages: 0,
                unreadMessage: 0,
                unreadMessageText: 'no',
                latestMessageTime: null,
                messageTimer: null,
                receiverCompanyId: '',
                bulletins: [],
            };
        },
        props: ["profileUpdatedData", "resumble"],
        methods: {
            collapedSidebar: function () {
                $('body').toggleClass('sidebar-icon-only');
                if (this.isSidebarCollapse) {
                    this.isSidebarCollapse = false;
                } else {
                    this.isSidebarCollapse = true;
                }
                /*Hide active sub menus for audio and video upload when side bar toggle*/
                const body = document.querySelector('body');
                if (body.classList.contains('sidebar-icon-only')) {
                    if(this.currentPage.match('audioQuestionnaire')){
                        $('#upload-audio').removeClass('show show d-block');
                    }else if(this.currentPage.match('videoQuestionnaire')){
                        $('#upload-video').removeClass('show show d-block');
                    }else if(this.currentPage.match('CompanyDetails') || this.currentPage.match('CompanyQuestionnairesDetails')){
                        $('#company-profile').removeClass('show show d-block');
                    }else if(this.currentPage.match('PersonalizedNewsIndustry') || this.currentPage.match('PersonalizedNewsNode')){
                        $('#personalized-news').removeClass('show show d-block');
                    }
                }else{
                    if(this.currentPage.match('audioQuestionnaire')){
                        $('#upload-audio').addClass('show show d-block');
                    }else if(this.currentPage.match('videoQuestionnaire')){
                        $('#upload-video').addClass('show show d-block');
                    }else if(this.currentPage.match('CompanyDetails') || this.currentPage.match('CompanyQuestionnairesDetails')){
                        $('#company-profile').addClass('show show d-block');
                    }else if(this.currentPage.match('PersonalizedNewsIndustry') || this.currentPage.match('PersonalizedNewsNode')){
                        $('#personalized-news').addClass('show show d-block');
                    }
                }
                /*End*/
            },
            collapedMobileSidebar: function () {
                $('#sidebar').toggleClass('active');
                if (this.isSidebarCollapse) {
                    this.isSidebarCollapse = false;
                } else {
                    this.isSidebarCollapse = true;
                }
            },
            logout() {
                var vueInstance = this;
                if (!!this.resumble && this.resumble.isUploading())
                {
                    $.confirm({
                        title: 'Cancel upload',
                        content: 'Are you sure you want to cancel the upload?',
                        type: 'purple',
                        typeAnimated: true,
                        buttons: {
                            'Cancel Upload': {
                                btnClass: 'btn-default rounded-pill',
                                action: function(){
                                    vueInstance.resumble.cancel()
                                    vueInstance.logoutCall()
                                }
                            },
                            Close: {
                                btnClass: 'btn-success rounded-pill', // class for the button
                                action: function(){
                                }
                            },
                        }
                    });
                }
                else
                {
                    this.logoutCall()
                }

            },
            logoutCall(){
                this.isLoading = true;
                let logoutFormData = new FormData();
                logoutFormData.append('type', 'manual');
                User.logout(logoutFormData).then(() => {
                    this.isLoading = false;
                    localStorage.clear();
                    this.isLoggedIn = false;
                    this.isLoggedInForQuestionnaire = false;
                    this.$router.push({name: "Home"});
                });
            },
            backToAdmin() {
                this.adminData.adminInfo = localStorage.getItem("adminInfo");
                User.backToAdmin(this.adminData).then((response) => {
                    localStorage.clear();
                    window.location.href = response.data.data.backUrl
                });
            },
            closeSupportModal() {
                this.$refs['support-modal'].hide()
            },
            showSupportModal() {
                this.$refs['support-modal'].show()
            },
            getNotifications: function () {
                User.notifications(this.totalNotifications)
                    .then((response) => {
                        this.totalNotifications = response.data.data.totalNotifications;
                        this.unreadCount = response.data.data.unreadCount;
                        this.unreadText = response.data.data.unreadText;
                        this.latestNotificationTime = response.data.data.latestNotificationTime;
                        this.notifications.push(...response.data.data.notifications);
                    })
                    .catch((error) => {
                        this.isLoading = false;
                        if (error.response.status == 401) {
                            this.$emit("logout");
                        }
                    });
            },
            markAllAsRead: function () {
                User.markAllAsRead(this.totalNotifications)
                    .then((response) => {
                        this.unreadCount = response.data.data.unreadCount;
                        this.unreadText = response.data.data.unreadText;
                        this.notifications = response.data.data.notifications;
                    })
                    .catch((error) => {
                        this.isLoading = false;
                        if (error.response.status == 401) {
                            this.$emit("logout");
                        }
                    });
            },
            getNextNotifications(listElm) {
                listElm.addEventListener('scroll', e => {
                    if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {

                        User.notifications(this.totalNotifications)
                            .then((response) => {
                                if(response.data.data.length !== 0) {
                                    this.totalNotifications = response.data.data.totalNotifications;
                                    this.notifications.push(...response.data.data.notifications);
                                }
                            })
                            .catch((error) => {
                                this.isLoading = false;
                                if (error.response.status == 401) {
                                    this.$emit("logout");
                                }
                            });
                    }
                });
            },
            getRecentNotifications: function () {
                User.recentNotifications(this.latestNotificationTime, this.totalNotifications)
                    .then((response) => {
                        this.totalNotifications = response.data.data.totalNotifications;
                        this.unreadCount = response.data.data.unreadCount;
                        this.unreadText = response.data.data.unreadText;
                        this.latestNotificationTime = response.data.data.latestNotificationTime;
                        this.notifications.unshift(...response.data.data.notifications);
                    })
                    .catch((error) => {
                        this.isLoading = false;
                        if (error.response.status == 401) {
                            this.$emit("logout");
                        }
                    });
            },
            getMessages: function () {
                User.getMessages(this.totalMessages, this.receiverCompanyId)
                    .then((response) => {
                        this.totalMessages = response.data.data.totalMessages;
                        this.unreadMessage = response.data.data.unreadCount;
                        this.unreadMessageText = response.data.data.unreadText;
                        this.latestMessageTime = response.data.data.latestMessageTime;
                        this.messages.push(...response.data.data.messages);
                    })
                    .catch((error) => {
                        this.isLoading = false;
                        if (error.response.status == 401) {
                            this.$emit("logout");
                        }
                    });
            },
            markAllMessageAsRead: function () {
                User.markAllMessageAsRead({'totalMessages': this.totalMessages, 'receiverCompanyId': this.receiverCompanyId})
                    .then((response) => {
                        this.unreadMessage = response.data.data.unreadCount;
                        this.unreadMessageText = response.data.data.unreadText;
                        this.messages = response.data.data.messages;
                    })
                    .catch((error) => {
                        this.isLoading = false;
                        if (error.response.status == 401) {
                            this.$emit("logout");
                        }
                    });
            },
            getNextMessages(listElm) {
                listElm.addEventListener('scroll', e => {
                    if(listElm.scrollTop + listElm.clientHeight == listElm.scrollHeight - 1) {
                        User.getMessages(this.totalMessages, this.receiverCompanyId)
                            .then((response) => {
                                if(response.data.data.length !== 0) {
                                    this.totalMessages = response.data.data.totalMessages;
                                    this.messages.push(...response.data.data.messages);
                                }
                            })
                            .catch((error) => {
                                this.isLoading = false;
                                if (error.response.status == 401) {
                                    this.$emit("logout");
                                }
                            });
                    }
                });
            },
            getRecentMessages: function () {
                User.getRecentMessages(this.latestMessageTime, this.totalMessages, this.receiverCompanyId)
                    .then((response) => {
                        this.totalMessages = response.data.data.totalMessages;
                        this.unreadMessage = response.data.data.unreadCount;
                        this.unreadMessageText = response.data.data.unreadText;
                        this.latestMessageTime = response.data.data.latestMessageTime;
                        this.messages.unshift(...response.data.data.messages);
                    })
                    .catch((error) => {
                        this.isLoading = false;
                        if (error.response.status == 401) {
                            this.$emit("logout");
                        }
                    });
            },
            updateReadStatus(index) {
                if(this.messages[index].read_status == 0) {
                    User.updateReadStatus({'id': this.messages[index].id})
                        .then((response) => {
                            this.messages[index].style = '';
                            this.messages[index].activeStatus = false;
                            this.unreadMessage -= 1;
                            this.unreadMessageText = this.unreadMessage ? this.unreadMessage : 'no';
                        })
                        .catch(error => {
                            if (error.response.status == 401) {
                                this.$emit("logout");
                            } else {
                                toastr.error(error.response.data.error.message);
                            }
                        });
                }
            },
        },
        mounted() {
            this.$root.$on("login", () => {
                this.isLoggedIn = true;
            });

            this.isLoggedIn = !!localStorage.getItem("token");
            this.isLoggedInForQuestionnaire = !!localStorage.getItem("isLoggedInForQuestionnaire");
            this.isAdminLoggedIn = localStorage.getItem("adminInfo");
            this.videoRemainingDays = localStorage.getItem('videoUploadRemainingDays');
            this.bulletins = JSON.parse(localStorage.getItem('bulletins'));
            this.videoUploaded = (localStorage.getItem('isVideoUploaded') == 'yes') ? true : false;

            const user = JSON.parse(localStorage.getItem("info"));
            this.company = user.company;
            this.firstName = user.firstName;
            this.email = user.email;
            this.companyImage = ("" != user.company_image) ? user.company_image : "/images/image-placeholder-1.png";
            if (null != user) {
                const fullName = user.name.split(' ');
                const initials = fullName.shift().charAt(0) +'.'+ fullName.pop().charAt(0)+'.';
                this.username = initials.toUpperCase();
            }

            const listElm = document.querySelector('li.notification-dropdown ul.dropdown-menu');
            this.getNextNotifications(listElm);

            const messageElm = document.querySelector('li.message-dropdown ul.dropdown-menu');
            this.getNextMessages(messageElm);
        },
        created: function () {
            this.receiverCompanyId = JSON.parse(localStorage.getItem("info")).company_id;

            this.getNotifications();
            this.timer = setInterval(() => {
                this.getRecentNotifications();
            }, 60000);

            this.getMessages();
            this.messageTimer = setInterval(() => {
                this.getRecentMessages();
            }, 30000);
        },
        beforeDestroy() {
            clearInterval(this.timer);
            clearInterval(this.messageTimer);
        },
        computed: {
            currentPage() {
                return this.$route.name
            }
        },
        components: {
            loader: () => import("../../components/Loader"),
            HelpAndSupport: () => import("../../components/HelpAndSupport"),
        }
    }
</script>

<style scoped lang="scss">
    .app-header {
    }
    .support-modal-close {
        position: absolute;
        right: 16px;
        top: 16px;
    }

    .support-modal-close:hover {
        background-color: #ffffff;
    }
</style>

<style>
    .notification-dropdown .dropdown-menu {
        max-height: 200px;
        overflow-y: auto;
    }

    .notification-unread {
        background: #e1e1e1 !important;
    }

    a.notification-unread:hover {
        background: #efefef !important;
    }
    .blue-text-color{
        color: blue;
    }

    .message-dropdown .dropdown-menu {
        max-height: 200px;
        overflow-y: auto;
    }

    .message-unread {
        background: #e1e1e1 !important;
    }

    a.message-unread:hover {
        background: #efefef !important;
    }

    .warp-text-title{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 200px;
    }

    .sender-name {
        max-width: 100px;
    }

    .message-time {
        font-size: 10px;
        margin-left: auto;
        margin-top: 2px;
    }
</style>
