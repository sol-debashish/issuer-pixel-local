<a class="btn btn-sm btn-primary"
   href="{{ route($routeKey.'.show', $row->id) }}">
    {{ trans('global.view') }}
</a>


<a class="btn btn-sm btn-info"
   href="{{ route($routeKey.'.edit', $row->id) }}">
    {{ trans('global.edit') }}
</a>

<a class="delete-modal  btn btn-sm btn-danger" href="javascript:;;" data-id="{{ $row->id }}">
    <i class="far fa-trash-alt"></i> Delete
</a>