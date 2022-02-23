(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Subscribe.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Subscribe.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Subscribe",
  props: ["extendFrom"],
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
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
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
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Platform.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Platform.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Navigation.vue */ "./resources/js/components/Navigation.vue");
/* harmony import */ var _components_Subscribe_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Subscribe.vue */ "./resources/js/components/Subscribe.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Platform",
  components: {
    Footer: function Footer() {
      return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../components/Footer */ "./resources/js/components/Footer.vue"));
    },
    Navigation: _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Subscribe: _components_Subscribe_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Subscribe.vue?vue&type=template&id=e9225b22&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Subscribe.vue?vue&type=template&id=e9225b22&scoped=true& ***!
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
    "section",
    { class: this.extendFrom == "Home" ? "section-bg" : "" },
    [
      _c(
        "div",
        {
          class:
            this.extendFrom == "Home"
              ? "subscription-home-bg"
              : "subscription-bg"
        },
        [
          _c("div", { staticClass: "container aos-init" }, [
            _c("div", { staticClass: "px-lg-5 px-4 py-5 text-center" }, [
              _c("div", { staticClass: "row justify-content-center mb-5" }, [
                _c(
                  "div",
                  {
                    class:
                      this.extendFrom == "Home"
                        ? "col-md-6 my-auto font-weight-bold subscription-home-text text-center"
                        : "col-md-6 my-auto font-weight-bold subscribe-box-label text-center"
                  },
                  [
                    _vm._v(
                      "\n                    Receive Issuer Pixel Updates\n                "
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row justify-content-center pb-3" }, [
                _c("div", { staticClass: "col-md-6 subscribe-box-input " }, [
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
                      placeholder: "Insert your email...*",
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
                    ? _c("div", { staticClass: "invalid-feedback text-left" }, [
                        _vm._v("Email is required.")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.$v.email.customEmailValidate
                    ? _c("div", { staticClass: "invalid-feedback text-left" }, [
                        _vm._v(
                          "The email is not\n                        valid.\n                    "
                        )
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "subscribe-box-button" }, [
                  _c(
                    "button",
                    {
                      staticClass: " btn-theme-purple",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.addSubscribe.apply(null, arguments)
                        }
                      }
                    },
                    [_vm._v("Subscribe")]
                  )
                ])
              ])
            ])
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Platform.vue?vue&type=template&id=545dfb12&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Platform.vue?vue&type=template&id=545dfb12& ***!
  \******************************************************************************************************************************************************************************************************/
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
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _vm._m(4),
      _vm._v(" "),
      _c("Subscribe"),
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
    return _c("section", { staticClass: "pb-5 platform-page-top-section" }, [
      _c(
        "div",
        { staticClass: "container mt-5", attrs: { "data-aos": "fade-up" } },
        [
          _c(
            "div",
            {
              staticClass: "col-lg-10 mx-auto text-center",
              attrs: { "data-aos": "zoom-in", "data-aos-delay": "100" }
            },
            [
              _c("div", { staticClass: "heading-text my-3" }, [
                _vm._v("Platform")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "section-description" }, [
                _vm._v(
                  "Powerful Video and Audio Search Engine with Relevant, Congruent and Granular\n                    Results"
                )
              ])
            ]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      { staticClass: "platform-middle-content platfor-second-section-bg pb-5" },
      [
        _c(
          "div",
          {
            staticClass: "container aos-init",
            attrs: { "data-aos": "fade-up" }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass: "col-lg-6 my-auto order-lg-2",
                  attrs: { "data-aos": "fade-in", "data-aos-delay": "100" }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col my-auto platform-img" }, [
                      _c("img", {
                        staticClass: "img img-fluid",
                        attrs: { src: "/images/platform/beFound.png", alt: "" }
                      })
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-lg-6 order-lg-1 short-description",
                  attrs: { "data-aos": "fade-up", "data-aos-delay": "100" }
                },
                [
                  _c("div", { staticClass: "section-theme-sub-title mb-2" }, [
                    _vm._v("Problem for Companies")
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "Companies have difficulty being found by investors, partners, and suitors globally,\n                        including\n                        micro/small/mid cap public, private, venture stage, foreign, and cryptocurrency\n                        issuers."
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "Most companies do not have a structure to organize their external facing video and audio\n                        content, including Fortune 500 companies."
                    )
                  ])
                ]
              )
            ])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "section",
      { staticClass: "platform-middle-content bg-white pb-5" },
      [
        _c(
          "div",
          {
            staticClass: "container aos-init",
            attrs: { "data-aos": "fade-up" }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass: "col-lg-6 my-auto",
                  attrs: { "data-aos": "fade-in", "data-aos-delay": "100" }
                },
                [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col my-auto platform-img" }, [
                      _c("img", {
                        staticClass: "img img-fluid",
                        attrs: { src: "/images/platform/find.png", alt: "" }
                      })
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "col-lg-6 my-auto short-description",
                  attrs: { "data-aos": "fade-up", "data-aos-delay": "100" }
                },
                [
                  _c("div", { staticClass: "section-theme-sub-title my-3" }, [
                    _vm._v("Problem for Investment Community")
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "Investors, partners, and suitors have difficulty identifying issuers globally and finding\n                        relevant video content, including micro/small/mid cap public, private, venture stage,\n                        foreign, and cryptocurrency issuers."
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "Investors do not have a centralized platform or library to efficiently find video content\n                        by company Industry, Sector, Group or at any Product/Service level within an\n                        industry."
                    )
                  ])
                ]
              )
            ])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "platform-middle-content" }, [
      _c(
        "div",
        { staticClass: "container aos-init", attrs: { "data-aos": "fade-up" } },
        [
          _c(
            "div",
            {
              staticClass: "row ",
              attrs: { "data-aos": "zoom-in", "data-aos-delay": "100" }
            },
            [
              _c(
                "div",
                { staticClass: "col-lg-12 col-xl-8 mx-auto text-center" },
                [
                  _c("div", { staticClass: "section-theme-title my-3" }, [
                    _vm._v("Solution")
                  ])
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-12" }, [
                _c(
                  "div",
                  { staticClass: "content tag-title px-lg-4 px-xl-0" },
                  [
                    _c(
                      "p",
                      { staticClass: "section-description text-center" },
                      [
                        _vm._v(
                          "\n                            A global, searchable, company and industry-specific video and audio sharing platform\n                            with relevant and congruent results, connecting companies to the world.\n                        "
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "content text-center mt-5" }, [
                  _c("img", {
                    staticClass: "platform-logo img-fluid img-theme-globe",
                    attrs: {
                      src: "/images/platform/IP_Globe_XL.png",
                      alt: "",
                      width: "250"
                    }
                  })
                ])
              ])
            ]
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", {}, [
      _c(
        "div",
        { staticClass: "container aos-init", attrs: { "data-aos": "fade-up" } },
        [
          _c(
            "div",
            {
              staticClass: "section-theme-title text-center",
              attrs: { "data-aos": "zoom-in", "data-aos-delay": "100" }
            },
            [_vm._v("Platform\n                Benefits\n            ")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              {
                staticClass: "col-lg-12 mx-auto",
                attrs: { "data-aos": "fade-up", "data-aos-delay": "100" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "font-weight-bold my-4 text-theme-purple section-description fs-20"
                  },
                  [_vm._v("For Companies")]
                ),
                _vm._v(" "),
                _c("ul", { staticClass: "theme-u-list" }, [
                  _c("li", { staticClass: "theme-list" }, [
                    _vm._v(
                      "Unique video and audio database creates investment community\n                            visibility for public and\n                            private companies. No other company specific video and audio database is in\n                            existence.\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "theme-list" }, [
                    _vm._v(
                      "Scalable, global, and cost effective exposure for all companies\n                            utilizing video and audio content.\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "theme-list" }, [
                    _vm._v(
                      "Multiple searchable attributes enables investors to easily find\n                            companies, as opposed to other\n                            video/audio platforms that are not issuer specific.\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "theme-list" }, [
                    _vm._v(
                      "Drive investors, partners, and suitors to their business,\n                            website, crowdfunding platform, or\n                            traded security.\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "theme-list" }, [
                    _vm._v(
                      "Communicate with buy side, sell side and strategic partners,\n                            providing companies with\n                            investment sponsorship, fundraising opportunities and economically efficient access\n                            to\n                            investors.\n                        "
                    )
                  ])
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              {
                staticClass: "col-lg-12 mx-auto",
                attrs: { "data-aos": "fade-down", "data-aos-delay": "100" }
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "font-weight-bold my-4  text-theme-purple section-description fs-20"
                  },
                  [
                    _vm._v(
                      "For Investors, Partners,\n                        and Suitors\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("ul", { staticClass: "theme-u-list" }, [
                  _c("li", { staticClass: "theme-list" }, [
                    _vm._v(
                      "Search companies and sectors with congruent and relevant\n                            results.\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "theme-list" }, [
                    _vm._v(
                      "Communicate with company executives giving investors, partners,\n                            suitors, and suppliers on demand access to companies.\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "theme-list" }, [
                    _vm._v(
                      "Identify and conduct diligence on companies based upon video and\n                            audio content types,\n                            qualitative company attributes, and over one million industry criteria.\n                        "
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "theme-list" }, [
                    _vm._v(
                      "Get extremely accurate peer group analysis and relative valuation\n                            comparisons based upon\n                            our proprietary taxonomy.\n                        "
                    )
                  ])
                ])
              ]
            )
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Subscribe.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/Subscribe.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Subscribe_vue_vue_type_template_id_e9225b22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscribe.vue?vue&type=template&id=e9225b22&scoped=true& */ "./resources/js/components/Subscribe.vue?vue&type=template&id=e9225b22&scoped=true&");
/* harmony import */ var _Subscribe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscribe.vue?vue&type=script&lang=js& */ "./resources/js/components/Subscribe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Subscribe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Subscribe_vue_vue_type_template_id_e9225b22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Subscribe_vue_vue_type_template_id_e9225b22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e9225b22",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Subscribe.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Subscribe.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/Subscribe.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscribe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Subscribe.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Subscribe.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscribe_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Subscribe.vue?vue&type=template&id=e9225b22&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Subscribe.vue?vue&type=template&id=e9225b22&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscribe_vue_vue_type_template_id_e9225b22_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Subscribe.vue?vue&type=template&id=e9225b22&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Subscribe.vue?vue&type=template&id=e9225b22&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscribe_vue_vue_type_template_id_e9225b22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Subscribe_vue_vue_type_template_id_e9225b22_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Platform.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Platform.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Platform_vue_vue_type_template_id_545dfb12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Platform.vue?vue&type=template&id=545dfb12& */ "./resources/js/views/Platform.vue?vue&type=template&id=545dfb12&");
/* harmony import */ var _Platform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Platform.vue?vue&type=script&lang=js& */ "./resources/js/views/Platform.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Platform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Platform_vue_vue_type_template_id_545dfb12___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Platform_vue_vue_type_template_id_545dfb12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Platform.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Platform.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Platform.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Platform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Platform.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Platform.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Platform_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Platform.vue?vue&type=template&id=545dfb12&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Platform.vue?vue&type=template&id=545dfb12& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Platform_vue_vue_type_template_id_545dfb12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Platform.vue?vue&type=template&id=545dfb12& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Platform.vue?vue&type=template&id=545dfb12&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Platform_vue_vue_type_template_id_545dfb12___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Platform_vue_vue_type_template_id_545dfb12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);