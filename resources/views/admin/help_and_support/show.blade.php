@extends('layouts.admin')
@section('styles')
    <style>
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

@include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'Help and Support',
                                                'breadcrumbs' => [
                                                    'Help and Support' => route('admin.help.and.support'),
                                                    'Show'
                                                ]
                                            ])

<section class="content">

    <!-- Default box -->
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">
                        Show
                    </h3>
                </div>
                <div class="card-body">
                    <div class="loading_div_1"></div>
                    <div class="loading_div_2"><img src="{{asset('images/ajax-loader.gif')}}" height="100"></div>
                    <div class="form-group">
                        <table class="table table-bordered table-striped">
                            <tbody>
                                <tr>
                                    <th>
                                        Id
                                    </th>
                                    <td>
                                        {{$support->id}}
                                    </td>
                                </tr>

                                <tr>
                                    <th>
                                        User Name
                                    </th>
                                    <td>
                                        {{ $support->name }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        User Email
                                    </th>
                                    <td>
                                        {{ $support->email }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        User Phone
                                    </th>
                                    <td>
                                        {{ $support->phone }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Message
                                    </th>
                                    <td>
                                        {{ $support->message }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Date
                                    </th>
                                    <td>
                                        {{ $support->created_at->format('F jS, Y H:i:s A') }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                       Review Status
                                    </th>
                                    <td>
                                        @if($support->status == 'Closed')
                                            <span class="btn-sm btn-success">Closed</span>
                                        @else
                                            <div style="width: 20%">
                                                <select class="form-control review_status" data-id="{{ $support->id }}" data-current_status="{{ $support->status }}">
                                                    @foreach($status as $reviewStatusKey => $reviewStatusValue)
                                                        <option value='{{$reviewStatusValue}}' @if($support->status == $reviewStatusValue) selected="selected" @endif>{{$reviewStatusValue}}</option>
                                                    @endforeach
                                                </select>
                                            </div>
                                        @endif
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                       Reviewed By
                                    </th>
                                    <td>
                                       {{$support->reviewer ? $support->reviewer->name : ''}}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="form-group">
                            <a class="btn btn-default" href="#" onclick="window.history.back()">
                               Back
                            </a>
                        </div>
                    </div>
                </div>
                <!-- /.card-body -->
            </div>
        </div>
    </div>
    @include('admin.help_and_support.review_status_change_modal')
</section>
@endsection
@section('scripts')
    <script>
        $(document).on('change', '.review_status', function () {
            if($(this).val() != 'Open' && $(this).data('current_status') != $(this).val()){
                $('#footer_action_button').text("Yes");
                $('.actionBtn').addClass('btn-success');
                $('#support_id').val($(this).data('id'));
                $('#review_status_field').val($(this).val());
                $('.deleteContent').html('Are you Sure you want to '+ $(this).val() +' this?')
                $('#myModal').modal('show');
            }
        });

        $('.modal-footer').on('click', '.change-status-btn', function (){

            $('#myModal').modal('hide');
            $(".loading_div_2").show();
            $(".loading_div_1").show();
            $.ajax({
                type: 'post',
                url: "{{ route("admin.help.and.support.status.change") }}",
                data: {
                    '_token': $('input[name=_token]').val(),
                    support_id:  $("#support_id").val(),
                    review_status:  $("#review_status_field").val(),
                },
                success: function (data) {
                    if (data.status == 'success')
                    {
                        toastr.success(data.msg);
                        location.reload();
                    } else if (data.status == 'error')
                    {
                        toastr.error(data.msg);
                    }
                    $(".loading_div_2").hide();
                    $(".loading_div_1").hide();
                }
            });
        });
        function ESCclose(evt) {
            if (evt.keyCode == 27) {
                $('#myModal').modal('hide');
            }
        }
    </script>
@endsection
