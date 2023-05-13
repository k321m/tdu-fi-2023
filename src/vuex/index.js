import { createStore } from "vuex";
import createPersistedstate from "vuex-persistedstate";
import dialogStore from "./dialogStore.js";

export const store = createStore({
  state: {
    myNote: [],
  },
  mutations: {
    addMyNote(state, key) {
      console.log("key:" + key);
      if (this.state.myNote.length == 0) {
        this.state.myNote.push({ id: key, memo: "", done: false });
        return;
      }
      for (var index in this.state.myNote) {
        console.log("mynote:" + this.state.myNote[index].id);
        if (this.state.myNote[index].id == key) {
          return;
        }
      }
      this.state.myNote.push({ id: key, memo: "", done: false });
    },
    removeMyNote(state) {
      this.state.myNote.splice(0);
    },
  },
  getters: {
    getMyNote(state) {
      console.log("MyNoteLength:" + this.state.myNote.length);
      for (var k in this.state.myNote) {
        console.log("MyNoteID:" + this.state.myNote[k].id);
        console.log("MyNoteMemo:" + this.state.myNote[k].memo);
      }
      console.log("return:" + this.state.myNote);
      return this.state.myNote;
    },
    getDataSet(state, getters) {
      var dataSet = [];
      for (var k in state.myNote) {
        var key = state.myNote[k].id;
        var parentKey = String(key).slice(0, String(key).indexOf("_"));
        var parentData = {};
        if (parentKey == "allDayEvent") {
          parentData = state.dialogStore.allDayEvent;
        }
        dataSet.push(parentData[key]);
      }
      return dataSet;
    },
  },
  modules: {
    dialogStore: dialogStore,
  },
  plugins: [createPersistedstate()],
});
