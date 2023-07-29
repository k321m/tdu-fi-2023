<template>
  <div :class="{ background: isToggle }">
    <div class="fixed-icons">
      <span
        class="menu-toggle"
        :class="{ toggle: isToggle }"
        @click="isToggle = !isToggle"
      >
        <v-icon class="plus" :class="{ toggle: isToggle }">mdi-plus</v-icon>
      </span>
      <div class="menu-round" :class="{ toggle: isToggle }">
        <HowToIcon :class="'menu-icon'" />
        <MyNoteIcon :class="'menu-icon'" />
        <MissionIcon :class="'menu-icon'" @close-toggle="isToggle = false" />
      </div>
    </div>
  </div>
</template>

<script>
import MyNoteIcon from "../parts/MyNoteIcon.vue";
import MissionIcon from "./MissionIcon.vue";
import HowToIcon from "../parts/HowToIcon.vue";
export default {
  name: "FixedIcons",
  data() {
    return {
      isToggle: false,
    };
  },
  emits: ["close-toggle"],
  components: {
    MyNoteIcon,
    MissionIcon,
    HowToIcon,
  },
};
</script>

<style scoped>
.background {
  width: 100dvw;
  height: 100dvh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(1, 3, 38, 0.8);
  transition-delay: 0.4s;
  z-index: 100;
}
</style>
