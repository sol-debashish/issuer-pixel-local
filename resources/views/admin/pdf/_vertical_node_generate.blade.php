<!doctype html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>{{$industry->description}} tree list</title>
    <link rel="stylesheet" href="{{asset('css/node-color.css')}}">
    <style>
        .tree li {
            list-style-type:none;
            margin:0;
            padding:10px 5px 0 5px;
            position:relative
        }
        .tree li a {
            border: 1px solid #ccc;
            padding: 5px 10px;
            text-decoration: none;
            color: #000b16;
            font-family: 'Droid Sans';
            font-size: 11px;
            display: inline-block;
        }
        .tree li::before, .tree li::after {
            content:'';
            left:-20px;
            position:absolute;
            right:auto
        }
        .tree li::before {
            border-left:1px solid #999;
            bottom:50px;
            height:100%;
            top:0;
            width:1px
        }
        .tree li::after {
            border-top:1px solid #999;
            height:20px;
            top:25px;
            width:25px
        }
        .tree li span:not(.glyphicon) {
            -moz-border-radius:5px;
            -webkit-border-radius:5px;
            border-radius:5px;
            display:inline-block;
            padding:4px 9px;
            text-decoration:none
        }
        .tree li.parent_li>span:not(.glyphicon) {
            cursor:pointer
        }
        .tree>ul>li::before, .tree>ul>li::after {
            border:0
        }
        .tree li:last-child::before {
            height:30px
        }
    </style>
</head>
<body>
@include('admin.pdf.__node_generate')
</body>
