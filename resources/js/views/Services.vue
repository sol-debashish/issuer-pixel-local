<template>
    <section>
        <Navigation/>
        <div class="container  mt-5 mb-5" data-aos="fade-up">
            <div class="row">
                <h2 class="mx-auto">IssuerPixel does not charge for any services at this time.</h2>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </section>
</template>

<script>
    import Navigation from "../components/Navigation.vue";

    export default {
        data() {
            return {}
        },
        name: "Services",
        components: {
            Footer: () => import("../components/Footer"),
            Navigation
        }
    };
</script>

<style scoped>
    #footer {
        bottom: 0 !important;
        position: absolute;
    }
</style>
