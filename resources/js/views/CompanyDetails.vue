<template>
    <div class="dashboard">

        <button type="button" class="btn mb-4 back-to-previous" v-if="isLoggedIn && this.loggedInSlug !== currentPageSlug"  @click="backToPrevious">
            Back to Screener Results
        </button>

        <div class="container-fluid px-0">
            <div v-if="companyNotFound" class="row collapse show no-gutters d-flex h-100 position-relative">
                <div class="col text-center mb-5">
                    <img src="/images/issuerpixel_logo.png" alt="issuerpixel_logo" class="my-5">
                    <h3 class="mt-5">Company not found</h3>
                </div>
            </div>
            <div v-else>
                <h4 v-if="this.$route.params.callFrom == 'preview'" class="text-theme-dark-blue text-center pb-3">This
                    is a preview of what your profile looks like to others who view it.</h4>
                <div class="row collapse show no-gutters d-flex h-100 position-relative">
                    <div class="col-lg-3">
                        <div class="company-profile-share-info mr-3 pb-5">
                            <span class="d-flex">
                                <div class="company-share-button pt-1 text-center"
                                    :class="(userId && senderCompanyId != companyId) ? 'ml-auto mr-1' : 'mx-auto'"
                                    @click.prevent="shareMediaLink(slug)">
                                    <i class="fa fa-share-alt"></i> <strong>SHARE</strong>
                                </div>
                                <div v-if="userId && senderCompanyId != companyId" class="message-button mr-auto ml-1 pt-1 text-center" @click.prevent="showMessageModal">
                                    <i class="far fa-comment-alt"></i> <strong>MESSAGE</strong>
                                </div>
                            </span>

                            <p class="custom-hr-theme my-0"></p>
                            <div class="bio-content">
                                <div class="px-4">
                                    <ul class="position-relative list-unstyled mt-3">
                                        <li class="font-weight-bold text-center">{{name}}</li>
                                        <li v-if="icon" class="text-center">
                                            <img :src="icon" alt="" class="company-profile-photo rounded-circle"
                                                 width="80" height="80">
                                        </li>
                                        <li v-if="address"><i class="fas fa-map-marker-alt"></i>&nbsp; {{address}}</li>
                                        <li><i class="fas fa-phone-alt"></i> {{phoneNumber}}</li>
                                        <li v-if="publicPrivateType"><strong>Type: </strong> {{publicPrivateType}}</li>
                                        <li v-if="ceo"><strong>CEO: </strong> {{ceo}}</li>
                                        <li v-if="numberOfEmployee"><strong>Number of Employees:</strong> {{
                                            numberOfEmployee}}
                                        </li>
                                        <li v-if="entityType"><strong>Legal Entity Type:</strong> {{entityType}}</li>
                                        <li v-if="numberOfShareholder"><strong>Number of Shareholders:</strong>
                                            {{numberOfShareholder}}
                                        </li>
                                        <li v-if="baseCurrency"><strong>Base Currency:</strong> {{baseCurrency}}</li>
                                        <li v-if="conglomerate"><strong>Conglomerate:</strong> {{conglomerate}}</li>
                                        <li v-if="conductedFinancing"><strong>Conducted Financing:</strong>
                                            {{conductedFinancing}}
                                        </li>
                                        <li v-if="auditedFinancials"><strong>Audited Financials:</strong>
                                            {{auditedFinancials}}
                                        </li>
                                        <li v-if="recentValuation"><strong>Most Recent Valuation:</strong>
                                            {{recentValuation}}
                                        </li>
                                        <li v-if="intellectualProperty.length"><strong>Intellectual Property:</strong>
                                            <span v-for="(ip, ipIndex) in intellectualProperty" :key="ipIndex">
                                              {{ nameWithComma(ip.name, ipIndex, intellectualProperty.length) }}
                                            </span>
                                        </li>
                                        <li v-if="researchCoverage.length"><strong>Research Coverage:</strong>
                                            <span v-for="(rc, rcIndex) in researchCoverage" :key="rcIndex">
                                              {{ nameWithComma(rc.name, rcIndex, researchCoverage.length) }}
                                            </span>
                                        </li>


                                        <!-- General Tab -->

                                        <li v-if="companyDescription"><strong>Company Description: </strong> {{companyDescription}}</li>
                                        <li v-if="companyIndustry"><strong>Company Industry: </strong> {{companyIndustry}}</li>
                                        <li v-if="esgScore.length"><strong>Does Your Business Have an ESG Score?:</strong>
                                            <span v-for="(ip, ipIndex) in esgScore" :key="ipIndex">
                                              {{ nameWithComma(ip.name, ipIndex, esgScore.length) }}
                                            </span>
                                        </li>
                                        <li v-if="msciRating.length"><strong>MSCI ESG Rating:</strong>
                                            <span v-for="(ip, ipIndex) in msciRating" :key="ipIndex">
                                              {{ nameWithComma(ip.name, ipIndex, msciRating.length) }}
                                            </span>
                                        </li>
                                        <li v-if="sustainalyticsRating.length"><strong>Sustainalytics ESG Rating:</strong>
                                            <span v-for="(ip, ipIndex) in sustainalyticsRating" :key="ipIndex">
                                              {{ nameWithComma(ip.name, ipIndex, sustainalyticsRating.length) }}
                                            </span>
                                        </li>
                                        <li v-if="cdpRating.length"><strong>CDP Rating:</strong>
                                            <span v-for="(ip, ipIndex) in cdpRating" :key="ipIndex">
                                              {{ nameWithComma(ip.name, ipIndex, cdpRating.length) }}
                                            </span>
                                        </li>
                                        <li v-if="issRating.length"><strong>ISS Rating:</strong>
                                            <span v-for="(ip, ipIndex) in issRating" :key="ipIndex">
                                              {{ nameWithComma(ip.name, ipIndex, issRating.length) }}
                                            </span>
                                        </li>
                                        <li v-if="ownedBusiness.length"><strong>Minority Owned Businesses:</strong>
                                            <span v-for="(ip, ipIndex) in ownedBusiness" :key="ipIndex">
                                              {{ nameWithComma(ip.name, ipIndex, ownedBusiness.length) }}
                                            </span>
                                        </li>


                                        <!-- Company Contacts Tab -->

                                        <li v-if="founders.length"><strong>Founders:</strong>
                                            <span v-for="(ip, ipIndex) in founders" :key="ipIndex">
                                              {{ nameWithComma(ip.name, ipIndex, founders.length) }}
                                            </span>
                                        </li>
                                        <li v-if="cfo"><strong>CFO: </strong> {{cfo}}</li>
                                        <li v-if="salesContact"><strong>Sales Department Point of Contact: </strong> {{salesContact}}</li>
                                        <li v-if="investorContact"><strong> Investor Relations Point of Contact: </strong> {{investorContact}}</li>
                                        <li v-if="businessDevContact"><strong> Business Development Point of Contact: </strong> {{businessDevContact}}</li>
                                        <li v-if="strategicPartnership.length"><strong>Strategic Partnership:</strong>
                                            <span v-for="(ip, ipIndex) in strategicPartnership" :key="ipIndex">
                                              {{ nameWithComma(ip.name, ipIndex, strategicPartnership.length) }}
                                            </span>
                                        </li>
                                        <li v-if="vendors.length"><strong>Suppliers:</strong>
                                            <span v-for="(ip, ipIndex) in vendors" :key="ipIndex">
                                              {{ nameWithComma(ip.name, ipIndex, vendors.length) }}
                                            </span>
                                        </li>
                                        <li v-if="topCompetitors"><strong>Top Competitors: </strong> {{topCompetitors}}</li>


                                        <!-- Company Structure -->
                                        <li v-if="domicileCountry"><strong>Company Country of Domicile: </strong> {{domicileCountry}}</li>
                                        <li v-if="tradingStatus"><strong>Trading Status: </strong> {{tradingStatus}}</li>
                                        <li v-if="isin"><strong>ISIN: </strong> {{isin}}</li>
                                        <li v-if="cusip"><strong>CUSIP: </strong> {{cusip}}</li>
                                        <li v-if="companySubsidiaries.length"><strong>Name of Subsidiaries:</strong>
                                            <span v-for="(rc, rcIndex) in companySubsidiaries" :key="rcIndex">
                                              {{ nameWithComma(rc.name, rcIndex, companySubsidiaries.length) }}
                                            </span>
                                        </li>
                                        <li v-if="exchangeTradedOn.length"><strong>Domestic or International Exchange Traded On: </strong>
                                            <span v-for="(rc, rcIndex) in exchangeTradedOn" :key="rcIndex">
                                              {{ nameWithComma(rc.name, rcIndex, exchangeTradedOn.length) }}
                                            </span>
                                        </li>
                                        <li v-if="tickerSymbol"><strong>Ticker Symbol: </strong> {{tickerSymbol}}</li>


                                        <!-- Valuation & IP -->
                                        <li v-if="financingType.length"><strong>Type of Financing:</strong>
                                            <span v-for="(ip, ipIndex) in financingType" :key="ipIndex">
                                              {{ nameWithComma(ip.name, ipIndex, financingType.length) }}
                                            </span>
                                        </li>
                                        <li v-if="patentType.length"><strong>Type of Patents:</strong>
                                            <span v-for="(ip, ipIndex) in patentType" :key="ipIndex">
                                              {{ nameWithComma(ip.name, ipIndex, patentType.length) }}
                                            </span>
                                        </li>


                                        <!-- Company History -->
                                        <li v-if="companyHistories.formed_year"><strong>Company Formed: </strong> {{companyHistories.formed_year}}</li>
                                        <li v-if="companyHistories.first_product_or_service"><strong>First Product/Service: </strong> {{companyHistories.first_product_or_service}}</li>
                                        <li v-if="companyHistories.number_of_major_product"><strong>Number of Major Products / Services: </strong> {{companyHistories.number_of_major_product}}</li>
                                        <li v-if="companyHistories.change_direction_or_strategy == 1"><strong>Change in Direction or Strategy: </strong> Yes</li>
                                        <li v-else><strong>Change in Direction or Strategy: </strong> No</li>
                                        <li v-if="companyHistories.previous_product"><strong>Previous Product: </strong> {{companyHistories.previous_product}}</li>
                                        <li v-if="companyHistories.change_year"><strong>Year of Change: </strong> {{companyHistories.change_year}}</li>


                                        <!-- Corporate Action -->

                                        <li v-if="companyAcquisition.length"><strong>Acquisition Name & Year: </strong>
                                            <span v-for="(ip, ipIndex) in companyAcquisition" :key="ipIndex">
                                                {{ nameWithComma(ip.name+' - '+ip.year, ipIndex, companyAcquisition.length) }}
                                            </span>
                                        </li>                                        
                                        

                                        <li v-if="companySpinOffs.length"><strong>Spin Offs Acquisition Name & Year:</strong>
                                            <span v-for="(ip, ipIndex) in companySpinOffs" :key="ipIndex">
                                                {{ nameWithComma(ip.spinOff_acquisitions_name+' - '+ip.spinOff_acquisitions_year, ipIndex, companySpinOffs.length) }}
                                            </span>
                                        </li>                                       

                                        <li v-if="dividend"><strong>Dividend: </strong> Yes</li>
                                        <li v-else><strong>Dividend: </strong> No</li>


                                        <!-- Research Coverage -->
                                        <li v-if="researchFirmName"><strong>Research Firm Name: </strong> {{researchFirmName}}</li>

                                        <!-- Leadership and Governance -->
                                        <li v-if="boardMembers.length"><strong>Number Of Board Members: </strong>{{ boardMembers.length }}</li>
                                        <li v-if="boardMembers.length"><strong>Board Members:</strong><br>
                                            <span v-for="(ip, ipIndex) in boardMembers" :key="ipIndex">
                                                <template v-if="ip.role!=null">
                                                    {{ nameWithComma(ip.first_name+' '+ip.last_name+' ('+ip.role.name+') ', ipIndex, boardMembers.length) }}
                                                </template>
                                                <template v-else>
                                                    {{ nameWithComma(ip.first_name+' '+ip.last_name+'', ipIndex, boardMembers.length) }}
                                                </template>
                                            </span>
                                        </li>
                                        <li v-if="executives.length"><strong>Number Of Executives: </strong>{{ executives.length }}</li>
                                        <li v-if="executives.length"><strong>Executives:</strong>
                                            <span v-for="(ip, ipIndex) in executives" :key="ipIndex">
                                                <template v-if="ip.role!=null">
                                                    {{ nameWithComma(ip.first_name+' '+ip.last_name+' ('+ip.role.name+') ', ipIndex, executives.length) }}
                                                </template>
                                                <template v-else>
                                                    {{ nameWithComma(ip.first_name+' '+ip.last_name+'', ipIndex, boardMembers.length) }}
                                                </template>
                                            </span>
                                        </li>

                                        <li class="social-media-icon" v-if="companySocialMediaPlatform.length">
                                            <p class="mb-2"><strong>Social Media Channels:</strong></p>
                                            <template v-for="(platform, platformIndex) in companySocialMediaPlatform">
                                                <a :href="validateURL(platform.pivot.value)" target="_blank">
                                                    <div class="scoop-icon"
                                                         v-if="'scoop' == platform.url_validate_string">
                                                        <svg enable-background="new 0 0 128 128" id="Social_Icons"
                                                             version="1.1" viewBox="0 0 128 128" xml:space="preserve"
                                                             xmlns="http://www.w3.org/2000/svg"
                                                             xmlns:xlink="http://www.w3.org/1999/xlink"><g id="_x32__stroke"><g id="Scoopit"><rect clip-rule="evenodd" fill="none" fill-rule="evenodd" height="128" width="128"/><path
                                                            clip-rule="evenodd"
                                                            d="M83.622,90.814h16.529v15.89H83.622V90.814z     M44.126,20.568c-4.682,0.051-11.6,0.042-16.277,0l-0.028,14.168h16.291L44.126,20.568z M69.044,20.568l-16.553-0.009    l0.023,21.856L27.756,42.41l0.037,32.14l0.005,32.177h16.436l-0.047-52.974l8.295-0.005l-0.019,38.027    c0,1.919,0.117,3.833,0.364,5.737c0.686,5.471,3.025,8.295,8.108,9.304c5.602,1.111,11.992,0.537,17.612-0.065l0.023-11.32    c-0.378,0.009-3.776,0.009-4.15,0c-3.646-0.126-5.326-1.667-5.345-5.317L69.03,53.744l9.537,0.005l0.005-11.283l-9.551-0.005    L69.044,20.568z M83.617,38.605l2.259,44.441c3.3-0.065,8.762-0.047,12.062-0.014l2.236-44.585l0.042-17.893H83.608L83.617,38.605    z M0,128V0h128v128H0z"
                                                            fill="#000000" fill-rule="evenodd" id="Scoopit_1_"/></g></g></svg>
                                                    </div>
                                                    <div class="tiktok-icon"
                                                         v-else-if="'tiktok.com' == platform.url_validate_string">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                                            aria-hidden="true"
                                                            focusable="false" width="22px" height="22px"
                                                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                                                            <path
                                                                d="M16.708.027C18.453 0 20.188.016 21.921 0c.105 2.041.839 4.12 2.333 5.563c1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-.063-3.855-.463-5.6-1.291c-.76-.344-1.468-.787-2.161-1.24c-.009 3.896.016 7.787-.025 11.667c-.104 1.864-.719 3.719-1.803 5.255c-1.744 2.557-4.771 4.224-7.88 4.276c-1.907.109-3.812-.411-5.437-1.369C4.307 29.027 2.412 26.12 2.136 23a22.3 22.3 0 0 1-.016-1.984c.24-2.537 1.495-4.964 3.443-6.615c2.208-1.923 5.301-2.839 8.197-2.297c.027 1.975-.052 3.948-.052 5.923c-1.323-.428-2.869-.308-4.025.495a4.618 4.618 0 0 0-1.819 2.333c-.276.676-.197 1.427-.181 2.145c.317 2.188 2.421 4.027 4.667 3.828c1.489-.016 2.916-.88 3.692-2.145c.251-.443.532-.896.547-1.417c.131-2.385.079-4.76.095-7.145c.011-5.375-.016-10.735.025-16.093z"
                                                                fill="#626262"/>
                                                        </svg>
                                                    </div>
                                                    <i v-else :class="platform.icon_class"></i>
                                                </a>
                                            </template>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="" :class="dynamicColumnClass">
                        <div class="position-relative">
                            <b-tabs class="content-customized-tab">
                                <b-tab title="Video" @click="loadTabContent('video')" :active="activeTab === 0">
                                    <b-card-text>
                                        <!--Channel Search Section Video-->
                                        <div class="search-across-channel search-across-channel-company-share">
                                            <div class="input-group">
                                                <div class="input-group-append">
                                                <span class="btn dashboard-search-icon" @click="searchContent('video')">
                                                    <i class="fa fa-search"></i>
                                                </span>
                                                </div>
                                                <input type="text" class="form-control dashboard-search-input"
                                                       v-model="videoSearch"
                                                       @input="searchContent('video')"
                                                       placeholder="Search across your channel"/>
                                            </div>
                                        </div>
                                        <!--End-->
                                        <div class="table-responsive media-data-list">
                                            <div class="loader" v-if="contentLoading"></div>
                                            <table class="table issuer-content-table">
                                                <thead>
                                                <tr class="text-center">
                                                    <th class="text-left"></th>
                                                    <th>Classification</th>
                                                    <th>Video Title</th>
                                                    <th>Video Subject</th>
                                                    <th>Date</th>
                                                    <th>Views</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="(video, index) in videos">
                                                    <td>
                                                        <div class="video-thumb-table">
                                                            <router-link v-if='video.status == 2' link
                                                                         :to="{ name: 'ViewVideoDetails',params: { id: video.uuid }}">
                                                                <img
                                                                    :src="'https://view.vzaar.com/'+ video.video_id +'/image'"
                                                                    alt=""
                                                                    height="50" width="110"
                                                                    class="img img-responsive video-btn video-thumb">
                                                            </router-link>
                                                            <template v-else>
                                                                <img
                                                                    alt=" "
                                                                    height="50" width="110"
                                                                    class="img img-responsive video-btn video-thumb">
                                                            </template>
                                                        </div>
                                                    </td>

                                                    <td class="text-center link-color-blue">
                                                        <a href="javascript:;" @click="showAllTaxonomiesModal"
                                                           :data-video-id="video.id"
                                                           :data-uuid="video.uuid"
                                                           :data-taxonomy-id="video.taxonomy_id">View</a>

                                                    </td>
                                                    <td class="text-center media-title-td">{{video.name}}</td>
                                                    <td class="text-center link-color-blue">
                                                        <a href="javascript:;"
                                                           @click.prevent="showAllSubjectModal(video.subject_type, 'Video')">View</a>
                                                    </td>
                                                    <td class="text-center">{{video.publication_date}}</td>
                                                    <td class="text-center">{{numShortFormatter(video.view_counter)}}
                                                    </td>
                                                </tr>
                                                <tr v-if="! videos.length">
                                                    <td colspan="10" class="text-center">No video file found</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="10">
                                                        <pagination v-if="videoPagination.last_page > 1"
                                                                    :pagination="videoPagination" :offset="5"
                                                                    @paginate="getVideoList()"></pagination>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </b-card-text>
                                </b-tab>
                                <b-tab title="Audio" @click="loadTabContent('audio')" :active="activeTab === 1">
                                    <b-card-text>
                                        <!--Channel Search Section Audio-->
                                        <div class="search-across-channel search-across-channel-company-share">
                                            <div class="input-group">
                                                <div class="input-group-append">
                                            <span class="btn dashboard-search-icon" @click="searchContent('audio')">
                                                <i class="fa fa-search"></i>
                                            </span>
                                                </div>
                                                <input type="text" class="form-control dashboard-search-input"
                                                       v-model="audioSearch"
                                                       @input="searchContent('audio')"
                                                       placeholder="Search across your channel"/>
                                            </div>
                                        </div>
                                        <!--End-->
                                        <div class="table-responsive">
                                            <table class="table issuer-content-table media-data-list">
                                                <div class="loader" v-if="contentLoading"></div>
                                                <thead>
                                                <tr class="text-center">
                                                    <th class="text-left"></th>
                                                    <th>Classification</th>
                                                    <th>Audio Title</th>
                                                    <th>Audio Subject</th>
                                                    <th>Date</th>
                                                    <th>Listens</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="audio in audios">
                                                    <td>
                                                        <router-link link
                                                                     :to="{ name: 'ViewAudioDetails',params: { id: audio.uuid }}">
                                                            <img src="/images/audio_thumb.png" alt="" height="75"
                                                                 width="130">
                                                        </router-link>
                                                    </td>
                                                    <td class="text-center link-color-blue">
                                                        <a href="javascript:;" @click="showAllTaxonomiesModal"
                                                           :data-audio-id="audio.id"
                                                           :data-uuid="audio.uuid"
                                                           :data-taxonomy-id="audio.taxonomy_id">View</a>

                                                    </td>
                                                    <td class="text-center media-title-td">{{audio.name}}</td>
                                                    <td class="text-center link-color-blue">
                                                        <a href="javascript:;"
                                                           @click.prevent="showAllSubjectModal(audio.subject_type, 'Audio')">View</a>
                                                    </td>
                                                    <td class="text-center">{{audio.publication_date}}</td>
                                                    <td class="text-center">{{numShortFormatter(audio.view_counter)}}
                                                    </td>
                                                </tr>

                                                <tr v-if="! audios.length">
                                                    <td colspan="9" class="text-center">No audio file found</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="9">
                                                        <pagination v-if="audioPagination.last_page > 1"
                                                                    :pagination="audioPagination" :offset="5"
                                                                    @paginate="getAudioList()"></pagination>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </b-card-text>
                                </b-tab>

                                <b-tab title="Company Classifications" @click="loadTabContent('classification')"
                                       :active="activeTab === 2">
                                    <div class="text-center mt-4 mb-5">
                                        <!--<div class="mx-auto categorization-container" v-if="! hideCatContainer">
                                            <div class="inner">
                                                <b-card
                                                    no-body
                                                    class="pb-3 border-0 d-inline-block categorization-item"
                                                    v-for="(each,index) in multipleNodes"
                                                    :key="each.categorization_id"
                                                >
                                                    <ExistingTaxonomyNodeCollapses v-bind:each="each" :objectIndex="index" hideEditButtion="true"></ExistingTaxonomyNodeCollapses>

                                                    &lt;!&ndash;<router-link class="btn btn-theme-purple-dashboard edit-taxonomy" link
                                                                 :to="{ name: 'EditCompanyTaxonomy',params: { id: each.categorization_id }}"><i
                                                        class="fas fa-pencil-alt"></i> Edit Taxonomy
                                                    </router-link>&ndash;&gt;

                                                </b-card>
                                            </div>
                                        </div>-->
                                        <div class="row mx-auto w-100" v-if="! hideCatContainer">
                                            <div
                                                no-body
                                                class="border-0 col-lg-3 col-md-4 pb-3"
                                                v-for="(each,index) in multipleNodes"
                                                :key="each.categorization_id"
                                            >
                                                <CompanyNodeCollapses v-bind:each="each" :objectIndex="index"
                                                                      :enableEditButton="enableEditButton"></CompanyNodeCollapses>

                                            </div>
                                        </div>
                                        <div class="text-left" v-if="hideCatContainer">Company classifications not
                                            found
                                        </div>
                                    </div>
                                </b-tab>
                            </b-tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <loader :is-visible="isLoading"></loader>
        <!-- All Taxonomies modal started -->
        <b-modal centered ref="all-taxonomies-modal" id="all-taxonomies-modal" size="xl" hide-footer
                 title="All Classifications">
            <div class="row mx-auto w-100 text-center modal-classifications-container">
                <div
                    no-body
                    class="border-0 col-lg-3 col-md-4 pb-3"
                    v-for="(each,index) in mediaHierarchyInfo"
                    :key="each.categorization_id"
                >
                    <CompanyNodeCollapses v-bind:each="each" :objectIndex="index"
                                          :enableEditButton="enableEditButton"></CompanyNodeCollapses>

                </div>
            </div>
        </b-modal>
        <!-- End All Taxonomies modal -->
        <!--show All Subject Modal-->
        <b-modal
            id="modalAllSubject"
            ref="modalAllSubject"
            :title="allSubjectModalTitle"
            centered
            hide-footer>
            <ul>
                <li v-for="mediaSubject in selectedMediaSubject">{{mediaSubject.name}}</li>
            </ul>
        </b-modal>
        <!--Share Link Copy modal Modal-->
        <b-modal
            id="modalShareLink"
            ref="modalShareLink"
            title="Share"
            centered
            hide-footer>
            <b-input-group>
                <b-form-input v-model="publicShareLink" class="shared-link" ref="sharedLink" readonly></b-form-input>
                <b-input-group-append>
                    <b-button size="sm" variant="outline-primary" @click.prevent="copyShareLink"
                              class="font-weight-bold shared-link-copy-btn">Copy
                    </b-button>
                </b-input-group-append>
            </b-input-group>
            <small class="font-weight-bold text-success mb-0" v-if="isCopied">Copied!</small>
        </b-modal>
        <b-modal centered ref="message-modal" size="md" hide-footer>
            <template #modal-header>
                <div class="w-100">
                    <h5 class="modal-title modal-title-new">Internal Message</h5>
                    <b-button class="message-modal-close close float-right" @click="closeMessageModal">x</b-button>
                </div>
            </template>
            <InternalMessage :receiverCompanyId="companyId" @internalMessageSuccess="closeMessageModal"></InternalMessage>
        </b-modal>
    </div>
