<template>
  <div class="py-2">
    <Button programming @click="$emit('executed')" :to="returnHref()">
      <div class="btn-execute">
        <v-icon>mdi-play-circle-outline</v-icon>
        実行<span class="hack">（Run Code）</span>
      </div>
    </Button>
  </div>
</template>

<script>
import Button from "./parts/Button.vue";
export default {
  name: "ProgrammingExecuteButton",
  emits: ["executed"],
  components: {
    Button,
  },
  methods: {
    returnHref() {
      return location.pathname + "#canvas";
    },
  },
};
</script>
<style scoped>
.btn-execute > i {
  position: absolute;
  left: 1.3rem;
  color: var(--white);
  font-size: 2rem;
  padding-bottom: 0.8rem;
}
span {
  padding-top: 0.15rem;
}
</style>
