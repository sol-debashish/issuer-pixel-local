<template>
    <div class="container-fluid px-0">
        <div class="row collapse show no-gutters d-flex h-100 position-relative">
            <div class="col-lg-8 company-profile-tab mx-auto">
                <div class="panel-body companyManageForm">
                    <div class="form-group row">
                        <div class="col-lg-12">
                            <label>
                                <i v-if="form.socialMediaPlatform.length" class="fas fa-check-circle"></i>
                                <i v-else class="fas fa-times-circle"></i> Select All Platforms Your Company Has a Presence Online<span class="exclamation-positions" v-b-tooltip.hover
                                                 title="Investors, Partners, and Suppliers want to find you. Input your social media information to increase awareness."><i
                                class="exclamation-circle-vue">i</i></span></label>

                            <v-select label="name"
                                      multiple
                                      :selectable="selectHide"
                                      :options="socialMediaPlatforms"
                                      :clearable="false"
                                      class="w100"
                                      placeholder="None"
                                      @input="showRelatedSocialField($event, 'listOfSocialPlatformId', 'manual')"
                                      v-model="form.socialMediaPlatform"></v-select>
                        </div>
                    </div>

                    <template v-for="(platform, platformIndex) in $v.socialMediaPlatforms.$each.$iter">
                        <div class="form-group row" v-if="listOfSocialPlatformId.includes(platform.$model.id)">
                            <div class="input-group col-12">
                                <div class="input-group-prepend" v-if="platform.$model.icon_class">
                                                <span class="btn social-icon-group">
                                                    <div v-if="'scoop' == platform.$model.url_validate_string"
                                                         style="height: 18px; width: 18px">
                                                        <svg enable-background="new 0 0 128 128" id="Social_Icons"
                                                             version="1.1" viewBox="0 0 128 128" xml:space="preserve"
                                                             xmlns="http://www.w3.org/2000/svg"
                                                             xmlns:xlink="http://www.w3.org/1999/xlink"><g id="_x32__stroke"><g id="Scoopit"><rect clip-rule="evenodd" fill="none" fill-rule="evenodd" height="128" width="128"/><path
                                                            clip-rule="evenodd"
                                                            d="M83.622,90.814h16.529v15.89H83.622V90.814z     M44.126,20.568c-4.682,0.051-11.6,0.042-16.277,0l-0.028,14.168h16.291L44.126,20.568z M69.044,20.568l-16.553-0.009    l0.023,21.856L27.756,42.41l0.037,32.14l0.005,32.177h16.436l-0.047-52.974l8.295-0.005l-0.019,38.027    c0,1.919,0.117,3.833,0.364,5.737c0.686,5.471,3.025,8.295,8.108,9.304c5.602,1.111,11.992,0.537,17.612-0.065l0.023-11.32    c-0.378,0.009-3.776,0.009-4.15,0c-3.646-0.126-5.326-1.667-5.345-5.317L69.03,53.744l9.537,0.005l0.005-11.283l-9.551-0.005    L69.044,20.568z M83.617,38.605l2.259,44.441c3.3-0.065,8.762-0.047,12.062-0.014l2.236-44.585l0.042-17.893H83.608L83.617,38.605    z M0,128V0h128v128H0z"
                                                            fill="#000000" fill-rule="evenodd" id="Scoopit_1_"/></g></g></svg>
                                                    </div>
                                                    <svg v-else-if="'tiktok.com' == platform.$model.url_validate_string"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
                                                         focusable="false" width="16px" height="16px"
                                                         preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path
                                                        d="M16.708.027C18.453 0 20.188.016 21.921 0c.105 2.041.839 4.12 2.333 5.563c1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-.063-3.855-.463-5.6-1.291c-.76-.344-1.468-.787-2.161-1.24c-.009 3.896.016 7.787-.025 11.667c-.104 1.864-.719 3.719-1.803 5.255c-1.744 2.557-4.771 4.224-7.88 4.276c-1.907.109-3.812-.411-5.437-1.369C4.307 29.027 2.412 26.12 2.136 23a22.3 22.3 0 0 1-.016-1.984c.24-2.537 1.495-4.964 3.443-6.615c2.208-1.923 5.301-2.839 8.197-2.297c.027 1.975-.052 3.948-.052 5.923c-1.323-.428-2.869-.308-4.025.495a4.618 4.618 0 0 0-1.819 2.333c-.276.676-.197 1.427-.181 2.145c.317 2.188 2.421 4.027 4.667 3.828c1.489-.016 2.916-.88 3.692-2.145c.251-.443.532-.896.547-1.417c.131-2.385.079-4.76.095-7.145c.011-5.375-.016-10.735.025-16.093z"
                                                        fill="#626262"/></svg>
                                                    <i v-else :class="platform.$model.icon_class"></i>
                                                </span>
                                </div>
                                <input
                                    type="text"
                                    class="form-control"
                                    :id="`platform_field_${platform.$model.id}`"
                                    placeholder="Please Enter URL"
                                    autocomplete="off"
                                    :class="{ 'is-invalid': platform.$error }"
                                    v-model.trim="platform.value.$model"
                                >

                                <div class="input-group-append">
                                    <a class="btn social-content-delete-icon"
                                       @click="removePlatform(platform.$model.id)">
                                        <i class="fas fa-minus-circle"></i>
                                    </a>
                                </div>
                                <div class="invalid-feedback" v-if="!platform.value.required">
                                    {{platform.$model.name}} is required.
                                </div>
                                <div class="invalid-feedback" v-else-if="!platform.value.customValidate">
                                    Please provide valid url.
                                </div>
                            </div>
                        </div>
                    </template>
                        <div class="text-center mb-4">
                            <button @click.prevent="saveCompanySocialData()"
                                    class="btn btn-primary save-changes">
                                Save Changes
                            </button>
                        </div>
                </div>
            </div>
        </div>
        <loader :is-visible="isLoading"></loader>
    </div>
