<template>
    <section class="dashboard pt-0">
        <div class="container-fluid px-0 for-profile-banner-padding">
            <div class="row collapse show no-gutters d-flex h-100 position-relative">
                <div class="col">
                    <a href="javascript:;" @click="backToPrevious" class="mb-2 d-block">Back</a>
                    <h4 class="mb-3 text-theme-dark-blue">Bulletin Board</h4>
                    <div class="row accordion" role="tablist">
                        <div class="col-md-12" v-for="(bulletin, index) in bulletins">
                            <div class="bulletin-container mb-2">
                                <div class="mb-2 text-theme-dark-blue">
                                    <b>{{bulletin.title}}</b>
                                    <span class="float-right fs-12">{{bulletin.createdAt}}</span>
                                </div>
                                <b-collapse :id="'long-description-' + index" :visible="bulletin.bulletinVisibility" accordion="my-accordion" role="tabpanel">
                                    <p class="mb-2 fs-14">{{bulletin.longDescription}}</p>
                                </b-collapse>
                                <p v-if="setVisibility(index)" class="mb-2" :id="'short-description-' + index">{{bulletin.shortDescription}}</p>
                                <div role="tab">
                                    <span v-b-toggle="'long-description-' + index" class="text-blue fs-12">
                                        <span v-if="bulletin.isLong">
                                            <span class="bulletin-open" @click="showShortDescription(index)">Hide...</span>
                                            <span class="bulletin-closed" @click="hideShortDescription(index)">See More...</span>
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
        name: "Bulletins",
        data() {
            return {
                isLoading: false,
                bulletinIndex: this.$route.params.index,
                prevIndex: this.$route.params.index,
                bulletins: [],
                visibilityFlag: 0
            }
        },
        methods: {
            getBulletins: function () {
                User.getBulletins(this.bulletinIndex)
                    .then((response) => {
                        this.bulletins = response.data.data.bulletins;
                        this.isLoading = false;
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
                if(index == this.bulletinIndex && this.visibilityFlag == 0) {
                    return false;
                }
                return true;
            },
            backToPrevious: function () {
                history.back();
            }
        },
        created: function () {
            this.isLoading = true
            this.getBulletins();
        },
        components: {
            loader
        }
    };
</script>

<style scoped>
    .bulletin-container {
        padding: 10px;
        position: relative;
        overflow: hidden;
        background: #fff;
        width: 100%;
        border: 1px solid #dadce0;
        border-radius: 8px;
        min-height: 100px;
    }

    .collapsed > span > .bulletin-open,
    .not-collapsed > span > .bulletin-closed {
        display: none;
    }

    .text-blue {
        color: #127db9;
    }
</style>
