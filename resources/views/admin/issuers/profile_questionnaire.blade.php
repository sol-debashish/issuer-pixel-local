@extends('layouts.admin')


@section('content')
    <!-- Main content -->
    <section class="content">

        <!-- Default box -->
        <div class="card">
            <div class="card-body mt-5 mb-5 text-center">
                <h1 class="mt-5">Please Wait</h1>
                <img src="{{asset('images/media_thumbnil_loader.gif')}}" alt="">
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
    </section>
    <!-- /.content -->
@endsection
@section('scripts')
    @parent
    <script>
        localStorage.setItem("adminInfo", JSON.stringify('{{$adminInfo}}'));
        localStorage.setItem("userInfo", JSON.stringify('{{$response}}'));
        localStorage.setItem("info", JSON.stringify( <?php echo json_encode($userInfo, JSON_FORCE_OBJECT) ?>));
        localStorage.setItem("videoUploadRemainingDays", '{{$userInfo['video_upload_remaining_days']}}');
        localStorage.setItem("isVideoUploaded", '{{$userInfo['is_video_uploaded']}}');
        localStorage.setItem("userid", '{{$userInfo['id']}}');
        localStorage.setItem("companyUuid", '{{$userInfo['company_uuid']}}');
        localStorage.setItem("companySlugName", '{{$userInfo['company_slug_name']}}');
        localStorage.setItem("storagePath", '{{$userInfo['storage_path']}}');
        localStorage.setItem("bulletins", JSON.stringify( <?php echo json_encode($userInfo['bulletins'], JSON_FORCE_OBJECT) ?>));
        localStorage.setItem("token", '{{$userInfo['token']}}');
        window.location.href = "{{$url}}";
    </script>
@endsection
