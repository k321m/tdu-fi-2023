<template>
  <div class="background-dialog">
    <div class="pb-2" style="display: flex" @click="$emit('close-dialog')">
      <div style="margin: 0 0 0 auto">
        <v-icon style="color: white">mdi-close</v-icon>
      </div>
    </div>
    <img :src="mapData.src" />
  </div>
</template>

<script>
export default {
  name: "MapViewDialog",
  props: ["mapData"],
  emits: ["close-dialog"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.background-dialog {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50dvh;
  max-height: calc(90dvh - 9em);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}
.lab-title {
  font-size: 1.8em;
}
/* アイコンと要素を上下中央揃えかつinline-blockで改行 */
.lab-professor-place {
  display: inline-flex;
  align-items: center;
  color: #010326;
  margin-right: 0.8rem;
}
/* 名前と役職で下揃え */
.flex-end {
  display: inline-flex;
  align-items: flex-end;
}
.tag-item {
  display: inline-block;
  font-size: 0.4rem;
  color: #360a73;
  background-color: #ecebff;
  padding: 0.35rem 0.8rem;
  border-radius: 100vh;
  margin-right: 0.2rem;
  margin-bottom: 0.3rem;
}
.scroll-contents {
  flex-grow: 1;
  overflow-y: scroll;
}

.footer {
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding-bottom: 2rem;
}

.button-group {
  display: flex;
  justify-content: space-between;
}
.button-group > button {
  font-size: 0.8em;
  width: 49%;
}

a {
  text-decoration: none;
  color: #010326;
}
</style>
