(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/ProfileImageSettings.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/ProfileImageSettings.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../apis/User */ "./resources/js/apis/User.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      imageSrc: "",
      isDisabled: false,
      isUploading: false,
      company: '',
      firstName: "",
      companyImage: '',
      croppedImageSrc: "",
      isDragging: false,
      dragCount: 0
    };
  },
  props: ["profileUpdatedData"],
  methods: {
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
      var _this = this;

      // const file = e.target.files[0]
      if (!!file[0]) {
        if (!file[0].type.includes("image/")) {
          alert("Please select an image file");
          return;
        }

        if (typeof FileReader === "function") {
          var reader = new FileReader();

          reader.onload = function (event) {
            _this.imageSrc = event.target.result; // Rebuild cropperjs with the updated source

            _this.$refs.imageCropper.cropper.replace(event.target.result);
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
    var user = JSON.parse(localStorage.getItem("info"));
    this.company = user.company;
    this.firstName = user.firstName;
    this.companyImage = user.company_image;
    this.croppedImageSrc = "" != user.company_image ? user.company_image : "/images/image-placeholder-1.png";
  },
  components: {
    ImageCropper: function ImageCropper() {
      return Promise.all(/*! import() */[__webpack_require__.e(12), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! ../ImageCropper.vue */ "./resources/js/components/ImageCropper.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/ProfileImageSettings.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/ProfileImageSettings.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.profile-img-circle {\n    /*max-width: 120px;*/\n}\n.dashboard-private-text {\n    color: #6d6d6d;\n}\n#image-cropper-modal___BV_modal_content_ {\n    background: black !important;;\n    color: white;\n}\n#image-cropper-modal___BV_modal_content_ .modal-title {\n    margin-left: initial;\n}\n#image-cropper-modal___BV_modal_content_ .close {\n    color: #ffffff;\n}\n#image-cropper-modal___BV_modal_footer_ .btn-default {\n    background-color: #ffffff;\n}\n#image-cropper-modal___BV_modal_header_ {\n    border-bottom: 1px solid #484e53;\n}\n#image-cropper-modal___BV_modal_footer_ {\n    border-top: 1px solid #484e53;\n}\n.cropper-view-box {\n    box-shadow: 0 0 0 1px #39f;\n    border-radius: 50%;\n    outline: 0;\n}\n.cropper-face {\n    background-color: inherit !important;\n}\n.cropper-view-box {\n    outline: inherit !important;\n}\n.company-profile-photo {\n    border: 2px solid #bbafaf;\n}\n.image-edit-icon {\n    background-color: #fff;\n    border: 1px solid #cccccc63;\n    cursor: pointer;\n    height: 27px;\n    position: absolute;\n    left: calc(50% - 13px);\n    top: 85px;\n    padding-bottom: 2px;\n    width: 27px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/ProfileImageSettings.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/ProfileImageSettings.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileImageSettings.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/ProfileImageSettings.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/ProfileImageSettings.vue?vue&type=template&id=297fb174&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/settings/ProfileImageSettings.vue?vue&type=template&id=297fb174& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "pt-2 pb-3 text-center" }, [
        _c("p", { staticClass: "mb-2 dashboard-private-text truncated" }, [
          _vm._v("Private Profile")
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "position-relative profile-img-circle" },
          [
            _vm.profileUpdatedData
              ? [
                  _c("img", {
                    staticClass:
                      "company-profile-photo rounded-circle cursor-pointer ml-2",
                    attrs: {
                      src: _vm.profileUpdatedData.company_image,
                      alt: "",
                      width: "100",
                      height: "100"
                    },
                    on: { click: _vm.showImageCropperModal }
                  })
                ]
              : !_vm.companyImage
              ? [
                  _c("img", {
                    staticClass:
                      "company-profile-photo rounded-circle cursor-pointer ml-2",
                    attrs: {
                      src: _vm.croppedImageSrc,
                      alt: "",
                      width: "100",
                      height: "100"
                    },
                    on: { click: _vm.showImageCropperModal }
                  })
                ]
              : [
                  _c("img", {
                    staticClass:
                      "company-profile-photo rounded-circle cursor-pointer ml-2",
                    attrs: {
                      src: _vm.croppedImageSrc,
                      alt: "",
                      width: "100",
                      height: "100"
                    },
                    on: { click: _vm.showImageCropperModal }
                  })
                ],
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "rounded-circle image-edit-icon",
                on: { click: _vm.showImageCropperModal }
              },
              [
                _c("img", {
                  staticClass: "mt-1",
                  attrs: {
                    src: "/images/pencil-icon.png",
                    title: "",
                    height: "15px"
                  }
                })
              ]
            )
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "pt-3 top-left-profile-text pr-0" }, [
          _c("p", { staticClass: "mb-2 company-name truncated" }, [
            _c("strong", [
              _vm._v(
                "Welcome, " +
                  _vm._s(
                    _vm.profileUpdatedData
                      ? _vm.profileUpdatedData.firstName
                      : _vm.firstName
                  )
              )
            ])
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mb-0 company-name truncated" }, [
            _c("strong", [
              _vm._v(
                _vm._s(
                  _vm.profileUpdatedData
                    ? _vm.profileUpdatedData.company
                    : _vm.company
                )
              )
            ])
          ])
        ])
      ]),
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
                            "\n                " +
                              _vm._s(
                                _vm.isUploading ? "Uploading..." : "Save photo"
                              ) +
                              "\n            "
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/settings/ProfileImageSettings.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/settings/ProfileImageSettings.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileImageSettings_vue_vue_type_template_id_297fb174___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileImageSettings.vue?vue&type=template&id=297fb174& */ "./resources/js/components/settings/ProfileImageSettings.vue?vue&type=template&id=297fb174&");
/* harmony import */ var _ProfileImageSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileImageSettings.vue?vue&type=script&lang=js& */ "./resources/js/components/settings/ProfileImageSettings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProfileImageSettings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileImageSettings.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/settings/ProfileImageSettings.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProfileImageSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileImageSettings_vue_vue_type_template_id_297fb174___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileImageSettings_vue_vue_type_template_id_297fb174___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/settings/ProfileImageSettings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/settings/ProfileImageSettings.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/settings/ProfileImageSettings.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileImageSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileImageSettings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/ProfileImageSettings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileImageSettings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/settings/ProfileImageSettings.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/settings/ProfileImageSettings.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileImageSettings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileImageSettings.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/ProfileImageSettings.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileImageSettings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileImageSettings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileImageSettings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileImageSettings_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/settings/ProfileImageSettings.vue?vue&type=template&id=297fb174&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/settings/ProfileImageSettings.vue?vue&type=template&id=297fb174& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileImageSettings_vue_vue_type_template_id_297fb174___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileImageSettings.vue?vue&type=template&id=297fb174& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/settings/ProfileImageSettings.vue?vue&type=template&id=297fb174&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileImageSettings_vue_vue_type_template_id_297fb174___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileImageSettings_vue_vue_type_template_id_297fb174___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);