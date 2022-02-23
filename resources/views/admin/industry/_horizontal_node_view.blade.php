@section('styles')
    <link rel="stylesheet" href="{{asset('css/horizontal-node-tree.css')}}">
@append

<div id="horizontal-tree-container" class="tree-node-container pb-5">
    <div class="tree" id="tree">
        <ul class="pl-0">
            <li class="industry pt-2 pb-2" style="background: linear-gradient(to bottom, '' );">
                <button
                    class="top-industry-node"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="{{$industry->note}}">
                    <span id="node_industry_{{$industry->id}}">{{$industry->description}}
                        @if($industry->note)<img src="{{asset('images/note.png')}}"/>@endif
                        @if($industry->node_warp)<img src="{{asset('images/node-warp.png')}}"/>@endif
                    <br/>({{$industry->code}})
                    </span>
                </button>
                <span id="sector-content-loader"></span>
                <ul id="sector_node_container_{{$industry->id}}"></ul>
            </li>
        </ul>
    </div>
</div>

@section('scripts')
    <script>
        var totalWidth = 100;
        const nodeWidth = 23;

        @if(request()->hp)
        $('.tree-node-container').scrollLeft({{request()->hp}});
        @endif

        @if(request()->vp)
        $('.tree-node-container').scrollTop({{request()->vp}});

        @endif

        function refreshPage() {
            var horizontalPosition = $('.tree-node-container').scrollLeft();
            var verticalPosition = $('.tree-node-container').scrollTop();
            var url = '{{request()->url()}}' + '{{(request()->view == 'h')? "?view=h": "?view=v"}}';
            if (url.indexOf('?') > -1) {
                url += '&hp=' + horizontalPosition
                url += '&vp=' + verticalPosition
            } else {
                url += '?hp=' + horizontalPosition
                url += '&vp=' + verticalPosition
            }
            window.location.href = url;
        }

        function getNodeRelatedDataAjax() {
            $.ajax({
                type: 'get',
                url: '{{route('admin.get.node.related.data')}}',
                data: {industry_id: '{{$industry->id}}'},
                success: function (data) {
                    if (data.status == 'success') {
                        $('#horizontal-tree-container li.industry').css({'background': 'linear-gradient(to bottom, ' + data.nodeBackground + ')'})

                        totalWidth = data.totalNodeCount * nodeWidth;
                        if (totalWidth < 100) {
                            totalWidth = 100;
                        } else {
                            $('#horizontal-tree-container').css({'overflow': 'auto', 'maxHeight': "59vh"})
                        }
                        $('#tree').css('width', totalWidth + "%")
                    }
                }
            });
        }

        $('body').on('click', '.search-element-list', function (event) {

            let hashval = this.getAttribute('href')
            let target = document.querySelector(hashval);
            $('span.span-node').removeClass('highlight');
            $(target).addClass('highlight');

            var offset = $(target).offset();

            $('.collapse-node').next().show();
            $('#search').val('');

            target.scrollIntoView({
                behavior: 'smooth'
            })
            history.pushState(null, null, hashval)
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
                }
                // select: function (event, ui) {
                //     $(this).val(ui.item.value);
                //     let $target = $('#node_' + ui.item.node_type + '_' + ui.item.id)
                //     $('html').animate({
                //         scrollTop: $target.offset().top - 205
                //     }, 500);
                //     $('span.span-node').removeClass('highlight');
                //     $target.addClass('highlight');
                //
                //     //$target.parent().next().click();
                //     return false;
                // }
            }).autocomplete("instance")._renderItem = function (ul, item) {
                return $("<li>")
                    .append("<div><a href='#node_" + item.node_type + '_' + item.id + "' class='search-element-list'>" + item.description + " (" + item.code + ")</a></div>")
                    .appendTo(ul);
            };
        });
    </script>
@append
