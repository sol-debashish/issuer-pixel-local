<template>
    <section class="">
        <Navigation />
        <div class="container mt-5 aos-init">
            <div class="col-lg-12 mx-auto ">
                <div class="heading-text my-3 text-center" data-aos="zoom-in" data-aos-delay="100">Mission</div>
                <p class="section-description beta-description" data-aos="fade-up" data-aos-delay="100">Enable every company in the world to be found and communicate utilizing the
                    power of video and audio for global exposure. To democratize the ability of companies, venture
                    stage, small cap and micro-cap, foreign private issuers, companies of any size, at any stage, in any
                    country, to gain awareness, establish sponsorship, forge partnerships, create supply chain
                    relationships and access capital. We are harvesting unstructured data and harnessing the power of
                    relevance and congruity to find or be found.</p>
                <div class="section-theme-sub-title mb-3 mt-5 text-center" data-aos="zoom-in" data-aos-delay="100">Beta Program for Companies</div>
                <p class="section-description beta-description" data-aos="fade-up" data-aos-delay="100">An exclusive invitation for an initial 50 companies to upload their company
                    videos and audio to our website. The process is simple and quick: complete the company profile
                    questionnaire and upload your videos and audio files. The benefits of participation to your
                    organization include being one of the first companies on our platform, to gain awareness for
                    sponsorship, partnerships, supply chain relationships and capital. Beta company participants will be
                    featured on our site when we open up our platform to our user base community in a few months. We
                    look forward to your participation and feedback. Issuer Pixel Beta Program is free to use at this time.</p>
            </div>
            <div class="col-12 mx-auto mt-5 " data-aos="zoom-in" data-aos-delay="100">
                <div class="content text-left tag-title mb-4">
                    <p class="section-theme-sub-title text-center">
                        Learn More
                    </p>
                </div>
                <Contact-form></Contact-form>
            </div>

        </div>
        <Patent :extendFrom="extendFrom"></Patent>
        <Footer></Footer>
    </section>

</template>

<script>
    import Navigation from "../components/Navigation.vue";
    // import User from "../apis/User";
    // import {required, email, minLength, between, sameAs} from 'vuelidate/lib/validators'
    import Patent from '../components/Patent.vue';
    import ContactForm from '../components/ContactForm.vue';

    export default {
        name: "BetaProgram",
        data() {
            return {
                extendFrom: 'Beta',
            }
        },
        components: {
            Footer: () => import("../components/Footer"),
            loader: () => import("../components/Loader"),
            Navigation,
                Patent,
                ContactForm,
        },
    };
</script>
