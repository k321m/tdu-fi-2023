import { createStore } from "vuex";
import createPersistedstate from "vuex-persistedstate";
import dialogstore from "./dialogstore";

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
        if (this.state.myNote[index].id == key) {
          return;
        }
      }
      this.state.myNote.push({ id: key, memo: "", done: false });
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
      this.state.myNote.splice(0);
    },
  },
  getters: {
    getMyNote(state, getters) {
      return state.myNote;
    },
    getAllDayEvents() {
      return state.dialogStore.allDayEvent;
    },

    getMyNoteDataSet(state, getters) {
      var dataSet = [];
      for (var index in state.myNote) {
        var key = state.myNote[index].id;
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
    dialogstore: dialogstore,
  },
  plugins: [createPersistedstate()],
});
