<template>
  <a class="btn myNote-btn btn-animation" @click="clickEvent">
    {{ title }}
  </a>
</template>
<script>
export default {
  name: "ButtonMyNote",
  props: ["title", "clickEvent"],
};
</script>
