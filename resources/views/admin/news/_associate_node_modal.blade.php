<div id="associateNodeModal" class="modal fade" role="dialog" tabindex="-1">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Associate node with this news</h4>
                <button type="button" class="close modal-close" data-dismiss="modal">&times;</button>
            </div>
            <div class="modal-body">
                <form class="form-horizontal" role="form">
                    <div class="form-group">
                        <label class="required" for="title">News Title</label>
                        <input class="form-control" type="text" name="title" value="" id="title" readonly="">
                    </div>

                    {{--Search Node section--}}
                    <div class="form-group search-cross-node-container">
                        <label class="required" for="search-cross-node">Search Node</label><br/>
                        <select id="ajax-search-cross-node" class="ajax-search-cross-node form-control"></select>
                    </div>

                    {{--All Button section--}}
                    <div class="modal-footer justify-content-center">
                        <button type="button" class="btn actionBtn btn-sm btn-success save-cross-index">
                            <span id="footer_action_button" class='glyphicon'>Save</span>
                        </button>
                        <button type="button" class="btn btn-warning btn-sm modal-close" data-dismiss="modal">
                            <span class='glyphicon glyphicon-remove'></span> Close
                        </button>
                    </div>

                    <input type="hidden" name="newsId" id="newsId" value="">
                </form>
            </div>
        </div>
    </div>
</div>
