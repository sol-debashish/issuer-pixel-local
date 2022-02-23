@if($associateNode)
   <a class="btn btn-sm btn-primary my-1" href="javascript:;;" onclick="showAssociateNodeModal('{{ $newsId }}', '{{ $title }}')">
      Associate Node
   </a>
@endif

<a class="btn btn-sm btn-info my-1"
   href="{{ route('admin.news.show', ['newsId' => $newsId]) }}">
    View Details
</a>
