<template>
    <div class="row">
        <div class="col-lg-6 col-md-6">
            <div class="panel-body categorization-selection">
                <label class="control-label font-weight-bold">Industry<span class="text-danger">*</span></label>
                <v-select label="description"
                          :class="{ 'is-invalid': $v.form.industry.$error }"
                          :options="industries" v-model="form.industry" :clearable="false"
                          ref="industry"
                          :disabled="disabledInputs"
                          @input="getSectors(form.industry, 'Input')"
                          id="audioVideoIndustry"
                          placeholder="Select from Drop Down"></v-select>
                <div class="mt-1 mb-2 add-multiple"
                     :class="{ 'disabled':  form.industry==''}"
                     @click="sendHierarchyInfo('Industry',form.industry.id, form.industry.description,form.industry.id)"
                     v-b-modal.modal-add-suggestion>
                    + Add Suggestion
                </div>
                <div v-if="!$v.form.industry.required" class="invalid-feedback">Industry is
                    required.
                </div>

                <div class="clearfix" v-if="showSectorField">
                    <label class="control-label font-weight-bold">Sector<span class="text-danger"
                                                                              v-if="sectorRequired">*</span></label>
                    <v-select label="description"
                              :class="{ 'is-invalid': $v.form.sector.$error }"
                              :options="sectors" v-model="form.sector" :clearable="false"
                              ref="sector"
                              :disabled="disabledInputs"
                              @input="getSubSectors(form.sector,'Input')"
                              placeholder="Select from Drop Down"></v-select>
                    <div class="mt-1 mb-2 add-multiple"
                         :class="{ 'disabled':  form.sector==''}"
                         @click="sendHierarchyInfo('Sector',form.sector.id, form.sector.description,form.industry.id)"
                         v-b-modal.modal-add-suggestion>
                        + Add Suggestion
                    </div>
                    <div v-if="!$v.form.sector.required" class="invalid-feedback">Please select the lowest possible
                        classification befitting your product or service.
                    </div>
                </div>

                <div class="clearfix" v-if="showSubSectorField">
                    <label class="control-label font-weight-bold">Sub Sector<span class="text-danger"
                                                                                  v-if="subSectorRequired">*</span></label>
                    <v-select label="description"
                              :class="{ 'is-invalid': $v.form.subSector.$error }"
                              :options="subSectors" v-model="form.subSector" :clearable="false"
                              ref="subSector"
                              :disabled="disabledInputs"
                              @input="getGroups(form.subSector, 'Input')"
                              placeholder="Select from Drop Down"></v-select>
                    <div class="mt-1 mb-2 add-multiple"
                         :class="{ 'disabled':  form.subSector==''}"
                         @click="sendHierarchyInfo('SubSector',form.subSector.id, form.subSector.description,form.sector.id)"
                         v-b-modal.modal-add-suggestion>
                        + Add Suggestion
                    </div>
                    <div v-if="!$v.form.subSector.required" class="invalid-feedback">Please select the lowest possible
                        classification befitting your product or service.
                    </div>
                </div>

                <div class="clearfix" v-if="showGroupField">
                    <label class="control-label font-weight-bold">Group<span class="text-danger"
                                                                             v-if="groupRequired">*</span></label>
                    <v-select label="description"
                              :options="groups"
                              :class="{ 'is-invalid': $v.form.group.$error }"
                              ref="group"
                              :disabled="disabledInputs"
                              v-model="form.group" :clearable="false" @input="getSubGroups(form.group, 'Input')"
                              placeholder="Select from Drop Down"></v-select>
                    <div class="mt-1 mb-2 add-multiple"
                         :class="{ 'disabled':  form.group==''}"
                         @click="sendHierarchyInfo('Group',form.group.id, form.group.description,form.subSector.id)"
                         v-b-modal.modal-add-suggestion>
                        + Add Suggestion
                    </div>
                    <div v-if="!$v.form.group.required" class="invalid-feedback">Please select the lowest possible
                        classification befitting your product or service.
                    </div>
                </div>

                <div class="clearfix" v-if="showSubGroupField">
                    <label class="control-label font-weight-bold">Sub Group<span class="text-danger"
                                                                                 v-if="subGroupRequired">*</span></label>
                    <v-select label="description"
                              :options="subGroups" v-model="form.subGroup" :clearable="false"
                              :class="{ 'is-invalid': $v.form.subGroup.$error }"
                              ref="subGroup"
                              :disabled="disabledInputs"
                              @input="getEchelons(form.subGroup, 'Input')"
                              placeholder="Select from Drop Down"></v-select>
                    <div class="mt-1 mb-2 add-multiple"
                         :class="{ 'disabled':  form.subGroup==''}"
                         @click="sendHierarchyInfo('SubGroup',form.subGroup.id, form.subGroup.description,form.group.id)"
                         v-b-modal.modal-add-suggestion>
                        + Add Suggestion
                    </div>
                    <div v-if="!$v.form.subGroup.required" class="invalid-feedback">Please select the lowest possible
                        classification befitting your product or service.
                    </div>
                </div>
                <div class="clearfix" v-if="showEchelonField">
                    <label class="control-label font-weight-bold">Echelon<span class="text-danger"
                                                                               v-if="echelonRequired">*</span></label>
                    <v-select label="description"
                              :options="echelons" v-model="form.echelon" :clearable="false"
                              @input="getSubEchelons(form.echelon, 'Input')"
                              :class="{ 'is-invalid': $v.form.echelon.$error }"
                              ref="echelon"
                              :disabled="disabledInputs"
                              placeholder="Select from Drop Down"></v-select>
                    <div class="mt-1 mb-2 add-multiple"
                         :class="{ 'disabled':  form.echelon==''}"
                         @click="sendHierarchyInfo('Echelon',form.echelon.id, form.echelon.description,form.subGroup.id)"
                         v-b-modal.modal-add-suggestion>
                        + Add Suggestion
                    </div>
                    <div v-if="!$v.form.echelon.required" class="invalid-feedback">Please select the lowest possible
                        classification befitting your product or service.
                    </div>
                </div>
                <div class="clearfix" v-if="showSubEchelonField">
                    <label class="control-label font-weight-bold">Sub Echelon<span class="text-danger"
                                                                                   v-if="subEchelonRequired">*</span></label>
                    <v-select label="description"
                              :options="subEchelons" v-model="form.subEchelon"
                              :clearable="false" @input="getTiers(form.subEchelon, 'Input')"
                              :class="{ 'is-invalid': $v.form.subEchelon.$error }"
                              ref="subEchelon"
                              :disabled="disabledInputs"
                              placeholder="Select from Drop Down"></v-select>
                    <div class="mt-1 mb-2 add-multiple"
                         :class="{ 'disabled':  form.subEchelon==''}"
                         @click="sendHierarchyInfo('SubEchelon',form.subEchelon.id, form.subEchelon.description,form.echelon.id)"
                         v-b-modal.modal-add-suggestion>
                        + Add Suggestion
                    </div>
                    <div v-if="!$v.form.subEchelon.required" class="invalid-feedback">Please select the lowest possible
                        classification befitting your product or service.
                    </div>
                </div>
                <div class="clearfix" v-if="showTierField">
                    <label class="control-label font-weight-bold">Tier<span class="text-danger"
                                                                            v-if="tierRequired">*</span></label>
                    <v-select label="description" :options="tiers" v-model="form.tier"
                              :clearable="false"
                              @input="getSubTiers(form.tier, 'Input')"
                              :class="{ 'is-invalid': $v.form.tier.$error }"
                              ref="tier"
                              :disabled="disabledInputs"
                              placeholder="Select from Drop Down"></v-select>
                    <div class="mt-1 mb-2 add-multiple"
                         :class="{ 'disabled':  form.tier==''}"
                         @click="sendHierarchyInfo('Tier',form.tier.id, form.tier.description,form.subEchelon.id)"
                         v-b-modal.modal-add-suggestion>
                        + Add Suggestion
                    </div>
                    <div v-if="!$v.form.tier.required" class="invalid-feedback">Please select the lowest possible
                        classification befitting your product or service.
                    </div>
                </div>
                <div class="clearfix" v-if="showSubTierField">
                    <label class="control-label font-weight-bold">Sub Tier<span class="text-danger"
                                                                                v-if="subTierRequired">*</span></label>
                    <v-select label="description" :options="subTiers" v-model="form.subTier"
                              :clearable="false" @input="getLayers(form.subTier, 'Input')"
                              :class="{ 'is-invalid': $v.form.subTier.$error }"
                              ref="subTier"
                              :disabled="disabledInputs"
                              placeholder="Select from Drop Down"></v-select>
                    <div class="mt-1 mb-2 add-multiple"
                         :class="{ 'disabled':  form.subTier==''}"
                         @click="sendHierarchyInfo('SubTier', form.subTier.id, form.subTier.description,form.tier.id)"
                         v-b-modal.modal-add-suggestion>
                        + Add Suggestion
                    </div>
                    <div v-if="!$v.form.subTier.required" class="invalid-feedback">Please select the lowest possible
                        classification befitting your product or service.
                    </div>
                </div>
                <div class="clearfix" v-if="showLayerField">
                    <label class="control-label font-weight-bold">Layer<span class="text-danger"
                                                                             v-if="layerRequired">*</span></label>
                    <v-select label="description" :options="layers" v-model="form.layer"
                              :clearable="false" @input="getSubLayers(form.layer, 'Input')"
                              :class="{ 'is-invalid': $v.form.layer.$error }"
                              ref="layer"
                              :disabled="disabledInputs"
                              placeholder="Select from Drop Down"></v-select>
                    <div class="mt-1 mb-2 add-multiple"
                         :class="{ 'disabled':  form.layer==''}"
                         @click="sendHierarchyInfo('Layer',form.layer.id, form.layer.description,form.subTier.id)"
                         v-b-modal.modal-add-suggestion>
                        + Add Suggestion
                    </div>
                    <div v-if="!$v.form.layer.required" class="invalid-feedback">Please select the lowest possible
                        classification befitting your product or service.
                    </div>
                </div>
                <div class="clearfix" v-if="showSubLayerField">
                    <label class="control-label font-weight-bold">Sub Layer<span class="text-danger"
                                                                                 v-if="subLayerRequired">*</span></label>
                    <v-select label="description" :options="subLayers" v-model="form.subLayer"
                              :clearable="false" @input="getDecks(form.subLayer, 'Input')"
                              :class="{ 'is-invalid': $v.form.subLayer.$error }"
                              ref="subLayer"
                              :disabled="disabledInputs"
                              placeholder="Select from Drop Down"></v-select>
                    <div class="mt-1 mb-2 add-multiple"
                         :class="{ 'disabled':  form.subLayer==''}"
                         @click="sendHierarchyInfo('SubLayer', form.subLayer.id, form.subLayer.description,form.layer.id)"
                         v-b-modal.modal-add-suggestion>
                        + Add Suggestion
                    </div>
                    <div v-if="!$v.form.subLayer.required" class="invalid-feedback">Please select the lowest possible
                        classification befitting your product or service.
                    </div>
                </div>
                <div class="clearfix" v-if="showDeckField">
                    <label class="control-label font-weight-bold">Deck<span class="text-danger"
                                                                            v-if="deckRequired">*</span></label>
                    <v-select label="description" :options="decks" v-model="form.deck"
                              :clearable="false" @input="getSubDecks(form.deck, 'Input')"
                              :class="{ 'is-invalid': $v.form.deck.$error }"
                              ref="deck"
                              :disabled="disabledInputs"
                              placeholder="Select from Drop Down"></v-select>
                    <div class="mt-1 mb-2 add-multiple"
                         :class="{ 'disabled':  form.deck==''}"
                         @click="sendHierarchyInfo('Deck',form.deck.id, form.deck.description,form.subLayer.id)"
                         v-b-modal.modal-add-suggestion>
                        + Add Suggestion
                    </div>
                    <div v-if="!$v.form.deck.required" class="invalid-feedback">Please select the lowest possible
                        classification befitting your product or service.
                    </div>
                </div>
                <div class="clearfix" v-if="showSubDeckField">
                    <label class="control-label font-weight-bold">Sub Deck<span class="text-danger"
                                                                                v-if="subDeckRequired">*</span></label>
                    <v-select label="description" :options="subDecks" v-model="form.subDeck"
                              :clearable="false" @input="getFloors(form.subDeck, 'Input')"
                              :class="{ 'is-invalid': $v.form.subDeck.$error }"
                              ref="subDeck"
                              :disabled="disabledInputs"
                              placeholder="Select from Drop Down"></v-select>
                    <div class="mt-1 mb-2 add-multiple"
                         :class="{ 'disabled':  form.subDeck==''}"
                         @click="sendHierarchyInfo('SubDeck',form.subDeck.id, form.subDeck.description,form.deck.id)"
                         v-b-modal.modal-add-suggestion>
                        + Add Suggestion
                    </div>
                    <div v-if="!$v.form.subDeck.required" class="invalid-feedback">Please select the lowest possible
                        classification befitting your product or service.
                    </div>
                </div>
                <div class="clearfix" v-if="showFloorField">
                    <label class="control-label font-weight-bold">Floor<span class="text-danger"
                                                                             v-if="floorRequired">*</span></label>
                    <v-select label="description" :options="floors" v-model="form.floor"
                              :clearable="false" @input="getSubFloors(form.floor, 'Input')"
                              :class="{ 'is-invalid': $v.form.floor.$error }"
                              ref="floor"
                              :disabled="disabledInputs"
                              placeholder="Select from Drop Down"></v-select>
                    <div class="mt-1 mb-2 add-multiple"
                         :class="{ 'disabled':  form.floor==''}"
                         @click="sendHierarchyInfo('Floor',form.floor.id, form.floor.description,form.subDeck.id)"
                         v-b-modal.modal-add-suggestion>
                        + Add Suggestion
                    </div>
                    <div v-if="!$v.form.floor.required" class="invalid-feedback">Please select the lowest possible
                        classification befitting your product or service.
                    </div>
                </div>
                <div class="clearfix" v-if="showSubFloorField">
                    <label class="control-label font-weight-bold">Sub Floor<span class="text-danger"
                                                                                 v-if="subFloorRequired">*</span></label>
                    <v-select label="description" :options="subFloors" v-model="form.subFloor"
                              :clearable="false" @input="getBasements(form.subFloor, 'Input')"
                              :class="{ 'is-invalid': $v.form.subFloor.$error }"
                              ref="subFloor"
                              :disabled="disabledInputs"
                              placeholder="Select from Drop Down"></v-select>
                    <div class="mt-1 mb-2 add-multiple"
                         :class="{ 'disabled':  form.subFloor==''}"
                         @click="sendHierarchyInfo('SubFloor',form.subFloor.id, form.subFloor.description,form.floor.id)"
                         v-b-modal.modal-add-suggestion>
                        + Add Suggestion
                    </div>
                    <div v-if="!$v.form.subFloor.required" class="invalid-feedback">Please select the lowest possible
                        classification befitting your product or service.
                    </div>
                </div>
                <div class="clearfix" v-if="showBasementField">
                    <label class="control-label font-weight-bold">Basement<span class="text-danger"
                                                                                v-if="basementRequired">*</span></label>
                    <v-select label="description" :options="basements" v-model="form.basement"
                              :clearable="false" @input="getSubBasements(form.basement, 'Input')"
                              :class="{ 'is-invalid': $v.form.basement.$error }"
                              ref="basement"
                              :disabled="disabledInputs"
                              placeholder="Select from Drop Down"></v-select>
                    <div class="mt-1 mb-2 add-multiple"
                         :class="{ 'disabled':  form.basement==''}"
                         @click="sendHierarchyInfo('Basement',form.basement.id, form.basement.description,form.subFloor.id)"
                         v-b-modal.modal-add-suggestion>
                        + Add Suggestion
                    </div>
                    <div v-if="!$v.form.basement.required" class="invalid-feedback">Please select the lowest possible
                        classification befitting your product or service.
                    </div>
                </div>
                <div class="clearfix" v-if="showSubBasementField">
                    <label class="control-label font-weight-bold">Sub Basement<span class="text-danger"
                                                                                    v-if="subBasementRequired">*</span></label>
                    <v-select label="description" :options="subBasements"
                              v-model="form.subBasement" :clearable="false"
                              @input="getMines(form.subBasement, 'Input')"
                              :class="{ 'is-invalid': $v.form.subBasement.$error }"
                              ref="subBasement"
                              :disabled="disabledInputs"
                              placeholder="Select from Drop Down"></v-select>
                    <div class="mt-1 mb-2 add-multiple"
                         :class="{ 'disabled':  form.subBasement==''}"
                         @click="sendHierarchyInfo('SubBasement',form.subBasement.id, form.subBasement.description,form.basement.id)"
                         v-b-modal.modal-add-suggestion>
                        + Add Suggestion
                    </div>
                    <div v-if="!$v.form.subBasement.required" class="invalid-feedback">Please select the lowest possible
                        classification befitting your product or service.
                    </div>
                </div>
                <div class="clearfix" v-if="showMineField">
                    <label class="control-label font-weight-bold">Mine<span class="text-danger"
                                                                            v-if="mineRequired">*</span></label>
                    <v-select label="description" :options="mines" v-model="form.mine"
                              :clearable="false" @input="getSubMines(form.mine, 'Input')"
                              :class="{ 'is-invalid': $v.form.mine.$error }"
                              ref="mine"
                              :disabled="disabledInputs"
                              placeholder="Select from Drop Down"></v-select>
                    <div class="mt-1 mb-2 add-multiple"
                         :class="{ 'disabled':  form.mine==''}"
                         @click="sendHierarchyInfo('Mine',form.mine.id, form.mine.description,form.subBasement.id)"
                         v-b-modal.modal-add-suggestion>
                        + Add Suggestion
                    </div>
                    <div v-if="!$v.form.mine.required" class="invalid-feedback">Please select the lowest possible
                        classification befitting your product or service.
                    </div>
                </div>
                <div class=" form-group mb-5" v-if="showSubMineField">
                    <label class="control-label font-weight-bold">Sub Mine<span class="text-danger"
                                                                                v-if="subMineRequired">*</span></label>
                    <v-select label="description" :options="subMines" v-model="form.subMine"
                              :clearable="false" @input="subMinesChange"
                              :class="{ 'is-invalid': $v.form.subMine.$error }"
                              ref="subMine"
                              :disabled="disabledInputs"
                              placeholder="Select from Drop Down"></v-select>
                    <div class="mt-1 mb-2 add-multiple"
                         :class="{ 'disabled':  form.subMine==''}"
                         @click="sendHierarchyInfo('SubMine',form.subMine.id, form.subMine.description,form.mine.id)"
                         v-b-modal.modal-add-suggestion>
                        + Add Suggestion
                    </div>
                    <div v-if="!$v.form.subMine.required" class="invalid-feedback">Please select the lowest possible
                        classification befitting your product or service.
                    </div>
                </div>
                <!--<div class="mt-5" v-if="taxonomyActionType != 'edit'">
                    <router-link class="h3" :to={} id="tooltip-target-2">
                        <i class="fas fa-question-circle text-dark exclamition-position"></i>
                    </router-link>
                    <b-tooltip target="tooltip-target-2" triggers="hover">You can associate
                        more than one
                        industry
                        categorization to your company and to your content. This means if
                        your company provides
                        services
                        or products across more than a single industry (or within multiple
                        parts of a single
                        industry)
                        any users search for those specific categorizations will find your
                        company’s content.
                    </b-tooltip>
                    <template v-if="!enabledEditMode">
                        <button @click.prevent="saveHierarchyInfo('next')"
                                class="btn btn-theme-primary media-another-node-btn">Add Another Categorization
                        </button>
                        <button @click.prevent="gotoParentSaveAndClose()"
                                class="btn btn-back-next float-right media-finish-btn">
                            Next
                        </button>
                    </template>
                    <template v-if="enabledEditMode">
                        <button @click.prevent="loadLastTabDataFromStorage(multipleNodes.length)"
                                class="btn btn-back-next">Cancel
                        </button>
                        <button @click.prevent="updateExistingClassification()"
                                class="btn btn-theme-primary float-right media-finish-btn">
                            Save
                        </button>
                    </template>
                </div>
                <div class="mt-5" v-else>
                    <button @click.prevent="$parent.editCancel" class="btn btn-back-next">Cancel</button>
                    <template v-if="enabledEditMode">
                        <button @click.prevent="updateExistingClassification()"
                                class="btn btn-theme-primary float-right media-finish-btn">
                            Save
                        </button>
                    </template>
                    <template v-else>
                        <button @click.prevent="saveHierarchyInfo('edit')"
                                class="btn float-right btn-theme-primary media-another-node-btn">Add Another
                            Categorization
                        </button>
                    </template>
                </div>-->
            </div>
            <div class="mt-3 mb-3" v-if="taxonomyActionType != 'edit'">
                <router-link class="h5 media-hierarchy-classification-tooltrip" :to={} id="tooltip-target-2">
                    <i class="fas fa-question-circle text-dark exclamition-position"></i>
                </router-link>
                <b-tooltip target="tooltip-target-2" triggers="hover">You can associate
                    more than one
                    industry
                    classification to your company and to your content. This means if
                    your company provides
                    services
                    or products across more than a single industry (or within multiple
                    parts of a single
                    industry)
                    any users search for those specific classification will find your
                    company’s content.
                </b-tooltip>
                <template v-if="!enterEditMode && !enabledEditMode">
                    <button @click="clearNodeValue('industry', 'Input')"
                            class="btn btn-back-next classification-btn btn-clear-form">
                        Clear Form
                    </button>
                    <button @click.prevent="saveHierarchyInfo('next')"
                            class="btn btn-theme-primary media-another-node-btn add-another-classification-btn">Add Classification
                    </button>
                    <button @click.prevent="gotoParentSaveAndClose()"
                            class="btn btn-back-next float-right media-finish-btn classification-btn activate-btn">
                        Activate & Save
                    </button>
                </template>
                <template v-if="enabledEditMode">
                    <button @click.prevent="loadLastTabDataFromStorage(multipleNodes.length)"
                            class="btn btn-back-next">Cancel
                    </button>
                    <button @click.prevent="updateExistingClassification('save')"
                            class="btn btn-theme-primary float-right media-finish-btn">
                        Save
                    </button>
                </template>
            </div>
            <div class="mt-3" v-else>
                <button @click.prevent="$parent.editCancel" class="btn btn-back-next" :class="{'media-edit-btn-padding':!enabledEditMode}">Cancel
                </button>
                <template v-if="enabledEditMode">
                    <button @click.prevent="updateExistingClassification('save')"
                            class="btn btn-theme-primary float-right media-finish-btn">
                        Save
                    </button>
                    <button @click.prevent="updateExistingClassification('saveAndClose')"
                            class="btn btn-theme-primary float-right mr-2 media-finish-btn">
                        Save & Close
                    </button>
                </template>
                <template v-else-if="!enterEditMode">
                    <button @click.prevent="saveHierarchyInfo('edit')"
                            class="btn float-right btn-theme-primary media-another-node-btn media-edit-btn-padding">Add
                        Classification
                    </button>
                    <button @click.prevent="saveHierarchyInfo('editAndClose')"
                            class="btn float-right btn-theme-primary mr-2 media-another-node-btn media-edit-btn-padding media-edit-save-and-close-btn">
                        Save & Close
                    </button>
                </template>
            </div>
        </div>
        <div class="media-categorization-scroll-tab col-lg-6 col-md-6">
            <!--<b-card
                no-body
                class="pb-3 border-0 col-md-2"
                v-for="(each,index) in multipleNodes"
                :key="each.categorization_id"
            >
                <CompanyNodeCollapses v-bind:each="each" :objectIndex="index"></CompanyNodeCollapses>

                &lt;!&ndash;<router-link v-if="taxonomyActionType == 'edit'" @click.native="updateViewKey" class="btn btn-theme-purple-dashboard edit-taxonomy" link
                             :to="{ name: 'VideoStepOneEdit',params: { id: $route.params.id, fileId:each.categorization_id }}"><i
                    class="fas fa-pencil-alt"></i> Edit Taxonomy
                </router-link>&ndash;&gt;
            </b-card>-->
            <div class="px-4">
                <div class="position-relative" v-if="enableTabNavigation">
                <span class="position-absolute tab-navigation-left-icons" @click.prevent="navigateTabScrollOnLeft">
                    <i class="fas fa-chevron-left"></i>
                </span>
                    <span class="position-absolute tab-navigation-right-icons"
                          @click.prevent="navigateTabScrollOnRight">
                    <i class="fas fa-chevron-right"></i>
                </span>
                </div>
                <b-tabs v-model="tabIndex"
                        active-nav-item-class="text-primary"
                        active-tab-class=""
                        class="media-categorization-tab"
                        content-class="mt-3">
                    <template v-if="multipleNodes.length > 0">
                        <template v-for="(each,index) in multipleNodes">
                            <span class="d-none">{{activeTab}}</span>
                            <!--This one not need for any functionality Just for Tab active in Edit-->
                            <b-tab :active="index === activeTab" @click.prevent="loadTabContent(each,index)">
                                <template #title>
                                    Classification {{index+1}}
                                </template>
                                <template v-if="(enabledEditMode == true) && (activeTab === index)">
                                    <MediaCategoryCurrentPathway v-bind:form="form"
                                                                 v-bind:enabledEditMode="enabledEditMode"></MediaCategoryCurrentPathway>
                                </template>
                                <template v-else>
                                    <button class="float-right icon-custom-background media-categorization-edit-icon"
                                            @click.prevent="EnabledAllSelectForEdit"
                                    ><i
                                        class="fas fa-pencil-alt"></i>
                                    </button>
                                    <MediaCategoryTabContent v-bind:each="each" v-bind:objectIndex="index"
                                                             ref="category"></MediaCategoryTabContent>
                                </template>
                            </b-tab>
                            <template v-if="(index+2 > multipleNodes.length)">
                                <b-tab @click.prevent="loadLastTabDataFromStorage(index+1)"
                                       :active="activeTab === index+1">
                                    <template #title>
                                        Classification {{index+2}}
                                    </template>
                                    <MediaCategoryCurrentPathway v-bind:form="form"
                                                                 v-bind:enabledEditMode="enabledEditMode"></MediaCategoryCurrentPathway>
                                </b-tab>
                            </template>
                        </template>
                    </template>
                    <template v-else>
                        <b-tab :active="activeTab === 0">
                            <template #title>
                                Classification 1
                            </template>
                            <MediaCategoryCurrentPathway v-bind:form="form"
                                                         v-bind:enabledEditMode="enabledEditMode"></MediaCategoryCurrentPathway>
                        </b-tab>
                    </template>
                </b-tabs>
            </div>
        </div>


        <!--        <div class="col-lg-2 col-md-1"></div>-->
        <loader :is-visible="isLoading"></loader>
        <!--Add Suggestion Modal-->
        <b-modal
            id="modal-add-suggestion"
            ref="modal"
            title="Add Suggestion"
            centered
            hide-footer title-class="modal-title-new">
            <input type="hidden" v-model="node_type">
            <input type="hidden" v-model="node_id">
            <b-button id="addnode" class="btn-add-suggestion background-darkblue" @click="showAddModal" variant="success">Add Classification
            </b-button>
            <b-button id="replacenode" class="btn-add-suggestion background-darkblue" @click="showReplaceModal" variant="success">
                Replace Classification
            </b-button>
            <b-button id="deletenode" class="btn-add-suggestion background-darkblue" @click="showDeleteModal" variant="success">
                Delete Classification
            </b-button>
            <b-button id="other" class="btn-add-suggestion background-darkblue" @click="showOtherModal" variant="success">
                Other
            </b-button>
        </b-modal>
        <!--Add Node Modal-->
        <b-modal
            id="modal-add-node"
            ref="modal"
            title="Add Classification"
            centered
            hide-footer title-class="modal-title-new">
            <div class="row text-center">
                <div class="col-12">
                    <div class="d-flex justify-content-center align-items-center">
                        <p class="font-weight-bold mb-0 pr-1 text-darkblue">Selected Classification</p>
                        <div class="exclamition-position">
                            <span class="h3" v-b-tooltip.hover
                                  title="Your suggested classification will be added beneath the parent of the currently selected, so that your suggestion will appear in the same dropdown selection as your currently selected classification.">
                                <i class="fas fa-question-circle text-dark"></i>
                            </span>
                        </div>
                    </div>
                    <!--                    <p class="font-weight-bold">Auerospace  -> Military -> Helicopters</p>-->
                    <p class="font-weight-bold text-darkblue">{{node_type}} <i class="fa fa-arrow-right"></i>
                        {{node_description}}</p>
                </div>
            </div>
            <b-form-group
                label-for="name-input"
                label="Add Classification Request Here"
                class="font-weight-bold">
                <b-form-input
                    v-model="suggestion_explanation"
                    ref="suggestion_explanation"
                    placeholder="Type Requested Node Here"
                    class="mb-2"
                    maxlength="200"
                    :class="{ 'is-invalid': $v.suggestion_explanation.$error }"
                    required
                ></b-form-input>
                <div v-if="!$v.suggestion_explanation.required" class="invalid-feedback">Requested Node is required.
                </div>
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
            <b-input-group class="justify-content-center">
                <b-button class="btn-cancel-submit mr-3 background-darkblue" @click="addSuggestion('add')" :disabled='isDisabled'
                          variant="success">Submit
                </b-button>
                <b-button class="btn-cancel-submit background-darkblue" @click="cancelSuggestionModal('modal-add-node')"
                          variant="success">Cancel
                </b-button>
            </b-input-group>
        </b-modal>
        <!--Replace Node Modal-->
        <b-modal
            id="modal-replace-node"
            ref="modal"
            title="Replace Classification Request"
            centered
            hide-footer title-class="modal-title-new">
            <div class="text-center">
                <p class="font-weight-bold mb-0 text-darkblue">Selected Classification</p>
                <!--                    <p class="font-weight-bold">Auerospace  -> Military -> Helicopters</p>-->
                <p class="font-weight-bold text-darkblue">{{node_type}} <i class="fa fa-arrow-right"></i>
                    {{node_description}}</p>
            </div>
            <b-form-group
                label-for="name-input"
                label="Replace Classification Request Here"
                class="font-weight-bold">
                <b-form-input
                    placeholder="Type Suggested Name Change Here"
                    v-model="suggestion_explanation"
                    ref="suggestion_explanation"
                    class="mb-2"
                    maxlength="200"
                    :class="{ 'is-invalid': $v.suggestion_explanation.$error }"
                    required
                ></b-form-input>
                <div v-if="!$v.suggestion_explanation.required" class="invalid-feedback">Requested Node is
                    required.
                </div>
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
            <b-input-group class="justify-content-center">
                <b-button class="btn-cancel-submit mr-3 background-darkblue" :disabled='isDisabled' @click="addSuggestion('replace')"
                          variant="success">Submit
                </b-button>
                <b-button class="btn-cancel-submit background-darkblue" @click="cancelSuggestionModal('modal-replace-node')"
                          variant="success">Cancel
                </b-button>
            </b-input-group>
        </b-modal>
        <!--Delete Node Modal-->
        <b-modal
            id="modal-delete-node"
            ref="modal"
            title="Delete Classification Request"
            centered
            hide-footer title-class="modal-title-new">
            <div class="text-center">
                <p class="font-weight-bold mb-0 text-darkblue">Selected Classification</p>
                <!--                <p class="font-weight-bold">Auerospace  -> Military -> Helicopters</p>-->
                <p class="font-weight-bold text-darkblue">{{node_type}} <i class="fa fa-arrow-right"></i>
                    {{node_description}}</p>
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
                    :class="{ 'is-invalid': $v.suggestion_reason.$error }"
                    maxlength="1000"
                    rows="3"
                    max-rows="6"
                ></b-form-textarea>
                <div v-if="!$v.suggestion_reason.required" class="invalid-feedback">Reason is required.</div>
            </b-form-group>
            <b-input-group class="justify-content-center">
                <b-button class="btn-cancel-submit mr-3 background-darkblue" :disabled='isDisabled' @click="addSuggestion('delete')"
                          variant="success">Submit
                </b-button>
                <b-button class="btn-cancel-submit background-darkblue" @click="cancelSuggestionModal('modal-delete-node')"
                          variant="success">Cancel
                </b-button>
            </b-input-group>
        </b-modal>
        <!--Other Node Modal-->
        <b-modal
            id="modal-other-node"
            ref="modal"
            title="Other Request"
            centered
            hide-footer title-class="modal-title-new">
            <div class="text-center">
                <p class="font-weight-bold mb-0 text-darkblue">Selected Classification</p>
                <!--                <p class="font-weight-bold">Auerospace  -> Military -> Helicopters</p>-->
                <p class="font-weight-bold text-darkblue">{{node_type}} <i class="fa fa-arrow-right"></i>
                    {{node_description}}</p>
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
                    :class="{ 'is-invalid': $v.suggestion_reason.$error }"
                    maxlength="1000"
                    rows="3"
                    max-rows="6"
                ></b-form-textarea>
                <div v-if="!$v.suggestion_reason.required" class="invalid-feedback">Suggestion is required.</div>
            </b-form-group>
            <b-input-group class="justify-content-center">
                <b-button class="btn-cancel-submit mr-3 background-darkblue" :disabled='isDisabled' @click="addSuggestion('other')"
                          variant="success">Submit
                </b-button>
                <b-button class="btn-cancel-submit background-darkblue" @click="cancelSuggestionModal('modal-other-node')"
                          variant="success">Cancel
                </b-button>
            </b-input-group>
        </b-modal>
    </div>