</template>
<script>
    import Questionnnaire from "../../apis/Questionnnaire";
    import vSelect from 'vue-select'
    import loader from '../Loader'
    import {required, url} from 'vuelidate/lib/validators'

    const customValidate = function (value, vm) {
        if (value != "" && !!vm.url_validate_string) {
            return value.includes(vm.url_validate_string)
        } else {
            return true;
        }
    }

    export default {
        data() {
            return {
                isLoading: false,
                oldSocialMediaPlatform:"",

                form:
                    {
                        socialMediaPlatform: [],
                        non_listed_social_media: [],

                        platformUrl: [],
                    },
                CompanySocialFormData:
                    {
                        socialMediaPlatform: [],
                        non_listed_social_media: '',
                    },
                socialMediaPlatforms: [],
                listOfSocialPlatformId: [],
            };
        },
        validations: {
            socialMediaPlatforms: {
                $each: {
                    value: {
                        required, customValidate
                    }
                }
            },
        },
        methods: {
            getSocialMediaPlatformList: async function () {
                return Questionnnaire.getSocialMediaPlatformData()
                    .then(response => {
                        this.socialMediaPlatforms = response.data.data
                    })
                    .catch(error => console.log(error))
            },

            addMoreSocialMedia() {
                this.form.non_listed_social_media.push({
                    name: ''
                })
            },
            removeMoreSocialMedia(index) {
                this.form.non_listed_social_media.splice(index, 1)
            },
            getStepwiseData: function () {
                Questionnnaire.getCompanyQuestionnaireData(5)
                    .then((response) => {
                        let socialData = response.data.data;
                        this.form.socialMediaPlatform = socialData.company_social_media_platform;
                        this.oldSocialMediaPlatform = socialData.company_social_media_platform;

                        this.showRelatedSocialField(socialData.company_social_media_platform, 'listOfSocialPlatformId')
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
            saveCompanySocialData() {
                var insertDataArray = [];
                this.$v.socialMediaPlatforms.$touch()
                for (const property in this.socialMediaPlatforms) {
                    if (this.listOfSocialPlatformId.includes(this.socialMediaPlatforms[property].id) && this.$v.socialMediaPlatforms.$each[property].$invalid) {
                        $('#platform_field_' + this.socialMediaPlatforms[property].id).focus();
                        return false;
                    }
                    if (this.listOfSocialPlatformId.includes(this.socialMediaPlatforms[property].id)) {
                        insertDataArray.push([this.$v.socialMediaPlatforms.$each[property].$model.id, this.$v.socialMediaPlatforms.$each[property].$model.value]);
                    }
                }
                this.isLoading = true
                this.CompanySocialFormData.socialMediaPlatform = insertDataArray
                Questionnnaire.updateCompanyQuestionnaireData(this.CompanySocialFormData, 5)
                    .then((response) => {
                        this.isLoading = false
                        this.submitButtonDisabled = false;
                        toastr.success(response.data.success.message)
                        /*Impact realtime Percentage Change in tab and banner*/
                        this.$parent.$parent.$parent.getCompanyInfo();
                    })
                    .catch(error => {
                        this.isLoading = false
                        this.submitButtonDisabled = false;
                        if (error.response.status === 422) {
                            toastr.error(error.response.data.error.message)
                        } else if (error.response.status == 401) {
                            this.$emit('logout')
                        } else {
                            toastr.error(error)
                        }
                    });
            },
            showRelatedSocialField: function (field, list, event) {
                //this code is part of changeField function start
                if(this.form.socialMediaPlatform !== this.oldSocialMediaPlatform){
                    this.$emit("companySocial", true);
                }else{
                    this.$emit("companySocial", false);
                }
                //this code is part of changeField function end
                this[list] = Object.keys(field).map((key) => {
                    return field[key].id
                })
            },
            removePlatform: function (id) {
                this.form.socialMediaPlatform = this.form.socialMediaPlatform.filter(function (elem) {
                    if (elem.id != id) return elem;
                });
                this.showRelatedSocialField(this.form.socialMediaPlatform, 'listOfSocialPlatformId')
            },
            goBackToPageTopAndNextFieldToEnter: function () {
                $(document).ready(function () {
                    $(this).scrollTop(0);
                    $('input, select, textarea').on('keydown', function (e) {
                        if (e.keyCode == 13) {
                            var focusable = $('input,select, textarea').filter(':visible');
                            focusable.eq(focusable.index(this) + 1).focus();
                            return false;
                        }
                    });
                });
            },
            selectHide: function (option) {
                // console.log(this.listOfSocialPlatformId)
                if (!this.listOfSocialPlatformId.includes(option.id))
                    return option;
            },
            loadComponentData: async function () {
                this.isLoading = true
                this.goBackToPageTopAndNextFieldToEnter();

                await this.getSocialMediaPlatformList();
                this.getStepwiseData();
            }
        },
        components: {
            loader,
            vSelect,
        }
    };
</script>
<style scoped>
    .social-content-delete-icon {
        color: red !important;
        border-color: #ced4da;
        border-left: 0;
        box-shadow: 0 0 0 0 rgb(52 144 220 / 25%) !important;
        background-color: #ffffff;
        border-top-left-radius: 0.25rem !important;
        border-bottom-left-radius: 0.25rem !important;
    }

    .social-icon-group {
        border-color: #ced4da;
        border-right: 0;
        cursor: auto !important;
        height: 37px;
    }

    .social-icon-group i {
        font-size: 18px;
    }
</style>
