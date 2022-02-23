@extends('layouts.admin')
@section('content')

@include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'Feedback Management',
                                                'breadcrumbs' => [
                                                    'Feedback Management' => route('admin.feedback.index'),
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
                                    <th style="width: 20%">
                                        User Name
                                    </th>
                                    <td style="width: 80%">
                                        {{ $feedback->reviewer_name }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        User Email
                                    </th>
                                    <td>
                                        {{ $feedback->reviewer_email }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Rating
                                    </th>
                                    <td>
                                        {{ $feedback->rating }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Comment
                                    </th>
                                    <td>
                                        {{ $feedback->review }}
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
