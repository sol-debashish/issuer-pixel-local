<template>
    <div >
        <form v-on:submit.prevent="sendInternalMessage">
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
                        <textarea
                            v-model="form.message"
                            class="form-control form-control-lg"
                            ref="message"
                            :class="{ 'is-invalid': $v.form.message.$error }"
                            id="message"
                            rows="5"
                            placeholder="What's on your mind?"
                            @keyup="charCount"
                            maxlength="2000"></textarea>
                        <p class="text-right mb-0">({{ totalCharacter }}/2000 characters)</p>
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
        props: ["receiverCompanyId"],
        data() {
            return {
                form: {
                    message: "",
                },
                name: '',
                email: '',
                senderCompanyId: '',
                errors: [],
                isDisabled: false,
                totalCharacter: 0
            };
        },
        validations: {
            form: {
                message: {required},
            }

        },
        methods: {
            sendInternalMessage() {
                this.$v.form.message.$touch();

                if (this.$v.form.message.$invalid ) {
                     if (this.$v.form.message.$invalid) {
                        this.$refs.message.focus();
                    }
                    return false;
                }

                this.isDisabled = true;
                this.form.senderCompanyId = this.senderCompanyId;
                this.form.receiverCompanyId = this.receiverCompanyId;
                
                User.sendInternalMessage(this.form)
                    .then((response) => {
                        toastr.success(response.data.success.message);
                        this.$emit('internalMessageSuccess')
                    })
                    .catch(error => {
                        if (error.response.status != 422) {
                            toastr.error(error.response.data.error.message);
                        }
                    });
            },
            charCount: function() {
                if (this.form.message.length >= 2000) {
                    this.form.message = this.form.message.substring(0,2000);
                }
                this.totalCharacter = this.form.message.length;
            },
        },
        created() {
            const user = JSON.parse(localStorage.getItem("info"));
            this.name = user.company;
            this.email = user.email;
            this.senderCompanyId = user.company_id;
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

