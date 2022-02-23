@extends('layouts.admin')

@section('styles')
    <link rel="stylesheet" href="{{asset('css/admin_styles.css')}}">
@endsection

@section('content')
    @include('partials.admin_breadcrumb', ['breadcrumbs_title' => "Change {$user->name}'s password",
    'breadcrumbs' => [
        'User Management' => route('admin.users.index'),
        'Change user password'
    ]
    ])

    <!-- Main content -->
    <section class="content">
        <!-- Default box -->
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Change password</h3>
            </div>
            <div class="card-body">

                <form method="post" action="{{route('admin.users.store.reset.password', $user)}}">
                    {{csrf_field()}}

                    <div class="form-group has-feedback {{ $errors->has('password') ? 'has-error' : '' }}">
                        <label for="new_password" class="control-label">New Password</label>
                        <input type="password" name="password" value="{{old('password')}}" class="form-control" placeholder="New Password" autocomplete="off" required>

                        @if($errors->has('password'))
                            <span class="help-block" role="alert">{{ $errors->first('password') }}</span>
                        @endif
                    </div>

                    <div class="form-group pass_show has-feedback {{ $errors->has('password_confirmation') ? 'has-error' : '' }}">
                        <label for="confirm_password" class="control-label">Confirm Password</label>
                        <input type="password" name="password_confirmation" value="{{old('password_confirmation')}}" class="form-control" placeholder="Confirm Password" autocomplete="off" required>
                    </div>

                    <div class="form-group">
                        <button class="btn btn-danger float-right" type="submit">
                            Update
                        </button>
                        <a class="btn btn-default" href="{{ route('admin.users.index') }}">
                            Back
                        </a>
                    </div>

                </form>

            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
    </section>
    <!-- /.content -->
@endsection
