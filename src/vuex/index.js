import { createStore } from "vuex";
import createPersistedstate from "vuex-persistedstate";
// import dialogstore from "./modules/dialogstore";

export const store = createStore({
  state: {
    myNote: [],
    allDayEvent: {
      allDayEvent_1: {
        id: "allDayEvent_1",
        event: "終日開催",
        title: "資料配布コーナー",
        place: "2号館丹羽ホール前",
        info: "説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明",
      },
      allDayEvent_2: {
        id: "allDayEvent_2",
        event: "終日開催",
        title: "施設見学ツアー",
        place: "5号館2階受付",
        info: "説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明",
      },
      allDayEvent_3: {
        id: "allDayEvent_3",
        event: "終日開催",
        title: "クラブ・サークル紹介",
        place: "？？",
        info: "説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明",
      },
      allDayEvent_4: {
        id: "allDayEvent_4",
        event: "終日開催",
        title: "学科展示室",
        place: "1号館4階演習室",
        info: "説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明",
      },
      allDayEvent_5: {
        id: "allDayEvent_5",
        event: "終日開催",
        title: "研究室公開",
        place: "1号館4階演習室／5階メディアラボ",
        info: "説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明",
      },
    },
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
      // return state.dialogStore.allDayEvent;
      return state.allDayEvent;
    },

    getMyNoteDataSet(state, getters) {
      var dataSet = [];
      for (var index in state.myNote) {
        var key = state.myNote[index].id;
        var parentKey = String(key).slice(0, String(key).indexOf("_"));
        var parentData = {};
        if (parentKey == "allDayEvent") {
          // parentData = state.dialogStore.allDayEvent;
          parentData = state.allDayEvent;
        }
        dataSet.push(parentData[key]);
      }
      return dataSet;
    },
  },
  // modules: {
  //   dialogstore,
  // },
  plugins: [createPersistedstate()],
});
