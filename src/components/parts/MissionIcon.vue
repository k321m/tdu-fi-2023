<template>
  <router-link to="/my-note">
    <img src="../../assets/mission-3d-icon.png" class="fixed-icon-img" />
  </router-link>
</template>

<script>
export default {
  name: "MissionIcon",
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
