<template>
  <a :class="className">
    <img src="/src/assets/howto-3d-icon.png" class="menu-icon-img" />
  </a>
</template>
<script>
export default {
  name: "HowToIcon",
  props: {
    className: String,
  },
};
</script>
