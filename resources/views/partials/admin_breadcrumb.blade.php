<section class="content-header position-fixed">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>{{$breadcrumbs_title ?? 'Dashboard'}}</h1>
            </div>
            <div class="col-sm-6 pr-4">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="{{route('admin.home')}}">Home</a></li>
                    @if (! empty($breadcrumbs))
                        @foreach ($breadcrumbs as $label => $link)
                            @if (is_int($label) && ! is_int($link))
                                <li class="breadcrumb-item active">{{ $link }}</li>
                            @else
                                <li class="breadcrumb-item"><a href="{{ $link }}">{{ $label }}</a></li>
                            @endif
                        @endforeach
                    @endif
                </ol>
            </div>
        </div>
    </div><!-- /.container-fluid -->
</section>
