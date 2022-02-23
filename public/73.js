(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PersonalizedNewsIndustry.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/PersonalizedNewsIndustry.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var _components_PersonalizedNewsTabContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PersonalizedNewsTabContent */ "./resources/js/components/PersonalizedNewsTabContent.vue");
/* harmony import */ var _apis_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apis/User */ "./resources/js/apis/User.js");


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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "PersonalizedNewsIndustry",
  data: function data() {
    return {
      isLoading: false,
      tabIndex: 1,
      activeTab: 0,
      allIndustries: [],
      newsType: 'industry'
    };
  },
  methods: {
    loadTabContent: function loadTabContent(name, index) {
      this.activeTab = index;
      this.$refs.industry[index].getPersonalizedNewsData(name);
    },
    getCompanyIndustriesData: function getCompanyIndustriesData() {
      var _this = this;

      _apis_User__WEBPACK_IMPORTED_MODULE_3__["default"].getCompanyIndustry().then(function (response) {
        _this.allIndustries = response.data.data;
        _this.isLoading = false;
      })["catch"](function (error) {
        _this.isLoading = false;

        if (error.response.status == 401) {
          _this.$emit('logout');
        } else {
          toastr.error(error);
        }
      });
    },
    navigateTabScrollOnLeft: function navigateTabScrollOnLeft() {
      var content = document.querySelector(".nav-tabs");
      content.scrollLeft -= 150;
    },
    navigateTabScrollOnRight: function navigateTabScrollOnRight() {
      var content = document.querySelector(".nav-tabs");
      content.scrollLeft += 150;
    }
  },
  created: function () {
    var _created = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.isLoading = true;
              this.getCompanyIndustriesData();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  components: {
    loader: _components_Loader__WEBPACK_IMPORTED_MODULE_1__["default"],
    PersonalizedNewsTabContent: _components_PersonalizedNewsTabContent__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PersonalizedNewsIndustry.vue?vue&type=template&id=29a4a140&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/PersonalizedNewsIndustry.vue?vue&type=template&id=29a4a140&scoped=true& ***!
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
    "section",
    { staticClass: "dashboard pt-0" },
    [
      _c(
        "div",
        { staticClass: "container-fluid px-0 for-profile-banner-padding" },
        [
          _c(
            "div",
            {
              staticClass:
                "row collapse show no-gutters d-flex h-100 position-relative"
            },
            [
              _c("div", { staticClass: "col" }, [
                _c("h4", { staticClass: "mb-3 text-theme-dark-blue" }, [
                  _vm._v("Personalized News - Industry + Location")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "media-categorization-scroll-tab mx-auto" },
                  [
                    _c(
                      "div",
                      { staticClass: "px-4" },
                      [
                        _c("div", { staticClass: "position-relative" }, [
                          _c(
                            "span",
                            {
                              staticClass:
                                "position-absolute tab-navigation-left-icons",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.navigateTabScrollOnLeft.apply(
                                    null,
                                    arguments
                                  )
                                }
                              }
                            },
                            [_c("i", { staticClass: "fas fa-chevron-left" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass:
                                "position-absolute tab-navigation-right-icons",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.navigateTabScrollOnRight.apply(
                                    null,
                                    arguments
                                  )
                                }
                              }
                            },
                            [_c("i", { staticClass: "fas fa-chevron-right" })]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "b-tabs",
                          {
                            staticClass: "personalized-news-customized-tab",
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
                            _vm._l(_vm.allIndustries, function(
                              industry,
                              index
                            ) {
                              return [
                                _c(
                                  "b-tab",
                                  {
                                    attrs: { active: _vm.activeTab === index },
                                    on: {
                                      click: function($event) {
                                        return _vm.loadTabContent(
                                          industry.description,
                                          index
                                        )
                                      }
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "title",
                                          fn: function() {
                                            return [
                                              _vm._v(
                                                "\n                                        " +
                                                  _vm._s(industry.description) +
                                                  "\n                                    "
                                              )
                                            ]
                                          },
                                          proxy: true
                                        }
                                      ],
                                      null,
                                      true
                                    )
                                  },
                                  [
                                    _vm._v(" "),
                                    _c("PersonalizedNewsTabContent", {
                                      ref: "industry",
                                      refInFor: true,
                                      attrs: {
                                        searchDesc: industry.description,
                                        index: index,
                                        newsType: _vm.newsType
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]
                            })
                          ],
                          2
                        )
                      ],
                      1
                    )
                  ]
                )
              ])
            ]
          )
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

/***/ "./resources/js/views/PersonalizedNewsIndustry.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/PersonalizedNewsIndustry.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PersonalizedNewsIndustry_vue_vue_type_template_id_29a4a140_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PersonalizedNewsIndustry.vue?vue&type=template&id=29a4a140&scoped=true& */ "./resources/js/views/PersonalizedNewsIndustry.vue?vue&type=template&id=29a4a140&scoped=true&");
/* harmony import */ var _PersonalizedNewsIndustry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PersonalizedNewsIndustry.vue?vue&type=script&lang=js& */ "./resources/js/views/PersonalizedNewsIndustry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PersonalizedNewsIndustry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PersonalizedNewsIndustry_vue_vue_type_template_id_29a4a140_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PersonalizedNewsIndustry_vue_vue_type_template_id_29a4a140_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "29a4a140",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/PersonalizedNewsIndustry.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/PersonalizedNewsIndustry.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/PersonalizedNewsIndustry.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalizedNewsIndustry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PersonalizedNewsIndustry.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PersonalizedNewsIndustry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalizedNewsIndustry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/PersonalizedNewsIndustry.vue?vue&type=template&id=29a4a140&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/PersonalizedNewsIndustry.vue?vue&type=template&id=29a4a140&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalizedNewsIndustry_vue_vue_type_template_id_29a4a140_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PersonalizedNewsIndustry.vue?vue&type=template&id=29a4a140&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/PersonalizedNewsIndustry.vue?vue&type=template&id=29a4a140&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalizedNewsIndustry_vue_vue_type_template_id_29a4a140_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PersonalizedNewsIndustry_vue_vue_type_template_id_29a4a140_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);