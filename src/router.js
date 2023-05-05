import { createRouter, createWebHistory } from "vue-router";
import Top from "./views/Top.vue";
import Labs from "./views/Labs.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      component: Top,
    },
    {
      path: "/labs",
      name: "labs",
      component: Labs,
    },
  ],
});
