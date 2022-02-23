(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UnAuthVideoQuestionnaire.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/UnAuthVideoQuestionnaire.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/Questionnnaire */ "./resources/js/apis/Questionnnaire.js");
/* harmony import */ var _components_AudioVideoHierarchy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AudioVideoHierarchy */ "./resources/js/components/AudioVideoHierarchy.vue");
/* harmony import */ var _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navigation.vue */ "./resources/js/components/Navigation.vue");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var resumablejs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! resumablejs */ "./node_modules/resumablejs/resumable.js");
/* harmony import */ var resumablejs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(resumablejs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Sidebar */ "./resources/js/components/Sidebar.vue");
/* harmony import */ var _apis_Common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../apis/Common */ "./resources/js/apis/Common.js");
/* harmony import */ var _apis_User__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../apis/User */ "./resources/js/apis/User.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      progressBar: null,
      uploadSuccess: false,
      isLoading: false,
      errors: [],
      step: 1,
      uploadButtonSeen: true,
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
        lookupId: null
      },
      taxonomySavedData: "",
      taxonomyIndustryData: "",
      videoFormData: {
        categorizationLevel: "",
        categorizationNodeId: "",
        name: '',
        publicationDate: '',
        mediaPresenter: "",
        otherMediaPresenter: "",
        // videoCoverType: "",
        mediaSubType: "",
        subjectType: "",
        description: "",
        // topCompetitors: "",
        investmentBankHosted: "",
        investmentBankName: "",
        country: "",
        state: "",
        city: "",
        lookupId: "",
        _token: ""
      },
      publicationDate: "",
      mediaPresenter: "",
      otherMediaPresenter: "",
      showOtherMediaPresenterField: false,
      // videoCoverType: "",
      mediaSubType: "",
      mediaType: "",
      subjectType: "",
      subjectTypeTag: "",
      description: "",
      // topCompetitors: "",
      name: "",
      city: "",
      state: "",
      country: "",
      investmentBankHosted: {
        label: 'Yes',
        id: 1
      },
      investmentBankName: "",
      countries: [],
      stateList: [],
      cityList: [],
      // mediaCoverTypes: [],
      mediaSubTypes: [],
      subjectTypes: [],
      mediaPresenterTypes: [],
      submitButtonDisabled: false,
      hierarchyLastLevel: ""
    };
  },
  validations: {
    name: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"]
    },
    publicationDate: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"]
    },
    mediaPresenter: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"]
    },
    mediaSubType: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"]
    },
    subjectType: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"]
    },
    otherMediaPresenter: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"]
    },
    investmentBankName: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"]
    },
    // topCompetitors: {required},
    description: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"]
    },
    country: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"]
    },
    state: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"]
    },
    city: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_7__["required"]
    }
  },
  methods: {
    prev: function prev() {
      this.step--;
    },
    addNode: function addNode() {
      this.$refs.taxonomyChild.saveHierarchyInfo();
    },
    step2: function step2() {
      var _this = this;

      if ("" == this.form.industry && null == this.form.lookupId) {
        this.$refs.taxonomyChild.$v.form.industry.$touch();
        return false;
      } else if ("" != this.form.industry) {
        //add hierarchy info
        var nodeformData = new FormData();
        nodeformData.append('node_type', this.$refs.taxonomyChild.categorizationLevel);
        nodeformData.append('node_id', this.$refs.taxonomyChild.categorizationNodeId);
        nodeformData.append('industry_id', this.$refs.taxonomyChild.form.industry.id);
        nodeformData.append('tracking_id', this.$refs.taxonomyChild.tracking_id);
        nodeformData.append('company_last_level', this.$refs.taxonomyChild.hierarchyLastLevel);
        _apis_User__WEBPACK_IMPORTED_MODULE_10__["default"].addAudioVideoMultipleNodes(nodeformData).then(function (response) {
          _this.isDisabled = false;
          _this.isLoading = false;

          if (response.data.success) {
            _this.form.lookupId = null == _this.form.lookupId ? response.data.data.lookupId : _this.form.lookupId + ',' + response.data.data.lookupId;
          }
        })["catch"](function (error) {
          if (error.response.status === 422) {//toastr.error(error.response.data.error.message)
          } else if (error.response.status == 401) {
            localStorage.clear();

            _this.$router.push({
              name: "Login"
            });
          } else {
            toastr.error(error);
          }

          _this.isLoading = false;
        });
      }

      this.getCountryList();
      this.getMediaTypes(); // this.getMediaCoverType();

      this.getSubjectTypes();
      this.getMediaPresenterType();
      this.step++;
    },
    step3: function step3() {
      var _this2 = this;

      this.$v.name.$touch();
      this.$v.publicationDate.$touch();
      this.$v.mediaPresenter.$touch();
      this.$v.mediaSubType.$touch();
      this.$v.subjectType.$touch();
      this.$v.description.$touch(); // this.$v.topCompetitors.$touch();

      if (this.investmentBankHosted.id == 1 && this.subjectTypeTag == 'roadshow') {
        this.$v.investmentBankName.$touch();
      } // if(this.showOtherMediaPresenterField){
      //     this.$v.otherMediaPresenter.$touch();
      // }


      if (this.subjectTypeTag == 'roadshow') {
        this.$v.country.$touch();
        this.$v.city.$touch();
        this.$v.state.$touch();
      }

      if (this.$v.name.$invalid || this.$v.publicationDate.$invalid || this.$v.description.$invalid || this.$v.mediaPresenter.$invalid || this.$v.subjectType.$invalid || // (this.showOtherMediaPresenterField && this.$v.otherMediaPresenter.$invalid) ||
      this.investmentBankHosted.id == 1 && this.subjectTypeTag == 'roadshow' && this.$v.investmentBankName.$invalid || this.subTypeTag == 'prodcast' && this.$v.podcastGuest.$invalid || this.subjectTypeTag == 'roadshow' && this.$v.country.$invalid || this.subjectTypeTag == 'roadshow' && this.$v.city.$invalid || this.subjectTypeTag == 'roadshow' && this.$v.state.$invalid) {
        if (this.$v.name.$invalid) {
          this.$refs.name.focus();
        } else if (this.$v.publicationDate.$invalid) {
          $('#publicationDate').focus();
        } else if (this.$v.mediaPresenter.$invalid) {
          $('#mediaPresenter .vs__search').focus();
        } else if (this.$v.mediaSubType.$invalid) {
          $('#mediaSubType .vs__search').focus();
        } else if (this.$v.subjectType.$invalid) {
          $('#subjectType .vs__search').focus();
        } else if (this.$v.description.$invalid) {
          this.$refs.description.focus();
        }

        return false;
      }

      this.submitButtonDisabled = true;
      this.videoFormData.name = this.name;
      this.videoFormData.publicationDate = this.dateConvert(this.publicationDate);
      this.videoFormData.mediaPresenter = this.mediaPresenter.id;
      this.videoFormData.otherMediaPresenter = this.otherMediaPresenter; // this.videoFormData.videoCoverType = this.videoCoverType.id;

      this.videoFormData.mediaSubType = this.mediaSubType.id;
      this.videoFormData.subjectType = this.subjectType.id;
      this.videoFormData.subjectTypeTag = this.subjectTypeTag;
      this.videoFormData.description = this.description; // this.videoFormData.topCompetitors = this.topCompetitors;

      this.videoFormData.country = this.country ? this.country.id : '';
      this.videoFormData.state = this.state ? this.state.id : '';
      this.videoFormData.city = this.city ? this.city.id : '';
      this.videoFormData.investmentBankHosted = this.investmentBankHosted.id;
      this.videoFormData.investmentBankName = this.investmentBankName;
      this.videoFormData.lookupId = this.form.lookupId;
      this.videoFormData.userInfo = localStorage.getItem("userInfo");
      this.videoFormData._token = document.querySelector('meta[name="csrf-token"]').content;
      this.isLoading = true;
      _apis_Questionnnaire__WEBPACK_IMPORTED_MODULE_0__["default"].videoFormValidate(this.videoFormData).then(function (response) {
        _this2.isLoading = false;
        _this2.submitButtonDisabled = false;
        _this2.step++;
      })["catch"](function (error) {
        _this2.isLoading = false;
        _this2.submitButtonDisabled = false;

        if (error.response.status === 422) {
          toastr.error(error.response.data.error.message);
        } else if (error.response.status == 401) {
          localStorage.clear();

          _this2.$router.push({
            name: "Login"
          });
        } else {
          toastr.error(error);
        }
      });
    },
    addVideoQuestionnaire: function addVideoQuestionnaire() {
      console.log('ready to submit');
    },
    companyQuestionnaireData: function companyQuestionnaireData() {
      var _this3 = this;

      axios.get('/api/company-hierarchy-data?userInfo=' + localStorage.getItem("userInfo")).then(function (response) {
        _this3.isLoading = false;
        _this3.taxonomyIndustryData = response.data.data;
      })["catch"](function (error) {
        _this3.isLoading = false;

        if (error.response.status == 401) {
          localStorage.clear();

          _this3.$router.push({
            name: "Login"
          });
        }
      });
    },
    // addSuggestion: function (suggestionType) {
    //     this.isDisabled = true;
    //     this.suggestionFormData.suggestion_explanation = this.suggestion_explanation;
    //     this.suggestionFormData.node_type = this.node_type;
    //     this.suggestionFormData.node_id = this.node_id;
    //     this.suggestionFormData.suggestion_type = suggestionType;
    //
    //     Questionnnaire.nodeSuggestion(this.suggestionFormData)
    //         .then((response) => {
    //             if (response.data.success) {
    //                 this.suggestion_explanation = ''
    //                 toastr.success(response.data.success.message)
    //                 this.$bvModal.hide('modal-' + suggestionType + '-node')
    //             }
    //         })
    //         .catch(error => {
    //             if (error.response.status === 422) {
    //                 toastr.error(error.response.data.error.message)
    //             } else if (error.response.status == 401) {
    //                 localStorage.clear();
    //                 this.$router.push({name: "Login"});
    //             } else {
    //                 toastr.error(error)
    //             }
    //         });
    // },
    setMediaPresenter: function setMediaPresenter(value) {
      this.showOtherMediaPresenterField = false;

      if ('Other' == value.name) {
        this.showOtherMediaPresenterField = true;
      }
    },
    clearInvestmentBankName: function clearInvestmentBankName(value) {
      if (0 == value.id) {
        this.investmentBankName = '';
      }

      console.log(value.id);
    },

    /*sendHierarchyInfo: function (type, id, description) {
        console.log(type)
        console.log(id)
        console.log(description)
        this.node_type = type;
        this.node_id = id;
        this.node_description = description;
    },
    */
    getCountryList: function getCountryList() {
      var _this4 = this;

      axios.get('/api/country-list').then(function (response) {
        _this4.countries = response.data.data;
        _this4.isLoading = false;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getState: function getState(value) {
      var _this5 = this;

      axios.get('/api/get-state-list/' + value.id).then(function (response) {
        _this5.stateList = response.data.data;
        _this5.isLoading = false;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getCities: function getCities(value) {
      var _this6 = this;

      axios.get('/api/get-city-list/' + value.id).then(function (response) {
        _this6.cityList = response.data.data;
        _this6.isLoading = false;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    getMediaTypes: function getMediaTypes() {
      var _this7 = this;

      axios.get('/api/get-media-sub-type/2').then(function (response) {
        _this7.mediaSubTypes = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    // getMediaCoverType : function(){
    //     axios.get('api/get-media-cover-type/2')
    //         .then(response => {
    //             this.mediaCoverTypes = response.data.data
    //         })
    //         .catch(error => console.log(error))
    // },
    getSubjectTypes: function getSubjectTypes() {
      var _this8 = this;

      axios.get('/api/get-subject-type/2').then(function (response) {
        _this8.subjectTypes = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    setSubjectTypeTag: function setSubjectTypeTag(value) {
      this.subjectTypeTag = '';

      if (null != value) {
        this.subjectTypeTag = value.tag;
      }
    },
    getMediaPresenterType: function getMediaPresenterType() {
      var _this9 = this;

      axios.get('/api/get-media-presenter-type/2').then(function (response) {
        _this9.mediaPresenterTypes = response.data.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    },
    showAddModal: function showAddModal() {
      this.isDisabled = false;
      this.$bvModal.hide('modal-add-suggestion');
      this.$bvModal.show('modal-add-node');
    },
    showReplaceModal: function showReplaceModal() {
      this.isDisabled = false;

      if (this.node_description) {
        this.$bvModal.hide('modal-add-suggestion');
        this.$bvModal.show('modal-replace-node');
      } else {
        toastr.error('Please select a node before this operation');
      }
    },
    showDeleteModal: function showDeleteModal() {
      this.isDisabled = false;

      if (this.node_description) {
        this.$bvModal.hide('modal-add-suggestion');
        this.$bvModal.show('modal-delete-node');
      } else {
        toastr.error('Please select a node before this operation');
      }
    },
    startUpload: function startUpload() {
      var nothingToUpload = $('[data-nothingToUpload]');

      if ($('#results').children().length > 0) {
        /*Taxonomy Data submit*/
        this.r.opts.query.lookupId = this.form.lookupId;
        /*End*/

        this.r.opts.query.type = 'dacast';
        this.r.opts.query.name = this.videoFormData.name;
        this.r.opts.query.publicationDate = this.videoFormData.publicationDate;
        this.r.opts.query.mediaPresenter = this.videoFormData.mediaPresenter;
        this.r.opts.query.otherMediaPresenter = this.videoFormData.otherMediaPresenter; // this.r.opts.query.videoCoverType = this.videoFormData.videoCoverType;

        this.r.opts.query.mediaSubType = this.videoFormData.mediaSubType;
        this.r.opts.query.subjectType = this.videoFormData.subjectType;
        this.r.opts.query.subjectTypeTag = this.videoFormData.subjectTypeTag;
        this.r.opts.query.description = this.videoFormData.description; // this.r.opts.query.topCompetitors = this.videoFormData.topCompetitors;

        this.r.opts.query.country = this.videoFormData.country;
        this.r.opts.query.state = this.videoFormData.state;
        this.r.opts.query.city = this.videoFormData.city;
        this.r.opts.query.investmentBankHosted = this.videoFormData.investmentBankHosted;
        this.r.opts.query.investmentBankName = this.videoFormData.investmentBankName;
        this.r.opts.query.userInfo = localStorage.getItem("userInfo");
        this.r.upload();
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
    },
    getName: function getName() {
      return this.name;
    },
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
        this.form.lookupId = value[19];
        this.hierarchyLastLevel = value[20];
      } //console.log(value);

    }
  },
  created: function created() {
    this.isLoading = true;
    this.dateConvert = _apis_Common__WEBPACK_IMPORTED_MODULE_9__["default"].dateConvert; // this.getCountryList();

    this.companyQuestionnaireData();
  },
  mounted: function mounted() {
    this.r = new resumablejs__WEBPACK_IMPORTED_MODULE_6___default.a({
      // Use chunk size that is smaller than your maximum limit due a resumable issue
      // https://github.com/23/resumable.js/issues/51
      chunkSize: 1 * 1024 * 1024,
      // 1MB
      simultaneousUploads: 2,
      testChunks: false,
      throttleProgressCallbacks: 1,
      fileType: ['MOV', 'MPEG4', 'MP4', 'AVI', 'WMV', 'MPEGPS', 'FLV', '3GPP', 'WebM', 'DNxHR', 'ProRes', 'CineForm', 'HEVC (h265)'],
      // Get the url from data-url tag
      //target:'/media-upload',
      target: 'api/dacast-video',
      // Append token to the request - required for web routes
      query: {
        _token: document.querySelector('meta[name="csrf-token"]').content,
        Accept: 'application/json'
      }
    });
    var vm = this; // new code start here

    var draggable = $('#drag-area'),
        browseButton = $('#browseButton');
    this.r.assignBrowse(browseButton);
    this.r.assignDrop(draggable);
    /*new code end here*/

    this.r.on('fileAdded', function (file, event) {
      console.log('file upload');

      window.onbeforeunload = function () {
        return "A XHR request is pending, are you sure you want to leave ?";
      };

      var template = '<div data-uniqueid="' + file.uniqueIdentifier + '">' + '<div class="fileName">' + file.fileName + ' (' + file.file.type + ')' + '</div>' + '</div>';
      $('#results').html(template); // vm.startUpload()
    });
    this.r.on('uploadStart', function () {
      $('.alert-box').removeClass('alert-success').removeClass('alert-danger').text('');
    });
    this.r.on('fileSuccess', function (file, message) {
      var res = JSON.parse(message);
      $('#upload-progress').addClass('d-none').find('.progress-bar').css('width', '0%');

      if (false == res.status) {
        $('.alert-box').addClass('alert-danger').html("Unable to upload");
      } else {
        $('.alert-box').addClass('alert-success').html("Uploading complete! We are currently processing your video, this may take some time. You may leave this page.");
      }

      vm.uploadSuccess = true;

      window.onbeforeunload = function () {// blank function do nothing
      };

      vm.uploadButtonSeen = false;
      var res = JSON.parse(message);
      localStorage.setItem("userInfo", JSON.stringify(res.data));
      localStorage.setItem("info", JSON.stringify(res.info));
      localStorage.setItem("token", "true");
    });
    this.r.on('progress', function () {
      $('#upload-progress').removeClass('d-none').find('.progress-bar').attr('style', "width:" + this.progress() * 100 + '%').html(Math.round(this.progress() * 100) + '%');
      $('#pause-upload-btn').find('.glyphicon').removeClass('glyphicon-play').addClass('glyphicon-pause');
      vm.uploadSuccess = false;
    });
    this.r.on('pause', function () {
      $('#pause-upload-btn').find('.glyphicon').removeClass('glyphicon-pause').addClass('glyphicon-play');
    });
    this.r.on('fileError', function (file, message) {
      $('#upload-progress').addClass('d-none').find('.progress-bar').css('width', '0%');
      $('.alert-box').addClass('alert-danger').html("Unable to upload");
      vm.uploadSuccess = false;

      window.onbeforeunload = function () {// blank function do nothing
      };
    });
    this.r.on('error', function (file, message) {
      window.onbeforeunload = function () {// blank function do nothing
      };

      var error = JSON.parse(file); // if (error.resultCode == 500 || error.resultCode == 419) {
      //             localStorage.clear();
      //             this.$router.push({ name: "Home" });
      //         }
    });
  },
  components: {
    loader: _components_Loader__WEBPACK_IMPORTED_MODULE_3__["default"],
    AudioVideoHierarchy: _components_AudioVideoHierarchy__WEBPACK_IMPORTED_MODULE_1__["default"],
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_4__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_5___default.a,
    Navigation: _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    sidebar: _components_Sidebar__WEBPACK_IMPORTED_MODULE_8__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UnAuthVideoQuestionnaire.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/UnAuthVideoQuestionnaire.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.drop-zone {\n    text-align:center;\n    border:2px dashed #ccc;\n}\n.danger, .danger:hover {\n    background-color: #e74c3c;\n}\n.inverse, .inverse:hover {\n    background-color: #34495e;\n}\ninput[type=\"file\"] {\n    height:32px;\n}\ndiv[data-nothingToUpload] {\n    display:none;\n}\n.deleteFile {\n    padding: 3px 7px;\n    color: #bf0000;\n    font-weight: bold;\n    cursor:pointer;\n}\nbutton {\n    border: none;\n    cursor: pointer;\n    background: #bdc3c7;\n    color: #ffffff;\n    padding: 9px 12px 10px;\n    line-height:1.333;\n    text-decoration: none;\n    text-shadow: none;\n    box-shadow: none;\n    transition: 0.25s;\n    -webkit-backface-visibility: hidden;\n}\n.meter {\n    color:#fff;\n    line-height:18px;\n    font-size:12px;\n}\n.drag-area{\n    border: 2px dashed #efefef;\n    height: 400px;\n    width: 550px;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n}\n.drag-area.active{\n    border: 2px solid #958e8e;\n}\n.drag-area .icon{\n    font-size: 100px;\n}\n.drag-area header{\n    font-size: 30px;\n    font-weight: 500;\n}\n.drag-area span{\n    font-size: 25px;\n    font-weight: 500;\n    margin: 10px 0 15px 0;\n}\n.drag-area button{\n    padding: 10px 30px;\n    font-size: 15px;\n    font-weight: 500;\n    border: none;\n    outline: none;\n    border-radius: 5px;\n    cursor: pointer;\n    color: #ffffff;\n    margin-top: 10px;\n}\n.upload-title{\n    margin-top: 30px;\n}\n.video-upload-button{\n    font-size: 16px;\n    padding: 8px 50px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UnAuthVideoQuestionnaire.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/UnAuthVideoQuestionnaire.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./UnAuthVideoQuestionnaire.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UnAuthVideoQuestionnaire.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UnAuthVideoQuestionnaire.vue?vue&type=template&id=15b67448&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/UnAuthVideoQuestionnaire.vue?vue&type=template&id=15b67448& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
            _c("div", { staticClass: "col-9 container" }, [
              _c("img", {
                staticClass: "img-fluid mx-auto d-block",
                attrs: { src: "/images/issuerpixel_page_logo.png", alt: "" }
              }),
              _vm._v(" "),
              _c("h2", { staticClass: "text-center" }, [
                _vm._v("Video Upload Questionnaire")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row register-container" }, [
                _c(
                  "div",
                  { class: _vm.step == 1 ? "col-md-9" : "col-md-6 mx-auto" },
                  [
                    _c(
                      "form",
                      {
                        staticClass: "form-horizontal",
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.addVideoQuestionnaire.apply(
                              null,
                              arguments
                            )
                          }
                        }
                      },
                      [
                        _vm.step == 1
                          ? _c(
                              "fieldset",
                              { staticClass: "mb-5" },
                              [
                                _c("span", { staticClass: "offset-4 pl-2" }, [
                                  _vm._v("Step 1 of 2")
                                ]),
                                _vm._v(" "),
                                _vm.taxonomyIndustryData
                                  ? _c("AudioVideoHierarchy", {
                                      ref: "taxonomyChild",
                                      attrs: {
                                        taxonomySavedData:
                                          _vm.taxonomySavedData,
                                        taxonomyIndustryData:
                                          _vm.taxonomyIndustryData
                                      },
                                      on: { nodeData: _vm.TaxonomyData }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-md-8 offset-4" },
                                  [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-theme-primary",
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.addNode.apply(
                                              null,
                                              arguments
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "Add Another Node\n                                "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-back-next float-right",
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.step2()
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "Finish\n                                "
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.step == 2
                          ? _c("fieldset", { staticClass: "mb-5" }, [
                              _c("span", [_vm._v("Step 2 of 2")]),
                              _vm._v(" "),
                              _c("div", { staticClass: "panel-body" }, [
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
                                      maxlength: "60",
                                      placeholder:
                                        "Type in Video Title - Maximum 60 characters"
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
                                    ? _c(
                                        "div",
                                        { staticClass: "invalid-feedback" },
                                        [
                                          _vm._v(
                                            "Video title is\n                                        required.\n                                    "
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _vm._m(1),
                                    _vm._v(" "),
                                    _c("datepicker", {
                                      class: {
                                        "is-invalid":
                                          _vm.$v.publicationDate.$error
                                      },
                                      attrs: {
                                        "input-class": "form-control",
                                        name: "publicationDate",
                                        id: "publicationDate",
                                        typeable: true,
                                        format: "MM/dd/yyyy",
                                        placeholder: "MM/DD/YYYY"
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
                                          [
                                            _vm._v(
                                              "\n                                        Publication date is required.\n                                    "
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _vm._m(2),
                                    _vm._v(" "),
                                    _c("v-select", {
                                      ref: "mediaPresenter",
                                      class: {
                                        "is-invalid":
                                          _vm.$v.mediaPresenter.$error
                                      },
                                      attrs: {
                                        label: "name",
                                        options: _vm.mediaPresenterTypes,
                                        id: "mediaPresenter",
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
                                      ? _c(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            _vm._v(
                                              "Video presenter\n                                        is\n                                        required.\n                                    "
                                            )
                                          ]
                                        )
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
                                        staticClass: "form-control",
                                        attrs: {
                                          type: "text",
                                          maxlength: "30",
                                          placeholder: "Write video Presenter"
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
                                    _vm._m(3),
                                    _vm._v(" "),
                                    _c("v-select", {
                                      ref: "mediaSubType",
                                      class: {
                                        "is-invalid": _vm.$v.mediaSubType.$error
                                      },
                                      attrs: {
                                        label: "name",
                                        options: _vm.mediaSubTypes,
                                        id: "mediaSubType",
                                        clearable: false,
                                        placeholder: "Select Below"
                                      },
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
                                      ? _c(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            _vm._v(
                                              "Media sub type is\n                                        required.\n                                    "
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _vm._m(4),
                                    _vm._v(" "),
                                    _c("v-select", {
                                      class: {
                                        "is-invalid": _vm.$v.subjectType.$error
                                      },
                                      attrs: {
                                        label: "name",
                                        options: _vm.subjectTypes,
                                        id: "subjectType",
                                        clearable: false,
                                        taggable: "",
                                        "push-tags": "",
                                        "create-option": function(option) {
                                          return {
                                            name: option.toLowerCase(),
                                            id:
                                              option.toLowerCase() +
                                              "_suggested"
                                          }
                                        },
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
                                      ? _c(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            _vm._v(
                                              "Subject of Company\n                                        video required.\n                                    "
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "form-group" }, [
                                  _vm._m(5),
                                  _vm._v(" "),
                                  _c("input", {
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
                                    class: {
                                      "is-invalid": _vm.$v.description.$error
                                    },
                                    attrs: {
                                      type: "text",
                                      maxlength: "280",
                                      placeholder:
                                        "Type in Description—Maximum 280 characters"
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
                                    ? _c(
                                        "div",
                                        { staticClass: "invalid-feedback" },
                                        [
                                          _vm._v(
                                            "Video\n                                        description is required.\n                                    "
                                          )
                                        ]
                                      )
                                    : _vm._e()
                                ]),
                                _vm._v(" "),
                                _vm.subjectTypeTag == "roadshow"
                                  ? _c(
                                      "div",
                                      { staticClass: "form-group" },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "control-label font-weight-bold"
                                          },
                                          [_vm._v("Road Show Geography")]
                                        ),
                                        _vm._v(" "),
                                        _c("v-select", {
                                          attrs: {
                                            label: "name",
                                            options: _vm.countries,
                                            clearable: false,
                                            placeholder: "Select Country"
                                          },
                                          on: { input: _vm.getState },
                                          model: {
                                            value: _vm.country,
                                            callback: function($$v) {
                                              _vm.country = $$v
                                            },
                                            expression: "country"
                                          }
                                        }),
                                        _vm._v(" "),
                                        !_vm.$v.country.required
                                          ? _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "invalid-server-feedback"
                                              },
                                              [
                                                _vm._v(
                                                  "Country is\n                                        required.\n                                    "
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("v-select", {
                                          attrs: {
                                            label: "name",
                                            options: _vm.stateList,
                                            clearable: false,
                                            placeholder: "Select State"
                                          },
                                          on: { input: _vm.getCities },
                                          model: {
                                            value: _vm.state,
                                            callback: function($$v) {
                                              _vm.state = $$v
                                            },
                                            expression: "state"
                                          }
                                        }),
                                        _vm._v(" "),
                                        !_vm.$v.state.required
                                          ? _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "invalid-server-feedback"
                                              },
                                              [
                                                _vm._v(
                                                  "State is\n                                        required.\n                                    "
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c("br"),
                                        _vm._v(" "),
                                        _c("v-select", {
                                          attrs: {
                                            label: "name",
                                            options: _vm.cityList,
                                            clearable: false,
                                            placeholder: "Select City"
                                          },
                                          model: {
                                            value: _vm.city,
                                            callback: function($$v) {
                                              _vm.city = $$v
                                            },
                                            expression: "city"
                                          }
                                        }),
                                        _vm._v(" "),
                                        !_vm.$v.city.required
                                          ? _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "invalid-server-feedback"
                                              },
                                              [
                                                _vm._v(
                                                  "City is\n                                        required.\n                                    "
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.subjectTypeTag == "roadshow"
                                  ? _c(
                                      "div",
                                      { staticClass: "form-group" },
                                      [
                                        _c(
                                          "label",
                                          {
                                            staticClass:
                                              "control-label font-weight-bold"
                                          },
                                          [
                                            _vm._v(
                                              "Investment Bank Hosted Road\n                                        Show"
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("v-select", {
                                          attrs: {
                                            options: [
                                              { label: "Yes", id: 1 },
                                              { label: "No", id: 0 }
                                            ],
                                            clearable: false,
                                            placeholder: "Select Yes or No"
                                          },
                                          on: {
                                            input: _vm.clearInvestmentBankName
                                          },
                                          model: {
                                            value: _vm.investmentBankHosted,
                                            callback: function($$v) {
                                              _vm.investmentBankHosted = $$v
                                            },
                                            expression: "investmentBankHosted"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.investmentBankHosted.id == 1 &&
                                _vm.subjectTypeTag == "roadshow"
                                  ? _c("div", { staticClass: "form-group" }, [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "control-label font-weight-bold"
                                        },
                                        [
                                          _vm._v(
                                            "Name of Investment\n                                        Bank"
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.investmentBankName,
                                            expression: "investmentBankName"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          "is-invalid":
                                            _vm.$v.investmentBankName.$error
                                        },
                                        attrs: {
                                          type: "text",
                                          placeholder: "Type Name"
                                        },
                                        domProps: {
                                          value: _vm.investmentBankName
                                        },
                                        on: {
                                          input: function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.investmentBankName =
                                              $event.target.value
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      !_vm.$v.investmentBankName.required
                                        ? _c(
                                            "div",
                                            { staticClass: "invalid-feedback" },
                                            [
                                              _vm._v(
                                                "Bank\n                                        name is required.\n                                    "
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-back-next",
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.prev()
                                      }
                                    }
                                  },
                                  [_vm._v("Back")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-back-next float-right",
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.step3()
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "Next\n                                "
                                    )
                                  ]
                                )
                              ])
                            ])
                          : _vm._e()
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
                            value: _vm.step == 3,
                            expression: "step == 3"
                          }
                        ],
                        staticClass: "col p-3"
                      },
                      [
                        _c("div", { staticClass: "d-flex" }, [
                          _vm.uploadButtonSeen
                            ? _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "large-12 columns" }, [
                                  _vm._m(6),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticClass:
                                        "text-center mt-1 font-italic"
                                    },
                                    [
                                      _vm._v(
                                        'After selecting your video file press "Upload" to upload the file'
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "text-center" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-back-next",
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.prev()
                                          }
                                        }
                                      },
                                      [_vm._v("Back")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-success px-5 video-upload-button",
                                        attrs: { type: "button" },
                                        on: { click: _vm.startUpload }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                            Upload Video\n                                        "
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
                                          "Error Nothing To Upload, Please Add File"
                                        )
                                      ]
                                    )
                                  ])
                                ])
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _vm._m(7),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "d-flex" },
                          [
                            _vm.uploadSuccess
                              ? _c(
                                  "router-link",
                                  {
                                    staticClass:
                                      "btn btn-back-next align-self-center mx-auto",
                                    attrs: { to: { name: "Dashboard" } }
                                  },
                                  [
                                    _vm._v(
                                      "Back to Dashboard\n                            "
                                    )
                                  ]
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c("loader", { attrs: { "is-visible": _vm.isLoading } })
                  ],
                  1
                )
              ])
            ])
          ]
        )
      ])
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
      _vm._v("Video Title"),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label font-weight-bold" }, [
      _vm._v(
        "Date of Video\n                                        Publication"
      ),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label font-weight-bold" }, [
      _vm._v("Video Presenter"),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label font-weight-bold" }, [
      _vm._v("Media Sub Type"),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label font-weight-bold" }, [
      _vm._v(
        "Subject of Company\n                                        Video"
      ),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "control-label font-weight-bold" }, [
      _vm._v("Video Description"),
      _c("span", { staticClass: "text-danger" }, [_vm._v("*")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "panel drop-zone drag-area", attrs: { id: "drag-area" } },
      [
        _c("header", [_vm._v("Drag and drop videos")]),
        _vm._v(" "),
        _c("header", [_vm._v("to upload")]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-info px-5", attrs: { id: "browseButton" } },
          [_vm._v("Or choose files")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "panel", attrs: { id: "results" } })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-5" }, [
      _c(
        "div",
        { staticClass: "progress d-none", attrs: { id: "upload-progress" } },
        [
          _c(
            "div",
            {
              staticClass: "progress-bar bg-success text-center",
              staticStyle: { width: "0%" },
              attrs: { role: "progressbar" }
            },
            [_c("span", { staticClass: "sr-only" })]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "alert alert-box" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/UnAuthVideoQuestionnaire.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/UnAuthVideoQuestionnaire.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UnAuthVideoQuestionnaire_vue_vue_type_template_id_15b67448___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UnAuthVideoQuestionnaire.vue?vue&type=template&id=15b67448& */ "./resources/js/views/UnAuthVideoQuestionnaire.vue?vue&type=template&id=15b67448&");
/* harmony import */ var _UnAuthVideoQuestionnaire_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnAuthVideoQuestionnaire.vue?vue&type=script&lang=js& */ "./resources/js/views/UnAuthVideoQuestionnaire.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UnAuthVideoQuestionnaire_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UnAuthVideoQuestionnaire.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/UnAuthVideoQuestionnaire.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UnAuthVideoQuestionnaire_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UnAuthVideoQuestionnaire_vue_vue_type_template_id_15b67448___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UnAuthVideoQuestionnaire_vue_vue_type_template_id_15b67448___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/UnAuthVideoQuestionnaire.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/UnAuthVideoQuestionnaire.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/UnAuthVideoQuestionnaire.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnAuthVideoQuestionnaire_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UnAuthVideoQuestionnaire.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UnAuthVideoQuestionnaire.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnAuthVideoQuestionnaire_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/UnAuthVideoQuestionnaire.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/UnAuthVideoQuestionnaire.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UnAuthVideoQuestionnaire_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./UnAuthVideoQuestionnaire.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UnAuthVideoQuestionnaire.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UnAuthVideoQuestionnaire_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UnAuthVideoQuestionnaire_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UnAuthVideoQuestionnaire_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UnAuthVideoQuestionnaire_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/UnAuthVideoQuestionnaire.vue?vue&type=template&id=15b67448&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/UnAuthVideoQuestionnaire.vue?vue&type=template&id=15b67448& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnAuthVideoQuestionnaire_vue_vue_type_template_id_15b67448___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UnAuthVideoQuestionnaire.vue?vue&type=template&id=15b67448& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UnAuthVideoQuestionnaire.vue?vue&type=template&id=15b67448&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnAuthVideoQuestionnaire_vue_vue_type_template_id_15b67448___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnAuthVideoQuestionnaire_vue_vue_type_template_id_15b67448___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);