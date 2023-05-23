<template>
  <div>
    <p class="zen-kaku-bold">訪問リスト</p>
    <div v-for="(value, key) in eventDetailData" :key="value">
      <MyNoteEventAcordion :eventValue="value" :eventKey="key">
      </MyNoteEventAcordion>
    </div>

    <div class="py-4">
      <p class="zen-kaku-regular">▶︎ タイムスケジュール</p>
      <p class="zen-kaku-regular">▶︎ 研究室公開</p>
    </div>
  </div>
</template>
<script>
import MyNoteEventAcordion from "../components/MyNoteEventAcordion.vue";
export default {
  name: "MyNoteVisitList",
  props: ["eventDetailData"],
  components: {
    MyNoteEventAcordion,
  },
};
</script>
