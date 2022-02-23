@if($row->status == 4)
    <span class="btn-xs btn-danger">Removed</span>
@elseif($row->status == 3)
    <span class="btn-xs btn-dark">Private</span>
@elseif($row->status == 2)
    <span class="btn-xs btn-success">Published</span>
@else
    <span class="btn-xs btn-info">Processing</span>
@endif
