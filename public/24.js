(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FolderSystem.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FolderSystem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_tree_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-tree-list */ "./node_modules/vue-tree-list/dist/vue-tree-list.umd.min.js");
/* harmony import */ var vue_tree_list__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_tree_list__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_partials_FolderModal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/partials/FolderModal.vue */ "./resources/js/components/partials/FolderModal.vue");
/* harmony import */ var _apis_FolderSystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apis/FolderSystem */ "./resources/js/apis/FolderSystem.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    VueTreeList: vue_tree_list__WEBPACK_IMPORTED_MODULE_0__["VueTreeList"],
    FolderModal: _components_partials_FolderModal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      newTree: {},
      showModal: false,
      folder_name: "New Folder",
      media_icon: "",
      previousFolderName: "",
      updatedFolderName: "",
      lastRootNode: "",
      folderInfoFormData: {
        id: "",
        old_name: "",
        new_name: ""
      },
      childFolderInfoFormData: {
        id: "",
        name: "",
        pid: ""
      },
      dragAndDropFolder: {
        node_id: "",
        node_pid: "",
        target_id: ""
      },
      folderWiseMediaInfo: {
        company_id: "",
        id: "",
        isLeaf: "",
        media_file_id: "",
        pid: ""
      },
      nodeDropBeforeForBradcrumb: {
        id: ""
      },
      data: new vue_tree_list__WEBPACK_IMPORTED_MODULE_0__["Tree"]([])
    };
  },
  methods: {
    forceRerender: function forceRerender() {
      this.componentKey += 1;
    },
    // Node Delete
    onDel: function onDel(node) {
      var vm = this;
      $.confirm({
        title: 'Warning! all subdirectories and content will be moved to the main directory. Are you sure you want to delete this?',
        content: '<hr class="m-0">',
        titleClass: 'font-weight-bold text-center jconfirm-modal-title',
        closeIcon: true,
        columnClass: 'medium',
        animation: 'top',
        closeAnimation: 'top',
        bgOpacity: 0.6,
        buttons: {
          Yes: {
            btnClass: 'btn-success rounded-pill mr-3',
            action: function action() {
              _apis_FolderSystem__WEBPACK_IMPORTED_MODULE_2__["default"].deleteFolder(node.id).then(function (response) {
                var params = {
                  isLeaf: false,
                  media_file_id: 0,
                  id: node.pid
                };
                vm.folderHighlight(params);
                vm.$root.$emit("breadcrumb", params);
                vm.folderWiseMedia(params);
                node.remove();
                toastr.success(response.data.success.message);
                vm.getRootNodeFolder();
              })["catch"](function (error) {
                console.log(error);
              });
            }
          },
          Cancel: {
            btnClass: 'btn-default rounded-pill'
          }
        }
      });
    },
    // Node Edit
    onChangeName: function onChangeName(params) {
      var _this = this;

      this.updatedFolderName = params.newName.trim();

      if (params != "undefined" && params.eventType == "blur") {
        _apis_FolderSystem__WEBPACK_IMPORTED_MODULE_2__["default"].getSingleFolder(params.id).then(function (response) {
          _this.editFolder(params, response.data.data.name);
        })["catch"](function (error) {
          console.log(error);
        });
      }
    },
    // Child Node Add
    onAddNode: function onAddNode(params) {
      this.saveChild(params);
    },
    onClick: function onClick(params) {
      if (!this.$parent.triggeredFromParent) {
        params.toggle();
      } //Data pass to breadcrumb


      if (params.isLeaf == false && params.media_file_id == 0) {
        this.$root.$emit("breadcrumb", params);
      } // Folder Highlight/Selected


      this.folderHighlight(params); //Folder Wide Media

      if (params.isLeaf == false && params.media_file_id == 0) {
        this.folderWiseMedia(params);
      } else {// console.log('This is a file');
      }
    },
    folderHighlight: function folderHighlight(params) {
      if (params.isLeaf == false && params.media_file_id == 0) {
        $("#folder-system-root").find('.folder-highlight-icon').removeClass('folder-highlight-icon');
        $("#folder-system-root").find('.folder-highlight-text').removeClass('folder-highlight-text'); // Add id/classes

        $("#folder-system-root").find('#folder-highlight').removeAttr('id');
        $('#' + params.id + " .folder-name").closest('.vtl-node-main').attr('id', 'folder-highlight');
        $('#folder-system-root').find('.vtl-node-main').removeClass('folder-highlight');
        $('#' + params.id).find('.vtl-node-main').addClass('folder-highlight');
        $('#' + params.id + " .folder-name").addClass('folder-highlight-text');
        $('#' + params.id + " .folder-icon").addClass('folder-highlight-icon');
      } else {// console.log("Files");
      }
    },
    drop: function drop(_ref) {
      var node = _ref.node,
          src = _ref.src,
          target = _ref.target;
      this.nodeDragAndDrop(node, src, target);
    },
    dropBefore: function dropBefore(_ref2) {
      var node = _ref2.node,
          src = _ref2.src,
          target = _ref2.target;
      // console.log("drop-before", node, src, target);
      this.nodeDropBefore(node, src, target);
    },
    dropAfter: function dropAfter(_ref3) {// console.log("drop-after", node, src, target);

      var node = _ref3.node,
          src = _ref3.src,
          target = _ref3.target;
    },
    addNode: function addNode() {
      var node = new vue_tree_list__WEBPACK_IMPORTED_MODULE_0__["TreeNode"]({
        id: Date.now(),
        name: this.folder_name,
        isLeaf: false,
        folder_layer: 0
      });
      if (!this.data.children) this.data.children = [];
      this.data.addChildren(node);
      this.getNewTree();
      this.save();
    },
    getNewTree: function getNewTree() {
      var vm = this;

      function _dfs(oldNode) {
        var newNode = {};

        for (var k in oldNode) {
          if (k !== "children" && k !== "parent") {
            newNode[k] = oldNode[k];
          }
        }

        if (oldNode.children && oldNode.children.length > 0) {
          newNode.children = [];

          for (var i = 0, len = oldNode.children.length; i < len; i++) {
            newNode.children.push(_dfs(oldNode.children[i]));
          }
        }

        return newNode;
      }

      vm.newTree = _dfs(vm.data);
    },
    //Save Root Node Method
    save: function save() {
      var _this2 = this;

      this.lastRootNode = this.newTree.children[this.newTree.children.length - 1];
      _apis_FolderSystem__WEBPACK_IMPORTED_MODULE_2__["default"].save(this.lastRootNode).then(function (response) {
        toastr.success(response.data.success.message);

        _this2.getRootNodeFolder();

        _this2.updatedData();
      })["catch"](function (error) {
        console.log(error);
      });
    },
    //Get Root Node Folder List
    getRootNodeFolder: function getRootNodeFolder() {
      var _this3 = this;

      _apis_FolderSystem__WEBPACK_IMPORTED_MODULE_2__["default"].getRootNodeFolder().then(function (response) {
        _this3.data = new vue_tree_list__WEBPACK_IMPORTED_MODULE_0__["Tree"](response.data.data.children);
        var vi = _this3; // Folder Expanded with caret icon

        $(function () {
          $(".vtl-icon").click(function () {
            var id = $(this).parent().parent().parent().attr("id");
            _apis_FolderSystem__WEBPACK_IMPORTED_MODULE_2__["default"].getSingleFolder(id).then(function (response) {
              var sf = response.data.data;
              vi.folderWiseMedia(sf); //Data pass to breadcrumb

              vi.$root.$emit("breadcrumb", sf);
            })["catch"](function (error) {
              console.log(error);
            });
          });
        }); // End Folder Expanded with caret icon

        _this3.updatedData(); // Media Icon Change


        _apis_FolderSystem__WEBPACK_IMPORTED_MODULE_2__["default"].getAllMediaFiles().then(function (response) {
          for (var i = 0; i < response.data.data.length; i++) {
            switch (response.data.data[i].media_type) {
              case 1:
                $('#' + response.data.data[i].id + " .folder-name").parent().parent().children().first().children().removeClass('vtl-icon vtl-menu-icon vtl-icon-file').addClass('fas fa-headphones media-type-icon');
                break;

              case 2:
                $('#' + response.data.data[i].id + " .folder-name").parent().parent().children().first().children().removeClass('vtl-icon vtl-menu-icon vtl-icon-file').addClass('fas fa-video media-type-icon');
                break;
            }
          }
        })["catch"](function (error) {
          console.log(error);
        });
      })["catch"](function (error) {
        console.log(error);
      });
    },
    // Edit Folder
    editFolder: function editFolder(folderInfo, previousFolderName) {
      var _this4 = this;

      this.folderInfoFormData.id = folderInfo.id;
      this.folderInfoFormData.old_name = previousFolderName;
      this.folderInfoFormData.new_name = this.updatedFolderName;

      if (folderInfo.newName != "" && previousFolderName != "" && previousFolderName != this.updatedFolderName) {
        _apis_FolderSystem__WEBPACK_IMPORTED_MODULE_2__["default"].editFolder(this.folderInfoFormData).then(function (response) {
          toastr.success(response.data.success.message);

          _this4.getRootNodeFolder();

          _this4.$root.$emit("breadcrumb", _this4.folderInfoFormData);
        })["catch"](function (error) {
          console.log(error);
        });
      } else {
        toastr.warning("No folder edited.");
      }
    },
    // Save Child Method
    saveChild: function saveChild(folderInfo) {
      var _this5 = this;

      this.childFolderInfoFormData.id = folderInfo.id;
      this.childFolderInfoFormData.name = folderInfo.name;
      this.childFolderInfoFormData.pid = folderInfo.pid;
      _apis_FolderSystem__WEBPACK_IMPORTED_MODULE_2__["default"].save(this.childFolderInfoFormData).then(function (response) {
        toastr.success("Sub Folder Created.");
        _this5.data = new vue_tree_list__WEBPACK_IMPORTED_MODULE_0__["Tree"](response.data.data.original.data.children);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    // Folder Drag and Drop
    nodeDragAndDrop: function nodeDragAndDrop(node, src, target) {
      var _this6 = this;

      this.dragAndDropFolder.node_id = node.id;
      this.dragAndDropFolder.node_pid = node.pid;
      this.dragAndDropFolder.node_isLeaf = node.isLeaf;
      this.dragAndDropFolder.node_media_type = node.media_type;
      this.dragAndDropFolder.src_id = src.id;
      this.dragAndDropFolder.src_pid = src.pid;
      this.dragAndDropFolder.target_id = target.id;
      this.dragAndDropFolder.target_pid = target.pid;
      this.dragAndDropFolder.target_isLeaf = target.isLeaf;
      var vi = this;

      if (this.dragAndDropFolder.target_isLeaf != true && // (this.dragAndDropFolder.node_id !=
      // this.dragAndDropFolder.target_id)
      // &&
      this.dragAndDropFolder.node_pid != this.dragAndDropFolder.src_id && this.dragAndDropFolder.src_id != this.dragAndDropFolder.target_id) {
        _apis_FolderSystem__WEBPACK_IMPORTED_MODULE_2__["default"].dragAndDropFolder(this.dragAndDropFolder).then(function (response) {
          // Media Icon Change
          var fi = document.getElementById(_this6.dragAndDropFolder.target_id);
          var medialist = fi.nextElementSibling.querySelectorAll("i.vtl-icon.vtl-menu-icon.vtl-icon-file");

          for (var i = 0; i < medialist.length; i++) {
            if (_this6.dragAndDropFolder.node_media_type === 1) {
              medialist[i].setAttribute("class", "fas fa-headphones media-type-icon");
            }

            if (_this6.dragAndDropFolder.node_media_type === 2) {
              medialist[i].setAttribute("class", "fas fa-video media-type-icon");
            }
          } // End Media Icon Change
          // After file drag and drop..Folder wise media display (Source Directory Update)


          var src_children = src.children;
          var media_file_arr = [];

          for (var _i = 0; _i < src_children.length; _i++) {
            media_file_arr.push(src_children[_i].media_file_id);
          }

          vi.$emit("folderWiseMedia", media_file_arr); // End After file drag and drop..Folder wise media display (Source Directory Update)
          // After file drag and drop..Folder wise media display (Destination Directory Update)

          var target_children = target.children;
          var destination_media_file_arr = [];

          for (var _i2 = 0; _i2 < target_children.length; _i2++) {
            destination_media_file_arr.push(target_children[_i2].media_file_id);
          }

          vi.$emit("folderWiseMedia", destination_media_file_arr); //Data pass to breadcrumb

          _this6.$root.$emit("breadcrumb", target); // End After file drag and drop..Folder wise media display (Destination Directory Update)


          _this6.getRootNodeFolder();

          _this6.folderHighlight(target);
        })["catch"](function (error) {
          console.log(error);
        });
      } else {
        toastr.error("In same directory drag not possible.");
      }
    },
    // Make a child folder to root
    nodeDropBefore: function nodeDropBefore(node, src, target) {
      var _this7 = this;

      this.dragAndDropFolder.node_id = node.id;
      this.dragAndDropFolder.node_media_type = node.media_type;
      this.dragAndDropFolder.target_id = target.pid;
      this.nodeDropBeforeForBradcrumb.id = target.pid;
      var vi = this; // console.log('src: ', src)
      // console.log('node: ', node)
      // console.log('target: ', target)

      if (this.dragAndDropFolder.node_id != this.dragAndDropFolder.target_id) {
        _apis_FolderSystem__WEBPACK_IMPORTED_MODULE_2__["default"].dragAndDropFolder(this.dragAndDropFolder).then(function (response) {
          // Media Icon Change
          var fi = document.getElementById(_this7.dragAndDropFolder.target_id);
          var medialist = fi.nextElementSibling.querySelectorAll("i.vtl-icon.vtl-menu-icon.vtl-icon-file");

          for (var i = 0; i < medialist.length; i++) {
            if (_this7.dragAndDropFolder.node_media_type === 1) {
              medialist[i].setAttribute("class", "fas fa-headphones media-type-icon");
            }

            if (_this7.dragAndDropFolder.node_media_type === 2) {
              medialist[i].setAttribute("class", "fas fa-video media-type-icon");
            }
          } // End Media Icon Change
          // After file drag and drop..Folder wise media display (Source Directory Update)


          var src_children = src.children;
          var media_file_arr = [];

          for (var _i3 = 0; _i3 < src_children.length; _i3++) {
            media_file_arr.push(src_children[_i3].media_file_id);
          }

          vi.$emit("folderWiseMedia", media_file_arr); // End After file drag and drop..Folder wise media display (Source Directory Update)
          // After file drag and drop..Folder wise media display (Destination Directory Update)

          var target_children = target.children;
          var destination_media_file_arr = [];

          for (var _i4 = 0; _i4 < target_children.length; _i4++) {
            destination_media_file_arr.push(target_children[_i4].media_file_id);
          }

          vi.$emit("folderWiseMedia", destination_media_file_arr); //Data pass to breadcrumb

          _this7.$root.$emit("breadcrumb", _this7.nodeDropBeforeForBradcrumb); // End After file drag and drop..Folder wise media display (Destination Directory Update)


          _this7.getRootNodeFolder();
        })["catch"](function (error) {
          console.log(error);
        });
      } else {
        toastr.error("In same directory drag not possible.");
      }
    },
    //Folder Wise Media Files onClick
    folderWiseMedia: function folderWiseMedia(folderInfo) {
      this.folderWiseMediaInfo.company_id = folderInfo.company_id;
      this.folderWiseMediaInfo.id = folderInfo.id;
      this.folderWiseMediaInfo.isLeaf = folderInfo.isLeaf;
      this.folderWiseMediaInfo.media_file_id = folderInfo.media_file_id;
      this.folderWiseMediaInfo.pid = folderInfo.pid;
      var vi = this;
      _apis_FolderSystem__WEBPACK_IMPORTED_MODULE_2__["default"].folderWiseMedia(this.folderWiseMediaInfo).then(function (response) {
        var media_file_arr = [];

        for (var i = 0; i < response.data.data.length; i++) {
          media_file_arr.push(response.data.data[i].media_file_id);
        }

        vi.$emit("folderWiseMedia", media_file_arr);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    updatedData: function updatedData() {
      var _this8 = this;

      _apis_FolderSystem__WEBPACK_IMPORTED_MODULE_2__["default"].getRootNodeFolder().then(function (response) {
        // Only one root folder expanded at a time (with caret icon)
        for (var i = 0; i < response.data.data.children.length; i++) {
          $('#' + response.data.data.children[i].id + " .vtl-icon").click(function () {
            for (var _i5 = 0; _i5 < response.data.data.children.length; _i5++) {
              $('#' + response.data.data.children[_i5].id + " .vtl-icon").parent().parent().parent().next().css({
                'display': 'none'
              });
              $('#' + response.data.data.children[_i5].id + " .vtl-icon").removeClass('vtl-icon-caret-down').addClass('vtl-icon-caret-right');
            }

            var rootFolder = $(this).parent().parent().parent();
            rootFolder.next().css({
              'display': 'block'
            });
            $(this).removeClass('vtl-icon-caret-right').addClass('vtl-icon-caret-down');
          });
        } // End only one root folder expanded at a time (with caret icon)
        // Only one root folder expanded at a time (with name)


        var _loop = function _loop(_i6) {
          $('#' + response.data.data.children[_i6].id + " .folder-name").click(function () {
            for (var _i9 = 0; _i9 < response.data.data.children.length; _i9++) {
              $('#' + response.data.data.children[_i9].id + " .folder-name").parent().parent().parent().next().css({
                'display': 'none'
              });
              $('#' + response.data.data.children[_i9].id + " .vtl-icon").removeClass('vtl-icon-caret-down').addClass('vtl-icon-caret-right');
            }

            var rootFolder = $(this).parent().parent().parent();
            rootFolder.next().css({
              'display': 'block'
            });
            $('#' + response.data.data.children[_i6].id + " .vtl-icon").removeClass('vtl-icon-caret-right').addClass('vtl-icon-caret-down');
          });
        };

        for (var _i6 = 0; _i6 < response.data.data.children.length; _i6++) {
          _loop(_i6);
        } // End only one root folder expanded at a time (with name)
        // Only one root folder expanded at a time (with folder icon)


        var _loop2 = function _loop2(_i7) {
          $('#' + response.data.data.children[_i7].id + " .fa-folder-open").click(function () {
            for (var _i10 = 0; _i10 < response.data.data.children.length; _i10++) {
              $('#' + response.data.data.children[_i10].id + " .fa-folder-open").parent().parent().parent().parent().parent().next().css({
                'display': 'none'
              });
              $('#' + response.data.data.children[_i10].id + " .vtl-icon").removeClass('vtl-icon-caret-down').addClass('vtl-icon-caret-right');
            }

            var rootFolder = $(this).parent().parent().parent().parent().parent();
            rootFolder.next().css({
              'display': 'block'
            });
            $('#' + response.data.data.children[_i7].id + " .vtl-icon").removeClass('vtl-icon-caret-right').addClass('vtl-icon-caret-down');
          });
        };

        for (var _i7 = 0; _i7 < response.data.data.children.length; _i7++) {
          _loop2(_i7);
        } // End only one root folder expanded at a time (with folder icon)
        // Only one root folder expanded at a time (with folder edit icon)


        var _loop3 = function _loop3(_i8) {
          $('#' + response.data.data.children[_i8].id + " .fa-edit").click(function () {
            for (var _i11 = 0; _i11 < response.data.data.children.length; _i11++) {
              $('#' + response.data.data.children[_i11].id + " .fa-edit").parent().parent().parent().parent().parent().next().css({
                'display': 'none'
              });
              $('#' + response.data.data.children[_i11].id + " .vtl-icon").removeClass('vtl-icon-caret-down').addClass('vtl-icon-caret-right');
            }

            var rootFolder = $(this).parent().parent().parent().parent().parent();
            rootFolder.next().css({
              'display': 'block'
            });
            $('#' + response.data.data.children[_i8].id + " .vtl-icon").removeClass('vtl-icon-caret-right').addClass('vtl-icon-caret-down');
          });
        };

        for (var _i8 = 0; _i8 < response.data.data.children.length; _i8++) {
          _loop3(_i8);
        } // End only one root folder expanded at a time (with folder edit icon)

      })["catch"](function (error) {
        console.log(error);
      }); // Media Icon Change

      _apis_FolderSystem__WEBPACK_IMPORTED_MODULE_2__["default"].getAllMediaFiles().then(function (response) {
        for (var i = 0; i < response.data.data.length; i++) {
          switch (response.data.data[i].media_type) {
            case 1:
              $('#' + response.data.data[i].id + " .folder-name").parent().parent().children().first().children().removeClass('vtl-icon vtl-menu-icon vtl-icon-file').addClass('fas fa-headphones media-type-icon');
              break;

            case 2:
              $('#' + response.data.data[i].id + " .folder-name").parent().parent().children().first().children().removeClass('vtl-icon vtl-menu-icon vtl-icon-file').addClass('fas fa-video media-type-icon');
              break;
          }
        } // End Media Icon Change


        if (_this8.$parent.draggingFromTable) {
          _this8.changeFileIcon();
        }
      })["catch"](function (error) {
        console.log(error);
      }); // All Folder

      _apis_FolderSystem__WEBPACK_IMPORTED_MODULE_2__["default"].getAllFolders().then(function (response) {
        var _loop4 = function _loop4(i) {
          $('#' + response.data.data[i].id + " .vtl-icon").click(function () {
            $("#folder-system-root").find('.folder-highlight-icon').removeClass('folder-highlight-icon');
            $("#folder-system-root").find('.folder-highlight-text').removeClass('folder-highlight-text'); // Add id/classes

            $("#folder-system-root").find('#folder-highlight').removeAttr('id');
            $('#' + response.data.data[i].id + " .folder-name").closest('.vtl-node-main').attr('id', 'folder-highlight');
            $('#folder-system-root').find('.vtl-node-main').removeClass('folder-highlight');
            $('#' + response.data.data[i].id).find('.vtl-node-main').addClass('folder-highlight');
            $('#' + response.data.data[i].id + " .folder-name").addClass('folder-highlight-text');
            $('#' + response.data.data[i].id + " .folder-icon").addClass('folder-highlight-icon');
          });
          $('#' + response.data.data[i].id + " #edit-btn").click(function () {
            $("#folder-system-root").find('.vtl-node-main').removeAttr('style');
            $("#folder-system-root").find('.folder-highlight-icon').removeClass('folder-highlight-icon');
            $("#folder-system-root").find('.folder-highlight-text').removeClass('folder-highlight-text'); // Add id/classes

            $("#folder-system-root").find('#folder-highlight').removeAttr('id');
            $('#' + response.data.data[i].id + " .folder-name").closest('.vtl-node-main').attr('id', 'folder-highlight');
            $('#folder-system-root').find('.vtl-node-main').removeClass('folder-highlight');
            $('#' + response.data.data[i].id).find('.vtl-node-main').addClass('folder-highlight');
            $('#' + response.data.data[i].id + " .folder-name").addClass('folder-highlight-text');
            $('#' + response.data.data[i].id + " .folder-icon").addClass('folder-highlight-icon');
          });
        };

        for (var i = 0; i < response.data.data.length; i++) {
          _loop4(i);
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    //works when dragged from table to folder
    changeFileIcon: function changeFileIcon() {
      if (this.$parent.draggedFileMediaContentId) {
        var droppedFileElement = $('#' + this.$parent.draggedFileMediaContentId).find('i.vtl-icon.vtl-menu-icon.vtl-icon-file');

        if (droppedFileElement.length) {
          droppedFileElement.removeClass('vtl-icon vtl-menu-icon vtl-icon-file');

          if (this.$parent.draggedFileType == 1) {
            droppedFileElement.addClass('fas fa-headphones media-type-icon');
          }

          if (this.$parent.draggedFileType == 2) {
            droppedFileElement.addClass('fas fa-video media-type-icon');
          }
        }
      }

      this.$parent.draggingFromTable = false;
      this.$parent.draggedFileMediaContentId = '';
      this.$parent.draggedFileType = '';
    }
  },
  created: function created() {
    this.getRootNodeFolder();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/Breadcrumb.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/partials/Breadcrumb.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apis_FolderSystem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../apis/FolderSystem */ "./resources/js/apis/FolderSystem.js");
//
//
//
//
//
//
//
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
      items: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$root.$on("breadcrumb", function (data) {
      var id = data.id;
      _apis_FolderSystem__WEBPACK_IMPORTED_MODULE_0__["default"].getBreadcrumb(id).then(function (response) {
        _this.items = [];

        for (var i = 0; i < response.data.length; i++) {
          _this.items.push(response.data[i].name);
        }
      })["catch"](function (error) {
        console.log(error);
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ManageContent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ManageContent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apis_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apis/Content */ "./resources/js/apis/Content.js");
/* harmony import */ var _apis_Common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apis/Common */ "./resources/js/apis/Common.js");
/* harmony import */ var _components_CompanyNodeCollapses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CompanyNodeCollapses */ "./resources/js/components/CompanyNodeCollapses.vue");
/* harmony import */ var _components_FolderSystem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FolderSystem */ "./resources/js/components/FolderSystem.vue");
/* harmony import */ var _components_partials_Breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/partials/Breadcrumb */ "./resources/js/components/partials/Breadcrumb.vue");
/* harmony import */ var _apis_AudioVideo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../apis/AudioVideo */ "./resources/js/apis/AudioVideo.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      videoSearch: "",
      audioSearch: "",
      totalVideo: 1,
      totalAudio: 0,
      isLoading: false,
      mediaHierarchyInfo: "",
      activeTab: 0,
      industryColor: "#D4AF37",
      audios: [],
      videos: [],
      audioUrl: '',
      audioName: '',
      videoSrc: '',
      audioTabContentLoaded: false,
      videoTabContentLoaded: false,
      contentLoading: false,
      videoPagination: {
        'current_page': 1
      },
      audioPagination: {
        'current_page': 1
      },
      publicShareLink: "",
      sharableMediaId: "",
      sharableMediaUUId: "",
      shareMediaType: "",
      allSubjectModalTitle: "",
      selectedMediaSubject: [],
      linkGrayOut: '',
      enableClassificationsEditButton: false,
      slug: '',
      folderWiseMediaData: [],
      draggedFileId: '',
      draggedFileType: '',
      draggedFileMediaContentId: '',
      targetedFolderId: '',
      triggeredFromParent: false,
      draggingFromTable: false,
      isLeaf: false,
      errors: [],
      imageSrc: "",
      isDisabled: false,
      isUploading: false,
      isDragging: false,
      dragCount: 0,
      videoFileId: ''
    };
  },
  props: ['resumble'],
  methods: {
    folderWiseMedia: function folderWiseMedia(values) {
      this.folderWiseMediaData = JSON.stringify(values);
      this.audioTabContentLoaded = false;
      this.videoTabContentLoaded = false;

      if (this.activeTab == 1) {
        this.getAudioList(true);
      } else {
        this.getVideoList(true);
      }
    },
    showModal: function showModal(e) {
      this.audioUrl = e.target.getAttribute('data-audio-url');
      this.audioName = e.target.getAttribute('data-audio-name');
      this.$root.$emit('bv::show::modal', 'modal-view-audio', '#btnShow');
    },
    getAudioList: function getAudioList() {
      var _this = this;

      var clearPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (clearPage) {
        this.audioPagination.current_page = 1;
        this.contentLoading = true;
      } else {
        this.isLoading = true;
      }

      _apis_Content__WEBPACK_IMPORTED_MODULE_1__["default"].audio(this.audioPagination.current_page, this.audioSearch, this.folderWiseMediaData).then(function (response) {
        _this.isLoading = false;
        _this.contentLoading = false;
        _this.audios = [];
        _this.audios = response.data.data.data.data;
        _this.audioPagination = response.data.data.pagination;
        _this.totalAudio = response.data.data.data.total;
        _this.totalVideo = response.data.data.total_video;
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
    getVideoList: function getVideoList() {
      var _this2 = this;

      var clearPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (clearPage) {
        this.videoPagination.current_page = 1;
        this.contentLoading = true;
      } else {
        this.isLoading = true;
      }

      _apis_Content__WEBPACK_IMPORTED_MODULE_1__["default"].video(this.videoPagination.current_page, this.videoSearch, this.folderWiseMediaData).then(function (response) {
        _this2.isLoading = false;
        _this2.contentLoading = false;
        _this2.videos = [];
        _this2.videos = response.data.data.data.data;
        _this2.videoPagination = response.data.data.pagination;
        _this2.totalVideo = response.data.data.data.total;
        _this2.totalAudio = response.data.data.total_audio; // this.videoIds = Object.keys(this.videos).map((key) => {
        //     return this.videos[key].id
        // })
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
    deleteMedia: function deleteMedia(item, type) {
      var vueInstance = this;
      $.confirm({
        title: 'Are you sure you want to remove this file?',
        content: '<hr class="m-0">',
        titleClass: 'font-weight-bold text-center jconfirm-modal-title',
        closeIcon: true,
        columnClass: 'medium',
        animation: 'top',
        closeAnimation: 'top',
        bgOpacity: 0.6,
        buttons: {
          Yes: {
            btnClass: 'btn-success rounded-pill mr-3',
            action: function action() {
              var _this3 = this;

              vueInstance.isLoading = true;
              _apis_Content__WEBPACK_IMPORTED_MODULE_1__["default"].deleteMediaFile(item.id).then(function (response) {
                vueInstance.isLoading = false;
                var index = vueInstance[type].indexOf(item);
                vueInstance[type].splice(index, 1);
                toastr.success(response.data.success.message);
                vueInstance.$refs.fs.getRootNodeFolder();
              })["catch"](function (error) {
                vueInstance.isLoading = false;

                if (error.response.status === 403) {
                  toastr.error(error.response.data.error.message);
                } else if (error.response.status == 401) {
                  _this3.$emit('logout');
                } else {
                  toastr.error(error);
                }
              });
            }
          },
          Cancel: {
            btnClass: 'btn-default rounded-pill'
          }
        }
      });
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

        case 'document':
          this.activeTab = 2;
          break;
      }
    },
    randomColor: function randomColor(index) {
      var industryColor;

      if (index == 0) {
        industryColor = '#990100';
      } else if (index % 3 == 0) {
        industryColor = '#990100';
      } else if (index % 3 == 1) {
        industryColor = '#ED7E31';
      } else if (index % 3 == 2) {
        industryColor = '#2F9898';
      }

      return industryColor;
    },
    showAllSubjectModal: function showAllSubjectModal(data, type) {
      this.allSubjectModalTitle = "Subjects of Company " + type;
      this.selectedMediaSubject = data;
      this.$bvModal.show('modalAllSubject');
    },
    showAllTaxonomiesModal: function showAllTaxonomiesModal(event) {
      var _this4 = this;

      this.isLoading = true;
      this.mediaHierarchyInfo = [];
      axios.get('/api/get-media-categorization-lookup-for-collapse?id=' + event.target.getAttribute('data-taxonomy-id') + '&uuid=' + event.target.getAttribute('data-uuid')).then(function (response) {
        _this4.mediaHierarchyInfo = response.data.data;

        _this4.$refs['all-taxonomies-modal'].show();

        _this4.isLoading = false;
      })["catch"](function (error) {
        _this4.isLoading = false;

        if (error.response.status === 422) {
          toastr.error(error.response.data.error.message);
        } else if (error.response.status == 401) {
          _this4.$emit('logout');
        } else {
          toastr.error(error);
        }
      });
    },
    searchContent: function searchContent(type) {
      if ('video' == type) {
        this.getVideoList('clearPage');
      } else if ('audio' == type) {
        this.getAudioList('clearPage');
      }
    },
    shareMediaLink: function shareMediaLink(mediaId, mediaUId, publicationStatus, type, slug) {
      this.sharableMediaId = mediaId;
      this.sharableMediaUUId = mediaUId;
      this.shareMediaType = type;
      this.oneClickShareData = [];
      this.ischeckAllSocial = false;
      this.oneClickMessage = "";

      if (publicationStatus == 0) {
        // this.$bvModal.show('modalCheckPublicationStatus');
        this.publishedAndShareLink();
      } else {
        this.publicShareLink = document.location.origin + '/company/' + slug + '/' + type + '/' + mediaUId;
        this.$bvModal.show('modalShareLink');
      }
    },
    publishedAndShareLink: function publishedAndShareLink() {
      var _this5 = this;

      _apis_Content__WEBPACK_IMPORTED_MODULE_1__["default"].changeMediaFileStatus({
        'id': this.sharableMediaId,
        'status': 0
      }).then(function (response) {
        _this5.publicShareLink = document.location.origin + '/company/' + _this5.slug + '/' + _this5.shareMediaType + '/' + _this5.sharableMediaUUId;
        _this5.publicationStatus = 1;

        if (_this5.shareMediaType == 'video-details') {
          $('#publicationStatusVideo' + _this5.sharableMediaId).val(1).trigger("change");
        }

        if (_this5.shareMediaType == 'audio-details') {
          $('#publicationStatusAudio' + _this5.sharableMediaId).val(1).trigger("change");
        }
      })["catch"](function (error) {
        toastr.error(error);
      }); //this.$bvModal.hide('modalCheckPublicationStatus');

      this.$bvModal.show('modalShareLink');
    },
    changePublishedStatus: function changePublishedStatus(type, itemId, currentStatus) {
      var vueInstance = this;
      $.confirm({
        title: 'Publish status changes',
        content: "Are you sure you want to change publish status?",
        buttons: {
          Yes: {
            btnClass: 'btn-success',
            action: function action() {
              var _this6 = this;

              vueInstance.isLoading = true;
              _apis_Content__WEBPACK_IMPORTED_MODULE_1__["default"].changeMediaFileStatus({
                'id': itemId,
                'status': currentStatus
              }).then(function (response) {
                vueInstance.isLoading = false;
                toastr.success(response.data.success.message);
              })["catch"](function (error) {
                vueInstance.isLoading = false;

                if (error.response.status === 403) {
                  $.confirm({
                    title: '',
                    content: error.response.data.error.message,
                    columnClass: 'medium',
                    type: 'purple',
                    typeAnimated: true,
                    buttons: {
                      OK: function OK() {}
                    }
                  });
                } else if (error.response.status == 401) {
                  _this6.$emit('logout');
                } else {
                  toastr.error(error);
                }

                if (type == 'video') {
                  $('#publicationStatusVideo' + itemId).val(currentStatus).trigger("change");
                }

                if (type == 'audio') {
                  $('#publicationStatusAudio' + itemId).val(currentStatus).trigger("change");
                }
              });
            }
          },
          Cancel: {
            action: function action() {
              if (type == 'video') {
                $('#publicationStatusVideo' + itemId).val(currentStatus).trigger("change");
              }

              if (type == 'audio') {
                $('#publicationStatusAudio' + itemId).val(currentStatus).trigger("change");
              }
            }
          }
        }
      });
    },
    handleDragStart: function handleDragStart(event) {
      event.dataTransfer.setData('Text', 'foo');
    },
    handleOnDragOver: function handleOnDragOver(event) {
      event.preventDefault();
    },
    onDragLeave: function onDragLeave(event) {
      if (event.target.getAttribute('data-id')) {
        this.draggedFileId = event.target.getAttribute('data-id');
        this.draggedFileType = event.target.getAttribute('data-type');
        this.draggedFileMediaContentId = event.target.getAttribute('data-media-content-id');
        this.draggingFromTable = true;
      }
    },
    mouseDownONElm: function mouseDownONElm(e) {
      var dataId = e.target.getAttribute('data-id');
      var allMovableClasses = document.getElementsByClassName('moveable');

      for (var i = 0; i < allMovableClasses.length; i++) {
        if (allMovableClasses[i].getAttribute('data-id') != dataId) {
          allMovableClasses[i].closest('td').classList.add('disable-pointer');
        }
      }
    },
    mouseUpONElm: function mouseUpONElm(e) {
      var dataId = e.target.getAttribute('data-id');
      var allMovableClasses = document.getElementsByClassName('moveable');

      for (var i = 0; i < allMovableClasses.length; i++) {
        if (allMovableClasses[i].getAttribute('data-id') != dataId) {
          allMovableClasses[i].closest('td').classList.remove('disable-pointer');
        }
      }
    },
    updateFileFolder: function updateFileFolder(mediaFileId, folderId) {
      var _arguments = arguments,
          _this7 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var isLeaf;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isLeaf = _arguments.length > 2 && _arguments[2] !== undefined ? _arguments[2] : false;
                _apis_Content__WEBPACK_IMPORTED_MODULE_1__["default"].updateFilFolder({
                  'media_file_id': mediaFileId,
                  'folder_id': folderId,
                  'is_leaf': isLeaf
                }).then(function (response) {
                  if (response.data.resultCode == 200) {
                    _this7.$refs.fs.getRootNodeFolder();
                  }
                })["catch"](function (error) {
                  toastr.error(error);
                })["finally"](function () {
                  return _this7.triggerTargetedFolderClick();
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    triggerTargetedFolderClick: function triggerTargetedFolderClick() {
      if (!this.isLeaf) {
        this.triggeredFromParent = true; //trigger click event on targeted folder to make it expanded.

        var element = document.getElementById(this.targetedFolderId);
        element.querySelector('.vtl-node-content').click();
      }

      this.draggedFileId = '';
      this.targetedFolderId = '';
      this.isLeaf = false;
      this.triggeredFromParent = false;
    },
    //cropper
    showImageCropperModal: function showImageCropperModal(media_file_id) {
      this.videoFileId = media_file_id;
      this.$refs['image-cropper-modal'].show();
    },
    closeImageCropperModal: function closeImageCropperModal() {
      var vi = this;

      if (this.imageSrc) {
        $.confirm({
          title: 'Discard changes',
          content: "Are you sure you want to discard changes you made?",
          columnClass: 'medium',
          type: 'blue',
          typeAnimated: true,
          buttons: {
            Cancel: function Cancel() {},
            Discard: function Discard() {
              vi.$refs['image-cropper-modal'].hide();
              vi.imageSrc = "";
              vi.isDisabled = false;
              vi.isUploading = false;
            }
          }
        }, this);
      } else {
        this.$refs['image-cropper-modal'].hide();
      }
    },
    setImage: function setImage(file) {
      var _this8 = this;

      // const file = e.target.files[0]
      if (!!file[0]) {
        if (!file[0].type.includes("image/")) {
          alert("Please select an image file");
          return;
        }

        if (typeof FileReader === "function") {
          var reader = new FileReader();

          reader.onload = function (event) {
            _this8.imageSrc = event.target.result; // Rebuild cropperjs with the updated source

            _this8.$refs.imageCropper.cropper.replace(event.target.result);
          };

          reader.readAsDataURL(file[0]);
        } else {
          alert("Sorry, FileReader API not supported");
        }
      }
    },
    imageRotate: function imageRotate() {
      // Get image data for post processing, e.g. upload or setting image src
      this.$refs.imageCropper.cropper.rotate(90);
    },
    OnCropperDragEnter: function OnCropperDragEnter(e) {
      e.preventDefault();
      this.dragCount++;
      this.isDragging = true;
      return false;
    },
    OnCropperDragLeave: function OnCropperDragLeave(e) {
      e.preventDefault();
      this.dragCount--;
      if (this.dragCount <= 0) this.isDragging = false;
    },
    onInputChange: function onInputChange(e) {
      this.setImage(e.target.files);
    },
    onCropperDrop: function onCropperDrop(e) {
      e.preventDefault();
      e.stopPropagation();
      this.isDragging = false;
      this.setImage(e.dataTransfer.files);
    },
    uploadImage: function uploadImage() {
      this.isDisabled = true;
      this.isUploading = true;
      var vi = this;
      this.$refs.imageCropper.cropper.getCroppedCanvas().toBlob(function (blob) {
        var formData = new FormData();
        formData.append("name", "image-name-" + new Date().getTime());
        formData.append("file", blob);
        _apis_AudioVideo__WEBPACK_IMPORTED_MODULE_6__["default"].updateVideoThumbnail(formData, vi.videoFileId).then(function (response) {
          vi.videos.forEach(function (video, index) {
            if (video.id == vi.videoFileId) {
              vi.videos[index].thumb_url = response.data.data.thumb_url;
              return;
            }
          });
          vi.$refs['image-cropper-modal'].hide();
          vi.isDisabled = false;
          vi.isUploading = false;
          vi.imageSrc = '';
          toastr.success(response.data.success.message);
        })["catch"](function (error) {
          toastr.error(error);
        });
      });
    }
  },
  mounted: function mounted() {
    this.slug = localStorage.getItem('companySlugName');

    if (localStorage.getItem('videoUploadRemainingDays') == 0 && localStorage.getItem('isVideoUploaded') == 'no') {
      this.linkGrayOut = 'trialExpired';
    }

    switch (this.$route.hash) {
      case '#video':
        this.activeTab = 0;
        break;

      case '#audio':
        this.activeTab = 1;
        this.getAudioList();
        this.audioTabContentLoaded = true;
        break;

      case '#file':
        this.activeTab = 2;
        break;
    }

    var vi = this;

    if (!!this.resumble && this.resumble.files.length > 0) {
      this.resumble.on('fileSuccess', function (file) {
        switch (vi.activeTab) {
          case 1:
            vi.getAudioList('clearPage');

            if (!!vi.$refs.fs) {
              vi.$refs.fs.getRootNodeFolder();
            }

            break;

          case 0:
            vi.getVideoList('clearPage');

            if (!!vi.$refs.fs) {
              vi.$refs.fs.getRootNodeFolder();
            }

        }
      });
    }
  },
  created: function () {
    var _created = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var _this9 = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              this.numShortFormatter = _apis_Common__WEBPACK_IMPORTED_MODULE_2__["default"].ViewListenNumFormatter;
              this.getVideoList(); //this.socialSharing();

              document.addEventListener('keydown', function (evt) {
                if (evt.keyCode == 27) {
                  if (!!jconfirm.instances[0]) {
                    jconfirm.instances[0].close();
                  }
                }
              });

              document.ondrop = /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
                  var folder;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          e.preventDefault();
                          folder = e.target.closest('.vtl-node.vtl-tree-node');

                          if (folder && folder.getAttribute('id')) {
                            _this9.targetedFolderId = folder.getAttribute('id');
                          } else if (e.target.closest('.vtl-node.vtl-leaf-node')) {
                            _this9.targetedFolderId = e.target.closest('.vtl-node.vtl-leaf-node').getAttribute('id');
                            _this9.isLeaf = true;
                          }

                          if (!(!!_this9.draggedFileId && !!_this9.targetedFolderId)) {
                            _context2.next = 6;
                            break;
                          }

                          _context2.next = 6;
                          return _this9.updateFileFolder(_this9.draggedFileId, _this9.targetedFolderId, _this9.isLeaf);

                        case 6:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }();

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  components: {
    loader: function loader() {
      return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../components/Loader */ "./resources/js/components/Loader.vue"));
    },
    pagination: function pagination() {
      return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! ../components/PaginationComponent */ "./resources/js/components/PaginationComponent.vue"));
    },
    ShareModal: function ShareModal() {
      return Promise.all(/*! import() */[__webpack_require__.e(11), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, /*! ../components/ShareModal */ "./resources/js/components/ShareModal.vue"));
    },
    CompanyNodeCollapses: _components_CompanyNodeCollapses__WEBPACK_IMPORTED_MODULE_3__["default"],
    FolderSystem: _components_FolderSystem__WEBPACK_IMPORTED_MODULE_4__["default"],
    Breadcrumb: _components_partials_Breadcrumb__WEBPACK_IMPORTED_MODULE_5__["default"],
    ImageCropper: function ImageCropper() {
      return Promise.all(/*! import() */[__webpack_require__.e(12), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! ../components/ImageCropper */ "./resources/js/components/ImageCropper.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FolderSystem.vue?vue&type=style&index=0&lang=scss&rel=stylesheet%2Fscss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FolderSystem.vue?vue&type=style&index=0&lang=scss&rel=stylesheet%2Fscss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vtl {\n  width: 245px;\n}\n.vtl .vtl-tree-margin {\n  margin-left: 10px;\n}\n.vtl .vtl-up {\n  margin-top: 0px;\n}\n.vtl .vtl-drag-disabled {\n  background-color: #d0cfcf;\n}\n.vtl .vtl-drag-disabled:hover {\n  background-color: #d0cfcf;\n}\n.vtl .vtl-disabled {\n  background-color: #d0cfcf;\n}\n.vtl .vtl-icon-plus {\n  display: none;\n  visibility: hidden;\n}\n.vtl .media-type-icon {\n  font-size: 12px;\n  color: #1e0857;\n  padding-right: 5px;\n}\n.vtl .vtl-node-main {\n  position: relative;\n  border-bottom: 1px solid #ccc;\n}\n.vtl .vtl-node-main .vtl-operation {\n  position: absolute;\n  right: 0;\n}\n.vtl .vtl-node-main .vtl-caret {\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  top: 9px;\n}\n#folder-highlight, #folder-highlight:hover, #folder-highlight:focus,\n.folder-highlight, .folder-highlight:hover, .folder-highlight:focus {\n  background: #2a0a26;\n  color: #FFF;\n}\n#folder-highlight:hover #edit-btn,\n.folder-highlight:hover #edit-btn {\n  color: #FFFFFF;\n}\n#folder-highlight:hover #sub-folder-btn,\n.folder-highlight:hover #sub-folder-btn {\n  color: #FFFFFF;\n}\n#folder-highlight:hover .vtl-icon,\n.folder-highlight:hover .vtl-icon {\n  color: #FFFFFF;\n}\n.folder-highlight-text {\n  color: #FFFFFF !important;\n}\n.folder-highlight-icon {\n  color: #FFFFFF !important;\n}\n.vtl-input {\n  background: #2a0a26;\n  width: 120px;\n}\n.folder-system #folder-highlight * {\n  color: #FFFFFF !important;\n}\n.folder-system .folder-highlight * {\n  color: #FFFFFF !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FolderSystem.vue?vue&type=style&index=1&id=ac4404b0&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FolderSystem.vue?vue&type=style&index=1&id=ac4404b0&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.muted[data-v-ac4404b0] {\r\n    color: gray;\r\n    font-size: 80%;\r\n    display: none;\n}\n.folder-system .folder-create[data-v-ac4404b0] {\r\n    border-radius: 6px;\r\n    border: none;\r\n    background-color: #5352ED;\r\n    font-size: 0.78rem;\r\n    padding: 5px 5px;\r\n    margin-bottom: 40px;\r\n    width: 100%;\n}\n.folder-system .folder-create[data-v-ac4404b0]:hover {\r\n    background-color: #3C34AC;\n}\n@media (max-width: 1280px) {\n.folder-system .folder-create[data-v-ac4404b0]{\r\n        font-size: 0.72rem;\r\n        padding: 8px 10px;\n}\n}\n.folder-system .folder-create i.fas[data-v-ac4404b0] {\r\n    padding: 0px 0px;\n}\n.folder-system .folder-list[data-v-ac4404b0] {\r\n    background: #ffffff;\r\n    width: auto;\r\n    height: 450px;\r\n    overflow: scroll;\n}\n#scrollbar-style[data-v-ac4404b0]::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    background-color: #f5f5f5;\r\n    border-radius: 7px;\n}\n#scrollbar-style[data-v-ac4404b0]::-webkit-scrollbar {\r\n    width: 7px;\r\n    background-color: #f5f5f5;\n}\n#scrollbar-style[data-v-ac4404b0]::-webkit-scrollbar-thumb {\r\n    border-radius: 7px;\r\n    background-image: -webkit-gradient(\r\n        linear,\r\n        left bottom,\r\n        left top,\r\n        color-stop(0.44, rgb(122, 153, 217)),\r\n        color-stop(0.5, rgb(73, 125, 189)),\r\n        color-stop(0.86, rgb(30, 8, 87))\r\n    );\n}\n#scrollbar-style[data-v-ac4404b0]::-webkit-scrollbar:horizontal {\r\n    height: 7px;\n}\n.folder-system .vtl[data-v-ac4404b0]:hover {\r\n    cursor: pointer;\n}\n.folder-system .icon i.far[data-v-ac4404b0] {\r\n    color: #828282;\r\n    padding: 5px;\r\n    font-size: 14px;\r\n    cursor: pointer;\n}\n.folder-system .icon i.fa-trash-alt[data-v-ac4404b0] {\r\n    color: red;\n}\n.folder-system .icon i.fa-folder[data-v-ac4404b0] {\r\n    cursor: default;\r\n    padding-right: 8px;\r\n    font-size: 18px;\n}\n.folder-system .folder-name[data-v-ac4404b0] {\r\n    color: #1e0857;\r\n    font-size: 12px;\r\n    padding: 17px 105px 11px 20px;\r\n    margin-left: -20px;\n}\n.folder-open[data-v-ac4404b0] {\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    color: #dddddd;\n}\n.folder-system .modal-title[data-v-ac4404b0] {\r\n    margin-left: 0px;\r\n    font-size: 18px;\r\n    font-weight: 600;\n}\n.folder-system .modal-title span[data-v-ac4404b0] {\r\n    padding-right: 10px;\r\n    color: #1e0857;\n}\n.media-type-icon[data-v-ac4404b0] {\r\n    font-size: 12px;\r\n    color: green;\r\n    padding-right: 5px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/FolderModal.vue?vue&type=style&index=0&id=174ebf0d&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/partials/FolderModal.vue?vue&type=style&index=0&id=174ebf0d&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.modal-mask[data-v-174ebf0d] {\r\n    position: fixed;\r\n    z-index: 9998;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    display: table;\r\n    transition: opacity 0.3s ease;\n}\n.modal-wrapper[data-v-174ebf0d] {\r\n    display: table-cell;\r\n    vertical-align: middle;\n}\n.modal-container[data-v-174ebf0d] {\r\n    width: 400px;\r\n    margin: 0px auto;\r\n    padding: 5px 30px;\r\n    background-color: #fff;\r\n    border-radius: 2px;\r\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);\r\n    transition: all 0.3s ease;\r\n    font-family: Helvetica, Arial, sans-serif;\n}\n.modal-header h3[data-v-174ebf0d] {\r\n    margin-top: 0;\r\n    color: #42b983;\n}\n.modal-body[data-v-174ebf0d] {\r\n    margin: 20px 0;\n}\n.modal-default-button[data-v-174ebf0d] {\r\n    border-radius: 6px;\r\n    border: none;\r\n    background-color: #1e0857;\r\n    font-size: 14px;\r\n    padding: 5px 20px;\r\n    color: #fff;\n}\n.modal-enter[data-v-174ebf0d] {\r\n    opacity: 0;\n}\n.modal-leave-active[data-v-174ebf0d] {\r\n    opacity: 0;\n}\n.modal-enter .modal-container[data-v-174ebf0d],\r\n.modal-leave-active .modal-container[data-v-174ebf0d] {\r\n    transform: scale(1.1);\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ManageContent.vue?vue&type=style&index=0&id=99849276&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ManageContent.vue?vue&type=style&index=0&id=99849276&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.video-checkbox[data-v-99849276] {\n     vertical-align: top;\n     float: left;\n     margin-right: 5px;\n}\n.video-thumb[data-v-99849276] {\n     background-size: 50px 50px;\n     background-position: center;\n}\n.media-data-list[data-v-99849276] { /* Components Root Element ID */\n     position: relative;\n}\n.loader[data-v-99849276] { /* Loader Div Class */\n     position: absolute;\n     top: 0px;\n     right: 0px;\n     width: 100%;\n     height: 100%;\n     background-color: #eceaea;\n     background-image: url(/images/small-loader.gif);\n     background-size: 50px;\n     background-repeat: no-repeat;\n     background-position: center;\n     z-index: 10000000;\n     opacity: 0.4;\n     filter: alpha(opacity=40);\n}\nselect.select-padding[data-v-99849276] {\n     padding: 5px;\n}\n.modal-list-data[data-v-99849276] {\n     list-style: inside;\n}\n.share-container[data-v-99849276]{\n     text-align: center;\n     margin: 35px 80px;\n     padding: 20px;\n     border-radius: 6px;\n     box-shadow: 0 1px 20px 0 rgba(0, 0, 0, 0.25);\n}\n.modal-share-icon[data-v-99849276] {\n     padding: 15px;\n     background-color: #f7f7fa;\n     position: relative;\n     vertical-align: middle;\n}\n.share-choose-icon a[data-v-99849276]{\n     color: #000000;\n}\nspan.moveable[data-v-99849276]{ cursor: move}\n.disable-pointer[data-v-99849276]{pointer-events: none}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ManageContent.vue?vue&type=style&index=1&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ManageContent.vue?vue&type=style&index=1&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.jconfirm-modal-title {\n    font-size: 16px !important;\n    color: #1e0857;\n}\n.manage-content .jconfirm-buttons {\n    float: none !important;\n    display: flex;\n    justify-content: center;\n}\n.manage-content-banner {\n    display: inline-block;\n    background-color: rgb(255, 196, 46);\n    padding: 12px 17px;\n    margin-left: 20px;\n}\n.manage-content-banner p {\n    margin: 0px;\n    padding: 0px;\n    color: #ffffff;\n    font-weight: 600;\n    font-size: 14px;\n}\n.tooltip { top: 0;\n}\n.upload-content {\n    border-radius: 6px;\n}\n.content-customized-tab .nav-link {\n    color: #1e0857 !important;\n}\n.content-customized-tab .nav-item a {\n    border-radius: 6px;\n}\n.content-customized-tab .nav-tabs .nav-link.active {\n    background-color: #2a8bf2 !important;\n}\n.content-manage-breadcrumb {\n    /* width: 300px; */\n    background: #FFFFFF;\n    color: #1e0857;\n    padding: 15px 20px;\n    font-size: 14px;\n}\n.content-manage-breadcrumb ul {\n    margin: 0px;\n    padding: 0px;\n    list-style: none;\n    display: inline;\n}\n.content-manage-breadcrumb ul li{\n    display: inline-block;\n    margin: 0px;\n    padding: 0px;\n}\n.content-manage-breadcrumb ul li i{\n    margin: 0px 10px;\n}\n.content-manage-breadcrumb ul li:last-child i {\n    display: none;\n}\n.issuer-content-table thead tr th {\n    color: #1e0857;\n    font-size: 14px;\n    font-weight: 600;\n    min-width: 65px; /*changed by khalid*/\n}\n.issuer-content-table tbody tr td div.content-thumbnail img{\n    width: 110px;\n    height: 50px;\n    background-color: #FFFFFF;\n    /*border-radius: 6px;*/\n}\n.issuer-content-table tbody tr {\n    border-bottom: 10px solid #F7F7FA;\n    border-top: 10px solid #F7F7FA;\n}\n.issuer-content-table tbody tr td {\n    text-align: center;\n    padding: 0px;\n}\n.issuer-content-table tbody tr td a {\n    font-size: 14px;\n    color:  #2f80ed;\n    font-weight: 400;\n}\n.issuer-content-table tbody tr td a:hover{\n    text-decoration: underline;\n}\n.issuer-content-table tbody tr td span {\n    color: #4f4f4f;\n}\n.issuer-content-table tbody div.content-actions {\n}\n.issuer-content-table tbody div.content-actions ul {\n    margin: 0px;\n    padding: 0px;\n    list-style: none;\n    display: inline;\n}\n.issuer-content-table tbody div.content-actions ul li {\n    display: inline-block;\n    margin: 0px;\n    padding: 0px;\n}\n.issuer-content-table tbody div.content-actions ul li a, #videoEditButton, #audioEditButton{\n    padding: 5px;\n    color: #8b878d;\n}\n.issuer-content-table tbody div.content-actions ul li a:hover, #videoEditButton:hover, #audioEditButton:hover{\n    color: #000;\n}\n.issuer-content-table tbody div.content-actions ul li a.del-btn{\n    color: rgba(235, 87, 87, 0.9);\n}\n.issuer-content-table tbody div.content-actions ul li a.del-btn:hover{\n    color: #ff0000;\n}\n.media-file-unpublished{\n    color: #ff0000;\n}\n.media-file-published{\n    color: #32cd32;\n}\n/*css added by khalid*/\n.action-min-width{\n    min-width: 130px;\n}\n.issuer-content-table tbody tr td div.content-thumbnail > .thumb-edit-icon {\n    background-color: #fff;\n    border: 1px solid #cccccc63;\n    cursor: pointer;\n    height: 27px;\n    position: absolute;\n    top: -9px;\n    right: -10px;\n    bottom: 0;\n    padding-bottom: 2px;\n    width: 27px;\n}\n.issuer-content-table tbody tr td div.content-thumbnail > .thumb-edit-icon > img {\n    height: 15px;\n    width: auto;\n}\n.thumb-edit-modal .cropper-view-box { border-radius: 0\n}\n@media screen and (min-width: 1200px) and (max-width: 1367px) {\n.issuer-content-table tbody tr td div.content-thumbnail > .thumb-edit-icon > img { margin-top: 3px;\n}\n}\n@media screen and (min-width: 1400px) and (max-width: 1445px) {\n.issuer-content-table tbody tr td div.content-thumbnail > .thumb-edit-icon > img { margin-top: 3px;\n}\n}\n@media(min-width: 1600px) {\n.issuer-content-table tbody tr td div.content-thumbnail > .thumb-edit-icon { right: -5px;\n}\n.issuer-content-table tbody tr td div.content-thumbnail > .thumb-edit-icon > img { margin-top: -3px;\n}\n}\n@media(min-width: 1800px) {\n.issuer-content-table tbody tr td div.content-thumbnail > .thumb-edit-icon { right: 5px;\n}\n}\n@media(min-width: 1900px) {\n.issuer-content-table tbody tr td div.content-thumbnail > .thumb-edit-icon { right: 14px;\n}\n}\n@media(min-width: 2100px) {\n.issuer-content-table tbody tr td div.content-thumbnail > .thumb-edit-icon { right: 29px;\n}\n}\n@media(min-width: 2400px) {\n.issuer-content-table tbody tr td div.content-thumbnail > .thumb-edit-icon { right: 55px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FolderSystem.vue?vue&type=style&index=0&lang=scss&rel=stylesheet%2Fscss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FolderSystem.vue?vue&type=style&index=0&lang=scss&rel=stylesheet%2Fscss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./FolderSystem.vue?vue&type=style&index=0&lang=scss&rel=stylesheet%2Fscss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FolderSystem.vue?vue&type=style&index=0&lang=scss&rel=stylesheet%2Fscss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FolderSystem.vue?vue&type=style&index=1&id=ac4404b0&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FolderSystem.vue?vue&type=style&index=1&id=ac4404b0&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./FolderSystem.vue?vue&type=style&index=1&id=ac4404b0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FolderSystem.vue?vue&type=style&index=1&id=ac4404b0&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/FolderModal.vue?vue&type=style&index=0&id=174ebf0d&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/partials/FolderModal.vue?vue&type=style&index=0&id=174ebf0d&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./FolderModal.vue?vue&type=style&index=0&id=174ebf0d&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/FolderModal.vue?vue&type=style&index=0&id=174ebf0d&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ManageContent.vue?vue&type=style&index=0&id=99849276&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ManageContent.vue?vue&type=style&index=0&id=99849276&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ManageContent.vue?vue&type=style&index=0&id=99849276&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ManageContent.vue?vue&type=style&index=0&id=99849276&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ManageContent.vue?vue&type=style&index=1&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ManageContent.vue?vue&type=style&index=1&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ManageContent.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ManageContent.vue?vue&type=style&index=1&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FolderSystem.vue?vue&type=template&id=ac4404b0&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FolderSystem.vue?vue&type=template&id=ac4404b0&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "folder-system", attrs: { id: "folder-system-root" } },
    [
      _c(
        "button",
        {
          staticClass: "btn btn-lg btn-secondary folder-create",
          attrs: { id: "show-modal" },
          on: {
            click: function($event) {
              _vm.showModal = true
              _vm.folder_name = "New Folder"
            }
          }
        },
        [
          _c("i", { staticClass: "fas fa-folder-plus" }),
          _vm._v("\n        Create Directory Folder\n    ")
        ]
      ),
      _vm._v(" "),
      _vm.showModal
        ? _c(
            "FolderModal",
            {
              on: {
                close: function($event) {
                  _vm.showModal = false
                },
                saveAndClose: function($event) {
                  _vm.addNode()
                  _vm.showModal = false
                }
              }
            },
            [
              _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                _c(
                  "h5",
                  {
                    staticClass: "modal-title",
                    attrs: { id: "exampleModalCenterTitle" }
                  },
                  [
                    _c("span", [
                      _c("i", { staticClass: "fas fa-folder-plus" })
                    ]),
                    _vm._v("\n                Create Folder\n            ")
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { attrs: { slot: "body" }, slot: "body" }, [
                _c("div", {}, [
                  _c("div", { staticClass: "mb-3" }, [
                    _c(
                      "label",
                      {
                        staticClass: "form-label",
                        attrs: { for: "folderName" }
                      },
                      [_vm._v("Folder Name")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.folder_name,
                          expression: "folder_name"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        id: "folderName",
                        placeholder: "Issuer Pixel"
                      },
                      domProps: { value: _vm.folder_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.folder_name = $event.target.value
                        }
                      }
                    })
                  ])
                ])
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "vue-tree-list",
        {
          staticClass: "folder-list",
          attrs: {
            model: _vm.data,
            "default-tree-node-name": "New Folder",
            "default-leaf-node-name": "New File",
            "default-expanded": false,
            id: "scrollbar-style",
            draggable: "true"
          },
          on: {
            click: _vm.onClick,
            "change-name": _vm.onChangeName,
            "delete-node": _vm.onDel,
            "add-node": _vm.onAddNode,
            drop: _vm.drop,
            "drop-before": _vm.dropBefore,
            "drop-after": _vm.dropAfter
          },
          scopedSlots: _vm._u([
            {
              key: "leafNameDisplay",
              fn: function(slotProps) {
                return [
                  _c(
                    "span",
                    {
                      staticClass: "folder-name",
                      attrs: { draggable: "true" }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(slotProps.model.name) +
                          "\n            "
                      )
                    ]
                  )
                ]
              }
            },
            {
              key: "addTreeNodeIcon",
              fn: function(slotProps) {
                return [
                  _c(
                    "span",
                    {
                      staticClass: "icon",
                      attrs: {
                        "data-toggle": "tooltip",
                        "data-placement": "bottom",
                        title: "Create Sub-Folder"
                      }
                    },
                    [_c("i", { staticClass: "far fa-folder-open" })]
                  )
                ]
              }
            },
            {
              key: "editNodeIcon",
              fn: function(slotProps) {
                return [
                  _c(
                    "span",
                    {
                      staticClass: "icon",
                      attrs: {
                        "data-toggle": "tooltip",
                        "data-placement": "bottom",
                        title: "Edit"
                      }
                    },
                    [
                      _c("i", {
                        staticClass: "far fa-edit",
                        attrs: { id: "edit-btn" }
                      })
                    ]
                  )
                ]
              }
            },
            {
              key: "delNodeIcon",
              fn: function(slotProps) {
                return [
                  _c(
                    "span",
                    {
                      staticClass: "icon",
                      attrs: {
                        "data-toggle": "tooltip",
                        "data-placement": "bottom",
                        title: "Delete"
                      }
                    },
                    [_c("i", { staticClass: "far fa-trash-alt" })]
                  )
                ]
              }
            }
          ])
        },
        [
          _vm._v(" "),
          _vm._v(" "),
          _vm._v(" "),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "icon",
              attrs: { slot: "treeNodeIcon" },
              slot: "treeNodeIcon"
            },
            [_c("i", { staticClass: "far fa-folder" })]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/Breadcrumb.vue?vue&type=template&id=25869d45&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/partials/Breadcrumb.vue?vue&type=template&id=25869d45& ***!
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
  return _c("div", [
    this.items.length
      ? _c("div", { staticClass: "mb-4" }, [
          _c("div", { staticClass: "content-manage-breadcrumb" }, [
            _c(
              "ul",
              _vm._l(_vm.items, function(item) {
                return _c("li", [
                  _vm._v(
                    "\n                    " +
                      _vm._s(item) +
                      "\n                    "
                  ),
                  _c("i", { staticClass: "fas fa-long-arrow-alt-right" })
                ])
              }),
              0
            )
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/FolderModal.vue?vue&type=template&id=174ebf0d&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/partials/FolderModal.vue?vue&type=template&id=174ebf0d&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "modal-mask" }, [
      _c("div", { staticClass: "modal-wrapper" }, [
        _c("div", { staticClass: "modal-container" }, [
          _c(
            "div",
            { staticClass: "modal-header" },
            [
              _vm._t("header", function() {
                return [
                  _vm._v(
                    "\n                        default header\n                    "
                  )
                ]
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "modal-body" },
            [
              _vm._t("body", function() {
                return [
                  _vm._v(
                    "\n                        default body\n                    "
                  )
                ]
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "modal-footer" },
            [
              _vm._t("footer", function() {
                return [
                  _c(
                    "button",
                    {
                      staticClass: "modal-default-button",
                      on: {
                        click: function($event) {
                          return _vm.$emit("close")
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                            Close\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "modal-default-button",
                      on: {
                        click: function($event) {
                          return _vm.$emit("saveAndClose")
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                            Create\n                        "
                      )
                    ]
                  )
                ]
              })
            ],
            2
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ManageContent.vue?vue&type=template&id=99849276&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/ManageContent.vue?vue&type=template&id=99849276&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    _c(
      "section",
      { staticClass: "dashboard pt-0 manage-content" },
      [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-lg-2 col-md-3" },
            [
              _c("FolderSystem", {
                ref: "fs",
                on: { folderWiseMedia: _vm.folderWiseMedia }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-lg-10 col-md-9" },
            [
              _c("h4", { staticClass: "text-theme-dark-blue" }, [
                _vm._v("Content Library")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-theme-dark-blue" }, [
                _vm._v(
                  " You currently have " +
                    _vm._s(_vm.totalVideo) +
                    " video and " +
                    _vm._s(_vm.totalAudio) +
                    " audio uploaded"
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mb-4" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass:
                        "btn btn-lg dashboard-btn-upload ml-0 upload-content",
                      staticStyle: { color: "#ffffff" },
                      attrs: { to: { name: "videoQuestionnaire" } }
                    },
                    [
                      _c("i", { staticClass: "fa fa-video" }),
                      _vm._v(" Upload Video\n                    ")
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass:
                        "btn btn-lg dashboard-btn-upload ml-3 upload-content",
                      class: _vm.linkGrayOut,
                      attrs: { to: { name: "audioQuestionnaire" } }
                    },
                    [
                      _c("i", { staticClass: "fa fa-headphones-alt" }),
                      _vm._v(" Upload Audio\n                    ")
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(0)
                ],
                1
              ),
              _vm._v(" "),
              _c("Breadcrumb"),
              _vm._v(" "),
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
                              { staticClass: "search-across-channel" },
                              [
                                _c("div", { staticClass: "input-group" }, [
                                  _c(
                                    "div",
                                    { staticClass: "input-group-append" },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "btn dashboard-search-icon",
                                          on: {
                                            click: function($event) {
                                              return _vm.searchContent("video")
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
                                      placeholder: "Search across your channel"
                                    },
                                    domProps: { value: _vm.videoSearch },
                                    on: {
                                      input: [
                                        function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.videoSearch = $event.target.value
                                        },
                                        function($event) {
                                          return _vm.searchContent("video")
                                        }
                                      ]
                                    }
                                  })
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "table-responsive media-data-list"
                              },
                              [
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
                                        _c("th", [
                                          _vm._v(
                                            "\n                                                Content\n                                                "
                                          ),
                                          _vm._v(" "),
                                          _vm._v(
                                            "\n                                                 \n                                            "
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("th", [_vm._v("Title")]),
                                        _vm._v(" "),
                                        _c("th", [_vm._v("Subject")]),
                                        _vm._v(" "),
                                        _c("th", [_vm._v("Type")]),
                                        _vm._v(" "),
                                        _c(
                                          "th",
                                          {
                                            staticClass: "text-left-responsive"
                                          },
                                          [_vm._v("Classification")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "th",
                                          {
                                            staticClass: "text-right-responsive"
                                          },
                                          [_vm._v("Status")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "th",
                                          {
                                            staticClass: "responsive-date-hide"
                                          },
                                          [_vm._v("Date")]
                                        ),
                                        _vm._v(" "),
                                        _c("th", [_vm._v("Views")]),
                                        _vm._v(" "),
                                        _c("th", [_vm._v("Activation Status")]),
                                        _vm._v(" "),
                                        _c("th", [_vm._v("Visibility")]),
                                        _vm._v(" "),
                                        _c(
                                          "th",
                                          { staticClass: "action-min-width" },
                                          [_vm._v("Actions")]
                                        )
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "tbody",
                                      {
                                        staticClass: "issuer-content-table-body"
                                      },
                                      [
                                        _vm._l(_vm.videos, function(
                                          video,
                                          index
                                        ) {
                                          return _c("tr", [
                                            _c(
                                              "td",
                                              { staticClass: "text-left" },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "content-thumbnail position-relative"
                                                  },
                                                  [
                                                    video.status == 2 &&
                                                    video.is_meta_info_completed ==
                                                      1 &&
                                                    video.is_hierarchy_info_completed ==
                                                      1
                                                      ? _c(
                                                          "router-link",
                                                          {
                                                            attrs: {
                                                              link: "",
                                                              to: {
                                                                name:
                                                                  "ViewVideoDetails",
                                                                params: {
                                                                  slug:
                                                                    _vm.slug,
                                                                  id: video.uuid
                                                                }
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _c("img", {
                                                              staticClass:
                                                                "img img-responsive video-btn video-thumb moveable",
                                                              attrs: {
                                                                src: video.thumb_url
                                                                  ? video.thumb_url
                                                                  : "https://view.vzaar.com/" +
                                                                    video.video_id +
                                                                    "/image",
                                                                "data-id":
                                                                  video.id,
                                                                "data-type":
                                                                  video.media_type,
                                                                "data-media-content-id":
                                                                  video.media_content_id,
                                                                height: "50",
                                                                width: "110",
                                                                draggable:
                                                                  "true"
                                                              },
                                                              on: {
                                                                dragstart:
                                                                  _vm.handleDragStart,
                                                                dragover:
                                                                  _vm.handleOnDragOver,
                                                                dragleave:
                                                                  _vm.onDragLeave,
                                                                mousedown:
                                                                  _vm.mouseDownONElm,
                                                                mouseleave:
                                                                  _vm.mouseUpONElm
                                                              }
                                                            })
                                                          ]
                                                        )
                                                      : video.status == 2
                                                      ? [
                                                          _c("img", {
                                                            staticClass:
                                                              "img img-responsive video-btn video-thumb moveable",
                                                            attrs: {
                                                              src: video.thumb_url
                                                                ? video.thumb_url
                                                                : "https://view.vzaar.com/" +
                                                                  video.video_id +
                                                                  "/image",
                                                              "data-id":
                                                                video.id,
                                                              "data-type":
                                                                video.media_type,
                                                              "data-media-content-id":
                                                                video.media_content_id,
                                                              draggable: "true",
                                                              height: "50",
                                                              width: "110"
                                                            },
                                                            on: {
                                                              dragstart:
                                                                _vm.handleDragStart,
                                                              dragover:
                                                                _vm.handleOnDragOver,
                                                              dragleave:
                                                                _vm.onDragLeave,
                                                              mousedown:
                                                                _vm.mouseDownONElm,
                                                              mouseleave:
                                                                _vm.mouseUpONElm
                                                            }
                                                          })
                                                        ]
                                                      : [
                                                          _c("img", {
                                                            staticClass:
                                                              "img img-responsive video-btn video-thumb moveable",
                                                            attrs: {
                                                              src: __webpack_require__(/*! ../assets/white-transparent.png */ "./resources/js/assets/white-transparent.png"),
                                                              "data-id":
                                                                video.id,
                                                              "data-type":
                                                                video.media_type,
                                                              "data-media-content-id":
                                                                video.media_content_id,
                                                              draggable: "true",
                                                              height: "50",
                                                              width: "110"
                                                            },
                                                            on: {
                                                              dragstart:
                                                                _vm.handleDragStart,
                                                              dragover:
                                                                _vm.handleOnDragOver,
                                                              dragleave:
                                                                _vm.onDragLeave,
                                                              mousedown:
                                                                _vm.mouseDownONElm,
                                                              mouseleave:
                                                                _vm.mouseUpONElm
                                                            }
                                                          })
                                                        ],
                                                    _vm._v(" "),
                                                    video.status != 1
                                                      ? _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "rounded-circle thumb-edit-icon text-center",
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                return _vm.showImageCropperModal(
                                                                  video.id
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _c("img", {
                                                              attrs: {
                                                                src:
                                                                  "/images/pencil-icon.png",
                                                                height: "15px"
                                                              }
                                                            })
                                                          ]
                                                        )
                                                      : _vm._e()
                                                  ],
                                                  2
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              {
                                                staticClass:
                                                  "media-title-td px-1"
                                              },
                                              [
                                                video.name
                                                  ? [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "text-decoration-none",
                                                          attrs: {
                                                            href:
                                                              "javascript:void(0)"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "moveable",
                                                              attrs: {
                                                                draggable:
                                                                  "true",
                                                                "data-id":
                                                                  video.id,
                                                                "data-type":
                                                                  video.media_type,
                                                                "data-media-content-id":
                                                                  video.media_content_id
                                                              },
                                                              on: {
                                                                dragstart:
                                                                  _vm.handleDragStart,
                                                                dragover:
                                                                  _vm.handleOnDragOver,
                                                                dragleave:
                                                                  _vm.onDragLeave,
                                                                mousedown:
                                                                  _vm.mouseDownONElm,
                                                                mouseleave:
                                                                  _vm.mouseUpONElm
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                " " +
                                                                  _vm._s(
                                                                    video.name
                                                                  )
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  : [
                                                      _c(
                                                        "router-link",
                                                        {
                                                          attrs: {
                                                            link: "",
                                                            to: {
                                                              name:
                                                                "videoAddMeta",
                                                              params: {
                                                                uuid: video.uuid
                                                              }
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                        Activate\n                                                    "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                              ],
                                              2
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              [
                                                video.subject_type.length
                                                  ? [
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
                                                        [
                                                          _vm._v(
                                                            "\n                                                        View\n                                                    "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  : [
                                                      _c(
                                                        "router-link",
                                                        {
                                                          attrs: {
                                                            link: "",
                                                            to: {
                                                              name:
                                                                "videoAddMeta",
                                                              params: {
                                                                uuid: video.uuid
                                                              }
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                        Activate\n                                                    "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                              ],
                                              2
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              [
                                                video.media_sub_type_name
                                                  ? [
                                                      _vm._v(
                                                        "\n                                                    " +
                                                          _vm._s(
                                                            video.media_sub_type_name
                                                          ) +
                                                          "\n                                                "
                                                      )
                                                    ]
                                                  : [
                                                      _c(
                                                        "router-link",
                                                        {
                                                          attrs: {
                                                            link: "",
                                                            to: {
                                                              name:
                                                                "videoAddMeta",
                                                              params: {
                                                                uuid: video.uuid
                                                              }
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                        Activate\n                                                    "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                              ],
                                              2
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              [
                                                video.taxonomy_id
                                                  ? [
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
                                                        [
                                                          _vm._v(
                                                            "View\n                                                    "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  : [
                                                      _c(
                                                        "router-link",
                                                        {
                                                          attrs: {
                                                            link: "",
                                                            to: {
                                                              name:
                                                                "videoAddMeta",
                                                              params: {
                                                                uuid: video.uuid
                                                              }
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                                        Activate\n                                                    "
                                                          )
                                                        ]
                                                      )
                                                    ]
                                              ],
                                              2
                                            ),
                                            _vm._v(" "),
                                            video.status == 1
                                              ? _c("td", [
                                                  _vm._v(
                                                    "\n                                                Processing\n                                                "
                                                  ),
                                                  _c(
                                                    "a",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "b-tooltip",
                                                          rawName:
                                                            "v-b-tooltip.hover.top",
                                                          value:
                                                            "This video is currently being processed, it may take up to 2 hours to become available for viewing.",
                                                          expression:
                                                            "'This video is currently being processed, it may take up to 2 hours to become available for viewing.'",
                                                          modifiers: {
                                                            hover: true,
                                                            top: true
                                                          }
                                                        }
                                                      ],
                                                      attrs: {
                                                        href: "javascript:;"
                                                      }
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-info-circle text-dark"
                                                      })
                                                    ]
                                                  )
                                                ])
                                              : video.status == 2
                                              ? _c("td", [
                                                  _vm._v(
                                                    "\n                                                Available\n                                            "
                                                  )
                                                ])
                                              : video.status == 3
                                              ? _c("td", [
                                                  _vm._v(
                                                    "\n                                                Private\n                                            "
                                                  )
                                                ])
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _c(
                                              "td",
                                              {
                                                staticClass:
                                                  "responsive-date-hide"
                                              },
                                              [
                                                _c("span", [
                                                  _vm._v(
                                                    _vm._s(
                                                      video.publication_date
                                                    )
                                                  )
                                                ])
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c("td", [
                                              _c("span", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.numShortFormatter(
                                                      video.view_counter
                                                    )
                                                  )
                                                )
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _c("i", {
                                                staticClass:
                                                  "fa fa-circle fs-14",
                                                class:
                                                  video.is_meta_info_completed ==
                                                    1 &&
                                                  video.is_hierarchy_info_completed ==
                                                    1
                                                    ? "media-file-published"
                                                    : "media-file-unpublished"
                                              })
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _c(
                                                "select",
                                                {
                                                  staticClass: "custom-select",
                                                  attrs: {
                                                    id:
                                                      "publicationStatusVideo" +
                                                      video.id
                                                  },
                                                  on: {
                                                    change: function($event) {
                                                      return _vm.changePublishedStatus(
                                                        "video",
                                                        video.id,
                                                        video.publish_status
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "option",
                                                    {
                                                      attrs: { value: "0" },
                                                      domProps: {
                                                        selected:
                                                          video.publish_status ==
                                                          0
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                                        Private\n                                                    "
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "option",
                                                    {
                                                      attrs: { value: "1" },
                                                      domProps: {
                                                        selected:
                                                          video.publish_status ==
                                                          1
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                                                        Public\n                                                    "
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c("td", [
                                              _c(
                                                "div",
                                                {
                                                  staticClass: "content-actions"
                                                },
                                                [
                                                  _c("ul", [
                                                    video.status == 2 &&
                                                    video.is_meta_info_completed ==
                                                      1 &&
                                                    video.is_hierarchy_info_completed ==
                                                      1
                                                      ? _c("li", [
                                                          _c(
                                                            "a",
                                                            {
                                                              directives: [
                                                                {
                                                                  name:
                                                                    "b-tooltip",
                                                                  rawName:
                                                                    "v-b-tooltip.hover.top",
                                                                  value:
                                                                    "Share Video",
                                                                  expression:
                                                                    "'Share Video'",
                                                                  modifiers: {
                                                                    hover: true,
                                                                    top: true
                                                                  }
                                                                }
                                                              ],
                                                              attrs: {
                                                                href:
                                                                  "javascript:;"
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  $event.preventDefault()
                                                                  return _vm.shareMediaLink(
                                                                    video.id,
                                                                    video.uuid,
                                                                    video.publish_status,
                                                                    "video-details",
                                                                    _vm.slug
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _c("i", {
                                                                staticClass:
                                                                  "fa fa-share-alt"
                                                              })
                                                            ]
                                                          )
                                                        ])
                                                      : _vm._e(),
                                                    _vm._v(" "),
                                                    video.status == 2 &&
                                                    video.is_meta_info_completed ==
                                                      1 &&
                                                    video.is_hierarchy_info_completed ==
                                                      1
                                                      ? _c(
                                                          "li",
                                                          [
                                                            _c(
                                                              "router-link",
                                                              {
                                                                attrs: {
                                                                  link: "",
                                                                  to: {
                                                                    name:
                                                                      "ViewVideoDetails",
                                                                    params: {
                                                                      slug:
                                                                        _vm.slug,
                                                                      id:
                                                                        video.uuid
                                                                    }
                                                                  }
                                                                }
                                                              },
                                                              [
                                                                _c("i", {
                                                                  directives: [
                                                                    {
                                                                      name:
                                                                        "b-tooltip",
                                                                      rawName:
                                                                        "v-b-tooltip.hover.top",
                                                                      value:
                                                                        "View Video",
                                                                      expression:
                                                                        "'View Video'",
                                                                      modifiers: {
                                                                        hover: true,
                                                                        top: true
                                                                      }
                                                                    }
                                                                  ],
                                                                  staticClass:
                                                                    "fas fa-eye"
                                                                })
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      : _vm._e(),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-pen",
                                                        attrs: {
                                                          type: "button",
                                                          id: "videoEditButton",
                                                          "data-toggle":
                                                            "dropdown",
                                                          "aria-haspopup":
                                                            "true",
                                                          "aria-expanded":
                                                            "false"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "dropdown-menu",
                                                          attrs: {
                                                            "aria-labelledby":
                                                              "videoEditButton"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "router-link",
                                                            {
                                                              staticClass:
                                                                "dropdown-item ",
                                                              attrs: {
                                                                link: "",
                                                                to: {
                                                                  name:
                                                                    "VideoStepOneEdit",
                                                                  params: {
                                                                    id:
                                                                      video.uuid
                                                                  }
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                                    Edit Video Classification\n                                                                "
                                                              )
                                                            ]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "router-link",
                                                            {
                                                              staticClass:
                                                                "dropdown-item ",
                                                              attrs: {
                                                                link: "",
                                                                to: {
                                                                  name:
                                                                    "VideoStepTwoEdit",
                                                                  params: {
                                                                    id:
                                                                      video.uuid
                                                                  }
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                                    Edit Video Details\n                                                                "
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    ]),
                                                    _vm._v(" "),
                                                    _c("li", [
                                                      _c(
                                                        "a",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "b-tooltip",
                                                              rawName:
                                                                "v-b-tooltip.hover.top",
                                                              value:
                                                                "Remove  Video",
                                                              expression:
                                                                "'Remove  Video'",
                                                              modifiers: {
                                                                hover: true,
                                                                top: true
                                                              }
                                                            }
                                                          ],
                                                          staticClass:
                                                            "del-btn",
                                                          attrs: {
                                                            href: "javascript:;"
                                                          },
                                                          on: {
                                                            click: function(
                                                              $event
                                                            ) {
                                                              return _vm.deleteMedia(
                                                                video,
                                                                "videos"
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c("i", {
                                                            staticClass:
                                                              "fa fa-trash-alt"
                                                          })
                                                        ]
                                                      )
                                                    ])
                                                  ])
                                                ]
                                              )
                                            ])
                                          ])
                                        }),
                                        _vm._v(" "),
                                        !_vm.videos.length
                                          ? _c("tr", [
                                              _c(
                                                "td",
                                                {
                                                  staticClass: "text-center",
                                                  attrs: { colspan: "10" }
                                                },
                                                [
                                                  _vm._v(
                                                    "No video file\n                                                found\n                                            "
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
                                              _vm.videoPagination.last_page > 1
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
                              { staticClass: "search-across-channel" },
                              [
                                _c("div", { staticClass: "input-group" }, [
                                  _c(
                                    "div",
                                    { staticClass: "input-group-append" },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "btn dashboard-search-icon",
                                          on: {
                                            click: function($event) {
                                              return _vm.searchContent("audio")
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
                                      placeholder: "Search across your channel"
                                    },
                                    domProps: { value: _vm.audioSearch },
                                    on: {
                                      input: [
                                        function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.audioSearch = $event.target.value
                                        },
                                        function($event) {
                                          return _vm.searchContent("audio")
                                        }
                                      ]
                                    }
                                  })
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "table-responsive" }, [
                              _c(
                                "table",
                                {
                                  staticClass:
                                    "table issuer-content-table media-data-list"
                                },
                                [
                                  _vm.contentLoading
                                    ? _c("div", { staticClass: "loader" })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("thead", [
                                    _c("tr", { staticClass: "text-center" }, [
                                      _c("th", [
                                        _vm._v(
                                          "\n                                                Content\n                                                "
                                        ),
                                        _vm._v(" "),
                                        _vm._v(
                                          "\n                                                 \n                                            "
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("th", [_vm._v("Title")]),
                                      _vm._v(" "),
                                      _c("th", [_vm._v("Subject")]),
                                      _vm._v(" "),
                                      _c("th", [_vm._v("Type")]),
                                      _vm._v(" "),
                                      _c(
                                        "th",
                                        { staticClass: "text-left-responsive" },
                                        [_vm._v("Classification")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "th",
                                        {
                                          staticClass: "text-right-responsive"
                                        },
                                        [_vm._v("Status")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "th",
                                        { staticClass: "responsive-date-hide" },
                                        [_vm._v("Date")]
                                      ),
                                      _vm._v(" "),
                                      _c("th", [_vm._v("Views")]),
                                      _vm._v(" "),
                                      _c("th", [_vm._v("Activation Status")]),
                                      _vm._v(" "),
                                      _c("th", [_vm._v("Visibility")]),
                                      _vm._v(" "),
                                      _c(
                                        "th",
                                        { staticClass: "action-min-width" },
                                        [_vm._v("Actions")]
                                      )
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "tbody",
                                    {
                                      staticClass: "issuer-content-table-body"
                                    },
                                    [
                                      _vm._l(_vm.audios, function(audio) {
                                        return _c("tr", [
                                          _c(
                                            "td",
                                            [
                                              audio.status == 2 &&
                                              audio.is_meta_info_completed ==
                                                1 &&
                                              audio.is_hierarchy_info_completed ==
                                                1
                                                ? _c(
                                                    "router-link",
                                                    {
                                                      attrs: {
                                                        link: "",
                                                        to: {
                                                          name:
                                                            "ViewAudioDetails",
                                                          params: {
                                                            slug: _vm.slug,
                                                            id: audio.uuid
                                                          }
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("img", {
                                                        staticClass:
                                                          "img img-responsive moveable",
                                                        attrs: {
                                                          src:
                                                            "/images/audio_thumb.png",
                                                          alt: "",
                                                          height: "50",
                                                          width: "110",
                                                          draggable: "true",
                                                          "data-id": audio.id,
                                                          "data-type":
                                                            audio.media_type,
                                                          "data-media-content-id":
                                                            audio.media_content_id
                                                        },
                                                        on: {
                                                          dragstart:
                                                            _vm.handleDragStart,
                                                          dragover:
                                                            _vm.handleOnDragOver,
                                                          dragleave:
                                                            _vm.onDragLeave,
                                                          mousedown:
                                                            _vm.mouseDownONElm,
                                                          mouseleave:
                                                            _vm.mouseUpONElm
                                                        }
                                                      })
                                                    ]
                                                  )
                                                : audio.status == 2
                                                ? [
                                                    _c("img", {
                                                      staticClass:
                                                        "img img-responsive moveable",
                                                      attrs: {
                                                        src:
                                                          "/images/audio_thumb.png",
                                                        alt: "",
                                                        height: "50",
                                                        width: "110",
                                                        draggable: "true",
                                                        "data-id": audio.id,
                                                        "data-type":
                                                          audio.media_type,
                                                        "data-media-content-id":
                                                          audio.media_content_id
                                                      },
                                                      on: {
                                                        dragstart:
                                                          _vm.handleDragStart,
                                                        dragover:
                                                          _vm.handleOnDragOver,
                                                        dragleave:
                                                          _vm.onDragLeave,
                                                        mousedown:
                                                          _vm.mouseDownONElm,
                                                        mouseleave:
                                                          _vm.mouseUpONElm
                                                      }
                                                    })
                                                  ]
                                                : [
                                                    _c("img", {
                                                      staticClass:
                                                        "img img-responsive video-thumb moveable",
                                                      attrs: {
                                                        src: __webpack_require__(/*! ../assets/white-transparent.png */ "./resources/js/assets/white-transparent.png"),
                                                        height: "50",
                                                        width: "110",
                                                        draggable: "true",
                                                        "data-id": audio.id,
                                                        "data-type":
                                                          audio.media_type,
                                                        "data-media-content-id":
                                                          audio.media_content_id
                                                      },
                                                      on: {
                                                        dragstart:
                                                          _vm.handleDragStart,
                                                        dragover:
                                                          _vm.handleOnDragOver,
                                                        dragleave:
                                                          _vm.onDragLeave,
                                                        mousedown:
                                                          _vm.mouseDownONElm,
                                                        mouseleave:
                                                          _vm.mouseUpONElm
                                                      }
                                                    })
                                                  ]
                                            ],
                                            2
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass:
                                                "text-center media-title-td px-1"
                                            },
                                            [
                                              audio.name
                                                ? [
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "text-decoration-none",
                                                        attrs: {
                                                          href:
                                                            "javascript:void(0)"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "moveable",
                                                            attrs: {
                                                              draggable: "true",
                                                              "data-id":
                                                                audio.id,
                                                              "data-type":
                                                                audio.media_type,
                                                              "data-media-content-id":
                                                                audio.media_content_id
                                                            },
                                                            on: {
                                                              dragstart:
                                                                _vm.handleDragStart,
                                                              dragover:
                                                                _vm.handleOnDragOver,
                                                              dragleave:
                                                                _vm.onDragLeave,
                                                              mousedown:
                                                                _vm.mouseDownONElm,
                                                              mouseleave:
                                                                _vm.mouseUpONElm
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(audio.name)
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                : [
                                                    _c(
                                                      "router-link",
                                                      {
                                                        attrs: {
                                                          link: "",
                                                          to: {
                                                            name:
                                                              "audioAddMeta",
                                                            params: {
                                                              uuid: audio.uuid
                                                            }
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                                            Activate\n                                                        "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                            ],
                                            2
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            { staticClass: "text-center" },
                                            [
                                              audio.subject_type.length
                                                ? [
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
                                                : [
                                                    _c(
                                                      "router-link",
                                                      {
                                                        attrs: {
                                                          link: "",
                                                          to: {
                                                            name:
                                                              "audioAddMeta",
                                                            params: {
                                                              uuid: audio.uuid
                                                            }
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                                            Activate\n                                                        "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                            ],
                                            2
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            { staticClass: "text-center" },
                                            [
                                              audio.media_sub_type_name
                                                ? [
                                                    _vm._v(
                                                      "\n                                                        " +
                                                        _vm._s(
                                                          audio.media_sub_type_name
                                                        ) +
                                                        "\n                                                    "
                                                    )
                                                  ]
                                                : [
                                                    _c(
                                                      "router-link",
                                                      {
                                                        attrs: {
                                                          link: "",
                                                          to: {
                                                            name:
                                                              "audioAddMeta",
                                                            params: {
                                                              uuid: audio.uuid
                                                            }
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                                            Activate\n                                                        "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                            ],
                                            2
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            { staticClass: "text-center" },
                                            [
                                              audio.taxonomy_id
                                                ? [
                                                    _c(
                                                      "a",
                                                      {
                                                        attrs: {
                                                          href: "javascript:;",
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
                                                : [
                                                    _c(
                                                      "router-link",
                                                      {
                                                        attrs: {
                                                          link: "",
                                                          to: {
                                                            name:
                                                              "audioAddMeta",
                                                            params: {
                                                              uuid: audio.uuid
                                                            }
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                                            Activate\n                                                        "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                            ],
                                            2
                                          ),
                                          _vm._v(" "),
                                          audio.status == 1
                                            ? _c(
                                                "td",
                                                { staticClass: "text-center" },
                                                [
                                                  _vm._v(
                                                    "\n                                                    Processing\n                                                    "
                                                  ),
                                                  _c(
                                                    "a",
                                                    {
                                                      directives: [
                                                        {
                                                          name: "b-tooltip",
                                                          rawName:
                                                            "v-b-tooltip.hover.top",
                                                          value:
                                                            "This audio file is currently being processed, it may take up to 2 hours to become available.",
                                                          expression:
                                                            "'This audio file is currently being processed, it may take up to 2 hours to become available.'",
                                                          modifiers: {
                                                            hover: true,
                                                            top: true
                                                          }
                                                        }
                                                      ],
                                                      attrs: {
                                                        href: "javascript:;"
                                                      }
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-info-circle text-dark"
                                                      })
                                                    ]
                                                  )
                                                ]
                                              )
                                            : audio.status == 2
                                            ? _c(
                                                "td",
                                                { staticClass: "text-center" },
                                                [
                                                  _vm._v(
                                                    "\n                                                    Available\n                                                "
                                                  )
                                                ]
                                              )
                                            : audio.status == 3
                                            ? _c(
                                                "td",
                                                { staticClass: "text-center" },
                                                [
                                                  _vm._v(
                                                    "\n                                                    Private\n                                                "
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            {
                                              staticClass:
                                                "text-center responsive-date-hide"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(audio.publication_date)
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "td",
                                            { staticClass: "text-center" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.numShortFormatter(
                                                    audio.view_counter
                                                  )
                                                )
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("td", [
                                            _c("i", {
                                              staticClass: "fa fa-circle fs-14",
                                              class:
                                                audio.is_meta_info_completed ==
                                                  1 &&
                                                audio.is_hierarchy_info_completed ==
                                                  1
                                                  ? "media-file-published"
                                                  : "media-file-unpublished"
                                            })
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _c(
                                              "select",
                                              {
                                                staticClass: "custom-select",
                                                attrs: {
                                                  id:
                                                    "publicationStatusAudio" +
                                                    audio.id
                                                },
                                                on: {
                                                  change: function($event) {
                                                    return _vm.changePublishedStatus(
                                                      "audio",
                                                      audio.id,
                                                      audio.publish_status
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: { value: "0" },
                                                    domProps: {
                                                      selected:
                                                        audio.publish_status ==
                                                        0
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                            Private\n                                                        "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "option",
                                                  {
                                                    attrs: { value: "1" },
                                                    domProps: {
                                                      selected:
                                                        audio.publish_status ==
                                                        1
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                                            Public\n                                                        "
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("td", [
                                            _c(
                                              "div",
                                              {
                                                staticClass: "content-actions"
                                              },
                                              [
                                                _c("ul", [
                                                  audio.status == 2 &&
                                                  audio.is_meta_info_completed ==
                                                    1 &&
                                                  audio.is_hierarchy_info_completed ==
                                                    1
                                                    ? _c("li", [
                                                        _c(
                                                          "a",
                                                          {
                                                            directives: [
                                                              {
                                                                name:
                                                                  "b-tooltip",
                                                                rawName:
                                                                  "v-b-tooltip.hover.top",
                                                                value:
                                                                  "Share Audio",
                                                                expression:
                                                                  "'Share Audio'",
                                                                modifiers: {
                                                                  hover: true,
                                                                  top: true
                                                                }
                                                              }
                                                            ],
                                                            attrs: {
                                                              href:
                                                                "javascript:;"
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                $event.preventDefault()
                                                                return _vm.shareMediaLink(
                                                                  audio.id,
                                                                  audio.uuid,
                                                                  audio.publish_status,
                                                                  "audio-details",
                                                                  _vm.slug
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _c("i", {
                                                              staticClass:
                                                                "fa fa-share-alt"
                                                            })
                                                          ]
                                                        )
                                                      ])
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  audio.status == 2 &&
                                                  audio.is_meta_info_completed ==
                                                    1 &&
                                                  audio.is_hierarchy_info_completed ==
                                                    1
                                                    ? _c(
                                                        "li",
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
                                                                    slug:
                                                                      _vm.slug,
                                                                    id:
                                                                      audio.uuid
                                                                  }
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _c("i", {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "b-tooltip",
                                                                    rawName:
                                                                      "v-b-tooltip.hover.top",
                                                                    value:
                                                                      "View Audio",
                                                                    expression:
                                                                      "'View Audio'",
                                                                    modifiers: {
                                                                      hover: true,
                                                                      top: true
                                                                    }
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "fas fa-eye"
                                                              })
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c("i", {
                                                      staticClass: "fas fa-pen",
                                                      attrs: {
                                                        type: "button",
                                                        id: "audioEditButton",
                                                        "data-toggle":
                                                          "dropdown",
                                                        "aria-haspopup": "true",
                                                        "aria-expanded": "false"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "dropdown-menu",
                                                        attrs: {
                                                          "aria-labelledby":
                                                            "audioEditButton"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "router-link",
                                                          {
                                                            staticClass:
                                                              "dropdown-item ",
                                                            attrs: {
                                                              link: "",
                                                              to: {
                                                                name:
                                                                  "AudioStepOneEdit",
                                                                params: {
                                                                  id: audio.uuid
                                                                }
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                                        Edit Audio Classification\n                                                                    "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "router-link",
                                                          {
                                                            staticClass:
                                                              "dropdown-item ",
                                                            attrs: {
                                                              link: "",
                                                              to: {
                                                                name:
                                                                  "AudioStepTwoEdit",
                                                                params: {
                                                                  id: audio.uuid
                                                                }
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                                        Edit Audio Details\n                                                                    "
                                                            )
                                                          ]
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  ]),
                                                  _vm._v(" "),
                                                  _c("li", [
                                                    _c(
                                                      "a",
                                                      {
                                                        directives: [
                                                          {
                                                            name: "b-tooltip",
                                                            rawName:
                                                              "v-b-tooltip.hover.top",
                                                            value:
                                                              "Remove  Audio",
                                                            expression:
                                                              "'Remove  Audio'",
                                                            modifiers: {
                                                              hover: true,
                                                              top: true
                                                            }
                                                          }
                                                        ],
                                                        staticClass: "del-btn",
                                                        attrs: {
                                                          href: "javascript:;"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            return _vm.deleteMedia(
                                                              audio,
                                                              "audios"
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fa fa-trash-alt"
                                                        })
                                                      ]
                                                    )
                                                  ])
                                                ])
                                              ]
                                            )
                                          ])
                                        ])
                                      }),
                                      _vm._v(" "),
                                      !_vm.audios.length
                                        ? _c("tr", [
                                            _c(
                                              "td",
                                              {
                                                staticClass: "text-center",
                                                attrs: { colspan: "10" }
                                              },
                                              [
                                                _vm._v(
                                                  "No audio file\n                                                found\n                                            "
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
                                            _vm.audioPagination.last_page > 1
                                              ? _c("pagination", {
                                                  attrs: {
                                                    pagination:
                                                      _vm.audioPagination,
                                                    offset: 5
                                                  },
                                                  on: {
                                                    paginate: function($event) {
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
            ],
            1
          )
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
              title: "All Classification"
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
                        enableEditButton: _vm.enableClassificationsEditButton
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
            ref: "modalShareLink",
            staticClass: "min-modal-height",
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
                sharableMediaId: this.sharableMediaId,
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
              title: _vm.allSubjectModalTitle,
              centered: "",
              "hide-footer": "",
              "title-class": "modal-title-new"
            }
          },
          [
            _c(
              "ul",
              { staticClass: "text-center pl-0 modal-list-data" },
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
            ref: "image-cropper-modal",
            attrs: {
              centered: "",
              id: "image-cropper-modal",
              size: "lg",
              "content-class": "thumb-edit-modal"
            },
            scopedSlots: _vm._u([
              {
                key: "modal-header",
                fn: function() {
                  return [
                    _c(
                      "div",
                      { staticClass: "w-100" },
                      [
                        _c("h3", { staticClass: "float-left" }, [
                          _vm._v("Change Thumbnail Image")
                        ]),
                        _vm._v(" "),
                        _c(
                          "b-button",
                          {
                            staticClass: "modal-close close float-right",
                            on: { click: _vm.closeImageCropperModal }
                          },
                          [_vm._v("x\n                    ")]
                        )
                      ],
                      1
                    )
                  ]
                },
                proxy: true
              },
              {
                key: "modal-footer",
                fn: function() {
                  return [
                    _c("label", { staticClass: "btn btn-default" }, [
                      !_vm.isUploading
                        ? _c("input", {
                            ref: "audioFile",
                            staticStyle: { display: "None" },
                            attrs: {
                              type: "file",
                              name: "audioFile",
                              id: "audioFile",
                              accept: "image/*"
                            },
                            on: { change: _vm.onInputChange }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.imageSrc
                        ? _c("span", [_vm._v("Change photo")])
                        : _c("span", [_vm._v("Upload photo")])
                    ]),
                    _vm._v(" "),
                    _vm.imageSrc
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-default",
                            attrs: { disabled: _vm.isDisabled },
                            on: { click: _vm.uploadImage }
                          },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.isUploading ? "Uploading..." : "Save photo"
                              )
                            )
                          ]
                        )
                      : _vm._e()
                  ]
                },
                proxy: true
              }
            ])
          },
          [
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "uploader",
                on: {
                  dragenter: _vm.OnCropperDragEnter,
                  dragleave: _vm.OnCropperDragLeave,
                  dragover: function($event) {
                    $event.preventDefault()
                  },
                  drop: _vm.onCropperDrop
                }
              },
              [
                _c("ImageCropper", {
                  ref: "imageCropper",
                  attrs: { src: _vm.imageSrc, customAspectRatio: "'16/9'" }
                })
              ],
              1
            ),
            _vm._v(" "),
            !_vm.imageSrc
              ? _c("div", { staticClass: "text-center" }, [
                  _vm._v(
                    "Upload a photo. Then crop and adjust it to perfection."
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.imageSrc
              ? _c(
                  "a",
                  {
                    staticClass: "float-right mt-4 image-rotate-icon",
                    on: { click: _vm.imageRotate }
                  },
                  [_vm._v("Rotate "), _c("i", { staticClass: "fas fa-undo" })]
                )
              : _vm._e()
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "manage-content-banner" }, [
      _c("p", [
        _vm._v('To activate your content click "Activate" (blue hyperlinks)')
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/apis/AudioVideo.js":
/*!*****************************************!*\
  !*** ./resources/js/apis/AudioVideo.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  getMediaCategorizationLooupIdByUuid: function getMediaCategorizationLooupIdByUuid(uuid) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/get-media-categorization-lookupid-by-uuid/" + uuid);
  },
  updateVideoThumbnail: function updateVideoThumbnail(data, id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/update-video-thumb/" + id, data);
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

/***/ "./resources/js/apis/FolderSystem.js":
/*!*******************************************!*\
  !*** ./resources/js/apis/FolderSystem.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ "./resources/js/apis/Api.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  save: function save(lastRootNode) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/folder", lastRootNode);
  },
  folderWiseMedia: function folderWiseMedia(info) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().post("/folder-wise-media", info);
  },
  getRootNodeFolder: function getRootNodeFolder() {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/get-root-node-folder");
  },
  getAllMediaFiles: function getAllMediaFiles() {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/get-all-media-files");
  },
  getAllFolders: function getAllFolders() {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/get-all-folders");
  },
  getSingleFolder: function getSingleFolder(id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/get-single-folder/" + id);
  },
  deleteFolder: function deleteFolder(id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])()["delete"]("/delete-folder/" + id, {
      params: {
        t: 'folder'
      }
    });
  },
  editFolder: function editFolder(data) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().put('/edit-folder', data);
  },
  dragAndDropFolder: function dragAndDropFolder(data) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().put('/drag-and-drop-folder', data);
  },
  getBreadcrumb: function getBreadcrumb(id) {
    return Object(_Api__WEBPACK_IMPORTED_MODULE_0__["default"])().get("/get-breadcrumb/" + id);
  }
});

/***/ }),

/***/ "./resources/js/assets/white-transparent.png":
/*!***************************************************!*\
  !*** ./resources/js/assets/white-transparent.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/white-transparent.png?ca813438ae7aeadf7e76dcb24f07ff79";

/***/ }),

/***/ "./resources/js/components/FolderSystem.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/FolderSystem.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FolderSystem_vue_vue_type_template_id_ac4404b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FolderSystem.vue?vue&type=template&id=ac4404b0&scoped=true& */ "./resources/js/components/FolderSystem.vue?vue&type=template&id=ac4404b0&scoped=true&");
/* harmony import */ var _FolderSystem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FolderSystem.vue?vue&type=script&lang=js& */ "./resources/js/components/FolderSystem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FolderSystem_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FolderSystem.vue?vue&type=style&index=0&lang=scss&rel=stylesheet%2Fscss& */ "./resources/js/components/FolderSystem.vue?vue&type=style&index=0&lang=scss&rel=stylesheet%2Fscss&");
/* harmony import */ var _FolderSystem_vue_vue_type_style_index_1_id_ac4404b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FolderSystem.vue?vue&type=style&index=1&id=ac4404b0&scoped=true&lang=css& */ "./resources/js/components/FolderSystem.vue?vue&type=style&index=1&id=ac4404b0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _FolderSystem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FolderSystem_vue_vue_type_template_id_ac4404b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FolderSystem_vue_vue_type_template_id_ac4404b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ac4404b0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FolderSystem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FolderSystem.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/FolderSystem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderSystem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FolderSystem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FolderSystem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderSystem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FolderSystem.vue?vue&type=style&index=0&lang=scss&rel=stylesheet%2Fscss&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/FolderSystem.vue?vue&type=style&index=0&lang=scss&rel=stylesheet%2Fscss& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderSystem_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../node_modules/vue-loader/lib??vue-loader-options!./FolderSystem.vue?vue&type=style&index=0&lang=scss&rel=stylesheet%2Fscss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FolderSystem.vue?vue&type=style&index=0&lang=scss&rel=stylesheet%2Fscss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderSystem_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderSystem_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderSystem_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderSystem_vue_vue_type_style_index_0_lang_scss_rel_stylesheet_2Fscss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FolderSystem.vue?vue&type=style&index=1&id=ac4404b0&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/FolderSystem.vue?vue&type=style&index=1&id=ac4404b0&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderSystem_vue_vue_type_style_index_1_id_ac4404b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./FolderSystem.vue?vue&type=style&index=1&id=ac4404b0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FolderSystem.vue?vue&type=style&index=1&id=ac4404b0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderSystem_vue_vue_type_style_index_1_id_ac4404b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderSystem_vue_vue_type_style_index_1_id_ac4404b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderSystem_vue_vue_type_style_index_1_id_ac4404b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderSystem_vue_vue_type_style_index_1_id_ac4404b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FolderSystem.vue?vue&type=template&id=ac4404b0&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/FolderSystem.vue?vue&type=template&id=ac4404b0&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderSystem_vue_vue_type_template_id_ac4404b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FolderSystem.vue?vue&type=template&id=ac4404b0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FolderSystem.vue?vue&type=template&id=ac4404b0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderSystem_vue_vue_type_template_id_ac4404b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderSystem_vue_vue_type_template_id_ac4404b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/partials/Breadcrumb.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/partials/Breadcrumb.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Breadcrumb_vue_vue_type_template_id_25869d45___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Breadcrumb.vue?vue&type=template&id=25869d45& */ "./resources/js/components/partials/Breadcrumb.vue?vue&type=template&id=25869d45&");
/* harmony import */ var _Breadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Breadcrumb.vue?vue&type=script&lang=js& */ "./resources/js/components/partials/Breadcrumb.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Breadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Breadcrumb_vue_vue_type_template_id_25869d45___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Breadcrumb_vue_vue_type_template_id_25869d45___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/partials/Breadcrumb.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/partials/Breadcrumb.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/partials/Breadcrumb.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Breadcrumb.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/Breadcrumb.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/partials/Breadcrumb.vue?vue&type=template&id=25869d45&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/partials/Breadcrumb.vue?vue&type=template&id=25869d45& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_template_id_25869d45___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Breadcrumb.vue?vue&type=template&id=25869d45& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/Breadcrumb.vue?vue&type=template&id=25869d45&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_template_id_25869d45___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_template_id_25869d45___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/partials/FolderModal.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/partials/FolderModal.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FolderModal_vue_vue_type_template_id_174ebf0d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FolderModal.vue?vue&type=template&id=174ebf0d&scoped=true& */ "./resources/js/components/partials/FolderModal.vue?vue&type=template&id=174ebf0d&scoped=true&");
/* harmony import */ var _FolderModal_vue_vue_type_style_index_0_id_174ebf0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FolderModal.vue?vue&type=style&index=0&id=174ebf0d&scoped=true&lang=css& */ "./resources/js/components/partials/FolderModal.vue?vue&type=style&index=0&id=174ebf0d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}



/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _FolderModal_vue_vue_type_template_id_174ebf0d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FolderModal_vue_vue_type_template_id_174ebf0d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "174ebf0d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/partials/FolderModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/partials/FolderModal.vue?vue&type=style&index=0&id=174ebf0d&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/partials/FolderModal.vue?vue&type=style&index=0&id=174ebf0d&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderModal_vue_vue_type_style_index_0_id_174ebf0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./FolderModal.vue?vue&type=style&index=0&id=174ebf0d&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/FolderModal.vue?vue&type=style&index=0&id=174ebf0d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderModal_vue_vue_type_style_index_0_id_174ebf0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderModal_vue_vue_type_style_index_0_id_174ebf0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderModal_vue_vue_type_style_index_0_id_174ebf0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderModal_vue_vue_type_style_index_0_id_174ebf0d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/partials/FolderModal.vue?vue&type=template&id=174ebf0d&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/partials/FolderModal.vue?vue&type=template&id=174ebf0d&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderModal_vue_vue_type_template_id_174ebf0d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FolderModal.vue?vue&type=template&id=174ebf0d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/partials/FolderModal.vue?vue&type=template&id=174ebf0d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderModal_vue_vue_type_template_id_174ebf0d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FolderModal_vue_vue_type_template_id_174ebf0d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/ManageContent.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/ManageContent.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ManageContent_vue_vue_type_template_id_99849276_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ManageContent.vue?vue&type=template&id=99849276&scoped=true& */ "./resources/js/views/ManageContent.vue?vue&type=template&id=99849276&scoped=true&");
/* harmony import */ var _ManageContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ManageContent.vue?vue&type=script&lang=js& */ "./resources/js/views/ManageContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ManageContent_vue_vue_type_style_index_0_id_99849276_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ManageContent.vue?vue&type=style&index=0&id=99849276&scoped=true&lang=css& */ "./resources/js/views/ManageContent.vue?vue&type=style&index=0&id=99849276&scoped=true&lang=css&");
/* harmony import */ var _ManageContent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ManageContent.vue?vue&type=style&index=1&lang=css& */ "./resources/js/views/ManageContent.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _ManageContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ManageContent_vue_vue_type_template_id_99849276_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ManageContent_vue_vue_type_template_id_99849276_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "99849276",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ManageContent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ManageContent.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/ManageContent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ManageContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ManageContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/ManageContent.vue?vue&type=style&index=0&id=99849276&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/ManageContent.vue?vue&type=style&index=0&id=99849276&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageContent_vue_vue_type_style_index_0_id_99849276_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ManageContent.vue?vue&type=style&index=0&id=99849276&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ManageContent.vue?vue&type=style&index=0&id=99849276&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageContent_vue_vue_type_style_index_0_id_99849276_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageContent_vue_vue_type_style_index_0_id_99849276_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageContent_vue_vue_type_style_index_0_id_99849276_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageContent_vue_vue_type_style_index_0_id_99849276_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/ManageContent.vue?vue&type=style&index=1&lang=css&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/ManageContent.vue?vue&type=style&index=1&lang=css& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageContent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ManageContent.vue?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ManageContent.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageContent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageContent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageContent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageContent_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/ManageContent.vue?vue&type=template&id=99849276&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/ManageContent.vue?vue&type=template&id=99849276&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageContent_vue_vue_type_template_id_99849276_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ManageContent.vue?vue&type=template&id=99849276&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/ManageContent.vue?vue&type=template&id=99849276&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageContent_vue_vue_type_template_id_99849276_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ManageContent_vue_vue_type_template_id_99849276_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);