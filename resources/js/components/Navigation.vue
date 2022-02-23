<template>
    <nav>

        <nav class="mobile-nav d-lg-none">
            <ul class="ml-auto">
                <li :class="currentPage.match('Home')? activeClass:''" class="float-right" @click="hideMobileMenu">
                    <router-link to="/" v-if="!isLoggedInForQuestionnaire">Home</router-link>
                </li>
                <li :class="currentPage.match('AboutUs')? activeClass:''" class="float-right" @click="hideMobileMenu">
                    <router-link to="/aboutus">About Us</router-link>
                </li>
                <li :class="currentPage.match('Platform')? activeClass:''" class="float-right" @click="hideMobileMenu">
                    <router-link to="/platform">Platform</router-link>
                </li>
                <li class="float-right" v-if="isLoggedInForQuestionnaire">
                    <a href="javascript:;" @click.prevent="logout">Logout</a>
                </li>
                <!--<li :class="currentPage.match('BetaProgram')? activeClass:''" class="float-right"
                    @click="hideMobileMenu">
                    <router-link to="/beta-program">Beta Program</router-link>
                </li>-->
                <li :class="currentPage.match('Press')? activeClass:''" class="float-right"
                    @click="hideMobileMenu">
                    <router-link to="/press">Press</router-link>
                </li>
                <li :class="currentPage.match('Blog')? activeClass:''" class="float-right" @click="hideMobileMenu">
                    <a href="https://issuerpixel.com/blog">Blog</a>
                </li>
                <li :class="currentPage.match('ContactUs')? activeClass:''" class="float-right"
                    @click="hideMobileMenu">
                    <router-link to="/contact-us">Contact Us</router-link>
                </li>
                <li :class="currentPage.match('SignUp')? activeClass:''" class="float-right signup-menu"
                    @click="hideMobileMenu">
                    <router-link to="/signup" class="btn btn-sm btn-theme-purple px-4">Sign Up</router-link>
                </li>
                <li :class="currentPage.match('Login')? activeClass:''" class="float-right"
                    @click="hideMobileMenu">
                    <router-link to="/login" style="color: #0b2341;">Login</router-link>
                </li>
                <!--<li  class="float-right invest-menu" @click="hideMobileMenu">
                    <a href="https://netcapital.com/companies/issuer-pixel" class="btn btn-sm btn-theme-purple px-4">Invest</a>
                </li>-->
            </ul>
        </nav><!-- .nav-menu -->
