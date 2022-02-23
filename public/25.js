(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetails.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CompanyDetails.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_Content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/Content */ "./resources/js/apis/Content.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Loader */ "./resources/js/components/Loader.vue");
/* harmony import */ var _apis_Common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apis/Common */ "./resources/js/apis/Common.js");
/* harmony import */ var _components_CompanyNodeCollapses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CompanyNodeCollapses */ "./resources/js/components/CompanyNodeCollapses.vue");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _ref;

    return _ref = {
      companyId: "",
      icon: "",
      name: "",
      address: "",
      phoneNumber: "",
      companyDescription: "",
      companyIndustry: "",
      cfo: "",
      esgScore: [],
      ownedBusiness: [],
      founders: [],
      salesContact: "",
      investorContact: "",
      businessDevContact: "",
      strategicPartnership: [],
      vendors: [],
      topCompetitors: "",
      domicileCountry: "",
      tradingStatus: "",
      isin: "",
      cusip: "",
      financingType: [],
      patentType: [],
      companyHistories: "",
      companyAcquisition: [],
      companySpinOffs: [],
      dividend: "",
      companySubsidiaries: [],
      msciRating: [],
      sustainalyticsRating: [],
      cdpRating: [],
      issRating: [],
      researchFirmName: "",
      boardMembers: [],
      executives: [],
      exchangeTradedOn: [],
      tickerSymbol: "",
      entityType: "",
      ceo: "",
      recentValuation: "",
      numberOfEmployee: "",
      numberOfShareholder: "",
      baseCurrency: "",
      conglomerate: "",
      conductedFinancing: "",
      researchCoverage: "",
      auditedFinancials: "",
      intellectualProperty: [],
      publicPrivateType: "",
      companySocialMediaPlatform: [],
      isLoading: false,
      slug: this.$route.params.slug,
      loggedInSlug: localStorage.companySlugName,
      publicShareLink: "",
      isCopied: false,
      companyName: "",
      isLoggedIn: false,
      dynamicColumnClass: 'col-lg-9',
      activeTab: 0,
      videoSearch: "",
      audioSearch: "",
      audios: [],
      videos: [],
      audioTabContentLoaded: false,
      videoTabContentLoaded: false,
      classificationTabContentLoaded: false,
      contentLoading: false,
      videoPagination: {
        'current_page': 1
      },
      audioPagination: {
        'current_page': 1
      },
      allSubjectModalTitle: "",
      selectedMediaSubject: [],
      mediaHierarchyInfo: ""
    }, _defineProperty(_ref, "isCopied", false), _defineProperty(_ref, "multipleNodes", []), _defineProperty(_ref, "hideCatContainer", false), _defineProperty(_ref, "companyNotFound", false), _defineProperty(_ref, "enableEditButton", false), _defineProperty(_ref, "userId", null), _defineProperty(_ref, "senderCompanyId", null), _ref;
  },
  methods: {
    getCompanyBio: function getCompanyBio() {
      var _this = this;

      _apis_Content__WEBPACK_IMPORTED_MODULE_0__["default"].companyBio(this.slug).then(function (response) {
        _this.isLoading = false;
        var bioData = response.data.data;
        console.log(bioData);
        _this.companyId = bioData.id;
        _this.entityType = bioData.entityType;
        _this.phoneNumber = bioData.phone_number;
        _this.name = bioData.name;

        if (!!bioData.headquarters) {
          var addressOne = !!bioData.headquarters.address.street_address_one ? bioData.headquarters.address.street_address_one + ', ' : '';
          var addressTwo = !!bioData.headquarters.address.street_address_two ? bioData.headquarters.address.street_address_two + ', ' : '';
          var city = !!bioData.headquarters.address.city ? bioData.headquarters.address.city + ', ' : '';
          var state = !!bioData.headquarters.address.states ? bioData.headquarters.address.states.name + ', ' : !!bioData.headquarters.address.province ? bioData.headquarters.address.province + ', ' : '';
          var zip = !!bioData.headquarters.address.zip ? bioData.headquarters.address.zip + ', ' : '';
          var country = !!bioData.headquarters.address.country ? bioData.headquarters.address.country.name : '';
          _this.address = addressOne + addressTwo + city + state + zip + country;
        }

        _this.ceo = bioData.ceo != null ? bioData.ceo : '';
        _this.numberOfEmployee = bioData.numberof_employees != null ? bioData.numberof_employees.name : '';
        _this.numberOfShareholder = bioData.numberof_shareholders != null ? bioData.numberof_shareholders.name : '';
        _this.baseCurrency = bioData.base_currency != null ? bioData.base_currency.name : '';
        _this.recentValuation = bioData.recent_valuation != null ? bioData.recent_valuation : '';
        _this.auditedFinancials = bioData.audited_financials != null ? bioData.audited_financials ? 'Yes' : 'No' : '';
        _this.conglomerate = bioData.conglomerate != null ? bioData.conglomerate ? 'Yes' : 'No' : '';
        _this.conductedFinancing = bioData.conducted_financing_six_month != null ? bioData.conducted_financing_six_month ? 'Yes' : 'No' : '';
        _this.publicPrivateType = bioData.public_private_type != null ? bioData.public_private_type.name : '';
        _this.intellectualProperty = bioData.intellectual_property != null ? bioData.intellectual_property : '';
        _this.researchCoverage = bioData.research_coverage != null ? bioData.research_coverage : '';
        _this.companySocialMediaPlatform = bioData.company_social_media_platform != null ? bioData.company_social_media_platform : '';
        _this.icon = !!bioData.icon ? bioData.storage_path + '/company_icon/' + bioData.icon : "";
        _this.companyDescription = !!bioData.company_description != null ? bioData.company_description : '';
        _this.cfo = bioData.cfo != null ? bioData.cfo : '';
        _this.companyIndustry = bioData.company_industry != null ? bioData.company_industry.description : '';
        _this.esgScore = bioData.esg_score != null ? bioData.esg_score : '';
        _this.ownedBusiness = bioData.owned_business != null ? bioData.owned_business : '';
        _this.founders = bioData.founders != null ? bioData.founders : '';
        var salesDepEmail = bioData.sales_department_email != null ? bioData.sales_department_email + ', ' : '';
        var salesDepPhone = bioData.sales_dept_phone != null ? bioData.sales_dept_phone : '';
        _this.salesContact = salesDepEmail + salesDepPhone;
        var investorEmail = bioData.investor_relations_department_email != null ? bioData.investor_relations_department_email + ', ' : '';
        var investorPhone = bioData.investor_relation_contact_phone != null ? bioData.investor_relation_contact_phone : '';
        _this.investorContact = investorEmail + investorPhone;
        var businessDevEmail = bioData.business_development_contact_email != null ? bioData.business_development_contact_email + ', ' : '';
        var businessDevPhone = bioData.business_development_contact_phone != null ? bioData.business_development_contact_phone : '';
        _this.businessDevContact = businessDevEmail + businessDevPhone;
        _this.strategicPartnership = bioData.partnerships != null ? bioData.partnerships : '';
        _this.vendors = bioData.vendors != null ? bioData.vendors : '';
        _this.topCompetitors = bioData.top_competitors != null ? bioData.top_competitors : '';
        _this.domicileCountry = bioData.domicile_country != null ? bioData.domicile_country.name : '';
        _this.tradingStatus = bioData.trading_status != null ? bioData.trading_status.name : '';
        _this.isin = bioData.isin != null ? bioData.isin : '';
        _this.cusip = bioData.cusip != null ? bioData.cusip : '';
        _this.financingType = bioData.financing_type != null ? bioData.financing_type : '';
        _this.patentType = bioData.patent_type != null ? bioData.patent_type : '';
        _this.companyHistories = bioData.company_histories != null ? bioData.company_histories : '';
        _this.companyAcquisition = bioData.company_acquisition != null ? bioData.company_acquisition : '';
        _this.companySpinOffs = bioData.company_spin_offs != null ? bioData.company_spin_offs : '';
        _this.dividend = bioData.dividend_issued != null ? bioData.dividend_issued : '';
        _this.companySubsidiaries = bioData.company_subsidiaries != null ? bioData.company_subsidiaries : '';
        _this.msciRating = bioData.msci_rating != null ? bioData.msci_rating : '';
        _this.sustainalyticsRating = bioData.sustainalytics_rating != null ? bioData.sustainalytics_rating : '';
        _this.cdpRating = bioData.cdp_rating != null ? bioData.cdp_rating : '';
        _this.issRating = bioData.iss_rating != null ? bioData.iss_rating : '';
        _this.researchFirmName = bioData.research_firm_name != null ? bioData.research_firm_name : '';
        _this.boardMembers = bioData.board_members != null ? bioData.board_members : '';
        _this.executives = bioData.executives != null ? bioData.executives : '';
        _this.exchangeTradedOn = bioData.exchange_traded_on != null ? bioData.exchange_traded_on : '';
        _this.tickerSymbol = bioData.ticker_symbol != null ? bioData.ticker_symbol : '';
      })["catch"](function (error) {
        console.log(error);
        _this.isLoading = false;

        if (error.response.status === 404) {
          _this.companyNotFound = true;
        }
      });
    },
    getAudioList: function getAudioList() {
      var _this2 = this;

      var clearPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (clearPage) {
        this.audioPagination.current_page = 1;
        this.contentLoading = true;
      } else {
        this.isLoading = true;
      }

      _apis_Content__WEBPACK_IMPORTED_MODULE_0__["default"].companyBioAudioList(this.audioPagination.current_page, this.slug, this.audioSearch).then(function (response) {
        _this2.isLoading = false;
        _this2.contentLoading = false;
        _this2.audios = [], _this2.audios = response.data.data.data.data;
        _this2.audioPagination = response.data.data.pagination;
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
    getVideoList: function getVideoList() {
      var _this3 = this;

      var clearPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (clearPage) {
        this.videoPagination.current_page = 1;
        this.contentLoading = true;
      } else {
        this.isLoading = true;
      }

      _apis_Content__WEBPACK_IMPORTED_MODULE_0__["default"].companyBioVideoList(this.videoPagination.current_page, this.slug, this.videoSearch).then(function (response) {
        _this3.isLoading = false;
        _this3.contentLoading = false;
        _this3.videos = [];
        _this3.videos = response.data.data.data.data;
        _this3.videoPagination = response.data.data.pagination;
      })["catch"](function (error) {
        if (!!error.response) {
          _this3.isLoading = false;
          _this3.contentLoading = false;

          if (error.response.status == 401) {
            _this3.$emit('logout');
          }
        }
      });
    },
    getHierarchyInfo: function getHierarchyInfo(slug) {
      var _this4 = this;

      axios.get('/api/company-bio-multiple-node/' + slug).then(function (response) {
        _this4.multipleNodes = response.data.data;

        if (_this4.multipleNodes.length < 1) {
          _this4.hideCatContainer = true;
        }
      })["catch"](function (error) {});
    },
    loadTabContent: function loadTabContent(type) {
      switch (type) {
        case 'video':
          if (!this.videoTabContentLoaded) {
            this.getVideoList();
            this.videoTabContentLoaded = true;
          }

          this.activeTab = 0;
          break;

        case 'audio':
          if (!this.audioTabContentLoaded) {
            this.getAudioList();
            this.audioTabContentLoaded = true;
          }

          this.activeTab = 1;
          break;

        case 'classification':
          if (!this.classificationTabContentLoaded) {
            this.getHierarchyInfo(this.slug);
            this.classificationTabContentLoaded = true;
          }

          this.activeTab = 2;
          break;
      }
    },
    searchContent: function searchContent(type) {
      if ('video' == type) {
        this.getVideoList('clearPage');
      } else if ('audio' == type) {
        this.getAudioList('clearPage');
      }
    },
    showAllSubjectModal: function showAllSubjectModal(data, type) {
      this.allSubjectModalTitle = "Subjects of Company " + type;
      this.selectedMediaSubject = data;
      this.$bvModal.show('modalAllSubject');
    },
    showAllTaxonomiesModal: function showAllTaxonomiesModal(event) {
      var _this5 = this;

      this.isLoading = true;
      this.mediaHierarchyInfo = [];
      axios.get('/api/get-media-categorization-lookup-for-collapse?id=' + event.target.getAttribute('data-taxonomy-id') + '&uuid=' + event.target.getAttribute('data-uuid')).then(function (response) {
        _this5.mediaHierarchyInfo = response.data.data;

        _this5.$refs['all-taxonomies-modal'].show();

        _this5.isLoading = false;
      })["catch"](function (error) {
        _this5.isLoading = false;

        if (error.response.status === 422) {
          toastr.error(error.response.data.error.message);
        } else if (error.response.status == 401) {
          _this5.$emit('logout');
        } else {
          toastr.error(error);
        }
      });
    },
    shareMediaLink: function shareMediaLink(slugName) {
      this.$bvModal.show('modalShareLink');
      this.publicShareLink = document.location.origin + '/company/' + slugName;
    },
    copyShareLink: function copyShareLink() {
      var _this6 = this;

      this.$refs.sharedLink.select();
      document.execCommand('copy');
      this.isCopied = true;
      setTimeout(function () {
        _this6.isCopied = !_this6.isCopied;
      }, 3000);
    },
    nameWithComma: function nameWithComma(name, index, totalElement) {
      if (index !== totalElement - 1) {
        return "".concat(name, ",");
      } else {
        return name;
      }
    },
    validateURL: function validateURL(link) {
      if (link.indexOf("http://") == 0 || link.indexOf("https://") == 0) {
        return link;
      } else {
        return 'https://' + link;
      }
    },
    backToPrevious: function backToPrevious() {
      history.back();
    },
    closeMessageModal: function closeMessageModal() {
      this.$refs['message-modal'].hide();
    },
    showMessageModal: function showMessageModal() {
      this.$refs['message-modal'].show();
    }
  },
  computed: {
    currentPageSlug: function currentPageSlug() {
      return this.$route.params.slug;
    }
  },
  created: function created() {
    this.numShortFormatter = _apis_Common__WEBPACK_IMPORTED_MODULE_2__["default"].ViewListenNumFormatter;
    this.getCompanyBio();
    this.getVideoList();
    this.videoTabContentLoaded = true;

    if (localStorage.userid) {
      this.userId = localStorage.userid;
      this.senderCompanyId = JSON.parse(localStorage.getItem("info")).company_id;
    }
  },
  mounted: function mounted() {
    this.isLoggedIn = !!localStorage.getItem("token");

    if (this.isLoggedIn) {
      this.dynamicColumnClass = 'col-lg-9';
    }
  },
  components: {
    pagination: function pagination() {
      return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ../components/PaginationComponent */ "./resources/js/components/PaginationComponent.vue"));
    },
    loader: _components_Loader__WEBPACK_IMPORTED_MODULE_1__["default"],
    // ExistingTaxonomyNodeCollapses,
    CompanyNodeCollapses: _components_CompanyNodeCollapses__WEBPACK_IMPORTED_MODULE_3__["default"],
    InternalMessage: function InternalMessage() {
      return __webpack_require__.e(/*! import() */ 15).then(__webpack_require__.bind(null, /*! ../components/InternalMessage */ "./resources/js/components/InternalMessage.vue"));
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetails.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CompanyDetails.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".company-profile-share-info {\n  width: auto;\n  height: 768px;\n  overflow: scroll;\n}\n.company-profile-share-info .bio-content ul li {\n  font-size: 14px;\n  margin-bottom: 15px;\n}\n.company-profile-share-info .bio-content ul li.social-media-icon i {\n  padding: 8px;\n  font-size: 22px;\n}\n.company-profile-share-info li.social-media-icon .scoop-icon, .company-profile-share-info li.social-media-icon .tiktok-icon {\n  display: inline-flex;\n  height: 22px;\n  margin: 0 7px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetails.vue?vue&type=style&index=1&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CompanyDetails.vue?vue&type=style&index=1&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.search-across-channel-company-share {\n    width: 40% !important;\n}\n.video-thumb {\n    background-size: 50px 50px;\n    background-position: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetails.vue?vue&type=style&index=2&id=3e3d2f64&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CompanyDetails.vue?vue&type=style&index=2&id=3e3d2f64&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.loader[data-v-3e3d2f64] { /* Loader Div Class */\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    width: 100%;\n    height: 100%;\n    background-color: #eceaea;\n    background-image: url(/images/small-loader.gif);\n    background-size: 50px;\n    background-repeat: no-repeat;\n    background-position: center;\n    z-index: 10000000;\n    opacity: 0.4;\n    filter: alpha(opacity=40);\n}\n.back-to-previous[data-v-3e3d2f64] {\n    border: none;\n    background-color: #1e0857;\n    font-size: 14px;\n    padding: 10px;\n    color: #FFFFFF;\n}\n.link-color-blue a[data-v-3e3d2f64]{\n    color: #2f80ed;\n}\n.message-button[data-v-3e3d2f64] {\n    max-width: 200px;\n    margin-bottom: 10px;\n}\n.message-button[data-v-3e3d2f64]:hover {\n    cursor: pointer;\n    color: #1e0857;\n}\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetails.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CompanyDetails.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyDetails.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetails.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetails.vue?vue&type=style&index=1&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CompanyDetails.vue?vue&type=style&index=1&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyDetails.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetails.vue?vue&type=style&index=1&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetails.vue?vue&type=style&index=2&id=3e3d2f64&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CompanyDetails.vue?vue&type=style&index=2&id=3e3d2f64&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyDetails.vue?vue&type=style&index=2&id=3e3d2f64&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetails.vue?vue&type=style&index=2&id=3e3d2f64&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetails.vue?vue&type=template&id=3e3d2f64&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CompanyDetails.vue?vue&type=template&id=3e3d2f64&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "dashboard" },
    [
      _vm.isLoggedIn && this.loggedInSlug !== _vm.currentPageSlug
        ? _c(
            "button",
            {
              staticClass: "btn mb-4 back-to-previous",
              attrs: { type: "button" },
              on: { click: _vm.backToPrevious }
            },
            [_vm._v("\n        Back to Screener Results\n    ")]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid px-0" }, [
        _vm.companyNotFound
          ? _c(
              "div",
              {
                staticClass:
                  "row collapse show no-gutters d-flex h-100 position-relative"
              },
              [_vm._m(0)]
            )
          : _c("div", [
              this.$route.params.callFrom == "preview"
                ? _c(
                    "h4",
                    { staticClass: "text-theme-dark-blue text-center pb-3" },
                    [
                      _vm._v(
                        "This\n                is a preview of what your profile looks like to others who view it."
                      )
                    ]
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
                  _c("div", { staticClass: "col-lg-3" }, [
                    _c(
                      "div",
                      { staticClass: "company-profile-share-info mr-3 pb-5" },
                      [
                        _c("span", { staticClass: "d-flex" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "company-share-button pt-1 text-center",
                              class:
                                _vm.userId &&
                                _vm.senderCompanyId != _vm.companyId
                                  ? "ml-auto mr-1"
                                  : "mx-auto",
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.shareMediaLink(_vm.slug)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "fa fa-share-alt" }),
                              _vm._v(" "),
                              _c("strong", [_vm._v("SHARE")])
                            ]
                          ),
                          _vm._v(" "),
                          _vm.userId && _vm.senderCompanyId != _vm.companyId
                            ? _c(
                                "div",
                                {
                                  staticClass:
                                    "message-button mr-auto ml-1 pt-1 text-center",
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
                                [
                                  _c("i", {
                                    staticClass: "far fa-comment-alt"
                                  }),
                                  _vm._v(" "),
                                  _c("strong", [_vm._v("MESSAGE")])
                                ]
                              )
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "custom-hr-theme my-0" }),
                        _vm._v(" "),
                        _c("div", { staticClass: "bio-content" }, [
                          _c("div", { staticClass: "px-4" }, [
                            _c(
                              "ul",
                              {
                                staticClass:
                                  "position-relative list-unstyled mt-3"
                              },
                              [
                                _c(
                                  "li",
                                  {
                                    staticClass: "font-weight-bold text-center"
                                  },
                                  [_vm._v(_vm._s(_vm.name))]
                                ),
                                _vm._v(" "),
                                _vm.icon
                                  ? _c("li", { staticClass: "text-center" }, [
                                      _c("img", {
                                        staticClass:
                                          "company-profile-photo rounded-circle",
                                        attrs: {
                                          src: _vm.icon,
                                          alt: "",
                                          width: "80",
                                          height: "80"
                                        }
                                      })
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.address
                                  ? _c("li", [
                                      _c("i", {
                                        staticClass: "fas fa-map-marker-alt"
                                      }),
                                      _vm._v("  " + _vm._s(_vm.address))
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("li", [
                                  _c("i", { staticClass: "fas fa-phone-alt" }),
                                  _vm._v(" " + _vm._s(_vm.phoneNumber))
                                ]),
                                _vm._v(" "),
                                _vm.publicPrivateType
                                  ? _c("li", [
                                      _c("strong", [_vm._v("Type: ")]),
                                      _vm._v(
                                        " " + _vm._s(_vm.publicPrivateType)
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.ceo
                                  ? _c("li", [
                                      _c("strong", [_vm._v("CEO: ")]),
                                      _vm._v(" " + _vm._s(_vm.ceo))
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.numberOfEmployee
                                  ? _c("li", [
                                      _c("strong", [
                                        _vm._v("Number of Employees:")
                                      ]),
                                      _vm._v(
                                        " " +
                                          _vm._s(_vm.numberOfEmployee) +
                                          "\n                                    "
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.entityType
                                  ? _c("li", [
                                      _c("strong", [
                                        _vm._v("Legal Entity Type:")
                                      ]),
                                      _vm._v(" " + _vm._s(_vm.entityType))
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.numberOfShareholder
                                  ? _c("li", [
                                      _c("strong", [
                                        _vm._v("Number of Shareholders:")
                                      ]),
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(_vm.numberOfShareholder) +
                                          "\n                                    "
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.baseCurrency
                                  ? _c("li", [
                                      _c("strong", [_vm._v("Base Currency:")]),
                                      _vm._v(" " + _vm._s(_vm.baseCurrency))
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.conglomerate
                                  ? _c("li", [
                                      _c("strong", [_vm._v("Conglomerate:")]),
                                      _vm._v(" " + _vm._s(_vm.conglomerate))
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.conductedFinancing
                                  ? _c("li", [
                                      _c("strong", [
                                        _vm._v("Conducted Financing:")
                                      ]),
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(_vm.conductedFinancing) +
                                          "\n                                    "
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.auditedFinancials
                                  ? _c("li", [
                                      _c("strong", [
                                        _vm._v("Audited Financials:")
                                      ]),
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(_vm.auditedFinancials) +
                                          "\n                                    "
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.recentValuation
                                  ? _c("li", [
                                      _c("strong", [
                                        _vm._v("Most Recent Valuation:")
                                      ]),
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(_vm.recentValuation) +
                                          "\n                                    "
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.intellectualProperty.length
                                  ? _c(
                                      "li",
                                      [
                                        _c("strong", [
                                          _vm._v("Intellectual Property:")
                                        ]),
                                        _vm._v(" "),
                                        _vm._l(
                                          _vm.intellectualProperty,
                                          function(ip, ipIndex) {
                                            return _c(
                                              "span",
                                              { key: ipIndex },
                                              [
                                                _vm._v(
                                                  "\n                                          " +
                                                    _vm._s(
                                                      _vm.nameWithComma(
                                                        ip.name,
                                                        ipIndex,
                                                        _vm.intellectualProperty
                                                          .length
                                                      )
                                                    ) +
                                                    "\n                                        "
                                                )
                                              ]
                                            )
                                          }
                                        )
                                      ],
                                      2
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.researchCoverage.length
                                  ? _c(
                                      "li",
                                      [
                                        _c("strong", [
                                          _vm._v("Research Coverage:")
                                        ]),
                                        _vm._v(" "),
                                        _vm._l(_vm.researchCoverage, function(
                                          rc,
                                          rcIndex
                                        ) {
                                          return _c("span", { key: rcIndex }, [
                                            _vm._v(
                                              "\n                                          " +
                                                _vm._s(
                                                  _vm.nameWithComma(
                                                    rc.name,
                                                    rcIndex,
                                                    _vm.researchCoverage.length
                                                  )
                                                ) +
                                                "\n                                        "
                                            )
                                          ])
                                        })
                                      ],
                                      2
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.companyDescription
                                  ? _c("li", [
                                      _c("strong", [
                                        _vm._v("Company Description: ")
                                      ]),
                                      _vm._v(
                                        " " + _vm._s(_vm.companyDescription)
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.companyIndustry
                                  ? _c("li", [
                                      _c("strong", [
                                        _vm._v("Company Industry: ")
                                      ]),
                                      _vm._v(" " + _vm._s(_vm.companyIndustry))
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.esgScore.length
                                  ? _c(
                                      "li",
                                      [
                                        _c("strong", [
                                          _vm._v(
                                            "Does Your Business Have an ESG Score?:"
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _vm._l(_vm.esgScore, function(
                                          ip,
                                          ipIndex
                                        ) {
                                          return _c("span", { key: ipIndex }, [
                                            _vm._v(
                                              "\n                                          " +
                                                _vm._s(
                                                  _vm.nameWithComma(
                                                    ip.name,
                                                    ipIndex,
                                                    _vm.esgScore.length
                                                  )
                                                ) +
                                                "\n                                        "
                                            )
                                          ])
                                        })
                                      ],
                                      2
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.msciRating.length
                                  ? _c(
                                      "li",
                                      [
                                        _c("strong", [
                                          _vm._v("MSCI ESG Rating:")
                                        ]),
                                        _vm._v(" "),
                                        _vm._l(_vm.msciRating, function(
                                          ip,
                                          ipIndex
                                        ) {
                                          return _c("span", { key: ipIndex }, [
                                            _vm._v(
                                              "\n                                          " +
                                                _vm._s(
                                                  _vm.nameWithComma(
                                                    ip.name,
                                                    ipIndex,
                                                    _vm.msciRating.length
                                                  )
                                                ) +
                                                "\n                                        "
                                            )
                                          ])
                                        })
                                      ],
                                      2
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.sustainalyticsRating.length
                                  ? _c(
                                      "li",
                                      [
                                        _c("strong", [
                                          _vm._v("Sustainalytics ESG Rating:")
                                        ]),
                                        _vm._v(" "),
                                        _vm._l(
                                          _vm.sustainalyticsRating,
                                          function(ip, ipIndex) {
                                            return _c(
                                              "span",
                                              { key: ipIndex },
                                              [
                                                _vm._v(
                                                  "\n                                          " +
                                                    _vm._s(
                                                      _vm.nameWithComma(
                                                        ip.name,
                                                        ipIndex,
                                                        _vm.sustainalyticsRating
                                                          .length
                                                      )
                                                    ) +
                                                    "\n                                        "
                                                )
                                              ]
                                            )
                                          }
                                        )
                                      ],
                                      2
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.cdpRating.length
                                  ? _c(
                                      "li",
                                      [
                                        _c("strong", [_vm._v("CDP Rating:")]),
                                        _vm._v(" "),
                                        _vm._l(_vm.cdpRating, function(
                                          ip,
                                          ipIndex
                                        ) {
                                          return _c("span", { key: ipIndex }, [
                                            _vm._v(
                                              "\n                                          " +
                                                _vm._s(
                                                  _vm.nameWithComma(
                                                    ip.name,
                                                    ipIndex,
                                                    _vm.cdpRating.length
                                                  )
                                                ) +
                                                "\n                                        "
                                            )
                                          ])
                                        })
                                      ],
                                      2
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.issRating.length
                                  ? _c(
                                      "li",
                                      [
                                        _c("strong", [_vm._v("ISS Rating:")]),
                                        _vm._v(" "),
                                        _vm._l(_vm.issRating, function(
                                          ip,
                                          ipIndex
                                        ) {
                                          return _c("span", { key: ipIndex }, [
                                            _vm._v(
                                              "\n                                          " +
                                                _vm._s(
                                                  _vm.nameWithComma(
                                                    ip.name,
                                                    ipIndex,
                                                    _vm.issRating.length
                                                  )
                                                ) +
                                                "\n                                        "
                                            )
                                          ])
                                        })
                                      ],
                                      2
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.ownedBusiness.length
                                  ? _c(
                                      "li",
                                      [
                                        _c("strong", [
                                          _vm._v("Minority Owned Businesses:")
                                        ]),
                                        _vm._v(" "),
                                        _vm._l(_vm.ownedBusiness, function(
                                          ip,
                                          ipIndex
                                        ) {
                                          return _c("span", { key: ipIndex }, [
                                            _vm._v(
                                              "\n                                          " +
                                                _vm._s(
                                                  _vm.nameWithComma(
                                                    ip.name,
                                                    ipIndex,
                                                    _vm.ownedBusiness.length
                                                  )
                                                ) +
                                                "\n                                        "
                                            )
                                          ])
                                        })
                                      ],
                                      2
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.founders.length
                                  ? _c(
                                      "li",
                                      [
                                        _c("strong", [_vm._v("Founders:")]),
                                        _vm._v(" "),
                                        _vm._l(_vm.founders, function(
                                          ip,
                                          ipIndex
                                        ) {
                                          return _c("span", { key: ipIndex }, [
                                            _vm._v(
                                              "\n                                          " +
                                                _vm._s(
                                                  _vm.nameWithComma(
                                                    ip.name,
                                                    ipIndex,
                                                    _vm.founders.length
                                                  )
                                                ) +
                                                "\n                                        "
                                            )
                                          ])
                                        })
                                      ],
                                      2
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.cfo
                                  ? _c("li", [
                                      _c("strong", [_vm._v("CFO: ")]),
                                      _vm._v(" " + _vm._s(_vm.cfo))
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.salesContact
                                  ? _c("li", [
                                      _c("strong", [
                                        _vm._v(
                                          "Sales Department Point of Contact: "
                                        )
                                      ]),
                                      _vm._v(" " + _vm._s(_vm.salesContact))
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.investorContact
                                  ? _c("li", [
                                      _c("strong", [
                                        _vm._v(
                                          " Investor Relations Point of Contact: "
                                        )
                                      ]),
                                      _vm._v(" " + _vm._s(_vm.investorContact))
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.businessDevContact
                                  ? _c("li", [
                                      _c("strong", [
                                        _vm._v(
                                          " Business Development Point of Contact: "
                                        )
                                      ]),
                                      _vm._v(
                                        " " + _vm._s(_vm.businessDevContact)
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.strategicPartnership.length
                                  ? _c(
                                      "li",
                                      [
                                        _c("strong", [
                                          _vm._v("Strategic Partnership:")
                                        ]),
                                        _vm._v(" "),
                                        _vm._l(
                                          _vm.strategicPartnership,
                                          function(ip, ipIndex) {
                                            return _c(
                                              "span",
                                              { key: ipIndex },
                                              [
                                                _vm._v(
                                                  "\n                                          " +
                                                    _vm._s(
                                                      _vm.nameWithComma(
                                                        ip.name,
                                                        ipIndex,
                                                        _vm.strategicPartnership
                                                          .length
                                                      )
                                                    ) +
                                                    "\n                                        "
                                                )
                                              ]
                                            )
                                          }
                                        )
                                      ],
                                      2
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.vendors.length
                                  ? _c(
                                      "li",
                                      [
                                        _c("strong", [_vm._v("Suppliers:")]),
                                        _vm._v(" "),
                                        _vm._l(_vm.vendors, function(
                                          ip,
                                          ipIndex
                                        ) {
                                          return _c("span", { key: ipIndex }, [
                                            _vm._v(
                                              "\n                                          " +
                                                _vm._s(
                                                  _vm.nameWithComma(
                                                    ip.name,
                                                    ipIndex,
                                                    _vm.vendors.length
                                                  )
                                                ) +
                                                "\n                                        "
                                            )
                                          ])
                                        })
                                      ],
                                      2
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.topCompetitors
                                  ? _c("li", [
                                      _c("strong", [
                                        _vm._v("Top Competitors: ")
                                      ]),
                                      _vm._v(" " + _vm._s(_vm.topCompetitors))
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.domicileCountry
                                  ? _c("li", [
                                      _c("strong", [
                                        _vm._v("Company Country of Domicile: ")
                                      ]),
                                      _vm._v(" " + _vm._s(_vm.domicileCountry))
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.tradingStatus
                                  ? _c("li", [
                                      _c("strong", [
                                        _vm._v("Trading Status: ")
                                      ]),
                                      _vm._v(" " + _vm._s(_vm.tradingStatus))
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.isin
                                  ? _c("li", [
                                      _c("strong", [_vm._v("ISIN: ")]),
                                      _vm._v(" " + _vm._s(_vm.isin))
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.cusip
                                  ? _c("li", [
                                      _c("strong", [_vm._v("CUSIP: ")]),
                                      _vm._v(" " + _vm._s(_vm.cusip))
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.companySubsidiaries.length
                                  ? _c(
                                      "li",
                                      [
                                        _c("strong", [
                                          _vm._v("Name of Subsidiaries:")
                                        ]),
                                        _vm._v(" "),
                                        _vm._l(
                                          _vm.companySubsidiaries,
                                          function(rc, rcIndex) {
                                            return _c(
                                              "span",
                                              { key: rcIndex },
                                              [
                                                _vm._v(
                                                  "\n                                          " +
                                                    _vm._s(
                                                      _vm.nameWithComma(
                                                        rc.name,
                                                        rcIndex,
                                                        _vm.companySubsidiaries
                                                          .length
                                                      )
                                                    ) +
                                                    "\n                                        "
                                                )
                                              ]
                                            )
                                          }
                                        )
                                      ],
                                      2
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.exchangeTradedOn.length
                                  ? _c(
                                      "li",
                                      [
                                        _c("strong", [
                                          _vm._v(
                                            "Domestic or International Exchange Traded On: "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _vm._l(_vm.exchangeTradedOn, function(
                                          rc,
                                          rcIndex
                                        ) {
                                          return _c("span", { key: rcIndex }, [
                                            _vm._v(
                                              "\n                                          " +
                                                _vm._s(
                                                  _vm.nameWithComma(
                                                    rc.name,
                                                    rcIndex,
                                                    _vm.exchangeTradedOn.length
                                                  )
                                                ) +
                                                "\n                                        "
                                            )
                                          ])
                                        })
                                      ],
                                      2
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.tickerSymbol
                                  ? _c("li", [
                                      _c("strong", [_vm._v("Ticker Symbol: ")]),
                                      _vm._v(" " + _vm._s(_vm.tickerSymbol))
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.financingType.length
                                  ? _c(
                                      "li",
                                      [
                                        _c("strong", [
                                          _vm._v("Type of Financing:")
                                        ]),
                                        _vm._v(" "),
                                        _vm._l(_vm.financingType, function(
                                          ip,
                                          ipIndex
                                        ) {
                                          return _c("span", { key: ipIndex }, [
                                            _vm._v(
                                              "\n                                          " +
                                                _vm._s(
                                                  _vm.nameWithComma(
                                                    ip.name,
                                                    ipIndex,
                                                    _vm.financingType.length
                                                  )
                                                ) +
                                                "\n                                        "
                                            )
                                          ])
                                        })
                                      ],
                                      2
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.patentType.length
                                  ? _c(
                                      "li",
                                      [
                                        _c("strong", [
                                          _vm._v("Type of Patents:")
                                        ]),
                                        _vm._v(" "),
                                        _vm._l(_vm.patentType, function(
                                          ip,
                                          ipIndex
                                        ) {
                                          return _c("span", { key: ipIndex }, [
                                            _vm._v(
                                              "\n                                          " +
                                                _vm._s(
                                                  _vm.nameWithComma(
                                                    ip.name,
                                                    ipIndex,
                                                    _vm.patentType.length
                                                  )
                                                ) +
                                                "\n                                        "
                                            )
                                          ])
                                        })
                                      ],
                                      2
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.companyHistories.formed_year
                                  ? _c("li", [
                                      _c("strong", [
                                        _vm._v("Company Formed: ")
                                      ]),
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            _vm.companyHistories.formed_year
                                          )
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.companyHistories.first_product_or_service
                                  ? _c("li", [
                                      _c("strong", [
                                        _vm._v("First Product/Service: ")
                                      ]),
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            _vm.companyHistories
                                              .first_product_or_service
                                          )
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.companyHistories.number_of_major_product
                                  ? _c("li", [
                                      _c("strong", [
                                        _vm._v(
                                          "Number of Major Products / Services: "
                                        )
                                      ]),
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            _vm.companyHistories
                                              .number_of_major_product
                                          )
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.companyHistories
                                  .change_direction_or_strategy == 1
                                  ? _c("li", [
                                      _c("strong", [
                                        _vm._v(
                                          "Change in Direction or Strategy: "
                                        )
                                      ]),
                                      _vm._v(" Yes")
                                    ])
                                  : _c("li", [
                                      _c("strong", [
                                        _vm._v(
                                          "Change in Direction or Strategy: "
                                        )
                                      ]),
                                      _vm._v(" No")
                                    ]),
                                _vm._v(" "),
                                _vm.companyHistories.previous_product
                                  ? _c("li", [
                                      _c("strong", [
                                        _vm._v("Previous Product: ")
                                      ]),
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            _vm.companyHistories
                                              .previous_product
                                          )
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.companyHistories.change_year
                                  ? _c("li", [
                                      _c("strong", [
                                        _vm._v("Year of Change: ")
                                      ]),
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            _vm.companyHistories.change_year
                                          )
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.companyAcquisition.length
                                  ? _c(
                                      "li",
                                      [
                                        _c("strong", [
                                          _vm._v("Acquisition Name & Year: ")
                                        ]),
                                        _vm._v(" "),
                                        _vm._l(_vm.companyAcquisition, function(
                                          ip,
                                          ipIndex
                                        ) {
                                          return _c("span", { key: ipIndex }, [
                                            _vm._v(
                                              "\n                                            " +
                                                _vm._s(
                                                  _vm.nameWithComma(
                                                    ip.name + " - " + ip.year,
                                                    ipIndex,
                                                    _vm.companyAcquisition
                                                      .length
                                                  )
                                                ) +
                                                "\n                                        "
                                            )
                                          ])
                                        })
                                      ],
                                      2
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.companySpinOffs.length
                                  ? _c(
                                      "li",
                                      [
                                        _c("strong", [
                                          _vm._v(
                                            "Spin Offs Acquisition Name & Year:"
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _vm._l(_vm.companySpinOffs, function(
                                          ip,
                                          ipIndex
                                        ) {
                                          return _c("span", { key: ipIndex }, [
                                            _vm._v(
                                              "\n                                            " +
                                                _vm._s(
                                                  _vm.nameWithComma(
                                                    ip.spinOff_acquisitions_name +
                                                      " - " +
                                                      ip.spinOff_acquisitions_year,
                                                    ipIndex,
                                                    _vm.companySpinOffs.length
                                                  )
                                                ) +
                                                "\n                                        "
                                            )
                                          ])
                                        })
                                      ],
                                      2
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.dividend
                                  ? _c("li", [
                                      _c("strong", [_vm._v("Dividend: ")]),
                                      _vm._v(" Yes")
                                    ])
                                  : _c("li", [
                                      _c("strong", [_vm._v("Dividend: ")]),
                                      _vm._v(" No")
                                    ]),
                                _vm._v(" "),
                                _vm.researchFirmName
                                  ? _c("li", [
                                      _c("strong", [
                                        _vm._v("Research Firm Name: ")
                                      ]),
                                      _vm._v(" " + _vm._s(_vm.researchFirmName))
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.boardMembers.length
                                  ? _c("li", [
                                      _c("strong", [
                                        _vm._v("Number Of Board Members: ")
                                      ]),
                                      _vm._v(_vm._s(_vm.boardMembers.length))
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.boardMembers.length
                                  ? _c(
                                      "li",
                                      [
                                        _c("strong", [
                                          _vm._v("Board Members:")
                                        ]),
                                        _c("br"),
                                        _vm._v(" "),
                                        _vm._l(_vm.boardMembers, function(
                                          ip,
                                          ipIndex
                                        ) {
                                          return _c(
                                            "span",
                                            { key: ipIndex },
                                            [
                                              ip.role != null
                                                ? [
                                                    _vm._v(
                                                      "\n                                                " +
                                                        _vm._s(
                                                          _vm.nameWithComma(
                                                            ip.first_name +
                                                              " " +
                                                              ip.last_name +
                                                              " (" +
                                                              ip.role.name +
                                                              ") ",
                                                            ipIndex,
                                                            _vm.boardMembers
                                                              .length
                                                          )
                                                        ) +
                                                        "\n                                            "
                                                    )
                                                  ]
                                                : [
                                                    _vm._v(
                                                      "\n                                                " +
                                                        _vm._s(
                                                          _vm.nameWithComma(
                                                            ip.first_name +
                                                              " " +
                                                              ip.last_name +
                                                              "",
                                                            ipIndex,
                                                            _vm.boardMembers
                                                              .length
                                                          )
                                                        ) +
                                                        "\n                                            "
                                                    )
                                                  ]
                                            ],
                                            2
                                          )
                                        })
                                      ],
                                      2
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.executives.length
                                  ? _c("li", [
                                      _c("strong", [
                                        _vm._v("Number Of Executives: ")
                                      ]),
                                      _vm._v(_vm._s(_vm.executives.length))
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.executives.length
                                  ? _c(
                                      "li",
                                      [
                                        _c("strong", [_vm._v("Executives:")]),
                                        _vm._v(" "),
                                        _vm._l(_vm.executives, function(
                                          ip,
                                          ipIndex
                                        ) {
                                          return _c(
                                            "span",
                                            { key: ipIndex },
                                            [
                                              ip.role != null
                                                ? [
                                                    _vm._v(
                                                      "\n                                                " +
                                                        _vm._s(
                                                          _vm.nameWithComma(
                                                            ip.first_name +
                                                              " " +
                                                              ip.last_name +
                                                              " (" +
                                                              ip.role.name +
                                                              ") ",
                                                            ipIndex,
                                                            _vm.executives
                                                              .length
                                                          )
                                                        ) +
                                                        "\n                                            "
                                                    )
                                                  ]
                                                : [
                                                    _vm._v(
                                                      "\n                                                " +
                                                        _vm._s(
                                                          _vm.nameWithComma(
                                                            ip.first_name +
                                                              " " +
                                                              ip.last_name +
                                                              "",
                                                            ipIndex,
                                                            _vm.boardMembers
                                                              .length
                                                          )
                                                        ) +
                                                        "\n                                            "
                                                    )
                                                  ]
                                            ],
                                            2
                                          )
                                        })
                                      ],
                                      2
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.companySocialMediaPlatform.length
                                  ? _c(
                                      "li",
                                      { staticClass: "social-media-icon" },
                                      [
                                        _vm._m(1),
                                        _vm._v(" "),
                                        _vm._l(
                                          _vm.companySocialMediaPlatform,
                                          function(platform, platformIndex) {
                                            return [
                                              _c(
                                                "a",
                                                {
                                                  attrs: {
                                                    href: _vm.validateURL(
                                                      platform.pivot.value
                                                    ),
                                                    target: "_blank"
                                                  }
                                                },
                                                [
                                                  "scoop" ==
                                                  platform.url_validate_string
                                                    ? _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "scoop-icon"
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
                                                                version: "1.1",
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
                                                    : "tiktok.com" ==
                                                      platform.url_validate_string
                                                    ? _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "tiktok-icon"
                                                        },
                                                        [
                                                          _c(
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
                                                                width: "22px",
                                                                height: "22px",
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
                                                                  fill:
                                                                    "#626262"
                                                                }
                                                              })
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    : _c("i", {
                                                        class:
                                                          platform.icon_class
                                                      })
                                                ]
                                              )
                                            ]
                                          }
                                        )
                                      ],
                                      2
                                    )
                                  : _vm._e()
                              ]
                            )
                          ])
                        ])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { class: _vm.dynamicColumnClass }, [
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
                                  title: "Video",
                                  active: _vm.activeTab === 0
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.loadTabContent("video")
                                  }
                                }
                              },
                              [
                                _c("b-card-text", [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "search-across-channel search-across-channel-company-share"
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "input-group" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "input-group-append"
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "btn dashboard-search-icon",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.searchContent(
                                                        "video"
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "fa fa-search"
                                                  })
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.videoSearch,
                                                expression: "videoSearch"
                                              }
                                            ],
                                            staticClass:
                                              "form-control dashboard-search-input",
                                            attrs: {
                                              type: "text",
                                              placeholder:
                                                "Search across your channel"
                                            },
                                            domProps: {
                                              value: _vm.videoSearch
                                            },
                                            on: {
                                              input: [
                                                function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.videoSearch =
                                                    $event.target.value
                                                },
                                                function($event) {
                                                  return _vm.searchContent(
                                                    "video"
                                                  )
                                                }
                                              ]
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "table-responsive media-data-list"
                                    },
                                    [
                                      _vm.contentLoading
                                        ? _c("div", { staticClass: "loader" })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "table",
                                        {
                                          staticClass:
                                            "table issuer-content-table"
                                        },
                                        [
                                          _c("thead", [
                                            _c(
                                              "tr",
                                              { staticClass: "text-center" },
                                              [
                                                _c("th", {
                                                  staticClass: "text-left"
                                                }),
                                                _vm._v(" "),
                                                _c("th", [
                                                  _vm._v("Classification")
                                                ]),
                                                _vm._v(" "),
                                                _c("th", [
                                                  _vm._v("Video Title")
                                                ]),
                                                _vm._v(" "),
                                                _c("th", [
                                                  _vm._v("Video Subject")
                                                ]),
                                                _vm._v(" "),
                                                _c("th", [_vm._v("Date")]),
                                                _vm._v(" "),
                                                _c("th", [_vm._v("Views")])
                                              ]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "tbody",
                                            [
                                              _vm._l(_vm.videos, function(
                                                video,
                                                index
                                              ) {
                                                return _c("tr", [
                                                  _c("td", [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "video-thumb-table"
                                                      },
                                                      [
                                                        video.status == 2
                                                          ? _c(
                                                              "router-link",
                                                              {
                                                                attrs: {
                                                                  link: "",
                                                                  to: {
                                                                    name:
                                                                      "ViewVideoDetails",
                                                                    params: {
                                                                      id:
                                                                        video.uuid
                                                                    }
                                                                  }
                                                                }
                                                              },
                                                              [
                                                                _c("img", {
                                                                  staticClass:
                                                                    "img img-responsive video-btn video-thumb",
                                                                  attrs: {
                                                                    src:
                                                                      "https://view.vzaar.com/" +
                                                                      video.video_id +
                                                                      "/image",
                                                                    alt: "",
                                                                    height:
                                                                      "50",
                                                                    width: "110"
                                                                  }
                                                                })
                                                              ]
                                                            )
                                                          : [
                                                              _c("img", {
                                                                staticClass:
                                                                  "img img-responsive video-btn video-thumb",
                                                                attrs: {
                                                                  alt: " ",
                                                                  height: "50",
                                                                  width: "110"
                                                                }
                                                              })
                                                            ]
                                                      ],
                                                      2
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    {
                                                      staticClass:
                                                        "text-center link-color-blue"
                                                    },
                                                    [
                                                      _c(
                                                        "a",
                                                        {
                                                          attrs: {
                                                            href:
                                                              "javascript:;",
                                                            "data-video-id":
                                                              video.id,
                                                            "data-uuid":
                                                              video.uuid,
                                                            "data-taxonomy-id":
                                                              video.taxonomy_id
                                                          },
                                                          on: {
                                                            click:
                                                              _vm.showAllTaxonomiesModal
                                                          }
                                                        },
                                                        [_vm._v("View")]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    {
                                                      staticClass:
                                                        "text-center media-title-td"
                                                    },
                                                    [_vm._v(_vm._s(video.name))]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    {
                                                      staticClass:
                                                        "text-center link-color-blue"
                                                    },
                                                    [
                                                      _c(
                                                        "a",
                                                        {
                                                          attrs: {
                                                            href: "javascript:;"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              $event.preventDefault()
                                                              return _vm.showAllSubjectModal(
                                                                video.subject_type,
                                                                "Video"
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [_vm._v("View")]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    {
                                                      staticClass: "text-center"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          video.publication_date
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    {
                                                      staticClass: "text-center"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.numShortFormatter(
                                                            video.view_counter
                                                          )
                                                        ) +
                                                          "\n                                                "
                                                      )
                                                    ]
                                                  )
                                                ])
                                              }),
                                              _vm._v(" "),
                                              !_vm.videos.length
                                                ? _c("tr", [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "text-center",
                                                        attrs: { colspan: "10" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "No video file found"
                                                        )
                                                      ]
                                                    )
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { attrs: { colspan: "10" } },
                                                  [
                                                    _vm.videoPagination
                                                      .last_page > 1
                                                      ? _c("pagination", {
                                                          attrs: {
                                                            pagination:
                                                              _vm.videoPagination,
                                                            offset: 5
                                                          },
                                                          on: {
                                                            paginate: function(
                                                              $event
                                                            ) {
                                                              return _vm.getVideoList()
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
                                    ]
                                  )
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-tab",
                              {
                                attrs: {
                                  title: "Audio",
                                  active: _vm.activeTab === 1
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.loadTabContent("audio")
                                  }
                                }
                              },
                              [
                                _c("b-card-text", [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "search-across-channel search-across-channel-company-share"
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "input-group" },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "input-group-append"
                                            },
                                            [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "btn dashboard-search-icon",
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.searchContent(
                                                        "audio"
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass: "fa fa-search"
                                                  })
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.audioSearch,
                                                expression: "audioSearch"
                                              }
                                            ],
                                            staticClass:
                                              "form-control dashboard-search-input",
                                            attrs: {
                                              type: "text",
                                              placeholder:
                                                "Search across your channel"
                                            },
                                            domProps: {
                                              value: _vm.audioSearch
                                            },
                                            on: {
                                              input: [
                                                function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.audioSearch =
                                                    $event.target.value
                                                },
                                                function($event) {
                                                  return _vm.searchContent(
                                                    "audio"
                                                  )
                                                }
                                              ]
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "table-responsive" },
                                    [
                                      _c(
                                        "table",
                                        {
                                          staticClass:
                                            "table issuer-content-table media-data-list"
                                        },
                                        [
                                          _vm.contentLoading
                                            ? _c("div", {
                                                staticClass: "loader"
                                              })
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c("thead", [
                                            _c(
                                              "tr",
                                              { staticClass: "text-center" },
                                              [
                                                _c("th", {
                                                  staticClass: "text-left"
                                                }),
                                                _vm._v(" "),
                                                _c("th", [
                                                  _vm._v("Classification")
                                                ]),
                                                _vm._v(" "),
                                                _c("th", [
                                                  _vm._v("Audio Title")
                                                ]),
                                                _vm._v(" "),
                                                _c("th", [
                                                  _vm._v("Audio Subject")
                                                ]),
                                                _vm._v(" "),
                                                _c("th", [_vm._v("Date")]),
                                                _vm._v(" "),
                                                _c("th", [_vm._v("Listens")])
                                              ]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "tbody",
                                            [
                                              _vm._l(_vm.audios, function(
                                                audio
                                              ) {
                                                return _c("tr", [
                                                  _c(
                                                    "td",
                                                    [
                                                      _c(
                                                        "router-link",
                                                        {
                                                          attrs: {
                                                            link: "",
                                                            to: {
                                                              name:
                                                                "ViewAudioDetails",
                                                              params: {
                                                                id: audio.uuid
                                                              }
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("img", {
                                                            attrs: {
                                                              src:
                                                                "/images/audio_thumb.png",
                                                              alt: "",
                                                              height: "75",
                                                              width: "130"
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    {
                                                      staticClass:
                                                        "text-center link-color-blue"
                                                    },
                                                    [
                                                      _c(
                                                        "a",
                                                        {
                                                          attrs: {
                                                            href:
                                                              "javascript:;",
                                                            "data-audio-id":
                                                              audio.id,
                                                            "data-uuid":
                                                              audio.uuid,
                                                            "data-taxonomy-id":
                                                              audio.taxonomy_id
                                                          },
                                                          on: {
                                                            click:
                                                              _vm.showAllTaxonomiesModal
                                                          }
                                                        },
                                                        [_vm._v("View")]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    {
                                                      staticClass:
                                                        "text-center media-title-td"
                                                    },
                                                    [_vm._v(_vm._s(audio.name))]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    {
                                                      staticClass:
                                                        "text-center link-color-blue"
                                                    },
                                                    [
                                                      _c(
                                                        "a",
                                                        {
                                                          attrs: {
                                                            href: "javascript:;"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              $event.preventDefault()
                                                              return _vm.showAllSubjectModal(
                                                                audio.subject_type,
                                                                "Audio"
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [_vm._v("View")]
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    {
                                                      staticClass: "text-center"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          audio.publication_date
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "td",
                                                    {
                                                      staticClass: "text-center"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          _vm.numShortFormatter(
                                                            audio.view_counter
                                                          )
                                                        ) +
                                                          "\n                                                "
                                                      )
                                                    ]
                                                  )
                                                ])
                                              }),
                                              _vm._v(" "),
                                              !_vm.audios.length
                                                ? _c("tr", [
                                                    _c(
                                                      "td",
                                                      {
                                                        staticClass:
                                                          "text-center",
                                                        attrs: { colspan: "9" }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "No audio file found"
                                                        )
                                                      ]
                                                    )
                                                  ])
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _c("tr", [
                                                _c(
                                                  "td",
                                                  { attrs: { colspan: "9" } },
                                                  [
                                                    _vm.audioPagination
                                                      .last_page > 1
                                                      ? _c("pagination", {
                                                          attrs: {
                                                            pagination:
                                                              _vm.audioPagination,
                                                            offset: 5
                                                          },
                                                          on: {
                                                            paginate: function(
                                                              $event
                                                            ) {
                                                              return _vm.getAudioList()
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
                                    ]
                                  )
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-tab",
                              {
                                attrs: {
                                  title: "Company Classifications",
                                  active: _vm.activeTab === 2
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.loadTabContent("classification")
                                  }
                                }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "text-center mt-4 mb-5" },
                                  [
                                    !_vm.hideCatContainer
                                      ? _c(
                                          "div",
                                          { staticClass: "row mx-auto w-100" },
                                          _vm._l(_vm.multipleNodes, function(
                                            each,
                                            index
                                          ) {
                                            return _c(
                                              "div",
                                              {
                                                key: each.categorization_id,
                                                staticClass:
                                                  "border-0 col-lg-3 col-md-4 pb-3",
                                                attrs: { "no-body": "" }
                                              },
                                              [
                                                _c("CompanyNodeCollapses", {
                                                  attrs: {
                                                    each: each,
                                                    objectIndex: index,
                                                    enableEditButton:
                                                      _vm.enableEditButton
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          }),
                                          0
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.hideCatContainer
                                      ? _c(
                                          "div",
                                          { staticClass: "text-left" },
                                          [
                                            _vm._v(
                                              "Company classifications not\n                                        found\n                                    "
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ]
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ])
                ]
              )
            ])
      ]),
      _vm._v(" "),
      _c("loader", { attrs: { "is-visible": _vm.isLoading } }),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "all-taxonomies-modal",
          attrs: {
            centered: "",
            id: "all-taxonomies-modal",
            size: "xl",
            "hide-footer": "",
            title: "All Classifications"
          }
        },
        [
          _c(
            "div",
            {
              staticClass:
                "row mx-auto w-100 text-center modal-classifications-container"
            },
            _vm._l(_vm.mediaHierarchyInfo, function(each, index) {
              return _c(
                "div",
                {
                  key: each.categorization_id,
                  staticClass: "border-0 col-lg-3 col-md-4 pb-3",
                  attrs: { "no-body": "" }
                },
                [
                  _c("CompanyNodeCollapses", {
                    attrs: {
                      each: each,
                      objectIndex: index,
                      enableEditButton: _vm.enableEditButton
                    }
                  })
                ],
                1
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
          ref: "modalAllSubject",
          attrs: {
            id: "modalAllSubject",
            title: _vm.allSubjectModalTitle,
            centered: "",
            "hide-footer": ""
          }
        },
        [
          _c(
            "ul",
            _vm._l(_vm.selectedMediaSubject, function(mediaSubject) {
              return _c("li", [_vm._v(_vm._s(mediaSubject.name))])
            }),
            0
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "modalShareLink",
          attrs: {
            id: "modalShareLink",
            title: "Share",
            centered: "",
            "hide-footer": ""
          }
        },
        [
          _c(
            "b-input-group",
            [
              _c("b-form-input", {
                ref: "sharedLink",
                staticClass: "shared-link",
                attrs: { readonly: "" },
                model: {
                  value: _vm.publicShareLink,
                  callback: function($$v) {
                    _vm.publicShareLink = $$v
                  },
                  expression: "publicShareLink"
                }
              }),
              _vm._v(" "),
              _c(
                "b-input-group-append",
                [
                  _c(
                    "b-button",
                    {
                      staticClass: "font-weight-bold shared-link-copy-btn",
                      attrs: { size: "sm", variant: "outline-primary" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.copyShareLink.apply(null, arguments)
                        }
                      }
                    },
                    [_vm._v("Copy\n                ")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.isCopied
            ? _c(
                "small",
                { staticClass: "font-weight-bold text-success mb-0" },
                [_vm._v("Copied!")]
              )
            : _vm._e()
        ],
        1
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
                      _c("h5", { staticClass: "modal-title modal-title-new" }, [
                        _vm._v("Internal Message")
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "message-modal-close close float-right",
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
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col text-center mb-5" }, [
      _c("img", {
        staticClass: "my-5",
        attrs: { src: "/images/issuerpixel_logo.png", alt: "issuerpixel_logo" }
      }),
      _vm._v(" "),
      _c("h3", { staticClass: "mt-5" }, [_vm._v("Company not found")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mb-2" }, [
      _c("strong", [_vm._v("Social Media Channels:")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/apis/Content.js":
/*!**************************************!*\
  !*** ./resources/js/apis/Content.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

var ajaxRequest = null;
/* harmony default export */ __webpack_exports__["default"] = ({
  audio: function audio(page, audioQueryInput, folderWiseMediaData) {
    if (ajaxRequest) {
      ajaxRequest.cancel();
    }

    ajaxRequest = axios.CancelToken.source();
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/audio?page=" + page + "&query_input=" + audioQueryInput + "&folder_wise_media=" + folderWiseMediaData, {
      cancelToken: ajaxRequest.token
    });
  },
  companyBioAudioList: function companyBioAudioList(page, slug, audioQueryInput) {
    if (ajaxRequest) {
      ajaxRequest.cancel();
    }

    ajaxRequest = axios.CancelToken.source();
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/company-bio-audio?page=" + page + "&slug=" + slug + "&query_input=" + audioQueryInput, {
      cancelToken: ajaxRequest.token
    });
  },
  video: function video(page, videoQueryInput, folderWiseMediaData) {
    // cancel  previous ajax if exists
    if (ajaxRequest) {
      ajaxRequest.cancel();
    }

    ajaxRequest = axios.CancelToken.source();
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/dacast-video?page=" + page + "&query_input=" + videoQueryInput + "&folder_wise_media=" + folderWiseMediaData, {
      cancelToken: ajaxRequest.token
    });
  },
  companyBioVideoList: function companyBioVideoList(page, slug, videoQueryInput) {
    // cancel  previous ajax if exists
    if (ajaxRequest) {
      ajaxRequest.cancel();
    }

    ajaxRequest = axios.CancelToken.source();
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/company-bio-video?page=" + page + "&slug=" + slug + "&query_input=" + videoQueryInput, {
      cancelToken: ajaxRequest.token
    });
  },
  videoDetails: function videoDetails(videoId) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/get-video-info?video_id=" + videoId);
  },
  videoOthers: function videoOthers(videoUuid) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/get-other-video-info?video_uuid=" + videoUuid);
  },
  audioDetails: function audioDetails(audioUuid) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/get-audio-info?uuid=" + audioUuid);
  },
  audioOthers: function audioOthers(audioUuid) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/get-other-audio-info?uuid=" + audioUuid);
  },
  deleteMediaFile: function deleteMediaFile(id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])()["delete"]("/delete-media-file/" + id, {
      params: {
        type: 'media'
      }
    });
  },
  changeMediaFileStatus: function changeMediaFileStatus(form) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/change-media-file-status", form);
  },
  companyBio: function companyBio(slug) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/company-bio?slug=" + slug);
  },
  companyContent: function companyContent(page, slug) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/chat-company-content?page=" + page + "&slug=" + slug);
  },
  updateFilFolder: function updateFilFolder(data) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().put("/update-file-folder", data);
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

/***/ "./resources/js/views/CompanyDetails.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/CompanyDetails.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyDetails_vue_vue_type_template_id_3e3d2f64_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyDetails.vue?vue&type=template&id=3e3d2f64&scoped=true& */ "./resources/js/views/CompanyDetails.vue?vue&type=template&id=3e3d2f64&scoped=true&");
/* harmony import */ var _CompanyDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyDetails.vue?vue&type=script&lang=js& */ "./resources/js/views/CompanyDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CompanyDetails_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompanyDetails.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/CompanyDetails.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _CompanyDetails_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CompanyDetails.vue?vue&type=style&index=1&lang=css& */ "./resources/js/views/CompanyDetails.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _CompanyDetails_vue_vue_type_style_index_2_id_3e3d2f64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CompanyDetails.vue?vue&type=style&index=2&id=3e3d2f64&scoped=true&lang=css& */ "./resources/js/views/CompanyDetails.vue?vue&type=style&index=2&id=3e3d2f64&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");








/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _CompanyDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyDetails_vue_vue_type_template_id_3e3d2f64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyDetails_vue_vue_type_template_id_3e3d2f64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3e3d2f64",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/CompanyDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/CompanyDetails.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/CompanyDetails.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/CompanyDetails.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/CompanyDetails.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetails_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyDetails.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetails.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetails_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetails_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetails_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetails_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/CompanyDetails.vue?vue&type=style&index=1&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/CompanyDetails.vue?vue&type=style&index=1&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetails_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyDetails.vue?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetails.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetails_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetails_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetails_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetails_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/CompanyDetails.vue?vue&type=style&index=2&id=3e3d2f64&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/CompanyDetails.vue?vue&type=style&index=2&id=3e3d2f64&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetails_vue_vue_type_style_index_2_id_3e3d2f64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyDetails.vue?vue&type=style&index=2&id=3e3d2f64&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetails.vue?vue&type=style&index=2&id=3e3d2f64&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetails_vue_vue_type_style_index_2_id_3e3d2f64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetails_vue_vue_type_style_index_2_id_3e3d2f64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetails_vue_vue_type_style_index_2_id_3e3d2f64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetails_vue_vue_type_style_index_2_id_3e3d2f64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/CompanyDetails.vue?vue&type=template&id=3e3d2f64&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/CompanyDetails.vue?vue&type=template&id=3e3d2f64&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetails_vue_vue_type_template_id_3e3d2f64_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyDetails.vue?vue&type=template&id=3e3d2f64&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetails.vue?vue&type=template&id=3e3d2f64&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetails_vue_vue_type_template_id_3e3d2f64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetails_vue_vue_type_template_id_3e3d2f64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);