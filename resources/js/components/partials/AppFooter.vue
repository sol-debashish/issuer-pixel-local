<template>
    <div>
        <section class="app-footer pt-0">
            <footer class="footer">
                <div class="container-fluid clearfix">
                    <span class="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright {{ new Date().getFullYear() }} Issuer Pixel</span>
                    <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                     <router-link to="/termsofservice" target="_blank" class="footer-bottom-text">Term of Service</router-link>
                    <span class="mx-1">|</span>
                    <router-link to="/privacypolicy" target="_blank" class="footer-bottom-text">Privacy Policy</router-link>
                    </span>
                </div>
            </footer>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'app-footer'
    }
</script>

<style scoped lang="scss">
    .app-footer {

    }
</style>
