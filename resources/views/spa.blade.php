<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">


    <title>{{ $title }}</title>
    @foreach($meta['with-name'] as $withNameKey => $withNameValue)
    <meta name="{{$withNameKey}}" content="{{$withNameValue}}">
    @endforeach
    @foreach($meta['with-property'] as $withPropertyKey => $withPropertyValue)
    <meta property="{{$withPropertyKey}}" content="{{$withPropertyValue}}">
    @endforeach

    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="ws_url" content="{{config('services.ws.url')}}">
    <meta name="user_id" content="{{ Auth::id() }}">
    <!-- Favicons -->
    <link href="{{asset('images/favicon.png')}}" rel="icon">
    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link rel="stylesheet" type="text/css" href="{{asset('vendor/icofont/icofont.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{ asset('plugins/fontawesome-free/css/all.min.css') }}">

    <link rel="stylesheet" type="text/css" href="{{asset('css/dashboard_merged.css')}}">
    <!-- Template Main CSS File -->
    {{--    <link rel="stylesheet" type="text/css" href="{{asset('css/app.css')}}">--}}
    <link rel="stylesheet" type="text/css" href="{{asset('css/merged.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('css/responsive.css')}}">
<!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NDKS3KK');</script>
    <!-- End Google Tag Manager -->
</head>
<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NDKS3KK"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<div id="app"></div>

<!-- Vendor JS Files -->
<script type="text/javascript" src="{{asset('js/app.js')}}"></script>
<script type="text/javascript" src="{{asset('js/merged.js')}}"></script>
<script src="{{ asset('plugins/chat/js/socket.io.js') }}"></script>
<script src="{{ asset('plugins/chat/js/moment.min.js') }}"></script>
<script src='https://www.google.com/recaptcha/api.js'></script>
</body>

</html>
