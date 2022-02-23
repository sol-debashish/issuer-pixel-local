<template>
    <div class="row">
        <div class="col-md-12" v-for="news in allNews">
            <div class="news-container mb-2">
                <div class="d-flex mb-2">
                    <a :href="news.link" target="_blank">{{news.title}}</a>
                    <img v-if="news.imageUrl" :src="news.imageUrl" class="ml-auto rounded-lg" height="60" width="100">
                </div>
                <div>
                    <span>{{news.source}}</span>
                    <span class="float-right">Released on {{news.pubDate}}</span>
                </div>
            </div>
        </div>
        <loader :is-visible="isLoading"></loader>
    </div>
</template>

<script>
    import loader from './Loader'
    import User from "../apis/User";

    export default {
        name: "PersonalizedNewsTabContent",
        props: ["searchDesc", "index", "newsType"],
        data() {
            return {
                isLoading: false,
                allNews: []
            }
        },
        methods: {
            getPersonalizedNewsData: function (Name) {
                this.isLoading = true;
                User.getPersonalizedNews(Name, this.newsType)
                    .then((response) => {
                        this.allNews = response.data.data.allNews;
                        this.isLoading = false
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
        },
        created: async function () {
            //this.isLoading = true
            if (this.index == 0) {
                this.getPersonalizedNewsData(this.searchDesc);
            }
        },
        components: {
            loader
        }
    }
</script>

<style scoped>
    .news-container {
        padding: 10px;
        position: relative;
        overflow: hidden;
        background: #fff;
        width: 100%;
        border: 1px solid #dadce0;
        border-radius: 8px;
        min-height: 100px;
    }
</style>
