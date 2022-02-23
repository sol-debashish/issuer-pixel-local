<template>
    <div>
        <h4 class="text-theme-dark-blue mb-4">Social Analytics</h4>
        <section class='dashboard pt-0'>
            <div class="row">
                <div class="col-md-12">
                    <div class="position-relative">
                        <b-tabs class="content-customized-tab">
                            <b-tab title="Twitter" @click="loadTabContent('twitter')" :active="activeTab === 0">
                                <b-card-text>
                                    <div class="table-responsive">
                                        <div class="loader" v-if="contentLoading"></div>
                                        <table class="table issuer-content-table">
                                            <thead>
                                                <tr class="text-center">
                                                    <th>Content Type</th>
                                                    <th>Content Name</th>
                                                    <th>Upload Date</th>
                                                    <th>Shared Date</th>
                                                    <th>Metrics Data</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(data, index) in twitterData">
                                                    <td class="text-center">{{ data.media_type }}</td>
                                                    <td class="text-center">{{ data.name }}</td>
                                                    <td class="text-center">{{ data.publication_date }}</td>
                                                    <td class="text-center">{{ data.share_date }}</td>
                                                    <td v-if="data.retweets === null && data.quote_tweets === null && data.likes === null && data.replies === null" class="text-center">No metrics found</td>
                                                    <td v-else class="text-center">
                                                        <ul class="list-unstyled">
                                                            <li v-if="data.retweets !== null">Retweets: {{ data.retweets }}</li>
                                                            <li v-if="data.quote_tweets !== null">Quotes: {{ data.quote_tweets }}</li>
                                                            <li v-if="data.likes !== null">Likes: {{ data.likes }}</li>
                                                            <li v-if="data.replies !== null">Replies: {{ data.replies }}</li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr v-if="! twitterData.length">
                                                    <td colspan="5" class="text-center">No data found</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="10">
                                                        <pagination v-if="twitterPagination.last_page > 1"
                                                            :pagination="twitterPagination"
                                                            :offset="5"
                                                            @paginate="getTwitterMetricsDataList()"></pagination>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="Facebook" @click="loadTabContent('facebook')" :active="activeTab === 1">
                                <b-card-text>
                                    <div class="table-responsive">
                                        <div class="loader" v-if="contentLoading"></div>
                                        <table class="table issuer-content-table">
                                            <thead>
                                                <tr class="text-center">
                                                    <th>Content Type</th>
                                                    <th>Content Name</th>
                                                    <th>Upload Date</th>
                                                    <th>Shared Date</th>
                                                    <th>Metrics Data</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(data, index) in facebookData">
                                                    <td class="text-center">{{ data.media_type }}</td>
                                                    <td class="text-center">{{ data.name }}</td>
                                                    <td class="text-center">{{ data.publication_date }}</td>
                                                    <td class="text-center">{{ data.share_date }}</td>
                                                    <td v-if="data.likes === null && data.comments === null && data.shares === null" class="text-center">No metrics found</td>
                                                    <td v-else class="text-center">
                                                        <ul class="list-unstyled">
                                                            <li v-if="data.likes !== null">Likes: {{ data.likes }}</li>
                                                            <li v-if="data.comments !== null">Comments: {{ data.comments }}</li>
                                                            <li v-if="data.shares !== null">Shares: {{ data.shares }}</li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr v-if="! facebookData.length">
                                                    <td colspan="5" class="text-center">No data found</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="10">
                                                        <pagination v-if="facebookPagination.last_page > 1"
                                                            :pagination="facebookPagination"
                                                            :offset="5"
                                                            @paginate="getFacebookMetricsDataList()"></pagination>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </b-card-text>
                            </b-tab>
                            <b-tab title="LinkedIn" @click="loadTabContent('linkedin')" :active="activeTab === 2">
                                <b-card-text>
                                    <div class="table-responsive">
                                        <div class="loader" v-if="contentLoading"></div>
                                        <table class="table issuer-content-table">
                                            <thead>
                                                <tr class="text-center">
                                                    <th>Content Type</th>
                                                    <th>Content Name</th>
                                                    <th>Upload Date</th>
                                                    <th>Shared Date</th>
                                                    <th>Metrics Data</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(data, index) in linkedinData">
                                                    <td class="text-center">{{ data.media_type }}</td>
                                                    <td class="text-center">{{ data.name }}</td>
                                                    <td class="text-center">{{ data.publication_date }}</td>
                                                    <td class="text-center">{{ data.share_date }}</td>
                                                    <td v-if="data.clicks === null && data.comments === null && data.engagement === null && data.impressions === null && data.likes === null && data.shares === null" class="text-center">No metrics found</td>
                                                    <td v-else class="text-center">
                                                        <ul class="list-unstyled">
                                                            <li v-if="data.clicks !== null">Clicks: {{ data.clicks }}</li>
                                                            <li v-if="data.comments !== null">Comments: {{ data.comments }}</li>
                                                            <li v-if="data.engagement !== null">Engagement: {{ data.engagement }}</li>
                                                            <li v-if="data.impressions !== null">Impressions: {{ data.impressions }}</li>
                                                            <li v-if="data.likes !== null">Likes: {{ data.likes }}</li>
                                                            <li v-if="data.shares !== null">Shares: {{ data.shares }}</li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr v-if="! linkedinData.length">
                                                    <td colspan="5" class="text-center">No data found</td>
                                                </tr>
                                                <tr>
                                                    <td colspan="10">
                                                        <pagination v-if="linkedinPagination.last_page > 1"
                                                            :pagination="linkedinPagination"
                                                            :offset="5"
                                                            @paginate="getLinkedinMetricsDataList()"></pagination>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </b-card-text>
                            </b-tab>
                        </b-tabs>
                    </div>
                </div>
            </div>
            <loader :is-visible="isLoading"></loader>
        </section>
    </div>
