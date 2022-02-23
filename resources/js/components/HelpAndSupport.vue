<template>
    <div >
        <form v-on:submit.prevent="contactUs">
            <div class="row">
                <div class="col-12">
                    <div class="form-group">
                        <input
                            v-model="name"
                            type="text"
                            class="form-control form-control-lg"
                            id="name"
                            disabled
                            autocomplete="off"/>
                    </div>
                    <div class="form-group">
                        <input
                            v-model="email"
                            type="email"
                            class="form-control form-control-lg"
                            autocomplete="off"
                            disabled
                        />
                    </div>
                    <div class="form-group">
                        <input
                            v-model="phone"
                            type="text"
                            class="form-control form-control-lg"
                            id="phone"
                            disabled
                            autocomplete="off"/>
                    </div>
                    <div class="form-group">
                            <textarea
                                v-model="form.message"
                                class="form-control form-control-lg"
                                ref="message"
                                :class="{ 'is-invalid': $v.form.message.$error }"
                                id="message"
                                rows="5"
                                placeholder="What are you thinking?"></textarea>
                        <div v-if="!$v.form.message.required" class="invalid-feedback">Message is required.</div>
                        <div class="invalid-server-feedback" v-if="errors.message">{{ errors.message[0] }}</div>
                    </div>
                    <div class="form-check">
                        <button type="submit" class="btn btn-theme-purple float-right rounded-pill py-2 px-5 hs-modal-submit-btn" :disabled='isDisabled'>Submit</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import User from "../apis/User";
    import {required} from 'vuelidate/lib/validators'
    export default {
        data() {
            return {
                form: {
                    message: "",
                },
                name: '',
                email: '',
                phone: '',
                errors: [],
                isDisabled: false,
            };
        },
        validations: {
            form: {
                message: {required},
            }

        },
        methods: {
            contactUs() {
                this.$v.form.message.$touch();
                if (this.$v.form.message.$invalid ) {
                     if (this.$v.form.message.$invalid) {
                        this.$refs.message.focus();
                    }
                    return false;
                }
                this.isDisabled = true;
                User.supportContact(this.form)
                    .then(() => {
                        $.confirm({
                            title: '',
                            content: "Support Request sent successfully, a representative will contact you within the next business day.",
                            columnClass: 'medium',
                            type: 'blue',
                            typeAnimated: true,
                            buttons: {
                                Ok: function () {
                                },
                            }
                        });
                        this.$emit('helpAndSupportSuccess')
                    })
                    .catch(error => {
                        if (error.response.status === 422) {
                            this.errors = error.response.data.error.message;
                        }
                    });
            },
        },
        mounted() {
            const user = JSON.parse(localStorage.getItem("info"));
            this.name = user.name;
            this.email = user.email;
            this.phone = user.phone;
        },
        components: {
            loader: () => import("../components/Loader"),
        }
    };
</script>
<style scoped>
    .form-control:disabled, .form-control[readonly]{
        background-color: #e9ecef !important;
    }

    .hs-modal-submit-btn {
        background: #1e0857;
        font-size: 16px;
    }

    .form-control-lg {
        font-size: 16px !important;
    }
</style>

