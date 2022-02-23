<template>
    <section class="dashboard pt-0">
        <div class='row'>
            <div class='col-md-12 grid-margin'>
                <div class='card'>
                    <div class='card-body'>
                        <div class="row collapse show no-gutters d-flex h-100 position-relative">
                            <div class="col-lg-8">
                                <b-tabs
                                    active-nav-item-class="text-primary"
                                    active-tab-class=""
                                    class="customized-tab"
                                    content-class="mt-3">

                                    <b-tab title="Update Profile" :active="activeTab === 0">
                                        <GeneralSettings @logout="logout" @updateProfile="updateProfile"/>
                                    </b-tab>

                                    <b-tab title="Integrations" :active="activeTab === 1">
                                        <SocialIntegration/>
                                    </b-tab>

                                    <b-tab title="Change Password" :active="activeTab === 2">
                                        <PasswordSettings/>
                                    </b-tab>
                                </b-tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                activeTab: 0,
            };
        },
        methods: {
            logout: function () {
                this.$emit('logout')
            },
            updateProfile: function (data) {
                this.$emit('updateProfile', data)
            },
            goBackToPageTopAndNextFieldToEnter: function () {
                $(document).ready(function () {
                    $('input, select, textarea').on('keydown', function (e) {
                        if (e.keyCode == 13) {
                            var focusable = $('input, select, textarea').filter(':visible');
                            focusable.eq(focusable.index(this) + 1).focus();
                            return false;
                        }
                    });
                });
            },
        },
        created: function () {
            this.goBackToPageTopAndNextFieldToEnter()
        },
        mounted() {
            switch (this.$route.hash) {
                case '#profile':
                    this.activeTab = 0
                    break;
                case '#integrations':
                    this.activeTab = 1
                    break;
                case '#password':
                    this.activeTab = 2
                    break;
            }
        },
        components: {
            GeneralSettings: () => import("../components/settings/GeneralSettings"),
            PasswordSettings: () => import("../components/settings/PasswordSettings"),
            SocialIntegration: () => import("../components/settings/SocialIntegration"),
        }
    }
</script>
