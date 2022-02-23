import Api from "./Api";

export default {
    uploadAudio(form, config) {

        return Api().post("/audio-questionnaire", form, config);
    },

    videoFormValidate(form) {

        return Api().post("/video-form-validate", form);
    },
    taxonomyDataStore(form) {

        return Api().post("/taxonomy-data-store", form);
    },
    /*Video questionnaires Step 1 Data edit and Update*/
    getStep1VideoData(id) {
        return Api().get(`/video-step1/${id}/edit`);
    },
    saveStep1VideoData(form, id) {

        return Api().put(`/video-step1/${id}`, form);
    },
    /*Video questionnaires Step 2 Data edit and Update*/
    getStep2VideoData(id) {
        return Api().get(`/dacast-video-step2/${id}/edit`);
    },
    saveStep2VideoData(form, id) {

        return Api().put(`/dacast-video-step2/${id}`, form);
    },
    updateVideoInfoData(form, id) {

        return Api().put(`/update-video-info/${id}`, form);
    },
    updateAudioInfoData(form, id) {

        return Api().put(`/update-audio-info/${id}`, form);
    },
    /*Audio questionnaires Step 1 Data edit and Update*/
    getStep1AudioData(id) {
        return Api().get(`/audio-step1/${id}/edit`);
    },

    saveStep1AudioData(form, id) {

        return Api().put(`/audio-step1/${id}`, form);
    },
    /*Audio questionnaires Step 2 Data edit and Update*/
    getStep2AudioData(id) {
        return Api().get(`/audio-step2/${id}/edit`);
    },

    saveStep2AudioData(form, id) {

        return Api().put(`/audio-step2/${id}`, form);
    },

    updateCompanyQuestionnaireData(form, id) {

        return Api().put(`/company-questionnaire-data/${id}`, form);
    },

    leadershipAndGovernenceFormData(form, id) {

        return Api().post(`/company-questionnaire-data/${id}`, form);
    },

    updateLeadershipAndGovernenceFormData(form, id) {

        return Api().post(`/company-questionnaire-data/${id}`, form);
    },
    updateMediaFormData(form) {

        return Api().post("/update-media-form-data", form);
    },
    companyIconUpload (form) {

        return Api().post("/company-icon-upload", form);
    },
    deleteLagMember(id) {

        return Api().delete("/delete-lag-member/" + id, {params: {type: 'member'}});
    },
    getCompanyQuestionnaireData(id) {
        return Api().get(`/company-questionnaire-data/${id}/edit`);
    },
    getSocialMediaPlatformData() {
        return Api().get(`/social-media-platform`);
    },
    getLeadershipAndGovernanceRoles(roleType) {
        return Api().get('/leadership-and-goverrance-roles?roleType=' + roleType);
    },
};
