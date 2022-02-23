<template>
    <section :class="(this.extendFrom =='Home')? 'py-5 home-patent-bg' : 'patent-section-bg pb-5'">
        <div class="container text-center aos-init">
            <div class="row">
                <div class="col-lg-12 mx-auto">
                    <div class="mb-3 patent-title" data-aos="zoom-in" data-aos-delay="100">Patented
                        Technology
                    </div>
                    <p class="text-center patented-text mb-3" data-aos="zoom-right" data-aos-delay="100">Patent pending technology leveraging the power of machine learning and AI. Patent strategy is Omnibus patent family <br
                            class="patented-break">with 6 patents planned. 1st Utility patent issued. 2 additional patents pending. 6 more patents being prepared and will be strategically filed.</p>

                    <!--<span class="text-theme-purple d-block line-height-1">Receipt Date</span> <span
                    class="d-block mb-3"> 2020</span>-->
                    <!--                            <a href="https://netcapital.com/companies/issuer-pixel" class="btn btn-theme-purple px-4">Invest</a>-->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Patent",
    props:["extendFrom"],
}
</script>

<style>

</style>
