(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DocumentUpload.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DocumentUpload.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Navigation.vue */ "./resources/js/components/Navigation.vue");
/* harmony import */ var _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apis/Questionnnaire */ "./resources/js/apis/Questionnnaire.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Sidebar */ "./resources/js/components/Sidebar.vue");
/* harmony import */ var _apis_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apis/User */ "./resources/js/apis/User.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      isLoading: false,
      isDragging: false,
      dragCount: 0,
      document: '',
      form: {},
      submitButtonDisabled: false
    };
  },
  methods: {
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
      this.addFile(e.target.files);
    },
    onDrop: function onDrop(e) {
      e.preventDefault();
      e.stopPropagation();
      this.isDragging = false;
      this.addFile(e.dataTransfer.files);
    },
    addFile: function addFile(files) {
      if (!!files) {
        var fileExtention = files[0].name.split('.').pop();

        if (fileExtention == 'xls' || fileExtention == 'xlsx' || fileExtention == 'pdf' || fileExtention == 'txt' || fileExtention == 'doc' || fileExtention == 'docx') {
          toastr.info('Audio Selected!');
          this.document = files[0];
          var template = files[0].name;
          $('#results').html(template);
        } else {
          toastr.error('File type not supported, file must be in the format of xls/xlsx/pdf/txt/doc/docx');
        }
      }
    },
    startUpload: function startUpload() {
      var nothingToUpload = $('[data-nothingToUpload]');

      if (this.document) {
        // this.isLoading = true
        var config = {
          headers: {
            'content-type': 'multipart/form-data'
          }
        };
        var formData = new FormData();
        formData.append('file', this.file); // this.submitButtonDisabled = true;

        toastr.success('successfully uploaded'); // Questionnnaire.uploadDocument(formData, config)
        //     .then((response) => {
        //         this.isLoading = false
        //         this.submitButtonDisabled = false;
        //         toastr.success(response.data.success.message)
        //     })
        //     .catch(error => {
        //         this.isLoading = false
        //         this.submitButtonDisabled = false;
        //         if (error.response.status === 422) {
        //             toastr.error(error.response.data.error.message)
        //         } else if (error.response.status == 401) {
        //             this.$emit('logout')
        //         } else {
        //             toastr.error(error)
        //         }
        //     });
      } else {
        nothingToUpload.fadeIn();
        setTimeout(function () {
          nothingToUpload.fadeOut();
        }, 3000);
      }
    }
  },
  created: function created() {},
  components: {
    loader: _components_Loader__WEBPACK_IMPORTED_MODULE_2__["default"],
    sidebar: _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__["default"],
    Navigation: _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DocumentUpload.vue?vue&type=style&index=0&id=6d80204a&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DocumentUpload.vue?vue&type=style&index=0&id=6d80204a&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".upload-title[data-v-6d80204a] {\n  margin-top: 30px;\n}\ndiv[data-nothingToUpload][data-v-6d80204a] {\n  display: none;\n}\n.uploader[data-v-6d80204a] {\n  width: 100%;\n  padding: 40px 15px;\n  text-align: center;\n  border-radius: 5px;\n  border: 2px dashed #b0a1a1;\n  font-size: 20px;\n  position: relative;\n}\n.uploader.dragging[data-v-6d80204a] {\n  background: #fff;\n  color: #2196F3;\n  border: 3px dashed #2196F3;\n}\n.uploader.dragging .file-input label[data-v-6d80204a] {\n  background: #2196F3;\n  color: #fff;\n}\n.uploader label[data-v-6d80204a] {\n  margin-top: 10px;\n  color: #fff;\n}\n.uploader i[data-v-6d80204a] {\n  font-size: 85px;\n}\n.uploader .file-input[data-v-6d80204a] {\n  width: 200px;\n  margin: auto;\n  height: 68px;\n  position: relative;\n}\n.uploader .file-input label[data-v-6d80204a],\n.uploader .file-input input[data-v-6d80204a] {\n  color: #fff;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 10px;\n  border-radius: 4px;\n  margin-top: 7px;\n}\n.uploader .file-input input[data-v-6d80204a] {\n  opacity: 0;\n  z-index: -2;\n}\n.uploader .images-preview[data-v-6d80204a] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n.uploader .images-preview .img-wrapper[data-v-6d80204a] {\n  width: 160px;\n  display: flex;\n  flex-direction: column;\n  margin: 10px;\n  height: 150px;\n  justify-content: space-between;\n  background: #fff;\n  box-shadow: 5px 5px 20px #3e3737;\n}\n.uploader .images-preview .img-wrapper img[data-v-6d80204a] {\n  max-height: 105px;\n}\n.uploader .images-preview .details[data-v-6d80204a] {\n  font-size: 12px;\n  background: #fff;\n  color: #000;\n  display: flex;\n  flex-direction: column;\n  align-items: self-start;\n  padding: 3px 6px;\n}\n.uploader .images-preview .details .name[data-v-6d80204a] {\n  overflow: hidden;\n  height: 18px;\n}\n.uploader .upload-control[data-v-6d80204a] {\n  position: absolute;\n  width: 100%;\n  background: #fff;\n  top: 0;\n  left: 0;\n  border-top-left-radius: 7px;\n  border-top-right-radius: 7px;\n  padding: 10px;\n  padding-bottom: 4px;\n  text-align: right;\n}\n.uploader .upload-control button[data-v-6d80204a], .uploader .upload-control label[data-v-6d80204a] {\n  background: #2196F3;\n  border: 2px solid #03A9F4;\n  border-radius: 3px;\n  color: #fff;\n  font-size: 15px;\n  cursor: pointer;\n}\n.uploader .upload-control label[data-v-6d80204a] {\n  padding: 2px 5px;\n  margin-right: 10px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DocumentUpload.vue?vue&type=style&index=0&id=6d80204a&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DocumentUpload.vue?vue&type=style&index=0&id=6d80204a&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./DocumentUpload.vue?vue&type=style&index=0&id=6d80204a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DocumentUpload.vue?vue&type=style&index=0&id=6d80204a&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DocumentUpload.vue?vue&type=template&id=6d80204a&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/DocumentUpload.vue?vue&type=template&id=6d80204a&scoped=true& ***!
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
    "div",
    { staticClass: "home" },
    [
      _c("Navigation"),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid px-0" }, [
        _c(
          "div",
          {
            staticClass:
              "row collapse show no-gutters d-flex h-100 position-relative"
          },
          [
            _c("sidebar"),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-9 pl-lg-5" }, [
              _c("h2", { staticClass: "text-center upload-title" }, [
                _vm._v("Document Upload")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col" }, [
                _c("div", { staticClass: "large-12 columns mx-auto mb-4" }, [
                  _c(
                    "div",
                    {
                      staticClass: "uploader",
                      class: { dragging: _vm.isDragging },
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
                      _c("header", [_vm._v("Drag and drop audio")]),
                      _vm._v(" "),
                      _c("header", [_vm._v("to upload")]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group mb-1" }, [
                        _c("label", { staticClass: "btn btn-info" }, [
                          _c("input", {
                            ref: "document",
                            staticStyle: { display: "None" },
                            attrs: {
                              type: "file",
                              name: "document",
                              id: "document",
                              accept: ".xls,.xlsx,.pdf,.txt,.docx,.doc"
                            },
                            on: { change: _vm.onInputChange }
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v("Or choose files")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "h5 font-weight-bold",
                        attrs: { id: "results" }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-center mt-1 font-italic" }, [
                    _vm._v(
                      'After selecting your\n                                file press "Upload" to upload the file'
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-center" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-success px-5 video-upload-button",
                        attrs: { type: "button" },
                        on: { click: _vm.startUpload }
                      },
                      [
                        _vm._v(
                          "\n                                    Upload File\n                                "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "alert-box alert",
                        attrs: { "data-nothingToUpload": "" }
                      },
                      [
                        _vm._v(
                          "Error Nothing To Upload, Please\n                                    Add File\n                                "
                        )
                      ]
                    )
                  ])
                ])
              ])
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("loader", { attrs: { "is-visible": _vm.isLoading } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/apis/Questionnnaire.js":
/*!*********************************************!*\
  !*** ./resources/js/apis/Questionnnaire.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  uploadAudio: function uploadAudio(form, config) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/audio-questionnaire", form, config);
  },
  videoFormValidate: function videoFormValidate(form) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/video-form-validate", form);
  },
  taxonomyDataStore: function taxonomyDataStore(form) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/taxonomy-data-store", form);
  },

  /*Video questionnaires Step 1 Data edit and Update*/
  getStep1VideoData: function getStep1VideoData(id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/video-step1/".concat(id, "/edit"));
  },
  saveStep1VideoData: function saveStep1VideoData(form, id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().put("/video-step1/".concat(id), form);
  },

  /*Video questionnaires Step 2 Data edit and Update*/
  getStep2VideoData: function getStep2VideoData(id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/dacast-video-step2/".concat(id, "/edit"));
  },
  saveStep2VideoData: function saveStep2VideoData(form, id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().put("/dacast-video-step2/".concat(id), form);
  },
  updateVideoInfoData: function updateVideoInfoData(form, id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().put("/update-video-info/".concat(id), form);
  },
  updateAudioInfoData: function updateAudioInfoData(form, id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().put("/update-audio-info/".concat(id), form);
  },

  /*Audio questionnaires Step 1 Data edit and Update*/
  getStep1AudioData: function getStep1AudioData(id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/audio-step1/".concat(id, "/edit"));
  },
  saveStep1AudioData: function saveStep1AudioData(form, id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().put("/audio-step1/".concat(id), form);
  },

  /*Audio questionnaires Step 2 Data edit and Update*/
  getStep2AudioData: function getStep2AudioData(id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/audio-step2/".concat(id, "/edit"));
  },
  saveStep2AudioData: function saveStep2AudioData(form, id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().put("/audio-step2/".concat(id), form);
  },
  updateCompanyQuestionnaireData: function updateCompanyQuestionnaireData(form, id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().put("/company-questionnaire-data/".concat(id), form);
  },
  leadershipAndGovernenceFormData: function leadershipAndGovernenceFormData(form, id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/company-questionnaire-data/".concat(id), form);
  },
  updateLeadershipAndGovernenceFormData: function updateLeadershipAndGovernenceFormData(form, id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/company-questionnaire-data/".concat(id), form);
  },
  updateMediaFormData: function updateMediaFormData(form) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/update-media-form-data", form);
  },
  companyIconUpload: function companyIconUpload(form) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/company-icon-upload", form);
  },
  deleteLagMember: function deleteLagMember(id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])()["delete"]("/delete-lag-member/" + id, {
      params: {
        type: 'member'
      }
    });
  },
  getCompanyQuestionnaireData: function getCompanyQuestionnaireData(id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/company-questionnaire-data/".concat(id, "/edit"));
  },
  getSocialMediaPlatformData: function getSocialMediaPlatformData() {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/social-media-platform");
  },
  getLeadershipAndGovernanceRoles: function getLeadershipAndGovernanceRoles(roleType) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get('/leadership-and-goverrance-roles?roleType=' + roleType);
  }
});

/***/ }),

/***/ "./resources/js/views/DocumentUpload.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/DocumentUpload.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DocumentUpload_vue_vue_type_template_id_6d80204a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocumentUpload.vue?vue&type=template&id=6d80204a&scoped=true& */ "./resources/js/views/DocumentUpload.vue?vue&type=template&id=6d80204a&scoped=true&");
/* harmony import */ var _DocumentUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DocumentUpload.vue?vue&type=script&lang=js& */ "./resources/js/views/DocumentUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DocumentUpload_vue_vue_type_style_index_0_id_6d80204a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DocumentUpload.vue?vue&type=style&index=0&id=6d80204a&lang=scss&scoped=true& */ "./resources/js/views/DocumentUpload.vue?vue&type=style&index=0&id=6d80204a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DocumentUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DocumentUpload_vue_vue_type_template_id_6d80204a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DocumentUpload_vue_vue_type_template_id_6d80204a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6d80204a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/DocumentUpload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/DocumentUpload.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/DocumentUpload.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DocumentUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DocumentUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/DocumentUpload.vue?vue&type=style&index=0&id=6d80204a&lang=scss&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/DocumentUpload.vue?vue&type=style&index=0&id=6d80204a&lang=scss&scoped=true& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentUpload_vue_vue_type_style_index_0_id_6d80204a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./DocumentUpload.vue?vue&type=style&index=0&id=6d80204a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DocumentUpload.vue?vue&type=style&index=0&id=6d80204a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentUpload_vue_vue_type_style_index_0_id_6d80204a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentUpload_vue_vue_type_style_index_0_id_6d80204a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentUpload_vue_vue_type_style_index_0_id_6d80204a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentUpload_vue_vue_type_style_index_0_id_6d80204a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/DocumentUpload.vue?vue&type=template&id=6d80204a&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/DocumentUpload.vue?vue&type=template&id=6d80204a&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentUpload_vue_vue_type_template_id_6d80204a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DocumentUpload.vue?vue&type=template&id=6d80204a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/DocumentUpload.vue?vue&type=template&id=6d80204a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentUpload_vue_vue_type_template_id_6d80204a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DocumentUpload_vue_vue_type_template_id_6d80204a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);