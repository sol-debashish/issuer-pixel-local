(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyUpdates.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CompanyUpdates.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Navigation.vue */ "./resources/js/components/Navigation.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CompanyUpdates",
  data: function data() {
    return {
      email: "",
      isDisabled: false,
      subscribeFormData: {
        email: '',
        _token: ''
      }
    };
  },
  validations: {
    email: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      customEmailValidate: function customEmailValidate() {
        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

        if (value != "") {
          var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(String(value).toLowerCase());
        } else {
          return true;
        }
      }
    }
  },
  methods: {
    addSubscribe: function addSubscribe() {
      var _this = this;

      this.$v.email.$touch();

      if (this.$v.email.$invalid) {
        this.$refs.email.focus();
        return false;
      }

      this.isDisabled = true;
      this.subscribeFormData.email = this.email;
      this.subscribeFormData._token = document.querySelector('meta[name="csrf-token"]').content;
      axios.post('/api/subscribe', this.subscribeFormData).then(function (response) {
        if (response.data.success) {
          $.confirm({
            title: '',
            content: "Thank you for subscribing.",
            columnClass: 'medium',
            type: 'blue',
            typeAnimated: true,
            buttons: {
              Ok: function Ok() {}
            }
          });
          _this.isDisabled = false;

          _this.$v.$reset();

          _this.email = "";
        }
      })["catch"](function (error) {
        console.log(error);
        _this.isDisabled = false;

        if (error.response.status === 422) {
          toastr.error(error.response.data.error.message);
        } else {
          toastr.error(error);
        }
      });
    }
  },
  components: {
    Footer: function Footer() {
      return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../components/Footer */ "./resources/js/components/Footer.vue"));
    },
    Navigation: _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyUpdates.vue?vue&type=template&id=d37ecc28&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CompanyUpdates.vue?vue&type=template&id=d37ecc28&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    [
      _c("Navigation"),
      _vm._v(" "),
      _c("section", [
        _c("div", { staticClass: "container aos-init mt-5" }, [
          _c("div", { staticClass: "bg-white rounded px-lg-5 px-4 py-5" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "row mx-auto px-5" }, [
              _c("div", { staticClass: "col-md subscribe-box-input" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.email,
                      expression: "email"
                    }
                  ],
                  ref: "email",
                  staticClass: "form-control form-control-lg mb-md-0 mb-2",
                  class: { "is-invalid": _vm.$v.email.$error },
                  attrs: {
                    type: "text",
                    placeholder: "Insert your email ...*",
                    autocomplete: "off"
                  },
                  domProps: { value: _vm.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.email = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                !_vm.$v.email.required
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v("Email is required.")
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.$v.email.customEmailValidate
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(
                        "The email is not\n                            valid.\n                        "
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("p", { staticClass: "fs-12 pt-2" }, [
                  _vm._v(
                    "By subscribing to Issuer Pixels company updates, you agree to the\n                            email address being stored and used to receive updates."
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md subscribe-box-button" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-lg btn-theme-purple px-4",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.addSubscribe.apply(null, arguments)
                      }
                    }
                  },
                  [_vm._v("Subscribe\n                        ")]
                )
              ])
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c("h4", { staticClass: "font-weight-bold" }, [
        _vm._v(
          "\n                        Issuer Pixel Updates\n                    "
        )
      ]),
      _vm._v(" "),
      _c("p", [
        _vm._v("Subscribe to keep up with our exciting company updates.")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/CompanyUpdates.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/CompanyUpdates.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyUpdates_vue_vue_type_template_id_d37ecc28_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyUpdates.vue?vue&type=template&id=d37ecc28&scoped=true& */ "./resources/js/views/CompanyUpdates.vue?vue&type=template&id=d37ecc28&scoped=true&");
/* harmony import */ var _CompanyUpdates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyUpdates.vue?vue&type=script&lang=js& */ "./resources/js/views/CompanyUpdates.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CompanyUpdates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyUpdates_vue_vue_type_template_id_d37ecc28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyUpdates_vue_vue_type_template_id_d37ecc28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d37ecc28",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/CompanyUpdates.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/CompanyUpdates.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/CompanyUpdates.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyUpdates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyUpdates.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyUpdates.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyUpdates_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/CompanyUpdates.vue?vue&type=template&id=d37ecc28&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/CompanyUpdates.vue?vue&type=template&id=d37ecc28&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyUpdates_vue_vue_type_template_id_d37ecc28_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyUpdates.vue?vue&type=template&id=d37ecc28&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyUpdates.vue?vue&type=template&id=d37ecc28&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyUpdates_vue_vue_type_template_id_d37ecc28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyUpdates_vue_vue_type_template_id_d37ecc28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);