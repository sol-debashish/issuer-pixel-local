(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProfileCompleteBanner.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProfileCompleteBanner.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var _apis_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apis/User */ "./resources/js/apis/User.js");
/* harmony import */ var _apis_Common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apis/Common */ "./resources/js/apis/Common.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      visible: false,
      progressPercentage: 0,
      generalProgress: 0,
      contactProgress: 0,
      structureProgress: 0,
      valuationProgress: 0,
      socialProgress: 0,
      taxonomyProgress: 0,
      showComponent: false
    };
  },
  props: ["changedPercentage"],
  watch: {
    changedPercentage: function changedPercentage(newVal, oldVal) {
      // watch it
      //console.log('Prop changed: ', newVal, ' | was: ', oldVal)
      this.generalProgress = newVal.general_info;
      this.contactProgress = newVal.contact;
      this.structureProgress = newVal.structure;
      this.valuationProgress = newVal.valuation;
      this.socialProgress = newVal.social_presence;
      this.taxonomyProgress = newVal.hierarchy;
      this.progressPercentage = parseInt(this.generalProgress) + parseInt(this.contactProgress) + parseInt(this.structureProgress) + parseInt(this.valuationProgress) + parseInt(this.socialProgress) + parseInt(this.taxonomyProgress);

      if (this.progressPercentage != 100) {
        localStorage.removeItem("profileCompleted");
        this.showComponent = true;
        /*Add extra padding in a below section class of profile complete banner*/

        $('.for-profile-banner-padding').css('paddingTop', '107px');
      } else {
        this.showComponent = false;
        /*Remove extra padding in a below section class of profile complete banner*/

        $('.for-profile-banner-padding').css('paddingTop', '0px');
      }
    }
  },
  methods: {
    toggle: function toggle() {
      this.visible = !this.visible;
    },
    close: function close(e) {
      //if (!this.$el.contains(e.target)) {
      if (e.target.id !== 'ipp_100') {
        this.visible = false;
      }
    },
    updateViewKey: function updateViewKey() {
      this.$emit("updateViewKey");
    },
    getCompanyInfo: function getCompanyInfo() {
      var _this = this;

      _apis_User__WEBPACK_IMPORTED_MODULE_1__["default"].getCompanyInfo().then(function (response) {
        var companyInfo = response.data.data;
        _this.generalProgress = companyInfo.general_info;
        _this.contactProgress = companyInfo.contact;
        _this.structureProgress = companyInfo.structure;
        _this.valuationProgress = companyInfo.valuation;
        _this.socialProgress = companyInfo.social_presence;
        _this.taxonomyProgress = companyInfo.hierarchy;
        _this.progressPercentage = parseInt(_this.generalProgress) + parseInt(_this.contactProgress) + parseInt(_this.structureProgress) + parseInt(_this.valuationProgress) + parseInt(_this.socialProgress) + parseInt(_this.taxonomyProgress);

        if (_this.progressPercentage < 100) {
          _this.showComponent = true;
          /*Add extra padding in a below section class of profile complete banner*/

          $('.for-profile-banner-padding').css('paddingTop', '107px');
        }

        if (_this.progressPercentage == 100) {
          localStorage.setItem("profileCompleted", "true");
        } else {
          localStorage.removeItem("profileCompleted");
        }

        _this.isLoading = false;
      })["catch"](function (error) {
        _this.isLoading = false;

        if (error.response.status == 401) {
          _this.$emit("logout");
        }
      });
    },
    getPercentageColorClass: function getPercentageColorClass() {
      if (this.progressPercentage <= 32) {
        return 'red-color';
      } else if (this.progressPercentage > 32 && this.progressPercentage <= 49) {
        return 'orange-color';
      } else if (this.progressPercentage > 49 && this.progressPercentage <= 66) {
        return 'yellow-color';
      } else if (this.progressPercentage > 66 && this.progressPercentage <= 82) {
        return 'light-pink-color';
      } else if (this.progressPercentage > 82 && this.progressPercentage <= 99) {
        return 'light-purple-color';
      } else if (this.progressPercentage == 100) {
        return 'purple-color';
      }

      return '';
    }
  },
  mounted: function mounted() {
    this.stepsPercentage = _apis_Common__WEBPACK_IMPORTED_MODULE_2__["default"].calculateProfileStepsPercentage;

    if (!localStorage.getItem("profileCompleted")) {
      this.isLoading = true;
      this.getCompanyInfo();
    }
  },
  created: function created() {
    window.addEventListener("click", this.close);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener("click", this.close);
  },
  components: {
    loader: _components_Loader__WEBPACK_IMPORTED_MODULE_0__["default"],
    Common: _apis_Common__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProfileCompleteBanner.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProfileCompleteBanner.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.red-color .progress-bar {\n    background: #FF0000 !important;\n}\n.orange-color .progress-bar {\n    background: #FFA500 !important;\n}\n.yellow-color .progress-bar {\n    background: #FFFF00 !important;\n}\n.light-pink-color .progress-bar {\n    background: #ffb6c1 !important;\n}\n.light-purple-color .progress-bar {\n    background: #b199df !important;\n}\n.purple-color .progress-bar {\n    background: #7E097C !important;\n}\n.banner-fade-enter-active, .banner-fade-leave-active {\n    transition: opacity .5s;\n}\n.banner-fade-enter, .banner-fade-leave-to /* .fade-leave-active below version 2.1.8 */\n{\n    opacity: 0;\n}\n#profile-complete-banner {\n    width: 100%;\n    padding-left: 5%;\n    padding-right: 5%;\n    border-bottom: 1px solid #b0b0b0;\n    position: fixed;\n    background: #fff;\n    z-index: 9;\n    top: 69px;\n}\n#profile-complete-banner .banner-box {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    position: relative;\n    overflow: hidden;\n    background: #fff;\n    /*box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);*/\n    z-index: 1;\n    width: 100%;\n}\n#profile-complete-banner .banner-box .title {\n    font-weight: 700;\n    margin-bottom: 15px;\n    font-size: 18px;\n}\n#profile-complete-banner .banner-box .title a {\n    color: #124265;\n    transition: 0.3s;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProfileCompleteBanner.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProfileCompleteBanner.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileCompleteBanner.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProfileCompleteBanner.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProfileCompleteBanner.vue?vue&type=template&id=16c2ef73&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProfileCompleteBanner.vue?vue&type=template&id=16c2ef73& ***!
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
  return _vm.progressPercentage != 100
    ? _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.showComponent,
              expression: "showComponent"
            }
          ],
          staticClass: "profile-complete-banner row mx-auto",
          attrs: { id: "profile-complete-banner" }
        },
        [
          _c(
            "div",
            { staticClass: "banner-box" },
            [
              _c(
                "div",
                { staticClass: "mb-1" },
                [
                  _c(
                    "div",
                    { staticClass: "title-bar clearfix" },
                    [
                      _c(
                        "p",
                        { staticClass: "float-left progress-title mb-0" },
                        [
                          _vm._v(
                            "\n                    Your profile is " +
                              _vm._s(_vm.progressPercentage) +
                              "% Completed\n                    "
                          ),
                          _c(
                            "router-link",
                            {
                              staticClass:
                                "btn btn-sm btn-primary text-center ml-3",
                              attrs: {
                                to: {
                                  name: "CompanyQuestionnairesDetails",
                                  hash: "#profile"
                                }
                              },
                              nativeOn: {
                                click: function($event) {
                                  return _vm.updateViewKey.apply(
                                    null,
                                    arguments
                                  )
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                        Complete your Profile\n                    "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.visible
                        ? [
                            _c(
                              "button",
                              {
                                staticClass: "close",
                                attrs: {
                                  type: "button",
                                  "aria-label": "Close"
                                },
                                on: {
                                  click: function($event) {
                                    _vm.visible = false
                                  }
                                }
                              },
                              [
                                _c(
                                  "span",
                                  { attrs: { "aria-hidden": "true" } },
                                  [_vm._v("×")]
                                )
                              ]
                            )
                          ]
                        : _vm._e()
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      attrs: { href: "javascript:;;", id: "ipp_100" },
                      on: {
                        click: function($event) {
                          _vm.visible = !_vm.visible
                        }
                      }
                    },
                    [_vm._v("What's this?")]
                  ),
                  _vm._v(" "),
                  _c("b-progress", {
                    class: _vm.getPercentageColorClass(),
                    attrs: { value: _vm.progressPercentage, max: 100 }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("transition", { attrs: { name: "banner-fade" } }, [
                _vm.visible
                  ? _c("div", [
                      _c(
                        "div",
                        {
                          staticClass: "row mt-3",
                          attrs: { id: "progress-percentage-container" }
                        },
                        [
                          _c(
                            "ul",
                            {
                              staticClass:
                                "col-10 text-left percentage-text list-unstyled"
                            },
                            [
                              _c(
                                "li",
                                { staticClass: "mb-1" },
                                [
                                  _vm._v("1.\n                            "),
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "CompanyQuestionnairesDetails",
                                          hash: "#profile"
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "General\n                            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "mb-1" },
                                [
                                  _vm._v("2.\n                            "),
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "CompanyQuestionnairesDetails",
                                          hash: "#executives"
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "Company\n                                Contacts\n                            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "mb-1" },
                                [
                                  _vm._v("3.\n                            "),
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "CompanyQuestionnairesDetails",
                                          hash: "#companyType"
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Company Structure\n                            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "mb-1" },
                                [
                                  _vm._v("4.\n                            "),
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "CompanyQuestionnairesDetails",
                                          hash: "#finance"
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "Valuation\n                                & IP\n                            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "mb-1" },
                                [
                                  _vm._v("5.\n                            "),
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "CompanyQuestionnairesDetails",
                                          hash: "#social"
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "Social\n                                Presence\n                            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "mb-1" },
                                [
                                  _vm._v("6.\n                            "),
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "CompanyQuestionnairesDetails",
                                          hash: "#taxonomy"
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                Classification\n                            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "ul",
                            {
                              staticClass:
                                "col-2 text-right percentage-text list-unstyled"
                            },
                            [
                              _c("li", { staticClass: "mb-1" }, [
                                _vm._v(
                                  _vm._s(
                                    this.stepsPercentage(
                                      15,
                                      _vm.generalProgress
                                    )
                                  ) + "%"
                                )
                              ]),
                              _vm._v(" "),
                              _c("li", { staticClass: "mb-1" }, [
                                _vm._v(
                                  _vm._s(
                                    this.stepsPercentage(
                                      15,
                                      _vm.contactProgress
                                    )
                                  ) + "%"
                                )
                              ]),
                              _vm._v(" "),
                              _c("li", { staticClass: "mb-1" }, [
                                _vm._v(
                                  _vm._s(
                                    this.stepsPercentage(
                                      15,
                                      _vm.structureProgress
                                    )
                                  ) + "%"
                                )
                              ]),
                              _vm._v(" "),
                              _c("li", { staticClass: "mb-1" }, [
                                _vm._v(
                                  _vm._s(
                                    this.stepsPercentage(
                                      15,
                                      _vm.valuationProgress
                                    )
                                  ) + "%"
                                )
                              ]),
                              _vm._v(" "),
                              _c("li", { staticClass: "mb-1" }, [
                                _vm._v(
                                  _vm._s(
                                    this.stepsPercentage(15, _vm.socialProgress)
                                  ) + "%"
                                )
                              ]),
                              _vm._v(" "),
                              _c("li", { staticClass: "mb-1" }, [
                                _vm._v(
                                  _vm._s(
                                    this.stepsPercentage(
                                      25,
                                      _vm.taxonomyProgress
                                    )
                                  ) + "%"
                                )
                              ])
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row" },
                        [
                          _c("div", { staticClass: "col-12" }, [
                            _c("h5", [_vm._v("Why Complete your Profile?")])
                          ]),
                          _vm._v(" "),
                          _c("transition", { attrs: { name: "banner-fade" } }, [
                            _c("div", { staticClass: "col-12 mt-2" }, [
                              _c("p", [
                                _c("strong", [_vm._v("Because it helps you.")]),
                                _vm._v(
                                  " The more information you add about your\n                                company and your\n                                content the easier it is for users to find you and understand what your business has\n                                to offer.\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                                Companies and investors will be able to search and filter by the characteristics\n                                contained in your profile. With a detailed profile you can market your company\n                                effectively and expose your business to the most opportunities.\n                            "
                                )
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-12" },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass: "btn btn-primary float-right",
                                  staticStyle: { color: "#ffffff" },
                                  attrs: {
                                    to: {
                                      name: "CompanyQuestionnairesDetails",
                                      hash: "#profile"
                                    }
                                  },
                                  nativeOn: {
                                    click: function($event) {
                                      return _vm.updateViewKey.apply(
                                        null,
                                        arguments
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                            Go to Profile\n                        "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ])
                  : _vm._e()
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("loader", { attrs: { "is-visible": _vm.isLoading } })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ProfileCompleteBanner.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/ProfileCompleteBanner.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileCompleteBanner_vue_vue_type_template_id_16c2ef73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileCompleteBanner.vue?vue&type=template&id=16c2ef73& */ "./resources/js/components/ProfileCompleteBanner.vue?vue&type=template&id=16c2ef73&");
/* harmony import */ var _ProfileCompleteBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileCompleteBanner.vue?vue&type=script&lang=js& */ "./resources/js/components/ProfileCompleteBanner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProfileCompleteBanner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileCompleteBanner.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/ProfileCompleteBanner.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProfileCompleteBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileCompleteBanner_vue_vue_type_template_id_16c2ef73___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileCompleteBanner_vue_vue_type_template_id_16c2ef73___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ProfileCompleteBanner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ProfileCompleteBanner.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/ProfileCompleteBanner.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCompleteBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileCompleteBanner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProfileCompleteBanner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCompleteBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ProfileCompleteBanner.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/ProfileCompleteBanner.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCompleteBanner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileCompleteBanner.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProfileCompleteBanner.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCompleteBanner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCompleteBanner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCompleteBanner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCompleteBanner_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/ProfileCompleteBanner.vue?vue&type=template&id=16c2ef73&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/ProfileCompleteBanner.vue?vue&type=template&id=16c2ef73& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCompleteBanner_vue_vue_type_template_id_16c2ef73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileCompleteBanner.vue?vue&type=template&id=16c2ef73& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProfileCompleteBanner.vue?vue&type=template&id=16c2ef73&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCompleteBanner_vue_vue_type_template_id_16c2ef73___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCompleteBanner_vue_vue_type_template_id_16c2ef73___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);