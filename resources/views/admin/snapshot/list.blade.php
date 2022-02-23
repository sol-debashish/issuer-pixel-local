<table class="table table-striped">
    <thead>
    <tr>
        <th>#</th>
        <th>File Name</th>
        <th>Created at</th>
        <th>Action</th>
    </tr>
    </thead>
    <tbody>
    @forelse($backupData as $data)
        <tr>
            <td>{{ $loop->iteration }}</td>
            <td>{{$data->file_name}}</td>
            <td>{{\Carbon\Carbon::parse($data->created_at)->format('m/d/Y H:i:s')}}</td>
            <td>
                <a class="btn btn-sm btn-info restore-manual-node-data" data-id="{{$data->id}}" href="javascript:;;">
                    Restore
                </a>
                <a class="btn btn-sm btn-danger delete-manual-node-data" data-id="{{$data->id}}" href="javascript:;;">
                    Delete
                </a>
            </td>
            </tr>
        @empty
        <tr class="odd">
            <td colspan="4" class="text-center">No data available in table</td>
        </tr>
        @endforelse
    </tbody>
</table>
