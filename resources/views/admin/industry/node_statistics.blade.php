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
    <!-- Content Header (Page header) -->
    @include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'Industry Node Statistics',
                                            'breadcrumbs' => [
                                            'Industry Node Statistics'
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
                        <form action="" id="filter_form">
                            <div>
                                <label for="type" tag=""  >Industry</label>
                                <select class="form-control" id='searchByIndustry'>
                                    <option value=''>-- Select Industry--</option>
                                    @foreach($ndustry as $ndustryKey => $ndustryValue)
                                        <option value='{{$ndustryKey}}'>{{$ndustryValue}}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div>
                                <label for="from_date" tag="">From Date</label>
                                <input type='text' id='search_fromdate' value="{{$formDate}}" class="form-control datepicker" placeholder='From date' autocomplete="off">
                            </div>
                            <div>
                                <label for="to_date" tag="">To Date</label>
                                <input type='text' id='search_todate' value="{{$toDate}}" class="form-control datepicker" placeholder='To date' autocomplete="off">
                            </div>
                        </form>
                    </div>

                    <table id="nodeStatistics" class=" table table-bordered table-striped table-hover" style="width: 100%">
                        <thead>
                        <tr>
                            <th>Industry</th>
                            <th>Date</th>
                            <th>Nodes added</th>
                            <th>Nodes Edited</th>
                            <th>Nodes Deleted</th>
                            <th>Total Nodes</th>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
    </section>

@endsection

@section('scripts')
    @parent
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

            var dataTable = $('#nodeStatistics').dataTable({
                "bProcessing": true,
                "serverSide": true,
                "bFilter":false,
                "order": [[0, "desc"]],
                "responsive": true,
                "scrollX": true,
                // "scrollY": "50vh",
                "scrollCollapse": true,
                "ajax": {
                    'url' : "{{route('admin.industry.node.statistics')}}",
                    'data': function (data) {
                        var industry = $('#searchByIndustry').val();
                        var from_date = $('#search_fromdate').val();
                        var to_date = $('#search_todate').val();

                        data.searchByIndustry = industry;
                        data.searchByFromdate = from_date;
                        data.searchByTodate = to_date;
                    }
                },
                'columns': [
                    {'data': 'name'},
                    {'data': 'created_at'},
                    {'data': 'nodes_added'},
                    {'data': 'nodes_edited'},
                    {'data': 'nodes_deleted'},
                    {'data': 'total_nodes'},

                ]
            });
            $( document ).ajaxError(function( event, jqxhr, settings, thrownError ) {
                if (thrownError == "Unauthorized") {
                    location.reload();
                }
            });

            $('#searchByIndustry').change(function(){
                dataTable.api().ajax.reload(null, false);
            });
        })
    </script>
@endsection
