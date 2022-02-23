(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanyFinances.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/EditCompanyFinances.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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







/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isLoading: false,
      baseCurrencyDacimal: "",
      form: {
        conduct_financing: "",
        financing_type: "",
        audited_finance: "",
        company_valuation: "",
        intelletual_property: "",
        patent_type: "",
        research_coverage_type: "",
        shared_community_research: ""
      },
      CompanyFinancesFormData: {
        conduct_financing: "",
        financing_type: "",
        audited_finance: "",
        company_valuation: "",
        intelletual_property: "",
        patent_type: "",
        research_coverage_type: "",
        shared_community_research: "",
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
      researchCoverageTypeList: [],
      researchCoverageTypeIds: [],
      analystRatingList: [],
      sharedCommunityResearchPlatformList: [],
      sharedCommunityResearchPlatformIds: []
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
    checkCommunityResearch: function checkCommunityResearch(value) {
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
    resetFinancingType: function resetFinancingType(value) {
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
                _context6.next = 2;
                return axios.get('/api/company-questionnaire-data/4/edit').then(function (response) {
                  _this6.isLoading = false;
                  var financesData = response.data.data;
                  _this6.baseCurrencyDacimal = financesData.base_currency != null ? financesData.base_currency.unicode_decimal : '';
                  _this6.form.conduct_financing = financesData.conducted_financing_six_month;
                  _this6.form.financing_type = financesData.financing_type;
                  _this6.form.company_valuation = financesData.recent_valuation;
                  _this6.form.audited_finance = financesData.audited_financials;
                  _this6.form.intelletual_property = financesData.intellectual_property;
                  _this6.form.patent_type = financesData.patent_type;
                  _this6.form.research_coverage_type = financesData.research_coverage;
                  _this6.form.shared_community_research = financesData.shared_community_research;

                  _this6.showRelatedField(financesData.financing_type, 'financingTypeIds');

                  _this6.showRelatedField(financesData.intellectual_property, 'intelletualPropertyIds');

                  _this6.showRelatedField(financesData.patent_type, 'patentsTypIds');

                  _this6.showRelatedField(financesData.research_coverage, 'researchCoverageTypeIds');

                  _this6.showRelatedField(financesData.shared_community_research, 'sharedCommunityResearchPlatformIds');

                  _this6.checkPatent();

                  _this6.checkCommunityResearch();
                })["catch"](function (error) {
                  _this6.isLoading = false;

                  if (error.response.status == 401) {
                    _this6.$emit('logout');
                  } else {
                    toastr.error(error);
                  }
                });

              case 2:
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

      for (var rsc = 0; rsc < this.form.research_coverage_type.length; rsc++) {
        rscOptions.push(this.form.research_coverage_type[rsc].id);
      }

      for (var scr = 0; scr < this.form.shared_community_research.length; scr++) {
        scrOptions.push(this.form.shared_community_research[scr].id);
      }

      this.CompanyFinancesFormData.conduct_financing = this.form.conduct_financing;
      this.CompanyFinancesFormData.company_valuation = (_this$form$company_va = this.form.company_valuation) !== null && _this$form$company_va !== void 0 ? _this$form$company_va : '';
      this.CompanyFinancesFormData.audited_finance = this.form.audited_finance;
      this.CompanyFinancesFormData.financing_type = finanOptions.join(',');
      this.CompanyFinancesFormData.intelletual_property = intelOptions.join(',');
      this.CompanyFinancesFormData.patent_type = patOptions.join(',');
      this.CompanyFinancesFormData.research_coverage_type = rscOptions.join(',');
      this.CompanyFinancesFormData.shared_community_research = scrOptions.join(',');
      this.CompanyFinancesFormData._token = document.querySelector('meta[name="csrf-token"]').content;
      _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__["default"].updateCompanyQuestionnaireData(this.CompanyFinancesFormData, 4).then(function (response) {
        _this7.isLoading = false;
        _this7.submitButtonDisabled = false;
        toastr.success(response.data.success.message);

        if (action == 'continue') {
          _this7.$router.push({
            name: "EditCompanySocial"
          });
        } else {
          _this7.$router.push({
            name: "CompanyQuestionnairesDetails",
            'hash': '#finance'
          });
        }
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
    }
  },
  created: function created() {
    this.isLoading = true;
    this.goBackToPageTopAndNextFieldToEnter();
    this.getFinancingTypeList();
    this.getIntelletualPropertyList();
    this.getPatentsTypeList();
    this.getResearchCoverageTypeList();
    this.getSharedCommunityResearchPlatformList();
    this.getStepwiseData();
  },
  components: {
    loader: _Loader__WEBPACK_IMPORTED_MODULE_4__["default"],
    sidebar: _Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"],
    Navigation: _Navigation__WEBPACK_IMPORTED_MODULE_3__["default"],
    ProfileCompleteBanner: _ProfileCompleteBanner__WEBPACK_IMPORTED_MODULE_7__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanyFinances.vue?vue&type=template&id=03537f5f&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/EditCompanyFinances.vue?vue&type=template&id=03537f5f& ***!
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
                  _vm._v("Edit Valuation & IP")
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
                                  "Have you conducted financing in the\n                                    last 6 months?"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("v-select", {
                              ref: "conduct_financing",
                              attrs: {
                                options: [
                                  { label: "No", id: 0 },
                                  { label: "Yes", id: 1 }
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
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _vm.form.conduct_financing != "" &&
                            _vm.form.conduct_financing == 1
                              ? [
                                  _c(
                                    "label",
                                    {
                                      staticClass:
                                        "control-label font-weight-bold label-with-under-p"
                                    },
                                    [
                                      _vm._v(
                                        "Type of\n                                        Financing"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    { staticClass: "p-under-input-label" },
                                    [
                                      _vm._v(
                                        "Financing Examples include IPO, Angel\n                                        Investors, Reg CF"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("v-select", {
                                    attrs: {
                                      label: "name",
                                      multiple: "",
                                      selectable: _vm.financingSelectHide,
                                      options: _vm.financingTypeList,
                                      clearable: false,
                                      placeholder:
                                        "Select the Options that Apply"
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
                                        _vm.$set(
                                          _vm.form,
                                          "financing_type",
                                          $$v
                                        )
                                      },
                                      expression: "form.financing_type"
                                    }
                                  })
                                ]
                              : _vm._e()
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            { staticClass: "control-label font-weight-bold" },
                            [
                              _vm._v(
                                "What is your Company's Most Recent\n                                    Valuation?"
                              )
                            ]
                          ),
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
                              keypress: function($event) {
                                return _vm.stripTheGarbage($event)
                              },
                              blur: function($event) {
                                return _vm.formatDollars()
                              },
                              focus: function($event) {
                                return _vm.formatDollarsToNumber()
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "company_valuation",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "control-label font-weight-bold"
                                },
                                [
                                  _vm._v(
                                    "Does Company Have Audited\n                                        Financials?"
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("v-select", {
                                attrs: {
                                  label: "labelAu",
                                  options: [
                                    { labelAu: "No", audit_id: 0 },
                                    { labelAu: "Yes", audit_id: 1 }
                                  ],
                                  clearable: false,
                                  placeholder: "Select Yes or No",
                                  reduce: function(audit) {
                                    return audit.audit_id
                                  }
                                },
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
                        ],
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
                                  "Does the Company Have Any\n                                    Intellectual Property?"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("v-select", {
                              ref: "intelletual_property",
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
                                  _vm.$set(
                                    _vm.form,
                                    "intelletual_property",
                                    $$v
                                  )
                                },
                                expression: "form.intelletual_property"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm.form.intelletual_property != "" &&
                        _vm.patentTypeCondition == "Patents"
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
                                      "Which Type of\n                                    Patents?"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("v-select", {
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
                                  "Type of Research\n                                    Coverage"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("v-select", {
                              ref: "research_coverage_type",
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
                                  _vm.$set(
                                    _vm.form,
                                    "research_coverage_type",
                                    $$v
                                  )
                                },
                                expression: "form.research_coverage_type"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm.researchTypeCondition == "Cummunity"
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
                                      "Shared Community Research\n                                    Platforms"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("v-select", {
                                  attrs: {
                                    multiple: "",
                                    label: "name",
                                    selectable:
                                      _vm.sharedCommunityResearchPlatformSelectedHide,
                                    options:
                                      _vm.sharedCommunityResearchPlatformList,
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
                                hash: "#finance"
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
                                  return _vm.saveCompanyFinancesData("close")
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
                                  return _vm.saveCompanyFinancesData("continue")
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
                      2
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
var staticRenderFns = []
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

/***/ "./resources/js/components/company/EditCompanyFinances.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/company/EditCompanyFinances.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditCompanyFinances_vue_vue_type_template_id_03537f5f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditCompanyFinances.vue?vue&type=template&id=03537f5f& */ "./resources/js/components/company/EditCompanyFinances.vue?vue&type=template&id=03537f5f&");
/* harmony import */ var _EditCompanyFinances_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditCompanyFinances.vue?vue&type=script&lang=js& */ "./resources/js/components/company/EditCompanyFinances.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditCompanyFinances_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditCompanyFinances_vue_vue_type_template_id_03537f5f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditCompanyFinances_vue_vue_type_template_id_03537f5f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/EditCompanyFinances.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/EditCompanyFinances.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/company/EditCompanyFinances.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyFinances_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditCompanyFinances.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanyFinances.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyFinances_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/EditCompanyFinances.vue?vue&type=template&id=03537f5f&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/company/EditCompanyFinances.vue?vue&type=template&id=03537f5f& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyFinances_vue_vue_type_template_id_03537f5f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditCompanyFinances.vue?vue&type=template&id=03537f5f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanyFinances.vue?vue&type=template&id=03537f5f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyFinances_vue_vue_type_template_id_03537f5f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyFinances_vue_vue_type_template_id_03537f5f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);