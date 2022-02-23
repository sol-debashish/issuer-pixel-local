@extends('layouts.admin')
@section('styles')
    <link rel="stylesheet" href="{{asset('plugins/datatables-bs4/css/dataTables.bootstrap4.min.css')}}">
    <link rel="stylesheet" href="{{asset('plugins/jquery-ui/jquery-ui.min.css')}}">
    <style>
        .search>form {
            overflow: hidden;
            border: 1px solid #ddd;
            background: #dadada;
            padding: 20px;
        }
        .search form>div:first-child {
            margin-left: 0;
        }
        .search form>div {
            float: left;
            overflow: hidden;
            margin-left: 10px;
        }
        .search div label {
            display: block;
        }
    </style>
@endsection

@section('content')
    @include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'Time Spant',
    'breadcrumbs' => [
    'Time Spant'
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

{{--                    <div class="search mb-4">--}}
{{--                        <form action="" id="filter_form">--}}
{{--                            <div>--}}
{{--                                <label for="type" tag=""  >Type</label>--}}
{{--                                <select class="form-control" id='searchByType'>--}}
{{--                                    <option value=''>-- Select Type--</option>--}}
{{--                                    @foreach($types as $typeKey => $typeValue)--}}
{{--                                        <option value='{{$typeKey}}'>{{$typeValue}}</option>--}}
{{--                                    @endforeach--}}
{{--                                </select>--}}
{{--                            </div>--}}
{{--                            <div>--}}
{{--                                <label for="from_date" tag="">From Date</label>--}}
{{--                                <input type='text' id='search_fromdate' value="{{$formDate}}" class="form-control datepicker" placeholder='From date' autocomplete="off">--}}
{{--                            </div>--}}
{{--                            <div>--}}
{{--                                <label for="to_date" tag="">To Date</label>--}}
{{--                                <input type='text' id='search_todate' value="{{$toDate}}" class="form-control datepicker" placeholder='To date' autocomplete="off">--}}
{{--                            </div>--}}
{{--                        </form>--}}
{{--                    </div>--}}

                    <table id="LogList" class=" table table-bordered table-striped table-hover" style="width: 100%">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>User</th>
                            <th>Industry</th>
                            <th>Message</th>
                            <th>Date</th>
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
    <!-- jQuery UI JS -->
    <script type="text/javascript" src="{{ asset('plugins/jquery-ui/jquery-ui.min.js') }}"></script>
    <script src="{{ asset('plugins/datatables/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('plugins/datatables-bs4/js/dataTables.bootstrap4.min.js') }}"></script>
    <script>
        $(document).ready(function(){
            // Datapicker
            $( ".datepicker" ).datepicker({
                "dateFormat": "yy-mm-dd",
                onSelect: function(dateText) {
                    dataTable.api().ajax.reload(null, false);
                }
            });

            var dataTable = $('#LogList').dataTable({
                "bProcessing": true,
                "serverSide": true,
                "order": [[0, "desc"]],
                "responsive": true,
                "scrollX": true,
                // "scrollY": "50vh",
                "scrollCollapse": true,
                "ajax": {
                    'url' : "{{route('admin.get.time.spant.report')}}",
                },
                //Set column definition initialisation properties.
                "columnDefs": [
                    {
                        "targets": [-2], //last column
                        "orderable": false, //set not orderable
                        "searchable": false,
                    },
                ],
                'columns': [
                    {'data': 'id', name: 'time_spant_on_trees.id'},
                    {'data': 'name', name: 'users.name'},
                    {'data': 'description', name: 'industries.description'},
                    {'data': 'message'},
                    {'data': 'date_at'},
                ]
            });
            $( document ).ajaxError(function( event, jqxhr, settings, thrownError ) {
                if (thrownError == "Unauthorized") {
                    location.reload();
                }
            });
        })
    </script>
@endsection
