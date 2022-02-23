<template>
    <div>
        <Navigation/>
        <section>
            <div class="container aos-init mt-5">
                <div class="bg-white rounded px-lg-5 px-4 py-5">
                    <div class="text-center">
                        <h4 class="font-weight-bold">
                            Issuer Pixel Updates
                        </h4>
                        <p>Subscribe to keep up with our exciting company updates.</p>
                    </div>
                    <div class="row mx-auto px-5">
                        <div class="col-md subscribe-box-input">
                            <input type="text"
                                   v-model="email"
                                   ref="email"
                                   :class="{ 'is-invalid': $v.email.$error }"
                                   class="form-control form-control-lg mb-md-0 mb-2"
                                   placeholder="Insert your email ...*"
                                   autocomplete="off"/>
                            <div v-if="!$v.email.required" class="invalid-feedback">Email is required.</div>
                            <div v-if="!$v.email.customEmailValidate" class="invalid-feedback">The email is not
                                valid.
                            </div>
                            <p class="fs-12 pt-2">By subscribing to Issuer Pixels company updates, you agree to the
                                email address being stored and used to receive updates.</p>
                        </div>
                        <div class="col-md subscribe-box-button">
                            <button class="btn btn-lg btn-theme-purple px-4" @click.prevent="addSubscribe">Subscribe
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <!--        <Footer></Footer>-->
    </div>
</template>

<script>
    import Navigation from "../components/Navigation.vue";
    import {required, email} from 'vuelidate/lib/validators'

    export default {
        name: "CompanyUpdates",
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
        components: {
            Footer: () => import("../components/Footer"),
            Navigation
        }
    }
</script>

<style scoped>

</style>
