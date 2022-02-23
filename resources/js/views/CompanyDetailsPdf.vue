<template>
    <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="false"
        :paginate-elements-by-height="1400"
        filename="company-profile"
        :pdf-quality="2"
        :manual-pagination="true"
        pdf-format="a4"
        pdf-orientation="landscape"
        pdf-content-width="100%"
        :html-to-pdf-options="htmlToPdfOptions"

        @progress=""
        @hasStartedGeneration="hasStartedGeneration()"
        @hasDownloaded="hasDownloaded($event)"
        ref="html2Pdf">
        <section slot="pdf-content" class="pt-3 bg-white">
            <!-- PDF Content Here -->
            <div class="text-center"><img src="/images/issuerpixel_logo.png" alt=""></div>
            <div class="row collapse show no-gutters d-flex h-100 position-relative pt-3">
                <div class="col-lg-3">
                    <div class="company-profile-share-info mr-3 pb-5">
                        <h5 class="text-center mb-0">Company Profile</h5>
                        <div class="bio-content">
                            <div class="px-4">
                                <ul class="position-relative list-unstyled mt-3">
                                    <li class="font-weight-bold text-center">{{name}}</li>
                                    <li v-if="icon" class="text-center">
                                        <img :src="icon" alt="" class="company-profile-photo rounded-circle" width="80" height="80">
                                    </li>
                                    <li><i class="fas fa-map-marker-alt"></i>&nbsp; {{address}}</li>
                                    <li><i class="fas fa-phone-alt"></i> {{phoneNumber}}</li>
                                    <li v-if="publicPrivateType"><strong>Type: </strong> {{publicPrivateType}}</li>
                                    <li v-if="ceo"><strong>CEO: </strong> {{ceo}}</li>
                                    <li v-if="numberOfEmployee"><strong>Number of Employees:</strong> {{ numberOfEmployee}}</li>
                                    <li v-if="entityType"><strong>Legal Entity Type:</strong> {{entityType}}</li>
                                    <li v-if="numberOfShareholder"><strong>Number of Shareholders:</strong> {{numberOfShareholder}}</li>
                                    <li v-if="baseCurrency"><strong>Base Currency:</strong> {{baseCurrency}}</li>
                                    <li v-if="conglomerate"><strong>Conglomerate:</strong> {{conglomerate}}</li>
                                    <li v-if="conductedFinancing"><strong>Conducted Financing:</strong> {{conductedFinancing}}</li>
                                    <li v-if="auditedFinancials"><strong>Audited Financials:</strong> {{auditedFinancials}}</li>
                                    <li v-if="recentValuation"><strong>Most Recent Valuation:</strong> {{recentValuation}}</li>
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
                                    <li class="social-media-icon" v-if="companySocialMediaPlatform.length">
                                        <p class="mb-2"><strong>Social Media Channels:</strong></p>
                                        <template v-for="(platform, platformIndex) in companySocialMediaPlatform">
                                            <a :href="validateURL(platform.pivot.value)" target="_blank">
                                                <div class="scoop-icon" v-if="'scoop' == platform.url_validate_string">
                                                    <svg enable-background="new 0 0 128 128" id="Social_Icons"
                                                         version="1.1" viewBox="0 0 128 128" xml:space="preserve"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         xmlns:xlink="http://www.w3.org/1999/xlink"><g id="_x32__stroke"><g id="Scoopit"><rect clip-rule="evenodd" fill="none" fill-rule="evenodd" height="128" width="128"/><path
                                                        clip-rule="evenodd"
                                                        d="M83.622,90.814h16.529v15.89H83.622V90.814z     M44.126,20.568c-4.682,0.051-11.6,0.042-16.277,0l-0.028,14.168h16.291L44.126,20.568z M69.044,20.568l-16.553-0.009    l0.023,21.856L27.756,42.41l0.037,32.14l0.005,32.177h16.436l-0.047-52.974l8.295-0.005l-0.019,38.027    c0,1.919,0.117,3.833,0.364,5.737c0.686,5.471,3.025,8.295,8.108,9.304c5.602,1.111,11.992,0.537,17.612-0.065l0.023-11.32    c-0.378,0.009-3.776,0.009-4.15,0c-3.646-0.126-5.326-1.667-5.345-5.317L69.03,53.744l9.537,0.005l0.005-11.283l-9.551-0.005    L69.044,20.568z M83.617,38.605l2.259,44.441c3.3-0.065,8.762-0.047,12.062-0.014l2.236-44.585l0.042-17.893H83.608L83.617,38.605    z M0,128V0h128v128H0z"
                                                        fill="#000000" fill-rule="evenodd" id="Scoopit_1_"/></g></g></svg>
                                                </div>
                                                <div class="tiktok-icon" v-else-if="'tiktok.com' == platform.url_validate_string">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                     xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                                                     focusable="false" width="22px" height="22px"
                                                     preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path
                                                    d="M16.708.027C18.453 0 20.188.016 21.921 0c.105 2.041.839 4.12 2.333 5.563c1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-.063-3.855-.463-5.6-1.291c-.76-.344-1.468-.787-2.161-1.24c-.009 3.896.016 7.787-.025 11.667c-.104 1.864-.719 3.719-1.803 5.255c-1.744 2.557-4.771 4.224-7.88 4.276c-1.907.109-3.812-.411-5.437-1.369C4.307 29.027 2.412 26.12 2.136 23a22.3 22.3 0 0 1-.016-1.984c.24-2.537 1.495-4.964 3.443-6.615c2.208-1.923 5.301-2.839 8.197-2.297c.027 1.975-.052 3.948-.052 5.923c-1.323-.428-2.869-.308-4.025.495a4.618 4.618 0 0 0-1.819 2.333c-.276.676-.197 1.427-.181 2.145c.317 2.188 2.421 4.027 4.667 3.828c1.489-.016 2.916-.88 3.692-2.145c.251-.443.532-.896.547-1.417c.131-2.385.079-4.76.095-7.145c.011-5.375-.016-10.735.025-16.093z"
                                                    fill="#626262"/></svg>
                                                </div>
                                                <i v-else :class="platform.icon_class"></i>
                                            </a>
                                        </template>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    <!-- <div class="text-center mt-2">
                        <p v-if="isGeneratingPdf">Generating PDF...</p>
                        <button v-else @click="makePdf">Make PDF</button>
                    </div> -->
                </div>
                <div class="col-lg-9">
                    <div class="position-relative">
                        <h5 class="text-center mb-0">Company Classification</h5>
                        <div class="text-center bg-white mt-3">
                            <div class="row mx-auto w-100" v-if="! hideCatContainer">
                                <div
                                    no-body
                                    class="border-0 col-lg-4 col-md-4 pb-5"
                                    v-for="(each,index) in multipleNodes"
                                    :key="each.categorization_id"
                                >
                                    <CompanyCategorizationPdf v-bind:each="each" :objectIndex="index"></CompanyCategorizationPdf>

                                </div>
                            </div>
                            <div class="text-left" v-if="hideCatContainer">Company classifications not found</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </vue-html2pdf>
