(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Patent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Patent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Patent",
  props: ["extendFrom"]
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Navigation.vue */ "./resources/js/components/Navigation.vue");
/* harmony import */ var _components_Patent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Patent.vue */ "./resources/js/components/Patent.vue");
/* harmony import */ var _components_Subscribe_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Subscribe.vue */ "./resources/js/components/Subscribe.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      extendFrom: 'Home'
    };
  },
  methods: {
    playVideo: function playVideo(videoSrc) {
      $("#sampleLoopVideo").get(0).pause();
      $("#video").attr('src', videoSrc);
      $('#fullVideoPlayModal').modal({
        backdrop: 'static',
        keyboard: false
      });
    },
    removeVideoSrc: function removeVideoSrc() {
      $("#sampleLoopVideo").get(0).play();
      $("#video").attr('src', "");
    }
  },
  components: {
    Footer: function Footer() {
      return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../components/Footer */ "./resources/js/components/Footer.vue"));
    },
    Navigation: _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Subscribe: _components_Subscribe_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Patent: _components_Patent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Patent.vue?vue&type=template&id=3bacab93&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Patent.vue?vue&type=template&id=3bacab93& ***!
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
    {
      class:
        this.extendFrom == "Home"
          ? "py-5 home-patent-bg"
          : "patent-section-bg pb-5"
    },
    [_vm._m(0)]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container text-center aos-init" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-12 mx-auto" }, [
          _c(
            "div",
            {
              staticClass: "mb-3 patent-title",
              attrs: { "data-aos": "zoom-in", "data-aos-delay": "100" }
            },
            [
              _vm._v(
                "Patented\n                    Technology\n                "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "p",
            {
              staticClass: "text-center patented-text mb-3",
              attrs: { "data-aos": "zoom-right", "data-aos-delay": "100" }
            },
            [
              _vm._v(
                "Patent pending technology leveraging the power of machine learning and AI. Patent strategy is Omnibus patent family "
              ),
              _c("br", { staticClass: "patented-break" }),
              _vm._v(
                "with 6 patents planned. 1st Utility patent issued. 2 additional patents pending. 6 more patents being prepared and will be strategically filed."
              )
            ]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=template&id=63cd6604& ***!
  \**************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "home-page-content" } },
    [
      _c("Navigation"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "section-bg", attrs: { id: "main" } },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("section", { staticClass: "video-mission-section pt-0" }, [
            _c(
              "div",
              {
                staticClass: "video-container aos-init",
                attrs: { "data-aos": "fade-in", "data-aos-delay": "100" }
              },
              [
                _c(
                  "video",
                  {
                    attrs: {
                      id: "sampleLoopVideo",
                      preload: "",
                      autoplay: "",
                      muted: "",
                      playsinline: "",
                      loop: ""
                    },
                    domProps: { muted: true }
                  },
                  [
                    _c("source", {
                      attrs: {
                        type: "video/mp4",
                        src: "/videos/IP_LoopVideo.mp4"
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "play-overlay" }, [
                  _c(
                    "a",
                    {
                      staticClass: "play-video cursor-pointer",
                      attrs: {
                        "data-toggle": "modal",
                        "data-target": "#fullVideoPlayModal"
                      },
                      on: {
                        click: function($event) {
                          return _vm.playVideo(
                            "https://view.vzaar.com/23415795/player"
                          )
                        }
                      }
                    },
                    [
                      _c("img", {
                        staticClass: "img-fluid",
                        attrs: { src: "/images/home/play_button.png", alt: "" }
                      })
                    ]
                  )
                ])
              ]
            ),
            _vm._v(" "),
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
                    { staticClass: "col-lg-12 mx-auto text-center" },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "p",
                        {
                          staticClass: "text-justify section-description",
                          attrs: {
                            "data-aos": "zoom-in",
                            "data-aos-delay": "100"
                          }
                        },
                        [
                          _vm._v(
                            "Issuer Pixel has launched\n                                its platform. Companies have begun onboarding, uploading their video\n                                and audio to our platform. We are pleased to have all of our Company Customers on\n                                our platform.\n                            "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm._m(2),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass:
                            "text-center btn btn-md btn-theme-dark-blue px-5 sign-up-link beta-button",
                          attrs: { to: { name: "SignUp" } }
                        },
                        [_vm._v("Sign-up for Free")]
                      )
                    ],
                    1
                  )
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("Subscribe", { attrs: { extendFrom: _vm.extendFrom } }),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _c("section", { staticClass: "py-5 home-platform-bg" }, [
            _c("div", { staticClass: "container text-center aos-init" }, [
              _c("div", { staticClass: "row mb-4" }, [
                _vm._m(4),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-lg-6 my-lg-auto order-lg-1 mb-4 text-lg-left",
                    attrs: { "data-aos": "fade-up", "data-aos-delay": "100" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "section-theme-sub-title mb-3 text-lg-left"
                      },
                      [_vm._v("Company Platform")]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "text-lg-left section-description" },
                      [
                        _vm._v(
                          "User friendly dashboard for companies to manage their audio, video,\n                                and document files with in depth analytics, reports, and alerts."
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(5),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass:
                          "btn btn-md btn-theme-dark-blue px-5 sign-up-link beta-button",
                        attrs: { to: { name: "SignUp" } }
                      },
                      [_vm._v("Sign Up")]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row mt-5" }, [
                _vm._m(6),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col-lg-6 text-lg-left",
                    attrs: { "data-aos": "fade-up", "data-aos-delay": "100" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "section-theme-sub-title mb-3 text-lg-left"
                      },
                      [_vm._v("User Platform")]
                    ),
                    _vm._v(" "),
                    _c(
                      "p",
                      { staticClass: "text-lg-left section-description" },
                      [
                        _vm._v(
                          "Multiple searchable attributes enable investors to easily find\n                                companies, in any industry, of any size, at any stage, in any country, with granular,\n                                relevant and congruent results, as opposed to other video/audio platforms that are not\n                                company or industry specific."
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass:
                          "btn btn-md btn-theme-dark-blue px-5 sign-up-link beta-button",
                        attrs: { to: { name: "Platform" } }
                      },
                      [_vm._v("Learn More")]
                    )
                  ],
                  1
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("Patent", { attrs: { extendFrom: _vm.extendFrom } })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "modal fade",
          attrs: {
            id: "fullVideoPlayModal",
            tabindex: "-1",
            role: "dialog",
            "aria-hidden": "true"
          }
        },
        [
          _c(
            "div",
            { staticClass: "modal-dialog", attrs: { role: "document" } },
            [
              _c("div", { staticClass: "modal-content" }, [
                _c("div", { staticClass: "modal-body" }, [
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: {
                        type: "button",
                        "data-dismiss": "modal",
                        "aria-label": "Close"
                      },
                      on: { click: _vm.removeVideoSrc }
                    },
                    [
                      _c("span", { attrs: { "aria-hidden": "true" } }, [
                        _vm._v("×")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(7)
                ])
              ])
            ]
          )
        ]
      ),
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
    return _c("section", { staticClass: "header-padding pb-4 " }, [
      _c(
        "div",
        {
          staticClass: "container-fluid px-md-4",
          attrs: { "data-aos": "fade-down" }
        },
        [
          _c(
            "div",
            {
              staticClass: "row",
              attrs: { "data-aos": "zoom-in", "data-aos-delay": "100" }
            },
            [
              _c(
                "div",
                {
                  staticClass: "col issuerpixel-globe-small text-center my-auto"
                },
                [
                  _c("img", {
                    staticClass: "img",
                    attrs: {
                      src: "/images/issuerpixel_globe.png",
                      alt: "",
                      width: "70"
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col my-auto pl-0" }, [
                _c(
                  "div",
                  {
                    staticClass: "content text-left tag-title home-heading-text"
                  },
                  [
                    _c("p", { staticClass: "text-center mb-0" }, [
                      _c("span", { staticClass: "text-theme-purple" }, [
                        _vm._v(
                          "A Video and Audio Sharing and Networking Platform Connecting Companies to the World"
                        )
                      ])
                    ])
                  ]
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
      "div",
      {
        staticClass: "mb-3 mt-4 ",
        attrs: { "data-aos": "zoom-in", "data-aos-delay": "100" }
      },
      [
        _c("h5", { staticClass: "beta-available-title" }, [
          _vm._v("Now Available")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content text-center mt-4" }, [
      _c("img", {
        staticClass: "home-beta-logo img-fluid mb-3 img-theme-globe",
        attrs: {
          src: "/images/platform/IP_Globe_XL.png",
          alt: "",
          width: "100"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "pb-5" }, [
      _c(
        "div",
        { staticClass: "container aos-init", attrs: { "data-aos": "fade-up" } },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-12 mx-auto text-center" }, [
              _c(
                "div",
                {
                  staticClass: "section-theme-title mb-3",
                  attrs: { "data-aos": "zoom-in", "data-aos-delay": "100" }
                },
                [_vm._v("Mission")]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass: "text-justify section-description",
                  attrs: { "data-aos": "zoom-in", "data-aos-delay": "100" }
                },
                [
                  _vm._v(
                    "Our mission is to enable\n                                every company in the world to be found. To empower companies to create, communicate and\n                                collaborate, utilizing the power of video and audio for global exposure. To democratize\n                                the ability of companies, venture stage, small cap and micro-cap, foreign private\n                                issuers, companies of any size, at any stage, in any country, to utilize their video and\n                                audio, to gain awareness, establish sponsorship, forge partnerships, create supply chain\n                                relationships and access capital. We are harvesting unstructured data of video and audio\n                                and harnessing the power of relevance and congruity to find or be found."
                  )
                ]
              )
            ])
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
      "div",
      {
        staticClass: "col-lg-6  my-auto order-lg-2",
        attrs: { "data-aos": "fade-down", "data-aos-delay": "100" }
      },
      [
        _c("img", {
          staticClass: "img img-fluid",
          attrs: { src: "/images/home/issuer_platform.png", alt: "" }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "theme-u-list" }, [
      _c("li", { staticClass: "theme-list-home section-description " }, [
        _vm._v("Video/Audio Library with Total Content Control")
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "theme-list-home section-description" }, [
        _vm._v("Uniform and Relevant Video/Audio Search Results")
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "theme-list-home section-description" }, [
        _vm._v("Global Visibility ")
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "theme-list-home section-description" }, [
        _vm._v("Communications and Commerce")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "col-lg-6 my-lg-auto mb-4",
        attrs: { "data-aos": "fade-down", "data-aos-delay": "100" }
      },
      [
        _c("img", {
          staticClass: "img img-fluid",
          attrs: { src: "/images/home/powerful_search_attribute.png", alt: "" }
        })
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
        staticClass: "embed-responsive embed-responsive-16by9",
        staticStyle: { background: "black" }
      },
      [
        _c("iframe", {
          staticClass:
            "video-player video-player-responsive embed-responsive-item",
          attrs: {
            id: "video",
            name: "vzvd-22677381",
            src: "",
            title: "video player",
            allow: "autoplay",
            width: "640",
            height: "360",
            type: "text/html",
            frameborder: "0",
            allowfullscreen: "",
            allowTransparency: "true",
            mozallowfullscreen: "",
            webkitAllowFullScreen: ""
          }
        })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Patent.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Patent.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Patent_vue_vue_type_template_id_3bacab93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Patent.vue?vue&type=template&id=3bacab93& */ "./resources/js/components/Patent.vue?vue&type=template&id=3bacab93&");
/* harmony import */ var _Patent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Patent.vue?vue&type=script&lang=js& */ "./resources/js/components/Patent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Patent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Patent_vue_vue_type_template_id_3bacab93___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Patent_vue_vue_type_template_id_3bacab93___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Patent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Patent.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Patent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Patent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Patent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Patent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Patent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Patent.vue?vue&type=template&id=3bacab93&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Patent.vue?vue&type=template&id=3bacab93& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Patent_vue_vue_type_template_id_3bacab93___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Patent.vue?vue&type=template&id=3bacab93& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Patent.vue?vue&type=template&id=3bacab93&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Patent_vue_vue_type_template_id_3bacab93___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Patent_vue_vue_type_template_id_3bacab93___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/views/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=63cd6604& */ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=template&id=63cd6604& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=63cd6604& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);