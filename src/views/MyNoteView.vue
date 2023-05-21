<template>
  <div id="contents">
    <v-dialog persistent v-model="isTutorialVisible">
      <MyNoteTutorial
        @close-tutorial="isTutorialVisible = false"
      ></MyNoteTutorial>
    </v-dialog>
    <div class="pa-4">
      <ContentTitle>
        <template v-slot:jp-title>マイノート</template>
        <template v-slot:title>>MyNote</template>
        <template v-slot:info
          >説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明
        </template>
      </ContentTitle>
      <div class="pt-6">
        <p class="zen-kaku-bold">訪問リスト</p>
        <div v-for="(value, key) in myNoteDetailData.events" :key="value">
          <MyNoteEventAcordion :eventValue="value" :eventKey="key">
          </MyNoteEventAcordion>
        </div>

        <div class="py-4">
          <p class="zen-kaku-regular">▶︎ タイムスケジュール</p>
          <p class="zen-kaku-regular">▶︎ 研究室公開</p>
        </div>
      </div>
      <div class="pt-6">
        <p class="zen-kaku-bold">質問リスト</p>
        <div v-for="(value, key) in myNoteDetailData.questions" :key="value">
          <MyNoteEventAcordion :key="key">
            <template v-slot:title>{{ value.title }}</template>
            <template v-slot:event>{{ value.event }}</template>
            <template v-slot:place>{{ value.place }}</template>
          </MyNoteEventAcordion>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContentTitle from "../components/ContentTitle.vue";
import MyNoteEventAcordion from "../components/MyNoteEventAcordion.vue";
import MyNoteTutorial from "../components/MyNoteTutorial.vue";
export default {
  name: "MyNote",
  components: {
    ContentTitle,
    MyNoteEventAcordion,
    MyNoteTutorial,
  },
  data() {
    return {
      myNoteDetailData: {},
      isTutorialVisible: !this.$store.getters.getDoneMyNoteTutorial,
    };
  },
  mounted() {
    this.myNoteDetailData = this.$store.getters.getMyNoteDetailData;
  },
};
</script>

<style scoped>
.contents > div {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
