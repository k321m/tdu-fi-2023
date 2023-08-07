import { createRouter, createWebHistory } from "vue-router";
import Top from "./views/TopView.vue";
import MyNote from "./views/MyNoteView.vue";
import Department from "./views/DepartmentView.vue";
import Labs from "./views/LabsView.vue";
import LectureVideo from "./views/LectureVideoView.vue";
import QuestionsTop10 from "./views/QuestionsTop10View.vue";
import Faq from "./views/FaqView.vue";
import Login from "./views/LoginView.vue";
import Attention from "./views/AttentionView.vue";
import ProgrammingEXP from "./views/ProgrammingExperienceView.vue";
import Question1 from "./views/ProgrammingQuestions/CreateCircleView.vue";
import Question2 from "./views/ProgrammingQuestions/CreateFourCirclesView.vue";
import Question3 from "./views/ProgrammingQuestions/FalldownBallView.vue";
import Question4 from "./views/ProgrammingQuestions/ReturnBallView.vue";
import Question5 from "./views/ProgrammingQuestions/BouncingBallView.vue";
import basics from "./views/ProgrammingQuestions/ProcessingBasicsView.vue";
import { store } from "./vuex/index.js";

const PASSWORD =
  "1ff2739722dea85e4e7b5fbd291e40ababdd42b841ce64fa9b2ae08a94899284";

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
      path: "/questions-top10",
      name: "questions-top10",
      component: QuestionsTop10,
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
    {
      path: "/basics",
      name: "basics",
      component: basics,
      meta: { require: true },
    },
    {
      path: "/question1",
      name: "question1",
      component: Question1,
      meta: { require: true },
    },
    {
      path: "/question2",
      name: "question2",
      component: Question2,
      meta: { require: true, unclocked2: true },
    },
    {
      path: "/question3",
      name: "question3",
      component: Question3,
      meta: { require: true, unclocked3: true },
    },
    {
      path: "/question4",
      name: "question4",
      component: Question4,
      meta: { require: true, unclocked4: true },
    },
    {
      path: "/question5",
      name: "question5",
      component: Question5,
      meta: { require: true, unclocked5: true },
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      // 特定のIDが指定された場合のみスクロール処理を行う
      const element = document.querySelector(to.hash);
      if (element) {
        const offset = 72; // 72px下にスクロール
        const y = element.getBoundingClientRect().top + window.scrollY - offset;
        return { top: y, behavior: "smooth" };
      }
    } else {
      return { top: 0, behavior: "smooth" };
    }
    // if (to.hash) {
    //   return { el: to.hash };
    // } else {
    //   return { top: 0 };
    // }
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
      // Missionのクリア数に合わせたアクセス権限の設定
      if (to.meta.unclocked2 && store.getters.getClearedMissionNum < 1) {
        next({ name: "programming" });
      } else if (to.meta.unclocked3 && store.getters.getClearedMissionNum < 2) {
        next({ name: "programming" });
      } else if (to.meta.unclocked4 && store.getters.getClearedMissionNum < 3) {
        next({ name: "programming" });
      } else if (to.meta.unclocked5 && store.getters.getClearedMissionNum < 4) {
        next({ name: "programming" });
      } else {
        next();
      }
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
