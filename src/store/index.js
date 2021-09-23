import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router"
import Swal from "sweetalert2";

const BASE_URL = `https://hacktiv8-discord-bot-alert.herokuapp.com`

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meetings: [],
    histories: []
  },
  mutations: {
    SET_MEETINGS(state, payload) {
      state.meetings = payload
    },
    SET_HISTORY_MEETINGS(state, payload) {
      state.histories = payload
    }
  },
  actions: {
    actionHandleLogin(context, payload) {
      axios.post(`${BASE_URL}/users/login`, payload)
        .then((response) => {
          localStorage.setItem('access_token', response.data.access_token)
          router.push('/')
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.message}`
          })
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
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.message}`
          })
        })
    },
    actionHandleRegister(context, payload) {
      axios.post(`${BASE_URL}/users/register`, payload)
        .then((response) => {
          localStorage.setItem('access_token', response.data.access_token)
          router.push('/')
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.message}`
          })
        })
    },
    actionFetchHistory(context) {
      axios.get(`${BASE_URL}/meetings`, {
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
        .then((response) => {
          context.commit('SET_HISTORY_MEETINGS', response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    actionGoogleLogin(context, payload) {
      axios.post(`${BASE_URL}/users/google`, payload)
        .then((response) => {
          localStorage.setItem('access_token', response.data.access_token)
          router.push(`/`)
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${err.response.data.message}`
          })
        })
    }
  },
  modules: {},
});
