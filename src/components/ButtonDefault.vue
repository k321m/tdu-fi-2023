<template>
  <router-link
    class="btn default-btn btn-animation"
    :to="to"
    @click="handleClick()"
  >
    {{ title }}
  </router-link>
</template>
<script>
export default {
  name: "ButtonDefault",
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
