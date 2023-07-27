<template>
  <a :class="className">
    <MissionDialog
      :view="isMissionDialogVisible"
      :playAnimation="playedAnimation"
      @update:view="isMissionDialogVisible = $event"
      @close-dialog="isMissionDialogVisible = false"
    />
    <SpeechBubble />
    <MissionIconImage @click="openMissionDialog" />
  </a>
</template>

<script>
import SpeechBubble from "../parts/SpeechBubble.vue";
import MissionIconImage from "../parts/MissionIconImage.vue";
import MissionDialog from "./MissionDialog.vue";

export default {
  name: "MissionIcon",
  props: {
    className: String,
  },
  components: {
    SpeechBubble,
    MissionIconImage,
    MissionDialog,
  },
  data() {
    return {
      isMissionDialogVisible: false,
      playedAnimation: [],
    };
  },
  methods: {
    openMissionDialog() {
      this.isMissionDialogVisible = true;
    },
  },
};
</script>
