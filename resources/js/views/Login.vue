<template>
    <section>
        <Navigation/>
        <div class="container mt-5" data-aos="fade-up">
<!--            <img src="/images/issuerpixel_logo.png" alt="issuerpixel_logo.png" class="img-fluid mx-auto d-block"/>-->
            <div class="row login-container">
                <div class="col-lg-5 col-md-6 mx-auto my-4 bg-white rounded py-3">
                    <h2 class="text-center mb-2">Login</h2>
                    <form v-on:submit.prevent="login">
                        <div class="form-group">
                            <label for="email" class="control-label font-weight-bold"
                            >Email<span class="text-danger">*</span></label
                            >
                            <input
                                type="email"
                                v-model="form.email"
                                class="form-control"
                                :class="{ 'is-invalid': $v.form.email.$error }"
                                id="email"
                                placeholder="Type in your email address"
                                autocomplete="off"
                                v-on:keyup="resetServersideError"
                            />
                            <div v-if="!$v.form.email.required" class="invalid-feedback">
                                Email is required.
                            </div>
                            <div v-if="!$v.form.email.customEmailValidate" class="invalid-feedback">The email is not
                                valid.
                            </div>
                            <span class="invalid-server-feedback" v-if="errors.email">{{
                errors.email[0]
              }}</span>
                        </div>

                        <div class="form-group">
                            <label for="password" class="control-label font-weight-bold"
                            >Password<span class="text-danger">*</span></label
                            >
                            <router-link class="float-right fs-16" :to="{ name: 'PasswordRequest' }">
                                Forgot password?
                            </router-link
                            >
                            <div class="input-group">
                                <input
                                    :type="fieldPassword"
                                    v-model="form.password"
                                    class="form-control"
                                    :class="{ 'is-invalid': $v.form.password.$error }"
                                    id="password"
                                    placeholder="Type in your password"
                                    autocomplete="off"
                                    v-on:keyup="resetServersideError"
                                />

                                <div class="input-group-append">
                    <span class="btn show-password-icon">
                        <a href="javascript:;" @click.prevent="showPassword" :class="{ active: isPasswordViewActive }">
                            <i class="fas fa-eye" v-if="isPasswordViewActive"></i>
                            <i class="fas fa-eye-slash" v-else></i>
                        </a>
                    </span>
                                </div>
                                <div v-if="!$v.form.password.required" class="invalid-feedback">
                                    Password is required.
                                </div>
                            </div>
                        </div>

                        <div class="text-center">
                            <button class="btn btn-back-next btn-block">Login</button>
                        </div>

                        <div class="form-group text-center">
                            <label class="form-check-label control-label font-weight-bold mt-2 fs-16">
                                Don't have an account? Please
                                <router-link class="theme-color" :to="{ name: 'SignUp' }">
                                    Sign Up
                                </router-link>
                            </label>
                        </div>

                    </form>
                </div>
            </div>
        </div>
        <Footer :fixedFooterClass="fixedFooterClass"></Footer>
        <loader :is-visible="isLoading"></loader>
    </section>
</template>

<script>
    import Navigation from "../components/Navigation.vue";
    import User from "../apis/User";
    import {
        required,
        minLength,
        between,
        sameAs,
    } from "vuelidate/lib/validators";

    const customEmailValidate = function (value = "") {
        if (value != "") {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(value).toLowerCase());
        } else {
            return true;
        }
    }

    export default {
        data() {
            return {
                form: {
                    email: "",
                    password: "",
                },
                errors: [],
                isLoading: false,
                fieldPassword: "password",
                isPasswordViewActive: false,
                fixedFooterClass:"fixed-footer"
            };
        },
        validations: {
            form: {
                email: {required, customEmailValidate},
                password: {required},
            },
        },
        methods: {
            login() {
                this.$v.form.email.$touch();
                this.$v.form.password.$touch();
                if (this.$v.form.email.$invalid || this.$v.form.password.$invalid) {
                    return false;
                }
                this.isLoading = true;
                User.login(this.form)
                    .then((response) => {
                        if (response.data.success) {
                            localStorage.setItem(
                                "userInfo",
                                JSON.stringify(response.data.data)
                            );
                            // console.log(response.data.info);
                            localStorage.setItem("info", JSON.stringify(response.data.info));
                            localStorage.setItem("videoUploadRemainingDays", response.data.info.video_upload_remaining_days);
                            localStorage.setItem("isVideoUploaded", response.data.info.is_video_uploaded);
                            localStorage.setItem("userid", response.data.info.id);
                            localStorage.setItem("companyUuid", response.data.info.company_uuid);
                            localStorage.setItem("companySlugName", response.data.info.company_slug_name);
                            localStorage.setItem("storagePath", response.data.info.storage_path);
                            localStorage.setItem("bulletins",  JSON.stringify(response.data.info.bulletins));
                            this.$root.$emit("login", true);
                            localStorage.setItem("token", response.data.info.token);
                            this.$router.push({name: "Dashboard"});
                        } else {
                            toastr.error("unknown error");
                        }
                    })
                    .catch((error) => {
                        this.isLoading = false;
                        if (error.response.status === 422) {
                            this.errors = error.response.data.error.message;
                        } else {
                            toastr.error(error);
                        }
                    });
            },
            showPassword() {
                this.fieldPassword =
                    this.fieldPassword === "password" ? "text" : "password";
                this.isPasswordViewActive = this.isPasswordViewActive === "active" ? "" : "active";
            },
            resetServersideError() {
                this.errors = []
            }
        },
        components: {
            Footer: () => import("../components/Footer"),
            loader: () => import("../components/Loader"),
            Navigation
        }
    };
</script>
<style>
    .fs-16 {
        font-size: 16px;
    }
    @media (min-width: 480px) and (min-height: 680px) {
        .fixed-footer {
            bottom: 0 !important;
            position: absolute !important;
        }
    }
</style>
