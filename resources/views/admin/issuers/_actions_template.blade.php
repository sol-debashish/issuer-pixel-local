@if($row->status != 4)
<a class="btn btn-sm btn-primary"
   href="{{route('admin.issuer.questionnaire.admin',['user' => $row->user_id, 'type' => "{$mediaType}_dashboard", 'file_id' => $row->file_id])}}">
    View
</a>


<a class="btn btn-sm btn-info"
   href="{{route('admin.issuer.questionnaire.admin',['user' => $row->user_id, 'type' => "{$mediaType}_hierarchy", 'file_id' => $row->file_id])}}">
    Edit Hierarchy
</a>

<a class="btn btn-sm btn-success"
   href="{{route('admin.issuer.questionnaire.admin',['user' => $row->user_id, 'type' => "{$mediaType}_questionnaire", 'file_id' => $row->file_id])}}">
    Edit Questionnaire
</a>
@endif

