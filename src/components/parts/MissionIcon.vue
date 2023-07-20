<template>
  <router-link to="/my-note">
    <img
      src="../../assets/mission-3d-icon.png"
      style="width: 25dvw; height: auto; max-width: 120px; min-width: 72px"
    />
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
