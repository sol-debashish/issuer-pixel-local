(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[72],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PasswordRequest.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/PasswordRequest.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Navigation.vue */ "./resources/js/components/Navigation.vue");
/* harmony import */ var _apis_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apis/User */ "./resources/js/apis/User.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      form: {
        email: ""
      },
      errors: [],
      isLoading: false,
      validateError: false,
      success: ''
    };
  },
  methods: {
    forgot: function forgot() {
      var _this = this;

      this.isLoading = true;
      this.validateError = false;
      _apis_User__WEBPACK_IMPORTED_MODULE_1__["default"].forgot(this.form).then(function (res) {
        _this.isLoading = false;
        _this.success = res.data.success.message;
        _this.form.email = "";
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this.isLoading = false;
          _this.validateError = true;
          _this.errors = error.response.data.error.message;
        }
      });
    }
  },
  components: {
    loader: function loader() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/Loader */ "./resources/js/components/Loader.vue"));
    },
    Navigation: _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PasswordRequest.vue?vue&type=template&id=261acca5&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/PasswordRequest.vue?vue&type=template&id=261acca5& ***!
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
    [
      _c("Navigation"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container  mt-5", attrs: { "data-aos": "fade-up" } },
        [
          _c("div", { staticClass: "row login-container" }, [
            _c(
              "div",
              {
                staticClass:
                  "col-lg-5 col-md-6 mx-auto my-4 bg-white rounded py-3"
              },
              [
                _c("h2", { staticClass: "text-center mb-2" }, [
                  _vm._v("Reset Password")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "text-center mb-4" }, [
                  _vm._v(
                    "Forgot your password? Please enter your account email below and we will\n                    send you a Reset Link if your email is registered with us."
                  )
                ]),
                _vm._v(" "),
                _vm.success
                  ? _c(
                      "div",
                      {
                        staticClass: "alert alert-success",
                        attrs: { role: "alert" }
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(_vm.success) +
                            "\n                "
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.forgot.apply(null, arguments)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        {
                          staticClass: "control-label font-weight-bold",
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
                        staticClass: "form-control",
                        class: _vm.validateError ? "is-invalid" : "",
                        attrs: {
                          type: "email",
                          id: "email",
                          placeholder: "Type in your email address",
                          autocomplete: "off",
                          required: "required"
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
                      _vm.errors.email
                        ? _c(
                            "span",
                            {
                              staticClass: "invalid-feedback",
                              attrs: { role: "alert" }
                            },
                            [
                              _c("strong", [
                                _vm._v(_vm._s(_vm.errors.email[0]))
                              ])
                            ]
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-center mt-4" }, [
                      _c("button", { staticClass: "btn btn-back-next" }, [
                        _vm._v(
                          "\n                            Request new password\n                        "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "p",
                        { staticClass: "mt-4" },
                        [
                          _vm._v(
                            "Don't have an account?\n                            "
                          ),
                          _c(
                            "router-link",
                            {
                              staticClass: "theme-color",
                              attrs: { to: { name: "SignUp" } }
                            },
                            [
                              _vm._v(
                                "\n                                Register"
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ]
                )
              ]
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

/***/ "./resources/js/views/PasswordRequest.vue":
/*!************************************************!*\
  !*** ./resources/js/views/PasswordRequest.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PasswordRequest_vue_vue_type_template_id_261acca5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PasswordRequest.vue?vue&type=template&id=261acca5& */ "./resources/js/views/PasswordRequest.vue?vue&type=template&id=261acca5&");
/* harmony import */ var _PasswordRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PasswordRequest.vue?vue&type=script&lang=js& */ "./resources/js/views/PasswordRequest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PasswordRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PasswordRequest_vue_vue_type_template_id_261acca5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PasswordRequest_vue_vue_type_template_id_261acca5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/PasswordRequest.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/PasswordRequest.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/PasswordRequest.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordRequest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PasswordRequest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordRequest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/PasswordRequest.vue?vue&type=template&id=261acca5&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/PasswordRequest.vue?vue&type=template&id=261acca5& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordRequest_vue_vue_type_template_id_261acca5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordRequest.vue?vue&type=template&id=261acca5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PasswordRequest.vue?vue&type=template&id=261acca5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordRequest_vue_vue_type_template_id_261acca5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordRequest_vue_vue_type_template_id_261acca5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);