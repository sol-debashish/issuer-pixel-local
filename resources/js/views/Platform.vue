<template>
    <div>
        <Navigation/>
        <section class="pb-5 platform-page-top-section">
            <div class="container mt-5" data-aos="fade-up">
                <div class="col-lg-10 mx-auto text-center" data-aos="zoom-in" data-aos-delay="100">
                    <div class="heading-text my-3">Platform</div>
                    <p class="section-description">Powerful Video and Audio Search Engine with Relevant, Congruent and Granular
                        Results</p>
                </div>
            </div>
        </section>
        <section class="platform-middle-content platfor-second-section-bg pb-5">
            <div class="container aos-init" data-aos="fade-up">
                <div class="row">
                    <div class="col-lg-6 my-auto order-lg-2" data-aos="fade-in" data-aos-delay="100">
                        <div class="row">
                            <div class="col my-auto platform-img">
                                <img src="/images/platform/beFound.png" alt="" class="img img-fluid">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 order-lg-1 short-description" data-aos="fade-up" data-aos-delay="100">
                        <div class="section-theme-sub-title mb-2">Problem for Companies</div>
                        <p>Companies have difficulty being found by investors, partners, and suitors globally,
                            including
                            micro/small/mid cap public, private, venture stage, foreign, and cryptocurrency
                            issuers.</p>

                        <p>Most companies do not have a structure to organize their external facing video and audio
                            content, including Fortune 500 companies.</p>
                        <!--<div class="col my-auto">
                            <div class="section-theme-sub-title platform-text-purple text-center pb-1">Be Found</div>
                        </div>-->
                    </div>
                </div>
            </div>
        </section>
        <section class="platform-middle-content bg-white pb-5">
            <div class="container aos-init" data-aos="fade-up">
                <div class="row">
                    <div class="col-lg-6 my-auto" data-aos="fade-in" data-aos-delay="100">
                        <div class="row">
                            <div class="col my-auto platform-img">
                                <img src="/images/platform/find.png" alt="" class="img img-fluid">
                            </div>

                        </div>
                    </div>
                    <div class="col-lg-6 my-auto short-description" data-aos="fade-up" data-aos-delay="100">
                        <div class="section-theme-sub-title my-3">Problem for Investment Community</div>
                        <p>Investors, partners, and suitors have difficulty identifying issuers globally and finding
                            relevant video content, including micro/small/mid cap public, private, venture stage,
                            foreign, and cryptocurrency issuers.</p>

                        <p>Investors do not have a centralized platform or library to efficiently find video content
                            by company Industry, Sector, Group or at any Product/Service level within an
                            industry.</p>
                        <!--<div class="col my-auto">
                                <div class="section-theme-sub-title platform-text-purple text-center pb-1">Find</div>

                        </div>-->
                    </div>
                </div>
            </div>
        </section>
        <section class="platform-middle-content">
            <div class="container aos-init" data-aos="fade-up">
                <div class="row " data-aos="zoom-in" data-aos-delay="100">
                    <div class="col-lg-12 col-xl-8 mx-auto text-center">
                        <div class="section-theme-title my-3">Solution</div>
                    </div>
                    <div class="col-lg-12">
                            <div class="content tag-title px-lg-4 px-xl-0">
                            <p class="section-description text-center">
                                A global, searchable, company and industry-specific video and audio sharing platform
                                with relevant and congruent results, connecting companies to the world.
                            </p>
                        </div>
                        <div class="content text-center mt-5">
                            <img src="/images/platform/IP_Globe_XL.png" alt="" class="platform-logo img-fluid img-theme-globe"
                                 width="250">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="">
            <div class="container aos-init" data-aos="fade-up">
                <div class="section-theme-title text-center" data-aos="zoom-in" data-aos-delay="100">Platform
                    Benefits
                </div>
                <div class="row">
                    <div class="col-lg-12 mx-auto" data-aos="fade-up" data-aos-delay="100">
                        <div class="font-weight-bold my-4 text-theme-purple section-description fs-20">For Companies</div>
                        <ul class="theme-u-list">
                            <li class="theme-list">Unique video and audio database creates investment community
                                visibility for public and
                                private companies. No other company specific video and audio database is in
                                existence.
                            </li>
                            <li class="theme-list">Scalable, global, and cost effective exposure for all companies
                                utilizing video and audio content.
                            </li>
                            <li class="theme-list">Multiple searchable attributes enables investors to easily find
                                companies, as opposed to other
                                video/audio platforms that are not issuer specific.
                            </li>
                            <li class="theme-list">Drive investors, partners, and suitors to their business,
                                website, crowdfunding platform, or
                                traded security.
                            </li>
                            <li class="theme-list">Communicate with buy side, sell side and strategic partners,
                                providing companies with
                                investment sponsorship, fundraising opportunities and economically efficient access
                                to
                                investors.
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 mx-auto" data-aos="fade-down" data-aos-delay="100">
                        <div class="font-weight-bold my-4  text-theme-purple section-description fs-20">For Investors, Partners,
                            and Suitors
                        </div>
                        <ul class="theme-u-list">
                            <li class="theme-list">Search companies and sectors with congruent and relevant
                                results.
                            </li>
                            <li class="theme-list">Communicate with company executives giving investors, partners,
                                suitors, and suppliers on demand access to companies.
                            </li>
                            <li class="theme-list">Identify and conduct diligence on companies based upon video and
                                audio content types,
                                qualitative company attributes, and over one million industry criteria.
                            </li>
                            <li class="theme-list">Get extremely accurate peer group analysis and relative valuation
                                comparisons based upon
                                our proprietary taxonomy.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <Subscribe></Subscribe>
        <Footer></Footer>
    </div>
</template>

<script>
    import Navigation from "../components/Navigation.vue";
import Subscribe from '../components/Subscribe.vue';
    export default {
        name: "Platform",
        components: {
            Footer: () => import("../components/Footer"),
            Navigation,
                Subscribe
        }
    };
</script>
