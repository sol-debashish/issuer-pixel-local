@extends('layouts.admin')
@section('styles')
    <link rel="stylesheet" href="{{asset('plugins/datatables-bs4/css/dataTables.bootstrap4.min.css')}}">
    <link rel="stylesheet" href="{{asset('plugins/jquery-ui/jquery-ui.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/jquery-confirm.min.css')}}">
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
        .loading_div_1{
            display: none;
            z-index: 9990;
            opacity: 0.5;
            width: 100%;
            height: 100%;
            position: fixed;
            background: #FFF none repeat scroll 0% 0%;
        }

        .loading_div_2{
            display: none;
            z-index: 9995;
            overflow: auto;
            opacity: 0.5;
            width: 50%;
            height: 60%;
            top: 50%;
            left: 50%;
            padding: 20px;
            position: fixed;
            border-radius: 5px;
        }
    </style>
@endsection

@section('content')
    @include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'Audit log',
    'breadcrumbs' => [
    'Audit log'
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
                <div class="loading_div_1"></div>
                <div class="loading_div_2"><img src="{{asset('images/ajax-loader.gif')}}" height="100"></div>

                <div class="table-responsive">

                    <div class="search mb-4">
                        <form action="" id="filter_form" class="clearfix">
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
                            <div class="float-right" style="font-size: 50px">
                                <a href="javascript:;" id="csv-export">
                                    <i class="fas fa-download"></i>
                                </a>
                            </div>
                        </form>
                    </div>

                    <table id="LogList" class=" table table-bordered table-striped table-hover" style="width: 100%">
                        <thead>
                        <tr>
                            <th><input type="checkbox" class='checkall' id='checkall'></th>
                            <th>ID</th>
                            <th>Type</th>
                            <th>Date</th>
                            <th>Duration in (hh:mm)</th>
                            <th>User Name</th>
                            <th>User Email</th>
                        </tr>
                        </thead>
                    </table>
                    <button class="btn btn-success" id='delete_record' value='Delete' >Delete selected</button>
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
    <script src="{{ asset('js/jquery-confirm.min.js') }}" type="text/javascript"></script>
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
                "order": [[1, "desc"]],
                "responsive": true,
                "scrollX": true,
                // "scrollY": "50vh",
                "scrollCollapse": true,
                "ajax": {
                    'url' : "{{route('admin.audit.log.index')}}",
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
                        "targets": [0,-1], //last column
                        "orderable": false, //set not orderable
                        "searchable": false,
                    },
                ],
                'columns': [
                    {
                        'data': 'delete',
                        "type" : "html",
                        "render" : function ( data, type, row ) {
                            // console.log(data)
                            // console.log(type)
                            // console.log(row)
                            var str ="<input type='checkbox' class='delete_check' id='delcheck_"+ row.id +"' onclick='checkcheckbox();' value='"+ row.id +"'>";
                            return str;
                        }
                    },
                    {'data': 'id'},
                    {'data': 'log_name'},
                    {'data': 'created_at'},
                    {
                        'data': 'duration',
                        "className": "text-center"
                    },
                    {'data': 'user'},
                    {'data': 'email'},
                    // {
                    //     'data': 'status',
                    //     "type" : "html",
                    //     "render" : function ( data, type, row ) {
                    //         var str = "";
                    //         for (const [key, value] of Object.entries(data)) {
                    //             // console.log(`${key}: ${value}`);
                    //             if(`${key}` == 'attributes'){
                    //                 str += "<u>New data</u><br />"
                    //             }
                    //             if(`${key}` == 'old'){
                    //                 str += "<br /><u>Old data</u><br />"
                    //             }
                    //             for (const [childKey, childValue] of Object.entries(value)) {
                    //                 str += "<strong>"+ childKey + "</strong>: " +childValue + "<br />";
                    //             }
                    //         }
                    //         return str;
                    //     }
                    // },

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
            $('#delete_record').click(function(){

                var deleteids_arr = [];
                // Read all checked checkboxes
                $("input:checkbox[class=delete_check]:checked").each(function () {
                    deleteids_arr.push($(this).val());
                });

                // Check checkbox checked or not
                if(deleteids_arr.length > 0){

                    // Confirm alert
                    var confirmdelete = confirm("Do you really want to Delete records?");
                    if (confirmdelete == true) {
                        $.ajax({
                            url: '{{route('admin.audit.log.delete')}}',
                            type: 'post',
                            data: {deleteids_arr: deleteids_arr, _token: $('input[name=_token]').val()},
                            success: function(response){
                                dataTable.api().ajax.reload(null, false);
                            }
                        });
                    }
                }
            });

            //csv export
            $('#csv-export').click(function(){
                $.confirm({
                    title: 'Confirm!',
                    content: "Are you sure want to export as csv?",
                    columnClass: 'medium',
                    type: 'orange',
                    typeAnimated: true,
                    buttons: {
                        yes: {
                            btnClass: 'btn-green',
                            action: function () {
                                $(".loading_div_2").show();
                                $(".loading_div_1").show();
                                let data = {
                                    type : $('#searchByType').val(),
                                    from_date : $('#search_fromdate').val(),
                                    to_date : $('#search_todate').val(),
                                    export_type : 'csv',
                                };
                                $.ajax({
                                    type: 'get',
                                    url: '{{route('admin.audit.log.export')}}',
                                    data: data,
                                    xhrFields: {
                                        responseType: 'blob'
                                    },
                                    success: function (response) {
                                        $(".loading_div_2").hide();
                                        $(".loading_div_1").hide();
                                        let blob = new Blob([response]),
                                            link = document.createElement('a');
                                        link.href = window.URL.createObjectURL(blob);
                                        link.download = "audt_log_{{date('m-d-Y')}}.csv";
                                        link.click();
                                        toastr.success('file successfully generated');
                                    },
                                    error: function(xhr, status, err) {
                                        if (xhr.status == 401){
                                            window.location.href = '{{ route("admin.login") }}';
                                        }
                                        else{
                                            toastr.error('There is an error occur');
                                            $(".loading_div_2").hide();
                                            $(".loading_div_1").hide();
                                        }
                                    }
                                });
                            }
                        },
                        cancel: function () {
                        }
                    }
                });
            });
        })
        // Checkbox checked
        function checkcheckbox(){

            // Total checkboxes
            var length = $('.delete_check').length;

            // Total checked checkboxes
            var totalchecked = 0;
            $('.delete_check').each(function(){
                if($(this).is(':checked')){
                    totalchecked+=1;
                }
            });

            // Checked unchecked checkbox
            if(totalchecked == length){
                $("#checkall").prop('checked', true);
            }else{
                $('#checkall').prop('checked', false);
            }
        }

        function ESCclose(evt) {
            if (evt.keyCode == 27) {
                if(!!jconfirm.instances[0]){
                    jconfirm.instances[0].close();
                }
            }
        }
    </script>
@endsection
