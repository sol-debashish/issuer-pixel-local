<template>
    <div class="container-fluid px-0">
        <div class="row collapse show no-gutters d-flex h-100 position-relative">
            <div class="col mx-auto">
                <div class="card">
                    <div class="card-body">
                        <div class="mb-3">
                            <span @click.prevent="shareMediaLink" role="button">
                            <i class="fa fa-share-alt"></i> <strong class="text-theme-dark-blue">SHARE</strong>
                            </span>
                            <router-link :to="'/company/' + companySlugName +'/preview'" class="ml-3" target="_blank"><i
                                class="fas fa-eye text-black"></i> <strong class="text-theme-dark-blue">PREVIEW</strong>
                            </router-link>
                            <span @click="startPdfGenerate" class="ml-3" role="button">
                                <i class="far fa-file-pdf"></i> <strong
                                class="text-theme-dark-blue">EXPORT TO PDF</strong>
                            </span>
                        </div>
                        <b-tabs v-model="tabIndex"
                                active-nav-item-class="text-primary"
                                active-tab-class=""
                                class="customized-tab customized-company-profile-tab"
                                content-class="mt-3">

                            <b-tab @click="loadTabContent('profile')" :active="activeTab === 0"
                                   title-item-class="text-center">
                                <template #title>
                                    General {{generalProgress}}%
                                    <!--                                    <p class="general-complete percent-complete mb-0">{{generalProgress}}% Complete</p>-->
                                </template>
                                <CompanyProfile @generalFormChanged="changeDetectedGeneral" @logout="logout" ref="profileComponent"></CompanyProfile>
                            </b-tab>

                            <b-tab @click="loadTabContent('executives')" :active="activeTab === 1"
                                   title-item-class="text-center">
                                <template #title>
                                    Company Contacts {{contactProgress}}%
                                    <!--                                    <p class="contact-complete percent-complete mb-0">{{contactProgress}}% Complete</p>-->
                                </template>
                                <CompanyExecutives @contactFormChanged="changeDetectedContact" ref="executiveComponent"></CompanyExecutives>
                            </b-tab>
                            <b-tab @click="loadTabContent('companyType')" :active="activeTab === 2"
                                   title-item-class="text-center">
                                <template #title>
                                    Company Structure {{structureProgress}}%
                                    <!--                                    <p class="structure-complete percent-complete mb-0">{{structureProgress}}% Complete</p>-->
                                </template>
                                <CompanyTypes @companyStructureFormChanged="changeDetectedStructure" ref="companyTypeComponent"></CompanyTypes>
                            </b-tab>
                            <b-tab @click="loadTabContent('finance')" :active="activeTab === 3"
                                   title-item-class="text-center">
                                <template #title>
                                    Valuation & IP {{valuationProgress}}%
                                    <!--                                    <p class="valuation-complete percent-complete mb-0">{{valuationProgress}}% Complete</p>-->
                                </template>
                                <CompanyFinances @companyValuation="changeDetectedValuation" ref="financesComponent"></CompanyFinances>
                            </b-tab>
                            <b-tab @click="loadTabContent('social')" :active="activeTab === 4"
                                   title-item-class="text-center">
                                <template #title>
                                    Social Presence {{socialProgress}}%
                                    <!--                                    <p class="social-complete percent-complete mb-0">{{socialProgress}}% Complete</p>-->
                                </template>
                                <CompanySocials @companySocial="changeDetectedSocial" ref="socialComponent"></CompanySocials>
                            </b-tab>
                            <b-tab @click="loadTabContent('taxonomy')" :active="activeTab === 5"
                                   title-item-class="text-center">
                                <template #title>
                                    Classification {{taxonomyProgress}}%
                                    <!--                                    <p class="taxonomy-complete percent-complete mb-0">{{taxonomyProgress}}% Complete</p>-->
                                </template>
                                <router-link v-if="taxonomyTabViewCondition =='show'" link :to="{ name: ''}"
                                             @click.native="LoadAddCategorization()"
                                             class="mb-3 btn btn-back-next float-left company-profile-right-btn">Add
                                    Classification
                                </router-link>
                                <CompanyTaxonomy v-if="taxonomyTabViewCondition =='show'" ref="taxonomyComponent"
                                                 @getCategorizationId="getCategorizationId"></CompanyTaxonomy>
                                <AddEditCompanyTaxonomy v-else ref="taxonomyAddEditComponent" :updatedId="updatedId"
                                                        @childAction="GetAddEditCallbackActions"></AddEditCompanyTaxonomy>

                                <!--<div class="mt-3">
                                    <router-link link :to="{ name: 'AddCompanyTaxonomy'}"
                                                 class="btn btn-theme-primary float-right company-profile-right-btn">Add Categorization
                                    </router-link>
                                </div>-->
                            </b-tab>
                            <b-tab @click="loadTabContent('history')" :active="activeTab === 6"
                                   title-item-class="text-center">
                                <template #title>
                                    Company History {{ historyProgress }}%
                                </template>
                                <CompanyHistory @companyHistory="changeDetectedHistory" ref="historyComponent"></CompanyHistory>
                            </b-tab>
                            <b-tab @click="loadTabContent('corporateAction')" :active="activeTab === 7"
                                   title-item-class="text-center">
                                <template #title>
                                    Corporate Actions {{ corporateActionProgress }}%
                                </template>
                                <CorporateActions @corporateAction="changeDetectedCorporateAction" ref="corporateActionsComponent"></CorporateActions>
                            </b-tab>
                            <b-tab @click="loadTabContent('leadershipGovernance')" :active="activeTab === 8"
                                   title-item-class="text-center">
                                <template #title>
                                    Leadership and Governance {{ leadershipGovernanceProgress }}%
                                </template>
                                <LeadershipAndGovernence
                                    ref="LeadershipAndGovernanceComponent"></LeadershipAndGovernence>
                            </b-tab>
                            <b-tab @click="loadTabContent('researchCoverage')" :active="activeTab === 9"
                                   title-item-class="text-center">
                                <template #title>
                                    Research Coverage
                                </template>
                                <ResearchCoverage
                                    ref="researchCoverageContentLoaded"></ResearchCoverage>
                            </b-tab>
                        </b-tabs>
                    </div>
                </div>
            </div>
            <!--Share Link Copy modal Modal-->
            <b-modal
                id="modalShareLink"
                ref="modalShareLink"
                title="Share"
                size="lg"
                centered
                hide-footer>
                <share-modal :publicShareLink="this.publicShareLink"></share-modal>
            </b-modal>
