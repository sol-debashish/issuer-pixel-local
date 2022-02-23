(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Loader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    text: {
      type: String,
      required: false,
      "default": ""
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/AddEditCompanyTaxonomy.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/AddEditCompanyTaxonomy.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apis_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../apis/User */ "./resources/js/apis/User.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apis_Common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../apis/Common */ "./resources/js/apis/Common.js");


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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AddEditCompanyTaxonomy",
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
  props: ["updatedId"],
  validations: {
    form: {
      industry: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      sector: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      subSector: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      group: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      subGroup: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      }
    },
    suggestion_explanation: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
    },
    suggestion_reason: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
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
    cancelAddOrEdit: function cancelAddOrEdit() {
      this.$emit("childAction", "cancel");
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
      _apis_User__WEBPACK_IMPORTED_MODULE_3__["default"].nodeSuggestion(this.suggestionFormData).then(function (response) {
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
                  _apis_User__WEBPACK_IMPORTED_MODULE_3__["default"].addMultipleNodes(nodeformData).then(function (response) {
                    if (response.data.success) {
                      toastr.success(response.data.success.message);

                      _this21.$router.push({
                        name: "CompanyQuestionnairesDetails",
                        'hash': '#taxonomy'
                      });

                      _this21.$emit("childAction", "cancel");
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
                  nodeformData.append('updated_id', this.updatedId);
                  _apis_User__WEBPACK_IMPORTED_MODULE_3__["default"].updateHierarchyNodes(nodeformData).then(function (response) {
                    if (response.data.success) {
                      toastr.success(response.data.success.message);

                      _this21.$router.push({
                        name: "CompanyQuestionnairesDetails",
                        'hash': '#taxonomy'
                      });

                      _this21.$emit("childAction", "cancel");
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
  mounted: function mounted() {
    if (this.updatedId == null) {
      this.actionType = 'add';
    } else {
      this.getHierarchyInfo(this.updatedId, '');
      this.actionType = 'update';
    }
  },
  created: function created() {
    this.nodeColor = _apis_Common__WEBPACK_IMPORTED_MODULE_5__["default"].hierarchyNodeColor;
    this.isLoading = true;
    this.goBackToPageTopAndNextFieldToEnter();
    this.getIndustries(); //this.responseParents();
    // if (this.$route.params.id == undefined) {
    //     this.actionType = 'add';
    // } else {
    //     this.getHierarchyInfo(this.$route.params.id, '');
    //     this.actionType = 'update';
    // }
  },
  components: {
    loader: _Loader__WEBPACK_IMPORTED_MODULE_1__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyExecutives.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/CompanyExecutives.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/Questionnnaire */ "./resources/js/apis/Questionnnaire.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__);


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




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      oldCompanyFounders: [],
      oldCeoList: "",
      oldCfoList: "",
      oldSalesDeptEmail: "",
      oldSalesDeptPhone: "",
      oldInvestorRelationContactEmail: "",
      oldInvestorRelationContactPhone: "",
      oldBusinessDevelopmentContactEmail: "",
      oldBusinessDevelopmentContactPhone: "",
      oldStrategicPartnership: [],
      oldVendors: [],
      oldTopCompetitors: "",
      isLoading: false,
      hasCompanyFounder: false,
      form: {
        ceo_list: "",
        cfo_list: "",
        sales_dept_email: "",
        sales_dept_phone: "",
        investor_relation_contact_email: "",
        investor_relation_contact_phone: "",
        business_development_contact_email: "",
        business_development_contact_phone: "",
        top_competitors: "",
        company_founders: [],
        strategic_partnership: [],
        vendors: []
      },
      CompanyExecutivesFormData: {
        ceo_list: "",
        cfo_list: "",
        sales_dept_email: "",
        sales_dept_phone: "",
        investor_relation_contact_email: "",
        investor_relation_contact_phone: "",
        business_development_contact_email: "",
        business_development_contact_phone: "",
        top_competitors: "",
        company_founders: [],
        strategic_partnership: [],
        vendors: []
      },
      errors: []
    };
  },
  validations: {
    form: {
      sales_dept_email: {
        email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["email"]
      },
      investor_relation_contact_email: {
        email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["email"]
      },
      business_development_contact_email: {
        email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["email"]
      }
    }
  },
  methods: {
    changeField: function changeField() {
      // console.log(this.form.company_founders);
      // console.log(this.oldCompanyFounders);
      if (this.form.company_founders.length !== this.oldCompanyFounders.length) {
        this.$emit("contactFormChanged", true);
      } else if (this.form.ceo_list !== this.oldCeoList) {
        this.$emit("contactFormChanged", true);
      } else if (this.form.cfo_list !== this.oldCfoList) {
        this.$emit("contactFormChanged", true);
      } else if (this.form.sales_dept_email !== this.oldSalesDeptEmail) {
        this.$emit("contactFormChanged", true);
      } else if (this.form.investor_relation_contact_email !== this.oldInvestorRelationContactEmail) {
        this.$emit("contactFormChanged", true);
      } else if (this.form.business_development_contact_email !== this.oldBusinessDevelopmentContactEmail) {
        this.$emit("contactFormChanged", true);
      } else if (this.form.strategic_partnership.length !== this.oldStrategicPartnership.length) {
        this.$emit("contactFormChanged", true);
      } else if (this.form.vendors.length !== this.oldVendors.length) {
        this.$emit("contactFormChanged", true);
      } else if (this.form.top_competitors.length !== this.oldTopCompetitors.length) {
        this.$emit("contactFormChanged", true);
      } else {
        this.$emit("contactFormChanged", false);
      }
    },
    addMoreFounder: function addMoreFounder() {
      this.form.company_founders.push({
        name: ''
      });
      this.NextFieldToEnter();
    },
    removeFounder: function removeFounder(index) {
      this.form.company_founders.splice(index, 1);
    },
    setCompanyFounderCheck: function setCompanyFounderCheck(data) {
      this.hasCompanyFounder = false;

      if (data) {
        this.hasCompanyFounder = true;
      }
    },
    getStepwiseData: function () {
      var _getStepwiseData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__["default"].getCompanyQuestionnaireData(2).then(function (response) {
                  _this.isLoading = false;
                  var executivesData = response.data.data;
                  _this.form.ceo_list = executivesData.ceo;
                  _this.oldCeoList = executivesData.ceo;
                  _this.form.cfo_list = executivesData.cfo;
                  _this.oldCfoList = executivesData.cfo;
                  _this.form.sales_dept_email = executivesData.sales_department_email;
                  _this.oldSalesDeptEmail = executivesData.sales_department_email;
                  _this.form.sales_dept_phone = executivesData.sales_dept_phone;
                  _this.oldSalesDeptPhone = executivesData.sales_dept_phone;
                  _this.form.investor_relation_contact_email = executivesData.investor_relations_department_email;
                  _this.oldInvestorRelationContactEmail = executivesData.investor_relations_department_email;
                  _this.form.investor_relation_contact_phone = executivesData.investor_relation_contact_phone;
                  _this.oldInvestorRelationContactPhone = executivesData.investor_relation_contact_phone;
                  _this.form.business_development_contact_email = executivesData.business_development_contact_email;
                  _this.oldBusinessDevelopmentContactEmail = executivesData.business_development_contact_email;
                  _this.form.business_development_contact_phone = executivesData.business_development_contact_phone;
                  _this.oldBusinessDevelopmentContactPhone = executivesData.business_development_contact_phone;
                  _this.form.company_founders = executivesData.founders;

                  if (executivesData.founders.length > 0) {
                    _this.hasCompanyFounder = true;
                  }

                  _this.oldCompanyFounders = Object.keys(executivesData.founders).map(function (key) {
                    return executivesData.founders[key].name;
                  });
                  _this.form.strategic_partnership = Object.keys(executivesData.partnerships).map(function (key) {
                    return executivesData.partnerships[key].name;
                  });
                  _this.oldStrategicPartnership = Object.keys(executivesData.partnerships).map(function (key) {
                    return executivesData.partnerships[key].name;
                  });
                  _this.form.vendors = Object.keys(executivesData.vendors).map(function (key) {
                    return executivesData.vendors[key].name;
                  });
                  _this.oldVendors = Object.keys(executivesData.vendors).map(function (key) {
                    return executivesData.vendors[key].name;
                  });
                  _this.form.top_competitors = null != executivesData.top_competitors ? executivesData.top_competitors.split(',').map(function (s) {
                    return s.trim();
                  }) : '';
                  _this.oldTopCompetitors = null != executivesData.top_competitors ? executivesData.top_competitors.split(',').map(function (s) {
                    return s.trim();
                  }) : '';
                  /*Check Founders, Partners and Vendors Data Exist or Empty*/

                  if (executivesData.founders.length == 0) {
                    _this.addMoreFounder();
                  }
                  /*End*/

                })["catch"](function (error) {
                  _this.isLoading = false;

                  if (error.response.status == 401) {
                    _this.$emit('logout');
                  } else {
                    toastr.error(error);
                  }
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getStepwiseData() {
        return _getStepwiseData.apply(this, arguments);
      }

      return getStepwiseData;
    }(),
    saveCompanyExecutivesData: function saveCompanyExecutivesData() {
      var _this$form$ceo_list,
          _this$form$cfo_list,
          _this$form$sales_dept,
          _this$form$sales_dept2,
          _this$form$investor_r,
          _this$form$investor_r2,
          _this$form$business_d,
          _this$form$business_d2,
          _this2 = this;

      this.$emit("contactFormChanged", false);
      this.$v.form.sales_dept_email.$touch();
      this.$v.form.investor_relation_contact_email.$touch();

      if (this.$v.form.sales_dept_email.$invalid || this.$v.form.investor_relation_contact_email.$invalid) {
        if (this.$v.form.sales_dept_email.$invalid) {
          this.$refs.sales_dept_email.focus();
        } else if (this.$v.form.investor_relation_contact_email.$invalid) {
          this.$refs.investor_relation_contact_email.focus();
        }

        return false;
      }

      this.isLoading = true;
      this.errors = [];
      this.CompanyExecutivesFormData.ceo_list = (_this$form$ceo_list = this.form.ceo_list) !== null && _this$form$ceo_list !== void 0 ? _this$form$ceo_list : '';
      this.CompanyExecutivesFormData.cfo_list = (_this$form$cfo_list = this.form.cfo_list) !== null && _this$form$cfo_list !== void 0 ? _this$form$cfo_list : '';
      this.CompanyExecutivesFormData.sales_dept_email = (_this$form$sales_dept = this.form.sales_dept_email) !== null && _this$form$sales_dept !== void 0 ? _this$form$sales_dept : '';
      this.CompanyExecutivesFormData.sales_dept_phone = (_this$form$sales_dept2 = this.form.sales_dept_phone) !== null && _this$form$sales_dept2 !== void 0 ? _this$form$sales_dept2 : '';
      this.CompanyExecutivesFormData.investor_relation_contact_email = (_this$form$investor_r = this.form.investor_relation_contact_email) !== null && _this$form$investor_r !== void 0 ? _this$form$investor_r : '';
      this.CompanyExecutivesFormData.investor_relation_contact_phone = (_this$form$investor_r2 = this.form.investor_relation_contact_phone) !== null && _this$form$investor_r2 !== void 0 ? _this$form$investor_r2 : '';
      this.CompanyExecutivesFormData.business_development_contact_email = (_this$form$business_d = this.form.business_development_contact_email) !== null && _this$form$business_d !== void 0 ? _this$form$business_d : '';
      this.CompanyExecutivesFormData.business_development_contact_phone = (_this$form$business_d2 = this.form.business_development_contact_phone) !== null && _this$form$business_d2 !== void 0 ? _this$form$business_d2 : '';
      this.CompanyExecutivesFormData.top_competitors = this.form.top_competitors ? this.form.top_competitors.join(', ') : '';
      this.CompanyExecutivesFormData.company_founders = JSON.stringify(this.form.company_founders);
      this.CompanyExecutivesFormData.strategic_partnership = JSON.stringify(this.form.strategic_partnership);
      this.CompanyExecutivesFormData.vendors = JSON.stringify(this.form.vendors);
      _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__["default"].updateCompanyQuestionnaireData(this.CompanyExecutivesFormData, 2).then(function (response) {
        _this2.isLoading = false;
        _this2.submitButtonDisabled = false;
        toastr.success(response.data.success.message);
        /*Impact realtime Percentage Change in tab and banner*/

        _this2.$parent.$parent.$parent.getCompanyInfo();
      })["catch"](function (error) {
        _this2.isLoading = false;
        _this2.submitButtonDisabled = false;

        if (error.response.status === 422) {
          toastr.error(error.response.data.error.message);
        } else if (error.response.status == 401) {
          _this2.$emit('logout');
        } else {
          toastr.error(error);
        }
      });
    },
    goBackToPageTop: function goBackToPageTop() {
      $(document).ready(function () {
        $(this).scrollTop(0);
      });
    },
    NextFieldToEnter: function NextFieldToEnter() {
      $(document).ready(function () {
        $('.go-next-with-enter, textarea').on('keydown', function (e) {
          if (e.keyCode == 13) {
            var focusable = $('.go-next-with-enter, textarea').filter(':visible');
            focusable.eq(focusable.index(this) + 1).focus();
            return false;
          }
        });
      });
    },
    loadComponentData: function loadComponentData() {
      this.isLoading = true;
      this.goBackToPageTop();
      this.NextFieldToEnter();
      this.addMoreFounder();
      this.getStepwiseData();
    },
    acceptPhoneNumber: function acceptPhoneNumber(field_name) {
      var x;

      if (field_name == 'sales_dept_phone') {
        //this code is part of changeField function start
        if (this.form.sales_dept_phone !== this.oldSalesDeptPhone) {
          this.$emit("contactFormChanged", true);
        } else {
          this.$emit("contactFormChanged", false);
        } //this code is part of changeField function end


        x = this.form.sales_dept_phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        this.form.sales_dept_phone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
      }

      if (field_name == 'investor_relation_contact_phone') {
        //this code is part of changeField function start
        if (this.form.investor_relation_contact_phone !== this.oldInvestorRelationContactPhone) {
          this.$emit("contactFormChanged", true);
        } else {
          this.$emit("contactFormChanged", false);
        } //this code is part of changeField function end


        x = this.form.investor_relation_contact_phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        this.form.investor_relation_contact_phone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
      }

      if (field_name == 'business_development_contact_phone') {
        //this code is part of changeField function start
        if (this.form.business_development_contact_phone !== this.oldBusinessDevelopmentContactPhone) {
          this.$emit("contactFormChanged", true);
        } else {
          this.$emit("contactFormChanged", false);
        } //this code is part of changeField function end


        x = this.form.business_development_contact_phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
        this.form.business_development_contact_phone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
      }
    }
  },
  components: {
    loader: _Loader__WEBPACK_IMPORTED_MODULE_3__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyFinances.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/CompanyFinances.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/Questionnnaire */ "./resources/js/apis/Questionnnaire.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__);


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




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isLoading: false,
      baseCurrencyDacimal: "",
      oldFinancingType: "",
      oldCompanyValuation: "",
      OldConductFinancing: "",
      oldAuditedFinance: "",
      oldIntelletualProperty: "",
      oldPatentType: "",
      oldResearchCoverageType: "",
      oldSharedCommunityResearch: "",
      form: {
        conduct_financing: "",
        financing_type: "",
        audited_finance: "",
        company_valuation: "",
        intelletual_property: "",
        patent_type: ""
      },
      CompanyFinancesFormData: {
        conduct_financing: "",
        financing_type: "",
        audited_finance: "",
        company_valuation: "",
        intelletual_property: "",
        patent_type: "",
        _token: ''
      },
      errors: [],
      IsIntellectualSelectNo: false,
      patentTypeCondition: "",
      researchTypeCondition: "",
      financingTypeList: [],
      financingTypeIds: [],
      intelletualPropertyList: [],
      intelletualPropertyIds: [],
      patentsTypeList: [],
      patentsTypIds: [],
      analystRatingList: []
    };
  },
  validations: {
    form: {
      company_valuation: {
        patternValid: function patternValid(value) {
          if (value != null) {
            //const containsNumber = /[0-9]/.test(value);
            var num = value.toString().replace(/,/g, ""),
                thenum = num.replace(/^\D+/g, '');
            thenum = Math.trunc(thenum);
            var containsNumber = /^\d*$/.test(thenum);
            return containsNumber;
          }
        }
      }
    }
  },
  methods: {
    changeField: function changeField() {
      if (this.form.company_valuation !== this.oldCompanyValuation) {
        this.$emit("companyValuation", true);
      } else if (this.form.audited_finance !== this.oldAuditedFinance) {
        this.$emit("companyValuation", true);
      } else {
        this.$emit("companyValuation", false);
      }
    },
    getFinancingTypeList: function () {
      var _getFinancingTypeList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('/api/get-financing-type-list').then(function (response) {
                  _this.financingTypeList = response.data.data;
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

      function getFinancingTypeList() {
        return _getFinancingTypeList.apply(this, arguments);
      }

      return getFinancingTypeList;
    }(),
    getIntelletualPropertyList: function () {
      var _getIntelletualPropertyList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get('/api/get-intelletual-property-list').then(function (response) {
                  _this2.intelletualPropertyList = response.data.data;
                  _this2.isLoading = false;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getIntelletualPropertyList() {
        return _getIntelletualPropertyList.apply(this, arguments);
      }

      return getIntelletualPropertyList;
    }(),
    getPatentsTypeList: function () {
      var _getPatentsTypeList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _this3 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios.get('/api/get-patent-type-list').then(function (response) {
                  _this3.patentsTypeList = response.data.data;
                  _this3.isLoading = false;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getPatentsTypeList() {
        return _getPatentsTypeList.apply(this, arguments);
      }

      return getPatentsTypeList;
    }(),
    getResearchCoverageTypeList: function () {
      var _getResearchCoverageTypeList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _this4 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.get('/api/get-research-coverage-type-list').then(function (response) {
                  _this4.researchCoverageTypeList = response.data.data;
                  _this4.isLoading = false;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getResearchCoverageTypeList() {
        return _getResearchCoverageTypeList.apply(this, arguments);
      }

      return getResearchCoverageTypeList;
    }(),
    getSharedCommunityResearchPlatformList: function () {
      var _getSharedCommunityResearchPlatformList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var _this5 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios.get('/api/get-shared-community-research-platform-list').then(function (response) {
                  _this5.sharedCommunityResearchPlatformList = response.data.data;
                  _this5.isLoading = false;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getSharedCommunityResearchPlatformList() {
        return _getSharedCommunityResearchPlatformList.apply(this, arguments);
      }

      return getSharedCommunityResearchPlatformList;
    }(),
    resetIntellectualSelects: function resetIntellectualSelects(value) {
      //this code is part of changeField function start
      if (this.form.intelletual_property !== this.oldIntelletualProperty) {
        this.$emit("companyValuation", true);
      } else {
        this.$emit("companyValuation", false);
      } //this code is part of changeField function end


      this.intelletualPropertyIds = Object.keys(value).map(function (key) {
        return value[key].id;
      });

      if (!this.IsIntellectualSelectNo && value.find(function (o) {
        return o.name === "No";
      })) {
        this.IsIntellectualSelectNo = true;
        this.form.intelletual_property = [{
          name: "No",
          "id": 5
        }];
        this.intelletualPropertyIds = [5];
      } else if (this.IsIntellectualSelectNo && value.find(function (o) {
        return o.name === "No";
      })) {
        this.IsIntellectualSelectNo = false;

        if (this.intelletualPropertyIds.length == 2) {
          this.form.intelletual_property = value.slice(1);
          this.intelletualPropertyIds.splice(0, 1);
        } else {
          this.form.intelletual_property = [{
            name: "No",
            "id": 5
          }];
          this.intelletualPropertyIds = [5];
        }
      }

      this.checkPatent();
    },
    checkPatent: function checkPatent() {
      var isObjectPatent = this.form.intelletual_property.find(function (o) {
        return o.name === "Patents";
      });

      if (isObjectPatent) {
        this.patentTypeCondition = "Patents";
      } else {
        this.patentTypeCondition = "";
        this.form.patent_type = "";
      }
    },
    resetFinancingType: function resetFinancingType(value) {
      //this code is part of changeField function start
      if (this.form.conduct_financing !== this.OldConductFinancing) {
        this.$emit("companyValuation", true);
      } else {
        this.$emit("companyValuation", false);
      } //this code is part of changeField function end


      if (value == 0) {
        this.form.financing_type = "";
      }

      this.goBackToPageTopAndNextFieldToEnter();
    },
    getStepwiseData: function () {
      var _getStepwiseData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var _this6 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__["default"].getCompanyQuestionnaireData(4).then(function (response) {
                  _this6.isLoading = false;
                  var financesData = response.data.data;
                  _this6.baseCurrencyDacimal = financesData.base_currency != null ? financesData.base_currency.unicode_decimal : '36';
                  _this6.form.conduct_financing = financesData.conducted_financing_six_month;
                  _this6.OldConductFinancing = financesData.conducted_financing_six_month;
                  _this6.form.financing_type = financesData.financing_type;
                  _this6.oldFinancingType = financesData.financing_type;
                  _this6.form.company_valuation = financesData.recent_valuation;
                  _this6.oldCompanyValuation = financesData.recent_valuation;
                  _this6.form.audited_finance = financesData.audited_financials;
                  _this6.oldAuditedFinance = financesData.audited_financials;
                  _this6.form.intelletual_property = financesData.intellectual_property;
                  _this6.oldIntelletualProperty = financesData.intellectual_property;
                  _this6.form.patent_type = financesData.patent_type;
                  _this6.oldPatentType = financesData.patent_type; // console.log(financesData.patent_type)
                  // this.form.research_coverage_type = financesData.patent_type;

                  _this6.showRelatedField(financesData.financing_type, 'financingTypeIds');

                  _this6.showRelatedField(financesData.intellectual_property, 'intelletualPropertyIds');

                  _this6.showRelatedField(financesData.patent_type, 'patentsTypIds'); // this.showRelatedField(financesData.research_coverage, 'researchCoverageTypeIds')


                  _this6.checkPatent();
                })["catch"](function (error) {
                  _this6.isLoading = false;

                  if (error.response.status == 401) {
                    _this6.$emit('logout');
                  } else {
                    toastr.error(error);
                  }
                });

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function getStepwiseData() {
        return _getStepwiseData.apply(this, arguments);
      }

      return getStepwiseData;
    }(),
    saveCompanyFinancesData: function saveCompanyFinancesData(action) {
      var _this$form$company_va,
          _this7 = this;

      this.$emit("companyValuation", false);
      this.errors = [];
      var finanOptions = [],
          intelOptions = [],
          patOptions = [],
          rscOptions = [],
          scrOptions = [];

      for (var fnct = 0; fnct < this.form.financing_type.length; fnct++) {
        finanOptions.push(this.form.financing_type[fnct].id);
      }

      for (var intp = 0; intp < this.form.intelletual_property.length; intp++) {
        intelOptions.push(this.form.intelletual_property[intp].id);
      }

      for (var pat = 0; pat < this.form.patent_type.length; pat++) {
        patOptions.push(this.form.patent_type[pat].id);
      }

      this.CompanyFinancesFormData.conduct_financing = this.form.conduct_financing;
      this.CompanyFinancesFormData.company_valuation = (_this$form$company_va = this.form.company_valuation) !== null && _this$form$company_va !== void 0 ? _this$form$company_va : '';
      this.CompanyFinancesFormData.audited_finance = this.form.audited_finance;
      this.CompanyFinancesFormData.financing_type = finanOptions.join(',');
      this.CompanyFinancesFormData.intelletual_property = intelOptions.join(',');
      this.CompanyFinancesFormData.patent_type = patOptions.join(',');
      this.CompanyFinancesFormData._token = document.querySelector('meta[name="csrf-token"]').content;
      this.isLoading = true;
      this.submitButtonDisabled = true;
      _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__["default"].updateCompanyQuestionnaireData(this.CompanyFinancesFormData, 4).then(function (response) {
        _this7.isLoading = false;
        _this7.submitButtonDisabled = false;
        toastr.success(response.data.success.message);
        /*Impact realtime Percentage Change in tab and banner*/

        _this7.$parent.$parent.$parent.getCompanyInfo();
      })["catch"](function (error) {
        _this7.isLoading = false;
        _this7.submitButtonDisabled = false;

        if (error.response.status === 422) {
          toastr.error(error.response.data.error.message);
        } else if (error.response.status == 401) {
          _this7.$emit('logout');
        } else {
          toastr.error(error);
        }
      });
    },
    stripTheGarbage: function stripTheGarbage(e) {
      if (e.keyCode < 48 && e.keyCode !== 46 || e.keyCode > 59) {
        e.preventDefault();
      }
    },
    formatDollars: function formatDollars() {
      if (this.form.company_valuation != '' && this.form.company_valuation != null) {
        var num = this.form.company_valuation;
        num = Number(num);

        var countDecimals = function countDecimals(value) {
          if (Math.floor(value) === value) return 0;
          return value.toString().split(".")[1].length || 0;
        };

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
         this.form.company_valuation = '$'+ num.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');*/

        if (decimal > 0) {
          num = num.toFixed(0);
        }

        this.form.company_valuation = String.fromCharCode(parseInt(this.baseCurrencyDacimal, 10)) + String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
      }
    },
    formatDollarsToNumber: function formatDollarsToNumber() {
      if (this.form.company_valuation != null) {
        var num = this.form.company_valuation.replace(/,/g, "");
        var thenum = num.replace(/^\D+/g, '');
        thenum = Math.trunc(thenum);
        this.form.company_valuation = thenum != 0 ? thenum : '';
      }
    },
    showRelatedField: function showRelatedField(field, list) {
      //this code is part of changeField function start
      if (this.form.financing_type.length !== this.oldFinancingType.length) {
        this.$emit("companyValuation", true);
      } else if (this.form.patent_type !== this.oldPatentType) {
        this.$emit("companyValuation", true);
      } else if (this.form.shared_community_research !== this.oldSharedCommunityResearch) {
        this.$emit("companyValuation", true);
      } else {
        this.$emit("companyValuation", false);
      } //this code is part of changeField function end


      this[list] = Object.keys(field).map(function (key) {
        return field[key].id;
      });

      if ('intelletualPropertyIds' == list && this[list].includes(5)) {
        this.IsIntellectualSelectNo = true;
      }
    },
    financingSelectHide: function financingSelectHide(option) {
      if (!this.financingTypeIds.includes(option.id)) return option;
    },
    intelletualPropertySelectedHide: function intelletualPropertySelectedHide(option) {
      if (!this.intelletualPropertyIds.includes(option.id)) return option;
    },
    patentsSelectedHide: function patentsSelectedHide(option) {
      if (!this.patentsTypIds.includes(option.id)) return option;
    },
    goBackToPageTopAndNextFieldToEnter: function goBackToPageTopAndNextFieldToEnter() {
      $(document).ready(function () {
        $(this).scrollTop(0);
        $('input, select, textarea, v-select').on('keydown', function (e) {
          if (e.keyCode == 13) {
            var focusable = $('input,select, textarea, v-select').filter(':visible');
            focusable.eq(focusable.index(this) + 1).focus();
            return false;
          }
        });
      });
    },
    loadComponentData: function loadComponentData() {
      this.isLoading = true;
      this.goBackToPageTopAndNextFieldToEnter();
      this.getFinancingTypeList();
      this.getIntelletualPropertyList();
      this.getPatentsTypeList();
      this.getStepwiseData();
    }
  },
  components: {
    loader: _Loader__WEBPACK_IMPORTED_MODULE_3__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyHistory.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/CompanyHistory.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/Questionnnaire */ "./resources/js/apis/Questionnnaire.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var _apis_Common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../apis/Common */ "./resources/js/apis/Common.js");


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





/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isLoading: false,
      oldFormedYear: "",
      oldFirstProductOrService: "",
      oldNumberOfMajorProductOrService: "",
      oldChangeDirectionOrStrategy: "",
      oldPreviousProduct: "",
      oldYearOfchange: "",
      form: {
        formedYear: "",
        firstProductOrService: "",
        numberOfMajorProductOrService: "",
        changeDirectionOrStrategy: "",
        previousProduct: "",
        yearOfchange: ""
      },
      CompanyHistoryFormData: {
        formedYear: "",
        firstProductOrService: "",
        numberOfMajorProductOrService: "",
        changeDirectionOrStrategy: "",
        previousProduct: "",
        yearOfchange: "",
        _token: ''
      },
      errors: []
    };
  },
  validations: {},
  methods: {
    changeField: function changeField() {
      if (this.form.formedYear !== this.oldFormedYear) {
        this.$emit("companyHistory", true);
      } else if (this.form.firstProductOrService !== this.oldFirstProductOrService) {
        this.$emit("companyHistory", true);
      } else if (this.form.numberOfMajorProductOrService !== this.oldNumberOfMajorProductOrService) {
        this.$emit("companyHistory", true);
      } else if (this.changeDirectionOrStrategy !== this.oldChangeDirectionOrStrategy) {
        this.$emit("companyHistory", true);
      } else if (this.form.previousProduct !== this.oldPreviousProduct) {
        this.$emit("companyHistory", true);
      } else if (this.form.yearOfchange !== this.oldYearOfchange) {
        this.$emit("companyHistory", true);
      } else {
        this.$emit("companyHistory", false);
      }
    },
    getStepwiseData: function () {
      var _getStepwiseData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__["default"].getCompanyQuestionnaireData(7).then(function (response) {
                  _this.isLoading = false;
                  var historyData = response.data.data;
                  _this.form.formedYear = historyData.company_histories != null ? historyData.company_histories.formed_year : '';
                  _this.oldFormedYear = historyData.company_histories != null ? historyData.company_histories.formed_year : '';
                  _this.form.firstProductOrService = historyData.company_histories != null ? historyData.company_histories.first_product_or_service : '';
                  _this.oldFirstProductOrService = historyData.company_histories != null ? historyData.company_histories.first_product_or_service : '';
                  _this.form.numberOfMajorProductOrService = historyData.company_histories != null ? historyData.company_histories.number_of_major_product : '';
                  _this.oldNumberOfMajorProductOrService = historyData.company_histories != null ? historyData.company_histories.number_of_major_product : '';
                  _this.form.changeDirectionOrStrategy = historyData.company_histories != null ? historyData.company_histories.change_direction_or_strategy : null;
                  _this.oldChangeDirectionOrStrategy = historyData.company_histories != null ? historyData.company_histories.change_direction_or_strategy : null;
                  _this.form.previousProduct = historyData.company_histories != null ? historyData.company_histories.previous_product : '';
                  _this.oldPreviousProduct = historyData.company_histories != null ? historyData.company_histories.previous_product : '';
                  _this.form.yearOfchange = historyData.company_histories != null && historyData.company_histories.change_year != null ? historyData.company_histories.change_year.toString() : '';
                  _this.oldYearOfchange = historyData.company_histories != null && historyData.company_histories.change_year != null ? historyData.company_histories.change_year.toString() : '';
                })["catch"](function (error) {
                  _this.isLoading = false;

                  if (error.response.status == 401) {
                    _this.$emit('logout');
                  } else {
                    toastr.error(error);
                  }
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getStepwiseData() {
        return _getStepwiseData.apply(this, arguments);
      }

      return getStepwiseData;
    }(),
    saveCompanyHistoryData: function saveCompanyHistoryData() {
      var _this$form$firstProdu,
          _this$form$numberOfMa,
          _this$form$changeDire,
          _this$form$previousPr,
          _this2 = this;

      this.$emit("companyHistory", false);
      this.errors = [];
      this.CompanyHistoryFormData.formedYear = this.form.formedYear ? new Date(this.form.formedYear).getFullYear() : "";
      this.CompanyHistoryFormData.firstProductOrService = (_this$form$firstProdu = this.form.firstProductOrService) !== null && _this$form$firstProdu !== void 0 ? _this$form$firstProdu : '';
      this.CompanyHistoryFormData.numberOfMajorProductOrService = (_this$form$numberOfMa = this.form.numberOfMajorProductOrService) !== null && _this$form$numberOfMa !== void 0 ? _this$form$numberOfMa : '';
      this.CompanyHistoryFormData.changeDirectionOrStrategy = (_this$form$changeDire = this.form.changeDirectionOrStrategy) !== null && _this$form$changeDire !== void 0 ? _this$form$changeDire : '';
      this.CompanyHistoryFormData.previousProduct = (_this$form$previousPr = this.form.previousProduct) !== null && _this$form$previousPr !== void 0 ? _this$form$previousPr : '';
      this.CompanyHistoryFormData.yearOfchange = this.form.yearOfchange ? new Date(this.form.yearOfchange).getFullYear() : "";
      this.CompanyHistoryFormData._token = document.querySelector('meta[name="csrf-token"]').content;
      this.isLoading = true;
      this.submitButtonDisabled = true;
      _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__["default"].updateCompanyQuestionnaireData(this.CompanyHistoryFormData, 7).then(function (response) {
        _this2.isLoading = false;
        _this2.submitButtonDisabled = false;
        toastr.success(response.data.success.message);

        _this2.$parent.$parent.$parent.getCompanyInfo();
      })["catch"](function (error) {
        _this2.isLoading = false;
        _this2.submitButtonDisabled = false;

        if (error.response.status === 422) {
          toastr.error(error.response.data.error.message);
        } else if (error.response.status == 401) {
          _this2.$emit('logout');
        } else {
          toastr.error(error);
        }
      });
    },
    goBackToPageTopAndNextFieldToEnter: function goBackToPageTopAndNextFieldToEnter() {
      $(document).ready(function () {
        $(this).scrollTop(0);
        $('input, select, textarea, v-select').on('keydown', function (e) {
          if (e.keyCode == 13) {
            var focusable = $('input,select, textarea, v-select').filter(':visible');
            focusable.eq(focusable.index(this) + 1).focus();
            return false;
          }
        });
      });
    },
    loadComponentData: function loadComponentData() {
      this.isLoading = true;
      this.goBackToPageTopAndNextFieldToEnter();
      this.getStepwiseData();
    }
  },
  computed: {
    years: function years() {
      var year = new Date().getFullYear();
      return Array.from({
        length: year - 1900
      }, function (value, index) {
        return 1901 + index;
      });
    }
  },
  created: function created() {},
  components: {
    loader: _Loader__WEBPACK_IMPORTED_MODULE_3__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a,
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyProfile.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/CompanyProfile.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/Questionnnaire */ "./resources/js/apis/Questionnnaire.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__);


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



 // window.addEventListener('beforeunload',
//     function (e) {
//
//         // Check if any of the input
//         // fields are filled
//         if (companyName !== '') {
//
//             // Cancel the event and
//             // show alert that the unsaved
//             // changes would be lost
//             e.preventDefault();
//             e.returnValue = '';
//         }
//     });

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      oldCompanyName: "",
      oldAddressOne: "",
      oldAddressTwo: "",
      oldCity: "",
      oldState: "",
      oldCountry: "",
      oldZip: "",
      oldCompanyIndustry: "",
      oldEmployeeNumber: "",
      OldDescription: "",
      oldEsgScore: [],
      OldMsciRating: "",
      oldCdpRating: "",
      oldIssRating: "",
      Oldsustainalytics: "",
      oldOwnedBusiness: [],
      isLoading: false,
      imageSrc: "",
      isDisabled: false,
      isUploading: false,
      croppedImageSrc: "",
      isDragging: false,
      dragCount: 0,
      haveState: 0,
      haveProvince: 0,
      form: {
        company_name: "",
        hq_address: "",
        hq_address2: "",
        hq_city: "",
        hq_state: "",
        hq_province: "",
        hq_country: "",
        hq_zip: "",
        company_description: "",
        company_industry: "",
        employee_number: "",
        esg_score: [],
        owned_business: [],
        msci_rating: '',
        iss_rating: '',
        cdp_rating: '',
        sustainalytics: ''
      },
      CompanyProfileFormData: {
        company_name: "",
        hq_address: "",
        hq_address2: "",
        hq_city: "",
        hq_state: "",
        have_state: "",
        hq_province: "",
        have_province: "",
        hq_country: "",
        hq_zip: "",
        company_description: "",
        company_industry: "",
        employee_number: "",
        esg_score: [],
        owned_business: [],
        msci_rating: '',
        iss_rating: '',
        cdp_rating: '',
        sustainalytics: ''
      },
      errors: [],
      countries: [],
      StateLists: [],
      industries: [],
      employeeNumberList: [],
      esgScoreList: [],
      esgScoreListIds: [],
      ownedBusinessList: [],
      ownedBusinessListIds: [],
      msciRatingList: [],
      sustainalyticsRatingList: [],
      issRatingList: [],
      cdpRatingList: [],
      IsEsgScoreNoSeleted: false,
      IsOwnBusinessNoSeleted: false,
      company_logo: ""
    };
  },
  validations: {
    form: {
      company_name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      hq_address: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      hq_city: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      hq_state: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      hq_zip: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      hq_country: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      hq_province: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      },
      company_industry: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"]
      }
    }
  },
  methods: {
    changeField: function changeField() {
      if (this.form.company_name !== this.oldCompanyName) {
        this.$emit("generalFormChanged", true);
      } else if (this.form.hq_address !== this.oldAddressOne) {
        this.$emit("generalFormChanged", true);
      } else if (this.form.hq_address2 !== this.oldAddressTwo) {
        this.$emit("generalFormChanged", true);
      } else if (this.form.hq_city !== this.oldCity) {
        this.$emit("generalFormChanged", true);
      } else if (this.form.hq_state !== this.oldState) {
        this.$emit("generalFormChanged", true);
      } else if (this.form.hq_zip !== this.oldZip) {
        this.$emit("generalFormChanged", true);
      } else if (this.form.company_industry !== this.oldCompanyIndustry) {
        this.$emit("generalFormChanged", true);
      } else if (this.form.employee_number !== this.oldEmployeeNumber) {
        this.$emit("generalFormChanged", true);
      } else if (this.form.company_description !== this.OldDescription) {
        this.$emit("generalFormChanged", true);
      } else if (this.form.msci_rating !== this.OldMsciRating) {
        this.$emit("generalFormChanged", true);
      } else if (this.form.cdp_rating !== this.oldCdpRating) {
        this.$emit("generalFormChanged", true);
      } else if (this.form.iss_rating !== this.oldIssRating) {
        this.$emit("generalFormChanged", true);
      } else if (this.form.sustainalytics !== this.Oldsustainalytics) {
        this.$emit("generalFormChanged", true);
      } else {
        this.$emit("generalFormChanged", false);
      }
    },
    filterMatchFirstCharacter: function filterMatchFirstCharacter(option, label, search) {
      return (label || '').toLowerCase().startsWith(search.toLowerCase());
    },
    getCountryList: function () {
      var _getCountryList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                axios.get('/api/country-list').then(function (response) {
                  _this.countries = response.data.data;
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

      function getCountryList() {
        return _getCountryList.apply(this, arguments);
      }

      return getCountryList;
    }(),
    getStates: function getStates(value) {
      var _this2 = this;

      axios.get('/api/get-state-list/' + value).then(function (response) {
        _this2.StateLists = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getStatesOrProvinceStatus: function getStatesOrProvinceStatus(value) {
      var _this3 = this;

      //this code is part of changeField function start
      if (this.form.hq_country !== this.oldCountry) {
        console.log(this.form.hq_country);
        this.$emit("generalFormChanged", true);
      } else {
        this.$emit("generalFormChanged", false);
      } //this code is part of changeField function end


      axios.get('/api/get-state-or-province-status/' + value).then(function (response) {
        _this3.haveState = response.data.data[0].have_state;
        _this3.haveProvince = response.data.data[0].have_province;
        _this3.StateLists = [];
        _this3.form.hq_state = "";

        if (_this3.haveState == 1) {
          _this3.getStates(value);
        } else {
          _this3.$v.form.hq_province.$reset();
        }
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getIndustries: function () {
      var _getIndustries = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this4 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get('/api/industry-list').then(function (response) {
                  _this4.industries = response.data.data;
                  _this4.isLoading = false;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getIndustries() {
        return _getIndustries.apply(this, arguments);
      }

      return getIndustries;
    }(),
    getEsgScoreList: function () {
      var _getEsgScoreList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _this5 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", axios.get('/api/get-esg-score-list').then(function (response) {
                  _this5.esgScoreList = response.data.data;
                })["catch"](function (error) {
                  return console.log(error);
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getEsgScoreList() {
        return _getEsgScoreList.apply(this, arguments);
      }

      return getEsgScoreList;
    }(),
    getOwnedBusinessList: function () {
      var _getOwnedBusinessList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _this6 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", axios.get('/api/get-owned-business-list').then(function (response) {
                  _this6.ownedBusinessList = response.data.data;
                })["catch"](function (error) {
                  return console.log(error);
                }));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getOwnedBusinessList() {
        return _getOwnedBusinessList.apply(this, arguments);
      }

      return getOwnedBusinessList;
    }(),
    getEsgRatingList: function () {
      var _getEsgRatingList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var _this7 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", axios.get('/api/get-esg-rating-list').then(function (response) {
                  _this7.msciRatingList = response.data.data.filter(function (elem) {
                    if (elem.parent_id == 1) return elem;
                  });
                  _this7.sustainalyticsRatingList = response.data.data.filter(function (elem2) {
                    if (elem2.parent_id == 2) return elem2;
                  });
                  _this7.issRatingList = response.data.data.filter(function (elem3) {
                    if (elem3.parent_id == 3) return elem3;
                  });
                  _this7.cdpRatingList = response.data.data.filter(function (elem4) {
                    if (elem4.parent_id == 4) return elem4;
                  });
                })["catch"](function (error) {
                  return console.log(error);
                }));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getEsgRatingList() {
        return _getEsgRatingList.apply(this, arguments);
      }

      return getEsgRatingList;
    }(),
    getEmployeeNumberList: function getEmployeeNumberList() {
      var _this8 = this;

      axios.get('/api/get-employee-number-list').then(function (response) {
        _this8.employeeNumberList = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getStepwiseData: function getStepwiseData() {
      var _this9 = this;

      _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__["default"].getCompanyQuestionnaireData(1).then(function (response) {
        var companyData = response.data.data;
        _this9.form.company_name = companyData.name;
        _this9.oldCompanyName = companyData.name;

        if (!!companyData.headquarters) {
          _this9.form.hq_address = companyData.headquarters.address.street_address_one;
          _this9.oldAddressOne = companyData.headquarters.address.street_address_one;
          _this9.form.hq_address2 = companyData.headquarters.address.street_address_two;
          _this9.oldAddressTwo = companyData.headquarters.address.street_address_two;
          _this9.form.hq_city = companyData.headquarters.address.city;
          _this9.oldCity = companyData.headquarters.address.city;
          _this9.form.hq_state = companyData.headquarters.address.state_id;
          _this9.oldState = companyData.headquarters.address.state_id;

          if (!!_this9.form.hq_state) {
            _this9.haveState = 1;

            _this9.getStates(companyData.headquarters.address.country_code);
          } else {
            _this9.haveProvince = 1;
            _this9.form.hq_province = companyData.headquarters.address.province;
          }

          _this9.form.hq_country = companyData.headquarters.address.country_code;
          _this9.oldCountry = companyData.headquarters.address.country_code;
          _this9.form.hq_zip = companyData.headquarters.address.zip;
          _this9.oldZip = companyData.headquarters.address.zip;
        }

        _this9.form.company_industry = companyData.industry_id;
        _this9.oldCompanyIndustry = companyData.industry_id;
        _this9.form.company_description = companyData.company_description;
        _this9.OldDescription = companyData.company_description;
        _this9.form.employee_number = companyData.numberof_employees;
        _this9.oldEmployeeNumber = companyData.numberof_employees;
        _this9.form.esg_score = companyData.esg_score;
        _this9.oldEsgScore = companyData.esg_score;
        _this9.company_logo = companyData.icon;
        _this9.croppedImageSrc = !!companyData.icon ? localStorage.getItem("storagePath") + '/company_icon/' + companyData.icon : "/images/image-placeholder-1.png";

        if (!!companyData.company_egs_score_rating) {
          _this9.form.msci_rating = companyData.company_egs_score_rating.msci_rating;
          _this9.OldMsciRating = companyData.company_egs_score_rating.msci_rating;
          _this9.form.cdp_rating = companyData.company_egs_score_rating.cdp_rating;
          _this9.oldCdpRating = companyData.company_egs_score_rating.cdp_rating;
          _this9.form.iss_rating = companyData.company_egs_score_rating.iss_rating;
          _this9.oldIssRating = companyData.company_egs_score_rating.iss_rating;
          _this9.form.sustainalytics = companyData.company_egs_score_rating.sustainalytics_rating;
        }

        _this9.showRelatedField(companyData.esg_score, 'esgScoreListIds');

        _this9.form.owned_business = companyData.owned_business;
        _this9.oldOwnedBusiness = companyData.owned_business;

        _this9.resetOwnBusinessField(companyData.owned_business, 'ownedBusinessListIds');

        _this9.isLoading = false;
      })["catch"](function (error) {
        _this9.isLoading = false;

        if (error.response.status == 401) {
          _this9.$emit('logout');
        } else {
          toastr.error(error);
        }
      });
    },
    saveCompanyProfileData: function saveCompanyProfileData() {
      var _this$form$hq_address,
          _this10 = this;

      this.$emit("generalFormChanged", false);
      this.$v.form.company_name.$touch();
      this.$v.form.hq_address.$touch();
      this.$v.form.hq_city.$touch();
      this.$v.form.hq_country.$touch();
      this.$v.form.hq_zip.$touch();
      this.$v.form.company_industry.$touch();

      if (this.$v.form.company_name.$invalid || this.$v.form.hq_address.$invalid || this.$v.form.hq_city.$invalid || this.$v.form.hq_country.$invalid || this.$v.form.hq_zip.$invalid || this.$v.form.company_industry.$invalid) {
        if (this.$v.form.company_name.$invalid) {
          this.$refs.company_name.focus();
        } else if (this.$v.form.hq_address.$invalid) {
          this.$refs.hq_address.focus();
        } else if (this.$v.form.hq_city.$invalid) {
          this.$refs.hq_city.focus();
        } else if (this.$v.form.hq_zip.$invalid) {
          this.$refs.hq_zip.focus();
        } else if (this.$v.form.company_industry.$invalid) {
          this.$refs.company_industry.$el.querySelector('input').focus();
        }

        return false;
      }

      if (this.haveState == 1) {
        this.$v.form.hq_state.$touch();

        if (this.$v.form.hq_state.$invalid) {
          this.$refs.hq_state.$el.querySelector('input').focus();
          return false;
        }
      }

      if (this.haveProvince == 1) {
        this.$v.form.hq_province.$touch();

        if (this.$v.form.hq_province.$invalid) {
          this.$refs.hq_province.focus();
          return false;
        }
      }

      this.errors = [];
      var esgScoreOptions = [],
          ownBusinesseOptions = [];

      for (var esgs = 0; esgs < this.form.esg_score.length; esgs++) {
        esgScoreOptions.push(this.form.esg_score[esgs].id);
      }

      for (var obs = 0; obs < this.form.owned_business.length; obs++) {
        ownBusinesseOptions.push(this.form.owned_business[obs].id);
      }

      this.CompanyProfileFormData.company_name = this.form.company_name;
      this.CompanyProfileFormData.hq_address = this.form.hq_address;
      this.CompanyProfileFormData.hq_address2 = (_this$form$hq_address = this.form.hq_address2) !== null && _this$form$hq_address !== void 0 ? _this$form$hq_address : '';
      this.CompanyProfileFormData.hq_city = this.form.hq_city;

      if (this.haveState == 1) {
        this.CompanyProfileFormData.hq_state = this.form.hq_state;
        this.CompanyProfileFormData.have_state = this.haveState;
        this.CompanyProfileFormData.hq_province = "";
        this.CompanyProfileFormData.have_province = 0;
      } else {
        this.CompanyProfileFormData.hq_province = this.form.hq_province;
        this.CompanyProfileFormData.have_province = this.haveProvince;
        this.CompanyProfileFormData.hq_state = "";
        this.CompanyProfileFormData.have_state = 0;
      }

      this.CompanyProfileFormData.hq_zip = this.form.hq_zip;
      this.CompanyProfileFormData.company_industry = this.form.company_industry;
      this.CompanyProfileFormData.company_description = this.form.company_description;
      this.CompanyProfileFormData.hq_country = this.form.hq_country;
      this.CompanyProfileFormData.employee_number = this.form.employee_number ? this.form.employee_number.id : '';
      this.CompanyProfileFormData.esg_score = esgScoreOptions.join(',');
      this.CompanyProfileFormData.owned_business = ownBusinesseOptions.join(',');

      if (esgScoreOptions.includes(1)) {
        this.CompanyProfileFormData.msci_rating = this.form.msci_rating ? this.form.msci_rating.id : '';
      }

      if (esgScoreOptions.includes(2)) {
        this.CompanyProfileFormData.sustainalytics = this.form.sustainalytics ? this.form.sustainalytics.id : '';
      }

      if (esgScoreOptions.includes(3)) {
        this.CompanyProfileFormData.cdp_rating = this.form.cdp_rating ? this.form.cdp_rating.id : '';
      }

      if (esgScoreOptions.includes(4)) {
        this.CompanyProfileFormData.iss_rating = this.form.iss_rating ? this.form.iss_rating.id : '';
      }

      if (esgScoreOptions.includes(5) || esgScoreOptions.length < 1) {
        this.form.msci_rating = this.CompanyProfileFormData.msci_rating = '';
        this.form.iss_rating = this.CompanyProfileFormData.iss_rating = '';
        this.form.cdp_rating = this.CompanyProfileFormData.cdp_rating = '';
        this.form.sustainalytics = this.CompanyProfileFormData.sustainalytics = '';
      }

      this.isLoading = true;
      this.submitButtonDisabled = true;
      _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__["default"].updateCompanyQuestionnaireData(this.CompanyProfileFormData, 1).then(function (response) {
        _this10.isLoading = false;
        _this10.submitButtonDisabled = false;
        toastr.success(response.data.success.message);
        /*Impact realtime Percentage Change in tab and banner*/

        _this10.$parent.$parent.$parent.getCompanyInfo();
      })["catch"](function (error) {
        _this10.isLoading = false;
        _this10.submitButtonDisabled = false;

        if (error.response.status === 422) {
          toastr.error(error.response.data.error.message);
        } else if (error.response.status == 401) {
          _this10.$emit('logout');
        } else {
          toastr.error(error);
        }
      });
    },
    goBackToPageTopAndNextFieldToEnter: function goBackToPageTopAndNextFieldToEnter() {
      $(document).ready(function () {
        $(this).scrollTop(0);
        $('input, select, textarea').on('keydown', function (e) {
          if (e.keyCode == 13) {
            var focusable = $('input,select, textarea').filter(':visible');
            focusable.eq(focusable.index(this) + 1).focus();
            return false;
          }
        });
      });
    },
    updateViewKey: function updateViewKey() {
      this.$emit("updateViewKey");
    },
    loadGtagEvent: function loadGtagEvent() {
      $(document).ready(function () {
        var form = document.querySelector('#companyProfileForm');
        var fields = {}; //console.log(form)

        var enterField = function enterField(name) {
          //console.log(name);
          //console.log(name.name);
          fields[name] = new Date().getTime();
        };

        var leaveField = function leaveField(e) {
          var timeSpent;
          var fieldName = e.target.name; //console.log(fieldName);

          var leaveType = e.type;

          if (fields.hasOwnProperty(fieldName)) {
            timeSpent = new Date().getTime() - fields[fieldName];

            if (timeSpent > 0 && timeSpent < 1800000) {
              window.dataLayer.push({
                'event': 'fieldTiming',
                'timingCategory': 'General Form Field Timing',
                'timingVariable': fieldName,
                'timingLabel': leaveType,
                'timingValue': timeSpent
              });
            }

            delete fields[fieldName];
          }
        };

        if (form) {
          form.addEventListener('focus', function (e) {
            enterField(e.target.name);
          }, true);
          form.addEventListener('blur', function (e) {
            leaveField(e);
          }, true);
          form.addEventListener('change', function (e) {
            leaveField(e);
          }, true);
        }
      });
    },
    showRelatedField: function showRelatedField(field, list) {
      //this code is part of changeField function start
      if (this.form.esg_score.length !== this.oldEsgScore.length) {
        this.$emit("generalFormChanged", true);
      } else {
        this.$emit("generalFormChanged", false);
      } //this code is part of changeField function end


      this[list] = Object.keys(field).map(function (key) {
        return field[key].id;
      });

      if (!this.IsEsgScoreNoSeleted && field.find(function (o) {
        return o.tag === "no";
      })) {
        this.IsEsgScoreNoSeleted = true;
        this.form.esg_score = [{
          name: "No, or I don't know",
          id: 5,
          tag: "no"
        }];
        this.esgScoreListIds = [5];
      } else if (this.IsEsgScoreNoSeleted && field.find(function (o) {
        return o.tag === "no";
      })) {
        this.IsEsgScoreNoSeleted = false;

        if (this.esgScoreListIds.length == 2) {
          this.form.esg_score = field.slice(1);
          this.esgScoreListIds.splice(0, 1);
        } else {
          this.form.esg_score = [{
            name: "No, or I don't know",
            id: 5,
            tag: "no"
          }];
          this.esgScoreListIds = [5]; // this.form.msci_rating = this.CompanyProfileFormData.msci_rating = ''
          // this.form.iss_rating = this.CompanyProfileFormData.iss_rating = ''
          // this.form.cdp_rating = this.CompanyProfileFormData.cdp_rating = ''
          // this.form.sustainalytics = this.CompanyProfileFormData.sustainalytics = ''
        }
      }
    },
    resetOwnBusinessField: function resetOwnBusinessField(field, list) {
      //this code is part of changeField function start
      if (this.form.owned_business.length !== this.oldOwnedBusiness.length) {
        this.$emit("generalFormChanged", true);
      } else {
        this.$emit("generalFormChanged", false);
      } //this code is part of changeField function end


      this[list] = Object.keys(field).map(function (key) {
        return field[key].id;
      });

      if (!this.IsOwnBusinessNoSeleted && field.find(function (o) {
        return o.tag === "no";
      })) {
        this.IsOwnBusinessNoSeleted = true;
        this.form.owned_business = [{
          name: "No, My Business Does Not Have a Diversity Business Classification.",
          id: 8,
          tag: "no"
        }];
        this.ownedBusinessListIds = [8];
      } else if (this.IsOwnBusinessNoSeleted && field.find(function (o) {
        return o.tag === "no";
      })) {
        this.IsOwnBusinessNoSeleted = false;

        if (this.ownedBusinessListIds.length == 2) {
          this.form.owned_business = field.slice(1);
          this.ownedBusinessListIds.splice(0, 1);
        } else {
          this.form.owned_business = [{
            name: "No, My Business Does Not Have a Diversity Business Classification.",
            id: 8,
            tag: "no"
          }];
          this.ownedBusinessListIds = [8];
        }
      }
    },
    esgScoreSelectedHide: function esgScoreSelectedHide(option) {
      if (!this.esgScoreListIds.includes(option.id)) return option;
    },
    ownBusinessSelectedHide: function ownBusinessSelectedHide(option) {
      if (!this.ownedBusinessListIds.includes(option.id)) return option;
    },
    showImageCropperModal: function showImageCropperModal() {
      this.$refs['image-cropper-modal'].show();
    },
    closeImageCropperModal: function closeImageCropperModal() {
      var vi = this;

      if (this.imageSrc) {
        $.confirm({
          title: 'Discard changes',
          content: "Are you sure you want to discard changes you made?",
          columnClass: 'medium',
          type: 'blue',
          typeAnimated: true,
          buttons: {
            Cancel: function Cancel() {},
            Discard: function Discard() {
              vi.$refs['image-cropper-modal'].hide();
              vi.imageSrc = "";
              vi.isDisabled = false;
              vi.isUploading = false;
            }
          }
        }, this);
      } else {
        this.$refs['image-cropper-modal'].hide();
      }
    },
    setImage: function setImage(file) {
      var _this11 = this;

      // const file = e.target.files[0]
      if (!!file[0]) {
        if (!file[0].type.includes("image/")) {
          alert("Please select an image file");
          return;
        }

        if (typeof FileReader === "function") {
          var reader = new FileReader();

          reader.onload = function (event) {
            _this11.imageSrc = event.target.result; // Rebuild cropperjs with the updated source

            _this11.$refs.imageCropper.cropper.replace(event.target.result);
          };

          reader.readAsDataURL(file[0]);
        } else {
          alert("Sorry, FileReader API not supported");
        }
      }
    },
    imageRotate: function imageRotate() {
      // Get image data for post processing, e.g. upload or setting image src
      this.$refs.imageCropper.cropper.rotate(90);
    },
    uploadImage: function uploadImage() {
      this.isDisabled = true;
      this.isUploading = true;
      var vi = this;
      this.$refs.imageCropper.cropper.getCroppedCanvas().toBlob(function (blob) {
        var formData = new FormData(); // Add name for our image

        formData.append("name", "image-name-" + new Date().getTime()); // Append image file

        formData.append("file", blob);
        _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__["default"].companyIconUpload(formData).then(function (response) {
          vi.croppedImageSrc = vi.$refs.imageCropper.cropper.getCroppedCanvas().toDataURL();
          vi.$refs['image-cropper-modal'].hide();
          vi.isDisabled = false;
          vi.isUploading = false;
          vi.companyImage = response.data.data.company_icon;
          vi.company_logo = response.data.data.company_icon;
        })["catch"](function (error) {
          if (error.response.status == 401) {
            vi.$emit("logout");
          } else {
            toastr.error(error);
          }
        });
      });
    },
    OnDragEnter: function OnDragEnter(e) {
      e.preventDefault();
      this.dragCount++;
      this.isDragging = true;
      return false;
    },
    OnDragLeave: function OnDragLeave(e) {
      e.preventDefault();
      this.dragCount--;
      if (this.dragCount <= 0) this.isDragging = false;
    },
    onInputChange: function onInputChange(e) {
      this.setImage(e.target.files);
    },
    onDrop: function onDrop(e) {
      e.preventDefault();
      e.stopPropagation();
      this.isDragging = false;
      this.setImage(e.dataTransfer.files); // this.addFile(e.dataTransfer.files);
    }
  },
  created: function () {
    var _created = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              this.isLoading = true;
              this.goBackToPageTopAndNextFieldToEnter();
              this.getEmployeeNumberList();
              _context6.next = 5;
              return this.getCountryList();

            case 5:
              _context6.next = 7;
              return this.getEsgScoreList();

            case 7:
              _context6.next = 9;
              return this.getEsgRatingList();

            case 9:
              _context6.next = 11;
              return this.getOwnedBusinessList();

            case 11:
              // await this.getStates();
              this.getStepwiseData();
              this.loadGtagEvent();
              this.getIndustries();

            case 14:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  components: {
    ImageCropper: function ImageCropper() {
      return Promise.all(/*! import() */[__webpack_require__.e(12), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! ../ImageCropper.vue */ "./resources/js/components/ImageCropper.vue"));
    },
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a,
    loader: _Loader__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanySocial.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/CompanySocial.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/Questionnnaire */ "./resources/js/apis/Questionnnaire.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__);


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





var customValidate = function customValidate(value, vm) {
  if (value != "" && !!vm.url_validate_string) {
    return value.includes(vm.url_validate_string);
  } else {
    return true;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isLoading: false,
      oldSocialMediaPlatform: "",
      form: {
        socialMediaPlatform: [],
        non_listed_social_media: [],
        platformUrl: []
      },
      CompanySocialFormData: {
        socialMediaPlatform: [],
        non_listed_social_media: ''
      },
      socialMediaPlatforms: [],
      listOfSocialPlatformId: []
    };
  },
  validations: {
    socialMediaPlatforms: {
      $each: {
        value: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"],
          customValidate: customValidate
        }
      }
    }
  },
  methods: {
    getSocialMediaPlatformList: function () {
      var _getSocialMediaPlatformList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__["default"].getSocialMediaPlatformData().then(function (response) {
                  _this.socialMediaPlatforms = response.data.data;
                })["catch"](function (error) {
                  return console.log(error);
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getSocialMediaPlatformList() {
        return _getSocialMediaPlatformList.apply(this, arguments);
      }

      return getSocialMediaPlatformList;
    }(),
    addMoreSocialMedia: function addMoreSocialMedia() {
      this.form.non_listed_social_media.push({
        name: ''
      });
    },
    removeMoreSocialMedia: function removeMoreSocialMedia(index) {
      this.form.non_listed_social_media.splice(index, 1);
    },
    getStepwiseData: function getStepwiseData() {
      var _this2 = this;

      _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__["default"].getCompanyQuestionnaireData(5).then(function (response) {
        var socialData = response.data.data;
        _this2.form.socialMediaPlatform = socialData.company_social_media_platform;
        _this2.oldSocialMediaPlatform = socialData.company_social_media_platform;

        _this2.showRelatedSocialField(socialData.company_social_media_platform, 'listOfSocialPlatformId');

        _this2.isLoading = false;
      })["catch"](function (error) {
        _this2.isLoading = false;

        if (error.response.status == 401) {
          _this2.$emit('logout');
        } else {
          toastr.error(error);
        }
      });
    },
    saveCompanySocialData: function saveCompanySocialData() {
      var _this3 = this;

      var insertDataArray = [];
      this.$v.socialMediaPlatforms.$touch();

      for (var property in this.socialMediaPlatforms) {
        if (this.listOfSocialPlatformId.includes(this.socialMediaPlatforms[property].id) && this.$v.socialMediaPlatforms.$each[property].$invalid) {
          $('#platform_field_' + this.socialMediaPlatforms[property].id).focus();
          return false;
        }

        if (this.listOfSocialPlatformId.includes(this.socialMediaPlatforms[property].id)) {
          insertDataArray.push([this.$v.socialMediaPlatforms.$each[property].$model.id, this.$v.socialMediaPlatforms.$each[property].$model.value]);
        }
      }

      this.isLoading = true;
      this.CompanySocialFormData.socialMediaPlatform = insertDataArray;
      _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__["default"].updateCompanyQuestionnaireData(this.CompanySocialFormData, 5).then(function (response) {
        _this3.isLoading = false;
        _this3.submitButtonDisabled = false;
        toastr.success(response.data.success.message);
        /*Impact realtime Percentage Change in tab and banner*/

        _this3.$parent.$parent.$parent.getCompanyInfo();
      })["catch"](function (error) {
        _this3.isLoading = false;
        _this3.submitButtonDisabled = false;

        if (error.response.status === 422) {
          toastr.error(error.response.data.error.message);
        } else if (error.response.status == 401) {
          _this3.$emit('logout');
        } else {
          toastr.error(error);
        }
      });
    },
    showRelatedSocialField: function showRelatedSocialField(field, list, event) {
      //this code is part of changeField function start
      if (this.form.socialMediaPlatform !== this.oldSocialMediaPlatform) {
        this.$emit("companySocial", true);
      } else {
        this.$emit("companySocial", false);
      } //this code is part of changeField function end


      this[list] = Object.keys(field).map(function (key) {
        return field[key].id;
      });
    },
    removePlatform: function removePlatform(id) {
      this.form.socialMediaPlatform = this.form.socialMediaPlatform.filter(function (elem) {
        if (elem.id != id) return elem;
      });
      this.showRelatedSocialField(this.form.socialMediaPlatform, 'listOfSocialPlatformId');
    },
    goBackToPageTopAndNextFieldToEnter: function goBackToPageTopAndNextFieldToEnter() {
      $(document).ready(function () {
        $(this).scrollTop(0);
        $('input, select, textarea').on('keydown', function (e) {
          if (e.keyCode == 13) {
            var focusable = $('input,select, textarea').filter(':visible');
            focusable.eq(focusable.index(this) + 1).focus();
            return false;
          }
        });
      });
    },
    selectHide: function selectHide(option) {
      // console.log(this.listOfSocialPlatformId)
      if (!this.listOfSocialPlatformId.includes(option.id)) return option;
    },
    loadComponentData: function () {
      var _loadComponentData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.isLoading = true;
                this.goBackToPageTopAndNextFieldToEnter();
                _context2.next = 4;
                return this.getSocialMediaPlatformList();

              case 4:
                this.getStepwiseData();

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadComponentData() {
        return _loadComponentData.apply(this, arguments);
      }

      return loadComponentData;
    }()
  },
  components: {
    loader: _Loader__WEBPACK_IMPORTED_MODULE_3__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyTaxonomy.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/CompanyTaxonomy.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apis_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apis/User */ "./resources/js/apis/User.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apis_Common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../apis/Common */ "./resources/js/apis/Common.js");
/* harmony import */ var _CompanyNodeCollapses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CompanyNodeCollapses */ "./resources/js/components/CompanyNodeCollapses.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




 // import ExistingTaxonomyNodeCollapses from "./ExistingTaxonomyNodeCollapses";


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      multipleNodes: [],
      haveAddedNode: false,
      enableEditButton: true
    };
  },
  props: [],
  validations: {},
  watch: {
    form: {
      handler: function handler() {
        this.$emit('nodeData', [this.form.industry, this.form.sector, this.form.subSector, this.form.group, this.form.subGroup, this.form.echelon, this.form.subEchelon, this.form.tier, this.form.subTier, this.form.layer, this.form.subLayer, this.form.deck, this.form.subDeck, this.form.floor, this.form.subFloor, this.form.basement, this.form.subBasement, this.form.mine, this.form.subMine]);
      },
      deep: true
    }
  },
  methods: {
    getHierarchyInfo: function getHierarchyInfo(id, industry_id) {
      var _this = this;

      axios.get('/api/get-multiple-node?categorization_id=' + id + '&industry_id=' + industry_id + '&user_info=' + localStorage.getItem("userInfo")).then(function (response) {
        _this.multipleNodes = response.data.data;

        if (_this.multipleNodes.length > 0) {
          _this.haveAddedNode = true;
        }
        /*console.log(response.data.data.industry.id);
        this.form.industry = response.data.data.industry;
        this.getSectors(response.data.data.industry, 'Load');
        this.form.sector = response.data.data.sector;
        if (response.data.success) {
            toastr.success(response.data.success.message)
        }*/

      })["catch"](function (error) {
        if (error.response.status === 422) {
          toastr.error(error.response.data.error.message);
        } else if (error.response.status == 401) {
          _this.$emit('logout');
        } else {
          toastr.error(error);
        }
      });
    },
    goBackToPageTop: function goBackToPageTop() {
      $(document).ready(function () {
        $(this).scrollTop(0);
      });
    },
    getCategorizationId: function getCategorizationId(Id) {
      this.$emit("getCategorizationId", Id);
    }
  },
  created: function created() {
    this.nodeColor = _apis_Common__WEBPACK_IMPORTED_MODULE_4__["default"].hierarchyNodeColor;
    this.isLoading = true; // this.getHierarchyInfo('', '');
  },
  components: {
    // ExistingTaxonomyNodeCollapses,
    CompanyNodeCollapses: _CompanyNodeCollapses__WEBPACK_IMPORTED_MODULE_5__["default"],
    loader: _Loader__WEBPACK_IMPORTED_MODULE_0__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyTypes.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/CompanyTypes.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/Questionnnaire */ "./resources/js/apis/Questionnnaire.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__);


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




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isLoading: false,
      oldDomicileCountry: "",
      oldEntityType: "",
      oldTradingAndReportingStatus: "",
      oldPublicPrivateReportingStatus: "",
      oldShareholderNumber: "",
      oldBaseCurrency: "",
      oldIsin: "",
      oldCusip: "",
      oldConglomerate: "",
      oldSubsidiaryName: [],
      form: {
        domicile_country: "",
        entity_type: "",
        trading_and_reporting_status: "",
        public_private_reporting_status: "",
        base_currency: "",
        publicly_traded_company: "",
        exchange_traded_on: "",
        shareholder_number: "",
        ticker_symbol: "",
        isin: "",
        cusip: "",
        conglomerate: "",
        subsidiary_name: []
      },
      CompanyTypesFormData: {
        domicile_country: "",
        entity_type: "",
        trading_and_reporting_status: "",
        trading_and_reporting_status_tag: "",
        public_private_reporting_status: "",
        base_currency: "",
        publicly_traded_company: "",
        exchange_traded_on: "",
        shareholder_number: "",
        ticker_symbol: "",
        isin: "",
        cusip: "",
        conglomerate: "",
        subsidiary_name: []
      },
      errors: [],
      countries: [],
      entityTypes: [],
      shareholderNumberList: [],
      reporting_status_label: "",
      privatePublicCompanyTypes: [],
      baseCurrencyList: [],
      publiclyTradedCompanyTypeList: [],
      exchangeTradedList: [],
      tradingAndReportingStatusList: [],
      exchangeTradedIds: []
    };
  },
  methods: {
    changeField: function changeField() {
      if (this.form.entity_type !== this.oldEntityType) {
        this.$emit("companyStructureFormChanged", true);
      } else if (this.form.shareholder_number !== this.oldShareholderNumber) {
        this.$emit("companyStructureFormChanged", true);
      } else if (this.form.base_currency !== this.oldBaseCurrency) {
        this.$emit("companyStructureFormChanged", true);
      } else if (this.form.isin !== this.oldIsin) {
        this.$emit("companyStructureFormChanged", true);
      } else if (this.form.cusip !== this.oldCusip) {
        this.$emit("companyStructureFormChanged", true);
      } else if (this.form.subsidiary_name.length !== this.oldSubsidiaryName.length) {
        this.$emit("companyStructureFormChanged", true);
      } else {
        this.$emit("companyStructureFormChanged", false);
      }
    },
    getCountryList: function () {
      var _getCountryList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                axios.get('/api/country-list').then(function (response) {
                  _this.countries = response.data.data;
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

      function getCountryList() {
        return _getCountryList.apply(this, arguments);
      }

      return getCountryList;
    }(),
    getEntityTypeList: function () {
      var _getEntityTypeList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(value) {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                //this code is part of changeField function start
                if (this.form.domicile_country !== this.oldDomicileCountry) {
                  this.$emit("companyStructureFormChanged", true);
                } else {
                  this.$emit("companyStructureFormChanged", false);
                } //this code is part of changeField function end


                this.form.entity_type = "";
                return _context2.abrupt("return", axios.get('/api/get-entity-type/' + value).then(function (response) {
                  _this2.entityTypes = response.data.data;
                })["catch"](function (error) {
                  return console.log(error);
                }));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getEntityTypeList(_x) {
        return _getEntityTypeList.apply(this, arguments);
      }

      return getEntityTypeList;
    }(),
    getShareholderNumberList: function () {
      var _getShareholderNumberList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _this3 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", axios.get('/api/get-shareholder-number-list').then(function (response) {
                  _this3.shareholderNumberList = response.data.data;
                })["catch"](function (error) {
                  return console.log(error);
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getShareholderNumberList() {
        return _getShareholderNumberList.apply(this, arguments);
      }

      return getShareholderNumberList;
    }(),
    getPrivatePublicCompanyType: function getPrivatePublicCompanyType() {
      var _this4 = this;

      axios.get('/api/get-private-public-company-type').then(function (response) {
        _this4.privatePublicCompanyTypes = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getBaseCurrencyList: function getBaseCurrencyList() {
      var _this5 = this;

      axios.get('/api/get-base-currency-list').then(function (response) {
        _this5.baseCurrencyList = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getTradingAndReportingStatusList: function () {
      var _getTradingAndReportingStatusList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(value, type) {
        var _this6 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                //this code is part of changeField function start
                if (this.form.trading_and_reporting_status !== this.oldTradingAndReportingStatus) {
                  this.$emit("companyStructureFormChanged", true);
                } else {
                  this.$emit("companyStructureFormChanged", false);
                } //this code is part of changeField function end


                if (!(value != null)) {
                  _context4.next = 5;
                  break;
                }

                if ('public' == value.tag) {
                  this.reporting_status_label = "Public Trading OR  Reporting Status";
                } else if ('private' == value.tag) {
                  this.reporting_status_label = "Private Trading and Reporting Status";
                }

                _context4.next = 5;
                return axios.get('/api/get-trading-and-reporting-status-list/' + value.tag).then(function (response) {
                  _this6.tradingAndReportingStatusList = response.data.data;

                  if (type == 'refresh') {
                    _this6.form.public_private_reporting_status = 0;
                    _this6.form.publicly_traded_company = 0;
                    _this6.form.ticker_symbol = "";
                    _this6.form.exchange_traded_on = "";
                  }

                  _this6.isLoading = false;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 5:
                this.goBackToPageTopAndNextFieldToEnter();

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getTradingAndReportingStatusList(_x2, _x3) {
        return _getTradingAndReportingStatusList.apply(this, arguments);
      }

      return getTradingAndReportingStatusList;
    }(),
    resetPubliclyTreadedCompany: function resetPubliclyTreadedCompany() {
      //this code is part of changeField function start
      if (this.form.public_private_reporting_status !== this.oldPublicPrivateReportingStatus) {
        this.$emit("companyStructureFormChanged", true);
      } else {
        this.$emit("companyStructureFormChanged", false);
      } //this code is part of changeField function end


      this.form.publicly_traded_company = "";
      this.form.ticker_symbol = "";
      this.form.exchange_traded_on = "";
    },
    getPubliclyTradedCompanyTypeList: function getPubliclyTradedCompanyTypeList() {
      var _this7 = this;

      axios.get('/api/get-publicly-traded-company-type-list').then(function (response) {
        _this7.publiclyTradedCompanyTypeList = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getExchangeTradedList: function getExchangeTradedList() {
      var _this8 = this;

      axios.get('/api/get-exchange-traded-list').then(function (response) {
        _this8.exchangeTradedList = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    resetDomesticOrInternationalExchangeTradedOn: function resetDomesticOrInternationalExchangeTradedOn() {
      this.form.exchange_traded_on = "";
    },
    resetSubsidiaryData: function resetSubsidiaryData(value) {
      if (this.form.conglomerate !== this.oldConglomerate) {
        this.$emit("companyStructureFormChanged", true);
      } else {
        this.$emit("companyStructureFormChanged", false);
      }

      if (value == 0) {
        this.form.subsidiary_name = [];
      }
    },
    getStepwiseData: function () {
      var _getStepwiseData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var _this9 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__["default"].getCompanyQuestionnaireData(3).then(function (response) {
                  _this9.isLoading = false;
                  var typesData = response.data.data;
                  _this9.form.domicile_country = typesData.domicile_country;
                  _this9.oldDomicileCountry = typesData.domicile_country;

                  _this9.getEntityTypeList(typesData.domicile_country);

                  _this9.form.entity_type = typesData.entity_type;
                  _this9.oldEntityType = typesData.entity_type;
                  _this9.form.trading_and_reporting_status = typesData.public_private_type;
                  _this9.oldTradingAndReportingStatus = typesData.public_private_type;
                  _this9.form.base_currency = typesData.base_currency;
                  _this9.oldBaseCurrency = typesData.base_currency;
                  _this9.form.publicly_traded_company = typesData.publicly_traded_type;
                  _this9.form.public_private_reporting_status = typesData.trading_status;
                  _this9.oldPublicPrivateReportingStatus = typesData.trading_status;
                  _this9.form.exchange_traded_on = typesData.exchange_traded_on;
                  _this9.form.shareholder_number = typesData.numberof_shareholders;
                  _this9.oldShareholderNumber = typesData.numberof_shareholders;
                  _this9.form.ticker_symbol = typesData.ticker_symbol;
                  _this9.form.isin = typesData.isin;
                  _this9.oldIsin = typesData.isin;
                  _this9.form.cusip = typesData.cusip;
                  _this9.oldCusip = typesData.cusip;
                  _this9.form.conglomerate = typesData.conglomerate;
                  _this9.oldConglomerate = typesData.conglomerate;
                  _this9.form.subsidiary_name = Object.keys(typesData.conglomerate_subsidiary).map(function (key) {
                    return typesData.conglomerate_subsidiary[key].name;
                  });
                  _this9.oldSubsidiaryName = Object.keys(typesData.conglomerate_subsidiary).map(function (key) {
                    return typesData.conglomerate_subsidiary[key].name;
                  });

                  _this9.showRelatedField(typesData.exchange_traded_on);

                  _this9.getTradingAndReportingStatusList(typesData.public_private_type, 'load');
                })["catch"](function (error) {
                  _this9.isLoading = false;

                  if (error.response.status == 401) {
                    _this9.$emit('logout');
                  } else {
                    toastr.error(error);
                  }
                });

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getStepwiseData() {
        return _getStepwiseData.apply(this, arguments);
      }

      return getStepwiseData;
    }(),
    saveCompanyTypesData: function saveCompanyTypesData() {
      var _this$form$ticker_sym,
          _this10 = this;

      this.$emit("companyStructureFormChanged", false);
      /*this.$v.form.entity_type.$touch();
      this.$v.form.trading_and_reporting_status.$touch();
      this.$v.form.base_currency.$touch();
      this.$v.form.shareholder_number.$touch();
      if (this.form.trading_and_reporting_status.tag == 'public') {
          this.$v.form.ticker_symbol.$touch();
      }
      this.$v.form.conglomerate.$touch();
      if (this.$v.form.entity_type.$invalid || this.$v.form.trading_and_reporting_status.$invalid || this.$v.form.base_currency.$invalid || this.$v.form.shareholder_number.$invalid
          || (this.$v.form.ticker_symbol.$invalid && (this.form.trading_and_reporting_status != null) ? this.form.trading_and_reporting_status.tag == 'public' : '' && (this.form.public_private_reporting_status.id == 1 || this.form.public_private_reporting_status.id == 2))
          || this.$v.form.conglomerate.$invalid) {
           if (this.$v.form.entity_type.$invalid) {
              this.$refs.entity_type.$el.querySelector('input').focus();
          } else if (this.$v.form.trading_and_reporting_status.$invalid) {
              this.$refs.trading_and_reporting_status.$el.querySelector('input').focus();
          } else if (this.$v.form.shareholder_number.$invalid) {
              this.$refs.shareholder_number.$el.querySelector('input').focus();
          } else if (this.$v.form.ticker_symbol.$invalid && (this.form.trading_and_reporting_status != null) ? this.form.trading_and_reporting_status.tag == 'public':'') {
              this.$refs.ticker_symbol.focus();
          } else if (this.$v.form.base_currency.$invalid) {
              this.$refs.base_currency.$el.querySelector('input').focus();
          } else if (this.$v.form.conglomerate.$invalid) {
              this.$refs.conglomerate.$el.querySelector('input').focus();
          }
          return false;
      }*/

      this.errors = [];
      var exchangeTradedOptions = [];

      for (var extron = 0; extron < this.form.exchange_traded_on.length; extron++) {
        exchangeTradedOptions.push(this.form.exchange_traded_on[extron].id);
      }

      this.CompanyTypesFormData.domicile_country = this.form.domicile_country ? this.form.domicile_country : '';
      this.CompanyTypesFormData.entity_type = this.form.entity_type ? this.form.entity_type : '';
      this.CompanyTypesFormData.trading_and_reporting_status = this.form.trading_and_reporting_status ? this.form.trading_and_reporting_status.id : '';
      this.CompanyTypesFormData.trading_and_reporting_status_tag = this.form.trading_and_reporting_status ? this.form.trading_and_reporting_status.tag : '';
      this.CompanyTypesFormData.base_currency = this.form.base_currency ? this.form.base_currency.id : '';
      this.CompanyTypesFormData.shareholder_number = this.form.base_currency ? this.form.shareholder_number.id : '';
      this.CompanyTypesFormData.ticker_symbol = (_this$form$ticker_sym = this.form.ticker_symbol) !== null && _this$form$ticker_sym !== void 0 ? _this$form$ticker_sym : '';
      this.CompanyTypesFormData.isin = this.form.isin;
      this.CompanyTypesFormData.cusip = this.form.cusip;
      this.CompanyTypesFormData.conglomerate = this.form.conglomerate;
      this.CompanyTypesFormData.subsidiary_name = JSON.stringify(this.form.subsidiary_name);
      this.CompanyTypesFormData.publicly_traded_company = this.form.publicly_traded_company ? this.form.publicly_traded_company.id : '';
      this.CompanyTypesFormData.public_private_reporting_status = this.form.public_private_reporting_status ? this.form.public_private_reporting_status.id : '';
      this.CompanyTypesFormData.exchange_traded_on = exchangeTradedOptions.join(',');
      this.isLoading = true;
      this.submitButtonDisabled = true;
      _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__["default"].updateCompanyQuestionnaireData(this.CompanyTypesFormData, 3).then(function (response) {
        _this10.isLoading = false;
        _this10.submitButtonDisabled = false;
        toastr.success(response.data.success.message);
        /*Impact realtime Percentage Change in tab and banner*/

        _this10.$parent.$parent.$parent.getCompanyInfo();
      })["catch"](function (error) {
        _this10.isLoading = false;
        _this10.submitButtonDisabled = false;

        if (error.response.status === 422) {
          toastr.error(error.response.data.error.message);
        } else if (error.response.status == 401) {
          _this10.$emit('logout');
        } else {
          toastr.error(error);
        }
      });
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
    },
    showRelatedField: function showRelatedField(field) {
      this.exchangeTradedIds = Object.keys(field).map(function (key) {
        return field[key].id;
      });
    },
    selectHide: function selectHide(option) {
      if (!this.exchangeTradedIds.includes(option.id)) return option;
    },
    loadComponentData: function () {
      var _loadComponentData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                this.isLoading = true;
                this.goBackToPageTopAndNextFieldToEnter();
                this.getPrivatePublicCompanyType();
                this.getBaseCurrencyList();
                _context6.next = 6;
                return this.getCountryList();

              case 6:
                // await this.getEntityTypeList();
                this.getPubliclyTradedCompanyTypeList();
                this.getExchangeTradedList();
                _context6.next = 10;
                return this.getShareholderNumberList();

              case 10:
                this.getStepwiseData();

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function loadComponentData() {
        return _loadComponentData.apply(this, arguments);
      }

      return loadComponentData;
    }()
  },
  components: {
    loader: _Loader__WEBPACK_IMPORTED_MODULE_3__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CorporateActions.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/CorporateActions.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/Questionnnaire */ "./resources/js/apis/Questionnnaire.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var _apis_Common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../apis/Common */ "./resources/js/apis/Common.js");


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





/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isLoading: false,
      oldAcquisitionsMade: "",
      oldSpinOffMade: "",
      oldDividend: "",
      oldAcquisitions: [],
      oldSpinOff: [],
      form: {
        acquisitionsMade: "",
        acquisitions: [],
        spinOffMade: "",
        spinOff: [],
        dividend: ""
      },
      CompanyCorporateActionFormData: {
        acquisitionsMade: "",
        acquisitions: [],
        spinOffMade: "",
        spinOff: [],
        dividend: "",
        _token: ''
      },
      errors: []
    };
  },
  validations: {},
  methods: {
    changeField: function changeField() {
      if (this.form.dividend !== this.oldDividend) {
        this.$emit("corporateAction", true);
      } else if (this.form.acquisitions.length !== this.oldAcquisitions.length) {
        this.$emit("corporateAction", true);
      } else if (this.form.spinOff.length !== this.oldSpinOff.length) {
        this.$emit("corporateAction", true);
      } else {
        this.$emit("corporateAction", false);
      }
    },
    getStepwiseData: function () {
      var _getStepwiseData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__["default"].getCompanyQuestionnaireData(8).then(function (response) {
                  _this.isLoading = false;
                  var CorporateActionData = response.data.data;
                  _this.form.acquisitionsMade = !!CorporateActionData ? CorporateActionData.acquisitions_made : null;
                  _this.oldAcquisitionsMade = !!CorporateActionData ? CorporateActionData.acquisitions_made : null;
                  _this.form.spinOffMade = !!CorporateActionData ? CorporateActionData.spin_off : null;
                  _this.oldSpinOffMade = !!CorporateActionData ? CorporateActionData.spin_off : null;
                  _this.form.dividend = !!CorporateActionData ? CorporateActionData.dividend : null;
                  _this.oldDividend = !!CorporateActionData ? CorporateActionData.dividend : null;
                  _this.form.acquisitions = !!CorporateActionData ? CorporateActionData.acquisitions : [];
                  _this.oldAcquisitions = Object.keys(CorporateActionData.acquisitions).map(function (key) {
                    return CorporateActionData.acquisitions[key].name;
                  });
                  _this.form.spinOff = !!CorporateActionData ? CorporateActionData.spin : [];
                  _this.oldSpinOff = Object.keys(CorporateActionData.spin).map(function (key) {
                    return CorporateActionData.spin[key].name;
                  });

                  if (!!CorporateActionData && CorporateActionData.acquisitions.length == 0) {
                    _this.addMoreAcquisition();
                  }

                  if (!!CorporateActionData && CorporateActionData.spin.length == 0) {
                    _this.addMoreSpinOff();
                  }
                })["catch"](function (error) {
                  _this.isLoading = false;

                  if (error.response.status === 401) {
                    _this.$emit('logout');
                  } else {
                    console.log(error);
                  }
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getStepwiseData() {
        return _getStepwiseData.apply(this, arguments);
      }

      return getStepwiseData;
    }(),
    saveCompanyCorporateActionData: function saveCompanyCorporateActionData() {
      var _this$form$acquisitio,
          _this$form$spinOffMad,
          _this$form$dividend,
          _this2 = this;

      this.errors = [];
      this.CompanyCorporateActionFormData.acquisitionsMade = (_this$form$acquisitio = this.form.acquisitionsMade) !== null && _this$form$acquisitio !== void 0 ? _this$form$acquisitio : '';
      this.CompanyCorporateActionFormData.spinOffMade = (_this$form$spinOffMad = this.form.spinOffMade) !== null && _this$form$spinOffMad !== void 0 ? _this$form$spinOffMad : '';
      this.CompanyCorporateActionFormData.dividend = (_this$form$dividend = this.form.dividend) !== null && _this$form$dividend !== void 0 ? _this$form$dividend : '';
      this.CompanyCorporateActionFormData.acquisitions = JSON.stringify(this.form.acquisitions);
      this.CompanyCorporateActionFormData.spinOff = JSON.stringify(this.form.spinOff);
      this.CompanyCorporateActionFormData._token = document.querySelector('meta[name="csrf-token"]').content;
      this.isLoading = true;
      this.submitButtonDisabled = true;
      _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__["default"].updateCompanyQuestionnaireData(this.CompanyCorporateActionFormData, 8).then(function (response) {
        _this2.isLoading = false;
        _this2.submitButtonDisabled = false;
        toastr.success(response.data.success.message);

        _this2.$parent.$parent.$parent.getCompanyInfo();
      })["catch"](function (error) {
        _this2.isLoading = false;
        _this2.submitButtonDisabled = false;

        if (error.response.status === 422) {
          toastr.error(error.response.data.error.message);
        } else if (error.response.status == 401) {
          _this2.$emit('logout');
        } else {
          toastr.error(error);
        }
      });
    },
    goBackToPageTopAndNextFieldToEnter: function goBackToPageTopAndNextFieldToEnter() {
      $(document).ready(function () {
        $(this).scrollTop(0);
        $('input, select, textarea, v-select').on('keydown', function (e) {
          if (e.keyCode == 13) {
            var focusable = $('input,select, textarea, v-select').filter(':visible');
            focusable.eq(focusable.index(this) + 1).focus();
            return false;
          }
        });
      });
    },
    loadComponentData: function loadComponentData() {
      this.isLoading = true;
      this.goBackToPageTopAndNextFieldToEnter();
      this.getStepwiseData();
      this.addMoreAcquisition();
    },
    changeAcquisitionsMade: function changeAcquisitionsMade() {
      //this code is part of changeField function start
      if (this.form.acquisitionsMade !== this.oldAcquisitionsMade) {
        this.$emit("corporateAction", true);
      } else {
        this.$emit("corporateAction", false);
      } //this code is part of changeField function end


      this.form.acquisitions = [];
      this.addMoreAcquisition();
    },
    addMoreAcquisition: function addMoreAcquisition() {
      this.form.acquisitions.push({
        name: '',
        year: ''
      });
    },
    removeAcquisition: function removeAcquisition(index) {
      this.form.acquisitions.splice(index, 1);
    },
    changeSpinOffMade: function changeSpinOffMade() {
      //this code is part of changeField function start
      if (this.form.spinOffMade !== this.oldSpinOffMade) {
        this.$emit("corporateAction", true);
      } else {
        this.$emit("corporateAction", false);
      } //this code is part of changeField function end


      this.form.spinOff = [];
      this.addMoreSpinOff();
    },
    addMoreSpinOff: function addMoreSpinOff() {
      this.form.spinOff.push({
        spinOff_acquisitions_name: '',
        spinOff_acquisitions_year: ''
      });
    },
    removeSpinOff: function removeSpinOff(index) {
      this.form.spinOff.splice(index, 1);
    }
  },
  computed: {},
  created: function created() {},
  components: {
    loader: _Loader__WEBPACK_IMPORTED_MODULE_3__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a,
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_4__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/LeadershipAndGovernence.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/LeadershipAndGovernence.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../apis/Questionnnaire */ "./resources/js/apis/Questionnnaire.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var _apis_Common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../apis/Common */ "./resources/js/apis/Common.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      isLoading: false,
      committeeOptions: [],
      executiveRoleOptions: [],
      totalBoardMembers: 0,
      boardMemberOptions: [],
      boardMemberSelected: '',
      totalExecutives: 0,
      executiveOptions: [],
      executiveSelected: '',
      form: {
        boardMembers: [],
        executives: []
      },
      errors: []
    };
  },
  validations: {},
  methods: {
    getStepwiseData: function getStepwiseData() {
      var _this = this;

      _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_0__["default"].getCompanyQuestionnaireData(9).then(function (response) {
        _this.isLoading = false;
        var leadershipAndGovernanceData = response.data.data;
        _this.form.boardMembers = !!leadershipAndGovernanceData ? leadershipAndGovernanceData.boardMembers : [];
        _this.totalBoardMembers = leadershipAndGovernanceData.totalBoardMembers;
        _this.form.executives = !!leadershipAndGovernanceData ? leadershipAndGovernanceData.executives : [];
        _this.totalExecutives = leadershipAndGovernanceData.totalExecutives;

        _this.prepareForm();
      })["catch"](function (error) {
        _this.isLoading = false;

        if (error.response.status === 401) {
          _this.$emit('logout');
        } else {
          console.log(error);
        }
      });
    },
    storeLeadershipAndGovernanceData: function storeLeadershipAndGovernanceData() {
      var _this2 = this;

      var data = {};
      this.errors = [];
      data._token = document.querySelector('meta[name="csrf-token"]').content;
      data.boardMembers = JSON.stringify(this.form.boardMembers);
      data.executives = JSON.stringify(this.form.executives);
      this.isLoading = true;
      this.submitButtonDisabled = true;
      _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_0__["default"].updateCompanyQuestionnaireData(data, 9).then(function (response) {
        _this2.isLoading = false;
        _this2.submitButtonDisabled = false;
        toastr.success(response.data.success.message);
      })["catch"](function (error) {
        _this2.isLoading = false;
        _this2.submitButtonDisabled = false;

        if (error.response.status === 422) {
          toastr.error(error.response.data.error.message);
        } else if (error.response.status == 401) {
          _this2.$emit('logout');
        } else {
          toastr.error(error);
        }
      });
    },
    goBackToPageTopAndNextFieldToEnter: function goBackToPageTopAndNextFieldToEnter() {
      $(document).ready(function () {
        $(this).scrollTop(0);
        $('input, select, textarea, v-select').on('keydown', function (e) {
          if (e.keyCode == 13) {
            var focusable = $('input,select, textarea, v-select').filter(':visible');
            focusable.eq(focusable.index(this) + 1).focus();
            return false;
          }
        });
      });
    },
    loadComponentData: function loadComponentData() {
      this.isLoading = true;
      this.goBackToPageTopAndNextFieldToEnter();
      this.getStepwiseData();
    },
    prepareForm: function prepareForm() {
      var _this3 = this;

      this.form.boardMembers.forEach(function (boardMember, index) {
        _this3.committeeSelected(boardMember.committee, index);
      });
      this.createBoardMemberOptions();
      this.createExecutiveOptions();

      if (this.totalBoardMembers > 0) {
        this.boardMemberSelected = this.totalBoardMembers;
      }

      if (this.totalExecutives > 0) {
        this.executiveSelected = this.totalExecutives;
      }

      this.getLeadershipAndGovernanceRoles('board_committee');
      this.getLeadershipAndGovernanceRoles('executive_role');
    },
    getLeadershipAndGovernanceRoles: function getLeadershipAndGovernanceRoles(roleType) {
      var _this4 = this;

      _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_0__["default"].getLeadershipAndGovernanceRoles(roleType).then(function (response) {
        _this4.isLoading = false;

        if (roleType == 'board_committee') {
          _this4.committeeOptions = response.data.data;
        } else {
          _this4.executiveRoleOptions = response.data.data;
        }
      })["catch"](function (error) {
        _this4.isLoading = false;

        if (error.response.status === 401) {
          _this4.$emit('logout');
        } else {
          console.log(error);
        }
      });
    },
    createBoardMemberOptions: function createBoardMemberOptions() {
      var totalOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.totalBoardMembers;
      this.boardMemberOptions = [];

      if (totalOptions == 0) {
        totalOptions++;
      }

      for (var i = totalOptions; i <= 20; i++) {
        this.boardMemberOptions.push({
          label: i,
          id: i
        });
      }

      return this.boardMemberOptions;
    },
    boardMemberOptionSelected: function boardMemberOptionSelected(index) {
      this.createBoardMemberOptions(index);
      var newInputs = index - this.totalBoardMembers;

      for (var i = 1; i <= newInputs; i++) {
        this.addBoardMember();
        this.totalBoardMembers++;
      }
    },
    addBoardMember: function addBoardMember() {
      this.form.boardMembers.push({
        firstName: '',
        lastName: '',
        committee: '',
        otherCommittee: ''
      });
    },
    removeBoardMember: function removeBoardMember(index) {
      var _this5 = this;

      this.form.boardMembers.splice(index, 1);
      this.form.boardMembers.forEach(function (boardMember, index) {
        _this5.committeeSelected(boardMember.committee, index);
      });
      this.totalBoardMembers--;
      this.createBoardMemberOptions();
      this.boardMemberSelected = this.totalBoardMembers;
    },
    committeeSelected: function committeeSelected(value, index) {
      if (value == 10) {
        $('#otherCommittee-' + index).removeClass('d-none');
      } else {
        $('#otherCommittee-' + index).addClass('d-none');
      }
    },
    createExecutiveOptions: function createExecutiveOptions() {
      var totalOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.totalExecutives;
      this.executiveOptions = [];

      if (totalOptions == 0) {
        totalOptions++;
      }

      for (var i = totalOptions; i <= 20; i++) {
        this.executiveOptions.push({
          label: i,
          id: i
        });
      }

      return this.executiveOptions;
    },
    executiveOptionSelected: function executiveOptionSelected(index) {
      this.createExecutiveOptions(index);
      var newInputs = index - this.totalExecutives;

      for (var i = 1; i <= newInputs; i++) {
        this.addExecutive();
        this.totalExecutives++;
      }
    },
    addExecutive: function addExecutive() {
      this.form.executives.push({
        firstName: '',
        lastName: '',
        executiveRole: ''
      });
    },
    removeExecutive: function removeExecutive(index) {
      this.form.executives.splice(index, 1);
      this.totalExecutives--;
      this.createExecutiveOptions();
      this.executiveSelected = this.totalExecutives;
    }
  },
  created: function created() {
    this.getStepwiseData();
  },
  components: {
    loader: _Loader__WEBPACK_IMPORTED_MODULE_2__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/ResearchCoverage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/ResearchCoverage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/Questionnnaire */ "./resources/js/apis/Questionnnaire.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__);


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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ResearchCoverage',
  data: function data() {
    return {
      isLoading: false,
      oldresearchFirm_name: "",
      oldResearchCoverageType: "",
      oldSharedCommunityResearch: "",
      form: {
        researchFirm_name: "",
        research_coverage_type: "",
        shared_community_research: ""
      },
      CompanyFinancesFormData: {
        researchFirm_name: "",
        research_coverage_type: "",
        shared_community_research: "",
        _token: ''
      },
      errors: [],
      researchTypeCondition: "",
      researchCoverageTypeList: [],
      researchCoverageTypeIds: [],
      sharedCommunityResearchPlatformList: [],
      sharedCommunityResearchPlatformIds: []
    };
  },
  methods: {
    changeField: function changeField() {
      if (this.form.researchFirm_name !== this.oldresearchFirm_name) {
        this.$emit("generalFormChanged", true);
      }
    },
    getResearchCoverageTypeList: function () {
      var _getResearchCoverageTypeList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get('/api/get-research-coverage-type-list').then(function (response) {
                  _this.researchCoverageTypeList = response.data.data;
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

      function getResearchCoverageTypeList() {
        return _getResearchCoverageTypeList.apply(this, arguments);
      }

      return getResearchCoverageTypeList;
    }(),
    getSharedCommunityResearchPlatformList: function () {
      var _getSharedCommunityResearchPlatformList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get('/api/get-shared-community-research-platform-list').then(function (response) {
                  _this2.sharedCommunityResearchPlatformList = response.data.data;
                  _this2.isLoading = false;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getSharedCommunityResearchPlatformList() {
        return _getSharedCommunityResearchPlatformList.apply(this, arguments);
      }

      return getSharedCommunityResearchPlatformList;
    }(),
    checkCommunityResearch: function checkCommunityResearch(value) {
      //this code is part of changeField function start
      if (this.form.research_coverage_type !== this.oldResearchCoverageType) {
        this.$emit("companyValuation", true);
      } else {
        this.$emit("companyValuation", false);
      } //this code is part of changeField function end


      if (!!value) {
        this.researchCoverageTypeIds = Object.keys(value).map(function (key) {
          return value[key].id;
        });
      }

      var isObjectcommunity = this.form.research_coverage_type.find(function (o) {
        return o.id === 4;
      });

      if (isObjectcommunity) {
        this.researchTypeCondition = "Cummunity";
      } else {
        this.researchTypeCondition = "";
        this.form.shared_community_research = "";
      }
    },
    getStepwiseData: function () {
      var _getStepwiseData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _this3 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__["default"].getCompanyQuestionnaireData(10).then(function (response) {
                  _this3.isLoading = false;
                  var researchData = response.data.data;
                  _this3.oldresearchFirm_name = researchData.research_firm_name;
                  _this3.form.researchFirm_name = researchData.research_firm_name;
                  _this3.form.research_coverage_type = researchData.research_coverage;
                  _this3.oldResearchCoverageType = researchData.research_coverage;
                  _this3.form.shared_community_research = researchData.shared_community_research;
                  _this3.oldSharedCommunityResearch = researchData.shared_community_research;

                  _this3.showRelatedField(researchData.shared_community_research, 'sharedCommunityResearchPlatformIds');

                  _this3.checkCommunityResearch();
                })["catch"](function (error) {
                  _this3.isLoading = false;

                  if (error.response.status == 401) {
                    _this3.$emit('logout');
                  } else {
                    toastr.error(error);
                  }
                });

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getStepwiseData() {
        return _getStepwiseData.apply(this, arguments);
      }

      return getStepwiseData;
    }(),
    showRelatedField: function showRelatedField(field, list) {
      if (this.form.shared_community_research !== this.oldSharedCommunityResearch) {
        this.$emit("companyValuation", true);
      } else {
        this.$emit("companyValuation", false);
      } //this code is part of changeField function end


      this[list] = Object.keys(field).map(function (key) {
        return field[key].id;
      });
    },
    saveCompanyresearchData: function saveCompanyresearchData(action) {
      var _this4 = this;

      this.$emit("companyValuation", false);
      this.errors = [];
      var rscOptions = [],
          scrOptions = [];

      for (var rsc = 0; rsc < this.form.research_coverage_type.length; rsc++) {
        rscOptions.push(this.form.research_coverage_type[rsc].id);
      }

      for (var scr = 0; scr < this.form.shared_community_research.length; scr++) {
        scrOptions.push(this.form.shared_community_research[scr].id);
      }

      this.CompanyFinancesFormData.researchFirm_name = this.form.researchFirm_name;
      this.CompanyFinancesFormData.research_coverage_type = rscOptions.join(',');
      this.CompanyFinancesFormData.shared_community_research = scrOptions.join(',');
      this.CompanyFinancesFormData._token = document.querySelector('meta[name="csrf-token"]').content;
      this.isLoading = true;
      this.submitButtonDisabled = true;
      _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__["default"].updateCompanyQuestionnaireData(this.CompanyFinancesFormData, 10).then(function (response) {
        _this4.isLoading = false;
        _this4.submitButtonDisabled = false;
        toastr.success(response.data.success.message);
        /*Impact realtime Percentage Change in tab and banner*/

        _this4.$parent.$parent.$parent.getCompanyInfo();
      })["catch"](function (error) {
        _this4.isLoading = false;
        _this4.submitButtonDisabled = false;

        if (error.response.status === 422) {
          toastr.error(error.response.data.error.message);
        } else if (error.response.status == 401) {
          _this4.$emit('logout');
        } else {
          toastr.error(error);
        }
      });
    },
    stripTheGarbage: function stripTheGarbage(e) {
      if (e.keyCode < 48 && e.keyCode !== 46 || e.keyCode > 59) {
        e.preventDefault();
      }
    },
    researchCoverageSelectedHide: function researchCoverageSelectedHide(option) {
      if (!this.researchCoverageTypeIds.includes(option.id)) return option;
    },
    sharedCommunityResearchPlatformSelectedHide: function sharedCommunityResearchPlatformSelectedHide(option) {
      if (!this.sharedCommunityResearchPlatformIds.includes(option.id)) return option;
    },
    goBackToPageTopAndNextFieldToEnter: function goBackToPageTopAndNextFieldToEnter() {
      $(document).ready(function () {
        $(this).scrollTop(0);
        $('input, select, textarea, v-select').on('keydown', function (e) {
          if (e.keyCode == 13) {
            var focusable = $('input,select, textarea, v-select').filter(':visible');
            focusable.eq(focusable.index(this) + 1).focus();
            return false;
          }
        });
      });
    },
    loadComponentData: function loadComponentData() {
      this.isLoading = true;
      this.goBackToPageTopAndNextFieldToEnter();
      this.getResearchCoverageTypeList();
      this.getSharedCommunityResearchPlatformList();
      this.getStepwiseData();
    }
  },
  components: {
    loader: _Loader__WEBPACK_IMPORTED_MODULE_3__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyQuestionnairesDetails.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CompanyQuestionnairesDetails.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/User */ "./resources/js/apis/User.js");
/* harmony import */ var _components_company_CompanyProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/company/CompanyProfile */ "./resources/js/components/company/CompanyProfile.vue");
/* harmony import */ var _components_company_CompanyExecutives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/company/CompanyExecutives */ "./resources/js/components/company/CompanyExecutives.vue");
/* harmony import */ var _components_company_CompanyTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/company/CompanyTypes */ "./resources/js/components/company/CompanyTypes.vue");
/* harmony import */ var _components_company_CompanyFinances__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/company/CompanyFinances */ "./resources/js/components/company/CompanyFinances.vue");
/* harmony import */ var _components_company_CompanySocial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/company/CompanySocial */ "./resources/js/components/company/CompanySocial.vue");
/* harmony import */ var _components_company_CompanyTaxonomy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/company/CompanyTaxonomy */ "./resources/js/components/company/CompanyTaxonomy.vue");
/* harmony import */ var _components_company_AddEditCompanyTaxonomy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/company/AddEditCompanyTaxonomy */ "./resources/js/components/company/AddEditCompanyTaxonomy.vue");
/* harmony import */ var _components_company_CompanyHistory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/company/CompanyHistory */ "./resources/js/components/company/CompanyHistory.vue");
/* harmony import */ var _components_company_CorporateActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/company/CorporateActions */ "./resources/js/components/company/CorporateActions.vue");
/* harmony import */ var _components_company_LeadershipAndGovernence__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/company/LeadershipAndGovernence */ "./resources/js/components/company/LeadershipAndGovernence.vue");
/* harmony import */ var _components_company_ResearchCoverage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/company/ResearchCoverage */ "./resources/js/components/company/ResearchCoverage.vue");
/* harmony import */ var _apis_ChatMessages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../apis/ChatMessages */ "./resources/js/apis/ChatMessages.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












 // import CompanyDetailsPdf from "./CompanyDetailsPdf" socialFlag

/* harmony default export */ __webpack_exports__["default"] = ({
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    if (this.generalFlag === true || this.contactFlag === true || this.structureFlag === true || this.ValuationFlag === true || this.socialFlag === true || this.historyFlag === true || this.corporateActionFlag === true) {
      var answer = $.confirm({
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
            action: function action() {
              if (answer) {
                next();
              } else {
                next(false);
              }
            }
          },
          Cancel: {
            btnClass: 'btn-default rounded-pill text-capitalize'
          }
        }
      });
    } else {
      next();
    }
  },
  name: "CompanyQuestionnairesDetails",
  data: function data() {
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
      corporateActionFlag: false
    };
  },
  methods: {
    changeDetectedGeneral: function changeDetectedGeneral(value) {
      this.generalFlag = value;
    },
    changeDetectedContact: function changeDetectedContact(value) {
      this.contactFlag = value;
    },
    changeDetectedStructure: function changeDetectedStructure(value) {
      this.structureFlag = value;
    },
    changeDetectedValuation: function changeDetectedValuation(value) {
      this.ValuationFlag = value;
    },
    changeDetectedSocial: function changeDetectedSocial(value) {
      this.socialFlag = value;
    },
    changeDetectedHistory: function changeDetectedHistory(value) {
      this.historyFlag = value;
    },
    changeDetectedCorporateAction: function changeDetectedCorporateAction(value) {
      this.corporateActionFlag = value;
    },
    LoadAddCategorization: function LoadAddCategorization() {
      this.taxonomyTabViewCondition = "add";
      this.taxonomyTabContentLoaded = false;
    },
    GetAddEditCallbackActions: function GetAddEditCallbackActions(action) {
      this.isLoading = false;

      if (action == 'cancel') {
        this.taxonomyTabViewCondition = "show";
        this.updatedId = null;
        var vi = this;
        setTimeout(function () {
          vi.loadTabContent('taxonomy');
        }, 500);
      }
    },
    getCategorizationId: function getCategorizationId(Id) {
      this.updatedId = Id;
      this.taxonomyTabViewCondition = "add";
      this.taxonomyTabContentLoaded = false;
    },
    logout: function logout() {
      this.$emit('logout');
    },
    goBackToPageTop: function goBackToPageTop() {
      $(document).ready(function () {
        $(this).scrollTop(0);
      });
    },
    loadTabContent: function loadTabContent(type) {
      this.goBackToPageTop();

      switch (type) {
        case 'profile':
          this.activeTab = 0;
          break;

        case 'executives':
          this.activeTab = 1;

          if (!this.executiveTabContentLoaded) {
            this.$refs.executiveComponent.loadComponentData();
            this.executiveTabContentLoaded = true;
          }

          break;

        case 'companyType':
          this.activeTab = 2;

          if (!this.companyTypeTabContentLoaded) {
            this.$refs.companyTypeComponent.loadComponentData();
            this.companyTypeTabContentLoaded = true;
          }

          break;

        case 'finance':
          this.activeTab = 3;

          if (!this.financeTabContentLoaded) {
            this.$refs.financesComponent.loadComponentData();
            this.financeTabContentLoaded = true;
          }

          break;

        case 'social':
          this.activeTab = 4;

          if (!this.socialTabContentLoaded) {
            this.$refs.socialComponent.loadComponentData();
            this.socialTabContentLoaded = true;
          }

          break;

        case 'taxonomy':
          this.activeTab = 5;

          if (!this.taxonomyTabContentLoaded) {
            this.$refs.taxonomyComponent.getHierarchyInfo('', '');
            this.taxonomyTabContentLoaded = true;
          }

          break;

        case 'history':
          this.activeTab = 6;

          if (!this.historyTabContentLoaded) {
            this.$refs.historyComponent.loadComponentData();
            this.historyTabContentLoaded = true;
          }

          break;

        case 'corporateAction':
          this.activeTab = 7;

          if (!this.corporateActionsTabContentLoaded) {
            this.$refs.corporateActionsComponent.loadComponentData();
            this.corporateActionsTabContentLoaded = true;
          }

          break;

        case 'leadershipGovernance':
          this.activeTab = 8;

          if (!this.leadershipGovernanceTabContentLoaded) {
            this.$refs.LeadershipAndGovernanceComponent.loadComponentData();
            this.leadershipGovernanceTabContentLoaded = true;
          }

          break;

        case 'researchCoverage':
          this.activeTab = 9;

          if (!this.researchCoverageTabContentLoaded) {
            this.$refs.researchCoverageContentLoaded.loadComponentData();
            this.researchCoverageTabContentLoaded = true;
          }

          break;
      }
    },
    getCompanyInfo: function getCompanyInfo() {
      var _this = this;

      _apis_User__WEBPACK_IMPORTED_MODULE_0__["default"].getCompanyInfo().then(function (response) {
        _this.isLoading = false;
        _this.generalProgress = _this.calculateProfileStepsPercentage(15, response.data.data.general_info);
        _this.contactProgress = _this.calculateProfileStepsPercentage(15, response.data.data.contact);
        _this.structureProgress = _this.calculateProfileStepsPercentage(15, response.data.data.structure);
        _this.valuationProgress = _this.calculateProfileStepsPercentage(15, response.data.data.valuation);
        _this.socialProgress = _this.calculateProfileStepsPercentage(15, response.data.data.social_presence);
        _this.taxonomyProgress = _this.calculateProfileStepsPercentage(25, response.data.data.hierarchy);
        _this.historyProgress = _this.calculateProfileStepsPercentage(10, response.data.data.history);
        _this.corporateActionProgress = _this.calculateProfileStepsPercentage(20, response.data.data.corporate_action);
        _this.leadershipGovernanceProgress = _this.calculateProfileStepsPercentage(30, response.data.data.leadership_governance);
        _this.progressPercentage = response.data.data;
      })["catch"](function (error) {
        _this.isLoading = false;

        if (error.response.status == 401) {
          _this.$emit("logout");
        }
      });
    },
    calculateProfileStepsPercentage: function calculateProfileStepsPercentage(internalPercentage, completedPercentage) {
      return Math.ceil(completedPercentage * 100 / internalPercentage);
    },
    shareMediaLink: function shareMediaLink() {
      this.$bvModal.show('modalShareLink');
      this.publicShareLink = document.location.origin + '/company/' + localStorage.getItem('companySlugName');
    },

    /*startPdfGenerate() {
        this.isLoading = true;
        this.$refs.pdfView.makePdf();
    },*/
    startPdfGenerate: function startPdfGenerate() {
      var instance = this;
      this.isLoading = true;
      $.ajaxSetup({
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem("token")
        }
      });
      $.ajax({
        type: 'GET',
        url: '/api/generate-company-pdf',
        data: {
          'company_slug': instance.companySlugName,
          'company_uuid': instance.companyUuid
        },
        xhrFields: {
          responseType: 'blob'
        },
        success: function success(response) {
          instance.isLoading = false;
          var blob = new Blob([response]),
              link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = instance.companySlugName + new Date().toISOString().split('T')[0] + ".pdf";
          link.click();
          toastr.success('pdf successfully generated');
        },
        error: function error(xhr, status, err) {
          if (xhr.status == 401) {
            this.$emit("logout");
          } else {
            toastr.error('There is an error occur');
          }
        }
      });
    },
    pdfGenerated: function pdfGenerated() {
      this.isLoading = false;
    }
  },
  mounted: function mounted() {
    if (this.$route.hash) {
      this.loadTabContent(this.$route.hash.substring(1));
    }
  },
  created: function created() {
    this.companyUuid = localStorage.getItem('companyUuid');
    this.companySlugName = localStorage.getItem('companySlugName');
    this.goBackToPageTop();
    this.getCompanyInfo();
  },
  components: {
    CompanyProfile: _components_company_CompanyProfile__WEBPACK_IMPORTED_MODULE_1__["default"],
    CompanyExecutives: _components_company_CompanyExecutives__WEBPACK_IMPORTED_MODULE_2__["default"],
    CompanyTypes: _components_company_CompanyTypes__WEBPACK_IMPORTED_MODULE_3__["default"],
    CompanyFinances: _components_company_CompanyFinances__WEBPACK_IMPORTED_MODULE_4__["default"],
    CompanySocials: _components_company_CompanySocial__WEBPACK_IMPORTED_MODULE_5__["default"],
    CompanyTaxonomy: _components_company_CompanyTaxonomy__WEBPACK_IMPORTED_MODULE_6__["default"],
    AddEditCompanyTaxonomy: _components_company_AddEditCompanyTaxonomy__WEBPACK_IMPORTED_MODULE_7__["default"],
    CompanyHistory: _components_company_CompanyHistory__WEBPACK_IMPORTED_MODULE_8__["default"],
    CorporateActions: _components_company_CorporateActions__WEBPACK_IMPORTED_MODULE_9__["default"],
    LeadershipAndGovernence: _components_company_LeadershipAndGovernence__WEBPACK_IMPORTED_MODULE_10__["default"],
    ResearchCoverage: _components_company_ResearchCoverage__WEBPACK_IMPORTED_MODULE_11__["default"],
    ShareModal: function ShareModal() {
      return Promise.all(/*! import() */[__webpack_require__.e(11), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, /*! ../components/ShareModal */ "./resources/js/components/ShareModal.vue"));
    },
    // CompanyDetailsPdf,
    loader: function loader() {
      return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ../components/Loader */ "./resources/js/components/Loader.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Loader.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loader-overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 999;\n  cursor: pointer;\n}\n.loader-overlay span.text {\n  display: inline-block;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #fff;\n}\n.loader-overlay .loader {\n  -webkit-animation: loader-animate 1.5s linear infinite;\n          animation: loader-animate 1.5s linear infinite;\n  clip: rect(0, 80px, 80px, 40px);\n  height: 80px;\n  width: 80px;\n  position: absolute;\n  left: calc(50% - 40px);\n  top: calc(50% - 40px);\n}\n.loader-overlay .loader:after {\n  -webkit-animation: loader-animate-after 1.5s ease-in-out infinite;\n          animation: loader-animate-after 1.5s ease-in-out infinite;\n  clip: rect(0, 80px, 80px, 40px);\n  content: \"\";\n  border-radius: 50%;\n  height: 80px;\n  width: 80px;\n  position: absolute;\n}\n@-webkit-keyframes loader-animate {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(220deg);\n}\n}\n@keyframes loader-animate {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(220deg);\n}\n}\n@-webkit-keyframes loader-animate-after {\n0% {\n    box-shadow: inset #fff 0 0 0 17px;\n    transform: rotate(-140deg);\n}\n50% {\n    box-shadow: inset #fff 0 0 0 2px;\n}\n100% {\n    box-shadow: inset #fff 0 0 0 17px;\n    transform: rotate(140deg);\n}\n}\n@keyframes loader-animate-after {\n0% {\n    box-shadow: inset #fff 0 0 0 17px;\n    transform: rotate(-140deg);\n}\n50% {\n    box-shadow: inset #fff 0 0 0 2px;\n}\n100% {\n    box-shadow: inset #fff 0 0 0 17px;\n    transform: rotate(140deg);\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/AddEditCompanyTaxonomy.vue?vue&type=style&index=0&id=d309ecc0&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/AddEditCompanyTaxonomy.vue?vue&type=style&index=0&id=d309ecc0&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.background-darkblue[data-v-d309ecc0] {\n    background: #5352ED;\n}\n.text-darkblue[data-v-d309ecc0] {\n    color: #1e0857;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyExecutives.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/CompanyExecutives.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ninput[type=\"search\"].vs__search::-webkit-input-placeholder {\n    color: #000000;\n    opacity: 0.5;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyProfile.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/CompanyProfile.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.image-edit-icon-general {\n    background-color: #fff;\n    border: 1px solid #cccccc63;\n    cursor: pointer;\n    height: 27px;\n    position: absolute;\n    left: 40px;\n    /*top: 85px;*/\n    bottom: -13px;\n    padding-bottom: 2px;\n    width: 27px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanySocial.vue?vue&type=style&index=0&id=b14dda46&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/CompanySocial.vue?vue&type=style&index=0&id=b14dda46&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.social-content-delete-icon[data-v-b14dda46] {\n    color: red !important;\n    border-color: #ced4da;\n    border-left: 0;\n    box-shadow: 0 0 0 0 rgb(52 144 220 / 25%) !important;\n    background-color: #ffffff;\n    border-top-left-radius: 0.25rem !important;\n    border-bottom-left-radius: 0.25rem !important;\n}\n.social-icon-group[data-v-b14dda46] {\n    border-color: #ced4da;\n    border-right: 0;\n    cursor: auto !important;\n    height: 37px;\n}\n.social-icon-group i[data-v-b14dda46] {\n    font-size: 18px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/LeadershipAndGovernence.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/LeadershipAndGovernence.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.role-dropdown ul {\n    max-height: 100px;\n}\n.lag-dropdown ul {\n    max-height: 200px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Loader.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/AddEditCompanyTaxonomy.vue?vue&type=style&index=0&id=d309ecc0&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/AddEditCompanyTaxonomy.vue?vue&type=style&index=0&id=d309ecc0&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddEditCompanyTaxonomy.vue?vue&type=style&index=0&id=d309ecc0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/AddEditCompanyTaxonomy.vue?vue&type=style&index=0&id=d309ecc0&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyExecutives.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/CompanyExecutives.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyExecutives.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyExecutives.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyProfile.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/CompanyProfile.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyProfile.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyProfile.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanySocial.vue?vue&type=style&index=0&id=b14dda46&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/CompanySocial.vue?vue&type=style&index=0&id=b14dda46&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySocial.vue?vue&type=style&index=0&id=b14dda46&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanySocial.vue?vue&type=style&index=0&id=b14dda46&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/LeadershipAndGovernence.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/LeadershipAndGovernence.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./LeadershipAndGovernence.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/LeadershipAndGovernence.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader.vue?vue&type=template&id=e79ec684&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Loader.vue?vue&type=template&id=e79ec684& ***!
  \*********************************************************************************************************************************************************************************************************/
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
  return _vm.isVisible
    ? _c("div", { staticClass: "loader-overlay" }, [
        _c("div", { staticClass: "loader" }),
        _vm._v(" "),
        _c("span", {
          staticClass: "text",
          domProps: { innerHTML: _vm._s(_vm.text) }
        })
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/AddEditCompanyTaxonomy.vue?vue&type=template&id=d309ecc0&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/AddEditCompanyTaxonomy.vue?vue&type=template&id=d309ecc0&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "dashboard pt-0 mt-4 mb-5" }, [
    _vm.actionType == "add"
      ? _c("h4", { staticClass: "text-center text-theme-dark-blue" }, [
          _vm._v("Add Company Classification")
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.actionType == "update"
      ? _c("h4", { staticClass: "text-center text-theme-dark-blue" }, [
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
        _c("div", { staticClass: "col-md-11 mx-auto" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-6" }, [
              _c(
                "div",
                { staticClass: "panel-body categorization-selection" },
                [
                  _c(
                    "div",
                    { staticClass: "clearfix" },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("v-select", {
                        ref: "industry",
                        class: { "is-invalid": _vm.$v.form.industry.$error },
                        attrs: {
                          label: "description",
                          options: _vm.industries,
                          clearable: false,
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
                        [
                          _vm._v(
                            "\n                                                 + Add Suggestion\n                                             "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      !_vm.$v.form.industry.required
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "Industry is\n                                                required.\n                                            "
                            )
                          ])
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.showSectorField
                    ? _c(
                        "div",
                        { staticClass: "clearfix" },
                        [
                          _vm._m(2),
                          _vm._v(" "),
                          _c("v-select", {
                            ref: "sector",
                            class: { "is-invalid": _vm.$v.form.sector.$error },
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
                                "\n                                                + Add Suggestion\n                                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          !_vm.$v.form.sector.required
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  "Sector is\n                                                required.\n                                            "
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
                          _vm._m(3),
                          _vm._v(" "),
                          _c("v-select", {
                            ref: "subSector",
                            class: {
                              "is-invalid": _vm.$v.form.subSector.$error
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
                                "\n                                                + Add Suggestion\n                                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          !_vm.$v.form.subSector.required
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  "Sub sector\n                                                is required.\n                                            "
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
                          _vm._m(4),
                          _vm._v(" "),
                          _c("v-select", {
                            ref: "group",
                            class: { "is-invalid": _vm.$v.form.group.$error },
                            attrs: {
                              label: "description",
                              options: _vm.groups,
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
                                "\n                                                + Add Suggestion\n                                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          !_vm.$v.form.group.required
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  "Group is\n                                                required.\n                                            "
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
                          _vm._m(5),
                          _vm._v(" "),
                          _c("v-select", {
                            ref: "subGroup",
                            class: {
                              "is-invalid": _vm.$v.form.subGroup.$error
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
                                "\n                                                + Add Suggestion\n                                            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          !_vm.$v.form.subGroup.required
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  "Sub Group is\n                                                required.\n                                            "
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
                                "\n                                                + Add Suggestion\n                                            "
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
                        { staticClass: "clearfix" },
                        [
                          _c(
                            "label",
                            { staticClass: "control-label font-weight-bold" },
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
                                return _vm.getTiers(_vm.form.subEchelon)
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
                                "\n                                                + Add Suggestion\n                                            "
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
                        { staticClass: "clearfix" },
                        [
                          _c(
                            "label",
                            { staticClass: "control-label font-weight-bold" },
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
                                "\n                                                + Add Suggestion\n                                            "
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
                        { staticClass: "clearfix" },
                        [
                          _c(
                            "label",
                            { staticClass: "control-label font-weight-bold" },
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
                                "\n                                                + Add Suggestion\n                                            "
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
                        { staticClass: "clearfix" },
                        [
                          _c(
                            "label",
                            { staticClass: "control-label font-weight-bold" },
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
                                "\n                                                + Add Suggestion\n                                            "
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
                        { staticClass: "clearfix" },
                        [
                          _c(
                            "label",
                            { staticClass: "control-label font-weight-bold" },
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
                                "\n                                                + Add Suggestion\n                                            "
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
                        { staticClass: "clearfix" },
                        [
                          _c(
                            "label",
                            { staticClass: "control-label font-weight-bold" },
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
                                "\n                                                + Add Suggestion\n                                            "
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
                        { staticClass: "clearfix" },
                        [
                          _c(
                            "label",
                            { staticClass: "control-label font-weight-bold" },
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
                                "\n                                                + Add Suggestion\n                                            "
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
                        { staticClass: "clearfix" },
                        [
                          _c(
                            "label",
                            { staticClass: "control-label font-weight-bold" },
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
                                "\n                                                + Add Suggestion\n                                            "
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
                        { staticClass: "clearfix" },
                        [
                          _c(
                            "label",
                            { staticClass: "control-label font-weight-bold" },
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
                                "\n                                                + Add Suggestion\n                                            "
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
                        { staticClass: "clearfix" },
                        [
                          _c(
                            "label",
                            { staticClass: "control-label font-weight-bold" },
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
                                "\n                                                + Add Suggestion\n                                            "
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
                        { staticClass: "clearfix" },
                        [
                          _c(
                            "label",
                            { staticClass: "control-label font-weight-bold" },
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
                                "\n                                                + Add Suggestion\n                                            "
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
                        { staticClass: "clearfix" },
                        [
                          _c(
                            "label",
                            { staticClass: "control-label font-weight-bold" },
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
                                "\n                                                + Add Suggestion\n                                            "
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
                            { staticClass: "control-label font-weight-bold" },
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
                                "\n                                                + Add Suggestion\n                                            "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-6 text-center mt-4" }, [
              _c("div", { staticClass: "mt-2" }, [
                _vm.form.industry != ""
                  ? _c("span", [
                      _c(
                        "span",
                        {
                          staticClass: "d-block px-1 py-3 text-white rounded",
                          style: { backgroundColor: this.nodeColor("industry") }
                        },
                        [
                          _vm._v(
                            _vm._s(_vm.form.industry.description) +
                              "\n                            "
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
                            "d-block px-1 py-3 p-2 text-white rounded",
                          style: { backgroundColor: this.nodeColor("industry") }
                        },
                        [
                          _vm._v(
                            "Industry Classification (Please Select One)\n                            "
                          )
                        ]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.sector != "" && _vm.form.sector != undefined
                  ? _c("span", [
                      _vm._m(6),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "d-block px-auto py-3 text-white rounded",
                          style: { backgroundColor: this.nodeColor("sector") }
                        },
                        [_vm._v(_vm._s(_vm.form.sector.description))]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.subSector != "" && _vm.form.subSector != undefined
                  ? _c("span", [
                      _vm._m(7),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "d-block px-auto py-3 text-white rounded",
                          style: {
                            backgroundColor: this.nodeColor("subSector")
                          }
                        },
                        [_vm._v(_vm._s(_vm.form.subSector.description))]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.group != "" && _vm.form.group != undefined
                  ? _c("span", [
                      _vm._m(8),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "d-block px-auto py-3 text-white rounded",
                          style: { backgroundColor: this.nodeColor("group") }
                        },
                        [_vm._v(_vm._s(_vm.form.group.description))]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.subGroup != "" && _vm.form.subGroup != undefined
                  ? _c("span", [
                      _vm._m(9),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "d-block px-auto py-3 text-white rounded",
                          style: { backgroundColor: this.nodeColor("subGroup") }
                        },
                        [_vm._v(_vm._s(_vm.form.subGroup.description))]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.echelon != "" && _vm.form.echelon != undefined
                  ? _c("span", [
                      _vm._m(10),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "d-block px-auto py-3 text-white rounded",
                          style: { backgroundColor: this.nodeColor("echelon") }
                        },
                        [_vm._v(_vm._s(_vm.form.echelon.description))]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.subEchelon != "" && _vm.form.subEchelon != undefined
                  ? _c("span", [
                      _vm._m(11),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "d-block px-auto py-3 text-white rounded",
                          style: {
                            backgroundColor: this.nodeColor("subEchelon")
                          }
                        },
                        [_vm._v(_vm._s(_vm.form.subEchelon.description))]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.tier != "" && _vm.form.tier != undefined
                  ? _c("span", [
                      _vm._m(12),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "d-block px-auto py-3 text-white rounded",
                          style: { backgroundColor: this.nodeColor("tier") }
                        },
                        [_vm._v(_vm._s(_vm.form.tier.description))]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.subTier != "" && _vm.form.subTier != undefined
                  ? _c("span", [
                      _vm._m(13),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "d-block px-auto py-3 text-white rounded",
                          style: { backgroundColor: this.nodeColor("subTier") }
                        },
                        [_vm._v(_vm._s(_vm.form.subTier.description))]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.layer != "" && _vm.form.layer != undefined
                  ? _c("span", [
                      _vm._m(14),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "d-block px-auto py-3 text-white rounded",
                          style: { backgroundColor: this.nodeColor("layer") }
                        },
                        [_vm._v(_vm._s(_vm.form.layer.description))]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.subLayer != "" && _vm.form.subLayer != undefined
                  ? _c("span", [
                      _vm._m(15),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "d-block px-auto py-3 text-white rounded",
                          style: { backgroundColor: this.nodeColor("subLayer") }
                        },
                        [_vm._v(_vm._s(_vm.form.subLayer.description))]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.deck != "" && _vm.form.deck != undefined
                  ? _c("span", [
                      _vm._m(16),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "d-block px-auto py-3 text-white rounded",
                          style: { backgroundColor: this.nodeColor("deck") }
                        },
                        [_vm._v(_vm._s(_vm.form.deck.description))]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.subDeck != "" && _vm.form.subDeck != undefined
                  ? _c("span", [
                      _vm._m(17),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "d-block px-auto py-3 text-white rounded",
                          style: { backgroundColor: this.nodeColor("subDeck") }
                        },
                        [_vm._v(_vm._s(_vm.form.subDeck.description))]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.floor != "" && _vm.form.floor != undefined
                  ? _c("span", [
                      _vm._m(18),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "d-block px-auto py-3 text-white rounded",
                          style: { backgroundColor: this.nodeColor("floor") }
                        },
                        [_vm._v(_vm._s(_vm.form.floor.description))]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.subFloor != "" && _vm.form.subFloor != undefined
                  ? _c("span", [
                      _vm._m(19),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "d-block px-auto py-3 text-white rounded",
                          style: { backgroundColor: this.nodeColor("subFloor") }
                        },
                        [_vm._v(_vm._s(_vm.form.subFloor.description))]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.basement != "" && _vm.form.basement != undefined
                  ? _c("span", [
                      _vm._m(20),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "d-block px-auto py-3 text-white rounded",
                          style: { backgroundColor: this.nodeColor("basement") }
                        },
                        [_vm._v(_vm._s(_vm.form.basement.description))]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.subBasement != "" && _vm.form.subBasement != undefined
                  ? _c("span", [
                      _vm._m(21),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "d-block px-auto py-3 text-white rounded",
                          style: {
                            backgroundColor: this.nodeColor("subBasement")
                          }
                        },
                        [_vm._v(_vm._s(_vm.form.subBasement.description))]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.mine != "" && _vm.form.mine != undefined
                  ? _c("span", [
                      _vm._m(22),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "d-block px-auto py-3 text-white rounded",
                          style: { backgroundColor: this.nodeColor("mine") }
                        },
                        [_vm._v(_vm._s(_vm.form.mine.description))]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.form.subMine != "" && _vm.form.subMine != undefined
                  ? _c("span", [
                      _vm._m(23),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "d-block px-auto py-3 text-white rounded",
                          style: { backgroundColor: this.nodeColor("subMine") }
                        },
                        [_vm._v(_vm._s(_vm.form.subMine.description))]
                      )
                    ])
                  : _vm._e()
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mt-3" }, [
            _c(
              "div",
              { staticClass: "col-md-6" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-back-next",
                    attrs: { link: "", to: { name: "" } },
                    nativeOn: {
                      click: function($event) {
                        return _vm.cancelAddOrEdit()
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
                      "\n                                        Save and Close\n                                    "
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
              [_vm._v("Add Classification\n                            ")]
            ),
            _vm._v(" "),
            _c(
              "b-button",
              {
                staticClass: "btn-add-suggestion background-darkblue",
                attrs: { id: "replacenode", variant: "success" },
                on: { click: _vm.showReplaceModal }
              },
              [
                _vm._v(
                  "\n                                Replace Classification\n                            "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "b-button",
              {
                staticClass: "btn-add-suggestion background-darkblue",
                attrs: { id: "deletenode", variant: "success" },
                on: { click: _vm.showDeleteModal }
              },
              [
                _vm._v(
                  "\n                                Delete Classification\n                            "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "b-button",
              {
                staticClass: "btn-add-suggestion background-darkblue",
                attrs: { id: "other", variant: "success" },
                on: { click: _vm.showOtherModal }
              },
              [
                _vm._v(
                  "\n                                Other\n                            "
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
                      {
                        staticClass: "font-weight-bold mb-0 pr-1 text-darkblue"
                      },
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
                  _vm._v(" " + _vm._s(_vm.node_description))
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
                      _vm._v("Requested Node is required.")
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
                  [_vm._v("Submit\n                                ")]
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
                  [_vm._v("Cancel\n                                ")]
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
                _vm._v(" " + _vm._s(_vm.node_description))
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
                      _vm._v("Requested Node is required.")
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
                  [_vm._v("Submit\n                                ")]
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
                  [_vm._v("Cancel\n                                ")]
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
                _vm._v(" " + _vm._s(_vm.node_description))
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
                  [_vm._v("Submit\n                                ")]
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
                  [_vm._v("Cancel\n                                ")]
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
                _vm._v(" " + _vm._s(_vm.node_description))
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
                  [_vm._v("Submit\n                                ")]
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
                  [_vm._v("Cancel\n                                ")]
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "media-upload-suggestion-text d-block mb-2 fs-14 text-center text-theme-dark-blue"
      },
      [
        _vm._v(
          "\n                                A more detailed industry classification will allow users to find your company and\n                                your\n                                content more reliably and accurately in their searches. If you do not see a fitting\n                                classification, please consider making a suggestion either through "
        ),
        _c("b", [_vm._v("Add Suggestion or by leaving Feedback")]),
        _vm._v(".\n                            ")
      ]
    )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyExecutives.vue?vue&type=template&id=f5007c0a&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/CompanyExecutives.vue?vue&type=template&id=f5007c0a& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container-fluid px-0" },
    [
      _c(
        "div",
        {
          staticClass:
            "row collapse show no-gutters d-flex h-100 position-relative"
        },
        [
          _c("div", { staticClass: "col-lg-8 company-profile-tab mx-auto" }, [
            _c("div", { staticClass: "panel-body companyManageForm" }, [
              _c("div", { staticClass: "form-group row" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-12" },
                  [
                    _c("label", [
                      _vm.hasCompanyFounder
                        ? _c("i", { staticClass: "fas fa-check-circle" })
                        : _c("i", { staticClass: "fas fa-times-circle" }),
                      _vm._v(
                        "\n                            List the Company's Founders\n                            "
                      ),
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
                          staticClass: "exclamation-positions",
                          attrs: {
                            title:
                              "Company founders and management team are one of the most important factors driving investor decision. Often more important than even a product or technology itself. Allow investors to know your founders and team."
                          }
                        },
                        [
                          _c("i", { staticClass: "exclamation-circle-vue" }, [
                            _vm._v("i")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.form.company_founders, function(input, index) {
                      return [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: input.name,
                              expression: "input.name"
                            }
                          ],
                          staticClass: "form-control go-next-with-enter",
                          attrs: {
                            type: "text",
                            placeholder: "Ex: John Smith",
                            autocomplete: "new-founders"
                          },
                          domProps: { value: input.name },
                          on: {
                            input: [
                              function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(input, "name", $event.target.value)
                              },
                              _vm.changeField
                            ],
                            keyup: function($event) {
                              return _vm.setCompanyFounderCheck(
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        0 == index
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "float-right my-1 add-multiple cursor-pointer p-1",
                                on: { click: _vm.addMoreFounder }
                              },
                              [
                                _vm._v(
                                  "+ Add Founder\n                            "
                                )
                              ]
                            )
                          : _c(
                              "div",
                              {
                                staticClass:
                                  "float-right mt-1 add-multiple cursor-pointer",
                                on: {
                                  click: function($event) {
                                    return _vm.removeFounder(index)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                - Remove Founder\n                            "
                                )
                              ]
                            )
                      ]
                    })
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c("div", { staticClass: "col-lg-12" }, [
                  _c("label", [
                    _vm.form.ceo_list
                      ? _c("i", { staticClass: "fas fa-check-circle" })
                      : _c("i", { staticClass: "fas fa-times-circle" }),
                    _vm._v("\n                            CEO"),
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
                        staticClass: "exclamation-positions",
                        attrs: {
                          title:
                            "Company founders and management team are one of the most important factors driving investor decision. — often more important than even a product or technology itself. Allow investors to know your founders and team."
                        }
                      },
                      [
                        _c("i", { staticClass: "exclamation-circle-vue" }, [
                          _vm._v("i")
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.ceo_list,
                        expression: "form.ceo_list"
                      }
                    ],
                    ref: "ceo_list",
                    staticClass: "form-control go-next-with-enter",
                    attrs: {
                      type: "text",
                      placeholder: "Ex: John Smith",
                      autocomplete: "off"
                    },
                    domProps: { value: _vm.form.ceo_list },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "ceo_list", $event.target.value)
                        },
                        _vm.changeField
                      ]
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c("div", { staticClass: "col-lg-12" }, [
                  _c("label", [
                    _vm.form.cfo_list
                      ? _c("i", { staticClass: "fas fa-check-circle" })
                      : _c("i", { staticClass: "fas fa-times-circle" }),
                    _vm._v("\n                            CFO"),
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
                        staticClass: "exclamation-positions",
                        attrs: {
                          title:
                            "Company founders and management team are one of the most important factors driving investor decision. — often more important than even a product or technology itself. Allow investors to know your founders and team."
                        }
                      },
                      [
                        _c("i", { staticClass: "exclamation-circle-vue" }, [
                          _vm._v("i")
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.cfo_list,
                        expression: "form.cfo_list"
                      }
                    ],
                    ref: "cfo_list",
                    staticClass: "form-control go-next-with-enter",
                    attrs: {
                      type: "text",
                      placeholder: "Ex: John Smith",
                      autocomplete: "off"
                    },
                    domProps: { value: _vm.form.cfo_list },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "cfo_list", $event.target.value)
                        },
                        _vm.changeField
                      ]
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c("div", { staticClass: "col-lg-12" }, [
                  _c("label", [
                    _vm.form.sales_dept_email
                      ? _c("i", { staticClass: "fas fa-check-circle" })
                      : _c("i", { staticClass: "fas fa-times-circle" }),
                    _vm._v(
                      "\n                            Sales Department Point of Contact"
                    ),
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
                        staticClass: "exclamation-positions",
                        attrs: {
                          title:
                            "- Investors want to better understand your sales roadmap and market size before investing -Customers want to connect with you to purchase your product/service."
                        }
                      },
                      [
                        _c("i", { staticClass: "exclamation-circle-vue" }, [
                          _vm._v("i")
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.sales_dept_email,
                        expression: "form.sales_dept_email"
                      }
                    ],
                    ref: "sales_dept_email",
                    staticClass: "form-control go-next-with-enter",
                    class: {
                      "is-invalid": _vm.$v.form.sales_dept_email.$error
                    },
                    attrs: {
                      type: "email",
                      autocomplete: "new-sales-email",
                      placeholder: "Ex: John@company.com"
                    },
                    domProps: { value: _vm.form.sales_dept_email },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "sales_dept_email",
                            $event.target.value
                          )
                        },
                        _vm.changeField
                      ]
                    }
                  }),
                  _vm._v(" "),
                  !_vm.$v.form.sales_dept_email.email
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\n                            The email is not valid.\n                        "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.errors.sales_dept_email
                    ? _c(
                        "span",
                        {
                          staticClass: "invalid-feedback",
                          attrs: { role: "alert" }
                        },
                        [
                          _c("strong", [
                            _vm._v(_vm._s(_vm.errors.sales_dept_email[0]))
                          ])
                        ]
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-12 mt-2" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.sales_dept_phone,
                        expression: "form.sales_dept_phone"
                      }
                    ],
                    ref: "sales_dept_phone",
                    staticClass: "form-control go-next-with-enter",
                    attrs: {
                      type: "text",
                      autocomplete: "new-sales-phone",
                      placeholder: "Phone"
                    },
                    domProps: { value: _vm.form.sales_dept_phone },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "sales_dept_phone",
                            $event.target.value
                          )
                        },
                        function($event) {
                          return _vm.acceptPhoneNumber("sales_dept_phone")
                        }
                      ]
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c("div", { staticClass: "col-lg-12" }, [
                  _c("label", [
                    _vm.form.investor_relation_contact_email
                      ? _c("i", { staticClass: "fas fa-check-circle" })
                      : _c("i", { staticClass: "fas fa-times-circle" }),
                    _vm._v(
                      "\n                            Investor Relations Point of Contact"
                    ),
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
                        staticClass: "exclamation-positions",
                        attrs: {
                          title:
                            "Investors want to contact you. Let them know who to contact for inquiries."
                        }
                      },
                      [
                        _c("i", { staticClass: "exclamation-circle-vue" }, [
                          _vm._v("i")
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.investor_relation_contact_email,
                        expression: "form.investor_relation_contact_email"
                      }
                    ],
                    ref: "investor_relation_contact_email",
                    staticClass: "form-control go-next-with-enter",
                    class: {
                      "is-invalid":
                        _vm.$v.form.investor_relation_contact_email.$error
                    },
                    attrs: {
                      type: "email",
                      autocomplete: "new-relation-email",
                      placeholder: "Ex: John@company.com"
                    },
                    domProps: {
                      value: _vm.form.investor_relation_contact_email
                    },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "investor_relation_contact_email",
                            $event.target.value
                          )
                        },
                        _vm.changeField
                      ]
                    }
                  }),
                  _vm._v(" "),
                  !_vm.$v.form.investor_relation_contact_email.email
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "\n                            The\n                            email is not valid.\n                        "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-12 mt-2" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.investor_relation_contact_phone,
                        expression: "form.investor_relation_contact_phone"
                      }
                    ],
                    ref: "investor_relation_contact_phone",
                    staticClass: "form-control go-next-with-enter",
                    attrs: {
                      type: "text",
                      autocomplete: "new-relation-phone",
                      placeholder: "Phone"
                    },
                    domProps: {
                      value: _vm.form.investor_relation_contact_phone
                    },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "investor_relation_contact_phone",
                            $event.target.value
                          )
                        },
                        function($event) {
                          return _vm.acceptPhoneNumber(
                            "investor_relation_contact_phone"
                          )
                        }
                      ]
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c("div", { staticClass: "col-lg-12" }, [
                  _c("label", [
                    _vm.form.business_development_contact_email
                      ? _c("i", { staticClass: "fas fa-check-circle" })
                      : _c("i", { staticClass: "fas fa-times-circle" }),
                    _vm._v(
                      "\n                            Business Development Point of Contact"
                    )
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.business_development_contact_email,
                        expression: "form.business_development_contact_email"
                      }
                    ],
                    ref: "business_development_contact_email",
                    staticClass: "form-control go-next-with-enter",
                    attrs: {
                      type: "email",
                      autocomplete: "new-relation-email",
                      placeholder: "Ex: John@company.com"
                    },
                    domProps: {
                      value: _vm.form.business_development_contact_email
                    },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "business_development_contact_email",
                            $event.target.value
                          )
                        },
                        _vm.changeField
                      ]
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-12 mt-2" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.business_development_contact_phone,
                        expression: "form.business_development_contact_phone"
                      }
                    ],
                    ref: "business_development_contact_phone",
                    staticClass: "form-control go-next-with-enter",
                    attrs: {
                      type: "text",
                      autocomplete: "new-relation-phone",
                      placeholder: "Phone"
                    },
                    domProps: {
                      value: _vm.form.business_development_contact_phone
                    },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "business_development_contact_phone",
                            $event.target.value
                          )
                        },
                        function($event) {
                          return _vm.acceptPhoneNumber(
                            "business_development_contact_phone"
                          )
                        }
                      ]
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-12" },
                  [
                    _c("label", [
                      _vm.form.strategic_partnership.length
                        ? _c("i", { staticClass: "fas fa-check-circle" })
                        : _c("i", { staticClass: "fas fa-times-circle" }),
                      _vm._v(
                        "\n                            Please List the Strategic\n                            Partnerships ("
                      ),
                      _vm._m(0),
                      _vm._v(")\n                            "),
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
                          attrs: {
                            title:
                              "This information is used to improve your experience on the platform and provide you with additional relationships"
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "fas fa-question-circle text-dark"
                          })
                        ]
                      ),
                      _vm._v(" "),
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
                          staticClass: "exclamation-positions",
                          attrs: {
                            title:
                              "By listing your partnerships, we can identify alternative partnerships that may benefit your company"
                          }
                        },
                        [
                          _c("i", { staticClass: "exclamation-circle-vue" }, [
                            _vm._v("i")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      staticClass: "w100",
                      attrs: {
                        "no-drop": "",
                        taggable: "",
                        multiple: "",
                        "select-on-key-codes": [188, 13],
                        "close-on-select": false,
                        placeholder: "Ex: Coca Cola"
                      },
                      on: { input: _vm.changeField },
                      model: {
                        value: _vm.form.strategic_partnership,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "strategic_partnership", $$v)
                        },
                        expression: "form.strategic_partnership"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-12" },
                  [
                    _c("label", [
                      _vm.form.vendors.length
                        ? _c("i", { staticClass: "fas fa-check-circle" })
                        : _c("i", { staticClass: "fas fa-times-circle" }),
                      _vm._v(
                        "\n                            Please List Key\n                            Suppliers ("
                      ),
                      _vm._m(1),
                      _vm._v(")\n                            "),
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
                          attrs: {
                            title:
                              "This information is used to improve your experience on the platform and provide you with additional relationships"
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "fas fa-question-circle text-dark"
                          })
                        ]
                      ),
                      _vm._v(" "),
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
                          staticClass: "exclamation-positions",
                          attrs: {
                            title:
                              "By listing your suppliers, we can identify alternative suppliers that may benefit your company"
                          }
                        },
                        [
                          _c("i", { staticClass: "exclamation-circle-vue" }, [
                            _vm._v("i")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      staticClass: "w100",
                      attrs: {
                        "no-drop": "",
                        taggable: "",
                        multiple: "",
                        "select-on-key-codes": [188, 13],
                        "close-on-select": false,
                        placeholder: "Ex: Cisco"
                      },
                      on: { input: _vm.changeField },
                      model: {
                        value: _vm.form.vendors,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "vendors", $$v)
                        },
                        expression: "form.vendors"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-12" },
                  [
                    _c("label", [
                      _vm.form.top_competitors.length
                        ? _c("i", { staticClass: "fas fa-check-circle" })
                        : _c("i", { staticClass: "fas fa-times-circle" }),
                      _vm._v(
                        "\n                            Who Are Your Top\n                            Competitors? ("
                      ),
                      _vm._m(2),
                      _vm._v(")\n                            "),
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
                          attrs: {
                            title:
                              "This information is used to improve your experience on the platform"
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "fas fa-question-circle text-dark"
                          })
                        ]
                      ),
                      _vm._v(" "),
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
                          staticClass: "exclamation-span",
                          attrs: {
                            title:
                              "- Allow customers who use your competitors products the ability to find your products."
                          }
                        },
                        [
                          _c("i", { staticClass: "exclamation-circle-vue" }, [
                            _vm._v("i")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      staticClass: "w100",
                      attrs: {
                        "no-drop": "",
                        taggable: "",
                        multiple: "",
                        "select-on-key-codes": [188, 13],
                        "close-on-select": false,
                        placeholder: "Ex: Google, WalMart, Amazon"
                      },
                      on: { input: _vm.changeField },
                      model: {
                        value: _vm.form.top_competitors,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "top_competitors", $$v)
                        },
                        expression: "form.top_competitors"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-center  mb-4" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary save-changes",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.saveCompanyExecutivesData()
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                            Save Changes\n                        "
                    )
                  ]
                )
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("loader", { attrs: { "is-visible": _vm.isLoading } })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "label-caption" }, [
      _c("i", [_vm._v("Press Enter or comma to separate entries")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "label-caption" }, [
      _c("i", [_vm._v("Press Enter or comma to separate entries")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "label-caption" }, [
      _c("i", [_vm._v("Press Enter or comma to separate entries")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyFinances.vue?vue&type=template&id=0e2bc96e&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/CompanyFinances.vue?vue&type=template&id=0e2bc96e& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container-fluid px-0" },
    [
      _c(
        "div",
        {
          staticClass:
            "row collapse show no-gutters d-flex h-100 position-relative"
        },
        [
          _c("div", { staticClass: "col-lg-8 company-profile-tab mx-auto" }, [
            _c(
              "div",
              { staticClass: "panel-body companyManageForm" },
              [
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-12" },
                    [
                      _c("label", [
                        null != _vm.form.conduct_financing
                          ? _c("i", { staticClass: "fas fa-check-circle" })
                          : _c("i", { staticClass: "fas fa-times-circle" }),
                        _vm._v(
                          "\n                            Have You Conducted Financing in the Last 6 Months?"
                        ),
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
                            staticClass: "exclamation-positions",
                            attrs: {
                              title:
                                "Investors rely upon this information to analyze their proposed investments."
                            }
                          },
                          [
                            _c("i", { staticClass: "exclamation-circle-vue" }, [
                              _vm._v("i")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        ref: "conduct_financing",
                        staticClass: "w100",
                        attrs: {
                          options: [
                            { label: "YES", id: 1 },
                            { label: "NO", id: 0 }
                          ],
                          clearable: false,
                          placeholder: "Select Yes or No",
                          reduce: function(conduct) {
                            return conduct.id
                          }
                        },
                        on: { input: _vm.resetFinancingType },
                        model: {
                          value: _vm.form.conduct_financing,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "conduct_financing", $$v)
                          },
                          expression: "form.conduct_financing"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group row" },
                  [
                    _vm.form.conduct_financing != "" &&
                    _vm.form.conduct_financing == 1
                      ? [
                          _c(
                            "div",
                            { staticClass: "col-lg-12" },
                            [
                              _c(
                                "label",
                                { staticClass: "label-with-under-p" },
                                [
                                  _vm.form.financing_type.length
                                    ? _c("i", {
                                        staticClass: "fas fa-check-circle"
                                      })
                                    : _c("i", {
                                        staticClass: "fas fa-times-circle"
                                      }),
                                  _vm._v(
                                    "\n                                Type of\n                                Financing"
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "p-under-input-label fs-12" },
                                [
                                  _vm._v(
                                    "Financing Examples include IPO,\n                                Angel\n                                Investors, Reg CF"
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("v-select", {
                                staticClass: "w100",
                                attrs: {
                                  label: "name",
                                  multiple: "",
                                  selectable: _vm.financingSelectHide,
                                  options: _vm.financingTypeList,
                                  clearable: false,
                                  placeholder: "Select the Options that Apply"
                                },
                                on: {
                                  input: function($event) {
                                    return _vm.showRelatedField(
                                      $event,
                                      "financingTypeIds"
                                    )
                                  }
                                },
                                model: {
                                  value: _vm.form.financing_type,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "financing_type", $$v)
                                  },
                                  expression: "form.financing_type"
                                }
                              })
                            ],
                            1
                          )
                        ]
                      : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("div", { staticClass: "col-lg-12" }, [
                    _c("label", [
                      _vm.form.company_valuation
                        ? _c("i", { staticClass: "fas fa-check-circle" })
                        : _c("i", { staticClass: "fas fa-times-circle" }),
                      _vm._v(
                        "\n                            What is your Company's Most Recent\n                            Valuation?"
                      ),
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
                          staticClass: "exclamation-positions",
                          attrs: {
                            title:
                              "Investors rely upon this information to analyze their proposed investments."
                          }
                        },
                        [
                          _c("i", { staticClass: "exclamation-circle-vue" }, [
                            _vm._v("i")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.company_valuation,
                          expression: "form.company_valuation"
                        }
                      ],
                      ref: "company_valuation",
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Type in a number",
                        autocomplete: "off"
                      },
                      domProps: { value: _vm.form.company_valuation },
                      on: {
                        input: [
                          function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "company_valuation",
                              $event.target.value
                            )
                          },
                          _vm.changeField
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
                  ])
                ]),
                _vm._v(" "),
                [
                  _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "div",
                      { staticClass: "col-lg-12" },
                      [
                        _c("label", [
                          null != _vm.form.audited_finance
                            ? _c("i", { staticClass: "fas fa-check-circle" })
                            : _c("i", { staticClass: "fas fa-times-circle" }),
                          _vm._v(
                            "\n                                Does Company Have Audited\n                                Financials?"
                          ),
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
                              staticClass: "exclamation-positions",
                              attrs: {
                                title:
                                  "Many investors rely upon audited financial statements to analyze their proposed investments. Let investors know if you have audited financials. "
                              }
                            },
                            [
                              _c(
                                "i",
                                { staticClass: "exclamation-circle-vue" },
                                [_vm._v("i")]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("v-select", {
                          staticClass: "w100",
                          attrs: {
                            label: "labelAu",
                            options: [
                              { labelAu: "YES", audit_id: 1 },
                              { labelAu: "NO", audit_id: 0 }
                            ],
                            clearable: false,
                            placeholder: "Select Yes or No",
                            reduce: function(audit) {
                              return audit.audit_id
                            }
                          },
                          on: { input: _vm.changeField },
                          model: {
                            value: _vm.form.audited_finance,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "audited_finance", $$v)
                            },
                            expression: "form.audited_finance"
                          }
                        })
                      ],
                      1
                    )
                  ])
                ],
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-12" },
                    [
                      _c("label", [
                        _vm.form.intelletual_property.length
                          ? _c("i", { staticClass: "fas fa-check-circle" })
                          : _c("i", { staticClass: "fas fa-times-circle" }),
                        _vm._v(
                          "\n                            Does the Company Have Any\n                            Intellectual Property?"
                        ),
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
                            staticClass: "exclamation-positions",
                            attrs: {
                              title:
                                "Intellectual property is an important legal and financial asset, and is attractive to investors. Let investors know if you have intellectual property."
                            }
                          },
                          [
                            _c("i", { staticClass: "exclamation-circle-vue" }, [
                              _vm._v("i")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        ref: "intelletual_property",
                        staticClass: "w100",
                        attrs: {
                          label: "name",
                          multiple: "",
                          selectable: _vm.intelletualPropertySelectedHide,
                          options: _vm.intelletualPropertyList,
                          clearable: false,
                          placeholder: "Select the Options that Apply"
                        },
                        on: { input: _vm.resetIntellectualSelects },
                        model: {
                          value: _vm.form.intelletual_property,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "intelletual_property", $$v)
                          },
                          expression: "form.intelletual_property"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _vm.form.intelletual_property != "" &&
                _vm.patentTypeCondition == "Patents"
                  ? _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "div",
                        { staticClass: "col-lg-12" },
                        [
                          _c("label", [
                            _vm.form.patent_type.length
                              ? _c("i", { staticClass: "fas fa-check-circle" })
                              : _c("i", { staticClass: "fas fa-times-circle" }),
                            _vm._v(
                              "\n                            Which Type of\n                            Patents?"
                            )
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            staticClass: "w100",
                            attrs: {
                              label: "name",
                              multiple: "",
                              selectable: _vm.patentsSelectedHide,
                              options: _vm.patentsTypeList,
                              clearable: false,
                              placeholder: "Select the Options that Apply"
                            },
                            on: {
                              input: function($event) {
                                return _vm.showRelatedField(
                                  $event,
                                  "patentsTypIds"
                                )
                              }
                            },
                            model: {
                              value: _vm.form.patent_type,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "patent_type", $$v)
                              },
                              expression: "form.patent_type"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "text-center mb-4" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary save-changes",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.saveCompanyFinancesData()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                            Save Changes\n                        "
                      )
                    ]
                  )
                ])
              ],
              2
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("loader", { attrs: { "is-visible": _vm.isLoading } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyHistory.vue?vue&type=template&id=5bf55e58&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/CompanyHistory.vue?vue&type=template&id=5bf55e58& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container-fluid px-0" },
    [
      _c(
        "div",
        {
          staticClass:
            "row collapse show no-gutters d-flex h-100 position-relative"
        },
        [
          _c("div", { staticClass: "col-lg-8 company-profile-tab mx-auto" }, [
            _c(
              "div",
              { staticClass: "panel-body companyManageForm" },
              [
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-12" },
                    [
                      _c("label", [
                        _vm.form.formedYear
                          ? _c("i", { staticClass: "fas fa-check-circle" })
                          : _c("i", { staticClass: "fas fa-times-circle" }),
                        _vm._v(
                          "\n                            Year Company Formed\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("datepicker", {
                        attrs: {
                          "input-class": "form-control",
                          typeable: false,
                          "disabled-dates": {
                            to: new Date(1600, 0, 1),
                            from: new Date()
                          },
                          "minimum-view": "year",
                          format: "yyyy",
                          placeholder: "YYYY"
                        },
                        on: { input: _vm.changeField },
                        model: {
                          value: _vm.form.formedYear,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "formedYear", $$v)
                          },
                          expression: "form.formedYear"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("div", { staticClass: "col-lg-12" }, [
                    _c("label", [
                      _vm.form.firstProductOrService
                        ? _c("i", { staticClass: "fas fa-check-circle" })
                        : _c("i", { staticClass: "fas fa-times-circle" }),
                      _vm._v(
                        "\n                            First Product/Service\n                        "
                      )
                    ]),
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
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder: "Type in Product/Service",
                        autocomplete: "off"
                      },
                      domProps: { value: _vm.form.firstProductOrService },
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
                          _vm.changeField
                        ]
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("div", { staticClass: "col-lg-12" }, [
                    _c("label", [
                      _vm.form.numberOfMajorProductOrService
                        ? _c("i", { staticClass: "fas fa-check-circle" })
                        : _c("i", { staticClass: "fas fa-times-circle" }),
                      _vm._v(
                        "\n                            Number of Major Products / Services\n                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.numberOfMajorProductOrService,
                          expression: "form.numberOfMajorProductOrService"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        placeholder:
                          "Type in number of Major Products/Services",
                        autocomplete: "off"
                      },
                      domProps: {
                        value: _vm.form.numberOfMajorProductOrService
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
                          _vm.changeField
                        ]
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-12" },
                    [
                      _c("label", [
                        null != _vm.form.changeDirectionOrStrategy
                          ? _c("i", { staticClass: "fas fa-check-circle" })
                          : _c("i", { staticClass: "fas fa-times-circle" }),
                        _vm._v(
                          "\n                            Did Your Major Product/Service Have a Change in Direction or Strategy?"
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        staticClass: "w100",
                        attrs: {
                          options: [
                            { label: "YES", id: 1 },
                            { label: "NO", id: 0 }
                          ],
                          clearable: false,
                          placeholder: "Select Yes or No",
                          reduce: function(conduct) {
                            return conduct.id
                          }
                        },
                        on: { input: _vm.changeField },
                        model: {
                          value: _vm.form.changeDirectionOrStrategy,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "changeDirectionOrStrategy", $$v)
                          },
                          expression: "form.changeDirectionOrStrategy"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _vm.form.changeDirectionOrStrategy != "" &&
                _vm.form.changeDirectionOrStrategy == 1
                  ? [
                      _c("div", { staticClass: "form-group row" }, [
                        _c("div", { staticClass: "col-lg-12" }, [
                          _c("label", [
                            _vm.form.previousProduct
                              ? _c("i", { staticClass: "fas fa-check-circle" })
                              : _c("i", { staticClass: "fas fa-times-circle" }),
                            _vm._v(
                              "\n                                From What Previous Product to Which New/Planned Product"
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.previousProduct,
                                expression: "form.previousProduct"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Type in previous product",
                              autocomplete: "off"
                            },
                            domProps: { value: _vm.form.previousProduct },
                            on: {
                              input: [
                                function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "previousProduct",
                                    $event.target.value
                                  )
                                },
                                _vm.changeField
                              ]
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group row mb-5" }, [
                        _c(
                          "div",
                          { staticClass: "col-lg-12" },
                          [
                            _c("label", [
                              _vm.form.yearOfchange
                                ? _c("i", {
                                    staticClass: "fas fa-check-circle"
                                  })
                                : _c("i", {
                                    staticClass: "fas fa-times-circle"
                                  }),
                              _vm._v(
                                "\n                            Year of Change\n                        "
                              )
                            ]),
                            _vm._v(" "),
                            _c("datepicker", {
                              attrs: {
                                "input-class": "form-control",
                                typeable: false,
                                "disabled-dates": {
                                  to: new Date(1600, 0, 1),
                                  from: new Date()
                                },
                                "minimum-view": "year",
                                format: "yyyy",
                                placeholder: "YYYY"
                              },
                              on: { input: _vm.changeField },
                              model: {
                                value: _vm.form.yearOfchange,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "yearOfchange", $$v)
                                },
                                expression: "form.yearOfchange"
                              }
                            })
                          ],
                          1
                        )
                      ])
                    ]
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "text-center mb-4" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary save-changes",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.saveCompanyHistoryData()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                            Save Changes\n                        "
                      )
                    ]
                  )
                ])
              ],
              2
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("loader", { attrs: { "is-visible": _vm.isLoading } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyProfile.vue?vue&type=template&id=70bd392e&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/CompanyProfile.vue?vue&type=template&id=70bd392e& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container-fluid px-0" },
    [
      _c(
        "div",
        {
          staticClass:
            "row collapse show no-gutters d-flex h-100 position-relative"
        },
        [
          _c("div", { staticClass: "col-lg-8 company-profile-tab mx-auto" }, [
            _c(
              "form",
              {
                staticClass: "companyManageForm",
                attrs: { id: "companyProfileForm" }
              },
              [
                _c("div", { staticClass: "form-group row" }, [
                  _c("div", { staticClass: "col-lg-12" }, [
                    _c("label", [
                      _vm.form.company_name
                        ? _c("i", { staticClass: "fas fa-check-circle" })
                        : _c("i", { staticClass: "fas fa-times-circle" }),
                      _vm._v("\n                            Company Name"),
                      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.company_name,
                          expression: "form.company_name"
                        }
                      ],
                      ref: "company_name",
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.$v.form.company_name.$error },
                      attrs: {
                        type: "text",
                        name: "CompanyName",
                        placeholder: "Ex: Google",
                        autocomplete: "new-company"
                      },
                      domProps: { value: _vm.form.company_name },
                      on: {
                        input: [
                          function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "company_name",
                              $event.target.value
                            )
                          },
                          _vm.changeField
                        ]
                      }
                    }),
                    _vm._v(" "),
                    !_vm.$v.form.company_name.required
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v(
                            "\n                            Company name is\n                            required.\n                        "
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.errors.company_name
                      ? _c(
                          "span",
                          {
                            staticClass: "invalid-feedback",
                            attrs: { role: "alert" }
                          },
                          [
                            _c("strong", [
                              _vm._v(_vm._s(_vm.errors.company_name[0]))
                            ])
                          ]
                        )
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row mb-4" }, [
                  _c("div", { staticClass: "col-lg-12" }, [
                    _c("label", [
                      _vm.company_logo != null
                        ? _c("i", { staticClass: "fas fa-check-circle" })
                        : _c("i", { staticClass: "fas fa-times-circle" }),
                      _vm._v("\n                            Company Logo")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "mb-1" }, [
                      _c("img", {
                        staticClass:
                          "company-profile-photo cursor-pointer rounded-circle",
                        attrs: {
                          src: _vm.croppedImageSrc,
                          alt: "",
                          width: "80",
                          height: "80"
                        },
                        on: { click: _vm.showImageCropperModal }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "rounded-circle cursor-pointer image-edit-icon-general",
                          on: { click: _vm.showImageCropperModal }
                        },
                        [
                          _c("img", {
                            staticClass: "ml-1",
                            attrs: {
                              src: "/images/pencil-icon.png",
                              title: "",
                              height: "15px"
                            }
                          })
                        ]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("div", { staticClass: "col-lg-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", [
                        _vm.form.hq_address &&
                        _vm.form.hq_city &&
                        _vm.form.hq_state &&
                        _vm.form.hq_zip
                          ? _c("i", { staticClass: "fas fa-check-circle" })
                          : _c("i", { staticClass: "fas fa-times-circle" }),
                        _vm._v(
                          "\n                                Headquarters Geographic Location"
                        ),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v("*")
                        ]),
                        _vm._v(" "),
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
                            staticClass: "exclamation-span",
                            attrs: {
                              title:
                                "Before forming relationships, Investors, Partners, and Suppliers will want to know your location."
                            }
                          },
                          [
                            _c("i", { staticClass: "exclamation-circle-vue" }, [
                              _vm._v("i")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.hq_address,
                            expression: "form.hq_address"
                          }
                        ],
                        ref: "hq_address",
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.$v.form.hq_address.$error },
                        attrs: {
                          type: "text",
                          placeholder: "Address 1",
                          autocomplete: "new-address",
                          name: "Address"
                        },
                        domProps: { value: _vm.form.hq_address },
                        on: {
                          input: [
                            function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "hq_address",
                                $event.target.value
                              )
                            },
                            _vm.changeField
                          ]
                        }
                      }),
                      _vm._v(" "),
                      !_vm.$v.form.hq_address.required
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\n                                Address is\n                                required.\n                            "
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.hq_address2,
                            expression: "form.hq_address2"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "Address2",
                          placeholder: "Address 2",
                          autocomplete: "new-address2"
                        },
                        domProps: { value: _vm.form.hq_address2 },
                        on: {
                          input: [
                            function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "hq_address2",
                                $event.target.value
                              )
                            },
                            _vm.changeField
                          ]
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.hq_city,
                            expression: "form.hq_city"
                          }
                        ],
                        ref: "hq_city",
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.$v.form.hq_city.$error },
                        attrs: {
                          type: "text",
                          name: "City",
                          placeholder: "City",
                          autocomplete: "new-city"
                        },
                        domProps: { value: _vm.form.hq_city },
                        on: {
                          input: [
                            function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "hq_city", $event.target.value)
                            },
                            _vm.changeField
                          ]
                        }
                      }),
                      _vm._v(" "),
                      !_vm.$v.form.hq_city.required
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\n                                City is\n                                required.\n                            "
                            )
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("v-select", {
                          class: {
                            "is-invalid": _vm.$v.form.hq_country.$error
                          },
                          attrs: {
                            label: "name",
                            options: _vm.countries,
                            clearable: false,
                            placeholder: "Select Country",
                            reduce: function(option) {
                              return option.id
                            }
                          },
                          on: { input: _vm.getStatesOrProvinceStatus },
                          model: {
                            value: _vm.form.hq_country,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "hq_country", $$v)
                            },
                            expression: "form.hq_country"
                          }
                        }),
                        _vm._v(" "),
                        !_vm.$v.form.hq_country.required
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v(
                                "\n                                Country is\n                                required.\n                            "
                              )
                            ])
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "div",
                        { staticClass: "row" },
                        [
                          this.haveState == 1
                            ? [
                                _c(
                                  "div",
                                  { staticClass: "col-md-6" },
                                  [
                                    _c("v-select", {
                                      ref: "hq_state",
                                      class: {
                                        "is-invalid":
                                          _vm.$v.form.hq_state.$error
                                      },
                                      attrs: {
                                        label: "name",
                                        options: _vm.StateLists,
                                        name: "State",
                                        "item-value": "name",
                                        "item-text": "name",
                                        filterBy: _vm.filterMatchFirstCharacter,
                                        clearable: false,
                                        autocomplete: "new-state",
                                        placeholder: "Select State",
                                        reduce: function(option) {
                                          return option.id
                                        }
                                      },
                                      on: { input: _vm.changeField },
                                      model: {
                                        value: _vm.form.hq_state,
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, "hq_state", $$v)
                                        },
                                        expression: "form.hq_state"
                                      }
                                    }),
                                    _vm._v(" "),
                                    !_vm.$v.form.hq_state.required
                                      ? _c(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            _vm._v(
                                              "\n                                            State is\n                                            required.\n                                        "
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              ]
                            : [
                                _c("div", { staticClass: "col-md-6" }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.hq_province,
                                        expression: "form.hq_province"
                                      }
                                    ],
                                    ref: "hq_province",
                                    staticClass: "form-control",
                                    class: {
                                      "is-invalid":
                                        _vm.$v.form.hq_province.$error
                                    },
                                    attrs: {
                                      type: "text",
                                      placeholder: "Province",
                                      autocomplete: "new-province"
                                    },
                                    domProps: { value: _vm.form.hq_province },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.form,
                                          "hq_province",
                                          $event.target.value
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  !_vm.$v.form.hq_province.required
                                    ? _c(
                                        "div",
                                        { staticClass: "invalid-feedback" },
                                        [
                                          _vm._v(
                                            "\n                                            Province is\n                                            required.\n                                        "
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ])
                              ],
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-6" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.hq_zip,
                                  expression: "form.hq_zip"
                                }
                              ],
                              ref: "hq_zip",
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.$v.form.hq_zip.$error
                              },
                              attrs: {
                                type: "text",
                                placeholder: "Zip Code",
                                autocomplete: "new-zip"
                              },
                              domProps: { value: _vm.form.hq_zip },
                              on: {
                                input: [
                                  function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "hq_zip",
                                      $event.target.value
                                    )
                                  },
                                  _vm.changeField
                                ]
                              }
                            }),
                            _vm._v(" "),
                            !_vm.$v.form.hq_zip.required
                              ? _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(
                                    "\n                                        Zip Code is\n                                        required.\n                                    "
                                  )
                                ])
                              : _vm._e()
                          ])
                        ],
                        2
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("div", { staticClass: "col-lg-12" }, [
                    _c("label", [
                      _vm.form.company_description
                        ? _c("i", { staticClass: "fas fa-check-circle" })
                        : _c("i", { staticClass: "fas fa-times-circle" }),
                      _vm._v(
                        "\n                            Company Description\n                        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.company_description,
                          expression: "form.company_description"
                        }
                      ],
                      ref: "company_description",
                      staticClass: "form-control",
                      attrs: { name: "CompanyDescription", rows: "2" },
                      domProps: { value: _vm.form.company_description },
                      on: {
                        input: [
                          function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "company_description",
                              $event.target.value
                            )
                          },
                          _vm.changeField
                        ]
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-12" },
                    [
                      _c("label", [
                        _vm.form.company_industry
                          ? _c("i", { staticClass: "fas fa-check-circle" })
                          : _c("i", { staticClass: "fas fa-times-circle" }),
                        _vm._v(
                          "\n                            Company Industry\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        ref: "company_industry",
                        class: {
                          "is-invalid": _vm.$v.form.company_industry.$error
                        },
                        attrs: {
                          label: "description",
                          filterBy: _vm.filterMatchFirstCharacter,
                          options: _vm.industries,
                          clearable: false,
                          placeholder: "Select Industry",
                          reduce: function(option) {
                            return option.id
                          }
                        },
                        on: { input: _vm.changeField },
                        model: {
                          value: _vm.form.company_industry,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "company_industry", $$v)
                          },
                          expression: "form.company_industry"
                        }
                      }),
                      _vm._v(" "),
                      !_vm.$v.form.company_industry.required
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "\n                            Industry is\n                            required.\n                        "
                            )
                          ])
                        : _vm._e()
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-12" },
                    [
                      _c("label", [
                        _vm.form.employee_number
                          ? _c("i", { staticClass: "fas fa-check-circle" })
                          : _c("i", { staticClass: "fas fa-times-circle" }),
                        _vm._v(
                          "\n                            Number of Employees\n                            "
                        ),
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
                            staticClass: "exclamation-span",
                            attrs: {
                              title:
                                "Many Investors, Partners, and Customers want to know the size of your company before facitling a business transaction."
                            }
                          },
                          [
                            _c("i", { staticClass: "exclamation-circle-vue" }, [
                              _vm._v("i")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        ref: "employee_number",
                        staticClass: "w100 media-subject-list",
                        attrs: {
                          label: "name",
                          options: _vm.employeeNumberList,
                          clearable: false,
                          placeholder: "Select Below"
                        },
                        on: { input: _vm.changeField },
                        model: {
                          value: _vm.form.employee_number,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "employee_number", $$v)
                          },
                          expression: "form.employee_number"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-12" },
                    [
                      _c("label", [
                        _vm.form.esg_score.length
                          ? _c("i", { staticClass: "fas fa-check-circle" })
                          : _c("i", { staticClass: "fas fa-times-circle" }),
                        _vm._v(
                          "\n                            Does Your Business Have an ESG Score?"
                        ),
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
                            staticClass: "exclamation-span",
                            attrs: {
                              title:
                                "Investors are increasingly considering ESG scores when investing in companies. Allow investors to understand your score."
                            }
                          },
                          [
                            _c("i", { staticClass: "exclamation-circle-vue" }, [
                              _vm._v("i")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        ref: "esg_score",
                        staticClass: "w100",
                        attrs: {
                          label: "name",
                          multiple: "",
                          selectable: _vm.esgScoreSelectedHide,
                          options: _vm.esgScoreList,
                          clearable: false,
                          placeholder: "Select the Options that Apply"
                        },
                        on: {
                          input: function($event) {
                            return _vm.showRelatedField(
                              $event,
                              "esgScoreListIds"
                            )
                          }
                        },
                        model: {
                          value: _vm.form.esg_score,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "esg_score", $$v)
                          },
                          expression: "form.esg_score"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _vm.esgScoreListIds.includes(1)
                  ? _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "div",
                        { staticClass: "col-lg-12" },
                        [
                          _c("label", [
                            _vm.form.msci_rating
                              ? _c("i", { staticClass: "fas fa-check-circle" })
                              : _c("i", { staticClass: "fas fa-times-circle" }),
                            _vm._v(
                              "\n                            MSCI ESG Rating"
                            )
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            staticClass: "w100",
                            attrs: {
                              label: "name",
                              options: _vm.msciRatingList,
                              clearable: false,
                              placeholder: "Select the options that apply"
                            },
                            on: { input: _vm.changeField },
                            model: {
                              value: _vm.form.msci_rating,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "msci_rating", $$v)
                              },
                              expression: "form.msci_rating"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.esgScoreListIds.includes(2)
                  ? _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "div",
                        { staticClass: "col-lg-12" },
                        [
                          _c("label", [
                            _vm.form.sustainalytics
                              ? _c("i", { staticClass: "fas fa-check-circle" })
                              : _c("i", { staticClass: "fas fa-times-circle" }),
                            _vm._v(
                              "\n                            Sustainalytics ESG Rating"
                            )
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            staticClass: "w100",
                            attrs: {
                              label: "name",
                              options: _vm.sustainalyticsRatingList,
                              clearable: false,
                              placeholder: "Select the options that apply"
                            },
                            on: { input: _vm.changeField },
                            model: {
                              value: _vm.form.sustainalytics,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "sustainalytics", $$v)
                              },
                              expression: "form.sustainalytics"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.esgScoreListIds.includes(3)
                  ? _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "div",
                        { staticClass: "col-lg-12" },
                        [
                          _c(
                            "label",
                            { staticClass: "control-label font-weight-bold" },
                            [
                              _vm.form.cdp_rating
                                ? _c("i", {
                                    staticClass: "fas fa-check-circle"
                                  })
                                : _c("i", {
                                    staticClass: "fas fa-times-circle"
                                  }),
                              _vm._v("\n                            CDP Rating")
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-select", {
                            staticClass: "w100",
                            attrs: {
                              label: "name",
                              options: _vm.cdpRatingList,
                              clearable: false,
                              placeholder: "Select the options that apply"
                            },
                            on: { input: _vm.changeField },
                            model: {
                              value: _vm.form.cdp_rating,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "cdp_rating", $$v)
                              },
                              expression: "form.cdp_rating"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.esgScoreListIds.includes(4)
                  ? _c("div", { staticClass: "form-group row" }, [
                      _c(
                        "div",
                        { staticClass: "col-lg-12" },
                        [
                          _c(
                            "label",
                            { staticClass: "control-label font-weight-bold" },
                            [
                              _vm.form.iss_rating
                                ? _c("i", {
                                    staticClass: "fas fa-check-circle"
                                  })
                                : _c("i", {
                                    staticClass: "fas fa-times-circle"
                                  }),
                              _vm._v("\n                            ISS Rating")
                            ]
                          ),
                          _vm._v(" "),
                          _c("v-select", {
                            staticClass: "w100",
                            attrs: {
                              label: "name",
                              options: _vm.issRatingList,
                              clearable: false,
                              placeholder: "Select the options that apply"
                            },
                            on: { input: _vm.changeField },
                            model: {
                              value: _vm.form.iss_rating,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "iss_rating", $$v)
                              },
                              expression: "form.iss_rating"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-12" },
                    [
                      _c(
                        "label",
                        { staticClass: "control-label font-weight-bold" },
                        [
                          _vm.form.owned_business.length
                            ? _c("i", { staticClass: "fas fa-check-circle" })
                            : _c("i", { staticClass: "fas fa-times-circle" }),
                          _vm._v(
                            "\n                            Minority Owned Businesses"
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-select", {
                        ref: "owned_business",
                        staticClass: "w100 mob-select-list",
                        attrs: {
                          label: "name",
                          multiple: "",
                          selectable: _vm.ownBusinessSelectedHide,
                          options: _vm.ownedBusinessList,
                          clearable: false,
                          placeholder: "Select the Options that Apply"
                        },
                        on: {
                          input: function($event) {
                            return _vm.resetOwnBusinessField(
                              $event,
                              "ownedBusinessListIds"
                            )
                          }
                        },
                        model: {
                          value: _vm.form.owned_business,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "owned_business", $$v)
                          },
                          expression: "form.owned_business"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-center mb-4" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary save-changes",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.saveCompanyProfileData()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Save Changes\n                    "
                      )
                    ]
                  )
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "image-cropper-modal",
          attrs: { centered: "", id: "image-cropper-modal", size: "lg" },
          scopedSlots: _vm._u([
            {
              key: "modal-header",
              fn: function() {
                return [
                  _c(
                    "div",
                    { staticClass: "w-100" },
                    [
                      _c("h3", { staticClass: "float-left" }, [
                        _vm._v("Add icon")
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "modal-close close float-right",
                          on: { click: _vm.closeImageCropperModal }
                        },
                        [_vm._v("x\n                ")]
                      )
                    ],
                    1
                  )
                ]
              },
              proxy: true
            },
            {
              key: "modal-footer",
              fn: function() {
                return [
                  _c("label", { staticClass: "btn btn-default" }, [
                    !_vm.isUploading
                      ? _c("input", {
                          ref: "audioFile",
                          staticStyle: { display: "None" },
                          attrs: {
                            type: "file",
                            name: "audioFile",
                            id: "audioFile",
                            accept: "image/*"
                          },
                          on: { change: _vm.onInputChange }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.imageSrc
                      ? _c("span", [_vm._v("Change icon")])
                      : _c("span", [_vm._v("Upload icon")])
                  ]),
                  _vm._v(" "),
                  _vm.imageSrc
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-default",
                          attrs: { disabled: _vm.isDisabled },
                          on: { click: _vm.uploadImage }
                        },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(
                                _vm.isUploading ? "Uploading..." : "Save icon"
                              ) +
                              "\n            "
                          )
                        ]
                      )
                    : _vm._e()
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "uploader",
              on: {
                dragenter: _vm.OnDragEnter,
                dragleave: _vm.OnDragLeave,
                dragover: function($event) {
                  $event.preventDefault()
                },
                drop: _vm.onDrop
              }
            },
            [
              _c("ImageCropper", {
                ref: "imageCropper",
                attrs: { src: _vm.imageSrc }
              })
            ],
            1
          ),
          _vm._v(" "),
          !_vm.imageSrc
            ? _c("div", { staticClass: "text-center" }, [
                _vm._v("Upload a icon. Then crop and adjust it to perfection.")
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.imageSrc
            ? _c(
                "a",
                {
                  staticClass: "float-right mt-4 image-rotate-icon",
                  on: { click: _vm.imageRotate }
                },
                [_vm._v("Rotate "), _c("i", { staticClass: "fas fa-undo" })]
              )
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("loader", { attrs: { "is-visible": _vm.isLoading } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanySocial.vue?vue&type=template&id=b14dda46&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/CompanySocial.vue?vue&type=template&id=b14dda46&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container-fluid px-0" },
    [
      _c(
        "div",
        {
          staticClass:
            "row collapse show no-gutters d-flex h-100 position-relative"
        },
        [
          _c("div", { staticClass: "col-lg-8 company-profile-tab mx-auto" }, [
            _c(
              "div",
              { staticClass: "panel-body companyManageForm" },
              [
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-12" },
                    [
                      _c("label", [
                        _vm.form.socialMediaPlatform.length
                          ? _c("i", { staticClass: "fas fa-check-circle" })
                          : _c("i", { staticClass: "fas fa-times-circle" }),
                        _vm._v(
                          " Select All Platforms Your Company Has a Presence Online"
                        ),
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
                            staticClass: "exclamation-positions",
                            attrs: {
                              title:
                                "Investors, Partners, and Suppliers want to find you. Input your social media information to increase awareness."
                            }
                          },
                          [
                            _c("i", { staticClass: "exclamation-circle-vue" }, [
                              _vm._v("i")
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        staticClass: "w100",
                        attrs: {
                          label: "name",
                          multiple: "",
                          selectable: _vm.selectHide,
                          options: _vm.socialMediaPlatforms,
                          clearable: false,
                          placeholder: "None"
                        },
                        on: {
                          input: function($event) {
                            return _vm.showRelatedSocialField(
                              $event,
                              "listOfSocialPlatformId",
                              "manual"
                            )
                          }
                        },
                        model: {
                          value: _vm.form.socialMediaPlatform,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "socialMediaPlatform", $$v)
                          },
                          expression: "form.socialMediaPlatform"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _vm._l(_vm.$v.socialMediaPlatforms.$each.$iter, function(
                  platform,
                  platformIndex
                ) {
                  return [
                    _vm.listOfSocialPlatformId.includes(platform.$model.id)
                      ? _c("div", { staticClass: "form-group row" }, [
                          _c("div", { staticClass: "input-group col-12" }, [
                            platform.$model.icon_class
                              ? _c(
                                  "div",
                                  { staticClass: "input-group-prepend" },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "btn social-icon-group" },
                                      [
                                        "scoop" ==
                                        platform.$model.url_validate_string
                                          ? _c(
                                              "div",
                                              {
                                                staticStyle: {
                                                  height: "18px",
                                                  width: "18px"
                                                }
                                              },
                                              [
                                                _c(
                                                  "svg",
                                                  {
                                                    attrs: {
                                                      "enable-background":
                                                        "new 0 0 128 128",
                                                      id: "Social_Icons",
                                                      version: "1.1",
                                                      viewBox: "0 0 128 128",
                                                      "xml:space": "preserve",
                                                      xmlns:
                                                        "http://www.w3.org/2000/svg",
                                                      "xmlns:xlink":
                                                        "http://www.w3.org/1999/xlink"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "g",
                                                      {
                                                        attrs: {
                                                          id: "_x32__stroke"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "g",
                                                          {
                                                            attrs: {
                                                              id: "Scoopit"
                                                            }
                                                          },
                                                          [
                                                            _c("rect", {
                                                              attrs: {
                                                                "clip-rule":
                                                                  "evenodd",
                                                                fill: "none",
                                                                "fill-rule":
                                                                  "evenodd",
                                                                height: "128",
                                                                width: "128"
                                                              }
                                                            }),
                                                            _c("path", {
                                                              attrs: {
                                                                "clip-rule":
                                                                  "evenodd",
                                                                d:
                                                                  "M83.622,90.814h16.529v15.89H83.622V90.814z     M44.126,20.568c-4.682,0.051-11.6,0.042-16.277,0l-0.028,14.168h16.291L44.126,20.568z M69.044,20.568l-16.553-0.009    l0.023,21.856L27.756,42.41l0.037,32.14l0.005,32.177h16.436l-0.047-52.974l8.295-0.005l-0.019,38.027    c0,1.919,0.117,3.833,0.364,5.737c0.686,5.471,3.025,8.295,8.108,9.304c5.602,1.111,11.992,0.537,17.612-0.065l0.023-11.32    c-0.378,0.009-3.776,0.009-4.15,0c-3.646-0.126-5.326-1.667-5.345-5.317L69.03,53.744l9.537,0.005l0.005-11.283l-9.551-0.005    L69.044,20.568z M83.617,38.605l2.259,44.441c3.3-0.065,8.762-0.047,12.062-0.014l2.236-44.585l0.042-17.893H83.608L83.617,38.605    z M0,128V0h128v128H0z",
                                                                fill: "#000000",
                                                                "fill-rule":
                                                                  "evenodd",
                                                                id: "Scoopit_1_"
                                                              }
                                                            })
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          : "tiktok.com" ==
                                            platform.$model.url_validate_string
                                          ? _c(
                                              "svg",
                                              {
                                                attrs: {
                                                  xmlns:
                                                    "http://www.w3.org/2000/svg",
                                                  "xmlns:xlink":
                                                    "http://www.w3.org/1999/xlink",
                                                  "aria-hidden": "true",
                                                  focusable: "false",
                                                  width: "16px",
                                                  height: "16px",
                                                  preserveAspectRatio:
                                                    "xMidYMid meet",
                                                  viewBox: "0 0 32 32"
                                                }
                                              },
                                              [
                                                _c("path", {
                                                  attrs: {
                                                    d:
                                                      "M16.708.027C18.453 0 20.188.016 21.921 0c.105 2.041.839 4.12 2.333 5.563c1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-.063-3.855-.463-5.6-1.291c-.76-.344-1.468-.787-2.161-1.24c-.009 3.896.016 7.787-.025 11.667c-.104 1.864-.719 3.719-1.803 5.255c-1.744 2.557-4.771 4.224-7.88 4.276c-1.907.109-3.812-.411-5.437-1.369C4.307 29.027 2.412 26.12 2.136 23a22.3 22.3 0 0 1-.016-1.984c.24-2.537 1.495-4.964 3.443-6.615c2.208-1.923 5.301-2.839 8.197-2.297c.027 1.975-.052 3.948-.052 5.923c-1.323-.428-2.869-.308-4.025.495a4.618 4.618 0 0 0-1.819 2.333c-.276.676-.197 1.427-.181 2.145c.317 2.188 2.421 4.027 4.667 3.828c1.489-.016 2.916-.88 3.692-2.145c.251-.443.532-.896.547-1.417c.131-2.385.079-4.76.095-7.145c.011-5.375-.016-10.735.025-16.093z",
                                                    fill: "#626262"
                                                  }
                                                })
                                              ]
                                            )
                                          : _c("i", {
                                              class: platform.$model.icon_class
                                            })
                                      ]
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model.trim",
                                  value: platform.value.$model,
                                  expression: "platform.value.$model",
                                  modifiers: { trim: true }
                                }
                              ],
                              staticClass: "form-control",
                              class: { "is-invalid": platform.$error },
                              attrs: {
                                type: "text",
                                id: "platform_field_" + platform.$model.id,
                                placeholder: "Please Enter URL",
                                autocomplete: "off"
                              },
                              domProps: { value: platform.value.$model },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    platform.value,
                                    "$model",
                                    $event.target.value.trim()
                                  )
                                },
                                blur: function($event) {
                                  return _vm.$forceUpdate()
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "input-group-append" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "btn social-content-delete-icon",
                                  on: {
                                    click: function($event) {
                                      return _vm.removePlatform(
                                        platform.$model.id
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-minus-circle"
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            !platform.value.required
                              ? _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(platform.$model.name) +
                                      " is required.\n                            "
                                  )
                                ])
                              : !platform.value.customValidate
                              ? _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(
                                    "\n                                Please provide valid url.\n                            "
                                  )
                                ])
                              : _vm._e()
                          ])
                        ])
                      : _vm._e()
                  ]
                }),
                _vm._v(" "),
                _c("div", { staticClass: "text-center mb-4" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary save-changes",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.saveCompanySocialData()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                            Save Changes\n                        "
                      )
                    ]
                  )
                ])
              ],
              2
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("loader", { attrs: { "is-visible": _vm.isLoading } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyTaxonomy.vue?vue&type=template&id=2643b27e&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/CompanyTaxonomy.vue?vue&type=template&id=2643b27e& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "text-center mt-4 mb-5" }, [
    _c(
      "div",
      { staticClass: "row mx-auto w-100" },
      _vm._l(_vm.multipleNodes, function(each, index) {
        return _c(
          "div",
          {
            key: each.categorization_id,
            staticClass: "border-0 col-lg-3 col-md-4 pb-3",
            attrs: { "no-body": "" }
          },
          [
            _c("CompanyNodeCollapses", {
              attrs: {
                each: each,
                objectIndex: index,
                enableEditButton: _vm.enableEditButton
              },
              on: { categorizationId: _vm.getCategorizationId }
            })
          ],
          1
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyTypes.vue?vue&type=template&id=9561d78e&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/CompanyTypes.vue?vue&type=template&id=9561d78e& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container-fluid px-0" },
    [
      _c(
        "div",
        {
          staticClass:
            "row collapse show no-gutters d-flex h-100 position-relative"
        },
        [
          _c("div", { staticClass: "col-lg-8 company-profile-tab mx-auto" }, [
            _c("div", { staticClass: "panel-body companyManageForm" }, [
              _c(
                "div",
                { staticClass: "form-group" },
                [
                  _c("label", [
                    _vm.form.domicile_country
                      ? _c("i", { staticClass: "fas fa-check-circle" })
                      : _c("i", { staticClass: "fas fa-times-circle" }),
                    _vm._v(
                      "\n                        Company Country of Domicile\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      label: "name",
                      options: _vm.countries,
                      clearable: false,
                      placeholder: "Select Country",
                      name: "country",
                      autocomplete: "new-country",
                      reduce: function(option) {
                        return option.id
                      }
                    },
                    on: { input: _vm.getEntityTypeList },
                    model: {
                      value: _vm.form.domicile_country,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "domicile_country", $$v)
                      },
                      expression: "form.domicile_country"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm.form.domicile_country
                ? _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "div",
                      { staticClass: "col-lg-12" },
                      [
                        _c("label", [
                          _vm.form.entity_type
                            ? _c("i", { staticClass: "fas fa-check-circle" })
                            : _c("i", { staticClass: "fas fa-times-circle" }),
                          _vm._v(
                            "\n                            Entity Type -\n                            Organizational\n                            Structure\n                            "
                          ),
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
                              staticClass: "exclamation-positions",
                              attrs: {
                                title:
                                  "Many companies have the same name (Blue Foods, LLC vs Blue Foods, Inc). Input your organizational structure so our users can tell the difference between companies."
                              }
                            },
                            [
                              _c(
                                "i",
                                { staticClass: "exclamation-circle-vue" },
                                [_vm._v("i")]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("v-select", {
                          ref: "entity_type",
                          staticClass: "w100",
                          attrs: {
                            label: "name",
                            name: "entity_type",
                            options: _vm.entityTypes,
                            clearable: false,
                            reduce: function(option) {
                              return option.id
                            },
                            placeholder: "Select Below"
                          },
                          on: { input: _vm.changeField },
                          model: {
                            value: _vm.form.entity_type,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "entity_type", $$v)
                            },
                            expression: "form.entity_type"
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors.entity_type
                          ? _c(
                              "span",
                              {
                                staticClass: "invalid-feedback",
                                attrs: { role: "alert" }
                              },
                              [
                                _c("strong", [
                                  _vm._v(_vm._s(_vm.errors.entity_type[0]))
                                ])
                              ]
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-12" },
                  [
                    _c("label", [
                      _vm.form.trading_and_reporting_status
                        ? _c("i", { staticClass: "fas fa-check-circle" })
                        : _c("i", { staticClass: "fas fa-times-circle" }),
                      _vm._v(
                        "\n                            Public or Private Company Type"
                      ),
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
                          staticClass: "exclamation-positions",
                          attrs: {
                            title:
                              "Before forming relationships, Investors, Partners, and Suppliers will want to understand if your domestic or internationally based."
                          }
                        },
                        [
                          _c("i", { staticClass: "exclamation-circle-vue" }, [
                            _vm._v("i")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "trading_and_reporting_status",
                      staticClass: "w100",
                      attrs: {
                        label: "name",
                        options: _vm.privatePublicCompanyTypes,
                        clearable: false,
                        placeholder: "Select Below"
                      },
                      on: {
                        input: function($event) {
                          return _vm.getTradingAndReportingStatusList(
                            _vm.form.trading_and_reporting_status,
                            "refresh"
                          )
                        }
                      },
                      model: {
                        value: _vm.form.trading_and_reporting_status,
                        callback: function($$v) {
                          _vm.$set(
                            _vm.form,
                            "trading_and_reporting_status",
                            $$v
                          )
                        },
                        expression: "form.trading_and_reporting_status"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              (_vm.form.trading_and_reporting_status != null
              ? _vm.form.trading_and_reporting_status.tag == "public" ||
                _vm.form.trading_and_reporting_status.tag == "private"
              : "")
                ? _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "div",
                      { staticClass: "col-lg-12" },
                      [
                        _c("label", [
                          _vm.form.public_private_reporting_status
                            ? _c("i", { staticClass: "fas fa-check-circle" })
                            : _c("i", { staticClass: "fas fa-times-circle" }),
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.reporting_status_label)
                          )
                        ]),
                        _vm._v(" "),
                        _c("v-select", {
                          staticClass: "w100",
                          attrs: {
                            label: "name",
                            options: _vm.tradingAndReportingStatusList,
                            clearable: false,
                            placeholder: "Select Below"
                          },
                          on: { input: _vm.resetPubliclyTreadedCompany },
                          model: {
                            value: _vm.form.public_private_reporting_status,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.form,
                                "public_private_reporting_status",
                                $$v
                              )
                            },
                            expression: "form.public_private_reporting_status"
                          }
                        })
                      ],
                      1
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              !!_vm.form.trading_and_reporting_status &&
              _vm.form.trading_and_reporting_status.tag == "public" &&
              !!_vm.form.public_private_reporting_status &&
              (_vm.form.public_private_reporting_status.id == 1 ||
                _vm.form.public_private_reporting_status.id == 2)
                ? _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "div",
                      { staticClass: "col-lg-12" },
                      [
                        _c("label", [
                          _vm.form.publicly_traded_company
                            ? _c("i", { staticClass: "fas fa-check-circle" })
                            : _c("i", { staticClass: "fas fa-times-circle" }),
                          _vm._v(
                            "\n                            Type of Publicly Traded\n                            Company (USA\n                            or International)"
                          )
                        ]),
                        _vm._v(" "),
                        _c("v-select", {
                          staticClass: "w100",
                          attrs: {
                            label: "name",
                            options: _vm.publiclyTradedCompanyTypeList,
                            clearable: false,
                            placeholder: "Select Below"
                          },
                          on: {
                            input:
                              _vm.resetDomesticOrInternationalExchangeTradedOn
                          },
                          model: {
                            value: _vm.form.publicly_traded_company,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "publicly_traded_company", $$v)
                            },
                            expression: "form.publicly_traded_company"
                          }
                        })
                      ],
                      1
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-12" },
                  [
                    _c("label", [
                      _vm.form.shareholder_number
                        ? _c("i", { staticClass: "fas fa-check-circle" })
                        : _c("i", { staticClass: "fas fa-times-circle" }),
                      _vm._v(
                        "\n                            Number of\n                            Shareholders"
                      ),
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
                          staticClass: "exclamation-positions",
                          attrs: {
                            title:
                              "Investors rely upon this information to analyze their proposed investments."
                          }
                        },
                        [
                          _c("i", { staticClass: "exclamation-circle-vue" }, [
                            _vm._v("i")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "shareholder_number",
                      staticClass: "w100",
                      attrs: {
                        label: "name",
                        options: _vm.shareholderNumberList,
                        placeholder: "Select Below",
                        clearable: false
                      },
                      on: { input: _vm.changeField },
                      model: {
                        value: _vm.form.shareholder_number,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "shareholder_number", $$v)
                        },
                        expression: "form.shareholder_number"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              !!_vm.form.trading_and_reporting_status &&
              _vm.form.trading_and_reporting_status.tag == "public" &&
              !!_vm.form.public_private_reporting_status &&
              (_vm.form.public_private_reporting_status.id == 1 ||
                _vm.form.public_private_reporting_status.id == 2)
                ? _c("div", { staticClass: "form-group row" }, [
                    _c("div", { staticClass: "col-lg-12" }, [
                      _c("label", [
                        _vm.form.ticker_symbol
                          ? _c("i", { staticClass: "fas fa-check-circle" })
                          : _c("i", { staticClass: "fas fa-times-circle" }),
                        _vm._v("\n                            Ticker Symbol")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.ticker_symbol,
                            expression: "form.ticker_symbol"
                          }
                        ],
                        ref: "ticker_symbol",
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          placeholder: "Ex: GOOG",
                          autocomplete: "off"
                        },
                        domProps: { value: _vm.form.ticker_symbol },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "ticker_symbol",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-12" },
                  [
                    _c("label", [
                      _vm.form.base_currency
                        ? _c("i", { staticClass: "fas fa-check-circle" })
                        : _c("i", { staticClass: "fas fa-times-circle" }),
                      _vm._v("\n                            Base Currency"),
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
                          staticClass: "exclamation-positions",
                          attrs: {
                            title:
                              "Investors, partners, and customers need to understand which currency your company operates in, and if it's similar to their base currency."
                          }
                        },
                        [
                          _c("i", { staticClass: "exclamation-circle-vue" }, [
                            _vm._v("i")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "base_currency",
                      staticClass: "w100",
                      attrs: {
                        label: "name",
                        options: _vm.baseCurrencyList,
                        clearable: false,
                        placeholder: "Select Below"
                      },
                      on: { input: _vm.changeField },
                      model: {
                        value: _vm.form.base_currency,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "base_currency", $$v)
                        },
                        expression: "form.base_currency"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              !!_vm.form.trading_and_reporting_status &&
              _vm.form.trading_and_reporting_status.tag == "public" &&
              !!_vm.form.public_private_reporting_status &&
              (_vm.form.public_private_reporting_status.id == 1 ||
                _vm.form.public_private_reporting_status.id == 2) &&
              !!_vm.form.publicly_traded_company &&
              (_vm.form.publicly_traded_company.id == 1 ||
                _vm.form.publicly_traded_company.id == 2 ||
                _vm.form.publicly_traded_company.id == 3)
                ? _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "div",
                      { staticClass: "col-lg-12" },
                      [
                        _c("label", { staticClass: "label-with-under-p" }, [
                          _vm.form.exchange_traded_on.length
                            ? _c("i", { staticClass: "fas fa-check-circle" })
                            : _c("i", { staticClass: "fas fa-times-circle" }),
                          _vm._v(
                            "\n                            Domestic or\n                            International Exchange Traded On "
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "p-under-input-label fs-12" }, [
                          _vm._v("if Dual-Listed Select all that Apply")
                        ]),
                        _vm._v(" "),
                        _c("v-select", {
                          staticClass: "w100 iet-list",
                          attrs: {
                            label: "name",
                            multiple: "",
                            selectable: _vm.selectHide,
                            options: _vm.exchangeTradedList,
                            clearable: false,
                            placeholder: "Select Options That Apply"
                          },
                          on: {
                            input: function($event) {
                              return _vm.showRelatedField($event)
                            }
                          },
                          model: {
                            value: _vm.form.exchange_traded_on,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "exchange_traded_on", $$v)
                            },
                            expression: "form.exchange_traded_on"
                          }
                        })
                      ],
                      1
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c("div", { staticClass: "col-lg-12" }, [
                  _c("label", [
                    !!_vm.form.isin
                      ? _c("i", { staticClass: "fas fa-check-circle" })
                      : _c("i", { staticClass: "fas fa-times-circle" }),
                    _vm._v(" ISIN\n                        ")
                  ]),
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
                    ref: "isin",
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "Type in ISIN",
                      autocomplete: "off"
                    },
                    domProps: { value: _vm.form.isin },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "isin", $event.target.value)
                        },
                        _vm.changeField
                      ]
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c("div", { staticClass: "col-lg-12" }, [
                  _c("label", [
                    !!_vm.form.cusip
                      ? _c("i", { staticClass: "fas fa-check-circle" })
                      : _c("i", { staticClass: "fas fa-times-circle" }),
                    _vm._v(" CUSIP\n                        ")
                  ]),
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
                    ref: "cusip",
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      placeholder: "Type in CUSIP",
                      autocomplete: "off"
                    },
                    domProps: { value: _vm.form.cusip },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "cusip", $event.target.value)
                        },
                        _vm.changeField
                      ]
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-12" },
                  [
                    _c("label", [
                      null != _vm.form.conglomerate
                        ? _c("i", { staticClass: "fas fa-check-circle" })
                        : _c("i", { staticClass: "fas fa-times-circle" }),
                      _vm._v(
                        "\n                            Are You a Conglomerate?"
                      ),
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
                          staticClass: "exclamation-positions",
                          attrs: {
                            title:
                              "Investors rely upon this information to analyze their proposed investments."
                          }
                        },
                        [
                          _c("i", { staticClass: "exclamation-circle-vue" }, [
                            _vm._v("i")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "conglomerate",
                      staticClass: "w100",
                      attrs: {
                        options: [
                          { label: "YES", id: 1 },
                          { label: "NO", id: 0 }
                        ],
                        clearable: false,
                        placeholder: "Select Yes or No",
                        reduce: function(option) {
                          return option.id
                        }
                      },
                      on: { input: _vm.resetSubsidiaryData },
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
                )
              ]),
              _vm._v(" "),
              _vm.form.conglomerate
                ? _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "div",
                      { staticClass: "col-lg-12" },
                      [
                        _c("label", [
                          _vm.form.subsidiary_name.length
                            ? _c("i", { staticClass: "fas fa-check-circle" })
                            : _c("i", { staticClass: "fas fa-times-circle" }),
                          _vm._v(
                            "\n                            Name of Subsidiaries ("
                          ),
                          _vm._m(0),
                          _vm._v(")")
                        ]),
                        _vm._v(" "),
                        _c("v-select", {
                          staticClass: "w100",
                          attrs: {
                            "no-drop": "",
                            taggable: "",
                            multiple: "",
                            "select-on-key-codes": [188, 13],
                            "close-on-select": false,
                            placeholder: "Ex: A, B"
                          },
                          on: { input: _vm.changeField },
                          model: {
                            value: _vm.form.subsidiary_name,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "subsidiary_name", $$v)
                            },
                            expression: "form.subsidiary_name"
                          }
                        })
                      ],
                      1
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "text-center mb-4" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary save-changes",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.saveCompanyTypesData()
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                            Save Changes\n                        "
                    )
                  ]
                )
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("loader", { attrs: { "is-visible": _vm.isLoading } })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "label-caption" }, [
      _c("i", [_vm._v("Press Enter or comma to separate entries")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CorporateActions.vue?vue&type=template&id=0c11f2d6&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/CorporateActions.vue?vue&type=template&id=0c11f2d6& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container-fluid px-0" },
    [
      _c(
        "div",
        {
          staticClass:
            "row collapse show no-gutters d-flex h-100 position-relative"
        },
        [
          _c("div", { staticClass: "col-lg-8 company-profile-tab mx-auto" }, [
            _c(
              "div",
              { staticClass: "panel-body companyManageForm" },
              [
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-12" },
                    [
                      _c("label", [
                        null != _vm.form.acquisitionsMade
                          ? _c("i", { staticClass: "fas fa-check-circle" })
                          : _c("i", { staticClass: "fas fa-times-circle" }),
                        _vm._v(
                          "\n                            Acquisitions Made"
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        staticClass: "w100",
                        attrs: {
                          options: [
                            { label: "YES", id: 1 },
                            { label: "NO", id: 0 }
                          ],
                          clearable: false,
                          placeholder: "Select Yes or No",
                          reduce: function(acquis) {
                            return acquis.id
                          }
                        },
                        on: { input: _vm.changeAcquisitionsMade },
                        model: {
                          value: _vm.form.acquisitionsMade,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "acquisitionsMade", $$v)
                          },
                          expression: "form.acquisitionsMade"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _vm.form.acquisitionsMade != "" &&
                _vm.form.acquisitionsMade == 1
                  ? _vm._l(_vm.form.acquisitions, function(input, index) {
                      return _c("div", { staticClass: "clearfix" }, [
                        _c("div", { staticClass: "form-group row" }, [
                          _c("div", { staticClass: "col-lg-12" }, [
                            _c("label", [
                              input.name
                                ? _c("i", {
                                    staticClass: "fas fa-check-circle"
                                  })
                                : _c("i", {
                                    staticClass: "fas fa-times-circle"
                                  }),
                              _vm._v(
                                "\n                                    Acquisition Name\n                                "
                              )
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: input.name,
                                  expression: "input.name"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "Type in acquisitions name",
                                autocomplete: "off"
                              },
                              domProps: { value: input.name },
                              on: {
                                input: [
                                  function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(input, "name", $event.target.value)
                                  },
                                  _vm.changeField
                                ]
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group row mb-0" }, [
                          _c(
                            "div",
                            { staticClass: "col-lg-12" },
                            [
                              _c("label", [
                                input.year
                                  ? _c("i", {
                                      staticClass: "fas fa-check-circle"
                                    })
                                  : _c("i", {
                                      staticClass: "fas fa-times-circle"
                                    }),
                                _vm._v(
                                  "\n                                    Acquisition Year\n                                "
                                )
                              ]),
                              _vm._v(" "),
                              _c("datepicker", {
                                attrs: {
                                  "input-class": "form-control",
                                  typeable: false,
                                  "disabled-dates": {
                                    to: new Date(1600, 0, 1),
                                    from: new Date()
                                  },
                                  "minimum-view": "year",
                                  format: "yyyy",
                                  placeholder: "YYYY"
                                },
                                on: { input: _vm.changeField },
                                model: {
                                  value: input.year,
                                  callback: function($$v) {
                                    _vm.$set(input, "year", $$v)
                                  },
                                  expression: "input.year"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        0 == index
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "float-right add-multiple cursor-pointer p-0",
                                on: { click: _vm.addMoreAcquisition }
                              },
                              [
                                _vm._v(
                                  "+ Add Acquisition\n                        "
                                )
                              ]
                            )
                          : _c(
                              "div",
                              {
                                staticClass:
                                  "float-right add-multiple cursor-pointer p-0",
                                on: {
                                  click: function($event) {
                                    return _vm.removeAcquisition(index)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            - Remove Acquisition\n                        "
                                )
                              ]
                            )
                      ])
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-12" },
                    [
                      _c("label", [
                        null != _vm.form.spinOffMade
                          ? _c("i", { staticClass: "fas fa-check-circle" })
                          : _c("i", { staticClass: "fas fa-times-circle" }),
                        _vm._v("\n                            Spin Offs")
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        staticClass: "w100",
                        attrs: {
                          options: [
                            { label: "YES", id: 1 },
                            { label: "NO", id: 0 }
                          ],
                          clearable: false,
                          placeholder: "Select Yes or No",
                          reduce: function(spin) {
                            return spin.id
                          }
                        },
                        on: { input: _vm.changeSpinOffMade },
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
                  )
                ]),
                _vm._v(" "),
                _vm.form.spinOffMade != "" && _vm.form.spinOffMade == 1
                  ? _vm._l(_vm.form.spinOff, function(input, index) {
                      return _c("div", { staticClass: "clearfix" }, [
                        _c("div", { staticClass: "form-group row" }, [
                          _c("div", { staticClass: "col-lg-12" }, [
                            _c("label", [
                              input.spinOff_acquisitions_name
                                ? _c("i", {
                                    staticClass: "fas fa-check-circle"
                                  })
                                : _c("i", {
                                    staticClass: "fas fa-times-circle"
                                  }),
                              _vm._v(
                                "\n                                    Spin Offs Acquisition Name\n                                "
                              )
                            ]),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: input.spinOff_acquisitions_name,
                                  expression: "input.spinOff_acquisitions_name"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder:
                                  "Type in spin offs acquisitions name",
                                autocomplete: "off"
                              },
                              domProps: {
                                value: input.spinOff_acquisitions_name
                              },
                              on: {
                                input: [
                                  function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      input,
                                      "spinOff_acquisitions_name",
                                      $event.target.value
                                    )
                                  },
                                  _vm.changeField
                                ]
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group row mb-0" }, [
                          _c(
                            "div",
                            { staticClass: "col-lg-12" },
                            [
                              _c("label", [
                                input.spinOff_acquisitions_year
                                  ? _c("i", {
                                      staticClass: "fas fa-check-circle"
                                    })
                                  : _c("i", {
                                      staticClass: "fas fa-times-circle"
                                    }),
                                _vm._v(
                                  "\n                                    Spin Offs Acquisition Year\n                                "
                                )
                              ]),
                              _vm._v(" "),
                              _c("datepicker", {
                                attrs: {
                                  "input-class": "form-control",
                                  typeable: false,
                                  "disabled-dates": {
                                    to: new Date(1600, 0, 1),
                                    from: new Date()
                                  },
                                  "minimum-view": "year",
                                  format: "yyyy",
                                  placeholder: "YYYY"
                                },
                                on: { input: _vm.changeField },
                                model: {
                                  value: input.spinOff_acquisitions_year,
                                  callback: function($$v) {
                                    _vm.$set(
                                      input,
                                      "spinOff_acquisitions_year",
                                      $$v
                                    )
                                  },
                                  expression: "input.spinOff_acquisitions_year"
                                }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        0 == index
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "float-right add-multiple cursor-pointer p-0",
                                on: { click: _vm.addMoreSpinOff }
                              },
                              [
                                _vm._v(
                                  "+ Add Spin Off\n                        "
                                )
                              ]
                            )
                          : _c(
                              "div",
                              {
                                staticClass:
                                  "float-right add-multiple cursor-pointer p-0",
                                on: {
                                  click: function($event) {
                                    return _vm.removeSpinOff(index)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                            - Remove Spin Off\n                        "
                                )
                              ]
                            )
                      ])
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-12" },
                    [
                      _c("label", [
                        null != _vm.form.dividend
                          ? _c("i", { staticClass: "fas fa-check-circle" })
                          : _c("i", { staticClass: "fas fa-times-circle" }),
                        _vm._v(
                          "\n                            Dividend Currently Being Issued"
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        staticClass: "w100",
                        attrs: {
                          options: [
                            { label: "YES", id: 1 },
                            { label: "NO", id: 0 }
                          ],
                          clearable: false,
                          placeholder: "Select Yes or No",
                          reduce: function(divi) {
                            return divi.id
                          }
                        },
                        on: { input: _vm.changeField },
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
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-center mb-4" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary save-changes",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.saveCompanyCorporateActionData()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Save Changes\n                    "
                      )
                    ]
                  )
                ])
              ],
              2
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("loader", { attrs: { "is-visible": _vm.isLoading } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/LeadershipAndGovernence.vue?vue&type=template&id=3954a5a3&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/LeadershipAndGovernence.vue?vue&type=template&id=3954a5a3& ***!
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
    { staticClass: "container-fluid px-0" },
    [
      _c(
        "div",
        {
          staticClass:
            "row collapse show no-gutters d-flex h-100 position-relative"
        },
        [
          _c("div", { staticClass: "col-lg-8 company-profile-tab mx-auto" }, [
            _c(
              "div",
              { staticClass: "panel-body companyManageForm" },
              [
                _c("h3", { staticClass: "text-center pt-2" }, [
                  _vm._v("Board Members")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-12" },
                    [
                      _c("label", [
                        _vm.totalBoardMembers
                          ? _c("i", { staticClass: "fas fa-check-circle" })
                          : _c("i", { staticClass: "fas fa-times-circle" }),
                        _vm._v(
                          "\n                            Number Of Board Members"
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        staticClass: "w100 lag-dropdown",
                        attrs: {
                          options: _vm.boardMemberOptions,
                          clearable: false,
                          placeholder: "Select a number",
                          reduce: function(boardMemberOption) {
                            return boardMemberOption.id
                          }
                        },
                        on: { input: _vm.boardMemberOptionSelected },
                        model: {
                          value: _vm.boardMemberSelected,
                          callback: function($$v) {
                            _vm.boardMemberSelected = $$v
                          },
                          expression: "boardMemberSelected"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _vm._l(_vm.form.boardMembers, function(input, index) {
                  return _c(
                    "div",
                    { staticClass: "clearfix" },
                    [
                      _c("div", { staticClass: "form-group row" }, [
                        _c("div", { staticClass: "col-lg-4" }, [
                          _c("label", [
                            input.firstName
                              ? _c("i", { staticClass: "fas fa-check-circle" })
                              : _c("i", { staticClass: "fas fa-times-circle" }),
                            _vm._v(
                              "\n                                    Name\n                                "
                            )
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: input.firstName,
                                expression: "input.firstName"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Type in first name",
                              autocomplete: "off"
                            },
                            domProps: { value: input.firstName },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  input,
                                  "firstName",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-4" }, [
                          _c("label", [_vm._v(" ")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: input.lastName,
                                expression: "input.lastName"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              placeholder: "Type in last name",
                              autocomplete: "off"
                            },
                            domProps: { value: input.lastName },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(input, "lastName", $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-lg-4" },
                          [
                            _c("label", [
                              input.committee
                                ? _c("i", {
                                    staticClass: "fas fa-check-circle"
                                  })
                                : _c("i", {
                                    staticClass: "fas fa-times-circle"
                                  }),
                              _vm._v(
                                "\n                                    Committee\n                                "
                              )
                            ]),
                            _vm._v(" "),
                            _c("v-select", {
                              staticClass: "w100 role-dropdown",
                              attrs: {
                                label: "name",
                                options: _vm.committeeOptions,
                                clearable: false,
                                placeholder: "Select a type of committee",
                                reduce: function(option) {
                                  return option.id
                                }
                              },
                              on: {
                                input: function($event) {
                                  return _vm.committeeSelected($event, index)
                                }
                              },
                              model: {
                                value: input.committee,
                                callback: function($$v) {
                                  _vm.$set(input, "committee", $$v)
                                },
                                expression: "input.committee"
                              }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      [
                        _c(
                          "div",
                          {
                            staticClass: "clearfix d-none",
                            attrs: { id: "otherCommittee-" + index }
                          },
                          [
                            _c("div", { staticClass: "form-group row" }, [
                              _c("div", { staticClass: "col-lg-8" }),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-lg-4" }, [
                                _c("label", [
                                  input.otherCommittee
                                    ? _c("i", {
                                        staticClass: "fas fa-check-circle"
                                      })
                                    : _c("i", {
                                        staticClass: "fas fa-times-circle"
                                      }),
                                  _vm._v(
                                    "\n                                            Other Committee\n                                        "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: input.otherCommittee,
                                      expression: "input.otherCommittee"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    placeholder: "Other committee name",
                                    autocomplete: "off"
                                  },
                                  domProps: { value: input.otherCommittee },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        input,
                                        "otherCommittee",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ])
                          ]
                        )
                      ],
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "float-right add-multiple cursor-pointer p-0",
                          on: {
                            click: function($event) {
                              return _vm.removeBoardMember(index)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                            - Remove Board Member\n                        "
                          )
                        ]
                      )
                    ],
                    2
                  )
                }),
                _vm._v(" "),
                _c("h3", { staticClass: "text-center pt-2" }, [
                  _vm._v("Executives")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "div",
                    { staticClass: "col-lg-12" },
                    [
                      _c("label", [
                        _vm.totalExecutives
                          ? _c("i", { staticClass: "fas fa-check-circle" })
                          : _c("i", { staticClass: "fas fa-times-circle" }),
                        _vm._v(
                          "\n                            Number Of Executives"
                        )
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        staticClass: "w100 lag-dropdown",
                        attrs: {
                          options: _vm.executiveOptions,
                          clearable: false,
                          placeholder: "Select a number",
                          reduce: function(executiveOption) {
                            return executiveOption.id
                          }
                        },
                        on: { input: _vm.executiveOptionSelected },
                        model: {
                          value: _vm.executiveSelected,
                          callback: function($$v) {
                            _vm.executiveSelected = $$v
                          },
                          expression: "executiveSelected"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _vm._l(_vm.form.executives, function(input, index) {
                  return _c("div", { staticClass: "clearfix" }, [
                    _c("div", { staticClass: "form-group row" }, [
                      _c("div", { staticClass: "col-lg-4" }, [
                        _c("label", [
                          input.firstName
                            ? _c("i", { staticClass: "fas fa-check-circle" })
                            : _c("i", { staticClass: "fas fa-times-circle" }),
                          _vm._v(
                            "\n                                    Name\n                                "
                          )
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: input.firstName,
                              expression: "input.firstName"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "Type in first name",
                            autocomplete: "off"
                          },
                          domProps: { value: input.firstName },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(input, "firstName", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-lg-4" }, [
                        _c("label", [_vm._v(" ")]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: input.lastName,
                              expression: "input.lastName"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            placeholder: "Type in last name",
                            autocomplete: "off"
                          },
                          domProps: { value: input.lastName },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(input, "lastName", $event.target.value)
                            }
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-lg-4" },
                        [
                          _c("label", [
                            input.executiveRole
                              ? _c("i", { staticClass: "fas fa-check-circle" })
                              : _c("i", { staticClass: "fas fa-times-circle" }),
                            _vm._v(
                              "\n                                    Role\n                                "
                            )
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            staticClass: "w100 role-dropdown",
                            attrs: {
                              label: "name",
                              options: _vm.executiveRoleOptions,
                              clearable: false,
                              placeholder: "Select a type of role",
                              reduce: function(option) {
                                return option.id
                              }
                            },
                            model: {
                              value: input.executiveRole,
                              callback: function($$v) {
                                _vm.$set(input, "executiveRole", $$v)
                              },
                              expression: "input.executiveRole"
                            }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass:
                          "float-right add-multiple cursor-pointer p-0",
                        on: {
                          click: function($event) {
                            return _vm.removeExecutive(index)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                            - Remove Executive\n                        "
                        )
                      ]
                    )
                  ])
                }),
                _vm._v(" "),
                _c("div", { staticClass: "text-center mb-4" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary save-changes",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.storeLeadershipAndGovernanceData()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        Save Changes\n                    "
                      )
                    ]
                  )
                ])
              ],
              2
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("loader", { attrs: { "is-visible": _vm.isLoading } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/ResearchCoverage.vue?vue&type=template&id=198b2640&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/ResearchCoverage.vue?vue&type=template&id=198b2640& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container-fluid px-0" },
    [
      _c(
        "div",
        {
          staticClass:
            "row collapse show no-gutters d-flex h-100 position-relative"
        },
        [
          _c("div", { staticClass: "col-lg-8 company-profile-tab mx-auto" }, [
            _c("div", { staticClass: "panel-body companyManageForm" }, [
              _c("div", { staticClass: "form-group row" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-12" },
                  [
                    _c("label", [
                      _vm.form.research_coverage_type.length
                        ? _c("i", { staticClass: "fas fa-check-circle" })
                        : _c("i", { staticClass: "fas fa-times-circle" }),
                      _vm._v(
                        "\n                            Type of Research\n                            Coverage"
                      ),
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
                          staticClass: "exclamation-positions",
                          attrs: {
                            title:
                              "Investors rely upon this information to analyze their proposed investments."
                          }
                        },
                        [
                          _c("i", { staticClass: "exclamation-circle-vue" }, [
                            _vm._v("i")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("v-select", {
                      ref: "research_coverage_type",
                      staticClass: "w100",
                      attrs: {
                        label: "name",
                        multiple: "",
                        selectable: _vm.researchCoverageSelectedHide,
                        options: _vm.researchCoverageTypeList,
                        clearable: false,
                        placeholder: "Select the options that apply"
                      },
                      on: { input: _vm.checkCommunityResearch },
                      model: {
                        value: _vm.form.research_coverage_type,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "research_coverage_type", $$v)
                        },
                        expression: "form.research_coverage_type"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _vm.researchTypeCondition == "Cummunity"
                ? _c("div", { staticClass: "form-group row" }, [
                    _c(
                      "div",
                      { staticClass: "col-lg-12" },
                      [
                        _c("label", [
                          _vm.form.shared_community_research.length
                            ? _c("i", { staticClass: "fas fa-check-circle" })
                            : _c("i", { staticClass: "fas fa-times-circle" }),
                          _vm._v(
                            "\n                            Shared Community Research\n                            Platforms"
                          )
                        ]),
                        _vm._v(" "),
                        _c("v-select", {
                          staticClass: "w100 scrp-select-list",
                          attrs: {
                            multiple: "",
                            label: "name",
                            selectable:
                              _vm.sharedCommunityResearchPlatformSelectedHide,
                            options: _vm.sharedCommunityResearchPlatformList,
                            clearable: false,
                            placeholder: "Select the options that apply"
                          },
                          on: {
                            input: function($event) {
                              return _vm.showRelatedField(
                                $event,
                                "sharedCommunityResearchPlatformIds"
                              )
                            }
                          },
                          model: {
                            value: _vm.form.shared_community_research,
                            callback: function($$v) {
                              _vm.$set(
                                _vm.form,
                                "shared_community_research",
                                $$v
                              )
                            },
                            expression: "form.shared_community_research"
                          }
                        })
                      ],
                      1
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c("div", { staticClass: "col-lg-12" }, [
                  _c("label", [
                    _vm.form.researchFirm_name
                      ? _c("i", { staticClass: "fas fa-check-circle" })
                      : _c("i", { staticClass: "fas fa-times-circle" }),
                    _vm._v(
                      "\n                            Research Firm Name\n                        "
                    )
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
                    ref: "researchFirm_name",
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      name: "ResearchFirmName",
                      placeholder: "Ex: Google",
                      autocomplete: "new-company"
                    },
                    domProps: { value: _vm.form.researchFirm_name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "researchFirm_name",
                          $event.target.value
                        )
                      }
                    }
                  })
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "text-center mb-4" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary save-changes",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.saveCompanyresearchData()
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                        Save Changes\n                    "
                    )
                  ]
                )
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("loader", { attrs: { "is-visible": _vm.isLoading } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyQuestionnairesDetails.vue?vue&type=template&id=166ad894&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CompanyQuestionnairesDetails.vue?vue&type=template&id=166ad894& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container-fluid px-0" },
    [
      _c(
        "div",
        {
          staticClass:
            "row collapse show no-gutters d-flex h-100 position-relative"
        },
        [
          _c("div", { staticClass: "col mx-auto" }, [
            _c("div", { staticClass: "card" }, [
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _c(
                    "div",
                    { staticClass: "mb-3" },
                    [
                      _c(
                        "span",
                        {
                          attrs: { role: "button" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.shareMediaLink.apply(null, arguments)
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-share-alt" }),
                          _vm._v(" "),
                          _c(
                            "strong",
                            { staticClass: "text-theme-dark-blue" },
                            [_vm._v("SHARE")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "ml-3",
                          attrs: {
                            to: "/company/" + _vm.companySlugName + "/preview",
                            target: "_blank"
                          }
                        },
                        [
                          _c("i", { staticClass: "fas fa-eye text-black" }),
                          _vm._v(" "),
                          _c(
                            "strong",
                            { staticClass: "text-theme-dark-blue" },
                            [_vm._v("PREVIEW")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass: "ml-3",
                          attrs: { role: "button" },
                          on: { click: _vm.startPdfGenerate }
                        },
                        [
                          _c("i", { staticClass: "far fa-file-pdf" }),
                          _vm._v(" "),
                          _c(
                            "strong",
                            { staticClass: "text-theme-dark-blue" },
                            [_vm._v("EXPORT TO PDF")]
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tabs",
                    {
                      staticClass:
                        "customized-tab customized-company-profile-tab",
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
                      _c(
                        "b-tab",
                        {
                          attrs: {
                            active: _vm.activeTab === 0,
                            "title-item-class": "text-center"
                          },
                          on: {
                            click: function($event) {
                              return _vm.loadTabContent("profile")
                            }
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "title",
                              fn: function() {
                                return [
                                  _vm._v(
                                    "\n                                    General " +
                                      _vm._s(_vm.generalProgress) +
                                      "%\n                                    "
                                  )
                                ]
                              },
                              proxy: true
                            }
                          ])
                        },
                        [
                          _vm._v(" "),
                          _c("CompanyProfile", {
                            ref: "profileComponent",
                            on: {
                              generalFormChanged: _vm.changeDetectedGeneral,
                              logout: _vm.logout
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        {
                          attrs: {
                            active: _vm.activeTab === 1,
                            "title-item-class": "text-center"
                          },
                          on: {
                            click: function($event) {
                              return _vm.loadTabContent("executives")
                            }
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "title",
                              fn: function() {
                                return [
                                  _vm._v(
                                    "\n                                    Company Contacts " +
                                      _vm._s(_vm.contactProgress) +
                                      "%\n                                    "
                                  )
                                ]
                              },
                              proxy: true
                            }
                          ])
                        },
                        [
                          _vm._v(" "),
                          _c("CompanyExecutives", {
                            ref: "executiveComponent",
                            on: {
                              contactFormChanged: _vm.changeDetectedContact
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        {
                          attrs: {
                            active: _vm.activeTab === 2,
                            "title-item-class": "text-center"
                          },
                          on: {
                            click: function($event) {
                              return _vm.loadTabContent("companyType")
                            }
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "title",
                              fn: function() {
                                return [
                                  _vm._v(
                                    "\n                                    Company Structure " +
                                      _vm._s(_vm.structureProgress) +
                                      "%\n                                    "
                                  )
                                ]
                              },
                              proxy: true
                            }
                          ])
                        },
                        [
                          _vm._v(" "),
                          _c("CompanyTypes", {
                            ref: "companyTypeComponent",
                            on: {
                              companyStructureFormChanged:
                                _vm.changeDetectedStructure
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        {
                          attrs: {
                            active: _vm.activeTab === 3,
                            "title-item-class": "text-center"
                          },
                          on: {
                            click: function($event) {
                              return _vm.loadTabContent("finance")
                            }
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "title",
                              fn: function() {
                                return [
                                  _vm._v(
                                    "\n                                    Valuation & IP " +
                                      _vm._s(_vm.valuationProgress) +
                                      "%\n                                    "
                                  )
                                ]
                              },
                              proxy: true
                            }
                          ])
                        },
                        [
                          _vm._v(" "),
                          _c("CompanyFinances", {
                            ref: "financesComponent",
                            on: {
                              companyValuation: _vm.changeDetectedValuation
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        {
                          attrs: {
                            active: _vm.activeTab === 4,
                            "title-item-class": "text-center"
                          },
                          on: {
                            click: function($event) {
                              return _vm.loadTabContent("social")
                            }
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "title",
                              fn: function() {
                                return [
                                  _vm._v(
                                    "\n                                    Social Presence " +
                                      _vm._s(_vm.socialProgress) +
                                      "%\n                                    "
                                  )
                                ]
                              },
                              proxy: true
                            }
                          ])
                        },
                        [
                          _vm._v(" "),
                          _c("CompanySocials", {
                            ref: "socialComponent",
                            on: { companySocial: _vm.changeDetectedSocial }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        {
                          attrs: {
                            active: _vm.activeTab === 5,
                            "title-item-class": "text-center"
                          },
                          on: {
                            click: function($event) {
                              return _vm.loadTabContent("taxonomy")
                            }
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "title",
                              fn: function() {
                                return [
                                  _vm._v(
                                    "\n                                    Classification " +
                                      _vm._s(_vm.taxonomyProgress) +
                                      "%\n                                    "
                                  )
                                ]
                              },
                              proxy: true
                            }
                          ])
                        },
                        [
                          _vm._v(" "),
                          _vm.taxonomyTabViewCondition == "show"
                            ? _c(
                                "router-link",
                                {
                                  staticClass:
                                    "mb-3 btn btn-back-next float-left company-profile-right-btn",
                                  attrs: { link: "", to: { name: "" } },
                                  nativeOn: {
                                    click: function($event) {
                                      return _vm.LoadAddCategorization()
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "Add\n                                    Classification\n                                "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.taxonomyTabViewCondition == "show"
                            ? _c("CompanyTaxonomy", {
                                ref: "taxonomyComponent",
                                on: {
                                  getCategorizationId: _vm.getCategorizationId
                                }
                              })
                            : _c("AddEditCompanyTaxonomy", {
                                ref: "taxonomyAddEditComponent",
                                attrs: { updatedId: _vm.updatedId },
                                on: {
                                  childAction: _vm.GetAddEditCallbackActions
                                }
                              })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        {
                          attrs: {
                            active: _vm.activeTab === 6,
                            "title-item-class": "text-center"
                          },
                          on: {
                            click: function($event) {
                              return _vm.loadTabContent("history")
                            }
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "title",
                              fn: function() {
                                return [
                                  _vm._v(
                                    "\n                                    Company History " +
                                      _vm._s(_vm.historyProgress) +
                                      "%\n                                "
                                  )
                                ]
                              },
                              proxy: true
                            }
                          ])
                        },
                        [
                          _vm._v(" "),
                          _c("CompanyHistory", {
                            ref: "historyComponent",
                            on: { companyHistory: _vm.changeDetectedHistory }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        {
                          attrs: {
                            active: _vm.activeTab === 7,
                            "title-item-class": "text-center"
                          },
                          on: {
                            click: function($event) {
                              return _vm.loadTabContent("corporateAction")
                            }
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "title",
                              fn: function() {
                                return [
                                  _vm._v(
                                    "\n                                    Corporate Actions " +
                                      _vm._s(_vm.corporateActionProgress) +
                                      "%\n                                "
                                  )
                                ]
                              },
                              proxy: true
                            }
                          ])
                        },
                        [
                          _vm._v(" "),
                          _c("CorporateActions", {
                            ref: "corporateActionsComponent",
                            on: {
                              corporateAction: _vm.changeDetectedCorporateAction
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        {
                          attrs: {
                            active: _vm.activeTab === 8,
                            "title-item-class": "text-center"
                          },
                          on: {
                            click: function($event) {
                              return _vm.loadTabContent("leadershipGovernance")
                            }
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "title",
                              fn: function() {
                                return [
                                  _vm._v(
                                    "\n                                    Leadership and Governance " +
                                      _vm._s(_vm.leadershipGovernanceProgress) +
                                      "%\n                                "
                                  )
                                ]
                              },
                              proxy: true
                            }
                          ])
                        },
                        [
                          _vm._v(" "),
                          _c("LeadershipAndGovernence", {
                            ref: "LeadershipAndGovernanceComponent"
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        {
                          attrs: {
                            active: _vm.activeTab === 9,
                            "title-item-class": "text-center"
                          },
                          on: {
                            click: function($event) {
                              return _vm.loadTabContent("researchCoverage")
                            }
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "title",
                              fn: function() {
                                return [
                                  _vm._v(
                                    "\n                                    Research Coverage\n                                "
                                  )
                                ]
                              },
                              proxy: true
                            }
                          ])
                        },
                        [
                          _vm._v(" "),
                          _c("ResearchCoverage", {
                            ref: "researchCoverageContentLoaded"
                          })
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
          ]),
          _vm._v(" "),
          _c(
            "b-modal",
            {
              ref: "modalShareLink",
              attrs: {
                id: "modalShareLink",
                title: "Share",
                size: "lg",
                centered: "",
                "hide-footer": ""
              }
            },
            [
              _c("share-modal", {
                attrs: { publicShareLink: this.publicShareLink }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("loader", { attrs: { "is-visible": _vm.isLoading } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/apis/ChatMessages.js":
/*!*******************************************!*\
  !*** ./resources/js/apis/ChatMessages.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

var ajaxRequest = null;
/* harmony default export */ __webpack_exports__["default"] = ({
  latestMessage: function latestMessage(page, query) {
    if (ajaxRequest) {
      ajaxRequest.cancel();
    }

    ajaxRequest = axios.CancelToken.source();
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/chat-messages?page=" + page + "&query_input=" + query, {
      cancelToken: ajaxRequest.token
    });
  },
  memberList: function memberList(query, memberIds) {
    if (ajaxRequest) {
      ajaxRequest.cancel();
    }

    ajaxRequest = axios.CancelToken.source();
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/chat-member-list?query_input=" + query + "&memberIds=" + memberIds, {
      cancelToken: ajaxRequest.token
    });
  },
  updateUserMessageStatus: function updateUserMessageStatus(fromUserId) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get('/update-user-message-status?fromUserId=' + fromUserId);
  },
  chatMemberInfo: function chatMemberInfo(userId) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get('/chat-member-info?userId=' + userId);
  },
  update: function update(data) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post('/update-message', data);
  },
  "delete": function _delete(data) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post('/delete-message', data);
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

/***/ "./resources/js/components/Loader.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Loader.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loader_vue_vue_type_template_id_e79ec684___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader.vue?vue&type=template&id=e79ec684& */ "./resources/js/components/Loader.vue?vue&type=template&id=e79ec684&");
/* harmony import */ var _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.vue?vue&type=script&lang=js& */ "./resources/js/components/Loader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Loader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/Loader.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Loader_vue_vue_type_template_id_e79ec684___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Loader_vue_vue_type_template_id_e79ec684___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Loader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Loader.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Loader.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Loader.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Loader.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Loader.vue?vue&type=template&id=e79ec684&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Loader.vue?vue&type=template&id=e79ec684& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_e79ec684___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=template&id=e79ec684& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader.vue?vue&type=template&id=e79ec684&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_e79ec684___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_e79ec684___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/company/AddEditCompanyTaxonomy.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/company/AddEditCompanyTaxonomy.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddEditCompanyTaxonomy_vue_vue_type_template_id_d309ecc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddEditCompanyTaxonomy.vue?vue&type=template&id=d309ecc0&scoped=true& */ "./resources/js/components/company/AddEditCompanyTaxonomy.vue?vue&type=template&id=d309ecc0&scoped=true&");
/* harmony import */ var _AddEditCompanyTaxonomy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddEditCompanyTaxonomy.vue?vue&type=script&lang=js& */ "./resources/js/components/company/AddEditCompanyTaxonomy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddEditCompanyTaxonomy_vue_vue_type_style_index_0_id_d309ecc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddEditCompanyTaxonomy.vue?vue&type=style&index=0&id=d309ecc0&scoped=true&lang=css& */ "./resources/js/components/company/AddEditCompanyTaxonomy.vue?vue&type=style&index=0&id=d309ecc0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddEditCompanyTaxonomy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddEditCompanyTaxonomy_vue_vue_type_template_id_d309ecc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddEditCompanyTaxonomy_vue_vue_type_template_id_d309ecc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d309ecc0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/AddEditCompanyTaxonomy.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/AddEditCompanyTaxonomy.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/company/AddEditCompanyTaxonomy.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEditCompanyTaxonomy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddEditCompanyTaxonomy.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/AddEditCompanyTaxonomy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEditCompanyTaxonomy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/AddEditCompanyTaxonomy.vue?vue&type=style&index=0&id=d309ecc0&scoped=true&lang=css&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/company/AddEditCompanyTaxonomy.vue?vue&type=style&index=0&id=d309ecc0&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEditCompanyTaxonomy_vue_vue_type_style_index_0_id_d309ecc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddEditCompanyTaxonomy.vue?vue&type=style&index=0&id=d309ecc0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/AddEditCompanyTaxonomy.vue?vue&type=style&index=0&id=d309ecc0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEditCompanyTaxonomy_vue_vue_type_style_index_0_id_d309ecc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEditCompanyTaxonomy_vue_vue_type_style_index_0_id_d309ecc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEditCompanyTaxonomy_vue_vue_type_style_index_0_id_d309ecc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEditCompanyTaxonomy_vue_vue_type_style_index_0_id_d309ecc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/company/AddEditCompanyTaxonomy.vue?vue&type=template&id=d309ecc0&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/company/AddEditCompanyTaxonomy.vue?vue&type=template&id=d309ecc0&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEditCompanyTaxonomy_vue_vue_type_template_id_d309ecc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddEditCompanyTaxonomy.vue?vue&type=template&id=d309ecc0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/AddEditCompanyTaxonomy.vue?vue&type=template&id=d309ecc0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEditCompanyTaxonomy_vue_vue_type_template_id_d309ecc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddEditCompanyTaxonomy_vue_vue_type_template_id_d309ecc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/company/CompanyExecutives.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/company/CompanyExecutives.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyExecutives_vue_vue_type_template_id_f5007c0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyExecutives.vue?vue&type=template&id=f5007c0a& */ "./resources/js/components/company/CompanyExecutives.vue?vue&type=template&id=f5007c0a&");
/* harmony import */ var _CompanyExecutives_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyExecutives.vue?vue&type=script&lang=js& */ "./resources/js/components/company/CompanyExecutives.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CompanyExecutives_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompanyExecutives.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/company/CompanyExecutives.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CompanyExecutives_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyExecutives_vue_vue_type_template_id_f5007c0a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyExecutives_vue_vue_type_template_id_f5007c0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/CompanyExecutives.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/CompanyExecutives.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/company/CompanyExecutives.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyExecutives_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyExecutives.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyExecutives.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyExecutives_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/CompanyExecutives.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/company/CompanyExecutives.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyExecutives_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyExecutives.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyExecutives.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyExecutives_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyExecutives_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyExecutives_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyExecutives_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/company/CompanyExecutives.vue?vue&type=template&id=f5007c0a&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/company/CompanyExecutives.vue?vue&type=template&id=f5007c0a& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyExecutives_vue_vue_type_template_id_f5007c0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyExecutives.vue?vue&type=template&id=f5007c0a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyExecutives.vue?vue&type=template&id=f5007c0a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyExecutives_vue_vue_type_template_id_f5007c0a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyExecutives_vue_vue_type_template_id_f5007c0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/company/CompanyFinances.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/company/CompanyFinances.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyFinances_vue_vue_type_template_id_0e2bc96e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyFinances.vue?vue&type=template&id=0e2bc96e& */ "./resources/js/components/company/CompanyFinances.vue?vue&type=template&id=0e2bc96e&");
/* harmony import */ var _CompanyFinances_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyFinances.vue?vue&type=script&lang=js& */ "./resources/js/components/company/CompanyFinances.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CompanyFinances_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyFinances_vue_vue_type_template_id_0e2bc96e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyFinances_vue_vue_type_template_id_0e2bc96e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/CompanyFinances.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/CompanyFinances.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/company/CompanyFinances.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyFinances_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyFinances.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyFinances.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyFinances_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/CompanyFinances.vue?vue&type=template&id=0e2bc96e&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/company/CompanyFinances.vue?vue&type=template&id=0e2bc96e& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyFinances_vue_vue_type_template_id_0e2bc96e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyFinances.vue?vue&type=template&id=0e2bc96e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyFinances.vue?vue&type=template&id=0e2bc96e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyFinances_vue_vue_type_template_id_0e2bc96e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyFinances_vue_vue_type_template_id_0e2bc96e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/company/CompanyHistory.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/company/CompanyHistory.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyHistory_vue_vue_type_template_id_5bf55e58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyHistory.vue?vue&type=template&id=5bf55e58& */ "./resources/js/components/company/CompanyHistory.vue?vue&type=template&id=5bf55e58&");
/* harmony import */ var _CompanyHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyHistory.vue?vue&type=script&lang=js& */ "./resources/js/components/company/CompanyHistory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CompanyHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyHistory_vue_vue_type_template_id_5bf55e58___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyHistory_vue_vue_type_template_id_5bf55e58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/CompanyHistory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/CompanyHistory.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/company/CompanyHistory.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyHistory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyHistory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/CompanyHistory.vue?vue&type=template&id=5bf55e58&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/company/CompanyHistory.vue?vue&type=template&id=5bf55e58& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyHistory_vue_vue_type_template_id_5bf55e58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyHistory.vue?vue&type=template&id=5bf55e58& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyHistory.vue?vue&type=template&id=5bf55e58&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyHistory_vue_vue_type_template_id_5bf55e58___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyHistory_vue_vue_type_template_id_5bf55e58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/company/CompanyProfile.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/company/CompanyProfile.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyProfile_vue_vue_type_template_id_70bd392e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyProfile.vue?vue&type=template&id=70bd392e& */ "./resources/js/components/company/CompanyProfile.vue?vue&type=template&id=70bd392e&");
/* harmony import */ var _CompanyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyProfile.vue?vue&type=script&lang=js& */ "./resources/js/components/company/CompanyProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CompanyProfile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompanyProfile.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/company/CompanyProfile.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CompanyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyProfile_vue_vue_type_template_id_70bd392e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyProfile_vue_vue_type_template_id_70bd392e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/CompanyProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/CompanyProfile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/company/CompanyProfile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/CompanyProfile.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/company/CompanyProfile.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyProfile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyProfile.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyProfile.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyProfile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyProfile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyProfile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyProfile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/company/CompanyProfile.vue?vue&type=template&id=70bd392e&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/company/CompanyProfile.vue?vue&type=template&id=70bd392e& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyProfile_vue_vue_type_template_id_70bd392e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyProfile.vue?vue&type=template&id=70bd392e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyProfile.vue?vue&type=template&id=70bd392e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyProfile_vue_vue_type_template_id_70bd392e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyProfile_vue_vue_type_template_id_70bd392e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/company/CompanySocial.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/company/CompanySocial.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanySocial_vue_vue_type_template_id_b14dda46_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanySocial.vue?vue&type=template&id=b14dda46&scoped=true& */ "./resources/js/components/company/CompanySocial.vue?vue&type=template&id=b14dda46&scoped=true&");
/* harmony import */ var _CompanySocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanySocial.vue?vue&type=script&lang=js& */ "./resources/js/components/company/CompanySocial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CompanySocial_vue_vue_type_style_index_0_id_b14dda46_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompanySocial.vue?vue&type=style&index=0&id=b14dda46&scoped=true&lang=css& */ "./resources/js/components/company/CompanySocial.vue?vue&type=style&index=0&id=b14dda46&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CompanySocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanySocial_vue_vue_type_template_id_b14dda46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanySocial_vue_vue_type_template_id_b14dda46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b14dda46",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/CompanySocial.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/CompanySocial.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/company/CompanySocial.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySocial.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanySocial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/CompanySocial.vue?vue&type=style&index=0&id=b14dda46&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/company/CompanySocial.vue?vue&type=style&index=0&id=b14dda46&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySocial_vue_vue_type_style_index_0_id_b14dda46_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySocial.vue?vue&type=style&index=0&id=b14dda46&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanySocial.vue?vue&type=style&index=0&id=b14dda46&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySocial_vue_vue_type_style_index_0_id_b14dda46_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySocial_vue_vue_type_style_index_0_id_b14dda46_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySocial_vue_vue_type_style_index_0_id_b14dda46_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySocial_vue_vue_type_style_index_0_id_b14dda46_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/company/CompanySocial.vue?vue&type=template&id=b14dda46&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/company/CompanySocial.vue?vue&type=template&id=b14dda46&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySocial_vue_vue_type_template_id_b14dda46_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySocial.vue?vue&type=template&id=b14dda46&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanySocial.vue?vue&type=template&id=b14dda46&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySocial_vue_vue_type_template_id_b14dda46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySocial_vue_vue_type_template_id_b14dda46_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/company/CompanyTaxonomy.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/company/CompanyTaxonomy.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyTaxonomy_vue_vue_type_template_id_2643b27e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyTaxonomy.vue?vue&type=template&id=2643b27e& */ "./resources/js/components/company/CompanyTaxonomy.vue?vue&type=template&id=2643b27e&");
/* harmony import */ var _CompanyTaxonomy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyTaxonomy.vue?vue&type=script&lang=js& */ "./resources/js/components/company/CompanyTaxonomy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CompanyTaxonomy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyTaxonomy_vue_vue_type_template_id_2643b27e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyTaxonomy_vue_vue_type_template_id_2643b27e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/CompanyTaxonomy.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/CompanyTaxonomy.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/company/CompanyTaxonomy.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyTaxonomy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyTaxonomy.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyTaxonomy.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyTaxonomy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/CompanyTaxonomy.vue?vue&type=template&id=2643b27e&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/company/CompanyTaxonomy.vue?vue&type=template&id=2643b27e& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyTaxonomy_vue_vue_type_template_id_2643b27e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyTaxonomy.vue?vue&type=template&id=2643b27e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyTaxonomy.vue?vue&type=template&id=2643b27e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyTaxonomy_vue_vue_type_template_id_2643b27e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyTaxonomy_vue_vue_type_template_id_2643b27e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/company/CompanyTypes.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/company/CompanyTypes.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyTypes_vue_vue_type_template_id_9561d78e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyTypes.vue?vue&type=template&id=9561d78e& */ "./resources/js/components/company/CompanyTypes.vue?vue&type=template&id=9561d78e&");
/* harmony import */ var _CompanyTypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyTypes.vue?vue&type=script&lang=js& */ "./resources/js/components/company/CompanyTypes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CompanyTypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyTypes_vue_vue_type_template_id_9561d78e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyTypes_vue_vue_type_template_id_9561d78e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/CompanyTypes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/CompanyTypes.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/company/CompanyTypes.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyTypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyTypes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyTypes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyTypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/CompanyTypes.vue?vue&type=template&id=9561d78e&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/company/CompanyTypes.vue?vue&type=template&id=9561d78e& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyTypes_vue_vue_type_template_id_9561d78e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyTypes.vue?vue&type=template&id=9561d78e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CompanyTypes.vue?vue&type=template&id=9561d78e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyTypes_vue_vue_type_template_id_9561d78e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyTypes_vue_vue_type_template_id_9561d78e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/company/CorporateActions.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/company/CorporateActions.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CorporateActions_vue_vue_type_template_id_0c11f2d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CorporateActions.vue?vue&type=template&id=0c11f2d6& */ "./resources/js/components/company/CorporateActions.vue?vue&type=template&id=0c11f2d6&");
/* harmony import */ var _CorporateActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CorporateActions.vue?vue&type=script&lang=js& */ "./resources/js/components/company/CorporateActions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CorporateActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CorporateActions_vue_vue_type_template_id_0c11f2d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CorporateActions_vue_vue_type_template_id_0c11f2d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/CorporateActions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/CorporateActions.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/company/CorporateActions.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CorporateActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CorporateActions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CorporateActions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CorporateActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/CorporateActions.vue?vue&type=template&id=0c11f2d6&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/company/CorporateActions.vue?vue&type=template&id=0c11f2d6& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CorporateActions_vue_vue_type_template_id_0c11f2d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CorporateActions.vue?vue&type=template&id=0c11f2d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/CorporateActions.vue?vue&type=template&id=0c11f2d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CorporateActions_vue_vue_type_template_id_0c11f2d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CorporateActions_vue_vue_type_template_id_0c11f2d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/company/LeadershipAndGovernence.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/company/LeadershipAndGovernence.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LeadershipAndGovernence_vue_vue_type_template_id_3954a5a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeadershipAndGovernence.vue?vue&type=template&id=3954a5a3& */ "./resources/js/components/company/LeadershipAndGovernence.vue?vue&type=template&id=3954a5a3&");
/* harmony import */ var _LeadershipAndGovernence_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeadershipAndGovernence.vue?vue&type=script&lang=js& */ "./resources/js/components/company/LeadershipAndGovernence.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LeadershipAndGovernence_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LeadershipAndGovernence.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/company/LeadershipAndGovernence.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LeadershipAndGovernence_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LeadershipAndGovernence_vue_vue_type_template_id_3954a5a3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LeadershipAndGovernence_vue_vue_type_template_id_3954a5a3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/LeadershipAndGovernence.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/LeadershipAndGovernence.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/company/LeadershipAndGovernence.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeadershipAndGovernence_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LeadershipAndGovernence.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/LeadershipAndGovernence.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeadershipAndGovernence_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/LeadershipAndGovernence.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/company/LeadershipAndGovernence.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LeadershipAndGovernence_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./LeadershipAndGovernence.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/LeadershipAndGovernence.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LeadershipAndGovernence_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LeadershipAndGovernence_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LeadershipAndGovernence_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LeadershipAndGovernence_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/company/LeadershipAndGovernence.vue?vue&type=template&id=3954a5a3&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/company/LeadershipAndGovernence.vue?vue&type=template&id=3954a5a3& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeadershipAndGovernence_vue_vue_type_template_id_3954a5a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LeadershipAndGovernence.vue?vue&type=template&id=3954a5a3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/LeadershipAndGovernence.vue?vue&type=template&id=3954a5a3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeadershipAndGovernence_vue_vue_type_template_id_3954a5a3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LeadershipAndGovernence_vue_vue_type_template_id_3954a5a3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/company/ResearchCoverage.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/company/ResearchCoverage.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResearchCoverage_vue_vue_type_template_id_198b2640___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResearchCoverage.vue?vue&type=template&id=198b2640& */ "./resources/js/components/company/ResearchCoverage.vue?vue&type=template&id=198b2640&");
/* harmony import */ var _ResearchCoverage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResearchCoverage.vue?vue&type=script&lang=js& */ "./resources/js/components/company/ResearchCoverage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResearchCoverage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResearchCoverage_vue_vue_type_template_id_198b2640___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResearchCoverage_vue_vue_type_template_id_198b2640___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/ResearchCoverage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/ResearchCoverage.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/company/ResearchCoverage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResearchCoverage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResearchCoverage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/ResearchCoverage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResearchCoverage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/ResearchCoverage.vue?vue&type=template&id=198b2640&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/company/ResearchCoverage.vue?vue&type=template&id=198b2640& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResearchCoverage_vue_vue_type_template_id_198b2640___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ResearchCoverage.vue?vue&type=template&id=198b2640& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/ResearchCoverage.vue?vue&type=template&id=198b2640&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResearchCoverage_vue_vue_type_template_id_198b2640___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResearchCoverage_vue_vue_type_template_id_198b2640___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/CompanyQuestionnairesDetails.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/CompanyQuestionnairesDetails.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyQuestionnairesDetails_vue_vue_type_template_id_166ad894___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyQuestionnairesDetails.vue?vue&type=template&id=166ad894& */ "./resources/js/views/CompanyQuestionnairesDetails.vue?vue&type=template&id=166ad894&");
/* harmony import */ var _CompanyQuestionnairesDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyQuestionnairesDetails.vue?vue&type=script&lang=js& */ "./resources/js/views/CompanyQuestionnairesDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CompanyQuestionnairesDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyQuestionnairesDetails_vue_vue_type_template_id_166ad894___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyQuestionnairesDetails_vue_vue_type_template_id_166ad894___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/CompanyQuestionnairesDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/CompanyQuestionnairesDetails.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/CompanyQuestionnairesDetails.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyQuestionnairesDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyQuestionnairesDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyQuestionnairesDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyQuestionnairesDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/CompanyQuestionnairesDetails.vue?vue&type=template&id=166ad894&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/CompanyQuestionnairesDetails.vue?vue&type=template&id=166ad894& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyQuestionnairesDetails_vue_vue_type_template_id_166ad894___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyQuestionnairesDetails.vue?vue&type=template&id=166ad894& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyQuestionnairesDetails.vue?vue&type=template&id=166ad894&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyQuestionnairesDetails_vue_vue_type_template_id_166ad894___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyQuestionnairesDetails_vue_vue_type_template_id_166ad894___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);