import Api from "./Api";
let ajaxRequest = null;
export default {

    audio(page, audioQueryInput, folderWiseMediaData) {

        if (ajaxRequest) {
            ajaxRequest.cancel();
        }
        ajaxRequest = axios.CancelToken.source();
        return Api().get("/audio?page=" + page + "&query_input=" + audioQueryInput + "&folder_wise_media=" + folderWiseMediaData, {
            cancelToken: ajaxRequest.token
        });
    },
    companyBioAudioList(page, slug, audioQueryInput) {

        if (ajaxRequest) {
            ajaxRequest.cancel();
        }
        ajaxRequest = axios.CancelToken.source();
        return Api().get("/company-bio-audio?page=" + page + "&slug=" + slug + "&query_input=" + audioQueryInput, {
            cancelToken: ajaxRequest.token
        });
    },
    video(page, videoQueryInput, folderWiseMediaData) {

        // cancel  previous ajax if exists
        if (ajaxRequest) {
            ajaxRequest.cancel();
        }
        ajaxRequest = axios.CancelToken.source();
        return Api().get("/dacast-video?page=" + page + "&query_input=" + videoQueryInput + "&folder_wise_media=" + folderWiseMediaData, {
            cancelToken: ajaxRequest.token
        });
    },
    companyBioVideoList(page, slug, videoQueryInput) {

        // cancel  previous ajax if exists
        if (ajaxRequest) {
            ajaxRequest.cancel();
        }
        ajaxRequest = axios.CancelToken.source();
        return Api().get("/company-bio-video?page=" + page + "&slug=" + slug + "&query_input=" + videoQueryInput, {
            cancelToken: ajaxRequest.token
        });
    },
    videoDetails(videoId) {

        return Api().get("/get-video-info?video_id=" + videoId);
    },
    videoOthers(videoUuid) {

        return Api().get("/get-other-video-info?video_uuid=" + videoUuid);
    },
    audioDetails(audioUuid) {

        return Api().get("/get-audio-info?uuid=" + audioUuid);
    },
    audioOthers(audioUuid) {

        return Api().get("/get-other-audio-info?uuid=" + audioUuid);
    },
    deleteMediaFile(id) {

        return Api().delete("/delete-media-file/" + id, {params: {type: 'media'}});
    },
    changeMediaFileStatus(form) {

        return Api().post("/change-media-file-status", form);
    },
    companyBio(slug) {

        return Api().get("/company-bio?slug=" + slug);
    },
    companyContent(page, slug) {

        return Api().get("/chat-company-content?page=" + page + "&slug=" + slug);
    },
    updateFilFolder(data) {
        return Api().put("/update-file-folder", data);
    },
};
