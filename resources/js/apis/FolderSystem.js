import Api from "./Api";


export default {

    save(lastRootNode) {
        return Api().post("/folder", lastRootNode);
    },

    folderWiseMedia(info) {
        return Api().post("/folder-wise-media", info);
    },

    getRootNodeFolder() {
        return Api().get("/get-root-node-folder");
    },

    getAllMediaFiles() {
        return Api().get("/get-all-media-files");
    },

    getAllFolders() {
        return Api().get("/get-all-folders");
    },

    getSingleFolder(id) {
        return Api().get("/get-single-folder/"+ id);
    },

    deleteFolder(id) {

        return Api().delete("/delete-folder/" + id, {params: {t: 'folder'}});
    },
    editFolder(data) {

        return Api().put('/edit-folder', data);
    },
    dragAndDropFolder(data) {

        return Api().put('/drag-and-drop-folder', data);
    },

    getBreadcrumb(id) {
        return Api().get("/get-breadcrumb/"+ id);
    },
};
