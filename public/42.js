(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apis_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apis/User */ "./resources/js/apis/User.js");
/* harmony import */ var _apis_Common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apis/Common */ "./resources/js/apis/Common.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var $ = jquery__WEBPACK_IMPORTED_MODULE_1___default.a;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Dashboard',
  data: function data() {
    return {
      isLoading: false,
      company: "",
      progressMax: 100,
      generalProgress: 0,
      contactProgress: 0,
      structureProgress: 0,
      valuationProgress: 0,
      socialProgress: 0,
      taxonomyProgress: 0,
      historyProgress: 0,
      corporateActionProgress: 0,
      leadershipGovernanceProgress: 0,
      progressPercentage: 0,
      totalVideo: 0,
      totalVideoView: 0,
      totalAudioView: 0,
      totalVideoSearch: 0,
      totalAudio: 0,
      recentVideos: [],
      recentAudios: [],
      linkButtonGrayOut: '',
      linkGrayOut: '',
      // bulletins: [],
      allNews: []
    };
  },
  components: {
    loader: function loader() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/Loader */ "./resources/js/components/Loader.vue"));
    }
  },
  methods: {
    toggleProBanner: function toggleProBanner() {
      $('body').toggleClass('pro-banner-collapse');
    },
    getCompanyInfo: function () {
      var _getCompanyInfo = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _apis_User__WEBPACK_IMPORTED_MODULE_2__["default"].getCompanyInfo().then(function (response) {
                  _this.isLoading = false;
                  _this.generalProgress = response.data.data.general_info;
                  _this.contactProgress = response.data.data.contact;
                  _this.structureProgress = response.data.data.structure;
                  _this.valuationProgress = response.data.data.valuation;
                  _this.socialProgress = response.data.data.social_presence;
                  _this.taxonomyProgress = response.data.data.hierarchy;
                  _this.historyProgress = response.data.data.history;
                  _this.corporateActionProgress = response.data.data.corporate_action;
                  _this.leadershipGovernanceProgress = response.data.data.leadership_governance;
                  _this.progressPercentage = parseInt(_this.generalProgress) + parseInt(_this.contactProgress) + parseInt(_this.structureProgress) + parseInt(_this.valuationProgress) + parseInt(_this.socialProgress) + parseInt(_this.taxonomyProgress);

                  _this.percentageTotalValue();
                })["catch"](function (error) {
                  _this.isLoading = false;

                  if (error.response.status == 401) {
                    _this.$emit("logout");
                  }
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getCompanyInfo() {
        return _getCompanyInfo.apply(this, arguments);
      }

      return getCompanyInfo;
    }(),
    getDashboardStatistics: function getDashboardStatistics() {
      var _this2 = this;

      _apis_User__WEBPACK_IMPORTED_MODULE_2__["default"].dashboardStatistics().then(function (response) {
        _this2.totalVideo = response.data.data.total_video;
        _this2.totalAudio = response.data.data.total_audio;
        _this2.totalVideoView = response.data.data.total_video_view;
        _this2.totalAudioView = response.data.data.total_audio_view;
        _this2.totalVideoSearch = response.data.data.total_video_search;
        _this2.recentVideos = response.data.data.latest_uploaded_video;
        _this2.recentAudios = response.data.data.latest_uploaded_audio; // this.bulletins = response.data.data.bulletins;
      })["catch"](function (error) {
        _this2.isLoading = false;

        if (error.response.status == 401) {
          _this2.$emit("logout");
        }
      });
    },
    getPercentageColorClass: function getPercentageColorClass() {
      if (this.progressPercentage <= 32) {
        return 'red-color';
      } else if (this.progressPercentage > 32 && this.progressPercentage <= 49) {
        return 'orange-color';
      } else if (this.progressPercentage > 49 && this.progressPercentage <= 66) {
        return 'yellow-color';
      } else if (this.progressPercentage > 66 && this.progressPercentage <= 82) {
        return 'light-pink-color';
      } else if (this.progressPercentage > 82 && this.progressPercentage <= 99) {
        return 'light-purple-color';
      } else if (this.progressPercentage == 100) {
        return 'purple-color';
      }

      return '';
    },
    percentageTotalValue: function percentageTotalValue() {
      var vueIns = this;
      $(".circle_percent").each(function () {
        var $this = $(this),
            // $dataV = $this.data("percent"),
        $dataV = vueIns.progressPercentage,
            $dataDeg = $dataV * 3.6,
            $round = $this.find(".round_per");
        $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
        $this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
        $this.prop('Counter', 0).animate({
          Counter: $dataV
        }, {
          duration: 1000,
          easing: 'swing',
          step: function step(now) {
            $this.find(".percent_text").text(Math.ceil(now) + "%");
          }
        });

        if ($dataV >= 51) {
          $round.css("transform", "rotate(" + 360 + "deg)");
          setTimeout(function () {
            $this.addClass("percent_more");
          }, 500);
          setTimeout(function () {
            $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
          }, 500);
        }
      });
    },
    getDashboardNews: function getDashboardNews() {
      var _this3 = this;

      _apis_User__WEBPACK_IMPORTED_MODULE_2__["default"].dashboardNews().then(function (response) {
        if (response.data.data.allNews) {
          _this3.allNews = response.data.data.allNews;
        }
      })["catch"](function (error) {
        _this3.isLoading = false;

        if (error.response.status == 401) {
          _this3.$emit("logout");
        }
      });
    }
  },
  created: function created() {
    this.isLoading = true;
    this.stepsPercentage = _apis_Common__WEBPACK_IMPORTED_MODULE_3__["default"].calculateProfileStepsPercentage;
    this.numShortFormatter = _apis_Common__WEBPACK_IMPORTED_MODULE_3__["default"].ViewListenNumFormatter;
    this.getCompanyInfo();
    this.getDashboardStatistics();
    this.getDashboardNews();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=0&id=1f79daf6&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=style&index=0&id=1f79daf6&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".statistics-counter[data-v-1f79daf6] {\n  font-size: 2rem;\n}\n.statistics-counter.without-link[data-v-1f79daf6] {\n  color: #783DAB;\n}\n.content-analytics a[data-v-1f79daf6]:hover {\n  color: blue;\n}\n.recent-video-container[data-v-1f79daf6] {\n  border-radius: 0.75rem;\n  margin-top: 10px;\n}\n.recent-video-container .card-body p[data-v-1f79daf6] {\n  font-size: 0.75rem;\n  color: rgba(30, 8, 87, 0.8);\n  margin-bottom: 2px;\n}\n.recent-video-container .card-body .warp-text-title[data-v-1f79daf6] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 150px;\n}\n.recent-video-container .card-wrapper[data-v-1f79daf6] {\n  padding: 5px;\n}\n.recent-video-container .card-wrapper .card[data-v-1f79daf6] {\n  max-height: 230px;\n}\n.recent-video-container .company-title[data-v-1f79daf6], .recent-video-container ul.pagination[data-v-1f79daf6] {\n  font-size: 0.625rem;\n  color: #6a666d;\n}\n.recent-video-container ul.content-ul[data-v-1f79daf6] {\n  display: inline-flex;\n  font-size: 0.625rem;\n  color: #8a878d;\n  padding-left: 0px;\n}\n.recent-video-container ul.content-ul li[data-v-1f79daf6]:not(:last-child) {\n  padding-right: 12px;\n}\n.recent-video-container ul.content-ul li[data-v-1f79daf6]:first-child {\n  list-style: none;\n}\n.recent-video-container ul.content-ul-bulletin[data-v-1f79daf6] {\n  display: inline-flex;\n  font-size: 0.625rem;\n  color: #8a878d;\n  padding-left: 0px;\n  flex-direction: column;\n  list-style: none;\n}\n.recent-video-container ul.content-ul-bulletin li[data-v-1f79daf6]:not(:last-child) {\n  padding-right: 12px;\n}\n.recent-video-container ul.content-ul-bulletin li[data-v-1f79daf6]:first-child {\n  color: rgba(30, 8, 87, 0.8);\n}\n.recent-video-container .fa-circle[data-v-1f79daf6] {\n  font-size: 1px;\n}\n.recent-video-container .loader[data-v-1f79daf6] {\n  /* Loader Div Class */\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #eceaea;\n  background-image: url(/images/small-loader.gif);\n  background-size: 50px;\n  background-repeat: no-repeat;\n  background-position: center;\n  z-index: 10000000;\n  opacity: 0.4;\n  filter: alpha(opacity=40);\n}\n.recent-video-container .bg_content_photo[data-v-1f79daf6] {\n  display: block;\n  width: 100%;\n  height: 135px;\n  background-position: center 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #7E097C;\n}\n.news-container[data-v-1f79daf6] {\n  padding: 10px;\n  position: relative;\n  overflow: hidden;\n  background: #fff;\n  width: 100%;\n  border: 1px solid #dadce0;\n  border-radius: 8px;\n  min-height: 100px;\n  box-shadow: 0 4px 8px 0px #a7afb754;\n}\n.card-body.profile-completion[data-v-1f79daf6], .card-body.content-analytics[data-v-1f79daf6] {\n  padding-bottom: 0.25rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=1&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=style&index=1&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.circle_percent {\n    font-size: 55px;\n    width: 1em;\n    height: 1em;\n    position: relative;\n    background: #ff0000;\n    border-radius: 50%;\n    overflow: hidden;\n    display: inline-block;\n    /*margin: 20px;*/\n}\n.circle_inner {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 1em;\n    height: 1em;\n    clip: rect(0 1em 1em .5em);\n}\n.round_per {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 1em;\n    height: 1em;\n    background: #38c172;\n    clip: rect(0 1em 1em .5em);\n    transform: rotate(180deg);\n    transition: 1.05s;\n}\n.percent_more .circle_inner {\n    clip: rect(0 .5em 1em 0em);\n}\n.percent_more:after {\n    position: absolute;\n    left: .5em;\n    top: 0em;\n    right: 0;\n    bottom: 0;\n    background: #38c172;\n    content: '';\n}\n.circle_inbox {\n    position: absolute;\n    top: 7px;\n    left: 7px;\n    right: 7px;\n    bottom: 7px;\n    background: #fff;\n    z-index: 3;\n    border-radius: 50%;\n}\n.percent_text {\n    color: rgba(30, 8, 87, 0.8);\n    position: absolute;\n    font-size: 12px;\n    font-weight: 600;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 3;\n}\n/*css added by khalid*/\n.dashboard-profile-complete-btn{\n    margin-left: -34px;\n    font-size: 11px;\n}\n@media (min-width: 811px) {\n.dashboard-profile-btn-position{\n        position: absolute;\n        bottom: 15px;\n}\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=0&id=1f79daf6&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=style&index=0&id=1f79daf6&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=1f79daf6&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=0&id=1f79daf6&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=1&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=style&index=1&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=1&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
      _c("section", { staticClass: "dashboard pt-0" }, [
        _vm.progressPercentage < 100
          ? _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12 grid-margin" }, [
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card-body profile-completion" }, [
                    _c(
                      "h5",
                      { staticClass: "text-center text-theme-dark-blue pb-1" },
                      [_vm._v("Company profile is incomplete")]
                    ),
                    _vm._v(" "),
                    _c(
                      "h4",
                      { staticClass: "card-title text-theme-dark-blue" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: { name: "CompanyQuestionnairesDetails" }
                            }
                          },
                          [
                            _vm._v(
                              "\n                                    Profile Completion Summary\n                                "
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "row fs-14 justify-content-between" },
                      [
                        _c("div", { staticClass: "col-lg-2 col-md-6 pr-0" }, [
                          _c("div", { staticClass: "d-flex" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "wrapper dashboard-profile-complete-fs"
                              },
                              [
                                _c(
                                  "p",
                                  [
                                    _c("i", {
                                      staticClass: "far",
                                      class: {
                                        "fa-check-circle color-green":
                                          this.stepsPercentage(
                                            15,
                                            _vm.generalProgress
                                          ) == 100,
                                        "fa-circle color-red":
                                          this.stepsPercentage(
                                            15,
                                            _vm.generalProgress
                                          ) != 100
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "text-theme-dark-blue",
                                        attrs: {
                                          to: {
                                            name:
                                              "CompanyQuestionnairesDetails",
                                            hash: "#profile"
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                                    General\n                                                "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  [
                                    _c("i", {
                                      staticClass: "far",
                                      class: {
                                        "fa-check-circle color-green":
                                          this.stepsPercentage(
                                            15,
                                            _vm.contactProgress
                                          ) == 100,
                                        "fa-circle color-red":
                                          this.stepsPercentage(
                                            15,
                                            _vm.contactProgress
                                          ) != 100
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "text-theme-dark-blue",
                                        attrs: {
                                          to: {
                                            name:
                                              "CompanyQuestionnairesDetails",
                                            hash: "#executives"
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                                    Company Contact\n                                                "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "wrapper dashboard-profile-complete-fs my-auto ml-auto ml-lg-4"
                              },
                              [
                                _c(
                                  "p",
                                  { staticClass: "text-theme-dark-blue" },
                                  [
                                    _vm._v(
                                      "\n                                                " +
                                        _vm._s(
                                          this.stepsPercentage(
                                            15,
                                            _vm.generalProgress
                                          )
                                        ) +
                                        "%"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  { staticClass: "text-theme-dark-blue" },
                                  [
                                    _vm._v(
                                      "\n                                                " +
                                        _vm._s(
                                          this.stepsPercentage(
                                            15,
                                            _vm.contactProgress
                                          )
                                        ) +
                                        "%"
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-lg-2 col-md-6 pr-0 mt-md-0 mt-4"
                          },
                          [
                            _c("div", { staticClass: "d-flex" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "wrapper dashboard-profile-complete-fs"
                                },
                                [
                                  _c(
                                    "p",
                                    [
                                      _c("i", {
                                        staticClass: "far",
                                        class: {
                                          "fa-check-circle color-green":
                                            this.stepsPercentage(
                                              15,
                                              _vm.structureProgress
                                            ) == 100,
                                          "fa-circle color-red":
                                            this.stepsPercentage(
                                              15,
                                              _vm.structureProgress
                                            ) != 100
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "router-link",
                                        {
                                          staticClass: "text-theme-dark-blue",
                                          attrs: {
                                            to: {
                                              name:
                                                "CompanyQuestionnairesDetails",
                                              hash: "#companyType"
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                    Company Structure\n                                                "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    [
                                      _c("i", {
                                        staticClass: "far",
                                        class: {
                                          "fa-check-circle color-green":
                                            this.stepsPercentage(
                                              15,
                                              _vm.valuationProgress
                                            ) == 100,
                                          "fa-circle color-red":
                                            this.stepsPercentage(
                                              15,
                                              _vm.valuationProgress
                                            ) != 100
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "router-link",
                                        {
                                          staticClass: "text-theme-dark-blue",
                                          attrs: {
                                            to: {
                                              name:
                                                "CompanyQuestionnairesDetails",
                                              hash: "#finance"
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                    Valuation IP\n                                                "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "wrapper dashboard-profile-complete-fs my-auto ml-auto ml-lg-4"
                                },
                                [
                                  _c(
                                    "p",
                                    { staticClass: "text-theme-dark-blue" },
                                    [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(
                                            this.stepsPercentage(
                                              15,
                                              _vm.structureProgress
                                            )
                                          ) +
                                          "%"
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    { staticClass: "text-theme-dark-blue" },
                                    [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(
                                            this.stepsPercentage(
                                              15,
                                              _vm.valuationProgress
                                            )
                                          ) +
                                          "%"
                                      )
                                    ]
                                  )
                                ]
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-lg-2 col-md-6 pr-0 mt-md-0 mt-4 px-lg-0"
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "d-flex justify-content-center" },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "wrapper dashboard-profile-complete-fs"
                                  },
                                  [
                                    _c(
                                      "p",
                                      [
                                        _c("i", {
                                          staticClass: "far",
                                          class: {
                                            "fa-check-circle color-green":
                                              this.stepsPercentage(
                                                15,
                                                _vm.socialProgress
                                              ) == 100,
                                            "fa-circle color-red":
                                              this.stepsPercentage(
                                                15,
                                                _vm.socialProgress
                                              ) != 100
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "router-link",
                                          {
                                            staticClass: "text-theme-dark-blue",
                                            attrs: {
                                              to: {
                                                name:
                                                  "CompanyQuestionnairesDetails",
                                                hash: "#social"
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    Social Presence\n                                                "
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      [
                                        _c("i", {
                                          staticClass: "far",
                                          class: {
                                            "fa-check-circle color-green":
                                              this.stepsPercentage(
                                                25,
                                                _vm.taxonomyProgress
                                              ) == 100,
                                            "fa-circle color-red":
                                              this.stepsPercentage(
                                                25,
                                                _vm.taxonomyProgress
                                              ) != 100
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "router-link",
                                          {
                                            staticClass: "text-theme-dark-blue",
                                            attrs: {
                                              to: {
                                                name:
                                                  "CompanyQuestionnairesDetails",
                                                hash: "#taxonomy"
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    Industry Classification\n                                                "
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "wrapper dashboard-profile-complete-fs my-auto ml-auto ml-lg-4"
                                  },
                                  [
                                    _c(
                                      "p",
                                      { staticClass: "text-theme-dark-blue" },
                                      [
                                        _vm._v(
                                          "\n                                                " +
                                            _vm._s(
                                              this.stepsPercentage(
                                                15,
                                                _vm.socialProgress
                                              )
                                            ) +
                                            "%"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      { staticClass: "text-theme-dark-blue" },
                                      [
                                        _vm._v(
                                          "\n                                                " +
                                            _vm._s(
                                              this.stepsPercentage(
                                                25,
                                                _vm.taxonomyProgress
                                              )
                                            ) +
                                            "%"
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-lg-2 col-md-6 pr-0 mt-md-0 mt-4 px-lg-0"
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "d-flex justify-content-center" },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "wrapper dashboard-profile-complete-fs"
                                  },
                                  [
                                    _c(
                                      "p",
                                      [
                                        _c("i", {
                                          staticClass: "far",
                                          class: {
                                            "fa-check-circle color-green":
                                              this.stepsPercentage(
                                                10,
                                                _vm.historyProgress
                                              ) == 100,
                                            "fa-circle color-red":
                                              this.stepsPercentage(
                                                10,
                                                _vm.historyProgress
                                              ) != 100
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "router-link",
                                          {
                                            staticClass: "text-theme-dark-blue",
                                            attrs: {
                                              to: {
                                                name:
                                                  "CompanyQuestionnairesDetails",
                                                hash: "#history"
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    Company History\n                                                "
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      [
                                        _c("i", {
                                          staticClass: "far",
                                          class: {
                                            "fa-check-circle color-green":
                                              this.stepsPercentage(
                                                20,
                                                _vm.corporateActionProgress
                                              ) == 100,
                                            "fa-circle color-red":
                                              this.stepsPercentage(
                                                20,
                                                _vm.corporateActionProgress
                                              ) != 100
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "router-link",
                                          {
                                            staticClass: "text-theme-dark-blue",
                                            attrs: {
                                              to: {
                                                name:
                                                  "CompanyQuestionnairesDetails",
                                                hash: "#corporateAction"
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    Corporate Actions\n                                                "
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "wrapper my-auto dashboard-profile-complete-fs ml-auto ml-lg-4"
                                  },
                                  [
                                    _c(
                                      "p",
                                      { staticClass: "text-theme-dark-blue" },
                                      [
                                        _vm._v(
                                          "\n                                                " +
                                            _vm._s(
                                              this.stepsPercentage(
                                                10,
                                                _vm.historyProgress
                                              )
                                            ) +
                                            "%"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      { staticClass: "text-theme-dark-blue" },
                                      [
                                        _vm._v(
                                          "\n                                                " +
                                            _vm._s(
                                              this.stepsPercentage(
                                                20,
                                                _vm.corporateActionProgress
                                              )
                                            ) +
                                            "%"
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "col-lg-2 col-md-6 pr-0 mt-md-0 mt-4 px-lg-0"
                          },
                          [
                            _c("div", { staticClass: "d-flex" }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "wrapper dashboard-profile-complete-fs"
                                },
                                [
                                  _c(
                                    "p",
                                    [
                                      _c("i", {
                                        staticClass: "far",
                                        class: {
                                          "fa-check-circle color-green":
                                            this.stepsPercentage(
                                              30,
                                              _vm.leadershipGovernanceProgress
                                            ) == 100,
                                          "fa-circle color-red":
                                            this.stepsPercentage(
                                              30,
                                              _vm.leadershipGovernanceProgress
                                            ) != 100
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "router-link",
                                        {
                                          staticClass: "text-theme-dark-blue",
                                          attrs: {
                                            to: {
                                              name:
                                                "CompanyQuestionnairesDetails",
                                              hash: "#leadershipGovernance"
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                    Leadership and Governance\n                                                "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "wrapper my-auto dashboard-profile-complete-fs ml-auto ml-lg-4"
                                },
                                [
                                  _c(
                                    "p",
                                    { staticClass: "text-theme-dark-blue" },
                                    [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(
                                            this.stepsPercentage(
                                              30,
                                              _vm.leadershipGovernanceProgress
                                            )
                                          ) +
                                          "%"
                                      )
                                    ]
                                  )
                                ]
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "col-lg-2 col-md-6 pr-0 mt-md-0 mt-4"
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "d-flex justify-content-center" },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "wrapper dashboard-profile-btn-position"
                                  },
                                  [
                                    _vm._m(0),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "wrapper my-auto " },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            staticClass:
                                              "btn btn-sm btn-primary dashboard-profile-complete-btn text-center",
                                            class: _vm.linkButtonGrayOut,
                                            attrs: {
                                              to: {
                                                name:
                                                  "CompanyQuestionnairesDetails",
                                                hash: "#profile"
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    Complete your Profile\n                                                "
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
                      ]
                    )
                  ])
                ])
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12 grid-margin" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body content-analytics" }, [
                _c(
                  "h4",
                  { staticClass: "card-title mb-0 text-theme-dark-blue" },
                  [
                    _c("router-link", { attrs: { to: { name: "Content" } } }, [
                      _vm._v(
                        "\n                                    Content Analytics\n                                "
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "row state-container" }, [
                  _c("div", { staticClass: "col pb-3" }, [
                    _c(
                      "a",
                      { attrs: { href: "javascript:;" } },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: { to: { name: "Content", hash: "#video" } }
                          },
                          [
                            _c(
                              "span",
                              { staticClass: "d-block statistics-counter" },
                              [_vm._v(_vm._s(_vm.totalVideo))]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "d-block text-dark" }, [
                          _vm._v("Videos Uploaded")
                        ])
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col pb-3" }, [
                    _c(
                      "a",
                      { attrs: { href: "javascript:;" } },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: { to: { name: "Content", hash: "#audio" } }
                          },
                          [
                            _c(
                              "span",
                              { staticClass: "d-block statistics-counter" },
                              [_vm._v(_vm._s(_vm.totalAudio))]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("span", { staticClass: "d-block text-dark" }, [
                          _vm._v("Audio Files Uploaded")
                        ])
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col pb-3" }, [
                    _c("div", [
                      _c(
                        "span",
                        {
                          staticClass: "d-block statistics-counter without-link"
                        },
                        [
                          _vm._v(
                            _vm._s(this.numShortFormatter(_vm.totalVideoView))
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "d-block text-dark" }, [
                        _vm._v("Total Video Views")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col pb-3" }, [
                    _c("div", [
                      _c(
                        "span",
                        {
                          staticClass: "d-block statistics-counter without-link"
                        },
                        [
                          _vm._v(
                            _vm._s(this.numShortFormatter(_vm.totalAudioView))
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "d-block text-dark" }, [
                        _vm._v("Total Audio Listens")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col pb-3" }, [
                    _c("div", [
                      _c(
                        "span",
                        {
                          staticClass: "d-block statistics-counter without-link"
                        },
                        [
                          _vm._v(
                            _vm._s(this.numShortFormatter(_vm.totalVideoSearch))
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("span", { staticClass: "d-block text-dark" }, [
                        _vm._v("Search Appearances")
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12 grid-margin" }, [
                _c("div", { staticClass: "card" }, [
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c(
                        "h4",
                        { staticClass: "card-title mb-0 text-theme-dark-blue" },
                        [_vm._v("Recently Uploaded Videos")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row recent-video-container" },
                        [
                          _vm._l(_vm.recentVideos, function(data, index) {
                            return _c(
                              "div",
                              { staticClass: "col-md-4 card-wrapper" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "card" },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        attrs: {
                                          link: "",
                                          to: {
                                            name: "ViewVideoDetails",
                                            params: {
                                              slug: data.companySlug,
                                              id: data.videoUuid
                                            }
                                          }
                                        }
                                      },
                                      [
                                        _c("span", {
                                          staticClass: "bg_content_photo",
                                          style: {
                                            "background-image":
                                              "url(" + data.fileThumb + ")"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "card-body p-2" },
                                      [
                                        _c("img", {
                                          staticClass:
                                            "rounded-circle float-left mr-1",
                                          attrs: {
                                            src: data.companyImage,
                                            width: "25",
                                            height: "25"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          { staticClass: "warp-text-title" },
                                          [_vm._v(_vm._s(data.name))]
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
                                              "\n                                                            " +
                                                _vm._s(data.companyName) +
                                                "\n                                                        "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "ul",
                                          { staticClass: "content-ul" },
                                          [
                                            _c("li", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.numShortFormatter(
                                                    data.viewCounter
                                                  )
                                                ) + " Views"
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("li", [
                                              _vm._v(_vm._s(data.createdAt))
                                            ])
                                          ]
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          }),
                          _vm._v(" "),
                          !_vm.recentVideos.length
                            ? _c(
                                "div",
                                { staticClass: "col-md-12 text-center" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "btn btn-back-next",
                                      attrs: {
                                        link: "",
                                        to: { name: "videoQuestionnaire" }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "Upload Your First Video\n                                            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.recentVideos.length
                        ? [
                            _c(
                              "router-link",
                              {
                                staticClass:
                                  "btn btn-back-next float-right mt-3",
                                attrs: {
                                  to: { name: "Content", hash: "#video" }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                        View all\n                                    "
                                )
                              ]
                            )
                          ]
                        : _vm._e()
                    ],
                    2
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-12 grid-margin" }, [
                _c("div", { staticClass: "card" }, [
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _c(
                        "h4",
                        { staticClass: "card-title mb-0 text-theme-dark-blue" },
                        [_vm._v("Recently Uploaded Audio")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row recent-video-container" },
                        [
                          _vm._l(_vm.recentAudios, function(data, index) {
                            return _c(
                              "div",
                              { staticClass: "col-md-4 card-wrapper" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "card" },
                                  [
                                    _c(
                                      "router-link",
                                      {
                                        attrs: {
                                          link: "",
                                          to: {
                                            name: "ViewAudioDetails",
                                            params: {
                                              slug: data.companySlug,
                                              id: data.audioUuid
                                            }
                                          }
                                        }
                                      },
                                      [
                                        _c("span", {
                                          staticClass: "bg_content_photo",
                                          style: {
                                            "background-image":
                                              "url(" + data.fileThumb + ")"
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "card-body p-2" },
                                      [
                                        _c("img", {
                                          staticClass:
                                            "rounded-circle float-left mr-1",
                                          attrs: {
                                            src: data.companyImage,
                                            width: "25",
                                            height: "25"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "p",
                                          { staticClass: "warp-text-title" },
                                          [_vm._v(_vm._s(data.name))]
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
                                              "\n                                                            " +
                                                _vm._s(data.companyName) +
                                                "\n                                                        "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "ul",
                                          { staticClass: "content-ul" },
                                          [
                                            _c("li", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.numShortFormatter(
                                                    data.viewCounter
                                                  )
                                                ) + " Views"
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("li", [
                                              _vm._v(_vm._s(data.createdAt))
                                            ])
                                          ]
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]
                            )
                          }),
                          _vm._v(" "),
                          !_vm.recentAudios.length
                            ? _c(
                                "div",
                                { staticClass: "col-md-12 text-center" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "btn btn-back-next",
                                      attrs: {
                                        link: "",
                                        to: { name: "audioQuestionnaire" }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "Upload Your First Audio\n                                            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            : _vm._e()
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _vm.recentAudios.length
                        ? [
                            _c(
                              "router-link",
                              {
                                staticClass:
                                  "btn btn-back-next float-right mt-3",
                                attrs: {
                                  to: { name: "Content", hash: "#audio" }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                        View all\n                                    "
                                )
                              ]
                            )
                          ]
                        : _vm._e()
                    ],
                    2
                  )
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12 grid-margin" }, [
            _c("div", { staticClass: "card" }, [
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _c(
                    "h4",
                    { staticClass: "card-title mb-3 text-theme-dark-blue" },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: { name: "PersonalizedNewsIndustry" } } },
                        [
                          _vm._v(
                            "\n                                    Personalized News\n                                "
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "row" },
                    _vm._l(_vm.allNews, function(news) {
                      return _c("div", { staticClass: "col-md-12" }, [
                        _c("div", { staticClass: "news-container mb-2" }, [
                          _c("div", { staticClass: "d-flex" }, [
                            _c(
                              "a",
                              { attrs: { href: news.link, target: "_blank" } },
                              [_vm._v(_vm._s(news.title))]
                            ),
                            _vm._v(" "),
                            news.imageUrl
                              ? _c("img", {
                                  staticClass: "ml-auto rounded-lg",
                                  attrs: {
                                    src: news.imageUrl,
                                    height: "60",
                                    width: "100"
                                  }
                                })
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("div", [
                            _c("span", [
                              _vm._v(_vm._s(news.source) + "fgregrgh")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "float-right" }, [
                              _vm._v("Released on " + _vm._s(news.pubDate))
                            ])
                          ])
                        ])
                      ])
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _vm.allNews.length
                    ? [
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-back-next mt-3",
                            attrs: { to: { name: "PersonalizedNewsIndustry" } }
                          },
                          [
                            _vm._v(
                              "\n                                    Load more\n                                "
                            )
                          ]
                        )
                      ]
                    : _vm._e()
                ],
                2
              )
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
    return _c("div", { staticClass: "circle_percent" }, [
      _c("div", { staticClass: "circle_inner" }, [
        _c("div", { staticClass: "round_per" })
      ])
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

/***/ "./resources/js/views/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Dashboard.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_1f79daf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true& */ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Dashboard_vue_vue_type_style_index_0_id_1f79daf6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&id=1f79daf6&scoped=true&lang=scss& */ "./resources/js/views/Dashboard.vue?vue&type=style&index=0&id=1f79daf6&scoped=true&lang=scss&");
/* harmony import */ var _Dashboard_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=1&lang=css& */ "./resources/js/views/Dashboard.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_1f79daf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_1f79daf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1f79daf6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=style&index=0&id=1f79daf6&scoped=true&lang=scss&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=style&index=0&id=1f79daf6&scoped=true&lang=scss& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_1f79daf6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&id=1f79daf6&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=0&id=1f79daf6&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_1f79daf6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_1f79daf6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_1f79daf6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_1f79daf6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=style&index=1&lang=css&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=style&index=1&lang=css& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);