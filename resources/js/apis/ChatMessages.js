import Api from "./Api";

let ajaxRequest = null;
export default {

    latestMessage(page, query) {
        if (ajaxRequest) {
            ajaxRequest.cancel();
        }
        ajaxRequest = axios.CancelToken.source();
        return Api().get("/chat-messages?page=" + page + "&query_input=" + query, {
            cancelToken: ajaxRequest.token
        });
    },
    memberList(query, memberIds) {
        if (ajaxRequest) {
            ajaxRequest.cancel();
        }
        ajaxRequest = axios.CancelToken.source();
        return Api().get("/chat-member-list?query_input=" + query + "&memberIds=" + memberIds, {
            cancelToken: ajaxRequest.token
        });
    },
    updateUserMessageStatus (fromUserId) {
        return Api().get('/update-user-message-status?fromUserId=' + fromUserId);
    },
    chatMemberInfo (userId) {
        return Api().get('/chat-member-info?userId=' + userId);
    },
    update (data) {
        return Api().post('/update-message', data);
    },
    delete (data) {
        return Api().post('/delete-message', data);
    },
};
