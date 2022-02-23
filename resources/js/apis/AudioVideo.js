import Api from "./Api";


export default {

    getMediaCategorizationLooupIdByUuid(uuid) {
        return Api().get("/get-media-categorization-lookupid-by-uuid/"+uuid);
    },
    updateVideoThumbnail(data, id) {
        return Api().post("/update-video-thumb/" + id, data);
    },
};
