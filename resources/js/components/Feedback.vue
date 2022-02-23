<template>
    <div>
        <div id="fixedSidebar" @click="showFeedbackModal">
            Feedback
        </div>
        <!-- Feedback modal started -->
        <b-modal centered ref="client-feedback-modal" id="client-feedback-modal" size="md" hide-footer title="Feedback">
            <p>Please provide any feedback that will help us improve your satisfaction: </p>
            <div class="row">
                <div class="col-sm-12 form-group">
                    <label>How would you rate (1-5) your satisfaction using our website?</label>
                    <div>
                        <AwesomeVueStarRating @setRating="setRating" :star="this.star" :hasresults="this.hasresults"
                                              :hasdescription="this.hasdescription"
                                              :ratingdescription="this.ratingdescription"/>
                        <span :class="{ 'is-invalid': $v.rating.$error }"></span>
                        <div v-if="!$v.rating.required" class="invalid-feedback">Rating is required.</div>
                    </div>
                </div>

                <div class="col-sm-12 form-group">
                    <textarea class="form-control" type="textarea"
                              v-model="review" :class="{ 'is-invalid': $v.review.$error }"
                              @keyup="charCount"
                              placeholder="Your Comments (2000 Characters max)" maxlength="2000" rows="3" required></textarea>
                    <p class="text-right mb-0">({{ totalCharacter }}/2000 characters)</p>
                    <div v-if="!$v.review.required" class="invalid-feedback mt-0">Comments is required.</div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-6 form-group">
                    <input type="text" class="form-control" v-model="reviewer_name"
                           :class="{ 'is-invalid': $v.reviewer_name.$error }" placeholder="Name" :disabled='isInputDisabled ==1'  required>
                    <div v-if="!$v.reviewer_name.required" class="invalid-feedback">Name is required.</div>
                </div>
                <div class="col-sm-6 form-group">
                    <input type="email" class="form-control" v-model="reviewer_email"
                           :class="{ 'is-invalid': $v.reviewer_email.$error }" placeholder="Email" :disabled='isInputDisabled ==1' required>
                    <div v-if="!$v.reviewer_email.required" class="invalid-feedback">Email is required.</div>
                    <div v-if="!$v.reviewer_email.customEmailValidate" class="invalid-feedback">The email is not
                        valid.
                    </div>
                </div>
            </div>

            <b-button class="mt-3 btn btn-theme-purple btn-block" @click="addFeedback" :disabled='isDisabled'>Submit
            </b-button>
        </b-modal>
        <!-- End Feedback modal -->
    </div>

</template>

<script>
    import {required, email} from 'vuelidate/lib/validators'

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
                review: "",
                totalCharacter:0,
                reviewer_name: "",
                reviewer_email: "",
                star: 0, // default star
                rating: '',
                ratingdescription: [
                    {
                        text: 'Poor',
                        class: 'star-poor'
                    },
                    {
                        text: 'Below Average',
                        class: 'star-belowAverage'
                    },
                    {
                        text: 'Average',
                        class: 'star-average'
                    },
                    {
                        text: 'Good',
                        class: 'star-good'
                    },
                    {
                        text: 'Excellent',
                        class: 'star-excellent'
                    }
                ],
                hasresults: false,
                hasdescription: false,
                isDisabled: false,
                isInputDisabled: 0,
                feedbackFormData: {
                    review: '',
                    reviewer_name: '',
                    reviewer_email: '',
                    rating: '',
                    url: '',
                    _token: ''
                },
            }
        },
        validations: {
            review: {required},
            reviewer_name: {required},
            reviewer_email: {required, customEmailValidate},
            rating: {required},
        },
        methods: {
            //Feedback modal open
            showFeedbackModal() {
                /*Set Name and Email if user already logged in*/
                const user = JSON.parse(localStorage.getItem("info"));
                if (user !== null) {
                    this.reviewer_name = user.name;
                    this.reviewer_email = user.email;
                    this.isInputDisabled = 1;
                } else {
                    this.isInputDisabled = 0;
                    this.reviewer_name = "";
                    this.reviewer_email = "";
                }
                this.star = 0;
                this.rating = '';
                this.review = "";
                this.totalCharacter = 0;
                this.$refs['client-feedback-modal'].show();
                this.$v.$reset();
            },
            //Feedback modal close
            hideFeedbackModal() {
                this.$refs['client-feedback-modal'].hide()
            },
            setRating(value) {
                this.rating = value
            },
            charCount: function(){
                this.totalCharacter = this.review.length;
                if (this.review.length >= 2000) {
                    this.review = this.review.substring(0,2000);
                }
            },
            addFeedback: function () {
                this.$v.review.$touch();
                this.$v.reviewer_name.$touch();
                this.$v.reviewer_email.$touch();
                this.$v.rating.$touch();
                if (this.$v.review.$invalid || this.$v.reviewer_name.$invalid || this.$v.reviewer_email.$invalid || this.$v.rating.$invalid) {
                    return false;
                }
                this.isDisabled = true;
                this.feedbackFormData.review = this.review;
                this.feedbackFormData.reviewer_name = this.reviewer_name;
                this.feedbackFormData.reviewer_email = this.reviewer_email;
                this.feedbackFormData.rating = this.rating;
                this.feedbackFormData.url = window.location.href;
                this.feedbackFormData._token = document.querySelector('meta[name="csrf-token"]').content

                axios.post('/api/feedback', this.feedbackFormData)
                    .then(response => {
                        if (response.data.success) {
                            //toastr.success(response.data.success.message)
                            this.hideFeedbackModal();
                            $.confirm({
                                title: '',
                                content: "Feedback Submitted Successfully! Thank you for submitting your feedback, your input is valuable to us.",
                                columnClass: 'medium',
                                type: 'blue',
                                typeAnimated: true,
                                buttons: {
                                    Ok: function () {
                                    },
                                }
                            });
                            this.isDisabled = false;
                        }
                    })
                    .catch(error => {
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
            AwesomeVueStarRating: () => import("./Rating"),
        }
    };
</script>

<style>
    #fixedSidebar {
        z-index: 1;
        padding-top: 5px;
        width: 100px;
        height: 35px;
        color: #ffffff;
        background-color: #5352ED;
        -ms-transform: rotate(270deg); /* IE 9 */
        transform: rotate(270deg);
        right: -32px;
        position: fixed;
        top: 50%;
        cursor: pointer;
        text-align: center;
        font-weight: bold;
        /*margin-top:-100px;*/
    }
    #fixedSidebar:hover {
        background-color: #3C34AC;
    }

    .modal-title {
        font-weight: 700;
        font-size: 25px;
    }
</style>
