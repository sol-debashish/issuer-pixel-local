<template>
    <div>
        <section class='screener pt-0'>
            <div class='row'>
                <div class='col-md-9'>
                    <div class='row'>
                        <div class="col pb-3">
                            <div class="input-group">
                                    <span class="input-group-prepend">
                                        <span class="btn dashboard-search-icon">
                                            <i class="fa fa-search"></i>
                                        </span>
                                      </span>
                                <input @keyup.enter="getSearchResult" type="text" v-model="form.searchStr" class="form-control" placeholder="Search across your channel">
                            </div>
                        </div>
                    </div>
                </div>
                <div class='col-md-3'>
                    <div class='row'>
                        <div class="col pb-3">
                        <datepicker input-class="form-control" v-model="form.publicationDate"
                                    :typeable="false"
                                    :clear-button="true"
                                    name="publicationDate"
                                    id="publicationDate"
                                    v-on:input="getSearchResult"
                                    format="MM/dd/yyyy" placeholder="MM/DD/YYYY"></datepicker>
                        </div>
                    </div>
                </div>
            </div>
            <div class='row'>
                <div class='col-md-2 mb-3'>
                    <div class='row'>
                        <div class="col-md-12">
                            <div class="text-center">
                                <h5 class='mb-3'>Industry Filter</h5>
                                <img class="text-center tree-image" src="/images/tree.png" alt="tree">
                            </div>
                            <div class='row state-container'>
                                        <div class="col-md-12">
                                            <label class="control-label">Industry</label>
                                            <v-select label="description"
                                                      class="form-control"
                                                      :options="industries" v-model="form.industry"
                                                      @input="getSectors(form.industry)"
                                                      placeholder="Select field"></v-select>
                                        </div>
                                        <div class="col-md-12">
                                            <label class="control-label">Sector</label>
                                            <v-select label="description"
                                                      class="form-control"
                                                      :options="sectors" v-model="form.sector"

                                                      ref="sector"
                                                      @input="getSubSectors(form.sector,'Input')"
                                                      placeholder="Select field"></v-select>
                                        </div>
                                        <div class="col-md-12">
                                            <label class="control-label">Sub Sector</label>
                                            <v-select label="description"
                                                      class="form-control"
                                                      :options="subSectors" v-model="form.subSector"
                                                      ref="subSector"
                                                      @input="getGroups(form.subSector)"
                                                      placeholder="Select field"></v-select>
                                        </div>
                                        <div class="col-md-12">
                                            <label class="control-label">Group</label>
                                            <v-select label="description"
                                                      class="form-control"
                                                      :options="groups"
                                                      ref="group"
                                                      v-model="form.group" @input="getSubGroups(form.group)"
                                                      placeholder="Select field">

                                            </v-select>
                                        </div>
                                        <div class="col-md-12">
                                            <label class="control-label">Sub Group</label>
                                            <v-select label="description"
                                                      class="form-control"
                                                      :options="subGroups" v-model="form.subGroup"
                                                      ref="subGroup"
                                                      @input="getEchelons(form.subGroup)"
                                                      placeholder="Select field"></v-select>
                                        </div>
                                        <div class="col-md-12">
                                            <label class="control-label">Echelon</label>
                                            <v-select label="description"
                                                      class="form-control"
                                                      :options="echelons" v-model="form.echelon"
                                                      @input="getSubEchelons(form.echelon)"
                                                      ref="echelon"
                                                      placeholder="Select field"></v-select>
                                        </div>
                                        <div class="col-md-12">
                                            <label class="control-label">Sub Echelon</label>
                                            <v-select label="description"
                                                      class="form-control"
                                                      :options="subEchelons" v-model="form.subEchelon"
                                                      @input="getTiers(form.subEchelon)"
                                                      placeholder="Select field"></v-select>
                                        </div>
                                        <div class="col-md-12">
                                            <label class="control-label">Tier</label>
                                            <v-select label="description"
                                                      class="form-control" :options="tiers" v-model="form.tier"

                                                      @input="getSubTiers(form.tier)"
                                                      ref="tier"
                                                      placeholder="Select field"></v-select>
                                        </div>
                                        <div class="col-md-12">
                                            <label class="control-label">Sub Tier</label>
                                            <v-select label="description"
                                                      class="form-control" :options="subTiers" v-model="form.subTier"
                                                      @input="getLayers(form.subTier)"
                                                      ref="subTier"
                                                      placeholder="Select field"></v-select>
                                        </div>
                                        <div class="col-md-12">
                                            <label class="control-label">Layer</label>
                                            <v-select label="description"
                                                      class="form-control" :options="layers" v-model="form.layer"
                                                      @input="getSubLayers(form.layer)"
                                                      ref="layer"
                                                      placeholder="Select field"></v-select>
                                        </div>
                                        <div class="col-md-12">
                                            <label class="control-label">Sub Layer</label>
                                            <v-select label="description"
                                                      class="form-control" :options="subLayers" v-model="form.subLayer"
                                                      @input="getDecks(form.subLayer)"
                                                      ref="subLayer"
                                                      placeholder="Select field"></v-select>
                                        </div>
                                        <div class="col-md-12">
                                            <label class="control-label">Deck</label>
                                            <v-select label="description"
                                                      class="form-control" :options="decks" v-model="form.deck"
                                                      @input="getSubDecks(form.deck)"
                                                      ref="deck"
                                                      placeholder="Select field"></v-select>
                                        </div>
                                        <div class="col-md-12">
                                            <label class="control-label">Sub Deck</label>
                                            <v-select label="description"
                                                      class="form-control" :options="subDecks" v-model="form.subDeck"
                                                      @input="getFloors(form.subDeck)"
                                                      ref="subDeck"
                                                      placeholder="Select field"></v-select>
                                        </div>
                                        <div class="col-md-12">
                                            <label class="control-label">Floor</label>
                                            <v-select label="description"
                                                      class="form-control" :options="floors" v-model="form.floor"
                                                      @input="getSubFloors(form.floor)"
                                                      ref="floor"
                                                      placeholder="Select field"></v-select>
                                        </div>
                                        <div class="col-md-12">
                                            <label class="control-label">Sub Floor</label>
                                            <v-select label="description"
                                                      class="form-control" :options="subFloors" v-model="form.subFloor"
                                                      @input="getBasements(form.subFloor)"
                                                      ref="subFloor"
                                                      placeholder="Select field"></v-select>
                                        </div>
                                        <div class="col-md-12">
                                            <label class="control-label">Basement</label>
                                            <v-select label="description"
                                                      class="form-control" :options="basements" v-model="form.basement"
                                                      @input="getSubBasements(form.basement)"
                                                      ref="basement"
                                                      placeholder="Select field"></v-select>
                                        </div>
                                        <div class="col-md-12">
                                            <label class="control-label">Sub Basement</label>
                                            <v-select label="description"
                                                      class="form-control" :options="subBasements"
                                                      v-model="form.subBasement"
                                                      @input="getMines(form.subBasement)"
                                                      ref="subBasement"
                                                      placeholder="Select field"></v-select>
                                        </div>
                                        <div class="col-md-12">
                                            <label class="control-label">Mine</label>
                                            <v-select label="description"
                                                      class="form-control" :options="mines" v-model="form.mine"
                                                      @input="getSubMines(form.mine)"
                                                      ref="mine"
                                                      placeholder="Select field"></v-select>
                                        </div>
                                        <div class="col-md-12">
                                            <label class="control-label">Sub Mine</label>
                                            <v-select label="description"
                                                      class="form-control" :options="subMines" v-model="form.subMine"
                                                      @input="subMinesChange"
                                                      ref="subMine"
                                                      placeholder="Select field"></v-select>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>
                <div class='col-md-10'>
                    <div class='row'>
                        <div class='col-md-12'>
                            <h5 class='border-bottom pb-4'>Company Characteristics</h5>
                            <div class='row state-container'>
                                <div class="col-md-3 search-field form-group">
                                    <label class="control-label">Organizational Structure</label>
                                    <v-select
                                        label="name"
                                        class="form-control"
                                        name="entityType"
                                        :options="entityTypes"
                                        ref="entityType"
                                        v-model="form.entityType"
                                        @input="getSearchResult"
                                        placeholder="Select Below">
                                    </v-select>
                                </div>
                                <div class="col-md-3 search-field form-group">
                                    <label class="control-label">Private Company Type</label>
                                    <v-select label="name"
                                              :options="privatePublicCompanyTypes"
                                              class="form-control"
                                              v-model="form.tradingAndReportingStatus"
                                              placeholder="Select Below"
                                              @input="getTradingAndReportingStatusList(form.tradingAndReportingStatus)"
                                    ></v-select>
                                </div>
                                <div class="col-md-3 search-field form-group">
                                    <label class="control-label">Trading and Reporting Status</label>
                                    <v-select label="name"
                                              :options="tradingAndReportingStatusList"
                                              class="form-control"
                                              v-model="form.publicPrivateReportingStatus"
                                              placeholder="Select Below"
                                              @input="getSearchResult"
                                    ></v-select>
                                </div>
                                <div class="col-md-3 search-field form-group">
                                    <label class="control-label">Shareholders</label>
                                    <v-select label="name" :options="shareholderNumberList"
                                              class="form-control"
                                              placeholder="Select Below"
                                              ref="shareholderNumber"
                                              v-model="form.shareholderNumber"
                                              @input="getSearchResult"
                                    >
                                    </v-select>
                                </div>
                            </div>
                            <div class='row state-container'>

                                <div class="col-md-3 search-field form-group">
                                    <label class="control-label">Base Currency</label>
                                    <v-select label="name" :options="baseCurrencyList"
                                              class="form-control"
                                              placeholder="Select Below"
                                              ref="baseCurrency"
                                              v-model="form.baseCurrency"
                                              @input="getSearchResult"
                                    ></v-select>
                                </div>
                                <div class="col-md-3 search-field form-group">
                                    <label class="control-label">Conglomerate</label>
                                    <v-select :options="[{label: 'YES', id: 1},{label: 'NO', id: 0}]"
                                              placeholder="Select Below"
                                              class="form-control"
                                              ref="conglomerate"
                                              v-model="form.conglomerate"
                                              :reduce="option => option.id"
                                              @input="getSearchResult"
                                    ></v-select>
                                </div>
                                <div class="col-md-3 search-field form-group">
                                <label class="control-label">Research Coverage</label>
                                <v-select label="name"
                                          class="form-control"
                                          :options="researchCoverageTypeList"
                                          placeholder="Select Below"
                                          v-model="form.researchCoverageType"
                                          @input="getSearchResult"
                                ></v-select>
                            </div>
                                <div class="col-md-3 search-field form-group">
                                    <label class="control-label">Intellectual Property</label>
                                    <v-select label="name"
                                              class="form-control"
                                              :options="intelletualPropertyList"
                                              placeholder="Select Below"
                                              ref="intelletualProperty"
                                              v-model="form.intelletualProperty"
                                              @input="getSearchResult"
                                    ></v-select>
                                </div>
                            </div>
                            <div class='row state-container'>
                                <div class="col-md-3 search-field form-group">
                                    <label class="control-label">Type of Financing</label>
                                    <v-select label="name"
                                              class="form-control"
                                              :options="financingTypeList"
                                              placeholder="Select Below"
                                              @input="getSearchResult"
                                              v-model="form.financingType">
                                    </v-select>
                                </div>
                                <div class="col-md-3 search-field form-group">
                                    <label class="control-label">Most Recent Valuation</label>
                                    <input type="text"
                                           class="form-control recent-valuation"
                                           placeholder="Type in a number"
                                           autocomplete="off"
                                           v-model="form.companyValuation"
                                           @keyup.enter="getSearchResult"
                                           @keypress="stripTheGarbage($event)"
                                           @blur="formatDollars()"
                                           @focus="formatDollarsToNumber()"
                                           />
                                </div>
                                <div class="col-md-3 search-field form-group">
                                    <label class="control-label">Audited Financials</label>
                                    <v-select label="labelAu"
                                              :options="[{labelAu: 'YES', audit_id: 1},{labelAu: 'NO', audit_id: 0}]"
                                              class="form-control"
                                              placeholder="Select Below"
                                              v-model="form.auditedFinance"
                                              :reduce="audit => audit.audit_id"
                                              @input="getSearchResult"
                                    ></v-select>
                                </div>
                                <div class="col-md-3 search-field form-group">
                                    <label class="control-label">Conducting Financing last 6 months?</label>
                                    <v-select :options="[{label: 'YES', id: 1}, {label: 'NO', id: 0}]"
                                              placeholder="Select Below"
                                              class="form-control"
                                              ref="conductFinancing"
                                              v-model="form.conductFinancing"
                                              :reduce="conduct => conduct.id"
                                              @input="getSearchResult"
                                    ></v-select>
                                </div>
                            </div>

                            <div class='row search-result-container'>
                                <div class="loader" v-if="contentLoading"></div>
                                <div v-for="(data, index) in searchResult" class="col-md-3 card-wrapper">
                                    <div class='card'>
                                        <router-link  link :to="{ name: data.routeName ,params: {slug:data.companySlug, id: data.mediaUuid }}">
                                        <span class="bg_content_photo" v-bind:style="{ 'background-image': 'url(' + data.fileThumb + ')' }"></span>
                                        </router-link>
                                        <div class='card-body'>
                                            <img  class="rounded-circle float-left mr-2 mb-5" :src="data.companyImage" width="25" height="25" />
                                            <p class="warp-text-title">{{data.name}}</p>
                                            <div class="company-title warp-text-title">
                                                {{data.companyName}}
                                            </div>
                                            <ul class="content-ul">
                                                <li>{{numShortFormatter(data.viewCounter)}} Views</li>
                                                <li>{{data.createdAt}}</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-12" v-if="! searchResult">
                                        No Search Result.
                                </div>
                                <div class="col-md-12">
                                    <pagination :pagination="contentPagination"
                                                v-if="contentPagination.last_page > 1"
                                                :offset="5"
                                                @paginate="getSearchResult(false)"></pagination>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    import vSelect from 'vue-select'
    import Common from '../apis/Common'
    export default {
        data() {
            return {
                industries: [],
                sectors: [],
                subSectors: [],
                groups: [],
                subGroups: [],
                echelons: [],
                subEchelons: [],
                tiers: [],
                subTiers: [],
                layers: [],
                subLayers: [],
                decks: [],
                subDecks: [],
                floors: [],
                subFloors: [],
                basements: [],
                subBasements: [],
                mines: [],
                subMines: [],
                entityTypes: [],
                privatePublicCompanyTypes: [],
                tradingAndReportingStatusList: [],
                shareholderNumberList: [],
                baseCurrencyList: [],
                researchCoverageTypeList: [],
                intelletualPropertyList: [],
                financingTypeList: [],
                searchResult: [],
                contentLoading: false,
                contentPagination: {
                    'current_page': 1
                },
                form: {
                    industry: "",
                    sector: "",
                    subSector: "",
                    group: "",
                    subGroup: "",
                    echelon: "",
                    subEchelon: "",
                    tier: "",
                    subTier: "",
                    layer: "",
                    subLayer: "",
                    deck: "",
                    subDeck: "",
                    floor: "",
                    subFloor: "",
                    basement: "",
                    subBasement: "",
                    mine: "",
                    subMine: "",
                    entityType: "",
                    tradingAndReportingStatus: "",
                    publicPrivateReportingStatus: "",
                    shareholderNumber: "",
                    baseCurrency: "",
                    conglomerate: "",
                    researchCoverageType: "",
                    intelletualProperty: "",
                    conductFinancing: "",
                    financingType: "",
                    companyValuation: "",
                    auditedFinance: "",
                    searchStr: "",
                    publicationDate: "",
                },
            };
        },
        methods: {
            getIndustries: async function () {
                axios.get('/api/industry-list')
                    .then(response => {
                        this.industries = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            getSectors: async function (value) {
                this.getSearchResult()
                if (value != null || value != undefined) {
                     axios.get('/api/get-node-list/' + value.id + '/Sector/Industry')
                        .then(response => {
                            this.sectors = response.data.data;
                        })
                        .catch(error => console.log(error))
                }
                this.clearNodeValue('sectors');
            },
            getSubSectors: async function (value) {
                this.getSearchResult()
                if (value != null || value != undefined) {

                     axios.get('/api/get-node-list/' + value.id + '/SubSector/Sector')
                        .then(response => {
                            this.subSectors = response.data.data
                        })
                        .catch(error => console.log(error))
                }
                this.clearNodeValue('subSectors');
            },
            getGroups: async function (value) {
                this.getSearchResult()
                if (value != null || value != undefined) {
                     axios.get('/api/get-node-list/' + value.id + '/Group/SubSector')
                        .then(response => {
                            this.groups = response.data.data
                        })
                        .catch(error => console.log(error))
                }
                this.clearNodeValue('groups');
            },
            getSubGroups: async function (value) {
                this.getSearchResult()
                if (value != null || value != undefined) {

                     axios.get('/api/get-node-list/' + value.id + '/SubGroup/Group')
                        .then(response => {
                            this.subGroups = response.data.data
                        })
                        .catch(error => console.log(error))
                }
                this.clearNodeValue('subGroups');
            },
            getEchelons: async function (value) {
                this.getSearchResult()
                if (value != null || value != undefined) {
                     axios.get('/api/get-node-list/' + value.id + '/Echelon/SubGroup')
                        .then(response => {
                            this.echelons = response.data.data
                        })
                        .catch(error => console.log(error))
                }
                this.clearNodeValue('echelons');
            },
            getSubEchelons: async function (value) {
                this.getSearchResult()
                if (value != null || value != undefined) {
                     axios.get('/api/get-node-list/' + value.id + '/SubEchelon/Echelon')
                        .then(response => {
                            this.subEchelons = response.data.data
                        })
                        .catch(error => console.log(error))
                }
                this.clearNodeValue('subEchelons');
            },
            getTiers: async function (value) {
                this.getSearchResult()
                if (value != null || value != undefined) {
                     axios.get('/api/get-node-list/' + value.id + '/Tier/SubEchelon')
                        .then(response => {
                            this.tiers = response.data.data
                        })
                        .catch(error => console.log(error))
                }
                this.clearNodeValue('tiers');
            },
            getSubTiers: async function (value) {
                this.getSearchResult()
                if (value != null || value != undefined) {
                     axios.get('/api/get-node-list/' + value.id + '/SubTier/Tier')
                        .then(response => {
                            this.subTiers = response.data.data
                        })
                        .catch(error => console.log(error))
                }
                this.clearNodeValue('subTiers');
            },
            getLayers: async function (value) {
                this.getSearchResult()
                if (value != null || value != undefined) {
                     axios.get('/api/get-node-list/' + value.id + '/Layer/SubTier')
                        .then(response => {
                            this.layers = response.data.data
                        })
                        .catch(error => console.log(error))
                }
                this.clearNodeValue('layers');
            },
            getSubLayers: async function (value) {
                this.getSearchResult()
                if (value != null || value != undefined) {
                    axios.get('/api/get-node-list/' + value.id + '/SubLayer/Layer')
                        .then(response => {
                            this.subLayers = response.data.data
                        })
                        .catch(error => console.log(error))
                }
                this.clearNodeValue('subLayers');
            },
            getDecks: async function (value) {
                this.getSearchResult()
                if (value != null || value != undefined) {
                     axios.get('/api/get-node-list/' + value.id + '/Deck/SubLayer')
                        .then(response => {
                            this.decks = response.data.data
                        })
                        .catch(error => console.log(error))
                }
                this.clearNodeValue('decks');
            },
            getSubDecks: async function (value) {
                this.getSearchResult()
                if (value != null || value != undefined) {
                     axios.get('/api/get-node-list/' + value.id + '/SubDeck/Deck')
                        .then(response => {
                            this.subDecks = response.data.data
                        })
                        .catch(error => console.log(error))
                }
                this.clearNodeValue('subDecks');
            },
            getFloors: async function (value) {
                this.getSearchResult()
                if (value != null || value != undefined) {

                     axios.get('/api/get-node-list/' + value.id + '/Floor/SubDeck')
                        .then(response => {
                            this.floors = response.data.data
                        })
                        .catch(error => console.log(error))
                }
                this.clearNodeValue('floors');
            },
            getSubFloors: async function (value) {
                this.getSearchResult()
                if (value != null || value != undefined) {
                     axios.get('/api/get-node-list/' + value.id + '/SubFloor/Floor')
                        .then(response => {
                            this.subFloors = response.data.data
                        })
                        .catch(error => console.log(error))
                }
                this.clearNodeValue('subFloors');
            },
            getBasements: async function (value) {
                this.getSearchResult()
                if (value != null || value != undefined) {
                     axios.get('/api/get-node-list/' + value.id + '/Basement/SubFloor')
                        .then(response => {
                            this.basements = response.data.data
                        })
                        .catch(error => console.log(error))
                }
                this.clearNodeValue('basements');
            },
            getSubBasements: async function (value) {
                this.getSearchResult()
                if (value != null || value != undefined) {

                     axios.get('/api/get-node-list/' + value.id + '/SubBasement/Basement')
                        .then(response => {
                            this.subBasements = response.data.data
                        })
                        .catch(error => console.log(error))
                }
                this.clearNodeValue('subBasements');
            },
            getMines: async function (value) {
                this.getSearchResult()
                if (value != null || value != undefined) {
                     axios.get('/api/get-node-list/' + value.id + '/Mine/SubBasement')
                        .then(response => {
                            this.mines = response.data.data
                        })
                        .catch(error => console.log(error))
                }
                this.clearNodeValue('mines');
            },
            getSubMines: async function (value) {
                this.getSearchResult()
                if (value != null || value != undefined) {
                     axios.get('/api/get-node-list/' + value.id + '/SubMine/Mine')
                        .then(response => {
                            this.subMines = response.data.data
                        })
                        .catch(error => console.log(error))
                }
                this.clearNodeValue('subMines');
            },
            subMinesChange: function (value) {
                this.getSearchResult()
            },
            clearNodeValue: function (expression) {
                switch (expression) {
                        case 'industry':
                            this.form.industry = '';
                            this.sectors = [];
                        case 'sectors':
                            this.form.sector = '';
                            this.subSectors = [];
                        case 'subSectors':
                            this.form.subSector = '';
                            this.groups = [];
                        case 'groups':
                            this.form.group = '';
                            this.subGroups = [];
                        case 'subGroups':
                            this.form.subGroup = '';
                            this.echelons = [];
                        case 'echelons':
                            this.form.echelon = '';
                            this.subEchelons = [];
                        case 'subEchelons':
                            this.form.subEchelon = '';
                            this.tiers = [];
                        case 'tiers':
                            this.form.tier = '';
                            this.subTiers = [];
                        case 'subTiers':
                            this.form.subTier = '';
                            this.layers = [];
                        case 'layers':
                            this.form.layer = '';
                            this.subLayers = [];
                        case 'subLayers':
                            this.form.subLayer = '';
                            this.decks = [];
                        case 'decks':
                            this.form.deck = '';
                            this.subDeck = [];
                        case 'subDecks':
                            this.form.subDeck = '';
                            this.floors = [];
                        case 'floors':
                            this.form.floor = '';
                            this.subFloors = [];
                        case 'subFloors':
                            this.form.subFloor = '';
                            this.basements = [];
                        case 'basements':
                            this.form.basement = '';
                            this.subBasements = [];
                        case 'subBasements':
                            this.form.subBasement = '';
                            this.mines = [];
                        case 'mines':
                            this.form.mine = '';
                            this.subMines = [];
                        case 'subMines':
                            this.form.subMine = '';
                    }
            },
            getEntityTypeList: async function () {
                return axios.get('/api/get-entity-type/1')
                    .then(response => {
                        this.entityTypes = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            getPrivatePublicCompanyType: function () {
                axios.get('/api/get-private-public-company-type')
                    .then(response => {
                        this.privatePublicCompanyTypes = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            getTradingAndReportingStatusList: async function (value) {
                this.tradingAndReportingStatusList = []
                this.form.publicPrivateReportingStatus = ''
                this.getSearchResult()
                if (value != null) {
                    axios.get('/api/get-trading-and-reporting-status-list/' + value.id)
                        .then(response => {
                            // this.form.publicPrivateReportingStatus = 0;
                            this.tradingAndReportingStatusList = response.data.data
                        })
                        .catch(error => console.log(error))
                }
            },
            getShareholderNumberList: async function () {
                return axios.get('/api/get-shareholder-number-list')
                    .then(response => {
                        this.shareholderNumberList = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            getBaseCurrencyList: function () {
                axios.get('/api/get-base-currency-list')
                    .then(response => {
                        this.baseCurrencyList = response.data.data
                    })
                    .catch(error => console.log(error))
            },
            getResearchCoverageTypeList: async function () {
                 axios.get('/api/get-research-coverage-type-list')
                    .then(response => {
                        this.researchCoverageTypeList = response.data.data

                    })
                    .catch(error => console.log(error))
            },
            getIntelletualPropertyList: async function () {
                 axios.get('/api/get-intelletual-property-list')
                    .then(response => {
                        this.intelletualPropertyList = response.data.data

                    })
                    .catch(error => console.log(error))
            },
            getFinancingTypeList: async function () {
                 axios.get('/api/get-financing-type-list')
                    .then(response => {
                        this.financingTypeList = response.data.data

                    })
                    .catch(error => console.log(error))
            },
            getSearchResult : function(clearPage = true){
                if (clearPage) {
                    this.contentPagination.current_page = 1;
                }
                this.contentLoading = true
                const params = new URLSearchParams();
                params.append('searchStr', this.form.searchStr);
                params.append('publicationDate', (!!this.form.publicationDate) ? this.dateConvert(this.form.publicationDate) : "");
                params.append('entityType', (!!this.form.entityType) ? this.form.entityType.id : "");
                params.append('tradingAndReportingStatus', (!!this.form.tradingAndReportingStatus) ? this.form.tradingAndReportingStatus.id : "");
                params.append('publicPrivateReportingStatus', (!!this.form.publicPrivateReportingStatus) ? this.form.publicPrivateReportingStatus.id : "");
                params.append('shareholderNumber', (!!this.form.shareholderNumber) ? this.form.shareholderNumber.id : "");
                params.append('baseCurrency', (!!this.form.baseCurrency) ? this.form.baseCurrency.id : "");
                params.append('conglomerate', (null != this.form.conglomerate) ? this.form.conglomerate : "");
                params.append('researchCoverageType', (!!this.form.researchCoverageType) ? this.form.researchCoverageType.id : "");
                params.append('intelletualProperty', (!!this.form.intelletualProperty) ? this.form.intelletualProperty.id : "");
                params.append('financingType', (!!this.form.financingType) ? this.form.financingType.id : "");
                params.append('companyValuation', this.form.companyValuation.replace(/\D/g,''));
                params.append('auditedFinance', (null != this.form.auditedFinance) ? this.form.auditedFinance : "");
                params.append('conductFinancing', (null != this.form.conductFinancing) ? this.form.conductFinancing : "");
                params.append('page', this.contentPagination.current_page);
                params.append('industry', (!!this.form.industry) ? this.form.industry.id : "");

                params.append('sector', (!!this.form.sector) ? this.form.sector.id : "");
                params.append('subSector', (!!this.form.subSector) ? this.form.subSector.id : "");

                params.append('group', (!!this.form.group) ? this.form.group.id : "");
                params.append('subGroup', (!!this.form.subGroup) ? this.form.subGroup.id : "");

                params.append('echelon', (!!this.form.echelon) ? this.form.echelon.id : "");
                params.append('subEchelon', (!!this.form.subEchelon) ? this.form.subEchelon.id : "");

                params.append('tier', (!!this.form.tier) ? this.form.tier.id : "");
                params.append('subTier', (!!this.form.subTier) ? this.form.subTier.id : "");

                params.append('layer', (!!this.form.layer) ? this.form.layer.id : "");
                params.append('subLayer', (!!this.form.subLayer) ? this.form.subLayer.id : "");

                params.append('deck', (!!this.form.deck) ? this.form.deck.id : "");
                params.append('subDeck', (!!this.form.subDeck) ? this.form.subDeck.id : "");

                params.append('floor', (!!this.form.floor) ? this.form.floor.id : "");
                params.append('subFloor', (!!this.form.subFloor) ? this.form.subFloor.id : "");

                params.append('basement', (!!this.form.basement) ? this.form.basement.id : "");
                params.append('subBasement', (!!this.form.subBasement) ? this.form.subBasement.id : "");

                params.append('mine', (!!this.form.mine) ? this.form.mine.id : "");
                params.append('subMine', (!!this.form.subMine) ? this.form.subMine.id : "");

                axios.get('/api/screener-data',{
                    params: params
                })
                .then(response => {
                    this.contentLoading = false
                    this.searchResult = response.data.data.content
                    this.contentPagination = response.data.data.pagination

                })
                .catch(error => {
                    this.contentLoading = false
                    if (error.response.status === 422) {
                        toastr.error(error.response.data.error.message)
                    }
                });
            },
            stripTheGarbage(e) {
                if (e.keyCode < 48 && e.keyCode !== 46 || e.keyCode > 59) {
                    e.preventDefault()
                }
            },
            formatDollars() {
                if (this.form.companyValuation != '' && this.form.companyValuation != null) {
                    var num = this.form.companyValuation;
                    num = Number(num);

                    var countDecimals = function (value) {
                        if (Math.floor(value) === value) return 0;
                        return value.toString().split(".")[1].length || 0;
                    }

                    var decimal = countDecimals(num);

                    /*if (decimal < 2) {
                        num = num.toFixed(2)
                    }

                    if (decimal > 2) {
                        num = num.toFixed(decimal)
                    }

                    if (parseInt(num) < 1) {
                        num = "." + String(num).split(".")[1];
                    }

                    this.form.companyValuation = '$'+ num.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');*/

                    if (decimal > 0) {
                        num = num.toFixed(0)
                    }
                    this.form.companyValuation = String.fromCharCode(parseInt("36", 10)) + String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                }
            },
            formatDollarsToNumber() {
                if (this.form.companyValuation != null) {
                    var num = this.form.companyValuation.replace(/,/g, "");
                    var thenum = num.replace(/^\D+/g, '');
                    thenum = Math.trunc(thenum)
                    this.form.companyValuation = (thenum != 0) ? thenum : '';
                }
            },
        },
        created: function () {
            this.dateConvert = Common.dateConvert;
            this.numShortFormatter = Common.ViewListenNumFormatter;
            this.getIndustries();
            this.getEntityTypeList();
            this.getPrivatePublicCompanyType();
            this.getTradingAndReportingStatusList();
            this.getShareholderNumberList();
            this.getBaseCurrencyList();
            this.getResearchCoverageTypeList();
            this.getIntelletualPropertyList();
            this.getFinancingTypeList();
        },
        components: {
            Datepicker,
            vSelect,
            pagination: () => import("../components/PaginationComponent"),

        },
    }
</script>
<style lang="scss">
    .screener{
        .vs--single {
            &:not(.vs--open) .vs__selected + .vs__search {
                // force this to not use any space
                // we still need it to be rendered for the focus
                width: 0;
                padding: 0;
                margin: 0;
                border: none;
                height: 0;
            }

            .vs__selected-options {
                // do not allow growing
                width: 0;
            }

            .vs__selected {
                /*display: block;*/
                white-space: nowrap;
                text-overflow: ellipsis;
                max-width: 100%;
                overflow: hidden;
            }
        }

        .dashboard-search-icon{
            z-index: 0 !important;
        }
        .tree-image{
            width: 50%;
        }
        ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            color: #cecece;
        }
        ::-moz-placeholder { /* Firefox 19+ */
            color: #cecece;
        }
        :-ms-input-placeholder { /* IE 10+ */
            color: #cecece;
        }
        :-moz-placeholder { /* Firefox 18- */
            color: #cecece;
        }
        .form-control{
            height: auto !important;
        }
        .form-control.recent-valuation{
            padding: 0.75rem 0.75rem !important;
            font-size: 0.75rem;
        }
        .form-group {
            margin-bottom: 0;
        }
        .vs__dropdown-toggle{
            border: 0px !important;
        }
        .control-label{
            font-weight: 700;
            font-size: 12px;
        }
        .vs__selected, .vs__search, .vs__dropdown-menu{
            font-size: 12px !important;
        }
        .vs__search{
            z-index: 0;
        }
        .search-field{
            padding : 5px;
        }
        .search-result-container{
            border-radius: 0.75rem;
            margin-top: 10px;
            .card-body{
                p{
                    font-size: 0.75rem;
                    color: rgba(30, 8, 87, 0.8);
                    margin-bottom: 2px;
                }
                .warp-text-title{
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    max-width: 150px;
                }
            }
            .card-wrapper{
                padding : 5px;

                .card{
                    max-height: 230px;
                }
            }
            .company-title, ul.pagination{
                font-size:  0.625rem;
                color : #6a666d;
            }
            ul.content-ul{
                display: inline-flex;
                font-size: 0.625rem;
                color : #8a878d;
                padding-left: 0px;
                li:not(:last-child) {
                    padding-right: 12px;
                }
                li:first-child {
                    list-style: none;
                }
            }
            .fa-circle{
                font-size: 1px;
            }
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
            .bg_content_photo{
                display: block;
                width: 100%;
                height: 135px;
                background-position: center 50%;
                background-repeat: no-repeat;
                background-size: cover;
                background-color: #7E097C;
            }
        }
        .card-body{
            padding: 8px !important;
        }
        .vdp-datepicker__clear-button{
            position: absolute;
            top: 5px;
            right: 10px;
        }
    }
</style>
