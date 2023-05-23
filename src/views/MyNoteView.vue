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
        <MyNoteVisitList :eventDetailData="myNoteDetailData.events" />
      </div>
      <div class="pt-6">
        <MyNoteQuestionList :questionDetailData="myNoteDetailData.questions" />
      </div>
      <div class="pt-2">
        <MyNoteAnythingMemo />
      </div>
    </div>
  </div>
</template>

<script>
import ContentTitle from "../components/ContentTitle.vue";
import MyNoteVisitList from "../components/MyNoteVisitList.vue";
import MyNoteQuestionList from "../components/MyNoteQuestionList.vue";
import MyNoteAnythingMemo from "../components/MyNoteAnythingMemo.vue";
import MyNoteTutorial from "../components/MyNoteTutorial.vue";
export default {
  name: "MyNote",
  components: {
    ContentTitle,
    MyNoteVisitList,
    MyNoteQuestionList,
    MyNoteAnythingMemo,
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
