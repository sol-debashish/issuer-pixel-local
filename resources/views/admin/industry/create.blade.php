@extends('layouts.admin')
@section('styles')
{{--<link rel="stylesheet" href="{{asset('plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css')}}">--}}
@endsection
@section('content')
@include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'Industry Management',
                                            'breadcrumbs' => [
                                                'Industry Management' => route('admin.industry.index'),
                                                'Create',
                                            ]
                                        ])
<section class="content">

    <!-- Default box -->
    <div class="row">
        <div class="col-lg-8">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">
                        Create
                    </h3>
                </div>

                @include('partials.errors')

                <div class="card-body">
                    <form method="POST" action="{{ route("admin.industry.store") }}">
                        @csrf

                        @include('admin.industry.create_or_edit_form')

                        <div class="form-group">
                            <button class="btn btn-danger float-right" type="submit">
                                Save
                            </button>
                            <a class="btn btn-default" href="{{ route('admin.industry.index') }}">
                                Back
                            </a>
                        </div>
                    </form>
                </div>
                <!-- /.card-body -->
            </div>
        </div>
    </div>
    <!-- /.card -->
</section>
@endsection