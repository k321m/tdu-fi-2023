import { createStore } from "vuex";
import createPersistedstate from "vuex-persistedstate";
import eventsStore from "./eventsStore";
import labsStore from "./labsStore";

export const store = createStore({
  state: {
    doneMyNoteTutorial: false,
    addQueCounter: 0,
    myNote: {
      events: {},
      questions: {},
      anything: { memo: "" },
    },
  },
  mutations: {
    updateDoneMyNoteTutorial(state) {
      this.state.doneMyNoteTutorial = true;
    },
    countAddQuestion() {
      this.state.addQueCounter++;
    },
    // TODO: Type与えなくても処理する方法に修正
    addMyNote(state, obj) {
      // objの中身は[ type("events" or "questions"), key ,(questionのみquestion)]を想定
      var addDataTemplate = { memo: "", done: false };
      if (obj.type == "questions")
        addDataTemplate = { question: obj.question, memo: "" };
      this.state.myNote[obj.type] = Object.assign(this.state.myNote[obj.type], {
        [obj.key]: addDataTemplate,
      });
    },
    updateEventDone(state, key) {
      this.state.myNote.events[key].done = !this.state.myNote.events[key].done;
    },
    saveMemo(state, obj) {
      if (obj.type == "anything") {
        this.state.myNote[obj.type].memo = obj.memo;
        return;
      }

      this.state.myNote[obj.type][obj.key].memo = obj.memo;
    },
    deleteMyNote(state, obj) {
      if (obj.type == "all") {
        // TODO: 初期値を代入することで初期化処理を行うように修正
        this.state.doneMyNoteTutorial = false;
        this.state.addQueCounter = 0;
        this.state.myNote.events = {};
        this.state.myNote.questions = {};
        this.state.myNote.anything = {};
        return;
      }
      delete this.state.myNote[obj.type][obj.key];
    },
  },
  getters: {
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

    getMyNoteDetailData(state, getters) {
      var detailData = { events: {}, questions: {} }; // MyNoteに保存されてるイベントの詳細情報を格納する
      var eventKeys = Object.keys(state.myNote.events);
      var questionKeys = Object.keys(state.myNote.questions);
      // MyNoteに保存したeventKeyを使ってmoduleからデータを取得
      eventKeys.forEach(function (eventKey) {
        var eventKeySplit = String(eventKey).split("_");
        var eventType = eventKeySplit[0];
        var eventDetailKey = eventKeySplit[0] + "_" + eventKeySplit[1];
        detailData.events = Object.assign(detailData.events, {
          [eventKey]: state.eventsStore[eventType][eventDetailKey],
        });
      });
      questionKeys.forEach(function (questionKey) {
        detailData.questions = Object.assign(detailData.questions, {
          [questionKey]: state.myNote.questions[questionKey],
        });
      });
      return detailData;
    },
  },
  modules: {
    eventsStore,
    labsStore,
  },
  plugins: [
    createPersistedstate({
      key: "tdu-fi-2023oc",
      paths: ["doneMyNoteTutorial", "addQueCounter", "myNote"],
    }),
  ],
});
