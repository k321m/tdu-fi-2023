import { store } from "./index";

export default {
  namespaced: true,

  state: {
    allLabo: {
      labo_1: {
        eventType: "展示あり",
        title: "情報セキュリティ研究室",
        professor: ["寺田&nbsp;真敏", "教授"],
        tags: ["ネットワークセキュリティ", "暗号応用", "機械学習"],
        place: "1号館4階演習室",
        info: "インターネットの進展に伴いセキュリティが重要な課題になっています。安全を守るだけでなく新しいインターネット応用を実現するために、暗号、不正侵入・攻撃防御技術、機械学習による検知技術、無線LAN・IoTセキュリティ、ITリスク評価技術等の研究を行っています。",
        theme: [
          "表層情報を用いたマルウェア検知精度を維持する機械学習モデル更新手法の検討",
          "ブロックチェーンを活用した更新履歴検証が可能なGitサーバー運用手法の提案",
        ],
        placeOfEmployment: [
          "NTTコミュニケーションズ",
          "NEC",
          "ソフトバンク",
          "ラック",
          "東京電力ホールディングス",
        ],
        links: [
          {
            name: "▶︎ 寺田真敏教授（情報メディア学科公式HP）",
            url: "https://www.im.dendai.ac.jp/laboratory/isl1/",
          },
          {
            name: "▶︎ 具体的な質問例",
            url: "",
          },
        ],
        img: "/src/assets/labs/情報セキュリティ.svg",
      },
      labo_2: {
        eventType: "展示あり",
        title: "計算言語学研究室",
        professor: ["大野&nbsp;誠寛", "教授"],
        tags: ["自然言語処理", "話し言葉処理", "人工知能"],
        place: "1号館4階演習室",
        info: "我々は、文書やWeb、人とのコミュニケーション等を通じて、様々な情報を獲得し、整理し、発信しています。このような知的活動を行うには、言葉が必要不可欠といえます。本研究室では、大量の言語情報を活用・処理し、人の知的活動を計算機によって支援する技術の開発を目指しています。",
        theme: ["話し言葉の構文解析に関する研究", "テキスト整形に関する研究"],
        placeOfEmployment: [
          "NTTコミュニケーションズ",
          "ドコモ・システムズ",
          "NTTデータソフィア",
          "DTS",
          "日本ビジネスシステムズ",
        ],
        links: [
          {
            name: "▶︎ 大野誠寛教授（情報メディア学科公式HP）",
            url: "https://www.im.dendai.ac.jp/laboratory/cll/",
          },
          {
            name: "▶︎ 具体的な質問例",
            url: "",
          },
        ],
        img: "/src/assets/labs/計算言語学.svg",
      },
    },
  },
  // getters: {
  //   getAllDayEvents(state) {
  //     return state.labo;
  //   },
  // },
};
