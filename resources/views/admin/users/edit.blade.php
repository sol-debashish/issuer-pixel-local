@extends('layouts.admin')
@section('styles')
<link rel="stylesheet" href="{{asset('css/admin_styles.css')}}">
@endsection
@section('content')
@include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'User Management',
                                                'breadcrumbs' => [
                                                    'User Management' => route('admin.users.index'),
                                                    'Edit'
                                                ]
                                            ])
<section class="content">

    <!-- Default box -->
    <div class="row">
        <div class="col-lg-8">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">
                        Edit
                    </h3>
                </div>
                <div class="card-body">
                    <form method="POST" action="{{ route("admin.users.update", [$user->id]) }}" enctype="multipart/form-data">
                        @method('PUT')
                        @csrf

                        @include('admin.users._user_form')

                        <div class="form-group {{ $errors->has('status') ? 'has-error' : '' }}">
                            <label class="required" for="status">Status</label>
                            <select class="form-control select2" name="status" id="status" required>

                                <option value="0" {{ $user->status === "0" ? 'selected' : '' }}>Inactive</option>
                                <option value="1" {{$user->status === "1" ? 'selected' : '' }}>Active</option>

                            </select>
                            @if($errors->has('status'))
                            <span class="help-block" role="alert">{{ $errors->first('status') }}</span>
                            @endif
                        </div>


                        <div class="form-group">
                            <button class="btn btn-danger float-right" type="submit">
                               Update
                            </button>
                            <a class="btn btn-default" href="#" onclick="window.history.back()">
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