<template>
    <section>
        <Navigation />
        <div class="container" data-aos="fade-up">
            <div class="row">
                <div class="col mx-auto mt-5">
                    <div class="content text-left tag-title mb-4">
                        <p class="font-weight-bold text-center" v-if="thanksPage =='newsletter'">
                            Thank you for registering to our newsletter.
                        </p>
                        <p class="font-weight-bold text-center" v-else>
                            Thank you for submitting your message. Someone will be reaching out to you soon.
                        </p>
                    </div>
                    <!--<div class="content text-center">
                        <img src="/images/home.png" alt="" class="img-fluid">
                    </div>-->
                    <div class="col-lg-7 mx-auto mt-5">
                        <div class="content text-center mt-5">
                            <img src="/images/issuerpixel_globe.png" alt="" class="img-fluid mb-3">
                            <img src="/images/issuerpixel_justtext2.png" alt="" class="img-fluid issuer-text-logo">
                            <div>Because an alternative does not exist...</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Navigation from "../components/Navigation.vue";
    export default {
        name: "ThankYou",
        data() {
            return {
                thanksPage: localStorage.getItem("thanksPage")
            };
        },
        components: {Navigation}
    }
</script>

<style scoped>

</style>
