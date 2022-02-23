(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AudioAddMeta.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AudioAddMeta.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/Questionnnaire */ "./resources/js/apis/Questionnnaire.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apis_Common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apis/Common */ "./resources/js/apis/Common.js");
/* harmony import */ var _apis_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../apis/User */ "./resources/js/apis/User.js");
/* harmony import */ var _components_AudioVideoHierarchy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AudioVideoHierarchy */ "./resources/js/components/AudioVideoHierarchy.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      /*info related*/
      audioFormData: {
        name: '',
        publicationDate: '',
        publishDay: "",
        recodingDate: "",
        recodingDay: "",
        mediaPresenter: "",
        otherMediaPresenter: "",
        audioCoverType: "",
        mediaSubType: "",
        subjectType: [],
        description: "",
        _token: ""
      },
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
      audioCoverType: "",
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

      /* end info related*/

      /*hierarchy related*/
      taxonomySavedData: "",
      form: {
        industry: "",
        sector: "",
        subSector: "",
        group: "",
        subGroup: "",
        echelon: "",
        subEchelon: "",
        tier: "",
        subTier: "",
        layer: "",
        subLayer: "",
        deck: "",
        subDeck: "",
        floor: "",
        subFloor: "",
        basement: "",
        subBasement: "",
        mine: "",
        subMine: "",
        lookupId: null,
        trackingId: null
      },

      /*end hierarchy related*/
      mediaUuid: this.$route.params.uuid,

      /*suggestion related*/
      suggestion_explanation: '',
      suggestion_reason: '',
      isDisabled: false,

      /*notification related*/
      classificationMessage: "",
      message_body_class: "success",
      dismissSecs: 5,
      dismissCountDown: 0
    };
  },
  validations: {
    /*info related validation */
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
      minValue: function minValue(value) {
        return value >= new Date(1970, 0, 1);
      },
      maxValue: function maxValue(value) {
        return value <= new Date();
      }
    },
    suggestion_explanation: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
    },
    suggestion_reason: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
    }
  },
  methods: {
    /*info related function*/
    mediaPresenterTypeSelectedHide: function mediaPresenterTypeSelectedHide(option) {
      if (!this.mediaPresenterTypeIds.includes(option.id)) return option;
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
    setSubTypeTag: function setSubTypeTag(value) {
      this.podcastSeriesName = '';
      this.podcastGuest = '';

      if (null != value) {
        this.subTypeTag = value.tag;
      }
    },
    subjectTypeSelectedHide: function subjectTypeSelectedHide(option) {
      if (!this.subjectTypeIds.includes(option.id)) return option;
    },
    setSubjectTypeTag: function setSubjectTypeTag(value) {
      this.subjectTypeIds = Object.keys(value).map(function (key) {
        return value[key].id;
      });

      if (value.length > 5) {
        value.pop();
      }

      this.subjectTypeTag = '';

      if (null != value) {
        this.subjectTypeTag = value.tag;
      }
    },
    dateSelected: function dateSelected() {
      var _this = this;

      this.$nextTick(function () {
        _this.publishDay = "";
        _this.publishDays = _apis_Common__WEBPACK_IMPORTED_MODULE_4__["default"].populateDayListOfDate(_this.publicationDate);
      });
    },
    recodingDateSelected: function recodingDateSelected() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.recodingDay = "";
        _this2.recodingDays = _apis_Common__WEBPACK_IMPORTED_MODULE_4__["default"].populateDayListOfDate(_this2.recodingDate);
      });
    },
    getmediaSubTypes: function getmediaSubTypes() {
      var _this3 = this;

      axios.get('/api/get-media-sub-type/1').then(function (response) {
        _this3.mediaSubTypes = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getSubjectTypes: function getSubjectTypes() {
      var _this4 = this;

      axios.get('/api/get-subject-type/1').then(function (response) {
        _this4.subjectTypes = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getMediaPresenterType: function getMediaPresenterType() {
      var _this5 = this;

      axios.get('/api/get-media-presenter-type/1').then(function (response) {
        _this5.mediaPresenterTypes = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getPodcastGuestTypes: function getPodcastGuestTypes() {
      var _this6 = this;

      axios.get('/api/get-podcast-guest').then(function (response) {
        _this6.podcastGuestTypes = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    showRelatedField: function showRelatedField(field, list) {
      this[list] = Object.keys(field).map(function (key) {
        return field[key].id;
      });
    },
    getAudioMetaData: function getAudioMetaData() {
      var _this7 = this;

      _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_0__["default"].getStep2AudioData(this.$route.params.uuid).then(function (response) {
        _this7.isLoading = false;
        var formMetaData = response.data.data;
        _this7.name = formMetaData.name;
        _this7.description = formMetaData.description;

        if (!!formMetaData.publication_date) {
          _this7.publicationDate = new Date(Date.parse(formMetaData.publication_date.replace(/[-]/g, '/')));
          _this7.publishDays = _apis_Common__WEBPACK_IMPORTED_MODULE_4__["default"].populateDayListOfDate(_this7.publicationDate);
        }

        _this7.publishDay = formMetaData.published_day;

        if (!!formMetaData.recording_date) {
          _this7.recodingDate = new Date(Date.parse(formMetaData.recording_date.replace(/[-]/g, '/')));
          _this7.recodingDays = _apis_Common__WEBPACK_IMPORTED_MODULE_4__["default"].populateDayListOfDate(_this7.recodingDate);
        }

        if (!!formMetaData.recording_day) {
          _this7.recodingDay = formMetaData.recording_day;
        }

        if (!!formMetaData.media_presenter) {
          _this7.mediaPresenter = formMetaData.media_presenter;

          _this7.showRelatedField(formMetaData.media_presenter, 'mediaPresenterTypeIds');
        }

        if (!!formMetaData.other_media_presenter) {
          _this7.otherMediaPresenter = formMetaData.other_media_presenter;
          _this7.showOtherMediaPresenterField = true;
        }

        if (!!formMetaData.media_sub_type) {
          _this7.mediaSubType = formMetaData.media_sub_type;

          if ('prodcast' == formMetaData.media_sub_type.tag) {
            _this7.subTypeTag = 'prodcast';
            _this7.podcastGuest = formMetaData.podcast_guest;
            _this7.podcastSeriesName = formMetaData.podcast_series_name;
          }
        }

        if (!!formMetaData.subject_type) {
          _this7.subjectType = formMetaData.subject_type;

          _this7.showRelatedField(formMetaData.subject_type, 'subjectTypeIds');
        }
      })["catch"](function (error) {
        _this7.submitButtonDisabled = false;
        _this7.isLoading = false;

        if (error.response.status == 401) {
          _this7.$emit('logout');
        } else {
          console.log(error);
        }
      });
    },
    saveMediaInfo: function saveMediaInfo() {
      var _this8 = this;

      this.audioFormData.name = this.name;
      this.audioFormData.publicationDate = this.publicationDate ? this.dateConvert(this.publicationDate) : "";
      this.audioFormData.publishDay = this.publishDay;
      this.audioFormData.recodingDate = this.recodingDate ? this.dateConvert(this.recodingDate) : "";
      this.audioFormData.recodingDay = this.recodingDay;
      var mediaPresenterOptions = [];

      for (var mp = 0; mp < this.mediaPresenter.length; mp++) {
        mediaPresenterOptions.push(this.mediaPresenter[mp].id);
      }

      this.audioFormData.mediaPresenter = mediaPresenterOptions.join(',');
      this.audioFormData.otherMediaPresenter = this.otherMediaPresenter;
      this.audioFormData.audioCoverType = this.audioCoverType;
      this.audioFormData.mediaSubType = this.mediaSubType ? this.mediaSubType.id : "";
      var subjectTypeOptions = [];

      for (var sto = 0; sto < this.subjectType.length; sto++) {
        subjectTypeOptions.push(this.subjectType[sto].id);
      }

      this.audioFormData.subjectType = subjectTypeOptions.join(',');
      this.audioFormData.subjectTypeTag = this.subjectTypeTag;
      this.audioFormData.podcastGuest = this.podcastGuest ? this.podcastGuest.id : "";
      this.audioFormData.podcastSeriesName = this.podcastSeriesName;
      this.audioFormData.description = this.description;
      this.submitButtonDisabled = true;
      this.isLoading = true;
      _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_0__["default"].updateAudioInfoData(this.audioFormData, this.$route.params.uuid).then(function (response) {
        _this8.isLoading = false;
        _this8.submitButtonDisabled = false;

        if (response.data.data.status == true) {
          toastr.success(response.data.data.msg);
        } else {
          toastr.error(response.data.data.msg);
        }

        _this8.$router.push({
          name: "Content",
          'hash': '#audio'
        });
      })["catch"](function (error) {
        _this8.isLoading = false;
        _this8.submitButtonDisabled = false;

        if (error.response.status === 422) {
          toastr.error(error.response.data.error.message);
        } else if (error.response.status == 401) {
          _this8.$emit('logout');
        } else {
          console.log(error);
        }
      });
    },

    /*end info related function*/

    /*node related function*/
    TaxonomyData: function TaxonomyData(value) {
      if (value != undefined || value.length != 0) {
        this.form.industry = value[0];
        this.form.sector = value[1];
        this.form.subSector = value[2];
        this.form.group = value[3];
        this.form.subGroup = value[4];
        this.form.echelon = value[5];
        this.form.subEchelon = value[6];
        this.form.tier = value[7];
        this.form.subTier = value[8];
        this.form.layer = value[9];
        this.form.subLayer = value[10];
        this.form.deck = value[11];
        this.form.subDeck = value[12];
        this.form.floor = value[13];
        this.form.subFloor = value[14];
        this.form.basement = value[15];
        this.form.subBasement = value[16];
        this.form.mine = value[17];
        this.form.subMine = value[18];
      }
    },
    saveAndClose: function saveAndClose() {
      if ("" == this.form.industry) {
        if (!this.name || !this.publicationDate || !this.recodingDate || !this.mediaSubType || !this.mediaPresenter || !this.subjectType || !this.description || this.$refs.taxonomyChild.savedCategories.length < 1) {
          var vm = this;
          $.confirm({
            title: '',
            content: "Warning - Video and Audio content can not be published without filling in all content " + "metadata fields. You may save and return to this form at any time.",
            columnClass: 'medium',
            type: 'purple',
            typeAnimated: true,
            buttons: {
              CANCEL: {
                btnClass: 'btn-default rounded-pill',
                action: function action() {}
              },
              SAVE: {
                btnClass: 'btn-success rounded-pill',
                // class for the button
                action: function action() {
                  vm.saveMediaInfo();
                }
              }
            }
          });
        } else {
          this.saveMediaInfo();
        }
      } else {
        if (!this.name || !this.publicationDate || !this.recodingDate || !this.mediaSubType || !this.mediaPresenter || !this.subjectType || !this.description) {
          var vm = this;
          $.confirm({
            title: '',
            content: "Warning - Video and Audio content can not be published without filling in all content " + "metadata fields. You may save and return to this form at any time.",
            columnClass: 'medium',
            type: 'purple',
            typeAnimated: true,
            buttons: {
              CANCEL: {
                btnClass: 'btn-default rounded-pill',
                action: function action() {}
              },
              SAVE: {
                btnClass: 'btn-success rounded-pill',
                // class for the button
                action: function action() {
                  vm.$refs.taxonomyChild.saveHierarchyInfo('finish');
                }
              }
            }
          });
        } else {
          this.$refs.taxonomyChild.saveHierarchyInfo('finish');
        }
      }
    },

    /*end node related function*/
    addSubjectSuggestion: function addSubjectSuggestion() {
      var _this9 = this;

      this.$v.suggestion_explanation.$touch();
      this.$v.suggestion_reason.$touch();

      if (this.$v.suggestion_explanation.$invalid || this.$v.suggestion_reason.$invalid) {
        if (this.$v.suggestion_explanation.$invalid) {
          this.$refs.suggestion_explanation.focus();
        } else if (this.$v.suggestion_reason.$invalid) {
          this.$refs.suggestion_reason.focus();
        }

        return false;
      }

      this.isDisabled = true;
      _apis_User__WEBPACK_IMPORTED_MODULE_5__["default"].mediaSubjectSuggestion({
        media_type: 1,
        explanation: this.suggestion_explanation,
        reason: this.suggestion_reason
      }).then(function (response) {
        if (response.data.success) {
          _this9.$bvModal.hide('modal-add-subject-suggestion');

          _this9.isDisabled = false;
          $.confirm({
            title: '',
            content: "Thank you for your suggestion. We will review your submission and follow up with you within the next few business days.",
            columnClass: 'medium',
            type: 'blue',
            typeAnimated: true,
            buttons: {
              Ok: function Ok() {}
            }
          });
          _this9.suggestion_explanation = '';
          _this9.suggestion_reason = '';

          _this9.$v.$reset();
        }
      })["catch"](function (error) {
        if (error.response.status === 422) {
          toastr.error(error.response.data.error.message);
        } else if (error.response.status == 401) {
          localStorage.clear();

          _this9.$router.push({
            name: "Login"
          });
        } else {
          console.log(error);
        }

        _this9.isDisabled = false;
      });
    },
    cancelSubjectSuggestionModal: function cancelSubjectSuggestionModal() {
      this.$bvModal.hide('modal-add-subject-suggestion');
      this.suggestion_explanation = "";
      this.suggestion_reason = "";
      this.$v.$reset();
    },

    /* notificaiton related function*/
    countDownChanged: function countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAddAnotherClassificationMessage: function showAddAnotherClassificationMessage(response_message, is_alert_show, msg_class_name) {
      if (is_alert_show) {
        //this.showDismissibleAlert = true;
        this.dismissCountDown = this.dismissSecs;
        this.message_body_class = msg_class_name;
        this.classificationMessage = response_message;
      }
    }
  },
  created: function created() {
    this.dateConvert = _apis_Common__WEBPACK_IMPORTED_MODULE_4__["default"].dateConvert;
    this.getmediaSubTypes();
    this.getSubjectTypes();
    this.getMediaPresenterType();
    this.getPodcastGuestTypes();
    this.getAudioMetaData();
  },
  mounted: function mounted() {},
  components: {
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a,
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_2__["default"],
    AudioVideoHierarchy: _components_AudioVideoHierarchy__WEBPACK_IMPORTED_MODULE_6__["default"]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AudioAddMeta.vue?vue&type=template&id=07e78a2f&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AudioAddMeta.vue?vue&type=template&id=07e78a2f& ***!
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
  return _c("section", { staticClass: "dashboard pt-0 audio-meta-section" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-12 grid-margin" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-back-next media-details-page-back-btn",
              attrs: { to: { name: "Content", hash: "#audio" } }
            },
            [
              _c("i", { staticClass: "fas fa-chevron-left" }),
              _vm._v(" Back to Library\n            ")
            ]
          ),
          _vm._v(" "),
          _c("h4", { staticClass: "text-theme-dark-blue mt-2" }, [
            _vm._v("Details and Activation")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-block mb-2 fs-14 text-theme-dark-blue" },
            [
              _vm._v(
                "\n                A detailed industry classification will allow users to find your company and your content more\n                reliably and accurately in their searches. If you do not see a fitting classification, please\n                consider making a suggestion either through Add Suggestion or by leaving Feedback.\n            "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "b-alert",
            {
              attrs: {
                show: _vm.dismissCountDown,
                dismissible: "",
                variant: _vm.message_body_class
              },
              on: {
                dismissed: function($event) {
                  _vm.dismissCountDown = 0
                },
                "dismiss-count-down": _vm.countDownChanged
              }
            },
            [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.classificationMessage) +
                  "\n            "
              )
            ]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "row" },
      [
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-12 grid-margin" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "row state-container" }, [
                    _c("div", { staticClass: "col-md-4 pb-3" }, [
                      _c("fieldset", { staticClass: "mb-5" }, [
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
                              })
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
                                    !_vm.$v.publicationDate.minValue
                                      ? _c(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            _vm._v(
                                              "\n                                                            The publication date must be a date after or equal to\n                                                            01-01-1970.\n                                                        "
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
                                              "\n                                                            The publication date must be a date before or equal to\n                                                            " +
                                                _vm._s(_vm.publicationMaxDate) +
                                                ".\n                                                        "
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
                                        staticClass:
                                          "control-label font-weight-bold"
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
                                    !_vm.$v.recodingDate.minValue
                                      ? _c(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            _vm._v(
                                              "Recoding month and year must be a date after or equal to 1/1/1970."
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
                                              "Recoding month and year must be a date before or equal to " +
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
                                        staticClass:
                                          "control-label font-weight-bold"
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
                                  attrs: {
                                    label: "name",
                                    options: _vm.mediaPresenterTypes,
                                    multiple: "",
                                    id: "mediaPresenter",
                                    selectable:
                                      _vm.mediaPresenterTypeSelectedHide,
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
                                })
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
                                    attrs: {
                                      type: "text",
                                      maxlength: "500",
                                      placeholder:
                                        "Write Audio Participant - Maximum 500 characters"
                                    },
                                    domProps: {
                                      value: _vm.otherMediaPresenter
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.otherMediaPresenter =
                                          $event.target.value
                                      }
                                    }
                                  })
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
                                  ref: "mediaSubType",
                                  attrs: {
                                    label: "name",
                                    options: _vm.mediaSubTypes,
                                    id: "mediaSubType",
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
                                })
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
                                  attrs: {
                                    label: "name",
                                    options: _vm.subjectTypes,
                                    selectable: _vm.subjectTypeSelectedHide,
                                    multiple: "",
                                    id: "subjectType",
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
                                _c(
                                  "div",
                                  {
                                    directives: [
                                      {
                                        name: "b-modal",
                                        rawName:
                                          "v-b-modal.modal-add-subject-suggestion",
                                        modifiers: {
                                          "modal-add-subject-suggestion": true
                                        }
                                      }
                                    ],
                                    staticClass: "mt-1 mb-2 add-multiple"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                                    + Add Suggestion\n                                                "
                                    )
                                  ]
                                )
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
                                      _vm._m(6),
                                      _vm._v(" "),
                                      _c("v-select", {
                                        ref: "podcastGuest",
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
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group" }, [
                                    _c(
                                      "label",
                                      {
                                        staticClass:
                                          "control-label font-weight-bold"
                                      },
                                      [
                                        _vm._v(
                                          "Podcast Series\n                                                        Name"
                                        )
                                      ]
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
                                      domProps: {
                                        value: _vm.podcastSeriesName
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.podcastSeriesName =
                                            $event.target.value
                                        }
                                      }
                                    })
                                  ])
                                ]
                              : void 0,
                            _vm._v(" "),
                            _c("div", { staticClass: "form-group" }, [
                              _vm._m(7),
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
                                ref: "description",
                                staticClass: "form-control",
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
                              })
                            ])
                          ],
                          2
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-8 pb-3" },
                      [
                        _c("AudioVideoHierarchy", {
                          ref: "taxonomyChild",
                          attrs: {
                            taxonomySavedData: _vm.taxonomySavedData,
                            mediaUuid: _vm.mediaUuid,
                            hierarchyType: "Audio"
                          },
                          on: { nodeData: _vm.TaxonomyData }
                        })
                      ],
                      1
                    )
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "b-modal",
          {
            ref: "modal",
            attrs: {
              id: "modal-add-subject-suggestion",
              title: "Add Subject of Company Audio",
              centered: "",
              "hide-footer": "",
              "title-class": "modal-title-new"
            }
          },
          [
            _c(
              "b-form-group",
              {
                staticClass: "font-weight-bold",
                attrs: {
                  "label-for": "name-input",
                  label: "Add Suggestion Request Here"
                }
              },
              [
                _c("b-form-input", {
                  ref: "suggestion_explanation",
                  staticClass: "mb-2",
                  class: { "is-invalid": _vm.$v.suggestion_explanation.$error },
                  attrs: {
                    placeholder: "Type Requested Subject of Company Audio Here",
                    maxlength: "200",
                    required: ""
                  },
                  model: {
                    value: _vm.suggestion_explanation,
                    callback: function($$v) {
                      _vm.suggestion_explanation = $$v
                    },
                    expression: "suggestion_explanation"
                  }
                }),
                _vm._v(" "),
                !_vm.$v.suggestion_explanation.required
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v(
                        "Requested Subject of Company Audio is required.\n                "
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("b-form-textarea", {
                  ref: "suggestion_reason",
                  class: { "is-invalid": _vm.$v.suggestion_reason.$error },
                  attrs: {
                    id: "textarea",
                    placeholder: "Reason...",
                    maxlength: "1000",
                    rows: "3",
                    "max-rows": "6"
                  },
                  model: {
                    value: _vm.suggestion_reason,
                    callback: function($$v) {
                      _vm.suggestion_reason = $$v
                    },
                    expression: "suggestion_reason"
                  }
                }),
                _vm._v(" "),
                !_vm.$v.suggestion_reason.required
                  ? _c("div", { staticClass: "invalid-feedback" }, [
                      _vm._v("Reason is required.")
                    ])
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-input-group",
              { staticClass: "justify-content-center" },
              [
                _c(
                  "b-button",
                  {
                    staticClass: "btn-cancel-submit mr-3 background-darkblue",
                    attrs: { disabled: _vm.isDisabled, variant: "success" },
                    on: {
                      click: function($event) {
                        return _vm.addSubjectSuggestion()
                      }
                    }
                  },
                  [_vm._v("Submit\n                ")]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    staticClass: "btn-cancel-submit background-darkblue",
                    attrs: { variant: "success" },
                    on: {
                      click: function($event) {
                        return _vm.cancelSubjectSuggestionModal()
                      }
                    }
                  },
                  [_vm._v("Cancel\n                ")]
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
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
      _vm._v(
        "Date of audio\n                                                            Published"
      ),
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
      _vm._v(
        "Audio\n                                                    Participants"
      ),
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
      _vm._v(
        "Subject of Company\n                                                    Audio"
      ),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label font-weight-bold" }, [
      _vm._v("Podcast Guest"),
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

/***/ "./resources/js/views/AudioAddMeta.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/AudioAddMeta.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AudioAddMeta_vue_vue_type_template_id_07e78a2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudioAddMeta.vue?vue&type=template&id=07e78a2f& */ "./resources/js/views/AudioAddMeta.vue?vue&type=template&id=07e78a2f&");
/* harmony import */ var _AudioAddMeta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudioAddMeta.vue?vue&type=script&lang=js& */ "./resources/js/views/AudioAddMeta.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AudioAddMeta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AudioAddMeta_vue_vue_type_template_id_07e78a2f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AudioAddMeta_vue_vue_type_template_id_07e78a2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/AudioAddMeta.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/AudioAddMeta.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/AudioAddMeta.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioAddMeta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AudioAddMeta.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AudioAddMeta.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioAddMeta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/AudioAddMeta.vue?vue&type=template&id=07e78a2f&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/AudioAddMeta.vue?vue&type=template&id=07e78a2f& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioAddMeta_vue_vue_type_template_id_07e78a2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AudioAddMeta.vue?vue&type=template&id=07e78a2f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AudioAddMeta.vue?vue&type=template&id=07e78a2f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioAddMeta_vue_vue_type_template_id_07e78a2f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudioAddMeta_vue_vue_type_template_id_07e78a2f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);