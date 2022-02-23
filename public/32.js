(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Chat.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Chat.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_ChatMessages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apis/ChatMessages */ "./resources/js/apis/ChatMessages.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apis_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apis/Content */ "./resources/js/apis/Content.js");
/* harmony import */ var _components_CompanyNodeCollapses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CompanyNodeCollapses */ "./resources/js/components/CompanyNodeCollapses.vue");
/* harmony import */ var v_emoji_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! v-emoji-picker */ "./node_modules/v-emoji-picker/lib/v-emoji-picker.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





 // This variable will hold the reference to
// document's click handler

var handleOutsideClick;
vue__WEBPACK_IMPORTED_MODULE_0___default.a.directive('closable', {
  bind: function bind(el, binding, vnode) {
    // Here's the click/touchstart handler
    // (it is registered below)
    handleOutsideClick = function handleOutsideClick(e) {
      e.stopPropagation(); // Get the handler method name and the exclude array
      // from the object used in v-closable

      var _binding$value = binding.value,
          handler = _binding$value.handler,
          exclude = _binding$value.exclude; // This variable indicates if the clicked element is excluded

      var clickedOnExcludedEl = false;
      exclude.forEach(function (refName) {
        // We only run this code if we haven't detected
        // any excluded element yet
        if (!clickedOnExcludedEl) {
          // Get the element using the reference name
          var excludedEl = vnode.context.$refs[refName]; // See if this excluded element
          // is the same element the user just clicked on

          clickedOnExcludedEl = excludedEl.contains(e.target);
        }
      }); // We check to see if the clicked element is not
      // the dialog element and not excluded

      if (!el.contains(e.target) && !clickedOnExcludedEl) {
        // If the clicked element is outside the dialog
        // and not the button, then call the outside-click handler
        // from the same component this directive is used in
        vnode.context[handler]();
      }
    }; // Register click/touchstart event listeners on the whole page


    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
  },
  unbind: function unbind() {
    // If the element that has v-closable is removed, then
    // unbind click/touchstart listeners from the whole page
    document.removeEventListener('click', handleOutsideClick);
    document.removeEventListener('touchstart', handleOutsideClick);
  }
});
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // isLoading: false,
      senderIcon: "",
      senderName: "",
      senderAddress: "",
      senderPhoneNumber: "",
      senderEntityType: "",
      senderCeo: "",
      senderCfo: "",
      senderRecentValuation: "",
      senderNumberOfEmployee: "",
      senderNumberOfShareholder: "",
      senderBaseCurrency: "",
      senderConglomerate: "",
      senderConductedFinancing: "",
      senderResearchCoverage: "",
      senderAuditedFinancials: "",
      senderIntellectualProperty: [],
      senderPublicPrivateType: "",
      senderCompanySocialMediaPlatform: [],
      //Receiver info
      icon: "",
      receiverName: "",
      address: "",
      phoneNumber: "",
      entityType: "",
      ceo: "",
      cfo: "",
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
      user_id: null,
      ws_url: null,
      socket: null,
      cBox: null,
      latestChatMessages: [],
      isLoading: false,
      contentLoading: false,
      messageWindowSize: 300,
      storeagePath: localStorage.getItem('storagePath'),
      chatMessageSearch: "",
      chatMessagePagination: {
        'current_page': 1
      },
      memberList: [],
      chatLists: [],
      chatBox: [],
      socketConnected: {
        status: false,
        msg: 'Connecting Please Wait...'
      },
      bArr: {},
      cChat: {},
      messages: [],
      message: '',
      typing: '',
      timeout: '',
      companyImage: '',
      seen: false,
      activeTab: 0,
      senderActiveTab: 0,
      companySlug: '',
      senderCompanySlug: '',
      multipleNodes: [],
      hideCatContainer: false,
      enableEditButton: false,
      receiverHideCatContainer: false,
      receiverMultipleNodes: [],
      memberIds: [],
      contents: [],
      senderHideContent: false,
      receiverContents: [],
      receiverHideContent: false,
      activeUser: '',
      receiverCompanyNotFound: false,
      senderCompanyNotFound: false,
      senderGeneralTabContentLoaded: false,
      senderClassificationTabContentLoaded: false,
      senderContentTabContentLoaded: false,
      receiverGeneralTabContentLoaded: false,
      receiverClassificationTabContentLoaded: false,
      receiverContentTabContentLoaded: false,
      senderGeneralContentLoading: true,
      senderClassificationlContentLoading: true,
      senderContentlContentLoading: true,
      receiverGeneralContentLoading: false,
      receiverClassificationlContentLoading: false,
      receiverContentlContentLoading: false,
      senderContentPagination: {
        'current_page': 1
      },
      receiverContentPagination: {
        'current_page': 1
      },
      firstLoad: true,
      fileUploading: false,
      editMessageAction: false,
      updateMessageId: null,
      showDialog: false
    };
  },
  methods: {
    onClose: function onClose() {
      this.seen = false;
    },
    offEmojiDiv: function offEmojiDiv() {
      this.showDialog = false;
    },
    toogleDialogEmoji: function toogleDialogEmoji() {
      this.showDialog = !this.showDialog;
    },
    onSelectEmoji: function onSelectEmoji(emoji) {
      this.message += emoji.data; // Optional
      // this.toogleDialogEmoji();
    },
    loadTabContent: function loadTabContent(type) {
      var _this = this;

      switch (type) {
        case 'receiverGeneralInfo':
          if (!this.receiverGeneralTabContentLoaded) {
            this.receiverGeneralContentLoading = true;
            _apis_Content__WEBPACK_IMPORTED_MODULE_3__["default"].companyBio(this.companySlug).then(function (response) {
              _this.receiverGeneralContentLoading = false;
              var bioData = response.data.data;
              _this.entityType = bioData.entityType;
              _this.phoneNumber = bioData.phone_number;
              _this.receiverName = bioData.name;

              if (!!bioData.headquarters) {
                var addressOne = !!bioData.headquarters.address.street_address_one ? bioData.headquarters.address.street_address_one + ', ' : '';
                var addressTwo = !!bioData.headquarters.address.street_address_two ? bioData.headquarters.address.street_address_two + ', ' : '';
                var city = !!bioData.headquarters.address.city ? bioData.headquarters.address.city + ', ' : '';
                var state = !!bioData.headquarters.address.states ? bioData.headquarters.address.states.name + ', ' : '';
                var zip = !!bioData.headquarters.address.zip ? bioData.headquarters.address.zip + ', ' : '';
                var country = !!bioData.headquarters.address.country ? bioData.headquarters.address.country.name : '';
                _this.address = addressOne + addressTwo + city + state + zip + country;
              }

              _this.ceo = bioData.ceo != null ? bioData.ceo : '';
              _this.cfo = bioData.cfo != null ? bioData.cfo : '';
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
              _this.icon = !!bioData.icon ? bioData.storage_path + '/company_icon/' + bioData.icon : "/images/image-placeholder-1.png";
            })["catch"](function (error) {
              // console.log(error)
              if (error.response.status === 404) {
                _this.receiverCompanyNotFound = true;
              }
            });
            this.receiverGeneralTabContentLoaded = true;
          }

          this.activeTab = 0;
          break;

        case 'receiverClassifications':
          this.receiverClassificationlContentLoading = true;
          axios.get('/api/company-bio-multiple-node/' + this.companySlug).then(function (response) {
            _this.receiverClassificationlContentLoading = false;
            _this.receiverMultipleNodes = response.data.data;

            if (_this.receiverMultipleNodes.length < 1) {
              _this.receiverHideCatContainer = true;
            } else {
              _this.receiverHideCatContainer = false;
            }
          })["catch"](function (error) {});
          this.activeTab = 1;
          break;

        case 'receiverContent':
          if (!this.receiverContentTabContentLoaded) {
            this.receiverContentlContentLoading = true;
            this.getReceiverContentList();
            this.receiverContentTabContentLoaded = false;
          }

          this.activeTab = 2;
          break;
      }
    },
    senderLoadTabContent: function senderLoadTabContent(type) {
      var _this2 = this;

      switch (type) {
        case 'senderGeneralInfo':
          if (!this.senderGeneralTabContentLoaded) {
            _apis_Content__WEBPACK_IMPORTED_MODULE_3__["default"].companyBio(this.senderCompanySlug).then(function (response) {
              _this2.senderGeneralContentLoading = false;
              var bioData = response.data.data;
              _this2.senderEntityType = bioData.entityType;
              _this2.senderPhoneNumber = bioData.phone_number;
              _this2.senderName = bioData.name;

              if (!!bioData.headquarters) {
                // console.log(bioData.headquarters)
                var senderAddressOne = !!bioData.headquarters.address.street_address_one ? bioData.headquarters.address.street_address_one + ', ' : '';
                var senderAddressTwo = !!bioData.headquarters.address.street_address_two ? bioData.headquarters.address.street_address_two + ', ' : '';
                var senderCity = !!bioData.headquarters.address.city ? bioData.headquarters.address.city + ', ' : '';
                var senderState = !!bioData.headquarters.address.states ? bioData.headquarters.address.states.name + ', ' : '';
                var senderZip = !!bioData.headquarters.address ? bioData.headquarters.address.zip + ', ' : '';
                var senderCountry = !!bioData.headquarters.address.country ? bioData.headquarters.address.country.name : '';
                _this2.senderAddress = senderAddressOne + senderAddressTwo + senderCity + senderState + senderZip + senderCountry;
              }

              _this2.senderCeo = bioData.ceo != null ? bioData.ceo : '';
              _this2.senderCfo = bioData.cfo != null ? bioData.cfo : '';
              _this2.senderNumberOfEmployee = bioData.numberof_employees != null ? bioData.numberof_employees.name : '';
              _this2.senderNumberOfShareholder = bioData.numberof_shareholders != null ? bioData.numberof_shareholders.name : '';
              _this2.senderBaseCurrency = bioData.base_currency != null ? bioData.base_currency.name : '';
              _this2.senderRecentValuation = bioData.recent_valuation != null ? bioData.recent_valuation : '';
              _this2.senderAuditedFinancials = bioData.audited_financials != null ? bioData.audited_financials ? 'Yes' : 'No' : '';
              _this2.senderConglomerate = bioData.conglomerate != null ? bioData.conglomerate ? 'Yes' : 'No' : '';
              _this2.senderConductedFinancing = bioData.conducted_financing_six_month != null ? bioData.conducted_financing_six_month ? 'Yes' : 'No' : '';
              _this2.senderPublicPrivateType = bioData.public_private_type != null ? bioData.public_private_type.name : '';
              _this2.senderIntellectualProperty = bioData.intellectual_property != null ? bioData.intellectual_property : '';
              _this2.senderResearchCoverage = bioData.research_coverage != null ? bioData.research_coverage : '';
              _this2.senderCompanySocialMediaPlatform = bioData.company_social_media_platform != null ? bioData.company_social_media_platform : '';
              _this2.senderIcon = !!bioData.icon ? bioData.storage_path + '/company_icon/' + bioData.icon : "/images/image-placeholder-1.png";
            })["catch"](function (error) {
              // console.log(error)
              _this2.isLoading = false;

              if (error.response.status === 404) {
                _this2.senderCompanyNotFound = true;
              }
            });
            this.senderGeneralTabContentLoaded = true;
          }

          this.senderActiveTab = 0;
          break;

        case 'senderClassifications':
          if (!this.senderClassificationTabContentLoaded) {
            axios.get('/api/company-bio-multiple-node/' + this.senderCompanySlug).then(function (response) {
              _this2.senderClassificationlContentLoading = false;
              _this2.multipleNodes = response.data.data;

              if (_this2.multipleNodes.length < 1) {
                _this2.hideCatContainer = true;
              }
            })["catch"](function (error) {});
            this.senderClassificationTabContentLoaded = true;
          }

          this.senderActiveTab = 1;
          break;

        case 'senderContent':
          if (!this.senderContentTabContentLoaded) {
            this.getSenderContentList();
            this.senderContentTabContentLoaded = true;
          }

          this.senderActiveTab = 2;
          break;
      }
    },
    getReceiverContentList: function getReceiverContentList() {
      var _this3 = this;

      var clearPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (clearPage) {
        this.receiverContentPagination.current_page = 1;
        this.receiverContentlContentLoading = true;
      }

      _apis_Content__WEBPACK_IMPORTED_MODULE_3__["default"].companyContent(this.receiverContentPagination.current_page, this.companySlug).then(function (response) {
        _this3.receiverContentlContentLoading = false;
        _this3.receiverContents = [];
        _this3.receiverContents = response.data.data.data.data;

        if (_this3.receiverContents.length < 1) {
          _this3.receiverHideContent = true;
        } else {
          _this3.receiverHideContent = false;
        }

        _this3.receiverContentPagination = response.data.data.pagination;
      })["catch"](function (error) {});
    },
    getSenderContentList: function getSenderContentList() {
      var _this4 = this;

      var clearPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (clearPage) {
        this.senderContentPagination.current_page = 1;
        this.senderContentlContentLoading = true;
      }

      _apis_Content__WEBPACK_IMPORTED_MODULE_3__["default"].companyContent(this.senderContentPagination.current_page, this.senderCompanySlug).then(function (response) {
        _this4.senderContentlContentLoading = false;
        _this4.isLoading = false;
        _this4.contentLoading = false;
        _this4.contents = [];
        _this4.contents = response.data.data.data.data;

        if (_this4.contents.length < 1) {
          _this4.senderHideContent = true;
        } else {
          _this4.senderHideContent = false;
        }

        _this4.senderContentPagination = response.data.data.pagination;
      })["catch"](function (error) {});
    },
    chat: function chat(userId) {
      var _this5 = this;

      var lastOnline = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var companySlug = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var unreadMessages = arguments.length > 3 ? arguments[3] : undefined;
      this.resetMessageUpdate();

      if (unreadMessages > 0) {
        this.updateUserMessageStatus(userId);
      }

      var chat = {};
      Object.keys(this.chatLists).map(function (key) {
        if (_this5.chatLists[key].id == userId) {
          chat = _this5.chatLists[key];
        }
      });
      this.companySlug = companySlug;
      this.loadTabContent('receiverGeneralInfo');
      this.activeUser = userId;
      this.cChat = chat;
      this.cChat.lastOnline = lastOnline;
      this.socket.emit('getMessages', {
        fromUserId: this.user_id,
        toUserId: this.cChat.id
      });
      this.socket.on('getMessagesResponse', this.getMessagesResponse);
      this.socket.on('addMessageResponse', this.addMessageResponse);
      this.socket.on('typing', this.typingListener);
      this.socket.on('image-uploaded', this.imageuploaded);
      this.socket.on('message-inserted', this.messageInserted);
      this.receiverGeneralTabContentLoaded = false; // if(!this.chatBox.includes(chat.id)){
      //     console.log('if call')
      //     chat.msgCount = 0;
      //     const chatboxObj = Vue.extend(this.cBox);
      //     let b = new chatboxObj({
      //         propsData: {
      //             socket: this.socket,
      //             user_id: this.user_id,
      //             cChat: chat,
      //             chatBoxClose: this.chatBoxClose,
      //             chatBoxMinimize: this.chatBoxMinimize,
      //             WS_URL: this.ws_url
      //         }
      //     }).$mount();
      //     $('body').append(b.$el);
      //     this.bArr[chat.id] = b;
      //     this.chatBox.unshift(chat.id);
      //     $('#msginput-'+chat.id).focus();
      // }
      // else {
      //
      //     console.log('else call')
      //     var index = this.chatBox.indexOf(chat.id);
      //     this.chatBox.splice(index, 1);
      //     this.chatBox.unshift(chat.id);
      //     $('#msginput-'+chat.id).focus();
      // }
      // this.calcChatBoxStyle();
    },
    updateUserMessageStatus: function updateUserMessageStatus(fromUserId) {
      var _this6 = this;

      _apis_ChatMessages__WEBPACK_IMPORTED_MODULE_1__["default"].updateUserMessageStatus(fromUserId).then(function (response) {
        _this6.getChatMessage();
      })["catch"](function (error) {
        // console.log('updateUserMessageStatus error: ');
        // console.log(error);
        toastr.error('Operation failed!');
      });
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
    getChatMessage: function getChatMessage() {
      var _this7 = this;

      if (this.firstLoad) {
        this.contentLoading = true;
        this.firstLoad = false;
      }

      _apis_ChatMessages__WEBPACK_IMPORTED_MODULE_1__["default"].latestMessage(this.chatMessagePagination.current_page, this.chatMessageSearch).then(function (response) {
        _this7.latestChatMessages = response.data.data.latestChatMessages;
        _this7.chatMessagePagination = response.data.data.pagination;
        _this7.memberIds = response.data.data.memberIds;
        _this7.contentLoading = false;
      })["catch"](function (error) {
        console.log(error);
        _this7.contentLoading = false; // toastr.error(error)
      });
    },
    checkOnline: function checkOnline(userId) {
      var _this8 = this;

      var onlineStatus = false;
      Object.keys(this.chatLists).map(function (key) {
        if (_this8.chatLists[key].id == userId && _this8.chatLists[key].online == "Y") {
          onlineStatus = true;
        }
      });
      return onlineStatus;
    },
    showSearchModal: function showSearchModal() {
      this.$refs['search-modal'].show();
    },
    memberSearch: function memberSearch(search, loading) {
      var _this9 = this;

      this.memberList = [];
      _apis_ChatMessages__WEBPACK_IMPORTED_MODULE_1__["default"].memberList(search, JSON.stringify(this.memberIds)).then(function (response) {
        _this9.memberList = response.data.data;
      })["catch"](function (error) {
        console.log(error);
        _this9.isLoading = false;
      });
    },
    setChatBox: function setChatBox(value) {
      var _this10 = this;

      _apis_ChatMessages__WEBPACK_IMPORTED_MODULE_1__["default"].chatMemberInfo(value.userId).then(function (response) {
        value.message = response.data.data.message;
        value.fileFormat = response.data.data.fileFormat;
        value.createdAt = response.data.data.createdAt;
        value.unreadMessages = 0;

        _this10.latestChatMessages.unshift(value);

        _this10.memberIds.unshift(value.userId);

        _this10.chat(value.userId, value.createdAt, value.companySlug, value.unreadMessages);

        _this10.$refs['search-modal'].hide();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    messageBoxScrolling: function messageBoxScrolling() {
      var _this11 = this;

      if (this.$refs.messageBox.scrollTop + this.$refs.messageBox.clientHeight >= this.$refs.messageBox.scrollHeight - 1) {
        if (this.chatMessagePagination.current_page < this.chatMessagePagination.last_page) {
          _apis_ChatMessages__WEBPACK_IMPORTED_MODULE_1__["default"].latestMessage(this.chatMessagePagination.current_page + 1, this.chatMessageSearch).then(function (response) {
            var _this11$latestChatMes, _this11$memberIds;

            (_this11$latestChatMes = _this11.latestChatMessages).push.apply(_this11$latestChatMes, _toConsumableArray(response.data.data.latestChatMessages));

            _this11.chatMessagePagination = response.data.data.pagination;

            (_this11$memberIds = _this11.memberIds).push.apply(_this11$memberIds, _toConsumableArray(response.data.data.memberIds));
          })["catch"](function (error) {
            console.log(error); // toastr.error(error)
          });
        }
      }
    },

    /*chat window related function*/
    sendMessage: function sendMessage(event) {
      if (event.keyCode === 13 || event.type == 'click') {
        if (this.message.length > 0) {
          var messagePacket = this.createMsgObj('text', '', this.message);
          this.socket.emit('addMessage', messagePacket); //this.messages.push(messagePacket);

          this.message = "";
          this.scrollToBottom();
          this.getChatMessage();
        } else {
          this.blankMessageAlert();
        }
      } else {
        if (event.keyCode != 116 && event.keyCode != 82 && !event.ctrlKey) {
          this.socket.emit('typing', {
            typing: 'typing...',
            socket_id: this.cChat.socket_id
          });
          clearTimeout(this.timeout);
          this.timeout = setTimeout(this.timeoutFunction, 500);
        }
      }
    },
    messageInserted: function messageInserted(data) {
      if (data.addMessageCounter == 0) {
        this.messages.push(data);
        data.addMessageCounter++;
      }
    },
    updateMessage: function updateMessage(event, messageId) {
      var _this12 = this;

      if (event.keyCode === 13 || event.type == 'click') {
        if (this.message.length > 0) {
          _apis_ChatMessages__WEBPACK_IMPORTED_MODULE_1__["default"].update({
            'messageId': messageId,
            'message': this.message
          }).then(function (response) {
            $('#message-' + messageId).html(_this12.message);
            var editStatus = $('#edit-status-' + messageId).text();

            if (editStatus == '0') {
              $('#edit-status-' + messageId).html('1');
              $('#edit-status-text-' + messageId).html('(edited)');
            }

            _this12.socket.emit('editMessageReceiver', {
              fromUserId: _this12.user_id,
              toSocketId: _this12.cChat.socket_id,
              messageId: messageId,
              message: _this12.message
            });

            _this12.resetMessageUpdate();

            _this12.getChatMessage();
          })["catch"](function (error) {
            // console.log('updateUserMessageStatus error: ');
            // console.log(error);
            toastr.error('Operation failed!');
          });
        } else {
          this.blankMessageAlert();
        }
      } else {
        if (event.keyCode != 116 && event.keyCode != 82 && !event.ctrlKey) {
          this.socket.emit('typing', {
            typing: 'typing...',
            socket_id: this.cChat.socket_id
          });
          clearTimeout(this.timeout);
          this.timeout = setTimeout(this.timeoutFunction, 500);
        }
      }
    },
    resetMessageUpdate: function resetMessageUpdate() {
      // console.log(this.updateMessageId);
      this.editMessageAction = false;
      this.updateMessageId = null;
      this.message = "";
    },
    blankMessageAlert: function blankMessageAlert() {
      $.alert({
        title: 'Please enter your message.',
        content: '<span class="m-0"></span>',
        titleClass: 'font-weight-bold text-center jconfirm-modal-title pb-0',
        columnClass: 'small',
        animateFromElement: false,
        closeAnimation: 'scale',
        bgOpacity: 0.6,
        buttons: {
          Ok: {
            btnClass: 'btn-default rounded-pill'
          }
        }
      });
    },
    deleteMessage: function deleteMessage(messageId, messageType, index) {
      var vueInstance = this;
      $.confirm({
        title: 'Are you sure to delete this message?',
        content: '<hr class="m-0">',
        titleClass: 'font-weight-bold text-center jconfirm-modal-title',
        columnClass: 'medium',
        animateFromElement: false,
        closeAnimation: 'scale',
        bgOpacity: 0.6,
        buttons: {
          Yes: {
            btnClass: 'btn-danger rounded-pill text-capitalize',
            action: function action() {
              if (messageType == 'file') {
                vueInstance.fileUploading = true;
              }

              _apis_ChatMessages__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"]({
                'messageId': messageId
              }).then(function (response) {
                vueInstance.fileUploading = false;
                vueInstance.messages.splice(index, 1);
                vueInstance.socket.emit('deleteMessageReceiver', {
                  fromUserId: vueInstance.user_id,
                  toSocketId: vueInstance.cChat.socket_id,
                  index: index
                });
                vueInstance.getChatMessage();
              })["catch"](function (error) {
                // console.log('updateUserMessageStatus error: ');
                // console.log(error);
                toastr.error('Operation failed!');
              });
            }
          },
          Cancel: {
            btnClass: 'btn-default rounded-pill text-capitalize'
          }
        }
      });
    },
    deleteMessageReceiver: function deleteMessageReceiver(data) {
      if (data.fromUserId == this.cChat.id) {
        this.messages.splice(data.index, 1);
      }

      this.getChatMessage();
    },
    editMessage: function editMessage(messageId) {
      this.editMessageAction = true;
      this.updateMessageId = messageId;
      this.message = $.trim($('#message-' + messageId).text());
      $('#msginput-' + this.cChat.id).focus();
    },
    editMessageReceiver: function editMessageReceiver(data) {
      if (data.fromUserId == this.cChat.id) {
        $('#message-' + data.messageId).html(data.message);
        var editStatus = $('#edit-status-' + data.messageId).text();

        if (editStatus == '0') {
          $('#edit-status-' + data.messageId).html('1');
          $('#edit-status-text-' + data.messageId).html('(edited)');
        }
      }

      this.getChatMessage();
    },
    showEditMenu: function showEditMenu(messageId) {
      $('#showEditOption-' + messageId).toggle();
    },
    showEditDelete: function showEditDelete(messageId) {
      $('#edit-delete-' + messageId).attr('class', 'chat-edit-option clearfix d-block');
    },
    hideEditDelete: function hideEditDelete(messageId) {
      $('#edit-delete-' + messageId).attr('class', 'chat-edit-option clearfix d-none');
      $('#showEditOption-' + messageId).hide();
    },
    timeoutFunction: function timeoutFunction() {
      this.socket.emit("typing", {
        typing: false,
        socket_id: this.cChat.socket_id
      });
    },
    scrollToBottom: function scrollToBottom() {
      $("#chatboxscroll-" + this.cChat.id).stop().animate({
        scrollTop: $("#chatboxscroll-" + this.cChat.id)[0].scrollHeight
      });
    },
    createMsgObj: function createMsgObj(type, fileFormat, message) {
      return {
        type: type,
        fileFormat: fileFormat,
        filePath: '',
        fromUserId: this.user_id,
        toUserId: this.cChat.id,
        toSocketId: this.cChat.socket_id,
        message: message,
        newMessageSenderImage: this.companyImage,
        time: new moment().format("hh:mm A"),
        date: new moment().format("Y-MM-D")
      };
    },
    addMessageResponse: function addMessageResponse(data) {
      if (data.addMessageCounter == 0) {
        if (data && data.fromUserId == this.cChat.id) {
          this.messages.push(data);
          this.scrollToBottom();
          this.getChatMessage();
          data.addMessageCounter++;
        }
      }
    },
    typingListener: function typingListener(data) {
      if (data.typing && data.to_socket_id == this.cChat.socket_id) {
        this.typing = "is " + data.typing;
      } else {
        this.typing = "";
      }
    },
    getMessagesResponse: function getMessagesResponse(data) {
      if (data.toUserId == this.cChat.id) {
        this.messages = data.result;
        this.$nextTick(function () {
          this.scrollToBottom();
        });
      }
    },
    imageuploaded: function imageuploaded(data) {
      if (data.addMessageCounter == 0) {
        if (data && data.toUserId == this.cChat.id) {
          $(".overlay").parent().parent().remove();
          this.messages.push(data);
          this.fileUploading = false;
          this.scrollToBottom();
          this.getChatMessage();
          data.addMessageCounter++;
        }
      }
    },
    file: function file(event) {
      var file = event.target.files[0];

      if (this.validateSize(file)) {
        var fileFormat = file.type.split('/')[0];
        var reader = new FileReader();

        reader.onload = function () {
          var messagePacket = this.createMsgObj('file', fileFormat, reader.result);
          messagePacket['fileName'] = file.name;
          this.fileUploading = true;
          this.socket.emit('upload-image', messagePacket);
          messagePacket.type = "text";

          if (fileFormat != 'image') {
            messagePacket.message = '<span class="info-box-icon bg-primary" style="color: gray;background:none;"><i class="fa fa-paperclip"></i></span><div class="overlay"><i style="color:#fff" class="fa fa-refresh fa-spin"></i></div>';
          } else {
            var src = URL.createObjectURL(new Blob([reader.result]));
            messagePacket.message = '<img height="100px;" width="100px;" src="' + src + '"><div class="overlay"><i style="color:#fff" class="fa fa-refresh fa-spin"></i></div>';
          } //this.messages.push(messagePacket);


          this.scrollToBottom();
          this.getChatMessage();
        }.bind(this);

        reader.readAsArrayBuffer(file);
      } else {
        event.target.value = "";
        alert('File size exceeds 10 MB');
      }
    },
    validateSize: function validateSize(file) {
      var fileSize = file.size / 1024 / 1024; // in MB

      if (fileSize > 10) {
        return false;
      }

      return true;
    }
  },
  filters: {
    dateFormat: function dateFormat(value) {
      return new moment(value).fromNow();
    },
    truncate: function truncate(text, length, suffix) {
      if (text.length > length) {
        return text.substring(0, length) + suffix;
      } else {
        return text;
      }
    }
  },
  created: function created() {
    // this.isLoading = true;
    this.senderCompanySlug = JSON.parse(localStorage.getItem("info")).company_slug_name;
    this.senderLoadTabContent('senderGeneralInfo', this.senderCompanySlug);
    this.getChatMessage();
    var company_image = JSON.parse(localStorage.getItem("info")).company_image;
    this.companyImage = "" != company_image ? company_image : "/images/image-placeholder-1.png";
  },
  mounted: function mounted() {
    this.$nextTick(function () {
      this.messageWindowSize = window.innerHeight - 150;
    });
    this.user_id = localStorage.getItem('userid');
    this.ws_url = $('meta[name=ws_url]').attr("content");
    this.socket = io(this.ws_url, {
      query: "id= " + this.user_id
    }); // chat box object start here

    this.cBox = {
      data: function data() {
        return {
          messages: [],
          message: '',
          typing: '',
          timeout: ''
        };
      },
      props: ['user_id', 'cChat', 'socket', 'chatBoxClose', 'chatBoxMinimize', 'ws_url'],
      mounted: function mounted() {
        this.socket.emit('getMessages', {
          fromUserId: this.user_id,
          toUserId: this.cChat.id
        });
        this.socket.on('getMessagesResponse', this.getMessagesResponse);
        this.socket.on('addMessageResponse', this.addMessageResponse);
        this.socket.on('typing', this.typingListener);
        this.socket.on('image-uploaded', this.imageuploaded);
      },
      destroyed: function destroyed() {
        this.socket.removeListener('getMessagesResponse', this.getMessagesResponse);
        this.socket.removeListener('addMessageResponse', this.addMessageResponse);
        this.socket.removeListener('typing', this.typingListener);
      },
      methods: {
        sendMessage: function sendMessage(event) {
          if (event.keyCode === 13) {
            if (this.message.length > 0) {
              var messagePacket = this.createMsgObj('text', '', this.message);
              this.socket.emit('addMessage', messagePacket);
              this.messages.push(messagePacket);
              this.message = "";
              this.scrollToBottom();
            } else {
              alert("Please Enter Your Message.");
            }
          } else {
            if (event.keyCode != 116 && event.keyCode != 82 && !event.ctrlKey) {
              this.socket.emit('typing', {
                typing: 'typing...',
                socket_id: this.cChat.socket_id
              });
              clearTimeout(this.timeout);
              this.timeout = setTimeout(this.timeoutFunction, 500);
            }
          }
        },
        timeoutFunction: function timeoutFunction() {
          this.socket.emit("typing", {
            typing: false,
            socket_id: this.cChat.socket_id
          });
        },
        scrollToBottom: function scrollToBottom() {
          $("#chatboxscroll-" + this.cChat.id).stop().animate({
            scrollTop: $("#chatboxscroll-" + this.cChat.id)[0].scrollHeight
          }, 1);
        },
        createMsgObj: function createMsgObj(type, fileFormat, message) {
          return {
            type: type,
            fileFormat: fileFormat,
            filePath: '',
            fromUserId: this.user_id,
            toUserId: this.cChat.id,
            toSocketId: this.cChat.socket_id,
            message: message,
            time: new moment().format("hh:mm A"),
            date: new moment().format("Y-MM-D")
          };
        },
        addMessageResponse: function addMessageResponse(data) {
          console.log('add message response call');

          if (data && data.fromUserId == this.cChat.id) {
            this.messages.push(data);
            this.scrollToBottom();
          }
        },
        typingListener: function typingListener(data) {
          if (data.typing && data.to_socket_id == this.cChat.socket_id) {
            this.typing = "is " + data.typing;
          } else {
            this.typing = "";
          }
        },
        getMessagesResponse: function getMessagesResponse(data) {
          if (data.toUserId == this.cChat.id) {
            this.messages = data.result;
            this.$nextTick(function () {
              this.scrollToBottom();
            });
          }
        },
        imageuploaded: function imageuploaded(data) {
          if (data && data.toUserId == this.cChat.id) {
            $(".overlay").parent().parent().remove();
            this.messages.push(data);
            this.scrollToBottom();
          }
        },
        file: function file(event) {
          var file = event.target.files[0];

          if (this.validateSize(file)) {
            var fileFormat = file.type.split('/')[0];
            var reader = new FileReader();

            reader.onload = function () {
              var messagePacket = this.createMsgObj('file', fileFormat, reader.result);
              messagePacket['fileName'] = file.name;
              this.socket.emit('upload-image', messagePacket);
              messagePacket.type = "text";

              if (fileFormat != 'image') {
                messagePacket.message = '<span class="info-box-icon bg-primary" style="color: gray;background:none;"><i class="fa fa-paperclip"></i></span><div class="overlay"><i style="color:#fff" class="fa fa-refresh fa-spin"></i></div>';
              } else {
                var src = URL.createObjectURL(new Blob([reader.result]));
                messagePacket.message = '<img height="100px;" width="100px;" src="' + src + '"><div class="overlay"><i style="color:#fff" class="fa fa-refresh fa-spin"></i></div>';
              }

              this.messages.push(messagePacket);
              this.scrollToBottom();
            }.bind(this);

            reader.readAsArrayBuffer(file);
          } else {
            event.target.value = "";
            alert('File size exceeds 10 MB');
          }
        },
        validateSize: function validateSize(file) {
          var fileSize = file.size / 1024 / 1024; // in MB

          if (fileSize > 10) {
            return false;
          }

          return true;
        }
      },
      filters: {
        dateFormat: function dateFormat(value) {
          // return new moment(value).format("D-MMM-YY");
          return new moment(value).fromNow();
        }
      },
      template: "\n    <div class=\"chat_box\" v-bind:id=\"'chatbox-' + cChat.id\" style=\"right:270px\">\n        <div class=\"box box-primary direct-chat direct-chat-primary\">\n            <div class=\"box-header with-border\">\n                <h3 class=\"box-title\">{{ cChat.name }}</h3> <span>{{ typing }}</span>\n                <div class=\"box-tools pull-right\">\n                    <button type=\"button\" class=\"btn btn-box-tool\" data-widget=\"collapse\" @click=\"chatBoxMinimize(cChat.id)\"><i class=\"fa fa-minus\"></i>\n                    </button>\n                    <button type=\"button\" class=\"btn btn-box-tool\" @click=\"chatBoxClose(cChat.id)\"><i class=\"fa fa-times\"></i>\n                    </button>\n                </div>\n            </div>\n\n\n            <div style=\"\" class=\"box-body\">\n                <div class=\"direct-chat-messages\" v-bind:id=\"'chatboxscroll-' + cChat.id\">\n                    <div v-for=\"messagePacket in messages\" class=\"direct-chat-msg\" v-bind:class=\"{ 'right' : (messagePacket.fromUserId == user_id) }\">\n                        <div class=\"direct-chat-info clearfix\">\n                            <small class=\"direct-chat-timestamp\"  v-bind:class=\"{ 'pull-right' : (messagePacket.fromUserId == user_id), 'pull-left' : (messagePacket.fromUserId != user_id) }\">{{ messagePacket.date + ' ' + messagePacket.time | dateFormat }}</small>\n                        </div>\n\n                        <div v-if=\"messagePacket.type == 'text'\" v-bind:class=\"{ 'pull-right' : (messagePacket.fromUserId == user_id), 'pull-left' : (messagePacket.fromUserId != user_id) }\" v-html=messagePacket.message class=\"direct-chat-text clearfix\" style=\"margin-right: 1px;margin-left: 1px;word-break: break-all;padding: 3px 10px;\">\n                        </div>\n\n                        <div v-if=\"messagePacket.type == 'file'\" v-bind:class=\"{ 'pull-right' : (messagePacket.fromUserId == user_id), 'pull-left' : (messagePacket.fromUserId != user_id) }\" class=\"direct-chat-text clearfix\" style=\"margin-right: 1px;margin-left: 1px;word-break: break-all;padding: 3px 3px;\">\n                            <a v-if=\"messagePacket.fileFormat == 'image'\" :href=\"'" + this.ws_url + "' + messagePacket.filePath\" download :title=\"messagePacket.message\" target=\"_new\"><img height=\"110px;\" width=\"110px;\" :src=\"'" + this.ws_url + "' + messagePacket.filePath\"></a>\n                            <a v-else :href=\"'" + this.ws_url + "' + messagePacket.filePath\" download :title=\"messagePacket.message\" target=\"_new\"><span class=\"info-box-icon\" style=\"color: gray;background:none;\"><i class=\"fa fa-paperclip\"></i></span>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div style=\"display: block;\" class=\"box-footer\">\n                <div class=\"input-group\">\n                    <input name=\"message\" v-bind:id=\"'msginput-' + cChat.id\" v-model.trim=\"message\" placeholder=\"Type Message And Hit Enter\" class=\"form-control\" type=\"text\" v-on:keydown=\"sendMessage($event)\">\n                    <span class=\"input-group-btn\">\n                        <div class=\"btn btn-default btn-file\">\n                            <i class=\"fa fa-paperclip\"></i>\n                            <input name=\"attachment\" type=\"file\" v-on:change=\"file($event)\">\n                        </div>\n                    </span>\n                </div>\n            </div>\n        </div>\n    </div>"
    };
    var vm = this;
    this.socket.on('connect', function (data) {
      vm.socketConnected.status = true;
      this.emit('chatList', vm.user_id);
    });
    this.socket.on('connect_error', function () {
      vm.socketConnected.status = false;
      vm.socketConnected.msg = 'Could not connect to server';
      vm.chatLists = [];
    });
    this.socket.on('chatListRes', function (data) {
      if (data.userDisconnected) {
        vm.chatLists.findIndex(function (el) {
          if (el.socket_id == data.socket_id) {
            el.online = 'N';
            el.socket_id = '';
          }
        });
      } else if (data.userConnected) {
        vm.chatLists.findIndex(function (el) {
          if (el.id == data.userId) {
            el.online = 'Y';
            el.socket_id = data.socket_id;
          }
        });
      } else {
        data.chatList.findIndex(function (el) {
          el.msgCount = 0;
        });
        vm.chatLists = data.chatList;
      }
    }); // user chat box not open, count incomming  messages

    this.socket.on('addMessageResponse', function (data) {
      vm.getChatMessage();

      if (data.fromUserId == vm.cChat.id) {
        vm.updateUserMessageStatus(data.fromUserId);
      }

      if (!vm.chatBox.includes(data.fromUserId)) {
        vm.chatLists.findIndex(function (el) {
          if (el.id == data.fromUserId) {
            el.msgCount += 1;
          }
        });
      }
    });
    this.socket.on('deleteMessageResponse', function (data) {
      vm.deleteMessageReceiver(data);
    });
    this.socket.on('editMessageResponse', function (data) {
      vm.editMessageReceiver(data);
    });
  },
  destroyed: function destroyed() {
    this.socket.disconnect();
    $('.chat_box').remove();
    /*chat window related*/

    this.socket.removeListener('getMessagesResponse', this.getMessagesResponse);
    this.socket.removeListener('addMessageResponse', this.addMessageResponse);
    this.socket.removeListener('typing', this.typingListener);
  },
  components: {
    loader: function loader() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/Loader */ "./resources/js/components/Loader.vue"));
    },
    pagination: function pagination() {
      return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ../components/PaginationComponent */ "./resources/js/components/PaginationComponent.vue"));
    },
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a,
    CompanyNodeCollapses: _components_CompanyNodeCollapses__WEBPACK_IMPORTED_MODULE_4__["default"],
    VEmojiPicker: v_emoji_picker__WEBPACK_IMPORTED_MODULE_5__["VEmojiPicker"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Chat.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Chat.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content-div ul li {\n  font-size: 12px;\n  margin-bottom: 15px;\n}\n.content-div ul li.social-media-icon i {\n  padding: 8px;\n  font-size: 22px;\n}\n.content-div li.social-media-icon .scoop-icon, .content-div li.social-media-icon .tiktok-icon {\n  display: inline-flex;\n  height: 22px;\n  margin: 0 7px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Chat.vue?vue&type=style&index=1&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Chat.vue?vue&type=style&index=1&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*chat info fox related style*/\n.info-box {\n    display: block;\n    min-height: 90px;\n    background: #fff;\n    width: 100%;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n    border-radius: 2px;\n    margin-bottom: 15px\n}\n.info-box small {\n    font-size: 14px\n}\n.info-box .progress {\n    background: rgba(0, 0, 0, 0.2);\n    margin: 5px -10px 5px -10px;\n    height: 2px\n}\n.info-box .progress,\n.info-box .progress .progress-bar {\n    border-radius: 0\n}\n.info-box .progress .progress-bar {\n    background: #fff\n}\n.info-box-icon {\n    border-top-left-radius: 2px;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 2px;\n    display: block;\n    float: left;\n    height: 90px;\n    width: 90px;\n    text-align: center;\n    font-size: 45px;\n    line-height: 90px;\n    background: rgba(0, 0, 0, 0.2)\n}\n.info-box-icon > img {\n    max-width: 100%\n}\n.info-box-content {\n    padding: 5px 10px;\n    margin-left: 90px\n}\n.info-box-number {\n    display: block;\n    font-weight: bold;\n    font-size: 18px\n}\n.progress-description,\n.info-box-text {\n    display: block;\n    font-size: 14px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis\n}\n.info-box-text {\n    text-transform: uppercase\n}\n.info-box-more {\n    display: block\n}\n\n/*end chat infofox related style*/\n.chat_box {\n    width: 260px;\n    padding: 5px;\n    position: fixed;\n    bottom: 0px;\n}\n.box {\n    position: relative;\n    border-radius: 3px;\n    background: #ffffff;\n    /*margin-bottom: 20px;*/\n    width: 100%;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1)\n}\n.box.box-primary {\n    border-top-color: #3c8dbc\n}\n.box.box-info {\n    border-top-color: #00c0ef\n}\n.box.box-danger {\n    border-top-color: #dd4b39\n}\n.box.box-warning {\n    border-top-color: #f39c12\n}\n.box.box-success {\n    border-top-color: #00a65a\n}\n.box.box-default {\n    border-top-color: #d2d6de\n}\n.box.collapsed-box .box-body,\n.box.collapsed-box .box-footer {\n    display: none\n}\n.box .nav-stacked > li {\n    border-bottom: 1px solid #f4f4f4;\n    margin: 0\n}\n.box .nav-stacked > li:last-of-type {\n    border-bottom: none\n}\n.box.height-control .box-body {\n    max-height: 300px;\n    overflow: auto\n}\n.box .border-right {\n    border-right: 1px solid #f4f4f4\n}\n.box .border-left {\n    border-left: 1px solid #f4f4f4\n}\n.box.box-solid {\n    border-top: 0\n}\n.box.box-solid > .box-header .btn.btn-default {\n    background: transparent\n}\n.box.box-solid > .box-header .btn:hover,\n.box.box-solid > .box-header a:hover {\n    background: rgba(0, 0, 0, 0.1)\n}\n.box.box-solid.box-default {\n    border: 1px solid #d2d6de\n}\n.box.box-solid.box-default > .box-header {\n    color: #444;\n    background: #d2d6de;\n    background-color: #d2d6de\n}\n.box.box-solid.box-default > .box-header a,\n.box.box-solid.box-default > .box-header .btn {\n    color: #444\n}\n.box.box-solid.box-primary {\n    border: 1px solid #3c8dbc\n}\n.box.box-solid.box-primary > .box-header {\n    color: #fff;\n    background: #3c8dbc;\n    background-color: #3c8dbc\n}\n.box.box-solid.box-primary > .box-header a,\n.box.box-solid.box-primary > .box-header .btn {\n    color: #fff\n}\n.box.box-solid.box-info {\n    border: 1px solid #00c0ef\n}\n.box.box-solid.box-info > .box-header {\n    color: #fff;\n    background: #00c0ef;\n    background-color: #00c0ef\n}\n.box.box-solid.box-info > .box-header a,\n.box.box-solid.box-info > .box-header .btn {\n    color: #fff\n}\n.box.box-solid.box-danger {\n    border: 1px solid #dd4b39\n}\n.box.box-solid.box-danger > .box-header {\n    color: #fff;\n    background: #dd4b39;\n    background-color: #dd4b39\n}\n.box.box-solid.box-danger > .box-header a,\n.box.box-solid.box-danger > .box-header .btn {\n    color: #fff\n}\n.box.box-solid.box-warning {\n    border: 1px solid #f39c12\n}\n.box.box-solid.box-warning > .box-header {\n    color: #fff;\n    background: #f39c12;\n    background-color: #f39c12\n}\n.box.box-solid.box-warning > .box-header a,\n.box.box-solid.box-warning > .box-header .btn {\n    color: #fff\n}\n.box.box-solid.box-success {\n    border: 1px solid #00a65a\n}\n.box.box-solid.box-success > .box-header {\n    color: #fff;\n    background: #00a65a;\n    background-color: #00a65a\n}\n.box.box-solid.box-success > .box-header a,\n.box.box-solid.box-success > .box-header .btn {\n    color: #fff\n}\n.box.box-solid > .box-header > .box-tools .btn {\n    border: 0;\n    box-shadow: none\n}\n.box.box-solid[class*='bg'] > .box-header {\n    color: #fff\n}\n.box .box-group > .box {\n    margin-bottom: 5px\n}\n.box .knob-label {\n    text-align: center;\n    color: #333;\n    font-weight: 100;\n    font-size: 12px;\n    margin-bottom: 0.3em\n}\n.box > .overlay,\n.overlay-wrapper > .overlay,\n.box > .loading-img,\n.overlay-wrapper > .loading-img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%\n}\n.box .overlay,\n.overlay-wrapper .overlay {\n    z-index: 50;\n    background: rgba(255, 255, 255, 0.7);\n    border-radius: 3px\n}\n.box .overlay > .fa,\n.overlay-wrapper .overlay > .fa {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-left: -15px;\n    margin-top: -15px;\n    color: #000;\n    font-size: 30px\n}\n.box .overlay.dark,\n.overlay-wrapper .overlay.dark {\n    background: rgba(0, 0, 0, 0.5)\n}\n.box-header:before,\n.box-body:before,\n.box-footer:before,\n.box-header:after,\n.box-body:after,\n.box-footer:after {\n    content: \" \";\n    display: table\n}\n.box-header:after,\n.box-body:after,\n.box-footer:after {\n    clear: both\n}\n.box-header {\n    color: #444;\n    display: block;\n    padding: 10px;\n    position: relative\n}\n\n/*.box-header.with-border {\n    border-bottom: 1px solid #f4f4f4\n}*/\n.collapsed-box .box-header.with-border {\n    border-bottom: none\n}\n.box-header > .fa,\n.box-header > .glyphicon,\n.box-header > .ion,\n.box-header .box-title {\n    display: inline-block;\n    font-size: 18px;\n    margin: 0;\n    line-height: 1\n}\n.box-header > .fa,\n.box-header > .glyphicon,\n.box-header > .ion {\n    margin-right: 5px\n}\n.box-header > .box-tools {\n    position: absolute;\n    right: 10px;\n    top: 5px\n}\n.box-header > .box-tools [data-toggle=\"tooltip\"] {\n    position: relative\n}\n.box-header > .box-tools.pull-right .dropdown-menu {\n    right: 0;\n    left: auto\n}\n.box-header > .box-tools .dropdown-menu > li > a {\n    color: #444 !important\n}\n.btn-box-tool {\n    padding: 5px;\n    font-size: 12px;\n    background: transparent;\n    color: #97a0b3\n}\n.open .btn-box-tool,\n.btn-box-tool:hover {\n    color: #606c84\n}\n.btn-box-tool.btn:active {\n    box-shadow: none\n}\n.box-body {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px;\n    padding: 10px\n}\n.no-header .box-body {\n    border-top-right-radius: 3px;\n    border-top-left-radius: 3px\n}\n.box-body > .table {\n    margin-bottom: 0\n}\n.box-body .fc {\n    margin-top: 5px\n}\n.box-body .full-width-chart {\n    margin: -19px\n}\n.box-body.no-padding .full-width-chart {\n    margin: -9px\n}\n.box-body .box-pane {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 3px\n}\n.box-body .box-pane-right {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 0\n}\n.box-footer {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px;\n    border-top: 1px solid #f4f4f4;\n    padding: 10px;\n    background-color: #fff\n}\n.chart-legend {\n    margin: 10px 0\n}\n@media (max-width: 991px) {\n.chart-legend > li {\n        float: left;\n        margin-right: 10px\n}\n}\n.box-comments {\n    background: #f7f7f7\n}\n.box-comments .box-comment {\n    padding: 8px 0;\n    border-bottom: 1px solid #eee\n}\n.box-comments .box-comment:before,\n.box-comments .box-comment:after {\n    content: \" \";\n    display: table\n}\n.box-comments .box-comment:after {\n    clear: both\n}\n.box-comments .box-comment:last-of-type {\n    border-bottom: 0\n}\n.box-comments .box-comment:first-of-type {\n    padding-top: 0\n}\n.box-comments .box-comment img {\n    float: left\n}\n.box-comments .comment-text {\n    margin-left: 40px;\n    color: #555\n}\n.box-comments .username {\n    color: #444;\n    display: block;\n    font-weight: 600\n}\n.box-comments .text-muted {\n    font-weight: 400;\n    font-size: 12px\n}\n.todo-list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    overflow: auto\n}\n.todo-list > li {\n    border-radius: 2px;\n    padding: 10px;\n    background: #f4f4f4;\n    margin-bottom: 2px;\n    border-left: 2px solid #e6e7e8;\n    color: #444\n}\n.todo-list > li:last-of-type {\n    margin-bottom: 0\n}\n.todo-list > li > input[type='checkbox'] {\n    margin: 0 10px 0 5px\n}\n.todo-list > li .text {\n    display: inline-block;\n    margin-left: 5px;\n    font-weight: 600\n}\n.todo-list > li .label {\n    margin-left: 10px;\n    font-size: 9px\n}\n.todo-list > li .tools {\n    display: none;\n    float: right;\n    color: #dd4b39\n}\n.todo-list > li .tools > .fa,\n.todo-list > li .tools > .glyphicon,\n.todo-list > li .tools > .ion {\n    margin-right: 5px;\n    cursor: pointer\n}\n.todo-list > li:hover .tools {\n    display: inline-block\n}\n.todo-list > li.done {\n    color: #999\n}\n.todo-list > li.done .text {\n    text-decoration: line-through;\n    font-weight: 500\n}\n.todo-list > li.done .label {\n    background: #d2d6de !important\n}\n.todo-list .danger {\n    border-left-color: #dd4b39\n}\n.todo-list .warning {\n    border-left-color: #f39c12\n}\n.todo-list .info {\n    border-left-color: #00c0ef\n}\n.todo-list .success {\n    border-left-color: #00a65a\n}\n.todo-list .primary {\n    border-left-color: #3c8dbc\n}\n.todo-list .handle {\n    display: inline-block;\n    cursor: move;\n    margin: 0 5px\n}\n.chat {\n    padding: 5px 20px 5px 10px\n}\n.chat .item {\n    margin-bottom: 10px\n}\n.chat .item:before,\n.chat .item:after {\n    content: \" \";\n    display: table\n}\n.chat .item:after {\n    clear: both\n}\n.chat .item > img {\n    width: 40px;\n    height: 40px;\n    border: 2px solid transparent;\n    border-radius: 50%\n}\n.chat .item > .online {\n    border: 2px solid #00a65a\n}\n.chat .item > .offline {\n    border: 2px solid #dd4b39\n}\n.chat .item > .message {\n    margin-left: 55px;\n    margin-top: -40px\n}\n.chat .item > .message > .name {\n    display: block;\n    font-weight: 600\n}\n.chat .item > .attachment {\n    border-radius: 3px;\n    background: #f4f4f4;\n    margin-left: 65px;\n    margin-right: 15px;\n    padding: 10px\n}\n.chat .item > .attachment > h4 {\n    margin: 0 0 5px 0;\n    font-weight: 600;\n    font-size: 14px\n}\n.chat .item > .attachment > p,\n.chat .item > .attachment > .filename {\n    font-weight: 600;\n    font-size: 13px;\n    font-style: italic;\n    margin: 0\n}\n.chat .item > .attachment:before,\n.chat .item > .attachment:after {\n    content: \" \";\n    display: table\n}\n.chat .item > .attachment:after {\n    clear: both\n}\n.box-input {\n    max-width: 200px\n}\n.modal .panel-body {\n    color: #444\n}\n.info-box {\n    display: block;\n    min-height: 90px;\n    background: #fff;\n    width: 100%;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n    border-radius: 2px;\n    margin-bottom: 15px\n}\n.info-box small {\n    font-size: 14px\n}\n.info-box .progress {\n    background: rgba(0, 0, 0, 0.2);\n    margin: 5px -10px 5px -10px;\n    height: 2px\n}\n.info-box .progress,\n.info-box .progress .progress-bar {\n    border-radius: 0\n}\n.info-box .progress .progress-bar {\n    background: #fff\n}\n.info-box-icon {\n    border-top-left-radius: 2px;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 2px;\n    display: block;\n    float: left;\n    height: 90px;\n    width: 90px;\n    text-align: center;\n    font-size: 45px;\n    line-height: 90px;\n    background: rgba(0, 0, 0, 0.2)\n}\n.info-box-icon > img {\n    max-width: 100%\n}\n.info-box-content {\n    padding: 5px 10px;\n    margin-left: 90px\n}\n.info-box-number {\n    display: block;\n    font-weight: bold;\n    font-size: 18px\n}\n.progress-description,\n.info-box-text {\n    display: block;\n    font-size: 14px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis\n}\n.info-box-text {\n    text-transform: uppercase\n}\n.info-box-more {\n    display: block\n}\n.progress-description {\n    margin: 0\n}\n.timeline {\n    position: relative;\n    margin: 0 0 30px 0;\n    padding: 0;\n    list-style: none\n}\n.timeline:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    width: 4px;\n    background: #ddd;\n    left: 31px;\n    margin: 0;\n    border-radius: 2px\n}\n.timeline > li {\n    position: relative;\n    margin-right: 10px;\n    margin-bottom: 15px\n}\n.timeline > li:before,\n.timeline > li:after {\n    content: \" \";\n    display: table\n}\n.timeline > li:after {\n    clear: both\n}\n.timeline > li > .timeline-item {\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n    border-radius: 3px;\n    margin-top: 0;\n    background: #fff;\n    color: #444;\n    margin-left: 60px;\n    margin-right: 15px;\n    padding: 0;\n    position: relative\n}\n.timeline > li > .timeline-item > .time {\n    color: #999;\n    float: right;\n    padding: 10px;\n    font-size: 12px\n}\n.timeline > li > .timeline-item > .timeline-header {\n    margin: 0;\n    color: #555;\n    border-bottom: 1px solid #f4f4f4;\n    padding: 10px;\n    font-size: 16px;\n    line-height: 1.1\n}\n.timeline > li > .timeline-item > .timeline-header > a {\n    font-weight: 600\n}\n.timeline > li > .timeline-item > .timeline-body,\n.timeline > li > .timeline-item > .timeline-footer {\n    padding: 10px\n}\n.timeline > li > .fa,\n.timeline > li > .glyphicon,\n.timeline > li > .ion {\n    width: 30px;\n    height: 30px;\n    font-size: 15px;\n    line-height: 30px;\n    position: absolute;\n    color: #666;\n    background: #d2d6de;\n    border-radius: 50%;\n    text-align: center;\n    left: 18px;\n    top: 0\n}\n.timeline > .time-label > span {\n    font-weight: 600;\n    padding: 5px;\n    display: inline-block;\n    background-color: #fff;\n    border-radius: 4px\n}\n.timeline-inverse > li > .timeline-item {\n    background: #f0f0f0;\n    border: 1px solid #ddd;\n    box-shadow: none\n}\n.timeline-inverse > li > .timeline-item > .timeline-header {\n    border-bottom-color: #ddd\n}\n\n/*.btn {*/\n/*    border-radius: 3px;*/\n/*    -webkit-box-shadow: none;*/\n/*    box-shadow: none;*/\n/*    border: 1px solid transparent*/\n/*}*/\n.btn.uppercase {\n    text-transform: uppercase\n}\n.btn.btn-flat {\n    border-radius: 0;\n    box-shadow: none;\n    border-width: 1px\n}\n.btn:active {\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125)\n}\n.btn:focus {\n    outline: none\n}\n.btn.btn-file {\n    position: relative;\n    overflow: hidden;\n    height: 40px;\n    width: 40px;\n    border-radius: 50%;\n    color: #ffffff;\n    background: #1E0857;\n}\n.btn.btn-file img {\n    margin-top: 2px;\n    margin-left: -5px;\n}\n.send-icon-image img {\n    margin-left: -3px !important;\n}\n.btn.btn-file > input[type='file'] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    min-width: 100%;\n    min-height: 100%;\n    font-size: 100px;\n    text-align: right;\n    opacity: 0;\n    filter: alpha(opacity=0);\n    outline: none;\n    background: white;\n    cursor: inherit;\n    display: block;\n}\n.btn-default {\n    background-color: #f4f4f4;\n    color: #444;\n}\n.btn-default:hover,\n.btn-default:active,\n.btn-default.hover {\n    box-shadow: 0 5px 25px 0 rgba(42, 139, 242, 0.1), 0 7px 25px 0 rgba(42, 139, 242, 0.1), 0 10px 15px 0 rgba(42, 139, 242, 0.2);\n}\n/*======commented by khalid 12/29/2021 start ======*/\n/*    .btn-primary {*/\n/*        background-color: #3c8dbc;*/\n/*        border-color: #367fa9*/\n/*    }*/\n\n/*.btn-primary:hover,*/\n/*.btn-primary:active,*/\n/*.btn-primary.hover {*/\n/*    background-color: #367fa9*/\n/*}*/\n\n/*======commented by khalid 12/29/2021 end ======*/\n.btn-success {\n    background-color: #00a65a;\n    border-color: #008d4c\n}\n.btn-success:hover,\n.btn-success:active,\n.btn-success.hover {\n    background-color: #008d4c\n}\n.btn-info {\n    background-color: #00c0ef;\n    border-color: #00acd6\n}\n.btn-info:hover,\n.btn-info:active,\n.btn-info.hover {\n    background-color: #00acd6\n}\n.btn-danger {\n    background-color: #dd4b39;\n    border-color: #d73925\n}\n.btn-danger:hover,\n.btn-danger:active,\n.btn-danger.hover {\n    background-color: #d73925\n}\n.btn-warning {\n    background-color: #f39c12;\n    border-color: #e08e0b\n}\n.btn-warning:hover,\n.btn-warning:active,\n.btn-warning.hover {\n    background-color: #e08e0b\n}\n.btn-outline {\n    border: 1px solid #fff;\n    background: transparent;\n    color: #fff\n}\n.btn-outline:hover,\n.btn-outline:focus,\n.btn-outline:active {\n    color: rgba(255, 255, 255, 0.7);\n    border-color: rgba(255, 255, 255, 0.7)\n}\n.btn-link {\n    box-shadow: none\n}\n.btn[class*='bg-']:hover {\n    box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.2)\n}\n.btn-app {\n    border-radius: 3px;\n    position: relative;\n    padding: 15px 5px;\n    margin: 0 0 10px 10px;\n    min-width: 80px;\n    height: 60px;\n    text-align: center;\n    color: #666;\n    border: 1px solid #ddd;\n    background-color: #f4f4f4;\n    font-size: 12px\n}\n.btn-app > .fa,\n.btn-app > .glyphicon,\n.btn-app > .ion {\n    font-size: 20px;\n    display: block\n}\n.btn-app:hover {\n    background: #f4f4f4;\n    color: #444;\n    border-color: #aaa\n}\n.btn-app:active,\n.btn-app:focus {\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125)\n}\n.btn-app > .badge {\n    position: absolute;\n    top: -3px;\n    right: -10px;\n    font-size: 10px;\n    font-weight: 400\n}\n.callout {\n    border-radius: 3px;\n    margin: 0 0 20px 0;\n    padding: 15px 30px 15px 15px;\n    border-left: 5px solid #eee\n}\n.callout a {\n    color: #fff;\n    text-decoration: underline\n}\n.callout a:hover {\n    color: #eee\n}\n.callout h4 {\n    margin-top: 0;\n    font-weight: 600\n}\n.callout p:last-child {\n    margin-bottom: 0\n}\n.callout code,\n.callout .highlight {\n    background-color: #fff\n}\n.callout.callout-danger {\n    border-color: #c23321\n}\n.callout.callout-warning {\n    border-color: #c87f0a\n}\n.callout.callout-info {\n    border-color: #0097bc\n}\n.callout.callout-success {\n    border-color: #00733e\n}\n.alert {\n    border-radius: 3px\n}\n.alert h4 {\n    font-weight: 600\n}\n.alert .icon {\n    margin-right: 10px\n}\n.alert .close {\n    color: #000;\n    opacity: .2;\n    filter: alpha(opacity=20)\n}\n.alert .close:hover {\n    opacity: .5;\n    filter: alpha(opacity=50)\n}\n.alert a {\n    color: #fff;\n    text-decoration: underline\n}\n.alert-success {\n    border-color: #008d4c\n}\n.alert-danger,\n.alert-error {\n    border-color: #d73925\n}\n.alert-warning {\n    border-color: #e08e0b\n}\n.alert-info {\n    border-color: #00acd6\n}\n.nav > li > a:hover,\n.nav > li > a:active,\n.nav > li > a:focus {\n    color: #444;\n    background: #f7f7f7\n}\n.nav-pills > li > a {\n    border-radius: 0;\n    border-top: 3px solid transparent;\n    color: #444\n}\n.nav-pills > li > a > .fa,\n.nav-pills > li > a > .glyphicon,\n.nav-pills > li > a > .ion {\n    margin-right: 5px\n}\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n    border-top-color: #3c8dbc\n}\n.nav-pills > li.active > a {\n    font-weight: 600\n}\n.nav-stacked > li > a {\n    border-radius: 0;\n    border-top: 0;\n    border-left: 3px solid transparent;\n    color: #444\n}\n.nav-stacked > li.active > a,\n.nav-stacked > li.active > a:hover {\n    background: transparent;\n    color: #444;\n    border-top: 0;\n    border-left-color: #3c8dbc\n}\n.nav-stacked > li.header {\n    border-bottom: 1px solid #ddd;\n    color: #777;\n    margin-bottom: 10px;\n    padding: 5px 10px;\n    text-transform: uppercase\n}\n.nav-tabs-custom {\n    margin-bottom: 20px;\n    background: #fff;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n    border-radius: 3px\n}\n.nav-tabs-custom > .nav-tabs {\n    margin: 0;\n    border-bottom-color: #f4f4f4;\n    border-top-right-radius: 3px;\n    border-top-left-radius: 3px\n}\n.nav-tabs-custom > .nav-tabs > li {\n    border-top: 3px solid transparent;\n    margin-bottom: -2px;\n    margin-right: 5px\n}\n.nav-tabs-custom > .nav-tabs > li > a {\n    color: #444;\n    border-radius: 0\n}\n.nav-tabs-custom > .nav-tabs > li > a.text-muted {\n    color: #999\n}\n.nav-tabs-custom > .nav-tabs > li > a,\n.nav-tabs-custom > .nav-tabs > li > a:hover {\n    background: transparent;\n    margin: 0\n}\n.nav-tabs-custom > .nav-tabs > li > a:hover {\n    color: #999\n}\n.nav-tabs-custom > .nav-tabs > li:not(.active) > a:hover,\n.nav-tabs-custom > .nav-tabs > li:not(.active) > a:focus,\n.nav-tabs-custom > .nav-tabs > li:not(.active) > a:active {\n    border-color: transparent\n}\n.nav-tabs-custom > .nav-tabs > li.active {\n    border-top-color: #3c8dbc\n}\n.nav-tabs-custom > .nav-tabs > li.active > a,\n.nav-tabs-custom > .nav-tabs > li.active:hover > a {\n    background-color: #fff;\n    color: #444\n}\n.nav-tabs-custom > .nav-tabs > li.active > a {\n    border-top-color: transparent;\n    border-left-color: #f4f4f4;\n    border-right-color: #f4f4f4\n}\n.nav-tabs-custom > .nav-tabs > li:first-of-type {\n    margin-left: 0\n}\n.nav-tabs-custom > .nav-tabs > li:first-of-type.active > a {\n    border-left-color: transparent\n}\n.nav-tabs-custom > .nav-tabs.pull-right {\n    float: none !important\n}\n.nav-tabs-custom > .nav-tabs.pull-right > li {\n    float: right\n}\n.nav-tabs-custom > .nav-tabs.pull-right > li:first-of-type {\n    margin-right: 0\n}\n.nav-tabs-custom > .nav-tabs.pull-right > li:first-of-type > a {\n    border-left-width: 1px\n}\n.nav-tabs-custom > .nav-tabs.pull-right > li:first-of-type.active > a {\n    border-left-color: #f4f4f4;\n    border-right-color: transparent\n}\n.nav-tabs-custom > .nav-tabs > li.header {\n    line-height: 35px;\n    padding: 0 10px;\n    font-size: 20px;\n    color: #444\n}\n.nav-tabs-custom > .nav-tabs > li.header > .fa,\n.nav-tabs-custom > .nav-tabs > li.header > .glyphicon,\n.nav-tabs-custom > .nav-tabs > li.header > .ion {\n    margin-right: 5px\n}\n.nav-tabs-custom > .tab-content {\n    background: #fff;\n    padding: 10px;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px\n}\n.nav-tabs-custom .dropdown.open > a:active,\n.nav-tabs-custom .dropdown.open > a:focus {\n    background: transparent;\n    color: #999\n}\n.nav-tabs-custom.tab-primary > .nav-tabs > li.active {\n    border-top-color: #3c8dbc\n}\n.nav-tabs-custom.tab-info > .nav-tabs > li.active {\n    border-top-color: #00c0ef\n}\n.nav-tabs-custom.tab-danger > .nav-tabs > li.active {\n    border-top-color: #dd4b39\n}\n.nav-tabs-custom.tab-warning > .nav-tabs > li.active {\n    border-top-color: #f39c12\n}\n.nav-tabs-custom.tab-success > .nav-tabs > li.active {\n    border-top-color: #00a65a\n}\n.nav-tabs-custom.tab-default > .nav-tabs > li.active {\n    border-top-color: #d2d6de\n}\n.pagination > li > a {\n    background: #fafafa;\n    color: #666\n}\n.pagination.pagination-flat > li > a {\n    border-radius: 0 !important\n}\n.products-list {\n    list-style: none;\n    margin: 0;\n    padding: 0\n}\n.products-list > .item {\n    border-radius: 3px;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n    padding: 10px 0;\n    background: #fff\n}\n.products-list > .item:before,\n.products-list > .item:after {\n    content: \" \";\n    display: table\n}\n.products-list > .item:after {\n    clear: both\n}\n.products-list .product-img {\n    float: left\n}\n.products-list .product-img img {\n    width: 50px;\n    height: 50px\n}\n.products-list .product-info {\n    margin-left: 60px\n}\n.products-list .product-title {\n    font-weight: 600\n}\n.products-list .product-description {\n    display: block;\n    color: #999;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis\n}\n.product-list-in-box > .item {\n    box-shadow: none;\n    border-radius: 0;\n    border-bottom: 1px solid #f4f4f4\n}\n.product-list-in-box > .item:last-of-type {\n    border-bottom-width: 0\n}\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n    border-top: 1px solid #f4f4f4\n}\n.table > thead > tr > th {\n    border-bottom: 2px solid #f4f4f4\n}\n.table tr td .progress {\n    margin-top: 5px\n}\n.table-bordered {\n    border: 1px solid #f4f4f4\n}\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n    border: 1px solid #f4f4f4\n}\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n    border-bottom-width: 2px\n}\n.table.no-border,\n.table.no-border td,\n.table.no-border th {\n    border: 0\n}\ntable.text-center,\ntable.text-center td,\ntable.text-center th {\n    text-align: center\n}\n.table.align th {\n    text-align: left\n}\n.table.align td {\n    text-align: right\n}\n.label-default {\n    background-color: #d2d6de;\n    color: #444\n}\n.direct-chat .box-body {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n    position: relative;\n    overflow-x: hidden;\n    padding: 0\n}\n.direct-chat.chat-pane-open .direct-chat-contacts {\n    transform: translate(0, 0)\n}\n.direct-chat-messages {\n    transform: translate(0, 0);\n    padding: 10px;\n    height: 574px;\n    overflow: auto\n}\n.direct-chat-msg{\n    position: relative;\n}\n.direct-chat-msg,\n.direct-chat-text {\n    display: block\n}\n.direct-chat-msg {\n    margin-bottom: 10px\n}\n.direct-chat-msg:before,\n.direct-chat-msg:after {\n    content: \" \";\n    display: table\n}\n.direct-chat-msg:after {\n    clear: both\n}\n.direct-chat-messages,\n.direct-chat-contacts {\n    transition: transform .5s ease-in-out\n}\n.direct-chat-text {\n    border-radius: 0 5px 5px 5px;\n    position: relative;\n    padding: 5px 10px;\n    /* background: #d2d6de;*/\n    border: 1px solid #419BF9;\n    margin: 5px 0 0 50px;\n    color: #8B878D;\n}\n\n/*\n    .direct-chat-text:after,\n    .direct-chat-text:before {\n        position: absolute;\n        right: 100%;\n        top: 15px;\n        border: solid transparent;\n        border-right-color: #d2d6de;\n        content: ' ';\n        height: 0;\n        width: 0;\n        pointer-events: none\n    }*/\n.direct-chat-text:after {\n    border-width: 5px;\n    margin-top: -5px\n}\n.direct-chat-text:before {\n    border-width: 6px;\n    margin-top: -6px\n}\n.right .direct-chat-text {\n    margin-right: 50px;\n    margin-left: 0\n}\n.right .direct-chat-text:after,\n.right .direct-chat-text:before {\n    right: auto;\n    left: 100%;\n    border-right-color: transparent;\n    border-left-color: #d2d6de\n}\n.direct-chat-img {\n    border-radius: 50%;\n    float: left;\n    width: 40px;\n    height: 40px\n}\n.right .direct-chat-img {\n    float: right\n}\n.direct-chat-info {\n    display: block;\n    margin-bottom: 2px;\n    font-size: 12px\n}\n.direct-chat-name {\n    font-weight: 600\n}\n.direct-chat-timestamp {\n    color: #999\n}\n.direct-chat-contacts-open .direct-chat-contacts {\n    transform: translate(0, 0)\n}\n.direct-chat-contacts {\n    transform: translate(101%, 0);\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    height: 250px;\n    width: 100%;\n    background: #222d32;\n    color: #fff;\n    overflow: auto\n}\n.contacts-list > li {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n    padding: 10px;\n    margin: 0\n}\n.contacts-list > li:before,\n.contacts-list > li:after {\n    content: \" \";\n    display: table\n}\n.contacts-list > li:after {\n    clear: both\n}\n.contacts-list > li:last-of-type {\n    border-bottom: none\n}\n.contacts-list-img {\n    border-radius: 50%;\n    width: 40px;\n    float: left\n}\n.contacts-list-info {\n    margin-left: 45px;\n    color: #fff\n}\n.contacts-list-name,\n.contacts-list-status {\n    display: block\n}\n.contacts-list-name {\n    font-weight: 600\n}\n.contacts-list-status {\n    font-size: 12px\n}\n.contacts-list-date {\n    color: #aaa;\n    font-weight: normal\n}\n.contacts-list-msg {\n    color: #999\n}\n.direct-chat-danger .right > .direct-chat-text {\n    background: #dd4b39;\n    border-color: #dd4b39;\n    color: #fff\n}\n.direct-chat-danger .right > .direct-chat-text:after,\n.direct-chat-danger .right > .direct-chat-text:before {\n    border-left-color: #dd4b39\n}\n.direct-chat-primary .right > .direct-chat-text {\n\n    border-color: #E8E8E8;\n    border-radius: 5px 5px 0px 5px;\n}\n.direct-chat-primary .right > .direct-chat-text:after,\n.direct-chat-primary .right > .direct-chat-text:before {\n    border-left-color: #3c8dbc;\n}\n.direct-chat-warning .right > .direct-chat-text {\n    background: #f39c12;\n    border-color: #f39c12;\n    color: #fff\n}\n.direct-chat-warning .right > .direct-chat-text:after,\n.direct-chat-warning .right > .direct-chat-text:before {\n    border-left-color: #f39c12\n}\n.direct-chat-info .right > .direct-chat-text {\n    background: #00c0ef;\n    border-color: #00c0ef;\n    color: #fff\n}\n.direct-chat-info .right > .direct-chat-text:after,\n.direct-chat-info .right > .direct-chat-text:before {\n    border-left-color: #00c0ef\n}\n.direct-chat-success .right > .direct-chat-text {\n    background: #00a65a;\n    border-color: #00a65a;\n    color: #fff\n}\n.direct-chat-success .right > .direct-chat-text:after,\n.direct-chat-success .right > .direct-chat-text:before {\n    border-left-color: #00a65a\n}\n.users-list > li {\n    width: 25%;\n    float: left;\n    padding: 10px;\n    text-align: center\n}\n.users-list > li img {\n    border-radius: 50%;\n    max-width: 100%;\n    height: auto\n}\n.users-list > li > a:hover,\n.users-list > li > a:hover .users-list-name {\n    color: #999\n}\n.users-list-name,\n.users-list-date {\n    display: block\n}\n.users-list-name {\n    font-weight: 600;\n    color: #444;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis\n}\n.users-list-date {\n    color: #999;\n    font-size: 12px\n}\n.carousel-control.left,\n.carousel-control.right {\n    background-image: none\n}\n.carousel-control > .fa {\n    font-size: 40px;\n    position: absolute;\n    top: 50%;\n    z-index: 5;\n    display: inline-block;\n    margin-top: -20px\n}\n.modal {\n    background: rgba(0, 0, 0, 0.3)\n}\n.modal-content {\n    border-radius: 0;\n    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.125);\n    border: 0\n}\n@media (min-width: 768px) {\n.modal-content {\n        box-shadow: 0 2px 3px rgba(0, 0, 0, 0.125)\n}\n}\n.modal-header {\n    border-bottom-color: #f4f4f4\n}\n.modal-footer {\n    border-top-color: #f4f4f4\n}\n.modal-primary .modal-header,\n.modal-primary .modal-footer {\n    border-color: #307095\n}\n.modal-warning .modal-header,\n.modal-warning .modal-footer {\n    border-color: #c87f0a\n}\n.modal-info .modal-header,\n.modal-info .modal-footer {\n    border-color: #0097bc\n}\n.modal-success .modal-header,\n.modal-success .modal-footer {\n    border-color: #00733e\n}\n.modal-danger .modal-header,\n.modal-danger .modal-footer {\n    border-color: #c23321\n}\n.box-widget {\n    border: none;\n    position: relative\n}\n.widget-user .widget-user-header {\n    padding: 20px;\n    height: 120px;\n    border-top-right-radius: 3px;\n    border-top-left-radius: 3px\n}\n.widget-user .widget-user-username {\n    margin-top: 0;\n    margin-bottom: 5px;\n    font-size: 25px;\n    font-weight: 300;\n    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2)\n}\n.widget-user .widget-user-desc {\n    margin-top: 0\n}\n.widget-user .widget-user-image {\n    position: absolute;\n    top: 65px;\n    left: 50%;\n    margin-left: -45px\n}\n.widget-user .widget-user-image > img {\n    width: 90px;\n    height: auto;\n    border: 3px solid #fff\n}\n.widget-user .box-footer {\n    padding-top: 30px\n}\n.widget-user-2 .widget-user-header {\n    padding: 20px;\n    border-top-right-radius: 3px;\n    border-top-left-radius: 3px\n}\n.widget-user-2 .widget-user-username {\n    margin-top: 5px;\n    margin-bottom: 5px;\n    font-size: 25px;\n    font-weight: 300\n}\n.widget-user-2 .widget-user-desc {\n    margin-top: 0\n}\n.widget-user-2 .widget-user-username,\n.widget-user-2 .widget-user-desc {\n    margin-left: 75px\n}\n.widget-user-2 .widget-user-image > img {\n    width: 65px;\n    height: auto;\n    float: left\n}\n.mailbox-messages > .table {\n    margin: 0\n}\n.mailbox-controls {\n    padding: 5px\n}\n.mailbox-controls.with-border {\n    border-bottom: 1px solid #f4f4f4\n}\n.mailbox-read-info {\n    border-bottom: 1px solid #f4f4f4;\n    padding: 10px\n}\n.mailbox-read-info h3 {\n    font-size: 20px;\n    margin: 0\n}\n.mailbox-read-info h5 {\n    margin: 0;\n    padding: 5px 0 0 0\n}\n.mailbox-read-time {\n    color: #999;\n    font-size: 13px\n}\n.mailbox-read-message {\n    padding: 10px\n}\n.mailbox-attachments li {\n    float: left;\n    width: 200px;\n    border: 1px solid #eee;\n    margin-bottom: 10px;\n    margin-right: 10px\n}\n.mailbox-attachment-name {\n    font-weight: bold;\n    color: #666\n}\n.mailbox-attachment-icon,\n.mailbox-attachment-info,\n.mailbox-attachment-size {\n    display: block\n}\n.mailbox-attachment-info {\n    padding: 10px;\n    background: #f4f4f4\n}\n.mailbox-attachment-size {\n    color: #999;\n    font-size: 12px\n}\n.mailbox-attachment-icon {\n    text-align: center;\n    font-size: 65px;\n    color: #666;\n    padding: 20px 10px\n}\n.mailbox-attachment-icon.has-img {\n    padding: 0\n}\n.mailbox-attachment-icon.has-img > img {\n    max-width: 100%;\n    height: auto\n}\n.lockscreen {\n    background: #d2d6de\n}\n.lockscreen-logo {\n    font-size: 35px;\n    text-align: center;\n    margin-bottom: 25px;\n    font-weight: 300\n}\n.lockscreen-logo a {\n    color: #444\n}\n.lockscreen-wrapper {\n    max-width: 400px;\n    margin: 0 auto;\n    margin-top: 10%\n}\n.lockscreen .lockscreen-name {\n    text-align: center;\n    font-weight: 600\n}\n.lockscreen-item {\n    border-radius: 4px;\n    padding: 0;\n    background: #fff;\n    position: relative;\n    margin: 10px auto 30px auto;\n    width: 290px\n}\n.lockscreen-image {\n    border-radius: 50%;\n    position: absolute;\n    left: -10px;\n    top: -25px;\n    background: #fff;\n    padding: 5px;\n    z-index: 10\n}\n.lockscreen-image > img {\n    border-radius: 50%;\n    width: 70px;\n    height: 70px\n}\n.lockscreen-credentials {\n    margin-left: 70px\n}\n.lockscreen-credentials .form-control {\n    border: 0\n}\n.lockscreen-credentials .btn {\n    background-color: #fff;\n    border: 0;\n    padding: 0 10px\n}\n.lockscreen-footer {\n    margin-top: 10px\n}\n.login-logo,\n.register-logo {\n    font-size: 35px;\n    text-align: center;\n    margin-bottom: 25px;\n    font-weight: 300\n}\n.login-logo a,\n.register-logo a {\n    color: #444\n}\n.login-page,\n.register-page {\n    background: #d2d6de\n}\n.login-box,\n.register-box {\n    width: 360px;\n    margin: 7% auto\n}\n@media (max-width: 768px) {\n.login-box,\n    .register-box {\n        width: 90%;\n        margin-top: 20px\n}\n}\n.login-box-body,\n.register-box-body {\n    background: #fff;\n    padding: 20px;\n    border-top: 0;\n    color: #666\n}\n.login-box-body .form-control-feedback,\n.register-box-body .form-control-feedback {\n    color: #777\n}\n.login-box-msg,\n.register-box-msg {\n    margin: 0;\n    text-align: center;\n    padding: 0 20px 20px 20px\n}\n.social-auth-links {\n    margin: 10px 0\n}\n.error-page {\n    width: 600px;\n    margin: 20px auto 0 auto\n}\n@media (max-width: 991px) {\n.error-page {\n        width: 100%\n}\n}\n.error-page > .headline {\n    float: left;\n    font-size: 100px;\n    font-weight: 300\n}\n@media (max-width: 991px) {\n.error-page > .headline {\n        float: none;\n        text-align: center\n}\n}\n.error-page > .error-content {\n    margin-left: 190px;\n    display: block\n}\n@media (max-width: 991px) {\n.error-page > .error-content {\n        margin-left: 0\n}\n}\n.error-page > .error-content > h3 {\n    font-weight: 300;\n    font-size: 25px\n}\n@media (max-width: 991px) {\n.error-page > .error-content > h3 {\n        text-align: center\n}\n}\n.invoice {\n    position: relative;\n    background: #fff;\n    border: 1px solid #f4f4f4;\n    padding: 20px;\n    margin: 10px 25px\n}\n.invoice-title {\n    margin-top: 0\n}\n.profile-user-img {\n    margin: 0 auto;\n    width: 100px;\n    padding: 3px;\n    border: 3px solid #d2d6de\n}\n.profile-username {\n    font-size: 21px;\n    margin-top: 5px\n}\n.post {\n    border-bottom: 1px solid #d2d6de;\n    margin-bottom: 15px;\n    padding-bottom: 15px;\n    color: #666\n}\n.post:last-of-type {\n    border-bottom: 0;\n    margin-bottom: 0;\n    padding-bottom: 0\n}\n.post .user-block {\n    margin-bottom: 15px\n}\n.btn-social {\n    position: relative;\n    padding-left: 44px;\n    text-align: left;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis\n}\n.btn-social > :first-child {\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    width: 32px;\n    line-height: 34px;\n    font-size: 1.6em;\n    text-align: center;\n    border-right: 1px solid rgba(0, 0, 0, 0.2)\n}\n.btn-social.btn-lg {\n    padding-left: 61px\n}\n.btn-social.btn-lg > :first-child {\n    line-height: 45px;\n    width: 45px;\n    font-size: 1.8em\n}\n.btn-social.btn-sm {\n    padding-left: 38px\n}\n.btn-social.btn-sm > :first-child {\n    line-height: 28px;\n    width: 28px;\n    font-size: 1.4em\n}\n.btn-social.btn-xs {\n    padding-left: 30px\n}\n.btn-social.btn-xs > :first-child {\n    line-height: 20px;\n    width: 20px;\n    font-size: 1.2em\n}\n.btn-social-icon {\n    position: relative;\n    padding-left: 44px;\n    text-align: left;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    height: 34px;\n    width: 34px;\n    padding: 0\n}\n.btn-social-icon > :first-child {\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    width: 32px;\n    line-height: 34px;\n    font-size: 1.6em;\n    text-align: center;\n    border-right: 1px solid rgba(0, 0, 0, 0.2)\n}\n.btn-social-icon.btn-lg {\n    padding-left: 61px\n}\n.btn-social-icon.btn-lg > :first-child {\n    line-height: 45px;\n    width: 45px;\n    font-size: 1.8em\n}\n.btn-social-icon.btn-sm {\n    padding-left: 38px\n}\n.btn-social-icon.btn-sm > :first-child {\n    line-height: 28px;\n    width: 28px;\n    font-size: 1.4em\n}\n.btn-social-icon.btn-xs {\n    padding-left: 30px\n}\n.btn-social-icon.btn-xs > :first-child {\n    line-height: 20px;\n    width: 20px;\n    font-size: 1.2em\n}\n.btn-social-icon > :first-child {\n    border: none;\n    text-align: center;\n    width: 100%\n}\n.btn-social-icon.btn-lg {\n    height: 45px;\n    width: 45px;\n    padding-left: 0;\n    padding-right: 0\n}\n.btn-social-icon.btn-sm {\n    height: 30px;\n    width: 30px;\n    padding-left: 0;\n    padding-right: 0\n}\n.btn-social-icon.btn-xs {\n    height: 22px;\n    width: 22px;\n    padding-left: 0;\n    padding-right: 0\n}\n.btn-adn {\n    color: #fff;\n    background-color: #d87a68;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-adn:focus,\n.btn-adn.focus {\n    color: #fff;\n    background-color: #ce563f;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-adn:hover {\n    color: #fff;\n    background-color: #ce563f;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-adn:active,\n.btn-adn.active,\n.open > .dropdown-toggle.btn-adn {\n    color: #fff;\n    background-color: #ce563f;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-adn:active,\n.btn-adn.active,\n.open > .dropdown-toggle.btn-adn {\n    background-image: none\n}\n.btn-adn .badge {\n    color: #d87a68;\n    background-color: #fff\n}\n.btn-bitbucket {\n    color: #fff;\n    background-color: #205081;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-bitbucket:focus,\n.btn-bitbucket.focus {\n    color: #fff;\n    background-color: #163758;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-bitbucket:hover {\n    color: #fff;\n    background-color: #163758;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-bitbucket:active,\n.btn-bitbucket.active,\n.open > .dropdown-toggle.btn-bitbucket {\n    color: #fff;\n    background-color: #163758;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-bitbucket:active,\n.btn-bitbucket.active,\n.open > .dropdown-toggle.btn-bitbucket {\n    background-image: none\n}\n.btn-bitbucket .badge {\n    color: #205081;\n    background-color: #fff\n}\n.btn-dropbox {\n    color: #fff;\n    background-color: #1087dd;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-dropbox:focus,\n.btn-dropbox.focus {\n    color: #fff;\n    background-color: #0d6aad;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-dropbox:hover {\n    color: #fff;\n    background-color: #0d6aad;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-dropbox:active,\n.btn-dropbox.active,\n.open > .dropdown-toggle.btn-dropbox {\n    color: #fff;\n    background-color: #0d6aad;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-dropbox:active,\n.btn-dropbox.active,\n.open > .dropdown-toggle.btn-dropbox {\n    background-image: none\n}\n.btn-dropbox .badge {\n    color: #1087dd;\n    background-color: #fff\n}\n.btn-facebook {\n    color: #fff;\n    background-color: #3b5998;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-facebook:focus,\n.btn-facebook.focus {\n    color: #fff;\n    background-color: #2d4373;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-facebook:hover {\n    color: #fff;\n    background-color: #2d4373;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-facebook:active,\n.btn-facebook.active,\n.open > .dropdown-toggle.btn-facebook {\n    color: #fff;\n    background-color: #2d4373;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-facebook:active,\n.btn-facebook.active,\n.open > .dropdown-toggle.btn-facebook {\n    background-image: none\n}\n.btn-facebook .badge {\n    color: #3b5998;\n    background-color: #fff\n}\n.btn-flickr {\n    color: #fff;\n    background-color: #ff0084;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-flickr:focus,\n.btn-flickr.focus {\n    color: #fff;\n    background-color: #cc006a;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-flickr:hover {\n    color: #fff;\n    background-color: #cc006a;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-flickr:active,\n.btn-flickr.active,\n.open > .dropdown-toggle.btn-flickr {\n    color: #fff;\n    background-color: #cc006a;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-flickr:active,\n.btn-flickr.active,\n.open > .dropdown-toggle.btn-flickr {\n    background-image: none\n}\n.btn-flickr .badge {\n    color: #ff0084;\n    background-color: #fff\n}\n.btn-foursquare {\n    color: #fff;\n    background-color: #f94877;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-foursquare:focus,\n.btn-foursquare.focus {\n    color: #fff;\n    background-color: #f71752;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-foursquare:hover {\n    color: #fff;\n    background-color: #f71752;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-foursquare:active,\n.btn-foursquare.active,\n.open > .dropdown-toggle.btn-foursquare {\n    color: #fff;\n    background-color: #f71752;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-foursquare:active,\n.btn-foursquare.active,\n.open > .dropdown-toggle.btn-foursquare {\n    background-image: none\n}\n.btn-foursquare .badge {\n    color: #f94877;\n    background-color: #fff\n}\n.btn-github {\n    color: #fff;\n    background-color: #444;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-github:focus,\n.btn-github.focus {\n    color: #fff;\n    background-color: #2b2b2b;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-github:hover {\n    color: #fff;\n    background-color: #2b2b2b;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-github:active,\n.btn-github.active,\n.open > .dropdown-toggle.btn-github {\n    color: #fff;\n    background-color: #2b2b2b;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-github:active,\n.btn-github.active,\n.open > .dropdown-toggle.btn-github {\n    background-image: none\n}\n.btn-github .badge {\n    color: #444;\n    background-color: #fff\n}\n.btn-google {\n    color: #fff;\n    background-color: #dd4b39;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-google:focus,\n.btn-google.focus {\n    color: #fff;\n    background-color: #c23321;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-google:hover {\n    color: #fff;\n    background-color: #c23321;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-google:active,\n.btn-google.active,\n.open > .dropdown-toggle.btn-google {\n    color: #fff;\n    background-color: #c23321;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-google:active,\n.btn-google.active,\n.open > .dropdown-toggle.btn-google {\n    background-image: none\n}\n.btn-google .badge {\n    color: #dd4b39;\n    background-color: #fff\n}\n.btn-instagram {\n    color: #fff;\n    background-color: #3f729b;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-instagram:focus,\n.btn-instagram.focus {\n    color: #fff;\n    background-color: #305777;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-instagram:hover {\n    color: #fff;\n    background-color: #305777;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-instagram:active,\n.btn-instagram.active,\n.open > .dropdown-toggle.btn-instagram {\n    color: #fff;\n    background-color: #305777;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-instagram:active,\n.btn-instagram.active,\n.open > .dropdown-toggle.btn-instagram {\n    background-image: none\n}\n.btn-instagram .badge {\n    color: #3f729b;\n    background-color: #fff\n}\n.btn-linkedin {\n    color: #fff;\n    background-color: #007bb6;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-linkedin:focus,\n.btn-linkedin.focus {\n    color: #fff;\n    background-color: #005983;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-linkedin:hover {\n    color: #fff;\n    background-color: #005983;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-linkedin:active,\n.btn-linkedin.active,\n.open > .dropdown-toggle.btn-linkedin {\n    color: #fff;\n    background-color: #005983;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-linkedin:active,\n.btn-linkedin.active,\n.open > .dropdown-toggle.btn-linkedin {\n    background-image: none\n}\n.btn-linkedin .badge {\n    color: #007bb6;\n    background-color: #fff\n}\n.btn-microsoft {\n    color: #fff;\n    background-color: #2672ec;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-microsoft:focus,\n.btn-microsoft.focus {\n    color: #fff;\n    background-color: #125acd;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-microsoft:hover {\n    color: #fff;\n    background-color: #125acd;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-microsoft:active,\n.btn-microsoft.active,\n.open > .dropdown-toggle.btn-microsoft {\n    color: #fff;\n    background-color: #125acd;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-microsoft:active,\n.btn-microsoft.active,\n.open > .dropdown-toggle.btn-microsoft {\n    background-image: none\n}\n.btn-microsoft .badge {\n    color: #2672ec;\n    background-color: #fff\n}\n.btn-openid {\n    color: #fff;\n    background-color: #f7931e;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-openid:focus,\n.btn-openid.focus {\n    color: #fff;\n    background-color: #da7908;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-openid:hover {\n    color: #fff;\n    background-color: #da7908;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-openid:active,\n.btn-openid.active,\n.open > .dropdown-toggle.btn-openid {\n    color: #fff;\n    background-color: #da7908;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-openid:active,\n.btn-openid.active,\n.open > .dropdown-toggle.btn-openid {\n    background-image: none\n}\n.btn-openid .badge {\n    color: #f7931e;\n    background-color: #fff\n}\n.btn-pinterest {\n    color: #fff;\n    background-color: #cb2027;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-pinterest:focus,\n.btn-pinterest.focus {\n    color: #fff;\n    background-color: #9f191f;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-pinterest:hover {\n    color: #fff;\n    background-color: #9f191f;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-pinterest:active,\n.btn-pinterest.active,\n.open > .dropdown-toggle.btn-pinterest {\n    color: #fff;\n    background-color: #9f191f;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-pinterest:active,\n.btn-pinterest.active,\n.open > .dropdown-toggle.btn-pinterest {\n    background-image: none\n}\n.btn-pinterest .badge {\n    color: #cb2027;\n    background-color: #fff\n}\n.btn-reddit {\n    color: #000;\n    background-color: #eff7ff;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-reddit:focus,\n.btn-reddit.focus {\n    color: #000;\n    background-color: #bcddff;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-reddit:hover {\n    color: #000;\n    background-color: #bcddff;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-reddit:active,\n.btn-reddit.active,\n.open > .dropdown-toggle.btn-reddit {\n    color: #000;\n    background-color: #bcddff;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-reddit:active,\n.btn-reddit.active,\n.open > .dropdown-toggle.btn-reddit {\n    background-image: none\n}\n.btn-reddit .badge {\n    color: #eff7ff;\n    background-color: #000\n}\n.btn-soundcloud {\n    color: #fff;\n    background-color: #f50;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-soundcloud:focus,\n.btn-soundcloud.focus {\n    color: #fff;\n    background-color: #c40;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-soundcloud:hover {\n    color: #fff;\n    background-color: #c40;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-soundcloud:active,\n.btn-soundcloud.active,\n.open > .dropdown-toggle.btn-soundcloud {\n    color: #fff;\n    background-color: #c40;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-soundcloud:active,\n.btn-soundcloud.active,\n.open > .dropdown-toggle.btn-soundcloud {\n    background-image: none\n}\n.btn-soundcloud .badge {\n    color: #f50;\n    background-color: #fff\n}\n.btn-tumblr {\n    color: #fff;\n    background-color: #2c4762;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-tumblr:focus,\n.btn-tumblr.focus {\n    color: #fff;\n    background-color: #1c2d3f;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-tumblr:hover {\n    color: #fff;\n    background-color: #1c2d3f;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-tumblr:active,\n.btn-tumblr.active,\n.open > .dropdown-toggle.btn-tumblr {\n    color: #fff;\n    background-color: #1c2d3f;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-tumblr:active,\n.btn-tumblr.active,\n.open > .dropdown-toggle.btn-tumblr {\n    background-image: none\n}\n.btn-tumblr .badge {\n    color: #2c4762;\n    background-color: #fff\n}\n.btn-twitter {\n    color: #fff;\n    background-color: #55acee;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-twitter:focus,\n.btn-twitter.focus {\n    color: #fff;\n    background-color: #2795e9;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-twitter:hover {\n    color: #fff;\n    background-color: #2795e9;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-twitter:active,\n.btn-twitter.active,\n.open > .dropdown-toggle.btn-twitter {\n    color: #fff;\n    background-color: #2795e9;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-twitter:active,\n.btn-twitter.active,\n.open > .dropdown-toggle.btn-twitter {\n    background-image: none\n}\n.btn-twitter .badge {\n    color: #55acee;\n    background-color: #fff\n}\n.btn-vimeo {\n    color: #fff;\n    background-color: #1ab7ea;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-vimeo:focus,\n.btn-vimeo.focus {\n    color: #fff;\n    background-color: #1295bf;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-vimeo:hover {\n    color: #fff;\n    background-color: #1295bf;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-vimeo:active,\n.btn-vimeo.active,\n.open > .dropdown-toggle.btn-vimeo {\n    color: #fff;\n    background-color: #1295bf;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-vimeo:active,\n.btn-vimeo.active,\n.open > .dropdown-toggle.btn-vimeo {\n    background-image: none\n}\n.btn-vimeo .badge {\n    color: #1ab7ea;\n    background-color: #fff\n}\n.btn-vk {\n    color: #fff;\n    background-color: #587ea3;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-vk:focus,\n.btn-vk.focus {\n    color: #fff;\n    background-color: #466482;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-vk:hover {\n    color: #fff;\n    background-color: #466482;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-vk:active,\n.btn-vk.active,\n.open > .dropdown-toggle.btn-vk {\n    color: #fff;\n    background-color: #466482;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-vk:active,\n.btn-vk.active,\n.open > .dropdown-toggle.btn-vk {\n    background-image: none\n}\n.btn-vk .badge {\n    color: #587ea3;\n    background-color: #fff\n}\n.btn-yahoo {\n    color: #fff;\n    background-color: #720e9e;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-yahoo:focus,\n.btn-yahoo.focus {\n    color: #fff;\n    background-color: #500a6f;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-yahoo:hover {\n    color: #fff;\n    background-color: #500a6f;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-yahoo:active,\n.btn-yahoo.active,\n.open > .dropdown-toggle.btn-yahoo {\n    color: #fff;\n    background-color: #500a6f;\n    border-color: rgba(0, 0, 0, 0.2)\n}\n.btn-yahoo:active,\n.btn-yahoo.active,\n.open > .dropdown-toggle.btn-yahoo {\n    background-image: none\n}\n.btn-yahoo .badge {\n    color: #720e9e;\n    background-color: #fff\n}\n.fc-button {\n    background: #f4f4f4;\n    background-image: none;\n    color: #444;\n    border-color: #ddd;\n    border-bottom-color: #ddd\n}\n.fc-button:hover,\n.fc-button:active,\n.fc-button.hover {\n    background-color: #e9e9e9\n}\n.fc-header-title h2 {\n    font-size: 15px;\n    line-height: 1.6em;\n    color: #666;\n    margin-left: 10px\n}\n.fc-header-right {\n    padding-right: 10px\n}\n.fc-header-left {\n    padding-left: 10px\n}\n.fc-widget-header {\n    background: #fafafa\n}\n.fc-grid {\n    width: 100%;\n    border: 0\n}\n.fc-widget-header:first-of-type,\n.fc-widget-content:first-of-type {\n    border-left: 0;\n    border-right: 0\n}\n.fc-widget-header:last-of-type,\n.fc-widget-content:last-of-type {\n    border-right: 0\n}\n.fc-toolbar {\n    padding: 10px;\n    margin: 0\n}\n.fc-day-number {\n    font-size: 20px;\n    font-weight: 300;\n    padding-right: 10px\n}\n.fc-color-picker {\n    list-style: none;\n    margin: 0;\n    padding: 0\n}\n.fc-color-picker > li {\n    float: left;\n    font-size: 30px;\n    margin-right: 5px;\n    line-height: 30px\n}\n.fc-color-picker > li .fa {\n    transition: transform linear .3s\n}\n.fc-color-picker > li .fa:hover {\n    transform: rotate(30deg)\n}\n#add-new-event {\n    transition: all linear .3s\n}\n.external-event {\n    padding: 5px 10px;\n    font-weight: bold;\n    margin-bottom: 4px;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);\n    border-radius: 3px;\n    cursor: move\n}\n.external-event:hover {\n    box-shadow: inset 0 0 90px rgba(0, 0, 0, 0.2)\n}\n.select2-container--default.select2-container--focus,\n.select2-selection.select2-container--focus,\n.select2-container--default:focus,\n.select2-selection:focus,\n.select2-container--default:active,\n.select2-selection:active {\n    outline: none\n}\n.select2-container--default .select2-selection--single,\n.select2-selection .select2-selection--single {\n    border: 1px solid #d2d6de;\n    border-radius: 0;\n    padding: 6px 12px;\n    height: 34px\n}\n.select2-container--default.select2-container--open {\n    border-color: #3c8dbc\n}\n.select2-dropdown {\n    border: 1px solid #d2d6de;\n    border-radius: 0\n}\n.select2-container--default .select2-results__option--highlighted[aria-selected] {\n    background-color: #3c8dbc;\n    color: white\n}\n.select2-results__option {\n    padding: 6px 12px;\n    -moz-user-select: none;\n     -ms-user-select: none;\n         user-select: none;\n    -webkit-user-select: none\n}\n.select2-container .select2-selection--single .select2-selection__rendered {\n    padding-left: 0;\n    padding-right: 0;\n    height: auto;\n    margin-top: -4px\n}\n.select2-container[dir=\"rtl\"] .select2-selection--single .select2-selection__rendered {\n    padding-right: 6px;\n    padding-left: 20px\n}\n.select2-container--default .select2-selection--single .select2-selection__arrow {\n    height: 28px;\n    right: 3px\n}\n.select2-container--default .select2-selection--single .select2-selection__arrow b {\n    margin-top: 0\n}\n.select2-dropdown .select2-search__field,\n.select2-search--inline .select2-search__field {\n    border: 1px solid #d2d6de\n}\n.select2-dropdown .select2-search__field:focus,\n.select2-search--inline .select2-search__field:focus {\n    outline: none;\n    border: 1px solid #3c8dbc\n}\n.select2-container--default .select2-results__option[aria-disabled=true] {\n    color: #999\n}\n.select2-container--default .select2-results__option[aria-selected=true] {\n    background-color: #ddd\n}\n.select2-container--default .select2-results__option[aria-selected=true],\n.select2-container--default .select2-results__option[aria-selected=true]:hover {\n    color: #444\n}\n.select2-container--default .select2-selection--multiple {\n    border: 1px solid #d2d6de;\n    border-radius: 0\n}\n.select2-container--default .select2-selection--multiple:focus {\n    border-color: #3c8dbc\n}\n.select2-container--default.select2-container--focus .select2-selection--multiple {\n    border-color: #d2d6de\n}\n.select2-container--default .select2-selection--multiple .select2-selection__choice {\n    background-color: #3c8dbc;\n    border-color: #367fa9;\n    padding: 1px 10px;\n    color: #fff\n}\n.select2-container--default .select2-selection--multiple .select2-selection__choice__remove {\n    margin-right: 5px;\n    color: rgba(255, 255, 255, 0.7)\n}\n.select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover {\n    color: #fff\n}\n.select2-container .select2-selection--single .select2-selection__rendered {\n    padding-right: 10px\n}\n.pad {\n    padding: 10px\n}\n.margin {\n    margin: 10px\n}\n.margin-bottom {\n    margin-bottom: 20px\n}\n.margin-bottom-none {\n    margin-bottom: 0\n}\n.margin-r-5 {\n    margin-right: 5px\n}\n.inline {\n    display: inline\n}\n.description-block {\n    display: block;\n    margin: 10px 0;\n    text-align: center\n}\n.description-block.margin-bottom {\n    margin-bottom: 25px\n}\n.description-block > .description-header {\n    margin: 0;\n    padding: 0;\n    font-weight: 600;\n    font-size: 16px\n}\n.description-block > .description-text {\n    text-transform: uppercase\n}\n.bg-red,\n.bg-yellow,\n.bg-aqua,\n.bg-blue,\n.bg-light-blue,\n.bg-green,\n.bg-navy,\n.bg-teal,\n.bg-olive,\n.bg-lime,\n.bg-orange,\n.bg-fuchsia,\n.bg-purple,\n.bg-maroon,\n.bg-black,\n.bg-red-active,\n.bg-yellow-active,\n.bg-aqua-active,\n.bg-blue-active,\n.bg-light-blue-active,\n.bg-green-active,\n.bg-navy-active,\n.bg-teal-active,\n.bg-olive-active,\n.bg-lime-active,\n.bg-orange-active,\n.bg-fuchsia-active,\n.bg-purple-active,\n.bg-maroon-active,\n.bg-black-active,\n.callout.callout-danger,\n.callout.callout-warning,\n.callout.callout-info,\n.callout.callout-success,\n.alert-success,\n.alert-danger,\n.alert-error,\n.alert-warning,\n.alert-info,\n.label-danger,\n.label-info,\n.label-warning,\n.label-primary,\n.label-success,\n.modal-primary .modal-body,\n.modal-primary .modal-header,\n.modal-primary .modal-footer,\n.modal-warning .modal-body,\n.modal-warning .modal-header,\n.modal-warning .modal-footer,\n.modal-info .modal-body,\n.modal-info .modal-header,\n.modal-info .modal-footer,\n.modal-success .modal-body,\n.modal-success .modal-header,\n.modal-success .modal-footer,\n.modal-danger .modal-body,\n.modal-danger .modal-header,\n.modal-danger .modal-footer {\n    color: #fff !important\n}\n.bg-gray {\n    color: #000;\n    background-color: #d2d6de !important\n}\n.bg-gray-light {\n    background-color: #f7f7f7\n}\n.bg-black {\n    background-color: #111 !important\n}\n.bg-red,\n.callout.callout-danger,\n.alert-danger,\n.alert-error,\n.label-danger,\n.modal-danger .modal-body {\n    background-color: #dd4b39 !important\n}\n.bg-yellow,\n.callout.callout-warning,\n.alert-warning,\n.label-warning,\n.modal-warning .modal-body {\n    background-color: #f39c12 !important\n}\n.bg-aqua,\n.callout.callout-info,\n.alert-info,\n.label-info,\n.modal-info .modal-body {\n    background-color: #00c0ef !important\n}\n.bg-blue {\n    background-color: #0073b7 !important\n}\n.bg-light-blue,\n.label-primary,\n.modal-primary .modal-body {\n    background-color: #3c8dbc !important\n}\n.bg-green,\n.callout.callout-success,\n.alert-success,\n.label-success,\n.modal-success .modal-body {\n    background-color: #00a65a !important\n}\n.bg-navy {\n    background-color: #001f3f !important\n}\n.bg-teal {\n    background-color: #39cccc !important\n}\n.bg-olive {\n    background-color: #3d9970 !important\n}\n.bg-lime {\n    background-color: #01ff70 !important\n}\n.bg-orange {\n    background-color: #ff851b !important\n}\n.bg-fuchsia {\n    background-color: #f012be !important\n}\n.bg-purple {\n    background-color: #605ca8 !important\n}\n.bg-maroon {\n    background-color: #d81b60 !important\n}\n.bg-gray-active {\n    color: #000;\n    background-color: #b5bbc8 !important\n}\n.bg-black-active {\n    background-color: #000 !important\n}\n.bg-red-active,\n.modal-danger .modal-header,\n.modal-danger .modal-footer {\n    background-color: #d33724 !important\n}\n.bg-yellow-active,\n.modal-warning .modal-header,\n.modal-warning .modal-footer {\n    background-color: #db8b0b !important\n}\n.bg-aqua-active,\n.modal-info .modal-header,\n.modal-info .modal-footer {\n    background-color: #00a7d0 !important\n}\n.bg-blue-active {\n    background-color: #005384 !important\n}\n.bg-light-blue-active,\n.modal-primary .modal-header,\n.modal-primary .modal-footer {\n    background-color: #357ca5 !important\n}\n.bg-green-active,\n.modal-success .modal-header,\n.modal-success .modal-footer {\n    background-color: #008d4c !important\n}\n.bg-navy-active {\n    background-color: #001a35 !important\n}\n.bg-teal-active {\n    background-color: #30bbbb !important\n}\n.bg-olive-active {\n    background-color: #368763 !important\n}\n.bg-lime-active {\n    background-color: #00e765 !important\n}\n.bg-orange-active {\n    background-color: #ff7701 !important\n}\n.bg-fuchsia-active {\n    background-color: #db0ead !important\n}\n.bg-purple-active {\n    background-color: #555299 !important\n}\n.bg-maroon-active {\n    background-color: #ca195a !important\n}\n[class^=\"bg-\"].disabled {\n    opacity: .65;\n    filter: alpha(opacity=65)\n}\n.text-red {\n    color: #dd4b39 !important\n}\n.text-yellow {\n    color: #f39c12 !important\n}\n.text-aqua {\n    color: #00c0ef !important\n}\n.text-blue {\n    color: #0073b7 !important\n}\n.text-black {\n    color: #111 !important\n}\n.text-light-blue {\n    color: #3c8dbc !important\n}\n.text-green {\n    color: #00a65a !important\n}\n.text-gray {\n    color: #d2d6de !important\n}\n.text-navy {\n    color: #001f3f !important\n}\n.text-teal {\n    color: #39cccc !important\n}\n.text-olive {\n    color: #3d9970 !important\n}\n.text-lime {\n    color: #01ff70 !important\n}\n.text-orange {\n    color: #ff851b !important\n}\n.text-fuchsia {\n    color: #f012be !important\n}\n.text-purple {\n    color: #605ca8 !important\n}\n.text-maroon {\n    color: #d81b60 !important\n}\n.link-muted {\n    color: #7a869d\n}\n.link-muted:hover,\n.link-muted:focus {\n    color: #606c84\n}\n.link-black {\n    color: #666\n}\n.link-black:hover,\n.link-black:focus {\n    color: #999\n}\n.hide {\n    display: none !important\n}\n.no-border {\n    border: 0 !important\n}\n.no-padding {\n    padding: 0 !important\n}\n.no-margin {\n    margin: 0 !important\n}\n.no-shadow {\n    box-shadow: none !important\n}\n.list-unstyled,\n.chart-legend,\n.contacts-list,\n.users-list,\n.mailbox-attachments {\n    list-style: none;\n    margin: 0;\n    padding: 0\n}\n.list-group-unbordered > .list-group-item {\n    border-left: 0;\n    border-right: 0;\n    border-radius: 0;\n    padding-left: 0;\n    padding-right: 0\n}\n.flat {\n    border-radius: 0 !important\n}\n.text-bold,\n.text-bold.table td,\n.text-bold.table th {\n    font-weight: 700\n}\n.text-sm {\n    font-size: 12px\n}\n.jqstooltip {\n    padding: 5px !important;\n    width: auto !important;\n    height: auto !important\n}\n.bg-teal-gradient {\n    background: #39cccc !important;\n    background: -o-linear-gradient(#7adddd, #39cccc) !important;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#7adddd', endColorstr='#39cccc', GradientType=0) !important;\n    color: #fff\n}\n.bg-light-blue-gradient {\n    background: #3c8dbc !important;\n    background: -o-linear-gradient(#67a8ce, #3c8dbc) !important;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#67a8ce', endColorstr='#3c8dbc', GradientType=0) !important;\n    color: #fff\n}\n.bg-blue-gradient {\n    background: #0073b7 !important;\n    background: -o-linear-gradient(#0089db, #0073b7) !important;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0089db', endColorstr='#0073b7', GradientType=0) !important;\n    color: #fff\n}\n.bg-aqua-gradient {\n    background: #00c0ef !important;\n    background: -o-linear-gradient(#14d1ff, #00c0ef) !important;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#14d1ff', endColorstr='#00c0ef', GradientType=0) !important;\n    color: #fff\n}\n.bg-yellow-gradient {\n    background: #f39c12 !important;\n    background: -o-linear-gradient(#f7bc60, #f39c12) !important;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f7bc60', endColorstr='#f39c12', GradientType=0) !important;\n    color: #fff\n}\n.bg-purple-gradient {\n    background: #605ca8 !important;\n    background: -o-linear-gradient(#9491c4, #605ca8) !important;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#9491c4', endColorstr='#605ca8', GradientType=0) !important;\n    color: #fff\n}\n.bg-green-gradient {\n    background: #00a65a !important;\n    background: -o-linear-gradient(#00ca6d, #00a65a) !important;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00ca6d', endColorstr='#00a65a', GradientType=0) !important;\n    color: #fff\n}\n.bg-red-gradient {\n    background: #dd4b39 !important;\n    background: -o-linear-gradient(#e47365, #dd4b39) !important;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e47365', endColorstr='#dd4b39', GradientType=0) !important;\n    color: #fff\n}\n.bg-black-gradient {\n    background: #111 !important;\n    background: -o-linear-gradient(#2b2b2b, #111) !important;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#2b2b2b', endColorstr='#111111', GradientType=0) !important;\n    color: #fff\n}\n.bg-maroon-gradient {\n    background: #d81b60 !important;\n    background: -o-linear-gradient(#e73f7c, #d81b60) !important;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e73f7c', endColorstr='#d81b60', GradientType=0) !important;\n    color: #fff\n}\n.description-block .description-icon {\n    font-size: 16px\n}\n.no-pad-top {\n    padding-top: 0\n}\n.position-static {\n    position: static !important\n}\n.list-header {\n    font-size: 15px;\n    padding: 10px 4px;\n    font-weight: bold;\n    color: #666\n}\n.list-seperator {\n    height: 1px;\n    background: #f4f4f4;\n    margin: 15px 0 9px 0\n}\n.list-link > a {\n    padding: 4px;\n    color: #777\n}\n.list-link > a:hover {\n    color: #222\n}\n.font-light {\n    font-weight: 300\n}\n.user-block:before,\n.user-block:after {\n    content: \" \";\n    display: table\n}\n.user-block:after {\n    clear: both\n}\n.user-block img {\n    width: 40px;\n    height: 40px;\n    float: left\n}\n.user-block .username,\n.user-block .description,\n.user-block .comment {\n    display: block;\n    margin-left: 50px\n}\n.user-block .username {\n    font-size: 16px;\n    font-weight: 600\n}\n.user-block .description {\n    color: #999;\n    font-size: 13px\n}\n.user-block.user-block-sm .username,\n.user-block.user-block-sm .description,\n.user-block.user-block-sm .comment {\n    margin-left: 40px\n}\n.user-block.user-block-sm .username {\n    font-size: 14px\n}\n.img-sm,\n/*.img-md,*/\n.img-lg,\n.box-comments .box-comment img,\n.user-block.user-block-sm img {\n    float: left\n}\n.img-sm,\n.box-comments .box-comment img,\n.user-block.user-block-sm img {\n    width: 30px !important;\n    height: 30px !important\n}\n.img-sm + .img-push {\n    margin-left: 40px\n}\n.img-md {\n    width: 60px;\n    height: 60px\n}\n.img-md + .img-push {\n    margin-left: 70px\n}\n.img-lg {\n    width: 100px;\n    height: 100px\n}\n.img-lg + .img-push {\n    margin-left: 110px\n}\n.img-bordered {\n    border: 3px solid #d2d6de;\n    padding: 3px\n}\n.img-bordered-sm {\n    border: 2px solid #d2d6de;\n    padding: 2px\n}\n.attachment-block {\n    border: 1px solid #f4f4f4;\n    padding: 5px;\n    margin-bottom: 10px;\n    background: #f7f7f7\n}\n.attachment-block .attachment-img {\n    max-width: 100px;\n    max-height: 100px;\n    height: auto;\n    float: left\n}\n.attachment-block .attachment-pushed {\n    margin-left: 110px\n}\n.attachment-block .attachment-heading {\n    margin: 0\n}\n.attachment-block .attachment-text {\n    color: #555\n}\n.connectedSortable {\n    min-height: 100px\n}\n.ui-helper-hidden-accessible {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px\n}\n.sort-highlight {\n    background: #f4f4f4;\n    border: 1px dashed #ddd;\n    margin-bottom: 10px\n}\n.full-opacity-hover {\n    opacity: .65;\n    filter: alpha(opacity=65)\n}\n.full-opacity-hover:hover {\n    opacity: 1;\n    filter: alpha(opacity=100)\n}\n.chart {\n    position: relative;\n    overflow: hidden;\n    width: 100%\n}\n.chart svg,\n.chart canvas {\n    width: 100% !important\n}\n@media print {\n.no-print,\n    .main-sidebar,\n    .left-side,\n    .main-header,\n    .content-header {\n        display: none !important\n}\n.content-wrapper,\n    .right-side,\n    .main-footer {\n        margin-left: 0 !important;\n        min-height: 0 !important;\n        transform: translate(0, 0) !important\n}\n.fixed .content-wrapper,\n    .fixed .right-side {\n        padding-top: 0 !important\n}\n.invoice {\n        width: 100%;\n        border: 0;\n        margin: 0;\n        padding: 0\n}\n.invoice-col {\n        float: left;\n        width: 33.3333333%\n}\n.table-responsive {\n        overflow: auto\n}\n.table-responsive > .table tr th,\n    .table-responsive > .table tr td {\n        white-space: normal !important\n}\n}\n\n/*css bye khalid*/\n\n/*user info box start*/\n.chat-edit-option{\n    position: absolute;\n    top: 0;\n    cursor: pointer;\n    left: -20px;\n}\n.edit-menu-icon{\n    padding: 10px;\n}\n.chat .created-date {\n    color: #a4a49b;\n    font-size: 10px;\n}\n.edit-delete-menu{\n    transform: translate3d(15px, 0px, 0px) !important;\n}\n.menu-position{\n    position: absolute;\n}\n.showEditMenu{\n    position: absolute;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    border: 1px solid #D9D9D9;\n    border-radius: 4px;\n    display: flex;\n    flex-flow: column;\n    background-color: white;\n    z-index: 999;\n    top: 6px;\n    left: 20px;\n}\n.edit-menu-item{\n    padding: 2px 10px;\n}\n.edit-menu-item:hover{\n    background: #F8F9FA;\n    border-radius: 4px;\n}\n.user-info-title a {\n    text-decoration: none;\n    color: #1e0857;\n    padding: 21px 27px 10px;\n}\n.user-info-title a:hover {\n    background: #7D1D72;\n    color: #ffffff;\n    border-radius: 20px 20px 0 0;\n}\n\n/*General info css*/\n.general-info {\n    margin-left: -15px;\n}\n.general-info li {\n    list-style: none;\n    margin-bottom: 1px;\n    font-size: 12px;\n    color: rgba(30, 8, 87, 0.8);\n}\n.li-margin-top {\n    margin-top: 15px;\n}\n.general-info li strong {\n    color: rgba(30, 8, 87, 0.8);\n    font-weight: bolder;\n}\n.general-tab {\n    font-weight: bold;\n}\n.general-nav {\n    font-weight: bold;\n}\n/*classification css*/\n.classification-center{\n    justify-content: center !important;\n}\n/*content item css */\n.content-item {\n    margin-left: -4px;\n}\n.audio-image, .video-image {\n    width: 100px;\n    height: 60px;\n}\n.content-div{\n    justify-content: center;\n    border-top: 1px solid #DDDDDD;\n}\n.content-table{\n    width: 100%;\n}\n.content-text{\n    font-size: 12px;\n}\n.content-title-text{\n    font-size: 14px;\n    font-weight: bold;\n}\n.video-image{\n    background-size: 50px 50px;\n    background-position: center;\n}\n\n\n/*chat list css*/\n.mesg-heading-text {\n    color: #783DAB;\n}\n.plus-button {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    background: #4B3979;\n    color: #ffffff;\n    text-align: center;\n    cursor: pointer;\n}\n.plus-button i {\n    margin-top: 9px;\n}\n.search-input {\n    border-bottom: 1px solid #DDDDDD;\n}\n.search-input > input[type=\"text\"] {\n    border: none;\n}\n.user-list-name {\n    font-size: 11px;\n    font-weight: 700;\n    overflow: hidden;\n    display: inline-block;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    max-width: 85px;\n    position: absolute;\n    top: 8px;\n    left: 53px;\n}\n.user-list-border {\n    border-bottom: 1px solid #DDDDDD;\n    cursor: pointer;\n    position: relative;\n}\n.member-list-time {\n    margin-top: 10px;\n}\n.message-text-color {\n    color: #707C97;\n    font-size: 12px;\n}\n.latest-msg-file {\n    background: #CAE2FC;\n    border-radius: 40px;\n    padding: 10px 20px 10px 20px;\n    color: #2A8BF2;\n    font-size: 13px;\n    font-weight: bold;\n}\n.latest-msg-image {\n    background: #7E6182;\n    border-radius: 40px;\n    padding: 10px 20px 10px 20px;\n    color: #F7F5F7;\n    font-size: 13px;\n    font-weight: bold;\n}\n.latest-msg-video {\n    background: #BFF0C0;\n    border-radius: 40px;\n    padding: 10px 20px 10px 20px;\n    color: #00C305;\n    font-size: 13px;\n    font-weight: bold;\n}\n.active-user {\n    background: #2F80ED;\n}\n.active-msg-color {\n    color: #ffffff;\n}\n.active-user-name-color {\n    color: #ffffff;\n}\n.active-time-color {\n    color: #CBDFFB !important;\n}\n.btn-chat-search{\n    border-radius: 3px;\n    box-shadow: none;\n    border: 1px solid transparent;\n    margin-top: 6px;\n}\n.name-part {\n    position: absolute;\n    width: 220px;\n}\n.name-part-child {\n    position: relative;\n    top: -6px;\n    left: 10px;\n    right: 0;\n    color: #0d1c2e;\n    font-size: 14px;\n    font-weight: bold;\n}\n.chat-header-image {\n    margin-top: -15px;\n    width: 50px;\n    height: 50px;\n}\n.chat-menu {\n    width: 48.6px;\n    height: 48.6px;\n    border-radius: 50%;\n    padding: 13.1px 13.1px 13.1px 13.1px;\n    box-shadow: 0 5px 25px 0 rgba(42, 139, 242, 0.07), 0 7px 25px 0 rgba(42, 139, 242, 0.03), 0 10px 15px 0 rgba(0, 0, 0, 0.03);\n    /*box-shadow: 0 0 10px  rgba(0,0,0,0.6);*/\n    float: right;\n    margin-right: 7px;\n    margin-top: -7px;\n}\n.chat-menu-icon {\n    margin-left: 8px;\n    color: #707C97;\n}\n.chat-menu {\n    position: relative;\n    overflow: hidden;\n}\n.chat-menu > input[type='file'] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    text-align: right;\n    opacity: 0;\n    filter: alpha(opacity=0);\n    outline: none;\n    background: white;\n    cursor: pointer;\n    display: block;\n}\n.chat-file-icon {\n    margin-left: 5px;\n    color: #707C97;\n}\n.text-input {\n    border: none;\n}\n.text-input::-moz-placeholder {\n    color: #B7BDCB;\n    font-weight: bold;\n}\n.text-input:-ms-input-placeholder {\n    color: #B7BDCB;\n    font-weight: bold;\n}\n.text-input::placeholder {\n    color: #B7BDCB;\n    font-weight: bold;\n}\n.popup-icons-design .popup-ul {\n    text-align: center;\n    position: absolute;\n    top: 535px;\n    z-index: 10;\n    left: -10px; /* Hide vertical scrollbar */\n}\n.popup-icons-design .popup-ul .popup-li {\n    list-style: none;\n    margin-bottom: 6px;\n    position: relative;\n    overflow: hidden;\n    width: 40px;\n    height: 40px;\n    background: #1E0857;\n    border-radius: 50%;\n    cursor: pointer;\n}\n.popup-icons-design .popup-ul .popup-li > input[type='file'] {\n    position: absolute;\n    right: 0;\n    text-align: right;\n    opacity: 0;\n    filter: alpha(opacity=0);\n    outline: none;\n    background: white;\n    cursor: inherit;\n    display: inline-block;\n    overflow: hidden;\n}\n.chat-box-input{\n    margin: 0 6px;\n    margin-right: 48px;\n}\n.emoji-picker{\n    position: absolute;\n    top: 201px;\n    left: 138px;\n}\n\n\n/*#example a:first-child:hover {*/\n/*    margin-right: 0px;*/\n/*}*/\n.popup-icons-design .popup-ul .popup-li:hover {\n    box-shadow: 0 5px 25px 0 rgba(42, 139, 242, 0.1), 0 7px 25px 0 rgba(42, 139, 242, 0.1), 0 10px 15px 0 rgba(42, 139, 242, 0.2);\n}\n.popup-icons-design .popup-ul .popup-li img {\n    margin-top: 7px;\n}\n::-webkit-scrollbar {\n    width: 5px;\n}\n/*!* Handle *!*/\n::-webkit-scrollbar-thumb {\n    background: #C4C4C4;\n    width: 3px;\n    height: 100px;\n    border-radius: 15px;\n}\n.fade-enter-active, .fade-leave-active {\n    transition: opacity .5s;\n}\n.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */\n{\n    opacity: 0;\n}\n.smile-icon i {\n    font-size: 22px;\n    color: #B7BDCB;\n}\n.smile-icon {\n    margin-top: 10px;\n    position: absolute;\n    right: 51px;\n    z-index: 11;\n    cursor: pointer;\n}\n.typing-message  {\n    font-size: 9px;\n    color: #999;\n}\n.unread-message {\n    font-size: 11px;\n}\n.message-update-reset-icon {\n    margin-top: 5px;\n}\n.edit-hover:hover {\n    color: #1E0857;\n}\n.delete-hover:hover {\n    color: #ff4343;\n}\n.jconfirm-modal-title {\n    font-size: 16px !important;\n    color: #1e0857;\n}\n.jconfirm-buttons {\n    float: none !important;\n    text-align: center !important;\n}\n.warp-text-title{\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    max-width: 340px;\n    display: inline-block;\n}\n\n/*Khalid responsive css start*/\n@media (min-width: 1280px) and (max-width: 1366px) {\n.tab-menu-responsive {\n        font-size: 11px;\n}\n.audio-image, .video-image {\n        width: 74px;\n        height: 59px;\n}\n.content-item {\n        margin-left: 0px;\n}\n.user-list-name {\n        font-size: 11px;\n}\n.chat-header-image {\n        margin-top: -10px;\n        height: 40px;\n        width: 40px;\n}\n.direct-chat-messages{\n        height: 582px;\n}\n.name-part-child {\n        font-size: 11px;\n}\n.warp-text-title{\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        max-width: 170px;\n        display: inline-block;\n}\n.chat .created-date {\n        font-size: 10px;\n}\n.member-list-time {\n        margin-top: 25px;\n}\n.user-list-name {\n        max-width: 100px;\n}\n.name-part {\n        width: 140px;\n}\n.created-date {\n        font-size: 10px;\n}\n.chat-menu {\n        width: 40.6px;\n        height: 40.6px;\n        padding: 9.1px 13.1px 13.1px 13.1px;\n}\n.chat-file-icon {\n        margin-left: 0px;\n}\n.chat-menu-icon {\n        margin-left: 5px;\n}\n.emoji-picker {\n        position: absolute;\n        top: 201px;\n        left: -2px;\n}\n.content-title-text{\n        font-size: 12px;\n        font-weight: bolder;\n}\n}\n@media (min-width: 1367px) and (max-width: 1440px) {\n.warp-text-title{\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        max-width: 170px;\n        display: inline-block;\n}\n.chat .created-date {\n        font-size: 10px;\n}\n.tab-menu-responsive {\n        font-size: 11px;\n}\n.audio-image, .video-image {\n        width: 74px;\n        height: 59px;\n}\n.content-item {\n        margin-left: 0px;\n}\n.user-list-name {\n        font-size: 11px;\n}\n.member-list-time {\n        margin-top: 25px;\n}\n.created-date {\n        font-size: 10px;\n}\n.chat-header-image {\n        margin-top: -10px;\n        height: 40px;\n        width: 40px;\n}\n.direct-chat-messages{\n        height: 581px;\n}\n.name-part-child {\n        font-size: 11px;\n}\n.name-part {\n        width: 160px;\n}\n.chat .created-date {\n        font-size: 10px;\n}\n.chat-menu {\n        width: 40.6px;\n        height: 40.6px;\n        padding: 9.1px 13.1px 13.1px 13.1px;\n}\n.chat-file-icon {\n        margin-left: 0px;\n}\n.chat-menu-icon {\n        margin-left: 5px;\n}\n.emoji-picker {\n        position: absolute;\n        top: 201px;\n        left: -2px;\n}\n.content-title-text{\n        font-size: 12px;\n        font-weight: bolder;\n}\n}\n@media (min-width: 1024px) and (max-width: 1280px) {\n.tab-menu-responsive{\n        font-size: 9px;\n}\n.warp-text-title {\n        max-width: 125px;\n}\n.name-part-child {\n\n        font-size: 11px;\n}\n.member-list-time{\n        margin-top: 25px;\n}\n.direct-chat-text {\n    font-size: 11px;\n}\n.chat .created-date {\n        font-size: 8px;\n}\n.content-div ul li {\n        font-size: 10px;\n}\n.chat-header-image {\n        width: 40px;\n        height: 40px;\n}\n.audio-image, .video-image {\n        width: 75px;\n        height: 60px;\n}\n.content-title-text{\n        font-size: 12px;\n        font-weight: bolder;\n}\n.emoji-picker {\n        position: absolute;\n        top: 190px;\n        left: -19px;\n        width: 300px !important;\n}\n.mesg-heading-text{\n        font-size: 13px;\n}\n}\n/*===chat css===*/\n\n/*Khalid responsive css end*/\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Chat.vue?vue&type=style&index=2&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Chat.vue?vue&type=style&index=2&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.chat .online {\n    color: #32CD32;\n    position: absolute;\n    z-index: 10;\n    top: -3px;\n    font-size: 10px;\n    left: 18px;\n}\n.chat-message-search-loader { /* Loader Div Class */\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    width: 100%;\n    height: 100%;\n    background-color: #eceaea;\n    background-image: url(/images/small-loader.gif);\n    background-size: 50px;\n    background-repeat: no-repeat;\n    background-position: center;\n    z-index: 10000000;\n    opacity: 0.4;\n    filter: alpha(opacity=40);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Chat.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Chat.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Chat.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Chat.vue?vue&type=style&index=1&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Chat.vue?vue&type=style&index=1&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Chat.vue?vue&type=style&index=1&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Chat.vue?vue&type=style&index=2&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Chat.vue?vue&type=style&index=2&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=style&index=2&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Chat.vue?vue&type=style&index=2&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Chat.vue?vue&type=template&id=40c106f7&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Chat.vue?vue&type=template&id=40c106f7& ***!
  \**************************************************************************************************************************************************************************************************/
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
    { staticClass: "chat" },
    [
      _c("div", { staticClass: "container-fluid px-0" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-5" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-7 grid-margin p-0" }, [
                _vm.senderCompanyNotFound
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "row collapse show no-gutters d-flex h-100 position-relative"
                      },
                      [_vm._m(0)]
                    )
                  : _c("div", { staticClass: "card" }, [
                      _c(
                        "div",
                        {
                          staticClass: "card-body general-info",
                          staticStyle: { height: "785px", overflow: "auto" }
                        },
                        [
                          _c(
                            "b-tabs",
                            { staticClass: "general-nav", attrs: { fill: "" } },
                            [
                              _c(
                                "b-tab",
                                {
                                  attrs: {
                                    "title-link-class":
                                      "tab-menu-responsive general-tab",
                                    title: "General",
                                    active: _vm.senderActiveTab === 0
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.senderLoadTabContent(
                                        "senderGeneralInfo"
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm.senderGeneralContentLoading
                                    ? _c("div", {
                                        staticClass:
                                          "chat-message-search-loader"
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("b-card-text", [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "row mx-auto w-100 content-div"
                                      },
                                      [
                                        _c(
                                          "ul",
                                          { staticClass: "general-info" },
                                          [
                                            _vm.senderIcon
                                              ? _c(
                                                  "li",
                                                  {
                                                    staticClass:
                                                      "text-center mt-3"
                                                  },
                                                  [
                                                    _c("img", {
                                                      staticClass:
                                                        "company-profile-photo rounded-circle",
                                                      attrs: {
                                                        src: _vm.senderIcon,
                                                        alt: "",
                                                        width: "70",
                                                        height: "70"
                                                      }
                                                    })
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.senderAddress
                                              ? _c(
                                                  "li",
                                                  {
                                                    staticClass: "li-margin-top"
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass:
                                                        "fas fa-map-marker-alt"
                                                    }),
                                                    _vm._v(
                                                      " " +
                                                        _vm._s(
                                                          _vm.senderAddress
                                                        ) +
                                                        "\n                                                    "
                                                    )
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.senderPhoneNumber
                                              ? _c(
                                                  "li",
                                                  {
                                                    staticClass: "li-margin-top"
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass:
                                                        "fas fa-phone-alt"
                                                    }),
                                                    _vm._v(
                                                      " " +
                                                        _vm._s(
                                                          _vm.senderPhoneNumber
                                                        ) +
                                                        "\n                                                    "
                                                    )
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.senderName
                                              ? _c(
                                                  "li",
                                                  {
                                                    staticClass: "li-margin-top"
                                                  },
                                                  [
                                                    _c("i", {
                                                      staticClass: "fas fa-link"
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "a",
                                                      {
                                                        attrs: {
                                                          href:
                                                            "https://issuerpixel.com",
                                                          target: "_blank"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "https://issuerpixel.com"
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.senderCeo
                                              ? _c(
                                                  "li",
                                                  {
                                                    staticClass: "li-margin-top"
                                                  },
                                                  [
                                                    _c("strong", [
                                                      _vm._v("CEO: ")
                                                    ]),
                                                    _vm._v(
                                                      _vm._s(_vm.senderCeo) +
                                                        "\n                                                    "
                                                    )
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.senderCfo
                                              ? _c(
                                                  "li",
                                                  {
                                                    staticClass: "li-margin-top"
                                                  },
                                                  [
                                                    _c("strong", [
                                                      _vm._v("CFO: ")
                                                    ]),
                                                    _vm._v(
                                                      _vm._s(_vm.senderCfo) +
                                                        "\n                                                    "
                                                    )
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.senderPublicPrivateType
                                              ? _c(
                                                  "li",
                                                  {
                                                    staticClass: "li-margin-top"
                                                  },
                                                  [
                                                    _c("strong", [
                                                      _vm._v("Type: ")
                                                    ]),
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.senderPublicPrivateType
                                                      ) +
                                                        "\n                                                    "
                                                    )
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.senderEntityType
                                              ? _c(
                                                  "li",
                                                  {
                                                    staticClass: "li-margin-top"
                                                  },
                                                  [
                                                    _c("strong", [
                                                      _vm._v(
                                                        "Legal\n                                                        Entity Type: "
                                                      )
                                                    ]),
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.senderEntityType
                                                      ) +
                                                        "\n                                                    "
                                                    )
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.senderAuditedFinancials
                                              ? _c(
                                                  "li",
                                                  {
                                                    staticClass: "li-margin-top"
                                                  },
                                                  [
                                                    _c("strong", [
                                                      _vm._v(
                                                        "Audited\n                                                        Financials: "
                                                      )
                                                    ]),
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.senderAuditedFinancials
                                                      ) +
                                                        "\n                                                    "
                                                    )
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.senderIntellectualProperty
                                              .length
                                              ? _c(
                                                  "li",
                                                  {
                                                    staticClass: "li-margin-top"
                                                  },
                                                  [
                                                    _c("strong", [
                                                      _vm._v(
                                                        "Intellectual Property:"
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _vm._l(
                                                      _vm.senderIntellectualProperty,
                                                      function(ip, ipIndex) {
                                                        return _c(
                                                          "span",
                                                          { key: ipIndex },
                                                          [
                                                            _vm._v(
                                                              "\n                                                          " +
                                                                _vm._s(
                                                                  _vm.nameWithComma(
                                                                    ip.name,
                                                                    ipIndex,
                                                                    _vm
                                                                      .senderIntellectualProperty
                                                                      .length
                                                                  )
                                                                ) +
                                                                "\n                                                        "
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
                                            _vm.senderNumberOfShareholder
                                              ? _c(
                                                  "li",
                                                  {
                                                    staticClass: "li-margin-top"
                                                  },
                                                  [
                                                    _c("strong", [
                                                      _vm._v(
                                                        "Number\n                                                        of Shareholders: "
                                                      )
                                                    ]),
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.senderNumberOfShareholder
                                                      ) +
                                                        "\n                                                    "
                                                    )
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.senderRecentValuation
                                              ? _c(
                                                  "li",
                                                  {
                                                    staticClass: "li-margin-top"
                                                  },
                                                  [
                                                    _c("strong", [
                                                      _vm._v(
                                                        "Most\n                                                        Recent Valuation: "
                                                      )
                                                    ]),
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.senderRecentValuation
                                                      ) +
                                                        "\n                                                    "
                                                    )
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.senderNumberOfEmployee
                                              ? _c(
                                                  "li",
                                                  {
                                                    staticClass: "li-margin-top"
                                                  },
                                                  [
                                                    _c("strong", [
                                                      _vm._v(
                                                        "Number\n                                                        Of Employee: "
                                                      )
                                                    ]),
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.senderNumberOfEmployee
                                                      ) +
                                                        "\n                                                    "
                                                    )
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.senderConglomerate
                                              ? _c(
                                                  "li",
                                                  {
                                                    staticClass: "li-margin-top"
                                                  },
                                                  [
                                                    _c("strong", [
                                                      _vm._v(
                                                        "Number\n                                                        Of Employee: "
                                                      )
                                                    ]),
                                                    _c(
                                                      "a",
                                                      { attrs: { href: "" } },
                                                      [
                                                        _vm._v(
                                                          "Show List of Companies"
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.senderCompanySocialMediaPlatform
                                              .length
                                              ? _c(
                                                  "li",
                                                  {
                                                    staticClass:
                                                      "social-media-icon li-margin-top"
                                                  },
                                                  [
                                                    _c(
                                                      "p",
                                                      { staticClass: "mb-2" },
                                                      [
                                                        _c("strong", [
                                                          _vm._v(
                                                            "Social Media Channels: "
                                                          )
                                                        ])
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _vm._l(
                                                      _vm.senderCompanySocialMediaPlatform,
                                                      function(
                                                        platform,
                                                        platformIndex
                                                      ) {
                                                        return [
                                                          _c(
                                                            "a",
                                                            {
                                                              attrs: {
                                                                href: _vm.validateURL(
                                                                  platform.pivot
                                                                    .value
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
                                                                            version:
                                                                              "1.1",
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
                                                                            width:
                                                                              "22px",
                                                                            height:
                                                                              "22px",
                                                                            preserveAspectRatio:
                                                                              "xMidYMid meet",
                                                                            viewBox:
                                                                              "0 0 32 32"
                                                                          }
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "path",
                                                                            {
                                                                              attrs: {
                                                                                d:
                                                                                  "M16.708.027C18.453 0 20.188.016 21.921 0c.105 2.041.839 4.12 2.333 5.563c1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-.063-3.855-.463-5.6-1.291c-.76-.344-1.468-.787-2.161-1.24c-.009 3.896.016 7.787-.025 11.667c-.104 1.864-.719 3.719-1.803 5.255c-1.744 2.557-4.771 4.224-7.88 4.276c-1.907.109-3.812-.411-5.437-1.369C4.307 29.027 2.412 26.12 2.136 23a22.3 22.3 0 0 1-.016-1.984c.24-2.537 1.495-4.964 3.443-6.615c2.208-1.923 5.301-2.839 8.197-2.297c.027 1.975-.052 3.948-.052 5.923c-1.323-.428-2.869-.308-4.025.495a4.618 4.618 0 0 0-1.819 2.333c-.276.676-.197 1.427-.181 2.145c.317 2.188 2.421 4.027 4.667 3.828c1.489-.016 2.916-.88 3.692-2.145c.251-.443.532-.896.547-1.417c.131-2.385.079-4.76.095-7.145c.011-5.375-.016-10.735.025-16.093z",
                                                                                fill:
                                                                                  "#626262"
                                                                              }
                                                                            }
                                                                          )
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
                                    "title-link-class": "tab-menu-responsive",
                                    title: "Classifications",
                                    active: _vm.senderActiveTab === 1
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.senderLoadTabContent(
                                        "senderClassifications"
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm.senderClassificationlContentLoading
                                    ? _c("div", {
                                        staticClass:
                                          "chat-message-search-loader"
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("b-card-text", [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "row mx-auto w-100 text-center content-div "
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "row mx-auto w-100 text-center mt-4 mb-5 classification-center"
                                          },
                                          [
                                            !_vm.hideCatContainer
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "row mx-auto w-100"
                                                  },
                                                  _vm._l(
                                                    _vm.multipleNodes,
                                                    function(each, index) {
                                                      return _c(
                                                        "div",
                                                        {
                                                          key:
                                                            each.categorization_id,
                                                          staticClass:
                                                            "border-0 col-lg-12 col-md-12 pb-3",
                                                          attrs: {
                                                            "no-body": ""
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "CompanyNodeCollapses",
                                                            {
                                                              attrs: {
                                                                each: each,
                                                                objectIndex: index,
                                                                enableEditButton:
                                                                  _vm.enableEditButton
                                                              }
                                                            }
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    }
                                                  ),
                                                  0
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _vm.hideCatContainer
                                              ? _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "classification-center"
                                                  },
                                                  [
                                                    _vm._v(
                                                      "Company\n                                                        classifications not found\n                                                    "
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
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
                                    "title-link-class":
                                      "tab-menu-responsive general-tab",
                                    title: "Content",
                                    active: _vm.senderActiveTab === 2
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.senderLoadTabContent(
                                        "senderContent"
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm.senderContentlContentLoading
                                    ? _c("div", {
                                        staticClass:
                                          "chat-message-search-loader"
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("b-card-text", [
                                    !_vm.senderHideContent
                                      ? _c(
                                          "div",
                                          {
                                            staticClass:
                                              "row mx-auto w-100 text-center content-div"
                                          },
                                          [
                                            _c(
                                              "table",
                                              {
                                                staticClass:
                                                  "mt-4 content-table"
                                              },
                                              [
                                                _c("thead", [
                                                  _c("tr", [
                                                    _c("th"),
                                                    _vm._v(" "),
                                                    _c(
                                                      "th",
                                                      {
                                                        staticClass:
                                                          "content-title-text"
                                                      },
                                                      [_vm._v("Content Title")]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "th",
                                                      {
                                                        staticClass:
                                                          "content-title-text"
                                                      },
                                                      [_vm._v("Content Type")]
                                                    )
                                                  ])
                                                ]),
                                                _vm._v(" "),
                                                _c(
                                                  "tbody",
                                                  [
                                                    _vm._l(
                                                      _vm.contents,
                                                      function(content) {
                                                        return _c("tr", [
                                                          _c(
                                                            "td",
                                                            [
                                                              content.media_type ==
                                                              2
                                                                ? _c(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "video-thumb-table"
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "router-link",
                                                                        {
                                                                          attrs: {
                                                                            link:
                                                                              "",
                                                                            to: {
                                                                              name:
                                                                                "ViewVideoDetails",
                                                                              params: {
                                                                                id:
                                                                                  content.uuid
                                                                              }
                                                                            }
                                                                          }
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "img",
                                                                            {
                                                                              staticClass:
                                                                                "img img-responsive video-btn video-thumb video-image",
                                                                              attrs: {
                                                                                src:
                                                                                  "https://view.vzaar.com/" +
                                                                                  content.video_id +
                                                                                  "/image",
                                                                                alt:
                                                                                  ""
                                                                              }
                                                                            }
                                                                          )
                                                                        ]
                                                                      )
                                                                    ],
                                                                    1
                                                                  )
                                                                : _c(
                                                                    "router-link",
                                                                    {
                                                                      attrs: {
                                                                        link:
                                                                          "",
                                                                        to: {
                                                                          name:
                                                                            "ViewAudioDetails",
                                                                          params: {
                                                                            id:
                                                                              content.uuid
                                                                          }
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "img",
                                                                        {
                                                                          staticClass:
                                                                            "audio-image",
                                                                          attrs: {
                                                                            src:
                                                                              "/images/audio_thumb.png",
                                                                            alt:
                                                                              ""
                                                                          }
                                                                        }
                                                                      )
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
                                                                "content-text"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  _vm._f(
                                                                    "truncate"
                                                                  )(
                                                                    content.name,
                                                                    100,
                                                                    "..."
                                                                  )
                                                                )
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          content.media_type ==
                                                          2
                                                            ? _c(
                                                                "td",
                                                                {
                                                                  staticClass:
                                                                    "content-text"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Video"
                                                                  )
                                                                ]
                                                              )
                                                            : _c(
                                                                "td",
                                                                {
                                                                  staticClass:
                                                                    "content-text"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    "Audio"
                                                                  )
                                                                ]
                                                              )
                                                        ])
                                                      }
                                                    ),
                                                    _vm._v(" "),
                                                    _c("tr", [
                                                      _c(
                                                        "td",
                                                        {
                                                          attrs: {
                                                            colspan: "3"
                                                          }
                                                        },
                                                        [
                                                          _vm
                                                            .senderContentPagination
                                                            .last_page > 1
                                                            ? _c("pagination", {
                                                                attrs: {
                                                                  pagination:
                                                                    _vm.senderContentPagination,
                                                                  offset: 5
                                                                },
                                                                on: {
                                                                  paginate: function(
                                                                    $event
                                                                  ) {
                                                                    return _vm.getSenderContentList()
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
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.senderHideContent
                                      ? _c(
                                          "div",
                                          { staticClass: "text-center mt-4" },
                                          [
                                            _vm._v(
                                              "Company Content not\n                                                found\n                                            "
                                            )
                                          ]
                                        )
                                      : _vm._e()
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
              _c("div", { staticClass: "col-md-5 grid-margin p-0" }, [
                _c("div", { staticClass: "card" }, [
                  _c(
                    "div",
                    {
                      ref: "messageBox",
                      staticClass: "card-body",
                      staticStyle: { height: "785px", overflow: "auto" },
                      on: { scroll: _vm.messageBoxScrolling }
                    },
                    [
                      _c("div", { staticClass: "card-title clearfix" }, [
                        _c(
                          "p",
                          { staticClass: "mb-0 float-left mesg-heading-text" },
                          [_vm._v("Messages ")]
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticClass: "float-right plus-button",
                            on: {
                              click: function($event) {
                                return _vm.showSearchModal()
                              }
                            }
                          },
                          [_c("i", { staticClass: "fas fa-plus" })]
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "custom-hr-theme my-0" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "row state-container mt-2" }, [
                        _c("div", { staticClass: "col pb-3" }, [
                          _vm.contentLoading
                            ? _c("div", {
                                staticClass: "chat-message-search-loader"
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _c("div", {}, [
                            _c(
                              "div",
                              { staticClass: "input-group search-input" },
                              [
                                _vm._m(1),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.chatMessageSearch,
                                      expression: "chatMessageSearch"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    placeholder: "Search"
                                  },
                                  domProps: { value: _vm.chatMessageSearch },
                                  on: {
                                    keyup: function($event) {
                                      return _vm.getChatMessage()
                                    },
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.chatMessageSearch =
                                        $event.target.value
                                    }
                                  }
                                })
                              ]
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.latestChatMessages, function(
                        latestChatMessage
                      ) {
                        return _c("span", [
                          _c(
                            "div",
                            {
                              staticClass:
                                "row state-container user-list-border",
                              class:
                                latestChatMessage.userId == _vm.activeUser
                                  ? "active-user"
                                  : ""
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "col-lg-12 pb-3 mt-3",
                                  on: {
                                    click: function($event) {
                                      return _vm.chat(
                                        latestChatMessage.userId,
                                        latestChatMessage.createdAt,
                                        latestChatMessage.companySlug,
                                        latestChatMessage.unreadMessages
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm.checkOnline(latestChatMessage.userId)
                                    ? _c("i", {
                                        staticClass: "fa fa-circle online"
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("img", {
                                    staticClass: "img-xs rounded-circle",
                                    attrs: {
                                      src: latestChatMessage.companyPhoto,
                                      alt: latestChatMessage.userName,
                                      width: "80",
                                      height: "80"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass: "user-list-name",
                                      class:
                                        latestChatMessage.userId ==
                                        _vm.activeUser
                                          ? "active-user-name-color"
                                          : ""
                                    },
                                    [_vm._v(_vm._s(latestChatMessage.userName))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "pull-right created-date float-right member-list-time",
                                      class:
                                        latestChatMessage.userId ==
                                        _vm.activeUser
                                          ? "active-time-color"
                                          : ""
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(latestChatMessage.createdAt)
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col-lg-12 pb-3" },
                                [
                                  latestChatMessage.unreadMessages
                                    ? _c(
                                        "b-badge",
                                        {
                                          staticClass:
                                            "unread-message float-right ml-1",
                                          attrs: {
                                            pill: "",
                                            variant: "secondary"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                                " +
                                              _vm._s(
                                                latestChatMessage.unreadMessages
                                              ) +
                                              "\n                                            "
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  latestChatMessage.fileFormat == ""
                                    ? _c(
                                        "p",
                                        {
                                          staticClass: "message-text-color",
                                          class:
                                            latestChatMessage.userId ==
                                            _vm.activeUser
                                              ? "active-msg-color"
                                              : ""
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(latestChatMessage.message)
                                          )
                                        ]
                                      )
                                    : latestChatMessage.fileFormat === "image"
                                    ? _c(
                                        "p",
                                        { staticClass: "message-text-color" },
                                        [_vm._m(2, true)]
                                      )
                                    : latestChatMessage.fileFormat === "video"
                                    ? _c(
                                        "p",
                                        { staticClass: "message-text-color" },
                                        [_vm._m(3, true)]
                                      )
                                    : latestChatMessage.fileFormat === "audio"
                                    ? _c(
                                        "p",
                                        { staticClass: "message-text-color" },
                                        [_vm._m(4, true)]
                                      )
                                    : _c("p", [_vm._m(5, true)])
                                ],
                                1
                              )
                            ]
                          )
                        ])
                      })
                    ],
                    2
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-7" }, [
            _c("div", { staticClass: "row" }, [
              _vm.activeUser != ""
                ? _c("div", { staticClass: "col-md-7 grid-margin p-0" }, [
                    _vm.fileUploading
                      ? _c("div", { staticClass: "chat-message-search-loader" })
                      : _vm._e(),
                    _vm._v(" "),
                    _c("div", { staticClass: "card" }, [
                      _c(
                        "div",
                        { staticClass: "card-body popup-icons-design" },
                        [
                          _c("transition", { attrs: { name: "fade" } }, [
                            _vm.seen
                              ? _c(
                                  "ul",
                                  {
                                    directives: [
                                      {
                                        name: "closable",
                                        rawName: "v-closable",
                                        value: {
                                          exclude: ["button"],
                                          handler: "onClose"
                                        },
                                        expression:
                                          "{exclude: ['button'], handler: 'onClose'}"
                                      }
                                    ],
                                    staticClass: "popup-ul"
                                  },
                                  [
                                    _c(
                                      "li",
                                      { staticClass: "li-first popup-li" },
                                      [
                                        _c("img", {
                                          attrs: {
                                            src:
                                              "/images/chat-icons/film-icon.png",
                                            alt: ""
                                          }
                                        }),
                                        _c("input", {
                                          attrs: {
                                            name: "attachment",
                                            type: "file",
                                            multiple: "",
                                            accept: "video/*"
                                          },
                                          on: {
                                            change: function($event) {
                                              return _vm.file($event)
                                            }
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "li",
                                      { staticClass: "li-first popup-li" },
                                      [
                                        _c("img", {
                                          attrs: {
                                            src:
                                              "/images/chat-icons/image-file-icon.png"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("input", {
                                          attrs: {
                                            name: "attachment",
                                            type: "file",
                                            accept: "image/*"
                                          },
                                          on: {
                                            change: function($event) {
                                              return _vm.file($event)
                                            }
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "li",
                                      { staticClass: "li-first popup-li" },
                                      [
                                        _c("img", {
                                          attrs: {
                                            src:
                                              "/images/chat-icons/file-icon.png",
                                            alt: ""
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("input", {
                                          attrs: {
                                            name: "attachment",
                                            type: "file"
                                          },
                                          on: {
                                            change: function($event) {
                                              return _vm.file($event)
                                            }
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "row state-container mt-2" },
                            [
                              _c("div", { staticClass: "col pb-3" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass: "chatbox",
                                    attrs: { id: "chatbox-" + _vm.cChat.id }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "box box-primary direct-chat direct-chat-primary"
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "box-header with-border"
                                          },
                                          [
                                            _vm.cChat.name
                                              ? _c(
                                                  "h3",
                                                  {
                                                    staticClass:
                                                      "box-title d-inline"
                                                  },
                                                  [
                                                    _vm.cChat.image
                                                      ? _c("img", {
                                                          staticClass:
                                                            "chat-header-image rounded-circle",
                                                          attrs: {
                                                            src:
                                                              _vm.storeagePath +
                                                              "/company_image/" +
                                                              _vm.cChat.image,
                                                            alt: _vm.cChat.name
                                                          }
                                                        })
                                                      : _c("img", {
                                                          staticClass:
                                                            "chat-header-image rounded-circle",
                                                          attrs: {
                                                            src:
                                                              "/images/image-placeholder-1.png",
                                                            alt: _vm.cChat.name
                                                          }
                                                        })
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "d-inline name-part"
                                              },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "name-part-child warp-text-title"
                                                  },
                                                  [
                                                    _vm._v(
                                                      _vm._s(_vm.cChat.name) +
                                                        " "
                                                    ),
                                                    _c("br"),
                                                    _vm.cChat.lastOnline
                                                      ? _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "created-date"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "last online " +
                                                                _vm._s(
                                                                  _vm.cChat
                                                                    .lastOnline
                                                                )
                                                            )
                                                          ]
                                                        )
                                                      : _vm._e()
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "chat-menu d-inline"
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "fa fa-paperclip chat-file-icon"
                                                }),
                                                _vm._v(" "),
                                                _c("input", {
                                                  attrs: {
                                                    name: "attachment",
                                                    type: "file"
                                                  },
                                                  on: {
                                                    change: function($event) {
                                                      return _vm.file($event)
                                                    }
                                                  }
                                                })
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "box-body" }, [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "direct-chat-messages",
                                              attrs: {
                                                id:
                                                  "chatboxscroll-" +
                                                  _vm.cChat.id
                                              }
                                            },
                                            _vm._l(_vm.messages, function(
                                              messagePacket,
                                              index
                                            ) {
                                              return _c(
                                                "div",
                                                {
                                                  key: messagePacket.id,
                                                  staticClass:
                                                    "direct-chat-msg",
                                                  class: {
                                                    right:
                                                      messagePacket.fromUserId ==
                                                      _vm.user_id
                                                  },
                                                  style:
                                                    messagePacket.fromUserId ==
                                                    _vm.user_id
                                                      ? "margin-left: 50px;"
                                                      : "margin-right: 50px;",
                                                  on: {
                                                    mouseover: function(
                                                      $event
                                                    ) {
                                                      return _vm.showEditDelete(
                                                        messagePacket.id
                                                      )
                                                    },
                                                    mouseleave: function(
                                                      $event
                                                    ) {
                                                      return _vm.hideEditDelete(
                                                        messagePacket.id
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  messagePacket.image
                                                    ? _c("img", {
                                                        staticClass:
                                                          "img-xs rounded-circle",
                                                        attrs: {
                                                          align:
                                                            messagePacket.fromUserId ==
                                                            _vm.user_id
                                                              ? "right"
                                                              : "left",
                                                          src:
                                                            _vm.storeagePath +
                                                            "/company_image/" +
                                                            messagePacket.image,
                                                          width: "40",
                                                          height: "40"
                                                        }
                                                      })
                                                    : messagePacket.newMessageSenderImage
                                                    ? _c("img", {
                                                        staticClass:
                                                          "img-xs rounded-circle",
                                                        attrs: {
                                                          align:
                                                            messagePacket.fromUserId ==
                                                            _vm.user_id
                                                              ? "right"
                                                              : "left",
                                                          src:
                                                            messagePacket.newMessageSenderImage,
                                                          alt: _vm.cChat.name,
                                                          width: "40",
                                                          height: "40"
                                                        }
                                                      })
                                                    : _c("img", {
                                                        staticClass:
                                                          "img-xs rounded-circle",
                                                        attrs: {
                                                          align:
                                                            messagePacket.fromUserId ==
                                                            _vm.user_id
                                                              ? "right"
                                                              : "left",
                                                          src:
                                                            "/images/image-placeholder-1.png",
                                                          alt: _vm.cChat.name,
                                                          width: "40",
                                                          height: "40"
                                                        }
                                                      }),
                                                  _vm._v(" "),
                                                  messagePacket.type == "text"
                                                    ? _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "direct-chat-text clearfix",
                                                          class: {
                                                            "pull-right":
                                                              messagePacket.fromUserId ==
                                                              _vm.user_id,
                                                            "pull-left":
                                                              messagePacket.fromUserId !=
                                                              _vm.user_id
                                                          },
                                                          style:
                                                            messagePacket.fromUserId ==
                                                            _vm.user_id
                                                              ? "margin: 0px 50px 0px auto; word-break: break-all; padding: 3px 10px; width: fit-content;"
                                                              : "margin: 0px auto 0px 50px; word-break: break-all;padding: 3px 10px; width: fit-content;",
                                                          attrs: {
                                                            id:
                                                              "message-" +
                                                              messagePacket.id
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                                " +
                                                              _vm._s(
                                                                messagePacket.message
                                                              ) +
                                                              "\n\n                                                            "
                                                          )
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  messagePacket.fromUserId ==
                                                  _vm.user_id
                                                    ? _c(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "chat-edit-option clearfix d-none",
                                                          attrs: {
                                                            id:
                                                              "edit-delete-" +
                                                              messagePacket.id
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "menu-position",
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.showEditMenu(
                                                                    messagePacket.id
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _c("i", {
                                                                staticClass:
                                                                  "fas fa-ellipsis-v edit-menu-icon"
                                                              }),
                                                              _vm._v(" "),
                                                              _c(
                                                                "small",
                                                                {
                                                                  staticClass:
                                                                    "showEditMenu",
                                                                  staticStyle: {
                                                                    display:
                                                                      "none"
                                                                  },
                                                                  attrs: {
                                                                    id:
                                                                      "showEditOption-" +
                                                                      messagePacket.id
                                                                  }
                                                                },
                                                                [
                                                                  _c("span"),
                                                                  _vm._v(" "),
                                                                  messagePacket.type ==
                                                                  "text"
                                                                    ? _c(
                                                                        "span",
                                                                        {
                                                                          staticClass:
                                                                            "edit-menu-item",
                                                                          on: {
                                                                            click: function(
                                                                              $event
                                                                            ) {
                                                                              return _vm.editMessage(
                                                                                messagePacket.id
                                                                              )
                                                                            }
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "Edit"
                                                                          )
                                                                        ]
                                                                      )
                                                                    : _vm._e(),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "span",
                                                                    {
                                                                      staticClass:
                                                                        "edit-menu-item",
                                                                      on: {
                                                                        click: function(
                                                                          $event
                                                                        ) {
                                                                          return _vm.deleteMessage(
                                                                            messagePacket.id,
                                                                            messagePacket.type,
                                                                            index
                                                                          )
                                                                        }
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "Delete"
                                                                      )
                                                                    ]
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  messagePacket.type == "file"
                                                    ? _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "direct-chat-text clearfix",
                                                          class: {
                                                            "pull-right":
                                                              messagePacket.fromUserId ==
                                                              _vm.user_id,
                                                            "pull-left":
                                                              messagePacket.fromUserId !=
                                                              _vm.user_id
                                                          },
                                                          style:
                                                            messagePacket.fromUserId ==
                                                            _vm.user_id
                                                              ? "margin: 0px 50px 0px auto; word-break: break-all; padding: 3px 3px; overflow: hidden; width: fit-content;"
                                                              : "margin: 0px auto 0px 50px; word-break: break-all; padding: 3px 3px; overflow: hidden; width: fit-content;",
                                                          on: {
                                                            mouseover: function(
                                                              $event
                                                            ) {
                                                              return _vm.showEditDelete(
                                                                messagePacket.id
                                                              )
                                                            },
                                                            mouseleave: function(
                                                              $event
                                                            ) {
                                                              return _vm.hideEditDelete(
                                                                messagePacket.id
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          messagePacket.fileFormat ==
                                                          "image"
                                                            ? _c(
                                                                "a",
                                                                {
                                                                  attrs: {
                                                                    href:
                                                                      messagePacket.filePath,
                                                                    title:
                                                                      messagePacket.message,
                                                                    target:
                                                                      "_new"
                                                                  }
                                                                },
                                                                [
                                                                  _c("img", {
                                                                    attrs: {
                                                                      height:
                                                                        "110px;",
                                                                      width:
                                                                        "110px;",
                                                                      src:
                                                                        messagePacket.filePath
                                                                    }
                                                                  })
                                                                ]
                                                              )
                                                            : messagePacket.fileFormat ==
                                                              "video"
                                                            ? _c(
                                                                "a",
                                                                {
                                                                  attrs: {
                                                                    href:
                                                                      messagePacket.filePath,
                                                                    title:
                                                                      messagePacket.message,
                                                                    target:
                                                                      "_new"
                                                                  }
                                                                },
                                                                [
                                                                  _vm._m(
                                                                    6,
                                                                    true
                                                                  )
                                                                ]
                                                              )
                                                            : messagePacket.fileFormat ==
                                                              "audio"
                                                            ? _c(
                                                                "a",
                                                                {
                                                                  attrs: {
                                                                    href:
                                                                      messagePacket.filePath,
                                                                    download:
                                                                      "",
                                                                    title:
                                                                      messagePacket.message,
                                                                    target:
                                                                      "_new"
                                                                  }
                                                                },
                                                                [
                                                                  _vm._m(
                                                                    7,
                                                                    true
                                                                  )
                                                                ]
                                                              )
                                                            : _c(
                                                                "a",
                                                                {
                                                                  attrs: {
                                                                    href:
                                                                      messagePacket.filePath,
                                                                    download:
                                                                      "",
                                                                    title:
                                                                      messagePacket.message,
                                                                    target:
                                                                      "_new"
                                                                  }
                                                                },
                                                                [
                                                                  _vm._m(
                                                                    8,
                                                                    true
                                                                  )
                                                                ]
                                                              )
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass: "d-none",
                                                      attrs: {
                                                        id:
                                                          "edit-status-" +
                                                          messagePacket.id
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          messagePacket.editStatus
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "small",
                                                    {
                                                      staticClass:
                                                        "direct-chat-info clearfix direct-chat-timestamp ",
                                                      staticStyle: {
                                                        width: "50px"
                                                      },
                                                      style:
                                                        messagePacket.fromUserId ==
                                                        _vm.user_id
                                                          ? "float:right; text-align:end;"
                                                          : "float:left;",
                                                      attrs: {
                                                        id:
                                                          "edit-status-text-" +
                                                          messagePacket.id
                                                      }
                                                    },
                                                    [
                                                      messagePacket.editStatus
                                                        ? _c("span", [
                                                            _vm._v("(edited) ")
                                                          ])
                                                        : _vm._e()
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "direct-chat-info clearfix",
                                                      style:
                                                        messagePacket.fromUserId ==
                                                        _vm.user_id
                                                          ? "float:right;"
                                                          : "float:left;"
                                                    },
                                                    [
                                                      _c(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "direct-chat-timestamp"
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              _vm._f(
                                                                "dateFormat"
                                                              )(
                                                                messagePacket.date +
                                                                  " " +
                                                                  messagePacket.time
                                                              )
                                                            )
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            }),
                                            0
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass: "box-footer",
                                            staticStyle: { display: "block" }
                                          },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "input-group" },
                                              [
                                                !_vm.editMessageAction
                                                  ? _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "input-group-btn"
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            ref: "button",
                                                            staticClass:
                                                              "btn btn-default btn-file ",
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                _vm.seen = !_vm.seen
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _c("img", {
                                                              attrs: {
                                                                src:
                                                                  "/images/chat-icons/plus-icon.png",
                                                                alt: ""
                                                              }
                                                            })
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  : _c(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "input-group-btn"
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "btn btn-default btn-file",
                                                            on: {
                                                              click:
                                                                _vm.resetMessageUpdate
                                                            }
                                                          },
                                                          [
                                                            _c("i", {
                                                              staticClass:
                                                                "fa fa-times message-update-reset-icon"
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
                                                      rawName: "v-model.trim",
                                                      value: _vm.message,
                                                      expression: "message",
                                                      modifiers: { trim: true }
                                                    }
                                                  ],
                                                  ref: "inputfocusfinal",
                                                  staticClass:
                                                    "form-control text-input chat-box-input talha-focus",
                                                  attrs: {
                                                    name: "message",
                                                    id:
                                                      "msginput-" +
                                                      _vm.cChat.id,
                                                    placeholder:
                                                      "Type a message here ",
                                                    type: "text",
                                                    autocomplete: "off"
                                                  },
                                                  domProps: {
                                                    value: _vm.message
                                                  },
                                                  on: {
                                                    keydown: function($event) {
                                                      _vm.editMessageAction
                                                        ? _vm.updateMessage(
                                                            $event,
                                                            _vm.updateMessageId
                                                          )
                                                        : _vm.sendMessage(
                                                            $event
                                                          )
                                                    },
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.message = $event.target.value.trim()
                                                    },
                                                    blur: function($event) {
                                                      return _vm.$forceUpdate()
                                                    }
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "input-group-btn"
                                                  },
                                                  [
                                                    _c(
                                                      "span",
                                                      {
                                                        ref: "emojiicon",
                                                        staticClass:
                                                          "smile-icon",
                                                        on: {
                                                          click:
                                                            _vm.toogleDialogEmoji
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "far fa-smile"
                                                        })
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "btn btn-default btn-file send-icon-image",
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              !$event.type.indexOf(
                                                                "key"
                                                              ) &&
                                                              _vm._k(
                                                                $event.keyCode,
                                                                "left",
                                                                37,
                                                                $event.key,
                                                                [
                                                                  "Left",
                                                                  "ArrowLeft"
                                                                ]
                                                              )
                                                            ) {
                                                              return null
                                                            }
                                                            if (
                                                              "button" in
                                                                $event &&
                                                              $event.button !==
                                                                0
                                                            ) {
                                                              return null
                                                            }
                                                            _vm.editMessageAction
                                                              ? _vm.updateMessage(
                                                                  $event,
                                                                  _vm.updateMessageId
                                                                )
                                                              : _vm.sendMessage(
                                                                  $event
                                                                )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c("img", {
                                                          attrs: {
                                                            src:
                                                              "/images/chat-icons/send-icon.png",
                                                            alt: ""
                                                          }
                                                        })
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("VEmojiPicker", {
                                              directives: [
                                                {
                                                  name: "closable",
                                                  rawName: "v-closable",
                                                  value: {
                                                    exclude: ["emojiicon"],
                                                    handler: "offEmojiDiv"
                                                  },
                                                  expression:
                                                    "{exclude: ['emojiicon'], handler: 'offEmojiDiv'}"
                                                },
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: _vm.showDialog,
                                                  expression: "showDialog"
                                                }
                                              ],
                                              style: { height: "100" },
                                              attrs: {
                                                labelSearch: "Search",
                                                lang: "pt-BR"
                                              },
                                              on: { select: _vm.onSelectEmoji }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticClass: "d-inline-block" },
                                      [
                                        _vm.typing
                                          ? _c(
                                              "span",
                                              { staticClass: "typing-message" },
                                              [
                                                _vm._v(
                                                  _vm._s(_vm.cChat.name) +
                                                    " " +
                                                    _vm._s(_vm.typing)
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.activeUser != ""
                ? _c("div", { staticClass: "col-md-5 grid-margin p-0" }, [
                    _vm.receiverCompanyNotFound
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "row collapse show no-gutters d-flex h-100 position-relative"
                          },
                          [_vm._m(9)]
                        )
                      : _c("div", { staticClass: "card" }, [
                          _c(
                            "div",
                            {
                              staticClass: "card-body general-info",
                              staticStyle: { height: "785px", overflow: "auto" }
                            },
                            [
                              _c(
                                "b-tabs",
                                {
                                  staticClass: "general-nav",
                                  attrs: { fill: "" }
                                },
                                [
                                  _c(
                                    "b-tab",
                                    {
                                      staticClass: "general-tab",
                                      attrs: {
                                        "title-link-class":
                                          "tab-menu-responsive",
                                        title: "General",
                                        active: _vm.activeTab === 0
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.loadTabContent(
                                            "receiverGeneralInfo"
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _vm.receiverGeneralContentLoading
                                        ? _c("div", {
                                            staticClass:
                                              "chat-message-search-loader"
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("b-card-text", [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "row mx-auto w-100 content-div"
                                          },
                                          [
                                            _c(
                                              "ul",
                                              { staticClass: "general-info" },
                                              [
                                                _vm.icon
                                                  ? _c(
                                                      "li",
                                                      {
                                                        staticClass:
                                                          "text-center mt-3"
                                                      },
                                                      [
                                                        _c("img", {
                                                          staticClass:
                                                            "company-profile-photo rounded-circle",
                                                          attrs: {
                                                            src: _vm.icon,
                                                            alt: "",
                                                            width: "70",
                                                            height: "70"
                                                          }
                                                        })
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm.address
                                                  ? _c(
                                                      "li",
                                                      {
                                                        staticClass:
                                                          "li-margin-top"
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fas fa-map-marker-alt"
                                                        }),
                                                        _vm._v(
                                                          " " +
                                                            _vm._s(
                                                              _vm.address
                                                            ) +
                                                            "\n                                                    "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm.phoneNumber
                                                  ? _c(
                                                      "li",
                                                      {
                                                        staticClass:
                                                          "li-margin-top"
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fas fa-phone-alt"
                                                        }),
                                                        _vm._v(
                                                          " " +
                                                            _vm._s(
                                                              _vm.phoneNumber
                                                            ) +
                                                            "\n                                                    "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm.receiverName
                                                  ? _c(
                                                      "li",
                                                      {
                                                        staticClass:
                                                          "li-margin-top"
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fas fa-link"
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "a",
                                                          {
                                                            attrs: {
                                                              href:
                                                                "https://issuerpixel.com",
                                                              target: "_blank"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "https://issuerpixel.com"
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm.ceo
                                                  ? _c(
                                                      "li",
                                                      {
                                                        staticClass:
                                                          "li-margin-top"
                                                      },
                                                      [
                                                        _c("strong", [
                                                          _vm._v("CEO: ")
                                                        ]),
                                                        _vm._v(
                                                          _vm._s(_vm.ceo) +
                                                            "\n                                                    "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm.cfo
                                                  ? _c(
                                                      "li",
                                                      {
                                                        staticClass:
                                                          "li-margin-top"
                                                      },
                                                      [
                                                        _c("strong", [
                                                          _vm._v("CFO: ")
                                                        ]),
                                                        _vm._v(
                                                          _vm._s(_vm.cfo) +
                                                            "\n                                                    "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm.publicPrivateType
                                                  ? _c(
                                                      "li",
                                                      {
                                                        staticClass:
                                                          "li-margin-top"
                                                      },
                                                      [
                                                        _c("strong", [
                                                          _vm._v("Type: ")
                                                        ]),
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.publicPrivateType
                                                          ) +
                                                            "\n                                                    "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm.entityType
                                                  ? _c(
                                                      "li",
                                                      {
                                                        staticClass:
                                                          "li-margin-top"
                                                      },
                                                      [
                                                        _c("strong", [
                                                          _vm._v(
                                                            "Legal Entity\n                                                        Type: "
                                                          )
                                                        ]),
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.entityType
                                                          ) +
                                                            "\n                                                    "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm.auditedFinancials
                                                  ? _c(
                                                      "li",
                                                      {
                                                        staticClass:
                                                          "li-margin-top"
                                                      },
                                                      [
                                                        _c("strong", [
                                                          _vm._v(
                                                            "Audited\n                                                        Financials: "
                                                          )
                                                        ]),
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.auditedFinancials
                                                          ) +
                                                            "\n                                                    "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm.intellectualProperty.length
                                                  ? _c(
                                                      "li",
                                                      {
                                                        staticClass:
                                                          "li-margin-top"
                                                      },
                                                      [
                                                        _c("strong", [
                                                          _vm._v(
                                                            "Intellectual Property:"
                                                          )
                                                        ]),
                                                        _vm._v(" "),
                                                        _vm._l(
                                                          _vm.intellectualProperty,
                                                          function(
                                                            ip,
                                                            ipIndex
                                                          ) {
                                                            return _c(
                                                              "span",
                                                              { key: ipIndex },
                                                              [
                                                                _vm._v(
                                                                  "\n                                              " +
                                                                    _vm._s(
                                                                      _vm.nameWithComma(
                                                                        ip.name,
                                                                        ipIndex,
                                                                        _vm
                                                                          .intellectualProperty
                                                                          .length
                                                                      )
                                                                    ) +
                                                                    "\n                                            "
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
                                                _vm.numberOfShareholder
                                                  ? _c(
                                                      "li",
                                                      {
                                                        staticClass:
                                                          "li-margin-top"
                                                      },
                                                      [
                                                        _c("strong", [
                                                          _vm._v(
                                                            "Number\n                                                        of Shareholders: "
                                                          )
                                                        ]),
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.numberOfShareholder
                                                          ) +
                                                            "\n                                                    "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm.recentValuation
                                                  ? _c(
                                                      "li",
                                                      {
                                                        staticClass:
                                                          "li-margin-top"
                                                      },
                                                      [
                                                        _c("strong", [
                                                          _vm._v(
                                                            "Most Recent\n                                                        Valuation: "
                                                          )
                                                        ]),
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.recentValuation
                                                          ) +
                                                            "\n                                                    "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm.numberOfEmployee
                                                  ? _c(
                                                      "li",
                                                      {
                                                        staticClass:
                                                          "li-margin-top"
                                                      },
                                                      [
                                                        _c("strong", [
                                                          _vm._v(
                                                            "Number Of\n                                                        Employee: "
                                                          )
                                                        ]),
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.numberOfEmployee
                                                          ) +
                                                            "\n                                                    "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm.conglomerate
                                                  ? _c(
                                                      "li",
                                                      {
                                                        staticClass:
                                                          "li-margin-top"
                                                      },
                                                      [
                                                        _c("strong", [
                                                          _vm._v(
                                                            "Number Of\n                                                        Employee: "
                                                          )
                                                        ]),
                                                        _c(
                                                          "a",
                                                          {
                                                            attrs: { href: "" }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Show List of Companies"
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm.companySocialMediaPlatform
                                                  .length
                                                  ? _c(
                                                      "li",
                                                      {
                                                        staticClass:
                                                          "social-media-icon li-margin-top"
                                                      },
                                                      [
                                                        _c(
                                                          "p",
                                                          {
                                                            staticClass: "mb-2"
                                                          },
                                                          [
                                                            _c("strong", [
                                                              _vm._v(
                                                                "Social Media Channels: "
                                                              )
                                                            ])
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _vm._l(
                                                          _vm.companySocialMediaPlatform,
                                                          function(
                                                            platform,
                                                            platformIndex
                                                          ) {
                                                            return [
                                                              _c(
                                                                "a",
                                                                {
                                                                  attrs: {
                                                                    href: _vm.validateURL(
                                                                      platform
                                                                        .pivot
                                                                        .value
                                                                    ),
                                                                    target:
                                                                      "_blank"
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
                                                                                version:
                                                                                  "1.1",
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
                                                                                width:
                                                                                  "22px",
                                                                                height:
                                                                                  "22px",
                                                                                preserveAspectRatio:
                                                                                  "xMidYMid meet",
                                                                                viewBox:
                                                                                  "0 0 32 32"
                                                                              }
                                                                            },
                                                                            [
                                                                              _c(
                                                                                "path",
                                                                                {
                                                                                  attrs: {
                                                                                    d:
                                                                                      "M16.708.027C18.453 0 20.188.016 21.921 0c.105 2.041.839 4.12 2.333 5.563c1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-.063-3.855-.463-5.6-1.291c-.76-.344-1.468-.787-2.161-1.24c-.009 3.896.016 7.787-.025 11.667c-.104 1.864-.719 3.719-1.803 5.255c-1.744 2.557-4.771 4.224-7.88 4.276c-1.907.109-3.812-.411-5.437-1.369C4.307 29.027 2.412 26.12 2.136 23a22.3 22.3 0 0 1-.016-1.984c.24-2.537 1.495-4.964 3.443-6.615c2.208-1.923 5.301-2.839 8.197-2.297c.027 1.975-.052 3.948-.052 5.923c-1.323-.428-2.869-.308-4.025.495a4.618 4.618 0 0 0-1.819 2.333c-.276.676-.197 1.427-.181 2.145c.317 2.188 2.421 4.027 4.667 3.828c1.489-.016 2.916-.88 3.692-2.145c.251-.443.532-.896.547-1.417c.131-2.385.079-4.76.095-7.145c.011-5.375-.016-10.735.025-16.093z",
                                                                                    fill:
                                                                                      "#626262"
                                                                                  }
                                                                                }
                                                                              )
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
                                        "title-link-class":
                                          "tab-menu-responsive",
                                        title: "Classifications",
                                        active: _vm.activeTab === 1
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.loadTabContent(
                                            "receiverClassifications"
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _vm.receiverClassificationlContentLoading
                                        ? _c("div", {
                                            staticClass:
                                              "chat-message-search-loader"
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("b-card-text", [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "row mx-auto w-100 text-center content-div"
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "text-center mt-4 mb-5"
                                              },
                                              [
                                                !_vm.receiverHideCatContainer
                                                  ? _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "row mx-auto w-100"
                                                      },
                                                      _vm._l(
                                                        _vm.receiverMultipleNodes,
                                                        function(each, index) {
                                                          return _c(
                                                            "div",
                                                            {
                                                              key:
                                                                each.categorization_id,
                                                              staticClass:
                                                                "border-0 col-lg-12 col-md-12 pb-3",
                                                              attrs: {
                                                                "no-body": ""
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "CompanyNodeCollapses",
                                                                {
                                                                  attrs: {
                                                                    each: each,
                                                                    objectIndex: index,
                                                                    enableEditButton:
                                                                      _vm.enableEditButton
                                                                  }
                                                                }
                                                              )
                                                            ],
                                                            1
                                                          )
                                                        }
                                                      ),
                                                      0
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _vm.receiverHideCatContainer
                                                  ? _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "text-center"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "Company\n                                                        classifications not found\n                                                    "
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
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
                                        "title-link-class":
                                          "tab-menu-responsive",
                                        title: "Content",
                                        active: _vm.activeTab === 2
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.loadTabContent(
                                            "receiverContent"
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _vm.receiverContentlContentLoading
                                        ? _c("div", {
                                            staticClass:
                                              "chat-message-search-loader"
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c("b-card-text", [
                                        !_vm.receiverHideContent
                                          ? _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "row mx-auto w-100 text-center content-div"
                                              },
                                              [
                                                _c(
                                                  "table",
                                                  {
                                                    staticClass:
                                                      "mt-4 content-table"
                                                  },
                                                  [
                                                    _c("thead", [
                                                      _c("tr", [
                                                        _c("th"),
                                                        _vm._v(" "),
                                                        _c(
                                                          "th",
                                                          {
                                                            staticClass:
                                                              "content-title-text"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Content Title"
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "th",
                                                          {
                                                            staticClass:
                                                              "content-title-text"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Content Type"
                                                            )
                                                          ]
                                                        )
                                                      ])
                                                    ]),
                                                    _vm._v(" "),
                                                    _c(
                                                      "tbody",
                                                      [
                                                        _vm._l(
                                                          _vm.receiverContents,
                                                          function(content) {
                                                            return _c("tr", [
                                                              _c(
                                                                "td",
                                                                [
                                                                  content.media_type ==
                                                                  2
                                                                    ? _c(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "video-thumb-table"
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "router-link",
                                                                            {
                                                                              attrs: {
                                                                                link:
                                                                                  "",
                                                                                to: {
                                                                                  name:
                                                                                    "ViewVideoDetails",
                                                                                  params: {
                                                                                    id:
                                                                                      content.uuid
                                                                                  }
                                                                                }
                                                                              }
                                                                            },
                                                                            [
                                                                              _c(
                                                                                "img",
                                                                                {
                                                                                  staticClass:
                                                                                    "img img-responsive video-btn video-thumb video-image",
                                                                                  attrs: {
                                                                                    src:
                                                                                      "https://view.vzaar.com/" +
                                                                                      content.video_id +
                                                                                      "/image",
                                                                                    alt:
                                                                                      ""
                                                                                  }
                                                                                }
                                                                              )
                                                                            ]
                                                                          )
                                                                        ],
                                                                        1
                                                                      )
                                                                    : _c(
                                                                        "router-link",
                                                                        {
                                                                          attrs: {
                                                                            link:
                                                                              "",
                                                                            to: {
                                                                              name:
                                                                                "ViewAudioDetails",
                                                                              params: {
                                                                                id:
                                                                                  content.uuid
                                                                              }
                                                                            }
                                                                          }
                                                                        },
                                                                        [
                                                                          _c(
                                                                            "img",
                                                                            {
                                                                              staticClass:
                                                                                "audio-image",
                                                                              attrs: {
                                                                                src:
                                                                                  "/images/audio_thumb.png",
                                                                                alt:
                                                                                  ""
                                                                              }
                                                                            }
                                                                          )
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
                                                                    "content-text"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      _vm._f(
                                                                        "truncate"
                                                                      )(
                                                                        content.name,
                                                                        100,
                                                                        "..."
                                                                      )
                                                                    )
                                                                  )
                                                                ]
                                                              ),
                                                              _vm._v(" "),
                                                              content.media_type ==
                                                              2
                                                                ? _c(
                                                                    "td",
                                                                    {
                                                                      staticClass:
                                                                        "content-text"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "Video"
                                                                      )
                                                                    ]
                                                                  )
                                                                : _c(
                                                                    "td",
                                                                    {
                                                                      staticClass:
                                                                        "content-text"
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        "Audio"
                                                                      )
                                                                    ]
                                                                  )
                                                            ])
                                                          }
                                                        ),
                                                        _vm._v(" "),
                                                        _c("tr", [
                                                          _c(
                                                            "td",
                                                            {
                                                              attrs: {
                                                                colspan: "3"
                                                              }
                                                            },
                                                            [
                                                              _vm
                                                                .receiverContentPagination
                                                                .last_page > 1
                                                                ? _c(
                                                                    "pagination",
                                                                    {
                                                                      attrs: {
                                                                        pagination:
                                                                          _vm.receiverContentPagination,
                                                                        offset: 5
                                                                      },
                                                                      on: {
                                                                        paginate: function(
                                                                          $event
                                                                        ) {
                                                                          return _vm.getReceiverContentList()
                                                                        }
                                                                      }
                                                                    }
                                                                  )
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
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.receiverHideContent
                                          ? _c(
                                              "div",
                                              {
                                                staticClass: "text-center mt-4"
                                              },
                                              [
                                                _vm._v(
                                                  "Company Content not\n                                                found\n                                            "
                                                )
                                              ]
                                            )
                                          : _vm._e()
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
                  ])
                : _vm._e()
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("loader", { attrs: { "is-visible": _vm.isLoading } }),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "search-modal",
          attrs: {
            centered: "",
            size: "md",
            "hide-footer": "",
            title: "Search Issuer"
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-sm-12 form-group" },
              [
                _c("v-select", {
                  attrs: {
                    label: "name",
                    filterable: false,
                    options: _vm.memberList,
                    placeholder: "Type here..."
                  },
                  on: { search: _vm.memberSearch, input: _vm.setChatBox },
                  scopedSlots: _vm._u([
                    {
                      key: "option",
                      fn: function(option) {
                        return [
                          _c("div", { staticClass: "d-center" }, [
                            _c("img", {
                              attrs: { src: option.companyPhoto, width: "35" }
                            }),
                            _vm._v(
                              "\n                            " +
                                _vm._s(option.userName) +
                                "\n                        "
                            )
                          ])
                        ]
                      }
                    },
                    {
                      key: "selected-option",
                      fn: function(option) {
                        return [
                          _c("div", { staticClass: "selected d-center" }, [
                            _c("img", {
                              attrs: { src: option.companyPhoto, width: "35" }
                            }),
                            _vm._v(
                              "\n                            " +
                                _vm._s(option.userName) +
                                "\n                        "
                            )
                          ])
                        ]
                      }
                    }
                  ])
                })
              ],
              1
            )
          ])
        ]
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
    return _c("div", { staticClass: "input-group-append" }, [
      _c("span", { staticClass: "btn-chat-search dashboard-search-icon" }, [
        _c("i", { staticClass: "fa fa-search" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "latest-msg-image" }, [
      _c("img", {
        staticClass: "mr-2",
        attrs: { src: "/images/chat-icons/image-file-icon.png", alt: "" }
      }),
      _vm._v("Photo")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "latest-msg-video" }, [
      _c("img", {
        staticClass: "mr-2",
        attrs: { src: "/images/chat-icons/latest-msg-film.png", alt: "" }
      }),
      _vm._v("Video")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "latest-msg-video" }, [
      _c("i", { staticClass: " fa fa-headphones-alt mr-2" }),
      _vm._v("Audio")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "latest-msg-file" }, [
      _c("img", {
        staticClass: "mr-2",
        attrs: { src: "/images/chat-icons/latest-file.png", alt: "" }
      }),
      _vm._v("File")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      {
        staticClass: "info-box-icon",
        staticStyle: { color: "gray", background: "none" }
      },
      [_c("img", { attrs: { src: "/images/chat-icons/film@3x.png", alt: "" } })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      {
        staticClass: "info-box-icon",
        staticStyle: { color: "gray", background: "none" }
      },
      [_c("i", { staticClass: " fa fa-headphones-alt" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "span",
      {
        staticClass: "info-box-icon",
        staticStyle: { color: "gray", background: "none" }
      },
      [
        _c("img", {
          attrs: { src: "/images/chat-icons/file-text@3x.png", alt: "" }
        })
      ]
    )
  },
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/apis/ChatMessages.js":
/*!*******************************************!*\
  !*** ./resources/js/apis/ChatMessages.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

var ajaxRequest = null;
/* harmony default export */ __webpack_exports__["default"] = ({
  latestMessage: function latestMessage(page, query) {
    if (ajaxRequest) {
      ajaxRequest.cancel();
    }

    ajaxRequest = axios.CancelToken.source();
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/chat-messages?page=" + page + "&query_input=" + query, {
      cancelToken: ajaxRequest.token
    });
  },
  memberList: function memberList(query, memberIds) {
    if (ajaxRequest) {
      ajaxRequest.cancel();
    }

    ajaxRequest = axios.CancelToken.source();
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/chat-member-list?query_input=" + query + "&memberIds=" + memberIds, {
      cancelToken: ajaxRequest.token
    });
  },
  updateUserMessageStatus: function updateUserMessageStatus(fromUserId) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get('/update-user-message-status?fromUserId=' + fromUserId);
  },
  chatMemberInfo: function chatMemberInfo(userId) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get('/chat-member-info?userId=' + userId);
  },
  update: function update(data) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post('/update-message', data);
  },
  "delete": function _delete(data) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post('/delete-message', data);
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

/***/ "./resources/js/views/Chat.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Chat.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chat_vue_vue_type_template_id_40c106f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chat.vue?vue&type=template&id=40c106f7& */ "./resources/js/views/Chat.vue?vue&type=template&id=40c106f7&");
/* harmony import */ var _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chat.vue?vue&type=script&lang=js& */ "./resources/js/views/Chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chat.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/Chat.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _Chat_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Chat.vue?vue&type=style&index=1&lang=css& */ "./resources/js/views/Chat.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _Chat_vue_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Chat.vue?vue&type=style&index=2&lang=css& */ "./resources/js/views/Chat.vue?vue&type=style&index=2&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");








/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(
  _Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chat_vue_vue_type_template_id_40c106f7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chat_vue_vue_type_template_id_40c106f7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Chat.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Chat.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Chat.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Chat.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Chat.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Chat.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Chat.vue?vue&type=style&index=1&lang=css&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Chat.vue?vue&type=style&index=1&lang=css& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Chat.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Chat.vue?vue&type=style&index=2&lang=css&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Chat.vue?vue&type=style&index=2&lang=css& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=style&index=2&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Chat.vue?vue&type=style&index=2&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_2_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Chat.vue?vue&type=template&id=40c106f7&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Chat.vue?vue&type=template&id=40c106f7& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_40c106f7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Chat.vue?vue&type=template&id=40c106f7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Chat.vue?vue&type=template&id=40c106f7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_40c106f7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_template_id_40c106f7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);