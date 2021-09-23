import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router"

const BASE_URL = `http://localhost:3000`

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meetings: []
  },
  mutations: {
    SET_MEETINGS(state, payload) {
      state.meetings = payload
    }
  },
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
    },
    actionFetchMeetings(context) {
      axios.get(`${BASE_URL}/meetings/active`, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then((response) => {
          context.commit('SET_MEETINGS', response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    actionAddMeeting(context, payload) {
      axios.post(`${BASE_URL}/meetings`, payload, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then(() => {
          router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  modules: {},
});
