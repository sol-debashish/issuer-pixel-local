(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShareModal.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ShareModal.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_Social__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/Social */ "./resources/js/apis/Social.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      isCopied: false,
      shareOptionsContainer: false,
      oneClickShareOptionsContainer: false,
      oneClickShareData: [],
      ischeckAllSocial: false,
      oneClickMessage: '',
      shareSuccessMessage: '',
      allShare: '',
      //activeInactive
      traditionalShare: '',
      shareTypes: [{
        "id": "Facebook",
        "name": "Facebook",
        "icon": "facebook"
      }, {
        "id": "Linkedin",
        "name": "Linkedin",
        "icon": "linkedin"
      }, {
        "id": "Twitter",
        "name": "Twitter",
        "icon": "twitter"
      }],
      fbAppId: "4602883119774449",
      isDisabled: false,
      isSharing: false,
      twitterCharacterLimit: 230,
      totalCharacter: 2000,
      remainCharacter: 2000
    };
  },
  props: ['publicShareLink', 'sharableMediaId', 'shareMediaType'],
  methods: {
    charCount: function charCount() {
      this.remainCharacter = this.totalCharacter - this.oneClickMessage.length;

      if (this.oneClickMessage.length < 1) {
        this.remainCharacter = 2000;
      }
    },
    copyShareLink: function copyShareLink() {
      var _this = this;

      this.$refs.sharedLink.select();
      document.execCommand('copy');
      this.isCopied = true;
      setTimeout(function () {
        _this.isCopied = !_this.isCopied;
      }, 3000);
    },
    showShareOptions: function showShareOptions() {
      this.shareOptionsContainer = true;
      this.oneClickShareOptionsContainer = false;
      this.allShare = 'activeInactive';
      this.traditionalShare = '';
    },
    showOneClickShareOptions: function showOneClickShareOptions() {
      this.shareOptionsContainer = false;
      this.oneClickShareOptionsContainer = true;
      this.allShare = '';
      this.traditionalShare = 'activeInactive';
    },
    submitOneClickShare: function submitOneClickShare() {
      var _this2 = this;

      this.shareSuccessMessage = "";

      if (this.oneClickShareData.length) {
        this.isDisabled = true;
        this.isSharing = true;
        _apis_Social__WEBPACK_IMPORTED_MODULE_0__["default"].sharing({
          'shareLink': this.publicShareLink,
          'shareMediaId': this.sharableMediaId,
          'shareMediaType': this.shareMediaType,
          'sharePlatform': this.oneClickShareData,
          'shareMessage': this.oneClickMessage
        }).then(function (response) {
          _this2.isDisabled = false;
          _this2.isSharing = false;

          _this2.$bvModal.hide('modalShareLink');

          Object.keys(response.data.data).map(function (key) {
            if (response.data.data[key].status == 'error') {
              toastr.error(response.data.data[key].msg);

              _this2.$router.push({
                path: '/settings/general#integrations'
              })["catch"](function () {});
            } else if (response.data.data[key].status == 'success') {
              toastr.success(response.data.data[key].msg);
            }
          });
        })["catch"](function (error) {
          _this2.isDisabled = false;
          _this2.isSharing = false;

          if (error.response.status == 401) {
            toastr.error("You must need to login for one click share");
          } else {
            toastr.error(error);
          }
        });
      } else {
        this.shareSuccessMessage = "Please select a share option";
      }
    },
    checkAllSocial: function checkAllSocial() {
      this.totalCharacter = 2000;
      this.remainCharacter = 2000 - this.oneClickMessage.length;
      this.ischeckAllSocial = !this.ischeckAllSocial;
      this.oneClickShareData = [];

      if (this.ischeckAllSocial) {
        // Check all
        for (var key in this.shareTypes) {
          this.oneClickShareData.push(this.shareTypes[key].name);
        }
      }
    },
    updateCheckAllSocial: function updateCheckAllSocial() {
      if (this.oneClickShareData.length == 1 && this.oneClickShareData[0] == 'Twitter') {
        this.oneClickMessage = this.oneClickMessage.length > this.twitterCharacterLimit ? this.oneClickMessage.substring(0, this.twitterCharacterLimit) : this.oneClickMessage;
        this.totalCharacter = this.twitterCharacterLimit;
        this.remainCharacter = this.twitterCharacterLimit - this.oneClickMessage.length;
      } else {
        this.totalCharacter = 2000;
        this.remainCharacter = 2000 - this.oneClickMessage.length;
      }

      if (this.oneClickShareData.length == this.shareTypes.length) {
        this.ischeckAllSocial = true;
      } else {
        this.ischeckAllSocial = false;
      }
    },
    openWindow: function openWindow(type, link) {
      return !window.open(link, type, 'width=640,height=580');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShareModal.vue?vue&type=template&id=7965c3b9&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ShareModal.vue?vue&type=template&id=7965c3b9& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("ul", { staticClass: "list-unstyled share-choose-icon text-center" }, [
      _c("li", { staticClass: "d-inline-block px-2" }, [
        _c(
          "a",
          {
            attrs: { href: "javascript:;" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.showOneClickShareOptions.apply(null, arguments)
              }
            }
          },
          [
            _c("i", {
              staticClass:
                "fas fa-vector-square  rounded-circle modal-share-icon",
              class: _vm.allShare
            }),
            _vm._v(" "),
            _c("div", { staticClass: "pt-1", class: _vm.allShare }, [
              _vm._v("One Click Share")
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "d-inline-block px-2" }, [
        _c(
          "a",
          {
            attrs: { href: "javascript:;" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.showShareOptions.apply(null, arguments)
              }
            }
          },
          [
            _c("i", {
              staticClass: "fa fa-share-alt rounded-circle modal-share-icon",
              class: _vm.traditionalShare
            }),
            _vm._v(" "),
            _c("div", { staticClass: "pt-1", class: _vm.traditionalShare }, [
              _vm._v("Share")
            ])
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _vm.oneClickShareOptionsContainer
      ? _c("div", { staticClass: "share-container" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.ischeckAllSocial,
                expression: "ischeckAllSocial"
              }
            ],
            attrs: { type: "checkbox" },
            domProps: {
              checked: Array.isArray(_vm.ischeckAllSocial)
                ? _vm._i(_vm.ischeckAllSocial, null) > -1
                : _vm.ischeckAllSocial
            },
            on: {
              click: function($event) {
                return _vm.checkAllSocial()
              },
              change: function($event) {
                var $$a = _vm.ischeckAllSocial,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = null,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && (_vm.ischeckAllSocial = $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      (_vm.ischeckAllSocial = $$a
                        .slice(0, $$i)
                        .concat($$a.slice($$i + 1)))
                  }
                } else {
                  _vm.ischeckAllSocial = $$c
                }
              }
            }
          }),
          _vm._v("  Select All\n        "),
          _c(
            "ul",
            { staticClass: "list-unstyled" },
            _vm._l(_vm.shareTypes, function(shareType) {
              return _c("li", { staticClass: "d-inline-block px-3" }, [
                _c("img", {
                  staticClass: "social-img d-block",
                  attrs: { src: "/images/icons/" + shareType.icon + ".png" }
                }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.oneClickShareData,
                      expression: "oneClickShareData"
                    }
                  ],
                  attrs: { type: "checkbox" },
                  domProps: {
                    value: shareType.name,
                    checked: Array.isArray(_vm.oneClickShareData)
                      ? _vm._i(_vm.oneClickShareData, shareType.name) > -1
                      : _vm.oneClickShareData
                  },
                  on: {
                    change: [
                      function($event) {
                        var $$a = _vm.oneClickShareData,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = shareType.name,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              (_vm.oneClickShareData = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.oneClickShareData = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.oneClickShareData = $$c
                        }
                      },
                      function($event) {
                        return _vm.updateCheckAllSocial()
                      }
                    ]
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "social-title" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(shareType.name) +
                      "\n                "
                  )
                ])
              ])
            }),
            0
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-12 form-group mb-1" }, [
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.oneClickMessage,
                  expression: "oneClickMessage"
                }
              ],
              staticClass: "form-control",
              attrs: {
                placeholder: "Description",
                maxlength: _vm.totalCharacter,
                rows: "3"
              },
              domProps: { value: _vm.oneClickMessage },
              on: {
                keyup: function($event) {
                  return _vm.charCount()
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.oneClickMessage = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "color-red text-left" }, [
              _vm._v(_vm._s(_vm.shareSuccessMessage))
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-right col-sm-12 form-group" }, [
            _vm._v(
              "\n            " +
                _vm._s(_vm.remainCharacter) +
                " characters\n        "
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            [
              _c(
                "b-button",
                {
                  staticClass: "btn btn-back-next",
                  attrs: { type: "submit", disabled: _vm.isDisabled },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.submitOneClickShare.apply(null, arguments)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.isSharing ? "Sharing..." : "Share now") +
                      "\n            "
                  )
                ]
              )
            ],
            1
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.shareOptionsContainer
      ? _c(
          "div",
          { staticClass: "share-container" },
          [
            _c("p", { staticClass: "text-center" }, [_vm._v("Share")]),
            _vm._v(" "),
            _c("ul", { staticClass: "list-unstyled" }, [
              _c("li", { staticClass: "d-inline-block  px-3" }, [
                _c(
                  "a",
                  {
                    attrs: { href: "javascript:;" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.openWindow(
                          "Facebook",
                          "https://www.facebook.com/sharer/sharer.php?app_id=" +
                            _vm.fbAppId +
                            "&sdk=gd&u=" +
                            _vm.publicShareLink +
                            "/&display=popup&ref=plugin&src=share_button"
                        )
                      }
                    }
                  },
                  [
                    _c("img", {
                      staticClass: "social-img",
                      attrs: { src: "/images/icons/facebook.png" }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "social-title" }, [
                      _vm._v(
                        "\n                        Facebook\n                    "
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "d-inline-block  px-3" }, [
                _c(
                  "a",
                  {
                    attrs: { href: "javascript:;" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.openWindow(
                          "LinkedIn",
                          "https://www.linkedin.com/sharing/share-offsite/?url=" +
                            _vm.publicShareLink
                        )
                      }
                    }
                  },
                  [
                    _c("img", {
                      staticClass: "social-img",
                      attrs: { src: "/images/icons/linkedin.png" }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "social-title" }, [
                      _vm._v(
                        "\n                        LinkedIn\n                    "
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "d-inline-block px-3" }, [
                _c(
                  "a",
                  {
                    attrs: { href: "javascript:;" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.openWindow(
                          "Twitter",
                          "https://twitter.com/intent/tweet?url=" +
                            _vm.publicShareLink
                        )
                      }
                    }
                  },
                  [
                    _c("img", {
                      staticClass: "social-img",
                      attrs: { src: "/images/icons/twitter.png" }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "social-title" }, [
                      _vm._v(
                        "\n                        Twitter\n                    "
                      )
                    ])
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "b-input-group",
              [
                _c("b-form-input", {
                  ref: "sharedLink",
                  staticClass: "shared-link",
                  attrs: { readonly: "" },
                  model: {
                    value: _vm.publicShareLink,
                    callback: function($$v) {
                      _vm.publicShareLink = $$v
                    },
                    expression: "publicShareLink"
                  }
                }),
                _vm._v(" "),
                _c(
                  "b-input-group-append",
                  [
                    _c(
                      "b-button",
                      {
                        staticClass: "font-weight-bold shared-link-copy-btn",
                        attrs: { size: "sm", variant: "outline-primary" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.copyShareLink.apply(null, arguments)
                          }
                        }
                      },
                      [_vm._v("Copy\n                ")]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm.isCopied
              ? _c(
                  "small",
                  { staticClass: "font-weight-bold text-success mb-0" },
                  [_vm._v("Copied!")]
                )
              : _vm._e()
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ShareModal.vue":
/*!************************************************!*\
  !*** ./resources/js/components/ShareModal.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ShareModal_vue_vue_type_template_id_7965c3b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShareModal.vue?vue&type=template&id=7965c3b9& */ "./resources/js/components/ShareModal.vue?vue&type=template&id=7965c3b9&");
/* harmony import */ var _ShareModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShareModal.vue?vue&type=script&lang=js& */ "./resources/js/components/ShareModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShareModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShareModal_vue_vue_type_template_id_7965c3b9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ShareModal_vue_vue_type_template_id_7965c3b9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ShareModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ShareModal.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/ShareModal.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ShareModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShareModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ShareModal.vue?vue&type=template&id=7965c3b9&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ShareModal.vue?vue&type=template&id=7965c3b9& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareModal_vue_vue_type_template_id_7965c3b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ShareModal.vue?vue&type=template&id=7965c3b9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ShareModal.vue?vue&type=template&id=7965c3b9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareModal_vue_vue_type_template_id_7965c3b9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShareModal_vue_vue_type_template_id_7965c3b9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);