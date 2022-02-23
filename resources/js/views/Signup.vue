<template>
    <section>
        <Navigation/>
        <div class="container mt-5" data-aos="fade-up">
<!--            <img src="/images/issuerpixel_logo.png" alt="issuerpixel_logo.png" class="img-fluid mx-auto d-block">-->
            <div class="row register-container">
                <div class="col-lg-6 col-md-8 mx-auto bg-white rounded pt-3">
                    <h2 class="text-center mb-3">Sign Up</h2>
                    <p class="mx-auto mb-1 field-mark-label">Fields marked with <span class="text-danger">*</span>
                        are required</p>
                    <form @submit.prevent="signupValidate">
                        <div class="form-group">
                            <label for="firstName" class="control-label font-weight-bold">First Name<span
                                class="text-danger">*</span></label>
                            <input
                                type="text"
                                v-model="form.firstName"
                                class="form-control"
                                ref="firstName"
                                :class="{ 'is-invalid': $v.form.firstName.$error }"
                                id="firstName"
                                placeholder="Ex: John"
                                autocomplete="off"
                            />
                            <div v-if="!$v.form.firstName.required" class="invalid-feedback">First name is required.
                            </div>
                            <span class="invalid-feedback" role="alert" v-if="errors.firstName">
                                <strong>{{ errors.firstName[0] }}</strong>
                            </span>
                        </div>

                        <div class="form-group">
                            <label for="lastName" class="control-label font-weight-bold">Last Name<span
                                class="text-danger">*</span></label>
                            <input
                                type="text"
                                v-model="form.lastName"
                                class="form-control"
                                ref="lastName"
                                :class="{ 'is-invalid': $v.form.lastName.$error }"
                                id="lastName"
                                placeholder="Ex: Smith"
                                autocomplete="off"
                            />
                            <div v-if="!$v.form.lastName.required" class="invalid-feedback">Last name is required.</div>
                            <span class="invalid-feedback" role="alert" v-if="errors.lastName">
                                <strong>{{ errors.lastName[0] }}</strong>
                            </span>
                        </div>
                        <div class="form-group">
                            <label for="email" class="control-label font-weight-bold">Email<span
                                class="text-danger">*</span></label>
                            <input
                                :type="fieldEmail"
                                v-model="form.email"
                                class="form-control"
                                ref="email"
                                :class="{ 'is-invalid': $v.form.email.$error }"
                                id="email"
                                name="email"
                                placeholder="Type in your email address"
                                autocomplete="off"
                                v-on:blur="businessDomainEmailTesting"
                                @focus="handleTypeEmail"
                            />
                            <div v-if="!$v.form.email.required" class="invalid-feedback">Email is required.</div>
                            <div v-if="!$v.form.email.customEmailValidate" class="invalid-feedback">The email is not
                                valid.
                            </div>
                            <!--<div v-if="!$v.form.email.unique" class="invalid-feedback">Email Already Taken</div>-->
                            <div v-if="!errors.email && email_exists" class="invalid-feedback-alter">Email Already
                                Taken
                            </div>
                            <div class="invalid-server-feedback" v-if="errors.email">{{ errors.email[0] }}</div>
                        </div>
                        <div class="form-group">
                            <label for="companyName" class="control-label font-weight-bold">Company Name<span
                                class="text-danger">*</span></label>
                            <input
                                type="text"
                                v-model="form.companyName"
                                class="form-control"
                                ref="companyName"
                                :class="{ 'is-invalid': $v.form.companyName.$error }"
                                id="companyName"
                                placeholder="Name of your organization "
                                v-on:blur="checkCompanyNameExists"
                                autocomplete="off"
                            />
                            <div v-if="!$v.form.companyName.required" class="invalid-feedback">Company name is
                                required.
                            </div>
                            <div v-if="!errors.companyName && companyNameExists" class="invalid-feedback-alter">Company Name Already
                                Taken
                            </div>
                            <div class="invalid-server-feedback" v-if="errors.companyName">{{ errors.companyName[0] }}</div>
                        </div>
                        <div class="form-group">
                            <label for="companyPhone" class="control-label font-weight-bold">Company Phone Number<span
                                class="text-danger">*</span></label>
                            <input
                                type="text"
                                v-model="form.companyPhone"
                                class="form-control"
                                ref="companyPhone"
                                :class="{ 'is-invalid': $v.form.companyPhone.$error }"
                                id="companyPhone"
                                placeholder="(XXX) XXX-XXXX"
                                autocomplete="off"
                                @input="acceptPhoneNumber"
                            />
                            <div v-if="$v.form.companyPhone.$error" class="invalid-feedback">
                                <span v-if="!$v.form.companyPhone.required">Company Phone Number is required</span>
                                <span v-else-if="!$v.form.companyPhone.phoneValid">Phone Number is not valid</span>
                            </div>
                            <span class="invalid-feedback" role="alert" v-if="errors.companyPhone">
                                <strong>{{ errors.companyPhone[0] }}</strong>
                            </span>
                        </div>
                        <!--<div class="form-group">
                            &lt;!&ndash;<label class="control-label font-weight-bold">Headquarters Geographic Location<span
                                class="text-danger">*</span>
                                <span class="" v-b-tooltip.hover title="US Only for Beta"><i
                                    class="fas fa-question-circle text-dark"></i></span>
                            </label>&ndash;&gt;
                            &lt;!&ndash; <input type="text" class="form-control" name="address" placeholder="Address 1"
                                   autocomplete="off"
                                   :class="{ 'is-invalid': $v.form.hq_address.$error }"
                                   v-model="form.hq_address"
                            >
                            <div v-if="!$v.form.hq_address.required" class="invalid-feedback">
                                Address is
                                required.
                            </div>
                            <br/>
                            <input type="text" class="form-control" placeholder="Address 2"
                                   autocomplete="off" v-model="form.hq_address2">
                            <br/>
                            <input type="text" class="form-control" placeholder="City"
                                   autocomplete="off"
                                   :class="{ 'is-invalid': $v.form.hq_city.$error }"
                                   v-model="form.hq_city">
                            <div v-if="!$v.form.hq_city.required" class="invalid-feedback">
                                City is
                                required.
                            </div> &ndash;&gt;
                            &lt;!&ndash;<br/>
                            <div class="row">
                                <div class="col-md-6 mb-4 mb-md-0">
                                    <v-select label="name" :options="StateLists" v-model="form.hq_state"
                                              :filterBy="filterMatchFirstCharacter"
                                              :clearable="false"
                                              :class="{ 'is-invalid': $v.form.hq_state.$error }"
                                              placeholder="Select State"
                                              :reduce="option => option.id"
                                    ></v-select>
                                    <div v-if="!$v.form.hq_state.required" class="invalid-feedback">
                                        State is
                                        required.
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    &lt;!&ndash; <input type="text" class="form-control" placeholder="Zip Code"
                                           autocomplete="off"
                                           :class="{ 'is-invalid': $v.form.hq_zip.$error }"
                                           v-model="form.hq_zip">
                                    <div v-if="!$v.form.hq_zip.required" class="invalid-feedback">
                                        Zip Code is
                                        required.
                                    </div> &ndash;&gt;
                                    <v-select label="name" :options="countries" :clearable="false"
                                              placeholder="Select Country" @input="getStates"
                                              :class="{ 'is-invalid': $v.form.hq_country.$error }"
                                              v-model="form.hq_country"
                                              :reduce="option => option.id"
                                              :disabled="true"
                                    ></v-select>
                                    <div v-if="!$v.form.hq_country.required" class="invalid-feedback">
                                        Country is
                                        required.
                                    </div>
                                </div>
                            </div>
                            <br/>&ndash;&gt;
                            <div class="row">
                                <div class="col-md-12 mb-4 mb-md-0">
                                    <label for="companyIndustry" class="control-label font-weight-bold">
                                        Company Industry
                                        <span class="text-danger">*</span>
                                    </label>

                                    <v-select label="description"
                                      :filterBy="filterMatchFirstCharacter"
                                      :class="{ 'is-invalid': $v.form.company_industry.$error }"
                                      :options="industries" v-model="form.company_industry" :clearable="false"
                                      placeholder="Select Industry"
                                      :reduce="option => option.id"
                                    ></v-select>
                                    <div v-if="!$v.form.company_industry.required" class="invalid-feedback">
                                        Industry is
                                        required.
                                    </div>
                                </div>
                            </div>
                        </div>-->
                        <div class="form-group">
                            <label for="password" class="control-label font-weight-bold">Password<span
                                class="text-danger">*</span></label>
                            <!--:type="fieldPassword"-->
                            <div class="input-group">
                                <input
                                    :type="fieldPassword"
                                    v-model="form.password"
                                    class="form-control"
                                    ref="password"
                                    :class="{ 'is-invalid': $v.form.password.$error }"
                                    id="password"
                                    value=""
                                    name="password"
                                    v-on:keyup=$v.form.password.$touch()
                                    placeholder="Type in your password"
                                    autocomplete="off"
                                    @focus="handleType"
                                    @blur="handleType"
                                    @click.right.prevent @copy.prevent @cut.prevent @paste.prevent
                                />
                                <div class="input-group-append">
                                    <span class="btn show-password-icon">
                                        <a href="javascript:;" @click.prevent="showPassword"
                                           :class="{ active: isPasswordViewActive }">
                                            <i class="fas fa-eye" v-if="isPasswordViewActive"></i>
                                            <i class="fas fa-eye-slash" v-else></i>
                                        </a>
                                    </span>
                                </div>
                                <div v-if="$v.form.password.$error" class="invalid-feedback">
                                    <span v-if="!$v.form.password.required">Password is required</span>
                                    <span
                                        v-else-if="!$v.form.password.minLength">Password must be at least 8 characters</span>
                                    <span v-else-if="!$v.form.password.patternValid">Password must contain at least one number and one letter and one special character</span>
                                </div>
                                <div class="password-suggestion w-100"
                                     v-if="!$v.form.password.$error && !form.password">
                                    Use 8 or more characters with a mix of numbers, letters & special character
                                </div>
                                <span class="invalid-feedback" role="alert" v-if="errors.password">
                                    <strong>{{ errors.password[0] }}</strong>
                                </span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password_confirmation" class="control-label font-weight-bold">Confirm
                                Password<span class="text-danger">*</span></label>
                            <div class="input-group">
                                <input
                                    :type="fieldPassword"
                                    v-model="form.password_confirmation"
                                    class="form-control"
                                    ref="password_confirmation"
                                    :class="{ 'is-invalid': $v.form.password_confirmation.$error }"
                                    v-on:keyup=$v.form.password_confirmation.$touch()
                                    id="password_confirmation"
                                    placeholder="Type in your confirm password"
                                    autocomplete="off"
                                    name="password_confirmation"
                                    @click.right.prevent @copy.prevent @cut.prevent @paste.prevent
                                />
                                <div class="input-group-append">
                                    <span class="btn show-password-icon">
                                        <a href="javascript:;" @click.prevent="showPassword"
                                           :class="{ active: isPasswordViewActive }">
                                            <i class="fas fa-eye" v-if="isPasswordViewActive"></i>
                                            <i class="fas fa-eye-slash" v-else></i>
                                        </a>
                                    </span>
                                </div>
                                <div v-if="$v.form.password_confirmation.$error" class="invalid-feedback">
                                    <span
                                        v-if="!$v.form.password_confirmation.required || !$v.form.password_confirmation.sameAsPassword">
                                        Passwords do not match.
                                    </span>
                                </div>
                                <span class="text-danger" v-if="errors.password_confirmation">
                                {{ errors.password_confirmation[0] }}
                              </span>
                            </div>
                        </div>
                        <div class="form-group form-check">
                            <label class="form-check-label control-label font-weight-bold">
                                <input class="form-check-input" type="checkbox" name="terms"
                                       v-model="form.termsConditions"
                                       :class="{ 'is-invalid': $v.form.termsConditions.$error }">
                                By checking this box, I acknowledge that I have read and agreed to the
                                <router-link to="/termsofservice" target="_blank" class="theme-color">Terms of Service
                                </router-link>
                                and the
                                <router-link to="/privacypolicy" target="_blank" class="theme-color">Privacy Policy<span
                                    class="text-danger">*</span></router-link>
                                <div v-if="!$v.form.termsConditions.required" class="invalid-feedback">Please agree to
                                    the terms of service and privacy policy before signup!
                                </div>
                            </label>
                        </div>
                        <div class="form-group form-check">
                            <label class="form-check-label control-label font-weight-bold">
                                <input class="form-check-input" type="checkbox" name="terms"
                                       v-model="form.allowUpdateNotification">
                                You agree to receive updates, notifications and other communications from Issuer Pixel
                                Inc. You may opt out anytime.
                            </label>
                        </div>
                        <div class="form-group">
                            <div id="recaptcha-main"></div>
                            <span :class="{ 'is-invalid': $v.form.recaptcha_response_value.$error }"></span>
                            <div v-if="!$v.form.recaptcha_response_value.required" class="invalid-feedback">Please tick recaptcha</div>
                        </div>
                        <div class="text-center">
                            <button class="btn btn-back-next btn-block" :disabled='! form.termsConditions'>Get Started
                            </button>
                        </div>
                        <div class="form-group text-center">
                            <label class="form-check-label control-label font-weight-bold">
                                <p class="mt-4">Have an account? Please
                                    <router-link to="/login" class="theme-color">Login</router-link>
                                </p>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer></Footer>
        <loader :is-visible="isLoading"></loader>
    </section>
