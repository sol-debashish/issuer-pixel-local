<button
   data-toggle="tooltip"
   data-placement = "right"
   title="{{$item->note}}"
   class="node-edit {{$item->status == 0 ? 'inactive-node':''}}"
   data-id="{{$item->id}}"
   data-type="{{$type}}"
   data-iid="{{substr($item->code, 0, 2)}}">
    <span class="span-node" id="node_{{$type}}_{{$item->id}}">{{$item->description}}
        @if($item->cross_indexed == 1)<img src="{{asset('images/cross-index.png')}}" />@endif
        @if($item->node_warp == 1)<img src="{{asset('images/node-warp.png')}}" />@endif
        @if($item->note)<img src="{{asset('images/note.png')}}" />@endif
         <br />{{$item->code}}
    </span>
</button>
@if(isset($childNodeExists) && $childNodeExists)
<span class="collapse-node" title="collapse/expand node"><i class="far fa-minus-square"></i></span>
@endif
