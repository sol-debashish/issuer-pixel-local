@if(! auth()->user()->isViewOnlyAdmin())
<a class="btn btn-sm btn-info marked-as-active" data-id="{{$row->id}}"
   href="javascript:;;">
    Marked as active
</a>
@endif
