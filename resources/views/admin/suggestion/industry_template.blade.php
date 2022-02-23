<?php
$industryId = explode(',',$row->industry_id)
?>
@foreach($industryId as $industry)
<p>{{$categorizationLevel[$industry]}}</p>
@endforeach
