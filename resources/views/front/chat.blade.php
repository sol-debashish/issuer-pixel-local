<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="ws_url" content="http://localhost:3000/">
    <meta name="user_id" content="{{ Auth::id() }}">

    <title>Realtime Private Chat</title>

    <!-- Styles -->
    <link href="{{ asset('plugins/chat/css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="{{asset('vendor/icofont/icofont.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{ asset('plugins/fontawesome-free/css/all.min.css') }}">
    <link href="{{ asset('plugins/chat/css/AdminLTE.min.css') }}" rel="stylesheet">
    <style media="screen">
        .online{
            color: #32CD32;
        }
        .ffside {
            height: 100%;
            position: fixed;
            z-index: 1;
            top: 0;
            right: 0;
            width: 18em;
            overflow-x: hidden;
            padding-top: 50px;
        }
        .chat_box{
            width:260px;
            padding: 5px;
            position: fixed;
            bottom: 0px;
        }
    </style>
</head>
<body>
<div id="app">
    <nav class="navbar navbar-default navbar-static-top">
        <div class="container">
            <div class="navbar-header">

                <!-- Collapsed Hamburger -->
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                    <span class="sr-only">Toggle Navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <!-- Branding Image -->
                <a class="navbar-brand" href="{{ url('/') }}">
                    Realtime Private Chat
                </a>
            </div>

            <div class="collapse navbar-collapse" id="app-navbar-collapse">
                <!-- Left Side Of Navbar -->
                <ul class="nav navbar-nav">
                    &nbsp;
                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="nav navbar-nav navbar-right">
                    <!-- Authentication Links -->
                    @if (Auth::guest())
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Register</a></li>
                    @else
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                {{ Auth::user()->name }} <span class="caret"></span>
                            </a>

                            <ul class="dropdown-menu" role="menu">
                                <li>
                                    <a href="#"
                                       onclick="event.preventDefault();document.getElementById('logout-form').submit()">
                                        Logout
                                    </a>

                                    <form id="logout-form" action="#" method="POST" style="display: none;">
                                        {{ csrf_field() }}
                                    </form>
                                </li>
                            </ul>
                        </li>
                    @endif
                </ul>
            </div>
        </div>
    </nav>

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2" id="chatApp">
                <div class="panel panel-default ffside">
                    <div class="panel-heading">Users</div>
                    <div class="panel-body" style="padding:0px;">
                        <ul class="list-group">
                            <li class="list-group-item" v-for="chatList in chatLists" style="cursor: pointer;" @click="chat(chatList)">@{{ chatList.name }}  <i class="fa fa-circle pull-right" v-bind:class="{'online': (chatList.online=='Y')}"></i>  <span class="badge" v-if="chatList.msgCount !=0">@{{ chatList.msgCount }}</span></li>
                            <li class="list-group-item" v-if="socketConnected.status == false">@{{ socketConnected.msg }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Scripts -->
{{-- <script src="{{ asset('js/app.js') }}"></script> --}}
<script src="{{ asset('plugins/chat/js/jquery-2.2.3.min.js') }}"></script>
<script src="{{ asset('plugins/chat/js/bootstrap.min.js') }}"></script>
<script src="{{ asset('plugins/chat/js/vue.js') }}"></script>
<script src="{{ asset('plugins/chat/js/socket.io.js') }}"></script>
<script src="{{ asset('plugins/chat/js/moment.min.js') }}"></script>
<script src="{{ asset('plugins/chat/js/chat.js') }}" charset="utf-8"></script>
</body>
</html>