</template>

<script>
    import Content from "../apis/Content";
    import CompanyCategorizationPdf from "../components/CompanyCategorizationPdf";
    import VueHtml2pdf from 'vue-html2pdf';

    export default {
        props: ["slug"],
        data: function () {
            return {
                icon: "",
                name: "",
                address: "",
                phoneNumber: "",
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
                multipleNodes: [],
                hideCatContainer: false,
                htmlToPdfOptions: {
                    filename: "company-profile.pdf",
                    image: {
                        type: 'png',
                        quality: 2
                    },
                    enableLinks: true,
                    html2canvas: {
                        dpi: 300,
                        letterRendering: true,
                        useCORS: true
                    },
                    jsPDF: {
                        unit: 'mm',
                        format: 'a4',
                        orientation: 'landscape'
                    }
                },
                isGeneratingPdf: false,
            }
        },
        methods: {
            getCompanyBio(){
                Content.companyBio(this.slug)
                    .then((response) => {
                        var bioData = response.data.data;
                        this.entityType = bioData.entityType;
                        this.phoneNumber = bioData.phone_number;
                        this.name = bioData.name;

                        var addressOne = (!! bioData.headquarters.address.street_address_one)?bioData.headquarters.address.street_address_one + ', ':'';
                        var addressTwo = (!! bioData.headquarters.address.street_address_two) ? bioData.headquarters.address.street_address_two + ', ' : ''
                        var city = (!! bioData.headquarters.address.city)?bioData.headquarters.address.city + ', ':'';
                        var state = bioData.headquarters.address.states.name + ', ';
                        var zip =  (!! bioData.headquarters.address.zip)?bioData.headquarters.address.zip+ ', ':'';
                        var country =  bioData.headquarters.address.country.name;
                        this.address = addressOne + addressTwo + city + state + zip + country;
                        this.ceo = (bioData.ceo != null)?bioData.ceo:'';
                        this.numberOfEmployee = (bioData.numberof_employees != null)?bioData.numberof_employees.name:'';
                        this.numberOfShareholder = (bioData.numberof_shareholders != null)?bioData.numberof_shareholders.name:'';
                        this.baseCurrency = (bioData.base_currency != null)?bioData.base_currency.name:'';
                        this.recentValuation = (bioData.recent_valuation != null)?bioData.recent_valuation:'';
                        this.auditedFinancials = (bioData.audited_financials != null)?bioData.audited_financials ? 'Yes' : 'No':'';
                        this.conglomerate = (bioData.conglomerate != null)?bioData.conglomerate ? 'Yes' : 'No':'';
                        this.conductedFinancing = (bioData.conducted_financing_six_month != null)?bioData.conducted_financing_six_month ? 'Yes' : 'No':'';
                        this.publicPrivateType = (bioData.public_private_type != null)?bioData.public_private_type.name:'';
                        this.intellectualProperty = (bioData.intellectual_property != null)?bioData.intellectual_property:'';
                        this.researchCoverage = (bioData.research_coverage != null)?bioData.research_coverage:'';
                        this.companySocialMediaPlatform = (bioData.company_social_media_platform != null) ?bioData.company_social_media_platform:'';
                        this.icon =  (!! bioData.icon) ? bioData.storage_path +'/company_icon/'+ bioData.icon : ""
                    })
                    .catch(error => {
                        if (error.response.status === 404) {
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
            nameWithComma(name, index, totalElement) {
                if (index !== totalElement - 1) {
                    return `${name},`;
                } else {
                    return name;
                }
            },
            validateURL: function(link){
                if (link.indexOf("http://") == 0 || link.indexOf("https://") == 0) {
                    return link;
                }
                else{
                    return 'https://' + link;
                }
            },
            makePdf() {
                this.isGeneratingPdf = true;
                this.$refs.html2Pdf.generatePdf();
            },
            hasDownloaded(event) {
                this.isGeneratingPdf = false;
                toastr.success('PDF successfully generated.');
                this.$emit('pdfGenerated');
            }
        },
        created: function () {
            this.getCompanyBio()
            this.getHierarchyInfo(this.slug)
        },
        components: {
            CompanyCategorizationPdf,
            VueHtml2pdf
        }
    };
</script>
<style lang="scss">
    .company-profile-share-info{
        .bio-content ul li{
            font-size: 14px;
            margin-bottom: 15px;
        }
        .bio-content ul li.social-media-icon i{
            padding: 8px;
            font-size: 22px;
        }
        li.social-media-icon .scoop-icon, li.social-media-icon .tiktok-icon{
            display: inline-flex;
            height: 22px;
            margin: 0 7px;
        }
    }
</style>
<style>
    .vue-html2pdf section section.content-wrapper {
        padding: 0 !important;
    }
</style>
