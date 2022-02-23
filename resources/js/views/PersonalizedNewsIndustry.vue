<template>
    <section class="dashboard pt-0">
        <div class="container-fluid px-0 for-profile-banner-padding">
            <div class="row collapse show no-gutters d-flex h-100 position-relative">
                <div class="col">
                    <h4 class="mb-3 text-theme-dark-blue">Personalized News - Industry + Location</h4>
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
                                <template v-for="(industry,index) in allIndustries">
                                    <b-tab @click="loadTabContent(industry.description,index)"
                                           :active="activeTab === index">
                                        <template #title>
                                            {{industry.description}}
                                        </template>
                                        <PersonalizedNewsTabContent v-bind:searchDesc="industry.description"
                                                                    v-bind:index="index"
                                                                    v-bind:newsType="newsType"
                                                                    ref="industry"></PersonalizedNewsTabContent>
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
        name: "PersonalizedNewsIndustry",
        data() {
            return {
                isLoading: false,
                tabIndex: 1,
                activeTab: 0,
                allIndustries: [],
                newsType: 'industry'
            }
        },
        methods: {
            loadTabContent: function (name, index) {
                this.activeTab = index;
                this.$refs.industry[index].getPersonalizedNewsData(name);
            },
            getCompanyIndustriesData: function () {
                User.getCompanyIndustry()
                    .then((response) => {
                        this.allIndustries = response.data.data;
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
            this.getCompanyIndustriesData();
        },
        components: {
            loader,
            PersonalizedNewsTabContent,
        }
    };
</script>

<style scoped>

</style>
