<template>
    <section :class="(this.extendFrom == 'Home')?'section-bg':''">
        <div :class="(this.extendFrom == 'Home')? 'subscription-home-bg' : 'subscription-bg'">
        <div class="container aos-init">
            <div class="px-lg-5 px-4 py-5 text-center">
                <div class="row justify-content-center mb-5">
                    <div :class="(this.extendFrom == 'Home')? 'col-md-6 my-auto font-weight-bold subscription-home-text text-center' : 'col-md-6 my-auto font-weight-bold subscribe-box-label text-center'">
                        Receive Issuer Pixel Updates
                    </div>
                </div>
                <div class="row justify-content-center pb-3">
                    <div class="col-md-6 subscribe-box-input ">
                        <input type="text"
                               v-model="email"
                               ref="email"
                               :class="{ 'is-invalid': $v.email.$error }"
                               class="form-control form-control-lg mb-md-0 mb-2"
                               placeholder="Insert your email...*"
                               autocomplete="off"/>
                        <div v-if="!$v.email.required" class="invalid-feedback text-left">Email is required.</div>
                        <div v-if="!$v.email.customEmailValidate" class="invalid-feedback text-left">The email is not
                            valid.
                        </div>
                    </div>
                    <div class="subscribe-box-button">
                        <button class=" btn-theme-purple" @click.prevent="addSubscribe">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
    import {required, email} from 'vuelidate/lib/validators'

    export default {
        name: "Subscribe",
        props:[
            "extendFrom"
        ],
        data() {
            return {
                email: "",
                isDisabled: false,
                subscribeFormData: {
                    email: '',
                    _token: ''
                },
            }
        },
        validations: {
            email: {
                required,
                customEmailValidate: function (value = "") {
                    if (value != "") {
                        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return re.test(String(value).toLowerCase());
                    } else {
                        return true;
                    }
                }
            },
        },
        methods: {
            addSubscribe: function () {
                this.$v.email.$touch();
                if (this.$v.email.$invalid) {
                    this.$refs.email.focus();
                    return false;
                }
                this.isDisabled = true;
                this.subscribeFormData.email = this.email;
                this.subscribeFormData._token = document.querySelector('meta[name="csrf-token"]').content

                axios.post('/api/subscribe', this.subscribeFormData)
                    .then(response => {
                        if (response.data.success) {
                            $.confirm({
                                title: '',
                                content: "Thank you for subscribing.",
                                columnClass: 'medium',
                                type: 'blue',
                                typeAnimated: true,
                                buttons: {
                                    Ok: function () {
                                    },
                                }
                            });
                            this.isDisabled = false;
                            this.$v.$reset();
                            this.email = "";
                        }
                    })
                    .catch(error => {
                        console.log(error)
                        this.isDisabled = false;
                        if (error.response.status === 422) {
                            toastr.error(error.response.data.error.message)
                        } else {
                            toastr.error(error)
                        }
                    });
            },
        },
    }
</script>

<style scoped>

</style>
