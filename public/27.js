(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewScreener.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/NewScreener.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apis_Common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apis/Common */ "./resources/js/apis/Common.js");
/* harmony import */ var _apis_Screener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apis/Screener */ "./resources/js/apis/Screener.js");
/* harmony import */ var _apis_Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../apis/Content */ "./resources/js/apis/Content.js");
/* harmony import */ var _apis_SearchHistory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../apis/SearchHistory */ "./resources/js/apis/SearchHistory.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _apis_Geography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../apis/Geography */ "./resources/js/apis/Geography.js");
/* harmony import */ var _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../apis/Questionnnaire */ "./resources/js/apis/Questionnnaire.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      showSearchClear: false,
      isLoading: false,
      isDisabled: false,
      modalShow: false,
      modalData: [],
      itemIds: {},
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
      intellectualMapArray: [],
      intellectualInput: [],
      intellectualPropertyValueCount: 0,
      researchCoverageTypeIds: [],
      researchCoverageTypeInput: [],
      researchMapArray: [],
      researchCoverageTypeValueCount: 0,
      financingTypeIds: [],
      financingTypeInput: [],
      financingMapArray: [],
      financingTypeValueCount: 0,
      sharedCommunityResearchPlatformListIds: [],
      sharedCommunityResearchPlatformListInput: [],
      sharedCommunityResearchPlatformListMapArray: [],
      sharedCommunityResearchPlatformListValueCount: 0,
      minorityOwnedBusinessIds: [],
      minorityOwnedBusinessMapArray: [],
      minorityOwnedBusinessInput: [],
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
      totalSubMines: null,
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
        privatePublicCompany: "",
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
        researchFirm_name: '',
        itemInput: [],
        socialMediaPlatform: "",
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
        country: '',
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
        exchangeTradedOn: [],
        mediaPublishedFromDate: null,
        mediaPublishedToDate: null,
        mediaRecordedFromDate: null,
        mediaRecordedToDate: null
      },
      videoSubTypes: [],
      videoSubTypeIds: [],
      videoSubTypeInput: [],
      videoSubTypeMapArray: [],
      videoSubTypeValueCount: 0,
      videoSubjectTypes: [],
      videoSubjectTypeIds: [],
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
      audioSubjectTypeIds: [],
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
      publiclyTradedCompanyTypeList: [],
      exchangeTradedIds: [],
      exchangeTradedList: [],
      exchangedTradedOnIds: [],
      exchangedTradedOnInput: [],
      exchangedTradedOnMapArray: [],
      exchangedTradedOnValueCount: 0
    };
  },
  methods: {
    popupModal: function popupModal(items, arrayName, inputName, mapName, modalName, valueCount) {
      this.modalShow = !this.modalShow;
      this.modalData = items;
      this.itemIds = [];
      this.arrayName = arrayName;
      this.inputName = inputName;
      this.mappedIdsName = mapName;
      this.modalName = modalName;
      this.optionData = valueCount;
      this.form.itemInput = this[this.inputName]; //example this.intellectualInput
    },
    inputFieldIds: function inputFieldIds(field, list) {
      this.itemIds = field; // this[list] = Object.keys(field).map((key) => {
      //     console.log(field[key].name);
      //     return field[key].id
      // })
    },
    getIndustries: function () {
      var _getIndustries = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                axios.get('/api/industry-list').then(function (response) {
                  _this.industries = response.data.data;

                  _this.updateFieldSelection('industry');
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 1:
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
      var _getSectors = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(value) {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getSearchResult();

              case 2:
                if (value != null || value != undefined) {
                  axios.get('/api/get-node-list/' + value.id + '/Sector/Industry').then(function (response) {
                    _this2.sectors = response.data.data;

                    _this2.updateFieldSelection('sectors');
                  })["catch"](function (error) {
                    return console.log(error);
                  });
                }

                this.clearNodeValue('sectors');

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getSectors(_x) {
        return _getSectors.apply(this, arguments);
      }

      return getSectors;
    }(),
    getSubSectors: function () {
      var _getSubSectors = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(value) {
        var _this3 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.getSearchResult();

              case 2:
                if (value != null || value != undefined) {
                  axios.get('/api/get-node-list/' + value.id + '/SubSector/Sector').then(function (response) {
                    _this3.subSectors = response.data.data;

                    _this3.updateFieldSelection('subSectors');
                  })["catch"](function (error) {
                    return console.log(error);
                  });
                }

                this.clearNodeValue('subSectors');

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getSubSectors(_x2) {
        return _getSubSectors.apply(this, arguments);
      }

      return getSubSectors;
    }(),
    getGroups: function () {
      var _getGroups = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(value) {
        var _this4 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.getSearchResult();

              case 2:
                if (value != null || value != undefined) {
                  axios.get('/api/get-node-list/' + value.id + '/Group/SubSector').then(function (response) {
                    _this4.groups = response.data.data;

                    _this4.updateFieldSelection('groups');
                  })["catch"](function (error) {
                    return console.log(error);
                  });
                }

                this.clearNodeValue('groups');

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getGroups(_x3) {
        return _getGroups.apply(this, arguments);
      }

      return getGroups;
    }(),
    getSubGroups: function () {
      var _getSubGroups = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(value) {
        var _this5 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getSearchResult();

              case 2:
                if (value != null || value != undefined) {
                  axios.get('/api/get-node-list/' + value.id + '/SubGroup/Group').then(function (response) {
                    _this5.subGroups = response.data.data;

                    _this5.updateFieldSelection('subGroups');
                  })["catch"](function (error) {
                    return console.log(error);
                  });
                }

                this.clearNodeValue('subGroups');

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getSubGroups(_x4) {
        return _getSubGroups.apply(this, arguments);
      }

      return getSubGroups;
    }(),
    getEchelons: function () {
      var _getEchelons = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(value) {
        var _this6 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.getSearchResult();

              case 2:
                if (value != null || value != undefined) {
                  axios.get('/api/get-node-list/' + value.id + '/Echelon/SubGroup').then(function (response) {
                    _this6.echelons = response.data.data;

                    _this6.updateFieldSelection('echelons');
                  })["catch"](function (error) {
                    return console.log(error);
                  });
                }

                this.clearNodeValue('echelons');

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getEchelons(_x5) {
        return _getEchelons.apply(this, arguments);
      }

      return getEchelons;
    }(),
    getSubEchelons: function () {
      var _getSubEchelons = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(value) {
        var _this7 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return this.getSearchResult();

              case 2:
                if (value != null || value != undefined) {
                  axios.get('/api/get-node-list/' + value.id + '/SubEchelon/Echelon').then(function (response) {
                    _this7.subEchelons = response.data.data;

                    _this7.updateFieldSelection('subEchelons');
                  })["catch"](function (error) {
                    return console.log(error);
                  });
                }

                this.clearNodeValue('subEchelons');

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getSubEchelons(_x6) {
        return _getSubEchelons.apply(this, arguments);
      }

      return getSubEchelons;
    }(),
    getTiers: function () {
      var _getTiers = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(value) {
        var _this8 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.getSearchResult();

              case 2:
                if (value != null || value != undefined) {
                  axios.get('/api/get-node-list/' + value.id + '/Tier/SubEchelon').then(function (response) {
                    _this8.tiers = response.data.data;

                    _this8.updateFieldSelection('tiers');
                  })["catch"](function (error) {
                    return console.log(error);
                  });
                }

                this.clearNodeValue('tiers');

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getTiers(_x7) {
        return _getTiers.apply(this, arguments);
      }

      return getTiers;
    }(),
    getSubTiers: function () {
      var _getSubTiers = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(value) {
        var _this9 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return this.getSearchResult();

              case 2:
                if (value != null || value != undefined) {
                  axios.get('/api/get-node-list/' + value.id + '/SubTier/Tier').then(function (response) {
                    _this9.subTiers = response.data.data;

                    _this9.updateFieldSelection('subTiers');
                  })["catch"](function (error) {
                    return console.log(error);
                  });
                }

                this.clearNodeValue('subTiers');

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function getSubTiers(_x8) {
        return _getSubTiers.apply(this, arguments);
      }

      return getSubTiers;
    }(),
    getLayers: function () {
      var _getLayers = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10(value) {
        var _this10 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.getSearchResult();

              case 2:
                if (value != null || value != undefined) {
                  axios.get('/api/get-node-list/' + value.id + '/Layer/SubTier').then(function (response) {
                    _this10.layers = response.data.data;

                    _this10.updateFieldSelection('layers');
                  })["catch"](function (error) {
                    return console.log(error);
                  });
                }

                this.clearNodeValue('layers');

              case 4:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getLayers(_x9) {
        return _getLayers.apply(this, arguments);
      }

      return getLayers;
    }(),
    getSubLayers: function () {
      var _getSubLayers = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11(value) {
        var _this11 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.getSearchResult();

              case 2:
                if (value != null || value != undefined) {
                  axios.get('/api/get-node-list/' + value.id + '/SubLayer/Layer').then(function (response) {
                    _this11.subLayers = response.data.data;

                    _this11.updateFieldSelection('subLayers');
                  })["catch"](function (error) {
                    return console.log(error);
                  });
                }

                this.clearNodeValue('subLayers');

              case 4:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function getSubLayers(_x10) {
        return _getSubLayers.apply(this, arguments);
      }

      return getSubLayers;
    }(),
    getDecks: function () {
      var _getDecks = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12(value) {
        var _this12 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this.getSearchResult();

              case 2:
                if (value != null || value != undefined) {
                  axios.get('/api/get-node-list/' + value.id + '/Deck/SubLayer').then(function (response) {
                    _this12.decks = response.data.data;

                    _this12.updateFieldSelection('decks');
                  })["catch"](function (error) {
                    return console.log(error);
                  });
                }

                this.clearNodeValue('decks');

              case 4:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function getDecks(_x11) {
        return _getDecks.apply(this, arguments);
      }

      return getDecks;
    }(),
    getSubDecks: function () {
      var _getSubDecks = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13(value) {
        var _this13 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.getSearchResult();

              case 2:
                if (value != null || value != undefined) {
                  axios.get('/api/get-node-list/' + value.id + '/SubDeck/Deck').then(function (response) {
                    _this13.subDecks = response.data.data;

                    _this13.updateFieldSelection('subDecks');
                  })["catch"](function (error) {
                    return console.log(error);
                  });
                }

                this.clearNodeValue('subDecks');

              case 4:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function getSubDecks(_x12) {
        return _getSubDecks.apply(this, arguments);
      }

      return getSubDecks;
    }(),
    getFloors: function () {
      var _getFloors = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14(value) {
        var _this14 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return this.getSearchResult();

              case 2:
                if (value != null || value != undefined) {
                  axios.get('/api/get-node-list/' + value.id + '/Floor/SubDeck').then(function (response) {
                    _this14.floors = response.data.data;

                    _this14.updateFieldSelection('floors');
                  })["catch"](function (error) {
                    return console.log(error);
                  });
                }

                this.clearNodeValue('floors');

              case 4:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function getFloors(_x13) {
        return _getFloors.apply(this, arguments);
      }

      return getFloors;
    }(),
    getSubFloors: function () {
      var _getSubFloors = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15(value) {
        var _this15 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.getSearchResult();

              case 2:
                if (value != null || value != undefined) {
                  axios.get('/api/get-node-list/' + value.id + '/SubFloor/Floor').then(function (response) {
                    _this15.subFloors = response.data.data;

                    _this15.updateFieldSelection('subFloors');
                  })["catch"](function (error) {
                    return console.log(error);
                  });
                }

                this.clearNodeValue('subFloors');

              case 4:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function getSubFloors(_x14) {
        return _getSubFloors.apply(this, arguments);
      }

      return getSubFloors;
    }(),
    getBasements: function () {
      var _getBasements = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16(value) {
        var _this16 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return this.getSearchResult();

              case 2:
                if (value != null || value != undefined) {
                  axios.get('/api/get-node-list/' + value.id + '/Basement/SubFloor').then(function (response) {
                    _this16.basements = response.data.data;

                    _this16.updateFieldSelection('basements');
                  })["catch"](function (error) {
                    return console.log(error);
                  });
                }

                this.clearNodeValue('basements');

              case 4:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function getBasements(_x15) {
        return _getBasements.apply(this, arguments);
      }

      return getBasements;
    }(),
    getSubBasements: function () {
      var _getSubBasements = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee17(value) {
        var _this17 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return this.getSearchResult();

              case 2:
                if (value != null || value != undefined) {
                  axios.get('/api/get-node-list/' + value.id + '/SubBasement/Basement').then(function (response) {
                    _this17.subBasements = response.data.data;

                    _this17.updateFieldSelection('subBasements');
                  })["catch"](function (error) {
                    return console.log(error);
                  });
                }

                this.clearNodeValue('subBasements');

              case 4:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function getSubBasements(_x16) {
        return _getSubBasements.apply(this, arguments);
      }

      return getSubBasements;
    }(),
    getMines: function () {
      var _getMines = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee18(value) {
        var _this18 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return this.getSearchResult();

              case 2:
                if (value != null || value != undefined) {
                  axios.get('/api/get-node-list/' + value.id + '/Mine/SubBasement').then(function (response) {
                    _this18.mines = response.data.data;

                    _this18.updateFieldSelection('mines');
                  })["catch"](function (error) {
                    return console.log(error);
                  });
                }

                this.clearNodeValue('mines');

              case 4:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function getMines(_x17) {
        return _getMines.apply(this, arguments);
      }

      return getMines;
    }(),
    getSubMines: function () {
      var _getSubMines = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee19(value) {
        var _this19 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return this.getSearchResult();

              case 2:
                if (value != null || value != undefined) {
                  axios.get('/api/get-node-list/' + value.id + '/SubMine/Mine').then(function (response) {
                    _this19.subMines = response.data.data;

                    _this19.updateFieldSelection('subMines');
                  })["catch"](function (error) {
                    return console.log(error);
                  });
                }

                this.clearNodeValue('subMines');

              case 4:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function getSubMines(_x18) {
        return _getSubMines.apply(this, arguments);
      }

      return getSubMines;
    }(),
    subMinesChange: function subMinesChange(value) {
      // this.subMineSelected = "field-no-selected";
      if (!!value) {
        this.getSearchResult();
      }
    },
    clearNodeValue: function clearNodeValue(expression) {
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
    updateFieldSelection: function updateFieldSelection(nodeType) {
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
          this.stateSelected = '';
      }
    },
    getEntityTypeList: function () {
      var _getEntityTypeList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee20(country_id) {
        var _this20 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                return _context20.abrupt("return", axios.get('/api/get-entity-type/' + country_id).then(function (response) {
                  _this20.entityTypes = response.data.data;
                })["catch"](function (error) {
                  return console.log(error);
                }));

              case 1:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20);
      }));

      function getEntityTypeList(_x19) {
        return _getEntityTypeList.apply(this, arguments);
      }

      return getEntityTypeList;
    }(),
    getPrivatePublicCompanyType: function getPrivatePublicCompanyType() {
      var _this21 = this;

      axios.get('/api/get-private-public-company-type').then(function (response) {
        _this21.privatePublicCompanyTypes = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
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
    getSocialMediaPlatformList: function () {
      var _getSocialMediaPlatformList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee21() {
        var _this22 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                return _context21.abrupt("return", axios.get('/api/get-all-social-media-platform').then(function (response) {
                  _this22.socialMediaPlatforms = response.data.data;
                })["catch"](function (error) {
                  return console.log(error);
                }));

              case 1:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21);
      }));

      function getSocialMediaPlatformList() {
        return _getSocialMediaPlatformList.apply(this, arguments);
      }

      return getSocialMediaPlatformList;
    }(),
    getTradingAndReportingStatusList: function () {
      var _getTradingAndReportingStatusList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee22() {
        var _this23 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                return _context22.abrupt("return", axios.get('/api/get-all-trading-and-reporting-status-list').then(function (response) {
                  _this23.tradingAndReportingStatusList = response.data.data;
                })["catch"](function (error) {
                  return console.log(error);
                }));

              case 1:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22);
      }));

      function getTradingAndReportingStatusList() {
        return _getTradingAndReportingStatusList.apply(this, arguments);
      }

      return getTradingAndReportingStatusList;
    }(),
    getShareholderNumberList: function () {
      var _getShareholderNumberList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee23() {
        var _this24 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                return _context23.abrupt("return", axios.get('/api/get-shareholder-number-list').then(function (response) {
                  _this24.shareholderNumberList = response.data.data;
                })["catch"](function (error) {
                  return console.log(error);
                }));

              case 1:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23);
      }));

      function getShareholderNumberList() {
        return _getShareholderNumberList.apply(this, arguments);
      }

      return getShareholderNumberList;
    }(),
    getEmployeeNumberList: function () {
      var _getEmployeeNumberList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee24() {
        var _this25 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                return _context24.abrupt("return", axios.get('/api/get-employee-number-list').then(function (response) {
                  _this25.employeeNumberList = response.data.data;
                })["catch"](function (error) {
                  return console.log(error);
                }));

              case 1:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24);
      }));

      function getEmployeeNumberList() {
        return _getEmployeeNumberList.apply(this, arguments);
      }

      return getEmployeeNumberList;
    }(),
    getBaseCurrencyList: function getBaseCurrencyList() {
      var _this26 = this;

      axios.get('/api/get-base-currency-list').then(function (response) {
        _this26.baseCurrencyList = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getResearchCoverageTypeList: function () {
      var _getResearchCoverageTypeList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee25() {
        var _this27 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                axios.get('/api/get-research-coverage-type-list').then(function (response) {
                  _this27.researchCoverageTypeList = response.data.data;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 1:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25);
      }));

      function getResearchCoverageTypeList() {
        return _getResearchCoverageTypeList.apply(this, arguments);
      }

      return getResearchCoverageTypeList;
    }(),
    getIntelletualPropertyList: function () {
      var _getIntelletualPropertyList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee26() {
        var _this28 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                axios.get('/api/get-intelletual-property-list').then(function (response) {
                  _this28.intelletualPropertyList = response.data.data;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 1:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26);
      }));

      function getIntelletualPropertyList() {
        return _getIntelletualPropertyList.apply(this, arguments);
      }

      return getIntelletualPropertyList;
    }(),
    getFinancingTypeList: function () {
      var _getFinancingTypeList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee27() {
        var _this29 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                axios.get('/api/get-financing-type-list').then(function (response) {
                  _this29.financingTypeList = response.data.data;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 1:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27);
      }));

      function getFinancingTypeList() {
        return _getFinancingTypeList.apply(this, arguments);
      }

      return getFinancingTypeList;
    }(),
    getSharedCommunityResearchPlatformList: function () {
      var _getSharedCommunityResearchPlatformList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee28() {
        var _this30 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                _context28.next = 2;
                return axios.get('/api/get-shared-community-research-platform-list').then(function (response) {
                  _this30.sharedCommunityResearchPlatformList = response.data.data;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 2:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28);
      }));

      function getSharedCommunityResearchPlatformList() {
        return _getSharedCommunityResearchPlatformList.apply(this, arguments);
      }

      return getSharedCommunityResearchPlatformList;
    }(),
    changeFieldSelection: function changeFieldSelection(value, field) {
      var arrayNameIds = this.arrayName;
      this[this.inputName] = this.form.itemInput;
      this[arrayNameIds] = this.form.itemInput;
      this[this.mappedIdsName] = this[arrayNameIds].map(function (x) {
        return x.id;
      });
      this[this.optionData] = this[this.mappedIdsName].length;
      this[field] = "field-no-selected";

      if (null != value) {
        this[field] = '';
      }

      this.getSearchResult();
      this.modalShow = false;
    },
    changeInputFieldSelection: function changeInputFieldSelection(value, field) {
      this[field] = "field-no-selected";

      if ('' != value) {
        this[field] = '';
      }

      this.getSearchResult();
    },
    searchResearchFirmName: function searchResearchFirmName(value, field) {
      this[field] = "field-no-selected";

      if ('' != value) {
        this[field] = '';
      }

      this.getSearchResult();
    },
    getMinorityOwnedBusinessList: function () {
      var _getMinorityOwnedBusinessList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee29() {
        var _this31 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                axios.get('/api/get-owned-business-list').then(function (response) {
                  _this31.minorityOwnedBusinessList = response.data.data;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 1:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29);
      }));

      function getMinorityOwnedBusinessList() {
        return _getMinorityOwnedBusinessList.apply(this, arguments);
      }

      return getMinorityOwnedBusinessList;
    }(),
    getSearchResult: function () {
      var _getSearchResult = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee30() {
        var _this32 = this;

        var clearPage,
            totalCount,
            params,
            _args30 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                clearPage = _args30.length > 0 && _args30[0] !== undefined ? _args30[0] : true;

                if (clearPage) {
                  this.contentPagination.current_page = 1;
                }

                this.contentLoading = true;
                totalCount = 0;
                this.setTotalResultCount(this.lastSelectedOption, 0);
                params = new URLSearchParams();
                params.append('tabType', this.tabType);
                params.append('searchStr', this.form.searchStr);
                params.append('publicationDate', !!this.form.publicationDate ? this.dateConvert(this.form.publicationDate) : "");
                params.append('privatePublicCompany', !!this.form.privatePublicCompany ? this.form.privatePublicCompany.id : "");
                params.append('entityType', !!this.form.entityType ? this.form.entityType.id : "");
                params.append('tradingAndReportingStatus', !!this.tradingAndReportingStatusListMapArray ? this.tradingAndReportingStatusListMapArray : "");
                params.append('publicPrivateReportingStatus', !!this.form.publicPrivateReportingStatus ? this.form.publicPrivateReportingStatus.id : "");
                params.append('shareholderNumber', !!this.form.shareholderNumber ? this.form.shareholderNumber.id : "");
                params.append('employeeNumber', !!this.form.employeeNumber ? this.form.employeeNumber.id : "");
                params.append('baseCurrency', !!this.form.baseCurrency ? this.form.baseCurrency.id : "");
                params.append('conglomerate', null != this.form.conglomerate ? this.form.conglomerate : "");
                params.append('researchCoverageType', !!this.researchMapArray ? this.researchMapArray : "");
                params.append('intelletualProperty', !!this.intellectualMapArray ? this.intellectualMapArray : "");
                params.append('financingType', !!this.financingMapArray ? this.financingMapArray : "");
                params.append('companyValuation', !!this.form.companyValuation ? this.form.companyValuation.replace(/\D/g, '') : "");
                params.append('auditedFinance', null != this.form.auditedFinance ? this.form.auditedFinance : "");
                params.append('conductFinancing', null != this.form.conductFinancing ? this.form.conductFinancing : "");
                params.append('minorityOwnedBusiness', !!this.minorityOwnedBusinessMapArray ? this.minorityOwnedBusinessMapArray : "");
                params.append('esgRating', null != this.form.esgRating ? this.form.esgRating : "");
                params.append('hasFounder', null != this.form.hasFounder ? this.form.hasFounder : "");
                params.append('hasCeo', null != this.form.hasCeo ? this.form.hasCeo : "");
                params.append('hasCfo', null != this.form.hasCfo ? this.form.hasCfo : "");
                params.append('hasSalesDepartment', null != this.form.hasSalesDepartment ? this.form.hasSalesDepartment : "");
                params.append('hasIrd', null != this.form.hasIrd ? this.form.hasIrd : "");
                params.append('hasBusinessDevelopment', null != this.form.hasBusinessDevelopment ? this.form.hasBusinessDevelopment : "");
                params.append('hasStrategicPartnership', null != this.form.hasStrategicPartnership ? this.form.hasStrategicPartnership : "");
                params.append('hasSuppliers', null != this.form.hasSuppliers ? this.form.hasSuppliers : "");
                params.append('tickerSymbol', null != this.form.tickerSymbol ? this.form.tickerSymbol : "");
                params.append('page', this.contentPagination.current_page);
                params.append('industry', !!this.form.industry ? this.form.industry.id : "");
                params.append('sector', !!this.form.sector ? this.form.sector.id : "");
                params.append('subSector', !!this.form.subSector ? this.form.subSector.id : "");
                params.append('group', !!this.form.group ? this.form.group.id : "");
                params.append('subGroup', !!this.form.subGroup ? this.form.subGroup.id : "");
                params.append('echelon', !!this.form.echelon ? this.form.echelon.id : "");
                params.append('subEchelon', !!this.form.subEchelon ? this.form.subEchelon.id : "");
                params.append('tier', !!this.form.tier ? this.form.tier.id : "");
                params.append('subTier', !!this.form.subTier ? this.form.subTier.id : "");
                params.append('layer', !!this.form.layer ? this.form.layer.id : "");
                params.append('subLayer', !!this.form.subLayer ? this.form.subLayer.id : "");
                params.append('deck', !!this.form.deck ? this.form.deck.id : "");
                params.append('subDeck', !!this.form.subDeck ? this.form.subDeck.id : "");
                params.append('floor', !!this.form.floor ? this.form.floor.id : "");
                params.append('subFloor', !!this.form.subFloor ? this.form.subFloor.id : "");
                params.append('basement', !!this.form.basement ? this.form.basement.id : "");
                params.append('subBasement', !!this.form.subBasement ? this.form.subBasement.id : "");
                params.append('mine', !!this.form.mine ? this.form.mine.id : "");
                params.append('subMine', !!this.form.subMine ? this.form.subMine.id : "");
                params.append('videoPresenterTypes', !!this.videoParticipantMapArray ? this.videoParticipantMapArray : "");
                params.append('videoSubTypes', !!this.videoSubTypeMapArray ? this.videoSubTypeMapArray : "");
                params.append('videoSubjectTypes', !!this.videoSubjectTypeMapArray ? this.videoSubjectTypeMapArray : "");
                params.append('audioPresenterTypes', !!this.audioParticipantMapArray ? this.audioParticipantMapArray : "");
                params.append('audioSubTypes', !!this.audioSubTypeMapArray ? this.audioSubTypeMapArray : "");
                params.append('audioSubjectTypes', !!this.audioSubjectTypeMapArray ? this.audioSubjectTypeMapArray : "");
                params.append('firstProductOrService', !!this.form.firstProductOrService ? this.form.firstProductOrService : "");
                params.append('numberOfMajorProductOrService', !!this.form.numberOfMajorProductOrService ? this.form.numberOfMajorProductOrService : "");
                params.append('changeDirectionOrStrategy', !!this.form.changeDirectionOrStrategy ? this.form.changeDirectionOrStrategy : "");
                params.append('acquisitionsMade', !!this.form.acquisitionsMade ? this.form.acquisitionsMade : "");
                params.append('spinOffMade', !!this.form.spinOffMade ? this.form.spinOffMade : "");
                params.append('dividend', !!this.form.dividend ? this.form.dividend : "");
                params.append('domicileCountry', !!this.form.domicileCountry ? this.form.domicileCountry.id : "");
                params.append('country', !!this.form.country ? this.form.country : "");
                params.append('state', !!this.form.state ? this.form.state : "");
                params.append('province', this.form.province);
                params.append('city', this.form.city);
                params.append('scrp', null != this.sharedCommunityResearchPlatformListMapArray ? this.sharedCommunityResearchPlatformListMapArray : "");
                params.append('researchFirmName', !!this.form.researchFirm_name ? this.form.researchFirm_name : "");
                params.append('socialMediaPlatform', !!this.socialMediaListMapArray ? this.socialMediaListMapArray : "");
                params.append('hasBoardMember', null != this.form.hasBoardMember ? this.form.hasBoardMember : "");
                params.append('hasExecutive', null != this.form.hasExecutive ? this.form.hasExecutive : "");
                params.append('committee', !!this.form.committee ? this.form.committee : "");
                params.append('executiveRole', !!this.form.executiveRole ? this.form.executiveRole : "");
                params.append('memberName', !!this.form.memberName ? this.form.memberName : "");
                params.append('isin', !!this.form.isin ? this.form.isin : "");
                params.append('cusip', !!this.form.cusip ? this.form.cusip : "");
                params.append('formedYearFromDate', !!this.form.formedYearFromDate ? new Date(this.form.formedYearFromDate).getFullYear() : "");
                params.append('formedYearToDate', !!this.form.formedYearToDate ? new Date(this.form.formedYearToDate).getFullYear() : "");
                params.append('publiclyTradedCompany', !!this.form.publiclyTradedCompany ? this.form.publiclyTradedCompany.id : "");
                params.append('exchangedTradedOn', !!this.exchangedTradedOnMapArray ? this.exchangedTradedOnMapArray : "");
                params.append('mediaPublishedFromDate', !!this.form.mediaPublishedFromDate ? this.dateConvert(this.form.mediaPublishedFromDate) : "");
                params.append('mediaPublishedToDate', !!this.form.mediaPublishedToDate ? this.dateConvert(this.form.mediaPublishedToDate) : "");
                params.append('mediaRecordedFromDate', !!this.form.mediaRecordedFromDate ? this.dateConvert(this.form.mediaRecordedFromDate) : "");
                params.append('mediaRecordedToDate', !!this.form.mediaRecordedToDate ? this.dateConvert(this.form.mediaRecordedToDate) : "");
                this.totalVideo = ' (0)';
                this.totalAudio = ' (0)';
                this.totalCompany = ' (0)';
                _context30.next = 94;
                return _apis_Screener__WEBPACK_IMPORTED_MODULE_4__["default"].newScreenerData(params).then(function (response) {
                  _this32.contentLoading = false;
                  _this32.contentPagination = response.data.data.pagination;
                  _this32.videoData = response.data.data.videoData;
                  _this32.audioData = response.data.data.audioData;
                  _this32.companyData = response.data.data.companyData;

                  if (!!response.data.data.totalAudio) {
                    totalCount += response.data.data.totalAudio;
                    _this32.totalAudio = ' (' + response.data.data.totalAudio + ')';
                  }

                  if (!!response.data.data.totalVideo) {
                    totalCount += response.data.data.totalVideo;
                    _this32.totalVideo = ' (' + response.data.data.totalVideo + ')';
                  }

                  if (!!response.data.data.totalCompany) {
                    totalCount += response.data.data.totalCompany;
                    _this32.totalCompany = ' (' + response.data.data.totalCompany + ')';
                  }

                  _this32.setTotalResultCount(_this32.lastSelectedOption, totalCount);
                })["catch"](function (error) {
                  console.log(error);
                });

              case 94:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      function getSearchResult() {
        return _getSearchResult.apply(this, arguments);
      }

      return getSearchResult;
    }(),
    setTabType: function setTabType(tabValue) {
      if (this.tabType != tabValue) {
        this.tabType = tabValue;
        this.getSearchResult();
      }
    },
    stripTheGarbage: function stripTheGarbage(e) {
      if (e.keyCode < 48 && e.keyCode !== 46 || e.keyCode > 59) {
        e.preventDefault();
      }
    },
    formatDollars: function formatDollars() {
      if (this.form.companyValuation != '' && this.form.companyValuation != null) {
        var num = this.form.companyValuation;
        num = Number(num);

        var countDecimals = function countDecimals(value) {
          if (Math.floor(value) === value) return 0;
          return value.toString().split(".")[1].length || 0;
        };

        var decimal = countDecimals(num);

        if (decimal > 0) {
          num = num.toFixed(0);
        }

        this.form.companyValuation = String.fromCharCode(parseInt("36", 10)) + String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
      }
    },
    formatDollarsToNumber: function formatDollarsToNumber() {
      if (this.form.companyValuation != null) {
        var num = this.form.companyValuation.replace(/,/g, "");
        var thenum = num.replace(/^\D+/g, '');
        thenum = Math.trunc(thenum);
        this.form.companyValuation = thenum != 0 ? thenum : '';
      }
    },
    setLastSelectedOption: function setLastSelectedOption(option) {
      if (this.lastSelectedOption != option) {
        this.lastSelectedOption = option;
      }
    },
    setTotalResultCount: function setTotalResultCount() {
      var selectedOption = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (!selectedOption || this.mainFilter != 'industry') return;

      switch (selectedOption) {
        case 'industry':
          this.totalIndustries = count;
          break;

        case 'sector':
          this.totalSectors = count;
          break;

        case 'subsector':
          this.totalSubSectors = count;
          break;

        case 'group':
          this.totalGroups = count;
          break;

        case 'subgroup':
          this.totalSubGroups = count;
          break;

        case 'echelon':
          this.totalEchelons = count;
          break;

        case 'subechelon':
          this.totalSubEchelons = count;
          break;

        case 'tier':
          this.totalTiers = count;
          break;

        case 'subtier':
          this.totalSubTiers = count;
          break;

        case 'layer':
          this.totalLayers = count;
          break;

        case 'sublayer':
          this.totalSubLayers = count;
          break;

        case 'deck':
          this.totalDecks = count;
          break;

        case 'subdeck':
          this.totalSubDecks = count;
          break;

        case 'floor':
          this.totalFloors = count;
          break;

        case 'subfloor':
          this.totalSubFloors = count;
          break;

        case 'basement':
          this.totalBasements = count;
          break;

        case 'subbasement':
          this.totalSubBasements = count;
          break;

        case 'mine':
          this.totalMines = count;
          break;

        case 'submine':
          this.totalSubMines = count;
          break;
      }
    },
    getMediaTypes: function getMediaTypes(type) {
      var _this33 = this;

      axios.get('/api/get-media-sub-type/' + type).then(function (response) {
        if (type == 2) {
          _this33.videoSubTypes = response.data.data;
        } else {
          _this33.audioSubTypes = response.data.data;
        }
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getSubjectTypes: function getSubjectTypes(type) {
      var _this34 = this;

      axios.get('/api/get-subject-type/' + type).then(function (response) {
        if (type == 2) {
          _this34.videoSubjectTypes = response.data.data;
        } else {
          _this34.audioSubjectTypes = response.data.data;
        }
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getMediaPresenterType: function getMediaPresenterType(type) {
      var _this35 = this;

      axios.get('/api/get-media-presenter-type/' + type).then(function (response) {
        _this35.mediaPresenterTypes = response.data.data;

        if (type == 2) {
          _this35.videoPresenterTypes = response.data.data;
        } else {
          _this35.audioPresenterTypes = response.data.data;
        }
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    dateChange: function dateChange(filterType) {
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
      } //Media date change


      if (filterType == 'mediaPublishedFromDate') {
        if (!!this.form.mediaPublishedToDate && this.dateConvert(this.form.mediaPublishedFromDate) > this.dateConvert(this.form.mediaPublishedToDate)) {
          this.form.mediaPublishedToDate = null;
        }
      }

      if (filterType == 'mediaPublishedToDate') {
        if (!!this.form.mediaPublishedFromDate && this.dateConvert(this.form.mediaPublishedFromDate) > this.dateConvert(this.form.mediaPublishedToDate)) {
          this.form.mediaPublishedFromDate = null;
        }
      }

      if (filterType == 'mediaRecordedFromDate') {
        if (!!this.form.mediaRecordedToDate && this.dateConvert(this.form.mediaRecordedFromDate) > this.dateConvert(this.form.mediaRecordedToDate)) {
          this.form.mediaRecordedToDate = null;
        }
      }

      if (filterType == 'mediaRecordedToDate') {
        if (!!this.form.mediaRecordedFromDate && this.dateConvert(this.form.mediaRecordedFromDate) > this.dateConvert(this.form.mediaRecordedToDate)) {
          this.form.mediaRecordedFromDate = null;
        }
      }

      this.getSearchResult();
    },
    getSearchHistories: function getSearchHistories() {
      var _this36 = this;

      _apis_SearchHistory__WEBPACK_IMPORTED_MODULE_6__["default"].getSearchHistories().then(function (response) {
        if (response.data.resultCode == 200) {
          _this36.searchHistories = response.data.data;
        }
      })["catch"](function (error) {
        console.error(error);
      });
    },
    deleteSearchHistory: function deleteSearchHistory() {
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
            action: function action() {
              _apis_SearchHistory__WEBPACK_IMPORTED_MODULE_6__["default"].deleteSearchHistory(vueInstance.selectedSearchHistory.id).then(function (response) {
                if (response.data.resultCode == 200) {
                  vueInstance.searchHistories = vueInstance.searchHistories.filter(function (item) {
                    return item.id != vueInstance.selectedSearchHistory.id;
                  });
                  vueInstance.selectedSearchHistory = null; // vueInstance.getSearchResult(true);

                  toastr.success(response.data.success.message);
                }
              })["catch"](function (error) {
                toastr.error(error.response ? error.response.data.error.message : error);
              });
            }
          },
          Cancel: {
            btnClass: 'btn-default rounded-pill'
          }
        }
      });
    },
    loadSearchHistory: function () {
      var _loadSearchHistory = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee31() {
        var parsedData, excludeKeys, key;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                if (!this.selectedSearchHistory) {
                  toastr.warning('Select a saved query');
                }

                this.isLoading = true;
                this.mainFilter = 'industry';
                _context31.next = 5;
                return this.clearSelectedValuesBeforeSQ();

              case 5:
                if (!this.selectedSearchHistory.query_string) {
                  _context31.next = 170;
                  break;
                }

                parsedData = JSON.parse(this.selectedSearchHistory.query_string);

                if (!(parsedData.industry && !!parsedData.industry)) {
                  _context31.next = 14;
                  break;
                }

                this.setLastSelectedOption('industry');
                this.form.industry = parsedData.industry;
                _context31.next = 12;
                return this.getSectors(parsedData.industry);

              case 12:
                _context31.next = 15;
                break;

              case 14:
                this.form.industry = "";

              case 15:
                if (!(parsedData.sector && !!parsedData.sector)) {
                  _context31.next = 22;
                  break;
                }

                this.setLastSelectedOption('sector');
                this.form.sector = parsedData.sector;
                _context31.next = 20;
                return this.getSubSectors(parsedData.sector);

              case 20:
                _context31.next = 23;
                break;

              case 22:
                this.form.sector = "";

              case 23:
                if (!(parsedData.subSector && !!parsedData.subSector)) {
                  _context31.next = 30;
                  break;
                }

                this.setLastSelectedOption('subsector');
                this.form.subSector = parsedData.subSector;
                _context31.next = 28;
                return this.getGroups(parsedData.subSector);

              case 28:
                _context31.next = 31;
                break;

              case 30:
                this.form.subSector = "";

              case 31:
                if (!(parsedData.group && !!parsedData.group)) {
                  _context31.next = 38;
                  break;
                }

                this.setLastSelectedOption('group');
                this.form.group = parsedData.group;
                _context31.next = 36;
                return this.getSubGroups(parsedData.group);

              case 36:
                _context31.next = 39;
                break;

              case 38:
                this.form.group = "";

              case 39:
                if (!(parsedData.subGroup && !!parsedData.subGroup)) {
                  _context31.next = 46;
                  break;
                }

                this.setLastSelectedOption('subgroup');
                this.form.subGroup = parsedData.subGroup;
                _context31.next = 44;
                return this.getEchelons(parsedData.subGroup);

              case 44:
                _context31.next = 47;
                break;

              case 46:
                this.form.subGroup = "";

              case 47:
                if (!(parsedData.echelon && !!parsedData.echelon)) {
                  _context31.next = 54;
                  break;
                }

                this.setLastSelectedOption('echelon');
                this.form.echelon = parsedData.echelon;
                _context31.next = 52;
                return this.getSubEchelons(parsedData.echelon);

              case 52:
                _context31.next = 55;
                break;

              case 54:
                this.form.echelon = "";

              case 55:
                if (!(parsedData.subEchelon && !!parsedData.subEchelon)) {
                  _context31.next = 62;
                  break;
                }

                this.setLastSelectedOption('subechelon');
                this.form.subEchelon = parsedData.subEchelon;
                _context31.next = 60;
                return this.getTiers(parsedData.subEchelon);

              case 60:
                _context31.next = 63;
                break;

              case 62:
                this.form.subEchelon = "";

              case 63:
                if (!(parsedData.tier && !!parsedData.tier)) {
                  _context31.next = 70;
                  break;
                }

                this.setLastSelectedOption('tier');
                this.form.tier = parsedData.tier;
                _context31.next = 68;
                return this.getSubTiers(parsedData.tier);

              case 68:
                _context31.next = 71;
                break;

              case 70:
                this.form.tier = "";

              case 71:
                if (!(parsedData.subTier && !!parsedData.subTier)) {
                  _context31.next = 78;
                  break;
                }

                this.setLastSelectedOption('subtier');
                this.form.subTier = parsedData.subTier;
                _context31.next = 76;
                return this.getLayers(parsedData.subTier);

              case 76:
                _context31.next = 79;
                break;

              case 78:
                this.form.subTier = "";

              case 79:
                if (!(parsedData.layer && !!parsedData.layer)) {
                  _context31.next = 86;
                  break;
                }

                this.setLastSelectedOption('layer');
                this.form.layer = parsedData.layer;
                _context31.next = 84;
                return this.getSubLayers(parsedData.layer);

              case 84:
                _context31.next = 87;
                break;

              case 86:
                this.form.layer = "";

              case 87:
                if (!(parsedData.subLayer && !!parsedData.subLayer)) {
                  _context31.next = 94;
                  break;
                }

                this.setLastSelectedOption('sublayer');
                this.form.subLayer = parsedData.subLayer;
                _context31.next = 92;
                return this.getDecks(parsedData.subLayer);

              case 92:
                _context31.next = 95;
                break;

              case 94:
                this.form.subLayer = "";

              case 95:
                if (!(parsedData.deck && !!parsedData.deck)) {
                  _context31.next = 102;
                  break;
                }

                this.setLastSelectedOption('deck');
                this.form.deck = parsedData.deck;
                _context31.next = 100;
                return this.getSubDecks(parsedData.deck);

              case 100:
                _context31.next = 103;
                break;

              case 102:
                this.form.deck = "";

              case 103:
                if (!(parsedData.subDeck && !!parsedData.subDeck)) {
                  _context31.next = 110;
                  break;
                }

                this.setLastSelectedOption('subdeck');
                this.form.subDeck = parsedData.subDeck;
                _context31.next = 108;
                return this.getFloors(parsedData.subDeck);

              case 108:
                _context31.next = 111;
                break;

              case 110:
                this.form.subDeck = "";

              case 111:
                if (!(parsedData.floor && !!parsedData.floor)) {
                  _context31.next = 118;
                  break;
                }

                this.setLastSelectedOption('floor');
                this.form.floor = parsedData.floor;
                _context31.next = 116;
                return this.getSubFloors(parsedData.floor);

              case 116:
                _context31.next = 119;
                break;

              case 118:
                this.form.floor = "";

              case 119:
                if (!(parsedData.subFloor && !!parsedData.subFloor)) {
                  _context31.next = 126;
                  break;
                }

                this.setLastSelectedOption('subfloor');
                this.form.subFloor = parsedData.subFloor;
                _context31.next = 124;
                return this.getBasements(parsedData.subFloor);

              case 124:
                _context31.next = 127;
                break;

              case 126:
                this.form.subFloor = "";

              case 127:
                if (!(parsedData.basement && !!parsedData.basement)) {
                  _context31.next = 134;
                  break;
                }

                this.setLastSelectedOption('basement');
                this.form.basement = parsedData.basement;
                _context31.next = 132;
                return this.getSubBasements(parsedData.basement);

              case 132:
                _context31.next = 135;
                break;

              case 134:
                this.form.basement = "";

              case 135:
                if (!(parsedData.subBasement && !!parsedData.subBasement)) {
                  _context31.next = 142;
                  break;
                }

                this.setLastSelectedOption('subbasement');
                this.form.subBasement = parsedData.subBasement;
                _context31.next = 140;
                return this.getMines(parsedData.subBasement);

              case 140:
                _context31.next = 143;
                break;

              case 142:
                this.form.subBasement = "";

              case 143:
                if (!(parsedData.mine && !!parsedData.mine)) {
                  _context31.next = 150;
                  break;
                }

                this.setLastSelectedOption('mine');
                this.form.mine = parsedData.mine;
                _context31.next = 148;
                return this.getSubMines(parsedData.mine);

              case 148:
                _context31.next = 151;
                break;

              case 150:
                this.form.mine = "";

              case 151:
                if (parsedData.subMine && !!parsedData.subMine) {
                  this.setLastSelectedOption('submine');
                  this.form.subMine = parsedData.subMine;
                } else {
                  this.form.subMine = "";
                } //set other fields in the form


                excludeKeys = ['industry', 'sector', 'subSector', 'group', 'subGroup', 'echelon', 'subEchelon', 'tier', 'subTier', 'layer', 'subLayer', 'deck', 'subDeck', 'floor', 'subFloor', 'basement', 'subBasement', 'mine', 'subMine'];

                for (key in parsedData) {
                  if (!excludeKeys.includes(key)) {
                    this.form[key] = parsedData[key];
                  }
                } //set company characteristics tab multiple option filters


                if (!!this.form.selectedTradingAndReportingStatus) {
                  this.tradingAndReportingStatusListMapArray = this.form.selectedTradingAndReportingStatus;
                  this.tradingAndReportingStatusListValueCount = this.form.selectedTradingAndReportingStatus.length;
                  this.tradingAndReportingStatusListIds = this.form.selectedTradingAndReportingStatus;
                  this.tradingAndReportingStatusListInput = this.form.selectedTradingAndReportingStatus;
                }

                if (!!this.form.selectedResearchCoverage) {
                  this.researchMapArray = this.form.selectedResearchCoverage;
                  this.researchCoverageTypeValueCount = this.form.selectedResearchCoverage.length;
                  this.researchCoverageTypeIds = this.form.selectedResearchCoverage;
                  this.researchCoverageTypeInput = this.form.selectedResearchCoverage;
                }

                if (!!this.form.selectedIntellectualProperty) {
                  this.intellectualMapArray = this.form.selectedIntellectualProperty;
                  this.intellectualPropertyValueCount = this.form.selectedIntellectualProperty.length;
                  this.intellectualPropertyIds = this.form.selectedIntellectualProperty;
                  this.intellectualInput = this.form.selectedIntellectualProperty;
                }

                if (!!this.form.selectedFinancingType) {
                  this.financingMapArray = this.form.selectedFinancingType;
                  this.financingTypeValueCount = this.form.selectedFinancingType.length;
                  this.financingTypeIds = this.form.selectedFinancingType;
                  this.financingTypeInput = this.form.selectedFinancingType;
                }

                if (!!this.form.selectedScrp) {
                  this.sharedCommunityResearchPlatformListMapArray = this.form.selectedScrp;
                  this.sharedCommunityResearchPlatformListValueCount = this.form.selectedScrp.length;
                  this.sharedCommunityResearchPlatformListIds = this.form.selectedScrp;
                  this.sharedCommunityResearchPlatformListInput = this.form.selectedScrp;
                }

                if (!!this.form.selectedMinorityOwnedBusiness) {
                  this.minorityOwnedBusinessMapArray = this.form.selectedMinorityOwnedBusiness;
                  this.minorityOwnedBusinessValueCount = this.form.selectedMinorityOwnedBusiness.length;
                  this.minorityOwnedBusinessIds = this.form.selectedMinorityOwnedBusiness;
                  this.minorityOwnedBusinessInput = this.form.selectedMinorityOwnedBusiness;
                }

                if (!!this.form.selectedExchangedTradedOn) {
                  this.exchangedTradedOnMapArray = this.form.selectedExchangedTradedOn;
                  this.exchangedTradedOnValueCount = this.form.selectedExchangedTradedOn.length;
                  this.exchangedTradedOnIds = this.form.selectedExchangedTradedOn;
                  this.exchangedTradedOnInput = this.form.selectedExchangedTradedOn;
                } //set video tab multiple option filters


                if (!!this.form.selectedVideoParticipants) {
                  this.videoParticipantMapArray = this.form.selectedVideoParticipants;
                  this.videoParticipantValueCount = this.form.selectedVideoParticipants.length;
                  this.videoParticipantIds = this.form.selectedVideoParticipants;
                  this.videoParticipantInput = this.form.selectedVideoParticipants;
                }

                if (!!this.form.selectedVideoSubTypes) {
                  this.videoSubTypeMapArray = this.form.selectedVideoSubTypes;
                  this.videoSubTypeValueCount = this.form.selectedVideoSubTypes.length;
                  this.videoSubTypeIds = this.form.selectedVideoSubTypes;
                  this.videoSubTypeInput = this.form.selectedVideoSubTypes;
                }

                if (!!this.form.selectedVideoSubjectTypes) {
                  this.videoSubjectTypeMapArray = this.form.selectedVideoSubjectTypes;
                  this.videoSubjectTypeValueCount = this.form.selectedVideoSubjectTypes.length;
                  this.videoSubjectTypeIds = this.form.selectedVideoSubjectTypes;
                  this.videoSubjectTypeInput = this.form.selectedVideoSubjectTypes;
                } //set audio tab multiple option filters


                if (!!this.form.selectedAudioParticipants) {
                  this.audioParticipantMapArray = this.audioParticipantIds = this.form.selectedAudioParticipants;
                  this.audioParticipantValueCount = this.form.selectedAudioParticipants.length;
                  this.audioParticipantInput = this.form.selectedAudioParticipants;
                }

                if (!!this.form.selectedAudioSubTypes) {
                  this.audioSubTypeMapArray = this.audioSubTypeIds = this.form.selectedAudioSubTypes;
                  this.audioSubTypeValueCount = this.form.selectedAudioSubTypes.length;
                  this.audioSubTypeInput = this.form.selectedAudioSubTypes;
                }

                if (!!this.form.selectedAudioSubjectTypes) {
                  this.audioSubjectTypeMapArray = this.audioSubjectTypeIds = this.form.selectedAudioSubjectTypes;
                  this.audioSubjectTypeValueCount = this.form.selectedAudioSubjectTypes.length;
                  this.audioSubjectTypeInput = this.form.selectedAudioSubjectTypes;
                }

                _context31.next = 169;
                return this.getSearchResult(true);

              case 169:
                this.isLoading = false;

              case 170:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      function loadSearchHistory() {
        return _loadSearchHistory.apply(this, arguments);
      }

      return loadSearchHistory;
    }(),
    saveSearchHistory: function saveSearchHistory() {
      var _this37 = this;

      this.$v.queryName.$touch();

      if (this.$v.queryName.$invalid) {
        this.$refs.queryName.focus();
        return;
      }

      var formData = this.form; //set company characteristics multiple option values

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
      } //set video multiple option values


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
      } //set audio multiple option values


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

      var data = {
        name: this.queryName,
        search_query: JSON.stringify(formData)
      };
      _apis_SearchHistory__WEBPACK_IMPORTED_MODULE_6__["default"].saveSearchHistory(data).then(function (response) {
        _this37.getSearchHistories();

        _this37.$bvModal.hide('saveSearchQueryModal');

        _this37.errors = [];
        _this37.queryName = '';

        _this37.$v.$reset();

        toastr.success(response.data.success.message);
      })["catch"](function (error) {
        if (error.response.data.resultCode == 422 && error.response.data.error.message) {
          _this37.errors = error.response.data.error.message;
        } else {
          toastr.error(error);
        }
      });
    },
    showSearchQueryModal: function showSearchQueryModal() {
      if (!this.totalCompanyContactFilters && !this.totalHistoryFilters && !this.totalIndustriesFilters && !this.totalCharacteristics && !this.totalVideoAudioCharacteristics && !this.totalGeographyFilters && !this.totalSocialFilters && !this.totalLeadershipFilters && !this.totalResearchCoverageFilters) {
        toastr.warning('You haven\'t made any search');
        return;
      }

      this.$bvModal.show('saveSearchQueryModal');
    },
    clearSelectedValuesBeforeSQ: function () {
      var _clearSelectedValuesBeforeSQ = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee32() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
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
                this.privatePublicCompany = "";
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
                this.hasFounder = null, this.hasCeo = null;
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
                this.lastSelectedOption = '';
                this.tradingAndReportingStatusListIds = [];
                this.tradingAndReportingStatusListInput = [];
                this.tradingAndReportingStatusListMapArray = [];
                this.tradingAndReportingStatusListValueCount = 0;
                this.intellectualPropertyIds = [];
                this.intellectualMapArray = [];
                this.intellectualInput = [];
                this.intellectualPropertyValueCount = 0;
                this.researchCoverageTypeIds = [];
                this.researchCoverageTypeInput = [];
                this.researchMapArray = [];
                this.researchCoverageTypeValueCount = 0;
                this.financingTypeIds = [];
                this.financingTypeInput = [];
                this.financingMapArray = [];
                this.financingTypeValueCount = 0;
                this.sharedCommunityResearchPlatformListIds = [];
                this.sharedCommunityResearchPlatformListInput = [];
                this.sharedCommunityResearchPlatformListMapArray = [];
                this.sharedCommunityResearchPlatformListValueCount = 0;
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
                this.exchangedTradedOnValueCount = 0; //remove additional fields used for multiple option fields

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

              case 131:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      function clearSelectedValuesBeforeSQ() {
        return _clearSelectedValuesBeforeSQ.apply(this, arguments);
      }

      return clearSelectedValuesBeforeSQ;
    }(),
    getCountryList: function getCountryList() {
      var _this38 = this;

      axios.get('/api/country-list').then(function (response) {
        _this38.countries = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getStatesByCountry: function getStatesByCountry() {
      var _this39 = this;

      this.getSearchResult();
      _apis_Geography__WEBPACK_IMPORTED_MODULE_8__["default"].states(this.form.country).then(function (response) {
        if (response.data.data) {
          _this39.states = response.data.data;

          _this39.updateFieldSelection('state');
        }
      })["catch"](function (error) {
        return toastr.error(error);
      });
    },
    getStatesOrProvinceStatus: function getStatesOrProvinceStatus(value) {
      var _this40 = this;

      if (!value) {
        this.haveState = this.haveProvince = 0;
        this.clearNodeValue('state');
        this.clearNodeValue('province');
        this.getSearchResult();
        return;
      }

      _apis_Geography__WEBPACK_IMPORTED_MODULE_8__["default"].getStatesOrProvinceStatus(value).then(function (response) {
        _this40.haveState = response.data.data[0].have_state;
        _this40.haveProvince = response.data.data[0].have_province;

        _this40.clearNodeValue('province');

        if (_this40.haveState == 1) {
          _this40.getStatesByCountry(value);
        } else {
          _this40.clearNodeValue('state');
        }

        _this40.getSearchResult();
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    submitMultiDropdown: function submitMultiDropdown(mappedArray, valueCount, inputArray, refsComponent) {
      this[mappedArray] = this[inputArray];
      this[valueCount] = this[mappedArray].length;
      this.$refs[refsComponent].click();
      this.getSearchResult();
    },
    getLeadershipAndGovernanceRoles: function getLeadershipAndGovernanceRoles(roleType) {
      var _this41 = this;

      _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_9__["default"].getLeadershipAndGovernanceRoles(roleType).then(function (response) {
        _this41.isLoading = false;

        if (roleType == 'board_committee') {
          _this41.committees = response.data.data;
        } else {
          _this41.executiveRoles = response.data.data;
        }
      })["catch"](function (error) {
        _this41.isLoading = false;
        console.log(error);
      });
    },
    getPubliclyTradedCompanyTypeList: function getPubliclyTradedCompanyTypeList() {
      var _this42 = this;

      axios.get('/api/get-publicly-traded-company-type-list').then(function (response) {
        _this42.publiclyTradedCompanyTypeList = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getExchangeTradedList: function getExchangeTradedList() {
      var _this43 = this;

      axios.get('/api/get-exchange-traded-list').then(function (response) {
        _this43.exchangeTradedList = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getEntityTypeByCountry: function getEntityTypeByCountry() {
      this.entityTypes = [];
      var countryId = this.form.domicileCountry ? this.form.domicileCountry.id : 'all';
      this.getEntityTypeList(countryId);
    }
  },
  validations: {
    queryName: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"]
    }
  },
  computed: {
    totalIndustriesFilters: function totalIndustriesFilters() {
      var count = 0;

      if (!!this.form.industry) {
        count++;
      }

      if (!!this.form.sector) {
        count++;
      }

      if (!!this.form.subSector) {
        count++;
      }

      if (!!this.form.group) {
        count++;
      }

      if (!!this.form.subGroup) {
        count++;
      }

      if (!!this.form.echelon) {
        count++;
      }

      if (!!this.form.subEchelon) {
        count++;
      }

      if (!!this.form.tier) {
        count++;
      }

      if (!!this.form.subTier) {
        count++;
      }

      if (!!this.form.layer) {
        count++;
      }

      if (!!this.form.subLayer) {
        count++;
      }

      if (!!this.form.deck) {
        count++;
      }

      if (!!this.form.subDeck) {
        count++;
      }

      if (!!this.form.floor) {
        count++;
      }

      if (!!this.form.subFloor) {
        count++;
      }

      if (!!this.form.basement) {
        count++;
      }

      if (!!this.form.subBasement) {
        count++;
      }

      if (!!this.form.mine) {
        count++;
      }

      if (!!this.form.subMine) {
        count++;
      }

      return count > 0 ? count : '';
    },
    totalCharacteristics: function totalCharacteristics() {
      var selected = 0;

      if (!!this.form.entityType) {
        selected++;
      }

      if (!!this.form.privatePublicCompany) {
        selected++;
      }

      if (this.tradingAndReportingStatusListMapArray.length) {
        selected++;
      }

      if (!!this.form.publicPrivateReportingStatus) {
        selected++;
      }

      if (!!this.form.shareholderNumber) {
        selected++;
      }

      if (!!this.form.baseCurrency) {
        selected++;
      }

      if (null != this.form.conglomerate) {
        selected++;
      }

      if (this.intellectualMapArray.length) {
        selected++;
      }

      if (this.financingMapArray.length) {
        selected++;
      }

      if (!!this.form.companyValuation) {
        selected++;
      }

      if (null != this.form.auditedFinance) {
        selected++;
      }

      if (null != this.form.conductFinancing) {
        selected++;
      }

      if (null != this.form.hasFounder) {
        selected++;
      }

      if (null != this.form.hasCeo) {
        selected++;
      }

      if (null != this.form.hasCfo) {
        selected++;
      }

      if (!!this.form.tickerSymbol) {
        selected++;
      } // if(!!this.form.formedYear){
      //     selected++
      // }
      // if(!!this.form.firstProductOrService){
      //     selected++
      // }


      if (!!this.form.acquisitionsMade) {
        selected++;
      }

      if (!!this.form.spinOffMade) {
        selected++;
      }

      if (!!this.form.dividend) {
        selected++;
      }

      if (!!this.form.domicileCountry) {
        selected++;
      }

      if (this.form.isin) {
        selected++;
      }

      if (this.form.cusip) {
        selected++;
      }

      if (this.form.publiclyTradedCompany) {
        selected++;
      }

      if (this.exchangedTradedOnMapArray.length) {
        selected++;
      }

      if (!!this.form.employeeNumber) {
        selected++;
      }

      if (this.minorityOwnedBusinessMapArray.length) {
        selected++;
      }

      if (null != this.form.esgRating) {
        selected++;
      }

      if (selected > 0) {
        return "(" + selected + ")";
      }

      return "";
    },
    totalCompanyContactFilters: function totalCompanyContactFilters() {
      var contactFilter = 0;

      if (null != this.form.hasIrd) {
        contactFilter++;
      }

      if (null != this.form.hasBusinessDevelopment) {
        contactFilter++;
      }

      if (null != this.form.hasSalesDepartment) {
        contactFilter++;
      }

      if (this.form.hasStrategicPartnership) {
        contactFilter++;
      }

      if (this.form.hasSuppliers) {
        contactFilter++;
      }

      if (contactFilter > 0) {
        return "(" + contactFilter + ")";
      }

      return "";
    },
    totalHistoryFilters: function totalHistoryFilters() {
      var historyFilter = 0;

      if (!!this.form.formedYearFromDate) {
        historyFilter++;
      }

      if (!!this.form.formedYearToDate) {
        historyFilter++;
      }

      if (!!this.form.firstProductOrService) {
        historyFilter++;
      }

      if (!!this.form.numberOfMajorProductOrService) {
        historyFilter++;
      }

      if (!!this.form.changeDirectionOrStrategy) {
        historyFilter++;
      }

      if (historyFilter > 0) {
        return "(" + historyFilter + ")";
      }

      return '';
    },
    totalGeographyFilters: function totalGeographyFilters() {
      var selected = 0;

      if (this.form.city) {
        selected++;
      }

      if (this.form.state) {
        selected++;
      }

      if (this.form.country) {
        selected++;
      }

      return selected > 0 ? '(' + selected + ')' : '';
    },
    totalSocialFilters: function totalSocialFilters() {
      var selected = 0;

      if (this.socialMediaListMapArray.length) {
        selected++;
      }

      if (selected > 0) {
        return "(" + selected + ")";
      }

      return "";
    },
    totalResearchCoverageFilters: function totalResearchCoverageFilters() {
      var selected = 0;

      if (this.sharedCommunityResearchPlatformListMapArray.length) {
        selected++;
      }

      if (this.researchMapArray.length) {
        selected++;
      }

      if (!!this.form.researchFirm_name) {
        selected++;
      }

      return selected > 0 ? '(' + selected + ')' : '';
    },
    popupModalFilteredOptions: function popupModalFilteredOptions() {
      var _this44 = this;

      if (!this.form.itemInput) return this.modalData;
      return this.modalData.filter(function (item) {
        var find = _this44.form.itemInput.some(function (selected) {
          return item.id == selected.id;
        });

        if (!find) return item;
      });
    },
    isLoggedIn: function isLoggedIn() {
      return localStorage.getItem("token");
    },
    totalLeadershipFilters: function totalLeadershipFilters() {
      var selected = 0;

      if (this.form.hasBoardMember) {
        selected++;
      }

      if (this.form.hasExecutive) {
        selected++;
      }

      if (this.form.committee) {
        selected++;
      }

      if (this.form.executiveRole) {
        selected++;
      }

      if (this.form.memberName) {
        selected++;
      }

      return selected > 0 ? '(' + selected + ')' : '';
    },
    totalVideoAudioCharacteristics: function totalVideoAudioCharacteristics() {
      var videoAudioFilter = 0;

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

      if (videoAudioFilter > 0) {
        return "(" + videoAudioFilter + ")";
      }

      return '';
    }
  },
  created: function created() {
    this.nodeColor = _apis_Common__WEBPACK_IMPORTED_MODULE_3__["default"].hierarchyNodeColor;
    this.dateConvert = _apis_Common__WEBPACK_IMPORTED_MODULE_3__["default"].dateConvert;
    this.numShortFormatter = _apis_Common__WEBPACK_IMPORTED_MODULE_3__["default"].ViewListenNumFormatter;
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

    if (!!this.isLoggedIn) {
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
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_1__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a,
    pagination: function pagination() {
      return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ../components/PaginationComponent */ "./resources/js/components/PaginationComponent.vue"));
    },
    loader: function loader() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/Loader */ "./resources/js/components/Loader.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewScreener.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/NewScreener.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".screener2 {\n  /*.tree-image {*/\n  /*    width: 50%;*/\n  /*}*/\n}\n.screener2 .screener-tab .tab-content {\n  background: none !important;\n  border: none;\n}\n.screener2 .screener-tab .nav-item {\n  margin-right: 5px;\n  margin-bottom: 5px;\n}\n.screener2 .field-no-selected {\n  background-color: #c4c4c4;\n}\n.screener2 .field-no-selected ::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #ffffff;\n}\n.screener2 .field-no-selected ::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #ffffff;\n}\n.screener2 .field-no-selected :-ms-input-placeholder {\n  /* IE 10+ */\n  color: #ffffff;\n}\n.screener2 .field-no-selected :-moz-placeholder {\n  /* Firefox 18- */\n  color: #ffffff;\n}\n.screener2 .vs--single:not(.vs--open) .vs__selected + .vs__search {\n  width: 0;\n  padding: 0;\n  margin: 0;\n  border: none;\n  height: 0;\n}\n.screener2 .vs--single .vs__selected-options {\n  width: 0;\n}\n.screener2 .vs--single .vs__selected {\n  /*display: block;*/\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 100%;\n  overflow: hidden;\n}\n.screener2 .dashboard-search-icon {\n  z-index: 0 !important;\n}\n.screener2 ::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: #cecece;\n}\n.screener2 ::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #cecece;\n  opacity: 1;\n}\n.screener2 :-ms-input-placeholder {\n  /* IE 10+ */\n  color: #cecece;\n}\n.screener2 :-moz-placeholder {\n  /* Firefox 18- */\n  color: #cecece;\n  opacity: 1;\n}\n.screener2 .form-control {\n  height: auto !important;\n}\n.screener2 .form-control.recent-valuation {\n  padding: 10px 7px !important;\n  font-size: 0.75rem;\n}\n.screener2 .form-group {\n  margin-bottom: 0;\n}\n.screener2 .vs__dropdown-toggle {\n  border: 0px !important;\n}\n.screener2 .control-label {\n  font-weight: 700;\n  font-size: 12px;\n  margin-bottom: 0;\n}\n.screener2 .vs__selected, .screener2 .vs__search, .screener2 .vs__dropdown-menu {\n  font-size: 12px !important;\n}\n.screener2 .vs__search {\n  z-index: 0;\n}\n.screener2 .search-field {\n  padding: 5px;\n}\n.screener2 .search-result-container {\n  border-radius: 0.75rem;\n  margin-top: 10px;\n  position: relative;\n  min-height: 230px;\n}\n.screener2 .search-result-container .card-body p {\n  font-size: 0.75rem;\n  color: rgba(30, 8, 87, 0.8);\n  margin-bottom: 2px;\n}\n.screener2 .search-result-container .card-body .warp-text-title {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 150px;\n}\n.screener2 .search-result-container .card-wrapper {\n  padding: 5px;\n}\n.screener2 .search-result-container .card-wrapper .card {\n  max-height: 230px;\n}\n.screener2 .search-result-container .company-title, .screener2 .search-result-container ul.pagination {\n  font-size: 0.625rem;\n  color: #6a666d;\n}\n.screener2 .search-result-container ul.content-ul {\n  display: inline-flex;\n  font-size: 0.625rem;\n  color: #8a878d;\n  padding-left: 0px;\n}\n.screener2 .search-result-container ul.content-ul li:not(:last-child) {\n  padding-right: 12px;\n}\n.screener2 .search-result-container ul.content-ul li:first-child {\n  list-style: none;\n}\n.screener2 .search-result-container .fa-circle {\n  font-size: 1px;\n}\n.screener2 .search-result-container .loader {\n  /* Loader Div Class */\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #eceaea;\n  background-image: url(/images/small-loader.gif);\n  background-size: 50px;\n  background-repeat: no-repeat;\n  background-position: center;\n  z-index: 10000000;\n  opacity: 0.4;\n  filter: alpha(opacity=40);\n}\n.screener2 .search-result-container .bg_content_photo {\n  display: block;\n  width: 100%;\n  height: 135px;\n  background-position: center 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #7E097C;\n}\n.screener2 .card-body {\n  padding: 8px !important;\n}\n.screener2 .vdp-datepicker__clear-button {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n}\n.screener2 .vs__dropdown-menu {\n  min-width: 300px;\n  right: 0 !important;\n  left: auto;\n}\n.screener2 .screener-content-tab li a.active {\n  background-color: #2a8bf2 !important;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n.screener2 .item-count {\n  font-size: 12px;\n}\n.screener2 .dateRange {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n}\n.screener2 .dateRange .form-control {\n  line-height: 2.6;\n  font-size: 12px;\n  padding: 4px;\n}\n.screener2 .dateRange .calendar-icon {\n  position: absolute;\n  bottom: 12px;\n  right: 2px;\n  z-index: 2;\n  cursor: pointer;\n}\n.screener2 .screener2-search input {\n  padding-left: 20px !important;\n}\n.screener2 .screener2-search input:focus {\n  outline: 0 none;\n  border-color: #2A8BF2;\n  box-shadow: 0 0 3px #2a8bf2 inset, 0 0 0px #2a8bf2;\n}\n.screener2 input[type=search]::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n}\n.screener2 #searchclear {\n  position: absolute;\n  right: 50px;\n  top: -7px;\n  bottom: 0;\n  height: 14px;\n  margin: auto;\n  font-size: 14px;\n  cursor: pointer;\n  color: #000;\n  z-index: 99;\n}\n.screener2 .screener2-search .dashboard-search-icon {\n  border-color: #DCDFE3 !important;\n  border-left: 0px !important;\n  border-right: 1px solid #DCDFE3 !important;\n  box-shadow: 0 0 0 0 rgba(52, 144, 220, 0.25) !important;\n  background-color: #F5F5F5 !important;\n  border-top-left-radius: 0px !important;\n  border-bottom-left-radius: 0px !important;\n  color: #6c757d !important;\n}\n.screener2 .screener-tab .dropdown-footer {\n  background-color: #3490dc;\n  padding: 5px;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.screener2 .screener-tab .dropdown-footer button {\n  line-height: 1;\n  background-color: white;\n  color: #3490dc;\n  font-weight: bold;\n}\n.screener2 .screener-tab .dropdown-content-options {\n  padding: 0 8px 8px;\n  margin-bottom: 0;\n  list-style: none;\n}\n.screener2 .screener-tab .dropdown-content-options input[type=checkbox] {\n  width: 16px;\n  height: 16px;\n}\n.screener2 .screener-tab .dropdown-menu {\n  padding-bottom: 0;\n  min-width: 100%;\n  max-height: 15rem;\n  overflow: auto;\n}\n.screener2 .screener-tab .dropdown-menu label {\n  flex: 1;\n  white-space: nowrap;\n}\n.confirm-modal-title .jconfirm-title {\n  font-size: 16px !important;\n  color: #1e0857;\n}\n.confirm-modal-title .jconfirm-title {\n  font-size: 16px !important;\n  color: #1e0857;\n}\n@media (min-width: 768px) and (max-width: 1120px) {\n.screener2 .search-result-container ul.content-ul {\n    font-size: 0.5rem;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewScreener.vue?vue&type=style&index=1&id=0da149ec&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/NewScreener.vue?vue&type=style&index=1&id=0da149ec&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.modal-btn[data-v-0da149ec] {\r\n    color: #fff;\r\n    background-color: #3490dc;\r\n    border-color: #3490dc;\n}\n.form-control.cursor-pointer[data-v-0da149ec]{\r\n    cursor: pointer;\n}\n.form-control[data-v-0da149ec]{\r\n    padding: 4px 0 !important;\n}\n.selected-value[data-v-0da149ec]{\r\n    background: green !important;\r\n    color: #ffffff;\n}\n.save-queries div[data-v-0da149ec], .save-queries button[data-v-0da149ec] {\r\n    margin-right: 10px;\n}\n.save-queries button[data-v-0da149ec]:focus {\r\n    box-shadow: none;\r\n    border-color: #ced4da;\n}\n.save-queries[data-v-0da149ec] > :last-child { margin-right: 0\n}\n.save-queries[data-v-0da149ec] > :first-child { flex: 2\n}\n.save-queries[data-v-0da149ec] > :not(:first-child) { flex: 1\n}\n.save-queries .form-control[data-v-0da149ec] { padding: 2px 0 !important\n}\n.save-queries button[data-v-0da149ec]:not(:disabled):hover {\r\n    background-color: #391791;\r\n    color: white;\r\n    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out\n}\n.save-queries button[data-v-0da149ec]:disabled {\r\n    cursor: not-allowed;\r\n    background-color: #e9ecef !important;\n}\n#saveSearchQueryModal .form-control[data-v-0da149ec] { padding: 4px !important;\n}\n.search-results-top-section[data-v-0da149ec]{\r\n    margin-left: -15px;\n}\n.search-results-top-section hr[data-v-0da149ec]{\r\n    margin-bottom: 0.5rem;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewScreener.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/NewScreener.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./NewScreener.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewScreener.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewScreener.vue?vue&type=style&index=1&id=0da149ec&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/NewScreener.vue?vue&type=style&index=1&id=0da149ec&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./NewScreener.vue?vue&type=style&index=1&id=0da149ec&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewScreener.vue?vue&type=style&index=1&id=0da149ec&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewScreener.vue?vue&type=template&id=0da149ec&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/NewScreener.vue?vue&type=template&id=0da149ec&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "section",
      { staticClass: "screener2 pt-0" },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { class: _vm.isLoggedIn ? "col-md-6" : "col-md-9" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col pb-3" }, [
                _c("div", { staticClass: "input-group screener2-search" }, [
                  (_vm.form.searchStr != ""
                  ? { focus: (_vm.showSearchClear = true) }
                  : { focusout: (_vm.showSearchClear = false) })
                    ? _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.searchStr,
                            expression: "form.searchStr"
                          }
                        ],
                        staticClass: "form-control border-end-0 border",
                        attrs: {
                          type: "search",
                          placeholder: "Search across your channel"
                        },
                        domProps: { value: _vm.form.searchStr },
                        on: {
                          keyup: function($event) {
                            if (
                              !$event.type.indexOf("key") &&
                              _vm._k(
                                $event.keyCode,
                                "enter",
                                13,
                                $event.key,
                                "Enter"
                              )
                            ) {
                              return null
                            }
                            return _vm.getSearchResult.apply(null, arguments)
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "searchStr", $event.target.value)
                          }
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.showSearchClear
                    ? _c("span", { attrs: { id: "searchclear" } }, [
                        _c("i", {
                          staticClass: "fas fa-times",
                          on: {
                            click: function($event) {
                              _vm.form.searchStr = ""
                            }
                          }
                        })
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("span", { staticClass: "input-group-append" }, [
                    _c("span", { staticClass: "btn dashboard-search-icon" }, [
                      _c("i", {
                        staticClass: "fa fa-search",
                        on: { click: _vm.getSearchResult }
                      })
                    ])
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _vm.isLoggedIn
            ? _c("div", { staticClass: "col-md-6" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "pb-3 d-flex justify-content-between save-queries"
                  },
                  [
                    _c("v-select", {
                      staticClass: "form-control",
                      attrs: {
                        options: _vm.searchHistories,
                        placeholder: "Select Below",
                        label: "name"
                      },
                      model: {
                        value: _vm.selectedSearchHistory,
                        callback: function($$v) {
                          _vm.selectedSearchHistory = $$v
                        },
                        expression: "selectedSearchHistory"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "form-control",
                        attrs: {
                          type: "button",
                          disabled: !_vm.selectedSearchHistory
                        },
                        on: { click: _vm.loadSearchHistory }
                      },
                      [_vm._v("Load")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "form-control",
                        attrs: {
                          type: "button",
                          disabled: !_vm.selectedSearchHistory
                        },
                        on: { click: _vm.deleteSearchHistory }
                      },
                      [_vm._v("Delete")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "form-control",
                        attrs: { type: "button" },
                        on: { click: _vm.showSearchQueryModal }
                      },
                      [_vm._v("Save")]
                    )
                  ],
                  1
                )
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-2 mb-3" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "state-container text-center" }, [
                  _c(
                    "div",
                    { staticClass: "pt-2" },
                    [
                      _vm.form.industry
                        ? _c(
                            "span",
                            {
                              staticClass:
                                "d-block px-1 py-2 text-white rounded",
                              style: {
                                backgroundColor: this.nodeColor("industry")
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.form.industry.description) +
                                  "\n                                    "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.sector
                        ? [
                            _vm._m(1),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "d-block px-auto py-2 text-white rounded",
                                style: {
                                  backgroundColor: this.nodeColor("sector")
                                }
                              },
                              [_vm._v(_vm._s(_vm.form.sector.description))]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.subSector
                        ? [
                            _vm._m(2),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "d-block px-auto py-2 text-white rounded",
                                style: {
                                  backgroundColor: this.nodeColor("subSector")
                                }
                              },
                              [_vm._v(_vm._s(_vm.form.subSector.description))]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.group
                        ? [
                            _vm._m(3),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "d-block px-auto py-2 text-white rounded",
                                style: {
                                  backgroundColor: this.nodeColor("group")
                                }
                              },
                              [_vm._v(_vm._s(_vm.form.group.description))]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.subGroup
                        ? [
                            _vm._m(4),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "d-block px-auto py-2 text-white rounded",
                                style: {
                                  backgroundColor: this.nodeColor("subGroup")
                                }
                              },
                              [_vm._v(_vm._s(_vm.form.subGroup.description))]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.echelon
                        ? [
                            _vm._m(5),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "d-block px-auto py-2 text-white rounded",
                                style: {
                                  backgroundColor: this.nodeColor("echelon")
                                }
                              },
                              [_vm._v(_vm._s(_vm.form.echelon.description))]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.subEchelon
                        ? [
                            _vm._m(6),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "d-block px-auto py-2 text-white rounded",
                                style: {
                                  backgroundColor: this.nodeColor("subEchelon")
                                }
                              },
                              [_vm._v(_vm._s(_vm.form.subEchelon.description))]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.tier
                        ? [
                            _vm._m(7),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "d-block px-auto py-2 text-white rounded",
                                style: {
                                  backgroundColor: this.nodeColor("tier")
                                }
                              },
                              [_vm._v(_vm._s(_vm.form.tier.description))]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.subTier
                        ? [
                            _vm._m(8),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "d-block px-auto py-2 text-white rounded",
                                style: {
                                  backgroundColor: this.nodeColor("subTier")
                                }
                              },
                              [_vm._v(_vm._s(_vm.form.subTier.description))]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.layer
                        ? [
                            _vm._m(9),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "d-block px-auto py-2 text-white rounded",
                                style: {
                                  backgroundColor: this.nodeColor("layer")
                                }
                              },
                              [_vm._v(_vm._s(_vm.form.layer.description))]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.subLayer
                        ? [
                            _vm._m(10),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "d-block px-auto py-2 text-white rounded",
                                style: {
                                  backgroundColor: this.nodeColor("subLayer")
                                }
                              },
                              [_vm._v(_vm._s(_vm.form.subLayer.description))]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.deck
                        ? [
                            _vm._m(11),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "d-block px-auto py-2 text-white rounded",
                                style: {
                                  backgroundColor: this.nodeColor("deck")
                                }
                              },
                              [_vm._v(_vm._s(_vm.form.deck.description))]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.subDeck
                        ? [
                            _vm._m(12),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "d-block px-auto py-2 text-white rounded",
                                style: {
                                  backgroundColor: this.nodeColor("subDeck")
                                }
                              },
                              [_vm._v(_vm._s(_vm.form.subDeck.description))]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.floor
                        ? [
                            _vm._m(13),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "d-block px-auto py-2 text-white rounded",
                                style: {
                                  backgroundColor: this.nodeColor("floor")
                                }
                              },
                              [_vm._v(_vm._s(_vm.form.floor.description))]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.subFloor
                        ? [
                            _vm._m(14),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "d-block px-auto py-2 text-white rounded",
                                style: {
                                  backgroundColor: this.nodeColor("subFloor")
                                }
                              },
                              [_vm._v(_vm._s(_vm.form.subFloor.description))]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.basement
                        ? [
                            _vm._m(15),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "d-block px-auto py-2 text-white rounded",
                                style: {
                                  backgroundColor: this.nodeColor("basement")
                                }
                              },
                              [_vm._v(_vm._s(_vm.form.basement.description))]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.subBasement
                        ? [
                            _vm._m(16),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "d-block px-auto py-2 text-white rounded",
                                style: {
                                  backgroundColor: this.nodeColor("subBasement")
                                }
                              },
                              [_vm._v(_vm._s(_vm.form.subBasement.description))]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.mine
                        ? [
                            _vm._m(17),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "d-block px-auto py-2 text-white rounded",
                                style: {
                                  backgroundColor: this.nodeColor("mine")
                                }
                              },
                              [_vm._v(_vm._s(_vm.form.mine.description))]
                            )
                          ]
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.form.subMine
                        ? [
                            _vm._m(18),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "d-block px-auto py-2 text-white rounded",
                                style: {
                                  backgroundColor: this.nodeColor("subMine")
                                }
                              },
                              [_vm._v(_vm._s(_vm.form.subMine.description))]
                            )
                          ]
                        : _vm._e()
                    ],
                    2
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-10" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-12" },
                [
                  _c(
                    "b-tabs",
                    {
                      staticClass:
                        "content-customized-tab screener-tab screener-top-tab",
                      attrs: { "nav-class": "row" }
                    },
                    [
                      _c(
                        "b-tab",
                        {
                          attrs: { title: "Industry" },
                          on: {
                            click: function($event) {
                              _vm.mainFilter = "industry"
                            }
                          }
                        },
                        [
                          _c("b-card-text", [
                            _c("div", { staticClass: "row state-container" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Industry")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    staticClass: "form-control",
                                    attrs: {
                                      label: "description",
                                      options: _vm.industries,
                                      placeholder: "Select field"
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.setLastSelectedOption("industry")
                                        _vm.getSectors(_vm.form.industry)
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
                                  _vm.totalIndustries != null &&
                                  !!_vm.form.industry
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "float-right item-count font-weight-bold"
                                        },
                                        [
                                          _vm._v(
                                            "(" +
                                              _vm._s(_vm.totalIndustries) +
                                              " Results)"
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Sector")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "sector",
                                    staticClass: "form-control",
                                    class: _vm.sectorSelected,
                                    attrs: {
                                      label: "description",
                                      options: _vm.sectors,
                                      placeholder: "Select field"
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.setLastSelectedOption("sector")
                                        _vm.getSubSectors(
                                          _vm.form.sector,
                                          "Input"
                                        )
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
                                  _vm.totalSectors != null && !!_vm.form.sector
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "float-right item-count font-weight-bold"
                                        },
                                        [
                                          _vm._v(
                                            "(" +
                                              _vm._s(_vm.totalSectors) +
                                              " Results)"
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Sub Sector")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "subSector",
                                    staticClass: "form-control",
                                    class: _vm.subSectorSelected,
                                    attrs: {
                                      label: "description",
                                      options: _vm.subSectors,
                                      placeholder: "Select field"
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.setLastSelectedOption("subsector")
                                        _vm.getGroups(_vm.form.subSector)
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
                                  _vm.totalSubSectors != null &&
                                  !!_vm.form.subSector
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "float-right item-count font-weight-bold"
                                        },
                                        [
                                          _vm._v(
                                            "(" +
                                              _vm._s(_vm.totalSubSectors) +
                                              " Results)"
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Group")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "group",
                                    staticClass: "form-control",
                                    class: _vm.groupSelected,
                                    attrs: {
                                      label: "description",
                                      options: _vm.groups,
                                      placeholder: "Select field"
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.setLastSelectedOption("group")
                                        _vm.getSubGroups(_vm.form.group)
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
                                  _vm.totalGroups != null && !!_vm.form.group
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "float-right item-count font-weight-bold"
                                        },
                                        [
                                          _vm._v(
                                            "(" +
                                              _vm._s(_vm.totalGroups) +
                                              " Results)"
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Sub Group")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "subGroup",
                                    staticClass: "form-control",
                                    class: _vm.subGroupSelected,
                                    attrs: {
                                      label: "description",
                                      options: _vm.subGroups,
                                      placeholder: "Select field"
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.setLastSelectedOption("subgroup")
                                        _vm.getEchelons(_vm.form.subGroup)
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
                                  _vm.totalSubGroups != null &&
                                  !!_vm.form.subGroup
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "float-right item-count font-weight-bold"
                                        },
                                        [
                                          _vm._v(
                                            "(" +
                                              _vm._s(_vm.totalSubGroups) +
                                              " Results)"
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Echelon")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "echelon",
                                    staticClass: "form-control",
                                    class: _vm.echelonSelected,
                                    attrs: {
                                      label: "description",
                                      options: _vm.echelons,
                                      placeholder: "Select field"
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.setLastSelectedOption("echelon")
                                        _vm.getSubEchelons(_vm.form.echelon)
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
                                  _vm.totalEchelons != null &&
                                  !!_vm.form.echelon
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "float-right item-count font-weight-bold"
                                        },
                                        [
                                          _vm._v(
                                            "(" +
                                              _vm._s(_vm.totalEchelons) +
                                              " Results)"
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Sub Echelon")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    staticClass: "form-control",
                                    class: _vm.subEchelonSelected,
                                    attrs: {
                                      label: "description",
                                      options: _vm.subEchelons,
                                      placeholder: "Select field"
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.setLastSelectedOption("subechelon")
                                        _vm.getTiers(_vm.form.subEchelon)
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
                                  _vm.totalSubEchelons != null &&
                                  !!_vm.form.subEchelon
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "float-right item-count font-weight-bold"
                                        },
                                        [
                                          _vm._v(
                                            "(" +
                                              _vm._s(_vm.totalSubEchelons) +
                                              " Results)"
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Tier")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "tier",
                                    staticClass: "form-control",
                                    class: _vm.tierSelected,
                                    attrs: {
                                      label: "description",
                                      options: _vm.tiers,
                                      placeholder: "Select field"
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.setLastSelectedOption("tier")
                                        _vm.getSubTiers(_vm.form.tier)
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
                                  _vm.totalTiers != null && !!_vm.form.tier
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "float-right item-count font-weight-bold"
                                        },
                                        [
                                          _vm._v(
                                            "(" +
                                              _vm._s(_vm.totalTiers) +
                                              " Results)"
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Sub Tier")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "subTier",
                                    staticClass: "form-control",
                                    class: _vm.subTierSelected,
                                    attrs: {
                                      label: "description",
                                      options: _vm.subTiers,
                                      placeholder: "Select field"
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.setLastSelectedOption("subtier")
                                        _vm.getLayers(_vm.form.subTier)
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
                                  _vm.totalSubTiers != null &&
                                  !!_vm.form.subTier
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "float-right item-count font-weight-bold"
                                        },
                                        [
                                          _vm._v(
                                            "(" +
                                              _vm._s(_vm.totalSubTiers) +
                                              " Results)"
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Layer")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "layer",
                                    staticClass: "form-control",
                                    class: _vm.layerSelected,
                                    attrs: {
                                      label: "description",
                                      options: _vm.layers,
                                      placeholder: "Select field"
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.setLastSelectedOption("layer")
                                        _vm.getSubLayers(_vm.form.layer)
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
                                  _vm.totalLayers != null && !!_vm.form.layer
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "float-right item-count font-weight-bold"
                                        },
                                        [
                                          _vm._v(
                                            "(" +
                                              _vm._s(_vm.totalLayers) +
                                              " Results)"
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Sub Layer")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "subLayer",
                                    staticClass: "form-control",
                                    class: _vm.subLayerSelected,
                                    attrs: {
                                      label: "description",
                                      options: _vm.subLayers,
                                      placeholder: "Select field"
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.setLastSelectedOption("sublayer")
                                        _vm.getDecks(_vm.form.subLayer)
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
                                  _vm.totalSubLayers != null &&
                                  !!_vm.form.subLayer
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "float-right item-count font-weight-bold"
                                        },
                                        [
                                          _vm._v(
                                            "(" +
                                              _vm._s(_vm.totalSubLayers) +
                                              " Results)"
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Deck")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "deck",
                                    staticClass: "form-control",
                                    class: _vm.deckSelected,
                                    attrs: {
                                      label: "description",
                                      options: _vm.decks,
                                      placeholder: "Select field"
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.setLastSelectedOption("deck")
                                        _vm.getSubDecks(_vm.form.deck)
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
                                  _vm.totalDecks != null && !!_vm.form.deck
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "float-right item-count font-weight-bold"
                                        },
                                        [
                                          _vm._v(
                                            "(" +
                                              _vm._s(_vm.totalDecks) +
                                              " Results)"
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Sub Deck")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "subDeck",
                                    staticClass: "form-control",
                                    class: _vm.subDeckSelected,
                                    attrs: {
                                      label: "description",
                                      options: _vm.subDecks,
                                      placeholder: "Select field"
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.setLastSelectedOption("subdeck")
                                        _vm.getFloors(_vm.form.subDeck)
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
                                  _vm.totalSubDecks != null &&
                                  !!_vm.form.subDeck
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "float-right item-count font-weight-bold"
                                        },
                                        [
                                          _vm._v(
                                            "(" +
                                              _vm._s(_vm.totalSubDecks) +
                                              " Results)"
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Floor")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "floor",
                                    staticClass: "form-control",
                                    class: _vm.floorSelected,
                                    attrs: {
                                      label: "description",
                                      options: _vm.floors,
                                      placeholder: "Select field"
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.setLastSelectedOption("floor")
                                        _vm.getSubFloors(_vm.form.floor)
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
                                  _vm.totalFloors != null && !!_vm.form.floor
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "float-right item-count font-weight-bold"
                                        },
                                        [
                                          _vm._v(
                                            "(" +
                                              _vm._s(_vm.totalFloors) +
                                              " Results)"
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Sub Floor")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "subFloor",
                                    staticClass: "form-control",
                                    class: _vm.subFloorSelected,
                                    attrs: {
                                      label: "description",
                                      options: _vm.subFloors,
                                      placeholder: "Select field"
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.setLastSelectedOption("subfloor")
                                        _vm.getBasements(_vm.form.subFloor)
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
                                  _vm.totalSubFloors != null &&
                                  !!_vm.form.subFloor
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "float-right item-count font-weight-bold"
                                        },
                                        [
                                          _vm._v(
                                            "(" +
                                              _vm._s(_vm.totalSubFloors) +
                                              " Results)"
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Basement")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "basement",
                                    staticClass: "form-control",
                                    class: _vm.basementSelected,
                                    attrs: {
                                      label: "description",
                                      options: _vm.basements,
                                      placeholder: "Select field"
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.setLastSelectedOption("basement")
                                        _vm.getSubBasements(_vm.form.basement)
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
                                  _vm.totalBasements != null &&
                                  !!_vm.form.basement
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "float-right item-count font-weight-bold"
                                        },
                                        [
                                          _vm._v(
                                            "(" +
                                              _vm._s(_vm.totalBasements) +
                                              " Results)"
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Sub Basement")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "subBasement",
                                    staticClass: "form-control",
                                    class: _vm.subBasementSelected,
                                    attrs: {
                                      label: "description",
                                      options: _vm.subBasements,
                                      placeholder: "Select field"
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.setLastSelectedOption("subbasement")
                                        _vm.getMines(_vm.form.subBasement)
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
                                  _vm.totalSubBasements != null &&
                                  !!_vm.form.subBasement
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "float-right item-count font-weight-bold"
                                        },
                                        [
                                          _vm._v(
                                            "(" +
                                              _vm._s(_vm.totalSubBasements) +
                                              " Results)"
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Mine")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "mine",
                                    staticClass: "form-control",
                                    class: _vm.mineSelected,
                                    attrs: {
                                      label: "description",
                                      options: _vm.mines,
                                      placeholder: "Select field"
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.setLastSelectedOption("mine")
                                        _vm.getSubMines(_vm.form.mine)
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
                                  _vm.totalMines != null && !!_vm.form.mine
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "float-right item-count font-weight-bold"
                                        },
                                        [
                                          _vm._v(
                                            "(" +
                                              _vm._s(_vm.totalMines) +
                                              " Results)"
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Sub Mine")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "subMine",
                                    staticClass: "form-control",
                                    class: _vm.subMineSelected,
                                    attrs: {
                                      label: "description",
                                      options: _vm.subMines,
                                      placeholder: "Select field"
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.setLastSelectedOption("submine")
                                        _vm.subMinesChange
                                      }
                                    },
                                    model: {
                                      value: _vm.form.subMine,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "subMine", $$v)
                                      },
                                      expression: "form.subMine"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm.totalSubMines != null &&
                                  !!_vm.form.subMine
                                    ? _c(
                                        "span",
                                        {
                                          staticClass:
                                            "float-right item-count font-weight-bold"
                                        },
                                        [
                                          _vm._v(
                                            "(" +
                                              _vm._s(_vm.totalSubMines) +
                                              " Results)"
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        {
                          attrs: {
                            title:
                              "Company Characteristics " +
                              _vm.totalCharacteristics
                          },
                          on: {
                            click: function($event) {
                              _vm.mainFilter = "characteristics"
                            }
                          }
                        },
                        [
                          _c("b-card-text", [
                            _c("div", { staticClass: "row state-container" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Country of Domicile")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "domicileCountry",
                                    staticClass: "form-control",
                                    attrs: {
                                      label: "name",
                                      name: "domicileCountry",
                                      options: _vm.countries,
                                      placeholder: "Select Below"
                                    },
                                    on: {
                                      input: function($event) {
                                        _vm.changeFieldSelection(
                                          $event,
                                          "domicileCountrySelected"
                                        )
                                        _vm.getEntityTypeByCountry()
                                      }
                                    },
                                    model: {
                                      value: _vm.form.domicileCountry,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.form,
                                          "domicileCountry",
                                          $$v
                                        )
                                      },
                                      expression: "form.domicileCountry"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Organizational Structure")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "entityType",
                                    staticClass: "form-control",
                                    attrs: {
                                      label: "name",
                                      name: "entityType",
                                      options: _vm.entityTypes,
                                      placeholder: "Select Below"
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.changeFieldSelection(
                                          $event,
                                          "entityTypeSelected"
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.form.entityType,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "entityType", $$v)
                                      },
                                      expression: "form.entityType"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Public or Private Company Type")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    staticClass: "form-control",
                                    attrs: {
                                      label: "name",
                                      options: _vm.privatePublicCompanyTypes,
                                      placeholder: "Select Below"
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.changeFieldSelection(
                                          $event,
                                          "privatePublicCompanyTypesSelectd"
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.form.privatePublicCompany,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.form,
                                          "privatePublicCompany",
                                          $$v
                                        )
                                      },
                                      expression: "form.privatePublicCompany"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Trading or Reporting Status")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      ref: "dropdownTradingStatus",
                                      staticClass: "dropdown"
                                    },
                                    [
                                      _c("input", {
                                        staticClass: "dropdown-toggle",
                                        class:
                                          _vm.tradingAndReportingStatusListValueCount >
                                          0
                                            ? "selected-value form-control recent-valuation cursor-pointer"
                                            : "form-control recent-valuation cursor-pointer",
                                        staticStyle: {
                                          "caret-color": "transparent"
                                        },
                                        attrs: {
                                          label: "name",
                                          autocomplete: "off",
                                          "data-toggle": "dropdown",
                                          placeholder: "Select Options"
                                        },
                                        domProps: {
                                          value: [
                                            _vm.tradingAndReportingStatusListValueCount >
                                            0
                                              ? _vm.tradingAndReportingStatusListValueCount +
                                                " Selected"
                                              : ""
                                          ]
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "dropdown-menu ",
                                          on: {
                                            click: function($event) {
                                              return $event.stopPropagation()
                                            }
                                          }
                                        },
                                        [
                                          _vm.tradingAndReportingStatusList
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "dropdown-options-container"
                                                },
                                                [
                                                  _c(
                                                    "ul",
                                                    {
                                                      staticClass:
                                                        "dropdown-content-options"
                                                    },
                                                    _vm._l(
                                                      _vm.tradingAndReportingStatusList,
                                                      function(item) {
                                                        return _c(
                                                          "li",
                                                          {
                                                            staticClass:
                                                              "d-flex align-items-center mb-1"
                                                          },
                                                          [
                                                            _c("input", {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    _vm.tradingAndReportingStatusListInput,
                                                                  expression:
                                                                    "tradingAndReportingStatusListInput"
                                                                }
                                                              ],
                                                              staticClass:
                                                                "mr-1",
                                                              attrs: {
                                                                id:
                                                                  "ts-" +
                                                                  item.id,
                                                                type: "checkbox"
                                                              },
                                                              domProps: {
                                                                value: item.id,
                                                                checked: Array.isArray(
                                                                  _vm.tradingAndReportingStatusListInput
                                                                )
                                                                  ? _vm._i(
                                                                      _vm.tradingAndReportingStatusListInput,
                                                                      item.id
                                                                    ) > -1
                                                                  : _vm.tradingAndReportingStatusListInput
                                                              },
                                                              on: {
                                                                change: function(
                                                                  $event
                                                                ) {
                                                                  var $$a =
                                                                      _vm.tradingAndReportingStatusListInput,
                                                                    $$el =
                                                                      $event.target,
                                                                    $$c = $$el.checked
                                                                      ? true
                                                                      : false
                                                                  if (
                                                                    Array.isArray(
                                                                      $$a
                                                                    )
                                                                  ) {
                                                                    var $$v =
                                                                        item.id,
                                                                      $$i = _vm._i(
                                                                        $$a,
                                                                        $$v
                                                                      )
                                                                    if (
                                                                      $$el.checked
                                                                    ) {
                                                                      $$i < 0 &&
                                                                        (_vm.tradingAndReportingStatusListInput = $$a.concat(
                                                                          [$$v]
                                                                        ))
                                                                    } else {
                                                                      $$i >
                                                                        -1 &&
                                                                        (_vm.tradingAndReportingStatusListInput = $$a
                                                                          .slice(
                                                                            0,
                                                                            $$i
                                                                          )
                                                                          .concat(
                                                                            $$a.slice(
                                                                              $$i +
                                                                                1
                                                                            )
                                                                          ))
                                                                    }
                                                                  } else {
                                                                    _vm.tradingAndReportingStatusListInput = $$c
                                                                  }
                                                                }
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "label",
                                                              {
                                                                staticClass:
                                                                  "mb-0",
                                                                attrs: {
                                                                  for:
                                                                    "ts-" +
                                                                    item.id
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  " " +
                                                                    _vm._s(
                                                                      item.name
                                                                    )
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    0
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "dropdown-footer text-right"
                                            },
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  staticClass: "btn modal-btn",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.submitMultiDropdown(
                                                        "tradingAndReportingStatusListMapArray",
                                                        "tradingAndReportingStatusListValueCount",
                                                        "tradingAndReportingStatusListInput",
                                                        "dropdownTradingStatus"
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("Done")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Number of Shareholders")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "shareholderNumber",
                                    staticClass: "form-control",
                                    attrs: {
                                      label: "name",
                                      options: _vm.shareholderNumberList,
                                      placeholder: "Select Below"
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.changeFieldSelection(
                                          $event,
                                          "shareholderNumberSelected"
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.form.shareholderNumber,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.form,
                                          "shareholderNumber",
                                          $$v
                                        )
                                      },
                                      expression: "form.shareholderNumber"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Base Currency")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "baseCurrency",
                                    staticClass: "form-control",
                                    attrs: {
                                      label: "name",
                                      options: _vm.baseCurrencyList,
                                      placeholder: "Select Below"
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.changeFieldSelection(
                                          $event,
                                          "baseCurrencySelected"
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.form.baseCurrency,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "baseCurrency", $$v)
                                      },
                                      expression: "form.baseCurrency"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Conglomerate")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "conglomerate",
                                    staticClass: "form-control",
                                    attrs: {
                                      options: [
                                        { label: "YES", id: 1 },
                                        { label: "NO", id: 0 }
                                      ],
                                      placeholder: "Select Below",
                                      reduce: function(option) {
                                        return option.id
                                      }
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.changeFieldSelection(
                                          $event,
                                          "conglomerateSelected"
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.form.conglomerate,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "conglomerate", $$v)
                                      },
                                      expression: "form.conglomerate"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Intellectual Property")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      ref: "dropdownIntellectualProperty",
                                      staticClass: "dropdown"
                                    },
                                    [
                                      _c("input", {
                                        staticClass: "dropdown-toggle",
                                        class:
                                          _vm.intellectualPropertyValueCount > 0
                                            ? "selected-value form-control recent-valuation cursor-pointer"
                                            : "form-control recent-valuation cursor-pointer",
                                        staticStyle: {
                                          "caret-color": "transparent"
                                        },
                                        attrs: {
                                          label: "name",
                                          autocomplete: "off",
                                          "data-toggle": "dropdown",
                                          placeholder: "Select Options"
                                        },
                                        domProps: {
                                          value: [
                                            _vm.intellectualPropertyValueCount >
                                            0
                                              ? _vm.intellectualPropertyValueCount +
                                                " Selected"
                                              : ""
                                          ]
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "dropdown-menu ",
                                          on: {
                                            click: function($event) {
                                              return $event.stopPropagation()
                                            }
                                          }
                                        },
                                        [
                                          _vm.intelletualPropertyList
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "dropdown-options-container"
                                                },
                                                [
                                                  _c(
                                                    "ul",
                                                    {
                                                      staticClass:
                                                        "dropdown-content-options"
                                                    },
                                                    _vm._l(
                                                      _vm.intelletualPropertyList,
                                                      function(item) {
                                                        return _c(
                                                          "li",
                                                          {
                                                            staticClass:
                                                              "d-flex align-items-center mb-1"
                                                          },
                                                          [
                                                            _c("input", {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    _vm.intellectualInput,
                                                                  expression:
                                                                    "intellectualInput"
                                                                }
                                                              ],
                                                              staticClass:
                                                                "mr-1",
                                                              attrs: {
                                                                id:
                                                                  "ip-" +
                                                                  item.id,
                                                                type: "checkbox"
                                                              },
                                                              domProps: {
                                                                value: item.id,
                                                                checked: Array.isArray(
                                                                  _vm.intellectualInput
                                                                )
                                                                  ? _vm._i(
                                                                      _vm.intellectualInput,
                                                                      item.id
                                                                    ) > -1
                                                                  : _vm.intellectualInput
                                                              },
                                                              on: {
                                                                change: function(
                                                                  $event
                                                                ) {
                                                                  var $$a =
                                                                      _vm.intellectualInput,
                                                                    $$el =
                                                                      $event.target,
                                                                    $$c = $$el.checked
                                                                      ? true
                                                                      : false
                                                                  if (
                                                                    Array.isArray(
                                                                      $$a
                                                                    )
                                                                  ) {
                                                                    var $$v =
                                                                        item.id,
                                                                      $$i = _vm._i(
                                                                        $$a,
                                                                        $$v
                                                                      )
                                                                    if (
                                                                      $$el.checked
                                                                    ) {
                                                                      $$i < 0 &&
                                                                        (_vm.intellectualInput = $$a.concat(
                                                                          [$$v]
                                                                        ))
                                                                    } else {
                                                                      $$i >
                                                                        -1 &&
                                                                        (_vm.intellectualInput = $$a
                                                                          .slice(
                                                                            0,
                                                                            $$i
                                                                          )
                                                                          .concat(
                                                                            $$a.slice(
                                                                              $$i +
                                                                                1
                                                                            )
                                                                          ))
                                                                    }
                                                                  } else {
                                                                    _vm.intellectualInput = $$c
                                                                  }
                                                                }
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "label",
                                                              {
                                                                staticClass:
                                                                  "mb-0",
                                                                attrs: {
                                                                  for:
                                                                    "ip-" +
                                                                    item.id
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  " " +
                                                                    _vm._s(
                                                                      item.name
                                                                    )
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    0
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "dropdown-footer text-right"
                                            },
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  staticClass: "btn modal-btn",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.submitMultiDropdown(
                                                        "intellectualMapArray",
                                                        "intellectualPropertyValueCount",
                                                        "intellectualInput",
                                                        "dropdownIntellectualProperty"
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("Done")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Type of Financing")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      ref: "dropdownFinancingType",
                                      staticClass: "dropdown"
                                    },
                                    [
                                      _c("input", {
                                        staticClass: "dropdown-toggle",
                                        class:
                                          _vm.financingTypeValueCount > 0
                                            ? "selected-value form-control recent-valuation cursor-pointer"
                                            : "form-control recent-valuation cursor-pointer",
                                        staticStyle: {
                                          "caret-color": "transparent"
                                        },
                                        attrs: {
                                          label: "name",
                                          autocomplete: "off",
                                          "data-toggle": "dropdown",
                                          placeholder: "Select Options"
                                        },
                                        domProps: {
                                          value: [
                                            _vm.financingTypeValueCount > 0
                                              ? _vm.financingTypeValueCount +
                                                " Selected"
                                              : ""
                                          ]
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "dropdown-menu ",
                                          on: {
                                            click: function($event) {
                                              return $event.stopPropagation()
                                            }
                                          }
                                        },
                                        [
                                          _vm.financingTypeList
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "dropdown-options-container"
                                                },
                                                [
                                                  _c(
                                                    "ul",
                                                    {
                                                      staticClass:
                                                        "dropdown-content-options"
                                                    },
                                                    _vm._l(
                                                      _vm.financingTypeList,
                                                      function(item) {
                                                        return _c(
                                                          "li",
                                                          {
                                                            staticClass:
                                                              "d-flex align-items-center mb-1"
                                                          },
                                                          [
                                                            _c("input", {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    _vm.financingTypeInput,
                                                                  expression:
                                                                    "financingTypeInput"
                                                                }
                                                              ],
                                                              staticClass:
                                                                "mr-1",
                                                              attrs: {
                                                                id:
                                                                  "ft-" +
                                                                  item.id,
                                                                type: "checkbox"
                                                              },
                                                              domProps: {
                                                                value: item.id,
                                                                checked: Array.isArray(
                                                                  _vm.financingTypeInput
                                                                )
                                                                  ? _vm._i(
                                                                      _vm.financingTypeInput,
                                                                      item.id
                                                                    ) > -1
                                                                  : _vm.financingTypeInput
                                                              },
                                                              on: {
                                                                change: function(
                                                                  $event
                                                                ) {
                                                                  var $$a =
                                                                      _vm.financingTypeInput,
                                                                    $$el =
                                                                      $event.target,
                                                                    $$c = $$el.checked
                                                                      ? true
                                                                      : false
                                                                  if (
                                                                    Array.isArray(
                                                                      $$a
                                                                    )
                                                                  ) {
                                                                    var $$v =
                                                                        item.id,
                                                                      $$i = _vm._i(
                                                                        $$a,
                                                                        $$v
                                                                      )
                                                                    if (
                                                                      $$el.checked
                                                                    ) {
                                                                      $$i < 0 &&
                                                                        (_vm.financingTypeInput = $$a.concat(
                                                                          [$$v]
                                                                        ))
                                                                    } else {
                                                                      $$i >
                                                                        -1 &&
                                                                        (_vm.financingTypeInput = $$a
                                                                          .slice(
                                                                            0,
                                                                            $$i
                                                                          )
                                                                          .concat(
                                                                            $$a.slice(
                                                                              $$i +
                                                                                1
                                                                            )
                                                                          ))
                                                                    }
                                                                  } else {
                                                                    _vm.financingTypeInput = $$c
                                                                  }
                                                                }
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "label",
                                                              {
                                                                staticClass:
                                                                  "mb-0",
                                                                attrs: {
                                                                  for:
                                                                    "ft-" +
                                                                    item.id
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  " " +
                                                                    _vm._s(
                                                                      item.name
                                                                    )
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    0
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "dropdown-footer text-right"
                                            },
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  staticClass: "btn modal-btn",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.submitMultiDropdown(
                                                        "financingMapArray",
                                                        "financingTypeValueCount",
                                                        "financingTypeInput",
                                                        "dropdownFinancingType"
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("Done")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Most Recent Valuation")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.companyValuation,
                                        expression: "form.companyValuation"
                                      }
                                    ],
                                    staticClass:
                                      "form-control recent-valuation",
                                    attrs: {
                                      type: "text",
                                      autocomplete: "off"
                                    },
                                    domProps: {
                                      value: _vm.form.companyValuation
                                    },
                                    on: {
                                      input: [
                                        function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "companyValuation",
                                            $event.target.value
                                          )
                                        },
                                        function($event) {
                                          return _vm.changeInputFieldSelection(
                                            $event.target.value,
                                            "companyValuationSelected"
                                          )
                                        }
                                      ],
                                      keypress: function($event) {
                                        return _vm.stripTheGarbage($event)
                                      },
                                      blur: function($event) {
                                        return _vm.formatDollars()
                                      },
                                      focus: function($event) {
                                        return _vm.formatDollarsToNumber()
                                      }
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Audited Financials")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    staticClass: "form-control",
                                    attrs: {
                                      label: "labelAu",
                                      options: [
                                        { labelAu: "YES", audit_id: 1 },
                                        { labelAu: "NO", audit_id: 0 }
                                      ],
                                      placeholder: "Select Below",
                                      reduce: function(audit) {
                                        return audit.audit_id
                                      }
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.changeFieldSelection(
                                          $event,
                                          "auditedFinanceSelected"
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.form.auditedFinance,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.form,
                                          "auditedFinance",
                                          $$v
                                        )
                                      },
                                      expression: "form.auditedFinance"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Conduct Financing last 6 Months?")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "conductFinancing",
                                    staticClass: "form-control",
                                    attrs: {
                                      options: [
                                        { label: "YES", id: 1 },
                                        { label: "NO", id: 0 }
                                      ],
                                      placeholder: "Select Below",
                                      reduce: function(conduct) {
                                        return conduct.id
                                      }
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.changeFieldSelection(
                                          $event,
                                          "conductFinancingSelected"
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.form.conductFinancing,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.form,
                                          "conductFinancing",
                                          $$v
                                        )
                                      },
                                      expression: "form.conductFinancing"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Ticker Symbol")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.tickerSymbol,
                                        expression: "form.tickerSymbol"
                                      }
                                    ],
                                    staticClass:
                                      "form-control recent-valuation",
                                    attrs: {
                                      type: "text",
                                      autocomplete: "off"
                                    },
                                    domProps: { value: _vm.form.tickerSymbol },
                                    on: {
                                      input: [
                                        function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "tickerSymbol",
                                            $event.target.value
                                          )
                                        },
                                        function($event) {
                                          return _vm.changeInputFieldSelection(
                                            $event.target.value,
                                            "tickerSymbolSelected"
                                          )
                                        }
                                      ]
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Acquisitions Made")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "conglomerate",
                                    staticClass: "form-control",
                                    attrs: {
                                      options: [
                                        { label: "YES", id: "yes" },
                                        { label: "NO", id: "no" }
                                      ],
                                      placeholder: "Select Below",
                                      reduce: function(option) {
                                        return option.id
                                      }
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.getSearchResult()
                                      }
                                    },
                                    model: {
                                      value: _vm.form.acquisitionsMade,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.form,
                                          "acquisitionsMade",
                                          $$v
                                        )
                                      },
                                      expression: "form.acquisitionsMade"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Spin Offs")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "conglomerate",
                                    staticClass: "form-control",
                                    attrs: {
                                      options: [
                                        { label: "YES", id: "yes" },
                                        { label: "NO", id: "no" }
                                      ],
                                      placeholder: "Select Below",
                                      reduce: function(option) {
                                        return option.id
                                      }
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.getSearchResult()
                                      }
                                    },
                                    model: {
                                      value: _vm.form.spinOffMade,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "spinOffMade", $$v)
                                      },
                                      expression: "form.spinOffMade"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Dividend Currently Being Issued")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "conglomerate",
                                    staticClass: "form-control",
                                    attrs: {
                                      options: [
                                        { label: "YES", id: "yes" },
                                        { label: "NO", id: "no" }
                                      ],
                                      placeholder: "Select Below",
                                      reduce: function(option) {
                                        return option.id
                                      }
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.getSearchResult()
                                      }
                                    },
                                    model: {
                                      value: _vm.form.dividend,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "dividend", $$v)
                                      },
                                      expression: "form.dividend"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Search by ISIN Number")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.isin,
                                        expression: "form.isin"
                                      }
                                    ],
                                    staticClass:
                                      "form-control recent-valuation",
                                    attrs: {
                                      type: "text",
                                      autocomplete: "off"
                                    },
                                    domProps: { value: _vm.form.isin },
                                    on: {
                                      input: [
                                        function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "isin",
                                            $event.target.value
                                          )
                                        },
                                        function($event) {
                                          return _vm.changeInputFieldSelection(
                                            $event.target.value,
                                            "isin"
                                          )
                                        }
                                      ]
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Search by CUSIP Number")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.cusip,
                                        expression: "form.cusip"
                                      }
                                    ],
                                    staticClass:
                                      "form-control recent-valuation",
                                    attrs: {
                                      type: "text",
                                      autocomplete: "off"
                                    },
                                    domProps: { value: _vm.form.cusip },
                                    on: {
                                      input: [
                                        function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "cusip",
                                            $event.target.value
                                          )
                                        },
                                        function($event) {
                                          return _vm.changeInputFieldSelection(
                                            $event.target.value,
                                            "cusip"
                                          )
                                        }
                                      ]
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Number of Employees")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "employeeNumber",
                                    staticClass: "form-control",
                                    attrs: {
                                      label: "name",
                                      options: _vm.employeeNumberList,
                                      placeholder: "Select Below"
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.changeFieldSelection(
                                          $event,
                                          "employeeNumberSelected"
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.form.employeeNumber,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.form,
                                          "employeeNumber",
                                          $$v
                                        )
                                      },
                                      expression: "form.employeeNumber"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("ESG Rating")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "esgRating",
                                    staticClass: "form-control",
                                    attrs: {
                                      options: [
                                        { label: "YES", id: 1 },
                                        { label: "NO", id: 0 }
                                      ],
                                      placeholder: "Select Below",
                                      reduce: function(option) {
                                        return option.id
                                      }
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.changeFieldSelection(
                                          $event,
                                          "esgRatingSelected"
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.form.esgRating,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "esgRating", $$v)
                                      },
                                      expression: "form.esgRating"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [
                                      _vm._v(
                                        "Type of Publicly Traded Company (USA or International)"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "employeeNumber",
                                    staticClass: "form-control",
                                    attrs: {
                                      label: "name",
                                      options:
                                        _vm.publiclyTradedCompanyTypeList,
                                      placeholder: "Select Below"
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.changeFieldSelection(
                                          $event,
                                          "publiclyTradedCompany"
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.form.publiclyTradedCompany,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.form,
                                          "publiclyTradedCompany",
                                          $$v
                                        )
                                      },
                                      expression: "form.publiclyTradedCompany"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [
                                      _vm._v(
                                        "Domestic or International Exchange Traded On"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      ref: "dropdownExchangedTradedOn",
                                      staticClass: "dropdown"
                                    },
                                    [
                                      _c("input", {
                                        staticClass: "dropdown-toggle",
                                        class:
                                          _vm.exchangedTradedOnValueCount > 0
                                            ? "selected-value form-control recent-valuation cursor-pointer"
                                            : "form-control recent-valuation cursor-pointer",
                                        staticStyle: {
                                          "caret-color": "transparent"
                                        },
                                        attrs: {
                                          label: "name",
                                          autocomplete: "off",
                                          "data-toggle": "dropdown",
                                          placeholder: "Select Options"
                                        },
                                        domProps: {
                                          value: [
                                            _vm.exchangedTradedOnValueCount > 0
                                              ? _vm.exchangedTradedOnValueCount +
                                                " Selected"
                                              : ""
                                          ]
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "dropdown-menu ",
                                          on: {
                                            click: function($event) {
                                              return $event.stopPropagation()
                                            }
                                          }
                                        },
                                        [
                                          _vm.exchangeTradedList
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "dropdown-options-container"
                                                },
                                                [
                                                  _c(
                                                    "ul",
                                                    {
                                                      staticClass:
                                                        "dropdown-content-options"
                                                    },
                                                    _vm._l(
                                                      _vm.exchangeTradedList,
                                                      function(item) {
                                                        return _c(
                                                          "li",
                                                          {
                                                            staticClass:
                                                              "d-flex align-items-center mb-1"
                                                          },
                                                          [
                                                            _c("input", {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    _vm.exchangedTradedOnInput,
                                                                  expression:
                                                                    "exchangedTradedOnInput"
                                                                }
                                                              ],
                                                              staticClass:
                                                                "mr-1",
                                                              attrs: {
                                                                id:
                                                                  "et-" +
                                                                  item.id,
                                                                type: "checkbox"
                                                              },
                                                              domProps: {
                                                                value: item.id,
                                                                checked: Array.isArray(
                                                                  _vm.exchangedTradedOnInput
                                                                )
                                                                  ? _vm._i(
                                                                      _vm.exchangedTradedOnInput,
                                                                      item.id
                                                                    ) > -1
                                                                  : _vm.exchangedTradedOnInput
                                                              },
                                                              on: {
                                                                change: function(
                                                                  $event
                                                                ) {
                                                                  var $$a =
                                                                      _vm.exchangedTradedOnInput,
                                                                    $$el =
                                                                      $event.target,
                                                                    $$c = $$el.checked
                                                                      ? true
                                                                      : false
                                                                  if (
                                                                    Array.isArray(
                                                                      $$a
                                                                    )
                                                                  ) {
                                                                    var $$v =
                                                                        item.id,
                                                                      $$i = _vm._i(
                                                                        $$a,
                                                                        $$v
                                                                      )
                                                                    if (
                                                                      $$el.checked
                                                                    ) {
                                                                      $$i < 0 &&
                                                                        (_vm.exchangedTradedOnInput = $$a.concat(
                                                                          [$$v]
                                                                        ))
                                                                    } else {
                                                                      $$i >
                                                                        -1 &&
                                                                        (_vm.exchangedTradedOnInput = $$a
                                                                          .slice(
                                                                            0,
                                                                            $$i
                                                                          )
                                                                          .concat(
                                                                            $$a.slice(
                                                                              $$i +
                                                                                1
                                                                            )
                                                                          ))
                                                                    }
                                                                  } else {
                                                                    _vm.exchangedTradedOnInput = $$c
                                                                  }
                                                                }
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "label",
                                                              {
                                                                staticClass:
                                                                  "mb-0",
                                                                attrs: {
                                                                  for:
                                                                    "et-" +
                                                                    item.id
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  " " +
                                                                    _vm._s(
                                                                      item.name
                                                                    )
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    0
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "dropdown-footer text-right"
                                            },
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  staticClass: "btn modal-btn",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.submitMultiDropdown(
                                                        "exchangedTradedOnMapArray",
                                                        "exchangedTradedOnValueCount",
                                                        "exchangedTradedOnInput",
                                                        "dropdownExchangedTradedOn"
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("Done")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Minority Owned Business")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      ref: "dropdownMinorityOwnedBusiness",
                                      staticClass: "dropdown"
                                    },
                                    [
                                      _c("input", {
                                        staticClass: "dropdown-toggle",
                                        class:
                                          _vm.minorityOwnedBusinessValueCount >
                                          0
                                            ? "selected-value form-control recent-valuation cursor-pointer"
                                            : "form-control recent-valuation cursor-pointer",
                                        staticStyle: {
                                          "caret-color": "transparent"
                                        },
                                        attrs: {
                                          label: "name",
                                          autocomplete: "off",
                                          "data-toggle": "dropdown",
                                          placeholder: "Select Options"
                                        },
                                        domProps: {
                                          value: [
                                            _vm.minorityOwnedBusinessValueCount >
                                            0
                                              ? _vm.minorityOwnedBusinessValueCount +
                                                " Selected"
                                              : ""
                                          ]
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "dropdown-menu ",
                                          on: {
                                            click: function($event) {
                                              return $event.stopPropagation()
                                            }
                                          }
                                        },
                                        [
                                          _vm.minorityOwnedBusinessList
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "dropdown-options-container"
                                                },
                                                [
                                                  _c(
                                                    "ul",
                                                    {
                                                      staticClass:
                                                        "dropdown-content-options"
                                                    },
                                                    _vm._l(
                                                      _vm.minorityOwnedBusinessList,
                                                      function(item) {
                                                        return _c(
                                                          "li",
                                                          {
                                                            staticClass:
                                                              "d-flex align-items-center mb-1"
                                                          },
                                                          [
                                                            _c("input", {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    _vm.minorityOwnedBusinessInput,
                                                                  expression:
                                                                    "minorityOwnedBusinessInput"
                                                                }
                                                              ],
                                                              staticClass:
                                                                "mr-1",
                                                              attrs: {
                                                                id:
                                                                  "ip-" +
                                                                  item.id,
                                                                type: "checkbox"
                                                              },
                                                              domProps: {
                                                                value: item.id,
                                                                checked: Array.isArray(
                                                                  _vm.minorityOwnedBusinessInput
                                                                )
                                                                  ? _vm._i(
                                                                      _vm.minorityOwnedBusinessInput,
                                                                      item.id
                                                                    ) > -1
                                                                  : _vm.minorityOwnedBusinessInput
                                                              },
                                                              on: {
                                                                change: function(
                                                                  $event
                                                                ) {
                                                                  var $$a =
                                                                      _vm.minorityOwnedBusinessInput,
                                                                    $$el =
                                                                      $event.target,
                                                                    $$c = $$el.checked
                                                                      ? true
                                                                      : false
                                                                  if (
                                                                    Array.isArray(
                                                                      $$a
                                                                    )
                                                                  ) {
                                                                    var $$v =
                                                                        item.id,
                                                                      $$i = _vm._i(
                                                                        $$a,
                                                                        $$v
                                                                      )
                                                                    if (
                                                                      $$el.checked
                                                                    ) {
                                                                      $$i < 0 &&
                                                                        (_vm.minorityOwnedBusinessInput = $$a.concat(
                                                                          [$$v]
                                                                        ))
                                                                    } else {
                                                                      $$i >
                                                                        -1 &&
                                                                        (_vm.minorityOwnedBusinessInput = $$a
                                                                          .slice(
                                                                            0,
                                                                            $$i
                                                                          )
                                                                          .concat(
                                                                            $$a.slice(
                                                                              $$i +
                                                                                1
                                                                            )
                                                                          ))
                                                                    }
                                                                  } else {
                                                                    _vm.minorityOwnedBusinessInput = $$c
                                                                  }
                                                                }
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "label",
                                                              {
                                                                staticClass:
                                                                  "mb-0",
                                                                attrs: {
                                                                  for:
                                                                    "ip-" +
                                                                    item.id
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  " " +
                                                                    _vm._s(
                                                                      item.name
                                                                    )
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    0
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "dropdown-footer text-right"
                                            },
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  staticClass: "btn modal-btn",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.submitMultiDropdown(
                                                        "minorityOwnedBusinessMapArray",
                                                        "minorityOwnedBusinessValueCount",
                                                        "minorityOwnedBusinessInput",
                                                        "dropdownMinorityOwnedBusiness"
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("Done")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        {
                          attrs: {
                            title: "Company History " + _vm.totalHistoryFilters
                          },
                          on: {
                            click: function($event) {
                              _vm.mainFilter = "history"
                            }
                          }
                        },
                        [
                          _c("b-card-text", [
                            _c("div", { staticClass: "row state-container" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-4 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Year Company Formed")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "dateRange" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "position-relative dateRange"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "control-label mr-1 mb-0 position-relative"
                                          },
                                          [_vm._v("From")]
                                        ),
                                        _vm._v(" "),
                                        _c("datepicker", {
                                          ref: "formedYearFromDate",
                                          attrs: {
                                            "input-class": "form-control",
                                            typeable: false,
                                            "clear-button": false,
                                            name: "formedYearFromDate",
                                            id: "formedYearFromDate",
                                            "minimum-view": "year",
                                            "disabled-dates": {
                                              to: new Date(1970, 0, 1),
                                              from: new Date()
                                            },
                                            format: "yyyy",
                                            placeholder: "YYYY"
                                          },
                                          on: {
                                            input: function($event) {
                                              return _vm.dateChange(
                                                "formedYearFromDate"
                                              )
                                            }
                                          },
                                          model: {
                                            value: _vm.form.formedYearFromDate,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "formedYearFromDate",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "form.formedYearFromDate"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "label",
                                          {
                                            attrs: { for: "formedYearFromDate" }
                                          },
                                          [
                                            _c("img", {
                                              staticClass: "calendar-icon",
                                              attrs: {
                                                src: __webpack_require__(/*! ../assets/calendar.png */ "./resources/js/assets/calendar.png")
                                              }
                                            })
                                          ]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "position-relative dateRange"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "control-label mx-1 mb-0 position-relative"
                                          },
                                          [_vm._v("To")]
                                        ),
                                        _vm._v(" "),
                                        _c("datepicker", {
                                          attrs: {
                                            "input-class": "form-control",
                                            typeable: false,
                                            "clear-button": false,
                                            name: "formedYearToDate",
                                            id: "formedYearToDate",
                                            "minimum-view": "year",
                                            "disabled-dates": {
                                              to: new Date(1970, 0, 1),
                                              from: new Date()
                                            },
                                            format: "yyyy",
                                            placeholder: "YYYY"
                                          },
                                          on: {
                                            input: function($event) {
                                              return _vm.dateChange(
                                                "formedYearToDate"
                                              )
                                            }
                                          },
                                          model: {
                                            value: _vm.form.formedYearToDate,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "formedYearToDate",
                                                $$v
                                              )
                                            },
                                            expression: "form.formedYearToDate"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "label",
                                          {
                                            attrs: { for: "formedYearToDate" }
                                          },
                                          [
                                            _c("img", {
                                              staticClass: "calendar-icon",
                                              attrs: {
                                                src: __webpack_require__(/*! ../assets/calendar.png */ "./resources/js/assets/calendar.png")
                                              }
                                            })
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("First Product/Service")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.firstProductOrService,
                                        expression: "form.firstProductOrService"
                                      }
                                    ],
                                    staticClass:
                                      "form-control recent-valuation",
                                    attrs: {
                                      type: "text",
                                      placeholder: "Type in Product/Service",
                                      autocomplete: "off"
                                    },
                                    domProps: {
                                      value: _vm.form.firstProductOrService
                                    },
                                    on: {
                                      input: [
                                        function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "firstProductOrService",
                                            $event.target.value
                                          )
                                        },
                                        function($event) {
                                          return _vm.getSearchResult()
                                        }
                                      ]
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [
                                      _vm._v(
                                        "Number of Major Products / Services"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value:
                                          _vm.form
                                            .numberOfMajorProductOrService,
                                        expression:
                                          "form.numberOfMajorProductOrService"
                                      }
                                    ],
                                    staticClass:
                                      "form-control recent-valuation",
                                    attrs: {
                                      type: "text",
                                      placeholder:
                                        "Type in number of Major Products/Services",
                                      autocomplete: "off"
                                    },
                                    domProps: {
                                      value:
                                        _vm.form.numberOfMajorProductOrService
                                    },
                                    on: {
                                      input: [
                                        function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "numberOfMajorProductOrService",
                                            $event.target.value
                                          )
                                        },
                                        function($event) {
                                          return _vm.getSearchResult()
                                        }
                                      ]
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Change in Direction or Strategy?")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    staticClass: "form-control",
                                    attrs: {
                                      options: [
                                        { label: "YES", id: "yes" },
                                        { label: "NO", id: "no" }
                                      ],
                                      clearable: false,
                                      placeholder: "Select Yes or No",
                                      reduce: function(option) {
                                        return option.id
                                      }
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.getSearchResult()
                                      }
                                    },
                                    model: {
                                      value: _vm.form.changeDirectionOrStrategy,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.form,
                                          "changeDirectionOrStrategy",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "form.changeDirectionOrStrategy"
                                    }
                                  })
                                ],
                                1
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        {
                          attrs: {
                            title:
                              "Video/Audio Characteristics " +
                              _vm.totalVideoAudioCharacteristics
                          },
                          on: {
                            click: function($event) {
                              _vm.mainFilter = "video"
                            }
                          }
                        },
                        [
                          _c("b-card-text", [
                            _c("div", { staticClass: "row state-container" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-4 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Date Published")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "dateRange" }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "position-relative dateRange"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "control-label mr-1 mb-0 position-relative"
                                          },
                                          [_vm._v("From")]
                                        ),
                                        _vm._v(" "),
                                        _c("datepicker", {
                                          ref: "mediaPublishedFromDate",
                                          attrs: {
                                            "input-class": "form-control",
                                            typeable: false,
                                            "clear-button": false,
                                            name: "mediaPublishedFromDate",
                                            id: "mediaPublishedFromDate",
                                            "disabled-dates": {
                                              to: new Date(1970, 0, 1),
                                              from: new Date()
                                            },
                                            format: "MM/dd/yyyy",
                                            placeholder: "MM/DD/YYYY"
                                          },
                                          on: {
                                            input: function($event) {
                                              return _vm.dateChange(
                                                "mediaPublishedFromDate"
                                              )
                                            }
                                          },
                                          model: {
                                            value:
                                              _vm.form.mediaPublishedFromDate,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "mediaPublishedFromDate",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "form.mediaPublishedFromDate"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "label",
                                          {
                                            attrs: {
                                              for: "videoPublishedFromDate"
                                            }
                                          },
                                          [
                                            _c("img", {
                                              staticClass: "calendar-icon",
                                              attrs: {
                                                src: __webpack_require__(/*! ../assets/calendar.png */ "./resources/js/assets/calendar.png")
                                              }
                                            })
                                          ]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "position-relative dateRange"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "control-label mx-1 mb-0 position-relative"
                                          },
                                          [_vm._v("To")]
                                        ),
                                        _vm._v(" "),
                                        _c("datepicker", {
                                          attrs: {
                                            "input-class": "form-control",
                                            typeable: false,
                                            "clear-button": false,
                                            name: "mediaPublishedToDate",
                                            id: "mediaPublishedToDate",
                                            "disabled-dates": {
                                              to: new Date(1970, 0, 1),
                                              from: new Date()
                                            },
                                            format: "MM/dd/yyyy",
                                            placeholder: "MM/DD/YYYY"
                                          },
                                          on: {
                                            input: function($event) {
                                              return _vm.dateChange(
                                                "mediaPublishedToDate"
                                              )
                                            }
                                          },
                                          model: {
                                            value:
                                              _vm.form.mediaPublishedToDate,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "mediaPublishedToDate",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "form.mediaPublishedToDate"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "label",
                                          {
                                            attrs: {
                                              for: "videoPublishedToDate"
                                            }
                                          },
                                          [
                                            _c("img", {
                                              staticClass: "calendar-icon",
                                              attrs: {
                                                src: __webpack_require__(/*! ../assets/calendar.png */ "./resources/js/assets/calendar.png")
                                              }
                                            })
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-4 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Date Recorded")]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "dateRange " }, [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "position-relative dateRange"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "control-label mr-1 mb-0"
                                          },
                                          [_vm._v("From")]
                                        ),
                                        _vm._v(" "),
                                        _c("datepicker", {
                                          attrs: {
                                            "input-class": "form-control",
                                            typeable: false,
                                            "clear-button": false,
                                            name: "mediaRecordedFromDate",
                                            id: "mediaRecordedFromDate",
                                            "disabled-dates": {
                                              to: new Date(1970, 0, 1),
                                              from: new Date()
                                            },
                                            format: "MM/dd/yyyy",
                                            placeholder: "MM/DD/YYYY"
                                          },
                                          on: {
                                            input: function($event) {
                                              return _vm.dateChange(
                                                "mediaRecordedFromDate"
                                              )
                                            }
                                          },
                                          model: {
                                            value:
                                              _vm.form.mediaRecordedFromDate,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "mediaRecordedFromDate",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "form.mediaRecordedFromDate"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "label",
                                          {
                                            attrs: {
                                              for: "videoRecordedFromDate"
                                            }
                                          },
                                          [
                                            _c("img", {
                                              staticClass: "calendar-icon",
                                              attrs: {
                                                src: __webpack_require__(/*! ../assets/calendar.png */ "./resources/js/assets/calendar.png")
                                              }
                                            })
                                          ]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "position-relative dateRange"
                                      },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "control-label mx-1 mb-0"
                                          },
                                          [_vm._v("To")]
                                        ),
                                        _vm._v(" "),
                                        _c("datepicker", {
                                          attrs: {
                                            "input-class": "form-control",
                                            typeable: false,
                                            "clear-button": false,
                                            name: "mediaRecordedToDate",
                                            id: "mediaRecordedToDate",
                                            "disabled-dates": {
                                              to: new Date(1970, 0, 1),
                                              from: new Date()
                                            },
                                            format: "MM/dd/yyyy",
                                            placeholder: "MM/DD/YYYY"
                                          },
                                          on: {
                                            input: function($event) {
                                              return _vm.dateChange(
                                                "mediaRecordedToDate"
                                              )
                                            }
                                          },
                                          model: {
                                            value: _vm.form.mediaRecordedToDate,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                "mediaRecordedToDate",
                                                $$v
                                              )
                                            },
                                            expression:
                                              "form.mediaRecordedToDate"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "label",
                                          {
                                            attrs: {
                                              for: "videoRecordedToDate"
                                            }
                                          },
                                          [
                                            _c("img", {
                                              staticClass: "calendar-icon",
                                              attrs: {
                                                src: __webpack_require__(/*! ../assets/calendar.png */ "./resources/js/assets/calendar.png")
                                              }
                                            })
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Video Participants")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      ref: "dropdownVideoParticipants",
                                      staticClass: "dropdown"
                                    },
                                    [
                                      _c("input", {
                                        staticClass: "dropdown-toggle",
                                        class:
                                          _vm.videoParticipantValueCount > 0
                                            ? "selected-value form-control recent-valuation cursor-pointer"
                                            : "form-control recent-valuation cursor-pointer",
                                        staticStyle: {
                                          "caret-color": "transparent"
                                        },
                                        attrs: {
                                          label: "name",
                                          autocomplete: "off",
                                          "data-toggle": "dropdown",
                                          placeholder: "Select Options"
                                        },
                                        domProps: {
                                          value: [
                                            _vm.videoParticipantValueCount > 0
                                              ? _vm.videoParticipantValueCount +
                                                " Selected"
                                              : ""
                                          ]
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "dropdown-menu ",
                                          on: {
                                            click: function($event) {
                                              return $event.stopPropagation()
                                            }
                                          }
                                        },
                                        [
                                          _vm.videoPresenterTypes
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "dropdown-options-container"
                                                },
                                                [
                                                  _c(
                                                    "ul",
                                                    {
                                                      staticClass:
                                                        "dropdown-content-options"
                                                    },
                                                    _vm._l(
                                                      _vm.videoPresenterTypes,
                                                      function(item) {
                                                        return _c(
                                                          "li",
                                                          {
                                                            staticClass:
                                                              "d-flex align-items-center mb-1"
                                                          },
                                                          [
                                                            _c("input", {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    _vm.videoParticipantInput,
                                                                  expression:
                                                                    "videoParticipantInput"
                                                                }
                                                              ],
                                                              staticClass:
                                                                "mr-1",
                                                              attrs: {
                                                                id:
                                                                  "vp-" +
                                                                  item.id,
                                                                type: "checkbox"
                                                              },
                                                              domProps: {
                                                                value: item.id,
                                                                checked: Array.isArray(
                                                                  _vm.videoParticipantInput
                                                                )
                                                                  ? _vm._i(
                                                                      _vm.videoParticipantInput,
                                                                      item.id
                                                                    ) > -1
                                                                  : _vm.videoParticipantInput
                                                              },
                                                              on: {
                                                                change: function(
                                                                  $event
                                                                ) {
                                                                  var $$a =
                                                                      _vm.videoParticipantInput,
                                                                    $$el =
                                                                      $event.target,
                                                                    $$c = $$el.checked
                                                                      ? true
                                                                      : false
                                                                  if (
                                                                    Array.isArray(
                                                                      $$a
                                                                    )
                                                                  ) {
                                                                    var $$v =
                                                                        item.id,
                                                                      $$i = _vm._i(
                                                                        $$a,
                                                                        $$v
                                                                      )
                                                                    if (
                                                                      $$el.checked
                                                                    ) {
                                                                      $$i < 0 &&
                                                                        (_vm.videoParticipantInput = $$a.concat(
                                                                          [$$v]
                                                                        ))
                                                                    } else {
                                                                      $$i >
                                                                        -1 &&
                                                                        (_vm.videoParticipantInput = $$a
                                                                          .slice(
                                                                            0,
                                                                            $$i
                                                                          )
                                                                          .concat(
                                                                            $$a.slice(
                                                                              $$i +
                                                                                1
                                                                            )
                                                                          ))
                                                                    }
                                                                  } else {
                                                                    _vm.videoParticipantInput = $$c
                                                                  }
                                                                }
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "label",
                                                              {
                                                                staticClass:
                                                                  "mb-0",
                                                                attrs: {
                                                                  for:
                                                                    "vp-" +
                                                                    item.id
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  " " +
                                                                    _vm._s(
                                                                      item.name
                                                                    )
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    0
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "dropdown-footer text-right"
                                            },
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  staticClass: "btn modal-btn",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.submitMultiDropdown(
                                                        "videoParticipantMapArray",
                                                        "videoParticipantValueCount",
                                                        "videoParticipantInput",
                                                        "dropdownVideoParticipants"
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("Done")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Audio Participants")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      ref: "dropdownAudioParticipants",
                                      staticClass: "dropdown"
                                    },
                                    [
                                      _c("input", {
                                        staticClass: "dropdown-toggle",
                                        class:
                                          _vm.audioParticipantValueCount > 0
                                            ? "selected-value form-control recent-valuation cursor-pointer"
                                            : "form-control recent-valuation cursor-pointer",
                                        staticStyle: {
                                          "caret-color": "transparent"
                                        },
                                        attrs: {
                                          label: "name",
                                          autocomplete: "off",
                                          "data-toggle": "dropdown",
                                          placeholder: "Select Options"
                                        },
                                        domProps: {
                                          value: [
                                            _vm.audioParticipantValueCount > 0
                                              ? _vm.audioParticipantValueCount +
                                                " Selected"
                                              : ""
                                          ]
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "dropdown-menu ",
                                          on: {
                                            click: function($event) {
                                              return $event.stopPropagation()
                                            }
                                          }
                                        },
                                        [
                                          _vm.audioPresenterTypes
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "dropdown-options-container"
                                                },
                                                [
                                                  _c(
                                                    "ul",
                                                    {
                                                      staticClass:
                                                        "dropdown-content-options"
                                                    },
                                                    _vm._l(
                                                      _vm.audioPresenterTypes,
                                                      function(item) {
                                                        return _c(
                                                          "li",
                                                          {
                                                            staticClass:
                                                              "d-flex align-items-center mb-1"
                                                          },
                                                          [
                                                            _c("input", {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    _vm.audioParticipantInput,
                                                                  expression:
                                                                    "audioParticipantInput"
                                                                }
                                                              ],
                                                              staticClass:
                                                                "mr-1",
                                                              attrs: {
                                                                id:
                                                                  "ap-" +
                                                                  item.id,
                                                                type: "checkbox"
                                                              },
                                                              domProps: {
                                                                value: item.id,
                                                                checked: Array.isArray(
                                                                  _vm.audioParticipantInput
                                                                )
                                                                  ? _vm._i(
                                                                      _vm.audioParticipantInput,
                                                                      item.id
                                                                    ) > -1
                                                                  : _vm.audioParticipantInput
                                                              },
                                                              on: {
                                                                change: function(
                                                                  $event
                                                                ) {
                                                                  var $$a =
                                                                      _vm.audioParticipantInput,
                                                                    $$el =
                                                                      $event.target,
                                                                    $$c = $$el.checked
                                                                      ? true
                                                                      : false
                                                                  if (
                                                                    Array.isArray(
                                                                      $$a
                                                                    )
                                                                  ) {
                                                                    var $$v =
                                                                        item.id,
                                                                      $$i = _vm._i(
                                                                        $$a,
                                                                        $$v
                                                                      )
                                                                    if (
                                                                      $$el.checked
                                                                    ) {
                                                                      $$i < 0 &&
                                                                        (_vm.audioParticipantInput = $$a.concat(
                                                                          [$$v]
                                                                        ))
                                                                    } else {
                                                                      $$i >
                                                                        -1 &&
                                                                        (_vm.audioParticipantInput = $$a
                                                                          .slice(
                                                                            0,
                                                                            $$i
                                                                          )
                                                                          .concat(
                                                                            $$a.slice(
                                                                              $$i +
                                                                                1
                                                                            )
                                                                          ))
                                                                    }
                                                                  } else {
                                                                    _vm.audioParticipantInput = $$c
                                                                  }
                                                                }
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "label",
                                                              {
                                                                staticClass:
                                                                  "mb-0",
                                                                attrs: {
                                                                  for:
                                                                    "ap-" +
                                                                    item.id
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  " " +
                                                                    _vm._s(
                                                                      item.name
                                                                    )
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    0
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "dropdown-footer text-right"
                                            },
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  staticClass: "btn modal-btn",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.submitMultiDropdown(
                                                        "audioParticipantMapArray",
                                                        "audioParticipantValueCount",
                                                        "audioParticipantInput",
                                                        "dropdownAudioParticipants"
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("Done")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Video Media Type")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      ref: "dropdownVideoSubType",
                                      staticClass: "dropdown"
                                    },
                                    [
                                      _c("input", {
                                        staticClass: "dropdown-toggle",
                                        class:
                                          _vm.videoSubTypeValueCount > 0
                                            ? "selected-value form-control recent-valuation cursor-pointer"
                                            : "form-control recent-valuation cursor-pointer",
                                        staticStyle: {
                                          "caret-color": "transparent"
                                        },
                                        attrs: {
                                          label: "name",
                                          autocomplete: "off",
                                          "data-toggle": "dropdown",
                                          placeholder: "Select Options"
                                        },
                                        domProps: {
                                          value: [
                                            _vm.videoSubTypeValueCount > 0
                                              ? _vm.videoSubTypeValueCount +
                                                " Selected"
                                              : ""
                                          ]
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "dropdown-menu ",
                                          on: {
                                            click: function($event) {
                                              return $event.stopPropagation()
                                            }
                                          }
                                        },
                                        [
                                          _vm.videoSubTypes
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "dropdown-options-container"
                                                },
                                                [
                                                  _c(
                                                    "ul",
                                                    {
                                                      staticClass:
                                                        "dropdown-content-options"
                                                    },
                                                    _vm._l(
                                                      _vm.videoSubTypes,
                                                      function(item) {
                                                        return _c(
                                                          "li",
                                                          {
                                                            staticClass:
                                                              "d-flex align-items-center mb-1"
                                                          },
                                                          [
                                                            _c("input", {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    _vm.videoSubTypeInput,
                                                                  expression:
                                                                    "videoSubTypeInput"
                                                                }
                                                              ],
                                                              staticClass:
                                                                "mr-1",
                                                              attrs: {
                                                                id:
                                                                  "vp-" +
                                                                  item.id,
                                                                type: "checkbox"
                                                              },
                                                              domProps: {
                                                                value: item.id,
                                                                checked: Array.isArray(
                                                                  _vm.videoSubTypeInput
                                                                )
                                                                  ? _vm._i(
                                                                      _vm.videoSubTypeInput,
                                                                      item.id
                                                                    ) > -1
                                                                  : _vm.videoSubTypeInput
                                                              },
                                                              on: {
                                                                change: function(
                                                                  $event
                                                                ) {
                                                                  var $$a =
                                                                      _vm.videoSubTypeInput,
                                                                    $$el =
                                                                      $event.target,
                                                                    $$c = $$el.checked
                                                                      ? true
                                                                      : false
                                                                  if (
                                                                    Array.isArray(
                                                                      $$a
                                                                    )
                                                                  ) {
                                                                    var $$v =
                                                                        item.id,
                                                                      $$i = _vm._i(
                                                                        $$a,
                                                                        $$v
                                                                      )
                                                                    if (
                                                                      $$el.checked
                                                                    ) {
                                                                      $$i < 0 &&
                                                                        (_vm.videoSubTypeInput = $$a.concat(
                                                                          [$$v]
                                                                        ))
                                                                    } else {
                                                                      $$i >
                                                                        -1 &&
                                                                        (_vm.videoSubTypeInput = $$a
                                                                          .slice(
                                                                            0,
                                                                            $$i
                                                                          )
                                                                          .concat(
                                                                            $$a.slice(
                                                                              $$i +
                                                                                1
                                                                            )
                                                                          ))
                                                                    }
                                                                  } else {
                                                                    _vm.videoSubTypeInput = $$c
                                                                  }
                                                                }
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "label",
                                                              {
                                                                staticClass:
                                                                  "mb-0",
                                                                attrs: {
                                                                  for:
                                                                    "vp-" +
                                                                    item.id
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  " " +
                                                                    _vm._s(
                                                                      item.name
                                                                    )
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    0
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "dropdown-footer text-right"
                                            },
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  staticClass: "btn modal-btn",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.submitMultiDropdown(
                                                        "videoSubTypeMapArray",
                                                        "videoSubTypeValueCount",
                                                        "videoSubTypeInput",
                                                        "dropdownVideoSubType"
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("Done")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Audio Media Type")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      ref: "dropdownAudioSubType",
                                      staticClass: "dropdown"
                                    },
                                    [
                                      _c("input", {
                                        staticClass: "dropdown-toggle",
                                        class:
                                          _vm.audioSubTypeValueCount > 0
                                            ? "selected-value form-control recent-valuation cursor-pointer"
                                            : "form-control recent-valuation cursor-pointer",
                                        staticStyle: {
                                          "caret-color": "transparent"
                                        },
                                        attrs: {
                                          label: "name",
                                          autocomplete: "off",
                                          "data-toggle": "dropdown",
                                          placeholder: "Select Options"
                                        },
                                        domProps: {
                                          value: [
                                            _vm.audioSubTypeValueCount > 0
                                              ? _vm.audioSubTypeValueCount +
                                                " Selected"
                                              : ""
                                          ]
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "dropdown-menu ",
                                          on: {
                                            click: function($event) {
                                              return $event.stopPropagation()
                                            }
                                          }
                                        },
                                        [
                                          _vm.audioSubTypes
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "dropdown-options-container"
                                                },
                                                [
                                                  _c(
                                                    "ul",
                                                    {
                                                      staticClass:
                                                        "dropdown-content-options"
                                                    },
                                                    _vm._l(
                                                      _vm.audioSubTypes,
                                                      function(item) {
                                                        return _c(
                                                          "li",
                                                          {
                                                            staticClass:
                                                              "d-flex align-items-center mb-1"
                                                          },
                                                          [
                                                            _c("input", {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    _vm.audioSubTypeInput,
                                                                  expression:
                                                                    "audioSubTypeInput"
                                                                }
                                                              ],
                                                              staticClass:
                                                                "mr-1",
                                                              attrs: {
                                                                id:
                                                                  "ast-" +
                                                                  item.id,
                                                                type: "checkbox"
                                                              },
                                                              domProps: {
                                                                value: item.id,
                                                                checked: Array.isArray(
                                                                  _vm.audioSubTypeInput
                                                                )
                                                                  ? _vm._i(
                                                                      _vm.audioSubTypeInput,
                                                                      item.id
                                                                    ) > -1
                                                                  : _vm.audioSubTypeInput
                                                              },
                                                              on: {
                                                                change: function(
                                                                  $event
                                                                ) {
                                                                  var $$a =
                                                                      _vm.audioSubTypeInput,
                                                                    $$el =
                                                                      $event.target,
                                                                    $$c = $$el.checked
                                                                      ? true
                                                                      : false
                                                                  if (
                                                                    Array.isArray(
                                                                      $$a
                                                                    )
                                                                  ) {
                                                                    var $$v =
                                                                        item.id,
                                                                      $$i = _vm._i(
                                                                        $$a,
                                                                        $$v
                                                                      )
                                                                    if (
                                                                      $$el.checked
                                                                    ) {
                                                                      $$i < 0 &&
                                                                        (_vm.audioSubTypeInput = $$a.concat(
                                                                          [$$v]
                                                                        ))
                                                                    } else {
                                                                      $$i >
                                                                        -1 &&
                                                                        (_vm.audioSubTypeInput = $$a
                                                                          .slice(
                                                                            0,
                                                                            $$i
                                                                          )
                                                                          .concat(
                                                                            $$a.slice(
                                                                              $$i +
                                                                                1
                                                                            )
                                                                          ))
                                                                    }
                                                                  } else {
                                                                    _vm.audioSubTypeInput = $$c
                                                                  }
                                                                }
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "label",
                                                              {
                                                                staticClass:
                                                                  "mb-0",
                                                                attrs: {
                                                                  for:
                                                                    "ast-" +
                                                                    item.id
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  " " +
                                                                    _vm._s(
                                                                      item.name
                                                                    )
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    0
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "dropdown-footer text-right"
                                            },
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  staticClass: "btn modal-btn",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.submitMultiDropdown(
                                                        "audioSubTypeMapArray",
                                                        "audioSubTypeValueCount",
                                                        "audioSubTypeInput",
                                                        "dropdownAudioSubType"
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("Done")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Video Subject of Company")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      ref: "dropdownVideoSubject",
                                      staticClass: "dropdown"
                                    },
                                    [
                                      _c("input", {
                                        staticClass: "dropdown-toggle",
                                        class:
                                          _vm.videoSubjectTypeValueCount > 0
                                            ? "selected-value form-control recent-valuation cursor-pointer"
                                            : "form-control recent-valuation cursor-pointer",
                                        staticStyle: {
                                          "caret-color": "transparent"
                                        },
                                        attrs: {
                                          label: "name",
                                          autocomplete: "off",
                                          "data-toggle": "dropdown",
                                          placeholder: "Select Options"
                                        },
                                        domProps: {
                                          value: [
                                            _vm.videoSubjectTypeValueCount > 0
                                              ? _vm.videoSubjectTypeValueCount +
                                                " Selected"
                                              : ""
                                          ]
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "dropdown-menu ",
                                          on: {
                                            click: function($event) {
                                              return $event.stopPropagation()
                                            }
                                          }
                                        },
                                        [
                                          _vm.videoSubjectTypes
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "dropdown-options-container"
                                                },
                                                [
                                                  _c(
                                                    "ul",
                                                    {
                                                      staticClass:
                                                        "dropdown-content-options"
                                                    },
                                                    _vm._l(
                                                      _vm.videoSubjectTypes,
                                                      function(item) {
                                                        return _c(
                                                          "li",
                                                          {
                                                            staticClass:
                                                              "d-flex align-items-center mb-1"
                                                          },
                                                          [
                                                            _c("input", {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    _vm.videoSubjectTypeInput,
                                                                  expression:
                                                                    "videoSubjectTypeInput"
                                                                }
                                                              ],
                                                              staticClass:
                                                                "mr-1",
                                                              attrs: {
                                                                id:
                                                                  "vp-" +
                                                                  item.id,
                                                                type: "checkbox"
                                                              },
                                                              domProps: {
                                                                value: item.id,
                                                                checked: Array.isArray(
                                                                  _vm.videoSubjectTypeInput
                                                                )
                                                                  ? _vm._i(
                                                                      _vm.videoSubjectTypeInput,
                                                                      item.id
                                                                    ) > -1
                                                                  : _vm.videoSubjectTypeInput
                                                              },
                                                              on: {
                                                                change: function(
                                                                  $event
                                                                ) {
                                                                  var $$a =
                                                                      _vm.videoSubjectTypeInput,
                                                                    $$el =
                                                                      $event.target,
                                                                    $$c = $$el.checked
                                                                      ? true
                                                                      : false
                                                                  if (
                                                                    Array.isArray(
                                                                      $$a
                                                                    )
                                                                  ) {
                                                                    var $$v =
                                                                        item.id,
                                                                      $$i = _vm._i(
                                                                        $$a,
                                                                        $$v
                                                                      )
                                                                    if (
                                                                      $$el.checked
                                                                    ) {
                                                                      $$i < 0 &&
                                                                        (_vm.videoSubjectTypeInput = $$a.concat(
                                                                          [$$v]
                                                                        ))
                                                                    } else {
                                                                      $$i >
                                                                        -1 &&
                                                                        (_vm.videoSubjectTypeInput = $$a
                                                                          .slice(
                                                                            0,
                                                                            $$i
                                                                          )
                                                                          .concat(
                                                                            $$a.slice(
                                                                              $$i +
                                                                                1
                                                                            )
                                                                          ))
                                                                    }
                                                                  } else {
                                                                    _vm.videoSubjectTypeInput = $$c
                                                                  }
                                                                }
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "label",
                                                              {
                                                                staticClass:
                                                                  "mb-0",
                                                                attrs: {
                                                                  for:
                                                                    "vp-" +
                                                                    item.id
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  " " +
                                                                    _vm._s(
                                                                      item.name
                                                                    )
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    0
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "dropdown-footer text-right"
                                            },
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  staticClass: "btn modal-btn",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.submitMultiDropdown(
                                                        "videoSubjectTypeMapArray",
                                                        "videoSubjectTypeValueCount",
                                                        "videoSubjectTypeInput",
                                                        "dropdownVideoSubject"
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("Done")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Audio Subject of Company")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      ref: "dropdownAudioSubject",
                                      staticClass: "dropdown"
                                    },
                                    [
                                      _c("input", {
                                        staticClass: "dropdown-toggle",
                                        class:
                                          _vm.audioSubjectTypeValueCount > 0
                                            ? "selected-value form-control recent-valuation cursor-pointer"
                                            : "form-control recent-valuation cursor-pointer",
                                        staticStyle: {
                                          "caret-color": "transparent"
                                        },
                                        attrs: {
                                          label: "name",
                                          autocomplete: "off",
                                          "data-toggle": "dropdown",
                                          placeholder: "Select Options"
                                        },
                                        domProps: {
                                          value: [
                                            _vm.audioSubjectTypeValueCount > 0
                                              ? _vm.audioSubjectTypeValueCount +
                                                " Selected"
                                              : ""
                                          ]
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "dropdown-menu ",
                                          on: {
                                            click: function($event) {
                                              return $event.stopPropagation()
                                            }
                                          }
                                        },
                                        [
                                          _vm.audioSubjectTypes
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "dropdown-options-container"
                                                },
                                                [
                                                  _c(
                                                    "ul",
                                                    {
                                                      staticClass:
                                                        "dropdown-content-options"
                                                    },
                                                    _vm._l(
                                                      _vm.audioSubjectTypes,
                                                      function(item) {
                                                        return _c(
                                                          "li",
                                                          {
                                                            staticClass:
                                                              "d-flex align-items-center mb-1"
                                                          },
                                                          [
                                                            _c("input", {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    _vm.audioSubjectTypeInput,
                                                                  expression:
                                                                    "audioSubjectTypeInput"
                                                                }
                                                              ],
                                                              staticClass:
                                                                "mr-1",
                                                              attrs: {
                                                                id:
                                                                  "asub-" +
                                                                  item.id,
                                                                type: "checkbox"
                                                              },
                                                              domProps: {
                                                                value: item.id,
                                                                checked: Array.isArray(
                                                                  _vm.audioSubjectTypeInput
                                                                )
                                                                  ? _vm._i(
                                                                      _vm.audioSubjectTypeInput,
                                                                      item.id
                                                                    ) > -1
                                                                  : _vm.audioSubjectTypeInput
                                                              },
                                                              on: {
                                                                change: function(
                                                                  $event
                                                                ) {
                                                                  var $$a =
                                                                      _vm.audioSubjectTypeInput,
                                                                    $$el =
                                                                      $event.target,
                                                                    $$c = $$el.checked
                                                                      ? true
                                                                      : false
                                                                  if (
                                                                    Array.isArray(
                                                                      $$a
                                                                    )
                                                                  ) {
                                                                    var $$v =
                                                                        item.id,
                                                                      $$i = _vm._i(
                                                                        $$a,
                                                                        $$v
                                                                      )
                                                                    if (
                                                                      $$el.checked
                                                                    ) {
                                                                      $$i < 0 &&
                                                                        (_vm.audioSubjectTypeInput = $$a.concat(
                                                                          [$$v]
                                                                        ))
                                                                    } else {
                                                                      $$i >
                                                                        -1 &&
                                                                        (_vm.audioSubjectTypeInput = $$a
                                                                          .slice(
                                                                            0,
                                                                            $$i
                                                                          )
                                                                          .concat(
                                                                            $$a.slice(
                                                                              $$i +
                                                                                1
                                                                            )
                                                                          ))
                                                                    }
                                                                  } else {
                                                                    _vm.audioSubjectTypeInput = $$c
                                                                  }
                                                                }
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "label",
                                                              {
                                                                staticClass:
                                                                  "mb-0",
                                                                attrs: {
                                                                  for:
                                                                    "asub-" +
                                                                    item.id
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  " " +
                                                                    _vm._s(
                                                                      item.name
                                                                    )
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    0
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "dropdown-footer text-right"
                                            },
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  staticClass: "btn modal-btn",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.submitMultiDropdown(
                                                        "audioSubjectTypeMapArray",
                                                        "audioSubjectTypeValueCount",
                                                        "audioSubjectTypeInput",
                                                        "dropdownAudioSubject"
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("Done")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        {
                          attrs: {
                            title:
                              "Company Contacts " +
                              _vm.totalCompanyContactFilters
                          },
                          on: {
                            click: function($event) {
                              _vm.mainFilter = "companyContacts"
                            }
                          }
                        },
                        [
                          _c("b-card-text", [
                            _c("div", { staticClass: "row state-container" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Sales Department")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "hasSalesDepartment",
                                    staticClass: "form-control",
                                    attrs: {
                                      options: [
                                        { label: "YES", id: 1 },
                                        { label: "NO", id: 0 }
                                      ],
                                      placeholder: "Select Below",
                                      reduce: function(option) {
                                        return option.id
                                      }
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.changeFieldSelection(
                                          $event,
                                          "hasSalesDepartmentSelected"
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.form.hasSalesDepartment,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.form,
                                          "hasSalesDepartment",
                                          $$v
                                        )
                                      },
                                      expression: "form.hasSalesDepartment"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Investor Relations Department")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "hasIrd",
                                    staticClass: "form-control",
                                    attrs: {
                                      options: [
                                        { label: "YES", id: 1 },
                                        { label: "NO", id: 0 }
                                      ],
                                      placeholder: "Select Below",
                                      reduce: function(option) {
                                        return option.id
                                      }
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.changeFieldSelection(
                                          $event,
                                          "hasIrdSelected"
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.form.hasIrd,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "hasIrd", $$v)
                                      },
                                      expression: "form.hasIrd"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Business Development Department")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "hasBusinessDevelopment",
                                    staticClass: "form-control",
                                    attrs: {
                                      options: [
                                        { label: "YES", id: 1 },
                                        { label: "NO", id: 0 }
                                      ],
                                      placeholder: "Select Below",
                                      reduce: function(option) {
                                        return option.id
                                      }
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.changeFieldSelection(
                                          $event,
                                          "hasBusinessDevelopmentSelected"
                                        )
                                      }
                                    },
                                    model: {
                                      value: _vm.form.hasBusinessDevelopment,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.form,
                                          "hasBusinessDevelopment",
                                          $$v
                                        )
                                      },
                                      expression: "form.hasBusinessDevelopment"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Strategic Partnerships")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.hasStrategicPartnership,
                                        expression:
                                          "form.hasStrategicPartnership"
                                      }
                                    ],
                                    staticClass:
                                      "form-control recent-valuation",
                                    attrs: {
                                      type: "text",
                                      placeholder: "Strategic Partnerships"
                                    },
                                    domProps: {
                                      value: _vm.form.hasStrategicPartnership
                                    },
                                    on: {
                                      input: [
                                        function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "hasStrategicPartnership",
                                            $event.target.value
                                          )
                                        },
                                        function($event) {
                                          return _vm.getSearchResult()
                                        }
                                      ]
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Has Suppliers")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.hasSuppliers,
                                        expression: "form.hasSuppliers"
                                      }
                                    ],
                                    staticClass:
                                      "form-control recent-valuation",
                                    attrs: {
                                      type: "text",
                                      placeholder: "Suppliers"
                                    },
                                    domProps: { value: _vm.form.hasSuppliers },
                                    on: {
                                      input: [
                                        function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "hasSuppliers",
                                            $event.target.value
                                          )
                                        },
                                        function($event) {
                                          return _vm.getSearchResult()
                                        }
                                      ]
                                    }
                                  })
                                ]
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        {
                          attrs: {
                            title: "Geography " + _vm.totalGeographyFilters
                          },
                          on: {
                            click: function($event) {
                              _vm.mainFilter = "geography"
                            }
                          }
                        },
                        [
                          _c("b-card-text", [
                            _c("div", { staticClass: "row state-container" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Country")]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    staticClass: "form-control",
                                    attrs: {
                                      options: _vm.countries,
                                      placeholder: "Select Below",
                                      label: "name",
                                      reduce: function(option) {
                                        return option.id
                                      }
                                    },
                                    on: {
                                      input: _vm.getStatesOrProvinceStatus
                                    },
                                    model: {
                                      value: _vm.form.country,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "country", $$v)
                                      },
                                      expression: "form.country"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              this.haveProvince == 0
                                ? _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-md-2 search-field form-group"
                                    },
                                    [
                                      _c(
                                        "label",
                                        { staticClass: "control-label" },
                                        [_vm._v("State")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        staticClass: "form-control",
                                        class: {
                                          "field-no-selected": !_vm.states
                                            .length
                                        },
                                        attrs: {
                                          options: _vm.states,
                                          placeholder: "Select Below",
                                          label: "name",
                                          reduce: function(option) {
                                            return option.id
                                          }
                                        },
                                        on: {
                                          input: function($event) {
                                            return _vm.changeFieldSelection(
                                              $event,
                                              "citySelected"
                                            )
                                          }
                                        },
                                        model: {
                                          value: _vm.form.state,
                                          callback: function($$v) {
                                            _vm.$set(_vm.form, "state", $$v)
                                          },
                                          expression: "form.state"
                                        }
                                      })
                                    ],
                                    1
                                  )
                                : _c(
                                    "div",
                                    {
                                      staticClass:
                                        "col-md-2 search-field form-group"
                                    },
                                    [
                                      _c(
                                        "label",
                                        { staticClass: "control-label" },
                                        [_vm._v("Province")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.province,
                                            expression: "form.province"
                                          }
                                        ],
                                        staticClass:
                                          "form-control recent-valuation",
                                        attrs: {
                                          type: "text",
                                          placeholder: "Province"
                                        },
                                        domProps: { value: _vm.form.province },
                                        on: {
                                          input: [
                                            function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.form,
                                                "province",
                                                $event.target.value
                                              )
                                            },
                                            function($event) {
                                              return _vm.getSearchResult()
                                            }
                                          ]
                                        }
                                      })
                                    ]
                                  ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("City")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.city,
                                        expression: "form.city"
                                      }
                                    ],
                                    staticClass:
                                      "form-control recent-valuation",
                                    attrs: {
                                      type: "text",
                                      placeholder: "City"
                                    },
                                    domProps: { value: _vm.form.city },
                                    on: {
                                      input: [
                                        function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "city",
                                            $event.target.value
                                          )
                                        },
                                        function($event) {
                                          return _vm.getSearchResult()
                                        }
                                      ]
                                    }
                                  })
                                ]
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        {
                          attrs: { title: "Social" + _vm.totalSocialFilters },
                          on: {
                            click: function($event) {
                              _vm.mainFilter = "social"
                            }
                          }
                        },
                        [
                          _c("b-card-text", [
                            _c("div", { staticClass: "row state-container" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "col-md-2 search-field form-group"
                                },
                                [
                                  _c(
                                    "label",
                                    { staticClass: "control-label" },
                                    [_vm._v("Social Media Platform")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      ref: "dropdownSocialMedia",
                                      staticClass: "dropdown"
                                    },
                                    [
                                      _c("input", {
                                        staticClass: "dropdown-toggle",
                                        class:
                                          _vm.socialMediaListValueCount > 0
                                            ? "selected-value form-control recent-valuation cursor-pointer"
                                            : "form-control recent-valuation cursor-pointer",
                                        staticStyle: {
                                          "caret-color": "transparent"
                                        },
                                        attrs: {
                                          label: "name",
                                          autocomplete: "off",
                                          "data-toggle": "dropdown",
                                          placeholder: "Select Options"
                                        },
                                        domProps: {
                                          value: [
                                            _vm.socialMediaListValueCount > 0
                                              ? _vm.socialMediaListValueCount +
                                                " Selected"
                                              : ""
                                          ]
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "dropdown-menu ",
                                          on: {
                                            click: function($event) {
                                              return $event.stopPropagation()
                                            }
                                          }
                                        },
                                        [
                                          _vm.socialMediaPlatforms
                                            ? _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "dropdown-options-container"
                                                },
                                                [
                                                  _c(
                                                    "ul",
                                                    {
                                                      staticClass:
                                                        "dropdown-content-options"
                                                    },
                                                    _vm._l(
                                                      _vm.socialMediaPlatforms,
                                                      function(item) {
                                                        return _c(
                                                          "li",
                                                          {
                                                            staticClass:
                                                              "d-flex align-items-center mb-1"
                                                          },
                                                          [
                                                            _c("input", {
                                                              directives: [
                                                                {
                                                                  name: "model",
                                                                  rawName:
                                                                    "v-model",
                                                                  value:
                                                                    _vm.socialMediaListInput,
                                                                  expression:
                                                                    "socialMediaListInput"
                                                                }
                                                              ],
                                                              staticClass:
                                                                "mr-1",
                                                              attrs: {
                                                                id:
                                                                  "ts-" +
                                                                  item.id,
                                                                type: "checkbox"
                                                              },
                                                              domProps: {
                                                                value: item.id,
                                                                checked: Array.isArray(
                                                                  _vm.socialMediaListInput
                                                                )
                                                                  ? _vm._i(
                                                                      _vm.socialMediaListInput,
                                                                      item.id
                                                                    ) > -1
                                                                  : _vm.socialMediaListInput
                                                              },
                                                              on: {
                                                                change: function(
                                                                  $event
                                                                ) {
                                                                  var $$a =
                                                                      _vm.socialMediaListInput,
                                                                    $$el =
                                                                      $event.target,
                                                                    $$c = $$el.checked
                                                                      ? true
                                                                      : false
                                                                  if (
                                                                    Array.isArray(
                                                                      $$a
                                                                    )
                                                                  ) {
                                                                    var $$v =
                                                                        item.id,
                                                                      $$i = _vm._i(
                                                                        $$a,
                                                                        $$v
                                                                      )
                                                                    if (
                                                                      $$el.checked
                                                                    ) {
                                                                      $$i < 0 &&
                                                                        (_vm.socialMediaListInput = $$a.concat(
                                                                          [$$v]
                                                                        ))
                                                                    } else {
                                                                      $$i >
                                                                        -1 &&
                                                                        (_vm.socialMediaListInput = $$a
                                                                          .slice(
                                                                            0,
                                                                            $$i
                                                                          )
                                                                          .concat(
                                                                            $$a.slice(
                                                                              $$i +
                                                                                1
                                                                            )
                                                                          ))
                                                                    }
                                                                  } else {
                                                                    _vm.socialMediaListInput = $$c
                                                                  }
                                                                }
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "label",
                                                              {
                                                                staticClass:
                                                                  "mb-0",
                                                                attrs: {
                                                                  for:
                                                                    "ts-" +
                                                                    item.id
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  " " +
                                                                    _vm._s(
                                                                      item.name
                                                                    )
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    ),
                                                    0
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "dropdown-footer text-right"
                                            },
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  staticClass: "btn modal-btn",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.submitMultiDropdown(
                                                        "socialMediaListMapArray",
                                                        "socialMediaListValueCount",
                                                        "socialMediaListInput",
                                                        "dropdownSocialMedia"
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._v("Done")]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        {
                          attrs: {
                            title:
                              "Research Coverage " +
                              _vm.totalResearchCoverageFilters
                          },
                          on: {
                            click: function($event) {
                              _vm.mainFilter = "researchCoverage"
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "row state-container" }, [
                            _c(
                              "div",
                              {
                                staticClass: "col-md-4 search-field form-group"
                              },
                              [
                                _c("label", { staticClass: "control-label" }, [
                                  _vm._v("Research Coverage")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    ref: "dropdownResearch",
                                    staticClass: "dropdown"
                                  },
                                  [
                                    _c("input", {
                                      staticClass: "dropdown-toggle",
                                      class:
                                        _vm.researchCoverageTypeValueCount > 0
                                          ? "selected-value form-control recent-valuation cursor-pointer"
                                          : "form-control recent-valuation cursor-pointer",
                                      staticStyle: {
                                        "caret-color": "transparent"
                                      },
                                      attrs: {
                                        label: "name",
                                        autocomplete: "off",
                                        "data-toggle": "dropdown",
                                        placeholder: "Select Options"
                                      },
                                      domProps: {
                                        value: [
                                          _vm.researchCoverageTypeValueCount > 0
                                            ? _vm.researchCoverageTypeValueCount +
                                              " Selected"
                                            : ""
                                        ]
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "dropdown-menu ",
                                        on: {
                                          click: function($event) {
                                            return $event.stopPropagation()
                                          }
                                        }
                                      },
                                      [
                                        _vm.researchCoverageTypeList
                                          ? _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "dropdown-options-container"
                                              },
                                              [
                                                _c(
                                                  "ul",
                                                  {
                                                    staticClass:
                                                      "dropdown-content-options"
                                                  },
                                                  _vm._l(
                                                    _vm.researchCoverageTypeList,
                                                    function(item) {
                                                      return _c(
                                                        "li",
                                                        {
                                                          staticClass:
                                                            "d-flex align-items-center mb-1"
                                                        },
                                                        [
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.researchCoverageTypeInput,
                                                                expression:
                                                                  "researchCoverageTypeInput"
                                                              }
                                                            ],
                                                            staticClass: "mr-1",
                                                            attrs: {
                                                              id:
                                                                "rct-" +
                                                                item.id,
                                                              type: "checkbox"
                                                            },
                                                            domProps: {
                                                              value: item.id,
                                                              checked: Array.isArray(
                                                                _vm.researchCoverageTypeInput
                                                              )
                                                                ? _vm._i(
                                                                    _vm.researchCoverageTypeInput,
                                                                    item.id
                                                                  ) > -1
                                                                : _vm.researchCoverageTypeInput
                                                            },
                                                            on: {
                                                              change: function(
                                                                $event
                                                              ) {
                                                                var $$a =
                                                                    _vm.researchCoverageTypeInput,
                                                                  $$el =
                                                                    $event.target,
                                                                  $$c = $$el.checked
                                                                    ? true
                                                                    : false
                                                                if (
                                                                  Array.isArray(
                                                                    $$a
                                                                  )
                                                                ) {
                                                                  var $$v =
                                                                      item.id,
                                                                    $$i = _vm._i(
                                                                      $$a,
                                                                      $$v
                                                                    )
                                                                  if (
                                                                    $$el.checked
                                                                  ) {
                                                                    $$i < 0 &&
                                                                      (_vm.researchCoverageTypeInput = $$a.concat(
                                                                        [$$v]
                                                                      ))
                                                                  } else {
                                                                    $$i > -1 &&
                                                                      (_vm.researchCoverageTypeInput = $$a
                                                                        .slice(
                                                                          0,
                                                                          $$i
                                                                        )
                                                                        .concat(
                                                                          $$a.slice(
                                                                            $$i +
                                                                              1
                                                                          )
                                                                        ))
                                                                  }
                                                                } else {
                                                                  _vm.researchCoverageTypeInput = $$c
                                                                }
                                                              }
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "label",
                                                            {
                                                              staticClass:
                                                                "mb-0",
                                                              attrs: {
                                                                for:
                                                                  "rct-" +
                                                                  item.id
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                " " +
                                                                  _vm._s(
                                                                    item.name
                                                                  ) +
                                                                  " "
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    }
                                                  ),
                                                  0
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "dropdown-footer text-right"
                                          },
                                          [
                                            _c(
                                              "b-button",
                                              {
                                                staticClass: "btn modal-btn",
                                                on: {
                                                  click: function($event) {
                                                    return _vm.submitMultiDropdown(
                                                      "researchMapArray",
                                                      "researchCoverageTypeValueCount",
                                                      "researchCoverageTypeInput",
                                                      "dropdownResearch"
                                                    )
                                                  }
                                                }
                                              },
                                              [_vm._v("Done")]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "col-md-4 search-field form-group"
                              },
                              [
                                _c("label", { staticClass: "control-label" }, [
                                  _vm._v("Community Research Platforms")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    ref: "dropdownCommunityResearch",
                                    staticClass: "dropdown"
                                  },
                                  [
                                    _c("input", {
                                      staticClass: "dropdown-toggle",
                                      class:
                                        _vm.sharedCommunityResearchPlatformListValueCount >
                                        0
                                          ? "selected-value form-control recent-valuation cursor-pointer"
                                          : "form-control recent-valuation cursor-pointer",
                                      staticStyle: {
                                        "caret-color": "transparent"
                                      },
                                      attrs: {
                                        label: "name",
                                        autocomplete: "off",
                                        "data-toggle": "dropdown",
                                        placeholder: "Select Options"
                                      },
                                      domProps: {
                                        value: [
                                          _vm.sharedCommunityResearchPlatformListValueCount >
                                          0
                                            ? _vm.sharedCommunityResearchPlatformListValueCount +
                                              " Selected"
                                            : ""
                                        ]
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "dropdown-menu ",
                                        on: {
                                          click: function($event) {
                                            return $event.stopPropagation()
                                          }
                                        }
                                      },
                                      [
                                        _vm.sharedCommunityResearchPlatformList
                                          ? _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "dropdown-options-container"
                                              },
                                              [
                                                _c(
                                                  "ul",
                                                  {
                                                    staticClass:
                                                      "dropdown-content-options"
                                                  },
                                                  _vm._l(
                                                    _vm.sharedCommunityResearchPlatformList,
                                                    function(item) {
                                                      return _c(
                                                        "li",
                                                        {
                                                          staticClass:
                                                            "d-flex align-items-center mb-1"
                                                        },
                                                        [
                                                          _c("input", {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.sharedCommunityResearchPlatformListInput,
                                                                expression:
                                                                  "sharedCommunityResearchPlatformListInput"
                                                              }
                                                            ],
                                                            staticClass: "mr-1",
                                                            attrs: {
                                                              id:
                                                                "sc-" + item.id,
                                                              type: "checkbox"
                                                            },
                                                            domProps: {
                                                              value: item.id,
                                                              checked: Array.isArray(
                                                                _vm.sharedCommunityResearchPlatformListInput
                                                              )
                                                                ? _vm._i(
                                                                    _vm.sharedCommunityResearchPlatformListInput,
                                                                    item.id
                                                                  ) > -1
                                                                : _vm.sharedCommunityResearchPlatformListInput
                                                            },
                                                            on: {
                                                              change: function(
                                                                $event
                                                              ) {
                                                                var $$a =
                                                                    _vm.sharedCommunityResearchPlatformListInput,
                                                                  $$el =
                                                                    $event.target,
                                                                  $$c = $$el.checked
                                                                    ? true
                                                                    : false
                                                                if (
                                                                  Array.isArray(
                                                                    $$a
                                                                  )
                                                                ) {
                                                                  var $$v =
                                                                      item.id,
                                                                    $$i = _vm._i(
                                                                      $$a,
                                                                      $$v
                                                                    )
                                                                  if (
                                                                    $$el.checked
                                                                  ) {
                                                                    $$i < 0 &&
                                                                      (_vm.sharedCommunityResearchPlatformListInput = $$a.concat(
                                                                        [$$v]
                                                                      ))
                                                                  } else {
                                                                    $$i > -1 &&
                                                                      (_vm.sharedCommunityResearchPlatformListInput = $$a
                                                                        .slice(
                                                                          0,
                                                                          $$i
                                                                        )
                                                                        .concat(
                                                                          $$a.slice(
                                                                            $$i +
                                                                              1
                                                                          )
                                                                        ))
                                                                  }
                                                                } else {
                                                                  _vm.sharedCommunityResearchPlatformListInput = $$c
                                                                }
                                                              }
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "label",
                                                            {
                                                              staticClass:
                                                                "mb-0",
                                                              attrs: {
                                                                for:
                                                                  "sc-" +
                                                                  item.id
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                " " +
                                                                  _vm._s(
                                                                    item.name
                                                                  )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    }
                                                  ),
                                                  0
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "dropdown-footer text-right"
                                          },
                                          [
                                            _c(
                                              "b-button",
                                              {
                                                staticClass: "btn modal-btn",
                                                on: {
                                                  click: function($event) {
                                                    return _vm.submitMultiDropdown(
                                                      "sharedCommunityResearchPlatformListMapArray",
                                                      "sharedCommunityResearchPlatformListValueCount",
                                                      "sharedCommunityResearchPlatformListInput",
                                                      "dropdownCommunityResearch"
                                                    )
                                                  }
                                                }
                                              },
                                              [_vm._v("Done")]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "col-md-4 search-field form-group"
                              },
                              [
                                _c("label", { staticClass: "control-label" }, [
                                  _vm._v("Research Firm Name")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.researchFirm_name,
                                      expression: "form.researchFirm_name"
                                    }
                                  ],
                                  staticClass: "form-control recent-valuation",
                                  attrs: { type: "text", autocomplete: "off" },
                                  domProps: {
                                    value: _vm.form.researchFirm_name
                                  },
                                  on: {
                                    input: [
                                      function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "researchFirm_name",
                                          $event.target.value
                                        )
                                      },
                                      function($event) {
                                        return _vm.searchResearchFirmName(
                                          $event.target.value,
                                          "researchFirm_name"
                                        )
                                      }
                                    ]
                                  }
                                })
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        {
                          attrs: {
                            title:
                              "Leadership & Governance " +
                              _vm.totalLeadershipFilters
                          },
                          on: {
                            click: function($event) {
                              _vm.mainFilter = "leadershipGovernance"
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "row state-container" }, [
                            _c(
                              "div",
                              {
                                staticClass: "col-md-2 search-field form-group"
                              },
                              [
                                _c("label", { staticClass: "control-label" }, [
                                  _vm._v("Has Board Members")
                                ]),
                                _vm._v(" "),
                                _c("v-select", {
                                  ref: "hasBoardMember",
                                  staticClass: "form-control",
                                  attrs: {
                                    options: [
                                      { label: "YES", id: 1 },
                                      { label: "NO", id: 0 }
                                    ],
                                    placeholder: "Select Below",
                                    reduce: function(option) {
                                      return option.id
                                    }
                                  },
                                  on: { input: _vm.getSearchResult },
                                  model: {
                                    value: _vm.form.hasBoardMember,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "hasBoardMember", $$v)
                                    },
                                    expression: "form.hasBoardMember"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "col-md-2 search-field form-group"
                              },
                              [
                                _c("label", { staticClass: "control-label" }, [
                                  _vm._v("Has Executives")
                                ]),
                                _vm._v(" "),
                                _c("v-select", {
                                  ref: "hasExecutive",
                                  staticClass: "form-control",
                                  attrs: {
                                    options: [
                                      { label: "YES", id: 1 },
                                      { label: "NO", id: 0 }
                                    ],
                                    placeholder: "Select Below",
                                    reduce: function(option) {
                                      return option.id
                                    }
                                  },
                                  on: { input: _vm.getSearchResult },
                                  model: {
                                    value: _vm.form.hasExecutive,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "hasExecutive", $$v)
                                    },
                                    expression: "form.hasExecutive"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "col-md-2 search-field form-group"
                              },
                              [
                                _c("label", { staticClass: "control-label" }, [
                                  _vm._v("Select Committee")
                                ]),
                                _vm._v(" "),
                                _c("v-select", {
                                  ref: "committee",
                                  staticClass: "form-control",
                                  attrs: {
                                    options: _vm.committees,
                                    placeholder: "Select Below",
                                    label: "name",
                                    reduce: function(option) {
                                      return option.id
                                    }
                                  },
                                  on: { input: _vm.getSearchResult },
                                  model: {
                                    value: _vm.form.committee,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "committee", $$v)
                                    },
                                    expression: "form.committee"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "col-md-2 search-field form-group"
                              },
                              [
                                _c("label", { staticClass: "control-label" }, [
                                  _vm._v("Select Executive Role")
                                ]),
                                _vm._v(" "),
                                _c("v-select", {
                                  ref: "executiveRole",
                                  staticClass: "form-control",
                                  attrs: {
                                    options: _vm.executiveRoles,
                                    placeholder: "Select Below",
                                    label: "name",
                                    reduce: function(option) {
                                      return option.id
                                    }
                                  },
                                  on: { input: _vm.getSearchResult },
                                  model: {
                                    value: _vm.form.executiveRole,
                                    callback: function($$v) {
                                      _vm.$set(_vm.form, "executiveRole", $$v)
                                    },
                                    expression: "form.executiveRole"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "col-md-4 search-field form-group"
                              },
                              [
                                _c("label", { staticClass: "control-label" }, [
                                  _vm._v("Board members or executives by name ")
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.memberName,
                                      expression: "form.memberName"
                                    }
                                  ],
                                  staticClass: "form-control recent-valuation",
                                  attrs: { type: "text", autocomplete: "off" },
                                  domProps: { value: _vm.form.memberName },
                                  on: {
                                    input: [
                                      function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "memberName",
                                          $event.target.value
                                        )
                                      },
                                      _vm.getSearchResult
                                    ]
                                  }
                                })
                              ]
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._m(19),
                  _vm._v(" "),
                  _c(
                    "b-tabs",
                    {
                      staticClass: "content-customized-tab screener-tab",
                      attrs: { "nav-class": "row screener-content-tab" }
                    },
                    [
                      _c(
                        "b-tab",
                        {
                          attrs: { title: "Video " + _vm.totalVideo },
                          on: {
                            click: function($event) {
                              return _vm.setTabType("video")
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "row search-result-container" },
                            [
                              _vm.contentLoading
                                ? _c("div", { staticClass: "loader" })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm._l(_vm.videoData, function(data, index) {
                                return _c(
                                  "div",
                                  { staticClass: "col-md-3 card-wrapper" },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "card" },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            attrs: {
                                              link: "",
                                              to: {
                                                name: data.routeName,
                                                params: {
                                                  slug: data.companySlug,
                                                  id: data.mediaUuid
                                                }
                                              }
                                            }
                                          },
                                          [
                                            _c("span", {
                                              staticClass: "bg_content_photo",
                                              style: {
                                                "background-image":
                                                  "url(" + data.fileThumb + ")"
                                              }
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "card-body" },
                                          [
                                            _c("img", {
                                              staticClass:
                                                "rounded-circle float-left mr-2 mb-5",
                                              attrs: {
                                                src: data.companyImage,
                                                width: "25",
                                                height: "25"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "p",
                                              {
                                                staticClass: "warp-text-title"
                                              },
                                              [_vm._v(_vm._s(data.name))]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "company-title warp-text-title"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                                        " +
                                                    _vm._s(data.companyName) +
                                                    "\n                                                    "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "ul",
                                              { staticClass: "content-ul" },
                                              [
                                                _c("li", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.numShortFormatter(
                                                        data.viewCounter
                                                      )
                                                    ) + " Views"
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("li", [
                                                  _vm._v(_vm._s(data.createdAt))
                                                ])
                                              ]
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                )
                              }),
                              _vm._v(" "),
                              !_vm.videoData.length
                                ? _c("div", { staticClass: "col-md-12" }, [
                                    _vm._v(
                                      "\n                                            No Search Results.\n                                        "
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-md-12" },
                                [
                                  _vm.contentPagination.last_page > 1
                                    ? _c("pagination", {
                                        attrs: {
                                          pagination: _vm.contentPagination,
                                          offset: 5
                                        },
                                        on: {
                                          paginate: function($event) {
                                            return _vm.getSearchResult(false)
                                          }
                                        }
                                      })
                                    : _vm._e()
                                ],
                                1
                              )
                            ],
                            2
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        {
                          attrs: { title: "Audio " + _vm.totalAudio },
                          on: {
                            click: function($event) {
                              return _vm.setTabType("audio")
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "row search-result-container" },
                            [
                              _vm.contentLoading
                                ? _c("div", { staticClass: "loader" })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm._l(_vm.audioData, function(data, index) {
                                return _c(
                                  "div",
                                  { staticClass: "col-md-3 card-wrapper" },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "card" },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            attrs: {
                                              link: "",
                                              to: {
                                                name: data.routeName,
                                                params: {
                                                  slug: data.companySlug,
                                                  id: data.mediaUuid
                                                }
                                              }
                                            }
                                          },
                                          [
                                            _c("span", {
                                              staticClass: "bg_content_photo",
                                              style: {
                                                "background-image":
                                                  "url(" + data.fileThumb + ")"
                                              }
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "card-body" },
                                          [
                                            _c("img", {
                                              staticClass:
                                                "rounded-circle float-left mr-2 mb-5",
                                              attrs: {
                                                src: data.companyImage,
                                                width: "25",
                                                height: "25"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "p",
                                              {
                                                staticClass: "warp-text-title"
                                              },
                                              [_vm._v(_vm._s(data.name))]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "company-title warp-text-title"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                                        " +
                                                    _vm._s(data.companyName) +
                                                    "\n                                                    "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "ul",
                                              { staticClass: "content-ul" },
                                              [
                                                _c("li", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.numShortFormatter(
                                                        data.viewCounter
                                                      )
                                                    ) + " Views"
                                                  )
                                                ]),
                                                _vm._v(" "),
                                                _c("li", [
                                                  _vm._v(_vm._s(data.createdAt))
                                                ])
                                              ]
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                )
                              }),
                              _vm._v(" "),
                              !_vm.audioData.length
                                ? _c("div", { staticClass: "col-md-12" }, [
                                    _vm._v(
                                      "\n                                            No Search Results.\n                                        "
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-md-12" },
                                [
                                  _vm.contentPagination.last_page > 1
                                    ? _c("pagination", {
                                        attrs: {
                                          pagination: _vm.contentPagination,
                                          offset: 5
                                        },
                                        on: {
                                          paginate: function($event) {
                                            return _vm.getSearchResult(false)
                                          }
                                        }
                                      })
                                    : _vm._e()
                                ],
                                1
                              )
                            ],
                            2
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        {
                          attrs: { title: "Company " + _vm.totalCompany },
                          on: {
                            click: function($event) {
                              return _vm.setTabType("company")
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "row search-result-container" },
                            [
                              _vm.contentLoading
                                ? _c("div", { staticClass: "loader" })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm._l(_vm.companyData, function(data, index) {
                                return _c(
                                  "div",
                                  { staticClass: "col-md-3 card-wrapper" },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "card" },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            attrs: {
                                              link: "",
                                              to: "/company/" + data.companySlug
                                            }
                                          },
                                          [
                                            _c("span", {
                                              staticClass: "bg_content_photo",
                                              style: {
                                                "background-image":
                                                  "url(" +
                                                  data.companyImage +
                                                  ")"
                                              }
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "card-body" },
                                          [
                                            _c(
                                              "p",
                                              {
                                                staticClass:
                                                  "warp-text-title font-weight-bold"
                                              },
                                              [_vm._v(_vm._s(data.name))]
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                )
                              }),
                              _vm._v(" "),
                              !_vm.companyData.length
                                ? _c("div", { staticClass: "col-md-12" }, [
                                    _vm._v(
                                      "\n                                            No Search Results.\n                                        "
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-md-12" },
                                [
                                  _vm.contentPagination.last_page > 1
                                    ? _c("pagination", {
                                        attrs: {
                                          pagination: _vm.contentPagination,
                                          offset: 5
                                        },
                                        on: {
                                          paginate: function($event) {
                                            return _vm.getSearchResult(false)
                                          }
                                        }
                                      })
                                    : _vm._e()
                                ],
                                1
                              )
                            ],
                            2
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ])
        ]),
        _vm._v(" "),
        [
          _c(
            "div",
            [
              _c(
                "b-modal",
                {
                  attrs: {
                    "hide-footer": "",
                    centered: "",
                    title: _vm.modalName
                  },
                  model: {
                    value: _vm.modalShow,
                    callback: function($$v) {
                      _vm.modalShow = $$v
                    },
                    expression: "modalShow"
                  }
                },
                [
                  [
                    _c(
                      "div",
                      { staticClass: "col-lg-12" },
                      [
                        _c("v-select", {
                          staticClass: "w100",
                          attrs: {
                            label: "name",
                            multiple: "",
                            options: _vm.popupModalFilteredOptions,
                            clearable: false,
                            placeholder: "Select the Options that Apply"
                          },
                          model: {
                            value: _vm.form.itemInput,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "itemInput", $$v)
                            },
                            expression: "form.itemInput"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-input-group",
                      { staticClass: "justify-content-end" },
                      [
                        _c(
                          "b-button",
                          {
                            staticClass: "btn modal-btn mt-3",
                            on: {
                              click: function($event) {
                                return _vm.changeFieldSelection(
                                  $event,
                                  "intelletualPropertySelected"
                                )
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                                    OK\n                                "
                            )
                          ]
                        )
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
        ],
        _vm._v(" "),
        _c(
          "b-modal",
          {
            ref: "saveSearchQueryModal",
            attrs: {
              id: "saveSearchQueryModal",
              title: "Save Search Query",
              centered: "",
              "hide-footer": ""
            }
          },
          [
            _c(
              "form",
              {
                ref: "formSearchQuery",
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.saveSearchHistory.apply(null, arguments)
                  }
                }
              },
              [
                _c("div", { staticClass: "col-lg-12" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.queryName,
                        expression: "queryName"
                      }
                    ],
                    ref: "queryName",
                    staticClass: "form-control px-2",
                    class: {
                      "is-invalid":
                        _vm.$v.queryName.$error || _vm.errors.queryName
                    },
                    attrs: { type: "text", placeholder: "Enter Name" },
                    domProps: { value: _vm.queryName },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.queryName = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  !_vm.$v.queryName.required
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v("Name is required.")
                      ])
                    : _vm.errors.queryName
                    ? _c(
                        "div",
                        {
                          staticClass: "invalid-feedback",
                          attrs: { role: "alert" }
                        },
                        [_vm._v(_vm._s(_vm.errors.queryName))]
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c(
                  "b-input-group",
                  { staticClass: "justify-content-end" },
                  [
                    _c(
                      "b-button",
                      {
                        staticClass: "btn modal-btn mt-3",
                        attrs: { type: "submit" }
                      },
                      [_vm._v(" Save ")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c("loader", { attrs: { "is-visible": _vm.isLoading } })
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h5", { staticClass: "mb-3" }, [_vm._v("Industry Filter")]),
      _vm._v(" "),
      _c("img", {
        staticClass: "text-center tree-image",
        attrs: { src: "/images/tree.png", alt: "tree", width: "50" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "d-block" }, [
      _c("i", { staticClass: "fas fa-arrow-down" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "search-results-top-section" }, [
      _c("hr"),
      _vm._v(" "),
      _c("h4", { staticClass: "text-theme-dark-blue font-weight-bold" }, [
        _vm._v("Search Results")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/apis/Common.js":
/*!*************************************!*\
  !*** ./resources/js/apis/Common.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  dateConvert: function dateConvert(str) {
    var date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  },
  hierarchyNodeColor: function hierarchyNodeColor(level) {
    switch (level) {
      case 'industry':
        return '#FFC42E';

      case 'sector':
        return '#23B9DA';

      case 'subSector':
        return '#7E32D1';

      case 'group':
        return '#30174B';

      case 'subGroup':
        return '#268C8C';

      case 'echelon':
        return '#C00BAA';

      case 'subEchelon':
        return '#3851CD';

      case 'tier':
        return '#2A8BF2';

      case 'subTier':
        return '#707C97';

      case 'layer':
        return '#761B70';

      case 'subLayer':
        return '#A4C639';

      case 'deck':
        return '#FF9E00';

      case 'subDeck':
        return '#FF61F6';

      case 'floor':
        return '#60A9F6';

      case 'subFloor':
        return '#8A878D';

      case 'basement':
        return '#001479';

      case 'subBasement':
        return '#000000';

      case 'mine':
        return '#CF78AC';

      case 'subMine':
        return '#FF8B59';
    }
  },
  calculateProfileStepsPercentage: function calculateProfileStepsPercentage(internalPercentage, completedPercentage) {
    return Math.ceil(completedPercentage * 100 / internalPercentage);
  },
  ViewListenNumFormatter: function ViewListenNumFormatter(num) {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 thousands
    } else if (num >= 1000000 && num < 1000000000) {
      return (num / 1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million
    } else if (num >= 1000000000 && num < 1000000000000) {
      return (num / 1000000000).toFixed(1) + 'B'; // convert to B for number from > 1 billion
    } else if (num >= 1000000000000) {
      return (num / 1000000000000).toFixed(1) + 'T'; // convert to T for number from > 1 trillion
    } else if (num <= 999) {
      return num; // if value < 1000, nothing to do
    }
  },
  populateDayListOfDate: function populateDayListOfDate(date) {
    var dayList = [];
    var selectedYear = new Date(date).getFullYear();
    var selectedMonth = new Date(date).getMonth();
    var currentYear = new Date().getFullYear();
    var currentMonth = new Date().getMonth();
    var totalDays = new Date(selectedYear, selectedMonth + 1, 0).getDate();

    if (selectedYear == currentYear && selectedMonth == currentMonth) {
      totalDays = new Date().getDate();
    }

    for (var index = 1; index <= totalDays; index++) {
      dayList[index] = index;
    }

    return dayList;
  }
});

/***/ }),

/***/ "./resources/js/apis/Content.js":
/*!**************************************!*\
  !*** ./resources/js/apis/Content.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

var ajaxRequest = null;
/* harmony default export */ __webpack_exports__["default"] = ({
  audio: function audio(page, audioQueryInput, folderWiseMediaData) {
    if (ajaxRequest) {
      ajaxRequest.cancel();
    }

    ajaxRequest = axios.CancelToken.source();
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/audio?page=" + page + "&query_input=" + audioQueryInput + "&folder_wise_media=" + folderWiseMediaData, {
      cancelToken: ajaxRequest.token
    });
  },
  companyBioAudioList: function companyBioAudioList(page, slug, audioQueryInput) {
    if (ajaxRequest) {
      ajaxRequest.cancel();
    }

    ajaxRequest = axios.CancelToken.source();
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/company-bio-audio?page=" + page + "&slug=" + slug + "&query_input=" + audioQueryInput, {
      cancelToken: ajaxRequest.token
    });
  },
  video: function video(page, videoQueryInput, folderWiseMediaData) {
    // cancel  previous ajax if exists
    if (ajaxRequest) {
      ajaxRequest.cancel();
    }

    ajaxRequest = axios.CancelToken.source();
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/dacast-video?page=" + page + "&query_input=" + videoQueryInput + "&folder_wise_media=" + folderWiseMediaData, {
      cancelToken: ajaxRequest.token
    });
  },
  companyBioVideoList: function companyBioVideoList(page, slug, videoQueryInput) {
    // cancel  previous ajax if exists
    if (ajaxRequest) {
      ajaxRequest.cancel();
    }

    ajaxRequest = axios.CancelToken.source();
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/company-bio-video?page=" + page + "&slug=" + slug + "&query_input=" + videoQueryInput, {
      cancelToken: ajaxRequest.token
    });
  },
  videoDetails: function videoDetails(videoId) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/get-video-info?video_id=" + videoId);
  },
  videoOthers: function videoOthers(videoUuid) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/get-other-video-info?video_uuid=" + videoUuid);
  },
  audioDetails: function audioDetails(audioUuid) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/get-audio-info?uuid=" + audioUuid);
  },
  audioOthers: function audioOthers(audioUuid) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/get-other-audio-info?uuid=" + audioUuid);
  },
  deleteMediaFile: function deleteMediaFile(id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])()["delete"]("/delete-media-file/" + id, {
      params: {
        type: 'media'
      }
    });
  },
  changeMediaFileStatus: function changeMediaFileStatus(form) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/change-media-file-status", form);
  },
  companyBio: function companyBio(slug) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/company-bio?slug=" + slug);
  },
  companyContent: function companyContent(page, slug) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/chat-company-content?page=" + page + "&slug=" + slug);
  },
  updateFilFolder: function updateFilFolder(data) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().put("/update-file-folder", data);
  }
});

/***/ }),

/***/ "./resources/js/apis/Geography.js":
/*!****************************************!*\
  !*** ./resources/js/apis/Geography.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  countries: function countries() {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/country-list");
  },
  states: function states(countryId) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get('/get-state-list/' + countryId);
  },
  getStatesOrProvinceStatus: function getStatesOrProvinceStatus(value) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get('/get-state-or-province-status/' + value);
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

/***/ "./resources/js/apis/Screener.js":
/*!***************************************!*\
  !*** ./resources/js/apis/Screener.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var ajaxRequest = null;
/* harmony default export */ __webpack_exports__["default"] = ({
  newScreenerData: function newScreenerData(params) {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (ajaxRequest) {
                ajaxRequest.cancel();
              }

              ajaxRequest = axios.CancelToken.source();
              return _context.abrupt("return", Object(_Api__WEBPACK_IMPORTED_MODULE_1__["default"])().get("/new-screener-data", {
                params: params,
                cancelToken: ajaxRequest.token
              }));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./resources/js/apis/SearchHistory.js":
/*!********************************************!*\
  !*** ./resources/js/apis/SearchHistory.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

var ajaxRequest = null;
/* harmony default export */ __webpack_exports__["default"] = ({
  saveSearchHistory: function saveSearchHistory(data) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post('/save-search-history', data);
  },
  getSearchHistories: function getSearchHistories() {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get('/search-histories');
  },
  deleteSearchHistory: function deleteSearchHistory(id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])()["delete"]('/delete-search-history/' + id);
  }
});

/***/ }),

/***/ "./resources/js/assets/calendar.png":
/*!******************************************!*\
  !*** ./resources/js/assets/calendar.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/calendar.png?66b778fcec68ef6a8951809affd33dbd";

/***/ }),

/***/ "./resources/js/views/NewScreener.vue":
/*!********************************************!*\
  !*** ./resources/js/views/NewScreener.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewScreener_vue_vue_type_template_id_0da149ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewScreener.vue?vue&type=template&id=0da149ec&scoped=true& */ "./resources/js/views/NewScreener.vue?vue&type=template&id=0da149ec&scoped=true&");
/* harmony import */ var _NewScreener_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewScreener.vue?vue&type=script&lang=js& */ "./resources/js/views/NewScreener.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _NewScreener_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewScreener.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/NewScreener.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _NewScreener_vue_vue_type_style_index_1_id_0da149ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewScreener.vue?vue&type=style&index=1&id=0da149ec&scoped=true&lang=css& */ "./resources/js/views/NewScreener.vue?vue&type=style&index=1&id=0da149ec&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _NewScreener_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewScreener_vue_vue_type_template_id_0da149ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewScreener_vue_vue_type_template_id_0da149ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0da149ec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/NewScreener.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/NewScreener.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/NewScreener.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewScreener_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./NewScreener.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewScreener.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewScreener_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/NewScreener.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/NewScreener.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewScreener_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./NewScreener.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewScreener.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewScreener_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewScreener_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewScreener_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_NewScreener_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/NewScreener.vue?vue&type=style&index=1&id=0da149ec&scoped=true&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/NewScreener.vue?vue&type=style&index=1&id=0da149ec&scoped=true&lang=css& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewScreener_vue_vue_type_style_index_1_id_0da149ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./NewScreener.vue?vue&type=style&index=1&id=0da149ec&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewScreener.vue?vue&type=style&index=1&id=0da149ec&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewScreener_vue_vue_type_style_index_1_id_0da149ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewScreener_vue_vue_type_style_index_1_id_0da149ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewScreener_vue_vue_type_style_index_1_id_0da149ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewScreener_vue_vue_type_style_index_1_id_0da149ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/NewScreener.vue?vue&type=template&id=0da149ec&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/NewScreener.vue?vue&type=template&id=0da149ec&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewScreener_vue_vue_type_template_id_0da149ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./NewScreener.vue?vue&type=template&id=0da149ec&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/NewScreener.vue?vue&type=template&id=0da149ec&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewScreener_vue_vue_type_template_id_0da149ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NewScreener_vue_vue_type_template_id_0da149ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);