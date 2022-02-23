@extends('layouts.admin')
@section('content')

@include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'News Management',
    'breadcrumbs' => [
        'News Management' => route('admin.news.index'),
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
                                        Title
                                    </th>
                                    <td>
                                        {!! $title !!}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Node
                                    </th>
                                    <td>
                                        {{ $fullTerm }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Words matched
                                    </th>
                                    <td>
                                        {{ $match }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Word percentage
                                    </th>
                                    <td>
                                        {{ $matchPercentage }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="form-group">
                            <a class="btn btn-default" href="{{route('admin.news.index')}}">
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
