@extends('layouts.admin')
@section('styles')
    <link rel="stylesheet" href="{{asset('plugins/datatables-bs4/css/dataTables.bootstrap4.min.css')}}">
@endsection
@php
$browserRoute = [
                   'admin.users.index',
                   'admin.users.create',
                   'admin.users.edit',
                   'admin.users.show',
                   'admin.users.reset.password'
                ];
@endphp

@section('content')
    @include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'User Management',
    'breadcrumbs' => [
    'User Management'
    ]
    ])

    <!-- Main content -->
    <section class="content">

        <!-- Default box -->
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">List</h3>

                @if(auth()->user()->isAdminOrSuperAdminOrDataAnalysis() && (in_array(Request::route()->getName(), $browserRoute)))
                <div class="card-tools">
                    <a class="btn btn-sm btn-success" href="{{ route("admin.users.create") }}">
                        Add User
                    </a>
                </div>
                @endif
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table id="AdminUserList" class=" table table-bordered table-striped table-hover" style="width: 100%">
                        <thead>
                            <tr>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Email</th>
                                <th>Type</th>
                                <th>Created at &nbsp;</th>
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
            "order": [[4, "desc"]],
            "responsive": true,
            "scrollX": true,
            "scrollY": "50vh",
            "scrollCollapse": true,
            "ajax": "{{route('admin.users.index')}}",
            //Set column definition initialisation properties.
            "columnDefs": [
                {
                    "targets": [-1], //last column
                    "orderable": false, //set not orderable
                    "searchable": false,
                },
            ],
            'columns': [
                {'data': 'first_name'},
                {'data': 'last_name'},
                {'data': 'email'},
                {'data': 'role'},
                {'data': 'created_at'},
                {'data': 'status'},
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
