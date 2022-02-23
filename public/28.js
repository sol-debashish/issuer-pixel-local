(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewAudioDetails.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ViewAudioDetails.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var _apis_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apis/Content */ "./resources/js/apis/Content.js");
/* harmony import */ var _apis_Social__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apis/Social */ "./resources/js/apis/Social.js");
/* harmony import */ var _apis_Common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apis/Common */ "./resources/js/apis/Common.js");
/* harmony import */ var _components_MediaDetailsCategoryTabContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/MediaDetailsCategoryTabContent */ "./resources/js/components/MediaDetailsCategoryTabContent.vue");


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
//
//
//
//
//
//
//
//
//
//




 // import Amplitude from 'amplitudejs'

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isLoading: false,
      uuid: this.$route.params.id,
      media_file_id: null,
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
      mediaHierarchyInfo: "",
      tabIndex: 1,
      activeTab: 0,
      enableTabNavigation: false,
      audioUrl: "",
      audioName: "",
      audioPresenter: "",
      otherAudioPresenter: "",
      audioTitle: "",
      audioMediaType: "",
      audioSubject: [],
      audioDescription: "",
      publicationDate: "",
      listenCounter: 0,
      audioUnpublished: false,
      audioUnavailable: false,
      publicationStatus: 0,
      publicShareLink: "",
      shareMediaType: "Audio",
      companyName: "",
      isLoggedIn: false,
      companySlug: "",
      otherAudio: [],
      dynamicColumnClass: 'col-lg-8',
      enableClassificationsEditButton: false,
      userId: null,
      senderCompanyId: null,
      companyId: ""
    };
  },
  methods: {
    getAudioInfo: function () {
      var _getAudioInfo = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.isLoading = true;
                _context.next = 3;
                return _apis_Content__WEBPACK_IMPORTED_MODULE_2__["default"].audioDetails(this.uuid).then(function (response) {
                  if (response.data.data.status == 'login_unpublished') {
                    _this.audioUnpublished = true;
                  } else if (response.data.data.status == 'non_login_unpublished') {
                    _this.$router.push({
                      name: "Home"
                    });
                  }

                  _this.audioUrl = response.data.data.data.s3_address;
                  _this.audioName = response.data.data.data.name;
                  _this.media_file_id = response.data.data.data.id;

                  _this.showAllTaxonomiesData(response.data.data.data.taxonomy_id, _this.uuid);

                  _this.audioPresenter = response.data.data.data.media_presenter;
                  _this.otherAudioPresenter = response.data.data.data.other_media_presenter;
                  _this.audioTitle = response.data.data.data.name;
                  _this.listenCounter = response.data.data.data.view_counter;
                  _this.audioSubject = response.data.data.data.subject_type;
                  _this.audioMediaType = response.data.data.data.media_sub_type;
                  _this.audioDescription = response.data.data.data.description;
                  _this.publicationDate = response.data.data.data.publication_date;
                  _this.publicationStatus = response.data.data.data.publish_status;
                  _this.publicShareLink = document.location.origin + '/company/' + _this.$route.params.slug + '/audio-details/' + _this.$route.params.id;
                  _this.companyId = response.data.data.data.company_id;
                  _this.companyName = response.data.data.data.company_name;
                  _this.companySlug = response.data.data.data.company_slug;

                  _this.getOtherAudioInfo(_this.uuid);

                  _this.playAudio();

                  _this.isLoading = false;
                })["catch"](function (error) {
                  if (!!error.response) {
                    _this.isLoading = false;

                    if (error.response.status === 422) {
                      _this.audioUnavailable = true;
                    } else if (error.response.status == 401) {
                      _this.$emit('logout');
                    }
                  }
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAudioInfo() {
        return _getAudioInfo.apply(this, arguments);
      }

      return getAudioInfo;
    }(),
    showAllTaxonomiesData: function showAllTaxonomiesData(taxonomy_id, uuid) {
      var _this2 = this;

      this.isLoading = true;
      this.mediaHierarchyInfo = [];
      axios.get('/api/get-media-categorization-lookup-for-collapse?id=' + taxonomy_id + '&uuid=' + uuid).then(function (response) {
        _this2.mediaHierarchyInfo = response.data.data;

        if (_this2.mediaHierarchyInfo.length > 2) {
          _this2.enableTabNavigation = true;
        }

        _this2.isLoading = false;
      })["catch"](function (error) {
        _this2.isLoading = false;

        if (error.response.status === 422) {
          toastr.error(error.response.data.error.message);
        } else if (error.response.status == 401) {
          _this2.$emit('logout');
        } else {
          toastr.error(error);
        }
      });
    },
    navigateTabScrollOnLeft: function navigateTabScrollOnLeft() {
      var content = document.querySelector(".nav-tabs");
      content.scrollLeft -= 150;
    },
    navigateTabScrollOnRight: function navigateTabScrollOnRight() {
      var content = document.querySelector(".nav-tabs");
      content.scrollLeft += 150;
    },
    shareMediaLink: function shareMediaLink() {
      if (this.publicationStatus == 0) {
        // this.$bvModal.show('modalCheckPublicationStatus');
        this.publishedAndShareLink();
      } else {
        this.$bvModal.show('modalShareLink');
      }
    },
    publishedAndShareLink: function publishedAndShareLink() {
      var _this3 = this;

      _apis_Content__WEBPACK_IMPORTED_MODULE_2__["default"].changeMediaFileStatus({
        'id': this.media_file_id,
        'status': 0
      }).then(function (response) {
        _this3.publicationStatus = 1;
      })["catch"](function (error) {
        toastr.error(error);
      }); // this.$bvModal.hide('modalCheckPublicationStatus');

      this.$bvModal.show('modalShareLink');
    },
    getOtherAudioInfo: function getOtherAudioInfo(uuid) {
      var _this4 = this;

      this.isLoading = true;
      _apis_Content__WEBPACK_IMPORTED_MODULE_2__["default"].audioOthers(uuid).then(function (response) {
        _this4.otherAudio = [];
        _this4.otherAudio = response.data.data.data;
      })["catch"](function (error) {
        if (!!error.response) {
          _this4.isLoading = false;

          if (error.response.status == 401) {
            _this4.$emit('logout');
          }
        }
      });
    },
    playAudio: function playAudio() {
      Amplitude.init({
        bindings: {
          32: 'play_pause'
        },
        debug: true,
        visualization: 'michaelbromley_visualization',
        songs: [{
          "name": this.audioName,
          "url": this.audioUrl,
          "visualization": "michaelbromley_visualization"
        }],
        waveforms: {
          sample_rate: 50
        },
        visualizations: [{
          object: MichaelBromleyVisualization,
          params: {}
        }]
      });
    },
    audioForward: function audioForward() {
      var duration = Amplitude.getSongDuration();
      var currentTime = parseFloat(Amplitude.getSongPlayedSeconds());
      var targetTime = parseFloat(currentTime + 30);
      Amplitude.setSongPlayedPercentage(targetTime / duration * 100);
    },
    audioBackward: function audioBackward() {
      var duration = Amplitude.getSongDuration();
      var currentTime = parseFloat(Amplitude.getSongPlayedSeconds());
      var targetTime = parseFloat(currentTime - 30);
      Amplitude.setSongPlayedPercentage(targetTime / duration * 100);
    },
    audioStepBackward: function audioStepBackward() {
      var currentSpeed = Amplitude.getPlaybackSpeed();

      if (currentSpeed > 0.5) {
        Amplitude.setPlaybackSpeed(currentSpeed - 0.5);
      }
    },
    audioStepForward: function audioStepForward() {
      var currentSpeed = Amplitude.getPlaybackSpeed();

      if (currentSpeed < 2.0) {
        Amplitude.setPlaybackSpeed(currentSpeed + 0.5);
      }
    },
    showAllSubjectModal: function showAllSubjectModal(event) {
      this.$bvModal.show('modalAllSubject');
    },
    showAllPresenterModal: function showAllPresenterModal(event) {
      this.$bvModal.show('modalAllPresenter');
    },
    updateViewKey: function updateViewKey() {
      this.$emit("updateViewKey");
    },
    closeMessageModal: function closeMessageModal() {
      this.$refs['message-modal'].hide();
    },
    showMessageModal: function showMessageModal() {
      this.$refs['message-modal'].show();
    }
  },
  beforeDestroy: function beforeDestroy() {
    Amplitude.stop();
    Amplitude.currentTime = 0;
    Amplitude.init({
      "bindings": {},
      "songs": [{
        "name": '',
        "url": ''
      }]
    });
  },
  created: function created() {
    this.numShortFormatter = _apis_Common__WEBPACK_IMPORTED_MODULE_4__["default"].ViewListenNumFormatter;
    this.getAudioInfo();

    if (localStorage.userid) {
      this.userId = localStorage.userid;
      this.senderCompanyId = JSON.parse(localStorage.getItem("info")).company_id;
    }
  },
  mounted: function mounted() {
    this.isLoggedIn = !!localStorage.getItem("token");

    if (this.isLoggedIn) {
      this.dynamicColumnClass = 'col-lg-8';
    }
  },
  name: "ViewAudioDetails",
  components: {
    loader: _components_Loader__WEBPACK_IMPORTED_MODULE_1__["default"],
    MediaDetailsCategoryTabContent: _components_MediaDetailsCategoryTabContent__WEBPACK_IMPORTED_MODULE_5__["default"],
    ShareModal: function ShareModal() {
      return __webpack_require__.e(/*! import() */ 11).then(__webpack_require__.bind(null, /*! ../components/ShareModal */ "./resources/js/components/ShareModal.vue"));
    },
    InternalMessage: function InternalMessage() {
      return __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! ../components/InternalMessage */ "./resources/js/components/InternalMessage.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewAudioDetails.vue?vue&type=style&index=1&id=896ee520&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ViewAudioDetails.vue?vue&type=style&index=1&id=896ee520&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousel-card-link .card-body[data-v-896ee520] {\n  padding: 0.5rem !important;\n}\n.carousel-card-link .card-body p[data-v-896ee520] {\n  font-size: 0.75rem;\n  color: rgba(30, 8, 87, 0.8);\n  margin-bottom: 2px;\n}\n.carousel-card-link .card-body .warp-text-title[data-v-896ee520] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 150px;\n}\n.carousel-card-link .card-wrapper[data-v-896ee520] {\n  padding: 5px;\n}\n.carousel-card-link .card-wrapper .card[data-v-896ee520] {\n  max-height: 230px;\n}\n.carousel-card-link .company-title[data-v-896ee520], .carousel-card-link ul.pagination[data-v-896ee520] {\n  font-size: 0.625rem;\n  color: #6a666d;\n}\n.carousel-card-link ul.content-ul[data-v-896ee520] {\n  display: inline-flex;\n  font-size: 0.625rem;\n  color: #8a878d;\n  padding-left: 0px;\n  margin-bottom: 0 !important;\n}\n.carousel-card-link ul.content-ul li[data-v-896ee520]:not(:last-child) {\n  padding-right: 12px;\n}\n.carousel-card-link ul.content-ul li[data-v-896ee520]:first-child {\n  list-style: none;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewAudioDetails.vue?vue&type=style&index=0&id=896ee520&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ViewAudioDetails.vue?vue&type=style&index=0&id=896ee520&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ndiv.control-container[data-v-896ee520] {\n    margin-top: 10px;\n    text-align: center;\n    padding-bottom: 10px;\n}\ndiv.control-container div.amplitude-play-pause[data-v-896ee520] {\n    width: 74px;\n    height: 74px;\n    cursor: pointer;\n    margin: 0 10px;\n    display: inline-block;\n    vertical-align: middle;\n}\ndiv.control-container div.amplitude-play-pause.amplitude-paused[data-v-896ee520] {\n    background: url(" + escape(__webpack_require__(/*! ../assets/play.png */ "./resources/js/assets/play.png")) + ");\n    background-size: cover;\n}\ndiv.control-container div.amplitude-play-pause.amplitude-playing[data-v-896ee520] {\n    background: url(" + escape(__webpack_require__(/*! ../assets/pause.png */ "./resources/js/assets/pause.png")) + ");\n    background-size: cover;\n}\ndiv.control-container div.meta-container[data-v-896ee520] {\n    /*width: calc(100% - 84px);*/\n    text-align: center;\n    color: white;\n    margin-top: 10px;\n}\ndiv.control-container div.meta-container span[data-amplitude-song-info=\"name\"][data-v-896ee520] {\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 18px;\n    color: #fff;\n    display: block;\n}\ndiv.control-container div.meta-container span[data-amplitude-song-info=\"artist\"][data-v-896ee520] {\n    font-family: \"Open Sans\", sans-serif;\n    font-weight: 100;\n    font-size: 14px;\n    color: #fff;\n    display: block;\n}\ndiv.control-container[data-v-896ee520]:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\n/*\n  Small only\n*/\n@media screen and (max-width: 39.9375em) {\ndiv.control-container div.amplitude-play-pause[data-v-896ee520] {\n        background-size: cover;\n        width: 64px;\n        height: 64px;\n}\ndiv.control-container div.meta-container[data-v-896ee520] {\n        width: calc(100% - 74px);\n}\n}\n\n/*\n  2. Components\n*/\ndiv.top-container[data-v-896ee520] {\n    margin-bottom: 5px;\n    position: relative;\n}\ndiv.top-container div.amplitude-visualization[data-v-896ee520] {\n    width: 100%;\n    height: 300px;\n    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.5);\n    margin: auto;\n    /*background-color: #7e097c85;*/\n}\ndiv.top-container img.now-playing-album-art[data-v-896ee520] {\n    width: 200px;\n    margin: auto;\n    box-shadow: 0 5px 31px 0 rgba(0, 0, 0, 0.5);\n    display: none;\n}\n\n/*div.top-container div.amplitude-repeat {*/\n/*    width: 25px;*/\n/*    height: 15px;*/\n/*    cursor: pointer;*/\n/*    top: 85px;*/\n/*    right: 8px;*/\n/*    position: absolute;*/\n/*}*/\n\n/*div.top-container div.amplitude-repeat.amplitude-repeat-on {*/\n/*    background: url(\"https://521dimensions.com/img/open-source/amplitudejs/examples/visualizations/repeat-on.svg\") no-repeat center;*/\n/*}*/\n\n/*div.top-container div.amplitude-repeat.amplitude-repeat-off {*/\n/*    background: url(\"https://521dimensions.com/img/open-source/amplitudejs/examples/visualizations/repeat-off.svg\") no-repeat center;*/\n/*}*/\n\n/*\n  Small only\n*/\n/*\n  Medium only\n*/\n/*\n  Large Only\n*/\n/*div.control-container {*/\n/*    margin-top: 40px;*/\n/*    display: flex;*/\n/*}*/\n\n/*div.control-container div.amplitude-prev {*/\n/*    width: 18px;*/\n/*    height: 24px;*/\n/*    background: url(\"https://521dimensions.com/img/open-source/amplitudejs/examples/visualizations/prev.svg\");*/\n/*    background-size: cover;*/\n/*    cursor: pointer;*/\n/*    margin: auto;*/\n/*    margin-top: 10px;*/\n/*}*/\n\n/*div.control-container div.amplitude-play-pause {*/\n/*    width: 30px;*/\n/*    height: 44px;*/\n/*    cursor: pointer;*/\n/*    margin: auto;*/\n/*}*/\n\n/*div.control-container div.amplitude-play-pause.amplitude-playing {*/\n/*    background: url(\"https://521dimensions.com/img/open-source/amplitudejs/examples/visualizations/pause.svg\") no-repeat center;*/\n/*}*/\n\n/*div.control-container div.amplitude-play-pause.amplitude-paused {*/\n/*    background: url(\"https://521dimensions.com/img/open-source/amplitudejs/examples/visualizations/play.svg\") no-repeat center;*/\n/*}*/\n\n/*div.control-container div.amplitude-next {*/\n/*    width: 18px;*/\n/*    height: 24px;*/\n/*    background: url(\"https://521dimensions.com/img/open-source/amplitudejs/examples/visualizations/next.svg\");*/\n/*    background-size: cover;*/\n/*    cursor: pointer;*/\n/*    margin: auto;*/\n/*    margin-top: 10px;*/\n/*}*/\n\n/*\n  Small only\n*/\n/*\n  Medium only\n*/\n/*\n  Large Only\n*/\ndiv.meta-data-container span.now-playing-name[data-v-896ee520] {\n    display: block;\n    text-align: center;\n    margin-bottom: 15px;\n    font-size: 28px;\n    font-weight: 700;\n    color: #000000;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\ndiv.meta-data-container span.now-playing-artist-album[data-v-896ee520] {\n    display: block;\n    text-align: center;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 14px;\n    color: rgba(255, 255, 255, 0.7);\n}\n\n/*\n  Small only\n*/\n/*\n  Medium only\n*/\n/*\n  Large Only\n*/\ndiv.amplitude-wave-form[data-v-896ee520] {\n    margin-top: 25px;\n    margin-bottom: 12px;\n}\ndiv.amplitude-wave-form svg[data-v-896ee520] {\n    stroke: url(#gradient);\n    height: 50px;\n    width: 100%;\n    stroke-width: .5px;\n}\ndiv.amplitude-wave-form svg g[data-v-896ee520] {\n    stroke: url(#gradient);\n    height: 50px;\n    width: 100%;\n}\ndiv.amplitude-wave-form svg g path[data-v-896ee520] {\n    stroke: url(#gradient);\n    height: 50px;\n    width: 100%;\n}\nspan.amplitude-current-time[data-v-896ee520] {\n    display: block;\n    text-align: left;\n    color: #000000;\n    font-size: 12px;\n}\nspan.amplitude-time-remaining[data-v-896ee520] {\n    display: block;\n    text-align: right;\n    color: #000000;\n    font-size: 12px;\n}\ndiv.song-navigation[data-v-896ee520] {\n    margin-top: 0;\n    margin-bottom: 15px;\n}\ndiv.song-navigation input[type=\"range\"][data-v-896ee520] {\n    width: 100%;\n    -webkit-appearance: none;\n    z-index: 9999;\n    background-color: #000000;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    height: 4px;\n}\ndiv.song-navigation input[type=\"range\"][data-v-896ee520]:focus {\n    outline: none;\n}\ndiv.song-navigation input[type=\"range\"][data-v-896ee520]::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 4px;\n    cursor: pointer;\n    border-radius: 0px;\n    background: rgba(255, 255, 255, 0.25);\n}\ndiv.song-navigation input[type=\"range\"][data-v-896ee520]::-webkit-slider-thumb {\n    width: 28px;\n    height: 28px;\n    background-color: #000000;\n    border-radius: 20px;\n    -webkit-appearance: none;\n    margin-top: -10px;\n}\ndiv.song-navigation input[type=\"range\"][data-v-896ee520]::-moz-range-track {\n    width: 100%;\n    height: 4px;\n    cursor: pointer;\n    border-radius: 0px;\n    background: rgba(255, 255, 255, 0.25);\n}\ndiv.song-navigation input[type=\"range\"][data-v-896ee520]::-moz-range-thumb {\n    width: 28px;\n    height: 28px;\n    background-color: #000000;\n    border-radius: 20px;\n    -webkit-appearance: none;\n    margin-top: -10px;\n}\ndiv.song-navigation input[type=\"range\"][data-v-896ee520]::-ms-track {\n    width: 100%;\n    height: 4px;\n    cursor: pointer;\n    border-radius: 0px;\n    background: rgba(255, 255, 255, 0.25);\n}\ndiv.song-navigation input[type=\"range\"][data-v-896ee520]::-ms-fill-lower {\n    background: transparent;\n}\ndiv.song-navigation input[type=\"range\"][data-v-896ee520]::-ms-fill-upper {\n    background: transparent;\n}\ndiv.song-navigation input[type=\"range\"][data-v-896ee520]::-ms-thumb {\n    width: 28px;\n    height: 28px;\n    background-color: #000000;\n    border-radius: 20px;\n    -webkit-appearance: none;\n    margin-top: -10px;\n}\ndiv.arrow-up img.arrow-up-icon[data-v-896ee520] {\n    cursor: pointer;\n    margin: auto;\n    display: block;\n}\ninput[type=\"range\"]#global-large-song-slider[data-v-896ee520] {\n    width: 100%;\n    margin-top: -74px;\n    -webkit-appearance: none;\n    z-index: 9999;\n    background-color: inherit;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n}\ninput[type=\"range\"]#global-large-song-slider[data-v-896ee520]:focus {\n    outline: none;\n}\ninput[type=\"range\"]#global-large-song-slider[data-v-896ee520]::-webkit-slider-runnable-track {\n    width: 100%;\n    cursor: pointer;\n    border-radius: 0px;\n    height: 68px;\n    background-color: rgba(0, 0, 0, 0);\n    -webkit-appearance: none;\n}\ninput[type=\"range\"]#global-large-song-slider[data-v-896ee520]::-webkit-slider-thumb {\n    width: 5px;\n    height: 68px;\n    background-color: #000000;\n    border-radius: 20px;\n    -webkit-appearance: none;\n}\ninput[type=\"range\"]#global-large-song-slider[data-v-896ee520]::-moz-range-track {\n    width: 100%;\n    height: 0px;\n    cursor: pointer;\n    border-radius: 0px;\n    height: 68px;\n    background-color: rgba(0, 0, 0, 0);\n}\ninput[type=\"range\"]#global-large-song-slider[data-v-896ee520]::-moz-range-thumb {\n    width: 5px;\n    height: 68px;\n    background-color: #000000;\n    border-radius: 20px;\n    -webkit-appearance: none;\n    margin-top: -34px;\n}\ninput[type=\"range\"]#global-large-song-slider[data-v-896ee520]::-ms-track {\n    width: 100%;\n    height: 4px;\n    cursor: pointer;\n    border-radius: 0px;\n    background: rgba(255, 255, 255, 0.25);\n}\ninput[type=\"range\"]#global-large-song-slider[data-v-896ee520]::-ms-fill-lower {\n    background: transparent;\n}\ninput[type=\"range\"]#global-large-song-slider[data-v-896ee520]::-ms-fill-upper {\n    background: transparent;\n}\ninput[type=\"range\"]#global-large-song-slider[data-v-896ee520]::-ms-thumb {\n    width: 28px;\n    height: 28px;\n    background-color: #000000;\n    border-radius: 20px;\n    -webkit-appearance: none;\n    margin-top: -10px;\n}\n\n/*\n  3. Layout\n*/\ndiv#visualizations-player[data-v-896ee520] {\n    width: 100%;\n    /*padding: 25px 0;*/\n    /*background-color: #000000;*/\n    border-radius: 20px;\n    margin: auto;\n    position: relative;\n}\n\n/*\n  Small only\n*/\n/*\n  Medium only\n*/\n/*\n  Large Only\n*/\ndiv#visualizations-player-playlist[data-v-896ee520] {\n    background-color: #482D57;\n    border-radius: 20px;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    padding: 25px;\n    padding-top: 25px;\n    z-index: 9999;\n    display: none;\n}\ndiv#visualizations-player-playlist div.top-arrow[data-v-896ee520] {\n    text-align: center;\n}\ndiv#visualizations-player-playlist div.top-arrow img[data-v-896ee520] {\n    cursor: pointer;\n}\ndiv#visualizations-player-playlist div.top[data-v-896ee520] {\n    border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n}\ndiv#visualizations-player-playlist div.top span.playlist-title[data-v-896ee520] {\n    color: #000000;\n    font-size: 36px;\n    font-weight: 700;\n}\n\n/*div#visualizations-player-playlist div.top div.amplitude-repeat {*/\n/*    width: 25px;*/\n/*    height: 15px;*/\n/*    cursor: pointer;*/\n/*    float: right;*/\n/*    margin-left: 25px;*/\n/*    margin-top: 20px;*/\n/*}*/\n\n/*div#visualizations-player-playlist div.top div.amplitude-repeat.amplitude-repeat-on {*/\n/*    background: url(\"https://521dimensions.com/img/open-source/amplitudejs/examples/visualizations/repeat-on.svg\") no-repeat center;*/\n/*}*/\n\n/*div#visualizations-player-playlist div.top div.amplitude-repeat.amplitude-repeat-off {*/\n/*    background: url(\"https://521dimensions.com/img/open-source/amplitudejs/examples/visualizations/repeat-off.svg\") no-repeat center;*/\n/*}*/\ndiv#visualizations-player-playlist div.songs-container[data-v-896ee520] {\n    padding-top: 35px;\n    height: 400px;\n    padding-bottom: 90px;\n    overflow-y: scroll;\n}\ndiv#visualizations-player-playlist div.songs-container div.song[data-v-896ee520] {\n    margin-bottom: 20px;\n    cursor: pointer;\n    padding: 5px;\n    border-radius: 3px;\n}\ndiv#visualizations-player-playlist div.songs-container div.song.amplitude-active-song-container[data-v-896ee520] {\n    background-color: #03C1EB;\n}\ndiv#visualizations-player-playlist div.songs-container div.song[data-v-896ee520]:hover {\n    background-color: #4CF298;\n}\ndiv#visualizations-player-playlist div.songs-container div.song span.song-position[data-v-896ee520] {\n    color: #000000;\n    font-size: 18px;\n    float: left;\n}\ndiv#visualizations-player-playlist div.songs-container div.song img.song-album-art[data-v-896ee520] {\n    width: 44px;\n    height: 44px;\n    border-radius: 4px;\n    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.5);\n    float: left;\n    margin-left: 12px;\n    margin-right: 16px;\n}\ndiv#visualizations-player-playlist div.songs-container div.song div.song-meta-data-container[data-v-896ee520] {\n    float: left;\n    width: calc(100% - 105px);\n}\ndiv#visualizations-player-playlist div.songs-container div.song div.song-meta-data-container span.song-name[data-v-896ee520] {\n    font-size: 18px;\n    display: block;\n    color: #000000;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\ndiv#visualizations-player-playlist div.songs-container div.song div.song-meta-data-container span.song-artist[data-v-896ee520] {\n    font-size: 12px;\n    display: block;\n    color: #000000;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\ndiv#visualizations-player-playlist div.songs-container div.song[data-v-896ee520]:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\ndiv#visualizations-player-playlist div.active-audio[data-v-896ee520] {\n    background-color: rgba(3, 193, 235, 0.7);\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    height: 40px;\n    border-bottom-left-radius: 20px;\n    border-bottom-right-radius: 20px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    padding-left: 25px;\n    padding-right: 25px;\n    display: flex;\n}\ndiv#visualizations-player-playlist div.active-audio img.cover-art-small[data-v-896ee520] {\n    width: 50px;\n    height: 50px;\n    border-radius: 4px;\n    float: left;\n}\ndiv#visualizations-player-playlist div.active-audio div.active-audio-right[data-v-896ee520] {\n    float: left;\n    width: calc(100% - 50px);\n    padding-left: 10px;\n}\ndiv#visualizations-player-playlist div.active-audio div.active-audio-right span.song-name[data-v-896ee520] {\n    font-size: 16px;\n    color: #000000;\n    display: block;\n    text-align: center;\n    width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\ndiv#visualizations-player-playlist div.active-audio div.active-audio-right div.active-audio-controls[data-v-896ee520] {\n    text-align: center;\n}\na.learn-more[data-v-896ee520] {\n    display: block;\n    color: #000000;\n    text-align: center;\n    width: 300px;\n    border-radius: 5px;\n    text-decoration: none;\n    padding: 10px;\n    margin: auto;\n    margin-top: 20px;\n    background-color: #482D57;\n}\ndiv.amplitude-mute[data-v-896ee520] {\n    cursor: pointer;\n    width: 30px;\n    height: 19px;\n    float: left;\n}\ndiv.amplitude-mute.amplitude-not-muted[data-v-896ee520] {\n    background: url(" + escape(__webpack_require__(/*! ../assets/volume.svg */ "./resources/js/assets/volume.svg")) + ");\n    background-repeat: no-repeat;\n}\ndiv.amplitude-mute.amplitude-muted[data-v-896ee520] {\n    background: url(" + escape(__webpack_require__(/*! ../assets/mute.svg */ "./resources/js/assets/mute.svg")) + ");\n    background-repeat: no-repeat;\n}\ndiv.control-container div.amplitude-backward[data-v-896ee520], div.control-container div.amplitude-forward[data-v-896ee520] {\n    cursor: pointer;\n    display: inline-block;\n    vertical-align: middle;\n    font-size: 35px;\n}\ndiv.volume-controls[data-v-896ee520] {\n    position: absolute;\n    right: 10px;\n    top: 20px;\n}\n\n/*\n  Small only\n*/\n/*\n  Medium only\n*/\n/*\n  Large Only\n*/\n/*\n  4. Pages\n*/\n/*\n  5. Themes\n*/\n/*\n  6. Utils\n*/\n/*\n  7. Vendors\n*/\ndiv.volume-controls input[type=\"range\"][data-v-896ee520] {\n    -webkit-appearance: none;\n    z-index: 9999;\n    background-color: #000000;\n    /*margin-left: auto;*/\n    /*margin-right: auto;*/\n    display: block;\n    height: 4px;\n    margin-top: 7px;\n}\ndiv.volume-controls input[type=\"range\"][data-v-896ee520]:focus {\n    outline: none;\n}\ndiv.volume-controls input[type=\"range\"][data-v-896ee520]::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 4px;\n    cursor: pointer;\n    border-radius: 0px;\n    background: rgba(255, 255, 255, 0.25);\n}\ndiv.volume-controls input[type=\"range\"][data-v-896ee520]::-webkit-slider-thumb {\n    width: 16px;\n    height: 16px;\n    background-color: #000000;\n    border-radius: 10px;\n    -webkit-appearance: none;\n    margin-top: -6px;\n}\ndiv.volume-controls input[type=\"range\"][data-v-896ee520]::-moz-range-track {\n    width: 100%;\n    height: 4px;\n    cursor: pointer;\n    border-radius: 0px;\n    background: rgba(255, 255, 255, 0.25);\n}\ndiv.volume-controls input[type=\"range\"][data-v-896ee520]::-moz-range-thumb {\n    width: 16px;\n    height: 16px;\n    background-color: #000000;\n    border-radius: 10px;\n    -webkit-appearance: none;\n    margin-top: -6px;\n}\ndiv.volume-controls input[type=\"range\"][data-v-896ee520]::-ms-track {\n    width: 100%;\n    height: 4px;\n    cursor: pointer;\n    border-radius: 0px;\n    background: rgba(255, 255, 255, 0.25);\n}\n.modal-list-data[data-v-896ee520] {\n    list-style: inside;\n}\n.btn-message[data-v-896ee520] {\n    padding: 4px 12px !important;\n    font-size: 14px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewAudioDetails.vue?vue&type=style&index=1&id=896ee520&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ViewAudioDetails.vue?vue&type=style&index=1&id=896ee520&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewAudioDetails.vue?vue&type=style&index=1&id=896ee520&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewAudioDetails.vue?vue&type=style&index=1&id=896ee520&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewAudioDetails.vue?vue&type=style&index=0&id=896ee520&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ViewAudioDetails.vue?vue&type=style&index=0&id=896ee520&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewAudioDetails.vue?vue&type=style&index=0&id=896ee520&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewAudioDetails.vue?vue&type=style&index=0&id=896ee520&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewAudioDetails.vue?vue&type=template&id=896ee520&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ViewAudioDetails.vue?vue&type=template&id=896ee520&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "dashboard" }, [
    _c("div", { staticClass: "container-fluid px-0" }, [
      _vm.audioUnpublished
        ? _c(
            "div",
            {
              staticClass:
                "row collapse show no-gutters d-flex h-100 position-relative"
            },
            [_vm._m(0)]
          )
        : _c("div", [
            _vm.isLoggedIn
              ? _c(
                  "div",
                  { staticClass: "pb-2" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass:
                          "btn btn-back-next media-details-page-back-btn",
                        attrs: { to: { name: "Content", hash: "#audio" } }
                      },
                      [
                        _c("i", { staticClass: "fas fa-chevron-left" }),
                        _vm._v(" Back to Content Library\n                ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "text-theme-dark-blue fs-14 pl-2" },
                      [
                        _vm._v("Content Library "),
                        _c("i", { staticClass: "fa fa-arrow-right" }),
                        _vm._v(" " + _vm._s(_vm.audioTitle))
                      ]
                    )
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "row collapse show no-gutters d-flex h-100 position-relative"
              },
              [
                _c("div", { staticClass: "col-lg-4" }, [
                  _c("div", { staticClass: "text-center" }, [
                    _c("h4", { staticClass: "media-details-page-title" }, [
                      _vm._v("Audio Classifications")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "media-categorization-scroll-tab mx-auto"
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "px-4" },
                          [
                            _vm.enableTabNavigation
                              ? _c(
                                  "div",
                                  { staticClass: "position-relative" },
                                  [
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "position-absolute tab-navigation-left-icons",
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.navigateTabScrollOnLeft.apply(
                                              null,
                                              arguments
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fas fa-chevron-left"
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "position-absolute tab-navigation-right-icons",
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.navigateTabScrollOnRight.apply(
                                              null,
                                              arguments
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fas fa-chevron-right"
                                        })
                                      ]
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "b-tabs",
                              {
                                staticClass: "media-categorization-tab",
                                attrs: {
                                  "active-nav-item-class": "text-primary",
                                  "active-tab-class": "",
                                  "content-class": ""
                                },
                                model: {
                                  value: _vm.tabIndex,
                                  callback: function($$v) {
                                    _vm.tabIndex = $$v
                                  },
                                  expression: "tabIndex"
                                }
                              },
                              [
                                _vm.mediaHierarchyInfo.length > 0
                                  ? [
                                      _vm._l(_vm.mediaHierarchyInfo, function(
                                        each,
                                        index
                                      ) {
                                        return [
                                          _c(
                                            "b-tab",
                                            {
                                              attrs: {
                                                active: _vm.activeTab === index
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "title",
                                                    fn: function() {
                                                      return [
                                                        _vm._v(
                                                          "\n                                                    Classification " +
                                                            _vm._s(index + 1) +
                                                            "\n                                                "
                                                        )
                                                      ]
                                                    },
                                                    proxy: true
                                                  }
                                                ],
                                                null,
                                                true
                                              )
                                            },
                                            [
                                              _vm._v(" "),
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "mt-2" },
                                                  [
                                                    _c(
                                                      "MediaDetailsCategoryTabContent",
                                                      {
                                                        ref: "category",
                                                        refInFor: true,
                                                        attrs: {
                                                          each: each,
                                                          objectIndex: index
                                                        }
                                                      }
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]
                                            ],
                                            2
                                          )
                                        ]
                                      })
                                    ]
                                  : _vm._e()
                              ],
                              2
                            )
                          ],
                          1
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { class: _vm.dynamicColumnClass },
                  [
                    _c(
                      "h4",
                      { staticClass: "text-center media-details-page-title" },
                      [_vm._v("Audio Details")]
                    ),
                    _vm._v(" "),
                    _c("div", { attrs: { id: "visualizations-player" } }, [
                      _c("div", { staticClass: "top-container" }, [
                        _c(
                          "div",
                          {
                            staticClass: "amplitude-visualization",
                            attrs: { id: "large-visualization" }
                          },
                          [
                            _vm.audioUnavailable
                              ? _c(
                                  "div",
                                  {
                                    staticClass:
                                      "h-100 d-flex justify-content-center align-items-center video-audio-unavailable-error-message"
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    Audio unavailable\n                                "
                                    )
                                  ]
                                )
                              : _vm._e()
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _vm._m(1),
                      _vm._v(" "),
                      _vm._m(2),
                      _vm._v(" "),
                      _vm._m(3),
                      _vm._v(" "),
                      _c("div", { staticClass: "control-container" }, [
                        _c(
                          "div",
                          { attrs: { id: "central-control-container" } },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "position-relative",
                                attrs: { id: "central-controls" }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "amplitude-backward",
                                    on: { click: _vm.audioStepBackward }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fas fa-step-backward"
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "amplitude-backward",
                                    on: { click: _vm.audioBackward }
                                  },
                                  [_c("i", { staticClass: "fas fa-backward" })]
                                ),
                                _vm._v(" "),
                                _c("div", {
                                  staticClass: "amplitude-play-pause",
                                  attrs: { id: "play-pause" }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "amplitude-forward",
                                    on: { click: _vm.audioForward }
                                  },
                                  [_c("i", { staticClass: "fas fa-forward" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "amplitude-forward",
                                    on: { click: _vm.audioStepForward }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fas fa-step-forward"
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _vm._m(4)
                              ]
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    !_vm.audioUnavailable
                      ? [
                          _c("div", { staticClass: "row py-2 fs-16" }, [
                            _c("div", { staticClass: "col-md-8 pr-0" }, [
                              _c("span", { staticClass: "media-title-text" }, [
                                _vm._v(_vm._s(_vm.audioTitle))
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-md-4 text-right pt-1 pl-0" },
                              [
                                _vm.userId &&
                                _vm.senderCompanyId != _vm.companyId
                                  ? _c(
                                      "span",
                                      {
                                        staticClass:
                                          "btn btn-back-next btn-message",
                                        attrs: { href: "javascript:;" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.showMessageModal.apply(
                                              null,
                                              arguments
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("Message")]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "router-link",
                                  {
                                    staticClass:
                                      "btn btn-back-next btn-view-profile-media-details",
                                    attrs: { to: "/company/" + _vm.companySlug }
                                  },
                                  [_vm._v("View Profile")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass: "cursor-pointer pr-1",
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.shareMediaLink.apply(
                                          null,
                                          arguments
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _vm._m(5),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "share-text" }, [
                                      _vm._v("SHARE")
                                    ])
                                  ]
                                )
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "row audio-video-tag fs-14" },
                            [
                              _c("div", { staticClass: "col" }, [
                                _c("ul", [
                                  _c("li", [
                                    _c("span", { staticClass: "total-view" }, [
                                      _vm._v(
                                        _vm._s(
                                          this.numShortFormatter(
                                            _vm.listenCounter + 1
                                          )
                                        ) + " Views"
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _vm._v(_vm._s(_vm.publicationDate))
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _vm._v(_vm._s(_vm.audioMediaType))
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c(
                                      "a",
                                      {
                                        attrs: { href: "javascript:;" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.showAllSubjectModal.apply(
                                              null,
                                              arguments
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("View Subjects")]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("li", [
                                    _c(
                                      "a",
                                      {
                                        attrs: { href: "javascript:;" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.showAllPresenterModal.apply(
                                              null,
                                              arguments
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("View Participants")]
                                    )
                                  ])
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "text-justify pt-2 fs-14" },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.audioDescription) +
                                  "\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("p", { staticClass: "custom-hr-theme mt-3" }),
                          _vm._v(" "),
                          _c(
                            "h4",
                            {
                              staticClass:
                                "pb-2 text-theme-dark-blue fs-16 text-center"
                            },
                            [
                              _vm._v(
                                "Other Audios by " + _vm._s(_vm.companyName)
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-carousel",
                            { attrs: { controls: "" } },
                            [
                              _vm._l(_vm.otherAudio, function(audio, index) {
                                return [
                                  index % 4 == 0
                                    ? [
                                        _c("b-carousel-slide", {
                                          scopedSlots: _vm._u(
                                            [
                                              {
                                                key: "img",
                                                fn: function() {
                                                  return [
                                                    _c(
                                                      "b-card-group",
                                                      [
                                                        _c(
                                                          "b-link",
                                                          {
                                                            attrs: {
                                                              to: {
                                                                name:
                                                                  "ViewAudioDetails",
                                                                params: {
                                                                  slug:
                                                                    _vm
                                                                      .otherAudio[
                                                                      index
                                                                    ]
                                                                      .company_slug,
                                                                  id:
                                                                    _vm
                                                                      .otherAudio[
                                                                      index
                                                                    ].uuid
                                                                }
                                                              }
                                                            },
                                                            nativeOn: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.updateViewKey.apply(
                                                                  null,
                                                                  arguments
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "b-card",
                                                              {
                                                                staticClass:
                                                                  "mx-1 carousel-card-link",
                                                                attrs: {
                                                                  "img-src":
                                                                    "/images/audio_thumb.png"
                                                                }
                                                              },
                                                              [
                                                                _c("div", {}, [
                                                                  _c("img", {
                                                                    staticClass:
                                                                      "rounded-circle float-left mr-1",
                                                                    attrs: {
                                                                      src:
                                                                        "/images/audio_thumb.png",
                                                                      width:
                                                                        "25",
                                                                      height:
                                                                        "25"
                                                                    }
                                                                  }),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "p",
                                                                    {
                                                                      staticClass:
                                                                        "warp-text-title"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          _vm
                                                                            .otherAudio[
                                                                            index
                                                                          ].name
                                                                        )
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "company-title warp-text-title"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "\n                                                                " +
                                                                          _vm._s(
                                                                            _vm.companyName
                                                                          ) +
                                                                          "\n                                                            "
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "ul",
                                                                    {
                                                                      staticClass:
                                                                        "content-ul"
                                                                    },
                                                                    [
                                                                      _c("li", [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            _vm.numShortFormatter(
                                                                              _vm
                                                                                .otherAudio[
                                                                                index
                                                                              ]
                                                                                .view_counter
                                                                            )
                                                                          ) +
                                                                            " Views"
                                                                        )
                                                                      ]),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c("li", [
                                                                        _vm._v(
                                                                          _vm._s(
                                                                            _vm
                                                                              .otherAudio[
                                                                              index
                                                                            ]
                                                                              .created
                                                                          )
                                                                        )
                                                                      ])
                                                                    ]
                                                                  )
                                                                ])
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        ),
                                                        _vm._v(" "),
                                                        _vm.otherAudio[
                                                          index + 1
                                                        ] != undefined
                                                          ? [
                                                              _c(
                                                                "b-link",
                                                                {
                                                                  attrs: {
                                                                    to: {
                                                                      name:
                                                                        "ViewAudioDetails",
                                                                      params: {
                                                                        slug:
                                                                          _vm
                                                                            .otherAudio[
                                                                            index +
                                                                              1
                                                                          ]
                                                                            .company_slug,
                                                                        id:
                                                                          _vm
                                                                            .otherAudio[
                                                                            index +
                                                                              1
                                                                          ].uuid
                                                                      }
                                                                    }
                                                                  },
                                                                  nativeOn: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.updateViewKey.apply(
                                                                        null,
                                                                        arguments
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "b-card",
                                                                    {
                                                                      staticClass:
                                                                        "mx-1 carousel-card-link",
                                                                      attrs: {
                                                                        "img-src":
                                                                          "/images/audio_thumb.png"
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "div",
                                                                        {},
                                                                        [
                                                                          _c(
                                                                            "img",
                                                                            {
                                                                              staticClass:
                                                                                "rounded-circle float-left mr-1",
                                                                              attrs: {
                                                                                src:
                                                                                  "/images/audio_thumb.png",
                                                                                width:
                                                                                  "25",
                                                                                height:
                                                                                  "25"
                                                                              }
                                                                            }
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "p",
                                                                            {
                                                                              staticClass:
                                                                                "warp-text-title"
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                _vm._s(
                                                                                  _vm
                                                                                    .otherAudio[
                                                                                    index +
                                                                                      1
                                                                                  ]
                                                                                    .name
                                                                                )
                                                                              )
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "div",
                                                                            {
                                                                              staticClass:
                                                                                "company-title warp-text-title"
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "\n                                                                    " +
                                                                                  _vm._s(
                                                                                    _vm.companyName
                                                                                  ) +
                                                                                  "\n                                                                "
                                                                              )
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "ul",
                                                                            {
                                                                              staticClass:
                                                                                "content-ul"
                                                                            },
                                                                            [
                                                                              _c(
                                                                                "li",
                                                                                [
                                                                                  _vm._v(
                                                                                    _vm._s(
                                                                                      _vm.numShortFormatter(
                                                                                        _vm
                                                                                          .otherAudio[
                                                                                          index +
                                                                                            1
                                                                                        ]
                                                                                          .view_counter
                                                                                      )
                                                                                    ) +
                                                                                      " Views"
                                                                                  )
                                                                                ]
                                                                              ),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              _c(
                                                                                "li",
                                                                                [
                                                                                  _vm._v(
                                                                                    _vm._s(
                                                                                      _vm
                                                                                        .otherAudio[
                                                                                        index +
                                                                                          1
                                                                                      ]
                                                                                        .created
                                                                                    )
                                                                                  )
                                                                                ]
                                                                              )
                                                                            ]
                                                                          )
                                                                        ]
                                                                      )
                                                                    ]
                                                                  )
                                                                ],
                                                                1
                                                              )
                                                            ]
                                                          : [_c("div", {})],
                                                        _vm._v(" "),
                                                        _vm.otherAudio[
                                                          index + 2
                                                        ] != undefined
                                                          ? [
                                                              _c(
                                                                "b-link",
                                                                {
                                                                  attrs: {
                                                                    to: {
                                                                      name:
                                                                        "ViewAudioDetails",
                                                                      params: {
                                                                        slug:
                                                                          _vm
                                                                            .otherAudio[
                                                                            index +
                                                                              2
                                                                          ]
                                                                            .company_slug,
                                                                        id:
                                                                          _vm
                                                                            .otherAudio[
                                                                            index +
                                                                              2
                                                                          ].uuid
                                                                      }
                                                                    }
                                                                  },
                                                                  nativeOn: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.updateViewKey.apply(
                                                                        null,
                                                                        arguments
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "b-card",
                                                                    {
                                                                      staticClass:
                                                                        "mx-1 carousel-card-link",
                                                                      attrs: {
                                                                        "img-src":
                                                                          "/images/audio_thumb.png"
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "div",
                                                                        {},
                                                                        [
                                                                          _c(
                                                                            "img",
                                                                            {
                                                                              staticClass:
                                                                                "rounded-circle float-left mr-1",
                                                                              attrs: {
                                                                                src:
                                                                                  "/images/audio_thumb.png",
                                                                                width:
                                                                                  "25",
                                                                                height:
                                                                                  "25"
                                                                              }
                                                                            }
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "p",
                                                                            {
                                                                              staticClass:
                                                                                "warp-text-title"
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                _vm._s(
                                                                                  _vm
                                                                                    .otherAudio[
                                                                                    index +
                                                                                      2
                                                                                  ]
                                                                                    .name
                                                                                )
                                                                              )
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "div",
                                                                            {
                                                                              staticClass:
                                                                                "company-title warp-text-title"
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "\n                                                                    " +
                                                                                  _vm._s(
                                                                                    _vm.companyName
                                                                                  ) +
                                                                                  "\n                                                                "
                                                                              )
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "ul",
                                                                            {
                                                                              staticClass:
                                                                                "content-ul"
                                                                            },
                                                                            [
                                                                              _c(
                                                                                "li",
                                                                                [
                                                                                  _vm._v(
                                                                                    _vm._s(
                                                                                      _vm.numShortFormatter(
                                                                                        _vm
                                                                                          .otherAudio[
                                                                                          index +
                                                                                            2
                                                                                        ]
                                                                                          .view_counter
                                                                                      )
                                                                                    ) +
                                                                                      " Views"
                                                                                  )
                                                                                ]
                                                                              ),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              _c(
                                                                                "li",
                                                                                [
                                                                                  _vm._v(
                                                                                    _vm._s(
                                                                                      _vm
                                                                                        .otherAudio[
                                                                                        index +
                                                                                          2
                                                                                      ]
                                                                                        .created
                                                                                    )
                                                                                  )
                                                                                ]
                                                                              )
                                                                            ]
                                                                          )
                                                                        ]
                                                                      )
                                                                    ]
                                                                  )
                                                                ],
                                                                1
                                                              )
                                                            ]
                                                          : [_c("div", {})],
                                                        _vm._v(" "),
                                                        _vm.otherAudio[
                                                          index + 3
                                                        ] != undefined
                                                          ? [
                                                              _c(
                                                                "b-link",
                                                                {
                                                                  attrs: {
                                                                    to: {
                                                                      name:
                                                                        "ViewAudioDetails",
                                                                      params: {
                                                                        slug:
                                                                          _vm
                                                                            .otherAudio[
                                                                            index +
                                                                              3
                                                                          ]
                                                                            .company_slug,
                                                                        id:
                                                                          _vm
                                                                            .otherAudio[
                                                                            index +
                                                                              3
                                                                          ].uuid
                                                                      }
                                                                    }
                                                                  },
                                                                  nativeOn: {
                                                                    click: function(
                                                                      $event
                                                                    ) {
                                                                      return _vm.updateViewKey.apply(
                                                                        null,
                                                                        arguments
                                                                      )
                                                                    }
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "b-card",
                                                                    {
                                                                      staticClass:
                                                                        "mx-1 carousel-card-link",
                                                                      attrs: {
                                                                        "img-src":
                                                                          "/images/audio_thumb.png"
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "div",
                                                                        {},
                                                                        [
                                                                          _c(
                                                                            "img",
                                                                            {
                                                                              staticClass:
                                                                                "rounded-circle float-left mr-1",
                                                                              attrs: {
                                                                                src:
                                                                                  "/images/audio_thumb.png",
                                                                                width:
                                                                                  "25",
                                                                                height:
                                                                                  "25"
                                                                              }
                                                                            }
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "p",
                                                                            {
                                                                              staticClass:
                                                                                "warp-text-title"
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                _vm._s(
                                                                                  _vm
                                                                                    .otherAudio[
                                                                                    index +
                                                                                      3
                                                                                  ]
                                                                                    .name
                                                                                )
                                                                              )
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "div",
                                                                            {
                                                                              staticClass:
                                                                                "company-title warp-text-title"
                                                                            },
                                                                            [
                                                                              _vm._v(
                                                                                "\n                                                                    " +
                                                                                  _vm._s(
                                                                                    _vm.companyName
                                                                                  ) +
                                                                                  "\n                                                                "
                                                                              )
                                                                            ]
                                                                          ),
                                                                          _vm._v(
                                                                            " "
                                                                          ),
                                                                          _c(
                                                                            "ul",
                                                                            {
                                                                              staticClass:
                                                                                "content-ul"
                                                                            },
                                                                            [
                                                                              _c(
                                                                                "li",
                                                                                [
                                                                                  _vm._v(
                                                                                    _vm._s(
                                                                                      _vm.numShortFormatter(
                                                                                        _vm
                                                                                          .otherAudio[
                                                                                          index +
                                                                                            3
                                                                                        ]
                                                                                          .view_counter
                                                                                      )
                                                                                    ) +
                                                                                      " Views"
                                                                                  )
                                                                                ]
                                                                              ),
                                                                              _vm._v(
                                                                                " "
                                                                              ),
                                                                              _c(
                                                                                "li",
                                                                                [
                                                                                  _vm._v(
                                                                                    _vm._s(
                                                                                      _vm
                                                                                        .otherAudio[
                                                                                        index +
                                                                                          3
                                                                                      ]
                                                                                        .created
                                                                                    )
                                                                                  )
                                                                                ]
                                                                              )
                                                                            ]
                                                                          )
                                                                        ]
                                                                      )
                                                                    ]
                                                                  )
                                                                ],
                                                                1
                                                              )
                                                            ]
                                                          : [_c("div", {})]
                                                      ],
                                                      2
                                                    )
                                                  ]
                                                },
                                                proxy: true
                                              }
                                            ],
                                            null,
                                            true
                                          )
                                        })
                                      ]
                                    : _vm._e()
                                ]
                              })
                            ],
                            2
                          )
                        ]
                      : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "b-modal",
                  {
                    ref: "modalShareLink",
                    attrs: {
                      id: "modalShareLink",
                      title: "Share",
                      size: "lg",
                      centered: "",
                      "hide-footer": ""
                    }
                  },
                  [
                    _c("share-modal", {
                      attrs: {
                        publicShareLink: this.publicShareLink,
                        sharableMediaId: this.media_file_id,
                        shareMediaType: this.shareMediaType
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-modal",
                  {
                    ref: "modalAllSubject",
                    attrs: {
                      id: "modalAllSubject",
                      title: "Subjects of Company Audio",
                      centered: "",
                      "hide-footer": "",
                      "title-class": "modal-title-new"
                    }
                  },
                  [
                    _c(
                      "ul",
                      { staticClass: "text-center pl-0 modal-list-data" },
                      _vm._l(_vm.audioSubject, function(subject) {
                        return _c("li", [_vm._v(_vm._s(subject.name))])
                      }),
                      0
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-modal",
                  {
                    ref: "modalAllPresenter",
                    attrs: {
                      id: "modalAllPresenter",
                      title: "Audio Participants",
                      centered: "",
                      "hide-footer": ""
                    }
                  },
                  [
                    _c(
                      "ul",
                      _vm._l(_vm.audioPresenter, function(presenter) {
                        return _c(
                          "li",
                          [
                            presenter.name == "Other"
                              ? [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(_vm.otherAudioPresenter) +
                                      "\n                            "
                                  )
                                ]
                              : [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(presenter.name) +
                                      "\n                            "
                                  )
                                ]
                          ],
                          2
                        )
                      }),
                      0
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-modal",
                  {
                    ref: "message-modal",
                    attrs: { centered: "", size: "md", "hide-footer": "" },
                    scopedSlots: _vm._u([
                      {
                        key: "modal-header",
                        fn: function() {
                          return [
                            _c(
                              "div",
                              { staticClass: "w-100" },
                              [
                                _c(
                                  "h5",
                                  {
                                    staticClass: "modal-title modal-title-new"
                                  },
                                  [_vm._v("Internal Message")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-button",
                                  {
                                    staticClass:
                                      "message-modal-close close float-right",
                                    on: { click: _vm.closeMessageModal }
                                  },
                                  [_vm._v("x")]
                                )
                              ],
                              1
                            )
                          ]
                        },
                        proxy: true
                      }
                    ])
                  },
                  [
                    _vm._v(" "),
                    _c("InternalMessage", {
                      attrs: { receiverCompanyId: _vm.companyId },
                      on: { internalMessageSuccess: _vm.closeMessageModal }
                    })
                  ],
                  1
                )
              ],
              1
            )
          ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col text-center mb-5" }, [
      _c("img", {
        attrs: { src: "/images/issuerpixel_logo.png", alt: "issuerpixel_logo" }
      }),
      _vm._v(" "),
      _c("h3", { staticClass: "mt-2" }, [
        _vm._v("Audio has been made Private by owner.")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "meta-data-container" }, [
      _c("span", {
        staticClass: "now-playing-name",
        attrs: { "data-amplitude-song-info": "name" }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "now-playing-artist-album" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "song-navigation" }, [
      _c("input", {
        staticClass: "amplitude-song-slider",
        attrs: { type: "range" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "clearfix" }, [
      _c("span", { staticClass: "amplitude-current-time float-left" }),
      _vm._v(" "),
      _c("span", { staticClass: "amplitude-time-remaining" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "volume-container" } }, [
      _c("div", { staticClass: "volume-controls" }, [
        _c("div", { staticClass: "amplitude-mute amplitude-not-muted" }),
        _vm._v(" "),
        _c("input", {
          staticClass: "amplitude-volume-slider",
          attrs: { type: "range" }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "ms-range-fix" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      { staticClass: "d-inline-block share-icon-media-details" },
      [_c("i", { staticClass: "fa fa-share-alt share-fa-icon-details" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/apis/Social.js":
/*!*************************************!*\
  !*** ./resources/js/apis/Social.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

var ajaxRequest = null;
/* harmony default export */ __webpack_exports__["default"] = ({
  setFbAccessToken: function setFbAccessToken(data) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/set-fb-access-token", data);
  },
  addLinkedinInfo: function addLinkedinInfo(data) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/linkedin-info", data);
  },
  addTwitterInfo: function addTwitterInfo(data) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/twitter-info", data);
  },
  sharing: function sharing(data) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/social-sharing", data);
  },
  getTwitterMetrics: function getTwitterMetrics(page) {
    // cancel  previous ajax if exists
    if (ajaxRequest) {
      ajaxRequest.cancel();
    }

    ajaxRequest = axios.CancelToken.source();
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/get-twitter-metrics-data?page=" + page, {
      cancelToken: ajaxRequest.token
    });
  },
  getFacebookMetrics: function getFacebookMetrics(page) {
    // cancel  previous ajax if exists
    if (ajaxRequest) {
      ajaxRequest.cancel();
    }

    ajaxRequest = axios.CancelToken.source();
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/get-facebook-metrics-data?page=" + page, {
      cancelToken: ajaxRequest.token
    });
  },
  getLinkedinMetrics: function getLinkedinMetrics(page) {
    // cancel  previous ajax if exists
    if (ajaxRequest) {
      ajaxRequest.cancel();
    }

    ajaxRequest = axios.CancelToken.source();
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/get-linkedin-metrics-data?page=" + page, {
      cancelToken: ajaxRequest.token
    });
  },
  getSocialIntegratedList: function getSocialIntegratedList() {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/get-social-integrated-list");
  }
});

/***/ }),

/***/ "./resources/js/assets/mute.svg":
/*!**************************************!*\
  !*** ./resources/js/assets/mute.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/mute.svg?2995155505de7040f67b21c51e0d34f0";

/***/ }),

/***/ "./resources/js/assets/pause.png":
/*!***************************************!*\
  !*** ./resources/js/assets/pause.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/pause.png?c50e1f1c53ca17901b94ec9575de1bb0";

/***/ }),

/***/ "./resources/js/assets/play.png":
/*!**************************************!*\
  !*** ./resources/js/assets/play.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/play.png?def46cad98c09fa5e8824a40d5026bf7";

/***/ }),

/***/ "./resources/js/assets/volume.svg":
/*!****************************************!*\
  !*** ./resources/js/assets/volume.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/volume.svg?ac810510bfd4ca5681a5b3f30b8b0d10";

/***/ }),

/***/ "./resources/js/views/ViewAudioDetails.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/ViewAudioDetails.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewAudioDetails_vue_vue_type_template_id_896ee520_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewAudioDetails.vue?vue&type=template&id=896ee520&scoped=true& */ "./resources/js/views/ViewAudioDetails.vue?vue&type=template&id=896ee520&scoped=true&");
/* harmony import */ var _ViewAudioDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewAudioDetails.vue?vue&type=script&lang=js& */ "./resources/js/views/ViewAudioDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ViewAudioDetails_vue_vue_type_style_index_0_id_896ee520_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewAudioDetails.vue?vue&type=style&index=0&id=896ee520&scoped=true&lang=css& */ "./resources/js/views/ViewAudioDetails.vue?vue&type=style&index=0&id=896ee520&scoped=true&lang=css&");
/* harmony import */ var _ViewAudioDetails_vue_vue_type_style_index_1_id_896ee520_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ViewAudioDetails.vue?vue&type=style&index=1&id=896ee520&scoped=true&lang=scss& */ "./resources/js/views/ViewAudioDetails.vue?vue&type=style&index=1&id=896ee520&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _ViewAudioDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewAudioDetails_vue_vue_type_template_id_896ee520_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ViewAudioDetails_vue_vue_type_template_id_896ee520_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "896ee520",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ViewAudioDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ViewAudioDetails.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/ViewAudioDetails.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewAudioDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewAudioDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewAudioDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewAudioDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ViewAudioDetails.vue?vue&type=style&index=0&id=896ee520&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/views/ViewAudioDetails.vue?vue&type=style&index=0&id=896ee520&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewAudioDetails_vue_vue_type_style_index_0_id_896ee520_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewAudioDetails.vue?vue&type=style&index=0&id=896ee520&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewAudioDetails.vue?vue&type=style&index=0&id=896ee520&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewAudioDetails_vue_vue_type_style_index_0_id_896ee520_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewAudioDetails_vue_vue_type_style_index_0_id_896ee520_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewAudioDetails_vue_vue_type_style_index_0_id_896ee520_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewAudioDetails_vue_vue_type_style_index_0_id_896ee520_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/ViewAudioDetails.vue?vue&type=style&index=1&id=896ee520&scoped=true&lang=scss&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/ViewAudioDetails.vue?vue&type=style&index=1&id=896ee520&scoped=true&lang=scss& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewAudioDetails_vue_vue_type_style_index_1_id_896ee520_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewAudioDetails.vue?vue&type=style&index=1&id=896ee520&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewAudioDetails.vue?vue&type=style&index=1&id=896ee520&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewAudioDetails_vue_vue_type_style_index_1_id_896ee520_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewAudioDetails_vue_vue_type_style_index_1_id_896ee520_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewAudioDetails_vue_vue_type_style_index_1_id_896ee520_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewAudioDetails_vue_vue_type_style_index_1_id_896ee520_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/ViewAudioDetails.vue?vue&type=template&id=896ee520&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/ViewAudioDetails.vue?vue&type=template&id=896ee520&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewAudioDetails_vue_vue_type_template_id_896ee520_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewAudioDetails.vue?vue&type=template&id=896ee520&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewAudioDetails.vue?vue&type=template&id=896ee520&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewAudioDetails_vue_vue_type_template_id_896ee520_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewAudioDetails_vue_vue_type_template_id_896ee520_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);