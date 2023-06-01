import { store } from "./index";

export default {
  namespaced: true,
  state: {
    map: {
      map_1: {
        title: "キャンパスマップ",
        site: "",
        img: "background-image: url(/src/assets/maps/testMap.svg)",
        src: "/src/assets/maps/testMap.svg",
      },
      map_2: {
        title: "学科展示室/研究室公開",
        site: "1号館4階 演習室",
        img: "background-image: url(/src/assets/labs/メディア応用.svg)",
        src: "/src/assets/labs/メディア応用.svg",
      },
      map_3: {
        title: "研究室公開",
        site: "1号館5階 メディアラボ",
        img: "background-image: url(/src/assets/maps/testMap.svg)",
        src: "/src/assets/maps/testMap.svg",
      },
    },
  },
  getters: {
    getAllMapData(state) {
      return state.map;
    },
  },
};
