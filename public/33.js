(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AudioStepTwoEdit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AudioStepTwoEdit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/Questionnnaire */ "./resources/js/apis/Questionnnaire.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apis_Common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../apis/Common */ "./resources/js/apis/Common.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      publicationMaxDate: new Date(),
      isLoading: false,
      submitButtonDisabled: false,
      name: "",
      publicationDate: "",
      publishDay: "",
      publishDays: [],
      recodingDate: "",
      recodingDay: "",
      recodingDays: [],
      mediaPresenter: "",
      otherMediaPresenter: "",
      showOtherMediaPresenterField: false,
      mediaSubType: "",
      subTypeTag: "",
      subjectType: "",
      subjectTypeTag: "",
      podcastGuest: "",
      podcastSeriesName: "",
      description: "",
      mediaSubTypes: [],
      subjectTypes: [],
      subjectTypeIds: [],
      mediaPresenterTypes: [],
      mediaPresenterTypeIds: [],
      podcastGuestTypes: [],
      audioFormData: {
        name: '',
        publicationDate: '',
        publishDay: "",
        recodingDate: "",
        recodingDay: "",
        mediaPresenter: "",
        otherMediaPresenter: "",
        mediaSubType: "",
        subjectType: "",
        podcastGuest: "",
        podcastSeriesName: "",
        description: "",
        _token: ""
      }
    };
  },
  validations: {
    name: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
    },
    publicationDate: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
      minValue: function minValue(value) {
        return value >= new Date(1970, 0, 1);
      },
      maxValue: function maxValue(value) {
        return value <= new Date();
      }
    },
    recodingDate: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
      minValue: function minValue(value) {
        return value >= new Date(1970, 0, 1);
      },
      maxValue: function maxValue(value) {
        return value <= new Date();
      }
    },
    mediaPresenter: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
    },
    otherMediaPresenter: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
    },
    mediaSubType: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
    },
    subjectType: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
    },
    podcastGuest: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
    },
    description: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
    }
  },
  methods: {
    getmediaSubTypes: function getmediaSubTypes() {
      var _this = this;

      axios.get('/api/get-media-sub-type/1').then(function (response) {
        _this.mediaSubTypes = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getSubjectTypes: function getSubjectTypes() {
      var _this2 = this;

      axios.get('/api/get-subject-type/1').then(function (response) {
        _this2.subjectTypes = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getMediaPresenterType: function getMediaPresenterType() {
      var _this3 = this;

      axios.get('/api/get-media-presenter-type/1').then(function (response) {
        _this3.mediaPresenterTypes = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getPodcastGuestTypes: function getPodcastGuestTypes() {
      var _this4 = this;

      axios.get('/api/get-podcast-guest').then(function (response) {
        _this4.podcastGuestTypes = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    setSubTypeTag: function setSubTypeTag(value) {
      this.podcastSeriesName = '';
      this.podcastGuest = '';

      if (null != value) {
        this.subTypeTag = value.tag;
      }
    },
    setSubjectTypeTag: function setSubjectTypeTag(value) {
      this.subjectTypeIds = Object.keys(value).map(function (key) {
        return value[key].id;
      });

      if (value.length > 5) {
        value.pop();
      }

      this.subjectTypeTag = ''; // if (e.target.options.selectedIndex > -1) {
      //     const theTarget = e.target.options[e.target.options.selectedIndex].dataset;
      //     this.subjectTypeTag = theTarget.tag
      // }
    },
    setMediaPresenter: function setMediaPresenter(value) {
      this.mediaPresenterTypeIds = Object.keys(value).map(function (key) {
        return value[key].id;
      });

      if (value.length > 5) {
        value.pop();
      }

      if (value.length < 1) {
        this.showOtherMediaPresenterField = false;
      }

      this.otherMediaPresenter = '';

      if (!this.showOtherMediaPresenterField && value.find(function (o) {
        return o.name === "Other";
      })) {
        this.showOtherMediaPresenterField = true;
        this.mediaPresenter = [{
          name: "Other",
          "id": 13
        }];
        this.mediaPresenterTypeIds = [3];
      } else if (this.showOtherMediaPresenterField && value.find(function (o) {
        return o.name === "Other";
      })) {
        this.showOtherMediaPresenterField = false;

        if (this.mediaPresenterTypeIds.length == 2) {
          this.mediaPresenter = value.slice(1);
          this.mediaPresenterTypeIds.splice(0, 1);
        } else {
          this.mediaPresenter = [{
            name: "Other",
            "id": 13
          }];
          this.mediaPresenterTypeIds = ["3"];
        }
      } // this.showOtherMediaPresenterField = false
      // this.otherMediaPresenter =''
      // if ('Other' == value.name) {
      //     this.showOtherMediaPresenterField = true
      // }

    },
    getStep2AudioData: function getStep2AudioData() {
      var _this5 = this;

      _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_0__["default"].getStep2AudioData(this.$route.params.id).then(function (response) {
        // console.log(response.data.data.media_presenter)
        _this5.isLoading = false;
        _this5.name = response.data.data.name;
        _this5.publicationDate = response.data.data.publication_date ? new Date(Date.parse(response.data.data.publication_date.replace(/[-]/g, '/'))) : "";
        _this5.publishDays = _apis_Common__WEBPACK_IMPORTED_MODULE_5__["default"].populateDayListOfDate(_this5.publicationDate);
        _this5.publishDay = response.data.data.published_day;

        if (!!response.data.data.recording_date) {
          _this5.recodingDate = response.data.data.recording_date ? new Date(Date.parse(response.data.data.recording_date.replace(/[-]/g, '/'))) : "";
          _this5.recodingDays = _apis_Common__WEBPACK_IMPORTED_MODULE_5__["default"].populateDayListOfDate(_this5.recodingDate);
        }

        _this5.recodingDay = response.data.data.recording_day;
        _this5.mediaPresenter = response.data.data.media_presenter;

        _this5.showRelatedField(response.data.data.media_presenter, 'mediaPresenterTypeIds');

        _this5.mediaSubType = response.data.data.media_sub_type;
        _this5.subjectType = response.data.data.subject_type;

        _this5.showRelatedField(response.data.data.subject_type, 'subjectTypeIds');

        _this5.otherMediaPresenter = response.data.data.other_media_presenter;

        if (!!response.data.data.other_media_presenter) {
          _this5.showOtherMediaPresenterField = true;
        } // console.log(response.data.data.media_sub_type.tag)


        if (!!response.data.data.media_sub_type && 'prodcast' == response.data.data.media_sub_type.tag) {
          _this5.subTypeTag = 'prodcast';
          _this5.podcastGuest = response.data.data.podcast_guest;
          _this5.podcastSeriesName = response.data.data.podcast_series_name;
        }

        _this5.description = response.data.data.description;
      })["catch"](function (error) {
        _this5.submitButtonDisabled = false;
        _this5.isLoading = false;

        if (error.response.status == 401) {
          _this5.$emit('logout');
        } else {
          toastr.error(error);
        }
      });
    },
    saveStep2AudioData: function saveStep2AudioData() {
      var _this6 = this;

      this.$v.name.$touch();
      this.$v.publicationDate.$touch();
      this.$v.recodingDate.$touch();
      this.$v.description.$touch();
      this.$v.subjectType.$touch();
      this.$v.mediaSubType.$touch();
      this.$v.mediaPresenter.$touch();

      if (this.showOtherMediaPresenterField) {
        this.$v.otherMediaPresenter.$touch();
      }

      if (this.subTypeTag == 'prodcast') {
        this.$v.podcastGuest.$touch();
      }

      if (this.$v.name.$invalid || this.$v.publicationDate.$invalid || this.$v.recodingDate.$invalid || this.$v.description.$invalid || this.$v.mediaPresenter.$invalid || this.$v.mediaSubType.$invalid || this.showOtherMediaPresenterField && this.$v.otherMediaPresenter.$invalid || this.$v.subjectType.$invalid || this.subTypeTag == 'prodcast' && this.$v.podcastGuest.$invalid) {
        if (this.$v.name.$invalid) {
          this.$refs.name.focus();
        } else if (this.$v.publicationDate.$invalid) {
          $('#publicationDate').focus();
        } else if (this.$v.recodingDate.$invalid) {
          $('#recodingDate').focus();
        } else if (this.$v.mediaPresenter.$invalid) {
          this.$refs.mediaPresenter.$el.querySelector('input').focus();
        } else if (this.showOtherMediaPresenterField && this.$v.otherMediaPresenter.$invalid) {
          this.$refs.otherMediaPresenter.focus();
        } else if (this.$v.subjectType.$invalid) {
          this.$refs.subjectType.$el.querySelector('input').focus();
        } else if (this.subTypeTag == 'prodcast' && this.$v.podcastGuest.$invalid) {
          this.$refs.podcastGuest.$el.querySelector('input').focus();
        } else if (this.$v.description.$invalid) {
          this.$refs.description.focus();
        }

        return false;
      }

      this.audioFormData.name = this.name;
      this.audioFormData.publicationDate = this.dateConvert(this.publicationDate);
      this.audioFormData.publishDay = this.publishDay;
      this.audioFormData.recodingDate = this.dateConvert(this.recodingDate);
      this.audioFormData.recodingDay = this.recodingDay; // this.audioFormData.mediaPresenter = this.mediaPresenter.id;

      this.audioFormData.showOtherMediaPresenterField = this.showOtherMediaPresenterField;
      this.audioFormData.otherMediaPresenter = this.otherMediaPresenter;
      this.audioFormData.mediaSubType = this.mediaSubType.id; // this.audioFormData.subjectType = (null != this.subjectType) ? this.subjectType.id: null;

      var mediaPresenterOptions = [];

      for (var mp = 0; mp < this.mediaPresenter.length; mp++) {
        mediaPresenterOptions.push(this.mediaPresenter[mp].id);
      }

      this.audioFormData.mediaPresenter = mediaPresenterOptions.join(',');
      var subjectTypeOptions = [];

      for (var sto = 0; sto < this.subjectType.length; sto++) {
        subjectTypeOptions.push(this.subjectType[sto].id);
      }

      this.audioFormData.subjectType = subjectTypeOptions.join(',');
      this.audioFormData.subjectTypeTag = this.subjectTypeTag;
      this.audioFormData.podcastGuest = this.podcastGuest.id;
      this.audioFormData.podcastSeriesName = this.podcastSeriesName;
      this.audioFormData.description = this.description;
      this.audioFormData._token = document.querySelector('meta[name="csrf-token"]').content;
      this.isLoading = true;
      _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_0__["default"].saveStep2AudioData(this.audioFormData, this.$route.params.id).then(function (response) {
        _this6.isLoading = false;
        _this6.submitButtonDisabled = false;
        toastr.success(response.data.success.message);

        _this6.$router.push({
          name: "Content",
          'hash': '#audio'
        });
      })["catch"](function (error) {
        _this6.isLoading = false;
        _this6.submitButtonDisabled = false;

        if (error.response.status === 422) {
          toastr.error(error.response.data.error.message);
        } else if (error.response.status == 401) {
          _this6.$emit('logout');
        } else {
          toastr.error(error);
        }
      });
    },
    editCancel: function editCancel() {
      this.$router.push({
        name: 'Content',
        'hash': '#audio'
      });
    },
    showRelatedField: function showRelatedField(field, list) {
      this[list] = Object.keys(field).map(function (key) {
        return field[key].id;
      });
    },
    mediaPresenterTypeSelectedHide: function mediaPresenterTypeSelectedHide(option) {
      if (!this.mediaPresenterTypeIds.includes(option.id)) return option;
    },
    subjectTypeSelectedHide: function subjectTypeSelectedHide(option) {
      if (!this.subjectTypeIds.includes(option.id)) return option;
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
    dateSelected: function dateSelected() {
      var _this7 = this;

      this.$nextTick(function () {
        _this7.publishDay = "";
        _this7.publishDays = _apis_Common__WEBPACK_IMPORTED_MODULE_5__["default"].populateDayListOfDate(_this7.publicationDate);
      });
    },
    recodingDateSelected: function recodingDateSelected() {
      var _this8 = this;

      this.$nextTick(function () {
        _this8.recodingDay = "";
        _this8.recodingDays = _apis_Common__WEBPACK_IMPORTED_MODULE_5__["default"].populateDayListOfDate(_this8.recodingDate);
      });
    }
  },
  created: function created() {
    this.dateConvert = _apis_Common__WEBPACK_IMPORTED_MODULE_5__["default"].dateConvert;
    this.isLoading = true;
    this.goBackToPageTopAndNextFieldToEnter();
    this.getmediaSubTypes();
    this.getSubjectTypes();
    this.getMediaPresenterType();
    this.getPodcastGuestTypes();
    this.getStep2AudioData();
  },
  components: {
    loader: _components_Loader__WEBPACK_IMPORTED_MODULE_1__["default"],
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_2__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_4___default.a
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AudioStepTwoEdit.vue?vue&type=template&id=61a4df73&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AudioStepTwoEdit.vue?vue&type=template&id=61a4df73& ***!
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
    "section",
    { staticClass: "dashboard pt-0" },
    [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-10 offset-md-1 grid-margin" }, [
          _c("h4", { staticClass: "pb-2 text-theme-dark-blue" }, [
            _vm._v("Audio Details")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "row register-container" }, [
                _c("div", { staticClass: "col-md-8 mx-auto mb-5" }, [
                  _c(
                    "div",
                    { staticClass: "panel-body" },
                    [
                      _c("div", { staticClass: "form-group" }, [
                        _vm._m(0),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.name,
                              expression: "name"
                            }
                          ],
                          ref: "name",
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.$v.name.$error },
                          attrs: {
                            type: "text",
                            maxlength: "500",
                            placeholder:
                              "Type in Audio Title - Maximum 500 characters"
                          },
                          domProps: { value: _vm.name },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.name = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        !_vm.$v.name.required
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v("Audio title is required.")
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-7" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _vm._m(1),
                              _vm._v(" "),
                              _c("datepicker", {
                                class: {
                                  "is-invalid": _vm.$v.publicationDate.$error
                                },
                                attrs: {
                                  "input-class": "form-control",
                                  name: "publicationDate",
                                  id: "publicationDate",
                                  "disabled-dates": {
                                    to: new Date(1970, 0, 1),
                                    from: new Date()
                                  },
                                  typeable: false,
                                  "minimum-view": "month",
                                  format: "MM/yyyy",
                                  placeholder: "MM/YYYY"
                                },
                                on: {
                                  selected: function($event) {
                                    return _vm.dateSelected()
                                  },
                                  input: function($event) {
                                    return _vm.$v.publicationDate.$touch()
                                  }
                                },
                                model: {
                                  value: _vm.publicationDate,
                                  callback: function($$v) {
                                    _vm.publicationDate = $$v
                                  },
                                  expression: "publicationDate"
                                }
                              }),
                              _vm._v(" "),
                              !_vm.$v.publicationDate.required
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [_vm._v("Publication date is required.")]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              !_vm.$v.publicationDate.minValue
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      _vm._v(
                                        "The publication date must be a date after or equal to 01-01-1970."
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              !_vm.$v.publicationDate.maxValue
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      _vm._v(
                                        "The publication date must be a date before or equal to " +
                                          _vm._s(_vm.publicationMaxDate) +
                                          "."
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-5" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "control-label font-weight-bold"
                                },
                                [_vm._v("Day")]
                              ),
                              _vm._v(" "),
                              _c("v-select", {
                                attrs: {
                                  label: "name",
                                  options: _vm.publishDays,
                                  clearable: false,
                                  placeholder: "Days (Optional)"
                                },
                                model: {
                                  value: _vm.publishDay,
                                  callback: function($$v) {
                                    _vm.publishDay = $$v
                                  },
                                  expression: "publishDay"
                                }
                              })
                            ],
                            1
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-md-7" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _vm._m(2),
                              _vm._v(" "),
                              _c("datepicker", {
                                class: {
                                  "is-invalid": _vm.$v.recodingDate.$error
                                },
                                attrs: {
                                  "input-class": "form-control",
                                  typeable: false,
                                  name: "recodingDate",
                                  id: "recodingDate",
                                  "minimum-view": "month",
                                  "disabled-dates": {
                                    to: new Date(1970, 0, 1),
                                    from: new Date()
                                  },
                                  format: "MM/yyyy",
                                  placeholder: "MM/YYYY"
                                },
                                on: {
                                  selected: function($event) {
                                    return _vm.recodingDateSelected()
                                  },
                                  input: function($event) {
                                    return _vm.$v.recodingDate.$touch()
                                  }
                                },
                                model: {
                                  value: _vm.recodingDate,
                                  callback: function($$v) {
                                    _vm.recodingDate = $$v
                                  },
                                  expression: "recodingDate"
                                }
                              }),
                              _vm._v(" "),
                              !_vm.$v.recodingDate.required
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      _vm._v(
                                        "Recording month and year is required."
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              !_vm.$v.recodingDate.minValue
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      _vm._v(
                                        "Recording month and year must be a date after or equal to 1/1/1970."
                                      )
                                    ]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              !_vm.$v.recodingDate.maxValue
                                ? _c(
                                    "div",
                                    { staticClass: "invalid-feedback" },
                                    [
                                      _vm._v(
                                        "Recording month and year must be a date before or equal to " +
                                          _vm._s(_vm.publicationMaxDate) +
                                          "."
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-md-5" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "control-label font-weight-bold"
                                },
                                [_vm._v("Day")]
                              ),
                              _vm._v(" "),
                              _c("v-select", {
                                attrs: {
                                  label: "name",
                                  options: _vm.recodingDays,
                                  clearable: false,
                                  placeholder: "Days (Optional)"
                                },
                                model: {
                                  value: _vm.recodingDay,
                                  callback: function($$v) {
                                    _vm.recodingDay = $$v
                                  },
                                  expression: "recodingDay"
                                }
                              })
                            ],
                            1
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _vm._m(3),
                          _vm._v(" "),
                          _c("v-select", {
                            ref: "mediaPresenter",
                            class: {
                              "is-invalid": _vm.$v.mediaPresenter.$error
                            },
                            attrs: {
                              label: "name",
                              multiple: "",
                              options: _vm.mediaPresenterTypes,
                              selectable: _vm.mediaPresenterTypeSelectedHide,
                              clearable: false,
                              placeholder: "Select Below"
                            },
                            on: { input: _vm.setMediaPresenter },
                            model: {
                              value: _vm.mediaPresenter,
                              callback: function($$v) {
                                _vm.mediaPresenter = $$v
                              },
                              expression: "mediaPresenter"
                            }
                          }),
                          _vm._v(" "),
                          !_vm.$v.mediaPresenter.required
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v("Audio Participants is required.")
                              ])
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.showOtherMediaPresenterField
                        ? _c("div", { staticClass: "form-group" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.otherMediaPresenter,
                                  expression: "otherMediaPresenter"
                                }
                              ],
                              ref: "otherMediaPresenter",
                              staticClass: "form-control",
                              class: {
                                "is-invalid": _vm.$v.otherMediaPresenter.$error
                              },
                              attrs: {
                                type: "text",
                                maxlength: "500",
                                placeholder:
                                  "Write Audio Participant - Maximum 500 characters"
                              },
                              domProps: { value: _vm.otherMediaPresenter },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.otherMediaPresenter = $event.target.value
                                }
                              }
                            }),
                            _vm._v(" "),
                            !_vm.$v.otherMediaPresenter.required
                              ? _c("div", { staticClass: "invalid-feedback" }, [
                                  _vm._v("Please Write Audio Participant")
                                ])
                              : _vm._e()
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _vm._m(4),
                          _vm._v(" "),
                          _c("v-select", {
                            class: { "is-invalid": _vm.$v.mediaSubType.$error },
                            attrs: {
                              label: "name",
                              options: _vm.mediaSubTypes,
                              clearable: false,
                              placeholder: "Select Below"
                            },
                            on: { input: _vm.setSubTypeTag },
                            model: {
                              value: _vm.mediaSubType,
                              callback: function($$v) {
                                _vm.mediaSubType = $$v
                              },
                              expression: "mediaSubType"
                            }
                          }),
                          _vm._v(" "),
                          !_vm.$v.mediaSubType.required
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v("Audio Sub Type is required.")
                              ])
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _vm._m(5),
                          _vm._v(" "),
                          _c("v-select", {
                            ref: "subjectType",
                            staticClass: "media-subject-list",
                            class: { "is-invalid": _vm.$v.subjectType.$error },
                            attrs: {
                              label: "name",
                              multiple: "",
                              options: _vm.subjectTypes,
                              selectable: _vm.subjectTypeSelectedHide,
                              clearable: false,
                              placeholder: "Select Below"
                            },
                            on: { input: _vm.setSubjectTypeTag },
                            model: {
                              value: _vm.subjectType,
                              callback: function($$v) {
                                _vm.subjectType = $$v
                              },
                              expression: "subjectType"
                            }
                          }),
                          _vm._v(" "),
                          !_vm.$v.subjectType.required
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _vm._v("Subject of Company Audio is required.")
                              ])
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.subTypeTag == "prodcast"
                        ? [
                            _c(
                              "div",
                              { staticClass: "form-group" },
                              [
                                _c(
                                  "label",
                                  {
                                    staticClass:
                                      "control-label font-weight-bold"
                                  },
                                  [_vm._v("Podcast Guest")]
                                ),
                                _vm._v(" "),
                                _c("v-select", {
                                  ref: "podcastGuest",
                                  class: {
                                    "is-invalid": _vm.$v.podcastGuest.$error
                                  },
                                  attrs: {
                                    label: "name",
                                    options: _vm.podcastGuestTypes,
                                    id: "podcastGuest",
                                    clearable: false,
                                    placeholder: "Select Below"
                                  },
                                  model: {
                                    value: _vm.podcastGuest,
                                    callback: function($$v) {
                                      _vm.podcastGuest = $$v
                                    },
                                    expression: "podcastGuest"
                                  }
                                }),
                                _vm._v(" "),
                                !_vm.$v.podcastGuest.required
                                  ? _c(
                                      "div",
                                      {
                                        staticClass: "invalid-server-feedback"
                                      },
                                      [_vm._v("Podcast guest is required.")]
                                    )
                                  : _vm._e()
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _c(
                                "label",
                                {
                                  staticClass: "control-label font-weight-bold"
                                },
                                [_vm._v("Podcast Series Name")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.podcastSeriesName,
                                    expression: "podcastSeriesName"
                                  }
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  placeholder: "(Name of Podcast Series)"
                                },
                                domProps: { value: _vm.podcastSeriesName },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.podcastSeriesName = $event.target.value
                                  }
                                }
                              })
                            ])
                          ]
                        : void 0,
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _vm._m(6),
                        _vm._v(" "),
                        _c("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.description,
                              expression: "description"
                            }
                          ],
                          staticClass: "form-control",
                          class: { "is-invalid": _vm.$v.description.$error },
                          attrs: {
                            type: "text",
                            maxlength: "1000",
                            placeholder:
                              "Type in Description—Maximum 1000 characters"
                          },
                          domProps: { value: _vm.description },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.description = $event.target.value
                            }
                          }
                        }),
                        _vm._v(" "),
                        !_vm.$v.description.required
                          ? _c("div", { staticClass: "invalid-feedback" }, [
                              _vm._v("Audio description is required.")
                            ])
                          : _vm._e()
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-back-next",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.editCancel.apply(null, arguments)
                            }
                          }
                        },
                        [_vm._v("Cancel")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-back-next float-right",
                          attrs: { disabled: _vm.submitButtonDisabled },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.saveStep2AudioData()
                            }
                          }
                        },
                        [_vm._v("Save")]
                      )
                    ],
                    2
                  )
                ])
              ])
            ])
          ])
        ])
      ]),
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
    return _c("label", { staticClass: "control-label font-weight-bold" }, [
      _vm._v("Audio Title"),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label font-weight-bold" }, [
      _vm._v("Date of audio Published"),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label font-weight-bold" }, [
      _vm._v("Date of Audio Recording"),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label font-weight-bold" }, [
      _vm._v("Audio Participants"),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label font-weight-bold" }, [
      _vm._v("Audio Sub Type"),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label font-weight-bold" }, [
      _vm._v("Subject of Company Audio"),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label font-weight-bold" }, [
      _vm._v("Audio Description"),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  }
]
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

