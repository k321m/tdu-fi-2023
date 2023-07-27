<template>
  <v-col cols="2.25">
    <img class="mission-img" :src="imgSrc" style="width: 100%; height: auto"
  /></v-col>
  <template v-if="!isLast">
    <v-col cols="1" style="display: flex; justify-content: center"
      ><img
        src="/src/assets/missions/circle.png"
        style="width: 0.8em; height: auto"
    /></v-col>
  </template>
</template>

<script>
export default {
  name: "MissionImage",
  props: {
    imgSrc: {
      type: String,
    },
    isLast: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
