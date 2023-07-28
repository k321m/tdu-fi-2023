<template>
  <router-link to="/my-note" :class="className">
    <img :src="MyNoteIcon" class="menu-icon-img" />
  </router-link>
</template>
<script>
import MyNoteIcon from "/src/assets/mynote-3d-icon.svg";
export default {
  name: "MyNoteIcon",
  props: {
    className: String,
  },
  data() {
    return {
      doneMyNoteTutorial: false,
      MyNoteIcon,
    };
  },
  mounted() {
    this.doneMyNoteTutorial = !this.$store.getters.getDoneMyNoteTutorial;
    this.isArrowVisible = this.doneMyNoteTutorial;
  },
};
</script>
