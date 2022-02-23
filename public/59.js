(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanyProfile.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/EditCompanyProfile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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







/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isLoading: false,
      form: {
        company_name: "",
        hq_address: "",
        hq_address2: "",
        hq_city: "",
        hq_state: "",
        hq_country: "",
        hq_zip: "",
        employee_number: "",
        esg_business: ""
      },
      CompanyProfileFormData: {
        company_name: "",
        hq_address: "",
        hq_address2: "",
        hq_city: "",
        hq_state: "",
        hq_country: "",
        hq_zip: "",
        employee_number: "",
        esg_business: ""
      },
      errors: [],
      countries: [],
      StateLists: [],
      employeeNumberList: []
    };
  },
  validations: {
    form: {
      company_name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6__["required"]
      },
      hq_address: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6__["required"]
      },
      hq_city: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6__["required"]
      },
      hq_state: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6__["required"]
      },
      hq_zip: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6__["required"]
      } //hq_country: {required},

    }
  },
  methods: {
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
                return _context.abrupt("return", axios.get('/api/country-list').then(function (response) {
                  _this.countries = response.data.data;
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

      function getCountryList() {
        return _getCountryList.apply(this, arguments);
      }

      return getCountryList;
    }(),
    getStates: function getStates(value) {
      var _this2 = this;

      /*Aet country as default US which table ID is 1*/
      axios.get('/api/get-state-list/1').then(function (response) {
        _this2.StateLists = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getEmployeeNumberList: function getEmployeeNumberList() {
      var _this3 = this;

      axios.get('/api/get-employee-number-list').then(function (response) {
        _this3.employeeNumberList = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getStepwiseData: function getStepwiseData() {
      var _this4 = this;

      axios.get('/api/company-questionnaire-data/1/edit').then(function (response) {
        var companyData = response.data.data;
        _this4.form.company_name = companyData.name;
        _this4.form.hq_address = companyData.headquarters.address.street_address_one;
        _this4.form.hq_address2 = companyData.headquarters.address.street_address_two;
        _this4.form.hq_city = companyData.headquarters.address.city;

        _this4.getStates(companyData.headquarters.address.country_code);

        _this4.form.hq_state = companyData.headquarters.address.state_id;
        _this4.form.hq_country = companyData.headquarters.address.country_code;
        _this4.form.hq_zip = companyData.headquarters.address.zip;
        _this4.form.employee_number = companyData.numberof_employees;
        _this4.form.esg_business = companyData.esg_business;
        _this4.isLoading = false;
      })["catch"](function (error) {
        _this4.isLoading = false;

        if (error.response.status == 401) {
          _this4.$emit('logout');
        } else {
          toastr.error(error);
        }
      });
    },
    saveCompanyProfileData: function saveCompanyProfileData(action) {
      var _this$form$hq_address,
          _this$form$esg_busine,
          _this5 = this;

      this.$v.form.company_name.$touch();
      this.$v.form.hq_address.$touch();
      this.$v.form.hq_city.$touch();
      this.$v.form.hq_state.$touch(); //this.$v.form.hq_country.$touch();

      this.$v.form.hq_zip.$touch();

      if (this.$v.form.company_name.$invalid || this.$v.form.hq_address.$invalid || this.$v.form.hq_city.$invalid || this.$v.form.hq_state.$invalid // || this.$v.form.hq_country.$invalid
      || this.$v.form.hq_zip.$invalid) {
        if (this.$v.form.company_name.$invalid) {
          this.$refs.company_name.focus();
        } else if (this.$v.form.hq_address.$invalid) {
          this.$refs.hq_address.focus();
        } else if (this.$v.form.hq_city.$invalid) {
          this.$refs.hq_city.focus();
        } else if (this.$v.form.hq_state.$invalid) {
          this.$refs.hq_state.$el.querySelector('input').focus();
        } else if (this.$v.form.hq_zip.$invalid) {
          this.$refs.hq_zip.focus();
        }

        return false;
      }

      this.errors = [];
      this.CompanyProfileFormData.company_name = this.form.company_name;
      this.CompanyProfileFormData.hq_address = this.form.hq_address;
      this.CompanyProfileFormData.hq_address2 = (_this$form$hq_address = this.form.hq_address2) !== null && _this$form$hq_address !== void 0 ? _this$form$hq_address : '';
      this.CompanyProfileFormData.hq_city = this.form.hq_city;
      this.CompanyProfileFormData.hq_state = this.form.hq_state;
      this.CompanyProfileFormData.hq_zip = this.form.hq_zip;
      this.CompanyProfileFormData.hq_country = 1;
      /*Set default Us for now which table ID is 1*/

      this.CompanyProfileFormData.employee_number = this.form.employee_number ? this.form.employee_number.id : '';
      this.CompanyProfileFormData.esg_business = (_this$form$esg_busine = this.form.esg_business) !== null && _this$form$esg_busine !== void 0 ? _this$form$esg_busine : '';
      _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__["default"].updateCompanyQuestionnaireData(this.CompanyProfileFormData, 1).then(function (response) {
        _this5.isLoading = false;
        _this5.submitButtonDisabled = false;
        toastr.success(response.data.success.message);

        if (action == 'continue') {
          _this5.$router.push({
            name: "EditCompanyExecutives"
          });
        } else {
          _this5.$router.push({
            name: "CompanyQuestionnairesDetails",
            'hash': '#profile'
          });
        }
      })["catch"](function (error) {
        _this5.isLoading = false;
        _this5.submitButtonDisabled = false;

        if (error.response.status === 422) {
          toastr.error(error.response.data.error.message);
        } else if (error.response.status == 401) {
          _this5.$emit('logout');
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
    }
  },
  created: function () {
    var _created = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.isLoading = true;
              this.goBackToPageTopAndNextFieldToEnter();
              this.getEmployeeNumberList();
              _context2.next = 5;
              return this.getCountryList();

            case 5:
              // await this.getStates();
              this.getStepwiseData();
              this.loadGtagEvent();

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanyProfile.vue?vue&type=template&id=2b102493&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/EditCompanyProfile.vue?vue&type=template&id=2b102493& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
                _c("profile-complete-banner", {
                  on: { updateViewKey: _vm.updateViewKey }
                }),
                _vm._v(" "),
                _c("h2", { staticClass: "text-center" }, [
                  _vm._v("Edit Company General Information")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row company-profile-container" }, [
                  _c("div", { staticClass: "col-md-7 mx-auto" }, [
                    _c("div", { staticClass: "panel-body" }, [
                      _c(
                        "form",
                        { attrs: { id: "companyProfileForm" } },
                        [
                          _c("div", { staticClass: "form-group" }, [
                            _vm._m(0),
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
                              class: {
                                "is-invalid": _vm.$v.form.company_name.$error
                              },
                              attrs: {
                                type: "text",
                                name: "CompanyName",
                                placeholder: "Ex: Google",
                                autocomplete: "new-company"
                              },
                              domProps: { value: _vm.form.company_name },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "company_name",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            !_vm.$v.form.company_name.required
                              ? _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(
                                    "\n                                    Company name is\n                                    required.\n                                "
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
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c(
                              "label",
                              { staticClass: "control-label font-weight-bold" },
                              [
                                _vm._v("Headquarters Geographic Location"),
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
                                    attrs: { title: "US Only for Beta" }
                                  },
                                  [
                                    _c("i", {
                                      staticClass:
                                        "fas fa-question-circle text-dark"
                                    })
                                  ]
                                )
                              ]
                            ),
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
                              class: {
                                "is-invalid": _vm.$v.form.hq_address.$error
                              },
                              attrs: {
                                type: "text",
                                placeholder: "Address 1",
                                autocomplete: "new-address",
                                name: "Address"
                              },
                              domProps: { value: _vm.form.hq_address },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "hq_address",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            !_vm.$v.form.hq_address.required
                              ? _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(
                                    "\n                                    Address is\n                                    required.\n                                "
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
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
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "hq_address2",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
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
                              class: {
                                "is-invalid": _vm.$v.form.hq_city.$error
                              },
                              attrs: {
                                type: "text",
                                name: "City",
                                placeholder: "City",
                                autocomplete: "new-city"
                              },
                              domProps: { value: _vm.form.hq_city },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.form,
                                    "hq_city",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            !_vm.$v.form.hq_city.required
                              ? _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v(
                                    "\n                                    City is\n                                    required.\n                                "
                                  )
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("br"),
                            _vm._v(" "),
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "col" },
                                [
                                  _c("v-select", {
                                    ref: "hq_state",
                                    class: {
                                      "is-invalid": _vm.$v.form.hq_state.$error
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
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col" }, [
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
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.form,
                                        "hq_zip",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                !_vm.$v.form.hq_zip.required
                                  ? _c(
                                      "div",
                                      { staticClass: "invalid-feedback" },
                                      [
                                        _vm._v(
                                          "\n                                            Zip Code is\n                                            required.\n                                        "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ])
                            ])
                          ]),
                          _vm._v(" "),
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
                                    "Number of\n                                    Employees"
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("v-select", {
                                ref: "employee_number",
                                attrs: {
                                  label: "name",
                                  options: _vm.employeeNumberList,
                                  clearable: false,
                                  placeholder: "Select Below"
                                },
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
                          ),
                          _vm._v(" "),
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
                                    "Are you an ESG Business -\n                                    (Environmental, Social And Governance Values)"
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("v-select", {
                                ref: "esg_business",
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
                                model: {
                                  value: _vm.form.esg_business,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "esg_business", $$v)
                                  },
                                  expression: "form.esg_business"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "router-link",
                            {
                              staticClass: "btn btn-back-next btn-profile-edit",
                              attrs: {
                                link: "",
                                to: {
                                  name: "CompanyQuestionnairesDetails",
                                  hash: "#profile"
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
                                staticClass:
                                  "btn btn-back-next btn-profile-edit",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.saveCompanyProfileData("close")
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                    Save and Close\n                                "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn btn-back-next btn-profile-edit",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.saveCompanyProfileData(
                                      "continue"
                                    )
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                    Save and Continue\n                                "
                                )
                              ]
                            )
                          ])
                        ],
                        1
                      )
                    ])
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
      _vm._v("Company Name"),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
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

/***/ "./resources/js/components/company/EditCompanyProfile.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/company/EditCompanyProfile.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditCompanyProfile_vue_vue_type_template_id_2b102493___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditCompanyProfile.vue?vue&type=template&id=2b102493& */ "./resources/js/components/company/EditCompanyProfile.vue?vue&type=template&id=2b102493&");
/* harmony import */ var _EditCompanyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditCompanyProfile.vue?vue&type=script&lang=js& */ "./resources/js/components/company/EditCompanyProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditCompanyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditCompanyProfile_vue_vue_type_template_id_2b102493___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditCompanyProfile_vue_vue_type_template_id_2b102493___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/EditCompanyProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/EditCompanyProfile.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/company/EditCompanyProfile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditCompanyProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanyProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/EditCompanyProfile.vue?vue&type=template&id=2b102493&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/company/EditCompanyProfile.vue?vue&type=template&id=2b102493& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyProfile_vue_vue_type_template_id_2b102493___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditCompanyProfile.vue?vue&type=template&id=2b102493& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanyProfile.vue?vue&type=template&id=2b102493&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyProfile_vue_vue_type_template_id_2b102493___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyProfile_vue_vue_type_template_id_2b102493___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);