(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ThankYou.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ThankYou.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Navigation.vue */ "./resources/js/components/Navigation.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ThankYou",
  data: function data() {
    return {
      thanksPage: localStorage.getItem("thanksPage")
    };
  },
  components: {
    Navigation: _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ThankYou.vue?vue&type=template&id=1ce62674&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ThankYou.vue?vue&type=template&id=1ce62674&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
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
        { staticClass: "container", attrs: { "data-aos": "fade-up" } },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col mx-auto mt-5" }, [
              _c("div", { staticClass: "content text-left tag-title mb-4" }, [
                _vm.thanksPage == "newsletter"
                  ? _c("p", { staticClass: "font-weight-bold text-center" }, [
                      _vm._v(
                        "\n                        Thank you for registering to our newsletter.\n                    "
                      )
                    ])
                  : _c("p", { staticClass: "font-weight-bold text-center" }, [
                      _vm._v(
                        "\n                        Thank you for submitting your message. Someone will be reaching out to you soon.\n                    "
                      )
                    ])
              ]),
              _vm._v(" "),
              _vm._m(0)
            ])
          ])
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
    return _c("div", { staticClass: "col-lg-7 mx-auto mt-5" }, [
      _c("div", { staticClass: "content text-center mt-5" }, [
        _c("img", {
          staticClass: "img-fluid mb-3",
          attrs: { src: "/images/issuerpixel_globe.png", alt: "" }
        }),
        _vm._v(" "),
        _c("img", {
          staticClass: "img-fluid issuer-text-logo",
          attrs: { src: "/images/issuerpixel_justtext2.png", alt: "" }
        }),
        _vm._v(" "),
        _c("div", [_vm._v("Because an alternative does not exist...")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/ThankYou.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/ThankYou.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ThankYou_vue_vue_type_template_id_1ce62674_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThankYou.vue?vue&type=template&id=1ce62674&scoped=true& */ "./resources/js/views/ThankYou.vue?vue&type=template&id=1ce62674&scoped=true&");
/* harmony import */ var _ThankYou_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThankYou.vue?vue&type=script&lang=js& */ "./resources/js/views/ThankYou.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ThankYou_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ThankYou_vue_vue_type_template_id_1ce62674_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ThankYou_vue_vue_type_template_id_1ce62674_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1ce62674",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ThankYou.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ThankYou.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/ThankYou.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ThankYou.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ThankYou.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ThankYou.vue?vue&type=template&id=1ce62674&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/ThankYou.vue?vue&type=template&id=1ce62674&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_template_id_1ce62674_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ThankYou.vue?vue&type=template&id=1ce62674&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ThankYou.vue?vue&type=template&id=1ce62674&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_template_id_1ce62674_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ThankYou_vue_vue_type_template_id_1ce62674_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);