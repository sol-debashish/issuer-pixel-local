<table class=" table table-bordered table-striped table-hover" style="width: 100%">
    <thead>
    <tr>
        <th>Industry Level</th>
        <th>Number of Nodes</th>
        <th>Number of Unique Nodes</th>
        <th>Active + Inactive</th>
    </tr>

    </thead>
    <tbody>
    @foreach($NodeCounterList as $Key => $Value)
        <tr>
            <td>{{$Value['level']}}</td>
            <td>{{$Value['total']}}</td>
            <td>{{$Value['unique_count']}}</td>
            <td>{{$Value['active'] . ' + ' . $Value['inactive']}}</td>
        </tr>
    @endforeach
    </tbody>
</table>
