<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>{{ config('app.name', 'IssuerPixel') }}</title>
        <link rel="icon" type="image/png" sizes="32x32" href="{{asset('images/favicon.png')}}">
        <!-- Font Awesome -->
        <link rel="stylesheet" href="{{ asset('plugins/fontawesome-free/css/all.min.css') }}">
        <!-- Ionicons -->
        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
        <!-- Theme style -->
{{--        <link rel="stylesheet" href="{{asset('css/adminlte.min.css')}}">--}}
        <!-- overlayScrollbars -->
{{--        <link rel="stylesheet" href="{{ asset('plugins/overlayScrollbars/css/OverlayScrollbars.min.css') }}">--}}
        <!-- Google Font: Source Sans Pro -->
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">

{{--        <link href="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css" rel="stylesheet">--}}

        <!-- Select 2 -->
{{--        <link rel="stylesheet" href="{{ asset('plugins/select2/css/select2.min.css') }}">--}}

        <!-- jQueryUi -->
{{--        <link rel="stylesheet" href="{{ asset('plugins/jquery-ui/jquery-ui.min.css') }}">--}}

        <link rel="stylesheet" href="{{asset('css/merged_admin.css')}}">

        <script type="text/javascript">var base_url = "<?php echo URL::to('/') . '/'; ?>";</script>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id={{ config('general.ga_trcking_id') }}"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '{{ env('MIX_GA_TRACKING_ID') }}');
        </script>

        <style>
            .content-header.position-fixed{
                z-index: 99;
                background-color: #f4f6f9;
                width: calc(100% - 240px);
            }
            .sidebar-collapse .content-header.position-fixed{
                width: calc(100% - 70px);
            }
            .layout-navbar-fixed .content .card .card-header{
                margin-top: 75px;
            }
            .dashboard-content{
                padding-top: 75px;
            }
        </style>

        @yield('styles')
    </head>
    <body class="hold-transition sidebar-mini layout-navbar-fixed layout-fixed" onkeydown="ESCclose(event)">
        <!-- Site wrapper -->
        <div class="wrapper">
            <!-- Navbar -->
            <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                <!-- Left navbar links -->
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                    </li>
                    {{--<li class="nav-item d-none d-sm-inline-block">--}}
                        {{--<a href="#" class="nav-link">Admin</a>--}}
                    {{--</li>--}}
                </ul>
            </nav>
            <!-- /.navbar -->

            <!-- Sidebar -->
            @include('partials.admin_menu')
            <!-- /.sidebar -->


            <!-- Content Wrapper. Contains page content -->
            <div class="content-wrapper">
                @yield('content')
            </div>
            <!-- /.content-wrapper -->


            <footer class="main-footer text-center">
                <strong>{{ config('app.name', 'IssuerPixel') }} &copy;</strong>All rights reserved.
            </footer>

            <form id="logoutform" action="{{ route('admin.logout') }}" method="POST" style="display: none;">
                {{ csrf_field() }}
            </form>
        </div>
        <!-- ./wrapper -->

        <!-- jQuery -->
{{--        <script src="{{ asset('plugins/jquery/jquery.min.js') }}"></script>--}}
        <!-- jQueryUi -->

        <script src="{{ asset('js/admin_merged.js') }}"></script>
{{--        <script src="{{ asset('plugins/jquery-ui/jquery-ui.min.js') }}"></script>--}}
        <!-- Bootstrap 4 -->
{{--        <script src="{{ asset('plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>--}}
        <!-- Select 2 -->
{{--        <script src="{{ asset('plugins/select2/js/select2.min.js') }}"></script>--}}
        <!-- overlayScrollbars -->
{{--        <script src="{{ asset('plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js') }}"></script>--}}
        <!-- AdminLTE App -->
{{--        <script src="{{ asset('js/adminlte.min.js') }}"></script>--}}

{{--        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js"></script>--}}

        <script type="text/javascript">
            @if(Session::has('message'))
            var type = "{{ Session::get('alert-type', 'info') }}";
            switch(type){
                case 'info':
                    toastr.info("{{ Session::get('message') }}");
                    break;

                case 'warning':
                    toastr.warning("{{ Session::get('message') }}");
                    break;

                case 'success':
                    toastr.success("{{ Session::get('message') }}");
                    break;

                case 'error':
                    toastr.error("{{ Session::get('message') }}");
                    break;
            }
            @endif
            function ESCclose(evt) {
            }
        </script>
        @yield('scripts')
    </body>
</html>
