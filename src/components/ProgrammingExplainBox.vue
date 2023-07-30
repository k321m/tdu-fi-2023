<template>
  <div id="explain-box" class="box26">
    <span class="box-title">解説</span>
    <p>
      <span class="sub-strong" v-html="explainData.explainText"></span><br />
    </p>
    <p>
      <router-link class="link py-2" :to="explainData.refer.link">
        ▶︎ 参考：Processing基礎知識「{{ explainData.refer.text }}」
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "ProgrammingExplainBox",
  props: ["explainData"],
};
</script>

<style scoped>
.box26 {
  position: relative;
  margin: 2rem 0 1rem 0;
  padding: 1em 1.5em;
  border: solid 3px var(--light-purple);
  border-radius: 8px;
}
.box26 .box-title {
  position: absolute;
  display: inline-block;
  top: -13px;
  left: 10px;
  padding: 0 9px;
  line-height: 1;
  font-size: 19px;
  background: #fff;
  color: var(--purple);
  font-weight: var(--bold);
}
.box26 p {
  margin: 0;
  padding: 0;
}
code {
  font-family: hack, sans-serif;
  font-weight: 400;
  font-size: 1rem;
  font-style: normal;
  word-wrap: break-word;
}
</style>
