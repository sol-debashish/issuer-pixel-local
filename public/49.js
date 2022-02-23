(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Analytics.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Analytics.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_Social__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/Social */ "./resources/js/apis/Social.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      activeTab: 0,
      contentLoading: false,
      twitterTabContentLoaded: false,
      twitterData: [],
      twitterPagination: {
        'current_page': 1
      },
      facebookTabContentLoaded: false,
      facebookData: [],
      facebookPagination: {
        'current_page': 1
      },
      linkedinTabContentLoaded: false,
      linkedinData: [],
      linkedinPagination: {
        'current_page': 1
      }
    };
  },
  methods: {
    loadTabContent: function loadTabContent(type) {
      switch (type) {
        case 'twitter':
          if (!this.twitterTabContentLoaded) {
            this.getTwitterMetricsDataList();
            this.twitterTabContentLoaded = true;
          }

          this.activeTab = 0;
          break;

        case 'facebook':
          if (!this.facebookTabContentLoaded) {
            this.getFacebookMetricsDataList();
            this.facebookTabContentLoaded = true;
          }

          this.activeTab = 1;
          break;

        case 'linkedin':
          if (!this.linkedinTabContentLoaded) {
            this.getLinkedinMetricsDataList();
            this.linkedinTabContentLoaded = true;
          }

          this.activeTab = 2;
          break;
      }
    },
    getTwitterMetricsDataList: function getTwitterMetricsDataList() {
      var _this = this;

      if (!this.isLoading) {
        this.contentLoading = true;
      }

      _apis_Social__WEBPACK_IMPORTED_MODULE_0__["default"].getTwitterMetrics(this.twitterPagination.current_page).then(function (response) {
        _this.isLoading = false;
        _this.contentLoading = false;
        _this.twitterData = response.data.data.data.data;
        _this.twitterPagination = response.data.data.pagination;
      })["catch"](function (error) {
        if (!!error.response) {
          _this.isLoading = false;
          _this.contentLoading = false;

          if (error.response.status == 401) {
            _this.$emit('logout');
          }
        }
      });
    },
    getFacebookMetricsDataList: function getFacebookMetricsDataList() {
      var _this2 = this;

      if (!this.isLoading) {
        this.contentLoading = true;
      }

      _apis_Social__WEBPACK_IMPORTED_MODULE_0__["default"].getFacebookMetrics(this.facebookPagination.current_page).then(function (response) {
        _this2.isLoading = false;
        _this2.contentLoading = false;
        _this2.facebookData = response.data.data.data.data;
        _this2.facebookPagination = response.data.data.pagination;
      })["catch"](function (error) {
        if (!!error.response) {
          _this2.isLoading = false;
          _this2.contentLoading = false;

          if (error.response.status == 401) {
            _this2.$emit('logout');
          }
        }
      });
    },
    getLinkedinMetricsDataList: function getLinkedinMetricsDataList() {
      var _this3 = this;

      if (!this.isLoading) {
        this.contentLoading = true;
      }

      _apis_Social__WEBPACK_IMPORTED_MODULE_0__["default"].getLinkedinMetrics(this.linkedinPagination.current_page).then(function (response) {
        _this3.isLoading = false;
        _this3.contentLoading = false;
        _this3.linkedinData = response.data.data.data.data;
        _this3.linkedinPagination = response.data.data.pagination;
      })["catch"](function (error) {
        if (!!error.response) {
          _this3.isLoading = false;
          _this3.contentLoading = false;

          if (error.response.status == 401) {
            _this3.$emit('logout');
          }
        }
      });
    }
  },
  mounted: function mounted() {
    switch (this.$route.hash) {
      case '#twitter':
        this.activeTab = 0;
        break;

      case '#facebook':
        this.activeTab = 1;
        break;

      case '#linkedin':
        this.activeTab = 2;
        break;
    }
  },
  created: function created() {
    this.isLoading = true;
    this.getTwitterMetricsDataList();
  },
  components: {
    loader: function loader() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/Loader */ "./resources/js/components/Loader.vue"));
    },
    pagination: function pagination() {
      return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ../components/PaginationComponent */ "./resources/js/components/PaginationComponent.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Analytics.vue?vue&type=style&index=0&id=6c6e0b12&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Analytics.vue?vue&type=style&index=0&id=6c6e0b12&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.loader[data-v-6c6e0b12] { /* Loader Div Class */\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    width: 100%;\n    height: 100%;\n    background-color: #eceaea;\n    background-image: url(/images/small-loader.gif);\n    background-size: 50px;\n    background-repeat: no-repeat;\n    background-position: center;\n    z-index: 10000000;\n    opacity: 0.4;\n    filter: alpha(opacity=40);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Analytics.vue?vue&type=style&index=0&id=6c6e0b12&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Analytics.vue?vue&type=style&index=0&id=6c6e0b12&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Analytics.vue?vue&type=style&index=0&id=6c6e0b12&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Analytics.vue?vue&type=style&index=0&id=6c6e0b12&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Analytics.vue?vue&type=template&id=6c6e0b12&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Analytics.vue?vue&type=template&id=6c6e0b12&scoped=true& ***!
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
  return _c("div", [
    _c("h4", { staticClass: "text-theme-dark-blue mb-4" }, [
      _vm._v("Social Analytics")
    ]),
    _vm._v(" "),
    _c(
      "section",
      { staticClass: "dashboard pt-0" },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c(
              "div",
              { staticClass: "position-relative" },
              [
                _c(
                  "b-tabs",
                  { staticClass: "content-customized-tab" },
                  [
                    _c(
                      "b-tab",
                      {
                        attrs: {
                          title: "Twitter",
                          active: _vm.activeTab === 0
                        },
                        on: {
                          click: function($event) {
                            return _vm.loadTabContent("twitter")
                          }
                        }
                      },
                      [
                        _c("b-card-text", [
                          _c("div", { staticClass: "table-responsive" }, [
                            _vm.contentLoading
                              ? _c("div", { staticClass: "loader" })
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "table",
                              { staticClass: "table issuer-content-table" },
                              [
                                _c("thead", [
                                  _c("tr", { staticClass: "text-center" }, [
                                    _c("th", [_vm._v("Content Type")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Content Name")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Upload Date")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Shared Date")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Metrics Data")])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  [
                                    _vm._l(_vm.twitterData, function(
                                      data,
                                      index
                                    ) {
                                      return _c("tr", [
                                        _c(
                                          "td",
                                          { staticClass: "text-center" },
                                          [_vm._v(_vm._s(data.media_type))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-center" },
                                          [_vm._v(_vm._s(data.name))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-center" },
                                          [
                                            _vm._v(
                                              _vm._s(data.publication_date)
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-center" },
                                          [_vm._v(_vm._s(data.share_date))]
                                        ),
                                        _vm._v(" "),
                                        data.retweets === null &&
                                        data.quote_tweets === null &&
                                        data.likes === null &&
                                        data.replies === null
                                          ? _c(
                                              "td",
                                              { staticClass: "text-center" },
                                              [_vm._v("No metrics found")]
                                            )
                                          : _c(
                                              "td",
                                              { staticClass: "text-center" },
                                              [
                                                _c(
                                                  "ul",
                                                  {
                                                    staticClass: "list-unstyled"
                                                  },
                                                  [
                                                    data.retweets !== null
                                                      ? _c("li", [
                                                          _vm._v(
                                                            "Retweets: " +
                                                              _vm._s(
                                                                data.retweets
                                                              )
                                                          )
                                                        ])
                                                      : _vm._e(),
                                                    _vm._v(" "),
                                                    data.quote_tweets !== null
                                                      ? _c("li", [
                                                          _vm._v(
                                                            "Quotes: " +
                                                              _vm._s(
                                                                data.quote_tweets
                                                              )
                                                          )
                                                        ])
                                                      : _vm._e(),
                                                    _vm._v(" "),
                                                    data.likes !== null
                                                      ? _c("li", [
                                                          _vm._v(
                                                            "Likes: " +
                                                              _vm._s(data.likes)
                                                          )
                                                        ])
                                                      : _vm._e(),
                                                    _vm._v(" "),
                                                    data.replies !== null
                                                      ? _c("li", [
                                                          _vm._v(
                                                            "Replies: " +
                                                              _vm._s(
                                                                data.replies
                                                              )
                                                          )
                                                        ])
                                                      : _vm._e()
                                                  ]
                                                )
                                              ]
                                            )
                                      ])
                                    }),
                                    _vm._v(" "),
                                    !_vm.twitterData.length
                                      ? _c("tr", [
                                          _c(
                                            "td",
                                            {
                                              staticClass: "text-center",
                                              attrs: { colspan: "5" }
                                            },
                                            [_vm._v("No data found")]
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c(
                                        "td",
                                        { attrs: { colspan: "10" } },
                                        [
                                          _vm.twitterPagination.last_page > 1
                                            ? _c("pagination", {
                                                attrs: {
                                                  pagination:
                                                    _vm.twitterPagination,
                                                  offset: 5
                                                },
                                                on: {
                                                  paginate: function($event) {
                                                    return _vm.getTwitterMetricsDataList()
                                                  }
                                                }
                                              })
                                            : _vm._e()
                                        ],
                                        1
                                      )
                                    ])
                                  ],
                                  2
                                )
                              ]
                            )
                          ])
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tab",
                      {
                        attrs: {
                          title: "Facebook",
                          active: _vm.activeTab === 1
                        },
                        on: {
                          click: function($event) {
                            return _vm.loadTabContent("facebook")
                          }
                        }
                      },
                      [
                        _c("b-card-text", [
                          _c("div", { staticClass: "table-responsive" }, [
                            _vm.contentLoading
                              ? _c("div", { staticClass: "loader" })
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "table",
                              { staticClass: "table issuer-content-table" },
                              [
                                _c("thead", [
                                  _c("tr", { staticClass: "text-center" }, [
                                    _c("th", [_vm._v("Content Type")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Content Name")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Upload Date")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Shared Date")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Metrics Data")])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  [
                                    _vm._l(_vm.facebookData, function(
                                      data,
                                      index
                                    ) {
                                      return _c("tr", [
                                        _c(
                                          "td",
                                          { staticClass: "text-center" },
                                          [_vm._v(_vm._s(data.media_type))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-center" },
                                          [_vm._v(_vm._s(data.name))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-center" },
                                          [
                                            _vm._v(
                                              _vm._s(data.publication_date)
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-center" },
                                          [_vm._v(_vm._s(data.share_date))]
                                        ),
                                        _vm._v(" "),
                                        data.likes === null &&
                                        data.comments === null &&
                                        data.shares === null
                                          ? _c(
                                              "td",
                                              { staticClass: "text-center" },
                                              [_vm._v("No metrics found")]
                                            )
                                          : _c(
                                              "td",
                                              { staticClass: "text-center" },
                                              [
                                                _c(
                                                  "ul",
                                                  {
                                                    staticClass: "list-unstyled"
                                                  },
                                                  [
                                                    data.likes !== null
                                                      ? _c("li", [
                                                          _vm._v(
                                                            "Likes: " +
                                                              _vm._s(data.likes)
                                                          )
                                                        ])
                                                      : _vm._e(),
                                                    _vm._v(" "),
                                                    data.comments !== null
                                                      ? _c("li", [
                                                          _vm._v(
                                                            "Comments: " +
                                                              _vm._s(
                                                                data.comments
                                                              )
                                                          )
                                                        ])
                                                      : _vm._e(),
                                                    _vm._v(" "),
                                                    data.shares !== null
                                                      ? _c("li", [
                                                          _vm._v(
                                                            "Shares: " +
                                                              _vm._s(
                                                                data.shares
                                                              )
                                                          )
                                                        ])
                                                      : _vm._e()
                                                  ]
                                                )
                                              ]
                                            )
                                      ])
                                    }),
                                    _vm._v(" "),
                                    !_vm.facebookData.length
                                      ? _c("tr", [
                                          _c(
                                            "td",
                                            {
                                              staticClass: "text-center",
                                              attrs: { colspan: "5" }
                                            },
                                            [_vm._v("No data found")]
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c(
                                        "td",
                                        { attrs: { colspan: "10" } },
                                        [
                                          _vm.facebookPagination.last_page > 1
                                            ? _c("pagination", {
                                                attrs: {
                                                  pagination:
                                                    _vm.facebookPagination,
                                                  offset: 5
                                                },
                                                on: {
                                                  paginate: function($event) {
                                                    return _vm.getFacebookMetricsDataList()
                                                  }
                                                }
                                              })
                                            : _vm._e()
                                        ],
                                        1
                                      )
                                    ])
                                  ],
                                  2
                                )
                              ]
                            )
                          ])
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tab",
                      {
                        attrs: {
                          title: "LinkedIn",
                          active: _vm.activeTab === 2
                        },
                        on: {
                          click: function($event) {
                            return _vm.loadTabContent("linkedin")
                          }
                        }
                      },
                      [
                        _c("b-card-text", [
                          _c("div", { staticClass: "table-responsive" }, [
                            _vm.contentLoading
                              ? _c("div", { staticClass: "loader" })
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "table",
                              { staticClass: "table issuer-content-table" },
                              [
                                _c("thead", [
                                  _c("tr", { staticClass: "text-center" }, [
                                    _c("th", [_vm._v("Content Type")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Content Name")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Upload Date")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Shared Date")]),
                                    _vm._v(" "),
                                    _c("th", [_vm._v("Metrics Data")])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "tbody",
                                  [
                                    _vm._l(_vm.linkedinData, function(
                                      data,
                                      index
                                    ) {
                                      return _c("tr", [
                                        _c(
                                          "td",
                                          { staticClass: "text-center" },
                                          [_vm._v(_vm._s(data.media_type))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-center" },
                                          [_vm._v(_vm._s(data.name))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-center" },
                                          [
                                            _vm._v(
                                              _vm._s(data.publication_date)
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "td",
                                          { staticClass: "text-center" },
                                          [_vm._v(_vm._s(data.share_date))]
                                        ),
                                        _vm._v(" "),
                                        data.clicks === null &&
                                        data.comments === null &&
                                        data.engagement === null &&
                                        data.impressions === null &&
                                        data.likes === null &&
                                        data.shares === null
                                          ? _c(
                                              "td",
                                              { staticClass: "text-center" },
                                              [_vm._v("No metrics found")]
                                            )
                                          : _c(
                                              "td",
                                              { staticClass: "text-center" },
                                              [
                                                _c(
                                                  "ul",
                                                  {
                                                    staticClass: "list-unstyled"
                                                  },
                                                  [
                                                    data.clicks !== null
                                                      ? _c("li", [
                                                          _vm._v(
                                                            "Clicks: " +
                                                              _vm._s(
                                                                data.clicks
                                                              )
                                                          )
                                                        ])
                                                      : _vm._e(),
                                                    _vm._v(" "),
                                                    data.comments !== null
                                                      ? _c("li", [
                                                          _vm._v(
                                                            "Comments: " +
                                                              _vm._s(
                                                                data.comments
                                                              )
                                                          )
                                                        ])
                                                      : _vm._e(),
                                                    _vm._v(" "),
                                                    data.engagement !== null
                                                      ? _c("li", [
                                                          _vm._v(
                                                            "Engagement: " +
                                                              _vm._s(
                                                                data.engagement
                                                              )
                                                          )
                                                        ])
                                                      : _vm._e(),
                                                    _vm._v(" "),
                                                    data.impressions !== null
                                                      ? _c("li", [
                                                          _vm._v(
                                                            "Impressions: " +
                                                              _vm._s(
                                                                data.impressions
                                                              )
                                                          )
                                                        ])
                                                      : _vm._e(),
                                                    _vm._v(" "),
                                                    data.likes !== null
                                                      ? _c("li", [
                                                          _vm._v(
                                                            "Likes: " +
                                                              _vm._s(data.likes)
                                                          )
                                                        ])
                                                      : _vm._e(),
                                                    _vm._v(" "),
                                                    data.shares !== null
                                                      ? _c("li", [
                                                          _vm._v(
                                                            "Shares: " +
                                                              _vm._s(
                                                                data.shares
                                                              )
                                                          )
                                                        ])
                                                      : _vm._e()
                                                  ]
                                                )
                                              ]
                                            )
                                      ])
                                    }),
                                    _vm._v(" "),
                                    !_vm.linkedinData.length
                                      ? _c("tr", [
                                          _c(
                                            "td",
                                            {
                                              staticClass: "text-center",
                                              attrs: { colspan: "5" }
                                            },
                                            [_vm._v("No data found")]
                                          )
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("tr", [
                                      _c(
                                        "td",
                                        { attrs: { colspan: "10" } },
                                        [
                                          _vm.linkedinPagination.last_page > 1
                                            ? _c("pagination", {
                                                attrs: {
                                                  pagination:
                                                    _vm.linkedinPagination,
                                                  offset: 5
                                                },
                                                on: {
                                                  paginate: function($event) {
                                                    return _vm.getLinkedinMetricsDataList()
                                                  }
                                                }
                                              })
                                            : _vm._e()
                                        ],
                                        1
                                      )
                                    ])
                                  ],
                                  2
                                )
                              ]
                            )
                          ])
                        ])
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
        ]),
        _vm._v(" "),
        _c("loader", { attrs: { "is-visible": _vm.isLoading } })
      ],
      1
    )
  ])
}
var staticRenderFns = []
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

/***/ "./resources/js/views/Analytics.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Analytics.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Analytics_vue_vue_type_template_id_6c6e0b12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Analytics.vue?vue&type=template&id=6c6e0b12&scoped=true& */ "./resources/js/views/Analytics.vue?vue&type=template&id=6c6e0b12&scoped=true&");
/* harmony import */ var _Analytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Analytics.vue?vue&type=script&lang=js& */ "./resources/js/views/Analytics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Analytics_vue_vue_type_style_index_0_id_6c6e0b12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Analytics.vue?vue&type=style&index=0&id=6c6e0b12&scoped=true&lang=css& */ "./resources/js/views/Analytics.vue?vue&type=style&index=0&id=6c6e0b12&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Analytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Analytics_vue_vue_type_template_id_6c6e0b12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Analytics_vue_vue_type_template_id_6c6e0b12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6c6e0b12",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Analytics.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Analytics.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Analytics.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Analytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Analytics.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Analytics.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Analytics_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Analytics.vue?vue&type=style&index=0&id=6c6e0b12&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/Analytics.vue?vue&type=style&index=0&id=6c6e0b12&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Analytics_vue_vue_type_style_index_0_id_6c6e0b12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Analytics.vue?vue&type=style&index=0&id=6c6e0b12&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Analytics.vue?vue&type=style&index=0&id=6c6e0b12&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Analytics_vue_vue_type_style_index_0_id_6c6e0b12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Analytics_vue_vue_type_style_index_0_id_6c6e0b12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Analytics_vue_vue_type_style_index_0_id_6c6e0b12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Analytics_vue_vue_type_style_index_0_id_6c6e0b12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Analytics.vue?vue&type=template&id=6c6e0b12&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/Analytics.vue?vue&type=template&id=6c6e0b12&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Analytics_vue_vue_type_template_id_6c6e0b12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Analytics.vue?vue&type=template&id=6c6e0b12&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Analytics.vue?vue&type=template&id=6c6e0b12&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Analytics_vue_vue_type_template_id_6c6e0b12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Analytics_vue_vue_type_template_id_6c6e0b12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);