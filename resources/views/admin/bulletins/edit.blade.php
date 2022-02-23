@extends('layouts.admin')

@section('styles')
	<link rel="stylesheet" href="{{asset('css/admin_styles.css')}}">
@endsection

@section('content')
	@include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'Bulletin Management',
	    'breadcrumbs' => [
	        'Bulletin Management' => route('admin.bulletins.index'),
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
	                    <form method="POST" action="{{ route("admin.bulletins.update", $bulletin->id) }}" enctype="multipart/form-data">
	                        @method('PUT')
	                        @csrf

	                        @include('admin.bulletins.form')

	                        <div class="form-group {{ $errors->has('status') ? 'has-error' : '' }}">
	                            <label class="required" for="status">Status</label>
	                            <select class="form-control" name="status" required>
	                                <option value="0" @if(old('status', optional($bulletin)->status) == '0') selected @endif>Inactive</option>
	                                <option value="1" @if(old('status', optional($bulletin)->status) == '1') selected @endif>Active</option>
	                            </select>
	                            @if($errors->has('status'))
	                            	<span class="help-block" role="alert">{{ $errors->first('status') }}</span>
	                            @endif
	                        </div>


	                        <div class="form-group">
	                            <button class="btn btn-danger float-right" type="submit">
	                               Update
	                            </button>
	                            <a class="btn btn-default" href="{{ route('admin.bulletins.index') }}">
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