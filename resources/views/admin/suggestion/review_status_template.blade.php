@if($row->review_status == 'Accepted')
    <span class="btn-sm btn-success">Accepted</span>
@elseif($row->review_status == 'Rejected')
    <span class="btn-sm btn-danger">Rejected</span>
@else
    <div>
        <select class="form-control review_status" data-id="{{ $row->id }}">
            @foreach($reviewStatus as $reviewStatusKey => $reviewStatusValue)
                <option value='{{$reviewStatusValue}}'>{{$reviewStatusValue}}</option>
            @endforeach
        </select>
    </div>
@endif
