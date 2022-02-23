<template>
    <section class="bg-white">
        <Navigation />
        <div class="container calculated-content-height mb-5" data-aos="fade-up">
            <div class="content text-left tag-title mx-auto mt-5">
                <p class="heading-text text-center">
                    Contact us
                </p>
            </div>
            <Contact-form></Contact-form>
        </div>
        <Patent></Patent>
        <Footer></Footer>
    </section>
</template>

<script>
    import Navigation from "../components/Navigation.vue";
    import Patent from '../components/Patent.vue';
    import ContactForm from '../components/ContactForm.vue';
    export default {
        name: "ContactUs",
        components: {
            Footer: () => import("../components/Footer"),
            Navigation,
                Patent,
                ContactForm,

        }
    };
</script>

