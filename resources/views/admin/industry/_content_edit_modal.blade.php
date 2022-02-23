<?php
$replicaId = explode(':', $item->replica_id);
?>
<div class="modal-header">
    <h4 class="modal-title">Update Node: {{$item->description . ' - ' . $item->code}}</h4>
    <button type="button" class="close modal-close">&times;</button>
</div>
<div class="modal-body">
    <form class="form-horizontal" role="form">
        <div class="form-group description-input-section">
            <label class="required description-label" for="description">Description</label>
            <input class="form-control" type="text" name="description" value="{{$item->description}}" id="description"
                   required>
        </div>

        <div class="form-group" id="node-note-container">
            <label class="required" for="note">Note</label>
            <textarea class="form-control" name="note" id="note">{{$item->note}}</textarea>
        </div>
        <div class="issuer-lists">
            @if(!empty($issuerList))
                <table class=" table table-bordered table-striped table-hover" style="width: 100%">
                    <thead>
                    <tr>
                        <th style="width: 20%">Company Name</th>
                        <th style="width: 25%">Street Address</th>
                        <th style="width: 15%">City</th>
                        <th style="width: 25%">State</th>
                        <th style="width: 10%">Zip</th>
                        <th style="width: 5%">Action</th>
                    </tr>

                    </thead>
                    <tbody>
                    @foreach($issuerList as $Key => $Value)
                        <tr id="issuer_info_{{$Value['lookupId']}}">
                            <td>
                                <input size="10" type="text" id="company_edit_{{$Value['lookupId']}}"
                                       value="{{$Value['company']}}" class="issuer_field_{{$Value['lookupId']}} d-none"
                                       placeholder="Ex: Google; Facebook; Amazon">
                                <span>{{$Value['company']}}</span>
                            </td>
                            <td>
                                <input size="13" type="text" id="street_address_edit_{{$Value['lookupId']}}"
                                       value="{{$Value['street_address']}}"
                                       class="issuer_field_{{$Value['lookupId']}} d-none">
                                <span>{{$Value['street_address']}}</span>
                            </td>
                            <td>
                                <input size="6" type="text" id="city_edit_{{$Value['lookupId']}}"
                                       value="{{$Value['city']}}" class="issuer_field_{{$Value['lookupId']}} d-none">
                                <span>{{$Value['city']}}</span>
                            </td>
                            <td>
                                <input type="hidden" id="state_edit_value_{{$Value['lookupId']}}"
                                       value="{{$Value['state']}}">
                                <select id="state_edit_{{$Value['lookupId']}}"
                                        class="issuer_field_{{$Value['lookupId']}} d-none"
                                        onchange="setStateName('{{$Value["lookupId"]}}')">
                                    <option value="">Select State</option>
                                    @foreach($states as $stateData)
                                        <option value="{{$stateData['id']}}"
                                                @if($Value['stateId'] == $stateData['id']) selected @endif>{{$stateData['name']}}</option>
                                    @endforeach
                                </select>
                                <span>{{$Value['state']}}</span>
                            </td>
                            <td>
                                <input id="zip_edit_{{$Value['lookupId']}}" size="4" type="text"
                                       value="{{$Value['zip']}}" class="issuer_field_{{$Value['lookupId']}} d-none">
                                <span>{{$Value['zip']}}</span>
                            </td>
                            <td>
                                <a class="btn btn-primary btn-xs" href="javascript:void(0)"
                                   id="edit_issuer_{{$Value['lookupId']}}"
                                   onclick="return edit_enable('{{$Value["lookupId"]}}')">
                                    <i class="fas fa-edit"></i>
                                </a>
                                <button type='button' class='btn btn-danger btn-xs' data-lookid="{{$Value['lookupId']}}"
                                        id='delete-issuer'><i class="fas fa-times color-red"></i></button>
                                {{--                            <button class="btn btn-danger btn-xs" data-lookUpid="{{$Value['lookupId']}}"  id='delete-issuer'><i class="fas fa-times color-red"></i></button>--}}
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            @endif
        </div>
        <div id="multi-sub-sector-list" class="form-group">
            <label class="required node-active-inactive-status-label" for="status">Status</label>
            <select class="form-control" name="status" id="status" required>
                <option value="0" @if($item->status == '0') selected @endif>Inactive</option>
                <option value="1" @if($item->status == '1') selected @endif>Active</option>
            </select>
            <input type="hidden" name="industry_code" id="industry_code" value="{{$industryId}}">
            <input type="hidden" name="node_type" id="node_type" value="{{$nodeType}}">
            <input type="hidden" name="node_code" id="node_code" value="{{$item->code}}">
            <input type="hidden" name="node_id" id="node_id" value="{{$item->id}}">
        </div>
        {{--Search Node section--}}
        <div class="form-group search-node-container" style="display: none;">
            <label class="required" for="search-node">Search Node</label><br/>
            <select id="ajax-search-node" class="ajax-search-node form-control"></select>
        </div>
        <div class="form-group search-cross-node-container" style="display: none;">
            <label class="required" for="search-cross-node">Search Node</label><br/>
            <select id="ajax-search-cross-node" class="ajax-search-cross-node form-control"></select>
        </div>
        <div class="form-group search-node-warp-container" style="display: none;">
            <label class="required" for="search-warp-node">Search Node</label><br/>
            <select id="ajax-search-warp-node" class="ajax-search-warp-node form-control"></select>
        </div>
        {{--Add issuer section--}}
        <div class="add-issuer-container">
            <div class="form-group">
                <label class="required company-label" for="company">Company Name</label>
                <input class="form-control" type="text" name="companyName" value="" id="companyName"
                       placeholder="Ex: Google; Facebook; Amazon" required>
            </div>
            <div class="form-group">
                <label class="street-label" for="street-add">Street Address</label>
                <input class="form-control" type="text" name="streetAddress" value="" id="streetAddress">
            </div>
            <div class="form-group">
                <label class="city-label" for="city">City</label>
                <input class="form-control" type="text" name="city" value="" id="city">
            </div>
            <div class="form-group">
                <label class="state-label" for="state">State</label>
                <select id="state" name="state" class="state form-control">
                    <option value="">Select State</option>
                    @foreach($states as $state)
                        <option value="{{$state['id']}}">{{$state['name']}}</option>
                    @endforeach
                </select>
            </div>
            <div class="form-group">
                <label class="zip-label" for="zip">Zip</label>
                <input class="form-control" type="text" name="zip" value="" id="zip">
            </div>
        </div>
        {{--All Button section--}}
        <div class="modal-footer justify-content-center">
            <input type="hidden" id="iid" name="iid" value="{{$industryId}}">
            <button type='button' class='btn btn-danger  btn-sm' id='delete-node'>Delete</button>
            <button type="button" class="btn btn-default btn-sm move-node-btn">
                Move
            </button>
            <button type="button" class="btn btn-info  btn-sm duplicate-as-industry-btn">
                Duplicate as Industry
            </button>
            @if($nodeType != 'sub-mine')
                <button type="button" class="btn btn-dark  btn-sm copy-child-nodes-btn">
                    Copy child nodes
                </button>
            @endif

            <button type="button" class="btn actionBtn btn-sm btn-success update-node">
                <span id="footer_action_button" class='glyphicon'>Update</span>
            </button>
            <button type="button" class="btn btn-primary btn-sm cross-index-node-btn">
                Cross-Index Node
            </button>
            <button type="button" class="btn btn-info btn-sm node-warp-btn">
                Node Warp
            </button>
            <button type="button" class="btn btn-secondary btn-sm add-issuer-btn">
                Add Issuer
            </button>
            <button type="button" class="btn btn-success btn-sm add-keyword-btn" onclick="showNodeAddModal(1);getKeywordOrNegativeKeword();">
                Add Keywords
            </button>
            <button type="button" class="btn btn-info btn-sm add-negative-keyword-btn" onclick="showNodeAddModal(2);getKeywordOrNegativeKeword();">
                Add Negative Keywords
            </button>
            <button type="button" class="btn btn-warning btn-sm modal-close">
                <span class='glyphicon glyphicon-remove'></span> Close
            </button>
        </div>
        <!--End-->
        <div id="node-list-container" class="row">
            <div id="node_list" class="form-group col-md-6">
                @if($nodeType == 'sector')
                    <input class="parent_node_id d-none" type="checkbox" checked name="parent_node_id[]" value="1">
                @elseif(is_array($parentAssoc))
                    <div class="parent-node-list-header">
                        <label class="required" for="status">Parent Node</label>
                        <div class="form-check float-right">
                            <input class="form-check-input parentCheckedAll" type="checkbox" value="">
                            <label class="form-check-label" for="inlineCheckbox1">Select All</label>
                        </div>
                    </div>
                    <div class="parent-node-list">
                        @foreach($parentAssoc as $parentKey => $parentValue)
                            <div class="form-check">
                                <input class="form-check-input parent_node_id" type="checkbox" name="parent_node_id[]"
                                       @if(in_array($parentKey, $replicaId)) checked @endif value="{{$parentKey}}">
                                <label class="form-check-label" for="inlineCheckbox1">{{$parentValue}}</label>
                            </div>
                        @endforeach
                    </div>
                @endif
            </div>
            <div id="child_node_list" class="form-group col-md-6">
                @if($nodeType == 'sub-mine')
                    <input class="child_node_id d-none" type="checkbox" checked name="child_node_id[]" value="1">
                @elseif(is_array($childAssoc))
                    <div class="child-node-list-header">
                        <label class="required" for="status">Child Node</label>
                        <div class="form-check float-right">
                            <input class="form-check-input childCheckedAll" type="checkbox" value="">
                            <label class="form-check-label" for="inlineCheckbox1">Select All</label>
                        </div>
                    </div>
                    <div class="child-node-list">
                        @foreach($childAssoc as $childKey => $childValue)
                            <div class="form-check">
                                <input class="form-check-input child_node_id" type="checkbox" name="child_node_id[]"
                                       @if(in_array($childKey, $selectedChildAssoc)) checked
                                       @endif value="{{$childKey}}">
                                <label class="form-check-label" for="inlineCheckbox1">{{$childValue}}</label>
                            </div>
                        @endforeach
                    </div>
                @endif
            </div>
        </div>
    </form>
    {{--    Cross Index list Data will show within this div--}}
    <div class="cross-index-lists"></div>
    {{--    Node warp list Data will show within this div--}}
    <div class="node-warp-lists"></div>
</div>
