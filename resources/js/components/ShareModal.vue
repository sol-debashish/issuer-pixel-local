<template>
    <div>
        <ul class="list-unstyled share-choose-icon text-center">
            <li class="d-inline-block px-2">
                <a href="javascript:;" @click.prevent="showOneClickShareOptions">
                    <i class="fas fa-vector-square  rounded-circle modal-share-icon" :class="allShare"></i>
                    <div class="pt-1" :class="allShare">One Click Share</div>
                </a>
            </li>

            <li class="d-inline-block px-2">
                <a href="javascript:;" @click.prevent="showShareOptions">
                    <i class="fa fa-share-alt rounded-circle modal-share-icon" :class="traditionalShare"></i>
                    <div class="pt-1" :class="traditionalShare">Share</div>
                </a>
            </li>
        </ul>
        <div v-if="oneClickShareOptionsContainer" class="share-container">
            <input type="checkbox" v-model="ischeckAllSocial" @click='checkAllSocial()' />  Select All
            <ul class="list-unstyled">
                <li class="d-inline-block px-3"  v-for="shareType in shareTypes">
                    <img class="social-img d-block" :src="'/images/icons/'+ shareType.icon +'.png'" />
                    <input type="checkbox" :value="shareType.name" v-model="oneClickShareData" @change='updateCheckAllSocial()' />
                    <div class="social-title">
                        {{shareType.name}}
                    </div>
                </li>
            </ul>
            <div class="col-sm-12 form-group mb-1">
                        <textarea class="form-control"
                                  placeholder="Description"
                                  :maxlength=totalCharacter rows="3" v-model="oneClickMessage" @keyup='charCount()'></textarea>
                <span class="color-red text-left">{{shareSuccessMessage}}</span>
            </div>
            <div class="text-right col-sm-12 form-group">
                {{ remainCharacter }} characters
            </div>
            <div>
                <b-button type="submit" class="btn btn-back-next" @click.prevent="submitOneClickShare" :disabled='isDisabled'>
                    {{isSharing ? "Sharing..." : "Share now"}}
                </b-button>
            </div>
        </div>
        <div v-if="shareOptionsContainer" class="share-container">
            <p class="text-center">Share</p>
            <ul class="list-unstyled">
                <li class="d-inline-block  px-3">
                    <a href="javascript:;" @click.prevent="openWindow('Facebook','https://www.facebook.com/sharer/sharer.php?app_id='+fbAppId+'&sdk=gd&u='+ publicShareLink +'/&display=popup&ref=plugin&src=share_button')">
                        <img class="social-img" src="/images/icons/facebook.png"/>
                        <div class="social-title">
                            Facebook
                        </div>
                    </a>
                </li>
                <li class="d-inline-block  px-3">
                    <a href="javascript:;"  @click.prevent="openWindow('LinkedIn','https://www.linkedin.com/sharing/share-offsite/?url='+ publicShareLink)">
                        <img class="social-img" src="/images/icons/linkedin.png"/>
                        <div class="social-title">
                            LinkedIn
                        </div>
                    </a>

                </li>
                <li class="d-inline-block px-3">
                    <a href="javascript:;" @click.prevent="openWindow('Twitter','https://twitter.com/intent/tweet?url='+ publicShareLink)">
                        <img class="social-img" src="/images/icons/twitter.png"/>
                        <div class="social-title">
                            Twitter
                        </div>
                    </a>

                </li>
            </ul>
            <b-input-group>
                <b-form-input v-model="publicShareLink" class="shared-link" ref="sharedLink"
                              readonly></b-form-input>
                <b-input-group-append>
                    <b-button size="sm" variant="outline-primary" @click.prevent="copyShareLink"
                              class="font-weight-bold shared-link-copy-btn">Copy
                    </b-button>
                </b-input-group-append>
            </b-input-group>
            <small class="font-weight-bold text-success mb-0" v-if="isCopied">Copied!</small>
        </div>
    </div>
</template>

