<template>
    <div class="container-fluid px-0">
        <div class="row collapse show no-gutters d-flex h-100 position-relative">
            <div class="col-md-10 offset-md-2">
                <h4 class="py-3 settings-title-text">Change Password</h4>
                <form v-on:submit.prevent="updatePasswordSettings">
                    <div class="form-group">
                        <label for="oldPassword" class="control-label font-weight-bold">Old Password<span class="text-danger">*</span></label>
                        <div class="input-group">
                            <input
                                :type="fieldPassword"
                                v-model="form.oldPassword"
                                class="form-control"
                                ref="oldPassword"
                                :class="{ 'is-invalid': $v.form.oldPassword.$error }"
                                id="oldassword"
                                placeholder="Type in your old password"
                                autocomplete="off"
                                @click.right.prevent @copy.prevent @cut.prevent @paste.prevent
                            />
                            <div class="input-group-append">
                                <span class="btn show-password-icon">
                                    <a href="javascript:;" @click.prevent="showPassword" :class="{ active: isPasswordViewActive }">
                                        <i class="fas fa-eye" v-if="isPasswordViewActive"></i>
                                        <i class="fas fa-eye-slash" v-else></i>
                                    </a>
                                </span>
                            </div>
                            <div v-if="$v.form.oldPassword.$error" class="invalid-feedback">
                                <span v-if="!$v.form.oldPassword.required">Old Password is required</span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="password" class="control-label font-weight-bold">New Password<span class="text-danger">*</span></label>
                        <div class="input-group">
                            <input
                                :type="fieldPassword"
                                v-model="form.password"
                                class="form-control"
                                ref="password"
                                :class="{ 'is-invalid': $v.form.password.$error }"
                                id="password"
                                placeholder="Type in new password"
                                autocomplete="off"
                                @click.right.prevent @copy.prevent @cut.prevent @paste.prevent
                            />
                            <div class="input-group-append">
                                <span class="btn show-password-icon">
                                    <a href="javascript:;" @click.prevent="showPassword" :class="{ active: isPasswordViewActive }">
                                        <i class="fas fa-eye" v-if="isPasswordViewActive"></i>
                                        <i class="fas fa-eye-slash" v-else></i>
                                    </a>
                                </span>
                            </div>
                            <div v-if="$v.form.password.$error" class="invalid-feedback">
                                <span v-if="!$v.form.password.required">New password is required</span>
                                <span v-else-if="!$v.form.password.minLength">Password must be at least 8 characters</span>
                                <span v-else-if="!$v.form.password.patternValid">Password must contain at least one number and one letter and one special character</span>
                            </div>
                            <span class="w-100 small" v-else>Use 8 or more characters with a mix of numbers, letters &  special character</span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="password_confirmation" class="control-label font-weight-bold">Confirm Password<span class="text-danger">*</span></label>
                        <div class="input-group">
                            <input
                                :type="fieldPassword"
                                v-model="form.password_confirmation"
                                class="form-control"
                                ref="password_confirmation"
                                :class="{ 'is-invalid': $v.form.password_confirmation.$error }"
                                id="password_confirmation"
                                placeholder="Type in confirm password"
                                autocomplete="off"
                                @click.right.prevent @copy.prevent @cut.prevent @paste.prevent
                            />
                            <div class="input-group-append">
                                <span class="btn show-password-icon">
                                    <a href="javascript:;" @click.prevent="showPassword" :class="{ active: isPasswordViewActive }">
                                        <i class="fas fa-eye" v-if="isPasswordViewActive"></i>
                                        <i class="fas fa-eye-slash" v-else></i>
                                    </a>
                                </span>
                            </div>
                            <div v-if="$v.form.password_confirmation.$error" class="invalid-feedback">
                                <span v-if="!$v.form.password_confirmation.required">Confirm Password is required</span>
                                <span v-else-if="!$v.form.password_confirmation.sameAsPassword">Passwords must match</span>
                            </div>
                        </div>
                    </div>

                    <div class="text-left mb-4">
                        <button class="btn btn-back-next">Save Changes</button>
                    </div>
                </form>

            </div>
        </div>
        <loader :is-visible="isLoading"></loader>
    </div>
</template>
<script>
    import User from "../../apis/User";
    import {required, minLength, between, sameAs} from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                form: {
                    oldPassword: "",
                    password: "",
                    password_confirmation: "",
                },
                isLoading: false,
                errors: [],
                fieldPassword: "password",
                isPasswordViewActive: false
            };
        },
        validations: {
            form: {
                oldPassword: {required},
                password: {required, minLength: minLength(8),
                    patternValid: function(value) {
                        const containsLetter = /[A-Za-z]/.test(value)
                        const containsNumber = /[0-9]/.test(value)
                        const containsSpecial = /[#?!@$%^&*-]/.test(value)
                        return containsLetter && containsNumber && containsSpecial
                    }
                },
                password_confirmation: {required, sameAsPassword: sameAs('password')},
            }

        },
        methods: {
            updatePasswordSettings() {
                this.$v.form.oldPassword.$touch();
                this.$v.form.password.$touch();
                this.$v.form.password_confirmation.$touch();
                if (this.$v.form.oldPassword.$invalid || this.$v.form.password.$invalid || this.$v.form.password_confirmation.$invalid) {
                    if (this.$v.form.oldPassword.$invalid) {
                        this.$refs.oldPassword.focus();
                    }else if (this.$v.form.password.$invalid) {
                        this.$refs.password.focus();
                    }else if (this.$v.form.password_confirmation.$invalid) {
                        this.$refs.password_confirmation.focus();
                    }
                    return false;
                }
                this.isLoading = true
                User.updatePassword(this.form)
                    .then((response) => {
                        this.isLoading = false
                        this.submitButtonDisabled = false;
                        toastr.success(response.data.success.message)
                    })
                    .catch(error => {
                        this.isLoading = false
                        this.submitButtonDisabled = false;
                        if (error.response.status === 422) {
                            toastr.error(error.response.data.error.message)
                        }
                        else if (error.response.status == 401) {
                            localStorage.clear();
                            this.$router.push({ name: "Login" });
                        }
                        else{
                            toastr.error(error)
                        }
                    });
            },
            showPassword() {
                this.fieldPassword =
                    this.fieldPassword === "password" ? "text" : "password";
                this.isPasswordViewActive = this.isPasswordViewActive === "active" ? "" : "active";
            }

        },
        components: {
            loader: () => import("../Loader")
        }
    };
</script>
