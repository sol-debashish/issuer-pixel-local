(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ContactUsIssuer.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ContactUsIssuer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/User */ "./resources/js/apis/User.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ContactUsIssuer",
  data: function data() {
    return {
      form: {
        company: "",
        name: "",
        email: "",
        message: ""
      },
      errors: [],
      isLoading: false
    };
  },
  validations: {
    form: {
      company: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      email: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["email"]
      },
      message: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      }
    }
  },
  methods: {
    contactUs: function contactUs() {
      var _this = this;

      this.$v.form.company.$touch();
      this.$v.form.name.$touch();
      this.$v.form.email.$touch();
      this.$v.form.message.$touch();

      if (this.$v.form.company.$invalid || this.$v.form.name.$invalid || this.$v.form.email.$invalid || this.$v.form.message.$invalid) {
        if (this.$v.form.name.$invalid) {
          this.$refs.name.focus();
        } else if (this.$v.form.company.$invalid) {
          this.$refs.company.focus();
        } else if (this.$v.form.email.$invalid) {
          this.$refs.email.focus();
        } else if (this.$v.form.message.$invalid) {
          this.$refs.message.focus();
        }

        return false;
      }

      this.isLoading = true;
      _apis_User__WEBPACK_IMPORTED_MODULE_0__["default"].contact(this.form).then(function () {
        $.confirm({
          title: '',
          content: "Thank you for submitting your message. Someone will be reaching out to you soon.",
          columnClass: 'medium',
          type: 'blue',
          typeAnimated: true,
          buttons: {
            Ok: function Ok() {}
          }
        });
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this.errors = error.response.data.error.message;
        }

        _this.isLoading = false;
      });
    }
  },
  mounted: function mounted() {
    var user = JSON.parse(localStorage.getItem("info"));
    this.form.name = user.name;
    this.form.company = user.company;
    this.form.email = user.email;
  },
  created: function created() {},
  components: {
    loader: function loader() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/Loader */ "./resources/js/components/Loader.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ContactUsIssuer.vue?vue&type=template&id=34af4230&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ContactUsIssuer.vue?vue&type=template&id=34af4230& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    { staticClass: "dashboard pt-0" },
    [
      _c("div", [
        _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.contactUs.apply(null, arguments)
              }
            }
          },
          [
            _c("h4", { staticClass: "text-center text-theme-dark-blue pb-2" }, [
              _vm._v("Contact Us")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-10 col-lg-8 grid-margin mx-auto" },
                [
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "text-theme-dark-blue",
                            attrs: { for: "name" }
                          },
                          [_vm._v("Name")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.name,
                              expression: "form.name"
                            }
                          ],
                          ref: "name",
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.$v.form.name.$error },
                          attrs: {
                            type: "text",
                            id: "name",
                            placeholder: "Name",
                            autocomplete: "off",
                            disabled: ""
                          },
                          domProps: { value: _vm.form.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "name", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        !_vm.$v.form.name.required
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v("Name is required.")
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.errors.name
                          ? _c(
                              "span",
                              {
                                staticClass: "invalid-feedback",
                                attrs: { role: "alert" }
                              },
                              [
                                _c("strong", [
                                  _vm._v(_vm._s(_vm.errors.name[0]))
                                ])
                              ]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "text-theme-dark-blue",
                            attrs: { for: "company" }
                          },
                          [_vm._v("Company")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.company,
                              expression: "form.company"
                            }
                          ],
                          ref: "company",
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.$v.form.company.$error },
                          attrs: {
                            type: "text",
                            id: "company",
                            placeholder: "Company",
                            autocomplete: "off",
                            disabled: ""
                          },
                          domProps: { value: _vm.form.company },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "company", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        !_vm.$v.form.company.required
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v("Company is required.")
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.errors.company
                          ? _c(
                              "span",
                              {
                                staticClass: "invalid-feedback",
                                attrs: { role: "alert" }
                              },
                              [
                                _c("strong", [
                                  _vm._v(_vm._s(_vm.errors.company[0]))
                                ])
                              ]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "text-theme-dark-blue",
                            attrs: { for: "email" }
                          },
                          [_vm._v("Email")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.email,
                              expression: "form.email"
                            }
                          ],
                          ref: "email",
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.$v.form.email.$error },
                          attrs: {
                            type: "email",
                            id: "email",
                            placeholder: "Email",
                            autocomplete: "off",
                            disabled: ""
                          },
                          domProps: { value: _vm.form.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "email", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        !_vm.$v.form.email.required
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v("Email is required.")
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.$v.form.email.email
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v("The email is not valid.")
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.errors.email
                          ? _c(
                              "div",
                              { staticClass: "invalid-server-feedback" },
                              [_vm._v(_vm._s(_vm.errors.email[0]))]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          {
                            staticClass: "text-theme-dark-blue",
                            attrs: { for: "message" }
                          },
                          [_vm._v("Message")]
                        ),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.message,
                              expression: "form.message"
                            }
                          ],
                          ref: "message",
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.$v.form.message.$error },
                          attrs: { id: "message", placeholder: "Your Message" },
                          domProps: { value: _vm.form.message },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "message", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        !_vm.$v.form.message.required
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v("Message is required.")
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.errors.message
                          ? _c(
                              "div",
                              { staticClass: "invalid-server-feedback" },
                              [_vm._v(_vm._s(_vm.errors.message[0]))]
                            )
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _vm._m(0)
                    ])
                  ])
                ]
              )
            ])
          ]
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
    return _c("div", { staticClass: "mt-4 text-center" }, [
      _c(
        "button",
        { staticClass: "btn btn-back-next", attrs: { type: "submit" } },
        [_vm._v("Send")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/ContactUsIssuer.vue":
/*!************************************************!*\
  !*** ./resources/js/views/ContactUsIssuer.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContactUsIssuer_vue_vue_type_template_id_34af4230___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactUsIssuer.vue?vue&type=template&id=34af4230& */ "./resources/js/views/ContactUsIssuer.vue?vue&type=template&id=34af4230&");
/* harmony import */ var _ContactUsIssuer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactUsIssuer.vue?vue&type=script&lang=js& */ "./resources/js/views/ContactUsIssuer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContactUsIssuer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContactUsIssuer_vue_vue_type_template_id_34af4230___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContactUsIssuer_vue_vue_type_template_id_34af4230___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ContactUsIssuer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ContactUsIssuer.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/ContactUsIssuer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUsIssuer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ContactUsIssuer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ContactUsIssuer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUsIssuer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ContactUsIssuer.vue?vue&type=template&id=34af4230&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/ContactUsIssuer.vue?vue&type=template&id=34af4230& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUsIssuer_vue_vue_type_template_id_34af4230___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ContactUsIssuer.vue?vue&type=template&id=34af4230& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ContactUsIssuer.vue?vue&type=template&id=34af4230&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUsIssuer_vue_vue_type_template_id_34af4230___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUsIssuer_vue_vue_type_template_id_34af4230___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);