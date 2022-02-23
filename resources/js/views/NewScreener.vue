<template>
    <div>
        <section class='screener2 pt-0'>
            <div class='row'>
                <div :class="isLoggedIn ? 'col-md-6' : 'col-md-9'">
                    <div class='row'>
                        <div class="col pb-3">
                            <div class="input-group screener2-search">
                                <input @keyup.enter="getSearchResult" v-model="form.searchStr" v-if="form.searchStr != '' ? {focus:showSearchClear = true} : {focusout:showSearchClear = false}" class="form-control border-end-0 border" type="search" placeholder="Search across your channel">
                                <span id="searchclear" v-if="showSearchClear"><i class="fas fa-times" @click="form.searchStr=''"></i></span>

                                <span class="input-group-append">
                                    <span class="btn dashboard-search-icon">
                                        <i class="fa fa-search" @click="getSearchResult"></i>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='col-md-6' v-if="isLoggedIn">
                    <div class="pb-3 d-flex justify-content-between save-queries">
                        <!--                            <datepicker input-class="form-control" v-model="form.publicationDate"-->
                        <!--                                        :typeable="false"-->
                        <!--                                        :clear-button="true"-->
                        <!--                                        name="publicationDate"-->
                        <!--                                        id="publicationDate"-->
                        <!--                                        v-on:input="getSearchResult"-->
                        <!--                                        format="MM/dd/yyyy" placeholder="MM/DD/YYYY"></datepicker>-->
                        <v-select :options="searchHistories"
                                  placeholder="Select Below"
                                  class="form-control"
                                  v-model="selectedSearchHistory"
                                  label="name"
                        ></v-select>
                        <button type="button" @click="loadSearchHistory" :disabled="!selectedSearchHistory" class="form-control" >Load</button>
                        <button type="button" @click="deleteSearchHistory" :disabled="!selectedSearchHistory" class="form-control">Delete</button>
                        <button type="button" @click="showSearchQueryModal" class="form-control">Save</button>
                    </div>
                </div>
            </div>
            <div class='row'>
                <div class='col-md-2 mb-3'>
                    <div class='row'>
                        <div class="col-md-12">
                            <div class="text-center">
                                <h5 class='mb-3'>Industry Filter</h5>
                                <img class="text-center tree-image" src="/images/tree.png" alt="tree" width="50">
                            </div>
                            <div class='state-container text-center'>
                                <div class="pt-2">
                                    <span class="d-block px-1 py-2 text-white rounded" v-if="form.industry"
                                          :style="{backgroundColor:this.nodeColor('industry')}">{{form.industry.description}}
                                    </span>
                                    <template v-if="form.sector">
                                        <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                                        <span class="d-block px-auto py-2 text-white rounded"
                                              :style="{backgroundColor:this.nodeColor('sector')}">{{form.sector.description}}</span>
                                    </template>
                                    <template v-if="form.subSector">
                                        <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                                        <span class="d-block px-auto py-2 text-white rounded"
                                              :style="{backgroundColor:this.nodeColor('subSector')}">{{form.subSector.description}}</span>
                                    </template>
                                    <template v-if="form.group">
                                        <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                                        <span class="d-block px-auto py-2 text-white rounded"
                                              :style="{backgroundColor:this.nodeColor('group')}">{{form.group.description}}</span>
                                    </template>
                                    <template v-if="form.subGroup">
                                        <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                                        <span class="d-block px-auto py-2 text-white rounded"
                                              :style="{backgroundColor:this.nodeColor('subGroup')}">{{form.subGroup.description}}</span>
                                    </template>
                                    <template v-if="form.echelon">
                                        <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                                        <span class="d-block px-auto py-2 text-white rounded"
                                              :style="{backgroundColor:this.nodeColor('echelon')}">{{form.echelon.description}}</span>
                                    </template>
                                    <template v-if="form.subEchelon">
                                        <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                                        <span class="d-block px-auto py-2 text-white rounded"
                                              :style="{backgroundColor:this.nodeColor('subEchelon')}">{{form.subEchelon.description}}</span>
                                    </template>
                                    <template v-if="form.tier">
                                        <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                                        <span class="d-block px-auto py-2 text-white rounded"
                                              :style="{backgroundColor:this.nodeColor('tier')}">{{form.tier.description}}</span>
                                    </template>
                                    <template v-if="form.subTier">
                                        <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                                        <span class="d-block px-auto py-2 text-white rounded"
                                              :style="{backgroundColor:this.nodeColor('subTier')}">{{form.subTier.description}}</span>
                                    </template>
                                    <template v-if="form.layer">
                                        <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                                        <span class="d-block px-auto py-2 text-white rounded"
                                              :style="{backgroundColor:this.nodeColor('layer')}">{{form.layer.description}}</span>
                                    </template>
                                    <template v-if="form.subLayer">
                                        <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                                        <span class="d-block px-auto py-2 text-white rounded"
                                              :style="{backgroundColor:this.nodeColor('subLayer')}">{{form.subLayer.description}}</span>
                                    </template>
                                    <template v-if="form.deck">
                                        <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                                        <span class="d-block px-auto py-2 text-white rounded"
                                              :style="{backgroundColor:this.nodeColor('deck')}">{{form.deck.description}}</span>
                                    </template>
                                    <template v-if="form.subDeck">
                                        <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                                        <span class="d-block px-auto py-2 text-white rounded"
                                              :style="{backgroundColor:this.nodeColor('subDeck')}">{{form.subDeck.description}}</span>
                                    </template>
                                    <template v-if="form.floor">
                                        <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                                        <span class="d-block px-auto py-2 text-white rounded"
                                              :style="{backgroundColor:this.nodeColor('floor')}">{{form.floor.description}}</span>
                                    </template>
                                    <template v-if="form.subFloor">
                                        <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                                        <span class="d-block px-auto py-2 text-white rounded"
                                              :style="{backgroundColor:this.nodeColor('subFloor')}">{{form.subFloor.description}}</span>
                                    </template>
                                    <template v-if="form.basement">
                                        <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                                        <span class="d-block px-auto py-2 text-white rounded"
                                              :style="{backgroundColor:this.nodeColor('basement')}">{{form.basement.description}}</span>
                                    </template>
                                    <template v-if="form.subBasement">
                                        <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                                        <span class="d-block px-auto py-2 text-white rounded"
                                              :style="{backgroundColor:this.nodeColor('subBasement')}">{{form.subBasement.description}}</span>
                                    </template>
                                    <template v-if="form.mine">
                                        <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                                        <span class="d-block px-auto py-2 text-white rounded"
                                              :style="{backgroundColor:this.nodeColor('mine')}">{{form.mine.description}}</span>
                                    </template>
                                    <template v-if="form.subMine">
                                        <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                                        <span class="d-block px-auto py-2 text-white rounded"
                                              :style="{backgroundColor:this.nodeColor('subMine')}">{{form.subMine.description}}</span>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='col-md-10'>
                    <div class='row'>
                        <div class="col-md-12">
                            <b-tabs class="content-customized-tab screener-tab screener-top-tab" nav-class="row">
                                <b-tab @click="mainFilter = 'industry'" title="Industry">
                                    <b-card-text>
                                        <div class='row state-container'>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Industry</label>
                                                <v-select label="description"
                                                          class="form-control"
                                                          :options="industries" v-model="form.industry"
                                                          @input="setLastSelectedOption('industry'); getSectors(form.industry)"
                                                          placeholder="Select field"></v-select>
                                                <span v-if="totalIndustries != null && !!form.industry" class="float-right item-count font-weight-bold">({{ totalIndustries }} Results)</span>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Sector</label>
                                                <v-select label="description"
                                                          class="form-control"
                                                          :options="sectors" v-model="form.sector"
                                                          :class="sectorSelected"
                                                          ref="sector"
                                                          @input="setLastSelectedOption('sector'); getSubSectors(form.sector,'Input')"
                                                          placeholder="Select field"></v-select>
                                                <span v-if="totalSectors != null && !!form.sector" class="float-right item-count font-weight-bold">({{ totalSectors }} Results)</span>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Sub Sector</label>
                                                <v-select label="description"
                                                          class="form-control"
                                                          :options="subSectors" v-model="form.subSector"
                                                          :class="subSectorSelected"
                                                          ref="subSector"
                                                          @input="setLastSelectedOption('subsector'); getGroups(form.subSector)"
                                                          placeholder="Select field"></v-select>
                                                <span v-if="totalSubSectors != null && !!form.subSector" class="float-right item-count font-weight-bold">({{ totalSubSectors }} Results)</span>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Group</label>
                                                <v-select label="description"
                                                          class="form-control"
                                                          :options="groups"
                                                          :class="groupSelected"
                                                          ref="group"
                                                          v-model="form.group" @input="setLastSelectedOption('group'); getSubGroups(form.group)"
                                                          placeholder="Select field">

                                                </v-select>
                                                <span v-if="totalGroups != null && !!form.group" class="float-right item-count font-weight-bold">({{ totalGroups }} Results)</span>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Sub Group</label>
                                                <v-select label="description"
                                                          class="form-control"
                                                          :options="subGroups" v-model="form.subGroup"
                                                          :class="subGroupSelected"
                                                          ref="subGroup"
                                                          @input="setLastSelectedOption('subgroup'); getEchelons(form.subGroup)"
                                                          placeholder="Select field"></v-select>
                                                <span v-if="totalSubGroups != null && !!form.subGroup" class="float-right item-count font-weight-bold">({{ totalSubGroups }} Results)</span>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Echelon</label>
                                                <v-select label="description"
                                                          class="form-control"
                                                          :options="echelons" v-model="form.echelon"
                                                          :class="echelonSelected"
                                                          @input="setLastSelectedOption('echelon'); getSubEchelons(form.echelon)"
                                                          ref="echelon"
                                                          placeholder="Select field"></v-select>
                                                <span v-if="totalEchelons != null && !!form.echelon" class="float-right item-count font-weight-bold">({{ totalEchelons }} Results)</span>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Sub Echelon</label>
                                                <v-select label="description"
                                                          class="form-control"
                                                          :class="subEchelonSelected"
                                                          :options="subEchelons" v-model="form.subEchelon"
                                                          @input="setLastSelectedOption('subechelon'); getTiers(form.subEchelon)"
                                                          placeholder="Select field"></v-select>
                                                <span v-if="totalSubEchelons != null && !!form.subEchelon" class="float-right item-count font-weight-bold">({{ totalSubEchelons }} Results)</span>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Tier</label>
                                                <v-select label="description"
                                                          class="form-control" :options="tiers" v-model="form.tier"
                                                          :class="tierSelected"
                                                          @input="setLastSelectedOption('tier'); getSubTiers(form.tier)"
                                                          ref="tier"
                                                          placeholder="Select field"></v-select>
                                                <span v-if="totalTiers != null && !!form.tier" class="float-right item-count font-weight-bold">({{ totalTiers }} Results)</span>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Sub Tier</label>
                                                <v-select label="description"
                                                          class="form-control" :options="subTiers"
                                                          v-model="form.subTier"
                                                          :class="subTierSelected"
                                                          @input="setLastSelectedOption('subtier'); getLayers(form.subTier)"
                                                          ref="subTier"
                                                          placeholder="Select field"></v-select>
                                                <span v-if="totalSubTiers != null && !!form.subTier" class="float-right item-count font-weight-bold">({{ totalSubTiers }} Results)</span>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Layer</label>
                                                <v-select label="description"
                                                          class="form-control" :options="layers" v-model="form.layer"
                                                          :class="layerSelected"
                                                          @input="setLastSelectedOption('layer'); getSubLayers(form.layer)"
                                                          ref="layer"
                                                          placeholder="Select field"></v-select>
                                                <span v-if="totalLayers != null && !!form.layer" class="float-right item-count font-weight-bold">({{ totalLayers }} Results)</span>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Sub Layer</label>
                                                <v-select label="description"
                                                          class="form-control" :options="subLayers"
                                                          :class="subLayerSelected"
                                                          v-model="form.subLayer"
                                                          @input="setLastSelectedOption('sublayer'); getDecks(form.subLayer)"
                                                          ref="subLayer"
                                                          placeholder="Select field"></v-select>
                                                <span v-if="totalSubLayers != null && !!form.subLayer" class="float-right item-count font-weight-bold">({{ totalSubLayers }} Results)</span>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Deck</label>
                                                <v-select label="description"
                                                          class="form-control" :options="decks" v-model="form.deck"
                                                          :class="deckSelected"
                                                          @input="setLastSelectedOption('deck'); getSubDecks(form.deck)"
                                                          ref="deck"
                                                          placeholder="Select field"></v-select>
                                                <span v-if="totalDecks != null && !!form.deck" class="float-right item-count font-weight-bold">({{ totalDecks }} Results)</span>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Sub Deck</label>
                                                <v-select label="description"
                                                          class="form-control" :options="subDecks"
                                                          :class="subDeckSelected"
                                                          v-model="form.subDeck"
                                                          @input="setLastSelectedOption('subdeck'); getFloors(form.subDeck)"
                                                          ref="subDeck"
                                                          placeholder="Select field"></v-select>
                                                <span v-if="totalSubDecks != null && !!form.subDeck" class="float-right item-count font-weight-bold">({{ totalSubDecks }} Results)</span>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Floor</label>
                                                <v-select label="description"
                                                          class="form-control" :options="floors" v-model="form.floor"
                                                          :class="floorSelected"
                                                          @input="setLastSelectedOption('floor'); getSubFloors(form.floor)"
                                                          ref="floor"
                                                          placeholder="Select field"></v-select>
                                                <span v-if="totalFloors != null && !!form.floor" class="float-right item-count font-weight-bold">({{ totalFloors }} Results)</span>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Sub Floor</label>
                                                <v-select label="description"
                                                          class="form-control" :options="subFloors"
                                                          :class="subFloorSelected"
                                                          v-model="form.subFloor"
                                                          @input="setLastSelectedOption('subfloor'); getBasements(form.subFloor)"
                                                          ref="subFloor"
                                                          placeholder="Select field"></v-select>
                                                <span v-if="totalSubFloors != null && !!form.subFloor" class="float-right item-count font-weight-bold">({{ totalSubFloors }} Results)</span>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Basement</label>
                                                <v-select label="description"
                                                          class="form-control" :options="basements"
                                                          v-model="form.basement"
                                                          @input="setLastSelectedOption('basement'); getSubBasements(form.basement)"
                                                          :class="basementSelected"
                                                          ref="basement"
                                                          placeholder="Select field"></v-select>
                                                <span v-if="totalBasements != null && !!form.basement" class="float-right item-count font-weight-bold">({{ totalBasements }} Results)</span>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Sub Basement</label>
                                                <v-select label="description"
                                                          class="form-control" :options="subBasements"
                                                          :class="subBasementSelected"
                                                          v-model="form.subBasement"
                                                          @input="setLastSelectedOption('subbasement'); getMines(form.subBasement)"
                                                          ref="subBasement"
                                                          placeholder="Select field"></v-select>
                                                <span v-if="totalSubBasements != null && !!form.subBasement" class="float-right item-count font-weight-bold">({{ totalSubBasements }} Results)</span>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Mine</label>
                                                <v-select label="description"
                                                          class="form-control" :options="mines" v-model="form.mine"
                                                          :class="mineSelected"
                                                          @input="setLastSelectedOption('mine'); getSubMines(form.mine)"
                                                          ref="mine"
                                                          placeholder="Select field"></v-select>
                                                <span v-if="totalMines != null && !!form.mine" class="float-right item-count font-weight-bold">({{ totalMines }} Results)</span>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Sub Mine</label>
                                                <v-select label="description"
                                                          class="form-control" :options="subMines"
                                                          :class="subMineSelected"
                                                          v-model="form.subMine"
                                                          @input="setLastSelectedOption('submine'); subMinesChange"
                                                          ref="subMine"
                                                          placeholder="Select field"></v-select>
                                                <span v-if="totalSubMines != null && !!form.subMine" class="float-right item-count font-weight-bold">({{ totalSubMines }} Results)</span>
                                            </div>
                                        </div>
                                    </b-card-text>
                                </b-tab>
                                <b-tab @click="mainFilter = 'characteristics'" :title="'Company Characteristics '+ totalCharacteristics">
                                    <b-card-text>
                                        <div class='row state-container'>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Country of Domicile</label>
                                                <v-select
                                                    label="name"
                                                    class="form-control"
                                                    name="domicileCountry"
                                                    :options="countries"
                                                    ref="domicileCountry"
                                                    v-model="form.domicileCountry"
                                                    @input="changeFieldSelection($event,'domicileCountrySelected'); getEntityTypeByCountry()"
                                                    placeholder="Select Below">
                                                </v-select>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Organizational Structure</label>
                                                <v-select
                                                    label="name"
                                                    class="form-control"
                                                    name="entityType"
                                                    :options="entityTypes"
                                                    ref="entityType"
                                                    v-model="form.entityType"
                                                    @input="changeFieldSelection($event,'entityTypeSelected')"
                                                    placeholder="Select Below">
                                                </v-select>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Public or Private Company Type</label>
                                                <v-select label="name"
                                                          :options="privatePublicCompanyTypes"
                                                          class="form-control"
                                                          v-model="form.privatePublicCompany"
                                                          placeholder="Select Below"
                                                          @input="changeFieldSelection($event,'privatePublicCompanyTypesSelectd')"

                                                >
                                                </v-select>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Trading or Reporting Status</label>
                                                <div class="dropdown" ref="dropdownTradingStatus">
                                                    <input label="name"
                                                           style="caret-color: transparent;"
                                                           autocomplete="off"
                                                           class="dropdown-toggle"
                                                           data-toggle="dropdown"
                                                           :class="tradingAndReportingStatusListValueCount > 0 ?  'selected-value form-control recent-valuation cursor-pointer' : 'form-control recent-valuation cursor-pointer'"
                                                           placeholder="Select Options"
                                                           :value = "[tradingAndReportingStatusListValueCount > 0 ? tradingAndReportingStatusListValueCount + ' Selected' : '']"
                                                    >
                                                    <div class="dropdown-menu " @click="$event.stopPropagation()">
                                                        <div class="dropdown-options-container" v-if="tradingAndReportingStatusList">
                                                            <ul class="dropdown-content-options">
                                                                <li v-for="item in tradingAndReportingStatusList" class="d-flex align-items-center mb-1">
                                                                    <input :id="'ts-' + item.id" type="checkbox" :value="item.id" v-model="tradingAndReportingStatusListInput" class="mr-1"/>
                                                                    <label :for="'ts-' + item.id" class="mb-0"> {{ item.name }}</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="dropdown-footer text-right">
                                                            <b-button @click="submitMultiDropdown('tradingAndReportingStatusListMapArray', 'tradingAndReportingStatusListValueCount', 'tradingAndReportingStatusListInput', 'dropdownTradingStatus')" class="btn modal-btn" >Done</b-button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Number of Shareholders</label>
                                                <v-select label="name" :options="shareholderNumberList"
                                                          class="form-control"
                                                          placeholder="Select Below"
                                                          ref="shareholderNumber"
                                                          v-model="form.shareholderNumber"
                                                          @input="changeFieldSelection($event,'shareholderNumberSelected')"
                                                >
                                                </v-select>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Base Currency</label>
                                                <v-select label="name" :options="baseCurrencyList"
                                                          class="form-control"
                                                          placeholder="Select Below"
                                                          ref="baseCurrency"
                                                          v-model="form.baseCurrency"
                                                          @input="changeFieldSelection($event,'baseCurrencySelected')"
                                                ></v-select>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Conglomerate</label>
                                                <v-select :options="[{label: 'YES', id: 1},{label: 'NO', id: 0}]"
                                                          placeholder="Select Below"
                                                          class="form-control"
                                                          ref="conglomerate"
                                                          v-model="form.conglomerate"
                                                          :reduce="option => option.id"
                                                          @input="changeFieldSelection($event,'conglomerateSelected')"
                                                ></v-select>
                                            </div>

                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Intellectual Property</label>
                                                <div class="dropdown" ref="dropdownIntellectualProperty">
                                                    <input label="name"
                                                           style="caret-color: transparent;"
                                                           autocomplete="off"
                                                           class="dropdown-toggle"
                                                           data-toggle="dropdown"
                                                           :class="intellectualPropertyValueCount > 0 ?  'selected-value form-control recent-valuation cursor-pointer' : 'form-control recent-valuation cursor-pointer'"
                                                           placeholder="Select Options"
                                                           :value = "[intellectualPropertyValueCount > 0 ? intellectualPropertyValueCount + ' Selected' : '']"
                                                    >
                                                    <div class="dropdown-menu " @click="$event.stopPropagation()">
                                                        <div class="dropdown-options-container" v-if="intelletualPropertyList">
                                                            <ul class="dropdown-content-options">
                                                                <li v-for="item in intelletualPropertyList" class="d-flex align-items-center mb-1">
                                                                    <input :id="'ip-' + item.id" type="checkbox" :value="item.id" v-model="intellectualInput" class="mr-1"/>
                                                                    <label :for="'ip-' + item.id" class="mb-0"> {{ item.name }}</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="dropdown-footer text-right">
                                                            <b-button @click="submitMultiDropdown('intellectualMapArray', 'intellectualPropertyValueCount', 'intellectualInput', 'dropdownIntellectualProperty')" class="btn modal-btn" >Done</b-button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Type of Financing</label>
                                                <div class="dropdown" ref="dropdownFinancingType">
                                                    <input label="name"
                                                           style="caret-color: transparent;"
                                                           autocomplete="off"
                                                           class="dropdown-toggle"
                                                           data-toggle="dropdown"
                                                           :class="financingTypeValueCount > 0 ?  'selected-value form-control recent-valuation cursor-pointer' : 'form-control recent-valuation cursor-pointer'"
                                                           placeholder="Select Options"
                                                           :value = "[financingTypeValueCount > 0 ? financingTypeValueCount + ' Selected' : '']"
                                                    >
                                                    <div class="dropdown-menu " @click="$event.stopPropagation()">
                                                        <div class="dropdown-options-container" v-if="financingTypeList">
                                                            <ul class="dropdown-content-options">
                                                                <li v-for="item in financingTypeList" class="d-flex align-items-center mb-1">
                                                                    <input :id="'ft-' + item.id" type="checkbox" :value="item.id" v-model="financingTypeInput" class="mr-1"/>
                                                                    <label :for="'ft-' + item.id" class="mb-0"> {{ item.name }}</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="dropdown-footer text-right">
                                                            <b-button @click="submitMultiDropdown('financingMapArray', 'financingTypeValueCount', 'financingTypeInput', 'dropdownFinancingType')" class="btn modal-btn" >Done</b-button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Most Recent Valuation</label>
                                                <input type="text"
                                                       class="form-control recent-valuation"
                                                       autocomplete="off"
                                                       v-model="form.companyValuation"
                                                       @input="changeInputFieldSelection($event.target.value,'companyValuationSelected')"
                                                       @keypress="stripTheGarbage($event)"
                                                       @blur="formatDollars()"
                                                       @focus="formatDollarsToNumber()"
                                                />
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Audited Financials</label>
                                                <v-select label="labelAu"
                                                          :options="[{labelAu: 'YES', audit_id: 1},{labelAu: 'NO', audit_id: 0}]"
                                                          class="form-control"
                                                          placeholder="Select Below"
                                                          v-model="form.auditedFinance"
                                                          :reduce="audit => audit.audit_id"
                                                          @input="changeFieldSelection($event,'auditedFinanceSelected')"
                                                ></v-select>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Conduct Financing last 6 Months?</label>
                                                <v-select :options="[{label: 'YES', id: 1}, {label: 'NO', id: 0}]"
                                                          placeholder="Select Below"
                                                          class="form-control"
                                                          ref="conductFinancing"
                                                          v-model="form.conductFinancing"
                                                          :reduce="conduct => conduct.id"
                                                          @input="changeFieldSelection($event,'conductFinancingSelected')"
                                                ></v-select>
                                            </div>
                                            <!-- founder, ceo and cfo field commented -->
