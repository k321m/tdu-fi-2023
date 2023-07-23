<template>
  <a :class="className">
    <SpeechBubble />
    <MissionImage />
  </a>
</template>

<script>
import SpeechBubble from "../parts/SpeechBubble.vue";
import MissionImage from "../parts/MissionImage.vue";
export default {
  name: "MissionIcon",
  props: {
    className: String,
  },
  components: {
    SpeechBubble,
    MissionImage,
  },
};
</script>
