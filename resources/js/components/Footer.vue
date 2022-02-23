<template>
    <!-- ======= Footer ======= -->
    <footer id="footer" class="footer website-footer" :class="fixedFooterClass">
        <div class="container">
            <div class="row footer-responsive">
                <!-- <div class="col-lg-2 col-sm-2 col-md-3 col-6 mt-5 ">
                    <h5 class="footer-sub-title">PRODUCTS</h5>
                    <ul class="footer-list">
                        <li><a href="">Volutpat eors</a></li>
                        <li><a href="">Amet vitae</a></li>
                        <li><a href="">Mauris habitant</a></li>
                        <li><a href="">Sit faucibus</a></li>
                        <li><a href="">Facilisis sed</a></li>
                        <li><a href="">Nulla pallentesque</a></li>
                        <li><a href="">Velit morbi</a></li>
                        <li><a href="">Quisque laoreet</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-sm-2 col-md-3 col-6 mt-5 ">
                    <h5 class="footer-sub-title">SUPPORTS</h5>
                    <ul class="footer-list">
                        <li><a href="">Turpis rutrum</a></li>
                        <li><a href="">Purus Eget</a></li>
                        <li><a href="">Id Gravida</a></li>
                        <li><a href="">Dignissim Non</a></li>
                        <li><a href="">Venenatis Curabitur</a></li>
                        <li><a href="">Viverra Id</a></li>
                        <li><a href="">Habitasse Cars</a></li>
                        <li><a href="">Nunc Erat</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-sm-2 col-md-3 col-6 mt-5 ">
                    <h5 class="footer-sub-title">COMPANY</h5>
                    <ul class="footer-list">
                        <li><a href="">Volutpat eors</a></li>
                        <li><a href="">Amet vitae</a></li>
                        <li><a href="">Mauris habitant</a></li>
                        <li><a href="">Sit faucibus</a></li>
                        <li><a href="">Facilisis sed</a></li>
                        <li><a href="">Nulla pallentesque</a></li>
                        <li><a href="">Velit morbi</a></li>
                        <li><a href="">Quisque laoreet</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-sm-2 col-md-3 col-6 mt-5 ">
                    <h5 class="footer-sub-title">LEO SED</h5>
                    <ul class="footer-list">
                        <li><a href="">Turpis rutrum</a></li>
                        <li><a href="">Purus Eget</a></li>
                        <li><a href="">Id Gravida</a></li>
                        <li><a href="">Dignissim Non</a></li>
                        <li><a href="">Venenatis Curabitur</a></li>
                        <li><a href="">Viverra Id</a></li>
                        <li><a href="">Habitasse Cars</a></li>
                        <li><a href="">Nunc Erat</a></li>
                    </ul>
                </div> -->
                <div class="col-lg-12 col-sm-12 col-md-12 mt-5 footer-social-icon text-center">
                    <a href="https://www.facebook.com/IssuerPixel/" target="_blank"><img
                        src="images/social_icons/Facebook.png" alt="facebook"></a>
                    <a href="https://www.linkedin.com/company/issuerpixel" target="_blank"><img
                        src="images/social_icons/LinkedIN.png" alt="linkedin"></a>
                    <a href="https://twitter.com/issuerpixel" target="_blank"><img src="images/social_icons/Twitter.png"
                                                                                   alt="twitter"></a>
                    <a href="https://www.instagram.com/issuerpixel/" target="_blank"><img
                        src="images/social_icons/Instagram.png" alt="instagram"></a>
                    <!--                    <a href=""><img src="images/social_icons/Flickr.png" target="_blank" alt="flickr"></a>-->
                </div>
            </div>
            <div class="row mt-2 footer-bottom-section text-center">
                <div class="col-lg-6">
                    <span class="footer-bottom-text"> Copyright {{ new Date().getFullYear() }} Issuer Pixel</span>
                </div>
                <div class="col-lg-6 col-sm-12 col-12 col-md-12 bottom-part-responsive ">
                    <router-link to="/termsofservice" class="footer-bottom-text">Term of Service</router-link>
                    <span class="mx-1">|</span>
                    <router-link to="/privacypolicy" class="footer-bottom-text">Privacy Policy</router-link>
                </div>
            </div>
        </div>
    </footer>
    <!-- End Footer -->
</template>

<script>
    export default {
        name: "Footer",
        props: ["fixedFooterClass"],
    }
</script>

<style scoped>

</style>
