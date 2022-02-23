@extends('layouts.admin')
@section('styles')
    <link rel="stylesheet" href="{{asset('plugins/datatables-bs4/css/dataTables.bootstrap4.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/twitter_trends.css')}}">
@endsection

@section('content')
    @include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'Trending Tags',
	    'breadcrumbs' => [
	    	'Trending Tags'
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

                    <table id="twitterTrendsList" class=" table table-bordered table-striped table-hover" style="width: 100%">
                        <thead>
                            <tr>
                            	<th>ID</th>
                                <th>Name</th>
                                <th>URL</th>
                                <th>Query</th>
                                <th>Tweet Volume</th>
                                <th>WOEID</th>
                                <th>Updated On</th>
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
@endsection

@section('scripts')
    @parent
    <script src="{{ asset('plugins/datatables/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('plugins/datatables-bs4/js/dataTables.bootstrap4.min.js') }}"></script>

    <script>
        var dataTable = $('#twitterTrendsList').dataTable({
            "bProcessing": true,
            "serverSide": true,
            "responsive": true,
            "scrollX": true,
            "scrollY": "50vh",
            "scrollCollapse": true,
            "ajax": {
                'url' : "{{route('admin.twitter.trends.index')}}"
            },
            //Set column definition initialisation properties.
            "columnDefs": [],
            'columns': [
                {'data': 'id'},
                {'data': 'name'},
                {'data': 'url'},
                {'data': 'query'},
                {'data': 'tweet_volume'},
                {'data': 'woeid'},
                {'data': 'createdAt'}
            ],
            "order": [[ 0, "desc" ]]
        });

        $( document ).ajaxError(function( event, jqxhr, settings, thrownError ) {
            if (thrownError == "Unauthorized") {
                location.reload();
            }
        });
    </script>
@endsection