/***/ "./resources/js/views/AudioStepTwoEdit.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/AudioStepTwoEdit.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AudioStepTwoEdit_vue_vue_type_template_id_61a4df73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudioStepTwoEdit.vue?vue&type=template&id=61a4df73& */ "./resources/js/views/AudioStepTwoEdit.vue?vue&type=template&id=61a4df73&");
/* harmony import */ var _AudioStepTwoEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudioStepTwoEdit.vue?vue&type=script&lang=js& */ "./resources/js/views/AudioStepTwoEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AudioStepTwoEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AudioStepTwoEdit_vue_vue_type_template_id_61a4df73___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AudioStepTwoEdit_vue_vue_type_template_id_61a4df73___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/AudioStepTwoEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/AudioStepTwoEdit.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/AudioStepTwoEdit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioStepTwoEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AudioStepTwoEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AudioStepTwoEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioStepTwoEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/AudioStepTwoEdit.vue?vue&type=template&id=61a4df73&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/AudioStepTwoEdit.vue?vue&type=template&id=61a4df73& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioStepTwoEdit_vue_vue_type_template_id_61a4df73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AudioStepTwoEdit.vue?vue&type=template&id=61a4df73& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AudioStepTwoEdit.vue?vue&type=template&id=61a4df73&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioStepTwoEdit_vue_vue_type_template_id_61a4df73___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioStepTwoEdit_vue_vue_type_template_id_61a4df73___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);