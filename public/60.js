(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanyTypes.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/EditCompanyTypes.vue?vue&type=script&lang=js& ***!
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
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Navigation */ "./resources/js/components/Navigation.vue");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Sidebar */ "./resources/js/components/Sidebar.vue");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ProfileCompleteBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ProfileCompleteBanner */ "./resources/js/components/ProfileCompleteBanner.vue");


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







/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isLoading: false,
      form: {
        entity_type: "",
        trading_and_reporting_status: "",
        public_private_reporting_status: "",
        base_currency: "",
        publicly_traded_company: "",
        exchange_traded_on: "",
        shareholder_number: "",
        ticker_symbol: "",
        conglomerate: "",
        subsidiary_name: []
      },
      CompanyTypesFormData: {
        entity_type: "",
        trading_and_reporting_status: "",
        trading_and_reporting_status_tag: "",
        public_private_reporting_status: "",
        base_currency: "",
        publicly_traded_company: "",
        exchange_traded_on: "",
        shareholder_number: "",
        ticker_symbol: "",
        conglomerate: "",
        subsidiary_name: []
      },
      errors: [],
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
  validations: {
    form: {}
  },
  methods: {
    test: function test() {
      alert("FR");
    },
    getEntityTypeList: function () {
      var _getEntityTypeList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", axios.get('/api/get-entity-type').then(function (response) {
                  _this.entityTypes = response.data.data;
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

      function getEntityTypeList() {
        return _getEntityTypeList.apply(this, arguments);
      }

      return getEntityTypeList;
    }(),
    getShareholderNumberList: function () {
      var _getShareholderNumberList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this2 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", axios.get('/api/get-shareholder-number-list').then(function (response) {
                  _this2.shareholderNumberList = response.data.data;
                })["catch"](function (error) {
                  return console.log(error);
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getShareholderNumberList() {
        return _getShareholderNumberList.apply(this, arguments);
      }

      return getShareholderNumberList;
    }(),
    getPrivatePublicCompanyType: function getPrivatePublicCompanyType() {
      var _this3 = this;

      axios.get('/api/get-private-public-company-type').then(function (response) {
        _this3.privatePublicCompanyTypes = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getBaseCurrencyList: function getBaseCurrencyList() {
      var _this4 = this;

      axios.get('/api/get-base-currency-list').then(function (response) {
        _this4.baseCurrencyList = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getTradingAndReportingStatusList: function () {
      var _getTradingAndReportingStatusList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(value, type) {
        var _this5 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(value != null)) {
                  _context3.next = 4;
                  break;
                }

                if ('public' == value.tag) {
                  this.reporting_status_label = "Public Trading OR  Reporting Status";
                } else if ('private' == value.tag) {
                  this.reporting_status_label = "Private Trading and Reporting Status";
                }

                _context3.next = 4;
                return axios.get('/api/get-trading-and-reporting-status-list/' + value.id).then(function (response) {
                  _this5.tradingAndReportingStatusList = response.data.data;

                  if (type == 'refresh') {
                    _this5.form.public_private_reporting_status = 0;
                    _this5.form.publicly_traded_company = 0;
                    _this5.form.ticker_symbol = "";
                    _this5.form.exchange_traded_on = "";
                  }

                  _this5.isLoading = false;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 4:
                this.goBackToPageTopAndNextFieldToEnter();

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getTradingAndReportingStatusList(_x, _x2) {
        return _getTradingAndReportingStatusList.apply(this, arguments);
      }

      return getTradingAndReportingStatusList;
    }(),
    getPubliclyTradedCompanyTypeList: function getPubliclyTradedCompanyTypeList() {
      var _this6 = this;

      axios.get('/api/get-publicly-traded-company-type-list').then(function (response) {
        _this6.publiclyTradedCompanyTypeList = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getExchangeTradedList: function getExchangeTradedList() {
      var _this7 = this;

      axios.get('/api/get-exchange-traded-list').then(function (response) {
        _this7.exchangeTradedList = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    resetSubsidiaryData: function resetSubsidiaryData(value) {
      if (value == 0) {
        this.form.subsidiary_name = [];
      }
    },
    getStepwiseData: function () {
      var _getStepwiseData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var _this8 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios.get('/api/company-questionnaire-data/3/edit').then(function (response) {
                  _this8.isLoading = false;
                  var typesData = response.data.data;
                  _this8.form.entity_type = typesData.entity_type;
                  _this8.form.trading_and_reporting_status = typesData.public_private_type;
                  _this8.form.base_currency = typesData.base_currency;
                  _this8.form.publicly_traded_company = typesData.publicly_traded_type;
                  _this8.form.public_private_reporting_status = typesData.trading_status;
                  _this8.form.exchange_traded_on = typesData.exchange_traded_on;
                  _this8.form.shareholder_number = typesData.numberof_shareholders;
                  _this8.form.ticker_symbol = typesData.ticker_symbol;
                  _this8.form.conglomerate = typesData.conglomerate;
                  _this8.form.subsidiary_name = Object.keys(typesData.conglomerate_subsidiary).map(function (key) {
                    return typesData.conglomerate_subsidiary[key].name;
                  });

                  _this8.showRelatedField(typesData.exchange_traded_on);

                  _this8.getTradingAndReportingStatusList(typesData.public_private_type, 'load');
                })["catch"](function (error) {
                  _this8.isLoading = false;

                  if (error.response.status == 401) {
                    _this8.$emit('logout');
                  } else {
                    toastr.error(error);
                  }
                });

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getStepwiseData() {
        return _getStepwiseData.apply(this, arguments);
      }

      return getStepwiseData;
    }(),
    saveCompanyTypesData: function saveCompanyTypesData(action) {
      var _this$form$ticker_sym,
          _this9 = this;

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

      this.CompanyTypesFormData.entity_type = this.form.entity_type ? this.form.entity_type.id : '';
      this.CompanyTypesFormData.trading_and_reporting_status = this.form.trading_and_reporting_status ? this.form.trading_and_reporting_status.id : '';
      this.CompanyTypesFormData.trading_and_reporting_status_tag = this.form.trading_and_reporting_status ? this.form.trading_and_reporting_status.tag : '';
      this.CompanyTypesFormData.base_currency = this.form.base_currency ? this.form.base_currency.id : '';
      this.CompanyTypesFormData.shareholder_number = this.form.base_currency ? this.form.shareholder_number.id : '';
      this.CompanyTypesFormData.ticker_symbol = (_this$form$ticker_sym = this.form.ticker_symbol) !== null && _this$form$ticker_sym !== void 0 ? _this$form$ticker_sym : '';
      this.CompanyTypesFormData.conglomerate = this.form.conglomerate;
      this.CompanyTypesFormData.subsidiary_name = JSON.stringify(this.form.subsidiary_name);
      this.CompanyTypesFormData.publicly_traded_company = this.form.publicly_traded_company ? this.form.publicly_traded_company.id : '';
      this.CompanyTypesFormData.public_private_reporting_status = this.form.public_private_reporting_status ? this.form.public_private_reporting_status.id : '';
      this.CompanyTypesFormData.exchange_traded_on = exchangeTradedOptions.join(',');
      _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__["default"].updateCompanyQuestionnaireData(this.CompanyTypesFormData, 3).then(function (response) {
        _this9.isLoading = false;
        _this9.submitButtonDisabled = false;
        toastr.success(response.data.success.message);

        if (action == 'continue') {
          _this9.$router.push({
            name: "EditCompanyFinances"
          });
        } else {
          _this9.$router.push({
            name: "CompanyQuestionnairesDetails",
            'hash': '#companyType'
          });
        }
      })["catch"](function (error) {
        _this9.isLoading = false;
        _this9.submitButtonDisabled = false;

        if (error.response.status === 422) {
          toastr.error(error.response.data.error.message);
        } else if (error.response.status == 401) {
          _this9.$emit('logout');
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
    }
  },
  created: function () {
    var _created = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              this.isLoading = true;
              this.goBackToPageTopAndNextFieldToEnter();
              this.getPrivatePublicCompanyType();
              this.getBaseCurrencyList();
              _context5.next = 6;
              return this.getEntityTypeList();

            case 6:
              this.getPubliclyTradedCompanyTypeList();
              this.getExchangeTradedList();
              _context5.next = 10;
              return this.getShareholderNumberList();

            case 10:
              this.getStepwiseData();

            case 11:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  components: {
    loader: _Loader__WEBPACK_IMPORTED_MODULE_4__["default"],
    sidebar: _Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"],
    Navigation: _Navigation__WEBPACK_IMPORTED_MODULE_3__["default"],
    ProfileCompleteBanner: _ProfileCompleteBanner__WEBPACK_IMPORTED_MODULE_7__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanyTypes.vue?vue&type=template&id=7cf017e3&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/EditCompanyTypes.vue?vue&type=template&id=7cf017e3& ***!
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
    "section",
    { staticClass: "home" },
    [
      _c("Navigation"),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid px-0" }, [
        _c(
          "div",
          {
            staticClass:
              "row collapse show no-gutters d-flex h-100 position-relative"
          },
          [
            _c("sidebar"),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col p-5" },
              [
                _c("profile-complete-banner"),
                _vm._v(" "),
                _c("h2", { staticClass: "text-center" }, [
                  _vm._v("Edit Company Structure")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row company-profile-container" }, [
                  _c("div", { staticClass: "col-md-7 mx-auto" }, [
                    _c(
                      "div",
                      { staticClass: "panel-body" },
                      [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c(
                              "label",
                              { staticClass: "control-label font-weight-bold" },
                              [
                                _vm._v(
                                  "Entity Type -\n                                    Organizational\n                                    Structure"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("v-select", {
                              ref: "entity_type",
                              attrs: {
                                label: "name",
                                name: "entity_type",
                                options: _vm.entityTypes,
                                clearable: false,
                                placeholder: "Select Below"
                              },
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
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c(
                              "label",
                              { staticClass: "control-label font-weight-bold" },
                              [
                                _vm._v(
                                  "Public or Private Company\n                                    Type"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("v-select", {
                              ref: "trading_and_reporting_status",
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
                        ),
                        _vm._v(" "),
                        (_vm.form.trading_and_reporting_status != null
                        ? _vm.form.trading_and_reporting_status.tag ==
                            "public" ||
                          _vm.form.trading_and_reporting_status.tag == "private"
                        : "")
                          ? _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c(
                                  "label",
                                  {
                                    staticClass:
                                      "control-label font-weight-bold"
                                  },
                                  [_vm._v(_vm._s(_vm.reporting_status_label))]
                                ),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    label: "name",
                                    options: _vm.tradingAndReportingStatusList,
                                    clearable: false,
                                    placeholder: "Select Below"
                                  },
                                  model: {
                                    value:
                                      _vm.form.public_private_reporting_status,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.form,
                                        "public_private_reporting_status",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "form.public_private_reporting_status"
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        (_vm.form.trading_and_reporting_status != null
                        ? _vm.form.trading_and_reporting_status.tag == "public"
                        : "" &&
                          (false))
                          ? _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c(
                                  "label",
                                  {
                                    staticClass:
                                      "control-label font-weight-bold"
                                  },
                                  [
                                    _vm._v(
                                      "Type of Publicly Traded\n                                    Company (USA\n                                    or International)"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    label: "name",
                                    options: _vm.publiclyTradedCompanyTypeList,
                                    clearable: false,
                                    placeholder: "Select Below"
                                  },
                                  model: {
                                    value: _vm.form.publicly_traded_company,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.form,
                                        "publicly_traded_company",
                                        $$v
                                      )
                                    },
                                    expression: "form.publicly_traded_company"
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c(
                              "label",
                              { staticClass: "control-label font-weight-bold" },
                              [
                                _vm._v(
                                  "Number of\n                                    Shareholders"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("v-select", {
                              ref: "shareholder_number",
                              attrs: {
                                label: "name",
                                options: _vm.shareholderNumberList,
                                placeholder: "Select Below",
                                clearable: false
                              },
                              on: {
                                keydown: function($event) {
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
                                  return _vm.test()
                                }
                              },
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
                        ),
                        _vm._v(" "),
                        (_vm.form.trading_and_reporting_status != null
                        ? _vm.form.trading_and_reporting_status.tag == "public"
                        : "" &&
                          (false))
                          ? _c("div", { staticClass: "form-group" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "control-label font-weight-bold"
                                },
                                [_vm._v("Ticker Symbol")]
                              ),
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
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c(
                              "label",
                              { staticClass: "control-label font-weight-bold" },
                              [_vm._v("Base Currency")]
                            ),
                            _vm._v(" "),
                            _c("v-select", {
                              ref: "base_currency",
                              attrs: {
                                label: "name",
                                options: _vm.baseCurrencyList,
                                clearable: false,
                                placeholder: "Select Below"
                              },
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
                        ),
                        _vm._v(" "),
                        (_vm.form.trading_and_reporting_status != null
                        ? _vm.form.trading_and_reporting_status.tag == "public"
                        : "" &&
                          (false) &&
                          (false))
                          ? _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c(
                                  "label",
                                  {
                                    staticClass:
                                      "control-label font-weight-bold label-with-under-p"
                                  },
                                  [
                                    _vm._v(
                                      "Domestic or\n                                    International Exchange Traded On "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  { staticClass: "p-under-input-label" },
                                  [
                                    _vm._v(
                                      "if Dual-Listed Select all that Apply"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("v-select", {
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
                                      _vm.$set(
                                        _vm.form,
                                        "exchange_traded_on",
                                        $$v
                                      )
                                    },
                                    expression: "form.exchange_traded_on"
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c(
                              "label",
                              { staticClass: "control-label font-weight-bold" },
                              [
                                _vm._v(
                                  "Are you a\n                                    Conglomerate?"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("v-select", {
                              ref: "conglomerate",
                              attrs: {
                                options: [
                                  { label: "No", id: 0 },
                                  { label: "Yes", id: 1 }
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
                        ),
                        _vm._v(" "),
                        _vm.form.conglomerate
                          ? _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _vm._m(0),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    "no-drop": "",
                                    taggable: "",
                                    multiple: "",
                                    "select-on-key-codes": [188, 13],
                                    "close-on-select": false,
                                    placeholder: "Ex: A, B"
                                  },
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
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-back-next btn-profile-edit",
                            attrs: {
                              link: "",
                              to: {
                                name: "CompanyQuestionnairesDetails",
                                hash: "#companyType"
                              }
                            }
                          },
                          [_vm._v("Cancel\n                            ")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "float-right" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-back-next btn-profile-edit",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.saveCompanyTypesData("close")
                                }
                              }
                            },
                            [
                              _vm._v(
                                "Save and Close\n                                "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-back-next btn-profile-edit",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.saveCompanyTypesData("continue")
                                }
                              }
                            },
                            [
                              _vm._v(
                                "Save and Continue\n                                "
                              )
                            ]
                          )
                        ])
                      ],
                      1
                    )
                  ])
                ])
              ],
              1
            )
          ],
          1
        )
      ]),
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
    return _c("label", { staticClass: "control-label font-weight-bold" }, [
      _vm._v("Name of subsidiaries ("),
      _c("span", { staticClass: "label-caption" }, [
        _c("i", [_vm._v("Press Enter or comma to separate entries")])
      ]),
      _vm._v(")")
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

/***/ "./resources/js/components/company/EditCompanyTypes.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/company/EditCompanyTypes.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditCompanyTypes_vue_vue_type_template_id_7cf017e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditCompanyTypes.vue?vue&type=template&id=7cf017e3& */ "./resources/js/components/company/EditCompanyTypes.vue?vue&type=template&id=7cf017e3&");
/* harmony import */ var _EditCompanyTypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditCompanyTypes.vue?vue&type=script&lang=js& */ "./resources/js/components/company/EditCompanyTypes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditCompanyTypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditCompanyTypes_vue_vue_type_template_id_7cf017e3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditCompanyTypes_vue_vue_type_template_id_7cf017e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/EditCompanyTypes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/EditCompanyTypes.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/company/EditCompanyTypes.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyTypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditCompanyTypes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanyTypes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyTypes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/EditCompanyTypes.vue?vue&type=template&id=7cf017e3&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/company/EditCompanyTypes.vue?vue&type=template&id=7cf017e3& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyTypes_vue_vue_type_template_id_7cf017e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditCompanyTypes.vue?vue&type=template&id=7cf017e3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanyTypes.vue?vue&type=template&id=7cf017e3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyTypes_vue_vue_type_template_id_7cf017e3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyTypes_vue_vue_type_template_id_7cf017e3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);