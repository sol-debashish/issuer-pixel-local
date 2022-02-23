<li class="parent_li {{$type}}" id="parent_li_node_{{$type}}_{{$item->id}}">
    @include('partials._node_view_list', ['type' => $type, 'item' => $item, 'childNodeExists' => 0])
    <ul id="{{$childNodeContainer}}"></ul>
</li>