<!--        <header id="auth-nav-header" class="fixed-top" v-if="isLoggedIn">-->
<!--            <div class="container-fluid d-flex align-items-center auth-nav-top">-->
<!--                &lt;!&ndash; Uncomment below if you prefer to use an image logo &ndash;&gt;-->
<!--                <router-link :to="{ name: 'Dashboard'}" class="logo dashboard-logo-img">-->
<!--                    <img src="/images/issuerpixel_dashboard.png" alt="" class="img-fluid">-->
<!--                </router-link>-->
<!--                &lt;!&ndash; .nav-menu &ndash;&gt;-->
<!--                <div class="ml-auto">-->
<!--                    <a class="mr-3 btn dashboard-btn-upload"-->
<!--                       v-if="isAdminLoggedIn"-->
<!--                       @click.prevent="backToAdmin"-->
<!--                       href="javascript:;"-->
<!--                    >Back to admin</a>-->
<!--                    <ul class="upload-reminder" v-if="!isAdminLoggedIn && !videoUploaded">-->
<!--                        <li>You have {{videoRemainingDays}} days to upload a video!</li>-->
<!--                    </ul>-->
<!--                    <b-dropdown size="md" variant="none" toggle-class="text-decoration-none" no-caret-->
<!--                                class="dashboard-btn-upload d-none d-sm-inline-block">-->
<!--                        <template #button-content>-->
<!--                            <img class="upload-btn-icon" src="/images/upload.png"> Upload-->
<!--                        </template>-->
<!--                        <b-dropdown-item v-bind:to="{ name: 'videoQuestionnaire' }">Upload Video</b-dropdown-item>-->
<!--                        <b-dropdown-item v-bind:to="{ name: 'audioQuestionnaire' }">Upload Audio</b-dropdown-item>-->
<!--                    </b-dropdown>-->
<!--                    <b-dropdown size="md" variant="none" toggle-class="text-decoration-none" no-caret>-->
<!--                        <template #button-content>-->
<!--                            <span class="profile-circle">{{username}}</span>-->
<!--                        </template>-->
<!--                        <b-dropdown-item v-bind:to="{ name: 'Settings' }">Settings</b-dropdown-item>-->
<!--                        <b-dropdown-item href="javascript:;" @click.prevent="showSupportModal">Help & Support-->
<!--                        </b-dropdown-item>-->
<!--                        <b-dropdown-item v-if="isLoggedIn"-->
<!--                                         @click.prevent="logout"-->
<!--                                         href="javascript:;"-->
<!--                        >Logout-->
<!--                        </b-dropdown-item>-->
<!--                    </b-dropdown>-->
<!--                </div>-->
<!--            </div>-->
<!--        </header>-->

        <header id="header" class="fixed-top">
            <div class="container-fluid d-flex align-items-center px-4">
                <!-- Uncomment below if you prefer to use an image logo -->
                <router-link to="/" class="logo">
                    <img src="/images/issuerpixel_justtext.png" alt="" class="img-fluid">
                </router-link>
                <nav class="nav-menu d-none d-lg-block  ml-auto">
                    <ul class="ml-auto">
                        <li :class="currentPage.match('Home')? activeClass:''" class="float-right">
                            <router-link to="/" v-if="!isLoggedInForQuestionnaire">Home</router-link>
                        </li>
                        <li :class="currentPage.match('AboutUs')? activeClass:''" class="float-right"
                            v-if="!isLoggedInForQuestionnaire">
                            <router-link to="/aboutus">About Us</router-link>
                        </li>
                        <li :class="currentPage.match('Platform')? activeClass:''" class="float-right"
                            v-if="!isLoggedInForQuestionnaire">
                            <router-link to="/platform">Platform</router-link>
                        </li>
                        <li class="float-right" v-if="isLoggedInForQuestionnaire">
                            <a href="javascript:;" @click.prevent="logout">Logout</a>
                        </li>
                        <!--<li :class="currentPage.match('BetaProgram')? activeClass:''" class="float-right"
                            v-if="!isLoggedInForQuestionnaire">
                            <router-link to="/beta-program">Beta Program</router-link>
                        </li>-->
                        <li :class="currentPage.match('Press')? activeClass:''" class="float-right"
                            v-if="!isLoggedInForQuestionnaire">
                            <router-link to="/press">Press</router-link>
                        </li>
                        <li :class="currentPage.match('Blog')? activeClass:''" class="float-right"
                            v-if="!isLoggedInForQuestionnaire">
                            <a href="https://issuerpixel.com/blog">Blog</a>
                        </li>
                        <li :class="currentPage.match('ContactUs')? activeClass:''" class="float-right"
                            v-if="!isLoggedInForQuestionnaire">
                            <router-link to="/contact-us">Contact Us</router-link>
                        </li>
                        <li :class="currentPage.match('SignUp')? activeClass:''" class="float-right signup-menu"
                            v-if="!isLoggedInForQuestionnaire">
                            <router-link to="/signup" class="btn btn-sm btn-theme-dark-blue px-4">Sign Up</router-link>
                        </li>
                        <li :class="currentPage.match('Login')? activeClass:''" class="float-right"
                            v-if="!isLoggedInForQuestionnaire">
                            <router-link to="/login" class="login-menu-link">Login</router-link>
                        </li>
                        <!--<li  class="float-right invest-menu" v-if="!isLoggedInForQuestionnaire">
                            <a href="https://netcapital.com/companies/issuer-pixel" class="btn btn-sm btn-theme-purple px-4">Invest</a>
                        </li>-->
                    </ul>
                </nav><!-- .nav-menu -->
                <!--            <router-link-->
                <!--                v-if="!isLoggedIn"-->
                <!--                class="mr-2 btn btn-login-register"-->
                <!--                :to="{ name: 'Register' }">-->
                <!--                Register</router-link>-->
                <!--            <router-link-->
                <!--                v-if="!isLoggedIn"-->
                <!--                class="btn btn-login-register"-->
                <!--                :to="{ name: 'Login' }">-->
                <!--                Login</router-link>-->

                <!--                <a class="mr-2 btn btn-login-register"-->
                <!--                    v-if="isLoggedIn"-->
                <!--                    @click.prevent="logout"-->
                <!--                    href="#"-->
                <!--                >Logout</a>-->
            </div>
        </header>

        <!-- Support modal started -->
        <b-modal centered ref="support-modal" size="md"
                 hide-footer>
            <template #modal-header>
                <div class="w-100">
                    <h5 class="modal-title">Help and Support</h5>
                    <b-button class="support-modal-close close float-right" @click="closeSupportModal">x</b-button>
                </div>
            </template>
            <HelpAndSupport @helpAndSupportSuccess="closeSupportModal"></HelpAndSupport>
        </b-modal>
        <!-- End Support modal -->
        <loader :is-visible="isLoading"></loader>
    </nav>

