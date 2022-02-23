import Api from "./Api";

let ajaxRequest = null;
export default {
    saveSearchHistory(data) {
        return Api().post('/save-search-history', data);
    },
    getSearchHistories() {
        return Api().get('/search-histories');
    },
    deleteSearchHistory(id) {
        return Api().delete('/delete-search-history/' + id);
    },
};
