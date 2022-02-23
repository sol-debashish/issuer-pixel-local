import Api from "./Api";

export default {
    register(form) {

    return Api().post("/register", form);
  },
   profileQuestionnaire(form, userInfo) {
    return Api().post("/store-questionnaire/" + userInfo, form);
  },
    addMultipleNodes(form) {
        return Api().post("add-multiple-node", form);
    },
    updateHierarchyNodes(form) {
        return Api().post("update-hierarchy-node", form);
    },
    addAudioVideoMultipleNodes(form) {
        return Api().post("add-audio-video-multiple-node", form);
    },
    updateAudioVideoNodes(form) {
        return Api().post("update-audio-video-node", form);
    },
    nodeSuggestion(form) {
        return Api().post("/suggestion-request", form);
    },
    skipAndGotoDashboard(form) {
        return Api().post("skip-and-go-dashboard", form);
    },

    login(form) {
        return Api().post("/login", form);
    },
    newsletter(form) {
        return Api().post("/newsletter", form);
    },
    contact(form) {
        return Api().post("/contact", form);
    },
    supportContact(form) {
        return Api().post("/support-contact", form);
    },

    forgot(form) {
        return Api().post("/password/email", form);
    },

    resetPassword(form) {

        return Api().post("/password/reset", form);
    },

    logout(form) {

        return Api().post("/logout", form);
    },

    backToAdmin(form) {
        return Api().post("/back-to-admin", form);
    },

    updateGeneralInformation(form) {
        return Api().put("/general-information", form);
    },

    updatePassword(form) {
        return Api().put("/update-password", form);
    },

    getCompanyInfo() {
        return Api().get("/profile-completed-status");
    },

    companyProfileImageUpload (form) {
        return Api().post("/company-photo-upload", form);
    },

    dashboardStatistics () {
        return Api().get("/dashboard-statistics");
    },

    dashboardNews () {
        return Api().get("/get-dashboard-news");
    },

    emailExistsCheck (form) {
        return Api().post("/email-exists-check", form);
    },

    companyNameExistsCheck (form) {
        return Api().post("/company-name-exists-check", form);
    },
    mediaSubjectSuggestion(form) {
        return Api().post("/media-subject-suggestion-request", form);
    },

    auth() {
        return Api().get("/user");
    },
    recentNotifications (time, total) {
        return Api().get('/recent-notifications/' + time + '/' + total);
    },

    notifications (total) {
        return Api().get('/notifications/' + total);
    },
    markAllAsRead (total) {
        return Api().get('/mark-all-as-read/' + total);
    },
    getBulletins (index) {
        return Api().get('/bulletins/' + index);
    },
    getGeneralInformation () {
        return Api().get('/general-information');
    },
    getCompanyIndustry () {
        return Api().get('/get-company-industries');
    },
    getCompanyNode () {
        return Api().get('/get-company-nodes');
    },
    getPersonalizedNews (name, type) {
        return Api().get('/get-personalized-news/' + name.replace(/[_\W]+/g, " ") + '/' + type);
    },

    sendInternalMessage(data) {
        return Api().post("send-internal-message", data);
    },

    getMessages(totalMessages, receiverCompanyId) {
        return Api().get('messages/' + totalMessages + '/' + receiverCompanyId);
    },

    markAllMessageAsRead(data) {
        return Api().post('mark-all-as-read', data);
    },

    getRecentMessages(latestMessageTime, totalMessages, receiverCompanyId) {
        return Api().get('recent-messages/' + latestMessageTime + '/' + totalMessages + '/' + receiverCompanyId);
    },

    getMessagesList(messageIndex, receiverCompanyId) {
        return Api().get('messages-list/' + messageIndex + '/' + receiverCompanyId);
    },

    getRecentMessagesList(messageIndex, latestMessageTime, receiverCompanyId) {
        return Api().get('recent-messages-list/' + messageIndex + '/' + latestMessageTime + '/' + receiverCompanyId);
    },

    updateReadStatus(data) {
        return Api().post('update-message-status', data);
    },
};
