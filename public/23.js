(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoUploaderProgressbar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VideoUploaderProgressbar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
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
      uploadMsg: "Uploading...",
      uploadingFiles: []
    };
  },
  props: ['resumble'],
  methods: {
    close: function close() {
      var vueInstance = this;

      if (this.resumble.isUploading()) {
        $.confirm({
          title: 'Cancel upload',
          content: 'Are you sure you want to cancel the upload?',
          type: 'purple',
          typeAnimated: true,
          buttons: {
            'Cancel Upload': {
              btnClass: 'btn-default rounded-pill',
              action: function action() {
                vueInstance.resumble.cancel();
                vueInstance.$emit('close');
              }
            },
            Close: {
              btnClass: 'btn-success rounded-pill',
              // class for the button
              action: function action() {}
            }
          }
        });
      } else {
        vueInstance.$emit('close');
      }
    }
  },
  mounted: function mounted() {
    var vi = this; // this.resumble.on('progress', function () {
    //     $('#mini-upload-progress').removeClass('d-none').find('.progress-bar').attr('style', "width:" + this.progress() * 100 + '%').html(Math.round(this.progress() * 100) + '%');
    //
    // });

    this.resumble.on('fileProgress', function (file) {
      $('[data-uniqueId=' + file.uniqueIdentifier + ']').find('.progress-bar').attr('style', "width:" + file.progress() * 100 + '%').html(Math.round(file.progress() * 100) + '%');
    });
    this.resumble.on('complete', function (file, message) {
      vi.uploadMsg = "Uploading complete!", vi.$emit('resumbleUploadCompleted');

      window.onbeforeunload = function () {// blank function do nothing
      };
    });
    this.resumble.on('fileSuccess', function (file) {
      $('[data-uniqueId=' + file.uniqueIdentifier + ']').find('.deleteVideoFile').hide();
    });
    this.resumble.files.forEach(function (file) {
      vi.uploadingFiles.push(file.uniqueIdentifier);
      var template = '<div data-uniqueid="' + file.uniqueIdentifier + '" class="mb-3">' + '<div class="clearfix">' + '<div class="fileName float-left">' + file.fileName + '</div>' + '<div class="deleteVideoFile float-md-right">X</div>' + '</div>' + '<div class="progress">' + '<div class="progress-bar bg-success text-center" role="progressbar" style="width:0%;>' + '<span className="sr-only"></span>' + '</div>' + '</div>';
      $('#progress-list').append(template);
    });
    $(document).on('click', '.deleteVideoFile', function () {
      var self = $(this),
          parent = self.parent().parent(),
          identifier = parent.data('uniqueid'),
          file = vi.resumble.getFromUniqueIdentifier(identifier);

      if (vi.resumble.files.length == 1) {
        $.confirm({
          title: 'Cancel upload',
          content: 'Are you sure you want to cancel the upload?',
          type: 'purple',
          typeAnimated: true,
          buttons: {
            'Cancel Upload': {
              btnClass: 'btn-default rounded-pill',
              action: function action() {
                vi.resumble.cancel();
                vi.$emit('close');
              }
            },
            Close: {
              btnClass: 'btn-success rounded-pill',
              // class for the button
              action: function action() {}
            }
          }
        });
      } else {
        vi.resumble.removeFile(file);
        parent.remove();
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppFooter.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/partials/AppFooter.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
//
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
  name: 'app-footer'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppHeader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/partials/AppHeader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/User */ "./resources/js/apis/User.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// eslint-disable-next-line


var $ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app-header',
  data: function data() {
    return {
      isLoading: false,
      isSidebarCollapse: false,
      isLoggedIn: false,
      isAdminLoggedIn: false,
      isLoggedInForQuestionnaire: false,
      activeClass: 'active',
      username: '',
      videoRemainingDays: 0,
      videoUploaded: false,
      adminData: {
        adminInfo: ''
      },
      company: '',
      firstName: '',
      email: '',
      companyImage: '',
      notifications: [],
      totalNotifications: 0,
      unreadCount: 0,
      unreadText: 'no',
      latestNotificationTime: null,
      timer: null,
      messages: [],
      totalMessages: 0,
      unreadMessage: 0,
      unreadMessageText: 'no',
      latestMessageTime: null,
      messageTimer: null,
      receiverCompanyId: '',
      bulletins: []
    };
  },
  props: ["profileUpdatedData", "resumble"],
  methods: {
    collapedSidebar: function collapedSidebar() {
      $('body').toggleClass('sidebar-icon-only');

      if (this.isSidebarCollapse) {
        this.isSidebarCollapse = false;
      } else {
        this.isSidebarCollapse = true;
      }
      /*Hide active sub menus for audio and video upload when side bar toggle*/


      var body = document.querySelector('body');

      if (body.classList.contains('sidebar-icon-only')) {
        if (this.currentPage.match('audioQuestionnaire')) {
          $('#upload-audio').removeClass('show show d-block');
        } else if (this.currentPage.match('videoQuestionnaire')) {
          $('#upload-video').removeClass('show show d-block');
        } else if (this.currentPage.match('CompanyDetails') || this.currentPage.match('CompanyQuestionnairesDetails')) {
          $('#company-profile').removeClass('show show d-block');
        } else if (this.currentPage.match('PersonalizedNewsIndustry') || this.currentPage.match('PersonalizedNewsNode')) {
          $('#personalized-news').removeClass('show show d-block');
        }
      } else {
        if (this.currentPage.match('audioQuestionnaire')) {
          $('#upload-audio').addClass('show show d-block');
        } else if (this.currentPage.match('videoQuestionnaire')) {
          $('#upload-video').addClass('show show d-block');
        } else if (this.currentPage.match('CompanyDetails') || this.currentPage.match('CompanyQuestionnairesDetails')) {
          $('#company-profile').addClass('show show d-block');
        } else if (this.currentPage.match('PersonalizedNewsIndustry') || this.currentPage.match('PersonalizedNewsNode')) {
          $('#personalized-news').addClass('show show d-block');
        }
      }
      /*End*/

    },
    collapedMobileSidebar: function collapedMobileSidebar() {
      $('#sidebar').toggleClass('active');

      if (this.isSidebarCollapse) {
        this.isSidebarCollapse = false;
      } else {
        this.isSidebarCollapse = true;
      }
    },
    logout: function logout() {
      var vueInstance = this;

      if (!!this.resumble && this.resumble.isUploading()) {
        $.confirm({
          title: 'Cancel upload',
          content: 'Are you sure you want to cancel the upload?',
          type: 'purple',
          typeAnimated: true,
          buttons: {
            'Cancel Upload': {
              btnClass: 'btn-default rounded-pill',
              action: function action() {
                vueInstance.resumble.cancel();
                vueInstance.logoutCall();
              }
            },
            Close: {
              btnClass: 'btn-success rounded-pill',
              // class for the button
              action: function action() {}
            }
          }
        });
      } else {
        this.logoutCall();
      }
    },
    logoutCall: function logoutCall() {
      var _this = this;

      this.isLoading = true;
      var logoutFormData = new FormData();
      logoutFormData.append('type', 'manual');
      _apis_User__WEBPACK_IMPORTED_MODULE_1__["default"].logout(logoutFormData).then(function () {
        _this.isLoading = false;
        localStorage.clear();
        _this.isLoggedIn = false;
        _this.isLoggedInForQuestionnaire = false;

        _this.$router.push({
          name: "Home"
        });
      });
    },
    backToAdmin: function backToAdmin() {
      this.adminData.adminInfo = localStorage.getItem("adminInfo");
      _apis_User__WEBPACK_IMPORTED_MODULE_1__["default"].backToAdmin(this.adminData).then(function (response) {
        localStorage.clear();
        window.location.href = response.data.data.backUrl;
      });
    },
    closeSupportModal: function closeSupportModal() {
      this.$refs['support-modal'].hide();
    },
    showSupportModal: function showSupportModal() {
      this.$refs['support-modal'].show();
    },
    getNotifications: function getNotifications() {
      var _this2 = this;

      _apis_User__WEBPACK_IMPORTED_MODULE_1__["default"].notifications(this.totalNotifications).then(function (response) {
        var _this2$notifications;

        _this2.totalNotifications = response.data.data.totalNotifications;
        _this2.unreadCount = response.data.data.unreadCount;
        _this2.unreadText = response.data.data.unreadText;
        _this2.latestNotificationTime = response.data.data.latestNotificationTime;

        (_this2$notifications = _this2.notifications).push.apply(_this2$notifications, _toConsumableArray(response.data.data.notifications));
      })["catch"](function (error) {
        _this2.isLoading = false;

        if (error.response.status == 401) {
          _this2.$emit("logout");
        }
      });
    },
    markAllAsRead: function markAllAsRead() {
      var _this3 = this;

      _apis_User__WEBPACK_IMPORTED_MODULE_1__["default"].markAllAsRead(this.totalNotifications).then(function (response) {
        _this3.unreadCount = response.data.data.unreadCount;
        _this3.unreadText = response.data.data.unreadText;
        _this3.notifications = response.data.data.notifications;
      })["catch"](function (error) {
        _this3.isLoading = false;

        if (error.response.status == 401) {
          _this3.$emit("logout");
        }
      });
    },
    getNextNotifications: function getNextNotifications(listElm) {
      var _this4 = this;

      listElm.addEventListener('scroll', function (e) {
        if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
          _apis_User__WEBPACK_IMPORTED_MODULE_1__["default"].notifications(_this4.totalNotifications).then(function (response) {
            if (response.data.data.length !== 0) {
              var _this4$notifications;

              _this4.totalNotifications = response.data.data.totalNotifications;

              (_this4$notifications = _this4.notifications).push.apply(_this4$notifications, _toConsumableArray(response.data.data.notifications));
            }
          })["catch"](function (error) {
            _this4.isLoading = false;

            if (error.response.status == 401) {
              _this4.$emit("logout");
            }
          });
        }
      });
    },
    getRecentNotifications: function getRecentNotifications() {
      var _this5 = this;

      _apis_User__WEBPACK_IMPORTED_MODULE_1__["default"].recentNotifications(this.latestNotificationTime, this.totalNotifications).then(function (response) {
        var _this5$notifications;

        _this5.totalNotifications = response.data.data.totalNotifications;
        _this5.unreadCount = response.data.data.unreadCount;
        _this5.unreadText = response.data.data.unreadText;
        _this5.latestNotificationTime = response.data.data.latestNotificationTime;

        (_this5$notifications = _this5.notifications).unshift.apply(_this5$notifications, _toConsumableArray(response.data.data.notifications));
      })["catch"](function (error) {
        _this5.isLoading = false;

        if (error.response.status == 401) {
          _this5.$emit("logout");
        }
      });
    },
    getMessages: function getMessages() {
      var _this6 = this;

      _apis_User__WEBPACK_IMPORTED_MODULE_1__["default"].getMessages(this.totalMessages, this.receiverCompanyId).then(function (response) {
        var _this6$messages;

        _this6.totalMessages = response.data.data.totalMessages;
        _this6.unreadMessage = response.data.data.unreadCount;
        _this6.unreadMessageText = response.data.data.unreadText;
        _this6.latestMessageTime = response.data.data.latestMessageTime;

        (_this6$messages = _this6.messages).push.apply(_this6$messages, _toConsumableArray(response.data.data.messages));
      })["catch"](function (error) {
        _this6.isLoading = false;

        if (error.response.status == 401) {
          _this6.$emit("logout");
        }
      });
    },
    markAllMessageAsRead: function markAllMessageAsRead() {
      var _this7 = this;

      _apis_User__WEBPACK_IMPORTED_MODULE_1__["default"].markAllMessageAsRead({
        'totalMessages': this.totalMessages,
        'receiverCompanyId': this.receiverCompanyId
      }).then(function (response) {
        _this7.unreadMessage = response.data.data.unreadCount;
        _this7.unreadMessageText = response.data.data.unreadText;
        _this7.messages = response.data.data.messages;
      })["catch"](function (error) {
        _this7.isLoading = false;

        if (error.response.status == 401) {
          _this7.$emit("logout");
        }
      });
    },
    getNextMessages: function getNextMessages(listElm) {
      var _this8 = this;

      listElm.addEventListener('scroll', function (e) {
        if (listElm.scrollTop + listElm.clientHeight == listElm.scrollHeight - 1) {
          _apis_User__WEBPACK_IMPORTED_MODULE_1__["default"].getMessages(_this8.totalMessages, _this8.receiverCompanyId).then(function (response) {
            if (response.data.data.length !== 0) {
              var _this8$messages;

              _this8.totalMessages = response.data.data.totalMessages;

              (_this8$messages = _this8.messages).push.apply(_this8$messages, _toConsumableArray(response.data.data.messages));
            }
          })["catch"](function (error) {
            _this8.isLoading = false;

            if (error.response.status == 401) {
              _this8.$emit("logout");
            }
          });
        }
      });
    },
    getRecentMessages: function getRecentMessages() {
      var _this9 = this;

      _apis_User__WEBPACK_IMPORTED_MODULE_1__["default"].getRecentMessages(this.latestMessageTime, this.totalMessages, this.receiverCompanyId).then(function (response) {
        var _this9$messages;

        _this9.totalMessages = response.data.data.totalMessages;
        _this9.unreadMessage = response.data.data.unreadCount;
        _this9.unreadMessageText = response.data.data.unreadText;
        _this9.latestMessageTime = response.data.data.latestMessageTime;

        (_this9$messages = _this9.messages).unshift.apply(_this9$messages, _toConsumableArray(response.data.data.messages));
      })["catch"](function (error) {
        _this9.isLoading = false;

        if (error.response.status == 401) {
          _this9.$emit("logout");
        }
      });
    },
    updateReadStatus: function updateReadStatus(index) {
      var _this10 = this;

      if (this.messages[index].read_status == 0) {
        _apis_User__WEBPACK_IMPORTED_MODULE_1__["default"].updateReadStatus({
          'id': this.messages[index].id
        }).then(function (response) {
          _this10.messages[index].style = '';
          _this10.messages[index].activeStatus = false;
          _this10.unreadMessage -= 1;
          _this10.unreadMessageText = _this10.unreadMessage ? _this10.unreadMessage : 'no';
        })["catch"](function (error) {
          if (error.response.status == 401) {
            _this10.$emit("logout");
          } else {
            toastr.error(error.response.data.error.message);
          }
        });
      }
    }
  },
  mounted: function mounted() {
    var _this11 = this;

    this.$root.$on("login", function () {
      _this11.isLoggedIn = true;
    });
    this.isLoggedIn = !!localStorage.getItem("token");
    this.isLoggedInForQuestionnaire = !!localStorage.getItem("isLoggedInForQuestionnaire");
    this.isAdminLoggedIn = localStorage.getItem("adminInfo");
    this.videoRemainingDays = localStorage.getItem('videoUploadRemainingDays');
    this.bulletins = JSON.parse(localStorage.getItem('bulletins'));
    this.videoUploaded = localStorage.getItem('isVideoUploaded') == 'yes' ? true : false;
    var user = JSON.parse(localStorage.getItem("info"));
    this.company = user.company;
    this.firstName = user.firstName;
    this.email = user.email;
    this.companyImage = "" != user.company_image ? user.company_image : "/images/image-placeholder-1.png";

    if (null != user) {
      var fullName = user.name.split(' ');
      var initials = fullName.shift().charAt(0) + '.' + fullName.pop().charAt(0) + '.';
      this.username = initials.toUpperCase();
    }

    var listElm = document.querySelector('li.notification-dropdown ul.dropdown-menu');
    this.getNextNotifications(listElm);
    var messageElm = document.querySelector('li.message-dropdown ul.dropdown-menu');
    this.getNextMessages(messageElm);
  },
  created: function created() {
    var _this12 = this;

    this.receiverCompanyId = JSON.parse(localStorage.getItem("info")).company_id;
    this.getNotifications();
    this.timer = setInterval(function () {
      _this12.getRecentNotifications();
    }, 60000);
    this.getMessages();
    this.messageTimer = setInterval(function () {
      _this12.getRecentMessages();
    }, 30000);
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.timer);
    clearInterval(this.messageTimer);
  },
  computed: {
    currentPage: function currentPage() {
      return this.$route.name;
    }
  },
  components: {
    loader: function loader() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../components/Loader */ "./resources/js/components/Loader.vue"));
    },
    HelpAndSupport: function HelpAndSupport() {
      return __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! ../../components/HelpAndSupport */ "./resources/js/components/HelpAndSupport.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppSidebar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/partials/AppSidebar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apis/User */ "./resources/js/apis/User.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // eslint-disable-next-line

var $ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app-sidebar',
  data: function data() {
    return {
      isLoading: false,
      activeClass: 'active',
      isDisabled: false,
      isUploading: false,
      isCollapse: false,
      linkGrayOut: '',
      companyUuid: null,
      companySlugName: null
    };
  },
  props: ["profileUpdatedData", "audioStep", "audioProgressStep", "videoStep", "videoProgressStep"],
  methods: {
    updateProfile: function updateProfile(data) {
      this.$emit('updateProfile', data);
    },
    closeSupportModal: function closeSupportModal() {
      this.$refs['support-modal'].hide();
    },
    showSupportModal: function showSupportModal() {
      this.$refs['support-modal'].show();
    },
    logout: function logout() {
      var _this = this;

      this.isLoading = true;
      var logoutFormData = new FormData();
      logoutFormData.append('type', 'manual');
      _apis_User__WEBPACK_IMPORTED_MODULE_1__["default"].logout(logoutFormData).then(function () {
        _this.isLoading = false;
        localStorage.clear();

        _this.$router.push({
          name: "Home"
        });
      });
    }
  },
  mounted: function mounted() {
    var body = document.querySelector('body'); // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu

    document.querySelectorAll('.sidebar .nav-item').forEach(function (el) {
      el.addEventListener('mouseover', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });

    if (localStorage.getItem('videoUploadRemainingDays') == 0 && localStorage.getItem('isVideoUploaded') == 'no') {
      this.linkGrayOut = 'trialExpired';
    }
  },
  computed: {
    currentPage: function currentPage() {
      return this.$route.name;
    },
    currentPageSlug: function currentPageSlug() {
      return !!this.$route.params.slug ? this.$route.params.slug : this.companySlugName;
    }
  },
  created: function created() {
    if (this.currentPage.match('PersonalizedNewsIndustry') || this.currentPage.match('PersonalizedNewsNode')) {
      this.isCollapse = true;
    }

    this.companyUuid = localStorage.getItem('companyUuid');
    this.companySlugName = localStorage.getItem('companySlugName');
  },
  components: {
    loader: function loader() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../../components/Loader */ "./resources/js/components/Loader.vue"));
    },
    ProfileImageSettings: function ProfileImageSettings() {
      return __webpack_require__.e(/*! import() */ 20).then(__webpack_require__.bind(null, /*! ../../components/settings/ProfileImageSettings */ "./resources/js/components/settings/ProfileImageSettings.vue"));
    },
    HelpAndSupport: function HelpAndSupport() {
      return __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! ../../components/HelpAndSupport */ "./resources/js/components/HelpAndSupport.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mainView.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/mainView.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_partials_AppHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/partials/AppHeader */ "./resources/js/components/partials/AppHeader.vue");
/* harmony import */ var _components_partials_AppSidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/partials/AppSidebar */ "./resources/js/components/partials/AppSidebar.vue");
/* harmony import */ var _components_partials_AppFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/partials/AppFooter */ "./resources/js/components/partials/AppFooter.vue");
/* harmony import */ var _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navigation.vue */ "./resources/js/components/Navigation.vue");
/* harmony import */ var _components_VideoUploaderProgressbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/VideoUploaderProgressbar */ "./resources/js/components/VideoUploaderProgressbar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'mainView',
  data: function data() {
    return {
      isLoggedIn: false,
      profileUpdatedData: "",
      viewKey: 1,
      audioStep: 1,
      audioProgressStep: 1,
      videoStep: 1,
      videoProgressStep: 1,
      isUploadingModalVisible: false,
      resumble: null,
      resumbleUploadCompleted: false
    };
  },
  methods: {
    updateProfile: function updateProfile(data) {
      this.profileUpdatedData = data;
    },
    updateViewKey: function updateViewKey() {
      this.viewKey += 1;
    },
    logout: function logout() {
      localStorage.clear();
      this.$router.push({
        name: "Login"
      });
    },
    updateAudioUploadStep: function updateAudioUploadStep(step) {
      this.audioStep = step;
    },
    updateAudioUploadProgressStep: function updateAudioUploadProgressStep(step) {
      this.audioProgressStep = step;
    },
    updateVideoUploadStep: function updateVideoUploadStep(step) {
      this.videoStep = step;
    },
    updateVideoUploadProgressStep: function updateVideoUploadProgressStep(step) {
      this.videoProgressStep = step;
    },
    navigateMediaStepsFromSidebar: function navigateMediaStepsFromSidebar(step, mediaStep, type) {
      // console.log(this.$refs.nestedComponent);
      if (type == 'video') {
        if (step == 1 && mediaStep != 1) {
          this.$refs.nestedComponent.setPreviousStepDataFromSidebarStep1();
        } else if (step == 2 && mediaStep != 2) {
          this.$refs.nestedComponent.setPreviousStepDataFromSidebarStep2();
        } else if (step == 3 && mediaStep != 3) {
          this.$refs.nestedComponent.updateFormData();
        }

        this.videoStep = step;
      } else if (type == 'audio') {
        if (step == 1 && mediaStep != 1) {
          this.$refs.nestedComponent.setPreviousStepDataFromSidebarStep1();
        } else if (step == 2 && mediaStep != 2) {
          this.$refs.nestedComponent.setPreviousStepDataFromSidebarStep2();
        } else if (step == 3 && mediaStep != 3) {
          this.$refs.nestedComponent.updateFormData();
        }

        this.audioStep = step;
      }

      this.$refs.nestedComponent.step = step;
      this.$refs.nestedComponent.progressBarActiveInactive(step);
    },
    setVideoUploaderState: function setVideoUploaderState(data) {
      this.resumble = data;
      this.resumbleUploadCompleted = false;
      this.isUploadingModalVisible = true;
    },
    closeModal: function closeModal() {
      window.onbeforeunload = function () {// blank function do nothing
      };

      this.isUploadingModalVisible = false;
    },
    resumbleUploadCompletedFn: function resumbleUploadCompletedFn() {
      this.resumbleUploadCompleted = true;
      this.isUploadingModalVisible = false;
    }
  },
  mounted: function mounted() {
    this.isLoggedIn = !!localStorage.getItem("token");
  },
  components: {
    AppHeader: _components_partials_AppHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    AppSidebar: _components_partials_AppSidebar__WEBPACK_IMPORTED_MODULE_1__["default"],
    AppFooter: _components_partials_AppFooter__WEBPACK_IMPORTED_MODULE_2__["default"],
    VideoUploaderProgressbar: _components_VideoUploaderProgressbar__WEBPACK_IMPORTED_MODULE_4__["default"],
    Navigation: _components_Navigation_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppFooter.vue?vue&type=style&index=0&id=631e624a&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/partials/AppFooter.vue?vue&type=style&index=0&id=631e624a&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppHeader.vue?vue&type=style&index=0&id=f75e7388&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/partials/AppHeader.vue?vue&type=style&index=0&id=f75e7388&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".support-modal-close[data-v-f75e7388] {\n  position: absolute;\n  right: 16px;\n  top: 16px;\n}\n.support-modal-close[data-v-f75e7388]:hover {\n  background-color: #ffffff;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppSidebar.vue?vue&type=style&index=0&id=ad4f3986&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/partials/AppSidebar.vue?vue&type=style&index=0&id=ad4f3986&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-sidebar[data-v-ad4f3986] {\n  padding-top: 0px !important;\n  background-color: #fff;\n  height: 100%;\n}\nul.nav li.nav-item a.active[data-v-ad4f3986] {\n  background: #4823A8 !important;\n  border-radius: 0 30px 30px 0;\n  color: #fff !important;\n}\nul.nav li.nav-item a.active i[data-v-ad4f3986] {\n  color: #fff !important;\n}\n.sub-menu-active[data-v-ad4f3986] {\n  color: #1E0857 !important;\n  text-decoration: underline;\n}\n.sub-menu-area-expanded i.menu-arrow[data-v-ad4f3986] {\n  /*transform: rotate(-90deg);*/\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoUploaderProgressbar.vue?vue&type=style&index=0&id=0a03c3e8&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VideoUploaderProgressbar.vue?vue&type=style&index=0&id=0a03c3e8&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.video-modal-backdrop[data-v-0a03c3e8] {\n    position: fixed;\n    bottom: 25px;\n    right: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.video-modal[data-v-0a03c3e8] {\n    background: #FFFFFF;\n    box-shadow: 2px 2px 20px 1px;\n    overflow-x: auto;\n    display: flex;\n    flex-direction: column;\n    width: 350px;\n}\n.video-modal-header[data-v-0a03c3e8],\n.video-modal-footer[data-v-0a03c3e8] {\n    padding: 15px;\n    display: flex;\n}\n.video-modal-header[data-v-0a03c3e8] {\n    position: relative;\n    border-bottom: 1px solid #eeeeee;\n    color: #4AAE9B;\n    justify-content: space-between;\n}\n.video-modal-footer[data-v-0a03c3e8] {\n    border-top: 1px solid #eeeeee;\n    flex-direction: column;\n    justify-content: flex-end;\n}\n.video-modal-body[data-v-0a03c3e8] {\n    max-height: 200px;\n    position: relative;\n    padding: 20px 10px;\n}\n.btn-close[data-v-0a03c3e8] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    border: none;\n    font-size: 20px;\n    padding: 10px;\n    cursor: pointer;\n    font-weight: bold;\n    color: #4AAE9B;\n    background: transparent;\n}\n.btn-green[data-v-0a03c3e8] {\n    color: white;\n    background: #4AAE9B;\n    border: 1px solid #4AAE9B;\n    border-radius: 2px;\n}\n#progress-list[data-v-0a03c3e8]:last-child{\n    padding-bottom: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppHeader.vue?vue&type=style&index=1&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/partials/AppHeader.vue?vue&type=style&index=1&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.notification-dropdown .dropdown-menu {\n    max-height: 200px;\n    overflow-y: auto;\n}\n.notification-unread {\n    background: #e1e1e1 !important;\n}\na.notification-unread:hover {\n    background: #efefef !important;\n}\n.blue-text-color{\n    color: blue;\n}\n.message-dropdown .dropdown-menu {\n    max-height: 200px;\n    overflow-y: auto;\n}\n.message-unread {\n    background: #e1e1e1 !important;\n}\na.message-unread:hover {\n    background: #efefef !important;\n}\n.warp-text-title{\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    max-width: 200px;\n}\n.sender-name {\n    max-width: 100px;\n}\n.message-time {\n    font-size: 10px;\n    margin-left: auto;\n    margin-top: 2px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mainView.vue?vue&type=style&index=0&id=2540b0fd&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/mainView.vue?vue&type=style&index=0&id=2540b0fd&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/mdi/css/materialdesignicons.min.css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/mdi/css/materialdesignicons.min.css"), "");
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/vue-snotify/styles/material.css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-snotify/styles/material.css"), "");
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/typicons.font/src/font/typicons.css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/typicons.font/src/font/typicons.css"), "");

