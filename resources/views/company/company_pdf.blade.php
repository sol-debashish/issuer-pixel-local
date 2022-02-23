<!doctype html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Company Profile Pdf</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <style>
        body{
            margin: 0;
            padding: 0;
        }
        h1,h2,h3,h4,h5,h6{
            margin: 0;
            padding: 0;
        }
        p{
            margin: 0;
            padding: 0;
            color: #44444A;
        }
        ul{
            padding: 0;
        }
        ul li{
            list-style: none;
            padding-top: 15px;
            color: #44444A;
        }
        span{
            color: #44444A;
            font-weight: bold;
        }
        .container{
            padding-bottom: 20px;
        }

        .logo img{
            width: 150px;
        }
        .rounded{
            border-radius: 50%;
        }

        .text-center{
            text-align: center;
        }
        .fas{
            padding-right: 5px;
            font-size: 12px;
            color: #444444;

        }
        .company-name{
            padding: 15px;
            font-weight: bold;
        }
        .tree-box-first{
            border: 1px solid #DADADA;
            border-radius: 0.25rem;
        }
        .tree-box{
            color: #ffffff;
            text-align: center;
        }
        .tree-box-ul li{
            display: list-item;
            padding: 12px 0;
            border-radius: 0.25rem;
            page-break-after: always;
            page-break-inside: avoid;
        }

        .clear{
            clear: both;
        }
        .after-arrow{
            padding: 0;
        }
        .social-icon{
            padding-right:7px;
            padding-top: 15px;
            color: #783DAB;
            font-size: 20px;
        }
        a{
            text-decoration: none;
        }


    </style>
</head>
<body>

        <div class="text-center logo"><img src=" {{ asset('images/issuerpixel_logo.png') }} " alt=""></div>