</template>

<script>
    import User from "../apis/User";

    export default {
        data() {
            return {
                isLoading: false,
                isLoggedIn: false,
                isAdminLoggedIn: false,
                isLoggedInForQuestionnaire: false,
                activeClass: 'active',
                username: '',
                videoRemainingDays: 0,
                videoUploaded: false,
                adminData: {
                    adminInfo: ''
                }
            };
        },
        mounted() {
            this.$root.$on("login", () => {
                this.isLoggedIn = true;
            });

            this.isLoggedIn = !!localStorage.getItem("token");
            this.isLoggedInForQuestionnaire = !!localStorage.getItem("isLoggedInForQuestionnaire");
            this.isAdminLoggedIn = localStorage.getItem("adminInfo");
            this.videoRemainingDays = localStorage.getItem('videoUploadRemainingDays');
            this.videoUploaded = (localStorage.getItem('isVideoUploaded') == 'yes') ? true : false;
            //console.log(this.videoRemainingDays);

            if (!$("button").hasClass("mobile-nav-toggle")) {
                if ($('.nav-menu').length) {
                    //     var $mobile_nav = $('.nav-menu').clone().prop({
                    //         class: 'mobile-nav d-lg-none'
                    //     });
                    //     $('body').append($mobile_nav);
                    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
                    $('body').append('<div class="mobile-nav-overly"></div>');

                    $(document).on('click', '.mobile-nav-toggle', function (e) {
                        $('body').toggleClass('mobile-nav-active');
                        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                        $('.mobile-nav-overly').toggle();
                    });

                    $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
                        e.preventDefault();
                        $(this).next().slideToggle(300);
                        $(this).parent().toggleClass('active');
                    });

                    $(document).click(function (e) {
                        var container = $(".mobile-nav, .mobile-nav-toggle");
                        if (!container.is(e.target) && container.has(e.target).length === 0) {
                            if ($('body').hasClass('mobile-nav-active')) {
                                $('body').removeClass('mobile-nav-active');
                                $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                                $('.mobile-nav-overly').fadeOut();
                            }
                        }
                    });
                    if (this.isLoggedIn) {
                        $(".mobile-nav, .mobile-nav-toggle").hide();
                    }
                } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
                    $(".mobile-nav, .mobile-nav-toggle").hide();
                }
            } else if (this.isLoggedIn) {
                $(".mobile-nav, .mobile-nav-toggle").hide();
            } else {
                $(".mobile-nav, .mobile-nav-toggle").show();
            }
            /* /!*Check that profile banner section exit or not and add extra padding in a section class*!/
             if ($(".profile-complete-banner")[0]) {
                 $('.for-profile-banner-padding').css('paddingTop', '108px');
             }*/
        },
        methods: {
            logout() {
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
            hideMobileMenu(e) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
            },
            closeSupportModal() {
                this.$refs['support-modal'].hide()
            },
            showSupportModal() {
                this.$refs['support-modal'].show()
            }

        },
        created: function () {
            const info = JSON.parse(localStorage.getItem("info"));
            if (null != info) {
                const fullName = info.name.split(' ');
                const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
                this.username = initials.toUpperCase();
            }
        },
        computed: {
            currentPage() {
                return this.$route.name
            }
        },
        components: {
            HelpAndSupport: () => import("../components/HelpAndSupport"),
            loader: () => import("../components/Loader"),
        }
    };
</script>
<style>
    .support-modal-close {
        position: absolute;
        right: 16px;
        top: 16px;
    }

    .support-modal-close:hover {
        background-color: #ffffff;
    }
</style>
