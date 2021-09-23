import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router"

const BASE_URL = `http://localhost:3000`

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    actionHandleLogin(context, payload) {
      // console.log(payload)
      axios.post(`${BASE_URL}/users/login`, payload)
        .then((response) => {
          localStorage.setItem('access_token', response.data.access_token)
          router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {},
});
