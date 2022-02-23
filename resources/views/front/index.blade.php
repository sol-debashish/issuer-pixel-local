<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">


    <title>{{ config('app.name', 'IssuerPixel') }}</title>
    <meta content="" name="descriptison">
    <meta content="" name="keywords">

    <!-- Favicons -->
    <link href="{{asset('images/favicon.png')}}" rel="icon">
    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="{{asset('vendor/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">
    <link href="{{asset('vendor/icofont/icofont.min.css')}}" rel="stylesheet">
    <link href="{{asset('vendor/boxicons/css/boxicons.min.css')}}" rel="stylesheet">
    <link href="{{asset('vendor/animate.css/animate.min.css')}}" rel="stylesheet">
    <link href="{{asset('vendor/remixicon/remixicon.css')}}" rel="stylesheet">
    <link href="{{asset('vendor/venobox/venobox.css')}}" rel="stylesheet">
    <link href="{{asset('vendor/owl.carousel/assets/owl.carousel.min.css')}}" rel="stylesheet">
    <link href="{{asset('vendor/aos/aos.css')}}" rel="stylesheet">

    <!-- Template Main CSS File -->
    <link href="{{asset('css/style.css')}}" rel="stylesheet">
</head>

<body>

<!-- ======= Header ======= -->
<header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

        {{--<h1 class="logo mr-auto"><a href="index.html">Multi</a></h1>--}}
        <!-- Uncomment below if you prefer to use an image logo -->
        <a href="{{route('front.home')}}" class="logo"><img src="{{asset('images/issuer_pixel.jpg')}}" alt="" class="img-fluid"></a>

        <nav class="nav-menu d-none d-lg-block  mr-auto">
            <ul>
                <li class="active"><a href="{{route('front.home')}}">HOME</a></li>
                <li><a href="#">PRICING PLANS</a></li>
                <li><a href="{{route('front.watch_now')}}">WATCH NOW</a></li>

            </ul>
        </nav><!-- .nav-menu -->

        {{--<a href="#about" class="get-started-btn">Get Started</a>--}}
        <a class="mr-2 btn btn-login-register" href="{{route('front.register')}}">Register</a>
        <a class="btn btn-login-register" href="{{route('front.login')}}">Log In</a>

    </div>
</header><!-- End Header -->

<!-- ======= Hero Section ======= -->
<section id="hero">
    <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">

        <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

        <div class="carousel-inner" role="listbox">

            <!-- Slide 1 -->
            <div class="carousel-item active" style="background-image: url({{asset('images/slide/slide-1.jpg')}})">
                <div class="carousel-container">
                    <div class="container slider-content">
                        <h3 class="animate__animated animate__fadeInDown">Welcome to </h3>
                        <h2>Issuer Pixel</h2>
                        <p class="animate__animated animate__fadeInUp">The only Platform leveraging the power of video to connect investors with today’s top market movers</p>
                        <a href="#" class="btn-get-started animate__animated animate__fadeInUp scrollto">Take a Look</a>
                    </div>
                </div>
            </div>

            <!-- Slide 2 -->
            <<div class="carousel-item" style="background-image: url({{asset('images/slide/slide-1.jpg')}})">
                <div class="carousel-container">
                    <div class="container slider-content">
                        <h3 class="animate__animated animate__fadeInDown">Welcome to </h3>
                        <h2>Issuer Pixel</h2>
                        <p class="animate__animated animate__fadeInUp">The only Platform leveraging the power of video to connect investors with today’s top market movers</p>
                        <a href="#" class="btn-get-started animate__animated animate__fadeInUp scrollto">Take a Look</a>
                    </div>
                </div>
            </div>

            <!-- Slide 3 -->
            <div class="carousel-item" style="background-image: url({{asset('images/slide/slide-1.jpg')}})">
                <div class="carousel-container">
                    <div class="container slider-content">
                        <h3 class="animate__animated animate__fadeInDown">Welcome to </h3>
                        <h2>Issuer Pixel</h2>
                        <p class="animate__animated animate__fadeInUp">The only Platform leveraging the power of video to connect investors with today’s top market movers</p>
                        <a href="#" class="btn-get-started animate__animated animate__fadeInUp scrollto">Take a Look</a>
                    </div>
                </div>
            </div>
        </div>

        <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>

        <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>

    </div>
</section><!-- End Hero -->