// module
exports.push([module.i, "\n.content-with-navigation[data-v-2540b0fd]{\n    padding-top: 70px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mainView.vue?vue&type=style&index=1&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/mainView.vue?vue&type=style&index=1&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.modal-title-new {\n    font-size: 16px;\n    color: #1e0857;\n}\n.message-modal-close {\n    position: absolute;\n    right: 16px;\n    top: 16px;\n}\n.message-modal-close:hover {\n    background-color: #ffffff;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppFooter.vue?vue&type=style&index=0&id=631e624a&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/partials/AppFooter.vue?vue&type=style&index=0&id=631e624a&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=style&index=0&id=631e624a&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppFooter.vue?vue&type=style&index=0&id=631e624a&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppHeader.vue?vue&type=style&index=0&id=f75e7388&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/partials/AppHeader.vue?vue&type=style&index=0&id=f75e7388&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppHeader.vue?vue&type=style&index=0&id=f75e7388&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppHeader.vue?vue&type=style&index=0&id=f75e7388&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppSidebar.vue?vue&type=style&index=0&id=ad4f3986&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/partials/AppSidebar.vue?vue&type=style&index=0&id=ad4f3986&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppSidebar.vue?vue&type=style&index=0&id=ad4f3986&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppSidebar.vue?vue&type=style&index=0&id=ad4f3986&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoUploaderProgressbar.vue?vue&type=style&index=0&id=0a03c3e8&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VideoUploaderProgressbar.vue?vue&type=style&index=0&id=0a03c3e8&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./VideoUploaderProgressbar.vue?vue&type=style&index=0&id=0a03c3e8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoUploaderProgressbar.vue?vue&type=style&index=0&id=0a03c3e8&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppHeader.vue?vue&type=style&index=1&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/partials/AppHeader.vue?vue&type=style&index=1&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppHeader.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppHeader.vue?vue&type=style&index=1&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mainView.vue?vue&type=style&index=0&id=2540b0fd&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/mainView.vue?vue&type=style&index=0&id=2540b0fd&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./mainView.vue?vue&type=style&index=0&id=2540b0fd&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mainView.vue?vue&type=style&index=0&id=2540b0fd&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mainView.vue?vue&type=style&index=1&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/mainView.vue?vue&type=style&index=1&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./mainView.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mainView.vue?vue&type=style&index=1&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoUploaderProgressbar.vue?vue&type=template&id=0a03c3e8&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/VideoUploaderProgressbar.vue?vue&type=template&id=0a03c3e8&scoped=true& ***!
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
  return _c("div", { staticClass: "video-modal-backdrop" }, [
    _c("div", { staticClass: "video-modal" }, [
      _c(
        "header",
        { staticClass: "video-modal-header" },
        [
          _vm._t("header", function() {
            return [_vm._v(_vm._s(_vm.uploadMsg))]
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn-close",
              attrs: { type: "button" },
              on: { click: _vm.close }
            },
            [_vm._v("\n                    x\n                ")]
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "section",
        { staticClass: "video-modal-body" },
        [
          _vm._t("body", function() {
            return [
              _c("div", {
                staticClass: "panel",
                attrs: { id: "progress-list" }
              })
            ]
          })
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppFooter.vue?vue&type=template&id=631e624a&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/partials/AppFooter.vue?vue&type=template&id=631e624a&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    _c("section", { staticClass: "app-footer pt-0" }, [
      _c("footer", { staticClass: "footer" }, [
        _c("div", { staticClass: "container-fluid clearfix" }, [
          _c(
            "span",
            {
              staticClass:
                "text-muted text-center text-sm-left d-block d-sm-inline-block"
            },
            [
              _vm._v(
                "Copyright " +
                  _vm._s(new Date().getFullYear()) +
                  " Issuer Pixel"
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass:
                "float-none float-sm-right d-block mt-1 mt-sm-0 text-center"
            },
            [
              _c(
                "router-link",
                {
                  staticClass: "footer-bottom-text",
                  attrs: { to: "/termsofservice", target: "_blank" }
                },
                [_vm._v("Term of Service")]
              ),
              _vm._v(" "),
              _c("span", { staticClass: "mx-1" }, [_vm._v("|")]),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "footer-bottom-text",
                  attrs: { to: "/privacypolicy", target: "_blank" }
                },
                [_vm._v("Privacy Policy")]
              )
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppHeader.vue?vue&type=template&id=f75e7388&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/partials/AppHeader.vue?vue&type=template&id=f75e7388&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
        "b-navbar",
        {
          staticClass:
            "navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row",
          attrs: { id: "template-header", toggleable: "md" }
        },
        [
          _c(
            "div",
            {
              staticClass:
                "text-center navbar-brand-wrapper d-flex align-items-top justify-content-center"
            },
            [
              _c(
                "router-link",
                {
                  staticClass:
                    "navbar-brand brand-logo logo dashboard-logo-img",
                  attrs: { to: { name: "Dashboard" } }
                },
                [
                  _c("img", {
                    staticClass: "img-fluid",
                    attrs: { src: "/images/issuerpixel_dashboard.png", alt: "" }
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "navbar-brand brand-logo-mini",
                  attrs: { to: "/" }
                },
                [
                  _c("img", {
                    attrs: { src: "/images/issuerpixel_globe.png", alt: "logo" }
                  })
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "navbar-menu-wrapper d-flex align-items-center ml-auto ml-lg-0"
            },
            [
              _c(
                "button",
                {
                  staticClass:
                    "navbar-toggler navbar-toggler align-self-center",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.collapedSidebar()
                    }
                  }
                },
                [
                  _c("i", {
                    staticClass: "fa",
                    class: {
                      "fa-arrow-left": !_vm.isSidebarCollapse,
                      "fa-arrow-right": _vm.isSidebarCollapse
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "m-auto pl-4 header-bulletin fs-14" },
                [
                  _vm._l(_vm.bulletins, function(bulletin, index) {
                    return [
                      _c(
                        "router-link",
                        {
                          staticClass: "blue-text-color",
                          attrs: {
                            to: { name: "Bulletins", params: { index: index } }
                          }
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(bulletin.title) +
                              "\n                        "
                          )
                        ]
                      ),
                      _vm._v(
                        "\n                        . " +
                          _vm._s(bulletin.createdAt) +
                          "\n                        "
                      ),
                      _vm.bulletins.length != index + 1
                        ? [_vm._v("|")]
                        : _vm._e()
                    ]
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "b-navbar-nav",
                { staticClass: "navbar-nav-right ml-auto" },
                [
                  _c(
                    "div",
                    { staticClass: "search-form d-none d-md-block text-right" },
                    [
                      _vm.isAdminLoggedIn
                        ? _c(
                            "a",
                            {
                              staticClass:
                                "mr-3 btn dashboard-btn-upload w-100",
                              attrs: { href: "javascript:;" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.backToAdmin.apply(null, arguments)
                                }
                              }
                            },
                            [_vm._v("Back to admin")]
                          )
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "text-theme-dark-blue font-weight-bold" },
                    [_vm._v("Beta")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-nav-item-dropdown",
                    {
                      staticClass: "preview-list message-dropdown",
                      attrs: { right: "" }
                    },
                    [
                      _c("template", { slot: "button-content" }, [
                        _c("div", { staticClass: "nav-link count-indicator" }, [
                          _c("i", { staticClass: "mdi mdi-comment-outline" }),
                          _vm._v(" "),
                          _vm.unreadMessage
                            ? _c("span", { staticClass: "count bg-success" }, [
                                _vm._v(_vm._s(_vm.unreadMessage))
                              ])
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        { staticClass: "preview-item py-2 px-0 border-bottom" },
                        [
                          _c(
                            "p",
                            {
                              staticClass:
                                "mb-0 font-weight-medium float-left mr-1"
                            },
                            [
                              _vm._v(
                                "You have " +
                                  _vm._s(_vm.unreadMessageText) +
                                  " new messages "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm.totalMessages
                            ? _c(
                                "span",
                                {
                                  staticClass:
                                    "badge badge-pill badge-primary ml-auto"
                                },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "text-white",
                                      attrs: {
                                        to: {
                                          name: "Messages",
                                          params: { index: 0 }
                                        }
                                      },
                                      nativeOn: {
                                        click: function($event) {
                                          return _vm.markAllMessageAsRead.apply(
                                            null,
                                            arguments
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v("View All")]
                                  )
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.unreadMessage
                            ? _c(
                                "span",
                                {
                                  staticClass:
                                    "badge badge-pill badge-secondary ml-1",
                                  on: { click: _vm.markAllMessageAsRead }
                                },
                                [_vm._v("Mark all as read")]
                              )
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.messages, function(message, index) {
                        return _c(
                          "b-dropdown-item",
                          {
                            key: "message-" + message.id,
                            staticClass: "preview-item",
                            attrs: {
                              active: message.activeStatus,
                              "link-class": message.style
                            }
                          },
                          [
                            _c("div", { staticClass: "preview-thumbnail" }, [
                              _c("img", {
                                staticClass: "img-sm profile-pic",
                                attrs: {
                                  src: message.companyPhoto,
                                  alt: "image"
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "preview-item-content flex-grow py-2"
                              },
                              [
                                _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to: {
                                        name: "Messages",
                                        params: { index: index }
                                      }
                                    },
                                    nativeOn: {
                                      click: function($event) {
                                        return _vm.updateReadStatus(index)
                                      }
                                    }
                                  },
                                  [
                                    _c("span", { staticClass: "d-flex" }, [
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "preview-subject ellipsis font-weight-medium text-dark sender-name"
                                        },
                                        [_vm._v(_vm._s(message.sender.name))]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "p",
                                        {
                                          staticClass:
                                            "font-weight-light small-text message-time"
                                        },
                                        [_vm._v(_vm._s(message.createdAt))]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "p",
                                      {
                                        staticClass:
                                          "font-weight-light small-text warp-text-title"
                                      },
                                      [_vm._v(_vm._s(message.message))]
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ]
                        )
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "b-nav-item-dropdown",
                    {
                      staticClass: "preview-list notification-dropdown",
                      attrs: { right: "" }
                    },
                    [
                      _c("template", { slot: "button-content" }, [
                        _c("div", { staticClass: "nav-link count-indicator" }, [
                          _c("i", { staticClass: "mdi mdi-bell-outline" }),
                          _vm._v(" "),
                          _vm.unreadCount
                            ? _c("span", { staticClass: "count" }, [
                                _vm._v(_vm._s(_vm.unreadCount))
                              ])
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        { staticClass: "preview-item py-2 px-0 border-bottom" },
                        [
                          _c(
                            "p",
                            {
                              staticClass: "mb-0 font-weight-medium float-left"
                            },
                            [
                              _vm._v(
                                "You have " +
                                  _vm._s(_vm.unreadText) +
                                  " new notifications "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _vm.unreadCount
                            ? _c(
                                "span",
                                {
                                  staticClass:
                                    "badge badge-pill badge-primary ml-1",
                                  on: { click: _vm.markAllAsRead }
                                },
                                [_vm._v("Mark all as read")]
                              )
                            : _vm._e()
                        ]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.notifications, function(notification, index) {
                        return _c(
                          "b-dropdown-item",
                          {
                            key: notification.id,
                            staticClass: "preview-item",
                            attrs: {
                              active: notification.activeStatus,
                              "link-class": notification.style
                            }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "preview-item-content flex-grow py-2"
                              },
                              [
                                _c(
                                  "h6",
                                  {
                                    staticClass:
                                      "preview-subject font-weight-normal text-dark mb-1"
                                  },
                                  [_vm._v(_vm._s(notification.data.message))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "font-weight-light small-text mb-0"
                                  },
                                  [_vm._v(_vm._s(notification.createdAt))]
                                )
                              ]
                            )
                          ]
                        )
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown",
                    {
                      staticClass:
                        "dashboard-btn-upload d-none d-sm-inline-block",
                      attrs: {
                        size: "md",
                        variant: "none",
                        "toggle-class": "text-decoration-none px-3 py-2",
                        "no-caret": ""
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "button-content",
                          fn: function() {
                            return [
                              _c("i", {
                                staticClass: "fas fa-cloud-upload-alt pr-2"
                              }),
                              _vm._v(
                                "\n                            Upload Content\n                        "
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        { attrs: { to: { name: "videoQuestionnaire" } } },
                        [
                          _c("i", { staticClass: "fa fa-video pr-1" }),
                          _vm._v("  Upload Video")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        { attrs: { to: { name: "audioQuestionnaire" } } },
                        [
                          _c("i", { staticClass: "fa fa-headphones-alt pr-1" }),
                          _vm._v("  Upload Audio")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-nav-item-dropdown",
                    {
                      staticClass: "preview-list user-dropdown",
                      attrs: { right: "" }
                    },
                    [
                      _c("template", { slot: "button-content" }, [
                        _c("div", { staticClass: "align-items-center" }, [
                          _c("img", {
                            staticClass: "img-xs rounded-circle",
                            attrs: {
                              src: _vm.profileUpdatedData
                                ? _vm.profileUpdatedData.company_image
                                : _vm.companyImage,
                              alt: _vm.username
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "p",
                            {
                              staticClass:
                                "mb-0 text-center text-theme-dark-blue font-weight-bold"
                            },
                            [_vm._v(_vm._s(_vm.username))]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        {
                          attrs: {
                            to: { name: "CompanyQuestionnairesDetails" }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "dropdown-header text-center w-100"
                            },
                            [
                              _c("img", {
                                staticClass: "img-md rounded-circle",
                                attrs: {
                                  src: _vm.profileUpdatedData
                                    ? _vm.profileUpdatedData.company_image
                                    : _vm.companyImage,
                                  alt: _vm.username
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass: "mb-1 mt-3 font-weight-semibold"
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.profileUpdatedData
                                        ? _vm.profileUpdatedData.company
                                        : _vm.company
                                    )
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "p",
                                {
                                  staticClass:
                                    "font-weight-light text-muted mb-0"
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.profileUpdatedData
                                        ? _vm.profileUpdatedData.email
                                        : _vm.email
                                    )
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        { attrs: { to: { name: "Settings" } } },
                        [
                          _c("i", {
                            staticClass:
                              "mdi mdi-settings-outline user-dropdown-icon mr-1"
                          }),
                          _vm._v(
                            "\n                             Settings\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        {
                          attrs: { href: "javascript:;" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.showSupportModal.apply(null, arguments)
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass:
                              "fas fa-exclamation-circle user-dropdown-icon mr-1"
                          }),
                          _vm._v(" Help and Support\n                        ")
                        ]
                      ),
                      _vm._v(" "),
                      _vm.isLoggedIn
                        ? _c(
                            "b-dropdown-item",
                            {
                              attrs: { href: "javascript:;" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.logout.apply(null, arguments)
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass:
                                  "mdi mdi-logout user-dropdown-icon mr-1"
                              }),
                              _vm._v("Logout\n                        ")
                            ]
                          )
                        : _vm._e()
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "navbar-toggler navbar-toggler-right align-self-center",
                  attrs: { type: "button" },
                  on: {
                    click: function($event) {
                      return _vm.collapedMobileSidebar()
                    }
                  }
                },
                [
                  _c("i", {
                    staticClass: "fa",
                    class: {
                      "fa-arrow-left": !_vm.isSidebarCollapse,
                      "fa-arrow-right": _vm.isSidebarCollapse
                    }
                  })
                ]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "support-modal",
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
                        _vm._v("Help and Support")
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "support-modal-close close float-right",
                          on: { click: _vm.closeSupportModal }
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
          _c("HelpAndSupport", {
            on: { helpAndSupportSuccess: _vm.closeSupportModal }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("loader", { attrs: { "is-visible": _vm.isLoading } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppSidebar.vue?vue&type=template&id=ad4f3986&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/partials/AppSidebar.vue?vue&type=template&id=ad4f3986&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
      _c("section", { staticClass: "app-sidebar" }, [
        _c(
          "nav",
          {
            staticClass: "sidebar sidebar-offcanvas",
            attrs: { id: "sidebar" }
          },
          [
            _c("ul", { staticClass: "nav" }, [
              _c(
                "li",
                { staticClass: "nav-item mt-4" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      class:
                        _vm.currentPage.match("Dashboard") ||
                        _vm.currentPage.match("Bulletins")
                          ? _vm.activeClass
                          : "",
                      attrs: { to: { name: "Dashboard" } }
                    },
                    [
                      _c("i", {
                        staticClass: "menu-icon typcn typcn-home-outline"
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "menu-title" }, [
                        _vm._v("Dashboard")
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.companySlugName == _vm.currentPageSlug
                ? _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          directives: [
                            {
                              name: "b-toggle",
                              rawName: "v-b-toggle",
                              value: "company-profile",
                              expression: "'company-profile'"
                            }
                          ],
                          staticClass: "nav-link",
                          class:
                            _vm.currentPage.match("CompanyDetails") ||
                            _vm.currentPage.match(
                              "CompanyQuestionnairesDetails"
                            )
                              ? "active sub-menu-area-expanded"
                              : "",
                          attrs: {
                            to: "/company/" + _vm.companySlugName,
                            "data-toggle": "collapse",
                            "aria-expanded":
                              _vm.currentPage.match("CompanyDetails") ||
                              _vm.currentPage.match(
                                "CompanyQuestionnairesDetails"
                              )
                                ? "true"
                                : "false"
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "menu-icon mdi mdi-newspaper"
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "menu-title" }, [
                            _vm._v("Company Profile")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "menu-arrow" })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-collapse",
                        {
                          class:
                            _vm.currentPage.match("CompanyDetails") ||
                            _vm.currentPage.match(
                              "CompanyQuestionnairesDetails"
                            )
                              ? "show d-block"
                              : "d-none",
                          attrs: {
                            id: "company-profile",
                            accordion: "my-accordion",
                            role: "tabpanel"
                          }
                        },
                        [
                          _c(
                            "ul",
                            { staticClass: "nav flex-column sub-menu" },
                            [
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link",
                                      class: _vm.currentPage.match(
                                        "CompanyDetails"
                                      )
                                        ? "sub-menu-active"
                                        : "",
                                      attrs: {
                                        to: "/company/" + _vm.companySlugName
                                      }
                                    },
                                    [_vm._v("Profile Page")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link",
                                      class: _vm.currentPage.match(
                                        "CompanyQuestionnairesDetails"
                                      )
                                        ? "sub-menu-active"
                                        : "",
                                      attrs: {
                                        to: {
                                          name: "CompanyQuestionnairesDetails"
                                        }
                                      }
                                    },
                                    [_vm._v("Manage Profile")]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ]
                      )
                    ],
                    1
                  )
                : _c(
                    "li",
                    { staticClass: "nav-item" },
                    [
                      _c(
                        "router-link",
                        {
                          directives: [
                            {
                              name: "b-toggle",
                              rawName: "v-b-toggle",
                              value: "company-profile",
                              expression: "'company-profile'"
                            }
                          ],
                          staticClass: "nav-link",
                          class:
                            _vm.currentPage.match("CompanyDetails") ||
                            _vm.currentPage.match(
                              "CompanyQuestionnairesDetails"
                            )
                              ? "sub-menu-area-expanded"
                              : "",
                          attrs: {
                            to: "/company/" + _vm.companySlugName,
                            "data-toggle": "collapse",
                            "aria-expanded":
                              _vm.currentPage.match("CompanyDetails") ||
                              _vm.currentPage.match(
                                "CompanyQuestionnairesDetails"
                              )
                                ? "true"
                                : "false"
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "menu-icon mdi mdi-newspaper"
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "menu-title" }, [
                            _vm._v("Company Profile")
                          ]),
                          _vm._v(" "),
                          _c("i", { staticClass: "menu-arrow" })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-collapse",
                        {
                          class:
                            _vm.currentPage.match("CompanyDetails") ||
                            _vm.currentPage.match(
                              "CompanyQuestionnairesDetails"
                            )
                              ? "show"
                              : "d-none",
                          attrs: {
                            id: "company-profile",
                            accordion: "my-accordion",
                            role: "tabpanel"
                          }
                        },
                        [
                          _c(
                            "ul",
                            { staticClass: "nav flex-column sub-menu" },
                            [
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link",
                                      class: _vm.currentPage.match(
                                        "CompanyDetails"
                                      )
                                        ? "sub-menu-active"
                                        : "",
                                      attrs: {
                                        to: "/company/" + _vm.companySlugName
                                      }
                                    },
                                    [_vm._v("Profile Page")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                { staticClass: "nav-item" },
                                [
                                  _c(
                                    "router-link",
                                    {
                                      staticClass: "nav-link",
                                      class: _vm.currentPage.match(
                                        "CompanyQuestionnairesDetails"
                                      )
                                        ? "sub-menu-active"
                                        : "",
                                      attrs: {
                                        to: {
                                          name: "CompanyQuestionnairesDetails"
                                        }
                                      }
                                    },
                                    [_vm._v("Manage Profile")]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ]
                      )
                    ],
                    1
                  ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      class:
                        _vm.currentPage === "NewScreener"
                          ? _vm.activeClass
                          : "",
                      attrs: { to: { name: "NewScreener" } }
                    },
                    [
                      _c("i", {
                        staticClass: "menu-icon typcn typcn-device-desktop"
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "menu-title" }, [
                        _vm._v("Video/Audio Database")
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      class:
                        _vm.currentPage === "videoQuestionnaire"
                          ? _vm.activeClass
                          : "",
                      attrs: { to: { name: "videoQuestionnaire" } }
                    },
                    [
                      _c("i", { staticClass: "menu-icon fa fa-video" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "menu-title" }, [
                        _vm._v("Upload Video")
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      class:
                        _vm.currentPage === "audioQuestionnaire"
                          ? _vm.activeClass
                          : "",
                      attrs: { to: { name: "audioQuestionnaire" } }
                    },
                    [
                      _c("i", {
                        staticClass: "menu-icon fa fa-headphones-alt"
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "menu-title" }, [
                        _vm._v("Upload Audio")
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      class:
                        _vm.currentPage === "fileDetectionUpload"
                          ? _vm.activeClass
                          : "",
                      attrs: { to: { name: "fileDetectionUpload" } }
                    },
                    [
                      _c("i", {
                        staticClass: "menu-icon fa fa-headphones-alt"
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "menu-title" }, [
                        _vm._v("File Detection Upload")
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      class: _vm.currentPage.match("Content")
                        ? _vm.activeClass
                        : "",
                      attrs: { to: { name: "Content" } }
                    },
                    [
                      _c("i", { staticClass: "menu-icon far fa-building" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "menu-title" }, [
                        _vm._v("Content Library")
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      class: _vm.currentPage.match("Chat")
                        ? _vm.activeClass
                        : "",
                      attrs: { to: { name: "Chat" } }
                    },
                    [
                      _c("i", { staticClass: "menu-icon far fa-comment-alt" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "menu-title" }, [
                        _vm._v("Chat")
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      class: _vm.currentPage.match("Settings")
                        ? _vm.activeClass
                        : "",
                      attrs: { to: { name: "Settings" } }
                    },
                    [
                      _c("i", {
                        staticClass: "menu-icon mdi mdi-settings-outline"
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "menu-title" }, [
                        _vm._v("Settings")
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      directives: [
                        {
                          name: "b-toggle",
                          rawName: "v-b-toggle",
                          value: "personalized-news",
                          expression: "'personalized-news'"
                        }
                      ],
                      staticClass: "nav-link",
                      class:
                        _vm.currentPage.match("PersonalizedNewsIndustry") ||
                        _vm.currentPage.match("PersonalizedNewsNode")
                          ? "active sub-menu-area-expanded"
                          : "",
                      attrs: {
                        "data-toggle": "collapse",
                        to: { name: "PersonalizedNewsIndustry" },
                        "aria-expanded":
                          _vm.currentPage.match("PersonalizedNewsIndustry") ||
                          _vm.currentPage.match("PersonalizedNewsNode")
                            ? "true"
                            : "false"
                      }
                    },
                    [
                      _c("i", { staticClass: "menu-icon mdi mdi-newspaper" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "menu-title" }, [
                        _vm._v("Personalized News")
                      ]),
                      _vm._v(" "),
                      _c("i", { staticClass: "menu-arrow" })
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-collapse",
                    {
                      class:
                        _vm.currentPage.match("PersonalizedNewsIndustry") ||
                        _vm.currentPage.match("PersonalizedNewsNode")
                          ? "show d-block"
                          : "d-none",
                      attrs: {
                        id: "personalized-news",
                        accordion: "my-accordion",
                        role: "tabpanel"
                      }
                    },
                    [
                      _c("ul", { staticClass: "nav flex-column sub-menu" }, [
                        _c(
                          "li",
                          { staticClass: "nav-item" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "nav-link",
                                class: _vm.currentPage.match(
                                  "PersonalizedNewsIndustry"
                                )
                                  ? "sub-menu-active"
                                  : "",
                                attrs: {
                                  to: { name: "PersonalizedNewsIndustry" }
                                }
                              },
                              [_vm._v("Industry + Location")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          { staticClass: "nav-item" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "nav-link",
                                class: _vm.currentPage.match(
                                  "PersonalizedNewsNode"
                                )
                                  ? "sub-menu-active"
                                  : "",
                                attrs: { to: { name: "PersonalizedNewsNode" } }
                              },
                              [_vm._v("Node + Location")]
                            )
                          ],
                          1
                        )
                      ])
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      class: _vm.currentPage.match("Analytics")
                        ? _vm.activeClass
                        : "",
                      attrs: { to: { name: "Analytics" } }
                    },
                    [
                      _c("i", {
                        staticClass: "menu-icon mdi mdi-presentation-play"
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "menu-title" }, [
                        _vm._v("Analytics")
                      ])
                    ]
                  )
                ],
                1
              )
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "support-modal",
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
                        _vm._v("Help and Support")
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "support-modal-close close float-right",
                          on: { click: _vm.closeSupportModal }
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
          _c("HelpAndSupport", {
            on: { helpAndSupportSuccess: _vm.closeSupportModal }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("loader", { attrs: { "is-visible": _vm.isLoading } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mainView.vue?vue&type=template&id=2540b0fd&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/mainView.vue?vue&type=template&id=2540b0fd&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
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
      _vm.isLoggedIn
        ? [
            _c("section", { staticClass: "main-view" }, [
              _c(
                "div",
                { staticClass: "container-scroller" },
                [
                  _c("app-header", {
                    attrs: {
                      profileUpdatedData: _vm.profileUpdatedData,
                      resumble: _vm.resumble
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "container-fluid page-body-wrapper" },
                    [
                      _c("app-sidebar", {
                        attrs: {
                          profileUpdatedData: _vm.profileUpdatedData,
                          audioStep: _vm.audioStep,
                          audioProgressStep: _vm.audioProgressStep,
                          videoStep: _vm.videoStep,
                          videoProgressStep: _vm.videoProgressStep
                        },
                        on: { updateProfile: _vm.updateProfile }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "main-panel" },
                        [
                          _c(
                            "div",
                            { staticClass: "content-wrapper" },
                            [
                              _c("router-view", {
                                key: _vm.viewKey,
                                ref: "nestedComponent",
                                attrs: {
                                  resumble: _vm.resumble,
                                  resumbleUploadCompleted:
                                    _vm.resumbleUploadCompleted
                                },
                                on: {
                                  logout: _vm.logout,
                                  updateProfile: _vm.updateProfile,
                                  updateViewKey: _vm.updateViewKey,
                                  updateAudioUploadStep:
                                    _vm.updateAudioUploadStep,
                                  updateAudioUploadProgressStep:
                                    _vm.updateAudioUploadProgressStep,
                                  updateVideoUploadStep:
                                    _vm.updateVideoUploadStep,
                                  updateVideoUploadProgressStep:
                                    _vm.updateVideoUploadProgressStep,
                                  setVideoUploaderState:
                                    _vm.setVideoUploaderState
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.isUploadingModalVisible
                            ? _c("VideoUploaderProgressbar", {
                                attrs: { resumble: _vm.resumble },
                                on: {
                                  close: _vm.closeModal,
                                  resumbleUploadCompleted:
                                    _vm.resumbleUploadCompletedFn
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _c("app-footer")
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
          ]
        : [
            _c("Navigation"),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "content-wrapper content-with-navigation" },
              [_c("router-view")],
              1
            )
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/VideoUploaderProgressbar.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/VideoUploaderProgressbar.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VideoUploaderProgressbar_vue_vue_type_template_id_0a03c3e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoUploaderProgressbar.vue?vue&type=template&id=0a03c3e8&scoped=true& */ "./resources/js/components/VideoUploaderProgressbar.vue?vue&type=template&id=0a03c3e8&scoped=true&");
/* harmony import */ var _VideoUploaderProgressbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoUploaderProgressbar.vue?vue&type=script&lang=js& */ "./resources/js/components/VideoUploaderProgressbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VideoUploaderProgressbar_vue_vue_type_style_index_0_id_0a03c3e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VideoUploaderProgressbar.vue?vue&type=style&index=0&id=0a03c3e8&scoped=true&lang=css& */ "./resources/js/components/VideoUploaderProgressbar.vue?vue&type=style&index=0&id=0a03c3e8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VideoUploaderProgressbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VideoUploaderProgressbar_vue_vue_type_template_id_0a03c3e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VideoUploaderProgressbar_vue_vue_type_template_id_0a03c3e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0a03c3e8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/VideoUploaderProgressbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/VideoUploaderProgressbar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/VideoUploaderProgressbar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoUploaderProgressbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./VideoUploaderProgressbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoUploaderProgressbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoUploaderProgressbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/VideoUploaderProgressbar.vue?vue&type=style&index=0&id=0a03c3e8&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/VideoUploaderProgressbar.vue?vue&type=style&index=0&id=0a03c3e8&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoUploaderProgressbar_vue_vue_type_style_index_0_id_0a03c3e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./VideoUploaderProgressbar.vue?vue&type=style&index=0&id=0a03c3e8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoUploaderProgressbar.vue?vue&type=style&index=0&id=0a03c3e8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoUploaderProgressbar_vue_vue_type_style_index_0_id_0a03c3e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoUploaderProgressbar_vue_vue_type_style_index_0_id_0a03c3e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoUploaderProgressbar_vue_vue_type_style_index_0_id_0a03c3e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoUploaderProgressbar_vue_vue_type_style_index_0_id_0a03c3e8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/VideoUploaderProgressbar.vue?vue&type=template&id=0a03c3e8&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/VideoUploaderProgressbar.vue?vue&type=template&id=0a03c3e8&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoUploaderProgressbar_vue_vue_type_template_id_0a03c3e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./VideoUploaderProgressbar.vue?vue&type=template&id=0a03c3e8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/VideoUploaderProgressbar.vue?vue&type=template&id=0a03c3e8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoUploaderProgressbar_vue_vue_type_template_id_0a03c3e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoUploaderProgressbar_vue_vue_type_template_id_0a03c3e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/partials/AppFooter.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/partials/AppFooter.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppFooter_vue_vue_type_template_id_631e624a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=template&id=631e624a&scoped=true& */ "./resources/js/components/partials/AppFooter.vue?vue&type=template&id=631e624a&scoped=true&");
/* harmony import */ var _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=script&lang=js& */ "./resources/js/components/partials/AppFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AppFooter_vue_vue_type_style_index_0_id_631e624a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=style&index=0&id=631e624a&scoped=true&lang=scss& */ "./resources/js/components/partials/AppFooter.vue?vue&type=style&index=0&id=631e624a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppFooter_vue_vue_type_template_id_631e624a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppFooter_vue_vue_type_template_id_631e624a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "631e624a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/partials/AppFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/partials/AppFooter.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/partials/AppFooter.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/partials/AppFooter.vue?vue&type=style&index=0&id=631e624a&scoped=true&lang=scss&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/partials/AppFooter.vue?vue&type=style&index=0&id=631e624a&scoped=true&lang=scss& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_631e624a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=style&index=0&id=631e624a&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppFooter.vue?vue&type=style&index=0&id=631e624a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_631e624a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_631e624a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_631e624a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_style_index_0_id_631e624a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/partials/AppFooter.vue?vue&type=template&id=631e624a&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/partials/AppFooter.vue?vue&type=template&id=631e624a&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_631e624a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=template&id=631e624a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppFooter.vue?vue&type=template&id=631e624a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_631e624a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_631e624a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/partials/AppHeader.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/partials/AppHeader.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppHeader_vue_vue_type_template_id_f75e7388_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppHeader.vue?vue&type=template&id=f75e7388&scoped=true& */ "./resources/js/components/partials/AppHeader.vue?vue&type=template&id=f75e7388&scoped=true&");
/* harmony import */ var _AppHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppHeader.vue?vue&type=script&lang=js& */ "./resources/js/components/partials/AppHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AppHeader_vue_vue_type_style_index_0_id_f75e7388_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppHeader.vue?vue&type=style&index=0&id=f75e7388&scoped=true&lang=scss& */ "./resources/js/components/partials/AppHeader.vue?vue&type=style&index=0&id=f75e7388&scoped=true&lang=scss&");
/* harmony import */ var _AppHeader_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppHeader.vue?vue&type=style&index=1&lang=css& */ "./resources/js/components/partials/AppHeader.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _AppHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppHeader_vue_vue_type_template_id_f75e7388_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppHeader_vue_vue_type_template_id_f75e7388_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f75e7388",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/partials/AppHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/partials/AppHeader.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/partials/AppHeader.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/partials/AppHeader.vue?vue&type=style&index=0&id=f75e7388&scoped=true&lang=scss&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/partials/AppHeader.vue?vue&type=style&index=0&id=f75e7388&scoped=true&lang=scss& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_f75e7388_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppHeader.vue?vue&type=style&index=0&id=f75e7388&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppHeader.vue?vue&type=style&index=0&id=f75e7388&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_f75e7388_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_f75e7388_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_f75e7388_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_0_id_f75e7388_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/partials/AppHeader.vue?vue&type=style&index=1&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/partials/AppHeader.vue?vue&type=style&index=1&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppHeader.vue?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppHeader.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/partials/AppHeader.vue?vue&type=template&id=f75e7388&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/partials/AppHeader.vue?vue&type=template&id=f75e7388&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_template_id_f75e7388_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppHeader.vue?vue&type=template&id=f75e7388&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppHeader.vue?vue&type=template&id=f75e7388&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_template_id_f75e7388_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppHeader_vue_vue_type_template_id_f75e7388_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/partials/AppSidebar.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/partials/AppSidebar.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppSidebar_vue_vue_type_template_id_ad4f3986_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppSidebar.vue?vue&type=template&id=ad4f3986&scoped=true& */ "./resources/js/components/partials/AppSidebar.vue?vue&type=template&id=ad4f3986&scoped=true&");
/* harmony import */ var _AppSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppSidebar.vue?vue&type=script&lang=js& */ "./resources/js/components/partials/AppSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AppSidebar_vue_vue_type_style_index_0_id_ad4f3986_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppSidebar.vue?vue&type=style&index=0&id=ad4f3986&scoped=true&lang=scss& */ "./resources/js/components/partials/AppSidebar.vue?vue&type=style&index=0&id=ad4f3986&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AppSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppSidebar_vue_vue_type_template_id_ad4f3986_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppSidebar_vue_vue_type_template_id_ad4f3986_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ad4f3986",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/partials/AppSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/partials/AppSidebar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/partials/AppSidebar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/partials/AppSidebar.vue?vue&type=style&index=0&id=ad4f3986&scoped=true&lang=scss&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/partials/AppSidebar.vue?vue&type=style&index=0&id=ad4f3986&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_style_index_0_id_ad4f3986_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppSidebar.vue?vue&type=style&index=0&id=ad4f3986&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppSidebar.vue?vue&type=style&index=0&id=ad4f3986&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_style_index_0_id_ad4f3986_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_style_index_0_id_ad4f3986_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_style_index_0_id_ad4f3986_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_style_index_0_id_ad4f3986_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/partials/AppSidebar.vue?vue&type=template&id=ad4f3986&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/partials/AppSidebar.vue?vue&type=template&id=ad4f3986&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_template_id_ad4f3986_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AppSidebar.vue?vue&type=template&id=ad4f3986&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/AppSidebar.vue?vue&type=template&id=ad4f3986&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_template_id_ad4f3986_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppSidebar_vue_vue_type_template_id_ad4f3986_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/mainView.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/mainView.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mainView_vue_vue_type_template_id_2540b0fd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainView.vue?vue&type=template&id=2540b0fd&scoped=true& */ "./resources/js/views/mainView.vue?vue&type=template&id=2540b0fd&scoped=true&");
/* harmony import */ var _mainView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainView.vue?vue&type=script&lang=js& */ "./resources/js/views/mainView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _mainView_vue_vue_type_style_index_0_id_2540b0fd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainView.vue?vue&type=style&index=0&id=2540b0fd&scoped=true&lang=css& */ "./resources/js/views/mainView.vue?vue&type=style&index=0&id=2540b0fd&scoped=true&lang=css&");
/* harmony import */ var _mainView_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainView.vue?vue&type=style&index=1&lang=css& */ "./resources/js/views/mainView.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _mainView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mainView_vue_vue_type_template_id_2540b0fd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mainView_vue_vue_type_template_id_2540b0fd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2540b0fd",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/mainView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/mainView.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/mainView.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mainView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./mainView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mainView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mainView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/mainView.vue?vue&type=style&index=0&id=2540b0fd&scoped=true&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/mainView.vue?vue&type=style&index=0&id=2540b0fd&scoped=true&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mainView_vue_vue_type_style_index_0_id_2540b0fd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./mainView.vue?vue&type=style&index=0&id=2540b0fd&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mainView.vue?vue&type=style&index=0&id=2540b0fd&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mainView_vue_vue_type_style_index_0_id_2540b0fd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mainView_vue_vue_type_style_index_0_id_2540b0fd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mainView_vue_vue_type_style_index_0_id_2540b0fd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mainView_vue_vue_type_style_index_0_id_2540b0fd_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/mainView.vue?vue&type=style&index=1&lang=css&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/mainView.vue?vue&type=style&index=1&lang=css& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mainView_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./mainView.vue?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mainView.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mainView_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mainView_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mainView_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_mainView_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/mainView.vue?vue&type=template&id=2540b0fd&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/mainView.vue?vue&type=template&id=2540b0fd&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mainView_vue_vue_type_template_id_2540b0fd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./mainView.vue?vue&type=template&id=2540b0fd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/mainView.vue?vue&type=template&id=2540b0fd&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mainView_vue_vue_type_template_id_2540b0fd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mainView_vue_vue_type_template_id_2540b0fd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);