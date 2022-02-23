<a class="btn btn-sm btn-primary"
   href="{{ route($routeKey.'.show', $row->id) }}">
    View
</a>

<a class="btn btn-sm btn-info"
   href="{{ route($routeKey.'.edit', $row->id) }}">
    Edit
</a>

<a class="btn btn-sm btn-danger"
   href="javascript:;;" onclick="deleteBulletin('{{ $row->id }}')">
    Delete
</a>
