<table class=" table table-bordered table-striped table-hover" style="width: 100%">
    <thead>
    <tr>
        <th>Warp Direction</th>
        <th>Industry Name</th>
        <th>Node Name</th>
        <th>Node Level</th>
        <th>Action</th>
    </tr>

    </thead>
    <tbody>
    @foreach($NodeWarpList as $Key => $Value)
        <tr>
            @if($Value['direction'] == 'warp_to')
            <td>Warped to {{$Value['node_name']}}</td>
            @else
            <td>Warped from {{$Value['node_name']}}</td>
            @endif
            <td>{{$Value['industry_name']}}</td>
            <td>{{$Value['node_name']}}</td>
            <td>{{$Value['node_level']}}</td>
            <td>
                <button type='button' class='btn btn-danger btn-sm' data-warpid="{{$Value['warp_id']}}"  id="delete-node-warp">Delete</button>
            </td>
        </tr>
    @endforeach
    </tbody>
</table>
