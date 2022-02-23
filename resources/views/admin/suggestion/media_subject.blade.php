@extends('layouts.admin')

@section('styles')
    <link rel="stylesheet" href="{{asset('plugins/datatables-bs4/css/dataTables.bootstrap4.min.css')}}">
    <link rel="stylesheet" href="{{asset('plugins/jquery-ui/jquery-ui.min.css')}}">
    <style>
        .loading_div_1{
            display: none;
            z-index: 9990;
            opacity: 0.5;
            width: 100%;
            height: 100%;
            position: fixed;
            background: #FFF none repeat scroll 0% 0%;
        }

        .loading_div_2{
            display: none;
            z-index: 9995;
            overflow: auto;
            opacity: 0.5;
            width: 50%;
            height: 60%;
            top: 50%;
            left: 50%;
            padding: 20px;
            position: fixed;
            border-radius: 5px;
        }
        .search>form {
            overflow: hidden;
            border: 1px solid #ddd;
            background: #dadada;
            padding: 20px;
        }
        .search form>div:first-child {
            margin-left: 0;
        }
        .search form>div {
            float: left;
            overflow: hidden;
            margin-left: 10px;
        }
        .search div label {
            display: block;
        }
    </style>
@endsection

@section('content')
    <!-- Content Header (Page header) -->
    @include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'Media Subject Suggestion',
                                            'breadcrumbs' => [
                                            'Media Subject Suggestion'
                                            ]
                                          ])

    <!-- Main content -->
    <section class="content">

        <!-- Default box -->
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">List</h3>

            </div>
            <div class="card-body">
                <div class="loading_div_1"></div>
                <div class="loading_div_2"><img src="{{asset('images/ajax-loader.gif')}}" height="100"></div>

                <div class="table-responsive">
                    <div class="search mb-4">
                        <form action="" id="filter_form">
                            <div>
                                <label>Media Type</label>
                                <select class="form-control" id='mediaType'>
                                    <option value=''>-- Select --</option>
                                    @foreach($mediaTye as $mediaKey => $mediaValue)
                                        <option value='{{$mediaKey}}'>{{$mediaValue}}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div>
                                <label>Review Status</label>
                                <select class="form-control" id='reviewStatus'>
                                    <option value=''>-- Select --</option>
                                    @foreach($reviewStatus as $reviewStatusKey => $reviewStatusValue)
                                        <option value='{{$reviewStatusValue}}'>{{$reviewStatusValue}}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div>
                                <label for="from_date" tag="">From Date</label>
                                <input type='text' id='search_fromdate' value="{{$formDate}}" class="form-control datepicker" placeholder='From date' autocomplete="off">
                            </div>
                            <div>
                                <label for="to_date" tag="">To Date</label>
                                <input type='text' id='search_todate' value="{{$toDate}}" class="form-control datepicker" placeholder='To date' autocomplete="off">
                            </div>
                        </form>
                    </div>

                    <table id="nodeStatistics" class=" table table-bordered table-striped table-hover" style="width: 100%">
                        <thead>
                        <tr>
                            <th style="width: 5%">#</th>
                            <th style="width: 20%">User Name</th>
                            <th style="width: 20%">User Email</th>
                            <th style="width: 15%">Date</th>
                            <th style="width: 10%">Type</th>
                            <th style="width: 10%">Status</th>
                            <th style="width: 10%">Review By</th>
                            <th style="width: 10%">Action</th>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <!-- /.card-body -->
        </div>
    @include('admin.suggestion.review_status_change_modal')
        <!-- /.card -->
    </section>

@endsection

@section('scripts')
    @parent
    <script type="text/javascript" src="{{ asset('plugins/jquery-ui/jquery-ui.min.js') }}"></script>
    <script src="{{ asset('plugins/datatables/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('plugins/datatables-bs4/js/dataTables.bootstrap4.min.js') }}"></script>
    <script>
        $(document).ready(function(){
            // Datapicker
            $( ".datepicker" ).datepicker({
                "dateFormat": "yy-mm-dd",
                onSelect: function(dateText) {
                    dataTable.api().ajax.reload(null, false);
                }
            });

            var dataTable = $('#nodeStatistics').dataTable({
                "bProcessing": true,
                "serverSide": true,
                "bFilter":false,
                "order": [[0, "desc"]],
                "responsive": true,
                "scrollX": true,
                // "scrollY": "50vh",
                "scrollCollapse": true,
                "ajax": {
                    'url' : "{{route('admin.media.subject.suggestion')}}",
                    'data': function (data) {
                        var mediaType = $('#mediaType').val();
                        var reviewStatus = $('#reviewStatus').val();
                        var from_date = $('#search_fromdate').val();
                        var to_date = $('#search_todate').val();

                        data.searchByMediaType = mediaType;
                        data.searchByReviewStatus = reviewStatus;
                        data.searchByFromdate = from_date;
                        data.searchByTodate = to_date;
                    }
                },
                'columns': [
                    {'data': 'id'},
                    {'data': 'username'},
                    {'data': 'email'},
                    // {'data': 'industry_id'},
                    // {'data': 'node_id'},
                    {'data': 'created_at'},
                    {'data': 'media_type'},
                    {'data': 'review_status'},
                    {'data': 'reviewed_by'},
                    {'data': 'actions'},

                ]
            });
            $( document ).ajaxError(function( event, jqxhr, settings, thrownError ) {
                if (thrownError == "Unauthorized") {
                    location.reload();
                }
            });
            $('#mediaType').change(function(){
                dataTable.api().ajax.reload(null, false);
            });
            $('#reviewStatus').change(function(){
                dataTable.api().ajax.reload(null, false);
            });
        })

        $(document).on('change', '.review_status', function () {
            if($(this).val() != 'New'){
                $('#footer_action_button').text("Yes");
                $('.actionBtn').addClass('btn-success');
                $('#suggestion_id').val($(this).data('id'));
                $('#review_status_field').val($(this).val());
                $('.deleteContent').html('Are you Sure you want to '+ $(this).val() +' this?')
                $('#myModal').modal('show');
            }
        });


        $('.modal-footer').on('click', '.change-status-btn', function (){

            $('#myModal').modal('hide');
            $(".loading_div_2").show();
            $(".loading_div_1").show();
            $.ajax({
                type: 'post',
                url: "{{ route("admin.media.subject.suggestion.accept.reject") }}",
                data: {
                    '_token': $('input[name=_token]').val(),
                    suggestion_id:  $("#suggestion_id").val(),
                    review_status:  $("#review_status_field").val(),
                },
                success: function (data) {
                    if (data.status == 'success')
                    {
                        toastr.success(data.msg);
                        location.reload();
                    } else if (data.status == 'error')
                    {
                        toastr.error(data.msg);
                    }
                    $(".loading_div_2").hide();
                    $(".loading_div_1").hide();
                }
            });
        });
        function ESCclose(evt) {
            if (evt.keyCode == 27) {
                $('#myModal').modal('hide');
            }
        }
    </script>
@endsection
