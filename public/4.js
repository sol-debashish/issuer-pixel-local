(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Loader.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    text: {
      type: String,
      required: false,
      "default": ""
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      activeClass: 'active',
      isDisabled: false,
      isUploading: false,
      isCollapse: false,
      linkGrayOut: ''
    };
  },
  mounted: function mounted() {
    if (localStorage.getItem('videoUploadRemainingDays') == 0 && localStorage.getItem('isVideoUploaded') == 'no') {
      this.linkGrayOut = 'trialExpired';
    }
  },
  props: ["videoStep", "videoProgressStep", "audioStep", "audioProgressStep"],
  methods: {
    changeCollapse: function changeCollapse() {
      if (this.isCollapse) {
        this.isCollapse = false;
      } else {
        this.isCollapse = true;
      }
    },
    goToMediaUploadStep: function goToMediaUploadStep(step, type) {
      if (type == 'video') {
        if (step == 1 && this.videoStep != 1) {
          this.$parent.setPreviousStepDataFromSidebarStep1();
        } else if (step == 2 && this.videoStep != 2) {
          this.$parent.setPreviousStepDataFromSidebarStep2();
        } else if (step == 3 && this.videoStep != 3) {
          this.$parent.updateFormData();
        }
      } else if (type == 'audio') {
        if (step == 1 && this.audioStep != 1) {
          this.$parent.setPreviousStepDataFromSidebarStep1();
        } else if (step == 2 && this.audioStep != 2) {
          this.$parent.setPreviousStepDataFromSidebarStep2();
        } else if (step == 3 && this.audioStep != 3) {
          this.$parent.updateFormData();
        }
      }

      this.$parent.step = step;
      this.$parent.progressBarActiveInactive(step);
    }
  },
  computed: {
    currentPage: function currentPage() {
      return this.$route.name;
    }
  },
  created: function created() {
    if (this.currentPage.match('PersonalizedNewsIndustry') || this.currentPage.match('PersonalizedNewsNode')) {
      this.isCollapse = true;
    }
  },
  components: {
    ProfileImageSettings: function ProfileImageSettings() {
      return __webpack_require__.e(/*! import() */ 20).then(__webpack_require__.bind(null, /*! ../components/settings/ProfileImageSettings */ "./resources/js/components/settings/ProfileImageSettings.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Loader.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loader-overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 999;\n  cursor: pointer;\n}\n.loader-overlay span.text {\n  display: inline-block;\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: #fff;\n}\n.loader-overlay .loader {\n  -webkit-animation: loader-animate 1.5s linear infinite;\n          animation: loader-animate 1.5s linear infinite;\n  clip: rect(0, 80px, 80px, 40px);\n  height: 80px;\n  width: 80px;\n  position: absolute;\n  left: calc(50% - 40px);\n  top: calc(50% - 40px);\n}\n.loader-overlay .loader:after {\n  -webkit-animation: loader-animate-after 1.5s ease-in-out infinite;\n          animation: loader-animate-after 1.5s ease-in-out infinite;\n  clip: rect(0, 80px, 80px, 40px);\n  content: \"\";\n  border-radius: 50%;\n  height: 80px;\n  width: 80px;\n  position: absolute;\n}\n@-webkit-keyframes loader-animate {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(220deg);\n}\n}\n@keyframes loader-animate {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(220deg);\n}\n}\n@-webkit-keyframes loader-animate-after {\n0% {\n    box-shadow: inset #fff 0 0 0 17px;\n    transform: rotate(-140deg);\n}\n50% {\n    box-shadow: inset #fff 0 0 0 2px;\n}\n100% {\n    box-shadow: inset #fff 0 0 0 17px;\n    transform: rotate(140deg);\n}\n}\n@keyframes loader-animate-after {\n0% {\n    box-shadow: inset #fff 0 0 0 17px;\n    transform: rotate(-140deg);\n}\n50% {\n    box-shadow: inset #fff 0 0 0 2px;\n}\n100% {\n    box-shadow: inset #fff 0 0 0 17px;\n    transform: rotate(140deg);\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*#image-cropper-modal___BV_modal_content_ {\n    background: black !important;;\n    color: white;\n}\n\n#image-cropper-modal___BV_modal_content_ .modal-title {\n    margin-left: initial;\n}\n\n#image-cropper-modal___BV_modal_content_ .close {\n    color: #ffffff;\n}\n\n#image-cropper-modal___BV_modal_footer_ .btn-default {\n    background-color: #ffffff;\n}\n\n#image-cropper-modal___BV_modal_header_ {\n    border-bottom: 1px solid #484e53;\n}\n\n#image-cropper-modal___BV_modal_footer_ {\n    border-top: 1px solid #484e53;\n}\n\n.cropper-view-box {\n    box-shadow: 0 0 0 1px #39f;\n    border-radius: 50%;\n    outline: 0;\n}\n\n.cropper-face {\n    background-color: inherit !important;\n}\n\n.cropper-view-box {\n    outline: inherit !important;\n}*/\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Loader.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader.vue?vue&type=template&id=e79ec684&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Loader.vue?vue&type=template&id=e79ec684& ***!
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
  return _vm.isVisible
    ? _c("div", { staticClass: "loader-overlay" }, [
        _c("div", { staticClass: "loader" }),
        _vm._v(" "),
        _c("span", {
          staticClass: "text",
          domProps: { innerHTML: _vm._s(_vm.text) }
        })
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e& ***!
  \**********************************************************************************************************************************************************************************************************/
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
    {
      staticClass:
        "col-lg-2 issuer-dashboard-sidebar p-0 h-100 w-sidebar sidebar"
    },
    [
      _c(
        "div",
        {
          staticClass:
            "position-fixed h-100 align-self-start w-sidebar fixed-sidebar-dashboard"
        },
        [
          _c(
            "ul",
            {
              staticClass: "nav flex-column flex-nowrap text-left",
              attrs: { id: "navAccordion" }
            },
            [
              _c(
                "li",
                { staticClass: "nav-item", class: _vm.linkGrayOut },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      class: _vm.currentPage.match("Dashboard")
                        ? _vm.activeClass
                        : "",
                      attrs: { to: { name: "Dashboard" } }
                    },
                    [_vm._v("Dashboard\n                    ")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      class: _vm.currentPage.match("Content")
                        ? _vm.activeClass
                        : "",
                      attrs: { to: { name: "Content" } }
                    },
                    [_vm._v("Manage Content\n                    ")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "nav-item", class: _vm.linkGrayOut },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      class: _vm.currentPage.match(
                        "CompanyQuestionnairesDetails"
                      )
                        ? _vm.activeClass
                        : "",
                      attrs: { to: { name: "CompanyQuestionnairesDetails" } }
                    },
                    [
                      _vm._v(
                        "Manage\n                        Company Profile\n                    "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item", class: _vm.linkGrayOut }, [
                _c(
                  "a",
                  {
                    staticClass: "nav-link nav-link-collapse",
                    attrs: {
                      href: "#",
                      id: "hasSubItems",
                      "data-toggle": "collapse",
                      "data-target": "#collapsePersonalizedNews",
                      "aria-controls": "collapsePersonalizedNews",
                      "aria-expanded":
                        _vm.currentPage.match("PersonalizedNewsIndustry") ||
                        _vm.currentPage.match("PersonalizedNewsNode")
                          ? "true"
                          : "false"
                    },
                    on: { click: _vm.changeCollapse }
                  },
                  [
                    _vm._v("Personalized News "),
                    _c("i", {
                      staticClass: "float-right mt-1 fa",
                      class: {
                        "fa-plus": !_vm.isCollapse,
                        "fa-minus": _vm.isCollapse
                      }
                    })
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass: "nav-second-level collapse list-unstyled",
                    class:
                      _vm.currentPage.match("PersonalizedNewsIndustry") ||
                      _vm.currentPage.match("PersonalizedNewsNode")
                        ? "show"
                        : "",
                    attrs: {
                      id: "collapsePersonalizedNews",
                      "data-parent": "#navAccordion"
                    }
                  },
                  [
                    _c(
                      "li",
                      { staticClass: "nav-item pl-3", class: _vm.linkGrayOut },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "nav-link",
                            class: _vm.currentPage.match(
                              "PersonalizedNewsIndustry"
                            )
                              ? _vm.activeClass
                              : "",
                            attrs: { to: { name: "PersonalizedNewsIndustry" } }
                          },
                          [
                            _vm._v(
                              "Industry\n                                + Location\n                            "
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      { staticClass: "nav-item pl-3", class: _vm.linkGrayOut },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "nav-link",
                            class: _vm.currentPage.match("PersonalizedNewsNode")
                              ? _vm.activeClass
                              : "",
                            attrs: { to: { name: "PersonalizedNewsNode" } }
                          },
                          [
                            _vm._v(
                              "Node +\n                                Location\n                            "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "nav-item bg-gray", class: _vm.linkGrayOut },
                [
                  _c(
                    "router-link",
                    { staticClass: "nav-link", attrs: { to: { name: "" } } },
                    [_vm._v("Analytics (Coming Soon)")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "nav-item", class: _vm.linkGrayOut },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link nav-link-collapse",
                      class: _vm.currentPage.match("videoQuestionnaire")
                        ? _vm.activeClass
                        : "",
                      attrs: {
                        to: { name: "videoQuestionnaire" },
                        id: "hasVideoSubItems",
                        "data-target": "#collapseVideoUpload",
                        "aria-controls": "collapseVideoUpload",
                        "aria-expanded": _vm.currentPage.match(
                          "videoQuestionnaire"
                        )
                          ? "true"
                          : "false"
                      }
                    },
                    [_vm._v("Video Upload\n                    ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    {
                      staticClass: "nav-second-level collapse list-unstyled",
                      class: _vm.currentPage.match("videoQuestionnaire")
                        ? "show"
                        : "",
                      attrs: {
                        id: "collapseVideoUpload",
                        "data-parent": "#navAccordion"
                      }
                    },
                    [
                      _c(
                        "li",
                        {
                          staticClass: "nav-item pl-3",
                          class: _vm.videoProgressStep < 1 ? "bg-gray" : "",
                          linkGrayOut: _vm.linkGrayOut
                        },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-link",
                              attrs: { to: { name: "" } },
                              nativeOn: {
                                click: function($event) {
                                  return _vm.goToMediaUploadStep(1, "video")
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                Classification\n                            "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass: "nav-item pl-3",
                          class: _vm.videoProgressStep < 2 ? "bg-gray" : "",
                          linkGrayOut: _vm.linkGrayOut
                        },
                        [
                          _vm.videoProgressStep < 2
                            ? _c(
                                "router-link",
                                {
                                  staticClass: "nav-link",
                                  attrs: { to: { name: "" } }
                                },
                                [
                                  _vm._v(
                                    "Video Detail\n                            "
                                  )
                                ]
                              )
                            : _c(
                                "router-link",
                                {
                                  staticClass: "nav-link",
                                  attrs: { to: { name: "" } },
                                  nativeOn: {
                                    click: function($event) {
                                      return _vm.goToMediaUploadStep(2, "video")
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "Video Detail\n                            "
                                  )
                                ]
                              )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass: "nav-item pl-3",
                          class: _vm.videoProgressStep < 3 ? "bg-gray" : "",
                          linkGrayOut: _vm.linkGrayOut
                        },
                        [
                          _vm.videoProgressStep < 3
                            ? _c(
                                "router-link",
                                {
                                  staticClass: "nav-link",
                                  attrs: { to: { name: "" } }
                                },
                                [
                                  _vm._v(
                                    "Upload Video\n                            "
                                  )
                                ]
                              )
                            : _c(
                                "router-link",
                                {
                                  staticClass: "nav-link",
                                  attrs: { to: { name: "" } },
                                  nativeOn: {
                                    click: function($event) {
                                      return _vm.goToMediaUploadStep(3, "video")
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "Upload Video\n                            "
                                  )
                                ]
                              )
                        ],
                        1
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "nav-item", class: _vm.linkGrayOut },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link nav-link-collapse",
                      class: _vm.currentPage.match("audioQuestionnaire")
                        ? _vm.activeClass
                        : "",
                      attrs: {
                        to: { name: "audioQuestionnaire" },
                        id: "hasAudioSubItems",
                        "data-target": "#collapseAudioUpload",
                        "aria-controls": "collapseAudioUpload",
                        "aria-expanded": _vm.currentPage.match(
                          "audioQuestionnaire"
                        )
                          ? "true"
                          : "false"
                      }
                    },
                    [_vm._v("Audio Upload\n                    ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "ul",
                    {
                      staticClass: "nav-second-level collapse list-unstyled",
                      class: _vm.currentPage.match("audioQuestionnaire")
                        ? "show"
                        : "",
                      attrs: {
                        id: "collapseAudioUpload",
                        "data-parent": "#navAccordion"
                      }
                    },
                    [
                      _c(
                        "li",
                        {
                          staticClass: "nav-item pl-3",
                          class: _vm.audioProgressStep < 1 ? "bg-gray" : "",
                          linkGrayOut: _vm.linkGrayOut
                        },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "nav-link",
                              attrs: { to: { name: "" } },
                              nativeOn: {
                                click: function($event) {
                                  return _vm.goToMediaUploadStep(1, "audio")
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                Classification\n                            "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass: "nav-item pl-3",
                          class: _vm.audioProgressStep < 2 ? "bg-gray" : "",
                          linkGrayOut: _vm.linkGrayOut
                        },
                        [
                          _vm.audioProgressStep < 2
                            ? _c(
                                "router-link",
                                {
                                  staticClass: "nav-link",
                                  attrs: { to: { name: "" } }
                                },
                                [
                                  _vm._v(
                                    "Audio Detail\n                            "
                                  )
                                ]
                              )
                            : _c(
                                "router-link",
                                {
                                  staticClass: "nav-link",
                                  attrs: { to: { name: "" } },
                                  nativeOn: {
                                    click: function($event) {
                                      return _vm.goToMediaUploadStep(2, "audio")
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "Audio Detail\n                            "
                                  )
                                ]
                              )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          staticClass: "nav-item pl-3",
                          class: _vm.audioProgressStep < 3 ? "bg-gray" : "",
                          linkGrayOut: _vm.linkGrayOut
                        },
                        [
                          _vm.audioProgressStep < 3
                            ? _c(
                                "router-link",
                                {
                                  staticClass: "nav-link",
                                  attrs: { to: { name: "" } }
                                },
                                [
                                  _vm._v(
                                    "Upload Audio\n                            "
                                  )
                                ]
                              )
                            : _c(
                                "router-link",
                                {
                                  staticClass: "nav-link",
                                  attrs: { to: { name: "" } },
                                  nativeOn: {
                                    click: function($event) {
                                      return _vm.goToMediaUploadStep(3, "audio")
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "Upload Audio\n                            "
                                  )
                                ]
                              )
                        ],
                        1
                      )
                    ]
                  )
                ],
                1
              )
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Loader.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Loader.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loader_vue_vue_type_template_id_e79ec684___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader.vue?vue&type=template&id=e79ec684& */ "./resources/js/components/Loader.vue?vue&type=template&id=e79ec684&");
/* harmony import */ var _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.vue?vue&type=script&lang=js& */ "./resources/js/components/Loader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Loader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/Loader.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Loader_vue_vue_type_template_id_e79ec684___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Loader_vue_vue_type_template_id_e79ec684___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Loader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Loader.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Loader.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Loader.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Loader.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Loader.vue?vue&type=template&id=e79ec684&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Loader.vue?vue&type=template&id=e79ec684& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_e79ec684___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=template&id=e79ec684& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Loader.vue?vue&type=template&id=e79ec684&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_e79ec684___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_e79ec684___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Sidebar.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Sidebar.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=81fbb27e& */ "./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/js/components/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Sidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/Sidebar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Sidebar.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Sidebar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Sidebar.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Sidebar.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=template&id=81fbb27e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Sidebar.vue?vue&type=template&id=81fbb27e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_81fbb27e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);