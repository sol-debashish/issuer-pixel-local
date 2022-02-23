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
    @include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'Archived Industries',
                                            'breadcrumbs' => [
                                            'Archived Industries Management'
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
                    <table id="industryList" class=" table table-bordered table-striped table-hover" style="width: 100%">
                        <thead>
                        <tr>
                            <th>Code</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <!-- /.card-body -->
        </div>

    @include('admin.industry.add_industry_modal')
        <!-- /.card -->
    </section>

@endsection

@section('scripts')
    @parent
    <script src="{{ asset('plugins/datatables/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('plugins/datatables-bs4/js/dataTables.bootstrap4.min.js') }}"></script>
    <script>
        tableData = $('#industryList').dataTable({
            "bProcessing": true,
            "serverSide": true,
            "order": [[0, "asc"]],
            "responsive": true,
            "scrollX": true,
            "scrollY": "50vh",
            "scrollCollapse": true,
            "ajax": "{{route('admin.industry.archived')}}",
//Set column definition initialisation properties.
            "columnDefs": [
                {
                    "targets": [-1, -2], //last column
                    "orderable": false, //set not orderable
                    "searchable": false,
                },
            ],
            'columns': [
                {'data': 'code'},
                {'data': 'description'},
                {'data': 'status'},
                {'data': 'actions'},
            ]
        })

        $(document).on('click', '.marked-as-active', function () {

            $('#footer_action_button').text("Yes");
            $('#footer_action_button').addClass('glyphicon-check');
            $('#footer_action_button').removeClass('glyphicon-trash');
            $('.actionBtn').addClass('btn-success');
            $('.actionBtn').removeClass('btn-danger');
            $('.actionBtn').removeClass('add-to-industry');

            $('.actionBtn').addClass('active-to-industry');
            $('.did').val($(this).data('id'));
            $('.deleteContent').show();
            $('.deleteContent').html('Are you Sure you want to active this industry ?')
            $('.form-horizontal').hide();
            $('#myModal').modal('show');
        });

        $('.modal-footer').on('click', '.active-to-industry', function (){
            $(".loading_div_2").show();
            $(".loading_div_1").show();
            $.ajax({
                type: 'post',
                url: "{{ route("admin.industry.active") }}",
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

        function ESCclose(evt) {
            if (evt.keyCode == 27) {
                $('#myModal').modal('hide');
            }
        }
    </script>
@endsection
