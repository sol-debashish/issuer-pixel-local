<div class="modal-header">
    <h4 class="modal-title">{{$title}}</h4>
    <button type="button" class="close modal-close">&times;</button>
</div>
<div class="modal-body">
    <form class="form-horizontal" role="form">
        <div class="form-group">
            <label class="required description-label" for="description">Description</label>
            <input class="form-control" type="text" name="description" id="description" required>
        </div>

        <div class="form-group" id="node-note-container">
            <label class="required" for="note">Note</label>
            <textarea class="form-control" name="note" id="note"></textarea>
        </div>

        @if(is_array($parentAssoc))
        <div id="multi-node-list" class="form-group">
            <label class="required" for="status">Parent Node(s)</label>
            <div class="form-check float-right">
                <input class="form-check-input checkedAll" type="checkbox"  value="">
                <label class="form-check-label" for="inlineCheckbox1">Select All</label>
            </div>
            <div class="industry-node-add-modal-parent-list">
            @foreach($parentAssoc as $parentKey => $parentValue)
                <div class="form-check">
                    <input class="form-check-input {{$fieldName}}" type="checkbox" name="{{$fieldName}}[]" value="{{$parentKey}}">
                    <label class="form-check-label" for="inlineCheckbox1">{{$parentValue}}</label>
                </div>
            @endforeach
            </div>
        </div>
        @endif
    </form>
    <div class="modal-footer">
        <input type="hidden" id="iid" name="iid" value="{{$industryId}}">
        <input type="hidden" id="node_type" name="node_type" value="{{$nodeType}}">

        <button type="button" class="btn actionBtn btn-success btn-sm {{$addClass}}">
            <span id="footer_action_button" class='glyphicon'> Add</span>
        </button>
        <button type="button" class="btn btn-warning btn-sm modal-close">
            <span class='glyphicon glyphicon-remove'></span> Close
        </button>
    </div>
</div>
