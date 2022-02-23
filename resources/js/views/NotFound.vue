<template>
    <section>
        <Navigation />
        <div class="page-wrap d-flex flex-row align-items-center">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 text-center">
                        <span class="display-1 d-block">404</span>
                        <div class="mb-4 lead">The page you are looking for was not found.</div>
                        <router-link to="/" class="btn btn-link">Back to Home</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import Navigation from "../components/Navigation.vue";
    export default {
        data() {
            return {

            };
        },
        components: {Navigation}
    };
</script>
<style scoped>
    .page-wrap {
        min-height: 100vh;
    }
</style>
