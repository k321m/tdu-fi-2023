<template>
  <div class="menu" v-bind:class="{ 'is-active': open }">
    <div class="menu__item">TOP</div>
    <div class="menu__item">ABOUT</div>
    <div class="menu__item">BLOG</div>
    <div class="menu__item">CONTACT</div>
  </div>
</template>
<script>
export default {
  name: "HamburgerMenu",
};
</script>
