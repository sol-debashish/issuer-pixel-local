<template>
    <section class="dashboard pt-0">
        <div>
            <form v-on:submit.prevent="contactUs">
                <h4 class="text-center text-theme-dark-blue pb-2">Contact Us</h4>
                <div class='row'>
                    <div class='col-md-10 col-lg-8 grid-margin mx-auto'>
                        <div class='card'>
                            <div class='card-body'>
                        <div class="form-group">
                            <label for="name" class="text-theme-dark-blue">Name</label>
                            <input
                                type="text"
                                v-model="form.name"
                                class="form-control"
                                ref="name"
                                :class="{ 'is-invalid': $v.form.name.$error }"
                                id="name"
                                placeholder="Name"
                                autocomplete="off"
                                disabled
                            />
                            <div v-if="!$v.form.name.required" class="invalid-feedback">Name is required.</div>
                            <span class="invalid-feedback" role="alert" v-if="errors.name">
                                <strong>{{ errors.name[0] }}</strong>
                            </span>
                        </div>
                        <div class="form-group">
                            <label for="company" class="text-theme-dark-blue">Company</label>
                            <input
                                type="text"
                                v-model="form.company"
                                class="form-control"
                                ref="company"
                                :class="{ 'is-invalid': $v.form.company.$error }"
                                id="company"
                                placeholder="Company"
                                autocomplete="off"
                                disabled
                            />
                            <div v-if="!$v.form.company.required" class="invalid-feedback">Company is required.</div>
                            <span class="invalid-feedback" role="alert" v-if="errors.company">
                                <strong>{{ errors.company[0] }}</strong>
                            </span>
                        </div>
                        <div class="form-group">
                            <label for="email" class="text-theme-dark-blue">Email</label>
                            <input
                                type="email"
                                v-model="form.email"
                                class="form-control"
                                ref="email"
                                :class="{ 'is-invalid': $v.form.email.$error }"
                                id="email"
                                placeholder="Email"
                                autocomplete="off"
                                disabled
                            />
                            <div v-if="!$v.form.email.required" class="invalid-feedback">Email is required.</div>
                            <div v-if="!$v.form.email.email" class="invalid-feedback">The email is not valid.</div>
                            <div class="invalid-server-feedback" v-if="errors.email">{{ errors.email[0] }}</div>
                        </div>
                        <div class="form-group">
                            <label for="message" class="text-theme-dark-blue">Message</label>
                            <textarea
                                v-model="form.message"
                                class="form-control"
                                ref="message"
                                :class="{ 'is-invalid': $v.form.message.$error }"
                                id="message"
                                placeholder="Your Message"></textarea>
                            <div v-if="!$v.form.message.required" class="invalid-feedback">Message is required.</div>
                            <div class="invalid-server-feedback" v-if="errors.message">{{ errors.message[0] }}</div>
                        </div>

                        <div class="mt-4 text-center">
                            <button type="submit" class="btn btn-back-next">Send</button>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </form>
        </div>
        <loader :is-visible="isLoading"></loader>
    </section>
</template>

<script>
    import User from "../apis/User";
    import {required, email, minLength, between, sameAs} from 'vuelidate/lib/validators'
    export default {
        name: "ContactUsIssuer",
        data() {
            return {
                form: {
                    company: "",
                    name: "",
                    email: "",
                    message: "",
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
                message: {required},
            }

        },
        methods: {
            contactUs() {
                this.$v.form.company.$touch();
                this.$v.form.name.$touch();
                this.$v.form.email.$touch();
                this.$v.form.message.$touch();
                if (this.$v.form.company.$invalid ||this.$v.form.name.$invalid || this.$v.form.email.$invalid || this.$v.form.message.$invalid) {
                    if (this.$v.form.name.$invalid) {
                        this.$refs.name.focus();
                    } else if (this.$v.form.company.$invalid) {
                        this.$refs.company.focus();
                    } else if (this.$v.form.email.$invalid) {
                        this.$refs.email.focus();
                    } else if (this.$v.form.message.$invalid) {
                        this.$refs.message.focus();
                    }
                    return false;
                }

                this.isLoading = true
                User.contact(this.form)
                    .then(() => {
                        $.confirm({
                            title: '',
                            content: "Thank you for submitting your message. Someone will be reaching out to you soon.",
                            columnClass: 'medium',
                            type: 'blue',
                            typeAnimated: true,
                            buttons: {
                                Ok: function () {
                                },
                            }
                        });
                    })
                    .catch(error => {
                        if (error.response.status === 422) {
                            this.errors = error.response.data.error.message;
                        }
                        this.isLoading = false;
                    });
            },

        },
        mounted() {
            const user = JSON.parse(localStorage.getItem("info"));
            this.form.name = user.name;
            this.form.company = user.company;
            this.form.email = user.email;
        },
        created: function(){

        },
        components: {
            loader: () => import("../components/Loader"),
        }
    };
</script>

