import Api from "./Api";

let ajaxRequest = null;
export default {
    setFbAccessToken(data) {
        return Api().post("/set-fb-access-token", data);
    },
    addLinkedinInfo(data) {
        return Api().post("/linkedin-info", data);
    },
    addTwitterInfo(data) {
        return Api().post("/twitter-info", data);
    },
    sharing(data) {
        return Api().post("/social-sharing", data);
    },
    getTwitterMetrics(page) {
        // cancel  previous ajax if exists
        if (ajaxRequest) {
            ajaxRequest.cancel();
        }
        ajaxRequest = axios.CancelToken.source();
        return Api().get("/get-twitter-metrics-data?page=" + page, {
            cancelToken: ajaxRequest.token
        });
    },
    getFacebookMetrics(page) {
        // cancel  previous ajax if exists
        if (ajaxRequest) {
            ajaxRequest.cancel();
        }
        ajaxRequest = axios.CancelToken.source();
        return Api().get("/get-facebook-metrics-data?page=" + page, {
            cancelToken: ajaxRequest.token
        });
    },
    getLinkedinMetrics(page) {
        // cancel  previous ajax if exists
        if (ajaxRequest) {
            ajaxRequest.cancel();
        }
        ajaxRequest = axios.CancelToken.source();
        return Api().get("/get-linkedin-metrics-data?page=" + page, {
            cancelToken: ajaxRequest.token
        });
    },
    getSocialIntegratedList() {
        return Api().get("/get-social-integrated-list");
    },
};
