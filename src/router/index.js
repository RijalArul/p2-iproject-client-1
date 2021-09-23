import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import HistoryMeeting from "../views/History.vue";
import Discord from "../views/Discord.vue"
import AddMeeting from "../views/AddMeeting.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/discord",
    name: "Discord",
    component: Discord,
  },
  {
    path: "/add",
    name: "AddMeeting",
    component: AddMeeting,
  },
  {
    path: "/history",
    name: "HistoryMeeting",
    component: HistoryMeeting,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const access_token = localStorage.getItem('access_token');

  if((to.name === "Login" || to.name === "Register") && access_token) {
    next({name: "Home"})
  } else {
    next();
  }
})

export default router;
