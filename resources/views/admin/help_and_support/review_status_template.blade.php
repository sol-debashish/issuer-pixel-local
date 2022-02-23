@if($row->status == 'Closed')
    <span class="btn-sm btn-success">Closed</span>
@else
    <div>
        <select class="form-control review_status" data-id="{{ $row->id }}" data-current_status="{{ $row->status }}">
            @foreach($status as $reviewStatusKey => $reviewStatusValue)
                <option value='{{$reviewStatusValue}}' @if($row->status == $reviewStatusValue) selected="selected" @endif>{{$reviewStatusValue}}</option>
            @endforeach
        </select>
    </div>
@endif
