@section('styles')
    <link rel="stylesheet" href="{{asset('css/vertical-node-tree.css')}}">
@append

<div id="tree" class="tree tree-node-container">
    <ul id="contentArea">
        <li class="industry vertical-node-tree">
            <button
                class="top-industry-node"
               data-toggle="tooltip"
               data-placement = "right"
               title="{{$industry->note}}">
                <span id="node_industry_{{$industry->id}}">{{$industry->description}}
                @if($industry->note)<img src="{{asset('images/note.png')}}" />@endif
                @if($industry->node_warp)<img src="{{asset('images/node-warp.png')}}" />@endif
                <br />({{$industry->code}})
                </span>
            </button>
                <span id="sector-content-loader"></span>
                <ul id="sector_node_container_{{$industry->id}}"></ul>
        </li>
    </ul>
</div>

@section('scripts')
    <script>
        function getNodeRelatedDataAjax() {
        }
        function refreshPage() {
            var horizontalPosition = $(document).scrollLeft();
            var verticalPosition = $(document).scrollTop();
            var url = '{{request()->url()}}'+ '{{(request()->view == 'h')? "?view=h": "?view=v"}}';
            if (url.indexOf('?') > -1){
                url += '&hp='+ horizontalPosition
                url += '&vp='+ verticalPosition
            }else{
                url += '?hp='+ horizontalPosition
                url += '&vp='+ verticalPosition
            }
            window.location.href = url;
        }
        $('body').on('click', '.search-element-list', function(event) {

            // let hashval = this.getAttribute('href')
            let target = $('#'+$(this).data('id'));
            $('span.span-node').removeClass('highlight');
            $(target).addClass('highlight');

            var offset = $(target).offset();
            console.log(offset);

            $('.collapse-node').next().show();
            $('#searchElement').html('');
            $('#search').text('');

            $("html, body").animate({ scrollTop: offset.top - 200}, 500);
            event.preventDefault()
        });

        $(document).ready(function () {
            $('#search').autocomplete({
                minLength: 2,
                source: function (request, response) {
                    var results = $.ui.autocomplete.filter(nodeTreeSearchData, request.term);
                    response(results.slice(0, 50));
                },
                focus: function (event, ui) {
                    // $(this).val(ui.item.label);
                    return false;
                },
                select: function (event, ui) {
                    $(this).val(ui.item.value);
                    let $target = $('#node_' + ui.item.node_type + '_' + ui.item.id)
                    $('html').animate({
                        scrollTop: $target.offset().top - 205
                    }, 500);
                    $('span.span-node').removeClass('highlight');
                    $target.addClass('highlight');

                    //$target.parent().next().click();
                    return false;
                }
            }).autocomplete("instance")._renderItem = function (ul, item) {
                return $("<li>")
                    .append("<div>" + item.description + " (" + item.code + ")</div>")
                    .appendTo(ul);
            };
        });
    </script>
@append
