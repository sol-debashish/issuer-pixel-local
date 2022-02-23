<template>
    <div id="home-page-content">
        <Navigation/>
        <div id="main" class="section-bg">

            <!-- ======= Section ======= -->
            <section class="header-padding pb-4 ">
                <div class="container-fluid px-md-4" data-aos="fade-down">
                    <div class="row" data-aos="zoom-in" data-aos-delay="100">
                        <div class="col issuerpixel-globe-small text-center my-auto">
                            <img src="/images/issuerpixel_globe.png" alt="" class="img" width="70">
                        </div>
                        <div class="col my-auto pl-0">
                            <div class="content text-left tag-title home-heading-text">
                                <p class="text-center mb-0">
                                    <span class="text-theme-purple">A Video and Audio Sharing and Networking Platform Connecting Companies to the World</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section class="video-mission-section pt-0">
                <div class="video-container aos-init" data-aos="fade-in" data-aos-delay="100">
                    <video id="sampleLoopVideo" preload="" autoplay="" muted="" playsinline="" loop="">
                        <source type="video/mp4" src="/videos/IP_LoopVideo.mp4">
                    </video>
                    <div class="play-overlay">
<!--                           @click="playVideo('https://player.vimeo.com/video/530032180?autoplay=1&badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479')"-->
                        <a class="play-video cursor-pointer"
                           @click="playVideo('https://view.vzaar.com/23415795/player')"
                           data-toggle="modal" data-target="#fullVideoPlayModal">
                            <img src="/images/home/play_button.png" alt=""
                                 class="img-fluid"></a>
                    </div>
                </div>
                <div class="container aos-init" data-aos="fade-up">
                    <div class="row">
                        <div class="col-lg-12 mx-auto text-center">
                            <!--                            <div class="hr-line mx-auto"></div>-->
                            <div class="mb-3 mt-4 " data-aos="zoom-in" data-aos-delay="100">
                                <h5 class="beta-available-title">Now Available</h5>
                            </div>
                            <p class="text-justify section-description" data-aos="zoom-in" data-aos-delay="100">Issuer Pixel has launched
                                its platform. Companies have begun onboarding, uploading their video
                                and audio to our platform. We are pleased to have all of our Company Customers on
                                our platform.
                            </p>
                            <div class="content text-center mt-4">
                                <img src="/images/platform/IP_Globe_XL.png" alt="" class="home-beta-logo img-fluid mb-3 img-theme-globe"
                                    width="100">
                            </div>
                            <router-link :to="{ name: 'SignUp' }" class="text-center btn btn-md btn-theme-dark-blue px-5 sign-up-link beta-button">Sign-up for Free</router-link>
                <!--       <p class="mb-0 mt-2 beta-subscription-notice">By signing up for our Free Beta, 250 companies will receive a 1 year FREE Premium subscription.</p>-->
                        </div>
                    </div>
                </div>
            </section>
            <!--Subscribe Section-->
                <Subscribe :extendFrom="extendFrom"></Subscribe>
            <!--Subscribe Section-->
            <section class="pb-5">
                <div class="container aos-init" data-aos="fade-up">
                    <div class="row">
                        <div class="col-lg-12 mx-auto text-center">
                            <!--                            <div class="hr-line mx-auto"></div>-->
                            <div class="section-theme-title mb-3" data-aos="zoom-in" data-aos-delay="100">Mission</div>
                            <p class="text-justify section-description" data-aos="zoom-in" data-aos-delay="100">Our mission is to enable
                                every company in the world to be found. To empower companies to create, communicate and
                                collaborate, utilizing the power of video and audio for global exposure. To democratize
                                the ability of companies, venture stage, small cap and micro-cap, foreign private
                                issuers, companies of any size, at any stage, in any country, to utilize their video and
                                audio, to gain awareness, establish sponsorship, forge partnerships, create supply chain
                                relationships and access capital. We are harvesting unstructured data of video and audio
                                and harnessing the power of relevance and congruity to find or be found.</p>
                            <!--<a href="https://netcapital.com/companies/issuer-pixel"
                               class="btn btn-theme-purple text-center px-4">Learn More</a>-->
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-5 home-platform-bg">
                <div class="container text-center aos-init">
                    <div class="row mb-4">
                        <div class="col-lg-6  my-auto order-lg-2" data-aos="fade-down" data-aos-delay="100">
                            <img src="/images/home/issuer_platform.png" alt="" class="img img-fluid">
                        </div>
                        <div class="col-lg-6 my-lg-auto order-lg-1 mb-4 text-lg-left" data-aos="fade-up" data-aos-delay="100">
                            <div class="section-theme-sub-title mb-3 text-lg-left">Company Platform</div>
                            <p class="text-lg-left section-description">User friendly dashboard for companies to manage their audio, video,
                                and document files with in depth analytics, reports, and alerts.</p>
                            <ul class="theme-u-list">
                                <li class="theme-list-home section-description ">Video/Audio Library with Total Content Control</li>
                                <li class="theme-list-home section-description">Uniform and Relevant Video/Audio Search Results</li>
                                <li class="theme-list-home section-description">Global Visibility </li>
                                 <li class="theme-list-home section-description">Communications and Commerce</li>
                            </ul>
                            <!-- <router-link :to="{ name: 'Platform' }" class="btn btn-theme-purple px-4">Learn More
                            </router-link> -->
                            <router-link :to="{ name: 'SignUp' }" class="btn btn-md btn-theme-dark-blue px-5 sign-up-link beta-button">Sign Up</router-link>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-lg-6 my-lg-auto mb-4" data-aos="fade-down" data-aos-delay="100">
                            <img src="/images/home/powerful_search_attribute.png" alt="" class="img img-fluid">
                        </div>
                        <div class="col-lg-6 text-lg-left" data-aos="fade-up" data-aos-delay="100">
                            <div class="section-theme-sub-title mb-3 text-lg-left">User Platform</div>
                            <p class="text-lg-left section-description">Multiple searchable attributes enable investors to easily find
                                companies, in any industry, of any size, at any stage, in any country, with granular,
                                relevant and congruent results, as opposed to other video/audio platforms that are not
                                company or industry specific.</p>
                            <router-link :to="{ name: 'Platform' }" class="btn btn-md btn-theme-dark-blue px-5 sign-up-link beta-button">Learn More</router-link>
                        </div>
                    </div>
                </div>
            </section>
            <!-- <section class="py-5 home-patent-bg">
                <div class="container text-center aos-init">
                    <div class="row">
                        <div class="col-lg-11 mx-auto">
                            <div class="font-weight-bold section-description patented-title mb-3 h4" data-aos="zoom-in" data-aos-delay="100">Patented
                                Technology
                            </div>
                            <p class="text-center patented-text mb-3" data-aos="zoom-right" data-aos-delay="100">Patent
                                pending
                                technology leveraging the power of
                                machine learning and AI. Patent strategy is Omnibus patent family <br
                                    class="patented-break">with 6 patents planned. 1st Utility patent issued. 2 additional patents pending. 6 more patents being prepared and will be strategically filed.</p>

                        </div>
                    </div>
                </div>
            </section> -->
            <Patent :extendFrom="extendFrom"></Patent>
            <!-- End Why Us Section -->
        </div>

        <!-- Full Video Play Modal -->
        <div class="modal fade" id="fullVideoPlayModal" tabindex="-1" role="dialog"
             aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                                @click="removeVideoSrc">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <!-- 16:9 aspect ratio -->
                        <!--<div class="embed-responsive embed-responsive-16by9">
                            <iframe
                                class="embed-responsive-item" src="" id="video"
                                width="640" height="360" frameborder="0"
                                allow="autoplay; fullscreen; picture-in-picture" webkitallowfullscreen
                                mozallowfullscreen allowfullscreen
                                title="IP PromoVideo  (V2) 3.19.mp4">
                            </iframe>
                                title="IP PromoVideo  (V2) 3.19.mp4"></iframe>
                        </div>-->
                        <div class="embed-responsive embed-responsive-16by9" style="background: black">
                           <!-- <div v-if=""
                                 class="h-100 d-flex justify-content-center align-items-center video-audio-unavailable-error-message">
                                Video unavailable
                            </div>-->
                            <iframe id="video" name="vzvd-22677381" src="" title="video player"
                                    allow="autoplay"
                                    width="640" height="360"
                                    class="video-player video-player-responsive embed-responsive-item" type="text/html"
                                    frameborder="0"
                                    allowfullscreen
                                    allowTransparency="true" mozallowfullscreen webkitAllowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--        End-->
        <Footer></Footer>
    </div>
</template>
<script>

    import Navigation from "../components/Navigation.vue";
    import Patent from '../components/Patent.vue';
    import Subscribe from '../components/Subscribe.vue';

    export default {

        data() {
            return {
                extendFrom: 'Home',
            };
        },

        methods: {
            playVideo: function (videoSrc) {
                $("#sampleLoopVideo").get(0).pause();
                $("#video").attr('src', videoSrc);
                $('#fullVideoPlayModal').modal({backdrop: 'static', keyboard: false})
            },
            removeVideoSrc: function () {
                $("#sampleLoopVideo").get(0).play();
                $("#video").attr('src', "");
            },
        },
        components: {
            Footer: () => import("../components/Footer"),
            Navigation,
                Subscribe,
                Patent,
        }
    };
</script>
