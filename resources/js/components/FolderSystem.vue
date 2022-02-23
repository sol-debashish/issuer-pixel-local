<template>
    <div class="folder-system" id="folder-system-root">
        <button
            class="btn btn-lg btn-secondary folder-create"
            id="show-modal"
            @click="
                showModal = true;
                folder_name = 'New Folder';
            "
        >
            <i class="fas fa-folder-plus"></i>
            Create Directory Folder
        </button>

        <FolderModal
            v-if="showModal"
            @close="showModal = false"
            @saveAndClose="
                addNode();
                showModal = false;
            "
        >
            <div slot="header">
                <h5 class="modal-title" id="exampleModalCenterTitle">
                    <span>
                        <i class="fas fa-folder-plus"></i>
                    </span>
                    Create Folder
                </h5>
            </div>

            <div slot="body">
                <div class="">
                    <div class="mb-3">
                        <label for="folderName" class="form-label"
                            >Folder Name</label
                        >
                        <input
                            type="text"
                            class="form-control"
                            id="folderName"
                            placeholder="Issuer Pixel"
                            v-model="folder_name"
                        />
                    </div>
                </div>
            </div>
        </FolderModal>
        <vue-tree-list
            @click="onClick"
            @change-name="onChangeName"
            @delete-node="onDel"
            @add-node="onAddNode"
            @drop="drop"
            @drop-before="dropBefore"
            @drop-after="dropAfter"
            :model="data"
            default-tree-node-name="New Folder"
            default-leaf-node-name="New File"
            v-bind:default-expanded="false"
            class="folder-list"
            id="scrollbar-style"
            draggable="true"
        >
            <template v-slot:leafNameDisplay="slotProps">
                <span class="folder-name" draggable="true">
                    {{ slotProps.model.name }}
                </span>
            </template>

            <!-- Node Add -->
            <template v-slot:addTreeNodeIcon="slotProps">
                <span class="icon" data-toggle="tooltip" data-placement="bottom" title="Create Sub-Folder"><i class="far fa-folder-open"></i></span>
            </template>

            <!-- Node Edit -->
            <template v-slot:editNodeIcon="slotProps">
                <span class="icon" data-toggle="tooltip" data-placement="bottom" title="Edit">
                    <i class="far fa-edit" id="edit-btn"></i>
                </span>
            </template>

            <!-- Node Delete -->
            <template v-slot:delNodeIcon="slotProps">
                <span class="icon" data-toggle="tooltip" data-placement="bottom" title="Delete">
                    <i class="far fa-trash-alt"></i>
                </span>
            </template>

            <span class="icon" slot="treeNodeIcon">
                <i class="far fa-folder"></i>
            </span>
        </vue-tree-list>
    </div>
</template>

