<template>
  <div>
    <h4>訪問リスト</h4>
    <div v-for="(value, key) in eventDetailData" :key="value">
      <MyNoteEventAcordion :eventValue="value" :eventKey="key" />
    </div>

    <div class="py-4">
      <router-link class="routerLink" to="/#time-schedule">
        <p class="mb-1">▶︎ タイムスケジュール</p>
      </router-link>
      <router-link class="routerLink" to="/labs">
        <p>▶︎ 研究室公開</p>
      </router-link>
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
<style scoped>
.routerLink {
  text-decoration: none;
  color: var(--black);
}
</style>
