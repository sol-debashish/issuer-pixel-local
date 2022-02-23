@extends('layouts.admin')
@section('content')

@include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'Media Suggestion',
                                                'breadcrumbs' => [
                                                    'Media Suggestion' => route('admin.media.subject.suggestion'),
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
                    <div class="form-group">
                        <table class="table table-bordered table-striped">
                            <tbody>
                                <tr>
                                    <th>
                                        Id
                                    </th>
                                    <td>
                                        {{$suggestion->id}}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Media Type
                                    </th>
                                    <td>
                                        {{$suggestion->media_type == 2 ? "Video": "Audio"}}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Suggested Subject
                                    </th>
                                    <td>
                                        {{$suggestion->subject}}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Reason
                                    </th>
                                    <td>
                                        {{$suggestion->reason}}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        User Name
                                    </th>
                                    <td>
                                        {{ $suggestion->owner->name }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        User Email
                                    </th>
                                    <td>
                                        {{ $suggestion->owner->email }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Date
                                    </th>
                                    <td>
                                        {{ $suggestion->created_at->format('F jS, Y H:i:s A') }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                       Review Status
                                    </th>
                                    <td>
                                       {{$suggestion->review_status}}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                       Reviewed By
                                    </th>
                                    <td>
                                       {{$suggestion->reviewer ? $suggestion->reviewer->name : ''}}
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
    <!-- /.card -->
</section>
@endsection
