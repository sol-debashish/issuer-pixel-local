@foreach($itemList as $item)
    <li class="parent_li {{$itemClass}}" id="parent_li_node_{{$itemClass}}_{{$item->id}}">
        @include('partials._node_view_list', ['type' => $type, 'item' => $item])
        <ul id="{{$childNodeContainer}}_{{$item->id}}"></ul>
    </li>
@endforeach
