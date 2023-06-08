<template>
  <router-link
    class="btn pink-btn btn-animation zen-kaku-bold"
    :to="to"
    @click="handleClick()"
  >
    {{ title }}
  </router-link>
</template>
<script>
export default {
  name: "ButtonPink",
  props: ["title", "to", "clickEvent"],
  methods: {
    handleClick() {
      if (this.clickEvent) {
        this.clickEvent();
      }
    },
  },
};
</script>
