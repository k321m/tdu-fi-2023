<template>
  <MissionDialog
    :view="isMissionDialogVisible"
    @update:view="isMissionDialogVisible = $event"
    @close-dialog="isMissionDialogVisible = false"
  />
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
        <MyNoteIcon :class="'menu-icon'" />
        <MyNoteIcon :class="'menu-icon'" />
        <MissionIcon :class="'menu-icon'" @click="openMissionDialog" />
      </div>
    </div>
  </div>
</template>

<script>
import MyNoteIcon from "../parts/MyNoteIcon.vue";
import MissionIcon from "./MissionIcon.vue";
import MissionDialog from "./MissionDialog.vue";
export default {
  name: "FixedIcons",
  data() {
    return {
      isToggle: false,
      isMissionDialogVisible: false,
    };
  },
  components: {
    MyNoteIcon,
    MissionIcon,
    MissionDialog,
  },
  methods: {
    openMissionDialog() {
      this.isMissionDialogVisible = true;
    },
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
  width: 3.5em;
  height: 3.5em;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  background-color: #fa00ff;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s;
}
.menu-toggle.toggle {
  animation-name: menu-toggle-animation;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
@keyframes menu-toggle-animation {
  50% {
    width: 3em;
    height: 3em;
  }
  80% {
    width: 3em;
    height: 3em;
    background-color: #fa00ff;
  }
  100% {
    width: 3em;
    height: 3em;
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

.plus.toggle {
  animation-name: plus-animation;
  animation-duration: 0.2s;
  animation-delay: 0.4s;
  animation-fill-mode: forwards;
  font-size: 1.8em;
}
@keyframes plus-animation {
  100% {
    color: #fa00ff;
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
  right: 0.25em;
  bottom: 0.25em;
  transition: 0.1s;
}

.menu-round.toggle .menu-icon:nth-of-type(1) {
  right: 0.2em;
  bottom: 8em;
  transition-delay: 0.44s;
}
.menu-round.toggle .menu-icon:nth-of-type(2) {
  right: 5.8em;
  bottom: 5.8em;
  transition-delay: 0.42s;
}

.menu-round.toggle .menu-icon:nth-of-type(3) {
  right: 8.8em;
  bottom: 0em;
  transition-delay: 0.4s;
}
</style>
