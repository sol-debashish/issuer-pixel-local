(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanyExecutives.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/EditCompanyExecutives.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
//
//
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
        ceo_list: "",
        cfo_list: "",
        sales_dept_email: "",
        investor_relation_contact_email: "",
        top_competitors: "",
        company_founders: [],
        strategic_partnership: [],
        vendors: []
      },
      CompanyExecutivesFormData: {
        ceo_list: "",
        cfo_list: "",
        sales_dept_email: "",
        investor_relation_contact_email: "",
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
        email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6__["email"]
      },
      investor_relation_contact_email: {
        email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6__["email"]
      }
    }
  },
  methods: {
    addMoreFounder: function addMoreFounder() {
      this.form.company_founders.push({
        name: ''
      });
      this.NextFieldToEnter();
    },
    removeFounder: function removeFounder(index) {
      this.form.company_founders.splice(index, 1);
    },
    getStepwiseData: function () {
      var _getStepwiseData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                axios.get('/api/company-questionnaire-data/2/edit').then(function (response) {
                  _this.isLoading = false;
                  var executivesData = response.data.data;
                  _this.form.ceo_list = executivesData.ceo;
                  _this.form.cfo_list = executivesData.cfo;
                  _this.form.sales_dept_email = executivesData.sales_department_email;
                  _this.form.investor_relation_contact_email = executivesData.investor_relations_department_email;
                  _this.form.company_founders = executivesData.founders;
                  _this.form.strategic_partnership = Object.keys(executivesData.partnerships).map(function (key) {
                    return executivesData.partnerships[key].name;
                  });
                  _this.form.vendors = Object.keys(executivesData.vendors).map(function (key) {
                    return executivesData.vendors[key].name;
                  });
                  _this.form.top_competitors = null != executivesData.top_competitors ? executivesData.top_competitors.split(',').map(function (s) {
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
    saveCompanyExecutivesData: function saveCompanyExecutivesData(action) {
      var _this$form$ceo_list,
          _this$form$cfo_list,
          _this$form$sales_dept,
          _this$form$investor_r,
          _this2 = this;

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
      this.CompanyExecutivesFormData.investor_relation_contact_email = (_this$form$investor_r = this.form.investor_relation_contact_email) !== null && _this$form$investor_r !== void 0 ? _this$form$investor_r : '';
      this.CompanyExecutivesFormData.top_competitors = this.form.top_competitors ? this.form.top_competitors.join(', ') : '';
      this.CompanyExecutivesFormData.company_founders = JSON.stringify(this.form.company_founders);
      this.CompanyExecutivesFormData.strategic_partnership = JSON.stringify(this.form.strategic_partnership);
      this.CompanyExecutivesFormData.vendors = JSON.stringify(this.form.vendors);
      _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__["default"].updateCompanyQuestionnaireData(this.CompanyExecutivesFormData, 2).then(function (response) {
        _this2.isLoading = false;
        _this2.submitButtonDisabled = false;
        toastr.success(response.data.success.message);

        if (action == 'continue') {
          _this2.$router.push({
            name: "EditCompanyTypes"
          });
        } else {
          _this2.$router.push({
            name: "CompanyQuestionnairesDetails",
            'hash': '#executives'
          });
        }
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
    }
  },
  created: function created() {
    this.isLoading = true;
    this.goBackToPageTop();
    this.NextFieldToEnter();
    this.addMoreFounder();
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanyExecutives.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/EditCompanyExecutives.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ninput[type=\"search\"].vs__search::-webkit-input-placeholder {\n    color: #000000;\n    opacity: 0.5;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanyExecutives.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/EditCompanyExecutives.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditCompanyExecutives.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanyExecutives.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanyExecutives.vue?vue&type=template&id=c9bf0ede&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/EditCompanyExecutives.vue?vue&type=template&id=c9bf0ede& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
                  _vm._v("Edit Company Contacts")
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
                          { staticClass: "form-group mb-5" },
                          [
                            _c(
                              "label",
                              { staticClass: "control-label font-weight-bold" },
                              [
                                _vm._v(
                                  "Please List the Company's\n                                    Founders"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.form.company_founders, function(
                              input,
                              index
                            ) {
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
                                  staticClass:
                                    "form-control go-next-with-enter",
                                  attrs: {
                                    type: "text",
                                    placeholder: "Ex: John Smith",
                                    autocomplete: "new-founders"
                                  },
                                  domProps: { value: input.name },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        input,
                                        "name",
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
                                          "float-right mt-1 add-multiple cursor-pointer",
                                        on: { click: _vm.addMoreFounder }
                                      },
                                      [
                                        _vm._v(
                                          "+ Add Founder\n                                    "
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
                                          "\n                                        - Remove Founder\n                                    "
                                        )
                                      ]
                                    )
                              ]
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            { staticClass: "control-label font-weight-bold" },
                            [_vm._v("Please List the CEO")]
                          ),
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
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "ceo_list",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            { staticClass: "control-label font-weight-bold" },
                            [
                              _vm._v(
                                "Please List the\n                                    CFO"
                              )
                            ]
                          ),
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
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "cfo_list",
                                  $event.target.value
                                )
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c(
                            "label",
                            {
                              staticClass:
                                "control-label font-weight-bold label-with-under-p"
                            },
                            [
                              _vm._v(
                                "Email\n                                    Address of Sales\n                                    Department"
                              )
                            ]
                          ),
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
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "sales_dept_email",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          !_vm.$v.form.sales_dept_email.email
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  "The\n                                    email is\n                                    not\n                                    valid.\n                                "
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
                                    _vm._v(
                                      _vm._s(_vm.errors.sales_dept_email[0])
                                    )
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
                              _vm._v(
                                "Email Address of Company’s\n                                    Investor\n                                    Relations Contact"
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.investor_relation_contact_email,
                                expression:
                                  "form.investor_relation_contact_email"
                              }
                            ],
                            ref: "investor_relation_contact_email",
                            staticClass: "form-control go-next-with-enter",
                            class: {
                              "is-invalid":
                                _vm.$v.form.investor_relation_contact_email
                                  .$error
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
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "investor_relation_contact_email",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          !_vm.$v.form.investor_relation_contact_email.email
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  "\n                                    The\n                                    email is not valid.\n                                "
                                )
                              ])
                            : _vm._e()
                        ]),
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
                                  "Please List the Strategic\n                                    Partnerships ("
                                ),
                                _vm._m(0),
                                _vm._v(
                                  ")\n                                    "
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
                                    attrs: {
                                      title:
                                        "This information is used to improve your experience on the platform and will not be displayed publicly."
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
                            ),
                            _vm._v(" "),
                            _c("v-select", {
                              attrs: {
                                "no-drop": "",
                                taggable: "",
                                multiple: "",
                                "select-on-key-codes": [188, 13],
                                "close-on-select": false,
                                placeholder: "Ex: Coca Cola"
                              },
                              model: {
                                value: _vm.form.strategic_partnership,
                                callback: function($$v) {
                                  _vm.$set(
                                    _vm.form,
                                    "strategic_partnership",
                                    $$v
                                  )
                                },
                                expression: "form.strategic_partnership"
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
                              { staticClass: "control-label font-weight-bold" },
                              [
                                _vm._v(
                                  "Please List Key\n                                    Suppliers ("
                                ),
                                _vm._m(1),
                                _vm._v(
                                  ")\n                                    "
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
                                    attrs: {
                                      title:
                                        "This information is used to improve your experience on the platform and will not be displayed publicly."
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
                            ),
                            _vm._v(" "),
                            _c("v-select", {
                              attrs: {
                                "no-drop": "",
                                taggable: "",
                                multiple: "",
                                "select-on-key-codes": [188, 13],
                                "close-on-select": false,
                                placeholder: "Ex: Cisco"
                              },
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
                                  "Who Are Your Top\n                                    Competitors? ("
                                ),
                                _vm._m(2),
                                _vm._v(
                                  ")\n                                    "
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
                                    attrs: {
                                      title:
                                        "This information is used to improve your experience on the platform and will not be displayed publicly."
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
                            ),
                            _vm._v(" "),
                            _c("v-select", {
                              attrs: {
                                "no-drop": "",
                                taggable: "",
                                multiple: "",
                                "select-on-key-codes": [188, 13],
                                "close-on-select": false,
                                placeholder: "Ex: Google, WalMart, Amazon"
                              },
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
                                hash: "#executives"
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
                                  return _vm.saveCompanyExecutivesData("close")
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
                                  return _vm.saveCompanyExecutivesData(
                                    "continue"
                                  )
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

/***/ "./resources/js/components/company/EditCompanyExecutives.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/company/EditCompanyExecutives.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditCompanyExecutives_vue_vue_type_template_id_c9bf0ede___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditCompanyExecutives.vue?vue&type=template&id=c9bf0ede& */ "./resources/js/components/company/EditCompanyExecutives.vue?vue&type=template&id=c9bf0ede&");
/* harmony import */ var _EditCompanyExecutives_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditCompanyExecutives.vue?vue&type=script&lang=js& */ "./resources/js/components/company/EditCompanyExecutives.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EditCompanyExecutives_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditCompanyExecutives.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/company/EditCompanyExecutives.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditCompanyExecutives_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditCompanyExecutives_vue_vue_type_template_id_c9bf0ede___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditCompanyExecutives_vue_vue_type_template_id_c9bf0ede___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/EditCompanyExecutives.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/EditCompanyExecutives.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/company/EditCompanyExecutives.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyExecutives_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditCompanyExecutives.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanyExecutives.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyExecutives_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/EditCompanyExecutives.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/company/EditCompanyExecutives.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyExecutives_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditCompanyExecutives.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanyExecutives.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyExecutives_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyExecutives_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyExecutives_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyExecutives_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/company/EditCompanyExecutives.vue?vue&type=template&id=c9bf0ede&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/company/EditCompanyExecutives.vue?vue&type=template&id=c9bf0ede& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyExecutives_vue_vue_type_template_id_c9bf0ede___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditCompanyExecutives.vue?vue&type=template&id=c9bf0ede& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanyExecutives.vue?vue&type=template&id=c9bf0ede&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyExecutives_vue_vue_type_template_id_c9bf0ede___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanyExecutives_vue_vue_type_template_id_c9bf0ede___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);