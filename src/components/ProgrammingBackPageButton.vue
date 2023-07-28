<template>
  <div class="btn-back my-2">
    <router-link to="/programming"></router-link>
    <v-icon>mdi-chevron-triple-left</v-icon>
    <span>もどる</span>
  </div>
</template>

<script>
export default {
  name: "ProgrammingBackPageButton",
  props: ["color"],
  emits: ["back-page"],
};
</script>

<style scoped>
i {
  color: v-bind(color);
}
.btn-back {
  position: relative;
}
.btn-back img {
  width: 1.3rem;
  vertical-align: middle;
}
.btn-back span {
  font-weight: var(--medium);
  vertical-align: middle;
  margin: 0 0 0 0.2rem;
  color: v-bind(color);
}
a {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 5rem;
  height: 100%;
}
</style>