</template>

<script>
    import CompanyNodeCollapses from "./CompanyNodeCollapses";
    import MediaCategoryTabContent from "./MediaCategoryTabContent";
    import MediaCategoryCurrentPathway from "./MediaCategoryCurrentPathway";
    import loader from '../components/Loader'
    import vSelect from 'vue-select'
    import User from "../apis/User";
    import AudioVideo from "../apis/AudioVideo";
    import Common from "../apis/Common";
    import {required, email, minLength, between} from 'vuelidate/lib/validators'

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
                tabIndex: 1,
                activeTab: 0,
                disabledInputs: false,
                enterEditMode: false,
                enabledEditMode: false,
                lastTabData: "",
                enableTabNavigation: false,
                editableCategorizationId: '',
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
                node_description: '',
                isDisabled: false,
                categorizationLevel: "",
                categorizationNodeId: "",
                categorizationNodeName: "",
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
                /*End Hierarchy Show/Hide related related */

                /*Hierarchy required related related */
                sectorRequired: false,
                subSectorRequired: false,

                groupRequired: false,
                subGroupRequired: false,

                echelonRequired: false,
                subEchelonRequired: false,

                tierRequired: false,
                subTierRequired: false,

                layerRequired: false,
                subLayerRequired: false,

                deckRequired: false,
                subDeckRequired: false,

                floorRequired: false,
                subFloorRequired: false,

                basementRequired: false,
                subBasementRequired: false,

                mineRequired: false,
                subMineRequired: false,
                /*End Hierarchy Show/Hide related related */
                addedMediaId: "",
                lookupId: null,
                lookupIdForEdit: null,
                multipleNodes: [],

                /*Conditional Validation check variable*/
                noSubSectorData: false,
                noGroupData: false,
                noSubGroupData: false,
                noEchelonData: false,
                noSubEchelonData: false,
                noTierData: false,
                noSubTierData: false,
                noLayerData: false,
                noSubLayerData: false,
                noDeckData: false,
                noSubDeckData: false,
                noFloorData: false,
                noSubFloorData: false,
                noBasementData: false,
                noSubBasementData: false,
                noMineData: false,
                noSubMineData: false,
            }
        },
        props: ['taxonomyActionType', 'taxonomyType', 'hierarchyType', "mediaUuid"],
        validations: {
            form: {
                industry: {required},
                sector: {required},
                subSector: {required},
                group: {required},
                subGroup: {required},
                echelon: {required},
                subEchelon: {required},
                tier: {required},
                subTier: {required},
                layer: {required},
                subLayer: {required},
                deck: {required},
                subDeck: {required},
                floor: {required},
                subFloor: {required},
                basement: {required},
                subBasement: {required},
                mine: {required},
                subMine: {required},
            },
            suggestion_explanation: {required},
            suggestion_reason: {required}
        },
        watch: {
            form: {
                handler: function () {
                    this.$emit('nodeData', [this.form.industry, this.form.sector, this.form.subSector, this.form.group, this.form.subGroup, this.form.echelon, this.form.subEchelon, this.form.tier, this.form.subTier, this.form.layer, this.form.subLayer, this.form.deck, this.form.subDeck, this.form.floor, this.form.subFloor, this.form.basement, this.form.subBasement, this.form.mine, this.form.subMine, this.lookupId]);
                },
                deep: true
            }
        },
        methods: {
            loadTabContent: function (each, index) {
                /*Save Last Tab selected values in local storage */
                if (JSON.parse(localStorage.getItem("lastValue")) == null) {
                    localStorage.setItem("lastValue", JSON.stringify(this.form));
                }
                /*Active Current Tab*/
                this.activeTab = index;
                /*Populate all save data in taxonomy selection*/
                this.editableCategorizationId = each.categorization_id;
                this.form.industry = each.industry;
                this.getSectors(each.industry, 'load', false);
                if (Object.keys(each).includes('sector')) {
                    this.form.sector = each.sector;
                    if (each.last_level == 'sector') {
                        this.getSubSectors(each.sector, 'Input', true);
                    } else {
                        this.getSubSectors(each.sector, 'load', false);
                    }
                }
                if (Object.keys(each).includes('sub_sector')) {
                    this.form.subSector = each.sub_sector;
                    if (each.last_level == 'sub_sector') {
                        this.getGroups(each.sub_sector, 'Input', true);
                    } else {
                        this.getGroups(each.sub_sector, 'load', false);
                    }
                }
                if (Object.keys(each).includes('group')) {
                    this.form.group = each.group;
                    if (each.last_level == 'group') {
                        this.getSubGroups(each.group, 'Input', true);
                    } else {
                        this.getSubGroups(each.group, 'load', false);
                    }
                }
                if (Object.keys(each).includes('sub_group')) {
                    this.form.subGroup = each.sub_group;
                    if (each.last_level == 'sub_group') {
                        this.getEchelons(each.sub_group, 'Input', true);
                    } else {
                        this.getEchelons(each.sub_group, 'load', false);
                    }
                }
                if (Object.keys(each).includes('echelon')) {
                    this.form.echelon = each.echelon;
                    if (each.last_level == 'echelon') {
                        this.getSubEchelons(each.echelon, 'Input', true);
                    } else {
                        this.getSubEchelons(each.echelon, 'load', false);
                    }
                }
                if (Object.keys(each).includes('sub_echelon')) {
                    this.form.subEchelon = each.sub_echelon;
                    if (each.last_level == 'sub_echelon') {
                        this.getTiers(each.sub_echelon, 'Input', true);
                    } else {
                        this.getTiers(each.sub_echelon, 'load', false);
                    }
                }
                if (Object.keys(each).includes('tier')) {
                    this.form.tier = each.tier;
                    if (each.last_level == 'tier') {
                        this.getSubTiers(each.tier, 'Input', true);
                    } else {
                        this.getSubTiers(each.tier, 'load', false);
                    }
                }
                if (Object.keys(each).includes('sub_tier')) {
                    this.form.subTier = each.sub_tier;
                    if (each.last_level == 'sub_tier') {
                        this.getLayers(each.sub_tier, 'Input', true);
                    } else {
                        this.getLayers(each.sub_tier, 'load', false);
                    }
                }
                if (Object.keys(each).includes('layer')) {
                    this.form.layer = each.layer;
                    if (each.last_level == 'layer') {
                        this.getSubLayers(each.layer, 'Input', true);
                    } else {
                        this.getSubLayers(each.layer, 'load', false);
                    }
                }
                if (Object.keys(each).includes('sub_layer')) {
                    this.form.subLayer = each.sub_layer
                    if (each.last_level == 'sub_layer') {
                        this.getDecks(each.sub_layer, 'Input', true);
                    } else {
                        this.getDecks(each.sub_layer, 'load', false);
                    }
                }
                if (Object.keys(each).includes('deck')) {
                    this.form.deck = each.deck
                    if (each.last_level == 'deck') {
                        this.getSubDecks(each.deck, 'Input', true);
                    } else {
                        this.getSubDecks(each.deck, 'load', false);
                    }
                }
                if (Object.keys(each).includes('sub_deck')) {
                    this.form.subDeck = each.sub_deck
                    if (each.last_level == 'sub_deck') {
                        this.getFloors(each.sub_deck, 'Input', true);
                    } else {
                        this.getFloors(each.sub_deck, 'load', false);
                    }
                }
                if (Object.keys(each).includes('floor')) {
                    this.form.floor = each.floor
                    if (each.last_level == 'floor') {
                        this.getSubFloors(each.floor, 'Input', true);
                    } else {
                        this.getSubFloors(each.floor, 'load', false);
                    }
                }
                if (Object.keys(each).includes('sub_floor')) {
                    this.form.subFloor = each.sub_floor
                    if (each.last_level == 'sub_floor') {
                        this.getBasements(each.sub_floor, 'Input', true);
                    } else {
                        this.getBasements(each.sub_floor, 'load', false);
                    }
                }
                if (Object.keys(each).includes('basement')) {
                    this.form.basement = each.basement
                    if (each.last_level == 'basement') {
                        this.getSubBasements(each.basement, 'Input', true);
                    } else {
                        this.getSubBasements(each.basement, 'load', false);
                    }
                }
                if (Object.keys(each).includes('sub_basement')) {
                    this.form.subBasement = each.sub_basement
                    if (each.last_level == 'sub_basement') {
                        this.getMines(each.sub_basement, 'Input', true);
                    } else {
                        this.getMines(each.sub_basement, 'load', false);
                    }
                }
                if (Object.keys(each).includes('mine')) {
                    this.form.mine = each.mine
                    if (each.last_level == 'mine') {
                        this.getSubMines(each.mine, 'Input', true);
                    } else {
                        this.getSubMines(each.mine, 'load', false);
                    }
                }
                if (Object.keys(each).includes('sub_mine')) {
                    this.form.subMine = each.sub_mine;
                }
                /*Disabled all selected input taxonomy*/
                this.disabledInputs = true;
                this.enterEditMode = true;
                /*Enabled Edit Mode*/
                //this.enabledEditMode = true;
            },
            EnabledAllSelectForEdit: function () {
                /*Enabled Edit Mode*/
                this.enabledEditMode = true;
                this.disabledInputs = false;
                this.enterEditMode = false;
            },
            loadLastTabDataFromStorage: function (index) {
                const localSavedData = JSON.parse(localStorage.getItem("lastValue"));
                this.activeTab = index;
                /*Populate all save data in taxonomy selection*/
                if (localSavedData != null) {
                    if (localSavedData.industry != '') {
                        this.form.industry = localSavedData.industry;
                        if (localSavedData.sector == '') {
                            this.getSectors(localSavedData.industry, 'Input', true);
                        } else {
                            this.getSectors(localSavedData.industry, 'load', false);
                        }
                    } else {
                        this.clearNodeValue('industry', 'Input');
                        /* this.categorizationLevel = ""
                         this.categorizationNodeId = ""*/
                    }
                    if (localSavedData.sector != '') {
                        this.form.sector = localSavedData.sector;
                        if (localSavedData.subSector == '') {
                            this.getSubSectors(localSavedData.sector, 'Input', true);
                        } else {
                            this.getSubSectors(localSavedData.sector, 'load', false);
                        }
                    }
                    if (localSavedData.subSector != '') {
                        this.form.subSector = localSavedData.subSector;
                        if (localSavedData.group == '') {
                            this.getGroups(localSavedData.subSector, 'Input', true);
                        } else {
                            this.getGroups(localSavedData.subSector, 'load', false);
                        }
                    }
                    if (localSavedData.group != '') {
                        this.form.group = localSavedData.group;
                        if (localSavedData.subGroup == '') {
                            this.getSubGroups(localSavedData.group, 'Input', true);
                        } else {
                            this.getSubGroups(localSavedData.group, 'load', false);
                        }
                    }
                    if (localSavedData.subGroup != '') {
                        this.form.subGroup = localSavedData.subGroup;
                        if (localSavedData.echelon == '') {
                            this.getEchelons(localSavedData.subGroup, 'Input', true);
                        } else {
                            this.getEchelons(localSavedData.subGroup, 'load', false);
                        }
                    }
                    if (localSavedData.echelon != '') {
                        this.form.echelon = localSavedData.echelon;
                        if (localSavedData.subEchelon == '') {
                            this.getSubEchelons(localSavedData.echelon, 'Input', true);
                        } else {
                            this.getSubEchelons(localSavedData.echelon, 'load', false);
                        }
                    }
                    if (localSavedData.subEchelon != '') {
                        this.form.subEchelon = localSavedData.subEchelon;
                        if (localSavedData.tier == '') {
                            this.getTiers(localSavedData.subEchelon, 'Input', true);
                        } else {
                            this.getTiers(localSavedData.subEchelon, 'load', false);
                        }
                    }
                    if (localSavedData.tier != '') {
                        this.form.tier = localSavedData.tier;
                        if (localSavedData.subTier == '') {
                            this.getSubTiers(localSavedData.tier, 'Input', true);
                        } else {
                            this.getSubTiers(localSavedData.tier, 'load', false);
                        }
                    }
                    if (localSavedData.subTier != '') {
                        this.form.subTier = localSavedData.subTier;
                        if (localSavedData.layer == '') {
                            this.getLayers(localSavedData.subTier, 'Input', true);
                        } else {
                            this.getLayers(localSavedData.subTier, 'load', false);
                        }
                    }
                    if (localSavedData.layer != '') {
                        this.form.layer = localSavedData.layer;
                        if (localSavedData.subLayer == '') {
                            this.getSubLayers(localSavedData.layer, 'Input', true);
                        } else {
                            this.getSubLayers(localSavedData.layer, 'load', false);
                        }
                    }
                    if (localSavedData.subLayer != '') {
                        this.form.subLayer = localSavedData.subLayer
                        if (localSavedData.deck == '') {
                            this.getDecks(localSavedData.subLayer, 'Input', true);
                        } else {
                            this.getDecks(localSavedData.subLayer, 'load', false);
                        }
                    }
                    if (localSavedData.deck != '') {
                        this.form.deck = localSavedData.deck
                        if (localSavedData.last_level == 'deck') {
                            this.getSubDecks(localSavedData.deck, 'Input', true);
                        } else {
                            this.getSubDecks(localSavedData.deck, 'load', false);
                        }
                    }
                    if (localSavedData.subDeck != '') {
                        this.form.subDeck = localSavedData.subDeck
                        if (localSavedData.floor == '') {
                            this.getFloors(localSavedData.subDeck, 'Input', true);
                        } else {
                            this.getFloors(localSavedData.subDeck, 'load', false);
                        }
                    }
                    if (localSavedData.floor != '') {
                        this.form.floor = localSavedData.floor
                        if (localSavedData.subFloor == '') {
                            this.getSubFloors(localSavedData.floor, 'Input', true);
                        } else {
                            this.getSubFloors(localSavedData.floor, 'load', false);
                        }
                    }
                    if (localSavedData.subFloor != '') {
                        this.form.subFloor = localSavedData.subFloor
                        if (localSavedData.basement == '') {
                            this.getBasements(localSavedData.subFloor, 'Input', true);
                        } else {
                            this.getBasements(localSavedData.subFloor, 'load', false);
                        }
                    }
                    if (localSavedData.basement != '') {
                        this.form.basement = localSavedData.basement
                        if (localSavedData.subBasement == '') {
                            this.getSubBasements(localSavedData.basement, 'Input', true);
                        } else {
                            this.getSubBasements(localSavedData.basement, 'load', false);
                        }
                    }
                    if (localSavedData.subBasement != '') {
                        this.form.subBasement = localSavedData.subBasement
                        if (localSavedData.mine == '') {
                            this.getMines(localSavedData.subBasement, 'Input', true);
                        } else {
                            this.getMines(localSavedData.subBasement, 'load', false);
                        }
                    }
                    if (localSavedData.mine != '') {
                        this.form.mine = localSavedData.mine
                        if (localSavedData.sub_mine == '') {
                            this.getSubMines(localSavedData.mine, 'Input', true);
                        } else {
                            this.getSubMines(localSavedData.mine, 'load', false);
                        }
                    }
                    if (localSavedData.subMine != '') {
                        this.form.subMine = localSavedData.subMine;
                    }
                }
                /*Disabled Edit Mode*/
                this.enabledEditMode = false;
                /*Enabled Select Fields*/
                this.disabledInputs = false;
                this.enterEditMode = false;
                /*Remove local storage Data*/
                localStorage.removeItem("lastValue");
            },
            navigateTabScrollOnLeft: function () {
                let content = document.querySelector(".nav-tabs");
                content.scrollLeft -= 150;
            },
            navigateTabScrollOnRight: function () {
                let content = document.querySelector(".nav-tabs");
                content.scrollLeft += 150;
            },
            getIndustries: async function () {
                await axios.get('/api/industry-list')
                    .then(response => {
                        this.industries = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getSectors: async function (value, changeEvent, clearNodeValue = true) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'Industry'
                    this.categorizationNodeId = value.id;
                    this.categorizationNodeName = value.description
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/Sector/Industry')
                        .then(response => {
                            this.sectors = response.data.data;
                            if (clearNodeValue) {
                                this.clearNodeValue('sectors', changeEvent);
                            }
                            this.isLoading = false;
                            this.sectors.length === 0 ? this.showSectorField = false : this.showSectorField = true;
                            this.setLabelWidth();
                        })
                        .catch(error => console.log(error))
                }
            },
            getSubSectors: async function (value, changeEvent, clearNodeValue = true) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'Sector'
                    this.categorizationNodeId = value.id
                    this.categorizationNodeName = value.description
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/SubSector/Sector')
                        .then(response => {
                            this.subSectors = response.data.data
                            if (clearNodeValue) {
                                this.clearNodeValue('subSectors', changeEvent);
                            }
                            this.subSectors.length === 0 ? this.setConditionalValidationVariables('subSector', true) : this.setConditionalValidationVariables('subSector', false);
                            this.isLoading = false
                            this.subSectors.length === 0 ? this.showSubSectorField = false : this.showSubSectorField = true;
                            this.setLabelWidth();
                        })
                        .catch(error => console.log(error))
                }
            },
            getGroups: async function (value, changeEvent, clearNodeValue = true) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'SubSector'
                    this.categorizationNodeId = value.id
                    this.categorizationNodeName = value.description
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/Group/SubSector')
                        .then(response => {
                            this.groups = response.data.data
                            if (clearNodeValue) {
                                this.clearNodeValue('groups', changeEvent);
                            }
                            this.groups.length === 0 ? this.setConditionalValidationVariables('group', true) : this.setConditionalValidationVariables('group', false);
                            this.isLoading = false
                            this.groups.length === 0 ? this.showGroupField = false : this.showGroupField = true;
                            this.setLabelWidth();
                        })
                        .catch(error => console.log(error))
                }
            },
            getSubGroups: async function (value, changeEvent, clearNodeValue = true) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'Group'
                    this.categorizationNodeId = value.id
                    this.categorizationNodeName = value.description
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/SubGroup/Group')
                        .then(response => {
                            this.subGroups = response.data.data
                            if (clearNodeValue) {
                                this.clearNodeValue('subGroups', changeEvent);
                            }
                            this.subGroups.length === 0 ? this.setConditionalValidationVariables('subGroup', true) : this.setConditionalValidationVariables('subGroup', false);
                            this.isLoading = false
                            this.subGroups.length === 0 ? this.showSubGroupField = false : this.showSubGroupField = true;
                            this.setLabelWidth();
                        })
                        .catch(error => console.log(error))
                }
            },
            getEchelons: async function (value, changeEvent, clearNodeValue = true) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'SubGroup'
                    this.categorizationNodeId = value.id
                    this.categorizationNodeName = value.description
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/Echelon/SubGroup')
                        .then(response => {
                            this.echelons = response.data.data
                            if (clearNodeValue) {
                                this.clearNodeValue('echelons', changeEvent);
                            }
                            this.echelons.length === 0 ? this.setConditionalValidationVariables('echelon', true) : this.setConditionalValidationVariables('echelon', false);
                            this.isLoading = false
                            this.echelons.length === 0 ? this.showEchelonField = false : this.showEchelonField = true;
                            this.setLabelWidth();
                        })
                        .catch(error => console.log(error))
                }
            },
            getSubEchelons: async function (value, changeEvent, clearNodeValue = true) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'Echelon'
                    this.categorizationNodeId = value.id
                    this.categorizationNodeName = value.description
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/SubEchelon/Echelon')
                        .then(response => {
                            this.subEchelons = response.data.data
                            if (clearNodeValue) {
                                this.clearNodeValue('subEchelons', changeEvent);
                            }
                            this.subEchelons.length === 0 ? this.setConditionalValidationVariables('subEchelon', true) : this.setConditionalValidationVariables('subEchelon', false);
                            this.isLoading = false
                            this.subEchelons.length === 0 ? this.showSubEchelonField = false : this.showSubEchelonField = true;
                            this.setLabelWidth();
                        })
                        .catch(error => console.log(error))
                }
            },
            getTiers: async function (value, changeEvent, clearNodeValue = true) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'SubEchelon'
                    this.categorizationNodeId = value.id
                    this.categorizationNodeName = value.description
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/Tier/SubEchelon')
                        .then(response => {
                            this.tiers = response.data.data
                            if (clearNodeValue) {
                                this.clearNodeValue('tiers', changeEvent);
                            }
                            this.tiers.length === 0 ? this.setConditionalValidationVariables('tier', true) : this.setConditionalValidationVariables('tier', false);
                            this.isLoading = false
                            this.tiers.length === 0 ? this.showTierField = false : this.showTierField = true;
                            this.setLabelWidth();
                        })
                        .catch(error => console.log(error))
                }
            },
            getSubTiers: async function (value, changeEvent, clearNodeValue = true) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'Tier'
                    this.categorizationNodeId = value.id
                    this.categorizationNodeName = value.description
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/SubTier/Tier')
                        .then(response => {
                            this.subTiers = response.data.data
                            if (clearNodeValue) {
                                this.clearNodeValue('subTiers', changeEvent);
                            }
                            this.subTiers.length === 0 ? this.setConditionalValidationVariables('subTier', true) : this.setConditionalValidationVariables('subTier', false);
                            this.isLoading = false
                            this.subTiers.length === 0 ? this.showSubTierField = false : this.showSubTierField = true;
                            this.setLabelWidth();
                        })
                        .catch(error => console.log(error))
                }
            },
            getLayers: async function (value, changeEvent, clearNodeValue = true) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'SubTier'
                    this.categorizationNodeId = value.id
                    this.categorizationNodeName = value.description
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/Layer/SubTier')
                        .then(response => {
                            this.layers = response.data.data
                            if (clearNodeValue) {
                                this.clearNodeValue('layers', changeEvent);
                            }
                            this.layers.length === 0 ? this.setConditionalValidationVariables('layer', true) : this.setConditionalValidationVariables('layer', false);
                            this.isLoading = false
                            this.layers.length === 0 ? this.showLayerField = false : this.showLayerField = true;
                            this.setLabelWidth();
                        })
                        .catch(error => console.log(error))
                }
            },
            getSubLayers: async function (value, changeEvent, clearNodeValue = true) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'Layer'
                    this.categorizationNodeId = value.id
                    this.categorizationNodeName = value.description
                    this.isLoading = true
                    axios.get('/api/get-node-list/' + value.id + '/SubLayer/Layer')
                        .then(response => {
                            this.subLayers = response.data.data
                            if (clearNodeValue) {
                                this.clearNodeValue('subLayers', changeEvent);
                            }
                            this.subLayers.length === 0 ? this.setConditionalValidationVariables('subLayer', true) : this.setConditionalValidationVariables('subLayer', false);
                            this.isLoading = false
                            this.subLayers.length === 0 ? this.showSubLayerField = false : this.showSubLayerField = true;
                            this.setLabelWidth();
                        })
                        .catch(error => console.log(error))
                }
            },
            getDecks: async function (value, changeEvent, clearNodeValue = true) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'SubLayer'
                    this.categorizationNodeId = value.id
                    this.categorizationNodeName = value.description
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/Deck/SubLayer')
                        .then(response => {
                            this.decks = response.data.data
                            if (clearNodeValue) {
                                this.clearNodeValue('decks', changeEvent);
                            }
                            this.decks.length === 0 ? this.setConditionalValidationVariables('deck', true) : this.setConditionalValidationVariables('deck', false);
                            this.isLoading = false
                            this.decks.length === 0 ? this.showDeckField = false : this.showDeckField = true;
                            this.setLabelWidth();
                        })
                        .catch(error => console.log(error))
                }
            },
            getSubDecks: async function (value, changeEvent, clearNodeValue = true) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'Deck'
                    this.categorizationNodeId = value.id
                    this.categorizationNodeName = value.description
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/SubDeck/Deck')
                        .then(response => {
                            this.subDecks = response.data.data
                            if (clearNodeValue) {
                                this.clearNodeValue('subDecks', changeEvent);
                            }
                            this.subDecks.length === 0 ? this.setConditionalValidationVariables('subDeck', true) : this.setConditionalValidationVariables('subDeck', false);
                            this.isLoading = false
                            this.subDecks.length === 0 ? this.showSubDeckField = false : this.showSubDeckField = true;
                            this.setLabelWidth();
                        })
                        .catch(error => console.log(error))
                }
            },
            getFloors: async function (value, changeEvent, clearNodeValue = true) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'SubDeck'
                    this.categorizationNodeId = value.id
                    this.categorizationNodeName = value.description
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/Floor/SubDeck')
                        .then(response => {
                            this.floors = response.data.data
                            if (clearNodeValue) {
                                this.clearNodeValue('floors', changeEvent);
                            }
                            this.floors.length === 0 ? this.setConditionalValidationVariables('floor', true) : this.setConditionalValidationVariables('floor', false);
                            this.isLoading = false
                            this.floors.length === 0 ? this.showFloorField = false : this.showFloorField = true;
                            this.setLabelWidth();
                        })
                        .catch(error => console.log(error))
                }
            },
            getSubFloors: async function (value, changeEvent, clearNodeValue = true) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'Floor'
                    this.categorizationNodeId = value.id
                    this.categorizationNodeName = value.description
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/SubFloor/Floor')
                        .then(response => {
                            this.subFloors = response.data.data
                            if (clearNodeValue) {
                                this.clearNodeValue('subFloors', changeEvent);
                            }
                            this.subFloors.length === 0 ? this.setConditionalValidationVariables('subFloor', true) : this.setConditionalValidationVariables('subFloor', false);
                            this.isLoading = false
                            this.subFloors.length === 0 ? this.showSubFloorField = false : this.showSubFloorField = true;
                            this.setLabelWidth();
                        })
                        .catch(error => console.log(error))
                }
            },
            getBasements: async function (value, changeEvent, clearNodeValue = true) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'SubFloor'
                    this.categorizationNodeId = value.id
                    this.categorizationNodeName = value.description
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/Basement/SubFloor')
                        .then(response => {
                            this.basements = response.data.data
                            if (clearNodeValue) {
                                this.clearNodeValue('basements', changeEvent);
                            }
                            this.basements.length === 0 ? this.setConditionalValidationVariables('basement', true) : this.setConditionalValidationVariables('basement', false);
                            this.isLoading = false
                            this.basements.length === 0 ? this.showBasementField = false : this.showBasementField = true;
                            this.setLabelWidth();
                        })
                        .catch(error => console.log(error))
                }
            },
            getSubBasements: async function (value, changeEvent, clearNodeValue = true) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'Basement'
                    this.categorizationNodeId = value.id
                    this.categorizationNodeName = value.description
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/SubBasement/Basement')
                        .then(response => {
                            this.subBasements = response.data.data
                            if (clearNodeValue) {
                                this.clearNodeValue('subBasements', changeEvent);
                            }
                            this.subBasements.length === 0 ? this.setConditionalValidationVariables('subBasement', true) : this.setConditionalValidationVariables('subBasement', false);
                            this.isLoading = false
                            this.subBasements.length === 0 ? this.showSubBasementField = false : this.showSubBasementField = true;
                            this.setLabelWidth();
                        })
                        .catch(error => console.log(error))
                }
            },
            getMines: async function (value, changeEvent, clearNodeValue = true) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'SubBasement'
                    this.categorizationNodeId = value.id
                    this.categorizationNodeName = value.description
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/Mine/SubBasement')
                        .then(response => {
                            this.mines = response.data.data
                            if (clearNodeValue) {
                                this.clearNodeValue('mines', changeEvent);
                            }
                            this.mines.length === 0 ? this.setConditionalValidationVariables('mine', true) : this.setConditionalValidationVariables('mine', false);
                            this.isLoading = false
                            this.mines.length === 0 ? this.showMineField = false : this.showMineField = true;
                            this.setLabelWidth();
                        })
                        .catch(error => console.log(error))
                }
            },
            getSubMines: async function (value, changeEvent, clearNodeValue = true) {
                if (value != null || value != undefined) {
                    this.categorizationLevel = 'Mine'
                    this.categorizationNodeId = value.id
                    this.categorizationNodeName = value.description
                    this.isLoading = true
                    await axios.get('/api/get-node-list/' + value.id + '/SubMine/Mine')
                        .then(response => {
                            this.subMines = response.data.data
                            if (clearNodeValue) {
                                this.clearNodeValue('subMines', changeEvent);
                            }
                            this.subMines.length === 0 ? this.setConditionalValidationVariables('subMine', true) : this.setConditionalValidationVariables('subMine', false);
                            this.isLoading = false
                            this.subMines.length === 0 ? this.showSubMineField = false : this.showSubMineField = true;
                            this.setLabelWidth();
                        })
                        .catch(error => console.log(error))
                }
            },

            subMinesChange: function (value, changeEvent, clearNodeValue = true) {
                this.categorizationLevel = 'SubMine'
                this.categorizationNodeId = value.id
                this.categorizationNodeName = value.description
                if (clearNodeValue) {
                    this.clearNodeValue('other');
                }
                //this.showSubMineAddSuggestionField = true;
                setTimeout(() => {
                    this.setLabelWidth()
                }, 1000)
            },
            clearNodeValue: function (expression, changeEvent) {
                if (changeEvent == 'Input') {
                    switch (expression) {
                        case 'industry':
                            this.form.industry = '';
                            this.sectors = [];
                            this.showSectorField = false;
                        case 'sectors':
                            this.form.sector = '';
                            this.subSectors = [];
                            this.showSubSectorField = false;
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
                    case "echelon":
                        this.noEchelonData = flag;
                        if (flag == true) {
                            this.$v.form.echelon.$reset();
                        }
                    case "subEchelon":
                        this.noSubEchelonData = flag;
                        if (flag == true) {
                            this.$v.form.subEchelon.$reset();
                        }
                    case "tier":
                        this.noTierData = flag;
                        if (flag == true) {
                            this.$v.form.tier.$reset();
                        }
                    case "subTier":
                        this.noSubTierData = flag;
                        if (flag == true) {
                            this.$v.form.subTier.$reset();
                        }
                    case "layer":
                        this.noLayerData = flag;
                        if (flag == true) {
                            this.$v.form.layer.$reset();
                        }
                    case "subLayer":
                        this.noSubLayerData = flag;
                        if (flag == true) {
                            this.$v.form.subLayer.$reset();
                        }
                    case "deck":
                        this.noDeckData = flag;
                        if (flag == true) {
                            this.$v.form.deck.$reset();
                        }
                    case "subDeck":
                        this.noSubDeckData = flag;
                        if (flag == true) {
                            this.$v.form.subDeck.$reset();
                        }
                    case "floor":
                        this.noFloorData = flag;
                        if (flag == true) {
                            this.$v.form.floor.$reset();
                        }
                    case "subFloor":
                        this.noSubFloorData = flag;
                        if (flag == true) {
                            this.$v.form.subFloor.$reset();
                        }
                    case "basement":
                        this.noBasementData = flag;
                        if (flag == true) {
                            this.$v.form.basement.$reset();
                        }
                    case "subBasement":
                        this.noSubBasementData = flag;
                        if (flag == true) {
                            this.$v.form.subBasement.$reset();
                        }
                    case "mine":
                        this.noMineData = flag;
                        if (flag == true) {
                            this.$v.form.mine.$reset();
                        }
                    case "subMine":
                        this.noSubMineData = flag;
                        if (flag == true) {
                            this.$v.form.subMine.$reset();
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
                if (suggestionType == 'add' || suggestionType == 'replace') {
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
                } else {
                    this.$v.suggestion_reason.$touch();
                    if (this.$v.suggestion_reason.$invalid) {
                        if (this.$v.suggestion_reason.$invalid) {
                            this.$refs.suggestion_reason.focus();
                        }
                        return false;
                    }
                }
                //this.isDisabled = true;
                this.suggestionFormData.suggestion_explanation = this.suggestion_explanation;
                this.suggestionFormData.suggestion_reason = this.suggestion_reason;
                this.suggestionFormData.node_type = this.node_type;
                this.suggestionFormData.node_id = this.node_id;
                this.suggestionFormData.parent_id = this.parent_id;
                this.suggestionFormData.industry_id = this.form.industry.id;
                this.suggestionFormData.suggestion_type = suggestionType;
                this.suggestionFormData.hierarchy_type = this.hierarchyType

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
                            localStorage.clear();
                            this.$router.push({name: "Login"});
                        } else {
                            console.log(error)
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
            saveHierarchyInfo: function (callFrom) {
                if('editAndClose' == callFrom && this.form.industry == ""){
                    this.$parent.editCancel();
                    return false;
                }
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
                if (this.noEchelonData == false) {
                    this.$v.form.echelon.$touch();
                }
                if (this.noSubEchelonData == false) {
                    this.$v.form.subEchelon.$touch();
                }
                if (this.noTierData == false) {
                    this.$v.form.tier.$touch();
                }
                if (this.noSubTierData == false) {
                    this.$v.form.subTier.$touch();
                }
                if (this.noLayerData == false) {
                    this.$v.form.layer.$touch();
                }
                if (this.noSubLayerData == false) {
                    this.$v.form.subLayer.$touch();
                }
                if (this.noDeckData == false) {
                    this.$v.form.deck.$touch();
                }
                if (this.noSubDeckData == false) {
                    this.$v.form.subDeck.$touch();
                }
                if (this.noFloorData == false) {
                    this.$v.form.floor.$touch();
                }
                if (this.noSubFloorData == false) {
                    this.$v.form.subFloor.$touch();
                }
                if (this.noBasementData == false) {
                    this.$v.form.basement.$touch();
                }
                if (this.noSubBasementData == false) {
                    this.$v.form.subBasement.$touch();
                }
                if (this.noMineData == false) {
                    this.$v.form.mine.$touch();
                }
                if (this.noSubMineData == false) {
                    this.$v.form.subMine.$touch();
                }
                if (this.$v.form.industry.$invalid || this.$v.form.sector.$invalid
                    || (this.$v.form.subSector.$invalid && this.noSubSectorData == false)
                    || (this.$v.form.group.$invalid && this.noGroupData == false)
                    || (this.$v.form.subGroup.$invalid && this.noSubGroupData == false)
                    || (this.$v.form.echelon.$invalid && this.noEchelonData == false)
                    || (this.$v.form.subEchelon.$invalid && this.noSubEchelonData == false)
                    || (this.$v.form.tier.$invalid && this.noTierData == false)
                    || (this.$v.form.subTier.$invalid && this.noSubTierData == false)
                    || (this.$v.form.layer.$invalid && this.noLayerData == false)
                    || (this.$v.form.subLayer.$invalid && this.noSubLayerData == false)
                    || (this.$v.form.deck.$invalid && this.noDeckData == false)
                    || (this.$v.form.subDeck.$invalid && this.noSubDeckData == false)
                    || (this.$v.form.floor.$invalid && this.noFloorData == false)
                    || (this.$v.form.subFloor.$invalid && this.noSubFloorData == false)
                    || (this.$v.form.basement.$invalid && this.noBasementData == false)
                    || (this.$v.form.subBasement.$invalid && this.noSubBasementData == false)
                    || (this.$v.form.mine.$invalid && this.noMineData == false)
                    || (this.$v.form.subMine.$invalid && this.noSubMineData == false)
                ) {
                    /*if (this.$v.form.industry.$invalid) {
                        this.$refs.industry.$el.querySelector('input').focus();
                    }
                    else if (this.$v.form.sector.$invalid) {
                        this.$refs.sector.$el.querySelector('input').focus();
                    } else if (this.$v.form.subSector.$invalid) {
                        this.$refs.subSector.$el.querySelector('input').focus();
                    } else if (this.$v.form.group.$invalid) {
                        this.$refs.group.$el.querySelector('input').focus();
                    } else if (this.$v.form.subGroup.$invalid) {
                        this.$refs.subGroup.$el.querySelector('input').focus();
                    } else if (this.$v.form.echelon.$invalid) {
                        this.$refs.echelon.$el.querySelector('input').focus();
                    } else if (this.$v.form.subEchelon.$invalid) {
                        this.$refs.subEchelon.$el.querySelector('input').focus();
                    } else if (this.$v.form.tier.$invalid) {
                        this.$refs.tier.$el.querySelector('input').focus();
                    } else if (this.$v.form.subTier.$invalid) {
                        this.$refs.subTier.$el.querySelector('input').focus();
                    } else if (this.$v.form.layer.$invalid) {
                        this.$refs.layer.$el.querySelector('input').focus();
                    } else if (this.$v.form.subLayer.$invalid) {
                        this.$refs.subLayer.$el.querySelector('input').focus();
                    } else if (this.$v.form.deck.$invalid) {
                        this.$refs.deck.$el.querySelector('input').focus();
                    } else if (this.$v.form.subDeck.$invalid) {
                        this.$refs.subDeck.$el.querySelector('input').focus();
                    } else if (this.$v.form.floor.$invalid) {
                        this.$refs.floor.$el.querySelector('input').focus();
                    } else if (this.$v.form.subFloor.$invalid) {
                        this.$refs.subFloor.$el.querySelector('input').focus();
                    } else if (this.$v.form.basement.$invalid) {
                        this.$refs.basement.$el.querySelector('input').focus();
                    } else if (this.$v.form.subBasement.$invalid) {
                        this.$refs.subBasement.$el.querySelector('input').focus();
                    } else if (this.$v.form.mine.$invalid) {
                        this.$refs.mine.$el.querySelector('input').focus();
                    } else if (this.$v.form.subMine.$invalid) {
                        this.$refs.subMine.$el.querySelector('input').focus();
                    }*/
                    return false;
                }

                this.isDisabled = true;
                this.isLoading = true;

                let nodeformData = new FormData();
                nodeformData.append('node_type', this.categorizationLevel);
                nodeformData.append('node_id', this.categorizationNodeId);
                nodeformData.append('node_name', this.categorizationNodeName);
                nodeformData.append('industry_id', this.form.industry.id);
                nodeformData.append('media_id', this.mediaUuid);

                User.addAudioVideoMultipleNodes(nodeformData)
                    .then((response) => {
                        this.isDisabled = false;
                        this.isLoading = false;
                        if (response.data.success) {
                            if (null == this.lookupId) {
                                this.lookupId = response.data.data.lookupId;
                            } else {
                                this.lookupId = this.lookupId + ',' + response.data.data.lookupId;
                            }
                            if (this.savedCategories !== "") {
                                this.lookupId = this.lookupId + ',' + this.savedCategories;
                            }
                            this.clearNodeValue('industry', 'Input')
                            this.categorizationLevel = ""
                            this.categorizationNodeId = ""
                            if (callFrom == 'edit') {
                                this.getMediaHierarchyInfoForNodeCollapses('', this.$route.params.id)
                            } else if (callFrom == 'editAndClose') {
                                this.$parent.editCancel();
                            } else {
                                this.getMediaHierarchyInfoForNodeCollapses(this.lookupId, '')
                            }
                            //toastr.success(response.data.success.message)
                            this.$parent.showAddAnotherClassificationMessage(response.data.success.message, true, 'success');
                            this.$v.$reset()
                            if (callFrom == 'finish') {
                                this.$parent.saveMediaInfo();
                            }
                        }
                    })
                    .catch(error => {
                        if (error.response.status === 422) {
                            this.$parent.showAddAnotherClassificationMessage(error.response.data.error.message, true, 'danger');
                        } else if (error.response.status == 401) {
                            localStorage.clear();
                            this.$router.push({name: "Login"});
                        } else {
                            this.$parent.showAddAnotherClassificationMessage(error, true, 'danger');
                        }
                        this.isLoading = false;
                    });
            },
            updateExistingClassification: function (callFrom) {
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
                if (this.noEchelonData == false) {
                    this.$v.form.echelon.$touch();
                }
                if (this.noSubEchelonData == false) {
                    this.$v.form.subEchelon.$touch();
                }
                if (this.noTierData == false) {
                    this.$v.form.tier.$touch();
                }
                if (this.noSubTierData == false) {
                    this.$v.form.subTier.$touch();
                }
                if (this.noLayerData == false) {
                    this.$v.form.layer.$touch();
                }
                if (this.noSubLayerData == false) {
                    this.$v.form.subLayer.$touch();
                }
                if (this.noDeckData == false) {
                    this.$v.form.deck.$touch();
                }
                if (this.noSubDeckData == false) {
                    this.$v.form.subDeck.$touch();
                }
                if (this.noFloorData == false) {
                    this.$v.form.floor.$touch();
                }
                if (this.noSubFloorData == false) {
                    this.$v.form.subFloor.$touch();
                }
                if (this.noBasementData == false) {
                    this.$v.form.basement.$touch();
                }
                if (this.noSubBasementData == false) {
                    this.$v.form.subBasement.$touch();
                }
                if (this.noMineData == false) {
                    this.$v.form.mine.$touch();
                }
                if (this.noSubMineData == false) {
                    this.$v.form.subMine.$touch();
                }
                if (this.$v.form.industry.$invalid || this.$v.form.sector.$invalid
                    || (this.$v.form.subSector.$invalid && this.noSubSectorData == false)
                    || (this.$v.form.group.$invalid && this.noGroupData == false)
                    || (this.$v.form.subGroup.$invalid && this.noSubGroupData == false)
                    || (this.$v.form.echelon.$invalid && this.noEchelonData == false)
                    || (this.$v.form.subEchelon.$invalid && this.noSubEchelonData == false)
                    || (this.$v.form.tier.$invalid && this.noTierData == false)
                    || (this.$v.form.subTier.$invalid && this.noSubTierData == false)
                    || (this.$v.form.layer.$invalid && this.noLayerData == false)
                    || (this.$v.form.subLayer.$invalid && this.noSubLayerData == false)
                    || (this.$v.form.deck.$invalid && this.noDeckData == false)
                    || (this.$v.form.subDeck.$invalid && this.noSubDeckData == false)
                    || (this.$v.form.floor.$invalid && this.noFloorData == false)
                    || (this.$v.form.subFloor.$invalid && this.noSubFloorData == false)
                    || (this.$v.form.basement.$invalid && this.noBasementData == false)
                    || (this.$v.form.subBasement.$invalid && this.noSubBasementData == false)
                    || (this.$v.form.mine.$invalid && this.noMineData == false)
                    || (this.$v.form.subMine.$invalid && this.noSubMineData == false)
                ) {
                    /*if (this.$v.form.industry.$invalid) {
                        this.$refs.industry.$el.querySelector('input').focus();
                    } else if (this.$v.form.sector.$invalid) {
                        this.$refs.sector.$el.querySelector('input').focus();
                    } else if (this.$v.form.subSector.$invalid) {
                        this.$refs.subSector.$el.querySelector('input').focus();
                    } else if (this.$v.form.group.$invalid) {
                        this.$refs.group.$el.querySelector('input').focus();
                    } else if (this.$v.form.subGroup.$invalid) {
                        this.$refs.subGroup.$el.querySelector('input').focus();
                    } else if (this.$v.form.echelon.$invalid) {
                        this.$refs.echelon.$el.querySelector('input').focus();
                    } else if (this.$v.form.subEchelon.$invalid) {
                        this.$refs.subEchelon.$el.querySelector('input').focus();
                    } else if (this.$v.form.tier.$invalid) {
                        this.$refs.tier.$el.querySelector('input').focus();
                    } else if (this.$v.form.subTier.$invalid) {
                        this.$refs.subTier.$el.querySelector('input').focus();
                    } else if (this.$v.form.layer.$invalid) {
                        this.$refs.layer.$el.querySelector('input').focus();
                    } else if (this.$v.form.subLayer.$invalid) {
                        this.$refs.subLayer.$el.querySelector('input').focus();
                    } else if (this.$v.form.deck.$invalid) {
                        this.$refs.deck.$el.querySelector('input').focus();
                    } else if (this.$v.form.subDeck.$invalid) {
                        this.$refs.subDeck.$el.querySelector('input').focus();
                    } else if (this.$v.form.floor.$invalid) {
                        this.$refs.floor.$el.querySelector('input').focus();
                    } else if (this.$v.form.subFloor.$invalid) {
                        this.$refs.subFloor.$el.querySelector('input').focus();
                    } else if (this.$v.form.basement.$invalid) {
                        this.$refs.basement.$el.querySelector('input').focus();
                    } else if (this.$v.form.subBasement.$invalid) {
                        this.$refs.subBasement.$el.querySelector('input').focus();
                    } else if (this.$v.form.mine.$invalid) {
                        this.$refs.mine.$el.querySelector('input').focus();
                    } else if (this.$v.form.subMine.$invalid) {
                        this.$refs.subMine.$el.querySelector('input').focus();
                    }*/
                    return false;
                }

                this.isDisabled = true;
                this.isLoading = true;

                let nodeformData = new FormData();
                nodeformData.append('categorization_id', this.editableCategorizationId);
                nodeformData.append('node_type', this.categorizationLevel);
                nodeformData.append('node_id', this.categorizationNodeId);
                nodeformData.append('node_name', this.categorizationNodeName);
                nodeformData.append('industry_id', this.form.industry.id);
                nodeformData.append('action_type', this.taxonomyActionType);
                nodeformData.append('media_id', this.mediaUuid);

                User.updateAudioVideoNodes(nodeformData)
                    .then((response) => {
                        this.isDisabled = false;
                        this.isLoading = false;
                        if (response.data.success) {
                            if (null == this.lookupId) {
                                this.lookupId = response.data.data.lookupId;
                            } else {
                                this.lookupId = this.lookupId + ',' + response.data.data.lookupId;
                            }
                            if (this.savedCategories !== "") {
                                this.lookupId = this.lookupId + ',' + this.savedCategories;
                            }
                            /*this.clearNodeValue('industry', 'Input')
                            this.categorizationLevel = ""
                            this.categorizationNodeId = ""*/
                            if (this.taxonomyActionType == 'edit') {
                                this.getMediaHierarchyInfoForNodeCollapses('', this.$route.params.id)
                            } else {
                                this.getMediaHierarchyInfoForNodeCollapses(this.lookupId, '')
                            }
                            if (callFrom == 'saveAndClose') {
                                this.$parent.editCancel();
                            }
                            //toastr.success(response.data.success.message)
                            this.$parent.showAddAnotherClassificationMessage(response.data.success.message, true, 'success');
                            this.$v.$reset();
                            /*Reset all editable flags*/
                            this.enabledEditMode = false;
                            this.loadLastTabDataFromStorage(this.multipleNodes.length);
                        }
                    })
                    .catch(error => {
                        if (error.response.status === 422) {
                            this.$parent.showAddAnotherClassificationMessage(error.response.data.error.message, true, 'danger');
                        } else if (error.response.status == 401) {
                            localStorage.clear();
                            this.$router.push({name: "Login"});
                        } else {
                            this.$parent.showAddAnotherClassificationMessage(error, true, 'danger');
                        }
                        this.isLoading = false;
                    });
            },
            gotoParentSaveAndClose: function () {
                this.$parent.saveAndClose();
            },
            setLabelWidth: function () {
                const nodes = document.getElementsByClassName('set-auto-height')
                let total_nodes = nodes.length;
                let increment_value = 36 / total_nodes;
                let max_width = 100;
                for (let i = 0; i < nodes.length; i++) {
                    max_width = max_width - increment_value;
                    nodes [i].style.width = max_width + '%';
                }
            },
            getMediaHierarchyInfo: function (cat_id, file_id) {

                axios.get('/api/get-media-categorization-lookup?categorization_id=' + cat_id + '&file_id=' + file_id)
                    .then((response) => {
                        this.isLoading = false;
                        this.showSectorField = this.sectorRequired = false;
                        this.showSubSectorField = this.subSectorRequired = false;
                        this.showGroupField = this.groupRequired = false;
                        this.showSubGroupField = this.subGroupRequired = false;
                        this.showEchelonField = this.echelonRequired = false;
                        this.showSubEchelonField = this.subEchelonRequired = false;
                        this.showTierField = this.tierRequired = false;
                        this.showSubTierField = this.subTierRequired = false;
                        this.showLayerField = this.layerRequired = false;
                        this.showSubLayerField = this.subLayerRequired = false;
                        this.showDeckField = this.deckRequired = false;
                        this.showSubDeckField = this.subDeckRequired = false;
                        this.showFloorField = this.floorRequired = false;
                        this.showSubFloorField = this.subFloorRequired = false;
                        this.showBasementField = this.basementRequired = false;
                        this.showSubBasementField = this.subBasementRequired = false;
                        this.showMineField = this.mineRequired = false;
                        this.showSubMineField = this.subMineRequired = false;

                        var mediaHierarchyInfo = response.data.data

                        if (!!mediaHierarchyInfo.industry) {
                            this.form.industry = mediaHierarchyInfo.industry
                            this.getSectors(mediaHierarchyInfo.industry, 'Input', false)

                        }

                        if (!!mediaHierarchyInfo.sector) {
                            this.form.sector = mediaHierarchyInfo.sector
                            this.getSubSectors(mediaHierarchyInfo.sector, 'Input', false)
                            this.showSectorField = true;
                            this.sectorRequired = true;
                        }

                        if (!!mediaHierarchyInfo.sub_sector) {
                            this.form.subSector = mediaHierarchyInfo.sub_sector
                            this.getGroups(this.form.subSector, 'Input', false)
                            this.showSubSectorField = true;
                            this.subSectorRequired = true;
                        }
                        if (!!mediaHierarchyInfo.group) {
                            this.form.group = mediaHierarchyInfo.group
                            this.getSubGroups(this.form.group, 'Input', false)
                            this.showGroupField = true;
                            this.groupRequired = true;

                        }
                        if (!!mediaHierarchyInfo.sub_group) {
                            this.form.subGroup = mediaHierarchyInfo.sub_group
                            this.getEchelons(this.form.subGroup, 'Input', false)
                            this.showSubGroupField = true;
                            this.subGroupRequired = true;
                        }
                        if (!!mediaHierarchyInfo.echelon) {
                            // this.echelons = [mediaHierarchyInfo.echelon]
                            this.form.echelon = mediaHierarchyInfo.echelon
                            this.getSubEchelons(this.form.echelon, 'Input', false)
                            this.showEchelonField = true;
                            this.echelonRequired = true;
                        }
                        if (!!mediaHierarchyInfo.sub_echelon) {
                            // this.subEchelons = [mediaHierarchyInfo.sub_echelon]
                            this.form.subEchelon = mediaHierarchyInfo.sub_echelon
                            this.getTiers(this.form.subEchelon, 'Input', false)
                            this.showSubEchelonField = true;
                            this.subEchelonRequired = true;
                        }
                        if (!!mediaHierarchyInfo.tier) {
                            // this.tiers = [mediaHierarchyInfo.tier]
                            this.form.tier = mediaHierarchyInfo.tier
                            this.getSubTiers(this.form.tier, 'Input', false)
                            this.showTierField = true;
                            this.tierRequired = true;
                        }
                        if (!!mediaHierarchyInfo.sub_tier) {
                            // this.subTiers = [mediaHierarchyInfo.sub_tier]
                            this.form.subTier = mediaHierarchyInfo.sub_tier
                            this.getLayers(this.form.subTier, 'Input', false)
                            this.showSubTierField = true;
                            this.subTierRequired = true;
                        }
                        if (!!mediaHierarchyInfo.layer) {
                            // this.layers = [mediaHierarchyInfo.layer]
                            this.form.layer = mediaHierarchyInfo.layer
                            this.getSubLayers(this.form.layer, 'Input', false)
                            this.showLayerField = true;
                            this.layerRequired = true;
                        }
                        if (!!mediaHierarchyInfo.sub_layer) {
                            // this.subLayers = [mediaHierarchyInfo.sub_layer]
                            this.form.subLayer = mediaHierarchyInfo.sub_layer
                            this.getDecks(this.form.subLayer, 'Input', false)
                            this.showSubLayerField = true;
                            this.subLayerRequired = true;
                        }
                        if (!!mediaHierarchyInfo.deck) {
                            // this.decks = [mediaHierarchyInfo.deck]
                            this.form.deck = mediaHierarchyInfo.deck
                            this.getSubDecks(this.form.deck, 'Input', false)
                            this.showDeckField = true;
                            this.deckRequired = true;
                        }
                        if (!!mediaHierarchyInfo.sub_deck) {
                            // this.decks = [mediaHierarchyInfo.sub_deck]
                            this.form.deck = mediaHierarchyInfo.sub_deck
                            this.getFloors(this.form.subDeck, 'Input', false)
                            this.showSubDeckField = true;
                            this.subDeckRequired = true;
                        }
                        if (!!mediaHierarchyInfo.floor) {
                            // this.floors = [mediaHierarchyInfo.floor]
                            this.form.floor = mediaHierarchyInfo.floor
                            this.getSubFloors(this.form.floor, 'Input', false)
                            this.showFloorField = true;
                            this.floorRequired = true;
                        }
                        if (!!mediaHierarchyInfo.sub_floor) {
                            // this.subFloors = [mediaHierarchyInfo.sub_floor]
                            this.form.subFloor = mediaHierarchyInfo.sub_floor
                            this.getBasements(this.form.subFloor, 'Input', false)
                            this.showSubFloorField = true;
                            this.subFloorRequired = true;
                        }
                        if (!!mediaHierarchyInfo.basement) {
                            // this.basements = [mediaHierarchyInfo.basement]
                            this.form.basement = mediaHierarchyInfo.basement
                            this.getSubBasements(this.form.basement, 'Input', false)
                            this.showBasementField = true;
                            this.basementRequired = true;
                        }
                        if (!!mediaHierarchyInfo.sub_basement) {
                            // this.subBasements = [mediaHierarchyInfo.sub_basement]
                            this.form.subBasement = mediaHierarchyInfo.sub_basement
                            this.getMines(this.form.subBasement, 'Input', false)
                            this.showSubBasementField = true;
                            this.subBasementRequired = true;
                        }
                        if (!!mediaHierarchyInfo.mine) {
                            //this.mines = [mediaHierarchyInfo.mine]
                            this.form.mine = mediaHierarchyInfo.mine
                            this.getSubMines(this.form.mine, 'Input', false)
                            this.showMineField = true;
                            this.mineRequired = true;
                        }
                        if (!!mediaHierarchyInfo.sub_mine) {
                            //this.subMines = [mediaHierarchyInfo.sub_mine]
                            this.form.subMine = mediaHierarchyInfo.sub_mine
                            this.showSubMineField = true;
                            this.subMineRequired = true;
                        }
                    })
                    .catch(error => {
                        if (error.response.status === 422) {
                            this.$router.push({name: "Content"});
                        } else {
                            console.log(error)
                        }
                    });
            },

            generateDropdown: function (level) {
                // console.log(level)
                switch (level) {
                    case 'sector':
                        this.getSubSectors(this.form.sector, 'Input', false)
                        this.categorizationLevel = 'Sector'
                        this.categorizationNodeId = this.form.sector.id
                        this.categorizationNodeName = this.form.sector.description
                        break;
                    case 'sub_sector':
                        this.getGroups(this.form.subSector, 'Input', false)
                        this.categorizationLevel = 'SubSector'
                        this.categorizationNodeId = this.form.subSector.id
                        this.categorizationNodeName = this.form.subSector.description
                        break;
                    case 'group':
                        this.getSubGroups(this.form.group, 'Input', false)
                        this.categorizationLevel = 'Group'
                        this.categorizationNodeId = this.form.group.id
                        this.categorizationNodeName = this.form.group.description
                        break;
                    case 'sub_group':
                        this.getEchelons(this.form.subGroup, 'Input', false)
                        this.categorizationLevel = 'SubGroup'
                        this.categorizationNodeId = this.form.subGroup.id
                        this.categorizationNodeName = this.form.subGroup.description
                        break;
                    case 'echelon':
                        this.getSubEchelons(this.form.echelon, 'Input', false)
                        this.categorizationLevel = 'Echelon'
                        this.categorizationNodeId = this.form.echelon.id
                        this.categorizationNodeName = this.form.echelon.description
                        break;
                    case 'sub_echelon':
                        this.getTiers(this.form.subEchelon, 'Input', false)
                        this.categorizationLevel = 'SubEchelon'
                        this.categorizationNodeId = this.form.subEchelon.id
                        this.categorizationNodeName = this.form.subEchelon.description
                        break;
                    case 'tier':
                        this.getSubTiers(this.form.tier, 'Input', false)
                        this.categorizationLevel = 'Tier'
                        this.categorizationNodeId = this.form.tier.id
                        this.categorizationNodeName = this.form.tier.description
                        break;
                    case 'sub_tier':
                        this.getLayers(this.form.subTier, 'Input', false)
                        this.categorizationLevel = 'SubTier'
                        this.categorizationNodeId = this.form.subTier.id
                        this.categorizationNodeName = this.form.subTier.description
                        break;
                    case 'layer':
                        this.getSubLayers(this.form.layer, 'Input', false)
                        this.categorizationLevel = 'Layer'
                        this.categorizationNodeId = this.form.layer.id
                        this.categorizationNodeName = this.form.layer.description
                        break;
                    case 'sub_layer':
                        this.getDecks(this.form.subLayer, 'Input', false)
                        this.categorizationLevel = 'SubLayer'
                        this.categorizationNodeId = this.form.subLayer.id
                        this.categorizationNodeName = this.form.subLayer.description
                        break;
                    case 'deck':
                        this.getSubDecks(this.form.deck, 'Input', false)
                        this.categorizationLevel = 'Deck'
                        this.categorizationNodeId = this.form.deck.id
                        this.categorizationNodeName = this.form.deck.description
                        break;
                    case 'sub_deck':
                        this.getFloors(this.form.subDeck, 'Input', false)
                        this.categorizationLevel = 'SubDeck'
                        this.categorizationNodeId = this.form.subDeck.id
                        this.categorizationNodeName = this.form.subDeck.description
                        break;
                    case 'floor':
                        this.getSubFloors(this.form.floor, 'Input', false)
                        this.categorizationLevel = 'Floor'
                        this.categorizationNodeId = this.form.floor.id
                        this.categorizationNodeName = this.form.floor.description
                        break;
                    case 'sub_floor':
                        this.getBasements(this.form.subFloor, 'Input', false)
                        this.categorizationLevel = 'SubFloor'
                        this.categorizationNodeId = this.form.subFloor.id
                        this.categorizationNodeName = this.form.subFloor.description
                        break;
                    case 'basement':
                        this.getSubBasements(this.form.basement, 'Input', false)
                        this.categorizationLevel = 'Basement'
                        this.categorizationNodeId = this.form.basement.id
                        this.categorizationNodeName = this.form.basement.description
                        break;
                    case 'sub_basement':
                        this.getMines(this.form.subBasement, 'Input', false)
                        this.categorizationLevel = 'SubBasement'
                        this.categorizationNodeId = this.form.subBasement.id
                        this.categorizationNodeName = this.form.subBasement.description
                        break;
                    case 'mine':
                        this.getSubMines(this.form.mine, 'Input', false)
                        this.categorizationLevel = 'Mine'
                        this.categorizationNodeId = this.form.mine.id
                        this.categorizationNodeName = this.form.mine.description
                        break;
                    case 'sub_mine':
                        this.categorizationLevel = 'SubMine',
                            this.categorizationNodeId = this.form.subMine.id
                        this.categorizationNodeName = this.form.subMine.description
                        break;
                }
            },
            setPreviousSavedData: function () {
                if (this.taxonomyIndustryData !== null) {
                    this.industries = this.taxonomyIndustryData

                    // let listOfObjects = Object.keys(this.taxonomyIndustryData).map((key) => {
                    //     return this.taxonomyIndustryData[key].lookup_id
                    // })
                    // if(listOfObjects){
                    //     this.getMediaHierarchyInfoForNodeCollapses(listOfObjects.join(', '))
                    // }
                }
            },

            getMediaHierarchyInfoForNodeCollapses: function (id, mediaId) {
                axios.get('/api/get-media-categorization-lookup-for-collapse?id=' + id + '&mediaId=' + mediaId + '&userInfo=' + localStorage.getItem("userInfo"))
                    .then((response) => {
                        this.isLoading = false;
                        this.multipleNodes = response.data.data;
                        /*Active the Last Saved Node Tab*/
                        this.activeTab = this.multipleNodes.length;
                        if (this.multipleNodes.length > 2) {
                            this.enableTabNavigation = true;
                            // let vi = this;
                            setTimeout(function () {
                                // vi.navigateTabScrollOnRight();
                                let content = document.querySelector(".nav-tabs");
                                content.scrollLeft += 300;
                            }, 500)
                        }
                    })
                    .catch(error => {
                        if (error.response.status === 422) {
                            this.$router.push({name: "Content"});
                        } else {
                            console.log(error)
                        }
                    });
            },
            updateViewKey() {
                this.$emit("updateViewKey");
            },
            getSavedCategoriesData: function(){
                // get all media categorization lookup id for selected file
                AudioVideo.getMediaCategorizationLooupIdByUuid(this.mediaUuid)
                    .then(response => {
                        this.savedCategories = response.data.data
                        if (this.savedCategories != "") {
                            this.getMediaHierarchyInfoForNodeCollapses(this.savedCategories, '');
                        }
                    })
                    .catch(error => {
                        if (error.response.status === 403) {
                            this.$router.push({name: "Content"});
                        } else {
                            console.log(error)
                        }
                    });
            },
            cancelMetaDataAdd: function() {
                if(this.hierarchyType == 'Audio'){
                    this.$router.push({name: "Content", 'hash': '#audio'});
                }else{
                    this.$router.push({name: "Content"});
                }
            }
        },

        created: function () {
            this.nodeColor = Common.hierarchyNodeColor;
            this.responseParents();
            this.getIndustries();
            // if (this.$route.params.id != undefined) {
            //     this.addedMediaId = this.$route.params.id;
            //     this.getMediaHierarchyInfoForNodeCollapses('', this.$route.params.id);
            // }
            if (this.$route.params.id != undefined && this.$route.params.fileId != undefined) {
                this.getMediaHierarchyInfo(this.$route.params.fileId, this.$route.params.id);
            }
            this.getSavedCategoriesData();
        },
        components: {
            CompanyNodeCollapses,
            MediaCategoryTabContent,
            MediaCategoryCurrentPathway,
            loader,
            vSelect,
        }
    }
</script>

<style scoped>
    .background-darkblue {
        background: #5352ED;
    }

    .text-darkblue {
        color: #1e0857;
    }
    .btn.activate-btn {
        background-color: rgb(255 196 46);
    }
    .btn.activate-btn:hover {
        background-color: rgb(217 168 45);
    }
    .btn-clear-form{
        padding: 7px 18px;
    }
</style>
