(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewVideoDetails.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ViewVideoDetails.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var _apis_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apis/Content */ "./resources/js/apis/Content.js");
/* harmony import */ var _apis_Common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apis/Common */ "./resources/js/apis/Common.js");
/* harmony import */ var _components_MediaDetailsCategoryTabContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MediaDetailsCategoryTabContent */ "./resources/js/components/MediaDetailsCategoryTabContent.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      video_uuid: this.$route.params.id,
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
      videoSrc: '',
      videoPresenter: "",
      otherVideoPresenter: "",
      videoTitle: "",
      videoMediaType: "",
      videoSubject: [],
      videoDescription: "",
      view_counter: 0,
      publicationDate: "",
      publicationStatus: 0,
      publicShareLink: "",
      shareMediaType: "Video",
      companyId: "",
      companyName: "",
      companyUuid: "",
      companySlug: "",
      otherVideo: [],
      videoUnpublished: false,
      isLoggedIn: false,
      videoUnavailable: false,
      dynamicColumnClass: 'col-lg-8',
      enableClassificationsEditButton: false,
      datastVideoId: "",
      userId: null,
      senderCompanyId: null
    };
  },
  methods: {
    getVideoInfo: function getVideoInfo() {
      var _this = this;

      this.isLoading = true;
      _apis_Content__WEBPACK_IMPORTED_MODULE_1__["default"].videoDetails(this.video_uuid).then(function (response) {
        if (response.data.data.status == 'login_unpublished') {
          _this.videoUnpublished = true;
        } else if (response.data.data.status == 'non_login_unpublished') {
          _this.$router.push({
            name: "Home"
          });
        }

        _this.showAllTaxonomiesData(response.data.data.data.taxonomy_id, _this.video_uuid);

        _this.videoSrc = 'https://view.vzaar.com/' + response.data.data.data.video.video_id + '/player';
        _this.datastVideoId = response.data.data.data.video.video_id;
        _this.media_file_id = response.data.data.data.id;
        _this.videoPresenter = response.data.data.data.media_presenter;
        _this.otherVideoPresenter = response.data.data.data.other_media_presenter;
        _this.view_counter = response.data.data.data.view_counter;
        _this.videoTitle = response.data.data.data.name;
        _this.videoSubject = response.data.data.data.subject_type;
        _this.videoMediaType = response.data.data.data.media_sub_type;
        _this.videoDescription = response.data.data.data.description;
        _this.publicationDate = response.data.data.data.publication_date;
        _this.publicationStatus = response.data.data.data.publish_status;
        _this.publicShareLink = document.location.origin + '/company/' + _this.$route.params.slug + '/video-details/' + _this.$route.params.id;
        _this.companyId = response.data.data.data.company_id;
        _this.companyName = response.data.data.data.company_name;
        _this.companyUuid = response.data.data.data.company_uuid;
        _this.companySlug = response.data.data.data.company_slug;

        _this.getOtherVideoInfo(_this.video_uuid);

        _this.isLoading = false;
      })["catch"](function (error) {
        if (!!error.response) {
          _this.isLoading = false;

          if (error.response.status === 422) {
            _this.videoUnavailable = true;
          } else if (error.response.status == 401) {
            _this.$emit('logout');
          }
        }
      });
    },
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

      _apis_Content__WEBPACK_IMPORTED_MODULE_1__["default"].changeMediaFileStatus({
        'id': this.media_file_id,
        'status': 0
      }).then(function (response) {
        _this3.publicationStatus = 1;
      })["catch"](function (error) {
        toastr.error(error);
      }); // this.$bvModal.hide('modalCheckPublicationStatus');

      this.$bvModal.show('modalShareLink');
    },
    getOtherVideoInfo: function getOtherVideoInfo(video_uuid) {
      var _this4 = this;

      this.isLoading = true;
      _apis_Content__WEBPACK_IMPORTED_MODULE_1__["default"].videoOthers(video_uuid).then(function (response) {
        _this4.otherVideo = [];
        _this4.otherVideo = response.data.data.data; //console.log(this.otherVideo)
      })["catch"](function (error) {
        if (!!error.response) {
          _this4.isLoading = false;

          if (error.response.status == 401) {
            _this4.$emit('logout');
          }
        }
      });
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
  created: function created() {
    this.numShortFormatter = _apis_Common__WEBPACK_IMPORTED_MODULE_2__["default"].ViewListenNumFormatter;
    this.getVideoInfo();

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
  name: "ViewVideoDetails",
  components: {
    loader: _components_Loader__WEBPACK_IMPORTED_MODULE_0__["default"],
    MediaDetailsCategoryTabContent: _components_MediaDetailsCategoryTabContent__WEBPACK_IMPORTED_MODULE_3__["default"],
    ShareModal: function ShareModal() {
      return Promise.all(/*! import() */[__webpack_require__.e(11), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, /*! ../components/ShareModal */ "./resources/js/components/ShareModal.vue"));
    },
    InternalMessage: function InternalMessage() {
      return __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! ../components/InternalMessage */ "./resources/js/components/InternalMessage.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewVideoDetails.vue?vue&type=style&index=1&id=4beaabab&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ViewVideoDetails.vue?vue&type=style&index=1&id=4beaabab&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousel-card-link .card-body[data-v-4beaabab] {\n  padding: 0.5rem !important;\n}\n.carousel-card-link .card-body p[data-v-4beaabab] {\n  font-size: 0.75rem;\n  color: rgba(30, 8, 87, 0.8);\n  margin-bottom: 2px;\n}\n.carousel-card-link .card-body .warp-text-title[data-v-4beaabab] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  max-width: 150px;\n}\n.carousel-card-link .card-wrapper[data-v-4beaabab] {\n  padding: 5px;\n}\n.carousel-card-link .card-wrapper .card[data-v-4beaabab] {\n  max-height: 230px;\n}\n.carousel-card-link .company-title[data-v-4beaabab], .carousel-card-link ul.pagination[data-v-4beaabab] {\n  font-size: 0.625rem;\n  color: #6a666d;\n}\n.carousel-card-link ul.content-ul[data-v-4beaabab] {\n  display: inline-flex;\n  font-size: 0.625rem;\n  color: #8a878d;\n  padding-left: 0px;\n  margin-bottom: 0 !important;\n}\n.carousel-card-link ul.content-ul li[data-v-4beaabab]:not(:last-child) {\n  padding-right: 12px;\n}\n.carousel-card-link ul.content-ul li[data-v-4beaabab]:first-child {\n  list-style: none;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewVideoDetails.vue?vue&type=style&index=0&id=4beaabab&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ViewVideoDetails.vue?vue&type=style&index=0&id=4beaabab&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container-details[data-v-4beaabab] {\n    max-width: 100%;\n    width: 1554px;\n}\n.modal-list-data[data-v-4beaabab] {\n    list-style: inside;\n}\n.btn-message[data-v-4beaabab] {\n    padding: 4px 12px !important;\n    font-size: 14px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewVideoDetails.vue?vue&type=style&index=1&id=4beaabab&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ViewVideoDetails.vue?vue&type=style&index=1&id=4beaabab&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewVideoDetails.vue?vue&type=style&index=1&id=4beaabab&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewVideoDetails.vue?vue&type=style&index=1&id=4beaabab&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewVideoDetails.vue?vue&type=style&index=0&id=4beaabab&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ViewVideoDetails.vue?vue&type=style&index=0&id=4beaabab&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewVideoDetails.vue?vue&type=style&index=0&id=4beaabab&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewVideoDetails.vue?vue&type=style&index=0&id=4beaabab&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewVideoDetails.vue?vue&type=template&id=4beaabab&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ViewVideoDetails.vue?vue&type=template&id=4beaabab&scoped=true& ***!
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
      _vm.videoUnpublished
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
                        attrs: { to: { name: "Content", hash: "#video" } }
                      },
                      [
                        _c("i", { staticClass: "fas fa-chevron-left" }),
                        _vm._v(" Back to Content Library\n                    ")
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "text-theme-dark-blue fs-14 pl-2" },
                      [
                        _vm._v("Content Library "),
                        _c("i", { staticClass: "fa fa-arrow-right" }),
                        _vm._v(" " + _vm._s(_vm.videoTitle))
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
                      _vm._v("Video Classifications")
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
                    _c("div", { staticClass: "container-details" }, [
                      _c(
                        "h4",
                        { staticClass: "text-center media-details-page-title" },
                        [_vm._v("Video Details")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "embed-responsive embed-responsive-21by9",
                          staticStyle: { background: "black" }
                        },
                        [
                          _vm.videoUnavailable
                            ? _c(
                                "div",
                                {
                                  staticClass:
                                    "h-100 d-flex justify-content-center align-items-center video-audio-unavailable-error-message"
                                },
                                [
                                  _vm._v(
                                    "\n                                Video unavailable\n                            "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("iframe", {
                            staticClass:
                              "video-player video-player-responsive embed-responsive-item",
                            attrs: {
                              id: "vzvd-22677381",
                              name: "vzvd-22677381",
                              src: _vm.videoSrc,
                              title: "video player",
                              allow: "autoplay",
                              type: "text/html",
                              frameborder: "0",
                              allowfullscreen: "",
                              allowTransparency: "true",
                              mozallowfullscreen: "",
                              webkitAllowFullScreen: ""
                            }
                          })
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    !_vm.videoUnavailable
                      ? [
                          _c("div", { staticClass: "row py-2 fs-16" }, [
                            _c("div", { staticClass: "col-md-8 pr-0" }, [
                              _c("span", { staticClass: "media-title-text" }, [
                                _vm._v(_vm._s(_vm.videoTitle))
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
                                    _vm._m(1),
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
                                            _vm.view_counter + 1
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
                                    _vm._v(_vm._s(_vm.videoMediaType))
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
                            { staticClass: "text-justify py-2 fs-14" },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.videoDescription) +
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
                                "Other Videos by " + _vm._s(_vm.companyName)
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-carousel",
                            { attrs: { controls: "" } },
                            [
                              _vm._l(_vm.otherVideo, function(video, index) {
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
                                                                  "ViewVideoDetails",
                                                                params: {
                                                                  slug:
                                                                    _vm
                                                                      .otherVideo[
                                                                      index
                                                                    ]
                                                                      .company_slug,
                                                                  id:
                                                                    _vm
                                                                      .otherVideo[
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
                                                            _vm.otherVideo[
                                                              index
                                                            ].video_id != null
                                                              ? _c(
                                                                  "b-card",
                                                                  {
                                                                    staticClass:
                                                                      "mx-1 carousel-card-link",
                                                                    attrs: {
                                                                      "img-src":
                                                                        "https://view.vzaar.com/" +
                                                                        _vm
                                                                          .otherVideo[
                                                                          index
                                                                        ]
                                                                          .video_id +
                                                                        "/image"
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
                                                                                "https://view.vzaar.com/" +
                                                                                _vm
                                                                                  .otherVideo[
                                                                                  index
                                                                                ]
                                                                                  .video_id +
                                                                                "/image",
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
                                                                                  .otherVideo[
                                                                                  index
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
                                                                              "\n                                                                " +
                                                                                _vm._s(
                                                                                  _vm.companyName
                                                                                ) +
                                                                                "\n                                                            "
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
                                                                                        .otherVideo[
                                                                                        index
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
                                                                                      .otherVideo[
                                                                                      index
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
                                                              : _c("b-card", {
                                                                  staticClass:
                                                                    "no-thumb-image-content"
                                                                })
                                                          ],
                                                          1
                                                        ),
                                                        _vm._v(" "),
                                                        _vm.otherVideo[
                                                          index + 1
                                                        ] != undefined
                                                          ? [
                                                              _c(
                                                                "b-link",
                                                                {
                                                                  attrs: {
                                                                    to: {
                                                                      name:
                                                                        "ViewVideoDetails",
                                                                      params: {
                                                                        slug:
                                                                          _vm
                                                                            .otherVideo[
                                                                            index +
                                                                              1
                                                                          ]
                                                                            .company_slug,
                                                                        id:
                                                                          _vm
                                                                            .otherVideo[
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
                                                                  _vm
                                                                    .otherVideo[
                                                                    index + 1
                                                                  ].video_id !=
                                                                  null
                                                                    ? _c(
                                                                        "b-card",
                                                                        {
                                                                          staticClass:
                                                                            "mx-1 carousel-card-link",
                                                                          attrs: {
                                                                            "img-src":
                                                                              "https://view.vzaar.com/" +
                                                                              _vm
                                                                                .otherVideo[
                                                                                index +
                                                                                  1
                                                                              ]
                                                                                .video_id +
                                                                              "/image"
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
                                                                                      "https://view.vzaar.com/" +
                                                                                      _vm
                                                                                        .otherVideo[
                                                                                        index +
                                                                                          1
                                                                                      ]
                                                                                        .video_id +
                                                                                      "/image",
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
                                                                                        .otherVideo[
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
                                                                                              .otherVideo[
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
                                                                                            .otherVideo[
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
                                                                    : _c(
                                                                        "b-card",
                                                                        {
                                                                          staticClass:
                                                                            "no-thumb-image-content"
                                                                        }
                                                                      )
                                                                ],
                                                                1
                                                              )
                                                            ]
                                                          : [_c("div", {})],
                                                        _vm._v(" "),
                                                        _vm.otherVideo[
                                                          index + 2
                                                        ] != undefined
                                                          ? [
                                                              _c(
                                                                "b-link",
                                                                {
                                                                  attrs: {
                                                                    to: {
                                                                      name:
                                                                        "ViewVideoDetails",
                                                                      params: {
                                                                        slug:
                                                                          _vm
                                                                            .otherVideo[
                                                                            index +
                                                                              2
                                                                          ]
                                                                            .company_slug,
                                                                        id:
                                                                          _vm
                                                                            .otherVideo[
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
                                                                  _vm
                                                                    .otherVideo[
                                                                    index + 2
                                                                  ].video_id !=
                                                                  null
                                                                    ? _c(
                                                                        "b-card",
                                                                        {
                                                                          staticClass:
                                                                            "mx-1 carousel-card-link",
                                                                          attrs: {
                                                                            "img-src":
                                                                              "https://view.vzaar.com/" +
                                                                              _vm
                                                                                .otherVideo[
                                                                                index +
                                                                                  2
                                                                              ]
                                                                                .video_id +
                                                                              "/image"
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
                                                                                      "https://view.vzaar.com/" +
                                                                                      _vm
                                                                                        .otherVideo[
                                                                                        index +
                                                                                          2
                                                                                      ]
                                                                                        .video_id +
                                                                                      "/image",
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
                                                                                        .otherVideo[
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
                                                                                              .otherVideo[
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
                                                                                            .otherVideo[
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
                                                                    : _c(
                                                                        "b-card",
                                                                        {
                                                                          staticClass:
                                                                            "no-thumb-image-content"
                                                                        }
                                                                      )
                                                                ],
                                                                1
                                                              )
                                                            ]
                                                          : [_c("div", {})],
                                                        _vm._v(" "),
                                                        _vm.otherVideo[
                                                          index + 3
                                                        ] != undefined
                                                          ? [
                                                              _c(
                                                                "b-link",
                                                                {
                                                                  attrs: {
                                                                    to: {
                                                                      name:
                                                                        "ViewVideoDetails",
                                                                      params: {
                                                                        slug:
                                                                          _vm
                                                                            .otherVideo[
                                                                            index +
                                                                              3
                                                                          ]
                                                                            .company_slug,
                                                                        id:
                                                                          _vm
                                                                            .otherVideo[
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
                                                                  _vm
                                                                    .otherVideo[
                                                                    index + 3
                                                                  ].video_id !=
                                                                  null
                                                                    ? _c(
                                                                        "b-card",
                                                                        {
                                                                          staticClass:
                                                                            "mx-1 carousel-card-link",
                                                                          attrs: {
                                                                            "img-src":
                                                                              "https://view.vzaar.com/" +
                                                                              _vm
                                                                                .otherVideo[
                                                                                index +
                                                                                  3
                                                                              ]
                                                                                .video_id +
                                                                              "/image"
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
                                                                                      "https://view.vzaar.com/" +
                                                                                      _vm
                                                                                        .otherVideo[
                                                                                        index +
                                                                                          3
                                                                                      ]
                                                                                        .video_id +
                                                                                      "/image",
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
                                                                                        .otherVideo[
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
                                                                                              .otherVideo[
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
                                                                                            .otherVideo[
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
                                                                    : _c(
                                                                        "b-card",
                                                                        {
                                                                          staticClass:
                                                                            "no-thumb-image-content"
                                                                        }
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
                      title: "Subjects of Company Video",
                      centered: "",
                      "hide-footer": "",
                      "title-class": "modal-title-new"
                    }
                  },
                  [
                    _c(
                      "ul",
                      { staticClass: "text-center pl-0 modal-list-data" },
                      _vm._l(_vm.videoSubject, function(subject) {
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
                      title: "Video Participants",
                      centered: "",
                      "hide-footer": ""
                    }
                  },
                  [
                    _c(
                      "ul",
                      _vm._l(_vm.videoPresenter, function(presenter) {
                        return _c(
                          "li",
                          [
                            presenter.name == "Other"
                              ? [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(_vm.otherVideoPresenter) +
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
        _vm._v("Video has been made Private by owner.")
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

/***/ "./resources/js/views/ViewVideoDetails.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/ViewVideoDetails.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewVideoDetails_vue_vue_type_template_id_4beaabab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewVideoDetails.vue?vue&type=template&id=4beaabab&scoped=true& */ "./resources/js/views/ViewVideoDetails.vue?vue&type=template&id=4beaabab&scoped=true&");
/* harmony import */ var _ViewVideoDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewVideoDetails.vue?vue&type=script&lang=js& */ "./resources/js/views/ViewVideoDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ViewVideoDetails_vue_vue_type_style_index_0_id_4beaabab_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewVideoDetails.vue?vue&type=style&index=0&id=4beaabab&scoped=true&lang=css& */ "./resources/js/views/ViewVideoDetails.vue?vue&type=style&index=0&id=4beaabab&scoped=true&lang=css&");
/* harmony import */ var _ViewVideoDetails_vue_vue_type_style_index_1_id_4beaabab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ViewVideoDetails.vue?vue&type=style&index=1&id=4beaabab&scoped=true&lang=scss& */ "./resources/js/views/ViewVideoDetails.vue?vue&type=style&index=1&id=4beaabab&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _ViewVideoDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewVideoDetails_vue_vue_type_template_id_4beaabab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ViewVideoDetails_vue_vue_type_template_id_4beaabab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4beaabab",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ViewVideoDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ViewVideoDetails.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/ViewVideoDetails.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewVideoDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewVideoDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewVideoDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewVideoDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ViewVideoDetails.vue?vue&type=style&index=0&id=4beaabab&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/views/ViewVideoDetails.vue?vue&type=style&index=0&id=4beaabab&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewVideoDetails_vue_vue_type_style_index_0_id_4beaabab_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewVideoDetails.vue?vue&type=style&index=0&id=4beaabab&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewVideoDetails.vue?vue&type=style&index=0&id=4beaabab&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewVideoDetails_vue_vue_type_style_index_0_id_4beaabab_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewVideoDetails_vue_vue_type_style_index_0_id_4beaabab_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewVideoDetails_vue_vue_type_style_index_0_id_4beaabab_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewVideoDetails_vue_vue_type_style_index_0_id_4beaabab_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/ViewVideoDetails.vue?vue&type=style&index=1&id=4beaabab&scoped=true&lang=scss&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/ViewVideoDetails.vue?vue&type=style&index=1&id=4beaabab&scoped=true&lang=scss& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewVideoDetails_vue_vue_type_style_index_1_id_4beaabab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewVideoDetails.vue?vue&type=style&index=1&id=4beaabab&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewVideoDetails.vue?vue&type=style&index=1&id=4beaabab&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewVideoDetails_vue_vue_type_style_index_1_id_4beaabab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewVideoDetails_vue_vue_type_style_index_1_id_4beaabab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewVideoDetails_vue_vue_type_style_index_1_id_4beaabab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewVideoDetails_vue_vue_type_style_index_1_id_4beaabab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/ViewVideoDetails.vue?vue&type=template&id=4beaabab&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/ViewVideoDetails.vue?vue&type=template&id=4beaabab&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewVideoDetails_vue_vue_type_template_id_4beaabab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ViewVideoDetails.vue?vue&type=template&id=4beaabab&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ViewVideoDetails.vue?vue&type=template&id=4beaabab&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewVideoDetails_vue_vue_type_template_id_4beaabab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewVideoDetails_vue_vue_type_template_id_4beaabab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);