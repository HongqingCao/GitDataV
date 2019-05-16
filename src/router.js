import Vue from "vue";
import Router from "vue-router";
import index from "@/views/app";
import data from "@/views/data";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      component: index
    },
    {
      path: "/data",
      name: "data/",
      component: index
    },
    {
      path: "/data/:user",
      name: "data",
      component: data
    }
  ]
});
