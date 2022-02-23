(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/PasswordSettings.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/PasswordSettings.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../apis/User */ "./resources/js/apis/User.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      form: {
        oldPassword: "",
        password: "",
        password_confirmation: ""
      },
      isLoading: false,
      errors: [],
      fieldPassword: "password",
      isPasswordViewActive: false
    };
  },
  validations: {
    form: {
      oldPassword: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      password: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["minLength"])(8),
        patternValid: function patternValid(value) {
          var containsLetter = /[A-Za-z]/.test(value);
          var containsNumber = /[0-9]/.test(value);
          var containsSpecial = /[#?!@$%^&*-]/.test(value);
          return containsLetter && containsNumber && containsSpecial;
        }
      },
      password_confirmation: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        sameAsPassword: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["sameAs"])('password')
      }
    }
  },
  methods: {
    updatePasswordSettings: function updatePasswordSettings() {
      var _this = this;

      this.$v.form.oldPassword.$touch();
      this.$v.form.password.$touch();
      this.$v.form.password_confirmation.$touch();

      if (this.$v.form.oldPassword.$invalid || this.$v.form.password.$invalid || this.$v.form.password_confirmation.$invalid) {
        if (this.$v.form.oldPassword.$invalid) {
          this.$refs.oldPassword.focus();
        } else if (this.$v.form.password.$invalid) {
          this.$refs.password.focus();
        } else if (this.$v.form.password_confirmation.$invalid) {
          this.$refs.password_confirmation.focus();
        }

        return false;
      }

      this.isLoading = true;
      _apis_User__WEBPACK_IMPORTED_MODULE_0__["default"].updatePassword(this.form).then(function (response) {
        _this.isLoading = false;
        _this.submitButtonDisabled = false;
        toastr.success(response.data.success.message);
      })["catch"](function (error) {
        _this.isLoading = false;
        _this.submitButtonDisabled = false;

        if (error.response.status === 422) {
          toastr.error(error.response.data.error.message);
        } else if (error.response.status == 401) {
          localStorage.clear();

          _this.$router.push({
            name: "Login"
          });
        } else {
          toastr.error(error);
        }
      });
    },
    showPassword: function showPassword() {
      this.fieldPassword = this.fieldPassword === "password" ? "text" : "password";
      this.isPasswordViewActive = this.isPasswordViewActive === "active" ? "" : "active";
    }
  },
  components: {
    loader: function loader() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../Loader */ "./resources/js/components/Loader.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/PasswordSettings.vue?vue&type=template&id=7bba00a2&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/PasswordSettings.vue?vue&type=template&id=7bba00a2& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
              _vm._v("Change Password")
            ]),
            _vm._v(" "),
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.updatePasswordSettings.apply(null, arguments)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _vm.fieldPassword === "checkbox"
                      ? _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.oldPassword,
                              expression: "form.oldPassword"
                            }
                          ],
                          ref: "oldPassword",
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.$v.form.oldPassword.$error
                          },
                          attrs: {
                            id: "oldassword",
                            placeholder: "Type in your old password",
                            autocomplete: "off",
                            type: "checkbox"
                          },
                          domProps: {
                            checked: Array.isArray(_vm.form.oldPassword)
                              ? _vm._i(_vm.form.oldPassword, null) > -1
                              : _vm.form.oldPassword
                          },
                          on: {
                            contextmenu: function($event) {
                              $event.preventDefault()
                            },
                            copy: function($event) {
                              $event.preventDefault()
                            },
                            cut: function($event) {
                              $event.preventDefault()
                            },
                            paste: function($event) {
                              $event.preventDefault()
                            },
                            change: function($event) {
                              var $$a = _vm.form.oldPassword,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.form,
                                      "oldPassword",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.form,
                                      "oldPassword",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.form, "oldPassword", $$c)
                              }
                            }
                          }
                        })
                      : _vm.fieldPassword === "radio"
                      ? _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.oldPassword,
                              expression: "form.oldPassword"
                            }
                          ],
                          ref: "oldPassword",
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.$v.form.oldPassword.$error
                          },
                          attrs: {
                            id: "oldassword",
                            placeholder: "Type in your old password",
                            autocomplete: "off",
                            type: "radio"
                          },
                          domProps: {
                            checked: _vm._q(_vm.form.oldPassword, null)
                          },
                          on: {
                            contextmenu: function($event) {
                              $event.preventDefault()
                            },
                            copy: function($event) {
                              $event.preventDefault()
                            },
                            cut: function($event) {
                              $event.preventDefault()
                            },
                            paste: function($event) {
                              $event.preventDefault()
                            },
                            change: function($event) {
                              return _vm.$set(_vm.form, "oldPassword", null)
                            }
                          }
                        })
                      : _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.oldPassword,
                              expression: "form.oldPassword"
                            }
                          ],
                          ref: "oldPassword",
                          staticClass: "form-control",
                          class: {
                            "is-invalid": _vm.$v.form.oldPassword.$error
                          },
                          attrs: {
                            id: "oldassword",
                            placeholder: "Type in your old password",
                            autocomplete: "off",
                            type: _vm.fieldPassword
                          },
                          domProps: { value: _vm.form.oldPassword },
                          on: {
                            contextmenu: function($event) {
                              $event.preventDefault()
                            },
                            copy: function($event) {
                              $event.preventDefault()
                            },
                            cut: function($event) {
                              $event.preventDefault()
                            },
                            paste: function($event) {
                              $event.preventDefault()
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "oldPassword",
                                $event.target.value
                              )
                            }
                          }
                        }),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group-append" }, [
                      _c("span", { staticClass: "btn show-password-icon" }, [
                        _c(
                          "a",
                          {
                            class: { active: _vm.isPasswordViewActive },
                            attrs: { href: "javascript:;" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.showPassword.apply(null, arguments)
                              }
                            }
                          },
                          [
                            _vm.isPasswordViewActive
                              ? _c("i", { staticClass: "fas fa-eye" })
                              : _c("i", { staticClass: "fas fa-eye-slash" })
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.$v.form.oldPassword.$error
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          !_vm.$v.form.oldPassword.required
                            ? _c("span", [_vm._v("Old Password is required")])
                            : _vm._e()
                        ])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _vm.fieldPassword === "checkbox"
                      ? _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.password,
                              expression: "form.password"
                            }
                          ],
                          ref: "password",
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.$v.form.password.$error },
                          attrs: {
                            id: "password",
                            placeholder: "Type in new password",
                            autocomplete: "off",
                            type: "checkbox"
                          },
                          domProps: {
                            checked: Array.isArray(_vm.form.password)
                              ? _vm._i(_vm.form.password, null) > -1
                              : _vm.form.password
                          },
                          on: {
                            contextmenu: function($event) {
                              $event.preventDefault()
                            },
                            copy: function($event) {
                              $event.preventDefault()
                            },
                            cut: function($event) {
                              $event.preventDefault()
                            },
                            paste: function($event) {
                              $event.preventDefault()
                            },
                            change: function($event) {
                              var $$a = _vm.form.password,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.form,
                                      "password",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.form,
                                      "password",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.form, "password", $$c)
                              }
                            }
                          }
                        })
                      : _vm.fieldPassword === "radio"
                      ? _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.password,
                              expression: "form.password"
                            }
                          ],
                          ref: "password",
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.$v.form.password.$error },
                          attrs: {
                            id: "password",
                            placeholder: "Type in new password",
                            autocomplete: "off",
                            type: "radio"
                          },
                          domProps: {
                            checked: _vm._q(_vm.form.password, null)
                          },
                          on: {
                            contextmenu: function($event) {
                              $event.preventDefault()
                            },
                            copy: function($event) {
                              $event.preventDefault()
                            },
                            cut: function($event) {
                              $event.preventDefault()
                            },
                            paste: function($event) {
                              $event.preventDefault()
                            },
                            change: function($event) {
                              return _vm.$set(_vm.form, "password", null)
                            }
                          }
                        })
                      : _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.password,
                              expression: "form.password"
                            }
                          ],
                          ref: "password",
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.$v.form.password.$error },
                          attrs: {
                            id: "password",
                            placeholder: "Type in new password",
                            autocomplete: "off",
                            type: _vm.fieldPassword
                          },
                          domProps: { value: _vm.form.password },
                          on: {
                            contextmenu: function($event) {
                              $event.preventDefault()
                            },
                            copy: function($event) {
                              $event.preventDefault()
                            },
                            cut: function($event) {
                              $event.preventDefault()
                            },
                            paste: function($event) {
                              $event.preventDefault()
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "password",
                                $event.target.value
                              )
                            }
                          }
                        }),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group-append" }, [
                      _c("span", { staticClass: "btn show-password-icon" }, [
                        _c(
                          "a",
                          {
                            class: { active: _vm.isPasswordViewActive },
                            attrs: { href: "javascript:;" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.showPassword.apply(null, arguments)
                              }
                            }
                          },
                          [
                            _vm.isPasswordViewActive
                              ? _c("i", { staticClass: "fas fa-eye" })
                              : _c("i", { staticClass: "fas fa-eye-slash" })
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.$v.form.password.$error
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          !_vm.$v.form.password.required
                            ? _c("span", [_vm._v("New password is required")])
                            : !_vm.$v.form.password.minLength
                            ? _c("span", [
                                _vm._v("Password must be at least 8 characters")
                              ])
                            : !_vm.$v.form.password.patternValid
                            ? _c("span", [
                                _vm._v(
                                  "Password must contain at least one number and one letter and one special character"
                                )
                              ])
                            : _vm._e()
                        ])
                      : _c("span", { staticClass: "w-100 small" }, [
                          _vm._v(
                            "Use 8 or more characters with a mix of numbers, letters &  special character"
                          )
                        ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _vm._m(2),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _vm.fieldPassword === "checkbox"
                      ? _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.password_confirmation,
                              expression: "form.password_confirmation"
                            }
                          ],
                          ref: "password_confirmation",
                          staticClass: "form-control",
                          class: {
                            "is-invalid":
                              _vm.$v.form.password_confirmation.$error
                          },
                          attrs: {
                            id: "password_confirmation",
                            placeholder: "Type in confirm password",
                            autocomplete: "off",
                            type: "checkbox"
                          },
                          domProps: {
                            checked: Array.isArray(
                              _vm.form.password_confirmation
                            )
                              ? _vm._i(_vm.form.password_confirmation, null) >
                                -1
                              : _vm.form.password_confirmation
                          },
                          on: {
                            contextmenu: function($event) {
                              $event.preventDefault()
                            },
                            copy: function($event) {
                              $event.preventDefault()
                            },
                            cut: function($event) {
                              $event.preventDefault()
                            },
                            paste: function($event) {
                              $event.preventDefault()
                            },
                            change: function($event) {
                              var $$a = _vm.form.password_confirmation,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    _vm.$set(
                                      _vm.form,
                                      "password_confirmation",
                                      $$a.concat([$$v])
                                    )
                                } else {
                                  $$i > -1 &&
                                    _vm.$set(
                                      _vm.form,
                                      "password_confirmation",
                                      $$a
                                        .slice(0, $$i)
                                        .concat($$a.slice($$i + 1))
                                    )
                                }
                              } else {
                                _vm.$set(_vm.form, "password_confirmation", $$c)
                              }
                            }
                          }
                        })
                      : _vm.fieldPassword === "radio"
                      ? _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.password_confirmation,
                              expression: "form.password_confirmation"
                            }
                          ],
                          ref: "password_confirmation",
                          staticClass: "form-control",
                          class: {
                            "is-invalid":
                              _vm.$v.form.password_confirmation.$error
                          },
                          attrs: {
                            id: "password_confirmation",
                            placeholder: "Type in confirm password",
                            autocomplete: "off",
                            type: "radio"
                          },
                          domProps: {
                            checked: _vm._q(
                              _vm.form.password_confirmation,
                              null
                            )
                          },
                          on: {
                            contextmenu: function($event) {
                              $event.preventDefault()
                            },
                            copy: function($event) {
                              $event.preventDefault()
                            },
                            cut: function($event) {
                              $event.preventDefault()
                            },
                            paste: function($event) {
                              $event.preventDefault()
                            },
                            change: function($event) {
                              return _vm.$set(
                                _vm.form,
                                "password_confirmation",
                                null
                              )
                            }
                          }
                        })
                      : _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.password_confirmation,
                              expression: "form.password_confirmation"
                            }
                          ],
                          ref: "password_confirmation",
                          staticClass: "form-control",
                          class: {
                            "is-invalid":
                              _vm.$v.form.password_confirmation.$error
                          },
                          attrs: {
                            id: "password_confirmation",
                            placeholder: "Type in confirm password",
                            autocomplete: "off",
                            type: _vm.fieldPassword
                          },
                          domProps: { value: _vm.form.password_confirmation },
                          on: {
                            contextmenu: function($event) {
                              $event.preventDefault()
                            },
                            copy: function($event) {
                              $event.preventDefault()
                            },
                            cut: function($event) {
                              $event.preventDefault()
                            },
                            paste: function($event) {
                              $event.preventDefault()
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "password_confirmation",
                                $event.target.value
                              )
                            }
                          }
                        }),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group-append" }, [
                      _c("span", { staticClass: "btn show-password-icon" }, [
                        _c(
                          "a",
                          {
                            class: { active: _vm.isPasswordViewActive },
                            attrs: { href: "javascript:;" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.showPassword.apply(null, arguments)
                              }
                            }
                          },
                          [
                            _vm.isPasswordViewActive
                              ? _c("i", { staticClass: "fas fa-eye" })
                              : _c("i", { staticClass: "fas fa-eye-slash" })
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _vm.$v.form.password_confirmation.$error
                      ? _c("div", { staticClass: "invalid-feedback" }, [
                          !_vm.$v.form.password_confirmation.required
                            ? _c("span", [
                                _vm._v("Confirm Password is required")
                              ])
                            : !_vm.$v.form.password_confirmation.sameAsPassword
                            ? _c("span", [_vm._v("Passwords must match")])
                            : _vm._e()
                        ])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _vm._m(3)
              ]
            )
          ])
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
      {
        staticClass: "control-label font-weight-bold",
        attrs: { for: "oldPassword" }
      },
      [
        _vm._v("Old Password"),
        _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "control-label font-weight-bold",
        attrs: { for: "password" }
      },
      [
        _vm._v("New Password"),
        _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "control-label font-weight-bold",
        attrs: { for: "password_confirmation" }
      },
      [
        _vm._v("Confirm Password"),
        _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-left mb-4" }, [
      _c("button", { staticClass: "btn btn-back-next" }, [
        _vm._v("Save Changes")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/settings/PasswordSettings.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/settings/PasswordSettings.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PasswordSettings_vue_vue_type_template_id_7bba00a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PasswordSettings.vue?vue&type=template&id=7bba00a2& */ "./resources/js/components/settings/PasswordSettings.vue?vue&type=template&id=7bba00a2&");
/* harmony import */ var _PasswordSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PasswordSettings.vue?vue&type=script&lang=js& */ "./resources/js/components/settings/PasswordSettings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PasswordSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PasswordSettings_vue_vue_type_template_id_7bba00a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PasswordSettings_vue_vue_type_template_id_7bba00a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/settings/PasswordSettings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/settings/PasswordSettings.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/settings/PasswordSettings.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordSettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/PasswordSettings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/settings/PasswordSettings.vue?vue&type=template&id=7bba00a2&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/settings/PasswordSettings.vue?vue&type=template&id=7bba00a2& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordSettings_vue_vue_type_template_id_7bba00a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PasswordSettings.vue?vue&type=template&id=7bba00a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/PasswordSettings.vue?vue&type=template&id=7bba00a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordSettings_vue_vue_type_template_id_7bba00a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PasswordSettings_vue_vue_type_template_id_7bba00a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);