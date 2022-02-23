<?php
    function create($class, $attributes = [], $times = null)
    {
        return factory($class, $times)->create($attributes);
    }
    function make($class, $attributes = [], $times = null)
    {
        return factory($class, $times)->make($attributes);
    }
    function raw($class, $attributes = [], $times = null)
    {
        return factory($class, $times)->raw($attributes);
    }

    function generateCode($totalItem, $item, $paddingCode)
    {
        $code = $paddingCode. str_pad($totalItem,2,'0',STR_PAD_LEFT);

        // call the same function if the exists already
        if (_codeExists($code, $item)) {
            return generateCode($totalItem+1, $item, $paddingCode);
        }
        // otherwise, it's valid and can be used
        return $code;
    }
    function _codeExists($code, $item)
    {
        return $item->whereCode($code)->exists();
    }