(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/GeneralSettings.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/GeneralSettings.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var customEmailValidate = function customEmailValidate() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  if (value != "") {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  } else {
    return true;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        companyPhone: "",
        _token: ""
      },
      isLoading: false,
      submitButtonDisabled: false,
      errors: [],
      imageSrc: "",
      isDisabled: false,
      isUploading: false,
      croppedImageSrc: "",
      isDragging: false,
      dragCount: 0
    };
  },
  validations: {
    form: {
      firstName: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      lastName: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      companyName: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      companyPhone: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        phoneValid: function phoneValid(value) {
          var containsNumber = /[0-9]/.test(value);
          var pattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(value);
          return containsNumber && pattern;
        }
      },
      email: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        customEmailValidate: customEmailValidate
      }
    }
  },
  methods: {
    acceptPhoneNumber: function acceptPhoneNumber() {
      var x = this.form.companyPhone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.form.companyPhone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    },
    updateGeneralInformation: function updateGeneralInformation() {
      var _this = this;

      this.$v.form.companyName.$touch();
      this.$v.form.firstName.$touch();
      this.$v.form.lastName.$touch();
      this.$v.form.companyPhone.$touch();
      this.$v.form.email.$touch();

      if (this.$v.form.companyName.$invalid || this.$v.form.firstName.$invalid || this.$v.form.lastName.$invalid || this.$v.form.companyPhone.$invalid || this.$v.form.email.$invalid) {
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
        }

        return false;
      }

      this.isLoading = true;
      this.submitButtonDisabled = true;
      this.form._token = document.querySelector('meta[name="csrf-token"]').content;
      _apis_User__WEBPACK_IMPORTED_MODULE_0__["default"].updateGeneralInformation(this.form).then(function (response) {
        _this.isLoading = false;
        _this.submitButtonDisabled = false;
        localStorage.setItem("info", JSON.stringify(response.data.data));

        _this.$emit('updateProfile', response.data.data);

        toastr.success(response.data.success.message);
      })["catch"](function (error) {
        _this.isLoading = false;
        _this.submitButtonDisabled = false;

        if (error.response.status === 422) {
          toastr.error(error.response.data.error.message);
        } else if (error.response.status == 401) {
          _this.$emit('logout');
        } else {
          toastr.error(error);
        }
      });
    },
    getGeneralInformation: function getGeneralInformation() {
      var _this2 = this;

      _apis_User__WEBPACK_IMPORTED_MODULE_0__["default"].getGeneralInformation().then(function (response) {
        var generalInfo = response.data.data;
        _this2.form.firstName = generalInfo.first_name;
        _this2.form.lastName = generalInfo.last_name;
        _this2.form.email = generalInfo.email;
        _this2.form.companyName = generalInfo.company.name;
        _this2.form.companyPhone = generalInfo.company.phone_number;
        _this2.isLoading = false;
      })["catch"](function (error) {
        _this2.isLoading = false;

        if (error.response.status == 401) {
          _this2.$emit('logout');
        }
      });
    },
    showImageCropperModal: function showImageCropperModal() {
      this.$refs['image-cropper-modal'].show();
    },
    closeImageCropperModal: function closeImageCropperModal() {
      var vi = this;

      if (this.imageSrc) {
        $.confirm({
          title: 'Discard changes',
          content: "Are you sure you want to discard changes you made?",
          columnClass: 'medium',
          type: 'blue',
          typeAnimated: true,
          buttons: {
            Cancel: function Cancel() {},
            Discard: function Discard() {
              vi.$refs['image-cropper-modal'].hide();
              vi.imageSrc = "";
              vi.isDisabled = false;
              vi.isUploading = false;
            }
          }
        }, this);
      } else {
        this.$refs['image-cropper-modal'].hide();
      }
    },
    setImage: function setImage(file) {
      var _this3 = this;

      // const file = e.target.files[0]
      if (!!file[0]) {
        if (!file[0].type.includes("image/")) {
          alert("Please select an image file");
          return;
        }

        if (typeof FileReader === "function") {
          var reader = new FileReader();

          reader.onload = function (event) {
            _this3.imageSrc = event.target.result; // Rebuild cropperjs with the updated source

            _this3.$refs.imageCropper.cropper.replace(event.target.result);
          };

          reader.readAsDataURL(file[0]);
        } else {
          alert("Sorry, FileReader API not supported");
        }
      }
    },
    imageRotate: function imageRotate() {
      // Get image data for post processing, e.g. upload or setting image src
      this.$refs.imageCropper.cropper.rotate(90);
    },
    uploadImage: function uploadImage() {
      this.isDisabled = true;
      this.isUploading = true;
      var vi = this;
      this.$refs.imageCropper.cropper.getCroppedCanvas().toBlob(function (blob) {
        var formData = new FormData(); // Add name for our image

        formData.append("name", "image-name-" + new Date().getTime()); // Append image file

        formData.append("file", blob);
        _apis_User__WEBPACK_IMPORTED_MODULE_0__["default"].companyProfileImageUpload(formData).then(function (response) {
          vi.croppedImageSrc = vi.$refs.imageCropper.cropper.getCroppedCanvas().toDataURL();
          vi.$refs['image-cropper-modal'].hide();
          vi.isDisabled = false;
          vi.isUploading = false;
          vi.companyImage = response.data.data.company_image;
          localStorage.setItem("info", JSON.stringify(response.data.data));
          vi.$emit('updateProfile', response.data.data);
        })["catch"](function (error) {
          if (error.response.status == 401) {
            vi.$emit("logout");
          } else {
            toastr.error(error);
          }
        });
      });
    },
    OnDragEnter: function OnDragEnter(e) {
      e.preventDefault();
      this.dragCount++;
      this.isDragging = true;
      return false;
    },
    OnDragLeave: function OnDragLeave(e) {
      e.preventDefault();
      this.dragCount--;
      if (this.dragCount <= 0) this.isDragging = false;
    },
    onInputChange: function onInputChange(e) {
      this.setImage(e.target.files);
    },
    onDrop: function onDrop(e) {
      e.preventDefault();
      e.stopPropagation();
      this.isDragging = false;
      this.setImage(e.dataTransfer.files); // this.addFile(e.dataTransfer.files);
    }
  },
  created: function created() {
    this.isLoading = true;
    this.getGeneralInformation();
    var user = JSON.parse(localStorage.getItem("info"));
    this.croppedImageSrc = "" != user.company_image ? user.company_image : "/images/image-placeholder-1.png";
  },
  components: {
    ImageCropper: function ImageCropper() {
      return Promise.all(/*! import() */[__webpack_require__.e(12), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! ../ImageCropper.vue */ "./resources/js/components/ImageCropper.vue"));
    },
    loader: function loader() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../Loader */ "./resources/js/components/Loader.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/GeneralSettings.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/GeneralSettings.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.image-edit-icon-settings {\n    background-color: #fff;\n    border: 1px solid #cccccc63;\n    cursor: pointer;\n    height: 27px;\n    position: absolute;\n    left: 60px;\n    top: 200px;\n    bottom: -13px;\n    padding-bottom: 2px;\n    width: 27px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/GeneralSettings.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/GeneralSettings.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneralSettings.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/GeneralSettings.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/GeneralSettings.vue?vue&type=template&id=2682c22c&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/GeneralSettings.vue?vue&type=template&id=2682c22c& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
              _vm._v("Update Profile Information")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group mb-5" }, [
              _c("img", {
                staticClass: "rounded-circle",
                attrs: {
                  src: _vm.croppedImageSrc,
                  alt: "",
                  width: "150",
                  height: "150"
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "rounded-circle image-edit-icon-settings text-center",
                  on: { click: _vm.showImageCropperModal }
                },
                [
                  _c("img", {
                    attrs: {
                      src: "/images/pencil-icon.png",
                      title: "",
                      height: "15px"
                    }
                  })
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.updateGeneralInformation.apply(null, arguments)
                  }
                }
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
                        _vm._v("First name is required.")
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
                  _vm._m(1),
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
                      placeholder: "Type in your email address",
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
                  !_vm.$v.form.email.customEmailValidate
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "The email is not\n                        valid.\n                    "
                        )
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
                      placeholder: "Name of your organization",
                      autocomplete: "off"
                    },
                    domProps: { value: _vm.form.companyName },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "companyName", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  !_vm.$v.form.companyName.required
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(
                          "Company name is\n                        required.\n                    "
                        )
                      ])
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
                        value: _vm.form.companyPhone,
                        expression: "form.companyPhone"
                      }
                    ],
                    ref: "companyPhone",
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.$v.form.companyPhone.$error },
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
                          ? _c("span", [_vm._v("Phone Number is not valid")])
                          : _vm._e()
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "If you would like to delete your user account or if you require any other support, please contact support@issuerpixel.com"
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "text-left mb-4" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-back-next",
                      attrs: { disabled: _vm.submitButtonDisabled }
                    },
                    [_vm._v("Save Changes")]
                  )
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "image-cropper-modal",
          attrs: { centered: "", id: "image-cropper-modal", size: "lg" },
          scopedSlots: _vm._u([
            {
              key: "modal-header",
              fn: function() {
                return [
                  _c(
                    "div",
                    { staticClass: "w-100" },
                    [
                      _c("h3", { staticClass: "float-left" }, [
                        _vm._v("Add photo")
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "modal-close close float-right",
                          on: { click: _vm.closeImageCropperModal }
                        },
                        [_vm._v("x\n                ")]
                      )
                    ],
                    1
                  )
                ]
              },
              proxy: true
            },
            {
              key: "modal-footer",
              fn: function() {
                return [
                  _c("label", { staticClass: "btn btn-default" }, [
                    !_vm.isUploading
                      ? _c("input", {
                          ref: "audioFile",
                          staticStyle: { display: "None" },
                          attrs: {
                            type: "file",
                            name: "audioFile",
                            id: "audioFile",
                            accept: "image/*"
                          },
                          on: { change: _vm.onInputChange }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.imageSrc
                      ? _c("span", [_vm._v("Change photo")])
                      : _c("span", [_vm._v("Upload photo")])
                  ]),
                  _vm._v(" "),
                  _vm.imageSrc
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-default",
                          attrs: { disabled: _vm.isDisabled },
                          on: { click: _vm.uploadImage }
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.isUploading ? "Uploading..." : "Save photo"
                            )
                          )
                        ]
                      )
                    : _vm._e()
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "uploader",
              on: {
                dragenter: _vm.OnDragEnter,
                dragleave: _vm.OnDragLeave,
                dragover: function($event) {
                  $event.preventDefault()
                },
                drop: _vm.onDrop
              }
            },
            [
              _c("ImageCropper", {
                ref: "imageCropper",
                attrs: { src: _vm.imageSrc }
              })
            ],
            1
          ),
          _vm._v(" "),
          !_vm.imageSrc
            ? _c("div", { staticClass: "text-center" }, [
                _vm._v("Upload a photo. Then crop and adjust it to perfection.")
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.imageSrc
            ? _c(
                "a",
                {
                  staticClass: "float-right mt-4 image-rotate-icon",
                  on: { click: _vm.imageRotate }
                },
                [_vm._v("Rotate "), _c("i", { staticClass: "fas fa-undo" })]
              )
            : _vm._e()
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/settings/GeneralSettings.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/settings/GeneralSettings.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GeneralSettings_vue_vue_type_template_id_2682c22c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GeneralSettings.vue?vue&type=template&id=2682c22c& */ "./resources/js/components/settings/GeneralSettings.vue?vue&type=template&id=2682c22c&");
/* harmony import */ var _GeneralSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeneralSettings.vue?vue&type=script&lang=js& */ "./resources/js/components/settings/GeneralSettings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _GeneralSettings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GeneralSettings.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/settings/GeneralSettings.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _GeneralSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GeneralSettings_vue_vue_type_template_id_2682c22c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GeneralSettings_vue_vue_type_template_id_2682c22c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/settings/GeneralSettings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/settings/GeneralSettings.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/settings/GeneralSettings.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneralSettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/GeneralSettings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/settings/GeneralSettings.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/settings/GeneralSettings.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneralSettings.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/GeneralSettings.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/settings/GeneralSettings.vue?vue&type=template&id=2682c22c&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/settings/GeneralSettings.vue?vue&type=template&id=2682c22c& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_template_id_2682c22c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./GeneralSettings.vue?vue&type=template&id=2682c22c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/GeneralSettings.vue?vue&type=template&id=2682c22c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_template_id_2682c22c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GeneralSettings_vue_vue_type_template_id_2682c22c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);