<div class="container">
        <div  style="float: left; width: 30%; ">
            <div class="text-center">
                <h3>Company Profile</h3>
                <p class="company-name">{{ $company->name }}</p>

                @isset($company->icon)
                <img class="rounded" src="{{ $company['storage_path'] }}/company_icon/{{ $company->icon  }}" alt="" width="80" height="80">
                @endisset
            </div>
            <ul>
                @if($hqAddress !=null)
                    <li><i class="fas fa-map-marker-alt"></i> {{ $hqAddress }}</li>
                @endif

                @if($company->phone_number != null)
                <li>
                    <i class="fas fa-phone" style="transform: rotate(90deg);"></i>{{ $company->phone_number }}                                       
                </li>
                @endif

                @if($company->PublicPrivateType !=null)
                <li>                    
                    <span>Type: </span>{{ $company->PublicPrivateType->name }}                    
                </li>
                @endif

                @if($company->ceo !=null)
                <li><span>CEO: </span>{{ $company->ceo }}</li>
                @endif

                @if($company->numberofEmployees !=null)
                <li>                    
                    <span>Number of Employees: </span>{{ $company->numberofEmployees->name }}                    
                </li>
                @endif

                @if($company->entityType != null)
                <li>                    
                    <span>Legal Entity Type: </span>{{ $company->entityType }}                    
                </li>
                @endif

                @if($company->numberofShareholders !=null)
                <li><span>Number of Shareholders: </span>{{ $company->numberofShareholders->name }} </li>
                @endif

                @if($company->BaseCurrency !=null)
                <li><span>Base Currency: </span>{{ $company->BaseCurrency->name }} </li>
                @endif

                @if(is_null($company->conglomerate))
                <span></span>
                @elseif($company->conglomerate !=0)
                <li><span>Conglomerate: </span> Yes</li>
                @else
                <li><span>Conglomerate: </span> No</li>
                @endif
                

                @if(is_null($company->conducted_financing_six_month))
                <span></span>
                @elseif($company->conducted_financing_six_month !=0)
                <li><span>Conducted Financing: </span> Yes</li>
                @else
                <li><span>Conducted Financing: </span> No</li>
                @endif

                
                @if(is_null($company->audited_financials))
                <span></span>
                @elseif($company->audited_financials ==1)
                <li><span>Audited Financials: </span> Yes</li>
                @else
                <li><span>Audited Financials: </span> No</li>
                @endif

                @if($company->recent_valuation != null)
                <li><span>Most Recent Valuation: </span>{{ $company->recent_valuation}}</li>
                @endif

                @if(count($company->IntellectualProperty) != 0)
                <li>
                    <span>Intellectual Property: </span>
                    @foreach ($company->IntellectualProperty as $property)
                        {{ $property->name }}
                    @endforeach
                </li>
                @endif

                @if(count($company->ResearchCoverage) != 0)
                <li>
                    <span>Research Coverage: </span>
                    @foreach ($company->ResearchCoverage as $reserche)
                        {{ $reserche->name }},
                    @endforeach
                </li>
                @endif

                <!-- General -->
                @if($company->company_description !=null)
                <li>
                    <span>Company Description: </span><br>
                    {{ $company->company_description }}
                </li>
                @endif

                @if($company->CompanyIndustry != null)
                <li>
                    <span>Company Industry: </span>
                    {{ $company->CompanyIndustry->description }}
                </li>
                @endif

                @if(count($company->EsgScore) != 0)
                <li>
                    <span>Does Your Business Have an ESG Score? </span><br>
                    @foreach ($company->EsgScore as $esg)
                        {{ $esg->name }},
                    @endforeach
                </li>
                @endif

                @if(count($company['MsciRating']) != 0)
                <li><span>MSCI ESG Rating: </span>
                    @foreach ($company['MsciRating'] as $esg)
                        {{ $esg->name }}
                    @endforeach
                </li>
                @endif

                @if(count($company['SustainalyticsRating']) != 0)
                <li><span>Sustainalytics ESG Rating: </span>
                    @foreach ($company['SustainalyticsRating'] as $esg)
                        {{ $esg->name }}
                    @endforeach
                </li>
                @endif

                @if(count($company['CdpRating']) != 0)
                <li><span>CDP Rating: </span>
                    @foreach ($company['CdpRating'] as $esg)
                        {{ $esg->name }}
                    @endforeach
                </li>
                @endif

                @if(count($company['IssRating']) != 0)
                <li><span>ISS Rating: </span>
                    @foreach ($company['IssRating'] as $esg)
                        {{ $esg->name }}
                    @endforeach
                </li>
                @endif

                @if(count($company['ownedBusiness']) != 0)
                <li>
                    <span>Minority Owned Businesses: </span><br>
                    @foreach ($company['ownedBusiness'] as $ownedBusiness)
                        {{ $ownedBusiness->name }},
                    @endforeach
                </li>
                @endif


                <!-- Company Contacts -->
                @if(count($company['founders']) != 0)
                <li><span>Founders: </span>
                    @foreach ($company['founders'] as $founder)
                        {{ $founder->name }},
                    @endforeach
                </li>
                @endif

                @if($company->cfo !=null)
                <li><span>CFO: </span>{{ $company->cfo }}</li>
                @endif


                @if($company->sales_department_email !=null && $company->sales_dept_phone !=null)
                <li>
                    <span>Sales Department Point of Contact: </span><br>
                    {{ $company->sales_department_email }},
                    {{ $company->sales_dept_phone }}
                </li>

                @elseif($company->sales_department_email !=null)
                <li>
                    <span>Sales Department Point of Contact: </span><br>
                    {{ $company->sales_department_email }}
                </li>
                @elseif($company->sales_dept_phone !=null)
                <li>
                    <span>Sales Department Point of Contact: </span><br>
                    {{ $company->sales_dept_phone }}
                </li>
                @endif

            
                @if($company->investor_relations_department_email !=null && $company->investor_relation_contact_phone !=null)
                <li>
                    <span>Investor Relations Point of Contact: </span><br>
                    {{ $company->investor_relations_department_email }},
                    {{ $company->investor_relation_contact_phone }}
                </li>
                @elseif($company->investor_relations_department_email !=null)
                <li>
                    <span>Investor Relations Point of Contact: </span><br>
                    {{ $company->investor_relations_department_email }}
                </li>
                @elseif($company->investor_relation_contact_phone !=null)
                <li>
                    <span>Investor Relations Point of Contact: </span><br>
                    {{ $company->investor_relation_contact_phone }}
                </li>
                @endif


                @if($company->business_development_contact_email !=null && $company->business_development_contact_phone !=null)
                <li>
                    <span>Business Development Point of Contact: </span><br>
                    {{ $company->business_development_contact_email }},
                    {{ $company->business_development_contact_phone }}
                </li>
                @elseif($company->business_development_contact_email !=null)
                <li>
                    <span>Business Development Point of Contact: </span><br>
                    {{ $company->business_development_contact_email }}
                </li>
                @elseif($company->business_development_contact_phone !=null)
                <li>
                    <span>Business Development Point of Contact: </span><br>
                    {{ $company->business_development_contact_phone }}
                </li>
                @endif


                @if(count($company['partnerships']) != 0)
                <li><span>Strategic Partnerships: </span>
                    @foreach ($company['partnerships'] as $partnership)
                        {{ $partnership->name }},
                    @endforeach
                </li>
                @endif

                @if(count($company['vendors']) != 0)
                <li><span>Suppliers: </span>
                    @foreach ($company['vendors'] as $vendor)
                        {{ $vendor->name }},
                    @endforeach
                </li>
                @endif

                @if($company->top_competitors !=null)
                <li>
                    <span>Top Competitors: </span>
                    {{ ($company->top_competitors !=null)?$company->top_competitors:'' }}
                </li>
                @endif


                <!-- Company Structure -->

                @if($company->DomicileCountry != null)
                <li>
                    <span>Company Country of Domicile: </span>
                    {{ $company->DomicileCountry->name }}
                </li>
                @endif


                @if($company->tradingStatus != null)
                <li>
                    <span>Trading Status: </span>
                    {{ $company->tradingStatus->name }}
                </li>
                @endif

                @if($company->isin !=null)
                <li>
                    <span>ISIN: </span>
                    {{ $company->isin }}
                </li>
                @endif

                @if($company->cusip !=null)
                <li>
                    <span>CUSIP: </span>
                    {{ $company->cusip }}
                </li>
                @endif

                @if(count($company['CompanySubsidiaries']) != 0)
                <li>
                    <span>Name of Subsidiaries: </span><br>
                    @foreach ($company['CompanySubsidiaries'] as $subsidiaries)
                        {{ $subsidiaries->name }},
                    @endforeach
                </li>
                @endif

                @if(count($company['exchangeTradedOn']) != 0)
                <li>
                    <span>Domestic or International Exchange Traded On: </span><br>
                    @foreach ($company['exchangeTradedOn'] as $exchangeTraded)
                        {{ $exchangeTraded->name }},
                    @endforeach
                </li>
                @endif

                @if($company->ticker_symbol !=null)
                <li>
                    <span>Ticker Symbol: </span>
                    {{ $company->ticker_symbol }}
                </li>
                @endif

                <!-- Valuation & IP -->
                @if(count($company['FinancingType']) != 0)
                <li>
                    <span>Type of Financing: </span>
                    @foreach ($company['FinancingType'] as $FT)
                        {{ $FT->name }},
                    @endforeach
                </li>
                @endif

                @if(count($company->PatentType) != 0)
                <li>
                    <span>Type of Patents: </span><br>
                    @foreach ($company->PatentType as $PT)
                        {{ $PT->name }},
                    @endforeach
                </li>
                @endif


                <!-- Company History -->
                @if($company->CompanyHistories != null)
                    @if($company->CompanyHistories->formed_year != null)
                    <li>
                        <span>Company Formed: </span>
                        {{ $company->CompanyHistories->formed_year }}
                    </li>
                    @endif
                @endif


                @if($company->CompanyHistories != null)
                    @if($company->CompanyHistories->first_product_or_service != null)
                    <li>
                        <span>First Product/Service: </span>
                        {{ $company->CompanyHistories->first_product_or_service }}
                    </li>
                    @endif
                @endif


                @if($company->CompanyHistories != null)
                    @if($company->CompanyHistories->number_of_major_product != null)
                    <li>
                        <span>Number of Major Products / Services: </span>
                        {{ $company->CompanyHistories->number_of_major_product }}
                    </li>
                    @endif
                @endif
                

                <li>
                    <span>Change in Direction or Strategy: </span>
                    {{ $company->CompanyHistories != null? $company->CompanyHistories->change_direction_or_strategy != 0? "Yes": "No" :"No" }}
                </li>


                @if($company->CompanyHistories != null)
                    @if($company->CompanyHistories->previous_product != null)
                    <li>
                        <span>Previous Product: </span>
                        {{ $company->CompanyHistories->previous_product }}
                    </li>
                    @endif
                @endif

                @if($company->CompanyHistories != null)
                    @if($company->CompanyHistories->change_year != null)
                    <li>
                        <span>Year of Change: </span>
                        {{ $company->CompanyHistories->change_year }}
                    </li>
                    @endif
                @endif


                <!-- Corporate Actions -->                
                @if(count($company['CompanyAcquisition']) != 0)
                <li><span>Acquisition Name & Year: </span>
                    @foreach ($company['CompanyAcquisition'] as $acquisition)
                        {{ $acquisition->name.' - '.$acquisition->year }},
                    @endforeach
                </li>
                @endif


                @if(count($company['CompanySpinOffs']) != 0)
                <li><span>Spin Offs Acquisition Name & Year: </span>
                    @foreach ($company['CompanySpinOffs'] as $spinoff)
                        {{ $spinoff->spinOff_acquisitions_name.' - '.$spinoff->spinOff_acquisitions_year }},
                    @endforeach
                </li>
                @endif

                <li>
                    <span>Dividend: </span>
                    {{ $company->DividendIssued != null? $company->DividendIssued->dividend != 0? "Yes": "No" :"No" }}
                </li>

                <!-- Research Coverage -->
                @if($company->research_firm_name != null)
                <li>
                    <span>Research Firm Name: </span>
                    {{ $company->research_firm_name }}
                </li>
                @endif

                <!-- Leadership and Governance -->
                @if(count($BoardMembers) != 0)
                <li>
                    <span>Number of Board Members: </span>
                    {{ count($BoardMembers) }}
                </li>
                @endif

                @if(count($BoardMembers) != 0)
                <li><span>Board Members: </span>
                    @foreach ($BoardMembers as $BoardMember)
                        @if($BoardMember->role !=null)
                            {{ $BoardMember->first_name.' '.$BoardMember->last_name.' ('.$BoardMember->role->name.')' }},
                        @else
                            {{ $BoardMember->first_name.' '.$BoardMember->last_name }},
                        @endif
                    @endforeach
                </li>
                @endif


                @if(count($Executives) != 0)
                <li>
                    <span>Number of Executives: </span>
                    {{ count($Executives) }}
                </li>
                @endif

                @if(count($Executives))
                <li><span>Executives: </span>
                    @foreach ($Executives as $Executives)
                        @if($Executives->role !=null)
                        {{ $Executives->first_name.' '.$Executives->last_name.' ('.$Executives->role->name.')' }},
                        @else
                        {{ $Executives->first_name.' '.$Executives->last_name }},
                        @endif
                    @endforeach
                </li>
                @endif

                @if(count($company->companySocialMediaPlatform))
                <li><span>Social Media Channels: </span><br><br>@foreach ($company->companySocialMediaPlatform as $social)
                    <a href="{{ $social->pivot->value }}" target="_blank"><i class="{{ $social->icon_class}} social-icon"></i></a>
                    @endforeach

                </li>
                @endif
            </ul>
        </div>
        <div style="margin-left:4%; float:left; width: 66%;">
            <h3 class="text-center">Company Classification</h3>
            @php
                $flag=0;
            @endphp
            @foreach ($hierarchyData  as $key=>$item)

                @if ($flag %3==0)
                <div class="clear"></div>
                @endif

                <div  style="width:30%; float:left; margin-left: 15px">
                    <ul class="tree-box-ul" >
                        <li class="tree-box-first" style="vertical-align: top; text-align: center ">Classification {{ $loop->index +1 }} </li>
                        <li style="background:#FFC42E; margin-top: 10px" class="tree-box">{{ $item['industry']->description }}</li>
                        <li style="text-align: center; padding:0;" class="after-arrow"><i class="fas fa-arrow-down"></i></li>
                        <li style="background:#23B9DA; " class="tree-box">{{ $item['sector']->description }}</li>
                        @isset($item['sub_sector'])
                            <li style="text-align: center; padding:0;" ><i class="fas fa-arrow-down"></i></li>
                            <li style="background: #7E32D1;" class="tree-box">{{ $item['sub_sector']->description }}</li>
                        @endisset
                        @isset($item['group'])
                            <li style="text-align: center; padding:0;" class="after-arrow"><i class="fas fa-arrow-down"></i></li>
                            <li style="background: #30174B;" class="tree-box">{{ $item['group']->description }}</li>
                        @endisset
                        @isset($item['sub_group'])
                            <li style="text-align: center; padding:0;" class="after-arrow"><i class="fas fa-arrow-down"></i></li>
                            <li style="background: #268C8C;" class="tree-box">{{ $item['sub_group']->description }}</li>
                        @endisset
                        @isset($item['echelon'])
                            <li style="text-align: center; padding:0;" class="after-arrow"><i class="fas fa-arrow-down"></i></li>
                            <li style="background:#C00BAA;" class="tree-box">{{ $item['echelon']->description }}</li>
                        @endisset
                        @isset($item['sub_echelon'])
                            <li style="text-align: center; padding:0;" class="after-arrow"><i class="fas fa-arrow-down"></i></li>
                            <li style="background:#3851CD;" class="tree-box">{{ $item['sub_echelon']->description }}</li>
                        @endisset
                        @isset($item['tier'])
                            <li style="text-align: center; padding:0;" class="after-arrow"><i class="fas fa-arrow-down"></i></li>
                            <li style="background:#2A8BF2;" class="tree-box">{{ $item['tier']->description }}</li>
                        @endisset
                        @isset($item['sub_tier'])
                            <li style="text-align: center; padding:0;" class="after-arrow"><i class="fas fa-arrow-down"></i></li>
                            <li style="background:#707C97;" class="tree-box">{{ $item['sub_tier']->description }}</li>
                        @endisset
                        @isset($item['layer'])
                            <li style="text-align: center; padding:0;" class="after-arrow"><i class="fas fa-arrow-down"></i></li>
                            <li style="background:#761B70;" class="tree-box">{{ $item['layer']->description }}</li>
                        @endisset
                        @isset($item['sub_layer'])
                            <li style="text-align: center; padding:0;" class="after-arrow"><i class="fas fa-arrow-down"></i></li>
                            <li style="background:#A4C639;" class="tree-box">{{ $item['sub_layer']->description }}</li>
                        @endisset
                        @isset($item['deck'])
                            <li style="text-align: center; padding:0;" class="after-arrow"><i class="fas fa-arrow-down"></i></li>
                            <li style="background:#FF9E00;" class="tree-box">{{ $item['deck']->description }}</li>
                        @endisset
                        @isset($item['sub_deck'])
                            <li style="text-align: center; padding:0;" class="after-arrow"><i class="fas fa-arrow-down"></i></li>
                            <li style="background:#FF61F6;" class="tree-box">{{ $item['sub_deck']->description }}</li>
                        @endisset
                        @isset($item['floor'])
                            <li style="text-align: center; padding:0;" class="after-arrow"><i class="fas fa-arrow-down"></i></li>
                            <li style="background:#60A9F6;" class="tree-box">{{ $item['floor']->description }}</li>
                        @endisset
                        @isset($item['sub_floor'])
                            <li style="text-align: center; padding:0;" class="after-arrow"><i class="fas fa-arrow-down"></i></li>
                            <li style="background:#8A878D;" class="tree-box">{{ $item['sub_floor']->description }}</li>
                        @endisset
                        @isset($item['basement'])
                            <li style="text-align: center; padding:0;" class="after-arrow"><i class="fas fa-arrow-down"></i></li>
                            <li style="background:#001479; " class="tree-box">{{ $item['basement']->description }}</li>
                        @endisset
                        @isset($item['sub_basement'])
                            <li style="text-align: center; padding:0;" class="after-arrow"><i class="fas fa-arrow-down"></i></li>
                            <li style="background:#000000;" class="tree-box">{{ $item['sub_basement']->description }}</li>
                        @endisset
                        @isset($item['mine'])
                            <li style="text-align: center; padding:0;" class="after-arrow"><i class="fas fa-arrow-down"></i></li>
                            <li style="background:#CF78AC;" class="tree-box">{{ $item['mine']->description }}</li>
                        @endisset

                        @isset($item['sub_mine'])
                            <li style="text-align: center; padding:0;" class="after-arrow"><i class="fas fa-arrow-down"></i></li>
                            <li style="background:#FF8B59;" class="tree-box">{{ $item['sub_mine']->description }}</li>
                        @endisset
                    </ul>
                </div>
                @php
                $flag++;
                @endphp

            @endforeach
        </div>
</div>
</body>
</html>