</template>

<script>
    import Navigation from "../components/Navigation.vue";
    import User from "../apis/User";
    import {required, minLength, between, sameAs} from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                form: {
                    firstName: "",
                    lastName: "",
                    email: "",
                    companyName: "",
                    companyPhone: "",
                    // hq_address: "",
                    // hq_address2: "",
                    // hq_city: "",
                    // hq_zip: "",
                    /*hq_state: "",
                    hq_country: 1, /!*Currently set as default 1 (US)*!/
                    company_industry: "",*/
                    password: "",
                    password_confirmation: "",
                    termsConditions: false,
                    allowUpdateNotification: false,
                    recaptcha_response_value: "",
                },
                isLoading: false,
                fieldPassword: "text",
                fieldEmail: 'text',
                isPasswordViewActive: false,
                countries: [],
                StateLists: [],
                industries: [],
                errors: [],
                email_exists: false,
                companyNameExists: false,
                autofillWork: true,
                showPasswordClick: true,
            };
        },
        validations: {
            form: {
                firstName: {required},
                lastName: {required},
                companyName: {required},
                companyPhone: {
                    required,
                    phoneValid: function (value) {
                        const containsNumber = /[0-9]/.test(value)
                        const pattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(value);
                        return containsNumber && pattern
                    }
                },
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
                // hq_address: {required},
                // hq_city: {required},
                // hq_zip: {required},
                // hq_state: {required},
                // hq_country: {required},
                // company_industry: {required},
                password: {
                    required, minLength: minLength(8),
                    patternValid: function (value) {
                        const containsLetter = /[A-Za-z]/.test(value)
                        const containsNumber = /[0-9]/.test(value)
                        const containsSpecial = /[#?!@$%^&*-]/.test(value)
                        return containsLetter && containsNumber && containsSpecial
                    }
                },
                password_confirmation: {required, sameAsPassword: sameAs('password')},
                termsConditions: {
                    checked: value => value === true
                },
                recaptcha_response_value: {required},
            }

        },
        methods: {
            handleType(event) {
                const {srcElement, type} = event;
                const {name, value} = srcElement;
                if (this.autofillWork) {
                    if (type === 'blur' && !value) {
                        this.fieldPassword = 'text'
                    } else {
                        this.fieldPassword = 'password'
                    }
                }
            },
            handleTypeEmail(event) {
                const {srcElement, type} = event;
                const {name, value} = srcElement;
                if (type === 'blur' && !value) {
                    this.fieldEmail = 'text'
                } else {
                    this.fieldEmail = 'email'
                }
            },
            async businessDomainEmailTesting(event) {
                //Auto fill prevent
                const {srcElement, type} = event;
                const {name, value} = srcElement;
                if (type === 'blur' && !value) {
                    this.fieldEmail = 'text'
                } else {
                    this.fieldEmail = 'email'
                }
                //End auto fill

                const set = new Set(['gmail.com', "yahoo.com", "icloud.com", "outlook.com", "msn.com"]);
                const domain = this.form.email.substring(this.form.email.lastIndexOf("@") + 1);
                if (set.has(domain)) {
                    var vi = this;
                    $.confirm({
                        title: '',
                        content: "Please use your business domain email address. If you do not have a business domain email address, click OK and proceed with sign up.",
                        columnClass: 'medium',
                        type: 'blue',
                        typeAnimated: true,
                        buttons: {
                            OK: function () {
                            },
                        }
                    }, this);
                }

                const response = await User.emailExistsCheck({email: this.form.email})
                    .catch(error => {
                        console.log(error)
                    });
                this.email_exists = response.data.data;
                //const domain = this.form.email.substring(this.form.email.lastIndexOf("@") + 1);
                /*if (response.data.data == 'domain_exist') {
                    this.form.email = '';
                    $.confirm({
                        title: '',
                        content: "A user from this domain " + domain + " already exists. At this time we only allow one user per organization, please contact support@issuerpixel.com for more information!",
                        columnClass: 'medium',
                        type: 'blue',
                        typeAnimated: true,
                        buttons: {
                            OK: function () {
                            },
                        }
                    }, this);
                } else {
                    this.email_exists = response.data.data;
                }*/
            },

            checkCompanyNameExists() {
                if( !! this.errors.companyName){
                    this.errors.companyName= false
                }
                User.companyNameExistsCheck({companyName: this.form.companyName})
                    .then((response) => {
                        this.companyNameExists = response.data.data;
                    })
                    .catch(error => {
                        console.log(error)
                    });
            },
            signupValidate() {
                this.$v.form.companyName.$touch();
                this.$v.form.firstName.$touch();
                this.$v.form.lastName.$touch();
                this.$v.form.companyPhone.$touch();
                this.$v.form.email.$touch();
                // this.$v.form.hq_address.$touch();
                // this.$v.form.hq_city.$touch();
                // this.$v.form.hq_zip.$touch();
                // this.$v.form.hq_state.$touch();
                // this.$v.form.hq_country.$touch();
                // this.$v.form.company_industry.$touch();
                this.$v.form.password.$touch();
                this.$v.form.password_confirmation.$touch();
                this.$v.form.termsConditions.$touch();
                this.$v.form.recaptcha_response_value.$touch();
                if (this.$v.form.companyName.$invalid || this.$v.form.firstName.$invalid || this.$v.form.lastName.$invalid || this.$v.form.companyPhone.$invalid || this.$v.form.email.$invalid
                    // || this.$v.form.hq_address.$invalid || this.$v.form.hq_city.$invalid || this.$v.form.hq_zip.$invalid
                    // || this.$v.form.hq_state.$invalid
                    // || this.$v.form.hq_country.$invalid|| this.$v.form.company_industry.$invalid
                    || this.$v.form.password.$invalid || this.$v.form.password_confirmation.$invalid || this.$v.form.termsConditions.$invalid
                    || this.$v.form.recaptcha_response_value.$invalid) {
                    if (this.$v.form.firstName.$invalid) {
                        this.$refs.firstName.focus();
                    } else if (this.$v.form.lastName.$invalid) {
                        this.$refs.lastName.focus();
                    } else if (this.$v.form.email.$invalid) {
                        this.$refs.email.focus();
                    } else if (this.$v.form.companyName.$invalid) {
                        this.$refs.companyName.focus();
                    } else if (this.$v.form.companyPhone.$invalid) {
                        this.$refs.companyPhone.focus();
                    } else if (this.$v.form.password.$invalid) {
                        this.$refs.password.focus();
                    } else if (this.$v.form.password_confirmation.$invalid) {
                        this.$refs.password_confirmation.focus();
                    }
                    return false;
                }
                this.isLoading = true
                User.register(this.form)
                    // .then(() => {
                    //   this.$router.push({ name: "Login" });
                    // })
                    .then(() => {
                        User.login(this.form)
                            .then((response) => {
                                    localStorage.setItem("userInfo", JSON.stringify(response.data.data));
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
                            })
                    })
                    .catch(error => {
                        if (error.response.status === 422) {
                            this.isLoading = false;
                            this.errors = error.response.data.error.message;
                        } else {
                            console.log(error)
                        }
                    });

            },
            getCountries () {
                axios.get('/api/country-list')
                    .then(response => {
                        this.countries = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getStates: function (value) {
                /*Set country as default US which table ID is 1*/
                axios.get('/api/get-state-list/1')
                    .then(response => {
                        this.StateLists = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            getIndustries: async function () {
                await axios.get('/api/industry-list')
                    .then(response => {
                        this.industries = response.data.data
                        this.isLoading = false
                    })
                    .catch(error => console.log(error))
            },
            filterMatchFirstCharacter: function (option, label, search) {
                return (label || '').toLowerCase().startsWith(search.toLowerCase())
            },
            acceptPhoneNumber() {
                var x = this.form.companyPhone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
                this.form.companyPhone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
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
            showPassword() {
                this.autofillWork = false;
                if (this.showPasswordClick == true && (this.fieldPassword === "text" || this.fieldPassword === "password")) {
                    this.showPasswordClick = false;
                    this.fieldPassword = 'text';
                } else {
                    this.fieldPassword = (this.fieldPassword === "password") ? "text" : "password";
                }
                this.isPasswordViewActive = this.isPasswordViewActive === "active" ? "" : "active";
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
        created: function () {
            this.goBackToPageTopAndNextFieldToEnter();
            // this.getCountries();
            // this.getIndustries();
            // this.getStates();
            this.initReCaptcha();
        },
        components: {
            vSelect: () => import("vue-select"),
            Footer: () => import("../components/Footer"),
            loader: () => import("../components/Loader"),
            Navigation
        }
    };
</script>
