@extends('layouts.admin')

@section('styles')
    <link rel="stylesheet" href="{{asset('plugins/datatables-bs4/css/dataTables.bootstrap4.min.css')}}">
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
    </style>
@endsection

@section('content')
    <!-- Content Header (Page header) -->
    @include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'Industry Management',
                                            'breadcrumbs' => [
                                            'Industry Management'
                                            ]
                                          ])

    <!-- Main content -->
    <section class="content">

        <!-- Default box -->
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">List</h3>

                @if(auth()->user()->isAdminOrSuperAdminOrDataAnalysis())
                    <div class="card-tools">
                        <a class="btn btn-sm btn-success add-industry-modal" href="javascript:;;">
                            Add Industry
                        </a>
                    </div>
                @endif
            </div>
            <div class="card-body">
                <div class="loading_div_1"></div>
                <div class="loading_div_2"><img src="{{asset('images/ajax-loader.gif')}}" height="100"></div>

                <div class="table-responsive">
                    <table id="industryList" class=" table table-bordered table-striped table-hover" style="width: 100%">
                        <thead>
                        <tr>
                            <th>Code</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Publish Status</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
    </section>

    @include('admin.industry.add_industry_modal')
@endsection

@section('scripts')
    @parent
    <script src="{{ asset('plugins/datatables/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('plugins/datatables-bs4/js/dataTables.bootstrap4.min.js') }}"></script>
    <script>
        tableData = $('#industryList').dataTable({
            "bProcessing": true,
            "serverSide": true,
            "order": [[0, "desc"]],
            "responsive": true,
            "scrollX": true,
            "scrollY": "50vh",
            "scrollCollapse": true,
            "ajax": "{{route('admin.industry.index')}}",
//Set column definition initialisation properties.
            "columnDefs": [
                {
                    "targets": [-1], //last column
                    "orderable": false, //set not orderable
                    "searchable": false,
                },
            ],
            'columns': [
                {'data': 'code'},
                {'data': 'description'},
                {'data': 'status'},
                {'data': 'publish_status'},
                {'data': 'actions'},
            ]
        })

        $(document).ready(function() {
            $("form").submit(function(e){
                e.preventDefault(e);
            });

            $('input').keypress(function (e) {
                if (e.which == 13) {
                    if($( ".btn-success" ).hasClass( "add-to-industry" ))
                    {
                        $( ".add-to-industry" ).trigger( "click" );
                    }
                    return false;    //<---- Add this line
                }
            });
        });

        $(document).on('click', '.add-industry-modal', function () {

            $('#footer_action_button').text(" Add");
            $('#footer_action_button').addClass('glyphicon-check');
            $('#footer_action_button').removeClass('glyphicon-trash');
            $('.actionBtn').addClass('btn-success');
            $('.actionBtn').removeClass('btn-danger');
            $('.actionBtn').removeClass('publish-unpublish-industry');
            $('.actionBtn').removeClass('duplicate-to-industry');
            $('.actionBtn').addClass('add-to-industry');

            $('.did').val($(this).data('id'));
            $('.deleteContent').hide();
            $('.form-horizontal').show();
            $('#myModal').modal('show');
        });

        $('.modal-footer').on('click', '.add-to-industry', function () {

            if($.trim($('#description').val()) == ''){
                alert('Description can not be left blank');
                return false;
            }

            $.ajax({
                type: 'post',
                url: "{{ route("admin.industry.store") }}",
                data: {
                    '_token': $('input[name=_token]').val(),
                    'description': $("#description").val(),
                    'note': $("#note").val(),
                },
                success: function (data) {
                    if (data.status == 'success')
                    {
                        location.reload();
                        toastr.success(data.msg);
                    } else if (data.status == 'error')
                    {
                        toastr.error(data.msg);
                    }
                }
            });
        });

        $(document).on('click', '.duplicate-industry', function () {

            $('#footer_action_button').text("Yes");
            $('#footer_action_button').addClass('glyphicon-check');
            $('#footer_action_button').removeClass('glyphicon-trash');
            $('.actionBtn').addClass('btn-success');
            $('.actionBtn').removeClass('btn-danger');
            $('.actionBtn').removeClass('add-to-industry');
            $('.actionBtn').removeClass('publish-unpublish-industry');
            $('.actionBtn').addClass('duplicate-to-industry');
            $('.did').val($(this).data('id'));
            $('.deleteContent').show();
            $('.deleteContent').html('Are you Sure you want to duplicate this industry ?')
            $('.form-horizontal').hide();
            $('#myModal').modal('show');
        });


        $('.modal-footer').on('click', '.duplicate-to-industry', function (){
            $(".loading_div_2").show();
            $(".loading_div_1").show();
            $.ajax({
                type: 'post',
                url: "{{ route("admin.industry.duplicate") }}",
                data: {
                    '_token': $('input[name=_token]').val(),
                    industry_id:  $(".did").val()
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

        @if(auth()->user()->isAdminOrSuperAdmin())

        $(document).on('click', '.add-publish-unpublish-modal', function () {
            var publishMsg = 'publish';
            if($(this).data('publish-status'))
            {
                publishMsg = 'Unpublish';
            }

            $('#footer_action_button').text("Yes");
            $('#footer_action_button').addClass('glyphicon-check');
            $('#footer_action_button').removeClass('glyphicon-trash');
            $('.actionBtn').addClass('btn-success');
            $('.actionBtn').removeClass('btn-danger');
            $('.actionBtn').removeClass('add-to-industry');
            $('.actionBtn').removeClass('duplicate-to-industry');
            $('.actionBtn').addClass('publish-unpublish-industry');
            $('.did').val($(this).data('id'));
            $('#industry_publish_status').val($(this).data('publish-status'));
            $('.deleteContent').show();
            $('.deleteContent').html('Are you Sure you want to '+ publishMsg +' this industry ?')
            $('.form-horizontal').hide();
            $('#myModal').modal('show');
        });


        $('.modal-footer').on('click', '.publish-unpublish-industry', function (){
            $(".loading_div_2").show();
            $(".loading_div_1").show();
            $.ajax({
                type: 'post',
                url: "{{ route("admin.industry.publish.unpublish") }}",
                data: {
                    '_token': $('input[name=_token]').val(),
                    industry_id:  $(".did").val(),
                    industry_publish_status:  $("#industry_publish_status").val(),
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

        @endif

        function ESCclose(evt) {
            if (evt.keyCode == 27) {
                $('#myModal').modal('hide');
            }
        }

    </script>
@endsection
