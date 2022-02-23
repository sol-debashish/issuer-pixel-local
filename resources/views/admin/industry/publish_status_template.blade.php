@if($row->publish_status == '1')
    <a href="javascript:;" class="btn-sm btn-success add-publish-unpublish-modal" data-publish-status="1" data-id="{{ $row->id }}">Published</a>
@else
    <a href="javascript:;" class="btn-sm btn-danger add-publish-unpublish-modal" data-publish-status="0" data-id="{{ $row->id }}">Unpublished</a>
@endif
