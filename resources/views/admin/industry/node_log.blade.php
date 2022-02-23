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
    @include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'Node log',
    'breadcrumbs' => [
    'Node log'
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
                                <label for="type" tag=""  >Type</label>
                                <select class="form-control" id='searchByType'>
                                    <option value=''>-- Select Type--</option>
                                    @foreach($types as $typeKey => $typeValue)
                                        <option value='{{$typeKey}}'>{{$typeValue}}</option>
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

                    <table id="LogList" class=" table table-bordered table-striped table-hover" style="width: 100%">
                        <thead>
                        <tr>
{{--                            <th><input type="checkbox" class='checkall' id='checkall'></th>--}}
                            <th>ID</th>
                            <th>Type</th>
                            <th>User</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Changes</th>
                        </tr>
                        </thead>
                    </table>
{{--                    <button class="btn btn-success" id='delete_record' value='Delete' >Delete selected</button>--}}
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
            // Check all
            $('#checkall').click(function(){
                if($(this).is(':checked')){
                    $('.delete_check').prop('checked', true);
                }else{
                    $('.delete_check').prop('checked', false);
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
                    'url' : "{{route('admin.industry.node.log')}}",
                    'data': function (data) {
                        var type = $('#searchByType').val();
                        var from_date = $('#search_fromdate').val();
                        var to_date = $('#search_todate').val();

                        data.searchByType = type;
                        data.searchByFromdate = from_date;
                        data.searchByTodate = to_date;
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
                    // {
                    //     'data': 'delete',
                    //     "type" : "html",
                    //     "render" : function ( data, type, row ) {
                    //         // console.log(data)
                    //         // console.log(type)
                    //         // console.log(row)
                    //         var str ="<input type='checkbox' class='delete_check' id='delcheck_"+ row.id +"' onclick='checkcheckbox();' value='"+ row.id +"'>";
                    //         return str;
                    //     }
                    // },
                    {'data': 'id'},
                    {'data': 'log_name'},
                    {'data': 'user'},
                    {'data': 'description'},
                    {'data': 'created_at'},
                    {
                        'data': 'status',
                        "type" : "html",
                        "render" : function ( data, type, row ) {
                            var str = "";
                            for (const [key, value] of Object.entries(data)) {
                                // console.log(`${key}: ${value}`);
                                if(`${key}` == 'attributes'){
                                    str += "<u>New data</u><br />"
                                }
                                if(`${key}` == 'old'){
                                    str += "<br /><u>Old data</u><br />"
                                }
                                for (const [childKey, childValue] of Object.entries(value)) {
                                    str += "<strong>"+ childKey + "</strong>: " +childValue + "<br />";
                                }
                            }
                            return str;
                        }
                    },

                ]
            });
            $( document ).ajaxError(function( event, jqxhr, settings, thrownError ) {
                if (thrownError == "Unauthorized") {
                    location.reload();
                }
            });

            $('#searchByType').change(function(){
                dataTable.api().ajax.reload(null, false);
            });

            // Delete record
            {{--$('#delete_record').click(function(){--}}

            {{--    var deleteids_arr = [];--}}
            {{--    // Read all checked checkboxes--}}
            {{--    $("input:checkbox[class=delete_check]:checked").each(function () {--}}
            {{--        deleteids_arr.push($(this).val());--}}
            {{--    });--}}

            {{--    // Check checkbox checked or not--}}
            {{--    if(deleteids_arr.length > 0){--}}

            {{--        // Confirm alert--}}
            {{--        var confirmdelete = confirm("Do you really want to Delete records?");--}}
            {{--        if (confirmdelete == true) {--}}
            {{--            $.ajax({--}}
            {{--                url: '{{route('admin.industry.node.log.delete')}}',--}}
            {{--                type: 'post',--}}
            {{--                data: {deleteids_arr: deleteids_arr, _token: $('input[name=_token]').val()},--}}
            {{--                success: function(response){--}}
            {{--                    dataTable.api().ajax.reload(null, false);--}}
            {{--                }--}}
            {{--            });--}}
            {{--        }--}}
            {{--    }--}}
            {{--});--}}
        })
        // Checkbox checked
        // function checkcheckbox(){
        //
        //     // Total checkboxes
        //     var length = $('.delete_check').length;
        //
        //     // Total checked checkboxes
        //     var totalchecked = 0;
        //     $('.delete_check').each(function(){
        //         if($(this).is(':checked')){
        //             totalchecked+=1;
        //         }
        //     });
        //
        //     // Checked unchecked checkbox
        //     if(totalchecked == length){
        //         $("#checkall").prop('checked', true);
        //     }else{
        //         $('#checkall').prop('checked', false);
        //     }
        // }
    </script>
@endsection
