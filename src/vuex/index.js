import { createStore } from "vuex";
import createPersistedstate from "vuex-persistedstate";
import eventsStore from "./eventsStore";
import labsStore from "./labsStore";
import lectureStore from "./lectureStore";
import questionsStore from "./questionsStore";
import mapStore from "./mapStore";

export const store = createStore({
  state: {
    password: "",
    tmpPassword: "",
    missedPassword: false,
    doneMyNoteTutorial: false,
    addQueCounter: 0,
    myNote: {
      events: {},
      questions: {},
      anything: { memo: "" },
    },
    missions: {
      isClearedMission1: false,
      isClearedMission2: false,
      isClearedMission3: false,
      isCLearedMission4: false,
    },
  },
  mutations: {
    savePassword(state, password) {
      this.state.password = password;
    },
    updateMissedPassword(state) {
      this.state.missedPassword = true;
    },
    // MyNoteチュートリアル終了判定更新
    updateDoneMyNoteTutorial(state) {
      this.state.doneMyNoteTutorial = true;
    },
    // ユーザが追加する質問のkey番号として使用するためのカウンター
    countAddQuestion() {
      this.state.addQueCounter++;
    },
    // TODO: Type与えなくても処理する方法に修正
    addMyNote(state, obj) {
      // [questions]の場合はkeyをquestionとした質問内容を格納(現時点でユーザが質問を追加した場合のみの対応であるため，おすすめ質問TOP10を実装する場合にはmodule(Store)のKeyを入れるなどの対応が必要)
      if (obj.type == "questions") {
        var addDataTemplate = { title: obj.question, memo: "" };
        this.state.missions.isClearedMission3 = true; // TODO: メソッドで実行するように修正
      } else {
        // objの中身は{ type:value("events" or "questions"), key:value ,(questionのみ)question:value]を想定
        var addDataTemplate = { memo: "", done: false, title: obj.title };

        this.state.missions.isClearedMission2 = true; // TODO: メソッドで実行するように修正
      }
      // MyNoteにデータを追加
      this.state.myNote[obj.type] = Object.assign(this.state.myNote[obj.type], {
        [obj.key]: addDataTemplate,
      });
    },
    // eventのdoneを更新する
    updateEventDone(state, key) {
      this.state.myNote.events[key].done = !this.state.myNote.events[key].done;
    },
    // event. questionそれぞれのメモを保存する
    saveMemo(state, obj) {
      // objの中身は{ type:value("events" or "questions" or "anything"), key:value }を想定
      if (obj.type == "anything") {
        this.state.myNote[obj.type].memo = obj.memo;
        return;
      }
      this.state.myNote[obj.type][obj.key].memo = obj.memo;
    },
    // MyNoteのデータを削除する
    deleteMyNote(state, obj) {
      if (obj.type == "all") {
        // TODO: 初期値を代入することで初期化処理を行うように修正
        // 全初期化(「MyNoteのデータを削除」ボタンで発火想定)
        // this.state.password = "";
        this.state.doneMyNoteTutorial = false;
        this.state.addQueCounter = 0;
        this.state.myNote.events = {};
        this.state.myNote.questions = {};
        this.state.myNote.anything = {};
        return;
      }
      // 項目ごとの削除
      delete this.state.myNote[obj.type][obj.key];
    },
    updateIsClearedMission1() {
      this.state.missions.isClearedMission1 = true;
    },
    // updateIsClearedMission2() {
    //   this.state.missions.isClearedMission2 = true;
    // },
    // updateIsClearedMission3() {
    //   this.state.missions.isClearedMission3 = true;
    // },
    updateIsClearedMission4() {
      this.state.missions.isClearedMission4 = true;
    },
  },
  getters: {
    getPassword(state) {
      return state.password;
    },
    getMissedPassword(state) {
      return state.missedPassword;
    },
    getDoneMyNoteTutorial(state) {
      return state.doneMyNoteTutorial;
    },
    getAddQueCounter(state) {
      return state.addQueCounter;
    },
    getMyNote(state, getters) {
      return state.myNote;
    },

    getMyNoteEvents(state, getters) {
      return state.myNote.events;
    },

    getMyNoteQuestions(state, getters) {
      return state.myNote.questions;
    },

    getMyNoteAnything(state, getters) {
      return state.myNote.anything;
    },

    // MyNoteに格納されているデータをもとに，module(Store)から詳細データを取得してObject型で返す
    getMyNoteDetailData(state, getters) {
      var detailData = { events: {}, questions: {} }; // MyNoteに保存されてるイベントの詳細情報を格納するリスト作成
      var eventKeys = Object.keys(state.myNote.events); // MyNoteのevents内のデータのKeyを取得
      var questionKeys = Object.keys(state.myNote.questions); // MyNoteのquestions内のデータのKeyを取得

      // MyNoteに保存したeventKey(ex. **_1)を使ってmodule(Store)からデータを取得
      eventKeys.forEach(function (eventKey) {
        var eventKeySplit = String(eventKey).split("_"); // eventKey(ex. **_1)を_でスプリット
        var eventType = eventKeySplit[0]; // スプリットした配列の一番最初がデータのtype(親キー)を示すため変数に代入(ex. allDayEvent)
        var eventDetailKey = eventKeySplit[0] + "_" + eventKeySplit[1]; // 例えばlimitedEvent_1_timeSchedule_1から詳細情報をとるためのkey(この場合limitedEvent_1)[0]と[1]を足している
        // 取得したデータをdetailDataに格納
        var eventData = {};
        if (eventType == "labo") {
          eventData = { ...state.labsStore[eventType][eventDetailKey] };
        } else {
          eventData = { ...state.eventsStore[eventType][eventDetailKey] };
        }
        detailData.events[eventKey] = eventData;
      });

      // MyNoteに保存したquestionKey(ex. **_**)を使ってMyNoteからデータを取得
      // (下記のコードは現状ではそのままMyNoteを格納すれば良いだけの処理だが，今後おすすめ質問TOP10から追加されることを想定して以下の書き方にしてある)
      // 取得したデータをdetailDataに格納
      questionKeys.forEach(function (questionKey) {
        // ユーザが質問を自分で追加した場合のデータ取得であり，その場合データはMyNoteに全て格納されているためそのまま渡しているのと同義
        detailData.questions = Object.assign(detailData.questions, {
          [questionKey]: state.myNote.questions[questionKey],
        });
      });
      // console.log(detailData);
      return detailData;
    },
    // クリア済みMissionの総数
    getClearedMissionNum(state, getters) {
      var count = Object.values(state.missions).filter((n) => n == true).length;
      return count;
    },
    getIsClearedMission1(state) {
      return state.missions.isClearedMission1;
    },
    getIsClearedMission2(state) {
      return state.missions.isClearedMission2;
    },
    getIsClearedMission3(state) {
      return state.missions.isClearedMission3;
    },
    getIsClearedMission4(state) {
      return state.missions.isClearedMission4;
    },
  },
  modules: {
    eventsStore,
    labsStore,
    lectureStore,
    questionsStore,
    mapStore,
  },
  plugins: [
    createPersistedstate({
      key: "tdu-fi-2023oc",
      // localStorageに格納するもの指定
      paths: [
        "password",
        "doneMyNoteTutorial",
        "addQueCounter",
        "myNote",
        "missions",
      ],
    }),
  ],
});
