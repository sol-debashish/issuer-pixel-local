@extends('layouts.admin')
@section('styles')
    <link rel="stylesheet" href="{{asset('plugins/datatables-bs4/css/dataTables.bootstrap4.min.css')}}">
@endsection

@section('content')
    @include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'Issuer Management',
    'breadcrumbs' => [
    'Issuer Management'
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
                                <th>ID</th>
                                <th>Organization name</th>
                                <th>User's Name</th>
                                <th>Signup date</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Cumulative time spent</th>
                                <th>% profile completion</th>
                                <th>Total Login</th>
                                <th>Video Files submitted</th>
                                <th>Audio Files submitted</th>
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
            "order": [[0, "desc"]],
            "responsive": true,
            "scrollX": true,
            "scrollY": "40vh",
            "scrollCollapse": true,
            "ajax": "{{route('admin.users.issuers')}}",
            //Set column definition initialisation properties.
            "columnDefs": [
                {
                    "targets": [-1], //last column
                    "orderable": false, //set not orderable
                    "searchable": false,
                },
            ],
            'columns': [
                {'data': 'user_id', "searchable": false},
                {'data': 'organization_name'},
                {'data': 'user_name', "searchable": false},
                {'data': 'created_at', "searchable": false},
                {'data': 'email', "searchable": false},
                {'data': 'phone_number', "searchable": false},
                {'data': 'cumulative_time', "searchable": false},
                {'data': 'profile_completion', "searchable": false},
                {'data': 'total_login', "searchable": false},
                {'data': 'total_video', "searchable": false},
                {'data': 'total_audio', "searchable": false},
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
