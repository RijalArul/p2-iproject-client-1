<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-10 col-lg-6 mx-auto mt-5" id="card">
          <div class="card border-0 shadow rounded-3 my-5">
            <div class="card-body p-4 p-sm-5">
              <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
              <form @submit.prevent="handleLogin">
                <div class="form-floating mb-5">
                  <input
                    type="email"
                    class="form-control rounded-pill"
                    id="floatingInput"
                    placeholder=""
                    v-model="email"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-5">
                  <input
                    type="password"
                    class="form-control rounded-pill"
                    id="floatingPassword"
                    placeholder="Password"
                    v-model="password"
                  />
                  <label for="floatingPassword">Password</label>
                </div>

                <div class="d-grid">
                  <button
                    class="btn btn-login text-uppercase fw-bold"
                    id="btn-submit"
                    type="submit"
                  >
                    Sign in
                  </button>
                </div>
                <hr class="my-4" />
              </form>
              <GoogleLogin
                :params="params"
                :renderParams="renderParams"
                :onSuccess="onSuccess"
                :onFailure="onFailure"
              ></GoogleLogin>
              <router-link to="/register">
                <a href="#">Register, if you doesn't have account</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background: linear-gradient(rgb(136, 43, 235), rgb(174, 81, 236));
  height: 720px;
  width: 2200px;
}

#btn-submit {
  background: linear-gradient(rgb(136, 43, 235), rgb(174, 81, 236));
  color: aliceblue;
}

.card {
  height: 555px;
}
</style>

<script>
import GoogleLogin from "vue-google-login";

export default {
  data() {
    return {
      email: "",
      password: "",
      params: {
        client_id:
          "440009139360-b104s2hjg9tsujc45b586nob96d08a9b.apps.googleusercontent.com",
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true,
      },
    };
  },
  components: {
    GoogleLogin,
  },
  methods: {
    handleLogin() {
      const payload = {
        email: this.email,
        password: this.password,
      };

      this.$store.dispatch("actionHandleLogin", payload);
    },

    onSuccess(googleUser) {
      var id_token = googleUser.getAuthResponse().id_token;
      const user = googleUser.getBasicProfile();

      const payload = {
        username: user.uU,
        idToken: id_token,
        email: user.Ot,
      };

      this.$store.dispatch("actionGoogleLogin", payload);
    },
  },
};
</script>