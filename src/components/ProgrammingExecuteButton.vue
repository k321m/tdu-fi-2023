<template>
  <div class="btn btn-execute" @click="execute()">
    <v-icon>mdi-play-circle-outline</v-icon>
    実行<span class="hack">（Run Code）</span>
  </div>
</template>

<script>
export default {
  name: "ProgrammingExecuteButton",
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
  left: 0.35em;
  color: var(--white);
  font-size: 2rem;
}
span {
  padding-top: 0.15rem;
}
</style>
