<template>
  <v-col cols="2.25" style="position: relative">
    <template v-if="isPlay">
      <img class="mission-img" :src="imgData" />
      <img
        class="mission-stamp"
        :class="{ play: isPlay }"
        src="/src/assets/missions/GetStamp.svg"
      />
    </template>
    <template v-else>
      <img class="mission-img" :src="imgData" />
    </template>
  </v-col>
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
    imgData: {
      type: [Object, String, Function],
    },
    isLast: {
      type: Boolean,
      default: false,
    },
    isPlay: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
