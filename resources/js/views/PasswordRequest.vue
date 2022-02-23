<template>
    <section>
        <Navigation />
        <div class="container  mt-5" data-aos="fade-up">
            <div class="row login-container">
                <div class="col-lg-5 col-md-6 mx-auto my-4 bg-white rounded py-3">
                    <h2 class="text-center mb-2">Reset Password</h2>
                    <p class="text-center mb-4">Forgot your password? Please enter your account email below and we will
                        send you a Reset Link if your email is registered with us.</p>

                    <div class="alert alert-success" role="alert" v-if="success">
                        {{ success }}
                    </div>

                    <form v-on:submit.prevent="forgot">
                        <div class="form-group">
                            <label for="email" class="control-label font-weight-bold">Email</label>
                            <input
                                type="email"
                                v-model="form.email"
                                class="form-control"
                                :class="validateError ? 'is-invalid' : ''"
                                id="email"
                                placeholder="Type in your email address"
                                autocomplete="off"
                                required="required"
                            />
                            <span class="invalid-feedback" role="alert" v-if="errors.email">
                                <strong>{{ errors.email[0] }}</strong>
                            </span>
                        </div>
                        <div class="text-center mt-4">
                            <button class="btn btn-back-next">
                                Request new password
                            </button>
                            <p class="mt-4">Don't have an account?
                                <router-link
                                    class="theme-color"
                                    :to="{ name: 'SignUp' }">
                                    Register</router-link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <loader :is-visible="isLoading"></loader>
    </section>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import User from "../apis/User";

export default {
  data() {
    return {
      form: {
        email: ""
      },
        errors: [],
        isLoading: false,
        validateError: false,
        success: '',
    };
  },
  methods: {
      forgot() {
        this.isLoading = true
        this.validateError = false
          User.forgot(this.form)
            .then((res) => {
                this.isLoading = false;
                this.success =  res.data.success.message
                this.form.email = ""
            })
            .catch(error => {
              if (error.response.status === 422) {
                  this.isLoading = false;
                  this.validateError = true;
                this.errors = error.response.data.error.message;
              }
         });
    }
  },
    components: {
        loader: () => import("../components/Loader"),
        Navigation
    }
};
</script>
