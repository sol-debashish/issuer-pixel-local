<?php

if (!function_exists('logError')) {
    /**
     * @param Exception $e
     */
    function logError($e) {
        \Log::error($e->getFile() . ':' . $e->getLine() . ' ' . $e->getMessage());
        \Log::debug($e->getTraceAsString());
    }
}
if (!function_exists('uniqueSameHierarchyData')) {
    function uniqueSameHierarchyData($data, $field)
    {
        $out = [];
        foreach($data as $i)
        {
            if(!isset($out[$i['id']]))
            {
                $out[$i['id']] = $i;
            }
            elseif(isset($out[$i['id']]) && ($out[$i['id']][$field] > $i[$field]))
            {
                $out[$i['id']] = $i;
            }
        }
        return array_values($out);
    }
}
if (!function_exists('profileCompletePercentageCalculator')) {
    function profileCompletePercentageCalculator($totalProfileValue, $totalProfileField, $completedProfileFieldValue)
    {
        if(! $completedProfileFieldValue)
        {
            return $completedProfileFieldValue;
        }
        $value = (integer) (ceil(($totalProfileValue / $totalProfileField) * $completedProfileFieldValue ));
        return  ($value > $totalProfileValue) ? $totalProfileValue : $value;
    }
}
