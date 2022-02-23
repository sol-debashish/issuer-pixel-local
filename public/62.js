(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/SocialIntegration.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/SocialIntegration.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_Social__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/Social */ "./resources/js/apis/Social.js");


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
      fbIntegrated: false,
      linkedinIntegrated: false,
      twitterIntegrated: false,
      isLoading: false,
      isDisabled: false,
      twitterDisabled: false
    };
  },
  methods: {
    getSocialIntegratedList: function getSocialIntegratedList() {
      var _this = this;

      _apis_Social__WEBPACK_IMPORTED_MODULE_1__["default"].getSocialIntegratedList().then(function (response) {
        _this.isLoading = false;
        Object.keys(response.data.data).map(function (key) {
          if ('facebook' == key) {
            _this.fbIntegrated = true;
          }

          if ('linkedin' == key) {
            _this.linkedinIntegrated = true;
          }

          if ('twitter' == key) {
            _this.twitterIntegrated = true;
          }
        });
      })["catch"](function (error) {
        _this.isLoading = false;
      });
    },
    logInWithFacebook: function logInWithFacebook() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this2.fbIntegrated) {
                  _context.next = 6;
                  break;
                }

                _this2.isDisabled = true;
                _context.next = 4;
                return _this2.loadFacebookSDK(document, "script", "facebook-jssdk");

              case 4:
                _context.next = 6;
                return _this2.initFacebook();

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    logInWithLinkedin: function logInWithLinkedin() {
      if (!this.linkedinIntegrated) {
        var state = document.querySelector('meta[name="csrf-token"]').content;
        window.location = "https://www.linkedin.com/oauth/v2/authorization?state=" + state + "&response_type=code&client_id=" + "86ldsrw5818ncn" + "&redirect_uri=" + document.location.origin + "/linkedin/callback&scope=r_emailaddress,r_liteprofile,w_member_social";
      }
    },
    logInWithTwitter: function logInWithTwitter() {
      var _this3 = this;

      if (!this.twitterIntegrated && !this.twitterDisabled) {
        this.twitterDisabled = true;
        _apis_Social__WEBPACK_IMPORTED_MODULE_1__["default"].addTwitterInfo().then(function (response) {
          if (response.data.data.twitter_update) {
            window.location = response.data.data.url;
          }
        })["catch"](function (error) {
          toastr.error(error);
          _this3.twitterDisabled = false;
        });
      }
    },
    initFacebook: function initFacebook() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var vi;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                vi = _this4;

                window.fbAsyncInit = function () {
                  window.FB.init({
                    appId: "4602883119774449",
                    //You will need to change this
                    cookie: true,
                    // This is important, it's not enabled by default
                    version: "v13.0",
                    channelUrl: process.env.APP_URL
                  });
                  window.FB.login(function (response) {
                    //if (response.status === 'connected') {
                    //    console.log("You are already loggedin to facebook");
                    //} else {
                    if (response.authResponse) {
                      _apis_Social__WEBPACK_IMPORTED_MODULE_1__["default"].setFbAccessToken({
                        'facebook_access_token': response.authResponse.accessToken
                      }).then(function (response) {
                        var isFbTokenUpdated = response.data.data.facebook_token_update;

                        if (isFbTokenUpdated) {
                          vi.fbIntegrated = true;
                          toastr.success(response.data.data.message);
                          vi.isDisabled = false;
                        }
                      })["catch"](function (error) {
                        toastr.error(error);
                        vi.isDisabled = false;
                      });
                    } else {
                      console.log("unauthenticated or cancel");
                    } //}

                  }, {
                    scope: 'email,pages_read_engagement,pages_manage_posts,pages_show_list'
                  });
                };

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    loadFacebookSDK: function loadFacebookSDK(d, s, id) {
      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var js, fjs;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                fjs = d.getElementsByTagName(s)[0];

                if (!d.getElementById(id)) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return");

              case 3:
                js = d.createElement(s);
                js.id = id;
                js.src = "https://connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  },
  created: function created() {
    this.isLoading = true;
    this.getSocialIntegratedList();
  },
  components: {
    loader: function loader() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../Loader */ "./resources/js/components/Loader.vue"));
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/SocialIntegration.vue?vue&type=template&id=1ff58226&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/SocialIntegration.vue?vue&type=template&id=1ff58226& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container-fluid px-0" },
    [
      _c(
        "div",
        {
          staticClass:
            "row collapse show no-gutters d-flex h-100 position-relative"
        },
        [
          _c("div", { staticClass: "col-md-10 offset-md-2" }, [
            _c("h4", { staticClass: "py-3 settings-title-text" }, [
              _vm._v("Integrations")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-3 mb-2" }, [
                _c(
                  "a",
                  {
                    attrs: { href: "javascript:;" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.logInWithFacebook.apply(null, arguments)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "card" }, [
                      _c(
                        "div",
                        {
                          staticClass: "card-body text-center social-container"
                        },
                        [
                          _vm.fbIntegrated
                            ? _c("div", { staticClass: "social-active-icon" }, [
                                _c("img", {
                                  attrs: {
                                    src: "/images/icons/check-circle.png"
                                  }
                                })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("img", {
                            staticClass: "social-img",
                            attrs: { src: "/images/icons/facebook.png" }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "social-title" }, [
                            _vm._v(
                              "\n                                    Facebook\n                                "
                            )
                          ])
                        ]
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3 mb-2" }, [
                _c(
                  "a",
                  {
                    attrs: { href: "javascript:;" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.logInWithLinkedin.apply(null, arguments)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "card" }, [
                      _c(
                        "div",
                        {
                          staticClass: "card-body text-center social-container"
                        },
                        [
                          _vm.linkedinIntegrated
                            ? _c("div", { staticClass: "social-active-icon" }, [
                                _c("img", {
                                  attrs: {
                                    src: "/images/icons/check-circle.png"
                                  }
                                })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("img", {
                            staticClass: "social-img",
                            attrs: { src: "/images/icons/linkedin.png" }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "social-title" }, [
                            _vm._v(
                              "\n                                    LinkedIn\n                                "
                            )
                          ])
                        ]
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3 mb-2" }, [
                _c(
                  "a",
                  {
                    attrs: { href: "javascript:;" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.logInWithTwitter.apply(null, arguments)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "card" }, [
                      _c(
                        "div",
                        {
                          staticClass: "card-body text-center social-container"
                        },
                        [
                          _vm.twitterIntegrated
                            ? _c("div", { staticClass: "social-active-icon" }, [
                                _c("img", {
                                  attrs: {
                                    src: "/images/icons/check-circle.png"
                                  }
                                })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("img", {
                            staticClass: "social-img",
                            attrs: { src: "/images/icons/twitter.png" }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "social-title" }, [
                            _vm._v(
                              "\n                                    Twitter\n                                "
                            )
                          ])
                        ]
                      )
                    ])
                  ]
                )
              ])
            ])
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

/***/ "./resources/js/apis/Social.js":
/*!*************************************!*\
  !*** ./resources/js/apis/Social.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

var ajaxRequest = null;
/* harmony default export */ __webpack_exports__["default"] = ({
  setFbAccessToken: function setFbAccessToken(data) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/set-fb-access-token", data);
  },
  addLinkedinInfo: function addLinkedinInfo(data) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/linkedin-info", data);
  },
  addTwitterInfo: function addTwitterInfo(data) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/twitter-info", data);
  },
  sharing: function sharing(data) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/social-sharing", data);
  },
  getTwitterMetrics: function getTwitterMetrics(page) {
    // cancel  previous ajax if exists
    if (ajaxRequest) {
      ajaxRequest.cancel();
    }

    ajaxRequest = axios.CancelToken.source();
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/get-twitter-metrics-data?page=" + page, {
      cancelToken: ajaxRequest.token
    });
  },
  getFacebookMetrics: function getFacebookMetrics(page) {
    // cancel  previous ajax if exists
    if (ajaxRequest) {
      ajaxRequest.cancel();
    }

    ajaxRequest = axios.CancelToken.source();
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/get-facebook-metrics-data?page=" + page, {
      cancelToken: ajaxRequest.token
    });
  },
  getLinkedinMetrics: function getLinkedinMetrics(page) {
    // cancel  previous ajax if exists
    if (ajaxRequest) {
      ajaxRequest.cancel();
    }

    ajaxRequest = axios.CancelToken.source();
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/get-linkedin-metrics-data?page=" + page, {
      cancelToken: ajaxRequest.token
    });
  },
  getSocialIntegratedList: function getSocialIntegratedList() {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/get-social-integrated-list");
  }
});

/***/ }),

/***/ "./resources/js/components/settings/SocialIntegration.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/settings/SocialIntegration.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SocialIntegration_vue_vue_type_template_id_1ff58226___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SocialIntegration.vue?vue&type=template&id=1ff58226& */ "./resources/js/components/settings/SocialIntegration.vue?vue&type=template&id=1ff58226&");
/* harmony import */ var _SocialIntegration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialIntegration.vue?vue&type=script&lang=js& */ "./resources/js/components/settings/SocialIntegration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SocialIntegration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SocialIntegration_vue_vue_type_template_id_1ff58226___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SocialIntegration_vue_vue_type_template_id_1ff58226___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/settings/SocialIntegration.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/settings/SocialIntegration.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/settings/SocialIntegration.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialIntegration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SocialIntegration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/SocialIntegration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialIntegration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/settings/SocialIntegration.vue?vue&type=template&id=1ff58226&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/settings/SocialIntegration.vue?vue&type=template&id=1ff58226& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialIntegration_vue_vue_type_template_id_1ff58226___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SocialIntegration.vue?vue&type=template&id=1ff58226& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/SocialIntegration.vue?vue&type=template&id=1ff58226&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialIntegration_vue_vue_type_template_id_1ff58226___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialIntegration_vue_vue_type_template_id_1ff58226___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);