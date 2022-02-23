(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContactForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ContactForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/User */ "./resources/js/apis/User.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation */ "./resources/js/components/Navigation.vue");
/* harmony import */ var _Patent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Patent */ "./resources/js/components/Patent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ContactForm",
  data: function data() {
    return {
      form: {
        company: "",
        name: "",
        email: "",
        phone: "",
        message: "",
        recaptcha_response_value: ""
      },
      errors: [],
      isLoading: false
    };
  },
  validations: {
    form: {
      company: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      email: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["email"]
      },
      phone: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        phoneValid: function phoneValid(value) {
          var containsNumber = /[0-9]/.test(value);
          var pattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(value);
          return containsNumber && pattern;
        }
      },
      message: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      recaptcha_response_value: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      }
    }
  },
  methods: {
    contactUs: function contactUs(submitEvent) {
      var _this = this;

      this.$v.form.company.$touch();
      this.$v.form.name.$touch();
      this.$v.form.email.$touch();
      this.$v.form.phone.$touch();
      this.$v.form.message.$touch();
      this.$v.form.recaptcha_response_value.$touch();

      if (this.$v.form.company.$invalid || this.$v.form.name.$invalid || this.$v.form.email.$invalid || this.$v.form.phone.$invalid || this.$v.form.message.$invalid || this.$v.form.recaptcha_response_value.$invalid) {
        if (this.$v.form.name.$invalid) {
          this.$refs.name.focus();
        } else if (this.$v.form.company.$invalid) {
          this.$refs.company.focus();
        } else if (this.$v.form.email.$invalid) {
          this.$refs.email.focus();
        } else if (this.$v.form.phone.$invalid) {
          this.$refs.phone.focus();
        } else if (this.$v.form.message.$invalid) {
          this.$refs.message.focus();
        }

        return false;
      }

      this.isLoading = true;
      _apis_User__WEBPACK_IMPORTED_MODULE_0__["default"].contact(this.form).then(function () {
        localStorage.setItem("thanksPage", "contactus");

        _this.$router.push({
          name: "ThankYou"
        });
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this.errors = error.response.data.error.message;
        }

        _this.isLoading = false;
      });
    },
    acceptPhoneNumber: function acceptPhoneNumber() {
      var x = this.form.phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.form.phone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    },
    initReCaptcha: function initReCaptcha() {
      setTimeout(function () {
        if (typeof grecaptcha === 'undefined' || typeof grecaptcha.render === 'undefined') {
          this.initReCaptcha();
        } else {
          grecaptcha.render('recaptcha-main', {
            sitekey: "6LdfIrAaAAAAACVeK8dBpl5R0cS1aJI00QmxCqLL",
            callback: this.correctCaptcha,
            'expired-callback': this.expired
          });
        }
      }.bind(this), 100);
    },
    correctCaptcha: function correctCaptcha(response) {
      this.form.recaptcha_response_value = response;
    }
  },
  created: function created() {
    this.initReCaptcha();
  },
  components: {
    loader: function loader() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/Loader */ "./resources/js/components/Loader.vue"));
    }
  }
});