<script>
    import Social from "../apis/Social";
    export default {
        data() {
            return {
                isCopied: false,
                shareOptionsContainer: false,
                oneClickShareOptionsContainer: false,
                oneClickShareData: [],
                ischeckAllSocial:false,
                oneClickMessage: '',
                shareSuccessMessage: '',
                allShare:'',//activeInactive
                traditionalShare:'',
                shareTypes: [
                    { "id": "Facebook", "name": "Facebook" , "icon" : "facebook"},
                    { "id": "Linkedin", "name": "Linkedin" , "icon" : "linkedin"},
                    { "id": "Twitter", "name": "Twitter" , "icon" : "twitter"},
                ],
                fbAppId: process.env.MIX_FACEBOOK_APP_ID,
                isDisabled: false,
                isSharing: false,
                twitterCharacterLimit: 230,
                totalCharacter: 2000,
                remainCharacter: 2000,
            }
        },
        props:['publicShareLink','sharableMediaId','shareMediaType'],
        methods: {
            charCount: function(){
                this.remainCharacter =  this.totalCharacter - this.oneClickMessage.length;

                if(this.oneClickMessage.length < 1){
                    this.remainCharacter = 2000
                }
            },
            copyShareLink: function () {
                this.$refs.sharedLink.select();
                document.execCommand('copy');
                this.isCopied = true;
                setTimeout(() => {
                    this.isCopied = !this.isCopied
                }, 3000);
            },
            showShareOptions: function () {
                this.shareOptionsContainer = true;
                this.oneClickShareOptionsContainer = false;
                this.allShare = 'activeInactive';
                this.traditionalShare = '';
            },
            showOneClickShareOptions: function () {
                this.shareOptionsContainer = false;
                this.oneClickShareOptionsContainer = true;
                this.allShare = '';
                this.traditionalShare = 'activeInactive';
            },
            submitOneClickShare: function () {
                this.shareSuccessMessage = "";
                if(this.oneClickShareData.length)
                {
                    this.isDisabled = true;
                    this.isSharing = true;
                    Social.sharing({
                        'shareLink': this.publicShareLink,
                        'shareMediaId': this.sharableMediaId,
                        'shareMediaType': this.shareMediaType,
                        'sharePlatform': this.oneClickShareData,
                        'shareMessage': this.oneClickMessage
                    })
                        .then((response) => {
                            this.isDisabled = false;
                            this.isSharing = false;
                            this.$bvModal.hide('modalShareLink');
                            Object.keys(response.data.data).map((key) => {
                                if(response.data.data[key].status == 'error'){
                                    toastr.error(response.data.data[key].msg)
                                    this.$router.push({ path: '/settings/general#integrations'}).catch(()=>{});
                                }
                                else if(response.data.data[key].status == 'success'){
                                    toastr.success(response.data.data[key].msg)
                                }
                            })
                        })
                        .catch(error => {
                            this.isDisabled = false;
                            this.isSharing = false;
                            if (error.response.status == 401) {
                                toastr.error("You must need to login for one click share")
                            } else {
                                toastr.error(error)
                            }
                        });
                }
                else{
                    this.shareSuccessMessage = "Please select a share option";
                }

            },
            checkAllSocial: function () {
                this.totalCharacter = 2000
                this.remainCharacter = 2000 - this.oneClickMessage.length
                this.ischeckAllSocial = !this.ischeckAllSocial;
                this.oneClickShareData = [];
                if (this.ischeckAllSocial) { // Check all
                    for (var key in this.shareTypes) {
                        this.oneClickShareData.push(this.shareTypes[key].name);
                    }
                }
            },
            updateCheckAllSocial: function () {
                if(this.oneClickShareData.length == 1 && this.oneClickShareData[0] == 'Twitter')
                {
                    this.oneClickMessage = this.oneClickMessage.length > this.twitterCharacterLimit ?  this.oneClickMessage.substring(0, this.twitterCharacterLimit) : this.oneClickMessage
                    this.totalCharacter = this.twitterCharacterLimit
                    this.remainCharacter = this.twitterCharacterLimit - this.oneClickMessage.length
                }
                else
                {
                    this.totalCharacter = 2000
                    this.remainCharacter = 2000 - this.oneClickMessage.length
                }
                if (this.oneClickShareData.length == this.shareTypes.length) {
                    this.ischeckAllSocial = true;
                } else {
                    this.ischeckAllSocial = false;
                }
            },
            openWindow: function(type, link){
                return !window.open(link, type, 'width=640,height=580')
            }
        }
    };
</script>

<style>
</style>