<!--            <CompanyDetailsPdf :slug="companySlugName" ref="pdfView" @pdfGenerated="pdfGenerated"></CompanyDetailsPdf>-->
        </div>
        <loader :is-visible="isLoading"></loader>
    </div>
</template>

<script>
    import User from "../apis/User"
    import CompanyProfile from "../components/company/CompanyProfile"
    import CompanyExecutives from "../components/company/CompanyExecutives"
    import CompanyTypes from "../components/company/CompanyTypes"
    import CompanyFinances from "../components/company/CompanyFinances"
    import CompanySocials from "../components/company/CompanySocial"
    import CompanyTaxonomy from "../components/company/CompanyTaxonomy"
    import AddEditCompanyTaxonomy from "../components/company/AddEditCompanyTaxonomy"
    import CompanyHistory from "../components/company/CompanyHistory"
    import CorporateActions from "../components/company/CorporateActions"
    import LeadershipAndGovernence from "../components/company/LeadershipAndGovernence"
    import ResearchCoverage from "../components/company/ResearchCoverage"
    import ChatMessages from "../apis/ChatMessages";
    // import CompanyDetailsPdf from "./CompanyDetailsPdf" socialFlag

    export default {
        beforeRouteLeave (to, from, next) {
            if(this.generalFlag === true || this.contactFlag === true || this.structureFlag === true || this.ValuationFlag === true || this.socialFlag === true || this.historyFlag === true || this.corporateActionFlag === true){
                const answer = $.confirm({
                    title: 'It looks like you have unsaved data, If you leave before saving, your changes will be lost !!',
                    content: '<hr class="m-0">',
                    titleClass: 'font-weight-bold text-center confirm-modal-title',
                    columnClass: 'medium',
                    animateFromElement: false,
                    closeAnimation: 'scale',
                    bgOpacity: 0.6,
                    buttons: {
                        Continue: {
                            btnClass: 'btn-danger rounded-pill text-capitalize',
                            action: function () {
                                if (answer) {
                                    next()
                                } else {
                                    next(false)
                                }
                            }
                        },
                        Cancel: {
                            btnClass: 'btn-default rounded-pill text-capitalize'
                        }
                    }
                });

            }else{
                next()
            }

        },
        name: "CompanyQuestionnairesDetails",

        data() {
            return {
                activeTab: 0,
                tabIndex: 1,
                generalProgress: 0,
                contactProgress: 0,
                structureProgress: 0,
                valuationProgress: 0,
                socialProgress: 0,
                taxonomyProgress: 0,
                historyProgress: 0,
                corporateActionProgress: 0,
                leadershipGovernanceProgress: 0,
                progressPercentage: "",
                executiveTabContentLoaded: false,
                companyTypeTabContentLoaded: false,
                financeTabContentLoaded: false,
                socialTabContentLoaded: false,
                taxonomyTabContentLoaded: false,
                historyTabContentLoaded: false,
                corporateActionsTabContentLoaded: false,
                leadershipGovernanceTabContentLoaded: false,
                researchCoverageTabContentLoaded: false,
                countMountedCall: 0,
                publicShareLink: "",
                taxonomyTabViewCondition: "show",
                updatedId: null,
                enableClassificationsEditButton: false,
                companyUuid: null,
                companySlugName: '',
                isLoading: false,

                generalFlag: false,
                contactFlag: false,
                structureFlag: false,
                ValuationFlag: false,
                socialFlag: false,
                historyFlag: false,
                corporateActionFlag: false,
            };
        },
        methods: {
            changeDetectedGeneral(value){
                    this.generalFlag = value;
            },changeDetectedContact(value){
                    this.contactFlag = value;
            },changeDetectedStructure(value){
                    this.structureFlag = value;
            },changeDetectedValuation(value){
                    this.ValuationFlag = value;
            },changeDetectedSocial(value){
                    this.socialFlag = value;
            },changeDetectedHistory(value){
                    this.historyFlag = value;
            },changeDetectedCorporateAction(value){
                    this.corporateActionFlag = value;
            },
            LoadAddCategorization: function () {
                this.taxonomyTabViewCondition = "add";
                this.taxonomyTabContentLoaded = false;
            },
            GetAddEditCallbackActions: function (action) {
                this.isLoading = false;
                if (action == 'cancel') {
                    this.taxonomyTabViewCondition = "show";
                    this.updatedId = null;
                    let vi = this;
                    setTimeout(function () {
                        vi.loadTabContent('taxonomy');
                    }, 500)

                }
            },
            getCategorizationId: function (Id) {
                this.updatedId = Id;
                this.taxonomyTabViewCondition = "add";
                this.taxonomyTabContentLoaded = false;
            },
            logout: function () {
                this.$emit('logout')
            },
            goBackToPageTop: function () {
                $(document).ready(function () {
                    $(this).scrollTop(0);
                });
            },
            loadTabContent: function (type) {
                this.goBackToPageTop();
                switch (type) {
                    case 'profile':
                        this.activeTab = 0
                        break;
                    case 'executives':
                        this.activeTab = 1
                        if (!this.executiveTabContentLoaded) {
                            this.$refs.executiveComponent.loadComponentData();
                            this.executiveTabContentLoaded = true
                        }
                        break;
                    case 'companyType':
                        this.activeTab = 2
                        if (!this.companyTypeTabContentLoaded) {
                            this.$refs.companyTypeComponent.loadComponentData();
                            this.companyTypeTabContentLoaded = true
                        }
                        break;
                    case 'finance':
                        this.activeTab = 3
                        if (!this.financeTabContentLoaded) {
                            this.$refs.financesComponent.loadComponentData();
                            this.financeTabContentLoaded = true
                        }
                        break;
                    case 'social':
                        this.activeTab = 4
                        if (!this.socialTabContentLoaded) {
                            this.$refs.socialComponent.loadComponentData();
                            this.socialTabContentLoaded = true
                        }
                        break;
                    case 'taxonomy':
                        this.activeTab = 5
                        if (!this.taxonomyTabContentLoaded) {
                            this.$refs.taxonomyComponent.getHierarchyInfo('', '');
                            this.taxonomyTabContentLoaded = true
                        }
                        break;
                    case 'history':
                        this.activeTab = 6
                        if (!this.historyTabContentLoaded) {
                            this.$refs.historyComponent.loadComponentData();
                            this.historyTabContentLoaded = true
                        }
                        break;
                    case 'corporateAction':
                        this.activeTab = 7
                        if (!this.corporateActionsTabContentLoaded) {
                            this.$refs.corporateActionsComponent.loadComponentData();
                            this.corporateActionsTabContentLoaded = true
                        }
                        break;
                    case 'leadershipGovernance':
                        this.activeTab = 8
                        if (!this.leadershipGovernanceTabContentLoaded) {
                            this.$refs.LeadershipAndGovernanceComponent.loadComponentData();
                            this.leadershipGovernanceTabContentLoaded = true
                        }
                        break;
                        case 'researchCoverage':
                        this.activeTab = 9
                        if (!this.researchCoverageTabContentLoaded) {
                            this.$refs.researchCoverageContentLoaded.loadComponentData();
                            this.researchCoverageTabContentLoaded = true
                        }
                        break;
                }
            },
            getCompanyInfo: function () {
                User.getCompanyInfo()
                    .then((response) => {
                        this.isLoading = false;
                        this.generalProgress = this.calculateProfileStepsPercentage(15, response.data.data.general_info);
                        this.contactProgress = this.calculateProfileStepsPercentage(15, response.data.data.contact);
                        this.structureProgress = this.calculateProfileStepsPercentage(15, response.data.data.structure);
                        this.valuationProgress = this.calculateProfileStepsPercentage(15, response.data.data.valuation);
                        this.socialProgress = this.calculateProfileStepsPercentage(15, response.data.data.social_presence);
                        this.taxonomyProgress = this.calculateProfileStepsPercentage(25, response.data.data.hierarchy);
                        this.historyProgress = this.calculateProfileStepsPercentage(10, response.data.data.history);
                        this.corporateActionProgress = this.calculateProfileStepsPercentage(20, response.data.data.corporate_action);
                        this.leadershipGovernanceProgress = this.calculateProfileStepsPercentage(30, response.data.data.leadership_governance);
                        this.progressPercentage = response.data.data;
                    })
                    .catch((error) => {
                        this.isLoading = false;
                        if (error.response.status == 401) {
                            this.$emit("logout");
                        }
                    });
            },
            calculateProfileStepsPercentage: function (internalPercentage, completedPercentage) {
                return Math.ceil(completedPercentage * 100 / internalPercentage);
            },
            shareMediaLink: function () {
                this.$bvModal.show('modalShareLink');
                this.publicShareLink = document.location.origin + '/company/' + localStorage.getItem('companySlugName');
            },
            /*startPdfGenerate() {
                this.isLoading = true;
                this.$refs.pdfView.makePdf();
            },*/
            startPdfGenerate() {
                let instance = this;
                this.isLoading = true;
                $.ajaxSetup({
                    headers: {Authorization: 'Bearer '+ localStorage.getItem("token")}
                });
                $.ajax({
                    type: 'GET',
                    url: '/api/generate-company-pdf',
                    data: {'company_slug': instance.companySlugName, 'company_uuid': instance.companyUuid},
                    xhrFields: {
                        responseType: 'blob'
                    },
                    success: function (response) {
                        instance.isLoading = false;
                        let blob = new Blob([response]),
                            link = document.createElement('a');
                        link.href = window.URL.createObjectURL(blob);
                        link.download = instance.companySlugName + (new Date()).toISOString().split('T')[0] + ".pdf";
                        link.click();
                        toastr.success('pdf successfully generated');
                    },
                    error: function (xhr, status, err) {
                        if (xhr.status == 401) {
                            this.$emit("logout");
                        } else {
                            toastr.error('There is an error occur');
                        }
                    }
                });
            },
            pdfGenerated() {
                this.isLoading = false;
            }
        },
        mounted: function () {
            if (this.$route.hash) {
                this.loadTabContent(this.$route.hash.substring(1));
            }
        },
        created: function () {
            this.companyUuid = localStorage.getItem('companyUuid');
            this.companySlugName = localStorage.getItem('companySlugName');
            this.goBackToPageTop();
            this.getCompanyInfo();
        },
        components: {
            CompanyProfile,
            CompanyExecutives,
            CompanyTypes,
            CompanyFinances,
            CompanySocials,
            CompanyTaxonomy,
            AddEditCompanyTaxonomy,
            CompanyHistory,
            CorporateActions,
            LeadershipAndGovernence,
            ResearchCoverage,
            ShareModal: () => import("../components/ShareModal"),
            // CompanyDetailsPdf,
            loader: () => import("../components/Loader")
        }
    }
</script>

