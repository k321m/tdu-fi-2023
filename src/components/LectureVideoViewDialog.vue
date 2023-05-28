<template>
  <div class="background-dialog px-5 py-5">
    <!-- ×ボタン -->
    <div style="display: flex" @click="$emit('close-dialog')">
      <div style="margin: 0 0 0 auto">
        <v-icon>mdi-close</v-icon>
      </div>
    </div>
    <!-- 展示情報 -->
    <div class="pb-2">
      <p class="zen-kaku-bold" style="color: #360a73">
        {{ lectureData.year_of_enrollment }}
      </p>
    </div>
    <p class="zen-kaku-bold lab-title pb-3" style="color: #010326">
      {{ lectureData.mordalTitle }}
    </p>
    <!-- 先生名と展示場所 -->
    <div class="pb-1" style="font-size: 0.9em">
      <p class="lab-professor-place">
      <img src="../assets/icon-person.svg" class="pr-1" />
      <div style="display: inline-block;">
        <div class="flex-end" v-for="(data,index) in lectureData.professor">
        {{ data["name"] }}
        <span class="pl-1" style="font-size: 0.8em">{{ data["type"] }}</span>
        <template v-if="index !== lectureData.professor.length-1">、</template>
      </div>
      </div>
      </p>
    </div>
    <!-- スクロールエリア -->
    <div class="scroll-contents" style="font-size: 0.9em">
      <!-- info -->
      <p class="pb-4">{{ lectureData.info }}</p>
      <!-- Video pb-2 -->
      <iframe width="auto" height="auto" :src="lectureData.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <!-- Link -->
      <div v-for="linkData in lectureData.links" class="links">
      <a style="font-size: 0.9em;" :href="linkData['url']">{{ linkData['name'] }}</a>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LectureVideoViewDialog",
  props: ["lectureData"],
  emits: ["close-dialog"],
  data() {
    return {
      type: "events",
    };
  },
  components:{
  },
};

</script>

<style scoped>
.background-dialog {
  display: flex;
  flex-direction: column;
  height: 60vh;
  max-height: 688px;
  background-color: white;
  border-radius: 10px;
  /* padding-bottom: 10rem; */
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
