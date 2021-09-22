<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="card-body p-4 p-sm-5">
        <h5 class="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
        <form>
          <div class="form-floating mb-5">
            <input
              type="email"
              class="form-control rounded-pill"
              id="floatingInput"
              placeholder=""
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-5">
            <input
              type="password"
              class="form-control rounded-pill"
              id="floatingPassword"
              placeholder="Password"
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
          <router-link to="/register">
            <a href="#">Register, if you doesn't have account</a>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  background: linear-gradient(rgb(138, 56, 226), rgb(164, 70, 226));
  margin-top: 50px;
  height: 600px;
  width: 1000px;
}

#btn-submit {
  background: linear-gradient(rgb(138, 56, 226), rgb(164, 70, 226));
  color: white;
}
</style>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>