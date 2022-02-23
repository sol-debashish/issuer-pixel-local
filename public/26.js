(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CompanyCategorizationPdf.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CompanyCategorizationPdf.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_Common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/Common */ "./resources/js/apis/Common.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "CompanyNodeCollapses",
  props: ["each", "objectIndex"],
  created: function created() {
    this.nodeColor = _apis_Common__WEBPACK_IMPORTED_MODULE_0__["default"].hierarchyNodeColor;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetailsPdf.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CompanyDetailsPdf.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_Content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../apis/Content */ "./resources/js/apis/Content.js");
/* harmony import */ var _components_CompanyCategorizationPdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CompanyCategorizationPdf */ "./resources/js/components/CompanyCategorizationPdf.vue");
/* harmony import */ var vue_html2pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-html2pdf */ "./node_modules/vue-html2pdf/dist/vue-html2pdf.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["slug"],
  data: function data() {
    return {
      icon: "",
      name: "",
      address: "",
      phoneNumber: "",
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
      multipleNodes: [],
      hideCatContainer: false,
      htmlToPdfOptions: {
        filename: "company-profile.pdf",
        image: {
          type: 'png',
          quality: 2
        },
        enableLinks: true,
        html2canvas: {
          dpi: 300,
          letterRendering: true,
          useCORS: true
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'landscape'
        }
      },
      isGeneratingPdf: false
    };
  },
  methods: {
    getCompanyBio: function getCompanyBio() {
      var _this = this;

      _apis_Content__WEBPACK_IMPORTED_MODULE_0__["default"].companyBio(this.slug).then(function (response) {
        var bioData = response.data.data;
        _this.entityType = bioData.entityType;
        _this.phoneNumber = bioData.phone_number;
        _this.name = bioData.name;
        var addressOne = !!bioData.headquarters.address.street_address_one ? bioData.headquarters.address.street_address_one + ', ' : '';
        var addressTwo = !!bioData.headquarters.address.street_address_two ? bioData.headquarters.address.street_address_two + ', ' : '';
        var city = !!bioData.headquarters.address.city ? bioData.headquarters.address.city + ', ' : '';
        var state = bioData.headquarters.address.states.name + ', ';
        var zip = !!bioData.headquarters.address.zip ? bioData.headquarters.address.zip + ', ' : '';
        var country = bioData.headquarters.address.country.name;
        _this.address = addressOne + addressTwo + city + state + zip + country;
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
      })["catch"](function (error) {
        if (error.response.status === 404) {}
      });
    },
    getHierarchyInfo: function getHierarchyInfo(slug) {
      var _this2 = this;

      axios.get('/api/company-bio-multiple-node/' + slug).then(function (response) {
        _this2.multipleNodes = response.data.data;

        if (_this2.multipleNodes.length < 1) {
          _this2.hideCatContainer = true;
        }
      })["catch"](function (error) {});
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
    makePdf: function makePdf() {
      this.isGeneratingPdf = true;
      this.$refs.html2Pdf.generatePdf();
    },
    hasDownloaded: function hasDownloaded(event) {
      this.isGeneratingPdf = false;
      toastr.success('PDF successfully generated.');
      this.$emit('pdfGenerated');
    }
  },
  created: function created() {
    this.getCompanyBio();
    this.getHierarchyInfo(this.slug);
  },
  components: {
    CompanyCategorizationPdf: _components_CompanyCategorizationPdf__WEBPACK_IMPORTED_MODULE_1__["default"],
    VueHtml2pdf: vue_html2pdf__WEBPACK_IMPORTED_MODULE_2__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetailsPdf.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CompanyDetailsPdf.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".company-profile-share-info .bio-content ul li {\n  font-size: 14px;\n  margin-bottom: 15px;\n}\n.company-profile-share-info .bio-content ul li.social-media-icon i {\n  padding: 8px;\n  font-size: 22px;\n}\n.company-profile-share-info li.social-media-icon .scoop-icon, .company-profile-share-info li.social-media-icon .tiktok-icon {\n  display: inline-flex;\n  height: 22px;\n  margin: 0 7px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CompanyCategorizationPdf.vue?vue&type=style&index=0&id=72c7ed12&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CompanyCategorizationPdf.vue?vue&type=style&index=0&id=72c7ed12&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.categorization-collapse-title-btn[data-v-72c7ed12] {\n    border: 2px solid #cecece;\n}\n.categorization-collapse-title-text[data-v-72c7ed12] {\n    color: #1e0857;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetailsPdf.vue?vue&type=style&index=1&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CompanyDetailsPdf.vue?vue&type=style&index=1&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.vue-html2pdf section section.content-wrapper {\n    padding: 0 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetailsPdf.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CompanyDetailsPdf.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyDetailsPdf.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetailsPdf.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CompanyCategorizationPdf.vue?vue&type=style&index=0&id=72c7ed12&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CompanyCategorizationPdf.vue?vue&type=style&index=0&id=72c7ed12&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyCategorizationPdf.vue?vue&type=style&index=0&id=72c7ed12&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CompanyCategorizationPdf.vue?vue&type=style&index=0&id=72c7ed12&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetailsPdf.vue?vue&type=style&index=1&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CompanyDetailsPdf.vue?vue&type=style&index=1&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyDetailsPdf.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetailsPdf.vue?vue&type=style&index=1&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CompanyCategorizationPdf.vue?vue&type=template&id=72c7ed12&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CompanyCategorizationPdf.vue?vue&type=template&id=72c7ed12&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "span",
        {
          staticClass:
            "d-block px-1 py-2 rounded categorization-collapse-title-btn"
        },
        [
          _c("span", { staticClass: "categorization-collapse-title-text" }, [
            _vm._v("Classification " + _vm._s(_vm.objectIndex + 1))
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-collapse",
        {
          attrs: {
            visible: true,
            id: "accordion-" + _vm.each.categorization_id
          }
        },
        [
          _c("div", { staticClass: "pt-2" }, [
            Object.keys(_vm.each).includes("industry")
              ? _c("span", [
                  _c(
                    "span",
                    {
                      staticClass: "d-block px-1 py-2 text-white rounded",
                      style: { backgroundColor: this.nodeColor("industry") }
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.each.industry.description) +
                          "\n                        "
                      )
                    ]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            Object.keys(_vm.each).includes("sector")
              ? _c("span", [
                  _c("span", { staticClass: "d-block" }, [
                    _c("i", { staticClass: "fas fa-arrow-down" })
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "d-block px-auto py-2 text-white rounded",
                      style: { backgroundColor: this.nodeColor("sector") }
                    },
                    [_vm._v(_vm._s(_vm.each.sector.description))]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            Object.keys(_vm.each).includes("sub_sector")
              ? _c("span", [
                  _c("span", { staticClass: "d-block" }, [
                    _c("i", { staticClass: "fas fa-arrow-down" })
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "d-block px-auto py-2 text-white rounded",
                      style: { backgroundColor: this.nodeColor("subSector") }
                    },
                    [_vm._v(_vm._s(_vm.each.sub_sector.description))]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            Object.keys(_vm.each).includes("group")
              ? _c("span", [
                  _c("span", { staticClass: "d-block" }, [
                    _c("i", { staticClass: "fas fa-arrow-down" })
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "d-block px-auto py-2 text-white rounded",
                      style: { backgroundColor: this.nodeColor("group") }
                    },
                    [_vm._v(_vm._s(_vm.each.group.description))]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            Object.keys(_vm.each).includes("sub_group")
              ? _c("span", [
                  _c("span", { staticClass: "d-block" }, [
                    _c("i", { staticClass: "fas fa-arrow-down" })
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "d-block px-auto py-2 text-white rounded",
                      style: { backgroundColor: this.nodeColor("subGroup") }
                    },
                    [_vm._v(_vm._s(_vm.each.sub_group.description))]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            Object.keys(_vm.each).includes("echelon")
              ? _c("span", [
                  _c("span", { staticClass: "d-block" }, [
                    _c("i", { staticClass: "fas fa-arrow-down" })
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "d-block px-auto py-2 text-white rounded",
                      style: { backgroundColor: this.nodeColor("echelon") }
                    },
                    [_vm._v(_vm._s(_vm.each.echelon.description))]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            Object.keys(_vm.each).includes("sub_echelon")
              ? _c("span", [
                  _c("span", { staticClass: "d-block" }, [
                    _c("i", { staticClass: "fas fa-arrow-down" })
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "d-block px-auto py-2 text-white rounded",
                      style: { backgroundColor: this.nodeColor("subEchelon") }
                    },
                    [_vm._v(_vm._s(_vm.each.sub_echelon.description))]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            Object.keys(_vm.each).includes("tier")
              ? _c("span", [
                  _c("span", { staticClass: "d-block" }, [
                    _c("i", { staticClass: "fas fa-arrow-down" })
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "d-block px-auto py-2 text-white rounded",
                      style: { backgroundColor: this.nodeColor("tier") }
                    },
                    [_vm._v(_vm._s(_vm.each.tier.description))]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            Object.keys(_vm.each).includes("sub_tier")
              ? _c("span", [
                  _c("span", { staticClass: "d-block" }, [
                    _c("i", { staticClass: "fas fa-arrow-down" })
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "d-block px-auto py-2 text-white rounded",
                      style: { backgroundColor: this.nodeColor("subTier") }
                    },
                    [_vm._v(_vm._s(_vm.each.sub_tier.description))]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            Object.keys(_vm.each).includes("layer")
              ? _c("span", [
                  _c("span", { staticClass: "d-block" }, [
                    _c("i", { staticClass: "fas fa-arrow-down" })
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "d-block px-auto py-2 text-white rounded",
                      style: { backgroundColor: this.nodeColor("layer") }
                    },
                    [_vm._v(_vm._s(_vm.each.layer.description))]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            Object.keys(_vm.each).includes("sub_layer")
              ? _c("span", [
                  _c("span", { staticClass: "d-block" }, [
                    _c("i", { staticClass: "fas fa-arrow-down" })
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "d-block px-auto py-2 text-white rounded",
                      style: { backgroundColor: this.nodeColor("subLayer") }
                    },
                    [_vm._v(_vm._s(_vm.each.sub_layer.description))]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            Object.keys(_vm.each).includes("deck")
              ? _c("span", [
                  _c("span", { staticClass: "d-block" }, [
                    _c("i", { staticClass: "fas fa-arrow-down" })
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "d-block px-auto py-2 text-white rounded",
                      style: { backgroundColor: this.nodeColor("deck") }
                    },
                    [_vm._v(_vm._s(_vm.each.deck.description))]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            Object.keys(_vm.each).includes("sub_deck")
              ? _c("span", [
                  _c("span", { staticClass: "d-block" }, [
                    _c("i", { staticClass: "fas fa-arrow-down" })
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "d-block px-auto py-2 text-white rounded",
                      style: { backgroundColor: this.nodeColor("subDeck") }
                    },
                    [_vm._v(_vm._s(_vm.each.sub_deck.description))]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            Object.keys(_vm.each).includes("floor")
              ? _c("span", [
                  _c("span", { staticClass: "d-block" }, [
                    _c("i", { staticClass: "fas fa-arrow-down" })
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "d-block px-auto py-2 text-white rounded",
                      style: { backgroundColor: this.nodeColor("floor") }
                    },
                    [_vm._v(_vm._s(_vm.each.floor.description))]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            Object.keys(_vm.each).includes("sub_floor")
              ? _c("span", [
                  _c("span", { staticClass: "d-block" }, [
                    _c("i", { staticClass: "fas fa-arrow-down" })
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "d-block px-auto py-2 text-white rounded",
                      style: { backgroundColor: this.nodeColor("subFloor") }
                    },
                    [_vm._v(_vm._s(_vm.each.sub_floor.description))]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            Object.keys(_vm.each).includes("basement")
              ? _c("span", [
                  _c("span", { staticClass: "d-block" }, [
                    _c("i", { staticClass: "fas fa-arrow-down" })
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "d-block px-auto py-2 text-white rounded",
                      style: { backgroundColor: this.nodeColor("basement") }
                    },
                    [_vm._v(_vm._s(_vm.each.basement.description))]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            Object.keys(_vm.each).includes("sub_basement")
              ? _c("span", [
                  _c("span", { staticClass: "d-block" }, [
                    _c("i", { staticClass: "fas fa-arrow-down" })
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "d-block px-auto py-2 text-white rounded",
                      style: { backgroundColor: this.nodeColor("subBasement") }
                    },
                    [_vm._v(_vm._s(_vm.each.sub_basement.description))]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            Object.keys(_vm.each).includes("mine")
              ? _c("span", [
                  _c("span", { staticClass: "d-block" }, [
                    _c("i", { staticClass: "fas fa-arrow-down" })
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "d-block px-auto py-2 text-white rounded",
                      style: { backgroundColor: this.nodeColor("mine") }
                    },
                    [_vm._v(_vm._s(_vm.each.mine.description))]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            Object.keys(_vm.each).includes("sub_mine")
              ? _c("span", [
                  _c("span", { staticClass: "d-block" }, [
                    _c("i", { staticClass: "fas fa-arrow-down" })
                  ]),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "d-block px-auto py-2 text-white rounded",
                      style: { backgroundColor: this.nodeColor("subMine") }
                    },
                    [_vm._v(_vm._s(_vm.each.sub_mine.description))]
                  )
                ])
              : _vm._e()
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetailsPdf.vue?vue&type=template&id=8dc01bc4&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/CompanyDetailsPdf.vue?vue&type=template&id=8dc01bc4& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    "vue-html2pdf",
    {
      ref: "html2Pdf",
      attrs: {
        "show-layout": false,
        "float-layout": true,
        "enable-download": true,
        "preview-modal": false,
        "paginate-elements-by-height": 1400,
        filename: "company-profile",
        "pdf-quality": 2,
        "manual-pagination": true,
        "pdf-format": "a4",
        "pdf-orientation": "landscape",
        "pdf-content-width": "100%",
        "html-to-pdf-options": _vm.htmlToPdfOptions
      },
      on: {
        progress: function($event) {},
        hasStartedGeneration: function($event) {
          return _vm.hasStartedGeneration()
        },
        hasDownloaded: function($event) {
          return _vm.hasDownloaded($event)
        }
      }
    },
    [
      _c(
        "section",
        {
          staticClass: "pt-3 bg-white",
          attrs: { slot: "pdf-content" },
          slot: "pdf-content"
        },
        [
          _c("div", { staticClass: "text-center" }, [
            _c("img", {
              attrs: { src: "/images/issuerpixel_logo.png", alt: "" }
            })
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "row collapse show no-gutters d-flex h-100 position-relative pt-3"
            },
            [
              _c("div", { staticClass: "col-lg-3" }, [
                _c(
                  "div",
                  { staticClass: "company-profile-share-info mr-3 pb-5" },
                  [
                    _c("h5", { staticClass: "text-center mb-0" }, [
                      _vm._v("Company Profile")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "bio-content" }, [
                      _c("div", { staticClass: "px-4" }, [
                        _c(
                          "ul",
                          {
                            staticClass: "position-relative list-unstyled mt-3"
                          },
                          [
                            _c(
                              "li",
                              { staticClass: "font-weight-bold text-center" },
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
                            _c("li", [
                              _c("i", { staticClass: "fas fa-map-marker-alt" }),
                              _vm._v("  " + _vm._s(_vm.address))
                            ]),
                            _vm._v(" "),
                            _c("li", [
                              _c("i", { staticClass: "fas fa-phone-alt" }),
                              _vm._v(" " + _vm._s(_vm.phoneNumber))
                            ]),
                            _vm._v(" "),
                            _vm.publicPrivateType
                              ? _c("li", [
                                  _c("strong", [_vm._v("Type: ")]),
                                  _vm._v(" " + _vm._s(_vm.publicPrivateType))
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
                                  _vm._v(" " + _vm._s(_vm.numberOfEmployee))
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.entityType
                              ? _c("li", [
                                  _c("strong", [_vm._v("Legal Entity Type:")]),
                                  _vm._v(" " + _vm._s(_vm.entityType))
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.numberOfShareholder
                              ? _c("li", [
                                  _c("strong", [
                                    _vm._v("Number of Shareholders:")
                                  ]),
                                  _vm._v(" " + _vm._s(_vm.numberOfShareholder))
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
                                  _vm._v(" " + _vm._s(_vm.conductedFinancing))
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.auditedFinancials
                              ? _c("li", [
                                  _c("strong", [_vm._v("Audited Financials:")]),
                                  _vm._v(" " + _vm._s(_vm.auditedFinancials))
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.recentValuation
                              ? _c("li", [
                                  _c("strong", [
                                    _vm._v("Most Recent Valuation:")
                                  ]),
                                  _vm._v(" " + _vm._s(_vm.recentValuation))
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
                                    _vm._l(_vm.intellectualProperty, function(
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
                                                _vm.intellectualProperty.length
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
                            _vm.companySocialMediaPlatform.length
                              ? _c(
                                  "li",
                                  { staticClass: "social-media-icon" },
                                  [
                                    _c("p", { staticClass: "mb-2" }, [
                                      _c("strong", [
                                        _vm._v("Social Media Channels:")
                                      ])
                                    ]),
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
                                                      staticClass: "scoop-icon"
                                                    },
                                                    [
                                                      _c(
                                                        "svg",
                                                        {
                                                          attrs: {
                                                            "enable-background":
                                                              "new 0 0 128 128",
                                                            id: "Social_Icons",
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
                                                                  _c("rect", {
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
                                                                  }),
                                                                  _c("path", {
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
                                                                  })
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
                                                      staticClass: "tiktok-icon"
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
                                                            focusable: "false",
                                                            width: "22px",
                                                            height: "22px",
                                                            preserveAspectRatio:
                                                              "xMidYMid meet",
                                                            viewBox: "0 0 32 32"
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
                                                    ]
                                                  )
                                                : _c("i", {
                                                    class: platform.icon_class
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
              _c("div", { staticClass: "col-lg-9" }, [
                _c("div", { staticClass: "position-relative" }, [
                  _c("h5", { staticClass: "text-center mb-0" }, [
                    _vm._v("Company Classification")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-center bg-white mt-3" }, [
                    !_vm.hideCatContainer
                      ? _c(
                          "div",
                          { staticClass: "row mx-auto w-100" },
                          _vm._l(_vm.multipleNodes, function(each, index) {
                            return _c(
                              "div",
                              {
                                key: each.categorization_id,
                                staticClass: "border-0 col-lg-4 col-md-4 pb-5",
                                attrs: { "no-body": "" }
                              },
                              [
                                _c("CompanyCategorizationPdf", {
                                  attrs: { each: each, objectIndex: index }
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
                      ? _c("div", { staticClass: "text-left" }, [
                          _vm._v("Company classifications not found")
                        ])
                      : _vm._e()
                  ])
                ])
              ])
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

/***/ "./resources/js/components/CompanyCategorizationPdf.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/CompanyCategorizationPdf.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyCategorizationPdf_vue_vue_type_template_id_72c7ed12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyCategorizationPdf.vue?vue&type=template&id=72c7ed12&scoped=true& */ "./resources/js/components/CompanyCategorizationPdf.vue?vue&type=template&id=72c7ed12&scoped=true&");
/* harmony import */ var _CompanyCategorizationPdf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyCategorizationPdf.vue?vue&type=script&lang=js& */ "./resources/js/components/CompanyCategorizationPdf.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CompanyCategorizationPdf_vue_vue_type_style_index_0_id_72c7ed12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompanyCategorizationPdf.vue?vue&type=style&index=0&id=72c7ed12&scoped=true&lang=css& */ "./resources/js/components/CompanyCategorizationPdf.vue?vue&type=style&index=0&id=72c7ed12&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CompanyCategorizationPdf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyCategorizationPdf_vue_vue_type_template_id_72c7ed12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyCategorizationPdf_vue_vue_type_template_id_72c7ed12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "72c7ed12",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CompanyCategorizationPdf.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CompanyCategorizationPdf.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/CompanyCategorizationPdf.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyCategorizationPdf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyCategorizationPdf.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CompanyCategorizationPdf.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyCategorizationPdf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CompanyCategorizationPdf.vue?vue&type=style&index=0&id=72c7ed12&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/CompanyCategorizationPdf.vue?vue&type=style&index=0&id=72c7ed12&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyCategorizationPdf_vue_vue_type_style_index_0_id_72c7ed12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyCategorizationPdf.vue?vue&type=style&index=0&id=72c7ed12&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CompanyCategorizationPdf.vue?vue&type=style&index=0&id=72c7ed12&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyCategorizationPdf_vue_vue_type_style_index_0_id_72c7ed12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyCategorizationPdf_vue_vue_type_style_index_0_id_72c7ed12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyCategorizationPdf_vue_vue_type_style_index_0_id_72c7ed12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyCategorizationPdf_vue_vue_type_style_index_0_id_72c7ed12_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/CompanyCategorizationPdf.vue?vue&type=template&id=72c7ed12&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/CompanyCategorizationPdf.vue?vue&type=template&id=72c7ed12&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyCategorizationPdf_vue_vue_type_template_id_72c7ed12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyCategorizationPdf.vue?vue&type=template&id=72c7ed12&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CompanyCategorizationPdf.vue?vue&type=template&id=72c7ed12&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyCategorizationPdf_vue_vue_type_template_id_72c7ed12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyCategorizationPdf_vue_vue_type_template_id_72c7ed12_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/CompanyDetailsPdf.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/CompanyDetailsPdf.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyDetailsPdf_vue_vue_type_template_id_8dc01bc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyDetailsPdf.vue?vue&type=template&id=8dc01bc4& */ "./resources/js/views/CompanyDetailsPdf.vue?vue&type=template&id=8dc01bc4&");
/* harmony import */ var _CompanyDetailsPdf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyDetailsPdf.vue?vue&type=script&lang=js& */ "./resources/js/views/CompanyDetailsPdf.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CompanyDetailsPdf_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompanyDetailsPdf.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/CompanyDetailsPdf.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _CompanyDetailsPdf_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CompanyDetailsPdf.vue?vue&type=style&index=1&lang=css& */ "./resources/js/views/CompanyDetailsPdf.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _CompanyDetailsPdf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyDetailsPdf_vue_vue_type_template_id_8dc01bc4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyDetailsPdf_vue_vue_type_template_id_8dc01bc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/CompanyDetailsPdf.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/CompanyDetailsPdf.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/CompanyDetailsPdf.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetailsPdf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyDetailsPdf.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetailsPdf.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetailsPdf_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/CompanyDetailsPdf.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/CompanyDetailsPdf.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetailsPdf_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyDetailsPdf.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetailsPdf.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetailsPdf_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetailsPdf_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetailsPdf_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetailsPdf_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/CompanyDetailsPdf.vue?vue&type=style&index=1&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/CompanyDetailsPdf.vue?vue&type=style&index=1&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetailsPdf_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyDetailsPdf.vue?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetailsPdf.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetailsPdf_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetailsPdf_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetailsPdf_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetailsPdf_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/CompanyDetailsPdf.vue?vue&type=template&id=8dc01bc4&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/CompanyDetailsPdf.vue?vue&type=template&id=8dc01bc4& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetailsPdf_vue_vue_type_template_id_8dc01bc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyDetailsPdf.vue?vue&type=template&id=8dc01bc4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/CompanyDetailsPdf.vue?vue&type=template&id=8dc01bc4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetailsPdf_vue_vue_type_template_id_8dc01bc4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetailsPdf_vue_vue_type_template_id_8dc01bc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);