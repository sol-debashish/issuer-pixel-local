@extends('layouts.admin')
@section('content')
@include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'Industry Management',
                                            'breadcrumbs' => [
                                                'Industry Management' => route('admin.industry.index'),
                                                'Edit',
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
            @include('partials.errors')

            <div class="card-body">
                <form method="POST" action="{{ route("admin.industry.update", [$industry->id]) }}">
                    @method('PUT')
                    @csrf

                    @include('admin.industry.create_or_edit_form')

                    <div class="form-group {{ $errors->has('status') ? 'has-error' : '' }}">
                        <label class="required" for="status">Status</label>
                        <select class="form-control select2" name="status" id="status" required>
                            <option value="0" {{ $industry->status === "0" ? 'selected' : '' }}>Inactive</option>
                            <option value="1" {{$industry->status === "1" ? 'selected' : '' }}>Active</option>

                        </select>
                        @if($errors->has('status'))
                            <span class="help-block" role="alert">{{ $errors->first('status') }}</span>
                        @endif
                    </div>

                    <div class="form-group">
                        <button class="btn btn-danger float-right" type="submit">
                                Update
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