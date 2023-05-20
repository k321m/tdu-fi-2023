import { store } from "./index";

export default {
  namespaced: true,

  state: {
    allDayEvent: {
      allDayEvent_1: {
        eventType: "終日開催",
        title: "資料配布コーナー",
        place: "2号館丹羽ホール前",
        info: "説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明",
      },
      allDayEvent_2: {
        eventType: "終日開催",
        title: "施設見学ツアー",
        place: "5号館2階受付",
        info: "説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明",
      },
      allDayEvent_3: {
        eventType: "終日開催",
        title: "クラブ・サークル紹介",
        place: "？？",
        info: "説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明",
      },
      allDayEvent_4: {
        eventType: "終日開催",
        title: "学科展示室",
        place: "1号館4階演習室",
        info: "説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明",
      },
      allDayEvent_5: {
        eventType: "終日開催",
        title: "研究室公開",
        place: "1号館4階演習室／5階メディアラボ",
        info: "説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明",
      },
    },
    limitedEvent: {
      limitedEvent_1: {
        eventType: "限定プログラム",
        title: "学科説明会",
        subTitle: "情報メディア学科",
        place: "2501／2505教室",
        peopleNum: "360名",
        info: "説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明",
      },
      limitedEvent_2: {
        eventType: "限定プログラム",
        title: "学科説明会",
        subTitle: "情報システム工学科",
        place: "2503教室",
        peopleNum: "252名",
        info: "説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明",
      },
      limitedEvent_3: {
        eventType: "限定プログラム",
        title: "学科説明会",
        subTitle: "情報通信工学科",
        place: "2601教室",
        peopleNum: "180名",
        info: "説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明",
      },
      limitedEvent_4: {
        eventType: "限定プログラム",
        title: "電大ガイダンス",
        place: "2号館丹羽ホール",
        peopleNum: "500名",
        info: "説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明",
      },
      limitedEvent_5: {
        eventType: "限定プログラム",
        title: "入試ガイダンス",
        subTitle: "一般・共通テスト",
        place: "5301教室",
        peopleNum: "99名",
        info: "説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明",
      },
      limitedEvent_6: {
        eventType: "限定プログラム",
        title: "入試ガイダンス",
        subTitle: "推薦・AO",
        place: "5203／5204教室",
        peopleNum: "297名",
        info: "説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明",
      },
    },
    timeSchedule: {
      timeSchedule_1: {
        limitedEvent_1: {
          time: "11:15-11:35",
        },
        limitedEvent_2: {
          time: "11:15-11:35",
        },
        limitedEvent_4: {
          time: "11:15-11:45",
          carousel_height: "height: 70px",
        },
        limitedEvent_6: {
          time: "11:15-11:45",
          carousel_height: "height: 70px",
        },
      },
      timeSchedule_2: {
        limitedEvent_1: {
          time: "12:15-12:35",
        },
        limitedEvent_3: {
          time: "12:15-12:35",
        },
        limitedEvent_4: {
          time: "12:15-12:45",
          carousel_height: "height: 70px",
        },
        limitedEvent_5: {
          time: "12:15-12:45",
          carousel_height: "height: 70px",
        },
      },
      timeSchedule_3: {
        limitedEvent_2: {
          time: "13:15-13:35",
        },
        limitedEvent_3: {
          time: "13:15-13:35",
        },
        limitedEvent_4: {
          time: "13:15-13:45",
          carousel_height: "height: 70px",
        },
        limitedEvent_5: {
          time: "13:15-13:45",
          carousel_height: "height: 70px",
        },
        limitedEvent_6: {
          time: "13:15-13:45",
          carousel_height: "height: 70px",
        },
      },
      timeSchedule_4: {
        limitedEvent_1: {
          time: "14:15-14:35",
        },
        limitedEvent_2: {
          time: "14:15-14:35",
        },
        limitedEvent_3: {
          time: "14:15-14:35",
        },
        limitedEvent_4: {
          time: "14:15-14:45",
          carousel_height: "height: 70px",
        },
        limitedEvent_5: {
          time: "14:15-14:45",
          carousel_height: "height: 70px",
        },
        limitedEvent_6: {
          time: "14:15-14:45",
          carousel_height: "height: 70px",
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
