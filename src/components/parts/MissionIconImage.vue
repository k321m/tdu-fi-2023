<template>
  <img :src="MissionIcon" class="menu-icon-img" />
</template>

<script>
import MissionIcon from "/src/assets/mission-3d-icon.svg";
export default {
  name: "MissionIconImage",
  data() {
    return {
      MissionIcon,
    };
  },
};
</script>
