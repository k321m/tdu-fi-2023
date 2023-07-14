<template>
  <div id="fixed-icons">
    <MissionIcon />
    <MyNoteIcon />
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
};
</script>
