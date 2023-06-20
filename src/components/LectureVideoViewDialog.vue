<template>
  <div class="background-dialog px-5 pt-5">
    <!-- ×ボタン -->
    <div style="display: flex" @click="$emit('close-dialog')">
      <div style="margin: 0 0 0 auto">
        <v-icon>mdi-close</v-icon>
      </div>
    </div>
    <!-- 展示情報 -->
    <div class="pb-2">
      <h4 class="purple" v-if="lectureData.year_of_enrollment != ''">
        {{ lectureData.year_of_enrollment }}
      </h4>
    </div>
    <h2 class="lecture-title pb-2">
      {{ lectureData.mordalTitle }}
    </h2>
    <!-- 先生名と展示場所 -->
    <div class="pb-4" style="font-size: 0.9em">
      <p class="lab-professor-place" v-if="lectureData.professor.length != 0">
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
      <p class="pb-7">{{ lectureData.info }}</p>
      <!-- Video -->
      <div class="pb-3" v-html="lectureData.video"></div>
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
};

</script>

<style scoped>
.background-dialog {
  display: flex;
  flex-direction: column;
  min-height: 75dvh;
  max-height: 90dvh;
  background-color: white;
  border-radius: 0.8rem;
  padding-bottom: 3rem;
}
.lecture-title {
  text-align: start;
}
/* アイコンと要素を上下中央揃えかつinline-blockで改行 */
.lab-professor-place {
  display: inline-flex;
  align-items: center;
  color: var(--black);
  margin-right: 0.8rem;
}
/* 名前と役職で下揃え */
.flex-end {
  display: inline-flex;
  align-items: flex-end;
}

.scroll-contents {
  flex-grow: 1;
  overflow-y: scroll;
}

</style>
