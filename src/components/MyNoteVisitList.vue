<template>
  <div>
    <h4>訪問リスト</h4>
    <div v-for="(value, key) in eventDetailData" :key="value">
      <MyNoteEventAcordion :eventValue="value" :eventKey="key" />
    </div>

    <div class="py-4">
      <div>
        <router-link class="link mb-1" to="/#time-schedule">
          ▶︎ タイムスケジュール
        </router-link>
      </div>
      <div>
        <router-link class="link" to="/labs"> ▶︎ 研究室公開 </router-link>
      </div>
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
