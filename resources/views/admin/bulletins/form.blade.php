<div class="form-group {{ $errors->has('title') ? 'has-error' : '' }}">
    <label class="required" for="title">Title</label>
    <input class="form-control" type="text" name="title" value="{{ old('title', isset($bulletin) ? $bulletin->title : null) }}" required>
    @if($errors->has('title'))
        <span class="help-block" role="alert">{{ $errors->first('title') }}</span>
    @endif
</div>

<div class="form-group {{ $errors->has('description') ? 'has-error' : '' }}">
    <label class="required" for="description">Description</label>
    <textarea class="form-control" name="description" required>{{ old('description', isset($bulletin) ? $bulletin->description : null) }}</textarea>
    @if($errors->has('description'))
        <span class="help-block" role="alert">{{ $errors->first('description') }}</span>
    @endif
</div>

<div class="form-group {{ $errors->has('image') ? 'has-error' : '' }}">
    <label class="required" for="image">Image</label>
    <input class="form-control border-0 pl-0" type="file" name="image" accept="image/*" @if(isset($bulletin)) @else required @endif>
    @if($errors->has('image'))
        <span class="help-block" role="alert">{{ $errors->first('image') }}</span>
    @endif
</div>

<div class="form-group {{ $errors->has('is_sticky') ? 'has-error' : '' }}">
    <label class="required" for="is_sticky">Sticky</label>
    <select class="form-control" name="is_sticky" required>
        <option value="0" @if(old('is_sticky', isset($bulletin) ? $bulletin->is_sticky : null) == '0') selected @endif>No</option>
        <option value="1" @if(old('is_sticky', isset($bulletin) ? $bulletin->is_sticky : null) == '1') selected @endif>Yes</option>
    </select>
    @if($errors->has('is_sticky'))
        <span class="help-block" role="alert">{{ $errors->first('is_sticky') }}</span>
    @endif
</div>
