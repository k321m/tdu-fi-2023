<template>
  <div id="contents">
    <v-dialog persistent v-model="isTutorialVisible">
      <MyNoteTutorial
        @close-tutorial="isTutorialVisible = false"
      ></MyNoteTutorial>
    </v-dialog>
    <div class="pa-4">
      <ContentTitle :isHelpVisible="true" @open-help="isTutorialVisible = true">
        <template v-slot:jp-title>マイノート</template>
        <template v-slot:title>>MyNote</template>
        <template v-slot:info
          >説明説明説明説明説明説明説明説明説説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説説明
        </template>
      </ContentTitle>
      <div class="pt-6">
        <MyNoteVisitList :eventDetailData="changedMyNoteDetailData.events" />
      </div>
      <div class="pt-6">
        <MyNoteQuestionList
          :questionDetailData="changedMyNoteDetailData.questions"
        />
      </div>
      <div class="pt-2">
        <MyNoteAnythingMemo />
      </div>
      <div class="pt-10">
        <MyNoteDownloadButton />
        <MyNoteAllDeleteButton />
      </div>
    </div>
  </div>
</template>

<script>
import ContentTitle from "../components/ContentTitle.vue";
import MyNoteVisitList from "../components/MyNoteVisitList.vue";
import MyNoteQuestionList from "../components/MyNoteQuestionList.vue";
import MyNoteAnythingMemo from "../components/MyNoteAnythingMemo.vue";
import MyNoteAllDeleteButton from "../components/MyNoteAllDeleteButton.vue";
import MyNoteDownloadButton from "../components/MyNoteDownloadButton.vue";
import MyNoteTutorial from "../components/MyNoteTutorial.vue";
export default {
  name: "MyNote",
  components: {
    ContentTitle,
    MyNoteVisitList,
    MyNoteQuestionList,
    MyNoteAnythingMemo,
    MyNoteDownloadButton,
    MyNoteAllDeleteButton,
    MyNoteTutorial,
  },
  data() {
    return {
      myNoteDetailData: {},
      isTutorialVisible: !this.$store.getters.getDoneMyNoteTutorial,
    };
  },
  computed: {
    // myNoteのデータが更新されると、表示するデータも変わる
    changedMyNoteDetailData() {
      let myNoteDetailData = {};
      myNoteDetailData = this.$store.getters.getMyNoteDetailData;
      return myNoteDetailData;
    },
  },
  mounted() {
    this.myNoteDetailData = this.$store.getters.getMyNoteDetailData;
    console.log(this.myNoteDetailData);
  },
};
</script>
