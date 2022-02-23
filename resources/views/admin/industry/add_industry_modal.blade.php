<div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                {{--<h4 class="modal-title"></h4>--}}
            </div>
            <div class="modal-body">
                <form class="form-horizontal" role="form">
                    <div class="form-group">
                        <label class="required" for="description">Description</label>
                        <input class="form-control" type="text" name="description" id="description" required>
                    </div>
                    <div class="form-group">
                        <label class="required" for="description">Note</label>
                        <textarea  class="form-control" name="note" id="note"></textarea>
                    </div>
                </form>
                <div class="deleteContent">
                    Are you Sure you want to delete ?
                </div>
                <div class="modal-footer">
                    <input type="hidden" class="did" name="did" value="">
                    <input type="hidden" id="industry_publish_status"  name="industry_publish_status" value="">
                    <button type="button" class="btn actionBtn" data-dismiss="modal">
                        <span id="footer_action_button" class='glyphicon'> </span>
                    </button>
                    <button type="button" class="btn btn-warning" data-dismiss="modal">
                        <span class='glyphicon glyphicon-remove'></span> Close
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
