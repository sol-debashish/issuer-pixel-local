@extends('layouts.admin')

@section('styles')
    <link rel="stylesheet" href="{{asset('css/jquery-confirm.min.css')}}">
    <link rel="stylesheet" href="{{asset('css/node-tree.css')}}">
    <link rel="stylesheet" href="{{asset('plugins/bootstrap/css/tagsinput.css')}}">
    <style type="text/css">
        .ui-widget.ui-widget-content {
            max-height: 400px;
            overflow-y: auto;
            z-index: 10000;
        }
    </style>
@append

@section('content')
    <!-- Content Header (Page header) -->
    @include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'Node Management', 'breadcrumbs' => ['Industry Management' => route('admin.industry.index'), 'Node']])
    <?php
    $nodeView = "v";
    if (request()->view == 'h') {
        $nodeView = "h";
    }
    ?>
    <!-- Main content -->
    <section class="content">
        <!-- Default box -->
        <div class="card position-fixed" style="z-index: 3; width: 83%" id="nodeTreeHeader">
            <div class="card-header">
                <h3 class="card-title">{{$industry->description}} - <span id="total-node-count">1</span> node(s)</h3>
                <span id="top-loader"><img src="{{asset('images/small-loader.gif')}}" height="30"></span>
                <div class="card-tools">
                    <div class="list-group list-group-horizontal">
                        <input type="text" value="" id="search" placeholder="Search for a Node" autocomplete="off"/>
                        <ul id="searchElement" class="list"></ul>
                        <a href="javascript:;;" class="list-group-item list-group-item-action expand-all-node"
                           title="Expand All"><i class="fas fa-minus-square"></i></a>
                        <a href="javascript:;;" class="list-group-item list-group-item-action collapse-all-node"
                           title="Collapse All"><i class="fas fa-plus-square"></i></a>
                        @if(request()->view == 'h')
                            <a href="{{route('admin.industry.node', $industry->id)}}?view=v"
                               class="list-group-item list-group-item-action" title="Vertical View"><i
                                    class="fas fa-grip-vertical"></i></a>
                        @else
                            <a href="{{route('admin.industry.node', $industry->id)}}?view=h"
                               class="list-group-item list-group-item-action" title="Horizontal View"><i
                                    class="fas fa-grip-horizontal"></i></a>
                        @endif
                        <a href="javascript:;;" onclick="refreshPage();" class="list-group-item" title="Refresh"><i
                                class="fas fa-sync"></i></a>
                        @if(auth()->user()->isAdminOrSuperAdminOrDataAnalysis())
                            <a href="javascript:;;" id="manual-industry-snapshot"
                               data-industry-id={{$industry->id}} class="list-group-item" title="Node Backup"><i
                                    class="fas fa-database"></i></a>
                            <a href="javascript:;;" id="manual-industry-snapshot-restore"
                               data-industry-id={{$industry->id}} class="list-group-item" title="Node Restore"><i
                                    class="fas fa-history"></i></a>
                        @endif
                        <a href="javascript:;;" class="list-group-item download-pdf" title="Download pdf"><i
                                class="far fa-file-pdf"></i></a>
                        <a href="javascript:;;" class="list-group-item list-group-item-action zoom-in"
                           title="Zoom in"><i class="fas fa-search-plus"></i></a>
                        <span class="list-group-item list-group-item-action " title="Zoom percentage"><span
                                id="zoom-percentage-container">100</span>%</span>
                        <a href="javascript:;;" class="list-group-item list-group-item-action zoom-out"
                           title="Zoom out"><i class="fas fa-search-minus"></i></a>
                        <button class="zoom-reset d-none">Reset</button>
                    </div>
                </div>
                <div class="mr-1 float-right">
                    <button type="button" data-id="{{$industry->code}}" class="btn btn-secondary btn-sm btn-tree-header industry-all-node-counter-btn">
                        Node Counter
                    </button>
                    <button class="btn btn-primary btn-sm btn-tree-header" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-plus-circle"></i> Add Node
                    </button>
                    <div class="dropdown-menu add-node-dropdown">
                        <ul class="industry-nodes-menus add-node-menu list-unstyled ml-0 mb-0">
                            <li class="nav-item">
                                <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create" data-iid="{{$industry->id}}" data-type="sector" class="nav-link add-sector sector-bg-color">
                                    <i class="fas fa-circle nav-icon"></i>Add Sector
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="sub-sector"  class="nav-link  add-sub-sector sub-sector-bg-color">
                                    <i class="fas fa-circle nav-icon"></i>Add Sub Sector
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="group"  class="nav-link  add-group group-bg-color">
                                    <i class="fas fa-circle nav-icon"></i>Add Group
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="sub-group"  class="nav-link add-sub-group sub-group-bg-color">
                                    <i class="fas fa-circle nav-icon"></i>Add Sub Group
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="echelon"  class="nav-link add-echelon echelon-bg-color">
                                    <i class="fas fa-circle nav-icon"></i>Add Echelon
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="sub-echelon" class="nav-link add-sub-echelon sub-echelon-bg-color">
                                    <i class="fas fa-circle nav-icon"></i>Add Sub Echelon
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="tier"  class="nav-link  add-tier tier-bg-color">
                                    <i class="fas fa-circle nav-icon"></i>Add Tier
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="sub-tier"  class="nav-link  add-sub-tier sub-tier-bg-color">
                                    <i class="fas fa-circle nav-icon"></i>Add Sub Tier
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="layer"  class="nav-link add-layer layer-bg-color">
                                    <i class="fas fa-circle nav-icon"></i>Add Layer
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="sub-layer"  class="nav-link add-sub-layer sub-layer-bg-color">
                                    <i class="fas fa-circle nav-icon"></i>Add Sub Layer
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="deck"  class="nav-link add-deck deck-bg-color">
                                    <i class="fas fa-circle nav-icon"></i>Add Deck
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="sub-deck" class="nav-link  add-sub-deck sub-deck-bg-color">
                                    <i class="fas fa-circle nav-icon"></i>Add Sub Deck
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:;;" data-id="{{$industry->id}}"  data-action="create"  data-iid="{{$industry->id}}"  data-type="floor" class="nav-link add-floor floor-bg-color">
                                    <i class="fas fa-circle nav-icon"></i>Add Floor
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="sub-floor" class="nav-link add-sub-floor sub-floor-bg-color">
                                    <i class="fas fa-circle nav-icon"></i>Add Sub Floor
                                </a>
                            </li>

                            <li class="nav-item">
                                <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="basement" class="nav-link add-basement basement-bg-color">
                                    <i class="fas fa-circle nav-icon"></i>Add Basement
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="sub-basement" class="nav-link add-sub-basement sub-basement-bg-color">
                                    <i class="fas fa-circle nav-icon"></i>Add Sub Basement
                                </a>
                            </li>

                            <li class="nav-item">
                                <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="mine" class="nav-link add-mine mine-bg-color">
                                    <i class="fas fa-circle nav-icon"></i>Add Mine
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="javascript:;;" data-id="{{$industry->id}}" data-action="create"  data-iid="{{$industry->id}}"  data-type="sub-mine" class="nav-link add-sub-mine sub-mine-bg-color">
                                    <i class="fas fa-circle nav-icon"></i>Add Sub Mine
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="loading_div_1"></div>
                <div class="loading_div_2"><img src="{{asset('images/ajax-loader.gif')}}" height="100"></div>
                @if(request()->view == 'h')
                    @include('admin.industry._horizontal_node_view')
                @else
                    @include('admin.industry._vertical_node_view')
                @endif
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
    </section>

    @include('admin.industry.add_modal')

    <!-- Modal -->
    <div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog  modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="myModalLabel">Modal 2</h4>
                </div>

                <div class="modal-body"></div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <!-- key word add modal for industry -->
    <div class="modal fade" id="key-word-add-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
         aria-hidden="true">
        <div class="modal-dialog  modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="keywordModalTitle"></h4>
                    <button type="button" class="close modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <form class="form-horizontal" role="form">
                        <input type="hidden" name="industry_id" id="industry_id_for_keyword"
                               value="{{$industry->code}}">
                        <input type="hidden" name="node_id" id="node_id_for_keyword" value="">
                        <input type="hidden" name="node_code" id="node_code_for_keyword" value="">
                        <input type="hidden" name="node_type" id="node_type_for_keyword" value="">
                        <input type="hidden" name="keyword_type" id="keyword_type" value="">
                        <div id="add-iw-keyword-container" style="display: none">
                            <div class="form-group">
                                <label class="keyword-label" for="keyword" id="keyword-label">Keyword</label>
                                <input class="form-control" type="text" name="keyword" value="" id="keyword"
                                       autocomplete="off"
                                       data-role="tagsinput"
                                       required>

                            </div>
                        </div>
                    </form>
                    <div id="add-iw-keyword-btn-container" class="text-center">
                        <button type="button" class="btn btn-success btn-sm" id="add-iw-keyword-btn"
                                onclick="$(this).parent().hide();$('#add-iw-keyword-container').show();$('#add-iw-keyword-save-btn-container').show();$('#keywordModalBack').show();$('#keywordModalClose').hide();$('#add-iw-keyword-save-btn-container').show();$('#keyword_type').val('1');$('#keyword-label').html('Keyword');$('#node_id_for_keyword').val(''); $('#node_code_for_keyword').val(''); $('#node_type_for_keyword').val('');getKeywordOrNegativeKeword();">
                            Add Industry-Wide Keyword
                        </button>
                        <button type="button" class="btn btn-info  btn-sm" id="add-iw-negative-keyword-btn"
                                onclick="$(this).parent().hide();$('#add-iw-keyword-container').show();$('#add-iw-keyword-save-btn-container').show();$('#keywordModalBack').show();$('#keywordModalClose').hide();$('#keyword_type').val('2');$('#keyword-label').html('Negative Keyword');$('#node_id_for_keyword').val(''); $('#node_code_for_keyword').val(''); $('#node_type_for_keyword').val('');getKeywordOrNegativeKeword();">
                            Add Industry-Wide Negative Keyword
                        </button>
                    </div>
                </div>
                <div class="modal-footer">
                    <div id="add-iw-keyword-save-btn-container" class="text-center" style="display: none">
                        <button type="button" class="btn btn-success btn-sm" id="keyword-save-btn">
                            Save
                        </button>
                        <button type="button" id="keywordModalBack" class="btn btn-info  btn-sm"
                                onclick="$(this).parent().hide();$('#add-iw-keyword-container').hide(); $('#add-iw-keyword-btn-container').show();$('#keyword_type').val('');$('#keyword').val('');">
                            Back
                        </button>
                        <button type="button" id="keywordModalClose" class="btn btn-warning btn-sm modal-close"
                                data-dismiss="modal">Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--Node Counter Modal -->
    <div class="modal fade" id="nodeCounterModal" tabindex="-1" role="dialog" aria-labelledby="nodeCounterLabel" aria-hidden="true">
        <div class="modal-dialog  modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title text-center" id="nodeCounterLabel">Node Counter</h4>
                    <button type="button" class="close modal-close" data-dismiss="modal">&times;</button>
                </div>

                <div class="modal-body overflow-auto"></div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script src="{{ asset('js/jquery.panzoom.js') }}" type="text/javascript"></script>
    <script src="{{ asset('js/jquery-confirm.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('plugins/bootstrap/js/tagsinput.js') }}" type="text/javascript"></script>
    <script type="text/javascript">
        let industryCode = '{{$industry->code}}',
            totalRequestNode = 1,
            totalResponseNodeArray = [],
            totalRequestNodeAjaxCall = 0,
            movingNode = false,
            startTime = new Date().getTime(),
            nodeTreeSearchData = [];

        function insertNode(nodeType, node, childNodeContainer) {
            let template = $('<li>', {
                id: 'parent_li_node_' + nodeType + '_' + node.id,
                class: 'parent_li ' + nodeType,
                html: $('<button>', {
                    title: node.note,
                    class: "node-edit" + (node.status == '0' ? ' inactive-node' : ''),
                    'data-toggle': "tooltip",
                    'data-placement': "right",
                    'data-id': node.id,
                    'data-type': nodeType,
                    'data-iid': industryCode,
                    html: $('<span>', {
                        id: 'node_' + nodeType + '_' + node.id,
                        class: "span-node",
                        html: node.description + " " +
                            (node.cross_indexed == '1' ? '<img src="{{asset('images/cross-index.png')}}" />' : '') + " " +
                            (node.node_warp == '1' ? '<img src="{{asset('images/node-warp.png')}}" />' : '') + " " +
                            (node.note ? '<img src="{{asset('images/note.png')}}" />' : '') +
                            '<br>' + node.code
                    })
                })
            }).append($('<ul>', {id: childNodeContainer + '_' + node.id}));

            return template;
        }

        function recursively_ajax(itemType, childNodeIds) {
            $('#sector-content-loader').show();
            totalRequestNodeAjaxCall++;
            if (totalRequestNodeAjaxCall < 50) {
                //console.log(itemType + ' total child:' + childNodeIds.length);
                $.ajax({
                    type: "POST",
                    // async:false, // set async false to wait for previous response
                    url: '{{route('admin.get.child.node')}}',
                    dataType: "json",
                    data: {
                        type: itemType,
                        'child_node_ids': JSON.stringify(childNodeIds),
                        _token: $('input[name=_token]').val()
                    },
                    beforeSend: function () {
                        $('#top-loader').show();
                        $('#sector-content-loader').show();
                    },
                    success: function (data) {
                        totalRequestNodeAjaxCall--;
                        if (data.status === 'success') {
                            $.each(data.nodeItems, function (i, node) {
                                nodeTreeSearchData.push({
                                    value: node.description + ' (' + node.code + ')',
                                    //label: node.description + ' (' + node.code + ')',
                                    id: node.id,
                                    node_type: itemType,
                                    description: node.description,
                                    code: node.code
                                });
                                let targetNode = '#' + data.targetParentNodeContainer + node[data.parent_field];
                                $(targetNode).append(insertNode(data.type, node, data.childNodeContainer));
                                if (!$(targetNode).prev().hasClass('collapse-node')) {
                                    $('<span class="collapse-node" title="collapse/expand node"> <i class="far fa-minus-square"></i></span>').insertBefore(targetNode);
                                }
                            });
                            if (!movingNode) {
                                let $totalNodeCount = $('#total-node-count');
                                $totalNodeCount.html(parseInt($totalNodeCount.html()) + parseInt(data.nextChildNodeIds.length));
                            }
                            if (data.nextChildNodeIds.length && data.type !== 'sub-mine') {
                                recursively_ajax(data.childType, data.nextChildNodeIds);
                            } else {
                                $("[data-toggle = 'tooltip']").tooltip({trigger: "hover"});
                                if (totalRequestNodeAjaxCall === 0) {
                                    $('#top-loader').hide();
                                }
                                $('#horizontal-tree-container li.industry').css('height', $('.industry').height() + 15);

                                @if(request()->hp && (request()->view == 'h'))
                                $('.tree-node-container').scrollLeft({{request()->hp}});
                                @elseif(request()->hp)
                                $(document).scrollLeft({{request()->hp}});
                                @endif

                                @if(request()->vp && (request()->view == 'h'))
                                $('.tree-node-container').scrollTop({{request()->vp}});
                                @elseif(request()->vp)
                                $(document).scrollTop({{request()->vp}});
                                @endif
                            }
                        }
                    },
                    error: function (error) {
                        console.log(error.responseJSON);
                    }
                });
            } else {
                totalRequestNodeAjaxCall--;
                setTimeout(function () {
                    recursively_ajax(itemType, childNodeIds);
                }, 500);
            }
        }

        function ajaxPost(url, postData) {
            let horizontalPosition = $('.tree-node-container').scrollLeft(),
                verticalPosition = $('.tree-node-container').scrollTop();
            $(".loading_div_2").show();
            $(".loading_div_1").show();
            $.ajax({
                type: 'post',
                url: url,
                data: postData,
                success: function (data) {
                    if (data.status === 'success') {
                        let url = '{{request()->url()}}' + '{{(request()->view == 'h')? "?view=h": "?view=v"}}';
                        if (url.indexOf('?') > -1) {
                            url += '&hp=' + horizontalPosition
                            url += '&vp=' + verticalPosition
                        } else {
                            url += '?hp=' + horizontalPosition
                            url += '&vp=' + verticalPosition
                        }

                        $('#myModal').modal('hide');

                        let updatedNodeData = data.updatedNode.description + " " +
                            (data.updatedNode.cross_indexed == '1' ? '<img src="{{asset('images/cross-index.png')}}" />' : '') + " " +
                            (data.updatedNode.node_warp == '1' ? '<img src="{{asset('images/node-warp.png')}}" />' : '') + " " +
                            (data.updatedNode.note ? '<img src="{{asset('images/note.png')}}" />' : '') +
                            '<br>' + data.updatedNode.code;
                        $('#node_' + postData.node_type + '_' + data.updatedNode.id).html(updatedNodeData);

                        if (data.crossData !== undefined) {
                            let updatedCrossData = data.crossData.description + " " +
                                (data.crossData.cross_indexed == '1' ? '<img src="{{asset('images/cross-index.png')}}" />' : '') + " " +
                                (data.crossData.node_warp == '1' ? '<img src="{{asset('images/node-warp.png')}}" />' : '') + " " +
                                (data.crossData.note ? '<img src="{{asset('images/note.png')}}" />' : '') +
                                '<br>' + data.crossData.code;
                            $('#node_' + data.crossNodeType + '_' + data.crossData.id).html(updatedCrossData);
                        }
                        toastr.success(data.msg);
                    } else if (data.status === 'nodeCreate') {
                        toastr.success(data.msg);
                        $('#myModal').modal('hide');

                        $.each(data.response.content, function (index, value) {
                            let targetNode = '#' + value.targetContainer;
                            $(targetNode).append(insertNode(postData.node_type, value.node, value.childNodeContainer));
                            if (!$(targetNode).prev().hasClass('collapse-node')) {
                                $('<span class="collapse-node" title="collapse/expand node"> <i class="far fa-minus-square"></i></span>').insertBefore(targetNode);
                            }
                        });

                        let $totalNodeCount = $('#total-node-count');
                        $totalNodeCount.html(parseInt($totalNodeCount.html()) + parseInt(data.totalAdded));

                        $("[data-toggle = 'tooltip']").tooltip({trigger: "hover"});
                    } else if (data.status === 'warpExist') {
                        $.alert({
                            title: 'Warning!',
                            content: 'This node already warps to another node. A node can only warp to one node at a time, this action is not allowed.',
                            type: 'red'
                        });
                    } else if (data.status === 'error') {
                        toastr.error(data.msg);
                    }
                    $(".loading_div_2").hide();
                    $(".loading_div_1").hide();
                },
                error: function () {
                    toastr.error('There is an error occur');
                    $(".loading_div_2").hide();
                    $(".loading_div_1").hide();
                }
            });
        }

        jQuery.expr[':'].contains = function (a, i, m) {
            return jQuery(a).text().toUpperCase()
                .indexOf(m[3].toUpperCase()) >= 0;
        };

        $(".download-pdf").click(function () {
            $(".loading_div_2").show();
            $(".loading_div_1").show();
            let data = {view: '{{$nodeView}}'};
            $.ajax({
                type: 'GET',
                url: '{{route('admin.node.pdf.generate', $industry->id)}}',
                data: data,
                xhrFields: {
                    responseType: 'blob'
                },
                success: function (response) {
                    $(".loading_div_2").hide();
                    $(".loading_div_1").hide();
                    let blob = new Blob([response]),
                        link = document.createElement('a');
                    link.href = window.URL.createObjectURL(blob);
                    link.download = "{{$industry->description.'-'. date('m-d-Y')}}.pdf";
                    link.click();
                    toastr.success('pdf successuflly generated');
                },
                error: function (xhr, status, err) {
                    if (xhr.status == 401) {
                        window.location.href = '{{ route("admin.login") }}';
                    } else {
                        toastr.error('There is an error occur');
                        $(".loading_div_2").hide();
                        $(".loading_div_1").hide();
                    }
                }
            });
        });

        (function () {
            let $zoomIn = $(".zoom-in"),
                $zoomOut = $(".zoom-out");
            $panzoom = $('.industry').panzoom({
                $zoomIn: $zoomIn,
                $zoomOut: $zoomOut,
                $reset: $(".zoom-reset"),
                maxScale: 2,
                panOnlyWhenZoomed: true
            });

            $zoomIn.on('click', function () {
                let $zoomPercentageContainer = $('#zoom-percentage-container');
                if (parseInt($zoomPercentageContainer.text()) < 120) {
                    $zoomPercentageContainer.html(parseInt($zoomPercentageContainer.text()) + 10);
                }
                if (parseInt($zoomPercentageContainer.text()) === 100) {
                    console.log('zoom in')
                    $(".zoom-reset").trigger("click");
                }
            });

            $zoomOut.on('click', function () {
                let $zoomPercentageContainer = $('#zoom-percentage-container');
                if (parseInt($zoomPercentageContainer.text()) > 70) {
                    $zoomPercentageContainer.html(parseInt($zoomPercentageContainer.text()) - 10);
                }
                if (parseInt($zoomPercentageContainer.text()) === 100) {
                    console.log('zoom out')
                    $(".zoom-reset").trigger("click");

                }
            });
        })();

        $(document).ready(function () {
            getNodeRelatedDataAjax()

            totalRequestNodeAjaxCall = 0;
            recursively_ajax('sector', [parseInt({{$industry->id}})]);

            $(document).on('click', '.modal-close', function () {
                $('#myModal').modal('hide');
                $('#key-word-add-modal').modal('hide');
            });

            $(document).on('click', '.collapse-node', function () {
                $(this).next("ul").toggle();
                if ($(this).children().hasClass("fa-minus-square")) {
                    $(this).children().removeClass("fa-minus-square").addClass("fa-plus-square")
                } else {
                    $(this).children().removeClass("fa-plus-square").addClass("fa-minus-square")
                }
            });

            $(".collapse-all-node").on('click', function () {
                $('.tree').find("ul li span i").removeClass("fa-plus-square").addClass("fa-minus-square")
                $('.industry').find("ul").show()
            })

            $(".expand-all-node").on('click', function () {
                $('.tree').find("ul li span i").removeClass("fa-minus-square").addClass("fa-plus-square")
                $('.industry').find("ul").hide()
            })

            $(function () {
                $("[data-toggle = 'tooltip']").tooltip({trigger: "hover"});
            });

            $(document).on('submit', 'form', function (e) {
                e.preventDefault(e);
            });

            $(document).on('keypress', 'input', function (e) {
                if(e.target.getAttribute('name') != 'keyword'){
                if (e.which === 13) {
                    let $btnSuccess = $(".btn-success");
                    if ($btnSuccess.hasClass("update-node")) {
                        $(".update-node").trigger("click");
                    } else if ($btnSuccess.hasClass("add-to-sub-mine")) {
                        $(".add-to-sub-mine").trigger("click");
                    } else if ($btnSuccess.hasClass("add-to-mine")) {
                        $(".add-to-mine").trigger("click");
                    } else if ($btnSuccess.hasClass("add-to-sub-basement")) {
                        $(".add-to-sub-basement").trigger("click");
                    } else if ($btnSuccess.hasClass("add-to-basement")) {
                        $(".add-to-basement").trigger("click");
                    } else if ($btnSuccess.hasClass("add-to-sub-floor")) {
                        $(".add-to-sub-floor").trigger("click");
                    } else if ($btnSuccess.hasClass("add-to-floor")) {
                        $(".add-to-floor").trigger("click");
                    } else if ($btnSuccess.hasClass("add-to-sub-deck")) {
                        $(".add-to-sub-deck").trigger("click");
                    } else if ($btnSuccess.hasClass("add-to-deck")) {
                        $(".add-to-deck").trigger("click");
                    } else if ($btnSuccess.hasClass("add-to-sub-layer")) {
                        $(".add-to-sub-layer").trigger("click");
                    } else if ($btnSuccess.hasClass("add-to-layer")) {
                        $(".add-to-layer").trigger("click");
                    } else if ($btnSuccess.hasClass("add-to-sub-tier")) {
                        $(".add-to-sub-tier").trigger("click");
                    } else if ($btnSuccess.hasClass("add-to-tier")) {
                        $(".add-to-tier").trigger("click");
                    } else if ($btnSuccess.hasClass("add-to-sub-echelon")) {
                        $(".add-to-sub-echelon").trigger("click");
                    } else if ($btnSuccess.hasClass("add-to-echelon")) {
                        $(".add-to-echelon").trigger("click");
                    } else if ($btnSuccess.hasClass("add-to-sub-group")) {
                        $(".add-to-sub-group").trigger("click");
                    } else if ($btnSuccess.hasClass("add-to-group")) {
                        $(".add-to-group").trigger("click");
                    } else if ($btnSuccess.hasClass("add-to-sub-sector")) {
                        $(".add-to-sub-sector").trigger("click");
                    } else if ($btnSuccess.hasClass("add-to-sector")) {
                        $(".add-to-sector").trigger("click");
                    }
                    return false;
                }
                }
            });


            $(document).on('change', '.checkedAll', function () {
                checkAllNodeList(this, 'form-check-input');
            });

            $(document).on('change', '.parentCheckedAll', function () {
                checkAllNodeList(this, 'parent_node_id');
            });

            $(document).on('change', '.childCheckedAll', function () {
                checkAllNodeList(this, 'child_node_id');
            });

            let sidebarClosed = true;
            $('[data-widget="pushmenu"]').trigger("click");
            $('#nodeTreeHeader').addClass('node-tree-header-menu');

            $('[data-widget="pushmenu"]').on("click", function() {
                sidebarClosed = !sidebarClosed;

                if(sidebarClosed) {
                    $('#nodeTreeHeader').addClass('node-tree-header-menu');
                } else {
                    $('#nodeTreeHeader').removeClass('node-tree-header-menu');
                }
            });

            $('.add-node-menu li a').on("click", function() {
                $(".loading_div_2").show();
                $(".loading_div_1").show();
            });

            $("#myModal").on("shown.bs.modal", function() {
                $(".loading_div_2").hide();
                $(".loading_div_1").hide();
            });
        });

        @if(auth()->user()->isAdminOrSuperAdminOrDataAnalysis())
        $(document).on('click', '.industry-nodes-menus .nav-link', function () {
            generateCreateModal($(this));
        });
        $(document).on('click', '.create-node', function () {
            let data = {
                _token: $('input[name=_token]').val(),
                description: $("#description").val(),
                note: $("#note").val(),
                industry_id: $("#iid").val(),
                total_node: parseInt($("#total-node-count").html()),
                node_type: $("#node_type").val(),
                parent_ids: $('.parent_ids:checked').serialize()
            }

            if ($.trim(data.description) === '') {
                $.alert({
                    title: 'Alert!',
                    content: 'Description can not be left blank',
                    type: 'red'
                });
                return false;
            } else if ($.trim(data.parent_ids) === '' && data.node_type !== 'sector') {
                $.alert({
                    title: 'Alert!',
                    content: 'Please select at least one Parent Node',
                    type: 'red'
                });
                return false;
            } else {
                ajaxPost("{{ route("admin.create.node") }}", data)
            }

        });

        $(document).on('click', '.node-edit', function () {
            let id = $(this).data('id'),
                industry_id = $(this).data('iid'),
                node_type = $(this).data('type');
            $(".loading_div_2").show();
            $(".loading_div_1").show();
            $('#nodeCounterModal').modal('hide');
            $('#myModal .modal-content').html('Loading..');
            $.ajax({
                type: 'get',
                url: '{{route('admin.get.node.edit.data')}}',
                data: {id: id, node_type: node_type, industry_id: industry_id},
                success: function (data) {
                    if (data.status === 'success') {
                        $('#myModal .modal-content').html(data.html);
                        $('#myModal').modal({
                            backdrop: false,
                            keyboard: false
                        });
                        $('.add-issuer-container').hide();
                        initailizeSelect2($('.ajax-search-node'), '{{ route("admin.search.node.tree") }}', 'move');
                        $(".loading_div_2").hide();
                        $(".loading_div_1").hide();
                    } else {
                        toastr.error(data.msg);
                        $('#myModal').modal('hide');
                    }
                },
                error: function (xhr, status, err) {
                    if (xhr.status == 401) {
                        window.location.href = '{{ route("admin.login") }}';
                    } else {
                        toastr.error('There is an error occur');
                        $(".loading_div_2").hide();
                        $(".loading_div_1").hide();
                    }
                }
            });
        });

        $(document).on('click', '.update-node', function () {
            let requestData = {
                _token: $('input[name=_token]').val(),
                description: $("#description").val(),
                note: $("#note").val(),
                node_type: $("#node_type").val(),
                node_code: $("#node_code").val(),
                node_id: $("#node_id").val(),
                total_node: parseInt($("#total-node-count").html()),
                status: $("#status").val(),
                industry_code: $("#industry_code").val(),
                parent_node_id: $('.parent_node_id:checked').serialize(),
                child_node_id: $('.child_node_id:checked').serialize(),
            }

            if ($.trim(requestData.description) === '') {
                $.alert({
                    content: 'Description can not be left blank',
                    columnClass: 'medium',
                    type: 'red'
                });
                return false;
            }

            if ($.trim(requestData.parent_node_id) === '') {
                $.alert({
                    content: 'Please select a sub group',
                    columnClass: 'medium',
                    type: 'red'
                });
                return false;
            }

            $.confirm({
                title: 'Confirm!',
                content: 'Are you sure want to update (Status changes only effect this current node and all child nodes)?',
                columnClass: 'medium',
                type: 'orange',
                typeAnimated: true,
                buttons: {
                    ok: {
                        btnClass: 'btn-green',
                        action: function () {
                            $(".loading_div_2").show();
                            $(".loading_div_1").show();
                            $.ajax({
                                type: 'post',
                                url: '{{ route("admin.update.node") }}',
                                data: requestData,
                                success: function (responseData) {
                                    $(".loading_div_2").hide();
                                    $(".loading_div_1").hide();
                                    $('#myModal').modal('hide');
                                    if (responseData.status === 'success') {
                                        toastr["success"](responseData.msg);

                                        let parentLi = 'parent_li_node_' + requestData.node_type + '_' + requestData.node_id,
                                            $clickedButton = $('#' + parentLi + ' > button'),
                                            $totalNodeCount = $('#total-node-count');

                                        if (parseInt(responseData.updatedNode.status) === 1 && $clickedButton.hasClass('inactive-node')) {
                                            $('#' + parentLi + ' button').removeClass('inactive-node');
                                        } else if (parseInt(responseData.updatedNode.status) === 0 && !$clickedButton.hasClass('inactive-node')) {
                                            $('#' + parentLi + ' button').addClass('inactive-node')
                                        }

                                        let updatedNodeData = responseData.updatedNode.description + " " +
                                            (responseData.updatedNode.cross_indexed == '1' ? '<img src="{{asset('images/cross-index.png')}}" />' : '') + " " +
                                            (responseData.updatedNode.node_warp == '1' ? '<img src="{{asset('images/node-warp.png')}}" />' : '') + " " +
                                            (responseData.updatedNode.note ? '<img src="{{asset('images/note.png')}}" />' : '') +
                                            '<br>' + responseData.updatedNode.code;
                                        $('#node_' + requestData.node_type + '_' + responseData.updatedNode.id).html(updatedNodeData)
                                            .parent().attr('data-original-title', responseData.updatedNode.note);

                                        if (responseData.newChildrenNodes !== undefined) {
                                            let targetNode = '#' + responseData.childNodeContainer + '_' + requestData.node_id;
                                            $.each(responseData.newChildrenNodes, function (i, node) {
                                                $(targetNode).append(insertNode(responseData.childNodeType, node, responseData.childSChildNodeContainer));
                                                if (!$(targetNode).prev().hasClass('collapse-node')) {
                                                    $('<span class="collapse-node" title="collapse/expand node"> <i class="far fa-minus-square"></i></span>').insertBefore(targetNode);
                                                }
                                            });
                                            $totalNodeCount.html(parseInt($totalNodeCount.html()) + responseData.newChildrenNodes.length);
                                            if (responseData.childNodeExists !== undefined) {
                                                $.each(responseData.childNodeExists, function (i, v) {
                                                    toastr["error"](v);
                                                })
                                            }
                                        }

                                        if (responseData.newSiblings !== undefined) {
                                            $.each(responseData.newSiblings, function (i, node) {
                                                let targetNode = '#' + responseData.nodeContainer + '_' + node[responseData.newSiblingsParentField];
                                                console.log(targetNode);
                                                $(targetNode).append(insertNode(requestData.node_type, node, responseData.childNodeContainer));
                                                if (!$(targetNode).prev().hasClass('collapse-node')) {
                                                    $('<span class="collapse-node" title="collapse/expand node"> <i class="far fa-minus-square"></i></span>').insertBefore(targetNode);
                                                }
                                            });
                                            $totalNodeCount.html(parseInt($totalNodeCount.html()) + responseData.newSiblings.length);
                                            if (responseData.nodeExistsInParent !== undefined) {
                                                $.each(responseData.nodeExistsInParent, function (i, v) {
                                                    toastr["error"](v);
                                                })
                                            }
                                        }

                                        //remove delted childs.
                                        if (responseData.deletedChilIds !== undefined) {
                                            $.each(responseData.deletedChildIds, function (i, deletedChidlId) {
                                                $('#parent_li_node_' + responseData.childNodeType + '_' + deletedChidlId).remove();
                                            });
                                            $parentUl = $('#' + nodeContainer + '_' + requestData.node_id);
                                            if ($parentUl.find('li').length === 0 && $parentUl.prev().hasClass('collapse-node')) {
                                                $parentUl.prev().remove();
                                            }
                                            $totalNodeCount.html(parseInt($totalNodeCount.html()) - responseData.deletedChildIds.length);
                                        }

                                        $("[data-toggle = 'tooltip']").tooltip({trigger: "hover"});
                                    } else if (responseData.status === 'error') {
                                        toastr["error"](responseData.msg);
                                    }
                                },
                                error: function () {
                                    toastr.error('There is an error occur');
                                    $(".loading_div_2").hide();
                                    $(".loading_div_1").hide();
                                }
                            });
                        }
                    },
                    cancel: function () {
                    }
                }
            });
        });

        function deleteNode(requestData) {
            $(".loading_div_2").show();
            $(".loading_div_1").show();
            $.ajax({
                type: 'post',
                url: '{{ route("admin.delete.node") }}',
                data: requestData,
                success: function (responseData) {
                    $(".loading_div_2").hide();
                    $(".loading_div_1").hide();
                    $('#myModal').modal('hide');
                    if (responseData.status === 'success') {
                        let targetParent = '#parent_li_node_' + requestData.node_type + '_' + requestData.node_id,
                            totalDeleted = requestData.child_action === 'delete' ? $(targetParent + ' li').length : 0,
                            $totalNodeCount = $('#total-node-count'),
                            $parentUl = $(targetParent).parent('ul');

                        $(targetParent).remove();
                        if ($parentUl.find('li').length === 0 && $parentUl.prev().hasClass('collapse-node')) {
                            $parentUl.prev().remove();
                        }

                        $totalNodeCount.html(parseInt($totalNodeCount.html()) - totalDeleted - 1);

                        if (requestData.child_action === 'move') {
                            movingNode = true;
                            let targetNode = '#' + responseData.targetContainer;
                            $.each(responseData.newChildNodes, function (i, node) {
                                $(targetNode).append(insertNode(responseData.node_type, node, responseData.childNodeContainer));
                                if (!$(targetNode).prev().hasClass('collapse-node')) {
                                    $('<span class="collapse-node" title="collapse/expand node"> <i class="far fa-minus-square"></i></span>').insertBefore(targetNode);
                                }
                            });
                            recursively_ajax(responseData.newChildType, responseData.newChildIds)
                        }

                        toastr.success(responseData.msg);
                    } else if (responseData.status === 'error') {
                        toastr.error(responseData.msg);
                    }
                },
                error: function () {
                    toastr.error('There is an error occur');
                    $(".loading_div_2").hide();
                    $(".loading_div_1").hide();
                }
            });
        }

        $(document).on('click', '#delete-node', function () {
            let requestData = {
                _token: $('input[name=_token]').val(),
                description: $("#description").val(),
                node_type: $("#node_type").val(),
                node_code: $("#node_code").val(),
                total_node: parseInt($("#total-node-count").html()),
                node_id: $("#node_id").val(),
                industry_code: $("#industry_code").val(),
            }
            $.confirm({
                title: 'Confirm!',
                content: 'Deleted node can not be recovered!',
                columnClass: 'medium',
                type: 'red',
                typeAnimated: true,
                buttons: {
                    deleteChild: {
                        text: 'Delete sub nodes',
                        btnClass: 'btn-red',
                        action: function () {
                            requestData.child_action = 'delete';
                            deleteNode(requestData);
                        }
                    },
                    moveChild: {
                        text: 'Move sub-nodes to parent',
                        btnClass: 'btn-red',
                        action: function () {
                            requestData.child_action = 'move';
                            deleteNode(requestData);
                        }
                    },
                    cancel: function () {
                    }
                }
            });
        });

        $(document).on('click', '.duplicate-as-industry-btn', function () {
            let data = {
                _token: $('input[name=_token]').val(),
                description: $("#description").val(),
                note: $("#note").val(),
                node_type: $("#node_type").val(),
                node_id: $("#node_id").val(),
                node_code: $("#node_code").val(),
                industry_code: $("#industry_code").val(),
            }
            $.confirm({
                title: 'Confirm!',
                content: "Are you sure want to duplicate this node as industry?",
                columnClass: 'medium',
                type: 'orange',
                typeAnimated: true,
                buttons: {
                    yes: {
                        btnClass: 'btn-green',
                        action: function () {
                            ajaxPostNoPageRefresh("{{ route("admin.node.duplicate.as.industry") }}", data)
                        }
                    },
                    cancel: function () {
                    }
                }
            });
        });

        $(document).on('click', '.move-node-btn', function () {
            $('#footer_action_button').text("Move");

            // $('#description').prop('disabled', true);
            $('.node-active-inactive-status-label').remove();
            $('#status').remove();
            $('.search-node-container').show();

            $('.modal-title').text("Move node and all subnodes to");
            $('.actionBtn').addClass('move-node').removeClass('update-node');

            $('#multi-sector-list').remove();
            // $('#multi-sub-sector-list').remove();
            $('#node-list-container').remove();
            $('.issuer-lists').remove();
            $('#delete-node').remove();
            $('.move-node-btn').hide();
            $('.cross-index-node-btn').hide();
            $('.node-warp-btn').hide();
            $('.add-issuer-btn').hide();
            $('.duplicate-as-industry-btn').hide();
            $('.copy-child-nodes-btn').hide();
            $('.add-keyword-btn').hide();
            $('.add-negative-keyword-btn').hide();
            $('.form-horizontal').show();
            $('.ajax-search-node').html('');

        });

        $(document).on('click', '.move-node', function () {
            let requestData = {
                _token: $('input[name=_token]').val(),
                description: $("#description").val(),
                node_type: $("#node_type").val(),
                node_code: $("#node_code").val(),
                node_id: $("#node_id").val(),
                industry_code: $("#industry_code").val(),
                search_node: $("#ajax-search-node").val(),
                //search_node: $("#node_tree_search_result").val(), for jqueryUI auto complete
            }

            if ($.trim(requestData.search_node) === '') {
                $.alert({
                    title: 'Warning!',
                    content: 'Please search a target node.',
                    type: 'red'
                });
                return false;
            }

            $.confirm({
                title: 'Confirm!',
                content: "Are you sure want to move this node?",
                columnClass: 'medium',
                type: 'orange',
                typeAnimated: true,
                buttons: {
                    yes: {
                        btnClass: 'btn-green',
                        action: function () {
                            $(".loading_div_2").show();
                            $(".loading_div_1").show();
                            $.ajax({
                                type: 'post',
                                url: '{{ route("admin.node.move") }}',
                                dataType: 'json',
                                data: requestData,
                                success: function (data) {
                                    $(".loading_div_2").hide();
                                    $(".loading_div_1").hide();
                                    $('#myModal').modal('hide');
                                    if (data.status === 'success') {
                                        toastr.success(data.msg);

                                        //Removing current node
                                        let $oldNode = $('#parent_li_node_' + requestData.node_type + '_' + requestData.node_id),
                                            $parentUl = $oldNode.parent('ul');
                                        $oldNode.remove();

                                        if ($parentUl.find('li').length === 0 && $parentUl.prev().hasClass('collapse-node')) {
                                            $parentUl.prev().remove();
                                        }
                                        //adding current node
                                        let $targetNode = $('#' + data.targetNodeContainer)
                                        $targetNode.append(data.nodeHtml);
                                        if (!$targetNode.prev().hasClass('collapse-node')) {
                                            $('<span class="collapse-node" title="collapse/expand node"> <i class="far fa-minus-square"></i></span>').insertBefore($targetNode);
                                        }

                                        totalRequestNodeAjaxCall = 0;
                                        movingNode = true;
                                        recursively_ajax(data.targetNodeType, [parseInt(data.targetNodeId)]);

                                        $("[data-toggle = 'tooltip']").tooltip({trigger: "hover"});
                                    } else if (data.status === 'error') {
                                        toastr.error(data.msg);
                                    }
                                },
                                error: function () {
                                    toastr.error('There is an error occur');
                                    $(".loading_div_2").hide();
                                    $(".loading_div_1").hide();
                                }
                            });
                        }
                    },
                    cancel: function () {
                    }
                }
            });
        });

        /////////////////////////////////////////////
        $(document).on('click', '.copy-child-nodes-btn', function () {
            let data = {
                _token: $('input[name=_token]').val(),
                node_type: $("#node_type").val(),
                node_code: $("#node_code").val(),
                node_id: $("#node_id").val(),
                industry_id: $("#iid").val(),
            }
            $('#myModal .modal-body').html('Loading..');
            $.ajax({
                type: 'get',
                url: '{{route('admin.get.child.node.copy.data')}}',
                data: data,
                success: function (data) {
                    if (data.status === 'success') {
                        $('#myModal .modal-content').html(data.html);
                        initailizeSelect2($('.ajax-search-node'), '{{ route("admin.search.node.tree") }}', 'copy');
                    } else {
                        toastr.error(data.msg);
                    }
                }
            });
        });

        $(document).on('click', '.copy-child-node', function () {
            let data = {
                _token: $('input[name=_token]').val(),
                node_type: $("#node_type").val(),
                node_code: $("#node_code").val(),
                node_id: $("#node_id").val(),
                industry_code: $("#industry_code").val(),
                search_node: $("#ajax-search-node").val(),
                child_node_id: $('.child_node_id:checked').serialize(),
            }

            if ($.trim(data.search_node) === '') {
                $.alert('Please search a target node.');
                return false;
            }

            if ($.trim(data.child_node_id) === '') {
                $.alert('Please select a child node');
                return false;
            }

            $.confirm({
                title: 'Confirm!',
                content: "Are you sure want to copy child node(s)?",
                columnClass: 'medium',
                type: 'orange',
                typeAnimated: true,
                buttons: {
                    yes: {
                        btnClass: 'btn-green',
                        action: function () {
                            $(".loading_div_2").show();
                            $(".loading_div_1").show();
                            $.ajax({
                                type: 'post',
                                url: '{{ route("admin.child.node.copy") }}',
                                data: data,
                                success: function (responseData) {
                                    $(".loading_div_2").hide();
                                    $(".loading_div_1").hide();
                                    $('#myModal').modal('hide');
                                    if (responseData.status === 'success') {
                                        toastr.success(responseData.msg);

                                        movingNode = false;
                                        let targetNode = '#' + responseData.targetContainer;
                                        $.each(responseData.newChildNodes, function (i, node) {
                                            $(targetNode).append(insertNode(responseData.node_type, node, responseData.childNodeContainer));
                                            if (!$(targetNode).prev().hasClass('collapse-node')) {
                                                $('<span class="collapse-node" title="collapse/expand node"> <i class="far fa-minus-square"></i></span>').insertBefore(targetNode);
                                            }
                                        });

                                        console.log(responseData.newChildNodes.length);
                                        let totalAdded = responseData.newChildNodes.length,
                                            $totalNodeCount = $('#total-node-count');
                                        $totalNodeCount.html(parseInt($totalNodeCount.html()) + totalAdded);

                                        recursively_ajax(responseData.newChildType, responseData.newChildIds);

                                        $("[data-toggle = 'tooltip']").tooltip({trigger: "hover"});
                                    } else if (responseData.status === 'error') {
                                        toastr.error(responseData.msg);
                                    }
                                },
                                error: function () {
                                    toastr.error('There is an error occur');
                                    $(".loading_div_2").hide();
                                    $(".loading_div_1").hide();
                                }
                            });
                        }
                    },
                    cancel: function () {
                    }
                }
            })
        });

        $(document).on('click', '.cross-index-node-btn', function () {
            $('#footer_action_button').text("Save");

            $('#description').prop('disabled', true);
            $('.node-active-inactive-status-label').remove();
            $('#status').remove();
            $('.search-cross-node-container').show();

            $('.modal-title').text("Add Cross Index With this Node");
            $('.actionBtn').addClass('save-cross-index').removeClass('update-node');

            $('#multi-sector-list').remove();
            $('#node-note-container').remove();
            // $('.description-input-section').remove();
            // $('#multi-sub-sector-list').remove();
            $('#node-list-container').remove();
            $('.issuer-lists').remove();
            $('#delete-node').remove();
            $('.move-node-btn').hide();
            $('.cross-index-node-btn').hide();
            $('.node-warp-btn').hide();
            $('.add-issuer-btn').hide();
            $('.duplicate-as-industry-btn').hide();
            $('.copy-child-nodes-btn').hide();
            $('.add-keyword-btn').hide();
            $('.add-negative-keyword-btn').hide();
            $('.form-horizontal').show();

            initailizeSelect2($('.ajax-search-cross-node'), '{{ route("admin.search.node.tree") }}', 'all');

            $('.ajax-search-cross-node').html('');
            $.ajax({
                type: 'get',
                url: '{{route('admin.get.cross.list.data')}}',
                data: {
                    node_type: $("#node_type").val(),
                    node_id: $('#node_id').val(),
                    node_code: $("#node_code").val()
                },
                success: function (data) {
                    if (data.status === 'success') {
                        $('.cross-index-lists').html(data.html);
                    } else {
                        toastr.error(data.msg);
                    }
                }
            });

        });
        $(document).on('click', '.save-cross-index', function () {
            let data = {
                _token: $('input[name=_token]').val(),
                description: $("#description").val(),
                node_type: $("#node_type").val(),
                node_code: $("#node_code").val(),
                node_id: $("#node_id").val(),
                industry_code: $("#industry_code").val(),
                search_node: $("#ajax-search-cross-node").val(),
            }

            if ($.trim(data.search_node) === '') {
                $.alert('Please search and select a target node.');
                return false;
            }

            $.confirm({
                title: 'Confirm!',
                content: "Are you sure want to add this node as cross indexed?",
                columnClass: 'medium',
                type: 'orange',
                typeAnimated: true,
                buttons: {
                    yes: {
                        btnClass: 'btn-green',
                        action: function () {
                            ajaxPost("{{ route("admin.node.crossindex") }}", data);
                        }
                    },
                    cancel: function () {
                    }
                }
            });

        });
        $(document).on('click', '#delete-cross-index', function () {
            let data = {
                _token: $('input[name=_token]').val(),
                deleteId: $(this).data('crossid'),
                node_type: $('#node_type').val()
            }
            $.confirm({
                title: 'Confirm!',
                content: "Are you sure want to delete this cross index?",
                columnClass: 'medium',
                type: 'orange',
                typeAnimated: true,
                buttons: {
                    yes: {
                        btnClass: 'btn-green',
                        action: function () {
                            ajaxPost("{{ route("admin.delete.cross.index") }}", data);
                        }
                    },
                    cancel: function () {
                    }
                }
            });
        });
        $(document).on('click', '.node-warp-btn', function () {
            $('#footer_action_button').text("Save");

            $('#description').prop('disabled', true);
            $('.node-active-inactive-status-label').remove();
            $('#status').remove();
            $('.search-node-warp-container').show();

            $('.modal-title').text("Add Warp With this Node");
            $('.actionBtn').addClass('save-node-warp').removeClass('update-node');

            $('#multi-sector-list').remove();
            $('#node-note-container').remove();
            // $('.description-input-section').remove();
            // $('#multi-sub-sector-list').remove();
            $('#node-list-container').remove();
            $('.issuer-lists').remove();
            $('#delete-node').remove();
            $('.move-node-btn').hide();
            $('.cross-index-node-btn').hide();
            $('.node-warp-btn').hide();
            $('.add-issuer-btn').hide();
            $('.duplicate-as-industry-btn').hide();
            $('.copy-child-nodes-btn').hide();
            $('.add-keyword-btn').hide();
            $('.add-negative-keyword-btn').hide();
            $('.form-horizontal').show();

            initailizeSelect2($('.ajax-search-warp-node'), '{{ route("admin.search.node.tree") }}', 'all');

            $('.ajax-search-warp-node').html('');
            $.ajax({
                type: 'get',
                url: '{{route('admin.get.node.warp.list.data')}}',
                data: {
                    node_type: $("#node_type").val(),
                    node_id: $('#node_id').val(),
                    node_code: $("#node_code").val()
                },
                success: function (data) {
                    if (data.status === 'success') {
                        $('.node-warp-lists').html(data.html);
                    } else {
                        toastr.error(data.msg);
                    }
                }
            });

        });
        $(document).on('click', '.save-node-warp', function () {
            let data = {
                _token: $('input[name=_token]').val(),
                description: $("#description").val(),
                node_type: $("#node_type").val(),
                node_code: $("#node_code").val(),
                node_id: $("#node_id").val(),
                industry_code: $("#industry_code").val(),
                search_node: $("#ajax-search-warp-node").val(),
            }

            if ($.trim(data.search_node) === '') {
                $.alert('Please search and select a target node.');
                return false;
            }

            $.confirm({
                title: 'Confirm!',
                content: "Are you sure want to add this node as warp?",
                columnClass: 'medium',
                type: 'orange',
                typeAnimated: true,
                buttons: {
                    yes: {
                        btnClass: 'btn-green',
                        action: function () {
                            ajaxPost("{{ route("admin.node.nodewarp") }}", data);
                        }
                    },
                    cancel: function () {
                    }
                }
            });

        });
        $(document).on('click', '#delete-node-warp', function () {
            let data = {
                _token: $('input[name=_token]').val(),
                deleteId: $(this).data('warpid'),
                node_type: $('#node_type').val()
            }
            $.confirm({
                title: 'Confirm!',
                content: "Are you sure want to delete this node warp?",
                columnClass: 'medium',
                type: 'orange',
                typeAnimated: true,
                buttons: {
                    yes: {
                        btnClass: 'btn-green',
                        action: function () {
                            ajaxPost("{{ route("admin.delete.node.warp") }}", data);
                        }
                    },
                    cancel: function () {
                    }
                }
            });
        });
        $(document).on('click', '.add-issuer-btn', function () {
            $('#footer_action_button').text("Save");

            $('.node-active-inactive-status-label').remove();
            $('#status').remove();
            $('.add-issuer-container').show();

            $('.modal-title').text("Add Issuer Information");
            $('.actionBtn').addClass('save-issuer').removeClass('update-node');

            $('#multi-sector-list').remove();
            $('#node-note-container').remove();
            $('.description-input-section').remove();
            // $('#multi-sub-sector-list').remove();
            $('#node-list-container').remove();
            $('.issuer-lists').remove();
            $('#delete-node').remove();
            $('.move-node-btn').hide();
            $('.cross-index-node-btn').hide();
            $('.node-warp-btn').hide();
            $('.add-issuer-btn').hide();
            $('.duplicate-as-industry-btn').hide();
            $('.copy-child-nodes-btn').hide();
            $('.add-keyword-btn').hide();
            $('.add-negative-keyword-btn').hide();
            $('.form-horizontal').show();
            $('#state').select2();
        });
        $(document).on('click', '.save-issuer', function () {
            let data = {
                _token: $('input[name=_token]').val(),
                node_type: $("#node_type").val(),
                //node_code: $("#node_code").val(),
                node_id: $("#node_id").val(),
                industry_code: $("#industry_code").val(),
                company_name: $("#companyName").val(),
                street_address: $("#streetAddress").val(),
                city: $("#city").val(),
                state_id: $("#state").val(),
                zip: $("#zip").val(),
                country_id: 1, /*Default US for now which table id is 1*/
            }

            if ($.trim(data.company_name) === '') {
                $.alert('Company Name is required.');
                return false;
            }

            $.confirm({
                title: 'Confirm!',
                content: "Are you sure want to add this issuer information?",
                columnClass: 'medium',
                type: 'orange',
                typeAnimated: true,
                buttons: {
                    yes: {
                        btnClass: 'btn-green',
                        action: function () {
                            ajaxPost("{{ route("admin.node.issuer") }}", data);
                        }
                    },
                    cancel: function () {
                    }
                }
            });

        });
        $(document).on('click', '#delete-issuer', function () {
            let data = {
                _token: $('input[name=_token]').val(),
                node_type: $("#node_type").val(),
                node_id: $("#node_id").val(),
                deleteId: $(this).data('lookid'),
            }
            $.confirm({
                title: 'Confirm!',
                content: "Are you sure want to delete this issuer?",
                columnClass: 'medium',
                type: 'orange',
                typeAnimated: true,
                buttons: {
                    yes: {
                        btnClass: 'btn-green',
                        action: function () {
                            ajaxPost("{{ route("admin.delete.node.issuer") }}", data);
                        }
                    },
                    cancel: function () {
                    }
                }
            });
        });

        @endif

        function initailizeSelect2(selectElementObj, url, searchType) {
            $(selectElementObj).select2({
                minimumInputLength: 2,
                minimumResultsForSearch: 10,
                ajax: {
                    url: url,
                    dataType: 'json',
                    data: function (params) {
                        let queryParameters = {
                            term: params.term,
                            // description: $("#description").val(),
                            node_type: $("#node_type").val(),
                            node_code: $("#node_code").val(),
                            industry_code: $("#industry_code").val(),
                            search_type: searchType
                        }
                        return queryParameters;
                    },
                    processResults: function (data) {
                        return {
                            results: $.map(data, function (item) {
                                return {
                                    text: item.itemName,
                                    id: item.id
                                }
                            })
                        };
                    }
                }
            });
        }

        function initailizeCrossSelect2(selectElementObj) {
            $('#ajax-search-cross-node').select2({
                minimumInputLength: 2,
                minimumResultsForSearch: 10,
                ajax: {
                    url: '{{ route("admin.all.cross.node.category") }}',
                    dataType: 'json',
                    data: function (params) {
                        let queryParameters = {
                            term: params.term,
                            // description: $("#description").val(),
                            node_type: $("#node_type").val(),
                            node_code: $("#node_code").val(),
                            //industry_code: $("#industry_code").val(),
                        }
                        return queryParameters;
                    },
                    processResults: function (data) {
                        return {
                            results: $.map(data, function (item) {
                                return {
                                    text: item.itemName,
                                    id: item.id
                                }
                            })
                        };
                    }
                }
            });
        }

        $(document).on('click', '#manual-industry-snapshot', function () {
            let data = {
                _token: $('input[name=_token]').val(),
                industry_id: $(this).data('industry-id'),
            }

            if (!confirm("Are you sure want to take snapshot this node?")) {
                return false;
            }
            ajaxPostNoPageRefresh("{{ route("admin.manual.snapshot") }}", data)
        });

        $('#manual-industry-snapshot-restore').on("click", function () {
            $('#myModal2 .modal-body').html('Loading...');
            $('#myModal2 .modal-title').text('Restore node data');
            $.ajax({
                type: 'get',
                url: '{{route("admin.get.manual.snapshot")}}/?industry_id=' + $(this).data('industry-id'),
                success: function (res) {
                    $('#myModal2 .modal-body').html(res);
                }
            });
            $('#myModal2').modal('show');
        });

        $(document).on('click', '.restore-manual-node-data', function () {

            if (!confirm("Are you sure want restore this snapshot?")) {
                return false;
            }
            let data = {
                _token: $('input[name=_token]').val(),
                backup_id: $(this).data('id'),
            }

            ajaxPostWithPageRefresh("{{ route("admin.restore.manual.snapshot") }}", data)

            $('#myModal2').modal('hide');
        });

        $(document).on('click', '.delete-manual-node-data', function () {

            if (!confirm("Are you sure want delete this snapshot?")) {
                return false;
            }
            let data = {
                _token: $('input[name=_token]').val(),
                backup_id: $(this).data('id'),
            }
            ajaxPostNoPageRefresh("{{ route("admin.delete.manual.snapshot") }}", data)
        });

        function checkAllNodeList(row, className) {
            if (row.checked) {
                $("." + className).each(function () {
                    this.checked = true;
                });
            } else {
                $("." + className).each(function () {
                    this.checked = false;
                });
            }
        }

        function generateCreateModal(row) {
            let id = $(row).data('id'),
                industry_id = $(row).data('iid'),
                node_type = $(row).data('type'),
                action = $(row).data('action');
            $('#myModal .modal-content').html('Loading..');
            $.ajax({
                type: 'get',
                url: '{{route('admin.get.node.edit.data')}}',
                data: {id: id, node_type: node_type, industry_id: industry_id, action: action},
                success: function (data) {
                    if (data.status === 'success') {
                        $('#myModal .modal-content').html(data.html);
                        $('#myModal').modal('show');
                    } else {
                        toastr.error(data.msg);
                    }
                },
                error: function (xhr, status, err) {
                    if (xhr.status == 401) {
                        window.location.href = '{{ route("admin.login") }}';
                    } else {
                        toastr.error('There is an error occur');
                        $(".loading_div_2").hide();
                        $(".loading_div_1").hide();
                    }
                }
            });
        }

        function ajaxPostNoPageRefresh(url, postData) {
            $(".loading_div_2").show();
            $(".loading_div_1").show();
            $.ajax({
                type: 'post',
                url: url,
                data: postData,
                success: function (data) {
                    $('#myModal').modal('hide');
                    $(".loading_div_2").hide();
                    $(".loading_div_1").hide();
                    if (data.status === 'success') {
                        toastr.success(data.msg);
                    } else if (data.status === 'error') {
                        toastr.error(data.msg);
                    }
                },
                error: function () {
                    toastr.error('There is an error occur');
                    $(".loading_div_2").hide();
                    $(".loading_div_1").hide();
                }
            });
            $('#myModal2').modal('hide');
        }

        function ajaxPostWithPageRefresh(url, postData) {
            $(".loading_div_2").show();
            $(".loading_div_1").show();
            $.ajax({
                type: 'post',
                url: url,
                data: postData,
                success: function (data) {
                    $('#myModal').modal('hide');
                    $(".loading_div_2").hide();
                    $(".loading_div_1").hide();
                    if (data.status === 'success') {
                        toastr.success(data.msg);
                        location.reload();
                    } else if (data.status === 'error') {
                        toastr.error(data.msg);
                    }
                },
                error: function () {
                    toastr.error('There is an error occur');
                    $(".loading_div_2").hide();
                    $(".loading_div_1").hide();
                }
            });
            $('#myModal2').modal('hide');
        }

        let ajaxFunc = function () {
            $.ajax({
                type: 'get',
                data: {'industry_id': '{{$industry->id}}'},
                url: '/admin/time-spent-on-node',
            });
        };

        let intervalState = setInterval(ajaxFunc, 20000);

        function setStateName(id) {
            $('#state_edit_value_' + id).val($("#state_edit_" + id + " option:selected").text());
        }

        function edit_enable(id) {
            $('#edit_issuer_' + id).replaceWith('<a class="btn btn-warning btn-xs" id="editIssuerLink' + id + '" onclick="save_edited(' + id + ')" ><i class="far fa-save"></i></a>');
            $('.issuer_field_' + id).toggleClass('d-none').next().hide();
            return false;
        }

        function save_edited(id) {
            var data = {
                _token: $('input[name=_token]').val(),
                id: id,
                company: $('#company_edit_' + id).val(),
                street_address: $('#street_address_edit_' + id).val(),
                city: $('#city_edit_' + id).val(),
                state_id: $('#state_edit_' + id).val(),
                zip: $('#zip_edit_' + id).val(),
            };
            if ($.trim(data.company) === '') {
                $.alert('Company Name is required.');
                return false;
            }
            ajaxReq = $.ajax({
                type: 'POST',
                url: '{{route("admin.update.node.issuer")}}',
                data: data,
                success: function (response) {
                    if (response.status === 'success') {
                        toastr.success(response.msg);
                        $('#editIssuerLink' + id).replaceWith('<a class="btn btn-primary btn-xs" href="javascript:void(0)" id="edit_issuer_' + id + '" onclick="return edit_enable(\'' + id + '\')"><i class="fas fa-edit"></i></a>');
                        $('#company_edit_' + id).toggleClass('d-none').next().html($('#company_edit_' + id).val()).show();
                        $('#street_address_edit_' + id).toggleClass('d-none').next().html($('#street_address_edit_' + id).val()).show();
                        $('#city_edit_' + id).toggleClass('d-none').next().html($('#city_edit_' + id).val()).show();
                        $('#state_edit_' + id).toggleClass('d-none').next().html($('#state_edit_value_' + id).val()).show();
                        $('#zip_edit_' + id).toggleClass('d-none').next().html($('#zip_edit_' + id).val()).show();
                    } else if (response.status === 'error') {
                        toastr.error(response.msg);
                    }
                },
                error: function () {
                    toastr.error('There is an error occur');
                }
            });
            return false;
        }

        function ESCclose(evt) {
            if (evt.keyCode == 27) {
                $('#myModal').modal('hide');
                $('#myModal2').modal('hide');
                $('#key-word-add-modal').modal('hide');
            }
        }

        /*Keyword/Negative keyword related work*/
        $(document).on('click', '.top-industry-node', function () {
            $('#add-iw-keyword-btn-container').show();
            $('#add-iw-keyword-container').hide();
            $('#add-iw-keyword-save-btn-container').hide();
            $('#keyword_type').val('');
            $('#keyword').val('');
            $('#keywordModalTitle').html('Add Industry-Wide Keyword/Negative keyword');
            $('#key-word-add-modal').modal({
                backdrop: 'static',
                keyboard: false
            });
        });
        $(document).on('click', '#keyword-save-btn', function () {
            var nodeIdForKeyword = $("#node_id_for_keyword").val();
            let data = {
                _token: $('input[name=_token]').val(),
                industry_id_for_keyword: $("#industry_id_for_keyword").val(),
                node_id_for_keyword: nodeIdForKeyword,
                node_type_for_keyword: $("#node_type_for_keyword").val(),
                node_code_for_keyword: $("#node_code_for_keyword").val(),
                keyword_type: $("#keyword_type").val(),
                keyword: $("#keyword").val(),
            }

            if (data.keyword_type == '1' && $.trim(data.keyword) === '') {
                $.alert('Keyword is required.');
                return false;
            }
            if (data.keyword_type == '2' && $.trim(data.keyword) === '') {
                $.alert('Negative keyword is required.');
                return false;
            }
            if (nodeIdForKeyword != '') {
                saveKeywordOrNegativeKeword(data);
            } else {
                $.confirm({
                    title: 'Confirm!',
                    content: "Are you sure want to add this information?",
                    columnClass: 'medium',
                    type: 'orange',
                    typeAnimated: true,
                    buttons: {
                        yes: {
                            btnClass: 'btn-green',
                            action: function () {
                                saveKeywordOrNegativeKeword(data);
                            }
                        },
                        cancel: function () {
                        }
                    }
                });
            }
        });

        function saveKeywordOrNegativeKeword(data) {
            $(".loading_div_2").show();
            $(".loading_div_1").show();
            $.ajax({
                type: 'post',
                url: '{{ route("admin.create.node.keyword") }}',
                data: data,
                success: function (responseData) {
                    $(".loading_div_2").hide();
                    $(".loading_div_1").hide();
                    $('#node_id_for_keyword').val("");
                    $('#node_code_for_keyword').val("");
                    $('#node_type_for_keyword').val("");
                    $('#myModal').modal('hide');
                    if (responseData.status === 'success') {
                        toastr.success(responseData.msg);
                        $('#keyword').val("");
                    } else if (responseData.status === 'error') {
                        toastr.error(responseData.msg);
                    }
                    $('#key-word-add-modal').modal('hide');
                },
                error: function () {
                    toastr.error('There is an error occur');
                    $(".loading_div_2").hide();
                    $(".loading_div_1").hide();
                }
            });
        }

        function getKeywordOrNegativeKeword() {
            var industry_id = $("#industry_id_for_keyword").val();
            var node_id = $("#node_id_for_keyword").val();
            var keyword_type = $("#keyword_type").val();
            $.ajax({
                type: 'get',
                url: '{{ route("admin.get.node.keyword") }}',
                data: {
                    'industry_id': industry_id,
                    'node_id': node_id,
                    'keyword_type':keyword_type
                },
                success: function (responseData) {
                    var mytagsinput = $('#keyword');
                    mytagsinput.tagsinput('removeAll');
                    if (responseData.status === 'success') {
                        var result = responseData.result;
                        result.forEach(function (item) {
                            mytagsinput.tagsinput('add', item.get_keyword.name);
                        });

                    } else if (responseData.status === 'error') {
                    }

                },
                error: function () {

                }
            });
        }

        function deleteKeyword(keyword,node_id,keyword_type){
            $.ajax({
                type: 'post',
                url: '{{ route("admin.delete.node.keyword") }}',
                data: {
                    /* '_method': 'delete',*/
                    '_token': "{{ csrf_token() }}",
                    'node_id': node_id,
                    'industry_id': $('#industry_id_for_keyword').val(),
                    'keyword': keyword,
                    'keyword_type': keyword_type,
                },
                success: function (responseData) {
                    if (responseData.status === 'success') {
                        toastr.success(responseData.msg);
                    } else if (responseData.status === 'error') {
                      //  toastr.error(responseData.msg);
                    }
                },
                error: function () {
                    toastr.error('There is an error occur');
                }
            });
        }



        /*end Keyword/Negative keyword related work*/
        function showNodeAddModal(type) {
            $('#myModal').modal('hide');
            $('#keyword').val('');
            $('#keywordModalTitle').html('Add Node Keyword/Negative keyword');
            $('#key-word-add-modal').modal({
                backdrop: 'static',
                keyboard: false
            });
            $('#add-iw-keyword-btn-container').hide();
            $('#keywordModalBack').hide();
            $('#keywordModalClose').show();
            $('#add-iw-keyword-container').show();
            $('#add-iw-keyword-save-btn-container').show();
            $('#node_id_for_keyword').val($('#node_id').val());
            $('#node_code_for_keyword').val($('#node_code').val());
            $('#node_type_for_keyword').val($('#node_type').val());
            if (type == 1) {
                $('#keyword_type').val('1');
                $('#keyword-label').html('Keyword');
            } else {
                $('#keyword_type').val('2');
                $('#keyword-label').html('Negative Keyword');
            }
        }
        $(document).on('click', '.industry-all-node-counter-btn', function () {
            let industry_id = $(this).data('id');
            $(".loading_div_2").show();
            $(".loading_div_1").show();
            $('#myModal').modal('hide');
            $('#nodeCounterModal .modal-body').html('Loading..');
            $.ajax({
                type: 'get',
                url: '{{route('admin.get.allnode.counter.data')}}',
                data: {industry_id: industry_id},
                success: function (data) {
                    if (data.status === 'success') {
                        $('#nodeCounterModal .modal-body').html(data.html);
                        $('#nodeCounterModal').modal({
                            backdrop: false,
                            keyboard: false
                        });
                        $(".loading_div_2").hide();
                        $(".loading_div_1").hide();
                    } else {
                        toastr.error(data.msg);
                        $('#nodeCounterModal').modal('hide');
                    }
                },
                error: function (xhr, status, err) {
                    if (xhr.status == 401) {
                        window.location.href = '{{ route("admin.login") }}';
                    } else {
                        toastr.error('There is an error occur');
                        $(".loading_div_2").hide();
                        $(".loading_div_1").hide();
                    }
                }
            });
        });
    </script>
@append
