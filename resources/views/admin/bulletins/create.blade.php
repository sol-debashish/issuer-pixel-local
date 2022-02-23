@extends('layouts.admin')

@section('styles')
	<link rel="stylesheet" href="{{asset('css/admin_styles.css')}}">
@endsection

@section('content')
	@include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'Bulletin Management',
	    'breadcrumbs' => [
	        'Bulletin Management' => route('admin.bulletins.index'),
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
	                    <form method="POST" action="{{ route("admin.bulletins.store") }}" enctype="multipart/form-data">
	                        @csrf

	                        @include('admin.bulletins.form')

	                        <div class="form-group">
	                            <button class="btn btn-danger float-right" type="submit">
	                                Save
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