/***/ }),

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContactForm.vue?vue&type=template&id=76db242e&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ContactForm.vue?vue&type=template&id=76db242e& ***!
  \**************************************************************************************************************************************************************************************************************/
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
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.contactUs.apply(null, arguments)
            }
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "row mb-5",
              attrs: { "data-aos": "zoom-in", "data-aos-delay": "100" }
            },
            [
              _c(
                "div",
                {
                  staticClass: "col-lg-7 mx-auto contact-form-inputs bg-white"
                },
                [
                  _c("div", { staticClass: "form-group" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.name,
                          expression: "form.name"
                        }
                      ],
                      ref: "name",
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.$v.form.name.$error },
                      attrs: {
                        type: "text",
                        id: "name",
                        placeholder: "John",
                        autocomplete: "off"
                      },
                      domProps: { value: _vm.form.name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "name", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    !_vm.$v.form.name.required
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v("Name is required.")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.errors.name
                      ? _c(
                          "span",
                          {
                            staticClass: "invalid-feedback",
                            attrs: { role: "alert" }
                          },
                          [_c("strong", [_vm._v(_vm._s(_vm.errors.name[0]))])]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.company,
                          expression: "form.company"
                        }
                      ],
                      ref: "company",
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.$v.form.company.$error },
                      attrs: {
                        type: "text",
                        id: "company",
                        placeholder: "Doe",
                        autocomplete: "off"
                      },
                      domProps: { value: _vm.form.company },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "company", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    !_vm.$v.form.company.required
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v("Company is required.")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.errors.company
                      ? _c(
                          "span",
                          {
                            staticClass: "invalid-feedback",
                            attrs: { role: "alert" }
                          },
                          [
                            _c("strong", [
                              _vm._v(_vm._s(_vm.errors.company[0]))
                            ])
                          ]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _vm._m(2),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.email,
                          expression: "form.email"
                        }
                      ],
                      ref: "email",
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.$v.form.email.$error },
                      attrs: {
                        type: "email",
                        id: "email",
                        placeholder: "john@issuer-example.com",
                        autocomplete: "off"
                      },
                      domProps: { value: _vm.form.email },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "email", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    !_vm.$v.form.email.required
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v("Email is required.")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.$v.form.email.email
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v("The email is not valid.")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.errors.email
                      ? _c("div", { staticClass: "invalid-server-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.email[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _vm._m(3),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.phone,
                          expression: "form.phone"
                        }
                      ],
                      ref: "phone",
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.$v.form.phone.$error },
                      attrs: {
                        type: "text",
                        id: "phone",
                        placeholder: "(xxx) xxx - xxxx",
                        autocomplete: "off"
                      },
                      domProps: { value: _vm.form.phone },
                      on: {
                        input: [
                          function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "phone", $event.target.value)
                          },
                          _vm.acceptPhoneNumber
                        ]
                      }
                    }),
                    _vm._v(" "),
                    _vm.$v.form.phone.$error
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          !_vm.$v.form.phone.required
                            ? _c("span", [_vm._v("Phone Number is required")])
                            : !_vm.$v.form.phone.phoneValid
                            ? _c("span", [_vm._v("Phone Number is not valid")])
                            : _vm._e()
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.errors.phone
                      ? _c("div", { staticClass: "invalid-server-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.phone[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _vm._m(4),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.message,
                          expression: "form.message"
                        }
                      ],
                      ref: "message",
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.$v.form.message.$error },
                      attrs: { id: "message", placeholder: "Message" },
                      domProps: { value: _vm.form.message },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "message", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    !_vm.$v.form.message.required
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v("Message is required.")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.errors.message
                      ? _c("div", { staticClass: "invalid-server-feedback" }, [
                          _vm._v(_vm._s(_vm.errors.message[0]))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c("div", {
                      staticClass: "recaptcha-redesign",
                      attrs: { id: "recaptcha-main" }
                    }),
                    _vm._v(" "),
                    _c("span", {
                      class: {
                        "is-invalid":
                          _vm.$v.form.recaptcha_response_value.$error
                      }
                    }),
                    _vm._v(" "),
                    !_vm.$v.form.recaptcha_response_value.required
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          _vm._v("Please tick recaptcha")
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _vm._m(5),
                  _vm._v(" "),
                  _vm._m(6)
                ]
              )
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
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "font-weight-bold", attrs: { for: "name" } },
      [_vm._v("Name"), _c("span", { staticClass: "required" }, [_vm._v("*")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "font-weight-bold", attrs: { for: "company" } },
      [
        _vm._v("Company Name"),
        _c("span", { staticClass: "required" }, [_vm._v("*")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "font-weight-bold", attrs: { for: "email" } },
      [_vm._v("Email"), _c("span", { staticClass: "required" }, [_vm._v("*")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "font-weight-bold", attrs: { for: "phone" } },
      [
        _vm._v("Company Phone Number"),
        _c("span", { staticClass: "required" }, [_vm._v("*")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      { staticClass: "font-weight-bold", attrs: { for: "message" } },
      [
        _vm._v("Your message"),
        _c("span", { staticClass: "required" }, [_vm._v("*")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-check" }, [
      _c("input", {
        staticClass: "form-check-input",
        attrs: { type: "checkbox", value: "", id: "defaultCheck1" }
      }),
      _vm._v(" "),
      _c(
        "label",
        {
          staticClass: "form-check-label newsletter-label ",
          attrs: { for: "defaultCheck1" }
        },
        [
          _vm._v(
            "\n                        Sign up for updates\n                    "
          )
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-2" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-theme-dark-blue px-4",
          attrs: { type: "submit" }
        },
        [_vm._v("Send")]
      )
    ])
  }
]
render._withStripped = true



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

/***/ "./resources/js/components/ContactForm.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/ContactForm.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContactForm_vue_vue_type_template_id_76db242e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactForm.vue?vue&type=template&id=76db242e& */ "./resources/js/components/ContactForm.vue?vue&type=template&id=76db242e&");
/* harmony import */ var _ContactForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactForm.vue?vue&type=script&lang=js& */ "./resources/js/components/ContactForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContactForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContactForm_vue_vue_type_template_id_76db242e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContactForm_vue_vue_type_template_id_76db242e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ContactForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ContactForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/ContactForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ContactForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContactForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ContactForm.vue?vue&type=template&id=76db242e&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/ContactForm.vue?vue&type=template&id=76db242e& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_template_id_76db242e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ContactForm.vue?vue&type=template&id=76db242e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ContactForm.vue?vue&type=template&id=76db242e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_template_id_76db242e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_template_id_76db242e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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



/***/ })

}]);