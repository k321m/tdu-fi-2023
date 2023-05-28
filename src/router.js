import { createRouter, createWebHistory } from "vue-router";
import Top from "./views/TopView.vue";
import MyNote from "./views/MyNoteView.vue";
import Labs from "./views/LabsView.vue";
import LectureVideo from "./views/LectureVideoView.vue";

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
    {
      path: "/lecture-video",
      name: "lecture-video",
      component: LectureVideo,
    },
    {
      path: "/my-note",
      name: "my-note",
      component: MyNote,
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
