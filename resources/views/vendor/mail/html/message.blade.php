@component('mail::layout')
{{-- Header --}}
@slot('header')
@component('mail::header', ['url' => config('app.url')])
<img src="{{asset('/images/issuerpixel_logo.png')}}" alt="{{config('app.name')}}" width="200">
@endcomponent
@endslot

{{-- Body --}}
{{ $slot }}

{{-- Subcopy --}}
@isset($subcopy)
@slot('subcopy')
@component('mail::subcopy')
{{ $subcopy }}
@endcomponent
@endslot
@endisset

{{-- Footer --}}
{{--@slot('footer')--}}
{{--@component('mail::footer')--}}
{{--© {{ date('Y') }} {{ config('app.name') }}. @lang('All rights reserved.')--}}
{{--@endcomponent--}}
{{--@endslot--}}
@endcomponent
