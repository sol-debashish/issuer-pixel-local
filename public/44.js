(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AboutUs.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AboutUs.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Navigation.vue */ "./resources/js/components/Navigation.vue");
/* harmony import */ var _components_Subscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Subscribe */ "./resources/js/components/Subscribe.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      readMore1: false,
      readMore2: false
    };
  },
  components: {
    Footer: function Footer() {
      return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../components/Footer */ "./resources/js/components/Footer.vue"));
    },
    Navigation: _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Subscribe: _components_Subscribe__WEBPACK_IMPORTED_MODULE_1__["default"]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AboutUs.vue?vue&type=template&id=5d5795bc&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AboutUs.vue?vue&type=template&id=5d5795bc& ***!
  \*****************************************************************************************************************************************************************************************************/
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
      _c("section", { attrs: { id: "advisers" } }, [
        _c(
          "div",
          {
            staticClass: "container aos-init",
            attrs: { "data-aos": "fade-up" }
          },
          [
            _c(
              "h2",
              { staticClass: "mx-auto text-center mb-4 mb-lg-5 heading-text" },
              [_vm._v("Advisors and Key Investors")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "row mt-3 responsive-reverse" }, [
              _c(
                "div",
                {
                  staticClass: "col-md-7 col-sm-12 mb-3",
                  attrs: { "data-aos": "zoom-in", "data-aos-delay": "100" }
                },
                [
                  _c("div", { staticClass: "small-theme-text text-justify" }, [
                    _c("p", [
                      _vm._v(
                        "Mr. Julio Gonzalez, National Tax Reform Expert, is the Founder and CEO of Engineered Tax\n                            Services, Inc. (ETS)."
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Named one of the Top 100 most influential people in Accounting by AccountingToday, Mr.\n                            Gonzalez acquired The Growth Partnership, The Rosenberg Survey and ABLE CRM in 2020 to\n                            establish the largest specialty tax and consultative firm to the CPA community\n                            nationwide."
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !_vm.readMore1,
                            expression: "!readMore1"
                          }
                        ]
                      },
                      [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm read-more-button",
                            on: {
                              click: function($event) {
                                _vm.readMore1 = true
                              }
                            }
                          },
                          [
                            _c("i", {
                              staticClass: "fas fa-chevron-down pr-2"
                            }),
                            _vm._v("Read More")
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.readMore1,
                            expression: "readMore1"
                          }
                        ]
                      },
                      [
                        _c("p", [
                          _vm._v(
                            "In 2021, Mr. Gonzalez founded Rockerbox to bring the accounting industry best in class\n                                resources in employment retention credits and work opportunity training credits."
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "Mr. Gonzalez is truly the Nation’s forefather of specialty tax services and he and his\n                                company have most recently been recognized for their assistance in preserving jobs in\n                                the United States. Mr. Gonzalez’ focus was to bring specialized engineering tax studies\n                                to mainstream America, which historically had only been available to Fortune 500 and\n                                public companies through the National Accounting Firms. These tax services are critical\n                                to creating, preserving and maintaining U.S. based jobs. Mr. Gonzalez is truly the\n                                Nation’s forefather of specialty tax services and he and his company have most recently\n                                been recognized for their assistance in preserving job in the United States, as\n                                follows:"
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "Mr. Julio Gonzalez, National Tax Reform Expert, founded Engineered Tax Services, Inc.,\n                                (ETS) to marry the science of engineering with the principles of tax and accounting. Mr.\n                                Gonzalez wanted to bring specialty tax services to mainstream America that were\n                                previously only available to public companies through the Big 4 accounting firms."
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "Julio also started the Gonzalez Family Office to invest in the United States\n                                Infrastructure while providing a platform for his charities."
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "Today, Mr. Gonzalez and ETS are the country’s largest licensed engineering tax resource\n                                to 1000s of CPA firms nationally. These tax services are critical to creating,\n                                preserving and maintaining U.S. based jobs."
                          )
                        ]),
                        _vm._v(" "),
                        _vm._m(2),
                        _vm._v(" "),
                        _vm._m(3),
                        _vm._v(" "),
                        _c("span", {
                          staticClass:
                            "hr-before-advisors-testimonial pb-2 mx-4 d-block"
                        }),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "\n                                “Issuer Pixel has developed a disruptive video and audio sharing platform for companies\n                                that solves many problems that currently exist on popular video sharing platforms. The\n                                Company’s powerful video and audio search engine provides the granularity, relevance and\n                                congruity of results to enable companies and their associated videos and audio on the\n                                Issuer Pixel platform to both be found, that otherwise would remain in obscurity and\n                                provide these companies with enduring visibility. Engineered Tax Services looks forward\n                                to utilizing the Issuer Pixel platform as our external facing corporate video library.”\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-sm read-more-button",
                            on: {
                              click: function($event) {
                                _vm.readMore1 = false
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fas fa-chevron-up pr-2" }),
                            _vm._v("Read Less")
                          ]
                        )
                      ]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _vm._m(4)
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "row mt-6 div-margin-bottom-responsive" },
              [
                _vm._m(5),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-md-7 col-sm-12 pl-lg-4",
                    attrs: { "data-aos": "zoom-in", "data-aos-delay": "100" }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "small-theme-text text-justify" },
                      [
                        _c("p", [
                          _vm._v(
                            "David has 30+ years’ experience as a private investor, entrepreneur and investor\n                            relations consultant, successfully guiding and executing investor relations, corporate\n                            communications and social media programs for a diverse array of companies."
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: !_vm.readMore2,
                                expression: "!readMore2"
                              }
                            ]
                          },
                          [
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-sm read-more-button",
                                on: {
                                  click: function($event) {
                                    _vm.readMore2 = true
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "fas fa-chevron-down pr-2"
                                }),
                                _vm._v("Read More")
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.readMore2,
                                expression: "readMore2"
                              }
                            ]
                          },
                          [
                            _c("p", [
                              _vm._v(
                                "Results include successful crisis management, new research coverage and institutional\n                                investment, thousands of investor introductions via non-deal marketing and sell-side\n                                conferences, substantial valuation increases and many favorable exits. Most notably,\n                                David represented Marvel Entertainment for ten years, from its emergence from bankruptcy\n                                through to its sale to Disney."
                              )
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "David is an active investor and entrepreneur, a brutally candid counselor, IR innovator\n                                and an impassioned speaker/writer on IR and financial communications issues. He earned\n                                his bachelor’s degree from Georgetown University, served for three years on the NIRI NY\n                                Chapter board."
                              )
                            ]),
                            _vm._v(" "),
                            _c("span", {
                              staticClass:
                                "hr-before-advisors-testimonial pb-2 mx-4 d-block"
                            }),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                '\n                                "Issuer Pixel is an exciting, powerful tool that aides the research and discovery of\n                                businesses, solutions, technologies and other differentiating factors. It brings order,\n                                specificity and precision to the otherwise unsearchable universe of video and rich media\n                                assets that it unites in one convenient place. Given the huge investment made in video\n                                and other media, the question for me isn’t ‘Why Issuer Pixel?’ The question is ‘What\n                                took so long for a solution to emerge?!”\n                            '
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-sm read-more-button",
                                on: {
                                  click: function($event) {
                                    _vm.readMore2 = false
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "fas fa-chevron-up pr-2"
                                }),
                                _vm._v("Read Less")
                              ]
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _vm._m(6)
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", {}, [_c("Subscribe")], 1),
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
    return _c("section", { staticClass: "mt-5", attrs: { id: "about-us" } }, [
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
                  _vm._v("About Us")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "about-us-content" }, [
                  _vm._v(
                    "The World’s First Hierarchically Indexed and\n                        Cross-Indexed Issuer\n                        Video and Audio"
                  ),
                  _c("span", { staticClass: "d-lg-block" }),
                  _vm._v(
                    "\n                        Database, Searchable by Industry, Sector, Group, Product, Service and Company."
                  )
                ])
              ]
            )
          ])
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
      {
        staticClass: "team-section-bg mt-3 text-center",
        attrs: { id: "team" }
      },
      [
        _c(
          "div",
          {
            staticClass: "container pb-5 aos-init",
            attrs: { "data-aos": "fade-up" }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-10 mx-auto" }, [
                _c("h2", { staticClass: "mb-4 mb-lg-5" }, [
                  _vm._v("Meet the Team")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row justify-content-md-center" }, [
                  _c("div", { staticClass: "col-xl-3 col-lg-3 col-md-6" }, [
                    _c(
                      "div",
                      {
                        staticClass: "member aos-init text-center",
                        attrs: {
                          "data-aos": "zoom-in",
                          "data-aos-delay": "100"
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "img-fluid img-team-member",
                          attrs: { src: "images/team/David_Baker.png", alt: "" }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "member-info" }, [
                          _c("div", { staticClass: "member-info-content" }, [
                            _c("p", { staticClass: "name" }, [
                              _vm._v("David N. Baker")
                            ]),
                            _vm._v(" "),
                            _c("p", { staticClass: "designation" }, [
                              _vm._v("CEO")
                            ])
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-xl-3 col-lg-3 col-md-6",
                      attrs: { "data-wow-delay": "0.1s" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "member aos-init text-center",
                          attrs: {
                            "data-aos": "zoom-in",
                            "data-aos-delay": "200"
                          }
                        },
                        [
                          _c("img", {
                            staticClass: "img-fluid img-team-member",
                            attrs: {
                              src: "images/team/Vadim_Tarasov.png",
                              alt: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "member-info" }, [
                            _c("div", { staticClass: "member-info-content" }, [
                              _c("p", { staticClass: "name" }, [
                                _vm._v("Vadim Tarasov")
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "designation" }, [
                                _vm._v("CIO")
                              ])
                            ])
                          ])
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "col-xl-3 col-lg-3 col-md-6",
                      attrs: { "data-wow-delay": "0.2s" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "member aos-init text-center",
                          attrs: {
                            "data-aos": "zoom-in",
                            "data-aos-delay": "300"
                          }
                        },
                        [
                          _c("img", {
                            staticClass: "img-fluid img-team-member",
                            attrs: {
                              src: "images/team/Byron_Kwok.png",
                              alt: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "member-info" }, [
                            _c("div", { staticClass: "member-info-content" }, [
                              _c("p", { staticClass: "name" }, [
                                _vm._v("Byron Kwok")
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "designation" }, [
                                _vm._v("CTO")
                              ])
                            ])
                          ])
                        ]
                      )
                    ]
                  )
                ])
              ])
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
    return _c("p", [
      _vm._v("\n                                - Core ETS Services"),
      _c("br"),
      _vm._v("\n                                - Cost segregation studies"),
      _c("br"),
      _vm._v(
        "\n                                - Research and development tax services"
      ),
      _c("br"),
      _vm._v("\n                                - Energy tax services"),
      _c("br"),
      _vm._v("\n                                - Historic tax services"),
      _c("br"),
      _vm._v(
        "\n                                - Employment retention credits"
      ),
      _c("br"),
      _vm._v("\n                                - WOTC"),
      _c("br"),
      _vm._v(
        "\n                                - Other related engineering-based tax services\n                            "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("\n                                Awards & Accolades"),
      _c("br"),
      _vm._v(
        "\n                                - Named 100 Most Influential Person in Accounting Today"
      ),
      _c("br"),
      _vm._v(
        "\n                                - 30 Best CEOs of the Year by The Silicon Review"
      ),
      _c("br"),
      _vm._v("\n                                - CEO Today Hall of Fame"),
      _c("br"),
      _vm._v(
        "\n                                - Best Specialty Tax Practice, Year 2019 by Acquisition International\n                            "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-md-5 col-sm-12 advisors-profile-area-1",
        attrs: { "data-aos": "zoom-in", "data-aos-delay": "100" }
      },
      [
        _c("div", { staticClass: "advisors-designation-1" }, [
          _c("p", { staticClass: "font-weight-bold mb-0 advisor-name-text" }, [
            _vm._v("Julio Gonzalez")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "fs-12" }, [
            _vm._v("\n                            FOUNDER & CEO"),
            _c("br"),
            _vm._v(
              "\n                            Engineered Tax Services, Inc. (ETS)"
            ),
            _c("br"),
            _vm._v(
              "\n                            Advisor\n                        "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "adviser-pic-div-1" }, [
          _c("img", {
            staticClass: "advisers-img-1 mb-3",
            attrs: {
              src: "images/advisers/Julio_Gonzalez.png",
              width: "320",
              alt: ""
            }
          })
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-md-5 col-sm-12 advisors-profile-area-2",
        attrs: { "data-aos": "zoom-in", "data-aos-delay": "100" }
      },
      [
        _c("div", { staticClass: "adviser-pic-div-2" }, [
          _c("img", {
            staticClass: "advisers-img-2 mb-3",
            attrs: { src: "images/advisers/David_Collins.png", alt: "" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "advisors-designation-2" }, [
          _c("p", { staticClass: "font-weight-bold mb-0 advisor-name-text" }, [
            _vm._v("David C. Collins")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "fs-12" }, [
            _vm._v("\n                            Managing Director"),
            _c("br"),
            _vm._v("\n                            Catalyst IR"),
            _c("br"),
            _vm._v(
              "\n                            Advisor\n                        "
            )
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row mt-6 responsive-reverse" }, [
      _c(
        "div",
        {
          staticClass: "col-md-7 col-sm-12",
          attrs: { "data-aos": "zoom-in", "data-aos-delay": "100" }
        },
        [
          _c("div", { staticClass: "small-theme-text text-justify" }, [
            _c("p", [
              _vm._v(
                "\n                            “Issuer Pixel is the perfect solution amidst the growing\n                            trend of companies looking to provide video based\n                            content in order to connect and provide information\n                            to their investors, partners, and customers. There is\n                            tremendous value in having content organized in a\n                            logical methodology for users, thereby allowing it to\n                            reach the target audience.”\n                        "
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "col-md-5 col-sm-12 advisors-profile-area-1",
          attrs: { "data-aos": "zoom-in", "data-aos-delay": "100" }
        },
        [
          _c("div", { staticClass: "advisors-designation-1" }, [
            _c(
              "p",
              { staticClass: "font-weight-bold mb-0 advisor-name-text" },
              [_vm._v("Steve Shum")]
            ),
            _vm._v(" "),
            _c("p", { staticClass: "fs-12" }, [
              _vm._v(
                "\n                            CEO, INVO Bioscience, Inc."
              ),
              _c("br"),
              _vm._v("\n                            (NASDAQ: INVO)"),
              _c("br"),
              _vm._v(
                "\n                            Investor\n                        "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "adviser-pic-div-1" }, [
            _c("img", {
              staticClass: "advisers-img-1 mb-3",
              attrs: { src: "images/advisers/Steve_Shum.png", alt: "" }
            })
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

/***/ "./resources/js/views/AboutUs.vue":
/*!****************************************!*\
  !*** ./resources/js/views/AboutUs.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AboutUs_vue_vue_type_template_id_5d5795bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AboutUs.vue?vue&type=template&id=5d5795bc& */ "./resources/js/views/AboutUs.vue?vue&type=template&id=5d5795bc&");
/* harmony import */ var _AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AboutUs.vue?vue&type=script&lang=js& */ "./resources/js/views/AboutUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AboutUs_vue_vue_type_template_id_5d5795bc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AboutUs_vue_vue_type_template_id_5d5795bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/AboutUs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/AboutUs.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/AboutUs.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AboutUs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AboutUs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/AboutUs.vue?vue&type=template&id=5d5795bc&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/AboutUs.vue?vue&type=template&id=5d5795bc& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_template_id_5d5795bc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AboutUs.vue?vue&type=template&id=5d5795bc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AboutUs.vue?vue&type=template&id=5d5795bc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_template_id_5d5795bc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AboutUs_vue_vue_type_template_id_5d5795bc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);