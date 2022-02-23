@extends('layouts.admin')
@section('styles')
    <link rel="stylesheet" href="{{asset('plugins/datatables-bs4/css/dataTables.bootstrap4.min.css')}}">
@endsection

@section('content')
    @include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'Cross Index Node',
    'breadcrumbs' => [
    'Cross Index Node'
    ]
    ])

    <!-- Main content -->
    <section class="content">

        <!-- Default box -->
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">List</h3>

                <div class="card-tools">
                    <a class="btn btn-sm btn-success" href="{{ route("admin.crossIndex.create") }}">
                        Add Cross Index
                    </a>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table id="crossIndexList" class=" table table-bordered table-striped table-hover"
                           style="width: 100%">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Node 1</th>
                            <th>Node 2</th>
                            <th>Created at</th>
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
        tableData = $('#crossIndexList').dataTable({
            "bProcessing": true,
            "serverSide": true,
            "order": [[1, "desc"]],
            "responsive": true,
            "scrollX": true,
            "scrollY": "50vh",
            "scrollCollapse": true,
            "ajax": "{{route('admin.cross.index.home')}}",
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
                {'data': 'node_one_categorization_level_id'},
                {'data': 'node_two_categorization_level_id'},
                {'data': 'created_at'},
                {'data': 'actions'},
            ]
        });
        $(document).ajaxError(function (event, jqxhr, settings, thrownError) {
            if (thrownError == "Unauthorized") {
                location.reload();
            }
        });
        $(document).on('click', '#delete-cross-index', function () {
            var data = {
                _token: $('input[name=_token]').val(),
                deleteId: $(this).data('crossid'),
            }
            if (!confirm("Are you sure want to delete this cross index?")) {
                return false;
            }
            $.ajax({
                type: 'post',
                url: '{{route('admin.delete.cross.index')}}',
                data: data,
                success: function (data) {
                    if (data.status == 'success') {
                        toastr.success(data.msg);
                        location.reload();
                    }
                },
                error: function () {
                    toastr.error('There is an error occur');
                }
            });
        });
    </script>
@endsection
