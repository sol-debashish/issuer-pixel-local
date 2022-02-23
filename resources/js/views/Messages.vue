<template>
    <section class="dashboard pt-0">
        <div class="container-fluid px-0 for-profile-banner-padding">
            <div class="row collapse show no-gutters d-flex h-100 position-relative">
                <div class="col">
                    <a href="javascript:;" @click="backToPrevious" class="mb-2 d-block">Back</a>
                    <h4 class="mb-3 text-theme-dark-blue">Internal Messages</h4>
                    <div class="row accordion" role="tablist">
                        <div class="col-md-12" v-for="(message, index) in messages">
                            <div class="message-container mb-2">
                                <div class="mb-2 text-theme-dark-blue">
                                    <b>{{ message.sender.name }}</b>
                                    <span class="float-right fs-12">{{message.createdAt}}</span>
                                </div>
                                <b-collapse :id="'long-description-' + index" :visible="message.messageVisibility" accordion="my-accordion" role="tabpanel">
                                    <p class="mb-2 fs-14">{{message.longDescription}}</p>
                                </b-collapse>
                                <p v-if="setVisibility(index)" class="mb-2" :id="'short-description-' + index">{{message.shortDescription}}<span v-if="message.isLong">...</span></p>
                                <div role="tab">
                                    <span v-b-toggle="'long-description-' + index" class="text-blue fs-12">
                                        <span v-if="message.isLong">
                                            <span class="message-open" @click="showShortDescription(index)">Hide...</span>
                                            <span class="message-closed" @click="hideShortDescription(index)">See More...</span>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <loader :is-visible="isLoading"></loader>
    </section>
</template>

<script>
    import loader from '../components/Loader'
    import User from "../apis/User";

    export default {
        name: "Messages",
        data() {
            return {
                isLoading: false,
                messages: [],
                latestMessageTime: null,
                messageTimer: null,
                receiverCompanyId: '',
                messageIndex: this.$route.params.index,
                prevIndex: this.$route.params.index,
                visibilityFlag: 0
            }
        },
        methods: {
            getMessagesList: function () {
                User.getMessagesList(this.messageIndex, this.receiverCompanyId)
                    .then((response) => {
                        this.isLoading = false;
                        this.latestMessageTime = response.data.data.latestMessageTime;
                        this.messages = response.data.data.messages;
                    })
                    .catch(error => {
                        this.isLoading = false
                        if (error.response.status == 401) {
                            this.$emit('logout')
                        } else {
                            toastr.error(error)
                        }
                    });
            },
            getRecentMessagesList: function () {
                User.getRecentMessagesList(this.prevIndex, this.latestMessageTime, this.receiverCompanyId)
                    .then((response) => {
                        this.latestMessageTime = response.data.data.latestMessageTime;
                        if(response.data.data.messages.length) {
                            this.messages = [];
                            this.visibilityFlag = 0;
                            this.messageIndex = response.data.data.messageIndex;
                            this.prevIndex = response.data.data.messageIndex;
                            this.messages = response.data.data.messages;

                            if(this.messageIndex != 0) {
                                let index = this.messageIndex - 1;
                                $('#short-description-' + index).show();
                            }
                        }
                    })
                    .catch((error) => {
                        this.isLoading = false;
                        if (error.response.status == 401) {
                            this.$emit("logout");
                        }
                    });
            },
            hideShortDescription: function (index) {
                this.setVisibilityFlag();
                if(index != this.prevIndex) {
                    this.showShortDescription(this.prevIndex);
                }
                $('#short-description-' + index).hide();
                this.prevIndex = index;
            },
            showShortDescription: function (index) {
                this.setVisibilityFlag();
                $('#short-description-' + index).show();
            },
            setVisibilityFlag() {
                if(this.visibilityFlag == 0) {
                    this.visibilityFlag = 1;
                }
            },
            setVisibility(index) {
                if(index == this.messageIndex && this.visibilityFlag == 0) {
                    return false;
                }
                return true;
            },
            backToPrevious: function () {
                history.back();
            }
        },
        created: function () {
            this.isLoading = true;
            this.receiverCompanyId = JSON.parse(localStorage.getItem("info")).company_id;
            this.getMessagesList();

            this.messageTimer = setInterval(() => {
                this.getRecentMessagesList();
            }, 30000);
        },
        beforeDestroy() {
            clearInterval(this.messageTimer);
        },
        components: {
            loader
        }
    };
</script>

<style scoped>
    .message-container {
        padding: 10px;
        position: relative;
        overflow: hidden;
        background: #fff;
        width: 100%;
        border: 1px solid #dadce0;
        border-radius: 8px;
        min-height: 100px;
    }

    .collapsed > span > .message-open,
    .not-collapsed > span > .message-closed {
        display: none;
    }

    .text-blue {
        color: #127db9;
    }
</style>
