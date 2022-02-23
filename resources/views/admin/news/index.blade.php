@extends('layouts.admin')
@section('styles')
    <link rel="stylesheet" href="{{asset('plugins/datatables-bs4/css/dataTables.bootstrap4.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/jquery-confirm.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/news.css')}}">
@endsection

@section('content')
    @include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'News Management',
	    'breadcrumbs' => [
	    	'News Management'
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

                    <div class="search mb-4">
                        <form action="" class="clearfix">
                            <div>
                                <label for="type" tag="">Filter News</label>
                                <select class="form-control" id='filterNews'>
                                    <option value="">-- Select an option --</option>
                                    <option value="unassociated">Unassociated News</option>
                                </select>
                            </div>
                        </form>
                    </div>

                    <table id="news-list" class=" table table-bordered table-striped table-hover" style="width: 100%">
                        <thead>
                            <tr>
                            	<th>#</th>
                                <th>Title</th>
                                <th>Associated Industry/Node</th>
                                <th>Source</th>
                                <th>Released On</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    </table>

                </div>
            </div>
            <!-- /.card-body -->
        </div>

        <div class="card">
            <div class="card-body">
                <div class="loading_div_1"></div>
                <div class="loading_div_2"><img src="{{asset('images/ajax-loader.gif')}}" height="100"></div>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->

    </section>
	<!-- /.content -->

    @include('admin.news._associate_node_modal')
@endsection

@section('scripts')
    @parent
    <script src="{{ asset('plugins/datatables/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('plugins/datatables-bs4/js/dataTables.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('js/jquery-confirm.min.js') }}"></script>

    <script>
        var dataTable = $('#news-list').dataTable({
            "bProcessing": true,
            "serverSide": true,
            "responsive": true,
            "scrollX": true,
            "scrollY": "50vh",
            "scrollCollapse": true,
            "ajax": {
                'url' : "{{route('admin.news.index')}}",
                'data': function (data) {
                    data.filterNews = $('#filterNews').val();
                }
            },
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
                {'data': 'type'},
                {'data': 'author'},
                {'data': 'publishedAt'},
                {'data': 'actions'},
            ],
            "order": [[ 4, "desc" ]]
        });

        $( document ).ajaxError(function( event, jqxhr, settings, thrownError ) {
            if (thrownError == "Unauthorized") {
                location.reload();
            }
        });

        $('#filterNews').change(function(){
            dataTable.api().ajax.reload(null, false);
        });

        function showAssociateNodeModal(newsId, title) {
            $('#newsId').val(newsId);
            $('#title').val(title);
            $('#associateNodeModal').modal('show');
            initailizeSelect2($('.ajax-search-cross-node'), '{{ route("admin.search.node.tree") }}', 'all');
            $('.ajax-search-cross-node').html('');
        }

        function initailizeSelect2(selectElementObj, url, searchType) {
            $(selectElementObj).select2({
                minimumInputLength: 2,
                minimumResultsForSearch: 10,
                ajax: {
                    url: url,
                    dataType: 'json',
                    data: function (params) {
                        let queryParameters = {
                            term: params.term,
                            search_type: searchType
                        }
                        return queryParameters;
                    },
                    processResults: function (data) {
                        return {
                            results: $.map(data, function (item) {
                                return {
                                    text: item.itemName,
                                    id: item.id
                                }
                            })
                        };
                    }
                }
            });
        }

        $(document).on('click', '.save-cross-index', function () {
            let search_node = $("#ajax-search-cross-node").val();

            if ($.trim(search_node) === '') {
                $.alert('Please search and select a target node.');
                return false;
            }

            $.confirm({
                title: 'Confirm!',
                content: "Are you sure to associate this node with the news?",
                columnClass: 'medium',
                type: 'orange',
                typeAnimated: true,
                buttons: {
                    yes: {
                        btnClass: 'btn-green',
                        action: function () {
                            $('#associateNodeModal').modal('hide');
                            $(".loading_div_2").show();
                            $(".loading_div_1").show();

                            $.ajax({
                                url     : "{{ route("admin.news.associateNode") }}",
                                method  : 'post',
                                data    : {
                                    _token: '{{ csrf_token() }}',
                                    newsId: $("#newsId").val(),
                                    search_node: search_node
                                },
                                success : function (data) {
                                    $(".loading_div_2").hide();
                                    $(".loading_div_1").hide();

                                    if (data.status === 'success') {
                                        dataTable.api().ajax.reload(null, false);
                                        toastr.success(data.msg);
                                    } else if (data.status === 'error') {
                                        toastr.error(data.msg);
                                    }
                                },
                                error: function () {
                                    $(".loading_div_2").hide();
                                    $(".loading_div_1").hide();
                                    toastr.error('Operation failed!');
                                }
                            });
                        }
                    },
                    cancel: function () {}
                }
            });

        });
    </script>
@endsection
