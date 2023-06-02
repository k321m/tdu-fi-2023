import { store } from "./index";
import map1Img from "/src/assets/maps/testMap.svg";
import map2Img from "/src/assets/labs/メディア応用.svg";
import map3Img from "/src/assets/maps/testMap.svg";

export default {
  namespaced: true,
  state: {
    map: {
      map_1: {
        title: "キャンパスマップ",
        site: "",
        img: "background-image: url(" + map1Img + ")",
        src: map1Img,
      },
      map_2: {
        title: "学科展示室/研究室公開",
        site: "1号館4階 演習室",
        img: "background-image: url(" + map2Img + ")",
        src: map2Img,
      },
      map_3: {
        title: "研究室公開",
        site: "1号館5階 メディアラボ",
        img: "background-image: url(" + map3Img + ")",
        src: map3Img,
      },
    },
  },
  getters: {
    getAllMapData(state) {
      return state.map;
    },
  },
};
