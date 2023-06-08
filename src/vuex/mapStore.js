import { store } from "./index";
import map1Img from "/src/assets/maps/Map01.svg";
import map2Img from "/src/assets/maps/Map02.svg";
import map3Img from "/src/assets/maps/Map03.svg";
import map2Png from "/src/assets/maps/Map02.png";
import map3Png from "/src/assets/maps/Map03.png";

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
        src: map2Png,
      },
      map_3: {
        title: "研究室公開",
        site: "1号館5階 メディアラボ",
        img: "background-image: url(" + map3Img + ")",
        src: map3Png,
      },
    },
  },
  getters: {
    getAllMapData(state) {
      return state.map;
    },
  },
};
