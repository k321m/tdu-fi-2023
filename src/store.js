import { createStore } from "vuex";
import createPersistedstate from "vuex-persistedstate";

export const store = createStore({
  state: {
    pass: "tdufioc06",
    memo: [],
  },
  plugins: [createPersistedstate()],
});
