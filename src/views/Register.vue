<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-10 col-lg-6 mx-auto mt-5" id="card">
          <div class="card border-0 shadow rounded-3 my-5">
            <div class="card-body p-4 p-sm-5">
              <h5 class="card-title text-center mb-5 fw-light fs-5">Sign Up</h5>
              <form @submit.prevent="handleRegister">
                <div class="form-floating mb-5">
                  <input
                    type="text"
                    class="form-control rounded-pill"
                    id="floatingInput"
                    placeholder=""
                    v-model="username"
                  />
                  <label for="floatingInput">Username</label>
                </div>
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
                <div class="form-floating mb-5">
                  <input
                    type="text"
                    class="form-control rounded-pill"
                    id="floatingInput"
                    placeholder=""
                    v-model="idDiscord"
                  />
                  <label for="floatingInput">Id Discord</label>
                </div>

                <div class="d-grid">
                  <button
                    class="btn btn-login text-uppercase fw-bold"
                    id="btn-submit"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
                <hr class="my-4" />
                <router-link to="/login">
                  <a href="#">Login, if you have account</a>
                </router-link>
              </form>
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
  height: 900px;
  width: 2200px;
}

#btn-submit {
  background: linear-gradient(rgb(136, 43, 235), rgb(174, 81, 236));
  color: aliceblue;
}

.card {
  height: 705px;
}
</style>

<script>
export default {
    data() {
        return {
            username: '',
            email: '',
            password: '',
            idDiscord: ''
        }
    },
    methods: {
        handleRegister() {
            const payload = {
                username: this.username,
                email: this.email,
                password: this.password,
                idDiscord: this.idDiscord
            }

            this.$store.dispatch('actionHandleRegister', payload)
        }
    }
}
</script>