<script>
import { VueTreeList, Tree, TreeNode } from "vue-tree-list";
import FolderModal from "../components/partials/FolderModal.vue";
import FolderSystem from "../apis/FolderSystem";
export default {
    components: {
        VueTreeList,
        FolderModal
    },
    data() {
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
                id: "",
            },
            data: new Tree([])
        };
    },
    methods: {
        forceRerender() {
            this.componentKey += 1;
        },
        // Node Delete
        onDel(node) {
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
                        action: function () {
                            FolderSystem.deleteFolder(node.id)
                            .then(response => {
                                let params = {isLeaf: false, media_file_id: 0, id: node.pid};
                                vm.folderHighlight(params)
                                vm.$root.$emit("breadcrumb", params);
                                vm.folderWiseMedia(params);
                                node.remove();
                                toastr.success(response.data.success.message)
                                vm.getRootNodeFolder();                            
                            })
                            .catch(error => {
                                console.log(error);
                            });
                        },
                    },
                    Cancel: {
                        btnClass: 'btn-default rounded-pill'
                    },
                }
            });
        },

        // Node Edit
        onChangeName(params) {
            this.updatedFolderName = params.newName.trim();

            if (params != "undefined" && params.eventType == "blur") {
                FolderSystem.getSingleFolder(params.id)
                .then(response => {
                    this.editFolder(params, response.data.data.name);
                })
                .catch(error => {
                    console.log(error);
                });
            }
        },

        // Child Node Add
        onAddNode(params) {
            this.saveChild(params);
        },

        onClick(params) {
            if (!this.$parent.triggeredFromParent) {
                params.toggle();
            }

            //Data pass to breadcrumb
            if(params.isLeaf == false && params.media_file_id == 0) {
                this.$root.$emit("breadcrumb", params);
            }

            // Folder Highlight/Selected
            this.folderHighlight(params);

            //Folder Wide Media
            if(params.isLeaf == false && params.media_file_id == 0) {
                this.folderWiseMedia(params);
            } else {
                // console.log('This is a file');
            }
        },

        folderHighlight(params) {

            if(params.isLeaf == false && params.media_file_id == 0) {

                $("#folder-system-root")
                .find('.folder-highlight-icon')
                .removeClass('folder-highlight-icon');

                $("#folder-system-root")
                .find('.folder-highlight-text')
                .removeClass('folder-highlight-text');

                // Add id/classes
                $("#folder-system-root").find('#folder-highlight').removeAttr('id');
                $('#'+ params.id +" .folder-name").closest('.vtl-node-main').attr('id','folder-highlight');

                $('#folder-system-root').find('.vtl-node-main').removeClass('folder-highlight');
                $('#'+params.id).find('.vtl-node-main').addClass('folder-highlight');

                $('#'+ params.id +" .folder-name")
                .addClass('folder-highlight-text');

                $('#'+ params.id +" .folder-icon")
                .addClass('folder-highlight-icon');


            } else {
                // console.log("Files");
            }
        },
        drop: function({ node, src, target }) {
            this.nodeDragAndDrop(node, src, target);
        },
        dropBefore: function({ node, src, target }) {
            // console.log("drop-before", node, src, target);
            this.nodeDropBefore(node, src, target);
        },
        dropAfter: function({ node, src, target }) {
            // console.log("drop-after", node, src, target);
        },

        addNode() {
            var node = new TreeNode({
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

        getNewTree() {
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
                    for (
                        var i = 0, len = oldNode.children.length;
                        i < len;
                        i++
                    ) {
                        newNode.children.push(_dfs(oldNode.children[i]));
                    }
                }
                return newNode;
            }

            vm.newTree = _dfs(vm.data);
        },

        //Save Root Node Method
        save: function() {
            this.lastRootNode = this.newTree.children[
                this.newTree.children.length - 1
            ];
            FolderSystem.save(this.lastRootNode)
                .then(response => {
                    toastr.success(response.data.success.message)
                    this.getRootNodeFolder();
                    this.updatedData();
                })
                .catch(error => {
                    console.log(error);
                });
        },

        //Get Root Node Folder List
        getRootNodeFolder: function() {
            FolderSystem.getRootNodeFolder()
                .then(response => {

                    this.data = new Tree(response.data.data.children);

                    let vi = this;

                    // Folder Expanded with caret icon
                    $(function() {
                        $(".vtl-icon").click(function() {
                            let id = $(this)
                                .parent()
                                .parent()
                                .parent()
                                .attr("id");
                            FolderSystem.getSingleFolder(id)
                                .then(response => {
                                    let sf = response.data.data;
                                    vi.folderWiseMedia(sf);

                                    //Data pass to breadcrumb
                                    vi.$root.$emit("breadcrumb", sf);
                                })
                                .catch(error => {
                                    console.log(error);
                                });
                        });
                    });
                    // End Folder Expanded with caret icon

                    this.updatedData();

                    // Media Icon Change
                    FolderSystem.getAllMediaFiles()
                    .then(response => {
                        for(let i = 0; i < response.data.data.length; i++) {
                            switch(response.data.data[i].media_type) {
                                case 1:
                                    $('#'+ response.data.data[i].id +" .folder-name")
                                    .parent()
                                    .parent()
                                    .children()
                                    .first()
                                    .children()
                                    .removeClass('vtl-icon vtl-menu-icon vtl-icon-file').addClass('fas fa-headphones media-type-icon');
                                    break;
                                case 2:
                                    $('#'+ response.data.data[i].id +" .folder-name")
                                    .parent()
                                    .parent()
                                    .children()
                                    .first()
                                    .children()
                                    .removeClass('vtl-icon vtl-menu-icon vtl-icon-file').addClass('fas fa-video media-type-icon');
                                    break;
                            }
                        }                                    
                    })
                    .catch(error => {
                        console.log(error);
                    })

                })
                .catch(error => {
                    console.log(error);
                });
        },

        // Edit Folder
        editFolder: function(folderInfo, previousFolderName) {
            this.folderInfoFormData.id = folderInfo.id;
            this.folderInfoFormData.old_name = previousFolderName;
            this.folderInfoFormData.new_name = this.updatedFolderName;

            if ((folderInfo.newName != "") && (previousFolderName != "") && (previousFolderName != this.updatedFolderName)) {
                FolderSystem.editFolder(this.folderInfoFormData)
                    .then(response => {
                        toastr.success(response.data.success.message)
                        this.getRootNodeFolder();
                        this.$root.$emit("breadcrumb", this.folderInfoFormData);
                    })
                    .catch(error => {
                        console.log(error);
                    });
            } else {
                toastr.warning("No folder edited.")
            }
        },

        // Save Child Method
        saveChild: function(folderInfo) {
            this.childFolderInfoFormData.id = folderInfo.id;
            this.childFolderInfoFormData.name = folderInfo.name;
            this.childFolderInfoFormData.pid = folderInfo.pid;
            FolderSystem.save(this.childFolderInfoFormData)
                .then(response => {
                    toastr.success("Sub Folder Created.");
                    this.data = new Tree(response.data.data.original.data.children);
                })
                .catch(error => {
                    console.log(error);
                });
        },

        // Folder Drag and Drop
        nodeDragAndDrop: function(node, src, target) {
            this.dragAndDropFolder.node_id = node.id;
            this.dragAndDropFolder.node_pid = node.pid;
            this.dragAndDropFolder.node_isLeaf = node.isLeaf;

            this.dragAndDropFolder.node_media_type = node.media_type;

            this.dragAndDropFolder.src_id = src.id;
            this.dragAndDropFolder.src_pid = src.pid;

            this.dragAndDropFolder.target_id = target.id;
            this.dragAndDropFolder.target_pid = target.pid;
            this.dragAndDropFolder.target_isLeaf = target.isLeaf;

            let vi = this;

            if (
                this.dragAndDropFolder.target_isLeaf != true &&
                // (this.dragAndDropFolder.node_id !=
                // this.dragAndDropFolder.target_id)
                // &&
                this.dragAndDropFolder.node_pid !=
                    this.dragAndDropFolder.src_id &&
                this.dragAndDropFolder.src_id !=
                    this.dragAndDropFolder.target_id
            ) {
                FolderSystem.dragAndDropFolder(this.dragAndDropFolder)
                    .then(response => {
                        // Media Icon Change
                        let fi = document.getElementById(
                            this.dragAndDropFolder.target_id
                        );

                        let medialist = fi.nextElementSibling.querySelectorAll(
                            "i.vtl-icon.vtl-menu-icon.vtl-icon-file"
                        );
                        for (let i = 0; i < medialist.length; i++) {
                            if (this.dragAndDropFolder.node_media_type === 1) {
                                medialist[i].setAttribute(
                                    "class",
                                    "fas fa-headphones media-type-icon"
                                );
                            }

                            if (this.dragAndDropFolder.node_media_type === 2) {
                                medialist[i].setAttribute(
                                    "class",
                                    "fas fa-video media-type-icon"
                                );
                            }
                        }
                        // End Media Icon Change

                        // After file drag and drop..Folder wise media display (Source Directory Update)

                        let src_children = src.children;

                        let media_file_arr = [];

                        for (let i = 0; i < src_children.length; i++) {
                            media_file_arr.push(src_children[i].media_file_id);
                        }

                        vi.$emit("folderWiseMedia", media_file_arr);

                        // End After file drag and drop..Folder wise media display (Source Directory Update)


                        // After file drag and drop..Folder wise media display (Destination Directory Update)

                        let target_children = target.children;

                        let destination_media_file_arr = [];

                        for (let i = 0; i < target_children.length; i++) {
                            destination_media_file_arr.push(target_children[i].media_file_id);
                        }

                        vi.$emit("folderWiseMedia", destination_media_file_arr);

                        //Data pass to breadcrumb
                        this.$root.$emit("breadcrumb", target);

                        // End After file drag and drop..Folder wise media display (Destination Directory Update)

                        this.getRootNodeFolder();
                        this.folderHighlight(target)
                    })
                    .catch(error => {
                        console.log(error);
                    });
            } else {
                toastr.error("In same directory drag not possible.")
            }
        },

        // Make a child folder to root
        nodeDropBefore: function(node, src, target) {
            this.dragAndDropFolder.node_id = node.id;
            this.dragAndDropFolder.node_media_type = node.media_type;
            this.dragAndDropFolder.target_id = target.pid;

            this.nodeDropBeforeForBradcrumb.id = target.pid;
            let vi = this;

            // console.log('src: ', src)
            // console.log('node: ', node)
            // console.log('target: ', target)

            if (
                this.dragAndDropFolder.node_id !=
                this.dragAndDropFolder.target_id
            ) {
                FolderSystem.dragAndDropFolder(this.dragAndDropFolder)
                    .then(response => {
                        // Media Icon Change
                        let fi = document.getElementById(
                            this.dragAndDropFolder.target_id
                        );

                        let medialist = fi.nextElementSibling.querySelectorAll(
                            "i.vtl-icon.vtl-menu-icon.vtl-icon-file"
                        );

                        for (let i = 0; i < medialist.length; i++) {
                            if (this.dragAndDropFolder.node_media_type === 1) {
                                medialist[i].setAttribute(
                                    "class",
                                    "fas fa-headphones media-type-icon"
                                );
                            }

                            if (this.dragAndDropFolder.node_media_type === 2) {
                                medialist[i].setAttribute(
                                    "class",
                                    "fas fa-video media-type-icon"
                                );
                            }
                        }
                        // End Media Icon Change

                        // After file drag and drop..Folder wise media display (Source Directory Update)

                        let src_children = src.children;

                        let media_file_arr = [];

                        for (let i = 0; i < src_children.length; i++) {
                            media_file_arr.push(src_children[i].media_file_id);
                        }

                        vi.$emit("folderWiseMedia", media_file_arr);

                        // End After file drag and drop..Folder wise media display (Source Directory Update)


                        // After file drag and drop..Folder wise media display (Destination Directory Update)

                        let target_children = target.children;

                        let destination_media_file_arr = [];

                        for (let i = 0; i < target_children.length; i++) {
                            destination_media_file_arr.push(target_children[i].media_file_id);
                        }

                        vi.$emit("folderWiseMedia", destination_media_file_arr);


                        //Data pass to breadcrumb
                        this.$root.$emit("breadcrumb", this.nodeDropBeforeForBradcrumb);

                        // End After file drag and drop..Folder wise media display (Destination Directory Update)

                        this.getRootNodeFolder();
                    })
                    .catch(error => {
                        console.log(error);
                    });
            } else {
                toastr.error("In same directory drag not possible.")
            }
        },

        //Folder Wise Media Files onClick
        folderWiseMedia: function(folderInfo) {
            this.folderWiseMediaInfo.company_id = folderInfo.company_id;
            this.folderWiseMediaInfo.id = folderInfo.id;
            this.folderWiseMediaInfo.isLeaf = folderInfo.isLeaf;
            this.folderWiseMediaInfo.media_file_id = folderInfo.media_file_id;
            this.folderWiseMediaInfo.pid = folderInfo.pid;

            let vi = this;
            FolderSystem.folderWiseMedia(this.folderWiseMediaInfo)
                .then(response => {
                    let media_file_arr = [];

                    for (let i = 0; i < response.data.data.length; i++) {
                        media_file_arr.push(
                            response.data.data[i].media_file_id
                        );
                    }
                    vi.$emit("folderWiseMedia", media_file_arr);
                })
                .catch(error => {
                    console.log(error);
                });
        },

        
        updatedData() {
        FolderSystem.getRootNodeFolder()
        .then(response => {

            // Only one root folder expanded at a time (with caret icon)
            for (let i = 0; i < response.data.data.children.length; i++) {

                $('#'+ response.data.data.children[i].id +" .vtl-icon").click(function() {

                    for (let i = 0; i < response.data.data.children.length; i++) {

                        $('#'+ response.data.data.children[i].id +" .vtl-icon")
                        .parent()
                        .parent()
                        .parent()
                        .next()
                        .css({'display':'none'});

                        $('#'+ response.data.data.children[i].id +" .vtl-icon")
                        .removeClass('vtl-icon-caret-down')
                        .addClass('vtl-icon-caret-right');
                    }
                        let rootFolder =  $(this).parent().parent().parent();
                        rootFolder.next().css({'display':'block'});

                        $(this).removeClass('vtl-icon-caret-right').addClass('vtl-icon-caret-down');
                });
            }
            // End only one root folder expanded at a time (with caret icon)


            // Only one root folder expanded at a time (with name)
            for (let i = 0; i < response.data.data.children.length; i++) {

                $('#'+ response.data.data.children[i].id +" .folder-name").click(function() {

                    for (let i = 0; i < response.data.data.children.length; i++) {
                        $('#'+ response.data.data.children[i].id +" .folder-name")
                        .parent()
                        .parent()
                        .parent()
                        .next()
                        .css({'display':'none'});

                        $('#'+ response.data.data.children[i].id +" .vtl-icon")
                        .removeClass('vtl-icon-caret-down')
                        .addClass('vtl-icon-caret-right');
                    }

                    let rootFolder =  $(this).parent().parent().parent();
                    rootFolder.next().css({'display':'block'});

                    $('#'+ response.data.data.children[i].id +" .vtl-icon")
                    .removeClass('vtl-icon-caret-right')
                    .addClass('vtl-icon-caret-down');
                });
            }
            // End only one root folder expanded at a time (with name)


            // Only one root folder expanded at a time (with folder icon)
            for (let i = 0; i < response.data.data.children.length; i++) {

                $('#'+ response.data.data.children[i].id +" .fa-folder-open").click(function() {

                    for (let i = 0; i < response.data.data.children.length; i++) {
                        $('#'+ response.data.data.children[i].id +" .fa-folder-open")
                        .parent()
                        .parent()
                        .parent()
                        .parent()
                        .parent()
                        .next()
                        .css({'display':'none'});

                        $('#'+ response.data.data.children[i].id +" .vtl-icon")
                        .removeClass('vtl-icon-caret-down')
                        .addClass('vtl-icon-caret-right');
                    }

                        let rootFolder =  $(this).parent().parent().parent().parent().parent();
                        rootFolder.next().css({'display':'block'});

                        $('#'+ response.data.data.children[i].id +" .vtl-icon")
                        .removeClass('vtl-icon-caret-right')
                        .addClass('vtl-icon-caret-down');
                });
            }
            // End only one root folder expanded at a time (with folder icon)


            // Only one root folder expanded at a time (with folder edit icon)
            for (let i = 0; i < response.data.data.children.length; i++) {

                $('#'+ response.data.data.children[i].id +" .fa-edit").click(function() {

                    for (let i = 0; i < response.data.data.children.length; i++) {
                        $('#'+ response.data.data.children[i].id +" .fa-edit")
                        .parent()
                        .parent()
                        .parent()
                        .parent()
                        .parent()
                        .next()
                        .css({'display':'none'});

                        $('#'+ response.data.data.children[i].id +" .vtl-icon")
                        .removeClass('vtl-icon-caret-down')
                        .addClass('vtl-icon-caret-right');
                    }

                        let rootFolder =  $(this).parent().parent().parent().parent().parent();
                        rootFolder.next().css({'display':'block'});

                        $('#'+ response.data.data.children[i].id +" .vtl-icon")
                        .removeClass('vtl-icon-caret-right')
                        .addClass('vtl-icon-caret-down');
                });
            }
            // End only one root folder expanded at a time (with folder edit icon)

        })
        .catch(error => {
            console.log(error);
        })

        // Media Icon Change
        FolderSystem.getAllMediaFiles()
        .then(response => {
            for(let i = 0; i < response.data.data.length; i++) {
                switch(response.data.data[i].media_type) {
                    case 1:
                        $('#'+ response.data.data[i].id +" .folder-name")
                        .parent()
                        .parent()
                        .children()
                        .first()
                        .children()
                        .removeClass('vtl-icon vtl-menu-icon vtl-icon-file').addClass('fas fa-headphones media-type-icon');
                        break;
                    case 2:
                        $('#'+ response.data.data[i].id +" .folder-name")
                        .parent()
                        .parent()
                        .children()
                        .first()
                        .children()
                        .removeClass('vtl-icon vtl-menu-icon vtl-icon-file').addClass('fas fa-video media-type-icon');
                        break;
                }
            }
            // End Media Icon Change
            if (this.$parent.draggingFromTable) {
                this.changeFileIcon();
            }
        })
        .catch(error => {
            console.log(error);
        })

        // All Folder
        FolderSystem.getAllFolders()
        .then(response => {

            for (let i = 0; i < response.data.data.length; i++) {

                $('#'+ response.data.data[i].id +" .vtl-icon").click(function() {

                    $("#folder-system-root")
                    .find('.folder-highlight-icon')
                    .removeClass('folder-highlight-icon');

                    $("#folder-system-root")
                    .find('.folder-highlight-text')
                    .removeClass('folder-highlight-text');

                    // Add id/classes

                    $("#folder-system-root").find('#folder-highlight').removeAttr('id');
                    $('#'+ response.data.data[i].id +" .folder-name").closest('.vtl-node-main').attr('id','folder-highlight');


                    $('#folder-system-root').find('.vtl-node-main').removeClass('folder-highlight');
                    $('#'+response.data.data[i].id).find('.vtl-node-main').addClass('folder-highlight');

                    $('#'+ response.data.data[i].id +" .folder-name")
                    .addClass('folder-highlight-text');

                    $('#'+ response.data.data[i].id +" .folder-icon")
                    .addClass('folder-highlight-icon');

                });

                $('#'+ response.data.data[i].id +" #edit-btn").click(function() {

                    $("#folder-system-root")
                    .find('.vtl-node-main')
                    .removeAttr('style');

                    $("#folder-system-root")
                    .find('.folder-highlight-icon')
                    .removeClass('folder-highlight-icon');

                    $("#folder-system-root")
                    .find('.folder-highlight-text')
                    .removeClass('folder-highlight-text');

                    // Add id/classes
                    $("#folder-system-root").find('#folder-highlight').removeAttr('id');
                    $('#'+ response.data.data[i].id +" .folder-name").closest('.vtl-node-main').attr('id','folder-highlight');


                    $('#folder-system-root').find('.vtl-node-main').removeClass('folder-highlight');
                    $('#'+response.data.data[i].id).find('.vtl-node-main').addClass('folder-highlight');

                    $('#'+ response.data.data[i].id +" .folder-name")
                    .addClass('folder-highlight-text');

                    $('#'+ response.data.data[i].id +" .folder-icon")
                    .addClass('folder-highlight-icon');

                });
            }

        })
        .catch(error => {
            console.log(error);
        })
    },
    //works when dragged from table to folder
    changeFileIcon() {
        if (this.$parent.draggedFileMediaContentId) {
            let droppedFileElement = $('#' + this.$parent.draggedFileMediaContentId).find('i.vtl-icon.vtl-menu-icon.vtl-icon-file');
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
    },

    },

    created() {
        this.getRootNodeFolder();
    }
};
</script>

