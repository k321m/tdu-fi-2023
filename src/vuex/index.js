import { createStore } from "vuex";
import createPersistedstate from "vuex-persistedstate";
import dialogStore from "./dialogStore";

export const store = createStore({
  state: {
    myNote: {
      events: {},
      questions: {},
    },
  },
  mutations: {
    addMyNote(state, obj) {
      // myNoteに同じデータがないか確認
      if (this.state.myNote[obj.type][obj.key]) {
        return;
      }
      // myNoteにデータ追加
      this.state.myNote[obj.type] = Object.assign(this.state.myNote[obj.type], {
        [obj.key]: { memo: "", done: false },
      });
    },
    changeDone(state, id) {
      console.log("Save:" + id);
      for (var index in this.state.myNote) {
        if (this.state.myNote[index].id == id) {
          this.state.myNote[index].done = !this.state.myNote[index].done;
          console.log("Savedoneis:" + this.state.myNote[index].done);
          return;
        }
      }
      return;
    },
    saveMemo(state, obj) {
      for (var index in this.state.myNote) {
        if (this.state.myNote[index].id == obj.id) {
          this.state.myNote[index].memo = obj.memo;
          return;
        }
      }
      return;
    },
    removeMyNote(state) {
      this.state.myNote.events = {};
    },
  },
  getters: {
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
      var detailData = { events: {}, questions: {} };
      var eventKeys = Object.keys(state.myNote.events);
      var questionKeys = Object.keys(state.myNote.questions);
      eventKeys.forEach(function (eventKey) {
        var eventType = String(eventKey).slice(
          0,
          String(eventKey).indexOf("_")
        );
        detailData.events = Object.assign(detailData.events, {
          [eventKey]: state.dialogStore[eventType][eventKey],
        });
      });
      questionKeys.forEach(function (questionKey) {});
      return detailData;
    },
  },
  modules: {
    dialogStore,
  },
  plugins: [createPersistedstate({ key: "tdu-fi-2023oc", paths: ["myNote"] })],
});
