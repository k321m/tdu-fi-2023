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
        ques: "普段の学校の雰囲気はどのような感じですか？",
        ans: "",
        links: [],
      },
      recq_3: {
        ques: "講義は難しいですか？どのように勉強していますか？",
        ans: "",
        links: [],
      },
      recq_4: {
        ques: "おすすめの講義はありますか？",
        ans: "",
        links: [],
      },
      recq_5: {
        ques: "一番ためになった授業・講義を教えてください。",
        ans: "",
        links: [],
      },
      recq_6: {
        ques: "オープンキャンパスには何回参加しましたか？",
        ans: "",
        links: [],
      },
      recq_7: {
        ques: "アルバイトはしていますか？",
        ans: "",
        links: [],
      },
      recq_8: {
        ques: "課題は多いですか？ どのくらいの時間を費やしていますか？",
        ans: "",
        links: [],
      },
      recq_9: {
        ques: "どのように就職活動をしましたか？",
        ans: "",
        links: [],
      },
      recq_10: {
        ques: "大学生活の中で特に楽しんでいることは何ですか？",
        ans: "",
        links: [],
      },
      recq_11: {
        ques: "大学のキャリア支援をはじめとするサポート制度を利用した経験はありますか？",
        ans: "",
        links: [],
      },
      recq_12: {
        ques: "将来の夢や目標はどの時点でどのように決まりましたか？",
        ans: "",
        links: [],
      },
      recq_13: {
        ques: "私の将来の夢、目標を達成するためにはどのような取り組みをすればいいと思いますか？",
        ans: "",
        links: [],
      },
      recq_14: {
        ques: "研究室（研究グループ）での活動頻度や雰囲気について教えてください。",
        ans: "",
        links: [],
      },
      recq_15: {
        ques: "研究室（研究グループ）では教授とコミュニケーションをどのようにとられているのでしょうか？",
        ans: "",
        links: [],
      },
    },
    faq: {
      faq_1: {
        ques: "この学科で取得できる資格はなんですか？",
        ans: "",
        links: [
          {
            name: "▶︎ 井ノ上寛人助教（情報メディア学科公式HP）",
            url: "https://www.im.dendai.ac.jp/laboratory/mal-2/",
          },
        ],
      },
      faq_2: {
        ques: "この資格の合格率はどのくらいですか？",
        ans: "",
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
