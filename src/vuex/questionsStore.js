import { store } from "./index";

export default {
  namespaced: true,
  state: {
    recq: {
      recq_1: {
        ques: "この学校に入学を決めた理由はなんですか？",
        ans: "",
        links: [],
      },
      recq_2: {
        ques: "講義は楽しいですか？ 難しいですか？",
        ans: "",
        links: [],
      },
      recq_3: {
        ques: "一番ためになった授業・講義を教えてください",
        ans: "",
        links: [],
      },
      recq_4: {
        ques: "研究室を選ぶ際の決め手はなんですか？",
        ans: "",
        links: [],
      },
    },
    faq: {
      faq_1: {
        ques: "この学科で取得できる資格はなんですか？",
        ans: "しるか",
        links: [
          {
            name: "▶︎ 井ノ上寛人助教（情報メディア学科公式HP）",
            url: "https://www.im.dendai.ac.jp/laboratory/mal-2/",
          },
        ],
      },
      faq_2: {
        ques: "この資格の合格率はどのくらいですか？",
        ans: "しるか",
        links: [],
      },
    },
  },
  getters: {
    getAllRecommendQuestionsData(state) {
      return state.recq;
    },
    getAllFAQData(state) {
      return state.faq;
    },
  },
};
