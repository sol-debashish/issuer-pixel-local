(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Signup.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Signup.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Navigation.vue */ "./resources/js/components/Navigation.vue");
/* harmony import */ var _apis_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apis/User */ "./resources/js/apis/User.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__);


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        companyPhone: "",
        // hq_address: "",
        // hq_address2: "",
        // hq_city: "",
        // hq_zip: "",

        /*hq_state: "",
        hq_country: 1, /!*Currently set as default 1 (US)*!/
        company_industry: "",*/
        password: "",
        password_confirmation: "",
        termsConditions: false,
        allowUpdateNotification: false,
        recaptcha_response_value: ""
      },
      isLoading: false,
      fieldPassword: "text",
      fieldEmail: 'text',
      isPasswordViewActive: false,
      countries: [],
      StateLists: [],
      industries: [],
      errors: [],
      email_exists: false,
      companyNameExists: false,
      autofillWork: true,
      showPasswordClick: true
    };
  },
  validations: {
    form: {
      firstName: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
      },
      lastName: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
      },
      companyName: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
      },
      companyPhone: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
        phoneValid: function phoneValid(value) {
          var containsNumber = /[0-9]/.test(value);
          var pattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(value);
          return containsNumber && pattern;
        }
      },
      email: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
        customEmailValidate: function customEmailValidate() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

          if (value != "") {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(value).toLowerCase());
          } else {
            return true;
          }
        }
      },
      // hq_address: {required},
      // hq_city: {required},
      // hq_zip: {required},
      // hq_state: {required},
      // hq_country: {required},
      // company_industry: {required},
      password: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
        minLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["minLength"])(8),
        patternValid: function patternValid(value) {
          var containsLetter = /[A-Za-z]/.test(value);
          var containsNumber = /[0-9]/.test(value);
          var containsSpecial = /[#?!@$%^&*-]/.test(value);
          return containsLetter && containsNumber && containsSpecial;
        }
      },
      password_confirmation: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
        sameAsPassword: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["sameAs"])('password')
      },
      termsConditions: {
        checked: function checked(value) {
          return value === true;
        }
      },
      recaptcha_response_value: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
      }
    }
  },
  methods: {
    handleType: function handleType(event) {
      var srcElement = event.srcElement,
          type = event.type;
      var name = srcElement.name,
          value = srcElement.value;

      if (this.autofillWork) {
        if (type === 'blur' && !value) {
          this.fieldPassword = 'text';
        } else {
          this.fieldPassword = 'password';
        }
      }
    },
    handleTypeEmail: function handleTypeEmail(event) {
      var srcElement = event.srcElement,
          type = event.type;
      var name = srcElement.name,
          value = srcElement.value;

      if (type === 'blur' && !value) {
        this.fieldEmail = 'text';
      } else {
        this.fieldEmail = 'email';
      }
    },
    businessDomainEmailTesting: function businessDomainEmailTesting(event) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var srcElement, type, name, value, set, domain, vi, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //Auto fill prevent
                srcElement = event.srcElement, type = event.type;
                name = srcElement.name, value = srcElement.value;

                if (type === 'blur' && !value) {
                  _this.fieldEmail = 'text';
                } else {
                  _this.fieldEmail = 'email';
                } //End auto fill


                set = new Set(['gmail.com', "yahoo.com", "icloud.com", "outlook.com", "msn.com"]);
                domain = _this.form.email.substring(_this.form.email.lastIndexOf("@") + 1);

                if (set.has(domain)) {
                  vi = _this;
                  $.confirm({
                    title: '',
                    content: "Please use your business domain email address. If you do not have a business domain email address, click OK and proceed with sign up.",
                    columnClass: 'medium',
                    type: 'blue',
                    typeAnimated: true,
                    buttons: {
                      OK: function OK() {}
                    }
                  }, _this);
                }

                _context.next = 8;
                return _apis_User__WEBPACK_IMPORTED_MODULE_2__["default"].emailExistsCheck({
                  email: _this.form.email
                })["catch"](function (error) {
                  console.log(error);
                });

              case 8:
                response = _context.sent;
                _this.email_exists = response.data.data; //const domain = this.form.email.substring(this.form.email.lastIndexOf("@") + 1);

                /*if (response.data.data == 'domain_exist') {
                    this.form.email = '';
                    $.confirm({
                        title: '',
                        content: "A user from this domain " + domain + " already exists. At this time we only allow one user per organization, please contact support@issuerpixel.com for more information!",
                        columnClass: 'medium',
                        type: 'blue',
                        typeAnimated: true,
                        buttons: {
                            OK: function () {
                            },
                        }
                    }, this);
                } else {
                    this.email_exists = response.data.data;
                }*/

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    checkCompanyNameExists: function checkCompanyNameExists() {
      var _this2 = this;

      if (!!this.errors.companyName) {
        this.errors.companyName = false;
      }

      _apis_User__WEBPACK_IMPORTED_MODULE_2__["default"].companyNameExistsCheck({
        companyName: this.form.companyName
      }).then(function (response) {
        _this2.companyNameExists = response.data.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    signupValidate: function signupValidate() {
      var _this3 = this;

      this.$v.form.companyName.$touch();
      this.$v.form.firstName.$touch();
      this.$v.form.lastName.$touch();
      this.$v.form.companyPhone.$touch();
      this.$v.form.email.$touch(); // this.$v.form.hq_address.$touch();
      // this.$v.form.hq_city.$touch();
      // this.$v.form.hq_zip.$touch();
      // this.$v.form.hq_state.$touch();
      // this.$v.form.hq_country.$touch();
      // this.$v.form.company_industry.$touch();

      this.$v.form.password.$touch();
      this.$v.form.password_confirmation.$touch();
      this.$v.form.termsConditions.$touch();
      this.$v.form.recaptcha_response_value.$touch();

      if (this.$v.form.companyName.$invalid || this.$v.form.firstName.$invalid || this.$v.form.lastName.$invalid || this.$v.form.companyPhone.$invalid || this.$v.form.email.$invalid // || this.$v.form.hq_address.$invalid || this.$v.form.hq_city.$invalid || this.$v.form.hq_zip.$invalid
      // || this.$v.form.hq_state.$invalid
      // || this.$v.form.hq_country.$invalid|| this.$v.form.company_industry.$invalid
      || this.$v.form.password.$invalid || this.$v.form.password_confirmation.$invalid || this.$v.form.termsConditions.$invalid || this.$v.form.recaptcha_response_value.$invalid) {
        if (this.$v.form.firstName.$invalid) {
          this.$refs.firstName.focus();
        } else if (this.$v.form.lastName.$invalid) {
          this.$refs.lastName.focus();
        } else if (this.$v.form.email.$invalid) {
          this.$refs.email.focus();
        } else if (this.$v.form.companyName.$invalid) {
          this.$refs.companyName.focus();
        } else if (this.$v.form.companyPhone.$invalid) {
          this.$refs.companyPhone.focus();
        } else if (this.$v.form.password.$invalid) {
          this.$refs.password.focus();
        } else if (this.$v.form.password_confirmation.$invalid) {
          this.$refs.password_confirmation.focus();
        }

        return false;
      }

      this.isLoading = true;
      _apis_User__WEBPACK_IMPORTED_MODULE_2__["default"].register(this.form) // .then(() => {
      //   this.$router.push({ name: "Login" });
      // })
      .then(function () {
        _apis_User__WEBPACK_IMPORTED_MODULE_2__["default"].login(_this3.form).then(function (response) {
          localStorage.setItem("userInfo", JSON.stringify(response.data.data));
          localStorage.setItem("info", JSON.stringify(response.data.info));
          localStorage.setItem("videoUploadRemainingDays", response.data.info.video_upload_remaining_days);
          localStorage.setItem("isVideoUploaded", response.data.info.is_video_uploaded);
          localStorage.setItem("userid", response.data.info.id);
          localStorage.setItem("companyUuid", response.data.info.company_uuid);
          localStorage.setItem("companySlugName", response.data.info.company_slug_name);
          localStorage.setItem("storagePath", response.data.info.storage_path);
          localStorage.setItem("bulletins", JSON.stringify(response.data.info.bulletins));

          _this3.$root.$emit("login", true);

          localStorage.setItem("token", response.data.info.token);

          _this3.$router.push({
            name: "Dashboard"
          });
        });
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this3.isLoading = false;
          _this3.errors = error.response.data.error.message;
        } else {
          console.log(error);
        }
      });
    },
    getCountries: function getCountries() {
      var _this4 = this;

      axios.get('/api/country-list').then(function (response) {
        _this4.countries = response.data.data;
        _this4.isLoading = false;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getStates: function getStates(value) {
      var _this5 = this;

      /*Set country as default US which table ID is 1*/
      axios.get('/api/get-state-list/1').then(function (response) {
        _this5.StateLists = response.data.data;
        _this5.isLoading = false;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getIndustries: function () {
      var _getIndustries = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var _this6 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.get('/api/industry-list').then(function (response) {
                  _this6.industries = response.data.data;
                  _this6.isLoading = false;
                })["catch"](function (error) {
                  return console.log(error);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getIndustries() {
        return _getIndustries.apply(this, arguments);
      }

      return getIndustries;
    }(),
    filterMatchFirstCharacter: function filterMatchFirstCharacter(option, label, search) {
      return (label || '').toLowerCase().startsWith(search.toLowerCase());
    },
    acceptPhoneNumber: function acceptPhoneNumber() {
      var x = this.form.companyPhone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.form.companyPhone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    },
    goBackToPageTopAndNextFieldToEnter: function goBackToPageTopAndNextFieldToEnter() {
      $(document).ready(function () {
        $('input, select, textarea').on('keydown', function (e) {
          if (e.keyCode == 13) {
            var focusable = $('input, select, textarea').filter(':visible');
            focusable.eq(focusable.index(this) + 1).focus();
            return false;
          }
        });
      });
    },
    showPassword: function showPassword() {
      this.autofillWork = false;

      if (this.showPasswordClick == true && (this.fieldPassword === "text" || this.fieldPassword === "password")) {
        this.showPasswordClick = false;
        this.fieldPassword = 'text';
      } else {
        this.fieldPassword = this.fieldPassword === "password" ? "text" : "password";
      }

      this.isPasswordViewActive = this.isPasswordViewActive === "active" ? "" : "active";
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
    this.goBackToPageTopAndNextFieldToEnter(); // this.getCountries();
    // this.getIndustries();
    // this.getStates();

    this.initReCaptcha();
  },
  components: {
    vSelect: function vSelect() {
      return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! vue-select */ "./node_modules/vue-select/dist/vue-select.js", 7));
    },
    Footer: function Footer() {
      return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ../components/Footer */ "./resources/js/components/Footer.vue"));
    },
    loader: function loader() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/Loader */ "./resources/js/components/Loader.vue"));
    },
    Navigation: _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Signup.vue?vue&type=template&id=cfe84212&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Signup.vue?vue&type=template&id=cfe84212& ***!
  \****************************************************************************************************************************************************************************************************/
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
    [
      _c("Navigation"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container mt-5", attrs: { "data-aos": "fade-up" } },
        [
          _c("div", { staticClass: "row register-container" }, [
            _c(
              "div",
              {
                staticClass: "col-lg-6 col-md-8 mx-auto bg-white rounded pt-3"
              },
              [
                _c("h2", { staticClass: "text-center mb-3" }, [
                  _vm._v("Sign Up")
                ]),
                _vm._v(" "),
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "form",
                  {
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.signupValidate.apply(null, arguments)
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.firstName,
                            expression: "form.firstName"
                          }
                        ],
                        ref: "firstName",
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.$v.form.firstName.$error },
                        attrs: {
                          type: "text",
                          id: "firstName",
                          placeholder: "Ex: John",
                          autocomplete: "off"
                        },
                        domProps: { value: _vm.form.firstName },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "firstName", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      !_vm.$v.form.firstName.required
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "First name is required.\n                            "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.errors.firstName
                        ? _c(
                            "span",
                            {
                              staticClass: "invalid-feedback",
                              attrs: { role: "alert" }
                            },
                            [
                              _c("strong", [
                                _vm._v(_vm._s(_vm.errors.firstName[0]))
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
                            value: _vm.form.lastName,
                            expression: "form.lastName"
                          }
                        ],
                        ref: "lastName",
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.$v.form.lastName.$error },
                        attrs: {
                          type: "text",
                          id: "lastName",
                          placeholder: "Ex: Smith",
                          autocomplete: "off"
                        },
                        domProps: { value: _vm.form.lastName },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "lastName", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      !_vm.$v.form.lastName.required
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v("Last name is required.")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.errors.lastName
                        ? _c(
                            "span",
                            {
                              staticClass: "invalid-feedback",
                              attrs: { role: "alert" }
                            },
                            [
                              _c("strong", [
                                _vm._v(_vm._s(_vm.errors.lastName[0]))
                              ])
                            ]
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(3),
                      _vm._v(" "),
                      _vm.fieldEmail === "checkbox"
                        ? _c("input", {
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
                              id: "email",
                              name: "email",
                              placeholder: "Type in your email address",
                              autocomplete: "off",
                              type: "checkbox"
                            },
                            domProps: {
                              checked: Array.isArray(_vm.form.email)
                                ? _vm._i(_vm.form.email, null) > -1
                                : _vm.form.email
                            },
                            on: {
                              blur: _vm.businessDomainEmailTesting,
                              focus: _vm.handleTypeEmail,
                              change: function($event) {
                                var $$a = _vm.form.email,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.form,
                                        "email",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.form,
                                        "email",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.form, "email", $$c)
                                }
                              }
                            }
                          })
                        : _vm.fieldEmail === "radio"
                        ? _c("input", {
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
                              id: "email",
                              name: "email",
                              placeholder: "Type in your email address",
                              autocomplete: "off",
                              type: "radio"
                            },
                            domProps: { checked: _vm._q(_vm.form.email, null) },
                            on: {
                              blur: _vm.businessDomainEmailTesting,
                              focus: _vm.handleTypeEmail,
                              change: function($event) {
                                return _vm.$set(_vm.form, "email", null)
                              }
                            }
                          })
                        : _c("input", {
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
                              id: "email",
                              name: "email",
                              placeholder: "Type in your email address",
                              autocomplete: "off",
                              type: _vm.fieldEmail
                            },
                            domProps: { value: _vm.form.email },
                            on: {
                              blur: _vm.businessDomainEmailTesting,
                              focus: _vm.handleTypeEmail,
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
                      !_vm.$v.form.email.customEmailValidate
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "The email is not\n                                valid.\n                            "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.errors.email && _vm.email_exists
                        ? _c("div", { staticClass: "invalid-feedback-alter" }, [
                            _vm._v(
                              "Email Already\n                                Taken\n                            "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.errors.email
                        ? _c(
                            "div",
                            { staticClass: "invalid-server-feedback" },
                            [_vm._v(_vm._s(_vm.errors.email[0]))]
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(4),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.companyName,
                            expression: "form.companyName"
                          }
                        ],
                        ref: "companyName",
                        staticClass: "form-control",
                        class: { "is-invalid": _vm.$v.form.companyName.$error },
                        attrs: {
                          type: "text",
                          id: "companyName",
                          placeholder: "Name of your organization ",
                          autocomplete: "off"
                        },
                        domProps: { value: _vm.form.companyName },
                        on: {
                          blur: _vm.checkCompanyNameExists,
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "companyName",
                              $event.target.value
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      !_vm.$v.form.companyName.required
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            _vm._v(
                              "Company name is\n                                required.\n                            "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.errors.companyName && _vm.companyNameExists
                        ? _c("div", { staticClass: "invalid-feedback-alter" }, [
                            _vm._v(
                              "Company Name Already\n                                Taken\n                            "
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.errors.companyName
                        ? _c(
                            "div",
                            { staticClass: "invalid-server-feedback" },
                            [_vm._v(_vm._s(_vm.errors.companyName[0]))]
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(5),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.companyPhone,
                            expression: "form.companyPhone"
                          }
                        ],
                        ref: "companyPhone",
                        staticClass: "form-control",
                        class: {
                          "is-invalid": _vm.$v.form.companyPhone.$error
                        },
                        attrs: {
                          type: "text",
                          id: "companyPhone",
                          placeholder: "(XXX) XXX-XXXX",
                          autocomplete: "off"
                        },
                        domProps: { value: _vm.form.companyPhone },
                        on: {
                          input: [
                            function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "companyPhone",
                                $event.target.value
                              )
                            },
                            _vm.acceptPhoneNumber
                          ]
                        }
                      }),
                      _vm._v(" "),
                      _vm.$v.form.companyPhone.$error
                        ? _c("div", { staticClass: "invalid-feedback" }, [
                            !_vm.$v.form.companyPhone.required
                              ? _c("span", [
                                  _vm._v("Company Phone Number is required")
                                ])
                              : !_vm.$v.form.companyPhone.phoneValid
                              ? _c("span", [
                                  _vm._v("Phone Number is not valid")
                                ])
                              : _vm._e()
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.errors.companyPhone
                        ? _c(
                            "span",
                            {
                              staticClass: "invalid-feedback",
                              attrs: { role: "alert" }
                            },
                            [
                              _c("strong", [
                                _vm._v(_vm._s(_vm.errors.companyPhone[0]))
                              ])
                            ]
                          )
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(6),
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
                              class: {
                                "is-invalid": _vm.$v.form.password.$error
                              },
                              attrs: {
                                id: "password",
                                value: "",
                                name: "password",
                                placeholder: "Type in your password",
                                autocomplete: "off",
                                type: "checkbox"
                              },
                              domProps: {
                                checked: Array.isArray(_vm.form.password)
                                  ? _vm._i(_vm.form.password, "") > -1
                                  : _vm.form.password
                              },
                              on: {
                                keyup: function($event) {
                                  return _vm.$v.form.password.$touch()
                                },
                                focus: _vm.handleType,
                                blur: _vm.handleType,
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
                                    var $$v = "",
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
                              class: {
                                "is-invalid": _vm.$v.form.password.$error
                              },
                              attrs: {
                                id: "password",
                                value: "",
                                name: "password",
                                placeholder: "Type in your password",
                                autocomplete: "off",
                                type: "radio"
                              },
                              domProps: {
                                checked: _vm._q(_vm.form.password, "")
                              },
                              on: {
                                keyup: function($event) {
                                  return _vm.$v.form.password.$touch()
                                },
                                focus: _vm.handleType,
                                blur: _vm.handleType,
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
                                  return _vm.$set(_vm.form, "password", "")
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
                              class: {
                                "is-invalid": _vm.$v.form.password.$error
                              },
                              attrs: {
                                id: "password",
                                value: "",
                                name: "password",
                                placeholder: "Type in your password",
                                autocomplete: "off",
                                type: _vm.fieldPassword
                              },
                              domProps: { value: _vm.form.password },
                              on: {
                                keyup: function($event) {
                                  return _vm.$v.form.password.$touch()
                                },
                                focus: _vm.handleType,
                                blur: _vm.handleType,
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
                          _c(
                            "span",
                            { staticClass: "btn show-password-icon" },
                            [
                              _c(
                                "a",
                                {
                                  class: { active: _vm.isPasswordViewActive },
                                  attrs: { href: "javascript:;" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.showPassword.apply(
                                        null,
                                        arguments
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm.isPasswordViewActive
                                    ? _c("i", { staticClass: "fas fa-eye" })
                                    : _c("i", {
                                        staticClass: "fas fa-eye-slash"
                                      })
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _vm.$v.form.password.$error
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              !_vm.$v.form.password.required
                                ? _c("span", [_vm._v("Password is required")])
                                : !_vm.$v.form.password.minLength
                                ? _c("span", [
                                    _vm._v(
                                      "Password must be at least 8 characters"
                                    )
                                  ])
                                : !_vm.$v.form.password.patternValid
                                ? _c("span", [
                                    _vm._v(
                                      "Password must contain at least one number and one letter and one special character"
                                    )
                                  ])
                                : _vm._e()
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.$v.form.password.$error && !_vm.form.password
                          ? _c(
                              "div",
                              { staticClass: "password-suggestion w-100" },
                              [
                                _vm._v(
                                  "\n                                    Use 8 or more characters with a mix of numbers, letters & special character\n                                "
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.errors.password
                          ? _c(
                              "span",
                              {
                                staticClass: "invalid-feedback",
                                attrs: { role: "alert" }
                              },
                              [
                                _c("strong", [
                                  _vm._v(_vm._s(_vm.errors.password[0]))
                                ])
                              ]
                            )
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _vm._m(7),
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
                                placeholder: "Type in your confirm password",
                                autocomplete: "off",
                                name: "password_confirmation",
                                type: "checkbox"
                              },
                              domProps: {
                                checked: Array.isArray(
                                  _vm.form.password_confirmation
                                )
                                  ? _vm._i(
                                      _vm.form.password_confirmation,
                                      null
                                    ) > -1
                                  : _vm.form.password_confirmation
                              },
                              on: {
                                keyup: function($event) {
                                  return _vm.$v.form.password_confirmation.$touch()
                                },
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
                                    _vm.$set(
                                      _vm.form,
                                      "password_confirmation",
                                      $$c
                                    )
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
                                placeholder: "Type in your confirm password",
                                autocomplete: "off",
                                name: "password_confirmation",
                                type: "radio"
                              },
                              domProps: {
                                checked: _vm._q(
                                  _vm.form.password_confirmation,
                                  null
                                )
                              },
                              on: {
                                keyup: function($event) {
                                  return _vm.$v.form.password_confirmation.$touch()
                                },
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
                                placeholder: "Type in your confirm password",
                                autocomplete: "off",
                                name: "password_confirmation",
                                type: _vm.fieldPassword
                              },
                              domProps: {
                                value: _vm.form.password_confirmation
                              },
                              on: {
                                keyup: function($event) {
                                  return _vm.$v.form.password_confirmation.$touch()
                                },
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
                          _c(
                            "span",
                            { staticClass: "btn show-password-icon" },
                            [
                              _c(
                                "a",
                                {
                                  class: { active: _vm.isPasswordViewActive },
                                  attrs: { href: "javascript:;" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.showPassword.apply(
                                        null,
                                        arguments
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm.isPasswordViewActive
                                    ? _c("i", { staticClass: "fas fa-eye" })
                                    : _c("i", {
                                        staticClass: "fas fa-eye-slash"
                                      })
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _vm.$v.form.password_confirmation.$error
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              !_vm.$v.form.password_confirmation.required ||
                              !_vm.$v.form.password_confirmation.sameAsPassword
                                ? _c("span", [
                                    _vm._v(
                                      "\n                                        Passwords do not match.\n                                    "
                                    )
                                  ])
                                : _vm._e()
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.errors.password_confirmation
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.errors.password_confirmation[0]) +
                                  "\n                              "
                              )
                            ])
                          : _vm._e()
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group form-check" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "form-check-label control-label font-weight-bold"
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.termsConditions,
                                expression: "form.termsConditions"
                              }
                            ],
                            staticClass: "form-check-input",
                            class: {
                              "is-invalid": _vm.$v.form.termsConditions.$error
                            },
                            attrs: { type: "checkbox", name: "terms" },
                            domProps: {
                              checked: Array.isArray(_vm.form.termsConditions)
                                ? _vm._i(_vm.form.termsConditions, null) > -1
                                : _vm.form.termsConditions
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.form.termsConditions,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.form,
                                        "termsConditions",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.form,
                                        "termsConditions",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(_vm.form, "termsConditions", $$c)
                                }
                              }
                            }
                          }),
                          _vm._v(
                            "\n                                By checking this box, I acknowledge that I have read and agreed to the\n                                "
                          ),
                          _c(
                            "router-link",
                            {
                              staticClass: "theme-color",
                              attrs: { to: "/termsofservice", target: "_blank" }
                            },
                            [
                              _vm._v(
                                "Terms of Service\n                                "
                              )
                            ]
                          ),
                          _vm._v(
                            "\n                                and the\n                                "
                          ),
                          _c(
                            "router-link",
                            {
                              staticClass: "theme-color",
                              attrs: { to: "/privacypolicy", target: "_blank" }
                            },
                            [
                              _vm._v("Privacy Policy"),
                              _c("span", { staticClass: "text-danger" }, [
                                _vm._v("*")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          !_vm.$v.form.termsConditions.required
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v(
                                  "Please agree to\n                                    the terms of service and privacy policy before signup!\n                                "
                                )
                              ])
                            : _vm._e()
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group form-check" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "form-check-label control-label font-weight-bold"
                        },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.allowUpdateNotification,
                                expression: "form.allowUpdateNotification"
                              }
                            ],
                            staticClass: "form-check-input",
                            attrs: { type: "checkbox", name: "terms" },
                            domProps: {
                              checked: Array.isArray(
                                _vm.form.allowUpdateNotification
                              )
                                ? _vm._i(
                                    _vm.form.allowUpdateNotification,
                                    null
                                  ) > -1
                                : _vm.form.allowUpdateNotification
                            },
                            on: {
                              change: function($event) {
                                var $$a = _vm.form.allowUpdateNotification,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        _vm.form,
                                        "allowUpdateNotification",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        _vm.form,
                                        "allowUpdateNotification",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(
                                    _vm.form,
                                    "allowUpdateNotification",
                                    $$c
                                  )
                                }
                              }
                            }
                          }),
                          _vm._v(
                            "\n                                You agree to receive updates, notifications and other communications from Issuer Pixel\n                                Inc. You may opt out anytime.\n                            "
                          )
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group" }, [
                      _c("div", { attrs: { id: "recaptcha-main" } }),
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
                    _c("div", { staticClass: "text-center" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-back-next btn-block",
                          attrs: { disabled: !_vm.form.termsConditions }
                        },
                        [_vm._v("Get Started\n                            ")]
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group text-center" }, [
                      _c(
                        "label",
                        {
                          staticClass:
                            "form-check-label control-label font-weight-bold"
                        },
                        [
                          _c(
                            "p",
                            { staticClass: "mt-4" },
                            [
                              _vm._v(
                                "Have an account? Please\n                                    "
                              ),
                              _c(
                                "router-link",
                                {
                                  staticClass: "theme-color",
                                  attrs: { to: "/login" }
                                },
                                [_vm._v("Login")]
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
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("Footer"),
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
    return _c("p", { staticClass: "mx-auto mb-1 field-mark-label" }, [
      _vm._v("Fields marked with "),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")]),
      _vm._v("\n                        are required")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "control-label font-weight-bold",
        attrs: { for: "firstName" }
      },
      [
        _vm._v("First Name"),
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
        attrs: { for: "lastName" }
      },
      [
        _vm._v("Last Name"),
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
        attrs: { for: "email" }
      },
      [
        _vm._v("Email"),
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
        attrs: { for: "companyName" }
      },
      [
        _vm._v("Company Name"),
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
        attrs: { for: "companyPhone" }
      },
      [
        _vm._v("Company Phone Number"),
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
        _vm._v("Password"),
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
        _vm._v("Confirm\n                                Password"),
        _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Signup.vue":
/*!***************************************!*\
  !*** ./resources/js/views/Signup.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Signup_vue_vue_type_template_id_cfe84212___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Signup.vue?vue&type=template&id=cfe84212& */ "./resources/js/views/Signup.vue?vue&type=template&id=cfe84212&");
/* harmony import */ var _Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Signup.vue?vue&type=script&lang=js& */ "./resources/js/views/Signup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Signup_vue_vue_type_template_id_cfe84212___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Signup_vue_vue_type_template_id_cfe84212___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Signup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Signup.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/views/Signup.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Signup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Signup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Signup.vue?vue&type=template&id=cfe84212&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Signup.vue?vue&type=template&id=cfe84212& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_template_id_cfe84212___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Signup.vue?vue&type=template&id=cfe84212& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Signup.vue?vue&type=template&id=cfe84212&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_template_id_cfe84212___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_template_id_cfe84212___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);