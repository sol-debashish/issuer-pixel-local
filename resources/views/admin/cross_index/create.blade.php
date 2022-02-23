@extends('layouts.admin')
@section('styles')
@endsection
@section('content')
    @include('partials.admin_breadcrumb', ['breadcrumbs_title' => 'Cross Index Node',
                                                'breadcrumbs' => [
                                                    'Cross Index Node' => route('admin.cross.index.home'),
                                                    'Create',
                                                ]
                                            ]);
    <section class="content">

        <!-- Default box -->
        <div class="row">
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">
                            Create
                        </h3>
                    </div>

                    @include('partials.errors')

                    <div class="card-body">
                        <form method="POST" id="mass-crossed-form" action="{{ route("admin.crossIndex.add-mass-cross-nodes") }}">
                            @csrf
                            <div class="row">
                                <div class="col">
                                    <div class="form-group {{ $errors->has('treeA') ? 'has-error' : '' }}">
                                        <label class="required" for="treeA">Tree A</label>
                                        <select class="form-control industry-select2" type="text" name="treeA"
                                                id="treeA" onchange="SearchCrossNodes();" required>
                                            <option value="">Select Tree A</option>
                                            @foreach($industries as $industry)
                                                <option value="{{$industry->code}}">{{$industry->description}}
                                                    ({{$industry->code}})
                                                </option>
                                            @endforeach
                                        </select>
                                        @if($errors->has('treeA'))
                                            <span class="help-block"
                                                  role="alert">{{ $errors->first('treeA') }}</span>
                                        @endif
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-group {{ $errors->has('treeB') ? 'has-error' : '' }}">
                                        <label class="required" for="treeA">Tree B</label>
                                        <select class="form-control industry-select2" type="text" name="treeB"
                                                id="treeB" onchange="SearchCrossNodes();" required>
                                            <option value="">Select Tree B</option>
                                            @foreach($industries as $industry)
                                                <option value="{{$industry->code}}">{{$industry->description}}
                                                    ({{$industry->code}})
                                                </option>
                                            @endforeach
                                        </select>
                                        @if($errors->has('treeB'))
                                            <span class="help-block"
                                                  role="alert">{{ $errors->first('treeB') }}</span>
                                        @endif
                                    </div>
                                </div>
                            </div>
                            <input type="hidden" name="all_cross_nodes" id="all_cross_nodes" value="" />
                            <table class="table table-bordered">
                                <thead>
                                <tr>
                                    <th>Tree A Node</th>
                                    <th>Tree B Node</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody id="crossed_suggest_tbody">
                                </tbody>
                            </table>

                            <div class="form-group">
                                <button class="btn btn-danger float-right" type="submit">
                                    Save
                                </button>
                                <a class="btn btn-default" href="{{ route('admin.cross.index.home') }}">
                                    Back
                                </a>
                            </div>
                        </form>

                    </div>
                    <!-- /.card-body -->
                </div>
            </div>
        </div>
        <!-- /.card -->
    </section>
@endsection
@section('scripts')
    <script>
        $(document).ready(function () {
            $('.industry-select2').select2({});

            $('#mass-crossed-form').submit(function () {
                // Check if empty of not
                if (node_id_array.length  === 0) {
                    alert('Please select atleast one pair from the lists.');
                    return false;
                }
            });
        });
        var node_id_array =[];
        var progress = null
        function SearchCrossNodes(Obj) {
            if (progress) {
                progress.abort();
            }
            var search_text = $("#search_node").val();
            var treeAcode = $("#treeA").val();
            var treeBcode=  $("#treeB").val();
            if(treeAcode !='' && treeBcode !='') {
                if(treeAcode == treeBcode){
                    alert('Tree A and Tree B should be diffrent.');
                    return false;
                }
                var queryParameters = {
                    _token: $('input[name=_token]').val(),
                    treeA: treeAcode,
                    treeB: treeBcode,
                }
                console.log(queryParameters);
                progress = $.ajax({
                    type: 'post',
                    url: '{{ route("admin.mass.cross.node.category") }}',
                    data: queryParameters,
                    success: function (data) {
                        $('#crossed_suggest_tbody').html(data);
                        progress = null;
                    }
                });
            }else{
                $('#crossed_suggest_tbody').html('');
            }
            node_id_array=[];
        }
        function setNodesAsCrossed(obj) {
            var total_node_id = $(obj).data('node_a')+'-'+$(obj).data('node_b');
            if ($(obj).is(':checked')) {
                node_id_array.push(total_node_id);
            } else {
                node_id_array.splice($.inArray(total_node_id, node_id_array), 1);
            }
            node_id_array.sort(function (a, b) {
                return a - b;
            });
            console.log(node_id_array);
            $("#all_cross_nodes").val(node_id_array);
        }

    </script>

@endsection
