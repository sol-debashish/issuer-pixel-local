@extends('layouts.admin')
@section('content')

@include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'User Management',
                                                'breadcrumbs' => [
                                                    'User Management' => route('admin.issuers.index'),
                                                    'Show'
                                                ]
                                            ])

<section class="content">

    <!-- Default box -->
    <div class="row">
        <div class="col-lg-8">
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
                                        First Name
                                    </th>
                                    <td>
                                        {{ $user->first_name }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Last Name
                                    </th>
                                    <td>
                                        {{ $user->last_name }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Email
                                    </th>
                                    <td>
                                        {{ $user->email }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Role
                                    </th>
                                    <td>
                                        {{ $user->role }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Status
                                    </th>
                                    <td>
                                        {{ $user->status ? 'Active' : 'Inactive' }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Created At
                                    </th>
                                    <td>
                                        {{ $user->created_at->format('jS F, Y H:i:s A') }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Updated At
                                    </th>
                                    <td>
                                        {{ $user->updated_at->format('jS F, Y H:i:s A') }}
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
