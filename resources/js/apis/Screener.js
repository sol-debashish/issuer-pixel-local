import Api from "./Api";

let ajaxRequest = null;
export default {

    async newScreenerData(params) {
        if (ajaxRequest) {
            ajaxRequest.cancel();
        }
        ajaxRequest = axios.CancelToken.source();
        return Api().get("/new-screener-data", {
            params: params,
            cancelToken: ajaxRequest.token,
        });
    },
};
