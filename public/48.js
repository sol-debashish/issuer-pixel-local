(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanySocial.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/EditCompanySocial.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/Questionnnaire */ "./resources/js/apis/Questionnnaire.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Navigation */ "./resources/js/components/Navigation.vue");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Sidebar */ "./resources/js/components/Sidebar.vue");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ProfileCompleteBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ProfileCompleteBanner */ "./resources/js/components/ProfileCompleteBanner.vue");


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








var customValidate = function customValidate(value, vm) {
  if (value != "" && !!vm.url_validate_string) {
    return value.includes(vm.url_validate_string);
  } else {
    return true;
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isLoading: false,
      form: {
        socialMediaPlatform: [],
        non_listed_social_media: [],
        platformUrl: []
      },
      CompanySocialFormData: {
        socialMediaPlatform: [],
        non_listed_social_media: ''
      },
      socialMediaPlatforms: [],
      listOfSocialPlatformId: []
    };
  },
  validations: {
    socialMediaPlatforms: {
      $each: {
        value: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6__["required"],
          url: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_6__["url"],
          customValidate: customValidate
        }
      }
    }
  },
  methods: {
    getSocialMediaPlatformList: function () {
      var _getSocialMediaPlatformList = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", axios.get('/api/social-media-platform').then(function (response) {
                  _this.socialMediaPlatforms = response.data.data;
                })["catch"](function (error) {
                  return console.log(error);
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getSocialMediaPlatformList() {
        return _getSocialMediaPlatformList.apply(this, arguments);
      }

      return getSocialMediaPlatformList;
    }(),
    addMoreSocialMedia: function addMoreSocialMedia() {
      this.form.non_listed_social_media.push({
        name: ''
      });
    },
    removeMoreSocialMedia: function removeMoreSocialMedia(index) {
      this.form.non_listed_social_media.splice(index, 1);
    },
    getStepwiseData: function getStepwiseData() {
      var _this2 = this;

      axios.get('/api/company-questionnaire-data/5/edit').then(function (response) {
        var socialData = response.data.data;
        _this2.form.socialMediaPlatform = socialData.company_social_media_platform;

        _this2.showRelatedSocialField(socialData.company_social_media_platform, 'listOfSocialPlatformId');

        _this2.isLoading = false;
      })["catch"](function (error) {
        _this2.isLoading = false;

        if (error.response.status == 401) {
          _this2.$emit('logout');
        } else {
          toastr.error(error);
        }
      });
    },
    saveCompanySocialData: function saveCompanySocialData(action) {
      var _this3 = this;

      var insertDataArray = [];
      this.$v.socialMediaPlatforms.$touch();

      for (var property in this.socialMediaPlatforms) {
        if (this.listOfSocialPlatformId.includes(this.socialMediaPlatforms[property].id) && this.$v.socialMediaPlatforms.$each[property].$invalid) {
          $('#platform_field_' + this.socialMediaPlatforms[property].id).focus();
          return false;
        }

        if (this.listOfSocialPlatformId.includes(this.socialMediaPlatforms[property].id)) {
          insertDataArray.push([this.$v.socialMediaPlatforms.$each[property].$model.id, this.$v.socialMediaPlatforms.$each[property].$model.value]);
        }
      }

      this.isLoading = true;
      this.CompanySocialFormData.socialMediaPlatform = insertDataArray;
      _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_1__["default"].updateCompanyQuestionnaireData(this.CompanySocialFormData, 5).then(function (response) {
        _this3.isLoading = false;
        _this3.submitButtonDisabled = false;
        toastr.success(response.data.success.message);

        if (action == 'continue') {
          _this3.$router.push({
            name: "AddCompanyTaxonomy"
          });
        } else {
          _this3.$router.push({
            name: "CompanyQuestionnairesDetails",
            'hash': '#social'
          });
        }
      })["catch"](function (error) {
        _this3.isLoading = false;
        _this3.submitButtonDisabled = false;

        if (error.response.status === 422) {
          toastr.error(error.response.data.error.message);
        } else if (error.response.status == 401) {
          _this3.$emit('logout');
        } else {
          toastr.error(error);
        }
      });
    },
    showRelatedSocialField: function showRelatedSocialField(field, list, event) {
      this[list] = Object.keys(field).map(function (key) {
        return field[key].id;
      });
    },
    removePlatform: function removePlatform(id) {
      this.form.socialMediaPlatform = this.form.socialMediaPlatform.filter(function (elem) {
        if (elem.id != id) return elem;
      });
      this.showRelatedSocialField(this.form.socialMediaPlatform, 'listOfSocialPlatformId');
    },
    goBackToPageTopAndNextFieldToEnter: function goBackToPageTopAndNextFieldToEnter() {
      $(document).ready(function () {
        $(this).scrollTop(0);
        $('input, select, textarea').on('keydown', function (e) {
          if (e.keyCode == 13) {
            var focusable = $('input,select, textarea').filter(':visible');
            focusable.eq(focusable.index(this) + 1).focus();
            return false;
          }
        });
      });
    },
    selectHide: function selectHide(option) {
      // console.log(this.listOfSocialPlatformId)
      if (!this.listOfSocialPlatformId.includes(option.id)) return option;
    }
  },
  created: function () {
    var _created = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              this.isLoading = true;
              this.goBackToPageTopAndNextFieldToEnter();
              _context2.next = 4;
              return this.getSocialMediaPlatformList();

            case 4:
              this.getStepwiseData();

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  components: {
    loader: _Loader__WEBPACK_IMPORTED_MODULE_4__["default"],
    sidebar: _Sidebar__WEBPACK_IMPORTED_MODULE_5__["default"],
    Navigation: _Navigation__WEBPACK_IMPORTED_MODULE_3__["default"],
    ProfileCompleteBanner: _ProfileCompleteBanner__WEBPACK_IMPORTED_MODULE_7__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanySocial.vue?vue&type=style&index=0&id=584ef71a&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/EditCompanySocial.vue?vue&type=style&index=0&id=584ef71a&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.platform-remove-button[data-v-584ef71a]{\n    color: red;\n    font-size: 22px;\n    padding-left: 5px;\n}\n.social-icon-group[data-v-584ef71a] {\n    border-color: #ced4da;\n    border-right: 0;\n    cursor: auto !important;\n    height: 37px;\n}\n.social-icon-group i[data-v-584ef71a]{\n    font-size: 18px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanySocial.vue?vue&type=style&index=0&id=584ef71a&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/EditCompanySocial.vue?vue&type=style&index=0&id=584ef71a&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditCompanySocial.vue?vue&type=style&index=0&id=584ef71a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanySocial.vue?vue&type=style&index=0&id=584ef71a&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanySocial.vue?vue&type=template&id=584ef71a&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/company/EditCompanySocial.vue?vue&type=template&id=584ef71a&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
            _c(
              "div",
              { staticClass: "col p-5" },
              [
                _c("profile-complete-banner"),
                _vm._v(" "),
                _c("h2", { staticClass: "text-center" }, [
                  _vm._v("Edit Social Presence")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row company-profile-container" }, [
                  _c("div", { staticClass: "col-md-7 mx-auto" }, [
                    _c(
                      "div",
                      { staticClass: "panel-body" },
                      [
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c(
                              "label",
                              { staticClass: "control-label font-weight-bold" },
                              [
                                _vm._v(
                                  "Select all platforms your company has\n                                    a presence on"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("v-select", {
                              attrs: {
                                label: "name",
                                multiple: "",
                                selectable: _vm.selectHide,
                                options: _vm.socialMediaPlatforms,
                                clearable: false,
                                placeholder: "None"
                              },
                              on: {
                                input: function($event) {
                                  return _vm.showRelatedSocialField(
                                    $event,
                                    "listOfSocialPlatformId",
                                    "manual"
                                  )
                                }
                              },
                              model: {
                                value: _vm.form.socialMediaPlatform,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "socialMediaPlatform", $$v)
                                },
                                expression: "form.socialMediaPlatform"
                              }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm._l(
                          _vm.$v.socialMediaPlatforms.$each.$iter,
                          function(platform, platformIndex) {
                            return [
                              _vm.listOfSocialPlatformId.includes(
                                platform.$model.id
                              )
                                ? _c("div", { staticClass: "form-group row" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "control-label font-weight-bold col-md-2"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(platform.$model.name) + ":"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "input-group col-md-10" },
                                      [
                                        platform.$model.icon_class
                                          ? _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "input-group-prepend"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "btn social-icon-group"
                                                  },
                                                  [
                                                    "scoop" ==
                                                    platform.$model
                                                      .url_validate_string
                                                      ? _c(
                                                          "div",
                                                          {
                                                            staticStyle: {
                                                              height: "18px",
                                                              width: "18px"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "svg",
                                                              {
                                                                attrs: {
                                                                  "enable-background":
                                                                    "new 0 0 128 128",
                                                                  id:
                                                                    "Social_Icons",
                                                                  version:
                                                                    "1.1",
                                                                  viewBox:
                                                                    "0 0 128 128",
                                                                  "xml:space":
                                                                    "preserve",
                                                                  xmlns:
                                                                    "http://www.w3.org/2000/svg",
                                                                  "xmlns:xlink":
                                                                    "http://www.w3.org/1999/xlink"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "g",
                                                                  {
                                                                    attrs: {
                                                                      id:
                                                                        "_x32__stroke"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "g",
                                                                      {
                                                                        attrs: {
                                                                          id:
                                                                            "Scoopit"
                                                                        }
                                                                      },
                                                                      [
                                                                        _c(
                                                                          "rect",
                                                                          {
                                                                            attrs: {
                                                                              "clip-rule":
                                                                                "evenodd",
                                                                              fill:
                                                                                "none",
                                                                              "fill-rule":
                                                                                "evenodd",
                                                                              height:
                                                                                "128",
                                                                              width:
                                                                                "128"
                                                                            }
                                                                          }
                                                                        ),
                                                                        _c(
                                                                          "path",
                                                                          {
                                                                            attrs: {
                                                                              "clip-rule":
                                                                                "evenodd",
                                                                              d:
                                                                                "M83.622,90.814h16.529v15.89H83.622V90.814z     M44.126,20.568c-4.682,0.051-11.6,0.042-16.277,0l-0.028,14.168h16.291L44.126,20.568z M69.044,20.568l-16.553-0.009    l0.023,21.856L27.756,42.41l0.037,32.14l0.005,32.177h16.436l-0.047-52.974l8.295-0.005l-0.019,38.027    c0,1.919,0.117,3.833,0.364,5.737c0.686,5.471,3.025,8.295,8.108,9.304c5.602,1.111,11.992,0.537,17.612-0.065l0.023-11.32    c-0.378,0.009-3.776,0.009-4.15,0c-3.646-0.126-5.326-1.667-5.345-5.317L69.03,53.744l9.537,0.005l0.005-11.283l-9.551-0.005    L69.044,20.568z M83.617,38.605l2.259,44.441c3.3-0.065,8.762-0.047,12.062-0.014l2.236-44.585l0.042-17.893H83.608L83.617,38.605    z M0,128V0h128v128H0z",
                                                                              fill:
                                                                                "#000000",
                                                                              "fill-rule":
                                                                                "evenodd",
                                                                              id:
                                                                                "Scoopit_1_"
                                                                            }
                                                                          }
                                                                        )
                                                                      ]
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      : "tiktok" ==
                                                        platform.$model
                                                          .url_validate_string
                                                      ? _c(
                                                          "svg",
                                                          {
                                                            attrs: {
                                                              xmlns:
                                                                "http://www.w3.org/2000/svg",
                                                              "xmlns:xlink":
                                                                "http://www.w3.org/1999/xlink",
                                                              "aria-hidden":
                                                                "true",
                                                              focusable:
                                                                "false",
                                                              width: "16px",
                                                              height: "16px",
                                                              preserveAspectRatio:
                                                                "xMidYMid meet",
                                                              viewBox:
                                                                "0 0 32 32"
                                                            }
                                                          },
                                                          [
                                                            _c("path", {
                                                              attrs: {
                                                                d:
                                                                  "M16.708.027C18.453 0 20.188.016 21.921 0c.105 2.041.839 4.12 2.333 5.563c1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-.063-3.855-.463-5.6-1.291c-.76-.344-1.468-.787-2.161-1.24c-.009 3.896.016 7.787-.025 11.667c-.104 1.864-.719 3.719-1.803 5.255c-1.744 2.557-4.771 4.224-7.88 4.276c-1.907.109-3.812-.411-5.437-1.369C4.307 29.027 2.412 26.12 2.136 23a22.3 22.3 0 0 1-.016-1.984c.24-2.537 1.495-4.964 3.443-6.615c2.208-1.923 5.301-2.839 8.197-2.297c.027 1.975-.052 3.948-.052 5.923c-1.323-.428-2.869-.308-4.025.495a4.618 4.618 0 0 0-1.819 2.333c-.276.676-.197 1.427-.181 2.145c.317 2.188 2.421 4.027 4.667 3.828c1.489-.016 2.916-.88 3.692-2.145c.251-.443.532-.896.547-1.417c.131-2.385.079-4.76.095-7.145c.011-5.375-.016-10.735.025-16.093z",
                                                                fill: "#626262"
                                                              }
                                                            })
                                                          ]
                                                        )
                                                      : _c("i", {
                                                          class:
                                                            platform.$model
                                                              .icon_class
                                                        })
                                                  ]
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model.trim",
                                              value: platform.value.$model,
                                              expression:
                                                "platform.value.$model",
                                              modifiers: { trim: true }
                                            }
                                          ],
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid": platform.$error
                                          },
                                          attrs: {
                                            type: "text",
                                            id:
                                              "platform_field_" +
                                              platform.$model.id,
                                            placeholder: "Please Enter URL",
                                            autocomplete: "off"
                                          },
                                          domProps: {
                                            value: platform.value.$model
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                platform.value,
                                                "$model",
                                                $event.target.value.trim()
                                              )
                                            },
                                            blur: function($event) {
                                              return _vm.$forceUpdate()
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "input-group-append" },
                                          [
                                            _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "platform-remove-button",
                                                attrs: { href: "javascript:;" },
                                                on: {
                                                  click: function($event) {
                                                    return _vm.removePlatform(
                                                      platform.$model.id
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "fas fa-minus-circle"
                                                })
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        !platform.value.required
                                          ? _c(
                                              "div",
                                              {
                                                staticClass: "invalid-feedback"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                            " +
                                                    _vm._s(
                                                      platform.$model.name
                                                    ) +
                                                    " is required.\n                                        "
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        !platform.value.url
                                          ? _c(
                                              "div",
                                              {
                                                staticClass: "invalid-feedback"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                            Invalid url.\n                                        "
                                                )
                                              ]
                                            )
                                          : !platform.value.customValidate
                                          ? _c(
                                              "div",
                                              {
                                                staticClass: "invalid-feedback"
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                            Please provide related url.\n                                        "
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  ])
                                : _vm._e()
                            ]
                          }
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass:
                                  "btn btn-back-next btn-profile-edit",
                                attrs: {
                                  link: "",
                                  to: {
                                    name: "CompanyQuestionnairesDetails",
                                    hash: "#social"
                                  }
                                }
                              },
                              [_vm._v("Cancel")]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "float-right" }, [
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-back-next btn-profile-edit",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.saveCompanySocialData("close")
                                    }
                                  }
                                },
                                [_vm._v("Save and Close")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-back-next btn-profile-edit",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.saveCompanySocialData(
                                        "continue"
                                      )
                                    }
                                  }
                                },
                                [_vm._v("Save and Continue")]
                              )
                            ])
                          ],
                          1
                        )
                      ],
                      2
                    )
                  ])
                ])
              ],
              1
            )
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

/***/ "./resources/js/apis/Common.js":
/*!*************************************!*\
  !*** ./resources/js/apis/Common.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  dateConvert: function dateConvert(str) {
    var date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  },
  hierarchyNodeColor: function hierarchyNodeColor(level) {
    switch (level) {
      case 'industry':
        return '#FFC42E';

      case 'sector':
        return '#23B9DA';

      case 'subSector':
        return '#7E32D1';

      case 'group':
        return '#30174B';

      case 'subGroup':
        return '#268C8C';

      case 'echelon':
        return '#C00BAA';

      case 'subEchelon':
        return '#3851CD';

      case 'tier':
        return '#2A8BF2';

      case 'subTier':
        return '#707C97';

      case 'layer':
        return '#761B70';

      case 'subLayer':
        return '#A4C639';

      case 'deck':
        return '#FF9E00';

      case 'subDeck':
        return '#FF61F6';

      case 'floor':
        return '#60A9F6';

      case 'subFloor':
        return '#8A878D';

      case 'basement':
        return '#001479';

      case 'subBasement':
        return '#000000';

      case 'mine':
        return '#CF78AC';

      case 'subMine':
        return '#FF8B59';
    }
  },
  calculateProfileStepsPercentage: function calculateProfileStepsPercentage(internalPercentage, completedPercentage) {
    return Math.ceil(completedPercentage * 100 / internalPercentage);
  },
  ViewListenNumFormatter: function ViewListenNumFormatter(num) {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 thousands
    } else if (num >= 1000000 && num < 1000000000) {
      return (num / 1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million
    } else if (num >= 1000000000 && num < 1000000000000) {
      return (num / 1000000000).toFixed(1) + 'B'; // convert to B for number from > 1 billion
    } else if (num >= 1000000000000) {
      return (num / 1000000000000).toFixed(1) + 'T'; // convert to T for number from > 1 trillion
    } else if (num <= 999) {
      return num; // if value < 1000, nothing to do
    }
  },
  populateDayListOfDate: function populateDayListOfDate(date) {
    var dayList = [];
    var selectedYear = new Date(date).getFullYear();
    var selectedMonth = new Date(date).getMonth();
    var currentYear = new Date().getFullYear();
    var currentMonth = new Date().getMonth();
    var totalDays = new Date(selectedYear, selectedMonth + 1, 0).getDate();

    if (selectedYear == currentYear && selectedMonth == currentMonth) {
      totalDays = new Date().getDate();
    }

    for (var index = 1; index <= totalDays; index++) {
      dayList[index] = index;
    }

    return dayList;
  }
});

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

/***/ "./resources/js/components/company/EditCompanySocial.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/company/EditCompanySocial.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditCompanySocial_vue_vue_type_template_id_584ef71a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditCompanySocial.vue?vue&type=template&id=584ef71a&scoped=true& */ "./resources/js/components/company/EditCompanySocial.vue?vue&type=template&id=584ef71a&scoped=true&");
/* harmony import */ var _EditCompanySocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditCompanySocial.vue?vue&type=script&lang=js& */ "./resources/js/components/company/EditCompanySocial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EditCompanySocial_vue_vue_type_style_index_0_id_584ef71a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditCompanySocial.vue?vue&type=style&index=0&id=584ef71a&scoped=true&lang=css& */ "./resources/js/components/company/EditCompanySocial.vue?vue&type=style&index=0&id=584ef71a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EditCompanySocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditCompanySocial_vue_vue_type_template_id_584ef71a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditCompanySocial_vue_vue_type_template_id_584ef71a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "584ef71a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/company/EditCompanySocial.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/company/EditCompanySocial.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/company/EditCompanySocial.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanySocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditCompanySocial.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanySocial.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanySocial_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/company/EditCompanySocial.vue?vue&type=style&index=0&id=584ef71a&scoped=true&lang=css&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/company/EditCompanySocial.vue?vue&type=style&index=0&id=584ef71a&scoped=true&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanySocial_vue_vue_type_style_index_0_id_584ef71a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditCompanySocial.vue?vue&type=style&index=0&id=584ef71a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanySocial.vue?vue&type=style&index=0&id=584ef71a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanySocial_vue_vue_type_style_index_0_id_584ef71a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanySocial_vue_vue_type_style_index_0_id_584ef71a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanySocial_vue_vue_type_style_index_0_id_584ef71a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanySocial_vue_vue_type_style_index_0_id_584ef71a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/company/EditCompanySocial.vue?vue&type=template&id=584ef71a&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/company/EditCompanySocial.vue?vue&type=template&id=584ef71a&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanySocial_vue_vue_type_template_id_584ef71a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EditCompanySocial.vue?vue&type=template&id=584ef71a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/company/EditCompanySocial.vue?vue&type=template&id=584ef71a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanySocial_vue_vue_type_template_id_584ef71a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditCompanySocial_vue_vue_type_template_id_584ef71a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);