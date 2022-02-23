<template>
    <div class="section-bg">
        <Navigation/>
        <div class="calculated-content-height">
            <section class="mt-5" id="about-us">
                <div class="container" data-aos="fade-down">
                    <div class="row justify-content-md-center">
                        <div class="col-lg-10 text-center" data-aos="zoom-in" data-aos-delay="100">
                            <h2 class="mb-3 mb-lg-4 heading-text">Press</h2>
                            <p class="press-details mb-0">Issuer Pixel’s News and Press Releases</p>
                        </div>
                    </div>
                </div>
            </section>


            <section id="" class="text-center">
                <div class="container aos-init" data-aos="fade-up">
                    <div class="row text-center">
                        <div class="col-lg mr-lg-4 press-col bg-white">
                            <div class="p-2">
                                <div class="press-img mb-5">
                                    <img src="/images/press/intrado.png" alt=""
                                         class="img-fluid mx-auto d-block">
                                </div>
                                <p class="font-weight-bold press-text-content">Media, Video and Audio Sharing Fintech
                                    Platform, Issuer Pixel
                                    Launches $2.5 Million Crowd Funding Campaign on Netcapital.com</p>

                                <a href="https://www.globenewswire.com/news-release/2021/04/21/2214231/0/en/Media-Video-and-Audio-Sharing-Fintech-Platform-Issuer-Pixel-Launches-2-5-Million-Crowd-Funding-Campaign-on-Netcapital-com.html"
                                   target="_blank"
                                   class="btn btn-theme-dark-blue press-read-full-story px-4 text-center mx-auto">Read</a>

                            </div>
                        </div>
                        <div class="col-lg mr-lg-4 press-col bg-white">
                            <div class="p-2">
                                <div class="press-img mb-5">
                                    <img src="/images/press/investorplace.png" alt=""
                                         class="img-fluid mx-auto d-block">
                                </div>
                                <p class="font-weight-bold press-text-content">7 Equity Crowdfunding Offerings You
                                    Should Invest In ASAP</p>

                                <a href="https://investorplace.com/2021/04/7-equity-crowdfunding-offerings-you-should-invest-in-asap-2/"
                                   target="_blank"
                                   class="btn btn-theme-dark-blue  press-read-full-story px-4 text-center mx-auto">Read</a>

                            </div>
                        </div>
                        <div class="col-lg press-col bg-white">
                            <div class="p-2">
                                <div class="press-img mb-5">
                                    <img src="/images/press/69news.png" alt=""
                                         class="img-fluid mx-auto d-block">
                                </div>
                                <p class="font-weight-bold press-text-content">Engineered Tax Services CEO Julio
                                    Gonzalez Joins Issuer Pixel</p>

                                <a href="https://www.wfmz.com/news/pr_newswire/pr_newswire_business/engineered-tax-services-ceo-julio-gonzalez-joins-issuer-pixel-a-corporate-video-library-startup-as/article_eb81c070-2755-52f8-93e9-b7c4a25a615b.html"
                                   target="_blank"
                                   class="btn btn-theme-dark-blue  press-read-full-story px-4 text-center mx-auto">Read</a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Subscribe :extendFrom="extendFrom"></Subscribe>
        <Footer></Footer>
    </div>
</template>
<script>
    import Navigation from "../components/Navigation.vue";
    import Subscribe from "../components/Subscribe.vue";
    export default {
        data() {
            return {
                extendFrom:'press'
            }
        },
        components: {
            Footer: () => import("../components/Footer"),
            Navigation,
            Subscribe
        }
    }
</script>
