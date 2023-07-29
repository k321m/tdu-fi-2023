<template>
  <a :class="className" href="https://www.youtube.com/watch?v=RLWYiBkE04k">
    <img :src="HowToIcon" class="menu-icon-img" />
  </a>
</template>
<script>
import HowToIcon from "/src/assets/howto-3d-icon.svg";
export default {
  name: "HowToIcon",
  props: {
    className: String,
  },
  data() {
    return {
      HowToIcon,
    };
  },
};
</script>
