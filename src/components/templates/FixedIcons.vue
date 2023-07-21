<template>
  <div :class="{ background: isOpen }">
    <div class="fixed-icons">
      <span
        class="menu-toggle"
        :class="{ open: isOpen }"
        @click="isOpen = !isOpen"
      >
        <v-icon class="plus" :class="{ open: isOpen }">mdi-plus</v-icon>
      </span>
      <div class="menu-round" :class="{ open: isOpen }">
        <MissionIcon class="menu-icon" />
        <MyNoteIcon class="menu-icon" />
        <MyNoteIcon class="menu-icon" />
      </div>
    </div>
  </div>
</template>

<script>
import MyNoteIcon from "../parts/MyNoteIcon.vue";
import MissionIcon from "../parts/MissionIcon.vue";
export default {
  name: "FixedIcons",
  components: {
    MyNoteIcon,
    MissionIcon,
  },
  data() {
    return {
      isOpen: false,
    };
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
}

.menu-toggle {
  width: 3em;
  height: 3em;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  background-color: var(--pink);
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s;
}
.menu-toggle.open {
  animation-name: menu-toggle-animation;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
@keyframes menu-toggle-animation {
  50% {
    width: 2.5em;
    height: 2.5em;
  }
  80% {
    width: 2.5em;
    height: 2.5em;
    background-color: var(--pink);
  }
  100% {
    width: 2.5em;
    height: 2.5em;
    background-color: var(--black);
  }
}

.plus {
  font-size: 2em;
  color: white;
  transition: 0.4s;
  z-index: 101;
  transition: 0.1s;
}

.plus.open {
  animation-name: plus-animation;
  animation-duration: 0.2s;
  animation-delay: 0.4s;
  animation-fill-mode: forwards;
  font-size: 1.8em;
}
@keyframes plus-animation {
  100% {
    color: var(--pink);
    transform: rotate(135deg);
  }
}

.menu-icon {
  position: absolute;
}

.menu-round {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 99;
}

.menu-round .menu-icon {
  bottom: 0.25em;
  right: 0.25em;
  transition: 0.2s;
}

.menu-round.open .menu-icon:nth-of-type(1) {
  right: 0.48em;
  bottom: 7.5em;
  transition-delay: 0.44s;
}
.menu-round.open .menu-icon:nth-of-type(2) {
  right: 5.2em;
  bottom: 5.2em;
  transition-delay: 0.42s;
}
.menu-round.open .menu-icon:nth-of-type(3) {
  right: 7.2em;
  bottom: 0.48em;
  transition-delay: 0.4s;
}
</style>
