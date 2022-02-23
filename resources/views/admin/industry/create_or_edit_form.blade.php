<div class="form-group {{ $errors->has('description') ? 'has-error' : '' }}">
    <label class="required" for="description">Description</label>
    <input class="form-control" type="text" name="description" id="description" value="{{ old('description', isset($industry) ? $industry->description : null) }}" required>
    @if($errors->has('description'))
    <span class="help-block" role="alert">{{ $errors->first('description') }}</span>
    @endif
</div>

<div class="form-group {{ $errors->has('note') ? 'has-error' : '' }}">
    <label class="required" for="note">Note</label>
    <textarea class="form-control" name="note" id="note">{{ old('note', isset($industry) ? $industry->note : null) }}</textarea>
    @if($errors->has('note'))
    <span class="help-block" role="alert">{{ $errors->first('note') }}</span>
    @endif
</div>