</template>

<script>
    import Content from "../apis/Content";
    import loader from '../components/Loader'
    import Common from "../apis/Common";
    import CompanyNodeCollapses from "../components/CompanyNodeCollapses";

    export default {
        data: function () {
            return {
                companyId: "",
                icon: "",
                name: "",
                address: "",
                phoneNumber: "",
                companyDescription: "",
                companyIndustry: "",
                cfo: "",
                esgScore: [],
                ownedBusiness: [],
                founders: [],
                salesContact: "",
                investorContact: "",
                businessDevContact: "",
                strategicPartnership: [],
                vendors: [],
                topCompetitors: "",
                domicileCountry: "",
                tradingStatus: "",
                isin: "",
                cusip: "",
                financingType: [],
                patentType: [],
                companyHistories: "",
                companyAcquisition: [],
                companySpinOffs: [],
                dividend: "",
                companySubsidiaries: [],
                msciRating: [],
                sustainalyticsRating: [],
                cdpRating: [],
                issRating: [],
                researchFirmName: "",
                boardMembers: [],
                executives: [],
                exchangeTradedOn: [],
                tickerSymbol: "",
                entityType: "",
                ceo: "",
                recentValuation: "",
                numberOfEmployee: "",
                numberOfShareholder: "",
                baseCurrency: "",
                conglomerate: "",
                conductedFinancing: "",
                researchCoverage: "",
                auditedFinancials: "",
                intellectualProperty: [],
                publicPrivateType: "",
                companySocialMediaPlatform: [],
                isLoading: false,
                slug: this.$route.params.slug,
                loggedInSlug: localStorage.companySlugName,
                publicShareLink: "",
                isCopied: false,
                companyName: "",
                isLoggedIn: false,
                dynamicColumnClass: 'col-lg-9',

                activeTab: 0,
                videoSearch: "",
                audioSearch: "",
                audios: [],
                videos: [],
                audioTabContentLoaded: false,
                videoTabContentLoaded: false,
                classificationTabContentLoaded: false,
                contentLoading: false,
                videoPagination: {
                    'current_page': 1
                },
                audioPagination: {
                    'current_page': 1
                },
                allSubjectModalTitle: "",
                selectedMediaSubject: [],
                mediaHierarchyInfo: "",
                isCopied: false,
                multipleNodes: [],
                hideCatContainer: false,
                companyNotFound: false,
                enableEditButton: false,
                userId: null,
                senderCompanyId: null,
            }
        },
        methods: {
            getCompanyBio() {
                Content.companyBio(this.slug)
                    .then((response) => {
                        this.isLoading = false
                        var bioData = response.data.data;
                        console.log(bioData);
                        this.companyId = bioData.id;
                        this.entityType = bioData.entityType;
                        this.phoneNumber = bioData.phone_number;
                        this.name = bioData.name;
                        if (!!bioData.headquarters) {
                            var addressOne = (!!bioData.headquarters.address.street_address_one) ? bioData.headquarters.address.street_address_one + ', ' : '';
                            var addressTwo = (!!bioData.headquarters.address.street_address_two) ? bioData.headquarters.address.street_address_two + ', ' : ''
                            var city = (!!bioData.headquarters.address.city) ? bioData.headquarters.address.city + ', ' : '';
                            var state = (!!bioData.headquarters.address.states) ? bioData.headquarters.address.states.name + ', '
                                : (!!bioData.headquarters.address.province) ? bioData.headquarters.address.province + ', ' : '';
                            var zip = (!!bioData.headquarters.address.zip) ? bioData.headquarters.address.zip + ', ' : '';
                            var country = (!!bioData.headquarters.address.country) ? bioData.headquarters.address.country.name : '';
                            this.address = addressOne + addressTwo + city + state + zip + country;
                        }
                        this.ceo = (bioData.ceo != null) ? bioData.ceo : '';
                        this.numberOfEmployee = (bioData.numberof_employees != null) ? bioData.numberof_employees.name : '';
                        this.numberOfShareholder = (bioData.numberof_shareholders != null) ? bioData.numberof_shareholders.name : '';
                        this.baseCurrency = (bioData.base_currency != null) ? bioData.base_currency.name : '';
                        this.recentValuation = (bioData.recent_valuation != null) ? bioData.recent_valuation : '';
                        this.auditedFinancials = (bioData.audited_financials != null) ? bioData.audited_financials ? 'Yes' : 'No' : '';
                        this.conglomerate = (bioData.conglomerate != null) ? bioData.conglomerate ? 'Yes' : 'No' : '';
                        this.conductedFinancing = (bioData.conducted_financing_six_month != null) ? bioData.conducted_financing_six_month ? 'Yes' : 'No' : '';
                        this.publicPrivateType = (bioData.public_private_type != null) ? bioData.public_private_type.name : '';
                        this.intellectualProperty = (bioData.intellectual_property != null) ? bioData.intellectual_property : '';
                        this.researchCoverage = (bioData.research_coverage != null) ? bioData.research_coverage : '';
                        this.companySocialMediaPlatform = (bioData.company_social_media_platform != null) ? bioData.company_social_media_platform : '';
                        this.icon = (!!bioData.icon) ? bioData.storage_path + '/company_icon/' + bioData.icon : ""
                        this.companyDescription = (!!bioData.company_description != null) ? bioData.company_description : '';
                        this.cfo = (bioData.cfo != null) ? bioData.cfo : '';
                        this.companyIndustry = (bioData.company_industry != null) ? bioData.company_industry.description : '';
                        this.esgScore = (bioData.esg_score != null) ? bioData.esg_score : '';
                        this.ownedBusiness = (bioData.owned_business != null) ? bioData.owned_business : '';
                        this.founders = (bioData.founders != null) ? bioData.founders : '';

                        let salesDepEmail = (bioData.sales_department_email != null) ? bioData.sales_department_email + ', ' : '';
                        let salesDepPhone = (bioData.sales_dept_phone != null) ? bioData.sales_dept_phone : '';
                        this.salesContact = salesDepEmail + salesDepPhone;

                        let investorEmail = (bioData.investor_relations_department_email != null) ? bioData.investor_relations_department_email + ', ' : '';
                        let investorPhone = (bioData.investor_relation_contact_phone != null) ? bioData.investor_relation_contact_phone : '';
                        this.investorContact = investorEmail + investorPhone;

                        let businessDevEmail = (bioData.business_development_contact_email != null) ? bioData.business_development_contact_email + ', ' : '';
                        let businessDevPhone = (bioData.business_development_contact_phone != null) ? bioData.business_development_contact_phone : '';
                        this.businessDevContact = businessDevEmail + businessDevPhone;

                        this.strategicPartnership = (bioData.partnerships != null) ? bioData.partnerships : '';
                        this.vendors = (bioData.vendors != null) ? bioData.vendors : '';
                        this.topCompetitors = (bioData.top_competitors != null) ? bioData.top_competitors : '';

                        this.domicileCountry = (bioData.domicile_country != null) ? bioData.domicile_country.name : '';
                        this.tradingStatus = (bioData.trading_status != null) ? bioData.trading_status.name : '';
                        this.isin = (bioData.isin != null) ? bioData.isin : '';
                        this.cusip = (bioData.cusip != null) ? bioData.cusip : '';
                        this.financingType = (bioData.financing_type != null) ? bioData.financing_type : '';
                        this.patentType = (bioData.patent_type != null) ? bioData.patent_type : '';
                        this.companyHistories = (bioData.company_histories != null) ? bioData.company_histories : '';
                        this.companyAcquisition = (bioData.company_acquisition != null) ? bioData.company_acquisition : '';
                        this.companySpinOffs = (bioData.company_spin_offs != null) ? bioData.company_spin_offs : '';
                        this.dividend = (bioData.dividend_issued != null) ? bioData.dividend_issued : '';
                        this.companySubsidiaries = (bioData.company_subsidiaries != null) ? bioData.company_subsidiaries : '';
                        this.msciRating = (bioData.msci_rating != null) ? bioData.msci_rating : '';
                        this.sustainalyticsRating = (bioData.sustainalytics_rating != null) ? bioData.sustainalytics_rating : '';
                        this.cdpRating = (bioData.cdp_rating != null) ? bioData.cdp_rating : '';
                        this.issRating = (bioData.iss_rating != null) ? bioData.iss_rating : '';
                        this.researchFirmName = (bioData.research_firm_name != null) ? bioData.research_firm_name : '';
                        this.boardMembers = (bioData.board_members != null) ? bioData.board_members : '';
                        this.executives = (bioData.executives != null) ? bioData.executives : '';
                        this.exchangeTradedOn = (bioData.exchange_traded_on != null) ? bioData.exchange_traded_on : '';
                        this.tickerSymbol = (bioData.ticker_symbol != null) ? bioData.ticker_symbol : '';

                    })
                    .catch(error => {
                        console.log(error);
                        this.isLoading = false
                        if (error.response.status === 404) {
                            this.companyNotFound = true
                        }
                    });
            },
            getAudioList(clearPage = false) {
                if (clearPage) {
                    this.audioPagination.current_page = 1;
                    this.contentLoading = true
                } else {
                    this.isLoading = true
                }
                Content.companyBioAudioList(this.audioPagination.current_page, this.slug, this.audioSearch)
                    .then((response) => {
                        this.isLoading = false
                        this.contentLoading = false
                        this.audios = [],
                            this.audios = response.data.data.data.data;
                        this.audioPagination = response.data.data.pagination;
                    })
                    .catch(error => {
                        if (!!error.response) {
                            this.isLoading = false
                            this.contentLoading = false
                            if (error.response.status == 401) {
                                this.$emit('logout')
                            }
                        }
                    });
            },
            getVideoList(clearPage = false) {
                if (clearPage) {
                    this.videoPagination.current_page = 1;
                    this.contentLoading = true
                } else {
                    this.isLoading = true
                }
                Content.companyBioVideoList(this.videoPagination.current_page, this.slug, this.videoSearch)
                    .then((response) => {
                        this.isLoading = false
                        this.contentLoading = false
                        this.videos = [];
                        this.videos = response.data.data.data.data;
                        this.videoPagination = response.data.data.pagination;
                    })
                    .catch(error => {
                        if (!!error.response) {
                            this.isLoading = false
                            this.contentLoading = false
                            if (error.response.status == 401) {
                                this.$emit('logout')
                            }
                        }
                    });
            },
            getHierarchyInfo: function (slug) {
                axios.get('/api/company-bio-multiple-node/' + slug)
                    .then((response) => {
                        this.multipleNodes = response.data.data;
                        if (this.multipleNodes.length < 1) {
                            this.hideCatContainer = true;
                        }
                    })
                    .catch(error => {
                    });
            },
            loadTabContent: function (type) {

                switch (type) {
                    case 'video':
                        if (!this.videoTabContentLoaded) {
                            this.getVideoList();
                            this.videoTabContentLoaded = true
                        }
                        this.activeTab = 0
                        break;
                    case 'audio':
                        if (!this.audioTabContentLoaded) {
                            this.getAudioList();
                            this.audioTabContentLoaded = true
                        }
                        this.activeTab = 1
                        break;
                    case 'classification':
                        if (!this.classificationTabContentLoaded) {
                            this.getHierarchyInfo(this.slug)
                            this.classificationTabContentLoaded = true
                        }
                        this.activeTab = 2
                        break;
                }
            },
            searchContent: function (type) {
                if ('video' == type) {
                    this.getVideoList('clearPage')
                } else if ('audio' == type) {
                    this.getAudioList('clearPage')
                }
            },
            showAllSubjectModal: function (data, type) {
                this.allSubjectModalTitle = "Subjects of Company " + type
                this.selectedMediaSubject = data
                this.$bvModal.show('modalAllSubject');
            },
            showAllTaxonomiesModal: function (event) {
                this.isLoading = true
                this.mediaHierarchyInfo = []
                axios.get('/api/get-media-categorization-lookup-for-collapse?id=' + event.target.getAttribute('data-taxonomy-id') + '&uuid=' + event.target.getAttribute('data-uuid'))
                    .then((response) => {
                        this.mediaHierarchyInfo = response.data.data
                        this.$refs['all-taxonomies-modal'].show()
                        this.isLoading = false
                    })
                    .catch(error => {
                        this.isLoading = false
                        if (error.response.status === 422) {
                            toastr.error(error.response.data.error.message)
                        } else if (error.response.status == 401) {
                            this.$emit('logout')
                        } else {
                            toastr.error(error)
                        }
                    });
            },
            shareMediaLink: function (slugName) {
                this.$bvModal.show('modalShareLink');
                this.publicShareLink = document.location.origin + '/company/' + slugName;
            },
            copyShareLink: function () {
                this.$refs.sharedLink.select();
                document.execCommand('copy');
                this.isCopied = true;
                setTimeout(() => {
                    this.isCopied = !this.isCopied
                }, 3000);
            },
            nameWithComma(name, index, totalElement) {
                if (index !== totalElement - 1) {
                    return `${name},`;
                } else {
                    return name;
                }
            },
            validateURL: function (link) {
                if (link.indexOf("http://") == 0 || link.indexOf("https://") == 0) {
                    return link;
                } else {
                    return 'https://' + link;
                }
            },
            backToPrevious: function () {
                history.back();
            },
            closeMessageModal() {
                this.$refs['message-modal'].hide()
            },
            showMessageModal() {
                this.$refs['message-modal'].show()
            },
        },
        computed: {
            currentPageSlug() {
                return this.$route.params.slug
            }
        },
        created: function () {
            this.numShortFormatter = Common.ViewListenNumFormatter;
            this.getCompanyBio()
            this.getVideoList();
            this.videoTabContentLoaded = true

            if(localStorage.userid) {
                this.userId = localStorage.userid;
                this.senderCompanyId = JSON.parse(localStorage.getItem("info")).company_id;
            }
        },
        mounted() {
            this.isLoggedIn = !!localStorage.getItem("token");
            if (this.isLoggedIn) {
                this.dynamicColumnClass = 'col-lg-9'
            }
        },
        components: {
            pagination: () => import("../components/PaginationComponent"),
            loader,
            // ExistingTaxonomyNodeCollapses,
            CompanyNodeCollapses,
            InternalMessage: () => import("../components/InternalMessage"),
        }
    };
