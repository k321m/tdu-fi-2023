<template>
  <div>
    <p class="zen-kaku-bold">質問リスト</p>
    <div v-for="(value, key) in questionDetailData" :key="value">
      <MyNoteQuestionAcordion :key="key">
        <template v-slot:title>{{ value.title }}</template>
        <template v-slot:event>{{ value.event }}</template>
        <template v-slot:place>{{ value.place }}</template>
      </MyNoteQuestionAcordion>
    </div>
    <div class="py-4">
      <p class="zen-kaku-regular">▶︎ 具体的な質問例</p>
    </div>
  </div>
</template>

<script>
import MyNoteQuestionAcordion from "../components/MyNoteQuestionAcordion.vue";

export default {
  name: "MyNoteQuestionList",
  props: ["questionDetailData"],
  components: {
    MyNoteQuestionAcordion,
  },
};
</script>
