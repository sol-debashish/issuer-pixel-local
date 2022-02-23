<template>
    <div>
        <Navigation/>
        <section class="mt-5" id="about-us">
            <div class="container" data-aos="fade-down">
                <div class="row justify-content-md-center">
                    <div class="col-lg-10 text-center" data-aos="zoom-in" data-aos-delay="100">
                        <h2 class="mb-3 mb-lg-4 heading-text">About Us</h2>
                        <p class="about-us-content">The World’s First Hierarchically Indexed and
                            Cross-Indexed Issuer
                            Video and Audio<span class="d-lg-block"></span>
                            Database, Searchable by Industry, Sector, Group, Product, Service and Company.</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="team" class="team-section-bg mt-3 text-center">
            <div class="container pb-5 aos-init" data-aos="fade-up">
                <div class="row">
                    <div class="col-lg-10 mx-auto">
                        <h2 class="mb-4 mb-lg-5">Meet the Team</h2>
                        <div class="row justify-content-md-center">
                            <div class="col-xl-3 col-lg-3 col-md-6">
                                <div class="member aos-init text-center" data-aos="zoom-in" data-aos-delay="100">
                                    <img src="images/team/David_Baker.png" class="img-fluid img-team-member" alt=""/>
                                    <div class="member-info">
                                        <div class="member-info-content">
                                            <p class="name">David N. Baker</p>
                                            <p class="designation">CEO</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-3 col-lg-3 col-md-6" data-wow-delay="0.1s">
                                <div class="member aos-init text-center" data-aos="zoom-in" data-aos-delay="200">
                                    <img src="images/team/Vadim_Tarasov.png" class="img-fluid img-team-member" alt=""/>
                                    <div class="member-info">
                                        <div class="member-info-content">
                                            <p class="name">Vadim Tarasov</p>
                                            <p class="designation">CIO</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-3 col-lg-3 col-md-6" data-wow-delay="0.2s">
                                <div class="member aos-init text-center" data-aos="zoom-in" data-aos-delay="300">
                                    <img src="images/team/Byron_Kwok.png" class="img-fluid img-team-member" alt=""/>
                                    <div class="member-info">
                                        <div class="member-info-content">
                                            <p class="name">Byron Kwok</p>
                                            <p class="designation">CTO</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="advisers" class="">
            <div class="container aos-init" data-aos="fade-up">
                <h2 class="mx-auto text-center mb-4 mb-lg-5 heading-text">Advisors and Key Investors</h2>
                <div class="row mt-3 responsive-reverse">
                    <div class="col-md-7 col-sm-12 mb-3" data-aos="zoom-in" data-aos-delay="100">
                        <div class="small-theme-text text-justify">
                            <p>Mr. Julio Gonzalez, National Tax Reform Expert, is the Founder and CEO of Engineered Tax
                                Services, Inc. (ETS).</p>

                            <p>Named one of the Top 100 most influential people in Accounting by AccountingToday, Mr.
                                Gonzalez acquired The Growth Partnership, The Rosenberg Survey and ABLE CRM in 2020 to
                                establish the largest specialty tax and consultative firm to the CPA community
                                nationwide.</p>
                            <span v-show="!readMore1">
                                <button class="btn btn-sm read-more-button" @click="readMore1=true"><i class="fas fa-chevron-down pr-2"></i>Read More</button>
                            </span>
                            <span v-show="readMore1">
                                <p>In 2021, Mr. Gonzalez founded Rockerbox to bring the accounting industry best in class
                                    resources in employment retention credits and work opportunity training credits.</p>

                                <p>Mr. Gonzalez is truly the Nation’s forefather of specialty tax services and he and his
                                    company have most recently been recognized for their assistance in preserving jobs in
                                    the United States. Mr. Gonzalez’ focus was to bring specialized engineering tax studies
                                    to mainstream America, which historically had only been available to Fortune 500 and
                                    public companies through the National Accounting Firms. These tax services are critical
                                    to creating, preserving and maintaining U.S. based jobs. Mr. Gonzalez is truly the
                                    Nation’s forefather of specialty tax services and he and his company have most recently
                                    been recognized for their assistance in preserving job in the United States, as
                                    follows:</p>

                                <p>Mr. Julio Gonzalez, National Tax Reform Expert, founded Engineered Tax Services, Inc.,
                                    (ETS) to marry the science of engineering with the principles of tax and accounting. Mr.
                                    Gonzalez wanted to bring specialty tax services to mainstream America that were
                                    previously only available to public companies through the Big 4 accounting firms.</p>

                                <p>Julio also started the Gonzalez Family Office to invest in the United States
                                    Infrastructure while providing a platform for his charities.</p>

                                <p>Today, Mr. Gonzalez and ETS are the country’s largest licensed engineering tax resource
                                    to 1000s of CPA firms nationally. These tax services are critical to creating,
                                    preserving and maintaining U.S. based jobs.</p>
                                <p>
                                    - Core ETS Services<br>
                                    - Cost segregation studies<br>
                                    - Research and development tax services<br>
                                    - Energy tax services<br>
                                    - Historic tax services<br>
                                    - Employment retention credits<br>
                                    - WOTC<br>
                                    - Other related engineering-based tax services
                                </p>
                                <p>
                                    Awards & Accolades<br>
                                    - Named 100 Most Influential Person in Accounting Today<br>
                                    - 30 Best CEOs of the Year by The Silicon Review<br>
                                    - CEO Today Hall of Fame<br>
                                    - Best Specialty Tax Practice, Year 2019 by Acquisition International
                                </p>
                                <span class="hr-before-advisors-testimonial pb-2 mx-4 d-block"></span>
                                <p>
                                    “Issuer Pixel has developed a disruptive video and audio sharing platform for companies
                                    that solves many problems that currently exist on popular video sharing platforms. The
                                    Company’s powerful video and audio search engine provides the granularity, relevance and
                                    congruity of results to enable companies and their associated videos and audio on the
                                    Issuer Pixel platform to both be found, that otherwise would remain in obscurity and
                                    provide these companies with enduring visibility. Engineered Tax Services looks forward
                                    to utilizing the Issuer Pixel platform as our external facing corporate video library.”
                                </p>
                                <button class="btn btn-sm read-more-button" @click="readMore1=false"><i class="fas fa-chevron-up pr-2"></i>Read Less</button>
                            </span>

                        </div>

                    </div>
                    <div class="col-md-5 col-sm-12 advisors-profile-area-1" data-aos="zoom-in" data-aos-delay="100">
                        <div class="advisors-designation-1" >
                            <p class="font-weight-bold mb-0 advisor-name-text">Julio Gonzalez</p>
                            <p class="fs-12">
                                FOUNDER & CEO<br>
                                Engineered Tax Services, Inc. (ETS)<br>
                                Advisor
                            </p>
                        </div>
                        <div class="adviser-pic-div-1">
                            <img src="images/advisers/Julio_Gonzalez.png" class="advisers-img-1 mb-3" width="320" alt=""/>
                        </div>
                    </div>

                </div>
                <div class="row mt-6 div-margin-bottom-responsive">
                    <div class="col-md-5 col-sm-12 advisors-profile-area-2" data-aos="zoom-in" data-aos-delay="100">
                        <div class="adviser-pic-div-2">
                            <img src="images/advisers/David_Collins.png" class="advisers-img-2 mb-3" alt=""/>
                        </div>
                        <div class="advisors-designation-2">
                            <p class="font-weight-bold mb-0 advisor-name-text">David C. Collins</p>
                            <p class="fs-12">
                                Managing Director<br>
                                Catalyst IR<br>
                                Advisor
                            </p>
                        </div>
                    </div>
                    <div class="col-md-7 col-sm-12 pl-lg-4" data-aos="zoom-in" data-aos-delay="100">
                        <div class="small-theme-text text-justify">
                            <p>David has 30+ years’ experience as a private investor, entrepreneur and investor
                                relations consultant, successfully guiding and executing investor relations, corporate
                                communications and social media programs for a diverse array of companies.</p>
                            <span v-show="!readMore2">
                                <button class="btn btn-sm read-more-button" @click="readMore2=true;"><i class="fas fa-chevron-down pr-2"></i>Read More</button>
                            </span>
                            <span v-show="readMore2">
                                <p>Results include successful crisis management, new research coverage and institutional
                                    investment, thousands of investor introductions via non-deal marketing and sell-side
                                    conferences, substantial valuation increases and many favorable exits. Most notably,
                                    David represented Marvel Entertainment for ten years, from its emergence from bankruptcy
                                    through to its sale to Disney.</p>

                                <p>David is an active investor and entrepreneur, a brutally candid counselor, IR innovator
                                    and an impassioned speaker/writer on IR and financial communications issues. He earned
                                    his bachelor’s degree from Georgetown University, served for three years on the NIRI NY
                                    Chapter board.</p>
                                <span class="hr-before-advisors-testimonial pb-2 mx-4 d-block"></span>
                                <p>
                                    "Issuer Pixel is an exciting, powerful tool that aides the research and discovery of
                                    businesses, solutions, technologies and other differentiating factors. It brings order,
                                    specificity and precision to the otherwise unsearchable universe of video and rich media
                                    assets that it unites in one convenient place. Given the huge investment made in video
                                    and other media, the question for me isn’t ‘Why Issuer Pixel?’ The question is ‘What
                                    took so long for a solution to emerge?!”
                                </p>
                                <button class="btn btn-sm read-more-button" @click="readMore2=false"><i class="fas fa-chevron-up pr-2"></i>Read Less</button>
                            </span>
                        </div>
                    </div>
                </div>

                <div class="row mt-6 responsive-reverse">

                    <div class="col-md-7 col-sm-12" data-aos="zoom-in" data-aos-delay="100">
                        <div class="small-theme-text text-justify">
                            <p>
                                “Issuer Pixel is the perfect solution amidst the growing
                                trend of companies looking to provide video based
                                content in order to connect and provide information
                                to their investors, partners, and customers. There is
                                tremendous value in having content organized in a
                                logical methodology for users, thereby allowing it to
                                reach the target audience.”
                            </p>
                        </div>
                    </div>
                    <div class="col-md-5 col-sm-12 advisors-profile-area-1" data-aos="zoom-in" data-aos-delay="100">
                        <div class="advisors-designation-1">
                            <p class="font-weight-bold mb-0 advisor-name-text">Steve Shum</p>
                            <p class="fs-12">
                                CEO, INVO Bioscience, Inc.<br>
                                (NASDAQ: INVO)<br>
                                Investor
                            </p>
                        </div>
                        <div class="adviser-pic-div-1">
                            <img src="images/advisers/Steve_Shum.png" class="advisers-img-1 mb-3" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section >
        <div class="">
        <!--Subscribe Section-->
        <Subscribe/>
        <!--Subscribe Section-->
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
    import Navigation from "../components/Navigation.vue";
    import Subscribe from "../components/Subscribe";

    export default {
        data() {
            return {
                readMore1: false,
                readMore2: false,
            }
        },
        components: {
            Footer: () => import("../components/Footer"),
            Navigation,
            Subscribe
        },
    }
</script>
