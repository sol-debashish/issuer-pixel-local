@extends('layouts.admin')
@section('styles')
    <link rel="stylesheet" href="{{asset('plugins/datatables-bs4/css/dataTables.bootstrap4.min.css')}}">
@endsection

@section('content')
    @include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'Feedback Management',
    'breadcrumbs' => [
    'Feedback Management'
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
                    <table id="feedbackList" class=" table table-bordered table-striped table-hover" style="width: 100%">
                        <thead>
                        <tr>
                            <th style="width: 15%">Feedback ID</th>
                            <th style="width: 20%">Created</th>
                            <th style="width: 20%">User Name</th>
                            <th style="width: 20%">User email</th>
                            <th style="width: 10%">Rating</th>
                            <th style="width: 15%">View comment</th>
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
        tableData = $('#feedbackList').dataTable({
            "bProcessing": true,
            "serverSide": true,
            "order": [[4, "desc"]],
            "responsive": true,
            "scrollX": true,
            "scrollY": "50vh",
            "scrollCollapse": true,
            "ajax": "{{route('admin.feedback.index')}}",
            //Set column definition initialisation properties.
            "columnDefs": [
                {
                    "targets": [-1], //last column
                    "orderable": false, //set not orderable
                    "searchable": false,
                },
            ],
            'columns': [
                {'data': 'id'},
                {'data': 'created_at'},
                {'data': 'reviewer_name'},
                {'data': 'reviewer_email'},
                {'data': 'rating'},
                {'data': 'review'},
            ]
        });
        $( document ).ajaxError(function( event, jqxhr, settings, thrownError ) {
            if (thrownError == "Unauthorized") {
                location.reload();
            }
        });
    </script>
@endsection
