@extends('layouts.admin')
@section('styles')
    <link rel="stylesheet" href="{{asset('plugins/datatables-bs4/css/dataTables.bootstrap4.min.css')}}">
@endsection

@section('content')
    @include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'Bulletin Management',
	    'breadcrumbs' => [
	    	'Bulletin Management'
	    ]
    ])

    <!-- Main content -->
    <section class="content">

        <!-- Default box -->
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">List</h3>

                <div class="card-tools">
                    <a class="btn btn-sm btn-success" href="{{ route("admin.bulletins.create") }}">
                        Add Bulletin
                    </a>
                </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table id="bulletin-list" class=" table table-bordered table-striped table-hover" style="width: 100%">
                        <thead>
                            <tr>
                            	<th>#</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Sticky</th>
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
        $('#bulletin-list').dataTable({
            "bProcessing": true,
            "serverSide": true,
            "responsive": true,
            "scrollX": true,
            "scrollY": "50vh",
            "scrollCollapse": true,
            "ajax": "{{route('admin.bulletins.index')}}",
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
                {'data': 'title'},
                {'data': 'description'},
                {'data': 'is_sticky'},
                {'data': 'status'},
                {'data': 'actions'},
            ]
        });
        $( document ).ajaxError(function( event, jqxhr, settings, thrownError ) {
            if (thrownError == "Unauthorized") {
                location.reload();
            }
        });
        function deleteBulletin(id) {
        	if (confirm("Are you sure you want to delete this bulletin?")) {
                $.ajax({
			      	url     : "{{ route("admin.bulletins.delete") }}",
			      	method  : 'post',
			      	data    : {
			      		_token: '{{ csrf_token() }}',
			      		id: id
			      	},
			      	success : function (data) {
			      		if (data.status === 'success') {
	                        location.reload();
	                        toastr.success(data.msg);
	                    } else if (data.status === 'error') {
	                        toastr.error(data.msg);
	                    }
	                },
	                error: function () {
	                    toastr.error('Operation failed!');
	                }
			    });
            } else {
            	return false;
            }
        }
    </script>
@endsection