<style lang="scss" rel="stylesheet/scss">
.vtl {
    width: 245px;
    .vtl-tree-margin {
        margin-left: 10px;
    }
    .vtl-up {
        margin-top: 0px;
    }
    .vtl-drag-disabled {
        background-color: #d0cfcf;
        &:hover {
            background-color: #d0cfcf;
        }
    }
    .vtl-disabled {
        background-color: #d0cfcf;
    }

    .vtl-icon-plus {
        display: none;
        visibility: hidden;
    }

    .media-type-icon {
        font-size: 12px;
        color: #1e0857;
        padding-right: 5px;
    }

    .vtl-node-main {
        position: relative;
        border-bottom: 1px solid #ccc;
        .vtl-operation {
            position: absolute;
            right: 0;
        }
        .vtl-caret {
            width: 0px;
            height: 0px;
            position: absolute;
            top: 9px;
        }
    }
}
#folder-highlight, #folder-highlight:hover, #folder-highlight:focus,
.folder-highlight, .folder-highlight:hover, .folder-highlight:focus
{
    background: #2a0a26;
    color: #FFF;
}
#folder-highlight:hover #edit-btn,
.folder-highlight:hover #edit-btn
{
    color: #FFFFFF;
}
#folder-highlight:hover #sub-folder-btn,
.folder-highlight:hover #sub-folder-btn
{
    color: #FFFFFF;
}
#folder-highlight:hover .vtl-icon,
.folder-highlight:hover .vtl-icon {
    color: #FFFFFF;
}
.folder-highlight-text {
    color: #FFFFFF !important;
}
.folder-highlight-icon {
    color: #FFFFFF !important;
}
.vtl-input {
    background: #2a0a26;
    width: 120px;
}
.folder-system #folder-highlight * {
    color: #FFFFFF !important;
}
.folder-system .folder-highlight * {
    color: #FFFFFF !important;
}
</style>

