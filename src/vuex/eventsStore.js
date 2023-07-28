import { store } from "./index";

import allDayEventImg1 from "../assets/資料配布コーナー.svg";
import allDayEventImg2 from "../assets/施設見学ツアー.svg";
import allDayEventImg3 from "../assets/クラブ・サークル紹介.svg";
import allDayEventImg4 from "../assets/学科展示室.svg";
import allDayEventImg5 from "../assets/研究室公開.svg";
import limitedEventImg1 from "../assets/電大ガイダンス.svg";
import limitedEventImg2 from "../assets/情報メディア学科.svg";
import limitedEventImg3 from "../assets/情報システム工学科.svg";
import limitedEventImg4 from "../assets/情報通信工学科.svg";
import limitedEventImg5 from "../assets/一般・共通テスト入試ガイダンス.svg";
import limitedEventImg6 from "../assets/推薦・AO入試ガイダンス.svg";
import limitedEventImg7 from "../assets/女子高校生向け.svg";
export default {
  namespaced: true,

  state: {
    allDayEvent: {
      allDayEvent_1: {
        eventType: "終日開催",
        title: "資料配布コーナー",
        place: "2号館丹羽ホール前",
        info: "大学案内、研究室研究室ガイド、入試ガイド、一般選抜過去問題集などの資料を配布しています。",
        fontsize: "font-size: 0.85em",
        // TODO: 変数だけでの反映
        img: "background-image: url(" + allDayEventImg1 + ")",
        links: [],
        buttons: [
          {
            name: "default",
            key: ["map_1"],
          },
          {
            name: "mynote",
          },
        ],
      },
      allDayEvent_2: {
        eventType: "終日開催",
        title: "施設見学ツアー",
        place: "5号館2階受付",
        info: "電大生がガイド役となり約30分で主な施設を周ります。5号館2階入り口そばの受付にお集まりください。「ものづくりセンター」もご案内します！（ものづくりセンターは個別でも自由に見学できます）",
        fontsize: "font-size: 0.85em",
        img: "background-image: url(" + allDayEventImg2 + ")",
        links: [],
        buttons: [
          {
            name: "default",
            key: ["map_1"],
          },
          {
            name: "mynote",
          },
        ],
      },
      allDayEvent_3: {
        eventType: "終日開催",
        title: "クラブ・サークル紹介",
        place: "5号館1階アトリウム",
        info: "電大ならではの専門性を活かした学術系クラブをはじめ、体育会系クラブ、興味関心が広がる文化系のクラブ、様々な課外活動を学生同士で支える委員会があり、多くの学生がクラブ・サークル団体に所属しています。団体部会の代表学生がご質問におこたえします！",
        fontsize: "font-size: 0.8em",
        img: "background-image: url(" + allDayEventImg3 + ")",
        links: [],
        buttons: [
          {
            name: "default",

            key: ["map_1"],
          },
          {
            name: "mynote",
          },
        ],
      },
      allDayEvent_4: {
        eventType: "終日開催",
        title: "学科展示室",
        place: "1号館4階演習室",
        info: "情報メディア学科の教育・研究内容をご紹介します。教員や学生と直接話してみましょう。同じ学問分野だけど学科の違いがよくわからない…そんな疑問を解決します！",
        fontsize: "font-size: 0.85em",
        img: "background-image: url(" + allDayEventImg4 + ")",
        links: [],
        buttons: [
          {
            name: "default",
            key: ["map_2"],
          },
          {
            name: "mynote",
          },
        ],
      },
      allDayEvent_5: {
        eventType: "終日開催",
        title: "研究室公開",
        place: "1号館4階演習室／5階メディアラボ",
        info: "研究室では、4年間の学びの集大成として「卒業研究」に取り組みます。学生が研究の成果や楽しさをわかりやすく紹介します。",
        fontsize: "font-size: 0.85em",
        img: "background-image: url(" + allDayEventImg5 + ")",
        links: [],
        buttons: [
          {
            name: "default",
            key: ["map_2", "map_3"],
          },
          {
            name: "pink",
            to: "/labs",
          },
        ],
      },
    },
    limitedEvent: {
      limitedEvent_1: {
        eventType: "限定プログラム",
        title: "学科説明会",
        subTitle: "情報メディア学科",
        place: "2号館5階 2501／2505教室",
        peopleNum: "360名",
        info: "「どのようなことが学べるか？」など、学科の特徴を20分でお伝えします。※各回同じ内容を予定しています。",
        subTitleStyle: "color: #ff9d00",
        img: "background-image: url(" + limitedEventImg2 + ")",
        links: [
          {
            name: "▶︎ 情報メディア学科公式HP",
            url: "https://www.im.dendai.ac.jp",
          },
        ],
        buttons: [
          {
            name: "default",
            key: ["map_1"],
          },
          {
            name: "mynote",
          },
        ],
      },
      limitedEvent_2: {
        eventType: "限定プログラム",
        title: "学科説明会",
        subTitle: "情報システム工学科",
        place: "2号館5階 2503",
        peopleNum: "252名",
        info: "「どのようなことが学べるか？」など、学科の特徴を20分でお伝えします。※各回同じ内容を予定しています。",
        subTitleStyle: "color: #FF9CFD",
        img: "background-image: url(" + limitedEventImg3 + ")",
        links: [
          {
            name: "▶︎ 情報システム工学科公式HP",
            url: "https://www.aj.dendai.ac.jp",
          },
        ],
        buttons: [
          {
            name: "default",
            key: ["map_1"],
          },
          {
            name: "mynote",
          },
        ],
      },
      limitedEvent_3: {
        eventType: "限定プログラム",
        title: "学科説明会",
        subTitle: "情報通信工学科",
        place: "2号館6階 2601教室",
        peopleNum: "180名",
        info: "「どのようなことが学べるか？」など、学科の特徴を20分でお伝えします。※各回同じ内容を予定しています。",
        subTitleStyle: "color: #45CBE6",
        img: "background-image: url(" + limitedEventImg4 + ")",
        links: [
          {
            name: "▶︎ 情報通信工学科公式HP",
            url: "http://www.c.dendai.ac.jp",
          },
        ],
        buttons: [
          {
            name: "default",
            key: ["map_1"],
          },
          {
            name: "mynote",
          },
        ],
      },
      limitedEvent_4: {
        eventType: "限定プログラム",
        title: "電大ガイダンス",
        place: "5号館3階 5301教室",
        peopleNum: "153名",
        info: "東京電機大学の学びの特色や強みなどをお話しします。まずはこのガイダンスで電大のことを知りましょう！",
        img: "background-image: url(" + limitedEventImg1 + ")",
        carousel_height: true,
        links: [
          {
            name: "▶︎ 東京電機大学公式HP",
            url: "https://www.dendai.ac.jp",
          },
        ],
        buttons: [
          {
            name: "default",
            key: ["map_1"],
          },
          {
            name: "mynote",
          },
        ],
      },
      limitedEvent_5: {
        eventType: "限定プログラム",
        title: "入試ガイダンス",
        subTitle: "一般・共通テスト",
        place: "5号館2階 5203／5204／5205教室",
        peopleNum: "297名",
        info: "試験科目は？昨年度の受験倍率・合格最低点は？併願方法についても詳しく解説します。",
        img: "background-image: url(" + limitedEventImg5 + ")",
        carousel_height: true,
        links: [
          {
            name: "▶︎ 受験生・高校生の方（東京電機大学公式HP）",
            url: "https://www.dendai.ac.jp/prospective-students/",
          },
        ],
        buttons: [
          {
            name: "default",

            key: ["map_1"],
          },
          {
            name: "mynote",
          },
        ],
      },
      limitedEvent_6: {
        eventType: "限定プログラム",
        title: "入試ガイダンス",
        subTitle: "推薦・AO",
        place: "1号館2階 1204／1205／1206教室",
        peopleNum: "360名",
        info: "推薦入試やAO入試などをお考えの受験生必見！面接のポイント（教員は何を見るのか？）など、オープンキャンパスでしか聞けない情報を得られます。",
        img: "background-image: url(" + limitedEventImg6 + ")",
        carousel_height: true,
        links: [
          {
            name: "▶︎ 受験生・高校生の方（東京電機大学公式HP）",
            url: "https://www.dendai.ac.jp/prospective-students/",
          },
        ],
        buttons: [
          {
            name: "default",
            key: ["map_1"],
          },
          {
            name: "mynote",
          },
        ],
      },
      limitedEvent_7: {
        eventType: "限定プログラム",
        title: "女子高校生向け説明会",
        isLongTitle: true,
        place: "5号館3階 5302教室",
        peopleNum: "153名",
        info: "",
        img: "background-image: url(" + limitedEventImg7 + ")",
        links: [
          {
            name: "▶︎ 受験生・高校生の方（東京電機大学公式HP）",
            url: "https://www.dendai.ac.jp/prospective-students/",
          },
        ],
        buttons: [
          {
            name: "default",
            key: ["map_1"],
          },
          {
            name: "mynote",
          },
        ],
      },
    },
    timeSchedule: {
      timeSchedule_1: {
        limitedEvent_1_timeSchedule_1: {
          eventDetailKey: "limitedEvent_1",
          time: "11:15-11:35",
        },
        limitedEvent_2_timeSchedule_1: {
          eventDetailKey: "limitedEvent_2",
          time: "11:15-11:35",
        },
        limitedEvent_4_timeSchedule_1: {
          eventDetailKey: "limitedEvent_4",
          time: "11:15-11:45",
        },
        limitedEvent_6_timeSchedule_1: {
          eventDetailKey: "limitedEvent_6",
          time: "11:15-11:45",
        },
      },
      timeSchedule_2: {
        limitedEvent_1_timeSchedule_2: {
          eventDetailKey: "limitedEvent_1",
          time: "12:00-12:20",
        },
        limitedEvent_3_timeSchedule_2: {
          eventDetailKey: "limitedEvent_3",
          time: "12:00-12:20",
        },
        limitedEvent_4_timeSchedule_2: {
          eventDetailKey: "limitedEvent_4",
          time: "12:00-12:30",
        },
        limitedEvent_5_timeSchedule_2: {
          eventDetailKey: "limitedEvent_5",
          time: "12:00-12:30",
        },
        limitedEvent_7_timeSchedule_2: {
          eventDetailKey: "limitedEvent_7",
          time: "12:00-12:30",
        },
      },
      timeSchedule_3: {
        limitedEvent_2_timeSchedule_3: {
          eventDetailKey: "limitedEvent_2",
          time: "12:45-13:05",
        },
        limitedEvent_3_timeSchedule_3: {
          eventDetailKey: "limitedEvent_3",
          time: "12:45-13:05",
        },
        limitedEvent_5_timeSchedule_3: {
          eventDetailKey: "limitedEvent_5",
          time: "12:45-13:15",
        },
        limitedEvent_6_timeSchedule_3: {
          eventDetailKey: "limitedEvent_6",
          time: "12:45-13:15",
        },
      },
      timeSchedule_4: {
        limitedEvent_1_timeSchedule_4: {
          eventDetailKey: "limitedEvent_1",
          time: "13:30-13:50",
        },
        limitedEvent_3_timeSchedule_4: {
          eventDetailKey: "limitedEvent_3",
          time: "13:30-13:50",
        },
        limitedEvent_4_timeSchedule_4: {
          eventDetailKey: "limitedEvent_4",
          time: "13:30-14:00",
        },
      },
      timeSchedule_5: {
        limitedEvent_2_timeSchedule_5: {
          eventDetailKey: "limitedEvent_2",
          time: "14:15-14:35",
        },
        limitedEvent_4_timeSchedule_5: {
          eventDetailKey: "limitedEvent_4",
          time: "14:15-14:45",
        },
        limitedEvent_5_timeSchedule_5: {
          eventDetailKey: "limitedEvent_5",
          time: "14:15-14:45",
        },
        limitedEvent_6_timeSchedule_5: {
          eventDetailKey: "limitedEvent_6",
          time: "14:15-14:45",
        },
      },
    },
  },
  getters: {
    getAllDayEvents(state) {
      return state.allDayEvent;
    },
    getLimitedEvents(state) {
      return state.limitedEvent;
    },
    getTimeSchedule(state) {
      return state.timeSchedule;
    },
  },
};
