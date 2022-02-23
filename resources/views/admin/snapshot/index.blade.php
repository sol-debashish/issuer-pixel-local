@extends('layouts.admin')

@section('styles')
    <style>
        .inactive-node{
            background-color: #e7e7e7 !important;
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
@append

@section('content')
    @include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'Node DB Snapshot Management',
    'breadcrumbs' => [
        'Node DB Snapshot Management'
    ]
    ])

    <!-- Main content -->
    <section class="content">

        <!-- Default box -->
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">List</h3>

                {{--<div class="card-tools">--}}
                    {{--<a class="btn btn-sm btn-success" href="{{ route("admin.users.create") }}">--}}
                        {{--Add User--}}
                    {{--</a>--}}
                {{--</div>--}}
            </div>
            <div class="card-body">
                <div class="loading_div_1"></div>
                <div class="loading_div_2"><img src="{{asset('images/ajax-loader.gif')}}" height="100"></div>

                <div class="table-responsive">
                    <table id="AdminUserList" class=" table table-bordered table-striped table-hover" style="width: 100%">
                        <thead>
                        <tr>
                            <th>Sl.</th>
                            <th>File Name</th>
                            <th>Size</th>
                            <th>Created at</th>
                            <th>Action</th>
                        </tr>
                        </thead>

                        <tbody>
                        @forelse($files as $file)
                            {{--{{dd($file)}}--}}
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td>{{$file['filename']}}</td>
                                <td>{{$file['size']}} bytes</td>
                                <td>{{\Carbon\Carbon::createFromTimestamp($file['timestamp'])->format('m/d/Y H:i:s') }}</td>
                                <td>
                                    <a class="btn btn-sm btn-info" href="{{route('admin.snapshot.download', ['filename' => $file['filename'], 'extension' => $file['extension']])}}">
                                        Download
                                    </a>
                                    <!------------------------------------
                                        THIS WILL BE USED IN FUTURE WHEN
                                        LIST SHOWS DATA FROM S3 ONLY
                                    -------------------------------------->
                                    <!-- <a class="btn btn-sm btn-info" href="<?php //$file['url']; ?>">
                                        Download
                                    </a> -->
                                    <a class="btn btn-sm btn-info restore-node-data" data-name="{{$file['filename']}}" href="javascript:;;">
                                        Restore
                                    </a>
                                </td>
                            </tr>
                        @empty
                            <tr class="odd">
                                <td colspan="5" class="text-center">No data available in table</td>
                            </tr>
                        @endforelse

                        </tbody>

                    </table>
                </div>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
    </section>
    <!-- /.content -->
@endsection

@section('scripts')
    @parent
    <script>
        $('.restore-node-data').on('click',  function (){

            if(! confirm("All current data will be lost. Are you sure you wish to restore this version?"))
            {
                return false;
            }

            $(".loading_div_2").show();
            $(".loading_div_1").show();
            $.ajax({
                type: 'post',
                url: "{{ route("admin.snapshot.restore") }}",
                data: {
                    '_token': $('input[name=_token]').val(),
                    file_name:  $(this).data('name')
                },
                success: function (data) {
                    if (data.status == 'success')
                    {
                        toastr.success(data.msg);
                    } else if (data.status == 'error')
                    {
                        toastr.error(data.msg);
                    }
                    $(".loading_div_2").hide();
                    $(".loading_div_1").hide();
                }
            });
        });

    </script>
@endsection
