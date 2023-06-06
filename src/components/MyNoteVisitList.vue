<template>
  <div>
    <p class="zen-kaku-bold">訪問リスト</p>
    <div v-for="(value, key) in eventDetailData" :key="value">
      <MyNoteEventAcordion :eventValue="value" :eventKey="key">
      </MyNoteEventAcordion>
    </div>

    <div class="py-4">
      <router-link class="routerLink" to="/#time-schedule">
        <p class="zen-kaku-regular mb-1">▶︎ タイムスケジュール</p>
      </router-link>
      <router-link class="routerLink" to="/labs">
        <p class="zen-kaku-regular">▶︎ 研究室公開</p>
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
  color: #010326;
}
</style>
