import { createRouter, createWebHistory } from "vue-router";
import Top from "./views/TopView.vue";
import MyNote from "./views/MyNoteView.vue";
import Labs from "./views/LabsView.vue";
import LectureVideo from "./views/LectureVideoView.vue";
import Questions from "./views/QuestionsView.vue";
import Login from "./views/LoginView.vue";
import { store } from "./vuex/index.js";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      component: Top,
      meta: { require: true },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/labs",
      name: "labs",
      component: Labs,
      meta: { require: true },
    },
    {
      path: "/lecture-video",
      name: "lecture-video",
      component: LectureVideo,
      meta: { require: true },
    },
    {
      path: "/questions",
      name: "questions",
      component: Questions,
      meta: { require: true },
    },
    {
      path: "/my-note",
      name: "my-note",
      component: MyNote,
      meta: { require: true },
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash };
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  if (to.meta.require && store.getters.getPassword != "tdufioc06") {
    next({ name: "login" });
  } else {
    next();
  }
});
