<div class="modal-header">
    <h4 class="modal-title">Copy Child Node(s)</h4>
    <button type="button" class="close modal-close">&times;</button>
</div>
<div class="modal-body">
    <form class="form-horizontal" role="form">
        <div class="form-group description-input-section">
            <label class="required description-label" for="description">Description</label>
            <input class="form-control" type="text" name="description" value="{{$item->description}}" id="description" disabled>
        </div>


        <div id="node-list-container" >
            <label class="required" for="status">Child Node</label>
            <div class="form-check float-right">
                <input class="form-check-input childCheckedAll" type="checkbox"  value="">
                <label class="form-check-label" for="inlineCheckbox1">Select All</label>
            </div>
            @foreach($childAssoc as $childKey => $childValue)
                <div class="form-check">
                    <input class="form-check-input child_node_id" type="checkbox" name="child_node_id[]" value="{{$childKey}}">
                    <label class="form-check-label" for="inlineCheckbox1">{{$childValue}}</label>
                </div>
            @endforeach
        </div>

        <div id="multi-sub-sector-list" class="form-group">
            <input type="hidden" name="industry_code" id="industry_code" value="{{$industryId}}">
            <input type="hidden" name="node_type" id="node_type" value="{{$noteType}}">
            <input type="hidden" name="node_code" id="node_code" value="{{$item->code}}">
        </div>
        {{--Search Node section--}}
        <div class="form-group search-node-container">
            <label class="required" for="search-node">Search Node</label><br />
            <select id="ajax-search-node" class="ajax-search-node form-control"></select>
        </div>

        {{--All Button section--}}
        <div class="modal-footer">
            <input type="hidden" id="iid" name="iid" value="{{$industryId}}">
            <button type="button" class="btn btn-success btn-sm copy-child-node">Copy</button>
            <button type="button" class="btn btn-warning btn-sm modal-close" >
                <span class='glyphicon glyphicon-remove'></span> Close
            </button>
        </div>
        <!--End-->
    </form>
</div>