<style scoped>
.muted {
    color: gray;
    font-size: 80%;
    display: none;
}

.folder-system .folder-create {
    border-radius: 6px;
    border: none;
    background-color: #5352ED;
    font-size: 0.78rem;
    padding: 5px 5px;
    margin-bottom: 40px;
    width: 100%;
}
.folder-system .folder-create:hover {
    background-color: #3C34AC;
}
@media (max-width: 1280px) {
    .folder-system .folder-create{
        font-size: 0.72rem;
        padding: 8px 10px;
    }
}
.folder-system .folder-create i.fas {
    padding: 0px 0px;
}
.folder-system .folder-list {
    background: #ffffff;
    width: auto;
    height: 450px;
    overflow: scroll;
}

#scrollbar-style::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
    border-radius: 7px;
}

#scrollbar-style::-webkit-scrollbar {
    width: 7px;
    background-color: #f5f5f5;
}

#scrollbar-style::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background-image: -webkit-gradient(
        linear,
        left bottom,
        left top,
        color-stop(0.44, rgb(122, 153, 217)),
        color-stop(0.5, rgb(73, 125, 189)),
        color-stop(0.86, rgb(30, 8, 87))
    );
}

#scrollbar-style::-webkit-scrollbar:horizontal {
    height: 7px;
}
.folder-system .vtl:hover {
    cursor: pointer;
}
.folder-system .icon i.far {
    color: #828282;
    padding: 5px;
    font-size: 14px;
    cursor: pointer;
}
.folder-system .icon i.fa-trash-alt {
    color: red;
}

.folder-system .icon i.fa-folder {
    cursor: default;
    padding-right: 8px;
    font-size: 18px;
}
.folder-system .folder-name {
    color: #1e0857;
    font-size: 12px;
    padding: 17px 105px 11px 20px;
    margin-left: -20px;
}
.folder-open {
    display: inline-block;
    cursor: pointer;
    color: #dddddd;
}

.folder-system .modal-title {
    margin-left: 0px;
    font-size: 18px;
    font-weight: 600;
}

.folder-system .modal-title span {
    padding-right: 10px;
    color: #1e0857;
}
.media-type-icon {
    font-size: 12px;
    color: green;
    padding-right: 5px;
}
</style>
