@extends('layouts.admin')
@section('content')

    @include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'Hierarchy Suggestion',
                                                    'breadcrumbs' => [
                                                        'Hierarchy Suggestion' => route('admin.hierarchy.suggestion'),
                                                        'Show'
                                                    ]
                                                ])

    <section class="content">

        <!-- Default box -->
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">
                            Show
                        </h3>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <table class="table table-bordered table-striped">
                                <tbody>
                                <tr>
                                    <th>
                                        Suggestion ID
                                    </th>
                                    <td>
                                        {{$suggestion->id}}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Industry Name
                                    </th>
                                    <td>
                                        {{(null !=$suggestion->industry) ? $suggestion->industry->description : ''}}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Type of Change
                                    </th>
                                    <td>
                                        {{ $suggestion->suggestionType->name }}
                                    </td>
                                </tr>
                                <?php if($suggestion->categorization_level_id > 1) :?>
{{--                                <tr>--}}
{{--                                    <?php--}}
{{--                                    $parentNamespace = "App\\Models\\" . $categorizationLevel[$suggestion->categorization_level_id - 1];--}}
{{--                                    $parentData = $parentNamespace::whereId($suggestion->parent_id)->get(['description'])->first();--}}
{{--                                    ?>--}}
{{--                                    <th>--}}
{{--                                        Parent Node Name ({{$categorizationLevel[$suggestion->categorization_level_id - 1]}})--}}
{{--                                    </th>--}}
{{--                                    <td>--}}
{{--                                        {{$parentData->description}}--}}
{{--                                    </td>--}}
{{--                                </tr>--}}
                                <?php endif;?>
                                <tr>
                                    <th>
                                        Node ID
                                    </th>
                                    <td>
                                    <?php if($suggestion->type == 1):?>
                                        {{ $suggestion->parent_id }}
                                    <?php else:?>
                                        {{ $suggestion->node_id }}
                                    <?php endif;?>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Node Name
                                    </th>
                                    <td>
                                        <?php
                                        if($suggestion->type == 1 && $suggestion->categorization_level_id > 1){
                                            $nodeNamespace = "App\\Models\\" . $categorizationLevel[$suggestion->categorization_level_id - 1];
                                            $nodeData = $nodeNamespace::whereId($suggestion->parent_id)->get(['description'])->first();
                                        }
                                        else{
                                            $nodeNamespace = "App\\Models\\" . $categorizationLevel[$suggestion->categorization_level_id];
                                            $nodeData = $nodeNamespace::whereId($suggestion->node_id)->get(['description'])->first();
                                        }
                                        ?>
                                        <p>{{(null != $nodeData) ? $nodeData->description : 'Deleted'}}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Suggestion Details
                                    </th>
                                    <td>
                                        {{$suggestion->suggestion_explanation}}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Suggestion Reason
                                    </th>
                                    <td>
                                        {{$suggestion->suggestion_reason}}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        User Name
                                    </th>
                                    <td>
                                        {{ (null != $suggestion->owner) ? $suggestion->owner->name : 'Deleted member'}}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        User Email
                                    </th>
                                    <td>
                                        {{ (null != $suggestion->owner) ? $suggestion->owner->email : 'Deleted member'}}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Content Type
                                    </th>
                                    <td>
                                        {{ $suggestion->hierarchy_type }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Date
                                    </th>
                                    <td>
                                        {{ $suggestion->created_at->format('F jS, Y H:i:s A') }}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Review Status
                                    </th>
                                    <td>
                                        {{$suggestion->review_status}}
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        Reviewed By
                                    </th>
                                    <td>
                                        {{$suggestion->reviewer ? $suggestion->reviewer->name : ''}}
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div class="form-group">
                                <a class="btn btn-default" href="#" onclick="window.history.back()">
                                    Back
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- /.card-body -->
                </div>
            </div>
        </div>
        <!-- /.card -->
    </section>
@endsection
