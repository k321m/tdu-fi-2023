import { createStore } from "vuex";
import createPersistedstate from "vuex-persistedstate";
import eventsStore from "./eventsStore";
import labsStore from "./labsStore";

export const store = createStore({
  state: {
    doneMyNoteTutorial: false,
    myNote: {
      events: {},
      questions: {},
    },
  },
  mutations: {
    updateDoneMyNoteTutorial(state) {
      this.state.doneMyNoteTutorial = true;
    },
    addMyNote(state, obj) {
      this.state.myNote[obj.type] = Object.assign(this.state.myNote[obj.type], {
        [obj.key]: { memo: "", done: false },
      });
    },
    updateEventDone(state, key) {
      this.state.myNote.events[key].done = !this.state.myNote.events[key].done;
    },
    saveEventMemo(state, obj) {
      this.state.myNote.events[obj.key].memo = obj.memo;
    },
    saveQuestionMemo(state, obj) {
      this.state.myNote.questions[obj.key].memo = obj.memo;
    },
    deleteEventMyNote(state, key) {
      delete this.state.myNote.events[key];
    },
    deleteQuestionMyNote(state, key) {
      delete this.state.myNote.questions[key];
    },
    deleteAllMyNote(state) {
      this.state.doneMyNoteTutorial = false;
      this.state.myNote.events = {};
      this.state.myNote.qestions = {};
    },
  },
  getters: {
    getDoneMyNoteTutorial(state) {
      return state.doneMyNoteTutorial;
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
      questionKeys.forEach(function (questionKey) {});
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
      paths: ["doneMyNoteTutorial", "myNote"],
    }),
  ],
});
