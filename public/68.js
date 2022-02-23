(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/BetaProgram.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/BetaProgram.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Navigation.vue */ "./resources/js/components/Navigation.vue");
/* harmony import */ var _components_Patent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Patent.vue */ "./resources/js/components/Patent.vue");
/* harmony import */ var _components_ContactForm_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ContactForm.vue */ "./resources/js/components/ContactForm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // import User from "../apis/User";
// import {required, email, minLength, between, sameAs} from 'vuelidate/lib/validators'



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "BetaProgram",
  data: function data() {
    return {
      extendFrom: 'Beta'
    };
  },
  components: {
    Footer: function Footer() {
      return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../components/Footer */ "./resources/js/components/Footer.vue"));
    },
    loader: function loader() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/Loader */ "./resources/js/components/Loader.vue"));
    },
    Navigation: _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Patent: _components_Patent_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ContactForm: _components_ContactForm_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/BetaProgram.vue?vue&type=template&id=85ee4fb6&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/BetaProgram.vue?vue&type=template&id=85ee4fb6& ***!
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
  return _c(
    "section",
    {},
    [
      _c("Navigation"),
      _vm._v(" "),
      _c("div", { staticClass: "container mt-5 aos-init" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "col-12 mx-auto mt-5 ",
            attrs: { "data-aos": "zoom-in", "data-aos-delay": "100" }
          },
          [_vm._m(1), _vm._v(" "), _c("Contact-form")],
          1
        )
      ]),
      _vm._v(" "),
      _c("Patent", { attrs: { extendFrom: _vm.extendFrom } }),
      _vm._v(" "),
      _c("Footer")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-lg-12 mx-auto " }, [
      _c(
        "div",
        {
          staticClass: "heading-text my-3 text-center",
          attrs: { "data-aos": "zoom-in", "data-aos-delay": "100" }
        },
        [_vm._v("Mission")]
      ),
      _vm._v(" "),
      _c(
        "p",
        {
          staticClass: "section-description beta-description",
          attrs: { "data-aos": "fade-up", "data-aos-delay": "100" }
        },
        [
          _vm._v(
            "Enable every company in the world to be found and communicate utilizing the\n                power of video and audio for global exposure. To democratize the ability of companies, venture\n                stage, small cap and micro-cap, foreign private issuers, companies of any size, at any stage, in any\n                country, to gain awareness, establish sponsorship, forge partnerships, create supply chain\n                relationships and access capital. We are harvesting unstructured data and harnessing the power of\n                relevance and congruity to find or be found."
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "section-theme-sub-title mb-3 mt-5 text-center",
          attrs: { "data-aos": "zoom-in", "data-aos-delay": "100" }
        },
        [_vm._v("Beta Program for Companies")]
      ),
      _vm._v(" "),
      _c(
        "p",
        {
          staticClass: "section-description beta-description",
          attrs: { "data-aos": "fade-up", "data-aos-delay": "100" }
        },
        [
          _vm._v(
            "An exclusive invitation for an initial 50 companies to upload their company\n                videos and audio to our website. The process is simple and quick: complete the company profile\n                questionnaire and upload your videos and audio files. The benefits of participation to your\n                organization include being one of the first companies on our platform, to gain awareness for\n                sponsorship, partnerships, supply chain relationships and capital. Beta company participants will be\n                featured on our site when we open up our platform to our user base community in a few months. We\n                look forward to your participation and feedback. Issuer Pixel Beta Program is free to use at this time."
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content text-left tag-title mb-4" }, [
      _c("p", { staticClass: "section-theme-sub-title text-center" }, [
        _vm._v("\n                    Learn More\n                ")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/BetaProgram.vue":
/*!********************************************!*\
  !*** ./resources/js/views/BetaProgram.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BetaProgram_vue_vue_type_template_id_85ee4fb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BetaProgram.vue?vue&type=template&id=85ee4fb6& */ "./resources/js/views/BetaProgram.vue?vue&type=template&id=85ee4fb6&");
/* harmony import */ var _BetaProgram_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BetaProgram.vue?vue&type=script&lang=js& */ "./resources/js/views/BetaProgram.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BetaProgram_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BetaProgram_vue_vue_type_template_id_85ee4fb6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BetaProgram_vue_vue_type_template_id_85ee4fb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/BetaProgram.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/BetaProgram.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/BetaProgram.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BetaProgram_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./BetaProgram.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/BetaProgram.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BetaProgram_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/BetaProgram.vue?vue&type=template&id=85ee4fb6&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/BetaProgram.vue?vue&type=template&id=85ee4fb6& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BetaProgram_vue_vue_type_template_id_85ee4fb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./BetaProgram.vue?vue&type=template&id=85ee4fb6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/BetaProgram.vue?vue&type=template&id=85ee4fb6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BetaProgram_vue_vue_type_template_id_85ee4fb6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BetaProgram_vue_vue_type_template_id_85ee4fb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);