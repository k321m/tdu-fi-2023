<template>
  <button
    class="btn myNote-btn btn-animation zen-kaku-bold"
    @click="clickEvent"
  >
    {{ title }}
  </button>
</template>
<script>
export default {
  name: "ButtonMyNote",
  props: ["title", "clickEvent"],
};
</script>
