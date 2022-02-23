<div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog modal-lg admin-node-modal">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title"></h4>
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

                    <div class="form-group search-node-container" style="display: none;">
                        <label class="required" for="search-node">Search Node</label><br />
                        <select id="ajax-search-node" class="ajax-search-node form-control"></select>
                    </div>
                </form>
                <div class="deleteContent">
                    Are you Sure you want to delete <span class="title"></span> ?
                    <span class="hidden id"></span>
                </div>
                <div class="modal-footer">
                    <input type="hidden" id="iid" name="iid" value="">

                    <button type="button" class="btn btn-default btn-sm move-node-btn">
                        Move
                    </button>
                    <button type="button" class="btn btn-info  btn-sm duplicate-as-industry-btn">
                        Duplicate as Industry
                    </button>

                    <button type="button" class="btn actionBtn btn-sm">
                        <span id="footer_action_button" class='glyphicon'> </span>
                    </button>
                    <button type="button" class="btn btn-warning btn-sm modal-close">
                        <span class='glyphicon glyphicon-remove'></span> Close
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .modal {
        pointer-events: none;
    }

    .modal-backdrop {
        display:none;
    }

    .modal-open {
        overflow-y: auto;
    }
</style>