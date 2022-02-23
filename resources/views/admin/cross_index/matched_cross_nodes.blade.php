@if(!empty($data['nodeAdata']) && !empty($data['nodeBdata']))
    @foreach($data['nodeAdata'] as $key=> $nodeA)
        @php
        $exist= array_search($nodeA['itemName'], array_column($data['nodeBdata'], 'itemName'));
        @endphp
        @if($exist)
    <tr>
        <td> {{$nodeA['Name']}} ({{$nodeA['id']}})</td>
        <td> {{$data['nodeBdata'][$exist]['Name']}} ({{$data['nodeBdata'][$exist]['id']}})</td>
        <td>
            <input type="checkbox" name="mark-as-crossed" data-node_a="{{$nodeA['id']}}" data-node_b="{{$data['nodeBdata'][$exist]['id']}}" onclick="setNodesAsCrossed(this);"/>
        </td>
    </tr>
        @endif
    @endforeach
@endif



