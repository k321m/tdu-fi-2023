<template>
  <div class="btn btn-default-border my-2" @click="changeStyle">
    <span class="double-circle"></span>
    <code style="line-height: 1em"><slot name="code"></slot></code>
  </div>
</template>
<script>
export default {
  name: "QuestionSelectButton",
  methods: {
    changeStyle() {},
  },
};
</script>

<style scoped>
.btn-default-border {
  display: flex;
  justify-content: center;
  position: relative;
  color: #706cd9;
  border: solid var(--light-purple);
}
.double-circle {
  width: 2em;
  height: 2em;
  left: 1em;
  position: absolute;
  border: solid var(--light-purple) 0.2em;
  border-radius: 50%;
}
.double-circle::before {
  content: "";
  width: 1em;
  height: 1em;
  position: absolute;
  top: 0.3em;
  left: 0.3em;
  border-radius: 50%;
  background-color: var(--light-purple);
}

code {
  font-family: hack, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  font-style: normal;
  word-wrap: break-word;
}
</style>
