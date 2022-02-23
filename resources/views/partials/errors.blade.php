@if($errors->count() > 0)
    <div class="row" style='padding:20px 20px 0 20px;'>
        <div class="col-lg-12">
            <div class="alert alert-danger">
                <ul class="list-unstyled">
                    @foreach($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        </div>
    </div>
@endif