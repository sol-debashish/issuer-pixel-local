(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AudioVideoHierarchy.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AudioVideoHierarchy.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CompanyNodeCollapses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyNodeCollapses */ "./resources/js/components/CompanyNodeCollapses.vue");
/* harmony import */ var _MediaCategoryTabContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MediaCategoryTabContent */ "./resources/js/components/MediaCategoryTabContent.vue");
/* harmony import */ var _MediaCategoryCurrentPathway__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MediaCategoryCurrentPathway */ "./resources/js/components/MediaCategoryCurrentPathway.vue");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apis_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../apis/User */ "./resources/js/apis/User.js");
/* harmony import */ var _apis_AudioVideo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../apis/AudioVideo */ "./resources/js/apis/AudioVideo.js");
/* harmony import */ var _apis_Common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../apis/Common */ "./resources/js/apis/Common.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
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
        user_info: ''
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
        subMine: ""
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
      noSubMineData: false
    };
  },
  props: ['taxonomyActionType', 'taxonomyType', 'hierarchyType', "mediaUuid"],
  validations: {
    form: {
      industry: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__["required"]
      },
      sector: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__["required"]
      },
      subSector: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__["required"]
      },
      group: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__["required"]
      },
      subGroup: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__["required"]
      },
      echelon: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__["required"]
      },
      subEchelon: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__["required"]
      },
      tier: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__["required"]
      },
      subTier: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__["required"]
      },
      layer: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__["required"]
      },
      subLayer: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__["required"]
      },
      deck: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__["required"]
      },
      subDeck: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__["required"]
      },
      floor: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__["required"]
      },
      subFloor: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__["required"]
      },
      basement: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__["required"]
      },
      subBasement: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__["required"]
      },
      mine: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__["required"]
      },
      subMine: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__["required"]
      }
    },
    suggestion_explanation: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__["required"]
    },
    suggestion_reason: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_9__["required"]
    }
  },
  watch: {
    form: {
      handler: function handler() {
        this.$emit('nodeData', [this.form.industry, this.form.sector, this.form.subSector, this.form.group, this.form.subGroup, this.form.echelon, this.form.subEchelon, this.form.tier, this.form.subTier, this.form.layer, this.form.subLayer, this.form.deck, this.form.subDeck, this.form.floor, this.form.subFloor, this.form.basement, this.form.subBasement, this.form.mine, this.form.subMine, this.lookupId]);
      },
      deep: true
    }
  },
  methods: {
    loadTabContent: function loadTabContent(each, index) {
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
        this.form.subLayer = each.sub_layer;

        if (each.last_level == 'sub_layer') {
          this.getDecks(each.sub_layer, 'Input', true);
        } else {
          this.getDecks(each.sub_layer, 'load', false);
        }
      }

      if (Object.keys(each).includes('deck')) {
        this.form.deck = each.deck;

        if (each.last_level == 'deck') {
          this.getSubDecks(each.deck, 'Input', true);
        } else {
          this.getSubDecks(each.deck, 'load', false);
        }
      }

      if (Object.keys(each).includes('sub_deck')) {
        this.form.subDeck = each.sub_deck;

        if (each.last_level == 'sub_deck') {
          this.getFloors(each.sub_deck, 'Input', true);
        } else {
          this.getFloors(each.sub_deck, 'load', false);
        }
      }

      if (Object.keys(each).includes('floor')) {
        this.form.floor = each.floor;

        if (each.last_level == 'floor') {
          this.getSubFloors(each.floor, 'Input', true);
        } else {
          this.getSubFloors(each.floor, 'load', false);
        }
      }

      if (Object.keys(each).includes('sub_floor')) {
        this.form.subFloor = each.sub_floor;

        if (each.last_level == 'sub_floor') {
          this.getBasements(each.sub_floor, 'Input', true);
        } else {
          this.getBasements(each.sub_floor, 'load', false);
        }
      }

      if (Object.keys(each).includes('basement')) {
        this.form.basement = each.basement;

        if (each.last_level == 'basement') {
          this.getSubBasements(each.basement, 'Input', true);
        } else {
          this.getSubBasements(each.basement, 'load', false);
        }
      }

      if (Object.keys(each).includes('sub_basement')) {
        this.form.subBasement = each.sub_basement;

        if (each.last_level == 'sub_basement') {
          this.getMines(each.sub_basement, 'Input', true);
        } else {
          this.getMines(each.sub_basement, 'load', false);
        }
      }

      if (Object.keys(each).includes('mine')) {
        this.form.mine = each.mine;

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
    EnabledAllSelectForEdit: function EnabledAllSelectForEdit() {
      /*Enabled Edit Mode*/
      this.enabledEditMode = true;
      this.disabledInputs = false;
      this.enterEditMode = false;
    },
    loadLastTabDataFromStorage: function loadLastTabDataFromStorage(index) {
      var localSavedData = JSON.parse(localStorage.getItem("lastValue"));
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
          this.form.subLayer = localSavedData.subLayer;

          if (localSavedData.deck == '') {
            this.getDecks(localSavedData.subLayer, 'Input', true);
          } else {
            this.getDecks(localSavedData.subLayer, 'load', false);
          }
        }

        if (localSavedData.deck != '') {
          this.form.deck = localSavedData.deck;

          if (localSavedData.last_level == 'deck') {
            this.getSubDecks(localSavedData.deck, 'Input', true);
          } else {
            this.getSubDecks(localSavedData.deck, 'load', false);
          }
        }

        if (localSavedData.subDeck != '') {
          this.form.subDeck = localSavedData.subDeck;

          if (localSavedData.floor == '') {
            this.getFloors(localSavedData.subDeck, 'Input', true);
          } else {
            this.getFloors(localSavedData.subDeck, 'load', false);
          }
        }

        if (localSavedData.floor != '') {
          this.form.floor = localSavedData.floor;

          if (localSavedData.subFloor == '') {
            this.getSubFloors(localSavedData.floor, 'Input', true);
          } else {
            this.getSubFloors(localSavedData.floor, 'load', false);
          }
        }

        if (localSavedData.subFloor != '') {
          this.form.subFloor = localSavedData.subFloor;

          if (localSavedData.basement == '') {
            this.getBasements(localSavedData.subFloor, 'Input', true);
          } else {
            this.getBasements(localSavedData.subFloor, 'load', false);
          }
        }

        if (localSavedData.basement != '') {
          this.form.basement = localSavedData.basement;

          if (localSavedData.subBasement == '') {
            this.getSubBasements(localSavedData.basement, 'Input', true);
          } else {
            this.getSubBasements(localSavedData.basement, 'load', false);
          }
        }

        if (localSavedData.subBasement != '') {
          this.form.subBasement = localSavedData.subBasement;

          if (localSavedData.mine == '') {
            this.getMines(localSavedData.subBasement, 'Input', true);
          } else {
            this.getMines(localSavedData.subBasement, 'load', false);
          }
        }

        if (localSavedData.mine != '') {
          this.form.mine = localSavedData.mine;

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
    navigateTabScrollOnLeft: function navigateTabScrollOnLeft() {
      var content = document.querySelector(".nav-tabs");
      content.scrollLeft -= 150;
    },
    navigateTabScrollOnRight: function navigateTabScrollOnRight() {
      var content = document.querySelector(".nav-tabs");
      content.scrollLeft += 150;
    },
    getIndustries: function () {
      var _getIndustries = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('/api/industry-list').then(function (response) {
                  _this.industries = response.data.data;
                  _this.isLoading = false;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getIndustries() {
        return _getIndustries.apply(this, arguments);
      }

      return getIndustries;
    }(),
    getSectors: function () {
      var _getSectors = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(value, changeEvent) {
        var _this2 = this;

        var clearNodeValue,
            _args2 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                clearNodeValue = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : true;

                if (!(value != null || value != undefined)) {
                  _context2.next = 8;
                  break;
                }

                this.categorizationLevel = 'Industry';
                this.categorizationNodeId = value.id;
                this.categorizationNodeName = value.description;
                this.isLoading = true;
                _context2.next = 8;
                return axios.get('/api/get-node-list/' + value.id + '/Sector/Industry').then(function (response) {
                  _this2.sectors = response.data.data;

                  if (clearNodeValue) {
                    _this2.clearNodeValue('sectors', changeEvent);
                  }

                  _this2.isLoading = false;
                  _this2.sectors.length === 0 ? _this2.showSectorField = false : _this2.showSectorField = true;

                  _this2.setLabelWidth();
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getSectors(_x, _x2) {
        return _getSectors.apply(this, arguments);
      }

      return getSectors;
    }(),
    getSubSectors: function () {
      var _getSubSectors = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(value, changeEvent) {
        var _this3 = this;

        var clearNodeValue,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                clearNodeValue = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : true;

                if (!(value != null || value != undefined)) {
                  _context3.next = 8;
                  break;
                }

                this.categorizationLevel = 'Sector';
                this.categorizationNodeId = value.id;
                this.categorizationNodeName = value.description;
                this.isLoading = true;
                _context3.next = 8;
                return axios.get('/api/get-node-list/' + value.id + '/SubSector/Sector').then(function (response) {
                  _this3.subSectors = response.data.data;

                  if (clearNodeValue) {
                    _this3.clearNodeValue('subSectors', changeEvent);
                  }

                  _this3.subSectors.length === 0 ? _this3.setConditionalValidationVariables('subSector', true) : _this3.setConditionalValidationVariables('subSector', false);
                  _this3.isLoading = false;
                  _this3.subSectors.length === 0 ? _this3.showSubSectorField = false : _this3.showSubSectorField = true;

                  _this3.setLabelWidth();
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getSubSectors(_x3, _x4) {
        return _getSubSectors.apply(this, arguments);
      }

      return getSubSectors;
    }(),
    getGroups: function () {
      var _getGroups = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(value, changeEvent) {
        var _this4 = this;

        var clearNodeValue,
            _args4 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                clearNodeValue = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : true;

                if (!(value != null || value != undefined)) {
                  _context4.next = 8;
                  break;
                }

                this.categorizationLevel = 'SubSector';
                this.categorizationNodeId = value.id;
                this.categorizationNodeName = value.description;
                this.isLoading = true;
                _context4.next = 8;
                return axios.get('/api/get-node-list/' + value.id + '/Group/SubSector').then(function (response) {
                  _this4.groups = response.data.data;

                  if (clearNodeValue) {
                    _this4.clearNodeValue('groups', changeEvent);
                  }

                  _this4.groups.length === 0 ? _this4.setConditionalValidationVariables('group', true) : _this4.setConditionalValidationVariables('group', false);
                  _this4.isLoading = false;
                  _this4.groups.length === 0 ? _this4.showGroupField = false : _this4.showGroupField = true;

                  _this4.setLabelWidth();
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getGroups(_x5, _x6) {
        return _getGroups.apply(this, arguments);
      }

      return getGroups;
    }(),
    getSubGroups: function () {
      var _getSubGroups = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(value, changeEvent) {
        var _this5 = this;

        var clearNodeValue,
            _args5 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                clearNodeValue = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : true;

                if (!(value != null || value != undefined)) {
                  _context5.next = 8;
                  break;
                }

                this.categorizationLevel = 'Group';
                this.categorizationNodeId = value.id;
                this.categorizationNodeName = value.description;
                this.isLoading = true;
                _context5.next = 8;
                return axios.get('/api/get-node-list/' + value.id + '/SubGroup/Group').then(function (response) {
                  _this5.subGroups = response.data.data;

                  if (clearNodeValue) {
                    _this5.clearNodeValue('subGroups', changeEvent);
                  }

                  _this5.subGroups.length === 0 ? _this5.setConditionalValidationVariables('subGroup', true) : _this5.setConditionalValidationVariables('subGroup', false);
                  _this5.isLoading = false;
                  _this5.subGroups.length === 0 ? _this5.showSubGroupField = false : _this5.showSubGroupField = true;

                  _this5.setLabelWidth();
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getSubGroups(_x7, _x8) {
        return _getSubGroups.apply(this, arguments);
      }

      return getSubGroups;
    }(),
    getEchelons: function () {
      var _getEchelons = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(value, changeEvent) {
        var _this6 = this;

        var clearNodeValue,
            _args6 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                clearNodeValue = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : true;

                if (!(value != null || value != undefined)) {
                  _context6.next = 8;
                  break;
                }

                this.categorizationLevel = 'SubGroup';
                this.categorizationNodeId = value.id;
                this.categorizationNodeName = value.description;
                this.isLoading = true;
                _context6.next = 8;
                return axios.get('/api/get-node-list/' + value.id + '/Echelon/SubGroup').then(function (response) {
                  _this6.echelons = response.data.data;

                  if (clearNodeValue) {
                    _this6.clearNodeValue('echelons', changeEvent);
                  }

                  _this6.echelons.length === 0 ? _this6.setConditionalValidationVariables('echelon', true) : _this6.setConditionalValidationVariables('echelon', false);
                  _this6.isLoading = false;
                  _this6.echelons.length === 0 ? _this6.showEchelonField = false : _this6.showEchelonField = true;

                  _this6.setLabelWidth();
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getEchelons(_x9, _x10) {
        return _getEchelons.apply(this, arguments);
      }

      return getEchelons;
    }(),
    getSubEchelons: function () {
      var _getSubEchelons = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(value, changeEvent) {
        var _this7 = this;

        var clearNodeValue,
            _args7 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                clearNodeValue = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : true;

                if (!(value != null || value != undefined)) {
                  _context7.next = 8;
                  break;
                }

                this.categorizationLevel = 'Echelon';
                this.categorizationNodeId = value.id;
                this.categorizationNodeName = value.description;
                this.isLoading = true;
                _context7.next = 8;
                return axios.get('/api/get-node-list/' + value.id + '/SubEchelon/Echelon').then(function (response) {
                  _this7.subEchelons = response.data.data;

                  if (clearNodeValue) {
                    _this7.clearNodeValue('subEchelons', changeEvent);
                  }

                  _this7.subEchelons.length === 0 ? _this7.setConditionalValidationVariables('subEchelon', true) : _this7.setConditionalValidationVariables('subEchelon', false);
                  _this7.isLoading = false;
                  _this7.subEchelons.length === 0 ? _this7.showSubEchelonField = false : _this7.showSubEchelonField = true;

                  _this7.setLabelWidth();
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 8:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getSubEchelons(_x11, _x12) {
        return _getSubEchelons.apply(this, arguments);
      }

      return getSubEchelons;
    }(),
    getTiers: function () {
      var _getTiers = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(value, changeEvent) {
        var _this8 = this;

        var clearNodeValue,
            _args8 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                clearNodeValue = _args8.length > 2 && _args8[2] !== undefined ? _args8[2] : true;

                if (!(value != null || value != undefined)) {
                  _context8.next = 8;
                  break;
                }

                this.categorizationLevel = 'SubEchelon';
                this.categorizationNodeId = value.id;
                this.categorizationNodeName = value.description;
                this.isLoading = true;
                _context8.next = 8;
                return axios.get('/api/get-node-list/' + value.id + '/Tier/SubEchelon').then(function (response) {
                  _this8.tiers = response.data.data;

                  if (clearNodeValue) {
                    _this8.clearNodeValue('tiers', changeEvent);
                  }

                  _this8.tiers.length === 0 ? _this8.setConditionalValidationVariables('tier', true) : _this8.setConditionalValidationVariables('tier', false);
                  _this8.isLoading = false;
                  _this8.tiers.length === 0 ? _this8.showTierField = false : _this8.showTierField = true;

                  _this8.setLabelWidth();
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 8:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getTiers(_x13, _x14) {
        return _getTiers.apply(this, arguments);
      }

      return getTiers;
    }(),
    getSubTiers: function () {
      var _getSubTiers = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(value, changeEvent) {
        var _this9 = this;

        var clearNodeValue,
            _args9 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                clearNodeValue = _args9.length > 2 && _args9[2] !== undefined ? _args9[2] : true;

                if (!(value != null || value != undefined)) {
                  _context9.next = 8;
                  break;
                }

                this.categorizationLevel = 'Tier';
                this.categorizationNodeId = value.id;
                this.categorizationNodeName = value.description;
                this.isLoading = true;
                _context9.next = 8;
                return axios.get('/api/get-node-list/' + value.id + '/SubTier/Tier').then(function (response) {
                  _this9.subTiers = response.data.data;

                  if (clearNodeValue) {
                    _this9.clearNodeValue('subTiers', changeEvent);
                  }

                  _this9.subTiers.length === 0 ? _this9.setConditionalValidationVariables('subTier', true) : _this9.setConditionalValidationVariables('subTier', false);
                  _this9.isLoading = false;
                  _this9.subTiers.length === 0 ? _this9.showSubTierField = false : _this9.showSubTierField = true;

                  _this9.setLabelWidth();
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 8:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getSubTiers(_x15, _x16) {
        return _getSubTiers.apply(this, arguments);
      }

      return getSubTiers;
    }(),
    getLayers: function () {
      var _getLayers = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(value, changeEvent) {
        var _this10 = this;

        var clearNodeValue,
            _args10 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                clearNodeValue = _args10.length > 2 && _args10[2] !== undefined ? _args10[2] : true;

                if (!(value != null || value != undefined)) {
                  _context10.next = 8;
                  break;
                }

                this.categorizationLevel = 'SubTier';
                this.categorizationNodeId = value.id;
                this.categorizationNodeName = value.description;
                this.isLoading = true;
                _context10.next = 8;
                return axios.get('/api/get-node-list/' + value.id + '/Layer/SubTier').then(function (response) {
                  _this10.layers = response.data.data;

                  if (clearNodeValue) {
                    _this10.clearNodeValue('layers', changeEvent);
                  }

                  _this10.layers.length === 0 ? _this10.setConditionalValidationVariables('layer', true) : _this10.setConditionalValidationVariables('layer', false);
                  _this10.isLoading = false;
                  _this10.layers.length === 0 ? _this10.showLayerField = false : _this10.showLayerField = true;

                  _this10.setLabelWidth();
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 8:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getLayers(_x17, _x18) {
        return _getLayers.apply(this, arguments);
      }

      return getLayers;
    }(),
    getSubLayers: function () {
      var _getSubLayers = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(value, changeEvent) {
        var _this11 = this;

        var clearNodeValue,
            _args11 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                clearNodeValue = _args11.length > 2 && _args11[2] !== undefined ? _args11[2] : true;

                if (value != null || value != undefined) {
                  this.categorizationLevel = 'Layer';
                  this.categorizationNodeId = value.id;
                  this.categorizationNodeName = value.description;
                  this.isLoading = true;
                  axios.get('/api/get-node-list/' + value.id + '/SubLayer/Layer').then(function (response) {
                    _this11.subLayers = response.data.data;

                    if (clearNodeValue) {
                      _this11.clearNodeValue('subLayers', changeEvent);
                    }

                    _this11.subLayers.length === 0 ? _this11.setConditionalValidationVariables('subLayer', true) : _this11.setConditionalValidationVariables('subLayer', false);
                    _this11.isLoading = false;
                    _this11.subLayers.length === 0 ? _this11.showSubLayerField = false : _this11.showSubLayerField = true;

                    _this11.setLabelWidth();
                  })["catch"](function (error) {
                    return console.log(error);
                  });
                }

              case 2:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function getSubLayers(_x19, _x20) {
        return _getSubLayers.apply(this, arguments);
      }

      return getSubLayers;
    }(),
    getDecks: function () {
      var _getDecks = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(value, changeEvent) {
        var _this12 = this;

        var clearNodeValue,
            _args12 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                clearNodeValue = _args12.length > 2 && _args12[2] !== undefined ? _args12[2] : true;

                if (!(value != null || value != undefined)) {
                  _context12.next = 8;
                  break;
                }

                this.categorizationLevel = 'SubLayer';
                this.categorizationNodeId = value.id;
                this.categorizationNodeName = value.description;
                this.isLoading = true;
                _context12.next = 8;
                return axios.get('/api/get-node-list/' + value.id + '/Deck/SubLayer').then(function (response) {
                  _this12.decks = response.data.data;

                  if (clearNodeValue) {
                    _this12.clearNodeValue('decks', changeEvent);
                  }

                  _this12.decks.length === 0 ? _this12.setConditionalValidationVariables('deck', true) : _this12.setConditionalValidationVariables('deck', false);
                  _this12.isLoading = false;
                  _this12.decks.length === 0 ? _this12.showDeckField = false : _this12.showDeckField = true;

                  _this12.setLabelWidth();
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 8:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function getDecks(_x21, _x22) {
        return _getDecks.apply(this, arguments);
      }

      return getDecks;
    }(),
    getSubDecks: function () {
      var _getSubDecks = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13(value, changeEvent) {
        var _this13 = this;

        var clearNodeValue,
            _args13 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                clearNodeValue = _args13.length > 2 && _args13[2] !== undefined ? _args13[2] : true;

                if (!(value != null || value != undefined)) {
                  _context13.next = 8;
                  break;
                }

                this.categorizationLevel = 'Deck';
                this.categorizationNodeId = value.id;
                this.categorizationNodeName = value.description;
                this.isLoading = true;
                _context13.next = 8;
                return axios.get('/api/get-node-list/' + value.id + '/SubDeck/Deck').then(function (response) {
                  _this13.subDecks = response.data.data;

                  if (clearNodeValue) {
                    _this13.clearNodeValue('subDecks', changeEvent);
                  }

                  _this13.subDecks.length === 0 ? _this13.setConditionalValidationVariables('subDeck', true) : _this13.setConditionalValidationVariables('subDeck', false);
                  _this13.isLoading = false;
                  _this13.subDecks.length === 0 ? _this13.showSubDeckField = false : _this13.showSubDeckField = true;

                  _this13.setLabelWidth();
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 8:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function getSubDecks(_x23, _x24) {
        return _getSubDecks.apply(this, arguments);
      }

      return getSubDecks;
    }(),
    getFloors: function () {
      var _getFloors = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14(value, changeEvent) {
        var _this14 = this;

        var clearNodeValue,
            _args14 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                clearNodeValue = _args14.length > 2 && _args14[2] !== undefined ? _args14[2] : true;

                if (!(value != null || value != undefined)) {
                  _context14.next = 8;
                  break;
                }

                this.categorizationLevel = 'SubDeck';
                this.categorizationNodeId = value.id;
                this.categorizationNodeName = value.description;
                this.isLoading = true;
                _context14.next = 8;
                return axios.get('/api/get-node-list/' + value.id + '/Floor/SubDeck').then(function (response) {
                  _this14.floors = response.data.data;

                  if (clearNodeValue) {
                    _this14.clearNodeValue('floors', changeEvent);
                  }

                  _this14.floors.length === 0 ? _this14.setConditionalValidationVariables('floor', true) : _this14.setConditionalValidationVariables('floor', false);
                  _this14.isLoading = false;
                  _this14.floors.length === 0 ? _this14.showFloorField = false : _this14.showFloorField = true;

                  _this14.setLabelWidth();
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 8:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function getFloors(_x25, _x26) {
        return _getFloors.apply(this, arguments);
      }

      return getFloors;
    }(),
    getSubFloors: function () {
      var _getSubFloors = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15(value, changeEvent) {
        var _this15 = this;

        var clearNodeValue,
            _args15 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                clearNodeValue = _args15.length > 2 && _args15[2] !== undefined ? _args15[2] : true;

                if (!(value != null || value != undefined)) {
                  _context15.next = 8;
                  break;
                }

                this.categorizationLevel = 'Floor';
                this.categorizationNodeId = value.id;
                this.categorizationNodeName = value.description;
                this.isLoading = true;
                _context15.next = 8;
                return axios.get('/api/get-node-list/' + value.id + '/SubFloor/Floor').then(function (response) {
                  _this15.subFloors = response.data.data;

                  if (clearNodeValue) {
                    _this15.clearNodeValue('subFloors', changeEvent);
                  }

                  _this15.subFloors.length === 0 ? _this15.setConditionalValidationVariables('subFloor', true) : _this15.setConditionalValidationVariables('subFloor', false);
                  _this15.isLoading = false;
                  _this15.subFloors.length === 0 ? _this15.showSubFloorField = false : _this15.showSubFloorField = true;

                  _this15.setLabelWidth();
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 8:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function getSubFloors(_x27, _x28) {
        return _getSubFloors.apply(this, arguments);
      }

      return getSubFloors;
    }(),
    getBasements: function () {
      var _getBasements = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16(value, changeEvent) {
        var _this16 = this;

        var clearNodeValue,
            _args16 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                clearNodeValue = _args16.length > 2 && _args16[2] !== undefined ? _args16[2] : true;

                if (!(value != null || value != undefined)) {
                  _context16.next = 8;
                  break;
                }

                this.categorizationLevel = 'SubFloor';
                this.categorizationNodeId = value.id;
                this.categorizationNodeName = value.description;
                this.isLoading = true;
                _context16.next = 8;
                return axios.get('/api/get-node-list/' + value.id + '/Basement/SubFloor').then(function (response) {
                  _this16.basements = response.data.data;

                  if (clearNodeValue) {
                    _this16.clearNodeValue('basements', changeEvent);
                  }

                  _this16.basements.length === 0 ? _this16.setConditionalValidationVariables('basement', true) : _this16.setConditionalValidationVariables('basement', false);
                  _this16.isLoading = false;
                  _this16.basements.length === 0 ? _this16.showBasementField = false : _this16.showBasementField = true;

                  _this16.setLabelWidth();
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 8:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function getBasements(_x29, _x30) {
        return _getBasements.apply(this, arguments);
      }

      return getBasements;
    }(),
    getSubBasements: function () {
      var _getSubBasements = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee17(value, changeEvent) {
        var _this17 = this;

        var clearNodeValue,
            _args17 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                clearNodeValue = _args17.length > 2 && _args17[2] !== undefined ? _args17[2] : true;

                if (!(value != null || value != undefined)) {
                  _context17.next = 8;
                  break;
                }

                this.categorizationLevel = 'Basement';
                this.categorizationNodeId = value.id;
                this.categorizationNodeName = value.description;
                this.isLoading = true;
                _context17.next = 8;
                return axios.get('/api/get-node-list/' + value.id + '/SubBasement/Basement').then(function (response) {
                  _this17.subBasements = response.data.data;

                  if (clearNodeValue) {
                    _this17.clearNodeValue('subBasements', changeEvent);
                  }

                  _this17.subBasements.length === 0 ? _this17.setConditionalValidationVariables('subBasement', true) : _this17.setConditionalValidationVariables('subBasement', false);
                  _this17.isLoading = false;
                  _this17.subBasements.length === 0 ? _this17.showSubBasementField = false : _this17.showSubBasementField = true;

                  _this17.setLabelWidth();
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 8:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function getSubBasements(_x31, _x32) {
        return _getSubBasements.apply(this, arguments);
      }

      return getSubBasements;
    }(),
    getMines: function () {
      var _getMines = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee18(value, changeEvent) {
        var _this18 = this;

        var clearNodeValue,
            _args18 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                clearNodeValue = _args18.length > 2 && _args18[2] !== undefined ? _args18[2] : true;

                if (!(value != null || value != undefined)) {
                  _context18.next = 8;
                  break;
                }

                this.categorizationLevel = 'SubBasement';
                this.categorizationNodeId = value.id;
                this.categorizationNodeName = value.description;
                this.isLoading = true;
                _context18.next = 8;
                return axios.get('/api/get-node-list/' + value.id + '/Mine/SubBasement').then(function (response) {
                  _this18.mines = response.data.data;

                  if (clearNodeValue) {
                    _this18.clearNodeValue('mines', changeEvent);
                  }

                  _this18.mines.length === 0 ? _this18.setConditionalValidationVariables('mine', true) : _this18.setConditionalValidationVariables('mine', false);
                  _this18.isLoading = false;
                  _this18.mines.length === 0 ? _this18.showMineField = false : _this18.showMineField = true;

                  _this18.setLabelWidth();
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 8:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function getMines(_x33, _x34) {
        return _getMines.apply(this, arguments);
      }

      return getMines;
    }(),
    getSubMines: function () {
      var _getSubMines = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee19(value, changeEvent) {
        var _this19 = this;

        var clearNodeValue,
            _args19 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                clearNodeValue = _args19.length > 2 && _args19[2] !== undefined ? _args19[2] : true;

                if (!(value != null || value != undefined)) {
                  _context19.next = 8;
                  break;
                }

                this.categorizationLevel = 'Mine';
                this.categorizationNodeId = value.id;
                this.categorizationNodeName = value.description;
                this.isLoading = true;
                _context19.next = 8;
                return axios.get('/api/get-node-list/' + value.id + '/SubMine/Mine').then(function (response) {
                  _this19.subMines = response.data.data;

                  if (clearNodeValue) {
                    _this19.clearNodeValue('subMines', changeEvent);
                  }

                  _this19.subMines.length === 0 ? _this19.setConditionalValidationVariables('subMine', true) : _this19.setConditionalValidationVariables('subMine', false);
                  _this19.isLoading = false;
                  _this19.subMines.length === 0 ? _this19.showSubMineField = false : _this19.showSubMineField = true;

                  _this19.setLabelWidth();
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 8:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function getSubMines(_x35, _x36) {
        return _getSubMines.apply(this, arguments);
      }

      return getSubMines;
    }(),
    subMinesChange: function subMinesChange(value, changeEvent) {
      var _this20 = this;

      var clearNodeValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      this.categorizationLevel = 'SubMine';
      this.categorizationNodeId = value.id;
      this.categorizationNodeName = value.description;

      if (clearNodeValue) {
        this.clearNodeValue('other');
      } //this.showSubMineAddSuggestionField = true;


      setTimeout(function () {
        _this20.setLabelWidth();
      }, 1000);
    },
    clearNodeValue: function clearNodeValue(expression, changeEvent) {
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
    setConditionalValidationVariables: function setConditionalValidationVariables(selectNode, flag) {
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
    showAddModal: function showAddModal() {
      this.isDisabled = false;
      this.$bvModal.hide('modal-add-suggestion');
      this.$bvModal.show('modal-add-node');
    },
    showReplaceModal: function showReplaceModal() {
      this.isDisabled = false;

      if (this.node_description) {
        this.$bvModal.hide('modal-add-suggestion');
        this.$bvModal.show('modal-replace-node');
      } else {
        $.confirm({
          title: 'Warning',
          content: "Please select a node before this operation",
          columnClass: 'medium',
          type: 'red',
          typeAnimated: true,
          buttons: {
            Ok: function Ok() {}
          }
        });
      }
    },
    showDeleteModal: function showDeleteModal() {
      this.isDisabled = false;

      if (this.node_description) {
        this.$bvModal.hide('modal-add-suggestion');
        this.$bvModal.show('modal-delete-node');
      } else {
        $.confirm({
          title: 'Warning',
          content: "Please select a node before this operation",
          columnClass: 'medium',
          type: 'red',
          typeAnimated: true,
          buttons: {
            Ok: function Ok() {}
          }
        });
      }
    },
    showOtherModal: function showOtherModal() {
      this.isDisabled = false;

      if (this.node_description) {
        this.$bvModal.hide('modal-add-suggestion');
        this.$bvModal.show('modal-other-node');
      } else {
        $.confirm({
          title: 'Warning',
          content: "Please select a node before this operation",
          columnClass: 'medium',
          type: 'red',
          typeAnimated: true,
          buttons: {
            Ok: function Ok() {}
          }
        });
      }
    },
    cancelSuggestionModal: function cancelSuggestionModal(modalId) {
      this.$bvModal.hide(modalId);
      this.suggestion_explanation = "";
      this.suggestion_reason = "";
      this.$v.$reset();
    },
    addSuggestion: function addSuggestion(suggestionType) {
      var _this21 = this;

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
      } //this.isDisabled = true;


      this.suggestionFormData.suggestion_explanation = this.suggestion_explanation;
      this.suggestionFormData.suggestion_reason = this.suggestion_reason;
      this.suggestionFormData.node_type = this.node_type;
      this.suggestionFormData.node_id = this.node_id;
      this.suggestionFormData.parent_id = this.parent_id;
      this.suggestionFormData.industry_id = this.form.industry.id;
      this.suggestionFormData.suggestion_type = suggestionType;
      this.suggestionFormData.hierarchy_type = this.hierarchyType;
      _apis_User__WEBPACK_IMPORTED_MODULE_6__["default"].nodeSuggestion(this.suggestionFormData).then(function (response) {
        if (response.data.success) {
          _this21.$bvModal.hide('modal-' + suggestionType + '-node'); //toastr.success(response.data.success.message)


          $.confirm({
            title: '',
            content: "Thank you for your suggestion. We will review your submission and follow up with you within the next few business days.",
            columnClass: 'medium',
            type: 'blue',
            typeAnimated: true,
            buttons: {
              Ok: function Ok() {}
            }
          });
          _this21.suggestion_explanation = '';
          _this21.suggestion_reason = '';

          _this21.$v.$reset();
        }
      })["catch"](function (error) {
        if (error.response.status === 422) {
          toastr.error(error.response.data.error.message);
        } else if (error.response.status == 401) {
          localStorage.clear();

          _this21.$router.push({
            name: "Login"
          });
        } else {
          console.log(error);
        }
      });
    },
    sendHierarchyInfo: function sendHierarchyInfo(type, id, description, parent_id) {
      this.node_type = type;
      this.node_id = id;
      this.node_description = description;
      this.parent_id = parent_id;
    },
    responseParents: function responseParents(event) {
      this.$emit('nodeData', [this.form.industry, this.form.sector, this.form.subSector, this.form.group, this.form.subGroup, this.form.echelon, this.form.subEchelon, this.form.tier, this.form.subTier, this.form.layer, this.form.subLayer, this.form.deck, this.form.subDeck, this.form.floor, this.form.subFloor, this.form.basement, this.form.subBasement, this.form.mine, this.form.subMine]);
    },
    saveHierarchyInfo: function saveHierarchyInfo(callFrom) {
      var _this22 = this;

      if ('editAndClose' == callFrom && this.form.industry == "") {
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

      if (this.$v.form.industry.$invalid || this.$v.form.sector.$invalid || this.$v.form.subSector.$invalid && this.noSubSectorData == false || this.$v.form.group.$invalid && this.noGroupData == false || this.$v.form.subGroup.$invalid && this.noSubGroupData == false || this.$v.form.echelon.$invalid && this.noEchelonData == false || this.$v.form.subEchelon.$invalid && this.noSubEchelonData == false || this.$v.form.tier.$invalid && this.noTierData == false || this.$v.form.subTier.$invalid && this.noSubTierData == false || this.$v.form.layer.$invalid && this.noLayerData == false || this.$v.form.subLayer.$invalid && this.noSubLayerData == false || this.$v.form.deck.$invalid && this.noDeckData == false || this.$v.form.subDeck.$invalid && this.noSubDeckData == false || this.$v.form.floor.$invalid && this.noFloorData == false || this.$v.form.subFloor.$invalid && this.noSubFloorData == false || this.$v.form.basement.$invalid && this.noBasementData == false || this.$v.form.subBasement.$invalid && this.noSubBasementData == false || this.$v.form.mine.$invalid && this.noMineData == false || this.$v.form.subMine.$invalid && this.noSubMineData == false) {
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
      var nodeformData = new FormData();
      nodeformData.append('node_type', this.categorizationLevel);
      nodeformData.append('node_id', this.categorizationNodeId);
      nodeformData.append('node_name', this.categorizationNodeName);
      nodeformData.append('industry_id', this.form.industry.id);
      nodeformData.append('media_id', this.mediaUuid);
      _apis_User__WEBPACK_IMPORTED_MODULE_6__["default"].addAudioVideoMultipleNodes(nodeformData).then(function (response) {
        _this22.isDisabled = false;
        _this22.isLoading = false;

        if (response.data.success) {
          if (null == _this22.lookupId) {
            _this22.lookupId = response.data.data.lookupId;
          } else {
            _this22.lookupId = _this22.lookupId + ',' + response.data.data.lookupId;
          }

          if (_this22.savedCategories !== "") {
            _this22.lookupId = _this22.lookupId + ',' + _this22.savedCategories;
          }

          _this22.clearNodeValue('industry', 'Input');

          _this22.categorizationLevel = "";
          _this22.categorizationNodeId = "";

          if (callFrom == 'edit') {
            _this22.getMediaHierarchyInfoForNodeCollapses('', _this22.$route.params.id);
          } else if (callFrom == 'editAndClose') {
            _this22.$parent.editCancel();
          } else {
            _this22.getMediaHierarchyInfoForNodeCollapses(_this22.lookupId, '');
          } //toastr.success(response.data.success.message)


          _this22.$parent.showAddAnotherClassificationMessage(response.data.success.message, true, 'success');

          _this22.$v.$reset();

          if (callFrom == 'finish') {
            _this22.$parent.saveMediaInfo();
          }
        }
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this22.$parent.showAddAnotherClassificationMessage(error.response.data.error.message, true, 'danger');
        } else if (error.response.status == 401) {
          localStorage.clear();

          _this22.$router.push({
            name: "Login"
          });
        } else {
          _this22.$parent.showAddAnotherClassificationMessage(error, true, 'danger');
        }

        _this22.isLoading = false;
      });
    },
    updateExistingClassification: function updateExistingClassification(callFrom) {
      var _this23 = this;

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

      if (this.$v.form.industry.$invalid || this.$v.form.sector.$invalid || this.$v.form.subSector.$invalid && this.noSubSectorData == false || this.$v.form.group.$invalid && this.noGroupData == false || this.$v.form.subGroup.$invalid && this.noSubGroupData == false || this.$v.form.echelon.$invalid && this.noEchelonData == false || this.$v.form.subEchelon.$invalid && this.noSubEchelonData == false || this.$v.form.tier.$invalid && this.noTierData == false || this.$v.form.subTier.$invalid && this.noSubTierData == false || this.$v.form.layer.$invalid && this.noLayerData == false || this.$v.form.subLayer.$invalid && this.noSubLayerData == false || this.$v.form.deck.$invalid && this.noDeckData == false || this.$v.form.subDeck.$invalid && this.noSubDeckData == false || this.$v.form.floor.$invalid && this.noFloorData == false || this.$v.form.subFloor.$invalid && this.noSubFloorData == false || this.$v.form.basement.$invalid && this.noBasementData == false || this.$v.form.subBasement.$invalid && this.noSubBasementData == false || this.$v.form.mine.$invalid && this.noMineData == false || this.$v.form.subMine.$invalid && this.noSubMineData == false) {
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
      var nodeformData = new FormData();
      nodeformData.append('categorization_id', this.editableCategorizationId);
      nodeformData.append('node_type', this.categorizationLevel);
      nodeformData.append('node_id', this.categorizationNodeId);
      nodeformData.append('node_name', this.categorizationNodeName);
      nodeformData.append('industry_id', this.form.industry.id);
      nodeformData.append('action_type', this.taxonomyActionType);
      nodeformData.append('media_id', this.mediaUuid);
      _apis_User__WEBPACK_IMPORTED_MODULE_6__["default"].updateAudioVideoNodes(nodeformData).then(function (response) {
        _this23.isDisabled = false;
        _this23.isLoading = false;

        if (response.data.success) {
          if (null == _this23.lookupId) {
            _this23.lookupId = response.data.data.lookupId;
          } else {
            _this23.lookupId = _this23.lookupId + ',' + response.data.data.lookupId;
          }

          if (_this23.savedCategories !== "") {
            _this23.lookupId = _this23.lookupId + ',' + _this23.savedCategories;
          }
          /*this.clearNodeValue('industry', 'Input')
          this.categorizationLevel = ""
          this.categorizationNodeId = ""*/


          if (_this23.taxonomyActionType == 'edit') {
            _this23.getMediaHierarchyInfoForNodeCollapses('', _this23.$route.params.id);
          } else {
            _this23.getMediaHierarchyInfoForNodeCollapses(_this23.lookupId, '');
          }

          if (callFrom == 'saveAndClose') {
            _this23.$parent.editCancel();
          } //toastr.success(response.data.success.message)


          _this23.$parent.showAddAnotherClassificationMessage(response.data.success.message, true, 'success');

          _this23.$v.$reset();
          /*Reset all editable flags*/


          _this23.enabledEditMode = false;

          _this23.loadLastTabDataFromStorage(_this23.multipleNodes.length);
        }
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this23.$parent.showAddAnotherClassificationMessage(error.response.data.error.message, true, 'danger');
        } else if (error.response.status == 401) {
          localStorage.clear();

          _this23.$router.push({
            name: "Login"
          });
        } else {
          _this23.$parent.showAddAnotherClassificationMessage(error, true, 'danger');
        }

        _this23.isLoading = false;
      });
    },
    gotoParentSaveAndClose: function gotoParentSaveAndClose() {
      this.$parent.saveAndClose();
    },
    setLabelWidth: function setLabelWidth() {
      var nodes = document.getElementsByClassName('set-auto-height');
      var total_nodes = nodes.length;
      var increment_value = 36 / total_nodes;
      var max_width = 100;

      for (var i = 0; i < nodes.length; i++) {
        max_width = max_width - increment_value;
        nodes[i].style.width = max_width + '%';
      }
    },
    getMediaHierarchyInfo: function getMediaHierarchyInfo(cat_id, file_id) {
      var _this24 = this;

      axios.get('/api/get-media-categorization-lookup?categorization_id=' + cat_id + '&file_id=' + file_id).then(function (response) {
        _this24.isLoading = false;
        _this24.showSectorField = _this24.sectorRequired = false;
        _this24.showSubSectorField = _this24.subSectorRequired = false;
        _this24.showGroupField = _this24.groupRequired = false;
        _this24.showSubGroupField = _this24.subGroupRequired = false;
        _this24.showEchelonField = _this24.echelonRequired = false;
        _this24.showSubEchelonField = _this24.subEchelonRequired = false;
        _this24.showTierField = _this24.tierRequired = false;
        _this24.showSubTierField = _this24.subTierRequired = false;
        _this24.showLayerField = _this24.layerRequired = false;
        _this24.showSubLayerField = _this24.subLayerRequired = false;
        _this24.showDeckField = _this24.deckRequired = false;
        _this24.showSubDeckField = _this24.subDeckRequired = false;
        _this24.showFloorField = _this24.floorRequired = false;
        _this24.showSubFloorField = _this24.subFloorRequired = false;
        _this24.showBasementField = _this24.basementRequired = false;
        _this24.showSubBasementField = _this24.subBasementRequired = false;
        _this24.showMineField = _this24.mineRequired = false;
        _this24.showSubMineField = _this24.subMineRequired = false;
        var mediaHierarchyInfo = response.data.data;

        if (!!mediaHierarchyInfo.industry) {
          _this24.form.industry = mediaHierarchyInfo.industry;

          _this24.getSectors(mediaHierarchyInfo.industry, 'Input', false);
        }

        if (!!mediaHierarchyInfo.sector) {
          _this24.form.sector = mediaHierarchyInfo.sector;

          _this24.getSubSectors(mediaHierarchyInfo.sector, 'Input', false);

          _this24.showSectorField = true;
          _this24.sectorRequired = true;
        }

        if (!!mediaHierarchyInfo.sub_sector) {
          _this24.form.subSector = mediaHierarchyInfo.sub_sector;

          _this24.getGroups(_this24.form.subSector, 'Input', false);

          _this24.showSubSectorField = true;
          _this24.subSectorRequired = true;
        }

        if (!!mediaHierarchyInfo.group) {
          _this24.form.group = mediaHierarchyInfo.group;

          _this24.getSubGroups(_this24.form.group, 'Input', false);

          _this24.showGroupField = true;
          _this24.groupRequired = true;
        }

        if (!!mediaHierarchyInfo.sub_group) {
          _this24.form.subGroup = mediaHierarchyInfo.sub_group;

          _this24.getEchelons(_this24.form.subGroup, 'Input', false);

          _this24.showSubGroupField = true;
          _this24.subGroupRequired = true;
        }

        if (!!mediaHierarchyInfo.echelon) {
          // this.echelons = [mediaHierarchyInfo.echelon]
          _this24.form.echelon = mediaHierarchyInfo.echelon;

          _this24.getSubEchelons(_this24.form.echelon, 'Input', false);

          _this24.showEchelonField = true;
          _this24.echelonRequired = true;
        }

        if (!!mediaHierarchyInfo.sub_echelon) {
          // this.subEchelons = [mediaHierarchyInfo.sub_echelon]
          _this24.form.subEchelon = mediaHierarchyInfo.sub_echelon;

          _this24.getTiers(_this24.form.subEchelon, 'Input', false);

          _this24.showSubEchelonField = true;
          _this24.subEchelonRequired = true;
        }

        if (!!mediaHierarchyInfo.tier) {
          // this.tiers = [mediaHierarchyInfo.tier]
          _this24.form.tier = mediaHierarchyInfo.tier;

          _this24.getSubTiers(_this24.form.tier, 'Input', false);

          _this24.showTierField = true;
          _this24.tierRequired = true;
        }

        if (!!mediaHierarchyInfo.sub_tier) {
          // this.subTiers = [mediaHierarchyInfo.sub_tier]
          _this24.form.subTier = mediaHierarchyInfo.sub_tier;

          _this24.getLayers(_this24.form.subTier, 'Input', false);

          _this24.showSubTierField = true;
          _this24.subTierRequired = true;
        }

        if (!!mediaHierarchyInfo.layer) {
          // this.layers = [mediaHierarchyInfo.layer]
          _this24.form.layer = mediaHierarchyInfo.layer;

          _this24.getSubLayers(_this24.form.layer, 'Input', false);

          _this24.showLayerField = true;
          _this24.layerRequired = true;
        }

        if (!!mediaHierarchyInfo.sub_layer) {
          // this.subLayers = [mediaHierarchyInfo.sub_layer]
          _this24.form.subLayer = mediaHierarchyInfo.sub_layer;

          _this24.getDecks(_this24.form.subLayer, 'Input', false);

          _this24.showSubLayerField = true;
          _this24.subLayerRequired = true;
        }

        if (!!mediaHierarchyInfo.deck) {
          // this.decks = [mediaHierarchyInfo.deck]
          _this24.form.deck = mediaHierarchyInfo.deck;

          _this24.getSubDecks(_this24.form.deck, 'Input', false);

          _this24.showDeckField = true;
          _this24.deckRequired = true;
        }

        if (!!mediaHierarchyInfo.sub_deck) {
          // this.decks = [mediaHierarchyInfo.sub_deck]
          _this24.form.deck = mediaHierarchyInfo.sub_deck;

          _this24.getFloors(_this24.form.subDeck, 'Input', false);

          _this24.showSubDeckField = true;
          _this24.subDeckRequired = true;
        }

        if (!!mediaHierarchyInfo.floor) {
          // this.floors = [mediaHierarchyInfo.floor]
          _this24.form.floor = mediaHierarchyInfo.floor;

          _this24.getSubFloors(_this24.form.floor, 'Input', false);

          _this24.showFloorField = true;
          _this24.floorRequired = true;
        }

        if (!!mediaHierarchyInfo.sub_floor) {
          // this.subFloors = [mediaHierarchyInfo.sub_floor]
          _this24.form.subFloor = mediaHierarchyInfo.sub_floor;

          _this24.getBasements(_this24.form.subFloor, 'Input', false);

          _this24.showSubFloorField = true;
          _this24.subFloorRequired = true;
        }

        if (!!mediaHierarchyInfo.basement) {
          // this.basements = [mediaHierarchyInfo.basement]
          _this24.form.basement = mediaHierarchyInfo.basement;

          _this24.getSubBasements(_this24.form.basement, 'Input', false);

          _this24.showBasementField = true;
          _this24.basementRequired = true;
        }

        if (!!mediaHierarchyInfo.sub_basement) {
          // this.subBasements = [mediaHierarchyInfo.sub_basement]
          _this24.form.subBasement = mediaHierarchyInfo.sub_basement;

          _this24.getMines(_this24.form.subBasement, 'Input', false);

          _this24.showSubBasementField = true;
          _this24.subBasementRequired = true;
        }

        if (!!mediaHierarchyInfo.mine) {
          //this.mines = [mediaHierarchyInfo.mine]
          _this24.form.mine = mediaHierarchyInfo.mine;

          _this24.getSubMines(_this24.form.mine, 'Input', false);

          _this24.showMineField = true;
          _this24.mineRequired = true;
        }

        if (!!mediaHierarchyInfo.sub_mine) {
          //this.subMines = [mediaHierarchyInfo.sub_mine]
          _this24.form.subMine = mediaHierarchyInfo.sub_mine;
          _this24.showSubMineField = true;
          _this24.subMineRequired = true;
        }
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this24.$router.push({
            name: "Content"
          });
        } else {
          console.log(error);
        }
      });
    },
    generateDropdown: function generateDropdown(level) {
      // console.log(level)
      switch (level) {
        case 'sector':
          this.getSubSectors(this.form.sector, 'Input', false);
          this.categorizationLevel = 'Sector';
          this.categorizationNodeId = this.form.sector.id;
          this.categorizationNodeName = this.form.sector.description;
          break;

        case 'sub_sector':
          this.getGroups(this.form.subSector, 'Input', false);
          this.categorizationLevel = 'SubSector';
          this.categorizationNodeId = this.form.subSector.id;
          this.categorizationNodeName = this.form.subSector.description;
          break;

        case 'group':
          this.getSubGroups(this.form.group, 'Input', false);
          this.categorizationLevel = 'Group';
          this.categorizationNodeId = this.form.group.id;
          this.categorizationNodeName = this.form.group.description;
          break;

        case 'sub_group':
          this.getEchelons(this.form.subGroup, 'Input', false);
          this.categorizationLevel = 'SubGroup';
          this.categorizationNodeId = this.form.subGroup.id;
          this.categorizationNodeName = this.form.subGroup.description;
          break;

        case 'echelon':
          this.getSubEchelons(this.form.echelon, 'Input', false);
          this.categorizationLevel = 'Echelon';
          this.categorizationNodeId = this.form.echelon.id;
          this.categorizationNodeName = this.form.echelon.description;
          break;

        case 'sub_echelon':
          this.getTiers(this.form.subEchelon, 'Input', false);
          this.categorizationLevel = 'SubEchelon';
          this.categorizationNodeId = this.form.subEchelon.id;
          this.categorizationNodeName = this.form.subEchelon.description;
          break;

        case 'tier':
          this.getSubTiers(this.form.tier, 'Input', false);
          this.categorizationLevel = 'Tier';
          this.categorizationNodeId = this.form.tier.id;
          this.categorizationNodeName = this.form.tier.description;
          break;

        case 'sub_tier':
          this.getLayers(this.form.subTier, 'Input', false);
          this.categorizationLevel = 'SubTier';
          this.categorizationNodeId = this.form.subTier.id;
          this.categorizationNodeName = this.form.subTier.description;
          break;

        case 'layer':
          this.getSubLayers(this.form.layer, 'Input', false);
          this.categorizationLevel = 'Layer';
          this.categorizationNodeId = this.form.layer.id;
          this.categorizationNodeName = this.form.layer.description;
          break;

        case 'sub_layer':
          this.getDecks(this.form.subLayer, 'Input', false);
          this.categorizationLevel = 'SubLayer';
          this.categorizationNodeId = this.form.subLayer.id;
          this.categorizationNodeName = this.form.subLayer.description;
          break;

        case 'deck':
          this.getSubDecks(this.form.deck, 'Input', false);
          this.categorizationLevel = 'Deck';
          this.categorizationNodeId = this.form.deck.id;
          this.categorizationNodeName = this.form.deck.description;
          break;

        case 'sub_deck':
          this.getFloors(this.form.subDeck, 'Input', false);
          this.categorizationLevel = 'SubDeck';
          this.categorizationNodeId = this.form.subDeck.id;
          this.categorizationNodeName = this.form.subDeck.description;
          break;

        case 'floor':
          this.getSubFloors(this.form.floor, 'Input', false);
          this.categorizationLevel = 'Floor';
          this.categorizationNodeId = this.form.floor.id;
          this.categorizationNodeName = this.form.floor.description;
          break;

        case 'sub_floor':
          this.getBasements(this.form.subFloor, 'Input', false);
          this.categorizationLevel = 'SubFloor';
          this.categorizationNodeId = this.form.subFloor.id;
          this.categorizationNodeName = this.form.subFloor.description;
          break;

        case 'basement':
          this.getSubBasements(this.form.basement, 'Input', false);
          this.categorizationLevel = 'Basement';
          this.categorizationNodeId = this.form.basement.id;
          this.categorizationNodeName = this.form.basement.description;
          break;

        case 'sub_basement':
          this.getMines(this.form.subBasement, 'Input', false);
          this.categorizationLevel = 'SubBasement';
          this.categorizationNodeId = this.form.subBasement.id;
          this.categorizationNodeName = this.form.subBasement.description;
          break;

        case 'mine':
          this.getSubMines(this.form.mine, 'Input', false);
          this.categorizationLevel = 'Mine';
          this.categorizationNodeId = this.form.mine.id;
          this.categorizationNodeName = this.form.mine.description;
          break;

        case 'sub_mine':
          this.categorizationLevel = 'SubMine', this.categorizationNodeId = this.form.subMine.id;
          this.categorizationNodeName = this.form.subMine.description;
          break;
      }
    },
    setPreviousSavedData: function setPreviousSavedData() {
      if (this.taxonomyIndustryData !== null) {
        this.industries = this.taxonomyIndustryData; // let listOfObjects = Object.keys(this.taxonomyIndustryData).map((key) => {
        //     return this.taxonomyIndustryData[key].lookup_id
        // })
        // if(listOfObjects){
        //     this.getMediaHierarchyInfoForNodeCollapses(listOfObjects.join(', '))
        // }
      }
    },
    getMediaHierarchyInfoForNodeCollapses: function getMediaHierarchyInfoForNodeCollapses(id, mediaId) {
      var _this25 = this;

      axios.get('/api/get-media-categorization-lookup-for-collapse?id=' + id + '&mediaId=' + mediaId + '&userInfo=' + localStorage.getItem("userInfo")).then(function (response) {
        _this25.isLoading = false;
        _this25.multipleNodes = response.data.data;
        /*Active the Last Saved Node Tab*/

        _this25.activeTab = _this25.multipleNodes.length;

        if (_this25.multipleNodes.length > 2) {
          _this25.enableTabNavigation = true; // let vi = this;

          setTimeout(function () {
            // vi.navigateTabScrollOnRight();
            var content = document.querySelector(".nav-tabs");
            content.scrollLeft += 300;
          }, 500);
        }
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this25.$router.push({
            name: "Content"
          });
        } else {
          console.log(error);
        }
      });
    },
    updateViewKey: function updateViewKey() {
      this.$emit("updateViewKey");
    },
    getSavedCategoriesData: function getSavedCategoriesData() {
      var _this26 = this;

      // get all media categorization lookup id for selected file
      _apis_AudioVideo__WEBPACK_IMPORTED_MODULE_7__["default"].getMediaCategorizationLooupIdByUuid(this.mediaUuid).then(function (response) {
        _this26.savedCategories = response.data.data;

        if (_this26.savedCategories != "") {
          _this26.getMediaHierarchyInfoForNodeCollapses(_this26.savedCategories, '');
        }
      })["catch"](function (error) {
        if (error.response.status === 403) {
          _this26.$router.push({
            name: "Content"
          });
        } else {
          console.log(error);
        }
      });
    },
    cancelMetaDataAdd: function cancelMetaDataAdd() {
      if (this.hierarchyType == 'Audio') {
        this.$router.push({
          name: "Content",
          'hash': '#audio'
        });
      } else {
        this.$router.push({
          name: "Content"
        });
      }
    }
  },
  created: function created() {
    this.nodeColor = _apis_Common__WEBPACK_IMPORTED_MODULE_8__["default"].hierarchyNodeColor;
    this.responseParents();
    this.getIndustries(); // if (this.$route.params.id != undefined) {
    //     this.addedMediaId = this.$route.params.id;
    //     this.getMediaHierarchyInfoForNodeCollapses('', this.$route.params.id);
    // }

    if (this.$route.params.id != undefined && this.$route.params.fileId != undefined) {
      this.getMediaHierarchyInfo(this.$route.params.fileId, this.$route.params.id);
    }

    this.getSavedCategoriesData();
  },
  components: {
    CompanyNodeCollapses: _CompanyNodeCollapses__WEBPACK_IMPORTED_MODULE_1__["default"],
    MediaCategoryTabContent: _MediaCategoryTabContent__WEBPACK_IMPORTED_MODULE_2__["default"],
    MediaCategoryCurrentPathway: _MediaCategoryCurrentPathway__WEBPACK_IMPORTED_MODULE_3__["default"],
    loader: _components_Loader__WEBPACK_IMPORTED_MODULE_4__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_5___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MediaCategoryCurrentPathway.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MediaCategoryCurrentPathway.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/Common */ "./resources/js/apis/Common.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MediaCategoryCurrentPathway",
  props: ["form", "enabledEditMode"],
  data: function data() {
    return {
      isActive: false,
      checkAction: "",
      taxonomyType: ""
    };
  },
  methods: {
    keyUpdateOfParent: function keyUpdateOfParent() {
      this.$parent.updateViewKey();
    }
  },
  created: function created() {
    this.taxonomyType = this.$parent.taxonomyType;
    this.checkAction = this.$parent.taxonomyActionType;
    this.nodeColor = _apis_Common__WEBPACK_IMPORTED_MODULE_0__["default"].hierarchyNodeColor;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MediaCategoryTabContent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MediaCategoryTabContent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/Common */ "./resources/js/apis/Common.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "MediaCategoryTabContent",
  props: ["each", "objectIndex"],
  data: function data() {
    return {
      isActive: false,
      checkAction: "",
      taxonomyType: ""
    };
  },
  methods: {
    keyUpdateOfParent: function keyUpdateOfParent() {
      this.$parent.updateViewKey();
    }
  },
  created: function created() {
    this.taxonomyType = this.$parent.taxonomyType;
    this.checkAction = this.$parent.taxonomyActionType;
    this.nodeColor = _apis_Common__WEBPACK_IMPORTED_MODULE_0__["default"].hierarchyNodeColor;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AudioVideoHierarchy.vue?vue&type=style&index=0&id=07e29755&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AudioVideoHierarchy.vue?vue&type=style&index=0&id=07e29755&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.background-darkblue[data-v-07e29755] {\n    background: #5352ED;\n}\n.text-darkblue[data-v-07e29755] {\n    color: #1e0857;\n}\n.btn.activate-btn[data-v-07e29755] {\n    background-color: rgb(255 196 46);\n}\n.btn.activate-btn[data-v-07e29755]:hover {\n    background-color: rgb(217 168 45);\n}\n.btn-clear-form[data-v-07e29755]{\n    padding: 7px 18px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AudioVideoHierarchy.vue?vue&type=style&index=0&id=07e29755&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AudioVideoHierarchy.vue?vue&type=style&index=0&id=07e29755&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AudioVideoHierarchy.vue?vue&type=style&index=0&id=07e29755&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AudioVideoHierarchy.vue?vue&type=style&index=0&id=07e29755&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AudioVideoHierarchy.vue?vue&type=template&id=07e29755&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AudioVideoHierarchy.vue?vue&type=template&id=07e29755&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "row" },
    [
      _c("div", { staticClass: "col-lg-6 col-md-6" }, [
        _c(
          "div",
          { staticClass: "panel-body categorization-selection" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("v-select", {
              ref: "industry",
              class: { "is-invalid": _vm.$v.form.industry.$error },
              attrs: {
                label: "description",
                options: _vm.industries,
                clearable: false,
                disabled: _vm.disabledInputs,
                id: "audioVideoIndustry",
                placeholder: "Select from Drop Down"
              },
              on: {
                input: function($event) {
                  return _vm.getSectors(_vm.form.industry, "Input")
                }
              },
              model: {
                value: _vm.form.industry,
                callback: function($$v) {
                  _vm.$set(_vm.form, "industry", $$v)
                },
                expression: "form.industry"
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "b-modal",
                    rawName: "v-b-modal.modal-add-suggestion",
                    modifiers: { "modal-add-suggestion": true }
                  }
                ],
                staticClass: "mt-1 mb-2 add-multiple",
                class: { disabled: _vm.form.industry == "" },
                on: {
                  click: function($event) {
                    return _vm.sendHierarchyInfo(
                      "Industry",
                      _vm.form.industry.id,
                      _vm.form.industry.description,
                      _vm.form.industry.id
                    )
                  }
                }
              },
              [_vm._v("\n                + Add Suggestion\n            ")]
            ),
            _vm._v(" "),
            !_vm.$v.form.industry.required
              ? _c("div", { staticClass: "invalid-feedback" }, [
                  _vm._v("Industry is\n                required.\n            ")
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.showSectorField
              ? _c(
                  "div",
                  { staticClass: "clearfix" },
                  [
                    _c(
                      "label",
                      { staticClass: "control-label font-weight-bold" },
                      [
                        _vm._v("Sector"),
                        _vm.sectorRequired
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*")
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "sector",
                      class: { "is-invalid": _vm.$v.form.sector.$error },
                      attrs: {
                        label: "description",
                        options: _vm.sectors,
                        clearable: false,
                        disabled: _vm.disabledInputs,
                        placeholder: "Select from Drop Down"
                      },
                      on: {
                        input: function($event) {
                          return _vm.getSubSectors(_vm.form.sector, "Input")
                        }
                      },
                      model: {
                        value: _vm.form.sector,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "sector", $$v)
                        },
                        expression: "form.sector"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal-add-suggestion",
                            modifiers: { "modal-add-suggestion": true }
                          }
                        ],
                        staticClass: "mt-1 mb-2 add-multiple",
                        class: { disabled: _vm.form.sector == "" },
                        on: {
                          click: function($event) {
                            return _vm.sendHierarchyInfo(
                              "Sector",
                              _vm.form.sector.id,
                              _vm.form.sector.description,
                              _vm.form.industry.id
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    + Add Suggestion\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    !_vm.$v.form.sector.required
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "Please select the lowest possible\n                    classification befitting your product or service.\n                "
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.showSubSectorField
              ? _c(
                  "div",
                  { staticClass: "clearfix" },
                  [
                    _c(
                      "label",
                      { staticClass: "control-label font-weight-bold" },
                      [
                        _vm._v("Sub Sector"),
                        _vm.subSectorRequired
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*")
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "subSector",
                      class: { "is-invalid": _vm.$v.form.subSector.$error },
                      attrs: {
                        label: "description",
                        options: _vm.subSectors,
                        clearable: false,
                        disabled: _vm.disabledInputs,
                        placeholder: "Select from Drop Down"
                      },
                      on: {
                        input: function($event) {
                          return _vm.getGroups(_vm.form.subSector, "Input")
                        }
                      },
                      model: {
                        value: _vm.form.subSector,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "subSector", $$v)
                        },
                        expression: "form.subSector"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal-add-suggestion",
                            modifiers: { "modal-add-suggestion": true }
                          }
                        ],
                        staticClass: "mt-1 mb-2 add-multiple",
                        class: { disabled: _vm.form.subSector == "" },
                        on: {
                          click: function($event) {
                            return _vm.sendHierarchyInfo(
                              "SubSector",
                              _vm.form.subSector.id,
                              _vm.form.subSector.description,
                              _vm.form.sector.id
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    + Add Suggestion\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    !_vm.$v.form.subSector.required
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "Please select the lowest possible\n                    classification befitting your product or service.\n                "
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.showGroupField
              ? _c(
                  "div",
                  { staticClass: "clearfix" },
                  [
                    _c(
                      "label",
                      { staticClass: "control-label font-weight-bold" },
                      [
                        _vm._v("Group"),
                        _vm.groupRequired
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*")
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "group",
                      class: { "is-invalid": _vm.$v.form.group.$error },
                      attrs: {
                        label: "description",
                        options: _vm.groups,
                        disabled: _vm.disabledInputs,
                        clearable: false,
                        placeholder: "Select from Drop Down"
                      },
                      on: {
                        input: function($event) {
                          return _vm.getSubGroups(_vm.form.group, "Input")
                        }
                      },
                      model: {
                        value: _vm.form.group,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "group", $$v)
                        },
                        expression: "form.group"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal-add-suggestion",
                            modifiers: { "modal-add-suggestion": true }
                          }
                        ],
                        staticClass: "mt-1 mb-2 add-multiple",
                        class: { disabled: _vm.form.group == "" },
                        on: {
                          click: function($event) {
                            return _vm.sendHierarchyInfo(
                              "Group",
                              _vm.form.group.id,
                              _vm.form.group.description,
                              _vm.form.subSector.id
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    + Add Suggestion\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    !_vm.$v.form.group.required
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "Please select the lowest possible\n                    classification befitting your product or service.\n                "
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.showSubGroupField
              ? _c(
                  "div",
                  { staticClass: "clearfix" },
                  [
                    _c(
                      "label",
                      { staticClass: "control-label font-weight-bold" },
                      [
                        _vm._v("Sub Group"),
                        _vm.subGroupRequired
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*")
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "subGroup",
                      class: { "is-invalid": _vm.$v.form.subGroup.$error },
                      attrs: {
                        label: "description",
                        options: _vm.subGroups,
                        clearable: false,
                        disabled: _vm.disabledInputs,
                        placeholder: "Select from Drop Down"
                      },
                      on: {
                        input: function($event) {
                          return _vm.getEchelons(_vm.form.subGroup, "Input")
                        }
                      },
                      model: {
                        value: _vm.form.subGroup,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "subGroup", $$v)
                        },
                        expression: "form.subGroup"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal-add-suggestion",
                            modifiers: { "modal-add-suggestion": true }
                          }
                        ],
                        staticClass: "mt-1 mb-2 add-multiple",
                        class: { disabled: _vm.form.subGroup == "" },
                        on: {
                          click: function($event) {
                            return _vm.sendHierarchyInfo(
                              "SubGroup",
                              _vm.form.subGroup.id,
                              _vm.form.subGroup.description,
                              _vm.form.group.id
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    + Add Suggestion\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    !_vm.$v.form.subGroup.required
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "Please select the lowest possible\n                    classification befitting your product or service.\n                "
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.showEchelonField
              ? _c(
                  "div",
                  { staticClass: "clearfix" },
                  [
                    _c(
                      "label",
                      { staticClass: "control-label font-weight-bold" },
                      [
                        _vm._v("Echelon"),
                        _vm.echelonRequired
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*")
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "echelon",
                      class: { "is-invalid": _vm.$v.form.echelon.$error },
                      attrs: {
                        label: "description",
                        options: _vm.echelons,
                        clearable: false,
                        disabled: _vm.disabledInputs,
                        placeholder: "Select from Drop Down"
                      },
                      on: {
                        input: function($event) {
                          return _vm.getSubEchelons(_vm.form.echelon, "Input")
                        }
                      },
                      model: {
                        value: _vm.form.echelon,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "echelon", $$v)
                        },
                        expression: "form.echelon"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal-add-suggestion",
                            modifiers: { "modal-add-suggestion": true }
                          }
                        ],
                        staticClass: "mt-1 mb-2 add-multiple",
                        class: { disabled: _vm.form.echelon == "" },
                        on: {
                          click: function($event) {
                            return _vm.sendHierarchyInfo(
                              "Echelon",
                              _vm.form.echelon.id,
                              _vm.form.echelon.description,
                              _vm.form.subGroup.id
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    + Add Suggestion\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    !_vm.$v.form.echelon.required
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "Please select the lowest possible\n                    classification befitting your product or service.\n                "
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.showSubEchelonField
              ? _c(
                  "div",
                  { staticClass: "clearfix" },
                  [
                    _c(
                      "label",
                      { staticClass: "control-label font-weight-bold" },
                      [
                        _vm._v("Sub Echelon"),
                        _vm.subEchelonRequired
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*")
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "subEchelon",
                      class: { "is-invalid": _vm.$v.form.subEchelon.$error },
                      attrs: {
                        label: "description",
                        options: _vm.subEchelons,
                        clearable: false,
                        disabled: _vm.disabledInputs,
                        placeholder: "Select from Drop Down"
                      },
                      on: {
                        input: function($event) {
                          return _vm.getTiers(_vm.form.subEchelon, "Input")
                        }
                      },
                      model: {
                        value: _vm.form.subEchelon,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "subEchelon", $$v)
                        },
                        expression: "form.subEchelon"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal-add-suggestion",
                            modifiers: { "modal-add-suggestion": true }
                          }
                        ],
                        staticClass: "mt-1 mb-2 add-multiple",
                        class: { disabled: _vm.form.subEchelon == "" },
                        on: {
                          click: function($event) {
                            return _vm.sendHierarchyInfo(
                              "SubEchelon",
                              _vm.form.subEchelon.id,
                              _vm.form.subEchelon.description,
                              _vm.form.echelon.id
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    + Add Suggestion\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    !_vm.$v.form.subEchelon.required
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "Please select the lowest possible\n                    classification befitting your product or service.\n                "
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.showTierField
              ? _c(
                  "div",
                  { staticClass: "clearfix" },
                  [
                    _c(
                      "label",
                      { staticClass: "control-label font-weight-bold" },
                      [
                        _vm._v("Tier"),
                        _vm.tierRequired
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*")
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "tier",
                      class: { "is-invalid": _vm.$v.form.tier.$error },
                      attrs: {
                        label: "description",
                        options: _vm.tiers,
                        clearable: false,
                        disabled: _vm.disabledInputs,
                        placeholder: "Select from Drop Down"
                      },
                      on: {
                        input: function($event) {
                          return _vm.getSubTiers(_vm.form.tier, "Input")
                        }
                      },
                      model: {
                        value: _vm.form.tier,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "tier", $$v)
                        },
                        expression: "form.tier"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal-add-suggestion",
                            modifiers: { "modal-add-suggestion": true }
                          }
                        ],
                        staticClass: "mt-1 mb-2 add-multiple",
                        class: { disabled: _vm.form.tier == "" },
                        on: {
                          click: function($event) {
                            return _vm.sendHierarchyInfo(
                              "Tier",
                              _vm.form.tier.id,
                              _vm.form.tier.description,
                              _vm.form.subEchelon.id
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    + Add Suggestion\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    !_vm.$v.form.tier.required
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "Please select the lowest possible\n                    classification befitting your product or service.\n                "
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.showSubTierField
              ? _c(
                  "div",
                  { staticClass: "clearfix" },
                  [
                    _c(
                      "label",
                      { staticClass: "control-label font-weight-bold" },
                      [
                        _vm._v("Sub Tier"),
                        _vm.subTierRequired
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*")
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "subTier",
                      class: { "is-invalid": _vm.$v.form.subTier.$error },
                      attrs: {
                        label: "description",
                        options: _vm.subTiers,
                        clearable: false,
                        disabled: _vm.disabledInputs,
                        placeholder: "Select from Drop Down"
                      },
                      on: {
                        input: function($event) {
                          return _vm.getLayers(_vm.form.subTier, "Input")
                        }
                      },
                      model: {
                        value: _vm.form.subTier,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "subTier", $$v)
                        },
                        expression: "form.subTier"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal-add-suggestion",
                            modifiers: { "modal-add-suggestion": true }
                          }
                        ],
                        staticClass: "mt-1 mb-2 add-multiple",
                        class: { disabled: _vm.form.subTier == "" },
                        on: {
                          click: function($event) {
                            return _vm.sendHierarchyInfo(
                              "SubTier",
                              _vm.form.subTier.id,
                              _vm.form.subTier.description,
                              _vm.form.tier.id
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    + Add Suggestion\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    !_vm.$v.form.subTier.required
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "Please select the lowest possible\n                    classification befitting your product or service.\n                "
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.showLayerField
              ? _c(
                  "div",
                  { staticClass: "clearfix" },
                  [
                    _c(
                      "label",
                      { staticClass: "control-label font-weight-bold" },
                      [
                        _vm._v("Layer"),
                        _vm.layerRequired
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*")
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "layer",
                      class: { "is-invalid": _vm.$v.form.layer.$error },
                      attrs: {
                        label: "description",
                        options: _vm.layers,
                        clearable: false,
                        disabled: _vm.disabledInputs,
                        placeholder: "Select from Drop Down"
                      },
                      on: {
                        input: function($event) {
                          return _vm.getSubLayers(_vm.form.layer, "Input")
                        }
                      },
                      model: {
                        value: _vm.form.layer,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "layer", $$v)
                        },
                        expression: "form.layer"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal-add-suggestion",
                            modifiers: { "modal-add-suggestion": true }
                          }
                        ],
                        staticClass: "mt-1 mb-2 add-multiple",
                        class: { disabled: _vm.form.layer == "" },
                        on: {
                          click: function($event) {
                            return _vm.sendHierarchyInfo(
                              "Layer",
                              _vm.form.layer.id,
                              _vm.form.layer.description,
                              _vm.form.subTier.id
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    + Add Suggestion\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    !_vm.$v.form.layer.required
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "Please select the lowest possible\n                    classification befitting your product or service.\n                "
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.showSubLayerField
              ? _c(
                  "div",
                  { staticClass: "clearfix" },
                  [
                    _c(
                      "label",
                      { staticClass: "control-label font-weight-bold" },
                      [
                        _vm._v("Sub Layer"),
                        _vm.subLayerRequired
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*")
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "subLayer",
                      class: { "is-invalid": _vm.$v.form.subLayer.$error },
                      attrs: {
                        label: "description",
                        options: _vm.subLayers,
                        clearable: false,
                        disabled: _vm.disabledInputs,
                        placeholder: "Select from Drop Down"
                      },
                      on: {
                        input: function($event) {
                          return _vm.getDecks(_vm.form.subLayer, "Input")
                        }
                      },
                      model: {
                        value: _vm.form.subLayer,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "subLayer", $$v)
                        },
                        expression: "form.subLayer"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal-add-suggestion",
                            modifiers: { "modal-add-suggestion": true }
                          }
                        ],
                        staticClass: "mt-1 mb-2 add-multiple",
                        class: { disabled: _vm.form.subLayer == "" },
                        on: {
                          click: function($event) {
                            return _vm.sendHierarchyInfo(
                              "SubLayer",
                              _vm.form.subLayer.id,
                              _vm.form.subLayer.description,
                              _vm.form.layer.id
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    + Add Suggestion\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    !_vm.$v.form.subLayer.required
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "Please select the lowest possible\n                    classification befitting your product or service.\n                "
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.showDeckField
              ? _c(
                  "div",
                  { staticClass: "clearfix" },
                  [
                    _c(
                      "label",
                      { staticClass: "control-label font-weight-bold" },
                      [
                        _vm._v("Deck"),
                        _vm.deckRequired
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*")
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "deck",
                      class: { "is-invalid": _vm.$v.form.deck.$error },
                      attrs: {
                        label: "description",
                        options: _vm.decks,
                        clearable: false,
                        disabled: _vm.disabledInputs,
                        placeholder: "Select from Drop Down"
                      },
                      on: {
                        input: function($event) {
                          return _vm.getSubDecks(_vm.form.deck, "Input")
                        }
                      },
                      model: {
                        value: _vm.form.deck,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "deck", $$v)
                        },
                        expression: "form.deck"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal-add-suggestion",
                            modifiers: { "modal-add-suggestion": true }
                          }
                        ],
                        staticClass: "mt-1 mb-2 add-multiple",
                        class: { disabled: _vm.form.deck == "" },
                        on: {
                          click: function($event) {
                            return _vm.sendHierarchyInfo(
                              "Deck",
                              _vm.form.deck.id,
                              _vm.form.deck.description,
                              _vm.form.subLayer.id
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    + Add Suggestion\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    !_vm.$v.form.deck.required
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "Please select the lowest possible\n                    classification befitting your product or service.\n                "
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.showSubDeckField
              ? _c(
                  "div",
                  { staticClass: "clearfix" },
                  [
                    _c(
                      "label",
                      { staticClass: "control-label font-weight-bold" },
                      [
                        _vm._v("Sub Deck"),
                        _vm.subDeckRequired
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*")
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "subDeck",
                      class: { "is-invalid": _vm.$v.form.subDeck.$error },
                      attrs: {
                        label: "description",
                        options: _vm.subDecks,
                        clearable: false,
                        disabled: _vm.disabledInputs,
                        placeholder: "Select from Drop Down"
                      },
                      on: {
                        input: function($event) {
                          return _vm.getFloors(_vm.form.subDeck, "Input")
                        }
                      },
                      model: {
                        value: _vm.form.subDeck,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "subDeck", $$v)
                        },
                        expression: "form.subDeck"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal-add-suggestion",
                            modifiers: { "modal-add-suggestion": true }
                          }
                        ],
                        staticClass: "mt-1 mb-2 add-multiple",
                        class: { disabled: _vm.form.subDeck == "" },
                        on: {
                          click: function($event) {
                            return _vm.sendHierarchyInfo(
                              "SubDeck",
                              _vm.form.subDeck.id,
                              _vm.form.subDeck.description,
                              _vm.form.deck.id
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    + Add Suggestion\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    !_vm.$v.form.subDeck.required
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "Please select the lowest possible\n                    classification befitting your product or service.\n                "
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.showFloorField
              ? _c(
                  "div",
                  { staticClass: "clearfix" },
                  [
                    _c(
                      "label",
                      { staticClass: "control-label font-weight-bold" },
                      [
                        _vm._v("Floor"),
                        _vm.floorRequired
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*")
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "floor",
                      class: { "is-invalid": _vm.$v.form.floor.$error },
                      attrs: {
                        label: "description",
                        options: _vm.floors,
                        clearable: false,
                        disabled: _vm.disabledInputs,
                        placeholder: "Select from Drop Down"
                      },
                      on: {
                        input: function($event) {
                          return _vm.getSubFloors(_vm.form.floor, "Input")
                        }
                      },
                      model: {
                        value: _vm.form.floor,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "floor", $$v)
                        },
                        expression: "form.floor"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal-add-suggestion",
                            modifiers: { "modal-add-suggestion": true }
                          }
                        ],
                        staticClass: "mt-1 mb-2 add-multiple",
                        class: { disabled: _vm.form.floor == "" },
                        on: {
                          click: function($event) {
                            return _vm.sendHierarchyInfo(
                              "Floor",
                              _vm.form.floor.id,
                              _vm.form.floor.description,
                              _vm.form.subDeck.id
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    + Add Suggestion\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    !_vm.$v.form.floor.required
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "Please select the lowest possible\n                    classification befitting your product or service.\n                "
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.showSubFloorField
              ? _c(
                  "div",
                  { staticClass: "clearfix" },
                  [
                    _c(
                      "label",
                      { staticClass: "control-label font-weight-bold" },
                      [
                        _vm._v("Sub Floor"),
                        _vm.subFloorRequired
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*")
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "subFloor",
                      class: { "is-invalid": _vm.$v.form.subFloor.$error },
                      attrs: {
                        label: "description",
                        options: _vm.subFloors,
                        clearable: false,
                        disabled: _vm.disabledInputs,
                        placeholder: "Select from Drop Down"
                      },
                      on: {
                        input: function($event) {
                          return _vm.getBasements(_vm.form.subFloor, "Input")
                        }
                      },
                      model: {
                        value: _vm.form.subFloor,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "subFloor", $$v)
                        },
                        expression: "form.subFloor"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal-add-suggestion",
                            modifiers: { "modal-add-suggestion": true }
                          }
                        ],
                        staticClass: "mt-1 mb-2 add-multiple",
                        class: { disabled: _vm.form.subFloor == "" },
                        on: {
                          click: function($event) {
                            return _vm.sendHierarchyInfo(
                              "SubFloor",
                              _vm.form.subFloor.id,
                              _vm.form.subFloor.description,
                              _vm.form.floor.id
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    + Add Suggestion\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    !_vm.$v.form.subFloor.required
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "Please select the lowest possible\n                    classification befitting your product or service.\n                "
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.showBasementField
              ? _c(
                  "div",
                  { staticClass: "clearfix" },
                  [
                    _c(
                      "label",
                      { staticClass: "control-label font-weight-bold" },
                      [
                        _vm._v("Basement"),
                        _vm.basementRequired
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*")
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "basement",
                      class: { "is-invalid": _vm.$v.form.basement.$error },
                      attrs: {
                        label: "description",
                        options: _vm.basements,
                        clearable: false,
                        disabled: _vm.disabledInputs,
                        placeholder: "Select from Drop Down"
                      },
                      on: {
                        input: function($event) {
                          return _vm.getSubBasements(_vm.form.basement, "Input")
                        }
                      },
                      model: {
                        value: _vm.form.basement,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "basement", $$v)
                        },
                        expression: "form.basement"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal-add-suggestion",
                            modifiers: { "modal-add-suggestion": true }
                          }
                        ],
                        staticClass: "mt-1 mb-2 add-multiple",
                        class: { disabled: _vm.form.basement == "" },
                        on: {
                          click: function($event) {
                            return _vm.sendHierarchyInfo(
                              "Basement",
                              _vm.form.basement.id,
                              _vm.form.basement.description,
                              _vm.form.subFloor.id
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    + Add Suggestion\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    !_vm.$v.form.basement.required
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "Please select the lowest possible\n                    classification befitting your product or service.\n                "
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.showSubBasementField
              ? _c(
                  "div",
                  { staticClass: "clearfix" },
                  [
                    _c(
                      "label",
                      { staticClass: "control-label font-weight-bold" },
                      [
                        _vm._v("Sub Basement"),
                        _vm.subBasementRequired
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*")
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "subBasement",
                      class: { "is-invalid": _vm.$v.form.subBasement.$error },
                      attrs: {
                        label: "description",
                        options: _vm.subBasements,
                        clearable: false,
                        disabled: _vm.disabledInputs,
                        placeholder: "Select from Drop Down"
                      },
                      on: {
                        input: function($event) {
                          return _vm.getMines(_vm.form.subBasement, "Input")
                        }
                      },
                      model: {
                        value: _vm.form.subBasement,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "subBasement", $$v)
                        },
                        expression: "form.subBasement"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal-add-suggestion",
                            modifiers: { "modal-add-suggestion": true }
                          }
                        ],
                        staticClass: "mt-1 mb-2 add-multiple",
                        class: { disabled: _vm.form.subBasement == "" },
                        on: {
                          click: function($event) {
                            return _vm.sendHierarchyInfo(
                              "SubBasement",
                              _vm.form.subBasement.id,
                              _vm.form.subBasement.description,
                              _vm.form.basement.id
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    + Add Suggestion\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    !_vm.$v.form.subBasement.required
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "Please select the lowest possible\n                    classification befitting your product or service.\n                "
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.showMineField
              ? _c(
                  "div",
                  { staticClass: "clearfix" },
                  [
                    _c(
                      "label",
                      { staticClass: "control-label font-weight-bold" },
                      [
                        _vm._v("Mine"),
                        _vm.mineRequired
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*")
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "mine",
                      class: { "is-invalid": _vm.$v.form.mine.$error },
                      attrs: {
                        label: "description",
                        options: _vm.mines,
                        clearable: false,
                        disabled: _vm.disabledInputs,
                        placeholder: "Select from Drop Down"
                      },
                      on: {
                        input: function($event) {
                          return _vm.getSubMines(_vm.form.mine, "Input")
                        }
                      },
                      model: {
                        value: _vm.form.mine,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "mine", $$v)
                        },
                        expression: "form.mine"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal-add-suggestion",
                            modifiers: { "modal-add-suggestion": true }
                          }
                        ],
                        staticClass: "mt-1 mb-2 add-multiple",
                        class: { disabled: _vm.form.mine == "" },
                        on: {
                          click: function($event) {
                            return _vm.sendHierarchyInfo(
                              "Mine",
                              _vm.form.mine.id,
                              _vm.form.mine.description,
                              _vm.form.subBasement.id
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    + Add Suggestion\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    !_vm.$v.form.mine.required
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "Please select the lowest possible\n                    classification befitting your product or service.\n                "
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.showSubMineField
              ? _c(
                  "div",
                  { staticClass: " form-group mb-5" },
                  [
                    _c(
                      "label",
                      { staticClass: "control-label font-weight-bold" },
                      [
                        _vm._v("Sub Mine"),
                        _vm.subMineRequired
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v("*")
                            ])
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "subMine",
                      class: { "is-invalid": _vm.$v.form.subMine.$error },
                      attrs: {
                        label: "description",
                        options: _vm.subMines,
                        clearable: false,
                        disabled: _vm.disabledInputs,
                        placeholder: "Select from Drop Down"
                      },
                      on: { input: _vm.subMinesChange },
                      model: {
                        value: _vm.form.subMine,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "subMine", $$v)
                        },
                        expression: "form.subMine"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "b-modal",
                            rawName: "v-b-modal.modal-add-suggestion",
                            modifiers: { "modal-add-suggestion": true }
                          }
                        ],
                        staticClass: "mt-1 mb-2 add-multiple",
                        class: { disabled: _vm.form.subMine == "" },
                        on: {
                          click: function($event) {
                            return _vm.sendHierarchyInfo(
                              "SubMine",
                              _vm.form.subMine.id,
                              _vm.form.subMine.description,
                              _vm.form.mine.id
                            )
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    + Add Suggestion\n                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    !_vm.$v.form.subMine.required
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "Please select the lowest possible\n                    classification befitting your product or service.\n                "
                          )
                        ])
                      : _vm._e()
                  ],
                  1
                )
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _vm.taxonomyActionType != "edit"
          ? _c(
              "div",
              { staticClass: "mt-3 mb-3" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "h5 media-hierarchy-classification-tooltrip",
                    attrs: { to: {}, id: "tooltip-target-2" }
                  },
                  [
                    _c("i", {
                      staticClass:
                        "fas fa-question-circle text-dark exclamition-position"
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-tooltip",
                  { attrs: { target: "tooltip-target-2", triggers: "hover" } },
                  [
                    _vm._v(
                      "You can associate\n                more than one\n                industry\n                classification to your company and to your content. This means if\n                your company provides\n                services\n                or products across more than a single industry (or within multiple\n                parts of a single\n                industry)\n                any users search for those specific classification will find your\n                company’s content.\n            "
                    )
                  ]
                ),
                _vm._v(" "),
                !_vm.enterEditMode && !_vm.enabledEditMode
                  ? [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-back-next classification-btn btn-clear-form",
                          on: {
                            click: function($event) {
                              return _vm.clearNodeValue("industry", "Input")
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                    Clear Form\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-theme-primary media-another-node-btn add-another-classification-btn",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.saveHierarchyInfo("next")
                            }
                          }
                        },
                        [_vm._v("Add Classification\n                ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-back-next float-right media-finish-btn classification-btn activate-btn",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.gotoParentSaveAndClose()
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                    Activate & Save\n                "
                          )
                        ]
                      )
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _vm.enabledEditMode
                  ? [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-back-next",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.loadLastTabDataFromStorage(
                                _vm.multipleNodes.length
                              )
                            }
                          }
                        },
                        [_vm._v("Cancel\n                ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-theme-primary float-right media-finish-btn",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.updateExistingClassification("save")
                            }
                          }
                        },
                        [_vm._v("\n                    Save\n                ")]
                      )
                    ]
                  : _vm._e()
              ],
              2
            )
          : _c(
              "div",
              { staticClass: "mt-3" },
              [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-back-next",
                    class: { "media-edit-btn-padding": !_vm.enabledEditMode },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.$parent.editCancel.apply(null, arguments)
                      }
                    }
                  },
                  [_vm._v("Cancel\n            ")]
                ),
                _vm._v(" "),
                _vm.enabledEditMode
                  ? [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-theme-primary float-right media-finish-btn",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.updateExistingClassification("save")
                            }
                          }
                        },
                        [_vm._v("\n                    Save\n                ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn btn-theme-primary float-right mr-2 media-finish-btn",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.updateExistingClassification(
                                "saveAndClose"
                              )
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                    Save & Close\n                "
                          )
                        ]
                      )
                    ]
                  : !_vm.enterEditMode
                  ? [
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn float-right btn-theme-primary media-another-node-btn media-edit-btn-padding",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.saveHierarchyInfo("edit")
                            }
                          }
                        },
                        [
                          _vm._v(
                            "Add\n                    Classification\n                "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "btn float-right btn-theme-primary mr-2 media-another-node-btn media-edit-btn-padding media-edit-save-and-close-btn",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.saveHierarchyInfo("editAndClose")
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                    Save & Close\n                "
                          )
                        ]
                      )
                    ]
                  : _vm._e()
              ],
              2
            )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "media-categorization-scroll-tab col-lg-6 col-md-6" },
        [
          _c(
            "div",
            { staticClass: "px-4" },
            [
              _vm.enableTabNavigation
                ? _c("div", { staticClass: "position-relative" }, [
                    _c(
                      "span",
                      {
                        staticClass:
                          "position-absolute tab-navigation-left-icons",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.navigateTabScrollOnLeft.apply(
                              null,
                              arguments
                            )
                          }
                        }
                      },
                      [_c("i", { staticClass: "fas fa-chevron-left" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        staticClass:
                          "position-absolute tab-navigation-right-icons",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.navigateTabScrollOnRight.apply(
                              null,
                              arguments
                            )
                          }
                        }
                      },
                      [_c("i", { staticClass: "fas fa-chevron-right" })]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c(
                "b-tabs",
                {
                  staticClass: "media-categorization-tab",
                  attrs: {
                    "active-nav-item-class": "text-primary",
                    "active-tab-class": "",
                    "content-class": "mt-3"
                  },
                  model: {
                    value: _vm.tabIndex,
                    callback: function($$v) {
                      _vm.tabIndex = $$v
                    },
                    expression: "tabIndex"
                  }
                },
                [
                  _vm.multipleNodes.length > 0
                    ? [
                        _vm._l(_vm.multipleNodes, function(each, index) {
                          return [
                            _c("span", { staticClass: "d-none" }, [
                              _vm._v(_vm._s(_vm.activeTab))
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-tab",
                              {
                                attrs: { active: index === _vm.activeTab },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.loadTabContent(each, index)
                                  }
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "title",
                                      fn: function() {
                                        return [
                                          _vm._v(
                                            "\n                                Classification " +
                                              _vm._s(index + 1) +
                                              "\n                            "
                                          )
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ],
                                  null,
                                  true
                                )
                              },
                              [
                                _vm._v(" "),
                                _vm.enabledEditMode == true &&
                                _vm.activeTab === index
                                  ? [
                                      _c("MediaCategoryCurrentPathway", {
                                        attrs: {
                                          form: _vm.form,
                                          enabledEditMode: _vm.enabledEditMode
                                        }
                                      })
                                    ]
                                  : [
                                      _c(
                                        "button",
                                        {
                                          staticClass:
                                            "float-right icon-custom-background media-categorization-edit-icon",
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.EnabledAllSelectForEdit.apply(
                                                null,
                                                arguments
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-pencil-alt"
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("MediaCategoryTabContent", {
                                        ref: "category",
                                        refInFor: true,
                                        attrs: {
                                          each: each,
                                          objectIndex: index
                                        }
                                      })
                                    ]
                              ],
                              2
                            ),
                            _vm._v(" "),
                            index + 2 > _vm.multipleNodes.length
                              ? [
                                  _c(
                                    "b-tab",
                                    {
                                      attrs: {
                                        active: _vm.activeTab === index + 1
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.loadLastTabDataFromStorage(
                                            index + 1
                                          )
                                        }
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "title",
                                            fn: function() {
                                              return [
                                                _vm._v(
                                                  "\n                                    Classification " +
                                                    _vm._s(index + 2) +
                                                    "\n                                "
                                                )
                                              ]
                                            },
                                            proxy: true
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    },
                                    [
                                      _vm._v(" "),
                                      _c("MediaCategoryCurrentPathway", {
                                        attrs: {
                                          form: _vm.form,
                                          enabledEditMode: _vm.enabledEditMode
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ]
                              : _vm._e()
                          ]
                        })
                      ]
                    : [
                        _c(
                          "b-tab",
                          {
                            attrs: { active: _vm.activeTab === 0 },
                            scopedSlots: _vm._u([
                              {
                                key: "title",
                                fn: function() {
                                  return [
                                    _vm._v(
                                      "\n                            Classification 1\n                        "
                                    )
                                  ]
                                },
                                proxy: true
                              }
                            ])
                          },
                          [
                            _vm._v(" "),
                            _c("MediaCategoryCurrentPathway", {
                              attrs: {
                                form: _vm.form,
                                enabledEditMode: _vm.enabledEditMode
                              }
                            })
                          ],
                          1
                        )
                      ]
                ],
                2
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c("loader", { attrs: { "is-visible": _vm.isLoading } }),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal",
          attrs: {
            id: "modal-add-suggestion",
            title: "Add Suggestion",
            centered: "",
            "hide-footer": "",
            "title-class": "modal-title-new"
          }
        },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.node_type,
                expression: "node_type"
              }
            ],
            attrs: { type: "hidden" },
            domProps: { value: _vm.node_type },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.node_type = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.node_id,
                expression: "node_id"
              }
            ],
            attrs: { type: "hidden" },
            domProps: { value: _vm.node_id },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.node_id = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c(
            "b-button",
            {
              staticClass: "btn-add-suggestion background-darkblue",
              attrs: { id: "addnode", variant: "success" },
              on: { click: _vm.showAddModal }
            },
            [_vm._v("Add Classification\n        ")]
          ),
          _vm._v(" "),
          _c(
            "b-button",
            {
              staticClass: "btn-add-suggestion background-darkblue",
              attrs: { id: "replacenode", variant: "success" },
              on: { click: _vm.showReplaceModal }
            },
            [_vm._v("\n            Replace Classification\n        ")]
          ),
          _vm._v(" "),
          _c(
            "b-button",
            {
              staticClass: "btn-add-suggestion background-darkblue",
              attrs: { id: "deletenode", variant: "success" },
              on: { click: _vm.showDeleteModal }
            },
            [_vm._v("\n            Delete Classification\n        ")]
          ),
          _vm._v(" "),
          _c(
            "b-button",
            {
              staticClass: "btn-add-suggestion background-darkblue",
              attrs: { id: "other", variant: "success" },
              on: { click: _vm.showOtherModal }
            },
            [_vm._v("\n            Other\n        ")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal",
          attrs: {
            id: "modal-add-node",
            title: "Add Classification",
            centered: "",
            "hide-footer": "",
            "title-class": "modal-title-new"
          }
        },
        [
          _c("div", { staticClass: "row text-center" }, [
            _c("div", { staticClass: "col-12" }, [
              _c(
                "div",
                {
                  staticClass:
                    "d-flex justify-content-center align-items-center"
                },
                [
                  _c(
                    "p",
                    { staticClass: "font-weight-bold mb-0 pr-1 text-darkblue" },
                    [_vm._v("Selected Classification")]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "exclamition-position" }, [
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "b-tooltip",
                            rawName: "v-b-tooltip.hover",
                            modifiers: { hover: true }
                          }
                        ],
                        staticClass: "h3",
                        attrs: {
                          title:
                            "Your suggested classification will be added beneath the parent of the currently selected, so that your suggestion will appear in the same dropdown selection as your currently selected classification."
                        }
                      },
                      [
                        _c("i", {
                          staticClass: "fas fa-question-circle text-dark"
                        })
                      ]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "font-weight-bold text-darkblue" }, [
                _vm._v(_vm._s(_vm.node_type) + " "),
                _c("i", { staticClass: "fa fa-arrow-right" }),
                _vm._v("\n                    " + _vm._s(_vm.node_description))
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              staticClass: "font-weight-bold",
              attrs: {
                "label-for": "name-input",
                label: "Add Classification Request Here"
              }
            },
            [
              _c("b-form-input", {
                ref: "suggestion_explanation",
                staticClass: "mb-2",
                class: { "is-invalid": _vm.$v.suggestion_explanation.$error },
                attrs: {
                  placeholder: "Type Requested Node Here",
                  maxlength: "200",
                  required: ""
                },
                model: {
                  value: _vm.suggestion_explanation,
                  callback: function($$v) {
                    _vm.suggestion_explanation = $$v
                  },
                  expression: "suggestion_explanation"
                }
              }),
              _vm._v(" "),
              !_vm.$v.suggestion_explanation.required
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v("Requested Node is required.\n            ")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("b-form-textarea", {
                ref: "suggestion_reason",
                class: { "is-invalid": _vm.$v.suggestion_reason.$error },
                attrs: {
                  id: "textarea",
                  placeholder: "Reason...",
                  maxlength: "1000",
                  rows: "3",
                  "max-rows": "6"
                },
                model: {
                  value: _vm.suggestion_reason,
                  callback: function($$v) {
                    _vm.suggestion_reason = $$v
                  },
                  expression: "suggestion_reason"
                }
              }),
              _vm._v(" "),
              !_vm.$v.suggestion_reason.required
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v("Reason is required.")
                  ])
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-input-group",
            { staticClass: "justify-content-center" },
            [
              _c(
                "b-button",
                {
                  staticClass: "btn-cancel-submit mr-3 background-darkblue",
                  attrs: { disabled: _vm.isDisabled, variant: "success" },
                  on: {
                    click: function($event) {
                      return _vm.addSuggestion("add")
                    }
                  }
                },
                [_vm._v("Submit\n            ")]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "btn-cancel-submit background-darkblue",
                  attrs: { variant: "success" },
                  on: {
                    click: function($event) {
                      return _vm.cancelSuggestionModal("modal-add-node")
                    }
                  }
                },
                [_vm._v("Cancel\n            ")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal",
          attrs: {
            id: "modal-replace-node",
            title: "Replace Classification Request",
            centered: "",
            "hide-footer": "",
            "title-class": "modal-title-new"
          }
        },
        [
          _c("div", { staticClass: "text-center" }, [
            _c("p", { staticClass: "font-weight-bold mb-0 text-darkblue" }, [
              _vm._v("Selected Classification")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "font-weight-bold text-darkblue" }, [
              _vm._v(_vm._s(_vm.node_type) + " "),
              _c("i", { staticClass: "fa fa-arrow-right" }),
              _vm._v("\n                " + _vm._s(_vm.node_description))
            ])
          ]),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              staticClass: "font-weight-bold",
              attrs: {
                "label-for": "name-input",
                label: "Replace Classification Request Here"
              }
            },
            [
              _c("b-form-input", {
                ref: "suggestion_explanation",
                staticClass: "mb-2",
                class: { "is-invalid": _vm.$v.suggestion_explanation.$error },
                attrs: {
                  placeholder: "Type Suggested Name Change Here",
                  maxlength: "200",
                  required: ""
                },
                model: {
                  value: _vm.suggestion_explanation,
                  callback: function($$v) {
                    _vm.suggestion_explanation = $$v
                  },
                  expression: "suggestion_explanation"
                }
              }),
              _vm._v(" "),
              !_vm.$v.suggestion_explanation.required
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v(
                      "Requested Node is\n                required.\n            "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("b-form-textarea", {
                ref: "suggestion_reason",
                class: { "is-invalid": _vm.$v.suggestion_reason.$error },
                attrs: {
                  id: "textarea",
                  placeholder: "Reason...",
                  maxlength: "1000",
                  rows: "3",
                  "max-rows": "6"
                },
                model: {
                  value: _vm.suggestion_reason,
                  callback: function($$v) {
                    _vm.suggestion_reason = $$v
                  },
                  expression: "suggestion_reason"
                }
              }),
              _vm._v(" "),
              !_vm.$v.suggestion_reason.required
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v("Reason is required.")
                  ])
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-input-group",
            { staticClass: "justify-content-center" },
            [
              _c(
                "b-button",
                {
                  staticClass: "btn-cancel-submit mr-3 background-darkblue",
                  attrs: { disabled: _vm.isDisabled, variant: "success" },
                  on: {
                    click: function($event) {
                      return _vm.addSuggestion("replace")
                    }
                  }
                },
                [_vm._v("Submit\n            ")]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "btn-cancel-submit background-darkblue",
                  attrs: { variant: "success" },
                  on: {
                    click: function($event) {
                      return _vm.cancelSuggestionModal("modal-replace-node")
                    }
                  }
                },
                [_vm._v("Cancel\n            ")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal",
          attrs: {
            id: "modal-delete-node",
            title: "Delete Classification Request",
            centered: "",
            "hide-footer": "",
            "title-class": "modal-title-new"
          }
        },
        [
          _c("div", { staticClass: "text-center" }, [
            _c("p", { staticClass: "font-weight-bold mb-0 text-darkblue" }, [
              _vm._v("Selected Classification")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "font-weight-bold text-darkblue" }, [
              _vm._v(_vm._s(_vm.node_type) + " "),
              _c("i", { staticClass: "fa fa-arrow-right" }),
              _vm._v("\n                " + _vm._s(_vm.node_description))
            ])
          ]),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              staticClass: "font-weight-bold",
              attrs: {
                "label-for": "name-input",
                label:
                  "Do you suggest we remove this classification? If so, why?"
              }
            },
            [
              _c("b-form-textarea", {
                ref: "suggestion_reason",
                class: { "is-invalid": _vm.$v.suggestion_reason.$error },
                attrs: {
                  id: "textarea",
                  placeholder: "Reason...",
                  maxlength: "1000",
                  rows: "3",
                  "max-rows": "6"
                },
                model: {
                  value: _vm.suggestion_reason,
                  callback: function($$v) {
                    _vm.suggestion_reason = $$v
                  },
                  expression: "suggestion_reason"
                }
              }),
              _vm._v(" "),
              !_vm.$v.suggestion_reason.required
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v("Reason is required.")
                  ])
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-input-group",
            { staticClass: "justify-content-center" },
            [
              _c(
                "b-button",
                {
                  staticClass: "btn-cancel-submit mr-3 background-darkblue",
                  attrs: { disabled: _vm.isDisabled, variant: "success" },
                  on: {
                    click: function($event) {
                      return _vm.addSuggestion("delete")
                    }
                  }
                },
                [_vm._v("Submit\n            ")]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "btn-cancel-submit background-darkblue",
                  attrs: { variant: "success" },
                  on: {
                    click: function($event) {
                      return _vm.cancelSuggestionModal("modal-delete-node")
                    }
                  }
                },
                [_vm._v("Cancel\n            ")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modal",
          attrs: {
            id: "modal-other-node",
            title: "Other Request",
            centered: "",
            "hide-footer": "",
            "title-class": "modal-title-new"
          }
        },
        [
          _c("div", { staticClass: "text-center" }, [
            _c("p", { staticClass: "font-weight-bold mb-0 text-darkblue" }, [
              _vm._v("Selected Classification")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "font-weight-bold text-darkblue" }, [
              _vm._v(_vm._s(_vm.node_type) + " "),
              _c("i", { staticClass: "fa fa-arrow-right" }),
              _vm._v("\n                " + _vm._s(_vm.node_description))
            ])
          ]),
          _vm._v(" "),
          _c(
            "b-form-group",
            {
              staticClass: "font-weight-bold",
              attrs: {
                "label-for": "name-input",
                label:
                  "Do you have any other suggestion for us? We would love to hear it!"
              }
            },
            [
              _c("b-form-textarea", {
                ref: "suggestion_reason",
                class: { "is-invalid": _vm.$v.suggestion_reason.$error },
                attrs: {
                  id: "textarea",
                  placeholder: "Suggestion...",
                  maxlength: "1000",
                  rows: "3",
                  "max-rows": "6"
                },
                model: {
                  value: _vm.suggestion_reason,
                  callback: function($$v) {
                    _vm.suggestion_reason = $$v
                  },
                  expression: "suggestion_reason"
                }
              }),
              _vm._v(" "),
              !_vm.$v.suggestion_reason.required
                ? _c("div", { staticClass: "invalid-feedback" }, [
                    _vm._v("Suggestion is required.")
                  ])
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-input-group",
            { staticClass: "justify-content-center" },
            [
              _c(
                "b-button",
                {
                  staticClass: "btn-cancel-submit mr-3 background-darkblue",
                  attrs: { disabled: _vm.isDisabled, variant: "success" },
                  on: {
                    click: function($event) {
                      return _vm.addSuggestion("other")
                    }
                  }
                },
                [_vm._v("Submit\n            ")]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "btn-cancel-submit background-darkblue",
                  attrs: { variant: "success" },
                  on: {
                    click: function($event) {
                      return _vm.cancelSuggestionModal("modal-other-node")
                    }
                  }
                },
                [_vm._v("Cancel\n            ")]
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label font-weight-bold" }, [
      _vm._v("Industry"),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MediaCategoryCurrentPathway.vue?vue&type=template&id=7b22b5f8&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MediaCategoryCurrentPathway.vue?vue&type=template&id=7b22b5f8&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mt-2 text-center" }, [
    _vm.form.industry
      ? _c("span", [
          _c(
            "span",
            {
              staticClass: "d-block px-1 py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("industry") }
            },
            [
              _vm._v(
                _vm._s(_vm.form.industry.description) + "\n                "
              )
            ]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.form.industry == ""
      ? _c("span", [
          _c(
            "span",
            {
              staticClass: "d-block px-1 py-3 text-white rounded fs-14",
              style: { backgroundColor: this.nodeColor("industry") }
            },
            [
              _vm._v(
                "Industry Classification (Please Select an Industry From the Dropdown Menu on the Left)\n                        "
              )
            ]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.form.sector
      ? _c("span", [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("sector") }
            },
            [_vm._v(_vm._s(_vm.form.sector.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.form.subSector
      ? _c("span", [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("subSector") }
            },
            [_vm._v(_vm._s(_vm.form.subSector.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.form.group
      ? _c("span", [
          _vm._m(2),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("group") }
            },
            [_vm._v(_vm._s(_vm.form.group.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.form.subGroup
      ? _c("span", [
          _vm._m(3),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("subGroup") }
            },
            [_vm._v(_vm._s(_vm.form.subGroup.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.form.echelon
      ? _c("span", [
          _vm._m(4),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("echelon") }
            },
            [_vm._v(_vm._s(_vm.form.echelon.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.form.subEchelon
      ? _c("span", [
          _vm._m(5),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("subEchelon") }
            },
            [_vm._v(_vm._s(_vm.form.subEchelon.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.form.tier
      ? _c("span", [
          _vm._m(6),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("tier") }
            },
            [_vm._v(_vm._s(_vm.form.tier.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.form.subTier
      ? _c("span", [
          _vm._m(7),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("subTier") }
            },
            [_vm._v(_vm._s(_vm.form.subTier.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.form.layer
      ? _c("span", [
          _vm._m(8),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("layer") }
            },
            [_vm._v(_vm._s(_vm.form.layer.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.form.subLayer
      ? _c("span", [
          _vm._m(9),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("subLayer") }
            },
            [_vm._v(_vm._s(_vm.form.subLayer.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.form.deck
      ? _c("span", [
          _vm._m(10),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("deck") }
            },
            [_vm._v(_vm._s(_vm.form.deck.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.form.subDeck
      ? _c("span", [
          _vm._m(11),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("subDeck") }
            },
            [_vm._v(_vm._s(_vm.form.subDeck.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.form.floor
      ? _c("span", [
          _vm._m(12),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("floor") }
            },
            [_vm._v(_vm._s(_vm.form.floor.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.form.subFloor
      ? _c("span", [
          _vm._m(13),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("subFloor") }
            },
            [_vm._v(_vm._s(_vm.form.subFloor.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.form.basement
      ? _c("span", [
          _vm._m(14),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("basement") }
            },
            [_vm._v(_vm._s(_vm.form.basement.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.form.subBasement
      ? _c("span", [
          _vm._m(15),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("subBasement") }
            },
            [_vm._v(_vm._s(_vm.form.subBasement.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.form.mine
      ? _c("span", [
          _vm._m(16),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("mine") }
            },
            [_vm._v(_vm._s(_vm.form.mine.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.form.subMine
      ? _c("span", [
          _vm._m(17),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("subMine") }
            },
            [_vm._v(_vm._s(_vm.form.subMine.description))]
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MediaCategoryTabContent.vue?vue&type=template&id=2cdd53aa&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MediaCategoryTabContent.vue?vue&type=template&id=2cdd53aa&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "mb-4 text-center" }, [
    Object.keys(_vm.each).includes("industry")
      ? _c("span", [
          _c(
            "span",
            {
              staticClass: "d-block px-1 py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("industry") }
            },
            [
              _vm._v(
                _vm._s(_vm.each.industry.description) +
                  "\n                        "
              )
            ]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    Object.keys(_vm.each).includes("sector")
      ? _c("span", [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("sector") }
            },
            [_vm._v(_vm._s(_vm.each.sector.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    Object.keys(_vm.each).includes("sub_sector")
      ? _c("span", [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("subSector") }
            },
            [_vm._v(_vm._s(_vm.each.sub_sector.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    Object.keys(_vm.each).includes("group")
      ? _c("span", [
          _vm._m(2),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("group") }
            },
            [_vm._v(_vm._s(_vm.each.group.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    Object.keys(_vm.each).includes("sub_group")
      ? _c("span", [
          _vm._m(3),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("subGroup") }
            },
            [_vm._v(_vm._s(_vm.each.sub_group.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    Object.keys(_vm.each).includes("echelon")
      ? _c("span", [
          _vm._m(4),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("echelon") }
            },
            [_vm._v(_vm._s(_vm.each.echelon.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    Object.keys(_vm.each).includes("sub_echelon")
      ? _c("span", [
          _vm._m(5),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("subEchelon") }
            },
            [_vm._v(_vm._s(_vm.each.sub_echelon.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    Object.keys(_vm.each).includes("tier")
      ? _c("span", [
          _vm._m(6),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("tier") }
            },
            [_vm._v(_vm._s(_vm.each.tier.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    Object.keys(_vm.each).includes("sub_tier")
      ? _c("span", [
          _vm._m(7),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("subTier") }
            },
            [_vm._v(_vm._s(_vm.each.sub_tier.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    Object.keys(_vm.each).includes("layer")
      ? _c("span", [
          _vm._m(8),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("layer") }
            },
            [_vm._v(_vm._s(_vm.each.layer.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    Object.keys(_vm.each).includes("sub_layer")
      ? _c("span", [
          _vm._m(9),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("subLayer") }
            },
            [_vm._v(_vm._s(_vm.each.sub_layer.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    Object.keys(_vm.each).includes("deck")
      ? _c("span", [
          _vm._m(10),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("deck") }
            },
            [_vm._v(_vm._s(_vm.each.deck.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    Object.keys(_vm.each).includes("sub_deck")
      ? _c("span", [
          _vm._m(11),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("subDeck") }
            },
            [_vm._v(_vm._s(_vm.each.sub_deck.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    Object.keys(_vm.each).includes("floor")
      ? _c("span", [
          _vm._m(12),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("floor") }
            },
            [_vm._v(_vm._s(_vm.each.floor.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    Object.keys(_vm.each).includes("sub_floor")
      ? _c("span", [
          _vm._m(13),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("subFloor") }
            },
            [_vm._v(_vm._s(_vm.each.sub_floor.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    Object.keys(_vm.each).includes("basement")
      ? _c("span", [
          _vm._m(14),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("basement") }
            },
            [_vm._v(_vm._s(_vm.each.basement.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    Object.keys(_vm.each).includes("sub_basement")
      ? _c("span", [
          _vm._m(15),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("subBasement") }
            },
            [_vm._v(_vm._s(_vm.each.sub_basement.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    Object.keys(_vm.each).includes("mine")
      ? _c("span", [
          _vm._m(16),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("mine") }
            },
            [_vm._v(_vm._s(_vm.each.mine.description))]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    Object.keys(_vm.each).includes("sub_mine")
      ? _c("span", [
          _vm._m(17),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "d-block px-auto py-3 text-white rounded",
              style: { backgroundColor: this.nodeColor("subMine") }
            },
            [_vm._v(_vm._s(_vm.each.sub_mine.description))]
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block arrow-padding-ud" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/apis/AudioVideo.js":
/*!*****************************************!*\
  !*** ./resources/js/apis/AudioVideo.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  getMediaCategorizationLooupIdByUuid: function getMediaCategorizationLooupIdByUuid(uuid) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/get-media-categorization-lookupid-by-uuid/" + uuid);
  },
  updateVideoThumbnail: function updateVideoThumbnail(data, id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/update-video-thumb/" + id, data);
  }
});

/***/ }),

/***/ "./resources/js/apis/Questionnnaire.js":
/*!*********************************************!*\
  !*** ./resources/js/apis/Questionnnaire.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  uploadAudio: function uploadAudio(form, config) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/audio-questionnaire", form, config);
  },
  videoFormValidate: function videoFormValidate(form) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/video-form-validate", form);
  },
  taxonomyDataStore: function taxonomyDataStore(form) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/taxonomy-data-store", form);
  },

  /*Video questionnaires Step 1 Data edit and Update*/
  getStep1VideoData: function getStep1VideoData(id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/video-step1/".concat(id, "/edit"));
  },
  saveStep1VideoData: function saveStep1VideoData(form, id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().put("/video-step1/".concat(id), form);
  },

  /*Video questionnaires Step 2 Data edit and Update*/
  getStep2VideoData: function getStep2VideoData(id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/dacast-video-step2/".concat(id, "/edit"));
  },
  saveStep2VideoData: function saveStep2VideoData(form, id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().put("/dacast-video-step2/".concat(id), form);
  },
  updateVideoInfoData: function updateVideoInfoData(form, id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().put("/update-video-info/".concat(id), form);
  },
  updateAudioInfoData: function updateAudioInfoData(form, id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().put("/update-audio-info/".concat(id), form);
  },

  /*Audio questionnaires Step 1 Data edit and Update*/
  getStep1AudioData: function getStep1AudioData(id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/audio-step1/".concat(id, "/edit"));
  },
  saveStep1AudioData: function saveStep1AudioData(form, id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().put("/audio-step1/".concat(id), form);
  },

  /*Audio questionnaires Step 2 Data edit and Update*/
  getStep2AudioData: function getStep2AudioData(id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/audio-step2/".concat(id, "/edit"));
  },
  saveStep2AudioData: function saveStep2AudioData(form, id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().put("/audio-step2/".concat(id), form);
  },
  updateCompanyQuestionnaireData: function updateCompanyQuestionnaireData(form, id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().put("/company-questionnaire-data/".concat(id), form);
  },
  leadershipAndGovernenceFormData: function leadershipAndGovernenceFormData(form, id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/company-questionnaire-data/".concat(id), form);
  },
  updateLeadershipAndGovernenceFormData: function updateLeadershipAndGovernenceFormData(form, id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/company-questionnaire-data/".concat(id), form);
  },
  updateMediaFormData: function updateMediaFormData(form) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/update-media-form-data", form);
  },
  companyIconUpload: function companyIconUpload(form) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/company-icon-upload", form);
  },
  deleteLagMember: function deleteLagMember(id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])()["delete"]("/delete-lag-member/" + id, {
      params: {
        type: 'member'
      }
    });
  },
  getCompanyQuestionnaireData: function getCompanyQuestionnaireData(id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/company-questionnaire-data/".concat(id, "/edit"));
  },
  getSocialMediaPlatformData: function getSocialMediaPlatformData() {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/social-media-platform");
  },
  getLeadershipAndGovernanceRoles: function getLeadershipAndGovernanceRoles(roleType) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get('/leadership-and-goverrance-roles?roleType=' + roleType);
  }
});

/***/ }),

/***/ "./resources/js/components/AudioVideoHierarchy.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/AudioVideoHierarchy.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AudioVideoHierarchy_vue_vue_type_template_id_07e29755_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudioVideoHierarchy.vue?vue&type=template&id=07e29755&scoped=true& */ "./resources/js/components/AudioVideoHierarchy.vue?vue&type=template&id=07e29755&scoped=true&");
/* harmony import */ var _AudioVideoHierarchy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudioVideoHierarchy.vue?vue&type=script&lang=js& */ "./resources/js/components/AudioVideoHierarchy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AudioVideoHierarchy_vue_vue_type_style_index_0_id_07e29755_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AudioVideoHierarchy.vue?vue&type=style&index=0&id=07e29755&scoped=true&lang=css& */ "./resources/js/components/AudioVideoHierarchy.vue?vue&type=style&index=0&id=07e29755&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AudioVideoHierarchy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AudioVideoHierarchy_vue_vue_type_template_id_07e29755_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AudioVideoHierarchy_vue_vue_type_template_id_07e29755_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "07e29755",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AudioVideoHierarchy.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AudioVideoHierarchy.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/AudioVideoHierarchy.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioVideoHierarchy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AudioVideoHierarchy.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AudioVideoHierarchy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioVideoHierarchy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AudioVideoHierarchy.vue?vue&type=style&index=0&id=07e29755&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/AudioVideoHierarchy.vue?vue&type=style&index=0&id=07e29755&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioVideoHierarchy_vue_vue_type_style_index_0_id_07e29755_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AudioVideoHierarchy.vue?vue&type=style&index=0&id=07e29755&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AudioVideoHierarchy.vue?vue&type=style&index=0&id=07e29755&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioVideoHierarchy_vue_vue_type_style_index_0_id_07e29755_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioVideoHierarchy_vue_vue_type_style_index_0_id_07e29755_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioVideoHierarchy_vue_vue_type_style_index_0_id_07e29755_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioVideoHierarchy_vue_vue_type_style_index_0_id_07e29755_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/AudioVideoHierarchy.vue?vue&type=template&id=07e29755&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/AudioVideoHierarchy.vue?vue&type=template&id=07e29755&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioVideoHierarchy_vue_vue_type_template_id_07e29755_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AudioVideoHierarchy.vue?vue&type=template&id=07e29755&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AudioVideoHierarchy.vue?vue&type=template&id=07e29755&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioVideoHierarchy_vue_vue_type_template_id_07e29755_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioVideoHierarchy_vue_vue_type_template_id_07e29755_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/MediaCategoryCurrentPathway.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/MediaCategoryCurrentPathway.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MediaCategoryCurrentPathway_vue_vue_type_template_id_7b22b5f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediaCategoryCurrentPathway.vue?vue&type=template&id=7b22b5f8&scoped=true& */ "./resources/js/components/MediaCategoryCurrentPathway.vue?vue&type=template&id=7b22b5f8&scoped=true&");
/* harmony import */ var _MediaCategoryCurrentPathway_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MediaCategoryCurrentPathway.vue?vue&type=script&lang=js& */ "./resources/js/components/MediaCategoryCurrentPathway.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MediaCategoryCurrentPathway_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MediaCategoryCurrentPathway_vue_vue_type_template_id_7b22b5f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MediaCategoryCurrentPathway_vue_vue_type_template_id_7b22b5f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7b22b5f8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MediaCategoryCurrentPathway.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/MediaCategoryCurrentPathway.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/MediaCategoryCurrentPathway.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaCategoryCurrentPathway_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MediaCategoryCurrentPathway.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MediaCategoryCurrentPathway.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaCategoryCurrentPathway_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MediaCategoryCurrentPathway.vue?vue&type=template&id=7b22b5f8&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/MediaCategoryCurrentPathway.vue?vue&type=template&id=7b22b5f8&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaCategoryCurrentPathway_vue_vue_type_template_id_7b22b5f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MediaCategoryCurrentPathway.vue?vue&type=template&id=7b22b5f8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MediaCategoryCurrentPathway.vue?vue&type=template&id=7b22b5f8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaCategoryCurrentPathway_vue_vue_type_template_id_7b22b5f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaCategoryCurrentPathway_vue_vue_type_template_id_7b22b5f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/MediaCategoryTabContent.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/MediaCategoryTabContent.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MediaCategoryTabContent_vue_vue_type_template_id_2cdd53aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediaCategoryTabContent.vue?vue&type=template&id=2cdd53aa&scoped=true& */ "./resources/js/components/MediaCategoryTabContent.vue?vue&type=template&id=2cdd53aa&scoped=true&");
/* harmony import */ var _MediaCategoryTabContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MediaCategoryTabContent.vue?vue&type=script&lang=js& */ "./resources/js/components/MediaCategoryTabContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MediaCategoryTabContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MediaCategoryTabContent_vue_vue_type_template_id_2cdd53aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MediaCategoryTabContent_vue_vue_type_template_id_2cdd53aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2cdd53aa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MediaCategoryTabContent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/MediaCategoryTabContent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/MediaCategoryTabContent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaCategoryTabContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MediaCategoryTabContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MediaCategoryTabContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaCategoryTabContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MediaCategoryTabContent.vue?vue&type=template&id=2cdd53aa&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/MediaCategoryTabContent.vue?vue&type=template&id=2cdd53aa&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaCategoryTabContent_vue_vue_type_template_id_2cdd53aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MediaCategoryTabContent.vue?vue&type=template&id=2cdd53aa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MediaCategoryTabContent.vue?vue&type=template&id=2cdd53aa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaCategoryTabContent_vue_vue_type_template_id_2cdd53aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaCategoryTabContent_vue_vue_type_template_id_2cdd53aa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);