</script>
<style lang="scss">
    .company-profile-share-info {
        width: auto;
        height: 768px;
        overflow: scroll;

        .bio-content ul li {
            font-size: 14px;
            margin-bottom: 15px;
        }

        .bio-content ul li.social-media-icon i {
            padding: 8px;
            font-size: 22px;
        }

        li.social-media-icon .scoop-icon, li.social-media-icon .tiktok-icon {
            display: inline-flex;
            height: 22px;
            margin: 0 7px;
        }
    }
</style>
<style>
    .search-across-channel-company-share {
        width: 40% !important;
    }

    .video-thumb {
        background-size: 50px 50px;
        background-position: center;
    }
</style>
<style scoped>
    .loader { /* Loader Div Class */
        position: absolute;
        top: 0px;
        right: 0px;
        width: 100%;
        height: 100%;
        background-color: #eceaea;
        background-image: url(/images/small-loader.gif);
        background-size: 50px;
        background-repeat: no-repeat;
        background-position: center;
        z-index: 10000000;
        opacity: 0.4;
        filter: alpha(opacity=40);
    }
    .back-to-previous {
        border: none;
        background-color: #1e0857;
        font-size: 14px;
        padding: 10px;
        color: #FFFFFF;
    }

    .link-color-blue a{
        color: #2f80ed;
    }

    .message-button {
        max-width: 200px;
        margin-bottom: 10px;
    }

    .message-button:hover {
        cursor: pointer;
        color: #1e0857;
    }
</style>
