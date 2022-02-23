<template>
    <div>
        <form v-on:submit.prevent="contactUs">
            <div class="row mb-5" data-aos="zoom-in" data-aos-delay="100">
                <div class="col-lg-7 mx-auto contact-form-inputs bg-white">
                    <div class="form-group">
                        <label for="name" class="font-weight-bold">Name<span class="required">*</span></label>
                        <input
                            type="text"
                            v-model="form.name"
                            class="form-control"
                            ref="name"
                            :class="{ 'is-invalid': $v.form.name.$error }"
                            id="name"
                            placeholder="John"
                            autocomplete="off"
                        />
                        <div v-if="!$v.form.name.required" class="invalid-feedback">Name is required.</div>
                        <span class="invalid-feedback" role="alert" v-if="errors.name">
                            <strong>{{ errors.name[0] }}</strong>
                        </span>
                    </div>
                    <div class="form-group">
                        <label for="company" class="font-weight-bold">Company Name<span class="required">*</span></label>
                        <input
                            type="text"
                            v-model="form.company"
                            class="form-control"
                            ref="company"
                            :class="{ 'is-invalid': $v.form.company.$error }"
                            id="company"
                            placeholder="Doe"
                            autocomplete="off"
                        />
                        <div v-if="!$v.form.company.required" class="invalid-feedback">Company is required.</div>
                        <span class="invalid-feedback" role="alert" v-if="errors.company">
                            <strong>{{ errors.company[0] }}</strong>
                        </span>
                    </div>
                    <div class="form-group">
                        <label for="email" class="font-weight-bold">Email<span class="required">*</span></label>
                        <input
                            type="email"
                            v-model="form.email"
                            class="form-control"
                            ref="email"
                            :class="{ 'is-invalid': $v.form.email.$error }"
                            id="email"
                            placeholder="john@issuer-example.com"
                            autocomplete="off"

                        />
                        <div v-if="!$v.form.email.required" class="invalid-feedback">Email is required.</div>
                        <div v-if="!$v.form.email.email" class="invalid-feedback">The email is not valid.</div>
                        <div class="invalid-server-feedback" v-if="errors.email">{{ errors.email[0] }}</div>
                    </div>
                    <div class="form-group">
                        <label for="phone" class="font-weight-bold">Company Phone Number<span class="required">*</span></label>
                        <input
                            type="text"
                            v-model="form.phone"
                            class="form-control"
                            ref="phone"
                            :class="{ 'is-invalid': $v.form.phone.$error }"
                            id="phone"
                            placeholder="(xxx) xxx - xxxx"
                            autocomplete="off"
                            @input="acceptPhoneNumber"
                        />
                        <div v-if="$v.form.phone.$error" class="invalid-feedback">
                            <span v-if="!$v.form.phone.required">Phone Number is required</span>
                            <span v-else-if="!$v.form.phone.phoneValid">Phone Number is not valid</span>
                        </div>
                        <div class="invalid-server-feedback" v-if="errors.phone">{{ errors.phone[0] }}</div>
                    </div>
                    <div class="form-group">
                        <label for="message" class="font-weight-bold">Your message<span class="required">*</span></label>
                        <textarea
                            v-model="form.message"
                            class="form-control"
                            ref="message"
                            :class="{ 'is-invalid': $v.form.message.$error }"
                            id="message"
                            placeholder="Message"></textarea>
                        <div v-if="!$v.form.message.required" class="invalid-feedback">Message is required.</div>
                        <div class="invalid-server-feedback" v-if="errors.message">{{ errors.message[0] }}</div>
                    </div>
                    <div class="form-group">
                        <!-- <div id="recaptcha-main"></div> -->
                        <!-- transform:scale(2.05);transform-origin:0 0 -->
                        <div id="recaptcha-main" class="recaptcha-redesign"></div>
                        <span :class="{ 'is-invalid': $v.form.recaptcha_response_value.$error }"></span>
                        <div v-if="!$v.form.recaptcha_response_value.required" class="invalid-feedback">Please tick recaptcha</div>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label class="form-check-label newsletter-label " for="defaultCheck1">
                            Sign up for updates
                        </label>
                    </div>
                    <div class="mt-2">
                        <button type="submit" class="btn btn-theme-dark-blue px-4">Send</button>
                    </div>
                </div>
            </div>
        </form>
        <loader :is-visible="isLoading"></loader>
    </div>
</template>

<script>
    import User from "../apis/User";
    import {required, email, minLength, between, sameAs} from 'vuelidate/lib/validators'
    import Navigation from "./Navigation";
    import Patent from "./Patent";
export default {
    name: "ContactForm",
    data() {
            return {
                form: {
                    company: "",
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                    recaptcha_response_value: "",
                },
                errors: [],
                isLoading: false,
            };
        },
        validations: {
            form: {
                company: {required},
                name: {required},
                email: {required, email},
                phone: {required,
                    phoneValid: function(value) {
                        const containsNumber = /[0-9]/.test(value)
                        const pattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(value);
                        return containsNumber && pattern
                    }},
                message: {required},
                recaptcha_response_value: {required},
            }

        },
        methods: {
            contactUs(submitEvent) {
                this.$v.form.company.$touch();
                this.$v.form.name.$touch();
                this.$v.form.email.$touch();
                this.$v.form.phone.$touch();
                this.$v.form.message.$touch();
                this.$v.form.recaptcha_response_value.$touch();

                if (this.$v.form.company.$invalid || this.$v.form.name.$invalid || this.$v.form.email.$invalid || this.$v.form.phone.$invalid || this.$v.form.message.$invalid || this.$v.form.recaptcha_response_value.$invalid) {
                    if (this.$v.form.name.$invalid) {
                        this.$refs.name.focus();
                    } else if (this.$v.form.company.$invalid) {
                        this.$refs.company.focus();
                    } else if (this.$v.form.email.$invalid) {
                        this.$refs.email.focus();
                    } else if (this.$v.form.phone.$invalid) {
                        this.$refs.phone.focus();
                    } else if (this.$v.form.message.$invalid) {
                        this.$refs.message.focus();
                    }
                    return false;
                }

                this.isLoading = true
                User.contact(this.form)
                    .then(() => {
                        localStorage.setItem("thanksPage", "contactus");
                        this.$router.push({name: "ThankYou"});
                    })
                    .catch(error => {
                        if (error.response.status === 422) {
                            this.errors = error.response.data.error.message;
                        }
                        this.isLoading = false;
                    });
            },
            acceptPhoneNumber() {
                var x = this.form.phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
                this.form.phone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
            },
            initReCaptcha: function () {
                setTimeout(function () {
                    if (typeof grecaptcha === 'undefined' || typeof grecaptcha.render === 'undefined') {
                        this.initReCaptcha();
                    } else {
                        grecaptcha.render('recaptcha-main', {
                            sitekey: process.env.MIX_RECAPTCHA_SITE_KEY,
                            callback: this.correctCaptcha,
                            'expired-callback': this.expired
                        });
                    }
                }.bind(this), 100);
            },
            correctCaptcha: function(response) {
                this.form.recaptcha_response_value = response
            }
        },
        created: function(){
            this.initReCaptcha();
        },
    components: {
        loader: () => import("../components/Loader")
    },
}
</script>

<style>

</style>
