<template>
  <div class="py-2">
    <div class="btn btn-execute" @click="clicked()">
      <v-icon>mdi-play-circle-outline</v-icon>
      実行<span class="hack">（Run Code）</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgrammingExecuteButton",
  emits: ["executed"],
  methods: {
    clicked() {
      this.$emit("executed");
      location.href = location.href + "#canvas";
    },
  },
};
</script>
<style scoped>
.btn-execute {
  display: flex;
  justify-content: center;
  position: relative;
  background: linear-gradient(to right, var(--pink), var(--purple));
  color: var(--white);
}
i {
  position: absolute;
  left: 1.3rem;
  color: var(--white);
  font-size: 2rem;
}
span {
  padding-top: 0.15rem;
}
</style>