<!--                                            <div class="col-md-2 search-field form-group">-->
<!--                                                <label class="control-label">Has Founders</label>-->
<!--                                                <v-select :options="[{label: 'YES', id: 1},{label: 'NO', id: 0}]"-->
<!--                                                          placeholder="Select Below"-->
<!--                                                          class="form-control"-->
<!--                                                          ref="hasFounder"-->
<!--                                                          v-model="form.hasFounder"-->
<!--                                                          :reduce="option => option.id"-->
<!--                                                          @input="changeFieldSelection($event,'hasFounderSelected')"-->
<!--                                                ></v-select>-->
<!--                                            </div>-->
<!--                                            <div class="col-md-2 search-field form-group">-->
<!--                                                <label class="control-label">Has CEO</label>-->
<!--                                                <v-select :options="[{label: 'YES', id: 1},{label: 'NO', id: 0}]"-->
<!--                                                          placeholder="Select Below"-->
<!--                                                          class="form-control"-->
<!--                                                          ref="hasCeo"-->
<!--                                                          v-model="form.hasCeo"-->
<!--                                                          :reduce="option => option.id"-->
<!--                                                          @input="changeFieldSelection($event,'hasCeoSelected')"-->
<!--                                                ></v-select>-->
<!--                                            </div>-->
<!--                                            <div class="col-md-2 search-field form-group">-->
<!--                                                <label class="control-label">Has CFO</label>-->
<!--                                                <v-select :options="[{label: 'YES', id: 1},{label: 'NO', id: 0}]"-->
<!--                                                          placeholder="Select Below"-->
<!--                                                          class="form-control"-->
<!--                                                          ref="hasCfo"-->
<!--                                                          v-model="form.hasCfo"-->
<!--                                                          :reduce="option => option.id"-->
<!--                                                          @input="changeFieldSelection($event,'hasCfoSelected')"-->
<!--                                                ></v-select>-->
<!--                                            </div>-->
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Ticker Symbol</label>
                                                <input type="text"
                                                       class="form-control recent-valuation"
                                                       autocomplete="off"
                                                       v-model="form.tickerSymbol"
                                                       @input="changeInputFieldSelection($event.target.value,'tickerSymbolSelected')"
                                                />
                                            </div>
                                            <!-- <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Year Company Formed</label>
                                                <datepicker input-class="form-control recent-valuation"
                                                    v-model="form.formedYear"
                                                    :typeable="false"
                                                    :disabled-dates="{to: new Date(1600, 0, 1), from: new Date()}"
                                                    minimum-view="year"
                                                    @input="getSearchResult()"
                                                    format="yyyy" placeholder="YYYY">
                                                </datepicker>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">First Product/Service</label>
                                                <input type="text" class="form-control recent-valuation" placeholder="Type in Product/Service"
                                                   autocomplete="off"
                                                   @input="getSearchResult()"
                                                   v-model="form.firstProductOrService"/>
                                            </div> -->
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Acquisitions Made</label>
                                                <v-select :options="[{label: 'YES', id: 'yes'}, {label: 'NO', id: 'no'}]"
                                                          placeholder="Select Below"
                                                          class="form-control"
                                                          ref="conglomerate"
                                                          v-model="form.acquisitionsMade"
                                                          :reduce="option => option.id"
                                                          @input="getSearchResult()"
                                                ></v-select>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Spin Offs</label>
                                                <v-select :options="[{label: 'YES', id: 'yes'}, {label: 'NO', id: 'no'}]"
                                                          placeholder="Select Below"
                                                          class="form-control"
                                                          ref="conglomerate"
                                                          v-model="form.spinOffMade"
                                                          :reduce="option => option.id"
                                                          @input="getSearchResult()"
                                                ></v-select>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Dividend Currently Being Issued</label>
                                                <v-select :options="[{label: 'YES', id: 'yes'}, {label: 'NO', id: 'no'}]"
                                                          placeholder="Select Below"
                                                          class="form-control"
                                                          ref="conglomerate"
                                                          v-model="form.dividend"
                                                          :reduce="option => option.id"
                                                          @input="getSearchResult()"
                                                ></v-select>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Search by ISIN Number</label>
                                                <input type="text"
                                                       class="form-control recent-valuation"
                                                       autocomplete="off"
                                                       v-model="form.isin"
                                                       @input="changeInputFieldSelection($event.target.value,'isin')" />
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Search by CUSIP Number</label>
                                                <input type="text"
                                                       class="form-control recent-valuation"
                                                       autocomplete="off"
                                                       v-model="form.cusip"
                                                       @input="changeInputFieldSelection($event.target.value,'cusip')" />
                                            </div>

                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Number of Employees</label>
                                                <v-select label="name" :options="employeeNumberList"
                                                          class="form-control"
                                                          placeholder="Select Below"
                                                          ref="employeeNumber"
                                                          v-model="form.employeeNumber"
                                                          @input="changeFieldSelection($event,'employeeNumberSelected')"
                                                >
                                                </v-select>
                                            </div>

                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">ESG Rating</label>
                                                <v-select :options="[{label: 'YES', id: 1},{label: 'NO', id: 0}]"
                                                          placeholder="Select Below"
                                                          class="form-control"
                                                          ref="esgRating"
                                                          v-model="form.esgRating"
                                                          :reduce="option => option.id"
                                                          @input="changeFieldSelection($event,'esgRatingSelected')"
                                                ></v-select>
                                            </div>

                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Type of Publicly Traded Company (USA or International)</label>
                                                <v-select label="name" :options="publiclyTradedCompanyTypeList"
                                                          class="form-control"
                                                          placeholder="Select Below"
                                                          ref="employeeNumber"
                                                          v-model="form.publiclyTradedCompany"
                                                          @input="changeFieldSelection($event,'publiclyTradedCompany')"
                                                >
                                                </v-select>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Domestic or International Exchange Traded On</label>

                                                <div class="dropdown" ref="dropdownExchangedTradedOn">
                                                    <input label="name"
                                                           style="caret-color: transparent;"
                                                           autocomplete="off"
                                                           class="dropdown-toggle"
                                                           data-toggle="dropdown"
                                                           :class="exchangedTradedOnValueCount > 0 ?  'selected-value form-control recent-valuation cursor-pointer' : 'form-control recent-valuation cursor-pointer'"
                                                           placeholder="Select Options"
                                                           :value = "[exchangedTradedOnValueCount > 0 ? exchangedTradedOnValueCount + ' Selected' : '']"
                                                    >
                                                    <div class="dropdown-menu " @click="$event.stopPropagation()">
                                                        <div class="dropdown-options-container" v-if="exchangeTradedList">
                                                            <ul class="dropdown-content-options">
                                                                <li v-for="item in exchangeTradedList" class="d-flex align-items-center mb-1">
                                                                    <input :id="'et-' + item.id" type="checkbox" :value="item.id" v-model="exchangedTradedOnInput" class="mr-1"/>
                                                                    <label :for="'et-' + item.id" class="mb-0"> {{ item.name }}</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="dropdown-footer text-right">
                                                            <b-button @click="submitMultiDropdown('exchangedTradedOnMapArray', 'exchangedTradedOnValueCount', 'exchangedTradedOnInput', 'dropdownExchangedTradedOn')" class="btn modal-btn" >Done</b-button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Minority Owned Business</label>
                                                <div class="dropdown" ref="dropdownMinorityOwnedBusiness">
                                                    <input label="name"
                                                           style="caret-color: transparent;"
                                                           autocomplete="off"
                                                           class="dropdown-toggle"
                                                           data-toggle="dropdown"
                                                           :class="minorityOwnedBusinessValueCount > 0 ?  'selected-value form-control recent-valuation cursor-pointer' : 'form-control recent-valuation cursor-pointer'"
                                                           placeholder="Select Options"
                                                           :value = "[minorityOwnedBusinessValueCount > 0 ? minorityOwnedBusinessValueCount + ' Selected' : '']"
                                                    >
                                                    <div class="dropdown-menu " @click="$event.stopPropagation()">
                                                        <div class="dropdown-options-container" v-if="minorityOwnedBusinessList">
                                                            <ul class="dropdown-content-options">
                                                                <li v-for="item in minorityOwnedBusinessList" class="d-flex align-items-center mb-1">
                                                                    <input :id="'ip-' + item.id" type="checkbox" :value="item.id" v-model="minorityOwnedBusinessInput" class="mr-1"/>
                                                                    <label :for="'ip-' + item.id" class="mb-0"> {{ item.name }}</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="dropdown-footer text-right">
                                                            <b-button @click="submitMultiDropdown('minorityOwnedBusinessMapArray', 'minorityOwnedBusinessValueCount', 'minorityOwnedBusinessInput', 'dropdownMinorityOwnedBusiness')" class="btn modal-btn" >Done</b-button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </b-card-text>
                                </b-tab>
                                <b-tab @click="mainFilter = 'history'" :title="'Company History '+ totalHistoryFilters">
                                    <b-card-text>
                                        <div class='row state-container'>
                                            <div class="col-md-4 search-field form-group">
                                                <label class="control-label">Year Company Formed</label>
