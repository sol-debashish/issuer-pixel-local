(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

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

/***/ })

}]);