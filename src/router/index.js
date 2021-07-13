import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Thanks from "../views/Thanks.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/thanks",
    name: "Thanks",
    component: Thanks,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
