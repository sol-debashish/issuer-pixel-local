<template>
    <section>
        <Navigation />
        <div class="container  mt-5 mb-5" data-aos="fade-up">
            <div class="row login-container">
                <div class="col-md-4 mx-auto my-4">

                    <p class="text-center mb-4">You are only one step a way from your new password, recover your password now.</p>

                    <div class="alert alert-success" role="alert" v-if="success">
                        {{ success }}
                    </div>

                    <div class="alert alert-danger" role="alert" v-if="errors.token">
                       {{errors.token[0]}}
                    </div>

                    <form>
                        <input type="hidden" name="token" v-model="form.token">
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input
                                type="email"
                                v-model="form.email"
                                class="form-control"
                                :class="errors.email ? 'is-invalid' : ''"
                                id="email"
                                required="required"
                            />
                            <span class="invalid-feedback" role="alert" v-if="errors.email">
                                <strong>{{ errors.email[0] }}</strong>
                            </span>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input
                                type="password"
                                v-model="form.password"
                                class="form-control"
                                :class="errors.password ? 'is-invalid' : ''"
                                id="password"
                                required="required"
                            />
                            <span class="invalid-feedback" role="alert" v-if="errors.password">
                                <strong>{{ errors.password[0] }}</strong>
                            </span>
                        </div>
                        <div class="form-group">
                            <label for="password_confirmation">Confirm Password</label>
                            <input
                                type="password"
                                v-model="form.password_confirmation"
                                class="form-control"
                                id="password_confirmation"
                                required="required"
                            />
                            <span class="text-danger" v-if="errors.password_confirmation">
                                {{ errors.password_confirmation[0] }}
                              </span>
                        </div>
                        <div class="text-center mt-4">
                            <button type="button" class="btn btn-back-next" @click.prevent="resetPassword">
                                Reset Password
                            </button>
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
import loader from '../components/Loader'

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        password_confirmation: "",
        token: this.$route.params.token
      },
        errors: [],
        isLoading: false,
        success: '',
    };
  },

  methods: {
      resetPassword() {
        this.isLoading = true
      User.resetPassword(this.form)
        .then((response) => {
            this.isLoading = false;
        })
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
    }
  },
    components : {loader,  Navigation}
};
</script>
