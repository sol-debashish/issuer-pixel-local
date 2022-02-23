import Api from "./Api";

export default {
    countries() {
        return Api().get("/country-list");
    },
    states(countryId) {
        return Api().get('/get-state-list/' + countryId);
    },
    getStatesOrProvinceStatus(value) {
        return Api().get('/get-state-or-province-status/' + value);
    }
};