</template>

<script>
    import Social from "../apis/Social";

    export default {
        data() {
            return {
                isLoading: false,
                activeTab: 0,
                contentLoading: false,
                twitterTabContentLoaded: false,
                twitterData: [],
                twitterPagination: {
                    'current_page': 1
                },
                facebookTabContentLoaded: false,
                facebookData: [],
                facebookPagination: {
                    'current_page': 1
                },
                linkedinTabContentLoaded: false,
                linkedinData: [],
                linkedinPagination: {
                    'current_page': 1
                }
            };
        },
        methods: {
            loadTabContent: function (type) {
                switch (type) {
                    case 'twitter':
                        if (!this.twitterTabContentLoaded) {
                            this.getTwitterMetricsDataList();
                            this.twitterTabContentLoaded = true
                        }
                        this.activeTab = 0
                        break;
                    case 'facebook':
                        if (!this.facebookTabContentLoaded) {
                            this.getFacebookMetricsDataList();
                            this.facebookTabContentLoaded = true
                        }
                        this.activeTab = 1
                        break;
                    case 'linkedin':
                        if (!this.linkedinTabContentLoaded) {
                            this.getLinkedinMetricsDataList();
                            this.linkedinTabContentLoaded = true
                        }
                        this.activeTab = 2
                        break;
                }
            },
            getTwitterMetricsDataList: function () {
                if(!this.isLoading) {
                    this.contentLoading = true
                }
                Social.getTwitterMetrics(this.twitterPagination.current_page)
                    .then((response) => {
                        this.isLoading = false
                        this.contentLoading = false
                        this.twitterData = response.data.data.data.data;
                        this.twitterPagination = response.data.data.pagination;
                    })
                    .catch(error => {
                        if (!!error.response) {
                            this.isLoading = false
                            this.contentLoading = false
                            if (error.response.status == 401) {
                                this.$emit('logout')
                            }
                        }
                    });
            },
            getFacebookMetricsDataList: function () {
                if(!this.isLoading) {
                    this.contentLoading = true
                }
                Social.getFacebookMetrics(this.facebookPagination.current_page)
                    .then((response) => {
                        this.isLoading = false
                        this.contentLoading = false
                        this.facebookData = response.data.data.data.data;
                        this.facebookPagination = response.data.data.pagination;
                    })
                    .catch(error => {
                        if (!!error.response) {
                            this.isLoading = false
                            this.contentLoading = false
                            if (error.response.status == 401) {
                                this.$emit('logout')
                            }
                        }
                    });
            },
            getLinkedinMetricsDataList: function () {
                if(!this.isLoading) {
                    this.contentLoading = true
                }
                Social.getLinkedinMetrics(this.linkedinPagination.current_page)
                    .then((response) => {
                        this.isLoading = false
                        this.contentLoading = false
                        this.linkedinData = response.data.data.data.data;
                        this.linkedinPagination = response.data.data.pagination;
                    })
                    .catch(error => {
                        if (!!error.response) {
                            this.isLoading = false
                            this.contentLoading = false
                            if (error.response.status == 401) {
                                this.$emit('logout')
                            }
                        }
                    });
            }
        },
        mounted() {
            switch (this.$route.hash) {
                case '#twitter':
                    this.activeTab = 0
                    break;
                case '#facebook':
                    this.activeTab = 1
                    break;
                case '#linkedin':
                    this.activeTab = 2
                    break;
            }
        },
        created: function () {
            this.isLoading = true
            this.getTwitterMetricsDataList();
        },
        components: {
            loader: () => import("../components/Loader"),
            pagination: () => import("../components/PaginationComponent"),
        }
    };
</script>
<style scoped>
    .loader { /* Loader Div Class */
        position: absolute;
        top: 0px;
        right: 0px;
        width: 100%;
        height: 100%;
        background-color: #eceaea;
        background-image: url(/images/small-loader.gif);
        background-size: 50px;
        background-repeat: no-repeat;
        background-position: center;
        z-index: 10000000;
        opacity: 0.4;
        filter: alpha(opacity=40);
    }
</style>