<!--                                                <datepicker input-class="form-control recent-valuation"-->
<!--                                                            v-model="form.formedYear"-->
<!--                                                            :typeable="false"-->
<!--                                                            :disabled-dates="{to: new Date(1600, 0, 1), from: new Date()}"-->
<!--                                                            minimum-view="year"-->
<!--                                                            @input="getSearchResult()"-->
<!--                                                            format="yyyy" placeholder="YYYY">-->
<!--                                                </datepicker>-->
                                                <div class="dateRange">
                                                    <div class="position-relative dateRange">
                                                        <label class="control-label mr-1 mb-0 position-relative" >From</label>
                                                        <datepicker input-class="form-control"
                                                                    v-model="form.formedYearFromDate"
                                                                    :typeable="false"
                                                                    :clear-button="false"
                                                                    name="formedYearFromDate"
                                                                    id="formedYearFromDate"
                                                                    ref="formedYearFromDate"
                                                                    minimum-view="year"
                                                                    v-on:input="dateChange('formedYearFromDate')"
                                                                    :disabled-dates="{to: new Date(1970, 0, 1), from: new Date()}"
                                                                    format="yyyy" placeholder="YYYY"></datepicker>
                                                        <label for="formedYearFromDate"><img src="../assets/calendar.png" class="calendar-icon"/></label>
                                                    </div>
                                                    <div class="position-relative dateRange">
                                                        <label class="control-label mx-1 mb-0 position-relative">To</label>
                                                        <datepicker input-class="form-control"
                                                                    v-model="form.formedYearToDate"
                                                                    :typeable="false"
                                                                    :clear-button="false"
                                                                    name="formedYearToDate"
                                                                    id="formedYearToDate"
                                                                    minimum-view="year"
                                                                    v-on:input="dateChange('formedYearToDate')"
                                                                    :disabled-dates="{to: new Date(1970, 0, 1), from: new Date()}"
                                                                    format="yyyy" placeholder="YYYY"></datepicker>
                                                        <label for="formedYearToDate"><img src="../assets/calendar.png" class="calendar-icon"/></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">First Product/Service</label>
                                                <input type="text" class="form-control recent-valuation" placeholder="Type in Product/Service"
                                                       autocomplete="off"
                                                       @input="getSearchResult()"
                                                       v-model="form.firstProductOrService"/>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Number of Major Products / Services</label>
                                                <input type="text" class="form-control recent-valuation" placeholder="Type in number of Major Products/Services"
                                                       autocomplete="off"
                                                       @input="getSearchResult()"
                                                       v-model="form.numberOfMajorProductOrService"/>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Change in Direction or Strategy?</label>
                                                <v-select :options="[{label: 'YES', id: 'yes'}, {label: 'NO', id: 'no'}]"
                                                          :clearable="false"
                                                          class="form-control"
                                                          placeholder="Select Yes or No"
                                                          v-model="form.changeDirectionOrStrategy"
                                                          :reduce="option => option.id"
                                                          @input="getSearchResult()"
                                                ></v-select>
                                            </div>
                                        </div>
                                    </b-card-text>
                                </b-tab>
                                <b-tab @click="mainFilter = 'video'" :title="'Video/Audio Characteristics ' + totalVideoAudioCharacteristics">
                                    <b-card-text>
                                        <div class='row state-container'>
                                            <div class="col-md-4 search-field form-group">
                                                <label class="control-label">Date Published</label>
                                                <div class="dateRange">
                                                    <div class="position-relative dateRange">
                                                        <label class="control-label mr-1 mb-0 position-relative" >From</label>
                                                        <datepicker input-class="form-control"
                                                                    v-model="form.mediaPublishedFromDate"
                                                                    :typeable="false"
                                                                    :clear-button="false"
                                                                    name="mediaPublishedFromDate"
                                                                    id="mediaPublishedFromDate"
                                                                    ref="mediaPublishedFromDate"
                                                                    v-on:input="dateChange('mediaPublishedFromDate')"
                                                                    :disabled-dates="{to: new Date(1970, 0, 1), from: new Date()}"
                                                                    format="MM/dd/yyyy" placeholder="MM/DD/YYYY"></datepicker>
                                                        <label for="videoPublishedFromDate"><img src="../assets/calendar.png" class="calendar-icon"/></label>
                                                    </div>
                                                    <div class="position-relative dateRange">
                                                        <label class="control-label mx-1 mb-0 position-relative">To</label>
                                                        <datepicker input-class="form-control"
                                                                    v-model="form.mediaPublishedToDate"
                                                                    :typeable="false"
                                                                    :clear-button="false"
                                                                    name="mediaPublishedToDate"
                                                                    id="mediaPublishedToDate"
                                                                    v-on:input="dateChange('mediaPublishedToDate')"
                                                                    :disabled-dates="{to: new Date(1970, 0, 1), from: new Date()}"
                                                                    format="MM/dd/yyyy" placeholder="MM/DD/YYYY"></datepicker>
                                                        <label for="videoPublishedToDate"><img src="../assets/calendar.png" class="calendar-icon"/></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 search-field form-group">
                                                <label class="control-label">Date Recorded</label>
                                                <div class="dateRange ">
                                                    <div class="position-relative dateRange">
                                                        <label class="control-label mr-1 mb-0">From</label>
                                                        <datepicker input-class="form-control"
                                                                    v-model="form.mediaRecordedFromDate"
                                                                    :typeable="false"
                                                                    :clear-button="false"
                                                                    name="mediaRecordedFromDate"
                                                                    id="mediaRecordedFromDate"
                                                                    v-on:input="dateChange('mediaRecordedFromDate')"
                                                                    :disabled-dates="{to: new Date(1970, 0, 1), from: new Date()}"
                                                                    format="MM/dd/yyyy" placeholder="MM/DD/YYYY"></datepicker>
                                                        <label for="videoRecordedFromDate"><img src="../assets/calendar.png" class="calendar-icon"/></label>
                                                    </div>
                                                    <div class="position-relative dateRange">
                                                        <label class="control-label mx-1 mb-0">To</label>
                                                        <datepicker input-class="form-control"
                                                                    v-model="form.mediaRecordedToDate"
                                                                    :typeable="false"
                                                                    :clear-button="false"
                                                                    name="mediaRecordedToDate"
                                                                    id="mediaRecordedToDate"
                                                                    v-on:input="dateChange('mediaRecordedToDate')"
                                                                    :disabled-dates="{to: new Date(1970, 0, 1), from: new Date()}"
                                                                    format="MM/dd/yyyy" placeholder="MM/DD/YYYY"></datepicker>
                                                        <label for="videoRecordedToDate"><img src="../assets/calendar.png" class="calendar-icon"/></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Video Participants</label>
                                                <div class="dropdown" ref="dropdownVideoParticipants">
                                                    <input label="name"
                                                           style="caret-color: transparent;"
                                                           autocomplete="off"
                                                           class="dropdown-toggle"
                                                           data-toggle="dropdown"
                                                           :class="videoParticipantValueCount > 0 ?  'selected-value form-control recent-valuation cursor-pointer' : 'form-control recent-valuation cursor-pointer'"
                                                           placeholder="Select Options"
                                                           :value = "[videoParticipantValueCount > 0 ? videoParticipantValueCount + ' Selected' : '']"
                                                    >
                                                    <div class="dropdown-menu " @click="$event.stopPropagation()">
                                                        <div class="dropdown-options-container" v-if="videoPresenterTypes">
                                                            <ul class="dropdown-content-options">
                                                                <li v-for="item in videoPresenterTypes" class="d-flex align-items-center mb-1">
                                                                    <input :id="'vp-' + item.id" type="checkbox" :value="item.id" v-model="videoParticipantInput" class="mr-1"/>
                                                                    <label :for="'vp-' + item.id" class="mb-0"> {{ item.name }}</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="dropdown-footer text-right">
                                                            <b-button @click="submitMultiDropdown('videoParticipantMapArray', 'videoParticipantValueCount', 'videoParticipantInput', 'dropdownVideoParticipants')" class="btn modal-btn" >Done</b-button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Audio Participants</label>
                                                <div class="dropdown" ref="dropdownAudioParticipants">
                                                    <input label="name"
                                                           style="caret-color: transparent;"
                                                           autocomplete="off"
                                                           class="dropdown-toggle"
                                                           data-toggle="dropdown"
                                                           :class="audioParticipantValueCount > 0 ?  'selected-value form-control recent-valuation cursor-pointer' : 'form-control recent-valuation cursor-pointer'"
                                                           placeholder="Select Options"
                                                           :value = "[audioParticipantValueCount > 0 ? audioParticipantValueCount + ' Selected' : '']"
                                                    >
                                                    <div class="dropdown-menu " @click="$event.stopPropagation()">
                                                        <div class="dropdown-options-container" v-if="audioPresenterTypes">
                                                            <ul class="dropdown-content-options">
                                                                <li v-for="item in audioPresenterTypes" class="d-flex align-items-center mb-1">
                                                                    <input :id="'ap-' + item.id" type="checkbox" :value="item.id" v-model="audioParticipantInput" class="mr-1"/>
                                                                    <label :for="'ap-' + item.id" class="mb-0"> {{ item.name }}</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="dropdown-footer text-right">
                                                            <b-button @click="submitMultiDropdown('audioParticipantMapArray', 'audioParticipantValueCount', 'audioParticipantInput', 'dropdownAudioParticipants')" class="btn modal-btn" >Done</b-button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Video Media Type</label>
                                                <div class="dropdown" ref="dropdownVideoSubType">
                                                    <input label="name"
                                                           style="caret-color: transparent;"
                                                           autocomplete="off"
                                                           class="dropdown-toggle"
                                                           data-toggle="dropdown"
                                                           :class="videoSubTypeValueCount > 0 ?  'selected-value form-control recent-valuation cursor-pointer' : 'form-control recent-valuation cursor-pointer'"
                                                           placeholder="Select Options"
                                                           :value = "[videoSubTypeValueCount > 0 ? videoSubTypeValueCount + ' Selected' : '']"
                                                    >
                                                    <div class="dropdown-menu " @click="$event.stopPropagation()">
                                                        <div class="dropdown-options-container" v-if="videoSubTypes">
                                                            <ul class="dropdown-content-options">
                                                                <li v-for="item in videoSubTypes" class="d-flex align-items-center mb-1">
                                                                    <input :id="'vp-' + item.id" type="checkbox" :value="item.id" v-model="videoSubTypeInput" class="mr-1"/>
                                                                    <label :for="'vp-' + item.id" class="mb-0"> {{ item.name }}</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="dropdown-footer text-right">
                                                            <b-button @click="submitMultiDropdown('videoSubTypeMapArray', 'videoSubTypeValueCount', 'videoSubTypeInput', 'dropdownVideoSubType')" class="btn modal-btn" >Done</b-button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Audio Media Type</label>
                                                <div class="dropdown" ref="dropdownAudioSubType">
                                                    <input label="name"
                                                           style="caret-color: transparent;"
                                                           autocomplete="off"
                                                           class="dropdown-toggle"
                                                           data-toggle="dropdown"
                                                           :class="audioSubTypeValueCount > 0 ?  'selected-value form-control recent-valuation cursor-pointer' : 'form-control recent-valuation cursor-pointer'"
                                                           placeholder="Select Options"
                                                           :value = "[audioSubTypeValueCount > 0 ? audioSubTypeValueCount + ' Selected' : '']"
                                                    >
                                                    <div class="dropdown-menu " @click="$event.stopPropagation()">
                                                        <div class="dropdown-options-container" v-if="audioSubTypes">
                                                            <ul class="dropdown-content-options">
                                                                <li v-for="item in audioSubTypes" class="d-flex align-items-center mb-1">
                                                                    <input :id="'ast-' + item.id" type="checkbox" :value="item.id" v-model="audioSubTypeInput" class="mr-1"/>
                                                                    <label :for="'ast-' + item.id" class="mb-0"> {{ item.name }}</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="dropdown-footer text-right">
                                                            <b-button @click="submitMultiDropdown('audioSubTypeMapArray', 'audioSubTypeValueCount', 'audioSubTypeInput', 'dropdownAudioSubType')" class="btn modal-btn" >Done</b-button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Video Subject of Company</label>
                                                <div class="dropdown" ref="dropdownVideoSubject">
                                                    <input label="name"
                                                           style="caret-color: transparent;"
                                                           autocomplete="off"
                                                           class="dropdown-toggle"
                                                           data-toggle="dropdown"
                                                           :class="videoSubjectTypeValueCount > 0 ?  'selected-value form-control recent-valuation cursor-pointer' : 'form-control recent-valuation cursor-pointer'"
                                                           placeholder="Select Options"
                                                           :value = "[videoSubjectTypeValueCount > 0 ? videoSubjectTypeValueCount + ' Selected' : '']"
                                                    >
                                                    <div class="dropdown-menu " @click="$event.stopPropagation()">
                                                        <div class="dropdown-options-container" v-if="videoSubjectTypes">
                                                            <ul class="dropdown-content-options">
                                                                <li v-for="item in videoSubjectTypes" class="d-flex align-items-center mb-1">
                                                                    <input :id="'vp-' + item.id" type="checkbox" :value="item.id" v-model="videoSubjectTypeInput" class="mr-1"/>
                                                                    <label :for="'vp-' + item.id" class="mb-0"> {{ item.name }}</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="dropdown-footer text-right">
                                                            <b-button @click="submitMultiDropdown('videoSubjectTypeMapArray', 'videoSubjectTypeValueCount', 'videoSubjectTypeInput', 'dropdownVideoSubject')" class="btn modal-btn" >Done</b-button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Audio Subject of Company</label>
                                                <div class="dropdown" ref="dropdownAudioSubject">
                                                    <input label="name"
                                                           style="caret-color: transparent;"
                                                           autocomplete="off"
                                                           class="dropdown-toggle"
                                                           data-toggle="dropdown"
                                                           :class="audioSubjectTypeValueCount > 0 ?  'selected-value form-control recent-valuation cursor-pointer' : 'form-control recent-valuation cursor-pointer'"
                                                           placeholder="Select Options"
                                                           :value = "[audioSubjectTypeValueCount > 0 ? audioSubjectTypeValueCount + ' Selected' : '']"
                                                    >
                                                    <div class="dropdown-menu " @click="$event.stopPropagation()">
                                                        <div class="dropdown-options-container" v-if="audioSubjectTypes">
                                                            <ul class="dropdown-content-options">
                                                                <li v-for="item in audioSubjectTypes" class="d-flex align-items-center mb-1">
                                                                    <input :id="'asub-' + item.id" type="checkbox" :value="item.id" v-model="audioSubjectTypeInput" class="mr-1"/>
                                                                    <label :for="'asub-' + item.id" class="mb-0"> {{ item.name }}</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="dropdown-footer text-right">
                                                            <b-button @click="submitMultiDropdown('audioSubjectTypeMapArray', 'audioSubjectTypeValueCount', 'audioSubjectTypeInput', 'dropdownAudioSubject')" class="btn modal-btn" >Done</b-button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </b-card-text>
                                </b-tab>
                                <b-tab @click="mainFilter = 'companyContacts'" :title="'Company Contacts '+ totalCompanyContactFilters">
                                    <b-card-text>
                                        <div class='row state-container'>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Sales Department</label>
                                                <v-select :options="[{label: 'YES', id: 1},{label: 'NO', id: 0}]"
                                                          placeholder="Select Below"
                                                          class="form-control"
                                                          ref="hasSalesDepartment"
                                                          v-model="form.hasSalesDepartment"
                                                          :reduce="option => option.id"
                                                          @input="changeFieldSelection($event,'hasSalesDepartmentSelected')"
                                                ></v-select>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Investor Relations Department</label>
                                                <v-select :options="[{label: 'YES', id: 1},{label: 'NO', id: 0}]"
                                                          placeholder="Select Below"
                                                          class="form-control"
                                                          ref="hasIrd"
                                                          v-model="form.hasIrd"
                                                          :reduce="option => option.id"
                                                          @input="changeFieldSelection($event,'hasIrdSelected')"
                                                ></v-select>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Business Development Department</label>
                                                <v-select :options="[{label: 'YES', id: 1},{label: 'NO', id: 0}]"
                                                          placeholder="Select Below"
                                                          class="form-control"
                                                          ref="hasBusinessDevelopment"
                                                          v-model="form.hasBusinessDevelopment"
                                                          :reduce="option => option.id"
                                                          @input="changeFieldSelection($event,'hasBusinessDevelopmentSelected')"
                                                ></v-select>
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Strategic Partnerships</label>
                                                <input type="text" class="form-control recent-valuation" placeholder="Strategic Partnerships" v-model="form.hasStrategicPartnership" @input="getSearchResult()" />
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Has Suppliers</label>
                                                <input type="text" class="form-control recent-valuation"
                                                       placeholder="Suppliers"
                                                       v-model="form.hasSuppliers"
                                                       @input="getSearchResult()"
                                                />
                                            </div>
                                        </div>
                                    </b-card-text>
                                </b-tab>
                                <b-tab @click="mainFilter = 'geography'" :title="'Geography '+ totalGeographyFilters">
                                    <b-card-text>
                                        <div class='row state-container'>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Country</label>
                                                <v-select :options="countries"
                                                          placeholder="Select Below"
                                                          class="form-control"
                                                          v-model="form.country"
                                                          label="name"
                                                          :reduce="option => option.id"
                                                          @input="getStatesOrProvinceStatus"
                                                ></v-select>
                                            </div>
                                            <div class="col-md-2 search-field form-group" v-if="this.haveProvince == 0">
                                                <label class="control-label">State</label>
                                                <v-select :options="states"
                                                          placeholder="Select Below"
                                                          class="form-control"
                                                          :class="{'field-no-selected' : !states.length}"
                                                          v-model="form.state"
                                                          label="name"
                                                          :reduce="option => option.id"
                                                          @input="changeFieldSelection($event,'citySelected')"
                                                ></v-select>
                                            </div>
                                            <div class="col-md-2 search-field form-group" v-else>
                                                <label class="control-label">Province</label>
                                                <input type="text" class="form-control recent-valuation" placeholder="Province" v-model="form.province" @input="getSearchResult()" />
                                            </div>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">City</label>
                                                <input type="text" class="form-control recent-valuation" placeholder="City" v-model="form.city" @input="getSearchResult()" />
                                            </div>
                                        </div>
                                    </b-card-text>
                                </b-tab>
                                <b-tab @click="mainFilter = 'social'" :title="'Social' + totalSocialFilters " >
                                    <b-card-text>
                                        <div class='row state-container'>
                                            <div class="col-md-2 search-field form-group">
                                                <label class="control-label">Social Media Platform</label>
                                                <div class="dropdown" ref="dropdownSocialMedia">
                                                    <input label="name"
                                                           style="caret-color: transparent;"
                                                           autocomplete="off"
                                                           class="dropdown-toggle"
                                                           data-toggle="dropdown"
                                                           :class="socialMediaListValueCount > 0 ?  'selected-value form-control recent-valuation cursor-pointer' : 'form-control recent-valuation cursor-pointer'"
                                                           placeholder="Select Options"
                                                           :value = "[socialMediaListValueCount > 0 ? socialMediaListValueCount + ' Selected' : '']"
                                                    >
                                                    <div class="dropdown-menu " @click="$event.stopPropagation()">
                                                        <div class="dropdown-options-container" v-if="socialMediaPlatforms">
                                                            <ul class="dropdown-content-options">
                                                                <li v-for="item in socialMediaPlatforms" class="d-flex align-items-center mb-1">
                                                                    <input :id="'ts-' + item.id" type="checkbox" :value="item.id" v-model="socialMediaListInput"  class="mr-1"/>
                                                                    <label :for="'ts-' + item.id" class="mb-0"> {{ item.name }}</label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="dropdown-footer text-right">
                                                            <b-button @click="submitMultiDropdown('socialMediaListMapArray', 'socialMediaListValueCount', 'socialMediaListInput', 'dropdownSocialMedia')" class="btn modal-btn" >Done</b-button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </b-card-text>
                                </b-tab>
                                <b-tab @click="mainFilter = 'researchCoverage'" :title="`Research Coverage ${totalResearchCoverageFilters}`" >
                                    <div class='row state-container'>
                                            <div class="col-md-4 search-field form-group">
                                                <label class="control-label">Research Coverage</label>
                                                <div class="dropdown" ref="dropdownResearch">
                                                    <input label="name"
                                                           style="caret-color: transparent;"
                                                           autocomplete="off"
                                                           class="dropdown-toggle"
                                                           data-toggle="dropdown"
                                                           :class="researchCoverageTypeValueCount > 0 ?  'selected-value form-control recent-valuation cursor-pointer' : 'form-control recent-valuation cursor-pointer'"
                                                           placeholder="Select Options"
                                                           :value = "[researchCoverageTypeValueCount > 0 ? researchCoverageTypeValueCount + ' Selected' : '']"
                                                    >
                                                    <div class="dropdown-menu " @click="$event.stopPropagation()">
                                                        <div class="dropdown-options-container" v-if="researchCoverageTypeList">
                                                            <ul class="dropdown-content-options">
                                                                <li v-for="item in researchCoverageTypeList" class="d-flex align-items-center mb-1">
                                                                    <input :id="'rct-' + item.id" type="checkbox" :value="item.id" v-model="researchCoverageTypeInput" class="mr-1"/>
                                                                    <label :for="'rct-' + item.id" class="mb-0"> {{ item.name }} </label>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="dropdown-footer text-right">
                                                            <b-button @click="submitMultiDropdown('researchMapArray', 'researchCoverageTypeValueCount', 'researchCoverageTypeInput', 'dropdownResearch')" class="btn modal-btn" >Done</b-button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        <div class="col-md-4 search-field form-group">
                                            <label class="control-label">Community Research Platforms</label>
                                            <div class="dropdown" ref="dropdownCommunityResearch">
                                                <input label="name"
                                                       style="caret-color: transparent;"
                                                       autocomplete="off"
                                                       class="dropdown-toggle"
                                                       data-toggle="dropdown"
                                                       :class="sharedCommunityResearchPlatformListValueCount > 0 ?  'selected-value form-control recent-valuation cursor-pointer' : 'form-control recent-valuation cursor-pointer'"
                                                       placeholder="Select Options"
                                                       :value = "[sharedCommunityResearchPlatformListValueCount > 0 ? sharedCommunityResearchPlatformListValueCount + ' Selected' : '']"
                                                >
                                                <div class="dropdown-menu " @click="$event.stopPropagation()">
                                                    <div class="dropdown-options-container" v-if="sharedCommunityResearchPlatformList">
                                                        <ul class="dropdown-content-options">
                                                            <li v-for="item in sharedCommunityResearchPlatformList" class="d-flex align-items-center mb-1">
                                                                <input :id="'sc-' + item.id" type="checkbox" :value="item.id" v-model="sharedCommunityResearchPlatformListInput" class="mr-1"/>
                                                                <label :for="'sc-' + item.id" class="mb-0"> {{ item.name }}</label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="dropdown-footer text-right">
                                                        <b-button @click="submitMultiDropdown('sharedCommunityResearchPlatformListMapArray', 'sharedCommunityResearchPlatformListValueCount', 'sharedCommunityResearchPlatformListInput', 'dropdownCommunityResearch')" class="btn modal-btn" >Done</b-button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-4 search-field form-group">
                                            <label class="control-label">Research Firm Name</label>
                                            <input type="text"
                                                   class="form-control recent-valuation"
                                                   autocomplete="off"
                                                   v-model="form.researchFirm_name"
                                                   @input="searchResearchFirmName($event.target.value,'researchFirm_name')"

                                            />
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab @click="mainFilter = 'leadershipGovernance'" :title="`Leadership & Governance ${totalLeadershipFilters}`" >
                                    <div class='row state-container'>
                                        <div class="col-md-2 search-field form-group">
                                            <label class="control-label">Has Board Members</label>
                                            <v-select :options="[{label: 'YES', id: 1}, {label: 'NO', id: 0}]"
                                                      placeholder="Select Below"
                                                      class="form-control"
                                                      ref="hasBoardMember"
                                                      v-model="form.hasBoardMember"
                                                      :reduce="option => option.id"
                                                      @input="getSearchResult"
                                            ></v-select>
                                        </div>
                                        <div class="col-md-2 search-field form-group">
                                            <label class="control-label">Has Executives</label>
                                            <v-select :options="[{label: 'YES', id: 1}, {label: 'NO', id: 0}]"
                                                      placeholder="Select Below"
                                                      class="form-control"
                                                      ref="hasExecutive"
                                                      v-model="form.hasExecutive"
                                                      :reduce="option => option.id"
                                                      @input="getSearchResult"
                                            ></v-select>
                                        </div>
                                        <div class="col-md-2 search-field form-group">
                                            <label class="control-label">Select Committee</label>
                                            <v-select :options="committees"
                                                      placeholder="Select Below"
                                                      class="form-control"
                                                      ref="committee"
                                                      label="name"
                                                      v-model="form.committee"
                                                      :reduce="option => option.id"
                                                      @input="getSearchResult"
                                            ></v-select>
                                        </div>
                                        <div class="col-md-2 search-field form-group">
                                            <label class="control-label">Select Executive Role</label>
                                            <v-select :options="executiveRoles"
                                                      placeholder="Select Below"
                                                      class="form-control"
                                                      ref="executiveRole"
                                                      label="name"
                                                      v-model="form.executiveRole"
                                                      :reduce="option => option.id"
                                                      @input="getSearchResult"
                                            ></v-select>
                                        </div>
                                        <div class="col-md-4 search-field form-group">
                                            <label class="control-label">Board members or executives by name </label>
                                            <input type="text"
                                                   class="form-control recent-valuation"
                                                   autocomplete="off"
                                                   v-model="form.memberName"
                                                   @input="getSearchResult"
                                            />
                                        </div>
                                    </div>
                                </b-tab>
                            </b-tabs>
                            <div class="search-results-top-section">
                            <hr>
                            <h4 class="text-theme-dark-blue font-weight-bold">Search Results</h4>
                            </div>
                            <b-tabs class="content-customized-tab screener-tab" nav-class="row screener-content-tab">
                                <b-tab :title="`Video ${totalVideo}`" @click="setTabType('video')">
                                    <div class='row search-result-container'>
                                        <div class="loader" v-if="contentLoading"></div>
                                        <div v-for="(data, index) in videoData" class="col-md-3 card-wrapper">
                                            <div class='card'>
                                                <router-link link :to="{ name: data.routeName ,params: { slug:data.companySlug, id: data.mediaUuid }}">
                                                <span class="bg_content_photo"
                                                      v-bind:style="{ 'background-image': 'url(' + data.fileThumb + ')' }"></span>
                                                </router-link>
                                                <div class='card-body'>
                                                    <img class="rounded-circle float-left mr-2 mb-5" :src="data.companyImage"
                                                         width="25" height="25"/>
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
                                        <div class="col-md-12" v-if="! videoData.length">
                                            No Search Results.
                                        </div>
                                        <div class="col-md-12">
                                            <pagination :pagination="contentPagination"
                                                        v-if="contentPagination.last_page > 1"
                                                        :offset="5"
                                                        @paginate="getSearchResult(false)"></pagination>
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab :title="`Audio ${totalAudio}`" @click="setTabType('audio')">
                                    <div class='row search-result-container'>
                                        <div class="loader" v-if="contentLoading"></div>
                                        <div v-for="(data, index) in audioData" class="col-md-3 card-wrapper">
                                            <div class='card'>
                                                <router-link link :to="{ name: data.routeName ,params: { slug:data.companySlug, id: data.mediaUuid }}">
                                                <span class="bg_content_photo"
                                                      v-bind:style="{ 'background-image': 'url(' + data.fileThumb + ')' }"></span>
                                                </router-link>
                                                <div class='card-body'>
                                                    <img class="rounded-circle float-left mr-2 mb-5" :src="data.companyImage"
                                                         width="25" height="25"/>
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
                                        <div class="col-md-12" v-if="! audioData.length">
                                            No Search Results.
                                        </div>
                                        <div class="col-md-12">
                                            <pagination :pagination="contentPagination"
                                                        v-if="contentPagination.last_page > 1"
                                                        :offset="5"
                                                        @paginate="getSearchResult(false)"></pagination>
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab :title="`Company ${totalCompany}`" @click="setTabType('company')">
                                    <div class='row search-result-container'>
                                        <div class="loader" v-if="contentLoading"></div>
                                        <div v-for="(data, index) in companyData" class="col-md-3 card-wrapper">
                                            <div class='card'>
                                                <router-link link :to="'/company/' + data.companySlug">
                                                <span class="bg_content_photo"
                                                      v-bind:style="{ 'background-image': 'url(' + data.companyImage + ')' }"></span>
                                                </router-link>
                                                <div class='card-body'>
                                                    <!--<router-link :to="'/company/' + data.companySlug">
                                                        <center>
                                                            <img :src="data.companyImage" alt="" class="text-center rounded-circle mb-2" width="80" height="80">
                                                        </center>
                                                    </router-link>-->
                                                    <p class="warp-text-title font-weight-bold">{{data.name}}</p>
                                                    <!-- <p class="warp-text-title"><i class="fas fa-map-marker-alt"></i> {{data.address}}</p>
                                                     <p class="warp-text-title"><i class="fas fa-phone-alt"></i> {{data.phone}}</p>-->
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-12" v-if="! companyData.length">
                                            No Search Results.
                                        </div>
                                        <div class="col-md-12">
                                            <pagination :pagination="contentPagination"
                                                        v-if="contentPagination.last_page > 1"
                                                        :offset="5"
                                                        @paginate="getSearchResult(false)"></pagination>
                                        </div>
                                    </div>
                                </b-tab>


                            </b-tabs>
                        </div>
                    </div>
                </div>
            </div>
            <template>
                <div>
                    <b-modal v-model="modalShow" hide-footer centered :title="modalName">
                        <template >
                            <div class="col-lg-12">
                                <v-select label="name" multiple
                                          :options="popupModalFilteredOptions"
                                          :clearable="false"
                                          class="w100"
                                          placeholder="Select the Options that Apply"
                                          v-model="form.itemInput"

                                ></v-select>
                            </div>
                            <b-input-group class="justify-content-end">
                                <b-button class="btn modal-btn mt-3" @click="changeFieldSelection($event,'intelletualPropertySelected')" >
                                    OK
                                </b-button>
                            </b-input-group>
                        </template>
                    </b-modal>
                </div>
            </template>

            <!-- Modal: Search Query Name -->
            <b-modal
                id="saveSearchQueryModal"
                ref="saveSearchQueryModal"
                title="Save Search Query"
                centered
                hide-footer
            >
                <form @submit.prevent="saveSearchHistory" ref="formSearchQuery">
                    <div class="col-lg-12">
                        <input type="text" ref="queryName" v-model="queryName" placeholder="Enter Name" class="form-control px-2"  :class="{ 'is-invalid': $v.queryName.$error || errors.queryName }"/>
                        <div v-if="!$v.queryName.required" class="invalid-feedback">Name is required.</div>
                        <div v-else-if="errors.queryName" class="invalid-feedback" role="alert">{{ errors.queryName }}</div>
                    </div>
                    <b-input-group class="justify-content-end">
                        <b-button class="btn modal-btn mt-3" type="submit"> Save </b-button>
                    </b-input-group>
                </form>
            </b-modal>
            <loader :is-visible="isLoading"></loader>
        </section>
    </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import vSelect from 'vue-select'
