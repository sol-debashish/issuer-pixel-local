(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Press.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Press.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      extendFrom: 'press'
    };
  },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Press.vue?vue&type=template&id=4334f134&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Press.vue?vue&type=template&id=4334f134& ***!
  \***************************************************************************************************************************************************************************************************/
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
    { staticClass: "section-bg" },
    [
      _c("Navigation"),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("Subscribe", { attrs: { extendFrom: _vm.extendFrom } }),
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
    return _c("div", { staticClass: "calculated-content-height" }, [
      _c("section", { staticClass: "mt-5", attrs: { id: "about-us" } }, [
        _c(
          "div",
          { staticClass: "container", attrs: { "data-aos": "fade-down" } },
          [
            _c("div", { staticClass: "row justify-content-md-center" }, [
              _c(
                "div",
                {
                  staticClass: "col-lg-10 text-center",
                  attrs: { "data-aos": "zoom-in", "data-aos-delay": "100" }
                },
                [
                  _c("h2", { staticClass: "mb-3 mb-lg-4 heading-text" }, [
                    _vm._v("Press")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "press-details mb-0" }, [
                    _vm._v("Issuer Pixel’s News and Press Releases")
                  ])
                ]
              )
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "text-center", attrs: { id: "" } }, [
        _c(
          "div",
          {
            staticClass: "container aos-init",
            attrs: { "data-aos": "fade-up" }
          },
          [
            _c("div", { staticClass: "row text-center" }, [
              _c("div", { staticClass: "col-lg mr-lg-4 press-col bg-white" }, [
                _c("div", { staticClass: "p-2" }, [
                  _c("div", { staticClass: "press-img mb-5" }, [
                    _c("img", {
                      staticClass: "img-fluid mx-auto d-block",
                      attrs: { src: "/images/press/intrado.png", alt: "" }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "p",
                    { staticClass: "font-weight-bold press-text-content" },
                    [
                      _vm._v(
                        "Media, Video and Audio Sharing Fintech\n                                Platform, Issuer Pixel\n                                Launches $2.5 Million Crowd Funding Campaign on Netcapital.com"
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "btn btn-theme-dark-blue press-read-full-story px-4 text-center mx-auto",
                      attrs: {
                        href:
                          "https://www.globenewswire.com/news-release/2021/04/21/2214231/0/en/Media-Video-and-Audio-Sharing-Fintech-Platform-Issuer-Pixel-Launches-2-5-Million-Crowd-Funding-Campaign-on-Netcapital-com.html",
                        target: "_blank"
                      }
                    },
                    [_vm._v("Read")]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg mr-lg-4 press-col bg-white" }, [
                _c("div", { staticClass: "p-2" }, [
                  _c("div", { staticClass: "press-img mb-5" }, [
                    _c("img", {
                      staticClass: "img-fluid mx-auto d-block",
                      attrs: { src: "/images/press/investorplace.png", alt: "" }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "p",
                    { staticClass: "font-weight-bold press-text-content" },
                    [
                      _vm._v(
                        "7 Equity Crowdfunding Offerings You\n                                Should Invest In ASAP"
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "btn btn-theme-dark-blue  press-read-full-story px-4 text-center mx-auto",
                      attrs: {
                        href:
                          "https://investorplace.com/2021/04/7-equity-crowdfunding-offerings-you-should-invest-in-asap-2/",
                        target: "_blank"
                      }
                    },
                    [_vm._v("Read")]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg press-col bg-white" }, [
                _c("div", { staticClass: "p-2" }, [
                  _c("div", { staticClass: "press-img mb-5" }, [
                    _c("img", {
                      staticClass: "img-fluid mx-auto d-block",
                      attrs: { src: "/images/press/69news.png", alt: "" }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "p",
                    { staticClass: "font-weight-bold press-text-content" },
                    [
                      _vm._v(
                        "Engineered Tax Services CEO Julio\n                                Gonzalez Joins Issuer Pixel"
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass:
                        "btn btn-theme-dark-blue  press-read-full-story px-4 text-center mx-auto",
                      attrs: {
                        href:
                          "https://www.wfmz.com/news/pr_newswire/pr_newswire_business/engineered-tax-services-ceo-julio-gonzalez-joins-issuer-pixel-a-corporate-video-library-startup-as/article_eb81c070-2755-52f8-93e9-b7c4a25a615b.html",
                        target: "_blank"
                      }
                    },
                    [_vm._v("Read")]
                  )
                ])
              ])
            ])
          ]
        )
      ])
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

/***/ "./resources/js/views/Press.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Press.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Press_vue_vue_type_template_id_4334f134___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Press.vue?vue&type=template&id=4334f134& */ "./resources/js/views/Press.vue?vue&type=template&id=4334f134&");
/* harmony import */ var _Press_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Press.vue?vue&type=script&lang=js& */ "./resources/js/views/Press.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Press_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Press_vue_vue_type_template_id_4334f134___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Press_vue_vue_type_template_id_4334f134___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Press.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Press.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Press.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Press_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Press.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Press.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Press_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Press.vue?vue&type=template&id=4334f134&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Press.vue?vue&type=template&id=4334f134& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Press_vue_vue_type_template_id_4334f134___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Press.vue?vue&type=template&id=4334f134& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Press.vue?vue&type=template&id=4334f134&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Press_vue_vue_type_template_id_4334f134___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Press_vue_vue_type_template_id_4334f134___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);