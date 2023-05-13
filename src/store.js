import { createStore } from "vuex";
import createPersistedstate from "vuex-persistedstate";

export const store = createStore({
  state: {
    myNote: [],
  },
  mutations: {
    addMyNote(state, data) {
      console.log(data.event);
      //this.myNote.push(data);
    },
    getMyNote(state) {
      return this.state.myNote;
    },
  },
  plugins: [createPersistedstate()],
});
