<template>
    <section class="dashboard pt-0">
        <div class="container-fluid px-0 for-profile-banner-padding">
            <div class="row collapse show no-gutters d-flex h-100 position-relative">
                <div class="col">
                    <h4 class="mb-3 text-theme-dark-blue">Personalized News - Node + Location</h4>
                    <div class="media-categorization-scroll-tab mx-auto">
                        <div class="px-4">
                            <div class="position-relative">
                <span class="position-absolute tab-navigation-left-icons" @click.prevent="navigateTabScrollOnLeft">
                    <i class="fas fa-chevron-left"></i>
                </span>
                                <span class="position-absolute tab-navigation-right-icons"
                                      @click.prevent="navigateTabScrollOnRight">
                    <i class="fas fa-chevron-right"></i>
                </span>
                            </div>
                            <b-tabs v-model="tabIndex"
                                    active-nav-item-class="text-primary"
                                    active-tab-class=""
                                    class="personalized-news-customized-tab"
                                    content-class="mt-3">
                                <template v-for="(node,index) in allNodes">
                                    <b-tab @click="loadTabContent(node.description,index)"
                                           :active="activeTab === index">
                                        <template #title>
                                            {{node.description}}
                                        </template>
                                        <PersonalizedNewsTabContent v-bind:searchDesc="node.description"
                                                                    v-bind:index="index"
                                                                    v-bind:newsType="newsType"
                                                                    ref="node"></PersonalizedNewsTabContent>
                                    </b-tab>
                                </template>
                            </b-tabs>
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
    import PersonalizedNewsTabContent from "../components/PersonalizedNewsTabContent";
    import User from "../apis/User";

    export default {
        name: "PersonalizedNewsNode",
        data() {
            return {
                isLoading: false,
                tabIndex: 1,
                activeTab: 0,
                allNodes: [],
                newsType: 'node'
            }
        },
        methods: {
            loadTabContent: function (name, index) {
                this.activeTab = index;
                this.$refs.node[index].getPersonalizedNewsData(name);
            },
            getCompanyNodesData: function () {
                User.getCompanyNode()
                    .then((response) => {
                        this.allNodes = response.data.data;
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
            navigateTabScrollOnLeft: function () {
                let content = document.querySelector(".nav-tabs");
                content.scrollLeft -= 150;
            },
            navigateTabScrollOnRight: function () {
                let content = document.querySelector(".nav-tabs");
                content.scrollLeft += 150;
            },
        },
        created: async function () {
            this.isLoading = true
            this.getCompanyNodesData();
        },
        components: {
            loader,
            PersonalizedNewsTabContent,
        }
    };
</script>

<style scoped>

</style>
