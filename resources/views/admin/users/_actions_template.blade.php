<a class="btn btn-sm btn-primary"
   href="{{ route($routeKey.'.show', $row->id) }}">
    View
</a>

@if(auth()->user()->isAdminOrSuperAdminOrDataAnalysis() || (auth()->user()->isViewOnlyAdmin() && auth()->user()->id == $row->id))
    <a class="btn btn-sm btn-info"
       href="{{ route($routeKey.'.edit', $row->id) }}">
        Edit
    </a>
@endif

@if(auth()->user()->isAdminOrSuperAdminOrDataAnalysis())
    <a class="btn btn-sm btn-success"
       href="{{ route($routeKey.'.reset.password', $row->id) }}">
        Reset password
    </a>
@endif