import Common from '../apis/Common'
import Screener from "../apis/Screener";
import Content from "../apis/Content";
import SearchHistory from '../apis/SearchHistory';
import {required} from 'vuelidate/lib/validators'
import Geography from '../apis/Geography';
import Questionnnaire from "../apis/Questionnnaire";

export default {
    data() {
        return {
            showSearchClear: false,
            isLoading: false,
            isDisabled:false,
            modalShow: false,
            modalData: [],
            itemIds:{},
            arrayName: "",
            inputName: "",
            mappedIdsName: "",
            modalName: "",
            optionData: "",

            tradingAndReportingStatusListIds: [],
            tradingAndReportingStatusListInput: [],
            tradingAndReportingStatusListMapArray: [],
            tradingAndReportingStatusListValueCount: 0,

            socialMediaListIds: [],
            socialMediaListInput: [],
            socialMediaListMapArray: [],
            socialMediaListValueCount: 0,

            intellectualPropertyIds: [],
            intellectualMapArray:[],
            intellectualInput:[],
            intellectualPropertyValueCount: 0,

            researchCoverageTypeIds: [],
            researchCoverageTypeInput: [],
            researchMapArray:[],
            researchCoverageTypeValueCount: 0,

            financingTypeIds:[],
            financingTypeInput: [],
            financingMapArray:[],
            financingTypeValueCount : 0,

            sharedCommunityResearchPlatformListIds: [],
            sharedCommunityResearchPlatformListInput: [],
            sharedCommunityResearchPlatformListMapArray: [],
            sharedCommunityResearchPlatformListValueCount: 0,

            minorityOwnedBusinessIds: [],
            minorityOwnedBusinessMapArray:[],
            minorityOwnedBusinessInput:[],
            minorityOwnedBusinessValueCount: 0,

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

            industrySelected: "field-no-selected",
            sectorSelected: "field-no-selected",
            subSectorSelected: "field-no-selected",
            groupSelected: "field-no-selected",
            subGroupSelected: "field-no-selected",
            echelonSelected: "field-no-selected",
            subEchelonSelected: "field-no-selected",
            tierSelected: "field-no-selected",
            subTierSelected: "field-no-selected",
            layerSelected: "field-no-selected",
            subLayerSelected: "field-no-selected",
            deckSelected: "field-no-selected",
            subDeckSelected: "field-no-selected",
            floorSelected: "field-no-selected",
            subFloorSelected: "field-no-selected",
            basementSelected: "field-no-selected",
            subBasementSelected: "field-no-selected",
            mineSelected: "field-no-selected",
            subMineSelected: "field-no-selected",

            entityTypeSelected: "field-no-selected",
            tradingAndReportingStatusSelected: "field-no-selected",
            publicPrivateReportingStatusSelected: "field-no-selected",
            shareholderNumberSelected: "field-no-selected",
            baseCurrencySelected: "field-no-selected",
            conglomerateSelected: "field-no-selected",
            researchCoverageTypeSelected: "field-no-selected",
            intelletualPropertySelected: "field-no-selected",
            financingTypeSelected: "field-no-selected",
            companyValuationSelected: "field-no-selected",
            auditedFinanceSelected: "field-no-selected",
            conductFinancingSelected: "field-no-selected",
            hasFounderSelected: "field-no-selected",
            hasCeoSelected: "field-no-selected",
            hasCfoSelected: "field-no-selected",
            hasSalesDepartmentSelected: "field-no-selected",
            hasIrdSelected: "field-no-selected",
            hasBusinessDevelopmentSelected: "field-no-selected",
            hasStrategicPartnershipSelected: "field-no-selected",
            hasSuppliersSelected: "field-no-selected",
            tickerSymbolSelected: "field-no-selected",
            scrpSelected: "field-no-selected",
            privatePublicCompanyTypesSelectd: "field-no-selected",
            domicileCountrySelected: "field-no-selected",
            stateSelected: "field-no-selected",
            citySelected: "field-no-selected",
            socialMediaSelected: "field-no-selected",
            employeeNumberSelected: "field-no-selected",
            esgRatingSelected: "field-no-selected",

            entityTypes: [],
            privatePublicCompanyTypes: [],
            tradingAndReportingStatusList: [],
            shareholderNumberList: [],
            baseCurrencyList: [],
            researchCoverageTypeList: [],
            intelletualPropertyList: [],
            minorityOwnedBusinessList: [],
            financingTypeList: [],
            sharedCommunityResearchPlatformList: [],
            searchResult: [],
            contentLoading: false,
            contentPagination: {
                'current_page': 1
            },

            socialMediaPlatforms: [],
            employeeNumberList: [],

            tabType: 'video',
            videoData: [],
            audioData: [],
            companyData: [],
            videoCompanyIds: [],
            audioCompanyIds: [],
            totalVideo: "",
            totalAudio: "",
            totalCompany: "",
            totalIndustries: null,
            totalSectors: null,
            totalSubSectors: null,
            totalGroups: null,
            totalSubGroups: null,
            totalEchelons: null,
            totalSubEchelons: null,
            totalTiers: null,
            totalSubTiers: null,
            totalLayers: null,
            totalSubLayers: null,
            totalDecks: null,
            totalSubDecks: null,
            totalFloors: null,
            totalSubFloors: null,
            totalBasements: null,
            totalSubBasements: null,
            totalMines: null,
            totalSubMines:null,
            lastSelectedOption: '',
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
                privatePublicCompany:"",
                shareholderNumber: "",
                employeeNumber: "",
                baseCurrency: "",
                conglomerate: null,
                researchCoverageType: "",
                intelletualProperty: "",
                conductFinancing: null,
                financingType: "",
                companyValuation: "",
                auditedFinance: null,
                searchStr: "",
                publicationDate: "",
                hasFounder: null,
                hasCeo: null,
                hasCfo: null,
                hasSalesDepartment: null,
                hasIrd: null,
                hasBusinessDevelopment: null,
                hasStrategicPartnership: null,
                hasSuppliers: null,
                tickerSymbol: null,
                esgRating: null,
                scrp: "",
                researchFirm_name:'',
                itemInput:[],

                socialMediaPlatform:"",

                videoPresenterTypes: null,
                videoSubTypes: null,
                videoSubjectTypes: null,

                audioPresenterTypes: null,
                audioSubTypes: null,
                audioSubjectTypes: null,
                formedYear: null,
                firstProductOrService: null,
                numberOfMajorProductOrService: null,
                changeDirectionOrStrategy: null,
                acquisitionsMade: null,
                spinOffMade: null,
                dividend: null,
                domicileCountry: "",
                city: '',
                state: '',
                country:'',
                province: '',
                hasBoardMember: null,
                hasExecutive: null,
                committee: '',
                executiveRole: '',
                memberName: '',
                isin: '',
                cusip: '',
                formedYearFromDate: null,
                formedYearToDate: null,
                publiclyTradedCompany: '',
                exchangeTradedOn:[],
                mediaPublishedFromDate: null,
                mediaPublishedToDate: null,
                mediaRecordedFromDate: null,
                mediaRecordedToDate: null,
            },

            videoSubTypes: [],
            videoSubTypeIds:[],
            videoSubTypeInput: [],
            videoSubTypeMapArray: [],
            videoSubTypeValueCount: 0,

            videoSubjectTypes: [],
            videoSubjectTypeIds:[],
            videoSubjectTypeInput: [],
            videoSubjectTypeMapArray: [],
            videoSubjectTypeValueCount: 0,

            videoPresenterTypes: [],
            videoParticipantIds: [],
            videoParticipantInput: [],
            videoParticipantMapArray: [],
            videoParticipantValueCount: 0,

            audioSubTypes: [],
            audioSubTypeIds: [],
            audioSubTypeInput: [],
            audioSubTypeMapArray: [],
            audioSubTypeValueCount: 0,

            audioSubjectTypes: [],
            audioSubjectTypeIds:[],
            audioSubjectTypeInput: [],
            audioSubjectTypeMapArray: [],
            audioSubjectTypeValueCount: 0,

            audioPresenterTypes: [],
            audioParticipantIds: [],
            audioParticipantInput: [],
            audioParticipantMapArray: [],
            audioParticipantValueCount: 0,
            mainFilter: 'industry',
            selectedSearchHistory: null,
            searchHistories: [],
            queryName: '',
            errors: [],
            countries: [],
            states: [],
            haveState: 0,
            haveProvince: 0,
            researchDropdown: false,
            executiveRoles: [],
            committees: [],
            publiclyTradedCompanyTypeList:[],
            exchangeTradedIds: [],
            exchangeTradedList: [],
            exchangedTradedOnIds:[],
            exchangedTradedOnInput: [],
            exchangedTradedOnMapArray: [],
            exchangedTradedOnValueCount: 0,
        };
    },
    methods: {
        popupModal(items, arrayName, inputName, mapName, modalName, valueCount) {
            this.modalShow = !this.modalShow;
            this.modalData = items;
            this.itemIds=[];
            this.arrayName = arrayName;
            this.inputName = inputName;
            this.mappedIdsName = mapName;
            this.modalName = modalName;
            this.optionData = valueCount;

            this.form.itemInput = this[this.inputName]; //example this.intellectualInput
        },
        inputFieldIds: function (field, list) {
            this.itemIds = field;
            // this[list] = Object.keys(field).map((key) => {
            //     console.log(field[key].name);
            //     return field[key].id
            // })
        },
        getIndustries: async function () {
            axios.get('/api/industry-list')
                .then(response => {
                    this.industries = response.data.data
                    this.updateFieldSelection('industry')
                })
                .catch(error => console.log(error))
        },
        getSectors: async function (value) {
            await this.getSearchResult()
            if (value != null || value != undefined) {
                axios.get('/api/get-node-list/' + value.id + '/Sector/Industry')
                    .then(response => {
                        this.sectors = response.data.data;
                        this.updateFieldSelection('sectors')
                    })
                    .catch(error => console.log(error))
            }
            this.clearNodeValue('sectors');
        },
        getSubSectors: async function (value) {
            await this.getSearchResult()
            if (value != null || value != undefined) {

                axios.get('/api/get-node-list/' + value.id + '/SubSector/Sector')
                    .then(response => {
                        this.subSectors = response.data.data
                        this.updateFieldSelection('subSectors')
                    })
                    .catch(error => console.log(error))
            }
            this.clearNodeValue('subSectors');
        },
        getGroups: async function (value) {
            await this.getSearchResult()
            if (value != null || value != undefined) {
                axios.get('/api/get-node-list/' + value.id + '/Group/SubSector')
                    .then(response => {
                        this.groups = response.data.data
                        this.updateFieldSelection('groups')
                    })
                    .catch(error => console.log(error))
            }
            this.clearNodeValue('groups');
        },
        getSubGroups: async function (value) {
            await this.getSearchResult()
            if (value != null || value != undefined) {

                axios.get('/api/get-node-list/' + value.id + '/SubGroup/Group')
                    .then(response => {
                        this.subGroups = response.data.data
                        this.updateFieldSelection('subGroups')
                    })
                    .catch(error => console.log(error))
            }
            this.clearNodeValue('subGroups');
        },
        getEchelons: async function (value) {
            await this.getSearchResult()
            if (value != null || value != undefined) {
                axios.get('/api/get-node-list/' + value.id + '/Echelon/SubGroup')
                    .then(response => {
                        this.echelons = response.data.data
                        this.updateFieldSelection('echelons')
                    })
                    .catch(error => console.log(error))
            }
            this.clearNodeValue('echelons');
        },
        getSubEchelons: async function (value) {
            await this.getSearchResult()
            if (value != null || value != undefined) {
                axios.get('/api/get-node-list/' + value.id + '/SubEchelon/Echelon')
                    .then(response => {
                        this.subEchelons = response.data.data
                        this.updateFieldSelection('subEchelons')
                    })
                    .catch(error => console.log(error))
            }
            this.clearNodeValue('subEchelons');
        },
        getTiers: async function (value) {
            await this.getSearchResult()
            if (value != null || value != undefined) {
                axios.get('/api/get-node-list/' + value.id + '/Tier/SubEchelon')
                    .then(response => {
                        this.tiers = response.data.data
                        this.updateFieldSelection('tiers')
                    })
                    .catch(error => console.log(error))
            }
            this.clearNodeValue('tiers');
        },
        getSubTiers: async function (value) {
            await this.getSearchResult()
            if (value != null || value != undefined) {
                axios.get('/api/get-node-list/' + value.id + '/SubTier/Tier')
                    .then(response => {
                        this.subTiers = response.data.data
                        this.updateFieldSelection('subTiers')
                    })
                    .catch(error => console.log(error))
            }
            this.clearNodeValue('subTiers');
        },
        getLayers: async function (value) {
            await this.getSearchResult()
            if (value != null || value != undefined) {
                axios.get('/api/get-node-list/' + value.id + '/Layer/SubTier')
                    .then(response => {
                        this.layers = response.data.data
                        this.updateFieldSelection('layers')
                    })
                    .catch(error => console.log(error))
            }
            this.clearNodeValue('layers');
        },
        getSubLayers: async function (value) {
            await this.getSearchResult()
            if (value != null || value != undefined) {
                axios.get('/api/get-node-list/' + value.id + '/SubLayer/Layer')
                    .then(response => {
                        this.subLayers = response.data.data
                        this.updateFieldSelection('subLayers')
                    })
                    .catch(error => console.log(error))
            }
            this.clearNodeValue('subLayers');
        },
        getDecks: async function (value) {
            await this.getSearchResult()
            if (value != null || value != undefined) {
                axios.get('/api/get-node-list/' + value.id + '/Deck/SubLayer')
                    .then(response => {
                        this.decks = response.data.data
                        this.updateFieldSelection('decks')
                    })
                    .catch(error => console.log(error))
            }
            this.clearNodeValue('decks');
        },
        getSubDecks: async function (value) {
            await this.getSearchResult()
            if (value != null || value != undefined) {
                axios.get('/api/get-node-list/' + value.id + '/SubDeck/Deck')
                    .then(response => {
                        this.subDecks = response.data.data
                        this.updateFieldSelection('subDecks')
                    })
                    .catch(error => console.log(error))
            }
            this.clearNodeValue('subDecks');
        },
        getFloors: async function (value) {
            await this.getSearchResult()
            if (value != null || value != undefined) {

                axios.get('/api/get-node-list/' + value.id + '/Floor/SubDeck')
                    .then(response => {
                        this.floors = response.data.data
                        this.updateFieldSelection('floors')
                    })
                    .catch(error => console.log(error))
            }
            this.clearNodeValue('floors');
        },
        getSubFloors: async function (value) {
            await this.getSearchResult()
            if (value != null || value != undefined) {
                axios.get('/api/get-node-list/' + value.id + '/SubFloor/Floor')
                    .then(response => {
                        this.subFloors = response.data.data
                        this.updateFieldSelection('subFloors')
                    })
                    .catch(error => console.log(error))
            }
            this.clearNodeValue('subFloors');
        },
        getBasements: async function (value) {
            await this.getSearchResult()
            if (value != null || value != undefined) {
                axios.get('/api/get-node-list/' + value.id + '/Basement/SubFloor')
                    .then(response => {
                        this.basements = response.data.data
                        this.updateFieldSelection('basements')
                    })
                    .catch(error => console.log(error))
            }
            this.clearNodeValue('basements');
        },
        getSubBasements: async function (value) {
            await this.getSearchResult()
            if (value != null || value != undefined) {

                axios.get('/api/get-node-list/' + value.id + '/SubBasement/Basement')
                    .then(response => {
                        this.subBasements = response.data.data
                        this.updateFieldSelection('subBasements')
                    })
                    .catch(error => console.log(error))
            }
            this.clearNodeValue('subBasements');
        },
        getMines: async function (value) {
            await this.getSearchResult()
            if (value != null || value != undefined) {
                axios.get('/api/get-node-list/' + value.id + '/Mine/SubBasement')
                    .then(response => {
                        this.mines = response.data.data
                        this.updateFieldSelection('mines')
                    })
                    .catch(error => console.log(error))
            }
            this.clearNodeValue('mines');
        },
        getSubMines: async function (value) {
            await this.getSearchResult()
            if (value != null || value != undefined) {
                axios.get('/api/get-node-list/' + value.id + '/SubMine/Mine')
                    .then(response => {
                        this.subMines = response.data.data
                        this.updateFieldSelection('subMines')
                    })
                    .catch(error => console.log(error))
            }
            this.clearNodeValue('subMines');
        },
        subMinesChange: function (value) {
            // this.subMineSelected = "field-no-selected";
            if(!! value){
                this.getSearchResult()
            }
        },
        clearNodeValue: function (expression) {
            switch (expression) {
                case 'industry':
                    this.form.industry = '';
                    this.industries = [];
                case 'sectors':
                    this.form.sector = '';
                    this.sectors = [];
                    this.sectorSelected = "field-no-selected";
                case 'subSectors':
                    this.form.subSector = '';
                    this.subSectors = [];
                    this.subSectorSelected = "field-no-selected";
                case 'groups':
                    this.form.group = '';
                    this.groups = [];
                    this.groupSelected = "field-no-selected";
                case 'subGroups':
                    this.form.subGroup = '';
                    this.subGroups = [];
                    this.subGroupSelected = "field-no-selected";
                case 'echelons':
                    this.form.echelon = '';
                    this.echelons = [];
                    this.echelonSelected = "field-no-selected";
                case 'subEchelons':
                    this.form.subEchelon = '';
                    this.subEchelons = [];
                    this.subEchelonSelected = "field-no-selected";
                case 'tiers':
                    this.form.tier = '';
                    this.tiers = [];
                    this.tierSelected = "field-no-selected";
                case 'subTiers':
                    this.form.subTier = '';
                    this.subTiers = [];
                    this.subTierSelected = "field-no-selected";
                case 'layers':
                    this.form.layer = '';
                    this.layers = [];
                    this.layerSelected = "field-no-selected";
                case 'subLayers':
                    this.form.subLayer = '';
                    this.subLayers = [];
                    this.subLayerSelected = "field-no-selected";
                case 'decks':
                    this.form.deck = '';
                    this.decks = [];
                    this.deckSelected = "field-no-selected";
                case 'subDecks':
                    this.form.subDeck = '';
                    this.subDeck = [];
                    this.subDeckSelected = "field-no-selected";
                case 'floors':
                    this.form.floor = '';
                    this.floors = [];
                    this.floorSelected = "field-no-selected";
                case 'subFloors':
                    this.form.subFloor = '';
                    this.subFloors = [];
                    this.subFloorSelected = "field-no-selected";
                case 'basements':
                    this.form.basement = '';
                    this.basements = [];
                    this.basementSelected = "field-no-selected";
                case 'subBasements':
                    this.form.subBasement = '';
                    this.subBasements = [];
                    this.subBasementSelected = "field-no-selected";
                case 'mines':
                    this.form.mine = '';
                    this.mines = [];
                    this.mineSelected = "field-no-selected";
                case 'subMines':
                    this.form.subMine = '';
                    this.subMines = [];
                    this.subMineSelected = "field-no-selected";
                case 'state':
                    this.form.state = '';
                    this.states = [];
                    this.stateSelected = "field-no-selected";
                case 'province':
                    this.form.province = '';
            }
        },
        updateFieldSelection: function(nodeType){
            switch (nodeType) {
                case 'subMines':
                    this.subMineSelected = "";
                case 'mines':
                    this.mineSelected = "";
                case 'subBasements':
                    this.subBasementSelected = "";
                case 'basements':
                    this.basementSelected = "";
                case 'subFloors':
                    this.subFloorSelected = "";
                case 'floors':
                    this.floorSelected = "";
                case 'subDecks':
                    this.subDeckSelected = "";
                case 'decks':
                    this.deckSelected = "";
                case 'subLayers':
                    this.subLayerSelected = "";
                case 'layers':
                    this.layerSelected = "";
                case 'subTiers':
                    this.subTierSelected = "";
                case 'tiers':
                    this.tierSelected = "";
                case 'subEchelons':
                    this.subEchelonSelected = "";
                case 'echelons':
                    this.echelonSelected = "";
                case 'subGroups':
                    this.subGroupSelected = "";
                case 'groups':
                    this.groupSelected = "";
                case 'subSectors':
                    this.subSectorSelected = '';
                case 'sectors':
                    this.sectorSelected = '';
                case 'industry':
                    this.industrySelected = '';
                case 'state':
                    this.stateSelected = ''
            }
        },
        getEntityTypeList: async function (country_id) {
            return axios.get('/api/get-entity-type/' + country_id)
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
        // getTradingAndReportingStatusList: async function (value) {
        //     this.tradingAndReportingStatusList = []
        //     this.form.publicPrivateReportingStatus = ''
        //     this.getSearchResult()
        //     this.publicPrivateReportingStatusSelected = "field-no-selected";
        //     this.tradingAndReportingStatusSelected = "field-no-selected";
        //     if (value != null) {
        //         this.tradingAndReportingStatusSelected = "";
        //         axios.get('/api/get-trading-and-reporting-status-list/' + value.id)
        //             .then(response => {
        //                 // this.form.publicPrivateReportingStatus = 0;
        //                 this.tradingAndReportingStatusList = response.data.data
        //             })
        //             .catch(error => console.log(error))
        //     }
        // },
        getSocialMediaPlatformList: async function () {
            return axios.get('/api/get-all-social-media-platform')
                .then(response => {
                    this.socialMediaPlatforms = response.data.data
                })
                .catch(error => console.log(error))
        },
        getTradingAndReportingStatusList: async function () {
            return axios.get('/api/get-all-trading-and-reporting-status-list')
                .then(response => {
                    this.tradingAndReportingStatusList = response.data.data
                })
                .catch(error => console.log(error))
        },
        getShareholderNumberList: async function () {
            return axios.get('/api/get-shareholder-number-list')
                .then(response => {
                    this.shareholderNumberList = response.data.data
                })
                .catch(error => console.log(error))
        },
        getEmployeeNumberList: async function () {
            return axios.get('/api/get-employee-number-list')
                .then(response => {
                    this.employeeNumberList = response.data.data
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
        getSharedCommunityResearchPlatformList: async function () {
            await axios.get('/api/get-shared-community-research-platform-list')
                .then(response => {

                    this.sharedCommunityResearchPlatformList = response.data.data
                })
                .catch(error => console.log(error))
        },
        changeFieldSelection: function(value, field){
            let arrayNameIds = this.arrayName;
            this[this.inputName] = this.form.itemInput;
            this[arrayNameIds] = this.form.itemInput;

            this[this.mappedIdsName] = this[arrayNameIds].map(x =>
                x.id)

            this[this.optionData] = this[this.mappedIdsName].length;

            this[field] = "field-no-selected";
            if(null != value){
                this[field] = '';
            }
            this.getSearchResult()
            this.modalShow= false;
        },
        changeInputFieldSelection: function(value, field){
            this[field] = "field-no-selected";
            if('' != value){
                this[field] = '';
            }
            this.getSearchResult()
        },
        searchResearchFirmName: function(value, field){
            this[field] = "field-no-selected";
            if('' != value){
                this[field] = '';
            }
            this.getSearchResult()
        },
        getMinorityOwnedBusinessList: async function () {
            axios.get('/api/get-owned-business-list')
                .then(response => {
                    this.minorityOwnedBusinessList = response.data.data

                })
                .catch(error => console.log(error))
        },
        getSearchResult: async function (clearPage = true) {
            if (clearPage) {
                this.contentPagination.current_page = 1;
            }
            this.contentLoading = true;
            var totalCount = 0;
            this.setTotalResultCount(this.lastSelectedOption, 0);
            const params = new URLSearchParams();
            params.append('tabType', this.tabType);
            params.append('searchStr', this.form.searchStr);
            params.append('publicationDate', (!!this.form.publicationDate) ? this.dateConvert(this.form.publicationDate) : "");
            params.append('privatePublicCompany', (!!this.form.privatePublicCompany) ? this.form.privatePublicCompany.id : "");
            params.append('entityType', (!!this.form.entityType) ? this.form.entityType.id : "");
            params.append('tradingAndReportingStatus', (!!this.tradingAndReportingStatusListMapArray) ? this.tradingAndReportingStatusListMapArray : "");
            params.append('publicPrivateReportingStatus', (!!this.form.publicPrivateReportingStatus) ? this.form.publicPrivateReportingStatus.id : "");
            params.append('shareholderNumber', (!!this.form.shareholderNumber) ? this.form.shareholderNumber.id : "");
            params.append('employeeNumber', (!!this.form.employeeNumber) ? this.form.employeeNumber.id : "");
            params.append('baseCurrency', (!!this.form.baseCurrency) ? this.form.baseCurrency.id : "");
            params.append('conglomerate', (null != this.form.conglomerate) ? this.form.conglomerate : "");
            params.append('researchCoverageType', (!!this.researchMapArray) ? this.researchMapArray : "");
            params.append('intelletualProperty', (!!this.intellectualMapArray) ? this.intellectualMapArray : "");
            params.append('financingType', (!!this.financingMapArray) ? this.financingMapArray : "");
            params.append('companyValuation', (!!this.form.companyValuation) ? this.form.companyValuation.replace(/\D/g,'') : "");
            params.append('auditedFinance', (null != this.form.auditedFinance) ? this.form.auditedFinance : "");
            params.append('conductFinancing', (null != this.form.conductFinancing) ? this.form.conductFinancing : "");
            params.append('minorityOwnedBusiness', (!!this.minorityOwnedBusinessMapArray) ? this.minorityOwnedBusinessMapArray : "");
            params.append('esgRating', (null != this.form.esgRating) ? this.form.esgRating : "");

            params.append('hasFounder', (null != this.form.hasFounder) ? this.form.hasFounder : "");
            params.append('hasCeo', (null != this.form.hasCeo) ? this.form.hasCeo : "");
            params.append('hasCfo', (null != this.form.hasCfo) ? this.form.hasCfo : "");
            params.append('hasSalesDepartment', (null != this.form.hasSalesDepartment) ? this.form.hasSalesDepartment : "");
            params.append('hasIrd', (null != this.form.hasIrd) ? this.form.hasIrd : "");
            params.append('hasBusinessDevelopment', (null != this.form.hasBusinessDevelopment) ? this.form.hasBusinessDevelopment : "");
            params.append('hasStrategicPartnership', (null != this.form.hasStrategicPartnership) ? this.form.hasStrategicPartnership : "");
            params.append('hasSuppliers', (null != this.form.hasSuppliers) ? this.form.hasSuppliers : "");
            params.append('tickerSymbol',  (null != this.form.tickerSymbol) ? this.form.tickerSymbol : "");

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

            params.append('videoPresenterTypes', (!!this.videoParticipantMapArray) ? this.videoParticipantMapArray : "");
            params.append('videoSubTypes', (!!this.videoSubTypeMapArray) ? this.videoSubTypeMapArray : "");
            params.append('videoSubjectTypes', (!!this.videoSubjectTypeMapArray) ? this.videoSubjectTypeMapArray : "");

            params.append('audioPresenterTypes', (!!this.audioParticipantMapArray) ? this.audioParticipantMapArray : "");
            params.append('audioSubTypes', (!!this.audioSubTypeMapArray) ? this.audioSubTypeMapArray : "");
            params.append('audioSubjectTypes', (!!this.audioSubjectTypeMapArray) ? this.audioSubjectTypeMapArray : "");

            params.append('firstProductOrService', (!!this.form.firstProductOrService) ? this.form.firstProductOrService : "");
            params.append('numberOfMajorProductOrService', (!!this.form.numberOfMajorProductOrService) ? this.form.numberOfMajorProductOrService : "");
            params.append('changeDirectionOrStrategy', (!!this.form.changeDirectionOrStrategy) ? this.form.changeDirectionOrStrategy : "");

            params.append('acquisitionsMade', (!!this.form.acquisitionsMade) ? this.form.acquisitionsMade : "");
            params.append('spinOffMade', (!!this.form.spinOffMade) ? this.form.spinOffMade : "");
            params.append('dividend', (!!this.form.dividend) ? this.form.dividend : "");
            params.append('domicileCountry', (!!this.form.domicileCountry) ? this.form.domicileCountry.id : "");
            params.append('country', (!!this.form.country) ? this.form.country : "");
            params.append('state',  (!!this.form.state) ? this.form.state : "");
            params.append('province',  this.form.province);
            params.append('city',  this.form.city);
            params.append('scrp',  (null != this.sharedCommunityResearchPlatformListMapArray) ? this.sharedCommunityResearchPlatformListMapArray : "");
            params.append('researchFirmName', (!!this.form.researchFirm_name) ? this.form.researchFirm_name : "");

            params.append('socialMediaPlatform', (!!this.socialMediaListMapArray) ? this.socialMediaListMapArray : "");

            params.append('hasBoardMember', (null != this.form.hasBoardMember) ? this.form.hasBoardMember: "");
            params.append('hasExecutive', (null !=  this.form.hasExecutive) ? this.form.hasExecutive : "");
            params.append('committee', (!!this.form.committee) ? this.form.committee : "");
            params.append('executiveRole', (!!this.form.executiveRole) ? this.form.executiveRole : "");
            params.append('memberName',(!!this.form.memberName) ? this.form.memberName : "");

            params.append('isin', (!!this.form.isin) ? this.form.isin : "");
            params.append('cusip', (!!this.form.cusip) ? this.form.cusip : "");

            params.append('formedYearFromDate', (!!this.form.formedYearFromDate) ? new Date(this.form.formedYearFromDate).getFullYear() : "");
            params.append('formedYearToDate', (!!this.form.formedYearToDate) ? new Date(this.form.formedYearToDate).getFullYear() : "");
            params.append('publiclyTradedCompany', (!!this.form.publiclyTradedCompany) ? this.form.publiclyTradedCompany.id : "");
            params.append('exchangedTradedOn', (!!this.exchangedTradedOnMapArray) ? this.exchangedTradedOnMapArray : "");

            params.append('mediaPublishedFromDate', (!!this.form.mediaPublishedFromDate) ? this.dateConvert(this.form.mediaPublishedFromDate) : "");
            params.append('mediaPublishedToDate', (!!this.form.mediaPublishedToDate) ? this.dateConvert(this.form.mediaPublishedToDate) : "");
            params.append('mediaRecordedFromDate', (!!this.form.mediaRecordedFromDate) ? this.dateConvert(this.form.mediaRecordedFromDate) : "");
            params.append('mediaRecordedToDate', (!!this.form.mediaRecordedToDate) ? this.dateConvert(this.form.mediaRecordedToDate) : "");

            this.totalVideo = ' (0)';
            this.totalAudio = ' (0)';
            this.totalCompany = ' (0)';

            await Screener.newScreenerData(params)
                .then(response => {
                    this.contentLoading = false
                    this.contentPagination = response.data.data.pagination
                    this.videoData = response.data.data.videoData
                    this.audioData = response.data.data.audioData
                    this.companyData = response.data.data.companyData

                    if(!! response.data.data.totalAudio){
                        totalCount += response.data.data.totalAudio
                        this.totalAudio =  ' ('+  response.data.data.totalAudio+')';
                    }
                    if(!! response.data.data.totalVideo){
                        totalCount += response.data.data.totalVideo
                        this.totalVideo =  ' ('+  response.data.data.totalVideo+')';
                    }
                    if(!! response.data.data.totalCompany){
                        totalCount += response.data.data.totalCompany
                        this.totalCompany =  ' ('+  response.data.data.totalCompany+')';
                    }
                    this.setTotalResultCount(this.lastSelectedOption, totalCount);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        setTabType(tabValue) {
            if(this.tabType != tabValue) {
                this.tabType = tabValue;
                this.getSearchResult();
            }
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
        setLastSelectedOption(option) {
            if(this.lastSelectedOption != option) {
                this.lastSelectedOption = option;
            }
        },
        setTotalResultCount(selectedOption = null, count = null) {
            if (!selectedOption || this.mainFilter != 'industry') return;
            switch(selectedOption) {
                case 'industry':
                    this.totalIndustries = count;
                    break;
                case 'sector' :
                    this.totalSectors = count;
                    break;
                case 'subsector' :
                    this.totalSubSectors = count;
                    break;
                case 'group' :
                    this.totalGroups = count;
                    break;
                case 'subgroup' :
                    this.totalSubGroups = count;
                    break;
                case 'echelon' :
                    this.totalEchelons = count;
                    break;
                case 'subechelon' :
                    this.totalSubEchelons = count;
                    break;
                case 'tier' :
                    this.totalTiers = count;
                    break;
                case 'subtier' :
                    this.totalSubTiers = count;
                    break;
                case 'layer' :
                    this.totalLayers = count;
                    break;
                case 'sublayer' :
                    this.totalSubLayers = count;
                    break;
                case 'deck' :
                    this.totalDecks = count;
                    break;
                case 'subdeck' :
                    this.totalSubDecks = count;
                    break;
                case 'floor' :
                    this.totalFloors = count;
                    break;
                case 'subfloor' :
                    this.totalSubFloors = count;
                    break;
                case 'basement' :
                    this.totalBasements = count;
                    break;
                case 'subbasement' :
                    this.totalSubBasements = count;
                    break;
                case 'mine' :
                    this.totalMines = count;
                    break;
                case 'submine' :
                    this.totalSubMines = count;
                    break;
            }
        },
        getMediaTypes(type) {
            axios.get('/api/get-media-sub-type/' + type)
                .then(response => {
                    if (type == 2) {
                        this.videoSubTypes = response.data.data;
                    } else {
                        this.audioSubTypes = response.data.data;
                    }

                })
                .catch(error => console.log(error))
        },
        getSubjectTypes(type) {
            axios.get('/api/get-subject-type/' + type)
                .then(response => {
                    if (type == 2) {
                        this.videoSubjectTypes = response.data.data;
                    } else {
                        this.audioSubjectTypes = response.data.data;
                    }
                })
                .catch(error => console.log(error))
        },
        getMediaPresenterType(type) {
            axios.get('/api/get-media-presenter-type/' + type)
                .then(response => {
                    this.mediaPresenterTypes = response.data.data
                    if (type == 2) {
                        this.videoPresenterTypes = response.data.data;
                    } else {
                        this.audioPresenterTypes = response.data.data;
                    }
                })
                .catch(error => console.log(error))
        },
        dateChange(filterType) {
            //formed year
            if (filterType == 'formedYearFromDate') {
                if (!!this.form.formedYearToDate && this.form.formedYearFromDate > this.form.formedYearToDate) {
                    this.form.formedYearToDate = null;
                }
            }
            if (filterType == 'formedYearToDate') {
                if (!!this.form.formedYearFromDate && this.form.formedYearFromDate > this.form.formedYearToDate) {
                    this.form.formedYearFromDate = null;
                }
            }

            //Media date change
            if (filterType == 'mediaPublishedFromDate') {
                if (!!this.form.mediaPublishedToDate
                    && (this.dateConvert(this.form.mediaPublishedFromDate) > this.dateConvert(this.form.mediaPublishedToDate))) {
                    this.form.mediaPublishedToDate = null;
                }
            }
            if (filterType == 'mediaPublishedToDate') {
                if (!!this.form.mediaPublishedFromDate
                    && (this.dateConvert(this.form.mediaPublishedFromDate) > this.dateConvert(this.form.mediaPublishedToDate))) {
                    this.form.mediaPublishedFromDate = null;
                }
            }
            if (filterType == 'mediaRecordedFromDate') {
                if (!!this.form.mediaRecordedToDate
                    && (this.dateConvert(this.form.mediaRecordedFromDate) > this.dateConvert(this.form.mediaRecordedToDate))) {
                    this.form.mediaRecordedToDate = null;
                }
            }
            if (filterType == 'mediaRecordedToDate') {
                if (!!this.form.mediaRecordedFromDate
                    && (this.dateConvert(this.form.mediaRecordedFromDate) > this.dateConvert(this.form.mediaRecordedToDate))) {
                    this.form.mediaRecordedFromDate = null;
                }
            }

            this.getSearchResult();
        },
        getSearchHistories() {
            SearchHistory.getSearchHistories()
                .then((response) => {
                    if (response.data.resultCode == 200) {
                        this.searchHistories = response.data.data;
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        },
        deleteSearchHistory() {
            var vueInstance = this;
            $.confirm({
                title: 'Are you sure you want to delete this screener configuration?',
                content: '<hr class="m-0">',
                titleClass: 'font-weight-bold text-center confirm-modal-title',
                closeIcon: true,
                columnClass: 'medium',
                animation: 'top',
                closeAnimation: 'top',
                bgOpacity: 0.6,
                buttons: {
                    Yes: {
                        btnClass: 'btn-success rounded-pill mr-3',
                        action: function () {
                            SearchHistory.deleteSearchHistory(vueInstance.selectedSearchHistory.id)
                                .then((response) => {
                                    if (response.data.resultCode == 200) {
                                        vueInstance.searchHistories = vueInstance.searchHistories.filter(item => item.id != vueInstance.selectedSearchHistory.id);
                                        vueInstance.selectedSearchHistory = null;
                                        // vueInstance.getSearchResult(true);
                                        toastr.success(response.data.success.message);
                                    }
                                })
                                .catch(error => {
                                    toastr.error(error.response ? error.response.data.error.message : error );
                                });
                        },
                    },
                    Cancel: {
                        btnClass: 'btn-default rounded-pill'
                    },
                }
            });
        },
        loadSearchHistory: async function() {
            if (!this.selectedSearchHistory) {
                toastr.warning('Select a saved query');
            }
            this.isLoading = true;
            this.mainFilter = 'industry';
            await this.clearSelectedValuesBeforeSQ();
            if (this.selectedSearchHistory.query_string) {
                let parsedData = JSON.parse(this.selectedSearchHistory.query_string);
                if (parsedData.industry && !!parsedData.industry) {
                    this.setLastSelectedOption('industry');
                    this.form.industry = parsedData.industry;
                    await this.getSectors(parsedData.industry)
                } else {  this.form.industry = ""; }

                if (parsedData.sector && !!parsedData.sector) {
                    this.setLastSelectedOption('sector');
                    this.form.sector = parsedData.sector;
                    await this.getSubSectors(parsedData.sector);
                } else { this.form.sector = ""; }

                if (parsedData.subSector && !!parsedData.subSector) {
                    this.setLastSelectedOption('subsector');
                    this.form.subSector = parsedData.subSector;
                    await this.getGroups(parsedData.subSector);
                } else { this.form.subSector = ""; }

                if (parsedData.group && !!parsedData.group) {
                    this.setLastSelectedOption('group');
                    this.form.group = parsedData.group;
                    await this.getSubGroups(parsedData.group);
                } else { this.form.group = ""; }

                if (parsedData.subGroup && !!parsedData.subGroup) {
                    this.setLastSelectedOption('subgroup');
                    this.form.subGroup = parsedData.subGroup;
                    await this.getEchelons(parsedData.subGroup);
                } else { this.form.subGroup = ""; }

                if (parsedData.echelon && !!parsedData.echelon) {
                    this.setLastSelectedOption('echelon');
                    this.form.echelon = parsedData.echelon;
                    await this.getSubEchelons(parsedData.echelon);
                } else { this.form.echelon = ""; }

                if (parsedData.subEchelon && !!parsedData.subEchelon) {
                    this.setLastSelectedOption('subechelon');
                    this.form.subEchelon = parsedData.subEchelon;
                    await this.getTiers(parsedData.subEchelon);
                } else { this.form.subEchelon = ""; }

                if (parsedData.tier && !!parsedData.tier) {
                    this.setLastSelectedOption('tier');
                    this.form.tier = parsedData.tier;
                    await this.getSubTiers(parsedData.tier);
                } else { this.form.tier = ""; }

                if (parsedData.subTier && !!parsedData.subTier) {
                    this.setLastSelectedOption('subtier');
                    this.form.subTier = parsedData.subTier;
                    await this.getLayers(parsedData.subTier);
                } else { this.form.subTier = ""; }

                if (parsedData.layer && !!parsedData.layer) {
                    this.setLastSelectedOption('layer');
                    this.form.layer = parsedData.layer;
                    await this.getSubLayers(parsedData.layer);
                } else { this.form.layer = ""; }

                if (parsedData.subLayer && !!parsedData.subLayer) {
                    this.setLastSelectedOption('sublayer');
                    this.form.subLayer = parsedData.subLayer;
                    await this.getDecks(parsedData.subLayer);
                } else { this.form.subLayer = ""; }

                if (parsedData.deck && !!parsedData.deck) {
                    this.setLastSelectedOption('deck');
                    this.form.deck = parsedData.deck;
                    await this.getSubDecks(parsedData.deck);
                } else { this.form.deck = ""; }

                if (parsedData.subDeck && !!parsedData.subDeck) {
                    this.setLastSelectedOption('subdeck');
                    this.form.subDeck = parsedData.subDeck;
                    await this.getFloors(parsedData.subDeck);
                } else { this.form.subDeck = ""; }

                if (parsedData.floor && !!parsedData.floor) {
                    this.setLastSelectedOption('floor');
                    this.form.floor = parsedData.floor;
                    await this.getSubFloors(parsedData.floor);
                } else { this.form.floor = ""; }

                if (parsedData.subFloor && !!parsedData.subFloor) {
                    this.setLastSelectedOption('subfloor');
                    this.form.subFloor = parsedData.subFloor;
                    await this.getBasements(parsedData.subFloor);
                } else { this.form.subFloor = ""; }

                if (parsedData.basement && !!parsedData.basement) {
                    this.setLastSelectedOption('basement');
                    this.form.basement = parsedData.basement;
                    await this.getSubBasements(parsedData.basement);
                } else { this.form.basement = ""; }

                if (parsedData.subBasement && !!parsedData.subBasement) {
                    this.setLastSelectedOption('subbasement');
                    this.form.subBasement = parsedData.subBasement;
                    await this.getMines(parsedData.subBasement);
                } else { this.form.subBasement = ""; }

                if (parsedData.mine && !!parsedData.mine) {
                    this.setLastSelectedOption('mine');
                    this.form.mine = parsedData.mine;
                    await this.getSubMines(parsedData.mine);
                } else { this.form.mine = ""; }

                if (parsedData.subMine && !!parsedData.subMine) {
                    this.setLastSelectedOption('submine');
                    this.form.subMine = parsedData.subMine;
                } else { this.form.subMine = ""; }

                //set other fields in the form
                let excludeKeys = ['industry', 'sector', 'subSector', 'group', 'subGroup', 'echelon', 'subEchelon', 'tier', 'subTier', 'layer', 'subLayer', 'deck', 'subDeck', 'floor', 'subFloor', 'basement', 'subBasement', 'mine', 'subMine'];
                for (const key in parsedData) {
                    if (!excludeKeys.includes(key)) {
                        this.form[key] = parsedData[key];
                    }
                }

                //set company characteristics tab multiple option filters
                if (!!this.form.selectedTradingAndReportingStatus) {
                    this.tradingAndReportingStatusListMapArray   = this.form.selectedTradingAndReportingStatus;
                    this.tradingAndReportingStatusListValueCount = this.form.selectedTradingAndReportingStatus.length;
                    this.tradingAndReportingStatusListIds        = this.form.selectedTradingAndReportingStatus;
                    this.tradingAndReportingStatusListInput      = this.form.selectedTradingAndReportingStatus;
                }
                if (!!this.form.selectedResearchCoverage) {
                    this.researchMapArray               = this.form.selectedResearchCoverage;
                    this.researchCoverageTypeValueCount = this.form.selectedResearchCoverage.length;
                    this.researchCoverageTypeIds        = this.form.selectedResearchCoverage;
                    this.researchCoverageTypeInput      = this.form.selectedResearchCoverage;
                }
                if (!!this.form.selectedIntellectualProperty) {
                    this.intellectualMapArray           = this.form.selectedIntellectualProperty;
                    this.intellectualPropertyValueCount = this.form.selectedIntellectualProperty.length;
                    this.intellectualPropertyIds        = this.form.selectedIntellectualProperty;
                    this.intellectualInput              = this.form.selectedIntellectualProperty;
                }
                if (!!this.form.selectedFinancingType) {
                    this.financingMapArray       = this.form.selectedFinancingType;
                    this.financingTypeValueCount = this.form.selectedFinancingType.length;
                    this.financingTypeIds        = this.form.selectedFinancingType;
                    this.financingTypeInput      = this.form.selectedFinancingType;
                }
                if (!!this.form.selectedScrp) {
                    this.sharedCommunityResearchPlatformListMapArray   = this.form.selectedScrp;
                    this.sharedCommunityResearchPlatformListValueCount = this.form.selectedScrp.length;
                    this.sharedCommunityResearchPlatformListIds        = this.form.selectedScrp;
                    this.sharedCommunityResearchPlatformListInput      = this.form.selectedScrp;
                }
                if (!!this.form.selectedMinorityOwnedBusiness) {
                    this.minorityOwnedBusinessMapArray      = this.form.selectedMinorityOwnedBusiness;
                    this.minorityOwnedBusinessValueCount    = this.form.selectedMinorityOwnedBusiness.length;
                    this.minorityOwnedBusinessIds            = this.form.selectedMinorityOwnedBusiness;
                    this.minorityOwnedBusinessInput         = this.form.selectedMinorityOwnedBusiness;
                }
                if (!!this.form.selectedExchangedTradedOn) {
                    this.exchangedTradedOnMapArray      = this.form.selectedExchangedTradedOn;
                    this.exchangedTradedOnValueCount    = this.form.selectedExchangedTradedOn.length;
                    this.exchangedTradedOnIds           = this.form.selectedExchangedTradedOn;
                    this.exchangedTradedOnInput         = this.form.selectedExchangedTradedOn;
                }

                //set video tab multiple option filters
                if (!!this.form.selectedVideoParticipants) {
                    this.videoParticipantMapArray   = this.form.selectedVideoParticipants;
                    this.videoParticipantValueCount = this.form.selectedVideoParticipants.length;
                    this.videoParticipantIds        = this.form.selectedVideoParticipants;
                    this.videoParticipantInput      = this.form.selectedVideoParticipants;
                }
                if (!!this.form.selectedVideoSubTypes) {
                    this.videoSubTypeMapArray   = this.form.selectedVideoSubTypes;
                    this.videoSubTypeValueCount = this.form.selectedVideoSubTypes.length;
                    this.videoSubTypeIds        = this.form.selectedVideoSubTypes;
                    this.videoSubTypeInput      = this.form.selectedVideoSubTypes;
                }
                if (!!this.form.selectedVideoSubjectTypes) {
                    this.videoSubjectTypeMapArray   = this.form.selectedVideoSubjectTypes;
                    this.videoSubjectTypeValueCount = this.form.selectedVideoSubjectTypes.length;
                    this.videoSubjectTypeIds        = this.form.selectedVideoSubjectTypes;
                    this.videoSubjectTypeInput      = this.form.selectedVideoSubjectTypes;
                }

                //set audio tab multiple option filters
                if (!!this.form.selectedAudioParticipants) {
                    this.audioParticipantMapArray   = this.audioParticipantIds = this.form.selectedAudioParticipants;
                    this.audioParticipantValueCount = this.form.selectedAudioParticipants.length;
                    this.audioParticipantInput      = this.form.selectedAudioParticipants;
                }
                if (!!this.form.selectedAudioSubTypes) {
                    this.audioSubTypeMapArray   = this.audioSubTypeIds = this.form.selectedAudioSubTypes;
                    this.audioSubTypeValueCount = this.form.selectedAudioSubTypes.length;
                    this.audioSubTypeInput      = this.form.selectedAudioSubTypes;
                }
                if (!!this.form.selectedAudioSubjectTypes) {
                    this.audioSubjectTypeMapArray   = this.audioSubjectTypeIds = this.form.selectedAudioSubjectTypes;
                    this.audioSubjectTypeValueCount = this.form.selectedAudioSubjectTypes.length;
                    this.audioSubjectTypeInput      = this.form.selectedAudioSubjectTypes;
                }
                await this.getSearchResult(true);
                this.isLoading = false;
            }
        },
        saveSearchHistory() {
            this.$v.queryName.$touch();
            if (this.$v.queryName.$invalid) {
                this.$refs.queryName.focus();
                return;
            }

            let formData = this.form;
            //set company characteristics multiple option values
            if (this.tradingAndReportingStatusListMapArray.length) {
                formData.selectedTradingAndReportingStatus = this.tradingAndReportingStatusListMapArray;
            }
            if (this.researchMapArray.length) {
                formData.selectedResearchCoverage = this.researchMapArray;
            }
            if (this.intellectualMapArray.length) {
                formData.selectedIntellectualProperty = this.intellectualMapArray;
            }
            if (this.financingMapArray.length) {
                formData.selectedFinancingType = this.financingMapArray;
            }
            if (this.sharedCommunityResearchPlatformListMapArray.length) {
                formData.selectedScrp = this.sharedCommunityResearchPlatformListMapArray;
            }
            if (this.minorityOwnedBusinessMapArray.length) {
                formData.selectedMinorityOwnedBusiness = this.minorityOwnedBusinessMapArray;
            }
            if (this.exchangedTradedOnMapArray.length) {
                formData.selectedExchangedTradedOn = this.exchangedTradedOnMapArray;
            }

            //set video multiple option values
            if (this.videoParticipantMapArray.length) {
                formData.selectedVideoParticipants = this.videoParticipantMapArray;
            }
            if (this.videoSubTypeMapArray.length) {
                formData.selectedVideoSubTypes = this.videoSubTypeMapArray;
            }
            if (this.videoSubjectTypeMapArray.length) {
                formData.selectedVideoSubjectTypes = this.videoSubjectTypeMapArray;
            }
            if (this.videoSubjectTypeMapArray.length) {
                formData.selectedVideoSubjectTypes = this.videoSubjectTypeMapArray;
            }

            //set audio multiple option values
            if (this.audioParticipantMapArray.length) {
                formData.selectedAudioParticipants = this.audioParticipantMapArray;
            }
            if (this.audioSubTypeMapArray.length) {
                formData.selectedAudioSubTypes = this.audioSubTypeMapArray;
            }
            if (this.videoSubjectTypeMapArray.length) {
                formData.selectedAudioSubjectTypes = this.audioSubjectTypeMapArray;
            }
            if (this.audioSubjectTypeMapArray.length) {
                formData.selectedAudioSubjectTypes = this.audioSubjectTypeMapArray;
            }

            let data = {
                name: this.queryName,
                search_query: JSON.stringify(formData)
            };

            SearchHistory.saveSearchHistory(data)
                .then((response) => {
                    this.getSearchHistories();
                    this.$bvModal.hide('saveSearchQueryModal');
                    this.errors = [];
                    this.queryName = '';
                    this.$v.$reset();
                    toastr.success(response.data.success.message);
                })
                .catch(error => {
                    if (error.response.data.resultCode == 422 && error.response.data.error.message) {
                        this.errors = error.response.data.error.message;
                    } else {
                        toastr.error(error);
                    }
                });
        },
        showSearchQueryModal() {
            if (!this.totalCompanyContactFilters && !this.totalHistoryFilters && !this.totalIndustriesFilters && !this.totalCharacteristics && !this.totalVideoAudioCharacteristics && !this.totalGeographyFilters && !this.totalSocialFilters && !this.totalLeadershipFilters && !this.totalResearchCoverageFilters) {
                toastr.warning('You haven\'t made any search');
                return;
            }
            this.$bvModal.show('saveSearchQueryModal');
        },
        clearSelectedValuesBeforeSQ: async function() {
            this.clearNodeValue('sectors');
            this.clearNodeValue('subSectors');
            this.clearNodeValue('groups');
            this.clearNodeValue('subGroups');
            this.clearNodeValue('echelons');
            this.clearNodeValue('subEchelons');
            this.clearNodeValue('tiers');
            this.clearNodeValue('subTiers');
            this.clearNodeValue('layers');
            this.clearNodeValue('subLayers');
            this.clearNodeValue('decks');
            this.clearNodeValue('subDecks');
            this.clearNodeValue('floors');
            this.clearNodeValue('subFloors');
            this.clearNodeValue('basements');
            this.clearNodeValue('subBasements');
            this.clearNodeValue('mines');
            this.clearNodeValue('subMines');

            this.entityType = "";
            this.tradingAndReportingStatus = "";
            this.publicPrivateReportingStatus = "";
            this.privatePublicCompany ="";
            this.shareholderNumber = "";
            this.baseCurrency = "";
            this.conglomerate = null;
            this.researchCoverageType = "";
            this.intelletualProperty = "";
            this.conductFinancing = null;
            this.financingType = "";
            this.companyValuation = "";
            this.auditedFinance = null;
            this.searchStr = "";
            this.publicationDate = "";
            this.hasFounder = null,
            this.hasCeo = null;
            this.hasCfo = null;
            this.hasSalesDepartment = null;
            this.hasIrd = null;
            this.hasStrategicPartnership = null;
            this.hasSuppliers = null;
            this.tickerSymbol = null;
            this.scrp = "";
            this.socialMediaPlatform = "";
            this.esgRating = null;


            this.totalVideo = "";
            this.totalAudio = "";
            this.totalCompany = "";
            this.totalIndustries = null;
            this.totalSectors = null;
            this.totalSubSectors = null;
            this.totalGroups = null;
            this.totalSubGroups = null;
            this.totalEchelons = null;
            this.totalSubEchelons = null;
            this.totalTiers = null;
            this.totalSubTiers = null;
            this.totalLayers = null;
            this.totalSubLayers = null;
            this.totalDecks = null;
            this.totalSubDecks = null;
            this.totalFloors = null;
            this.totalSubFloors = null;
            this.totalBasements = null;
            this.totalSubBasements = null;
            this.totalMines = null;
            this.totalSubMines = null;
            this.lastSelectedOption= '';

            this.tradingAndReportingStatusListIds = [];
            this.tradingAndReportingStatusListInput = [];
            this.tradingAndReportingStatusListMapArray = [];
            this.tradingAndReportingStatusListValueCount = 0;

            this.intellectualPropertyIds = [];
            this.intellectualMapArray =[];
            this.intellectualInput =[];
            this.intellectualPropertyValueCount = 0;

            this.researchCoverageTypeIds = [];
            this.researchCoverageTypeInput = [];
            this.researchMapArray =[];
            this.researchCoverageTypeValueCount = 0;

            this.financingTypeIds =[];
            this.financingTypeInput = [];
            this.financingMapArray =[];
            this.financingTypeValueCount = 0;

            this.sharedCommunityResearchPlatformListIds= [];
            this.sharedCommunityResearchPlatformListInput= [];
            this.sharedCommunityResearchPlatformListMapArray= [];
            this.sharedCommunityResearchPlatformListValueCount= 0;

            this.videoSubTypeIds = [];
            this.videoSubTypeInput = [];
            this.videoSubTypeMapArray = [];
            this.videoSubTypeValueCount = 0;

            this.videoSubjectTypeIds = [];
            this.videoSubjectTypeInput = [];
            this.videoSubjectTypeMapArray = [];
            this.videoSubjectTypeValueCount = 0;

            this.videoParticipantIds = [];
            this.videoParticipantInput = [];
            this.videoParticipantMapArray = [];
            this.videoParticipantValueCount = 0;

            this.audioSubTypeIds = [];
            this.audioSubTypeInput = [];
            this.audioSubTypeMapArray = [];
            this.audioSubTypeValueCount = 0;

            this.audioSubjectTypeIds = [];
            this.audioSubjectTypeInput = [];
            this.audioSubjectTypeMapArray = [];
            this.audioSubjectTypeValueCount = 0;

            this.audioParticipantIds = [];
            this.audioParticipantInput = [];
            this.audioParticipantMapArray = [];
            this.audioParticipantValueCount = 0;

            this.minorityOwnedBusinessIds = [];
            this.exchangedTradedOnInput = [];
            this.minorityOwnedBusinessMapArray = [];
            this.minorityOwnedBusinessValueCount = 0;

            this.exchangedTradedOnIds = [];
            this.exchangedTradedOnInput = [];
            this.exchangedTradedOnMapArray = [];
            this.exchangedTradedOnValueCount = 0;

            //remove additional fields used for multiple option fields
            delete this.form.selectedTradingAndReportingStatus;
            delete this.form.selectedResearchCoverage;
            delete this.form.selectedIntellectualProperty;
            delete this.form.selectedFinancingType;
            delete this.form.selectedScrp;
            delete this.form.selectedVideoParticipants;
            delete this.form.selectedVideoSubTypes;
            delete this.form.selectedVideoSubjectTypes;
            delete this.form.selectedAudioParticipants;
            delete this.form.selectedAudioSubTypes;
            delete this.form.selectedAudioSubjectTypes;
            delete this.form.selectedMinorityOwnedBusiness;
            delete this.form.selectedExchangedTradedOn;
        },
        getCountryList() {
            axios.get('/api/country-list')
                .then(response => {
                    this.countries = response.data.data
                })
                .catch(error => console.log(error))
        },
        getStatesByCountry() {
            this.getSearchResult();
            Geography.states(this.form.country)
                .then(response => {
                    if (response.data.data) {
                        this.states = response.data.data;
                        this.updateFieldSelection('state');
                    }
                })
                .catch(error => toastr.error(error));
        },
        getStatesOrProvinceStatus: function (value) {
            if (!value) {
                this.haveState = this.haveProvince = 0;
                this.clearNodeValue('state');
                this.clearNodeValue('province');
                this.getSearchResult();
                return;
            }
            Geography.getStatesOrProvinceStatus(value)
                .then(response => {
                    this.haveState = response.data.data[0].have_state;
                    this.haveProvince = response.data.data[0].have_province;
                    this.clearNodeValue('province');
                    if (this.haveState == 1) {
                        this.getStatesByCountry(value);
                    } else {
                        this.clearNodeValue('state');
                    }
                    this.getSearchResult();
                })
                .catch(error => console.log(error))
        },
        submitMultiDropdown(mappedArray, valueCount, inputArray, refsComponent) {
            this[mappedArray] = this[inputArray];
            this[valueCount] = this[mappedArray].length;
            this.$refs[refsComponent].click();
            this.getSearchResult();
        },
        getLeadershipAndGovernanceRoles(roleType) {
            Questionnnaire.getLeadershipAndGovernanceRoles(roleType)
                .then((response) => {
                    this.isLoading = false;
                    if(roleType == 'board_committee') {
                        this.committees = response.data.data;
                    } else {
                        this.executiveRoles = response.data.data;
                    }
                })
                .catch(error => {
                    this.isLoading = false;
                        console.log(error);
                });
        },
        getPubliclyTradedCompanyTypeList: function () {
            axios.get('/api/get-publicly-traded-company-type-list')
                .then(response => {
                    this.publiclyTradedCompanyTypeList = response.data.data
                })
                .catch(error => console.log(error))
        },
        getExchangeTradedList: function () {
            axios.get('/api/get-exchange-traded-list')
                .then(response => {
                    this.exchangeTradedList = response.data.data
                })
                .catch(error => console.log(error))
        },
        getEntityTypeByCountry() {
            this.entityTypes = [];
            let countryId = this.form.domicileCountry ? this.form.domicileCountry.id : 'all';
            this.getEntityTypeList(countryId);
        }
    },
    validations: {
        queryName: {required}
    },
    computed:{
        totalIndustriesFilters() {
            let count = 0;
            if (!!this.form.industry) {
                count++
            }
            if (!!this.form.sector) {
                count++
            }
            if (!!this.form.subSector) {
                count++
            }
            if (!!this.form.group) {
                count++
            }
            if (!!this.form.subGroup) {
                count++
            }
            if (!!this.form.echelon) {
                count++
            }
            if (!!this.form.subEchelon) {
                count++
            }
            if (!!this.form.tier) {
                count++
            }
            if (!!this.form.subTier) {
                count++
            }
            if (!!this.form.layer) {
                count++
            }
            if (!!this.form.subLayer) {
                count++
            }
            if (!!this.form.deck) {
                count++
            }
            if (!!this.form.subDeck) {
                count++
            }
            if (!!this.form.floor) {
                count++
            }
            if (!!this.form.subFloor) {
                count++
            }
            if (!!this.form.basement) {
                count++
            }
            if (!!this.form.subBasement) {
                count++
            }
            if (!!this.form.mine) {
                count++
            }
            if (!!this.form.subMine) {
                count++
            }

            return count > 0 ? count : '';
        },
        totalCharacteristics() {
            let selected = 0;
            if(!!this.form.entityType){
                selected++
            }
            if(!!this.form.privatePublicCompany){
                selected++
            }
            if(this.tradingAndReportingStatusListMapArray.length){
                selected++
            }
            if(!!this.form.publicPrivateReportingStatus){
                selected++
            }
            if(!!this.form.shareholderNumber){
                selected++
            }
            if(!!this.form.baseCurrency){
                selected++
            }
            if(null != this.form.conglomerate){
                selected++
            }
            if(this.intellectualMapArray.length){
                selected++
            }
            if(this.financingMapArray.length){
                selected++
            }
            if(!!this.form.companyValuation){
                selected++
            }
            if(null != this.form.auditedFinance){
                selected++
            }
            if(null != this.form.conductFinancing){
                selected++
            }
            if(null != this.form.hasFounder){
                selected++
            }
            if(null != this.form.hasCeo){
                selected++
            }
            if(null != this.form.hasCfo){
                selected++
            }
            if(!!this.form.tickerSymbol){
                selected++
            }
            // if(!!this.form.formedYear){
            //     selected++
            // }
            // if(!!this.form.firstProductOrService){
            //     selected++
            // }
            if(!!this.form.acquisitionsMade){
                selected++
            }
            if(!!this.form.spinOffMade){
                selected++
            }
            if(!!this.form.dividend){
                selected++
            }
            if(!!this.form.domicileCountry){
                selected++
            }
            if(this.form.isin){
                selected++
            }
            if(this.form.cusip){
                selected++
            }
            if(this.form.publiclyTradedCompany) {
                selected++
            }
            if(this.exchangedTradedOnMapArray.length){
                selected++
            }
            if(!!this.form.employeeNumber){
                selected++
            }
            if(this.minorityOwnedBusinessMapArray.length){
                selected++
            }
            if(null != this.form.esgRating){
                selected++
            }
            if(selected > 0){
                return "("+ selected +")";
            }
            return "";
        },
        totalCompanyContactFilters() {
            let contactFilter = 0;
            if(null != this.form.hasIrd){
                contactFilter++
            }
            if(null != this.form.hasBusinessDevelopment){
                contactFilter++
            }
            if(null != this.form.hasSalesDepartment){
                contactFilter++
            }
            if(this.form.hasStrategicPartnership){
                contactFilter++
            }
            if(this.form.hasSuppliers){
                contactFilter++
            }
            if(contactFilter > 0){
                return "("+ contactFilter +")";
            }
            return "";
        },
        totalHistoryFilters() {
            let historyFilter = 0;
            if(!!this.form.formedYearFromDate){
                historyFilter++
            }
            if(!!this.form.formedYearToDate){
                historyFilter++
            }
            if(!!this.form.firstProductOrService){
                historyFilter++
            }
            if(!!this.form.numberOfMajorProductOrService){
                historyFilter++
            }
            if(!!this.form.changeDirectionOrStrategy){
                historyFilter++
            }
            if (historyFilter > 0){
                return "("+ historyFilter +")";
            }
            return '';
        },
        totalGeographyFilters() {
            let selected = 0;
            if (this.form.city) { selected++; }
            if (this.form.state) { selected++; }
            if (this.form.country) { selected++; }
            return selected > 0 ? '(' + selected + ')' : '';
        },
        totalSocialFilters() {
            let selected = 0;
            if(this.socialMediaListMapArray.length){
                selected++
            }
            if(selected > 0){
                return "("+ selected +")";
            }
            return "";
        },
        totalResearchCoverageFilters() {
            let selected = 0;
            if(this.sharedCommunityResearchPlatformListMapArray.length){
                selected++
            }
            if(this.researchMapArray.length){
                selected++
            }
            if(!!this.form.researchFirm_name){
                selected++
            }
            return selected > 0 ? '(' + selected + ')' : '';
        },
        popupModalFilteredOptions() {
            if(!this.form.itemInput) return this.modalData;
            return this.modalData.filter(item => {
                let find = this.form.itemInput.some(selected => item.id == selected.id);
                if (!find) return item;
            });
        },
        isLoggedIn() {
            return localStorage.getItem("token");
        },
        totalLeadershipFilters() {
            let selected = 0;
            if (this.form.hasBoardMember) {
                selected++
            }
            if (this.form.hasExecutive) {
                selected++
            }
            if (this.form.committee) {
                selected++
            }
            if (this.form.executiveRole) {
                selected++
            }
            if (this.form.memberName) {
                selected++
            }
            return selected > 0 ? '(' + selected + ')' : '';
        },
        totalVideoAudioCharacteristics() {
            let videoAudioFilter = 0;
            if (!!this.form.mediaPublishedFromDate) {
                videoAudioFilter++;
            }
            if (!!this.form.mediaPublishedToDate) {
                videoAudioFilter++;
            }
            if (!!this.form.mediaRecordedFromDate) {
                videoAudioFilter++;
            }
            if (!!this.form.mediaRecordedToDate) {
                videoAudioFilter++;
            }
            if (this.videoParticipantMapArray.length) {
                videoAudioFilter++;
            }
            if (this.videoSubTypeMapArray.length) {
                videoAudioFilter++;
            }
            if (this.videoSubjectTypeMapArray.length) {
                videoAudioFilter++;
            }

            if (this.audioParticipantMapArray.length) {
                videoAudioFilter++;
            }
            if (this.audioSubTypeMapArray.length) {
                videoAudioFilter++;
            }
            if (this.audioSubjectTypeMapArray.length) {
                videoAudioFilter++;
            }
            if (videoAudioFilter  > 0){
                return "("+ videoAudioFilter +")";
            }
            return '';
        }
    },
    created: function () {
        this.nodeColor = Common.hierarchyNodeColor;
        this.dateConvert = Common.dateConvert;
        this.numShortFormatter = Common.ViewListenNumFormatter;
        this.getIndustries();
        this.getEntityTypeList('all');
        this.getPrivatePublicCompanyType();
        this.getTradingAndReportingStatusList();
        this.getShareholderNumberList();
        this.getBaseCurrencyList();
        this.getResearchCoverageTypeList();
        this.getIntelletualPropertyList();
        this.getFinancingTypeList();
        this.getSharedCommunityResearchPlatformList();
        this.getMediaTypes(2);
        this.getMediaTypes(1);
        this.getMediaPresenterType(2);
        this.getMediaPresenterType(1);
        this.getSubjectTypes(2);
        this.getSubjectTypes(1);
        if(!! this.isLoggedIn){
            this.getSearchHistories();
        }
        this.getCountryList();
        this.getSocialMediaPlatformList();
        this.getLeadershipAndGovernanceRoles('board_committee');
        this.getLeadershipAndGovernanceRoles('executive_role');
        this.getEmployeeNumberList();
        this.getMinorityOwnedBusinessList();
        this.getPubliclyTradedCompanyTypeList();
        this.getExchangeTradedList();
    },
    components: {
        Datepicker,
        vSelect,
        pagination: () => import("../components/PaginationComponent"),
        loader: () => import("../components/Loader"),
    },
}
</script>
<style lang="scss">
.screener2 {
    .screener-tab .tab-content {
        background: none !important;
        border: none;
    }
    .screener-tab .nav-item {
        margin-right: 5px;
        margin-bottom: 5px;
    }
    .field-no-selected{
        background-color: #c4c4c4;
        ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            color: #ffffff;
        }

        ::-moz-placeholder { /* Firefox 19+ */
            color: #ffffff;
        }

        :-ms-input-placeholder { /* IE 10+ */
            color: #ffffff;
        }

        :-moz-placeholder { /* Firefox 18- */
            color: #ffffff;
        }
    }

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

    .dashboard-search-icon {
        z-index: 0 !important;
    }

    /*.tree-image {*/
    /*    width: 50%;*/
    /*}*/

    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: #cecece;
    }

    ::-moz-placeholder { /* Firefox 19+ */
        color: #cecece;
        opacity:  1;
    }

    :-ms-input-placeholder { /* IE 10+ */
        color: #cecece;
    }

    :-moz-placeholder { /* Firefox 18- */
        color: #cecece;
        opacity:  1;
    }

    .form-control {
        height: auto !important;
    }

    .form-control.recent-valuation {
        padding: 10px 7px !important;
        font-size: 0.75rem;
    }

    .form-group {
        margin-bottom: 0;
    }

    .vs__dropdown-toggle {
        border: 0px !important;
    }

    .control-label {
        font-weight: 700;
        font-size: 12px;
        margin-bottom: 0;
    }

    .vs__selected, .vs__search, .vs__dropdown-menu {
        font-size: 12px !important;
    }

    .vs__search {
        z-index: 0;
    }

    .search-field {
        padding: 5px;
    }

    .search-result-container {
        border-radius: 0.75rem;
        margin-top: 10px;
        position: relative;
        min-height: 230px;

        .card-body {
            p {
                font-size: 0.75rem;
                color: rgba(30, 8, 87, 0.8);
                margin-bottom: 2px;
            }

            .warp-text-title {
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                max-width: 150px;
            }
        }

        .card-wrapper {
            padding: 5px;

            .card {
                max-height: 230px;
            }
        }

        .company-title, ul.pagination {
            font-size: 0.625rem;
            color: #6a666d;
        }

        ul.content-ul {
            display: inline-flex;
            font-size: 0.625rem;
            color: #8a878d;
            padding-left: 0px;

            li:not(:last-child) {
                padding-right: 12px;
            }

            li:first-child {
                list-style: none;
            }
        }

        .fa-circle {
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

        .bg_content_photo {
            display: block;
            width: 100%;
            height: 135px;
            background-position: center 50%;
            background-repeat: no-repeat;
            background-size: cover;
            background-color: #7E097C;
        }
    }

    .card-body {
        padding: 8px !important;
    }

    .vdp-datepicker__clear-button {
        position: absolute;
        top: 5px;
        right: 10px;
    }

    .vs__dropdown-menu{
        min-width: 300px;
        right: 0 !important;
        left: auto;
    }

    .screener-content-tab li a.active {
        background-color: #2a8bf2 !important;
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
    }
    .item-count{ font-size: 12px}
    .dateRange{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        .form-control {
            line-height: 2.6;
            font-size: 12px;
            padding: 4px;
        }
        .calendar-icon {
            position: absolute;
            bottom: 12px;
            right: 2px;
            z-index: 2;
            cursor: pointer;
        }
    }
    .screener2-search input {
        padding-left: 20px !important;
    }
    .screener2-search input:focus {
        outline: 0 none;
        border-color: #2A8BF2;
        box-shadow: 0 0 3px rgba(42, 139, 242, 1) inset, 0 0 0px rgba(42, 139, 242, 10);
    }

    input[type="search"]::-webkit-search-cancel-button {
        -webkit-appearance: none;
    }
    #searchclear {
        position: absolute;
        right: 50px;
        top: -7px;
        bottom: 0;
        height: 14px;
        margin: auto;
        font-size: 14px;
        cursor: pointer;
        color: #000;
        z-index: 99;
    }
    .screener2-search .dashboard-search-icon {
        border-color: #DCDFE3 !important;
        border-left: 0px  !important;
        // border-left: 1px solid #DCDFE3 !important;
        border-right: 1px solid #DCDFE3 !important;
        box-shadow: 0 0 0 0 rgb(52 144 220 / 25%) !important;
        background-color: #F5F5F5  !important;
        border-top-left-radius: 0px !important;
        border-bottom-left-radius: 0px !important;
        color: #6c757d  !important;
    }
    .screener-tab {
        .dropdown-footer {
            background-color: #3490dc;
            padding: 5px;
            border-bottom-left-radius: 3px;
            border-bottom-right-radius: 3px;
            button {
                line-height: 1;
                background-color: white;
                color: #3490dc;
                font-weight: bold;
            }
        }
        .dropdown-content-options {
            padding: 0 8px 8px;
            margin-bottom: 0;
            list-style: none;
        }
        .dropdown-content-options {
            input[type=checkbox] {
                width: 16px;
                height: 16px;
            }
        }
        .dropdown-menu {
            padding-bottom: 0;
            min-width: 100%;
            max-height: 15rem;
            overflow: auto;
            label{
                flex: 1;
                white-space: nowrap;
            }
        }
    }
}
.confirm-modal-title {
    .jconfirm-title {
        font-size: 16px !important;
        color: #1e0857;
    }
}
.confirm-modal-title {
    .jconfirm-title {
        font-size: 16px !important;
        color: #1e0857;
    }
}
@media (min-width: 768px) and (max-width: 1120px) {
    .screener2 {
        .search-result-container {
            ul.content-ul{font-size: .5rem}
        }
    }
}
</style>
<style scoped>
.modal-btn {
    color: #fff;
    background-color: #3490dc;
    border-color: #3490dc;
}
.form-control.cursor-pointer{
    cursor: pointer;
}
.form-control{
    padding: 4px 0 !important;
}
.selected-value{
    background: green !important;
    color: #ffffff;
}
.save-queries div, .save-queries button {
    margin-right: 10px;
}
.save-queries button:focus {
    box-shadow: none;
    border-color: #ced4da;
}
.save-queries > :last-child { margin-right: 0 }
.save-queries > :first-child { flex: 2 }
.save-queries > :not(:first-child) { flex: 1 }
.save-queries .form-control { padding: 2px 0 !important }
.save-queries button:not(:disabled):hover {
    background-color: #391791;
    color: white;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out
}
.save-queries button:disabled {
    cursor: not-allowed;
    background-color: #e9ecef !important;
}
#saveSearchQueryModal .form-control { padding: 4px !important; }
.search-results-top-section{
    margin-left: -15px;
}
.search-results-top-section hr{
    margin-bottom: 0.5rem;
}
</style>
