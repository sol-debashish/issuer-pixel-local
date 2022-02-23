@extends('layouts.admin')
@section('styles')
    <link rel="stylesheet" href="{{asset('plugins/datatables-bs4/css/dataTables.bootstrap4.min.css')}}">
@endsection

@section('content')
    @include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'Video/Audio File Management',
    'breadcrumbs' => [
    'Issuer Management' => route('admin.users.issuers'),
    'Video/Audio File Management'
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
                <div class="table-responsive">
                    <table id="AdminUserList" class=" table table-bordered table-striped table-hover" style="width: 100%">
                        <thead>
                        <tr>
                            <th>Organization name</th>
                            <th>File ID</th>
                            <th>File Name</th>
                            <th>File Type</th>
                            <th>Upload Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
        {{--@include('partials.delete_modal')--}}
    </section>
    <!-- /.content -->
@endsection
@section('scripts')
    @parent
    <script src="{{ asset('plugins/datatables/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('plugins/datatables-bs4/js/dataTables.bootstrap4.min.js') }}"></script>

    <script>
        tableData = $('#AdminUserList').dataTable({
            "bProcessing": true,
            "serverSide": true,
            "bFilter":false,
            "order": [[1, "desc"]],
            "responsive": true,
            "scrollX": true,
            "scrollY": "40vh",
            "scrollCollapse": true,
            "ajax": "{{route('admin.issuers.media.file', $user->id)}}",
            //Set column definition initialisation properties.
            "columnDefs": [
                {
                    "targets": [-1], //last column
                    "orderable": false, //set not orderable
                    "searchable": false,
                },
            ],
            'columns': [
                {'data': 'organization_name'},
                {'data': 'file_id', "searchable": false},
                {'data': 'file_name', "searchable": false},
                {'data': 'media_type_name', "searchable": false},
                {'data': 'created_at', "searchable": false},
                {'data': 'status', "searchable": false},
                {'data': 'actions'},

            ]
        });
        $( document ).ajaxError(function( event, jqxhr, settings, thrownError ) {
            if (thrownError == "Unauthorized") {
                location.reload();
            }
        });
    </script>
@endsection
