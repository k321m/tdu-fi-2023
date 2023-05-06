import { createRouter, createWebHistory } from "vue-router";
import Top from "./views/TopView.vue";
import Labs from "./views/LabsView.vue";

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
