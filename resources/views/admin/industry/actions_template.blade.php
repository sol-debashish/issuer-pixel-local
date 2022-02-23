
<a class="btn btn-sm btn-info"
   href="{{ route($routeKey.'.node', $row->id) }}">
    Node Tree
</a>
@if(auth()->user()->isAdminOrSuperAdminOrDataAnalysis())
<a class="btn btn-sm btn-info"
   href="{{ route($routeKey.'.edit', $row->id) }}">
    Industry Management
</a>
<a class="btn btn-sm btn-info duplicate-industry" data-id="{{$row->id}}"
   href="javascript:;;">
    Duplicate
</a>
@endif
