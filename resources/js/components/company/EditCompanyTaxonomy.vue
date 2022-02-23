<template>
    <section class="home">
        <Navigation/>
        <ProfileCompleteBanner></ProfileCompleteBanner>
        <div class="container-fluid px-0 for-profile-banner-padding">
            <div class="row collapse show no-gutters d-flex h-100 position-relative">
                <sidebar></sidebar>
                <div class="col-lg-10 pl-5 pt-3 pr-3">
                    <h2 v-if="actionType=='add'" class="text-center">Add Company Classification</h2>
                    <h2 v-if="actionType=='update'" class="text-center">Edit Company Classification</h2>
                    <div class="row mx-auto">
                        <div class="col-md-6 offset-md-3 h-100 my-auto">
                            <div class="subsector pr-3 d-block">
                                A more detailed industry classification will allow users to find your company and
                                your
                                content more reliably and accurately in their searches. If you do not see a fitting
                                classification, please consider making a suggestion either through <b>Add Suggestion or by leaving Feedback</b>.
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-11">
                            <div class="row">
                                <div class="col-md-5 text-center mt-4">
                                    <div class="exclamition-position-alter">
                                        <router-link class="h3" :to={} id="tooltip-target-10">
                                            <i class="fas fa-question-circle text-dark"></i>
                                        </router-link>
                                        <b-tooltip target="tooltip-target-10" triggers="hover">These are your company’s
                                            currently selected
                                            Industry classification, you can view your selections in the tree to the
                                            left and edit your
                                            selections through the dropdowns on the right.Anyone searching for these
                                            industry categories
                                            will find your company and your content underneath them.
                                        </b-tooltip>
                                    </div>

                                    <div class="mt-2">
                <span v-if="form.industry !=''">
                            <span class="d-block px-1 py-3 text-white"
                                  :style="{backgroundColor:this.nodeColor('industry')}">{{form.industry.description}}
                            </span>
                            </span>
                                        <span v-if="form.industry ==''">
                            <span class="d-block px-1 py-3 p-2 text-white"
                                  :style="{backgroundColor:this.nodeColor('industry')}">Industry Classification (Please Select One)
                            </span>
                    </span>


                                        <span v-if="form.sector !='' && form.sector !=undefined">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-3 text-white"
                                  :style="{backgroundColor:this.nodeColor('sector')}">{{form.sector.description}}</span>
                            </span>
                                        <span v-if="form.subSector !='' && form.subSector !=undefined">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-3 text-white"
                                  :style="{backgroundColor:this.nodeColor('subSector')}">{{form.subSector.description}}</span>
                            </span>
                                        <span v-if="form.group !='' && form.group !=undefined">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-3 text-white"
                                  :style="{backgroundColor:this.nodeColor('group')}">{{form.group.description}}</span>
                            </span>
                                        <span v-if="form.subGroup !='' && form.subGroup !=undefined">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-3 text-white"
                                  :style="{backgroundColor:this.nodeColor('subGroup')}">{{form.subGroup.description}}</span>
                            </span>
                                        <span v-if="form.echelon !='' && form.echelon !=undefined">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-3 text-white"
                                  :style="{backgroundColor:this.nodeColor('echelon')}">{{form.echelon.description}}</span>
                            </span>
                                        <span v-if="form.subEchelon !='' && form.subEchelon !=undefined">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-3 text-white"
                                  :style="{backgroundColor:this.nodeColor('subEchelon')}">{{form.subEchelon.description}}</span>
                            </span>
                                        <span v-if="form.tier !='' && form.tier !=undefined">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-3 text-white"
                                  :style="{backgroundColor:this.nodeColor('tier')}">{{form.tier.description}}</span>
                            </span>
                                        <span v-if="form.subTier !='' && form.subTier !=undefined">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-3 text-white"
                                  :style="{backgroundColor:this.nodeColor('subTier')}">{{form.subTier.description}}</span>
                            </span>
                                        <span v-if="form.layer !='' && form.layer !=undefined">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-3 text-white"
                                  :style="{backgroundColor:this.nodeColor('layer')}">{{form.layer.description}}</span>
                            </span>
                                        <span v-if="form.subLayer !='' && form.subLayer !=undefined">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-3 text-white"
                                  :style="{backgroundColor:this.nodeColor('subLayer')}">{{form.subLayer.description}}</span>
                            </span>
                                        <span v-if="form.deck !='' && form.deck !=undefined">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-3 text-white"
                                  :style="{backgroundColor:this.nodeColor('deck')}">{{form.deck.description}}</span>
                            </span>
                                        <span v-if="form.subDeck !='' && form.subDeck !=undefined">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-3 text-white"
                                  :style="{backgroundColor:this.nodeColor('subDeck')}">{{form.subDeck.description}}</span>
                            </span>
                                        <span v-if="form.floor !='' && form.floor !=undefined">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-3 text-white"
                                  :style="{backgroundColor:this.nodeColor('floor')}">{{form.floor.description}}</span>
                            </span>
                                        <span v-if="form.subFloor !='' && form.subFloor !=undefined">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-3 text-white"
                                  :style="{backgroundColor:this.nodeColor('subFloor')}">{{form.subFloor.description}}</span>
                            </span>
                                        <span v-if="form.basement !='' && form.basement !=undefined">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-3 text-white"
                                  :style="{backgroundColor:this.nodeColor('basement')}">{{form.basement.description}}</span>
                            </span>
                                        <span v-if="form.subBasement !='' && form.subBasement !=undefined">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-3 text-white"
                                  :style="{backgroundColor:this.nodeColor('subBasement')}">{{form.subBasement.description}}</span>
                            </span>
                                        <span v-if="form.mine !='' && form.mine !=undefined">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-3 text-white"
                                  :style="{backgroundColor:this.nodeColor('mine')}">{{form.mine.description}}</span>
                            </span>
                                        <span v-if="form.subMine !='' && form.subMine !=undefined">
                            <span class="d-block"><i class="fas fa-arrow-down"></i></span>
                            <span class="d-block px-auto py-3 text-white"
                                  :style="{backgroundColor:this.nodeColor('subMine')}">{{form.subMine.description}}</span>
                            </span>
                                    </div>
                                </div>
                                <div class="col-md-7">
                                    <div class="panel-body categorization-selection">
                                        <div class=" form-group mb-4">
                                            <label class="control-label font-weight-bold">Industry<span
                                                class="text-danger">*</span></label>

                                            <v-select label="description"
                                                      :class="{ 'is-invalid': $v.form.industry.$error }"
                                                      :options="industries" v-model="form.industry" :clearable="false"
                                                      ref="industry"
                                                      @input="getSectors(form.industry, 'Input')"
                                                      placeholder="Select from Drop Down"></v-select>
                                             <div class="float-right mt-1 add-multiple"
                                                  :class="{ 'disabled':  form.industry==''}"
                                                  @click="sendHierarchyInfo('Industry',form.industry.id, form.industry.description,form.industry.id)"
                                                  v-b-modal.modal-add-suggestion>
                                                 + Add Suggestion
                                             </div>
                                            <div v-if="!$v.form.industry.required" class="invalid-feedback">Industry is
                                                required.
                                            </div>
                                        </div>

                                        <div class=" form-group mb-4" v-if="showSectorField">
                                            <label class="control-label font-weight-bold">Sector<span
                                                class="text-danger">*</span></label>
                                            <v-select label="description"
                                                      :class="{ 'is-invalid': $v.form.sector.$error }"
                                                      :options="sectors" v-model="form.sector" :clearable="false"
                                                      ref="sector"
                                                      @input="getSubSectors(form.sector,'Input')"
                                                      placeholder="Select from Drop Down"></v-select>
                                            <div class="float-right mt-1 add-multiple"
                                                 :class="{ 'disabled':  form.sector==''}"
                                                 @click="sendHierarchyInfo('Sector',form.sector.id, form.sector.description,form.industry.id)"
                                                 v-b-modal.modal-add-suggestion>
                                                + Add Suggestion
                                            </div>
                                            <div v-if="!$v.form.sector.required" class="invalid-feedback">Sector is
                                                required.
                                            </div>
                                        </div>

                                        <div class=" form-group mb-4" v-if="showSubSectorField">
                                            <label class="control-label font-weight-bold">Sub Sector<span
                                                class="text-danger">*</span></label>
                                            <v-select label="description"
                                                      :class="{ 'is-invalid': $v.form.subSector.$error }"
                                                      :options="subSectors" v-model="form.subSector" :clearable="false"
                                                      ref="subSector"
                                                      @input="getGroups(form.subSector, 'Input')"
                                                      placeholder="Select from Drop Down"></v-select>
                                            <div class="float-right mt-1 add-multiple"
                                                 :class="{ 'disabled':  form.subSector==''}"
                                                 @click="sendHierarchyInfo('SubSector',form.subSector.id, form.subSector.description,form.sector.id)"
                                                 v-b-modal.modal-add-suggestion>
                                                + Add Suggestion
                                            </div>
                                            <div v-if="!$v.form.subSector.required" class="invalid-feedback">Sub sector
                                                is required.
                                            </div>
                                        </div>

                                        <div class=" form-group mb-4" v-if="showGroupField">
                                            <label class="control-label font-weight-bold">Group<span
                                                class="text-danger">*</span></label>
                                            <v-select label="description"
                                                      :class="{ 'is-invalid': $v.form.group.$error }" :options="groups"
                                                      ref="group"
                                                      v-model="form.group" :clearable="false"
                                                      @input="getSubGroups(form.group, 'Input')"
                                                      placeholder="Select from Drop Down"></v-select>
                                            <div class="float-right mt-1 add-multiple"
                                                 :class="{ 'disabled':  form.group==''}"
                                                 @click="sendHierarchyInfo('Group',form.group.id, form.group.description,form.subSector.id)"
                                                 v-b-modal.modal-add-suggestion>
                                                + Add Suggestion
                                            </div>
                                            <div v-if="!$v.form.group.required" class="invalid-feedback">Group is
                                                required.
                                            </div>
                                        </div>

                                        <div class=" form-group mb-4" v-if="showSubGroupField">
                                            <label class="control-label font-weight-bold">Sub Group<span
                                                class="text-danger">*</span></label>
                                            <v-select label="description"
                                                      :class="{ 'is-invalid': $v.form.subGroup.$error }"
                                                      :options="subGroups"
                                                      v-model="form.subGroup" :clearable="false"
                                                      ref="subGroup"
                                                      @input="getEchelons(form.subGroup, 'Input')"
                                                      placeholder="Select from Drop Down"></v-select>
                                            <div class="float-right mt-1 add-multiple"
                                                 :class="{ 'disabled':  form.subGroup==''}"
                                                 @click="sendHierarchyInfo('SubGroup',form.subGroup.id, form.subGroup.description,form.group.id)"
                                                 v-b-modal.modal-add-suggestion>
                                                + Add Suggestion
                                            </div>
                                            <div v-if="!$v.form.subGroup.required" class="invalid-feedback">Sub Group is
                                                required.
                                            </div>
                                        </div>
                                        <div class=" form-group mb-4" v-if="showEchelonField">
                                            <label class="control-label font-weight-bold">Echelon</label>
                                            <v-select label="description"
                                                      :options="echelons"
                                                      v-model="form.echelon" :clearable="false"
                                                      ref="echelon"
                                                      @input="getSubEchelons(form.echelon, 'Input')"
                                                      placeholder="Select from Drop Down"></v-select>
                                            <div class="float-right mt-1 add-multiple"
                                                 :class="{ 'disabled':  form.echelon==''}"
                                                 @click="sendHierarchyInfo('Echelon',form.echelon.id, form.echelon.description,form.subGroup.id)"
                                                 v-b-modal.modal-add-suggestion>
                                                + Add Suggestion
                                            </div>
                                        </div>
                                        <div class=" form-group mb-4" v-if="showSubEchelonField">
                                            <label class="control-label font-weight-bold">Sub Echelon</label>
                                            <v-select label="description"
                                                      :options="subEchelons"
                                                      v-model="form.subEchelon"
                                                      ref="subEchelon"
                                                      :clearable="false" @input="getTiers(form.subEchelon)"
                                                      placeholder="Select from Drop Down"></v-select>
                                            <div class="float-right mt-1 add-multiple"
                                                 :class="{ 'disabled':  form.subEchelon==''}"
                                                 @click="sendHierarchyInfo('SubEchelon',form.subEchelon.id, form.subEchelon.description,form.echelon.id)"
                                                 v-b-modal.modal-add-suggestion>
                                                + Add Suggestion
                                            </div>
                                        </div>
                                        <div class=" form-group mb-4" v-if="showTierField">
                                            <label class="control-label font-weight-bold">Tier</label>
                                            <v-select label="description" :options="tiers" v-model="form.tier"
                                                      :clearable="false" @input="getSubTiers(form.tier, 'Input')"
                                                      placeholder="Select from Drop Down"></v-select>
                                            <div class="float-right mt-1 add-multiple"
                                                 :class="{ 'disabled':  form.tier==''}"
                                                 @click="sendHierarchyInfo('Tier',form.tier.id, form.tier.description,form.subEchelon.id)"
                                                 v-b-modal.modal-add-suggestion>
                                                + Add Suggestion
                                            </div>
                                        </div>
                                        <div class=" form-group mb-4" v-if="showSubTierField">
                                            <label class="control-label font-weight-bold">Sub Tier</label>
                                            <v-select label="description" :options="subTiers" v-model="form.subTier"
                                                      :clearable="false" @input="getLayers(form.subTier, 'Input')"
                                                      placeholder="Select from Drop Down"></v-select>
                                            <div class="float-right mt-1 add-multiple"
                                                 :class="{ 'disabled':  form.subTier==''}"
                                                 @click="sendHierarchyInfo('SubTier', form.subTier.id, form.subTier.description,form.tier.id)"
                                                 v-b-modal.modal-add-suggestion>
                                                + Add Suggestion
                                            </div>
                                        </div>
                                        <div class=" form-group mb-4" v-if="showLayerField">
                                            <label class="control-label font-weight-bold">Layer</label>
                                            <v-select label="description" :options="layers" v-model="form.layer"
                                                      :clearable="false" @input="getSubLayers(form.layer, 'Input')"
                                                      placeholder="Select from Drop Down"></v-select>
                                            <div class="float-right mt-1 add-multiple"
                                                 :class="{ 'disabled':  form.layer==''}"
                                                 @click="sendHierarchyInfo('Layer',form.layer.id, form.layer.description,form.subTier.id)"
                                                 v-b-modal.modal-add-suggestion>
                                                + Add Suggestion
                                            </div>
                                        </div>
                                        <div class=" form-group mb-4" v-if="showSubLayerField">
                                            <label class="control-label font-weight-bold">Sub Layer</label>
                                            <v-select label="description" :options="subLayers" v-model="form.subLayer"
                                                      :clearable="false" @input="getDecks(form.subLayer, 'Input')"
                                                      placeholder="Select from Drop Down"></v-select>
                                            <div class="float-right mt-1 add-multiple"
                                                 :class="{ 'disabled':  form.subLayer==''}"
                                                 @click="sendHierarchyInfo('SubLayer', form.subLayer.id, form.subLayer.description,form.layer.id)"
                                                 v-b-modal.modal-add-suggestion>
                                                + Add Suggestion
                                            </div>
                                        </div>
                                        <div class=" form-group mb-4" v-if="showDeckField">
                                            <label class="control-label font-weight-bold">Deck</label>
                                            <v-select label="description" :options="decks" v-model="form.deck"
                                                      :clearable="false" @input="getSubDecks(form.deck, 'Input')"
                                                      placeholder="Select from Drop Down"></v-select>
                                            <div class="float-right mt-1 add-multiple"
                                                 :class="{ 'disabled':  form.deck==''}"
                                                 @click="sendHierarchyInfo('Deck',form.deck.id, form.deck.description,form.subLayer.id)"
                                                 v-b-modal.modal-add-suggestion>
                                                + Add Suggestion
                                            </div>
                                        </div>
                                        <div class=" form-group mb-4" v-if="showSubDeckField">
                                            <label class="control-label font-weight-bold">Sub Deck</label>
                                            <v-select label="description" :options="subDecks" v-model="form.subDeck"
                                                      :clearable="false" @input="getFloors(form.subDeck, 'Input')"
                                                      placeholder="Select from Drop Down"></v-select>
                                            <div class="float-right mt-1 add-multiple"
                                                 :class="{ 'disabled':  form.subDeck==''}"
                                                 @click="sendHierarchyInfo('SubDeck',form.subDeck.id, form.subDeck.description,form.deck.id)"
                                                 v-b-modal.modal-add-suggestion>
                                                + Add Suggestion
                                            </div>
                                        </div>
                                        <div class=" form-group mb-4" v-if="showFloorField">
                                            <label class="control-label font-weight-bold">Floor</label>
                                            <v-select label="description" :options="floors" v-model="form.floor"
                                                      :clearable="false" @input="getSubFloors(form.floor, 'Input')"
                                                      placeholder="Select from Drop Down"></v-select>
                                            <div class="float-right mt-1 add-multiple"
                                                 :class="{ 'disabled':  form.floor==''}"
                                                 @click="sendHierarchyInfo('Floor',form.floor.id, form.floor.description,form.subDeck.id)"
                                                 v-b-modal.modal-add-suggestion>
                                                + Add Suggestion
                                            </div>
                                        </div>
                                        <div class=" form-group mb-4" v-if="showSubFloorField">
                                            <label class="control-label font-weight-bold">Sub Floor</label>
                                            <v-select label="description" :options="subFloors" v-model="form.subFloor"
                                                      :clearable="false" @input="getBasements(form.subFloor, 'Input')"
                                                      placeholder="Select from Drop Down"></v-select>
                                            <div class="float-right mt-1 add-multiple"
                                                 :class="{ 'disabled':  form.subFloor==''}"
                                                 @click="sendHierarchyInfo('SubFloor',form.subFloor.id, form.subFloor.description,form.floor.id)"
                                                 v-b-modal.modal-add-suggestion>
                                                + Add Suggestion
                                            </div>
                                        </div>
                                        <div class=" form-group mb-4" v-if="showBasementField">
                                            <label class="control-label font-weight-bold">Basement</label>
                                            <v-select label="description" :options="basements" v-model="form.basement"
                                                      :clearable="false"
                                                      @input="getSubBasements(form.basement, 'Input')"
                                                      placeholder="Select from Drop Down"></v-select>
                                            <div class="float-right mt-1 add-multiple"
                                                 :class="{ 'disabled':  form.basement==''}"
                                                 @click="sendHierarchyInfo('Basement',form.basement.id, form.basement.description,form.subFloor.id)"
                                                 v-b-modal.modal-add-suggestion>
                                                + Add Suggestion
                                            </div>
                                        </div>
                                        <div class=" form-group mb-4" v-if="showSubBasementField">
                                            <label class="control-label font-weight-bold">Sub Basement</label>
                                            <v-select label="description" :options="subBasements"
                                                      v-model="form.subBasement" :clearable="false"
                                                      @input="getMines(form.subBasement, 'Input')"
                                                      placeholder="Select from Drop Down"></v-select>
                                            <div class="float-right mt-1 add-multiple"
                                                 :class="{ 'disabled':  form.subBasement==''}"
                                                 @click="sendHierarchyInfo('SubBasement',form.subBasement.id, form.subBasement.description,form.basement.id)"
                                                 v-b-modal.modal-add-suggestion>
                                                + Add Suggestion
                                            </div>
                                        </div>
                                        <div class=" form-group mb-4" v-if="showMineField">
                                            <label class="control-label font-weight-bold">Mine</label>
                                            <v-select label="description" :options="mines" v-model="form.mine"
                                                      :clearable="false" @input="getSubMines(form.mine, 'Input')"
                                                      placeholder="Select from Drop Down"></v-select>
                                            <div class="float-right mt-1 add-multiple"
                                                 :class="{ 'disabled':  form.mine==''}"
                                                 @click="sendHierarchyInfo('Mine',form.mine.id, form.mine.description,form.subBasement.id)"
                                                 v-b-modal.modal-add-suggestion>
                                                + Add Suggestion
                                            </div>
                                        </div>
                                        <div class=" form-group mb-5" v-if="showSubMineField">
                                            <label class="control-label font-weight-bold">Sub Mine</label>
                                            <v-select label="description" :options="subMines" v-model="form.subMine"
                                                      :clearable="false" @input="subMinesChange"
                                                      placeholder="Select from Drop Down"></v-select>
                                            <div class="float-right mt-1 add-multiple"
                                                 :class="{ 'disabled':  form.subMine==''}"
                                                 @click="sendHierarchyInfo('SubMine',form.subMine.id, form.subMine.description,form.mine.id)"
                                                 v-b-modal.modal-add-suggestion>
                                                + Add Suggestion
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-1 offset-4 exclamition-position">
                                    <router-link :to={} class="h3" id="tooltip-target-2">
                                        <i class="fas fa-question-circle text-dark"></i>
                                    </router-link>
                                    <b-tooltip target="tooltip-target-2" triggers="hover">You can associate more than
                                        one
                                        industry
                                        classification to your company and to your content. This means if your company
                                        provides
                                        services
                                        or products across more than a single industry (or within multiple parts of a
                                        single
                                        industry)
                                        any users search for those specific classification will find your company’s
                                        content.
                                    </b-tooltip>
                                </div>
                                <div class="col-md-7">
                                    <router-link link :to="{ name: 'CompanyQuestionnairesDetails','hash': '#taxonomy'}" class="btn btn-back-next">Cancel</router-link>
                                    <button @click.prevent="saveHierarchyInfo(actionType)"
                                            class="btn btn-back-next float-right">
                                        Save and Close
                                    </button>
                                </div>

                            </div>

                        </div>
                        <!--<div class="col-md-3">
                            <div class="row h-100 my-auto">
                                <div class="col-md-12 subsector pr-3">
                                    A more detailed industry categorization will allow users to find your company and
                                    your
                                    content more reliably and accurately in their searches. If you do not see a fitting
                                    categorization, please consider making a suggestion either through <b>Add Suggestion or
                                    by
                                    leaving Feedback</b>.
                                </div>
                            </div>
                        </div>-->
                        <loader :is-visible="isLoading"></loader>
                        <!--Add Suggestion Modal-->
                        <b-modal
                            id="modal-add-suggestion"
                            ref="modal"
                            title="Add Suggestion"
                            hide-footer >
                            <input type="hidden" v-model="node_type">
                            <input type="hidden" v-model="node_id">
                            <p class="p-2 font-weight-bold">What type of Classification change would you suggest for this classification?</p>
                            <b-button id="addnode" class="btn-add-suggestion" @click="showAddModal" variant="success">Add Classification
                            </b-button>
                            <b-button id="replacenode" class="btn-add-suggestion" @click="showReplaceModal" variant="success">
                                Replace Classification
                            </b-button>
                            <b-button id="deletenode" class="btn-add-suggestion" @click="showDeleteModal" variant="success">
                                Delete Classification
                            </b-button>
                            <b-button id="other" class="btn-add-suggestion" @click="showOtherModal" variant="success">
                                Other
                            </b-button>
                        </b-modal>
                        <!--Add Node Modal-->
                        <b-modal
                            id="modal-add-node"
                            ref="modal"
                            title="Add Classification Request"
                            hide-footer >
                            <div class="row text-center">
                                <div class="col-11">
                                    <p class="font-weight-bold mb-0">Selected Classification</p>
                                    <p class="font-weight-bold text-theme-purple">{{node_type}} <i class="fa fa-arrow-right"></i> {{node_description}}</p>
                                </div>

                                <div class="col-1 exclamition-position float-right">
                                    <span class="h3" v-b-tooltip.hover title="Your suggested classification will be added beneath the parent of the currently selected, so that your suggestion will appear in the same dropdown selection as your currently selected classification.">
                                        <i class="fas fa-question-circle text-dark"></i>
                                    </span>
                                </div>
                            </div>
                            <p class="font-weight-bold mb-2">Add Classification Request Here</p>
                            <b-form-group>
                                <b-form-input
                                    v-model="suggestion_explanation"
                                    ref="suggestion_explanation"
                                    placeholder="Type Requested Node Here"
                                    class="mb-2"
                                    maxlength="200"
                                    :class="{ 'is-invalid': $v.suggestion_explanation.$error }"
                                    required
                                ></b-form-input>
                                <div v-if="!$v.suggestion_explanation.required" class="invalid-feedback">Requested Node is required.</div>
                                <b-form-textarea
                                    id="textarea"
                                    v-model="suggestion_reason"
                                    ref="suggestion_reason"
                                    placeholder="Reason..."
                                    :class="{ 'is-invalid': $v.suggestion_reason.$error }"
                                    maxlength="1000"
                                    rows="3"
                                    max-rows="6"
                                ></b-form-textarea>
                                <div v-if="!$v.suggestion_reason.required" class="invalid-feedback">Reason is required.</div>
                            </b-form-group>
                            <b-input-group>
                                <b-button class="btn-cancel-submit mr-3" @click="cancelSuggestionModal('modal-add-node')"
                                          variant="success">Cancel
                                </b-button>
                                <b-button class="btn-cancel-submit" @click="addSuggestion('add')" :disabled='isDisabled'
                                          variant="success">Submit
                                </b-button>
                            </b-input-group>
                        </b-modal>
                        <!--Replace Node Modal-->
                        <b-modal
                            id="modal-replace-node"
                            ref="modal"
                            title="Replace Classification Request"
                            hide-footer >
                            <div class="text-center">
                                <p class="font-weight-bold mb-0">Selected Classification</p>
                                <p class="font-weight-bold text-theme-purple">{{node_type}} <i class="fa fa-arrow-right"></i> {{node_description}}</p>
                            </div>
                            <p class="font-weight-bold mb-2">Replace Classification Request Here</p>
                            <b-form-group>
                                <b-form-input
                                    placeholder="Type Suggested Name Change Here"
                                    v-model="suggestion_explanation"
                                    ref="suggestion_explanation"
                                    class="mb-2"
                                    maxlength="200"
                                    :class="{ 'is-invalid': $v.suggestion_explanation.$error }"
                                    required
                                ></b-form-input>
                                <div v-if="!$v.suggestion_explanation.required" class="invalid-feedback">Requested Node is required.</div>
                                <b-form-textarea
                                    id="textarea"
                                    v-model="suggestion_reason"
                                    ref="suggestion_reason"
                                    placeholder="Reason..."
                                    maxlength="1000"
                                    :class="{ 'is-invalid': $v.suggestion_reason.$error }"
                                    rows="3"
                                    max-rows="6"
                                ></b-form-textarea>
                                <div v-if="!$v.suggestion_reason.required" class="invalid-feedback">Reason is required.</div>
                            </b-form-group>
                            <b-input-group>
                                <b-button class="btn-cancel-submit mr-3" @click="cancelSuggestionModal('modal-replace-node')"
                                          variant="success">Cancel
                                </b-button>
                                <b-button class="btn-cancel-submit" :disabled='isDisabled' @click="addSuggestion('replace')"
                                          variant="success">Submit
                                </b-button>
                            </b-input-group>
                        </b-modal>
                        <!--Delete Node Modal-->
                        <b-modal
                            id="modal-delete-node"
                            ref="modal"
                            title="Delete Classification Request"
                            hide-footer >
                            <div class="text-center">
                                <p class="font-weight-bold mb-0">Selected Classification</p>
                                <!--                <p class="font-weight-bold">Auerospace  -> Military -> Helicopters</p>-->
                                <p class="font-weight-bold text-theme-purple">{{node_type}} <i class="fa fa-arrow-right"></i> {{node_description}}</p>
                            </div>
                            <b-form-group
                                label-for="name-input"
                                label="Do you suggest we remove this classification? If so, why?"
                                class="font-weight-bold">
                                <b-form-textarea
                                    id="textarea"
                                    v-model="suggestion_reason"
                                    ref="suggestion_reason"
                                    placeholder="Reason..."
                                    maxlength="1000"
                                    :class="{ 'is-invalid': $v.suggestion_reason.$error }"
                                    rows="3"
                                    max-rows="6"
                                ></b-form-textarea>
                                <div v-if="!$v.suggestion_reason.required" class="invalid-feedback">Reason is required.</div>
                            </b-form-group>
                            <b-input-group>
                                <b-button class="btn-cancel-submit mr-3" @click="cancelSuggestionModal('modal-delete-node')"
                                          variant="success">Cancel
                                </b-button>
                                <b-button class="btn-cancel-submit" :disabled='isDisabled' @click="addSuggestion('delete')"
                                          variant="success">Submit
                                </b-button>
                            </b-input-group>
                        </b-modal>
                        <!--Other Node Modal-->
                        <b-modal
                            id="modal-other-node"
                            ref="modal"
                            title="Other Request"
                            hide-footer >
                            <div class="text-center">
                                <p class="font-weight-bold mb-0">Selected Classification</p>
                                <!--                <p class="font-weight-bold">Auerospace  -> Military -> Helicopters</p>-->
                                <p class="font-weight-bold text-theme-purple">{{node_type}} <i class="fa fa-arrow-right"></i> {{node_description}}</p>
                            </div>
                            <b-form-group
                                label-for="name-input"
                                label="Do you have any other suggestion for us? We would love to hear it!"
                                class="font-weight-bold">
                                <b-form-textarea
                                    id="textarea"
                                    v-model="suggestion_reason"
                                    ref="suggestion_reason"
                                    placeholder="Suggestion..."
                                    maxlength="1000"
                                    :class="{ 'is-invalid': $v.suggestion_reason.$error }"
                                    rows="3"
                                    max-rows="6"
                                ></b-form-textarea>
                                <div v-if="!$v.suggestion_reason.required" class="invalid-feedback">Suggestion is required.</div>
                            </b-form-group>
                            <b-input-group>
                                <b-button class="btn-cancel-submit mr-3" @click="cancelSuggestionModal('modal-other-node')"
                                          variant="success">Cancel
                                </b-button>
                                <b-button class="btn-cancel-submit" :disabled='isDisabled' @click="addSuggestion('other')"
                                          variant="success">Submit
                                </b-button>
                            </b-input-group>
                        </b-modal>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Navigation from "../Navigation";
    import loader from '../Loader'
    import sidebar from '../Sidebar'
    import vSelect from 'vue-select'
    import User from "../../apis/User";
    import {required, email, minLength, between} from 'vuelidate/lib/validators'
    import Common from "../../apis/Common";
    import CompanyNodeCollapses from "../CompanyNodeCollapses";
    import ProfileCompleteBanner from "../ProfileCompleteBanner";

    export default {
        data: function () {
            return {
                suggestionFormData: {
                    suggestion_type: '',
                    suggestion_explanation: '',
                    suggestion_reason: '',
                    node_type: '',
                    node_id: '',
                    parent_id: '',
                    industry_id: '',
                    hierarchy_type: '',
                    user_info: '',
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
                },
                isLoading: false,
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
                suggestion_explanation: '',
                suggestion_reason: '',
                node_type: '',
                node_id: '',
                parent_id: '',
                node_description: '',
                isDisabled: false,
                categorizationLevel: "",
                categorizationNodeId: "",
                /*Conditional Validation check variable*/
                noSubSectorData: false,
                noGroupData: false,
                noSubGroupData: false,
                noEchelonData: false,
                noSubEchelonData: false,
                /*Hierarchy Show/Hide related related */
                showSectorField: false,
                showSubSectorField: false,
                showGroupField: false,
                showSubGroupField: false,
                showEchelonField: false,
                showSubEchelonField: false,
                showTierField: false,
                showSubTierField: false,
                showLayerField: false,
                showSubLayerField: false,
                showDeckField: false,
                showSubDeckField: false,
                showFloorField: false,
                showSubFloorField: false,
                showBasementField: false,
                showSubBasementField: false,
                showMineField: false,
                showSubMineField: false,
                mutipleNodes: [],
                haveAddedNode: false,
                actionType: '',
            }
        },
        props: [],
        validations: {
            form: {
                industry: {required},
                sector: {required},
                subSector: {required},
                group: {required},
                subGroup: {required}
            },
            suggestion_explanation: {required},
            suggestion_reason: {required}
        },
        watch: {
            form: {
                handler: function () {
                    this.$emit('nodeData', [this.form.industry, this.form.sector, this.form.subSector, this.form.group, this.form.subGroup, this.form.echelon, this.form.subEchelon, this.form.tier, this.form.subTier, this.form.layer, this.form.subLayer, this.form.deck, this.form.subDeck, this.form.floor, this.form.subFloor, this.form.basement, this.form.subBasement, this.form.mine, this.form.subMine]);
                },
                deep: true
            }
        },
        methods: {
            getIndustries: async function () {
                await axios.get('/api/industry-list')
                    .then(response => {
                        this.industries = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getSectors: async function (value, changeEvent) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'Industry'
                    this.categorizationNodeId = value.id;
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/Sector/Industry')
                        .then(response => {
                            this.sectors = response.data.data;
                            this.clearNodeValue('sectors', changeEvent);
                            this.isLoading = false;
                            this.sectors.length === 0 ? this.showSectorField = false : this.showSectorField = true;
                        })
                        .catch(error => console.log(error))
                }
            },
            getSubSectors: async function (value, changeEvent) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'Sector'
                    this.categorizationNodeId = value.id
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/SubSector/Sector')
                        .then(response => {
                            this.subSectors = response.data.data
                            this.clearNodeValue('subSectors', changeEvent);
                            this.subSectors.length === 0 ? this.setConditionalValidationVariables('subSector', true) : this.setConditionalValidationVariables('subSector', false);
                            this.isLoading = false
                            this.subSectors.length === 0 ? this.showSubSectorField = false : this.showSubSectorField = true;
                        })
                        .catch(error => console.log(error))
                }
            },
            getGroups: async function (value, changeEvent) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'SubSector'
                    this.categorizationNodeId = value.id
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/Group/SubSector')
                        .then(response => {
                            this.groups = response.data.data;
                            this.clearNodeValue('groups', changeEvent);
                            this.groups.length === 0 ? this.setConditionalValidationVariables('group', true) : this.setConditionalValidationVariables('group', false);
                            this.isLoading = false
                            this.groups.length === 0 ? this.showGroupField = false : this.showGroupField = true;
                        })
                        .catch(error => console.log(error))
                }
            },
            getSubGroups: async function (value, changeEvent) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'Group'
                    this.categorizationNodeId = value.id
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/SubGroup/Group')
                        .then(response => {
                            this.subGroups = response.data.data;
                            this.clearNodeValue('subGroups', changeEvent);
                            this.subGroups.length === 0 ? this.setConditionalValidationVariables('subGroup', true) : this.setConditionalValidationVariables('subGroup', false);
                            this.isLoading = false
                            this.subGroups.length === 0 ? this.showSubGroupField = false : this.showSubGroupField = true;
                        })
                        .catch(error => console.log(error))
                }
            },
            getEchelons: async function (value, changeEvent) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'SubGroup'
                    this.categorizationNodeId = value.id
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/Echelon/SubGroup')
                        .then(response => {
                            this.echelons = response.data.data
                            this.clearNodeValue('echelons', changeEvent);
                            this.echelons.length === 0 ? this.setConditionalValidationVariables('echelon', true) : this.setConditionalValidationVariables('echelon', false);
                            this.isLoading = false
                            this.echelons.length === 0 ? this.showEchelonField = false : this.showEchelonField = true;
                        })
                        .catch(error => console.log(error))
                }
            },
            getSubEchelons: async function (value, changeEvent) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'Echelon'
                    this.categorizationNodeId = value.id
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/SubEchelon/Echelon')
                        .then(response => {
                            this.subEchelons = response.data.data
                            this.clearNodeValue('subEchelons', changeEvent);
                            this.subEchelons.length === 0 ? this.setConditionalValidationVariables('subEchelon', true) : this.setConditionalValidationVariables('subEchelon', false);
                            this.isLoading = false
                            this.subEchelons.length === 0 ? this.showSubEchelonField = false : this.showSubEchelonField = true;
                        })
                        .catch(error => console.log(error))
                }
            },
            getTiers: async function (value, changeEvent) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'SubEchelon'
                    this.categorizationNodeId = value.id
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/Tier/SubEchelon')
                        .then(response => {
                            this.tiers = response.data.data
                            this.clearNodeValue('tiers', changeEvent);
                            this.isLoading = false
                            this.tiers.length === 0 ? this.showTierField = false : this.showTierField = true;
                        })
                        .catch(error => console.log(error))
                }
            },
            getSubTiers: async function (value, changeEvent) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'Tier'
                    this.categorizationNodeId = value.id
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/SubTier/Tier')
                        .then(response => {
                            this.subTiers = response.data.data
                            this.clearNodeValue('subTiers', changeEvent);
                            this.isLoading = false
                            this.subTiers.length === 0 ? this.showSubTierField = false : this.showSubTierField = true;
                        })
                        .catch(error => console.log(error))
                }
            },
            getLayers: async function (value, changeEvent) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'SubTier'
                    this.categorizationNodeId = value.id
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/Layer/SubTier')
                        .then(response => {
                            this.layers = response.data.data
                            this.clearNodeValue('layers', changeEvent);
                            this.isLoading = false
                            this.layers.length === 0 ? this.showLayerField = false : this.showLayerField = true;
                        })
                        .catch(error => console.log(error))
                }
            },
            getSubLayers: async function (value, changeEvent) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'Layer'
                    this.categorizationNodeId = value.id
                    this.isLoading = true
                    axios.get('/api/get-node-list/' + value.id + '/SubLayer/Layer')
                        .then(response => {
                            this.subLayers = response.data.data
                            this.clearNodeValue('subLayers', changeEvent);
                            this.isLoading = false
                            this.subLayers.length === 0 ? this.showSubLayerField = false : this.showSubLayerField = true;
                        })
                        .catch(error => console.log(error))
                }
            },
            getDecks: async function (value, changeEvent) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'SubLayer'
                    this.categorizationNodeId = value.id
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/Deck/SubLayer')
                        .then(response => {
                            this.decks = response.data.data
                            this.clearNodeValue('decks', changeEvent);
                            this.isLoading = false
                            this.decks.length === 0 ? this.showDeckField = false : this.showDeckField = true;
                        })
                        .catch(error => console.log(error))
                }
            },
            getSubDecks: async function (value, changeEvent) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'Deck'
                    this.categorizationNodeId = value.id
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/SubDeck/Deck')
                        .then(response => {
                            this.subDecks = response.data.data
                            this.clearNodeValue('subDecks', changeEvent);
                            this.isLoading = false
                            this.subDecks.length === 0 ? this.showSubDeckField = false : this.showSubDeckField = true;
                        })
                        .catch(error => console.log(error))
                }
            },
            getFloors: async function (value, changeEvent) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'SubDeck'
                    this.categorizationNodeId = value.id
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/Floor/SubDeck')
                        .then(response => {
                            this.floors = response.data.data
                            this.clearNodeValue('floors', changeEvent);
                            this.isLoading = false
                            this.floors.length === 0 ? this.showFloorField = false : this.showFloorField = true;
                        })
                        .catch(error => console.log(error))
                }
            },
            getSubFloors: async function (value, changeEvent) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'Floor'
                    this.categorizationNodeId = value.id
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/SubFloor/Floor')
                        .then(response => {
                            this.subFloors = response.data.data
                            this.clearNodeValue('subFloors', changeEvent);
                            this.isLoading = false
                            this.subFloors.length === 0 ? this.showSubFloorField = false : this.showSubFloorField = true;
                        })
                        .catch(error => console.log(error))
                }
            },
            getBasements: async function (value, changeEvent) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'SubFloor'
                    this.categorizationNodeId = value.id
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/Basement/SubFloor')
                        .then(response => {
                            this.basements = response.data.data
                            this.clearNodeValue('basements', changeEvent);
                            this.isLoading = false
                            this.basements.length === 0 ? this.showBasementField = false : this.showBasementField = true;
                        })
                        .catch(error => console.log(error))
                }
            },
            getSubBasements: async function (value, changeEvent) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'Basement'
                    this.categorizationNodeId = value.id
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/SubBasement/Basement')
                        .then(response => {
                            this.subBasements = response.data.data
                            this.clearNodeValue('subBasements', changeEvent);
                            this.isLoading = false
                            this.subBasements.length === 0 ? this.showSubBasementField = false : this.showSubBasementField = true;
                        })
                        .catch(error => console.log(error))
                }
            },
            getMines: async function (value, changeEvent) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'SubBasement'
                    this.categorizationNodeId = value.id
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/Mine/SubBasement')
                        .then(response => {
                            this.mines = response.data.data
                            this.clearNodeValue('mines', changeEvent);
                            this.isLoading = false
                            this.mines.length === 0 ? this.showMineField = false : this.showMineField = true;
                        })
                        .catch(error => console.log(error))
                }
            },
            getSubMines: async function (value, changeEvent) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'Mine'
                    this.categorizationNodeId = value.id
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/SubMine/Mine')
                        .then(response => {
                            this.subMines = response.data.data
                            this.clearNodeValue('subMines', changeEvent);
                            this.isLoading = false
                            this.subMines.length === 0 ? this.showSubMineField = false : this.showSubMineField = true;
                        })
                        .catch(error => console.log(error))
                }
            },
            subMinesChange: function (value) {
                this.categorizationLevel = 'SubMine'
                this.categorizationNodeId = value.id
                this.clearNodeValue('other');
                this.showSubMineAddSuggestionField = true;
            },
            clearNodeValue: function (expression, changeEvent) {
                if (changeEvent == 'Input') {
                    //alert(expression)
                    switch (expression) {
                        case 'industry':
                            this.form.industry = '';
                            this.sectors = [];
                            this.showSectorField = false;
                        case 'sectors':
                            this.form.sector = '';
                            this.subSectors = [];
                            this.showSubSectorField = false;
                            this.showSectorAddSuggestionField = false;
                        case 'subSectors':
                            this.form.subSector = '';
                            this.groups = [];
                            this.showGroupField = false;
                        case 'groups':
                            this.form.group = '';
                            this.subGroups = [];
                            this.showSubGroupField = false;
                        case 'subGroups':
                            this.form.subGroup = '';
                            this.echelons = [];
                            this.showEchelonField = false;
                        case 'echelons':
                            this.form.echelon = '';
                            this.subEchelons = [];
                            this.showSubEchelonField = false;
                        case 'subEchelons':
                            this.form.subEchelon = '';
                            this.tiers = [];
                            this.showTierField = false;
                        case 'tiers':
                            this.form.tier = '';
                            this.subTiers = [];
                            this.showSubTierField = false;
                        case 'subTiers':
                            this.form.subTier = '';
                            this.layers = [];
                            this.showLayerField = false;
                        case 'layers':
                            this.form.layer = '';
                            this.subLayers = [];
                            this.showSubLayerField = false;
                        case 'subLayers':
                            this.form.subLayer = '';
                            this.decks = [];
                            this.showDeckField = false;
                        case 'decks':
                            this.form.deck = '';
                            this.subDeck = [];
                            this.showSubDeckField = false;
                        case 'subDecks':
                            this.form.subDeck = '';
                            this.floors = [];
                            this.showFloorField = false;
                        case 'floors':
                            this.form.floor = '';
                            this.subFloors = [];
                            this.showSubFloorField = false;
                        case 'subFloors':
                            this.form.subFloor = '';
                            this.basements = [];
                            this.showBasementField = false;
                        case 'basements':
                            this.form.basement = '';
                            this.subBasements = [];
                            this.showSubBasementField = false;
                        case 'subBasements':
                            this.form.subBasement = '';
                            this.mines = [];
                            this.showMineField = false;
                        case 'mines':
                            this.form.mine = '';
                            this.subMines = [];
                            this.showSubMineField = false;
                        case 'subMines':
                            this.form.subMine = '';
                    }
                }

            },
            setConditionalValidationVariables: function (selectNode, flag) {
                switch (selectNode) {
                    case "subSector":
                        this.noSubSectorData = flag;
                        if (flag == true) {
                            this.$v.form.subSector.$reset();
                        }
                    case "group":
                        this.noGroupData = flag;
                        if (flag == true) {
                            this.$v.form.group.$reset();
                        }
                    case "subGroup":
                        this.noSubGroupData = flag;
                        if (flag == true) {
                            this.$v.form.subGroup.$reset();
                        }
                }
            },
            showAddModal() {
                this.isDisabled = false
                this.$bvModal.hide('modal-add-suggestion')
                this.$bvModal.show('modal-add-node')
            },
            showReplaceModal() {
                this.isDisabled = false
                if (this.node_description) {
                    this.$bvModal.hide('modal-add-suggestion')
                    this.$bvModal.show('modal-replace-node')

                } else {
                    $.confirm({
                        title: 'Warning',
                        content: "Please select a node before this operation",
                        columnClass: 'medium',
                        type: 'red',
                        typeAnimated: true,
                        buttons: {
                            Ok: function () {
                            },
                        }
                    });
                }
            },
            showDeleteModal() {
                this.isDisabled = false
                if (this.node_description) {
                    this.$bvModal.hide('modal-add-suggestion')
                    this.$bvModal.show('modal-delete-node')
                } else {
                    $.confirm({
                        title: 'Warning',
                        content: "Please select a node before this operation",
                        columnClass: 'medium',
                        type: 'red',
                        typeAnimated: true,
                        buttons: {
                            Ok: function () {
                            },
                        }
                    });
                }

            },
            showOtherModal() {
                this.isDisabled = false
                if (this.node_description) {
                    this.$bvModal.hide('modal-add-suggestion')
                    this.$bvModal.show('modal-other-node')
                } else {
                    $.confirm({
                        title: 'Warning',
                        content: "Please select a node before this operation",
                        columnClass: 'medium',
                        type: 'red',
                        typeAnimated: true,
                        buttons: {
                            Ok: function () {
                            },
                        }
                    });
                }
            },
            cancelSuggestionModal: function (modalId) {
                this.$bvModal.hide(modalId);
                this.suggestion_explanation = "";
                this.suggestion_reason = "";
                this.$v.$reset();
            },
            addSuggestion: function (suggestionType) {
                if(suggestionType == 'add' || suggestionType == 'replace'){
                    this.$v.suggestion_explanation.$touch();
                    this.$v.suggestion_reason.$touch();
                    if (this.$v.suggestion_explanation.$invalid || this.$v.suggestion_reason.$invalid) {
                        if (this.$v.suggestion_explanation.$invalid) {
                            this.$refs.suggestion_explanation.focus();
                        } else if (this.$v.suggestion_reason.$invalid) {
                            this.$refs.suggestion_reason.focus();
                        }
                        return false;
                    }
                }else{
                    this.$v.suggestion_reason.$touch();
                    if (this.$v.suggestion_reason.$invalid) {
                        if (this.$v.suggestion_reason.$invalid) {
                            this.$refs.suggestion_reason.focus();
                        }
                        return false;
                    }
                }
                // this.isDisabled = true;
                this.suggestionFormData.suggestion_explanation = this.suggestion_explanation;
                this.suggestionFormData.suggestion_reason = this.suggestion_reason;
                this.suggestionFormData.node_type = this.node_type;
                this.suggestionFormData.node_id = this.node_id;
                this.suggestionFormData.parent_id = this.parent_id;
                this.suggestionFormData.industry_id = this.form.industry.id;
                this.suggestionFormData.suggestion_type = suggestionType;
                this.suggestionFormData.hierarchy_type = "Company";

                User.nodeSuggestion(this.suggestionFormData)
                    .then((response) => {
                        if (response.data.success) {
                            this.$bvModal.hide('modal-' + suggestionType + '-node')
                            //toastr.success(response.data.success.message)
                            $.confirm({
                                title: '',
                                content: "Thank you for your suggestion. We will review your submission and follow up with you within the next few business days.",
                                columnClass: 'medium',
                                type: 'blue',
                                typeAnimated: true,
                                buttons: {
                                    Ok: function () {
                                    },
                                }
                            });
                            this.suggestion_explanation = ''
                            this.suggestion_reason = ''
                            this.$v.$reset();
                        }
                    })
                    .catch(error => {
                        if (error.response.status === 422) {
                            toastr.error(error.response.data.error.message)
                        } else if (error.response.status == 401) {
                            this.$emit('logout')
                        } else {
                            toastr.error(error)
                        }
                    });
            },
            sendHierarchyInfo: function (type, id, description, parent_id) {
                this.node_type = type;
                this.node_id = id;
                this.node_description = description;
                this.parent_id = parent_id;
            },

            responseParents(event) {
                this.$emit('nodeData', [this.form.industry, this.form.sector, this.form.subSector, this.form.group, this.form.subGroup, this.form.echelon, this.form.subEchelon, this.form.tier, this.form.subTier, this.form.layer, this.form.subLayer, this.form.deck, this.form.subDeck, this.form.floor, this.form.subFloor, this.form.basement, this.form.subBasement, this.form.mine, this.form.subMine]);
            },
            saveHierarchyInfo: async function (callFrom) {
                this.$v.form.industry.$touch();
                this.$v.form.sector.$touch();
                if (this.noSubSectorData == false) {
                    this.$v.form.subSector.$touch();
                }
                if (this.noGroupData == false) {
                    this.$v.form.group.$touch();
                }
                if (this.noSubGroupData == false) {
                    this.$v.form.subGroup.$touch();
                }
                if (this.$v.form.industry.$invalid || this.$v.form.sector.$invalid
                    || (this.$v.form.subSector.$invalid && this.noSubSectorData == false)
                    || (this.$v.form.group.$invalid && this.noGroupData == false)
                    || (this.$v.form.subGroup.$invalid && this.noSubGroupData == false)
                ) {
                    if (this.$v.form.industry.$invalid) {
                        this.$refs.industry.$el.querySelector('input').focus();
                    } else if (this.$v.form.sector.$invalid) {
                        this.$refs.sector.$el.querySelector('input').focus();
                    } else if (this.$v.form.subSector.$invalid) {
                        this.$refs.subSector.$el.querySelector('input').focus();
                    } else if (this.$v.form.group.$invalid) {
                        this.$refs.group.$el.querySelector('input').focus();
                    } else if (this.$v.form.subGroup.$invalid) {
                        this.$refs.subGroup.$el.querySelector('input').focus();
                    }
                    return false;
                }
                this.isDisabled = true;
                let nodeformData = new FormData();
                nodeformData.append('node_type', this.categorizationLevel);
                nodeformData.append('node_id', this.categorizationNodeId);
                nodeformData.append('industry_id', this.form.industry.id);
                nodeformData.append('user_info', localStorage.getItem("userInfo"));
                if (callFrom == 'add') {
                    User.addMultipleNodes(nodeformData)
                        .then((response) => {
                            if (response.data.success) {
                                toastr.success(response.data.success.message)
                                this.$router.push({name: "CompanyQuestionnairesDetails",'hash': '#taxonomy'});
                                /*this.clearNodeValue('industry', 'Input')
                                this.getHierarchyInfo('', '');
                                /!*Assign Condition validation variable reset with from input*!/
                                this.$v.form.$reset();
                                this.noSubSectorData = false
                                this.noGroupData = false
                                this.noSubGroupData = false
                                this.noEchelonData = false
                                this.noSubEchelonData = false
                                toastr.success(response.data.success.message);
                                this.goBackToPageTop();*/
                            }
                        })
                        .catch(error => {
                            if (error.response.status === 422) {
                                toastr.error(error.response.data.error.message)
                            } else if (error.response.status == 401) {
                                this.$emit('logout')
                            } else {
                                toastr.error(error)
                            }
                        });
                } else {
                    nodeformData.append('updated_id', this.$route.params.id);
                    User.updateHierarchyNodes(nodeformData)
                        .then((response) => {
                            if (response.data.success) {
                                toastr.success(response.data.success.message)
                                this.$router.push({name: "CompanyQuestionnairesDetails",'hash': '#taxonomy'});
                            }
                        })
                        .catch(error => {
                            if (error.response.status === 422) {
                                // toastr.error(error.response.data.error.message)
                                $.confirm({
                                    title: '',
                                    content: error.response.data.error.message,
                                    columnClass: 'medium',
                                    type: 'blue',
                                    typeAnimated: true,
                                    buttons: {
                                        Ok: function () {
                                        },
                                    }
                                });
                            } else if (error.response.status == 401) {
                                this.$emit('logout')
                            } else {
                                toastr.error(error)
                            }
                        });
                }

            },
            getHierarchyInfo: function (id, industry_id) {
                axios.get('/api/get-multiple-node?categorization_id=' + id + '&industry_id=' + industry_id + '&user_info=' + localStorage.getItem("userInfo"))
                    .then((response) => {
                        this.mutipleNodes = response.data.data;
                        if (this.mutipleNodes.length > 0) {
                            this.haveAddedNode = true;
                        }
                        //console.log(this.mutipleNodes);
                        this.form.industry = this.mutipleNodes.industry;
                        this.getSectors(this.mutipleNodes.industry, 'Load');
                        this.form.sector = this.mutipleNodes.sector;
                        this.getSubSectors(this.mutipleNodes.sector, 'Load');
                        this.form.subSector = this.mutipleNodes.sub_sector;
                        this.getGroups(this.mutipleNodes.sub_sector, 'Load');
                        this.form.group = this.mutipleNodes.group;
                        this.getSubGroups(this.mutipleNodes.group, 'Load');
                        this.form.subGroup = this.mutipleNodes.sub_group;
                        this.getEchelons(this.mutipleNodes.sub_group, 'Load');
                        this.form.echelon = this.mutipleNodes.echelon;
                        this.getSubEchelons(this.mutipleNodes.echelon, 'Load');
                        this.form.subEchelon = this.mutipleNodes.sub_echelon;
                        this.getTiers(this.mutipleNodes.sub_echelon, 'Load');
                        this.form.tier = this.mutipleNodes.tier;
                        this.getSubTiers(this.mutipleNodes.tier, 'Load');
                        this.form.subTier = this.mutipleNodes.sub_tier;
                        this.getLayers(this.mutipleNodes.sub_tier, 'Load');
                        this.form.layer = this.mutipleNodes.layer;
                        this.getSubLayers(this.mutipleNodes.layer, 'Load');
                        this.form.subLayer = this.mutipleNodes.sub_layer;
                        this.getDecks(this.mutipleNodes.sub_layer, 'Load');
                        this.form.deck = this.mutipleNodes.deck;
                        this.getSubDecks(this.mutipleNodes.deck, 'Load');
                        this.form.subDeck = this.mutipleNodes.sub_deck;
                        this.getFloors(this.mutipleNodes.sub_deck, 'Load');
                        this.form.floor = this.mutipleNodes.floor;
                        this.getSubFloors(this.mutipleNodes.floor, 'Load');
                        this.form.subFloor = this.mutipleNodes.sub_floor;
                        this.getBasements(this.mutipleNodes.sub_floor, 'Load');
                        this.form.basement = this.mutipleNodes.basement;
                        this.getSubBasements(this.mutipleNodes.basement, 'Load');
                        this.form.subBasement = this.mutipleNodes.sub_basement;
                        this.getMines(this.mutipleNodes.sub_basement, 'Load');
                        this.form.mine = this.mutipleNodes.mine;
                        this.getSubMines(this.mutipleNodes.mine, 'Load');
                        this.form.subMine = this.mutipleNodes.sub_mine;
                        /*if (response.data.success) {
                            toastr.success(response.data.success.message)
                        }*/
                    })
                    .catch(error => {
                        if (error.response.status === 422) {
                            toastr.error(error.response.data.error.message)
                        } else if (error.response.status == 401) {
                            this.$emit('logout')
                        } else {
                            toastr.error(error)
                        }
                    });
            },
            checkSaveHierarchyInfo: function () {
                return this.haveAddedNode;
            },
            goBackToPageTopAndNextFieldToEnter: function () {
                $(document).ready(function () {
                    $(this).scrollTop(0);
                    $('input, select, textarea').on('keydown', function(e) {
                        if (e.keyCode==13) {
                            var focusable = $('input, select, textarea').filter(':visible');
                            focusable.eq(focusable.index(this)+1).focus();
                            return false;
                        }
                    });
                });
            },
        },
        created: function () {
            this.nodeColor = Common.hierarchyNodeColor;
            this.isLoading = true;
            this.goBackToPageTopAndNextFieldToEnter();
            this.getIndustries();
            //this.responseParents();
            if (this.$route.params.id == undefined) {
                this.actionType = 'add';
            } else {
                this.getHierarchyInfo(this.$route.params.id, '');
                this.actionType = 'update';
            }
        },
        components: {
            CompanyNodeCollapses,
            Navigation,
            sidebar,
            loader,
            ProfileCompleteBanner,
            vSelect,
        }
    }
</script>
