<?php

namespace App\Traits;


use App\Models\CompanyCategorizationLookup;
use Hashids\Hashids;
trait Media
{


    public function companyMediaTaxonomyAdd($taxonomyLookupId, $companyId, $mediaFileId)
    {
        $commmonLevel = 5;
        $lookupIds =array_unique(explode(',',$taxonomyLookupId));

        \App\Models\MediaCategorizationLookup::where('company_id', $companyId)
            ->whereIn('id',$lookupIds)->update(['media_file_id' => $mediaFileId]);

        $mcLookup = \App\Models\MediaCategorizationLookup::whereIn('id',$lookupIds)->get();
        foreach($mcLookup as $key => $mediaLookup)
        {
            $companyLookup = CompanyCategorizationLookup::where(
                [
                    'company_id' => $companyId,
                    'industry_id' => $mediaLookup->industry_id,
                    'node_id' => $mediaLookup->node_id,
                    'node_code' => $mediaLookup->node_code,
                    ['categorization_level_id', '>', $commmonLevel]
                ])->first();


            if(null == $companyLookup && $mediaLookup->categorization_level_id > $commmonLevel)
            {
                $companyLookup = CompanyCategorizationLookup::create([
                    'company_id' => $companyId,
                    'industry_id' => $mediaLookup->industry_id,
                    'categorization_level_id' => $mediaLookup->categorization_level_id,
                    'node_id' => $mediaLookup->node_id,
                    'node_code' => $mediaLookup->node_code,
                    'order' => $key + 1,
                ]);
            }
            elseif(null == $companyLookup && $mediaLookup->categorization_level_id <= $commmonLevel)
            {
                $companyLookup = CompanyCategorizationLookup::where(
                    [
                        'company_id' => $companyId,
                        'industry_id' => $mediaLookup->industry_id,
                        'categorization_level_id' => $mediaLookup->categorization_level_id,

                    ])->first();

                if(null == $companyLookup)
                {
                    $companyLookup = CompanyCategorizationLookup::create([
                        'company_id' => $companyId,
                        'industry_id' => $mediaLookup->industry_id,
                        'categorization_level_id' => $mediaLookup->categorization_level_id,
                        'node_id' => $mediaLookup->node_id,
                        'node_code' => $mediaLookup->node_code,
                        'order' => $key + 1,
                    ]);
                }
            }
            elseif(null != $companyLookup && $mediaLookup->categorization_level_id > $commmonLevel && $companyLookup->categorization_level_id > $mediaLookup->categorization_level_id)
            {
                $companyLookup->categorization_level_id = $mediaLookup->categorization_level_id;
                $companyLookup->node_id = $mediaLookup->node_id;
                $companyLookup->node_code = $mediaLookup->node_code;
                $companyLookup->save();
            }
            elseif(null != $companyLookup && $mediaLookup->categorization_level_id <= $commmonLevel)
            {
                $companyLookup = CompanyCategorizationLookup::where(
                    [
                        'company_id' => $companyId,
                        'industry_id' => $mediaLookup->industry_id,
                        'categorization_level_id' => $mediaLookup->categorization_level_id,

                    ])->first();

                if(null == $companyLookup)
                {
                    $companyLookup = CompanyCategorizationLookup::create([
                        'company_id' => $companyId,
                        'industry_id' => $mediaLookup->industry_id,
                        'categorization_level_id' => $mediaLookup->categorization_level_id,
                        'node_id' => $mediaLookup->node_id,
                        'node_code' => $mediaLookup->node_code,
                        'order' => $key + 1,
                    ]);
                }
            }
            \App\Models\CompanyMediaTaxonomy::create([
                'company_id' => $companyId,
                'company_taxonomy_id' => $companyLookup->id,
                'media_taxonomy_id' => $mediaLookup->id,
            ]);
        }

        $totalProfileValue = config('general.issuer_profile_completion.taxonomy.total_value');
        $totalProfileField = config('general.issuer_profile_completion.taxonomy.total_field');
        $completedProfileFieldValue = 25;

        $company = \App\Models\Company::findOrFail($companyId);
        if(! $company->hierarchy_completed)
        {
            $company->hierarchy_completed = profileCompletePercentageCalculator($totalProfileValue, $totalProfileField, $completedProfileFieldValue);
            $company->save();
        }

    }

    public function getMediaUUID($id)
    {
        $hashids = new Hashids('IssuerPixel', 12);
        return $hashids->encode($id);
    }
}
