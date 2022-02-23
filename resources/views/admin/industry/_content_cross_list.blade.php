<table class=" table table-bordered table-striped table-hover" style="width: 100%">
    <thead>
    <tr>
        <th>Industry Name</th>
        <th>Node Name</th>
        <th>Node Level</th>
        <th>Action</th>
    </tr>

    </thead>
    <tbody>
    @foreach($NodeCrossedList as $Key => $Value)
        <tr>
            <td>{{$Value['industry_name']}}</td>
            <td>{{$Value['node_name']}}</td>
            <td>{{$Value['node_level']}}</td>
            <td>
                <button type='button' class='btn btn-danger btn-sm' data-crossid="{{$Value['crossed_id']}}"  id='delete-cross-index'>Delete</button>
            </td>
        </tr>
    @endforeach
    </tbody>
</table>
