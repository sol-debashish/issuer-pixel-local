@extends('layouts.admin')

@section('styles')
<link rel="stylesheet" href="{{asset('css/admin_styles.css')}}">
@endsection

@section('content')

@include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'User Management',
                                                'breadcrumbs' => [
                                                    'User Management' => route('admin.users.index'),
                                                    'Create'
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
                <div class="card-body">
                    <form method="POST" action="{{ route("admin.users.store") }}" enctype="multipart/form-data">
                        @csrf

                        @include('admin.users._user_form')

                        <div class="form-group {{ $errors->has('password') ? 'has-error' : '' }}">
                            <label class="required" for="password">Password</label>
                            <input class="form-control" type="password" name="password" id="password" required>
                            @if($errors->has('password'))
                            <span class="help-block" role="alert">{{ $errors->first('password') }}</span>
                            @endif
                        </div>

                        <div class="form-group {{ $errors->has('password_confirmation') ? 'has-error' : '' }}">
                            <label class="required" for="password-confirm">Confirm Password</label>
                            <input class="form-control" type="password" name="password_confirmation" id="password_confirmation" required>
                            @if($errors->has('password_confirmation'))
                            <span class="help-block" role="alert">{{ $errors->first('password_confirmation') }}</span>
                            @endif
                        </div>

                        <div class="form-group">
                            <button class="btn btn-danger float-right" type="submit">
                                Save
                            </button>
                            <a class="btn btn-default" href="{{ route('admin.users.index') }}">
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