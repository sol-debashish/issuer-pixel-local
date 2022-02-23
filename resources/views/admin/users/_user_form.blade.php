<div class="form-group {{ $errors->has('first_name') ? 'has-error' : '' }}">
    <label class="required" for="first_name">First Name</label>
    <input class="form-control" type="text" name="first_name" id="first_name" value="{{ old('first_name', isset($user) ? $user->first_name : null) }}" required>
    @if($errors->has('first_name'))
    <span class="help-block" role="alert">{{ $errors->first('first_name') }}</span>
    @endif
</div>

<div class="form-group {{ $errors->has('last_name') ? 'has-error' : '' }}">
    <label class="required" for="last_name">Last Name</label>
    <input class="form-control" type="text" name="last_name" id="last_name" value="{{ old('last_name', isset($user) ? $user->last_name : null) }}" required>
    @if($errors->has('last_name'))
    <span class="help-block" role="alert">{{ $errors->first('last_name') }}</span>
    @endif
</div>

<div class="form-group {{ $errors->has('email') ? 'has-error' : '' }}">
    <label class="required" for="email">Email</label>
    @if(auth()->user()->isSuperAdmin())
        <input class="form-control" type="text" name="email" id="email" value="{{ old('email', isset($user) ? $user->email : null) }}"  required>
    @else
        <input class="form-control" type="text" name="email" id="email" value="{{ old('email', isset($user) ? $user->email : null) }}" @if(isset($user)) disabled @else required @endif>
    @endif
           @if($errors->has('email'))
           <span class="help-block" role="alert">{{ $errors->first('email') }}</span>
    @endif
</div>

@if(! auth()->user()->isViewOnlyAdmin())
<div class="form-group {{ $errors->has('role') ? 'has-error' : '' }}">
    <label class="required" for="role">Role</label>
    <select name="role" class="form-control" >
        <option value=""> Select one </option>
        @foreach($roles as $roleKey => $roleValue)
        <option value="{{$roleKey}}" @if(old('role', isset($user) ? $user->role : null) == $roleKey) selected @endif>{{$roleValue}}</option>
        @endforeach
    </select>
    @if($errors->has('role'))
    <span class="help-block" role="alert">{{ $errors->first('role') }}</span>
    @endif
</div>
@endif
