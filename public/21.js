(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanyTaxonomy.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/EditCompanyTaxonomy.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navigation */ "./resources/js/components/Navigation.vue");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Sidebar */ "./resources/js/components/Sidebar.vue");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apis_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../apis/User */ "./resources/js/apis/User.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _apis_Common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../apis/Common */ "./resources/js/apis/Common.js");
/* harmony import */ var _CompanyNodeCollapses__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../CompanyNodeCollapses */ "./resources/js/components/CompanyNodeCollapses.vue");
/* harmony import */ var _ProfileCompleteBanner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ProfileCompleteBanner */ "./resources/js/components/ProfileCompleteBanner.vue");


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
      actionType: ''
    };
  },
  props: [],
  validations: {
    form: {
      industry: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6__["required"]
      },
      sector: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6__["required"]
      },
      subSector: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6__["required"]
      },
      group: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6__["required"]
      },
      subGroup: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6__["required"]
      }
    },
    suggestion_explanation: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6__["required"]
    },
    suggestion_reason: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6__["required"]
    }
  },
  watch: {
    form: {
      handler: function handler() {
        this.$emit('nodeData', [this.form.industry, this.form.sector, this.form.subSector, this.form.group, this.form.subGroup, this.form.echelon, this.form.subEchelon, this.form.tier, this.form.subTier, this.form.layer, this.form.subLayer, this.form.deck, this.form.subDeck, this.form.floor, this.form.subFloor, this.form.basement, this.form.subBasement, this.form.mine, this.form.subMine]);
      },
      deep: true
    }
  },
  methods: {
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

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(value != null || value != undefined)) {
                  _context2.next = 6;
                  break;
                }

                this.categorizationLevel = 'Industry';
                this.categorizationNodeId = value.id;
                this.isLoading = true;
                _context2.next = 6;
                return axios.get('/api/get-node-list/' + value.id + '/Sector/Industry').then(function (response) {
                  _this2.sectors = response.data.data;

                  _this2.clearNodeValue('sectors', changeEvent);

                  _this2.isLoading = false;
                  _this2.sectors.length === 0 ? _this2.showSectorField = false : _this2.showSectorField = true;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 6:
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

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(value != null || value != undefined)) {
                  _context3.next = 6;
                  break;
                }

                this.categorizationLevel = 'Sector';
                this.categorizationNodeId = value.id;
                this.isLoading = true;
                _context3.next = 6;
                return axios.get('/api/get-node-list/' + value.id + '/SubSector/Sector').then(function (response) {
                  _this3.subSectors = response.data.data;

                  _this3.clearNodeValue('subSectors', changeEvent);

                  _this3.subSectors.length === 0 ? _this3.setConditionalValidationVariables('subSector', true) : _this3.setConditionalValidationVariables('subSector', false);
                  _this3.isLoading = false;
                  _this3.subSectors.length === 0 ? _this3.showSubSectorField = false : _this3.showSubSectorField = true;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 6:
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

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(value != null || value != undefined)) {
                  _context4.next = 6;
                  break;
                }

                this.categorizationLevel = 'SubSector';
                this.categorizationNodeId = value.id;
                this.isLoading = true;
                _context4.next = 6;
                return axios.get('/api/get-node-list/' + value.id + '/Group/SubSector').then(function (response) {
                  _this4.groups = response.data.data;

                  _this4.clearNodeValue('groups', changeEvent);

                  _this4.groups.length === 0 ? _this4.setConditionalValidationVariables('group', true) : _this4.setConditionalValidationVariables('group', false);
                  _this4.isLoading = false;
                  _this4.groups.length === 0 ? _this4.showGroupField = false : _this4.showGroupField = true;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 6:
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

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(value != null || value != undefined)) {
                  _context5.next = 6;
                  break;
                }

                this.categorizationLevel = 'Group';
                this.categorizationNodeId = value.id;
                this.isLoading = true;
                _context5.next = 6;
                return axios.get('/api/get-node-list/' + value.id + '/SubGroup/Group').then(function (response) {
                  _this5.subGroups = response.data.data;

                  _this5.clearNodeValue('subGroups', changeEvent);

                  _this5.subGroups.length === 0 ? _this5.setConditionalValidationVariables('subGroup', true) : _this5.setConditionalValidationVariables('subGroup', false);
                  _this5.isLoading = false;
                  _this5.subGroups.length === 0 ? _this5.showSubGroupField = false : _this5.showSubGroupField = true;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 6:
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

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(value != null || value != undefined)) {
                  _context6.next = 6;
                  break;
                }

                this.categorizationLevel = 'SubGroup';
                this.categorizationNodeId = value.id;
                this.isLoading = true;
                _context6.next = 6;
                return axios.get('/api/get-node-list/' + value.id + '/Echelon/SubGroup').then(function (response) {
                  _this6.echelons = response.data.data;

                  _this6.clearNodeValue('echelons', changeEvent);

                  _this6.echelons.length === 0 ? _this6.setConditionalValidationVariables('echelon', true) : _this6.setConditionalValidationVariables('echelon', false);
                  _this6.isLoading = false;
                  _this6.echelons.length === 0 ? _this6.showEchelonField = false : _this6.showEchelonField = true;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 6:
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

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!(value != null || value != undefined)) {
                  _context7.next = 6;
                  break;
                }

                this.categorizationLevel = 'Echelon';
                this.categorizationNodeId = value.id;
                this.isLoading = true;
                _context7.next = 6;
                return axios.get('/api/get-node-list/' + value.id + '/SubEchelon/Echelon').then(function (response) {
                  _this7.subEchelons = response.data.data;

                  _this7.clearNodeValue('subEchelons', changeEvent);

                  _this7.subEchelons.length === 0 ? _this7.setConditionalValidationVariables('subEchelon', true) : _this7.setConditionalValidationVariables('subEchelon', false);
                  _this7.isLoading = false;
                  _this7.subEchelons.length === 0 ? _this7.showSubEchelonField = false : _this7.showSubEchelonField = true;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 6:
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

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (!(value != null || value != undefined)) {
                  _context8.next = 6;
                  break;
                }

                this.categorizationLevel = 'SubEchelon';
                this.categorizationNodeId = value.id;
                this.isLoading = true;
                _context8.next = 6;
                return axios.get('/api/get-node-list/' + value.id + '/Tier/SubEchelon').then(function (response) {
                  _this8.tiers = response.data.data;

                  _this8.clearNodeValue('tiers', changeEvent);

                  _this8.isLoading = false;
                  _this8.tiers.length === 0 ? _this8.showTierField = false : _this8.showTierField = true;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 6:
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

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!(value != null || value != undefined)) {
                  _context9.next = 6;
                  break;
                }

                this.categorizationLevel = 'Tier';
                this.categorizationNodeId = value.id;
                this.isLoading = true;
                _context9.next = 6;
                return axios.get('/api/get-node-list/' + value.id + '/SubTier/Tier').then(function (response) {
                  _this9.subTiers = response.data.data;

                  _this9.clearNodeValue('subTiers', changeEvent);

                  _this9.isLoading = false;
                  _this9.subTiers.length === 0 ? _this9.showSubTierField = false : _this9.showSubTierField = true;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 6:
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

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (!(value != null || value != undefined)) {
                  _context10.next = 6;
                  break;
                }

                this.categorizationLevel = 'SubTier';
                this.categorizationNodeId = value.id;
                this.isLoading = true;
                _context10.next = 6;
                return axios.get('/api/get-node-list/' + value.id + '/Layer/SubTier').then(function (response) {
                  _this10.layers = response.data.data;

                  _this10.clearNodeValue('layers', changeEvent);

                  _this10.isLoading = false;
                  _this10.layers.length === 0 ? _this10.showLayerField = false : _this10.showLayerField = true;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 6:
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

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                if (value != null || value != undefined) {
                  this.categorizationLevel = 'Layer';
                  this.categorizationNodeId = value.id;
                  this.isLoading = true;
                  axios.get('/api/get-node-list/' + value.id + '/SubLayer/Layer').then(function (response) {
                    _this11.subLayers = response.data.data;

                    _this11.clearNodeValue('subLayers', changeEvent);

                    _this11.isLoading = false;
                    _this11.subLayers.length === 0 ? _this11.showSubLayerField = false : _this11.showSubLayerField = true;
                  })["catch"](function (error) {
                    return console.log(error);
                  });
                }

              case 1:
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

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (!(value != null || value != undefined)) {
                  _context12.next = 6;
                  break;
                }

                this.categorizationLevel = 'SubLayer';
                this.categorizationNodeId = value.id;
                this.isLoading = true;
                _context12.next = 6;
                return axios.get('/api/get-node-list/' + value.id + '/Deck/SubLayer').then(function (response) {
                  _this12.decks = response.data.data;

                  _this12.clearNodeValue('decks', changeEvent);

                  _this12.isLoading = false;
                  _this12.decks.length === 0 ? _this12.showDeckField = false : _this12.showDeckField = true;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 6:
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

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                if (!(value != null || value != undefined)) {
                  _context13.next = 6;
                  break;
                }

                this.categorizationLevel = 'Deck';
                this.categorizationNodeId = value.id;
                this.isLoading = true;
                _context13.next = 6;
                return axios.get('/api/get-node-list/' + value.id + '/SubDeck/Deck').then(function (response) {
                  _this13.subDecks = response.data.data;

                  _this13.clearNodeValue('subDecks', changeEvent);

                  _this13.isLoading = false;
                  _this13.subDecks.length === 0 ? _this13.showSubDeckField = false : _this13.showSubDeckField = true;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 6:
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

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                if (!(value != null || value != undefined)) {
                  _context14.next = 6;
                  break;
                }

                this.categorizationLevel = 'SubDeck';
                this.categorizationNodeId = value.id;
                this.isLoading = true;
                _context14.next = 6;
                return axios.get('/api/get-node-list/' + value.id + '/Floor/SubDeck').then(function (response) {
                  _this14.floors = response.data.data;

                  _this14.clearNodeValue('floors', changeEvent);

                  _this14.isLoading = false;
                  _this14.floors.length === 0 ? _this14.showFloorField = false : _this14.showFloorField = true;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 6:
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

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                if (!(value != null || value != undefined)) {
                  _context15.next = 6;
                  break;
                }

                this.categorizationLevel = 'Floor';
                this.categorizationNodeId = value.id;
                this.isLoading = true;
                _context15.next = 6;
                return axios.get('/api/get-node-list/' + value.id + '/SubFloor/Floor').then(function (response) {
                  _this15.subFloors = response.data.data;

                  _this15.clearNodeValue('subFloors', changeEvent);

                  _this15.isLoading = false;
                  _this15.subFloors.length === 0 ? _this15.showSubFloorField = false : _this15.showSubFloorField = true;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 6:
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

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                if (!(value != null || value != undefined)) {
                  _context16.next = 6;
                  break;
                }

                this.categorizationLevel = 'SubFloor';
                this.categorizationNodeId = value.id;
                this.isLoading = true;
                _context16.next = 6;
                return axios.get('/api/get-node-list/' + value.id + '/Basement/SubFloor').then(function (response) {
                  _this16.basements = response.data.data;

                  _this16.clearNodeValue('basements', changeEvent);

                  _this16.isLoading = false;
                  _this16.basements.length === 0 ? _this16.showBasementField = false : _this16.showBasementField = true;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 6:
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

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                if (!(value != null || value != undefined)) {
                  _context17.next = 6;
                  break;
                }

                this.categorizationLevel = 'Basement';
                this.categorizationNodeId = value.id;
                this.isLoading = true;
                _context17.next = 6;
                return axios.get('/api/get-node-list/' + value.id + '/SubBasement/Basement').then(function (response) {
                  _this17.subBasements = response.data.data;

                  _this17.clearNodeValue('subBasements', changeEvent);

                  _this17.isLoading = false;
                  _this17.subBasements.length === 0 ? _this17.showSubBasementField = false : _this17.showSubBasementField = true;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 6:
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

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                if (!(value != null || value != undefined)) {
                  _context18.next = 6;
                  break;
                }

                this.categorizationLevel = 'SubBasement';
                this.categorizationNodeId = value.id;
                this.isLoading = true;
                _context18.next = 6;
                return axios.get('/api/get-node-list/' + value.id + '/Mine/SubBasement').then(function (response) {
                  _this18.mines = response.data.data;

                  _this18.clearNodeValue('mines', changeEvent);

                  _this18.isLoading = false;
                  _this18.mines.length === 0 ? _this18.showMineField = false : _this18.showMineField = true;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 6:
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

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                if (!(value != null || value != undefined)) {
                  _context19.next = 6;
                  break;
                }

                this.categorizationLevel = 'Mine';
                this.categorizationNodeId = value.id;
                this.isLoading = true;
                _context19.next = 6;
                return axios.get('/api/get-node-list/' + value.id + '/SubMine/Mine').then(function (response) {
                  _this19.subMines = response.data.data;

                  _this19.clearNodeValue('subMines', changeEvent);

                  _this19.isLoading = false;
                  _this19.subMines.length === 0 ? _this19.showSubMineField = false : _this19.showSubMineField = true;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 6:
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
    subMinesChange: function subMinesChange(value) {
      this.categorizationLevel = 'SubMine';
      this.categorizationNodeId = value.id;
      this.clearNodeValue('other');
      this.showSubMineAddSuggestionField = true;
    },
    clearNodeValue: function clearNodeValue(expression, changeEvent) {
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
      var _this20 = this;

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
      } // this.isDisabled = true;


      this.suggestionFormData.suggestion_explanation = this.suggestion_explanation;
      this.suggestionFormData.suggestion_reason = this.suggestion_reason;
      this.suggestionFormData.node_type = this.node_type;
      this.suggestionFormData.node_id = this.node_id;
      this.suggestionFormData.parent_id = this.parent_id;
      this.suggestionFormData.industry_id = this.form.industry.id;
      this.suggestionFormData.suggestion_type = suggestionType;
      this.suggestionFormData.hierarchy_type = "Company";
      _apis_User__WEBPACK_IMPORTED_MODULE_5__["default"].nodeSuggestion(this.suggestionFormData).then(function (response) {
        if (response.data.success) {
          _this20.$bvModal.hide('modal-' + suggestionType + '-node'); //toastr.success(response.data.success.message)


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
          _this20.suggestion_explanation = '';
          _this20.suggestion_reason = '';

          _this20.$v.$reset();
        }
      })["catch"](function (error) {
        if (error.response.status === 422) {
          toastr.error(error.response.data.error.message);
        } else if (error.response.status == 401) {
          _this20.$emit('logout');
        } else {
          toastr.error(error);
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
    saveHierarchyInfo: function () {
      var _saveHierarchyInfo = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee20(callFrom) {
        var _this21 = this;

        var nodeformData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
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

                if (!(this.$v.form.industry.$invalid || this.$v.form.sector.$invalid || this.$v.form.subSector.$invalid && this.noSubSectorData == false || this.$v.form.group.$invalid && this.noGroupData == false || this.$v.form.subGroup.$invalid && this.noSubGroupData == false)) {
                  _context20.next = 8;
                  break;
                }

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

                return _context20.abrupt("return", false);

              case 8:
                this.isDisabled = true;
                nodeformData = new FormData();
                nodeformData.append('node_type', this.categorizationLevel);
                nodeformData.append('node_id', this.categorizationNodeId);
                nodeformData.append('industry_id', this.form.industry.id);
                nodeformData.append('user_info', localStorage.getItem("userInfo"));

                if (callFrom == 'add') {
                  _apis_User__WEBPACK_IMPORTED_MODULE_5__["default"].addMultipleNodes(nodeformData).then(function (response) {
                    if (response.data.success) {
                      toastr.success(response.data.success.message);

                      _this21.$router.push({
                        name: "CompanyQuestionnairesDetails",
                        'hash': '#taxonomy'
                      });
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
                  })["catch"](function (error) {
                    if (error.response.status === 422) {
                      toastr.error(error.response.data.error.message);
                    } else if (error.response.status == 401) {
                      _this21.$emit('logout');
                    } else {
                      toastr.error(error);
                    }
                  });
                } else {
                  nodeformData.append('updated_id', this.$route.params.id);
                  _apis_User__WEBPACK_IMPORTED_MODULE_5__["default"].updateHierarchyNodes(nodeformData).then(function (response) {
                    if (response.data.success) {
                      toastr.success(response.data.success.message);

                      _this21.$router.push({
                        name: "CompanyQuestionnairesDetails",
                        'hash': '#taxonomy'
                      });
                    }
                  })["catch"](function (error) {
                    if (error.response.status === 422) {
                      // toastr.error(error.response.data.error.message)
                      $.confirm({
                        title: '',
                        content: error.response.data.error.message,
                        columnClass: 'medium',
                        type: 'blue',
                        typeAnimated: true,
                        buttons: {
                          Ok: function Ok() {}
                        }
                      });
                    } else if (error.response.status == 401) {
                      _this21.$emit('logout');
                    } else {
                      toastr.error(error);
                    }
                  });
                }

              case 15:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function saveHierarchyInfo(_x37) {
        return _saveHierarchyInfo.apply(this, arguments);
      }

      return saveHierarchyInfo;
    }(),
    getHierarchyInfo: function getHierarchyInfo(id, industry_id) {
      var _this22 = this;

      axios.get('/api/get-multiple-node?categorization_id=' + id + '&industry_id=' + industry_id + '&user_info=' + localStorage.getItem("userInfo")).then(function (response) {
        _this22.mutipleNodes = response.data.data;

        if (_this22.mutipleNodes.length > 0) {
          _this22.haveAddedNode = true;
        } //console.log(this.mutipleNodes);


        _this22.form.industry = _this22.mutipleNodes.industry;

        _this22.getSectors(_this22.mutipleNodes.industry, 'Load');

        _this22.form.sector = _this22.mutipleNodes.sector;

        _this22.getSubSectors(_this22.mutipleNodes.sector, 'Load');

        _this22.form.subSector = _this22.mutipleNodes.sub_sector;

        _this22.getGroups(_this22.mutipleNodes.sub_sector, 'Load');

        _this22.form.group = _this22.mutipleNodes.group;

        _this22.getSubGroups(_this22.mutipleNodes.group, 'Load');

        _this22.form.subGroup = _this22.mutipleNodes.sub_group;

        _this22.getEchelons(_this22.mutipleNodes.sub_group, 'Load');

        _this22.form.echelon = _this22.mutipleNodes.echelon;

        _this22.getSubEchelons(_this22.mutipleNodes.echelon, 'Load');

        _this22.form.subEchelon = _this22.mutipleNodes.sub_echelon;

        _this22.getTiers(_this22.mutipleNodes.sub_echelon, 'Load');

        _this22.form.tier = _this22.mutipleNodes.tier;

        _this22.getSubTiers(_this22.mutipleNodes.tier, 'Load');

        _this22.form.subTier = _this22.mutipleNodes.sub_tier;

        _this22.getLayers(_this22.mutipleNodes.sub_tier, 'Load');

        _this22.form.layer = _this22.mutipleNodes.layer;

        _this22.getSubLayers(_this22.mutipleNodes.layer, 'Load');

        _this22.form.subLayer = _this22.mutipleNodes.sub_layer;

        _this22.getDecks(_this22.mutipleNodes.sub_layer, 'Load');

        _this22.form.deck = _this22.mutipleNodes.deck;

        _this22.getSubDecks(_this22.mutipleNodes.deck, 'Load');

        _this22.form.subDeck = _this22.mutipleNodes.sub_deck;

        _this22.getFloors(_this22.mutipleNodes.sub_deck, 'Load');

        _this22.form.floor = _this22.mutipleNodes.floor;

        _this22.getSubFloors(_this22.mutipleNodes.floor, 'Load');

        _this22.form.subFloor = _this22.mutipleNodes.sub_floor;

        _this22.getBasements(_this22.mutipleNodes.sub_floor, 'Load');

        _this22.form.basement = _this22.mutipleNodes.basement;

        _this22.getSubBasements(_this22.mutipleNodes.basement, 'Load');

        _this22.form.subBasement = _this22.mutipleNodes.sub_basement;

        _this22.getMines(_this22.mutipleNodes.sub_basement, 'Load');

        _this22.form.mine = _this22.mutipleNodes.mine;

        _this22.getSubMines(_this22.mutipleNodes.mine, 'Load');

        _this22.form.subMine = _this22.mutipleNodes.sub_mine;
        /*if (response.data.success) {
            toastr.success(response.data.success.message)
        }*/
      })["catch"](function (error) {
        if (error.response.status === 422) {
          toastr.error(error.response.data.error.message);
        } else if (error.response.status == 401) {
          _this22.$emit('logout');
        } else {
          toastr.error(error);
        }
      });
    },
    checkSaveHierarchyInfo: function checkSaveHierarchyInfo() {
      return this.haveAddedNode;
    },
    goBackToPageTopAndNextFieldToEnter: function goBackToPageTopAndNextFieldToEnter() {
      $(document).ready(function () {
        $(this).scrollTop(0);
        $('input, select, textarea').on('keydown', function (e) {
          if (e.keyCode == 13) {
            var focusable = $('input, select, textarea').filter(':visible');
            focusable.eq(focusable.index(this) + 1).focus();
            return false;
          }
        });
      });
    }
  },
  created: function created() {
    this.nodeColor = _apis_Common__WEBPACK_IMPORTED_MODULE_7__["default"].hierarchyNodeColor;
    this.isLoading = true;
    this.goBackToPageTopAndNextFieldToEnter();
    this.getIndustries(); //this.responseParents();

    if (this.$route.params.id == undefined) {
      this.actionType = 'add';
    } else {
      this.getHierarchyInfo(this.$route.params.id, '');
      this.actionType = 'update';
    }
  },
  components: {
    CompanyNodeCollapses: _CompanyNodeCollapses__WEBPACK_IMPORTED_MODULE_8__["default"],
    Navigation: _Navigation__WEBPACK_IMPORTED_MODULE_1__["default"],
    sidebar: _Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"],
    loader: _Loader__WEBPACK_IMPORTED_MODULE_2__["default"],
    ProfileCompleteBanner: _ProfileCompleteBanner__WEBPACK_IMPORTED_MODULE_9__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_4___default.a
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanyTaxonomy.vue?vue&type=template&id=1170ea52&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/EditCompanyTaxonomy.vue?vue&type=template&id=1170ea52& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    "section",
    { staticClass: "home" },
    [
      _c("Navigation"),
      _vm._v(" "),
      _c("ProfileCompleteBanner"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container-fluid px-0 for-profile-banner-padding" },
        [
          _c(
            "div",
            {
              staticClass:
                "row collapse show no-gutters d-flex h-100 position-relative"
            },
            [
              _c("sidebar"),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-10 pl-5 pt-3 pr-3" }, [
                _vm.actionType == "add"
                  ? _c("h2", { staticClass: "text-center" }, [
                      _vm._v("Add Company Classification")
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.actionType == "update"
                  ? _c("h2", { staticClass: "text-center" }, [
                      _vm._v("Edit Company Classification")
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row" },
                  [
                    _c("div", { staticClass: "col-md-11" }, [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "div",
                          { staticClass: "col-md-5 text-center mt-4" },
                          [
                            _c(
                              "div",
                              { staticClass: "exclamition-position-alter" },
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "h3",
                                    attrs: { to: {}, id: "tooltip-target-10" }
                                  },
                                  [
                                    _c("i", {
                                      staticClass:
                                        "fas fa-question-circle text-dark"
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-tooltip",
                                  {
                                    attrs: {
                                      target: "tooltip-target-10",
                                      triggers: "hover"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "These are your company’s\n                                        currently selected\n                                        Industry classification, you can view your selections in the tree to the\n                                        left and edit your\n                                        selections through the dropdowns on the right.Anyone searching for these\n                                        industry categories\n                                        will find your company and your content underneath them.\n                                    "
                                    )
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "mt-2" }, [
                              _vm.form.industry != ""
                                ? _c("span", [
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "d-block px-1 py-3 text-white",
                                        style: {
                                          backgroundColor: this.nodeColor(
                                            "industry"
                                          )
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.form.industry.description
                                          ) + "\n                        "
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
                                        staticClass:
                                          "d-block px-1 py-3 p-2 text-white",
                                        style: {
                                          backgroundColor: this.nodeColor(
                                            "industry"
                                          )
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "Industry Classification (Please Select One)\n                        "
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.form.sector != "" &&
                              _vm.form.sector != undefined
                                ? _c("span", [
                                    _vm._m(1),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "d-block px-auto py-3 text-white",
                                        style: {
                                          backgroundColor: this.nodeColor(
                                            "sector"
                                          )
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.form.sector.description)
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.form.subSector != "" &&
                              _vm.form.subSector != undefined
                                ? _c("span", [
                                    _vm._m(2),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "d-block px-auto py-3 text-white",
                                        style: {
                                          backgroundColor: this.nodeColor(
                                            "subSector"
                                          )
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.form.subSector.description)
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.form.group != "" &&
                              _vm.form.group != undefined
                                ? _c("span", [
                                    _vm._m(3),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "d-block px-auto py-3 text-white",
                                        style: {
                                          backgroundColor: this.nodeColor(
                                            "group"
                                          )
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.form.group.description)
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.form.subGroup != "" &&
                              _vm.form.subGroup != undefined
                                ? _c("span", [
                                    _vm._m(4),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "d-block px-auto py-3 text-white",
                                        style: {
                                          backgroundColor: this.nodeColor(
                                            "subGroup"
                                          )
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.form.subGroup.description)
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.form.echelon != "" &&
                              _vm.form.echelon != undefined
                                ? _c("span", [
                                    _vm._m(5),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "d-block px-auto py-3 text-white",
                                        style: {
                                          backgroundColor: this.nodeColor(
                                            "echelon"
                                          )
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.form.echelon.description)
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.form.subEchelon != "" &&
                              _vm.form.subEchelon != undefined
                                ? _c("span", [
                                    _vm._m(6),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "d-block px-auto py-3 text-white",
                                        style: {
                                          backgroundColor: this.nodeColor(
                                            "subEchelon"
                                          )
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.form.subEchelon.description
                                          )
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.form.tier != "" && _vm.form.tier != undefined
                                ? _c("span", [
                                    _vm._m(7),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "d-block px-auto py-3 text-white",
                                        style: {
                                          backgroundColor: this.nodeColor(
                                            "tier"
                                          )
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.form.tier.description)
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.form.subTier != "" &&
                              _vm.form.subTier != undefined
                                ? _c("span", [
                                    _vm._m(8),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "d-block px-auto py-3 text-white",
                                        style: {
                                          backgroundColor: this.nodeColor(
                                            "subTier"
                                          )
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.form.subTier.description)
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.form.layer != "" &&
                              _vm.form.layer != undefined
                                ? _c("span", [
                                    _vm._m(9),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "d-block px-auto py-3 text-white",
                                        style: {
                                          backgroundColor: this.nodeColor(
                                            "layer"
                                          )
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.form.layer.description)
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.form.subLayer != "" &&
                              _vm.form.subLayer != undefined
                                ? _c("span", [
                                    _vm._m(10),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "d-block px-auto py-3 text-white",
                                        style: {
                                          backgroundColor: this.nodeColor(
                                            "subLayer"
                                          )
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.form.subLayer.description)
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.form.deck != "" && _vm.form.deck != undefined
                                ? _c("span", [
                                    _vm._m(11),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "d-block px-auto py-3 text-white",
                                        style: {
                                          backgroundColor: this.nodeColor(
                                            "deck"
                                          )
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.form.deck.description)
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.form.subDeck != "" &&
                              _vm.form.subDeck != undefined
                                ? _c("span", [
                                    _vm._m(12),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "d-block px-auto py-3 text-white",
                                        style: {
                                          backgroundColor: this.nodeColor(
                                            "subDeck"
                                          )
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.form.subDeck.description)
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.form.floor != "" &&
                              _vm.form.floor != undefined
                                ? _c("span", [
                                    _vm._m(13),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "d-block px-auto py-3 text-white",
                                        style: {
                                          backgroundColor: this.nodeColor(
                                            "floor"
                                          )
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.form.floor.description)
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.form.subFloor != "" &&
                              _vm.form.subFloor != undefined
                                ? _c("span", [
                                    _vm._m(14),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "d-block px-auto py-3 text-white",
                                        style: {
                                          backgroundColor: this.nodeColor(
                                            "subFloor"
                                          )
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.form.subFloor.description)
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.form.basement != "" &&
                              _vm.form.basement != undefined
                                ? _c("span", [
                                    _vm._m(15),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "d-block px-auto py-3 text-white",
                                        style: {
                                          backgroundColor: this.nodeColor(
                                            "basement"
                                          )
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.form.basement.description)
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.form.subBasement != "" &&
                              _vm.form.subBasement != undefined
                                ? _c("span", [
                                    _vm._m(16),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "d-block px-auto py-3 text-white",
                                        style: {
                                          backgroundColor: this.nodeColor(
                                            "subBasement"
                                          )
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.form.subBasement.description
                                          )
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.form.mine != "" && _vm.form.mine != undefined
                                ? _c("span", [
                                    _vm._m(17),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "d-block px-auto py-3 text-white",
                                        style: {
                                          backgroundColor: this.nodeColor(
                                            "mine"
                                          )
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.form.mine.description)
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.form.subMine != "" &&
                              _vm.form.subMine != undefined
                                ? _c("span", [
                                    _vm._m(18),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "d-block px-auto py-3 text-white",
                                        style: {
                                          backgroundColor: this.nodeColor(
                                            "subMine"
                                          )
                                        }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.form.subMine.description)
                                        )
                                      ]
                                    )
                                  ])
                                : _vm._e()
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-7" }, [
                          _c(
                            "div",
                            {
                              staticClass: "panel-body categorization-selection"
                            },
                            [
                              _c(
                                "div",
                                { staticClass: " form-group mb-4" },
                                [
                                  _vm._m(19),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    ref: "industry",
                                    class: {
                                      "is-invalid": _vm.$v.form.industry.$error
                                    },
                                    attrs: {
                                      label: "description",
                                      options: _vm.industries,
                                      clearable: false,
                                      placeholder: "Select from Drop Down"
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.getSectors(
                                          _vm.form.industry,
                                          "Input"
                                        )
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
                                          rawName:
                                            "v-b-modal.modal-add-suggestion",
                                          modifiers: {
                                            "modal-add-suggestion": true
                                          }
                                        }
                                      ],
                                      staticClass:
                                        "float-right mt-1 add-multiple",
                                      class: {
                                        disabled: _vm.form.industry == ""
                                      },
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
                                    [
                                      _vm._v(
                                        "\n                                             + Add Suggestion\n                                         "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  !_vm.$v.form.industry.required
                                    ? _c(
                                        "div",
                                        { staticClass: "invalid-feedback" },
                                        [
                                          _vm._v(
                                            "Industry is\n                                            required.\n                                        "
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _vm.showSectorField
                                ? _c(
                                    "div",
                                    { staticClass: " form-group mb-4" },
                                    [
                                      _vm._m(20),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        ref: "sector",
                                        class: {
                                          "is-invalid":
                                            _vm.$v.form.sector.$error
                                        },
                                        attrs: {
                                          label: "description",
                                          options: _vm.sectors,
                                          clearable: false,
                                          placeholder: "Select from Drop Down"
                                        },
                                        on: {
                                          input: function($event) {
                                            return _vm.getSubSectors(
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
                                      _c(
                                        "div",
                                        {
                                          directives: [
                                            {
                                              name: "b-modal",
                                              rawName:
                                                "v-b-modal.modal-add-suggestion",
                                              modifiers: {
                                                "modal-add-suggestion": true
                                              }
                                            }
                                          ],
                                          staticClass:
                                            "float-right mt-1 add-multiple",
                                          class: {
                                            disabled: _vm.form.sector == ""
                                          },
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
                                            "\n                                            + Add Suggestion\n                                        "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      !_vm.$v.form.sector.required
                                        ? _c(
                                            "div",
                                            { staticClass: "invalid-feedback" },
                                            [
                                              _vm._v(
                                                "Sector is\n                                            required.\n                                        "
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.showSubSectorField
                                ? _c(
                                    "div",
                                    { staticClass: " form-group mb-4" },
                                    [
                                      _vm._m(21),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        ref: "subSector",
                                        class: {
                                          "is-invalid":
                                            _vm.$v.form.subSector.$error
                                        },
                                        attrs: {
                                          label: "description",
                                          options: _vm.subSectors,
                                          clearable: false,
                                          placeholder: "Select from Drop Down"
                                        },
                                        on: {
                                          input: function($event) {
                                            return _vm.getGroups(
                                              _vm.form.subSector,
                                              "Input"
                                            )
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
                                              rawName:
                                                "v-b-modal.modal-add-suggestion",
                                              modifiers: {
                                                "modal-add-suggestion": true
                                              }
                                            }
                                          ],
                                          staticClass:
                                            "float-right mt-1 add-multiple",
                                          class: {
                                            disabled: _vm.form.subSector == ""
                                          },
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
                                            "\n                                            + Add Suggestion\n                                        "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      !_vm.$v.form.subSector.required
                                        ? _c(
                                            "div",
                                            { staticClass: "invalid-feedback" },
                                            [
                                              _vm._v(
                                                "Sub sector\n                                            is required.\n                                        "
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.showGroupField
                                ? _c(
                                    "div",
                                    { staticClass: " form-group mb-4" },
                                    [
                                      _vm._m(22),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        ref: "group",
                                        class: {
                                          "is-invalid": _vm.$v.form.group.$error
                                        },
                                        attrs: {
                                          label: "description",
                                          options: _vm.groups,
                                          clearable: false,
                                          placeholder: "Select from Drop Down"
                                        },
                                        on: {
                                          input: function($event) {
                                            return _vm.getSubGroups(
                                              _vm.form.group,
                                              "Input"
                                            )
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
                                              rawName:
                                                "v-b-modal.modal-add-suggestion",
                                              modifiers: {
                                                "modal-add-suggestion": true
                                              }
                                            }
                                          ],
                                          staticClass:
                                            "float-right mt-1 add-multiple",
                                          class: {
                                            disabled: _vm.form.group == ""
                                          },
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
                                            "\n                                            + Add Suggestion\n                                        "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      !_vm.$v.form.group.required
                                        ? _c(
                                            "div",
                                            { staticClass: "invalid-feedback" },
                                            [
                                              _vm._v(
                                                "Group is\n                                            required.\n                                        "
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.showSubGroupField
                                ? _c(
                                    "div",
                                    { staticClass: " form-group mb-4" },
                                    [
                                      _vm._m(23),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        ref: "subGroup",
                                        class: {
                                          "is-invalid":
                                            _vm.$v.form.subGroup.$error
                                        },
                                        attrs: {
                                          label: "description",
                                          options: _vm.subGroups,
                                          clearable: false,
                                          placeholder: "Select from Drop Down"
                                        },
                                        on: {
                                          input: function($event) {
                                            return _vm.getEchelons(
                                              _vm.form.subGroup,
                                              "Input"
                                            )
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
                                              rawName:
                                                "v-b-modal.modal-add-suggestion",
                                              modifiers: {
                                                "modal-add-suggestion": true
                                              }
                                            }
                                          ],
                                          staticClass:
                                            "float-right mt-1 add-multiple",
                                          class: {
                                            disabled: _vm.form.subGroup == ""
                                          },
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
                                            "\n                                            + Add Suggestion\n                                        "
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      !_vm.$v.form.subGroup.required
                                        ? _c(
                                            "div",
                                            { staticClass: "invalid-feedback" },
                                            [
                                              _vm._v(
                                                "Sub Group is\n                                            required.\n                                        "
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.showEchelonField
                                ? _c(
                                    "div",
                                    { staticClass: " form-group mb-4" },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "control-label font-weight-bold"
                                        },
                                        [_vm._v("Echelon")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        ref: "echelon",
                                        attrs: {
                                          label: "description",
                                          options: _vm.echelons,
                                          clearable: false,
                                          placeholder: "Select from Drop Down"
                                        },
                                        on: {
                                          input: function($event) {
                                            return _vm.getSubEchelons(
                                              _vm.form.echelon,
                                              "Input"
                                            )
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
                                              rawName:
                                                "v-b-modal.modal-add-suggestion",
                                              modifiers: {
                                                "modal-add-suggestion": true
                                              }
                                            }
                                          ],
                                          staticClass:
                                            "float-right mt-1 add-multiple",
                                          class: {
                                            disabled: _vm.form.echelon == ""
                                          },
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
                                            "\n                                            + Add Suggestion\n                                        "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.showSubEchelonField
                                ? _c(
                                    "div",
                                    { staticClass: " form-group mb-4" },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "control-label font-weight-bold"
                                        },
                                        [_vm._v("Sub Echelon")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        ref: "subEchelon",
                                        attrs: {
                                          label: "description",
                                          options: _vm.subEchelons,
                                          clearable: false,
                                          placeholder: "Select from Drop Down"
                                        },
                                        on: {
                                          input: function($event) {
                                            return _vm.getTiers(
                                              _vm.form.subEchelon
                                            )
                                          }
                                        },
                                        model: {
                                          value: _vm.form.subEchelon,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "subEchelon",
                                              $$v
                                            )
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
                                              rawName:
                                                "v-b-modal.modal-add-suggestion",
                                              modifiers: {
                                                "modal-add-suggestion": true
                                              }
                                            }
                                          ],
                                          staticClass:
                                            "float-right mt-1 add-multiple",
                                          class: {
                                            disabled: _vm.form.subEchelon == ""
                                          },
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
                                            "\n                                            + Add Suggestion\n                                        "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.showTierField
                                ? _c(
                                    "div",
                                    { staticClass: " form-group mb-4" },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "control-label font-weight-bold"
                                        },
                                        [_vm._v("Tier")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        attrs: {
                                          label: "description",
                                          options: _vm.tiers,
                                          clearable: false,
                                          placeholder: "Select from Drop Down"
                                        },
                                        on: {
                                          input: function($event) {
                                            return _vm.getSubTiers(
                                              _vm.form.tier,
                                              "Input"
                                            )
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
                                              rawName:
                                                "v-b-modal.modal-add-suggestion",
                                              modifiers: {
                                                "modal-add-suggestion": true
                                              }
                                            }
                                          ],
                                          staticClass:
                                            "float-right mt-1 add-multiple",
                                          class: {
                                            disabled: _vm.form.tier == ""
                                          },
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
                                            "\n                                            + Add Suggestion\n                                        "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.showSubTierField
                                ? _c(
                                    "div",
                                    { staticClass: " form-group mb-4" },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "control-label font-weight-bold"
                                        },
                                        [_vm._v("Sub Tier")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        attrs: {
                                          label: "description",
                                          options: _vm.subTiers,
                                          clearable: false,
                                          placeholder: "Select from Drop Down"
                                        },
                                        on: {
                                          input: function($event) {
                                            return _vm.getLayers(
                                              _vm.form.subTier,
                                              "Input"
                                            )
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
                                              rawName:
                                                "v-b-modal.modal-add-suggestion",
                                              modifiers: {
                                                "modal-add-suggestion": true
                                              }
                                            }
                                          ],
                                          staticClass:
                                            "float-right mt-1 add-multiple",
                                          class: {
                                            disabled: _vm.form.subTier == ""
                                          },
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
                                            "\n                                            + Add Suggestion\n                                        "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.showLayerField
                                ? _c(
                                    "div",
                                    { staticClass: " form-group mb-4" },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "control-label font-weight-bold"
                                        },
                                        [_vm._v("Layer")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        attrs: {
                                          label: "description",
                                          options: _vm.layers,
                                          clearable: false,
                                          placeholder: "Select from Drop Down"
                                        },
                                        on: {
                                          input: function($event) {
                                            return _vm.getSubLayers(
                                              _vm.form.layer,
                                              "Input"
                                            )
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
                                              rawName:
                                                "v-b-modal.modal-add-suggestion",
                                              modifiers: {
                                                "modal-add-suggestion": true
                                              }
                                            }
                                          ],
                                          staticClass:
                                            "float-right mt-1 add-multiple",
                                          class: {
                                            disabled: _vm.form.layer == ""
                                          },
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
                                            "\n                                            + Add Suggestion\n                                        "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.showSubLayerField
                                ? _c(
                                    "div",
                                    { staticClass: " form-group mb-4" },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "control-label font-weight-bold"
                                        },
                                        [_vm._v("Sub Layer")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        attrs: {
                                          label: "description",
                                          options: _vm.subLayers,
                                          clearable: false,
                                          placeholder: "Select from Drop Down"
                                        },
                                        on: {
                                          input: function($event) {
                                            return _vm.getDecks(
                                              _vm.form.subLayer,
                                              "Input"
                                            )
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
                                              rawName:
                                                "v-b-modal.modal-add-suggestion",
                                              modifiers: {
                                                "modal-add-suggestion": true
                                              }
                                            }
                                          ],
                                          staticClass:
                                            "float-right mt-1 add-multiple",
                                          class: {
                                            disabled: _vm.form.subLayer == ""
                                          },
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
                                            "\n                                            + Add Suggestion\n                                        "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.showDeckField
                                ? _c(
                                    "div",
                                    { staticClass: " form-group mb-4" },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "control-label font-weight-bold"
                                        },
                                        [_vm._v("Deck")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        attrs: {
                                          label: "description",
                                          options: _vm.decks,
                                          clearable: false,
                                          placeholder: "Select from Drop Down"
                                        },
                                        on: {
                                          input: function($event) {
                                            return _vm.getSubDecks(
                                              _vm.form.deck,
                                              "Input"
                                            )
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
                                              rawName:
                                                "v-b-modal.modal-add-suggestion",
                                              modifiers: {
                                                "modal-add-suggestion": true
                                              }
                                            }
                                          ],
                                          staticClass:
                                            "float-right mt-1 add-multiple",
                                          class: {
                                            disabled: _vm.form.deck == ""
                                          },
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
                                            "\n                                            + Add Suggestion\n                                        "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.showSubDeckField
                                ? _c(
                                    "div",
                                    { staticClass: " form-group mb-4" },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "control-label font-weight-bold"
                                        },
                                        [_vm._v("Sub Deck")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        attrs: {
                                          label: "description",
                                          options: _vm.subDecks,
                                          clearable: false,
                                          placeholder: "Select from Drop Down"
                                        },
                                        on: {
                                          input: function($event) {
                                            return _vm.getFloors(
                                              _vm.form.subDeck,
                                              "Input"
                                            )
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
                                              rawName:
                                                "v-b-modal.modal-add-suggestion",
                                              modifiers: {
                                                "modal-add-suggestion": true
                                              }
                                            }
                                          ],
                                          staticClass:
                                            "float-right mt-1 add-multiple",
                                          class: {
                                            disabled: _vm.form.subDeck == ""
                                          },
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
                                            "\n                                            + Add Suggestion\n                                        "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.showFloorField
                                ? _c(
                                    "div",
                                    { staticClass: " form-group mb-4" },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "control-label font-weight-bold"
                                        },
                                        [_vm._v("Floor")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        attrs: {
                                          label: "description",
                                          options: _vm.floors,
                                          clearable: false,
                                          placeholder: "Select from Drop Down"
                                        },
                                        on: {
                                          input: function($event) {
                                            return _vm.getSubFloors(
                                              _vm.form.floor,
                                              "Input"
                                            )
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
                                              rawName:
                                                "v-b-modal.modal-add-suggestion",
                                              modifiers: {
                                                "modal-add-suggestion": true
                                              }
                                            }
                                          ],
                                          staticClass:
                                            "float-right mt-1 add-multiple",
                                          class: {
                                            disabled: _vm.form.floor == ""
                                          },
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
                                            "\n                                            + Add Suggestion\n                                        "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.showSubFloorField
                                ? _c(
                                    "div",
                                    { staticClass: " form-group mb-4" },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "control-label font-weight-bold"
                                        },
                                        [_vm._v("Sub Floor")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        attrs: {
                                          label: "description",
                                          options: _vm.subFloors,
                                          clearable: false,
                                          placeholder: "Select from Drop Down"
                                        },
                                        on: {
                                          input: function($event) {
                                            return _vm.getBasements(
                                              _vm.form.subFloor,
                                              "Input"
                                            )
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
                                              rawName:
                                                "v-b-modal.modal-add-suggestion",
                                              modifiers: {
                                                "modal-add-suggestion": true
                                              }
                                            }
                                          ],
                                          staticClass:
                                            "float-right mt-1 add-multiple",
                                          class: {
                                            disabled: _vm.form.subFloor == ""
                                          },
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
                                            "\n                                            + Add Suggestion\n                                        "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.showBasementField
                                ? _c(
                                    "div",
                                    { staticClass: " form-group mb-4" },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "control-label font-weight-bold"
                                        },
                                        [_vm._v("Basement")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        attrs: {
                                          label: "description",
                                          options: _vm.basements,
                                          clearable: false,
                                          placeholder: "Select from Drop Down"
                                        },
                                        on: {
                                          input: function($event) {
                                            return _vm.getSubBasements(
                                              _vm.form.basement,
                                              "Input"
                                            )
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
                                              rawName:
                                                "v-b-modal.modal-add-suggestion",
                                              modifiers: {
                                                "modal-add-suggestion": true
                                              }
                                            }
                                          ],
                                          staticClass:
                                            "float-right mt-1 add-multiple",
                                          class: {
                                            disabled: _vm.form.basement == ""
                                          },
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
                                            "\n                                            + Add Suggestion\n                                        "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.showSubBasementField
                                ? _c(
                                    "div",
                                    { staticClass: " form-group mb-4" },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "control-label font-weight-bold"
                                        },
                                        [_vm._v("Sub Basement")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        attrs: {
                                          label: "description",
                                          options: _vm.subBasements,
                                          clearable: false,
                                          placeholder: "Select from Drop Down"
                                        },
                                        on: {
                                          input: function($event) {
                                            return _vm.getMines(
                                              _vm.form.subBasement,
                                              "Input"
                                            )
                                          }
                                        },
                                        model: {
                                          value: _vm.form.subBasement,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.form,
                                              "subBasement",
                                              $$v
                                            )
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
                                              rawName:
                                                "v-b-modal.modal-add-suggestion",
                                              modifiers: {
                                                "modal-add-suggestion": true
                                              }
                                            }
                                          ],
                                          staticClass:
                                            "float-right mt-1 add-multiple",
                                          class: {
                                            disabled: _vm.form.subBasement == ""
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.sendHierarchyInfo(
                                                "SubBasement",
                                                _vm.form.subBasement.id,
                                                _vm.form.subBasement
                                                  .description,
                                                _vm.form.basement.id
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                            + Add Suggestion\n                                        "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.showMineField
                                ? _c(
                                    "div",
                                    { staticClass: " form-group mb-4" },
                                    [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "control-label font-weight-bold"
                                        },
                                        [_vm._v("Mine")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        attrs: {
                                          label: "description",
                                          options: _vm.mines,
                                          clearable: false,
                                          placeholder: "Select from Drop Down"
                                        },
                                        on: {
                                          input: function($event) {
                                            return _vm.getSubMines(
                                              _vm.form.mine,
                                              "Input"
                                            )
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
                                              rawName:
                                                "v-b-modal.modal-add-suggestion",
                                              modifiers: {
                                                "modal-add-suggestion": true
                                              }
                                            }
                                          ],
                                          staticClass:
                                            "float-right mt-1 add-multiple",
                                          class: {
                                            disabled: _vm.form.mine == ""
                                          },
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
                                            "\n                                            + Add Suggestion\n                                        "
                                          )
                                        ]
                                      )
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
                                        {
                                          staticClass:
                                            "control-label font-weight-bold"
                                        },
                                        [_vm._v("Sub Mine")]
                                      ),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        attrs: {
                                          label: "description",
                                          options: _vm.subMines,
                                          clearable: false,
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
                                              rawName:
                                                "v-b-modal.modal-add-suggestion",
                                              modifiers: {
                                                "modal-add-suggestion": true
                                              }
                                            }
                                          ],
                                          staticClass:
                                            "float-right mt-1 add-multiple",
                                          class: {
                                            disabled: _vm.form.subMine == ""
                                          },
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
                                            "\n                                            + Add Suggestion\n                                        "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row mt-3" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-md-1 offset-4 exclamition-position"
                          },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "h3",
                                attrs: { to: {}, id: "tooltip-target-2" }
                              },
                              [
                                _c("i", {
                                  staticClass:
                                    "fas fa-question-circle text-dark"
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-tooltip",
                              {
                                attrs: {
                                  target: "tooltip-target-2",
                                  triggers: "hover"
                                }
                              },
                              [
                                _vm._v(
                                  "You can associate more than\n                                    one\n                                    industry\n                                    classification to your company and to your content. This means if your company\n                                    provides\n                                    services\n                                    or products across more than a single industry (or within multiple parts of a\n                                    single\n                                    industry)\n                                    any users search for those specific classification will find your company’s\n                                    content.\n                                "
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-md-7" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "btn btn-back-next",
                                attrs: {
                                  link: "",
                                  to: {
                                    name: "CompanyQuestionnairesDetails",
                                    hash: "#taxonomy"
                                  }
                                }
                              },
                              [_vm._v("Cancel")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-back-next float-right",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.saveHierarchyInfo(_vm.actionType)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                    Save and Close\n                                "
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ])
                    ]),
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
                          "hide-footer": ""
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
                        _c("p", { staticClass: "p-2 font-weight-bold" }, [
                          _vm._v(
                            "What type of Classification change would you suggest for this classification?"
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "b-button",
                          {
                            staticClass: "btn-add-suggestion",
                            attrs: { id: "addnode", variant: "success" },
                            on: { click: _vm.showAddModal }
                          },
                          [
                            _vm._v(
                              "Add Classification\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-button",
                          {
                            staticClass: "btn-add-suggestion",
                            attrs: { id: "replacenode", variant: "success" },
                            on: { click: _vm.showReplaceModal }
                          },
                          [
                            _vm._v(
                              "\n                            Replace Classification\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-button",
                          {
                            staticClass: "btn-add-suggestion",
                            attrs: { id: "deletenode", variant: "success" },
                            on: { click: _vm.showDeleteModal }
                          },
                          [
                            _vm._v(
                              "\n                            Delete Classification\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-button",
                          {
                            staticClass: "btn-add-suggestion",
                            attrs: { id: "other", variant: "success" },
                            on: { click: _vm.showOtherModal }
                          },
                          [
                            _vm._v(
                              "\n                            Other\n                        "
                            )
                          ]
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
                          title: "Add Classification Request",
                          "hide-footer": ""
                        }
                      },
                      [
                        _c("div", { staticClass: "row text-center" }, [
                          _c("div", { staticClass: "col-11" }, [
                            _c("p", { staticClass: "font-weight-bold mb-0" }, [
                              _vm._v("Selected Classification")
                            ]),
                            _vm._v(" "),
                            _c(
                              "p",
                              {
                                staticClass:
                                  "font-weight-bold text-theme-purple"
                              },
                              [
                                _vm._v(_vm._s(_vm.node_type) + " "),
                                _c("i", { staticClass: "fa fa-arrow-right" }),
                                _vm._v(" " + _vm._s(_vm.node_description))
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "col-1 exclamition-position float-right"
                            },
                            [
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
                                    staticClass:
                                      "fas fa-question-circle text-dark"
                                  })
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "font-weight-bold mb-2" }, [
                          _vm._v("Add Classification Request Here")
                        ]),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          [
                            _c("b-form-input", {
                              ref: "suggestion_explanation",
                              staticClass: "mb-2",
                              class: {
                                "is-invalid":
                                  _vm.$v.suggestion_explanation.$error
                              },
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
                                  _vm._v("Requested Node is required.")
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("b-form-textarea", {
                              ref: "suggestion_reason",
                              class: {
                                "is-invalid": _vm.$v.suggestion_reason.$error
                              },
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
                          [
                            _c(
                              "b-button",
                              {
                                staticClass: "btn-cancel-submit mr-3",
                                attrs: { variant: "success" },
                                on: {
                                  click: function($event) {
                                    return _vm.cancelSuggestionModal(
                                      "modal-add-node"
                                    )
                                  }
                                }
                              },
                              [_vm._v("Cancel\n                            ")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                staticClass: "btn-cancel-submit",
                                attrs: {
                                  disabled: _vm.isDisabled,
                                  variant: "success"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.addSuggestion("add")
                                  }
                                }
                              },
                              [_vm._v("Submit\n                            ")]
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
                          "hide-footer": ""
                        }
                      },
                      [
                        _c("div", { staticClass: "text-center" }, [
                          _c("p", { staticClass: "font-weight-bold mb-0" }, [
                            _vm._v("Selected Classification")
                          ]),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "font-weight-bold text-theme-purple"
                            },
                            [
                              _vm._v(_vm._s(_vm.node_type) + " "),
                              _c("i", { staticClass: "fa fa-arrow-right" }),
                              _vm._v(" " + _vm._s(_vm.node_description))
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "font-weight-bold mb-2" }, [
                          _vm._v("Replace Classification Request Here")
                        ]),
                        _vm._v(" "),
                        _c(
                          "b-form-group",
                          [
                            _c("b-form-input", {
                              ref: "suggestion_explanation",
                              staticClass: "mb-2",
                              class: {
                                "is-invalid":
                                  _vm.$v.suggestion_explanation.$error
                              },
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
                                  _vm._v("Requested Node is required.")
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("b-form-textarea", {
                              ref: "suggestion_reason",
                              class: {
                                "is-invalid": _vm.$v.suggestion_reason.$error
                              },
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
                          [
                            _c(
                              "b-button",
                              {
                                staticClass: "btn-cancel-submit mr-3",
                                attrs: { variant: "success" },
                                on: {
                                  click: function($event) {
                                    return _vm.cancelSuggestionModal(
                                      "modal-replace-node"
                                    )
                                  }
                                }
                              },
                              [_vm._v("Cancel\n                            ")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                staticClass: "btn-cancel-submit",
                                attrs: {
                                  disabled: _vm.isDisabled,
                                  variant: "success"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.addSuggestion("replace")
                                  }
                                }
                              },
                              [_vm._v("Submit\n                            ")]
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
                          "hide-footer": ""
                        }
                      },
                      [
                        _c("div", { staticClass: "text-center" }, [
                          _c("p", { staticClass: "font-weight-bold mb-0" }, [
                            _vm._v("Selected Classification")
                          ]),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "font-weight-bold text-theme-purple"
                            },
                            [
                              _vm._v(_vm._s(_vm.node_type) + " "),
                              _c("i", { staticClass: "fa fa-arrow-right" }),
                              _vm._v(" " + _vm._s(_vm.node_description))
                            ]
                          )
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
                              class: {
                                "is-invalid": _vm.$v.suggestion_reason.$error
                              },
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
                          [
                            _c(
                              "b-button",
                              {
                                staticClass: "btn-cancel-submit mr-3",
                                attrs: { variant: "success" },
                                on: {
                                  click: function($event) {
                                    return _vm.cancelSuggestionModal(
                                      "modal-delete-node"
                                    )
                                  }
                                }
                              },
                              [_vm._v("Cancel\n                            ")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                staticClass: "btn-cancel-submit",
                                attrs: {
                                  disabled: _vm.isDisabled,
                                  variant: "success"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.addSuggestion("delete")
                                  }
                                }
                              },
                              [_vm._v("Submit\n                            ")]
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
                          "hide-footer": ""
                        }
                      },
                      [
                        _c("div", { staticClass: "text-center" }, [
                          _c("p", { staticClass: "font-weight-bold mb-0" }, [
                            _vm._v("Selected Classification")
                          ]),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass: "font-weight-bold text-theme-purple"
                            },
                            [
                              _vm._v(_vm._s(_vm.node_type) + " "),
                              _c("i", { staticClass: "fa fa-arrow-right" }),
                              _vm._v(" " + _vm._s(_vm.node_description))
                            ]
                          )
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
                              class: {
                                "is-invalid": _vm.$v.suggestion_reason.$error
                              },
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
                          [
                            _c(
                              "b-button",
                              {
                                staticClass: "btn-cancel-submit mr-3",
                                attrs: { variant: "success" },
                                on: {
                                  click: function($event) {
                                    return _vm.cancelSuggestionModal(
                                      "modal-other-node"
                                    )
                                  }
                                }
                              },
                              [_vm._v("Cancel\n                            ")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              {
                                staticClass: "btn-cancel-submit",
                                attrs: {
                                  disabled: _vm.isDisabled,
                                  variant: "success"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.addSuggestion("other")
                                  }
                                }
                              },
                              [_vm._v("Submit\n                            ")]
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
              ])
            ],
            1
          )
        ]
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
    return _c("div", { staticClass: "row mx-auto" }, [
      _c("div", { staticClass: "col-md-6 offset-md-3 h-100 my-auto" }, [
        _c("div", { staticClass: "subsector pr-3 d-block" }, [
          _vm._v(
            "\n                            A more detailed industry classification will allow users to find your company and\n                            your\n                            content more reliably and accurately in their searches. If you do not see a fitting\n                            classification, please consider making a suggestion either through "
          ),
          _c("b", [_vm._v("Add Suggestion or by leaving Feedback")]),
          _vm._v(".\n                        ")
        ])
      ])
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
    return _c("label", { staticClass: "control-label font-weight-bold" }, [
      _vm._v("Industry"),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label font-weight-bold" }, [
      _vm._v("Sector"),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label font-weight-bold" }, [
      _vm._v("Sub Sector"),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label font-weight-bold" }, [
      _vm._v("Group"),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label font-weight-bold" }, [
      _vm._v("Sub Group"),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/company/EditCompanyTaxonomy.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/company/EditCompanyTaxonomy.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditCompanyTaxonomy_vue_vue_type_template_id_1170ea52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditCompanyTaxonomy.vue?vue&type=template&id=1170ea52& */ "./resources/js/components/company/EditCompanyTaxonomy.vue?vue&type=template&id=1170ea52&");
/* harmony import */ var _EditCompanyTaxonomy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditCompanyTaxonomy.vue?vue&type=script&lang=js& */ "./resources/js/components/company/EditCompanyTaxonomy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditCompanyTaxonomy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditCompanyTaxonomy_vue_vue_type_template_id_1170ea52___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditCompanyTaxonomy_vue_vue_type_template_id_1170ea52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/EditCompanyTaxonomy.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/EditCompanyTaxonomy.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/company/EditCompanyTaxonomy.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyTaxonomy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditCompanyTaxonomy.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanyTaxonomy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyTaxonomy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/EditCompanyTaxonomy.vue?vue&type=template&id=1170ea52&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/company/EditCompanyTaxonomy.vue?vue&type=template&id=1170ea52& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyTaxonomy_vue_vue_type_template_id_1170ea52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditCompanyTaxonomy.vue?vue&type=template&id=1170ea52& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanyTaxonomy.vue?vue&type=template&id=1170ea52&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyTaxonomy_vue_vue_type_template_id_1170ea52___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyTaxonomy_vue_vue_type_template_id_1170ea52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);