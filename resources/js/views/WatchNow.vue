<template>
    <div id="watch-now">
        <section class="mt-5" id="video-content">
            <div class="container" data-aos="fade-up">

                <div class="row">

                    <div class="col-lg-8 align-items-stretch video-box" data-aos="zoom-in" data-aos-delay="100">
                        <iframe width="100%" height="400px" src="https://www.youtube.com/embed/2qQ7DhjnZWg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>

                    <div class="col-lg-4 d-flex flex-column justify-content-center align-items-stretch">

                        <div class="content">
                            <div class="row business-overview">
                                <ul class="col-sm-6 list-unstyled">
                                    <li>PREV.CLOSE</li>
                                    <li>DAY’S RANGE</li>
                                    <li>52W RANGE</li>
                                    <li>VOLUME</li>
                                    <li>MARKET.CAP</li>
                                    <li>EARNINGS DATE</li>
                                </ul>
                                <ul class="col-sm-6 list-unstyled text-right font-weight-bold">
                                    <li>51.67</li>
                                    <li>50.61 - 51.46</li>
                                    <li>32.01 - 83.11</li>
                                    <li>11,627,797</li>
                                    <li>29,168,061</li>
                                    <li>OCT 13 2020</li>
                                    <li>3.95%</li>
                                </ul>
                            </div>
                            <div class="text-center">
                                <a href="#" class="btn-general">SEE COMPANY PROFILE</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="row mt-5">
                    <h2>The Citigroup Global Mission: Vision 2030</h2>
                </div>
                <p>3,395 views <span class="ml-5">Uploaded May 13, 2020</span></p>

                <div class="row">
                    <div class="col-sm-2">
                        <img src="images/city.jpg" alt="">
                    </div>
                    <div class="col-sm-6">
                        <h5><strong>Citigroup</strong></h5>
                        <p>See Company Channel</p>
                        <p>Citigroup (C) CEO Mike Corbat discusses the firm’s Virsion 2030 framework, its goals for global growth, and what investors should know about the disital banking space over the next ten years.
                        </p>
                    </div>
                </div>

            </div>
        </section>

        <section id="recommanded-for-you" class="recommanded-for-you">
        <div class="container" data-aos="fade-up">
            <h2 class="text-center mb-5">Recommended for you</h2>
            <div class="row">
                <article class="col-sm-3" v-for="recommanedCompany in recommandedCompanies">
                    <div class="container">
                        <div class="row">
                            <a href="#" class="mb-3">
                                <div>
                                    <img :src="recommanedCompany.photoUrl" alt="" class="img-fluid  img-responsive">
                                    <div class="play_btn"></div>
                                </div>
                            </a>

                            <ul class="list-unstyled">
                                <li>{{recommanedCompany.title}}</li>
                                <li>{{recommanedCompany.company}}</li>
                                <li>{{recommanedCompany.view}} Views, {{recommanedCompany.date}}</li>
                            </ul>

                            <div class="container">
                                <div class="row business-overview">
                                    <ul class="col-sm-6 list-unstyled border-right">
                                        <li>Business Overview</li>
                                        <li>Industry</li>
                                        <li>Market Cap</li>
                                        <li>Todays Volume</li>
                                        <li>Price</li>
                                        <li>Video Content</li>
                                    </ul>
                                    <ul class="col-sm-6 list-unstyled text-right font-weight-bold">
                                        <li>LUX</li>
                                        <li>News/Media </li>
                                        <li>1.2 Mil</li>
                                        <li>120,554</li>
                                        <li>2.99</li>
                                        <li>5 videos</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <p>30 Day AVERAGE</p>
                                <img src="images/statistics.jpg" alt="" class="img-fluid  img-responsive">
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                recommandedCompanies : [],
                isLoading: false,
            }
        },
        methods:{
            getRecommandedCompanyList : function(){
                axios.get('api/recommanded_company')
                    .then(response => {
                        this.recommandedCompanies = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            }
        },
        created: function () {
            this.isLoading = true
            this.getRecommandedCompanyList();
        },
    }
</script>