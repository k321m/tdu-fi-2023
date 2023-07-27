<template>
  <div class="btn-back my-2">
    <router-link to="/programming"></router-link>
    <img src="../assets/chevron-left.svg" />
    <span>もどる</span>
  </div>
</template>

<script>
export default {
  name: "ProgrammingBackPageButton",
  emits: ["back-page"],
};
</script>

<style scoped>
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
  color: var(--pink);
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
