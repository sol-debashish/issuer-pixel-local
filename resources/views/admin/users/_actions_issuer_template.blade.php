@if(auth()->user()->isDataAnalysis())
    -
@else
    <a class="btn btn-sm btn-primary"
       href="{{route('admin.issuer.questionnaire.admin',['user' => $row->user_id, 'type' => 'profile'])}}">
        View Questionnaire
    </a>

    <a class="btn btn-sm btn-info"
       href="{{route('admin.issuers.media.file',$row->user_id)}}">
        View files
    </a>
@endif

@if(auth()->user()->isAdminOrSuperAdminOrCustomerSupport())
    <a class="btn btn-sm btn-success"
       href="{{ route($routeKey.'.reset.issuer.password', $row->id) }}">
        Reset password
    </a>
    @if('production' != config('app.env'))
        <form action="{{ route($routeKey.'.delete.issuer', $row->id) }}" onsubmit="return confirm('Are you sure full delete this issuer?')" method="post">
            @csrf
            {{ method_field('delete') }}
            <button class="btn btn-sm btn-danger" type="submit">Full Delete</button>
        </form>
    @endif
@endif


@if(auth()->user()->isSuperAdmin())
    <form action="{{ route($routeKey.'.deactive.issuer', $row->id) }}" onsubmit="return confirm('Are you sure delete this issuer?')" method="post">
        @csrf
        {{ method_field('delete') }}
        <button class="btn btn-sm btn-danger" type="submit">Delete</button>
    </form>
@endif