<div id="main">

    <!-- ======= Section ======= -->
    <section id="always-connected">
        <div class="container" data-aos="fade-up">

            <div class="row">

                <div class="col-lg-5 align-items-stretch video-box" style='background-image: url("{{ asset('images/mobile.jpg') }}"); height: 512px' data-aos="zoom-in" data-aos-delay="100">
                    <a href="#" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
                </div>

                <div class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">

                    <div class="content">
                        <h2>Always Connected</h2>
                        <p>Find corporate news, latest offering ans stock movements and more - from any device.</p>
                        <p>Filter videos by exchange, market cap, volume IPO  date, industry, and more</p>
                        <a href="#" class="btn-general">Watch Now</a>
                    </div>
                </div>

            </div>

        </div>
    </section><!-- End Why Us Section -->

    {{--Todays feature company section--}}
    <section id="featured-companies" class="section-bg featured-companies">
        <div class="container" data-aos="fade-up">
            <h2 class="text-center mb-5">Today’s Featured companies</h2>
            <div class="row">
                <article class="col-sm-4 mb-2">
                    <div class="container">
                        <div class="row">
                            <a href="#" class="mb-3">
                                <div>
                                    <img src="{{ asset('images/video_thumb_1.jpg') }}" alt="" class="img-fluid  img-responsive">
                                    <div class="play_btn"></div>
                                </div>
                            </a>

                            <ul class="list-unstyled">
                                <li>What's your story</li>
                                <li>Lux Industries</li>
                                <li>13K Views, Published Sep 2020</li>
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
                                <p class="font-weight-bold">30 Day AVERAGE</p>
                                <img src="{{ asset('images/statistics.jpg') }}" alt="" class="img-fluid  img-responsive">
                            </div>
                        </div>
                    </div>
                </article>
                <article class="col-sm-4 mb-2">
                    <div class="container">
                        <div class="row">
                            <a href="#" class="mb-3">
                                <div>
                                    <img src="{{ asset('images/video_thumb_2.jpg') }}" alt=""class="img-fluid  img-responsive">
                                    <div class="play_btn"></div>
                                </div>
                            </a>

                            <ul class="list-unstyled">
                                <li>Know Your charts</li>
                                <li>Graphs Express</li>
                                <li>19k Views, Publieshed Sep 2018</li>
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
                                        <li>GRAPH</li>
                                        <li>News/Media </li>
                                        <li>2.2 Mil</li>
                                        <li>220,554</li>
                                        <li>5.99</li>
                                        <li>18 videos</li>
                                    </ul>
                                </div>
                            </div>

                            <div>

                                <p class="font-weight-bold">30 Day AVERAGE</p>
                                <img src="{{ asset('images/statistics.jpg') }}" alt="" class="img-fluid  img-responsive">
                            </div>
                        </div>
                    </div>
                </article>
                <article class="col-sm-4 mb-2">
                    <div class="container">
                        <div class="row">
                            <a href="#" class="mb-3">
                                <div>
                                    <img src="{{ asset('images/video_thumb_3.jpg') }}" alt="" class="img-fluid  img-responsive">
                                    <div class="play_btn"></div>
                                </div>
                            </a>

                            <ul class="list-unstyled">
                                <li>Biz Atire INC.</li>
                                <li>Our Process</li>
                                <li>69k Views, Publieshed Jun 2019</li>
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
                                        <li>BZZT</li>
                                        <li>Clothing</li>
                                        <li>.9 Mil</li>
                                        <li>80,554</li>
                                        <li>5.59</li>
                                        <li>12 videos</li>
                                    </ul>
                                </div>
                            </div>

                            <div>

                                <p class="font-weight-bold">30 Day AVERAGE</p>
                                <img src="{{ asset('images/statistics.jpg') }}" alt=""class="img-fluid  img-responsive">
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>


</div><!-- End #main -->

<!-- ======= Footer ======= -->
<footer id="footer">
    <div class="container">
        <div class="copyright">
            &copy; Copyright <strong><span>{{ config('app.name', 'IssuerPixel') }}</span></strong>. All Rights Reserved
        </div>
    </div>
</footer><!-- End Footer -->

<div id="preloader"></div>
<a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>

<!-- Vendor JS Files -->
<script src="{{asset('vendor/jquery/jquery.min.js')}}"></script>
<script src="{{asset('vendor/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
<script src="{{asset('vendor/jquery.easing/jquery.easing.min.js')}}"></script>
<script src="{{asset('vendor/php-email-form/validate.js')}}"></script>
<script src="{{asset('vendor/waypoints/jquery.waypoints.min.js')}}"></script>
<script src="{{asset('vendor/counterup/counterup.min.js')}}"></script>
<script src="{{asset('vendor/venobox/venobox.min.js')}}"></script>
<script src="{{asset('vendor/owl.carousel/owl.carousel.min.js')}}"></script>
<script src="{{asset('vendor/isotope-layout/isotope.pkgd.min.js')}}"></script>
<script src="{{asset('vendor/aos/aos.js')}}"></script>

<!-- Template Main JS File -->
<script src="{{asset('js/main.js')}}"></script>

</body>

</html>
