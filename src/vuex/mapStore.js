import { store } from "./index";

export default {
  namespaced: true,
  state: {
    map: {
      map_1: {
        title: "キャンパスマップ",
        site: "",
        img: "",
      },
      map_2: {
        title: "学科展示室/研究室公開",
        site: "1号館4階 演習室",
        img: "",
      },
      map_3: {
        title: "研究室公開",
        site: "1号館5階 メディアラボ",
        img: "",
      },
    },
  },
  getters: {
    getAllMapData(state) {
      return state.map;
    },
  },
};
