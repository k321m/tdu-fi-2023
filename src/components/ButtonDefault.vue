<template>
  <router-link
    class="btn default-btn btn-animation zen-kaku-bold"
    :to="{ path: to, query: { id: mapKey } }"
    @click="handleClick()"
  >
    {{ title }}
  </router-link>
</template>
<script>
export default {
  name: "ButtonDefault",
  props: ["title", "to", "mapKey", "clickEvent"],
  methods: {
    handleClick() {
      if (this.clickEvent) {
        this.clickEvent();
      }
    },
  },
};
</script>
