@extends('layouts.admin')
@section('content')

@include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'Bulletin Management',
    'breadcrumbs' => [
        'Bulletin Management' => route('admin.bulletins.index'),
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
                        @if($bulletin->image_name)
                        <div class="pb-2">
                            <img class="img-thumbnail" src="{{$bulletin->getPhotoUrl().'?h=150&fit=crop-center'}}" alt="{{ $bulletin->title }}">
                        </div>
                        @endif
                        <table class="table table-bordered table-striped">
                            <tbody>
                                <tr>
                                    <th>
                                        Title
                                    </th>
                                    <td>
                                        {{ $bulletin->title }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Description
                                    </th>
                                    <td>
                                        {{ $bulletin->description }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Status
                                    </th>
                                    <td>
                                        {{ $bulletin->status ? 'Active' : 'Inactive' }}
                                    </td>
                                </tr>
                                <tr>
                                <tr>
                                    <th>
                                        Created by
                                    </th>
                                    <td>
                                        {{ $bulletin->user->name }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Updated by
                                    </th>
                                    <td>
                                        {{ $bulletin->editor ? $bulletin->editor->name : '' }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Created At
                                    </th>
                                    <td>
                                        {{ $bulletin->created_at->format('jS F, Y H:i:s A') }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Updated At
                                    </th>
                                    <td>
                                        {{ $bulletin->updated_at->format('jS F, Y H:i:s A') }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="form-group">
                            <a class="btn btn-default" href="{{route('admin.bulletins.index')}}">
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
