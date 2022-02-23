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


<main id="watch-now">

    {{--recommanded-for-yousection--}}
    <section id="recommanded-for-you" class="recommanded-for-you">
        <div class="container" data-aos="fade-up">
            <h2 class="text-center mb-5">Video list from dacast</h2>
            <div class="row">
                @forelse($vodList as $video)
                    <article class="col-sm-3">
                        <div class="container">
                            <div class="row">
                                <a href="#" class="mb-3">
                                    <div>
                                        <img src="https://i.ytimg.com/vi/{{$video->video_id}}/mqdefault.jpg" alt="" width="255"  height="255" class="img-fluid  img-responsive video-btn"
                                             data-toggle="modal" data-src="https://www.youtube.com/embed/{{$video->video_id}}?autoplay=1" data-target="#myModal"
                                        >
                                        <div class="play_btn"></div>
                                    </div>
                                </a>

                                <ul class="list-unstyled">
                                    <li>{{$video->title}}</li>
                                    <li>Published: {{$video->created_at}}</li>
                                </ul>

    {{--                            <div class="container">--}}
    {{--                                <div class="row business-overview">--}}
    {{--                                    <ul class="col-sm-6 list-unstyled border-right">--}}
    {{--                                        <li>Business Overview</li>--}}
    {{--                                        <li>Industry</li>--}}
    {{--                                        <li>Market Cap</li>--}}
    {{--                                        <li>Todays Volume</li>--}}
    {{--                                        <li>Price</li>--}}
    {{--                                        <li>Video Content</li>--}}
    {{--                                    </ul>--}}
    {{--                                    <ul class="col-sm-6 list-unstyled text-right font-weight-bold">--}}
    {{--                                        <li>LUX</li>--}}
    {{--                                        <li>News/Media </li>--}}
    {{--                                        <li>1.2 Mil</li>--}}
    {{--                                        <li>120,554</li>--}}
    {{--                                        <li>2.99</li>--}}
    {{--                                        <li>5 videos</li>--}}
    {{--                                    </ul>--}}
    {{--                                </div>--}}
    {{--                            </div>--}}

    {{--                            <div>--}}
    {{--                                <p>30 Day AVERAGE</p>--}}
    {{--                                <img src="{{ asset('images/statistics.jpg') }}" alt="" class="img-fluid  img-responsive">--}}
    {{--                            </div>--}}
                            </div>
                        </div>
                    </article>
                @empty
                    <div  class="col-md-12 text-center">
                        No Video found

                    </div>
                @endforelse
            </div>
        </div>
    </section>

    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <!-- 16:9 aspect ratio -->
                    <div class="embed-responsive embed-responsive-16by9">
{{--                        <iframe class="embed-responsive-item" src="" id="video"  allowscriptaccess="always" allow="autoplay"></iframe>--}}
{{--                        <iframe class="embed-responsive-item" src="" id="video" src="" width="590" height="431" frameborder="0" scrolling="no" allow="autoplay" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>--}}
                        <iframe class="embed-responsive-item" src=""  id="ytplayer" type="text/html" width="640" height="360" frameborder="0"></iframe>
                    </div>


                </div>

            </div>
        </div>
    </div>

</main><!-- End #main -->

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
<script>
    $(document).ready(function() {

        // Gets the video src from the data-src on each button
        var $videoSrc;
        $('.video-btn').click(function() {
            $videoSrc = $(this).data( "src" );
        });
    // when the modal is opened autoplay it
        $('#myModal').on('shown.bs.modal', function (e) {

        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
            $("#ytplayer").attr('src',$videoSrc);
        })

        // stop playing the youtube video when I close the modal
        $('#myModal').on('hide.bs.modal', function (e) {
            // a poor man's stop video
            $("#ytplayer").attr('src','');
        })
// document ready
    });
</script>
</body>

</html>
