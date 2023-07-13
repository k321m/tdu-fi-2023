import { createRouter, createWebHistory } from "vue-router";
import Top from "./views/TopView.vue";
import MyNote from "./views/MyNoteView.vue";
import Department from "./views/DepartmentView.vue";
import Labs from "./views/LabsView.vue";
import LectureVideo from "./views/LectureVideoView.vue";
import Questions from "./views/QuestionsView.vue";
import Faq from "./views/FaqView.vue";
import Login from "./views/LoginView.vue";
import Attention from "./views/AttentionView.vue";
import ProgrammingEXP from "./views/ProgrammingExperienceView.vue";
import { store } from "./vuex/index.js";

const PASSWORD =
  "183d977fa4efbbe3ff4fe12b3debe9fbf5a3104e1fd2a1633d4514513c6c8c29";

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
      path: "/department",
      name: "department",
      component: Department,
      meta: { require: true },
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
      path: "/faq",
      name: "faq",
      component: Faq,
      meta: { require: true },
    },
    {
      path: "/my-note",
      name: "my-note",
      component: MyNote,
      meta: { require: true },
    },
    {
      path: "/attention",
      name: "attention",
      component: Attention,
      meta: { require: true },
    },
    {
      path: "/programming",
      name: "programming",
      component: ProgrammingEXP,
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
  // ログイン済みのユーザが"/login"にアクセスした場合の処理
  if (to.name == "login" && store.getters.getPassword == PASSWORD) {
    next({ name: "index" });
    return;
  }

  // 入力された内容が正しい場合
  sha256(store.state.tmpPassword).then((hash) => {
    // ローカルストレージにパスワードが残っているか
    if (to.meta.require && store.getters.getPassword != PASSWORD) {
      if (hash == PASSWORD) {
        store.commit("savePassword", hash);
        next({ name: "index" });
        return;
      }
      // 入力された内容が誤っている場合
      if (store.state.tmpPassword) {
        store.commit("updateMissedPassword");
      }
      next({ name: "login" });
    } else {
      next();
    }
  });
});

const sha256 = async (text) => {
  const uint8 = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", uint8);
  return Array.from(new Uint8Array(digest))
    .map((v) => v.toString(16).padStart(2, "0"))
    .join("");
};
