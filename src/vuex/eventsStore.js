import { store } from "./index";

import allDayEventImg1 from "../assets/資料配布コーナー.svg";
import allDayEventImg2 from "../assets/施設見学ツアー.svg";
import allDayEventImg3 from "../assets/クラブ・サークル紹介.svg";
import allDayEventImg4 from "../assets/学科展示室.svg";
import allDayEventImg5 from "../assets/研究室公開.svg";
import limitedEventImg1 from "../assets/情報メディア学科.svg";
import limitedEventImg2 from "../assets/情報システム工学科.svg";
import limitedEventImg3 from "../assets/情報通信工学科.svg";
import limitedEventImg4 from "../assets/電大ガイダンス.svg";
import limitedEventImg5 from "../assets/一般・共通テスト入試ガイダンス.svg";
import limitedEventImg6 from "../assets/推薦・AO入試ガイダンス.svg";

export default {
  namespaced: true,

  state: {
    allDayEvent: {
      allDayEvent_1: {
        eventType: "終日開催",
        title: "資料配布コーナー",
        place: "2号館丹羽ホール前",
        info: "説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明",
        fontsize: "font-size: 0.85em",
        // TODO: 変数だけでの反映
        img: "background-image: url(" + allDayEventImg1 + ")",
      },
      allDayEvent_2: {
        eventType: "終日開催",
        title: "施設見学ツアー",
        place: "5号館2階受付",
        info: "説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明",
        fontsize: "font-size: 0.85em",
        img: "background-image: url(" + allDayEventImg2 + ")",
      },
      allDayEvent_3: {
        eventType: "終日開催",
        title: "クラブ・サークル紹介",
        place: "？？",
        info: "説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明",
        fontsize: "font-size: 0.65em",
        img: "background-image: url(" + allDayEventImg3 + ")",
      },
      allDayEvent_4: {
        eventType: "終日開催",
        title: "学科展示室",
        place: "1号館4階演習室",
        info: "説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明",
        fontsize: "font-size: 0.85em",
        img: "background-image: url(" + allDayEventImg4 + ")",
      },
      allDayEvent_5: {
        eventType: "終日開催",
        title: "研究室公開",
        place: "1号館4階演習室／5階メディアラボ",
        info: "説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明",
        fontsize: "font-size: 0.85em",
        img: "background-image: url(" + allDayEventImg5 + ")",
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
        subTitleStyle: "color: #ff9d00",
        img: "background-image: url(" + limitedEventImg2 + ")",
      },
      limitedEvent_2: {
        eventType: "限定プログラム",
        title: "学科説明会",
        subTitle: "情報システム工学科",
        place: "2503教室",
        peopleNum: "252名",
        info: "説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明",
        subTitleStyle: "color: #FF9CFD",
        img: "background-image: url(" + limitedEventImg3 + ")",
      },
      limitedEvent_3: {
        eventType: "限定プログラム",
        title: "学科説明会",
        subTitle: "情報通信工学科",
        place: "2601教室",
        peopleNum: "180名",
        info: "説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明",
        subTitleStyle: "color: #45CBE6",
        img: "background-image: url(" + limitedEventImg4 + ")",
      },
      limitedEvent_4: {
        eventType: "限定プログラム",
        title: "電大ガイダンス",
        place: "2号館丹羽ホール",
        peopleNum: "500名",
        info: "説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明",
        img: "background-image: url(" + limitedEventImg1 + ")",
        carousel_height: "height: 60px",
        img_height: "background-size: 190px;",
      },
      limitedEvent_5: {
        eventType: "限定プログラム",
        title: "入試ガイダンス",
        subTitle: "一般・共通テスト",
        place: "5301教室",
        peopleNum: "99名",
        info: "説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明",
        img: "background-image: url(" + limitedEventImg5 + ")",
        carousel_height: "height: 60px",
        img_height: "background-size: 190px;",
      },
      limitedEvent_6: {
        eventType: "限定プログラム",
        title: "入試ガイダンス",
        subTitle: "推薦・AO",
        place: "5203／5204教室",
        peopleNum: "297名",
        info: "説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明",
        img: "background-image: url(" + limitedEventImg6 + ")",
        carousel_height: "height: 60px",
        img_height: "background-size: 190px;",
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
          time: "12:15-12:35",
        },
        limitedEvent_3_timeSchedule_2: {
          eventDetailKey: "limitedEvent_3",
          time: "12:15-12:35",
        },
        limitedEvent_4_timeSchedule_2: {
          eventDetailKey: "limitedEvent_4",
          time: "12:15-12:45",
        },
        limitedEvent_5_timeSchedule_2: {
          eventDetailKey: "limitedEvent_5",
          time: "12:15-12:45",
        },
      },
      timeSchedule_3: {
        limitedEvent_2_timeSchedule_3: {
          eventDetailKey: "limitedEvent_2",
          time: "13:15-13:35",
        },
        limitedEvent_3_timeSchedule_3: {
          eventDetailKey: "limitedEvent_3",
          time: "13:15-13:35",
        },
        limitedEvent_4_timeSchedule_3: {
          eventDetailKey: "limitedEvent_4",
          time: "13:15-13:45",
        },
        limitedEvent_5_timeSchedule_3: {
          eventDetailKey: "limitedEvent_5",
          time: "13:15-13:45",
        },
        limitedEvent_6_timeSchedule_3: {
          eventDetailKey: "limitedEvent_6",
          time: "13:15-13:45",
        },
      },
      timeSchedule_4: {
        limitedEvent_1_timeSchedule_4: {
          eventDetailKey: "limitedEvent_1",
          time: "14:15-14:35",
        },
        limitedEvent_2_timeSchedule_4: {
          eventDetailKey: "limitedEvent_2",
          time: "14:15-14:35",
        },
        limitedEvent_3_timeSchedule_4: {
          eventDetailKey: "limitedEvent_3",
          time: "14:15-14:35",
        },
        limitedEvent_4_timeSchedule_4: {
          eventDetailKey: "limitedEvent_4",
          time: "14:15-14:45",
        },
        limitedEvent_5_timeSchedule_4: {
          eventDetailKey: "limitedEvent_5",
          time: "14:15-14:45",
        },
        limitedEvent_6_timeSchedule_4: {
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
