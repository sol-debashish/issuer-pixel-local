(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FileDetectionUpload.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FileDetectionUpload.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var resumablejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resumablejs */ "./node_modules/resumablejs/resumable.js");
/* harmony import */ var resumablejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(resumablejs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_AudioVideo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apis/AudioVideo */ "./resources/js/apis/AudioVideo.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      r: null,
      resumbleUploading: false,
      uploadIsDisabled: true
    };
  },
  props: ['resumble', 'resumbleUploadCompleted'],
  methods: {
    startUpload: function startUpload() {
      var nothingToUpload = $('[data-nothingToUpload]');

      if ($('#results').children().length > 0) {
        window.onbeforeunload = function () {
          return "A XHR request is pending, are you sure you want to leave ?";
        };

        this.r.files.forEach(function (file, i) {
          file.fileName = file.fileName.split('.').slice(0, -1).join('.').replace(/[^a-zA-Z0-9\s]/g, "-");
        });
        this.r.upload();
        this.$emit('setVideoUploaderState', this.r);
        this.$router.push({
          name: "Content"
        });
        toastr.success("You're now being redirected to your content library where you can activate your content");
      } else {
        nothingToUpload.fadeIn();
        setTimeout(function () {
          nothingToUpload.fadeOut();
        }, 3000);
      }
    },
    pauseUpload: function pauseUpload() {
      if (this.r.files.length > 0) {
        if (this.r.isUploading()) {
          return this.r.pause();
        }

        return this.r.upload();
      }
    }
  },
  mounted: function mounted() {
    this.resumbleUploading = false;

    if (!!this.resumble && this.resumble.isUploading()) {
      this.resumbleUploading = true;
    }

    this.r = new resumablejs__WEBPACK_IMPORTED_MODULE_0___default.a({
      // Use chunk size that is smaller than your maximum limit due a resumable issue
      // https://github.com/23/resumable.js/issues/51
      chunkSize: 1 * 1024 * 1024,
      // 1MB
      simultaneousUploads: 1,
      maxFiles: 20,
      maxFileSize: 500 * 1024 * 1024,
      testChunks: false,
      throttleProgressCallbacks: 1,
      fileType: ['webm', 'mkv', 'flv', 'vob', 'avi', 'mov', 'wmv', 'mp4', 'm4p', 'm4v', 'mpg', 'mpeg', 'm4a', 'flac', 'mp3', 'wav', 'wma', 'acc'],
      fileTypeErrorCallback: function fileTypeErrorCallback(file, errorCount) {
        toastr.error('Warning, Issuer Pixel supports webm/mkv/flv/vob/avi/mov/wmv/mp4/m4p/m4v/mpg/mpeg /m4a/flac/mp3/wav/wma/acc. Please select a supported file, thank you!');
      },
      maxFilesErrorCallback: function maxFilesErrorCallback() {
        $.confirm({
          title: '',
          content: "Please upload no more than 20 files at a time.",
          columnClass: 'medium',
          type: 'blue',
          typeAnimated: true,
          buttons: {
            OK: function OK() {}
          }
        });
      },
      // Get the url from data-url tag
      //target:'/media-upload',
      target: '/api/media-file-upload',
      // Append token to the request - required for web routes
      query: {
        _token: document.querySelector('meta[name="csrf-token"]').content,
        Accept: 'application/json'
      },
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem("token")
      }
    });
    var draggable = $('#drag-area'),
        browseButton = $('#browseButton');
    this.r.assignBrowse(browseButton);
    this.r.assignDrop(draggable);
    var vm = this;
    this.r.on('fileAdded', function (file, event) {
      var template = '<div class="added-media-file" data-uniqueid="' + file.uniqueIdentifier + '">' + '<div class="fileName">' + file.fileName + ' (' + file.file.type + ')' + '</div>' + '<div class="deleteFile"><i class="far fa-times-circle"></i></div>' + '</div>';
      $('#results').append(template);
      toastr.info('Media File Selected!');
      vm.uploadIsDisabled = false;
    });
    this.r.on('uploadStart', function () {});
    this.r.on('fileSuccess', function (file) {});
    this.r.on('progress', function () {});
    this.r.on('error', function (e) {});
    this.r.on('pause', function () {});
    $(document).on('click', '.deleteFile', function () {
      var self = $(this),
          parent = self.parent(),
          identifier = parent.data('uniqueid'),
          file = vm.r.getFromUniqueIdentifier(identifier);
      vm.r.removeFile(file);
      parent.remove();

      if ($('#results').children().length < 1) {
        vm.uploadIsDisabled = true;
      }
    });
  },
  components: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FileDetectionUpload.vue?vue&type=template&id=6431a97b&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FileDetectionUpload.vue?vue&type=template&id=6431a97b& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    { staticClass: "dashboard pt-0 media-file-upload-section" },
    [
      _c("div", { staticClass: "row" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-8 offset-md-2 grid-margin" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "col" }, [
                _c("div", { staticClass: "large-12 columns mx-auto" }, [
                  _c(
                    "div",
                    {
                      staticClass: "panel drop-zone drag-area",
                      attrs: { id: "drag-area" }
                    },
                    [
                      _vm.resumbleUploading && !_vm.resumbleUploadCompleted
                        ? _c(
                            "div",
                            { staticClass: "p-3 mb-2 bg-danger text-white" },
                            [
                              _c("h2", [
                                _vm._v(
                                  "Please wait for complete previous upload"
                                )
                              ])
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "header",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                !_vm.resumbleUploading ||
                                _vm.resumbleUploadCompleted,
                              expression:
                                "!resumbleUploading || resumbleUploadCompleted"
                            }
                          ],
                          staticClass: "text-theme-dark-blue"
                        },
                        [_vm._v("Drag and drop video/audio to upload")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                !_vm.resumbleUploading ||
                                _vm.resumbleUploadCompleted,
                              expression:
                                "!resumbleUploading || resumbleUploadCompleted"
                            }
                          ],
                          staticClass: "btn btn-info px-5",
                          attrs: { id: "browseButton" }
                        },
                        [
                          _c("i", { staticClass: "fas fa-cloud-upload-alt" }),
                          _vm._v(" "),
                          _vm._v(
                            "\n                                        Choose File from Computer\n                                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value:
                                !_vm.resumbleUploading ||
                                _vm.resumbleUploadCompleted,
                              expression:
                                "!resumbleUploading || resumbleUploadCompleted"
                            }
                          ],
                          staticClass: "mt-2 mb-2"
                        },
                        [
                          _c(
                            "p",
                            { staticClass: "text-theme-dark-blue fs-16" },
                            [
                              _vm._v(
                                "Issuer Pixel supports webm, mkv, flv, vob, avi, mov, wmv, mp4, m4p, mpg, mpeg,\n                                            m4a, flac, mp3, wav, wma, acc"
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "panel",
                        attrs: { id: "results" }
                      })
                    ]
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "p",
            { staticClass: "text-center mt-3 font-italic upload-notice" },
            [
              _vm._v(
                '\n                After selecting your file press "Upload Video/Audio" to upload the file\n            '
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "text-center" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-secondary px-5 video-upload-button",
                attrs: { type: "button", disabled: _vm.uploadIsDisabled },
                on: { click: _vm.startUpload }
              },
              [
                _c("i", { staticClass: "fas fa-cloud-upload-alt" }),
                _vm._v("  Upload Video/Audio\n                ")
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
                  "Error Nothing To Upload, Please\n                    Add File\n                "
                )
              ]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-md-12 grid-margin text-center font-weight-bold" },
      [
        _c("h4", { staticClass: "text-theme-dark-blue font-weight-bold" }, [
          _vm._v("Video/Audio upload")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "d-block mb-2 fs-16 text-theme-dark-blue" }, [
          _vm._v(
            "\n                You can upload up to 20 files at a time. Once you’ve uploaded your files you can then categorize them and add additional details.\n            "
          )
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/apis/AudioVideo.js":
/*!*****************************************!*\
  !*** ./resources/js/apis/AudioVideo.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  getMediaCategorizationLooupIdByUuid: function getMediaCategorizationLooupIdByUuid(uuid) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/get-media-categorization-lookupid-by-uuid/" + uuid);
  },
  updateVideoThumbnail: function updateVideoThumbnail(data, id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/update-video-thumb/" + id, data);
  }
});

/***/ }),

/***/ "./resources/js/views/FileDetectionUpload.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/FileDetectionUpload.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileDetectionUpload_vue_vue_type_template_id_6431a97b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileDetectionUpload.vue?vue&type=template&id=6431a97b& */ "./resources/js/views/FileDetectionUpload.vue?vue&type=template&id=6431a97b&");
/* harmony import */ var _FileDetectionUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileDetectionUpload.vue?vue&type=script&lang=js& */ "./resources/js/views/FileDetectionUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileDetectionUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileDetectionUpload_vue_vue_type_template_id_6431a97b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileDetectionUpload_vue_vue_type_template_id_6431a97b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/FileDetectionUpload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/FileDetectionUpload.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/FileDetectionUpload.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileDetectionUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FileDetectionUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FileDetectionUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileDetectionUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/FileDetectionUpload.vue?vue&type=template&id=6431a97b&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/FileDetectionUpload.vue?vue&type=template&id=6431a97b& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileDetectionUpload_vue_vue_type_template_id_6431a97b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FileDetectionUpload.vue?vue&type=template&id=6431a97b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FileDetectionUpload.vue?vue&type=template&id=6431a97b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileDetectionUpload_vue_vue_type_template_id_6431a97b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileDetectionUpload_vue_vue_type_template_id_6431a97b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);