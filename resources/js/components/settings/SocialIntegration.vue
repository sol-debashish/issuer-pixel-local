<template>
    <div class="container-fluid px-0">
        <div class="row collapse show no-gutters d-flex h-100 position-relative">
            <div class="col-md-10 offset-md-2">
                <h4 class="py-3 settings-title-text">Integrations</h4>

                <div class="row">
                    <div class="col-md-3 mb-2">
                        <a href="javascript:;"  @click.prevent="logInWithFacebook">
                            <div class='card'>
                                <div class='card-body text-center social-container'>
                                    <div v-if="fbIntegrated" class="social-active-icon"><img src="/images/icons/check-circle.png"/></div>
                                    <img class="social-img" src="/images/icons/facebook.png"/>
                                    <div class="social-title">
                                        Facebook
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-3 mb-2">
                        <a href="javascript:;"  @click.prevent="logInWithLinkedin">
                            <div class='card'>
                                <div class='card-body text-center social-container'>
                                    <div v-if="linkedinIntegrated" class="social-active-icon"><img src="/images/icons/check-circle.png"/></div>
                                    <img class="social-img" src="/images/icons/linkedin.png"/>
                                    <div class="social-title">
                                        LinkedIn
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="col-md-3 mb-2">
                        <a href="javascript:;" @click.prevent="logInWithTwitter">
                            <div class='card'>
                                <div class='card-body text-center social-container'>
                                    <div v-if="twitterIntegrated" class="social-active-icon"><img src="/images/icons/check-circle.png"/></div>
                                    <img class="social-img" src="/images/icons/twitter.png"/>
                                    <div class="social-title">
                                        Twitter
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <loader :is-visible="isLoading"></loader>
    </div>
</template>

<script>
    import Social from '../../apis/Social'

    export default {
        data() {
            return {
                fbIntegrated: false,
                linkedinIntegrated: false,
                twitterIntegrated: false,
                isLoading: false,
                isDisabled: false,
                twitterDisabled: false,
            };
        },
        methods: {
            getSocialIntegratedList: function () {
                Social.getSocialIntegratedList()
                    .then(response => {
                        this.isLoading = false
                        Object.keys(response.data.data).map((key) => {
                            if('facebook' == key){
                                this.fbIntegrated = true
                            }
                            if('linkedin' == key){
                                this.linkedinIntegrated = true
                            }
                            if('twitter' == key){
                                this.twitterIntegrated = true
                            }
                        })
                    })
                    .catch(error => {
                        this.isLoading = false
                    });
            },
            async logInWithFacebook() {
                if(! this.fbIntegrated) {
                    this.isDisabled = true;
                    await this.loadFacebookSDK(document, "script", "facebook-jssdk");
                    await this.initFacebook();
                }
            },
            logInWithLinkedin() {
                if(! this.linkedinIntegrated) {
                    var state = document.querySelector('meta[name="csrf-token"]').content;
                    window.location = "https://www.linkedin.com/oauth/v2/authorization?state=" + state + "&response_type=code&client_id=" + process.env.MIX_LINKEDIN_CLIENT_ID + "&redirect_uri=" + document.location.origin + "/linkedin/callback&scope=r_emailaddress,r_liteprofile,w_member_social";
                }
            },
            logInWithTwitter() {
                if(! this.twitterIntegrated && !this.twitterDisabled) {
                    this.twitterDisabled = true;
                    Social.addTwitterInfo()
                        .then((response) => {
                            if (response.data.data.twitter_update) {
                                window.location = response.data.data.url;
                            }
                        })
                        .catch(error => {
                            toastr.error(error);
                            this.twitterDisabled = false;
                        });
                }
            },
            async initFacebook() {
                var vi = this;
                window.fbAsyncInit = function () {
                    window.FB.init({
                        appId: process.env.MIX_FACEBOOK_APP_ID, //You will need to change this
                        cookie: true, // This is important, it's not enabled by default
                        version: "v13.0",
                        channelUrl: process.env.APP_URL
                    });
                    window.FB.login(function (response){

                        //if (response.status === 'connected') {
                        //    console.log("You are already loggedin to facebook");
                        //} else {
                        if (response.authResponse) {
                            Social.setFbAccessToken({'facebook_access_token':response.authResponse.accessToken})
                                .then((response) => {
                                    let isFbTokenUpdated = response.data.data.facebook_token_update;
                                    if(isFbTokenUpdated){
                                        vi.fbIntegrated = true;
                                        toastr.success(response.data.data.message);
                                        vi.isDisabled = false;
                                    }
                                })
                                .catch(error => {
                                    toastr.error(error);
                                    vi.isDisabled = false;
                                });

                        } else {
                            console.log("unauthenticated or cancel");
                        }
                        //}
                    }, {scope: 'email,pages_read_engagement,pages_manage_posts,pages_show_list'});
                };
            },
            async loadFacebookSDK(d, s, id) {
                var js,
                    fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {
                    return;
                }
                js = d.createElement(s);
                js.id = id;
                js.src = "https://connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            },
        },
        created: function () {
            this.isLoading = true
            this.getSocialIntegratedList()
        },
        components: {
            loader: () => import("../Loader")
        },
    }
</script>
